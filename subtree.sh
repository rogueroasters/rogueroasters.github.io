#!/bin/bash
echo 'Building...'
yarn build
echo 'subtree push...'
git subtree push --prefix build origin master