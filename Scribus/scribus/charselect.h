#ifndef CHARSELECT_H
#define CHARSELECT_H

#include <qdialog.h>

class QTimer;
class QLabel;
class QPushbutton;
class QTable;
class QLayout;
class QToolTip;
class QStringList;
class QComboBox;
class QFont;
class ScribusApp;
class FontCombo;

class Zoom : public QDialog
{
Q_OBJECT

public:
	Zoom( QWidget* parent, QPixmap pix, uint val);
	~Zoom() {};
	void paintEvent(QPaintEvent *);
	QPixmap pixm;
	QString valu;
};

class ChTable;

class CharSelect : public QDialog
{
	Q_OBJECT

public:
	CharSelect( QWidget* parent, PageItem *item, ScribusApp *plug );
	~CharSelect() {};
	void scanFont();
	void setupRangeCombo();
	void generatePreview(int charClass);
	ChTable* zTabelle;
	QLabel* sample;
	QLabel* fontLabel;
	QLabel* rangeLabel;
	FontCombo* fontSelector;
	QComboBox* rangeSelector;
	QPushButton* insertButton;
	QPushButton* deleteButton;
	QPushButton* closeButton;
	PageItem *ite;
	ScribusApp *ap;
	typedef QValueList<uint> charClassDef;
	QValueList<charClassDef> allClasses;
	QValueList<uint> characters;
	QValueList<uint> charactersFull;
	QValueList<uint> charactersLatin1;
	QValueList<uint> charactersLatin1Supplement;
	QValueList<uint> charactersLatinExtendedA;
	QValueList<uint> charactersLatinExtendedB;
	QValueList<uint> charactersGeneralPunctuation;
	QValueList<uint> charactersSuperSubscripts;
	QValueList<uint> charactersCurrencySymbols;
	QValueList<uint> charactersLetterlikeSymbols;
	QValueList<uint> charactersNumberForms;
	QValueList<uint> charactersArrows;
	QValueList<uint> charactersMathematicalOperators;
	QValueList<uint> charactersBoxDrawing;
	QValueList<uint> charactersBlockElements;
	QValueList<uint> charactersGeometricShapes;
	QValueList<uint> charactersMiscellaneousSymbols;
	QValueList<uint> charactersDingbats;
	QValueList<uint> charactersSmallFormVariants;
	QValueList<uint> charactersAlphabeticPresentationForms;
	QValueList<uint> charactersSpecial;
	QValueList<uint> charactersGreek;
	QValueList<uint> charactersGreekExtended;
	QValueList<uint> charactersCyrillic;
	QValueList<uint> charactersCyrillicSupplement;
	QValueList<uint> charactersArabic;
	QValueList<uint> charactersArabicPresentationFormsA;
	QValueList<uint> charactersArabicPresentationFormsB;
	QValueList<uint> charactersHebrew;
	QMap<int,int> usedCharClasses;
	QString chToIns;
	QString fontInUse;
	uint maxCount;
	int characterClass;

public slots:
	void newChar(uint r, uint c);
	void delChar();
	void newFont(int font);
	void newCharClass(int c);
	void delEdit();
	void insChar();

protected:
	QVBoxLayout* zAuswahlLayout;
	QHBoxLayout* selectionsLayout;
	QHBoxLayout* layout1;
};

class ChTable : public QTable
{
    Q_OBJECT

public:
	ChTable(CharSelect* parent, ScribusApp *pl);
	~ChTable() {};
	bool mPressed;
	bool alternate;
	Zoom* dia;
	ScribusApp *ap;
	CharSelect* par;
	QTimer* watchTimer;
	uint maxCount;
	uint rowA;
	uint colA;

public slots:
	void showAlternate();

signals:
	void selectChar(uint, uint);
	void delChar();

protected:
	virtual void keyPressEvent(QKeyEvent *k);
	virtual void contentsMouseReleaseEvent(QMouseEvent *m);
	virtual void contentsMousePressEvent(QMouseEvent* e);
};
#endif // QUERY_H
