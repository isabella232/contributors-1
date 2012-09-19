/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2012 by Ale Rimoldi                                     *
 *   a.l.e@ideale.ch                                                      *
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
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/

/**
  * @brief FileZip is a wrapper around zip.c by Gilles Vollant and creates zip files
  * constructor FileZip(QString) takes a zip file as a parameter
  * FileZip has been inspired by FileUnzip by Riku Leino (Tsoots)
  */

#ifndef FILEZIP_H
#define FILEZIP_H

#include <QString>
#include <QFile>
#include <QFileInfo>
#include "scribusapi.h"

#include "zip.h"

class SCRIBUS_API FileZip
{
private:
	bool open;
	zipFile file;
	QString filename;
	bool openInZip(QString filename, bool compression);
	bool closeInZip();
public:
	FileZip(QString zipFilePath);
	~FileZip();
	bool create();
	bool close();
    bool add(QString filename, QByteArray content, bool compression);
	bool add(QString fileName, QString content, bool compression);
	bool add(QString fileName, QFile *file, bool compression);
	bool add(QFile *file, bool compression);
};

#endif
