#!/bin/bash

git pull

forever restart ../serve.js
