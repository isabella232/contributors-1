/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@gmail.com                                                      *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.             *
 ***************************************************************************/

#ifndef GTGETTEXT_H
#define GTGETTEXT_H

#include <iostream>
#include <vector>

#include <QDir>
#include <QMap>
#include <QObject>
#include <QString>
#include <QStringList>

#include "scconfig.h"
#include "scribusapi.h"
#include "scfonts.h"
#include "util_formats.h"

class PageItem;
class ScribusDoc;
class gtDialogs;

/*
	GetText handles importer plugins loading and launching.
*/
class SCRIBUS_API gtGetText
{
private:
	void CallDLL(const ImporterData& idata, const QString& filePath,
				 const QString& encoding, bool textOnly, bool append, PageItem* importItem);
												// Loads, validates, and executes the Importer code.
	gtDialogs* dias;							// File Selection Dialog pointer.
	ScribusDoc* m_Doc;							// Which document are we working with.
public:
	gtGetText(ScribusDoc* doc);					// Constructor
	~gtGetText();								// Destructor
	void launchImporter(int importer, const QString& filename, bool textOnly, const QString& encoding, bool append, PageItem* target=0);
												// Look at the results of the file selection dialog and figure out if you need to use an importer.
												// Prompt the user if the importer to use isn't obvious.
};

#endif
