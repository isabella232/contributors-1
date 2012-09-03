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
#ifndef IMPOSEINPUTFILE_H
#define IMPOSEINPUTFILE_H

#include "podofo/podofo.h"

#include <string>
#include <map>
#include <vector>
#include <sstream>
#include <istream>
#include <string>

namespace PoDoFo
{
	namespace Impose
	{
		
class imposeInputFile
{
	public:
		imposeInputFile();
		imposeInputFile( const std::string & source );

		~imposeInputFile() { }
		
		void loadSource ( const std::string & source );

		PdfMemDocument *sourceDoc;
		int pcount;
		double sourceWidth;
		double sourceHeight;
		double scaleFactor;
		std::string boundingBox;

	private:
		bool checkIsPDF ( std::string path );

};

	};}; // end of namespace
#endif
