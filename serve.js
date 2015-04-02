#!/usr/bin/env node

var program = require('commander');

// Command Line Interface
program
	.option('-d, --auto-deploy', 'github commit -> ./deploy.sh')
	.option('-w, --watch', 'Webpack the portal templates')
	.option('-p, --port <port>', 'specify the port [4000]', '4000')
	.parse(process.argv);


//Start App
var winston = require('winston');
var koa = require('koa');
var mount = require('koa-mount');
var deploy = require('./deploy/deploy.js');

var app = koa();

var quip = require('./quip');
var portal = require('./portal/portal.js')

app.use(mount('/quip', quip));
app.use(mount(portal));

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
