#ifndef EPUBEXPORTCSSPARSE_H
#define EPUBEXPORTCSSPARSE_H

struct BoardElement {
    QString id;
};

struct FrameElement {
    QList<BoardElement *> boardElements;
};

class EpubExportCssParser : public QObject
{
    Q_OBJECT
public:
    EpubExportCssParser();
    ~EpubExportCssParser();
    void setFilepath(QString filepath) {this->filepath = filepath;}
    void start();

private:
    QString filepath;
};

/*
 this is a modified syntax build upon the example from
 http://echopoint.sourceforge.net/LinkedArticles/CascadingStyleSheets.html
 we will need to add supoort (and ignore) for
 quick overlook, in the BNF, there is no definition for :
  - comments
  - @import
  - @media

styleEntry    ::= <classNameSeq> "{"
        [ <styleAttributeSeq> ]
       "}"
classNameSeq  ::= <classNameSelector> { "," <classNameSelector> }
styleAttributeSeq  ::= attrName ":" attrValue ";"
classNameSelector ::= <javaClassName>   |
      <javaClassName>#<id>  |
      <javaClassName>!<group>
javaClassName  ::= {<javaPackageName> "." } <identifier>
javaPackageName  ::= <identifier>
id      ::= <identifier>
group    ::= <identifier>
attrName   ::= <identifier>
attrValue   ::= <string>   |
      <number>   |
      "null"   |
      <color>   |
      <font>   |
      <insets>  |
      <image>   |
      <corners>  |
      <rect>   |
      <intarray>
color    ::= "#" <hexnumber> |
      "color(" <number> "," <number> "," <number> ")" |
      "rgb("   <number> "," <number> "," <number> ")" |
      "black" | "blue" | "cyan" | "darkgray" | "green" |
      "lightgray" | "magenta" | "orange" | "pink" | "red" |
      "white" | "yellow"
insets    ::= "insets(" <number> "," <number> "," <number> "," <number> ")" |
      "insets(" <number> "," <number>  ")" |
      "insets(" <number> ")"
image    ::= "image(" <string> "," <number> "," <number> ")" |
      "image(" <string> ")"
corners    ::= "corners(" <string> "," <number> "," <number> "," <string> "," <number> "," <number> ")" |
      "corners(" <string> "," <number> "," <number> ")"
rect    ::= "rect(" <number> "," <number> "," <number> "," <number> ")"
intarray   ::= "int(" <number> [ "," <number> ] ")"
font    ::= <fontName> "," <fontStyle> "," <fontSize> |
      "font(" <fontName> "," <fontStyle> "," <fontSize> ")"
fontName   ::= "arial" | "helvetica" | "monospace" | "sans_serif" | "sans serif" |
      "serif" | "times" | "times_new_roman" | "times new roman" | "times_roman" |
      "times roman" | "verdana"
fontStyle   ::= "plain" | "bold" | "italic" | "underline" [ "|" <fontStyle> ]
fontSize   ::= <number>
identiifer    ::= <letter> { <letter> | <digit> | "_" }
string    ::= any <letter> | """ { any <letter> } """ | "'" { any <letter> } "'"
number    ::= <digit> { <digit> }
hexnumber   ::= <hexdigit> { <hexdigit> }
hexdigit   ::= <digit> | "A" | "B" | "C" | "D" | "E" | "F"
digit    ::= "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
*/


#endif // EPUBEXPORTCSSPARSE_H

