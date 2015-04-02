#!/usr/bin/env node

var winston = require('winston');
var koa = require('koa');
var mount = require('koa-mount');
var serve = require('koa-static');
var program = require('commander');
var path = require('path');
// metadev modules
var deploy = require('./deploy');
var quip = require('./quip');

// Command Line Interface
program
	.option('-d, --auto-deploy', 'github commit -> ./deploy.sh')
	.option('-p, --port <port>', 'specify the port [4000]', '4000')
	.parse(process.argv);


var app = koa();
app.use(mount('/quip', quip));
app.use(serve(path.join(__dirname, 'client/static/')));

app.listen(program.port);
winston.info(`server listening on port ${program.port}`);

// Github Deploy Hook
if (program.autoDeploy) {
	deploy({
		repository: 'metagen/metadev',
		branch: 'master',
		port: 9001
	}).attach('./deploy.sh', function (err, stdout, stderr) {
		winston.info(stdout);
	});

	winston.info(`deployer listening on port 9001`);
}
