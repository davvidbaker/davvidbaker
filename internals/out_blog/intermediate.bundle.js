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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
/***/ (function(module, exports) {

module.exports = "import unified from 'unified';\r\nimport remarkParse from 'remark-parse';\r\nimport remarkWhoa from 'remark-whoa';\r\nimport React from 'react';\r\n\r\nimport Whoa from '../whoa-components';\r\nimport BlogPost from '../components/Blog/Post.js';\r\n\r\nconst whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;\r\n\r\nconst attributes = {\r\n  title: 'Coffee',\r\n  slug: 'coffee-makes-my-thoughts-loud',\r\n  date: 'July 6, 2017',\r\n  js: true,\r\n};\r\n\r\nexport default () => (\r\n  <BlogPost attributes={attributes}>\r\n    <Whoa>\r\n      {whoaParse(\r\n        `\r\nI don't know why I titled this coffee. |-That's something you should know about my workflow, maybe. I title and slug a post before writing, and rarely do I change it.-|\r\n\r\n# ☕ This is the *hot beverage* emoji.\r\n## I always thought it was the *coffee* emoji.\r\nIf there's one source I trust when it comes to emoji, it is [emojipedia](https://emojipedia.org/hot-beverage/).\r\n\r\nThey have a great [FAQ](https://emojipedia.org/faq/).\r\n\r\n> 🙋 Emoji or emojis? What is the correct plural of emoji?\r\n\r\nThese are the questions.\r\n\r\nFor real emojipedia is a great resource. It's *(sic)* got the latest on what is to come in the **future of emoji**, with the next versions of Unicode. Currently, we (the world) are on Unicode 10.0 and Emoji 5.0. Emoji proposals for Unicode 11 were due July 1, 2017, so it looks like that ship has sailed ⛵.\r\n\r\nI wonder who is behind it (emojipedia)...\r\n\r\n🔎Who runs emojipedia?🔍\r\n\r\n# It looks like [Jeremy Burge](https://twitter.com/jeremyburge) is the man behind the 🎭.\r\n\r\n**Yes** he is indeed. He's a member of of the Unicode Emoji Subcommittee. I wonder how you get to that point in your career. Bouncing around the [Unicode website](http://www.unicode.org) now. It's interesting to see who the [full members of the Unicode Consortium](http://www.unicode.org/consortium/members.html#full) are. Here's a snapshot from their site.\r\n\r\n![unicode-consortium-full-members](/static/blog/unicode-consortium-full-members.png)\r\n\r\nShould we (the people) be concerned that Adobe, Apple, Facebook, Netflix, Google et al are deciding what emotions we can feel??? Probably not. I'm more worried about one of the two  individual members with **over 20 years** as a member of the consortium—the one named  **Tex Texin**. It costs $18,000 per year to be a full member of the consortium (as a company or organization, that is.) An individual can join for $75, but it looks like that doesn't buy you a vote at the technical committee meetings.\r\n\r\nWhy would an individual want to join the Unicode Consortium? Obviously, to *\"demonstrate your commitment to the field\"*.\r\n\r\n> If you are a technical professional in areas of software globalization, software internationalization, or font technology, joining the Unicode Consortium demonstrates your commitment to your field. As an Individual member, you have full access to email lists which allows you to join discussions on the ongoing development of the Unicode Standard. Individual members may participate in technical committee meetings at the discretion of the chair.\r\n\r\nJeremy Burge is certainly committed.\r\n\r\n    `\r\n      )}\r\n    </Whoa>\r\n    <p>Would it surprise you if I told you this 👇 was Tex Texin?</p>\r\n    <div id=\"tex\" />\r\n    <p style={{fontSize: '48px'}}>Well it is.</p>\r\n    <style jsx>{`\r\n      #tex {\r\n        background: url(/static/blog/TexTexin.jpg);\r\n        height: 0; width: 100%;\r\n        padding-bottom: 200px;\r\n        position: relative;\r\n      }\r\n      #tex::before {\r\n        content: 'hover/tap to reveal';\r\n        text-align: center;\r\n        line-height: 200px;\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 100%;\r\n        background: #cacaca;\r\n        display: block;\r\n        opacity: 1;\r\n        transition: opacity 0.3s;\r\n      }\r\n\r\n\r\n      #tex:hover::before {\r\n        opacity: 0;\r\n      }\r\n    \r\n    `}</style>\r\n  </BlogPost>\r\n);\r\n"

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "import unified from 'unified';\r\nimport remarkParse from 'remark-parse';\r\nimport remarkWhoa from 'remark-whoa';\r\nimport React from 'react';\r\n\r\nimport Whoa from '../whoa-components';\r\nimport BlogPost from '../components/Blog/Post.js';\r\nimport Phone from '../components/Phone.js';\r\nimport Message from '../components/Message.js';\r\nimport Messenger from '../components/Messenger.js';\r\n\r\nconst whoaParse = unified().use(remarkParse).use(remarkWhoa).parse;\r\n\r\nconst attributes = {\r\n  title: 'What am I trying to do here?',\r\n  slug: 'that-was-bad',\r\n  date: 'July 7, 2017',\r\n  js: true,\r\n};\r\n\r\nexport default () => (\r\n  <BlogPost attributes={attributes}>\r\n\r\n    <p>That last post (Coffee) is rather painful to read.</p>\r\n\r\n    <p>\r\n      I had wanted to write something using that new phone messenger component, but that post didn't really lend itself to it. I'm not happy with how the phone component looks some of the time in landscape, but I don't feel like fixing it right now either.\r\n    </p>\r\n\r\n    <div className=\"full-width\">\r\n    <Phone>\r\n      <Messenger className=\"messenger\" name=\"You\">\r\n        <Message me>\r\n          <h1>You there, reader.</h1>\r\n        </Message>\r\n\r\n        <Message me>\r\n          <h3>It's me.</h3>\r\n        </Message>\r\n\r\n        <Message>\r\n          <p>Me?</p><br /><br />\r\n          <strong>You</strong> can't be <em>me</em>.\r\n        </Message>\r\n\r\n        <Message style={{ background: 'gold', color: 'black' }}>\r\n          <h1>Who am I in this situation?</h1>\r\n        </Message>\r\n\r\n        <Message me>\r\n          <p>\r\n            You tell me.\r\n          </p>\r\n        </Message>\r\n\r\n        <Message>\r\n          <p>Does anyone else find this a bit annoying?</p>\r\n        </Message>\r\n\r\n        <Message>\r\n          <p>I bet <strong>you</strong> do.</p>\r\n        </Message>\r\n\r\n        <Message me>\r\n          <h2>How about an h2?</h2>\r\n          <h1>These look the same no.</h1>\r\n        </Message>\r\n\r\n        <Message>\r\n          <h1>What does this look like</h1>\r\n        </Message>\r\n        <Message me>\r\n          <p>Hello</p>\r\n        </Message>\r\n\r\n        <Message>\r\n          <p>It's me</p>\r\n        </Message>\r\n\r\n        <Message>\r\n          <h1>What does this look like</h1>\r\n        </Message>\r\n\r\n        <Message>\r\n          <p>\r\n            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj\r\n          </p>\r\n        </Message>\r\n\r\n        <Message me>\r\n          <h1>What does this look like</h1>\r\n        </Message>\r\n\r\n        <Message>\r\n          <h1>What does this look like</h1>\r\n        </Message>\r\n        <Message me>\r\n          <p>Hello</p>\r\n        </Message>\r\n\r\n        <Message>\r\n          <p>It's me</p>\r\n        </Message>\r\n\r\n        <Message>\r\n          <h1>What does this look like</h1>\r\n        </Message>\r\n\r\n        <Message>\r\n          <p>\r\n            A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj\r\n          </p>\r\n        </Message>\r\n\r\n        <Message me>\r\n          <h1>What does this look f</h1>\r\n        </Message>\r\n\r\n      </Messenger>\r\n\r\n    </Phone>\r\n    </div>\r\n    <style jsx>{`\r\n            p, h1, h2, h3, h4 {\r\n        margin: 0.25rem;\r\n        display: inline-block;\r\n      }\r\n`}</style>\r\n  </BlogPost>\r\n);\r\n"

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2017-07-07_coffee-makes-my-thoughts-loud": 1,
	"./2017-07-07_coffee-makes-my-thoughts-loud.js": 1,
	"./2017-07-07_that-was-bad": 2,
	"./2017-07-07_that-was-bad.js": 2
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
webpackContext.id = 3;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var escapeStringRegexp = __webpack_require__(9);
var ansiStyles = __webpack_require__(8);
var stripAnsi = __webpack_require__(11);
var hasAnsi = __webpack_require__(10);
var supportsColor = __webpack_require__(12);
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
/* 5 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This file is first transformed with webpack and babel (probably could avoid using webpack...), and then run with node.
 *
 * We build 3 things:
 *
 * 1. A 'lookupTable' containing info about each post—title, date, dynamically loaded component.
 * 2. A file containing all the slugs that is just used for path mapping in next.config.js.
 * 3. The post files themselves. JS files don't change, but whoa files are transformed, since Next.js doesn't support custom loaders.
 *
 * It is kinda hacky in that there is a bunch of string manipulation going on. 🤷‍
 */
const fs = __webpack_require__(5);
const chalk = __webpack_require__(4);
const { promisify } = __webpack_require__(6);

const readFile = promisify(fs.readFile);

/**
 * TODO check to see if file has changed and only then re-parse it. Could help performance if the build step is getting slow.
 */
const files = fs.readdirSync('blog');
const whoaFiles = files.filter(file => file.match(/\.whoah?$/));
const jsFiles = files.filter(file => file.match(/\.js$/));

console.log(whoaFiles, jsFiles);
/**
 * require(whoahFile) // {attributes, content}
 */
const arrWhoa = whoaFiles.map(whoaFile => Object.assign(__webpack_require__(3)(`./${whoaFile}`), { filename: whoaFile }));

const lookupTable = [];
const slugs = [];

doStuffWithJSFiles();

async function doStuffWithJSFiles() {
  /* kinda roundabout way to copy files from blog folder to out_blog/posts folder*/
  // jsFiles.forEach((file) => {
  //   fs.writeFile(`out_blog/posts/${file}`, '', e => console.log(e));
  //   fs
  //     .createReadStream(`blog/${file}`)
  //     .pipe(fs.createWriteStream(`out_blog/posts/${file}`));
  // });

  const jsFilePromises = jsFiles.map(file => readFile(`blog/${file}`, 'utf8'));
  const jsFileContents = await Promise.all(jsFilePromises).catch(e => console.error(e, e.stack));

  jsFileContents.forEach((data, ind) => {
    /* a regex in the js files to find the attributes...hacky */
    let attributes = data.match(/const\sattributes\s=\s({[^}]*)}/)[1];
    attributes += `\n component: dynamic(import('../blog/${jsFiles[ind]}'))}`;
    lookupTable.push(attributes);

    const slug = attributes.match(/slug:\s(.*),/)[1].trim();
    slugs.push(slug);
  });

  writeLookupTable();
  writeSlugs();
}

// array of strings like 'dynamic(import([filename]))'
arrWhoa.forEach(post => {
  lookupTable.push(`{
    filename: \`${post.filename.replace(/whoah?$/, 'js')}\`,
    title: \`${post.attributes.title}\`,
    date: \`${post.attributes.date}\`,
    slug: \`${post.attributes.slug}\`,
    component: dynamic(import('../out_blog/posts/${post.filename.replace(/whoah?$/, 'js')}')),
  }`);
  slugs.push(`'${post.attributes.slug}'`);
});

function writeSlugs() {
  try {
    fs.writeFile('out_blog/slugs.js', `
    /**
     * This file was automatically created ${new Date()}
     */
    
    module.exports = {
      slugs: [${slugs}]
    };
    `, err => {
      if (err) throw err;
      console.log(chalk.green('Slugs saved.'));
    });
  } catch (e) {
    console.error(e, e.stack);
  }
}

function writeLookupTable() {
  try {
    fs.writeFile('out_blog/lookupTable.js', `
    /**
     * This file was automatically created ${new Date()}
     */
    import dynamic from 'next/dynamic';

    export default [${lookupTable}];
  `, err => {
      if (err) throw err;
      console.log(chalk.green('Lookup table saved.'));
    });
  } catch (e) {
    console.error(e, e.stack);
  }
}

arrWhoa.forEach(post => {
  try {
    fs.writeFile(`out_blog/posts/${post.filename.replace(/whoah?$/, 'js')}`, `
        /**
         * This file was automatically created ${new Date()}
         */
        import BlogPost from '../../components/Blog/Post.js';
         
        export default () => <BlogPost attributes={${JSON.stringify(post.attributes)}} content={${JSON.stringify(post.content)}} />;
  `, err => {
      if (err) throw err;
      console.log(chalk.green(`File has been saved to out_blog/${post.filename.replace(/whoah?$/, 'js')}`));
    });
  } catch (e) {
    console.error(e, e.stack);
  }
});

/***/ }),
/* 8 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(13)(module)))

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(0);
var re = new RegExp(ansiRegex().source); // remove the `g` flag
module.exports = re.test.bind(re);

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ansiRegex = __webpack_require__(0)();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};

/***/ }),
/* 12 */
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
/* 13 */
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

/***/ })
/******/ ]);