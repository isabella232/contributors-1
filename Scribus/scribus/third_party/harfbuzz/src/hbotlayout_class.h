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

#ifndef HBOTLAYOUT_H
#define HBOTLAYOUT_H

#include "hb-common.h"
#include "hb-buffer.h"
#include "hb-font.h"

#include "hb-ot-tag.h"

class HBOtLayout
{
	hb_face_t * m_face;

	hb_tag_t * scriptTags;
	hb_tag_t * languageTags;
	hb_tag_t * featureTags;

	unsigned int * scriptIndexes;
	unsigned int * languageIndexes;
	unsigned int * featureIndexes;

	hb_tag_t currentTable;
	hb_tag_t currentScript;
	hb_tag_t currentLanguage;

	unsigned int currentScriptIndex;
	unsigned int currentLanguageIndex;

public:
	enum Hierarchy{
		Table,
		Script,
		Language,
		Feature
	};

	HBOtLayout(hb_face_t * face);
	~HBOtLayout();

	bool set(Hierarchy h, const hb_tag_t& tag);
	unsigned int count(Hierarchy) const;
	// a pity we don't have std++
	hb_tag_t * getTags(Hierarchy h) const;
	unsigned int * getIndexes(Hierarchy h) const;

};

#endif // HBOTLAYOUT_H