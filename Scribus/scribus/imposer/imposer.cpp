#include "imposer.h"

#include <cstdlib>
#include <iostream>
#include <string>
#include <cstdio>
#include <stdexcept>

using std::cerr;
using std::strtod;
using std::ostringstream;
using std::map;
using std::vector;
using std::string;
using std::ifstream;
using std::istream;
using std::ostream;
using std::endl;
using std::runtime_error;

namespace PoDoFo
{
	namespace Impose
	{
		imposer::imposer ( )
		{
			std::cerr<<"imposer::imposer"<<std::endl;
		}

		void imposer::imposeBirthdayCard (const QString & target, PoDoFo::Impose::imposeInputFile * input )
		{
			int numberOfSheets = 0;
			int currentSheet;
			int currentPage;
			int currentPageOnSheet;

			double destWidth = input->sourceWidth * 2;
			double destHeight = input->sourceHeight * 2;
			double scaleFactor = 1.0;
			std::string boundingBox = "";

 			std::cerr<<"imposer::imposeBirthdayCard"<<std::endl;
	
			PoDoFo::Impose::imposeOutputFile * output      = new PoDoFo::Impose::imposeOutputFile();
			output->createTarget(target.toStdString(),input);
	
			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			numberOfSheets = (input->pcount+3) / 4;
#ifdef DEBUG
			std::cerr<<"Creating " << numberOfSheets << " sheets from " << input->pcount << " pages." <<std::endl;
#endif			
			currentPage = 1;
			for (currentSheet = 1; currentSheet <= numberOfSheets; currentSheet++) {
				/* Create new sheet */
				output->startSheet(destWidth, destHeight, scaleFactor);
				for (currentPageOnSheet = 1; currentPageOnSheet <= 4; currentPageOnSheet++) {
					if (currentPage <= input->pcount) {
						/* If there are still input pages left, add the next to the output */
						/* First calculate the rotation and translation 
						 * Page 3 and 4 are upside down*/
						double cosR = currentPageOnSheet < 2 ? -1 : 1;
						double sinR = 0;
						double tx;
						double ty;
						switch (currentPageOnSheet) {
							case 1:
							  cosR = -1.0;
							  sinR = 0.0;
							  tx   = input->sourceWidth;
							  ty   = input->sourceHeight*2;
							  break;
							case 2:
							  cosR = -1.0;
							  sinR = 0.0;
							  tx   = input->sourceWidth*2;
							  ty   = input->sourceHeight*2;
							  break;
							case 3:
							  cosR = 1.0;
							  sinR = 0.0;
							  tx   = 0.0;
							  ty   = 0.0;
							  break;
							case 4:
							  cosR = 1.0;
							  sinR = 0.0;
							  tx   = input->sourceWidth;
							  ty   = 0.0;
							  break;
							default:
 							  std::cerr<<"imposeBirthdayCard::impose error: currentPageOnSheet of of range."<<std::endl;
							  cosR = 1.0;
							  sinR = 0.0;
							  tx   = 0.0;
							  ty   = 0.0;
							  break;
						}
						output->imposePage(currentPage, cosR, sinR, tx,ty);

						currentPage++;
					}
				}
				output->finishSheet();

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}

		void imposer::imposeBusinessCard (const QString & target, PoDoFo::Impose::imposeInputFile * input )
		{
			int numberOfSheets = 0;
			int currentSheet;
			int currentPage;
			
			int nx= 3, ny=4;
			
			double tx,ty;
			double destWidth = input->sourceWidth * nx;
			double destHeight = input->sourceHeight * ny;
			double scaleFactor = 1.0;
			std::string boundingBox = "";

 			std::cerr<<"imposer::imposeBusinessCard"<<std::endl;
	
			PoDoFo::Impose::imposeOutputFile * output      = new PoDoFo::Impose::imposeOutputFile();
			output->createTarget(target.toStdString(),input);
	
			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			numberOfSheets = input->pcount;
#ifdef DEBUG
			std::cerr<<"Creating " << numberOfSheets << " sheets from " << input->pcount << " pages." <<std::endl;
#endif			
			currentPage = 1;
			for (currentSheet = 1; currentSheet <= numberOfSheets; currentSheet++) {
				/* Create new sheet */
				output->startSheet(destWidth, destHeight, scaleFactor);
				for (tx = 0.0; tx<destWidth; tx+=input->sourceWidth) {
					for (ty = 0.0; ty<destHeight; ty+=input->sourceHeight) {
						output->imposePage(currentPage, 1.0, 0.0, tx,ty);
					}
				}
				output->finishSheet();
				currentPage++;

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}
		
		void imposer::imposeMultiFold (const QString & target, PoDoFo::Impose::imposeInputFile * input )
		{
			int numberOfCreatedPages = 0;
			int currentPage = 0;

			int doubleSided = 1; 		/* From configuration dialog */
			int nFold 	= 3;		/* From configuration dialog */
			int currentSide = 0;		/* 0 = front, 1 = back */

			double destWidth = input->sourceWidth * nFold;
			double destHeight = input->sourceHeight;
			double scaleFactor = 1.0;
			std::string boundingBox = "";
					
			/* cosR and sinR are fixed for now: no rotation supported yet */	
			double cosR = 1.0;
			double sinR = 0.0;

			double tx;
			double ty;

 			std::cerr<<"imposer::imposeMultiFold"<<std::endl;
	
			PoDoFo::Impose::imposeOutputFile * output      = new PoDoFo::Impose::imposeOutputFile();
			output->createTarget(target.toStdString(),input);
	
			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			if (doubleSided == 1) {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 2*nFold. 
			   * nFold pages per sheet, double sided */
			  numberOfCreatedPages = (input->pcount+(nFold*2)-1); 
			  numberOfCreatedPages -= numberOfCreatedPages % (nFold*2);
			} else {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 2. 
			   * Two pages per sheet, single sided */
			  numberOfCreatedPages = (input->pcount+nFold-1); 
			  numberOfCreatedPages -= numberOfCreatedPages % nFold;
			}
#ifdef DEBUG
			std::cerr<<"Creating " << numberOfCreatedPages/nFold << " sheets from " << input->pcount << " pages." <<std::endl;
#endif			
			currentPage = 1; currentSide = 0;
			while (currentPage <= numberOfCreatedPages) {
				/* Create new sheet */
				output->startSheet(destWidth, destHeight, scaleFactor);
				for (int pageOnSheet = 1; pageOnSheet <= nFold; pageOnSheet ++) {
					tx = cosR*(pageOnSheet-1)*input->sourceWidth;
					ty = sinR*(pageOnSheet-1)*input->sourceHeight;
					if (currentPage <= input->pcount) output->imposePage(currentPage, cosR, sinR, tx,ty);
					currentPage++;
				}
		                output->finishSheet();
				currentSide ^=1;

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}

		void imposer::imposeMagazine (const QString & target, PoDoFo::Impose::imposeInputFile * input )
		{
			int numberOfCreatedPages = 0;
			int leftPage, rightPage;
			int doubleSided = 1; 		/* From configuration dialog */

			double destWidth = input->sourceWidth * 2;
			double destHeight = input->sourceHeight;
			double scaleFactor = 1.0;
			std::string boundingBox = "";
					
			/* cosR and sinR are fixed for now: no rotation supported yet */	
			double cosR = 1.0;
			double sinR = 0.0;

			double tx;
			double ty;

 			std::cerr<<"imposer::imposeMagazine"<<std::endl;
	
			PoDoFo::Impose::imposeOutputFile * output      = new PoDoFo::Impose::imposeOutputFile();
			output->createTarget(target.toStdString(),input);
	
			if ( !output->targetDoc )
				throw std::invalid_argument ( "Output file is null" );

			if (doubleSided == 1) {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 4. 
			   * Two pages per sheet, double sided */
			  numberOfCreatedPages = (input->pcount+3) & ~3; 
			} else {
			  /* The number of pages we create is the number of input pages rounded up to the nearest multiple of 2. 
			   * Two pages per sheet, single sided */
			  numberOfCreatedPages = (input->pcount+1) & ~1; 
			}
#ifdef DEBUG
			std::cerr<<"Creating " << numberOfCreatedPages/2 << " sheets from " << input->pcount << " pages." <<std::endl;
#endif			
			/* Set starting pages. */
			leftPage = 1;
			rightPage = numberOfCreatedPages;
			
			if ( leftPage > rightPage ) // Sanity check 
				throw std::invalid_argument ( "imposeMagazine: This can't happen error: leftpage exceeds rightpage." );

			/* Loop over all pages. The page counters leftPage and rightPage can both exceed the source page counter,
			 * e.g. when there is 1 source page but we make a double-sided magazine, the leftPage counts 1,2 and the
			 * rightPage counts 4,3. Therefore all calls to imposePage must be guarded with a page number test.
			 */
			for (; leftPage < rightPage; leftPage++, rightPage--) {
				/* Create new sheet */
#ifdef DEBUG
		                std::cerr << "Creating sheet with pages" << leftPage << " and " <<  rightPage << std::endl;
#endif
				output->startSheet(destWidth, destHeight, scaleFactor);
				ty = 0.0;
				if ((doubleSided == 1) && ((leftPage & 1)==1)) {
					/* If we impose double sided, and we are printing the odd pages,
					   swap left and right */
					tx = 0.0;
					if (rightPage <= input->pcount) output->imposePage(rightPage, cosR, sinR, tx,ty);
					tx = input->sourceWidth;
					if (leftPage <= input->pcount)  output->imposePage(leftPage , cosR, sinR, tx,ty);
				} else {
					/* Otherwise the pages are not swapped.*/
					tx = 0.0;
					if (leftPage  <= input->pcount) output->imposePage(leftPage , cosR, sinR, tx,ty);
					tx = input->sourceWidth;
					if (rightPage <= input->pcount) output->imposePage(rightPage, cosR, sinR, tx,ty);
				}
#ifdef DEBUG
                		std::cerr << "Finishing sheet" << std::endl;
#endif
		                output->finishSheet();

			}
			std::string tmpstr = target.toStdString();
			output->targetDoc->Write ( tmpstr.c_str() );

		}

		void imposer::imposeTiles (const QString & target, PoDoFo::Impose::imposeInputFile * input )
		{
		}

		void imposer::imposeFile (const QString & target, PoDoFo::Impose::imposeInputFile * input )
		{
		}
		
		int imposer::impose ( QString in, QString out, ImposerOptions * options)
		{
			try
			{
				if (options->style == ImposerOptions::None) {
					std::cerr << "Imposer::impose called with no imposition selected." << std::endl;
					return -1;
				}
				
				PoDoFo::Impose::imposeInputFile * input = new PoDoFo::Impose::imposeInputFile(in.toStdString());
				switch (options->style) {
					case ImposerOptions::BirthdayCard:
						imposeBirthdayCard (out,input);
						break;
					case ImposerOptions::BusinessCard:
						imposeBusinessCard (out,input);
						break;
					case ImposerOptions::Magazine:
						imposeMagazine (out,input);
						break;
					case ImposerOptions::MultiFold:
						imposeMultiFold (out,input);
						break;
					case ImposerOptions::Tiles:
						imposeTiles (out,input);
						break;
					case ImposerOptions::File:
						imposeFile (out,input);
						break;
					default:
						std::cerr << "imposer::impose called with unhandled imposition style: " << options->style << std::endl;
						break;
				}
			}
			catch ( PoDoFo::PdfError & e )
			{
				e.GetCallstack();
				e.PrintErrorMsg();
				return 3;
			}
			catch ( std::exception & e )
			{
				cerr << e.what() << endl;
			}

			return 0;
		}
	}
}

