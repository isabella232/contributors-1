#ifndef INFOPALETTE_H
#define INFOPALETTE_H 

#include "ui_info.h"

class QEvent;

#include "ui/scdockpalette.h"

class QSpacerItem;
class QLabel;

/*! \brief Info palette.
*/
class SCRIBUS_API InfoPalette : public ScDockPalette, Ui::Info
{
	Q_OBJECT

public:
	InfoPalette( QWidget* parent = 0, const char* name = 0, bool modal = FALSE, Qt::WFlags fl = 0 );
	~InfoPalette();

	virtual void changeEvent(QEvent *e);

    /*
	virtual void setDoc( ScribusDoc* newDoc );
	void unitChange();
	
	virtual void changeEvent(QEvent *e);
    */
	
protected slots:
	virtual void languageChange();

};

#endif // INFOPALETTE_H

