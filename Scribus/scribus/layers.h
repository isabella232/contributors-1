#ifndef LAYERPALETTE_H
#define LAYERPALETTE_H

#include <qtable.h>
#include <qptrlist.h>
#include <qvaluelist.h>

#include "scrpalettebase.h"
#include "undoobject.h"

class QPushButton;
class QLayout;
class QToolTip;
class QPixmap;
class QCheckBox;
class QHeader;
class UndoManager;
class UndoState;

class LayerTable : public QTable
{
	Q_OBJECT

public:
	LayerTable(QWidget* parent);
	~LayerTable() {};
	//void keyPressEvent(QKeyEvent *k);

protected:
	virtual void endEdit ( int row, int col, bool accept, bool replace );

signals:
	//void ToggleAllPalettes();
	//void Schliessen();
	void updtName(int);
};

class LayerPalette : public ScrPaletteBase, public UndoObject
{
	Q_OBJECT

public:
	LayerPalette(QWidget* parent);
	~LayerPalette() {};

	QTable* Table;
	QHeader* Header;
	QPushButton* NewLayer;
	QPushButton* DeleteLayer;
	QPushButton* RaiseLayer;
	QPushButton* LowerLayer;
	QValueList<Layer> *layers;
	//void closeEvent(QCloseEvent *ce);
	void setLayers(QValueList<Layer> *layin, int *act);
	void rebuildList();
	QPtrList<QCheckBox> FlagsPrint;
	QPtrList<QCheckBox> FlagsSicht;
	int *Activ;

public slots:
	void updateName(int r);
	void addLayer();
	void removeLayer();
	void removeLayer(bool deleteItems);
	void upLayer();
	void downLayer();
	void changeName(int row, int col);
	void changeName(int row, int col, const QString &name);
	void visibleLayer();
	void printLayer();
	void printLayer(int layerNr, bool isPrintable);
	void setActiveLayer(int row);
	void ClearInhalt();
	void MarkActiveLayer(int l);
	void restore(UndoState *state, bool isUndo);

signals:
	void LayerRemoved(int, bool);
	void LayerChanged();
	void LayerActivated(int);
	//void Schliessen();

protected:
	QVBoxLayout* LayerPaletteLayout;
	QHBoxLayout* Layout1;
	UndoManager *undoManager;

protected slots:
	//virtual void reject();
};

#endif // LAYERPALETTE_H
