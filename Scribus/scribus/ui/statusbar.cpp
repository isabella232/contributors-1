#include <QFont>
#include <QValidator>
#include <QDebug>

#include "scribuscore.h"
#include "prefsstructs.h"
#include "prefsmanager.h"
#include "scribusview.h"
#include "scribusdoc.h"
#include "units.h" // for unitGetMaxIndex & co
#include "util_icon.h" // for loadIcon()
#include "canvas.h" // for the zoom slots

#include "statusbar.h"
#include "ui_statusbar.h"


Statusbar::Statusbar(QWidget *parent) :
	QWidget(parent),
	view(0),
	Prefs(&(PrefsManager::instance()->appPrefs)),
	ui(new Ui::Statusbar)
{
	QFont inputFont = QFont(font());
	// #8058: Better not use too small font size on Windows
	inputFont.setPointSize(inputFont.pointSize() - (ScCore->isWinGUI() ? 1 : 2));

	ui->setupUi(this);

	ui->unit->setFocusPolicy(Qt::NoFocus);
	ui->unit->setFont(inputFont);
	int maxUindex = unitGetMaxIndex() - 2;
	for (int i = 0; i <= maxUindex; ++i)
		ui->unit->addItem(unitGetStrFromIndex(i));


	ui->imagePreviewQuality->setFocusPolicy(Qt::NoFocus);
	ui->imagePreviewQuality->setFont(inputFont);

	ui->zoom->setMinimum(1);
	ui->zoom->setMaximum(3200);
	ui->zoom->init(6);
	ui->zoom->setTabAdvance(false);
	ui->zoom->setFont(inputFont);
	ui->zoom->setDecimals(0);
	ui->zoom->setValue( 100 );
	ui->zoom->setSingleStep(10);
	ui->zoom->setFocusPolicy(Qt::ClickFocus);
	ui->zoom->setSuffix( tr( " %" ) );

	ui->zoomDefault->setIcon(QIcon(loadIcon("16/zoom-original.png")));
	ui->zoomDefault->setAutoRaise(OPTION_FLAT_BUTTON);
	ui->zoomOut->setIcon(QIcon(loadIcon("16/zoom-out.png")));
	ui->zoomOut->setAutoRaise(OPTION_FLAT_BUTTON);
	ui->zoomIn->setIcon(QIcon(loadIcon("16/zoom-in.png")));
	ui->zoomIn->setAutoRaise(OPTION_FLAT_BUTTON);

	pageN = 0;
	pageI = 0;
	pageValidator = new QIntValidator(pageI, pageN, this);
	pageNPattern = "%1" ;
    // TODO: remove pageN and pageI from here and make all the buttons inactive by
    // default, since there is no document open! (ale/20120729)
	// pageN = view->Doc->Pages->count();
	// pageI = 1;

    ui->pageStart->setAutoRaise(OPTION_FLAT_BUTTON);
	ui->pageStart->setIcon(QIcon(loadIcon("16/go-first.png")));
	ui->pageStart->setFocusPolicy(Qt::NoFocus);
	ui->pageBack->setAutoRaise(OPTION_FLAT_BUTTON);
	ui->pageBack->setIcon(QIcon(loadIcon("16/go-previous.png")));
	ui->pageBack->setFocusPolicy(Qt::NoFocus);
	ui->pageBack->setAutoRepeat(true);
	ui->page->setEditable(true);
	ui->page->setDuplicatesEnabled( false );
	ui->page->lineEdit()->setAlignment(Qt::AlignHCenter);
	for (int i = 0; i < pageN; ++i)
		ui->page->addItem(QString::number(i + 1));
	ui->page->setValidator(pageValidator);
	ui->page->setMinimumSize(fontMetrics().width( "999" )+20, 20);
	ui->page->setFocusPolicy(Qt::ClickFocus);
	ui->pageForward->setAutoRaise(OPTION_FLAT_BUTTON);
	ui->pageForward->setIcon(QIcon(loadIcon("16/go-next.png")));
	ui->pageForward->setFocusPolicy(Qt::NoFocus);
	ui->pageForward->setAutoRepeat(true);
	ui->pageLast->setAutoRaise(OPTION_FLAT_BUTTON);
	ui->pageLast->setIcon(QIcon(loadIcon("16/go-last.png")));
	ui->pageLast->setFocusPolicy(Qt::NoFocus);

	languageChange();
    setDocumentButtonsEnabled(false);
}

Statusbar::~Statusbar()
{
	delete ui;
}

void Statusbar::languageChange()
{
	fillPreviewQuality();
	ui->imagePreviewQuality->setToolTip( tr("Select the image preview quality"));

	ui->unit->setToolTip( tr("Select the current unit"));

	ui->zoom->setToolTip( tr("Current zoom level"));
	ui->zoomDefault->setToolTip( tr("Zoom to 100%"));
	ui->zoomOut->setToolTip( tr("Zoom out by the stepping value in Tools preferences"));
	ui->zoomIn->setToolTip( tr("Zoom in by the stepping value in Tools preferences"));

	ui->pageStart->setToolTip( tr("Go to the first page") );
	ui->pageBack->setToolTip( tr("Go to the previous page") );
	ui->pageForward->setToolTip( tr("Go to the next page") );
	ui->pageLast->setToolTip( tr("Go to the last page") );
	ui->page->setToolTip( tr("Select the current page") );
    pageNPattern = tr(" of %1", "number of pages in document");
	ui->pageN->setText(pageNPattern.arg(pageN));
    // TODO: check if the three next lines are needed (ale/20120729)
	// disconnect( PageCombo, SIGNAL( activated(int) ), this, SLOT( GotoPgE(int) ) );
	// setCurrentComboItem(PageCombo, QString::number(APage));
	// connect( PageCombo, SIGNAL( activated(int) ), this, SLOT( GotoPgE(int) ) );
}

void Statusbar::setView(ScribusView * view)
{
	// qDebug() << "set view";
	if (this->view)
	{
		unsetView();
	}
	this->view = view;

    setDocumentButtonsEnabled();

	bool c = true;
	c &= connect(ui->imagePreviewQuality, SIGNAL(activated(int)), view, SLOT(changePreviewQuality(int)));
	c &= connect(ui->unit, SIGNAL(activated(int)), view, SLOT(ChgUnit(int)));
	c &= connect(ui->zoomDefault, SIGNAL(clicked()), view, SLOT(slotZoom100()));
	c &= connect(ui->zoomOut, SIGNAL(clicked()), view, SLOT(slotZoomOut()));
	c &= connect(ui->zoomIn, SIGNAL(clicked()), view, SLOT(slotZoomIn()));
	c &= connect(ui->zoom, SIGNAL(valueChanged(double)), view, SLOT(setZoom()));
	Q_ASSERT(c);
}

void Statusbar::unsetView()
{
	// qDebug() << "unset view";
    setDocumentButtonsEnabled(false);
	if (this->view)
	{
		bool b = true;
		b &= disconnect(ui->imagePreviewQuality, SIGNAL(activated(int)), view, SLOT(changePreviewQuality(int)));
		b &= disconnect(ui->unit, SIGNAL(activated(int)), view, SLOT(ChgUnit(int)));
		Q_ASSERT(b);
	}

	view = 0;

}

void Statusbar::setDocumentButtonsEnabled()
{
    setDocumentButtonsEnabled(true);
}

void Statusbar::setDocumentButtonsEnabled(bool enabled)
{
    if (enabled)
        ui->unit->setCurrentIndex(view->Doc->unitIndex());
	// setCurrentComboItem(view->unitSwitcher, unitGetStrFromIndex(doc->unitIndex()));
	ui->unit->setEnabled(enabled);

    if (enabled)
        fillPreviewQuality();
    else
        ui->imagePreviewQuality->clear();
	ui->imagePreviewQuality->setEnabled(enabled);
	ui->zoom->setEnabled(enabled);
	ui->zoomDefault->setEnabled(enabled);
	ui->zoomOut->setEnabled(enabled);
	ui->zoomIn->setEnabled(enabled);
}

void Statusbar::setDocumentButtonsPageEnabled()
{
    setDocumentButtonsPageEnabled(true);
}
void Statusbar::setDocumentButtonsPageEnabled(bool enabled)
{
	ui->pageStart->setEnabled(enabled);
	ui->pageBack->setEnabled(enabled);
	ui->pageForward->setEnabled(enabled && (pageI < pageN));
	ui->pageLast->setEnabled(enabled && (pageI < pageN));
	ui->page->setEnabled(enabled);
	ui->pageN->setEnabled(enabled);
}

/**
 * Preview quality
 */
void Statusbar::fillPreviewQuality()
{
	ui->imagePreviewQuality->addItem(tr("High"));
	ui->imagePreviewQuality->addItem(tr("Normal"));
	ui->imagePreviewQuality->addItem(tr("Low"));
	ui->imagePreviewQuality->setCurrentIndex(Prefs->itemToolPrefs.imageLowResType);
}

/**
 * Zoom
 */
void Statusbar::setZoom(double z)
{
	ui->zoom->blockSignals(true);
	ui->zoom->setValue(z);
	ui->zoom->blockSignals(false);
}

double Statusbar::getZoom()
{
	return ui->zoom->value();
}

bool Statusbar::zoomHasFocus()
{
	return ui->zoom->hasFocus();
}

void Statusbar::zoomClearFocus()
{
	ui->zoom->clearFocus();
}

int Statusbar::getPage()
{
	return ui->zoom->value();
}

bool Statusbar::pageHasFocus()
{
	return ui->page->hasFocus();
}

void Statusbar::pageClearFocus()
{
	ui->page->clearFocus();
}

// XXX: only used here
void PageSelector::GotoPgE(int a)
{
	clearFocus();
	GotoPg(a);
	emit GotoPage(a+1);
}


/**
 * ./ui/preview.cpp: connect(PGSel, SIGNAL(GotoPage(int)), this, SLOT(ToSeite(int)));
 * ./scribusview.cpp:  connect(pageSelector, SIGNAL(GotoPage(int)), this, SLOT(GotoPa(int)));
 * ./scribusview.cpp:  disconnect(pageSelector, SIGNAL(GotoPage(int)), this, SLOT(GotoPa(int)));
 * ./scribusview.cpp:  connect(pageSelector, SIGNAL(GotoPage(int)), this, SLOT(GotoPa(int)));
 */
void PageSelector::GotoPage()
{
	static QRegExp rx("^([0-9])+.*");
	int p = rx.cap(1).toInt();
	if (p < 1)
		p=1;
	if (p > LastPG)
		p = LastPG;
	GotoPg(p-1);
	emit GotoPage(p);
}


// XXX: ./scribus.cpp:    view->pageSelector->GotoPg(0);
// XXX: ./scribusview.cpp:    pageSelector->GotoPg(Seite);
// XXX: ./ui/preview.cpp: PGSel->GotoPg(doc->currentPage()->pageNr());
void PageSelector::GotoPg(int a)
{
	disconnect( PageCombo, SIGNAL( activated(int) ), this, SLOT( GotoPgE(int) ) );
	PageCombo->setCurrentIndex(a);
	setCurrentComboItem(PageCombo, QString::number(a+1));
	APage = a+1;
	Back->setEnabled(true);
	Start->setEnabled(true);
	Forward->setEnabled(true);
	Last->setEnabled(true);
	if (a == 0)
	{
		Back->setEnabled(false);
		Start->setEnabled(false);
	}
	if (a == LastPG-1)
	{
		Forward->setEnabled(false);
		Last->setEnabled(false);
	}
	connect( PageCombo, SIGNAL( activated(int) ), this, SLOT( GotoPgE(int) ) );
}

void PageSelector::setMaximum(int a)
{
	disconnect( PageCombo, SIGNAL( activated(int) ), this, SLOT( GotoPgE(int) ) );
	PageCombo->clear();
	LastPG = a;
//	v->setTop(LastPG);
	m_validator->setRange(1, LastPG);
	for (int b = 0; b < LastPG; ++b)
	{
		PageCombo->addItem(QString::number(b+1));
	}
	setCurrentComboItem(PageCombo, QString::number(APage));
	PageCount->setText(PageCountString.arg(LastPG));
	connect( PageCombo, SIGNAL( activated(int) ), this, SLOT( GotoPgE(int) ) );
}

void PageSelector::ToStart()
{
	if (APage == 1)
		return;
	GotoPgE(0);
}

void PageSelector::ToEnd()
{
	if (APage == LastPG)
		return;
	GotoPgE(LastPG-1);
}

void PageSelector::goBk()
{
	APage--;
	if (APage < 1)
		APage = 1;
	GotoPgE(APage-1);
}

void PageSelector::goFw()
{
	APage++;
	if (APage > LastPG)
		APage = LastPG;
	GotoPgE(APage-1);
}

void PageSelector::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
		languageChange();
	else
		QWidget::changeEvent(e);
}

/**
 * Page
 */
