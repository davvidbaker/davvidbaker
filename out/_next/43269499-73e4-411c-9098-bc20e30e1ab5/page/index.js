
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([26],{

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _head = __webpack_require__(42);

var _head2 = _interopRequireDefault(_head);

var _link = __webpack_require__(43);

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = __webpack_require__(41);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(60);

var _Nav = __webpack_require__(56);

var _Nav2 = _interopRequireDefault(_Nav);

var _Phone = __webpack_require__(372);

var _Phone2 = _interopRequireDefault(_Phone);

var _Definition = __webpack_require__(369);

var _Definition2 = _interopRequireDefault(_Definition);

var _PageWrapper = __webpack_require__(57);

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var IndexPage = function IndexPage(_ref) {
  var url = _ref.url;
  return _react2.default.createElement(_PageWrapper2.default, { title: '\uD83D\uDE43\uD83D\uDC22' }, _react2.default.createElement(_Nav2.default, { url: url }), _react2.default.createElement('main', { style: { padding: '10px' }, 'data-jsx': 1216228720
  }, _react2.default.createElement(_Definition2.default, { word: 'chthonic', ipa: '/\u02C8\u03B8\u0252n\u026Ak/', PoS: 'adjective' }, 'concerning, belonging to, or inhabiting the underworld: a chthonic deity.'), _react2.default.createElement(_Phone2.default, null), _react2.default.createElement('h2', {
    'data-jsx': 1216228720
  }, 'Hello!'), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, 'If you\'ve gotten here, it\'s probably because I am applying for a job!'), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, _react2.default.createElement('label', { htmlFor: 'traditional', 'data-jsx': 1216228720
  }, 'Would you like to see a more traditional cover letter?'), _react2.default.createElement('input', { type: 'checkbox', id: 'traditional', 'data-jsx': 1216228720
  })), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, 'You should check out the projects page. A lot of stuff on there is unpolished personal projects, but still worth a look.'), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, 'These days, ', _react2.default.createElement('strong', {
    'data-jsx': 1216228720
  }, 'I am a frontend developer.'), ' I love making stuff, and I love the pace that comes with with writing software.'), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, 'I used to (back in college) focus more on the hardware side of things but have found software to be much more accessible now that I don\'t have 24/7 access to lab full of all the discrete electronic components I might ever need \uD83D\uDE22.'), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, 'Do I know everything? ', _react2.default.createElement('strong', {
    'data-jsx': 1216228720
  }, 'Certainly not!'), ' There is sooooo much to learn about in our industry and the world, at times it can be overwhelming. I do however, learn quickly and I am eager to fill gaps in my knowledge.'), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, 'I am drawn to good ol\' clean design that serves a purpose.'), _react2.default.createElement('p', {
    'data-jsx': 1216228720
  }, '...')), _react2.default.createElement(_style2.default, {
    styleId: 1216228720,
    css: '\n        body {\n          --color-border: darkslategray;\n        }\n      '
  }));
};

IndexPage.getInitialProps = function () {
  var _ref3 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref2) {
    var store = _ref2.store,
        isServer = _ref2.isServer;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt('return', { isServer: isServer });

          case 1:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    addCount: function addCount(dispatch) {
      return { type: 'ADD' };
    }
  };
};

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, function (state) {
  return (0, _extends3.default)({}, state);
}, mapDispatchToProps)(IndexPage);

/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Definition = function Definition(_ref) {
  var word = _ref.word,
      ipa = _ref.ipa,
      PoS = _ref.PoS,
      children = _ref.children;
  return _react2.default.createElement("section", {
    "data-jsx": 1169277175
  }, _react2.default.createElement("heading", {
    "data-jsx": 1169277175
  }, _react2.default.createElement("h1", {
    "data-jsx": 1169277175
  }, word), ipa && _react2.default.createElement("p", { className: "ipa", "data-jsx": 1169277175
  }, ipa)), _react2.default.createElement("div", { className: "definition-body", "data-jsx": 1169277175
  }, PoS && _react2.default.createElement("p", { className: "part-of-speech", "data-jsx": 1169277175
  }, PoS), _react2.default.createElement("p", { className: "definition", "data-jsx": 1169277175
  }, children)), _react2.default.createElement(_style2.default, {
    styleId: 1169277175,
    css: "h1[data-jsx=\"1169277175\"],.ipa[data-jsx=\"1169277175\"] {display: inline;}.ipa[data-jsx=\"1169277175\"] {margin-left: 1rem;font-weight: light;}p[data-jsx=\"1169277175\"] {margin-top: 0.25rem;margin-bottom: 0.25rem;}.part-of-speech[data-jsx=\"1169277175\"] {padding-left: 1rem;}.definition[data-jsx=\"1169277175\"] {font-weight: lighter;font-size: smaller;padding-left: 2rem;}"
  }));
};

exports.default = Definition;

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _shortid = __webpack_require__(14);

var _shortid2 = _interopRequireDefault(_shortid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var children = _ref.children,
      _ref$me = _ref.me,
      me = _ref$me === undefined ? false : _ref$me,
      style = _ref.style;

  var id = _shortid2.default.generate();

  return _react2.default.createElement('div', { className: (me ? 'me' : 'you') + '-column', 'data-jsx': 1329159230
  }, _react2.default.createElement('div', { className: 'message ' + (me ? 'me' : 'you'), id: id, style: style && style, 'data-jsx': 1329159230
  }, children, _react2.default.createElement('style', null, '#' + id + ' {\n          ' + (style && '--you-color: ' + style.background + ';') + '\n        }')), _react2.default.createElement(_style2.default, {
    styleId: 1329159230,
    css: '.message[data-jsx="1329159230"] {--me-color: #ddd;--you-color: dodgerblue;--border-radius: 10px;display: inline-block;color: white;padding: 5px;margin: var(--border-radius, 10px);position: relative;max-width: 75%;}.message[data-jsx="1329159230"]::before {content: \'\';position: absolute;width: 0;height: 0;left: -5px;bottom: 0;border-top: var(--border-radius, 10px) solid transparent;border-bottom: 0px solid transparent;}.you-column[data-jsx="1329159230"] {text-align: right;}.me[data-jsx="1329159230"] {color: black;border-radius: var(--border-radius, 10px) var(--border-radius, 10px) var(--border-radius, 10px) 0;background: var(--me-color);}.me[data-jsx="1329159230"]::before {border-right: var(--border-radius, 10px) solid var(--me-color);border-left: 0px solid transparent;}.you[data-jsx="1329159230"] {border-radius: var(--border-radius, 10px) var(--border-radius, 10px) 0 var(--border-radius, 10px);background: var(--you-color);text-align: left;}.you[data-jsx="1329159230"]::before {right: -5px;left: unset;border-left: var(--border-radius, 10px) solid var(--you-color);border-right: 0px solid transparent;}'
  }));
};

exports.default = Message;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Messenger = function Messenger(_ref) {
  var children = _ref.children,
      name = _ref.name;
  return _react2.default.createElement("section", {
    "data-jsx": 2794900292
  }, name && _react2.default.createElement("header", {
    "data-jsx": 2794900292
  }, _react2.default.createElement("h1", {
    "data-jsx": 2794900292
  }, name)), _react2.default.createElement("div", { className: "messenger-body", "data-jsx": 2794900292
  }, children), _react2.default.createElement(_style2.default, {
    styleId: 2794900292,
    css: "section[data-jsx=\"2794900292\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;height: 100%;}header[data-jsx=\"2794900292\"] {background: #f7f7f7;border-bottom: 1px solid #aaa;text-align: center;}header[data-jsx=\"2794900292\"] h1[data-jsx=\"2794900292\"] {font-weight: bold;margin: 0.5rem auto;}.messenger-body[data-jsx=\"2794900292\"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;overflow-y: scroll;-webkit-flex-grow: 1;-moz-flex-grow: 1;flex-grow: 1;}"
  }));
};
/**
 * Two ways to use this.
 *
 * 1. In parent component, import <Messenger> and wrap a bunch of <Messages />
 *
 * ⚠ maybe not 2. In parent component, import messengerize and apply that to a template literal with keys indicating me and you.
 */

// import Message from './Message';
exports.default = Messenger;

/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Message = __webpack_require__(370);

var _Message2 = _interopRequireDefault(_Message);

var _Messenger = __webpack_require__(371);

var _Messenger2 = _interopRequireDefault(_Messenger);

var _smoothScrollTo = __webpack_require__(161);

var _smoothScrollTo2 = _interopRequireDefault(_smoothScrollTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Phone = function Phone() {
  return _react2.default.createElement('div', { className: 'phone-container', 'data-jsx': 2651834403
  }, _react2.default.createElement('div', { className: 'phone-speaker', 'data-jsx': 2651834403
  }), _react2.default.createElement('div', { className: 'phone-screen', 'data-jsx': 2651834403
  }, _react2.default.createElement(_Messenger2.default, { className: 'messenger', name: 'You' }, _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'You there, reader.')), _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('h3', {
    'data-jsx': 2651834403
  }, 'It\'s me.')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'Me?'), _react2.default.createElement('br', {
    'data-jsx': 2651834403
  }), _react2.default.createElement('br', {
    'data-jsx': 2651834403
  }), _react2.default.createElement('strong', {
    'data-jsx': 2651834403
  }, 'You'), ' can\'t be ', _react2.default.createElement('em', {
    'data-jsx': 2651834403
  }, 'me'), '.'), _react2.default.createElement(_Message2.default, { style: { background: 'gold', color: 'black' } }, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'Who am I in this situation?')), _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'You tell me.')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'Does anyone else find this a bit annoying?')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'I bet ', _react2.default.createElement('strong', {
    'data-jsx': 2651834403
  }, 'you'), ' do.')), _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('h2', {
    'data-jsx': 2651834403
  }, 'How about an h2?'), _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'These look the same no.')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'What does this look like')), _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'Hello')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'It\'s me')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'What does this look like')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj')), _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'What does this look like')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'What does this look like')), _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'Hello')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'It\'s me')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'What does this look like')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('p', {
    'data-jsx': 2651834403
  }, 'A bunch ot text as;fljasd;fljkas;df j;ksafj;kja sh sjd hjsasjhd slafhj a;sdjf;alsf jl;asjdf; hkj;hlj')), _react2.default.createElement(_Message2.default, { me: true }, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'What does this look like')), _react2.default.createElement(_Message2.default, null, _react2.default.createElement('h1', {
    'data-jsx': 2651834403
  }, 'What does this look like')))), _react2.default.createElement('button', {
    className: 'phone-button',
    onClick: function onClick() {
      return (0, _smoothScrollTo2.default)(document.querySelector('.messenger-body'), 0);
    },
    'data-jsx': 2651834403
  }), _react2.default.createElement(_style2.default, {
    styleId: 2651834403,
    css: '.phone-container[data-jsx="2651834403"] {--aspect-ratio: 2;--phone-height: 90vh;--phone-button-height: 5vh;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;justify-content: space-around;align-items: center;margin: 30px auto;background: #000;border: 3px solid #999;height: var(--phone-height, 90vh);width: calc(var(--phone-height, 90vh) / var(--aspect-ratio, 2));border-radius: 5vmin;padding: 0 2vmin;box-shadow: 0 0 30px;-webkit-transition: width 0.5s 0.1s, height 0.5s 0.3s;-moz-transition: width 0.5s 0.1s, height 0.5s 0.3s;-ms-transition: width 0.5s 0.1s, height 0.5s 0.3s;transition: width 0.5s 0.1s, height 0.5s 0.3s;}.phone-screen[data-jsx="2651834403"] {background: white;-webkit-flex-grow: 1;-moz-flex-grow: 1;flex-grow: 1;width: 100%;height: 0;}.phone-speaker[data-jsx="2651834403"] {width: 20%;height: 1%;background: #444;border-radius: 10%;margin: 5vmin auto;}.phone-button[data-jsx="2651834403"] {background: #222;border-radius: 50%;width: var(--phone-button-height, 5vh);height: var(--phone-button-height, 5vh);margin: 3vmin auto;display: block;}.phone-button[data-jsx="2651834403"]:focus {outline: none;}@media(orientation:landscape) {.phone-container[data-jsx="2651834403"] {--phone-button-height: 5vw;--phone-height: calc(90vw * var(--aspect-ratio));--aspect-ratio: 0.5;-webkit-flex-direction: row;-moz-flex-direction: row;flex-direction: row;padding: 2vmin 0;}.phone-screen[data-jsx="2651834403"] {width: 0;height: 100%;}.phone-speaker[data-jsx="2651834403"] {height: 20%;width: 1%;margin: auto 5vmin;}.phone-button[data-jsx="2651834403"] {margin: auto 3vmin;}}p[data-jsx="2651834403"],h1[data-jsx="2651834403"],h2[data-jsx="2651834403"],h3[data-jsx="2651834403"],h4[data-jsx="2651834403"] {margin: 0.25rem;display: inline-block;}'
  }));
};

exports.default = Phone;

/***/ }),

/***/ 440:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(182);


/***/ })

},[440]);
            return { page: comp.default }
          })
        