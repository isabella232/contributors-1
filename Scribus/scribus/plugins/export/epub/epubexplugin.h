#ifndef EPUBPLUG_H
#define EPUBPLUG_H

#include "pluginapi.h"
#include "scplugin.h"

class QString;
class ScribusDoc;
class ScribusMainWindow;

class PLUGIN_API EPUBExportPlugin : public ScActionPlugin
{
	Q_OBJECT
public:

	// Standard plugin implementation
	EPUBExportPlugin();
	virtual ~EPUBExportPlugin();
	/*!
	\author Ale Rimoldi
	\brief Run the EPUB export
	\param filename a file to export to
	\retval bool true
	*/
	virtual bool run(ScribusDoc* doc=0, QString filename = QString::null);
	virtual const QString fullTrName() const;
	virtual const AboutData* getAboutData() const;
	virtual void deleteAboutData(const AboutData* about) const;
	virtual void languageChange();
	virtual void addToMainWindowMenu(ScribusMainWindow *) {};
};

extern "C" PLUGIN_API int epubexplugin_getPluginAPIVersion();
extern "C" PLUGIN_API ScPlugin* epubexplugin_getPlugin();
extern "C" PLUGIN_API void epubexplugin_freePlugin(ScPlugin* plugin);
#endif
