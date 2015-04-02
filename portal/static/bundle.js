/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var index = __webpack_require__(1);

	document.addEventListener("DOMContentLoaded", function () {
		document.body.innerHTML = index({});
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<style>\n	.center {\n		position: relative;\n		z-index: 100;\n		max-width: 1200px;\n		margin: auto;\n		overflow: hidden;\n	}\n\n	.misted::before {\n		display: block;\n		background: rgba(255, 255, 255, 0.85);\n\n		content: "";\n		position: absolute;\n		left: 0;\n		right: 0;\n		top: -80px;\n		height: 0;\n		background: transparent;\n		border-left: 80px solid transparent;\n		border-right: 80px solid transparent;\n		border-bottom: 80px solid #aaa;\n	}\n	.misted {\n		background: rgba(255, 255, 255, 0.85);\n	}\n\n</style>\n\n<% include portal/src/components/header %>\n<% include portal/src/design/mesh-form %>\n\n<div class="center misted">\n	<% include portal/src/components/02-sub-header %>\n	<% include portal/src/components/03-paragraphs %>\n	<% include portal/src/components/04-team %>\n	<% include portal/src/components/05-contact-us %>\n</div>\n',
	        filename: "."
	    };
	    function rethrow(err, str, filename, lineno) {
	        var lines = str.split("\n"), start = Math.max(lineno - 3, 0), end = Math.min(lines.length, lineno + 3);
	        var context = lines.slice(start, end).map(function(line, i) {
	            var curr = i + start + 1;
	            return (curr == lineno ? " >> " : "    ") + curr + "| " + line;
	        }).join("\n");
	        err.path = filename;
	        err.message = (filename || "ejs") + ":" + lineno + "\n" + context + "\n\n" + err.message;
	        throw err;
	    }
	    try {
	        var buf = [];
	        with (locals || {}) {
	            (function() {
	                buf.push('<style>\n	.center {\n		position: relative;\n		z-index: 100;\n		max-width: 1200px;\n		margin: auto;\n		overflow: hidden;\n	}\n\n	.misted::before {\n		display: block;\n		background: rgba(255, 255, 255, 0.85);\n\n		content: "";\n		position: absolute;\n		left: 0;\n		right: 0;\n		top: -80px;\n		height: 0;\n		background: transparent;\n		border-left: 80px solid transparent;\n		border-right: 80px solid transparent;\n		border-bottom: 80px solid #aaa;\n	}\n	.misted {\n		background: rgba(255, 255, 255, 0.85);\n	}\n\n</style>\n\n' + function() {
	                    var buf = [];
	                    buf.push('<style media="screen">\n	.navbar-static-top {\n		margin-bottom: 0;\n	}\n</style>\n<nav class="navbar navbar-default navbar-static-top header" role="navigation">\n	<div class="container">\n		<div class="navbar-header">\n			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#top-menu">\n				<span class="icon-bar"></span>\n				<span class="icon-bar"></span>\n				<span class="icon-bar"></span>\n			</button>\n\n			<a class="navbar-brand" href="/">MetaDev Foundation</a>\n		</div>\n\n		<div class="collapse navbar-collapse" id="top-menu">\n			<ul class="nav navbar-nav navbar-right">\n				<li><a href="http://forum.metadevfoundation.org">Forums</a></li>\n				<li><a href="http://blog.metadevfoundation.org">Blog</a></li>\n				<li><a href="http://shop.metadevfoundation.org:3000">Shop</a></li>\n			</ul>\n		</div>\n	</div>\n</nav>\n');
	                    return buf.join("");
	                }() + "\n" + function() {
	                    var buf = [];
	                    buf.push("<style>\n\n	svg {\n		shape-rendering: geometricPrecision;\n		z-index: -1;\n	  position: absolute;\n\n		top: 0;\n		right: 0;\n		left: 0;\n		bottom: 0;\n		margin-top: 60px;\n	}\n\n	line {\n		stroke: url(#gradient);\n		stroke: #3c3e50;\n		stroke-width: 0.1;\n	}\n</style>\n\n");
	                    __stack.lineno = 22;
	                    var total = 20;
	                    var width = 1e3;
	                    var height = 1e3;
	                    buf.push('\n\n<svg viewBox="0 0 1000 1000">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n			<stop offset="0%" stop-color="#FFF"/>\n      <stop offset="0%" stop-color="#FFF"/>\n      <stop offset="100%" stop-color="#111"/>\n    </linearGradient>\n			<g id="rays">\n				<line	x1="', escape((__stack.lineno = 37, 0)), '" x2="', escape((__stack.lineno = 37, width)), '" y1="0" y2="', escape((__stack.lineno = 37, height)), '" />\n				<line	x1="', escape((__stack.lineno = 38, width)), '" x2="', escape((__stack.lineno = 38, 0)), '" y1="0" y2="', escape((__stack.lineno = 38, height)), '" />\n\n				');
	                    __stack.lineno = 40;
	                    for (var i = 0; i < total; i++) {
	                        dx = i * width / total;
	                        dy = i * height / total;
	                        buf.push('\n					<!-- corner to side -->\n					<line	x1="0" x2="', escape((__stack.lineno = 44, width)), '" y1="0" y2="', escape((__stack.lineno = 44, dy)), '" />\n					<line	x1="', escape((__stack.lineno = 45, width)), '" x2="0" y1="0" y2="', escape((__stack.lineno = 45, dy)), '" />\n				');
	                        __stack.lineno = 46;
	                    }
	                    buf.push("\n\n				");
	                    __stack.lineno = 48;
	                    for (var i = 0; i < total; i++) {
	                        dx = i * width / total;
	                        dy = i * height / total;
	                        buf.push('\n					<!-- corner to bottom -->\n					<line	x1="', escape((__stack.lineno = 52, 0)), '" x2="', escape((__stack.lineno = 52, dx)), '" y1="0" y2="', escape((__stack.lineno = 52, height)), '" />\n					<line	x1="', escape((__stack.lineno = 53, width)), '" x2="', escape((__stack.lineno = 53, dx)), '" y1="0" y2="', escape((__stack.lineno = 53, height)), '" />\n				');
	                        __stack.lineno = 54;
	                    }
	                    buf.push('\n\n\n			</g>\n  </defs>\n\n		<g>\n			<use xlink:href="#rays" />\n		</g>\n\n</svg>\n');
	                    return buf.join("");
	                }() + '\n\n<div class="center misted">\n	' + function() {
	                    var buf = [];
	                    buf.push('<style>\n	.header-drop {\n		margin-top: 15px;\n		margin-bottom: 15px;\n		background: #EEEEEE;\n		line-height: 300px;\n		text-align: center;\n		padding: 3em;\n	}\n</style>\n\n<div class="container header-drop">\n		<h1>Web of Open Startups.</h1>\n</div>\n');
	                    return buf.join("");
	                }() + "\n	" + function() {
	                    var buf = [];
	                    buf.push('<style>\n\n		.paragraphs {\n\n			background: white;\n			border: 1px solid #EEE;\n		}\n	.pitch-row {\n		margin: 5px auto;\n		padding: 10px;\n	}\n	.content .row img {\n		margin: auto;\n	}\n	hr.soften {\n	  height: 1px;\n	  background-image: -webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n	  background-image:    -moz-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n	  background-image:     -ms-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n	  background-image:      -o-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n	  border: 0;\n	}\n</style>\n\n<div class="container paragraphs">\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			<h2>Why MetaDev?</h2>\n			<p>There is a clear opportunity to improve the world by creating products that empower and enrich their users, disrupting systems that create economic and social inequality.  We think that rapid, iterative improvements in production techniques, collaborative technologies, and intellectual property management are not only possible but within reach and that we have a duty to reach for it.  We want to see a future where diffuse global wealth is the norm, and we\'re building the tools necessary to take the next step towards that future.</p>\n		</div>\n	</div>\n	<hr class="soften">\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			<h2>What is MetaDev?</h2>\n			<ul>\n				<li>A Hybrid Organization: Workspace + learning + manufacturing + global sales</li>\n				<li>An infrastructure platform for startups with high monetization potential and an understanding of next generation business models and technologies.</li>\n				<li>A tangible gathering space for open source community leaders and beginners alike to exchange their views.</li>\n				<li>A knowledge-sharing community aimed at helping people from all backgrounds do the work they are passionate about together.</li>\n			</ul>\n		</div>\n	</div>\n	<hr class="soften">\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			<h2>How?</h2>\n\n			<ol>\n				<li>Build a multidisciplinary team and provide them with all of the resources needed to rapidly prototype and manufacture hardware, software, webware, and service-based solutions for the emergent "internet of things,â€ as well as traditional computing devices.</li>\n				<li>Develop and **commercialize** open hardware products that span every price bracket using modular components.</li>\n				<li>Develop open software with clear applications in today\'s world.</li>\n				<li>Run a firmware repository containing firmware for both open and opened technology platforms.</li>\n				<li>Leverage our 100% transparent, open business model to enhance our competitive advantage in: recruiting, customers\' and suppliers understanding of our strategies, and public awareness of our solutions</li>\n				<li>In order to have an excellent product pipeline and top talent, support open technology projects of every type.</li>\n				<li>Intentionally integrate our projects and corporate ownership as appropriate, while seeking further integration opportunities.</li>\n			</ol>\n		</div>\n	</div>\n</div>\n');
	                    return buf.join("");
	                }() + "\n	" + function() {
	                    var buf = [];
	                    buf.push('\n\n<div class="container">\n	<div class="row">\n		<div class="col-lg-12">\n			<h2>Team</h2>\n			<img class="img-thumbnail" src="http://placehold.it/150x150" alt="Dan the Man">\n			<img class="img-thumbnail" src="http://placehold.it/150x150" alt="Dan the Man">\n			<img class="img-thumbnail" src="http://placehold.it/150x150" alt="Dan the Man">\n			<img class="img-thumbnail" src="http://placehold.it/150x150" alt="Dan the Man">\n			<img class="img-thumbnail" src="http://placehold.it/150x150" alt="Dan the Man">\n		</div>\n	</div>\n</div>\n');
	                    return buf.join("");
	                }() + "\n	" + function() {
	                    var buf = [];
	                    buf.push('<style>\n  .contact-us {\n    background: #333;\n  }\n\n  .contact-us h2 {\n    color:#DDD;\n  }\n  .contact-col {\n    padding: 5px 80px;\n  }\n</style>\n\n<hr>\n\n<div class="well container contact-us">\n  <div class="row">\n    <div class="contact-col col-lg-12" >\n    <h2>Join Us</h2>\n\n    <form id="contact-form" onSubmit="return contactSubmit()">\n      <div class="form-group">\n        <input type="email" class="form-control" id="email" placeholder="Email">\n      </div>\n      <div class="form-group">\n        <textarea class="form-control" id="content" placeholder="Powerfully Integrated Textbox of the Wise"></textarea>\n      </div>\n      <div class="form-group">\n          <button type="submit" class="btn btn-default">Contact Us</button>\n      </div>\n    </form>\n\n    </div>\n  </div>\n</div>\n\n\n\n<script>\n  var form = d3.select(\'#contact-form\');\n\n  function contactSubmit(e) {\n    console.log(\'Contact Submit\');\n    // form.style(\'opacity\', 0.1);\n    var data = {\n      title: document.getElementById("email").value,\n      content: document.getElementById("content").value\n    }\n    qwest.post(\'/quip/create\', data).then(function(response) {\n      // form.style(\'opacity\', 1);\n    });\n\n    return false;\n  };\n</script>\n');
	                    return buf.join("");
	                }() + "\n</div>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ }
/******/ ]);