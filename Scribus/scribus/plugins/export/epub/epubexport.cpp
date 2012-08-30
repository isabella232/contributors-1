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
    - add the toc as soon as the styles based TOC is available (but not after the 1.6 release)
    - add the footnotes as soon cezary's code is in the trunk (http://blog.epubbooks.com/183/creating-an-epub-document)
    - images: get it from collect for output
	- add a checkbox to open the created epub with an application (sigil) and let it set in the preferences
	- generate the cover as a jpg with 1400px height (generate a png and convert it to jpg)
	- get the document info from the document settings!
	- cover:
		  <div>
			<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="100%" preserveAspectRatio="xMidYMid meet" version="1.1" viewBox="0 0 600 800" width="100%">
			  <image height="800" width="600" xlink:href="../Images/cover.jpeg"></image>
			</svg>
		  </div>
    - groups only containing shpaes (no text nor images) should be exported as svg

 ***************************************************************************/

#include <QDebug>

#include <QFile>
#include <QDataStream>
#include <QByteArray>

#include <QDomDocumentType>
#include <QDomImplementation>

#include <QList>
#include <QStringList>
#include <QtAlgorithms>

#include <QStack>

#include <QProgressBar>

#include "epubexport.h"
#include "scribusdoc.h"

#include "filezip.h"

#include "styles/styleset.h"
#include "styles/paragraphstyle.h"
#include "styles/charstyle.h"

#include "sclayer.h"
#include "scpage.h"
#include "scribus.h" // for ScribusMainWindow

/**
  * <?xml version="1.0" encoding="UTF-8" ?>
  * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
  * <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
  *   <head>
  *     <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8" />
  *     <title>Pride and Prejudice</title>
  *     <link rel="stylesheet" href="css/main.css" type="text/css" />
  *   </head>
  *   <body>
  *     ...
  *   </body>
  * </html>
 */
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
    // qDebug() << "layerNotPrintableList: " << layerNotPrintableList;

	QDomText text;
	QDomElement element;

	// TODO: move the epub document creation to its own method... and allow creating multiple docs!
    const QDomDocumentType doctype = (new QDomImplementation())->createDocumentType("html", "-//W3C//DTD XHTML 1.1//EN", "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd");
    epubDocument = QDomDocument(doctype);

	QDomProcessingInstruction xmlDeclaration = epubDocument.createProcessingInstruction("xml", "version=\"1.0\" encoding=\"utf-8\"");
	epubDocument.appendChild(xmlDeclaration);


	QDomElement epubRoot = epubDocument.createElement("html");
	epubRoot.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
	epubRoot.setAttribute("xml:lang", "en"); // TODO: correctly set the document language
	epubDocument.appendChild(epubRoot);

    QDomElement head = epubDocument.createElement("head");
    epubRoot.appendChild(head);

	element = epubDocument.createElement("meta");
	element.setAttribute("http-equiv", "Content-Type");
	element.setAttribute("content", "application/xhtml+xml; charset=utf-8");
	head.appendChild(element);

	element = epubDocument.createElement("title");
	head.appendChild(element);
	text = epubDocument.createTextNode("The book title"); // TODO: set book title
	element.appendChild(text);

	element = epubDocument.createElement("link");
	element.setAttribute("rel", "stylesheet");
	element.setAttribute("href", "css/style.css");
	element.setAttribute("type", "text/css");
	head.appendChild(element);

    epubBody = epubDocument.createElement("body");
    epubRoot.appendChild(epubBody);
}

EPUBexport::~EPUBexport()
{
}

bool EPUBexport::isDocItemTopLeftLessThan(const PageItem *docItem1, const PageItem *docItem2)
{
    return (docItem1->gXpos < docItem2->gXpos) ||
           ((docItem1->gXpos == docItem2->gXpos) && (docItem1->gYpos < docItem2->gYpos));
}

bool EPUBexport::doExport( QString filename, EPUBExportOptions &Opts )
{
	Options = Opts;
    QString targetFile = filename;
	QString targetDirectory = "/tmp/test/"; // FIXME: remove this!!!!
	/*
	if (!targetDirectory.endsWith("/"))
		targetDirectory += "/";
    qDebug() << "targetDirectory: " << targetDirectory;
	*/

	// QString targetFile = "/tmp/test.epub"; // FIXME: remove this!!!!
	targetFile = "/tmp/"+targetFile;
	epubFile = new FileZip(targetFile);
	epubFile->create();

	exportMimetype();
	exportContainer();

    exportCSS();

    int n, m;
    n = m_Doc->DocPages.count();
    // qDebug() << "n: " << n;
    QVector< QList<PageItem*> > itemList(n);
    m = m_Doc->DocItems.count();
    // qDebug() << "m: " << m;
    PageItem* docItem = NULL;
    for (int i = 0; i < m; ++i )
    {
        docItem = m_Doc->DocItems[i];
        // qDebug() << "i: " << i;
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
                addTextToDOM(docItem);
            }
            else if (docItem->asImageFrame())
            {
                qDebug() << "image frame: ";
                addImageToDOM(docItem);
                addImageToEPUB(docItem);
            }
        }
    }
    m_Doc->scMW()->mainWindowProgressBar->setValue(mm);
    m_Doc->scMW()->setStatusBarInfoText("");

	exportContent();
	exportNCX();
	exportOPF();

	epubFile->close();

	return true;
}

bool EPUBexport::exportContent()
{
    QString filename = targetDirectory + "OEBPS/chapter.xhtml";

	epubFile->add("OEBPS/chapter.xhtml", epubDocument.toString(), true);

	return true;
}

/**
  * add mimetype to the current epub file
  * The mimetype file must be a text document in ASCII that contains the string application/epub+zip.
  * It must also be uncompressed, unencrypted, and the first file in the ZIP archive.
  */
bool EPUBexport::exportMimetype()
{
	epubFile->add("mimetype", "application/epub+zip", false);
	return true;
}

/**
  * add META-INF/container.xml to the current epub file
  * <?xml version="1.0" encoding="UTF-8" ?>
  * <container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container">
  *   <rootfiles>
  * 	<rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/>
  *   </rootfiles>
  * </container>
  */ 
bool EPUBexport::exportContainer()
{
	QDomDocument xmlDocument = QDomDocument();
	QDomElement element;

	QDomProcessingInstruction xmlDeclaration = xmlDocument.createProcessingInstruction("xml", "version=\"1.0\" encoding=\"utf-8\"");
	xmlDocument.appendChild(xmlDeclaration);

	QDomElement xmlRoot = xmlDocument.createElement("container");
	xmlRoot.setAttribute("version", "1.0");
	xmlRoot.setAttribute("xmlns", "urn:oasis:names:tc:opendocument:xmlns:container");
	xmlDocument.appendChild(xmlRoot);

	QDomElement rootfiles = xmlDocument.createElement("rootfiles");
	xmlRoot.appendChild(rootfiles);

	element = xmlDocument.createElement("rootfile");
	element.setAttribute("full-path", "OEBPS/content.opf");
	element.setAttribute("media-type", "application/oebps-package+xml");
	rootfiles.appendChild(element);

	epubFile->add("META-INF/container.xml", xmlDocument.toString(), true);

	return true;
}

/**
  * add OEBPS/css/style.css to the current epub file
  */ 
bool EPUBexport::exportCSS()
{
    int n = 0;
	QString wr = QString();

    const StyleSet<ParagraphStyle>* paragraphStyles = & m_Doc->paragraphStyles();
    n = paragraphStyles->count();
    // qDebug() << "n pstyle: " << n;
    for (int i = 0; i < n; ++i )
    {
        // for a list of properties:  grep -r "paragraphStyle()" . | vim -
        // for a list of properties:  grep -r "charStyle()" . | vim -
        // see fileloader/scribus150format/scribus150format_save.cpp
        ParagraphStyle paragraphStyle = (*paragraphStyles)[i];
        CharStyle charStyle = paragraphStyle.charStyle();
        wr += paragraphStyle.name().replace(' ', '_') + "{\n";
        // qDebug() << "style name: " << paragraphStyle.name();
        // qDebug() << "style alignment: " << paragraphStyle.alignment();
        // qDebug() << "style font: " << charStyle.font().scName();
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
    // qDebug() << "n cstyle: " << n;
    for (int i = 0; i < n; ++i )
    {
        CharStyle charStyle = (*charStyles)[i];
        wr += charStyle.name().replace(' ', '_') + "{\n";
        // qDebug() << "style name: " << charStyle.name();
        // qDebug() << "style font: " << charStyle.font().scName();
        wr += "    font-size:" + QString::number(charStyle.fontSize() / 10) + "pt;\n";
        // qDebug() << "style font size: " << charStyle.fontSize();
        wr += "}\n";
    }

	epubFile->add("OEBPS/css/style.css", wr, true);

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

/**
  * add OEBPS/toc.ncx to the current epub file
  * <?xml version="1.0" encoding="UTF-8"?>
  * <!DOCTYPE ncx PUBLIC "-//NISO//DTD ncx 2005-1//EN"
  * "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd">
  * <ncx version="2005-1" xml:lang="en" xmlns="http://www.daisy.org/z3986/2005/ncx/">
  *   <head>
  *     <meta name="dtb:uid" content="123456789X"/> <!-- same as in .opf -->
  *     <meta name="dtb:depth" content="1"/> <!-- 1 or higher -->
  *     <meta name="dtb:totalPageCount" content="0"/> <!-- must be 0 -->
  *     <meta name="dtb:maxPageNumber" content="0"/> <!-- must be 0 -->
  *   </head>
  *   <docTitle>
  *     <text>Pride and Prejudice</text>
  *   </docTitle>
  *   <docAuthor>
  *     <text>Austen, Jane</text>
  *   </docAuthor>
  *   <navMap>
  *     <navPoint class="chapter" id="chapter1" playOrder="1">
  *       <navLabel><text>Chapter 1</text></navLabel>
  *       <content src="chapter1.xhtml"/>
  *     </navPoint>
  *   </navMap>
  * </ncx>
  */ 
bool EPUBexport::exportNCX()
{
	QDomElement element;
	QDomElement elementText;
	QDomText text;

    const QDomDocumentType doctype = (new QDomImplementation())->createDocumentType("ncx", "-//NISO//DTD ncx 2005-1//EN", "http://www.daisy.org/z3986/2005/ncx-2005-1.dtd");
    QDomDocument xmlDocument = QDomDocument(doctype);

	QDomProcessingInstruction xmlDeclaration = xmlDocument.createProcessingInstruction("xml", "version=\"1.0\" encoding=\"utf-8\"");
	xmlDocument.appendChild(xmlDeclaration);


	QDomElement ncx = xmlDocument.createElement("ncx");
	ncx.setAttribute("version", "2005-1");
	ncx.setAttribute("xml:lang", "en"); // TODO: correctly set the document language
	ncx.setAttribute("xmlns", "http://www.daisy.org/z3986/2005/ncx/");
	xmlDocument.appendChild(ncx);

    QDomElement head = xmlDocument.createElement("head");
    ncx.appendChild(head);

	element = xmlDocument.createElement("meta");
	element.setAttribute("name", "dtb:uid");
	element.setAttribute("content", "123456789X");  // same as in .odf // TODO: set it to the correct value
	head.appendChild(element);

	element = xmlDocument.createElement("meta");
	element.setAttribute("name", "dtb:depth");
	element.setAttribute("content", "1");  // 1 or higher // TODO: set it to the correct value
	head.appendChild(element);

	element = xmlDocument.createElement("meta");
	element.setAttribute("name", "dtb:totalPageCount");
	element.setAttribute("content", "0");  // must be 0
	head.appendChild(element);

	element = xmlDocument.createElement("meta");
	element.setAttribute("name", "dtb:maxPageNumber");
	element.setAttribute("content", "0"); // must be 0
	head.appendChild(element);

    element = xmlDocument.createElement("docTitle");
    ncx.appendChild(element);
	elementText = xmlDocument.createElement("text");
	element.appendChild(elementText);
	text = xmlDocument.createTextNode("The book title"); // TODO: set book title
	elementText.appendChild(text);

    element = xmlDocument.createElement("docAuthor");
    ncx.appendChild(element);
	elementText = xmlDocument.createElement("text");
	element.appendChild(elementText);
	text = xmlDocument.createTextNode("The book author"); // TODO: set book author
	elementText.appendChild(text);

	element = xmlDocument.createElement("navMap");
	ncx.appendChild(element);

	// TODO: iterate through the chapters

	QDomElement nav = xmlDocument.createElement("navPoint");
	nav.setAttribute("class", "chapter");
	nav.setAttribute("id", "chapter1"); // TODO: set it correctly
	nav.setAttribute("playOrder", "1"); // TODO: set it correctly
	element.appendChild(nav);

	element = xmlDocument.createElement("navLabel");
	nav.appendChild(element);
	elementText = xmlDocument.createElement("text");
	element.appendChild(elementText);
	text = xmlDocument.createTextNode("Chapter 1"); // TODO: set chapter title
	elementText.appendChild(text);

	element = xmlDocument.createElement("content");
	element.setAttribute("src", "chapter.xhtml"); // TODO: set the chapter file
	nav.appendChild(element);

	epubFile->add("OEBPS/toc.ncx", xmlDocument.toString(), true);

	return true;
}

/**
  * add OEBPS/content.opf to the current epub file
  * The OPF file, traditionally named content.opf, houses the EPUB book's metadata,
  * file manifest, and linear reading order.
  * <?xml version="1.0"?>
  * <package version="2.0" xmlns="http://www.idpf.org/2007/opf" unique-identifier="BookId">
  *   <metadata xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:opf="http://www.idpf.org/2007/opf">
  *     <dc:title>Pride and Prejudice</dc:title>
  *     <dc:language>en</dc:language>
  *     <dc:identifier id="BookId" opf:scheme="ISBN">123456789X</dc:identifier>
  *     <dc:creator opf:file-as="Austen, Jane" opf:role="aut">Jane Austen</dc:creator>
  *   </metadata>
  *   <manifest>
  *     <item id="chapter1" href="chapter1.xhtml" media-type="application/xhtml+xml"/>
  *     <item id="stylesheet" href="style.css" media-type="text/css"/>
  *     <item id="ch1-pic" href="ch1-pic.png" media-type="image/png"/>
  *     <item id="myfont" href="css/myfont.otf" media-type="application/x-font-opentype"/>
  *     <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/>
  *   </manifest>
  *   <spine toc="ncx">
  *     <itemref idref="chapter1" />
  *   </spine>
  *   <guide>
  *     <reference type="loi" title="List Of Illustrations" href="appendix.html#figures" />
  *   </guide>
  * </package>
  */
bool EPUBexport::exportOPF()
{
	QDomDocument xmlDocument = QDomDocument();
	QDomElement element;
	QDomText text;

	QDomProcessingInstruction xmlDeclaration = xmlDocument.createProcessingInstruction("xml", "version=\"1.0\"");
	xmlDocument.appendChild(xmlDeclaration);

	QDomElement xmlRoot = xmlDocument.createElement("package");
	xmlRoot.setAttribute("version", "2.0");
	xmlRoot.setAttribute("xmlns", "http://www.idpf.org/2007/opf");
	xmlRoot.setAttribute("unique-identifier", "BookId");
	xmlDocument.appendChild(xmlRoot);

	QDomElement metadata = xmlDocument.createElement("metadata");
	metadata.setAttribute("xmlns:dc", "http://purl.org/dc/elements/1.1/");
	metadata.setAttribute("xmlns:opf", "http://www.idpf.org/2007/opf");
	xmlRoot.appendChild(metadata);

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

	element = xmlDocument.createElement("dc:creator");
	element.setAttribute("opf:file-as", "Author, Name"); // TODO: set author
	element.setAttribute("opf:role", "aut");
	text = xmlDocument.createTextNode("Name Author"); // TODO: set author
	element.appendChild(text);
	metadata.appendChild(element);

	QDomElement manifest = xmlDocument.createElement("manifest");
	xmlRoot.appendChild(manifest);

	// TODO: dynamically add the chapters
	element = xmlDocument.createElement("item");
	element.setAttribute("id", "chapter"); // TODO: set chapter name
	element.setAttribute("href", "chapter.xhtml");
	element.setAttribute("media-type", "application/xhtml+xml");
	manifest.appendChild(element);

	element = xmlDocument.createElement("item");
	element.setAttribute("id", "stylesheet");
	element.setAttribute("href", "css/style.css");
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
	xmlRoot.appendChild(spine);

	// TODO: dynamically add the chapters
	element = xmlDocument.createElement("itemref");
	element.setAttribute("idref", "chapter"); // TODO: set chapter name
	spine.appendChild(element);

	QDomElement guide = xmlDocument.createElement("guide");
	xmlRoot.appendChild(guide);

	// TODO: what goes into the reference?
	/*
	element = xmlDocument.createElement("reference");
	element.setAttribute("type", "loi");
	element.setAttribute("title", "List of Illustrations");
	element.setAttribute("href", "appendix.html#figures");
	manifest.appendChild(element);
	*/

	epubFile->add("OEBPS/content.opf", xmlDocument.toString(), true);

	return true;
}

void EPUBexport::addTextToDOM(PageItem* docItem)
{
    if ((docItem->prevInChain() == NULL) && (docItem->itemText.length() > 0))
    {
        // cf. short-words/parse.cpp
        // cf. Scribus150Format::writeITEXTs() for getting the local formatting
        // in plugins/fileloader/scribus150format/scribus150format_save.cpp
        initOfRuns(docItem);
        int n = nrOfRuns();
        QString content = docItem->itemText.text(0, docItem->itemText.length());
        // qDebug() << "content: " << content;
        QDomElement element;
        QStack <QDomElement> elementCurrent;
        QString paragraphStyleName;
        QString characterStyleName;
        QString run_text;
		bool hasCharacterStyle;
        for (int i = 0; i < n; i++) {
            // use QString mid() to get substrings...
            EPUBExportRuns run = runs[i];
            // qDebug() << "run.pos:" << run.pos;
            // qDebug() << "run.length:" << run.length;
            // qDebug() << "run.type:" << run.type;
			hasCharacterStyle = false;

            if (run.type == 'p') {
				while (!elementCurrent.isEmpty())
					elementCurrent.pop();
                paragraphStyleName = docItem->itemText.paragraphStyle(run.pos + 1).parent();
                // qDebug() << "p paragraphStyle: " << paragraphStyleName;
                element = epubDocument.createElement("p");
                element.setAttribute("class", paragraphStyleName);
                epubBody.appendChild(element);
                elementCurrent.push(element);

            }

			element = epubDocument.createElement("span");

			characterStyleName = docItem->itemText.charStyle(run.pos + 1).displayName();
			// qDebug() << "p characterstyle: " << characterStyleName;

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
			// qDebug() << "run text: " << run_text;
            QDomText t = epubDocument.createTextNode(run_text);
			// qDebug() << "tag name: " << element.tagName();

			if (hasCharacterStyle) {
				elementCurrent.top().appendChild(element);
				element.appendChild(t);
			}
			else
			{
				elementCurrent.top().appendChild(t);
			}
            // run_text = subString(content, run.pos, run.length);
			// qDebug() << "next round ";
            // lineStart += line.length() + 1;
        }
    }
}

void EPUBexport::addImageToDOM(PageItem* docItem)
{
	QString filename(docItem->Pfile);
	qDebug() << "image file" << filename;
	if (filename != "")
	{
		// test extension
		// add the image to the dom
		// copy the image into the zip
	}
}

void EPUBexport::addImageToEPUB(PageItem* docItem)
{
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
    // qDebug() << "runs: " << runs;
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
