/****************************************************************************
** Form interface generated from reading ui file 'Query.ui'
**
** Created: Mon Apr 23 20:48:47 2001
**      by:  The User Interface Compiler (uic)
**
** WARNING! All changes made in this file will be lost!
****************************************************************************/
#ifndef QUERY_H
#define QUERY_H

#include <qdialog.h>
#include <qlineedit.h>
#include <qpushbutton.h>
#include <qtable.h>
#include <qlayout.h>
#include <qtooltip.h>
#include <qstringlist.h>
#include <qcombobox.h>
#include <qfont.h>
#include "scribus.h"

/** Calls the Plugin with the main Application window as parent
  * and the main Application Class as parameter */
extern "C" void Run(QWidget *d, ScribusApp *plug);
/** Returns the Name of the Plugin.
  * This name appears in the relevant Menue-Entrys */
extern "C" QString Name();
/** Returns the Type of the Plugin.
  * 1 = the Plugin is a normal Plugin, which appears in the Extras Menue
  * 2 = the Plugins is a import Plugin, which appears in the Import Menue
  * 3 = the Plugins is a export Plugin, which appears in the Export Menue */
extern "C" int Type();

class ZAuswahl : public QDialog
{
    Q_OBJECT

public:
    ZAuswahl( QWidget* parent, preV *Vor, PageItem *item, ScribusApp *plug );
    ~ZAuswahl();
    QTable* ZTabelle;
    QLineEdit* Zeichen;
    QPushButton* Einf;
    QPushButton* Delete;
    QPushButton* Close;
    PageItem *ite;
    ScribusApp *ap;
    QValueList<uint> Zeich;
    int MaxCount;
    int DevResX;
    int DevResY;

public slots:
    void NeuesZeichen(int r, int c);
    void DelEdit();
    void InsChar();

protected:
    QVBoxLayout* ZAuswahlLayout;
    QHBoxLayout* Layout1;
};
#endif // QUERY_H
