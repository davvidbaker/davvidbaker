/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {
	return (/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g
	);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2017-04-03_whoa.whoa": 12,
	"./test.whoa": 13
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escapeStringRegexp = __webpack_require__(7);
var ansiStyles = __webpack_require__(6);
var stripAnsi = __webpack_require__(9);
var hasAnsi = __webpack_require__(8);
var supportsColor = __webpack_require__(10);
var defineProps = Object.defineProperties;
var isSimpleWindowsTerm = process.platform === 'win32' && !/^xterm/i.test(process.env.TERM);

function Chalk(options) {
	// detect mode if not set manually
	this.enabled = !options || options.enabled === undefined ? supportsColor : options.enabled;
}

// use bright blue on Windows as the normal blue color is illegible
if (isSimpleWindowsTerm) {
	ansiStyles.blue.open = '\u001b[94m';
}

var styles = function () {
	var ret = {};

	Object.keys(ansiStyles).forEach(function (key) {
		ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), 'g');

		ret[key] = {
			get: function () {
				return build.call(this, this._styles.concat(key));
			}
		};
	});

	return ret;
}();

var proto = defineProps(function chalk() {}, styles);

function build(_styles) {
	var builder = function () {
		return applyStyle.apply(builder, arguments);
	};

	builder._styles = _styles;
	builder.enabled = this.enabled;
	// __proto__ is used because we must return a function, but there is
	// no way to create a function with a different prototype.
	/* eslint-disable no-proto */
	builder.__proto__ = proto;

	return builder;
}

function applyStyle() {
	// support varags, but simply cast to string in case there's only one arg
	var args = arguments;
	var argsLen = args.length;
	var str = argsLen !== 0 && String(arguments[0]);

	if (argsLen > 1) {
		// don't slice `arguments`, it prevents v8 optimizations
		for (var a = 1; a < argsLen; a++) {
			str += ' ' + args[a];
		}
	}

	if (!this.enabled || !str) {
		return str;
	}

	var nestedStyles = this._styles;
	var i = nestedStyles.length;

	// Turns out that on Windows dimmed gray text becomes invisible in cmd.exe,
	// see https://github.com/chalk/chalk/issues/58
	// If we're on Windows and we're dealing with a gray color, temporarily make 'dim' a noop.
	var originalDim = ansiStyles.dim.open;
	if (isSimpleWindowsTerm && (nestedStyles.indexOf('gray') !== -1 || nestedStyles.indexOf('grey') !== -1)) {
		ansiStyles.dim.open = '';
	}

	while (i--) {
		var code = ansiStyles[nestedStyles[i]];

		// Replace any instances already present with a re-opening code
		// otherwise only the part of the string until said closing code
		// will be colored, and the rest will simply be 'plain'.
		str = code.open + str.replace(code.closeRe, code.open) + code.close;
	}

	// Reset the original 'dim' if we changed it to work around the Windows dimmed gray issue.
	ansiStyles.dim.open = originalDim;

	return str;
}

function init() {
	var ret = {};

	Object.keys(styles).forEach(function (name) {
		ret[name] = {
			get: function () {
				return build.call(this, [name]);
			}
		};
	});

	return ret;
}

defineProps(Chalk.prototype, init());

module.exports = new Chalk();
module.exports.styles = ansiStyles;
module.exports.hasColor = hasAnsi;
module.exports.stripColor = stripAnsi;
module.exports.supportsColor = supportsColor;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {/**
 * This who file is first transformed with webpack, and then run with node.
 */
const path = __webpack_require__(4);
const fs = __webpack_require__(3);
const chalk = __webpack_require__(2);

/**
 * TODO check to see if file has changed and only then re-parse it. Could help performance if the build step is getting slow.
 */
const files = fs.readdirSync('blog');
const whoaFiles = files.filter(file => file.match(/\.whoah?$/));
console.log('dirname', path.resolve(__dirname));
console.log('files', files);
console.log('whoaFiles', whoaFiles);

/**
 * require(whoahFile) // {attributes, content}
 */
const arr = whoaFiles.map(whoaFile => __webpack_require__(1)(`./${whoaFile}`));
const obj = {};
arr.forEach(val => {
  obj[val.attributes.slug] = val;
});

try {
  fs.writeFile('out_blog/output.js', `
    /**
     * This file was automatically created ${new Date()}
     */

    module.exports = ${JSON.stringify(obj)}
    `, err => {
    if (err) throw err;
    console.log(chalk.green('File has been saved'));
  });
} catch (e) {
  console.error(e);
}

try {
  fs.writeFile('out_blog/slugs.js', `
    /**
     * This file was automatically created ${new Date()}
     */

    module.exports = {
      SLUGS: ${JSON.stringify(Object.keys(obj))} 
    }
    `, err => {
    if (err) throw err;
    console.log(chalk.green('File has been saved'));
  });
} catch (e) {
  console.error(e);
}
/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

function assembleStyles() {
	var styles = {
		modifiers: {
			reset: [0, 0],
			bold: [1, 22], // 21 isn't widely supported and 22 does the same thing
			dim: [2, 22],
			italic: [3, 23],
			underline: [4, 24],
			inverse: [7, 27],
			hidden: [8, 28],
			strikethrough: [9, 29]
		},
		colors: {
			black: [30, 39],
			red: [31, 39],
			green: [32, 39],
			yellow: [33, 39],
			blue: [34, 39],
			magenta: [35, 39],
			cyan: [36, 39],
			white: [37, 39],
			gray: [90, 39]
		},
		bgColors: {
			bgBlack: [40, 49],
			bgRed: [41, 49],
			bgGreen: [42, 49],
			bgYellow: [43, 49],
			bgBlue: [44, 49],
			bgMagenta: [45, 49],
			bgCyan: [46, 49],
			bgWhite: [47, 49]
		}
	};

	// fix humans
	styles.colors.grey = styles.colors.gray;

	Object.keys(styles).forEach(function (groupName) {
		var group = styles[groupName];

		Object.keys(group).forEach(function (styleName) {
			var style = group[styleName];

			styles[styleName] = group[styleName] = {
				open: '\u001b[' + style[0] + 'm',
				close: '\u001b[' + style[1] + 'm'
			};
		});

		Object.defineProperty(styles, groupName, {
			value: group,
			enumerable: false
		});
	});

	return styles;
}

Object.defineProperty(module, 'exports', {
	enumerable: true,
	get: assembleStyles
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11)(module)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return str.replace(matchOperatorsRe, '\\$&');
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(0);
var re = new RegExp(ansiRegex().source); // remove the `g` flag
module.exports = re.test.bind(re);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(0)();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var argv = process.argv;

var terminator = argv.indexOf('--');
var hasFlag = function (flag) {
	flag = '--' + flag;
	var pos = argv.indexOf(flag);
	return pos !== -1 && (terminator !== -1 ? pos < terminator : true);
};

module.exports = function () {
	if ('FORCE_COLOR' in process.env) {
		return true;
	}

	if (hasFlag('no-color') || hasFlag('no-colors') || hasFlag('color=false')) {
		return false;
	}

	if (hasFlag('color') || hasFlag('colors') || hasFlag('color=true') || hasFlag('color=always')) {
		return true;
	}

	if (process.stdout && !process.stdout.isTTY) {
		return false;
	}

	if (process.platform === 'win32') {
		return true;
	}

	if ('COLORTERM' in process.env) {
		return true;
	}

	if (process.env.TERM === 'dumb') {
		return false;
	}

	if (/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)) {
		return true;
	}

	return false;
}();

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function () {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function () {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
    attributes: {"title":"You probably should not bother reading this","date":"April 3, 2017","slug":"whoa"},
    content: {"type":"root","children":[{"type":"heading","depth":1,"children":[{"type":"text","value":"Whoa","position":{"start":{"line":2,"column":3,"offset":4},"end":{"line":2,"column":7,"offset":8},"indent":[]}}],"position":{"start":{"line":2,"column":1,"offset":2},"end":{"line":2,"column":7,"offset":8},"indent":[]}},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"whoah","position":{"start":{"line":3,"column":3,"offset":12},"end":{"line":3,"column":8,"offset":17},"indent":[]}}],"position":{"start":{"line":3,"column":1,"offset":10},"end":{"line":3,"column":10,"offset":19},"indent":[]}}],"position":{"start":{"line":3,"column":1,"offset":10},"end":{"line":3,"column":10,"offset":19},"indent":[]}},{"type":"paragraph","children":[{"type":"emphasis","children":[{"type":"text","value":"All Markdown should work.","position":{"start":{"line":5,"column":2,"offset":24},"end":{"line":5,"column":27,"offset":49},"indent":[]}}],"position":{"start":{"line":5,"column":1,"offset":23},"end":{"line":5,"column":28,"offset":50},"indent":[]}}],"position":{"start":{"line":5,"column":1,"offset":23},"end":{"line":5,"column":28,"offset":50},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Because Markdown is ","position":{"start":{"line":7,"column":1,"offset":54},"end":{"line":7,"column":21,"offset":74},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"dope","position":{"start":{"line":7,"column":23,"offset":76},"end":{"line":7,"column":27,"offset":80},"indent":[]}}],"position":{"start":{"line":7,"column":21,"offset":74},"end":{"line":7,"column":29,"offset":82},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":7,"column":29,"offset":82},"end":{"line":7,"column":30,"offset":83},"indent":[]}}],"position":{"start":{"line":7,"column":1,"offset":54},"end":{"line":7,"column":30,"offset":83},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"So EXPRESSIVE AND ","position":{"start":{"line":9,"column":1,"offset":87},"end":{"line":9,"column":19,"offset":105},"indent":[]}},{"type":"wordChoice","children":[{"type":"text","value":"fast"},{"type":"text","value":"easy"},{"type":"text","value":"readable"}],"position":{"start":{"line":9,"column":19,"offset":105},"end":{"line":9,"column":44,"offset":130},"indent":[]}},{"type":"text","value":". I ","position":{"start":{"line":9,"column":44,"offset":130},"end":{"line":9,"column":48,"offset":134},"indent":[]}},{"type":"wordChoice","children":[{"type":"text","value":"wonder"}],"position":{"start":{"line":9,"column":48,"offset":134},"end":{"line":9,"column":57,"offset":143},"indent":[]}},{"type":"text","value":" what happens when this line breaks. Might be something be baad. Indeed. indeed ","position":{"start":{"line":9,"column":57,"offset":143},"end":{"line":9,"column":137,"offset":223},"indent":[]}},{"type":"wordChoice","children":[{"type":"text","value":"Indeed"}],"position":{"start":{"line":9,"column":137,"offset":223},"end":{"line":9,"column":146,"offset":232},"indent":[]}},{"type":"text","value":" indeed..","position":{"start":{"line":9,"column":146,"offset":232},"end":{"line":9,"column":155,"offset":241},"indent":[]}}],"position":{"start":{"line":9,"column":1,"offset":87},"end":{"line":9,"column":155,"offset":241},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"And here's ","position":{"start":{"line":11,"column":1,"offset":245},"end":{"line":11,"column":12,"offset":256},"indent":[]}},{"type":"wordChoice","children":[{"type":"text","value":"onemore"}],"position":{"start":{"line":11,"column":12,"offset":256},"end":{"line":11,"column":22,"offset":266},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":11,"column":22,"offset":266},"end":{"line":11,"column":23,"offset":267},"indent":[]}}],"position":{"start":{"line":11,"column":1,"offset":245},"end":{"line":11,"column":23,"offset":267},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Let's see","position":{"start":{"line":13,"column":1,"offset":271},"end":{"line":13,"column":10,"offset":280},"indent":[]}},{"type":"ellipsis","children":[{"value":"...","type":"text"}],"position":{"start":{"line":13,"column":10,"offset":280},"end":{"line":13,"column":13,"offset":283},"indent":[]}},{"type":"text","value":" . when this is all said and done, those dots should have appeared one by one.","position":{"start":{"line":13,"column":13,"offset":283},"end":{"line":13,"column":91,"offset":361},"indent":[]}}],"position":{"start":{"line":13,"column":1,"offset":271},"end":{"line":13,"column":91,"offset":361},"indent":[]}},{"type":"code","lang":null,"value":"const foo = (bar) => { \n  console.log(bar);\n};","position":{"start":{"line":14,"column":1,"offset":363},"end":{"line":18,"column":4,"offset":421},"indent":[1,1,1,1]}},{"type":"heading","depth":2,"children":[{"type":"text","value":"Depth 2 Title","position":{"start":{"line":19,"column":4,"offset":426},"end":{"line":19,"column":17,"offset":439},"indent":[]}}],"position":{"start":{"line":19,"column":1,"offset":423},"end":{"line":19,"column":17,"offset":439},"indent":[]}},{"type":"paragraph","children":[{"type":"strong","children":[{"type":"text","value":"Just","position":{"start":{"line":21,"column":3,"offset":445},"end":{"line":21,"column":7,"offset":449},"indent":[]}}],"position":{"start":{"line":21,"column":1,"offset":443},"end":{"line":21,"column":9,"offset":451},"indent":[]}},{"type":"text","value":" is a weird word.","position":{"start":{"line":21,"column":9,"offset":451},"end":{"line":21,"column":26,"offset":468},"indent":[]}}],"position":{"start":{"line":21,"column":1,"offset":443},"end":{"line":21,"column":26,"offset":468},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Let's explore its etymology.","position":{"start":{"line":23,"column":1,"offset":472},"end":{"line":23,"column":29,"offset":500},"indent":[]}}],"position":{"start":{"line":23,"column":1,"offset":472},"end":{"line":23,"column":29,"offset":500},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"So is ","position":{"start":{"line":25,"column":1,"offset":504},"end":{"line":25,"column":7,"offset":510},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"token","position":{"start":{"line":25,"column":9,"offset":512},"end":{"line":25,"column":14,"offset":517},"indent":[]}}],"position":{"start":{"line":25,"column":7,"offset":510},"end":{"line":25,"column":16,"offset":519},"indent":[]}},{"type":"text","value":".","position":{"start":{"line":25,"column":16,"offset":519},"end":{"line":25,"column":17,"offset":520},"indent":[]}}],"position":{"start":{"line":25,"column":1,"offset":504},"end":{"line":25,"column":17,"offset":520},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Been going slow and steady on this here thing. But excellent ","position":{"start":{"line":27,"column":1,"offset":524},"end":{"line":27,"column":62,"offset":585},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"progress ","position":{"start":{"line":27,"column":64,"offset":587},"end":{"line":27,"column":73,"offset":596},"indent":[]}},{"type":"emphasis","children":[{"type":"text","value":"is","position":{"start":{"line":27,"column":74,"offset":597},"end":{"line":27,"column":76,"offset":599},"indent":[]}}],"position":{"start":{"line":27,"column":73,"offset":596},"end":{"line":27,"column":77,"offset":600},"indent":[]}},{"type":"text","value":" being made","position":{"start":{"line":27,"column":77,"offset":600},"end":{"line":27,"column":88,"offset":611},"indent":[]}}],"position":{"start":{"line":27,"column":62,"offset":585},"end":{"line":27,"column":90,"offset":613},"indent":[]}},{"type":"text","value":"!","position":{"start":{"line":27,"column":90,"offset":613},"end":{"line":27,"column":91,"offset":614},"indent":[]}}],"position":{"start":{"line":27,"column":1,"offset":524},"end":{"line":27,"column":91,"offset":614},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"To be fair with myself, I didn't know what an ","position":{"start":{"line":29,"column":1,"offset":618},"end":{"line":29,"column":47,"offset":664},"indent":[]}},{"type":"link","title":null,"url":"ast.com","children":[{"type":"text","value":"Abstract Syntax Tree","position":{"start":{"line":29,"column":48,"offset":665},"end":{"line":29,"column":68,"offset":685},"indent":[]}}],"position":{"start":{"line":29,"column":47,"offset":664},"end":{"line":29,"column":78,"offset":695},"indent":[]}},{"type":"text","value":" really was a few days ago.","position":{"start":{"line":29,"column":78,"offset":695},"end":{"line":29,"column":105,"offset":722},"indent":[]}}],"position":{"start":{"line":29,"column":1,"offset":618},"end":{"line":29,"column":105,"offset":722},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"So you start off talking about one thing, but then! ","position":{"start":{"line":31,"column":1,"offset":726},"end":{"line":31,"column":53,"offset":778},"indent":[]}},{"type":"tangent","children":[{"type":"text","value":"This is a tangent. You can tell by the way it ","position":{"start":{"line":31,"column":269,"offset":994},"end":{"line":31,"column":315,"offset":1040},"indent":[]}},{"type":"wordChoice","children":[{"type":"text","value":"is"},{"type":"text","value":"is enclosed by |pipes| and -hyphens-"}],"position":{"start":{"line":31,"column":315,"offset":1040},"end":{"line":31,"column":360,"offset":1085},"indent":[]}},{"type":"text","value":". Well actually once it has been made you shouldn't be able to tell that it is enclosed like that. Except in the editor. ","position":{"start":{"line":31,"column":360,"offset":1085},"end":{"line":31,"column":481,"offset":1206},"indent":[]}}],"position":{"start":{"line":31,"column":53,"offset":778},"end":{"line":31,"column":269,"offset":994},"indent":[]}},{"type":"text","value":" Now we need some text going afterwards to make sure the tangent is working.","position":{"start":{"line":31,"column":269,"offset":994},"end":{"line":31,"column":345,"offset":1070},"indent":[]}}],"position":{"start":{"line":31,"column":1,"offset":726},"end":{"line":31,"column":345,"offset":1070},"indent":[]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":31,"column":345,"offset":1070}}}
  }

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
    attributes: {"title":"You probably should not bother reading this","date":"May 31, 2017","slug":"o-is-me"},
    content: {"type":"root","children":[{"type":"paragraph","children":[{"type":"text","value":"Nothing to see here.","position":{"start":{"line":2,"column":1,"offset":2},"end":{"line":2,"column":21,"offset":22},"indent":[]}}],"position":{"start":{"line":2,"column":1,"offset":2},"end":{"line":2,"column":21,"offset":22},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"Don't listen to them ☝.🖕.","position":{"start":{"line":4,"column":3,"offset":28},"end":{"line":4,"column":29,"offset":54},"indent":[]}}],"position":{"start":{"line":4,"column":1,"offset":26},"end":{"line":4,"column":29,"offset":54},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Maybe something. Who knows.","position":{"start":{"line":6,"column":1,"offset":58},"end":{"line":6,"column":28,"offset":85},"indent":[]}}],"position":{"start":{"line":6,"column":1,"offset":58},"end":{"line":6,"column":28,"offset":85},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"I would like to make a component library for whoa. 🎆 📖","position":{"start":{"line":8,"column":3,"offset":91},"end":{"line":8,"column":59,"offset":147},"indent":[]}}],"position":{"start":{"line":8,"column":1,"offset":89},"end":{"line":8,"column":59,"offset":147},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"This is a neat way to write.","position":{"start":{"line":9,"column":1,"offset":149},"end":{"line":9,"column":29,"offset":177},"indent":[]}}],"position":{"start":{"line":9,"column":1,"offset":149},"end":{"line":9,"column":29,"offset":177},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"https://res.cloudinary.com/brains-and-space/image/upload/v1496213249/neat-way-to-write_omrlre.png","alt":"a-neat-way-to-write.png","position":{"start":{"line":11,"column":1,"offset":181},"end":{"line":11,"column":126,"offset":306},"indent":[]}}],"position":{"start":{"line":11,"column":1,"offset":181},"end":{"line":11,"column":126,"offset":306},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Damn I am really getting caught up in tangents. Like setting up a cloudinary account. I think it might be a good decision for managing images for a site with user-supplied content such as this.","position":{"start":{"line":13,"column":1,"offset":310},"end":{"line":13,"column":194,"offset":503},"indent":[]}}],"position":{"start":{"line":13,"column":1,"offset":310},"end":{"line":13,"column":194,"offset":503},"indent":[]}},{"type":"heading","depth":1,"children":[{"type":"text","value":"Okay okay let's just jot down some ideas and be done with it.","position":{"start":{"line":15,"column":3,"offset":509},"end":{"line":15,"column":64,"offset":570},"indent":[]}}],"position":{"start":{"line":15,"column":1,"offset":507},"end":{"line":15,"column":64,"offset":570},"indent":[]}},{"type":"paragraph","children":[{"type":"normative","children":[{"type":"text","value":"I should "},{"type":"text","value":"look at the ","position":{"start":{"line":16,"column":1,"offset":572},"end":{"line":16,"column":13,"offset":584},"indent":[]}},{"type":"strong","children":[{"type":"text","value":"etymology","position":{"start":{"line":16,"column":15,"offset":586},"end":{"line":16,"column":24,"offset":595},"indent":[]}}],"position":{"start":{"line":16,"column":13,"offset":584},"end":{"line":16,"column":26,"offset":597},"indent":[]}},{"type":"text","value":" of jot some time.","position":{"start":{"line":16,"column":26,"offset":597},"end":{"line":16,"column":44,"offset":615},"indent":[]}}],"position":{"start":{"line":16,"column":1,"offset":572},"end":{"line":16,"column":53,"offset":624},"indent":[]}},{"type":"text","value":"\n","position":{"start":{"line":16,"column":53,"offset":624},"end":{"line":17,"column":1,"offset":626},"indent":[1]}},{"type":"search","children":[{"type":"text","value":"etymology of jot","position":{"start":{"line":17,"column":21,"offset":646},"end":{"line":17,"column":37,"offset":662},"indent":[]}}],"position":{"start":{"line":17,"column":1,"offset":626},"end":{"line":17,"column":21,"offset":646},"indent":[]}}],"position":{"start":{"line":16,"column":1,"offset":572},"end":{"line":17,"column":21,"offset":646},"indent":[1]}},{"type":"paragraph","children":[{"type":"tangent","children":[{"type":"normative","children":[{"type":"text","value":"I should "},{"type":"text","value":"eventually grab a snapshot that shows the editor experience for whoa.","position":{"start":{"line":19,"column":128,"offset":777},"end":{"line":19,"column":197,"offset":846},"indent":[]}}],"position":{"start":{"line":19,"column":128,"offset":777},"end":{"line":19,"column":206,"offset":855},"indent":[]}},{"type":"text","value":" Having large colorful emoji is just nice 😬.","position":{"start":{"line":19,"column":206,"offset":855},"end":{"line":19,"column":251,"offset":900},"indent":[]}}],"position":{"start":{"line":19,"column":1,"offset":650},"end":{"line":19,"column":128,"offset":777},"indent":[]}}],"position":{"start":{"line":19,"column":1,"offset":650},"end":{"line":19,"column":128,"offset":777},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"It takes a lot of work to get to this point, and at this point I know nothing. ","position":{"start":{"line":21,"column":1,"offset":781},"end":{"line":21,"column":80,"offset":860},"indent":[]}},{"type":"search","children":[{"type":"text","value":"Why know anything at all?","position":{"start":{"line":21,"column":109,"offset":889},"end":{"line":21,"column":134,"offset":914},"indent":[]}}],"position":{"start":{"line":21,"column":80,"offset":860},"end":{"line":21,"column":109,"offset":889},"indent":[]}}],"position":{"start":{"line":21,"column":1,"offset":781},"end":{"line":21,"column":109,"offset":889},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"Oh I wanted to post this, from the end of last week when I was 👍 super stressed out 👎 dealing with computer failures.","position":{"start":{"line":23,"column":1,"offset":893},"end":{"line":23,"column":120,"offset":1012},"indent":[]}}],"position":{"start":{"line":23,"column":1,"offset":893},"end":{"line":23,"column":120,"offset":1012},"indent":[]}},{"type":"paragraph","children":[{"type":"image","title":null,"url":"http://res.cloudinary.com/brains-and-space/image/upload/v1496215888/running-from-block_mrm180.svg","alt":"we're-stressed-out","position":{"start":{"line":25,"column":1,"offset":1016},"end":{"line":25,"column":121,"offset":1136},"indent":[]}}],"position":{"start":{"line":25,"column":1,"offset":1016},"end":{"line":25,"column":121,"offset":1136},"indent":[]}},{"type":"paragraph","children":[{"type":"text","value":"I am thinking about two things that ","position":{"start":{"line":27,"column":1,"offset":1140},"end":{"line":27,"column":37,"offset":1176},"indent":[]}},{"type":"normative","children":[{"type":"text","value":"I should "},{"type":"text","value":"really mention before calling it.","position":{"start":{"line":27,"column":37,"offset":1176},"end":{"line":27,"column":70,"offset":1209},"indent":[]}}],"position":{"start":{"line":27,"column":37,"offset":1176},"end":{"line":27,"column":79,"offset":1218},"indent":[]}},{"type":"text","value":" ","position":{"start":{"line":27,"column":79,"offset":1218},"end":{"line":27,"column":80,"offset":1219},"indent":[]}},{"type":"tangent","children":[{"type":"text","value":"Okay three things.","position":{"start":{"line":27,"column":102,"offset":1241},"end":{"line":27,"column":120,"offset":1259},"indent":[]}}],"position":{"start":{"line":27,"column":80,"offset":1219},"end":{"line":27,"column":102,"offset":1241},"indent":[]}}],"position":{"start":{"line":27,"column":1,"offset":1140},"end":{"line":27,"column":102,"offset":1241},"indent":[]}},{"type":"list","ordered":true,"start":1,"loose":true,"children":[{"type":"listItem","loose":true,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"The image above should float the text wrapped tighly to itself. Potentially using some collision shapes or polygons?","position":{"start":{"line":29,"column":4,"offset":1248},"end":{"line":29,"column":120,"offset":1364},"indent":[]}}],"position":{"start":{"line":29,"column":4,"offset":1248},"end":{"line":29,"column":120,"offset":1364},"indent":[]}}],"position":{"start":{"line":29,"column":1,"offset":1245},"end":{"line":30,"column":1,"offset":1366},"indent":[1]}},{"type":"listItem","loose":true,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"An enhancer layer to the editing process that works in the browser and enhances components, wrapping them with certain properties, like transforms for instance, and other CSS especially.","position":{"start":{"line":31,"column":4,"offset":1371},"end":{"line":31,"column":190,"offset":1557},"indent":[]}}],"position":{"start":{"line":31,"column":4,"offset":1371},"end":{"line":31,"column":190,"offset":1557},"indent":[]}}],"position":{"start":{"line":31,"column":1,"offset":1368},"end":{"line":32,"column":1,"offset":1559},"indent":[1]}},{"type":"listItem","loose":false,"checked":null,"children":[{"type":"paragraph","children":[{"type":"text","value":"Shoot forgot the last thing.","position":{"start":{"line":33,"column":4,"offset":1564},"end":{"line":33,"column":32,"offset":1592},"indent":[]}}],"position":{"start":{"line":33,"column":4,"offset":1564},"end":{"line":33,"column":32,"offset":1592},"indent":[]}}],"position":{"start":{"line":33,"column":1,"offset":1561},"end":{"line":33,"column":32,"offset":1592},"indent":[]}}],"position":{"start":{"line":29,"column":1,"offset":1245},"end":{"line":33,"column":32,"offset":1592},"indent":[1,1,1,1]}}],"position":{"start":{"line":1,"column":1,"offset":0},"end":{"line":35,"column":1,"offset":1596}}}
  }

/***/ })
/******/ ]);