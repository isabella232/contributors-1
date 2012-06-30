/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

/***************************************************************************
                          statusbar.cpp  -  description
                             -------------------
    begin                : Thu Mar 29 15:16:41 CEST 2012
    copyright            : (C) 2012 by Ale Rimoldi
    email                : a.l.e@ideale.ch
 ***************************************************************************/

#include <QDebug>

#include "scdockpalette.h"

#include "statusbar.h"
#include "toolbar.h"
#include "scribusdoc.h"

// #include "sclayer.h"
// #include "scpage.h"
// #include "scribus.h" // for ScribusMainWindow

Statusbar::Statusbar( ScribusDoc* doc )
{
	m_Doc = doc;
    if (!toolbar) {
        toolbar = new Toolbar();
    }
    if (!statusbar) {
         // qDebug() << "here i am";
        statusbar = new ScDockPalette(m_Doc->scMW());
        statusbar->setAllowedAreas(Qt::BottomDockWidgetArea);
        statusbar->setWidget(toolbar);
        addDockWidget(Qt::BottomDockWidgetArea, statusbar);

}

Statusbar::~Statusbar()
{
}

