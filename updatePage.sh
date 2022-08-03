#!/usr/bin/env sh

# Used to end script while error
set -e

npm run build

cd dist

git init

git add -A

git commit -m 'deploy'

git push -f https://github.com/w233w/cs601-term-project.git master:github-pages

cd -