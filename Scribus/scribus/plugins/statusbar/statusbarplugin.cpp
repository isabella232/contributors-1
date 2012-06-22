/***************************************************************************
                          statusbarplugin.cpp  -  description
                             -------------------
    begin                : Thu Jun 21 22:30:40 CEST 2012
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

#include "statusbarplugin.h"
#include "statusbardialog.h"
#include "scribuscore.h"
#include "scribusdoc.h"

int statusbarplugin_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* statusbarplugin_getPlugin()
{
	StatusbarPlugin* plug = new StatusbarPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void statusbarplugin_freePlugin(ScPlugin* plugin)
{
	StatusbarPlugin* plug = dynamic_cast<StatusbarPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}

StatusbarPlugin::StatusbarPlugin() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place.
	languageChange();
}

StatusbarPlugin::~StatusbarPlugin()
{
	// unregisterAll();
};

void StatusbarPlugin::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	// m_actionInfo.name = "Statusbar";
	// Action text for menu, including accel
	// m_actionInfo.text = tr("Save as &EPUB...");
	// Menu
	// m_actionInfo.menu = "FileExport";
	// m_actionInfo.enabledOnStartup = false;
	// m_actionInfo.needsNumObjects = -1;
}

const QString StatusbarPlugin::fullTrName() const
{
	return QObject::tr("Statusbar");
}

const ScActionPlugin::AboutData* StatusbarPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	about->authors = "Ale Rimoldi <a.l.e@ideale.ch>";
	about->shortDescription = tr("Statusbar");
	about->description = tr("Show a statusbar.");
	about->license = "GPL";
	Q_CHECK_PTR(about);
	return about;
}

void StatusbarPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

bool StatusbarPlugin::run(ScribusDoc* doc, QString target)
{
	Q_ASSERT(target.isNull());
	ScribusDoc* currDoc=doc;
	if (currDoc==0)
		currDoc=ScCore->primaryMainWindow()->doc;
	if (currDoc==0)
		return false;
	StatusbarDialog *dlg = new StatusbarDialog(currDoc->scMW(), currDoc, "dlg", true, 0);
	if (dlg)
	{
		dlg->exec();
		delete dlg;
		return true;
	}
	else
		return false;
}
