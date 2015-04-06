var page = require('./page.ejs');

document.addEventListener("DOMContentLoaded", function () {
	document.body.innerHTML = page({});
});
