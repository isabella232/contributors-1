/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

/***************************************************************************
    begin                : Fri Dec 29 18:30:00 CEST 2012
    copyright            : (C) 2012 by Ale Rimoldi
    email                : a.l.e@ideale.ch

 ***************************************************************************/

#include <QDebug>

#include "epubexportMetadata.h"

EpubExportMetadata::EpubExportMetadata()
{
}

EpubExportMetadata::~EpubExportMetadata()
{
}

QDebug operator<<(QDebug dbg, const EpubExportMetadata &metadata)
{
    dbg.nospace() << "(" << "Debug not implemented" << ")";
    return dbg.space();
}