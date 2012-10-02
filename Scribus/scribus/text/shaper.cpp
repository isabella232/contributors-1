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

#include "shaper.h"

#include "text/storytext.h"
#include "text/scbidi.h"
#include "langmgr.h"
#include "hyphenator.h"

#include <QDebug>

Shaper::Shaper(StoryText * stry):
	m_story(stry)
{
//printf ( "(%s)(%d)(%s) \n", __FILE__, __LINE__, __func__) ;
}


void Shaper::shape(int start, int end)
{
	StoryText * story(const_cast<StoryText *>(m_story));
//printf ( "(%s)(%d)(%s) start (%d) end (%d) Item length\n", __FILE__, __LINE__, __func__, start, end ) ;
//	GlyphStore *gs(const_cast<GlyphStore*>(m_story->glyphStore()));
//	LanguageManager * lm(LanguageManager::instance());

	const QString txt(story->text(start, end - start ));
	if(txt.isEmpty()) {
//printf ( "(%s)(%d)(%s) start (%d) end (%d)\n", __FILE__, __LINE__, __func__, start, end ) ;
		return;
        }
	ScBidi bidi(txt);
//	int firstPos(start);
//	story->hyphenateWord(start, end - start + 1, 0, false);
//	for(int i(start); i <= end; ++i)
//	{
//		if(txt.at(i - start).isSpace() || txt.at(i - start).isPunct() || i == end)
//		{
//			story->selfHyphenateWord(firstPos, (i == end) ? i - firstPos + 1 : i - firstPos);
//			firstPos = i + 1;
//		}
//	}

	// DEBUG
//	QString dbStr;
//	for(int dbi(start); dbi <= end; dbi++)
//	{
//
//		if(story->charAttributes(dbi).testFlag(TextFlag_HyphenationPossible))
//		{
//			dbStr.append("[");
//			dbStr.append(story->text(dbi, 1));
//			dbStr.append("]");
//		}
//		else
//			dbStr.append(story->text(dbi, 1));
//	}
//	qDebug()<<dbStr;


	QList<uint> items;
	// redo itemization for this run
	CharStyle ref;
	int itStart(start);
	bool first(true);
	bool currentRTL( bidi.isRTL(0));
	bool previousRTL(currentRTL);
        story->deleteItems( story->findItems(start, end)) ;
	for(int cursor(start); cursor <= end; cursor++ )
	{
//printf ( "(%s)(%d)(%s) start (%d) end (%d) cursor (%d)\n", __FILE__, __LINE__, __func__, start, end, cursor ) ;
		currentRTL = bidi.isRTL(cursor - start);
//		if(currentRTL)
//			story->charAttributes(cursor) |= TextFlag_RightToLeft;
//		else
//			story->charAttributes(cursor) &= ~TextFlag_RightToLeft;
		if(first)
		{
			first = false;
			ref = story->charStyle(cursor) ;
		}
		else
		{
			if((story->charStyle(cursor) != ref)
					|| (currentRTL != previousRTL)
					|| (cursor == end) || (story->text(cursor).unicode() == SpecialChars::PARSEP) )
			{
				if(cursor != end)
				{
					ref = story->charStyle(cursor) ;
					items << story->addItem(itStart, (cursor) - itStart);
//printf ( "(%d)(%s) start (%d / %d) len(%d) cursor (%d) (%c)\n", __LINE__, __func__, itStart, end, (cursor) - itStart, cursor, story->text(cursor).unicode() ) ;
				}
				else
				{
					items << story->addItem(itStart, (cursor) - itStart + 1 );
//printf ( "(%d)(%s) start (%d / %d) len(%d) cursor (%d) (%c)\n", __LINE__, __func__, itStart, end,(cursor) - itStart,  cursor, story->text(cursor).unicode() ) ;
				}
				itStart = cursor;
			}
		}
		if ((story->text(cursor).unicode() < 0xff) ||(story->text(cursor).unicode() == SpecialChars::LINEBREAK) ) {
			if ( itStart != cursor ){
//printf ( "(%d)(%s) start (%d / %d)  len(%d) cursor (%d) (%c)\n", __LINE__, __func__, itStart, end,(cursor) - itStart,  cursor, story->text(cursor).unicode() ) ;
				 items << story->addItem(itStart, (cursor) - itStart );
				itStart = cursor;
			}
                }
//                if ((cursor != end) && ((story->text(cursor + 1).unicode() < 0xff)||(story->text(cursor + 1).unicode() == SpecialChars::LINEBREAK))) {
//printf ( "(%d)(%s) start (%d) end (%d) cursor (%d) (%c)\n", __LINE__, __func__, itStart, end, cursor, story->text(cursor).unicode() ) ;
//			items << story->addItem(itStart, (cursor + 1) - itStart );
//			itStart = cursor + 1;
//                }
		previousRTL = currentRTL;
	}

	foreach(uint it, items)
	{
//printf ( "(%s)(%d)(%s) start (%d) len (%d) item (%d)\n", __FILE__, __LINE__, __func__, story->itemTextPosition(it), story->itemCharCount(it), it ) ;
		if((story->charStyle(story->itemTextPosition(it)).font().type() == ScFace::OTF)
				|| (story->charStyle(story->itemTextPosition(it)).font().type() == ScFace::TTF))
		{
//printf ( "(%s)(%d)(%s) start (%d) len (%d) item (%d) calling shapeText\n", __FILE__, __LINE__, __func__, story->itemTextPosition(it), story->itemCharCount(it), it ) ;
			story->charStyle(story->itemTextPosition(it)).font().shapeText((char *)story, it);
		}
		else
		{
//printf ( "(%s)(%d)(%s) start (%d) len (%d) item (%d) not calling shapeText\n", __FILE__, __LINE__, __func__, story->itemTextPosition(it), story->itemCharCount(it), it ) ;
			// FIXME_OIF
		}
	}
}
