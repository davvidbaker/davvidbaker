
          window.__NEXT_REGISTER_CHUNK('2a7905fd-9f21-4c0a-a07e-f09f692a8f52.js', function() {
            webpackJsonp([25],{

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(100);

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Post2.default, { attributes: { "readTime": 0.5927272727272728, "title": "Figuring Out Posts", "slug": "figuring-out-posts", "date": "March 4, 2017" }, content: { "type": "root", "children": [{ "type": "heading", "depth": 1, "children": [{ "type": "text", "value": "This whole taxonomy thing is hard.", "position": { "start": { "line": 2, "column": 3, "offset": 3 }, "end": { "line": 2, "column": 37, "offset": 37 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 1, "offset": 1 }, "end": { "line": 2, "column": 37, "offset": 37 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "It's like, how much do you plan ahead?", "position": { "start": { "line": 4, "column": 1, "offset": 39 }, "end": { "line": 4, "column": 39, "offset": 77 }, "indent": [] } }], "position": { "start": { "line": 4, "column": 1, "offset": 39 }, "end": { "line": 4, "column": 39, "offset": 77 }, "indent": [] } }, { "type": "heading", "depth": 2, "children": [{ "type": "text", "value": "Where do things go!?", "position": { "start": { "line": 6, "column": 4, "offset": 82 }, "end": { "line": 6, "column": 24, "offset": 102 }, "indent": [] } }], "position": { "start": { "line": 6, "column": 1, "offset": 79 }, "end": { "line": 6, "column": 24, "offset": 102 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "Let's say we're making a new post. Like a blog post. You could think of it like that. Where does that belong in our file structure? Is it itself its own component. That's a fun sentence.", "position": { "start": { "line": 8, "column": 1, "offset": 104 }, "end": { "line": 8, "column": 187, "offset": 290 }, "indent": [] } }], "position": { "start": { "line": 8, "column": 1, "offset": 104 }, "end": { "line": 8, "column": 187, "offset": 290 }, "indent": [] } }, { "type": "heading", "depth": 1, "children": [{ "type": "text", "value": "Is it itself its own component?", "position": { "start": { "line": 10, "column": 3, "offset": 294 }, "end": { "line": 10, "column": 34, "offset": 325 }, "indent": [] } }], "position": { "start": { "line": 10, "column": 1, "offset": 292 }, "end": { "line": 10, "column": 34, "offset": 325 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "I feel like it is. But I also feel like the post is going to mostly just be text data that can sort of just hydrate a react component tree.", "position": { "start": { "line": 12, "column": 1, "offset": 327 }, "end": { "line": 12, "column": 140, "offset": 466 }, "indent": [] } }], "position": { "start": { "line": 12, "column": 1, "offset": 327 }, "end": { "line": 12, "column": 140, "offset": 466 }, "indent": [] } }, { "type": "heading", "depth": 3, "children": [{ "type": "text", "value": "I'm definitely leaning towards a post being a component though. If for nothing more than the ability to encapsulate its own styles.", "position": { "start": { "line": 14, "column": 5, "offset": 472 }, "end": { "line": 14, "column": 136, "offset": 603 }, "indent": [] } }], "position": { "start": { "line": 14, "column": 1, "offset": 468 }, "end": { "line": 14, "column": 136, "offset": 603 }, "indent": [] } }, { "type": "heading", "depth": 2, "children": [{ "type": "text", "value": "I'd like to be able to write this using a Markdown editor though also.", "position": { "start": { "line": 16, "column": 4, "offset": 608 }, "end": { "line": 16, "column": 74, "offset": 678 }, "indent": [] } }], "position": { "start": { "line": 16, "column": 1, "offset": 605 }, "end": { "line": 16, "column": 74, "offset": 678 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "Is that somehting I should sacrifice in the name of freedom?", "position": { "start": { "line": 18, "column": 1, "offset": 680 }, "end": { "line": 18, "column": 61, "offset": 740 }, "indent": [] } }], "position": { "start": { "line": 18, "column": 1, "offset": 680 }, "end": { "line": 18, "column": 61, "offset": 740 }, "indent": [] } }, { "type": "html", "value": "<hr>", "position": { "start": { "line": 20, "column": 1, "offset": 742 }, "end": { "line": 20, "column": 5, "offset": 746 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "text", "value": "I also must come back to the ideas that I've been circling in my head.", "position": { "start": { "line": 22, "column": 1, "offset": 748 }, "end": { "line": 22, "column": 71, "offset": 818 }, "indent": [] } }], "position": { "start": { "line": 22, "column": 1, "offset": 748 }, "end": { "line": 22, "column": 71, "offset": 818 }, "indent": [] } }, { "type": "heading", "depth": 1, "children": [{ "type": "text", "value": "Time Travelling Styles, Scripts, and Crips", "position": { "start": { "line": 24, "column": 3, "offset": 822 }, "end": { "line": 24, "column": 45, "offset": 864 }, "indent": [] } }], "position": { "start": { "line": 24, "column": 1, "offset": 820 }, "end": { "line": 24, "column": 45, "offset": 864 }, "indent": [] } }, { "type": "heading", "depth": 2, "children": [{ "type": "text", "value": "Cookie Crips", "position": { "start": { "line": 26, "column": 4, "offset": 869 }, "end": { "line": 26, "column": 16, "offset": 881 }, "indent": [] } }], "position": { "start": { "line": 26, "column": 1, "offset": 866 }, "end": { "line": 26, "column": 16, "offset": 881 }, "indent": [] } }], "position": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 26, "column": 16, "offset": 881 } } } });
};

/**
 * This file was automatically created Thu Aug 03 2017 13:12:24 GMT-0400 (EDT)
 */

/***/ })

});
          })
        