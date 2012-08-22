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

#include "scbidi.h"
#include <QDebug>

QHash<QChar::Direction, FriBidiCharType> ScBidi::createCTMap()
{
	QHash<QChar::Direction, FriBidiCharType> ret;
	ret.insert(QChar::DirL, FRIBIDI_TYPE_LTR);
	ret.insert(QChar::DirR, FRIBIDI_TYPE_RTL);
	ret.insert(QChar::DirAL, FRIBIDI_TYPE_AL);
	ret.insert(QChar::DirLRE, FRIBIDI_TYPE_LRE);
	ret.insert(QChar::DirRLE, FRIBIDI_TYPE_RLE);
	ret.insert(QChar::DirLRO, FRIBIDI_TYPE_LRO);
	ret.insert(QChar::DirRLO, FRIBIDI_TYPE_RLO);
	ret.insert(QChar::DirPDF, FRIBIDI_TYPE_PDF);
	ret.insert(QChar::DirEN, FRIBIDI_TYPE_EN);
	ret.insert(QChar::DirAN, FRIBIDI_TYPE_AN);
	ret.insert(QChar::DirES, FRIBIDI_TYPE_ES);
	ret.insert(QChar::DirET, FRIBIDI_TYPE_ET);
	ret.insert(QChar::DirCS, FRIBIDI_TYPE_CS);
	ret.insert(QChar::DirNSM, FRIBIDI_TYPE_NSM);
	ret.insert(QChar::DirBN, FRIBIDI_TYPE_BN);
	ret.insert(QChar::DirB, FRIBIDI_TYPE_BS);
	ret.insert(QChar::DirS, FRIBIDI_TYPE_SS);
	ret.insert(QChar::DirWS, FRIBIDI_TYPE_WS);
	ret.insert(QChar::DirON, FRIBIDI_TYPE_ON);
	return ret;
}

QHash<QChar::Direction, FriBidiCharType> ScBidi::mapCT = ScBidi::createCTMap();


ScBidi::ScBidi(const QString& txt)
{
	if(txt.isEmpty())
		return;
	const unsigned int tLen(txt.length());
	FriBidiChar * bidiChar(new FriBidiChar[tLen]);
	bidiLevel = new FriBidiLevel[tLen];
//	LToV = new FriBidiStrIndex[tLen];
	bidiCT = mapCT[txt.at(0).direction()];
	for(unsigned int i(0); i < tLen; ++i)
		bidiChar[i] = txt.at(i).unicode();
	fribidi_log2vis_get_embedding_levels(bidiChar, tLen, &bidiCT, bidiLevel);
//	fribidi_log2vis(bidiChar, tLen, &bidiCT, 0, LToV, 0, bidiLevel);
	// DEBUG
//	QString dbgStr;
//	for(unsigned int i(0); i < tLen; ++i)
//		dbgStr += QString("+%1+").arg(txt.at(i));
//	qDebug()<<dbgStr;
//	dbgStr.clear();
//	for(unsigned int i(0); i < tLen; ++i)
//		dbgStr += QString("+%1+").arg(fribidi_is_char_rtl(bidiLevel, bidiCT, i));
//	qDebug()<<dbgStr;
//	//
	delete bidiChar;

}


ScBidi::~ScBidi()
{
	delete bidiLevel;
//	delete LToV;
}


bool ScBidi::isLTR(const unsigned int &idx) const
{
	return !fribidi_is_char_rtl(bidiLevel, bidiCT, idx);
}

bool ScBidi::isRTL(const unsigned int &idx) const
{
	return fribidi_is_char_rtl(bidiLevel, bidiCT, idx);
}
