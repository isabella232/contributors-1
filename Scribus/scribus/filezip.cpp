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
#include <QDebug>

#include "zip.h"

FileZip::FileZip(QString zipFilePath)
{
	qDebug() << "filezip::zipFilePath :" << zipFilePath;
	// TODO: does it still need a specific code for windows?
	// (cf. fileunzip.cpp -> unzFile unzOpenFile(const QString& filename)
	filename = zipFilePath;
	file = 0;
}

bool FileZip::create()
{
	qDebug() << "filezip::create filename :" << filename;
	QByteArray filename(this->filename.toLocal8Bit());
	file = zipOpen(filename.constData(), APPEND_STATUS_CREATE);
	return true;
}
bool FileZip::close()
{
	if (!file)
	{
		qDebug() << "can't close  a closed zip";
		return false;
	}
	zipClose(file, NULL);
	return true;
}

bool FileZip::add(QString filename, QString content, bool compression)
{
	if (!file)
	{
		qDebug() << "can't add to  a closed zip (" << filename << ")";
		return false;
	}
    if (zipOpenNewFileInZip(file, filename.toUtf8().constData(), NULL, NULL, 0, NULL, 0, NULL, Z_DEFLATED, Z_NO_COMPRESSION) != Z_OK)
	{
		zipClose(file, NULL);
		// QFile::remove(tempFile);
		qDebug() << "Could not add to the zip file";
		return false;
	}

	// qDebug() << "filezip::add content :" << content;
	QByteArray contentEncoded = content.toUtf8();
	qDebug() << "filezip::add contentEncoded :" << contentEncoded;
	const char* contentData = contentEncoded.constData();
	if (zipWriteInFileInZip(file, contentData, (unsigned int)strlen(contentData)) != Z_OK) {
		zipCloseFileInZip(file);
		zipClose(file, NULL);
		// QFile::remove(tempFile);
		qDebug() << "Could not write into the zip file";
		return false;
	}
	zipCloseFileInZip(file);

	return true;
}
