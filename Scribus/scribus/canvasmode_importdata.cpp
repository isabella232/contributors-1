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

#include "canvasmode_importdata.h"

#include <QApplication>
#include <QBuffer>
#include <QCursor>
#include <QDrag>
#include <QEvent>
#include <QMessageBox>
#include <QMouseEvent>
#include <QPainterPath>
#include <QPixmap>
#include <QPoint>
#include <QRect>
#include <QToolTip>
#include <QUrl>
#include <QDebug>

#include "canvas.h"
#include "canvasmode.h"
#include "ui/bookmarkpalette.h"
#include "fileloader.h"
#include "plugins/formatidlist.h"
#include "hyphenator.h"
#include "loadsaveplugin.h"
#include "pageitem_textframe.h"
#include "prefsmanager.h"
#include "ui/propertiespalette.h"
#include "ui/propertiespalette_image.h"
#include "scribus.h"
#include "scribusdoc.h"
#include "scribusview.h"
#include "selection.h"
#include "ui/stylemanager.h"
#include "util_formats.h"
#include "util_icon.h"

CanvasMode_ImportData::CanvasMode_ImportData(ScribusView *view) : CanvasMode(view), m_ScMW(view->m_ScMW)
{
	pw = new FDialogPreview(m_ScMW,Qt::ToolTip);
	trans = NULL;
}

void CanvasMode_ImportData::setInformation(ImportSetup is)
{
	impsetup = is;
	if(!m_doc->m_Selection->isEmpty() && is.filename.size()==1)
	{
		if(m_doc->m_Selection->itemAt(0)->isTextFrame())
		{
			setText(m_doc->m_Selection->itemAt(0)->asTextFrame());
			m_view->requestMode(submodePaintingDone);
		}
		else if(m_doc->m_Selection->itemAt(0)->isImageFrame())
		{
			setImage(m_doc->m_Selection->itemAt(0)->asImageFrame());
			m_view->requestMode(submodePaintingDone);
		}
		else
			pw->GenPreview(is.filename.first());
	}
	else
		pw->GenPreview(is.filename.first());
}

void CanvasMode_ImportData::drawControls(QPainter* p)
{
	commonDrawControls(p, false);
}

void CanvasMode_ImportData::enterEvent(QEvent *)
{
	if (!m_canvas->m_viewMode.m_MouseButtonPressed)
		setModeCursor();
}

void CanvasMode_ImportData::keyPressEvent(QKeyEvent *e)
{
	int kk = e->key();
	if (m_keyRepeat)
		return;
	m_keyRepeat = true;
	e->accept();
	switch (kk)
	{
		case Qt::Key_Tab:
			impsetup.filename.prepend(impsetup.filename.takeLast());
			break;
		case Qt::Key_Backtab:
			impsetup.filename.append(impsetup.filename.takeFirst());
			break;
		case Qt::Key_Backspace:
			impsetup.filename.removeFirst();
			break;
		case Qt::Key_Escape:
			impsetup.filename.clear();
			break;
	}
	updateList();
	m_keyRepeat = false;
}


void CanvasMode_ImportData::leaveEvent(QEvent *e)
{
	if (!m_canvas->m_viewMode.m_MouseButtonPressed)
		qApp->changeOverrideCursor(QCursor(Qt::ArrowCursor));
}

void CanvasMode_ImportData::activate(bool fromGesture)
{
	pw->setVisible(true);
	m_canvas->m_viewMode.m_MouseButtonPressed = false;
	m_canvas->resetRenderMode();
	m_keyRepeat = false;
	m_doc->DragP = false;
	m_doc->leaveDrag = false;
	m_canvas->m_viewMode.operItemMoving = false;
	m_canvas->m_viewMode.operItemResizing = false;
	m_view->MidButt = false;
	setModeCursor();
	if (fromGesture)
		m_view->update();
}

void CanvasMode_ImportData::deactivate(bool forGesture)
{
	pw->hide();
	m_view->redrawMarker->hide();
}

void CanvasMode_ImportData::mouseDoubleClickEvent(QMouseEvent *m)
{
	m->accept();
	m_canvas->m_viewMode.m_MouseButtonPressed = false;
	m_canvas->resetRenderMode();
}

void CanvasMode_ImportData::mouseMoveEvent(QMouseEvent *m)
{
	pw->move(m->globalPos() + QPoint(10,10));
	m->accept();
	if (commonMouseMove(m))
		return;
}

void CanvasMode_ImportData::mousePressEvent(QMouseEvent *m)
{
	m_canvas->PaintSizeRect(QRect());
	m_canvas->m_viewMode.m_MouseButtonPressed = true;
	m_canvas->m_viewMode.operItemMoving = false;
	m_view->HaveSelRect = false;
	m_doc->DragP = false;
	m_doc->leaveDrag = false;
	m->accept();
	m_view->registerMousePress(m->globalPos());
	PageItem *item;
	if(impsetup.filename.size()>0)
	{
		if(UndoManager::undoEnabled())
		{
			trans = new UndoTransaction(undoManager->beginTransaction(Um::NoObjectFrame, Um::IImageFrame, Um::ImportFile,"",Um::ICreate));
			SimpleState *ss = new SimpleState(Um::ImportFile,"",Um::ICreate);
			ss->set("FILE_LOADER","file_loader");
			ss->set("name",impsetup.filename.first());
			undoManager->action(m_ScMW,ss);
		}
		if(FormatsManager::instance()->isVectorFile(impsetup.filename.at(0)))
		{
			QFileInfo fi(impsetup.filename.at(0));
			QString suffix = fi.suffix().toLower();
			if ((suffix == "sce") || (suffix == "shape"))
			{
				QList<QUrl> urls;
				QMimeData* md = new QMimeData();
				urls.append( QUrl::fromLocalFile(impsetup.filename.takeFirst()) );
				md->setUrls(urls);
				QDrag* dr = new QDrag(m_ScMW);
				dr->setMimeData(md);
				dr->setPixmap(loadIcon("DragPix.xpm"));
				dr->exec();
			}
			else
			{
				FileLoader *fileLoader = new FileLoader(impsetup.filename.at(0));
				int testResult = fileLoader->testFile();
				delete fileLoader;
				if ((testResult != -1) && (testResult >= FORMATID_FIRSTUSER))
				{
					const FileFormat * fmt = LoadSavePlugin::getFormatById(testResult);
					if( fmt )
					{
						m_doc->dontResize = true;
						fmt->loadFile(impsetup.filename.takeFirst(), LoadSavePlugin::lfUseCurrentPage|LoadSavePlugin::lfInteractive);
						m_doc->dontResize = false;
					}
				}
			}
		}
		else if(getImageType(impsetup.filename.at(0)) == QString(""))
		{
			if((item = m_canvas->itemUnderCursor(m->globalPos())) != NULL)
			{
				if((item->asTextFrame()) != NULL)
					setText(item->asTextFrame());
				else
					view()->TextAfterDraw = true;
			}
			else
				view()->TextAfterDraw = true;
		}
		else if((item = m_canvas->itemUnderCursor(m->globalPos())) != NULL)
		{
			if((item->asImageFrame()) != NULL)
				setImage(item->asImageFrame());
			else
				view()->ImageAfterDraw = true;
		}
		else
			view()->ImageAfterDraw = true;
	}
	if (m->button() == Qt::MidButton)
	{
		m_view->MidButt = true;
		if (m->modifiers() & Qt::ControlModifier)
			m_view->DrawNew();
		return;
	}
}

void CanvasMode_ImportData::mouseReleaseEvent(QMouseEvent *m)
{
	m_canvas->m_viewMode.m_MouseButtonPressed = false;
	m_canvas->resetRenderMode();
	m->accept();
	m_view->updateContents();
	m_canvas->setRenderModeUseBuffer(false);
	m_doc->DragP = false;
	m_doc->leaveDrag = false;
	m_canvas->m_viewMode.operItemMoving = false;
	m_canvas->m_viewMode.operItemResizing = false;
	m_view->MidButt = false;
	updateList();
}

void CanvasMode_ImportData::setImage(PageItem *currItem)
{
	QString fileName = impsetup.filename.takeFirst();
	currItem->EmProfile = "";
	currItem->pixm.imgInfo.isRequest = false;
	currItem->UseEmbedded = true;
	currItem->IProfile = m_doc->cmsSettings().DefaultImageRGBProfile;
	currItem->IRender = m_doc->cmsSettings().DefaultIntentImages;
	qApp->processEvents(QEventLoop::ExcludeUserInputEvents);
	m_doc->loadPict(fileName, currItem, false, true);
    // if preference is image simze value
	if(!(1 & m_doc->prefsData().itemToolPrefs.imageDefaultSize))
	{
		currItem->setWidthHeight(currItem->pixm.width(),currItem->pixm.height());
		currItem->updateClip();
	}
	m_ScMW->propertiesPalette->imagePal->displayScaleAndOffset(currItem->imageXScale(), currItem->imageYScale(), currItem->imageXOffset(), currItem->imageYOffset());
	m_ScMW->repaint();
	qApp->processEvents(QEventLoop::ExcludeUserInputEvents);
	m_view->DrawNew();
	currItem->emitAllToGUI();
}

void CanvasMode_ImportData::updateList()
{
	if(trans)
	{
		trans->commit();
		delete trans;
		trans = NULL;
	}
	if(impsetup.filename.isEmpty())
	{
		pw->hide();
		m_view->requestMode(submodePaintingDone);
	}
	else
		pw->GenPreview(impsetup.filename.first());
}


void CanvasMode_ImportData::setText(PageItem_TextFrame *currItem)
{
	QString fileName = impsetup.filename.takeFirst();
	gtGetText* gt = new gtGetText(m_doc);
	if (currItem->itemText.length() != 0)
	{
		int t = QMessageBox::warning(m_doc->scMW(), CommonStrings::trWarning, tr("Do you really want to clear all your text?"), QMessageBox::Yes | QMessageBox::No, QMessageBox::No);
		if (t == QMessageBox::No)
			return;
	}
	gt->launchImporter(-1, fileName, impsetup.textOnly, impsetup.encoding, false,currItem);
	if (m_doc->docHyphenator->AutoCheck)
		m_doc->docHyphenator->slotHyphenate(currItem);
	for (int a = 0; a < m_doc->Items->count(); ++a)
	{
		if (m_doc->Items->at(a)->isBookmark)
			m_doc->scMW()->bookmarkPalette->BView->ChangeText(m_doc->Items->at(a));
	}
	m_view->DrawNew();
	m_doc->changed();
	m_doc->scMW()->styleMgr()->setDoc(m_doc);
	delete gt;
}

void CanvasMode_ImportData::insertImage(int i,QString fileName)
{
	impsetup.filename.insert(i, fileName);
	if(i==0)
	{
		pw->GenPreview(fileName);
	}
}

void CanvasMode_ImportData::deleteImage(QString fileName)
{
	impsetup.filename.removeAt(impsetup.filename.indexOf(fileName));
}
