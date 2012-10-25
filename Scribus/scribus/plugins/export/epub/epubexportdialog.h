/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef EPUBEXPORTDIALOG_H
#define EPUBEXPORTDIALOG_H

#include "ui_epubexportdialog.h"

class ScribusDoc;

class EpubExportDialog : public QDialog, Ui::EpubExportDialog
{
	Q_OBJECT
	public:
		EpubExportDialog( QWidget* parent = 0, ScribusDoc* doc = 0, const char* name = 0, bool modal = FALSE, Qt::WFlags fl = 0 );
		~EpubExportDialog();
	private:
		//! \brief a parent doc reference
		ScribusDoc* m_Doc;
	private slots:
		void cancelButton_clicked();
		void exportButton_clicked();
		void chooseFile();
		void fileOutputChanged();

};

#endif // EPUBEXPORTDIALOG_H
