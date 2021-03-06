/*
For general Scribus (>=1.3.2) copyright and licensing information please refer
to the COPYING file provided with the program. Following this notice may exist
a copyright and/or license notice that predates the release of Scribus 1.3.2
for which a new license (GPL+exception) is in place.
*/
/***************************************************************************
 *                                                                         *
 *   This program is free software; you can redistribute it and/or modify  *
 *   it under the terms of the GNU General Public License as published by  *
 *   the Free Software Foundation; either version 2 of the License, or     *
 *   (at your option) any later version.                                   *
 *                                                                         *
 ***************************************************************************/
#include "loremipsum.h"

#include <QDir>
#include <QDomDocument>
#include <QEvent>
#include <QFile>
#include <QGridLayout>
#include <QHBoxLayout>
#include <QHeaderView>
#include <QLabel>
#include <QPushButton>
#include <QSpacerItem>
#include <QSpinBox>
#include <QCheckBox>
#include <QString>
#include <QStringList>
#include <QTreeWidget>
#include <QTreeWidgetItem>
#include <QVBoxLayout>


#include "langmgr.h"
#include "pageitem.h"
#include "pageitem_table.h"
#include "pageitem_textframe.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "scpaths.h"
#include "selection.h"
#include "prefsmanager.h"
#include "commonstrings.h"
#include "hyphenator.h"
#include "util_icon.h"
#include "undomanager.h"

QString getLoremLocation(QString fname)
{
	return QDir::toNativeSeparators(ScPaths::instance().shareDir() + "/loremipsum/" + fname);
}

LoremParser::LoremParser(QString fname)
{
	name = author = url = "n/a";
	correct = false;
	QDomDocument doc("loremdoc");
	QFile file(getLoremLocation(fname));
	if (!file.open(QIODevice::ReadOnly))
		return;
	if (!doc.setContent(&file))
	{
		file.close();
		return;
	}
	file.close();

	QDomElement docElement = doc.documentElement();

	QDomNode node = docElement.firstChild();
	while(!node.isNull())
	{
		QDomElement element = node.toElement();
		if(!element.isNull())
		{
			if (element.tagName() == "name")
				name = element.text();
			if (element.tagName() == "author")
				author = element.text();
			if (element.tagName() == "url")
				url = element.text();
			if (element.tagName() == "p")
			{
				QString txt = element.text().simplified();
				txt.replace(SpecialChars::OLD_NBSPACE, SpecialChars::NBSPACE);
				txt.replace(SpecialChars::OLD_NBHYPHEN, SpecialChars::NBHYPHEN);
				loremIpsum.append(txt);
			}
		}
		node = node.nextSibling();
	}
	if (name != "n/a")
		correct = true;
}

QString LoremParser::createLorem(uint parCount, bool random)
{
	if (parCount < 1)
		return QString::null;
	// first paragraph is always the same
	QString lorem = "";
	if (!loremIpsum.isEmpty())
		lorem = loremIpsum[0];
	if (parCount > 1)
	{
		if (!loremIpsum.isEmpty())
		{
			if (random)
			{
				for (uint i = 1; i < parCount; ++i)
					lorem += SpecialChars::PARSEP + loremIpsum[rand()%loremIpsum.count()];
			}
			else
			{
				int maxParagraph = loremIpsum.count()-1;
				int currentParagraph = 1;
				if (maxParagraph != 0)
				{
					for (uint i = 1; i < parCount; ++i)
					{
						lorem += SpecialChars::PARSEP + loremIpsum[currentParagraph];
						currentParagraph++;
						if (currentParagraph > maxParagraph)
							currentParagraph = 0;
					}
				}
			}
		}
	}
	return lorem.trimmed();
}


LoremManager::LoremManager(ScribusDoc* doc, QWidget* parent) : QDialog( parent )
{
	undoManager = UndoManager::instance();
	m_Doc=doc;
	setModal(true);
	setWindowTitle( tr( "Lorem Ipsum" ) );
	setWindowIcon(QIcon(loadIcon ( "AppIcon.png" )));
	LoremManagerLayout = new QGridLayout(this) ;
	LoremManagerLayout->setMargin(10);
	LoremManagerLayout->setSpacing(5);

	layout3 = new QVBoxLayout;
	layout3->setMargin(0);
	layout3->setSpacing(5);

	loremList = new QTreeWidget( this );
	loremList->setRootIsDecorated(true);
	loremList->setColumnCount(1);
	loremList->setHeaderLabel( tr("Select Lorem Ipsum"));
	loremList->header()->setSectionsClickable( false );
	loremList->header()->setSectionResizeMode( QHeaderView::ResizeToContents );
	loremList->setSelectionMode(QAbstractItemView::SingleSelection);
	layout3->addWidget( loremList );

	layout2 = new QHBoxLayout;
	layout2->setMargin(0);
	layout2->setSpacing(5);

	paraLabel = new QLabel( this );
	layout2->addWidget( paraLabel );

	paraBox = new QSpinBox( this );
	paraBox->setMinimum( 1 );
	paraBox->setValue(PrefsManager::instance()->appPrefs.miscPrefs.paragraphsLI);
	layout2->addWidget( paraBox );
	randomCheckBox = new QCheckBox(this);
	randomCheckBox->setChecked(true);
	layout2->addWidget( randomCheckBox );
	paraSpacer = new QSpacerItem( 2, 2, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout2->addItem( paraSpacer );
	layout3->addLayout( layout2 );

	layout1 = new QHBoxLayout;
	layout1->setMargin(0);
	layout1->setSpacing(5);
	buttonSpacer = new QSpacerItem( 2, 2, QSizePolicy::Expanding, QSizePolicy::Minimum );
	layout1->addItem( buttonSpacer );

	okButton = new QPushButton( this );
	layout1->addWidget( okButton );

	cancelButton = new QPushButton( this );
	layout1->addWidget( cancelButton );
	layout3->addLayout( layout1 );

	LoremManagerLayout->addLayout( layout3, 0, 0 );
	languageChange();

	// reading lorems
	QDir d(getLoremLocation(QString::null), "*.xml");

	QFileInfoList list = d.entryInfoList();
	QListIterator<QFileInfo> it(list);
	QFileInfo fi;
	LanguageManager * langmgr( LanguageManager::instance() );
// 	langmgr->init(false);

	while (it.hasNext())
	{
		fi = it.next();
		if (langmgr->getLangFromAbbrev(fi.baseName(), false).isEmpty())
			continue;
		LoremParser *parser = new LoremParser(fi.fileName());
		if (!parser->correct)
		{
			delete parser;
			continue;
		}
		availableLorems[parser->name] = fi.fileName();
		QTreeWidgetItem *item = new QTreeWidgetItem(loremList);
		if (parser->name=="la")
			item->setText(0, standardloremtext);
		else
			item->setText(0, langmgr->getLangFromAbbrev(parser->name, true));
		QTreeWidgetItem *subItem;
		subItem = new QTreeWidgetItem(item);
		subItem->setText(0, tr("Author:") + " " + parser->author);
		subItem = new QTreeWidgetItem(item);
		subItem->setText(0, tr("Get More:") + " " + parser->url);
		subItem = new QTreeWidgetItem(item);
		subItem->setText(0, tr("XML File:") + " " + fi.fileName());
		delete parser;
	}
	loremList->sortItems(0, Qt::AscendingOrder);
	loremList->setSortingEnabled(false);
	resize( QSize(320, 340).expandedTo(minimumSizeHint()) );
	QList<QTreeWidgetItem *> defItem;
	defItem.clear();
	defItem = loremList->findItems(langmgr->getLangFromAbbrev(m_Doc->hyphLanguage(), true), Qt::MatchExactly);
	if (defItem.count() == 0)
		defItem = loremList->findItems(standardloremtext, Qt::MatchExactly);
	if (defItem.count() != 0)
	{
		loremList->setCurrentItem(defItem[0]);
		defItem[0]->setSelected(true);
	}
	// signals and slots connections
	connect( okButton, SIGNAL( clicked() ), this, SLOT( accept() ) );
	connect( cancelButton, SIGNAL( clicked() ), this, SLOT( reject() ) );
	connect( loremList, SIGNAL(itemDoubleClicked(QTreeWidgetItem *, int)), this, SLOT(accept()));
	
}

void LoremManager::changeEvent(QEvent *e)
{
	if (e->type() == QEvent::LanguageChange)
	{
		languageChange();
	}
	else
		QWidget::changeEvent(e);
}

void LoremManager::languageChange()
{
	setWindowTitle( tr( "Lorem Ipsum" ) );
	paraLabel->setText( tr( "Paragraphs:" ) );
	randomCheckBox->setText( tr("Random Paragraphs"));
	okButton->setText( CommonStrings::tr_OK );
	okButton->setShortcut( QKeySequence( tr( "Alt+O" ) ) );
	cancelButton->setText( CommonStrings::tr_Cancel );
	cancelButton->setShortcut( QKeySequence( tr( "Alt+C" ) ) );
	standardloremtext = tr("Standard Lorem Ipsum");
	paraBox->setToolTip( tr( "Number of paragraphs of selected sample text to insert" ) );
	loremList->setToolTip( tr( "List of languages available to insert sample text in" ) );
}

void LoremManager::insertLoremIpsum(QString name, int paraCount, bool random)
{
	//CB: Avox please make insertText for text frame to nuke all this
	// is it really applied?
// 	bool done = false;

	for (int i = 0; i < m_Doc->m_Selection->count(); ++i)
	{
		PageItem* currItem = m_Doc->m_Selection->itemAt(i);
		if (currItem == NULL)
			continue;
		//do not insert lorem ipsum text into notes frames
		if (currItem->isNoteFrame())
			continue;
		//removing marks and notes from current text
//		if (currItem->isTextFrame() && !currItem->asTextFrame()->removeMarksFromText(!m_Doc->hasGUI()))
//			continue;
		PageItem *i2 = currItem;
		if (m_Doc->appMode == modeEditTable)
			i2 = currItem->asTable()->activeCell().textFrame();
		if (!i2->asTextFrame())
			continue;
		UndoTransaction* activeTransaction = NULL;
		if (i2->itemText.length() != 0)
		{
			if (UndoManager::undoEnabled())
				activeTransaction = new UndoTransaction(undoManager->beginTransaction(Um::Selection, Um::IGroup, Um::AddLoremIpsum, "", Um::ICreate));
			i2->itemText.selectAll();
			i2->asTextFrame()->deleteSelectedTextFromFrame();
			//We don't need to open a dialog box as the user can undo this action.
			//Selection tempSelection(this, false);
			//tempSelection.addItem(i2, true);
			//m_Doc->itemSelection_ClearItem(&tempSelection);
			/* ClearItem() doesn't return true or false so
			the following test has to be done */
			if (i2->itemText.length() != 0)
				continue;
		}
		LoremParser *lp = new LoremParser(name);
		if (lp == NULL)
		{
			qDebug("LoremManager::okButton_clicked() *lp == NULL");
			return;
		}

#if 0		
// 		Set up the gtWriter instance with the selected paragraph style
		gtWriter* writer = new gtWriter(false, currItem);
		if (writer != NULL)
		{
				writer->setUpdateParagraphStyles(false);
				writer->setOverridePStyleFont(false);
				gtFrameStyle* fstyle = writer->getDefaultStyle();
				gtParagraphStyle* pstyle = new gtParagraphStyle(*fstyle);
				pstyle->setName(i2->currentStyle().name());
				writer->setParagraphStyle(pstyle);
				done = true;
				writer->append(lp->createLorem(paraCount));
		}
		delete writer;		
#endif
		
		// K.I.S.S.:
		QString sampleText = lp->createLorem(paraCount, random);
		if (UndoManager::undoEnabled())
		{
			SimpleState *ss = new SimpleState(Um::AddLoremIpsum,"",Um::ICreate);
			ss->set("LOREM_FRAMETEXT", "lorem_frametext");
			ss->set("TEXT_STR",sampleText);
			undoManager->action(i2, ss);
		}
		if (activeTransaction)
		{
			activeTransaction->commit();
			delete activeTransaction;
			activeTransaction = NULL;
		}
		i2->itemText.insertChars(0, sampleText);
		delete lp;
		if (m_Doc->docHyphenator->AutoCheck)
			m_Doc->docHyphenator->slotHyphenate(i2);
		i2->asTextFrame()->invalidateLayout(true);
	}
	m_Doc->regionsChanged()->update(QRectF());
	m_Doc->changed();
}

QString LoremManager::loremIpsum()
{
	LoremParser lp(getName());
	return lp.createLorem(paraBox->value(), randomCheckBox->isChecked());
}

int LoremManager::paragraphCount()
{
	return paraBox->value();
}

bool LoremManager::randomize()
{
	return randomCheckBox->isChecked();
}

QString LoremManager::getName()
{
	QTreeWidgetItem *li;
	if (loremList->currentItem()->parent() == 0)
		li = loremList->currentItem();
	else
		li = loremList->currentItem()->parent();

	QString name;
	if (li->text(0)==standardloremtext)
		name="la";
	else
		name=LanguageManager::instance()->getAbbrevFromLang(li->text(0), true, false);

	return availableLorems[name];
}
