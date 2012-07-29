/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
	begin                : July 2012
	copyright            : (C) 2005 by Ale Rimoldi
	email                : a.l.e@ideale.ch
***************************************************************************/

/***************************************************************************
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/

#include "info.h"

#include <QLabel>

InfoPalette::InfoPalette( QWidget* parent, const char* name, bool /*modal*/, Qt::WFlags /*fl*/ )
	: ScDockPalette( parent, name, 0 )
{
	setupUi(this);

	resize( QSize(100, 100).expandedTo(minimumSizeHint()) );
	languageChange();
}

InfoPalette::~InfoPalette()
{
}

void InfoPalette::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
	{
		languageChange();
	}
	else
		ScDockPalette::changeEvent(e);
}

void InfoPalette::languageChange()
{
    mouseBox->setTitle(tr("Mouse"));
    frameBox->setTitle(tr("Frame"));
	setWindowTitle(tr("Info"));
}
