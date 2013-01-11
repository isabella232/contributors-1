/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include "api_styleparagraph.h"

#include <QDebug>

#include "scribuscore.h"
#include "styles/paragraphstyle.h"

StyleParagraphAPI::StyleParagraphAPI(QString name)
{
	style = ParagraphStyle();
    qDebug() << "style name:" << name;
	style.setName(name);
}

StyleParagraphAPI::~StyleParagraphAPI()
{
}

void StyleParagraphAPI::update()
{
	StyleSet<ParagraphStyle> styleSet;
	styleSet.create(style);
	ScCore->primaryMainWindow()->doc->redefineStyles(styleSet, false);
	// TODO: refresh the style manager (ale/20130109)
}

void StyleParagraphAPI::setAlignment(int mode)
{
    style.setAlignment((ParagraphStyle::AlignmentType)mode);
}

/*
PyObject *scribus_createparagraphstyle(PyObject* , PyObject* args, PyObject* keywords)
{
	char* keywordargs[] = {
			const_cast<char*>("name"),
			const_cast<char*>("linespacingmode"),
			const_cast<char*>("linespacing"),
			const_cast<char*>("alignment"),
			const_cast<char*>("leftmargin"),
			const_cast<char*>("rightmargin"),
			const_cast<char*>("gapbefore"),
			const_cast<char*>("gapafter"),
			const_cast<char*>("firstindent"),
			const_cast<char*>("hasdropcap"),
			const_cast<char*>("dropcaplines"),
			const_cast<char*>("dropcapoffset"),
			const_cast<char*>("charstyle"),
			NULL};
	char *Name = const_cast<char*>(""), *CharStyle = const_cast<char*>("");
	int LineSpacingMode = 0, Alignment = 0, DropCapLines = 2, HasDropCap = 0;
	double LineSpacing = 15.0, LeftMargin = 0.0, RightMargin = 0.0;
	double GapBefore = 0.0, GapAfter = 0.0, FirstIndent = 0.0, DropCapOffset = 0;
	if (!PyArg_ParseTupleAndKeywords(args, keywords, "es|ididddddiides",
		 keywordargs, "utf-8", &Name, &LineSpacingMode, &LineSpacing, &Alignment,
		&LeftMargin, &RightMargin, &GapBefore, &GapAfter, &FirstIndent,
		&HasDropCap, &DropCapLines, &DropCapOffset, "utf-8", &CharStyle))
		return NULL;
	if(!checkHaveDocument())
		return NULL;
	if (Name == EMPTY_STRING)
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("Cannot have an empty paragraph style name.","python error").toLocal8Bit().constData());
		return NULL;
	}

	ParagraphStyle TmpParagraphStyle;
	TmpParagraphStyle.setName(Name);
	TmpParagraphStyle.setLineSpacingMode((ParagraphStyle::LineSpacingMode)LineSpacingMode);
	TmpParagraphStyle.setLineSpacing(LineSpacing);
	TmpParagraphStyle.setAlignment((ParagraphStyle::AlignmentType)Alignment);
	TmpParagraphStyle.setLeftMargin(LeftMargin);
	TmpParagraphStyle.setFirstIndent(FirstIndent);
	TmpParagraphStyle.setRightMargin(RightMargin);
	TmpParagraphStyle.setGapBefore(GapBefore);
	TmpParagraphStyle.setGapAfter(GapAfter);
	if(HasDropCap == 0)
		TmpParagraphStyle.setHasDropCap(false);
	else if(HasDropCap == 1)
		TmpParagraphStyle.setHasDropCap(true);
	else
	{
		PyErr_SetString(PyExc_ValueError, QObject::tr("hasdropcap has to be 0 or 1.","python error").toLocal8Bit().constData());
		return NULL;
	}
	TmpParagraphStyle.setDropCapLines(DropCapLines);
	TmpParagraphStyle.setDropCapOffset(DropCapOffset);
	TmpParagraphStyle.charStyle().setParent(CharStyle);

	StyleSet<ParagraphStyle> TmpStyleSet;
	TmpStyleSet.create(TmpParagraphStyle);
	ScCore->primaryMainWindow()->doc->redefineStyles(TmpStyleSet, false);
	// PV - refresh the Style Manager window.
	// I thought that this can work but it doesn't:
	// ScCore->primaryMainWindow()->styleMgr()->reloadStyleView();
	// So the brute force setDoc is called...
	ScCore->primaryMainWindow()->styleMgr()->setDoc(ScCore->primaryMainWindow()->doc);

	Py_RETURN_NONE;
}
*/

