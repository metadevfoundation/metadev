var gith = require('gith')
var execFile = require('child_process').execFile;

module.exports = function (options) {
	
	var hooks = gith.create(options.port || 9001);
	console.log('listening to github on %s', options.port || 9001);
	hooks({
		repo: options.repository
	}).on('all', function (payload) {
		console.log('gith event hook');
	}).on('file:all', function (payload) {
		console.log('github push hook activated on branch %s.', payload.branch);
		if (payload.branch === 'master') {
			console.log('running hook.sh');
			execFile('hook.sh', function (error, stdout, stderr) {
				// Log success in some manner
				console.log(stdout);
			});
		}
	});
}

