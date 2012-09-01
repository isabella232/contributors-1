/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef EPUBEXPORT_H
#define EPUBEXPORT_H

#include <QObject>
#include <QDomElement>
#include <QVector>
#include <QMap>
#include <QDebug>

#include "scribusapi.h" // for SCRIBUS_API
#include "documentinformation.h" // for SCRIBUS_API

class QString;
class ScribusDoc;
class DocumentInformation; // for the metadata
class ScPage;
class ScLayer;
class FileZip;


class PageItem;

struct EPUBExportOptions
{
    /*
	bool inlineImages;
	bool exportPageBackground;
	bool compressFile;
    */
};

struct EPUBExportFormattingParagraph
{
	bool hasLinespacing;
	int linespacing; // 1..n
	bool hasAlignement;
	char alignement; // L R C J F
	bool hasIndentleft;
	int indentleft; // -n..n
	bool hasIndentright;
	int indentright; // -n..n
	bool hasIndentfirst;
	int indentfirst; // -n..n
	bool hasPaddingtop;
	int paddingtop; // -n..n
	bool hasPaddingbottom;
	int paddingbottom; // -n..n
	bool hasDropcaps;
	int dropcapsFontsize; // -n..n
};

// TODO: use StyleFlagValue defined in charstyle.h?
enum EPUBExportCharacterFlagValue {
	EPUBExport_Default		 =	 0,
	EPUBExport_Superscript	 =	 1,
	EPUBExport_Subscript	 =	 2,
	EPUBExport_Strikethrough =	 4,
	EPUBExport_Underline	 =	 8,
	EPUBExport_DropCap		 =	 16,
	EPUBExport_AllCaps		 =	 32,
	EPUBExport_SmallCaps	 =	 64,
	EPUBExport_Italic		 =	128,
	EPUBExport_Bold			 =	256,
    // = 512,
	// = 1024,
	// = 2048,
	// = 4096,
	// = 8192,
	EPUBExport_Noformatting  = 65535
};

class SCRIBUS_API EPUBExportCharacterFlag
{
	EPUBExportCharacterFlagValue value;

	EPUBExportCharacterFlag(void) { value = EPUBExport_Default; }
	EPUBExportCharacterFlag(EPUBExportCharacterFlagValue val) { value = val; }
	EPUBExportCharacterFlag(int val) { value = static_cast<EPUBExportCharacterFlagValue>(val); }

	operator EPUBExportCharacterFlagValue() const { return value; }

	QStringList featureList() const; 
	
	EPUBExportCharacterFlag& operator=  (EPUBExportCharacterFlagValue val) { value = val; return *this;}
	EPUBExportCharacterFlag& operator&= (const EPUBExportCharacterFlag& right);
	EPUBExportCharacterFlag& operator|= (const EPUBExportCharacterFlag& right);
	EPUBExportCharacterFlag  operator&  (const EPUBExportCharacterFlag& right);
	EPUBExportCharacterFlag  operator&  (int right);
	EPUBExportCharacterFlag  operator|  (const EPUBExportCharacterFlag& right);
	EPUBExportCharacterFlag  operator^  (const EPUBExportCharacterFlag& right);
	EPUBExportCharacterFlag  operator^  (int right);
	EPUBExportCharacterFlag  operator~  ();

	bool operator== (const EPUBExportCharacterFlag& right) const;
	bool operator== (const EPUBExportCharacterFlagValue right) const;
	bool operator== (int right) const;
	bool operator!= (const EPUBExportCharacterFlag& right) const;
	bool operator!= (const EPUBExportCharacterFlagValue right) const;
};

struct EPUBExportCharacterFormatting
{
	int bold; // 0 1
	int italic; // 0 1
	int underline; // 0 1
	QString fontname;
	int textsize; // 1..n
	QString textcolor; // 000000
	// QString language; // string
	int superscript; // 0 1
	int subscript; // 0 1
};

struct EPUBExportRuns
{
    int pos;
    int length;
    char type; // p=paragraph, f=formatting
    EPUBExportFormattingParagraph formatParagraph;
    EPUBExportCharacterFormatting formatCharacter;
};
/*
struct EPUBExportRuns
{
    int pos;
    char type; // p=paragraph, f=formatting
    QDebug operator<<(QDebug dbg)
    {
        dbg.nospace() << "(" << pos << ", " << type << ")";
        return dbg.space();
    }
};
*/

struct EPUBExportCurrentFormatting
{
    bool bold;
    bool italic;
    bool underline;
    bool strikethrough;
    // span:
    QString charstylename;
    int fontsize;
    QString fontname;
    QString color;
    QString shadow;
    int scaleh;
    int scalev;
    int tracking;
    QString language;
};

struct EPUBExportContentItem
{
    QString id;
    QString href;
    QString mediaType;
};

class EPUBexport : public QObject
/*
 * Inspired by svgexplugin
 */
{
    Q_OBJECT

public:
	EPUBexport( ScribusDoc* doc );
	~EPUBexport();

	/*!
	\author Ale Rimoldi
	\brief Create the SVG exporter
	\param doc QString file name
	 */
	bool doExport( QString fName, EPUBExportOptions &Opts );
	EPUBExportOptions Options;

    /*!
        \author Ale Rimoldi
        \brief Check if the item is higher and more on the left side
        \return boolean
    */
    static bool isDocItemTopLeftLessThan(const PageItem *docItem1, const PageItem *docItem2);

private:
    QString targetFile;
	ScribusDoc* doc;

	DocumentInformation documentMetadata;
	void readMetadata();

    // QMap<int, ScLayer*> layerList;
    QList<int> layerNotPrintableList;

	FileZip *epubFile;

    QVector<EPUBExportContentItem> contentItems;

	QDomDocument epubDocument;
	QDomElement epubRoot;
	QDomElement epubBody;
    bool exportMimetype();
    bool exportContainer();
    bool exportCSS();
    bool exportContent();
    bool exportNCX();
    bool exportOPF();
    void addText(PageItem* docItem);
    void addImage(PageItem* docItem);

    // @todo: use the text/storytext methods as soon as they are implemented
    /*
 	uint nrOfParagraphs(); --> use StoryText::nrOfParagraphs()!
	int startOfParagraph();
 	int startOfParagraph(uint index);
    */
	void initOfRuns(PageItem* docItem);
 	uint nrOfRuns();
 	int startOfRun(uint index);
 	int endOfRun(uint index);
    // QVector<uint> runs; // the indexes where the runs start
    // QVector<uint> paragraph; // the indexes where the paragraphs start
    // QMap<int, char> runs; // <postion,paragraph/formatting>
    QVector<EPUBExportRuns> runs; // the indexes where the runs start

};
#endif // EPUBEXPORT_H

