/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef STATUSBARDIALOG_H
#define STATUSBARDIALOG_H

#include "ui_statusbardialog.h"

class ScribusDoc;

class StatusbarDialog : public QWidget, Ui::StatusbarDialog
{
	Q_OBJECT
	public:
		StatusbarDialog( QWidget* parent = 0, ScribusDoc* doc = 0, const char* name = 0, bool modal = FALSE, Qt::WFlags fl = 0 );
		~StatusbarDialog();
	private:
		//! \brief a parent doc reference
		ScribusDoc* m_Doc;
	private slots:
		void cancelButton_clicked();
		void exportButton_clicked();

};

#endif // STATUSBARDIALOG_H
