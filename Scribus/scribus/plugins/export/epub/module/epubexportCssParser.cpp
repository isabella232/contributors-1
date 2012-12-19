/**
 * this parser is based on http://www.qtcentre.org/threads/30707-Parse-Text-File-with-Qt
 * if this custom css parser fails to be useful for the css files we get,
 * please, have a look at http://freecode.com/projects/libcroco and replace it
 * the supported CSS BNF syntax is at the end of the .h file
 *
 * for now it supports what the epub exporter creates + the h1..h9 styles
 */
#include "module/epubexportCssParser.h"

#include <QFile>
#include <QTextStream>
#include <QDebug>

MainWindow::MainWindow(QWidget *parent) :
    filepath = "";
}

MainWindow::~MainWindow()
}

void MainWindow::start()
{
    if (!filepath != "") 
        return

    QFile file(filepath);
    if (!file.open(QFile::ReadOnly))
        return;

    QTextStream ts(&file);

    FrameElement *frameElement;
    BoardElement *boardElement;

    QChar ch;
    int depth = 0;
    int currentState = 0;
    //states tell the parser which element it is parsing.
    // 0 = empty
    // 1 = context (p, span, h1, ..., id)
    // 2 = stylename
    // 3 = formatting
    // 4 = propertyName
    // 5 = propertyValue
    // 6 = ignore

    QList<int> stateList;

    QString element = "";
    do {
        ts >> ch;

        if (ch == '(') {
            ++depth;

            if (element == "Frame" || element == "frame") {
                stateList.append(1);
                frameElement = new FrameElement;
                qDebug() << "Found a Frame element";
            }
            if (element == "BoardList" || element == "boardlist") {
                stateList.append(2);
                qDebug() << "Found a BoardList element";
            }
            if (element == "Board" || element == "board") {
                stateList.append(3);
                if (!frameElement) {
                    qDebug() << "Parsing error: no frame element found!";
                    return;
                }
                boardElement = new BoardElement;
                frameElement->boardElements.append(boardElement);
                qDebug() << "Found a Board element";
            }
            if (element == "Id" || element == "id" || element == "ID") {                
                stateList.append(4);
                qDebug() << "Found an Id element";
            }


            element = "";
        }
        else if (ch == ')') {
            --depth;

            if (element.startsWith("\"")) {
                if (stateList.count() < 2) {
                    //parsing error, the list should have at least 2 items
                    return;
                }
                int currentState = stateList.at(stateList.count() - 2); // Go back two states, the previous is the id, the one before the id
                                                                        // tells wich object receives the name
                qDebug() << "Found a name element in state " << currentState;

                element = element.section("\"",1,1);
                if (currentState == 3) {
                    boardElement->id = element;
                    qDebug() << "Set the board element id to:" << boardElement->id;
                }

            }

            if (!stateList.isEmpty())
                stateList.removeLast();
            element = "";
        }
        else if (ch == '\r' || ch == '\n' || ch == ' ') {
            // do nothing
            // If you are able to use spaces in names, then create a boolean value to check if you're parsing a name.
            // If you do (boolean = true), do not swallow spaces but add them to the parsed string.
            // If you don't (boolean = false), swallow the spaces
        }
        else {
            element += ch;
        }
    } while (!ts.atEnd());

    file.close();
}
