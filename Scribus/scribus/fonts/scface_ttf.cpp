/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.

    Modified for Indic unicode support , Aug 2012 
	by 	: Anilkumar KV,  Email: anilankv@gmail.com
*/

#include <QFile>
#include <QString>
#include <QObject>
#include <QByteArray>
#include <QDebug>
// #include <QTime>

#include <sys/types.h>

#include "fonts/scface_ttf.h"
#include "fonts/scfontmetrics.h"
#include "fonts/schbfunctions.h"
#include "util.h"
#include "scconfig.h"
#include "sctextstruct.h"
#include "langmgr.h"

#include "third_party/harfbuzz/src/hb.h"
#include "third_party/harfbuzz/src/hb-ot.h"
#include "third_party/harfbuzz/src/hb-ft.h"

// Missing feature in Harfbuzz
QString tagToString(hb_tag_t tag)
{
    QString name;
    name[0] = ( char ) ( tag >> 24 );
    name[1] = ( char ) ( ( tag >> 16 ) & 0xFF );
    name[2] = ( char ) ( ( tag >> 8 ) & 0xFF );
    name[3] = ( char ) ( tag & 0xFF );
qDebug()<< "(" << __FILE__ << ")(" << __LINE__ << __func__ << ") " << QString("OTF_tag_name (%1) -> %2").arg(tag).arg(name);
    return name;
}

hb_tag_t stringToTag(const QString& tag)
{
    return HB_TAG(tag.at(0).toAscii(),tag.at(1).toAscii(),tag.at(2).toAscii(),tag.at(3).toAscii());
}

	uint word ( QByteArray const & bb, uint pos )
	{
		const unsigned char * pp = reinterpret_cast<const unsigned char*> ( bb.data() ) + pos;
		return pp[0] << 24 | pp[1] << 16 | pp[2] << 8 | pp[3];
	}
	uint word16 ( QByteArray const & bb, uint pos )
	{
		const unsigned char * pp = reinterpret_cast<const unsigned char*> ( bb.data() ) + pos;
		return pp[0] << 8 | pp[1];
	}
	QString tag ( QByteArray const & bb, uint pos )
	{
		char buf[5] = "1234";
		buf[0] = bb.data() [pos];
		buf[1] = bb.data() [pos+1];
		buf[2] = bb.data() [pos+2];
		buf[3] = bb.data() [pos+3];
		return buf;
	}
	bool copy ( QByteArray & dst, uint to, QByteArray & src, uint from, uint len )
	{
		if ( !dst.data() )
			return false;
		if ( !src.data() )
			return false;
		if ( to + len > static_cast<uint> ( dst.size() ) )
			return false;
		if ( from + len > static_cast<uint> ( src.size() ) )
			return false;

		memcpy ( dst.data() + to, src.data() + from, len );
		return true;
	}


void releaseFaceForHB(void *){} // HB hassle

ScFace_ttf::ScFace_ttf ( QString fam, QString sty, QString alt, QString scname, QString psname, QString path, int face )
	: FtFace ( fam, sty, alt, scname, psname, path, face )
{
	formatCode = ScFace::SFNT;
}

ScFace_ttf::~ ScFace_ttf()
{
}


void ScFace_ttf::load() const
{
	FtFace::load();
}

void ScFace_ttf::unload() const
{
	FtFace::unload();
}


void ScFace_ttf::RawData(QByteArray & bb) const
{
	if ( formatCode == ScFace::TTCF )
	{
		QByteArray coll;
		FtFace::RawData(coll);
		// access table for faceIndex
		if (faceIndex >= static_cast<int>(word(coll, 8)))
		{
			bb.resize(0);
			return;
		}
		static const uint OFFSET_TABLE_LEN = 12;
		static const uint   TDIR_ENTRY_LEN = 16;
		uint faceOffset = word(coll, 12 + 4 * faceIndex);
		uint nTables    = word16(coll, faceOffset + 4);
		sDebug(QObject::tr("extracting face %1 from font %2 (offset=%3, nTables=%4)").arg(faceIndex).arg(fontFile).arg(faceOffset).arg(nTables));
		uint headerLength = OFFSET_TABLE_LEN + TDIR_ENTRY_LEN * nTables;
		uint tableLengths = 0;
		// sum table lengths incl padding
		for (uint i=0; i < nTables; ++i)
		{
			tableLengths += word(coll, faceOffset + OFFSET_TABLE_LEN + TDIR_ENTRY_LEN * i + 12);
			tableLengths = (tableLengths+3) & ~3;
		}
		bb.resize(headerLength + tableLengths);
		if (! bb.data())
			return;
		// write header
		sDebug(QObject::tr("memcpy header: %1 %2 %3").arg(0).arg(faceOffset).arg(headerLength));
		if (!copy(bb, 0, coll, faceOffset, headerLength))
			return;

		uint pos = headerLength;
		for (uint i=0; i < nTables; ++i)
		{
			uint tableSize  = word(coll, faceOffset + OFFSET_TABLE_LEN + TDIR_ENTRY_LEN * i + 12);
			uint tableStart = word(coll, faceOffset + OFFSET_TABLE_LEN + TDIR_ENTRY_LEN * i + 8);
			sDebug(QObject::tr("table '%1'").arg(tag(coll, tableStart)));
			sDebug(QObject::tr("memcpy table: %1 %2 %3").arg(pos).arg(tableStart).arg(tableSize));
			if (!copy(bb, pos, coll, tableStart, tableSize)) break;
			// write new offset to table entry
			sDebug(QObject::tr("memcpy offset: %1 %2 %3").arg(OFFSET_TABLE_LEN + TDIR_ENTRY_LEN*i + 8).arg(pos).arg(4));
			memcpy(bb.data() + OFFSET_TABLE_LEN + TDIR_ENTRY_LEN * i + 8, &pos, 4);
			pos += tableSize;
			// pad
			while ((pos & 3) != 0)
				bb.data()[pos++] = '\0';
		}
	}
	else if (formatCode == ScFace::TYPE42)
		FtFace::RawData(bb);
	else
		FtFace::RawData (bb);
}

bool ScFace_ttf::EmbedFont(QString &str) const
{
	if (formatCode == ScFace::TYPE42)
	{
		//easy:
		QByteArray bb;
		FtFace::RawData(bb);
		str += bb;
		return true;
	}
	QString tmp4;
	QString tmp2 = "";
	QString tmp3 = "";
	int counter = 0;
	char *buf[50];
	FT_ULong  charcode;
	FT_UInt   gindex;
	FT_Face face = ftFace();
	if (!face)
		return false;
	const FT_Stream fts = face->stream;
	if (ftIOFunc(fts, 0L, NULL, 0))
		return(false);
	str+="%!PS-TrueTypeFont\n";
	str+="11 dict begin\n";
	str+="/FontName /" + psName + " def\n";
	str+="/Encoding /ISOLatin1Encoding where {pop ISOLatin1Encoding} {StandardEncoding} ifelse def\n";
	str+="/PaintType 0 def\n/FontMatrix [1 0 0 1 0 0] def\n";
	str+="/FontBBox ["+FontBBox+"] def\n";
	str+="/FontType 42 def\n";
	str+="/FontInfo 8 dict dup begin\n";
	str+="/FamilyName (" + psName + ") def\n";
	str+="end readonly def\n";
	unsigned char *tmp = new unsigned char[65535];
	int length;
	char linebuf[80];
	str += "/sfnts [";
	int poso=0;
	do
	{
		int posi=0;
		length= fts->size - fts->pos;
		if (length > 65534)
			length = 65534;
		if (!ftIOFunc(fts, 0L, tmp, length))
		{
			str+="\n<\n";
			for (int j = 0; j < length; j++)
			{
				unsigned char u=tmp[posi];
				linebuf[poso] = ((u >> 4) & 15) + '0';
				if (u>0x9f) linebuf[poso]+='a'-':';
				++poso;
				u&=15; linebuf[poso]=u + '0';
				if (u>0x9) linebuf[poso]+='a'-':';
				++posi;
				++poso;
				if (poso > 70)
				{
					linebuf[poso++]='\n';
					linebuf[poso++]=0;
					str += linebuf;
					poso = 0;
				}
			}
			linebuf[poso++]=0;
			str += linebuf;
			poso = 0;
			str += "00\n>";
		}
		else
		{
			sDebug ( QObject::tr ( "Font %1 is broken (read stream), no embedding" ).arg ( fontFile ) );
			str += "\n] def\n";
			status = qMax(status,ScFace::BROKENGLYPHS);
			return false;
		}
	}
	while (length == 65534);

	str += "\n] def\n";
	delete[] tmp;
	gindex = 0;
	charcode = FT_Get_First_Char(face, &gindex);
	while (gindex != 0)
	{
		FT_Get_Glyph_Name(face, gindex, buf, 50);
		tmp2 += "/"+QString(reinterpret_cast<char*>(buf))+" "+tmp3.setNum(gindex)+" def\n";
		charcode = FT_Get_Next_Char(face, charcode, &gindex);
		counter++;
	}
	tmp4.setNum(counter);
	str += "/CharStrings " + tmp4 + " dict dup begin\n"+tmp2;
	str += "end readonly def\n";
	str += "FontName currentdict end definefont pop\n";
	return(true);
}

qreal ScFace_ttf::glyphKerning ( uint gl1, uint gl2, qreal sz ) const
{
	return FtFace::glyphKerning ( gl1, gl2, sz );
}

int ScFace_ttf::shapeText(void* stry, unsigned int item) const
{
        StoryText* st = (StoryText*) stry ;
//qDebug()<< "(" << __FILE__ << ")(" << __LINE__ << __func__ << ") " <<"Shaping:";
	if(status != ScFace::LOADED)
		load();
	unsigned int itemCount(st->itemCount());
	if(item >= itemCount)
		return -1;
if (item >= st->length()) {
printf ( "FIXME :: (%s)(%d)(%s) pos(%d) length(%d)  \n", __FILE__, __LINE__, __func__,item, st->length()) ;
return -1 ;
}
	LanguageManager * lm(LanguageManager::instance());
	QString language(lm->getAbbrevFromLang(st->itemStyle(st->startOfItem(item)).language(), false, false));
	double fSize(st->itemStyle(st->startOfItem(item)).fontSize() /10.0);
	hb_font_t * font = hb_ft_font_create (ftFace(), releaseFaceForHB);
	hb_buffer_t * buf = hb_buffer_create();
	ScHBFunctions::setBufferFunctions(buf);
	hb_font_set_scale(font, fSize * 1000, fSize * 1000);
	 st->nOfGlyphs = st->itemTextPosition(item) ;
	unsigned int end(st->itemTextPosition(item) + st->itemCharCount(item));
	unsigned int counterP(0);
//printf ( "(%s) (%d) (%s) from  (%d) to (%d) item (%d) \n", __FILE__, __LINE__, __func__, st->itemTextPosition(item), end, item ) ;
	for(unsigned int ci(st->itemTextPosition(item)); ci < end; ++ci)
	{
		unsigned short gIndex(st->text(ci,1).at(0).unicode());
		hb_buffer_add(buf, gIndex, 0x1, ci);
		hb_glyph_position_t * pos = hb_buffer_get_glyph_positions(buf ,NULL) + counterP;
		pos->x_advance = 0;
		pos->x_offset = 0;
		pos->y_advance = 0;
		pos->y_offset = 0;
		++counterP;
//qDebug()<< "(" << __FILE__ << ")(" << __LINE__ << __func__ << ") " << counterP << " ( #" << ci <<  "|" << hex << gIndex << ")" ;
	}
	
	hb_shape (font, buf, NULL, 0);
	unsigned int bLen(hb_buffer_get_length(buf));
	hb_glyph_info_t * gInfos = hb_buffer_get_glyph_infos (buf, NULL);
	hb_glyph_position_t * gPositions = hb_buffer_get_glyph_positions (buf, &bLen);
	
	int clstr =  st->nOfGlyphs - 1 ;
	GlyphLayout* curGlyph = &st->item_p(st->nOfGlyphs)->glyph ;
	ScText* sct = st->item_p(st->nOfGlyphs) ;
	sct->gch = sct->ch.unicode() ;
	int glCnt = 0 ;
	int clstrCnt = 0 ;
	int gIdxStrt = st->nOfGlyphs ;
	for(unsigned int bIdx(0); bIdx < bLen; ++bIdx)
	{
//qDebug()<< "(" << __FILE__ << ")(" << __LINE__ << __func__ << ")  " << st->nOfGlyphs ;
		hb_glyph_info_t  gi = gInfos[bIdx];
		hb_glyph_position_t  gp = gPositions[bIdx];
		if ( clstr == gi.cluster ) {
			curGlyph->grow() ;
			curGlyph = curGlyph->more ;
			glCnt++ ;
		} else {
			clstr = gi.cluster ;
	        	curGlyph = &st->item_p(gIdxStrt + clstrCnt)->glyph ;
			sct = st->item_p(gIdxStrt + clstrCnt) ;
			sct->gIdx = st->nOfGlyphs ;
			st->nOfGlyphs = clstr ;
			clstrCnt++ ;
			glCnt = 0 ;
		}
		gp.x_advance = 0 ;
		curGlyph->xadvance = glyphWidth(gi.codepoint, fSize) ; // + (double(gp.x_advance) / 1000.0);
		curGlyph->xoffset = gp.x_offset;
		curGlyph->yadvance = gp.y_advance;
		curGlyph->yoffset = gp.y_offset;
		curGlyph->glyph = gi.codepoint;
	}
	st->item_p(end-1)->gch = st->item_p(end-1)->ch ;
//qDebug()<< "(" << __FILE__ << ")(" << __LINE__ << __func__ << ") " <<"Shaping: nonAuto";

	hb_buffer_destroy(buf);
//qDebug()<< "(" << __FILE__ << ")(" << __LINE__ << __func__ << ") " <<"Shaping: nonAuto";

	// FIXME_OIF return proper value
	return 0;
}

