/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef STATUSBAR_TOOLBAR_H 
#define STATUSBAR_TOOLBAR_H

#include <QWidget>

class ScribusDoc;

namespace Ui {
class Statusbar;
}

class Toolbar : public QWidget
{
    Q_OBJECT

	public:
		explicit Toolbar( QWidget* parent = 0);
		~Toolbar();
	private:
		//! \brief a parent doc reference
		ScribusDoc* m_Doc;
        Ui::Statusbar *ui;
	// private slots:
		// void cancelButton_clicked();
		// void exportButton_clicked();

};

#endif // STATUSBAR_TOOLBAR_H
