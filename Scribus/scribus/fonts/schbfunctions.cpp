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
#include <unicode/uversion.h>
#include <unicode/uchar.h>
#include <unicode/uscript.h>


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
	hb_unicode_funcs_set_eastasian_width_func(funcs, (hb_unicode_eastasian_width_func_t)ScHBFunctions::getEastasianWidth, NULL,NULL);
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" ;
}


hb_codepoint_t ScHBFunctions::getMirroring(hb_codepoint_t unicode)
{
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" << unicode ;
	return hb_codepoint_t(QChar::mirroredChar(unicode));
}

hb_unicode_general_category_t ScHBFunctions::getCategory(hb_codepoint_t unicode)
{
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" << unicode ;
//	return UniCatMap[QChar::category(unicode)];
  switch (u_getIntPropertyValue(unicode, UCHAR_GENERAL_CATEGORY))
  {
  case U_UNASSIGNED:			return HB_UNICODE_GENERAL_CATEGORY_UNASSIGNED;

  case U_UPPERCASE_LETTER:		return HB_UNICODE_GENERAL_CATEGORY_UPPERCASE_LETTER;
  case U_LOWERCASE_LETTER:		return HB_UNICODE_GENERAL_CATEGORY_LOWERCASE_LETTER;
  case U_TITLECASE_LETTER:		return HB_UNICODE_GENERAL_CATEGORY_TITLECASE_LETTER;
  case U_MODIFIER_LETTER:		return HB_UNICODE_GENERAL_CATEGORY_MODIFIER_LETTER;
  case U_OTHER_LETTER:			return HB_UNICODE_GENERAL_CATEGORY_OTHER_LETTER;

  case U_NON_SPACING_MARK:		return HB_UNICODE_GENERAL_CATEGORY_NON_SPACING_MARK;
  case U_ENCLOSING_MARK:		return HB_UNICODE_GENERAL_CATEGORY_ENCLOSING_MARK;
  case U_COMBINING_SPACING_MARK:	return HB_UNICODE_GENERAL_CATEGORY_SPACING_MARK;

  case U_DECIMAL_DIGIT_NUMBER:		return HB_UNICODE_GENERAL_CATEGORY_DECIMAL_NUMBER;
  case U_LETTER_NUMBER:			return HB_UNICODE_GENERAL_CATEGORY_LETTER_NUMBER;
  case U_OTHER_NUMBER:			return HB_UNICODE_GENERAL_CATEGORY_OTHER_NUMBER;

  case U_SPACE_SEPARATOR:		return HB_UNICODE_GENERAL_CATEGORY_SPACE_SEPARATOR;
  case U_LINE_SEPARATOR:		return HB_UNICODE_GENERAL_CATEGORY_LINE_SEPARATOR;
  case U_PARAGRAPH_SEPARATOR:		return HB_UNICODE_GENERAL_CATEGORY_PARAGRAPH_SEPARATOR;

  case U_CONTROL_CHAR:			return HB_UNICODE_GENERAL_CATEGORY_CONTROL;
  case U_FORMAT_CHAR:			return HB_UNICODE_GENERAL_CATEGORY_FORMAT;
  case U_PRIVATE_USE_CHAR:		return HB_UNICODE_GENERAL_CATEGORY_PRIVATE_USE;
  case U_SURROGATE:			return HB_UNICODE_GENERAL_CATEGORY_SURROGATE;


  case U_DASH_PUNCTUATION:		return HB_UNICODE_GENERAL_CATEGORY_DASH_PUNCTUATION;
  case U_START_PUNCTUATION:		return HB_UNICODE_GENERAL_CATEGORY_OPEN_PUNCTUATION;
  case U_END_PUNCTUATION:		return HB_UNICODE_GENERAL_CATEGORY_CLOSE_PUNCTUATION;
  case U_CONNECTOR_PUNCTUATION:		return HB_UNICODE_GENERAL_CATEGORY_CONNECT_PUNCTUATION;
  case U_OTHER_PUNCTUATION:		return HB_UNICODE_GENERAL_CATEGORY_OTHER_PUNCTUATION;

  case U_MATH_SYMBOL:			return HB_UNICODE_GENERAL_CATEGORY_MATH_SYMBOL;
  case U_CURRENCY_SYMBOL:		return HB_UNICODE_GENERAL_CATEGORY_CURRENCY_SYMBOL;
  case U_MODIFIER_SYMBOL:		return HB_UNICODE_GENERAL_CATEGORY_MODIFIER_SYMBOL;
  case U_OTHER_SYMBOL:			return HB_UNICODE_GENERAL_CATEGORY_OTHER_SYMBOL;

  case U_INITIAL_PUNCTUATION:		return HB_UNICODE_GENERAL_CATEGORY_INITIAL_PUNCTUATION;
  case U_FINAL_PUNCTUATION:		return HB_UNICODE_GENERAL_CATEGORY_FINAL_PUNCTUATION;
  }

  return HB_UNICODE_GENERAL_CATEGORY_UNASSIGNED;
}

hb_script_t ScHBFunctions::getScript(hb_codepoint_t unicode, hb_codepoint_t codepoint)
{
//printf ( "(%s)(%d)(%s) -(%X)(%X)  \n", __FILE__, __LINE__, __func__, unicode, codepoint ) ;
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" << unicode ;
	// FIXME_OIF
  UErrorCode status = U_ZERO_ERROR;
  UScriptCode scriptCode = uscript_getScript(codepoint, &status);
  switch ((int) scriptCode)
  {
#define MATCH_SCRIPT(C) case USCRIPT_##C: return HB_SCRIPT_##C
#define MATCH_SCRIPT2(C1, C2) case USCRIPT_##C1: return HB_SCRIPT_##C2
  MATCH_SCRIPT (COMMON);             /* Zyyy */
  MATCH_SCRIPT (INHERITED);          /* Qaai */
  MATCH_SCRIPT (ARABIC);             /* Arab */
  MATCH_SCRIPT (ARMENIAN);           /* Armn */
  MATCH_SCRIPT (BENGALI);            /* Beng */
  MATCH_SCRIPT (BOPOMOFO);           /* Bopo */
  MATCH_SCRIPT (CHEROKEE);           /* Cher */
  MATCH_SCRIPT (COPTIC);             /* Qaac */
  MATCH_SCRIPT (CYRILLIC);           /* Cyrl (Cyrs) */
  MATCH_SCRIPT (DESERET);            /* Dsrt */
  MATCH_SCRIPT (DEVANAGARI);         /* Deva */
  MATCH_SCRIPT (ETHIOPIC);           /* Ethi */
  MATCH_SCRIPT (GEORGIAN);           /* Geor (Geon); Geoa) */
  MATCH_SCRIPT (GOTHIC);             /* Goth */
  MATCH_SCRIPT (GREEK);              /* Grek */
  MATCH_SCRIPT (GUJARATI);           /* Gujr */
  MATCH_SCRIPT (GURMUKHI);           /* Guru */
  MATCH_SCRIPT (HAN);                /* Hani */
  MATCH_SCRIPT (HANGUL);             /* Hang */
  MATCH_SCRIPT (HEBREW);             /* Hebr */
  MATCH_SCRIPT (HIRAGANA);           /* Hira */
  MATCH_SCRIPT (KANNADA);            /* Knda */
  MATCH_SCRIPT (KATAKANA);           /* Kana */
  MATCH_SCRIPT (KHMER);              /* Khmr */
  MATCH_SCRIPT (LAO);                /* Laoo */
  MATCH_SCRIPT (LATIN);              /* Latn (Latf); Latg) */
  MATCH_SCRIPT (MALAYALAM);          /* Mlym */
  MATCH_SCRIPT (MONGOLIAN);          /* Mong */
  MATCH_SCRIPT (MYANMAR);            /* Mymr */
  MATCH_SCRIPT (OGHAM);              /* Ogam */
  MATCH_SCRIPT (OLD_ITALIC);         /* Ital */
  MATCH_SCRIPT (ORIYA);              /* Orya */
  MATCH_SCRIPT (RUNIC);              /* Runr */
  MATCH_SCRIPT (SINHALA);            /* Sinh */
  MATCH_SCRIPT (SYRIAC);             /* Syrc (Syrj, Syrn); Syre) */
  MATCH_SCRIPT (TAMIL);              /* Taml */
  MATCH_SCRIPT (TELUGU);             /* Telu */
  MATCH_SCRIPT (THAANA);             /* Thaa */
  MATCH_SCRIPT (THAI);               /* Thai */
  MATCH_SCRIPT (TIBETAN);            /* Tibt */
  MATCH_SCRIPT (CANADIAN_ABORIGINAL);/* Cans */
  MATCH_SCRIPT (YI);                 /* Yiii */
  MATCH_SCRIPT (TAGALOG);            /* Tglg */
  MATCH_SCRIPT (HANUNOO);            /* Hano */
  MATCH_SCRIPT (BUHID);              /* Buhd */
  MATCH_SCRIPT (TAGBANWA);           /* Tagb */

  /* Unicode-4.0 additions */
  MATCH_SCRIPT (BRAILLE);            /* Brai */
  MATCH_SCRIPT (CYPRIOT);            /* Cprt */
  MATCH_SCRIPT (LIMBU);              /* Limb */
  MATCH_SCRIPT (OSMANYA);            /* Osma */
  MATCH_SCRIPT (SHAVIAN);            /* Shaw */
  MATCH_SCRIPT (LINEAR_B);           /* Linb */
  MATCH_SCRIPT (TAI_LE);             /* Tale */
  MATCH_SCRIPT (UGARITIC);           /* Ugar */

  /* Unicode-4.1 additions */
  MATCH_SCRIPT (NEW_TAI_LUE);        /* Talu */
  MATCH_SCRIPT (BUGINESE);           /* Bugi */
  MATCH_SCRIPT (GLAGOLITIC);         /* Glag */
  MATCH_SCRIPT (TIFINAGH);           /* Tfng */
  MATCH_SCRIPT (SYLOTI_NAGRI);       /* Sylo */
  MATCH_SCRIPT (OLD_PERSIAN);        /* Xpeo */
  MATCH_SCRIPT (KHAROSHTHI);         /* Khar */

  /* Unicode-5.0 additions */
  MATCH_SCRIPT (UNKNOWN);            /* Zzzz */
  MATCH_SCRIPT (BALINESE);           /* Bali */
  MATCH_SCRIPT (CUNEIFORM);          /* Xsux */
  MATCH_SCRIPT (PHOENICIAN);         /* Phnx */
  MATCH_SCRIPT (PHAGS_PA);           /* Phag */
  MATCH_SCRIPT (NKO);                /* Nkoo */

  /* Unicode-5.1 additions */
  MATCH_SCRIPT (KAYAH_LI);           /* Kali */
  MATCH_SCRIPT (LEPCHA);             /* Lepc */
  MATCH_SCRIPT (REJANG);             /* Rjng */
  MATCH_SCRIPT (SUNDANESE);          /* Sund */
  MATCH_SCRIPT (SAURASHTRA);         /* Saur */
  MATCH_SCRIPT (CHAM);               /* Cham */
  MATCH_SCRIPT (OL_CHIKI);           /* Olck */
  MATCH_SCRIPT (VAI);                /* Vaii */
  MATCH_SCRIPT (CARIAN);             /* Cari */
  MATCH_SCRIPT (LYCIAN);             /* Lyci */
  MATCH_SCRIPT (LYDIAN);             /* Lydi */

  /* Unicode-5.2 additions */
  MATCH_SCRIPT (AVESTAN);                /* Avst */
  MATCH_SCRIPT (BAMUM);                  /* Bamu */
  MATCH_SCRIPT (EGYPTIAN_HIEROGLYPHS);   /* Egyp */
  MATCH_SCRIPT (IMPERIAL_ARAMAIC);       /* Armi */
  MATCH_SCRIPT (INSCRIPTIONAL_PAHLAVI);  /* Phli */
  MATCH_SCRIPT (INSCRIPTIONAL_PARTHIAN); /* Prti */
  MATCH_SCRIPT (JAVANESE);               /* Java */
  MATCH_SCRIPT (KAITHI);                 /* Kthi */
  MATCH_SCRIPT2(LANNA, TAI_THAM);        /* Lana */
  MATCH_SCRIPT (LISU);                   /* Lisu */
  MATCH_SCRIPT (OLD_SOUTH_ARABIAN);      /* Sarb */
  MATCH_SCRIPT2(ORKHON, OLD_TURKIC);     /* Orkh */
  MATCH_SCRIPT (SAMARITAN);              /* Samr */
  MATCH_SCRIPT (TAI_VIET);               /* Tavt */
  }
  return HB_SCRIPT_UNKNOWN;
}

unsigned int ScHBFunctions::getCombiningClass(hb_codepoint_t unicode)
{
//qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")" << unicode ;
	return (unsigned int)QChar::combiningClass ( unicode );
}

unsigned int ScHBFunctions::getEastasianWidth(hb_codepoint_t unicode)
{
qDebug() << "(" << __FILE__ << ")(" << __LINE__ << ")"  ;
  switch (u_getIntPropertyValue(unicode, UCHAR_EAST_ASIAN_WIDTH))
  {
  case U_EA_WIDE:
  case U_EA_FULLWIDTH:
    return 2;
  case U_EA_NEUTRAL:
  case U_EA_AMBIGUOUS:
  case U_EA_HALFWIDTH:
  case U_EA_NARROW:
    return 1;
  }
  return 1;
}


void ScHBFunctions::setBufferFunctions(hb_buffer_t *buf)
{
	if(0 == instance)
		instance = new ScHBFunctions;
	hb_buffer_set_unicode_funcs(buf, funcs);
}

