/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

/***************************************************************************
                          epubexport.cpp  -  description
                             -------------------
    begin                : Thu Mar 29 15:16:41 CEST 2012
    copyright            : (C) 2012 by Ale Rimoldi
    email                : a.l.e@ideale.ch
	TODO:
	- mail to change shift-breakline to behave as <br> -> better compatibility with HTML;
	  current shift-newline can still be achieved with shift-newline+forced justified
      i've never seen used and it's only slightly more complicated than before.
      on the other hand cross production (import / export of html) is made much easier!
	- font sizes: 12 pt = 16px = 1 em = 100%
	- convert colors to rgb
	- for each section one file
	- detect lists (option = glyph to look for); if we're on a list retain the indent
	- export images:
	  - crop them
	  - for images where the resolution is defined, keep the size (in px???)
	- options:
	  - select directory where to put the ebook
	  - optionally define the directory where low resolution images are placed
	- define the condition under which a new span builds upon the current one or
	  replaces it. (as an example: if a font is defined and it does not change, build upon it)
	- keeping the colors of the text and the background of frames should be an option
	- what happens if a style name has a space in it? replace by _?
	- what happens if a char and a para style have the same name? always create a span to
	  apply the character style?
	- all files must have ASCII chars only (manage the clashes when renaming)
	- Your filenames have spaces or encoded characters. If your EPUB has any spaces in filenames, be sure the spaces are properly encoded in the EPUB manifest by using "%20" in their place. Filenames may not contain periods (“.”) other than to separate the filename from its extension.
	- workplan:
	  - create multiple html files, one per section
	  - check that the html files are epub compatible
	  - add the html files
	- get zlib.h, add it to the sources and use it to create the epub
	- get the document infos and put them into the epub
	- show the document infos in the export dialog

 ***************************************************************************/

#include <QDebug>

#include <QFile>
#include <QDataStream>
#include <QByteArray>

#include <QList>
#include <QStringList>
#include <QtAlgorithms>

#include <QStack>

#include <QProgressBar>

#include "epubexport.h"
#include "scribusdoc.h"

#include "styles/styleset.h"
#include "styles/paragraphstyle.h"
#include "styles/charstyle.h"

#include "sclayer.h"
#include "scpage.h"
#include "scribus.h" // for ScribusMainWindow

EPUBexport::EPUBexport( ScribusDoc* doc )
{
	m_Doc = doc;

	for (int i = 0; i < m_Doc->Layers.count(); i++)
    {
        ScLayer layer = m_Doc->Layers.at(i);
        // qDebug() << "layer.ID: " << layer.ID;
        // qDebug() << "layer.name: " << layer.Name;
        // qDebug() << "layer.isPrintable: " << layer.isPrintable;
        if (!layer.isPrintable)
            layerNotPrintableList.append(layer.ID);
    }
    qDebug() << "layerNotPrintableList: " << layerNotPrintableList;

	epubdocument = QDomDocument("svgdoc");
	QString st = "<html></html>";
	epubdocument.setContent(st);
	epubroot = epubdocument.documentElement();

    epubbody = epubdocument.createElement("body");
    epubroot.appendChild(epubbody);
}

EPUBexport::~EPUBexport()
{
}

bool EPUBexport::isDocItemTopLeftLessThan(const PageItem *docItem1, const PageItem *docItem2)
{
    return (docItem1->gXpos < docItem2->gXpos) ||
           ((docItem1->gXpos == docItem2->gXpos) && (docItem1->gYpos < docItem2->gYpos));
}

bool EPUBexport::doExport( QString dirname, EPUBExportOptions &Opts )
{
	Options = Opts;
    targetDirectory = dirname;
	if (!targetDirectory.endsWith("/"))
		targetDirectory += "/";
    qDebug() << "targetDirectory: " << targetDirectory;

	// create the directories
	QStringList directories;
	directories.append(targetDirectory + "META-INF/");
	directories.append(targetDirectory + "OEBPS/");
	directories.append(targetDirectory + "OEBPS/css/");
	for (int i = 0; i < directories.count(); ++i)
	{
		QDir dir(directories[i]);
		if (dir.exists()) continue;
		
		bool created = dir.mkpath(directories[i]);
		if (!created)
		{
			qDebug() << tr("Cannot create directory:\n%1").arg(directories[i]);
			// QMessageBox::warning(ScCore->primaryMainWindow(), CommonStrings::trWarning,
			                     // "<qt>" + tr("Cannot create directory:\n%1").arg(directories[i]) + "</qt>",
			                     // CommonStrings::tr_OK);
			return false;
		}
	}

	exportMimetype();
	exportContainer();


    int n, m;

    exportCSS();

    n = m_Doc->DocPages.count();
    qDebug() << "n: " << n;
    QVector< QList<PageItem*> > itemList(n);
    m = m_Doc->DocItems.count();
    qDebug() << "m: " << m;
    PageItem* docItem = NULL;
    for (int i = 0; i < m; ++i )
    {
        docItem = m_Doc->DocItems[i];
        qDebug() << "i: " << i;
		if (!docItem->printEnabled())
			continue;
        if (layerNotPrintableList.contains(docItem->LayerID))
            continue;
        itemList[docItem->OwnPage].append(docItem);
        
        qDebug() << "on page: " << docItem->OwnPage;
    }

    qDebug() << "itemList: " << itemList;

    m_Doc->scMW()->setStatusBarInfoText( tr("Exporting to EPUB"));
    m_Doc->scMW()->mainWindowProgressBar->setMaximum(m);
    int mm = 0;
    int jj = 0;
	QString content = QString();
    for (int i = 0; i < n; i++)
    {
        qSort(itemList[i].begin(), itemList[i].end(), EPUBexport::isDocItemTopLeftLessThan);

        mm = itemList[i].count();
        jj = jj + mm;

        m_Doc->scMW()->mainWindowProgressBar->setValue(jj);
        for (int j = 0; j < mm; j++) {
            docItem = itemList[i].at(j);
            if (docItem->asTextFrame())
            {
                /*
                //  example of use in svgexplugin.cpp 
                const CharStyle& charStyle(docItem->itemText.charStyle(0));
                qDebug() << "font size: " << charStyle.fontSize();
                */
                addTextItemToDOM(docItem);
            }
        }
    }
    m_Doc->scMW()->mainWindowProgressBar->setValue(mm);
    m_Doc->scMW()->setStatusBarInfoText("");

    QString filename = targetDirectory + "OEBPS/chapter.xhtml";

    QFile f(filename);
    if(!f.open(QIODevice::WriteOnly))
        return false;
	QString wr = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    wr += epubdocument.toString();
    QByteArray utf8wr = wr.toUtf8();
    QDataStream s(&f);
    s.writeRawData(utf8wr.data(), utf8wr.length());
    f.close();

	exportNCX();
	exportOPF();

	return true;
}

/**
  * The mimetype file must be a text document in ASCII that contains the string application/epub+zip.
  * It must also be uncompressed, unencrypted, and the first file in the ZIP archive.
  */
bool EPUBexport::exportMimetype()
{
    QString filename = targetDirectory + "mimetype";
    QFile f(filename);
    if(!f.open(QIODevice::WriteOnly))
        return false;

	QString wr = "application/epub+zip";

    QByteArray utf8wr = wr.toUtf8();
    QDataStream s(&f);
    s.writeRawData(utf8wr.data(), utf8wr.length());
    f.close();
	return true;
}

bool EPUBexport::exportContainer()
{
	QDomDocument xmlDocument = QDomDocument("svgdoc");
	QDomElement element;

	QString st = "<rootfiles></rootfiles>";
	xmlDocument.setContent(st);
	QDomElement xmlroot = xmlDocument.documentElement();

	element = xmlDocument.createElement("rootfile");
	element.setAttribute("full-path", "OEBPS/content.opf");
	element.setAttribute("media-type", "application/oebps-package+xml");
	xmlroot.appendChild(element);

	QString wr = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
	wr += "<container version=\"1.0\" xmlns=\"urn:oasis:names:tc:opendocument:xmlns:container\">";

    wr += xmlDocument.toString();

	wr += "</container>";

    QString filename = targetDirectory + "META-INF/container.xml";
    QFile f(filename);
    if(!f.open(QIODevice::WriteOnly))
        return false;

    QByteArray utf8wr = wr.toUtf8();
    QDataStream s(&f);
    s.writeRawData(utf8wr.data(), utf8wr.length());
    f.close();
	return true;
}

bool EPUBexport::exportCSS()
{
    int n = 0;
	QString wr = QString();

    const StyleSet<ParagraphStyle>* paragraphStyles = & m_Doc->paragraphStyles();
    n = paragraphStyles->count();
    qDebug() << "n pstyle: " << n;
    for (int i = 0; i < n; ++i )
    {
        // for a list of properties:  grep -r "paragraphStyle()" . | vim -
        // for a list of properties:  grep -r "charStyle()" . | vim -
        // see fileloader/scribus150format/scribus150format_save.cpp
        ParagraphStyle paragraphStyle = (*paragraphStyles)[i];
        CharStyle charStyle = paragraphStyle.charStyle();
        wr += paragraphStyle.name().replace(' ', '_') + "{\n";
        qDebug() << "style name: " << paragraphStyle.name();
        qDebug() << "style alignment: " << paragraphStyle.alignment();
        qDebug() << "style font: " << charStyle.font().scName();
        // line height: fixed (<- baseline) or auto
        // alignment
        // evt. tabs for lists
        // left right and first indents
        wr += "    font-size:" + QString::number(charStyle.fontSize() / 10) + "pt;\n";
        wr += "    padding-top:" + QString::number(paragraphStyle.gapBefore()) + "pt;\n";
        wr += "    padding-bottom:" + QString::number(paragraphStyle.gapAfter()) + "pt;\n";
        // paragraphStyle.hasDropCap()
		// paragraphStyle.dcCharStyleName();
		// paragraphStyle.dropCapOffset());

        // font family + style!
        // tracking and width space
        // underline
        // stroke
        // horizontal / vertical scaling
        // color

        // charStyle.name();
        // charStyle.parent();
        // charStyle.font().scName()
        // charStyle.fontSize() / 10.0
        // charStyle.features().join(" ")
        // charStyle.fillColor();
        // charStyle.fillShade();
        // charStyle.strokeColor();
        // charStyle.strokeShade();
        // charStyle.shadowXOffset() / 10.0
        // charStyle.shadowYOffset() / 10.0
        // charStyle.outlineWidth() / 10.0
        // charStyle.underlineOffset() / 10.0
        // charStyle.underlineWidth() / 10.0
        // charStyle.strikethruOffset() / 10.0
        // charStyle.strikethruWidth() / 10.0
        // charStyle.scaleH() / 10.0
        // charStyle.scaleV() / 10.0
        // charStyle.baselineOffset() / 10.0
        // charStyle.language();
        // qDebug() << "charStyle font size: " << charStyle.fontSize();
        wr += "}\n";
    }

    const StyleSet<CharStyle>* charStyles = & m_Doc->charStyles();
    n = charStyles->count();
    qDebug() << "n cstyle: " << n;
    for (int i = 0; i < n; ++i )
    {
        CharStyle charStyle = (*charStyles)[i];
        wr += charStyle.name().replace(' ', '_') + "{\n";
        qDebug() << "style name: " << charStyle.name();
        qDebug() << "style font: " << charStyle.font().scName();
        wr += "    font-size:" + QString::number(charStyle.fontSize() / 10) + "pt;\n";
        // qDebug() << "style font size: " << charStyle.fontSize();
        wr += "}\n";
    }

    QString filename = targetDirectory + "OEBPS/css/epub.css";
    QFile f(filename);
    if(!f.open(QIODevice::WriteOnly))
        return false;
    QByteArray utf8wr = wr.toUtf8();
    QDataStream s(&f);
    s.writeRawData(utf8wr.data(), utf8wr.length());
    f.close();
    
    return true;
    /*
	docu.writeAttribute("AUTHOR"      ,m_Doc->documentInfo().author());
	docu.writeAttribute("COMMENTS"    ,m_Doc->documentInfo().comments());
	docu.writeAttribute("KEYWORDS"    ,m_Doc->documentInfo().keywords());
	docu.writeAttribute("PUBLISHER",m_Doc->documentInfo().publisher());
	docu.writeAttribute("DOCDATE",m_Doc->documentInfo().date());
	docu.writeAttribute("DOCTYPE",m_Doc->documentInfo().type());
	docu.writeAttribute("DOCFORMAT",m_Doc->documentInfo().format());
	docu.writeAttribute("DOCIDENT",m_Doc->documentInfo().ident());
	docu.writeAttribute("DOCSOURCE",m_Doc->documentInfo().source());
	docu.writeAttribute("DOCLANGINFO",m_Doc->documentInfo().langInfo());
	docu.writeAttribute("DOCRELATION",m_Doc->documentInfo().relation());
	docu.writeAttribute("DOCCOVER",m_Doc->documentInfo().cover());
	docu.writeAttribute("DOCRIGHTS",m_Doc->documentInfo().rights());
	docu.writeAttribute("DOCCONTRIB",m_Doc->documentInfo().contrib());
	docu.writeAttribute("TITLE",m_Doc->documentInfo().title());
	docu.writeAttribute("SUBJECT",m_Doc->documentInfo().subject());
	docu.writeAttribute("VHOCH"  , m_Doc->typographicPrefs().valueSuperScript);
	docu.writeAttribute("VHOCHSC", m_Doc->typographicPrefs().scalingSuperScript);
	docu.writeAttribute("VTIEF"  , m_Doc->typographicPrefs().valueSubScript);
	docu.writeAttribute("VTIEFSC", m_Doc->typographicPrefs().scalingSubScript);
	docu.writeAttribute("VKAPIT" , m_Doc->typographicPrefs().valueSmallCaps);
	docu.writeAttribute("LANGUAGE", m_Doc->hyphLanguage());
     */
}

bool EPUBexport::exportNCX()
{
	return true;
}

/**
 * The OPF file, traditionally named content.opf, houses the EPUB book's metadata,
 * file manifest, and linear reading order.
 */
bool EPUBexport::exportOPF()
{
	QDomDocument xmlDocument = QDomDocument("svgdoc");
	QDomElement element;
	QDomText text;

	QDomProcessingInstruction xmlDeclaration = xmlDocument.createProcessingInstruction("xml", "version=\"1.0\"");
	xmlDocument.appendChild(xmlDeclaration);

	QDomElement xmlroot = xmlDocument.createElement("package");
	xmlroot.setAttribute("version", "2.0");
	xmlroot.setAttribute("xmlns", "http://www.idpf.org/2007/opf");
	xmlroot.setAttribute("unique-identifier", "BookId");
	xmlDocument.appendChild(xmlroot);

	QDomElement metadata = xmlDocument.createElement("metadata");
	metadata.setAttribute("xmlns:dc", "http://purl.org/dc/elements/1.1/");
	metadata.setAttribute("xmlns:opf", "http://www.idpf.org/2007/opf");
	xmlroot.appendChild(metadata);

	element = xmlDocument.createElement("dc:title");
	text = xmlDocument.createTextNode("The book title"); // TODO: set book title
	element.appendChild(text);
	metadata.appendChild(element);

	element = xmlDocument.createElement("dc:language");
	text = xmlDocument.createTextNode("en"); // TODO: set langauge
	element.appendChild(text);
	metadata.appendChild(element);

	// <URN> ::= "urn:" <NID> ":" <NSS>
	// <dc:identifier id="bookid">urn:uuid:ba151a94-2581-dbd1-144a-3ae968f738c7</dc:identifier>
	// <dc:identifier id="BookId" opf:scheme="ISBN">123456789X</dc:identifier>
	element = xmlDocument.createElement("dc:identifier");
	element.setAttribute("id", "BookId");
	element.setAttribute("opf:scheme", "ISBN"); // http://en.wikipedia.org/wiki/Uniform_resource_name
	text = xmlDocument.createTextNode("123456789X"); // TODO: set isbn or optionally to Quuid?
	element.appendChild(text);
	metadata.appendChild(element);

	element = xmlDocument.createElement("dc:createTextNode");
	element.setAttribute("opf:file-as", "Author, Name"); // TODO: set author
	element.setAttribute("opf:role", "aut");
	text = xmlDocument.createTextNode("Name Author"); // TODO: set author
	element.appendChild(text);
	metadata.appendChild(element);

	QDomElement manifest = xmlDocument.createElement("manifest");
	xmlroot.appendChild(manifest);

	// TODO: dynamically add the chapters
	element = xmlDocument.createElement("item");
	element.setAttribute("id", "chapter"); // TODO: set chapter name
	element.setAttribute("href", "chapter.xhtml");
	element.setAttribute("media-type", "appendChild/xhtml+xml");
	manifest.appendChild(element);

	element = xmlDocument.createElement("item");
	element.setAttribute("id", "stylesheet");
	element.setAttribute("href", "style.css");
	element.setAttribute("media-type", "text/css");
	manifest.appendChild(element);

	// TODO: dynamically add the images
	// <item id="ch1-pic" href="ch1-pic.png" media-type="image/png"/>

	// TODO: dynamically add the fonts
	// <item id="myfont" href="css/myfont.otf" media-type="application/x-font-opentype"/>

	element = xmlDocument.createElement("item");
	element.setAttribute("id", "ncx"); // TODO: set chapter name
	element.setAttribute("href", "toc.ncx");
	element.setAttribute("media-type", "application/x-dtbncx+xml");
	manifest.appendChild(element);

	QDomElement spine = xmlDocument.createElement("spine");
	spine.setAttribute("toc", "ncx");
	xmlroot.appendChild(manifest);

	// TODO: dynamically add the chapters
	element = xmlDocument.createElement("itemref");
	element.setAttribute("idref", "chapter"); // TODO: set chapter name
	manifest.appendChild(element);

	QDomElement guide = xmlDocument.createElement("guide");
	xmlroot.appendChild(manifest);

	// TODO: what goes into the reference?
	/*
	element = xmlDocument.createElement("reference");
	element.setAttribute("type", "loi");
	element.setAttribute("title", "List of Illustrations");
	element.setAttribute("href", "appendix.html#figures");
	manifest.appendChild(element);
	*/

	QString wr = xmlDocument.toString();

    QString filename = targetDirectory + "OEBPS/content.opf";
    QFile f(filename);
    if(!f.open(QIODevice::WriteOnly))
        return false;

    QByteArray utf8wr = wr.toUtf8();
    QDataStream s(&f);
    s.writeRawData(utf8wr.data(), utf8wr.length());
    f.close();
	return true;
}

void EPUBexport::addTextItemToDOM(PageItem* docItem)
{
    if ((docItem->prevInChain() == NULL) && (docItem->itemText.length() > 0))
    {
        // cf. short-words/parse.cpp
        // cf. Scribus150Format::writeITEXTs() for getting the local formatting
        // in plugins/fileloader/scribus150format/scribus150format_save.cpp
        initOfRuns(docItem);
        int n = nrOfRuns();
        QString content = docItem->itemText.text(0, docItem->itemText.length());
        qDebug() << "content: " << content;
        QDomElement element;
        QStack <QDomElement> elementCurrent;
        QString paragraphStyleName;
        QString characterStyleName;
        QString run_text;
		bool hasCharacterStyle;
        for (int i = 0; i < n; i++) {
            // use QString mid() to get substrings...
            EPUBExportRuns run = runs[i];
            qDebug() << "run.pos:" << run.pos;
            qDebug() << "run.length:" << run.length;
            qDebug() << "run.type:" << run.type;
			hasCharacterStyle = false;

            if (run.type == 'p') {
				while (!elementCurrent.isEmpty())
					elementCurrent.pop();
                paragraphStyleName = docItem->itemText.paragraphStyle(run.pos + 1).parent();
                qDebug() << "p paragraphStyle: " << paragraphStyleName;
                element = epubdocument.createElement("p");
                element.setAttribute("class", paragraphStyleName);
                epubbody.appendChild(element);
                elementCurrent.push(element);

            }

			element = epubdocument.createElement("span");

			characterStyleName = docItem->itemText.charStyle(run.pos + 1).displayName();
			qDebug() << "p characterstyle: " << characterStyleName;

			if (characterStyleName != "")
			{
				element.setAttribute("class", characterStyleName);
				hasCharacterStyle = true;
			}

			if (run.type == 'f')
			{
				hasCharacterStyle = true;
			}

            run_text = content.mid(run.pos, run.length);
			qDebug() << "run text: " << run_text;
            QDomText t = epubdocument.createTextNode(run_text);
			qDebug() << "tag name: " << element.tagName();

			if (hasCharacterStyle) {
				elementCurrent.top().appendChild(element);
				element.appendChild(t);
			}
			else
			{
				elementCurrent.top().appendChild(t);
			}
            // run_text = subString(content, run.pos, run.length);
			qDebug() << "next round ";
            // lineStart += line.length() + 1;
        }
		/*
        for (int i = 0; i < n; i++) {
            // use QString mid() to get substrings...
            EPUBExportRuns run = runs[i];
            qDebug() << "run.pos:" << run.pos;
            qDebug() << "run.length:" << run.length;
            qDebug() << "run.type:" << run.type;

            if (run.type == 'p') {
                paragraphStyleName = docItem->itemText.paragraphStyle(run.pos + 1).parent();
                qDebug() << "p paragraphStyle: " << paragraphStyleName;
                element = epubdocument.createElement("p");
                element.setAttribute("class", paragraphStyleName);
                epubroot.appendChild(element);
                paragraph_current = element;
				QString characterStyleName = docItem->itemText.charStyle(run.pos + 1).displayName();
                qDebug() << "p characterstyle: " << characterStyleName;

            } else { // TODO: remove the else: the character should always be checked / done! ... but span should not always be added...
                element = epubdocument.createElement("span");
				QString characterStyleName = docItem->itemText.charStyle(run.pos + 1).displayName();
                qDebug() << "p characterstyle: " << characterStyleName;
				if (characterStyleName != "")
					element.setAttribute("class", characterStyleName);
                paragraph_current.appendChild(element); // TODO: only append if there is something to be added?
            }
            // run_text = subString(content, run.pos, run.length);
            run_text = content.mid(run.pos, run.length);
            QDomText t = epubdocument.createTextNode(run_text);
            element.appendChild(t);
            // lineStart += line.length() + 1;
        }
		*/
        /*
        QStringList lines = content.split( QChar(13), QString::SkipEmptyParts );
        // int sss = content.indexOf(SpecialChars::PARSEP);
        int lineStart = 0;
        foreach( QString line, lines ) {
            qDebug() << "lineStart: " << lineStart;
            // docItem->itemText.selected(lineStart);
            QString paragraphStyleName = docItem->itemText.paragraphStyle(lineStart+1).parent();
            // qDebug() << "p paragraphStyle: " << paragraphStyle.parent();
            qDebug() << "p paragraphStyle: " << paragraphStyleName;
            QDomElement element = epubdocument.createElement("p");
            element.setAttribute("class", paragraphStyleName);
            epubroot.appendChild(element);
            QDomText t = epubdocument.createTextNode(line);
            element.appendChild(t);
            lineStart += line.length() + 1;
        }
        */
    }
}

// @todo: use the text/storytext methods as soon as they are implemented
/*
 * read the runs beginnings and the number of runs in the text item
*/
void EPUBexport::initOfRuns(PageItem* docItem)
{
    runs.clear();
    // paragraph.clear();
	CharStyle lastStyle;
	int lastPos = 0;
    // inspired by Scribus150Format::writeITEXTs
    struct EPUBExportRuns runsItem;
    runsItem.pos = 0;
    runsItem.type = 'p';
    int n = docItem->itemText.length();
    if (n == 0) {
        runsItem.length = 0;
        runs.append(runsItem);
    } else {
        for(int i = 0; i < n; ++i)
        {
            const CharStyle& style1(docItem->itemText.charStyle(i));
            const QChar ch = docItem->itemText.text(i);

            /*
            // store formatting struct for:
            // - current paragraph style
            // - current character style
            // - sum of current paragraph and char style
            // - currentformatting
            // store last insterted formatting string (<strong><em><span style="font-size:12px");
            // --> struct EPUBExportCurrentFormatting
            */
            
            // if there is a paragraph change or the formatting has changed
            if (
                ch == SpecialChars::PARSEP ||
                ch == SpecialChars::LINEBREAK ||
                ch == SpecialChars::COLBREAK ||
                ch == SpecialChars::FRAMEBREAK
            )
            {
                runsItem.length = i - runsItem.pos;
                runs.append(runsItem);
                runsItem.pos = i;
                runsItem.type = 'p';
            }
            if (
                style1 != lastStyle
            )
            {
                // something new, write pending chars
                if  (i - lastPos > 0)
                {
                    // docu.writeEmptyElement("ITEXT");
                    /*if (item->asPathText()) // seems to cause problems when loading pathtext elements
                        putCStylePT(docu, lastStyle);
                    else*/
                        // putCStyle(docu, lastStyle);
                    // docu.writeAttribute("CH", textWithSoftHyphens(item->itemText, lastPos, i));
                }
                // runs.append(i);
                runsItem.length = i - runsItem.pos;
                runs.append(runsItem);
                runsItem.pos = i;
                runsItem.type = 'f';
                // runs.insert(i, 'f');
                lastStyle = style1;
                lastPos = i;
            }
            if (
                ch == SpecialChars::NBHYPHEN ||
                ch == SpecialChars::NBSPACE ||
                ch == SpecialChars::ZWNBSPACE ||
                ch == SpecialChars::ZWSPACE
            )
            {
            }
            // @todo: ignore the following chars
            if (
                ch == SpecialChars::OBJECT ||
                ch == SpecialChars::TAB ||
                ch == SpecialChars::PAGENUMBER ||
                ch == SpecialChars::PAGECOUNT ||
                ch.unicode() < 32 || 
                (0xd800 <= ch.unicode() && ch.unicode() < 0xe000) ||
                ch.unicode() == 0xfffe || ch.unicode() == 0xffff
            )
            {
            }

        }
        runsItem.length = n - runsItem.pos;
        runs.append(runsItem);
    }
    qDebug() << "runs: " << runs;
    // qDebug() << "paragraph: " << paragraph;
}

uint EPUBexport::nrOfRuns()
{
	return runs.count();
}

int EPUBexport::startOfRun(uint index)
{
	return index;
}

int EPUBexport::endOfRun(uint index)
{
	return index + 1;
}

QDebug operator<<(QDebug dbg, const QList<EPUBExportRuns> &v)
{
    for (int i = 0; i < v.length(); i++) {
        EPUBExportRuns r = v[i];
        dbg.nospace() << "(" << r.pos << ", " << r.type << ")";
    }
    return dbg.space();
}
