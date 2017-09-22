
          window.__NEXT_REGISTER_PAGE('/blog', function() {
            var comp = module.exports =
webpackJsonp([31],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SameLoopPromise = undefined;

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = dynamicComponent;
exports.flushChunks = flushChunks;

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var currentChunks = [];

function dynamicComponent(promise) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  return function (_React$Component) {
    (0, _inherits3.default)(DynamicComponent, _React$Component);

    function DynamicComponent() {
      var _ref;

      (0, _classCallCheck3.default)(this, DynamicComponent);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = DynamicComponent.__proto__ || (0, _getPrototypeOf2.default)(DynamicComponent)).call.apply(_ref, [this].concat(args)));

      _this.LoadingComponent = options.loading ? options.loading : function () {
        return _react2.default.createElement(
          'p',
          null,
          'loading...'
        );
      };
      _this.ssr = options.ssr === false ? options.ssr : true;

      _this.state = { AsyncComponent: null };
      _this.isServer = typeof window === 'undefined';

      if (_this.ssr) {
        _this.loadComponent();
      }
      return _this;
    }

    (0, _createClass3.default)(DynamicComponent, [{
      key: 'loadComponent',
      value: function loadComponent() {
        var _this2 = this;

        promise.then(function (AsyncComponent) {
          // Set a readable displayName for the wrapper component
          var asyncCompName = AsyncComponent.displayName || AsyncComponent.name;
          if (asyncCompName) {
            DynamicComponent.displayName = 'DynamicComponent for ' + asyncCompName;
          }

          if (_this2.mounted) {
            _this2.setState({ AsyncComponent: AsyncComponent });
          } else {
            if (_this2.isServer) {
              currentChunks.push(AsyncComponent.__webpackChunkName);
            }
            _this2.state.AsyncComponent = AsyncComponent;
          }
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.mounted = true;
        if (!this.ssr) {
          this.loadComponent();
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var AsyncComponent = this.state.AsyncComponent;
        var LoadingComponent = this.LoadingComponent;

        if (!AsyncComponent) return _react2.default.createElement(LoadingComponent, this.props);

        return _react2.default.createElement(AsyncComponent, this.props);
      }
    }]);
    return DynamicComponent;
  }(_react2.default.Component);
}

function flushChunks() {
  var chunks = currentChunks;
  currentChunks = [];
  return chunks;
}

var SameLoopPromise = exports.SameLoopPromise = function () {
  function SameLoopPromise(cb) {
    (0, _classCallCheck3.default)(this, SameLoopPromise);

    this.onResultCallbacks = [];
    this.onErrorCallbacks = [];
    this.cb = cb;
  }

  (0, _createClass3.default)(SameLoopPromise, [{
    key: 'setResult',
    value: function setResult(result) {
      this.gotResult = true;
      this.result = result;
      this.onResultCallbacks.forEach(function (cb) {
        return cb(result);
      });
      this.onResultCallbacks = [];
    }
  }, {
    key: 'setError',
    value: function setError(error) {
      this.gotError = true;
      this.error = error;
      this.onErrorCallbacks.forEach(function (cb) {
        return cb(error);
      });
      this.onErrorCallbacks = [];
    }
  }, {
    key: 'then',
    value: function then(onResult, onError) {
      var _this3 = this;

      this.runIfNeeded();
      var promise = new SameLoopPromise();

      var handleError = function handleError() {
        if (onError) {
          promise.setResult(onError(_this3.error));
        } else {
          promise.setError(_this3.error);
        }
      };

      var handleResult = function handleResult() {
        promise.setResult(onResult(_this3.result));
      };

      if (this.gotResult) {
        handleResult();
        return promise;
      }

      if (this.gotError) {
        handleError();
        return promise;
      }

      this.onResultCallbacks.push(handleResult);
      this.onErrorCallbacks.push(handleError);

      return promise;
    }
  }, {
    key: 'catch',
    value: function _catch(onError) {
      var _this4 = this;

      this.runIfNeeded();
      var promise = new SameLoopPromise();

      var handleError = function handleError() {
        promise.setResult(onError(_this4.error));
      };

      var handleResult = function handleResult() {
        promise.setResult(_this4.result);
      };

      if (this.gotResult) {
        handleResult();
        return promise;
      }

      if (this.gotError) {
        handleError();
        return promise;
      }

      this.onErrorCallbacks.push(handleError);
      this.onResultCallbacks.push(handleResult);

      return promise;
    }
  }, {
    key: 'runIfNeeded',
    value: function runIfNeeded() {
      var _this5 = this;

      if (!this.cb) return;
      if (this.ran) return;

      this.ran = true;
      this.cb(function (result) {
        return _this5.setResult(result);
      }, function (error) {
        return _this5.setError(error);
      });
    }
  }]);
  return SameLoopPromise;
}();

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(20);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(19);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(30);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _dynamic = __webpack_require__(0);

var _dynamic2 = _interopRequireDefault(_dynamic);

var _thingsAreLookinUp = __webpack_require__(60);

var _thingsAreLookinUp2 = _interopRequireDefault(_thingsAreLookinUp);

var _PageWrapper = __webpack_require__(44);

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _lookupTable = __webpack_require__(377);

var _lookupTable2 = _interopRequireDefault(_lookupTable);

var _PostList = __webpack_require__(367);

var _PostList2 = _interopRequireDefault(_PostList);

var _styles = __webpack_require__(370);

var _styles2 = _interopRequireDefault(_styles);

var _store = __webpack_require__(45);

var _Nav = __webpack_require__(43);

var _Nav2 = _interopRequireDefault(_Nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;
// import { posts } from '../internals/out_blog/output_blog_posts.js';

// import BlogPost from '../components/Blog/Post';


var str = 'components/Phone';
console.log('posts', _lookupTable2.default);
// const DynamicBlogPost = (filename) => {
//   const { attributes, content } = test; // dynamic(import(`../out_blog/posts/${filename}`));

//   debugger;
//   return <BlogPost attributes={attributes} content={content} />;
// };

var BlogPage = function BlogPage(_ref) {
  var url = _ref.url;

  var post = url.query.slug && _lookupTable2.default.find(function (post) {
    return url.query.slug === post.slug;
  });
  var Component = void 0;
  if (post) {
    Component = post.component;
  }
  return post ? _react2.default.createElement(_PageWrapper2.default, { title: post.title }, _react2.default.createElement(Component, null), _react2.default.createElement(_styles2.default, null)) : _react2.default.createElement(_PageWrapper2.default, { title: '\uD83D\uDE43\uD83D\uDC22 Blog' }, _react2.default.createElement(_Nav2.default, { url: url }), _react2.default.createElement('main', { style: { marginLeft: '10px' } }, _react2.default.createElement('div', { className: 'left-container', style: { maxWidth: '50rem', margin: '0 auto' } }, _react2.default.createElement('p', { style: { textAlign: 'right' } }, 'This mostly contains unedited stream-of-consciousness writing.'), _react2.default.createElement('p', { style: { textAlign: 'right' } }, _react2.default.createElement('em', null, ' ', 'The more interesting project is the paratext of the blog itself.')), _react2.default.createElement(_PostList2.default, { posts: _lookupTable2.default }))), _react2.default.createElement('img', {
    className: 'marginal marginal-right',
    src: '/static/astronaut-pushing.svg',
    alt: 'Astronaut',
    style: {
      position: 'fixed',
      transform: 'scalex(-1)',
      bottom: 0,
      right: 0
    }
  }), _react2.default.createElement(_styles2.default, null));
};

BlogPage.getInitialProps = function () {
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
}, mapDispatchToProps)(BlogPage);

/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(6);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(8);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(7);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(30);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _link = __webpack_require__(31);

var _link2 = _interopRequireDefault(_link);

var _reactRedux = __webpack_require__(33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostList = function (_Component) {
  (0, _inherits3.default)(PostList, _Component);

  function PostList() {
    (0, _classCallCheck3.default)(this, PostList);

    return (0, _possibleConstructorReturn3.default)(this, (PostList.__proto__ || (0, _getPrototypeOf2.default)(PostList)).apply(this, arguments));
  }

  (0, _createClass3.default)(PostList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.clear();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('ul', {
        'data-jsx': 1551624992
      }, this.props.posts.sort(function (a, b) {
        return new Date(b.date).valueOf() - new Date(a.date).valueOf();
      }).map(function (post) {
        return _react2.default.createElement('li', { key: 'link-' + post.slug, 'data-jsx': 1551624992
        }, _react2.default.createElement(_link2.default, {
          href: {
            pathname: '/blog',
            query: { slug: post.slug }
          },
          as: '/blog/' + post.slug
        }, _react2.default.createElement('a', {
          'data-jsx': 1551624992
        }, _react2.default.createElement('h1', { style: { opacity: '' + (post.readTime / 10 + 0.5), fontSize: post.readTime / 2 + 0.5 + 'rem' }, 'data-jsx': 1551624992
        }, post.title))), ' ', _react2.default.createElement('p', {
          'data-jsx': 1551624992
        }, post.date));
      }), _react2.default.createElement(_style2.default, {
        styleId: 1551624992,
        css: 'ul[data-jsx="1551624992"] {list-style: none;padding: 10px;}li[data-jsx="1551624992"] {margin-bottom: 10px;}a[data-jsx="1551624992"] {text-decoration: none;}a[data-jsx="1551624992"]:hover {text-decoration: underline;}a[data-jsx="1551624992"]:visited {color: rebeccapurple;}h1[data-jsx="1551624992"] {display: inline;color: var(--color-main);font-size: 1rem;}p[data-jsx="1551624992"] {display: inline;color: #888;font-family: var(--font-monospace);font-size: 1rem;}'
      }));
    }
  }]);

  return PostList;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, function (dispatch) {
  return {
    clear: function clear() {
      dispatch({ type: 'CLEAR' });
    }
  };
})(PostList);

/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlogGlobalStyles = function BlogGlobalStyles() {
  return _react2.default.createElement(_style2.default, {
    styleId: 2767782391,
    css: '\n    * {\n      font-family: sans-serif;\n    }\n    blockquote {\n      border-left: 5px solid var(--color-main);\n      padding: 0.5rem;\n      padding-left: 1.5rem;\n      margin: 0 1rem;\n    }\n    blockquote p {\n      margin: 0;\n      margin-top: 0.5rem;\n    }\n    blockquote p::before {\n      content: \'\';\n      width: 20px;\n      height: 5px;\n      background: var(--color-main);\n      position: absolute;\n      transform: translateX(-1.5rem) translateY(-1rem);\n    }\n    p {\n      line-height: 1.5;\n    }\n    span.redaction span::selection {\n      background: black;\n    }\n    a {\n      color: #0066c0;\n      text-decoration: none;\n    }\n    a:visited {\n      color: rebeccapurple;\n    }\n\n    h1 {\n      font-size: 2rem;\n    }\n\n    article ul {\n      list-style: disc;\n      padding-left: 2rem;\n    }\n\n\n  '
  });
};

exports.default = BlogGlobalStyles;

/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dynamic = __webpack_require__(0);

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  filename: '2017-03-04_figuring-out-posts.js',
  title: 'Figuring Out Posts',
  date: 'March 4, 2017',
  slug: 'figuring-out-posts',
  readTime: '0.5927272727272728',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(26).then((function (require) {
      var m = __webpack_require__(112);

      m = m.default || m;
      m.__webpackChunkName = 'f2b032ef-017a-44e2-8170-9f18eb851572.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(112);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(26).then((function (require) {
      try {
        var m = __webpack_require__(112);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-05_title-goes-here.js',
  title: 'The Post Title Goes Here',
  date: 'March 12, 2017',
  slug: 'title-goes-here',
  readTime: '0.8545454545454545',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(25).then((function (require) {
      var m = __webpack_require__(113);

      m = m.default || m;
      m.__webpackChunkName = 'f09cab34-d6ad-4513-a926-4b95c1e26d2c.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(113);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(25).then((function (require) {
      try {
        var m = __webpack_require__(113);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-06_random-thoughts.js',
  title: 'Random Thoughts',
  date: 'March 12, 2017',
  slug: 'random-thoughts',
  readTime: '0.13090909090909092',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(24).then((function (require) {
      var m = __webpack_require__(114);

      m = m.default || m;
      m.__webpackChunkName = '865459ba-5b14-42d7-b567-f13ae170bbaf.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(114);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(24).then((function (require) {
      try {
        var m = __webpack_require__(114);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-12_excited-for-the-future.js',
  title: 'Blogging CLI Tool?',
  date: 'March 12, 2017',
  slug: 'excited-for-the-future',
  readTime: '0.13454545454545455',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(23).then((function (require) {
      var m = __webpack_require__(115);

      m = m.default || m;
      m.__webpackChunkName = '48198fd7-5f80-4314-8757-cc70afab90d1.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(115);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(23).then((function (require) {
      try {
        var m = __webpack_require__(115);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-20_another-week-down-the-drain.js',
  title: 'Hrmph',
  date: 'March 20, 2017',
  slug: 'another-week-down-the-drain',
  readTime: '2.0436363636363635',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(22).then((function (require) {
      var m = __webpack_require__(116);

      m = m.default || m;
      m.__webpackChunkName = '7a2bb5a6-eeed-43fc-afc8-f5891800b8c1.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(116);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(22).then((function (require) {
      try {
        var m = __webpack_require__(116);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-23_things-are-lookin-up.js',
  title: 'Woop Woop',
  date: 'March 23, 2017',
  slug: 'things-are-lookin-up',
  readTime: '0.13090909090909092',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    new Promise(function(resolve) { resolve(); }).then((function (require) {
      var m = __webpack_require__(60);

      m = m.default || m;
      m.__webpackChunkName = '6e670088-2d05-46cc-938f-f15c99bcdf47.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(60);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    new Promise(function(resolve) { resolve(); }).then((function (require) {
      try {
        var m = __webpack_require__(60);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-27_itsa-mea-mario.js',
  title: 'Broken Pipes',
  date: 'March 27, 2017',
  slug: 'itsa-mea-mario',
  readTime: '1.010909090909091',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(21).then((function (require) {
      var m = __webpack_require__(117);

      m = m.default || m;
      m.__webpackChunkName = 'cafea622-1ad1-4d2e-a47d-e5e1ec74a28c.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(117);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(21).then((function (require) {
      try {
        var m = __webpack_require__(117);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-31_i-feel-a-blog-post-coming-on.js',
  title: 'Now',
  date: 'March 31, 2017',
  slug: 'i-feel-a-blog-post-coming-on',
  readTime: '0.9963636363636363',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(20).then((function (require) {
      var m = __webpack_require__(118);

      m = m.default || m;
      m.__webpackChunkName = '680dd46f-5333-4477-a0b2-9ba830a189e6.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(118);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(20).then((function (require) {
      try {
        var m = __webpack_require__(118);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-03-31_production-error-tracking.js',
  title: 'A Better Night\'s Sleep',
  date: 'March 31, 2017',
  slug: 'production-error-tracking',
  readTime: '0.13818181818181818',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(19).then((function (require) {
      var m = __webpack_require__(119);

      m = m.default || m;
      m.__webpackChunkName = '1c11932b-89d2-480e-8804-47eb972e8d7b.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(119);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(19).then((function (require) {
      try {
        var m = __webpack_require__(119);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-04-03_whoa.js',
  title: 'Whoa',
  date: 'April 3, 2017',
  slug: 'whoa',
  readTime: '0.6218181818181818',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(18).then((function (require) {
      var m = __webpack_require__(120);

      m = m.default || m;
      m.__webpackChunkName = '28a48998-87d5-41c1-924f-24610744ef6b.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(120);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(18).then((function (require) {
      try {
        var m = __webpack_require__(120);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-04-26_another-test.js',
  title: 'Yet Another Test',
  date: 'April 26, 2017',
  slug: 'another-test',
  readTime: '1.56',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(17).then((function (require) {
      var m = __webpack_require__(121);

      m = m.default || m;
      m.__webpackChunkName = '97723052-461d-4a4f-a23c-2b34822dbc2b.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(121);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(17).then((function (require) {
      try {
        var m = __webpack_require__(121);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-04-30_bumblin.js',
  title: 'And Mumblin',
  date: 'April 30, 2017',
  slug: 'bumblin',
  readTime: '0.9381818181818182',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(16).then((function (require) {
      var m = __webpack_require__(122);

      m = m.default || m;
      m.__webpackChunkName = '8b001f1b-dbe7-46e9-9ecb-bf95e68f38fe.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(122);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(16).then((function (require) {
      try {
        var m = __webpack_require__(122);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-05-04_can-i-use-css-grid-on-android.js',
  title: 'Not Yet',
  date: 'May 4, 2017',
  slug: 'can-i-use-css-grid-on-android',
  readTime: '2.1054545454545455',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(15).then((function (require) {
      var m = __webpack_require__(123);

      m = m.default || m;
      m.__webpackChunkName = '6fbe97c2-5de9-41ea-89e5-d4369a24fcdc.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(123);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(15).then((function (require) {
      try {
        var m = __webpack_require__(123);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-05-06_i-am-too-drunk-to-be-trying-to-work.js',
  title: 'See Slug Slow',
  date: 'May 6, 2017',
  slug: 'i-am-too-drunk-to-be-trying-to-work',
  readTime: '0.64',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(14).then((function (require) {
      var m = __webpack_require__(124);

      m = m.default || m;
      m.__webpackChunkName = '0934da3d-86e6-42a6-89b3-733e3febf2a1.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(124);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(14).then((function (require) {
      try {
        var m = __webpack_require__(124);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-05-08_small-steps.js',
  title: 'Incremental Progress',
  date: 'May 8, 2017',
  slug: 'small-steps',
  readTime: '2.8545454545454545',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(13).then((function (require) {
      var m = __webpack_require__(125);

      m = m.default || m;
      m.__webpackChunkName = '4e66018c-9045-4a5b-bdc1-f814653827a1.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(125);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(13).then((function (require) {
      try {
        var m = __webpack_require__(125);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-05-17_up-all-night-to-this-song.js',
  title: 'We\'re Up All Night To Get Lucky',
  date: 'May 17, 2017',
  slug: 'up-all-night-to-this-song',
  readTime: '1.6109090909090908',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(12).then((function (require) {
      var m = __webpack_require__(126);

      m = m.default || m;
      m.__webpackChunkName = 'a8400ea1-8767-474d-b66a-f483101abfca.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(126);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(12).then((function (require) {
      try {
        var m = __webpack_require__(126);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-05-31_o-is-me.js',
  title: 'You probably should not bother reading this',
  date: 'May 31, 2017',
  slug: 'o-is-me',
  readTime: '0.84',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(11).then((function (require) {
      var m = __webpack_require__(127);

      m = m.default || m;
      m.__webpackChunkName = '072b1d21-d044-44f7-b63c-0f5c9b48d3a6.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(127);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(11).then((function (require) {
      try {
        var m = __webpack_require__(127);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-06-01_different-voice.js',
  title: 'Trying Something Out',
  date: 'June 1, 2017',
  slug: 'different-voice',
  readTime: '0.7745454545454545',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(10).then((function (require) {
      var m = __webpack_require__(128);

      m = m.default || m;
      m.__webpackChunkName = '24bfb94d-357d-4c7e-90a1-4950c45df182.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(128);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(10).then((function (require) {
      try {
        var m = __webpack_require__(128);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-06-21_been-up-to-a-lot.js',
  title: 'Lately',
  date: 'June 21, 2017',
  slug: 'been-up-to-a-lot',
  readTime: '2.0436363636363635',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(9).then((function (require) {
      var m = __webpack_require__(129);

      m = m.default || m;
      m.__webpackChunkName = '341b4a83-69b1-474f-8db0-9e07469a0d40.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(129);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(9).then((function (require) {
      try {
        var m = __webpack_require__(129);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-06-24_whoa-and-blog-state.js',
  title: 'The Current State of Whoa (and this blog)',
  date: 'June 23, 2017',
  slug: 'whoa-and-blog-state',
  readTime: '1.9563636363636363',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(8).then((function (require) {
      var m = __webpack_require__(130);

      m = m.default || m;
      m.__webpackChunkName = '34da5acc-9580-4bcd-b968-d83fa170000e.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(130);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(8).then((function (require) {
      try {
        var m = __webpack_require__(130);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-06-30_phone-messenger-component.js',
  title: 'Quick',
  date: 'June 30, 2017',
  slug: 'phone-messenger-component',
  readTime: '0.6363636363636364',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(7).then((function (require) {
      var m = __webpack_require__(131);

      m = m.default || m;
      m.__webpackChunkName = 'b4b0381d-f9b0-40d5-86d1-6a85b41aa1b6.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(131);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(7).then((function (require) {
      try {
        var m = __webpack_require__(131);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-07-03_every-day-im-shuffling.js',
  title: 'Settling on Designs',
  date: 'July 3, 2017',
  slug: 'every-day-im-shuffling',
  readTime: '0.21454545454545454',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(6).then((function (require) {
      var m = __webpack_require__(132);

      m = m.default || m;
      m.__webpackChunkName = '9600c544-5e3d-4a44-93ed-89debd8fc85e.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(132);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(6).then((function (require) {
      try {
        var m = __webpack_require__(132);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-07-18_get-swifty.js',
  title: 'Get Swifty',
  date: 'July 18, 2017',
  slug: 'get-swifty',
  readTime: '0.9454545454545454',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(5).then((function (require) {
      var m = __webpack_require__(133);

      m = m.default || m;
      m.__webpackChunkName = '5e070810-beac-40d9-a488-be6b7bf9cac5.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(133);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(5).then((function (require) {
      try {
        var m = __webpack_require__(133);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  filename: '2017-07-28_empty-space.js',
  title: 'Empty Document Memory',
  date: 'July 27, 2017',
  slug: 'empty-space',
  readTime: '1.3418181818181818',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(4).then((function (require) {
      var m = __webpack_require__(134);

      m = m.default || m;
      m.__webpackChunkName = 'ec2ea28b-ff6e-46ee-9ab6-131bceeb4080.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(134);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(4).then((function (require) {
      try {
        var m = __webpack_require__(134);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }))
}, {
  title: 'Coffee',
  slug: 'coffee-makes-my-thoughts-loud',
  date: 'July 6, 2017',
  js: true,

  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(3).then((function (require) {
      var m = __webpack_require__(108);

      m = m.default || m;
      m.__webpackChunkName = '402b2c57-5320-48ee-a62f-c5bbc892d8e2.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(108);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(3).then((function (require) {
      try {
        var m = __webpack_require__(108);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  })) }, {
  title: 'What am I trying to do here?',
  slug: 'that-was-bad',
  date: 'July 7, 2017',
  js: true,

  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(0).then((function (require) {
      var m = __webpack_require__(109);

      m = m.default || m;
      m.__webpackChunkName = '33435a95-caf2-4e07-b894-2962b3544426.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(109);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(0).then((function (require) {
      try {
        var m = __webpack_require__(109);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  })) }, {
  title: 'I want...',
  slug: 'me-list-needs-a-better-name',
  date: 'August 1, 2017',
  js: true,

  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(2).then((function (require) {
      var m = __webpack_require__(110);

      m = m.default || m;
      m.__webpackChunkName = 'c4839e62-c816-427b-af09-393057142960.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(110);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(2).then((function (require) {
      try {
        var m = __webpack_require__(110);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  })) }, {
  title: 'Great Slug',
  slug: 'you-me-and-mqtt',
  date: 'August 9, 2017',
  published: 'false',
  js: true,

  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(1).then((function (require) {
      var m = __webpack_require__(111);

      m = m.default || m;
      m.__webpackChunkName = '4e7c87b6-5269-4b24-addf-2271839945a6.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(0).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(111);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(1).then((function (require) {
      try {
        var m = __webpack_require__(111);

        m = m.default || m;
        resolve(m);
      } catch (error) {
        reject(error);
      }
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  })) }];
/**
 * This file was automatically created Fri Sep 22 2017 00:43:47 GMT-0400 (EDT)
 */

/***/ }),

/***/ 436:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(184);


/***/ }),

/***/ 60:
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
  return _react2.default.createElement(_Post2.default, { attributes: { "readTime": 0.13090909090909092, "title": "Woop Woop", "slug": "things-are-lookin-up", "date": "March 23, 2017" }, content: { "type": "root", "children": [{ "type": "paragraph", "children": [{ "type": "emphasis", "children": [{ "type": "text", "value": "For some old posts that were very haphazard and didn't yet abide by any rules, I am just taking a screenshot and placing that here, instead of totally remaking them.", "position": { "start": { "line": 2, "column": 2, "offset": 2 }, "end": { "line": 2, "column": 167, "offset": 167 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 1, "offset": 1 }, "end": { "line": 2, "column": 168, "offset": 168 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 1, "offset": 1 }, "end": { "line": 2, "column": 168, "offset": 168 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "image", "title": null, "url": "/static/blog/port/woop-woop.PNG", "alt": "woop-woop.PNG", "position": { "start": { "line": 4, "column": 1, "offset": 170 }, "end": { "line": 4, "column": 50, "offset": 219 }, "indent": [] } }], "position": { "start": { "line": 4, "column": 1, "offset": 170 }, "end": { "line": 4, "column": 50, "offset": 219 }, "indent": [] } }], "position": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 4, "column": 50, "offset": 219 } } } });
};

/**
 * This file was automatically created Fri Sep 22 2017 00:43:47 GMT-0400 (EDT)
 */

/***/ })

},[436]);
            return { page: comp.default }
          })
        