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

#include "scicufont.h"

ScICUFont *ScICUFont::instance = 0;

ScICUFont::ScICUFont ( FT_Face ftface)
		:face ( ftface )
{
	instance = this;
}

ScICUFont::~ ScICUFont()
{
	foreach(unsigned char* p, tables)
	{
		delete p;
	}

}

const void * ScICUFont::getFontTable ( LETag tableTag ) const
{
	FT_ULong length(0);
	if ( !FT_Load_Sfnt_Table ( face, tableTag, 0, NULL, &length ) )
	{
		if ( length > 0 )
		{
// 			qDebug()<<"Table len"<< length;
			FT_Byte * bA = new FT_Byte[length];

			FT_Load_Sfnt_Table ( face, tableTag, 0, bA, &length );

			regTables( tableTag,  bA );
			return  (const void*) tables.value(tableTag);
		}

	}
	return 0;
}

le_int32 ScICUFont::getUnitsPerEM() const
{
	return face->units_per_EM;
}

LEGlyphID ScICUFont::mapCharToGlyph ( LEUnicode32 ch ) const
{
	int gi(FT_Get_Char_Index ( face, ch ));
// 	cerr << "ScICUFont::mapCharToGlyph("<< ch <<") = "<<gi<<std::endl;
	return gi;
}

void ScICUFont::getGlyphAdvance ( LEGlyphID glyph, LEPoint & advance ) const
{
	if ( !FT_Load_Glyph ( face, glyph , FT_LOAD_NO_SCALE ) )
	{
		advance.fX = face->glyph->metrics.horiAdvance;
//		Would be relevant only for fonts with vertical metrics
//		advance.fY = face->glyph->metrics.vertAdvance;
		advance.fY = 0;
	}
	else
	{
		advance.fX = 0;
		advance.fY = 0;
	}
}

le_bool ScICUFont::getGlyphPoint ( LEGlyphID glyph, le_int32 pointNumber, LEPoint & point ) const
{
// 	cerr<< "ScICUFont::getGlyphPoint" <<std::endl;
	return false;
}

float ScICUFont::getXPixelsPerEm() const
{
	return getUnitsPerEM();
}

float ScICUFont::getYPixelsPerEm() const
{
	return getUnitsPerEM();
}

float ScICUFont::getScaleFactorX() const
{
	return 1.0;
}

float ScICUFont::getScaleFactorY() const
{
	return 1.0;
}

le_int32 ScICUFont::getAscent() const
{
	return face->ascender;
}

le_int32 ScICUFont::getDescent() const
{
	return face->descender;
}

le_int32 ScICUFont::getLeading() const
{
	return 0;
}

