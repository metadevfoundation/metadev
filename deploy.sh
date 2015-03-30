#!/bin/bash

echo "Push Hook Script Initiated"

if [ $(hostname) != forum ]; then
	exit 0;
fi

git pull

forever restart ./serve.js
