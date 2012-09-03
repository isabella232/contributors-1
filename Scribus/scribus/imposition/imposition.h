#ifndef IMPOSER_H
#define IMPOSER_H

#include "podofo/podofo.h"
#include "impositionoptions.h"
#include "impositioninputfile.h"
#include "impositionoutputfile.h"
#include <QString>

namespace PoDoFo
{
	namespace Impose
	{
		class imposer
		{
		public:
			imposer();
			~imposer() { }
			int  impose (QString in, QString out, ImposerOptions * options);
		private:
			void imposeBirthdayCard (const QString & target, PoDoFo::Impose::imposeInputFile * input, ImposerOptions * options );
			void imposeBusinessCard (const QString & target, PoDoFo::Impose::imposeInputFile * input, ImposerOptions * options );
			void imposeMagazine 	(const QString & target, PoDoFo::Impose::imposeInputFile * input, ImposerOptions * options );
			void imposeMultiFold 	(const QString & target, PoDoFo::Impose::imposeInputFile * input, ImposerOptions * options );
			void imposeTiles 	(const QString & target, PoDoFo::Impose::imposeInputFile * input, ImposerOptions * options );
			void imposeFile 	(const QString & target, PoDoFo::Impose::imposeInputFile * input, ImposerOptions * options );
		};

	};
}; // end of namespace
#endif
