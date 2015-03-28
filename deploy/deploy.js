#!/usr/bin/env node

var githubhook = require('githubhook');
var exec = require('child_process').exec;

module.exports = function (secret, command) {
	var github = githubhook({
		secret: secret
	});

	github.listen();
	console.log('GitHub Deploy Listening');

	github.on('push', function (repo, ref, data) {
		console.log('WebHook: GitHub Push');
		var child = exec(command, function (error, stdout, stderr) {
			console.log(stdout);
		});
	});
}
