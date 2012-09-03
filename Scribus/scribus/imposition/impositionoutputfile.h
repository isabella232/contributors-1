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
#ifndef IMPOSEOUTPUTFILE_H
#define IMPOSEOUTPUTFILE_H

#include "podofo/podofo.h"
#include "impositioninputfile.h"

#include <string>
#include <map>
#include <vector>
#include <sstream>
#include <istream>
#include <string>

// using namespace PoDoFo;

namespace PoDoFo
{
	namespace Impose
	{
		
class imposeOutputFile
{
	public:
		imposeOutputFile();

		~imposeOutputFile() { }

		PdfMemDocument *targetDoc;

		void createTarget ( const std::string & target, PoDoFo::Impose::imposeInputFile * input );

		void startSheet(double w, double h, double s);
		void finishSheet();
		void imposePage (int page,double c, double s, double x, double y); 
	private:
		PdfReference globalResRef;
		
		std::map<int, PdfXObject*> xobjects;
		std::map<int,PdfObject*> resources;
		std::map<int, PdfRect> cropRect;
		std::map<int,PdfRect> bleedRect;
		std::map<int, PdfRect> trimRect;
		std::map<int,PdfRect> artRect;
		std::map<int, PdfDictionary*> pDict;
		std::map<int, int> virtualMap;

		PdfObject* getInheritedResources ( PdfPage* page, PoDoFo::Impose::imposeInputFile * input );
		PdfObject* migrateResource(PdfObject * obj, PoDoFo::Impose::imposeInputFile * input);
		
		std::map<std::string, PdfObject*> migrateMap;

		PdfDictionary xdict;
        std::ostringstream * buffer;
		PdfPage *     sheet;
};

	};}; // end of namespace
#endif
