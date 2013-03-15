/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef API_STYLEPARAGRAPH_H_
#define API_STYLEPARAGRAPH_H_

#include <QObject>
#include <QtDebug>
#include <QApplication>

#include "scripterimpl.h"

class ParagraphStyle;


class StyleParagraphAPI : public QObject
{
	Q_OBJECT
    Q_PROPERTY(ParagraphStyle style READ get)

public:
	StyleParagraphAPI(QString name);
	virtual ~StyleParagraphAPI();
public slots:
    void update();
    void setAlignment(int mode);
};



#endif /*API_STYLEPARAGRAPH_H_*/
