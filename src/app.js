var config = require('../config.js');

var ga = require('./components/misc/google-analytics')(config.analytics);

var page = require('./page.ejs');

document.addEventListener("DOMContentLoaded", function () {
	document.body.innerHTML = page({});
	ga('send', 'pageview');
});
