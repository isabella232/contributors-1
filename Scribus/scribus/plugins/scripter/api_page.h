/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef API_PAGE_H_
#define API_PAGE_H_

#include <QObject>
#include <QtDebug>
#include <QApplication>

#include "scripterimpl.h"
#include "scpage.h"


class PageAPI : public QObject
{
	Q_OBJECT
    Q_PROPERTY(int number READ number)
    Q_PROPERTY(int position READ position)
    Q_PROPERTY(QList<QVariant> items READ items)
    Q_PROPERTY(QList<QVariant> selection READ selection)
    Q_PROPERTY(int type READ type)

public slots:
	void remove();
	QObject *newRectangle(double x, double y, double width, double height);
	QObject *newEllipse(double x, double y, double width, double height);
	QObject *newImage(double x, double y, double width, double height);
	QObject *newText(double x, double y, double width, double height);
	QObject *newLine(double x, double y, double width, double height);
	void placeSVG(const QString & filename, const double x, const double y);
	void placeODG(const QString & filename, const double x, const double y);
	void placeEPS(const QString & filename, const double x, const double y);
	void placeSXD(const QString & filename, const double x, const double y);
    void newHGuide(double y);
	void savePageAsEPS(const QString & filename);

public:
    PageAPI(ScPage* thisPage);
    virtual ~PageAPI();

private:
	int position();
	int number();
	QList<QVariant> items();
	QList<QVariant> selection();
	PageItem *newItem(const PageItem::ItemType itemType,
	                 const PageItem::ItemFrameType frameType,
	                 const double x, const double y, const double width,
	                 const double height, const double w,
	                 const QString& fill, const QString& outline);
	void placeImage(const int formatid, const QString & filename, const double x, const double y);

	bool isMasterPage;
	int type();
	double pageYtoDocY(double y);
	double pageXtoDocX(double x);
	
	ScPage* page;
};
#endif /*API_PAGE_H_*/
