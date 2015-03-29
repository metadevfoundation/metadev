#!/usr/bin/env node

require('../deploy/deploy.js')({
	repository: 'metagen/metadev',
	port: 9001
});

// provides cli
var program = require('commander');
program.option('-H, --host <host>', 'specify the host [0.0.0.0]', '0.0.0.0').option(
	'-p, --port <port>', 'specify the port [4000]', '4000').option(
	'-b, --backlog <size>', 'specify the backlog size [511]', '511').option(
	'-r, --ratelimit <n>', 'ratelimit requests [2500]', '2500').option(
	'-d, --ratelimit-duration <ms>', 'ratelimit duration [1h]', '1h').parse(
	process.argv);

var app = require('../lib/client.js');

app.listen(program.port);
console.log('Listening on port %s', program.port)
