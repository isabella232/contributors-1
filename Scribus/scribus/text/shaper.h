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

    Modified for Indic unicode support , Aug 2012 
	by 	: Anilkumar KV,  Email: anilankv@gmail.com
 ***************************************************************************/

#ifndef SHAPER_H
#define SHAPER_H

#include "text/storytext.h"
        
class ShaperBase
{
public:
        virtual void shape(int start, int end) = 0; // shaping cannot be a const process - pm
        virtual ~ShaperBase() {}
};


class SCRIBUS_API Shaper : public ShaperBase
{
	const StoryText * m_story;
	Shaper(){}

public:
	Shaper(StoryText *stry);
	void shape(int start, int end);
};

#endif // SHAPER_H
