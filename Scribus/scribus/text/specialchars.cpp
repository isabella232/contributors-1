/*
 For general Scribus (>=1.3.2) copyright and licensing information please refer
 to the COPYING file provided with the program. Following this notice may exist
 a copyright and/or license notice that predates the release of Scribus 1.3.2
 for which a new license (GPL+exception) is in place.
 */
/***************************************************************************
pageitem.cpp  -  description
-------------------
    begin                : Sat Apr 7 2001
    copyright            : (C) 2001 by Franz Schmid
    email                : Franz.Schmid@altmuehlnet.de

    Modified for Indic unicode support , Aug 2012 
	by 	: Anilkumar KV,  Email: anilankv@gmail.com
***************************************************************************/

/***************************************************************************
*                                                                         *
*   This program is free software; you can redistribute it and/or modify  *
*   it under the terms of the GNU General Public License as published by  *
*   the Free Software Foundation; either version 2 of the License, or     *
*   (at your option) any later version.                                   *
*                                                                         *
***************************************************************************/

#include "specialchars.h"

QChar SpecialChars::OBJECT       = QChar(25);
QChar SpecialChars::START_TAG    = QChar(1);
QChar SpecialChars::END_TAG      = QChar(2);
QChar SpecialChars::EMPTY_TAG    = QChar(3);
QChar SpecialChars::TAB          = QChar(9);
QChar SpecialChars::PARSEP       = QChar(13);
QChar SpecialChars::LINEBREAK    = QChar(0x2028);
QChar SpecialChars::COLBREAK     = QChar(26);
QChar SpecialChars::FRAMEBREAK   = QChar(27);
QChar SpecialChars::SHYPHEN      = QChar(0xAD);
QChar SpecialChars::NBHYPHEN     = QChar(0x2011);
QChar SpecialChars::NBSPACE      = QChar(0xA0);
QChar SpecialChars::OLD_NBHYPHEN = QChar(24);
QChar SpecialChars::OLD_NBSPACE  = QChar(29);
QChar SpecialChars::ZWNBSPACE    = QChar(0x2060);
QChar SpecialChars::ZWSPACE      = QChar(0x200B);
QChar SpecialChars::PAGENUMBER   = QChar(30);
QChar SpecialChars::PAGECOUNT    = QChar(23);
QChar SpecialChars::BLANK        = QChar(32);      // SPACE is some macro on my machine - av

SpecialChars::SymbolGlyphs SpecialChars::symbols;

SpecialChars::SymbolGlyphs::SymbolGlyphs() : Return(), NewLine(), Tab(), NonBreak(), NewCol(), NewFrame()
{
	Return.resize(0);
	Return.addQuadPoint(1.98438, 9.14062, 1.98438, 9.14062, 1.98438, 4.03125, 1.98438, 4.03125);
	Return.addQuadPoint(1.98438, 4.03125, 1.98438, 4.03125, 0.546875, 3.45312, 1.09375, 4);
	Return.addQuadPoint(0.546875, 3.45312, 0.546875, 3.45312, 0, 2.0625, 0, 2.92188);
	Return.addQuadPoint(0, 2.0625, 0, 2.0625, 0.65625, 0.5, 0, 1.04688);
	Return.addQuadPoint(0.65625, 0.5, 0.65625, 0.5, 2.3125, 0, 1.28125, 0);
	Return.addQuadPoint(2.3125, 0, 2.3125, 0, 5.40625, 0, 5.40625, 0);
	Return.addQuadPoint(5.40625, 0, 5.40625, 0, 5.40625, 0.84375, 5.40625, 0.84375);
	Return.addQuadPoint(5.40625, 0.84375, 5.40625, 0.84375, 4.70312, 0.84375, 4.70312, 0.84375);
	Return.addQuadPoint(4.70312, 0.84375, 4.70312, 0.84375, 4.70312, 9.14062, 4.70312, 9.14062);
	Return.addQuadPoint(4.70312, 9.14062, 4.70312, 9.14062, 3.875, 9.14062, 3.875, 9.14062);
	Return.addQuadPoint(3.875, 9.14062, 3.875, 9.14062, 3.875, 0.84375, 3.875, 0.84375);
	Return.addQuadPoint(3.875, 0.84375, 3.875, 0.84375, 2.78125, 0.84375, 2.78125, 0.84375);
	Return.addQuadPoint(2.78125, 0.84375, 2.78125, 0.84375, 2.78125, 9.14062, 2.78125, 9.14062);
	Return.addQuadPoint(2.78125, 9.14062, 2.78125, 9.14062, 1.98438, 9.14062, 1.98438, 9.14062);
	NewLine.resize(0);
	NewLine.addQuadPoint(6.51562, 2.625, 6.51562, 2.625, 0.90625, 2.64062, 0.90625, 2.64062);
	NewLine.addQuadPoint(0.90625, 2.64062, 0.90625, 2.64062, 1.4375, 1.92188, 1.26562, 2.1875);
	NewLine.addQuadPoint(1.4375, 1.92188, 1.4375, 1.92188, 1.76562, 1.14062, 1.75, 1.42188);
	NewLine.addQuadPoint(1.76562, 1.14062, 1.76562, 1.14062, 1.60938, 1.03125, 1.60938, 1.03125);
	NewLine.addQuadPoint(1.60938, 1.03125, 1.60938, 1.03125, 0.90625, 1.92188, 0.90625, 1.92188);
	NewLine.addQuadPoint(0.90625, 1.92188, 0.90625, 1.92188, 0, 2.90625, 0.578125, 2.23438);
	NewLine.addQuadPoint(0, 2.90625, 0, 2.90625, 0.75, 3.875, 0.75, 3.875);
	NewLine.addQuadPoint(0.75, 3.875, 0.75, 3.875, 1.57812, 4.78125, 1.1875, 4.40625);
	NewLine.addQuadPoint(1.57812, 4.78125, 1.57812, 4.78125, 1.65625, 4.79688, 1.65625, 4.79688);
	NewLine.addQuadPoint(1.65625, 4.79688, 1.65625, 4.79688, 1.76562, 4.65625, 1.76562, 4.65625);
	NewLine.addQuadPoint(1.76562, 4.65625, 1.76562, 4.65625, 0.90625, 3.17188, 1.73438, 4.34375);
	NewLine.addQuadPoint(0.90625, 3.17188, 0.90625, 3.17188, 0.96875, 3.125, 0.96875, 3.125);
	NewLine.addQuadPoint(0.96875, 3.125, 0.96875, 3.125, 6.75, 3.125, 6.75, 3.125);
	NewLine.addQuadPoint(6.75, 3.125, 6.75, 3.125, 6.51562, 2.625, 6.51562, 2.625);
	NewLine.addQuadPoint(6.51562, 2.625, 6.51562, 2.625, 6.51562, 2.625, 6.51562, 2.625);
	NewLine.addQuadPoint(999999, 999999, 999999, 999999, 999999, 999999, 999999, 999999);
	NewLine.addQuadPoint(6.875, 0, 6.875, 0, 6.51562, 0, 6.51562, 0);
	NewLine.addQuadPoint(6.51562, 0, 6.51562, 0, 6.51562, 2.84375, 6.51562, 2.84375);
	NewLine.addQuadPoint(6.51562, 2.84375, 6.51562, 2.84375, 6.75, 3.125, 6.51562, 3.125);
	NewLine.addQuadPoint(6.75, 3.125, 6.75, 3.125, 6.85938, 3.0625, 6.85938, 3.0625);
	NewLine.addQuadPoint(6.85938, 3.0625, 6.85938, 3.0625, 6.875, 0, 6.875, 0);
	Tab.resize(0);
	Tab.addQuadPoint(4.82812, 3.96875, 4.82812, 3.96875, 4.5625, 3.73438, 4.5625, 3.96875);
	Tab.addQuadPoint(4.5625, 3.73438, 4.5625, 3.73438, 5.07812, 3.10938, 4.5625, 3.57812);
	Tab.addQuadPoint(5.07812, 3.10938, 5.07812, 3.10938, 0, 3.10938, 0, 3.10938);
	Tab.addQuadPoint(0, 3.10938, 0, 3.10938, 0, 2.625, 0, 2.625);
	Tab.addQuadPoint(0, 2.625, 0, 2.625, 5.53125, 2.625, 5.53125, 2.625);
	Tab.addQuadPoint(5.53125, 2.625, 5.53125, 2.625, 6.3125, 1.8125, 6.3125, 1.8125);
	Tab.addQuadPoint(6.3125, 1.8125, 6.3125, 1.8125, 5.64062, 1.29688, 5.64062, 1.29688);
	Tab.addQuadPoint(5.64062, 1.29688, 5.64062, 1.29688, 0, 1.29688, 0, 1.29688);
	Tab.addQuadPoint(0, 1.29688, 0, 1.29688, 0, 0.8125, 0, 0.8125);
	Tab.addQuadPoint(0, 0.8125, 0, 0.8125, 5.01562, 0.8125, 5.01562, 0.8125);
	Tab.addQuadPoint(5.01562, 0.8125, 5.01562, 0.8125, 4.45312, 0.265625, 4.45312, 0.453125);
	Tab.addQuadPoint(4.45312, 0.265625, 4.45312, 0.265625, 4.6875, 0, 4.45312, 0);
	Tab.addQuadPoint(4.6875, 0, 4.6875, 0, 5.90625, 0.828125, 4.875, 0);
	Tab.addQuadPoint(5.90625, 0.828125, 5.90625, 0.828125, 6.9375, 1.79688, 6.9375, 1.64062);
	Tab.addQuadPoint(6.9375, 1.79688, 6.9375, 1.79688, 5.95312, 2.96875, 6.9375, 1.95312);
	Tab.addQuadPoint(5.95312, 2.96875, 5.95312, 2.96875, 4.82812, 3.96875, 4.98438, 3.96875);
	NonBreak.resize(0);
	NonBreak.addQuadPoint(1.32812, 2.59375, 1.32812, 2.59375, 0.390625, 2.21875, 0.796875, 2.59375);
	NonBreak.addQuadPoint(0.390625, 2.21875, 0.390625, 2.21875, 0, 1.3125, 0, 1.84375);
	NonBreak.addQuadPoint(0, 1.3125, 0, 1.3125, 0.390625, 0.390625, 0, 0.765625);
	NonBreak.addQuadPoint(0.390625, 0.390625, 0.390625, 0.390625, 1.32812, 0, 0.796875, 0);
	NonBreak.addQuadPoint(1.32812, 0, 1.32812, 0, 2.23438, 0.390625, 1.85938, 0);
	NonBreak.addQuadPoint(2.23438, 0.390625, 2.23438, 0.390625, 2.60938, 1.29688, 2.60938, 0.765625);
	NonBreak.addQuadPoint(2.60938, 1.29688, 2.60938, 1.29688, 2.23438, 2.21875, 2.60938, 1.84375);
	NonBreak.addQuadPoint(2.23438, 2.21875, 2.23438, 2.21875, 1.32812, 2.59375, 1.875, 2.59375);
	NewCol.resize(0);
	NewCol.addQuadPoint(1.73438, 0, 1.73438, 0, 2.67188, 0.109375, 2.03125, 0);
	NewCol.addQuadPoint(2.67188, 0.109375, 2.67188, 0.109375, 3.59375, 0.203125, 3.26562, 0.21875);
	NewCol.addQuadPoint(3.59375, 0.203125, 3.59375, 0.203125, 3.79688, 0.1875, 3.64062, 0.203125);
	NewCol.addQuadPoint(3.79688, 0.1875, 3.79688, 0.1875, 4, 0.171875, 3.92188, 0.171875);
	NewCol.addQuadPoint(4, 0.171875, 4, 0.171875, 4.20312, 0.1875, 4.20312, 0.1875);
	NewCol.addQuadPoint(4.20312, 0.1875, 4.20312, 0.1875, 4.3125, 1.39062, 4.20312, 0.5625);
	NewCol.addQuadPoint(4.3125, 1.39062, 4.3125, 1.39062, 4.42188, 2.64062, 4.42188, 2.21875);
	NewCol.addQuadPoint(4.42188, 2.64062, 4.42188, 2.64062, 4.28125, 2.73438, 4.28125, 2.73438);
	NewCol.addQuadPoint(4.28125, 2.73438, 4.28125, 2.73438, 3.75, 1.03125, 4.01562, 2.64062);
	NewCol.addQuadPoint(3.75, 1.03125, 3.75, 1.03125, 3.67188, 1.03125, 3.67188, 1.03125);
	NewCol.addQuadPoint(3.67188, 1.03125, 3.67188, 1.03125, 0.28125, 6.20312, 0.28125, 6.20312);
	NewCol.addQuadPoint(0.28125, 6.20312, 0.28125, 6.20312, 0, 5.95312, 0.03125, 6.17188);
	NewCol.addQuadPoint(0, 5.95312, 0, 5.95312, 3.35938, 0.71875, 3.35938, 0.71875);
	NewCol.addQuadPoint(3.35938, 0.71875, 3.35938, 0.71875, 3.375, 0.640625, 3.375, 0.640625);
	NewCol.addQuadPoint(3.375, 0.640625, 3.375, 0.640625, 2.4375, 0.484375, 2.79688, 0.5625);
	NewCol.addQuadPoint(2.4375, 0.484375, 2.4375, 0.484375, 1.67188, 0.140625, 1.71875, 0.328125);
	NewCol.addQuadPoint(1.67188, 0.140625, 1.67188, 0.140625, 1.73438, 0, 1.73438, 0);
	NewFrame.resize(0);
	NewFrame.addQuadPoint(1.75, 6.20312, 1.75, 6.20312, 2.67188, 6.09375, 2.0625, 6.20312);
	NewFrame.addQuadPoint(2.67188, 6.09375, 2.67188, 6.09375, 3.60938, 5.98438, 3.28125, 5.98438);
	NewFrame.addQuadPoint(3.60938, 5.98438, 3.60938, 5.98438, 3.84375, 6.01562, 3.6875, 5.98438);
	NewFrame.addQuadPoint(3.84375, 6.01562, 3.84375, 6.01562, 4.07812, 6.03125, 4, 6.03125);
	NewFrame.addQuadPoint(4.07812, 6.03125, 4.07812, 6.03125, 4.20312, 6.01562, 4.20312, 6.01562);
	NewFrame.addQuadPoint(4.20312, 6.01562, 4.20312, 6.01562, 4.32812, 4.79688, 4.21875, 5.625);
	NewFrame.addQuadPoint( 4.32812, 4.79688, 4.32812, 4.79688, 4.42188, 3.5625, 4.42188, 3.98438);
	NewFrame.addQuadPoint(4.42188, 3.5625, 4.42188, 3.5625, 4.29688, 3.45312, 4.29688, 3.45312);
	NewFrame.addQuadPoint(4.29688, 3.45312, 4.29688, 3.45312, 3.75, 5.17188, 4.03125, 3.54688);
	NewFrame.addQuadPoint(3.75, 5.17188, 3.75, 5.17188, 3.67188, 5.17188, 3.67188, 5.17188);
	NewFrame.addQuadPoint(3.67188, 5.17188, 3.67188, 5.17188, 0.28125, 0, 0.28125, 0);
	NewFrame.addQuadPoint(0.28125, 0, 0.28125, 0, 0, 0.25, 0.03125, 0.015625);
	NewFrame.addQuadPoint(0, 0.25, 0, 0.25, 3.375, 5.46875, 3.375, 5.46875);
	NewFrame.addQuadPoint(3.375, 5.46875, 3.375, 5.46875, 3.39062, 5.54688, 3.39062, 5.54688);
	NewFrame.addQuadPoint(3.39062, 5.54688, 3.39062, 5.54688, 2.4375, 5.70312, 2.8125, 5.625);
	NewFrame.addQuadPoint(2.4375, 5.70312, 2.4375, 5.70312, 1.67188, 6.0625, 1.71875, 5.875);
	NewFrame.addQuadPoint(1.67188, 6.0625, 1.67188, 6.0625, 1.75, 6.20312, 1.75, 6.20312);
}


bool SpecialChars::isBreakingSpace(QChar c)
{
//	return c == BLANK || c == ZWSPACE;
	return c.isSpace() && (c != NBSPACE);
}

bool SpecialChars::isExpandingSpace(QChar c)
{
//	return c == BLANK || c == NBSPACE;
	return c.isSpace() && (c != ZWSPACE);
}

bool SpecialChars::isBreak(QChar c, bool includeColBreak)
{
	return (c == PARSEP 
			|| c == LINEBREAK 
			|| c == FRAMEBREAK 
			|| (includeColBreak && c == COLBREAK));
}

int SpecialChars::getCJKAttr(QChar c)
{
	static uchar attr_3000[0x100] = {
		// 0x3000 - 0x3007
		CJK_SPACE,CJK_COMMA,CJK_PERIOD,CJK_NOTOP,CJK_KANJI,CJK_NOTOP,CJK_KANJI,CJK_KANJI,
		// 0x3008 - 0x300f
		CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_FENCE_BEGIN,CJK_FENCE_END,
		// 0x3010 - 0x3017
		CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_KANJI,CJK_KANJI,CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_FENCE_BEGIN,CJK_FENCE_END,
		// 0x3018 - 0x301f
		CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_HYPHEN,CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_FENCE_END,
		// 0x3020 - 0x3027
		CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0x3028 - 0x302f
		CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0x3030 - 0x3037
		CJK_BETWEEN,CJK_BETWEEN,CJK_BETWEEN,CJK_BETWEEN,CJK_BETWEEN,CJK_BETWEEN,CJK_KANJI,CJK_KANJI,
		// 0x3038 - 0x303f
		CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0x3040 - 0x3047
		CJK_KANJI,CJK_NOTOP,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,
		// 0x3048 - 0x304f
		CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x3050 - 0x3057
		CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x3058 - 0x305f
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x3060 - 0x3067
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x3068 - 0x306f
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x3070 - 0x3077
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x3078 - 0x307f
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x3080 - 0x3087
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,
		// 0x3088 - 0x308f
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_NOTOP,CJK_KANA,
		// 0x3090 - 0x3097
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_NOTOP,CJK_NOTOP,CJK_KANJI,
		// 0x3098 - 0x309f
		CJK_KANJI,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_NOTOP,CJK_NOTOP,CJK_KANA,

		// 0x30a0 - 0x30a7
		CJK_KANJI,CJK_NOTOP,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,
		// 0x30a8 - 0x30af
		CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x30b0 - 0x30b7
		CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x30b8 - 0x30bf
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x30c0 - 0x30c7
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x30c8 - 0x30cf
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x30d0 - 0x30d7
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x30d8 - 0x30df
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,
		// 0x30e0 - 0x30e7
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,CJK_KANA,CJK_NOTOP,
		// 0x30e8 - 0x30ef
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_NOTOP,CJK_KANA,
		// 0x30f0 - 0x30f7
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_KANA,CJK_NOTOP,CJK_NOTOP,CJK_KANA,
		// 0x30f8 - 0x30ff
		CJK_KANA,CJK_KANA,CJK_KANA,CJK_MIDPOINT,CJK_NOTOP,CJK_NOTOP,CJK_NOTOP,CJK_KANA
	};

	static uchar attr_ff00[0x61] = {
		// 0xff00 - 0xff07
		CJK_SPACE,CJK_DELMITER,CJK_KANJI,CJK_PREFIX,CJK_PREFIX,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff08 - 0xff0f
		CJK_FENCE_BEGIN,CJK_FENCE_END,CJK_KANJI,CJK_KANJI,CJK_COMMA,CJK_BETWEEN,CJK_PERIOD,CJK_KANJI,
		// 0xff10 - 0xff17
		CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff18 - 0xff1f
		CJK_KANJI,CJK_KANJI,CJK_MIDPOINT,CJK_MIDPOINT,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_DELMITER,
		// 0xff20 - 0xff27
		CJK_KANJI,CJK_KANJI,CJK_MIDPOINT,CJK_MIDPOINT,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff28 - 0xff2f
		CJK_KANJI,CJK_KANJI,CJK_MIDPOINT,CJK_MIDPOINT,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff30 - 0xff37
		CJK_KANJI,CJK_KANJI,CJK_MIDPOINT,CJK_MIDPOINT,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff38 - 0xff3f
		CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_FENCE_BEGIN,CJK_KANJI,CJK_FENCE_END,CJK_KANJI,CJK_KANJI,
		// 0xff40 - 0xff47
		CJK_KANJI,CJK_KANJI,CJK_MIDPOINT,CJK_MIDPOINT,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff48 - 0xff4f
		CJK_KANJI,CJK_KANJI,CJK_MIDPOINT,CJK_MIDPOINT,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff50 - 0xff57
		CJK_KANJI,CJK_KANJI,CJK_MIDPOINT,CJK_MIDPOINT,CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_KANJI,
		// 0xff58 - 0xff5f
		CJK_KANJI,CJK_KANJI,CJK_KANJI,CJK_FENCE_BEGIN,CJK_KANJI,CJK_FENCE_END,CJK_BETWEEN,CJK_FENCE_BEGIN,
		// 0xff60
		CJK_FENCE_END
	};
	ushort code = c.unicode();
	if(code >= 0x3100 && code < 0xa000){
		return CJK_KANJI;
	}

	int attr = 0;
	if(code >= 0x3000 && code < 0x3100){
		attr = attr_3000[code - 0x3000];
	} else if( code >= 0xff00 && code <= 0xff60 ){
		attr = attr_ff00[code - 0xff00];
	}
	if( attr != 0 ){
		if(attr == CJK_COMMA || attr == CJK_PERIOD || attr == CJK_NOTOP || attr == CJK_FENCE_END )
			attr |= CJK_NOBREAK_BEFORE;
		else if(attr == CJK_FENCE_BEGIN )
			attr |= CJK_NOBREAK_AFTER;
		else if(attr == CJK_MIDPOINT || attr == CJK_HYPHEN || attr == CJK_DELMITER )
			attr |= CJK_NOBREAK_BEFORE;
	}
	return attr;
}
