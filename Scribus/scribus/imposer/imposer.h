#ifndef IMPOSER_H
#define IMPOSER_H

#include "podofo/podofo.h"
#include "imposeroptions.h"
#include "imposeinputfile.h"
#include "imposeoutputfile.h"
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
			void imposeBirthdayCard (const QString & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeBusinessCard (const QString & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeMagazine 	(const QString & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeMultiFold 	(const QString & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeTiles 	(const QString & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeFile 	(const QString & target, PoDoFo::Impose::imposeInputFile * input );
		};

	};
}; // end of namespace
#endif
