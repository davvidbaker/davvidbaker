
          window.__NEXT_REGISTER_PAGE('/projects', function() {
            var comp = module.exports =
webpackJsonp([23],{

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ 159:
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

var ExternalLinks = function ExternalLinks(_ref) {
  var link = _ref.link,
      linkToSource = _ref.linkToSource,
      linkToTrello = _ref.linkToTrello,
      callToAction = _ref.callToAction;
  return _react2.default.createElement("ul", {
    "data-jsx": 319301241
  }, _react2.default.createElement("li", { className: "project-link", "data-jsx": 319301241
  }, _react2.default.createElement("p", {
    "data-jsx": 319301241
  }, link ? _react2.default.createElement("a", { href: link, "data-jsx": 319301241
  }, callToAction) : 'Coming Soon')), linkToSource && _react2.default.createElement("li", {
    "data-jsx": 319301241
  }, _react2.default.createElement("a", { href: linkToSource, "data-jsx": 319301241
  }, _react2.default.createElement("img", { width: "24px", src: "/static/github.svg", alt: "Github", "data-jsx": 319301241
  }))), linkToTrello && _react2.default.createElement("li", {
    "data-jsx": 319301241
  }, _react2.default.createElement("a", { href: linkToTrello, "data-jsx": 319301241
  }, _react2.default.createElement("img", { width: "24px", src: "/static/trello-mark-blue.svg", alt: "Trello", "data-jsx": 319301241
  }))), _react2.default.createElement(_style2.default, {
    styleId: 319301241,
    css: "ul[data-jsx=\"319301241\"] {display:-webkit-flex; display:flex;justify-content: flex-end;align-items: center;}li[data-jsx=\"319301241\"] {padding: 0 3px;-webkit-transition: scale 0.2s;-moz-transition: scale 0.2s;-ms-transition: scale 0.2s;transition: scale 0.2s;}li[data-jsx=\"319301241\"]:hover:not(.project-link) {-webkit-transform: scale(1.05);-moz-transform: scale(1.05);-ms-transform: scale(1.05);transform: scale(1.05);}li[data-jsx=\"319301241\"]:first-child {padding-left: 0;}li[data-jsx=\"319301241\"]:last-child {padding-right: 0;}.project-link[data-jsx=\"319301241\"] {-webkit-flex-grow: 1;-moz-flex-grow: 1;flex-grow: 1;}p[data-jsx=\"319301241\"] {margin: 0;}"
  }));
};

exports.default = ExternalLinks;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var status = _ref.status,
      focused = _ref.focused;
  return _react2.default.createElement("p", { style: { opacity: focused ? 1 : 0.3 }, "data-jsx": 4285196373
  }, _react2.default.createElement("span", { className: "status-key", "data-jsx": 4285196373
  }, "status"), _react2.default.createElement("span", {
    className: "status-value",
    style: { background: status[1] ? status[1] : 'black' },
    "data-jsx": 4285196373
  }, status[0].replace(/\s/g, "\xA0")), _react2.default.createElement(_style2.default, {
    styleId: 4285196373,
    css: "p[data-jsx=\"4285196373\"] {font-family: " + _styles.fonts.monospace + ", monospace;color: white;cursor: default;font-size: 10px;-webkit-transition: opacity 0.2s;-moz-transition: opacity 0.2s;-ms-transition: opacity 0.2s;transition: opacity 0.2s;}.status-key[data-jsx=\"4285196373\"],.status-value[data-jsx=\"4285196373\"] {padding: 3px 5px;}.status-key[data-jsx=\"4285196373\"] {background: #555;border-radius: 2px 0 0 2px;}.status-value[data-jsx=\"4285196373\"] {border-radius: 0 2px 2px 0;}"
  }));
};

/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _toConsumableArray2 = __webpack_require__(45);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactAddonsCssTransitionGroup = __webpack_require__(403);

var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);

var _recompose = __webpack_require__(32);

var _shortid = __webpack_require__(14);

var _shortid2 = _interopRequireDefault(_shortid);

var _nextReduxWrapper = __webpack_require__(41);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(60);

var _PageWrapper = __webpack_require__(57);

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _constants = __webpack_require__(375);

var _Project = __webpack_require__(373);

var _Project2 = _interopRequireDefault(_Project);

var _AdditionalInfo = __webpack_require__(362);

var _AdditionalInfo2 = _interopRequireDefault(_AdditionalInfo);

var _Nav = __webpack_require__(56);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

// import { connect } from 'react-redux';

var compareYears = function compareYears(a, b) {
  if (Math.max.apply(Math, (0, _toConsumableArray3.default)(a.year)) > Math.max.apply(Math, (0, _toConsumableArray3.default)(b.year))) {
    return -1;
  } else if (Math.max.apply(Math, (0, _toConsumableArray3.default)(a.year)) < Math.max.apply(Math, (0, _toConsumableArray3.default)(b.year))) {
    return 1;
  } else if (Math.min.apply(Math, (0, _toConsumableArray3.default)(a.year)) < Math.min.apply(Math, (0, _toConsumableArray3.default)(b.year))) {
    return 1;
  }
  return 0;
};

var withToggle = (0, _recompose.compose)((0, _recompose.withReducer)('showingAdditionalInfo', 'dispatch', function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments[1];

  switch (action.type) {
    case 'SHOW_READ_MORE':
      return action.value;

    case 'HIDE_READ_MORE':
      return false;

    default:
      return state;
  }
}), (0, _recompose.withHandlers)({
  showAdditionalInfo: function showAdditionalInfo(_ref) {
    var dispatch = _ref.dispatch;
    return function (projectName) {
      dispatch({ type: 'SHOW_READ_MORE', value: projectName });
    };
  },
  hideAdditionalInfo: function hideAdditionalInfo(_ref2) {
    var dispatch = _ref2.dispatch;
    return function (event) {
      dispatch({ type: 'HIDE_READ_MORE' });
    };
  }
}));

var ProjectList = function ProjectList(_ref3) {
  var projects = _ref3.projects,
      showAdditionalInfo = _ref3.showAdditionalInfo,
      hideAdditionalInfo = _ref3.hideAdditionalInfo,
      showingAdditionalInfo = _ref3.showingAdditionalInfo;
  return _react2.default.createElement('ul', { className: showingAdditionalInfo ? 'hidden' : 'visible', 'data-jsx': 1423688962
  }, projects.sort(compareYears).map(function (project) {
    return _react2.default.createElement(_Project2.default, {
      key: project.name,
      year: project.year,
      status: project.status,
      tagline: project.tagline,
      name: project.name,
      description: project.description,
      callToAction: project.callToAction,
      link: project.link,
      linkToSource: project.linkToSource,
      linkToTrello: project.linkToTrello,
      highlight: project.highlight,
      showAdditionalInfo: showAdditionalInfo
    });
  }), _react2.default.createElement(_style2.default, {
    styleId: 2980364607,
    css: 'ul[data-jsx="1423688962"] {padding: 2.5vw;display: grid;grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));grid-gap: 2.5vw;-webkit-margin-before: 0;-webkit-margin-after: 0;}'
  }), _react2.default.createElement(_style2.default, {
    styleId: 1914993272,
    css: '\n      h1 {\n        font-size: 24px;\n      }\n      p {\n        color: #555;\n        line-height: 1.5;\n      }\n      a {\n        color: var(--color-link);\n        text-decoration: none;\n      }\n      a:hover {\n        text-decoration: underline;\n      }\n      body > div:first-child {\n        width: 100%;\n        height: 100%;\n      }\n      #body-div {\n        border: var(--color-border) 0px solid;\n        background: #f5f5f5;\n        min-height: 100vh;\n      }\n      .fade-enter {\n        opacity: 0.01;\n      }\n      .fade-enter.fade-enter-active {\n        opacity: 1;\n        transition: opacity 200ms ease-in 205ms;\n      }\n      .fade-leave {\n        opacity: 1;\n      }\n      .fade-leave.fade-leave-active {\n        opacity: 0.01;\n        transition: opacity 200ms ease-in;\n      }\n      #additional-info {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n      .markdown p:first-child {\n        margin-top: 0;\n      }\n    '
  }));
};

var Page = withToggle(function (_ref4) {
  var projects = _ref4.projects,
      url = _ref4.url,
      showAdditionalInfo = _ref4.showAdditionalInfo,
      hideAdditionalInfo = _ref4.hideAdditionalInfo,
      showingAdditionalInfo = _ref4.showingAdditionalInfo;

  var project = url.query.name ? projects.filter(function (project) {
    return project.name === url.query.name.replace(/-/g, ' ');
  })[0] : null;
  return _react2.default.createElement('div', { id: 'projects-page', style: { position: 'relative', minHeight: '100%' } }, _react2.default.createElement(_Nav2.default, { url: url }), _react2.default.createElement('main', null, _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
    transitionName: 'fade',
    transitionEnterTimeout: 500,
    transitionLeaveTimeout: 300
  }, url.query.name && project ? _react2.default.createElement(_AdditionalInfo2.default, (0, _extends3.default)({
    key: 'additional-info',
    hideAdditionalInfo: hideAdditionalInfo
  }, project)) : _react2.default.createElement(ProjectList, {
    key: 'project-list',
    projects: projects,
    showAdditionalInfo: showAdditionalInfo
  }))));
});

var ProjectsPage = function ProjectsPage(_ref5) {
  var url = _ref5.url;
  return _react2.default.createElement(_PageWrapper2.default, {
    title: '\uD83D\uDE43\uD83D\uDC22 ' + (url.query.name ? url.query.name : 'Projects'),
    background: '#f5f5f5'
  }, _react2.default.createElement(Page, { projects: _constants.PROJECTS, url: url }));
};

ProjectsPage.getInitialProps = function () {
  var _ref7 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(_ref6) {
    var store = _ref6.store,
        isServer = _ref6.isServer;
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

  return function (_x2) {
    return _ref7.apply(this, arguments);
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
}, mapDispatchToProps)(ProjectsPage);

/***/ }),

/***/ 268:
/***/ (function(module, exports) {


module.exports = function chain(){
  var len = arguments.length
  var args = [];

  for (var i = 0; i < len; i++)
    args[i] = arguments[i]

  args = args.filter(function(fn){ return fn != null })

  if (args.length === 0) return undefined
  if (args.length === 1) return args[0]

  return args.reduce(function(current, next){
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  })
}


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(322);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(149);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(149);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2014, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/chjj/marked
 */

;(function() {

/**
 * Block-Level Grammar
 */

var block = {
  newline: /^\n+/,
  code: /^( {4}[^\n]+\n*)+/,
  fences: noop,
  hr: /^( *[-*_]){3,} *(?:\n+|$)/,
  heading: /^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,
  nptable: noop,
  lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
  blockquote: /^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,
  list: /^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
  html: /^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,
  table: noop,
  paragraph: /^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,
  text: /^[^\n]+/
};

block.bullet = /(?:[*+-]|\d+\.)/;
block.item = /^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;
block.item = replace(block.item, 'gm')
  (/bull/g, block.bullet)
  ();

block.list = replace(block.list)
  (/bull/g, block.bullet)
  ('hr', '\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))')
  ('def', '\\n+(?=' + block.def.source + ')')
  ();

block.blockquote = replace(block.blockquote)
  ('def', block.def)
  ();

block._tag = '(?!(?:'
  + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code'
  + '|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo'
  + '|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b';

block.html = replace(block.html)
  ('comment', /<!--[\s\S]*?-->/)
  ('closed', /<(tag)[\s\S]+?<\/\1>/)
  ('closing', /<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)
  (/tag/g, block._tag)
  ();

block.paragraph = replace(block.paragraph)
  ('hr', block.hr)
  ('heading', block.heading)
  ('lheading', block.lheading)
  ('blockquote', block.blockquote)
  ('tag', '<' + block._tag)
  ('def', block.def)
  ();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  fences: /^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\s*\1 *(?:\n+|$)/,
  paragraph: /^/,
  heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
});

block.gfm.paragraph = replace(block.paragraph)
  ('(?!', '(?!'
    + block.gfm.fences.source.replace('\\1', '\\2') + '|'
    + block.list.source.replace('\\1', '\\3') + '|')
  ();

/**
 * GFM + Tables Block Grammar
 */

block.tables = merge({}, block.gfm, {
  nptable: /^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,
  table: /^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/
});

/**
 * Block Lexer
 */

function Lexer(options) {
  this.tokens = [];
  this.tokens.links = {};
  this.options = options || marked.defaults;
  this.rules = block.normal;

  if (this.options.gfm) {
    if (this.options.tables) {
      this.rules = block.tables;
    } else {
      this.rules = block.gfm;
    }
  }
}

/**
 * Expose Block Rules
 */

Lexer.rules = block;

/**
 * Static Lex Method
 */

Lexer.lex = function(src, options) {
  var lexer = new Lexer(options);
  return lexer.lex(src);
};

/**
 * Preprocessing
 */

Lexer.prototype.lex = function(src) {
  src = src
    .replace(/\r\n|\r/g, '\n')
    .replace(/\t/g, '    ')
    .replace(/\u00a0/g, ' ')
    .replace(/\u2424/g, '\n');

  return this.token(src, true);
};

/**
 * Lexing
 */

Lexer.prototype.token = function(src, top, bq) {
  var src = src.replace(/^ +$/gm, '')
    , next
    , loose
    , cap
    , bull
    , b
    , item
    , space
    , i
    , l;

  while (src) {
    // newline
    if (cap = this.rules.newline.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[0].length > 1) {
        this.tokens.push({
          type: 'space'
        });
      }
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      cap = cap[0].replace(/^ {4}/gm, '');
      this.tokens.push({
        type: 'code',
        text: !this.options.pedantic
          ? cap.replace(/\n+$/, '')
          : cap
      });
      continue;
    }

    // fences (gfm)
    if (cap = this.rules.fences.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'code',
        lang: cap[2],
        text: cap[3] || ''
      });
      continue;
    }

    // heading
    if (cap = this.rules.heading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[1].length,
        text: cap[2]
      });
      continue;
    }

    // table no leading pipe (gfm)
    if (top && (cap = this.rules.nptable.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i].split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // lheading
    if (cap = this.rules.lheading.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'heading',
        depth: cap[2] === '=' ? 1 : 2,
        text: cap[1]
      });
      continue;
    }

    // hr
    if (cap = this.rules.hr.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'hr'
      });
      continue;
    }

    // blockquote
    if (cap = this.rules.blockquote.exec(src)) {
      src = src.substring(cap[0].length);

      this.tokens.push({
        type: 'blockquote_start'
      });

      cap = cap[0].replace(/^ *> ?/gm, '');

      // Pass `top` to keep the current
      // "toplevel" state. This is exactly
      // how markdown.pl works.
      this.token(cap, top, true);

      this.tokens.push({
        type: 'blockquote_end'
      });

      continue;
    }

    // list
    if (cap = this.rules.list.exec(src)) {
      src = src.substring(cap[0].length);
      bull = cap[2];

      this.tokens.push({
        type: 'list_start',
        ordered: bull.length > 1
      });

      // Get each top-level item.
      cap = cap[0].match(this.rules.item);

      next = false;
      l = cap.length;
      i = 0;

      for (; i < l; i++) {
        item = cap[i];

        // Remove the list item's bullet
        // so it is seen as the next token.
        space = item.length;
        item = item.replace(/^ *([*+-]|\d+\.) +/, '');

        // Outdent whatever the
        // list item contains. Hacky.
        if (~item.indexOf('\n ')) {
          space -= item.length;
          item = !this.options.pedantic
            ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '')
            : item.replace(/^ {1,4}/gm, '');
        }

        // Determine whether the next list item belongs here.
        // Backpedal if it does not belong in this list.
        if (this.options.smartLists && i !== l - 1) {
          b = block.bullet.exec(cap[i + 1])[0];
          if (bull !== b && !(bull.length > 1 && b.length > 1)) {
            src = cap.slice(i + 1).join('\n') + src;
            i = l - 1;
          }
        }

        // Determine whether item is loose or not.
        // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
        // for discount behavior.
        loose = next || /\n\n(?!\s*$)/.test(item);
        if (i !== l - 1) {
          next = item.charAt(item.length - 1) === '\n';
          if (!loose) loose = next;
        }

        this.tokens.push({
          type: loose
            ? 'loose_item_start'
            : 'list_item_start'
        });

        // Recurse.
        this.token(item, false, bq);

        this.tokens.push({
          type: 'list_item_end'
        });
      }

      this.tokens.push({
        type: 'list_end'
      });

      continue;
    }

    // html
    if (cap = this.rules.html.exec(src)) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: this.options.sanitize
          ? 'paragraph'
          : 'html',
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      });
      continue;
    }

    // def
    if ((!bq && top) && (cap = this.rules.def.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.links[cap[1].toLowerCase()] = {
        href: cap[2],
        title: cap[3]
      };
      continue;
    }

    // table (gfm)
    if (top && (cap = this.rules.table.exec(src))) {
      src = src.substring(cap[0].length);

      item = {
        type: 'table',
        header: cap[1].replace(/^ *| *\| *$/g, '').split(/ *\| */),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        cells: cap[3].replace(/(?: *\| *)?\n$/, '').split('\n')
      };

      for (i = 0; i < item.align.length; i++) {
        if (/^ *-+: *$/.test(item.align[i])) {
          item.align[i] = 'right';
        } else if (/^ *:-+: *$/.test(item.align[i])) {
          item.align[i] = 'center';
        } else if (/^ *:-+ *$/.test(item.align[i])) {
          item.align[i] = 'left';
        } else {
          item.align[i] = null;
        }
      }

      for (i = 0; i < item.cells.length; i++) {
        item.cells[i] = item.cells[i]
          .replace(/^ *\| *| *\| *$/g, '')
          .split(/ *\| */);
      }

      this.tokens.push(item);

      continue;
    }

    // top-level paragraph
    if (top && (cap = this.rules.paragraph.exec(src))) {
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'paragraph',
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1]
      });
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      // Top-level should never reach here.
      src = src.substring(cap[0].length);
      this.tokens.push({
        type: 'text',
        text: cap[0]
      });
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return this.tokens;
};

/**
 * Inline-Level Grammar
 */

var inline = {
  escape: /^\\([\\`*{}\[\]()#+\-.!_>])/,
  autolink: /^<([^ >]+(@|:\/)[^ >]+)>/,
  url: noop,
  tag: /^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,
  link: /^!?\[(inside)\]\(href\)/,
  reflink: /^!?\[(inside)\]\s*\[([^\]]*)\]/,
  nolink: /^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,
  strong: /^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,
  em: /^\b_((?:[^_]|__)+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,
  code: /^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,
  br: /^ {2,}\n(?!\s*$)/,
  del: noop,
  text: /^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/
};

inline._inside = /(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;
inline._href = /\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;

inline.link = replace(inline.link)
  ('inside', inline._inside)
  ('href', inline._href)
  ();

inline.reflink = replace(inline.reflink)
  ('inside', inline._inside)
  ();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
  em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: replace(inline.escape)('])', '~|])')(),
  url: /^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,
  del: /^~~(?=\S)([\s\S]*?\S)~~/,
  text: replace(inline.text)
    (']|', '~]|')
    ('|', '|https?://|')
    ()
});

/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: replace(inline.br)('{2,}', '*')(),
  text: replace(inline.gfm.text)('{2,}', '*')()
});

/**
 * Inline Lexer & Compiler
 */

function InlineLexer(links, options) {
  this.options = options || marked.defaults;
  this.links = links;
  this.rules = inline.normal;
  this.renderer = this.options.renderer || new Renderer;
  this.renderer.options = this.options;

  if (!this.links) {
    throw new
      Error('Tokens array requires a `links` property.');
  }

  if (this.options.gfm) {
    if (this.options.breaks) {
      this.rules = inline.breaks;
    } else {
      this.rules = inline.gfm;
    }
  } else if (this.options.pedantic) {
    this.rules = inline.pedantic;
  }
}

/**
 * Expose Inline Rules
 */

InlineLexer.rules = inline;

/**
 * Static Lexing/Compiling Method
 */

InlineLexer.output = function(src, links, options) {
  var inline = new InlineLexer(links, options);
  return inline.output(src);
};

/**
 * Lexing/Compiling
 */

InlineLexer.prototype.output = function(src) {
  var out = ''
    , link
    , text
    , href
    , cap;

  while (src) {
    // escape
    if (cap = this.rules.escape.exec(src)) {
      src = src.substring(cap[0].length);
      out += cap[1];
      continue;
    }

    // autolink
    if (cap = this.rules.autolink.exec(src)) {
      src = src.substring(cap[0].length);
      if (cap[2] === '@') {
        text = cap[1].charAt(6) === ':'
          ? this.mangle(cap[1].substring(7))
          : this.mangle(cap[1]);
        href = this.mangle('mailto:') + text;
      } else {
        text = escape(cap[1]);
        href = text;
      }
      out += this.renderer.link(href, null, text);
      continue;
    }

    // url (gfm)
    if (!this.inLink && (cap = this.rules.url.exec(src))) {
      src = src.substring(cap[0].length);
      text = escape(cap[1]);
      href = text;
      out += this.renderer.link(href, null, text);
      continue;
    }

    // tag
    if (cap = this.rules.tag.exec(src)) {
      if (!this.inLink && /^<a /i.test(cap[0])) {
        this.inLink = true;
      } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
        this.inLink = false;
      }
      src = src.substring(cap[0].length);
      out += this.options.sanitize
        ? this.options.sanitizer
          ? this.options.sanitizer(cap[0])
          : escape(cap[0])
        : cap[0]
      continue;
    }

    // link
    if (cap = this.rules.link.exec(src)) {
      src = src.substring(cap[0].length);
      this.inLink = true;
      out += this.outputLink(cap, {
        href: cap[2],
        title: cap[3]
      });
      this.inLink = false;
      continue;
    }

    // reflink, nolink
    if ((cap = this.rules.reflink.exec(src))
        || (cap = this.rules.nolink.exec(src))) {
      src = src.substring(cap[0].length);
      link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = this.links[link.toLowerCase()];
      if (!link || !link.href) {
        out += cap[0].charAt(0);
        src = cap[0].substring(1) + src;
        continue;
      }
      this.inLink = true;
      out += this.outputLink(cap, link);
      this.inLink = false;
      continue;
    }

    // strong
    if (cap = this.rules.strong.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.strong(this.output(cap[2] || cap[1]));
      continue;
    }

    // em
    if (cap = this.rules.em.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.em(this.output(cap[2] || cap[1]));
      continue;
    }

    // code
    if (cap = this.rules.code.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.codespan(escape(cap[2], true));
      continue;
    }

    // br
    if (cap = this.rules.br.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.br();
      continue;
    }

    // del (gfm)
    if (cap = this.rules.del.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.del(this.output(cap[1]));
      continue;
    }

    // text
    if (cap = this.rules.text.exec(src)) {
      src = src.substring(cap[0].length);
      out += this.renderer.text(escape(this.smartypants(cap[0])));
      continue;
    }

    if (src) {
      throw new
        Error('Infinite loop on byte: ' + src.charCodeAt(0));
    }
  }

  return out;
};

/**
 * Compile Link
 */

InlineLexer.prototype.outputLink = function(cap, link) {
  var href = escape(link.href)
    , title = link.title ? escape(link.title) : null;

  return cap[0].charAt(0) !== '!'
    ? this.renderer.link(href, title, this.output(cap[1]))
    : this.renderer.image(href, title, escape(cap[1]));
};

/**
 * Smartypants Transformations
 */

InlineLexer.prototype.smartypants = function(text) {
  if (!this.options.smartypants) return text;
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
};

/**
 * Mangle Links
 */

InlineLexer.prototype.mangle = function(text) {
  if (!this.options.mangle) return text;
  var out = ''
    , l = text.length
    , i = 0
    , ch;

  for (; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
};

/**
 * Renderer
 */

function Renderer(options) {
  this.options = options || {};
}

Renderer.prototype.code = function(code, lang, escaped) {
  if (this.options.highlight) {
    var out = this.options.highlight(code, lang);
    if (out != null && out !== code) {
      escaped = true;
      code = out;
    }
  }

  if (!lang) {
    return '<pre><code>'
      + (escaped ? code : escape(code, true))
      + '\n</code></pre>';
  }

  return '<pre><code class="'
    + this.options.langPrefix
    + escape(lang, true)
    + '">'
    + (escaped ? code : escape(code, true))
    + '\n</code></pre>\n';
};

Renderer.prototype.blockquote = function(quote) {
  return '<blockquote>\n' + quote + '</blockquote>\n';
};

Renderer.prototype.html = function(html) {
  return html;
};

Renderer.prototype.heading = function(text, level, raw) {
  return '<h'
    + level
    + ' id="'
    + this.options.headerPrefix
    + raw.toLowerCase().replace(/[^\w]+/g, '-')
    + '">'
    + text
    + '</h'
    + level
    + '>\n';
};

Renderer.prototype.hr = function() {
  return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
};

Renderer.prototype.list = function(body, ordered) {
  var type = ordered ? 'ol' : 'ul';
  return '<' + type + '>\n' + body + '</' + type + '>\n';
};

Renderer.prototype.listitem = function(text) {
  return '<li>' + text + '</li>\n';
};

Renderer.prototype.paragraph = function(text) {
  return '<p>' + text + '</p>\n';
};

Renderer.prototype.table = function(header, body) {
  return '<table>\n'
    + '<thead>\n'
    + header
    + '</thead>\n'
    + '<tbody>\n'
    + body
    + '</tbody>\n'
    + '</table>\n';
};

Renderer.prototype.tablerow = function(content) {
  return '<tr>\n' + content + '</tr>\n';
};

Renderer.prototype.tablecell = function(content, flags) {
  var type = flags.header ? 'th' : 'td';
  var tag = flags.align
    ? '<' + type + ' style="text-align:' + flags.align + '">'
    : '<' + type + '>';
  return tag + content + '</' + type + '>\n';
};

// span level renderer
Renderer.prototype.strong = function(text) {
  return '<strong>' + text + '</strong>';
};

Renderer.prototype.em = function(text) {
  return '<em>' + text + '</em>';
};

Renderer.prototype.codespan = function(text) {
  return '<code>' + text + '</code>';
};

Renderer.prototype.br = function() {
  return this.options.xhtml ? '<br/>' : '<br>';
};

Renderer.prototype.del = function(text) {
  return '<del>' + text + '</del>';
};

Renderer.prototype.link = function(href, title, text) {
  if (this.options.sanitize) {
    try {
      var prot = decodeURIComponent(unescape(href))
        .replace(/[^\w:]/g, '')
        .toLowerCase();
    } catch (e) {
      return '';
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0) {
      return '';
    }
  }
  var out = '<a href="' + href + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += '>' + text + '</a>';
  return out;
};

Renderer.prototype.image = function(href, title, text) {
  var out = '<img src="' + href + '" alt="' + text + '"';
  if (title) {
    out += ' title="' + title + '"';
  }
  out += this.options.xhtml ? '/>' : '>';
  return out;
};

Renderer.prototype.text = function(text) {
  return text;
};

/**
 * Parsing & Compiling
 */

function Parser(options) {
  this.tokens = [];
  this.token = null;
  this.options = options || marked.defaults;
  this.options.renderer = this.options.renderer || new Renderer;
  this.renderer = this.options.renderer;
  this.renderer.options = this.options;
}

/**
 * Static Parse Method
 */

Parser.parse = function(src, options, renderer) {
  var parser = new Parser(options, renderer);
  return parser.parse(src);
};

/**
 * Parse Loop
 */

Parser.prototype.parse = function(src) {
  this.inline = new InlineLexer(src.links, this.options, this.renderer);
  this.tokens = src.reverse();

  var out = '';
  while (this.next()) {
    out += this.tok();
  }

  return out;
};

/**
 * Next Token
 */

Parser.prototype.next = function() {
  return this.token = this.tokens.pop();
};

/**
 * Preview Next Token
 */

Parser.prototype.peek = function() {
  return this.tokens[this.tokens.length - 1] || 0;
};

/**
 * Parse Text Tokens
 */

Parser.prototype.parseText = function() {
  var body = this.token.text;

  while (this.peek().type === 'text') {
    body += '\n' + this.next().text;
  }

  return this.inline.output(body);
};

/**
 * Parse Current Token
 */

Parser.prototype.tok = function() {
  switch (this.token.type) {
    case 'space': {
      return '';
    }
    case 'hr': {
      return this.renderer.hr();
    }
    case 'heading': {
      return this.renderer.heading(
        this.inline.output(this.token.text),
        this.token.depth,
        this.token.text);
    }
    case 'code': {
      return this.renderer.code(this.token.text,
        this.token.lang,
        this.token.escaped);
    }
    case 'table': {
      var header = ''
        , body = ''
        , i
        , row
        , cell
        , flags
        , j;

      // header
      cell = '';
      for (i = 0; i < this.token.header.length; i++) {
        flags = { header: true, align: this.token.align[i] };
        cell += this.renderer.tablecell(
          this.inline.output(this.token.header[i]),
          { header: true, align: this.token.align[i] }
        );
      }
      header += this.renderer.tablerow(cell);

      for (i = 0; i < this.token.cells.length; i++) {
        row = this.token.cells[i];

        cell = '';
        for (j = 0; j < row.length; j++) {
          cell += this.renderer.tablecell(
            this.inline.output(row[j]),
            { header: false, align: this.token.align[j] }
          );
        }

        body += this.renderer.tablerow(cell);
      }
      return this.renderer.table(header, body);
    }
    case 'blockquote_start': {
      var body = '';

      while (this.next().type !== 'blockquote_end') {
        body += this.tok();
      }

      return this.renderer.blockquote(body);
    }
    case 'list_start': {
      var body = ''
        , ordered = this.token.ordered;

      while (this.next().type !== 'list_end') {
        body += this.tok();
      }

      return this.renderer.list(body, ordered);
    }
    case 'list_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.token.type === 'text'
          ? this.parseText()
          : this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'loose_item_start': {
      var body = '';

      while (this.next().type !== 'list_item_end') {
        body += this.tok();
      }

      return this.renderer.listitem(body);
    }
    case 'html': {
      var html = !this.token.pre && !this.options.pedantic
        ? this.inline.output(this.token.text)
        : this.token.text;
      return this.renderer.html(html);
    }
    case 'paragraph': {
      return this.renderer.paragraph(this.inline.output(this.token.text));
    }
    case 'text': {
      return this.renderer.paragraph(this.parseText());
    }
  }
};

/**
 * Helpers
 */

function escape(html, encode) {
  return html
    .replace(!encode ? /&(?!#?\w+;)/g : /&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function unescape(html) {
	// explicitly match decimal, hex, and named HTML entities 
  return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/g, function(_, n) {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

function replace(regex, opt) {
  regex = regex.source;
  opt = opt || '';
  return function self(name, val) {
    if (!name) return new RegExp(regex, opt);
    val = val.source || val;
    val = val.replace(/(^|[^\[])\^/g, '$1');
    regex = regex.replace(name, val);
    return self;
  };
}

function noop() {}
noop.exec = noop;

function merge(obj) {
  var i = 1
    , target
    , key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}


/**
 * Marked
 */

function marked(src, opt, callback) {
  if (callback || typeof opt === 'function') {
    if (!callback) {
      callback = opt;
      opt = null;
    }

    opt = merge({}, marked.defaults, opt || {});

    var highlight = opt.highlight
      , tokens
      , pending
      , i = 0;

    try {
      tokens = Lexer.lex(src, opt)
    } catch (e) {
      return callback(e);
    }

    pending = tokens.length;

    var done = function(err) {
      if (err) {
        opt.highlight = highlight;
        return callback(err);
      }

      var out;

      try {
        out = Parser.parse(tokens, opt);
      } catch (e) {
        err = e;
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!pending) return done();

    for (; i < tokens.length; i++) {
      (function(token) {
        if (token.type !== 'code') {
          return --pending || done();
        }
        return highlight(token.text, token.lang, function(err, code) {
          if (err) return done(err);
          if (code == null || code === token.text) {
            return --pending || done();
          }
          token.text = code;
          token.escaped = true;
          --pending || done();
        });
      })(tokens[i]);
    }

    return;
  }
  try {
    if (opt) opt = merge({}, marked.defaults, opt);
    return Parser.parse(Lexer.lex(src, opt), opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/chjj/marked.';
    if ((opt || marked.defaults).silent) {
      return '<p>An error occured:</p><pre>'
        + escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  return marked;
};

marked.defaults = {
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  sanitizer: null,
  mangle: true,
  smartLists: false,
  silent: false,
  highlight: null,
  langPrefix: 'lang-',
  smartypants: false,
  headerPrefix: '',
  renderer: new Renderer,
  xhtml: false
};

/**
 * Expose
 */

marked.Parser = Parser;
marked.parser = Parser.parse;

marked.Renderer = Renderer;

marked.Lexer = Lexer;
marked.lexer = Lexer.lex;

marked.InlineLexer = InlineLexer;
marked.inlineLexer = InlineLexer.output;

marked.parse = marked;

if (true) {
  module.exports = marked;
} else if (typeof define === 'function' && define.amd) {
  define(function() { return marked; });
} else {
  this.marked = marked;
}

}).call(function() {
  return this || (typeof window !== 'undefined' ? window : global);
}());

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(30)))

/***/ }),

/***/ 362:
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

var _marked = __webpack_require__(351);

var _marked2 = _interopRequireDefault(_marked);

var _ExternalLinks = __webpack_require__(159);

var _ExternalLinks2 = _interopRequireDefault(_ExternalLinks);

var _Status = __webpack_require__(160);

var _Status2 = _interopRequireDefault(_Status);

var _styles = __webpack_require__(58);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Replaces the comma with a Unicode no-breaking hypen */
var formatYears = function formatYears(years) {
  return String(years).replace(',', '‑');
};

var AdditionalInfo = function AdditionalInfo(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === undefined ? '[Name Here]' : _ref$name,
      status = _ref.status,
      description = _ref.description,
      year = _ref.year,
      link = _ref.link,
      linkToSource = _ref.linkToSource,
      linkToTrello = _ref.linkToTrello,
      _ref$callToAction = _ref.callToAction,
      callToAction = _ref$callToAction === undefined ? 'Check it out' : _ref$callToAction,
      videos = _ref.videos,
      images = _ref.images,
      keywords = _ref.keywords,
      teammates = _ref.teammates,
      logo = _ref.logo,
      hideAdditionalInfo = _ref.hideAdditionalInfo;
  return _react2.default.createElement('div', { id: 'additional-info', onClick: hideAdditionalInfo, 'data-jsx': 246748406
  }, _react2.default.createElement('div', { className: 'inner', 'data-jsx': 246748406
  }, _react2.default.createElement('div', { className: 'heading', 'data-jsx': 246748406
  }, _react2.default.createElement('div', {
    'data-jsx': 246748406
  }, _react2.default.createElement('h1', { style: { marginRight: '5px', transform: 'translateY(3px)' }, 'data-jsx': 246748406
  }, name, ' ', _react2.default.createElement('span', {
    'data-jsx': 246748406
  }, year && formatYears(year))), status && _react2.default.createElement(_Status2.default, { status: status, focused: true })), _react2.default.createElement(_ExternalLinks2.default, { link: link, linkToSource: linkToSource, linkToTrello: linkToTrello, callToAction: callToAction })), description ? _react2.default.createElement('p', { className: 'description', 'data-jsx': 246748406
  }, logo && _react2.default.createElement('img', { className: 'logo', src: logo, alt: name + ' logo', 'data-jsx': 246748406
  }), _react2.default.createElement('span', {
    className: 'markdown',
    dangerouslySetInnerHTML: { __html: (0, _marked2.default)(description) },
    'data-jsx': 246748406
  })) : null, _react2.default.createElement('div', {
    className: 'gallery',

    'data-jsx': 246748406
  }, images && images.map(function (image) {
    return _react2.default.createElement('img', { key: image, src: image, alt: image, 'data-jsx': 246748406
    });
  }), videos && videos.map(function (video) {
    return _react2.default.createElement('video', {
      loop: true,
      controls: true,
      muted: true,
      autoPlay: true,
      src: video,
      alt: name + ' video',
      key: video,
      'data-jsx': 246748406
    });
  })), keywords && _react2.default.createElement('ul', { className: 'keywords flex-list', 'data-jsx': 246748406
  }, keywords.map(function (word) {
    return _react2.default.createElement('li', { key: word, 'data-jsx': 246748406
    }, _react2.default.createElement('span', {
      'data-jsx': 246748406
    }, word));
  })), teammates && _react2.default.createElement('ul', { className: 'teammates flex-list', 'data-jsx': 246748406
  }, teammates.map(function (teammate) {
    return _react2.default.createElement('a', { href: teammate.link, 'data-jsx': 246748406
    }, _react2.default.createElement('li', { key: teammate.name, 'data-jsx': 246748406
    }, _react2.default.createElement('span', {
      'data-jsx': 246748406
    }, teammate.name)));
  }))), _react2.default.createElement(_style2.default, {
    styleId: 246748406,
    css: '#additional-info[data-jsx="246748406"] {opacity: 0;-webkit-animation:0.3s 1s a246748406fadeIn;-moz-animation:0.3s 1s a246748406fadeIn;animation:0.3s 1s a246748406fadeIn;-webkit-animation-fill-mode:forwards;-moz-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes a246748406fadeIn {to {opacity: 1;}}@-moz-keyframes a246748406fadeIn {to {opacity: 1;}}@keyframes a246748406fadeIn {to {opacity: 1;}}.inner[data-jsx="246748406"] {margin: auto;display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;{}padding: 1rem;{}max-width: 80vw;{}width:100%;{}}.heading[data-jsx="246748406"] {display:-webkit-flex; display:flex;align-items: center;justify-content: space-between;min-height: 3rem;}.heading[data-jsx="246748406"] div[data-jsx="246748406"] {display:-webkit-flex; display:flex;}.logo[data-jsx="246748406"] {float: left;height: 50px;margin: 0 5px 5px 0;}.gallery[data-jsx="246748406"] {display: grid;grid-gap: 1vw;grid-auto-flow: dense;grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));justify-items: center;align-items: center;margin: 2.5vw 0;}.gallery[data-jsx="246748406"] video[data-jsx="246748406"] {box-shadow: 0 0 20px 2px #888;grid-column-end: span 3;}.gallery[data-jsx="246748406"] img[data-jsx="246748406"],.gallery[data-jsx="246748406"] video[data-jsx="246748406"] {max-width: 50vw;max-height: 50vh;}.gallery[data-jsx="246748406"] img[data-jsx="246748406"]:hover,.gallery[data-jsx="246748406"] video[data-jsx="246748406"]:hover {z-index: 2;}.gallery[data-jsx="246748406"] div[data-jsx="246748406"] {height: 200px;width: 200px;background-size: contain;background-repeat: no-repeat;background-position: center;}h1[data-jsx="246748406"] {margin: 0;line-height: 1;}h1[data-jsx="246748406"] span[data-jsx="246748406"] {color: #ddd;font-size: smaller;}#additional-info[data-jsx="246748406"] {background: #f5f5f5;height: 100%;}.description[data-jsx="246748406"] {{}}.flex-list[data-jsx="246748406"] {min-height: 2rem;display:-webkit-flex; display:flex;}.flex-list[data-jsx="246748406"] li[data-jsx="246748406"] {color: white;padding: 5px;margin: 5px;-webkit-transition: background 0.3s;-moz-transition: background 0.3s;-ms-transition: background 0.3s;transition: background 0.3s;font-family: ' + _styles.fonts.monospace + ';}.flex-list[data-jsx="246748406"] li[data-jsx="246748406"]:hover {background: black;}.keywords[data-jsx="246748406"] li[data-jsx="246748406"] {background: ' + _styles.colors.border + ';}.teammates[data-jsx="246748406"] li[data-jsx="246748406"] {background: rebeccapurple;}'
  }));
};

exports.default = AdditionalInfo;

/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(43);

var _link2 = _interopRequireDefault(_link);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _recompose = __webpack_require__(32);

var _ExternalLinks = __webpack_require__(159);

var _ExternalLinks2 = _interopRequireDefault(_ExternalLinks);

var _Status = __webpack_require__(160);

var _Status2 = _interopRequireDefault(_Status);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Router from 'next/router';

var withToggle = (0, _recompose.compose)((0, _recompose.withReducer)('focused', 'dispatch', function (state, action) {
  switch (action.type) {
    case 'FOCUS':
      return true;
    case 'UNFOCUS':
      return false;
    default:
      return state;
  }
}), (0, _recompose.withHandlers)({
  focus: function focus(_ref) {
    var dispatch = _ref.dispatch;
    return function (event) {
      dispatch({ type: 'FOCUS' });
    };
  },
  unfocus: function unfocus(_ref2) {
    var dispatch = _ref2.dispatch;
    return function (event) {
      dispatch({ type: 'UNFOCUS' });
    };
  }
}));

/* Replaces the comma with a Unicode no-breaking hypen */
var formatYears = function formatYears(years) {
  return String(years).replace(',', '‑');
};

var Project = function Project(_ref3) {
  var _ref3$name = _ref3.name,
      name = _ref3$name === undefined ? '[Name Here]' : _ref3$name,
      _ref3$tagline = _ref3.tagline,
      tagline = _ref3$tagline === undefined ? 'tagline' : _ref3$tagline,
      _ref3$highlight = _ref3.highlight,
      highlight = _ref3$highlight === undefined ? false : _ref3$highlight,
      status = _ref3.status,
      description = _ref3.description,
      year = _ref3.year,
      link = _ref3.link,
      linkToSource = _ref3.linkToSource,
      linkToTrello = _ref3.linkToTrello,
      _ref3$callToAction = _ref3.callToAction,
      callToAction = _ref3$callToAction === undefined ? 'Check it out' : _ref3$callToAction,
      focused = _ref3.focused,
      focus = _ref3.focus,
      unfocus = _ref3.unfocus,
      showAdditionalInfo = _ref3.showAdditionalInfo;
  return _react2.default.createElement('div', {
    className: highlight && 'highlight-project',
    onMouseEnter: focus,
    onMouseLeave: unfocus,
    'data-jsx': 2091001646
  }, _react2.default.createElement('h1', {
    'data-jsx': 2091001646
  }, name, ' ', _react2.default.createElement('span', {
    'data-jsx': 2091001646
  }, year && formatYears(year))), status && _react2.default.createElement(_Status2.default, { status: status, focused: focused }), _react2.default.createElement('p', { className: 'tagline', 'data-jsx': 2091001646
  }, tagline), description ? _react2.default.createElement(_link2.default, {
    href: {
      pathname: '/projects',
      query: { name: name.replace(/\s/g, '-') }
    },
    as: '/projects/' + name.replace(/\s/g, '-')
  }, _react2.default.createElement('a', {
    'data-jsx': 2091001646
  }, 'Read more...')) : null, _react2.default.createElement(_ExternalLinks2.default, { link: link, linkToSource: linkToSource, linkToTrello: linkToTrello, callToAction: callToAction }), _react2.default.createElement(_style2.default, {
    styleId: 2091001646,
    css: 'div[data-jsx="2091001646"] {display:-webkit-flex; display:flex;-webkit-flex-direction: column;-moz-flex-direction: column;flex-direction: column;border: solid #cecece 1px;padding: 10px;background: white;}h1[data-jsx="2091001646"] {margin: 0;line-height: 1;}h1[data-jsx="2091001646"] span[data-jsx="2091001646"] {color: #ddd;font-size: smaller;}.tagline[data-jsx="2091001646"] {-webkit-flex: 1;-moz-flex: 1;flex: 1;}.highlight-project[data-jsx="2091001646"] {border-color: mediumseagreen;border-width: 2px;}'
  }));
};

exports.default = withToggle(Project);

/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * using RequireJS export because I am using this in next.config.js for dynamic routes
 */
module.exports = {
  PROJECTS: [{
    name: 'Whoa',
    status: ['active development', 'darkmagenta'],
    tagline: 'An exploration of writing with custom markup and components.',
    year: [2017],
    highlight: true
  }, {
    name: 'Swyzzle',
    year: [2016],
    tagline: 'The screensaver revolution has begun.',
    status: ["i'll be back", 'midnightblue'],
    callToAction: 'Get swyzzling!',
    description: 'Swyzzle is a screensaver that **melts your screen**. \n\n Back when I was working in the Click 3X office in New York, I would activate the screen melting when I went out for lunch or to meetings, to make it look like my screen was fucked up. To my surprise, *no one ever said anything.*\n\nRight now **it only works on macOS and Linux** (Ubuntu, not sure about other distros). And it does not yet support multiple displays.',
    keywords: ['Electron', 'WebGL'],
    link: 'https://davvidbaker.github.io/Swyzzle/',
    linkToSource: 'https://github.com/davvidbaker/Swyzzle',
    linkToTrello: 'https://trello.com/b/fAycvoLY/swyzzle',
    logo: '/static/swyzzle-logo.svg',
    images: [],
    videos: ['/static/swyzzle_fast_small.mp4']
  }, {
    name: 'Box Man',
    status: ['unpolished', 'olivedrab'],
    year: [2015, 2017],
    tagline: 'A reality experiment of sorts.',
    description: 'Box Man is an out of body experience that uses a Google Cardboard head mounted display to enable you to experience your life from outside of your body. A friend records you with a second mobile device, and this stream is then beamed in real time to the Cardboard on your face, resulting in real time third person perspective of yourself.',
    callToAction: 'Do It!',
    link: 'https://davvidbaker.github.io/BoxMan/about',
    linkToSource: 'https://github.com/davvidbaker/BoxMan',
    linkToTrello: 'https://trello.com/b/6r04R3fb/box-man',
    logo: '/static/boxman-boxman.png',
    images: ['/static/boxman-boxman.png', '/static/boxman-cameraguy.png'],
    keywords: ['VR', 'AR', 'Performance Art', 'WebRTC']
  }, {
    name: 'La Mer',
    year: [2016],
    agency: 'Click 3X',
    role: 'Lead Developer',
    status: ['shipped', 'green'],
    tagline: "A 360 advertising experience made for La Mer's revitalizing hydrating serum campaign.",
    description: 'We (*Click 3X*) were tasked by La Mer to create an **immersive 360 experience** to bring to life the brand’s 2D marketing video for the new *Revitalizing Hydrating Serum*. Our team designed a 3D world, incorporating animation, interactive hot spots, and creative transitions between the scenes. The experience was developed in HTML5, translated into 11 languages, and is compatible across mobile and desktop devices.',
    callToAction: 'Paradise awaits...',
    link: 'http://experience.cremedelamer.com/',
    keywords: ['three.js', 'WebGL'],
    videos: ['/static/La_Mer_Demo.mp4']
  }, {
    name: 'Puppy Club',
    year: [2016, 2017],
    agency: 'Click 3X',
    role: 'Lead Developer',
    tagline: "A cross-platform kids' game that was the bane of my existence for about a year.",
    keywords: ['Phaser', 'HTML5 Game']
  }, {
    name: 'Typography',
    year: [2015],
    tagline: 'Since first grade, I had dreamed of turning my handwriting into a font.',
    description: 'Since first grade, I had dreamed of turning my handwriting into a font. **Dream achieved**.\n\nI also made a custom font for typing common characters from the International Phonetic Alphabet, for when one is wont to write phonetically.',
    callToAction: 'Get the fonts!',
    link: 'https://github.com/davvidbaker/fonts/wiki/Fonts',
    images: ['/static/typography.png']
  }, {
    name: 'Wedding Card',
    year: [2016],
    status: ['shipped', 'green'],
    tagline: 'A card for my brother and his now-wife. ',
    link: 'https://davvidbaker.github.io/wedding-card/index.html',
    linkToSource: 'https://github.com/davvidbaker/wedding-card',
    keywords: ['Phaser']
  }, {
    name: 'This Land is Your Land',
    year: [2016],
    tagline: 'VR Music Video',
    status: ['shipped', 'green'],
    description: 'In 1987, Bernie Sanders released a folk music album on which he covered the classic "This Land is Your Land". For fun, I decided to create an immersive music video for this track that features Bernie singing and dancing\u2014it\'s not exactly a video, as you control certain aspects of your environment, but you get the idea. I contacted the studio that owns the rights to the song to see if I could get permission to publish this on the Oculus Store (for the Oculus Rift) and the Google Play Store (for Google Cardboard), but they haven\'t yet gotten back to me. Since I\'m not trying to steal anyone\'s work or infringe on copyrights, for the time being if you want to see this you can send me an email at davvidbaker@gmail.com and I can get you a copy. \n\nAll characters, animations, scripting, and assets designed by me.',
    keywords: ['Unity', 'Blender', 'Adobe Fuse'],
    images: ['/static/bernieSnap1.JPG', '/static/bernieSnap4.JPG']
  }, {
    name: 'Ragdoll Golf',
    year: [2015],
    tagline: 'You are Will Smith. All you want is to get to the hole. But the hole is just a big orange cylinder. And you are just a ragdoll.',
    status: ['shipped', 'green'],
    description: 'Inspired by [Cat with Bow Golf](http://www.addictinggames.com/sports-games/catwithbowgolf.jsp), this is a mini-game demo I created with Unity for Google Cardboard.',
    images: ['/static/ragdollGolf.PNG'],
    keywords: ['Unity', 'VR', 'Fuse', 'Will Smith'],
    callToAction: 'Get it while its hot!',
    link: 'https://play.google.com/store/apps/details?id=com.BrainsAndSpace.ragdollGolf&hl=en'
  }, {
    name: 'ForceField',
    year: [2015],
    status: ['complete', 'green'],
    tagline: 'A cable-driven force feedback computer mouse for use in haptic/tactile virtual reality, fine motor skill rehabilitation, and 3d computer aided design.',
    description: "ForceField is a cable-driven force feedback computer mouse for use in haptic/tactile virtual reality, fine motor skill rehabilitation, and 3d computer aided design. ForceField allows you to create and simulate virtual objects, textures, and forces in your desktop environment.\n\nWe created this for Penn's senior design competition and won the Frederick Ketterer Memorial Award for outstanding creativity in Engineering Design as well as 4th place overall in the school of engineering. Tyler and Preston did the majority of the mechanical engineering, Colin did the computer-side software, and I took lead on the electrical engineering aspects as well as the microcontroller-side software.\n\nFor more information or access to any of the design files, shoot me an email at davvidbaker@gmail.com, and I'd be happy to share.",
    keywords: ['Embedded Systems', 'Hardware', 'VR'],
    teammates: [{ name: 'Colin Feo', link: 'https://www.linkedin.com/in/colinfeo/' }, {
      name: 'Preston Morris',
      link: 'https://www.linkedin.com/in/prestonjmorris/'
    }, {
      name: 'Tyler Caron',
      link: 'https://www.linkedin.com/in/tyler-caron-a54bb852/'
    }],
    images: ['/static/forcefield.JPG'],
    link: 'https://www.youtube.com/watch?v=5L02NgFlN2I&feature=youtu.be',
    callToAction: 'Watch presentation'
  }, {
    name: 'Udder Space',
    year: [2015, 2016],
    status: ['pilot', 'teal'],
    tagline: 'In a futuristic world where super intelligent cows are now the dominant species, a giant asteroid threatens the destruction of Earth.',
    description: "In a futuristic world where super intelligent cows are now the dominant species, a giant asteroid threatens the destruction of Earth. To save their species, a group of brave bovine astronauts must travel through outer space to find a new planet to call home. The four of us created this animated children's show pilot and pitched to DreamWorksTV. Joe and Pat were the head writers, while I did all of the artwork and animation.",
    keywords: ['Animated Cartoon', 'After Effects', 'Character Animator', 'Photoshop', 'Illustrator'],
    images: ['/static/udder-space.png'],
    callToAction: 'Watch pilot',
    link: 'https://www.youtube.com/watch?v=usUPKPuEd1Q&feature=youtu.be',
    teammates: [{
      name: 'Joe Miciak',
      link: 'https://www.linkedin.com/in/joseph-miciak-603b7188/'
    }, { name: 'Pat Romano', link: '#' }, { name: 'Zach Fox', link: 'https://twitter.com/zacharydafox?lang=en' }]
  }, {
    name: 'sound360',
    year: [2015],
    status: ['unknown', 'black'],
    tagline: 'A surround sound system that uses a single centrally placed speaker.',
    description: "sound360 is a surround sound system that only uses a single centrally placed speaker. Ultrasonic transducers—with the help of some fancy signal modulation and a nonlinearity in the air—create narrow beams of sound which are then bounced off reflectors to arrive at a listener positioned centrally on the couch. For more details you can check out the [project's final report here](/static/sound360_finalReport.pdf).\n\nMarcus and I created this project for an **embedded systems class in college**, and I continued to develop it for Penn's xLAB over the summer of 2015. *I'm not sure if anyone there has continued working on the project*. We created everything—circuitry, design, code, etc.",
    keywords: ['Embedded Systems', 'Hardware', 'Audio', 'Signal Processing'],
    images: ['/static/sound360.png'],
    link: '/static/sound360_finalReport.pdf',
    teammates: [{
      name: 'Marcus Pan',
      link: 'https://www.linkedin.com/in/marcus-pan-358947a3/'
    }],
    callToAction: 'Read report'
  }, {
    name: 'Musical Scales',
    year: [2016],
    status: ['shipped', 'green'],
    tagline: 'A friend of mine was looking for a chart showing a bunch of the different scales on the banjo fretboard, so I made him this and added a few other instruments.',
    link: 'https://s.codepen.io/davvidbaker/debug/yeWMPg'
  }, {
    name: 'Jesus Golf',
    year: [2015],
    status: ['shipped', 'goldenrod'],
    tagline: 'This is a little web game I made for an Adobe Generation Professional course.',
    linkToSource: 'https://github.com/davvidbaker/jesus-golf',
    link: 'https://davvidbaker.github.io/jesus-golf/index.html'
  }]
};

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



module.exports = __webpack_require__(418);


/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(420);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(419);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';


CSSTransitionGroup.propTypes =  false ? propTypes : {};
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _addClass = __webpack_require__(321);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(323);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(325);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(324);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(167);

var _PropTypes = __webpack_require__(172);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';


CSSTransitionGroupChild.propTypes =  false ? propTypes : {};

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _chainFunction = __webpack_require__(268);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(3);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(438);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(421);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key, component));
      } else {
        _this._handleDoneAppearing(key, component);
      }
    };

    _this._handleDoneAppearing = function (key, component) {
      if (component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performEnter = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key, component));
      } else {
        _this._handleDoneEntering(key, component);
      }
    };

    _this._handleDoneEntering = function (key, component) {
      if (component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key, component);
      }
    };

    _this.performLeave = function (key, component) {
      _this.currentlyTransitioningKeys[key] = true;

      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key, component));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key, component);
      }
    };

    _this._handleDoneLeaving = function (key, component) {
      if (component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.keysToEnter.push(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key, this.childRefs[key]);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(function (key) {
      return _this2.performEnter(key, _this2.childRefs[key]);
    });

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(function (key) {
      return _this2.performLeave(key, _this2.childRefs[key]);
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _this3 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this3.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this3.props.childFactory(child);
        var ref = function ref(r) {
          _this3.childRefs[key] = r;
        };

         false ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';


TransitionGroup.propTypes =  false ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ 441:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);


/***/ })

},[441]);
            return { page: comp.default }
          })
        