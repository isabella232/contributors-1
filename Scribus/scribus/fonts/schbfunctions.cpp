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


#include "schbfunctions.h"
#include <QDebug>

QMap<QChar, hb_unicode_general_category_t> ScHBFunctions::UniCatMap;
ScHBFunctions * ScHBFunctions::instance = 0;
hb_unicode_funcs_t * ScHBFunctions::funcs = 0;

ScHBFunctions::ScHBFunctions()
{
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
	UniCatMap[QChar::Mark_NonSpacing] = HB_UNICODE_GENERAL_CATEGORY_NON_SPACING_MARK ;
//	UniCatMap[QChar::Mark_SpacingCombining] = HB_UNICODE_GENERAL_CATEGORY_COMBINING_MARK ;
	UniCatMap[QChar::Mark_Enclosing] = HB_UNICODE_GENERAL_CATEGORY_ENCLOSING_MARK ;
	UniCatMap[QChar::Number_DecimalDigit] = HB_UNICODE_GENERAL_CATEGORY_DECIMAL_NUMBER ;
	UniCatMap[QChar::Number_Letter] = HB_UNICODE_GENERAL_CATEGORY_LETTER_NUMBER ;
	UniCatMap[QChar::Number_Other] = HB_UNICODE_GENERAL_CATEGORY_OTHER_NUMBER ;
	UniCatMap[QChar::Separator_Space] = HB_UNICODE_GENERAL_CATEGORY_SPACE_SEPARATOR ;
	UniCatMap[QChar::Separator_Line] = HB_UNICODE_GENERAL_CATEGORY_LINE_SEPARATOR ;
	UniCatMap[QChar::Separator_Paragraph] = HB_UNICODE_GENERAL_CATEGORY_PARAGRAPH_SEPARATOR ;
	UniCatMap[QChar::Other_Control] = HB_UNICODE_GENERAL_CATEGORY_CONTROL ;
	UniCatMap[QChar::Other_Format] = HB_UNICODE_GENERAL_CATEGORY_FORMAT ;
	UniCatMap[QChar::Other_Surrogate] = HB_UNICODE_GENERAL_CATEGORY_SURROGATE ;
	UniCatMap[QChar::Other_PrivateUse] = HB_UNICODE_GENERAL_CATEGORY_PRIVATE_USE ;
	UniCatMap[QChar::Other_NotAssigned] = HB_UNICODE_GENERAL_CATEGORY_UNASSIGNED ;
	UniCatMap[QChar::Letter_Uppercase] = HB_UNICODE_GENERAL_CATEGORY_UPPERCASE_LETTER ;
	UniCatMap[QChar::Letter_Lowercase] = HB_UNICODE_GENERAL_CATEGORY_LOWERCASE_LETTER ;
	UniCatMap[QChar::Letter_Titlecase] = HB_UNICODE_GENERAL_CATEGORY_TITLECASE_LETTER ;
	UniCatMap[QChar::Letter_Modifier] = HB_UNICODE_GENERAL_CATEGORY_MODIFIER_LETTER ;
	UniCatMap[QChar::Letter_Other] = HB_UNICODE_GENERAL_CATEGORY_OTHER_LETTER ;
	UniCatMap[QChar::Punctuation_Connector] = HB_UNICODE_GENERAL_CATEGORY_CONNECT_PUNCTUATION ;
	UniCatMap[QChar::Punctuation_Dash] = HB_UNICODE_GENERAL_CATEGORY_DASH_PUNCTUATION ;
	UniCatMap[QChar::Punctuation_Open] = HB_UNICODE_GENERAL_CATEGORY_OPEN_PUNCTUATION ;
	UniCatMap[QChar::Punctuation_Close] = HB_UNICODE_GENERAL_CATEGORY_CLOSE_PUNCTUATION ;
	UniCatMap[QChar::Punctuation_InitialQuote] = HB_UNICODE_GENERAL_CATEGORY_INITIAL_PUNCTUATION ;
	UniCatMap[QChar::Punctuation_FinalQuote] = HB_UNICODE_GENERAL_CATEGORY_FINAL_PUNCTUATION ;
	UniCatMap[QChar::Punctuation_Other] = HB_UNICODE_GENERAL_CATEGORY_OTHER_PUNCTUATION ;
	UniCatMap[QChar::Symbol_Math] = HB_UNICODE_GENERAL_CATEGORY_MATH_SYMBOL ;
	UniCatMap[QChar::Symbol_Currency] = HB_UNICODE_GENERAL_CATEGORY_CURRENCY_SYMBOL ;
	UniCatMap[QChar::Symbol_Modifier] = HB_UNICODE_GENERAL_CATEGORY_MODIFIER_SYMBOL ;
	UniCatMap[QChar::Symbol_Other] = HB_UNICODE_GENERAL_CATEGORY_OTHER_SYMBOL ;


	// funcs = hb_unicode_funcs_create();
	funcs = hb_unicode_funcs_create(NULL);
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
	hb_unicode_funcs_set_mirroring_func(funcs, (hb_unicode_mirroring_func_t)ScHBFunctions::getMirroring, NULL, NULL);
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
	hb_unicode_funcs_set_general_category_func(funcs, (hb_unicode_general_category_func_t)ScHBFunctions::getCategory,   NULL,NULL);
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
	hb_unicode_funcs_set_script_func(funcs, (hb_unicode_script_func_t)ScHBFunctions::getScript, NULL, NULL);
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
	hb_unicode_funcs_set_combining_class_func(funcs, (hb_unicode_combining_class_func_t)ScHBFunctions::getCombiningClass, NULL,NULL);
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
//	hb_unicode_funcs_set_eastasian_width_func(funcs, (hb_unicode_eastasian_width_func_t)ScHBFunctions::getEastasianWidth, NULL,NULL);
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
}


hb_codepoint_t ScHBFunctions::getMirroring(hb_codepoint_t unicode)
{
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" << unicode ;
	return hb_codepoint_t(QChar::mirroredChar(unicode));
}

hb_unicode_general_category_t ScHBFunctions::getCategory(hb_codepoint_t unicode)
{
   return UniCatMap[QChar::category(unicode)];
}

hb_script_t ScHBFunctions::getScript(hb_codepoint_t unicode, hb_codepoint_t codepoint)
{
    if ( ( codepoint >= 0x0000 ) && (codepoint <=   0x007F )) return    HB_SCRIPT_INHERITED   ;   //Basic Latin
    if ( ( codepoint >= 0x0080 ) && (codepoint <=   0x00FF )) return    HB_SCRIPT_LATIN       ;   //Latin-1 Supplement
    if ( ( codepoint >= 0x0100 ) && (codepoint <=   0x017F )) return    HB_SCRIPT_LATIN       ;   //Latin Extended-A
    if ( ( codepoint >= 0x0180 ) && (codepoint <=   0x024F )) return    HB_SCRIPT_LATIN       ;   //Latin Extended-B
    if ( ( codepoint >= 0x0250 ) && (codepoint <=   0x02AF )) return    HB_SCRIPT_COMMON      ;   //IPA Extensions
    if ( ( codepoint >= 0x02B0 ) && (codepoint <=   0x02FF )) return    HB_SCRIPT_COMMON      ;   //Spacing Modifier Letters
    if ( ( codepoint >= 0x0300 ) && (codepoint <=   0x036F )) return    HB_SCRIPT_COMMON      ;   //Combining Diacritical Marks
    if ( ( codepoint >= 0x0370 ) && (codepoint <=   0x03FF )) return    HB_SCRIPT_GREEK       ;   //Greek and Coptic
    if ( ( codepoint >= 0x0400 ) && (codepoint <=   0x04FF )) return    HB_SCRIPT_CYRILLIC    ;   //Cyrillic
    if ( ( codepoint >= 0x0500 ) && (codepoint <=   0x052F )) return    HB_SCRIPT_CYRILLIC    ;   //Cyrillic Supplement
    if ( ( codepoint >= 0x0530 ) && (codepoint <=   0x058F )) return    HB_SCRIPT_ARMENIAN    ;   //Armenian
    if ( ( codepoint >= 0x0590 ) && (codepoint <=   0x05FF )) return    HB_SCRIPT_HEBREW      ;   //Hebrew
    if ( ( codepoint >= 0x0600 ) && (codepoint <=   0x06FF )) return    HB_SCRIPT_ARABIC      ;   //Arabic
    if ( ( codepoint >= 0x0700 ) && (codepoint <=   0x074F )) return    HB_SCRIPT_SYRIAC      ;   //Syriac
    if ( ( codepoint >= 0x0750 ) && (codepoint <=   0x077F )) return    HB_SCRIPT_ARABIC      ;   //Arabic Supplement
    if ( ( codepoint >= 0x0780 ) && (codepoint <=   0x07BF )) return    HB_SCRIPT_THAANA      ;   //Thaana
    if ( ( codepoint >= 0x07C0 ) && (codepoint <=   0x07FF )) return    HB_SCRIPT_NKO         ;   //NKo
    if ( ( codepoint >= 0x0800 ) && (codepoint <=   0x083F )) return    HB_SCRIPT_SAMARITAN   ;   //Samaritan
    if ( ( codepoint >= 0x0840 ) && (codepoint <=   0x085F )) return    HB_SCRIPT_MANDAIC     ;   //Mandaic
    if ( ( codepoint >= 0x08A0 ) && (codepoint <=   0x08FF )) return    HB_SCRIPT_ARABIC      ;   //Arabic Extended-A
    if ( ( codepoint >= 0x0900 ) && (codepoint <=   0x097F )) return    HB_SCRIPT_DEVANAGARI  ;   //Devanagari
    if ( ( codepoint >= 0x0980 ) && (codepoint <=   0x09FF )) return    HB_SCRIPT_BENGALI     ;   //Bengali
    if ( ( codepoint >= 0x0A00 ) && (codepoint <=   0x0A7F )) return    HB_SCRIPT_GURMUKHI    ;   //Gurmukhi
    if ( ( codepoint >= 0x0A80 ) && (codepoint <=   0x0AFF )) return    HB_SCRIPT_GUJARATI    ;   //Gujarati
    if ( ( codepoint >= 0x0B00 ) && (codepoint <=   0x0B7F )) return    HB_SCRIPT_ORIYA       ;   //Oriya
    if ( ( codepoint >= 0x0B80 ) && (codepoint <=   0x0BFF )) return    HB_SCRIPT_TAMIL       ;   //Tamil
    if ( ( codepoint >= 0x0C00 ) && (codepoint <=   0x0C7F )) return    HB_SCRIPT_TELUGU      ;   //Telugu
    if ( ( codepoint >= 0x0C80 ) && (codepoint <=   0x0CFF )) return    HB_SCRIPT_KANNADA     ;   //Kannada
    if ( ( codepoint >= 0x0D00 ) && (codepoint <=   0x0D7F )) return    HB_SCRIPT_MALAYALAM   ;   //Malayalam
    if ( ( codepoint >= 0x0D80 ) && (codepoint <=   0x0DFF )) return    HB_SCRIPT_SINHALA     ;   //Sinhala
    if ( ( codepoint >= 0x0E00 ) && (codepoint <=   0x0E7F )) return    HB_SCRIPT_THAI        ;   //Thai
    if ( ( codepoint >= 0x0E80 ) && (codepoint <=   0x0EFF )) return    HB_SCRIPT_LAO         ;   //Lao
    if ( ( codepoint >= 0x0F00 ) && (codepoint <=   0x0FFF )) return    HB_SCRIPT_TIBETAN     ;   //Tibetan
    if ( ( codepoint >= 0x1000 ) && (codepoint <=   0x109F )) return    HB_SCRIPT_MYANMAR     ;   //Myanmar
    if ( ( codepoint >= 0x10A0 ) && (codepoint <=   0x10FF )) return    HB_SCRIPT_GEORGIAN    ;   //Georgian
    if ( ( codepoint >= 0x1100 ) && (codepoint <=   0x11FF )) return    HB_SCRIPT_HANGUL      ;   //Hangul Jamo
    if ( ( codepoint >= 0x1200 ) && (codepoint <=   0x137F )) return    HB_SCRIPT_ETHIOPIC    ;   //Ethiopic
    if ( ( codepoint >= 0x1380 ) && (codepoint <=   0x139F )) return    HB_SCRIPT_ETHIOPIC    ;   //Ethiopic Supplement
    if ( ( codepoint >= 0x13A0 ) && (codepoint <=   0x13FF )) return    HB_SCRIPT_CHEROKEE    ;   //Cherokee
    if ( ( codepoint >= 0x1400 ) && (codepoint <=   0x167F )) return    HB_SCRIPT_CANADIAN_ABORIGINAL      ;   //Unified Canadian Aboriginal Syllabics
    if ( ( codepoint >= 0x1680 ) && (codepoint <=   0x169F )) return    HB_SCRIPT_OGHAM       ;   //Ogham
    if ( ( codepoint >= 0x16A0 ) && (codepoint <=   0x16FF )) return    HB_SCRIPT_RUNIC       ;   //Runic
    if ( ( codepoint >= 0x1700 ) && (codepoint <=   0x171F )) return    HB_SCRIPT_TAGALOG     ;   //Tagalog
    if ( ( codepoint >= 0x1720 ) && (codepoint <=   0x173F )) return    HB_SCRIPT_HANUNOO     ;   //Hanunoo
    if ( ( codepoint >= 0x1740 ) && (codepoint <=   0x175F )) return    HB_SCRIPT_BUHID       ;   //Buhid
    if ( ( codepoint >= 0x1760 ) && (codepoint <=   0x177F )) return    HB_SCRIPT_TAGBANWA    ;   //Tagbanwa
    if ( ( codepoint >= 0x1780 ) && (codepoint <=   0x17FF )) return    HB_SCRIPT_KHMER       ;   //Khmer
    if ( ( codepoint >= 0x1800 ) && (codepoint <=   0x18AF )) return    HB_SCRIPT_MONGOLIAN   ;   //Mongolian
    if ( ( codepoint >= 0x18B0 ) && (codepoint <=   0x18FF )) return    HB_SCRIPT_CANADIAN_ABORIGINAL      ;   //Unified Canadian Aboriginal Syllabics Extended
    if ( ( codepoint >= 0x1900 ) && (codepoint <=   0x194F )) return    HB_SCRIPT_LIMBU       ;   //Limbu
    if ( ( codepoint >= 0x1950 ) && (codepoint <=   0x197F )) return    HB_SCRIPT_TAI_LE      ;   //Tai Le
    if ( ( codepoint >= 0x1980 ) && (codepoint <=   0x19DF )) return    HB_SCRIPT_NEW_TAI_LUE ;   //New Tai Lue
    if ( ( codepoint >= 0x19E0 ) && (codepoint <=   0x19FF )) return    HB_SCRIPT_KHMER       ;   //Khmer Symbols
    if ( ( codepoint >= 0x1A00 ) && (codepoint <=   0x1A1F )) return    HB_SCRIPT_BUGINESE    ;   //Buginese
    if ( ( codepoint >= 0x1A20 ) && (codepoint <=   0x1AAF )) return    HB_SCRIPT_TAI_THAM    ;   //Tai Tham
    if ( ( codepoint >= 0x1B00 ) && (codepoint <=   0x1B7F )) return    HB_SCRIPT_BALINESE    ;   //Balinese
    if ( ( codepoint >= 0x1B80 ) && (codepoint <=   0x1BBF )) return    HB_SCRIPT_COMMON      ;   //Sundanese
    if ( ( codepoint >= 0x1BC0 ) && (codepoint <=   0x1BFF )) return    HB_SCRIPT_COMMON      ;   //Batak
    if ( ( codepoint >= 0x1C00 ) && (codepoint <=   0x1C4F )) return    HB_SCRIPT_LEPCHA      ;   //Lepcha
    if ( ( codepoint >= 0x1C50 ) && (codepoint <=   0x1C7F )) return    HB_SCRIPT_OL_CHIKI    ;   //Ol Chiki
    if ( ( codepoint >= 0x1CC0 ) && (codepoint <=   0x1CCF )) return    HB_SCRIPT_SUNDANESE   ;   //Sundanese Supplement
    if ( ( codepoint >= 0x1CD0 ) && (codepoint <=   0x1CFF )) return    HB_SCRIPT_COMMON      ;   //Vedic Extensions
    if ( ( codepoint >= 0x1D00 ) && (codepoint <=   0x1D7F )) return    HB_SCRIPT_COMMON      ;   //Phonetic Extensions
    if ( ( codepoint >= 0x1D80 ) && (codepoint <=   0x1DBF )) return    HB_SCRIPT_COMMON      ;   //Phonetic Extensions Supplement
    if ( ( codepoint >= 0x1DC0 ) && (codepoint <=   0x1DFF )) return    HB_SCRIPT_COMMON      ;   //Combining Diacritical Marks Supplement
    if ( ( codepoint >= 0x1E00 ) && (codepoint <=   0x1EFF )) return    HB_SCRIPT_COMMON      ;   //Latin Extended Additional
    if ( ( codepoint >= 0x1F00 ) && (codepoint <=   0x1FFF )) return    HB_SCRIPT_COMMON      ;   //Greek Extended
    if ( ( codepoint >= 0x2000 ) && (codepoint <=   0x206F )) return    HB_SCRIPT_INHERITED   ;   //General Punctuation
    if ( ( codepoint >= 0x2070 ) && (codepoint <=   0x209F )) return    HB_SCRIPT_COMMON      ;   //Superscripts and Subscripts
    if ( ( codepoint >= 0x20A0 ) && (codepoint <=   0x20CF )) return    HB_SCRIPT_COMMON      ;   //Currency Symbols
    if ( ( codepoint >= 0x20D0 ) && (codepoint <=   0x20FF )) return    HB_SCRIPT_COMMON      ;   //Combining Diacritical Marks for Symbols
    if ( ( codepoint >= 0x2100 ) && (codepoint <=   0x214F )) return    HB_SCRIPT_COMMON      ;   //Letterlike Symbols
    if ( ( codepoint >= 0x2150 ) && (codepoint <=   0x218F )) return    HB_SCRIPT_COMMON      ;   //Number Forms
    if ( ( codepoint >= 0x2190 ) && (codepoint <=   0x21FF )) return    HB_SCRIPT_COMMON      ;   //Arrows
    if ( ( codepoint >= 0x2200 ) && (codepoint <=   0x22FF )) return    HB_SCRIPT_COMMON      ;   //Mathematical Operators
    if ( ( codepoint >= 0x2300 ) && (codepoint <=   0x23FF )) return    HB_SCRIPT_COMMON      ;   //Miscellaneous Technical
    if ( ( codepoint >= 0x2400 ) && (codepoint <=   0x243F )) return    HB_SCRIPT_COMMON      ;   //Control Pictures
    if ( ( codepoint >= 0x2440 ) && (codepoint <=   0x245F )) return    HB_SCRIPT_COMMON      ;   //Optical Character Recognition
    if ( ( codepoint >= 0x2460 ) && (codepoint <=   0x24FF )) return    HB_SCRIPT_COMMON      ;   //Enclosed Alphanumerics
    if ( ( codepoint >= 0x2500 ) && (codepoint <=   0x257F )) return    HB_SCRIPT_COMMON      ;   //Box Drawing
    if ( ( codepoint >= 0x2580 ) && (codepoint <=   0x259F )) return    HB_SCRIPT_COMMON      ;   //Block Elements
    if ( ( codepoint >= 0x25A0 ) && (codepoint <=   0x25FF )) return    HB_SCRIPT_COMMON      ;   //Geometric Shapes
    if ( ( codepoint >= 0x2600 ) && (codepoint <=   0x26FF )) return    HB_SCRIPT_COMMON      ;   //Miscellaneous Symbols
    if ( ( codepoint >= 0x2700 ) && (codepoint <=   0x27BF )) return    HB_SCRIPT_COMMON      ;   //Dingbats
    if ( ( codepoint >= 0x27C0 ) && (codepoint <=   0x27EF )) return    HB_SCRIPT_COMMON      ;   //Miscellaneous Mathematical Symbols-A
    if ( ( codepoint >= 0x27F0 ) && (codepoint <=   0x27FF )) return    HB_SCRIPT_COMMON      ;   //Supplemental Arrows-A
    if ( ( codepoint >= 0x2800 ) && (codepoint <=   0x28FF )) return    HB_SCRIPT_BRAILLE     ;   //Braille Patterns
    if ( ( codepoint >= 0x2900 ) && (codepoint <=   0x297F )) return    HB_SCRIPT_COMMON      ;   //Supplemental Arrows-B
    if ( ( codepoint >= 0x2980 ) && (codepoint <=   0x29FF )) return    HB_SCRIPT_COMMON      ;   //Miscellaneous Mathematical Symbols-B
    if ( ( codepoint >= 0x2A00 ) && (codepoint <=   0x2AFF )) return    HB_SCRIPT_COMMON      ;   //Supplemental Mathematical Operators
    if ( ( codepoint >= 0x2B00 ) && (codepoint <=   0x2BFF )) return    HB_SCRIPT_COMMON      ;   //Miscellaneous Symbols and Arrows
    if ( ( codepoint >= 0x2C00 ) && (codepoint <=   0x2C5F )) return    HB_SCRIPT_GLAGOLITIC  ;   //Glagolitic
    if ( ( codepoint >= 0x2C60 ) && (codepoint <=   0x2C7F )) return    HB_SCRIPT_COMMON      ;   //Latin Extended-C
    if ( ( codepoint >= 0x2C80 ) && (codepoint <=   0x2CFF )) return    HB_SCRIPT_COPTIC      ;   //Coptic
    if ( ( codepoint >= 0x2D00 ) && (codepoint <=   0x2D2F )) return    HB_SCRIPT_COMMON      ;   //Georgian Supplement
    if ( ( codepoint >= 0x2D30 ) && (codepoint <=   0x2D7F )) return    HB_SCRIPT_TIFINAGH    ;   //Tifinagh
    if ( ( codepoint >= 0x2D80 ) && (codepoint <=   0x2DDF )) return    HB_SCRIPT_ETHIOPIC    ;   //Ethiopic Extended
    if ( ( codepoint >= 0x2DE0 ) && (codepoint <=   0x2DFF )) return    HB_SCRIPT_CYRILLIC    ;   //Cyrillic Extended-A
    if ( ( codepoint >= 0x2E00 ) && (codepoint <=   0x2E7F )) return    HB_SCRIPT_COMMON      ;   //Supplemental Punctuation
    if ( ( codepoint >= 0x2E80 ) && (codepoint <=   0x2EFF )) return    HB_SCRIPT_COMMON      ;   //CJK Radicals Supplement
    if ( ( codepoint >= 0x2F00 ) && (codepoint <=   0x2FDF )) return    HB_SCRIPT_COMMON      ;   //Kangxi Radicals
    if ( ( codepoint >= 0x2FF0 ) && (codepoint <=   0x2FFF )) return    HB_SCRIPT_COMMON      ;   //Ideographic Description Characters
    if ( ( codepoint >= 0x3000 ) && (codepoint <=   0x303F )) return    HB_SCRIPT_COMMON      ;   //CJK Symbols and Punctuation
    if ( ( codepoint >= 0x3040 ) && (codepoint <=   0x309F )) return    HB_SCRIPT_HIRAGANA    ;   //Hiragana
    if ( ( codepoint >= 0x30A0 ) && (codepoint <=   0x30FF )) return    HB_SCRIPT_KATAKANA    ;   //Katakana
    if ( ( codepoint >= 0x3100 ) && (codepoint <=   0x312F )) return    HB_SCRIPT_BOPOMOFO    ;   //Bopomofo
    if ( ( codepoint >= 0x3130 ) && (codepoint <=   0x318F )) return    HB_SCRIPT_HANGUL      ;   //Hangul Compatibility Jamo
    if ( ( codepoint >= 0x3190 ) && (codepoint <=   0x319F )) return    HB_SCRIPT_COMMON      ;   //Kanbun
    if ( ( codepoint >= 0x31A0 ) && (codepoint <=   0x31BF )) return    HB_SCRIPT_BOPOMOFO    ;   //Bopomofo Extended
    if ( ( codepoint >= 0x31C0 ) && (codepoint <=   0x31EF )) return    HB_SCRIPT_COMMON      ;   //CJK Strokes
    if ( ( codepoint >= 0x31F0 ) && (codepoint <=   0x31FF )) return    HB_SCRIPT_KATAKANA    ;   //Katakana Phonetic Extensions
    if ( ( codepoint >= 0x3200 ) && (codepoint <=   0x32FF )) return    HB_SCRIPT_COMMON      ;   //Enclosed CJK Letters and Months
    if ( ( codepoint >= 0x3300 ) && (codepoint <=   0x33FF )) return    HB_SCRIPT_COMMON      ;   //CJK Compatibility
    if ( ( codepoint >= 0x3400 ) && (codepoint <=   0x4DBF )) return    HB_SCRIPT_COMMON      ;   //CJK Unified Ideographs Extension A
    if ( ( codepoint >= 0x4DC0 ) && (codepoint <=   0x4DFF )) return    HB_SCRIPT_COMMON      ;   //Yijing Hexagram Symbols
    if ( ( codepoint >= 0x4E00 ) && (codepoint <=   0x9FFF )) return    HB_SCRIPT_COMMON      ;   //CJK Unified Ideographs
    if ( ( codepoint >= 0xA000 ) && (codepoint <=   0xA48F )) return    HB_SCRIPT_YI          ;   //Yi Syllables
    if ( ( codepoint >= 0xA490 ) && (codepoint <=   0xA4CF )) return    HB_SCRIPT_YI          ;   //Yi Radicals
    if ( ( codepoint >= 0xA4D0 ) && (codepoint <=   0xA4FF )) return    HB_SCRIPT_LISU        ;   //Lisu
    if ( ( codepoint >= 0xA500 ) && (codepoint <=   0xA63F )) return    HB_SCRIPT_VAI         ;   //Vai
    if ( ( codepoint >= 0xA640 ) && (codepoint <=   0xA69F )) return    HB_SCRIPT_CYRILLIC    ;   //Cyrillic Extended-B
    if ( ( codepoint >= 0xA6A0 ) && (codepoint <=   0xA6FF )) return    HB_SCRIPT_BAMUM       ;   //Bamum
    if ( ( codepoint >= 0xA700 ) && (codepoint <=   0xA71F )) return    HB_SCRIPT_COMMON      ;   //Modifier Tone Letters
    if ( ( codepoint >= 0xA720 ) && (codepoint <=   0xA7FF )) return    HB_SCRIPT_LATIN       ;   //Latin Extended-D
    if ( ( codepoint >= 0xA800 ) && (codepoint <=   0xA82F )) return    HB_SCRIPT_SYLOTI_NAGRI;   //Syloti Nagri
    if ( ( codepoint >= 0xA830 ) && (codepoint <=   0xA83F )) return    HB_SCRIPT_COMMON      ;   //Common Indic Number Forms
    if ( ( codepoint >= 0xA840 ) && (codepoint <=   0xA87F )) return    HB_SCRIPT_PHAGS_PA    ;   //Phags-pa
    if ( ( codepoint >= 0xA880 ) && (codepoint <=   0xA8DF )) return    HB_SCRIPT_SAURASHTRA  ;   //Saurashtra
    if ( ( codepoint >= 0xA8E0 ) && (codepoint <=   0xA8FF )) return    HB_SCRIPT_DEVANAGARI  ;   //Devanagari Extended
    if ( ( codepoint >= 0xA900 ) && (codepoint <=   0xA92F )) return    HB_SCRIPT_KAYAH_LI    ;   //Kayah Li
    if ( ( codepoint >= 0xA930 ) && (codepoint <=   0xA95F )) return    HB_SCRIPT_REJANG      ;   //Rejang
    if ( ( codepoint >= 0xA960 ) && (codepoint <=   0xA97F )) return    HB_SCRIPT_HANGUL      ;   //Hangul Jamo Extended-A
    if ( ( codepoint >= 0xA980 ) && (codepoint <=   0xA9DF )) return    HB_SCRIPT_JAVANESE    ;   //Javanese
    if ( ( codepoint >= 0xAA00 ) && (codepoint <=   0xAA5F )) return    HB_SCRIPT_CHAM        ;   //Cham
    if ( ( codepoint >= 0xAA60 ) && (codepoint <=   0xAA7F )) return    HB_SCRIPT_MYANMAR     ;   //Myanmar Extended-A
    if ( ( codepoint >= 0xAA80 ) && (codepoint <=   0xAADF )) return    HB_SCRIPT_TAI_VIET    ;   //Tai Viet
    if ( ( codepoint >= 0xAAE0 ) && (codepoint <=   0xAAFF )) return    HB_SCRIPT_COMMON      ;   //Meetei Mayek Extensions
    if ( ( codepoint >= 0xAB00 ) && (codepoint <=   0xAB2F )) return    HB_SCRIPT_ETHIOPIC    ;   //Ethiopic Extended-A
    if ( ( codepoint >= 0xABC0 ) && (codepoint <=   0xABFF )) return    HB_SCRIPT_COMMON      ;   //Meetei Mayek
    if ( ( codepoint >= 0xAC00 ) && (codepoint <=   0xD7AF )) return    HB_SCRIPT_HANGUL      ;   //Hangul Syllables
    if ( ( codepoint >= 0xD7B0 ) && (codepoint <=   0xD7FF )) return    HB_SCRIPT_HANGUL      ;   //Hangul Jamo Extended-B
    if ( ( codepoint >= 0xD800 ) && (codepoint <=   0xDB7F )) return    HB_SCRIPT_COMMON      ;   //High Surrogates
    if ( ( codepoint >= 0xDB80 ) && (codepoint <=   0xDBFF )) return    HB_SCRIPT_COMMON      ;   //High Private Use Surrogates
    if ( ( codepoint >= 0xDC00 ) && (codepoint <=   0xDFFF )) return    HB_SCRIPT_COMMON      ;   //Low Surrogates
    if ( ( codepoint >= 0xE000 ) && (codepoint <=   0xF8FF )) return    HB_SCRIPT_COMMON      ;   //Private Use Area
    if ( ( codepoint >= 0xF900 ) && (codepoint <=   0xFAFF )) return    HB_SCRIPT_COMMON      ;   //CJK Compatibility Ideographs
    if ( ( codepoint >= 0xFB00 ) && (codepoint <=   0xFB4F )) return    HB_SCRIPT_COMMON      ;   //Alphabetic Presentation Forms
    if ( ( codepoint >= 0xFB50 ) && (codepoint <=   0xFDFF )) return    HB_SCRIPT_COMMON      ;   //Arabic Presentation Forms-A
    if ( ( codepoint >= 0xFE00 ) && (codepoint <=   0xFE0F )) return    HB_SCRIPT_COMMON      ;   //Variation Selectors
    if ( ( codepoint >= 0xFE10 ) && (codepoint <=   0xFE1F )) return    HB_SCRIPT_COMMON      ;   //Vertical Forms
    if ( ( codepoint >= 0xFE20 ) && (codepoint <=   0xFE2F )) return    HB_SCRIPT_COMMON      ;   //Combining Half Marks
    if ( ( codepoint >= 0xFE30 ) && (codepoint <=   0xFE4F )) return    HB_SCRIPT_COMMON      ;   //CJK Compatibility Forms
    if ( ( codepoint >= 0xFE50 ) && (codepoint <=   0xFE6F )) return    HB_SCRIPT_COMMON      ;   //Small Form Variants
    if ( ( codepoint >= 0xFE70 ) && (codepoint <=   0xFEFF )) return    HB_SCRIPT_COMMON      ;   //Arabic Presentation Forms-B
    if ( ( codepoint >= 0xFF00 ) && (codepoint <=   0xFFEF )) return    HB_SCRIPT_COMMON      ;   //Halfwidth and Fullwidth Forms
    if ( ( codepoint >= 0xFFF0 ) && (codepoint <=   0xFFFF )) return    HB_SCRIPT_COMMON      ;   //Specials
    if ( ( codepoint >= 0x10000 ) && (codepoint <=  0x1007F )) return   HB_SCRIPT_LINEAR_B    ;  //Linear B Syllabary
    if ( ( codepoint >= 0x10080 ) && (codepoint <=  0x100FF )) return   HB_SCRIPT_LINEAR_B    ;  //Linear B Ideograms
    if ( ( codepoint >= 0x10100 ) && (codepoint <=  0x1013F )) return   HB_SCRIPT_COMMON      ;  //Aegean Numbers
    if ( ( codepoint >= 0x10140 ) && (codepoint <=  0x1018F )) return   HB_SCRIPT_COMMON      ;  //Ancient Greek Numbers
    if ( ( codepoint >= 0x10190 ) && (codepoint <=  0x101CF )) return   HB_SCRIPT_COMMON      ;  //Ancient Symbols
    if ( ( codepoint >= 0x101D0 ) && (codepoint <=  0x101FF )) return   HB_SCRIPT_COMMON      ;  //Phaistos Disc
    if ( ( codepoint >= 0x10280 ) && (codepoint <=  0x1029F )) return   HB_SCRIPT_LYCIAN      ;  //Lycian
    if ( ( codepoint >= 0x102A0 ) && (codepoint <=  0x102DF )) return   HB_SCRIPT_CARIAN      ;  //Carian
    if ( ( codepoint >= 0x10300 ) && (codepoint <=  0x1032F )) return   HB_SCRIPT_OLD_ITALIC  ;  //Old Italic
    if ( ( codepoint >= 0x10330 ) && (codepoint <=  0x1034F )) return   HB_SCRIPT_GOTHIC      ;  //Gothic
    if ( ( codepoint >= 0x10380 ) && (codepoint <=  0x1039F )) return   HB_SCRIPT_UGARITIC    ;  //Ugaritic
    if ( ( codepoint >= 0x103A0 ) && (codepoint <=  0x103DF )) return   HB_SCRIPT_OLD_PERSIAN ;  //Old Persian
    if ( ( codepoint >= 0x10400 ) && (codepoint <=  0x1044F )) return   HB_SCRIPT_DESERET     ;  //Deseret
    if ( ( codepoint >= 0x10450 ) && (codepoint <=  0x1047F )) return   HB_SCRIPT_SHAVIAN     ;  //Shavian
    if ( ( codepoint >= 0x10480 ) && (codepoint <=  0x104AF )) return   HB_SCRIPT_OSMANYA     ;  //Osmanya
    if ( ( codepoint >= 0x10800 ) && (codepoint <=  0x1083F )) return   HB_SCRIPT_CYPRIOT     ;  //Cypriot Syllabary
    if ( ( codepoint >= 0x10840 ) && (codepoint <=  0x1085F )) return   HB_SCRIPT_IMPERIAL_ARAMAIC      ;  //Imperial Aramaic
    if ( ( codepoint >= 0x10900 ) && (codepoint <=  0x1091F )) return   HB_SCRIPT_PHOENICIAN  ;  //Phoenician
    if ( ( codepoint >= 0x10920 ) && (codepoint <=  0x1093F )) return   HB_SCRIPT_LYDIAN      ;  //Lydian
    if ( ( codepoint >= 0x10980 ) && (codepoint <=  0x1099F )) return   HB_SCRIPT_COMMON      ;  //Meroitic Hieroglyphs
    if ( ( codepoint >= 0x109A0 ) && (codepoint <=  0x109FF )) return   HB_SCRIPT_COMMON      ;  //Meroitic Cursive
    if ( ( codepoint >= 0x10A00 ) && (codepoint <=  0x10A5F )) return   HB_SCRIPT_KHAROSHTHI  ;  //Kharoshthi
    if ( ( codepoint >= 0x10A60 ) && (codepoint <=  0x10A7F )) return   HB_SCRIPT_OLD_SOUTH_ARABIAN   ;  //Old South Arabian
    if ( ( codepoint >= 0x10B00 ) && (codepoint <=  0x10B3F )) return   HB_SCRIPT_AVESTAN     ;  //Avestan
    if ( ( codepoint >= 0x10B40 ) && (codepoint <=  0x10B5F )) return   HB_SCRIPT_INSCRIPTIONAL_PARTHIAN      ;  //Inscriptional Parthian
    if ( ( codepoint >= 0x10B60 ) && (codepoint <=  0x10B7F )) return   HB_SCRIPT_INSCRIPTIONAL_PAHLAVI       ;  //Inscriptional Pahlavi
    if ( ( codepoint >= 0x10C00 ) && (codepoint <=  0x10C4F )) return   HB_SCRIPT_OLD_TURKIC  ;  //Old Turkic
    if ( ( codepoint >= 0x10E60 ) && (codepoint <=  0x10E7F )) return   HB_SCRIPT_COMMON      ;  //Rumi Numeral Symbols
    if ( ( codepoint >= 0x11000 ) && (codepoint <=  0x1107F )) return   HB_SCRIPT_COMMON      ;  //Brahmi
    if ( ( codepoint >= 0x11080 ) && (codepoint <=  0x110CF )) return   HB_SCRIPT_KAITHI      ;  //Kaithi
    if ( ( codepoint >= 0x110D0 ) && (codepoint <=  0x110FF )) return   HB_SCRIPT_COMMON      ;  //Sora Sompeng
    if ( ( codepoint >= 0x11100 ) && (codepoint <=  0x1114F )) return   HB_SCRIPT_COMMON      ;  //Chakma
    if ( ( codepoint >= 0x11180 ) && (codepoint <=  0x111DF )) return   HB_SCRIPT_COMMON      ;  //Sharada
    if ( ( codepoint >= 0x11680 ) && (codepoint <=  0x116CF )) return   HB_SCRIPT_COMMON      ;  //Takri
    if ( ( codepoint >= 0x12000 ) && (codepoint <=  0x123FF )) return   HB_SCRIPT_CUNEIFORM   ;  //Cuneiform
    if ( ( codepoint >= 0x12400 ) && (codepoint <=  0x1247F )) return   HB_SCRIPT_CUNEIFORM   ;  //Cuneiform Numbers and Punctuation
    if ( ( codepoint >= 0x13000 ) && (codepoint <=  0x1342F )) return   HB_SCRIPT_EGYPTIAN_HIEROGLYPHS      ;  //Egyptian Hieroglyphs
    if ( ( codepoint >= 0x16800 ) && (codepoint <=  0x16A3F )) return   HB_SCRIPT_BAMUM       ;  //Bamum Supplement
    if ( ( codepoint >= 0x16F00 ) && (codepoint <=  0x16F9F )) return   HB_SCRIPT_COMMON      ;  //Miao
    if ( ( codepoint >= 0x1B000 ) && (codepoint <=  0x1B0FF )) return   HB_SCRIPT_COMMON      ;  //Kana Supplement
    if ( ( codepoint >= 0x1D000 ) && (codepoint <=  0x1D0FF )) return   HB_SCRIPT_COMMON      ;  //Byzantine Musical Symbols
    if ( ( codepoint >= 0x1D100 ) && (codepoint <=  0x1D1FF )) return   HB_SCRIPT_COMMON      ;  //Musical Symbols
    if ( ( codepoint >= 0x1D200 ) && (codepoint <=  0x1D24F )) return   HB_SCRIPT_COMMON      ;  //Ancient Greek Musical Notation
    if ( ( codepoint >= 0x1D300 ) && (codepoint <=  0x1D35F )) return   HB_SCRIPT_COMMON      ;  //Tai Xuan Jing Symbols
    if ( ( codepoint >= 0x1D360 ) && (codepoint <=  0x1D37F )) return   HB_SCRIPT_COMMON      ;  //Counting Rod Numerals
    if ( ( codepoint >= 0x1D400 ) && (codepoint <=  0x1D7FF )) return   HB_SCRIPT_COMMON      ;  //Mathematical Alphanumeric Symbols
    if ( ( codepoint >= 0x1EE00 ) && (codepoint <=  0x1EEFF )) return   HB_SCRIPT_COMMON      ;  //Arabic Mathematical Alphabetic Symbols
    if ( ( codepoint >= 0x1F000 ) && (codepoint <=  0x1F02F )) return   HB_SCRIPT_COMMON      ;  //Mahjong Tiles
    if ( ( codepoint >= 0x1F030 ) && (codepoint <=  0x1F09F )) return   HB_SCRIPT_COMMON      ;  //Domino Tiles
    if ( ( codepoint >= 0x1F0A0 ) && (codepoint <=  0x1F0FF )) return   HB_SCRIPT_COMMON      ;  //Playing Cards
    if ( ( codepoint >= 0x1F100 ) && (codepoint <=  0x1F1FF )) return   HB_SCRIPT_COMMON      ;  //Enclosed Alphanumeric Supplement
    if ( ( codepoint >= 0x1F200 ) && (codepoint <=  0x1F2FF )) return   HB_SCRIPT_COMMON      ;  //Enclosed Ideographic Supplement
    if ( ( codepoint >= 0x1F300 ) && (codepoint <=  0x1F5FF )) return   HB_SCRIPT_COMMON      ;  //Miscellaneous Symbols And Pictographs
    if ( ( codepoint >= 0x1F600 ) && (codepoint <=  0x1F64F )) return   HB_SCRIPT_COMMON      ;  //Emoticons
    if ( ( codepoint >= 0x1F680 ) && (codepoint <=  0x1F6FF )) return   HB_SCRIPT_COMMON      ;  //Transport And Map Symbols
    if ( ( codepoint >= 0x1F700 ) && (codepoint <=  0x1F77F )) return   HB_SCRIPT_COMMON      ;  //Alchemical Symbols
    if ( ( codepoint >= 0x20000 ) && (codepoint <=  0x2A6DF )) return   HB_SCRIPT_COMMON      ;  //CJK Unified Ideographs Extension B
    if ( ( codepoint >= 0x2A700 ) && (codepoint <=  0x2B73F )) return   HB_SCRIPT_COMMON      ;  //CJK Unified Ideographs Extension C
    if ( ( codepoint >= 0x2B740 ) && (codepoint <=  0x2B81F )) return   HB_SCRIPT_COMMON      ;  //CJK Unified Ideographs Extension D
    if ( ( codepoint >= 0x2F800 ) && (codepoint <=  0x2FA1F )) return   HB_SCRIPT_COMMON      ;  //CJK Compatibility Ideographs Supplement
    if ( ( codepoint >= 0xE0000 ) && (codepoint <=  0xE007F )) return   HB_SCRIPT_COMMON      ;  //Tags
    if ( ( codepoint >= 0xE0100 ) && (codepoint <=  0xE01EF )) return   HB_SCRIPT_COMMON      ;  //Variation Selectors Supplement
    if ( ( codepoint >= 0xF0000 ) && (codepoint <=  0xFFFFF )) return   HB_SCRIPT_COMMON      ;  //Supplementary Private Use Area-A
    if ( ( codepoint >= 0x100000 ) && (codepoint <= 0x10FFFF )) return  HB_SCRIPT_COMMON      ;  //Supplementary Private Use Area-B
  return HB_SCRIPT_UNKNOWN;
}

unsigned int ScHBFunctions::getCombiningClass(hb_codepoint_t unicode)
{
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" << unicode ;
	return (unsigned int)QChar::combiningClass ( unicode );
}

//unsigned int ScHBFunctions::getEastasianWidth(hb_codepoint_t unicode)
//{
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")"  ;
//  switch (u_getIntPropertyValue(unicode, UCHAR_EAST_ASIAN_WIDTH))
//  {
//  case U_EA_WIDE:
//  case U_EA_FULLWIDTH:
//    return 2;
//  case U_EA_NEUTRAL:
//  case U_EA_AMBIGUOUS:
//  case U_EA_HALFWIDTH:
//  case U_EA_NARROW:
//    return 1;
//  }
//  return 1;
//}


void ScHBFunctions::setBufferFunctions(hb_buffer_t *buf)
{
	if(0 == instance)
		instance = new ScHBFunctions;
	hb_buffer_set_unicode_funcs(buf, funcs);
}

