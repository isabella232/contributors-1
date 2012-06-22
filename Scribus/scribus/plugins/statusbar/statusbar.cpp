/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

/***************************************************************************
                          epubexport.cpp  -  description
                             -------------------
    begin                : Thu Mar 29 15:16:41 CEST 2012
    copyright            : (C) 2012 by Ale Rimoldi
    email                : a.l.e@ideale.ch
 ***************************************************************************/

#include <QDebug>

#include "statusbar.h"
#include "scribusdoc.h"

// #include "sclayer.h"
// #include "scpage.h"
// #include "scribus.h" // for ScribusMainWindow

EPUBexport::EPUBexport( ScribusDoc* doc )
{
	m_Doc = doc;

}

EPUBexport::~EPUBexport()
{
}

