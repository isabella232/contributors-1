/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/

#include <QDir>
#include <QImageReader>
#include <QMapIterator>
#include <QObject>

#include "commonstrings.h"
#include "plugins/formatidlist.h"
#include "loadsaveplugin.h"
#include "pluginmanager.h"
#include "scpaths.h"
#include "util_formats.h"

FormatsManager* FormatsManager::_instance = 0;

FormatsManager::FormatsManager()
{
	m_fmts.insert(FormatsManager::EPS,  QStringList() << "eps" << "epsf" << "epsi" << "eps2" << "eps3" << "epi" << "ept");
	m_fmts.insert(FormatsManager::GIF,  QStringList() << "gif");
	m_fmts.insert(FormatsManager::JPEG, QStringList() << "jpg" << "jpeg");
	m_fmts.insert(FormatsManager::PAT,  QStringList() << "pat");
	m_fmts.insert(FormatsManager::PDF,  QStringList() << "pdf");
	m_fmts.insert(FormatsManager::PGF,  QStringList() << "pgf");
	m_fmts.insert(FormatsManager::PNG,  QStringList() << "png");
	m_fmts.insert(FormatsManager::PS,   QStringList() << "ps");
	m_fmts.insert(FormatsManager::PSD,  QStringList() << "psd");
	m_fmts.insert(FormatsManager::TIFF, QStringList() << "tif" << "tiff");
	m_fmts.insert(FormatsManager::XPM,  QStringList() << "xpm");
	m_fmts.insert(FormatsManager::WMF,  QStringList() << "wmf");
	m_fmts.insert(FormatsManager::SVG,  QStringList() << "svg" << "svgz");
	m_fmts.insert(FormatsManager::AI,   QStringList() << "ai");
	m_fmts.insert(FormatsManager::XFIG, QStringList() << "fig");
	m_fmts.insert(FormatsManager::CVG,  QStringList() << "cvg");
	m_fmts.insert(FormatsManager::WPG,  QStringList() << "wpg");
	m_fmts.insert(FormatsManager::BMP,  QStringList() << "bmp");
#ifdef GMAGICK_FOUND
	m_fmts.insert(FormatsManager::GMAGICK, QStringList() << "xbm" << "tga" << "ptif" << "ppm" << "pnm" << "pgm" << "pcds" << "pcd" << "pbm" << "mng" << "ico" << "gif" << "fax" << "dpx" << "bmp" << "xcf");
#endif
	m_fmts.insert(FormatsManager::UNICONV, QStringList() << "cdr" << "cdt" << "ccx" << "cmx" << "aff" << "sk" << "sk1" << "plt" << "dxf" << "dst" << "pes" << "exp" << "pcs");
	m_fmts.insert(FormatsManager::PCT,  QStringList() << "pct" << "pic" << "pict");
	
	m_fmtNames[FormatsManager::EPS]  = QObject::tr("Encapsulated PostScript \"*.eps\"");
	m_fmtNames[FormatsManager::GIF]  = QObject::tr("GIF");
	m_fmtNames[FormatsManager::JPEG] = QObject::tr("JPEG");
	m_fmtNames[FormatsManager::PAT]  = QObject::tr("Pattern Files");
	m_fmtNames[FormatsManager::PDF]  = QObject::tr("PDF Document");
	m_fmtNames[FormatsManager::PGF]  = QObject::tr("PGF");
	m_fmtNames[FormatsManager::PNG]  = QObject::tr("PNG");
	m_fmtNames[FormatsManager::PS]   = QObject::tr("PostScript \"*.ps\"");
	m_fmtNames[FormatsManager::PSD]  = QObject::tr("Adobe Photoshop \"*.psd\"");
	m_fmtNames[FormatsManager::TIFF] = QObject::tr("TIFF");
	m_fmtNames[FormatsManager::XPM]  = QObject::tr("XPM");
	m_fmtNames[FormatsManager::WMF]  = QObject::tr("Windows Meta File \"*.wmf\"");
	m_fmtNames[FormatsManager::SVG]  = QObject::tr("Scalable Vector Graphics \"*.svg\"");
	m_fmtNames[FormatsManager::AI]   = QObject::tr("Adobe Illustrator \"*.ai\"");
	m_fmtNames[FormatsManager::XFIG] = QObject::tr("Xfig File");
	m_fmtNames[FormatsManager::CVG]  = QObject::tr("Calamus CVG File");
	m_fmtNames[FormatsManager::WPG]  = QObject::tr("Word Perfect WPG File");
	m_fmtNames[FormatsManager::BMP]  = QObject::tr("BMP");
#ifdef GMAGICK_FOUND
	m_fmtNames[FormatsManager::GMAGICK] = QObject::tr("GraphicsMagick File");
#endif
	m_fmtNames[FormatsManager::UNICONV] = QObject::tr("UniConvertor File");
	m_fmtNames[FormatsManager::PCT]  = QObject::tr("Macintosh Pict File");
	
	m_fmtMimeTypes.insert(FormatsManager::EPS,  QStringList() << "application/postscript");
	m_fmtMimeTypes.insert(FormatsManager::GIF,  QStringList() << "image/gif");
	m_fmtMimeTypes.insert(FormatsManager::JPEG, QStringList() << "image/jpeg");
	m_fmtMimeTypes.insert(FormatsManager::PAT,  QStringList() << "");
	m_fmtMimeTypes.insert(FormatsManager::PDF,  QStringList() << "application/pdf");
	m_fmtMimeTypes.insert(FormatsManager::PGF,  QStringList() << "image/pgf");
	m_fmtMimeTypes.insert(FormatsManager::PNG,  QStringList() << "image/png");
	m_fmtMimeTypes.insert(FormatsManager::PS,   QStringList() << "application/postscript");
	m_fmtMimeTypes.insert(FormatsManager::PSD,  QStringList() << "application/photoshop");
	m_fmtMimeTypes.insert(FormatsManager::TIFF, QStringList() << "image/tiff");
	m_fmtMimeTypes.insert(FormatsManager::XPM,  QStringList() << "image/xpm ");
	m_fmtMimeTypes.insert(FormatsManager::WMF,  QStringList() << "image/wmf");
	m_fmtMimeTypes.insert(FormatsManager::SVG,  QStringList() << "image/svg+xml");
	m_fmtMimeTypes.insert(FormatsManager::AI,   QStringList() << "application/illustrator");
	m_fmtMimeTypes.insert(FormatsManager::XFIG, QStringList() << "image/x-xfig");
	m_fmtMimeTypes.insert(FormatsManager::CVG,  QStringList() << "");
	m_fmtMimeTypes.insert(FormatsManager::WPG,  QStringList() << "");
	m_fmtMimeTypes.insert(FormatsManager::PCT,  QStringList() << "");
			
	QMapIterator<int, QStringList> i(m_fmts);
	while (i.hasNext()) 
	{
		i.next();
		m_fmtList << i.value().first().toUpper();
	}

	m_qtSupportedImageFormats=QImageReader::supportedImageFormats();
	m_supportedImageFormats=m_qtSupportedImageFormats;
	updateSupportedImageFormats(m_supportedImageFormats);
	loadImporterPlugins();
}

FormatsManager::~FormatsManager()
{
}

FormatsManager* FormatsManager::instance()
{
	if (_instance == 0)
		_instance = new FormatsManager();

	return _instance;
}

void FormatsManager::deleteInstance()
{
	if (_instance)
		delete _instance;
	_instance = 0;
}

void FormatsManager::imageFormatSupported(const QString& ext)
{
// 	return m_supportedImageFormats.contains(QByteArray(ext).toLatin1());
}

void FormatsManager::updateSupportedImageFormats(QList<QByteArray>& supportedImageFormats)
{
	QMapIterator<int, QStringList> it(m_fmts);
	while (it.hasNext())
	{
		it.next();
		QStringListIterator itSL(it.value());
		while (itSL.hasNext())
		{
			QString t(itSL.next());
			supportedImageFormats.append(t.toLocal8Bit());
		}
	}
}

QString FormatsManager::nameOfFormat(int type)
{
	QMapIterator<int, QString> it(m_fmtNames);
	while (it.hasNext())
	{
		it.next();
		if (type & it.key())
			return it.value();
	}
	return QString::null;
}

QStringList FormatsManager::mimetypeOfFormat(int type)
{
	QMapIterator<int, QStringList> it(m_fmtMimeTypes);
	while (it.hasNext())
	{
		it.next();
		if (type & it.key())
			return it.value();
	}
	return QStringList();
}

QString FormatsManager::extensionsForFormat(int type)
{
	QString a,b,c;
	fileTypeStrings(type, a, b, c);
	return b;
}

QString FormatsManager::fileDialogFormatList(int type)
{
	QString a,b,c;
	fileTypeStrings(type, a, b, c);
	return a + b + ";;" +c;
}

QString FormatsManager::extensionListForFormat(int type, int listType)
{
	QString nameMatch;
	QString separator(listType==0 ? " *." : "|");
	QMapIterator<int, QStringList> it(m_fmts);
	bool first=true;
	int n=0;
	while (it.hasNext())
	{
		it.next();
		if (type & it.key())
		{
			//Just in case the Qt used doesn't support jpeg or gif
			if ((JPEG & it.key()) && !m_supportedImageFormats.contains(QByteArray("jpg")))
				continue;
			if ((GIF & it.key()) && !m_supportedImageFormats.contains(QByteArray("gif")))
				continue;
			if (first)
				first=false;
			QStringListIterator itSL(it.value());
			while (itSL.hasNext())
			{
				if (listType==0)
					nameMatch += separator;
				nameMatch += itSL.next();
				if (listType==1 && itSL.hasNext())
					nameMatch += separator;
			}
		}
		++n;
		if (listType==1 && it.hasNext() && nameMatch.length()>0 && !nameMatch.endsWith(separator))
			nameMatch += separator;
	}
	if (listType==0 && nameMatch.startsWith(" "))
		nameMatch.remove(0,1);
	if (listType==1 && nameMatch.endsWith("|"))
		nameMatch.chop(1);
	return nameMatch;
}

void FormatsManager::fileTypeStrings(int type, QString& formatList, QString& formatText, QString& formatAll, bool lowerCaseOnly)
{
	QString fmtList = QObject::tr("All Supported Image Formats")+" (";
	QString fmtText;
	QMapIterator<int, QStringList> it(m_fmts);
	bool first=true;
	int n=0;
	while (it.hasNext())
	{
		it.next();
		if (type & it.key())
		{
			//Just in case the Qt used doesn't support jpeg or gif
			if ((JPEG & it.key()) && !m_supportedImageFormats.contains(QByteArray("jpg")))
				continue;
			if ((GIF & it.key()) && !m_supportedImageFormats.contains(QByteArray("gif")))
				continue;
			if (first)
				first=false;
			else
			{
				fmtList += " ";
				fmtText += ";;";
			}
			QString text=m_fmtNames[it.key()] + " (";
			QStringListIterator itSL(it.value());
			while (itSL.hasNext())
			{
				QString t("*." + itSL.next());
				fmtList += t;
				text += t;
				if(!lowerCaseOnly)
				{
					fmtList += " " + t.toUpper();
					text += " " + t.toUpper();
				}
				if (itSL.hasNext())
				{
					fmtList += " ";
					text += " ";
				}
			}
			text += ")";
			fmtText += text;
		}
		++n;
	}
	formatList+=fmtList + ");;";
	formatText+=fmtText;
	formatAll=QObject::tr("All Files (*)");
}

bool extensionIndicatesPDF(const QString &ext)
{
// 	QStringList strl;
// 	strl << "pdf";
// 	return strl.contains(ext, Qt::CaseInsensitive);
	return (QString::compare("pdf", ext, Qt::CaseInsensitive) == 0);
}

bool extensionIndicatesEPS(const QString &ext)
{
	QStringList strl;
	strl << "eps" << "epsf" << "epsi" << "eps2" << "eps3" << "epi" << "ept";
	return strl.contains(ext, Qt::CaseInsensitive);
}

bool extensionIndicatesEPSorPS(const QString &ext)
{
	QStringList strl;
	strl << "eps" << "epsf" << "epsi" << "ps" << "eps2" << "eps3" << "epi" << "ept";
	return strl.contains(ext, Qt::CaseInsensitive);
}

bool extensionIndicatesTIFF(const QString &ext)
{
	QStringList strl;
	strl << "tif" << "tiff";
	return strl.contains(ext, Qt::CaseInsensitive);
}

bool extensionIndicatesPSD(const QString &ext)
{
// 	QStringList strl;
// 	strl << "psd";
// 	return strl.contains(ext, Qt::CaseInsensitive);
	return (QString::compare("psd", ext, Qt::CaseInsensitive) == 0);
}

bool extensionIndicatesJPEG(const QString &ext)
{
	QStringList strl;
	strl << "jpg" << "jpeg";
	return strl.contains(ext, Qt::CaseInsensitive);
}

bool extensionIndicatesPattern(const QString &ext)
{
	QStringList strl;
	strl << "pat";
	return strl.contains(ext, Qt::CaseInsensitive);
}

QString getImageType(QString filename)
{
	QString ret = "";
	QFile f(filename);
	QFileInfo fi(f);
	if (fi.exists())
	{
		QByteArray buf(20, ' ');
		if (f.open(QIODevice::ReadOnly))
		{
			f.read(buf.data(), 20);
			if ((buf[0] == '%') && (buf[1] == '!') && (buf[2] == 'P') && (buf[3] == 'S') && (buf[4] == '-') && (buf[5] == 'A'))
				ret = "eps";
			else if ((buf[0] == '\xC5') && (buf[1] == '\xD0') && (buf[2] == '\xD3') && (buf[3] == '\xC6'))
				ret = "eps";
			else if ((buf[0] == 'G') && (buf[1] == 'I') && (buf[2] == 'F') && (buf[3] == '8'))
				ret = "gif";
			else if ((buf[0] == '\xFF') && (buf[1] == '\xD8') && (buf[2] == '\xFF'))
				ret = "jpg";
			else if ((buf[0] == '%') && (buf[1] == 'P') && (buf[2] == 'D') && (buf[3] == 'F'))
				ret = "pdf";
			else if ((buf[0] == 'P') && (buf[1] == 'G') && (buf[2] == 'F'))
				ret = "pgf";
			else if ((buf[0] == '\x89') && (buf[1] == 'P') && (buf[2] == 'N') && (buf[3] == 'G'))
				ret = "png";
			else if ((buf[0] == '8') && (buf[1] == 'B') && (buf[2] == 'P') && (buf[3] == 'S'))
				ret = "psd";
			else if (((buf[0] == 'I') && (buf[1] == 'I') && (buf[2] == '\x2A')) || ((buf[0] == 'M') && (buf[1] == 'M') && (buf[3] == '\x2A')))
				ret = "tif";
			else if ((buf[0] == '/') && (buf[1] == '*') && (buf[2] == ' ') && (buf[3] == 'X') && (buf[4] == 'P') && (buf[5] == 'M'))
				ret = "xpm";
			
			f.close();
		}
	}
	return ret;
}

// Find the available plugins based on the environment, validate they load, and
// create quick lookup mappings.
void FormatsManager::loadImporterPlugins()
{
	// Get the path to the plugins
	QString gtdir = ScPaths::instance().pluginDir();
	// Append the gettext path to the plugin
	gtdir += "gettext";
	// Set the search parameteer for the platform specific extension for the plugins ( DLL, so, etc. )
	QString libPattern = QString("*.%1*").arg(PluginManager::platformDllExtension());
	// Search for matches.
	QDir d(gtdir, libPattern, QDir::Name, (QDir::Filter) PluginManager::platformDllSearchFlags());

	// Initialize a structure for the importers found
	struct ImporterData ida;
	ida.fileFormatName = "";

	// Check and see if the directory existed and if the count of files matching is greater than 0.
	if ((d.exists()) && (d.count() != 0))
	{
		// loop through the entries.
		for (uint dc = 0; dc < d.count(); ++dc)
		{
			// Verify the Plugin will load. If it does, collect the info on the plugin ( Name, extension, format, etc )
			if (DLLName(d[dc], &ida.fileFormatName, &ida.fileEndings))
			{
				// no plugin's "format name" marks "don't load plug"
				if (ida.fileFormatName.isNull())
					continue;
				// Store the path to the plugin.
				ida.soFilePath = d[dc];
				// If the plugin path does not begin with /, prepend a /.
				if (ida.soFilePath.left(1) != "/")
					ida.soFilePath = "/" + ida.soFilePath;
				// Add the plugin data to the end of the importer's vector.
				importers.push_back(ida);
			}	// if (DLLName(d[dc], &ida.fileFormatName, &ida.fileEndings))
		}  // for (uint dc = 0; dc < d.count(); ++dc)
	}  // if ((d.exists()) && (d.count() != 0))
	// Create the Importer Extension to Plugin data qmap.
	createMap();
	// Populate ilist with the file importer names.
	for (uint i = 0;  i < importers.size(); ++i)
		ilist.append(importers[i].fileFormatName);
}  // void gtGetText::loadImporterPlugins()

// Create the importer Qmap.
void FormatsManager::createMap()
{
	// Loop through the importers Vector
	for (uint i = 0; i < importers.size(); ++i)
	{
		// Loop through each file extension the importer uses/importers and create an individual
		// Qmap entry for it.
		for (int j = 0; j < importers[i].fileEndings.count(); ++j)
				importerMap.insert(importers[i].fileEndings[j], &importers[i]);
	}  // for (uint i = 0; i < importers.size(); ++i)
}  // void gtGetText::createMap()

QString FormatsManager::fileDialogTextFormatList()
{
	// Initialize a filters list.
	QString filters = "";
	// Create a string for the "All supported files filter". Start with the label then loop through
	// the importers vector and add all of the file extensions supported.
	QString allSupported = QObject::tr("All Supported Text Formats") + " (";
	// Loop through the importers vector.
	for (uint i = 0; i < importers.size(); ++i)
	{
		// If there are any file extnsions declared by the importer
		if (importers[i].fileEndings.count() != 0)
		{
			// Add the importer name to the filters list
			filters += importers[i].fileFormatName + " (";
			// Loop though the extensions supported by the importer
			for (int j = 0; j < importers[i].fileEndings.count(); ++j)
			{
				// Add the extension to both the filter and allSupported strings
				filters += "*." + importers[i].fileEndings[j] + " ";
				allSupported += "*." + importers[i].fileEndings[j] + " ";
			}  // for (int j = 0; j < importers[i].fileEndings.count(); ++j)
			// Trim the Qstring
			filters = filters.trimmed();
			// Append "entry of entry" information to the end of the filter.
			filters += ");;";
		}  // if (importers[i].fileEndings.count() != 0)
	}  // for (uint i = 0; i < importers.size(); ++i)
	// Trim the allSupported QString and append "end of entry" data to the end of it.
	allSupported = allSupported.trimmed();
	allSupported += ");;";
	// Prepend allSupported to the filters Qstring.
	filters = allSupported + filters;
	// Add an "all files" entry to the end of the filters QString
	filters += QObject::tr("All Files (*)");
	return filters;
}

// Loads the "DLL", validates the importer is good, populates the passed parameters with
// the plugin information.
bool FormatsManager::DLLName(QString name, QString *ffName, QStringList *fEndings)
{
	// Pointer to the plugin, once loaded
	void* gtplugin;
	// typedef of Qstring to map the importer name (FileFormatName) method results to.
	typedef QString (*sdem0)();
	// typedef of QStringList to map the file extensions supported method results to.
	typedef QStringList (*sdem1)();
	// The actual importer name object
	sdem0 fp_FileFormatName;
	// The actual extensions supported object
	sdem1 fp_FileExtensions;
	// Initialise the plugin file path ( with filename )
	QString pluginFilePath = QString("%1/gettext/%2").arg(ScPaths::instance().pluginDir()).arg(name);
	// Attempt to load the plugin.
	gtplugin = PluginManager::loadDLL(pluginFilePath);
	// if gtplugin is NULL we were unable to load the plugin. Return an error and exit the method.
	if (!gtplugin)
	{
		qWarning("Failed to load plugin %s", pluginFilePath.toAscii().constData());
		return false;
	}
	// Attempt to resolve the plugin symbol to the importer name (FileFormatName)
	fp_FileFormatName = (sdem0) PluginManager::resolveSym( gtplugin, "FileFormatName");
	// if fp_FileFormatName is NULL, we could not find the FileFormatName symbol. The plugin is incomplete.
	// Report an error, unload the plugin, and exit the method.
	if (!fp_FileFormatName)
	{
		qWarning("Failed to get FileFormatName() from %s", pluginFilePath.toAscii().constData());
		PluginManager::unloadDLL(gtplugin);
		return false;
	}
	// Attempt to resolve the plugin symbol to the list of supported file extensions.
	fp_FileExtensions = (sdem1) PluginManager::resolveSym( gtplugin, "FileExtensions");
	// if fp_FileExtensions is NULL, we could not find the FileExtensions symbol. The plugin is incomplete.
	// Report an error, unload the plugin, and exit the method.
	if (!fp_FileExtensions)
	{
		qWarning("Failed to get FileExtensions() from %s", pluginFilePath.toAscii().constData());
		PluginManager::unloadDLL(gtplugin);
		return false;
	}
	// Set the format name based on the resolved method.
	*ffName = (*fp_FileFormatName)();
	// Set the extensions list based on the resolved method.
	*fEndings = (*fp_FileExtensions)();
	// Unload the plugin
	PluginManager::unloadDLL(gtplugin);
	// Successfully return!
	return true;
}  // bool gtGetText::DLLName(QString name, QString *ffName, QStringList *fEndings)


QString FormatsManager::fileDialogVectorFormatList()
{
	QStringList formats;
	QString allFormats = QObject::tr("All Supported Vector Formats")+" (";
	int fmtCode = FORMATID_FIRSTUSER;
	const FileFormat *fmt = LoadSavePlugin::getFormatById(fmtCode);
	while (fmt != 0)
	{
		if (fmt->load)
		{
			formats.append(fmt->filter);
			int an = fmt->filter.indexOf("(");
			int en = fmt->filter.indexOf(")");
			while (an != -1)
			{
				allFormats += fmt->filter.mid(an+1, en-an-1)+" ";
				an = fmt->filter.indexOf("(", en);
				en = fmt->filter.indexOf(")", an);
			}
		}
		fmtCode++;
		fmt = LoadSavePlugin::getFormatById(fmtCode);
	}
	allFormats += "*.sce *.SCE);;";
	formats.append("Scribus Objects (*.sce *.SCE)");
	qSort(formats);
	allFormats += formats.join(";;");
	return allFormats;
}

bool FormatsManager::isVectorFile(QString fileName)
{
	QStringList formats;
	QFileInfo fi(fileName);
	int fmtCode = FORMATID_FIRSTUSER;
	const FileFormat *fmt = LoadSavePlugin::getFormatById(fmtCode);
	while (fmt != 0)
	{
		if (fmt->load)
		{
			formats.append(fmt->filter);
			int an = fmt->filter.indexOf("(");
			int en = fmt->filter.indexOf(")");
			while (an != -1)
			{
				if(fmt->filter.mid(an+1, en-an-1).toLower().contains(fi.suffix().toLower()))
					return true;
				an = fmt->filter.indexOf("(", en);
				en = fmt->filter.indexOf(")", an);
			}
		}
		fmtCode++;
		fmt = LoadSavePlugin::getFormatById(fmtCode);
	}
	if(QString("*.sce *.SCE").toLower().contains(fi.suffix().toLower()))
					return true;
	return false;
}
