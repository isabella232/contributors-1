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

#include "module/epubexportStructure.h"

#include "module/epubexportScribusDoc.h"

#include "scribusdoc.h"

EpubExportScribusDoc::EpubExportScribusDoc()
{
}

EpubExportScribusDoc::~EpubExportScribusDoc()
{
}

bool EpubExportScribusDoc::next()
{
    bool result = false;
    docCurrent = NULL;
    if (!doc.isEmpty())
    {
        docCurrent = doc.takeFirst();
        // TODO: add here the content of readItems()
        result = true;
    }
    return result;
}

EpubExportStructureMetadata EpubExportScribusDoc::getMetadata()
{
    EpubExportStructureMetadata metadata = EpubExportStructureMetadata();
	DocumentInformation documentMetadata = docCurrent->documentInfo();

	// for mandatory fields we make later sure that they are filled
    metadata.title = documentMetadata.title();
    metadata.language = documentMetadata.langInfo();
    metadata.id = documentMetadata.ident();
    metadata.date = documentMetadata.date();
    metadata.language = documentMetadata.langInfo();
    metadata.title = documentMetadata.title();
    metadata.author = documentMetadata.author();
	// non mandatory fields from the main screen
    metadata.subject = documentMetadata.subject();
    metadata.keywords = documentMetadata.keywords();
	metadata.description = documentMetadata.comments();
	metadata.publisher = documentMetadata.publisher();
	// non mandatory fields from the further information screen
	metadata.contributor = documentMetadata.contrib();
	metadata.type = documentMetadata.type();
    metadata.format = documentMetadata.format();
	metadata.source = documentMetadata.source();
	metadata.relation = documentMetadata.relation();
	metadata.coverage = documentMetadata.cover();
	metadata.rights = documentMetadata.rights();

    return metadata;
}

QDebug operator<<(QDebug dbg, const EpubExportScribusDoc &scribusDoc)
{
    dbg.nospace() << "(" << "Debug not implemented" << ")";
    return dbg.space();
}
