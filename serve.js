#!/usr/bin/env node

var winston = require('winston');
var program = require('commander');
var deploy = require('./deploy/deploy.js');

// Load App
var app = require('./lib/client.js');

// Command Line Interface
program
  .option('-d, --auto-deploy', 'github commit -> ./deploy.sh')
  .option('-p, --port <port>', 'specify the port [4000]', '4000')
  .parse(process.argv);

//Start App
app.listen(program.port);
winston.info(`server listening on port ${program.port}`);

// Github Deploy Hook
if (program.autoDeploy) {
  deploy({
    repository: 'metagen/metadev',
    branch: 'master',
    port: 9001
  }).attach('./deploy.sh', function (err, stdout, stderr) {
    if (err)
      winston.error(err);
    else
      winston.info(stdout);
  });
  winston.info(`deployer listening on port 9001`);
}