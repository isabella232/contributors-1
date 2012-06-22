#ifndef STATUSBARPLUG_H
#define STATUSBARPLUG_H

#include "pluginapi.h"
#include "scplugin.h"

class QString;
class ScribusDoc;
class ScribusMainWindow;

class PLUGIN_API StatusbarPlugin : public ScActionPlugin
{
	Q_OBJECT
public:

	// Standard plugin implementation
	StatusbarPlugin();
	virtual ~StatusbarPlugin();
	/*!
	\author Ale Rimoldi
	\brief Show the statusbar
	*/
	virtual bool run(ScribusDoc* doc=0, QString filename = QString::null);
	virtual const QString fullTrName() const;
	virtual const AboutData* getAboutData() const;
	virtual void deleteAboutData(const AboutData* about) const;
	virtual void languageChange();
	virtual void addToMainWindowMenu(ScribusMainWindow *) {};
};

extern "C" PLUGIN_API int statusbarplugin_getPluginAPIVersion();
extern "C" PLUGIN_API ScPlugin* statusbarplugin_getPlugin();
extern "C" PLUGIN_API void statusbarplugin_freePlugin(ScPlugin* plugin);
#endif

