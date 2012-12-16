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
#include <QUuid> // for generated the uuid if no isbn&co has been defined

#include "module/epubexportStructure.h"
#include "scribuscore.h" // for reading the gui language

#include "documentinformation.h"

EpubExportStructure::EpubExportStructure()
{
}

EpubExportStructure::~EpubExportStructure()
{
}

void EpubExportStructure::read(EpubExportStructureMetadata metadata)
{
    this->metadata = metadata;
	if (this->metadata.title == "")
		this->metadata.title =filename;
	// TODO: if (documentMetadata.author() == "") // -> it's recommended not obligatory!
	// TODO: if (documentMetadata.authorSort() == "") // -> it's recommended not obligatory!
	if (metadata.language == "")
		metadata.language = ScCore->getGuiLanguage();
	if (metadata.language == "")
		metadata.language = "en_GB"; // scribus' default language is english (or rather en-GB?)
	if (metadata.id == "")
		metadata.id = "urn:uuid:"+QUuid::createUuid().toString().remove("{" ).remove("}" ); // Sigil/Misc/Utility.cpp -> Utility::CreateUUID()
	// TODO: store the generated uuid in the scribus document information?
	if (metadata.date == "")
		metadata.date = QDate::currentDate().toString(Qt::ISODate);
}

QDebug operator<<(QDebug dbg, const EpubExportStructure &structure)
{
    dbg.nospace() << "(" << "Debug not implemented" << ")";
    return dbg.space();
}
QDebug operator<<(QDebug dbg, const EpubExportStructureMetadata &metadata)
{
    dbg.nospace() << "(" << "Debug not implemented" << ")";
    return dbg.space();
}
