
          window.__NEXT_REGISTER_CHUNK('402b2c57-5320-48ee-a62f-c5bbc892d8e2.js', function() {
            webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-whitespace-character
 * @fileoverview Check if a character is a whitespace character.
 */



/* eslint-env commonjs */

/* Expose. */
module.exports = whitespace;

/* Methods. */
var fromCode = String.fromCharCode;

/* Constants. */
var re = /\s/;

/**
 * Check whether the given character code, or the character
 * code at the first character, is a whitespace character.
 *
 * @param {string|number} character
 * @return {boolean} - Whether `character` is a whitespaces character.
 */
function whitespace(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  );
}


/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/***/ (function(module, exports) {


exports = module.exports = trim;

function trim(str){
  return str.replace(/^\s*|\s*$/g, '');
}

exports.left = function(str){
  return str.replace(/^\s*/, '');
};

exports.right = function(str){
  return str.replace(/\s*$/, '');
};


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports) {

module.exports = extend

var hasOwnProperty = Object.prototype.hasOwnProperty;

function extend() {
    var target = {}

    for (var i = 0; i < arguments.length; i++) {
        var source = arguments[i]

        for (var key in source) {
            if (hasOwnProperty.call(source, key)) {
                target[key] = source[key]
            }
        }
    }

    return target
}


/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-decimal
 * @fileoverview Check if a character is decimal.
 */



/* eslint-env commonjs */

/* Expose. */
module.exports = decimal;

/**
 * Check whether the given character code, or the character
 * code at the first character, is decimal.
 *
 * @param {string|number} character
 * @return {boolean} - Whether `character` is decimal.
 */
function decimal(character) {
  var code = typeof character === 'string' ?
    character.charCodeAt(0) : character;

  return code >= 48 && code <= 57; /* 0-9 */
}


/***/ }),
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dependencies. */
var characterEntities = __webpack_require__(199);
var legacy = __webpack_require__(198);
var invalid = __webpack_require__(200);
var decimal = __webpack_require__(46);
var hexadecimal = __webpack_require__(195);
var alphanumerical = __webpack_require__(193);

/* Expose. */
module.exports = wrapper;

/* Methods. */
var own = {}.hasOwnProperty;
var fromCharCode = String.fromCharCode;
var noop = Function.prototype;

/* Characters. */
var REPLACEMENT = '\uFFFD';
var FORM_FEED = '\f';
var AMPERSAND = '&';
var OCTOTHORP = '#';
var SEMICOLON = ';';
var NEWLINE = '\n';
var X_LOWER = 'x';
var X_UPPER = 'X';
var SPACE = ' ';
var LESS_THAN = '<';
var EQUAL = '=';
var EMPTY = '';
var TAB = '\t';

/* Default settings. */
var defaults = {
  warning: null,
  reference: null,
  text: null,
  warningContext: null,
  referenceContext: null,
  textContext: null,
  position: {},
  additional: null,
  attribute: false,
  nonTerminated: true
};

/* Reference types. */
var NAMED = 'named';
var HEXADECIMAL = 'hexadecimal';
var DECIMAL = 'decimal';

/* Map of bases. */
var BASE = {};

BASE[HEXADECIMAL] = 16;
BASE[DECIMAL] = 10;

/* Map of types to tests. Each type of character reference
 * accepts different characters. This test is used to
 * detect whether a reference has ended (as the semicolon
 * is not strictly needed). */
var TESTS = {};

TESTS[NAMED] = alphanumerical;
TESTS[DECIMAL] = decimal;
TESTS[HEXADECIMAL] = hexadecimal;

/* Warning messages. */
var NAMED_NOT_TERMINATED = 1;
var NUMERIC_NOT_TERMINATED = 2;
var NAMED_EMPTY = 3;
var NUMERIC_EMPTY = 4;
var NAMED_UNKNOWN = 5;
var NUMERIC_DISALLOWED = 6;
var NUMERIC_PROHIBITED = 7;

var NUMERIC_REFERENCE = 'Numeric character references';
var NAMED_REFERENCE = 'Named character references';
var TERMINATED = ' must be terminated by a semicolon';
var VOID = ' cannot be empty';

var MESSAGES = {};

MESSAGES[NAMED_NOT_TERMINATED] = NAMED_REFERENCE + TERMINATED;
MESSAGES[NUMERIC_NOT_TERMINATED] = NUMERIC_REFERENCE + TERMINATED;
MESSAGES[NAMED_EMPTY] = NAMED_REFERENCE + VOID;
MESSAGES[NUMERIC_EMPTY] = NUMERIC_REFERENCE + VOID;
MESSAGES[NAMED_UNKNOWN] = NAMED_REFERENCE + ' must be known';
MESSAGES[NUMERIC_DISALLOWED] = NUMERIC_REFERENCE + ' cannot be disallowed';
MESSAGES[NUMERIC_PROHIBITED] = NUMERIC_REFERENCE + ' cannot be outside the ' +
    'permissible Unicode range';

/* Wrap to ensure clean parameters are given to `parse`. */
function wrapper(value, options) {
  var settings = {};
  var option;
  var key;

  if (!options) {
    options = {};
  }

  for (key in defaults) {
    option = options[key];
    settings[key] = option === null || option === undefined ? defaults[key] : option;
  }

  if (settings.position.indent || settings.position.start) {
    settings.indent = settings.position.indent || [];
    settings.position = settings.position.start;
  }

  return parse(value, settings);
}

/* Parse entities. */
function parse(value, settings) {
  var additional = settings.additional;
  var nonTerminated = settings.nonTerminated;
  var handleText = settings.text;
  var handleReference = settings.reference;
  var handleWarning = settings.warning;
  var textContext = settings.textContext;
  var referenceContext = settings.referenceContext;
  var warningContext = settings.warningContext;
  var pos = settings.position;
  var indent = settings.indent || [];
  var length = value.length;
  var index = 0;
  var lines = -1;
  var column = pos.column || 1;
  var line = pos.line || 1;
  var queue = EMPTY;
  var result = [];
  var entityCharacters;
  var terminated;
  var characters;
  var character;
  var reference;
  var following;
  var warning;
  var reason;
  var output;
  var entity;
  var begin;
  var start;
  var type;
  var test;
  var prev;
  var next;
  var diff;
  var end;

  /* Cache the current point. */
  prev = now();

  /* Wrap `handleWarning`. */
  warning = handleWarning ? parseError : noop;

  /* Ensure the algorithm walks over the first character
   * and the end (inclusive). */
  index--;
  length++;

  while (++index < length) {
    /* If the previous character was a newline. */
    if (character === NEWLINE) {
      column = indent[lines] || 1;
    }

    character = at(index);

    /* Handle anything other than an ampersand,
     * including newlines and EOF. */
    if (character !== AMPERSAND) {
      if (character === NEWLINE) {
        line++;
        lines++;
        column = 0;
      }

      if (character) {
        queue += character;
        column++;
      } else {
        flush();
      }
    } else {
      following = at(index + 1);

      /* The behaviour depends on the identity of the next
       * character. */
      if (
        following === TAB ||
        following === NEWLINE ||
        following === FORM_FEED ||
        following === SPACE ||
        following === LESS_THAN ||
        following === AMPERSAND ||
        following === EMPTY ||
        (additional && following === additional)
      ) {
        /* Not a character reference. No characters
         * are consumed, and nothing is returned.
         * This is not an error, either. */
        queue += character;
        column++;

        continue;
      }

      start = index + 1;
      begin = start;
      end = start;

      /* Numerical entity. */
      if (following !== OCTOTHORP) {
        type = NAMED;
      } else {
        end = ++begin;

        /* The behaviour further depends on the
         * character after the U+0023 NUMBER SIGN. */
        following = at(end);

        if (following === X_LOWER || following === X_UPPER) {
          /* ASCII hex digits. */
          type = HEXADECIMAL;
          end = ++begin;
        } else {
          /* ASCII digits. */
          type = DECIMAL;
        }
      }

      entityCharacters = EMPTY;
      entity = EMPTY;
      characters = EMPTY;
      test = TESTS[type];
      end--;

      while (++end < length) {
        following = at(end);

        if (!test(following)) {
          break;
        }

        characters += following;

        /* Check if we can match a legacy named
         * reference.  If so, we cache that as the
         * last viable named reference.  This
         * ensures we do not need to walk backwards
         * later. */
        if (type === NAMED && own.call(legacy, characters)) {
          entityCharacters = characters;
          entity = legacy[characters];
        }
      }

      terminated = at(end) === SEMICOLON;

      if (terminated) {
        end++;

        if (type === NAMED && own.call(characterEntities, characters)) {
          entityCharacters = characters;
          entity = characterEntities[characters];
        }
      }

      diff = 1 + end - start;

      if (!terminated && !nonTerminated) {
        /* Empty. */
      } else if (!characters) {
        /* An empty (possible) entity is valid, unless
         * its numeric (thus an ampersand followed by
         * an octothorp). */
        if (type !== NAMED) {
          warning(NUMERIC_EMPTY, diff);
        }
      } else if (type === NAMED) {
        /* An ampersand followed by anything
         * unknown, and not terminated, is invalid. */
        if (terminated && !entity) {
          warning(NAMED_UNKNOWN, 1);
        } else {
          /* If theres something after an entity
           * name which is not known, cap the
           * reference. */
          if (entityCharacters !== characters) {
            end = begin + entityCharacters.length;
            diff = 1 + end - begin;
            terminated = false;
          }

          /* If the reference is not terminated,
           * warn. */
          if (!terminated) {
            reason = entityCharacters ?
              NAMED_NOT_TERMINATED :
              NAMED_EMPTY;

            if (!settings.attribute) {
              warning(reason, diff);
            } else {
              following = at(end);

              if (following === EQUAL) {
                warning(reason, diff);
                entity = null;
              } else if (alphanumerical(following)) {
                entity = null;
              } else {
                warning(reason, diff);
              }
            }
          }
        }

        reference = entity;
      } else {
        if (!terminated) {
          /* All non-terminated numeric entities are
           * not rendered, and trigger a warning. */
          warning(NUMERIC_NOT_TERMINATED, diff);
        }

        /* When terminated and number, parse as
         * either hexadecimal or decimal. */
        reference = parseInt(characters, BASE[type]);

        /* Trigger a warning when the parsed number
         * is prohibited, and replace with
         * replacement character. */
        if (isProhibited(reference)) {
          warning(NUMERIC_PROHIBITED, diff);

          reference = REPLACEMENT;
        } else if (reference in invalid) {
          /* Trigger a warning when the parsed number
           * is disallowed, and replace by an
           * alternative. */
          warning(NUMERIC_DISALLOWED, diff);

          reference = invalid[reference];
        } else {
          /* Parse the number. */
          output = EMPTY;

          /* Trigger a warning when the parsed
           * number should not be used. */
          if (isWarning(reference)) {
            warning(NUMERIC_DISALLOWED, diff);
          }

          /* Stringify the number. */
          if (reference > 0xFFFF) {
            reference -= 0x10000;
            output += fromCharCode((reference >>> (10 & 0x3FF)) | 0xD800);
            reference = 0xDC00 | (reference & 0x3FF);
          }

          reference = output + fromCharCode(reference);
        }
      }

      /* If we could not find a reference, queue the
       * checked characters (as normal characters),
       * and move the pointer to their end. This is
       * possible because we can be certain neither
       * newlines nor ampersands are included. */
      if (!reference) {
        characters = value.slice(start - 1, end);
        queue += characters;
        column += characters.length;
        index = end - 1;
      } else {
        /* Found it! First eat the queued
         * characters as normal text, then eat
         * an entity. */
        flush();

        prev = now();
        index = end - 1;
        column += end - start + 1;
        result.push(reference);
        next = now();
        next.offset++;

        if (handleReference) {
          handleReference.call(referenceContext, reference, {
            start: prev,
            end: next
          }, value.slice(start - 1, end));
        }

        prev = next;
      }
    }
  }

  /* Return the reduced nodes, and any possible warnings. */
  return result.join(EMPTY);

  /* Get current position. */
  function now() {
    return {
      line: line,
      column: column,
      offset: index + (pos.offset || 0)
    };
  }

  /* “Throw” a parse-error: a warning. */
  function parseError(code, offset) {
    var position = now();

    position.column += offset;
    position.offset += offset;

    handleWarning.call(warningContext, MESSAGES[code], position, code);
  }

  /* Get character at position. */
  function at(position) {
    return value.charAt(position);
  }

  /* Flush `queue` (normal text). Macro invoked before
   * each entity and at the end of `value`.
   * Does nothing when `queue` is empty. */
  function flush() {
    if (queue) {
      result.push(queue);

      if (handleText) {
        handleText.call(textContext, queue, {
          start: prev,
          end: now()
        });
      }

      queue = EMPTY;
    }
  }
}

/* Check if `character` is outside the permissible
 * unicode range. */
function isProhibited(code) {
  return (code >= 0xD800 && code <= 0xDFFF) || (code > 0x10FFFF);
}

/* Check if `character` is disallowed. */
function isWarning(code) {
  if (
    (code >= 0x0001 && code <= 0x0008) ||
    code === 0x000B ||
    (code >= 0x000D && code <= 0x001F) ||
    (code >= 0x007F && code <= 0x009F) ||
    (code >= 0xFDD0 && code <= 0xFDEF) ||
    (code & 0xFFFF) === 0xFFFF ||
    (code & 0xFFFF) === 0xFFFE
  ) {
    return true;
  }

  return false;
}


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:get-indentation
 * @fileoverview Get indentation.
 */



module.exports = interrupt;

function interrupt(interruptors, tokenizers, ctx, params) {
  var bools = ['pedantic', 'commonmark'];
  var count = bools.length;
  var length = interruptors.length;
  var index = -1;
  var interruptor;
  var config;
  var fn;
  var offset;
  var bool;
  var ignore;

  while (++index < length) {
    interruptor = interruptors[index];
    config = interruptor[1] || {};
    fn = interruptor[0];
    offset = -1;
    ignore = false;

    while (++offset < count) {
      bool = bools[offset];

      if (config[bool] !== undefined && config[bool] !== ctx.options[bool]) {
        ignore = true;
        break;
      }
    }

    if (ignore) {
      continue;
    }

    if (tokenizers[fn].apply(ctx, params)) {
      return true;
    }
  }

  return false;
}


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:normalize
 * @fileoverview Normalize an identifier.
 */



/* Dependencies. */
var collapseWhiteSpace = __webpack_require__(190);

/* Expose. */
module.exports = normalize;

/**
 * Normalize an identifier.  Collapses multiple white space
 * characters into a single space, and removes casing.
 *
 * @example
 *   normalizeIdentifier('FOO\t bar'); // 'foo bar'
 *
 * @param {string} value - Content to normalize.
 * @return {string} - Normalized content.
 */
function normalize(value) {
  return collapseWhiteSpace(value).toLowerCase();
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = trimTrailingLines;

var line = '\n';

/* Remove final newline characters from `value`. */
function trimTrailingLines(value) {
  var val = String(value);
  var index = val.length;

  while (val.charAt(--index) === line) { /* empty */ }

  return val.slice(0, index + 1);
}


/***/ }),
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-alphabetical
 * @fileoverview Check if a character is alphabetical.
 */



/* eslint-env commonjs */

/* Expose. */
module.exports = alphabetical;

/**
 * Check whether the given character code, or the character
 * code at the first character, is alphabetical.
 *
 * @param {string|number} character
 * @return {boolean} - Whether `character` is alphabetical.
 */
function alphabetical(character) {
  var code = typeof character === 'string' ?
    character.charCodeAt(0) : character;

  return (code >= 97 && code <= 122) || /* a-z */
    (code >= 65 && code <= 90); /* A-Z */
}


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:defaults
 * @fileoverview Default options for `parse`.
 */



/* Expose. */
module.exports = {
  position: true,
  gfm: true,
  yaml: true,
  commonmark: false,
  footnotes: false,
  pedantic: false,
  blocks: __webpack_require__(201),
  breaks: false
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:link
 * @fileoverview Locate a link.
 */



module.exports = locate;

function locate(value, fromIndex) {
  var link = value.indexOf('[', fromIndex);
  var image = value.indexOf('![', fromIndex);

  if (image === -1) {
    return link;
  }

  /* Link can never be `-1` if an image is found, so we don’t need
   * to check for that :) */
  return link < image ? link : image;
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:tag
 * @fileoverview Locate a tag.
 */



module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('<', fromIndex);
}


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:get-indentation
 * @fileoverview Get indentation.
 */



/* Expose. */
module.exports = indentation;

/* Map of characters, and their column length,
 * which can be used as indentation. */
var characters = {' ': 1, '\t': 4};

/**
 * Gets indentation information for a line.
 *
 * @param {string} value - Indented line.
 * @return {Object} - Indetation information.
 */
function indentation(value) {
  var index = 0;
  var indent = 0;
  var character = value.charAt(index);
  var stops = {};
  var size;

  while (character in characters) {
    size = characters[character];

    indent += size;

    if (size > 1) {
      indent = Math.floor(indent / size) * size;
    }

    stops[indent] = index;

    character = value.charAt(++index);
  }

  return {indent: indent, stops: stops};
}


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:html
 * @fileoverview HTML regexes.
 */



var attributeName = '[a-zA-Z_:][a-zA-Z0-9:._-]*';
var unquoted = '[^"\'=<>`\\u0000-\\u0020]+';
var singleQuoted = '\'[^\']*\'';
var doubleQuoted = '"[^"]*"';
var attributeValue = '(?:' + unquoted + '|' + singleQuoted + '|' + doubleQuoted + ')';
var attribute = '(?:\\s+' + attributeName + '(?:\\s*=\\s*' + attributeValue + ')?)';
var openTag = '<[A-Za-z][A-Za-z0-9\\-]*' + attribute + '*\\s*\\/?>';
var closeTag = '<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>';
var comment = '<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->';
var processing = '<[?].*?[?]>';
var declaration = '<![A-Za-z]+\\s+[^>]*>';
var cdata = '<!\\[CDATA\\[[\\s\\S]*?\\]\\]>';

exports.openCloseTag = new RegExp('^(?:' + openTag + '|' + closeTag + ')');

exports.tag = new RegExp('^(?:' +
  openTag + '|' +
  closeTag + '|' +
  comment + '|' +
  processing + '|' +
  declaration + '|' +
  cdata +
')');


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(2);

var _style2 = _interopRequireDefault(_style);

var _unified = __webpack_require__(256);

var _unified2 = _interopRequireDefault(_unified);

var _remarkParse = __webpack_require__(203);

var _remarkParse2 = _interopRequireDefault(_remarkParse);

var _remarkWhoa = __webpack_require__(244);

var _remarkWhoa2 = _interopRequireDefault(_remarkWhoa);

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _whoaComponents = __webpack_require__(71);

var _whoaComponents2 = _interopRequireDefault(_whoaComponents);

var _Post = __webpack_require__(100);

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var whoaParse = (0, _unified2.default)().use(_remarkParse2.default).use(_remarkWhoa2.default).parse;

var attributes = {
  title: 'Coffee',
  slug: 'coffee-makes-my-thoughts-loud',
  date: 'July 6, 2017',
  js: true
};

exports.default = function () {
  return _react2.default.createElement(_Post2.default, { attributes: attributes }, _react2.default.createElement(_whoaComponents2.default, null, whoaParse('\nI don\'t know why I titled this coffee. |-That\'s something you should know about my workflow, maybe. I title and slug a post before writing, and rarely do I change it.-|\n\n# \u2615 This is the *hot beverage* emoji.\n## I always thought it was the *coffee* emoji.\nIf there\'s one source I trust when it comes to emoji, it is [emojipedia](https://emojipedia.org/hot-beverage/).\n\nThey have a great [FAQ](https://emojipedia.org/faq/).\n\n> \uD83D\uDE4B Emoji or emojis? What is the correct plural of emoji?\n\nThese are the questions.\n\nFor real emojipedia is a great resource. It\'s *(sic)* got the latest on what is to come in the **future of emoji**, with the next versions of Unicode. Currently, we (the world) are on Unicode 10.0 and Emoji 5.0. Emoji proposals for Unicode 11 were due July 1, 2017, so it looks like that ship has sailed \u26F5.\n\nI wonder who is behind it (emojipedia)...\n\n\uD83D\uDD0EWho runs emojipedia?\uD83D\uDD0D\n\n# It looks like [Jeremy Burge](https://twitter.com/jeremyburge) is the man behind the \uD83C\uDFAD.\n\n**Yes** he is indeed. He\'s a member of of the Unicode Emoji Subcommittee. I wonder how you get to that point in your career. Bouncing around the [Unicode website](http://www.unicode.org) now. It\'s interesting to see who the [full members of the Unicode Consortium](http://www.unicode.org/consortium/members.html#full) are. Here\'s a snapshot from their site.\n\n![unicode-consortium-full-members](/static/blog/unicode-consortium-full-members.png)\n\nShould we (the people) be concerned that Adobe, Apple, Facebook, Netflix, Google et al are deciding what emotions we can feel??? Probably not. I\'m more worried about one of the two  individual members with **over 20 years** as a member of the consortium\u2014the one named  **Tex Texin**. It costs $18,000 per year to be a full member of the consortium (as a company or organization, that is.) An individual can join for $75, but it looks like that doesn\'t buy you a vote at the technical committee meetings.\n\nWhy would an individual want to join the Unicode Consortium? Obviously, to *"demonstrate your commitment to the field"*.\n\n> If you are a technical professional in areas of software globalization, software internationalization, or font technology, joining the Unicode Consortium demonstrates your commitment to your field. As an Individual member, you have full access to email lists which allows you to join discussions on the ongoing development of the Unicode Standard. Individual members may participate in technical committee meetings at the discretion of the chair.\n\nJeremy Burge is certainly committed.\n\n    ')), _react2.default.createElement('p', {
    'data-jsx': 1724054690
  }, 'Would it surprise you if I told you this \uD83D\uDC47 was Tex Texin?'), _react2.default.createElement('div', { id: 'tex', 'data-jsx': 1724054690
  }), _react2.default.createElement('p', { style: { fontSize: '48px' }, 'data-jsx': 1724054690
  }, 'Well it is.'), _react2.default.createElement(_style2.default, {
    styleId: 1724054690,
    css: '#tex[data-jsx="1724054690"] {background: url(/static/blog/TexTexin.jpg);height: 0;width: 100%;padding-bottom: 200px;position: relative;}#tex[data-jsx="1724054690"]::before {content: \'hover/tap to reveal\';text-align: center;line-height: 200px;position: absolute;width: 100%;height: 100%;background: #cacaca;display: block;opacity: 1;-webkit-transition: opacity 0.3s;-moz-transition: opacity 0.3s;-ms-transition: opacity 0.3s;transition: opacity 0.3s;}#tex[data-jsx="1724054690"]:hover::before {opacity: 0;}'
  }));
};

/***/ }),
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module bail
 * @fileoverview Throw a given error.
 */



/* Expose. */
module.exports = bail;

/**
 * Throw a given error.
 *
 * @example
 *   bail();
 *
 * @example
 *   bail(new Error('failure'));
 *   // Error: failure
 *   //     at repl:1:6
 *   //     at REPLServer.defaultEval (repl.js:154:27)
 *   //     ...
 *
 * @param {Error?} [err] - Optional error.
 * @throws {Error} - `err`, when given.
 */
function bail(err) {
  if (err) {
    throw err;
  }
}


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = collapse;

/* collapse(' \t\nbar \nbaz\t'); // ' bar baz ' */
function collapse(value) {
  return String(value).replace(/\s+/g, ' ');
}


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwn = Object.prototype.hasOwnProperty;
var toStr = Object.prototype.toString;

var isArray = function isArray(arr) {
	if (typeof Array.isArray === 'function') {
		return Array.isArray(arr);
	}

	return toStr.call(arr) === '[object Array]';
};

var isPlainObject = function isPlainObject(obj) {
	if (!obj || toStr.call(obj) !== '[object Object]') {
		return false;
	}

	var hasOwnConstructor = hasOwn.call(obj, 'constructor');
	var hasIsPrototypeOf = obj.constructor && obj.constructor.prototype && hasOwn.call(obj.constructor.prototype, 'isPrototypeOf');
	// Not own constructor property must be Object
	if (obj.constructor && !hasOwnConstructor && !hasIsPrototypeOf) {
		return false;
	}

	// Own properties are enumerated firstly, so to speed up,
	// if last one is own, then all properties are own.
	var key;
	for (key in obj) { /**/ }

	return typeof key === 'undefined' || hasOwn.call(obj, key);
};

module.exports = function extend() {
	var options, name, src, copy, copyIsArray, clone;
	var target = arguments[0];
	var i = 1;
	var length = arguments.length;
	var deep = false;

	// Handle a deep copy situation
	if (typeof target === 'boolean') {
		deep = target;
		target = arguments[1] || {};
		// skip the boolean and the target
		i = 2;
	}
	if (target == null || (typeof target !== 'object' && typeof target !== 'function')) {
		target = {};
	}

	for (; i < length; ++i) {
		options = arguments[i];
		// Only deal with non-null/undefined values
		if (options != null) {
			// Extend the base object
			for (name in options) {
				src = target[name];
				copy = options[name];

				// Prevent never-ending loop
				if (target !== copy) {
					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (isPlainObject(copy) || (copyIsArray = isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && isArray(src) ? src : [];
						} else {
							clone = src && isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = extend(deep, clone, copy);

					// Don't bring in undefined values
					} else if (typeof copy !== 'undefined') {
						target[name] = copy;
					}
				}
			}
		}
	}

	// Return the modified object
	return target;
};


/***/ }),
/* 192 */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-alphanumerical
 * @fileoverview Check if a character is alphanumerical.
 */



/* eslint-env commonjs */

/* Dependencies. */
var alphabetical = __webpack_require__(101);
var decimal = __webpack_require__(46);

/* Expose. */
module.exports = alphanumerical;

/**
 * Check whether the given character code, or the character
 * code at the first character, is alphanumerical.
 *
 * @param {string|number} character
 * @return {boolean} - Whether `character` is alphanumerical.
 */
function alphanumerical(character) {
  return alphabetical(character) || decimal(character);
}


/***/ }),
/* 194 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-hexadecimal
 * @fileoverview Check if a character is hexadecimal.
 */



/* eslint-env commonjs */

/* Expose. */
module.exports = hexadecimal;

/**
 * Check whether the given character code, or the character
 * code at the first character, is hexadecimal.
 *
 * @param {string|number} character
 * @return {boolean} - Whether `character` is hexadecimal.
 */
function hexadecimal(character) {
  var code = typeof character === 'string' ?
    character.charCodeAt(0) : character;

  return (code >= 97 /* a */ && code <= 102 /* z */) ||
    (code >= 65 /* A */ && code <= 70 /* Z */) ||
    (code >= 48 /* A */ && code <= 57 /* Z */);
}


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var toString = Object.prototype.toString;

module.exports = function (x) {
	var prototype;
	return toString.call(x) === '[object Object]' && (prototype = Object.getPrototypeOf(x), prototype === null || prototype === Object.getPrototypeOf({}));
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module is-word-character
 * @fileoverview Check if a character is a word character.
 */



/* eslint-env commonjs */

/* Expose. */
module.exports = wordCharacter;

/* Methods. */
var fromCode = String.fromCharCode;

/* Constants. */
var re = /\w/;

/**
 * Check whether the given character code, or the character
 * code at the first character, is a word character.
 *
 * @param {string|number} character
 * @return {boolean} - Whether `character` is a word character.
 */
function wordCharacter(character) {
  return re.test(
    typeof character === 'number' ? fromCode(character) : character.charAt(0)
  );
}


/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = {
	"AElig": "Æ",
	"AMP": "&",
	"Aacute": "Á",
	"Acirc": "Â",
	"Agrave": "À",
	"Aring": "Å",
	"Atilde": "Ã",
	"Auml": "Ä",
	"COPY": "©",
	"Ccedil": "Ç",
	"ETH": "Ð",
	"Eacute": "É",
	"Ecirc": "Ê",
	"Egrave": "È",
	"Euml": "Ë",
	"GT": ">",
	"Iacute": "Í",
	"Icirc": "Î",
	"Igrave": "Ì",
	"Iuml": "Ï",
	"LT": "<",
	"Ntilde": "Ñ",
	"Oacute": "Ó",
	"Ocirc": "Ô",
	"Ograve": "Ò",
	"Oslash": "Ø",
	"Otilde": "Õ",
	"Ouml": "Ö",
	"QUOT": "\"",
	"REG": "®",
	"THORN": "Þ",
	"Uacute": "Ú",
	"Ucirc": "Û",
	"Ugrave": "Ù",
	"Uuml": "Ü",
	"Yacute": "Ý",
	"aacute": "á",
	"acirc": "â",
	"acute": "´",
	"aelig": "æ",
	"agrave": "à",
	"amp": "&",
	"aring": "å",
	"atilde": "ã",
	"auml": "ä",
	"brvbar": "¦",
	"ccedil": "ç",
	"cedil": "¸",
	"cent": "¢",
	"copy": "©",
	"curren": "¤",
	"deg": "°",
	"divide": "÷",
	"eacute": "é",
	"ecirc": "ê",
	"egrave": "è",
	"eth": "ð",
	"euml": "ë",
	"frac12": "½",
	"frac14": "¼",
	"frac34": "¾",
	"gt": ">",
	"iacute": "í",
	"icirc": "î",
	"iexcl": "¡",
	"igrave": "ì",
	"iquest": "¿",
	"iuml": "ï",
	"laquo": "«",
	"lt": "<",
	"macr": "¯",
	"micro": "µ",
	"middot": "·",
	"nbsp": " ",
	"not": "¬",
	"ntilde": "ñ",
	"oacute": "ó",
	"ocirc": "ô",
	"ograve": "ò",
	"ordf": "ª",
	"ordm": "º",
	"oslash": "ø",
	"otilde": "õ",
	"ouml": "ö",
	"para": "¶",
	"plusmn": "±",
	"pound": "£",
	"quot": "\"",
	"raquo": "»",
	"reg": "®",
	"sect": "§",
	"shy": "­",
	"sup1": "¹",
	"sup2": "²",
	"sup3": "³",
	"szlig": "ß",
	"thorn": "þ",
	"times": "×",
	"uacute": "ú",
	"ucirc": "û",
	"ugrave": "ù",
	"uml": "¨",
	"uuml": "ü",
	"yacute": "ý",
	"yen": "¥",
	"yuml": "ÿ"
};

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = {
	"AEli": "Æ",
	"AElig": "Æ",
	"AM": "&",
	"AMP": "&",
	"Aacut": "Á",
	"Aacute": "Á",
	"Abreve": "Ă",
	"Acir": "Â",
	"Acirc": "Â",
	"Acy": "А",
	"Afr": "𝔄",
	"Agrav": "À",
	"Agrave": "À",
	"Alpha": "Α",
	"Amacr": "Ā",
	"And": "⩓",
	"Aogon": "Ą",
	"Aopf": "𝔸",
	"ApplyFunction": "⁡",
	"Arin": "Å",
	"Aring": "Å",
	"Ascr": "𝒜",
	"Assign": "≔",
	"Atild": "Ã",
	"Atilde": "Ã",
	"Aum": "Ä",
	"Auml": "Ä",
	"Backslash": "∖",
	"Barv": "⫧",
	"Barwed": "⌆",
	"Bcy": "Б",
	"Because": "∵",
	"Bernoullis": "ℬ",
	"Beta": "Β",
	"Bfr": "𝔅",
	"Bopf": "𝔹",
	"Breve": "˘",
	"Bscr": "ℬ",
	"Bumpeq": "≎",
	"CHcy": "Ч",
	"COP": "©",
	"COPY": "©",
	"Cacute": "Ć",
	"Cap": "⋒",
	"CapitalDifferentialD": "ⅅ",
	"Cayleys": "ℭ",
	"Ccaron": "Č",
	"Ccedi": "Ç",
	"Ccedil": "Ç",
	"Ccirc": "Ĉ",
	"Cconint": "∰",
	"Cdot": "Ċ",
	"Cedilla": "¸",
	"CenterDot": "·",
	"Cfr": "ℭ",
	"Chi": "Χ",
	"CircleDot": "⊙",
	"CircleMinus": "⊖",
	"CirclePlus": "⊕",
	"CircleTimes": "⊗",
	"ClockwiseContourIntegral": "∲",
	"CloseCurlyDoubleQuote": "”",
	"CloseCurlyQuote": "’",
	"Colon": "∷",
	"Colone": "⩴",
	"Congruent": "≡",
	"Conint": "∯",
	"ContourIntegral": "∮",
	"Copf": "ℂ",
	"Coproduct": "∐",
	"CounterClockwiseContourIntegral": "∳",
	"Cross": "⨯",
	"Cscr": "𝒞",
	"Cup": "⋓",
	"CupCap": "≍",
	"DD": "ⅅ",
	"DDotrahd": "⤑",
	"DJcy": "Ђ",
	"DScy": "Ѕ",
	"DZcy": "Џ",
	"Dagger": "‡",
	"Darr": "↡",
	"Dashv": "⫤",
	"Dcaron": "Ď",
	"Dcy": "Д",
	"Del": "∇",
	"Delta": "Δ",
	"Dfr": "𝔇",
	"DiacriticalAcute": "´",
	"DiacriticalDot": "˙",
	"DiacriticalDoubleAcute": "˝",
	"DiacriticalGrave": "`",
	"DiacriticalTilde": "˜",
	"Diamond": "⋄",
	"DifferentialD": "ⅆ",
	"Dopf": "𝔻",
	"Dot": "¨",
	"DotDot": "⃜",
	"DotEqual": "≐",
	"DoubleContourIntegral": "∯",
	"DoubleDot": "¨",
	"DoubleDownArrow": "⇓",
	"DoubleLeftArrow": "⇐",
	"DoubleLeftRightArrow": "⇔",
	"DoubleLeftTee": "⫤",
	"DoubleLongLeftArrow": "⟸",
	"DoubleLongLeftRightArrow": "⟺",
	"DoubleLongRightArrow": "⟹",
	"DoubleRightArrow": "⇒",
	"DoubleRightTee": "⊨",
	"DoubleUpArrow": "⇑",
	"DoubleUpDownArrow": "⇕",
	"DoubleVerticalBar": "∥",
	"DownArrow": "↓",
	"DownArrowBar": "⤓",
	"DownArrowUpArrow": "⇵",
	"DownBreve": "̑",
	"DownLeftRightVector": "⥐",
	"DownLeftTeeVector": "⥞",
	"DownLeftVector": "↽",
	"DownLeftVectorBar": "⥖",
	"DownRightTeeVector": "⥟",
	"DownRightVector": "⇁",
	"DownRightVectorBar": "⥗",
	"DownTee": "⊤",
	"DownTeeArrow": "↧",
	"Downarrow": "⇓",
	"Dscr": "𝒟",
	"Dstrok": "Đ",
	"ENG": "Ŋ",
	"ET": "Ð",
	"ETH": "Ð",
	"Eacut": "É",
	"Eacute": "É",
	"Ecaron": "Ě",
	"Ecir": "Ê",
	"Ecirc": "Ê",
	"Ecy": "Э",
	"Edot": "Ė",
	"Efr": "𝔈",
	"Egrav": "È",
	"Egrave": "È",
	"Element": "∈",
	"Emacr": "Ē",
	"EmptySmallSquare": "◻",
	"EmptyVerySmallSquare": "▫",
	"Eogon": "Ę",
	"Eopf": "𝔼",
	"Epsilon": "Ε",
	"Equal": "⩵",
	"EqualTilde": "≂",
	"Equilibrium": "⇌",
	"Escr": "ℰ",
	"Esim": "⩳",
	"Eta": "Η",
	"Eum": "Ë",
	"Euml": "Ë",
	"Exists": "∃",
	"ExponentialE": "ⅇ",
	"Fcy": "Ф",
	"Ffr": "𝔉",
	"FilledSmallSquare": "◼",
	"FilledVerySmallSquare": "▪",
	"Fopf": "𝔽",
	"ForAll": "∀",
	"Fouriertrf": "ℱ",
	"Fscr": "ℱ",
	"GJcy": "Ѓ",
	"G": ">",
	"GT": ">",
	"Gamma": "Γ",
	"Gammad": "Ϝ",
	"Gbreve": "Ğ",
	"Gcedil": "Ģ",
	"Gcirc": "Ĝ",
	"Gcy": "Г",
	"Gdot": "Ġ",
	"Gfr": "𝔊",
	"Gg": "⋙",
	"Gopf": "𝔾",
	"GreaterEqual": "≥",
	"GreaterEqualLess": "⋛",
	"GreaterFullEqual": "≧",
	"GreaterGreater": "⪢",
	"GreaterLess": "≷",
	"GreaterSlantEqual": "⩾",
	"GreaterTilde": "≳",
	"Gscr": "𝒢",
	"Gt": "≫",
	"HARDcy": "Ъ",
	"Hacek": "ˇ",
	"Hat": "^",
	"Hcirc": "Ĥ",
	"Hfr": "ℌ",
	"HilbertSpace": "ℋ",
	"Hopf": "ℍ",
	"HorizontalLine": "─",
	"Hscr": "ℋ",
	"Hstrok": "Ħ",
	"HumpDownHump": "≎",
	"HumpEqual": "≏",
	"IEcy": "Е",
	"IJlig": "Ĳ",
	"IOcy": "Ё",
	"Iacut": "Í",
	"Iacute": "Í",
	"Icir": "Î",
	"Icirc": "Î",
	"Icy": "И",
	"Idot": "İ",
	"Ifr": "ℑ",
	"Igrav": "Ì",
	"Igrave": "Ì",
	"Im": "ℑ",
	"Imacr": "Ī",
	"ImaginaryI": "ⅈ",
	"Implies": "⇒",
	"Int": "∬",
	"Integral": "∫",
	"Intersection": "⋂",
	"InvisibleComma": "⁣",
	"InvisibleTimes": "⁢",
	"Iogon": "Į",
	"Iopf": "𝕀",
	"Iota": "Ι",
	"Iscr": "ℐ",
	"Itilde": "Ĩ",
	"Iukcy": "І",
	"Ium": "Ï",
	"Iuml": "Ï",
	"Jcirc": "Ĵ",
	"Jcy": "Й",
	"Jfr": "𝔍",
	"Jopf": "𝕁",
	"Jscr": "𝒥",
	"Jsercy": "Ј",
	"Jukcy": "Є",
	"KHcy": "Х",
	"KJcy": "Ќ",
	"Kappa": "Κ",
	"Kcedil": "Ķ",
	"Kcy": "К",
	"Kfr": "𝔎",
	"Kopf": "𝕂",
	"Kscr": "𝒦",
	"LJcy": "Љ",
	"L": "<",
	"LT": "<",
	"Lacute": "Ĺ",
	"Lambda": "Λ",
	"Lang": "⟪",
	"Laplacetrf": "ℒ",
	"Larr": "↞",
	"Lcaron": "Ľ",
	"Lcedil": "Ļ",
	"Lcy": "Л",
	"LeftAngleBracket": "⟨",
	"LeftArrow": "←",
	"LeftArrowBar": "⇤",
	"LeftArrowRightArrow": "⇆",
	"LeftCeiling": "⌈",
	"LeftDoubleBracket": "⟦",
	"LeftDownTeeVector": "⥡",
	"LeftDownVector": "⇃",
	"LeftDownVectorBar": "⥙",
	"LeftFloor": "⌊",
	"LeftRightArrow": "↔",
	"LeftRightVector": "⥎",
	"LeftTee": "⊣",
	"LeftTeeArrow": "↤",
	"LeftTeeVector": "⥚",
	"LeftTriangle": "⊲",
	"LeftTriangleBar": "⧏",
	"LeftTriangleEqual": "⊴",
	"LeftUpDownVector": "⥑",
	"LeftUpTeeVector": "⥠",
	"LeftUpVector": "↿",
	"LeftUpVectorBar": "⥘",
	"LeftVector": "↼",
	"LeftVectorBar": "⥒",
	"Leftarrow": "⇐",
	"Leftrightarrow": "⇔",
	"LessEqualGreater": "⋚",
	"LessFullEqual": "≦",
	"LessGreater": "≶",
	"LessLess": "⪡",
	"LessSlantEqual": "⩽",
	"LessTilde": "≲",
	"Lfr": "𝔏",
	"Ll": "⋘",
	"Lleftarrow": "⇚",
	"Lmidot": "Ŀ",
	"LongLeftArrow": "⟵",
	"LongLeftRightArrow": "⟷",
	"LongRightArrow": "⟶",
	"Longleftarrow": "⟸",
	"Longleftrightarrow": "⟺",
	"Longrightarrow": "⟹",
	"Lopf": "𝕃",
	"LowerLeftArrow": "↙",
	"LowerRightArrow": "↘",
	"Lscr": "ℒ",
	"Lsh": "↰",
	"Lstrok": "Ł",
	"Lt": "≪",
	"Map": "⤅",
	"Mcy": "М",
	"MediumSpace": " ",
	"Mellintrf": "ℳ",
	"Mfr": "𝔐",
	"MinusPlus": "∓",
	"Mopf": "𝕄",
	"Mscr": "ℳ",
	"Mu": "Μ",
	"NJcy": "Њ",
	"Nacute": "Ń",
	"Ncaron": "Ň",
	"Ncedil": "Ņ",
	"Ncy": "Н",
	"NegativeMediumSpace": "​",
	"NegativeThickSpace": "​",
	"NegativeThinSpace": "​",
	"NegativeVeryThinSpace": "​",
	"NestedGreaterGreater": "≫",
	"NestedLessLess": "≪",
	"NewLine": "\n",
	"Nfr": "𝔑",
	"NoBreak": "⁠",
	"NonBreakingSpace": " ",
	"Nopf": "ℕ",
	"Not": "⫬",
	"NotCongruent": "≢",
	"NotCupCap": "≭",
	"NotDoubleVerticalBar": "∦",
	"NotElement": "∉",
	"NotEqual": "≠",
	"NotEqualTilde": "≂̸",
	"NotExists": "∄",
	"NotGreater": "≯",
	"NotGreaterEqual": "≱",
	"NotGreaterFullEqual": "≧̸",
	"NotGreaterGreater": "≫̸",
	"NotGreaterLess": "≹",
	"NotGreaterSlantEqual": "⩾̸",
	"NotGreaterTilde": "≵",
	"NotHumpDownHump": "≎̸",
	"NotHumpEqual": "≏̸",
	"NotLeftTriangle": "⋪",
	"NotLeftTriangleBar": "⧏̸",
	"NotLeftTriangleEqual": "⋬",
	"NotLess": "≮",
	"NotLessEqual": "≰",
	"NotLessGreater": "≸",
	"NotLessLess": "≪̸",
	"NotLessSlantEqual": "⩽̸",
	"NotLessTilde": "≴",
	"NotNestedGreaterGreater": "⪢̸",
	"NotNestedLessLess": "⪡̸",
	"NotPrecedes": "⊀",
	"NotPrecedesEqual": "⪯̸",
	"NotPrecedesSlantEqual": "⋠",
	"NotReverseElement": "∌",
	"NotRightTriangle": "⋫",
	"NotRightTriangleBar": "⧐̸",
	"NotRightTriangleEqual": "⋭",
	"NotSquareSubset": "⊏̸",
	"NotSquareSubsetEqual": "⋢",
	"NotSquareSuperset": "⊐̸",
	"NotSquareSupersetEqual": "⋣",
	"NotSubset": "⊂⃒",
	"NotSubsetEqual": "⊈",
	"NotSucceeds": "⊁",
	"NotSucceedsEqual": "⪰̸",
	"NotSucceedsSlantEqual": "⋡",
	"NotSucceedsTilde": "≿̸",
	"NotSuperset": "⊃⃒",
	"NotSupersetEqual": "⊉",
	"NotTilde": "≁",
	"NotTildeEqual": "≄",
	"NotTildeFullEqual": "≇",
	"NotTildeTilde": "≉",
	"NotVerticalBar": "∤",
	"Nscr": "𝒩",
	"Ntild": "Ñ",
	"Ntilde": "Ñ",
	"Nu": "Ν",
	"OElig": "Œ",
	"Oacut": "Ó",
	"Oacute": "Ó",
	"Ocir": "Ô",
	"Ocirc": "Ô",
	"Ocy": "О",
	"Odblac": "Ő",
	"Ofr": "𝔒",
	"Ograv": "Ò",
	"Ograve": "Ò",
	"Omacr": "Ō",
	"Omega": "Ω",
	"Omicron": "Ο",
	"Oopf": "𝕆",
	"OpenCurlyDoubleQuote": "“",
	"OpenCurlyQuote": "‘",
	"Or": "⩔",
	"Oscr": "𝒪",
	"Oslas": "Ø",
	"Oslash": "Ø",
	"Otild": "Õ",
	"Otilde": "Õ",
	"Otimes": "⨷",
	"Oum": "Ö",
	"Ouml": "Ö",
	"OverBar": "‾",
	"OverBrace": "⏞",
	"OverBracket": "⎴",
	"OverParenthesis": "⏜",
	"PartialD": "∂",
	"Pcy": "П",
	"Pfr": "𝔓",
	"Phi": "Φ",
	"Pi": "Π",
	"PlusMinus": "±",
	"Poincareplane": "ℌ",
	"Popf": "ℙ",
	"Pr": "⪻",
	"Precedes": "≺",
	"PrecedesEqual": "⪯",
	"PrecedesSlantEqual": "≼",
	"PrecedesTilde": "≾",
	"Prime": "″",
	"Product": "∏",
	"Proportion": "∷",
	"Proportional": "∝",
	"Pscr": "𝒫",
	"Psi": "Ψ",
	"QUO": "\"",
	"QUOT": "\"",
	"Qfr": "𝔔",
	"Qopf": "ℚ",
	"Qscr": "𝒬",
	"RBarr": "⤐",
	"RE": "®",
	"REG": "®",
	"Racute": "Ŕ",
	"Rang": "⟫",
	"Rarr": "↠",
	"Rarrtl": "⤖",
	"Rcaron": "Ř",
	"Rcedil": "Ŗ",
	"Rcy": "Р",
	"Re": "ℜ",
	"ReverseElement": "∋",
	"ReverseEquilibrium": "⇋",
	"ReverseUpEquilibrium": "⥯",
	"Rfr": "ℜ",
	"Rho": "Ρ",
	"RightAngleBracket": "⟩",
	"RightArrow": "→",
	"RightArrowBar": "⇥",
	"RightArrowLeftArrow": "⇄",
	"RightCeiling": "⌉",
	"RightDoubleBracket": "⟧",
	"RightDownTeeVector": "⥝",
	"RightDownVector": "⇂",
	"RightDownVectorBar": "⥕",
	"RightFloor": "⌋",
	"RightTee": "⊢",
	"RightTeeArrow": "↦",
	"RightTeeVector": "⥛",
	"RightTriangle": "⊳",
	"RightTriangleBar": "⧐",
	"RightTriangleEqual": "⊵",
	"RightUpDownVector": "⥏",
	"RightUpTeeVector": "⥜",
	"RightUpVector": "↾",
	"RightUpVectorBar": "⥔",
	"RightVector": "⇀",
	"RightVectorBar": "⥓",
	"Rightarrow": "⇒",
	"Ropf": "ℝ",
	"RoundImplies": "⥰",
	"Rrightarrow": "⇛",
	"Rscr": "ℛ",
	"Rsh": "↱",
	"RuleDelayed": "⧴",
	"SHCHcy": "Щ",
	"SHcy": "Ш",
	"SOFTcy": "Ь",
	"Sacute": "Ś",
	"Sc": "⪼",
	"Scaron": "Š",
	"Scedil": "Ş",
	"Scirc": "Ŝ",
	"Scy": "С",
	"Sfr": "𝔖",
	"ShortDownArrow": "↓",
	"ShortLeftArrow": "←",
	"ShortRightArrow": "→",
	"ShortUpArrow": "↑",
	"Sigma": "Σ",
	"SmallCircle": "∘",
	"Sopf": "𝕊",
	"Sqrt": "√",
	"Square": "□",
	"SquareIntersection": "⊓",
	"SquareSubset": "⊏",
	"SquareSubsetEqual": "⊑",
	"SquareSuperset": "⊐",
	"SquareSupersetEqual": "⊒",
	"SquareUnion": "⊔",
	"Sscr": "𝒮",
	"Star": "⋆",
	"Sub": "⋐",
	"Subset": "⋐",
	"SubsetEqual": "⊆",
	"Succeeds": "≻",
	"SucceedsEqual": "⪰",
	"SucceedsSlantEqual": "≽",
	"SucceedsTilde": "≿",
	"SuchThat": "∋",
	"Sum": "∑",
	"Sup": "⋑",
	"Superset": "⊃",
	"SupersetEqual": "⊇",
	"Supset": "⋑",
	"THOR": "Þ",
	"THORN": "Þ",
	"TRADE": "™",
	"TSHcy": "Ћ",
	"TScy": "Ц",
	"Tab": "\t",
	"Tau": "Τ",
	"Tcaron": "Ť",
	"Tcedil": "Ţ",
	"Tcy": "Т",
	"Tfr": "𝔗",
	"Therefore": "∴",
	"Theta": "Θ",
	"ThickSpace": "  ",
	"ThinSpace": " ",
	"Tilde": "∼",
	"TildeEqual": "≃",
	"TildeFullEqual": "≅",
	"TildeTilde": "≈",
	"Topf": "𝕋",
	"TripleDot": "⃛",
	"Tscr": "𝒯",
	"Tstrok": "Ŧ",
	"Uacut": "Ú",
	"Uacute": "Ú",
	"Uarr": "↟",
	"Uarrocir": "⥉",
	"Ubrcy": "Ў",
	"Ubreve": "Ŭ",
	"Ucir": "Û",
	"Ucirc": "Û",
	"Ucy": "У",
	"Udblac": "Ű",
	"Ufr": "𝔘",
	"Ugrav": "Ù",
	"Ugrave": "Ù",
	"Umacr": "Ū",
	"UnderBar": "_",
	"UnderBrace": "⏟",
	"UnderBracket": "⎵",
	"UnderParenthesis": "⏝",
	"Union": "⋃",
	"UnionPlus": "⊎",
	"Uogon": "Ų",
	"Uopf": "𝕌",
	"UpArrow": "↑",
	"UpArrowBar": "⤒",
	"UpArrowDownArrow": "⇅",
	"UpDownArrow": "↕",
	"UpEquilibrium": "⥮",
	"UpTee": "⊥",
	"UpTeeArrow": "↥",
	"Uparrow": "⇑",
	"Updownarrow": "⇕",
	"UpperLeftArrow": "↖",
	"UpperRightArrow": "↗",
	"Upsi": "ϒ",
	"Upsilon": "Υ",
	"Uring": "Ů",
	"Uscr": "𝒰",
	"Utilde": "Ũ",
	"Uum": "Ü",
	"Uuml": "Ü",
	"VDash": "⊫",
	"Vbar": "⫫",
	"Vcy": "В",
	"Vdash": "⊩",
	"Vdashl": "⫦",
	"Vee": "⋁",
	"Verbar": "‖",
	"Vert": "‖",
	"VerticalBar": "∣",
	"VerticalLine": "|",
	"VerticalSeparator": "❘",
	"VerticalTilde": "≀",
	"VeryThinSpace": " ",
	"Vfr": "𝔙",
	"Vopf": "𝕍",
	"Vscr": "𝒱",
	"Vvdash": "⊪",
	"Wcirc": "Ŵ",
	"Wedge": "⋀",
	"Wfr": "𝔚",
	"Wopf": "𝕎",
	"Wscr": "𝒲",
	"Xfr": "𝔛",
	"Xi": "Ξ",
	"Xopf": "𝕏",
	"Xscr": "𝒳",
	"YAcy": "Я",
	"YIcy": "Ї",
	"YUcy": "Ю",
	"Yacut": "Ý",
	"Yacute": "Ý",
	"Ycirc": "Ŷ",
	"Ycy": "Ы",
	"Yfr": "𝔜",
	"Yopf": "𝕐",
	"Yscr": "𝒴",
	"Yuml": "Ÿ",
	"ZHcy": "Ж",
	"Zacute": "Ź",
	"Zcaron": "Ž",
	"Zcy": "З",
	"Zdot": "Ż",
	"ZeroWidthSpace": "​",
	"Zeta": "Ζ",
	"Zfr": "ℨ",
	"Zopf": "ℤ",
	"Zscr": "𝒵",
	"aacut": "á",
	"aacute": "á",
	"abreve": "ă",
	"ac": "∾",
	"acE": "∾̳",
	"acd": "∿",
	"acir": "â",
	"acirc": "â",
	"acut": "´",
	"acute": "´",
	"acy": "а",
	"aeli": "æ",
	"aelig": "æ",
	"af": "⁡",
	"afr": "𝔞",
	"agrav": "à",
	"agrave": "à",
	"alefsym": "ℵ",
	"aleph": "ℵ",
	"alpha": "α",
	"amacr": "ā",
	"amalg": "⨿",
	"am": "&",
	"amp": "&",
	"and": "∧",
	"andand": "⩕",
	"andd": "⩜",
	"andslope": "⩘",
	"andv": "⩚",
	"ang": "∠",
	"ange": "⦤",
	"angle": "∠",
	"angmsd": "∡",
	"angmsdaa": "⦨",
	"angmsdab": "⦩",
	"angmsdac": "⦪",
	"angmsdad": "⦫",
	"angmsdae": "⦬",
	"angmsdaf": "⦭",
	"angmsdag": "⦮",
	"angmsdah": "⦯",
	"angrt": "∟",
	"angrtvb": "⊾",
	"angrtvbd": "⦝",
	"angsph": "∢",
	"angst": "Å",
	"angzarr": "⍼",
	"aogon": "ą",
	"aopf": "𝕒",
	"ap": "≈",
	"apE": "⩰",
	"apacir": "⩯",
	"ape": "≊",
	"apid": "≋",
	"apos": "'",
	"approx": "≈",
	"approxeq": "≊",
	"arin": "å",
	"aring": "å",
	"ascr": "𝒶",
	"ast": "*",
	"asymp": "≈",
	"asympeq": "≍",
	"atild": "ã",
	"atilde": "ã",
	"aum": "ä",
	"auml": "ä",
	"awconint": "∳",
	"awint": "⨑",
	"bNot": "⫭",
	"backcong": "≌",
	"backepsilon": "϶",
	"backprime": "‵",
	"backsim": "∽",
	"backsimeq": "⋍",
	"barvee": "⊽",
	"barwed": "⌅",
	"barwedge": "⌅",
	"bbrk": "⎵",
	"bbrktbrk": "⎶",
	"bcong": "≌",
	"bcy": "б",
	"bdquo": "„",
	"becaus": "∵",
	"because": "∵",
	"bemptyv": "⦰",
	"bepsi": "϶",
	"bernou": "ℬ",
	"beta": "β",
	"beth": "ℶ",
	"between": "≬",
	"bfr": "𝔟",
	"bigcap": "⋂",
	"bigcirc": "◯",
	"bigcup": "⋃",
	"bigodot": "⨀",
	"bigoplus": "⨁",
	"bigotimes": "⨂",
	"bigsqcup": "⨆",
	"bigstar": "★",
	"bigtriangledown": "▽",
	"bigtriangleup": "△",
	"biguplus": "⨄",
	"bigvee": "⋁",
	"bigwedge": "⋀",
	"bkarow": "⤍",
	"blacklozenge": "⧫",
	"blacksquare": "▪",
	"blacktriangle": "▴",
	"blacktriangledown": "▾",
	"blacktriangleleft": "◂",
	"blacktriangleright": "▸",
	"blank": "␣",
	"blk12": "▒",
	"blk14": "░",
	"blk34": "▓",
	"block": "█",
	"bne": "=⃥",
	"bnequiv": "≡⃥",
	"bnot": "⌐",
	"bopf": "𝕓",
	"bot": "⊥",
	"bottom": "⊥",
	"bowtie": "⋈",
	"boxDL": "╗",
	"boxDR": "╔",
	"boxDl": "╖",
	"boxDr": "╓",
	"boxH": "═",
	"boxHD": "╦",
	"boxHU": "╩",
	"boxHd": "╤",
	"boxHu": "╧",
	"boxUL": "╝",
	"boxUR": "╚",
	"boxUl": "╜",
	"boxUr": "╙",
	"boxV": "║",
	"boxVH": "╬",
	"boxVL": "╣",
	"boxVR": "╠",
	"boxVh": "╫",
	"boxVl": "╢",
	"boxVr": "╟",
	"boxbox": "⧉",
	"boxdL": "╕",
	"boxdR": "╒",
	"boxdl": "┐",
	"boxdr": "┌",
	"boxh": "─",
	"boxhD": "╥",
	"boxhU": "╨",
	"boxhd": "┬",
	"boxhu": "┴",
	"boxminus": "⊟",
	"boxplus": "⊞",
	"boxtimes": "⊠",
	"boxuL": "╛",
	"boxuR": "╘",
	"boxul": "┘",
	"boxur": "└",
	"boxv": "│",
	"boxvH": "╪",
	"boxvL": "╡",
	"boxvR": "╞",
	"boxvh": "┼",
	"boxvl": "┤",
	"boxvr": "├",
	"bprime": "‵",
	"breve": "˘",
	"brvba": "¦",
	"brvbar": "¦",
	"bscr": "𝒷",
	"bsemi": "⁏",
	"bsim": "∽",
	"bsime": "⋍",
	"bsol": "\\",
	"bsolb": "⧅",
	"bsolhsub": "⟈",
	"bull": "•",
	"bullet": "•",
	"bump": "≎",
	"bumpE": "⪮",
	"bumpe": "≏",
	"bumpeq": "≏",
	"cacute": "ć",
	"cap": "∩",
	"capand": "⩄",
	"capbrcup": "⩉",
	"capcap": "⩋",
	"capcup": "⩇",
	"capdot": "⩀",
	"caps": "∩︀",
	"caret": "⁁",
	"caron": "ˇ",
	"ccaps": "⩍",
	"ccaron": "č",
	"ccedi": "ç",
	"ccedil": "ç",
	"ccirc": "ĉ",
	"ccups": "⩌",
	"ccupssm": "⩐",
	"cdot": "ċ",
	"cedi": "¸",
	"cedil": "¸",
	"cemptyv": "⦲",
	"cen": "¢",
	"cent": "¢",
	"centerdot": "·",
	"cfr": "𝔠",
	"chcy": "ч",
	"check": "✓",
	"checkmark": "✓",
	"chi": "χ",
	"cir": "○",
	"cirE": "⧃",
	"circ": "ˆ",
	"circeq": "≗",
	"circlearrowleft": "↺",
	"circlearrowright": "↻",
	"circledR": "®",
	"circledS": "Ⓢ",
	"circledast": "⊛",
	"circledcirc": "⊚",
	"circleddash": "⊝",
	"cire": "≗",
	"cirfnint": "⨐",
	"cirmid": "⫯",
	"cirscir": "⧂",
	"clubs": "♣",
	"clubsuit": "♣",
	"colon": ":",
	"colone": "≔",
	"coloneq": "≔",
	"comma": ",",
	"commat": "@",
	"comp": "∁",
	"compfn": "∘",
	"complement": "∁",
	"complexes": "ℂ",
	"cong": "≅",
	"congdot": "⩭",
	"conint": "∮",
	"copf": "𝕔",
	"coprod": "∐",
	"cop": "©",
	"copy": "©",
	"copysr": "℗",
	"crarr": "↵",
	"cross": "✗",
	"cscr": "𝒸",
	"csub": "⫏",
	"csube": "⫑",
	"csup": "⫐",
	"csupe": "⫒",
	"ctdot": "⋯",
	"cudarrl": "⤸",
	"cudarrr": "⤵",
	"cuepr": "⋞",
	"cuesc": "⋟",
	"cularr": "↶",
	"cularrp": "⤽",
	"cup": "∪",
	"cupbrcap": "⩈",
	"cupcap": "⩆",
	"cupcup": "⩊",
	"cupdot": "⊍",
	"cupor": "⩅",
	"cups": "∪︀",
	"curarr": "↷",
	"curarrm": "⤼",
	"curlyeqprec": "⋞",
	"curlyeqsucc": "⋟",
	"curlyvee": "⋎",
	"curlywedge": "⋏",
	"curre": "¤",
	"curren": "¤",
	"curvearrowleft": "↶",
	"curvearrowright": "↷",
	"cuvee": "⋎",
	"cuwed": "⋏",
	"cwconint": "∲",
	"cwint": "∱",
	"cylcty": "⌭",
	"dArr": "⇓",
	"dHar": "⥥",
	"dagger": "†",
	"daleth": "ℸ",
	"darr": "↓",
	"dash": "‐",
	"dashv": "⊣",
	"dbkarow": "⤏",
	"dblac": "˝",
	"dcaron": "ď",
	"dcy": "д",
	"dd": "ⅆ",
	"ddagger": "‡",
	"ddarr": "⇊",
	"ddotseq": "⩷",
	"de": "°",
	"deg": "°",
	"delta": "δ",
	"demptyv": "⦱",
	"dfisht": "⥿",
	"dfr": "𝔡",
	"dharl": "⇃",
	"dharr": "⇂",
	"diam": "⋄",
	"diamond": "⋄",
	"diamondsuit": "♦",
	"diams": "♦",
	"die": "¨",
	"digamma": "ϝ",
	"disin": "⋲",
	"div": "÷",
	"divid": "÷",
	"divide": "÷",
	"divideontimes": "⋇",
	"divonx": "⋇",
	"djcy": "ђ",
	"dlcorn": "⌞",
	"dlcrop": "⌍",
	"dollar": "$",
	"dopf": "𝕕",
	"dot": "˙",
	"doteq": "≐",
	"doteqdot": "≑",
	"dotminus": "∸",
	"dotplus": "∔",
	"dotsquare": "⊡",
	"doublebarwedge": "⌆",
	"downarrow": "↓",
	"downdownarrows": "⇊",
	"downharpoonleft": "⇃",
	"downharpoonright": "⇂",
	"drbkarow": "⤐",
	"drcorn": "⌟",
	"drcrop": "⌌",
	"dscr": "𝒹",
	"dscy": "ѕ",
	"dsol": "⧶",
	"dstrok": "đ",
	"dtdot": "⋱",
	"dtri": "▿",
	"dtrif": "▾",
	"duarr": "⇵",
	"duhar": "⥯",
	"dwangle": "⦦",
	"dzcy": "џ",
	"dzigrarr": "⟿",
	"eDDot": "⩷",
	"eDot": "≑",
	"eacut": "é",
	"eacute": "é",
	"easter": "⩮",
	"ecaron": "ě",
	"ecir": "ê",
	"ecirc": "ê",
	"ecolon": "≕",
	"ecy": "э",
	"edot": "ė",
	"ee": "ⅇ",
	"efDot": "≒",
	"efr": "𝔢",
	"eg": "⪚",
	"egrav": "è",
	"egrave": "è",
	"egs": "⪖",
	"egsdot": "⪘",
	"el": "⪙",
	"elinters": "⏧",
	"ell": "ℓ",
	"els": "⪕",
	"elsdot": "⪗",
	"emacr": "ē",
	"empty": "∅",
	"emptyset": "∅",
	"emptyv": "∅",
	"emsp13": " ",
	"emsp14": " ",
	"emsp": " ",
	"eng": "ŋ",
	"ensp": " ",
	"eogon": "ę",
	"eopf": "𝕖",
	"epar": "⋕",
	"eparsl": "⧣",
	"eplus": "⩱",
	"epsi": "ε",
	"epsilon": "ε",
	"epsiv": "ϵ",
	"eqcirc": "≖",
	"eqcolon": "≕",
	"eqsim": "≂",
	"eqslantgtr": "⪖",
	"eqslantless": "⪕",
	"equals": "=",
	"equest": "≟",
	"equiv": "≡",
	"equivDD": "⩸",
	"eqvparsl": "⧥",
	"erDot": "≓",
	"erarr": "⥱",
	"escr": "ℯ",
	"esdot": "≐",
	"esim": "≂",
	"eta": "η",
	"et": "ð",
	"eth": "ð",
	"eum": "ë",
	"euml": "ë",
	"euro": "€",
	"excl": "!",
	"exist": "∃",
	"expectation": "ℰ",
	"exponentiale": "ⅇ",
	"fallingdotseq": "≒",
	"fcy": "ф",
	"female": "♀",
	"ffilig": "ﬃ",
	"fflig": "ﬀ",
	"ffllig": "ﬄ",
	"ffr": "𝔣",
	"filig": "ﬁ",
	"fjlig": "fj",
	"flat": "♭",
	"fllig": "ﬂ",
	"fltns": "▱",
	"fnof": "ƒ",
	"fopf": "𝕗",
	"forall": "∀",
	"fork": "⋔",
	"forkv": "⫙",
	"fpartint": "⨍",
	"frac1": "¼",
	"frac12": "½",
	"frac13": "⅓",
	"frac14": "¼",
	"frac15": "⅕",
	"frac16": "⅙",
	"frac18": "⅛",
	"frac23": "⅔",
	"frac25": "⅖",
	"frac3": "¾",
	"frac34": "¾",
	"frac35": "⅗",
	"frac38": "⅜",
	"frac45": "⅘",
	"frac56": "⅚",
	"frac58": "⅝",
	"frac78": "⅞",
	"frasl": "⁄",
	"frown": "⌢",
	"fscr": "𝒻",
	"gE": "≧",
	"gEl": "⪌",
	"gacute": "ǵ",
	"gamma": "γ",
	"gammad": "ϝ",
	"gap": "⪆",
	"gbreve": "ğ",
	"gcirc": "ĝ",
	"gcy": "г",
	"gdot": "ġ",
	"ge": "≥",
	"gel": "⋛",
	"geq": "≥",
	"geqq": "≧",
	"geqslant": "⩾",
	"ges": "⩾",
	"gescc": "⪩",
	"gesdot": "⪀",
	"gesdoto": "⪂",
	"gesdotol": "⪄",
	"gesl": "⋛︀",
	"gesles": "⪔",
	"gfr": "𝔤",
	"gg": "≫",
	"ggg": "⋙",
	"gimel": "ℷ",
	"gjcy": "ѓ",
	"gl": "≷",
	"glE": "⪒",
	"gla": "⪥",
	"glj": "⪤",
	"gnE": "≩",
	"gnap": "⪊",
	"gnapprox": "⪊",
	"gne": "⪈",
	"gneq": "⪈",
	"gneqq": "≩",
	"gnsim": "⋧",
	"gopf": "𝕘",
	"grave": "`",
	"gscr": "ℊ",
	"gsim": "≳",
	"gsime": "⪎",
	"gsiml": "⪐",
	"g": ">",
	"gt": ">",
	"gtcc": "⪧",
	"gtcir": "⩺",
	"gtdot": "⋗",
	"gtlPar": "⦕",
	"gtquest": "⩼",
	"gtrapprox": "⪆",
	"gtrarr": "⥸",
	"gtrdot": "⋗",
	"gtreqless": "⋛",
	"gtreqqless": "⪌",
	"gtrless": "≷",
	"gtrsim": "≳",
	"gvertneqq": "≩︀",
	"gvnE": "≩︀",
	"hArr": "⇔",
	"hairsp": " ",
	"half": "½",
	"hamilt": "ℋ",
	"hardcy": "ъ",
	"harr": "↔",
	"harrcir": "⥈",
	"harrw": "↭",
	"hbar": "ℏ",
	"hcirc": "ĥ",
	"hearts": "♥",
	"heartsuit": "♥",
	"hellip": "…",
	"hercon": "⊹",
	"hfr": "𝔥",
	"hksearow": "⤥",
	"hkswarow": "⤦",
	"hoarr": "⇿",
	"homtht": "∻",
	"hookleftarrow": "↩",
	"hookrightarrow": "↪",
	"hopf": "𝕙",
	"horbar": "―",
	"hscr": "𝒽",
	"hslash": "ℏ",
	"hstrok": "ħ",
	"hybull": "⁃",
	"hyphen": "‐",
	"iacut": "í",
	"iacute": "í",
	"ic": "⁣",
	"icir": "î",
	"icirc": "î",
	"icy": "и",
	"iecy": "е",
	"iexc": "¡",
	"iexcl": "¡",
	"iff": "⇔",
	"ifr": "𝔦",
	"igrav": "ì",
	"igrave": "ì",
	"ii": "ⅈ",
	"iiiint": "⨌",
	"iiint": "∭",
	"iinfin": "⧜",
	"iiota": "℩",
	"ijlig": "ĳ",
	"imacr": "ī",
	"image": "ℑ",
	"imagline": "ℐ",
	"imagpart": "ℑ",
	"imath": "ı",
	"imof": "⊷",
	"imped": "Ƶ",
	"in": "∈",
	"incare": "℅",
	"infin": "∞",
	"infintie": "⧝",
	"inodot": "ı",
	"int": "∫",
	"intcal": "⊺",
	"integers": "ℤ",
	"intercal": "⊺",
	"intlarhk": "⨗",
	"intprod": "⨼",
	"iocy": "ё",
	"iogon": "į",
	"iopf": "𝕚",
	"iota": "ι",
	"iprod": "⨼",
	"iques": "¿",
	"iquest": "¿",
	"iscr": "𝒾",
	"isin": "∈",
	"isinE": "⋹",
	"isindot": "⋵",
	"isins": "⋴",
	"isinsv": "⋳",
	"isinv": "∈",
	"it": "⁢",
	"itilde": "ĩ",
	"iukcy": "і",
	"ium": "ï",
	"iuml": "ï",
	"jcirc": "ĵ",
	"jcy": "й",
	"jfr": "𝔧",
	"jmath": "ȷ",
	"jopf": "𝕛",
	"jscr": "𝒿",
	"jsercy": "ј",
	"jukcy": "є",
	"kappa": "κ",
	"kappav": "ϰ",
	"kcedil": "ķ",
	"kcy": "к",
	"kfr": "𝔨",
	"kgreen": "ĸ",
	"khcy": "х",
	"kjcy": "ќ",
	"kopf": "𝕜",
	"kscr": "𝓀",
	"lAarr": "⇚",
	"lArr": "⇐",
	"lAtail": "⤛",
	"lBarr": "⤎",
	"lE": "≦",
	"lEg": "⪋",
	"lHar": "⥢",
	"lacute": "ĺ",
	"laemptyv": "⦴",
	"lagran": "ℒ",
	"lambda": "λ",
	"lang": "⟨",
	"langd": "⦑",
	"langle": "⟨",
	"lap": "⪅",
	"laqu": "«",
	"laquo": "«",
	"larr": "←",
	"larrb": "⇤",
	"larrbfs": "⤟",
	"larrfs": "⤝",
	"larrhk": "↩",
	"larrlp": "↫",
	"larrpl": "⤹",
	"larrsim": "⥳",
	"larrtl": "↢",
	"lat": "⪫",
	"latail": "⤙",
	"late": "⪭",
	"lates": "⪭︀",
	"lbarr": "⤌",
	"lbbrk": "❲",
	"lbrace": "{",
	"lbrack": "[",
	"lbrke": "⦋",
	"lbrksld": "⦏",
	"lbrkslu": "⦍",
	"lcaron": "ľ",
	"lcedil": "ļ",
	"lceil": "⌈",
	"lcub": "{",
	"lcy": "л",
	"ldca": "⤶",
	"ldquo": "“",
	"ldquor": "„",
	"ldrdhar": "⥧",
	"ldrushar": "⥋",
	"ldsh": "↲",
	"le": "≤",
	"leftarrow": "←",
	"leftarrowtail": "↢",
	"leftharpoondown": "↽",
	"leftharpoonup": "↼",
	"leftleftarrows": "⇇",
	"leftrightarrow": "↔",
	"leftrightarrows": "⇆",
	"leftrightharpoons": "⇋",
	"leftrightsquigarrow": "↭",
	"leftthreetimes": "⋋",
	"leg": "⋚",
	"leq": "≤",
	"leqq": "≦",
	"leqslant": "⩽",
	"les": "⩽",
	"lescc": "⪨",
	"lesdot": "⩿",
	"lesdoto": "⪁",
	"lesdotor": "⪃",
	"lesg": "⋚︀",
	"lesges": "⪓",
	"lessapprox": "⪅",
	"lessdot": "⋖",
	"lesseqgtr": "⋚",
	"lesseqqgtr": "⪋",
	"lessgtr": "≶",
	"lesssim": "≲",
	"lfisht": "⥼",
	"lfloor": "⌊",
	"lfr": "𝔩",
	"lg": "≶",
	"lgE": "⪑",
	"lhard": "↽",
	"lharu": "↼",
	"lharul": "⥪",
	"lhblk": "▄",
	"ljcy": "љ",
	"ll": "≪",
	"llarr": "⇇",
	"llcorner": "⌞",
	"llhard": "⥫",
	"lltri": "◺",
	"lmidot": "ŀ",
	"lmoust": "⎰",
	"lmoustache": "⎰",
	"lnE": "≨",
	"lnap": "⪉",
	"lnapprox": "⪉",
	"lne": "⪇",
	"lneq": "⪇",
	"lneqq": "≨",
	"lnsim": "⋦",
	"loang": "⟬",
	"loarr": "⇽",
	"lobrk": "⟦",
	"longleftarrow": "⟵",
	"longleftrightarrow": "⟷",
	"longmapsto": "⟼",
	"longrightarrow": "⟶",
	"looparrowleft": "↫",
	"looparrowright": "↬",
	"lopar": "⦅",
	"lopf": "𝕝",
	"loplus": "⨭",
	"lotimes": "⨴",
	"lowast": "∗",
	"lowbar": "_",
	"loz": "◊",
	"lozenge": "◊",
	"lozf": "⧫",
	"lpar": "(",
	"lparlt": "⦓",
	"lrarr": "⇆",
	"lrcorner": "⌟",
	"lrhar": "⇋",
	"lrhard": "⥭",
	"lrm": "‎",
	"lrtri": "⊿",
	"lsaquo": "‹",
	"lscr": "𝓁",
	"lsh": "↰",
	"lsim": "≲",
	"lsime": "⪍",
	"lsimg": "⪏",
	"lsqb": "[",
	"lsquo": "‘",
	"lsquor": "‚",
	"lstrok": "ł",
	"l": "<",
	"lt": "<",
	"ltcc": "⪦",
	"ltcir": "⩹",
	"ltdot": "⋖",
	"lthree": "⋋",
	"ltimes": "⋉",
	"ltlarr": "⥶",
	"ltquest": "⩻",
	"ltrPar": "⦖",
	"ltri": "◃",
	"ltrie": "⊴",
	"ltrif": "◂",
	"lurdshar": "⥊",
	"luruhar": "⥦",
	"lvertneqq": "≨︀",
	"lvnE": "≨︀",
	"mDDot": "∺",
	"mac": "¯",
	"macr": "¯",
	"male": "♂",
	"malt": "✠",
	"maltese": "✠",
	"map": "↦",
	"mapsto": "↦",
	"mapstodown": "↧",
	"mapstoleft": "↤",
	"mapstoup": "↥",
	"marker": "▮",
	"mcomma": "⨩",
	"mcy": "м",
	"mdash": "—",
	"measuredangle": "∡",
	"mfr": "𝔪",
	"mho": "℧",
	"micr": "µ",
	"micro": "µ",
	"mid": "∣",
	"midast": "*",
	"midcir": "⫰",
	"middo": "·",
	"middot": "·",
	"minus": "−",
	"minusb": "⊟",
	"minusd": "∸",
	"minusdu": "⨪",
	"mlcp": "⫛",
	"mldr": "…",
	"mnplus": "∓",
	"models": "⊧",
	"mopf": "𝕞",
	"mp": "∓",
	"mscr": "𝓂",
	"mstpos": "∾",
	"mu": "μ",
	"multimap": "⊸",
	"mumap": "⊸",
	"nGg": "⋙̸",
	"nGt": "≫⃒",
	"nGtv": "≫̸",
	"nLeftarrow": "⇍",
	"nLeftrightarrow": "⇎",
	"nLl": "⋘̸",
	"nLt": "≪⃒",
	"nLtv": "≪̸",
	"nRightarrow": "⇏",
	"nVDash": "⊯",
	"nVdash": "⊮",
	"nabla": "∇",
	"nacute": "ń",
	"nang": "∠⃒",
	"nap": "≉",
	"napE": "⩰̸",
	"napid": "≋̸",
	"napos": "ŉ",
	"napprox": "≉",
	"natur": "♮",
	"natural": "♮",
	"naturals": "ℕ",
	"nbs": " ",
	"nbsp": " ",
	"nbump": "≎̸",
	"nbumpe": "≏̸",
	"ncap": "⩃",
	"ncaron": "ň",
	"ncedil": "ņ",
	"ncong": "≇",
	"ncongdot": "⩭̸",
	"ncup": "⩂",
	"ncy": "н",
	"ndash": "–",
	"ne": "≠",
	"neArr": "⇗",
	"nearhk": "⤤",
	"nearr": "↗",
	"nearrow": "↗",
	"nedot": "≐̸",
	"nequiv": "≢",
	"nesear": "⤨",
	"nesim": "≂̸",
	"nexist": "∄",
	"nexists": "∄",
	"nfr": "𝔫",
	"ngE": "≧̸",
	"nge": "≱",
	"ngeq": "≱",
	"ngeqq": "≧̸",
	"ngeqslant": "⩾̸",
	"nges": "⩾̸",
	"ngsim": "≵",
	"ngt": "≯",
	"ngtr": "≯",
	"nhArr": "⇎",
	"nharr": "↮",
	"nhpar": "⫲",
	"ni": "∋",
	"nis": "⋼",
	"nisd": "⋺",
	"niv": "∋",
	"njcy": "њ",
	"nlArr": "⇍",
	"nlE": "≦̸",
	"nlarr": "↚",
	"nldr": "‥",
	"nle": "≰",
	"nleftarrow": "↚",
	"nleftrightarrow": "↮",
	"nleq": "≰",
	"nleqq": "≦̸",
	"nleqslant": "⩽̸",
	"nles": "⩽̸",
	"nless": "≮",
	"nlsim": "≴",
	"nlt": "≮",
	"nltri": "⋪",
	"nltrie": "⋬",
	"nmid": "∤",
	"nopf": "𝕟",
	"no": "¬",
	"not": "¬",
	"notin": "∉",
	"notinE": "⋹̸",
	"notindot": "⋵̸",
	"notinva": "∉",
	"notinvb": "⋷",
	"notinvc": "⋶",
	"notni": "∌",
	"notniva": "∌",
	"notnivb": "⋾",
	"notnivc": "⋽",
	"npar": "∦",
	"nparallel": "∦",
	"nparsl": "⫽⃥",
	"npart": "∂̸",
	"npolint": "⨔",
	"npr": "⊀",
	"nprcue": "⋠",
	"npre": "⪯̸",
	"nprec": "⊀",
	"npreceq": "⪯̸",
	"nrArr": "⇏",
	"nrarr": "↛",
	"nrarrc": "⤳̸",
	"nrarrw": "↝̸",
	"nrightarrow": "↛",
	"nrtri": "⋫",
	"nrtrie": "⋭",
	"nsc": "⊁",
	"nsccue": "⋡",
	"nsce": "⪰̸",
	"nscr": "𝓃",
	"nshortmid": "∤",
	"nshortparallel": "∦",
	"nsim": "≁",
	"nsime": "≄",
	"nsimeq": "≄",
	"nsmid": "∤",
	"nspar": "∦",
	"nsqsube": "⋢",
	"nsqsupe": "⋣",
	"nsub": "⊄",
	"nsubE": "⫅̸",
	"nsube": "⊈",
	"nsubset": "⊂⃒",
	"nsubseteq": "⊈",
	"nsubseteqq": "⫅̸",
	"nsucc": "⊁",
	"nsucceq": "⪰̸",
	"nsup": "⊅",
	"nsupE": "⫆̸",
	"nsupe": "⊉",
	"nsupset": "⊃⃒",
	"nsupseteq": "⊉",
	"nsupseteqq": "⫆̸",
	"ntgl": "≹",
	"ntild": "ñ",
	"ntilde": "ñ",
	"ntlg": "≸",
	"ntriangleleft": "⋪",
	"ntrianglelefteq": "⋬",
	"ntriangleright": "⋫",
	"ntrianglerighteq": "⋭",
	"nu": "ν",
	"num": "#",
	"numero": "№",
	"numsp": " ",
	"nvDash": "⊭",
	"nvHarr": "⤄",
	"nvap": "≍⃒",
	"nvdash": "⊬",
	"nvge": "≥⃒",
	"nvgt": ">⃒",
	"nvinfin": "⧞",
	"nvlArr": "⤂",
	"nvle": "≤⃒",
	"nvlt": "<⃒",
	"nvltrie": "⊴⃒",
	"nvrArr": "⤃",
	"nvrtrie": "⊵⃒",
	"nvsim": "∼⃒",
	"nwArr": "⇖",
	"nwarhk": "⤣",
	"nwarr": "↖",
	"nwarrow": "↖",
	"nwnear": "⤧",
	"oS": "Ⓢ",
	"oacut": "ó",
	"oacute": "ó",
	"oast": "⊛",
	"ocir": "ô",
	"ocirc": "ô",
	"ocy": "о",
	"odash": "⊝",
	"odblac": "ő",
	"odiv": "⨸",
	"odot": "⊙",
	"odsold": "⦼",
	"oelig": "œ",
	"ofcir": "⦿",
	"ofr": "𝔬",
	"ogon": "˛",
	"ograv": "ò",
	"ograve": "ò",
	"ogt": "⧁",
	"ohbar": "⦵",
	"ohm": "Ω",
	"oint": "∮",
	"olarr": "↺",
	"olcir": "⦾",
	"olcross": "⦻",
	"oline": "‾",
	"olt": "⧀",
	"omacr": "ō",
	"omega": "ω",
	"omicron": "ο",
	"omid": "⦶",
	"ominus": "⊖",
	"oopf": "𝕠",
	"opar": "⦷",
	"operp": "⦹",
	"oplus": "⊕",
	"or": "∨",
	"orarr": "↻",
	"ord": "º",
	"order": "ℴ",
	"orderof": "ℴ",
	"ordf": "ª",
	"ordm": "º",
	"origof": "⊶",
	"oror": "⩖",
	"orslope": "⩗",
	"orv": "⩛",
	"oscr": "ℴ",
	"oslas": "ø",
	"oslash": "ø",
	"osol": "⊘",
	"otild": "õ",
	"otilde": "õ",
	"otimes": "⊗",
	"otimesas": "⨶",
	"oum": "ö",
	"ouml": "ö",
	"ovbar": "⌽",
	"par": "¶",
	"para": "¶",
	"parallel": "∥",
	"parsim": "⫳",
	"parsl": "⫽",
	"part": "∂",
	"pcy": "п",
	"percnt": "%",
	"period": ".",
	"permil": "‰",
	"perp": "⊥",
	"pertenk": "‱",
	"pfr": "𝔭",
	"phi": "φ",
	"phiv": "ϕ",
	"phmmat": "ℳ",
	"phone": "☎",
	"pi": "π",
	"pitchfork": "⋔",
	"piv": "ϖ",
	"planck": "ℏ",
	"planckh": "ℎ",
	"plankv": "ℏ",
	"plus": "+",
	"plusacir": "⨣",
	"plusb": "⊞",
	"pluscir": "⨢",
	"plusdo": "∔",
	"plusdu": "⨥",
	"pluse": "⩲",
	"plusm": "±",
	"plusmn": "±",
	"plussim": "⨦",
	"plustwo": "⨧",
	"pm": "±",
	"pointint": "⨕",
	"popf": "𝕡",
	"poun": "£",
	"pound": "£",
	"pr": "≺",
	"prE": "⪳",
	"prap": "⪷",
	"prcue": "≼",
	"pre": "⪯",
	"prec": "≺",
	"precapprox": "⪷",
	"preccurlyeq": "≼",
	"preceq": "⪯",
	"precnapprox": "⪹",
	"precneqq": "⪵",
	"precnsim": "⋨",
	"precsim": "≾",
	"prime": "′",
	"primes": "ℙ",
	"prnE": "⪵",
	"prnap": "⪹",
	"prnsim": "⋨",
	"prod": "∏",
	"profalar": "⌮",
	"profline": "⌒",
	"profsurf": "⌓",
	"prop": "∝",
	"propto": "∝",
	"prsim": "≾",
	"prurel": "⊰",
	"pscr": "𝓅",
	"psi": "ψ",
	"puncsp": " ",
	"qfr": "𝔮",
	"qint": "⨌",
	"qopf": "𝕢",
	"qprime": "⁗",
	"qscr": "𝓆",
	"quaternions": "ℍ",
	"quatint": "⨖",
	"quest": "?",
	"questeq": "≟",
	"quo": "\"",
	"quot": "\"",
	"rAarr": "⇛",
	"rArr": "⇒",
	"rAtail": "⤜",
	"rBarr": "⤏",
	"rHar": "⥤",
	"race": "∽̱",
	"racute": "ŕ",
	"radic": "√",
	"raemptyv": "⦳",
	"rang": "⟩",
	"rangd": "⦒",
	"range": "⦥",
	"rangle": "⟩",
	"raqu": "»",
	"raquo": "»",
	"rarr": "→",
	"rarrap": "⥵",
	"rarrb": "⇥",
	"rarrbfs": "⤠",
	"rarrc": "⤳",
	"rarrfs": "⤞",
	"rarrhk": "↪",
	"rarrlp": "↬",
	"rarrpl": "⥅",
	"rarrsim": "⥴",
	"rarrtl": "↣",
	"rarrw": "↝",
	"ratail": "⤚",
	"ratio": "∶",
	"rationals": "ℚ",
	"rbarr": "⤍",
	"rbbrk": "❳",
	"rbrace": "}",
	"rbrack": "]",
	"rbrke": "⦌",
	"rbrksld": "⦎",
	"rbrkslu": "⦐",
	"rcaron": "ř",
	"rcedil": "ŗ",
	"rceil": "⌉",
	"rcub": "}",
	"rcy": "р",
	"rdca": "⤷",
	"rdldhar": "⥩",
	"rdquo": "”",
	"rdquor": "”",
	"rdsh": "↳",
	"real": "ℜ",
	"realine": "ℛ",
	"realpart": "ℜ",
	"reals": "ℝ",
	"rect": "▭",
	"re": "®",
	"reg": "®",
	"rfisht": "⥽",
	"rfloor": "⌋",
	"rfr": "𝔯",
	"rhard": "⇁",
	"rharu": "⇀",
	"rharul": "⥬",
	"rho": "ρ",
	"rhov": "ϱ",
	"rightarrow": "→",
	"rightarrowtail": "↣",
	"rightharpoondown": "⇁",
	"rightharpoonup": "⇀",
	"rightleftarrows": "⇄",
	"rightleftharpoons": "⇌",
	"rightrightarrows": "⇉",
	"rightsquigarrow": "↝",
	"rightthreetimes": "⋌",
	"ring": "˚",
	"risingdotseq": "≓",
	"rlarr": "⇄",
	"rlhar": "⇌",
	"rlm": "‏",
	"rmoust": "⎱",
	"rmoustache": "⎱",
	"rnmid": "⫮",
	"roang": "⟭",
	"roarr": "⇾",
	"robrk": "⟧",
	"ropar": "⦆",
	"ropf": "𝕣",
	"roplus": "⨮",
	"rotimes": "⨵",
	"rpar": ")",
	"rpargt": "⦔",
	"rppolint": "⨒",
	"rrarr": "⇉",
	"rsaquo": "›",
	"rscr": "𝓇",
	"rsh": "↱",
	"rsqb": "]",
	"rsquo": "’",
	"rsquor": "’",
	"rthree": "⋌",
	"rtimes": "⋊",
	"rtri": "▹",
	"rtrie": "⊵",
	"rtrif": "▸",
	"rtriltri": "⧎",
	"ruluhar": "⥨",
	"rx": "℞",
	"sacute": "ś",
	"sbquo": "‚",
	"sc": "≻",
	"scE": "⪴",
	"scap": "⪸",
	"scaron": "š",
	"sccue": "≽",
	"sce": "⪰",
	"scedil": "ş",
	"scirc": "ŝ",
	"scnE": "⪶",
	"scnap": "⪺",
	"scnsim": "⋩",
	"scpolint": "⨓",
	"scsim": "≿",
	"scy": "с",
	"sdot": "⋅",
	"sdotb": "⊡",
	"sdote": "⩦",
	"seArr": "⇘",
	"searhk": "⤥",
	"searr": "↘",
	"searrow": "↘",
	"sec": "§",
	"sect": "§",
	"semi": ";",
	"seswar": "⤩",
	"setminus": "∖",
	"setmn": "∖",
	"sext": "✶",
	"sfr": "𝔰",
	"sfrown": "⌢",
	"sharp": "♯",
	"shchcy": "щ",
	"shcy": "ш",
	"shortmid": "∣",
	"shortparallel": "∥",
	"sh": "­",
	"shy": "­",
	"sigma": "σ",
	"sigmaf": "ς",
	"sigmav": "ς",
	"sim": "∼",
	"simdot": "⩪",
	"sime": "≃",
	"simeq": "≃",
	"simg": "⪞",
	"simgE": "⪠",
	"siml": "⪝",
	"simlE": "⪟",
	"simne": "≆",
	"simplus": "⨤",
	"simrarr": "⥲",
	"slarr": "←",
	"smallsetminus": "∖",
	"smashp": "⨳",
	"smeparsl": "⧤",
	"smid": "∣",
	"smile": "⌣",
	"smt": "⪪",
	"smte": "⪬",
	"smtes": "⪬︀",
	"softcy": "ь",
	"sol": "/",
	"solb": "⧄",
	"solbar": "⌿",
	"sopf": "𝕤",
	"spades": "♠",
	"spadesuit": "♠",
	"spar": "∥",
	"sqcap": "⊓",
	"sqcaps": "⊓︀",
	"sqcup": "⊔",
	"sqcups": "⊔︀",
	"sqsub": "⊏",
	"sqsube": "⊑",
	"sqsubset": "⊏",
	"sqsubseteq": "⊑",
	"sqsup": "⊐",
	"sqsupe": "⊒",
	"sqsupset": "⊐",
	"sqsupseteq": "⊒",
	"squ": "□",
	"square": "□",
	"squarf": "▪",
	"squf": "▪",
	"srarr": "→",
	"sscr": "𝓈",
	"ssetmn": "∖",
	"ssmile": "⌣",
	"sstarf": "⋆",
	"star": "☆",
	"starf": "★",
	"straightepsilon": "ϵ",
	"straightphi": "ϕ",
	"strns": "¯",
	"sub": "⊂",
	"subE": "⫅",
	"subdot": "⪽",
	"sube": "⊆",
	"subedot": "⫃",
	"submult": "⫁",
	"subnE": "⫋",
	"subne": "⊊",
	"subplus": "⪿",
	"subrarr": "⥹",
	"subset": "⊂",
	"subseteq": "⊆",
	"subseteqq": "⫅",
	"subsetneq": "⊊",
	"subsetneqq": "⫋",
	"subsim": "⫇",
	"subsub": "⫕",
	"subsup": "⫓",
	"succ": "≻",
	"succapprox": "⪸",
	"succcurlyeq": "≽",
	"succeq": "⪰",
	"succnapprox": "⪺",
	"succneqq": "⪶",
	"succnsim": "⋩",
	"succsim": "≿",
	"sum": "∑",
	"sung": "♪",
	"sup": "⊃",
	"sup1": "¹",
	"sup2": "²",
	"sup3": "³",
	"supE": "⫆",
	"supdot": "⪾",
	"supdsub": "⫘",
	"supe": "⊇",
	"supedot": "⫄",
	"suphsol": "⟉",
	"suphsub": "⫗",
	"suplarr": "⥻",
	"supmult": "⫂",
	"supnE": "⫌",
	"supne": "⊋",
	"supplus": "⫀",
	"supset": "⊃",
	"supseteq": "⊇",
	"supseteqq": "⫆",
	"supsetneq": "⊋",
	"supsetneqq": "⫌",
	"supsim": "⫈",
	"supsub": "⫔",
	"supsup": "⫖",
	"swArr": "⇙",
	"swarhk": "⤦",
	"swarr": "↙",
	"swarrow": "↙",
	"swnwar": "⤪",
	"szli": "ß",
	"szlig": "ß",
	"target": "⌖",
	"tau": "τ",
	"tbrk": "⎴",
	"tcaron": "ť",
	"tcedil": "ţ",
	"tcy": "т",
	"tdot": "⃛",
	"telrec": "⌕",
	"tfr": "𝔱",
	"there4": "∴",
	"therefore": "∴",
	"theta": "θ",
	"thetasym": "ϑ",
	"thetav": "ϑ",
	"thickapprox": "≈",
	"thicksim": "∼",
	"thinsp": " ",
	"thkap": "≈",
	"thksim": "∼",
	"thor": "þ",
	"thorn": "þ",
	"tilde": "˜",
	"time": "×",
	"times": "×",
	"timesb": "⊠",
	"timesbar": "⨱",
	"timesd": "⨰",
	"tint": "∭",
	"toea": "⤨",
	"top": "⊤",
	"topbot": "⌶",
	"topcir": "⫱",
	"topf": "𝕥",
	"topfork": "⫚",
	"tosa": "⤩",
	"tprime": "‴",
	"trade": "™",
	"triangle": "▵",
	"triangledown": "▿",
	"triangleleft": "◃",
	"trianglelefteq": "⊴",
	"triangleq": "≜",
	"triangleright": "▹",
	"trianglerighteq": "⊵",
	"tridot": "◬",
	"trie": "≜",
	"triminus": "⨺",
	"triplus": "⨹",
	"trisb": "⧍",
	"tritime": "⨻",
	"trpezium": "⏢",
	"tscr": "𝓉",
	"tscy": "ц",
	"tshcy": "ћ",
	"tstrok": "ŧ",
	"twixt": "≬",
	"twoheadleftarrow": "↞",
	"twoheadrightarrow": "↠",
	"uArr": "⇑",
	"uHar": "⥣",
	"uacut": "ú",
	"uacute": "ú",
	"uarr": "↑",
	"ubrcy": "ў",
	"ubreve": "ŭ",
	"ucir": "û",
	"ucirc": "û",
	"ucy": "у",
	"udarr": "⇅",
	"udblac": "ű",
	"udhar": "⥮",
	"ufisht": "⥾",
	"ufr": "𝔲",
	"ugrav": "ù",
	"ugrave": "ù",
	"uharl": "↿",
	"uharr": "↾",
	"uhblk": "▀",
	"ulcorn": "⌜",
	"ulcorner": "⌜",
	"ulcrop": "⌏",
	"ultri": "◸",
	"umacr": "ū",
	"um": "¨",
	"uml": "¨",
	"uogon": "ų",
	"uopf": "𝕦",
	"uparrow": "↑",
	"updownarrow": "↕",
	"upharpoonleft": "↿",
	"upharpoonright": "↾",
	"uplus": "⊎",
	"upsi": "υ",
	"upsih": "ϒ",
	"upsilon": "υ",
	"upuparrows": "⇈",
	"urcorn": "⌝",
	"urcorner": "⌝",
	"urcrop": "⌎",
	"uring": "ů",
	"urtri": "◹",
	"uscr": "𝓊",
	"utdot": "⋰",
	"utilde": "ũ",
	"utri": "▵",
	"utrif": "▴",
	"uuarr": "⇈",
	"uum": "ü",
	"uuml": "ü",
	"uwangle": "⦧",
	"vArr": "⇕",
	"vBar": "⫨",
	"vBarv": "⫩",
	"vDash": "⊨",
	"vangrt": "⦜",
	"varepsilon": "ϵ",
	"varkappa": "ϰ",
	"varnothing": "∅",
	"varphi": "ϕ",
	"varpi": "ϖ",
	"varpropto": "∝",
	"varr": "↕",
	"varrho": "ϱ",
	"varsigma": "ς",
	"varsubsetneq": "⊊︀",
	"varsubsetneqq": "⫋︀",
	"varsupsetneq": "⊋︀",
	"varsupsetneqq": "⫌︀",
	"vartheta": "ϑ",
	"vartriangleleft": "⊲",
	"vartriangleright": "⊳",
	"vcy": "в",
	"vdash": "⊢",
	"vee": "∨",
	"veebar": "⊻",
	"veeeq": "≚",
	"vellip": "⋮",
	"verbar": "|",
	"vert": "|",
	"vfr": "𝔳",
	"vltri": "⊲",
	"vnsub": "⊂⃒",
	"vnsup": "⊃⃒",
	"vopf": "𝕧",
	"vprop": "∝",
	"vrtri": "⊳",
	"vscr": "𝓋",
	"vsubnE": "⫋︀",
	"vsubne": "⊊︀",
	"vsupnE": "⫌︀",
	"vsupne": "⊋︀",
	"vzigzag": "⦚",
	"wcirc": "ŵ",
	"wedbar": "⩟",
	"wedge": "∧",
	"wedgeq": "≙",
	"weierp": "℘",
	"wfr": "𝔴",
	"wopf": "𝕨",
	"wp": "℘",
	"wr": "≀",
	"wreath": "≀",
	"wscr": "𝓌",
	"xcap": "⋂",
	"xcirc": "◯",
	"xcup": "⋃",
	"xdtri": "▽",
	"xfr": "𝔵",
	"xhArr": "⟺",
	"xharr": "⟷",
	"xi": "ξ",
	"xlArr": "⟸",
	"xlarr": "⟵",
	"xmap": "⟼",
	"xnis": "⋻",
	"xodot": "⨀",
	"xopf": "𝕩",
	"xoplus": "⨁",
	"xotime": "⨂",
	"xrArr": "⟹",
	"xrarr": "⟶",
	"xscr": "𝓍",
	"xsqcup": "⨆",
	"xuplus": "⨄",
	"xutri": "△",
	"xvee": "⋁",
	"xwedge": "⋀",
	"yacut": "ý",
	"yacute": "ý",
	"yacy": "я",
	"ycirc": "ŷ",
	"ycy": "ы",
	"ye": "¥",
	"yen": "¥",
	"yfr": "𝔶",
	"yicy": "ї",
	"yopf": "𝕪",
	"yscr": "𝓎",
	"yucy": "ю",
	"yum": "ÿ",
	"yuml": "ÿ",
	"zacute": "ź",
	"zcaron": "ž",
	"zcy": "з",
	"zdot": "ż",
	"zeetrf": "ℨ",
	"zeta": "ζ",
	"zfr": "𝔷",
	"zhcy": "ж",
	"zigrarr": "⇝",
	"zopf": "𝕫",
	"zscr": "𝓏",
	"zwj": "‍",
	"zwnj": "‌"
};

/***/ }),
/* 200 */
/***/ (function(module, exports) {

module.exports = {
	"0": "�",
	"128": "€",
	"130": "‚",
	"131": "ƒ",
	"132": "„",
	"133": "…",
	"134": "†",
	"135": "‡",
	"136": "ˆ",
	"137": "‰",
	"138": "Š",
	"139": "‹",
	"140": "Œ",
	"142": "Ž",
	"145": "‘",
	"146": "’",
	"147": "“",
	"148": "”",
	"149": "•",
	"150": "–",
	"151": "—",
	"152": "˜",
	"153": "™",
	"154": "š",
	"155": "›",
	"156": "œ",
	"158": "ž",
	"159": "Ÿ"
};

/***/ }),
/* 201 */
/***/ (function(module, exports) {

module.exports = [
	"address",
	"article",
	"aside",
	"base",
	"basefont",
	"blockquote",
	"body",
	"caption",
	"center",
	"col",
	"colgroup",
	"dd",
	"details",
	"dialog",
	"dir",
	"div",
	"dl",
	"dt",
	"fieldset",
	"figcaption",
	"figure",
	"footer",
	"form",
	"frame",
	"frameset",
	"h1",
	"h2",
	"h3",
	"h4",
	"h5",
	"h6",
	"head",
	"header",
	"hgroup",
	"hr",
	"html",
	"iframe",
	"legend",
	"li",
	"link",
	"main",
	"menu",
	"menuitem",
	"meta",
	"nav",
	"noframes",
	"ol",
	"optgroup",
	"option",
	"p",
	"param",
	"pre",
	"section",
	"source",
	"title",
	"summary",
	"table",
	"tbody",
	"td",
	"tfoot",
	"th",
	"thead",
	"title",
	"tr",
	"track",
	"ul"
];

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module markdown-escapes
 * @fileoverview List of escapable characters in markdown.
 */



/* eslint-env commonjs */

/* Expose. */
module.exports = escapes;

/* Characters. */
var defaults = [
  '\\',
  '`',
  '*',
  '{',
  '}',
  '[',
  ']',
  '(',
  ')',
  '#',
  '+',
  '-',
  '.',
  '!',
  '_',
  '>'
];

var gfm = defaults.concat(['~', '|']);

var commonmark = gfm.concat([
  '\n',
  '"',
  '$',
  '%',
  '&',
  '\'',
  ',',
  '/',
  ':',
  ';',
  '<',
  '=',
  '?',
  '@',
  '^'
]);

/* Expose characters. */
escapes.default = defaults;
escapes.gfm = gfm;
escapes.commonmark = commonmark;

/**
 * Get markdown escapes.
 *
 * @param {Object?} [options] - Configuration.
 * @return {Array.<string>} - Escapes.
 */
function escapes(options) {
  var settings = options || {};

  if (settings.commonmark) {
    return commonmark;
  }

  return settings.gfm ? gfm : defaults;
}


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var unherit = __webpack_require__(255);
var xtend = __webpack_require__(35);
var Parser = __webpack_require__(213);

module.exports = parse;
parse.Parser = Parser;

function parse(options) {
  var Local = unherit(Parser);
  Local.prototype.options = xtend(Local.prototype.options, this.data('settings'), options);
  this.Parser = Local;
}


/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:decode
 * @fileoverview Decode entities.
 */



var entities = __webpack_require__(64);

module.exports = factory;

/* Factory to create an entity decoder. */
function factory(ctx) {
  decoder.raw = decodeRaw;

  return decoder;

  /* Normalize `position` to add an `indent`. */
  function normalize(position) {
    var offsets = ctx.offset;
    var line = position.line;
    var result = [];

    while (++line) {
      if (!(line in offsets)) {
        break;
      }

      result.push((offsets[line] || 0) + 1);
    }

    return {
      start: position,
      indent: result
    };
  }

  /* Handle a warning.
   * See https://github.com/wooorm/parse-entities
   * for the warnings. */
  function handleWarning(reason, position, code) {
    if (code === 3) {
      return;
    }

    ctx.file.message(reason, position);
  }

  /* Decode `value` (at `position`) into text-nodes. */
  function decoder(value, position, handler) {
    entities(value, {
      position: normalize(position),
      warning: handleWarning,
      text: handler,
      reference: handler,
      textContext: ctx,
      referenceContext: ctx
    });
  }

  /* Decode `value` (at `position`) into a string. */
  function decodeRaw(value, position) {
    return entities(value, {
      position: normalize(position),
      warning: handleWarning
    });
  }
}


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:break
 * @fileoverview Locate a break.
 */



module.exports = locate;

function locate(value, fromIndex) {
  var index = value.indexOf('\n', fromIndex);

  while (index > fromIndex) {
    if (value.charAt(index - 1) !== ' ') {
      break;
    }

    index--;
  }

  return index;
}


/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:code-inline
 * @fileoverview Locate inline code.
 */



module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('`', fromIndex);
}


/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:delete
 * @fileoverview Locate strikethrough.
 */



module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('~~', fromIndex);
}


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:emphasis
 * @fileoverview Locate italics / emphasis.
 */



module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('*', fromIndex);
  var underscore = value.indexOf('_', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:escape
 * @fileoverview Locate an escape.
 */



module.exports = locate;

function locate(value, fromIndex) {
  return value.indexOf('\\', fromIndex);
}


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:strong
 * @fileoverview Locate bold / strong / importance.
 */



module.exports = locate;

function locate(value, fromIndex) {
  var asterisk = value.indexOf('**', fromIndex);
  var underscore = value.indexOf('__', fromIndex);

  if (underscore === -1) {
    return asterisk;
  }

  if (asterisk === -1) {
    return underscore;
  }

  return underscore < asterisk ? underscore : asterisk;
}


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:locate:url
 * @fileoverview Locate a URL.
 */



module.exports = locate;

var PROTOCOLS = ['https://', 'http://', 'mailto:'];

function locate(value, fromIndex) {
  var length = PROTOCOLS.length;
  var index = -1;
  var min = -1;
  var position;

  if (!this.options.gfm) {
    return -1;
  }

  while (++index < length) {
    position = value.indexOf(PROTOCOLS[index], fromIndex);

    if (position !== -1 && (position < min || min === -1)) {
      min = position;
    }
  }

  return min;
}


/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:parse
 * @fileoverview Parse the document
 */



var xtend = __webpack_require__(35);
var removePosition = __webpack_require__(257);

module.exports = parse;

var C_NEWLINE = '\n';
var EXPRESSION_LINE_BREAKS = /\r\n|\r/g;

/* Parse the bound file. */
function parse() {
  var self = this;
  var value = String(self.file);
  var start = {line: 1, column: 1, offset: 0};
  var content = xtend(start);
  var node;

  /* Clean non-unix newlines: `\r\n` and `\r` are all
   * changed to `\n`.  This should not affect positional
   * information. */
  value = value.replace(EXPRESSION_LINE_BREAKS, C_NEWLINE);

  if (value.charCodeAt(0) === 0xFEFF) {
    value = value.slice(1);

    content.column++;
    content.offset++;
  }

  node = {
    type: 'root',
    children: self.tokenizeBlock(value, content),
    position: {
      start: start,
      end: self.eof || xtend(start)
    }
  };

  if (!self.options.position) {
    removePosition(node, true);
  }

  return node;
}


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse
 * @fileoverview Markdown parser.
 */



var xtend = __webpack_require__(35);
var toggle = __webpack_require__(253);
var vfileLocation = __webpack_require__(260);
var unescape = __webpack_require__(242);
var decode = __webpack_require__(204);
var tokenizer = __webpack_require__(241);

module.exports = Parser;

/* Construct a new parser. */
function Parser(doc, file) {
  this.file = file;
  this.offset = {};
  this.options = xtend(this.options);
  this.setOptions({});

  this.inList = false;
  this.inBlock = false;
  this.inLink = false;
  this.atStart = true;

  this.toOffset = vfileLocation(file).toOffset;
  this.unescape = unescape(this, 'escape');
  this.decode = decode(this);
}

/* Prototype. */
var proto = Parser.prototype;

/* Expose core. */
proto.setOptions = __webpack_require__(214);
proto.parse = __webpack_require__(212);

/* Expose `defaults`. */
proto.options = __webpack_require__(103);

/* Enter and exit helpers. */
proto.exitStart = toggle('atStart', true);
proto.enterList = toggle('inList', false);
proto.enterLink = toggle('inLink', false);
proto.enterBlock = toggle('inBlock', false);

/* Nodes that can interupt a paragraph:
 *
 * ```markdown
 * A paragraph, followed by a thematic break.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the paragraph. */
proto.interruptParagraph = [
  ['thematicBreak'],
  ['atxHeading'],
  ['fencedCode'],
  ['blockquote'],
  ['html'],
  ['setextHeading', {commonmark: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a list:
 *
 * ```markdown
 * - One
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the list. */
proto.interruptList = [
  ['fencedCode', {pedantic: false}],
  ['thematicBreak', {pedantic: false}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Nodes that can interupt a blockquote:
 *
 * ```markdown
 * > A paragraph.
 * ___
 * ```
 *
 * In the above example, the thematic break “interupts”
 * the blockquote. */
proto.interruptBlockquote = [
  ['indentedCode', {commonmark: true}],
  ['fencedCode', {commonmark: true}],
  ['atxHeading', {commonmark: true}],
  ['setextHeading', {commonmark: true}],
  ['thematicBreak', {commonmark: true}],
  ['html', {commonmark: true}],
  ['list', {commonmark: true}],
  ['definition', {commonmark: false}],
  ['footnote', {commonmark: false}]
];

/* Handlers. */
proto.blockTokenizers = {
  yamlFrontMatter: __webpack_require__(240),
  newline: __webpack_require__(232),
  indentedCode: __webpack_require__(219),
  fencedCode: __webpack_require__(218),
  blockquote: __webpack_require__(216),
  atxHeading: __webpack_require__(226),
  thematicBreak: __webpack_require__(238),
  list: __webpack_require__(231),
  setextHeading: __webpack_require__(227),
  html: __webpack_require__(228),
  footnote: __webpack_require__(225),
  definition: __webpack_require__(221),
  table: __webpack_require__(236),
  paragraph: __webpack_require__(233)
};

proto.inlineTokenizers = {
  escape: __webpack_require__(224),
  autoLink: __webpack_require__(215),
  url: __webpack_require__(239),
  html: __webpack_require__(229),
  link: __webpack_require__(230),
  reference: __webpack_require__(234),
  strong: __webpack_require__(235),
  emphasis: __webpack_require__(223),
  deletion: __webpack_require__(222),
  code: __webpack_require__(220),
  break: __webpack_require__(217),
  text: __webpack_require__(237)
};

/* Expose precedence. */
proto.blockMethods = keys(proto.blockTokenizers);
proto.inlineMethods = keys(proto.inlineTokenizers);

/* Tokenizers. */
proto.tokenizeBlock = tokenizer('block');
proto.tokenizeInline = tokenizer('inline');
proto.tokenizeFactory = tokenizer;

/* Get all keys in `value`. */
function keys(value) {
  var result = [];
  var key;

  for (key in value) {
    result.push(key);
  }

  return result;
}


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse
 * @fileoverview Markdown parser.
 */



var xtend = __webpack_require__(35);
var escapes = __webpack_require__(202);
var defaults = __webpack_require__(103);

module.exports = setOptions;

/* Set options. */
function setOptions(options) {
  var self = this;
  var current = self.options;
  var key;
  var value;

  if (options == null) {
    options = {};
  } else if (typeof options === 'object') {
    options = xtend(options);
  } else {
    throw new Error(
      'Invalid value `' + options + '` ' +
      'for setting `options`'
    );
  }

  for (key in defaults) {
    value = options[key];

    if (value == null) {
      value = current[key];
    }

    if (
      (key !== 'blocks' && typeof value !== 'boolean') ||
      (key === 'blocks' && typeof value !== 'object')
    ) {
      throw new Error(
        'Invalid value `' + value + '` ' +
        'for setting `options.' + key + '`'
      );
    }

    options[key] = value;
  }

  self.options = options;
  self.escape = escapes(options);

  return self;
}


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:auto-link
 * @fileoverview Tokenise an auto-link.
 */



var decode = __webpack_require__(64);
var locate = __webpack_require__(105);

module.exports = autoLink;
autoLink.locator = locate;
autoLink.notInLink = true;

var C_LT = '<';
var C_GT = '>';
var C_AT_SIGN = '@';
var C_SLASH = '/';
var MAILTO = 'mailto:';
var MAILTO_LENGTH = MAILTO.length;

/* Tokenise a link. */
function autoLink(eat, value, silent) {
  var self;
  var subvalue;
  var length;
  var index;
  var queue;
  var character;
  var hasAtCharacter;
  var link;
  var now;
  var content;
  var tokenize;
  var exit;

  if (value.charAt(0) !== C_LT) {
    return;
  }

  self = this;
  subvalue = '';
  length = value.length;
  index = 0;
  queue = '';
  hasAtCharacter = false;
  link = '';

  index++;
  subvalue = C_LT;

  while (index < length) {
    character = value.charAt(index);

    if (
      character === ' ' ||
      character === C_GT ||
      character === C_AT_SIGN ||
      (character === ':' && value.charAt(index + 1) === C_SLASH)
    ) {
      break;
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  link += queue;
  queue = '';

  character = value.charAt(index);
  link += character;
  index++;

  if (character === C_AT_SIGN) {
    hasAtCharacter = true;
  } else {
    if (
      character !== ':' ||
      value.charAt(index + 1) !== C_SLASH
    ) {
      return;
    }

    link += C_SLASH;
    index++;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character === ' ' || character === C_GT) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (!queue || character !== C_GT) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  link += queue;
  content = link;
  subvalue += link + character;
  now = eat.now();
  now.column++;
  now.offset++;

  if (hasAtCharacter) {
    if (link.slice(0, MAILTO_LENGTH).toLowerCase() === MAILTO) {
      content = content.substr(MAILTO_LENGTH);
      now.column += MAILTO_LENGTH;
      now.offset += MAILTO_LENGTH;
    } else {
      link = MAILTO + link;
    }
  }

  /* Temporarily remove support for escapes in autolinks. */
  tokenize = self.inlineTokenizers.escape;
  self.inlineTokenizers.escape = null;
  exit = self.enterLink();

  content = self.tokenizeInline(content, now);

  self.inlineTokenizers.escape = tokenize;
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(link),
    children: content
  });
}


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:blockquote
 * @fileoverview Tokenise blockquote.
 */



var trim = __webpack_require__(27);
var interrupt = __webpack_require__(65);

module.exports = blockquote;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_GT = '>';

/* Tokenise a blockquote. */
function blockquote(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptBlockquote;
  var now = eat.now();
  var currentLine = now.line;
  var length = value.length;
  var values = [];
  var contents = [];
  var indents = [];
  var add;
  var index = 0;
  var character;
  var rest;
  var nextIndex;
  var content;
  var line;
  var startIndex;
  var prefixed;
  var exit;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_GT) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      index++;
    }

    if (value.charAt(index) === C_GT) {
      index++;
      prefixed = true;

      if (value.charAt(index) === C_SPACE) {
        index++;
      }
    } else {
      index = startIndex;
    }

    content = value.slice(index, nextIndex);

    if (!prefixed && !trim(content)) {
      index = startIndex;
      break;
    }

    if (!prefixed) {
      rest = value.slice(index);

      /* Check if the following code contains a possible
       * block. */
      if (interrupt(interruptors, tokenizers, self, [eat, rest, true])) {
        break;
      }
    }

    line = startIndex === index ? content : value.slice(startIndex, nextIndex);

    indents.push(index - startIndex);
    values.push(line);
    contents.push(content);

    index = nextIndex + 1;
  }

  index = -1;
  length = indents.length;
  add = eat(values.join(C_NEWLINE));

  while (++index < length) {
    offsets[currentLine] = (offsets[currentLine] || 0) + indents[index];
    currentLine++;
  }

  exit = self.enterBlock();
  contents = self.tokenizeBlock(contents.join(C_NEWLINE), now);
  exit();

  return add({
    type: 'blockquote',
    children: contents
  });
}


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:break
 * @fileoverview Tokenise a break.
 */



var locate = __webpack_require__(205);

module.exports = hardBreak;
hardBreak.locator = locate;

var MIN_BREAK_LENGTH = 2;

/* Tokenise a break. */
function hardBreak(eat, value, silent) {
  var self = this;
  var breaks = self.options.breaks;
  var length = value.length;
  var index = -1;
  var queue = '';
  var character;

  while (++index < length) {
    character = value.charAt(index);

    if (character === '\n') {
      if (!breaks && index < MIN_BREAK_LENGTH) {
        return;
      }

      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      queue += character;

      return eat(queue)({type: 'break'});
    }

    if (character !== ' ') {
      return;
    }

    queue += character;
  }
}


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-fenced
 * @fileoverview Tokenise fenced code.
 */



var trim = __webpack_require__(68);

module.exports = fencedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_TILDE = '~';
var C_TICK = '`';

var MIN_FENCE_COUNT = 3;
var CODE_INDENT_COUNT = 4;

/* Tokenise fenced code. */
function fencedCode(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = 0;
  var subvalue = '';
  var fenceCount;
  var marker;
  var character;
  var flag;
  var queue;
  var content;
  var exdentedContent;
  var closing;
  var exdentedClosing;
  var indent;
  var now;

  if (!settings.gfm) {
    return;
  }

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  indent = index;

  /* Eat the fence. */
  character = value.charAt(index);

  if (character !== C_TILDE && character !== C_TICK) {
    return;
  }

  index++;
  marker = character;
  fenceCount = 1;
  subvalue += character;

  while (index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      break;
    }

    subvalue += character;
    fenceCount++;
    index++;
  }

  if (fenceCount < MIN_FENCE_COUNT) {
    return;
  }

  /* Eat spacing before flag. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat flag. */
  flag = '';
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character === C_NEWLINE ||
      character === C_TILDE ||
      character === C_TICK
    ) {
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      flag += queue + character;
      queue = '';
    }

    index++;
  }

  character = value.charAt(index);

  if (character && character !== C_NEWLINE) {
    return;
  }

  if (silent) {
    return true;
  }

  now = eat.now();
  now.column += subvalue.length;
  now.offset += subvalue.length;

  subvalue += flag;
  flag = self.decode.raw(self.unescape(flag), now);

  if (queue) {
    subvalue += queue;
  }

  queue = '';
  closing = '';
  exdentedClosing = '';
  content = '';
  exdentedContent = '';

  /* Eat content. */
  while (index < length) {
    character = value.charAt(index);
    content += closing;
    exdentedContent += exdentedClosing;
    closing = '';
    exdentedClosing = '';

    if (character !== C_NEWLINE) {
      content += character;
      exdentedClosing += character;
      index++;
      continue;
    }

    /* Add the newline to `subvalue` if its the first
     * character.  Otherwise, add it to the `closing`
     * queue. */
    if (content) {
      closing += character;
      exdentedClosing += character;
    } else {
      subvalue += character;
    }

    queue = '';
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue.slice(indent);

    if (queue.length >= CODE_INDENT_COUNT) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== marker) {
        break;
      }

      queue += character;
      index++;
    }

    closing += queue;
    exdentedClosing += queue;

    if (queue.length < fenceCount) {
      continue;
    }

    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character !== C_SPACE && character !== C_TAB) {
        break;
      }

      closing += character;
      exdentedClosing += character;
      index++;
    }

    if (!character || character === C_NEWLINE) {
      break;
    }
  }

  subvalue += content + closing;

  return eat(subvalue)({
    type: 'code',
    lang: flag || null,
    value: trim(exdentedContent)
  });
}


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-indented
 * @fileoverview Tokenise indented code.
 */



var repeat = __webpack_require__(67);
var trim = __webpack_require__(68);

module.exports = indentedCode;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var CODE_INDENT_COUNT = 4;
var CODE_INDENT = repeat(C_SPACE, CODE_INDENT_COUNT);

/* Tokenise indented code. */
function indentedCode(eat, value, silent) {
  var index = -1;
  var length = value.length;
  var subvalue = '';
  var content = '';
  var subvalueQueue = '';
  var contentQueue = '';
  var character;
  var blankQueue;
  var indent;

  while (++index < length) {
    character = value.charAt(index);

    if (indent) {
      indent = false;

      subvalue += subvalueQueue;
      content += contentQueue;
      subvalueQueue = '';
      contentQueue = '';

      if (character === C_NEWLINE) {
        subvalueQueue = character;
        contentQueue = character;
      } else {
        subvalue += character;
        content += character;

        while (++index < length) {
          character = value.charAt(index);

          if (!character || character === C_NEWLINE) {
            contentQueue = character;
            subvalueQueue = character;
            break;
          }

          subvalue += character;
          content += character;
        }
      }
    } else if (
      character === C_SPACE &&
      value.charAt(index + 1) === character &&
      value.charAt(index + 2) === character &&
      value.charAt(index + 3) === character
    ) {
      subvalueQueue += CODE_INDENT;
      index += 3;
      indent = true;
    } else if (character === C_TAB) {
      subvalueQueue += character;
      indent = true;
    } else {
      blankQueue = '';

      while (character === C_TAB || character === C_SPACE) {
        blankQueue += character;
        character = value.charAt(++index);
      }

      if (character !== C_NEWLINE) {
        break;
      }

      subvalueQueue += blankQueue + character;
      contentQueue += character;
    }
  }

  if (content) {
    if (silent) {
      return true;
    }

    return eat(subvalue)({
      type: 'code',
      lang: null,
      value: trim(content)
    });
  }
}


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:code-inline
 * @fileoverview Tokenise inline code.
 */



var whitespace = __webpack_require__(13);
var locate = __webpack_require__(206);

module.exports = inlineCode;
inlineCode.locator = locate;

var C_TICK = '`';

/* Tokenise inline code. */
function inlineCode(eat, value, silent) {
  var length = value.length;
  var index = 0;
  var queue = '';
  var tickQueue = '';
  var contentQueue;
  var subqueue;
  var count;
  var openingCount;
  var subvalue;
  var character;
  var found;
  var next;

  while (index < length) {
    if (value.charAt(index) !== C_TICK) {
      break;
    }

    queue += C_TICK;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue = queue;
  openingCount = index;
  queue = '';
  next = value.charAt(index);
  count = 0;

  while (index < length) {
    character = next;
    next = value.charAt(index + 1);

    if (character === C_TICK) {
      count++;
      tickQueue += character;
    } else {
      count = 0;
      queue += character;
    }

    if (count && next !== C_TICK) {
      if (count === openingCount) {
        subvalue += queue + tickQueue;
        found = true;
        break;
      }

      queue += tickQueue;
      tickQueue = '';
    }

    index++;
  }

  if (!found) {
    if (openingCount % 2 !== 0) {
      return;
    }

    queue = '';
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  contentQueue = '';
  subqueue = '';
  length = queue.length;
  index = -1;

  while (++index < length) {
    character = queue.charAt(index);

    if (whitespace(character)) {
      subqueue += character;
      continue;
    }

    if (subqueue) {
      if (contentQueue) {
        contentQueue += subqueue;
      }

      subqueue = '';
    }

    contentQueue += character;
  }

  return eat(subvalue)({
    type: 'inlineCode',
    value: contentQueue
  });
}


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:definition
 * @fileoverview Tokenise a definition.
 */



var whitespace = __webpack_require__(13);
var normalize = __webpack_require__(66);

module.exports = definition;
definition.notInList = true;
definition.notInBlock = true;

var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';
var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_COLON = ':';
var C_LT = '<';
var C_GT = '>';

/* Tokenise a definition. */
function definition(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var beforeURL;
  var beforeTitle;
  var queue;
  var character;
  var test;
  var identifier;
  var url;
  var title;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  identifier = queue;
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (!isEnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character === isEnclosedURLCharacter.delimiter) {
      subvalue += C_LT + queue + character;
      index++;
    } else {
      if (commonmark) {
        return;
      }

      index -= queue.length + 1;
      queue = '';
    }
  }

  if (!queue) {
    while (index < length) {
      character = value.charAt(index);

      if (!isUnclosedURLCharacter(character)) {
        break;
      }

      queue += character;
      index++;
    }

    subvalue += queue;
  }

  if (!queue) {
    return;
  }

  url = queue;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (
      character !== C_TAB &&
      character !== C_SPACE &&
      character !== C_NEWLINE
    ) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  test = null;

  if (character === C_DOUBLE_QUOTE) {
    test = C_DOUBLE_QUOTE;
  } else if (character === C_SINGLE_QUOTE) {
    test = C_SINGLE_QUOTE;
  } else if (character === C_PAREN_OPEN) {
    test = C_PAREN_CLOSE;
  }

  if (!test) {
    queue = '';
    index = subvalue.length;
  } else if (queue) {
    subvalue += queue + character;
    index = subvalue.length;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (character === test) {
        break;
      }

      if (character === C_NEWLINE) {
        index++;
        character = value.charAt(index);

        if (character === C_NEWLINE || character === test) {
          return;
        }

        queue += C_NEWLINE;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (character !== test) {
      return;
    }

    beforeTitle = subvalue;
    subvalue += queue + character;
    index++;
    title = queue;
    queue = '';
  } else {
    return;
  }

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  character = value.charAt(index);

  if (!character || character === C_NEWLINE) {
    if (silent) {
      return true;
    }

    beforeURL = eat(beforeURL).test().end;
    url = self.decode.raw(self.unescape(url), beforeURL);

    if (title) {
      beforeTitle = eat(beforeTitle).test().end;
      title = self.decode.raw(self.unescape(title), beforeTitle);
    }

    return eat(subvalue)({
      type: 'definition',
      identifier: normalize(identifier),
      title: title || null,
      url: url
    });
  }
}

/* Check if `character` can be inside an enclosed URI. */
function isEnclosedURLCharacter(character) {
  return character !== C_GT &&
    character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE;
}

isEnclosedURLCharacter.delimiter = C_GT;

/* Check if `character` can be inside an unclosed URI. */
function isUnclosedURLCharacter(character) {
  return character !== C_BRACKET_OPEN &&
    character !== C_BRACKET_CLOSE &&
    !whitespace(character);
}


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:delete
 * @fileoverview Tokenise strikethrough.
 */



var whitespace = __webpack_require__(13);
var locate = __webpack_require__(207);

module.exports = strikethrough;
strikethrough.locator = locate;

var C_TILDE = '~';
var DOUBLE = '~~';

/* Tokenise strikethrough. */
function strikethrough(eat, value, silent) {
  var self = this;
  var character = '';
  var previous = '';
  var preceding = '';
  var subvalue = '';
  var index;
  var length;
  var now;

  if (
    !self.options.gfm ||
    value.charAt(0) !== C_TILDE ||
    value.charAt(1) !== C_TILDE ||
    whitespace(value.charAt(2))
  ) {
    return;
  }

  index = 1;
  length = value.length;
  now = eat.now();
  now.column += 2;
  now.offset += 2;

  while (++index < length) {
    character = value.charAt(index);

    if (
      character === C_TILDE &&
      previous === C_TILDE &&
      (!preceding || !whitespace(preceding))
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      return eat(DOUBLE + subvalue + DOUBLE)({
        type: 'delete',
        children: self.tokenizeInline(subvalue, now)
      });
    }

    subvalue += previous;
    preceding = previous;
    previous = character;
  }
}


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:emphasis
 * @fileoverview Tokenise emphasis.
 */



var trim = __webpack_require__(27);
var word = __webpack_require__(197);
var whitespace = __webpack_require__(13);
var locate = __webpack_require__(208);

module.exports = emphasis;
emphasis.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

/* Tokenise emphasis. */
function emphasis(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (character !== C_ASTERISK && character !== C_UNDERSCORE) {
    return;
  }

  pedantic = self.options.pedantic;
  subvalue = character;
  marker = character;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (character === marker && (!pedantic || !whitespace(prev))) {
      character = value.charAt(++index);

      if (character !== marker) {
        if (!trim(queue) || prev === marker) {
          return;
        }

        if (!pedantic && marker === C_UNDERSCORE && word(character)) {
          queue += marker;
          continue;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column++;
        now.offset++;

        return eat(subvalue + queue + marker)({
          type: 'emphasis',
          children: self.tokenizeInline(queue, now)
        });
      }

      queue += marker;
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:escape
 * @fileoverview Tokenise an escape.
 */



var locate = __webpack_require__(209);

module.exports = escape;
escape.locator = locate;

/* Tokenise an escape. */
function escape(eat, value, silent) {
  var self = this;
  var character;
  var node;

  if (value.charAt(0) === '\\') {
    character = value.charAt(1);

    if (self.escape.indexOf(character) !== -1) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      if (character === '\n') {
        node = {type: 'break'};
      } else {
        node = {
          type: 'text',
          value: character
        };
      }

      return eat('\\' + character)(node);
    }
  }
}


/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:footnote-definition
 * @fileoverview Tokenise footnote definition.
 */



var whitespace = __webpack_require__(13);
var normalize = __webpack_require__(66);

module.exports = footnoteDefinition;
footnoteDefinition.notInList = true;
footnoteDefinition.notInBlock = true;

var C_BACKSLASH = '\\';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_CARET = '^';
var C_COLON = ':';

var EXPRESSION_INITIAL_TAB = /^( {4}|\t)?/gm;

/* Tokenise a footnote definition. */
function footnoteDefinition(eat, value, silent) {
  var self = this;
  var offsets = self.offset;
  var index;
  var length;
  var subvalue;
  var now;
  var currentLine;
  var content;
  var queue;
  var subqueue;
  var character;
  var identifier;
  var add;
  var exit;

  if (!self.options.footnotes) {
    return;
  }

  index = 0;
  length = value.length;
  subvalue = '';
  now = eat.now();
  currentLine = now.line;

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  if (
    value.charAt(index) !== C_BRACKET_OPEN ||
    value.charAt(index + 1) !== C_CARET
  ) {
    return;
  }

  subvalue += C_BRACKET_OPEN + C_CARET;
  index = subvalue.length;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      break;
    } else if (character === C_BACKSLASH) {
      queue += character;
      index++;
      character = value.charAt(index);
    }

    queue += character;
    index++;
  }

  if (
    !queue ||
    value.charAt(index) !== C_BRACKET_CLOSE ||
    value.charAt(index + 1) !== C_COLON
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  identifier = normalize(queue);
  subvalue += queue + C_BRACKET_CLOSE + C_COLON;
  index = subvalue.length;

  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
    index++;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  queue = '';
  content = '';
  subqueue = '';

  while (index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      subqueue = character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_NEWLINE) {
          break;
        }

        subqueue += character;
        index++;
      }

      queue += subqueue;
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character !== C_SPACE) {
          break;
        }

        subqueue += character;
        index++;
      }

      if (subqueue.length === 0) {
        break;
      }

      queue += subqueue;
    }

    if (queue) {
      content += queue;
      queue = '';
    }

    content += character;
    index++;
  }

  subvalue += content;

  content = content.replace(EXPRESSION_INITIAL_TAB, function (line) {
    offsets[currentLine] = (offsets[currentLine] || 0) + line.length;
    currentLine++;

    return '';
  });

  add = eat(subvalue);

  exit = self.enterBlock();
  content = self.tokenizeBlock(content, now);
  exit();

  return add({
    type: 'footnoteDefinition',
    identifier: identifier,
    children: content
  });
}


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:heading-atx
 * @fileoverview Tokenise an ATX-style heading.
 */



module.exports = atxHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_HASH = '#';

var MAX_ATX_COUNT = 6;

/* Tokenise an ATX-style heading. */
function atxHeading(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var length = value.length + 1;
  var index = -1;
  var now = eat.now();
  var subvalue = '';
  var content = '';
  var character;
  var queue;
  var depth;

  /* Eat initial spacing. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat hashes. */
  depth = 0;

  while (++index <= length) {
    character = value.charAt(index);

    if (character !== C_HASH) {
      index--;
      break;
    }

    subvalue += character;
    depth++;
  }

  if (depth > MAX_ATX_COUNT) {
    return;
  }

  if (
    !depth ||
    (!settings.pedantic && value.charAt(index + 1) === C_HASH)
  ) {
    return;
  }

  length = value.length + 1;

  /* Eat intermediate white-space. */
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE && character !== C_TAB) {
      index--;
      break;
    }

    queue += character;
  }

  /* Exit when not in pedantic mode without spacing. */
  if (
    !settings.pedantic &&
    queue.length === 0 &&
    character &&
    character !== C_NEWLINE
  ) {
    return;
  }

  if (silent) {
    return true;
  }

  /* Eat content. */
  subvalue += queue;
  queue = '';
  content = '';

  while (++index < length) {
    character = value.charAt(index);

    if (!character || character === C_NEWLINE) {
      break;
    }

    if (
      character !== C_SPACE &&
      character !== C_TAB &&
      character !== C_HASH
    ) {
      content += queue + character;
      queue = '';
      continue;
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_HASH) {
      queue += character;
      character = value.charAt(++index);
    }

    while (character === C_SPACE || character === C_TAB) {
      queue += character;
      character = value.charAt(++index);
    }

    index--;
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  return eat(subvalue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:heading-setext
 * @fileoverview Tokenise an setext-style heading.
 */



module.exports = setextHeading;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_EQUALS = '=';
var C_DASH = '-';

var MAX_HEADING_INDENT = 3;

/* Map of characters which can be used to mark setext
 * headers, mapping to their corresponding depth. */
var SETEXT_MARKERS = {};

SETEXT_MARKERS[C_EQUALS] = 1;
SETEXT_MARKERS[C_DASH] = 2;

/* Tokenise an setext-style heading. */
function setextHeading(eat, value, silent) {
  var self = this;
  var now = eat.now();
  var length = value.length;
  var index = -1;
  var subvalue = '';
  var content;
  var queue;
  var character;
  var marker;
  var depth;

  /* Eat initial indentation. */
  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_SPACE || index >= MAX_HEADING_INDENT) {
      index--;
      break;
    }

    subvalue += character;
  }

  /* Eat content. */
  content = '';
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === C_NEWLINE) {
      index--;
      break;
    }

    if (character === C_SPACE || character === C_TAB) {
      queue += character;
    } else {
      content += queue + character;
      queue = '';
    }
  }

  now.column += subvalue.length;
  now.offset += subvalue.length;
  subvalue += content + queue;

  /* Ensure the content is followed by a newline and a
   * valid marker. */
  character = value.charAt(++index);
  marker = value.charAt(++index);

  if (character !== C_NEWLINE || !SETEXT_MARKERS[marker]) {
    return;
  }

  subvalue += character;

  /* Eat Setext-line. */
  queue = marker;
  depth = SETEXT_MARKERS[marker];

  while (++index < length) {
    character = value.charAt(index);

    if (character !== marker) {
      if (character !== C_NEWLINE) {
        return;
      }

      index--;
      break;
    }

    queue += character;
  }

  if (silent) {
    return true;
  }

  return eat(subvalue + queue)({
    type: 'heading',
    depth: depth,
    children: self.tokenizeInline(content, now)
  });
}


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:html-block
 * @fileoverview Tokenise block HTML.
 */



var openCloseTag = __webpack_require__(107).openCloseTag;

module.exports = blockHTML;

var C_TAB = '\t';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_LT = '<';

/* Tokenise block HTML. */
function blockHTML(eat, value, silent) {
  var self = this;
  var blocks = self.options.blocks;
  var length = value.length;
  var index = 0;
  var next;
  var line;
  var offset;
  var character;
  var count;
  var sequence;
  var subvalue;

  var sequences = [
    [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, true],
    [/^<!--/, /-->/, true],
    [/^<\?/, /\?>/, true],
    [/^<![A-Za-z]/, />/, true],
    [/^<!\[CDATA\[/, /\]\]>/, true],
    [new RegExp('^</?(' + blocks.join('|') + ')(?=(\\s|/?>|$))', 'i'), /^$/, true],
    [new RegExp(openCloseTag.source + '\\s*$'), /^$/, false]
  ];

  /* Eat initial spacing. */
  while (index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    index++;
  }

  if (value.charAt(index) !== C_LT) {
    return;
  }

  next = value.indexOf(C_NEWLINE, index + 1);
  next = next === -1 ? length : next;
  line = value.slice(index, next);
  offset = -1;
  count = sequences.length;

  while (++offset < count) {
    if (sequences[offset][0].test(line)) {
      sequence = sequences[offset];
      break;
    }
  }

  if (!sequence) {
    return;
  }

  if (silent) {
    return sequence[2];
  }

  index = next;

  if (!sequence[1].test(line)) {
    while (index < length) {
      next = value.indexOf(C_NEWLINE, index + 1);
      next = next === -1 ? length : next;
      line = value.slice(index + 1, next);

      if (sequence[1].test(line)) {
        if (line) {
          index = next;
        }

        break;
      }

      index = next;
    }
  }

  subvalue = value.slice(0, index);

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:html-inline
 * @fileoverview Tokenise inline HTML.
 */



var alphabetical = __webpack_require__(101);
var locate = __webpack_require__(105);
var tag = __webpack_require__(107).tag;

module.exports = inlineHTML;
inlineHTML.locator = locate;

var EXPRESSION_HTML_LINK_OPEN = /^<a /i;
var EXPRESSION_HTML_LINK_CLOSE = /^<\/a>/i;

/* Tokenise inline HTML. */
function inlineHTML(eat, value, silent) {
  var self = this;
  var length = value.length;
  var character;
  var subvalue;

  if (value.charAt(0) !== '<' || length < 3) {
    return;
  }

  character = value.charAt(1);

  if (
    !alphabetical(character) &&
    character !== '?' &&
    character !== '!' &&
    character !== '/'
  ) {
    return;
  }

  subvalue = value.match(tag);

  if (!subvalue) {
    return;
  }

  /* istanbul ignore if - not used yet. */
  if (silent) {
    return true;
  }

  subvalue = subvalue[0];

  if (!self.inLink && EXPRESSION_HTML_LINK_OPEN.test(subvalue)) {
    self.inLink = true;
  } else if (self.inLink && EXPRESSION_HTML_LINK_CLOSE.test(subvalue)) {
    self.inLink = false;
  }

  return eat(subvalue)({type: 'html', value: subvalue});
}


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:link
 * @fileoverview Tokenise a link.
 */



var has = __webpack_require__(70);
var whitespace = __webpack_require__(13);
var locate = __webpack_require__(104);

module.exports = link;
link.locator = locate;

var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_GT = '>';
var C_TICK = '`';
var C_DOUBLE_QUOTE = '"';
var C_SINGLE_QUOTE = '\'';

/* Map of characters, which can be used to mark link
 * and image titles. */
var LINK_MARKERS = {};

LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;

/* Map of characters, which can be used to mark link
 * and image titles in commonmark-mode. */
var COMMONMARK_LINK_MARKERS = {};

COMMONMARK_LINK_MARKERS[C_DOUBLE_QUOTE] = C_DOUBLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_SINGLE_QUOTE] = C_SINGLE_QUOTE;
COMMONMARK_LINK_MARKERS[C_PAREN_OPEN] = C_PAREN_CLOSE;

/* Tokenise a link. */
function link(eat, value, silent) {
  var self = this;
  var subvalue = '';
  var index = 0;
  var character = value.charAt(0);
  var commonmark = self.options.commonmark;
  var gfm = self.options.gfm;
  var closed;
  var count;
  var opening;
  var beforeURL;
  var beforeTitle;
  var subqueue;
  var hasMarker;
  var markers;
  var isImage;
  var content;
  var marker;
  var length;
  var title;
  var depth;
  var queue;
  var url;
  var now;
  var exit;
  var node;

  /* Detect whether this is an image. */
  if (character === '!') {
    isImage = true;
    subvalue = character;
    character = value.charAt(++index);
  }

  /* Eat the opening. */
  if (character !== C_BRACKET_OPEN) {
    return;
  }

  /* Exit when this is a link and we’re already inside
   * a link. */
  if (!isImage && self.inLink) {
    return;
  }

  subvalue += character;
  queue = '';
  index++;

  /* Eat the content. */
  length = value.length;
  now = eat.now();
  depth = 0;

  now.column += index;
  now.offset += index;

  while (index < length) {
    character = value.charAt(index);
    subqueue = character;

    if (character === C_TICK) {
      /* Inline-code in link content. */
      count = 1;

      while (value.charAt(index + 1) === C_TICK) {
        subqueue += character;
        index++;
        count++;
      }

      if (!opening) {
        opening = count;
      } else if (count >= opening) {
        opening = 0;
      }
    } else if (character === C_BACKSLASH) {
      /* Allow brackets to be escaped. */
      index++;
      subqueue += value.charAt(index);
    /* In GFM mode, brackets in code still count.
     * In all other modes, they don’t.  This empty
     * block prevents the next statements are
     * entered. */
    } else if ((!opening || gfm) && character === C_BRACKET_OPEN) {
      depth++;
    } else if ((!opening || gfm) && character === C_BRACKET_CLOSE) {
      if (depth) {
        depth--;
      } else {
        /* Allow white-space between content and
         * url in GFM mode. */
        if (gfm) {
          while (index < length) {
            character = value.charAt(index + 1);

            if (!whitespace(character)) {
              break;
            }

            subqueue += character;
            index++;
          }
        }

        if (value.charAt(index + 1) !== C_PAREN_OPEN) {
          return;
        }

        subqueue += C_PAREN_OPEN;
        closed = true;
        index++;

        break;
      }
    }

    queue += subqueue;
    subqueue = '';
    index++;
  }

  /* Eat the content closing. */
  if (!closed) {
    return;
  }

  content = queue;
  subvalue += queue + subqueue;
  index++;

  /* Eat white-space. */
  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    subvalue += character;
    index++;
  }

  /* Eat the URL. */
  character = value.charAt(index);
  markers = commonmark ? COMMONMARK_LINK_MARKERS : LINK_MARKERS;
  queue = '';
  beforeURL = subvalue;

  if (character === C_LT) {
    index++;
    beforeURL += C_LT;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_GT) {
        break;
      }

      if (commonmark && character === '\n') {
        return;
      }

      queue += character;
      index++;
    }

    if (value.charAt(index) !== C_GT) {
      return;
    }

    subvalue += C_LT + queue + C_GT;
    url = queue;
    index++;
  } else {
    character = null;
    subqueue = '';

    while (index < length) {
      character = value.charAt(index);

      if (subqueue && has(markers, character)) {
        break;
      }

      if (whitespace(character)) {
        if (commonmark) {
          break;
        }

        subqueue += character;
      } else {
        if (character === C_PAREN_OPEN) {
          depth++;
        } else if (character === C_PAREN_CLOSE) {
          if (depth === 0) {
            break;
          }

          depth--;
        }

        queue += subqueue;
        subqueue = '';

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        queue += character;
      }

      index++;
    }

    subvalue += queue;
    url = queue;
    index = subvalue.length;
  }

  /* Eat white-space. */
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);
  subvalue += queue;

  /* Eat the title. */
  if (queue && has(markers, character)) {
    index++;
    subvalue += character;
    queue = '';
    marker = markers[character];
    beforeTitle = subvalue;

    /* In commonmark-mode, things are pretty easy: the
     * marker cannot occur inside the title.
     *
     * Non-commonmark does, however, support nested
     * delimiters. */
    if (commonmark) {
      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          break;
        }

        if (character === C_BACKSLASH) {
          queue += C_BACKSLASH;
          character = value.charAt(++index);
        }

        index++;
        queue += character;
      }

      character = value.charAt(index);

      if (character !== marker) {
        return;
      }

      title = queue;
      subvalue += queue + character;
      index++;

      while (index < length) {
        character = value.charAt(index);

        if (!whitespace(character)) {
          break;
        }

        subvalue += character;
        index++;
      }
    } else {
      subqueue = '';

      while (index < length) {
        character = value.charAt(index);

        if (character === marker) {
          if (hasMarker) {
            queue += marker + subqueue;
            subqueue = '';
          }

          hasMarker = true;
        } else if (!hasMarker) {
          queue += character;
        } else if (character === C_PAREN_CLOSE) {
          subvalue += queue + marker + subqueue;
          title = queue;
          break;
        } else if (whitespace(character)) {
          subqueue += character;
        } else {
          queue += marker + subqueue + character;
          subqueue = '';
          hasMarker = false;
        }

        index++;
      }
    }
  }

  if (value.charAt(index) !== C_PAREN_CLOSE) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  subvalue += C_PAREN_CLOSE;

  url = self.decode.raw(self.unescape(url), eat(beforeURL).test().end);

  if (title) {
    beforeTitle = eat(beforeTitle).test().end;
    title = self.decode.raw(self.unescape(title), beforeTitle);
  }

  node = {
    type: isImage ? 'image' : 'link',
    title: title || null,
    url: url
  };

  if (isImage) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  } else {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  }

  return eat(subvalue)(node);
}


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:list
 * @fileoverview Tokenise a list.
 */



/* eslint-disable max-params */

var trim = __webpack_require__(27);
var repeat = __webpack_require__(67);
var decimal = __webpack_require__(46);
var getIndent = __webpack_require__(106);
var removeIndent = __webpack_require__(243);
var interrupt = __webpack_require__(65);

module.exports = list;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_PLUS = '+';
var C_DASH = '-';
var C_DOT = '.';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_PAREN_CLOSE = ')';
var C_X_LOWER = 'x';

var TAB_SIZE = 4;
var EXPRESSION_LOOSE_LIST_ITEM = /\n\n(?!\s*$)/;
var EXPRESSION_TASK_ITEM = /^\[([ \t]|x|X)][ \t]/;
var EXPRESSION_BULLET = /^([ \t]*)([*+-]|\d+[.)])( {1,4}(?! )| |\t|$|(?=\n))([^\n]*)/;
var EXPRESSION_PEDANTIC_BULLET = /^([ \t]*)([*+-]|\d+[.)])([ \t]+)/;
var EXPRESSION_INITIAL_INDENT = /^( {1,4}|\t)?/gm;

/* Map of characters which can be used to mark
 * list-items. */
var LIST_UNORDERED_MARKERS = {};

LIST_UNORDERED_MARKERS[C_ASTERISK] = true;
LIST_UNORDERED_MARKERS[C_PLUS] = true;
LIST_UNORDERED_MARKERS[C_DASH] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_MARKERS = {};

LIST_ORDERED_MARKERS[C_DOT] = true;

/* Map of characters which can be used to mark
 * list-items after a digit. */
var LIST_ORDERED_COMMONMARK_MARKERS = {};

LIST_ORDERED_COMMONMARK_MARKERS[C_DOT] = true;
LIST_ORDERED_COMMONMARK_MARKERS[C_PAREN_CLOSE] = true;

/* Tokenise a list. */
function list(eat, value, silent) {
  var self = this;
  var commonmark = self.options.commonmark;
  var pedantic = self.options.pedantic;
  var tokenizers = self.blockTokenizers;
  var interuptors = self.interruptList;
  var markers;
  var index = 0;
  var length = value.length;
  var start = null;
  var size = 0;
  var queue;
  var ordered;
  var character;
  var marker;
  var nextIndex;
  var startIndex;
  var prefixed;
  var currentMarker;
  var content;
  var line;
  var prevEmpty;
  var empty;
  var items;
  var allLines;
  var emptyLines;
  var item;
  var enterTop;
  var exitBlockquote;
  var isLoose;
  var node;
  var now;
  var end;
  var indented;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_TAB) {
      size += TAB_SIZE - (size % TAB_SIZE);
    } else if (character === C_SPACE) {
      size++;
    } else {
      break;
    }

    index++;
  }

  if (size >= TAB_SIZE) {
    return;
  }

  character = value.charAt(index);

  markers = commonmark ?
    LIST_ORDERED_COMMONMARK_MARKERS :
    LIST_ORDERED_MARKERS;

  if (LIST_UNORDERED_MARKERS[character] === true) {
    marker = character;
    ordered = false;
  } else {
    ordered = true;
    queue = '';

    while (index < length) {
      character = value.charAt(index);

      if (!decimal(character)) {
        break;
      }

      queue += character;
      index++;
    }

    character = value.charAt(index);

    if (!queue || markers[character] !== true) {
      return;
    }

    start = parseInt(queue, 10);
    marker = character;
  }

  character = value.charAt(++index);

  if (character !== C_SPACE && character !== C_TAB) {
    return;
  }

  if (silent) {
    return true;
  }

  index = 0;
  items = [];
  allLines = [];
  emptyLines = [];

  while (index < length) {
    nextIndex = value.indexOf(C_NEWLINE, index);
    startIndex = index;
    prefixed = false;
    indented = false;

    if (nextIndex === -1) {
      nextIndex = length;
    }

    end = index + TAB_SIZE;
    size = 0;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_TAB) {
        size += TAB_SIZE - (size % TAB_SIZE);
      } else if (character === C_SPACE) {
        size++;
      } else {
        break;
      }

      index++;
    }

    if (size >= TAB_SIZE) {
      indented = true;
    }

    if (item && size >= item.indent) {
      indented = true;
    }

    character = value.charAt(index);
    currentMarker = null;

    if (!indented) {
      if (LIST_UNORDERED_MARKERS[character] === true) {
        currentMarker = character;
        index++;
        size++;
      } else {
        queue = '';

        while (index < length) {
          character = value.charAt(index);

          if (!decimal(character)) {
            break;
          }

          queue += character;
          index++;
        }

        character = value.charAt(index);
        index++;

        if (queue && markers[character] === true) {
          currentMarker = character;
          size += queue.length + 1;
        }
      }

      if (currentMarker) {
        character = value.charAt(index);

        if (character === C_TAB) {
          size += TAB_SIZE - (size % TAB_SIZE);
          index++;
        } else if (character === C_SPACE) {
          end = index + TAB_SIZE;

          while (index < end) {
            if (value.charAt(index) !== C_SPACE) {
              break;
            }

            index++;
            size++;
          }

          if (index === end && value.charAt(index) === C_SPACE) {
            index -= TAB_SIZE - 1;
            size -= TAB_SIZE - 1;
          }
        } else if (character !== C_NEWLINE && character !== '') {
          currentMarker = null;
        }
      }
    }

    if (currentMarker) {
      if (!pedantic && marker !== currentMarker) {
        break;
      }

      prefixed = true;
    } else {
      if (!commonmark && !indented && value.charAt(startIndex) === C_SPACE) {
        indented = true;
      } else if (commonmark && item) {
        indented = size >= item.indent || size > TAB_SIZE;
      }

      prefixed = false;
      index = startIndex;
    }

    line = value.slice(startIndex, nextIndex);
    content = startIndex === index ? line : value.slice(index, nextIndex);

    if (
      currentMarker === C_ASTERISK ||
      currentMarker === C_UNDERSCORE ||
      currentMarker === C_DASH
    ) {
      if (tokenizers.thematicBreak.call(self, eat, line, true)) {
        break;
      }
    }

    prevEmpty = empty;
    empty = !trim(content).length;

    if (indented && item) {
      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (prefixed) {
      if (emptyLines.length !== 0) {
        item.value.push('');
        item.trail = emptyLines.concat();
      }

      item = {
        value: [line],
        indent: size,
        trail: []
      };

      items.push(item);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    } else if (empty) {
      if (prevEmpty) {
        break;
      }

      emptyLines.push(line);
    } else {
      if (prevEmpty) {
        break;
      }

      if (interrupt(interuptors, tokenizers, self, [eat, line, true])) {
        break;
      }

      item.value = item.value.concat(emptyLines, line);
      allLines = allLines.concat(emptyLines, line);
      emptyLines = [];
    }

    index = nextIndex + 1;
  }

  node = eat(allLines.join(C_NEWLINE)).reset({
    type: 'list',
    ordered: ordered,
    start: start,
    loose: null,
    children: []
  });

  enterTop = self.enterList();
  exitBlockquote = self.enterBlock();
  isLoose = false;
  index = -1;
  length = items.length;

  while (++index < length) {
    item = items[index].value.join(C_NEWLINE);
    now = eat.now();

    item = eat(item)(listItem(self, item, now), node);

    if (item.loose) {
      isLoose = true;
    }

    item = items[index].trail.join(C_NEWLINE);

    if (index !== length - 1) {
      item += C_NEWLINE;
    }

    eat(item);
  }

  enterTop();
  exitBlockquote();

  node.loose = isLoose;

  return node;
}

/**
 * Create a list-item node.
 *
 * @example
 *   listItem('- _foo_', now());
 *
 * @param {Object} ctx - Parser.
 * @param {Object} value - List-item.
 * @param {Object} position - List-item location.
 * @return {Object} - `listItem` node.
 */
function listItem(ctx, value, position) {
  var offsets = ctx.offset;
  var fn = ctx.options.pedantic ? pedanticListItem : normalListItem;
  var checked = null;
  var task;
  var indent;

  value = fn.apply(null, arguments);

  if (ctx.options.gfm) {
    task = value.match(EXPRESSION_TASK_ITEM);

    if (task) {
      indent = task[0].length;
      checked = task[1].toLowerCase() === C_X_LOWER;
      offsets[position.line] += indent;
      value = value.slice(indent);
    }
  }

  return {
    type: 'listItem',
    loose: EXPRESSION_LOOSE_LIST_ITEM.test(value) ||
      value.charAt(value.length - 1) === C_NEWLINE,
    checked: checked,
    children: ctx.tokenizeBlock(value, position)
  };
}

/* Create a list-item using overly simple mechanics. */
function pedanticListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_PEDANTIC_BULLET, replacer);

  /* The initial line was also matched by the below, so
   * we reset the `line`. */
  line = position.line;

  return value.replace(EXPRESSION_INITIAL_INDENT, replacer);

  /* A simple replacer which removed all matches,
   * and adds their length to `offset`. */
  function replacer($0) {
    offsets[line] = (offsets[line] || 0) + $0.length;
    line++;

    return '';
  }
}

/* Create a list-item using sane mechanics. */
function normalListItem(ctx, value, position) {
  var offsets = ctx.offset;
  var line = position.line;
  var max;
  var bullet;
  var rest;
  var lines;
  var trimmedLines;
  var index;
  var length;

  /* Remove the list-item’s bullet. */
  value = value.replace(EXPRESSION_BULLET, replacer);

  lines = value.split(C_NEWLINE);

  trimmedLines = removeIndent(value, getIndent(max).indent).split(C_NEWLINE);

  /* We replaced the initial bullet with something
   * else above, which was used to trick
   * `removeIndentation` into removing some more
   * characters when possible.  However, that could
   * result in the initial line to be stripped more
   * than it should be. */
  trimmedLines[0] = rest;

  offsets[line] = (offsets[line] || 0) + bullet.length;
  line++;

  index = 0;
  length = lines.length;

  while (++index < length) {
    offsets[line] = (offsets[line] || 0) +
      lines[index].length - trimmedLines[index].length;
    line++;
  }

  return trimmedLines.join(C_NEWLINE);

  function replacer($0, $1, $2, $3, $4) {
    bullet = $1 + $2 + $3;
    rest = $4;

    /* Make sure that the first nine numbered list items
     * can indent with an extra space.  That is, when
     * the bullet did not receive an extra final space. */
    if (Number($2) < 10 && bullet.length % 2 === 1) {
      $2 = C_SPACE + $2;
    }

    max = $1 + repeat(C_SPACE, $2.length) + $3;

    return max + rest;
  }
}


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:newline
 * @fileoverview Tokenise a newline.
 */



var whitespace = __webpack_require__(13);

module.exports = newline;

/* Tokenise newline. */
function newline(eat, value, silent) {
  var character = value.charAt(0);
  var length;
  var subvalue;
  var queue;
  var index;

  if (character !== '\n') {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  index = 1;
  length = value.length;
  subvalue = character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;

    if (character === '\n') {
      subvalue += queue;
      queue = '';
    }

    index++;
  }

  eat(subvalue);
}


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:paragraph
 * @fileoverview Tokenise a paragraph.
 */



var trim = __webpack_require__(27);
var decimal = __webpack_require__(46);
var trimTrailingLines = __webpack_require__(68);
var interrupt = __webpack_require__(65);

module.exports = paragraph;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';

var TAB_SIZE = 4;

/* Tokenise paragraph. */
function paragraph(eat, value, silent) {
  var self = this;
  var settings = self.options;
  var commonmark = settings.commonmark;
  var gfm = settings.gfm;
  var tokenizers = self.blockTokenizers;
  var interruptors = self.interruptParagraph;
  var index = value.indexOf(C_NEWLINE);
  var length = value.length;
  var position;
  var subvalue;
  var character;
  var size;
  var now;

  while (index < length) {
    /* Eat everything if there’s no following newline. */
    if (index === -1) {
      index = length;
      break;
    }

    /* Stop if the next character is NEWLINE. */
    if (value.charAt(index + 1) === C_NEWLINE) {
      break;
    }

    /* In commonmark-mode, following indented lines
     * are part of the paragraph. */
    if (commonmark) {
      size = 0;
      position = index + 1;

      while (position < length) {
        character = value.charAt(position);

        if (character === C_TAB) {
          size = TAB_SIZE;
          break;
        } else if (character === C_SPACE) {
          size++;
        } else {
          break;
        }

        position++;
      }

      if (size >= TAB_SIZE) {
        index = value.indexOf(C_NEWLINE, index + 1);
        continue;
      }
    }

    subvalue = value.slice(index + 1);

    /* Check if the following code contains a possible
     * block. */
    if (interrupt(interruptors, tokenizers, self, [eat, subvalue, true])) {
      break;
    }

    /* Break if the following line starts a list, when
     * already in a list, or when in commonmark, or when
     * in gfm mode and the bullet is *not* numeric. */
    if (
      tokenizers.list.call(self, eat, subvalue, true) &&
      (
        self.inList ||
        commonmark ||
        (gfm && !decimal(trim.left(subvalue).charAt(0)))
      )
    ) {
      break;
    }

    position = index;
    index = value.indexOf(C_NEWLINE, index + 1);

    if (index !== -1 && trim(value.slice(position, index)) === '') {
      index = position;
      break;
    }
  }

  subvalue = value.slice(0, index);

  if (trim(subvalue) === '') {
    eat(subvalue);

    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  now = eat.now();
  subvalue = trimTrailingLines(subvalue);

  return eat(subvalue)({
    type: 'paragraph',
    children: self.tokenizeInline(subvalue, now)
  });
}


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:reference
 * @fileoverview Tokenise a reference.
 */



var whitespace = __webpack_require__(13);
var locate = __webpack_require__(104);
var normalize = __webpack_require__(66);

module.exports = reference;
reference.locator = locate;

var T_LINK = 'link';
var T_IMAGE = 'image';
var T_FOOTNOTE = 'footnote';
var REFERENCE_TYPE_SHORTCUT = 'shortcut';
var REFERENCE_TYPE_COLLAPSED = 'collapsed';
var REFERENCE_TYPE_FULL = 'full';
var C_CARET = '^';
var C_BACKSLASH = '\\';
var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';

/* Tokenise a reference. */
function reference(eat, value, silent) {
  var self = this;
  var character = value.charAt(0);
  var index = 0;
  var length = value.length;
  var subvalue = '';
  var intro = '';
  var type = T_LINK;
  var referenceType = REFERENCE_TYPE_SHORTCUT;
  var content;
  var identifier;
  var now;
  var node;
  var exit;
  var queue;
  var bracketed;
  var depth;

  /* Check whether we’re eating an image. */
  if (character === '!') {
    type = T_IMAGE;
    intro = character;
    character = value.charAt(++index);
  }

  if (character !== C_BRACKET_OPEN) {
    return;
  }

  index++;
  intro += character;
  queue = '';

  /* Check whether we’re eating a footnote. */
  if (
    self.options.footnotes &&
    type === T_LINK &&
    value.charAt(index) === C_CARET
  ) {
    intro += C_CARET;
    index++;
    type = T_FOOTNOTE;
  }

  /* Eat the text. */
  depth = 0;

  while (index < length) {
    character = value.charAt(index);

    if (character === C_BRACKET_OPEN) {
      bracketed = true;
      depth++;
    } else if (character === C_BRACKET_CLOSE) {
      if (!depth) {
        break;
      }

      depth--;
    }

    if (character === C_BACKSLASH) {
      queue += C_BACKSLASH;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }

  subvalue = queue;
  content = queue;
  character = value.charAt(index);

  if (character !== C_BRACKET_CLOSE) {
    return;
  }

  index++;
  subvalue += character;
  queue = '';

  while (index < length) {
    character = value.charAt(index);

    if (!whitespace(character)) {
      break;
    }

    queue += character;
    index++;
  }

  character = value.charAt(index);

  if (character === C_BRACKET_OPEN) {
    identifier = '';
    queue += character;
    index++;

    while (index < length) {
      character = value.charAt(index);

      if (character === C_BRACKET_OPEN || character === C_BRACKET_CLOSE) {
        break;
      }

      if (character === C_BACKSLASH) {
        identifier += C_BACKSLASH;
        character = value.charAt(++index);
      }

      identifier += character;
      index++;
    }

    character = value.charAt(index);

    if (character === C_BRACKET_CLOSE) {
      referenceType = identifier ? REFERENCE_TYPE_FULL : REFERENCE_TYPE_COLLAPSED;
      queue += identifier + character;
      index++;
    } else {
      identifier = '';
    }

    subvalue += queue;
    queue = '';
  } else {
    if (!content) {
      return;
    }

    identifier = content;
  }

  /* Brackets cannot be inside the identifier. */
  if (referenceType !== REFERENCE_TYPE_FULL && bracketed) {
    return;
  }

  /* Inline footnotes cannot have an identifier. */
  if (type === T_FOOTNOTE && referenceType !== REFERENCE_TYPE_SHORTCUT) {
    type = T_LINK;
    intro = C_BRACKET_OPEN + C_CARET;
    content = C_CARET + content;
  }

  subvalue = intro + subvalue;

  if (type === T_LINK && self.inLink) {
    return null;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  if (type === T_FOOTNOTE && content.indexOf(' ') !== -1) {
    return eat(subvalue)({
      type: 'footnote',
      children: this.tokenizeInline(content, eat.now())
    });
  }

  now = eat.now();
  now.column += intro.length;
  now.offset += intro.length;
  identifier = referenceType === REFERENCE_TYPE_FULL ? identifier : content;

  node = {
    type: type + 'Reference',
    identifier: normalize(identifier)
  };

  if (type === T_LINK || type === T_IMAGE) {
    node.referenceType = referenceType;
  }

  if (type === T_LINK) {
    exit = self.enterLink();
    node.children = self.tokenizeInline(content, now);
    exit();
  } else if (type === T_IMAGE) {
    node.alt = self.decode.raw(self.unescape(content), now) || null;
  }

  return eat(subvalue)(node);
}


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:strong
 * @fileoverview Tokenise strong.
 */



var trim = __webpack_require__(27);
var whitespace = __webpack_require__(13);
var locate = __webpack_require__(210);

module.exports = strong;
strong.locator = locate;

var C_ASTERISK = '*';
var C_UNDERSCORE = '_';

/* Tokenise strong. */
function strong(eat, value, silent) {
  var self = this;
  var index = 0;
  var character = value.charAt(index);
  var now;
  var pedantic;
  var marker;
  var queue;
  var subvalue;
  var length;
  var prev;

  if (
    (character !== C_ASTERISK && character !== C_UNDERSCORE) ||
    value.charAt(++index) !== character
  ) {
    return;
  }

  pedantic = self.options.pedantic;
  marker = character;
  subvalue = marker + marker;
  length = value.length;
  index++;
  queue = '';
  character = '';

  if (pedantic && whitespace(value.charAt(index))) {
    return;
  }

  while (index < length) {
    prev = character;
    character = value.charAt(index);

    if (
      character === marker &&
      value.charAt(index + 1) === marker &&
      (!pedantic || !whitespace(prev))
    ) {
      character = value.charAt(index + 2);

      if (character !== marker) {
        if (!trim(queue)) {
          return;
        }

        /* istanbul ignore if - never used (yet) */
        if (silent) {
          return true;
        }

        now = eat.now();
        now.column += 2;
        now.offset += 2;

        return eat(subvalue + queue + subvalue)({
          type: 'strong',
          children: self.tokenizeInline(queue, now)
        });
      }
    }

    if (!pedantic && character === '\\') {
      queue += character;
      character = value.charAt(++index);
    }

    queue += character;
    index++;
  }
}


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:table
 * @fileoverview Tokenise a table.
 */



var whitespace = __webpack_require__(13);

module.exports = table;
table.notInList = true;

var C_BACKSLASH = '\\';
var C_TICK = '`';
var C_DASH = '-';
var C_PIPE = '|';
var C_COLON = ':';
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

var MIN_TABLE_COLUMNS = 1;
var MIN_TABLE_ROWS = 2;

var TABLE_ALIGN_LEFT = 'left';
var TABLE_ALIGN_CENTER = 'center';
var TABLE_ALIGN_RIGHT = 'right';
var TABLE_ALIGN_NONE = null;

/* Tokenise a table. */
function table(eat, value, silent) {
  var self = this;
  var index;
  var alignments;
  var alignment;
  var subvalue;
  var row;
  var length;
  var lines;
  var queue;
  var character;
  var hasDash;
  var align;
  var cell;
  var preamble;
  var count;
  var opening;
  var now;
  var position;
  var lineCount;
  var line;
  var rows;
  var table;
  var lineIndex;
  var pipeIndex;
  var first;

  /* Exit when not in gfm-mode. */
  if (!self.options.gfm) {
    return;
  }

  /* Get the rows.
   * Detecting tables soon is hard, so there are some
   * checks for performance here, such as the minimum
   * number of rows, and allowed characters in the
   * alignment row. */
  index = 0;
  lineCount = 0;
  length = value.length + 1;
  lines = [];

  while (index < length) {
    lineIndex = value.indexOf(C_NEWLINE, index);
    pipeIndex = value.indexOf(C_PIPE, index + 1);

    if (lineIndex === -1) {
      lineIndex = value.length;
    }

    if (pipeIndex === -1 || pipeIndex > lineIndex) {
      if (lineCount < MIN_TABLE_ROWS) {
        return;
      }

      break;
    }

    lines.push(value.slice(index, lineIndex));
    lineCount++;
    index = lineIndex + 1;
  }

  /* Parse the alignment row. */
  subvalue = lines.join(C_NEWLINE);
  alignments = lines.splice(1, 1)[0] || [];
  index = 0;
  length = alignments.length;
  lineCount--;
  alignment = false;
  align = [];

  while (index < length) {
    character = alignments.charAt(index);

    if (character === C_PIPE) {
      hasDash = null;

      if (alignment === false) {
        if (first === false) {
          return;
        }
      } else {
        align.push(alignment);
        alignment = false;
      }

      first = false;
    } else if (character === C_DASH) {
      hasDash = true;
      alignment = alignment || TABLE_ALIGN_NONE;
    } else if (character === C_COLON) {
      if (alignment === TABLE_ALIGN_LEFT) {
        alignment = TABLE_ALIGN_CENTER;
      } else if (hasDash && alignment === TABLE_ALIGN_NONE) {
        alignment = TABLE_ALIGN_RIGHT;
      } else {
        alignment = TABLE_ALIGN_LEFT;
      }
    } else if (!whitespace(character)) {
      return;
    }

    index++;
  }

  if (alignment !== false) {
    align.push(alignment);
  }

  /* Exit when without enough columns. */
  if (align.length < MIN_TABLE_COLUMNS) {
    return;
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  /* Parse the rows. */
  position = -1;
  rows = [];

  table = eat(subvalue).reset({
    type: 'table',
    align: align,
    children: rows
  });

  while (++position < lineCount) {
    line = lines[position];
    row = {type: 'tableRow', children: []};

    /* Eat a newline character when this is not the
     * first row. */
    if (position) {
      eat(C_NEWLINE);
    }

    /* Eat the row. */
    eat(line).reset(row, table);

    length = line.length + 1;
    index = 0;
    queue = '';
    cell = '';
    preamble = true;
    count = null;
    opening = null;

    while (index < length) {
      character = line.charAt(index);

      if (character === C_TAB || character === C_SPACE) {
        if (cell) {
          queue += character;
        } else {
          eat(character);
        }

        index++;
        continue;
      }

      if (character === '' || character === C_PIPE) {
        if (preamble) {
          eat(character);
        } else {
          if (character && opening) {
            queue += character;
            index++;
            continue;
          }

          if ((cell || character) && !preamble) {
            subvalue = cell;

            if (queue.length > 1) {
              if (character) {
                subvalue += queue.slice(0, queue.length - 1);
                queue = queue.charAt(queue.length - 1);
              } else {
                subvalue += queue;
                queue = '';
              }
            }

            now = eat.now();

            eat(subvalue)({
              type: 'tableCell',
              children: self.tokenizeInline(cell, now)
            }, row);
          }

          eat(queue + character);

          queue = '';
          cell = '';
        }
      } else {
        if (queue) {
          cell += queue;
          queue = '';
        }

        cell += character;

        if (character === C_BACKSLASH && index !== length - 2) {
          cell += line.charAt(index + 1);
          index++;
        }

        if (character === C_TICK) {
          count = 1;

          while (line.charAt(index + 1) === character) {
            cell += character;
            index++;
            count++;
          }

          if (!opening) {
            opening = count;
          } else if (count >= opening) {
            opening = 0;
          }
        }
      }

      preamble = false;
      index++;
    }

    /* Eat the alignment row. */
    if (!position) {
      eat(C_NEWLINE + alignments);
    }
  }

  return table;
}


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:text
 * @fileoverview Tokenise text.
 */



module.exports = text;

/* Tokenise text. */
function text(eat, value, silent) {
  var self = this;
  var methods;
  var tokenizers;
  var index;
  var length;
  var subvalue;
  var position;
  var tokenizer;
  var name;
  var min;
  var now;

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  methods = self.inlineMethods;
  length = methods.length;
  tokenizers = self.inlineTokenizers;
  index = -1;
  min = value.length;

  while (++index < length) {
    name = methods[index];

    if (name === 'text' || !tokenizers[name]) {
      continue;
    }

    tokenizer = tokenizers[name].locator;

    if (!tokenizer) {
      eat.file.fail('Missing locator: `' + name + '`');
    }

    position = tokenizer.call(self, value, 1);

    if (position !== -1 && position < min) {
      min = position;
    }
  }

  subvalue = value.slice(0, min);
  now = eat.now();

  self.decode(subvalue, now, function (content, position, source) {
    eat(source || content)({
      type: 'text',
      value: content
    });
  });
}


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:thematic-break
 * @fileoverview Tokenise a thematic break.
 */



module.exports = thematicBreak;

var C_NEWLINE = '\n';
var C_TAB = '\t';
var C_SPACE = ' ';
var C_ASTERISK = '*';
var C_UNDERSCORE = '_';
var C_DASH = '-';

var THEMATIC_BREAK_MARKER_COUNT = 3;

/* Tokenise a thematic break. */
function thematicBreak(eat, value, silent) {
  var index = -1;
  var length = value.length + 1;
  var subvalue = '';
  var character;
  var marker;
  var markerCount;
  var queue;

  while (++index < length) {
    character = value.charAt(index);

    if (character !== C_TAB && character !== C_SPACE) {
      break;
    }

    subvalue += character;
  }

  if (
    character !== C_ASTERISK &&
    character !== C_DASH &&
    character !== C_UNDERSCORE
  ) {
    return;
  }

  marker = character;
  subvalue += character;
  markerCount = 1;
  queue = '';

  while (++index < length) {
    character = value.charAt(index);

    if (character === marker) {
      markerCount++;
      subvalue += queue + marker;
      queue = '';
    } else if (character === C_SPACE) {
      queue += character;
    } else if (
      markerCount >= THEMATIC_BREAK_MARKER_COUNT &&
      (!character || character === C_NEWLINE)
    ) {
      subvalue += queue;

      if (silent) {
        return true;
      }

      return eat(subvalue)({type: 'thematicBreak'});
    } else {
      return;
    }
  }
}


/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:url
 * @fileoverview Tokenise a URL.
 */



var decode = __webpack_require__(64);
var whitespace = __webpack_require__(13);
var locate = __webpack_require__(211);

module.exports = url;
url.locator = locate;
url.notInLink = true;

var C_BRACKET_OPEN = '[';
var C_BRACKET_CLOSE = ']';
var C_PAREN_OPEN = '(';
var C_PAREN_CLOSE = ')';
var C_LT = '<';
var C_AT_SIGN = '@';

var HTTP_PROTOCOL = 'http://';
var HTTPS_PROTOCOL = 'https://';
var MAILTO_PROTOCOL = 'mailto:';

var PROTOCOLS = [
  HTTP_PROTOCOL,
  HTTPS_PROTOCOL,
  MAILTO_PROTOCOL
];

var PROTOCOLS_LENGTH = PROTOCOLS.length;

/* Tokenise a URL. */
function url(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var character;
  var index;
  var position;
  var protocol;
  var match;
  var length;
  var queue;
  var parenCount;
  var nextCharacter;
  var exit;

  if (!self.options.gfm) {
    return;
  }

  subvalue = '';
  index = -1;
  length = PROTOCOLS_LENGTH;

  while (++index < length) {
    protocol = PROTOCOLS[index];
    match = value.slice(0, protocol.length);

    if (match.toLowerCase() === protocol) {
      subvalue = match;
      break;
    }
  }

  if (!subvalue) {
    return;
  }

  index = subvalue.length;
  length = value.length;
  queue = '';
  parenCount = 0;

  while (index < length) {
    character = value.charAt(index);

    if (whitespace(character) || character === C_LT) {
      break;
    }

    if (
      character === '.' ||
      character === ',' ||
      character === ':' ||
      character === ';' ||
      character === '"' ||
      character === '\'' ||
      character === ')' ||
      character === ']'
    ) {
      nextCharacter = value.charAt(index + 1);

      if (!nextCharacter || whitespace(nextCharacter)) {
        break;
      }
    }

    if (character === C_PAREN_OPEN || character === C_BRACKET_OPEN) {
      parenCount++;
    }

    if (character === C_PAREN_CLOSE || character === C_BRACKET_CLOSE) {
      parenCount--;

      if (parenCount < 0) {
        break;
      }
    }

    queue += character;
    index++;
  }

  if (!queue) {
    return;
  }

  subvalue += queue;
  content = subvalue;

  if (protocol === MAILTO_PROTOCOL) {
    position = queue.indexOf(C_AT_SIGN);

    if (position === -1 || position === length - 1) {
      return;
    }

    content = content.substr(MAILTO_PROTOCOL.length);
  }

  /* istanbul ignore if - never used (yet) */
  if (silent) {
    return true;
  }

  exit = self.enterLink();
  content = self.tokenizeInline(content, eat.now());
  exit();

  return eat(subvalue)({
    type: 'link',
    title: null,
    url: decode(subvalue),
    children: content
  });
}


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenize:yaml
 * @fileoverview Tokenise YAML.
 */



module.exports = yaml;
yaml.onlyAtStart = true;

var FENCE = '---';
var C_DASH = '-';
var C_NEWLINE = '\n';

/* Tokenise YAML. */
function yaml(eat, value, silent) {
  var self = this;
  var subvalue;
  var content;
  var index;
  var length;
  var character;
  var queue;

  if (
    !self.options.yaml ||
    value.charAt(0) !== C_DASH ||
    value.charAt(1) !== C_DASH ||
    value.charAt(2) !== C_DASH ||
    value.charAt(3) !== C_NEWLINE
  ) {
    return;
  }

  subvalue = FENCE + C_NEWLINE;
  content = '';
  queue = '';
  index = 3;
  length = value.length;

  while (++index < length) {
    character = value.charAt(index);

    if (
      character === C_DASH &&
      (queue || !content) &&
      value.charAt(index + 1) === C_DASH &&
      value.charAt(index + 2) === C_DASH
    ) {
      /* istanbul ignore if - never used (yet) */
      if (silent) {
        return true;
      }

      subvalue += queue + FENCE;

      return eat(subvalue)({
        type: 'yaml',
        value: content
      });
    }

    if (character === C_NEWLINE) {
      queue += character;
    } else {
      subvalue += queue + character;
      content += queue + character;
      queue = '';
    }
  }
}


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:tokenizer
 * @fileoverview Markdown tokenizer.
 */



module.exports = factory;

var MERGEABLE_NODES = {
  text: mergeText,
  blockquote: mergeBlockquote
};

/* Check whether a node is mergeable with adjacent nodes. */
function mergeable(node) {
  var start;
  var end;

  if (node.type !== 'text' || !node.position) {
    return true;
  }

  start = node.position.start;
  end = node.position.end;

  /* Only merge nodes which occupy the same size as their
   * `value`. */
  return start.line !== end.line ||
      end.column - start.column === node.value.length;
}

/* Merge two text nodes: `node` into `prev`. */
function mergeText(prev, node) {
  prev.value += node.value;

  return prev;
}

/* Merge two blockquotes: `node` into `prev`, unless in
 * CommonMark mode. */
function mergeBlockquote(prev, node) {
  if (this.options.commonmark) {
    return node;
  }

  prev.children = prev.children.concat(node.children);

  return prev;
}

/* Construct a tokenizer.  This creates both
 * `tokenizeInline` and `tokenizeBlock`. */
function factory(type) {
  return tokenize;

  /* Tokenizer for a bound `type`. */
  function tokenize(value, location) {
    var self = this;
    var offset = self.offset;
    var tokens = [];
    var methods = self[type + 'Methods'];
    var tokenizers = self[type + 'Tokenizers'];
    var line = location.line;
    var column = location.column;
    var index;
    var length;
    var method;
    var name;
    var matched;
    var valueLength;

    /* Trim white space only lines. */
    if (!value) {
      return tokens;
    }

    /* Expose on `eat`. */
    eat.now = now;
    eat.file = self.file;

    /* Sync initial offset. */
    updatePosition('');

    /* Iterate over `value`, and iterate over all
     * tokenizers.  When one eats something, re-iterate
     * with the remaining value.  If no tokenizer eats,
     * something failed (should not happen) and an
     * exception is thrown. */
    while (value) {
      index = -1;
      length = methods.length;
      matched = false;

      while (++index < length) {
        name = methods[index];
        method = tokenizers[name];

        if (
          method &&
          (!method.onlyAtStart || self.atStart) &&
          (!method.notInList || !self.inList) &&
          (!method.notInBlock || !self.inBlock) &&
          (!method.notInLink || !self.inLink)
        ) {
          valueLength = value.length;

          method.apply(self, [eat, value]);

          matched = valueLength !== value.length;

          if (matched) {
            break;
          }
        }
      }

      /* istanbul ignore if */
      if (!matched) {
        self.file.fail(new Error('Infinite loop'), eat.now());
      }
    }

    self.eof = now();

    return tokens;

    /**
     * Update line, column, and offset based on
     * `value`.
     *
     * @example
     *   updatePosition('foo');
     *
     * @param {string} subvalue - Subvalue to eat.
     */
    function updatePosition(subvalue) {
      var lastIndex = -1;
      var index = subvalue.indexOf('\n');

      while (index !== -1) {
        line++;
        lastIndex = index;
        index = subvalue.indexOf('\n', index + 1);
      }

      if (lastIndex === -1) {
        column += subvalue.length;
      } else {
        column = subvalue.length - lastIndex;
      }

      if (line in offset) {
        if (lastIndex !== -1) {
          column += offset[line];
        } else if (column <= offset[line]) {
          column = offset[line] + 1;
        }
      }
    }

    /**
     * Get offset.  Called before the first character is
     * eaten to retrieve the range's offsets.
     *
     * @return {Function} - `done`, to be called when
     *   the last character is eaten.
     */
    function getOffset() {
      var indentation = [];
      var pos = line + 1;

      /**
       * Done.  Called when the last character is
       * eaten to retrieve the range’s offsets.
       *
       * @return {Array.<number>} - Offset.
       */
      return function () {
        var last = line + 1;

        while (pos < last) {
          indentation.push((offset[pos] || 0) + 1);

          pos++;
        }

        return indentation;
      };
    }

    /**
     * Get the current position.
     *
     * @example
     *   position = now(); // {line: 1, column: 1, offset: 0}
     *
     * @return {Object} - Current Position.
     */
    function now() {
      var pos = {line: line, column: column};

      pos.offset = self.toOffset(pos);

      return pos;
    }

    /**
     * Store position information for a node.
     *
     * @example
     *   start = now();
     *   updatePosition('foo');
     *   location = new Position(start);
     *   // {
     *   //   start: {line: 1, column: 1, offset: 0},
     *   //   end: {line: 1, column: 3, offset: 2}
     *   // }
     *
     * @param {Object} start - Starting position.
     */
    function Position(start) {
      this.start = start;
      this.end = now();
    }

    /**
     * Throw when a value is incorrectly eaten.
     * This shouldn’t happen but will throw on new,
     * incorrect rules.
     *
     * @example
     *   // When the current value is set to `foo bar`.
     *   validateEat('foo');
     *   eat('foo');
     *
     *   validateEat('bar');
     *   // throws, because the space is not eaten.
     *
     * @param {string} subvalue - Value to be eaten.
     * @throws {Error} - When `subvalue` cannot be eaten.
     */
    function validateEat(subvalue) {
      /* istanbul ignore if */
      if (value.substring(0, subvalue.length) !== subvalue) {
        /* Capture stack-trace. */
        self.file.fail(
          new Error(
            'Incorrectly eaten value: please report this ' +
            'warning on http://git.io/vg5Ft'
          ),
          now()
        );
      }
    }

    /**
     * Mark position and patch `node.position`.
     *
     * @example
     *   var update = position();
     *   updatePosition('foo');
     *   update({});
     *   // {
     *   //   position: {
     *   //     start: {line: 1, column: 1, offset: 0},
     *   //     end: {line: 1, column: 3, offset: 2}
     *   //   }
     *   // }
     *
     * @returns {Function} - Updater.
     */
    function position() {
      var before = now();

      return update;

      /**
       * Add the position to a node.
       *
       * @example
       *   update({type: 'text', value: 'foo'});
       *
       * @param {Node} node - Node to attach position
       *   on.
       * @param {Array} [indent] - Indentation for
       *   `node`.
       * @return {Node} - `node`.
       */
      function update(node, indent) {
        var prev = node.position;
        var start = prev ? prev.start : before;
        var combined = [];
        var n = prev && prev.end.line;
        var l = before.line;

        node.position = new Position(start);

        /* If there was already a `position`, this
         * node was merged.  Fixing `start` wasn’t
         * hard, but the indent is different.
         * Especially because some information, the
         * indent between `n` and `l` wasn’t
         * tracked.  Luckily, that space is
         * (should be?) empty, so we can safely
         * check for it now. */
        if (prev && indent && prev.indent) {
          combined = prev.indent;

          if (n < l) {
            while (++n < l) {
              combined.push((offset[n] || 0) + 1);
            }

            combined.push(before.column);
          }

          indent = combined.concat(indent);
        }

        node.position.indent = indent || [];

        return node;
      }
    }

    /**
     * Add `node` to `parent`s children or to `tokens`.
     * Performs merges where possible.
     *
     * @example
     *   add({});
     *
     *   add({}, {children: []});
     *
     * @param {Object} node - Node to add.
     * @param {Object} [parent] - Parent to insert into.
     * @return {Object} - Added or merged into node.
     */
    function add(node, parent) {
      var children = parent ? parent.children : tokens;
      var prev = children[children.length - 1];

      if (
        prev &&
        node.type === prev.type &&
        node.type in MERGEABLE_NODES &&
        mergeable(prev) &&
        mergeable(node)
      ) {
        node = MERGEABLE_NODES[node.type].call(self, prev, node);
      }

      if (node !== prev) {
        children.push(node);
      }

      if (self.atStart && tokens.length !== 0) {
        self.exitStart();
      }

      return node;
    }

    /**
     * Remove `subvalue` from `value`.
     * `subvalue` must be at the start of `value`.
     *
     * @example
     *   eat('foo')({type: 'text', value: 'foo'});
     *
     * @param {string} subvalue - Removed from `value`,
     *   and passed to `updatePosition`.
     * @return {Function} - Wrapper around `add`, which
     *   also adds `position` to node.
     */
    function eat(subvalue) {
      var indent = getOffset();
      var pos = position();
      var current = now();

      validateEat(subvalue);

      apply.reset = reset;
      reset.test = test;
      apply.test = test;

      value = value.substring(subvalue.length);

      updatePosition(subvalue);

      indent = indent();

      return apply;

      /**
       * Add the given arguments, add `position` to
       * the returned node, and return the node.
       *
       * @param {Object} node - Node to add.
       * @param {Object} [parent] - Node to insert into.
       * @return {Node} - Added node.
       */
      function apply(node, parent) {
        return pos(add(pos(node), parent), indent);
      }

      /**
       * Functions just like apply, but resets the
       * content:  the line and column are reversed,
       * and the eaten value is re-added.
       *
       * This is useful for nodes with a single
       * type of content, such as lists and tables.
       *
       * See `apply` above for what parameters are
       * expected.
       *
       * @return {Node} - Added node.
       */
      function reset() {
        var node = apply.apply(null, arguments);

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return node;
      }

      /**
       * Test the position, after eating, and reverse
       * to a not-eaten state.
       *
       * @return {Position} - Position after eating `subvalue`.
       */
      function test() {
        var result = pos({});

        line = current.line;
        column = current.column;
        value = subvalue + value;

        return result.position;
      }
    }
  }
}


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:unescape
 * @fileoverview Unescape escapes.
 */



/* Expose. */
module.exports = factory;

/* Factory to de-escape a value, based on a list at `key`
 * in `ctx`. */
function factory(ctx, key) {
  return unescape;

  /* De-escape a string using the expression at `key`
   * in `ctx`. */
  function unescape(value) {
    var prev = 0;
    var index = value.indexOf('\\');
    var escape = ctx[key];
    var queue = [];
    var character;

    while (index !== -1) {
      queue.push(value.slice(prev, index));
      prev = index + 1;
      character = value.charAt(prev);

      /* If the following character is not a valid escape,
       * add the slash. */
      if (!character || escape.indexOf(character) === -1) {
        queue.push('\\');
      }

      index = value.indexOf('\\', prev);
    }

    queue.push(value.slice(prev));

    return queue.join('');
  }
}


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module remark:parse:util:remove-indentation
 * @fileoverview Remove indentation.
 */



/* Dependencies. */
var trim = __webpack_require__(27);
var repeat = __webpack_require__(67);
var getIndent = __webpack_require__(106);

/* Expose. */
module.exports = indentation;

/* Characters. */
var C_SPACE = ' ';
var C_NEWLINE = '\n';
var C_TAB = '\t';

/**
 * Remove the minimum indent from every line in `value`.
 * Supports both tab, spaced, and mixed indentation (as
 * well as possible).
 *
 * @example
 *   removeIndentation('  foo'); // 'foo'
 *   removeIndentation('    foo', 2); // '  foo'
 *   removeIndentation('\tfoo', 2); // '  foo'
 *   removeIndentation('  foo\n bar'); // ' foo\n bar'
 *
 * @param {string} value - Value to trim.
 * @param {number?} [maximum] - Maximum indentation
 *   to remove.
 * @return {string} - Unindented `value`.
 */
function indentation(value, maximum) {
  var values = value.split(C_NEWLINE);
  var position = values.length + 1;
  var minIndent = Infinity;
  var matrix = [];
  var index;
  var indentation;
  var stops;
  var padding;

  values.unshift(repeat(C_SPACE, maximum) + '!');

  while (position--) {
    indentation = getIndent(values[position]);

    matrix[position] = indentation.stops;

    if (trim(values[position]).length === 0) {
      continue;
    }

    if (indentation.indent) {
      if (indentation.indent > 0 && indentation.indent < minIndent) {
        minIndent = indentation.indent;
      }
    } else {
      minIndent = Infinity;

      break;
    }
  }

  if (minIndent !== Infinity) {
    position = values.length;

    while (position--) {
      stops = matrix[position];
      index = minIndent;

      while (index && !(index in stops)) {
        index--;
      }

      if (
        trim(values[position]).length !== 0 &&
        minIndent &&
        index !== minIndent
      ) {
        padding = C_TAB;
      } else {
        padding = '';
      }

      values[position] = padding + values[position].slice(
        index in stops ? stops[index] + 1 : 0
      );
    }
  }

  values.shift();

  return values.join(C_NEWLINE);
}


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

const tokenizeRevision = __webpack_require__(248);
const tokenizeRedaction = __webpack_require__(247);
const tokenizeEllipsis = __webpack_require__(245);
const tokenizeWordChoice = __webpack_require__(251);
const tokenizeTangent = __webpack_require__(250);
const tokenizeNormative = __webpack_require__(246);
const tokenizeSearch = __webpack_require__(249);

function whoa() {
  var Parser = this.Parser;
  var inlineTokenizers = Parser.prototype.inlineTokenizers;
  var inlineMethods = Parser.prototype.inlineMethods;

  inlineTokenizers.revision = tokenizeRevision;
  inlineTokenizers.redaction = tokenizeRedaction;
  inlineTokenizers.ellipsis = tokenizeEllipsis;
  inlineTokenizers.wordChoice = tokenizeWordChoice;
  inlineTokenizers.tangent = tokenizeTangent;
  inlineTokenizers.normative = tokenizeNormative;
  inlineTokenizers.search = tokenizeSearch;

  /* Run my tokenizers just before `text`. */
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'revision');
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'redaction');
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'ellipsis');
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'wordChoice');
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'normative');
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'tangent');
  inlineMethods.splice(inlineMethods.indexOf('text'), 0, 'search');
}

module.exports = whoa;


/***/ }),
/* 245 */
/***/ (function(module, exports) {

function tokenizeEllipsis(eat, value, silent) {
  var match = /(\.\.\.)/.exec(value);

  var index = 0;
  character = value.charAt(index);

  if (character !== '.' || value.charAt(++index) !== character) {
    return;
  }

  if (match) {
    if (silent) {
      return true;
    }

    return eat(match[0])({
      type: 'ellipsis',
      children: [
        {
          value: `${match[0]}`,
          type: 'text',
        },
      ],
    });
  }
}

function locateEllipsis(value, fromIndex) {
  return value.indexOf('...', fromIndex);
}

// tokenizeMention.notInLink = true;
tokenizeEllipsis.locator = locateEllipsis;

module.exports = tokenizeEllipsis;


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A normative―here―is a statement that begins with I should.
 */
const shortid = __webpack_require__(16);


function tokenizeNormative(eat, value, silent) {
  var match = /(I\sshould[^.]*\.)/.exec(value);
  var index = 0;
  character = value.charAt(index);
  index++;

  if (match) {
    if (character === 'I' && match.index === 0) {
      if (silent) {
        return true;
      }
      const now = eat.now();

      return eat(match[0])({
        type: 'normative',
        id: `normative-${shortid.generate()}`,
        children: [
          { type: 'text', value: 'I should ' },
          ...this.tokenizeInline(match[1].replace('I should ', ''), now),
        ] /*[
          {
            value: match[1].trim(),
            type: 'text',
          },
        ],*/,
      });
    }
  }

  return;
}

function locateNormative(value, fromIndex) {
  var match = /(I\sshould[^.]*)\./.exec(value);
  // it seems that either of thse will work...why? What is locate____ doing?
  // return match ? match.index : -1;
  return value.indexOf('I should', fromIndex);
}

tokenizeNormative.locator = locateNormative;

module.exports = tokenizeNormative;


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A redaction is a statememnt like 🕵{statement}
 */
const shortid = __webpack_require__(16);

function tokenizeRedaction(eat, value, silent) {
  var match = /🕵{([^🕵]*)}/.exec(value);
  var index = 0;
  // value.charAt(index) was not working with emoji...
  character = value.slice(index, 2);
  index++;

  if (match) {
    if (character === '🕵' && match.index === 0) {
      if (silent) {
        return true;
      }
      const now = eat.now();

      return eat(match[0])({
        type: 'redaction',
        id: `redaction-${shortid.generate()}`,
        children: [...this.tokenizeInline(match[1], now)],
      });
    }
  }

  return;
}

function locateRedaction(value, fromIndex) {
  return value.indexOf('🕵{', fromIndex);
}

tokenizeRedaction.locator = locateRedaction;

module.exports = tokenizeRedaction;


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * A revision is a statement like 
 * ✍{statement}
 * or ✍{statement}(hint)
 * 
 * ⚠ hint cannot contain parentheses!
 */
const shortid = __webpack_require__(16);

function tokenizeRevision(eat, value, silent) {
  // ⚠ the order of the regex OR groups matters (the parts seperated by pipes)
  var match = /✍{([^✍]*)}\(([^\)]*)\)|✍{([^✍]*)}/.exec(value);
  var index = 0;
  // value.charAt(index) was not working with emoji...
  character = value.slice(index, 2);
  index++;

  if (match) {
    console.log(value, character, match.index, JSON.stringify(match));
    if (character.includes('✍') && match.index === 0) {
      if (silent) {
        return true;
      }
      const now = eat.now();

      if (match[3]) {
        return eat(match[0])({
          type: 'revision',
          id: `revision-${shortid.generate()}`,
          children: [...this.tokenizeInline(match[3], now)],
        });
      }

      return eat(match[0])({
        type: 'revision',
        id: `revision-${shortid.generate()}`,
        children: [...this.tokenizeInline(match[1], now), match[2]],
      });
    }
  }

  return;
}

function locateRevision(value, fromIndex) {
  return value.indexOf('✍{', fromIndex);
}

tokenizeRevision.locator = locateRevision;

module.exports = tokenizeRevision;


/***/ }),
/* 249 */
/***/ (function(module, exports) {

/**
 * Search components are wrapped with 🔎like this🔍.
 */

function tokenizeSearch(eat, value, silent) {
  var match = /🔎(.*)🔍/.exec(value);
  var index = 0;
  // character = value.charAt(index);
  // value.charAt(index) was not working with emoji...
  character = value.slice(index, 2);
  index++;

  if (match) {
    if (character === '🔎' && match.index === 0) {
      if (silent) {
        return true;
      }
      return eat(match[0])({
        type: 'search',
        children: this.tokenizeInline(
          match[1], eat.now()
        ) /*[
          {
            value: match[1].trim(),
            type: 'text',
          },
        ],*/,
      });
    }
  }

  return;
}

function locateSearch(value, fromIndex) {
  var match = /🔎(.*)🔍/.exec(value);
  return value.indexOf('🔎', fromIndex);
}

tokenizeSearch.locator = locateSearch;

module.exports = tokenizeSearch;


/***/ }),
/* 250 */
/***/ (function(module, exports) {

function tokenizeTangent(eat, value, silent) {
  var match = /\|-(.*)-\|/.exec(value);
  var index = 0;
  character = value.charAt(index);
  index++;

  if (match) {
    if (character === '|' && match.index === 0) {
      if (silent) {
        return true;
      }
      return eat(match[0])({
        type: 'tangent',
        children: this.tokenizeInline(match[1], eat.now()),
        /*[
          {
            type: 'text',
            value: match[1].trim(),
          },
        ],*/
      });
    }
  }

  return;
}

function locateTangent(value, fromIndex) {
  var match = /\|-(.*)-\|/.exec(value);

  // it seems that either of thse will work...why? What is locate____ doing?
  // return match ? match.index : -1;
  return value.indexOf('|-', fromIndex);
}

tokenizeTangent.locator = locateTangent;

module.exports = tokenizeTangent;


/***/ }),
/* 251 */
/***/ (function(module, exports) {

/**
 * A wordChoice is either 
 * a word like word(?)
 * or up to three words like {word1, word2, word3}(?)
 * 
 */

function tokenizeWordChoice(eat, value, silent) {
  // var match = /^@(\w+)/.exec(value);
  var match = /{(.*)}\(\?\)|^(\w*)\(\?\)/.exec(value);

  var index = 0;
  character = value.charAt(index);
  index++;

  /**
   * Two cases: 
   * (1) you give multiple words surrounded by curly brackets, followed by (?), 
   * (2) you just put (?) at the end of a single word
   * 
   */

  if (match) {
    if (character === '{' && match.index === 0) {
      if (silent) {
        return true;
      }

      return eat(match[0])({
        type: 'wordChoice',
        children: [...match[1].split(', ').map(word => {
            return {
              type: 'text',
              value: word,
            };
          })],
      });
    }

    if (match.index === 0) {
      if (silent) {
        return true;
      }

      return eat(match[0])({
        type: 'wordChoice',
        children: [
          {
            type: 'text',
            value: match[2],
          },
        ],
      });
    }
  }

  return;
}

function locateWordChoice(value, fromIndex) {
  var match = /{(.*)}\(\?\)|(\w*)\(\?\)/.exec(value);
  return match ? match.index : -1;

  // return value.indexOf('(?)', fromIndex);
}

// tokenizeMention.notInLink = true;
tokenizeWordChoice.locator = locateWordChoice;

module.exports = tokenizeWordChoice;


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var path = __webpack_require__(102);

function replaceExt(npath, ext) {
  if (typeof npath !== 'string') {
    return npath;
  }

  if (npath.length === 0) {
    return npath;
  }

  var nFileName = path.basename(npath, path.extname(npath)) + ext;
  return path.join(path.dirname(npath), nFileName);
}

module.exports = replaceExt;


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module state-toggle
 * @fileoverview Enter/exit a state.
 */



/* eslint-env commonjs */

/* Expose. */
module.exports = factory;

/**
 * Construct a state `toggler`: a function which inverses
 * `property` in context based on its current value.
 * The by `toggler` returned function restores that value.
 *
 * @param {string} key - Property to toggle.
 * @param {boolean} state - Default state.
 * @param {Object?} [ctx] - Context object.
 * @return {Function} - Enter.
 */
function factory(key, state, ctx) {
  /**
   * Enter a state.
   *
   * @return {Function} - Exit state.
   */
  return function () {
    var context = ctx || this;
    var current = context[key];

    context[key] = !state;

    /**
     * Cancel state to its value before entering.
     */
    return function () {
      context[key] = current;
    };
  };
}


/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module trough
 * @fileoverview Middleware.  Inspired by `segmentio/ware`,
 *   but able to change the values from transformer to
 *   transformer.
 */



/* Expose. */
module.exports = trough;

/* Methods. */
var slice = [].slice;

/**
 * Create new middleware.
 *
 * @return {Object} - Middlewre.
 */
function trough() {
  var fns = [];
  var middleware = {};

  middleware.run = run;
  middleware.use = use;

  return middleware;

  /**
   * Run `fns`.  Last argument must be
   * a completion handler.
   *
   * @param {...*} input - Parameters
   */
  function run() {
    var index = -1;
    var input = slice.call(arguments, 0, -1);
    var done = arguments[arguments.length - 1];

    if (typeof done !== 'function') {
      throw new Error('Expected function as last argument, not ' + done);
    }

    next.apply(null, [null].concat(input));

    return;

    /**
     * Run the next `fn`, if any.
     *
     * @param {Error?} err - Failure.
     * @param {...*} values - Other input.
     */
    function next(err) {
      var fn = fns[++index];
      var params = slice.call(arguments, 0);
      var values = params.slice(1);
      var length = input.length;
      var pos = -1;

      if (err) {
        done(err);
        return;
      }

      /* Copy non-nully input into values. */
      while (++pos < length) {
        if (values[pos] === null || values[pos] === undefined) {
          values[pos] = input[pos];
        }
      }

      input = values;

      /* Next or done. */
      if (fn) {
        wrap(fn, next).apply(null, input);
      } else {
        done.apply(null, [null].concat(input));
      }
    }
  }

  /**
   * Add `fn` to the list.
   *
   * @param {Function} fn - Anything `wrap` accepts.
   */
  function use(fn) {
    if (typeof fn !== 'function') {
      throw new Error('Expected `fn` to be a function, not ' + fn);
    }

    fns.push(fn);

    return middleware;
  }
}

/**
 * Wrap `fn`.  Can be sync or async; return a promise,
 * receive a completion handler, return new values and
 * errors.
 *
 * @param {Function} fn - Thing to wrap.
 * @param {Function} next - Completion handler.
 * @return {Function} - Wrapped `fn`.
 */
function wrap(fn, next) {
  var invoked;

  return wrapped;

  function wrapped() {
    var params = slice.call(arguments, 0);
    var callback = fn.length > params.length;
    var result;

    if (callback) {
      params.push(done);
    }

    try {
      result = fn.apply(null, params);
    } catch (err) {
      /* Well, this is quite the pickle.  `fn` received
       * a callback and invoked it (thus continuing the
       * pipeline), but later also threw an error.
       * We’re not about to restart the pipeline again,
       * so the only thing left to do is to throw the
       * thing instea. */
      if (callback && invoked) {
        throw err;
      }

      return done(err);
    }

    if (!callback) {
      if (result && typeof result.then === 'function') {
        result.then(then, done);
      } else if (result instanceof Error) {
        done(result);
      } else {
        then(result);
      }
    }
  }

  /**
   * Invoke `next`, only once.
   *
   * @param {Error?} err - Optional error.
   */
  function done() {
    if (!invoked) {
      invoked = true;

      next.apply(null, arguments);
    }
  }

  /**
   * Invoke `done` with one value.
   * Tracks if an error is passed, too.
   *
   * @param {*} value - Optional value.
   */
  function then(value) {
    done(null, value);
  }
}


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2015 Titus Wormer
 * @license MIT
 * @module unherit
 * @fileoverview Create a custom constructor which can be modified
 *   without affecting the original class.
 */



/* Dependencies. */
var xtend = __webpack_require__(35);
var inherits = __webpack_require__(192);

/* Expose. */
module.exports = unherit;

/**
 * Create a custom constructor which can be modified
 * without affecting the original class.
 *
 * @param {Function} Super - Super-class.
 * @return {Function} - Constructor acting like `Super`,
 *   which can be modified without affecting the original
 *   class.
 */
function unherit(Super) {
  var result;
  var key;
  var value;

  inherits(Of, Super);
  inherits(From, Of);

  /* Clone values. */
  result = Of.prototype;

  for (key in result) {
    value = result[key];

    if (value && typeof value === 'object') {
      result[key] = 'concat' in value ? value.concat() : xtend(value);
    }
  }

  return Of;

  /**
   * Constructor accepting a single argument,
   * which itself is an `arguments` object.
   */
  function From(parameters) {
    return Super.apply(this, parameters);
  }

  /**
   * Constructor accepting variadic arguments.
   */
  function Of() {
    if (!(this instanceof Of)) {
      return new From(arguments);
    }

    return Super.apply(this, arguments);
  }
}


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Dependencies. */
var extend = __webpack_require__(191);
var bail = __webpack_require__(189);
var vfile = __webpack_require__(261);
var trough = __webpack_require__(254);
var string = __webpack_require__(263);
var func = __webpack_require__(262);
var plain = __webpack_require__(196);

/* Expose a frozen processor. */
module.exports = unified().freeze();

var slice = [].slice;
var own = {}.hasOwnProperty;

/* Process pipeline. */
var pipeline = trough().use(pipelineParse).use(pipelineRun).use(pipelineStringify);

function pipelineParse(p, ctx) {
  ctx.tree = p.parse(ctx.file);
}

function pipelineRun(p, ctx, next) {
  p.run(ctx.tree, ctx.file, done);

  function done(err, tree, file) {
    if (err) {
      next(err);
    } else {
      ctx.tree = tree;
      ctx.file = file;
      next();
    }
  }
}

function pipelineStringify(p, ctx) {
  ctx.file.contents = p.stringify(ctx.tree, ctx.file);
}

/* Function to create the first processor. */
function unified() {
  var attachers = [];
  var transformers = trough();
  var namespace = {};
  var frozen = false;
  var freezeIndex = -1;

  /* Data management. */
  processor.data = data;

  /* Lock. */
  processor.freeze = freeze;

  /* Plug-ins. */
  processor.attachers = attachers;
  processor.use = use;

  /* API. */
  processor.parse = parse;
  processor.stringify = stringify;
  processor.run = run;
  processor.runSync = runSync;
  processor.process = process;
  processor.processSync = processSync;

  /* Expose. */
  return processor;

  /* Create a new processor based on the processor
   * in the current scope. */
  function processor() {
    var destination = unified();
    var length = attachers.length;
    var index = -1;

    while (++index < length) {
      destination.use.apply(null, attachers[index]);
    }

    destination.data(extend(true, {}, namespace));

    return destination;
  }

  /* Freeze: used to signal a processor that has finished
   * configuration.
   *
   * For example, take unified itself.  It’s frozen.
   * Plug-ins should not be added to it.  Rather, it should
   * be extended, by invoking it, before modifying it.
   *
   * In essence, always invoke this when exporting a
   * processor. */
  function freeze() {
    var values;
    var plugin;
    var options;
    var transformer;

    if (frozen) {
      return processor;
    }

    while (++freezeIndex < attachers.length) {
      values = attachers[freezeIndex];
      plugin = values[0];
      options = values[1];
      transformer = null;

      if (options === false) {
        continue;
      }

      if (options === true) {
        values[1] = undefined;
      }

      transformer = plugin.apply(processor, values.slice(1));

      if (func(transformer)) {
        transformers.use(transformer);
      }
    }

    frozen = true;
    freezeIndex = Infinity;

    return processor;
  }

  /* Data management.
   * Getter / setter for processor-specific informtion. */
  function data(key, value) {
    if (string(key)) {
      /* Set `key`. */
      if (arguments.length === 2) {
        assertUnfrozen('data', frozen);

        namespace[key] = value;

        return processor;
      }

      /* Get `key`. */
      return (own.call(namespace, key) && namespace[key]) || null;
    }

    /* Set space. */
    if (key) {
      assertUnfrozen('data', frozen);
      namespace = key;
      return processor;
    }

    /* Get space. */
    return namespace;
  }

  /* Plug-in management.
   *
   * Pass it:
   * *   an attacher and options,
   * *   a preset,
   * *   a list of presets, attachers, and arguments (list
   *     of attachers and options). */
  function use(value) {
    var settings;

    assertUnfrozen('use', frozen);

    if (value === null || value === undefined) {
      /* Empty */
    } else if (func(value)) {
      addPlugin.apply(null, arguments);
    } else if (typeof value === 'object') {
      if ('length' in value) {
        addList(value);
      } else {
        addPreset(value);
      }
    } else {
      throw new Error('Expected usable value, not `' + value + '`');
    }

    if (settings) {
      namespace.settings = extend(namespace.settings || {}, settings);
    }

    return processor;

    function addPreset(result) {
      addList(result.plugins);

      if (result.settings) {
        settings = extend(settings || {}, result.settings);
      }
    }

    function add(value) {
      if (func(value)) {
        addPlugin(value);
      } else if (typeof value === 'object') {
        if ('length' in value) {
          addPlugin.apply(null, value);
        } else {
          addPreset(value);
        }
      } else {
        throw new Error('Expected usable value, not `' + value + '`');
      }
    }

    function addList(plugins) {
      var length;
      var index;

      if (plugins === null || plugins === undefined) {
        /* Empty */
      } else if (typeof plugins === 'object' && 'length' in plugins) {
        length = plugins.length;
        index = -1;

        while (++index < length) {
          add(plugins[index]);
        }
      } else {
        throw new Error('Expected a list of plugins, not `' + plugins + '`');
      }
    }

    function addPlugin(plugin, value) {
      var entry = find(plugin);

      if (entry) {
        if (plain(entry[1]) && plain(value)) {
          value = extend(entry[1], value);
        }

        entry[1] = value;
      } else {
        attachers.push(slice.call(arguments));
      }
    }
  }

  function find(plugin) {
    var length = attachers.length;
    var index = -1;
    var entry;

    while (++index < length) {
      entry = attachers[index];

      if (entry[0] === plugin) {
        return entry;
      }
    }
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the
   * processor. */
  function parse(doc) {
    var file = vfile(doc);
    var Parser;

    freeze();
    Parser = processor.Parser;
    assertParser('parse', Parser);

    if (newable(Parser)) {
      return new Parser(String(file), file).parse();
    }

    return Parser(String(file), file); // eslint-disable-line new-cap
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), async. */
  function run(node, file, cb) {
    assertNode(node);
    freeze();

    if (!cb && func(file)) {
      cb = file;
      file = null;
    }

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      transformers.run(node, vfile(file), done);

      function done(err, tree, file) {
        tree = tree || node;
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(tree);
        } else {
          cb(null, tree, file);
        }
      }
    }
  }

  /* Run transforms on a Unist node representation of a file
   * (in string or VFile representation), sync. */
  function runSync(node, file) {
    var complete = false;
    var result;

    run(node, file, done);

    assertDone('runSync', 'run', complete);

    return result;

    function done(err, tree) {
      complete = true;
      bail(err);
      result = tree;
    }
  }

  /* Stringify a Unist node representation of a file
   * (in string or VFile representation) into a string
   * using the `Compiler` on the processor. */
  function stringify(node, doc) {
    var file = vfile(doc);
    var Compiler;

    freeze();
    Compiler = processor.Compiler;
    assertCompiler('stringify', Compiler);
    assertNode(node);

    if (newable(Compiler)) {
      return new Compiler(node, file).compile();
    }

    return Compiler(node, file); // eslint-disable-line new-cap
  }

  /* Parse a file (in string or VFile representation)
   * into a Unist node using the `Parser` on the processor,
   * then run transforms on that node, and compile the
   * resulting node using the `Compiler` on the processor,
   * and store that result on the VFile. */
  function process(doc, cb) {
    freeze();
    assertParser('process', processor.Parser);
    assertCompiler('process', processor.Compiler);

    if (!cb) {
      return new Promise(executor);
    }

    executor(null, cb);

    function executor(resolve, reject) {
      var file = vfile(doc);

      pipeline.run(processor, {file: file}, done);

      function done(err) {
        if (err) {
          reject(err);
        } else if (resolve) {
          resolve(file);
        } else {
          cb(null, file);
        }
      }
    }
  }

  /* Process the given document (in string or VFile
   * representation), sync. */
  function processSync(doc) {
    var complete = false;
    var file;

    freeze();
    assertParser('processSync', processor.Parser);
    assertCompiler('processSync', processor.Compiler);
    file = vfile(doc);

    process(file, done);

    assertDone('processSync', 'process', complete);

    return file;

    function done(err) {
      complete = true;
      bail(err);
    }
  }
}

/* Check if `func` is a constructor. */
function newable(value) {
  return func(value) && keys(value.prototype);
}

/* Check if `value` is an object with keys. */
function keys(value) {
  var key;
  for (key in value) {
    return true;
  }
  return false;
}

/* Assert a parser is available. */
function assertParser(name, Parser) {
  if (!func(Parser)) {
    throw new Error('Cannot `' + name + '` without `Parser`');
  }
}

/* Assert a compiler is available. */
function assertCompiler(name, Compiler) {
  if (!func(Compiler)) {
    throw new Error('Cannot `' + name + '` without `Compiler`');
  }
}

/* Assert the processor is not frozen. */
function assertUnfrozen(name, frozen) {
  if (frozen) {
    throw new Error(
      'Cannot invoke `' + name + '` on a frozen processor.\n' +
      'Create a new processor first, by invoking it: ' +
      'use `processor()` instead of `processor`.'
    );
  }
}

/* Assert `node` is a Unist node. */
function assertNode(node) {
  if (!node || !string(node.type)) {
    throw new Error('Expected node, got `' + node + '`');
  }
}

/* Assert that `complete` is `true`. */
function assertDone(name, asyncName, complete) {
  if (!complete) {
    throw new Error('`' + name + '` finished async. Use `' + asyncName + '` instead');
  }
}


/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var visit = __webpack_require__(259);

module.exports = removePosition;

/* Remove `position`s from `tree`. */
function removePosition(node, force) {
  visit(node, force ? hard : soft);
  return node;
}

function hard(node) {
  delete node.position;
}

function soft(node) {
  node.position = undefined;
}


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var own = {}.hasOwnProperty;

module.exports = stringify;

function stringify(value) {
  /* Nothing. */
  if (!value || typeof value !== 'object') {
    return null;
  }

  /* Node. */
  if (own.call(value, 'position') || own.call(value, 'type')) {
    return location(value.position);
  }

  /* Location. */
  if (own.call(value, 'start') || own.call(value, 'end')) {
    return location(value);
  }

  /* Position. */
  if (own.call(value, 'line') || own.call(value, 'column')) {
    return position(value);
  }

  /* ? */
  return null;
}

function position(pos) {
  if (!pos || typeof pos !== 'object') {
    pos = {};
  }

  return index(pos.line) + ':' + index(pos.column);
}

function location(loc) {
  if (!loc || typeof loc !== 'object') {
    loc = {};
  }

  return position(loc.start) + '-' + position(loc.end);
}

function index(value) {
  return value && typeof value === 'number' ? value : 1;
}


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* Expose. */
module.exports = visit;

/* Visit. */
function visit(tree, type, visitor, reverse) {
  if (typeof type === 'function') {
    reverse = visitor;
    visitor = type;
    type = null;
  }

  one(tree);

  /* Visit a single node. */
  function one(node, index, parent) {
    var result;

    index = index || (parent ? 0 : null);

    if (!type || node.type === type) {
      result = visitor(node, index, parent || null);
    }

    if (node.children && result !== false) {
      return all(node.children, node);
    }

    return result;
  }

  /* Visit children in `parent`. */
  function all(children, parent) {
    var step = reverse ? -1 : 1;
    var max = children.length;
    var min = -1;
    var index = (reverse ? max : min) + step;
    var child;

    while (index > min && index < max) {
      child = children[index];

      if (child && one(child, index, parent) === false) {
        return false;
      }

      index += step;
    }

    return true;
  }
}


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module vfile-location
 * @fileoverview Convert between positions (line and column-based)
 *   and offsets (range-based) locations in a virtual file.
 */



/* Expose. */
module.exports = factory;

/**
 * Factory.
 *
 * @param {VFile|string|Buffer} file - Virtual file or document.
 */
function factory(file) {
  var contents = indices(String(file));

  return {
    toPosition: offsetToPositionFactory(contents),
    toOffset: positionToOffsetFactory(contents)
  };
}

/**
 * Factory to get the line and column-based `position` for
 * `offset` in the bound indices.
 *
 * @param {Array.<number>} indices - Indices of
 *   line-breaks in `value`.
 * @return {Function} - Bound method.
 */
function offsetToPositionFactory(indices) {
  return offsetToPosition;

  /**
   * Get the line and column-based `position` for
   * `offset` in the bound indices.
   *
   * @param {number} offset - Offset.
   * @return {Position} - Object with `line`, `column`,
   *   and `offset` properties based on the bound
   *   `indices`.  An empty object when given invalid
   *   or out of bounds input.
   */
  function offsetToPosition(offset) {
    var index = -1;
    var length = indices.length;

    if (offset < 0) {
      return {};
    }

    while (++index < length) {
      if (indices[index] > offset) {
        return {
          line: index + 1,
          column: (offset - (indices[index - 1] || 0)) + 1,
          offset: offset
        };
      }
    }

    return {};
  }
}

/**
 * Factory to get the `offset` for a line and column-based
 * `position` in the bound indices.
 *
 * @param {Array.<number>} indices - Indices of
 *   line-breaks in `value`.
 * @return {Function} - Bound method.
 */
function positionToOffsetFactory(indices) {
  return positionToOffset;

  /**
   * Get the `offset` for a line and column-based
   * `position` in the bound indices.
   *
   * @param {Position} position - Object with `line` and
   *   `column` properties.
   * @return {number} - Offset. `-1` when given invalid
   *   or out of bounds input.
   */
  function positionToOffset(position) {
    var line = position && position.line;
    var column = position && position.column;

    if (!isNaN(line) && !isNaN(column) && line - 1 in indices) {
      return ((indices[line - 2] || 0) + column - 1) || 0;
    }

    return -1;
  }
}

/**
 * Get indices of line-breaks in `value`.
 *
 * @param {string} value - Value.
 * @return {Array.<number>} - List of indices of
 *   line-breaks.
 */
function indices(value) {
  var result = [];
  var index = value.indexOf('\n');

  while (index !== -1) {
    result.push(index + 1);
    index = value.indexOf('\n', index + 1);
  }

  result.push(value.length + 1);

  return result;
}


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var path = __webpack_require__(102);
var replace = __webpack_require__(252);
var stringify = __webpack_require__(258);
var buffer = __webpack_require__(194);

module.exports = VFile;

var own = {}.hasOwnProperty;
var proto = VFile.prototype;

proto.toString = toString;
proto.message = message;
proto.fail = fail;

/* Slight backwards compatibility.  Remove in the future. */
proto.warn = message;

/* Order of setting (least specific to most), we need this because
 * otherwise `{stem: 'a', path: '~/b.js'}` would throw, as a path
 * is needed before a stem can be set. */
var order = [
  'history',
  'path',
  'basename',
  'stem',
  'extname',
  'dirname'
];

/* Construct a new file. */
function VFile(options) {
  var prop;
  var index;
  var length;

  if (!options) {
    options = {};
  } else if (typeof options === 'string' || buffer(options)) {
    options = {contents: options};
  } else if ('message' in options && 'messages' in options) {
    return options;
  }

  if (!(this instanceof VFile)) {
    return new VFile(options);
  }

  this.data = {};
  this.messages = [];
  this.history = [];
  this.cwd = process.cwd();

  /* Set path related properties in the correct order. */
  index = -1;
  length = order.length;

  while (++index < length) {
    prop = order[index];

    if (own.call(options, prop)) {
      this[prop] = options[prop];
    }
  }

  /* Set non-path related properties. */
  for (prop in options) {
    if (order.indexOf(prop) === -1) {
      this[prop] = options[prop];
    }
  }
}

/* Access full path (`~/index.min.js`). */
Object.defineProperty(proto, 'path', {
  get: function () {
    return this.history[this.history.length - 1];
  },
  set: function (path) {
    assertNonEmpty(path, 'path');

    if (path !== this.path) {
      this.history.push(path);
    }
  }
});

/* Access parent path (`~`). */
Object.defineProperty(proto, 'dirname', {
  get: function () {
    return typeof this.path === 'string' ? path.dirname(this.path) : undefined;
  },
  set: function (dirname) {
    assertPath(this.path, 'dirname');
    this.path = path.join(dirname || '', this.basename);
  }
});

/* Access basename (`index.min.js`). */
Object.defineProperty(proto, 'basename', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path) : undefined;
  },
  set: function (basename) {
    assertNonEmpty(basename, 'basename');
    assertPart(basename, 'basename');
    this.path = path.join(this.dirname || '', basename);
  }
});

/* Access extname (`.js`). */
Object.defineProperty(proto, 'extname', {
  get: function () {
    return typeof this.path === 'string' ? path.extname(this.path) : undefined;
  },
  set: function (extname) {
    var ext = extname || '';

    assertPart(ext, 'extname');
    assertPath(this.path, 'extname');

    if (ext) {
      if (ext.charAt(0) !== '.') {
        throw new Error('`extname` must start with `.`');
      }

      if (ext.indexOf('.', 1) !== -1) {
        throw new Error('`extname` cannot contain multiple dots');
      }
    }

    this.path = replace(this.path, ext);
  }
});

/* Access stem (`index.min`). */
Object.defineProperty(proto, 'stem', {
  get: function () {
    return typeof this.path === 'string' ? path.basename(this.path, this.extname) : undefined;
  },
  set: function (stem) {
    assertNonEmpty(stem, 'stem');
    assertPart(stem, 'stem');
    this.path = path.join(this.dirname || '', stem + (this.extname || ''));
  }
});

/* Get the value of the file. */
function toString(encoding) {
  var value = this.contents || '';
  return buffer(value) ? value.toString(encoding) : String(value);
}

/* Create a message with `reason` at `position`.
 * When an error is passed in as `reason`, copies the
 * stack.  This does not add a message to `messages`. */
function message(reason, position, ruleId) {
  var filePath = this.path;
  var range = stringify(position) || '1:1';
  var location;
  var err;

  location = {
    start: {line: null, column: null},
    end: {line: null, column: null}
  };

  if (position && position.position) {
    position = position.position;
  }

  if (position) {
    /* Location. */
    if (position.start) {
      location = position;
      position = position.start;
    } else {
      /* Position. */
      location.start = position;
    }
  }

  err = new VMessage(reason.message || reason);

  err.name = (filePath ? filePath + ':' : '') + range;
  err.file = filePath || '';
  err.reason = reason.message || reason;
  err.line = position ? position.line : null;
  err.column = position ? position.column : null;
  err.location = location;
  err.ruleId = ruleId || null;
  err.source = null;
  err.fatal = false;

  if (reason.stack) {
    err.stack = reason.stack;
  }

  this.messages.push(err);

  return err;
}

/* Fail. Creates a vmessage, associates it with the file,
 * and throws it. */
function fail() {
  var message = this.message.apply(this, arguments);

  message.fatal = true;

  throw message;
}

/* Inherit from `Error#`. */
function VMessagePrototype() {}
VMessagePrototype.prototype = Error.prototype;
VMessage.prototype = new VMessagePrototype();

/* Message properties. */
proto = VMessage.prototype;

proto.file = '';
proto.name = '';
proto.reason = '';
proto.message = '';
proto.stack = '';
proto.fatal = null;
proto.column = null;
proto.line = null;

/* Construct a new file message.
 *
 * Note: We cannot invoke `Error` on the created context,
 * as that adds readonly `line` and `column` attributes on
 * Safari 9, thus throwing and failing the data. */
function VMessage(reason) {
  this.message = reason;
}

/* Assert that `part` is not a path (i.e., does
 * not contain `path.sep`). */
function assertPart(part, name) {
  if (part.indexOf(path.sep) !== -1) {
    throw new Error('`' + name + '` cannot be a path: did not expect `' + path.sep + '`');
  }
}

/* Assert that `part` is not empty. */
function assertNonEmpty(part, name) {
  if (!part) {
    throw new Error('`' + name + '` cannot be empty');
  }
}

/* Assert `path` exists. */
function assertPath(path, name) {
  if (!path) {
    throw new Error('Setting `' + name + '` requires `path` to be set too');
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ }),
/* 262 */
/***/ (function(module, exports) {

module.exports = function isFunction (fn) {
  return Object.prototype.toString.call(fn) === '[object Function]'
}


/***/ }),
/* 263 */
/***/ (function(module, exports) {

var toString = Object.prototype.toString

module.exports = isString

function isString(obj) {
    return toString.call(obj) === "[object String]"
}


/***/ })
]);
          })
        