/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
    begin                : Jan 2005
    copyright            : (C) 2005 by Craig Bradney
    email                : cbradney@zip.com.au
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
 
#include <iostream>

#include <QDir>
#include <QFileInfo>
#include <QMap>
#include <QObject>
#include <QStringList> 

#include "scconfig.h"
#include "langmgr.h"
#include "scpaths.h"

LanguageManager * LanguageManager::m_instance = 0;
LanguageManager * LanguageManager::instance()
{
	if(!m_instance)
	{
		m_instance = new LanguageManager;
		Q_ASSERT(m_instance);
		m_instance->init();
	}
	return m_instance;
}

void LanguageManager::init(bool generateInstalledList)
{
	//generateUntranslatedLangList();
	generateLangList();
	if (generateInstalledList)
		generateInstalledLangList();
}

void LanguageManager::generateLangList()
{
	// TODO get rid of the redundant key, the english name.
	// So internally language would always be manipulated as a code and otherwise presented translated.
	langList.insert("af",       langPair("Afrikaans",           QObject::tr( "Afrikaans" )) );
	langList.insert("ar",       langPair("Arabic",              QObject::tr( "Arabic" )) );
	langList.insert("sq",       langPair("Albanian",            QObject::tr( "Albanian" )) );
	langList.insert("eu",       langPair("Basque",              QObject::tr( "Basque" )) );
	langList.insert("bn",       langPair("Bengali",             QObject::tr( "Bengali" )) );
	langList.insert("br",       langPair("Breton",              QObject::tr( "Breton" )) );
	langList.insert("bg",       langPair("Bulgarian",           QObject::tr( "Bulgarian" )) );
	langList.insert("ca",       langPair("Catalan",             QObject::tr( "Catalan" )) );
	langList.insert("zh",       langPair("Chinese",             QObject::tr( "Chinese" )) );
	langList.insert("zh_TW",    langPair("Chinese (Trad.)",     QObject::tr( "Chinese (Trad.)" )) );
	langList.insert("hr",       langPair("Croatian",            QObject::tr( "Croatian" )) );
	langList.insert("cs",       langPair("Czech",               QObject::tr( "Czech" )) );
	langList.insert("cs_CZ",    langPair("Czech",               QObject::tr( "Czech" )) );
	langList.insert("da",       langPair("Danish",              QObject::tr( "Danish" )) );
	langList.insert("da_DK",    langPair("Danish",              QObject::tr( "Danish" )) );
	langList.insert("dz",       langPair("Dzongkha",            QObject::tr( "Dzongkha" )) );
	langList.insert("nl",       langPair("Dutch",               QObject::tr( "Dutch" )) );
	langList.insert("en",       langPair("English",             QObject::tr( "English" )) );
	langList.insert("en_AU",    langPair("English (Australian)",QObject::tr( "English (Australian)" )) );
	langList.insert("en_GB",    langPair("English (British)",   QObject::tr( "English (British)" )) );
	langList.insert("en_US",    langPair("English (American)",  QObject::tr( "English (American)" )) );
	langList.insert("eo",       langPair("Esperanto",           QObject::tr( "Esperanto" )) );
	langList.insert("et",       langPair("Estonian",            QObject::tr( "Estonian" )) );
	langList.insert("de",       langPair("German",              QObject::tr( "German" )) );
	langList.insert("de_CH",    langPair("German (Swiss)",      QObject::tr( "German (Swiss)" )) );
	langList.insert("de_1901",  langPair("German (Trad.)",      QObject::tr( "German (Trad.)" )) );
	langList.insert("fi",       langPair("Finnish",             QObject::tr( "Finnish" )) );
	langList.insert("fr",       langPair("French",              QObject::tr( "French" )) );
	langList.insert("fr_FR",    langPair("French",              QObject::tr( "French" )) );
	langList.insert("gl",       langPair("Galician",            QObject::tr( "Galician" )) );
	langList.insert("el",       langPair("Greek",               QObject::tr( "Greek" )) );
	langList.insert("he",       langPair("Hebrew",              QObject::tr( "Hebrew" )) );
	langList.insert("hi",       langPair("Hindi",              QObject::tr( "Hindi" )) );
	langList.insert("hu",       langPair("Hungarian",           QObject::tr( "Hungarian" )) );
	langList.insert("ia",       langPair("Latin",               QObject::tr( "Latin" )) );
	langList.insert("is",       langPair("Icelandic",           QObject::tr( "Icelandic" )) );
	langList.insert("id",       langPair("Indonesian",          QObject::tr( "Indonesian" )) );
	langList.insert("it",       langPair("Italian",             QObject::tr( "Italian" )) );
	langList.insert("ja",       langPair("Japanese",            QObject::tr( "Japanese" )) );
	langList.insert("km",       langPair("Khmer",               QObject::tr( "Khmer" )) );
	langList.insert("ko",       langPair("Korean",              QObject::tr( "Korean" )) );
	langList.insert("ku",       langPair("Kurdish",             QObject::tr( "Kurdish" )) );
	langList.insert("lo",       langPair("Lao",                 QObject::tr( "Lao" )) );
	langList.insert("la",       langPair("Latin",               QObject::tr( "Latin" )) );
	langList.insert("lt",       langPair("Lithuanian",          QObject::tr( "Lithuanian" )) );
	langList.insert("lt_LT",    langPair("Lithuanian",          QObject::tr( "Lithuanian" )) );
	langList.insert("lu",       langPair("Luxembourgish",       QObject::tr( "Luxembourgish" )) );
	//We might need &#00E5; for this accented a
	langList.insert("nb",       langPair("Norwegian (Bokmål)",  QObject::trUtf8( "Norwegian (Bokm\303\245l)" )) );
	langList.insert("nb_NO",    langPair("Norwegian (Bokmål)",  QObject::trUtf8( "Norwegian (Bokm\303\245l)" )) );
	langList.insert("nn",       langPair("Norwegian (Nnyorsk)", QObject::tr( "Norwegian (Nnyorsk)" )) );
	langList.insert("nn_NO",    langPair("Norwegian (Nnyorsk)", QObject::tr( "Norwegian (Nnyorsk)" )) );
	langList.insert("no",       langPair("Norwegian",           QObject::tr( "Norwegian" )) );
	langList.insert("no_NO",    langPair("Norwegian",           QObject::tr( "Norwegian" )) );
	langList.insert("pl",       langPair("Polish",              QObject::tr( "Polish" )) );
	langList.insert("pl_PL",    langPair("Polish",              QObject::tr( "Polish" )) );
	langList.insert("pt",       langPair("Portuguese",          QObject::tr( "Portuguese" )) );
	langList.insert("pt_BR",    langPair("Portuguese (BR)",     QObject::tr( "Portuguese (BR)" )) );
	langList.insert("ro",       langPair("Romanian",            QObject::tr( "Romanian" )) );
	langList.insert("ru",       langPair("Russian",             QObject::tr( "Russian" )) );
	langList.insert("sa",       langPair("Sanskrit",            QObject::tr( "Sanskrit" )) );
	langList.insert("es",       langPair("Spanish",             QObject::tr( "Spanish" )) );
	langList.insert("es_ES",    langPair("Spanish",             QObject::tr( "Spanish" )) );
	langList.insert("es_LA",    langPair("Spanish (Latin)",     QObject::tr( "Spanish (Latin)" )) );
	langList.insert("sk",       langPair("Slovak",              QObject::tr( "Slovak" )) );
	langList.insert("sk_SK",    langPair("Slovak",              QObject::tr( "Slovak" )) );
	langList.insert("sl",       langPair("Slovenian",           QObject::tr( "Slovenian" )) );
	langList.insert("sr",       langPair("Serbian",             QObject::tr( "Serbian" )) );
	langList.insert("sv",       langPair("Swedish",             QObject::tr( "Swedish" )) );
	langList.insert("th",       langPair("Thai",                QObject::tr( "Thai" )) );
	langList.insert("th_TH",    langPair("Thai",                QObject::tr( "Thai" )) );
	langList.insert("tr",       langPair("Turkish",             QObject::tr( "Turkish" )) );
	langList.insert("tr_TR",    langPair("Turkish",             QObject::tr( "Turkish" )) );
	langList.insert("uk",       langPair("Ukranian",            QObject::tr( "Ukranian" )) );
	langList.insert("vi",       langPair("Vietnamese",          QObject::tr( "Vietnamese" )) );
	langList.insert("cy",       langPair("Welsh",               QObject::tr( "Welsh" )) );


	isoLang.insert(QString("aa"), QString("aar"));
	isoLang.insert(QString("ab"), QString("abk"));
	isoLang.insert(QString("af"), QString("afr"));
	isoLang.insert(QString("ak"), QString("aka"));
	isoLang.insert(QString("sq"), QString("alb"));
	isoLang.insert(QString("am"), QString("amh"));
	isoLang.insert(QString("ar"), QString("ara"));
	isoLang.insert(QString("an"), QString("arg"));
	isoLang.insert(QString("hy"), QString("arm"));
	isoLang.insert(QString("as"), QString("asm"));
	isoLang.insert(QString("av"), QString("ava"));
	isoLang.insert(QString("ae"), QString("ave"));
	isoLang.insert(QString("ay"), QString("aym"));
	isoLang.insert(QString("az"), QString("aze"));
	isoLang.insert(QString("ba"), QString("bak"));
	isoLang.insert(QString("bm"), QString("bam"));
	isoLang.insert(QString("eu"), QString("baq"));
	isoLang.insert(QString("be"), QString("bel"));
	isoLang.insert(QString("bn"), QString("ben"));
	isoLang.insert(QString("bh"), QString("bih"));
	isoLang.insert(QString("bi"), QString("bis"));
	isoLang.insert(QString("bs"), QString("bos"));
	isoLang.insert(QString("br"), QString("bre"));
	isoLang.insert(QString("bg"), QString("bul"));
	isoLang.insert(QString("my"), QString("bur"));
	isoLang.insert(QString("ca"), QString("cat"));
	isoLang.insert(QString("ch"), QString("cha"));
	isoLang.insert(QString("ce"), QString("che"));
	isoLang.insert(QString("zh"), QString("chi"));
	isoLang.insert(QString("cu"), QString("chu"));
	isoLang.insert(QString("cv"), QString("chv"));
	isoLang.insert(QString("kw"), QString("cor"));
	isoLang.insert(QString("co"), QString("cos"));
	isoLang.insert(QString("cr"), QString("cre"));
	isoLang.insert(QString("cs"), QString("cze"));
	isoLang.insert(QString("da"), QString("dan"));
	isoLang.insert(QString("dv"), QString("div"));
	isoLang.insert(QString("nl"), QString("dut"));
	isoLang.insert(QString("dz"), QString("dzo"));
	isoLang.insert(QString("en"), QString("eng"));
	isoLang.insert(QString("eo"), QString("epo"));
	isoLang.insert(QString("et"), QString("est"));
	isoLang.insert(QString("ee"), QString("ewe"));
	isoLang.insert(QString("fo"), QString("fao"));
	isoLang.insert(QString("fj"), QString("fij"));
	isoLang.insert(QString("fi"), QString("fin"));
	isoLang.insert(QString("fr"), QString("fre"));
	isoLang.insert(QString("fy"), QString("fry"));
	isoLang.insert(QString("ff"), QString("ful"));
	isoLang.insert(QString("ka"), QString("geo"));
	isoLang.insert(QString("de"), QString("ger"));
	isoLang.insert(QString("gd"), QString("gla"));
	isoLang.insert(QString("ga"), QString("gle"));
	isoLang.insert(QString("gl"), QString("glg"));
	isoLang.insert(QString("gv"), QString("glv"));
	isoLang.insert(QString("el"), QString("gre"));
	isoLang.insert(QString("gn"), QString("grn"));
	isoLang.insert(QString("gu"), QString("guj"));
	isoLang.insert(QString("ht"), QString("hat"));
	isoLang.insert(QString("ha"), QString("hau"));
	isoLang.insert(QString("he"), QString("heb"));
	isoLang.insert(QString("hz"), QString("her"));
	isoLang.insert(QString("hi"), QString("hin"));
	isoLang.insert(QString("ho"), QString("hmo"));
	isoLang.insert(QString("hr"), QString("hrv"));
	isoLang.insert(QString("hu"), QString("hun"));
	isoLang.insert(QString("ig"), QString("ibo"));
	isoLang.insert(QString("is"), QString("ice"));
	isoLang.insert(QString("io"), QString("ido"));
	isoLang.insert(QString("ii"), QString("iii"));
	isoLang.insert(QString("iu"), QString("iku"));
	isoLang.insert(QString("ie"), QString("ile"));
	isoLang.insert(QString("ia"), QString("ina"));
	isoLang.insert(QString("id"), QString("ind"));
	isoLang.insert(QString("ik"), QString("ipk"));
	isoLang.insert(QString("it"), QString("ita"));
	isoLang.insert(QString("jv"), QString("jav"));
	isoLang.insert(QString("ja"), QString("jpn"));
	isoLang.insert(QString("kl"), QString("kal"));
	isoLang.insert(QString("kn"), QString("kan"));
	isoLang.insert(QString("ks"), QString("kas"));
	isoLang.insert(QString("kr"), QString("kau"));
	isoLang.insert(QString("kk"), QString("kaz"));
	isoLang.insert(QString("km"), QString("khm"));
	isoLang.insert(QString("ki"), QString("kik"));
	isoLang.insert(QString("rw"), QString("kin"));
	isoLang.insert(QString("ky"), QString("kir"));
	isoLang.insert(QString("kv"), QString("kom"));
	isoLang.insert(QString("kg"), QString("kon"));
	isoLang.insert(QString("ko"), QString("kor"));
	isoLang.insert(QString("kj"), QString("kua"));
	isoLang.insert(QString("ku"), QString("kur"));
	isoLang.insert(QString("lo"), QString("lao"));
	isoLang.insert(QString("la"), QString("lat"));
	isoLang.insert(QString("lv"), QString("lav"));
	isoLang.insert(QString("li"), QString("lim"));
	isoLang.insert(QString("ln"), QString("lin"));
	isoLang.insert(QString("lt"), QString("lit"));
	isoLang.insert(QString("lb"), QString("ltz"));
	isoLang.insert(QString("lu"), QString("lub"));
	isoLang.insert(QString("lg"), QString("lug"));
	isoLang.insert(QString("mk"), QString("mac"));
	isoLang.insert(QString("mh"), QString("mah"));
	isoLang.insert(QString("ml"), QString("mal"));
	isoLang.insert(QString("mi"), QString("mao"));
	isoLang.insert(QString("mr"), QString("mar"));
	isoLang.insert(QString("ms"), QString("may"));
	isoLang.insert(QString("mg"), QString("mlg"));
	isoLang.insert(QString("mt"), QString("mlt"));
	isoLang.insert(QString("mn"), QString("mon"));
	isoLang.insert(QString("na"), QString("nau"));
	isoLang.insert(QString("nv"), QString("nav"));
	isoLang.insert(QString("nr"), QString("nbl"));
	isoLang.insert(QString("nd"), QString("nde"));
	isoLang.insert(QString("ng"), QString("ndo"));
	isoLang.insert(QString("ne"), QString("nep"));
	isoLang.insert(QString("nn"), QString("nno"));
	isoLang.insert(QString("nb"), QString("nob"));
	isoLang.insert(QString("no"), QString("nor"));
	isoLang.insert(QString("ny"), QString("nya"));
	isoLang.insert(QString("oc"), QString("oci"));
	isoLang.insert(QString("oj"), QString("oji"));
	isoLang.insert(QString("or"), QString("ori"));
	isoLang.insert(QString("om"), QString("orm"));
	isoLang.insert(QString("os"), QString("oss"));
	isoLang.insert(QString("pa"), QString("pan"));
	isoLang.insert(QString("fa"), QString("per"));
	isoLang.insert(QString("pi"), QString("pli"));
	isoLang.insert(QString("pl"), QString("pol"));
	isoLang.insert(QString("pt"), QString("por"));
	isoLang.insert(QString("ps"), QString("pus"));
	isoLang.insert(QString("qu"), QString("que"));
	isoLang.insert(QString("rm"), QString("roh"));
	isoLang.insert(QString("ro"), QString("rum"));
	isoLang.insert(QString("rn"), QString("run"));
	isoLang.insert(QString("ru"), QString("rus"));
	isoLang.insert(QString("sg"), QString("sag"));
	isoLang.insert(QString("sa"), QString("san"));
	isoLang.insert(QString("si"), QString("sin"));
	isoLang.insert(QString("sk"), QString("slo"));
	isoLang.insert(QString("sl"), QString("slv"));
	isoLang.insert(QString("se"), QString("sme"));
	isoLang.insert(QString("sm"), QString("smo"));
	isoLang.insert(QString("sn"), QString("sna"));
	isoLang.insert(QString("sd"), QString("snd"));
	isoLang.insert(QString("so"), QString("som"));
	isoLang.insert(QString("st"), QString("sot"));
	isoLang.insert(QString("es"), QString("spa"));
	isoLang.insert(QString("sc"), QString("srd"));
	isoLang.insert(QString("sr"), QString("srp"));
	isoLang.insert(QString("ss"), QString("ssw"));
	isoLang.insert(QString("su"), QString("sun"));
	isoLang.insert(QString("sw"), QString("swa"));
	isoLang.insert(QString("sv"), QString("swe"));
	isoLang.insert(QString("ty"), QString("tah"));
	isoLang.insert(QString("ta"), QString("tam"));
	isoLang.insert(QString("tt"), QString("tat"));
	isoLang.insert(QString("te"), QString("tel"));
	isoLang.insert(QString("tg"), QString("tgk"));
	isoLang.insert(QString("tl"), QString("tgl"));
	isoLang.insert(QString("th"), QString("tha"));
	isoLang.insert(QString("bo"), QString("tib"));
	isoLang.insert(QString("ti"), QString("tir"));
	isoLang.insert(QString("to"), QString("ton"));
	isoLang.insert(QString("tn"), QString("tsn"));
	isoLang.insert(QString("ts"), QString("tso"));
	isoLang.insert(QString("tk"), QString("tuk"));
	isoLang.insert(QString("tr"), QString("tur"));
	isoLang.insert(QString("tw"), QString("twi"));
	isoLang.insert(QString("ug"), QString("uig"));
	isoLang.insert(QString("uk"), QString("ukr"));
	isoLang.insert(QString("ur"), QString("urd"));
	isoLang.insert(QString("uz"), QString("uzb"));
	isoLang.insert(QString("ve"), QString("ven"));
	isoLang.insert(QString("vi"), QString("vie"));
	isoLang.insert(QString("vo"), QString("vol"));
	isoLang.insert(QString("cy"), QString("wel"));
	isoLang.insert(QString("wa"), QString("wln"));
	isoLang.insert(QString("wo"), QString("wol"));
	isoLang.insert(QString("xh"), QString("xho"));
	isoLang.insert(QString("yi"), QString("yid"));
	isoLang.insert(QString("yo"), QString("yor"));
	isoLang.insert(QString("za"), QString("zha"));
	isoLang.insert(QString("zu"), QString("zul"));

	// Following lists and maps are somehow reversed (if possible), meaning that  we list only what deviates from default (lazyness inside?)

	// default is LTR
	RTLLang << QString("ar");
	RTLLang << QString("he");

	// http://www.microsoft.com/typography/otspec/scripttags.htm
	// default is "latn"
	scriptTag.insert(QString("ar"), QString("arab"));
	scriptTag.insert(QString("hi"), QString("deva"));
	// TODO_OIF ...continue

	// http://www.microsoft.com/typography/otspec/languagetags.htm
	// default is "DFLT"
	// note that a tag _MUST_ be 4 chars long (padded with space)
	langTag.insert(QString("ar"), QString("ARA "));
	langTag.insert(QString("hi"), QString("HIN "));
	// TODO_OIF ...continue


}

void LanguageManager::generateInstalledLangList()
{
	QString path = ScPaths::instance().translationDir();
	QString langAbbrev;
	QMap<QString, langPair>::Iterator it;
	QDir dir(path , "*.*", QDir::Name, QDir::Files | QDir::NoSymLinks);
	if (dir.exists() && (dir.count() != 0))
	{
		for (uint i = 0; i < dir.count(); ++i) 
		{
			QFileInfo file(path + dir[i]);
			if (file.suffix().toLower() == "qm")
			{
				langAbbrev = file.completeSuffix().remove(".qm");
				if ((it=langList.find(langAbbrev))!=langList.end())
						installedLangList.insert(it.key(), it.value().second);
			}
		}
	}
}

const QStringList LanguageManager::getAllLangs(bool getTranslated)
{
	QStringList ret;
	foreach(const langPair& lp, langList)
	{
		if(getTranslated)
		{
			if(!ret.contains(lp.second))
				ret << lp.second;
		}
		else
		{
			if(!ret.contains(lp.first))
				ret << lp.first;
		}
	}
	return ret;
}

const QString LanguageManager::getLangFromAbbrev(QString langAbbrev, bool getTranslated)
{
	QMap<QString, langPair>::Iterator it;
	if ((it=langList.find(langAbbrev))!=langList.end())
	{
		if (getTranslated)
			return it.value().second;
		else
			return it.value().first;
	}
	else
		return "";	
}

const QString LanguageManager::getAbbrevFromLang(QString lang, bool getFromTranslated, bool useInstalled)
{
	QMap<QString, langPair>::Iterator it;
	if (lang == "English" || lang == QObject::tr( "English"))
		useInstalled = false;
	if (useInstalled)
	{
		for (it=langList.begin();it!=langList.end();++it)
		{
			if (installedLangList.find(it.key()) != installedLangList.end())
			{
				if (getFromTranslated && it.value().second==lang)
					return it.key();
				if (!getFromTranslated && it.value().first==lang)
					return it.key();
			}
		}
	}
	else
	{
		for (it=langList.begin();it!=langList.end();++it)
		{
// 			if (installedLangList.find(it.key()) != installedLangList.end())
// 			{
			if (getFromTranslated && it.value().second==lang)
				return it.key();
			if (!getFromTranslated && it.value().first==lang)
				return it.key();
// 			}
		}
	}
	return "";
}

const QString LanguageManager::getLangFromTransLang(QString lang)
{
	QMap<QString, langPair>::Iterator it;
	for (it=langList.begin();it!=langList.end();++it)
	{
		if (it.value().second==lang)
			return it.value().first;
	}
	return "";
}

const QString LanguageManager::getTransLangFromLang(QString lang)
{
	QMap<QString, langPair>::Iterator it;
	// Seems something is missing here!
	QString enLang(QObject::tr( "English"));
	if ((lang == "English") || (lang == enLang))
		return enLang;
	
	for (it=langList.begin();it!=langList.end();++it)
	{
		if (it.value().first==lang)
			return it.value().second;
	}
	return "";
}

const QString LanguageManager::getIsoLangFromAbbr(QString abbr)
{
	if(isoLang.contains(abbr))
		return isoLang.value(abbr);
	return QString();
}

void LanguageManager::fillInstalledStringList(QStringList *stringListToFill, bool addDefaults) 
{
	if (stringListToFill)
	{
		QMap<QString, QString>::Iterator it;

		if (addDefaults) 
		{
			stringListToFill->append("");
			stringListToFill->append( QObject::tr( "English" ));
		}

		for (it=installedLangList.begin();it!=installedLangList.end();++it)
			stringListToFill->append(it.value());
	}
}

void LanguageManager::printInstalledList()
{
	QMap<QString, QString>::Iterator it;

	for (it=installedLangList.begin();it!=installedLangList.end();++it)
		std::cout << it.key().leftJustified(6).toStdString() << ": " << it.value().toStdString() << std::endl;
}

QString LanguageManager::numericSequence(QString seq)
{
	QString retSeq;
	const int nsBengali=0,nsDevanagari=1,nsGujarati=2,nsGurumukhi=3,nsKannada=4,nsMalayalam=5,nsOriya=6,nsTamil=7,nsTelugu=8,nsTibetan=9,nsLepcha=10;
	switch (1)
	{
		case nsBengali:
			retSeq+="";
			break;
		case nsDevanagari:
			retSeq+="०१२३४५६७८९";
			break;
		case nsGujarati:
			retSeq+="૦૧૨૩૪૫૬૭૮૯";
			break;
		case nsGurumukhi:
			retSeq+="੦੧੨੩੪੫੬੭੮੯";
			break;
		case nsKannada:
			retSeq+="";
			break;
		case nsMalayalam:
			retSeq+="";
			break;
		case nsOriya:
			retSeq+="";
			break;
		case nsTamil:
			retSeq+="";
			break;
		case nsTelugu:
			retSeq+="";
			break;
		case nsTibetan:
			retSeq+="";
			break;
		case nsLepcha:
			retSeq+="";
			break;
		default:
			retSeq="0123456789";
			break;
	}
	return retSeq;
}

bool LanguageManager::findDictionaries(QStringList &sl)
{
	sl=ScPaths::instance().spellDirs();
	if (sl.count()==0)
		return false;
	return true;
}

void LanguageManager::findDictionarySets(QStringList &dictionaryPaths, QMap<QString, QString> &dictionaryMap)
{
	for (int i=0; i<dictionaryPaths.count(); ++i)
	{
		// Find the dic and aff files in the location
		QDir dictLocation(dictionaryPaths.at(i));
		QStringList dictFilters("*.dic");
		QStringList dictList(dictLocation.entryList(dictFilters, QDir::Files, QDir::Name));
		dictList.replaceInStrings(".dic","");

		//Ensure we have aff+dic file pairs, remove any hyphenation dictionaries from the list
		QString dictName;
		foreach(dictName, dictList)
		{
			if (!QFile::exists(dictionaryPaths.at(i)+dictName+".aff"))
				dictList.removeAll(dictName);
			else
			{
				if (!dictionaryMap.contains(dictName))
					dictionaryMap.insert(dictName, dictionaryPaths.at(i)+dictName);
			}
		}
//		qDebug()<<"Number of dictionaries/AFFs found in"<<dictionaryPaths.at(i)<<":"<<dictList.count();
	}
}

bool LanguageManager::isRightToLeft(const QString &langAbbr)
{
	return RTLLang.contains(langAbbr);
}

LanguageManager::~LanguageManager()
{
	langList.clear();
	installedLangList.clear();
	hyphLangList.clear();
}

void LanguageManager::addHyphLang(const QString & lang, const QString & filename)
{
	hyphLangList[lang] = filename;
}

const QString LanguageManager::getHyphFilename(const QString & lang, bool langIsAbbreviated)
{
	if(langIsAbbreviated)
		return hyphLangList.value(lang);
	return hyphLangList.value(getAbbrevFromLang(lang, false, false));
}

const QStringList LanguageManager::hyphLangs()
{
	return hyphLangList.keys();
}


const QString LanguageManager::getScriptTag(const QString &abbr)
{
	if(scriptTag.contains(abbr))
		return scriptTag.value(abbr);
	return QString("latn");
}

const QString LanguageManager::getLangTag(const QString &abbr)
{
	if(langTag.contains(abbr))
		return langTag.value(abbr);
	return QString("DFLT");
}


