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

#ifndef SCBIDI_H
#define SCBIDI_H

#include "scribusapi.h"
#include <QList>
#include <QString>
#include <QHash>

#include "third_party/fribidi/fribidi.h"

class SCRIBUS_API ScBidi
{
	ScBidi(){}

	FriBidiLevel * bidiLevel;
	FriBidiStrIndex * LToV;
	FriBidiCharType bidiCT;

	static QHash<QChar::Direction, FriBidiCharType> mapCT;
public:
	ScBidi(const QString& txt);
	~ScBidi();

	bool isLTR(const unsigned int& idx) const;
	bool isRTL(const unsigned int& idx) const;

	// helper
	static QHash<QChar::Direction, FriBidiCharType> createCTMap();

};

#endif // SCBIDI_H
