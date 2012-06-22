/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "statusbardialog.h"
#include "statusbarport.h"

StatusbarDialog::StatusbarDialog(QWidget* parent, ScribusDoc* doc, const char* name, bool modal, Qt::WFlags fl)
	: QDialog (parent, fl),
	  m_Doc(doc)
{
	setupUi(this);
	setObjectName(name);
	setModal(modal);
	connect(cancelButton, SIGNAL(clicked()), this, SLOT(cancelButton_clicked()));
	connect(exportButton, SIGNAL(clicked()), this, SLOT(exportButton_clicked()));
}

StatusbarDialog::~StatusbarDialog() {};

void StatusbarDialog::cancelButton_clicked()
{
	reject();
}

void StatusbarDialog::exportButton_clicked()
{
    // see gtfiledialog.ui for a way to integrate a file manager
    Statusbar *action = new Statusbar(m_Doc);
    StatusbarOptions options;
    QString filename = "/tmp/test/";
    action->doExport(filename, options);
    delete action;
	reject();
}

