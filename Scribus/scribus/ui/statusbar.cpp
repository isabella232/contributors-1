#include <QFont>
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

	// zoom = new ScrSpinBox( 1, 3200, this, 6 );
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
}

void Statusbar::fillPreviewQuality()
{
	ui->imagePreviewQuality->addItem(tr("High"));
	ui->imagePreviewQuality->addItem(tr("Normal"));
	ui->imagePreviewQuality->addItem(tr("Low"));
	ui->imagePreviewQuality->setCurrentIndex(Prefs->itemToolPrefs.imageLowResType);
}

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

void Statusbar::setView(ScribusView * view)
{
	// qDebug() << "set view";
	if (this->view)
	{
		unsetView();
	}
	this->view = view;

	// setCurrentComboItem(view->unitSwitcher, unitGetStrFromIndex(doc->unitIndex()));
	ui->unit->setCurrentIndex(view->Doc->unitIndex());
	ui->unit->setEnabled(true);

	fillPreviewQuality();
	ui->imagePreviewQuality->setEnabled(true);

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
	ui->unit->setEnabled(false);

	ui->imagePreviewQuality->clear();
	ui->imagePreviewQuality->setEnabled(false);

	if (this->view)
	{
		bool b = true;
		b &= disconnect(ui->imagePreviewQuality, SIGNAL(activated(int)), view, SLOT(changePreviewQuality(int)));
		b &= disconnect(ui->unit, SIGNAL(activated(int)), view, SLOT(ChgUnit(int)));
		Q_ASSERT(b);
	}

	view = 0;

}
