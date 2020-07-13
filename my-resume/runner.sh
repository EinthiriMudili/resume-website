#!/bin/bash
 
#Build React app

npm run build

rm -rf ../static

mv build ../static

cd ../


git add .
git commit -m "more progress"
git pull
git push