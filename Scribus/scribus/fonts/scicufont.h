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

#ifndef SCICUFONT_H
#define SCICUFONT_H

#include <ft2build.h>
#include FT_TRUETYPE_TABLES_H
#include FT_TRUETYPE_TAGS_H

#include "layout/LEFontInstance.h"

#include <QMap>

class ScICUFont : public LEFontInstance
{
public:
	ScICUFont ( FT_Face ftface );
	~ScICUFont();
	// implements pure virtual methods of LEFontInstance

	const void* getFontTable(LETag   tableTag ) const;
	le_bool 	canDisplay (LEUnicode32 ch) const {return true;}
	le_int32 	getUnitsPerEM () const;
	LEGlyphID 	mapCharToGlyph (LEUnicode32 ch) const ;
	void 	getGlyphAdvance (LEGlyphID glyph, LEPoint &advance) const;
	le_bool 	getGlyphPoint (LEGlyphID glyph, le_int32 pointNumber, LEPoint &point) const;
	float 	getXPixelsPerEm () const ;
	float 	getYPixelsPerEm () const ;
	float 	getScaleFactorX () const ;
	float 	getScaleFactorY () const ;
	le_int32 	getAscent () const ;
	le_int32 	getDescent () const;
	le_int32 	getLeading () const;

	static void regTables(LETag   tableTag, unsigned char *t){instance->tables[tableTag] = t;}

private:
	FT_Face face;
	static ScICUFont *instance;
	QMap<LETag, unsigned char*> tables;

};

#endif // SCICUFONT_H
