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
#include "fonts/fontfeatureset.h"
#include "text/storytext.h"

#include "third_party/harfbuzz/src/hb.h"
#include "layout/LELanguages.h"
#include "layout/LEScripts.h"
#include "layout/LayoutEngine.h"

#include <QMap>
#include <QPair>

class ScICUFont;

//#include FT_TRUETYPE_TABLES_H
//#include FT_TRUETYPE_TAGS_H


///** Deprecated, will do regular OpenType processing
//	An object holding a table of kerning pairs extracted from
//	a kern feature such as found in a GPOS table
// */

class SCRIBUS_API TTFFeatureSet : public FontFeatureSet
{
	QList<Feature> featuresList;

public:
	TTFFeatureSet( FT_Face ftface );
	QList<Feature> features(FeatureType type) const;
	bool hasFeature(const QString& f);
	Feature getFeature(const QString& f);
};

/*
	Class ScFace_ttf
	Subclass of ScFace, specifically for TrueType fonts.
	Implements: RealName() and EmbedFont().
*/



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

		TTFFeatureSet * features(FontFeatureSet::FeatureType type) const {return featureSet;}
		int shapeText( void* stry, unsigned int item) const;

	private:
		void icuShape(StoryText* st, unsigned int item, LayoutEngine * le, const QString& text, QList<GlyphLayout>& glList, QList<le_int32>& charList, QList<le_int32>& baseCharList) const;
		static QMap<QString, LanguageCodes> icuLangList;
		static QMap<QString, ScriptCodes> scriptTagToICUCode;
                static QMap<QString, hb_tag_t> scLangToTags ;
		void fillLangToTag();
		QList<unsigned int> getlookupIndex(const QString& table, const QString& language, const QString& feature = QString()) const;
		mutable TTFFeatureSet * featureSet;
		mutable ScICUFont * icuFont;
};

#endif
