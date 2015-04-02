var index = require('./index.ejs');

document.addEventListener("DOMContentLoaded", function () {
	document.body.innerHTML = index({});
	console.log('I am happy');
});

console.log(' oh really');
