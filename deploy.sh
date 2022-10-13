#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git config --local user.name nizar
git config --local user.email nizar.dev01@gmail.com
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
git branch deploy && git checkout deploy
git remote add origin git@personal:nizar-dev01/babylon-101.git
git branch --set-upstream-to origin/deploy
git push -f git@personal:nizar-dev01/babylon-101.git deploy

rm -rf .git

cd -
