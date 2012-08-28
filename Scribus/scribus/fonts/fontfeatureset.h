/***************************************************************************
 *   Copyright (C) 2010 by Pierre Marchand   *
 *   pierre@oep-h.com   *
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

#ifndef FONTFEATURESET_H
#define FONTFEATURESET_H

#include <QList>
#include <QString>
#include <QStringList>

#include "scribusapi.h"

/*! \brief Base Class FontFeatureSet is an interface to expose
	features, at large, that a font would provide.

	note: At this stage, the service provided is as minimal as a listing.
	note2a: If in first intention we want to focus on exposing OpenType
		features, we can also imagine how an scface_ps for example would declare
		ligatures found into the font as a feature.
	note2b: We can imagine this interface to provide informations on
		script or language ability as well.
*/

class SCRIBUS_API FontFeatureSet
{
public:
	enum FeatureType
	{
		Pos,
		Sub,
		Any
	};

	struct Feature
	{
		QString name;
		FeatureType type;
		QString script;
		QString lang;
		Feature(){}
		Feature& operator=(const Feature& other)
		{
			name = other.name;
			type = other.type;
			script = other.script;
			lang = other.lang;
			return *this;
		}
	};

	FontFeatureSet();

	QList<Feature> features(FeatureType type) const {return QList<Feature>();}
};

#endif // FONTFEATURESET_H
