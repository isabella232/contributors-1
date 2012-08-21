/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "imposeroptions.h"
#include "scribusstructs.h"

imposerOptions::VerifyResults imposerOptions::verify()
{
	return verify(static_cast<QString*>(NULL));
}

imposerOptions::VerifyResults imposerOptions::verify(QString* /*problemDescription*/)
{
	// TODO: implement this method
	return Verify_NoError;
}
