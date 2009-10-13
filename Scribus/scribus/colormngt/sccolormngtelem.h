/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#ifndef SCCOLORMNGTELEM_H
#define SCCOLORMNGTELEM_H

class ScColorMngtEngine;

class ScColorMngtElem
{
public:
	virtual ScColorMngtEngine& engine() = 0;
	virtual const ScColorMngtEngine& engine() const = 0;
};

#endif