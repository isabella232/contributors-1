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


#ifndef SCHBFUNCTIONS_H
#define SCHBFUNCTIONS_H

#include <QMap>
#include <QChar>

#include "third_party/harfbuzz/src/hb.h"
//#include "third_party/harfbuzz/src/hb-unicode.h"
//#include "third_party/harfbuzz/src/hb-buffer.h"

class ScFace_ttf;

/**
  Harfbuzz library expects the client to provide a bunch of functions
  in order to perform some of its operations. While it now provides
  some of them as optional packages, it's at the price of GLib dependency.
  */

class ScHBFunctions
{
	static ScHBFunctions * instance;

	ScHBFunctions();

	static hb_unicode_funcs_t * funcs;
	static QMap<QChar, hb_unicode_general_category_t> UniCatMap;

	static hb_codepoint_t getMirroring (hb_codepoint_t unicode);
	static hb_unicode_general_category_t getCategory (hb_codepoint_t unicode);
	static unsigned int getCombiningClass (hb_codepoint_t unicode);
	static unsigned int getEastasianWidth (hb_codepoint_t unicode);
	static hb_script_t getScript (hb_codepoint_t unicode, hb_codepoint_t codepoint);

public:
	static void setBufferFunctions(hb_buffer_t * buf);
};

#endif // SCHBFUNCTIONS_H
