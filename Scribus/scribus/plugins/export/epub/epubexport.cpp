/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

/***************************************************************************
    begin                : Thu Mar 29 15:16:41 CEST 2012
    copyright            : (C) 2012 by Ale Rimoldi
    email                : a.l.e@ideale.ch

 ***************************************************************************/

#include <QDebug>

#include <QFile>
#include <QFileInfo>
#include <QDataStream>
#include <QByteArray>
#include <QBuffer> // for writing a QImage to a string (and then add it to the zip file)
#include <QImage> // for the cover

#include <QDomDocumentType>
#include <QDomImplementation>

#include <QList>
#include <QStringList>

#include <QUuid> // for generated the uuid if no isbn&co has been defined

#include <QProgressBar>

#include "epubexport.h"
#include "scribusdoc.h"
#include "scribuscore.h" // for reading the gui language

#include "filezip.h"

#include "styles/styleset.h"
#include "styles/paragraphstyle.h"
#include "styles/charstyle.h"

#include "sclayer.h"
#include "scpage.h"
#include "scribus.h" // for ScribusMainWindow
#include "util_formats.h" // for checking file extension
#include "documentinformation.h" // for filling the metadata

#include "util.h" // for parsing the list of pages (remove it when the function is moved to ScribusDoc)
#include "scribusstructs.h" // for getPageRect() remove it, it's moved to ScPage

#include "cmsettings.h" // for cropping the image to the frame


EpubExport::EpubExport(ScribusDoc* doc)
{
	this->doc = doc;
}

EpubExport::~EpubExport()
{
}

bool EpubExport::isDocItemTopLeftLessThan(const PageItem *docItem1, const PageItem *docItem2)
{
    return (docItem1->gXpos < docItem2->gXpos) ||
           ((docItem1->gXpos == docItem2->gXpos) && (docItem1->gYpos < docItem2->gYpos));
}

void EpubExport::doExport(EPUBExportOptions &Opts)
{
	Options = Opts; // what is this good for? (ale/20120901)

    qDebug() << "pageRange" << pageRange;
	readMetadata();
	readItems();

	targetFilename = "/tmp/"+targetFilename;
	qDebug() << "forcing the output of the .epub file to /tmp";
	epubFile = new FileZip(targetFilename);
	epubFile->create();

	exportMimetype();
	exportContainer();

    exportCover();

    exportCSS();

	exportXhtml();

	exportNCX();
	exportOPF();

	epubFile->close();
}

/**
 * read the metadata from the documentInfo() and ensure that all mandatory fields are filled.
 * some values may be written back to the document information
 */
void EpubExport::readMetadata()
{
	// read the document information
	documentMetadata = doc->documentInfo();
	// make sure that all mandatory fields are filled
	if (documentMetadata.title() == "")
		documentMetadata.setTitle(targetFilename);
	// TODO: if (documentMetadata.author() == "") // -> it's recommended not obligatory!
	// TODO: if (documentMetadata.authorSort() == "") // -> it's recommended not obligatory!
	if (documentMetadata.langInfo() == "")
		documentMetadata.setLangInfo(ScCore->getGuiLanguage());
	if (documentMetadata.langInfo() == "")
		documentMetadata.setLangInfo("en"); // scribus' default language is english (or rather en-GB?)
		// TODO: doc->hyphLanguage()); the current hyphenation language could be a better guess for the language
	// TODO: store the generated uuid in the scribus document information?
	if (documentMetadata.ident() == "")
		documentMetadata.setIdent("urn:uuid:"+QUuid::createUuid().toString().remove("{" ).remove("}" )); // Sigil/Misc/Utility.cpp -> Utility::CreateUUID()
	// TODO: store the generated date in the scribus document information?
	if (documentMetadata.date() == "")
		documentMetadata.setDate(QDate::currentDate().toString(Qt::ISODate));
}

/**
 * TODO:
 * add it as ScPage::getBleeds(const ScPage* page) and eventually remove/deprecate all the
 * ScribusDoc::getBleeds(...) methods.
 * Warning: in ScribusDoc there are also bleeds() methods that return the values without the facing
 * pages correction!
 */
MarginStruct EpubExport::getPageBleeds(const ScPage* page)
{
    MarginStruct result;
    doc->getBleeds(page, result);
    return result;
}

/**
 * TODO:
 * Add it as ScPage::getRect(const ScPage* page)
 * Eventually, rename to signify that it does not return xOffset, yOffset, ... but it adds the bleeds
 */
QRect EpubExport::getPageRect(const ScPage* page)
{
    MarginStruct bleeds = getPageBleeds(page);
    return QRect(
        static_cast<int>(page->xOffset() - bleeds.Left), // x
        static_cast<int>(page->yOffset() - bleeds.Top), // y
        static_cast<int>(page->width() + bleeds.Left + bleeds.Right), // w
        static_cast<int>(page->height()+ bleeds.Bottom + bleeds.Top) // h
    );
}

/**
 * Returns a list of ScPage where the item appears. If the item is fully ion the scratch space,
 * an empty vector is returned.
 * TODO:
 * - This (or a similar) method should replace the (very) similar calculations in
 *   ScribusDoc::fixItemPageOwner, ScribusDoc::OnPage and PDFLibCore::PDF_ProcessItem
 *   It should go to PageItem (or ScPage) and it should be cached in memory + eventually in the .SLA
 *   --> PageItem::getPages()
 *   (According to jghali OwnPage should only be used make sense of the coordinates of an item,
 *   which are stored in relation to its own page)
 */
QList<ScPage *> EpubExport::getPagesWithItem(PageItem* item)
{
    QList<ScPage *> result;

    // some woodoo adjustings
	if (item->isGroup())
		item->asGroupFrame()->adjustXYPosition();
	item->setRedrawBounding();

	double itemLineWidth = item->lineWidth();
    QRect pageRect;
    QRect itemRect = QRect(
        static_cast<int>(item->BoundingX - itemLineWidth / 2.0), // x
        static_cast<int>(item->BoundingY - itemLineWidth / 2.0), // y
        static_cast<int>(qMax(item->BoundingW + itemLineWidth, 1.0)), // w
        static_cast<int>(qMax(item->BoundingH + itemLineWidth, 1.0)) // h
    );

    bool fullyOnOwnPage = false;
    // First check if the element is fully on its OwnPage
    // OwnPage is an indicator of where the item could be, but it's not reliable.
    if (item->OwnPage > -1)
    {
        ScPage* page = doc->DocPages.at(item->OwnPage);
        if (getPageRect(page).contains(itemRect)) {
            result.append(page);
            fullyOnOwnPage = true;
        }
    }

    // If the item is not fully on the OwnPage, check on all pages (in the range)
    if (!fullyOnOwnPage)
    {
        // TODO: if creating the QRect is expensive, we can create a list of pages' QRects
        // before cycling through the items
        bool allPages = pageRange.isEmpty();
        int n = allPages ? doc->DocPages.count() : pageRange.count();
        for (int i = 0; i < n; ++i)
        {
            ScPage* page = doc->DocPages.at(allPages ? i : pageRange.at(i) - 1);
            if (getPageRect(page).intersects(itemRect))
                result.append(page);
            // TODO: we can use rect.intersected() to get a rectangle and calculate the area of the page
            // that has the biggest intersection and use it as the "main page";
            // or we can use the first page where the intersection occurs (two different uses)
        }
        // TODO: if OwnPage == -1 and a page has been found, fix OwnPage in the item
    }

    return result;
}

/**
 * go through the full items list in the document and add a reference of the printable ones
 * in a list sorted by page
 */
void EpubExport::readItems()
{
	for (int i = 0; i < doc->Layers.count(); i++)
    {
        ScLayer layer = doc->Layers.at(i);
        if (!layer.isPrintable)
            layerNotPrintableList.append(layer.ID);
    }

    int n = doc->DocPages.count();
    // qDebug() << "readItems n: " << n;
    itemList.resize(n);
    int m = doc->DocItems.count();
    // qDebug() << "readItems m: " << m;
    PageItem* docItem = NULL;
    for (int i = 0; i < m; ++i )
    {
        // qDebug() << "i: " << i;
        docItem = doc->DocItems[i];

		if (!docItem->printEnabled())
			continue;
        if (layerNotPrintableList.contains(docItem->LayerID))
            continue;

        // qDebug() << "own page: " << docItem->OwnPage;
        const QList<ScPage*> itemPages = getPagesWithItem(docItem);
        // qDebug() << "itemPages" << itemPages;
		//Item not on a page, ignore
        if (itemPages.empty())
			continue;
        itemList[itemPages.first()->pageNr()].append(docItem);
    }
    // qDebug() << "itemList: " << itemList;
}

/**
 * add the content of xhtmlDocument to the current epub file
 */
void EpubExport::addXhtml()
{
	EPUBExportXhtmlFile file;
	file.section = section;
	file.filename = QString("Section%1.xhtml").arg(section + 1, 4, 10, QChar('0'));
	// qDebug() << "file.filename" << file.filename;
	file.title = QString("Section %1").arg(section + 1, 4, 10, QChar('0')); // TODO: as soon as we have a TOC, take the title from the text
	// XXX: passing false to toString() would remove all indenting and line breaks (ale/20120917)
	epubFile->add("OEBPS/Text/" + file.filename, xhtmlDocument.toString(), true);
	xhtmlFile.append(file);

	struct EPUBExportContentItem contentItem;
	contentItem.id = file.filename;
	contentItem.href = "Text/" + file.filename;
	contentItem.mediaType = "application/xhtml+xml";
	contentItems.append(contentItem);
}

/**
  * add mimetype to the current epub file
  * The mimetype file must be a text document in ASCII that contains the string application/epub+zip.
  * It must also be uncompressed, unencrypted, and the first file in the ZIP archive.
  */
void EpubExport::exportMimetype()
{
	epubFile->add("mimetype", QString("application/epub+zip"), false);
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
void EpubExport::exportContainer()
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
}

QString EpubExport::getStylenameSanitized(QString stylename)
{
	return stylename.replace(' ', '_');
}

/**
 * create a cover as a png of the first page of the .sla
 * From the Sigil documentation:
 * - Image size should be 590 pixels wide x 750 pixels high
 * - Image resolution should be 72 pixels per inch (ppi) or higher
 * - Use color images, saved in RGB color space
 * - Image format can be JPEG, GIF, or PNG.
 * TODO:
 * - make sure that a cover.png image does not yet exist
 * - create an xhtml file with the cover?
 *   http://blog.threepress.org/2009/11/20/best-practices-in-epub-cover-images/
 */
void EpubExport::exportCover()
{
	QImage image = doc->view()->PageToPixmap(0, 750, false);

	QByteArray bytearray;
	QBuffer buffer(&bytearray);
	buffer.open(QIODevice::WriteOnly);
	image.save(&buffer, "PNG");
	// qDebug() << "image.size" << image.size();

	epubFile->add("OEBPS/Images/cover.png", bytearray, false);

	struct EPUBExportContentItem contentItem;
	contentItem.id = "cover.png";
	contentItem.href = "Images/cover.png";
	contentItem.mediaType = "image/png";
	contentItems.append(contentItem);
}
/**
  * add OEBPS/Styles/style.css to the current epub file
  */ 
void EpubExport::exportCSS()
{
    int n = 0;
	QString wr = QString();

    const StyleSet<ParagraphStyle>* paragraphStyles = & doc->paragraphStyles();
    n = paragraphStyles->count();
    // qDebug() << "n pstyle: " << n;
    for (int i = 0; i < n; ++i )
    {
        // for a list of properties:  grep -r "paragraphStyle()" . | vim -
        // for a list of properties:  grep -r "charStyle()" . | vim -
        // see fileloader/scribus150format/scribus150format_save.cpp
        ParagraphStyle paragraphStyle = (*paragraphStyles)[i];
        CharStyle charStyle = paragraphStyle.charStyle();
        wr += "p." + getStylenameSanitized(paragraphStyle.name()) + "{\n";
        // qDebug() << "style name: " << paragraphStyle.name();
        // qDebug() << "style alignment: " << paragraphStyle.alignment();
        // qDebug() << "style font: " << charStyle.font().scName();
        // line height: fixed (<- baseline) or auto
        // alignment
        // evt. tabs for lists
        // left right and first indents
        wr += "    padding-top:" + QString::number(paragraphStyle.gapBefore()) + "pt;\n";
        wr += "    padding-bottom:" + QString::number(paragraphStyle.gapAfter()) + "pt;\n";

        wr += "    font-size:" + QString::number(charStyle.fontSize() / 10) + "pt;\n";
        QString fontname = charStyle.font().scName();
		// as long as bold and italic are not in the features list, get the property
		// by guessing from the font name (ale/20120916)
		// rule.pattern = QRegExp("[\\\\|\\<|\\>|\\=|\\!|\\+|\\-|\\*|\\/|\\%]+");
		QRegExp regexpItalic("(\\bitalic\\b)");
		regexpItalic.setCaseSensitivity(Qt::CaseInsensitive);
		if (regexpItalic.indexIn(fontname) >= 0)
		{
			wr += "    font-variant:italic;\n";
		}
		QRegExp regexpBold("(\\bbold\\b)");
		regexpBold.setCaseSensitivity(Qt::CaseInsensitive);
		if (regexpBold.indexIn(fontname) >= 0)
		{
			wr += "    font-weight:bold;\n";
		}

		QStringList featureList = charStyle.features();
		QStringList::ConstIterator it;
		for (it = featureList.begin(); it != featureList.end(); ++it)
		{
			QString feature = it->trimmed();
			// qDebug() << "feature" << feature;
			if ((feature == CharStyle::UNDERLINE) || (feature == CharStyle::UNDERLINEWORDS))
				wr += "    text-decoration:underline;\n";
			else if (feature == CharStyle::STRIKETHROUGH)
				wr += "    text-decoration:line-through;\n";
		}

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

    const StyleSet<CharStyle>* charStyles = & doc->charStyles();
    n = charStyles->count();
    // qDebug() << "n cstyle: " << n;
    for (int i = 0; i < n; ++i )
    {
        CharStyle charStyle = (*charStyles)[i];
        wr += "span." + getStylenameSanitized(charStyle.name()) + "{\n";
        // qDebug() << "style name: " << charStyle.name();
        // qDebug() << "style font: " << charStyle.font().scName();
        wr += "    font-size:" + QString::number(charStyle.fontSize() / 10) + "pt;\n";
        // qDebug() << "style font size: " << charStyle.fontSize();
        wr += "}\n";
    }

	epubFile->add("OEBPS/Styles/style.css", wr, true);

	struct EPUBExportContentItem contentItem;
	contentItem.id = "stylesheet";
	contentItem.href = "Styles/style.css";
	contentItem.mediaType = "text/css";
	contentItems.append(contentItem);

    /*
	docu.writeAttribute("VHOCH"  , doc->typographicPrefs().valueSuperScript);
	docu.writeAttribute("VHOCHSC", doc->typographicPrefs().scalingSuperScript);
	docu.writeAttribute("VTIEF"  , doc->typographicPrefs().valueSubScript);
	docu.writeAttribute("VTIEFSC", doc->typographicPrefs().scalingSubScript);
	docu.writeAttribute("VKAPIT" , doc->typographicPrefs().valueSmallCaps);
	docu.writeAttribute("LANGUAGE", doc->hyphLanguage());
     */
}

/**
  * create the xhtml document structure and give access to xhtmlBody where addText and addImage
  * will add the content
  *
  * <?xml version="1.0" encoding="UTF-8" ?>
  * <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
  * <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en">
  *   <head>
  *     <meta http-equiv="Content-Type" content="application/xhtml+xml; charset=utf-8" />
  *     <title>Pride and Prejudice</title>
  *     <link rel="stylesheet" href="css/main.css" type="text/css" />
  *   </head>
  *   <body>
  *   </body>
  * </html>
  */
void EpubExport::initializeXhtml()
{
	QDomText text;
	QDomElement element;

    const QDomDocumentType doctype = (new QDomImplementation())->createDocumentType("html", "-//W3C//DTD XHTML 1.1//EN", "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd");
    xhtmlDocument = QDomDocument(doctype);

	QDomProcessingInstruction xmlDeclaration = xhtmlDocument.createProcessingInstruction("xml", "version=\"1.0\" encoding=\"utf-8\"");
	xhtmlDocument.appendChild(xmlDeclaration);


	QDomElement xhtmlRoot = xhtmlDocument.createElement("html");
	xhtmlRoot.setAttribute("xmlns", "http://www.w3.org/1999/xhtml");
	xhtmlRoot.setAttribute("xml:lang", documentMetadata.langInfo());
	xhtmlDocument.appendChild(xhtmlRoot);

    QDomElement head = xhtmlDocument.createElement("head");
    xhtmlRoot.appendChild(head);

	element = xhtmlDocument.createElement("meta");
	element.setAttribute("http-equiv", "Content-Type");
	element.setAttribute("content", "application/xhtml+xml; charset=utf-8");
	head.appendChild(element);

	element = xhtmlDocument.createElement("title");
	head.appendChild(element);
	text = xhtmlDocument.createTextNode(documentMetadata.title());
	element.appendChild(text);

	element = xhtmlDocument.createElement("link");
	element.setAttribute("rel", "stylesheet");
	element.setAttribute("href", "../Styles/style.css");
	element.setAttribute("type", "text/css");
	head.appendChild(element);

    xhtmlBody = xhtmlDocument.createElement("body");
    xhtmlRoot.appendChild(xhtmlBody);
}

void EpubExport::exportXhtml()
{
	initializeXhtml();

    int n = doc->DocPages.count();
    int m = doc->DocItems.count();
	if (m == 0)
	{
		addXhtml();
		return;
	}

    doc->scMW()->setStatusBarInfoText(tr("Exporting to EPUB"));
    doc->scMW()->mainWindowProgressBar->setMaximum(m);
    int mm = 0;
    int jj = 0;
	QString content = QString();
    PageItem* docItem;
	section = 0;
    for (int i = 0; i < n; i++)
    {
		// TODO: if the page is on a new section, create a new file
		if (itemList[i].count() == 0)
			continue;
		int sectionId = doc->getSectionKeyForPageIndex(itemList[i][0]->OwnPage);
		// TODO: create the file as Section0001 ... check the name from sigil
        // qDebug() << "sectionId" << sectionId;
        // qDebug() << "section" << section;
		if (section < sectionId)
		{
			addXhtml();
			section = sectionId;
			initializeXhtml();
		}
        qSort(itemList[i].begin(), itemList[i].end(), EpubExport::isDocItemTopLeftLessThan);

        mm = itemList[i].count();
        jj = jj + mm;

        doc->scMW()->mainWindowProgressBar->setValue(jj);
        for (int j = 0; j < mm; j++) {
            docItem = itemList[i].at(j);
            if (docItem->asTextFrame())
            {
                addText(docItem);
            }
            else if (docItem->asImageFrame())
            {
                addImage(docItem);
            }
        }
    }
    doc->scMW()->mainWindowProgressBar->setValue(mm);
    doc->scMW()->setStatusBarInfoText("");

	addXhtml();
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
void EpubExport::exportNCX()
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
	ncx.setAttribute("xml:lang", documentMetadata.langInfo());
	ncx.setAttribute("xmlns", "http://www.daisy.org/z3986/2005/ncx/");
	xmlDocument.appendChild(ncx);

    QDomElement head = xmlDocument.createElement("head");
    ncx.appendChild(head);

	element = xmlDocument.createElement("meta");
	element.setAttribute("name", "dtb:uid");
	element.setAttribute("content", documentMetadata.ident());  // same as in .opf
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
	text = xmlDocument.createTextNode(documentMetadata.title());
	elementText.appendChild(text);

    element = xmlDocument.createElement("docAuthor");
    ncx.appendChild(element);
	elementText = xmlDocument.createElement("text");
	element.appendChild(elementText);
	text = xmlDocument.createTextNode(documentMetadata.author());
	elementText.appendChild(text);

	QDomElement nav = xmlDocument.createElement("navMap");
	ncx.appendChild(nav);

	for (int i = 0;  i < xhtmlFile.count(); i++) {
		EPUBExportXhtmlFile file = xhtmlFile[i];
		QDomElement navPoint = xmlDocument.createElement("navPoint");
		navPoint.setAttribute("class", "chapter");
		navPoint.setAttribute("id", file.filename);
		navPoint.setAttribute("playOrder", i);
		nav.appendChild(navPoint);

		element = xmlDocument.createElement("navLabel");
		navPoint.appendChild(element);
		elementText = xmlDocument.createElement("text");
		element.appendChild(elementText);
		text = xmlDocument.createTextNode(file.title);
		elementText.appendChild(text);

		element = xmlDocument.createElement("content");
		element.setAttribute("src", "Text/" + file.filename);
		navPoint.appendChild(element);
	}

	epubFile->add("OEBPS/toc.ncx", xmlDocument.toString(), true);
}

/**
  * add OEBPS/content.opf to the current epub file
  * The OPF file, traditionally named content.opf, houses the EPUB book's metadata,
  * file manifest, and linear reading order.
  * on the IDPF site you can find the full list of the possible metadata
  * http://idpf.org/epub/20/spec/OPF_2.0.1_draft.htm#Section2.2
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
void EpubExport::exportOPF()
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
	text = xmlDocument.createTextNode(documentMetadata.title());
	element.appendChild(text);
	metadata.appendChild(element);

	element = xmlDocument.createElement("dc:language");
	text = xmlDocument.createTextNode(documentMetadata.langInfo());
	element.appendChild(text);
	metadata.appendChild(element);

	// <URN> ::= "urn:" <NID> ":" <NSS>
	// <dc:identifier id="bookid">urn:uuid:ba151a94-2581-dbd1-144a-3ae968f738c7</dc:identifier>
	// <dc:identifier id="BookId" opf:scheme="ISBN">123456789X</dc:identifier>
	element = xmlDocument.createElement("dc:identifier");
	element.setAttribute("id", "BookId");
	element.setAttribute("opf:scheme", "UUID"); // TODO: add scheme to settings (http://en.wikipedia.org/wiki/Uniform_resource_name)
	text = xmlDocument.createTextNode(documentMetadata.ident());
	element.appendChild(text);
	metadata.appendChild(element);

    /*
     * Publications with multiple co-authors should provide multiple creator elements,
     * each containing one author. The order of creator elements is presumed
     * to define the order in which the creators' names should be presented by the Reading System.
     *
     * This specification recommends that the content of the creator elements hold the text
     * for a single name as it would be presented to the Reader.
     *
     * This specification adds to the creator element two optional attributes: role and file-as.
     * The set of values for role are identical to those defined in Section 2.2.6
     * for the contributor element. The file-as attribute should be used
     * to specify a normalized form of the contents, suitable for machine processing.
     */
	element = xmlDocument.createElement("dc:creator");
	element.setAttribute("opf:file-as", documentMetadata.author()); // TODO: use the to be created authorFileAs / authorSort
	element.setAttribute("opf:role", "aut");
	text = xmlDocument.createTextNode(documentMetadata.author());
	element.appendChild(text);
	metadata.appendChild(element);

	element = xmlDocument.createElement("dc:date");
	element.setAttribute("opf:event", "publication");
	text = xmlDocument.createTextNode(documentMetadata.date());
	element.appendChild(text);
	metadata.appendChild(element);

	// non mandatory fields from the main screen
	if (documentMetadata.subject() != "")
	{
        // multiple instances are allowed
        element = xmlDocument.createElement("dc:subject");
        text = xmlDocument.createTextNode(documentMetadata.subject());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.keywords() != "")
	{
        // it seems that keywords are treated as subjects in epub...
        // sould we separate the keywords by ","? (ale/20120912)
        element = xmlDocument.createElement("dc:subject");
        text = xmlDocument.createTextNode(documentMetadata.keywords());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.comments() != "") // labelled as description in scribus
	{
        element = xmlDocument.createElement("dc:description");
        text = xmlDocument.createTextNode(documentMetadata.comments());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	// non mandatory fields from the further information screen
	if (documentMetadata.publisher() != "")
	{
		element = xmlDocument.createElement("dc:publisher");
		text = xmlDocument.createTextNode(documentMetadata.publisher());
		element.appendChild(text);
		metadata.appendChild(element);
	}

	if (documentMetadata.contrib() != "") // labelled as contributors in scribus
	{
        // A party whose contribution to the publication is secondary to those named in creator elements. 
        element = xmlDocument.createElement("dc:contributor");
        text = xmlDocument.createTextNode(documentMetadata.contrib());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.type() != "")
	{
        element = xmlDocument.createElement("dc:type");
        text = xmlDocument.createTextNode(documentMetadata.type());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.format() != "") // should be one of: event, image, interactive resource, moving image, physical object, service, software, sound, still image, text
	{
        element = xmlDocument.createElement("dc:format");
        text = xmlDocument.createTextNode(documentMetadata.format());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.source() != "")
	{
        // Information regarding a prior resource from which the publication was derived;
        element = xmlDocument.createElement("dc:source");
        text = xmlDocument.createTextNode(documentMetadata.source());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.relation() != "")
	{
        element = xmlDocument.createElement("dc:relation");
        text = xmlDocument.createTextNode(documentMetadata.relation());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.cover() != "") // that's not the cover, but the coverage... space and time covered by the work
	{
        element = xmlDocument.createElement("dc:coverage");
        text = xmlDocument.createTextNode(documentMetadata.cover());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	if (documentMetadata.rights() != "")
	{
        // A statement about rights, or a reference to one. In this specification, the copyright notice and any further rights description should appear directly.
        element = xmlDocument.createElement("dc:rights");
        text = xmlDocument.createTextNode(documentMetadata.rights());
        element.appendChild(text);
        metadata.appendChild(element);
	}

	element = xmlDocument.createElement("meta");
	element.setAttribute("content", "cover.png");
	element.setAttribute("name", "cover");
	metadata.appendChild(element);

	QDomElement manifest = xmlDocument.createElement("manifest");
	xmlRoot.appendChild(manifest);

	// dynamically add the content items (contentItems.add(EPUBExportContentItem))
	int n = contentItems.count();
	for (int i = 0; i < n; i++)
	{
		EPUBExportContentItem contentItem = contentItems[i];

		element = xmlDocument.createElement("item");
		element.setAttribute("id", contentItem.id);
		element.setAttribute("href", contentItem.href);
		element.setAttribute("media-type", contentItem.mediaType);
		manifest.appendChild(element);
	}

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

	for (int i = 0;  i < xhtmlFile.count(); i++) {
		element = xmlDocument.createElement("itemref");
		element.setAttribute("idref", xhtmlFile[i].filename);
		spine.appendChild(element);
	}

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
}

void EpubExport::addText(PageItem* docItem)
{
	/*
	//  example of use in svgexplugin.cpp 
	const CharStyle& charStyle(docItem->itemText.charStyle(0));
	qDebug() << "font size: " << charStyle.fontSize();
	*/
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
        QDomElement elementCurrent;
        QDomElement elementParagraph;
        QString paragraphStyleName;
        QString characterStyleName;
        QString run_text;
		bool hasCharacterStyle;
		bool hasCharacterClass;
        for (int i = 0; i < n; i++) {
            // use QString mid() to get substrings...
            EPUBExportRuns run = runs[i];
            // qDebug() << "run.pos:" << run.pos;
            // qDebug() << "run.length:" << run.length;
            // qDebug() << "run.type:" << run.type;
			hasCharacterStyle = false;
			hasCharacterClass = false;

            if (run.type == 'p') {
                paragraphStyleName = docItem->itemText.paragraphStyle(run.pos + 1).parent();
				paragraphStyleName = getStylenameSanitized(paragraphStyleName);
                qDebug() << "paragraphStyle: " << paragraphStyleName;
                elementParagraph = xhtmlDocument.createElement("p");
				if (paragraphStyleName != "")
					elementParagraph.setAttribute("class", paragraphStyleName);
                xhtmlBody.appendChild(elementParagraph);
				elementCurrent = elementParagraph;
            }

			element = xhtmlDocument.createElement("span");

			characterStyleName = docItem->itemText.charStyle(run.pos + 1).displayName();
			characterStyleName = getStylenameSanitized(characterStyleName);
			// qDebug() << "p characterstyle: " << characterStyleName;

			if (characterStyleName != "")
			{
				element.setAttribute("class", characterStyleName);
				hasCharacterClass = true;
			}

			/*
			if (run.type == 'f')
			{
				// hasCharacterStyle = true;
			}
			*/

            run_text = content.mid(run.pos, run.length);
			// qDebug() << "run text: " << run_text;
            const CharStyle& style(docItem->itemText.charStyle(run.pos));

			QString fontname = style.font().scName();
			qDebug() << "fontname:" << fontname;

			QStringList featureList = style.features();
			// qDebug() << "featureList" << featureList;
			// as long as bold and italic are not in the features list, get the property
			// by guessing from the font name (ale/20120916)
			// rule.pattern = QRegExp("[\\\\|\\<|\\>|\\=|\\!|\\+|\\-|\\*|\\/|\\%]+");
			QRegExp regexpItalic("(\\bitalic\\b)");
			regexpItalic.setCaseSensitivity(Qt::CaseInsensitive);
			if (regexpItalic.indexIn(fontname) >= 0)
			{
				featureList << CharStyle::ITALIC;
			}
			QRegExp regexpBold("(\\bbold\\b)");
			regexpBold.setCaseSensitivity(Qt::CaseInsensitive);
			if (regexpBold.indexIn(fontname) >= 0)
			{
				featureList << CharStyle::BOLD;
			}
			QStringList styleAttribute;
			QStringList::ConstIterator it;
			for (it = featureList.begin(); it != featureList.end(); ++it)
			{
				QString feature = it->trimmed();
				// qDebug() << "feature" << feature;
				if (feature == CharStyle::BOLD)
				{
					QDomElement bElement = xhtmlDocument.createElement("b");
					elementCurrent.appendChild(bElement);
					elementCurrent = bElement;
				}
				else if (feature == CharStyle::ITALIC)
				{
					QDomElement iElement = xhtmlDocument.createElement("i");
					elementCurrent.appendChild(iElement);
					elementCurrent = iElement;
				}
				else if (feature == CharStyle::SUPERSCRIPT)
				{
					QDomElement iElement = xhtmlDocument.createElement("sup");
					elementCurrent.appendChild(iElement);
					elementCurrent = iElement;
				}
				else if (feature == CharStyle::SUBSCRIPT)
				{
					QDomElement iElement = xhtmlDocument.createElement("sub");
					elementCurrent.appendChild(iElement);
					elementCurrent = iElement;
				}
				else if ((feature == CharStyle::UNDERLINE) || (feature == CharStyle::UNDERLINEWORDS))
				{
					styleAttribute << "text-decoration:underline";
					hasCharacterStyle = true;
				}
				else if (feature == CharStyle::STRIKETHROUGH)
				{
					styleAttribute << "text-decoration:line-through";
					hasCharacterStyle = true;
				}
				else if (feature != CharStyle::INHERIT)
				{
					qDebug() << "else feature" << feature;
					hasCharacterStyle = true;
					/*
					 * The following character formats are supported by Scribus
					 * but not exported to epub:
					 * OUTLINE: text-outline: 1px 1px #ccc;
					 * SHADOWED: text-shadow: 2px 2px #ff0000;
					 * ALLCAPS: text-transform:uppercase;
					 * SMALLCAPS: font-variant:small-caps;
					 * SHYPHEN: hyphenation is possible... how to use it?
					 */
				}
			}
			// qDebug() << "tag name: " << element.tagName();
			if (hasCharacterStyle)
			{
				element.setAttribute("style", styleAttribute.join("; ") + ";");
			}

			if (hasCharacterClass || hasCharacterStyle)
			{
				elementCurrent.appendChild(element);
				elementCurrent = element;
			}

			QDomText t = xhtmlDocument.createTextNode(run_text.simplified()); // simplified() removes nasty \r
			elementCurrent.appendChild(t);
            // run_text = subString(content, run.pos, run.length);
			// qDebug() << "next round ";
            // lineStart += line.length() + 1;
			elementCurrent = elementParagraph;
        }
    }
}

void EpubExport::addImage(PageItem* docItem)
{
	QString filename(docItem->Pfile);
	if (filename == "")
        return;

    QPixmap image; // null if the image has not been cropped nor scaled
    bool useLoadedImage = false;

	// qDebug() << "image file" << filename;
	// qDebug() << "imageXScale" << docItem->imageXScale();
	// qDebug() << "imageYScale" << docItem->imageYScale();
	// qDebug() << "imageXOffset" << docItem->imageXOffset();
	// qDebug() << "imageYOffset" << docItem->imageYOffset();
	// qDebug() << "item width" << docItem->width();
	// qDebug() << "item height" << docItem->height();
	// qDebug() << "image BBoxX" << docItem->pixm.imgInfo.BBoxX;
	// qDebug() << "image BBoxH" << docItem->pixm.imgInfo.BBoxH;
	// qDebug() << "image xres" << docItem->pixm.imgInfo.xres;
	// qDebug() << "image yres" << docItem->pixm.imgInfo.yres;
	// qDebug() << "image width" << docItem->pixm.width();
	// qDebug() << "image height" << docItem->pixm.height();

    double cropX = docItem->imageXOffset();
    double cropY =  docItem->imageYOffset();

    // calculate the frame's width and height in "image pixels"
    double frameW = docItem->width() * docItem->pixm.imgInfo.xres / (docItem->imageXScale() * docItem->pixm.imgInfo.xres);
    double frameH = docItem->height() * docItem->pixm.imgInfo.yres / (docItem->imageYScale() * docItem->pixm.imgInfo.yres);

    if (!image.load(filename)) // TODO: if the image's width and height are already stored, only load the image when it has to be cropped or scaled
        return;
        // useLoadedImage = true;

    QRect frameRect = QRect(- cropX, -cropY, frameW, frameH);
    QRect imageRect = QRect(0, 0, image.width(), image.height());
	// qDebug() << "frameRect" << frameRect;
	// qDebug() << "imageRect" << imageRect;

    if (frameRect != imageRect)
    {
        useLoadedImage = true;
        QRect cropRect = frameRect.intersected(imageRect);
        // qDebug() << "cropRect" << cropRect;
        if (!cropRect.isEmpty())
        {
            QPixmap imageTmp = image.copy(cropRect);
            image = imageTmp;
        }
    }
    /*
    // TODO: some leftovers if we want ever do a color managed conversion of the pictures
	ScImage img;
	ScImage docItem->pixm;
	ImageInfoRecord imgInfo;
        ImageTypeEnum type -> 0 = jpg, 1 = tiff, 2 = psd, 3 = eps/ps, 4 = pdf, 5 = jpg2000, 6 = other
        ColorSpaceEnum colorspace -> 0 = RGB  1 = CMYK  2 = Grayscale 3 = Duotone
    CMSettings cms(c->doc(), Profil, Intent);
    cms.setUseEmbeddedProfile(Embedded);
    useLoadedImage = img.loadPicture(fn, c->pixm.imgInfo.actualPageNumber, cms, ScImage::RGBData, 72, &realCMYK);
	bool loadPicture(const QString & fn, int page, const CMSettings& cmSettings, RequestType requestType, int gsRes, bool *realCMYK = 0, bool showMsg = false);
     */
    QFileInfo fileinfo = QFileInfo(filename);
    QString ext = fileinfo.suffix().toLower();

    int mediaType = 0;
    if (ext == "png")
        mediaType = FormatsManager::PNG;
    else if (extensionIndicatesJPEG(ext))
        mediaType = FormatsManager::JPEG;
    qDebug() << "mediaType" << mediaType;

    if (mediaType > 0)
    {
        QString filepath = "Images/" + fileinfo.fileName();
        // add the image to the dom
        QDomElement div = xhtmlDocument.createElement("div");
        xhtmlBody.appendChild(div);
        QDomElement element = xhtmlDocument.createElement("img");
        // <image height="800" width="600" xlink:href="../Images/cover.jpeg"></image>
        element.setAttribute("height", (int) docItem->height()); // TODO: use the real width of the visible part of the image (as a rectangle)
        element.setAttribute("width", (int) docItem->width());
        element.setAttribute("alt", ""); // TODO do we have a way to define the metadata? eventually from the exif? epubcheck says it's mandatory... and it's not nice to leave it empty...
        element.setAttribute("src", "../"+filepath); // TODO: make sure that the name is unique in the target! (if it already exists prefix the frame name?)
        // TODO: set the width and height? from the docItem?
        div.appendChild(element);
        // copy the image into the zip
        if (!useLoadedImage)
        {
            qDebug() << "standard file add";
            QFile file(fileinfo.filePath()); // TODO: if we already have a scimage we may have to change this
            epubFile->add("OEBPS/"+filepath, &file, true);
        }
        else
        {
            QByteArray imageBytes;
            QBuffer buffer(&imageBytes);
            buffer.open(QIODevice::WriteOnly);
            image.save(&buffer, mediaType == FormatsManager::JPEG ? "jpg" : "png");
            epubFile->add("OEBPS/"+filepath, imageBytes, false);


        }

        struct EPUBExportContentItem contentItem;
        contentItem.id = fileinfo.fileName();
        contentItem.href = filepath;
        contentItem.mediaType = FormatsManager::instance()->mimetypeOfFormat(mediaType).first();
        contentItems.append(contentItem);
    } else {
        // TODO: convert the other "acceptable" image types to png or jpeg (how to choose?)
            qDebug() << "image format not yet supported: " << filename;
    }
}

// @todo: use the text/storytext methods as soon as they are implemented
/*
 * read the runs beginnings and the number of runs in the text item
*/
void EpubExport::initOfRuns(PageItem* docItem)
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

uint EpubExport::nrOfRuns()
{
	return runs.count();
}

int EpubExport::startOfRun(uint index)
{
	return index;
}

int EpubExport::endOfRun(uint index)
{
	return index + 1;
}

// does not work (does not get called)
QDebug operator<<(QDebug dbg, const QList<EPUBExportRuns> &v)
{
    for (int i = 0; i < v.length(); i++) {
        EPUBExportRuns r = v[i];
        dbg.nospace() << "(" << r.pos << ", " << r.type << ")";
    }
    return dbg.space();
}

// you have to declared it before using it... so put the signature in the .h file, too
QDebug operator<<(QDebug dbg, const QList<ScPage*> &pages)
{
    QStringList output;
    for (int i = 0; i < pages.length(); i++) {
        output << QString::number(pages.at(i)->pageNr());
    }
    dbg.nospace() << "(" << output.join(", ") << ")";
    return dbg.space();
}
