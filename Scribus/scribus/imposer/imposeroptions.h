/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
#ifndef IMPOSEROPTIONS_H
#define IMPOSEROPTIONS_H

/**
 * @file pdfoptions.h
 * @author Jos Hulzink
 * @brief Defines class imposerOptions, used for loading/saving/passing around imposer options
 */

#include "qstring.h"
#include "qmap.h"
#include "QList"
#include "scribusapi.h"
#include "scribusstructs.h"
#include "iostream"

/**
 * @brief imposer Options struture. Capable of verifying its self, but otherwise largely
 *        a dumb struct.
 *
 * If you change this class, please ensure that imposerOptionsIO is
 * updated to match and scribus/dtd/scribuspdfoptions.dtd is tweaked
 * if required.
 *
 * @sa imposerOptionsIO
 */
class SCRIBUS_API ImposerOptions
{
public:

	enum VerifyResults
	{
		Verify_NoError = 0,
		Verify_OptionConflict,
		Verify_OptionOutOfRange,
		Verify_OtherError
	};

	enum ImposerStyle
	{
		None = 0,
		BirthdayCard,
		BusinessCard,
		Magazine,
		MultiFold,
		Tiles,
		File
	};


	/**
	 * @author Craig Ringer
	 * @brief Sanity check the options defined.
	 *
	 * Unimplemented, always returns Verify_NoError
	 *
	 * Checks the imposer option structure for conflicts between mututally
	 * exclusive options, ensures all options are within sane ranges,
	 * and that there are no nonsensical options values set. If nothing
	 * is wrong, returns Verify_NoError, otherwise returns error code from
	 * imposerOptions::VerifyResults. If problemDescription is not NULL,
	 * it will contain a human-readable description of the error on return.
	 *
	 * @warning DO NOT *EVER* TEST THE VALUE OF problemDescription. Rely on the
	 *          return code instead. problemDescription is subject to
	 *          translation and its contents may change without notice.
	 *
	 * @param problemDescription Error description
	 * @return Verify_NoError for sane options, otherwise error code.
	 */
	ImposerOptions::VerifyResults verify(QString* problemDescription);
	ImposerOptions::VerifyResults verify();
  ImposerOptions(ImposerStyle s=ImposerOptions::None, int sR=0, bool sAS=false, double sW=1.0, 
                 double sH=1.0, double sF=1.0, int n_X=1, int n_Y=1, bool dS=false) {
        style = s; sheetRotation = sR; sheetAutoSize=sAS; sheetWidth=sW, sheetHeight=sH;
        scalingFactor=sF; nX=n_X; nY=n_Y; doubleSided=dS;
        std::cerr<<"ImposerOptions::ImposerOptions"<<std::endl;
      }
	ImposerStyle style;
	int  sheetRotation;
	bool sheetAutoSize;
	int  sheetWidth;
	int  sheetHeight;
  double scalingFactor;
  /* nX, nY: number of repetitions/slices horizontally and vertically */
	int  nX;  
	int  nY;
	bool doubleSided;
};

#endif
