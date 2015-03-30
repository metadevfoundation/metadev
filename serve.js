#!/usr/bin/env node

var winston = require('winston');
var program = require('commander');
var deploy = require('./deploy/deploy.js');

// Load App
var app = require('./lib/client.js');

// Github Deploy Hook
deploy({
  repository: 'metagen/metadev',
  port: 9001
});

// Command Line Interface
program.option('-p, --port <port>', 'specify the port [4000]', '4000')
  .parse(process.argv);

//Start App
app.listen(program.port);

winston.info(`Server Listening on port ${program.port}`);