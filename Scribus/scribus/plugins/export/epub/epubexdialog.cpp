/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "epubexdialog.h"
#include "epubexport.h"

// for file input widget
#include <QDirModel>
#include <QCompleter>
#include <QFileInfo>
#include "util.h" // for checkFileExtension
// for file chooser
#include "prefsfile.h" // for PrefsContext
#include "prefsmanager.h" // for PrefsManager
#include "scribusdoc.h" // for setting the default filename in the dialog
#include "ui/customfdialog.h"

EPUBexDialog::EPUBexDialog(QWidget* parent, ScribusDoc* doc, const char* name, bool modal, Qt::WFlags fl)
	: QDialog (parent, fl),
	  m_Doc(doc)
{
	setupUi(this);
	setObjectName(name);
	setModal(modal);

	//TODO: fill a bug report: what is the policy in scribus to set the initial value for the target? i think that we have multiple of them between the same place as the file or the last time a function has been used in scribus
	QFileInfo basename(m_Doc->DocName);
	QString filename = basename.completeBaseName() + ".epub";
	qDebug() << "filename: " << filename;

	fileOutput->setText(filename);
	// fileOutput->setText( QDir::toNativeSeparators(PrefsManager::instance()->prefsFile->getContext("dirs")->get("epub", ".")) );
	// fileOutput->setText( QDir::toNativeSeparators(PrefsManager::instance()->prefsFile->getContext("dirs")->get("wdir", QDir::currentPath())) );

	QDirModel * dirModel = new QDirModel(this);
	dirModel->setFilter(QDir::AllDirs);
	fileOutput->setCompleter(new QCompleter(dirModel, this));

	connect( fileOutput, SIGNAL( editingFinished() ), this, SLOT( fileOutputChanged() ) );
	connect( fileOutputChange, SIGNAL( clicked() ), this, SLOT( chooseFile() ) );

	connect(cancelButton, SIGNAL(clicked()), this, SLOT(cancelButton_clicked()));
	connect(exportButton, SIGNAL(clicked()), this, SLOT(exportButton_clicked()));
}

EPUBexDialog::~EPUBexDialog() {};

void EPUBexDialog::cancelButton_clicked()
{
	reject();
}

void EPUBexDialog::exportButton_clicked()
{
    // see gtfiledialog.ui for a way to integrate a file manager
    EPUBexport *action = new EPUBexport(m_Doc);
    EPUBExportOptions options;
	// qDebug() << "fileOutput->text()" << fileOutput->text();
    action->doExport(fileOutput->text(), options);
    delete action;
	reject();
}

void EPUBexDialog::chooseFile()
{
	PrefsContext* dirs = PrefsManager::instance()->prefsFile->getContext("dirs");
	// TODO: check how to correctly add an epub dir (ale/20120815)
	// QString wdir = prefs->get("wdir", ".");
	QString wdir = dirs->get("epub", ".");
	// FIXME: what is fdNone?) (ale/20120815)
	CustomFDialog dia(this, wdir, tr("Save As"), tr("Epub Files (*.epub);;All Files (*)"), fdNone);

	if (!fileOutput->text().isEmpty())
	{
		QString filename = QDir::fromNativeSeparators(fileOutput->text()); 
		dia.setSelection(filename);
		/*
        QString wdir = prefs->get("wdir", ".");
        QScopedPointer<CustomFDialog> openDia( new CustomFDialog(doc->scMW(), wdir, QObject::tr("Save as"), QObject::tr("%1;;All Files (*)").arg(FormatsManager::instance()->extensionsForFormat(FormatsManager::SVG)), fdHidePreviewCheckBox) );
        openDia->setSelection(getFileNameByPage(doc, doc->currentPage()->pageNr(), "svg"));
        openDia->setExtension("svg");
        openDia->setZipExtension("svgz");
        QCheckBox* compress = new QCheckBox(openDia.data());
        compress->setText( tr("Compress File"));
        compress->setChecked(false);
		*/
	}
	if (dia.exec() == QDialog::Accepted)
	{
		// selectedFile() may return path with native separators
		QString filename = QDir::fromNativeSeparators(dia.selectedFile());
		dirs->set("epub", filename.left(filename.lastIndexOf("/")));
		fileOutput->setText( QDir::toNativeSeparators(filename) );
	}	
}

void EPUBexDialog::fileOutputChanged()
{
	QString filename = checkFileExtension(fileOutput->text(),"epub");
	fileOutput->setText( QDir::toNativeSeparators(filename) );
}
