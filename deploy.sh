#!/usr/bin/env sh

yarn build
cd dist
echo "" > .nojekyll

git init
git checkout -B main
git add -A
git commit -m "deploy"

git push -f https://github.com/xXTgamerXx/wafer-desktop.git main:gh-pages
cd ..