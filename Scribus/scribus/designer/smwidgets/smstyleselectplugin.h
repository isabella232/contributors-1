/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef SMSTYLESELECTPLUGIN_H
#define SMSTYLESELECTPLUGIN_H

#include <QDesignerContainerExtension>
#include <QDesignerCustomWidgetInterface>


class QDesignerFormEditorInterface;


/*! \brief A SMStyleSelect plugin for Qt designer
\author Petr Vanek <petr@scribus.info>
*/
class SMStyleSelectPlugin : public QObject, public QDesignerCustomWidgetInterface
{
	Q_OBJECT
	Q_INTERFACES(QDesignerCustomWidgetInterface)
public:
	SMStyleSelectPlugin(QObject* = 0);
	bool isContainer() const;
	bool isInitialized() const;
	QIcon icon() const;
	QString codeTemplate() const;
	QString domXml() const;
	QString group() const;
	QString includeFile() const;
	QString name() const;
	QString toolTip() const;
	QString whatsThis() const;
	QWidget* createWidget(QWidget*);
	void initialize(QDesignerFormEditorInterface*);
private:
	bool initialized;
};

#endif
