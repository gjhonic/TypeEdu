#! /bin/bash

#Compiles typescript and runs nodejs
tsc --outFile Js/App.js Type/Square.ts Type/main.ts
echo "File compiles"
echo "Starting Node ..."
echo "- - - - - - - - - - "
node Js/App.js