<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS><TS version="1.1">
<context>
    <name></name>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.h" line="21"/>
        <source>getColorNames() -&gt; list

Returns a list containing the names of all defined colors in the document.
If no document is open, returns a list of the default document colors.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddialog.h" line="22"/>
        <source>newDocDialog() -&gt; bool

Displays the &quot;New Document&quot; dialog box. Creates a new document if the user
accepts the settings. Does not create a document if the user presses cancel.
Returns true if a new document was created.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="55"/>
        <source>newDocument(size, margins, orientation, firstPageNumber,
                        unit, pagesType, firstPageOrder, numPages) -&gt; bool

Creates a new document and returns true if successful. The parameters have the
following meaning:

size = A tuple (width, height) describing the size of the document. You can
use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

margins = A tuple (left, right, top, bottom) describing the document
margins

orientation = the page orientation - constants PORTRAIT, LANDSCAPE

firstPageNumer = is the number of the first page in the document used for
pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
numbers if you&apos;re creating a document in several parts.

unit: this value sets the measurement units used by the document. Use a
predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
UNIT_PICAS, UNIT_POINTS.

pagesType = One of the predefined constants PAGE_n. PAGE_1 is single page,
PAGE_2 is for double sided documents, PAGE_3 is for 3 pages fold and
PAGE_4 is 4-fold.

firstPageOrder = What is position of first page in the document.
Indexed from 0 (0 = first).

numPage = Number of pages to be created.

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDocument(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 7, UNIT_POINTS,
PAGE_4, 3, 1)

May raise ScribusError if is firstPageOrder bigger than allowed by pagesType.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="21"/>
        <source>getFillColor([&quot;name&quot;]) -&gt; string

Returns the name of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="23"/>
        <source>moveObject(dx, dy [, &quot;name&quot;])

Moves the object &quot;name&quot; by dx and dy relative to its current position. The
distances are expressed in the current measurement unit of the document (see
UNIT constants). If &quot;name&quot; is not given the currently selected item is used.
If the object &quot;name&quot; belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="24"/>
        <source>setRedraw(bool)

Disables page redraw when bool = False, otherwise redrawing is enabled.
This change will persist even after the script exits, so make sure to call
setRedraw(True) in a finally: clause at the top level of your script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="26"/>
        <source>createRect(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new rectangle on the current page and returns its name. The
coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name to reference that object in future. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="26"/>
        <source>newPage(where [,&quot;masterpage&quot;])

Creates a new page. If &quot;where&quot; is -1 the new Page is appended to the
document, otherwise the new page is inserted before &quot;where&quot;. Page numbers are
counted from 1 upwards, no matter what the displayed first page number of your
document is. The optional parameter &quot;masterpage&quot; specifies the name of the
master page for the new page.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="22"/>
        <source>setGradientFill(type, &quot;color1&quot;, shade1, &quot;color2&quot;, shade2, [&quot;name&quot;])

Sets the gradient fill of the object &quot;name&quot; to type. Color descriptions are
the same as for setFillColor() and setFillShade(). See the constants for
available types (FILL_&lt;type&gt;).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="23"/>
        <source>getFontSize([&quot;name&quot;]) -&gt; float

Returns the font size in points for the text frame &quot;name&quot;. If this text
frame has some text selected the value assigned to the first character of
the selection is returned.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/guiapp.h" line="21"/>
        <source>messagebarText(&quot;string&quot;)

Writes the &quot;string&quot; into the Scribus message bar (status line). The text
must be UTF8 encoded or &apos;unicode&apos; string(recommended).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/svgimport.h" line="21"/>
        <source>placeSVG(&quot;filename&quot;, x, y)

Places the SVG &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the SVG placed on the page

If loading was successful, the selection contains the imported SVG
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>@default</name>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.h" line="35"/>
        <source>getColor(&quot;name&quot;) -&gt; tuple

Returns a tuple (C, M, Y, K) containing the four color components of the
color &quot;name&quot; from the current document. If no document is open, returns
the value of the named color from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.h" line="50"/>
        <source>getColorAsRGB(&quot;name&quot;) -&gt; tuple

Returns a tuple (R,G,B) containing the three color components of the
color &quot;name&quot; from the current document, converted to the RGB color
space. If no document is open, returns the value of the named color
from the default document colors.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.h" line="64"/>
        <source>changeColor(&quot;name&quot;, c, m, y, k)

Changes the color &quot;name&quot; to the specified CMYK value. The color value is
defined via four components c = Cyan, m = Magenta, y = Yellow and k = Black.
Color components should be in the range from 0 to 255.

May raise NotFoundError if the named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.h" line="94"/>
        <source>deleteColor(&quot;name&quot;, &quot;replace&quot;)

Deletes the color &quot;name&quot;. Every occurence of that color is replaced by the
color &quot;replace&quot;. If not specified, &quot;replace&quot; defaults to the color
&quot;None&quot; - transparent.

deleteColor works on the default document colors if there is no document open.
In that case, &quot;replace&quot;, if specified, has no effect.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.h" line="106"/>
        <source>replaceColor(&quot;name&quot;, &quot;replace&quot;)

Every occurence of the color &quot;name&quot; is replaced by the color &quot;replace&quot;.

May raise NotFoundError if a named color wasn&apos;t found.
May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddialog.h" line="88"/>
        <source>messageBox(&quot;caption&quot;, &quot;message&quot;,
    icon=ICON_NONE, button1=BUTTON_OK|BUTTONOPT_DEFAULT,
    button2=BUTTON_NONE, button3=BUTTON_NONE) -&gt; integer

Displays a message box with the title &quot;caption&quot;, the message &quot;message&quot;, and
an icon &quot;icon&quot; and up to 3 buttons. By default no icon is used and a single
button, OK, is displayed. Only the caption and message arguments are required,
though setting an icon and appropriate button(s) is strongly
recommended. The message text may contain simple HTML-like markup.

Returns the number of the button the user pressed. Button numbers start
at 1.

For the icon and the button parameters there are predefined constants available
with the same names as in the Qt Documentation. These are the BUTTON_* and
ICON_* constants defined in the module. There are also two extra constants that
can be binary-ORed with button constants:
    BUTTONOPT_DEFAULT   Pressing enter presses this button.
    BUTTONOPT_ESCAPE    Pressing escape presses this button.

Usage examples:
result = messageBox(&apos;Script failed&apos;,
                    &apos;This script only works when you have a text frame selected.&apos;,
                    ICON_ERROR)
result = messageBox(&apos;Monkeys!&apos;, &apos;Something went ook! &lt;i&gt;Was it a monkey?&lt;/i&gt;&apos;,
                    ICON_WARNING, BUTTON_YES|BUTTONOPT_DEFAULT,
                    BUTTON_NO, BUTTON_IGNORE|BUTTONOPT_ESCAPE)

Defined button and icon constants:
BUTTON_NONE, BUTTON_ABORT, BUTTON_CANCEL, BUTTON_IGNORE, BUTTON_NO,
BUTTON_NOALL, BUTTON_OK, BUTTON_RETRY, BUTTON_YES, BUTTON_YESALL,
ICON_NONE, ICON_INFORMATION, ICON_WARNING, ICON_CRITICAL.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddialog.h" line="101"/>
        <source>valueDialog(caption, message [,defaultvalue]) -&gt; string

Shows the common &apos;Ask for string&apos; dialog and returns its value as a string
Parameters: window title, text in the window and optional &apos;default&apos; value.

Example: valueDialog(&apos;title&apos;, &apos;text in the window&apos;, &apos;optional&apos;)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddialog.h" line="111"/>
        <source>newStyleDialog() -&gt; string

Shows &apos;Create new paragraph style&apos; dialog. Function returns real
style name or None when user cancels the dialog.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="96"/>
        <source>newDoc(size, margins, orientation, firstPageNumber,
                   unit, facingPages, firstSideLeft) -&gt; bool

WARNING: Obsolete procedure! Use newDocument instead.

Creates a new document and returns true if successful. The parameters have the
following meaning:

    size = A tuple (width, height) describing the size of the document. You can
    use predefined constants named PAPER_&lt;paper_type&gt; e.g. PAPER_A4 etc.

    margins = A tuple (left, right, top, bottom) describing the document
    margins

    orientation = the page orientation - constants PORTRAIT, LANDSCAPE

    firstPageNumer = is the number of the first page in the document used for
    pagenumbering. While you&apos;ll usually want 1, it&apos;s useful to have higher
    numbers if you&apos;re creating a document in several parts.

    unit: this value sets the measurement units used by the document. Use a
    predefined constant for this, one of: UNIT_INCHES, UNIT_MILLIMETERS,
    UNIT_PICAS, UNIT_POINTS.

    facingPages = FACINGPAGES, NOFACINGPAGES

    firstSideLeft = FIRSTPAGELEFT, FIRSTPAGERIGHT

The values for width, height and the margins are expressed in the given unit
for the document. PAPER_* constants are expressed in points. If your document
is not in points, make sure to account for this.

example: newDoc(PAPER_A4, (10, 10, 20, 20), LANDSCAPE, 1, UNIT_POINTS,
                FACINGPAGES, FIRSTPAGERIGHT)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="108"/>
        <source>closeDoc()

Closes the current document without prompting to save.

May throw NoDocOpenError if there is no document to close
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="117"/>
        <source>haveDoc() -&gt; bool

Returns true if there is a document open.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="128"/>
        <source>openDoc(&quot;name&quot;)

Opens the document &quot;name&quot;.

May raise ScribusError if the document could not be opened.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="141"/>
        <source>saveDoc()

Saves the current document with its current name, returns true if successful.
If the document has not already been saved, this may bring up an interactive
save file dialog.

If the save fails, there is currently no way to tell.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="152"/>
        <source>saveDocAs(&quot;name&quot;)

Saves the current document under the new name &quot;name&quot; (which may be a full or
relative path).

May raise ScribusError if the save fails.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="162"/>
        <source>setInfo(&quot;author&quot;, &quot;info&quot;, &quot;description&quot;) -&gt; bool

Sets the document information. &quot;Author&quot;, &quot;Info&quot;, &quot;Description&quot; are
strings.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="185"/>
        <source>setUnit(type)

Changes the measurement unit of the document. Possible values for &quot;unit&quot; are
defined as constants UNIT_&lt;type&gt;.

May raise ValueError if an invalid unit is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="196"/>
        <source>getUnit() -&gt; integer (Scribus unit constant)

Returns the measurement units of the document. The returned value will be one
of the UNIT_* constants:
UNIT_INCHES, UNIT_MILLIMETERS, UNIT_PICAS, UNIT_POINTS.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="206"/>
        <source>loadStylesFromFile(&quot;filename&quot;)

Loads paragraph styles from the Scribus document at &quot;filename&quot; into the
current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="218"/>
        <source>setDocType(facingPages, firstPageLeft)

Sets the document type. To get facing pages set the first parameter to
FACINGPAGES, to switch facingPages off use NOFACINGPAGES instead.  If you want
to be the first page a left side set the second parameter to FIRSTPAGELEFT, for
a right page use FIRSTPAGERIGHT.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="226"/>
        <source>closeMasterPage()

Closes the currently active master page, if any, and returns editing
to normal. Begin editing with editMasterPage().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="233"/>
        <source>masterPageNames()

Returns a list of the names of all master pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="241"/>
        <source>editMasterPage(pageName)

Enables master page editing and opens the named master page
for editing. Finish editing with closeMasterPage().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="249"/>
        <source>createMasterPage(pageName)

Creates a new master page named pageName and opens it for
editing.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="256"/>
        <source>deleteMasterPage(pageName)

Delete the named master page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="31"/>
        <source>getFillTransparency([&quot;name&quot;]) -&gt; float

Returns the fill transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="41"/>
        <source>getFillBlendmode([&quot;name&quot;]) -&gt; integer

Returns the fill blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="51"/>
        <source>getLineColor([&quot;name&quot;]) -&gt; string

Returns the name of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="61"/>
        <source>getLineTransparency([&quot;name&quot;]) -&gt; float

Returns the line transparency of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="71"/>
        <source>getLineBlendmode([&quot;name&quot;]) -&gt; integer

Returns the line blendmode of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="81"/>
        <source>getLineWidth([&quot;name&quot;]) -&gt; integer

Returns the line width of the object &quot;name&quot;. If &quot;name&quot;
is not given the currently selected Item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="91"/>
        <source>getLineShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the line color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="102"/>
        <source>getLineJoin([&quot;name&quot;]) -&gt; integer (see contants)

Returns the line join style of the object &quot;name&quot;. If &quot;name&quot; is not given
the currently selected item is used.  The join types are:
JOIN_BEVEL, JOIN_MITTER, JOIN_ROUND
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="113"/>
        <source>getLineEnd([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line cap style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. The cap types are:
CAP_FLAT, CAP_ROUND, CAP_SQUARE
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="124"/>
        <source>getLineStyle([&quot;name&quot;]) -&gt; integer (see constants)

Returns the line style of the object &quot;name&quot;. If &quot;name&quot; is not given the
currently selected item is used. Line style constants are:
LINE_DASH, LINE_DASHDOT, LINE_DASHDOTDOT, LINE_DOT, LINE_SOLID
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="134"/>
        <source>getFillShade([&quot;name&quot;]) -&gt; integer

Returns the shading value of the fill color of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="155"/>
        <source>getImageScale([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple containing the scaling values of the image frame
&quot;name&quot;.  If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="165"/>
        <source>getImageName([&quot;name&quot;]) -&gt; string

Returns the filename for the image in the image frame. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="189"/>
        <source>getSize([&quot;name&quot;]) -&gt; (width,height)

Returns a (width, height) tuple with the size of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. The size is
expressed in the current measurement unit of the document - see UNIT_&lt;type&gt;
for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="200"/>
        <source>getRotation([&quot;name&quot;]) -&gt; integer

Returns the rotation of the object &quot;name&quot;. The value is expressed in degrees,
and clockwise is positive. If &quot;name&quot; is not given the currently selected item
is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="209"/>
        <source>getAllObjects() -&gt; list

Returns a list containing the names of all objects on the current page.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.h" line="84"/>
        <source>getPropertyCType(object, property, includesuper=True)

Returns the name of the C type of `property&apos; of `object&apos;. See getProperty()
for details of arguments.

If `includesuper&apos; is true, search inherited properties too.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.h" line="102"/>
        <source>getPropertyNames(object, includesuper=True)

Return a list of property names supported by `object&apos;.
If `includesuper&apos; is true, return properties supported
by parent classes as well.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.h" line="136"/>
        <source>getProperty(object, property)

Return the value of the property `property&apos; of the passed `object&apos;.

The `object&apos; argument may be a string, in which case the named PageItem
is searched for. It may also be a PyCObject, which may point to any
C++ QObject instance.

The `property&apos; argument must be a string, and is the name of the property
to look up on `object&apos;.

The return value varies depending on the type of the property.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.h" line="166"/>
        <source>setProperty(object, property, value)

Set `property&apos; of `object&apos; to `value&apos;. If `value&apos; cannot be converted to a type
compatible with the type of `property&apos;, an exception is raised. An exception may
also be raised if the underlying setter fails.

See getProperty() for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.h" line="185"/>
        <source>getChildren(object, ofclass=None, ofname=None, regexpmatch=False, recursive=True)

Return a list of children of `object&apos;, possibly restricted to children
of class named `ofclass&apos; or children named `ofname&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.

See QObject::children() in the Qt docs for more information.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.h" line="202"/>
        <source>getChild(object, childname, ofclass=None, recursive=True)

Return the first child of `object&apos; named `childname&apos;, possibly restricting
the search to children of type name `ofclass&apos;. If `recursive&apos; is true,
search recursively through children, grandchildren, etc.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="35"/>
        <source>moveObjectAbs(x, y [, &quot;name&quot;])

Moves the object &quot;name&quot; to a new location. The coordinates are expressed in
the current measurement unit of the document (see UNIT constants).  If &quot;name&quot;
is not given the currently selected item is used.  If the object &quot;name&quot;
belongs to a group, the whole group is moved.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="48"/>
        <source>rotateObject(rot [, &quot;name&quot;])

Rotates the object &quot;name&quot; by &quot;rot&quot; degrees relatively. The object is
rotated by the vertex that is currently selected as the rotation point - by
default, the top left vertext at zero rotation. Positive values mean counter
clockwise rotation when the default rotation point is used. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="69"/>
        <source>sizeObject(width, height [, &quot;name&quot;])

Resizes the object &quot;name&quot; to the given width and height. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="80"/>
        <source>getSelectedObject([nr]) -&gt; string

Returns the name of the selected object. &quot;nr&quot; if given indicates the number
of the selected object, e.g. 0 means the first selected object, 1 means the
second selected Object and so on.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="89"/>
        <source>selectionCount() -&gt; integer

Returns the number of selected objects.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="98"/>
        <source>selectObject(&quot;name&quot;)

Selects the object with the given &quot;name&quot;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="107"/>
        <source>deselectAll()

Deselects all objects in the whole document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="118"/>
        <source>groupObjects(list)

Groups the objects named in &quot;list&quot; together. &quot;list&quot; must contain the names
of the objects to be grouped. If &quot;list&quot; is not given the currently selected
items are used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="126"/>
        <source>unGroupObjects(&quot;name&quot;)

Destructs the group the object &quot;name&quot; belongs to.If &quot;name&quot; is not given the currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="141"/>
        <source>scaleGroup(factor [,&quot;name&quot;])

Scales the group the object &quot;name&quot; belongs to. Values greater than 1 enlarge
the group, values smaller than 1 make the group smaller e.g a value of 0.5
scales the group to 50 % of its original size, a value of 1.5 scales the group
to 150 % of its original size.  The value for &quot;factor&quot; must be greater than
0. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if an invalid scale factor is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="153"/>
        <source>loadImage(&quot;filename&quot; [, &quot;name&quot;])

Loads the picture &quot;picture&quot; into the image frame &quot;name&quot;. If &quot;name&quot; is
not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="166"/>
        <source>scaleImage(x, y [, &quot;name&quot;])

Sets the scaling factors of the picture in the image frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used. A number of 1
means 100 %.

May raise WrongFrameTypeError if the target frame is not an image frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="177"/>
        <source>lockObject([&quot;name&quot;]) -&gt; bool

Locks the object &quot;name&quot; if it&apos;s unlocked or unlock it if it&apos;s locked.
If &quot;name&quot; is not given the currently selected item is used. Returns true
if locked.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="187"/>
        <source>isLocked([&quot;name&quot;]) -&gt; bool

Returns true if is the object &quot;name&quot; locked.  If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="199"/>
        <source>setScaleImageToFrame(scaletoframe, proportional=None, name=&lt;selection&gt;)

Sets the scale to frame on the selected or specified image frame to `scaletoframe&apos;.
If `proportional&apos; is specified, set fixed aspect ratio scaling to `proportional&apos;.
Both `scaletoframe&apos; and `proportional&apos; are boolean.

May raise WrongFrameTypeError.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="33"/>
        <source>getFontNames() -&gt; list

Returns a list with the names of all available fonts.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="43"/>
        <source>getXFontNames() -&gt; list of tuples

Returns a larger font info. It&apos;s a list of the tuples with:
[ (Scribus name, Family, Real name, subset (1|0), embed PS (1|0), font file), (...), ... ]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="62"/>
        <source>renderFont(&quot;name&quot;, &quot;filename&quot;, &quot;sample&quot;, size, format=&quot;PPM&quot;) -&gt; bool

Creates an image preview of font &quot;name&quot; with given text &quot;sample&quot; and size.
If &quot;filename&quot; is not &quot;&quot;, image is saved into &quot;filename&quot;. Otherwise
image data is returned as a string. The optional &quot;format&quot; argument
specifies the image format to generate, and supports any format allowed
by QPixmap.save(). Common formats are PPM, JPEG, PNG and XPM.

May raise NotFoundError if the specified font can&apos;t be found.
May raise ValueError if an empty sample or filename is passed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="71"/>
        <source>getLayers() -&gt; list

Returns a list with the names of all defined layers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="83"/>
        <source>setActiveLayer(&quot;name&quot;)

Sets the active layer to the layer named &quot;name&quot;.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="92"/>
        <source>getActiveLayer() -&gt; string

Returns the name of the current active layer.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="105"/>
        <source>sentToLayer(&quot;layer&quot; [, &quot;name&quot;])

Sends the object &quot;name&quot; to the layer &quot;layer&quot;. The layer must exist.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="118"/>
        <source>setLayerVisible(&quot;layer&quot;, visible)

Sets the layer &quot;layer&quot; to be visible or not. If is the visible set to false
the layer is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="144"/>
        <source>setLayerLocked(&quot;layer&quot;, locked)

Sets the layer &quot;layer&quot; to be locked or not. If locked is set to
true the layer will be locked.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="222"/>
        <source>isLayerPrintable(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is printable or not, a value of True means
that the layer &quot;layer&quot; can be printed, a value of False means that printing
the layer &quot;layer&quot; is disabled.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="236"/>
        <source>isLayerLocked(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is locked or not, a value of True means
that the layer &quot;layer&quot; is editable, a value of False means that the layer
&quot;layer&quot; is locked.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="250"/>
        <source>isLayerOutlined(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is outlined or not, a value of True means
that the layer &quot;layer&quot; is outlined, a value of False means that the layer
&quot;layer&quot; is normal.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="263"/>
        <source>isLayerFlow(&quot;layer&quot;) -&gt; bool

Returns whether text flows around objects on layer &quot;layer&quot;, a value of True means
that text flows around, a value of False means that the text does not flow around.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="275"/>
        <source>getLayerBlendmode(&quot;layer&quot;) -&gt; int

Returns the &quot;layer&quot; layer blendmode,

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="287"/>
        <source>getLayerTransparency(&quot;layer&quot;) -&gt; float

Returns the &quot;layer&quot; layer transparency,

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="300"/>
        <source>deleteLayer(&quot;layer&quot;)

Deletes the layer with the name &quot;layer&quot;. Nothing happens if the layer doesn&apos;t
exists or if it&apos;s the only layer in the document.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="311"/>
        <source>createLayer(layer)

Creates a new layer with the name &quot;name&quot;.

May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="320"/>
        <source>getGuiLanguage() -&gt; string

Returns a string with the -lang value.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="43"/>
        <source>createEllipse(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new ellipse on the current page and returns its name.
The coordinates are given in the current measurement units of the document
(see UNIT constants). &quot;name&quot; should be a unique identifier for the object
because you need this name for further referencing of that object. If &quot;name&quot;
is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="60"/>
        <source>createImage(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new picture frame on the current page and returns its name. The
coordinates are given in the current measurement units of the document.
&quot;name&quot; should be a unique identifier for the object because you need this
name for further access to that object. If &quot;name&quot; is not given Scribus will
create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="75"/>
        <source>createText(x, y, width, height, [&quot;name&quot;]) -&gt; string

Creates a new text frame on the actual page and returns its name.
The coordinates are given in the actual measurement unit of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further referencing of that object. If &quot;name&quot; is not
given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="90"/>
        <source>createLine(x1, y1, x2, y2, [&quot;name&quot;]) -&gt; string

Creates a new line from the point(x1, y1) to the point(x2, y2) and returns
its name. The coordinates are given in the current measurement unit of the
document (see UNIT constants). &quot;name&quot; should be a unique identifier for the
object because you need this name for further access to that object. If
&quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="108"/>
        <source>createPolyLine(list, [&quot;name&quot;]) -&gt; string

Creates a new polyline and returns its name. The points for the polyline are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
The coordinates are given in the current measurement units of the document (see
UNIT constants). &quot;name&quot; should be a unique identifier for the object because
you need this name for further access to that object. If &quot;name&quot; is not given
Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="128"/>
        <source>createPolygon(list, [&quot;name&quot;]) -&gt; string

Creates a new polygon and returns its name. The points for the polygon are
stored in the list &quot;list&quot; in the following order: [x1, y1, x2, y2...xn. yn].
At least three points are required. There is no need to repeat the first point
to close the polygon. The polygon is automatically closed by connecting the
first and the last point.  The coordinates are given in the current measurement
units of the document (see UNIT constants).  &quot;name&quot; should be a unique
identifier for the object because you need this name for further access to that
object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="149"/>
        <source>createBezierLine(list, [&quot;name&quot;]) -&gt; string

Creates a new bezier curve and returns its name. The points for the bezier
curve are stored in the list &quot;list&quot; in the following order:
[x1, y1, kx1, ky1, x2, y2, kx2, ky2...xn. yn, kxn. kyn]
In the points list, x and y mean the x and y coordinates of the point and kx
and ky meaning the control point for the curve.  The coordinates are given in
the current measurement units of the document (see UNIT constants). &quot;name&quot;
should be a unique identifier for the object because you need this name for
further access to that object. If &quot;name&quot; is not given Scribus will create one
for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise ValueError if an insufficient number of points is passed or if
the number of values passed don&apos;t group into points without leftovers.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="165"/>
        <source>createPathText(x, y, &quot;textbox&quot;, &quot;beziercurve&quot;, [&quot;name&quot;]) -&gt; string

Creates a new pathText by merging the two objects &quot;textbox&quot; and
&quot;beziercurve&quot; and returns its name. The coordinates are given in the current
measurement unit of the document (see UNIT constants). &quot;name&quot; should be a
unique identifier for the object because you need this name for further access
to that object. If &quot;name&quot; is not given Scribus will create one for you.

May raise NameExistsError if you explicitly pass a name that&apos;s already used.
May raise NotFoundError if one or both of the named base object don&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="177"/>
        <source>deleteObject([&quot;name&quot;])

Deletes the item with the name &quot;name&quot;. If &quot;name&quot; is not given the currently
selected item is deleted.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="193"/>
        <source>textFlowMode(&quot;name&quot; [, state])

Enables/disables &quot;Text Flows Around Frame&quot; feature for object &quot;name&quot;.
Called with parameters string name and optional int &quot;state&quot; (0 &lt;= state &lt;= 3).
Setting &quot;state&quot; to 0 will disable text flow.
Setting &quot;state&quot; to 1 will make text flow around object frame.
Setting &quot;state&quot; to 2 will make text flow around bounding box.
Setting &quot;state&quot; to 3 will make text flow around contour line.
If &quot;state&quot; is not passed, text flow is toggled.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="211"/>
        <source>objectExists([&quot;name&quot;]) -&gt; bool

Test if an object with specified name really exists in the document.
The optional parameter is the object name. When no object name is given,
returns True if there is something selected.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="227"/>
        <source>setStyle(&quot;style&quot; [, &quot;name&quot;])

Apply the named &quot;style&quot; to the object named &quot;name&quot;. If is no object name
given, it&apos;s applied on the selected object.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="240"/>
        <source>getAllStyles() -&gt; list

Return a list of the names of all paragraph styles in the current document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.h" line="252"/>
        <source>duplicateObject([&quot;name&quot;]) -&gt; string

creates a Duplicate of the selected Object (or Selection Group).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="36"/>
        <source>currentPage() -&gt; integer

Returns the number of the current working page. Page numbers are counted from 1
upwards, no matter what the displayed first page number of your document is.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="45"/>
        <source>redrawAll()

Redraws all pages.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="54"/>
        <source>getPageType() -&gt; integer

Returns the type of the Page, 0 means left Page, 1 is a middle Page and 2 is a right Page
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="65"/>
        <source>savePageAsEPS(&quot;name&quot;)

Saves the current page as an EPS to the file &quot;name&quot;.

May raise ScribusError if the save failed.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="78"/>
        <source>deletePage(nr)

Deletes the given page. Does nothing if the document contains only one page.
Page numbers are counted from 1 upwards, no matter what the displayed first
page number is.

May raise IndexError if the page number is out of range
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="91"/>
        <source>gotoPage(nr)

Moves to the page &quot;nr&quot; (that is, makes the current page &quot;nr&quot;). Note that
gotoPage doesn&apos;t (curently) change the page the user&apos;s view is displaying, it
just sets the page that script commands will operates on.

May raise IndexError if the page number is out of range.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="100"/>
        <source>pageCount() -&gt; integer

Returns the number of pages in the document.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="110"/>
        <source>getHGuides() -&gt; list

Returns a list containing positions of the horizontal guides. Values are in the
document&apos;s current units - see UNIT_&lt;type&gt; constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="123"/>
        <source>setHGuides(list)

Sets horizontal guides. Input parameter must be a list of guide positions
measured in the current document units - see UNIT_&lt;type&gt; constants.

Example: setHGuides(getHGuides() + [200.0, 210.0] # add new guides without any lost
         setHGuides([90,250]) # replace current guides entirely
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="132"/>
        <source>getVGuides()

See getHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="141"/>
        <source>setVGuides()

See setHGuides.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="151"/>
        <source>getPageSize() -&gt; tuple

Returns a tuple with page dimensions measured in the document&apos;s current units.
See UNIT_&lt;type&gt; constants and getPageMargins()
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="167"/>
        <source>getPageItems() -&gt; list

Returns a list of tuples with items on the current page. The tuple is:
(name, objectType, order) E.g. [(&apos;Text1&apos;, 4, 0), (&apos;Image1&apos;, 2, 1)]
means that object named &apos;Text1&apos; is a text frame (type 4) and is the first at
the page...
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.h" line="181"/>
        <source>getPageMargins()

Returns the page margins as a (top, left, right, bottom) tuple in the current
units. See UNIT_&lt;type&gt; constants and getPageSize().
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="33"/>
        <source>setFillColor(&quot;color&quot;, [&quot;name&quot;])

Sets the fill color of the object &quot;name&quot; to the color &quot;color&quot;. &quot;color&quot;
is the name of one of the defined colors. If &quot;name&quot; is not given the
currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="63"/>
        <source>setLineColor(&quot;color&quot;, [&quot;name&quot;])

Sets the line color of the object &quot;name&quot; to the color &quot;color&quot;. If &quot;name&quot;
is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="96"/>
        <source>setLineWidth(width, [&quot;name&quot;])

Sets line width of the object &quot;name&quot; to &quot;width&quot;. &quot;width&quot; must be in the
range from 0.0 to 12.0 inclusive, and is measured in points. If &quot;name&quot; is not
given the currently selected item is used.

May raise ValueError if the line width is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="110"/>
        <source>setLineShade(shade, [&quot;name&quot;])

Sets the shading of the line color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full color intensity). If &quot;name&quot; is not given the currently selected item
is used.

May raise ValueError if the line shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="121"/>
        <source>setLineJoin(join, [&quot;name&quot;])

Sets the line join style of the object &quot;name&quot; to the style &quot;join&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for join - JOIN_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="132"/>
        <source>setLineEnd(endtype, [&quot;name&quot;])

Sets the line cap style of the object &quot;name&quot; to the style &quot;cap&quot;.
If &quot;name&quot; is not given the currently selected item is used. There are
predefined constants for &quot;cap&quot; - CAP_&lt;type&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="143"/>
        <source>setLineStyle(style, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the style &quot;style&quot;. If &quot;name&quot;
is not given the currently selected item is used. There are predefined
constants for &quot;style&quot; - LINE_&lt;style&gt;.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="157"/>
        <source>setFillShade(shade, [&quot;name&quot;])

Sets the shading of the fill color of the object &quot;name&quot; to &quot;shade&quot;.
&quot;shade&quot; must be an integer value in the range from 0 (lightest) to 100
(full Color intensity). If &quot;name&quot; is not given the currently selected
Item is used.

May raise ValueError if the fill shade is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="169"/>
        <source>setCornerRadius(radius, [&quot;name&quot;])

Sets the corner radius of the object &quot;name&quot;. The radius is expressed
in points. If &quot;name&quot; is not given the currently selected item is used.

May raise ValueError if the corner radius is negative.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="181"/>
        <source>setMultiLine(&quot;namedStyle&quot;, [&quot;name&quot;])

Sets the line style of the object &quot;name&quot; to the named style &quot;namedStyle&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May raise NotFoundError if the line style doesn&apos;t exist.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="35"/>
        <source>getFont([&quot;name&quot;]) -&gt; string

Returns the font name for the text frame &quot;name&quot;. If this text frame
has some text selected the value assigned to the first character
of the selection is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="45"/>
        <source>getTextLength([&quot;name&quot;]) -&gt; integer

Returns the length of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="55"/>
        <source>getTextLines([&quot;name&quot;]) -&gt; integer

Returns the number of lines of the text in the text frame &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="67"/>
        <source>getText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot;. If this text frame has some text
selected, the selected text is returned. All text in the frame, not just
currently visible text, is returned. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="79"/>
        <source>getAllText([&quot;name&quot;]) -&gt; string

Returns the text of the text frame &quot;name&quot; and of all text frames which are
linked with this frame. If this textframe has some text selected, the selected
text is returned. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="89"/>
        <source>getLineSpacing([&quot;name&quot;]) -&gt; float

Returns the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; expressed in
points. If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="99"/>
        <source>getColumnGap([&quot;name&quot;]) -&gt; float

Returns the column gap size of the text frame &quot;name&quot; expressed in points. If
&quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="109"/>
        <source>getColumns([&quot;name&quot;]) -&gt; integer

Gets the number of columns of the text frame &quot;name&quot;. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="121"/>
        <source>setText(&quot;text&quot;, [&quot;name&quot;])

Sets the text of the text frame &quot;name&quot; to the text of the string &quot;text&quot;.
Text must be UTF8 encoded - use e.g. unicode(text, &apos;iso-8859-2&apos;). See the FAQ
for more details. If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="148"/>
        <source>setFont(&quot;font&quot;, [&quot;name&quot;])

Sets the font of the text frame &quot;name&quot; to &quot;font&quot;. If there is some text
selected only the selected text is changed.  If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError if the font cannot be found.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="162"/>
        <source>setFontSize(size, [&quot;name&quot;])

Sets the font size of the text frame &quot;name&quot; to &quot;size&quot;. &quot;size&quot; is treated
as a value in points. If there is some text selected only the selected text is
changed. &quot;size&quot; must be in the range 1 to 512. If &quot;name&quot; is not given the
currently selected item is used.

May throw ValueError for a font size that&apos;s out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="175"/>
        <source>setLineSpacing(size, [&quot;name&quot;])

Sets the line spacing (&quot;leading&quot;) of the text frame &quot;name&quot; to &quot;size&quot;.
&quot;size&quot; is a value in points. If &quot;name&quot; is not given the currently selected
item is used.

May throw ValueError if the line spacing is out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="187"/>
        <source>setColumnGap(size, [&quot;name&quot;])

Sets the column gap of the text frame &quot;name&quot; to the value &quot;size&quot;. If
&quot;name&quot; is not given the currently selected item is used.

May throw ValueError if the column gap is out of bounds (must be positive).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="199"/>
        <source>setColumns(nr, [&quot;name&quot;])

Sets the number of columns of the text frame &quot;name&quot; to the integer &quot;nr&quot;.
If &quot;name&quot; is not given the currently selected item is used.

May throw ValueError if number of columns is not at least one.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="212"/>
        <source>setTextAlignment(align, [&quot;name&quot;])

Sets the text alignment of the text frame &quot;name&quot; to the specified alignment.
If &quot;name&quot; is not given the currently selected item is used. &quot;align&quot; should
be one of the ALIGN_ constants defined in this module - see dir(scribus).

May throw ValueError for an invalid alignment constant.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="226"/>
        <source>selectText(start, count, [&quot;name&quot;])

Selects &quot;count&quot; characters of text in the text frame &quot;name&quot; starting from the
character &quot;start&quot;. Character counting starts at 0. If &quot;count&quot; is zero, any
text selection will be cleared.  If &quot;name&quot; is not given the currently
selected item is used.

May throw IndexError if the selection is outside the bounds of the text.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="237"/>
        <source>deleteText([&quot;name&quot;])

Deletes any text in the text frame &quot;name&quot;. If there is some text selected,
only the selected text will be deleted. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="248"/>
        <source>setTextColor(&quot;color&quot;, [&quot;name&quot;])

Sets the text color of the text frame &quot;name&quot; to the color &quot;color&quot;. If there
is some text selected only the selected text is changed. If &quot;name&quot; is not
given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="258"/>
        <source>setTextStroke(&quot;color&quot;, [&quot;name&quot;])

Set &quot;color&quot; of the text stroke. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="271"/>
        <source>setTextShade(shade, [&quot;name&quot;])

Sets the shading of the text color of the object &quot;name&quot; to &quot;shade&quot;. If
there is some text selected only the selected text is changed. &quot;shade&quot; must
be an integer value in the range from 0 (lightest) to 100 (full color
intensity). If &quot;name&quot; is not given the currently selected item is
used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="284"/>
        <source>linkTextFrames(&quot;fromname&quot;, &quot;toname&quot;)

Link two text frames. The frame named &quot;fromname&quot; is linked to the
frame named &quot;toname&quot;. The target frame must be an empty text frame
and must not link to or be linked from any other frames already.

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="301"/>
        <source>unlinkTextFrames(&quot;name&quot;)

Remove the specified (named) object from the text frame flow/linkage. If the
frame was in the middle of a chain, the previous and next frames will be
connected, eg &apos;a-&gt;b-&gt;c&apos; becomes &apos;a-&gt;c&apos; when you unlinkTextFrames(b)&apos;

May throw ScribusException if linking rules are violated.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="314"/>
        <source>traceText([&quot;name&quot;])

Convert the text frame &quot;name&quot; to outlines. If &quot;name&quot; is not given the
currently selected item is used.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="328"/>
        <source>textOverflows([&quot;name&quot;, nolinks]) -&gt; integer

Returns the actual number of overflowing characters in text frame &quot;name&quot;.
If is nolinks set to non zero value it takes only one frame - it doesn&apos;t
use text frame linking. Without this parameter it search all linking chain.

May raise WrongFrameTypeError if the target frame is not an text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="342"/>
        <source>setPDFBookmark(&quot;toggle&quot;, [&quot;name&quot;])

Sets wether (toggle = 1) the text frame &quot;name&quot; is a bookmark nor not.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="354"/>
        <source>isPDFBookmark([&quot;name&quot;]) -&gt; bool

Returns true if the text frame &quot;name&quot; is a PDF bookmark.
If &quot;name&quot; is not given the currently selected item is used.

May raise WrongFrameTypeError if the target frame is not a text frame
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/guiapp.h" line="34"/>
        <source>progressReset()

Cleans up the Scribus progress bar previous settings. It is called before the
new progress bar use. See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/guiapp.h" line="47"/>
        <source>progressTotal(max)

Sets the progress bar&apos;s maximum steps value to the specified number.
See progressSet.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/guiapp.h" line="61"/>
        <source>progressSet(nr)

Set the progress bar position to &quot;nr&quot;, a value relative to the previously set
progressTotal. The progress bar uses the concept of steps; you give it the
total number of steps and the number of steps completed so far and it will
display the percentage of steps that have been completed. You can specify the
total number of steps with progressTotal(). The current number of steps is set
with progressSet(). The progress bar can be rewound to the beginning with
progressReset(). [based on info taken from Trolltech&apos;s Qt docs]
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/guiapp.h" line="69"/>
        <source>setCursor()

[UNSUPPORTED!] This might break things, so steer clear for now.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/guiapp.h" line="83"/>
        <source>docChanged(bool)

Enable/disable save icon in the Scribus icon bar and the Save menu item. It&apos;s
useful to call this procedure when you&apos;re changing the document, because Scribus
won&apos;t automatically notice when you change the document using a script.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/guiapp.h" line="95"/>
        <source>zoomDocument(double)

Zoom the document in main GUI window. Actions have whole number
values like 20.0, 100.0, etc. Zoom to Fit uses -100 as a marker.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.h" line="77"/>
        <source>defineColor(&quot;name&quot;, c, m, y, k)

Defines a new color &quot;name&quot;. The color Value is defined via four components:
c = Cyan, m = Magenta, y = Yellow and k = Black. Color components should be in
the range from 0 to 255.

May raise ValueError if an invalid color name is specified.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="145"/>
        <source>getCornerRadius([&quot;name&quot;]) -&gt; integer

Returns the corner radius of the object &quot;name&quot;. The radius is
expressed in points. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.h" line="177"/>
        <source>getPosition([&quot;name&quot;]) -&gt; (x,y)

Returns a (x, y) tuple with the position of the object &quot;name&quot;.
If &quot;name&quot; is not given the currently selected item is used.
The position is expressed in the actual measurement unit of the document
- see UNIT_&lt;type&gt; for reference.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.h" line="59"/>
        <source>rotateObjectAbs(rot [, &quot;name&quot;])

Sets the rotation of the object &quot;name&quot; to &quot;rot&quot;. Positive values
mean counter clockwise rotation. If &quot;name&quot; is not given the currently
selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="131"/>
        <source>setLayerPrintable(&quot;layer&quot;, printable)

Sets the layer &quot;layer&quot; to be printable or not. If is the
printable set to false the layer won&apos;t be printed.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="208"/>
        <source>isLayerVisible(&quot;layer&quot;) -&gt; bool

Returns whether the layer &quot;layer&quot; is visible or not, a value of True means
that the layer &quot;layer&quot; is visible, a value of False means that the layer
&quot;layer&quot; is invisible.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.h" line="135"/>
        <source>insertText(&quot;text&quot;, pos, [&quot;name&quot;])

Inserts the text &quot;text&quot; at the position &quot;pos&quot; into the text frame &quot;name&quot;.
Text must be UTF encoded (see setText() as reference) The first character has an
index of 0. Inserting text at position -1 appends it to the frame. If &quot;name&quot; is
not given the currently selected Item is used.

May throw IndexError for an insertion out of bounds.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddialog.h" line="46"/>
        <source>fileDialog(&quot;caption&quot;, [&quot;filter&quot;, &quot;defaultname&quot;, haspreview, issave, isdir]) -&gt; string with filename

Shows a File Open dialog box with the caption &quot;caption&quot;. Files are filtered
with the filter string &quot;filter&quot;. A default filename or file path can also
supplied, leave this string empty when you don&apos;t want to use it.  A value of
True for haspreview enables a small preview widget in the FileSelect box.  When
the issave parameter is set to True the dialog acts like a &quot;Save As&quot; dialog
otherwise it acts like a &quot;File Open Dialog&quot;. When the isdir parameter is True
the dialog shows and returns only directories. The default for all of the
opional parameters is False.

The filter, if specified, takes the form &apos;comment (*.type *.type2 ...)&apos;.
For example &apos;Images (*.png *.xpm *.jpg)&apos;.

Refer to the Qt-Documentation for Q3FileDialog for details on filters.

Example: fileDialog(&apos;Open input&apos;, &apos;CSV files (*.csv)&apos;)
Example: fileDialog(&apos;Save report&apos;, defaultname=&apos;report.txt&apos;, issave=True)
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.h" line="173"/>
        <source>setMargins(lr, rr, tr, br)

Sets the margins of the document, Qt::DockLeft(lr), Qt::DockRight(rr), Qt::DockTop(tr) and Qt::DockBottom(br)
margins are given in the measurement units of the document - see UNIT_&lt;type&gt;
constants.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="157"/>
        <source>setLayerOutlined(&quot;layer&quot;, outline)

Sets the layer &quot;layer&quot; to be locked or not. If outline is set to
true the layer will be displayed outlined.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="170"/>
        <source>setLayerFlow(&quot;layer&quot;, flow)

Sets the layers &quot;layer&quot;  flowcontrol to flow. If flow is set to
true text in layers above this one will flow around objects on this layer.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="182"/>
        <source>setLayerBlendmode(&quot;layer&quot;, blend)

Sets the layers &quot;layer&quot;  blendmode to blend.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.h" line="194"/>
        <source>setLayerTransparency(&quot;layer&quot;, trans)

Sets the layers &quot;layer&quot;  transparency to trans.

May raise NotFoundError if the layer can&apos;t be found.
May raise ValueError if the layer name isn&apos;t acceptable.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="43"/>
        <source>setFillTransparency(transparency, [&quot;name&quot;])

Sets the fill transparency of the object &quot;name&quot; to transparency
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="53"/>
        <source>setFillBlendmode(blendmode, [&quot;name&quot;])

Sets the fill blendmode of the object &quot;name&quot; to blendmode
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="73"/>
        <source>setLineTransparency(transparency, [&quot;name&quot;])

Sets the line transparency of the object &quot;name&quot; to transparency
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.h" line="83"/>
        <source>setLineBlendmode(blendmode, [&quot;name&quot;])

Sets the line blendmode of the object &quot;name&quot; to blendmode
If &quot;name&quot; is not given the currently selected item is used.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/svgimport.h" line="33"/>
        <source>placeEPS(&quot;filename&quot;, x, y)

Places the EPS &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the EPS placed on the page

If loading was successful, the selection contains the imported EPS
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/svgimport.h" line="45"/>
        <source>placeSXD(&quot;filename&quot;, x, y)

Places the SXD &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the SXD placed on the page

If loading was successful, the selection contains the imported SXD
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/svgimport.h" line="57"/>
        <source>placeODG(&quot;filename&quot;, x, y)

Places the ODG &quot;filename&quot; onto the current page,
x and y specify the coordinate of the topleft corner of the ODG placed on the page

If loading was successful, the selection contains the imported ODG
</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>About</name>
    <message>
        <location filename="../about.cpp" line="48"/>
        <source>About Scribus %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="75"/>
        <source>%1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="83"/>
        <source>%3-%2-%1 %4 %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="135"/>
        <source>Using Ghostscript version %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="137"/>
        <source>No Ghostscript version available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="138"/>
        <source>Build ID:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="140"/>
        <source>&amp;About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="146"/>
        <source>Development Team:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="158"/>
        <source>Contributions from:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="177"/>
        <source>Mac OS&amp;#174; X Aqua Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="185"/>
        <source>Windows&amp;#174; Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="189"/>
        <source>Official Documentation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="197"/>
        <source>Other Documentation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="205"/>
        <source>Tango Project Icons:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="211"/>
        <source>A&amp;uthors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="219"/>
        <source>Official Translations and Translators:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="346"/>
        <source>Previous Translation Contributors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="387"/>
        <source>&amp;Translations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="393"/>
        <source>Homepage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="395"/>
        <source>Online Reference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="397"/>
        <source>Wiki</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="399"/>
        <source>Bugs and Feature Requests</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="401"/>
        <source>Mailing List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="408"/>
        <source>&amp;Online</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="411"/>
        <source>&amp;Updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="415"/>
        <source>Check for &amp;Updates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="427"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="440"/>
        <source>Check for updates to Scribus. No data from your machine will be transferred off it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="181"/>
        <source>OS/2&amp;#174;/eComStation&amp;#8482; Port:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="202"/>
        <source>Splash Screen:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="436"/>
        <source>This panel shows the version, build date and compiled in library support in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="437"/>
        <source>The C-C-T-F equates to C=littlecms C=CUPS T=TIFF support F=Fontconfig support.Last Letter is the renderer C=cairo or Q=Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="438"/>
        <source>Missing library support is indicated by a *. This also indicates the version of Ghostscript which Scribus has detected.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="439"/>
        <source>The Windows version does not use fontconfig or CUPS libraries.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="138"/>
        <source>&lt;p align=&quot;center&quot;&gt;&lt;b&gt;%1 %2&lt;/b&gt;&lt;/p&gt;&lt;p align=&quot;center&quot;&gt;%3&lt;br&gt;%4 %5&lt;br&gt;%6&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../about.cpp" line="138"/>
        <source>Scribus Version</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AboutPlugins</name>
    <message>
        <location filename="../aboutplugins.cpp" line="68"/>
        <source>Filename:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.cpp" line="69"/>
        <source>Version:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.cpp" line="72"/>
        <source>Enabled:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.cpp" line="73"/>
        <source>Release Date:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.cpp" line="80"/>
        <source>Description:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.cpp" line="81"/>
        <source>Author(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.cpp" line="82"/>
        <source>Copyright:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.cpp" line="83"/>
        <source>License:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aboutplugins.ui" line="13"/>
        <source>Scribus: About Plug-ins</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ActionManager</name>
    <message>
        <location filename="../actionmanager.cpp" line="1175"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1176"/>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1177"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1178"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1179"/>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1180"/>
        <source>Re&amp;vert to Saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1181"/>
        <source>Collect for O&amp;utput...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1182"/>
        <source>Get Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1183"/>
        <source>Append &amp;Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1184"/>
        <source>Get Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1185"/>
        <source>Save &amp;Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1186"/>
        <source>Save as &amp;EPS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1187"/>
        <source>Save as P&amp;DF...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1188"/>
        <source>Document &amp;Setup...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1189"/>
        <source>P&amp;references...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1190"/>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1191"/>
        <source>Print Previe&amp;w</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1192"/>
        <source>&amp;Quit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1194"/>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1195"/>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1196"/>
        <source>&amp;Item Action Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1197"/>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1200"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1201"/>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1202"/>
        <source>Paste (&amp;Absolute)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1203"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1204"/>
        <source>Select &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1205"/>
        <source>&amp;Deselect All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1206"/>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1207"/>
        <source>Edit Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1208"/>
        <source>C&amp;olors...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1209"/>
        <source>Patterns...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1210"/>
        <source>S&amp;tyles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1211"/>
        <source>&amp;Master Pages...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1212"/>
        <source>&amp;JavaScripts...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1219"/>
        <source>%1 pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1234"/>
        <source>&amp;Other...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1222"/>
        <source>&amp;Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1223"/>
        <source>&amp;Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1224"/>
        <source>&amp;Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1225"/>
        <source>&amp;Block</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1226"/>
        <source>&amp;Forced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1231"/>
        <source>&amp;%1 %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1235"/>
        <source>&amp;Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1236"/>
        <source>&amp;Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1237"/>
        <source>Underline &amp;Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1238"/>
        <source>&amp;Strike Through</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1239"/>
        <source>&amp;All Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1240"/>
        <source>Small &amp;Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1241"/>
        <source>Su&amp;perscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1242"/>
        <source>Su&amp;bscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1243"/>
        <source>&amp;Outline</source>
        <comment>type effect</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1244"/>
        <source>S&amp;hadow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1246"/>
        <source>&amp;Image Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1247"/>
        <source>&amp;Tabulators...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1250"/>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1251"/>
        <source>&amp;Multiple Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1252"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1253"/>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1254"/>
        <source>&amp;Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1255"/>
        <source>Is &amp;Locked</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1256"/>
        <source>Si&amp;ze is Locked</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1257"/>
        <source>&amp;Printing Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1258"/>
        <source>&amp;Flip Horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1259"/>
        <source>&amp;Flip Vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1260"/>
        <source>Lower to &amp;Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1261"/>
        <source>Raise to &amp;Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1262"/>
        <source>&amp;Lower</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1263"/>
        <source>&amp;Raise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1264"/>
        <source>Send to S&amp;crapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1265"/>
        <source>Send to Patterns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1266"/>
        <source>&amp;Attributes...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1267"/>
        <source>More Info...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1268"/>
        <source>I&amp;mage Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1269"/>
        <source>&amp;Update Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1270"/>
        <source>Adjust Frame to Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1271"/>
        <source>Extended Image Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1272"/>
        <source>&amp;Low Resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1273"/>
        <source>&amp;Normal Resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1274"/>
        <source>&amp;Full Resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1275"/>
        <source>Is PDF &amp;Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1276"/>
        <source>Is PDF A&amp;nnotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1277"/>
        <source>Annotation P&amp;roperties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1278"/>
        <source>Field P&amp;roperties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1279"/>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1280"/>
        <source>&amp;Attach Text to Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1281"/>
        <source>&amp;Detach Text from Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1282"/>
        <source>&amp;Combine Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1283"/>
        <source>Split &amp;Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1355"/>
        <source>&amp;Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1350"/>
        <source>&amp;Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1286"/>
        <source>&amp;Outlines</source>
        <comment>Convert to oulines</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1353"/>
        <source>&amp;Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1349"/>
        <source>&amp;Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1291"/>
        <source>&amp;Frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1292"/>
        <source>&amp;Glyph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1293"/>
        <source>Sample Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1297"/>
        <source>&amp;Insert...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1298"/>
        <source>Im&amp;port...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1299"/>
        <source>&amp;Delete...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1300"/>
        <source>&amp;Copy...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1301"/>
        <source>&amp;Move...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1302"/>
        <source>&amp;Apply Master Page...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1303"/>
        <source>Convert to Master Page...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1304"/>
        <source>Manage &amp;Guides...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1305"/>
        <source>Manage Page Properties...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1310"/>
        <source>&amp;50%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1311"/>
        <source>&amp;75%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1312"/>
        <source>&amp;100%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1313"/>
        <source>&amp;200%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1315"/>
        <source>Preview Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1316"/>
        <source>Show &amp;Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1318"/>
        <source>Show &amp;Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1319"/>
        <source>Show Layer Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1320"/>
        <source>Show &amp;Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1321"/>
        <source>Show &amp;Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1322"/>
        <source>Show G&amp;uides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1323"/>
        <source>Show Text Frame Columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1324"/>
        <source>Show &amp;Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1325"/>
        <source>Show &amp;Text Chain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1326"/>
        <source>Show Control Characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1327"/>
        <source>Show Rulers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1328"/>
        <source>Rulers relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1329"/>
        <source>Sn&amp;ap to Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1330"/>
        <source>Sna&amp;p to Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1334"/>
        <source>&amp;Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1335"/>
        <source>&amp;Outline</source>
        <comment>Document Outline Palette</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1336"/>
        <source>&amp;Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1337"/>
        <source>&amp;Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1338"/>
        <source>&amp;Arrange Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1339"/>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1340"/>
        <source>&amp;Measurements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1341"/>
        <source>Action &amp;History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1342"/>
        <source>Preflight &amp;Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1343"/>
        <source>&amp;Align and Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1344"/>
        <source>&amp;Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1345"/>
        <source>P&amp;DF Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1348"/>
        <source>Select Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1351"/>
        <source>T&amp;able</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1352"/>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1354"/>
        <source>&amp;Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1356"/>
        <source>&amp;Freehand Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1357"/>
        <source>Rotate Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1358"/>
        <source>Zoom in or out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1359"/>
        <source>Zoom in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1360"/>
        <source>Zoom out</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1361"/>
        <source>Edit Contents of Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1362"/>
        <source>Edit Text...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1363"/>
        <source>Link Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1364"/>
        <source>Unlink Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1365"/>
        <source>&amp;Eye Dropper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1366"/>
        <source>Copy Item Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1368"/>
        <source>Edit the text with the Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1370"/>
        <source>Insert Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1371"/>
        <source>Insert Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1372"/>
        <source>Insert Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1373"/>
        <source>Insert Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1374"/>
        <source>Insert Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1375"/>
        <source>Insert Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1376"/>
        <source>Insert Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1377"/>
        <source>Insert Freehand Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1379"/>
        <source>Insert PDF Push Button</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1380"/>
        <source>Insert PDF Text Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1381"/>
        <source>Insert PDF Check Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1382"/>
        <source>Insert PDF Combo Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1383"/>
        <source>Insert PDF List Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1384"/>
        <source>Insert Text Annotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1385"/>
        <source>Insert Link Annotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1389"/>
        <source>&amp;Manage Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1390"/>
        <source>&amp;Hyphenate Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1391"/>
        <source>Dehyphenate Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1392"/>
        <source>&amp;Generate Table Of Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1395"/>
        <source>&amp;Cascade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1396"/>
        <source>&amp;Tile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1399"/>
        <source>&amp;About Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1400"/>
        <source>&amp;About Plug-ins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1401"/>
        <source>About &amp;Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1402"/>
        <source>Toolti&amp;ps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1403"/>
        <source>Scribus &amp;Manual...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1406"/>
        <source>Toggle Palettes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1407"/>
        <source>Toggle Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1415"/>
        <source>Smart &amp;Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1416"/>
        <source>Non Breaking Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1417"/>
        <source>Non Breaking &amp;Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1418"/>
        <source>Page &amp;Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1465"/>
        <source>New Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1466"/>
        <source>Frame Break</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1467"/>
        <source>Column Break</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1424"/>
        <source>Copyright</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1425"/>
        <source>Registered Trademark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1426"/>
        <source>Trademark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1427"/>
        <source>Solidus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1428"/>
        <source>Bullet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1429"/>
        <source>Middle Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1430"/>
        <source>Em Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1431"/>
        <source>En Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1432"/>
        <source>Figure Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1433"/>
        <source>Quotation Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1454"/>
        <source>En Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1455"/>
        <source>Em Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1456"/>
        <source>Thin Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1457"/>
        <source>Thick Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1458"/>
        <source>Mid Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1459"/>
        <source>Hair Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1461"/>
        <source>Insert Smart Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1462"/>
        <source>Insert Non Breaking Dash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1463"/>
        <source>Insert Non Breaking Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1464"/>
        <source>Insert Page Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1471"/>
        <source>ff</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1472"/>
        <source>fi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1473"/>
        <source>fl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1474"/>
        <source>ffi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1475"/>
        <source>ffl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1476"/>
        <source>ft</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1477"/>
        <source>st</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1294"/>
        <source>Sticky Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1308"/>
        <source>&amp;Fit to Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1309"/>
        <source>Fit to Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1317"/>
        <source>Show Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1468"/>
        <source>&amp;Zero Width Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1469"/>
        <source>Zero Width NB Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1435"/>
        <source>Apostrophe</source>
        <comment>Unicode 0x0027</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1436"/>
        <source>Straight Double</source>
        <comment>Unicode 0x0022</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1437"/>
        <source>Single Left</source>
        <comment>Unicode 0x2018</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1438"/>
        <source>Single Right</source>
        <comment>Unicode 0x2019</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1439"/>
        <source>Double Left</source>
        <comment>Unicode 0x201C</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1440"/>
        <source>Double Right</source>
        <comment>Unicode 0x201D</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1441"/>
        <source>Single Reversed</source>
        <comment>Unicode 0x201B</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1442"/>
        <source>Double Reversed</source>
        <comment>Unicode 0x201F</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1443"/>
        <source>Single Left Guillemet</source>
        <comment>Unicode 0x2039</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1444"/>
        <source>Single Right Guillemet</source>
        <comment>Unicode 0x203A</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1445"/>
        <source>Double Left Guillemet</source>
        <comment>Unicode 0x00AB</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1446"/>
        <source>Double Right Guillemet</source>
        <comment>Unicode 0x00BB</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1447"/>
        <source>Low Single Comma</source>
        <comment>Unicode 0x201A</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1448"/>
        <source>Low Double Comma</source>
        <comment>Unicode 0x201E</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1449"/>
        <source>CJK Single Left</source>
        <comment>Unicode 0x300C</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1450"/>
        <source>CJK Single Right</source>
        <comment>Unicode 0x300D</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1451"/>
        <source>CJK Double Left</source>
        <comment>Unicode 0x300E</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1452"/>
        <source>CJK Double Right</source>
        <comment>Unicode 0x300F</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../actionmanager.cpp" line="1314"/>
        <source>&amp;400%</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignDistribute</name>
    <message>
        <location filename="../aligndistribute.ui" line="35"/>
        <source>Align</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.ui" line="79"/>
        <source>&amp;Selected Guide:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.ui" line="92"/>
        <source>&amp;Relative To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.ui" line="431"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.ui" line="270"/>
        <source>Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.ui" line="490"/>
        <source>&amp;Distance:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignDistributePalette</name>
    <message>
        <location filename="../aligndistribute.cpp" line="81"/>
        <source>Align and Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="84"/>
        <source>&amp;Relative to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="87"/>
        <source>First Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="88"/>
        <source>Last Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="89"/>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="90"/>
        <source>Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="91"/>
        <source>Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="92"/>
        <source>Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="100"/>
        <source>Align bottoms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="102"/>
        <source>Align right sides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="106"/>
        <source>Center on vertical axis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="108"/>
        <source>Align left sides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="110"/>
        <source>Center on horizontal axis</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="114"/>
        <source>Align tops</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="116"/>
        <source>&amp;Selected Guide:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="124"/>
        <source>Distribute right sides equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="126"/>
        <source>Distribute bottoms equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="128"/>
        <source>Distribute centers equidistantly horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="134"/>
        <source>Distribute left sides equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="136"/>
        <source>Distribute centers equidistantly vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="138"/>
        <source>Distribute tops equidistantly</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="148"/>
        <source>&amp;Distance:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="149"/>
        <source>Distribute the items with the distance specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="151"/>
        <source>None Selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="431"/>
        <source>Y: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="439"/>
        <source>X: %1%2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="96"/>
        <source>Align right sides of items to left side of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="98"/>
        <source>Align left sides of items to right side of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="104"/>
        <source>Align tops of items to bottom of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="112"/>
        <source>Align bottoms of items to top of anchor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="119"/>
        <source>Make horizontal gaps between items equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="121"/>
        <source>Make horizontal gaps between items equal to the value specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="130"/>
        <source>Make vertical gaps between items equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="132"/>
        <source>Make vertical gaps between items equal to the value specified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="140"/>
        <source>Make horizontal gaps between items and sides of page equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="146"/>
        <source>Make vertical gaps between items and the top and bottom of page margins equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="144"/>
        <source>Make horizontal gaps between items and sides of page margins equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="142"/>
        <source>Make vertical gaps between items and the top and bottom of page equal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="82"/>
        <source>Align</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../aligndistribute.cpp" line="83"/>
        <source>Distribute</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AlignSelect</name>
    <message>
        <location filename="../alignselect.cpp" line="101"/>
        <source>Align Text Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../alignselect.cpp" line="102"/>
        <source>Align Text Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../alignselect.cpp" line="103"/>
        <source>Align Text Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../alignselect.cpp" line="104"/>
        <source>Align Text Justified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../alignselect.cpp" line="105"/>
        <source>Align Text Forced Justified</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annot</name>
    <message>
        <location filename="../annot.cpp" line="59"/>
        <source>Field Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="532"/>
        <source>Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="94"/>
        <source>Button</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="94"/>
        <source>Text Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="94"/>
        <source>Check Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="94"/>
        <source>Combo Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="94"/>
        <source>List Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="109"/>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="119"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="132"/>
        <source>Tooltip:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="273"/>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="150"/>
        <source>Font for use with PDF 1.3:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="174"/>
        <source>Border</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="180"/>
        <source>Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="196"/>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="200"/>
        <source>Thin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="310"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="200"/>
        <source>Wide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="208"/>
        <source>Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="212"/>
        <source>Solid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="212"/>
        <source>Dashed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="212"/>
        <source>Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="213"/>
        <source>Beveled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="213"/>
        <source>Inset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="223"/>
        <source>Other</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="229"/>
        <source>Read Only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="235"/>
        <source>Required</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="241"/>
        <source>Do Not Export Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="247"/>
        <source>Visibility:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="251"/>
        <source>Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="251"/>
        <source>Hidden</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="251"/>
        <source>No Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="252"/>
        <source>No View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="261"/>
        <source>Appearance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="279"/>
        <source>Text for Button Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="282"/>
        <source>Text for Roll Over</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="293"/>
        <source>Icons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="299"/>
        <source>Use Icons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="356"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="328"/>
        <source>Pressed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="346"/>
        <source>Roll Over</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="365"/>
        <source>Icon Placement...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="413"/>
        <source>Highlight</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="420"/>
        <source>None</source>
        <comment>highlight</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="420"/>
        <source>Invert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="420"/>
        <source>Outlined</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="420"/>
        <source>Push</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="437"/>
        <source>Multi-Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="441"/>
        <source>Password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="448"/>
        <source>Limit of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="459"/>
        <source>Characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="465"/>
        <source>Do Not Scroll</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="469"/>
        <source>Do Not Spell Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="484"/>
        <source>Check Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="487"/>
        <source>Check</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="487"/>
        <source>Cross</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="487"/>
        <source>Diamond</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="487"/>
        <source>Circle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="487"/>
        <source>Star</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="487"/>
        <source>Square</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="501"/>
        <source>Default is Checked</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="513"/>
        <source>Editable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="520"/>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2040"/>
        <source>None</source>
        <comment>action</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2078"/>
        <source>JavaScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2040"/>
        <source>Go To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2041"/>
        <source>Submit Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2041"/>
        <source>Reset Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2041"/>
        <source>Import Data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="569"/>
        <source>Event:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2020"/>
        <source>Mouse Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2020"/>
        <source>Mouse Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2020"/>
        <source>Mouse Enter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2021"/>
        <source>Mouse Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2021"/>
        <source>On Focus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2021"/>
        <source>On Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="584"/>
        <source>Script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1088"/>
        <source>Edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="663"/>
        <source>Submit to URL:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="671"/>
        <source>Submit Data as HTML</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="684"/>
        <source>Import Data from:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="609"/>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="615"/>
        <source>To File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="622"/>
        <source>Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="625"/>
        <source>Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="639"/>
        <source>X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="651"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="647"/>
        <source>Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="693"/>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="724"/>
        <source>Field is formatted as:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="727"/>
        <source>Plain</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="727"/>
        <source>Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="727"/>
        <source>Percentage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="727"/>
        <source>Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="727"/>
        <source>Time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="727"/>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="745"/>
        <source>Number Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="813"/>
        <source>Decimals:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="768"/>
        <source>Use Currency Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="777"/>
        <source>Prepend Currency Symbol</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="824"/>
        <source>Formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="804"/>
        <source>Percent Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="847"/>
        <source>Date Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="873"/>
        <source>Time Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="895"/>
        <source>Custom Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="907"/>
        <source>Format:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="933"/>
        <source>Keystroke:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="957"/>
        <source>Format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="973"/>
        <source>Value is not validated</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="982"/>
        <source>Value must be greater than or equal to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="986"/>
        <source>and less or equal to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="997"/>
        <source>Custom validate script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1018"/>
        <source>Validate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1035"/>
        <source>Value is not calculated</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1044"/>
        <source>Value is the</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1049"/>
        <source>sum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1049"/>
        <source>product</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1049"/>
        <source>average</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1049"/>
        <source>minimum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1050"/>
        <source>maximum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1057"/>
        <source>of the following fields:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1067"/>
        <source>Pick...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1072"/>
        <source>Custom calculation script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1092"/>
        <source>Calculate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1111"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1115"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1167"/>
        <source>Flag is ignored for PDF 1.3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1168"/>
        <source>Enter a comma separated list of fields here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1169"/>
        <source>You need at least the Icon for Normal to use Icons for Buttons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2231"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1446"/>
        <source>Example:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2069"/>
        <source>Selection Change</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2077"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="2231"/>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annot.cpp" line="1335"/>
        <source>Images (*.tif *.png *.jpg *.xpm);;PostScript (*.eps *.epsi);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Annota</name>
    <message>
        <location filename="../annota.cpp" line="46"/>
        <source>Annotation Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="76"/>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="76"/>
        <source>Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="76"/>
        <source>External Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="77"/>
        <source>External Web-Link</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="82"/>
        <source>&amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="99"/>
        <source>Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="110"/>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="121"/>
        <source>&amp;Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="149"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="144"/>
        <source>&amp;X-Pos</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="151"/>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="351"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../annota.cpp" line="351"/>
        <source>PDF-Documents (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ApplyMasterPageDialog</name>
    <message>
        <location filename="../applytemplatedialog.cpp" line="260"/>
        <source>Apply Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="261"/>
        <source>&amp;Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="262"/>
        <source>Apply To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="263"/>
        <source>Current &amp;page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="264"/>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="265"/>
        <source>&amp;Even pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="266"/>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="267"/>
        <source>O&amp;dd pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="268"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="269"/>
        <source>&amp;All pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="270"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="271"/>
        <source>&amp;Within range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="272"/>
        <source>Alt+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="273"/>
        <source>Apply the selected master page to even, odd or all pages within the following range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="274"/>
        <source>to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="276"/>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="278"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../applytemplatedialog.cpp" line="51"/>
        <source>Possible Hyphenation</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ArrowChooser</name>
</context>
<context>
    <name>Barcode</name>
    <message>
        <location filename="../plugins/barcodegenerator/barcode.cpp" line="22"/>
        <source>&amp;Barcode Generator...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcode.cpp" line="37"/>
        <source>Scribus frontend for Pure Postscript Barcode Writer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BarcodeGenerator</name>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="39"/>
        <source>12 or 13 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="41"/>
        <source>8 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="43"/>
        <source>11 or 12 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="45"/>
        <source>7 or 8 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="47"/>
        <source>5 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="49"/>
        <source>2 digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="56"/>
        <source>Variable number of characters, digits and any of the symbols -. *$/+%.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="65"/>
        <source>Variable number of ASCII characters and special function symbols, starting with the appropriate start character for the initial character set. UCC/EAN-128s must have a mandatory FNC 1 symbol immediately following the start character.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="68"/>
        <source>Variable number of digits and any of the symbols -$:/.+ABCD.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="91"/>
        <source>Variable number of digits</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="76"/>
        <source>Variable number of digits. An ITF-14 is 14 characters and does not have a check digit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="87"/>
        <source>Variable number of digits and capital letters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="96"/>
        <source>Variable number of hexadecimal characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="285"/>
        <source>Error opening file: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="316"/>
        <source>Barcode incomplete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.cpp" line="52"/>
        <source>12 or 13 digits with dashes. The legacy ISBN-10 format accepts 9 or 10 digits with dashes, but this standard was depreciated for public use after 1st January 2007. (Note: To convert an old ISBN-10 to a new ISBN-13, prefix 978- to the first 9 digits, e.g. 1-56592-479-7 -&gt; 978-1-56592-479. The final check-digit will be calculated automatically.)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BarcodeGeneratorBase</name>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="15"/>
        <source>Barcode Creator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="193"/>
        <source>Barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="311"/>
        <source>&amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="291"/>
        <source>Co&amp;de:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="304"/>
        <source>Select one of the available barcode type here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="284"/>
        <source>The numeric representation of the code itself. See the help message below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="274"/>
        <source>Reset the barcode samples</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="247"/>
        <source>&amp;Include text in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="250"/>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="244"/>
        <source>If checked, there will be numbers in the barcode too</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="234"/>
        <source>&amp;Guard whitespace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="237"/>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="231"/>
        <source>Draw arrows to be sure of space next the code</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="221"/>
        <source>I&amp;nclude checksum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="224"/>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="218"/>
        <source>Generate and include a checksum in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="208"/>
        <source>Incl&amp;ude checksum digit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="211"/>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="205"/>
        <source>Include the checksum digit in the barcode text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="30"/>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="58"/>
        <source>&amp;Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="61"/>
        <source>Alt+B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="55"/>
        <source>Background color - under the code lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="90"/>
        <source>&amp;Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="93"/>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="87"/>
        <source>Color of the lines in barcode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="122"/>
        <source>&amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="125"/>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="119"/>
        <source>Color of the text and numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="154"/>
        <source>Hints and help is shown here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcodegenerator.ui" line="164"/>
        <source>Preview of the result. 72dpi sample.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Biblio</name>
    <message>
        <location filename="../scrap.cpp" line="580"/>
        <source>Main</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="582"/>
        <source>Copied Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="712"/>
        <source>Choose a Scrapbook Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="747"/>
        <source>Scrapbook (*.scs)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="750"/>
        <source>Choose a scrapbook file to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="770"/>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="826"/>
        <source>Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="828"/>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="833"/>
        <source>Copy To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="834"/>
        <source>Move To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1153"/>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1153"/>
        <source>New Entry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1047"/>
        <source>Name &quot;%1&quot; is not unique.
Please choose another.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1244"/>
        <source>Object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1341"/>
        <source>Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1342"/>
        <source>Create a new scrapbook page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1343"/>
        <source>Load an existing scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1344"/>
        <source>Save the selected scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1345"/>
        <source>Import an scrapbook file from Scribus &lt;=1.3.2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1346"/>
        <source>Close the selected scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scrap.cpp" line="1040"/>
        <source>New Name</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BookMView</name>
    <message>
        <location filename="../bookmwin.cpp" line="219"/>
        <source>Move Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../bookmwin.cpp" line="220"/>
        <source>Insert Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../bookmwin.cpp" line="221"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../bookmwin.cpp" line="554"/>
        <source>Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>BookPalette</name>
    <message>
        <location filename="../bookpalette.cpp" line="39"/>
        <source>Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ButtonIcon</name>
    <message>
        <location filename="../buttonicon.cpp" line="30"/>
        <source>Icon Placement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="39"/>
        <source>Layout:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="42"/>
        <source>Caption only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="42"/>
        <source>Icon only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="42"/>
        <source>Caption below Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="42"/>
        <source>Caption above Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="43"/>
        <source>Caption right to Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="43"/>
        <source>Caption left to Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="43"/>
        <source>Caption overlays Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="51"/>
        <source>Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="56"/>
        <source>Always</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="56"/>
        <source>When Icon is too small</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="57"/>
        <source>When Icon is too big</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="57"/>
        <source>Never</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="64"/>
        <source>Scale How:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="67"/>
        <source>Proportional</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="68"/>
        <source>Non Proportional</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="91"/>
        <source>Icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="118"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="122"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../buttonicon.cpp" line="125"/>
        <source>Reset</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMSPrefs</name>
    <message>
        <location filename="../cmsprefs.cpp" line="28"/>
        <source>&amp;Activate Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="31"/>
        <source>System Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="40"/>
        <source>&amp;RGB Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="47"/>
        <source>&amp;CMYK Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="54"/>
        <source>&amp;RGB Solid Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="61"/>
        <source>&amp;CMYK Solid Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="68"/>
        <source>&amp;Monitor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="75"/>
        <source>P&amp;rinter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="80"/>
        <source>Rendering Intents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="89"/>
        <source>Pictures:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="96"/>
        <source>Sol&amp;id Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="102"/>
        <source>Sim&amp;ulate Printer on the Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="110"/>
        <source>Convert all colors to printer space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="119"/>
        <source>Mark Colors out of &amp;Gamut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="123"/>
        <source>Use &amp;Blackpoint Compensation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="128"/>
        <source>Default color profile for imported CMYK images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="129"/>
        <source>Default color profile for imported RGB images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="130"/>
        <source>Default color profile for solid RGB colors on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="131"/>
        <source>Default color profile for solid CMYK colors on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="132"/>
        <source>Color profile that you have generated or received from the manufacturer.
This profile should be specific to your monitor and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="133"/>
        <source>Color profile for your printer model from the manufacturer.
This profile should be specific to your printer and not a generic profile (i.e. sRGB).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="134"/>
        <source>Default rendering intent for solid colors. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="135"/>
        <source>Default rendering intent for images. Unless you know why to change it,
Relative Colorimetric or Perceptual should be chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="136"/>
        <source>Enable &apos;soft proofing&apos; of how your document colors will print,
based on the chosen printer profile.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="137"/>
        <source>Simulate a full color managed environment :
all colors, rgb or cmyk, are converted to printer color space.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="138"/>
        <source>Method of showing colors on the screen which may not print properly.
This requires very accurate profiles and serves only as a warning.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="139"/>
        <source>Black Point Compensation is a method of improving contrast in photos.
It is recommended that you enable this if you have photos in your document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="194"/>
        <source>Perceptual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="194"/>
        <source>Relative Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="195"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmsprefs.cpp" line="195"/>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CMYKChoose</name>
    <message>
        <location filename="../cmykfw.cpp" line="88"/>
        <source>Edit Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="97"/>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="107"/>
        <source>Color &amp;Model</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="1007"/>
        <source>CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="1009"/>
        <source>RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="876"/>
        <source>Web Safe RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="121"/>
        <source>Is Spot Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="126"/>
        <source>Is Registration Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="137"/>
        <source>New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="154"/>
        <source>Old</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="192"/>
        <source>HSV-Colormap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="817"/>
        <source>C:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="816"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="818"/>
        <source>M:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="819"/>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="347"/>
        <source>K:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="391"/>
        <source>Choosing this will enable printing this on all plates. Registration colors are used for printer marks such as crop marks, registration marks and the like. These are not typically used in the layout itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="392"/>
        <source>Choosing this will make this color a spot color, thus creating another spot when creating plates or separations. This is used most often when a logo or other color needs exact representation or cannot be replicated with CMYK inks. Metallic and fluorescent inks are good examples which cannot be easily replicated with CMYK inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="436"/>
        <source>Dynamic Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="439"/>
        <source>Static Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="861"/>
        <source>R:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="862"/>
        <source>G:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="863"/>
        <source>B:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="1079"/>
        <source>You cannot create a color named &quot;%1&quot;.
It is a reserved name for transparent color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="1088"/>
        <source>The name of the color already exists,
please choose another one.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cmykfw.cpp" line="897"/>
        <source>If color management is enabled, a triangle warning indicator is a warning that the color maybe outside of the color gamut of the current printer profile selected. What this means is the color may not print exactly as indicated on screen. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CStyleP</name>
    <message>
        <location filename="../smcstylew.ui" line="13"/>
        <source>Form1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smcstylew.ui" line="49"/>
        <source>Based On:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smcstylew.ui" line="89"/>
        <source>Basic Formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smcstylew.ui" line="99"/>
        <source>Advanced Formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smcstylew.ui" line="109"/>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CWDialog</name>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.cpp" line="318"/>
        <source>Merging colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.cpp" line="324"/>
        <source>Error: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.cpp" line="324"/>
        <source>Color %1 exists already!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.cpp" line="329"/>
        <source>Color %1 appended.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.cpp" line="333"/>
        <source>Now opening the color manager.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.cpp" line="336"/>
        <source>Color Merging</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.cpp" line="487"/>
        <source>Unable to find the requested color. You have probably selected black, gray or white. There is no way to process this color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="15"/>
        <source>Color Wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="47"/>
        <source>Click the wheel to get the base color. Its color model depends on the chosen tab.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="54"/>
        <source>Result Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="311"/>
        <source>CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="532"/>
        <source>RGB</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="718"/>
        <source>HSV</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="108"/>
        <source>Colors of your chosen color scheme.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="118"/>
        <source>Color Scheme Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="144"/>
        <source>Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="154"/>
        <source>Difference between the selected value and the counted ones. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="169"/>
        <source>Select one of the methods to create a color scheme. Refer to documentation for more information.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="203"/>
        <source>Merge created colors into the document colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="206"/>
        <source>&amp;Merge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="209"/>
        <source>Alt+M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="216"/>
        <source>Replace created colors in the document colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="219"/>
        <source>&amp;Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="222"/>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="229"/>
        <source>Leave colors untouched</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="232"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="235"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="244"/>
        <source>Preview:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="268"/>
        <source>Sample color scheme.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="287"/>
        <source>Simulate common vision defects here. Select type of the defect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="294"/>
        <source>Vision Defect Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="331"/>
        <source>C:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="431"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="361"/>
        <source>M:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="391"/>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="421"/>
        <source>K:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="827"/>
        <source>RGB:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="674"/>
        <source>HSV:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="560"/>
        <source>R:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="587"/>
        <source>G:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="614"/>
        <source>B:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="863"/>
        <source>CMYK:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="746"/>
        <source>H:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="773"/>
        <source>S:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="800"/>
        <source>V:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/cwdialog.ui" line="907"/>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharSelect</name>
    <message>
        <location filename="../charselect.cpp" line="56"/>
        <source>Font:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="64"/>
        <source>Character Class:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="89"/>
        <source>&amp;Insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="90"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="137"/>
        <source>Insert the characters at the cursor in the text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="138"/>
        <source>Delete the current selection(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="139"/>
        <source>You can see a thumbnail if you press and hold down the right mouse button. The Insert key inserts a Glyph into the Selection below and the Delete key removes the last inserted one</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="330"/>
        <source>Full Character Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="335"/>
        <source>Basic Latin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="341"/>
        <source>Latin-1 Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="347"/>
        <source>Latin Extended-A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="353"/>
        <source>Latin Extended-B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="359"/>
        <source>General Punctuation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="365"/>
        <source>Super- and Subscripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="371"/>
        <source>Currency Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="377"/>
        <source>Letterlike Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="383"/>
        <source>Number Forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="389"/>
        <source>Arrows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="395"/>
        <source>Mathematical Operators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="401"/>
        <source>Box Drawing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="407"/>
        <source>Block Elements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="413"/>
        <source>Geometric Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="419"/>
        <source>Miscellaneous Symbols</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="425"/>
        <source>Dingbats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="431"/>
        <source>Small Form Variants</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="437"/>
        <source>Ligatures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="443"/>
        <source>Specials</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="449"/>
        <source>Greek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="455"/>
        <source>Greek Extended</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="461"/>
        <source>Cyrillic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="467"/>
        <source>Cyrillic Supplement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="473"/>
        <source>Arabic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="479"/>
        <source>Arabic Extended A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="485"/>
        <source>Arabic Extended B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="491"/>
        <source>Hebrew</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="38"/>
        <source>Scribus Char Palette (*.ucp);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="47"/>
        <source>Enhanced Palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="98"/>
        <source>Quick Palette</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="105"/>
        <source>Hide Enhanced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="648"/>
        <source>Choose a filename to open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="713"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="675"/>
        <source>Error reading file %1 - file is corrupted propably.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="694"/>
        <source>Choose a filename to save under</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="714"/>
        <source>Cannot write file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="722"/>
        <source>Clean the Palette?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="723"/>
        <source>You will clean all characters from this palette. Are you sure?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../charselect.cpp" line="37"/>
        <source>Character Palette</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharStyleComboBox</name>
    <message>
        <location filename="../spalette.cpp" line="117"/>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CharTableView</name>
    <message>
        <location filename="../chartableview.cpp" line="23"/>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CheckDocument</name>
    <message>
        <location filename="../checkDocument.cpp" line="248"/>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="252"/>
        <source>No Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="253"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="274"/>
        <source>Transparency used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="277"/>
        <source>Blendmode used</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="284"/>
        <source>Layer &quot;%1&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="628"/>
        <source>Page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="796"/>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="802"/>
        <source>Problems found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="823"/>
        <source>&amp;Ignore Errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="816"/>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="818"/>
        <source>Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="819"/>
        <source>Problems</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="822"/>
        <source>Current Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="824"/>
        <source>Check again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="826"/>
        <source>Glyphs missing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="827"/>
        <source>Text overflow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="828"/>
        <source>Object is not on a Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="829"/>
        <source>Missing Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="830"/>
        <source>Image resolution below %1 DPI, currently %2 x %3 DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="831"/>
        <source>Image resolution above %1 DPI, currently %2 x %3 DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="832"/>
        <source>Object has transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="833"/>
        <source>Object is a PDF Annotation or Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="834"/>
        <source>Object is a placed PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="835"/>
        <source>Image is GIF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../checkDocument.cpp" line="836"/>
        <source>Annotation uses a non TrueType font</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ChooseStyles</name>
</context>
<context>
    <name>CollectForOutput</name>
    <message>
        <location filename="../collect4output.cpp" line="52"/>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../collect4output.cpp" line="68"/>
        <source>Collecting...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../collect4output.cpp" line="73"/>
        <source>Cannot collect all files for output for file:
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../collect4output.cpp" line="87"/>
        <source>Cannot collect the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorManager</name>
    <message>
        <location filename="../colorm.cpp" line="49"/>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="75"/>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="77"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="79"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="83"/>
        <source>D&amp;uplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="86"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="91"/>
        <source>&amp;Remove Unused</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="98"/>
        <source>Color Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="104"/>
        <source>Current Color Set:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="147"/>
        <source>&amp;Save Color Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="166"/>
        <source>Choose a color set to load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="167"/>
        <source>Save the current color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="172"/>
        <source>Remove unused colors from current document&apos;s color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="174"/>
        <source>Import colors to the current set from an existing document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="175"/>
        <source>Create a new color within the current set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="176"/>
        <source>Edit the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="177"/>
        <source>Make a copy of the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="178"/>
        <source>Delete the currently selected color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="179"/>
        <source>Make the current colorset the default color set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="180"/>
        <source>If color management is enabled, a triangle warning indicator is a warning the the color maybe outside of the color gamut of the current printer profile selected.What this means is the color may not print exactly as indicated on screen. Spot colors are indicated by a red circle. Registration colors will have a registration mark next to the color. More hints about gamut warnings are in the online help under Color Management.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="197"/>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="197"/>
        <source>Choose a Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="559"/>
        <source>Copy of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="570"/>
        <source>New Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="427"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;Other Files (*.eps *.epsi *.ps *.ai);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="543"/>
        <source>Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="427"/>
        <source>Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../colorm.cpp" line="543"/>
        <source>The file %1 does not contain colors which can be imported.
If the file was a PostScript-based, try to import it with File -&amp;gt; Import. 
Not all files have DSC conformant comments where the color descriptions are located.
 This prevents importing colors from some files.
See the Edit Colors section of the documentation for more details.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorWheel</name>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="135"/>
        <source>Monochromatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="136"/>
        <source>Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="220"/>
        <source>Complementary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="138"/>
        <source>Split Complementary</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="139"/>
        <source>Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="140"/>
        <source>Tetradic (Double Complementary)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="40"/>
        <source>Base Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="202"/>
        <source>Monochromatic Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="205"/>
        <source>Monochromatic Dark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="212"/>
        <source>1st. Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="213"/>
        <source>2nd. Analogous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="227"/>
        <source>1st. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="228"/>
        <source>2nd. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="229"/>
        <source>3rd. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="230"/>
        <source>4th. Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="237"/>
        <source>1st. Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="238"/>
        <source>2nd. Triadic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="245"/>
        <source>1st. Tetradic (base opposite)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="246"/>
        <source>2nd. Tetradic (angle)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheelwidget.cpp" line="247"/>
        <source>3rd. Tetradic (angle opposite)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ColorWheelPlugin</name>
    <message>
        <location filename="../plugins/colorwheel/colorwheel.cpp" line="47"/>
        <source>&amp;Color Wheel...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheel.cpp" line="63"/>
        <source>Color setting helper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheel.cpp" line="64"/>
        <source>Color selector with color theory included.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CommonStrings</name>
    <message>
        <location filename="../commonstrings.cpp" line="186"/>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="189"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="193"/>
        <source>None</source>
        <comment>color name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="196"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="199"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="202"/>
        <source>Warning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="204"/>
        <source>Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="205"/>
        <source>No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="206"/>
        <source>&amp;Yes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="207"/>
        <source>&amp;No</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="210"/>
        <source>Custom</source>
        <comment>CommonStrings, custom page size</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="216"/>
        <source>Single Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="217"/>
        <source>Double Sided</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="218"/>
        <source>3-Fold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="219"/>
        <source>4-Fold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="247"/>
        <source>Monday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="248"/>
        <source>Tuesday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="249"/>
        <source>Wednesday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="250"/>
        <source>Thursday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="251"/>
        <source>Friday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="252"/>
        <source>Saturday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="253"/>
        <source>Sunday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="254"/>
        <source>January</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="255"/>
        <source>February</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="256"/>
        <source>March</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="257"/>
        <source>April</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="258"/>
        <source>May</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="259"/>
        <source>June</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="260"/>
        <source>July</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="261"/>
        <source>August</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="262"/>
        <source>September</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="263"/>
        <source>October</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="264"/>
        <source>November</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="265"/>
        <source>December</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="226"/>
        <source>Left Page</source>
        <comment>Left page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="227"/>
        <source>Middle</source>
        <comment>Middle page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="228"/>
        <source>Middle Left</source>
        <comment>Middle Left page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="229"/>
        <source>Middle Right</source>
        <comment>Middle Right page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="230"/>
        <source>Right Page</source>
        <comment>Right page location</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="233"/>
        <source>Normal</source>
        <comment>Default single master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="235"/>
        <source>Normal Left</source>
        <comment>Default left master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="237"/>
        <source>Normal Middle</source>
        <comment>Default middle master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="239"/>
        <source>Normal Right</source>
        <comment>Default right master page</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="273"/>
        <source>Normal Vision</source>
        <comment>Color Blindness - Normal Vision</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="274"/>
        <source>Protanopia (Red)</source>
        <comment>Color Blindness - Red Color Blind</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="275"/>
        <source>Deuteranopia (Green)</source>
        <comment>Color Blindness - Greed Color Blind</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="276"/>
        <source>Tritanopia (Blue)</source>
        <comment>Color Blindness - Blue Color Blind</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="277"/>
        <source>Full Color Blindness</source>
        <comment>Color Blindness - Full Color Blindness</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="279"/>
        <source>Custom: </source>
        <comment>Custom Tab Fill Option</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="192"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="241"/>
        <source>Solid Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="242"/>
        <source>Dashed Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="243"/>
        <source>Dotted Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="244"/>
        <source>Dash Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="245"/>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="281"/>
        <source>None</source>
        <comment>Optical Margin Setting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="282"/>
        <source>Left Protruding</source>
        <comment>Optical Margin Setting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="283"/>
        <source>Right Protruding</source>
        <comment>Optical Margin Setting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="284"/>
        <source>Left Hanging Punctuation</source>
        <comment>Optical Margin Setting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="285"/>
        <source>Right Hanging Punctuation</source>
        <comment>Optical Margin Setting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="286"/>
        <source>Default</source>
        <comment>Optical Margin Setting</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="289"/>
        <source>Min. Word Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="290"/>
        <source>Max. Word Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="293"/>
        <source>Min. Glyph Extension</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="294"/>
        <source>Max. Glyph Extension</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="267"/>
        <source>RGB</source>
        <comment>Colorspace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="268"/>
        <source>CMYK</source>
        <comment>Colorspace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="269"/>
        <source>Grayscale</source>
        <comment>Colorspace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="270"/>
        <source>Duotone</source>
        <comment>Colorspace</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="271"/>
        <source>Unknown</source>
        <comment>Colorspace (Unknown)</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../commonstrings.cpp" line="297"/>
        <source>PostScript</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Cpalette</name>
    <message>
        <location filename="../cpalette.cpp" line="853"/>
        <source>Transparency Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="812"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="817"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="820"/>
        <source>Offsets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="821"/>
        <source>X:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="823"/>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="825"/>
        <source>Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="826"/>
        <source>X-Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="828"/>
        <source>Y-Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="830"/>
        <source>Rotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="831"/>
        <source>Angle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="833"/>
        <source>Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="834"/>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="835"/>
        <source>X1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="836"/>
        <source>Y1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="837"/>
        <source>X2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="838"/>
        <source>Y2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="839"/>
        <source>Move Vector</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="856"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="844"/>
        <source>Horizontal Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="845"/>
        <source>Vertical Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="846"/>
        <source>Diagonal Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="847"/>
        <source>Cross Diagonal Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="848"/>
        <source>Radial Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="849"/>
        <source>Free linear Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="850"/>
        <source>Free radial Gradient</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="851"/>
        <source>Pattern</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="854"/>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="857"/>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="858"/>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="859"/>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="860"/>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="861"/>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="862"/>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="863"/>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="864"/>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="865"/>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="866"/>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="867"/>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="868"/>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="869"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="870"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="871"/>
        <source>Luminosity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="873"/>
        <source>Edit Line Color Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="874"/>
        <source>Edit Fill Color Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="875"/>
        <source>Saturation of color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="876"/>
        <source>Normal or gradient fill method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="877"/>
        <source>Set the transparency for the color selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cpalette.cpp" line="878"/>
        <source>Move the start of the gradient vector with the left mouse button pressed and move the end of the gradient vector with the right mouse button pressed</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CreateRange</name>
    <message>
        <location filename="../createrange.ui" line="13"/>
        <source>Create Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="33"/>
        <source>Number of Pages in Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="43"/>
        <source>Doc Page Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="91"/>
        <source>Basic Range Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="103"/>
        <source>Range of Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="115"/>
        <source>De&amp;lete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="118"/>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="141"/>
        <source>Move &amp;Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="144"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="151"/>
        <source>Move &amp;Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="154"/>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="173"/>
        <source>Add a Range of Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="185"/>
        <source>Consecutive Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="195"/>
        <source>Even Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="202"/>
        <source>From:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="234"/>
        <source>To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="268"/>
        <source>&amp;Add To Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="271"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="296"/>
        <source>Odd Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="306"/>
        <source>Comma Separated List</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="317"/>
        <source>Advanced Reordering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="361"/>
        <source>Page Order</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="371"/>
        <source>Sample Page Order:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="400"/>
        <source>Page Group Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="438"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="441"/>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="448"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../createrange.ui" line="451"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CsvDialog</name>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="27"/>
        <source>CSV Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="37"/>
        <source>Field delimiter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="89"/>
        <source>(TAB)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="53"/>
        <source>Value delimiter:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="59"/>
        <source>None</source>
        <comment>delimiter</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="68"/>
        <source>First row is a header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="76"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvdia.cpp" line="79"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CupsOptions</name>
    <message>
        <location filename="../cupsoptions.cpp" line="52"/>
        <source>Printer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="143"/>
        <source>Page Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="147"/>
        <source>All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="141"/>
        <source>Even Pages only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="142"/>
        <source>Odd Pages only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="160"/>
        <source>Mirror</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="177"/>
        <source>Orientation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="181"/>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="175"/>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="197"/>
        <source>N-Up Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="201"/>
        <source>Page per Sheet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="196"/>
        <source>Pages per Sheet</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="63"/>
        <source>Option</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="64"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../cupsoptions.cpp" line="224"/>
        <source>This panel displays various CUPS options when printing. The exact parameters available will depend on your printer driver. You can confirm CUPS support by selecting Help &gt; About. Look for the listings: C-C-T These equate to C=CUPS C=littlecms T=TIFF support. Missing library support is indicated by a *</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CurveWidget</name>
    <message>
        <location filename="../curvewidget.cpp" line="433"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="468"/>
        <source>Curve Files (*.scu);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="468"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="502"/>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="522"/>
        <source>Inverts the curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="523"/>
        <source>Resets the curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="524"/>
        <source>Switches between linear and cubic interpolation of the curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="525"/>
        <source>Loads a curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../curvewidget.cpp" line="526"/>
        <source>Saves this curve</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CustomFDialog</name>
    <message>
        <location filename="../customfdialog.cpp" line="332"/>
        <source>&amp;Compress File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="311"/>
        <source>&amp;Include Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="313"/>
        <source>&amp;Include ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="352"/>
        <source>Encoding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="283"/>
        <source>Show Preview</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DeferredTask</name>
    <message>
        <location filename="../deferredtask.cpp" line="82"/>
        <source>Cancelled by user</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelColor</name>
    <message>
        <location filename="../dcolor.cpp" line="30"/>
        <source>Delete Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../dcolor.cpp" line="38"/>
        <source>Delete Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../dcolor.cpp" line="47"/>
        <source>Replace With:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelPages</name>
    <message>
        <location filename="../delpages.cpp" line="18"/>
        <source>Delete Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../delpages.cpp" line="27"/>
        <source>Delete From:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../delpages.cpp" line="33"/>
        <source>to:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DelStyle</name>
</context>
<context>
    <name>DocIm</name>
    <message>
        <location filename="../plugins/gettext/docim/docim.cpp" line="171"/>
        <source>Importing failed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/docim/docim.cpp" line="172"/>
        <source>Importing Word document failed 
%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocInfos</name>
    <message>
        <location filename="../docinfo.cpp" line="31"/>
        <source>Document Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="40"/>
        <source>&amp;Title:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="46"/>
        <source>&amp;Author:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="52"/>
        <source>&amp;Keywords:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="59"/>
        <source>Descri&amp;ption:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="71"/>
        <source>P&amp;ublisher:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="77"/>
        <source>&amp;Contributors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="84"/>
        <source>Dat&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="90"/>
        <source>T&amp;ype:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="96"/>
        <source>F&amp;ormat:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="102"/>
        <source>Identi&amp;fier:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="108"/>
        <source>&amp;Source:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="114"/>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="120"/>
        <source>&amp;Relation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="126"/>
        <source>Co&amp;verage:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="132"/>
        <source>Ri&amp;ghts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="138"/>
        <source>Documen&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="139"/>
        <source>Further &amp;Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="145"/>
        <source>The person or organisation primarily responsible for making the content of the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="146"/>
        <source>A name given to the document. This field can be embedded in the Scribus document for reference, as well as in the metadata of a PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="147"/>
        <source>An account of the content of the document. This field is for a brief description or abstract of the document. It is embedded in the PDF on export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="148"/>
        <source>The topic of the content of the document. This field is for document keywords you wish to embed in a PDF, to assist searches and indexing of PDF files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="149"/>
        <source>A person or organisation responsible for making the document available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="150"/>
        <source>A person or organisation responsible for making contributions to the content of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="151"/>
        <source>A date associated with an event in the life cycle of the document, in YYYY-MM-DD format, as per ISO 8601</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="152"/>
        <source>The nature or genre of the content of the document, eg. categories, functions, genres, etc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="153"/>
        <source>The physical or digital manifestation of the document. Media type and dimensions would be worth noting. RFC2045,RFC2046 for MIME types are also useful here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="154"/>
        <source>An unambiguous reference to the document within a given context such as ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="155"/>
        <source>A reference to a document from which the present document is derived, eg. ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="156"/>
        <source>The language in which the content of the document is written, usually a ISO-639 language code optionally suffixed with a hypen and an ISO-3166 country code, eg. en-GB, fr-CH</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="157"/>
        <source>A reference to a related document, possibly using a formal identifier such as a ISBN or URI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="158"/>
        <source>The extent or scope of the content of the document, possibly including location, time and jurisdiction ranges</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docinfo.cpp" line="159"/>
        <source>Information about rights held in and over the document, eg. copyright, patent or trademark</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocSections</name>
    <message>
        <location filename="../docsections.cpp" line="61"/>
        <source>Add a page numbering section to the document. The new section will be added after the currently selected section.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="62"/>
        <source>Delete the currently selected section.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="68"/>
        <source>&lt;b&gt;Name:&lt;/b&gt; Optional name for section eg. Index&lt;br/&gt;&lt;b&gt;Shown:&lt;/b&gt; Select to show the page numbers in this section if there is one or more text frames setup to do so.&lt;br/&gt;&lt;b&gt;From:&lt;/b&gt; The page index for this section to start at.&lt;br/&gt;&lt;b&gt;To:&lt;/b&gt; The page index for this section to stop at.&lt;br/&gt;&lt;b&gt;Style:&lt;/b&gt; Select the page number style to be used.&lt;br/&gt;&lt;b&gt;Start:&lt;/b&gt; The index within the Style&apos;s range to star at. Eg. If Start=2 and Style=a,b,c, ..., the numbers will begin at b. For the first section in the document this replaces the older First Page Number in the new file window.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="76"/>
        <source>1, 2, 3, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="76"/>
        <source>i, ii, iii, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="76"/>
        <source>I, II, III, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="76"/>
        <source>a, b, c, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="76"/>
        <source>A, B, C, ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="190"/>
        <source>Page Number Out Of Bounds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.cpp" line="190"/>
        <source>The value you have entered is outside the range of page numbers in the current document (%1-%2).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="13"/>
        <source>Document Sections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="83"/>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="86"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="93"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="96"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="32"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="37"/>
        <source>Shown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="42"/>
        <source>From</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="47"/>
        <source>To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="52"/>
        <source>Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docsections.ui" line="57"/>
        <source>Start</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>DocumentItemAttributes</name>
    <message>
        <location filename="../docitemattrprefs.cpp" line="17"/>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="17"/>
        <source>Relates To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="17"/>
        <source>Is Parent Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="17"/>
        <source>Is Child Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="19"/>
        <source>None</source>
        <comment>auto add</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="19"/>
        <source>Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="19"/>
        <source>Image Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="21"/>
        <source>None</source>
        <comment>types</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="21"/>
        <source>Boolean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="21"/>
        <source>Integer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="21"/>
        <source>Real Number</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.cpp" line="21"/>
        <source>String</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="19"/>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="82"/>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="85"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="92"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="95"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="102"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="105"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="112"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="115"/>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="26"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="31"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="36"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="41"/>
        <source>Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="46"/>
        <source>Relationship</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="51"/>
        <source>Relationship To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../docitemattrprefs.ui" line="56"/>
        <source>Auto Add To</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Druck</name>
    <message>
        <location filename="../druck.cpp" line="66"/>
        <source>Setup Printer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="73"/>
        <source>Print Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="796"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="114"/>
        <source>&amp;Options...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="126"/>
        <source>&amp;File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="131"/>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="138"/>
        <source>A&amp;lternative Printer Command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="147"/>
        <source>Co&amp;mmand:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="154"/>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="159"/>
        <source>Print &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="633"/>
        <source>Print Current Pa&amp;ge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="163"/>
        <source>Print &amp;Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="183"/>
        <source>N&amp;umber of Copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="581"/>
        <source>Print Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="195"/>
        <source>Print Separations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="199"/>
        <source>Print in Color if Available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="200"/>
        <source>Print in Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="821"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="820"/>
        <source>Cyan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="819"/>
        <source>Magenta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="818"/>
        <source>Yellow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="817"/>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="217"/>
        <source>PostScript Level 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="218"/>
        <source>PostScript Level 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="219"/>
        <source>PostScript Level 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="222"/>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="228"/>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="234"/>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="237"/>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="240"/>
        <source>Set Media Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="242"/>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="246"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="252"/>
        <source>Apply Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="255"/>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="258"/>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="263"/>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="267"/>
        <source>Advanced Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="344"/>
        <source>Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="349"/>
        <source>&amp;Print</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="373"/>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="376"/>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="377"/>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="378"/>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="379"/>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="380"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="381"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="383"/>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="384"/>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="569"/>
        <source>Failed to retrieve printer settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="619"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="619"/>
        <source>PostScript Files (*.ps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="274"/>
        <source>Printer Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="279"/>
        <source>Crop Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="281"/>
        <source>Bleed Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="283"/>
        <source>Registration Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="285"/>
        <source>Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="288"/>
        <source>Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="293"/>
        <source>Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="300"/>
        <source>Bleed Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="306"/>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="311"/>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="316"/>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="321"/>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="325"/>
        <source>Use Document Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="329"/>
        <source>Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="332"/>
        <source>Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="333"/>
        <source>Outside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="390"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="391"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="392"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="393"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="385"/>
        <source>This creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="386"/>
        <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="387"/>
        <source>Add registration marks which are added to each separation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="388"/>
        <source>Add color calibration bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="389"/>
        <source>Indicate the distance offset for the registration marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../druck.cpp" line="394"/>
        <source>Use the existing bleed settings from the document preferences</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EPSPlug</name>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="73"/>
        <source>Analyzing PostScript:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="725"/>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="499"/>
        <source>Importing File:
%1
failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="500"/>
        <source>Fatal Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="505"/>
        <source>Generating Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="854"/>
        <source>Converting of %1 images failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="855"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importps.cpp" line="70"/>
        <source>Importing: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EditStyle</name>
</context>
<context>
    <name>Editor</name>
    <message>
        <location filename="../editor.cpp" line="30"/>
        <source>Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="36"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="39"/>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="41"/>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="43"/>
        <source>&amp;Save and Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="45"/>
        <source>&amp;Exit without Saving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="47"/>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="50"/>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="52"/>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="55"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="58"/>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="61"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="63"/>
        <source>&amp;Get Field Names</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="65"/>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="72"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="127"/>
        <source>JavaScripts (*.js);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="37"/>
        <source>Ctrl+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="48"/>
        <source>Ctrl+Z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="53"/>
        <source>Ctrl+X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="56"/>
        <source>Ctrl+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../editor.cpp" line="59"/>
        <source>Ctrl-V</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EffectsDialog</name>
    <message>
        <location filename="../effectsdialog.cpp" line="41"/>
        <source>Image Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="78"/>
        <source>Options:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="95"/>
        <source>Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="106"/>
        <source>Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="122"/>
        <source>Brightness:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="144"/>
        <source>Contrast:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="195"/>
        <source>Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="177"/>
        <source>Value:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="213"/>
        <source>Posterize:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="348"/>
        <source>Color 1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="368"/>
        <source>Color 2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="388"/>
        <source>Color 3:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="408"/>
        <source>Color 4:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="497"/>
        <source>Available Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1383"/>
        <source>Blur</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1361"/>
        <source>Brightness</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1352"/>
        <source>Colorize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1402"/>
        <source>Duotone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1438"/>
        <source>Tritone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1489"/>
        <source>Quadtone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1367"/>
        <source>Contrast</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="970"/>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1555"/>
        <source>Curves</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="972"/>
        <source>Invert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1396"/>
        <source>Posterize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="1373"/>
        <source>Sharpen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="479"/>
        <source>&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="483"/>
        <source>&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="494"/>
        <source>Effects in use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="608"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../effectsdialog.cpp" line="612"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExportBitmap</name>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="183"/>
        <source>File exists. Overwrite?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="184"/>
        <source>exists already. Overwrite?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExportForm</name>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="68"/>
        <source>Choose a Export Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="13"/>
        <source>Export as Image(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="153"/>
        <source>&amp;Export to Directory:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="166"/>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="25"/>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="54"/>
        <source>Image &amp;Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="64"/>
        <source>&amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="74"/>
        <source>&amp;Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="84"/>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="126"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="110"/>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="175"/>
        <source>Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="197"/>
        <source>&amp;Current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="224"/>
        <source>&amp;All pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="217"/>
        <source>&amp;Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="44"/>
        <source>Image size in Pixels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="105"/>
        <source>Export a range of pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="106"/>
        <source>Insert a comma separated list of tokens where
a token can be * for all the pages, 1-5 for
a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="107"/>
        <source>Export all pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="108"/>
        <source>Export only the current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="109"/>
        <source>Resolution of the Images
Use 72 dpi for Images intended for the Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="110"/>
        <source>Size of the images. 100% for no changes, 200% for two times larger etc.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="111"/>
        <source>The quality of your images - 100% is the best, 1% the lowest quality</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="112"/>
        <source>Available export formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="113"/>
        <source>The output directory - the place to store your images.
Name of the export file will be &apos;documentname-pagenumber.filetype&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/dialog.cpp" line="114"/>
        <source>Change the output directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/exportform.ui" line="37"/>
        <source>TextLabel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExtImageProps</name>
    <message>
        <location filename="../extimageprops.cpp" line="35"/>
        <source>Extended Image Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="95"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="96"/>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="97"/>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="98"/>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="99"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="100"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="101"/>
        <source>Luminosity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="102"/>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="103"/>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="104"/>
        <source>Dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="105"/>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="106"/>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="107"/>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="108"/>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="109"/>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="110"/>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="111"/>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="91"/>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="114"/>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="120"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="126"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="207"/>
        <source>Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="260"/>
        <source>Don&apos;t use any Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../extimageprops.cpp" line="262"/>
        <source>Paths</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FDialogPreview</name>
    <message>
        <location filename="../customfdialog.cpp" line="191"/>
        <source>Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="192"/>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="192"/>
        <source>DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="226"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="198"/>
        <source>Colorspace:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="218"/>
        <source>Title:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="221"/>
        <source>No Title</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="223"/>
        <source>Author:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../customfdialog.cpp" line="228"/>
        <source>Scribus Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FileLoader</name>
    <message>
        <location filename="../fileloader.cpp" line="597"/>
        <source>Some fonts used by this document have been substituted:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fileloader.cpp" line="601"/>
        <source> was replaced by: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontComboH</name>
    <message>
        <location filename="../fontcombo.cpp" line="136"/>
        <source>Face:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontcombo.cpp" line="137"/>
        <source>Style:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPrefs</name>
    <message>
        <location filename="../fontprefs.cpp" line="47"/>
        <source>Available Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="47"/>
        <source>Font Substitutions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="47"/>
        <source>Additional Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="80"/>
        <source>&amp;Available Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="88"/>
        <source>Font Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="89"/>
        <source>Replacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="104"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="110"/>
        <source>Font &amp;Substitutions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="129"/>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="131"/>
        <source>A&amp;dd...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="133"/>
        <source>&amp;Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="157"/>
        <source>Additional &amp;Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="300"/>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="152"/>
        <source>Font search paths can only be set in File &gt; Preferences, and only when there is no document currently open. Close any open documents, then use File &gt; Preferences &gt; Fonts to change the font search path.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="58"/>
        <source>Use Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="59"/>
        <source>Embed in PostScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="60"/>
        <source>Subset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontprefs.cpp" line="61"/>
        <source>Path to Font File</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreview</name>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="106"/>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="164"/>
        <source>Append selected font into Style, Font menu</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="165"/>
        <source>Leave preview</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="166"/>
        <source>Typing the text here provides quick searching in the font names. Searching is case insensitive. You can provide a common wild cards (*, ?, [...]) in your phrase. Examples: t* will list all fonts starting with t or T. *bold* will list all fonts with word bold, bolder etc. in the name.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="167"/>
        <source>Start searching</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="168"/>
        <source>Size of the selected font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="92"/>
        <source>User</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="93"/>
        <source>System</source>
        <comment>font preview</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="43"/>
        <source>Font Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="44"/>
        <source>Doc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="45"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="46"/>
        <source>Subset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.cpp" line="47"/>
        <source>Access</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="13"/>
        <source>Fonts Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="41"/>
        <source>&amp;Quick Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="57"/>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="60"/>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="125"/>
        <source>&amp;Font Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="148"/>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="158"/>
        <source>Sample text to display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="165"/>
        <source>Se&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="168"/>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="175"/>
        <source>Reset the text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="209"/>
        <source>&amp;Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="212"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="219"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreview.ui" line="222"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontPreviewPlugin</name>
    <message>
        <location filename="../plugins/fontpreview/fontpreviewplugin.cpp" line="49"/>
        <source>&amp;Font Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreviewplugin.cpp" line="65"/>
        <source>Font Preview dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreviewplugin.cpp" line="66"/>
        <source>Sorting, searching and browsing available fonts.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>FontReplaceDialog</name>
    <message>
        <location filename="../fontreplacedialog.cpp" line="29"/>
        <source>Font Substitution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontreplacedialog.cpp" line="39"/>
        <source>This document contains some fonts that are not installed on your system, please choose a suitable replacement for them. Cancel will stop the document from loading.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontreplacedialog.cpp" line="44"/>
        <source>Original Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontreplacedialog.cpp" line="45"/>
        <source>Substitution Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontreplacedialog.cpp" line="71"/>
        <source>Make these substitutions permanent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontreplacedialog.cpp" line="82"/>
        <source>Cancels these font substitutions and stops loading the document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontreplacedialog.cpp" line="83"/>
        <source>Enabling this tells Scribus to use these replacements for missing fonts permanently in all future layouts. This can be reverted or changed in Edit &gt; Preferences &gt; Fonts.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fontreplacedialog.cpp" line="84"/>
        <source>If you select OK, then save, these substitutions are made permanent in the document.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GradientEditor</name>
    <message>
        <location filename="../gradienteditor.cpp" line="312"/>
        <source>Add, change or remove color stops here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gradienteditor.cpp" line="313"/>
        <source>Position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gradienteditor.cpp" line="314"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GuideManager</name>
    <message>
        <location filename="../guidemanager.cpp" line="229"/>
        <source>Edit Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.cpp" line="257"/>
        <source>Enter a position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.cpp" line="256"/>
        <source>New Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="28"/>
        <source>&amp;Single</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="159"/>
        <source>Horizontals</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="99"/>
        <source>Guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="60"/>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="407"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="70"/>
        <source>D&amp;elete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="358"/>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="265"/>
        <source>Verticals</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="107"/>
        <source>A&amp;dd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="110"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="117"/>
        <source>De&amp;lete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="135"/>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="132"/>
        <source>&amp;Lock Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="371"/>
        <source>Appl&amp;y to All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="374"/>
        <source>Alt+Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="153"/>
        <source>&amp;Column/Row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="168"/>
        <source>&amp;Number:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="191"/>
        <source>U&amp;se Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="194"/>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="323"/>
        <source>Refer To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="332"/>
        <source>&amp;Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="394"/>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="345"/>
        <source>M&amp;argins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="355"/>
        <source>S&amp;election</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="274"/>
        <source>Nu&amp;mber:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="297"/>
        <source>Use &amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="300"/>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="382"/>
        <source>&amp;Misc</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="388"/>
        <source>Delete all guides from the current page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="391"/>
        <source>Delete Guides from Current &amp;Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="401"/>
        <source>Delete all guides from the current document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../guidemanager.ui" line="404"/>
        <source>Delete Guides from &amp;All Pages</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HelpBrowser</name>
    <message>
        <location filename="../ui/helpbrowser.ui" line="31"/>
        <source>&amp;Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="60"/>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="45"/>
        <source>Se&amp;arch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="96"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="178"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="79"/>
        <source>Book&amp;marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="148"/>
        <source>&amp;Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="220"/>
        <source>E&amp;xit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="212"/>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="158"/>
        <source>&amp;Find...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="222"/>
        <source>Find &amp;Next</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="223"/>
        <source>Find &amp;Previous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="213"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="224"/>
        <source>&amp;Add Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="183"/>
        <source>D&amp;elete All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="214"/>
        <source>&amp;Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="268"/>
        <source>Scribus Online Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="269"/>
        <source>Sorry, no manual available! Please see: http://docs.scribus.net for updated docs
and www.scribus.net for downloads.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="328"/>
        <source>Find</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="328"/>
        <source>Search Term:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="360"/>
        <source>New Bookmark</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../helpbrowser.cpp" line="360"/>
        <source>New Bookmark&apos;s Title:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="137"/>
        <source>Scribus Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="53"/>
        <source>Searching is case insensitive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="86"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="153"/>
        <source>&amp;Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="163"/>
        <source>Find &amp;Next...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="168"/>
        <source>Find &amp;Previous...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/helpbrowser.ui" line="173"/>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HelpBrowser2</name>
    <message>
        <location filename="../ui/hb2.ui" line="13"/>
        <source>Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="30"/>
        <source>&amp;Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="84"/>
        <source>1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="49"/>
        <source>Se&amp;arch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="57"/>
        <source>Searching is case insensitive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="64"/>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../ui/hb2.ui" line="77"/>
        <source>Book&amp;marks</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HyAsk</name>
    <message>
        <location filename="../hyask.cpp" line="46"/>
        <source>Possible Hyphenation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hyask.cpp" line="65"/>
        <source>Accept</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hyask.cpp" line="71"/>
        <source>Skip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hyask.cpp" line="76"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>HySettings</name>
    <message>
        <location filename="../hysettings.cpp" line="20"/>
        <source>&amp;Hyphenation Suggestions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="23"/>
        <source>Hyphenate Text Automatically &amp;During Typing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="40"/>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="46"/>
        <source>&amp;Smallest Word:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="52"/>
        <source>Consecutive Hyphenations &amp;Allowed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="56"/>
        <source>A dialog box showing all possible hyphens for each word will show up when you use the Extras, Hyphenate Text option.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="57"/>
        <source>Enables automatic hyphenation of your text while typing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="58"/>
        <source>Length of the smallest word to be hyphenated.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../hysettings.cpp" line="59"/>
        <source>Maximum number of Hyphenations following each other.
A value of 0 means unlimited hyphenations.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ImageInfoDialog</name>
    <message>
        <location filename="../imageinfodialog.cpp" line="24"/>
        <source>Image Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="31"/>
        <source>General Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="35"/>
        <source>Date / Time:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="39"/>
        <source>Has Embedded Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="47"/>
        <source>Profile Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="51"/>
        <source>Has Embedded Paths:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="59"/>
        <source>Has Layers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="70"/>
        <source>EXIF Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="85"/>
        <source>Artist:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="127"/>
        <source>Comment:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="128"/>
        <source>User Comment:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="129"/>
        <source>Camera Model:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="130"/>
        <source>Camera Manufacturer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="136"/>
        <source>Description:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="137"/>
        <source>Copyright:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="138"/>
        <source>Scanner Model:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="139"/>
        <source>Scanner Manufacturer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="131"/>
        <source>Exposure time</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="132"/>
        <source>Aperture:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../imageinfodialog.cpp" line="133"/>
        <source>ISO equiv.:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ImportDialog</name>
    <message>
        <location filename="../smstyleimport.cpp" line="30"/>
        <source>Choose Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="35"/>
        <source>Available Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="40"/>
        <source>Character Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="49"/>
        <source>Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="58"/>
        <source>Line Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="76"/>
        <source>In case of a name clash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="77"/>
        <source>Rename imported style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smstyleimport.cpp" line="79"/>
        <source>Replace existing style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ImportPSPlugin</name>
    <message>
        <location filename="../plugins/psimport/importpsplugin.cpp" line="57"/>
        <source>Import &amp;EPS/PS...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importpsplugin.cpp" line="78"/>
        <source>Imports EPS Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importpsplugin.cpp" line="79"/>
        <source>Imports most EPS files into the current document,
converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importpsplugin.cpp" line="105"/>
        <source>PDF</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsPage</name>
    <message>
        <location filename="../inspage.cpp" line="30"/>
        <source>Insert Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="59"/>
        <source>&amp;Insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="43"/>
        <source>Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="47"/>
        <source>before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="48"/>
        <source>after Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="49"/>
        <source>at End</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="63"/>
        <source>Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="73"/>
        <source>&amp;Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="199"/>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="203"/>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="219"/>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="222"/>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="223"/>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="229"/>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="236"/>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../inspage.cpp" line="240"/>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertAFrame</name>
    <message>
        <location filename="../insertaframe.cpp" line="111"/>
        <source>&lt;b&gt;Insert a text frame&lt;/b&gt;&lt;br/&gt;A text frame allows you to enter any text in a defined position with the formatting you choose. You may select a text file on the Options tab if you want to immediately import a document into the frame. Scribus supports a wide variety of importable format from plain text to OpenOffice.org.&lt;br/&gt;Your text may be edited and formatted on the page directly or in the simple Story Editor.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.cpp" line="115"/>
        <source>&lt;b&gt;Insert an image frame&lt;/b&gt;&lt;br/&gt;An image frame allows you to place an image onto your page. Various image effects may be applied or combined including transparencies, brightness, posterisation that allow retouching or the creation of interesting visual results. Image scaling and shaping is performed with the Properties Palette.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.cpp" line="201"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="13"/>
        <source>Insert A Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="29"/>
        <source>T&amp;ype</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="61"/>
        <source>&amp;Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="68"/>
        <source>&amp;Image Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="97"/>
        <source>&amp;Location</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="109"/>
        <source>Page Placement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="121"/>
        <source>Current Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="128"/>
        <source>All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="606"/>
        <source>...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="178"/>
        <source>Position of Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="190"/>
        <source>Top Left of Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="197"/>
        <source>Top Left of Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="204"/>
        <source>Top Left of Bleed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="257"/>
        <source>X:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="250"/>
        <source>Y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="304"/>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="328"/>
        <source>Same as the Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="335"/>
        <source>Same as the Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="342"/>
        <source>Same as the Bleed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="349"/>
        <source>Same as the Imported Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="395"/>
        <source>Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="402"/>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="449"/>
        <source>&amp;Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="596"/>
        <source>Source Image:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="638"/>
        <source>There are no options for this type of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="507"/>
        <source>Columns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="497"/>
        <source>Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="531"/>
        <source>Link Created Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="546"/>
        <source>Source Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="135"/>
        <source>Range of Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="211"/>
        <source>Custom Position</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertaframe.ui" line="356"/>
        <source>Custom Size</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>InsertTable</name>
    <message>
        <location filename="../insertTable.cpp" line="16"/>
        <source>Insert Table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertTable.cpp" line="29"/>
        <source>Number of rows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../insertTable.cpp" line="30"/>
        <source>Number of columns:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>JavaDocs</name>
    <message>
        <location filename="../javadocs.cpp" line="28"/>
        <source>Edit JavaScripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="47"/>
        <source>&amp;Edit...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="50"/>
        <source>&amp;Add...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="53"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="58"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="72"/>
        <source>Adds a new Script, predefines a function with the same name. If you want to use this script as an &quot;Open Action&quot; script be sure not to change the name of the function.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="78"/>
        <source>&amp;New Script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="79"/>
        <source>New Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../javadocs.cpp" line="124"/>
        <source>Do you really want to delete this script?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LayerPalette</name>
    <message>
        <location filename="../layers.cpp" line="504"/>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="505"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="275"/>
        <source>Delete Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="276"/>
        <source>Do you want to delete all objects on this layer too?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="485"/>
        <source>Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="486"/>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="488"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="489"/>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="490"/>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="491"/>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="492"/>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="493"/>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="494"/>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="495"/>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="496"/>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="497"/>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="498"/>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="499"/>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="500"/>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="501"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="502"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="503"/>
        <source>Luminosity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="506"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="512"/>
        <source>Add a new layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="513"/>
        <source>Duplicates the current layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="514"/>
        <source>Delete layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="515"/>
        <source>Raise layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="516"/>
        <source>Lower layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="517"/>
        <source>Color of the Layer Indicator - Each layer has a color assigned to display on the canvas when layer indicators are enabled. You can double click to edit the color. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="518"/>
        <source>Make Layer Visible - Uncheck to hide the layer from the display </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="519"/>
        <source>Print Layer - Uncheck to disable printing. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="520"/>
        <source>Lock or Unlock Layer - Unchecked is unlocked </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="521"/>
        <source>Text flows around objects in lower Layers - Enabling this forces text frames to flow around other objects, even in layers below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="522"/>
        <source>Outline Mode - Toggles the &apos;wireframe&apos; display of objects to speed the display of very complex objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../layers.cpp" line="523"/>
        <source>Name of the Layer - Double clicking on the name of a layer enabled editing</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineFormate</name>
</context>
<context>
    <name>LineStyleW</name>
    <message>
        <location filename="../smlinestylew.ui" line="184"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestylew.ui" line="208"/>
        <source>Line Width:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LineStyleWidget</name>
    <message>
        <location filename="../smlinestyle.cpp" line="180"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="52"/>
        <source>Flat Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="53"/>
        <source>Square Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="54"/>
        <source>Round Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="56"/>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="57"/>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="58"/>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="70"/>
        <source>Add a new line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="71"/>
        <source>Remove a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="72"/>
        <source>Line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="73"/>
        <source>Line width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="74"/>
        <source>End style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="75"/>
        <source>Join style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="76"/>
        <source>Line color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="77"/>
        <source>Line shade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LoadSavePlugin</name>
    <message>
        <location filename="../loadsaveplugin.cpp" line="81"/>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loadsaveplugin.cpp" line="80"/>
        <source>No File Loader Plugins Found</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>LoremManager</name>
    <message>
        <location filename="../loremipsum.cpp" line="118"/>
        <source>Select Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="183"/>
        <source>Author:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="185"/>
        <source>Get More:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="187"/>
        <source>XML File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="206"/>
        <source>Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="207"/>
        <source>Paragraphs:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="209"/>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="211"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../loremipsum.cpp" line="212"/>
        <source>Standard Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MarginDialog</name>
    <message>
        <location filename="../margindialog.cpp" line="32"/>
        <source>Manage Page Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="40"/>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="45"/>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="61"/>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="64"/>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="65"/>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="72"/>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="79"/>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="83"/>
        <source>Move Objects with their Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="89"/>
        <source>Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="109"/>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="115"/>
        <source>Other Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../margindialog.cpp" line="120"/>
        <source>Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MarginWidget</name>
    <message>
        <location filename="../marginWidget.cpp" line="36"/>
        <source>Preset Layouts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="48"/>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="49"/>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="203"/>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="202"/>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="72"/>
        <source>Apply settings to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="75"/>
        <source>All Document Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="79"/>
        <source>All Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="83"/>
        <source>Apply the margin changes to all existing pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="84"/>
        <source>Apply the margin changes to all existing master pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="95"/>
        <source>Printer Margins...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="97"/>
        <source>Import the margins for the selected page size from the available printers.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="148"/>
        <source>Distance between the top margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="149"/>
        <source>Distance between the bottom margin guide and the edge of the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="202"/>
        <source>&amp;Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="203"/>
        <source>O&amp;utside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="101"/>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="119"/>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="124"/>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="135"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="136"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="137"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="138"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="144"/>
        <source>Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="208"/>
        <source>Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="209"/>
        <source>Outside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="213"/>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="214"/>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="150"/>
        <source>Distance between the left margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="151"/>
        <source>Distance between the right margin guide and the edge of the page. If a double-sided, 3 or 4-fold layout is selected, this margin space can be used to achieve the correct margins for binding</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MasterPagesPalette</name>
    <message>
        <location filename="../muster.cpp" line="38"/>
        <source>Edit Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="78"/>
        <source>Duplicate the selected master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="79"/>
        <source>Delete the selected master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="80"/>
        <source>Add a new master page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="81"/>
        <source>Import master pages from another document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="109"/>
        <source>Do you really want to delete this master page?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="322"/>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="176"/>
        <source>&amp;Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="176"/>
        <source>New Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="273"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="273"/>
        <source>New MasterPage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="273"/>
        <source>New Master Page %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="402"/>
        <source>Unable to Rename Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="402"/>
        <source>The Normal page is not allowed to be renamed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="406"/>
        <source>Rename Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="406"/>
        <source>New Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../muster.cpp" line="174"/>
        <source>Copy #%1 of %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mdup</name>
</context>
<context>
    <name>Measurements</name>
    <message>
        <location filename="../measurements.cpp" line="49"/>
        <source>pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="115"/>
        <source>Distances</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="117"/>
        <source>X1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="118"/>
        <source>Y1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="119"/>
        <source>X2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="120"/>
        <source>Y2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="121"/>
        <source>DX:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="122"/>
        <source>DY:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="123"/>
        <source>Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../measurements.cpp" line="124"/>
        <source>Length:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MergeDoc</name>
    <message>
        <location filename="../mergedoc.cpp" line="38"/>
        <source>Import Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="38"/>
        <source>Import Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="49"/>
        <source>&amp;From Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="52"/>
        <source>Chan&amp;ge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="55"/>
        <source>&amp;Import Page(s):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="59"/>
        <source>&amp;Import Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="72"/>
        <source>Insert a comma separated list of tokens import where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="75"/>
        <source> from 0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="78"/>
        <source>Create Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="82"/>
        <source>Before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="83"/>
        <source>After Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="84"/>
        <source>At End</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="99"/>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="133"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="133"/>
        <source>Documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mergedoc.cpp" line="188"/>
        <source> from %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MissingFont</name>
    <message>
        <location filename="../missing.cpp" line="309"/>
        <source>Missing Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../missing.cpp" line="317"/>
        <source>The Font %1 is not installed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../missing.cpp" line="322"/>
        <source>Use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../missing.cpp" line="336"/>
        <source>instead</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ModeToolBar</name>
    <message>
        <location filename="../werktoolb.cpp" line="39"/>
        <source>Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../werktoolb.cpp" line="130"/>
        <source>Properties...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MovePages</name>
    <message>
        <location filename="../movepage.cpp" line="28"/>
        <source>Move Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="37"/>
        <source>Copy Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="37"/>
        <source>Move Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="46"/>
        <source>To:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="54"/>
        <source>Number of copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="64"/>
        <source>Before Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="65"/>
        <source>After Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="66"/>
        <source>At End</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../movepage.cpp" line="73"/>
        <source>Move Page(s):</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Mpalette</name>
    <message>
        <location filename="../mpalette.cpp" line="4319"/>
        <source>Transparency Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4409"/>
        <source>Fixed Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4410"/>
        <source>Automatic Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4411"/>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="3201"/>
        <source>&amp;X1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="3202"/>
        <source>X&amp;2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="3203"/>
        <source>Y&amp;1:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="3204"/>
        <source>&amp;Y2:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4399"/>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4310"/>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4400"/>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4311"/>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4669"/>
        <source>Distance between columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="2994"/>
        <source>Column width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4501"/>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4181"/>
        <source>Name &quot;%1&quot; isn&apos;t unique.&lt;br/&gt;Please choose another.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4296"/>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4298"/>
        <source>X, Y, &amp;Z</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4299"/>
        <source>&amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4300"/>
        <source>&amp;Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4301"/>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4302"/>
        <source>&amp;Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4303"/>
        <source>&amp;Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4304"/>
        <source>&amp;Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4306"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4307"/>
        <source>Geometry</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4312"/>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4313"/>
        <source>Basepoint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4314"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4317"/>
        <source>Shape:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4318"/>
        <source>&amp;Edit Shape...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4320"/>
        <source>Opacity:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4321"/>
        <source>Blend Mode:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4323"/>
        <source>Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4324"/>
        <source>Darken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4325"/>
        <source>Lighten</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4326"/>
        <source>Multiply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4327"/>
        <source>Screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4328"/>
        <source>Overlay</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4329"/>
        <source>Hard Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4330"/>
        <source>Soft Light</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4331"/>
        <source>Difference</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4332"/>
        <source>Exclusion</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4333"/>
        <source>Color Dodge</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4334"/>
        <source>Color Burn</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4335"/>
        <source>Hue</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4416"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4337"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4338"/>
        <source>R&amp;ound
Corners:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4339"/>
        <source>Distance of Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4340"/>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4343"/>
        <source>Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4344"/>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4347"/>
        <source>To&amp;p:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4348"/>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4349"/>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4350"/>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4351"/>
        <source>T&amp;abulators...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4352"/>
        <source>Path Text Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4358"/>
        <source>Show Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4360"/>
        <source>Start Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4361"/>
        <source>Distance from Curve:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4362"/>
        <source>Fill Rule</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4363"/>
        <source>Even-Odd</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4364"/>
        <source>Non Zero</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4371"/>
        <source>Text &amp;Flow Around Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4372"/>
        <source>Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4373"/>
        <source>Use Frame &amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4374"/>
        <source>Use &amp;Bounding Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4375"/>
        <source>&amp;Use Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4396"/>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4397"/>
        <source>Actual X-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4398"/>
        <source>Actual Y-DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4401"/>
        <source>X-Sc&amp;ale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4402"/>
        <source>Y-Scal&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4403"/>
        <source>Scale &amp;To Frame Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4404"/>
        <source>P&amp;roportional</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4405"/>
        <source>Image Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4406"/>
        <source>Extended Image Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4407"/>
        <source>Input Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4408"/>
        <source>Rendering Intent:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4414"/>
        <source>Perceptual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4415"/>
        <source>Relative Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4417"/>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4421"/>
        <source>Left Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4422"/>
        <source>End Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4424"/>
        <source>&amp;Basepoint:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4425"/>
        <source>T&amp;ype of Line:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4426"/>
        <source>Start Arrow:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4427"/>
        <source>End Arrow:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4437"/>
        <source>Line &amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4438"/>
        <source>Ed&amp;ges:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4441"/>
        <source>Miter Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4442"/>
        <source>Bevel Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4443"/>
        <source>Round Join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4448"/>
        <source>Flat Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4449"/>
        <source>Square Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4450"/>
        <source>Round Cap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4452"/>
        <source>&amp;Endings:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4454"/>
        <source>Cell Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4455"/>
        <source>Line at Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4456"/>
        <source>Line at the Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4457"/>
        <source>Line at the Right </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4458"/>
        <source>Line at Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4460"/>
        <source>Overprinting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4461"/>
        <source>Knockout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4462"/>
        <source>Overprint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4464"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4476"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4596"/>
        <source>Name of selected object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4597"/>
        <source>Horizontal position of current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4598"/>
        <source>Vertical position of current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4599"/>
        <source>Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4600"/>
        <source>Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4601"/>
        <source>Rotation of object at current basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4602"/>
        <source>Point from which measurements or rotation angles are referenced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4603"/>
        <source>Select top left for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4604"/>
        <source>Select top right for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4605"/>
        <source>Select bottom left for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4606"/>
        <source>Select bottom right for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4607"/>
        <source>Select center for basepoint</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4608"/>
        <source>Group the selected objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4609"/>
        <source>Destroys the selected group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4610"/>
        <source>Flip Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4611"/>
        <source>Flip Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4612"/>
        <source>Move one level up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4613"/>
        <source>Move one level down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4614"/>
        <source>Move to front</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4615"/>
        <source>Move to back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4616"/>
        <source>Indicates the level the object is on, 0 means the object is at the bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4617"/>
        <source>Lock or unlock the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4618"/>
        <source>Lock or unlock the size of the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4619"/>
        <source>Enable or disable printing of the object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4626"/>
        <source>Disable text flow from lower frames around object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4627"/>
        <source>Use the frame shape for text flow of text frames below the object.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4628"/>
        <source>Use the bounding box, which is always rectangular, instead of the frame&apos;s shape for text flow of text frames below the object. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4632"/>
        <source>Font of selected text or object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4633"/>
        <source>Font Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4634"/>
        <source>Offset to baseline of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4635"/>
        <source>Scaling width of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4636"/>
        <source>Scaling height of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4637"/>
        <source>Color of text stroke and/or drop shadow, depending which is chosen.If both are chosen, then they share the same color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4638"/>
        <source>Color of selected text. If Outline text decoration is enabled, this color will be the fill color. If Drop Shadow Text is enabled, then this will be the top most color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4639"/>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4640"/>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4641"/>
        <source>Right to Left Writing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4642"/>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4643"/>
        <source>Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4657"/>
        <source>Change settings for left or end points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4658"/>
        <source>Pattern of line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4659"/>
        <source>Thickness of line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4660"/>
        <source>Type of line joins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4661"/>
        <source>Type of line end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4662"/>
        <source>Line style of current object</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4664"/>
        <source>Choose the shape of frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4665"/>
        <source>Edit shape of the frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4666"/>
        <source>Set radius of corner rounding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4667"/>
        <source>Number of columns in text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4668"/>
        <source>Switches between Gap or Column width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4670"/>
        <source>Distance of text from top of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4671"/>
        <source>Distance of text from bottom of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4672"/>
        <source>Distance of text from left of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4673"/>
        <source>Distance of text from right of frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4674"/>
        <source>Edit tab settings of text frame...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4676"/>
        <source>Allow the image to be a different size to the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4677"/>
        <source>Horizontal offset of image within frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4678"/>
        <source>Vertical offset of image within frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4679"/>
        <source>Resize the image horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4680"/>
        <source>Resize the image vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4681"/>
        <source>Keep the X and Y scaling the same</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4682"/>
        <source>Keep the aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4683"/>
        <source>Make the image fit within the size of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4684"/>
        <source>Use image proportions rather than those of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4685"/>
        <source>Source profile of the image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4686"/>
        <source>Rendering intent for the image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="2389"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4629"/>
        <source>When chosen, the contour line can be edited with the Edit Shape Tool on the palette further above. When edited via the shape palette, this becomes a second separate line originally based on the frame&apos;s shape for text flow of text frames below the object. T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4644"/>
        <source>Click and hold down to select the line spacing mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4354"/>
        <source>Default</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4355"/>
        <source>Stair Step</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4356"/>
        <source>Skew</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4357"/>
        <source>Flip Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4359"/>
        <source>Type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4376"/>
        <source>Use Image Clip Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4377"/>
        <source>Paragraph St&amp;yle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4378"/>
        <source>Character St&amp;yle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4379"/>
        <source>Optical Margins:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4390"/>
        <source>Word Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4394"/>
        <source>Min:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4392"/>
        <source>Norm:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4393"/>
        <source>Glyph Extension</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4395"/>
        <source>Max:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4630"/>
        <source>Use the clipping path of the image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4645"/>
        <source>Paragraph style of currently selected text or paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4646"/>
        <source>Character style of currently selected text or paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4647"/>
        <source>Remove Direct Paragraph Formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4648"/>
        <source>Remove Direct Character Formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4651"/>
        <source>Minimal width of spaces between words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4652"/>
        <source>Normal width of spaces between words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4653"/>
        <source>Minimal shrinkage of glyphs for justification</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4654"/>
        <source>Maximal extension of glyphs for justification</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../mpalette.cpp" line="4655"/>
        <source>Uses hanging punctuation and margin kerning to achieve nicer looking columns</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultiLine</name>
</context>
<context>
    <name>MultiProgressDialog</name>
    <message>
        <location filename="../multiprogressdialog.ui" line="13"/>
        <source>Progress</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multiprogressdialog.ui" line="24"/>
        <source>Overall Progress:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multiprogressdialog.ui" line="67"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multiprogressdialog.cpp" line="74"/>
        <source>%v of %m</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MultipleDuplicate</name>
    <message>
        <location filename="../multipleduplicate.ui" line="112"/>
        <source>&amp;Horizontal Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="165"/>
        <source>&amp;Vertical Shift:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.cpp" line="68"/>
        <source>&amp;Horizontal Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.cpp" line="69"/>
        <source>&amp;Vertical Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="13"/>
        <source>Multiple Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="32"/>
        <source>&amp;By Number of Copies</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="50"/>
        <source>&amp;Number of Copies:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="91"/>
        <source>&amp;Shift Created Items By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="94"/>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="81"/>
        <source>Create &amp;Gap Between Items Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="84"/>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="145"/>
        <source>Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="217"/>
        <source>By &amp;Rows &amp;&amp; Columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="245"/>
        <source>Vertical Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="272"/>
        <source>Horizontal Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="289"/>
        <source>Number of Rows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="309"/>
        <source>Number of Columns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="383"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../multipleduplicate.ui" line="399"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MyPlugin</name>
    <message>
        <location filename="../plugins/myplugin/myplugin.cpp" line="31"/>
        <source>My &amp;Plugin</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MyPluginImpl</name>
    <message>
        <location filename="../plugins/myplugin/mypluginimpl.cpp" line="23"/>
        <source>Scribus - My Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/myplugin/mypluginimpl.cpp" line="24"/>
        <source>The plugin worked!</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewDoc</name>
    <message>
        <location filename="../newfile.cpp" line="101"/>
        <source>New Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="111"/>
        <source>&amp;New Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="113"/>
        <source>Open &amp;Existing Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="116"/>
        <source>Open Recent &amp;Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="127"/>
        <source>Do not show this dialog again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="141"/>
        <source>Document page size, either a standard size or a custom size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="142"/>
        <source>Orientation of the document&apos;s pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="143"/>
        <source>Width of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="144"/>
        <source>Height of the document&apos;s pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="145"/>
        <source>Initial number of pages of the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="146"/>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="147"/>
        <source>Create text frames automatically when new pages are added</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="148"/>
        <source>Number of columns to create in automatically created text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="149"/>
        <source>Distance between automatically created columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="219"/>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="228"/>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="231"/>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="232"/>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="238"/>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="244"/>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="278"/>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="283"/>
        <source>N&amp;umber of Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="289"/>
        <source>&amp;Default Unit:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="260"/>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="301"/>
        <source>&amp;Automatic Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="312"/>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="303"/>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="359"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="251"/>
        <source>First Page is:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="325"/>
        <source>Show Document Settings After Creation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../newfile.cpp" line="176"/>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NewFromTemplatePlugin</name>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftemplate.cpp" line="60"/>
        <source>New &amp;from Template...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftemplate.cpp" line="79"/>
        <source>Load documents with predefined layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftemplate.cpp" line="81"/>
        <source>Start a document from a template made by other users or yourself (f.e. for documents you have a constant style).</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NodePalette</name>
    <message>
        <location filename="../frameedit.cpp" line="809"/>
        <source>Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="810"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="812"/>
        <source>&amp;Absolute Coordinates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="813"/>
        <source>&amp;X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="814"/>
        <source>&amp;Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="815"/>
        <source>Edit &amp;Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="816"/>
        <source>&amp;Reset Contour Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="819"/>
        <source>&amp;End Editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="820"/>
        <source>Move Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="821"/>
        <source>Move Control Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="822"/>
        <source>Add Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="823"/>
        <source>Delete Nodes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="824"/>
        <source>Move Control Points Independently</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="825"/>
        <source>Move Control Points Symmetrical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="826"/>
        <source>Reset Control Points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="827"/>
        <source>Reset this Control Point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="828"/>
        <source>Open a Polygon or Cuts a Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="829"/>
        <source>Close this Bezier Curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="830"/>
        <source>Mirror the Path Horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="831"/>
        <source>Mirror the Path Vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="832"/>
        <source>Shear the Path Horizontally to the Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="833"/>
        <source>Shear the Path Horizontally to the Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="834"/>
        <source>Shear the Path Vertically Up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="835"/>
        <source>Shear the Path Vertically Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="836"/>
        <source>Rotate the Path Counter-Clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="837"/>
        <source>Rotate the Path Clockwise</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="838"/>
        <source>Shrink the Size of the Path by shown %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="839"/>
        <source>Enlarge the Size of the Path by shown %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="840"/>
        <source>Reduce the Size of the Path by the shown value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="841"/>
        <source>Enlarge the Size of the Path by the shown value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="842"/>
        <source>Angle of Rotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="843"/>
        <source>% to Enlarge or Shrink By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="844"/>
        <source>Value to Enlarge or Shrink By</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="845"/>
        <source>Activate Contour Line Editing Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="846"/>
        <source>Reset the Contour Line to the Original Shape of the Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="848"/>
        <source>When checked use coordinates relative to the page, otherwise coordinates are relative to the Object.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="817"/>
        <source>Set Contour to Image Clip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../frameedit.cpp" line="847"/>
        <source>Reset the Contour Line to the Clipping Path of the Image</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OODPlug</name>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="294"/>
        <source>This document does not seem to be an OpenOffice Draw file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="663"/>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OODrawImportPlugin</name>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="94"/>
        <source>Import &amp;OpenOffice.org Draw...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="109"/>
        <source>Imports OpenOffice.org Draw Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="110"/>
        <source>Imports most OpenOffice.org Draw files into the current document, converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="124"/>
        <source>OpenDocument 1.0 Draw</source>
        <comment>Import/export format name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="136"/>
        <source>OpenOffice.org 1.x Draw</source>
        <comment>Import/export format name</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="200"/>
        <source>This file contains some unsupported features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="198"/>
        <source>The file could not be imported</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OdtDialog</name>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="46"/>
        <source>OpenDocument Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="55"/>
        <source>Overwrite Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="57"/>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="64"/>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="66"/>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="73"/>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="75"/>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="82"/>
        <source>Do not ask again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="84"/>
        <source>Make these settings the default and do not prompt again when importing an OASIS OpenDocument.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="93"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtdia.cpp" line="95"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OldScribusFormat</name>
    <message>
        <location filename="../plugins/fileloader/oldscribusformat/oldscribusformat.cpp" line="59"/>
        <source>Scribus Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oldscribusformat/oldscribusformat.cpp" line="70"/>
        <source>Scribus 1.2.x Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OneClick</name>
    <message>
        <location filename="../oneclick.cpp" line="40"/>
        <source>Origin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../oneclick.cpp" line="146"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../oneclick.cpp" line="151"/>
        <source>Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../oneclick.cpp" line="153"/>
        <source>Length:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../oneclick.cpp" line="161"/>
        <source>Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../oneclick.cpp" line="163"/>
        <source>Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../oneclick.cpp" line="193"/>
        <source>Remember Values</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OutlineValues</name>
    <message>
        <location filename="../styleselect.cpp" line="96"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="97"/>
        <source>Linewidth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDFExportDialog</name>
    <message>
        <location filename="../pdfopts.cpp" line="150"/>
        <source>Save as PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="63"/>
        <source>O&amp;utput to File:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="92"/>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="95"/>
        <source>Output one file for eac&amp;h page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="108"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="120"/>
        <source>This enables exporting one individually named PDF file for each page in the document. Page numbers are added automatically. This is most useful for imposing PDF for commercial printing.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="121"/>
        <source>The save button will be disabled if you are trying to export PDF/X-3 and the info string is missing from the PDF/X-3 tab.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="151"/>
        <source>%1 does not exists and will be created, continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="174"/>
        <source>Cannot create directory: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="209"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfopts.cpp" line="209"/>
        <source>PDF Files (*.pdf);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDFLibCore</name>
    <message>
        <location filename="../pdflib_core.cpp" line="116"/>
        <source>Saving PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdflib_core.cpp" line="120"/>
        <source>Exporting Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdflib_core.cpp" line="120"/>
        <source>Exporting Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdflib_core.cpp" line="120"/>
        <source>Exporting Items on Current Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdflib_core.cpp" line="2300"/>
        <source>Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdflib_core.cpp" line="2313"/>
        <source>Date:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDFToolBar</name>
    <message>
        <location filename="../werktoolb.cpp" line="135"/>
        <source>PDF Tools</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PDFlib</name>
</context>
<context>
    <name>PPreview</name>
    <message>
        <location filename="../preview.cpp" line="79"/>
        <source>Print Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="121"/>
        <source>Display Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="127"/>
        <source>Enable &amp;Antialiasing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="132"/>
        <source>Display Trans&amp;parency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="137"/>
        <source>&amp;Display CMYK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="144"/>
        <source>&amp;C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="149"/>
        <source>&amp;M</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="154"/>
        <source>&amp;Y</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="159"/>
        <source>&amp;K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="172"/>
        <source>Separation Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="184"/>
        <source>Cyan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="191"/>
        <source>Magenta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="198"/>
        <source>Yellow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="205"/>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="228"/>
        <source>Print Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="234"/>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="237"/>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="240"/>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="243"/>
        <source>Print in Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="246"/>
        <source>&amp;Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="249"/>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="252"/>
        <source>Convert Spot Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="255"/>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="270"/>
        <source>Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="278"/>
        <source>Fit to Width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="279"/>
        <source>Fit to Height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="280"/>
        <source>Fit to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="291"/>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="294"/>
        <source>Print...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="319"/>
        <source>Provides a more pleasant view of Type 1 fonts, TrueType Fonts, OpenType Fonts, EPS, PDF and vector graphics in the preview, at the expense of a slight slowdown in previewing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="320"/>
        <source>Shows transparency and transparent items in your document. Requires Ghostscript 7.07 or later</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="321"/>
        <source>Gives a print preview using simulations of generic CMYK inks, instead of RGB colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="322"/>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis. UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="323"/>
        <source>Resize the scale of the page.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="324"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="325"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="326"/>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="346"/>
        <source>Enable/disable the C (Cyan) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="347"/>
        <source>Enable/disable the M (Magenta) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="348"/>
        <source>Enable/disable the Y (Yellow) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="349"/>
        <source>Enable/disable the K (Black) ink plate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="612"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../preview.cpp" line="1094"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PSLib</name>
    <message>
        <location filename="../pslib.cpp" line="1673"/>
        <source>Processing Master Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="1673"/>
        <source>Exporting Page:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PStyleW</name>
    <message>
        <location filename="../smpstylew.ui" line="13"/>
        <source>Form1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smpstylew.ui" line="26"/>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smpstylew.ui" line="46"/>
        <source>Tabulators and Indentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smpstylew.ui" line="64"/>
        <source>Based On:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smpstylew.ui" line="104"/>
        <source>Distances and Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smpstylew.ui" line="130"/>
        <source>Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smpstylew.ui" line="146"/>
        <source>Parent&apos;s Drop Cap Status</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smpstylew.ui" line="190"/>
        <source>Ch&amp;aracter Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageItem</name>
    <message>
        <location filename="../pageitem.cpp" line="357"/>
        <source>Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitem.cpp" line="361"/>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitem.cpp" line="365"/>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitem.cpp" line="369"/>
        <source>Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitem.cpp" line="373"/>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitem.cpp" line="377"/>
        <source>PathText</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitem.cpp" line="3343"/>
        <source>Copy of</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageItemAttributes</name>
    <message>
        <location filename="../pageitemattributes.cpp" line="20"/>
        <source>None</source>
        <comment>relationship</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.cpp" line="20"/>
        <source>Relates To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.cpp" line="20"/>
        <source>Is Parent Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.cpp" line="20"/>
        <source>Is Child Of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="13"/>
        <source>Page Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="58"/>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="61"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="68"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="71"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="78"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="81"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="88"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="91"/>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="114"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="130"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="23"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="28"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="33"/>
        <source>Value</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="38"/>
        <source>Parameter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="43"/>
        <source>Relationship</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pageitemattributes.ui" line="48"/>
        <source>Relationship To</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageLayouts</name>
    <message>
        <location filename="../pagelayout.cpp" line="267"/>
        <source>First Page is:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagelayout.cpp" line="198"/>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PagePalette</name>
    <message>
        <location filename="../seiten.cpp" line="533"/>
        <source>Double sided</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../seiten.cpp" line="541"/>
        <source>Middle Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../seiten.cpp" line="570"/>
        <source>Drag pages or master pages onto the trashbin to delete them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../seiten.cpp" line="571"/>
        <source>Here are all your master pages. To create a new page, drag a master page to the page view below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../seiten.cpp" line="855"/>
        <source>Arrange Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../seiten.cpp" line="856"/>
        <source>Available Master Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../seiten.cpp" line="857"/>
        <source>Document Pages:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PageSelector</name>
    <message>
        <location filename="../pageselector.cpp" line="246"/>
        <source>%1 of %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ParaStyleComboBox</name>
    <message>
        <location filename="../spalette.cpp" line="61"/>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PatternDialog</name>
    <message>
        <location filename="../patterndialog.cpp" line="95"/>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.cpp" line="123"/>
        <source>Loading Patterns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.cpp" line="198"/>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.cpp" line="201"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.ui" line="14"/>
        <source>Patterns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.ui" line="50"/>
        <source>Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.ui" line="57"/>
        <source>Load Set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.ui" line="64"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.ui" line="71"/>
        <source>Remove All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.ui" line="94"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../patterndialog.ui" line="101"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PicSearch</name>
    <message>
        <location filename="../picsearch.cpp" line="105"/>
        <source>Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="106"/>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="106"/>
        <source>DPI</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="109"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.cpp" line="112"/>
        <source>Colorspace:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.ui" line="14"/>
        <source>Result</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.ui" line="34"/>
        <source>Search Results for: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.ui" line="86"/>
        <source>&amp;Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.ui" line="89"/>
        <source>Alt+P</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.ui" line="115"/>
        <source>&amp;Select</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.ui" line="118"/>
        <source>Alt+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearch.ui" line="128"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PicSearchOptions</name>
    <message>
        <location filename="../picsearchoptions.cpp" line="48"/>
        <source>The filesystem will be searched for case insensitive file names when you check this on. Remember it is not default on most operating systems except MS Windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.cpp" line="55"/>
        <source>Cancel Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="118"/>
        <source>Start Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.cpp" line="82"/>
        <source>Select a base directory for search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.cpp" line="137"/>
        <source>Scribus - Image Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.cpp" line="137"/>
        <source>The search failed: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="13"/>
        <source>Search Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="25"/>
        <source>Search for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="35"/>
        <source>Start at:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="58"/>
        <source>Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="73"/>
        <source>Searching</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="135"/>
        <source>Case insensitive search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picsearchoptions.ui" line="142"/>
        <source>Search recursively</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PicStatus</name>
    <message>
        <location filename="../picstatus.ui" line="16"/>
        <source>Manage Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="633"/>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="510"/>
        <source>Goto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="288"/>
        <source>Scribus - Image Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="288"/>
        <source>No images named &quot;%1&quot; were found.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="140"/>
        <source>Not on a Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="155"/>
        <source>JPG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="158"/>
        <source>TIFF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="161"/>
        <source>PSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="164"/>
        <source>EPS/PS</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="167"/>
        <source>PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="170"/>
        <source>JPG2000</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="176"/>
        <source>emb. PSD</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="182"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.cpp" line="216"/>
        <source>n/a</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="74"/>
        <source>Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="135"/>
        <source>Path:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="145"/>
        <source>Search...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="199"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="219"/>
        <source>Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="305"/>
        <source>DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="292"/>
        <source>Format:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="279"/>
        <source>Colorspace:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="321"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="401"/>
        <source>Pixels:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="391"/>
        <source>Scale:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="365"/>
        <source>Printed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="414"/>
        <source>Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="523"/>
        <source>On Page:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="497"/>
        <source>eff. DPI:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="487"/>
        <source>Object:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="474"/>
        <source>Select</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="539"/>
        <source>Image Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="558"/>
        <source>Layers &amp;&amp; Paths...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="575"/>
        <source>Image Visible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="582"/>
        <source>Image Effects...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="568"/>
        <source>Edit Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../picstatus.ui" line="551"/>
        <source>Print Image</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PixmapExportPlugin</name>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="60"/>
        <source>Save as &amp;Image...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="78"/>
        <source>Export As Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="79"/>
        <source>Exports selected pages as bitmap images.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="129"/>
        <source>Save as Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="130"/>
        <source>Error writing the output file(s).</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/pixmapexport/export.cpp" line="133"/>
        <source>Export successful</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PluginManager</name>
    <message>
        <location filename="../pluginmanager.cpp" line="72"/>
        <source>Cannot find plugin</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="61"/>
        <source>unknown error</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="97"/>
        <source>Cannot find symbol (%1)</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="157"/>
        <source>Plugin: loading %1</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="228"/>
        <source>There is a problem loading %1 of %2 plugins. %3 This is probably caused by some kind of dependency issue or old plugins existing in your install directory. If you clean out your install directory and reinstall and this still occurs, please report it on bugs.scribus.net.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="261"/>
        <source>init failed</source>
        <comment>plugin load error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="267"/>
        <source>unknown plugin type</source>
        <comment>plugin load error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="271"/>
        <source>Plugin: %1 loaded</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="275"/>
        <source>Plugin: %1 failed to load: %2</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="315"/>
        <source>Plugin: %1 initialized ok </source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanager.cpp" line="318"/>
        <source>Plugin: %1 failed post initialization</source>
        <comment>plugin manager</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PluginManagerPrefsGui</name>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="19"/>
        <source>Plugin Manager</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="35"/>
        <source>Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="40"/>
        <source>How to run</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="45"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="50"/>
        <source>Load it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="55"/>
        <source>Plugin ID</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="60"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="68"/>
        <source>You need to restart the application to apply the changes.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pluginmanagerprefsgui.ui" line="13"/>
        <source>Form</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PolygonProps</name>
    <message>
        <location filename="../polyprops.cpp" line="21"/>
        <source>Polygon Properties</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PolygonWidget</name>
    <message>
        <location filename="../polygonwidget.cpp" line="48"/>
        <source>Corn&amp;ers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="67"/>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="82"/>
        <source>Apply &amp;Factor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="97"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="101"/>
        <source>&amp;Factor:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="130"/>
        <source>Number of corners for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="132"/>
        <source>Degrees of rotation for polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="133"/>
        <source>Apply Convex/Concave Factor to change shape of Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="134"/>
        <source>Sample Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../polygonwidget.cpp" line="136"/>
        <source>A negative value will make the polygon concave (or star shaped), a positive value will make it convex</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Preferences</name>
    <message>
        <location filename="../prefs.cpp" line="70"/>
        <source>Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="73"/>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="76"/>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="79"/>
        <source>Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="82"/>
        <source>Typography</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="85"/>
        <source>Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="88"/>
        <source>Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="91"/>
        <source>Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="97"/>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="102"/>
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="117"/>
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="122"/>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="127"/>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="130"/>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="133"/>
        <source>Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="136"/>
        <source>Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="139"/>
        <source>External Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="142"/>
        <source>Miscellaneous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="146"/>
        <source>Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefs.cpp" line="94"/>
        <source>Printer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrefsDialogBase</name>
    <message>
        <location filename="../prefsdialogbase.cpp" line="162"/>
        <source>Export...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsdialogbase.cpp" line="163"/>
        <source>&amp;Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsdialogbase.cpp" line="164"/>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsdialogbase.cpp" line="165"/>
        <source>All preferences can be reset here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsdialogbase.cpp" line="166"/>
        <source>Apply all changes without closing the dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsdialogbase.cpp" line="167"/>
        <source>Export current preferences into file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsdialogbase.cpp" line="177"/>
        <source>Save Preferences</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PrefsManager</name>
    <message>
        <location filename="../prefsmanager.cpp" line="1829"/>
        <source>PostScript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="663"/>
        <source>Migrate Old Scribus Settings?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="665"/>
        <source>Scribus has detected existing Scribus 1.2 preferences files.
Do you want to migrate them to the new Scribus version?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="1471"/>
        <source>Could not open preferences file &quot;%1&quot; for writing: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="1484"/>
        <source>Writing to preferences file &quot;%1&quot; failed: QIODevice status code %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="1498"/>
        <source>Failed to open prefs file &quot;%1&quot;: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="1508"/>
        <source>Failed to read prefs XML from &quot;%1&quot;: %2 at line %3, col %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="1829"/>
        <source>Postscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="2122"/>
        <source>Error Writing Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="2128"/>
        <source>Scribus was not able to save its preferences:&lt;br&gt;%1&lt;br&gt;Please check file and directory permissions and available disk space.</source>
        <comment>scribus app error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="2141"/>
        <source>Error Loading Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../prefsmanager.cpp" line="2146"/>
        <source>Scribus was not able to load its preferences:&lt;br&gt;%1&lt;br&gt;Default settings will be loaded.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PresetLayout</name>
    <message>
        <location filename="../marginWidget.cpp" line="477"/>
        <source>None</source>
        <comment>layout type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="478"/>
        <source>Gutenberg</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="479"/>
        <source>Magazine</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="480"/>
        <source>Fibonacci</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="481"/>
        <source>Golden Mean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="482"/>
        <source>Nine Parts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../marginWidget.cpp" line="485"/>
        <source>You can select a predefined page layout here. &apos;None&apos; leave margins as is, Gutenberg sets margins classically. &apos;Magazine&apos; sets all margins for same value. Leading is Left/Inside value.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PythonConsole</name>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="81"/>
        <source>&amp;Open...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="86"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="91"/>
        <source>Save &amp;As...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="96"/>
        <source>&amp;Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="59"/>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="101"/>
        <source>&amp;Run</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="106"/>
        <source>Run As &amp;Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="111"/>
        <source>&amp;Save Output...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="69"/>
        <source>&amp;Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="62"/>
        <source>Scribus Python Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.ui" line="13"/>
        <source>Script Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="119"/>
        <source>Write your commands here. A selection is processed as script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="120"/>
        <source>Output of your script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="195"/>
        <source>Python Scripts (*.py *.PY)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="163"/>
        <source>Open Python Script File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="198"/>
        <source>Save the Python Commands in File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="219"/>
        <source>Text Files (*.txt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="222"/>
        <source>Save Current Output</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="35"/>
        <source>Col: %1 Row: %2/%3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="46"/>
        <source>Ctrl+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="47"/>
        <source>Ctrl+S</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/pconsole.cpp" line="68"/>
        <source>This is derived from standard Python console
so it contains some limitations esp. in the
case of whitespaces. Please consult Scribus
manual for more informations.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QColorDialog</name>
    <message>
        <location filename="../translationdummy.cpp" line="130"/>
        <source>Hu&amp;e:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="131"/>
        <source>&amp;Sat:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="132"/>
        <source>&amp;Val:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="133"/>
        <source>&amp;Red:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="134"/>
        <source>&amp;Green:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="135"/>
        <source>Bl&amp;ue:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="136"/>
        <source>A&amp;lpha channel:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="137"/>
        <source>&amp;Basic colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="138"/>
        <source>&amp;Custom colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="139"/>
        <source>&amp;Define Custom Colors &gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="140"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="141"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="142"/>
        <source>&amp;Add to Custom Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="143"/>
        <source>Select color</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QFileDialog</name>
    <message>
        <location filename="../translationdummy.cpp" line="14"/>
        <source>Copy or Move a File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="15"/>
        <source>Read: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="16"/>
        <source>Write: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="17"/>
        <source>File &amp;name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="18"/>
        <source>File &amp;type:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="19"/>
        <source>One directory up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="20"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="21"/>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="22"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="23"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="24"/>
        <source>Type</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="25"/>
        <source>Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="26"/>
        <source>Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="27"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="28"/>
        <source>Look &amp;in:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="29"/>
        <source>Back</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="30"/>
        <source>Create New Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="31"/>
        <source>List View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="32"/>
        <source>Detail View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="33"/>
        <source>Preview File Info</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="34"/>
        <source>Preview File Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="35"/>
        <source>Read-write</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="36"/>
        <source>Read-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="37"/>
        <source>Write-only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="38"/>
        <source>Inaccessible</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="39"/>
        <source>Symlink to File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="40"/>
        <source>Symlink to Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="41"/>
        <source>Symlink to Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="42"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="43"/>
        <source>Dir</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="44"/>
        <source>Special</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="45"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="46"/>
        <source>Save As</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="47"/>
        <source>&amp;Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="48"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="49"/>
        <source>&amp;Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="50"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="51"/>
        <source>R&amp;eload</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="52"/>
        <source>Sort by &amp;Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="53"/>
        <source>Sort by &amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="54"/>
        <source>Sort by &amp;Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="55"/>
        <source>&amp;Unsorted</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="56"/>
        <source>Sort</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="57"/>
        <source>Show &amp;hidden files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="58"/>
        <source>the file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="59"/>
        <source>the directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="60"/>
        <source>the symlink</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="61"/>
        <source>Delete %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="62"/>
        <source>&lt;qt&gt;Are you sure you wish to delete %1 &quot;%2&quot;?&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="65"/>
        <source>New Folder 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="66"/>
        <source>New Folder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="67"/>
        <source>New Folder %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="68"/>
        <source>Find Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="69"/>
        <source>Directories</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="70"/>
        <source>Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="71"/>
        <source>Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="72"/>
        <source>%1
File not found.
Check path and filename.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="73"/>
        <source>All Files (*.*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="74"/>
        <source>Select a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="75"/>
        <source>Directory:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QFontDialog</name>
    <message>
        <location filename="../translationdummy.cpp" line="147"/>
        <source>&amp;Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="148"/>
        <source>Font st&amp;yle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="149"/>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="150"/>
        <source>Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="151"/>
        <source>Stri&amp;keout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="152"/>
        <source>&amp;Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="153"/>
        <source>&amp;Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="154"/>
        <source>Sample</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="155"/>
        <source>Scr&amp;ipt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="156"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="157"/>
        <source>Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="158"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="159"/>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="160"/>
        <source>Select Font</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QLineEdit</name>
    <message>
        <location filename="../translationdummy.cpp" line="79"/>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="80"/>
        <source>Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="81"/>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="82"/>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="83"/>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="84"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="85"/>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QMainWindow</name>
    <message>
        <location filename="../translationdummy.cpp" line="99"/>
        <source>Line up</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="100"/>
        <source>Customize...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QMessageBox</name>
    <message>
        <location filename="../translationdummy.cpp" line="9"/>
        <source>&lt;h3&gt;About Qt&lt;/h3&gt;&lt;p&gt;This program uses Qt version %1.&lt;/p&gt;&lt;p&gt;Qt is a C++ toolkit for multiplatform GUI &amp;amp; application development.&lt;/p&gt;&lt;p&gt;Qt provides single-source portability across MS&amp;nbsp;Windows, Mac&amp;nbsp;OS&amp;nbsp;X, Linux, and all major commercial Unix variants.&lt;br&gt;Qt is also available for embedded devices.&lt;/p&gt;&lt;p&gt;Qt is a Trolltech product. See &lt;tt&gt;http://www.trolltech.com/qt/&lt;/tt&gt; for more information.&lt;/p&gt;</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../fonts/scface_ps.h" line="51"/>
        <source>Font %1 is broken (no Face), discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ps.h" line="238"/>
        <source>Font %1 cannot be read, no embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtaction.cpp" line="76"/>
        <source>Importing text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../util.cpp" line="1471"/>
        <source>All Supported Formats</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../util.cpp" line="1501"/>
        <source>All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="44"/>
        <source>Afrikaans</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="45"/>
        <source>Arabic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="46"/>
        <source>Albanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="47"/>
        <source>Basque</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="48"/>
        <source>Bulgarian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="49"/>
        <source>Breton</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="50"/>
        <source>Catalan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="51"/>
        <source>Chinese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="53"/>
        <source>Croatian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="55"/>
        <source>Czech</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="57"/>
        <source>Danish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="58"/>
        <source>Dzongkha</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="59"/>
        <source>Dutch</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="194"/>
        <source>English</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="62"/>
        <source>English (British)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="64"/>
        <source>Esperanto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="65"/>
        <source>Estonian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="66"/>
        <source>German</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="68"/>
        <source>German (Trad.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="69"/>
        <source>Finnish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="70"/>
        <source>French</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="73"/>
        <source>Galician</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="74"/>
        <source>Greek</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="76"/>
        <source>Hungarian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="85"/>
        <source>Latin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="78"/>
        <source>Icelandic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="79"/>
        <source>Indonesian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="80"/>
        <source>Italian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="81"/>
        <source>Japanese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="83"/>
        <source>Korean</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="87"/>
        <source>Lithuanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="88"/>
        <source>Luxembourgish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="93"/>
        <source>Norwegian (Nnyorsk)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="95"/>
        <source>Norwegian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="97"/>
        <source>Polish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="98"/>
        <source>Portuguese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="99"/>
        <source>Portuguese (BR)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="100"/>
        <source>Romanian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="101"/>
        <source>Russian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="109"/>
        <source>Swedish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="104"/>
        <source>Spanish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="105"/>
        <source>Spanish (Latin)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="106"/>
        <source>Slovak</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="107"/>
        <source>Slovenian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="108"/>
        <source>Serbian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="111"/>
        <source>Thai</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="113"/>
        <source>Turkish</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="114"/>
        <source>Ukranian</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="116"/>
        <source>Welsh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main_win32.cpp" line="251"/>
        <source>Scribus Crash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main_nix.cpp" line="120"/>
        <source>Scribus crashes due to Signal #%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main_win32.cpp" line="253"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../main_win32.cpp" line="228"/>
        <source>Scribus crashes due to the following exception : %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../page.cpp" line="80"/>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../page.cpp" line="89"/>
        <source>Master Page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="124"/>
        <source>4A0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="130"/>
        <source>2A0</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="199"/>
        <source>Quarto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="199"/>
        <source>Foolscap</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="199"/>
        <source>Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="200"/>
        <source>Govt. Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="200"/>
        <source>Legal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="200"/>
        <source>Ledger</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="200"/>
        <source>Executive</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="201"/>
        <source>Post</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="201"/>
        <source>Crown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="201"/>
        <source>Large Post</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="201"/>
        <source>Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="202"/>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="202"/>
        <source>Royal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="202"/>
        <source>Elephant</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="202"/>
        <source>Double Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="203"/>
        <source>Quad Demy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="203"/>
        <source>STMT</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="203"/>
        <source>A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="203"/>
        <source>B</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="203"/>
        <source>C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="204"/>
        <source>D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="204"/>
        <source>E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="220"/>
        <source>Comm10E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pagesize.cpp" line="226"/>
        <source>DLE</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="40"/>
        <source>Could not open output file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="56"/>
        <source>Output stream not writeable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="79"/>
        <source>Verification of settings failed: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="281"/>
        <source>Could not open input file %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="663"/>
        <source>Unable to read settings XML:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="297"/>
        <source>%1 (line %2 col %3)</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="316"/>
        <source>Unable to read settings XML: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="316"/>
        <source>null root node</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="441"/>
        <source>&lt;pdfVersion&gt; invalid</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="454"/>
        <source>found %1 &lt;%2&gt; nodes, need 1.</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="469"/>
        <source>unexpected null &lt;%2&gt; node</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="477"/>
        <source>node &lt;%1&gt; not an element</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="497"/>
        <source>element &lt;%1&gt; lacks `value&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="526"/>
        <source>element &lt;%1&gt; value must be `true&apos; or `false&apos;</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pdfoptionsio.cpp" line="664"/>
        <source>element &lt;lpiSettingsEntry&gt; lacks `name&apos; attribute</source>
        <comment>Load PDF settings</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="2125"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="1663"/>
        <source>Exporting PostScript File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="1665"/>
        <source>Printing File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="1839"/>
        <source>Black</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="1841"/>
        <source>Cyan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="1843"/>
        <source>Magenta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../pslib.cpp" line="1845"/>
        <source>Yellow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="303"/>
        <source>Creating Font Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="312"/>
        <source>Font %1 is broken, discarding it</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="319"/>
        <source>Failed to load font %1 - font type unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="329"/>
        <source>New Font found, checking...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="375"/>
        <source>Font %1 has broken glyph %2 (charcode %3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="366"/>
        <source>Modified Font found, checking...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="523"/>
        <source>Font %1 loaded from %2(%3)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="539"/>
        <source>Font %1(%2) is duplicate of %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="651"/>
        <source>Loading font %1 (found using fontconfig)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="656"/>
        <source>Failed to load a font - freetype2 couldn&apos;t find the font file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="752"/>
        <source>Reading Font Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="799"/>
        <source>Writing updated Font Cache</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scfonts.cpp" line="816"/>
        <source>Searching for Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scimgdataloader_jpeg.cpp" line="310"/>
        <source>%1 may be corrupted : missing or wrong resolution tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scimgdataloader_ps.cpp" line="463"/>
        <source>The Font(s):
%1 are not available.
They have been replaced by &quot;Courier&quot;
Therefore the image may be not correct</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scimgdataloader_tiff.cpp" line="872"/>
        <source>%1 may be corrupted : missing resolution tags</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="541"/>
        <source>Scribus Development Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="542"/>
        <source>You are running a development version of Scribus 1.3.x. The document you are working with was created in Scribus 1.2.x.  Saving the current file under 1.3.x renders it unable to be edited in Scribus 1.2.x versions. To preserve the ability to edit in 1.2.x, save this file under a different name and further edit the newly named file and the original will be untouched. Are you sure you wish to proceed with this operation?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3465"/>
        <source>&lt;p&gt;You are trying to import more pages than there are available in the current document counting from the active page.&lt;/p&gt;Choose one of the following:&lt;br&gt;&lt;ul&gt;&lt;li&gt;&lt;b&gt;Create&lt;/b&gt; missing pages&lt;/li&gt;&lt;li&gt;&lt;b&gt;Import&lt;/b&gt; pages until the last page&lt;/li&gt;&lt;li&gt;&lt;b&gt;Cancel&lt;/b&gt;&lt;/li&gt;&lt;/ul&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3466"/>
        <source>C&amp;reate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3467"/>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4069"/>
        <source>The changes to your document have not been saved and you have requested to revert them. Do you wish to continue?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="232"/>
        <source>Initializing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scwinprint.cpp" line="118"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="142"/>
        <source>pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="143"/>
        <source>mm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="144"/>
        <source>in</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="145"/>
        <source>p</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="146"/>
        <source>cm</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="147"/>
        <source>c</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="194"/>
        <source>Points (pt)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="195"/>
        <source>Millimeters (mm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="196"/>
        <source>Inches (in)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="197"/>
        <source>Picas (p)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="198"/>
        <source>Centimeters (cm)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="199"/>
        <source>Cicero (c)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../util.cpp" line="672"/>
        <source>File exists</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../util.cpp" line="673"/>
        <source>A file named &apos;%1&apos; already exists.&lt;br/&gt;Do you want to replace it with the file you are saving?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../util.cpp" line="1142"/>
        <source>page</source>
        <comment>page export</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/ftface.cpp" line="48"/>
        <source>Freetype2 library not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/ftface.cpp" line="80"/>
        <source>Font %1(%2) is broken</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/ftface.cpp" line="177"/>
        <source>Font %1 has broken glyph %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ttf.cpp" line="186"/>
        <source>Font %1 is broken (read stream), no embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ttf.cpp" line="72"/>
        <source>extracting face %1 from font %2 (offset=%3, nTables=%4)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ttf.cpp" line="85"/>
        <source>memcpy header: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ttf.cpp" line="94"/>
        <source>table &apos;%1&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ttf.cpp" line="95"/>
        <source>memcpy table: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ttf.cpp" line="98"/>
        <source>memcpy offset: %1 %2 %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="160"/>
        <source>font %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="162"/>
        <source>size %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="164"/>
        <source>+style </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="166"/>
        <source>+color </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="168"/>
        <source>+underline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="168"/>
        <source>-underline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="170"/>
        <source>+strikeout </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="170"/>
        <source>-strikeout </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="172"/>
        <source>+shadow </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="172"/>
        <source>-shadow </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="174"/>
        <source>+outline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="174"/>
        <source>-outline </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="176"/>
        <source>+tracking %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="176"/>
        <source>-tracking </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="178"/>
        <source>+baseline %1 </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="180"/>
        <source>+stretch </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styles/charstyle.cpp" line="182"/>
        <source>parent= %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/barcodegenerator/barcode.cpp" line="29"/>
        <source>Barcode Generator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/colorwheel/colorwheel.cpp" line="55"/>
        <source>Color Wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fontpreview/fontpreviewplugin.cpp" line="57"/>
        <source>Font Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/myplugin/myplugin.cpp" line="45"/>
        <source>My Plugin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftemplate.cpp" line="71"/>
        <source>New From Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftemplate.cpp" line="117"/>
        <source>Document Template: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="76"/>
        <source>Newsletters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="78"/>
        <source>Brochures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="80"/>
        <source>Catalogs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="82"/>
        <source>Flyers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="84"/>
        <source>Signs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="86"/>
        <source>Cards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="88"/>
        <source>Letterheads</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="90"/>
        <source>Envelopes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="92"/>
        <source>Business Cards</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="94"/>
        <source>Calendars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="96"/>
        <source>Advertisements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="98"/>
        <source>Labels</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="100"/>
        <source>Menus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="102"/>
        <source>Programs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="104"/>
        <source>PDF Forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="106"/>
        <source>PDF Presentations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="108"/>
        <source>Magazines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="110"/>
        <source>Posters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="112"/>
        <source>Announcements</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="114"/>
        <source>Text Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="116"/>
        <source>Folds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="118"/>
        <source>Media Cases</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satemplate.cpp" line="260"/>
        <source>Own Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importpsplugin.cpp" line="70"/>
        <source>PS/EPS Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="151"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satemplate.cpp" line="65"/>
        <source>Save As Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="64"/>
        <source>Cannot get a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="213"/>
        <source>Color not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="87"/>
        <source>Cannot change a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="173"/>
        <source>Color not found in document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="184"/>
        <source>Color not found in default colors.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="123"/>
        <source>Cannot create a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="159"/>
        <source>Cannot delete a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdcolor.cpp" line="204"/>
        <source>Cannot replace a color with an empty name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.cpp" line="45"/>
        <source>firstPageOrder is bigger than allowed.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.cpp" line="152"/>
        <source>Failed to open document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.cpp" line="180"/>
        <source>Failed to save document.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmddoc.cpp" line="217"/>
        <source>Unit out of range. Use one of the scribus.UNIT_* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetprop.cpp" line="65"/>
        <source>Color not found - python error</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.cpp" line="38"/>
        <source>Argument must be page item name, or PyCObject instance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.cpp" line="91"/>
        <source>Property not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.cpp" line="225"/>
        <source>Child not found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.cpp" line="332"/>
        <source>Couldn&apos;t convert result type &apos;%1&apos;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.cpp" line="464"/>
        <source>Property type &apos;%1&apos; not supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.cpp" line="484"/>
        <source>Couldn&apos;t convert &apos;%1&apos; to property type &apos;%2&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdgetsetprop.cpp" line="493"/>
        <source>Types matched, but setting property failed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.cpp" line="26"/>
        <source>Target is not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.cpp" line="384"/>
        <source>Specified item not an image frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.cpp" line="205"/>
        <source>Cannot group less than two items</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.cpp" line="230"/>
        <source>Can&apos;t group less than two items</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.cpp" line="238"/>
        <source>Need selection or argument list of items to group</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmani.cpp" line="272"/>
        <source>Cannot scale by 0%.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="390"/>
        <source>Font not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.cpp" line="104"/>
        <source>Cannot render an empty sample.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.cpp" line="138"/>
        <source>Unable to save pixmap</source>
        <comment>scripter error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.cpp" line="689"/>
        <source>Cannot have an empty layer name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.cpp" line="728"/>
        <source>Layer not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.cpp" line="694"/>
        <source>Cannot remove the last layer.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdmisc.cpp" line="745"/>
        <source>Cannot create layer without a name.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="213"/>
        <source>Point list must contain at least two points (four values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="298"/>
        <source>Point list must contain an even number of values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="293"/>
        <source>Point list must contain at least three points (six values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="375"/>
        <source>Point list must contain at least four points (eight values).</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="380"/>
        <source>Point list must have a multiple of six values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="479"/>
        <source>Object not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="605"/>
        <source>Style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdobj.cpp" line="631"/>
        <source>Cannot set style on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.cpp" line="144"/>
        <source>Page number out of range.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.cpp" line="57"/>
        <source>Failed to save EPS.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.cpp" line="134"/>
        <source>Given master page name does not match any existing.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.cpp" line="287"/>
        <source>argument is not list: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.cpp" line="247"/>
        <source>argument contains non-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdpage.cpp" line="298"/>
        <source>argument contains no-numeric values: must be list of float values.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.cpp" line="173"/>
        <source>Transparency out of bounds, must be 0 &lt;= transparency &lt;= 1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.cpp" line="195"/>
        <source>Blendmode out of bounds, must be 0 &lt;= blendmode &lt;= 15.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.cpp" line="217"/>
        <source>Line width out of bounds, must be 0 &lt;= line_width &lt;= 12.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.cpp" line="239"/>
        <source>Line shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.cpp" line="261"/>
        <source>Fill shade out of bounds, must be 0 &lt;= shade &lt;= 100.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.cpp" line="334"/>
        <source>Corner radius must be a positive number.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdsetprop.cpp" line="363"/>
        <source>Line style not found.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="27"/>
        <source>Cannot get font size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="53"/>
        <source>Cannot get font of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="79"/>
        <source>Cannot get text size of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="97"/>
        <source>Cannot get number of lines of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="115"/>
        <source>Cannot get column count of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="133"/>
        <source>Cannot get line space of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="151"/>
        <source>Cannot get column gap of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="201"/>
        <source>Cannot get text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="234"/>
        <source>Cannot set text of non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="266"/>
        <source>Cannot insert text into non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="273"/>
        <source>Insert index out of bounds.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="302"/>
        <source>Alignment out of range. Use one of the scribus.ALIGN* constants.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="310"/>
        <source>Cannot set text alignment on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="336"/>
        <source>Font size out of bounds - must be 1 &lt;= size &lt;= 512.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="345"/>
        <source>Cannot set font size on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="374"/>
        <source>Cannot set font on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="408"/>
        <source>Line space out of bounds, must be &gt;= 0.1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="416"/>
        <source>Cannot set line spacing on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="435"/>
        <source>Column gap out of bounds, must be positive.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="443"/>
        <source>Cannot set column gap on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="462"/>
        <source>Column count out of bounds, must be &gt; 1.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="470"/>
        <source>Cannot set number of columns on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="501"/>
        <source>Selection index out of bounds</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="506"/>
        <source>Cannot select text in a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="543"/>
        <source>Cannot delete text from a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="575"/>
        <source>Cannot set text fill on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="611"/>
        <source>Cannot set text stroke on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="653"/>
        <source>Cannot set text shade on a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="693"/>
        <source>Can only link text frames.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="703"/>
        <source>Target frame links to another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="708"/>
        <source>Target frame is linked to by another frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="713"/>
        <source>Source and target are the same object.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="738"/>
        <source>Cannot unlink a non-text frame.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="744"/>
        <source>Object is not a linked text frame, can&apos;t unlink.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="793"/>
        <source>Cannot convert a non-text frame to outlines.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="818"/>
        <source>Only text frames can be checked for overflowing</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="861"/>
        <source>Can&apos;t set bookmark on a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/cmdtext.cpp" line="895"/>
        <source>Can&apos;t get info from a non-text frame</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/objimageexport.cpp" line="75"/>
        <source>The filename must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/objimageexport.cpp" line="80"/>
        <source>The filename should not be empty string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/objimageexport.cpp" line="98"/>
        <source>Cannot delete image type settings.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/objimageexport.cpp" line="102"/>
        <source>The image type must be a string.</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/objimageexport.cpp" line="127"/>
        <source>&apos;allTypes&apos; attribute is READ-ONLY</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/objimageexport.cpp" line="187"/>
        <source>Failed to export image</source>
        <comment>python error</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="546"/>
        <source>&amp;Execute Script...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="547"/>
        <source>Show &amp;Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="548"/>
        <source>&amp;About Script...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="550"/>
        <source>&amp;Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="551"/>
        <source>&amp;Scribus Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="552"/>
        <source>&amp;Recent Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="519"/>
        <source>About Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptplugin.cpp" line="137"/>
        <source>Scripter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptplugin.cpp" line="749"/>
        <source>Scribus Python interface module

This module is the Python interface for Scribus. It provides functions
to control scribus and to manipulate objects on the canvas. Each
function is documented individually below.

A few things are common across most of the interface.

Most functions operate on frames. Frames are identified by their name,
a string - they are not real Python objects. Many functions take an
optional (non-keyword) parameter, a frame name.
Many exceptions are also common across most functions. These are
not currently documented in the docstring for each function.
- Many functions will raise a NoDocOpenError if you try to use them
without a document to operate on.
- If you do not pass a frame name to a function that requires one,
the function will use the currently selected frame, if any, or
raise a NoValidObjectError if it can&apos;t find anything to operate
on.
- Many functions will raise WrongFrameTypeError if you try to use them
on a frame type that they do not make sense with. For example, setting
the text color on a graphics frame doesn&apos;t make sense, and will result
in this exception being raised.
- Errors resulting from calls to the underlying Python API will be
passed through unaltered. As such, the list of exceptions thrown by
any function as provided here and in its docstring is incomplete.

Details of what exceptions each function may throw are provided on the
function&apos;s documentation, though as with most Python code this list
is not exhaustive due to exceptions from called functions.
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/configuration.cpp" line="125"/>
        <source>Custom (optional) configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/configuration.cpp" line="127"/>
        <source>Standard configuration: </source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/shortwords.cpp" line="83"/>
        <source>Short Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/shortwords.cpp" line="121"/>
        <source>Short Words processing. Wait please...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/shortwords.cpp" line="140"/>
        <source>Short Words processing. Done.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgexplugin/svgexplugin.cpp" line="92"/>
        <source>SVG Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="151"/>
        <source>SVG-Images (*.svg *.svgz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgexplugin/svgexplugin.cpp" line="139"/>
        <source>Do you really want to overwrite the File:
%1 ?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="93"/>
        <source>SVG Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oldscribusformat/oldscribusformat.cpp" line="40"/>
        <source>Old .sla format support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="102"/>
        <source>OpenOffice.org Draw Importer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/oodraw/oodrawimp.cpp" line="170"/>
        <source>OpenOffice.org Draw (*.sxd *.odg);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus12format/scribus12format.cpp" line="59"/>
        <source>Scribus 1.2.x Support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus134format/scribus134format.cpp" line="59"/>
        <source>Scribus 1.3.4 Support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus13format/scribus13format.cpp" line="1109"/>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus13format/scribus13format.cpp" line="2670"/>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvim.cpp" line="12"/>
        <source>Comma Separated Value Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvim.cpp" line="58"/>
        <source>CSV_data</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/csvim/csvim.cpp" line="62"/>
        <source>CSV_header</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/docim/docim.cpp" line="55"/>
        <source>Word Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/htmlim/htmlim.cpp" line="41"/>
        <source>HTML Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/htmlim/htmlim.cpp" line="46"/>
        <source>html</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/htmlim/htmlreader.cpp" line="621"/>
        <source>
External Links
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/odtim/odtim.cpp" line="44"/>
        <source>OpenDocument Text Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/pdbim/pdbim.cpp" line="32"/>
        <source>Palm PDB Documents</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/pdbim/pdbim.cpp" line="75"/>
        <source>PDB_data</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/pdbim/pdbim.cpp" line="98"/>
        <source>PDB Import</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/pdbim/pdbim.cpp" line="90"/>
        <source>Could not open file %1</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/pdbim/pdbim.cpp" line="99"/>
        <source>This file is not recognized as a PDB document. Please, report this as a bug if you are sure it is one.</source>
        <comment>PDB Importer</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwim.cpp" line="43"/>
        <source>OpenOffice.org Writer Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/textfilter.cpp" line="25"/>
        <source>Text Filters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/txtim/txtim.cpp" line="20"/>
        <source>Text Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="63"/>
        <source>English (American)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="61"/>
        <source>English (Australian)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/psimport/importpsplugin.cpp" line="141"/>
        <source>All Supported Formats (*.eps *.EPS *.epsi *.EPSI *.ps *.PS);;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="67"/>
        <source>German (Swiss)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="75"/>
        <source>Hebrew</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../fonts/scface_ps.h" line="78"/>
        <source>Font %1 has broken metrics in file %2, ignoring metrics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="52"/>
        <source>Chinese (Trad.)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus13format/scribus13format.cpp" line="60"/>
        <source>Scribus 1.3.0-&gt;1.3.3.x Support</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../serializer.cpp" line="344"/>
        <source>Copy of %1 (%2)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="71"/>
        <source>Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="77"/>
        <source>PDF Push Button</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="80"/>
        <source>PDF Text Field</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="83"/>
        <source>PDF Check Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="86"/>
        <source>PDF Combo Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="89"/>
        <source>PDF List Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="92"/>
        <source>PDF Text Annotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="95"/>
        <source>PDF Link Annotation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="98"/>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="103"/>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="106"/>
        <source>Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="109"/>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="112"/>
        <source>PathText</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="150"/>
        <source>%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="82"/>
        <source>Khmer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="84"/>
        <source>Lao</source>
        <translation type="unfinished"></translation>
    </message>
    <message encoding="UTF-8">
        <location filename="../langmgr.cpp" line="91"/>
        <source>Norwegian (Bokm�l)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../langmgr.cpp" line="115"/>
        <source>Vietnamese</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scdocoutput_ps2.cpp" line="107"/>
        <source>An error occurred while initializing icc transforms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scdocoutput_ps2.cpp" line="134"/>
        <source>Output profile is not supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../units.cpp" line="148"/>
        <source>&#xb0;</source>
        <comment>degrees, unicode 0xB0</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTextEdit</name>
    <message>
        <location filename="../translationdummy.cpp" line="89"/>
        <source>Clear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="90"/>
        <source>Select All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="91"/>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="92"/>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="93"/>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="94"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="95"/>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QTitleBar</name>
    <message>
        <location filename="../translationdummy.cpp" line="104"/>
        <source>System Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="105"/>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="106"/>
        <source>Unshade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="107"/>
        <source>Normalize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="108"/>
        <source>Minimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="109"/>
        <source>Maximize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="110"/>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>QWorkspace</name>
    <message>
        <location filename="../translationdummy.cpp" line="114"/>
        <source>&amp;Restore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="115"/>
        <source>&amp;Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="116"/>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="117"/>
        <source>Mi&amp;nimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="118"/>
        <source>Ma&amp;ximize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="119"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="120"/>
        <source>Stay on &amp;Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="121"/>
        <source>Minimize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="122"/>
        <source>Restore Down</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="123"/>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="124"/>
        <source>Sh&amp;ade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="125"/>
        <source>%1 - [%2]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../translationdummy.cpp" line="126"/>
        <source>&amp;Unshade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ReformDoc</name>
    <message>
        <location filename="../reformdoc.cpp" line="64"/>
        <source>Document Setup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="67"/>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="70"/>
        <source>Document Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="73"/>
        <source>Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="77"/>
        <source>Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="80"/>
        <source>Typography</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="83"/>
        <source>Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="86"/>
        <source>Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="89"/>
        <source>Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="92"/>
        <source>Preflight Verifier</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="97"/>
        <source>PDF Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="102"/>
        <source>Document Item Attributes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="107"/>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="111"/>
        <source>Sections</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="117"/>
        <source>Color Management</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../reformdoc.cpp" line="471"/>
        <source>Adjusting Colors</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RunScriptDialog</name>
    <message>
        <location filename="../plugins/scriptplugin/runscriptdialog.cpp" line="18"/>
        <source>Python Scripts (*.py *.PY);; All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/runscriptdialog.cpp" line="22"/>
        <source>Run as Extension Script</source>
        <comment>run script dialog</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMAlignSelect</name>
    <message>
        <location filename="../smwidgets.cpp" line="288"/>
        <source>P</source>
        <comment>P as in Parent</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smwidgets.cpp" line="289"/>
        <source>Use parent style&apos;s alignment instead of overriding it</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMBase</name>
    <message>
        <location filename="../stylemanager.ui" line="263"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="266"/>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="296"/>
        <source>&amp;Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="299"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="340"/>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="343"/>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="358"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="361"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="429"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="460"/>
        <source>Please select a unique name for the style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="69"/>
        <source>&lt;&lt; &amp;Done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="93"/>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="96"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="117"/>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="120"/>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.ui" line="293"/>
        <source>Clone copies the style to make similar styles easily.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMCStylePage</name>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="240"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="218"/>
        <source>Parent style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="219"/>
        <source>Font face</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="220"/>
        <source>Font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="221"/>
        <source>Tracking</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="222"/>
        <source>Baseline offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="223"/>
        <source>Horizontal scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="224"/>
        <source>Vertical scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="225"/>
        <source>Language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="226"/>
        <source>Fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="227"/>
        <source>Fill shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="228"/>
        <source>Stroke color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="229"/>
        <source>Stroke shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="577"/>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="235"/>
        <source>Based On:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="236"/>
        <source>Language:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMCharacterStyle</name>
    <message>
        <location filename="../smtextstyles.cpp" line="1490"/>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="1191"/>
        <source>Character Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="1196"/>
        <source>Character Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="1319"/>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="1332"/>
        <source>Clone of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="1358"/>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMColorCombo</name>
    <message>
        <location filename="../smwidgets.cpp" line="669"/>
        <source>Use Parent Value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMFontComboH</name>
    <message>
        <location filename="../smwidgets.cpp" line="683"/>
        <source>Use Parent Font</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMLineStyle</name>
    <message>
        <location filename="../smlinestyle.cpp" line="213"/>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="221"/>
        <source>Line Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="226"/>
        <source>Line Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="369"/>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="379"/>
        <source>Clone of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="395"/>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="763"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="857"/>
        <source>Solid Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="845"/>
        <source>Dashed Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="848"/>
        <source>Dotted Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="851"/>
        <source>Dash Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="854"/>
        <source>Dash Dot Dot Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smlinestyle.cpp" line="838"/>
        <source> pt </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMPStyleWidget</name>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="984"/>
        <source>Fixed Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="985"/>
        <source>Automatic Linespacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="986"/>
        <source>Align to Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="780"/>
        <source>Distances and Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="781"/>
        <source>Drop Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="782"/>
        <source>Tabulators and Indentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="783"/>
        <source>Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="784"/>
        <source>Character Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="810"/>
        <source>&amp;Lines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="816"/>
        <source>Distance from Text:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="761"/>
        <source>Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="752"/>
        <source>Parent Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="753"/>
        <source>Line Spacing Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="754"/>
        <source>Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="755"/>
        <source>Space Above</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="756"/>
        <source>Space Below</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="759"/>
        <source>Drop Cap Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="760"/>
        <source>Drop Cap Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="762"/>
        <source>First Line Indent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="763"/>
        <source>Left Indent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="764"/>
        <source>Right Indent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstylewidgets.cpp" line="1213"/>
        <source>Based On:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMParagraphStyle</name>
    <message>
        <location filename="../smtextstyles.cpp" line="49"/>
        <source>Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="54"/>
        <source>Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="202"/>
        <source>New Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="215"/>
        <source>Clone of %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smtextstyles.cpp" line="242"/>
        <source>%1 (%2)</source>
        <comment>This for unique name when creating a new character style. %1 will be the name of the style and %2 will be a number forming a style name like: New Style (2)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMReplaceDia</name>
    <message>
        <location filename="../smreplacedia.cpp" line="66"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smreplacedia.cpp" line="67"/>
        <source>Replace with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smreplacedia.ui" line="13"/>
        <source>Delete Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smreplacedia.ui" line="65"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smreplacedia.ui" line="81"/>
        <source>Ca&amp;ncel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smreplacedia.ui" line="84"/>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMRowWidget</name>
    <message>
        <location filename="../smreplacedia.cpp" line="27"/>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMScComboBox</name>
    <message>
        <location filename="../smwidgets.cpp" line="271"/>
        <source>Use Parent Value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMShadeButton</name>
    <message>
        <location filename="../smwidgets.cpp" line="542"/>
        <source>Use Parent Value</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMStyleSelect</name>
    <message>
        <location filename="../smwidgets.cpp" line="372"/>
        <source>P</source>
        <comment>P as in Parent</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../smwidgets.cpp" line="373"/>
        <source>Use parent style&apos;s effects instead of overriding them</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SMTabruler</name>
    <message>
        <location filename="../smwidgets.cpp" line="777"/>
        <source> Parent Tabs </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBAlign</name>
    <message>
        <location filename="../story.cpp" line="1102"/>
        <source>Style Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1115"/>
        <source>Style of current paragraph</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBColorF</name>
    <message>
        <location filename="../story.cpp" line="884"/>
        <source>Fill Color Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="903"/>
        <source>Color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="904"/>
        <source>Saturation of color of text fill</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBColorS</name>
    <message>
        <location filename="../story.cpp" line="936"/>
        <source>Stroke Color Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="955"/>
        <source>Color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="956"/>
        <source>Saturation of color of text stroke</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBFont</name>
    <message>
        <location filename="../story.cpp" line="1135"/>
        <source>Font Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1142"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1153"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1167"/>
        <source>Font of selected text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1168"/>
        <source>Font Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1169"/>
        <source>Scaling width of characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1170"/>
        <source>Scaling height of characters</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SToolBStyle</name>
    <message>
        <location filename="../story.cpp" line="988"/>
        <source>Character Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="996"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1014"/>
        <source>Manual Tracking</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGExportPlugin</name>
    <message>
        <location filename="../plugins/svgexplugin/svgexplugin.cpp" line="84"/>
        <source>Save as &amp;SVG...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgexplugin/svgexplugin.cpp" line="99"/>
        <source>Exports SVG Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgexplugin/svgexplugin.cpp" line="100"/>
        <source>Exports the current page into an SVG file.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGImportPlugin</name>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="85"/>
        <source>Import &amp;SVG...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="100"/>
        <source>Imports SVG Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="101"/>
        <source>Imports most SVG files into the current document,
converting their vector data into Scribus objects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="115"/>
        <source>Scalable Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="179"/>
        <source>SVG file contains some unsupported features</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="177"/>
        <source>The file could not be imported</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SVGPlug</name>
    <message>
        <location filename="../plugins/svgimplugin/svgplugin.cpp" line="894"/>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SWDialog</name>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="129"/>
        <source>Short Words</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="130"/>
        <source>Apply unbreakable space on:</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="131"/>
        <source>&amp;Selected frames</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="132"/>
        <source>Active &amp;page</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="133"/>
        <source>&amp;All items</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="136"/>
        <source>Only selected frames processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="137"/>
        <source>Only actual page processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/vlnadialog.cpp" line="138"/>
        <source>All items in document processed.</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SWPrefsGui</name>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="62"/>
        <source>User settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="67"/>
        <source>System wide configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="92"/>
        <source>&amp;Save</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="93"/>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="95"/>
        <source>Save user configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="96"/>
        <source>Reload system wide configuration and remove user defined one</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="97"/>
        <source>Edit custom configuration. If you save it, it will be used over system wide configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="121"/>
        <source>Short Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="112"/>
        <source>User configuration exists elready. Do you really want to overwrite it?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="122"/>
        <source>Cannot write file %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="129"/>
        <source>User settings saved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="140"/>
        <source>System wide configuration reloaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/swprefsgui.cpp" line="154"/>
        <source>Cannot open file %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SaveAsTemplatePlugin</name>
    <message>
        <location filename="../plugins/saveastemplateplugin/satemplate.cpp" line="54"/>
        <source>Save as &amp;Template...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satemplate.cpp" line="73"/>
        <source>Save a document as a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satemplate.cpp" line="75"/>
        <source>Save a document as a template. Good way to ease the initial work for documents with a constant look</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScGTFileDialog</name>
    <message>
        <location filename="../scgtplugin.cpp" line="108"/>
        <source>Select a file to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scgtplugin.cpp" line="128"/>
        <source>Append</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scgtplugin.cpp" line="129"/>
        <source>Show options</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScInputDialog</name>
    <message>
        <location filename="../scinputdialog.cpp" line="67"/>
        <source>Input Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scinputdialog.cpp" line="68"/>
        <source>InputDialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scinputdialog.cpp" line="69"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scinputdialog.cpp" line="71"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScPlugin</name>
    <message>
        <location filename="../scplugin.cpp" line="49"/>
        <source>Load/Save/Import/Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scplugin.cpp" line="51"/>
        <source>Persistent</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scplugin.cpp" line="53"/>
        <source>Action</source>
        <comment>plugin manager plugin type</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scplugin.cpp" line="57"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScProgressBar</name>
    <message>
        <location filename="../scprogressbar.cpp" line="56"/>
        <source>%1 of %2</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScTextBrowser</name>
    <message>
        <location filename="../sctextbrowser.cpp" line="67"/>
        <source>Locate your web browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctextbrowser.cpp" line="78"/>
        <source>External Web Browser Failed to Start</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctextbrowser.cpp" line="78"/>
        <source>Scribus was not able to start the external web browser application %1. Please check the setting in Preferences</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScToolBar</name>
    <message>
        <location filename="../sctoolbar.cpp" line="262"/>
        <source>Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctoolbar.cpp" line="263"/>
        <source>Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctoolbar.cpp" line="264"/>
        <source>Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctoolbar.cpp" line="265"/>
        <source>Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctoolbar.cpp" line="266"/>
        <source>Allow Docking To...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctoolbar.cpp" line="274"/>
        <source>Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctoolbar.cpp" line="275"/>
        <source>Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../sctoolbar.cpp" line="276"/>
        <source>Floating Orientation...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScWinPrint</name>
    <message>
        <location filename="../scwinprint.cpp" line="324"/>
        <source>Printing...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Scribus12Format</name>
    <message>
        <location filename="../plugins/fileloader/scribus12format/scribus12format.cpp" line="100"/>
        <source>Scribus 1.2.x Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus12format/scribus12format.cpp" line="737"/>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus12format/scribus12format.cpp" line="1529"/>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Scribus134Format</name>
    <message>
        <location filename="../plugins/fileloader/scribus134format/scribus134format.cpp" line="78"/>
        <source>Scribus 1.3.4 Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus134format/scribus134format.cpp" line="3362"/>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Scribus13Format</name>
    <message>
        <location filename="../plugins/fileloader/scribus13format/scribus13format.cpp" line="3115"/>
        <source>Copy #%1 of </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/fileloader/scribus13format/scribus13format.cpp" line="79"/>
        <source>Scribus 1.3.0-&gt;1.3.3.7 Document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusCore</name>
    <message>
        <location filename="../scribuscore.cpp" line="157"/>
        <source>Initializing Plugins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="169"/>
        <source>Initializing Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="171"/>
        <source>Reading Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="181"/>
        <source>Reading ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="323"/>
        <source>Searching for Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="328"/>
        <source>There are no fonts found on your system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="329"/>
        <source>Exiting now.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="330"/>
        <source>Fatal Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuscore.cpp" line="333"/>
        <source>Font System Initialized</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusDoc</name>
    <message>
        <location filename="../scribusdoc.cpp" line="188"/>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="412"/>
        <source>Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="632"/>
        <source>An error occurred while opening ICC profiles, color management is not enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="763"/>
        <source>Adjusting Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="1595"/>
        <source>New Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="6386"/>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="6428"/>
        <source>Cannot Delete In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="6428"/>
        <source>The item %1 is currently being edited by Story Editor. The delete operation will be cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="6868"/>
        <source>Some objects are locked.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="6864"/>
        <source>&amp;Unlock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="6865"/>
        <source>&amp;Skip locked objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="7937"/>
        <source>Number of copies: %1
Horizontal gap: %2
Vertical gap: %3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="361"/>
        <source>Default Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="376"/>
        <source>Default Character Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="5303"/>
        <source>remove direct paragraph formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="5521"/>
        <source>remove direct char formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="7910"/>
        <source>Number of copies: %1
Horizontal shift: %2
Vertical shift: %3
Rotation: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusdoc.cpp" line="8696"/>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusMainWindow</name>
    <message>
        <location filename="../scribus.cpp" line="288"/>
        <source>Setting up Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="305"/>
        <source>Initializing Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="312"/>
        <source>Initializing Hyphenator</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="318"/>
        <source>Reading Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="358"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="368"/>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9213"/>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9214"/>
        <source>Open &amp;Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9216"/>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9217"/>
        <source>&amp;Export</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9218"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9215"/>
        <source>Paste Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9219"/>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9220"/>
        <source>St&amp;yle</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9221"/>
        <source>&amp;Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9222"/>
        <source>&amp;Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9223"/>
        <source>&amp;Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9224"/>
        <source>&amp;Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9225"/>
        <source>&amp;Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9226"/>
        <source>&amp;Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="705"/>
        <source>Preview Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="690"/>
        <source>Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="696"/>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9230"/>
        <source>&amp;PDF Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9231"/>
        <source>&amp;Shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9232"/>
        <source>C&amp;onvert To</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9233"/>
        <source>I&amp;nsert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="774"/>
        <source>&amp;Character</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="792"/>
        <source>&amp;Quote</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="818"/>
        <source>S&amp;paces &amp;&amp; Breaks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9237"/>
        <source>Liga&amp;ture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9238"/>
        <source>&amp;Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9239"/>
        <source>&amp;View</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9241"/>
        <source>E&amp;xtras</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9242"/>
        <source>&amp;Windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9243"/>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9244"/>
        <source>&amp;Alignment</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9255"/>
        <source>Ready</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7806"/>
        <source>Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="2424"/>
        <source>Updating Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3972"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3432"/>
        <source>Importing Pages...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3461"/>
        <source>Import Page(s)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3503"/>
        <source>Import done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3507"/>
        <source>Found nothing to import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3628"/>
        <source>Fatal Error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3628"/>
        <source>File %1 is not in an acceptable format</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3649"/>
        <source>Loading...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3793"/>
        <source>Some ICC profiles used by this document are not installed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3796"/>
        <source> was replaced by: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="3823"/>
        <source>(converted)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7975"/>
        <source>Cannot write the file: 
%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4143"/>
        <source>Documents (*.sla *.sla.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4146"/>
        <source>Save As</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4173"/>
        <source>Saving...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7695"/>
        <source>Scribus has detected some errors. Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4432"/>
        <source>Printing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4491"/>
        <source>Printing failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4615"/>
        <source>Cannot Cut In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4615"/>
        <source>The item %1 is currently being edited by Story Editor. The cut operation will be cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5253"/>
        <source>About Qt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5258"/>
        <source>Scribus Manual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7829"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5283"/>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5447"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5447"/>
        <source>Convert Page to Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="5447"/>
        <source>New Master Page %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="6669"/>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="6669"/>
        <source>Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="6721"/>
        <source>&amp;Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="6721"/>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="6829"/>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7593"/>
        <source>The following programs are missing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7595"/>
        <source>Ghostscript : You cannot use EPS images or Print Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7597"/>
        <source>Ghostscript : You cannot use EPS images or PostScript Print Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7642"/>
        <source>Ghostscript is missing : Postscript Print Preview is not available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7731"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7775"/>
        <source>Scribus detected some errors.
Consider using the Preflight Verifier  to correct them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7829"/>
        <source>EPS Files (*.eps);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7860"/>
        <source>Detected some errors.
Consider using the Preflight Verifier to correct them</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="7952"/>
        <source>-Page%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="8321"/>
        <source>Some objects are locked.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="8317"/>
        <source>&amp;Lock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="8318"/>
        <source>&amp;Unlock All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="8985"/>
        <source>Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="8985"/>
        <source>The program %1 is already running!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9024"/>
        <source>The program %1 is missing!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9138"/>
        <source>The selected color does not exist in the document&apos;s color set. Please enter a name for this new color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9141"/>
        <source>Color Not Found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9145"/>
        <source>The name you have selected already exists. Please enter a different name for this new color.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9227"/>
        <source>&amp;Level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9228"/>
        <source>Send to Layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9229"/>
        <source>Previe&amp;w Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9234"/>
        <source>Character</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9235"/>
        <source>Quote</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9236"/>
        <source>Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9240"/>
        <source>&amp;Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9251"/>
        <source>X-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9252"/>
        <source>Y-Pos:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="9402"/>
        <source>Do you really want to replace your existing image?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="4002"/>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribus.cpp" line="252"/>
        <source>Scribus </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusQApp</name>
    <message>
        <location filename="../scribusapp.cpp" line="200"/>
        <source>Invalid argument: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="220"/>
        <source>File %1 does not exist, aborting.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="397"/>
        <source>Usage: scribus [option ... ] [file]</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="398"/>
        <source>Options:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="400"/>
        <source>Print help (this message) and exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="401"/>
        <source>Uses xx as shortcut for a language, eg `en&apos; or `de&apos;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="402"/>
        <source>List the currently installed interface languages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="399"/>
        <source>Show information on the console when fonts are being loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="403"/>
        <source>Do not show the splashscreen on startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="404"/>
        <source>Stop the showing of the splashscreen on startup. Writes an empty file called .neversplash in ~/.scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="408"/>
        <source>Download a file from the Scribus website and show the latest available version.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="409"/>
        <source>Output version information and exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="407"/>
        <source>Use right to left dialog button ordering (eg. Cancel/No/Yes instead of Yes/No/Cancel)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="405"/>
        <source>filename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="405"/>
        <source>Use filename as path for user given preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="413"/>
        <source>Display a console window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="428"/>
        <source>Installed interface languages for Scribus are as follows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="436"/>
        <source>To override the default language choice:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="437"/>
        <source>scribus -l xx or scribus --lang xx, where xx is the language of choice.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="442"/>
        <source>Scribus Version</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="451"/>
        <source>Scribus, Open Source Desktop Publishing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="459"/>
        <source>Homepage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="460"/>
        <source>Documentation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="461"/>
        <source>Wiki</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="462"/>
        <source>Issues</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="406"/>
        <source>Show location ICC profile information on console while starting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusapp.cpp" line="218"/>
        <source>Invalid argument: %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusView</name>
    <message>
        <location filename="../scribusview.cpp" line="189"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="308"/>
        <source>Enables the Preview Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="309"/>
        <source>Here you can select the visual appearance of the display
You can choose between normal and several color blindness forms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2073"/>
        <source>Copy Here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2074"/>
        <source>Move Here</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2075"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2772"/>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2788"/>
        <source>Paste Recent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2938"/>
        <source>Picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2913"/>
        <source>File: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2917"/>
        <source>Original PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2921"/>
        <source>Actual PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2925"/>
        <source>Colorspace: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2930"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2964"/>
        <source>Linked Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2966"/>
        <source>Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2969"/>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2972"/>
        <source>Paragraphs: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2979"/>
        <source>Lines: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2983"/>
        <source>Words: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2990"/>
        <source>Chars: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3001"/>
        <source>Print: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3004"/>
        <source>Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3006"/>
        <source>Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3015"/>
        <source>In&amp;fo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3036"/>
        <source>Preview Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3077"/>
        <source>&amp;PDF Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3101"/>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3129"/>
        <source>Le&amp;vel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3183"/>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3193"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3215"/>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="6825"/>
        <source>Linking Text Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="9714"/>
        <source>Page %1 to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="10746"/>
        <source>Group%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="11045"/>
        <source>Cannot Convert In-Use Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="11045"/>
        <source>The item %1 is currently being edited by Story Editor. The convert to outlines operation for this item will be skipped</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="307"/>
        <source>Switches Color Management on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="347"/>
        <source>Preview Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="348"/>
        <source>CMS is active. Therefore the color display may not match the perception by visually impaired</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="3307"/>
        <source>Enter Object Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="2940"/>
        <source>No Image Loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="6819"/>
        <source>You are trying to link a frame to itself.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribusview.cpp" line="6826"/>
        <source>You are trying to link a frame which is already linked.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScribusWin</name>
    <message>
        <location filename="../scribuswin.cpp" line="111"/>
        <source>Document:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../scribuswin.cpp" line="113"/>
        <source>has been changed since the last save.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScriptPlugin</name>
    <message>
        <location filename="../plugins/scriptplugin/scriptplugin.cpp" line="148"/>
        <source>Embedded Python scripting support.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptplugin.cpp" line="200"/>
        <source>Scripter</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterCore</name>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="573"/>
        <source>Script error</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="354"/>
        <source>If you are running an official script report it at &lt;a href=&quot;http://bugs.scribus.net&quot;&gt;bugs.scribus.net&lt;/a&gt; please.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="356"/>
        <source>This message is in your clipboard too. Use Ctrl+V to paste it into bug tracker.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="423"/>
        <source>There was an internal error while trying the command you entered. Details were printed to stderr. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="496"/>
        <source>Examine Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="496"/>
        <source>Python Scripts (*.py *.PY);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="509"/>
        <source>Documentation for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="514"/>
        <source>Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="514"/>
        <source> doesn&apos;t contain any docstring!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scriptercore.cpp" line="575"/>
        <source>Setting up the Python plugin failed. Error details were printed to stderr. </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScripterPrefsGui</name>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="42"/>
        <source>Extensions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="102"/>
        <source>Console</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="72"/>
        <source>Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.cpp" line="60"/>
        <source>Scripter Preferences</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="81"/>
        <source>Enable Extension Scripts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="62"/>
        <source>Startup Script:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.cpp" line="92"/>
        <source>Select Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.cpp" line="117"/>
        <source>Locate Startup Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="13"/>
        <source>Form</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="148"/>
        <source>Comments:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="155"/>
        <source>Keywords:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="162"/>
        <source>Signs:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="169"/>
        <source>Strings:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="176"/>
        <source>Numbers:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="183"/>
        <source>Errors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/scriptplugin/scripterprefsgui.ui" line="190"/>
        <source>Base Texts:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SeList</name>
    <message>
        <location filename="../seiten.cpp" line="89"/>
        <source>Show Page Previews</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SearchReplace</name>
    <message>
        <location filename="../search.cpp" line="637"/>
        <source>Search/Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="57"/>
        <source>Search for:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="152"/>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="155"/>
        <source>Paragraph Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="158"/>
        <source>Font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="161"/>
        <source>Font Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="164"/>
        <source>Font Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="167"/>
        <source>Fill Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="170"/>
        <source>Fill Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="173"/>
        <source>Stroke Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="176"/>
        <source>Stroke Shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="94"/>
        <source>Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="94"/>
        <source>Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="94"/>
        <source>Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="94"/>
        <source>Block</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="94"/>
        <source>Forced</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="146"/>
        <source>Replace with:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="236"/>
        <source>&amp;Whole Word</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="240"/>
        <source>&amp;Ignore Case</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="249"/>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="252"/>
        <source>&amp;Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="255"/>
        <source>Replace &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="258"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="260"/>
        <source>&amp;Close</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="506"/>
        <source>Search finished</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../search.cpp" line="638"/>
        <source>Search finished, found %1 matches</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SelectFields</name>
    <message>
        <location filename="../selfield.cpp" line="27"/>
        <source>Select Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../selfield.cpp" line="40"/>
        <source>Available Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../selfield.cpp" line="68"/>
        <source>&amp;&gt;&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../selfield.cpp" line="70"/>
        <source>&amp;&lt;&lt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../selfield.cpp" line="78"/>
        <source>Selected Fields</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShadeButton</name>
    <message>
        <location filename="../shadebutton.cpp" line="16"/>
        <source>Other...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../shadebutton.cpp" line="50"/>
        <source>&amp;Shade:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../shadebutton.cpp" line="50"/>
        <source>Shade</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShadowValues</name>
    <message>
        <location filename="../styleselect.cpp" line="124"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="123"/>
        <source>X-Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="125"/>
        <source>Y-Offset</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShortWordsPlugin</name>
    <message>
        <location filename="../plugins/short-words/shortwords.cpp" line="75"/>
        <source>Short &amp;Words...</source>
        <comment>short words plugin</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/shortwords.cpp" line="156"/>
        <source>Short Words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/short-words/shortwords.cpp" line="98"/>
        <source>Special plug-in for adding non-breaking spaces before or after so called short words. Available in the following languages: </source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShortcutWidget</name>
    <message>
        <location filename="../stylemanager.cpp" line="1495"/>
        <source>&amp;No Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1496"/>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1461"/>
        <source>ALT+SHIFT+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1497"/>
        <source>Set &amp;Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1586"/>
        <source>Alt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1586"/>
        <source>Ctrl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1586"/>
        <source>Shift</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1586"/>
        <source>Meta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1527"/>
        <source>Meta+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1531"/>
        <source>Shift+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1535"/>
        <source>Alt+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1539"/>
        <source>Ctrl+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1487"/>
        <source>No shortcut for the style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1488"/>
        <source>Style has user defined shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1489"/>
        <source>Assign a shortcut for the style</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SideBar</name>
    <message>
        <location filename="../story.cpp" line="160"/>
        <source>No Style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="123"/>
        <source>Edit Styles...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StilFormate</name>
</context>
<context>
    <name>StoryEditor</name>
    <message>
        <location filename="../story.cpp" line="1635"/>
        <source>&amp;File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1645"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1657"/>
        <source>&amp;Insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1658"/>
        <source>Character</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1659"/>
        <source>Quote</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1473"/>
        <source>Spaces &amp;&amp; Breaks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1485"/>
        <source>Ligature</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1664"/>
        <source>&amp;Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1756"/>
        <source>Story Editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1636"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1637"/>
        <source>Clear All Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1638"/>
        <source>&amp;Reload Text from Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1639"/>
        <source>&amp;Save to File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1640"/>
        <source>&amp;Load from File...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1641"/>
        <source>Save &amp;Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1642"/>
        <source>&amp;Update Text Frame and Exit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1643"/>
        <source>&amp;Exit Without Updating Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1646"/>
        <source>Select &amp;All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1647"/>
        <source>Cu&amp;t</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1648"/>
        <source>&amp;Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1649"/>
        <source>&amp;Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1650"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1651"/>
        <source>&amp;Search/Replace...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1652"/>
        <source>&amp;Edit Styles...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1653"/>
        <source>&amp;Fonts Preview...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1654"/>
        <source>&amp;Update Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1660"/>
        <source>Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1661"/>
        <source>&amp;Insert Glyph...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1665"/>
        <source>&amp;Background...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1666"/>
        <source>&amp;Display Font...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1667"/>
        <source>&amp;Smart text selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1672"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1674"/>
        <source>Current Paragraph:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1679"/>
        <source>Words: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1680"/>
        <source>Chars: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1677"/>
        <source>Totals:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1678"/>
        <source>Paragraphs: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1739"/>
        <source>Story Editor - %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="1793"/>
        <source>Do you want to save your changes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="2358"/>
        <source>Do you really want to lose all your changes?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="2387"/>
        <source>Do you really want to clear all your text?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="2855"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="2891"/>
        <source>Text Files (*.txt);;All Files(*)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../story.cpp" line="2891"/>
        <source>Save as</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StrikeValues</name>
    <message>
        <location filename="../styleselect.cpp" line="30"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="41"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="40"/>
        <source>Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="42"/>
        <source>Linewidth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StyleManager</name>
    <message>
        <location filename="../stylemanager.cpp" line="138"/>
        <source>Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="139"/>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="140"/>
        <source>&amp;Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="144"/>
        <source>&amp;New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="145"/>
        <source>&amp;Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="146"/>
        <source>&amp;Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="147"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="127"/>
        <source>Reset all changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="128"/>
        <source>Apply all changes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="122"/>
        <source>Apply all changes and exit edit mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="129"/>
        <source>Create a new style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="130"/>
        <source>Import styles from another document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="131"/>
        <source>Clone selected style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="132"/>
        <source>Delete selected styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="644"/>
        <source>New</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="176"/>
        <source>Import</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="179"/>
        <source>Clone</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="180"/>
        <source>Send to Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="182"/>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="733"/>
        <source>&amp;Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="141"/>
        <source>&amp;Done</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="971"/>
        <source>Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="66"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="124"/>
        <source>Edit styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="126"/>
        <source>Name of the selected style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="178"/>
        <source>Edit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="632"/>
        <source>New %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1035"/>
        <source>This key sequence is already in use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="1123"/>
        <source>More than one style selected</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="312"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../stylemanager.cpp" line="312"/>
        <source>documents (*.sla *.sla.gz *.scd *.scd.gz);;All Files (*)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>StyleSelect</name>
    <message>
        <location filename="../styleselect.cpp" line="271"/>
        <source>Underline Text. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="272"/>
        <source>Underline Words Only. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="273"/>
        <source>All Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="274"/>
        <source>Small Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="275"/>
        <source>Subscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="276"/>
        <source>Superscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="277"/>
        <source>Strike Out. Hold down the button momentarily to set line width and displacement options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="278"/>
        <source>Outline. Hold down the button momentarily to change the outline stroke width.</source>
        <comment>Text Style Selector</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="279"/>
        <source>Shadowed Text. Hold down the button momentarily to enable the offset spacing.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SxwDialog</name>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="28"/>
        <source>OpenOffice.org Writer Importer Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="37"/>
        <source>Overwrite Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="39"/>
        <source>Enabling this will overwrite existing styles in the current Scribus document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="46"/>
        <source>Merge Paragraph Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="48"/>
        <source>Merge paragraph styles by attributes. This will result in fewer similar paragraph styles, will retain style attributes, even if the original document&apos;s styles are named differently.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="55"/>
        <source>Use document name as a prefix for paragraph styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="57"/>
        <source>Prepend the document name to the paragraph style name in Scribus.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="64"/>
        <source>Do not ask again</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="66"/>
        <source>Make these settings the default and do not prompt again when importing an OpenOffice.org 1.x document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="75"/>
        <source>OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/sxwim/sxwdia.cpp" line="77"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TOCIndexPrefs</name>
    <message>
        <location filename="../tocindexprefs.ui" line="13"/>
        <source>Table of Contents and Indexes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="60"/>
        <source>&amp;Add</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="63"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="70"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="73"/>
        <source>Alt+D</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="100"/>
        <source>The frame the table of contents will be placed into</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="107"/>
        <source>Page Numbers Placed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="117"/>
        <source>Item Attribute Name:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="127"/>
        <source>The Item Attribute that will be set on frames used as a basis for creation of the entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="134"/>
        <source>Place page numbers of the entries at the beginning or the end of the line, or not at all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="144"/>
        <source>List Non-Printing Entries</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="141"/>
        <source>Include frames that are set to not print as well</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="151"/>
        <source>The paragraph style used for the entry lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="158"/>
        <source>Paragraph Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="168"/>
        <source>Destination Frame:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.ui" line="26"/>
        <source>Table Of Contents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.cpp" line="103"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.cpp" line="105"/>
        <source>At the beginning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.cpp" line="107"/>
        <source>At the end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.cpp" line="109"/>
        <source>Not Shown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tocindexprefs.cpp" line="245"/>
        <source>Table of Contents %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabCheckDoc</name>
    <message>
        <location filename="../tabcheckdoc.cpp" line="34"/>
        <source>Ignore all errors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="37"/>
        <source>Automatic check before printing or exporting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="40"/>
        <source>Check for missing glyphs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="46"/>
        <source>Check for overflow in text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="52"/>
        <source>Check for missing images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="55"/>
        <source>Check image resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="62"/>
        <source>Lowest allowed resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="75"/>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="70"/>
        <source>Highest allowed resolution</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="79"/>
        <source>Check for placed PDF Files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="82"/>
        <source>Check for GIF images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="85"/>
        <source>Check for PDF Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="88"/>
        <source>Ignore non-printable Layers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="95"/>
        <source>Add Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="97"/>
        <source>Remove Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="43"/>
        <source>Check for items not on a page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabcheckdoc.cpp" line="49"/>
        <source>Check for used transparencies</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabDisplay</name>
    <message>
        <location filename="../tabdisplay.cpp" line="30"/>
        <source>Color for paper</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="31"/>
        <source>Mask the area outside the margins in the margin color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="32"/>
        <source>Enable or disable  the display of linked frames.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="33"/>
        <source>Display non-printing characters such as paragraph markers in text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="34"/>
        <source>Turns the display of frames on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="35"/>
        <source>Turns the display of layer indicators on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="36"/>
        <source>Turns the display of pictures on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="37"/>
        <source>Defines amount of space left of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="38"/>
        <source>Defines amount of space right of the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="39"/>
        <source>Defines amount of space above the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="40"/>
        <source>Defines amount of space below the document canvas available as a pasteboard for creating and modifying elements and dragging them onto the active page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="41"/>
        <source>Set the default zoom level</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.cpp" line="42"/>
        <source>Place a ruler against your screen and drag the slider to set the zoom level so Scribus will display your pages and objects on them at the correct size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="15"/>
        <source>TabDisplayBase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="31"/>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="43"/>
        <source>Adjust Display Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="79"/>
        <source>Scale%</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="110"/>
        <source>To adjust the display drag the ruler below with the slider.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="123"/>
        <source>Gaps Between Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="138"/>
        <source>Vertical:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="151"/>
        <source>Horizontal:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="164"/>
        <source>Scratch Space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="179"/>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="195"/>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="211"/>
        <source>&amp;Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="234"/>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="250"/>
        <source>Page Display</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="262"/>
        <source>Show Bleed Area</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="269"/>
        <source>Display &amp;Unprintable Area in Margin Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="272"/>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="279"/>
        <source>Show Layer Indicators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="289"/>
        <source>Show Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="299"/>
        <source>Show Text Chains</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="309"/>
        <source>Rulers Relative to Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="316"/>
        <source>Show Text Control Characters</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="323"/>
        <source>Show Pictures</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="350"/>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="378"/>
        <source>Pages:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="398"/>
        <source>Selected Page Border:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="453"/>
        <source>Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="487"/>
        <source>Frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="507"/>
        <source>Grouped:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="536"/>
        <source>Annotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="629"/>
        <source>Selected:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="639"/>
        <source>Linked:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="675"/>
        <source>Locked:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="723"/>
        <source>Normal:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="738"/>
        <source>Text:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdisplay.ui" line="785"/>
        <source>Control Characters:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabDocument</name>
    <message>
        <location filename="../tabdocument.cpp" line="56"/>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="79"/>
        <source>&amp;Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="84"/>
        <source>Portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="85"/>
        <source>Landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="87"/>
        <source>Orie&amp;ntation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="93"/>
        <source>Units:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="104"/>
        <source>&amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="110"/>
        <source>&amp;Height:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="118"/>
        <source>Apply settings to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="121"/>
        <source>All Document Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="125"/>
        <source>All Master Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="135"/>
        <source>Margin Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="145"/>
        <source>Autosave</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="154"/>
        <source>min</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="155"/>
        <source>&amp;Interval:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="160"/>
        <source>Undo/Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="174"/>
        <source>Action history length</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="183"/>
        <source>Width of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="184"/>
        <source>Height of document pages, editable if you have chosen a custom page size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="185"/>
        <source>Default page size, either a standard size or a custom size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="186"/>
        <source>Default orientation of document pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="187"/>
        <source>Default unit of measurement for document editing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="188"/>
        <source>When enabled, Scribus saves a backup copy of your file with the .bak extension each time the time period elapses</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="189"/>
        <source>Time period between saving automatically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="190"/>
        <source>Set the length of the action history in steps. If set to 0 infinite amount of actions will be stored.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="191"/>
        <source>Apply the page size changes to all existing pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabdocument.cpp" line="192"/>
        <source>Apply the page size changes to all existing master pages in the document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabExternalToolsWidget</name>
    <message>
        <location filename="../tabexternaltoolswidget.cpp" line="77"/>
        <source>Locate Ghostscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.cpp" line="85"/>
        <source>Locate your image editor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.cpp" line="93"/>
        <source>Locate your web browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="13"/>
        <source>External Tools</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="25"/>
        <source>Web Browser to launch with links from the Help system</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="28"/>
        <source>Web Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="85"/>
        <source>&amp;Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="255"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="50"/>
        <source>&lt;qt&gt;File system location for your web browser. This is used for external links from the Help system.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="102"/>
        <source>Name of &amp;Executable:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="73"/>
        <source>Image Processing Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="95"/>
        <source>&lt;qt&gt;File system location for graphics editor. If you use gimp and your distribution includes it, we recommend &apos;gimp-remote&apos;, as it allows you to edit the image in an already running instance of gimp.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="118"/>
        <source>PostScript Interpreter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="138"/>
        <source>Antialias text for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="141"/>
        <source>Antialias &amp;Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="144"/>
        <source>Alt+T</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="167"/>
        <source>Antialias graphics for EPS and PDF onscreen rendering</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="170"/>
        <source>Antialias &amp;Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="173"/>
        <source>Alt+G</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="196"/>
        <source>Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="209"/>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="232"/>
        <source>&amp;Name of Executable:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="245"/>
        <source>&lt;qt&gt;Add the path for the Ghostscript interpreter. On Windows, please note it is important to note you need to use the program named gswin32c.exe - NOT gswin32.exe. Otherwise, this maybe cause a hang when starting Scribus.&lt;/qt&gt;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="252"/>
        <source>&amp;Change..</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="307"/>
        <source>Rescan for the external tools if they do not exist in the already specified location</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="310"/>
        <source>&amp;Rescan</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabexternaltoolswidget.ui" line="313"/>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabGeneral</name>
    <message>
        <location filename="../tabgeneral.cpp" line="64"/>
        <source>Select your default language for Scribus to run with. Leave this blank to choose based on environment variables. You can still override this by passing a command line option when starting Scribus</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="65"/>
        <source>Number of recently edited documents to show in the File menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="66"/>
        <source>Number of lines Scribus will scroll for each move of the mouse wheel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="67"/>
        <source>Choose the default window decoration and looks. Scribus inherits any available KDE or Qt themes, if Qt is configured to search KDE plugins.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="68"/>
        <source>Default font size for the menus and windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="69"/>
        <source>Default font size for the tool windows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="70"/>
        <source>Default documents directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="71"/>
        <source>Default ICC profiles directory. This cannot be changed with a document open. By default, Scribus will look in the System Directories under Mac OSX and Windows. On Linux and Unix, Scribus will search $home/.color/icc,/usr/share/color/icc and /usr/local/share/color/icc </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="72"/>
        <source>Default Scripter scripts directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="73"/>
        <source>Additional directory for document templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.cpp" line="128"/>
        <source>Choose a Directory</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="15"/>
        <source>TabGeneralBase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="27"/>
        <source>User Interface</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="39"/>
        <source>&amp;Recent Documents:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="58"/>
        <source>&amp;Wheel Jump:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="87"/>
        <source>Show Splashscreen on Startup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="97"/>
        <source>Show Startup Dialog</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="150"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="111"/>
        <source>&amp;Font Size (Menus):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="124"/>
        <source>Font Size (&amp;Palettes):</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="137"/>
        <source>Time before a Move or Resize starts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="157"/>
        <source> ms</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="176"/>
        <source>&amp;Theme:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="192"/>
        <source>&amp;Language:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="243"/>
        <source>Paths</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="291"/>
        <source>&amp;Change...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="294"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="301"/>
        <source>C&amp;hange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="304"/>
        <source>Alt+H</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="311"/>
        <source>&amp;Scripts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="334"/>
        <source>Cha&amp;nge...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="337"/>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="344"/>
        <source>&amp;ICC Profiles:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="357"/>
        <source>&amp;Documents:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="370"/>
        <source>Document &amp;Templates:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="383"/>
        <source>Ch&amp;ange...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabgeneral.ui" line="386"/>
        <source>Alt+A</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabGuides</name>
    <message>
        <location filename="../tabguides.cpp" line="37"/>
        <source>Common Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="43"/>
        <source>Placing in Documents</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="49"/>
        <source>In the Background</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="52"/>
        <source>In the Foreground</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="57"/>
        <source>Snapping</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="62"/>
        <source>Snap Distance:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="70"/>
        <source>Grab Radius:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="83"/>
        <source>Show Guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="182"/>
        <source>Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="101"/>
        <source>Show Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="119"/>
        <source>Show Page Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="126"/>
        <source>Major Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="164"/>
        <source>Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="148"/>
        <source>Minor Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="175"/>
        <source>Show Baseline Grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="194"/>
        <source>Baseline Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="201"/>
        <source>Baseline &amp;Grid:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="205"/>
        <source>Baseline &amp;Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="218"/>
        <source>Guides are not visible through objects on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="219"/>
        <source>Guides are visible above all objects on the page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="220"/>
        <source>Distance between the minor grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="221"/>
        <source>Distance between the major grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="222"/>
        <source>Distance within which an object will snap to your placed guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="223"/>
        <source>Radius of the area where Scribus will allow you to grab an objects handles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="224"/>
        <source>Color of the minor grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="225"/>
        <source>Color of the major grid lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="226"/>
        <source>Color of the guide lines you insert</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="227"/>
        <source>Color for the margin lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="228"/>
        <source>Color for the baseline grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="229"/>
        <source>Turns the basegrid on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="230"/>
        <source>Distance between the lines of the baseline grid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="231"/>
        <source>Distance from the top of the page for the first baseline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="232"/>
        <source>Turns the gridlines on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="233"/>
        <source>Turns the guides on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="234"/>
        <source>Turns the margins on or off</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="272"/>
        <source> px</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabguides.cpp" line="270"/>
        <source>px</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabKeyboardShortcutsWidget</name>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="141"/>
        <source>Key Set XML Files (*.ksxml)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="556"/>
        <source>Alt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="556"/>
        <source>Ctrl</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="556"/>
        <source>Shift</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="556"/>
        <source>Meta</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="506"/>
        <source>Meta+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="510"/>
        <source>Shift+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="514"/>
        <source>Alt+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="518"/>
        <source>Ctrl+</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.cpp" line="527"/>
        <source>This key sequence is already in use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="13"/>
        <source>Keyboard Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="26"/>
        <source>Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="31"/>
        <source>Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="54"/>
        <source>Search:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="69"/>
        <source>Shortcut for Selected Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="87"/>
        <source>CTRL+ALT+SHIFT+W</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="100"/>
        <source>Set &amp;Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="103"/>
        <source>Alt+K</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="129"/>
        <source>&amp;User Defined Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="132"/>
        <source>Alt+U</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="139"/>
        <source>&amp;No Key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="142"/>
        <source>Alt+N</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="152"/>
        <source>Loadable Shortcut Sets</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="164"/>
        <source>Reload the default Scribus shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="167"/>
        <source>&amp;Reset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="170"/>
        <source>Alt+R</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="193"/>
        <source>Export the current shortcuts into an importable file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="196"/>
        <source>&amp;Export...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="199"/>
        <source>Alt+E</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="206"/>
        <source>Import a shortcut set into the current configuration</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="209"/>
        <source>&amp;Import...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="212"/>
        <source>Alt+I</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="235"/>
        <source>Load the selected shortcut set</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="238"/>
        <source>&amp;Load</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="241"/>
        <source>Alt+L</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabkeyboardshortcutswidget.ui" line="248"/>
        <source>Keyboard shortcut sets available to load</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabManager</name>
    <message>
        <location filename="../tabmanager.cpp" line="24"/>
        <source>Manage Tabulators</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabMiscellaneous</name>
    <message>
        <location filename="../tabmiscellaneous.ui" line="40"/>
        <source>Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabmiscellaneous.ui" line="60"/>
        <source>Count of the Paragraphs:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabmiscellaneous.ui" line="91"/>
        <source>Always use standard Lorem Ipsum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabmiscellaneous.ui" line="101"/>
        <source>Preview of current Paragraph Style visible when editing Styles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabmiscellaneous.ui" line="108"/>
        <source>Always ask before fonts are replaced when loading a document</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabPDFOptions</name>
    <message>
        <location filename="../tabpdfoptions.cpp" line="257"/>
        <source>Export Range</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="262"/>
        <source>&amp;All Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="267"/>
        <source>C&amp;hoose Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="282"/>
        <source>&amp;Rotation:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="305"/>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="309"/>
        <source>File Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="314"/>
        <source>Compatibilit&amp;y:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="327"/>
        <source>&amp;Binding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="331"/>
        <source>Left Margin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="332"/>
        <source>Right Margin</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="336"/>
        <source>Generate &amp;Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="338"/>
        <source>Save &amp;Linked Text Frames as PDF Articles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="340"/>
        <source>&amp;Include Bookmarks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="342"/>
        <source>Include La&amp;yers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="385"/>
        <source> dpi</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="348"/>
        <source>&amp;Resolution for EPS Graphics:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="354"/>
        <source>Com&amp;press Text and Vector Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="356"/>
        <source>Image Compression Method</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="363"/>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="364"/>
        <source>Lossy - JPEG</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="365"/>
        <source>Lossless - Zip</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="366"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="368"/>
        <source>Compression Metho&amp;d:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="373"/>
        <source>Maximum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="374"/>
        <source>High</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="375"/>
        <source>Medium</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="376"/>
        <source>Low</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="377"/>
        <source>Minimum</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="379"/>
        <source>Compression &amp;Quality:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="390"/>
        <source>&amp;General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="397"/>
        <source>Embedding</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="405"/>
        <source>Available Fonts:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="428"/>
        <source>Fonts to embed:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="459"/>
        <source>&amp;Fonts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="464"/>
        <source>Enable &amp;Presentation Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="469"/>
        <source>Show Page Pre&amp;views</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="471"/>
        <source>Effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="476"/>
        <source>&amp;Display Duration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="478"/>
        <source>Effec&amp;t Duration:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="480"/>
        <source>Effect T&amp;ype:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="482"/>
        <source>&amp;Moving Lines:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="484"/>
        <source>F&amp;rom the:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="486"/>
        <source>D&amp;irection:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="495"/>
        <source> sec</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="501"/>
        <source>No Effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="501"/>
        <source>Blinds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="501"/>
        <source>Box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="501"/>
        <source>Dissolve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="501"/>
        <source>Glitter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="501"/>
        <source>Split</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="501"/>
        <source>Wipe</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="509"/>
        <source>Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="510"/>
        <source>Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="515"/>
        <source>Inside</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="516"/>
        <source>Outside</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="521"/>
        <source>Left to Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="521"/>
        <source>Top to Bottom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="521"/>
        <source>Bottom to Top</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="521"/>
        <source>Right to Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="522"/>
        <source>Top-left to Bottom-Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="529"/>
        <source>&amp;Apply Effect on all Pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="532"/>
        <source>E&amp;xtras</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="538"/>
        <source>Display Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="553"/>
        <source>Single Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="556"/>
        <source>Continuous</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="559"/>
        <source>Double Page Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="562"/>
        <source>Double Page Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="566"/>
        <source>Visual Appearance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="572"/>
        <source>Use Viewers Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="575"/>
        <source>Use Full Screen Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="578"/>
        <source>Display Bookmarks Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="581"/>
        <source>Display Thumbnails</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="584"/>
        <source>Display Layers Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="586"/>
        <source>Hide Viewers Toolbar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="588"/>
        <source>Hide Viewers Menubar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="590"/>
        <source>Zoom Pages to fit Viewer Window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="596"/>
        <source>Special Actions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="602"/>
        <source>Javascript to be executed
when PDF document is opened:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="1166"/>
        <source>No Script</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="609"/>
        <source>Viewer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="616"/>
        <source>&amp;Use Encryption</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="618"/>
        <source>Passwords</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="625"/>
        <source>&amp;User:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="627"/>
        <source>&amp;Owner:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="639"/>
        <source>Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="646"/>
        <source>Allow &amp;Printing the Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="648"/>
        <source>Allow &amp;Changing the Document</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="650"/>
        <source>Allow Cop&amp;ying Text and Graphics</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="652"/>
        <source>Allow Adding &amp;Annotations and Fields</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="655"/>
        <source>S&amp;ecurity</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="661"/>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="666"/>
        <source>Output &amp;Intended For:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="669"/>
        <source>Screen / Web</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="670"/>
        <source>Printer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="671"/>
        <source>Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="677"/>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="680"/>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="683"/>
        <source>&amp;Use Custom Rendering Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="685"/>
        <source>Rendering Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="693"/>
        <source>Fre&amp;quency:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="700"/>
        <source>&amp;Angle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="708"/>
        <source>S&amp;pot Function:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="712"/>
        <source>Simple Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="713"/>
        <source>Line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="714"/>
        <source>Round</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="715"/>
        <source>Ellipse</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="721"/>
        <source>Solid Colors:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="751"/>
        <source>Use ICC Profile</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="757"/>
        <source>Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="760"/>
        <source>Rendering-Intent:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="739"/>
        <source>Perceptual</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="739"/>
        <source>Relative Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="739"/>
        <source>Saturation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="739"/>
        <source>Absolute Colorimetric</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="746"/>
        <source>Images:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="754"/>
        <source>Don&apos;t use embedded ICC profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="774"/>
        <source>C&amp;olor</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="838"/>
        <source>PDF/X-3 Output Intent</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="848"/>
        <source>&amp;Info String:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="850"/>
        <source>Output &amp;Profile:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="894"/>
        <source>Embed fonts into the PDF. Embedding the fonts will preserve the layout and appearance of your document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="895"/>
        <source>Enables presentation effects when using Adobe&amp;#174; Reader&amp;#174; and other PDF viewers which support this in full screen mode.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="896"/>
        <source>Show page previews of each page listed above.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="897"/>
        <source>Length of time the page is shown before the presentation starts on the selected page. Setting 0 will disable automatic page transition.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="898"/>
        <source>Length of time the effect runs. A shorter time will speed up the effect, a longer one will slow it down.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="899"/>
        <source>Type of the display effect.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="900"/>
        <source>Direction of the effect of moving lines for the split and blind effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="901"/>
        <source>Starting position for the box and split effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="902"/>
        <source>Direction of the glitter or wipe effects.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="903"/>
        <source>Apply the selected effect to all pages.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="936"/>
        <source>Export all pages to PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="937"/>
        <source>Export a range of pages to PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="940"/>
        <source>Insert a comma separated list of tokens where a token can be * for all the pages, 1-5 for a range of pages or a single page number.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="942"/>
        <source>Determines the PDF compatibility.&lt;br/&gt;The default is &lt;b&gt;PDF 1.3&lt;/b&gt; which gives the widest compatibility.&lt;br/&gt;Choose &lt;b&gt;PDF 1.4&lt;/b&gt; if your file uses features such as transparency or you require 128 bit encryption.&lt;br/&gt;&lt;b&gt;PDF 1.5&lt;/b&gt; is necessary when you wish to preserve objects in separate layers within the PDF.&lt;br/&gt;&lt;b&gt;PDF/X-3&lt;/b&gt; is for exporting the PDF when you want color managed RGB for commercial printing and is selectable when you have activated color management. Use only when advised by your printer or in some cases printing to a 4 color digital color laser printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="943"/>
        <source>Determines the binding of pages in the PDF. Unless you know you need to change it leave the default choice - Left.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="944"/>
        <source>Generates thumbnails of each page in the PDF. Some viewers can use the thumbnails for navigation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="945"/>
        <source>Generate PDF Articles, which is useful for navigating linked articles in a PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="946"/>
        <source>Layers in your document are exported to the PDF Only available if PDF 1.5 is chosen.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="947"/>
        <source>Embed the bookmarks you created in your document. These are useful for navigating long PDF documents.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="948"/>
        <source>Export resolution of text and vector graphics. This does not affect the resolution of bitmap images like photos.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="949"/>
        <source>Enables lossless compression of text and graphics. Unless you have a reason, leave this checked. This reduces PDF file size.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="953"/>
        <source>DPI (Dots Per Inch) for image export.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="954"/>
        <source>Enable the security features in your exported PDF. If you selected PDF 1.3, the PDF will be protected by 40 bit encryption. If you selected PDF 1.4, the PDF will be protected by 128 bit encryption. Disclaimer: PDF encryption is not as reliable as GPG or PGP encryption and does have some limitations.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="955"/>
        <source>Choose a master password which enables or disables all the security features in your exported PDF</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="956"/>
        <source>Choose a password for users to be able to read your PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="957"/>
        <source>Allow printing of the PDF. If un-checked, printing is prevented. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="958"/>
        <source>Allow modifying of the PDF. If un-checked, modifying the PDF is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="959"/>
        <source>Allow copying of text or graphics from the PDF. If unchecked, text and graphics cannot be copied.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="960"/>
        <source>Allow adding annotations and fields to the PDF. If unchecked, editing annotations and fields is prevented.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="961"/>
        <source>Color model for the output of your PDF. Choose Screen/Web for PDFs which are used for screen display and for printing on typical inkjets. Choose Printer when printing to a true 4 color CMYK printer. Choose Grayscale when you want a grey scale PDF.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="962"/>
        <source>This is an advanced setting which is not enabled by default. This should only be enabled when specifically requested by your printer and they have given you the exact details needed. Otherwise, your exported PDF may not print properly and is truly not portable across systems.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="963"/>
        <source>Embed a color profile for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="964"/>
        <source>Color profile for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="965"/>
        <source>Rendering intent for solid colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="966"/>
        <source>Embed a color profile for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="967"/>
        <source>Do not use color profiles that are embedded in source images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="968"/>
        <source>Color profile for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="969"/>
        <source>Rendering intent for images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="987"/>
        <source>Output profile for printing. If possible, get some guidance from your printer on profile selection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="988"/>
        <source>Mandatory string for PDF/X-3 or the PDF will fail PDF/X-3 conformance. We recommend you use the title of the document.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="982"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="983"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="984"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="985"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="970"/>
        <source>Mirror Page(s) horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="971"/>
        <source>Mirror Page(s) vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="972"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="973"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="974"/>
        <source>Do not show objects outside the margins in the exported file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="1756"/>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="437"/>
        <source>&amp;Embed all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="450"/>
        <source>Fonts to outline:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="455"/>
        <source>&amp;Outline all</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="782"/>
        <source>Printer Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="787"/>
        <source>Crop Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="789"/>
        <source>Bleed Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="791"/>
        <source>Registration Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="793"/>
        <source>Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="795"/>
        <source>Page Information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="798"/>
        <source>Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="808"/>
        <source>Bleed Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="814"/>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="819"/>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="824"/>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="829"/>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="833"/>
        <source>Use Document Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="857"/>
        <source>Pre-Press</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="904"/>
        <source>Convert all glyphs in the document to outlines.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="950"/>
        <source>Method of compression to use for images. Automatic allows Scribus to choose the best method. ZIP is lossless and good for images with solid colors. JPEG is better at creating smaller PDF files which have many photos (with slight image quality loss possible). Leave it set to Automatic unless you have a need for special compression options.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="951"/>
        <source>Compression quality levels for lossy compression methods: Minimum (25%), Low (50%), Medium (75%), High (85%), Maximum (95%). Note that a quality level does not directly determine the size of the resulting image - both size and quality loss vary from image to image at any given quality level. Even with Maximum selected, there is always some quality loss with jpeg.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="1341"/>
        <source>Inside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="1342"/>
        <source>Outside:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="547"/>
        <source>Document Layout</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="382"/>
        <source>Maximum Image Resolution:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="906"/>
        <source>Show the document in single page mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="907"/>
        <source>Show the document in single page mode with the pages displayed continuously end to end like a scroll</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="908"/>
        <source>Show the document with facing pages, starting with the first page displayed on the left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="909"/>
        <source>Show the document with facing pages, starting with the first page displayed on the right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="910"/>
        <source>Use the viewer&apos;s defaults or the user&apos;s preferences if set differently from the viewer defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="911"/>
        <source>Enables viewing the document in full screen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="912"/>
        <source>Display the bookmarks upon opening</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="913"/>
        <source>Display the page thumbnails upon opening</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="914"/>
        <source>Forces the displaying of layers. Useful only for PDF 1.5+.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="915"/>
        <source>Hides the Tool Bar which has selection and other editing capabilities</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="916"/>
        <source>Hides the Menu Bar for the viewer, the PDF will display in a plain window. </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="917"/>
        <source>Fit the document page or pages to the available space in the viewer window.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="952"/>
        <source>Limits the resolution of your bitmap images to the selected DPI. Images with a lower resolution will be left untouched. Leaving this unchecked will render them at their native resolution. Enabling this will increase memory usage and slow down export.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="976"/>
        <source>Creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="977"/>
        <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="978"/>
        <source>Add registration marks to each separation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="979"/>
        <source>Add color calibration bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="980"/>
        <source>Add document information which includes the document title and page numbers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="981"/>
        <source>Indicate the distance offset for the registration marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabpdfoptions.cpp" line="986"/>
        <source>Use the existing bleed settings from the document preferences</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabPrinter</name>
    <message>
        <location filename="../tabprinter.cpp" line="28"/>
        <source>Distance for bleed from the top of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="29"/>
        <source>Distance for bleed from the bottom of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="30"/>
        <source>Distance for bleed from the left of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="31"/>
        <source>Distance for bleed from the right of the physical page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="32"/>
        <source>Do not show objects outside the margins on the printed page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="33"/>
        <source>Use an alternative print manager, such as kprinter or gtklp, to utilize additional printing options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="34"/>
        <source>Sets the PostScript Level.
 Setting to Level 1 or 2 can create huge files</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="35"/>
        <source>A way of switching off some of the gray shades which are composed of cyan, yellow and magenta and using black instead. UCR most affects parts of images which are neutral and/or dark tones which are close to the gray. Use of this may improve printing some images and some experimentation and testing is need on a case by case basis.UCR reduces the possibility of over saturation with CMY inks.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="36"/>
        <source>Enables Spot Colors to be converted to composite colors. Unless you are planning to print spot colors at a commercial printer, this is probably best left enabled.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="37"/>
        <source>Enables global Overprint Mode for this document, overrides object settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="38"/>
        <source>Allows you to embed ICC profiles in the print stream when color management is enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="39"/>
        <source>This enables you to explicitely set the media size of the PostScript file. Not recommended unless requested by your printer.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="83"/>
        <source>File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.cpp" line="144"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="13"/>
        <source>TabPrinterBase</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="45"/>
        <source>Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="57"/>
        <source>Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="69"/>
        <source>Mirror Page(s) Horizontal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="76"/>
        <source>Mirror Page(s) Vertical</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="83"/>
        <source>Set Media Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="90"/>
        <source>Clip to Page Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="100"/>
        <source>Postscript Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="112"/>
        <source>Print in Grayscale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="119"/>
        <source>Print in Color if Available</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="130"/>
        <source>Level 1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="135"/>
        <source>Level 2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="140"/>
        <source>Level 3</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="151"/>
        <source>General</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="163"/>
        <source>Print Separations</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="170"/>
        <source>Print Normal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="183"/>
        <source>Color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="195"/>
        <source>Apply Under Color Removal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="202"/>
        <source>Convert Spot Colors to Process Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="209"/>
        <source>Force Overprint Mode</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="216"/>
        <source>Apply ICC Profiles</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="227"/>
        <source>Marks &amp;&amp; Bleeds</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="239"/>
        <source>Bleed Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="254"/>
        <source>Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="264"/>
        <source>Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="277"/>
        <source>Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="290"/>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="306"/>
        <source>Printer Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="318"/>
        <source>Add color calibration bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="321"/>
        <source>Color Bars</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="331"/>
        <source>Offset:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="341"/>
        <source>Add registration marks which are added to each separation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="344"/>
        <source>Registration Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="351"/>
        <source>This creates bleed marks which are indicated by  _ . _ and show the bleed limit</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="354"/>
        <source>Bleed Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="361"/>
        <source>This creates crop marks in the PDF indicating where the paper should be cut or trimmed after printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="364"/>
        <source>Crop Marks</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="378"/>
        <source>Print Destination</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="390"/>
        <source>Alternative Printer Command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabprinter.ui" line="408"/>
        <source>Command:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabScrapbook</name>
    <message>
        <location filename="../tabscrapbook.ui" line="24"/>
        <source>This enables the scrapbook to be used an extension to the copy/paste buffers. Simply copying an object or grouped object will send this to the Scrapbook automatically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabscrapbook.ui" line="27"/>
        <source>Send Copied Items Automatically to Scrapbook</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabscrapbook.ui" line="34"/>
        <source>This enables copied items to be kept permanently in the scrapbook.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabscrapbook.ui" line="37"/>
        <source>Keep Copied Items Permanently Across Sessions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabscrapbook.ui" line="52"/>
        <source>The minimum number is 1; the maximum us 100.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabscrapbook.ui" line="55"/>
        <source>Number of Copied Items to Keep in Scrapbook:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabTools</name>
    <message>
        <location filename="../tabtools.cpp" line="113"/>
        <source>Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="118"/>
        <source>Font:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="123"/>
        <source>Size:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="129"/>
        <source>Text Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="427"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="178"/>
        <source>Shading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="142"/>
        <source>Text Stroke:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="156"/>
        <source>Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="170"/>
        <source>Stroke Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="184"/>
        <source>Tab Fill Character:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="189"/>
        <source>Tab Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="196"/>
        <source>Colu&amp;mns:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="201"/>
        <source>&amp;Gap:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="925"/>
        <source>Woven silk pyjamas exchanged for blue quartz</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="216"/>
        <source>Shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="271"/>
        <source>&amp;Line Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="278"/>
        <source>&amp;Shading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="235"/>
        <source>&amp;Fill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="365"/>
        <source>S&amp;hading:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="249"/>
        <source>Line Style:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="595"/>
        <source> pt</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="302"/>
        <source>Line &amp;Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="265"/>
        <source>Lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="284"/>
        <source>Line S&amp;tyle:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="291"/>
        <source>Arrows:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="293"/>
        <source>Start:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="295"/>
        <source>End:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="311"/>
        <source>Images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="317"/>
        <source>&amp;Free Scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="328"/>
        <source>&amp;Horizontal Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="336"/>
        <source>&amp;Vertical Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="346"/>
        <source>&amp;Scale Picture to Frame Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="352"/>
        <source>Keep Aspect &amp;Ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="358"/>
        <source>F&amp;ill Color:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="368"/>
        <source>Use embedded Clipping Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="372"/>
        <source>On Screen Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="378"/>
        <source>Full Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="381"/>
        <source>Normal Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="384"/>
        <source>Low Resolution Preview</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="395"/>
        <source>Regular Polygons</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="407"/>
        <source>Zoom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="415"/>
        <source>Mi&amp;nimum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="423"/>
        <source>Ma&amp;ximum:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="429"/>
        <source>&amp;Stepping:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="462"/>
        <source>Rotation Tool</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="471"/>
        <source>Constrain to:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="485"/>
        <source>Text Frame Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="486"/>
        <source>Picture Frame Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="487"/>
        <source>Shape Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="488"/>
        <source>Magnification Level Defaults</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="489"/>
        <source>Line Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="490"/>
        <source>Polygon Drawing Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="491"/>
        <source>Other Properties</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="492"/>
        <source>Font for new text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="493"/>
        <source>Size of font for new text frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="494"/>
        <source>Color of font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="495"/>
        <source>Number of columns in a text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="496"/>
        <source>Gap between text frame columns</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="497"/>
        <source>Sample of your font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="498"/>
        <source>Picture frames allow pictures to scale to any size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="499"/>
        <source>Horizontal scaling of images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="500"/>
        <source>Vertical scaling of images</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="501"/>
        <source>Keep horizontal and vertical scaling the same</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="502"/>
        <source>Pictures in picture frames are scaled to the size of the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="503"/>
        <source>Automatically scaled pictures keep their original proportions</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="504"/>
        <source>Fill color of picture frames</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="509"/>
        <source>Saturation of color of fill</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="506"/>
        <source>Line color of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="507"/>
        <source>Saturation of color of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="508"/>
        <source>Fill color of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="510"/>
        <source>Line style of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="511"/>
        <source>Line width of shapes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="512"/>
        <source>Minimum magnification allowed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="513"/>
        <source>Maximum magnification allowed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="514"/>
        <source>Change in magnification for each zoom operation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="515"/>
        <source>Color of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="516"/>
        <source>Saturation of color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="517"/>
        <source>Style of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="518"/>
        <source>Width of lines</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="662"/>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="663"/>
        <source>Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="664"/>
        <source>Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="665"/>
        <source>Underscore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="666"/>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="709"/>
        <source>None</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="438"/>
        <source>Miscellaneous Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="443"/>
        <source>Item Duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="451"/>
        <source>X Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="457"/>
        <source>Y Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="519"/>
        <source>Horizontal displacement of page items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="520"/>
        <source>Vertical displacement of page items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="521"/>
        <source>Constrain value for the rotation tool when the Control key is pressed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="473"/>
        <source>Degrees</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtools.cpp" line="522"/>
        <source>Use the embedded clipping paths in images when importing them. JPEG, PSD and TIFF are the image formats which can embedded clipping paths.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TabTypograpy</name>
    <message>
        <location filename="../tabtypography.cpp" line="24"/>
        <source>Subscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="137"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="33"/>
        <source>&amp;Displacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="40"/>
        <source>&amp;Scaling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="45"/>
        <source>Superscript</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="54"/>
        <source>D&amp;isplacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="61"/>
        <source>S&amp;caling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="66"/>
        <source>Underline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="96"/>
        <source>Displacement:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="109"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="104"/>
        <source>Line Width:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="90"/>
        <source>Strikethru</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="114"/>
        <source>Small Caps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="124"/>
        <source>Sc&amp;aling:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="129"/>
        <source>Automatic &amp;Line Spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="139"/>
        <source>Line Spacing:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="144"/>
        <source>Displacement above the baseline of the font on a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="145"/>
        <source>Relative size of the superscript compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="146"/>
        <source>Displacement below the baseline of the normal font on a line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="147"/>
        <source>Relative size of the subscript compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="148"/>
        <source>Relative size of the small caps font compared to the normal font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="149"/>
        <source>Percentage increase over the font size for the line spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="150"/>
        <source>Displacement below the baseline of the normal font expressed as a percentage of the fonts descender</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="153"/>
        <source>Line width expressed as a percentage of the font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabtypography.cpp" line="152"/>
        <source>Displacement above the baseline of the normal font expressed as a percentage of the fonts ascender</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>Tabruler</name>
    <message>
        <location filename="../tabruler.cpp" line="478"/>
        <source>Left</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="479"/>
        <source>Right</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="480"/>
        <source>Full Stop</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="481"/>
        <source>Comma</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="482"/>
        <source>Center</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="486"/>
        <source>&amp;Position:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="491"/>
        <source>None</source>
        <comment>tab fill</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="492"/>
        <source>Dot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="493"/>
        <source>Hyphen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="494"/>
        <source>Underscore</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="495"/>
        <source>Custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="496"/>
        <source>Fill Char:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="529"/>
        <source>Delete All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="581"/>
        <source>Indentation for first line of the paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="582"/>
        <source>Indentation from the left for the whole paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="583"/>
        <source>Indentation from the right for the whole paragraph</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="585"/>
        <source>Delete all Tabulators</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="568"/>
        <source>Fill Character of Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="569"/>
        <source>Type/Orientation of Tab</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tabruler.cpp" line="570"/>
        <source>Position of Tab</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TextBrowser</name>
</context>
<context>
    <name>Tree</name>
    <message>
        <location filename="../tree.cpp" line="1085"/>
        <source>Free Objects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="1122"/>
        <source>Group </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="1030"/>
        <source>Page </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="1144"/>
        <source>Outline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="1145"/>
        <source>Element</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="315"/>
        <source>Picture</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="290"/>
        <source>File: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="294"/>
        <source>Original PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="298"/>
        <source>Actual PPI: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="302"/>
        <source>Colorspace: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="307"/>
        <source>Unknown</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="317"/>
        <source>No Image Loaded</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="341"/>
        <source>Linked Text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="343"/>
        <source>Text Frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="346"/>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="349"/>
        <source>Paragraphs: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="356"/>
        <source>Lines: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="360"/>
        <source>Words: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="367"/>
        <source>Chars: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="376"/>
        <source>Print: </source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="379"/>
        <source>Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="381"/>
        <source>Disabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="388"/>
        <source>In&amp;fo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="409"/>
        <source>Preview Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="450"/>
        <source>&amp;PDF Options</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="474"/>
        <source>Send to La&amp;yer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="483"/>
        <source>Le&amp;vel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="533"/>
        <source>Conve&amp;rt to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="536"/>
        <source>Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="544"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../tree.cpp" line="566"/>
        <source>Contents</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UnderlineValues</name>
    <message>
        <location filename="../styleselect.cpp" line="63"/>
        <source>Auto</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="74"/>
        <source> %</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="73"/>
        <source>Displacement</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../styleselect.cpp" line="75"/>
        <source>Linewidth</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoManager</name>
    <message>
        <location filename="../undomanager.cpp" line="682"/>
        <source>Add vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="683"/>
        <source>Add horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="684"/>
        <source>Remove vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="685"/>
        <source>Remove horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="688"/>
        <source>Move vertical guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="689"/>
        <source>Move horizontal guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="690"/>
        <source>Lock guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="691"/>
        <source>Unlock guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="692"/>
        <source>Move</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="693"/>
        <source>Resize</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="694"/>
        <source>Rotate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="695"/>
        <source>X1: %1, Y1: %2, %3
X2: %4, Y2: %5, %6</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="696"/>
        <source>W1: %1, H1: %2
W2: %3, H2: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="697"/>
        <source>Change Image Offset</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="698"/>
        <source>Change Image Scale</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="699"/>
        <source>X1: %1, Y1: %2
X2: %4, Y2: %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="700"/>
        <source>X: %1, Y: %2
X: %4, Y: %5</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="701"/>
        <source>Selection</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="702"/>
        <source>Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="703"/>
        <source>Selection/Group</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="704"/>
        <source>Create</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="705"/>
        <source>X: %1, Y: %2
W: %3, H: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="706"/>
        <source>Align/Distribute</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="707"/>
        <source>Items involved</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="708"/>
        <source>Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="709"/>
        <source>Set fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="710"/>
        <source>Color1: %1, Color2: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="711"/>
        <source>Set fill color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="712"/>
        <source>Set line color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="713"/>
        <source>Set line color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="714"/>
        <source>Flip horizontally</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="715"/>
        <source>Flip vertically</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="716"/>
        <source>Lock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="717"/>
        <source>Unlock</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="718"/>
        <source>Lock size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="719"/>
        <source>Unlock size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="720"/>
        <source>Enable Item Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="721"/>
        <source>Disable Item Printing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="722"/>
        <source>Ungroup</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="723"/>
        <source>Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="724"/>
        <source>Rename</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="725"/>
        <source>From %1
to %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="726"/>
        <source>Apply Master Page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="727"/>
        <source>Paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="728"/>
        <source>Cut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="729"/>
        <source>Set fill color transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="730"/>
        <source>Set line color transparency</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="731"/>
        <source>Set line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="732"/>
        <source>Set the style of line end</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="733"/>
        <source>Set the style of line join</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="734"/>
        <source>Set line width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="735"/>
        <source>No style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="736"/>
        <source>Set custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="737"/>
        <source>Do not use custom line style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="738"/>
        <source>Set start arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="739"/>
        <source>Set end arrow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="741"/>
        <source>Create table</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="742"/>
        <source>Rows: %1, Cols: %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="743"/>
        <source>Set font</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="744"/>
        <source>Set font size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="745"/>
        <source>Set font width</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="746"/>
        <source>Set font height</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="747"/>
        <source>Set font fill color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="748"/>
        <source>Set font stroke color</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="749"/>
        <source>Set font fill color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="750"/>
        <source>Set font stroke color shade</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="751"/>
        <source>Set kerning</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="752"/>
        <source>Set line spacing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="753"/>
        <source>Set paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="754"/>
        <source>Set language</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="755"/>
        <source>Align text</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="756"/>
        <source>Set font effect</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="757"/>
        <source>Image frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="758"/>
        <source>Text frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="759"/>
        <source>Polygon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="760"/>
        <source>Bezier curve</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="761"/>
        <source>Polyline</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="762"/>
        <source>Text on a Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="763"/>
        <source>Convert to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="764"/>
        <source>Import SVG image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="765"/>
        <source>Import EPS image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="766"/>
        <source>Import OpenOffice.org Draw image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="767"/>
        <source>Scratch space</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="769"/>
        <source>Text flows around the frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="770"/>
        <source>Text flows around bounding box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="771"/>
        <source>Text flows around contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="773"/>
        <source>No text flow</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="774"/>
        <source>No object frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="775"/>
        <source>No bounding box</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="776"/>
        <source>No contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="777"/>
        <source>Page %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="778"/>
        <source>Set image scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="779"/>
        <source>Frame size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="780"/>
        <source>Free scaling</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="781"/>
        <source>Keep aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="782"/>
        <source>Break aspect ratio</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="806"/>
        <source>Edit contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="784"/>
        <source>Edit shape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="785"/>
        <source>Reset contour line</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="786"/>
        <source>Add page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="787"/>
        <source>Add pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="788"/>
        <source>Delete page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="789"/>
        <source>Delete pages</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="790"/>
        <source>Add layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="791"/>
        <source>Delete layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="792"/>
        <source>Rename layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="793"/>
        <source>Raise layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="794"/>
        <source>Lower layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="795"/>
        <source>Send to layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="796"/>
        <source>Enable printing of layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="797"/>
        <source>Disable printing of layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="798"/>
        <source>Change name of the layer</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="799"/>
        <source>Get image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="800"/>
        <source>Multiple duplicate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="801"/>
        <source>Apply text style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="802"/>
        <source>&amp;Undo: %1</source>
        <comment>f.e. Undo: Move</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="803"/>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="804"/>
        <source>&amp;Redo: %1</source>
        <comment>f.e. Redo: Move</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="805"/>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="807"/>
        <source>Reset control point</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="808"/>
        <source>Reset control points</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="809"/>
        <source>Apply image effects</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="810"/>
        <source>Insert frame</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="811"/>
        <source>Adjust frame to the image size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="740"/>
        <source>Set start and end arrows</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="686"/>
        <source>Remove vertical auto guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="687"/>
        <source>Remove horizontal auto guide</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="772"/>
        <source>Text flows around image clipping path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="812"/>
        <source>Remove all guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="813"/>
        <source>Remove page guides</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="814"/>
        <source>Copy</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="815"/>
        <source>Copy page</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undomanager.cpp" line="816"/>
        <source>Convert to outlines</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoPalette</name>
    <message>
        <location filename="../undogui.cpp" line="283"/>
        <source>Initial State</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undogui.cpp" line="296"/>
        <source>Action History</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undogui.cpp" line="297"/>
        <source>Show selected object only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undogui.cpp" line="298"/>
        <source>&amp;Undo</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../undogui.cpp" line="299"/>
        <source>&amp;Redo</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UndoWidget</name>
    <message>
        <location filename="../undogui.cpp" line="159"/>
        <source>%1: %2</source>
        <comment>undo target: action (f.e. Text frame: Resize)</comment>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UnicodeChooseButton</name>
    <message>
        <location filename="../unicodesearch.cpp" line="46"/>
        <source>&amp;Search</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UnicodeSearch</name>
    <message>
        <location filename="../unicodesearch.ui" line="14"/>
        <source>Unicode Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../unicodesearch.ui" line="42"/>
        <source>&amp;Search:</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UpgradeChecker</name>
    <message>
        <location filename="../upgradechecker.cpp" line="83"/>
        <source>Attempting to get the Scribus version update file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="84"/>
        <source>(No data on your computer will be sent to an external location)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="104"/>
        <source>Timed out when attempting to get update file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="109"/>
        <source>Error when attempting to get update file: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="139"/>
        <source>File not found on server</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="141"/>
        <source>Could not open version file: %1
Error:%2 at line: %3, row: %4</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="216"/>
        <source>An error occurred while looking for updates for Scribus, please check your internet connection.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="220"/>
        <source>No updates are available for your version of Scribus %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="223"/>
        <source>One or more updates for your version of Scribus (%1) are available:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="227"/>
        <source>Please visit www.scribus.net for details.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../upgradechecker.cpp" line="224"/>
        <source>This list may contain development versions.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UsePrinterMarginsDialog</name>
    <message>
        <location filename="../useprintermarginsdialog.cpp" line="44"/>
        <source>Minimum Margins for Page Size %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="13"/>
        <source>Use Printer Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="21"/>
        <source>Select &amp;Printer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="46"/>
        <source>Margins</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="61"/>
        <source>Right:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="104"/>
        <source>&amp;Top:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="117"/>
        <source>&amp;Bottom:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="130"/>
        <source>&amp;Left:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="189"/>
        <source>&amp;OK</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="192"/>
        <source>Alt+O</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="199"/>
        <source>&amp;Cancel</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../useprintermarginsdialog.ui" line="202"/>
        <source>Alt+C</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtFileDialog</name>
    <message>
        <location filename="../gtdialogs.cpp" line="64"/>
        <source>Choose the importer to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="65"/>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="70"/>
        <source>Import Text Only</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="71"/>
        <source>Import text without any formatting</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="78"/>
        <source>Importer:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="116"/>
        <source>Encoding:</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="48"/>
        <source>Open</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>gtImporterDialog</name>
    <message>
        <location filename="../gtdialogs.cpp" line="155"/>
        <source>Choose the importer to use</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="165"/>
        <source>Remember association</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../gtdialogs.cpp" line="167"/>
        <source>Remember the file extension - importer association and do not ask again to select an importer for files of this type.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>nftdialog</name>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.ui" line="13"/>
        <source>New From Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="31"/>
        <source>&amp;Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="32"/>
        <source>&amp;Open</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="57"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="126"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="128"/>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="130"/>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="132"/>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="134"/>
        <source>Usage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="136"/>
        <source>Created with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="138"/>
        <source>Date</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="140"/>
        <source>Author</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="161"/>
        <source>Downloading Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="164"/>
        <source>Document templates can be found at http://www.scribus.net/ in the Downloads section.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="167"/>
        <source>Installing Templates</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="173"/>
        <source>Extract the package to the template directory ~/.scribus/templates for the current user or PREFIX/share/scribus/templates for all users in the system.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="176"/>
        <source>Preparing a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="178"/>
        <source>Make sure images and fonts you use can be used freely. If fonts cannot be shared do not collect them when saving as a template.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="179"/>
        <source>The template creator should also make sure that the Installing Templates section above applies to their templates as well. This means a user should be able to download a template package and be able to extract them to the template directory and start using them.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="181"/>
        <source>Removing a template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="183"/>
        <source>Removing a template from the New From Template dialog will only remove the entry from the template.xml, it will not delete the document files. A popup menu with remove is only shown if you have write access to the template.xml file.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="186"/>
        <source>Translating template.xml</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.cpp" line="188"/>
        <source>Copy an existing template.xml to a file called template.lang_COUNTRY.xml (use the same lang code that is present in the qm file for your language), for example template.fi.xml for Finnish language template.xml. The copy must be located in the same directory as the original template.xml so Scribus can load it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.ui" line="62"/>
        <source>&amp;About</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.ui" line="86"/>
        <source>&amp;Image</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/newfromtemplateplugin/nftdialog.ui" line="114"/>
        <source>&amp;Help</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>satdialog</name>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="13"/>
        <source>Save as Template</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="96"/>
        <source>Name</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="103"/>
        <source>Category</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="110"/>
        <source>Page Size</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="117"/>
        <source>Colors</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="124"/>
        <source>Description</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="131"/>
        <source>Usage</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="38"/>
        <source>Author</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="31"/>
        <source>Email</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="143"/>
        <source>Legal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="144"/>
        <source>Letter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="144"/>
        <source>Tabloid</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="151"/>
        <source>landscape</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="156"/>
        <source>portrait</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.cpp" line="172"/>
        <source>custom</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/saveastemplateplugin/satdialog.ui" line="89"/>
        <source>&amp;More Details</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tfDia</name>
    <message>
        <location filename="../plugins/gettext/textfilter/tfdia.cpp" line="33"/>
        <source>Create filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tfdia.cpp" line="56"/>
        <source>C&amp;lear</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tfdia.cpp" line="59"/>
        <source>&amp;Delete</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tfdia.cpp" line="66"/>
        <source>Choose a previously saved filter</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tfdia.cpp" line="251"/>
        <source>Give a name to this filter for saving</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tfdia.cpp" line="121"/>
        <source>Give a name for saving</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>tfFilter</name>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="108"/>
        <source>Disable or enable this filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="134"/>
        <source>Remove this filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="139"/>
        <source>Add a new filter row</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="392"/>
        <source>to</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="208"/>
        <source>and</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="212"/>
        <source>remove match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="213"/>
        <source>do not remove match</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="223"/>
        <source>words</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="262"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="263"/>
        <source>Replace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="264"/>
        <source>Apply</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="421"/>
        <source>Value at the left is a regular expression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="297"/>
        <source>with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="309"/>
        <source>paragraph style</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="313"/>
        <source>all instances of</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="395"/>
        <source>all paragraphs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="396"/>
        <source>paragraphs starting with</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="397"/>
        <source>paragraphs with less than</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../plugins/gettext/textfilter/tffilter.cpp" line="398"/>
        <source>paragraphs with more than</source>
        <translation type="unfinished"></translation>
    </message>
</context>
</TS>
