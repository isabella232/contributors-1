/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef EPUBEXPORTSCRIBUSDOC_H
#define EPUBEXPORTSCRIBUSDOC_H

#include <QObject>
#include <QDebug>

#include "scribusapi.h" // for SCRIBUS_API

class ScribusDoc;
class DocumentInformation;

class EpubExportStructureMetadata;

class EpubExportScribusDoc : public QObject
{
    Q_OBJECT

public:
	EpubExportScribusDoc();
	~EpubExportScribusDoc();

    void add(ScribusDoc* doc) {this->doc << doc;}
    ScribusDoc* get() {return (doc.isEmpty() ? NULL : doc.first());} // TODO: remove this method? it's here for the transition from the direct access to ScribusDoc to the use of EpubExportScribusDoc (ale/20121215)
    EpubExportStructureMetadata getMetadata();
private:
    QList<ScribusDoc*> doc;
};

QDebug operator<<(QDebug dbg, const EpubExportScribusDoc &scribusDoc);

#endif // EPUBEXPORTSCRIBUSDOC_H
