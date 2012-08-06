/***************************************************************************
 *   Copyright (C) 2007 by Pierre Marchand   *
 *   pierre@moulindetouvois.com   *
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 *   This program is distributed in the hope that it will be useful,       *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of        *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the         *
 *   GNU General Public License for more details.                          *
 *                                                                         *
 *   You should have received a copy of the GNU General Public License     *
 *   along with this program; if not, write to the                         *
 *   Free Software Foundation, Inc.,                                       *
 *   59 Temple Place - Suite 330, Boston, MA  02111-1307, USA.             *
 ***************************************************************************/
#include "imposeinputfile.h"
#define DEBUG

#include <fstream>
#include <stdexcept>
#include <algorithm>
#include <cmath>
#include <istream>
#include <ostream>
#include <cstdlib>
using std::ostringstream;
using std::map;
using std::vector;
using std::string;
using std::ifstream;
using std::istream;
using std::ostream;
using std::endl;
using std::runtime_error;

#include <iostream>
namespace PoDoFo
{
	namespace Impose
	{

#define MAX_SOURCE_PAGES 5000
#define MAX_RECORD_SIZE 2048
		bool imposeInputFile::checkIsPDF ( std::string path )
		{
			ifstream in ( path.c_str(), ifstream::in );
			if ( !in.good() )
				throw runtime_error ( "setSource() failed to open input file" );

			const int magicBufferLen = 5;
			char magicBuffer[magicBufferLen ];
			in.read ( magicBuffer, magicBufferLen );
			std::string magic ( magicBuffer , magicBufferLen );

			in.close();
			if ( magic.find ( "%PDF" ) < 5 )
				return true;
			return false;
		}

		imposeInputFile::imposeInputFile ( )
		{
			sourceDoc = NULL;
			scaleFactor = 1.0;
		}

		imposeInputFile::imposeInputFile ( const std::string & source )
		{
			imposeInputFile();
			loadSource(source);
		}

		void imposeInputFile::loadSource ( const std::string & source )
		{
			if ( checkIsPDF ( source ) )
			{
				try{
					sourceDoc = new PdfMemDocument ( source.c_str() );
				}
				catch(PdfError& e)
				{
					std::cerr<<"Unable to create new PdfMemDocument: " <<PdfError::ErrorMessage( e. GetError() )<<endl;
					return;
				}
			}
			else
			{
		  		throw runtime_error ( "loadSource(): Input file appears not a valid PDF." );
			}


			pcount = sourceDoc->GetPageCount();
#ifdef DEBUG
		 	std::cerr << "Document has "<< pcount << " page(s) " << endl;
#endif
			if ( pcount > 0 ) // only here to avoid possible segfault, but PDF without page is not conform IIRC
			{
				PoDoFo::PdfRect rect ( sourceDoc->GetPage ( 0 )->GetMediaBox() );
				// keep in mind it’s just a hint since PDF can have different page sizes in a same doc
				sourceWidth =  rect.GetWidth() - rect.GetLeft();
				sourceHeight =  rect.GetHeight() - rect.GetBottom() ;
			} else	{
		  		throw runtime_error ( "loadSource(): No pages found in the source document" );
			}
		}

	};
}; // end of namespace
