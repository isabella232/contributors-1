/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#include "toolbar.h"
#include "ui_toolbar.h"

Toolbar::Toolbar(QWidget* parent) :
    QWidget(parent),
    ui(new Ui::Statusbar)
{
	ui->setupUi(this);
	// setObjectName(name);
	// setModal(modal);
	// connect(cancelButton, SIGNAL(clicked()), this, SLOT(cancelButton_clicked()));
	// connect(exportButton, SIGNAL(clicked()), this, SLOT(exportButton_clicked()));
}

Toolbar::~Toolbar() {};

/*
void Toolbar::cancelButton_clicked()
{
	reject();
}

void Toolbar::exportButton_clicked()
{
    // see gtfiledialog.ui for a way to integrate a file manager
    Statusbar *action = new Statusbar(m_Doc);
    StatusbarOptions options;
    QString filename = "/tmp/test/";
    action->doExport(filename, options);
    delete action;
	reject();
}
*/

