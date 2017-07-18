
          window.__NEXT_REGISTER_CHUNK('76f5b904-9522-406e-970f-a78fff2678f6.js', function() {
            webpackJsonp([5],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(101);

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Post2.default, { attributes: { "readTime": 1.9563636363636363, "title": "The Current State of Whoa (and this blog)", "slug": "whoa-and-blog-state", "date": "June 23, 2017" }, content: { "type": "root", "children": [{ "type": "paragraph", "children": [{ "type": "text", "value": "So I've been working on this ", "position": { "start": { "line": 2, "column": 1, "offset": 1 }, "end": { "line": 2, "column": 30, "offset": 30 }, "indent": [] } }, { "type": "inlineCode", "value": "Whoa", "position": { "start": { "line": 2, "column": 30, "offset": 30 }, "end": { "line": 2, "column": 36, "offset": 36 }, "indent": [] } }, { "type": "text", "value": " thing for a while now, and I've never really tried to explain—", "position": { "start": { "line": 2, "column": 36, "offset": 36 }, "end": { "line": 2, "column": 99, "offset": 99 }, "indent": [] } }, { "type": "emphasis", "children": [{ "type": "text", "value": "even to myself", "position": { "start": { "line": 2, "column": 100, "offset": 100 }, "end": { "line": 2, "column": 114, "offset": 114 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 99, "offset": 99 }, "end": { "line": 2, "column": 115, "offset": 115 }, "indent": [] } }, { "type": "text", "value": "—what exactly it is. I'm not sure I could do that now either. But ", "position": { "start": { "line": 2, "column": 115, "offset": 115 }, "end": { "line": 2, "column": 181, "offset": 181 }, "indent": [] } }, { "type": "strong", "children": [{ "type": "text", "value": "I can say what it looks like right now", "position": { "start": { "line": 2, "column": 183, "offset": 183 }, "end": { "line": 2, "column": 221, "offset": 221 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 181, "offset": 181 }, "end": { "line": 2, "column": 223, "offset": 223 }, "indent": [] } }, { "type": "text", "value": ", and I can lay out some plans I have for the near future.", "position": { "start": { "line": 2, "column": 223, "offset": 223 }, "end": { "line": 2, "column": 281, "offset": 281 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 1, "offset": 1 }, "end": { "line": 2, "column": 281, "offset": 281 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "A lot of early inspiration came from ", "position": { "start": { "line": 4, "column": 1, "offset": 283 }, "end": { "line": 4, "column": 38, "offset": 320 }, "indent": [] } }, { "type": "link", "title": null, "url": "https://codepen.io/jakealbaugh/pen/PwLXXP", "children": [{ "type": "text", "value": "Jake Albaugh's self coding pen", "position": { "start": { "line": 4, "column": 39, "offset": 321 }, "end": { "line": 4, "column": 69, "offset": 351 }, "indent": [] } }], "position": { "start": { "line": 4, "column": 38, "offset": 320 }, "end": { "line": 4, "column": 113, "offset": 395 }, "indent": [] } }, { "type": "text", "value": ". ", "position": { "start": { "line": 4, "column": 113, "offset": 395 }, "end": { "line": 4, "column": 115, "offset": 397 }, "indent": [] } }], "position": { "start": { "line": 4, "column": 1, "offset": 283 }, "end": { "line": 4, "column": 115, "offset": 397 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "search", "children": [{ "type": "text", "value": "Jake Albaugh's Self Coding Pen", "position": { "start": { "line": 6, "column": 35, "offset": 433 }, "end": { "line": 6, "column": 65, "offset": 463 }, "indent": [] } }], "position": { "start": { "line": 6, "column": 1, "offset": 399 }, "end": { "line": 6, "column": 35, "offset": 433 }, "indent": [] } }], "position": { "start": { "line": 6, "column": 1, "offset": 399 }, "end": { "line": 6, "column": 35, "offset": 433 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "In its current state, ", "position": { "start": { "line": 8, "column": 1, "offset": 435 }, "end": { "line": 8, "column": 23, "offset": 457 }, "indent": [] } }, { "type": "inlineCode", "value": "Whoa", "position": { "start": { "line": 8, "column": 23, "offset": 457 }, "end": { "line": 8, "column": 29, "offset": 463 }, "indent": [] } }, { "type": "text", "value": " looks nothing like that. Currently ", "position": { "start": { "line": 8, "column": 29, "offset": 463 }, "end": { "line": 8, "column": 65, "offset": 499 }, "indent": [] } }, { "type": "inlineCode", "value": "whoa", "position": { "start": { "line": 8, "column": 65, "offset": 499 }, "end": { "line": 8, "column": 71, "offset": 505 }, "indent": [] } }, { "type": "text", "value": " is ", "position": { "start": { "line": 8, "column": 71, "offset": 505 }, "end": { "line": 8, "column": 75, "offset": 509 }, "indent": [] } }, { "type": "strong", "children": [{ "type": "text", "value": "kinda just an expansion of Markdown", "position": { "start": { "line": 8, "column": 77, "offset": 511 }, "end": { "line": 8, "column": 112, "offset": 546 }, "indent": [] } }], "position": { "start": { "line": 8, "column": 75, "offset": 509 }, "end": { "line": 8, "column": 114, "offset": 548 }, "indent": [] } }, { "type": "text", "value": ". By that I mean that I can write ", "position": { "start": { "line": 8, "column": 114, "offset": 548 }, "end": { "line": 8, "column": 148, "offset": 582 }, "indent": [] } }, { "type": "inlineCode", "value": "whoa", "position": { "start": { "line": 8, "column": 148, "offset": 582 }, "end": { "line": 8, "column": 154, "offset": 588 }, "indent": [] } }, { "type": "text", "value": " posts using all the features of ", "position": { "start": { "line": 8, "column": 154, "offset": 588 }, "end": { "line": 8, "column": 187, "offset": 621 }, "indent": [] } }, { "type": "link", "title": null, "url": "https://daringfireball.net/projects/markdown/syntax", "children": [{ "type": "text", "value": "Markdown", "position": { "start": { "line": 8, "column": 188, "offset": 622 }, "end": { "line": 8, "column": 196, "offset": 630 }, "indent": [] } }], "position": { "start": { "line": 8, "column": 187, "offset": 621 }, "end": { "line": 8, "column": 250, "offset": 684 }, "indent": [] } }, { "type": "text", "value": ", ", "position": { "start": { "line": 8, "column": 250, "offset": 684 }, "end": { "line": 8, "column": 252, "offset": 686 }, "indent": [] } }, { "type": "emphasis", "children": [{ "type": "text", "value": "and then some", "position": { "start": { "line": 8, "column": 253, "offset": 687 }, "end": { "line": 8, "column": 266, "offset": 700 }, "indent": [] } }], "position": { "start": { "line": 8, "column": 252, "offset": 686 }, "end": { "line": 8, "column": 267, "offset": 701 }, "indent": [] } }, { "type": "text", "value": ". ", "position": { "start": { "line": 8, "column": 267, "offset": 701 }, "end": { "line": 8, "column": 269, "offset": 703 }, "indent": [] } }], "position": { "start": { "line": 8, "column": 1, "offset": 435 }, "end": { "line": 8, "column": 269, "offset": 703 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "So here is what drafting a post looks like, next to the rendered version.", "position": { "start": { "line": 10, "column": 1, "offset": 705 }, "end": { "line": 10, "column": 74, "offset": 778 }, "indent": [] } }], "position": { "start": { "line": 10, "column": 1, "offset": 705 }, "end": { "line": 10, "column": 74, "offset": 778 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": " Here is what whoa does for me. I draft a post with the extension ", "position": { "start": { "line": 12, "column": 1, "offset": 780 }, "end": { "line": 12, "column": 67, "offset": 846 }, "indent": [] } }, { "type": "inlineCode", "value": ".whoa", "position": { "start": { "line": 12, "column": 67, "offset": 846 }, "end": { "line": 12, "column": 74, "offset": 853 }, "indent": [] } }, { "type": "text", "value": ". This post looks like this. ", "position": { "start": { "line": 12, "column": 74, "offset": 853 }, "end": { "line": 12, "column": 103, "offset": 882 }, "indent": [] } }, { "type": "tangent", "children": [{ "type": "text", "value": " I'll throw a tangent in here just for fun.", "position": { "start": { "line": 12, "column": 150, "offset": 929 }, "end": { "line": 12, "column": 193, "offset": 972 }, "indent": [] } }], "position": { "start": { "line": 12, "column": 103, "offset": 882 }, "end": { "line": 12, "column": 150, "offset": 929 }, "indent": [] } }], "position": { "start": { "line": 12, "column": 1, "offset": 780 }, "end": { "line": 12, "column": 150, "offset": 929 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "image", "title": null, "url": "/static/blog/cur-state.png", "alt": "cur-state.png", "position": { "start": { "line": 14, "column": 1, "offset": 931 }, "end": { "line": 14, "column": 45, "offset": 975 }, "indent": [] } }], "position": { "start": { "line": 14, "column": 1, "offset": 931 }, "end": { "line": 14, "column": 45, "offset": 975 }, "indent": [] } }, { "type": "blockquote", "children": [{ "type": "paragraph", "children": [{ "type": "emphasis", "children": [{ "type": "text", "value": "It can be kinda hard to differentiate between what ", "position": { "start": { "line": 16, "column": 4, "offset": 980 }, "end": { "line": 16, "column": 55, "offset": 1031 }, "indent": [] } }, { "type": "inlineCode", "value": "whoa", "position": { "start": { "line": 16, "column": 55, "offset": 1031 }, "end": { "line": 16, "column": 61, "offset": 1037 }, "indent": [] } }, { "type": "text", "value": " does and what the blog structure I set up does. Ideally I would have them less closely coupled, but that isn't pressing.", "position": { "start": { "line": 16, "column": 61, "offset": 1037 }, "end": { "line": 16, "column": 182, "offset": 1158 }, "indent": [] } }], "position": { "start": { "line": 16, "column": 3, "offset": 979 }, "end": { "line": 16, "column": 183, "offset": 1159 }, "indent": [] } }], "position": { "start": { "line": 16, "column": 3, "offset": 979 }, "end": { "line": 16, "column": 183, "offset": 1159 }, "indent": [] } }], "position": { "start": { "line": 16, "column": 1, "offset": 977 }, "end": { "line": 16, "column": 183, "offset": 1159 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "So there are kinda 3 layers that make it all happen.", "position": { "start": { "line": 18, "column": 1, "offset": 1161 }, "end": { "line": 18, "column": 53, "offset": 1213 }, "indent": [] } }], "position": { "start": { "line": 18, "column": 1, "offset": 1161 }, "end": { "line": 18, "column": 53, "offset": 1213 }, "indent": [] } }, { "type": "list", "ordered": true, "start": 1, "loose": true, "children": [{ "type": "listItem", "loose": true, "checked": null, "children": [{ "type": "paragraph", "children": [{ "type": "link", "title": null, "url": "https://github.com/davvidbaker/whoa/tree/master/whoa-theme", "children": [{ "type": "text", "value": "whoa-theme", "position": { "start": { "line": 20, "column": 5, "offset": 1219 }, "end": { "line": 20, "column": 15, "offset": 1229 }, "indent": [] } }], "position": { "start": { "line": 20, "column": 4, "offset": 1218 }, "end": { "line": 20, "column": 76, "offset": 1290 }, "indent": [] } }, { "type": "text", "value": " and ", "position": { "start": { "line": 20, "column": 76, "offset": 1290 }, "end": { "line": 20, "column": 81, "offset": 1295 }, "indent": [] } }, { "type": "link", "title": null, "url": "https://github.com/davvidbaker/whoa/tree/master/whoa-language-support", "children": [{ "type": "text", "value": "whoa-language-support", "position": { "start": { "line": 20, "column": 82, "offset": 1296 }, "end": { "line": 20, "column": 103, "offset": 1317 }, "indent": [] } }], "position": { "start": { "line": 20, "column": 81, "offset": 1295 }, "end": { "line": 20, "column": 175, "offset": 1389 }, "indent": [] } }], "position": { "start": { "line": 20, "column": 4, "offset": 1218 }, "end": { "line": 20, "column": 175, "offset": 1389 }, "indent": [] } }], "position": { "start": { "line": 20, "column": 1, "offset": 1215 }, "end": { "line": 21, "column": 1, "offset": 1390 }, "indent": [1] } }, { "type": "listItem", "loose": true, "checked": null, "children": [{ "type": "paragraph", "children": [{ "type": "link", "title": null, "url": "https://github.com/davvidbaker/whoa/tree/master/whoa-loader", "children": [{ "type": "text", "value": "whoa-loader", "position": { "start": { "line": 22, "column": 5, "offset": 1395 }, "end": { "line": 22, "column": 16, "offset": 1406 }, "indent": [] } }], "position": { "start": { "line": 22, "column": 4, "offset": 1394 }, "end": { "line": 22, "column": 78, "offset": 1468 }, "indent": [] } }], "position": { "start": { "line": 22, "column": 4, "offset": 1394 }, "end": { "line": 22, "column": 78, "offset": 1468 }, "indent": [] } }], "position": { "start": { "line": 22, "column": 1, "offset": 1391 }, "end": { "line": 23, "column": 1, "offset": 1469 }, "indent": [1] } }, { "type": "listItem", "loose": false, "checked": null, "children": [{ "type": "paragraph", "children": [{ "type": "link", "title": null, "url": "https://github.com/davvidbaker/davvidbaker/tree/master/whoa-components", "children": [{ "type": "text", "value": "whoa-components", "position": { "start": { "line": 24, "column": 5, "offset": 1474 }, "end": { "line": 24, "column": 20, "offset": 1489 }, "indent": [] } }], "position": { "start": { "line": 24, "column": 4, "offset": 1473 }, "end": { "line": 24, "column": 93, "offset": 1562 }, "indent": [] } }], "position": { "start": { "line": 24, "column": 4, "offset": 1473 }, "end": { "line": 24, "column": 93, "offset": 1562 }, "indent": [] } }], "position": { "start": { "line": 24, "column": 1, "offset": 1470 }, "end": { "line": 24, "column": 93, "offset": 1562 }, "indent": [] } }], "position": { "start": { "line": 20, "column": 1, "offset": 1215 }, "end": { "line": 24, "column": 93, "offset": 1562 }, "indent": [1, 1, 1, 1] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "Let's go through them 1 by 1.", "position": { "start": { "line": 26, "column": 1, "offset": 1564 }, "end": { "line": 26, "column": 30, "offset": 1593 }, "indent": [] } }], "position": { "start": { "line": 26, "column": 1, "offset": 1564 }, "end": { "line": 26, "column": 30, "offset": 1593 }, "indent": [] } }, { "type": "heading", "depth": 2, "children": [{ "type": "text", "value": "1. whoa-theme and whoa-language-support", "position": { "start": { "line": 28, "column": 4, "offset": 1598 }, "end": { "line": 28, "column": 43, "offset": 1637 }, "indent": [] } }], "position": { "start": { "line": 28, "column": 1, "offset": 1595 }, "end": { "line": 28, "column": 43, "offset": 1637 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "These are two Visual Studio Code Extensions. One thing you can do in ", "position": { "start": { "line": 30, "column": 1, "offset": 1639 }, "end": { "line": 30, "column": 70, "offset": 1708 }, "indent": [] } }, { "type": "link", "title": null, "url": "https://twitter.com/code?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", "children": [{ "type": "text", "value": "VS Code", "position": { "start": { "line": 30, "column": 71, "offset": 1709 }, "end": { "line": 30, "column": 78, "offset": 1716 }, "indent": [] } }], "position": { "start": { "line": 30, "column": 70, "offset": 1708 }, "end": { "line": 30, "column": 160, "offset": 1798 }, "indent": [] } }, { "type": "text", "value": "—and some other text editors is create your own language grammars. ", "position": { "start": { "line": 30, "column": 160, "offset": 1798 }, "end": { "line": 30, "column": 227, "offset": 1865 }, "indent": [] } }, { "type": "inlineCode", "value": "whoa-language-support", "position": { "start": { "line": 30, "column": 227, "offset": 1865 }, "end": { "line": 30, "column": 250, "offset": 1888 }, "indent": [] } }, { "type": "text", "value": " is what does that. ", "position": { "start": { "line": 30, "column": 250, "offset": 1888 }, "end": { "line": 30, "column": 270, "offset": 1908 }, "indent": [] } }], "position": { "start": { "line": 30, "column": 1, "offset": 1639 }, "end": { "line": 30, "column": 270, "offset": 1908 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "Language grammars are how you are able to get things like syntax highlighting and bracket matching, among many others. Out of the box, VS Code comes installed with a JavaScript grammar and some others, but of course, every programming language needs a grammar! People are using new and obscure languages all the time, and you don't want to have to rely on the text-editor folks to support your language.  It's fairly easy to create your own language extension by looking through ", "position": { "start": { "line": 32, "column": 1, "offset": 1910 }, "end": { "line": 32, "column": 480, "offset": 2389 }, "indent": [] } }, { "type": "link", "title": null, "url": "https://code.visualstudio.com/docs/languages/overview", "children": [{ "type": "text", "value": "VS Code docs", "position": { "start": { "line": 32, "column": 481, "offset": 2390 }, "end": { "line": 32, "column": 493, "offset": 2402 }, "indent": [] } }], "position": { "start": { "line": 32, "column": 480, "offset": 2389 }, "end": { "line": 32, "column": 549, "offset": 2458 }, "indent": [] } }, { "type": "text", "value": " and  language extensions that others have open-sourced, like ", "position": { "start": { "line": 32, "column": 549, "offset": 2458 }, "end": { "line": 32, "column": 611, "offset": 2520 }, "indent": [] } }, { "type": "link", "title": null, "url": "https://marketplace.visualstudio.com/items?itemName=sbrink.elm", "children": [{ "type": "text", "value": "the elm one", "position": { "start": { "line": 32, "column": 612, "offset": 2521 }, "end": { "line": 32, "column": 623, "offset": 2532 }, "indent": [] } }], "position": { "start": { "line": 32, "column": 611, "offset": 2520 }, "end": { "line": 32, "column": 688, "offset": 2597 }, "indent": [] } }, { "type": "text", "value": ".", "position": { "start": { "line": 32, "column": 688, "offset": 2597 }, "end": { "line": 32, "column": 689, "offset": 2598 }, "indent": [] } }], "position": { "start": { "line": 32, "column": 1, "offset": 1910 }, "end": { "line": 32, "column": 689, "offset": 2598 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "inlineCode", "value": "whoa-theme", "position": { "start": { "line": 34, "column": 1, "offset": 2600 }, "end": { "line": 34, "column": 13, "offset": 2612 }, "indent": [] } }, { "type": "text", "value": " is just a simple ", "position": { "start": { "line": 34, "column": 13, "offset": 2612 }, "end": { "line": 34, "column": 31, "offset": 2630 }, "indent": [] } }, { "type": "link", "title": null, "url": "https://code.visualstudio.com/docs/extensions/themes-snippets-colorizers", "children": [{ "type": "text", "value": "VS Code theme extension", "position": { "start": { "line": 34, "column": 32, "offset": 2631 }, "end": { "line": 34, "column": 55, "offset": 2654 }, "indent": [] } }], "position": { "start": { "line": 34, "column": 31, "offset": 2630 }, "end": { "line": 34, "column": 130, "offset": 2729 }, "indent": [] } }, { "type": "text", "value": ". This colorizes the scopes that have been set up by the language grammar. ", "position": { "start": { "line": 34, "column": 130, "offset": 2729 }, "end": { "line": 34, "column": 205, "offset": 2804 }, "indent": [] } }], "position": { "start": { "line": 34, "column": 1, "offset": 2600 }, "end": { "line": 34, "column": 205, "offset": 2804 }, "indent": [] } }, { "type": "heading", "depth": 2, "children": [{ "type": "text", "value": "2 UNFINISHED. Got hungry", "position": { "start": { "line": 36, "column": 4, "offset": 2809 }, "end": { "line": 36, "column": 28, "offset": 2833 }, "indent": [] } }], "position": { "start": { "line": 36, "column": 1, "offset": 2806 }, "end": { "line": 36, "column": 28, "offset": 2833 }, "indent": [] } }, { "type": "heading", "depth": 1, "children": [{ "type": "text", "value": "Components", "position": { "start": { "line": 39, "column": 3, "offset": 2838 }, "end": { "line": 39, "column": 13, "offset": 2848 }, "indent": [] } }], "position": { "start": { "line": 39, "column": 1, "offset": 2836 }, "end": { "line": 39, "column": 13, "offset": 2848 }, "indent": [] } }, { "type": "heading", "depth": 3, "children": [{ "type": "text", "value": "Tangents", "position": { "start": { "line": 41, "column": 5, "offset": 2854 }, "end": { "line": 41, "column": 13, "offset": 2862 }, "indent": [] } }], "position": { "start": { "line": 41, "column": 1, "offset": 2850 }, "end": { "line": 41, "column": 13, "offset": 2862 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "Probably the component I've put the most time into. ", "position": { "start": { "line": 42, "column": 1, "offset": 2863 }, "end": { "line": 42, "column": 53, "offset": 2915 }, "indent": [] } }, { "type": "tangent", "children": [{ "type": "text", "value": "It's best displayed as a shorter tangent on that is just long enough to go off page.", "position": { "start": { "line": 42, "column": 141, "offset": 3003 }, "end": { "line": 42, "column": 225, "offset": 3087 }, "indent": [] } }], "position": { "start": { "line": 42, "column": 53, "offset": 2915 }, "end": { "line": 42, "column": 141, "offset": 3003 }, "indent": [] } }, { "type": "text", "value": " But if it does go off page and then maybe gets covered, you can just click on it and read the contents in a popup.", "position": { "start": { "line": 42, "column": 141, "offset": 3003 }, "end": { "line": 42, "column": 256, "offset": 3118 }, "indent": [] } }], "position": { "start": { "line": 42, "column": 1, "offset": 2863 }, "end": { "line": 42, "column": 256, "offset": 3118 }, "indent": [] } }, { "type": "heading", "depth": 3, "children": [{ "type": "text", "value": "Search Bars", "position": { "start": { "line": 44, "column": 5, "offset": 3124 }, "end": { "line": 44, "column": 16, "offset": 3135 }, "indent": [] } }], "position": { "start": { "line": 44, "column": 1, "offset": 3120 }, "end": { "line": 44, "column": 16, "offset": 3135 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "search", "children": [{ "type": "text", "value": "What's up with Russia today?", "position": { "start": { "line": 45, "column": 33, "offset": 3168 }, "end": { "line": 45, "column": 61, "offset": 3196 }, "indent": [] } }], "position": { "start": { "line": 45, "column": 1, "offset": 3136 }, "end": { "line": 45, "column": 33, "offset": 3168 }, "indent": [] } }], "position": { "start": { "line": 45, "column": 1, "offset": 3136 }, "end": { "line": 45, "column": 33, "offset": 3168 }, "indent": [] } }, { "type": "heading", "depth": 3, "children": [{ "type": "text", "value": "Revisions", "position": { "start": { "line": 47, "column": 5, "offset": 3174 }, "end": { "line": 47, "column": 14, "offset": 3183 }, "indent": [] } }], "position": { "start": { "line": 47, "column": 1, "offset": 3170 }, "end": { "line": 47, "column": 14, "offset": 3183 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "revision", "id": "revision-S15gtIG7jS-", "children": [{ "type": "text", "value": "Some bad text that you should hover over.", "position": { "start": { "line": 48, "column": 1, "offset": 3184 }, "end": { "line": 48, "column": 42, "offset": 3225 }, "indent": [] } }, "You gotta do better kid."], "position": { "start": { "line": 48, "column": 1, "offset": 3184 }, "end": { "line": 48, "column": 71, "offset": 3254 }, "indent": [] } }, { "type": "text", "value": " ", "position": { "start": { "line": 48, "column": 71, "offset": 3254 }, "end": { "line": 48, "column": 72, "offset": 3255 }, "indent": [] } }, { "type": "revision", "id": "revision-BJogKUzQiHb", "children": [{ "type": "text", "value": "And some that hovering over doesn't do nothin", "position": { "start": { "line": 48, "column": 72, "offset": 3255 }, "end": { "line": 48, "column": 117, "offset": 3300 }, "indent": [] } }], "position": { "start": { "line": 48, "column": 72, "offset": 3255 }, "end": { "line": 48, "column": 120, "offset": 3303 }, "indent": [] } }, { "type": "text", "value": ".", "position": { "start": { "line": 48, "column": 120, "offset": 3303 }, "end": { "line": 48, "column": 121, "offset": 3304 }, "indent": [] } }], "position": { "start": { "line": 48, "column": 1, "offset": 3184 }, "end": { "line": 48, "column": 121, "offset": 3304 }, "indent": [] } }, { "type": "heading", "depth": 3, "children": [{ "type": "text", "value": "Normatives", "position": { "start": { "line": 50, "column": 5, "offset": 3310 }, "end": { "line": 50, "column": 15, "offset": 3320 }, "indent": [] } }], "position": { "start": { "line": 50, "column": 1, "offset": 3306 }, "end": { "line": 50, "column": 15, "offset": 3320 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "normative", "id": "normative-HynlYIMmoH-", "children": [{ "type": "text", "value": "I should " }, { "type": "text", "value": "find a new job.", "position": { "start": { "line": 51, "column": 1, "offset": 3321 }, "end": { "line": 51, "column": 16, "offset": 3336 }, "indent": [] } }], "position": { "start": { "line": 51, "column": 1, "offset": 3321 }, "end": { "line": 51, "column": 25, "offset": 3345 }, "indent": [] } }, { "type": "text", "value": " Now look over in the notes to the left 👈.", "position": { "start": { "line": 51, "column": 25, "offset": 3345 }, "end": { "line": 51, "column": 68, "offset": 3388 }, "indent": [] } }], "position": { "start": { "line": 51, "column": 1, "offset": 3321 }, "end": { "line": 51, "column": 68, "offset": 3388 }, "indent": [] } }, { "type": "heading", "depth": 3, "children": [{ "type": "text", "value": "Redactions", "position": { "start": { "line": 53, "column": 5, "offset": 3394 }, "end": { "line": 53, "column": 15, "offset": 3404 }, "indent": [] } }], "position": { "start": { "line": 53, "column": 1, "offset": 3390 }, "end": { "line": 53, "column": 15, "offset": 3404 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "Here is some text that maybe I don't want you to ", "position": { "start": { "line": 54, "column": 1, "offset": 3405 }, "end": { "line": 54, "column": 50, "offset": 3454 }, "indent": [] } }, { "type": "redaction", "id": "redaction-HyalFLMmiB-", "children": [{ "type": "text", "value": "see", "position": { "start": { "line": 54, "column": 50, "offset": 3454 }, "end": { "line": 54, "column": 53, "offset": 3457 }, "indent": [] } }], "position": { "start": { "line": 54, "column": 50, "offset": 3454 }, "end": { "line": 54, "column": 57, "offset": 3461 }, "indent": [] } }, { "type": "text", "value": ", at least not without ", "position": { "start": { "line": 54, "column": 57, "offset": 3461 }, "end": { "line": 54, "column": 80, "offset": 3484 }, "indent": [] } }, { "type": "redaction", "id": "redaction-HJClY8zmoH-", "children": [{ "type": "text", "value": "some effort", "position": { "start": { "line": 54, "column": 80, "offset": 3484 }, "end": { "line": 54, "column": 91, "offset": 3495 }, "indent": [] } }], "position": { "start": { "line": 54, "column": 80, "offset": 3484 }, "end": { "line": 54, "column": 95, "offset": 3499 }, "indent": [] } }, { "type": "text", "value": ".", "position": { "start": { "line": 54, "column": 95, "offset": 3499 }, "end": { "line": 54, "column": 96, "offset": 3500 }, "indent": [] } }], "position": { "start": { "line": 54, "column": 1, "offset": 3405 }, "end": { "line": 54, "column": 96, "offset": 3500 }, "indent": [] } }, { "type": "heading", "depth": 3, "children": [{ "type": "text", "value": "Word Choice", "position": { "start": { "line": 56, "column": 5, "offset": 3506 }, "end": { "line": 56, "column": 16, "offset": 3517 }, "indent": [] } }], "position": { "start": { "line": 56, "column": 1, "offset": 3502 }, "end": { "line": 56, "column": 16, "offset": 3517 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "I often can't decide what word to ", "position": { "start": { "line": 57, "column": 1, "offset": 3518 }, "end": { "line": 57, "column": 35, "offset": 3552 }, "indent": [] } }, { "type": "wordChoice", "children": [{ "type": "text", "value": "use" }, { "type": "text", "value": "write" }, { "type": "text", "value": "say" }], "position": { "start": { "line": 57, "column": 35, "offset": 3552 }, "end": { "line": 57, "column": 55, "offset": 3572 }, "indent": [] } }, { "type": "text", "value": ". And sometimes I have doubts about whether the word I use is a real word and the ", "position": { "start": { "line": 57, "column": 55, "offset": 3572 }, "end": { "line": 57, "column": 137, "offset": 3654 }, "indent": [] } }, { "type": "wordChoice", "children": [{ "type": "text", "value": "befitting" }], "position": { "start": { "line": 57, "column": 137, "offset": 3654 }, "end": { "line": 57, "column": 149, "offset": 3666 }, "indent": [] } }, { "type": "text", "value": " word.", "position": { "start": { "line": 57, "column": 149, "offset": 3666 }, "end": { "line": 57, "column": 155, "offset": 3672 }, "indent": [] } }], "position": { "start": { "line": 57, "column": 1, "offset": 3518 }, "end": { "line": 57, "column": 155, "offset": 3672 }, "indent": [] } }, { "type": "thematicBreak", "position": { "start": { "line": 59, "column": 1, "offset": 3674 }, "end": { "line": 59, "column": 4, "offset": 3677 }, "indent": [] } }, { "type": "heading", "depth": 1, "children": [{ "type": "text", "value": "Damn I really need more components.", "position": { "start": { "line": 61, "column": 3, "offset": 3681 }, "end": { "line": 61, "column": 38, "offset": 3716 }, "indent": [] } }], "position": { "start": { "line": 61, "column": 1, "offset": 3679 }, "end": { "line": 61, "column": 38, "offset": 3716 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "Maybe. Or I might just want to write more. For one. Then I'll see what I really need.", "position": { "start": { "line": 63, "column": 1, "offset": 3718 }, "end": { "line": 63, "column": 86, "offset": 3803 }, "indent": [] } }], "position": { "start": { "line": 63, "column": 1, "offset": 3718 }, "end": { "line": 63, "column": 86, "offset": 3803 }, "indent": [] } }], "position": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 63, "column": 86, "offset": 3803 } } } });
};

/**
 * This file was automatically created Tue Jul 18 2017 01:53:21 GMT-0400 (EDT)
 */

/***/ })

});
          })
        