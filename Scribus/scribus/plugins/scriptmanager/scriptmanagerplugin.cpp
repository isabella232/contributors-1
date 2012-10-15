/***************************************************************************
                          epubexplugin.cpp  -  description
                             -------------------
    begin                : Wed Oct 14 18:00:00 CEST 2012
    copyright            : (C) 2012 by Ale Rimoldi
    email                : a.l.e@ideale.ch
 ***************************************************************************/

/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include "scriptmanagerplugin.h"
#include "scribuscore.h"
#include "scribusdoc.h"
int scriptmanagerplugin_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* scriptmanagerplugin_getPlugin()
{
	ScriptManagerPlugin* plug = new ScriptManagerPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void scriptmanagerplugin_freePlugin(ScPlugin* plugin)
{
	ScriptManagerPlugin* plug = dynamic_cast<ScriptManagerPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}

ScriptManagerPlugin::ScriptManagerPlugin() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place.
	languageChange();
}

ScriptManagerPlugin::~ScriptManagerPlugin()
{
};

void ScriptManagerPlugin::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	m_actionInfo.name = "Script Manager";
	// Action text for menu, including accel
	m_actionInfo.text = tr("Script &Manager...");
	// Menu
	// m_actionInfo.menu = "FileExport";
	m_actionInfo.menu = "Extras"; // TODO: we can't add it to the scripter menu... is there a way to do it'

	m_actionInfo.enabledOnStartup = true;
	m_actionInfo.needsNumObjects = -1;
}

const QString ScriptManagerPlugin::fullTrName() const
{
	return QObject::tr("Script Manager");
}

const ScActionPlugin::AboutData* ScriptManagerPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	about->authors = "Ale Rimoldi <a.l.e@ideale.ch>";
	about->shortDescription = tr("Manages Python Scripts");
	about->description = tr("Allows to download python scripts from user defined repositories.");
	about->license = "GPL";
	Q_CHECK_PTR(about);
	return about;
}

void ScriptManagerPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

bool ScriptManagerPlugin::run(ScribusDoc* doc, QString target)
{
	Q_ASSERT(target.isNull());
    return true;
}
