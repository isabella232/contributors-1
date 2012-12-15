/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef EPUBEXPORTXHTML_H
#define EPUBEXPORTXHTML_H

#include <QObject>
#include <QDebug>

#include "scribusapi.h" // for SCRIBUS_API

class EpubExportXhtml : public QObject
{
    Q_OBJECT

public:
	EpubExportXhtml();
	~EpubExportXhtml();
};

QDebug operator<<(QDebug dbg, const EpubExportXhtml &xhtml);

#endif // EPUBEXPORTXHTML_H
