/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef STATUSBAR_H
#define STATUSBAR_H

#include <QObject>
#include <QDebug>

#include "scdockpalette.h"

// class QString;
class Toolbar;
class Statusbar;
class ScribusDoc;
// class ScPage;
// class ScLayer;
class Ui_Toolbar;


// class PageItem;

struct StatusbarOptions
{
    /*
	bool inlineImages;
	bool exportPageBackground;
	bool compressFile;
    */
};

class Statusbar : public ScDockPalette
{
    Q_OBJECT

public:
	Statusbar( ScribusDoc* doc );
	~Statusbar();

	/*!
	\author Ale Rimoldi
	\brief Show the statusbar
	\param doc QString file name
	 */

private:
    QDockWidget *statusbar;
    Toolbar *toolbar;

	ScribusDoc* m_Doc;
};
#endif // STATUSBAR_H


