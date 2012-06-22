/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/

#ifndef STATUSBAR_H
#define STATUSBAR_H

#include <QObject>
#include <QDebug>

// class QString;
// class ScribusDoc;
// class ScPage;
// class ScLayer;


// class PageItem;

struct StatusbarOptions
{
    /*
	bool inlineImages;
	bool exportPageBackground;
	bool compressFile;
    */
};

class Statusbar : public QObject
{
    Q_OBJECT

public:
	EPUBexport( ScribusDoc* doc );
	~EPUBexport();

	/*!
	\author Ale Rimoldi
	\brief Show the statusbar
	\param doc QString file name
	 */

private:
	ScribusDoc* m_Doc;
};
#endif // STATUSBAR_H


