var gith = require('gith')
var execFile = require('child_process').execFile;

module.exports = function (options) {

  var self = this;
  var hooks = gith.create(options);
  var scripts = [];

  this.hooks = hooks();

  this.hooks.on('file:all', function (payload) {
    self.deploy();
  });

  this.deploy = function () {
    scripts.forEach(function (run) {
      run();
    });
    return this;
  };

  this.attach = function (script, cb) {
    scripts.push(function runScript() {
      execFile(script, cb);
    });
    return this;
  }

  return this;
}
