/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#include "impositionoptions.h"
#include "scribusstructs.h"

ImposerOptions::VerifyResults ImposerOptions::verify()
{
	return verify(static_cast<QString*>(NULL));
}

ImposerOptions::VerifyResults ImposerOptions::verify(QString* /*problemDescription*/)
{
	// TODO: implement this method
	return Verify_NoError;
}
