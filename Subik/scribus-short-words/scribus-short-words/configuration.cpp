/*! This is the Scribus Short Words configuratin implementation.
There will be interface for the future Scribus central plugin
config center. maybe :)

This code is based on the Scribus-Vlna plug in rewritten for
international use.

2004 Petr Vanek <petr@yarpen.cz>
with contributions by good people listed in AUTHORS file

This program is free software - see LICENSE file in the distribution
or documentation
*/

#include "config.h"
#include "configuration.h"
#include "version.h"
#include "shortwords.h"

#include <scribus.h>
#include <qdir.h>

extern ScribusApp *ScApp;
extern ShortWords *shortWords;

Config::Config()
{
	QString actCfg;
	QFile fConfig(RC_UI_FILE);
	bool ok;

	if (fConfig.open(IO_ReadOnly))
	{
		fConfig.readLine(actCfg, 8);
		action = actCfg.toInt(&ok, 10);
		if (!ok)
			action = 0;

		fConfig.readLine(actCfg, 8);
		userConfig = actCfg.toInt(&ok, 10);
		if (!ok)
			userConfig = 0;

		fConfig.close();
	} //if
}

Config::~Config()
{
	QFile fConfig(RC_UI_FILE);
	if (fConfig.open(IO_WriteOnly)) {
		QTextStream stream(&fConfig);
		stream << action << "\n" << userConfig << "\n";
		fConfig.close();
	} // if
}

QStringList Config::getShortWordsFromFile(QString lang, QString filename)
{
	// all shorts for one language
	QString shorts = "";
	// one line in cfg. file
	QString aRow;
	// cfg (doesn't) exists for the selected language indicator
	bool success = FALSE;
	// path to the cfg. file
	QFile f;

	f.setName(filename);
	if (!f.exists())
		return QStringList();
	if (f.open(IO_ReadOnly))
	{
		QTextStream t(&f);
		while (!t.eof())
		{
			aRow = t.readLine();
			if (aRow.left(2) == lang)
			{
				success = TRUE;
				shorts += aRow.remove(0, 3);
			}
		}
		f.close();
	}
	if (success)
		return QStringList::split(",", shorts);
	return QStringList();
}

QStringList Config::getShortWords(QString lang)
{
	QStringList allShorts;
	if (userConfig && QFile::exists(RC_PATH_USR))
		return getShortWordsFromFile(lang, RC_PATH_USR);
	if (!userConfig && QFile::exists(RC_PATH_USR))
		allShorts = getShortWordsFromFile(lang, RC_PATH_USR);
	return allShorts + getShortWordsFromFile(lang, RC_PATH);
}

QString Config::getAvailableLanguagesFromFile(QString filename)
{
	QStringList langs;
	QStringList nations;
	QString aRow;

	QFile f(filename);
	if (f.open(IO_ReadOnly))
	{
		QTextStream t(&f);
		while (!t.eof())
		{
			aRow = t.readLine();
			if (aRow.left(1) != "#" && aRow.length() != 0 && aRow.left(1) != " " && !langs.contains(aRow.left(2)))
			{
				nations.append(getLangFromCode(aRow.left(2)));
				langs.append(aRow.left(2));
			}
		}
		f.close();
	}
	else
	{
		return QString();
	}
	if (filename == RC_PATH_USR)
		return shortWords->tr("Custom (optional) configuration: ") + " " + nations.join(", ");
	if (filename == RC_PATH)
		return shortWords->tr("Standard configuration: ") + " " + nations.join(", ");
	return nations.join(", "); // save return only
}

QString Config::getAvailableLanguages()
{
	QString allConfig = getAvailableLanguagesFromFile(RC_PATH);
	if (QFile::exists(RC_PATH_USR))
		allConfig += "<br>" + getAvailableLanguagesFromFile(RC_PATH_USR) + "";
	return  allConfig;
}

QString Config::getLangCodeFromHyph(QString hyphenCode)
{
	hyphenCode.remove(0, 5);
	return hyphenCode.remove(2, 10);
}

QString Config::getLangFromCode(QString code)
{
	QMap<QString,QString>::Iterator it;
	QString lang;

	for (it = ScApp->Sprachen.begin(); it != ScApp->Sprachen.end(); ++it)
	{
		lang = getLangCodeFromHyph(it.data());
		if (lang == code)
			return it.key();
	}
	return code;
}
