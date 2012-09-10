/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.

    Modified for Indic unicode support , Aug 2012 
	by 	: Anilkumar KV,  Email: anilankv@gmail.com
*/
#ifndef SCFACE_TTF_H
#define SCFACE_TTF_H

#include "scribusapi.h"
#include "fonts/ftface.h"
#include "text/storytext.h"

#include "third_party/harfbuzz/src/hb.h"
#include "layout/LELanguages.h"
#include "layout/LEScripts.h"
#include "layout/LayoutEngine.h"

#include <QMap>
#include <QPair>



///** Deprecated, will do regular OpenType processing
//	An object holding a table of kerning pairs extracted from
//	a kern feature such as found in a GPOS table
// */


class SCRIBUS_API ScFace_ttf : public FtFace
{
	public:
		ScFace_ttf ( QString fam, QString sty, QString alt, QString scname, QString psname, QString path, int face );
		~ScFace_ttf();
		
		void load () const;
		void unload () const;
		
		bool EmbedFont ( QString &str ) const;
		void RawData ( QByteArray & bb ) const;
		
		qreal glyphKerning ( uint gl1, uint gl2, qreal sz ) const;

		int shapeText( void* stry, unsigned int item) const;

};

#endif
