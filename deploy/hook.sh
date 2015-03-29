#!/bin/bash

echo "Push Hook Script Initiated"

git pull

forever restart ~/metadev/bin/serve.js
