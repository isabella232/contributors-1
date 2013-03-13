/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *   Copyright (C) 2004 by Riku Leino                                      *
 *   tsoots@gmail.com                                                      *
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
 *   51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.             *
 ***************************************************************************/

#include "gtgettext.h"
#include "pluginmanager.h"
#include "scpaths.h"
#include "pageitem.h"
#include "scribusdoc.h"
#include "selection.h"
#include "ui/gtdialogs.h"
#include "gtwriter.h"
//Added by qt3to4:
#include <QPixmap>
#include "util_icon.h"
#include "util_formats.h"

// Constructor
gtGetText::gtGetText(ScribusDoc* doc)
{
	// Attach to the active document
	m_Doc=doc;
} // gtGetText::gtGetText(ScribusDoc* doc)

// Look at the results of the file selection dialog and figure out if you need to use an importer.
// Prompt the user if the importer to use isn't obvious.
void gtGetText::launchImporter(int importer, const QString& filename, bool textOnly, 
								const QString& encoding, bool append, PageItem* target)
{
	// Struct for the plugin info, we'll load this up from the array.
	struct ImporterData ida;
	// Do we need to call an importer? Unsure what happens if this ever becomes false.
	bool callImporter = true;
	// Check and see if the file selection dialog returned the index position of the 
	// importer to be used. If it isn't, try to figure out what it is. If we can't,
	// prompt the user.
	if (importer == -1)
	{
		// Attempt to determine the importer based on the file's extension. 
		// Create a Qstring with what could be an extension.
		QMap<QString, ImporterData*> importerMap = FormatsManager::instance()->getMap();
		QString fend = filename.right(filename.length() - filename.lastIndexOf(".") - 1);
		QString fendL(fend.toLower());
		// Look for that extension in the importer QMap. 
		if (importerMap.find(fend) != importerMap.end())
			// If the map is found, assign ida to the corresponding struct in the map.
			ida = *importerMap[fend];
		// Otherwise, test for the lowercase version
		else
		if (importerMap.find(fendL) != importerMap.end())
			// If the map is found, assign ida to the corresponding struct in the map.
			ida = *importerMap[fendL];
		// Otherwise, try and ask the user.
		else
		{
			// Create a new dialog
			dias = new gtDialogs();
			// Pop up the dialog asking the user to select the type from our list (ilist) of 
			// importable file types. If one is not selected, set callImporter to false.
			callImporter = dias->runImporterDialog(FormatsManager::instance()->getIlist(),filename);
			// If we're gonna call an importer, we need to copy it's struct to ida.
			if (callImporter)
				ida = (FormatsManager::instance()->getImporters())[dias->getImporter()];
			// Destroy the diag
			delete dias;
		}
	}
	
	// Create a target text frame for the imported text and assign it to the parameter "target"
	PageItem* targetFrame=target;
	
	// If the targetframe is 0 ( no frame selected/created? ) then reassign it to the 
	// (questionable interpretation here) first frame in the documentation.
	if (targetFrame==0)
		targetFrame=m_Doc->m_Selection->itemAt(0);

	// If the targetframe is not zero, and we do need to call the importer, 
	// Run the importer via "CallDLL" and pass it what it needs to know.
	if (targetFrame!=0 && callImporter)
		CallDLL(ida, filename, encoding, textOnly, append, targetFrame);
}  //void gtGetText::launchImporter(int importer, const QString& filename, bool textOnly, 
   //						const QString& encoding, bool append, PageItem* target)

// Loads, validates, and executes the Importer code.
void gtGetText::CallDLL(const ImporterData& idata, const QString& filePath,
						const QString& encoding, bool textOnly, bool append, PageItem* importItem)
{
	// Pointer for the loaded plugin.
	void* gtplugin;
	// Type definition for GetText pointer in the function in question.
	typedef void (*gt2ptr)(QString filename, QString encoding, bool textOnly, PageItem *textframe);
	// Type definition for GetText pointer in the function in question.
	typedef void (*sdem)(QString filename, QString encoding, bool textOnly, gtWriter *writer);
	// The point to the above.
	gt2ptr fp_GetText2;
	sdem fp_GetText;
	// Initialize Path to the "DLL"
	QString pluginFilePath = QString("%1/gettext/%2").arg(ScPaths::instance().pluginDir()).arg(idata.soFilePath);
	// Attempt to load the plugin, store the pointer in gtplugin
	gtplugin = PluginManager::loadDLL(pluginFilePath);
	// If gtplugin is NULL we failed to load the plugin. Report an error to the user and exit the method.
	if (!gtplugin)
	{
		qWarning("Failed to load plugin %s", pluginFilePath.toLatin1().constData());
		return;
	} // if (!gtplugin)

	fp_GetText2 = (gt2ptr) PluginManager::resolveSym(gtplugin,"GetText2");
	if (fp_GetText2)
	{
		if (!append)
			importItem->itemText.clear();
		// Execute the importer's "GetText2" method.
		(*fp_GetText2)(filePath, encoding, textOnly, importItem);
	}  // if (!fp_GetText2)
	else
	{
		// Attempt to map the old GetText method to to the pointer via the PluginManager. Store the result in fp_GetText.
		fp_GetText = (sdem) PluginManager::resolveSym(gtplugin,"GetText");
		// If fp_GetText is NULL, we could not find the symbol,report the error, unload the "DLL" and exit the method.
		if (fp_GetText)
		{
			// Create a new writer object in "append"'s mode (true or false ) attached to the importItem
			gtWriter *w = new gtWriter(append, importItem);
			// Execute the importer's "GetText" method.
			(*fp_GetText)(filePath, encoding, textOnly, w);
			// Destroy the writer
			delete w;
		}  // if (!fp_GetText)
		else
		{
			qWarning("Failed to get GetText() from %s",pluginFilePath.toLatin1().constData());
		}
	}
	// GetText is not quite up to date vs styles, clean char formatting already specified at paragraph level
	importItem->itemText.fixLegacyFormatting();
	// Unload the plugin.
	PluginManager::unloadDLL(gtplugin);
}  // void gtGetText::CallDLL(const ImporterData& idata, const QString& filePath,
   //                     const QString& encoding, bool textOnly, bool append, PageItem* importItem)

// Destructor
gtGetText::~gtGetText()
{
	// Nothing needs to happen here.
}
