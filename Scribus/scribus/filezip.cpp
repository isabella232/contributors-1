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

#include "filezip.h"

#include "scribusapi.h"
#include <QString>

#include "zip.h"

FileZip::FileZip(QString& zipFilePath)
{
	// TODO: does it still need a specific code for windows?
	// (cf. fileunzip.cpp -> unzFile unzOpenFile(const QString& filename)
	QByteArray fname(zipFilePath.toLocal8Bit());
	file = zipOpen(fname.data(), APPEND_STATUS_CREATE);
	// zipWriteInFileInZip(file, 
}

bool FileZip::add(QString fileName, QString content)
{
	return true;
}

bool FileZip::write()
{
	return true;
}
