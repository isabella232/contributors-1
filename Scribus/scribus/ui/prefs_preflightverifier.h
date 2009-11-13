/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#ifndef PREFS_PREFLIGHTVERIFIER_H
#define PREFS_PREFLIGHTVERIFIER_H

#include "ui_prefs_preflightverifierbase.h"
#include "scribusapi.h"

class SCRIBUS_API Prefs_PreflightVerifier : public QWidget, Ui::Prefs_PreflightVerifier
{
	Q_OBJECT

	public:
		Prefs_PreflightVerifier(QWidget* parent=0);
		~Prefs_PreflightVerifier();
};

#endif // PREFS_PREFLIGHTVERIFIER_H