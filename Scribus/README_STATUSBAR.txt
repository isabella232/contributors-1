Goal
===

Merge the two statusbars into one single statusbar

Introduction
===

Scribus has two statusbar:
- one related to the state of the application
- the other to the state of the current document

while this separation may theoretically seem to be interesting, in practice the nuisance of having less vertical space is often felt as a bigger issue.

Also, most people only need few of the information in the status bar and only at specific times. we should take care that it's as small as possible and move the least used widgets to palettes which can be shown on demand (as an example an info palette with the mouse coordinates and help information on the current tool; we should take care that this palette can be displayed with an horizontal layout, and docked on top of the status bar).

Claudia has made a mockup which can be seen on the ui-iv-iu server, in the "Statusbar" project.
A few important changes:
- the status messages are shown on top of the progress bar
- the progress bar is only shown when somethign is progressing
- the preview otions are defined as a dropdown icon (like the CMS options)

Where is the code
===

The status bar is defined in ScribusMainWindow::initStatusBar() in scribus.cpp

The old document "status" toolbar is defined in ScribusView::ScribusView() in scribusview.cpp

Tasks
===

- copy the existing widgets from ScribusView to ScribusMainWindow
- create the missing widgets (progress bar with overlay)
- If possible, switch to a signal / slot model for updating all content of the status bar (the slots are probably already available! we only have to create the good connections).
- We will need to update the content of the new statusbar content when switching document.
- create an info toolbar
- make a dropdown button out of the preview button

Todo
===

- make the document related status bar buttons inactive when no document is active.
- disconnect the slots when the view (document) loses focus.
- implement the relevant parts of ScribusView::languageChange() in ScribusMainWindow::languageChange()... or similar... (and remove them from ScribusView; there are no tooltips in the status bar yet.)
- don't allow .00 in the display of the zoom percent (does this precision make sense?)

What did I do?
===

- Copied the widgets definitions from ScribusView::ScribusView() to ScribusMainWindow::initStatusBar()
- Created ScribusMainWindow::updateStatusBar()
- Addded the signal/slots connection from ScribusView::ScribusView() to ScribusMainWindow::updateStatusBar()
- Added the signal/slots disconnection to ScribusMainWindow::???()
- ScribusView::setZoom(), called by the zoomSpinBox signal, gets its value directly from the zoomSpinBox widget, instead of taking the value from the valueChanged signal: iv'e created a ScribusView::setZoom(double) to avoid this too close relationship.
- a new ScribusMainWindow::setStatusBarZoom(double) method lets scribusview set the zoom level in the status bar

Further work
===

Further ideas
===

- remove the image preview quality from the status bar (is there anybody really using it? Any use cases for having it in the status bar?)
