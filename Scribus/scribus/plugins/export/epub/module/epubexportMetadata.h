/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef EPUBEXPORTMETADATA_H
#define EPUBEXPORTMETADATA_H

#include <QObject>
#include <QDebug>

#include "scribusapi.h" // for SCRIBUS_API

class EpubExportMetadata : public QObject
{
    Q_OBJECT
};

public:
	EpubExportMetadata();
	~EpubExportMetadata();

QDebug operator<<(QDebug dbg, const EpubExportMetadata &metadata);

#endif // EPUBEXPORTMETADATA_H
