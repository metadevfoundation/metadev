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
	        input: "\n<% require('./all.css') %>\n<%- require('./components/header.html') %>\n<%- require('./design/mesh-form.ejs')() %>\n\n<div class=\"center\">\n\n	<%- require('./components/paragraphs.ejs')() %>\n\n	<%- require('./components/04-team.html') %>\n	<%- require('./components/05-contact-us.html') %>\n</div>\n",
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
	                buf.push("\n");
	                __stack.lineno = 2;
	                __webpack_require__(3);
	                buf.push("\n", (__stack.lineno = 3, __webpack_require__(5)), "\n", (__stack.lineno = 4, __webpack_require__(2)()), '\n\n<div class="center">\n\n	', (__stack.lineno = 8, __webpack_require__(14)()), "\n\n	", (__stack.lineno = 10, __webpack_require__(7)), "\n	", (__stack.lineno = 11, __webpack_require__(8)), "\n</div>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<style>\n\n	svg {\n		shape-rendering: geometricPrecision;\n		z-index: -1;\n	  position: absolute;\n\n		top: 0;\n		right: 0;\n		left: 0;\n		bottom: 0;\n		margin-top: 0px;\n	}\n\n	line {\n		/*stroke: url(#gradient);*/\n		stroke: #e9e8e3;\n		stroke-width: 0.5;\n	}\n</style>\n\n<%\n	var total = 75;\n\n	var width = 1000;\n	var height = 1000;\n%>\n\n<svg viewBox="0 0 1000 1000">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n			<stop offset="0%" stop-color="#5151c1">\n      <stop offset="100%" stop-color="#333"/>\n    </linearGradient>\n			<g id="rays">\n\n				<% for (var i = 0; i < total; i++) {\n					dx = i * width / total;\n					dy = i * height / total; %>\n					<!-- corner to side -->\n					<line	x1="0" x2="<%= width %>" y1="<%= dy %>" y2="<%= dy %>" />\n					<line	x1="<%= dx %>" x2="<%= dx %>" y1="0" y2="<%= height %>" />\n				<% } %>\n\n				<% for (var i = 0; i < total; i++) {\n					dx = i * width / total;\n					dy = i * height / total; %>\n					<!-- corner to bottom -->\n				<% } %>\n\n\n			</g>\n  </defs>\n\n		<g>\n			<use xlink:href="#rays" transform="translate(40, -180) rotate(15) translate(350, 10) scale(1.5, 1.5)" />\n		</g>\n\n</svg>\n',
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
	                buf.push("<style>\n\n	svg {\n		shape-rendering: geometricPrecision;\n		z-index: -1;\n	  position: absolute;\n\n		top: 0;\n		right: 0;\n		left: 0;\n		bottom: 0;\n		margin-top: 0px;\n	}\n\n	line {\n		/*stroke: url(#gradient);*/\n		stroke: #e9e8e3;\n		stroke-width: 0.5;\n	}\n</style>\n\n");
	                __stack.lineno = 22;
	                var total = 75;
	                var width = 1e3;
	                var height = 1e3;
	                buf.push('\n\n<svg viewBox="0 0 1000 1000">\n  <defs>\n    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">\n			<stop offset="0%" stop-color="#5151c1">\n      <stop offset="100%" stop-color="#333"/>\n    </linearGradient>\n			<g id="rays">\n\n				');
	                __stack.lineno = 37;
	                for (var i = 0; i < total; i++) {
	                    dx = i * width / total;
	                    dy = i * height / total;
	                    buf.push('\n					<!-- corner to side -->\n					<line	x1="0" x2="', escape((__stack.lineno = 41, width)), '" y1="', escape((__stack.lineno = 41, dy)), '" y2="', escape((__stack.lineno = 41, dy)), '" />\n					<line	x1="', escape((__stack.lineno = 42, dx)), '" x2="', escape((__stack.lineno = 42, dx)), '" y1="0" y2="', escape((__stack.lineno = 42, height)), '" />\n				');
	                    __stack.lineno = 43;
	                }
	                buf.push("\n\n				");
	                __stack.lineno = 45;
	                for (var i = 0; i < total; i++) {
	                    dx = i * width / total;
	                    dy = i * height / total;
	                    buf.push("\n					<!-- corner to bottom -->\n				");
	                    __stack.lineno = 49;
	                }
	                buf.push('\n\n\n			</g>\n  </defs>\n\n		<g>\n			<use xlink:href="#rays" transform="translate(40, -180) rotate(15) translate(350, 10) scale(1.5, 1.5)" />\n		</g>\n\n</svg>\n');
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(12)(content, {});
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		module.hot.accept("!!/home/dsont/Projects/metadev/client/node_modules/css-loader/index.js!/home/dsont/Projects/metadev/client/src/all.css", function() {
			var newContent = require("!!/home/dsont/Projects/metadev/client/node_modules/css-loader/index.js!/home/dsont/Projects/metadev/client/src/all.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	exports.push([module.id, "body {\n\tbackground: white;\n}\n\n.header a {\n\tcolor: #111;\n\n}\n\n.center {\n\tbackground: white;\n\tpadding-top: 40px;\n\tposition: relative;\n\tz-index: 100;\n\tmax-width: 1200px;\n\tmargin: auto;\n\tbox-shadow: 0px 0px 25px 5px rgba(0,0,0,0.22);\n\toverflow: hidden;\n}\n\n.header-drop {\n\tcolor: #EEE;\n\tmargin-top: 15px;\n\tmargin-bottom: 15px;\n\tpadding-top: 1em;\n\n}\n\n.header-drop h1 {\n\tline-height: 3em;\n\ttext-align: center;\n}\n\n.paragraphs {\n\n}\n.pitch-row {\n\tmargin: 5px auto;\n\tpadding: 10px;\n}\n.content .row img {\n\tmargin: auto;\n}\nhr.soften {\n  height: 1px;\n  background-image: -webkit-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  background-image:    -moz-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  background-image:     -ms-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  background-image:      -o-linear-gradient(left, rgba(0,0,0,0), rgba(0,0,0,0.3), rgba(0,0,0,0));\n  border: 0;\n}\n.contact-us {\n  background: #333;\n}\n\n.contact-us h2 {\n  color:#DDD;\n}\n.contact-col {\n  padding: 5px 80px;\n}\n", ""]);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<div class=\"container header-drop\">\n\n\t<nav class=\"navbar header\" role=\"navigation\">\n\t\t<div class=\"container\" >\n\t\t\t<div class=\"row\">\n\n\t\t\t\t<div class=\"navbar-header \">\n\t\t\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#top-menu\">\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t\t</button>\n\n\n\t\t\t\t\t<a class=\"navbar-brand\" href=\"/\">MetaDev Foundation</a>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"collapse navbar-collapse\" id=\"top-menu\">\n\t\t\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t\t\t<li><a href=\"http://forum.metadevfoundation.org\">Forums</a></li>\n\t\t\t\t\t\t<li><a href=\"http://blog.metadevfoundation.org\">Blog</a></li>\n\t\t\t\t\t\t<li><a href=\"http://shop.metadevfoundation.org:3000\">Shop</a></li>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</nav>\n\n</div>\n";

/***/ },
/* 6 */,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "\n\n<div class=\"container\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<h2>Team</h2>\n\t\t\t<img class=\"img-thumbnail\" src=\"http://placehold.it/150x150\" alt=\"Dan the Man\">\n\t\t\t<img class=\"img-thumbnail\" src=\"http://placehold.it/150x150\" alt=\"Dan the Man\">\n\t\t\t<img class=\"img-thumbnail\" src=\"http://placehold.it/150x150\" alt=\"Dan the Man\">\n\t\t\t<img class=\"img-thumbnail\" src=\"http://placehold.it/150x150\" alt=\"Dan the Man\">\n\t\t\t<img class=\"img-thumbnail\" src=\"http://placehold.it/150x150\" alt=\"Dan the Man\">\n\t\t</div>\n\t</div>\n</div>\n";

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<hr>\n\n<div class=\"well container contact-us\">\n  <div class=\"row\">\n    <div class=\"contact-col col-lg-12\" >\n    <h2>Join Us</h2>\n\n    <form id=\"contact-form\" onSubmit=\"return contactSubmit()\">\n      <div class=\"form-group\">\n        <input type=\"email\" class=\"form-control\" id=\"email\" placeholder=\"Email\">\n      </div>\n      <div class=\"form-group\">\n        <textarea class=\"form-control\" id=\"content\" placeholder=\"Powerfully Integrated Textbox of the Wise\"></textarea>\n      </div>\n      <div class=\"form-group\">\n          <button type=\"submit\" class=\"btn btn-default\">Contact Us</button>\n      </div>\n    </form>\n\n    </div>\n  </div>\n</div>\n\n\n\n<script>\n  var form = d3.select('#contact-form');\n\n  function contactSubmit(e) {\n    console.log('Contact Submit');\n    // form.style('opacity', 0.1);\n    var data = {\n      title: document.getElementById(\"email\").value,\n      content: document.getElementById(\"content\").value\n    }\n    qwest.post('/quip/create', data).then(function(response) {\n      // form.style('opacity', 1);\n    });\n\n    return false;\n  };\n</script>\n";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h2 id=\"why-metadev-\">Why MetaDev?</h2>\n<p>There is a clear opportunity to improve the world by creating products that empower and enrich their users, disrupting systems that create economic and social inequality. We think that rapid, iterative improvements in production techniques, collaborative technologies, and intellectual property management are not only possible but within reach and that we have a duty to reach for it. We want to see a future where diffuse global wealth is the norm, and we&#39;re building the tools necessary to take the next step towards that future.</p>\n";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h2 id=\"what-is-metadev-\">What is MetaDev?</h2>\n<ul>\n<li><p>A Hybrid Organization: Workspace + learning + manufacturing + global sales</p>\n</li>\n<li><p>An infrastructure platform for startups with high monetization potential and an understanding of next generation business models and technologies.</p>\n</li>\n<li>A tangible gathering space for open source community leaders and beginners alike to exchange their views.</li>\n<li>A knowledge-sharing community aimed at helping people from all backgrounds do the work they are passionate about together.</li>\n</ul>\n";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<h2 id=\"how-\">How?</h2>\n<ol>\n<li>Build a multidisciplinary team and provide them with all of the resources needed to rapidly prototype and manufacture hardware, software, webware, and service-based solutions for the emergent &quot;internet of things,&quot; as well as traditional computing devices.</li>\n<li>Develop and <strong>commercialize</strong> open hardware products that span every price bracket using modular components.</li>\n<li>Develop open software with clear applications in today&#39;s world.</li>\n<li>Run a firmware repository containing firmware for both open and opened technology platforms.</li>\n<li>Leverage our 100% transparent, open business model to enhance our competitive advantage in: recruiting, customers&#39; and suppliers understanding of our strategies, and public awareness of our solutions</li>\n<li>In order to have an excellent product pipeline and top talent, support open technology projects of every type.</li>\n<li>Intentionally integrate our projects and corporate ownership as appropriate, while seeking further integration opportunities.</li>\n</ol>\n";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function () {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	function replaceText(source, id, replacement) {
		var boundaries = ["/** >>" + id + " **/", "/** " + id + "<< **/"];
		var start = source.lastIndexOf(boundaries[0]);
		var wrappedReplacement = replacement
			? (boundaries[0] + replacement + boundaries[1])
			: "";
		if (source.lastIndexOf(boundaries[0]) >= 0) {
			var end = source.lastIndexOf(boundaries[1]) + boundaries[1].length;
			return source.slice(0, start) + wrappedReplacement + source.slice(end);
		} else {
			return source + wrappedReplacement;
		}
	}

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(styleElement.styleSheet.cssText, index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap && typeof btoa === "function") {
			try {
				css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(sourceMap)) + " */";
				css = "@import url(\"data:text/css;base64," + btoa(css) + "\")";
			} catch(e) {}
		}

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function() {
		var list = [];
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
		return list;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = function anonymous(locals, filters, escape, rethrow) {
	    escape = escape || function(html) {
	        return String(html).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;");
	    };
	    var __stack = {
	        lineno: 1,
	        input: '<div class="container paragraphs">\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			<%- require(\'./p1.md\') %>\n		</div>\n	</div>\n\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			<%- require(\'./p2.md\') %>\n		</div>\n	</div>\n	<hr class="soften">\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			<%- require(\'./p3.md\') %>\n		</div>\n	</div>\n</div>\n',
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
	                buf.push('<div class="container paragraphs">\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			', (__stack.lineno = 7, __webpack_require__(9)), '\n		</div>\n	</div>\n\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			', (__stack.lineno = 16, __webpack_require__(10)), '\n		</div>\n	</div>\n	<hr class="soften">\n	<div class="row pitch-row">\n		<div class="col-lg-4 col-md-5 col-sm-5">\n			<img src="http://placehold.it/200x200" class="img-responsive" alt="" />\n		</div>\n		<div class="col-lg-8 col-md-7 col-sm-7">\n			', (__stack.lineno = 25, __webpack_require__(11)), "\n		</div>\n	</div>\n</div>\n");
	            })();
	        }
	        return buf.join("");
	    } catch (err) {
	        rethrow(err, __stack.input, __stack.filename, __stack.lineno);
	    }
	}

/***/ }
/******/ ]);