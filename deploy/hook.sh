#!/bin/bash

echo "Push Hook Script Initiated"

git pull

foreverio restart ~/metadev/bin/serve.js
