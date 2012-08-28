/***************************************************************************
                          epubexplugin.cpp  -  description
                             -------------------
    begin                : Wed Mar 28 08:00:00 CEST 2012
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

#include <QMessageBox>

#include "epubexplugin.h"
#include "epubexdialog.h"
#include "scribuscore.h"
#include "scribusdoc.h"

int epubexplugin_getPluginAPIVersion()
{
	return PLUGIN_API_VERSION;
}

ScPlugin* epubexplugin_getPlugin()
{
	EPUBExportPlugin* plug = new EPUBExportPlugin();
	Q_CHECK_PTR(plug);
	return plug;
}

void epubexplugin_freePlugin(ScPlugin* plugin)
{
	EPUBExportPlugin* plug = dynamic_cast<EPUBExportPlugin*>(plugin);
	Q_ASSERT(plug);
	delete plug;
}

EPUBExportPlugin::EPUBExportPlugin() : ScActionPlugin()
{
	// Set action info in languageChange, so we only have to do
	// it in one place.
	languageChange();
}

EPUBExportPlugin::~EPUBExportPlugin()
{
	// unregisterAll();
};

void EPUBExportPlugin::languageChange()
{
	// Note that we leave the unused members unset. They'll be initialised
	// with their default ctors during construction.
	// Action name
	m_actionInfo.name = "ExportAsEPUB";
	// Action text for menu, including accel
	m_actionInfo.text = tr("Save as &EPUB...");
	// Menu
	m_actionInfo.menu = "FileExport";
	m_actionInfo.enabledOnStartup = false;
	m_actionInfo.needsNumObjects = -1;
}

const QString EPUBExportPlugin::fullTrName() const
{
	return QObject::tr("EPUB Export");
}

const ScActionPlugin::AboutData* EPUBExportPlugin::getAboutData() const
{
	AboutData* about = new AboutData;
	about->authors = "Ale Rimoldi <a.l.e@ideale.ch>";
	about->shortDescription = tr("Export EPUB files");
	about->description = tr("Exports the current document to EUPB files,\nretaining as much as possible of the formatting.");
	about->license = "GPL";
	Q_CHECK_PTR(about);
	return about;
}

void EPUBExportPlugin::deleteAboutData(const AboutData* about) const
{
	Q_ASSERT(about);
	delete about;
}

bool EPUBExportPlugin::run(ScribusDoc* doc, QString target)
{
	Q_ASSERT(target.isNull());
	ScribusDoc* currDoc=doc;
	if (currDoc==0)
		currDoc=ScCore->primaryMainWindow()->doc;
	if (currDoc==0)
		return false;
	EPUBexDialog *dlg = new EPUBexDialog(currDoc->scMW(), currDoc, "dlg", true, 0);
	if (dlg)
	{
		dlg->exec();
		delete dlg;
		return true;
	}
	else
		return false;
}
