#ifndef STATUSBAR_H
#define STATUSBAR_H

#include <QWidget>
class QIntValidator;

class ApplicationPrefs;
class ScribusView;

namespace Ui {
class Statusbar;
}

class Statusbar : public QWidget
{
	Q_OBJECT

public:
	explicit Statusbar(QWidget *parent = 0);
	~Statusbar();

	ScribusView *view;
	ApplicationPrefs * const Prefs;

	void setZoom(double z);

	double getZoom();
	bool zoomHasFocus();
	void zoomClearFocus();
	int getPage();
	bool pageHasFocus();
	void pageClearFocus();

private:
	Ui::Statusbar *ui;
	void setDocumentButtonsEnabled();
	void setDocumentButtonsEnabled(bool enabled);

	void fillPreviewQuality();

	int pageN;
	int pageI;
	QIntValidator *pageValidator;
	QString pageNPattern;

public slots:

	void languageChange();
	void setView(ScribusView * view);
	void unsetView();


};

#endif // STATUSBAR_H
