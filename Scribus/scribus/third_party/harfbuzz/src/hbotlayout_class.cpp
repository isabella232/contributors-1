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

#include "hbotlayout_class.h"


#include "hb-ot-layout-private.hh"

#include "hb-ot-layout-gdef-private.hh"
#include "hb-ot-layout-gsub-private.hh"
#include "hb-ot-layout-gpos-private.hh"


HBOtLayout::HBOtLayout(hb_face_t *face)
	:m_face(face)
{

}

HBOtLayout::~HBOtLayout()
{
	if(scriptTags) delete scriptTags;
	if(languageTags) delete languageTags;
	if(featureTags) delete featureTags;

	if(scriptIndexes) delete scriptIndexes;
	if(languageIndexes) delete languageIndexes;
	if(featureIndexes) delete featureIndexes;
}

bool HBOtLayout::set(HBOtLayout::Hierarchy h, const hb_tag_t &tag)
{
	if(h == Table)
	{
		if((tag == HB_OT_TAG_GSUB)
			&& (&_get_gsub (m_face) != &Null(GSUB)))
		{
			currentTable = tag;
			return true;
		}
		else if((tag == HB_OT_TAG_GPOS)
			&& (&_get_gpos (m_face) != &Null(GPOS)))
		{
			currentTable == tag;
			return true;
		}
		return false;
	}
	else if(h == Script)
	{
		if(currentTable == 0)
			return false;
		const GSUBGPOS &g = get_gsubgpos_table(m_face, currentTable);
		if (g.find_script_index(tag, currentScriptIndex))
		{
			currentScript = tag;
			return true;
		}
		return false;
	}
	else if(h == Language)
	{
		if((currentTable == 0)
			|| (currentScript == 0))
			return false;
		const GSUBGPOS &g = get_gsubgpos_table(m_face, currentTable);
		const Script &s = g.get_script(currentScriptIndex);
		if (s.find_lang_sys_index (tag, currentLanguageIndex))
		{
			currentLanguage = tag;
			return true;
		}
		return false;

	}
	return false;
}

unsigned int HBOtLayout::count(HBOtLayout::Hierarchy h) const
{
	if(h == Script)
	{
		if(currentTable == 0)
			return 0;
		const GSUBGPOS &g = get_gsubgpos_table(m_face, currentTable);
		return g.get_script_count();
	}
	else if(h == Language)
	{
		if((currentTable == 0)
			|| (currentScript == 0))
			return 0;
		const GSUBGPOS &g = get_gsubgpos_table(m_face, currentTable);
		const Script &s = g.get_script(currentScriptIndex);
		return s.get_lang_sys_count();
	}
	else if(h == Feature)
	{
		if((currentTable == 0)
			|| (currentScript == 0)
			|| (currentLanguage == 0))
			return 0;
		const GSUBGPOS &g = get_gsubgpos_table(m_face, currentTable);
		const Script &s = g.get_script(currentScriptIndex);
		const LangSys &l = s.get_lang_sys(currentLanguageIndex);
		return l.get_feature_count();
	}
	return 0;
}

hb_tag_t * HBOtLayout::getTags(HBOtLayout::Hierarchy h) const
{
	if(h == Script)
	{
		if(currentTable == 0)
			return 0;
		unsigned int scriptCount(count(Script));
		if(scriptTags)
		{
			delete scriptTags;
			scriptTags = 0;
		}
		if(scriptCount > 0)
		{
			scriptTags = new hb_tag_t[scriptCount];
			const GSUBGPOS &g = get_gsubgpos_table(m_face, currentTable);
			g.get_script_tags(0, scriptCount, scriptTags);
		}
		return scriptTags;
	}
	else if(h == Language)
	{
		if((currentTable == 0)
			|| (currentScript == 0))
			return 0;

	}
	else if(h == Feature)
	{
		if((currentTable == 0)
			|| (currentScript == 0)
			|| (currentLanguage == 0))
			return 0;

	}
	return 0;
}