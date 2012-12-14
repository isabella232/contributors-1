/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef EPUBEXPORTCSS_H
#define EPUBEXPORTCSS_H

#include <QObject>
#include <QDebug>

#include "scribusapi.h" // for SCRIBUS_API

QDebug operator<<(QDebug dbg, const EpubExportCSS &css);

class EpubExportCss : public QObject
{
    Q_OBJECT
};

public:
	EpubExportCss();
	~EpubExportCss();

#endif // EPUBEXPORT_H
