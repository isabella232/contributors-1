/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef EPUBEXPORTEPUB_H
#define EPUBEXPORTEPUB_H

#include <QObject>
#include <QDebug>

#include "scribusapi.h" // for SCRIBUS_API

class EpubExportEpub : public QObject
{
    Q_OBJECT
};

public:
	EpubExportEpub();
	~EpubExportEpub();

QDebug operator<<(QDebug dbg, const EpubExportStyle &epub);

#endif // EPUBEXPORTEPUB_H
