#! /bin/bash

# Usage:
#   ./buildit.sh 
#       this will just build the document locally from the sources. 
#       you can view it locally by viewing _build/html/index.html in a browser
#   ./buildit.sh -w
#       This will build the document and then publish it online


jupyter-book build .

while getopts "w" OPTION
do
    case $OPTION in
        w)
            ghp-import -n -p -f _build/html
    esac
done

