
          window.__NEXT_REGISTER_PAGE('/blog', function() {
            var comp = module.exports =
webpackJsonp([28],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SameLoopPromise = undefined;

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = dynamicComponent;
exports.flushChunks = flushChunks;

var _react = __webpack_require__(0);

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

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = __webpack_require__(11);

var _extends3 = _interopRequireDefault(_extends2);

var _regenerator = __webpack_require__(23);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(22);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(41);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _dynamic = __webpack_require__(1);

var _dynamic2 = _interopRequireDefault(_dynamic);

var _thingsAreLookinUp = __webpack_require__(59);

var _thingsAreLookinUp2 = _interopRequireDefault(_thingsAreLookinUp);

var _PageWrapper = __webpack_require__(57);

var _PageWrapper2 = _interopRequireDefault(_PageWrapper);

var _lookupTable = __webpack_require__(371);

var _lookupTable2 = _interopRequireDefault(_lookupTable);

var _PostList = __webpack_require__(363);

var _PostList2 = _interopRequireDefault(_PostList);

var _styles = __webpack_require__(366);

var _styles2 = _interopRequireDefault(_styles);

var _store = __webpack_require__(60);

var _Nav = __webpack_require__(56);

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

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(7);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(9);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(8);

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(41);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _link = __webpack_require__(43);

var _link2 = _interopRequireDefault(_link);

var _reactRedux = __webpack_require__(31);

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
        }, _react2.default.createElement('h1', {
          'data-jsx': 1551624992
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

/***/ 366:
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

var BlogGlobalStyles = function BlogGlobalStyles() {
  return _react2.default.createElement(_style2.default, {
    styleId: 453764588,
    css: '\n    * {\n      font-family: sans-serif;\n    }\n    blockquote {\n      border-left: 5px solid var(--color-main);\n      padding: 0.5rem;\n      padding-left: 1.5rem;\n      margin: 0 1rem;\n    }\n    blockquote p {\n      margin: 0;\n      margin-top: 0.5rem;\n    }\n    blockquote p::before {\n      content: \'\';\n      width: 20px;\n      height: 5px;\n      background: var(--color-main);\n      position: absolute;\n      transform: translateX(-1.5rem) translateY(-1rem);\n    }\n    p {\n      line-height: 1.5;\n    }\n    span.redaction span::selection {\n      background: black;\n    }\n    a {\n      color: #0066c0;\n      text-decoration: none;\n    }\n    a:visited {\n      color: rebeccapurple;\n    }\n\n    h1 {\n      font-size: 2rem;\n    }\n\n\n  '
  });
};

exports.default = BlogGlobalStyles;

/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dynamic = __webpack_require__(1);

var _dynamic2 = _interopRequireDefault(_dynamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [{
  filename: '2017-03-04_figuring-out-posts.js',
  title: 'Figuring Out Posts',
  date: 'March 4, 2017',
  slug: 'figuring-out-posts',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(23).then((function (require) {
      var m = __webpack_require__(111);

      m = m.default || m;
      m.__webpackChunkName = 'af0df00d-a8c9-476e-bb01-39e295f339e8.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(111);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(23).then((function (require) {
      try {
        var m = __webpack_require__(111);

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
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(22).then((function (require) {
      var m = __webpack_require__(112);

      m = m.default || m;
      m.__webpackChunkName = '5ba9dd17-c6ad-4601-96c7-c9e08dfca719.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(112);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(22).then((function (require) {
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
  filename: '2017-03-06_random-thoughts.js',
  title: 'Random Thoughts',
  date: 'March 12, 2017',
  slug: 'random-thoughts',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(21).then((function (require) {
      var m = __webpack_require__(113);

      m = m.default || m;
      m.__webpackChunkName = 'a7f5c4e4-c86d-4ecd-916b-5f3e6a5e5370.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(113);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(21).then((function (require) {
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
  filename: '2017-03-12_excited-for-the-future.js',
  title: 'Blogging CLI Tool?',
  date: 'March 12, 2017',
  slug: 'excited-for-the-future',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(20).then((function (require) {
      var m = __webpack_require__(114);

      m = m.default || m;
      m.__webpackChunkName = 'e0b581e5-eb0c-429e-a95f-7e6e42a68aad.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(114);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(20).then((function (require) {
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
  filename: '2017-03-20_another-week-down-the-drain.js',
  title: 'Hrmph',
  date: 'March 20, 2017',
  slug: 'another-week-down-the-drain',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(19).then((function (require) {
      var m = __webpack_require__(115);

      m = m.default || m;
      m.__webpackChunkName = '7d955829-fc47-4b23-84e4-bf0a40d8c664.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(115);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(19).then((function (require) {
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
  filename: '2017-03-23_things-are-lookin-up.js',
  title: 'Woop Woop',
  date: 'March 23, 2017',
  slug: 'things-are-lookin-up',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    new Promise(function(resolve) { resolve(); }).then((function (require) {
      var m = __webpack_require__(59);

      m = m.default || m;
      m.__webpackChunkName = 'f495e124-f8ea-4a14-9a65-88a200c80e05.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(59);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    new Promise(function(resolve) { resolve(); }).then((function (require) {
      try {
        var m = __webpack_require__(59);

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
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(18).then((function (require) {
      var m = __webpack_require__(116);

      m = m.default || m;
      m.__webpackChunkName = 'eef49a3d-14e4-4a11-a74d-3a03b6a14179.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(116);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(18).then((function (require) {
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
  filename: '2017-03-31_i-feel-a-blog-post-coming-on.js',
  title: 'Now',
  date: 'March 31, 2017',
  slug: 'i-feel-a-blog-post-coming-on',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(17).then((function (require) {
      var m = __webpack_require__(117);

      m = m.default || m;
      m.__webpackChunkName = '0432f7fb-8e1e-4b41-b089-b195ba784f83.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(117);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(17).then((function (require) {
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
  filename: '2017-03-31_production-error-tracking.js',
  title: 'A Better Night\'s Sleep',
  date: 'March 31, 2017',
  slug: 'production-error-tracking',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(16).then((function (require) {
      var m = __webpack_require__(118);

      m = m.default || m;
      m.__webpackChunkName = '7c56c7d6-9e90-45b3-a1d4-8df3699eda21.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(118);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(16).then((function (require) {
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
  filename: '2017-04-03_whoa.js',
  title: 'Whoa',
  date: 'April 3, 2017',
  slug: 'whoa',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(15).then((function (require) {
      var m = __webpack_require__(119);

      m = m.default || m;
      m.__webpackChunkName = 'af36b90f-1872-43a7-b542-304dc4cf2851.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(119);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(15).then((function (require) {
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
  filename: '2017-04-26_another-test.js',
  title: 'Yet Another Test',
  date: 'April 26, 2017',
  slug: 'another-test',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(14).then((function (require) {
      var m = __webpack_require__(120);

      m = m.default || m;
      m.__webpackChunkName = '1f5e76c2-79d0-4470-bc90-5ea2f423778f.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(120);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(14).then((function (require) {
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
  filename: '2017-04-30_bumblin.js',
  title: 'And Mumblin',
  date: 'April 30, 2017',
  slug: 'bumblin',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(13).then((function (require) {
      var m = __webpack_require__(121);

      m = m.default || m;
      m.__webpackChunkName = 'd351cd5c-dfb0-4bc0-9f8b-5af3b3c1e9b1.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(121);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(13).then((function (require) {
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
  filename: '2017-05-04_can-i-use-css-grid-on-android.js',
  title: 'Not Yet',
  date: 'May 4, 2017',
  slug: 'can-i-use-css-grid-on-android',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(12).then((function (require) {
      var m = __webpack_require__(122);

      m = m.default || m;
      m.__webpackChunkName = '97579928-a323-43c9-b5a3-d0e3778b74db.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(122);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(12).then((function (require) {
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
  filename: '2017-05-06_i-am-too-drunk-to-be-trying-to-work.js',
  title: 'See Slug Slow',
  date: 'May 6, 2017',
  slug: 'i-am-too-drunk-to-be-trying-to-work',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(11).then((function (require) {
      var m = __webpack_require__(123);

      m = m.default || m;
      m.__webpackChunkName = 'ea82684a-07b5-4df7-b97a-6d8292b8ab8f.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(123);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(11).then((function (require) {
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
  filename: '2017-05-08_small-steps.js',
  title: 'Incremental Progress',
  date: 'May 8, 2017',
  slug: 'small-steps',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(10).then((function (require) {
      var m = __webpack_require__(124);

      m = m.default || m;
      m.__webpackChunkName = 'a2acb193-78e2-40ce-ba8c-5b77910223ab.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(124);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(10).then((function (require) {
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
  filename: '2017-05-17_up-all-night-to-this-song.js',
  title: 'We\'re Up All Night To Get Lucky',
  date: 'May 17, 2017',
  slug: 'up-all-night-to-this-song',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(9).then((function (require) {
      var m = __webpack_require__(125);

      m = m.default || m;
      m.__webpackChunkName = '1aeb1172-8b95-4add-90f0-74c7a89c1a09.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(125);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(9).then((function (require) {
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
  filename: '2017-05-31_o-is-me.js',
  title: 'You probably should not bother reading this',
  date: 'May 31, 2017',
  slug: 'o-is-me',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(8).then((function (require) {
      var m = __webpack_require__(126);

      m = m.default || m;
      m.__webpackChunkName = 'aa3f57d1-2127-4676-a002-7c017f92935e.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(126);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(8).then((function (require) {
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
  filename: '2017-06-01_different-voice.js',
  title: 'Trying Something Out',
  date: 'June 1, 2017',
  slug: 'different-voice',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(7).then((function (require) {
      var m = __webpack_require__(127);

      m = m.default || m;
      m.__webpackChunkName = '87fdbf54-0b17-4dfa-8a3e-8d3e01f4fa41.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(127);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(7).then((function (require) {
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
  filename: '2017-06-21_been-up-to-a-lot.js',
  title: 'Lately',
  date: 'June 21, 2017',
  slug: 'been-up-to-a-lot',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(6).then((function (require) {
      var m = __webpack_require__(128);

      m = m.default || m;
      m.__webpackChunkName = 'ecf2c8f5-09e8-4e18-a959-6a94b436069f.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(128);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(6).then((function (require) {
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
  filename: '2017-06-24_whoa-and-blog-state.js',
  title: 'The Current State of Whoa (and this blog)',
  date: 'June 23, 2017',
  slug: 'whoa-and-blog-state',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(5).then((function (require) {
      var m = __webpack_require__(129);

      m = m.default || m;
      m.__webpackChunkName = 'f3cc623a-8600-4501-95ab-24e82d57a7f2.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(129);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(5).then((function (require) {
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
  filename: '2017-06-30_phone-messenger-component.js',
  title: 'Quick',
  date: 'June 30, 2017',
  slug: 'phone-messenger-component',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(4).then((function (require) {
      var m = __webpack_require__(130);

      m = m.default || m;
      m.__webpackChunkName = '85efd927-2b58-41a7-9b33-95d353e045ef.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(130);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(4).then((function (require) {
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
  filename: '2017-07-03_every-day-im-shuffling.js',
  title: 'Settling on Designs',
  date: 'July 3, 2017',
  slug: 'every-day-im-shuffling',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(3).then((function (require) {
      var m = __webpack_require__(131);

      m = m.default || m;
      m.__webpackChunkName = '86eabe17-4d9d-46f4-8c1b-01ae38e39418.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(131);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(3).then((function (require) {
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
  filename: '2017-07-18_get-swifty.js',
  title: 'Get Swifty',
  date: 'July 18, 2017',
  slug: 'get-swifty',
  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(2).then((function (require) {
      var m = __webpack_require__(132);

      m = m.default || m;
      m.__webpackChunkName = '876d6a82-9a88-4ade-86a0-d727cb49de83.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(132);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(2).then((function (require) {
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
  title: 'Coffee',
  slug: 'coffee-makes-my-thoughts-loud',
  date: 'July 6, 2017',
  js: true,

  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(1).then((function (require) {
      var m = __webpack_require__(108);

      m = m.default || m;
      m.__webpackChunkName = '7ec1bcda-9a72-45ee-b01d-2232abc50038.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    var weakId = /*require.resolve*/(108);

    try {
      var weakModule = __webpack_require__(weakId);

      return resolve(weakModule.default || weakModule);
    } catch (err) {}

    __webpack_require__.e/* require.ensure */(1).then((function (require) {
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

  component: (0, _dynamic2.default)(typeof window === 'undefined' ? new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
    eval('require.ensure = function (deps, callback) { callback(require) }');

    __webpack_require__.e/* require.ensure */(0).then((function (require) {
      var m = __webpack_require__(109);

      m = m.default || m;
      m.__webpackChunkName = 'c0991eb1-fd94-411d-9306-0ce1cb4b0c80.js';
      resolve(m);
    }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
  }) : new (__webpack_require__(1).SameLoopPromise)(function (resolve, reject) {
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
  })) }];
/**
 * This file was automatically created Wed Jul 19 2017 02:09:48 GMT-0400 (EDT)
 */

/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);


/***/ }),

/***/ 59:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Post = __webpack_require__(100);

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(_Post2.default, { attributes: { "readTime": 0.13090909090909092, "title": "Woop Woop", "slug": "things-are-lookin-up", "date": "March 23, 2017" }, content: { "type": "root", "children": [{ "type": "paragraph", "children": [{ "type": "emphasis", "children": [{ "type": "text", "value": "For some old posts that were very haphazard and didn't yet abide by any rules, I am just taking a screenshot and placing that here, instead of totally remaking them.", "position": { "start": { "line": 2, "column": 2, "offset": 2 }, "end": { "line": 2, "column": 167, "offset": 167 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 1, "offset": 1 }, "end": { "line": 2, "column": 168, "offset": 168 }, "indent": [] } }], "position": { "start": { "line": 2, "column": 1, "offset": 1 }, "end": { "line": 2, "column": 168, "offset": 168 }, "indent": [] } }, { "type": "paragraph", "children": [{ "type": "image", "title": null, "url": "/static/blog/port/woop-woop.PNG", "alt": "woop-woop.PNG", "position": { "start": { "line": 4, "column": 1, "offset": 170 }, "end": { "line": 4, "column": 50, "offset": 219 }, "indent": [] } }], "position": { "start": { "line": 4, "column": 1, "offset": 170 }, "end": { "line": 4, "column": 50, "offset": 219 }, "indent": [] } }], "position": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 4, "column": 50, "offset": 219 } } } });
};

/**
 * This file was automatically created Wed Jul 19 2017 02:09:48 GMT-0400 (EDT)
 */

/***/ })

},[430]);
            return { page: comp.default }
          })
        