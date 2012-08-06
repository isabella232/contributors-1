#ifndef IMPOSER_H
#define IMPOSER_H

#include "podofo/podofo.h"
#include "imposeinputfile.h"

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
		class imposer
		{
		public:
			imposer();
			~imposer() { }
			int  impose (std::string in, std::string out, std::string plan  );
		private:
			void imposeBirthdayCard (const std::string & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeBusinessCard (const std::string & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeMagazine 	(const std::string & target, PoDoFo::Impose::imposeInputFile * input );
			void imposeMultiFold 	(const std::string & target, PoDoFo::Impose::imposeInputFile * input );



		};

	};
}; // end of namespace
#endif
