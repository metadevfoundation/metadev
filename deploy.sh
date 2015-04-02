#!/bin/bash

echo "Push Hook Script Initiated"

git pull

forever stop ./serve.js
npm install
forever start ./serve.js
