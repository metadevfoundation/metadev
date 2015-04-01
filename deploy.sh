#!/bin/bash

echo "Push Hook Script Initiated"

git pull
npm install

forever restart ./serve.js
