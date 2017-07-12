var WSReader =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wsReader = __webpack_require__(1);
	
	module.exports = { WSReader: _wsReader.WSReader };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.WSReader = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable */
	
	var _wsReaderTypeWsjson = __webpack_require__(2);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var READER_TYPES = {
	  'default': _wsReaderTypeWsjson.WsReaderWsjson,
	  'wsJson': _wsReaderTypeWsjson.WsReaderWsjson
	};
	
	var WSReader = exports.WSReader = function () {
	  function WSReader() {
	    _classCallCheck(this, WSReader);
	  }
	
	  _createClass(WSReader, [{
	    key: 'getReader',
	    value: function getReader(readerType) {
	      return READER_TYPES[readerType] ? READER_TYPES[readerType] : READER_TYPES['default'];
	    }
	  }]);

	  return WSReader;
	}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _wsReaderTypeBase = __webpack_require__(3);
	
	var _map2 = __webpack_require__(61);
	
	var _map3 = _interopRequireDefault(_map2);
	
	var _zipObject2 = __webpack_require__(147);
	
	var _zipObject3 = _interopRequireDefault(_zipObject2);
	
	var _isObject2 = __webpack_require__(8);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _isNil2 = __webpack_require__(149);
	
	var _isNil3 = _interopRequireDefault(_isNil2);
	
	var _vizabiUtils = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// Init Base Class
	/* eslint-disable */
	
	var WsReaderWsjson = (0, _wsReaderTypeBase.WsReaderBase)();
	
	// Redefine Functionality
	
	WsReaderWsjson._parseResponsePacked = function (resolve, reject, path, query, parsers, resp, done) {
	  var respReady = _vizabiUtils.VizabiUtils.mapRows(this._uzip(resp.data || resp), parsers);
	  done(resolve, reject, path, query, respReady);
	};
	
	WsReaderWsjson._uzip = function (table) {
	  var rows = table.rows;
	  var headers = table.headers;
	  return (0, _map3.default)(rows, function (row) {
	    return (0, _zipObject3.default)(headers, (0, _map3.default)(row, function (cell) {
	      if ((0, _isObject3.default)(cell)) {
	        return JSON.stringify(cell);
	      }
	      return (0, _isNil3.default)(cell) ? null : cell.toString();
	    }));
	  });
	};
	
	module.exports = { WsReaderWsjson: WsReaderWsjson };

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /* eslint-disable */
	
	var _vizabiUtils = __webpack_require__(4);
	
	var _isString2 = __webpack_require__(6);
	
	var _isString3 = _interopRequireDefault(_isString2);
	
	var _isObject2 = __webpack_require__(8);
	
	var _isObject3 = _interopRequireDefault(_isObject2);
	
	var _extend2 = __webpack_require__(9);
	
	var _extend3 = _interopRequireDefault(_extend2);
	
	var _trimStart2 = __webpack_require__(39);
	
	var _trimStart3 = _interopRequireDefault(_trimStart2);
	
	var _trimEnd2 = __webpack_require__(49);
	
	var _trimEnd3 = _interopRequireDefault(_trimEnd2);
	
	var _endsWith2 = __webpack_require__(51);
	
	var _endsWith3 = _interopRequireDefault(_endsWith2);
	
	var _split4 = __webpack_require__(53);
	
	var _split5 = _interopRequireDefault(_split4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Promise = __webpack_require__(56);
	var Urlon = __webpack_require__(60);
	
	function WsReaderBase() {
	
	  return {
	    init: function init(reader_info) {
	
	      this.CONST = {
	        ERROR_NETWORK: 'Connection Problem',
	        ERROR_RESPONSE: 'Bad Response',
	        ERROR_ORDERING: 'Cannot sort response. Column does not exist in result.',
	        ERROR_PARAM_PATH: 'Missing base path for waffle reader'
	      };
	
	      this._assetsPath = (0, _trimEnd3.default)(reader_info.assetsPath || '/api/ddf/assets', '/');
	      this._dataset = reader_info.dataset;
	
	      this._name = 'waffle';
	      this._basepath = reader_info.path;
	
	      // TEMP :: Fix for Vizabi
	      var correctPath = '/api/ddf/ql';
	      var oldPath = '/api/ddf';
	
	      this._basepath = this._basepath.indexOf(correctPath) === -1 ? this._basepath.replace(oldPath, correctPath) : this._basepath;
	
	      if (!this._basepath) {
	        _vizabiUtils.VizabiUtils.error(this.CONST.ERROR_PARAM_PATH);
	      }
	    },
	    _toDatasetPath: function _toDatasetPath() {
	      var dataset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
	
	      if (dataset === 'default') {
	        return dataset;
	      }
	
	      var _split2 = (0, _split5.default)(dataset, '#'),
	          _split3 = _slicedToArray(_split2, 2),
	          path = _split3[0],
	          _split3$ = _split3[1],
	          branch = _split3$ === undefined ? 'master' : _split3$;
	
	      return path ? path + '/' + branch : 'default';
	    },
	
	
	    /**
	     * 
	     * @param {string} asset - asset that needs to be requested.
	     * @param {object} options - might contain "dataset" (in a format GITHUB_ACCOUNT_NAME/REPOSITORY#BRANCH) and "dataset_access_token" (for private repos) properties.
	     * @returns {Promise} - once resolved - asset in a json or text format will be available via this Promise. Actual data depends on requested asset extension (@see asset)
	     */
	    getAsset: function getAsset(asset) {
	      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      var datasetPath = this._toDatasetPath(options.dataset || this._dataset);
	      var trimmedAsset = (0, _trimStart3.default)(asset, '/');
	      var isJsonAsset = (0, _endsWith3.default)(trimmedAsset, '.json');
	      var queryString = options.dataset_access_token ? 'dataset_access_token=' + options.dataset_access_token : '';
	      var url = this._assetsPath + '/' + datasetPath + '/' + trimmedAsset;
	
	      return new Promise(function (resolve, reject) {
	        return _vizabiUtils.VizabiUtils.getRequest(url, queryString, resolve, reject, isJsonAsset);
	      });
	    },
	    read: function read(query) {
	      var parsers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	      var _this = this;
	
	      if ((0, _isString3.default)(query.dataset)) {
	        query = (0, _extend3.default)({}, query, { dataset: encodeURIComponent(query.dataset) });
	      }
	
	      return new Promise(function (resolve, reject) {
	        var path = _this._basepath;
	        var queryGet = Urlon.stringify(query);
	
	        if (queryGet.length > 4000) {
	          _vizabiUtils.VizabiUtils.postRequest(path, query, _this._readCallbackSuccess.bind(_this, resolve, reject, path, query, parsers), _this._readCallbackError.bind(_this, resolve, reject, path, query), true);
	        } else {
	          _vizabiUtils.VizabiUtils.getRequest(path, queryGet, _this._readCallbackSuccess.bind(_this, resolve, reject, path, query, parsers), _this._readCallbackError.bind(_this, resolve, reject, path, query), true);
	        }
	      });
	    },
	
	
	    /* private */
	
	    _encodeQueryDDFQLHook: function _encodeQueryDDFQLHook(encodedQuery) {
	      return encodedQuery;
	    },
	
	    _readCallbackSuccess: function _readCallbackSuccess(resolve, reject, path, query, parsers, resp) {
	
	      if ((0, _isObject3.default)(resp)) {
	        return this._parseResponsePacked(resolve, reject, path, query, parsers, resp, this._readCallbackSuccessDone.bind(this));
	      }
	
	      _vizabiUtils.VizabiUtils.error("Bad Response Format: " + path, resp);
	      reject({
	        'message': this.CONST.ERROR_RESPONSE,
	        'data': resp
	      });
	    },
	
	    // SHOULD BE IMPLEMENTED IN CHILD CLASS
	    _parseResponsePacked: function _parseResponsePacked(resolve, reject, path, query, parsers, resp, done) {
	      done(resolve, reject, path, query, parsers, resp);
	    },
	
	    _readCallbackSuccessDone: function _readCallbackSuccessDone(resolve, reject, path, query, resp) {
	      this._parse(resolve, reject, query, resp);
	    },
	
	    _parse: function _parse(resolve, reject, query, resp) {
	      var data = resp;
	
	      if (query.orderBy && data[0]) {
	        if (data[0][query.orderBy]) {
	          data.sort(function (a, b) {
	            return a[query.orderBy] - b[query.orderBy];
	          });
	        } else {
	          return reject({
	            'message': this.CONST.ERROR_ORDERING,
	            'data': query.orderBy
	          });
	        }
	      }
	
	      resolve(data);
	    },
	
	    _readCallbackError: function _readCallbackError(resolve, reject, path, query, resp) {
	      reject({
	        'message': this.CONST.ERROR_NETWORK,
	        'data': path
	      });
	    }
	
	  };
	}
	
	module.exports = { WsReaderBase: WsReaderBase };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _isArray = __webpack_require__(5);
	
	var _isArray2 = _interopRequireDefault(_isArray);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	// from Vizabi Lib ...
	
	function utils() {
	  return {
	    error: error,
	    mapRows: mapRows,
	    getRequest: getRequest,
	    postRequest: postRequest,
	    ajax: ajax
	  };
	
	  function error(message) {
	    message = Array.prototype.slice.call(arguments).join(' ');
	    if (console && typeof console.error === 'function') {
	      console.error(message);
	    }
	  }
	
	  function mapRows(original, formatters) {
	    function mapRow(value, fmt) {
	      if (!(0, _isArray2.default)(value)) {
	        return fmt(value);
	      } else {
	        var res = [];
	        for (var i = 0; i < value.length; i++) {
	          res[i] = mapRow(value[i], fmt);
	        }
	        return res;
	      }
	    }
	
	    // default formatter turns empty strings in null and converts numeric values into number
	    //TODO: default formatter is moved to utils. need to return it to hook prototype class, but retest #1212 #1230 #1253
	    var defaultFormatter = function defaultFormatter(val) {
	      var newVal = val;
	      if (val === '') {
	        newVal = null;
	      } else {
	        // check for numberic
	        var numericVal = parseFloat(val);
	        if (!isNaN(numericVal) && isFinite(val)) {
	          newVal = numericVal;
	        }
	      }
	      return newVal;
	    };
	
	    original = original.map(function (row) {
	      var columns = Object.keys(row);
	
	      for (var i = 0; i < columns.length; i++) {
	        var col = columns[i];
	        row[col] = mapRow(row[col], formatters[col] || defaultFormatter);
	      }
	      return row;
	    });
	
	    return original;
	  }
	
	  function getRequest(url, queryStr, success, error, json) {
	    if (queryStr) {
	      url += url.indexOf("?") === -1 ? '?' + queryStr : '&' + queryStr;
	    }
	
	    ajax({
	      method: 'GET',
	      url: url,
	      success: success,
	      error: error,
	      json: json
	    });
	  }
	
	  function postRequest(url, query, success, error, json) {
	    query = query || {};
	    var data = JSON.stringify(query);
	
	    ajax({
	      method: 'POST',
	      url: url,
	      success: success,
	      error: error,
	      json: json,
	      data: data
	    });
	  }
	
	  /* private */
	
	  function ajax(options) {
	    var request = new XMLHttpRequest();
	    request.open(options.method, options.url, true);
	    if (options.method === 'POST' && !options.json) {
	      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
	    } else if (options.method === 'POST' && options.json) {
	      request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
	    }
	    request.onload = function () {
	      if (request.status >= 200 && request.status < 400) {
	        // Success!
	        var data = options.json ? JSON.parse(request.responseText) : request.responseText;
	        if (options.success) {
	          options.success(data);
	        }
	      } else {
	        if (options.error) {
	          options.error();
	        }
	      }
	    };
	    request.onerror = function () {
	      if (options.error) {
	        options.error();
	      }
	    };
	    request.send(options.data);
	  };
	} /* eslint-disable */
	
	var VizabiUtils = new utils();
	module.exports = { VizabiUtils: VizabiUtils };

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;
	
	module.exports = isArray;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(5),
	    isObjectLike = __webpack_require__(7);
	
	/** `Object#toString` result references. */
	var stringTag = '[object String]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
	}
	
	module.exports = isString;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
	}
	
	module.exports = isObjectLike;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return !!value && (type == 'object' || type == 'function');
	}
	
	module.exports = isObject;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	module.exports = __webpack_require__(10);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assignValue = __webpack_require__(11),
	    copyObject = __webpack_require__(13),
	    createAssigner = __webpack_require__(14),
	    isArrayLike = __webpack_require__(16),
	    isPrototype = __webpack_require__(28),
	    keysIn = __webpack_require__(29);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');
	
	/**
	 * This method is like `_.assign` except that it iterates over own and
	 * inherited source properties.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assign
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * function Bar() {
	 *   this.d = 4;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 * Bar.prototype.e = 5;
	 *
	 * _.assignIn({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 }
	 */
	var assignIn = createAssigner(function (object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keysIn(source), object);
	    return;
	  }
	  for (var key in source) {
	    assignValue(object, key, source[key]);
	  }
	});
	
	module.exports = assignIn;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var eq = __webpack_require__(12);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
	    object[key] = value;
	  }
	}
	
	module.exports = assignValue;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || value !== value && other !== other;
	}
	
	module.exports = eq;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assignValue = __webpack_require__(11);
	
	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});
	
	  var index = -1,
	      length = props.length;
	
	  while (++index < length) {
	    var key = props[index];
	
	    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : source[key];
	
	    assignValue(object, key, newValue);
	  }
	  return object;
	}
	
	module.exports = copyObject;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isIterateeCall = __webpack_require__(15),
	    rest = __webpack_require__(22);
	
	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function (object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;
	
	    customizer = assigner.length > 3 && typeof customizer == 'function' ? (length--, customizer) : undefined;
	
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}
	
	module.exports = createAssigner;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var eq = __webpack_require__(12),
	    isArrayLike = __webpack_require__(16),
	    isIndex = __webpack_require__(21),
	    isObject = __webpack_require__(8);
	
	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index === 'undefined' ? 'undefined' : _typeof(index);
	  if (type == 'number' ? isArrayLike(object) && isIndex(index, object.length) : type == 'string' && index in object) {
	    return eq(object[index], value);
	  }
	  return false;
	}
	
	module.exports = isIterateeCall;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getLength = __webpack_require__(17),
	    isFunction = __webpack_require__(19),
	    isLength = __webpack_require__(20);
	
	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}
	
	module.exports = isArrayLike;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(18);
	
	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');
	
	module.exports = getLength;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : object[key];
	  };
	}
	
	module.exports = baseProperty;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}
	
	module.exports = isFunction;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}
	
	module.exports = isLength;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;
	
	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;
	
	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length && (typeof value == 'number' || reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
	}
	
	module.exports = isIndex;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var apply = __webpack_require__(23),
	    toInteger = __webpack_require__(24);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;
	
	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? func.length - 1 : toInteger(start), 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);
	
	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0:
	        return func.call(this, array);
	      case 1:
	        return func.call(this, args[0], array);
	      case 2:
	        return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}
	
	module.exports = rest;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0:
	      return func.call(thisArg);
	    case 1:
	      return func.call(thisArg, args[0]);
	    case 2:
	      return func.call(thisArg, args[0], args[1]);
	    case 3:
	      return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}
	
	module.exports = apply;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toFinite = __webpack_require__(25);
	
	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This method is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3.2);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3.2');
	 * // => 3
	 */
	function toInteger(value) {
	  var result = toFinite(value),
	      remainder = result % 1;
	
	  return result === result ? remainder ? result - remainder : result : 0;
	}
	
	module.exports = toInteger;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var toNumber = __webpack_require__(26);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;
	
	/**
	 * Converts `value` to a finite number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.12.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted number.
	 * @example
	 *
	 * _.toFinite(3.2);
	 * // => 3.2
	 *
	 * _.toFinite(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toFinite(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toFinite('3.2');
	 * // => 3.2
	 */
	function toFinite(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = value < 0 ? -1 : 1;
	    return sign * MAX_INTEGER;
	  }
	  return value === value ? value : 0;
	}
	
	module.exports = toFinite;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(19),
	    isObject = __webpack_require__(8),
	    isSymbol = __webpack_require__(27);
	
	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;
	
	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;
	
	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
	
	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;
	
	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;
	
	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;
	
	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3.2);
	 * // => 3.2
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3.2');
	 * // => 3.2
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? other + '' : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
	}
	
	module.exports = toNumber;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isObjectLike = __webpack_require__(7);
	
	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && objectToString.call(value) == symbolTag;
	}
	
	module.exports = isSymbol;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;
	
	  return value === proto;
	}
	
	module.exports = isPrototype;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseKeysIn = __webpack_require__(30),
	    indexKeys = __webpack_require__(35),
	    isIndex = __webpack_require__(21),
	    isPrototype = __webpack_require__(28);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) && !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keysIn;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Reflect = __webpack_require__(31),
	    iteratorToArray = __webpack_require__(34);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);
	
	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}
	
	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function baseKeysIn(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}
	
	module.exports = baseKeysIn;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(32);
	
	/** Built-in value references. */
	var Reflect = root.Reflect;
	
	module.exports = Reflect;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var checkGlobal = __webpack_require__(33);
	
	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal((typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global);
	
	/** Detect free variable `self`. */
	var freeSelf = checkGlobal((typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self);
	
	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(_typeof(undefined) == 'object' && undefined);
	
	/** Used as a reference to the global object. */
	var root = freeGlobal || freeSelf || thisGlobal || Function('return this')();
	
	module.exports = root;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return value && value.Object === Object ? value : null;
	}
	
	module.exports = checkGlobal;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];
	
	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}
	
	module.exports = iteratorToArray;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseTimes = __webpack_require__(36),
	    isArguments = __webpack_require__(37),
	    isArray = __webpack_require__(5),
	    isLength = __webpack_require__(20),
	    isString = __webpack_require__(6);
	
	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) && (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}
	
	module.exports = indexKeys;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);
	
	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}
	
	module.exports = baseTimes;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLikeObject = __webpack_require__(38);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;
	
	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') && (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}
	
	module.exports = isArguments;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(16),
	    isObjectLike = __webpack_require__(7);
	
	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}
	
	module.exports = isArrayLikeObject;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(40),
	    castSlice = __webpack_require__(42),
	    charsStartIndex = __webpack_require__(44),
	    stringToArray = __webpack_require__(47),
	    toString = __webpack_require__(48);
	
	/** Used to match leading and trailing whitespace. */
	var reTrimStart = /^\s+/;
	
	/**
	 * Removes leading whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trimStart('  abc  ');
	 * // => 'abc  '
	 *
	 * _.trimStart('-_-abc-_-', '_-');
	 * // => 'abc-_-'
	 */
	function trimStart(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrimStart, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      start = charsStartIndex(strSymbols, stringToArray(chars));
	
	  return castSlice(strSymbols, start).join('');
	}
	
	module.exports = trimStart;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(41),
	    isSymbol = __webpack_require__(27);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;
	
	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}
	
	module.exports = baseToString;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(32);
	
	/** Built-in value references. */
	var _Symbol = root.Symbol;
	
	module.exports = _Symbol;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseSlice = __webpack_require__(43);
	
	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return !start && end >= length ? array : baseSlice(array, start, end);
	}
	
	module.exports = castSlice;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;
	
	  if (start < 0) {
	    start = -start > length ? 0 : length + start;
	  }
	  end = end > length ? length : end;
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : end - start >>> 0;
	  start >>>= 0;
	
	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}
	
	module.exports = baseSlice;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIndexOf = __webpack_require__(45);
	
	/**
	 * Used by `_.trim` and `_.trimStart` to get the index of the first string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the first unmatched string symbol.
	 */
	function charsStartIndex(strSymbols, chrSymbols) {
	  var index = -1,
	      length = strSymbols.length;
	
	  while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsStartIndex;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var indexOfNaN = __webpack_require__(46);
	
	/**
	 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;
	
	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = baseIndexOf;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 1 : -1);
	
	  while (fromRight ? index-- : ++index < length) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}
	
	module.exports = indexOfNaN;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';
	
	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';
	
	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');
	
	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	    return string.match(reComplexSymbol);
	}
	
	module.exports = stringToArray;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(40);
	
	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}
	
	module.exports = toString;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(40),
	    castSlice = __webpack_require__(42),
	    charsEndIndex = __webpack_require__(50),
	    stringToArray = __webpack_require__(47),
	    toString = __webpack_require__(48);
	
	/** Used to match leading and trailing whitespace. */
	var reTrimEnd = /\s+$/;
	
	/**
	 * Removes trailing whitespace or specified characters from `string`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to trim.
	 * @param {string} [chars=whitespace] The characters to trim.
	 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
	 * @returns {string} Returns the trimmed string.
	 * @example
	 *
	 * _.trimEnd('  abc  ');
	 * // => '  abc'
	 *
	 * _.trimEnd('-_-abc-_-', '_-');
	 * // => '-_-abc'
	 */
	function trimEnd(string, chars, guard) {
	  string = toString(string);
	  if (string && (guard || chars === undefined)) {
	    return string.replace(reTrimEnd, '');
	  }
	  if (!string || !(chars = baseToString(chars))) {
	    return string;
	  }
	  var strSymbols = stringToArray(string),
	      end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
	
	  return castSlice(strSymbols, 0, end).join('');
	}
	
	module.exports = trimEnd;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIndexOf = __webpack_require__(45);
	
	/**
	 * Used by `_.trim` and `_.trimEnd` to get the index of the last string symbol
	 * that is not found in the character symbols.
	 *
	 * @private
	 * @param {Array} strSymbols The string symbols to inspect.
	 * @param {Array} chrSymbols The character symbols to find.
	 * @returns {number} Returns the index of the last unmatched string symbol.
	 */
	function charsEndIndex(strSymbols, chrSymbols) {
	  var index = strSymbols.length;
	
	  while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {}
	  return index;
	}
	
	module.exports = charsEndIndex;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseClamp = __webpack_require__(52),
	    baseToString = __webpack_require__(40),
	    toInteger = __webpack_require__(24),
	    toString = __webpack_require__(48);
	
	/**
	 * Checks if `string` ends with the given target string.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to search.
	 * @param {string} [target] The string to search for.
	 * @param {number} [position=string.length] The position to search up to.
	 * @returns {boolean} Returns `true` if `string` ends with `target`,
	 *  else `false`.
	 * @example
	 *
	 * _.endsWith('abc', 'c');
	 * // => true
	 *
	 * _.endsWith('abc', 'b');
	 * // => false
	 *
	 * _.endsWith('abc', 'b', 2);
	 * // => true
	 */
	function endsWith(string, target, position) {
	  string = toString(string);
	  target = baseToString(target);
	
	  var length = string.length;
	  position = position === undefined ? length : baseClamp(toInteger(position), 0, length);
	
	  position -= target.length;
	  return position >= 0 && string.indexOf(target, position) == position;
	}
	
	module.exports = endsWith;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.clamp` which doesn't coerce arguments to numbers.
	 *
	 * @private
	 * @param {number} number The number to clamp.
	 * @param {number} [lower] The lower bound.
	 * @param {number} upper The upper bound.
	 * @returns {number} Returns the clamped number.
	 */
	function baseClamp(number, lower, upper) {
	  if (number === number) {
	    if (upper !== undefined) {
	      number = number <= upper ? number : upper;
	    }
	    if (lower !== undefined) {
	      number = number >= lower ? number : lower;
	    }
	  }
	  return number;
	}
	
	module.exports = baseClamp;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseToString = __webpack_require__(40),
	    castSlice = __webpack_require__(42),
	    isIterateeCall = __webpack_require__(15),
	    isRegExp = __webpack_require__(54),
	    reHasComplexSymbol = __webpack_require__(55),
	    stringToArray = __webpack_require__(47),
	    toString = __webpack_require__(48);
	
	/** Used as references for the maximum length and index of an array. */
	var MAX_ARRAY_LENGTH = 4294967295;
	
	/** Used for built-in method references. */
	var stringProto = String.prototype;
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeSplit = stringProto.split;
	
	/**
	 * Splits `string` by `separator`.
	 *
	 * **Note:** This method is based on
	 * [`String#split`](https://mdn.io/String/split).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to split.
	 * @param {RegExp|string} separator The separator pattern to split by.
	 * @param {number} [limit] The length to truncate results to.
	 * @returns {Array} Returns the string segments.
	 * @example
	 *
	 * _.split('a-b-c', '-', 2);
	 * // => ['a', 'b']
	 */
	function split(string, separator, limit) {
	  if (limit && typeof limit != 'number' && isIterateeCall(string, separator, limit)) {
	    separator = limit = undefined;
	  }
	  limit = limit === undefined ? MAX_ARRAY_LENGTH : limit >>> 0;
	  if (!limit) {
	    return [];
	  }
	  string = toString(string);
	  if (string && (typeof separator == 'string' || separator != null && !isRegExp(separator))) {
	    separator = baseToString(separator);
	    if (separator == '' && reHasComplexSymbol.test(string)) {
	      return castSlice(stringToArray(string), 0, limit);
	    }
	  }
	  return nativeSplit.call(string, separator, limit);
	}
	
	module.exports = split;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(8);
	
	/** `Object#toString` result references. */
	var regexpTag = '[object RegExp]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a `RegExp` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isRegExp(/abc/);
	 * // => true
	 *
	 * _.isRegExp('/abc/');
	 * // => false
	 */
	function isRegExp(value) {
	  return isObject(value) && objectToString.call(value) == regexpTag;
	}
	
	module.exports = isRegExp;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';
	
	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';
	
	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');
	
	module.exports = reHasComplexSymbol;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(process, global, setImmediate) {"use strict";
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/* @preserve
	 * The MIT License (MIT)
	 * 
	 * Copyright (c) 2013-2015 Petka Antonov
	 * 
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 * 
	 * The above copyright notice and this permission notice shall be included in
	 * all copies or substantial portions of the Software.
	 * 
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	 * THE SOFTWARE.
	 * 
	 */
	/**
	 * bluebird build version 3.4.6
	 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
	*/
	!function (e) {
	    if ("object" == ( false ? "undefined" : _typeof(exports)) && "undefined" != typeof module) module.exports = e();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (e), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
	        var f;"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.Promise = e();
	    }
	}(function () {
	    var define, module, exports;return function e(t, n, r) {
	        function s(o, u) {
	            if (!n[o]) {
	                if (!t[o]) {
	                    var a = typeof _dereq_ == "function" && _dereq_;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
	                }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
	                    var n = t[o][1][e];return s(n ? n : e);
	                }, l, l.exports, e, t, n, r);
	            }return n[o].exports;
	        }var i = typeof _dereq_ == "function" && _dereq_;for (var o = 0; o < r.length; o++) {
	            s(r[o]);
	        }return s;
	    }({ 1: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise) {
	                var SomePromiseArray = Promise._SomePromiseArray;
	                function any(promises) {
	                    var ret = new SomePromiseArray(promises);
	                    var promise = ret.promise();
	                    ret.setHowMany(1);
	                    ret.setUnwrap();
	                    ret.init();
	                    return promise;
	                }
	
	                Promise.any = function (promises) {
	                    return any(promises);
	                };
	
	                Promise.prototype.any = function () {
	                    return any(this);
	                };
	            };
	        }, {}], 2: [function (_dereq_, module, exports) {
	            "use strict";
	
	            var firstLineError;
	            try {
	                throw new Error();
	            } catch (e) {
	                firstLineError = e;
	            }
	            var schedule = _dereq_("./schedule");
	            var Queue = _dereq_("./queue");
	            var util = _dereq_("./util");
	
	            function Async() {
	                this._customScheduler = false;
	                this._isTickUsed = false;
	                this._lateQueue = new Queue(16);
	                this._normalQueue = new Queue(16);
	                this._haveDrainedQueues = false;
	                this._trampolineEnabled = true;
	                var self = this;
	                this.drainQueues = function () {
	                    self._drainQueues();
	                };
	                this._schedule = schedule;
	            }
	
	            Async.prototype.setScheduler = function (fn) {
	                var prev = this._schedule;
	                this._schedule = fn;
	                this._customScheduler = true;
	                return prev;
	            };
	
	            Async.prototype.hasCustomScheduler = function () {
	                return this._customScheduler;
	            };
	
	            Async.prototype.enableTrampoline = function () {
	                this._trampolineEnabled = true;
	            };
	
	            Async.prototype.disableTrampolineIfNecessary = function () {
	                if (util.hasDevTools) {
	                    this._trampolineEnabled = false;
	                }
	            };
	
	            Async.prototype.haveItemsQueued = function () {
	                return this._isTickUsed || this._haveDrainedQueues;
	            };
	
	            Async.prototype.fatalError = function (e, isNode) {
	                if (isNode) {
	                    process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) + "\n");
	                    process.exit(2);
	                } else {
	                    this.throwLater(e);
	                }
	            };
	
	            Async.prototype.throwLater = function (fn, arg) {
	                if (arguments.length === 1) {
	                    arg = fn;
	                    fn = function fn() {
	                        throw arg;
	                    };
	                }
	                if (typeof setTimeout !== "undefined") {
	                    setTimeout(function () {
	                        fn(arg);
	                    }, 0);
	                } else try {
	                    this._schedule(function () {
	                        fn(arg);
	                    });
	                } catch (e) {
	                    throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
	                }
	            };
	
	            function AsyncInvokeLater(fn, receiver, arg) {
	                this._lateQueue.push(fn, receiver, arg);
	                this._queueTick();
	            }
	
	            function AsyncInvoke(fn, receiver, arg) {
	                this._normalQueue.push(fn, receiver, arg);
	                this._queueTick();
	            }
	
	            function AsyncSettlePromises(promise) {
	                this._normalQueue._pushOne(promise);
	                this._queueTick();
	            }
	
	            if (!util.hasDevTools) {
	                Async.prototype.invokeLater = AsyncInvokeLater;
	                Async.prototype.invoke = AsyncInvoke;
	                Async.prototype.settlePromises = AsyncSettlePromises;
	            } else {
	                Async.prototype.invokeLater = function (fn, receiver, arg) {
	                    if (this._trampolineEnabled) {
	                        AsyncInvokeLater.call(this, fn, receiver, arg);
	                    } else {
	                        this._schedule(function () {
	                            setTimeout(function () {
	                                fn.call(receiver, arg);
	                            }, 100);
	                        });
	                    }
	                };
	
	                Async.prototype.invoke = function (fn, receiver, arg) {
	                    if (this._trampolineEnabled) {
	                        AsyncInvoke.call(this, fn, receiver, arg);
	                    } else {
	                        this._schedule(function () {
	                            fn.call(receiver, arg);
	                        });
	                    }
	                };
	
	                Async.prototype.settlePromises = function (promise) {
	                    if (this._trampolineEnabled) {
	                        AsyncSettlePromises.call(this, promise);
	                    } else {
	                        this._schedule(function () {
	                            promise._settlePromises();
	                        });
	                    }
	                };
	            }
	
	            Async.prototype.invokeFirst = function (fn, receiver, arg) {
	                this._normalQueue.unshift(fn, receiver, arg);
	                this._queueTick();
	            };
	
	            Async.prototype._drainQueue = function (queue) {
	                while (queue.length() > 0) {
	                    var fn = queue.shift();
	                    if (typeof fn !== "function") {
	                        fn._settlePromises();
	                        continue;
	                    }
	                    var receiver = queue.shift();
	                    var arg = queue.shift();
	                    fn.call(receiver, arg);
	                }
	            };
	
	            Async.prototype._drainQueues = function () {
	                this._drainQueue(this._normalQueue);
	                this._reset();
	                this._haveDrainedQueues = true;
	                this._drainQueue(this._lateQueue);
	            };
	
	            Async.prototype._queueTick = function () {
	                if (!this._isTickUsed) {
	                    this._isTickUsed = true;
	                    this._schedule(this.drainQueues);
	                }
	            };
	
	            Async.prototype._reset = function () {
	                this._isTickUsed = false;
	            };
	
	            module.exports = Async;
	            module.exports.firstLineError = firstLineError;
	        }, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL, tryConvertToPromise, debug) {
	                var calledBind = false;
	                var rejectThis = function rejectThis(_, e) {
	                    this._reject(e);
	                };
	
	                var targetRejected = function targetRejected(e, context) {
	                    context.promiseRejectionQueued = true;
	                    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
	                };
	
	                var bindingResolved = function bindingResolved(thisArg, context) {
	                    if ((this._bitField & 50397184) === 0) {
	                        this._resolveCallback(context.target);
	                    }
	                };
	
	                var bindingRejected = function bindingRejected(e, context) {
	                    if (!context.promiseRejectionQueued) this._reject(e);
	                };
	
	                Promise.prototype.bind = function (thisArg) {
	                    if (!calledBind) {
	                        calledBind = true;
	                        Promise.prototype._propagateFrom = debug.propagateFromFunction();
	                        Promise.prototype._boundValue = debug.boundValueFunction();
	                    }
	                    var maybePromise = tryConvertToPromise(thisArg);
	                    var ret = new Promise(INTERNAL);
	                    ret._propagateFrom(this, 1);
	                    var target = this._target();
	                    ret._setBoundTo(maybePromise);
	                    if (maybePromise instanceof Promise) {
	                        var context = {
	                            promiseRejectionQueued: false,
	                            promise: ret,
	                            target: target,
	                            bindingPromise: maybePromise
	                        };
	                        target._then(INTERNAL, targetRejected, undefined, ret, context);
	                        maybePromise._then(bindingResolved, bindingRejected, undefined, ret, context);
	                        ret._setOnCancel(maybePromise);
	                    } else {
	                        ret._resolveCallback(target);
	                    }
	                    return ret;
	                };
	
	                Promise.prototype._setBoundTo = function (obj) {
	                    if (obj !== undefined) {
	                        this._bitField = this._bitField | 2097152;
	                        this._boundTo = obj;
	                    } else {
	                        this._bitField = this._bitField & ~2097152;
	                    }
	                };
	
	                Promise.prototype._isBound = function () {
	                    return (this._bitField & 2097152) === 2097152;
	                };
	
	                Promise.bind = function (thisArg, value) {
	                    return Promise.resolve(value).bind(thisArg);
	                };
	            };
	        }, {}], 4: [function (_dereq_, module, exports) {
	            "use strict";
	
	            var old;
	            if (typeof Promise !== "undefined") old = Promise;
	            function noConflict() {
	                try {
	                    if (Promise === bluebird) Promise = old;
	                } catch (e) {}
	                return bluebird;
	            }
	            var bluebird = _dereq_("./promise")();
	            bluebird.noConflict = noConflict;
	            module.exports = bluebird;
	        }, { "./promise": 22 }], 5: [function (_dereq_, module, exports) {
	            "use strict";
	
	            var cr = Object.create;
	            if (cr) {
	                var callerCache = cr(null);
	                var getterCache = cr(null);
	                callerCache[" size"] = getterCache[" size"] = 0;
	            }
	
	            module.exports = function (Promise) {
	                var util = _dereq_("./util");
	                var canEvaluate = util.canEvaluate;
	                var isIdentifier = util.isIdentifier;
	
	                var getMethodCaller;
	                var getGetter;
	                if (false) {
	                    var makeMethodCaller = function makeMethodCaller(methodName) {
	                        return new Function("ensureMethod", "                                    \n\
	        return function(obj) {                                               \n\
	            'use strict'                                                     \n\
	            var len = this.length;                                           \n\
	            ensureMethod(obj, 'methodName');                                 \n\
	            switch(len) {                                                    \n\
	                case 1: return obj.methodName(this[0]);                      \n\
	                case 2: return obj.methodName(this[0], this[1]);             \n\
	                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
	                case 0: return obj.methodName();                             \n\
	                default:                                                     \n\
	                    return obj.methodName.apply(obj, this);                  \n\
	            }                                                                \n\
	        };                                                                   \n\
	        ".replace(/methodName/g, methodName))(ensureMethod);
	                    };
	
	                    var makeGetter = function makeGetter(propertyName) {
	                        return new Function("obj", "                                             \n\
	        'use strict';                                                        \n\
	        return obj.propertyName;                                             \n\
	        ".replace("propertyName", propertyName));
	                    };
	
	                    var getCompiled = function getCompiled(name, compiler, cache) {
	                        var ret = cache[name];
	                        if (typeof ret !== "function") {
	                            if (!isIdentifier(name)) {
	                                return null;
	                            }
	                            ret = compiler(name);
	                            cache[name] = ret;
	                            cache[" size"]++;
	                            if (cache[" size"] > 512) {
	                                var keys = Object.keys(cache);
	                                for (var i = 0; i < 256; ++i) {
	                                    delete cache[keys[i]];
	                                }cache[" size"] = keys.length - 256;
	                            }
	                        }
	                        return ret;
	                    };
	
	                    getMethodCaller = function getMethodCaller(name) {
	                        return getCompiled(name, makeMethodCaller, callerCache);
	                    };
	
	                    getGetter = function getGetter(name) {
	                        return getCompiled(name, makeGetter, getterCache);
	                    };
	                }
	
	                function ensureMethod(obj, methodName) {
	                    var fn;
	                    if (obj != null) fn = obj[methodName];
	                    if (typeof fn !== "function") {
	                        var message = "Object " + util.classString(obj) + " has no method '" + util.toString(methodName) + "'";
	                        throw new Promise.TypeError(message);
	                    }
	                    return fn;
	                }
	
	                function caller(obj) {
	                    var methodName = this.pop();
	                    var fn = ensureMethod(obj, methodName);
	                    return fn.apply(obj, this);
	                }
	                Promise.prototype.call = function (methodName) {
	                    var args = [].slice.call(arguments, 1);;
	                    if (false) {
	                        if (canEvaluate) {
	                            var maybeCaller = getMethodCaller(methodName);
	                            if (maybeCaller !== null) {
	                                return this._then(maybeCaller, undefined, undefined, args, undefined);
	                            }
	                        }
	                    }
	                    args.push(methodName);
	                    return this._then(caller, undefined, undefined, args, undefined);
	                };
	
	                function namedGetter(obj) {
	                    return obj[this];
	                }
	                function indexedGetter(obj) {
	                    var index = +this;
	                    if (index < 0) index = Math.max(0, index + obj.length);
	                    return obj[index];
	                }
	                Promise.prototype.get = function (propertyName) {
	                    var isIndex = typeof propertyName === "number";
	                    var getter;
	                    if (!isIndex) {
	                        if (canEvaluate) {
	                            var maybeGetter = getGetter(propertyName);
	                            getter = maybeGetter !== null ? maybeGetter : namedGetter;
	                        } else {
	                            getter = namedGetter;
	                        }
	                    } else {
	                        getter = indexedGetter;
	                    }
	                    return this._then(getter, undefined, undefined, propertyName, undefined);
	                };
	            };
	        }, { "./util": 36 }], 6: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, PromiseArray, apiRejection, debug) {
	                var util = _dereq_("./util");
	                var tryCatch = util.tryCatch;
	                var errorObj = util.errorObj;
	                var async = Promise._async;
	
	                Promise.prototype["break"] = Promise.prototype.cancel = function () {
	                    if (!debug.cancellation()) return this._warn("cancellation is disabled");
	
	                    var promise = this;
	                    var child = promise;
	                    while (promise._isCancellable()) {
	                        if (!promise._cancelBy(child)) {
	                            if (child._isFollowing()) {
	                                child._followee().cancel();
	                            } else {
	                                child._cancelBranched();
	                            }
	                            break;
	                        }
	
	                        var parent = promise._cancellationParent;
	                        if (parent == null || !parent._isCancellable()) {
	                            if (promise._isFollowing()) {
	                                promise._followee().cancel();
	                            } else {
	                                promise._cancelBranched();
	                            }
	                            break;
	                        } else {
	                            if (promise._isFollowing()) promise._followee().cancel();
	                            promise._setWillBeCancelled();
	                            child = promise;
	                            promise = parent;
	                        }
	                    }
	                };
	
	                Promise.prototype._branchHasCancelled = function () {
	                    this._branchesRemainingToCancel--;
	                };
	
	                Promise.prototype._enoughBranchesHaveCancelled = function () {
	                    return this._branchesRemainingToCancel === undefined || this._branchesRemainingToCancel <= 0;
	                };
	
	                Promise.prototype._cancelBy = function (canceller) {
	                    if (canceller === this) {
	                        this._branchesRemainingToCancel = 0;
	                        this._invokeOnCancel();
	                        return true;
	                    } else {
	                        this._branchHasCancelled();
	                        if (this._enoughBranchesHaveCancelled()) {
	                            this._invokeOnCancel();
	                            return true;
	                        }
	                    }
	                    return false;
	                };
	
	                Promise.prototype._cancelBranched = function () {
	                    if (this._enoughBranchesHaveCancelled()) {
	                        this._cancel();
	                    }
	                };
	
	                Promise.prototype._cancel = function () {
	                    if (!this._isCancellable()) return;
	                    this._setCancelled();
	                    async.invoke(this._cancelPromises, this, undefined);
	                };
	
	                Promise.prototype._cancelPromises = function () {
	                    if (this._length() > 0) this._settlePromises();
	                };
	
	                Promise.prototype._unsetOnCancel = function () {
	                    this._onCancelField = undefined;
	                };
	
	                Promise.prototype._isCancellable = function () {
	                    return this.isPending() && !this._isCancelled();
	                };
	
	                Promise.prototype.isCancellable = function () {
	                    return this.isPending() && !this.isCancelled();
	                };
	
	                Promise.prototype._doInvokeOnCancel = function (onCancelCallback, internalOnly) {
	                    if (util.isArray(onCancelCallback)) {
	                        for (var i = 0; i < onCancelCallback.length; ++i) {
	                            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
	                        }
	                    } else if (onCancelCallback !== undefined) {
	                        if (typeof onCancelCallback === "function") {
	                            if (!internalOnly) {
	                                var e = tryCatch(onCancelCallback).call(this._boundValue());
	                                if (e === errorObj) {
	                                    this._attachExtraTrace(e.e);
	                                    async.throwLater(e.e);
	                                }
	                            }
	                        } else {
	                            onCancelCallback._resultCancelled(this);
	                        }
	                    }
	                };
	
	                Promise.prototype._invokeOnCancel = function () {
	                    var onCancelCallback = this._onCancel();
	                    this._unsetOnCancel();
	                    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
	                };
	
	                Promise.prototype._invokeInternalOnCancel = function () {
	                    if (this._isCancellable()) {
	                        this._doInvokeOnCancel(this._onCancel(), true);
	                        this._unsetOnCancel();
	                    }
	                };
	
	                Promise.prototype._resultCancelled = function () {
	                    this.cancel();
	                };
	            };
	        }, { "./util": 36 }], 7: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (NEXT_FILTER) {
	                var util = _dereq_("./util");
	                var getKeys = _dereq_("./es5").keys;
	                var tryCatch = util.tryCatch;
	                var errorObj = util.errorObj;
	
	                function catchFilter(instances, cb, promise) {
	                    return function (e) {
	                        var boundTo = promise._boundValue();
	                        predicateLoop: for (var i = 0; i < instances.length; ++i) {
	                            var item = instances[i];
	
	                            if (item === Error || item != null && item.prototype instanceof Error) {
	                                if (e instanceof item) {
	                                    return tryCatch(cb).call(boundTo, e);
	                                }
	                            } else if (typeof item === "function") {
	                                var matchesPredicate = tryCatch(item).call(boundTo, e);
	                                if (matchesPredicate === errorObj) {
	                                    return matchesPredicate;
	                                } else if (matchesPredicate) {
	                                    return tryCatch(cb).call(boundTo, e);
	                                }
	                            } else if (util.isObject(e)) {
	                                var keys = getKeys(item);
	                                for (var j = 0; j < keys.length; ++j) {
	                                    var key = keys[j];
	                                    if (item[key] != e[key]) {
	                                        continue predicateLoop;
	                                    }
	                                }
	                                return tryCatch(cb).call(boundTo, e);
	                            }
	                        }
	                        return NEXT_FILTER;
	                    };
	                }
	
	                return catchFilter;
	            };
	        }, { "./es5": 13, "./util": 36 }], 8: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise) {
	                var longStackTraces = false;
	                var contextStack = [];
	
	                Promise.prototype._promiseCreated = function () {};
	                Promise.prototype._pushContext = function () {};
	                Promise.prototype._popContext = function () {
	                    return null;
	                };
	                Promise._peekContext = Promise.prototype._peekContext = function () {};
	
	                function Context() {
	                    this._trace = new Context.CapturedTrace(peekContext());
	                }
	                Context.prototype._pushContext = function () {
	                    if (this._trace !== undefined) {
	                        this._trace._promiseCreated = null;
	                        contextStack.push(this._trace);
	                    }
	                };
	
	                Context.prototype._popContext = function () {
	                    if (this._trace !== undefined) {
	                        var trace = contextStack.pop();
	                        var ret = trace._promiseCreated;
	                        trace._promiseCreated = null;
	                        return ret;
	                    }
	                    return null;
	                };
	
	                function createContext() {
	                    if (longStackTraces) return new Context();
	                }
	
	                function peekContext() {
	                    var lastIndex = contextStack.length - 1;
	                    if (lastIndex >= 0) {
	                        return contextStack[lastIndex];
	                    }
	                    return undefined;
	                }
	                Context.CapturedTrace = null;
	                Context.create = createContext;
	                Context.deactivateLongStackTraces = function () {};
	                Context.activateLongStackTraces = function () {
	                    var Promise_pushContext = Promise.prototype._pushContext;
	                    var Promise_popContext = Promise.prototype._popContext;
	                    var Promise_PeekContext = Promise._peekContext;
	                    var Promise_peekContext = Promise.prototype._peekContext;
	                    var Promise_promiseCreated = Promise.prototype._promiseCreated;
	                    Context.deactivateLongStackTraces = function () {
	                        Promise.prototype._pushContext = Promise_pushContext;
	                        Promise.prototype._popContext = Promise_popContext;
	                        Promise._peekContext = Promise_PeekContext;
	                        Promise.prototype._peekContext = Promise_peekContext;
	                        Promise.prototype._promiseCreated = Promise_promiseCreated;
	                        longStackTraces = false;
	                    };
	                    longStackTraces = true;
	                    Promise.prototype._pushContext = Context.prototype._pushContext;
	                    Promise.prototype._popContext = Context.prototype._popContext;
	                    Promise._peekContext = Promise.prototype._peekContext = peekContext;
	                    Promise.prototype._promiseCreated = function () {
	                        var ctx = this._peekContext();
	                        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
	                    };
	                };
	                return Context;
	            };
	        }, {}], 9: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, Context) {
	                var getDomain = Promise._getDomain;
	                var async = Promise._async;
	                var Warning = _dereq_("./errors").Warning;
	                var util = _dereq_("./util");
	                var canAttachTrace = util.canAttachTrace;
	                var unhandledRejectionHandled;
	                var possiblyUnhandledRejection;
	                var bluebirdFramePattern = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
	                var nodeFramePattern = /\((?:timers\.js):\d+:\d+\)/;
	                var parseLinePattern = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/;
	                var stackFramePattern = null;
	                var formatStack = null;
	                var indentStackFrames = false;
	                var printWarning;
	                var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 && (true || util.env("BLUEBIRD_DEBUG") || util.env("NODE_ENV") === "development"));
	
	                var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 && (debugging || util.env("BLUEBIRD_WARNINGS")));
	
	                var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 && (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));
	
	                var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 && (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
	
	                Promise.prototype.suppressUnhandledRejections = function () {
	                    var target = this._target();
	                    target._bitField = target._bitField & ~1048576 | 524288;
	                };
	
	                Promise.prototype._ensurePossibleRejectionHandled = function () {
	                    if ((this._bitField & 524288) !== 0) return;
	                    this._setRejectionIsUnhandled();
	                    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
	                };
	
	                Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
	                    fireRejectionEvent("rejectionHandled", unhandledRejectionHandled, undefined, this);
	                };
	
	                Promise.prototype._setReturnedNonUndefined = function () {
	                    this._bitField = this._bitField | 268435456;
	                };
	
	                Promise.prototype._returnedNonUndefined = function () {
	                    return (this._bitField & 268435456) !== 0;
	                };
	
	                Promise.prototype._notifyUnhandledRejection = function () {
	                    if (this._isRejectionUnhandled()) {
	                        var reason = this._settledValue();
	                        this._setUnhandledRejectionIsNotified();
	                        fireRejectionEvent("unhandledRejection", possiblyUnhandledRejection, reason, this);
	                    }
	                };
	
	                Promise.prototype._setUnhandledRejectionIsNotified = function () {
	                    this._bitField = this._bitField | 262144;
	                };
	
	                Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
	                    this._bitField = this._bitField & ~262144;
	                };
	
	                Promise.prototype._isUnhandledRejectionNotified = function () {
	                    return (this._bitField & 262144) > 0;
	                };
	
	                Promise.prototype._setRejectionIsUnhandled = function () {
	                    this._bitField = this._bitField | 1048576;
	                };
	
	                Promise.prototype._unsetRejectionIsUnhandled = function () {
	                    this._bitField = this._bitField & ~1048576;
	                    if (this._isUnhandledRejectionNotified()) {
	                        this._unsetUnhandledRejectionIsNotified();
	                        this._notifyUnhandledRejectionIsHandled();
	                    }
	                };
	
	                Promise.prototype._isRejectionUnhandled = function () {
	                    return (this._bitField & 1048576) > 0;
	                };
	
	                Promise.prototype._warn = function (message, shouldUseOwnTrace, promise) {
	                    return warn(message, shouldUseOwnTrace, promise || this);
	                };
	
	                Promise.onPossiblyUnhandledRejection = function (fn) {
	                    var domain = getDomain();
	                    possiblyUnhandledRejection = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
	                };
	
	                Promise.onUnhandledRejectionHandled = function (fn) {
	                    var domain = getDomain();
	                    unhandledRejectionHandled = typeof fn === "function" ? domain === null ? fn : util.domainBind(domain, fn) : undefined;
	                };
	
	                var disableLongStackTraces = function disableLongStackTraces() {};
	                Promise.longStackTraces = function () {
	                    if (async.haveItemsQueued() && !config.longStackTraces) {
	                        throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                    if (!config.longStackTraces && longStackTracesIsSupported()) {
	                        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
	                        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
	                        config.longStackTraces = true;
	                        disableLongStackTraces = function disableLongStackTraces() {
	                            if (async.haveItemsQueued() && !config.longStackTraces) {
	                                throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
	                            }
	                            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
	                            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
	                            Context.deactivateLongStackTraces();
	                            async.enableTrampoline();
	                            config.longStackTraces = false;
	                        };
	                        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
	                        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
	                        Context.activateLongStackTraces();
	                        async.disableTrampolineIfNecessary();
	                    }
	                };
	
	                Promise.hasLongStackTraces = function () {
	                    return config.longStackTraces && longStackTracesIsSupported();
	                };
	
	                var fireDomEvent = function () {
	                    try {
	                        if (typeof CustomEvent === "function") {
	                            var event = new CustomEvent("CustomEvent");
	                            util.global.dispatchEvent(event);
	                            return function (name, event) {
	                                var domEvent = new CustomEvent(name.toLowerCase(), {
	                                    detail: event,
	                                    cancelable: true
	                                });
	                                return !util.global.dispatchEvent(domEvent);
	                            };
	                        } else if (typeof Event === "function") {
	                            var event = new Event("CustomEvent");
	                            util.global.dispatchEvent(event);
	                            return function (name, event) {
	                                var domEvent = new Event(name.toLowerCase(), {
	                                    cancelable: true
	                                });
	                                domEvent.detail = event;
	                                return !util.global.dispatchEvent(domEvent);
	                            };
	                        } else {
	                            var event = document.createEvent("CustomEvent");
	                            event.initCustomEvent("testingtheevent", false, true, {});
	                            util.global.dispatchEvent(event);
	                            return function (name, event) {
	                                var domEvent = document.createEvent("CustomEvent");
	                                domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
	                                return !util.global.dispatchEvent(domEvent);
	                            };
	                        }
	                    } catch (e) {}
	                    return function () {
	                        return false;
	                    };
	                }();
	
	                var fireGlobalEvent = function () {
	                    if (util.isNode) {
	                        return function () {
	                            return process.emit.apply(process, arguments);
	                        };
	                    } else {
	                        if (!util.global) {
	                            return function () {
	                                return false;
	                            };
	                        }
	                        return function (name) {
	                            var methodName = "on" + name.toLowerCase();
	                            var method = util.global[methodName];
	                            if (!method) return false;
	                            method.apply(util.global, [].slice.call(arguments, 1));
	                            return true;
	                        };
	                    }
	                }();
	
	                function generatePromiseLifecycleEventObject(name, promise) {
	                    return { promise: promise };
	                }
	
	                var eventToObjectGenerator = {
	                    promiseCreated: generatePromiseLifecycleEventObject,
	                    promiseFulfilled: generatePromiseLifecycleEventObject,
	                    promiseRejected: generatePromiseLifecycleEventObject,
	                    promiseResolved: generatePromiseLifecycleEventObject,
	                    promiseCancelled: generatePromiseLifecycleEventObject,
	                    promiseChained: function promiseChained(name, promise, child) {
	                        return { promise: promise, child: child };
	                    },
	                    warning: function warning(name, _warning) {
	                        return { warning: _warning };
	                    },
	                    unhandledRejection: function unhandledRejection(name, reason, promise) {
	                        return { reason: reason, promise: promise };
	                    },
	                    rejectionHandled: generatePromiseLifecycleEventObject
	                };
	
	                var activeFireEvent = function activeFireEvent(name) {
	                    var globalEventFired = false;
	                    try {
	                        globalEventFired = fireGlobalEvent.apply(null, arguments);
	                    } catch (e) {
	                        async.throwLater(e);
	                        globalEventFired = true;
	                    }
	
	                    var domEventFired = false;
	                    try {
	                        domEventFired = fireDomEvent(name, eventToObjectGenerator[name].apply(null, arguments));
	                    } catch (e) {
	                        async.throwLater(e);
	                        domEventFired = true;
	                    }
	
	                    return domEventFired || globalEventFired;
	                };
	
	                Promise.config = function (opts) {
	                    opts = Object(opts);
	                    if ("longStackTraces" in opts) {
	                        if (opts.longStackTraces) {
	                            Promise.longStackTraces();
	                        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
	                            disableLongStackTraces();
	                        }
	                    }
	                    if ("warnings" in opts) {
	                        var warningsOption = opts.warnings;
	                        config.warnings = !!warningsOption;
	                        wForgottenReturn = config.warnings;
	
	                        if (util.isObject(warningsOption)) {
	                            if ("wForgottenReturn" in warningsOption) {
	                                wForgottenReturn = !!warningsOption.wForgottenReturn;
	                            }
	                        }
	                    }
	                    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
	                        if (async.haveItemsQueued()) {
	                            throw new Error("cannot enable cancellation after promises are in use");
	                        }
	                        Promise.prototype._clearCancellationData = cancellationClearCancellationData;
	                        Promise.prototype._propagateFrom = cancellationPropagateFrom;
	                        Promise.prototype._onCancel = cancellationOnCancel;
	                        Promise.prototype._setOnCancel = cancellationSetOnCancel;
	                        Promise.prototype._attachCancellationCallback = cancellationAttachCancellationCallback;
	                        Promise.prototype._execute = cancellationExecute;
	                        _propagateFromFunction = cancellationPropagateFrom;
	                        config.cancellation = true;
	                    }
	                    if ("monitoring" in opts) {
	                        if (opts.monitoring && !config.monitoring) {
	                            config.monitoring = true;
	                            Promise.prototype._fireEvent = activeFireEvent;
	                        } else if (!opts.monitoring && config.monitoring) {
	                            config.monitoring = false;
	                            Promise.prototype._fireEvent = defaultFireEvent;
	                        }
	                    }
	                };
	
	                function defaultFireEvent() {
	                    return false;
	                }
	
	                Promise.prototype._fireEvent = defaultFireEvent;
	                Promise.prototype._execute = function (executor, resolve, reject) {
	                    try {
	                        executor(resolve, reject);
	                    } catch (e) {
	                        return e;
	                    }
	                };
	                Promise.prototype._onCancel = function () {};
	                Promise.prototype._setOnCancel = function (handler) {
	                    ;
	                };
	                Promise.prototype._attachCancellationCallback = function (onCancel) {
	                    ;
	                };
	                Promise.prototype._captureStackTrace = function () {};
	                Promise.prototype._attachExtraTrace = function () {};
	                Promise.prototype._clearCancellationData = function () {};
	                Promise.prototype._propagateFrom = function (parent, flags) {
	                    ;
	                    ;
	                };
	
	                function cancellationExecute(executor, resolve, reject) {
	                    var promise = this;
	                    try {
	                        executor(resolve, reject, function (onCancel) {
	                            if (typeof onCancel !== "function") {
	                                throw new TypeError("onCancel must be a function, got: " + util.toString(onCancel));
	                            }
	                            promise._attachCancellationCallback(onCancel);
	                        });
	                    } catch (e) {
	                        return e;
	                    }
	                }
	
	                function cancellationAttachCancellationCallback(onCancel) {
	                    if (!this._isCancellable()) return this;
	
	                    var previousOnCancel = this._onCancel();
	                    if (previousOnCancel !== undefined) {
	                        if (util.isArray(previousOnCancel)) {
	                            previousOnCancel.push(onCancel);
	                        } else {
	                            this._setOnCancel([previousOnCancel, onCancel]);
	                        }
	                    } else {
	                        this._setOnCancel(onCancel);
	                    }
	                }
	
	                function cancellationOnCancel() {
	                    return this._onCancelField;
	                }
	
	                function cancellationSetOnCancel(onCancel) {
	                    this._onCancelField = onCancel;
	                }
	
	                function cancellationClearCancellationData() {
	                    this._cancellationParent = undefined;
	                    this._onCancelField = undefined;
	                }
	
	                function cancellationPropagateFrom(parent, flags) {
	                    if ((flags & 1) !== 0) {
	                        this._cancellationParent = parent;
	                        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
	                        if (branchesRemainingToCancel === undefined) {
	                            branchesRemainingToCancel = 0;
	                        }
	                        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
	                    }
	                    if ((flags & 2) !== 0 && parent._isBound()) {
	                        this._setBoundTo(parent._boundTo);
	                    }
	                }
	
	                function bindingPropagateFrom(parent, flags) {
	                    if ((flags & 2) !== 0 && parent._isBound()) {
	                        this._setBoundTo(parent._boundTo);
	                    }
	                }
	                var _propagateFromFunction = bindingPropagateFrom;
	
	                function _boundValueFunction() {
	                    var ret = this._boundTo;
	                    if (ret !== undefined) {
	                        if (ret instanceof Promise) {
	                            if (ret.isFulfilled()) {
	                                return ret.value();
	                            } else {
	                                return undefined;
	                            }
	                        }
	                    }
	                    return ret;
	                }
	
	                function longStackTracesCaptureStackTrace() {
	                    this._trace = new CapturedTrace(this._peekContext());
	                }
	
	                function longStackTracesAttachExtraTrace(error, ignoreSelf) {
	                    if (canAttachTrace(error)) {
	                        var trace = this._trace;
	                        if (trace !== undefined) {
	                            if (ignoreSelf) trace = trace._parent;
	                        }
	                        if (trace !== undefined) {
	                            trace.attachExtraTrace(error);
	                        } else if (!error.__stackCleaned__) {
	                            var parsed = parseStackAndMessage(error);
	                            util.notEnumerableProp(error, "stack", parsed.message + "\n" + parsed.stack.join("\n"));
	                            util.notEnumerableProp(error, "__stackCleaned__", true);
	                        }
	                    }
	                }
	
	                function checkForgottenReturns(returnValue, promiseCreated, name, promise, parent) {
	                    if (returnValue === undefined && promiseCreated !== null && wForgottenReturn) {
	                        if (parent !== undefined && parent._returnedNonUndefined()) return;
	                        if ((promise._bitField & 65535) === 0) return;
	
	                        if (name) name = name + " ";
	                        var handlerLine = "";
	                        var creatorLine = "";
	                        if (promiseCreated._trace) {
	                            var traceLines = promiseCreated._trace.stack.split("\n");
	                            var stack = cleanStack(traceLines);
	                            for (var i = stack.length - 1; i >= 0; --i) {
	                                var line = stack[i];
	                                if (!nodeFramePattern.test(line)) {
	                                    var lineMatches = line.match(parseLinePattern);
	                                    if (lineMatches) {
	                                        handlerLine = "at " + lineMatches[1] + ":" + lineMatches[2] + ":" + lineMatches[3] + " ";
	                                    }
	                                    break;
	                                }
	                            }
	
	                            if (stack.length > 0) {
	                                var firstUserLine = stack[0];
	                                for (var i = 0; i < traceLines.length; ++i) {
	
	                                    if (traceLines[i] === firstUserLine) {
	                                        if (i > 0) {
	                                            creatorLine = "\n" + traceLines[i - 1];
	                                        }
	                                        break;
	                                    }
	                                }
	                            }
	                        }
	                        var msg = "a promise was created in a " + name + "handler " + handlerLine + "but was not returned from it, " + "see http://goo.gl/rRqMUw" + creatorLine;
	                        promise._warn(msg, true, promiseCreated);
	                    }
	                }
	
	                function deprecated(name, replacement) {
	                    var message = name + " is deprecated and will be removed in a future version.";
	                    if (replacement) message += " Use " + replacement + " instead.";
	                    return warn(message);
	                }
	
	                function warn(message, shouldUseOwnTrace, promise) {
	                    if (!config.warnings) return;
	                    var warning = new Warning(message);
	                    var ctx;
	                    if (shouldUseOwnTrace) {
	                        promise._attachExtraTrace(warning);
	                    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
	                        ctx.attachExtraTrace(warning);
	                    } else {
	                        var parsed = parseStackAndMessage(warning);
	                        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
	                    }
	
	                    if (!activeFireEvent("warning", warning)) {
	                        formatAndLogError(warning, "", true);
	                    }
	                }
	
	                function reconstructStack(message, stacks) {
	                    for (var i = 0; i < stacks.length - 1; ++i) {
	                        stacks[i].push("From previous event:");
	                        stacks[i] = stacks[i].join("\n");
	                    }
	                    if (i < stacks.length) {
	                        stacks[i] = stacks[i].join("\n");
	                    }
	                    return message + "\n" + stacks.join("\n");
	                }
	
	                function removeDuplicateOrEmptyJumps(stacks) {
	                    for (var i = 0; i < stacks.length; ++i) {
	                        if (stacks[i].length === 0 || i + 1 < stacks.length && stacks[i][0] === stacks[i + 1][0]) {
	                            stacks.splice(i, 1);
	                            i--;
	                        }
	                    }
	                }
	
	                function removeCommonRoots(stacks) {
	                    var current = stacks[0];
	                    for (var i = 1; i < stacks.length; ++i) {
	                        var prev = stacks[i];
	                        var currentLastIndex = current.length - 1;
	                        var currentLastLine = current[currentLastIndex];
	                        var commonRootMeetPoint = -1;
	
	                        for (var j = prev.length - 1; j >= 0; --j) {
	                            if (prev[j] === currentLastLine) {
	                                commonRootMeetPoint = j;
	                                break;
	                            }
	                        }
	
	                        for (var j = commonRootMeetPoint; j >= 0; --j) {
	                            var line = prev[j];
	                            if (current[currentLastIndex] === line) {
	                                current.pop();
	                                currentLastIndex--;
	                            } else {
	                                break;
	                            }
	                        }
	                        current = prev;
	                    }
	                }
	
	                function cleanStack(stack) {
	                    var ret = [];
	                    for (var i = 0; i < stack.length; ++i) {
	                        var line = stack[i];
	                        var isTraceLine = "    (No stack trace)" === line || stackFramePattern.test(line);
	                        var isInternalFrame = isTraceLine && shouldIgnore(line);
	                        if (isTraceLine && !isInternalFrame) {
	                            if (indentStackFrames && line.charAt(0) !== " ") {
	                                line = "    " + line;
	                            }
	                            ret.push(line);
	                        }
	                    }
	                    return ret;
	                }
	
	                function stackFramesAsArray(error) {
	                    var stack = error.stack.replace(/\s+$/g, "").split("\n");
	                    for (var i = 0; i < stack.length; ++i) {
	                        var line = stack[i];
	                        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
	                            break;
	                        }
	                    }
	                    if (i > 0) {
	                        stack = stack.slice(i);
	                    }
	                    return stack;
	                }
	
	                function parseStackAndMessage(error) {
	                    var stack = error.stack;
	                    var message = error.toString();
	                    stack = typeof stack === "string" && stack.length > 0 ? stackFramesAsArray(error) : ["    (No stack trace)"];
	                    return {
	                        message: message,
	                        stack: cleanStack(stack)
	                    };
	                }
	
	                function formatAndLogError(error, title, isSoft) {
	                    if (typeof console !== "undefined") {
	                        var message;
	                        if (util.isObject(error)) {
	                            var stack = error.stack;
	                            message = title + formatStack(stack, error);
	                        } else {
	                            message = title + String(error);
	                        }
	                        if (typeof printWarning === "function") {
	                            printWarning(message, isSoft);
	                        } else if (typeof console.log === "function" || _typeof(console.log) === "object") {
	                            console.log(message);
	                        }
	                    }
	                }
	
	                function fireRejectionEvent(name, localHandler, reason, promise) {
	                    var localEventFired = false;
	                    try {
	                        if (typeof localHandler === "function") {
	                            localEventFired = true;
	                            if (name === "rejectionHandled") {
	                                localHandler(promise);
	                            } else {
	                                localHandler(reason, promise);
	                            }
	                        }
	                    } catch (e) {
	                        async.throwLater(e);
	                    }
	
	                    if (name === "unhandledRejection") {
	                        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
	                            formatAndLogError(reason, "Unhandled rejection ");
	                        }
	                    } else {
	                        activeFireEvent(name, promise);
	                    }
	                }
	
	                function formatNonError(obj) {
	                    var str;
	                    if (typeof obj === "function") {
	                        str = "[function " + (obj.name || "anonymous") + "]";
	                    } else {
	                        str = obj && typeof obj.toString === "function" ? obj.toString() : util.toString(obj);
	                        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
	                        if (ruselessToString.test(str)) {
	                            try {
	                                var newStr = JSON.stringify(obj);
	                                str = newStr;
	                            } catch (e) {}
	                        }
	                        if (str.length === 0) {
	                            str = "(empty array)";
	                        }
	                    }
	                    return "(<" + snip(str) + ">, no stack trace)";
	                }
	
	                function snip(str) {
	                    var maxChars = 41;
	                    if (str.length < maxChars) {
	                        return str;
	                    }
	                    return str.substr(0, maxChars - 3) + "...";
	                }
	
	                function longStackTracesIsSupported() {
	                    return typeof captureStackTrace === "function";
	                }
	
	                var shouldIgnore = function shouldIgnore() {
	                    return false;
	                };
	                var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
	                function parseLineInfo(line) {
	                    var matches = line.match(parseLineInfoRegex);
	                    if (matches) {
	                        return {
	                            fileName: matches[1],
	                            line: parseInt(matches[2], 10)
	                        };
	                    }
	                }
	
	                function setBounds(firstLineError, lastLineError) {
	                    if (!longStackTracesIsSupported()) return;
	                    var firstStackLines = firstLineError.stack.split("\n");
	                    var lastStackLines = lastLineError.stack.split("\n");
	                    var firstIndex = -1;
	                    var lastIndex = -1;
	                    var firstFileName;
	                    var lastFileName;
	                    for (var i = 0; i < firstStackLines.length; ++i) {
	                        var result = parseLineInfo(firstStackLines[i]);
	                        if (result) {
	                            firstFileName = result.fileName;
	                            firstIndex = result.line;
	                            break;
	                        }
	                    }
	                    for (var i = 0; i < lastStackLines.length; ++i) {
	                        var result = parseLineInfo(lastStackLines[i]);
	                        if (result) {
	                            lastFileName = result.fileName;
	                            lastIndex = result.line;
	                            break;
	                        }
	                    }
	                    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName || firstFileName !== lastFileName || firstIndex >= lastIndex) {
	                        return;
	                    }
	
	                    shouldIgnore = function shouldIgnore(line) {
	                        if (bluebirdFramePattern.test(line)) return true;
	                        var info = parseLineInfo(line);
	                        if (info) {
	                            if (info.fileName === firstFileName && firstIndex <= info.line && info.line <= lastIndex) {
	                                return true;
	                            }
	                        }
	                        return false;
	                    };
	                }
	
	                function CapturedTrace(parent) {
	                    this._parent = parent;
	                    this._promisesCreated = 0;
	                    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
	                    captureStackTrace(this, CapturedTrace);
	                    if (length > 32) this.uncycle();
	                }
	                util.inherits(CapturedTrace, Error);
	                Context.CapturedTrace = CapturedTrace;
	
	                CapturedTrace.prototype.uncycle = function () {
	                    var length = this._length;
	                    if (length < 2) return;
	                    var nodes = [];
	                    var stackToIndex = {};
	
	                    for (var i = 0, node = this; node !== undefined; ++i) {
	                        nodes.push(node);
	                        node = node._parent;
	                    }
	                    length = this._length = i;
	                    for (var i = length - 1; i >= 0; --i) {
	                        var stack = nodes[i].stack;
	                        if (stackToIndex[stack] === undefined) {
	                            stackToIndex[stack] = i;
	                        }
	                    }
	                    for (var i = 0; i < length; ++i) {
	                        var currentStack = nodes[i].stack;
	                        var index = stackToIndex[currentStack];
	                        if (index !== undefined && index !== i) {
	                            if (index > 0) {
	                                nodes[index - 1]._parent = undefined;
	                                nodes[index - 1]._length = 1;
	                            }
	                            nodes[i]._parent = undefined;
	                            nodes[i]._length = 1;
	                            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;
	
	                            if (index < length - 1) {
	                                cycleEdgeNode._parent = nodes[index + 1];
	                                cycleEdgeNode._parent.uncycle();
	                                cycleEdgeNode._length = cycleEdgeNode._parent._length + 1;
	                            } else {
	                                cycleEdgeNode._parent = undefined;
	                                cycleEdgeNode._length = 1;
	                            }
	                            var currentChildLength = cycleEdgeNode._length + 1;
	                            for (var j = i - 2; j >= 0; --j) {
	                                nodes[j]._length = currentChildLength;
	                                currentChildLength++;
	                            }
	                            return;
	                        }
	                    }
	                };
	
	                CapturedTrace.prototype.attachExtraTrace = function (error) {
	                    if (error.__stackCleaned__) return;
	                    this.uncycle();
	                    var parsed = parseStackAndMessage(error);
	                    var message = parsed.message;
	                    var stacks = [parsed.stack];
	
	                    var trace = this;
	                    while (trace !== undefined) {
	                        stacks.push(cleanStack(trace.stack.split("\n")));
	                        trace = trace._parent;
	                    }
	                    removeCommonRoots(stacks);
	                    removeDuplicateOrEmptyJumps(stacks);
	                    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
	                    util.notEnumerableProp(error, "__stackCleaned__", true);
	                };
	
	                var captureStackTrace = function stackDetection() {
	                    var v8stackFramePattern = /^\s*at\s*/;
	                    var v8stackFormatter = function v8stackFormatter(stack, error) {
	                        if (typeof stack === "string") return stack;
	
	                        if (error.name !== undefined && error.message !== undefined) {
	                            return error.toString();
	                        }
	                        return formatNonError(error);
	                    };
	
	                    if (typeof Error.stackTraceLimit === "number" && typeof Error.captureStackTrace === "function") {
	                        Error.stackTraceLimit += 6;
	                        stackFramePattern = v8stackFramePattern;
	                        formatStack = v8stackFormatter;
	                        var captureStackTrace = Error.captureStackTrace;
	
	                        shouldIgnore = function shouldIgnore(line) {
	                            return bluebirdFramePattern.test(line);
	                        };
	                        return function (receiver, ignoreUntil) {
	                            Error.stackTraceLimit += 6;
	                            captureStackTrace(receiver, ignoreUntil);
	                            Error.stackTraceLimit -= 6;
	                        };
	                    }
	                    var err = new Error();
	
	                    if (typeof err.stack === "string" && err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
	                        stackFramePattern = /@/;
	                        formatStack = v8stackFormatter;
	                        indentStackFrames = true;
	                        return function captureStackTrace(o) {
	                            o.stack = new Error().stack;
	                        };
	                    }
	
	                    var hasStackAfterThrow;
	                    try {
	                        throw new Error();
	                    } catch (e) {
	                        hasStackAfterThrow = "stack" in e;
	                    }
	                    if (!("stack" in err) && hasStackAfterThrow && typeof Error.stackTraceLimit === "number") {
	                        stackFramePattern = v8stackFramePattern;
	                        formatStack = v8stackFormatter;
	                        return function captureStackTrace(o) {
	                            Error.stackTraceLimit += 6;
	                            try {
	                                throw new Error();
	                            } catch (e) {
	                                o.stack = e.stack;
	                            }
	                            Error.stackTraceLimit -= 6;
	                        };
	                    }
	
	                    formatStack = function formatStack(stack, error) {
	                        if (typeof stack === "string") return stack;
	
	                        if (((typeof error === "undefined" ? "undefined" : _typeof(error)) === "object" || typeof error === "function") && error.name !== undefined && error.message !== undefined) {
	                            return error.toString();
	                        }
	                        return formatNonError(error);
	                    };
	
	                    return null;
	                }([]);
	
	                if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
	                    printWarning = function printWarning(message) {
	                        console.warn(message);
	                    };
	                    if (util.isNode && process.stderr.isTTY) {
	                        printWarning = function printWarning(message, isSoft) {
	                            var color = isSoft ? "\x1B[33m" : "\x1B[31m";
	                            console.warn(color + message + "\x1B[0m\n");
	                        };
	                    } else if (!util.isNode && typeof new Error().stack === "string") {
	                        printWarning = function printWarning(message, isSoft) {
	                            console.warn("%c" + message, isSoft ? "color: darkorange" : "color: red");
	                        };
	                    }
	                }
	
	                var config = {
	                    warnings: warnings,
	                    longStackTraces: false,
	                    cancellation: false,
	                    monitoring: false
	                };
	
	                if (longStackTraces) Promise.longStackTraces();
	
	                return {
	                    longStackTraces: function longStackTraces() {
	                        return config.longStackTraces;
	                    },
	                    warnings: function warnings() {
	                        return config.warnings;
	                    },
	                    cancellation: function cancellation() {
	                        return config.cancellation;
	                    },
	                    monitoring: function monitoring() {
	                        return config.monitoring;
	                    },
	                    propagateFromFunction: function propagateFromFunction() {
	                        return _propagateFromFunction;
	                    },
	                    boundValueFunction: function boundValueFunction() {
	                        return _boundValueFunction;
	                    },
	                    checkForgottenReturns: checkForgottenReturns,
	                    setBounds: setBounds,
	                    warn: warn,
	                    deprecated: deprecated,
	                    CapturedTrace: CapturedTrace,
	                    fireDomEvent: fireDomEvent,
	                    fireGlobalEvent: fireGlobalEvent
	                };
	            };
	        }, { "./errors": 12, "./util": 36 }], 10: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise) {
	                function returner() {
	                    return this.value;
	                }
	                function thrower() {
	                    throw this.reason;
	                }
	
	                Promise.prototype["return"] = Promise.prototype.thenReturn = function (value) {
	                    if (value instanceof Promise) value.suppressUnhandledRejections();
	                    return this._then(returner, undefined, undefined, { value: value }, undefined);
	                };
	
	                Promise.prototype["throw"] = Promise.prototype.thenThrow = function (reason) {
	                    return this._then(thrower, undefined, undefined, { reason: reason }, undefined);
	                };
	
	                Promise.prototype.catchThrow = function (reason) {
	                    if (arguments.length <= 1) {
	                        return this._then(undefined, thrower, undefined, { reason: reason }, undefined);
	                    } else {
	                        var _reason = arguments[1];
	                        var handler = function handler() {
	                            throw _reason;
	                        };
	                        return this.caught(reason, handler);
	                    }
	                };
	
	                Promise.prototype.catchReturn = function (value) {
	                    if (arguments.length <= 1) {
	                        if (value instanceof Promise) value.suppressUnhandledRejections();
	                        return this._then(undefined, returner, undefined, { value: value }, undefined);
	                    } else {
	                        var _value = arguments[1];
	                        if (_value instanceof Promise) _value.suppressUnhandledRejections();
	                        var handler = function handler() {
	                            return _value;
	                        };
	                        return this.caught(value, handler);
	                    }
	                };
	            };
	        }, {}], 11: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL) {
	                var PromiseReduce = Promise.reduce;
	                var PromiseAll = Promise.all;
	
	                function promiseAllThis() {
	                    return PromiseAll(this);
	                }
	
	                function PromiseMapSeries(promises, fn) {
	                    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
	                }
	
	                Promise.prototype.each = function (fn) {
	                    return PromiseReduce(this, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, this, undefined);
	                };
	
	                Promise.prototype.mapSeries = function (fn) {
	                    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
	                };
	
	                Promise.each = function (promises, fn) {
	                    return PromiseReduce(promises, fn, INTERNAL, 0)._then(promiseAllThis, undefined, undefined, promises, undefined);
	                };
	
	                Promise.mapSeries = PromiseMapSeries;
	            };
	        }, {}], 12: [function (_dereq_, module, exports) {
	            "use strict";
	
	            var es5 = _dereq_("./es5");
	            var Objectfreeze = es5.freeze;
	            var util = _dereq_("./util");
	            var inherits = util.inherits;
	            var notEnumerableProp = util.notEnumerableProp;
	
	            function subError(nameProperty, defaultMessage) {
	                function SubError(message) {
	                    if (!(this instanceof SubError)) return new SubError(message);
	                    notEnumerableProp(this, "message", typeof message === "string" ? message : defaultMessage);
	                    notEnumerableProp(this, "name", nameProperty);
	                    if (Error.captureStackTrace) {
	                        Error.captureStackTrace(this, this.constructor);
	                    } else {
	                        Error.call(this);
	                    }
	                }
	                inherits(SubError, Error);
	                return SubError;
	            }
	
	            var _TypeError, _RangeError;
	            var Warning = subError("Warning", "warning");
	            var CancellationError = subError("CancellationError", "cancellation error");
	            var TimeoutError = subError("TimeoutError", "timeout error");
	            var AggregateError = subError("AggregateError", "aggregate error");
	            try {
	                _TypeError = TypeError;
	                _RangeError = RangeError;
	            } catch (e) {
	                _TypeError = subError("TypeError", "type error");
	                _RangeError = subError("RangeError", "range error");
	            }
	
	            var methods = ("join pop push shift unshift slice filter forEach some " + "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");
	
	            for (var i = 0; i < methods.length; ++i) {
	                if (typeof Array.prototype[methods[i]] === "function") {
	                    AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
	                }
	            }
	
	            es5.defineProperty(AggregateError.prototype, "length", {
	                value: 0,
	                configurable: false,
	                writable: true,
	                enumerable: true
	            });
	            AggregateError.prototype["isOperational"] = true;
	            var level = 0;
	            AggregateError.prototype.toString = function () {
	                var indent = Array(level * 4 + 1).join(" ");
	                var ret = "\n" + indent + "AggregateError of:" + "\n";
	                level++;
	                indent = Array(level * 4 + 1).join(" ");
	                for (var i = 0; i < this.length; ++i) {
	                    var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
	                    var lines = str.split("\n");
	                    for (var j = 0; j < lines.length; ++j) {
	                        lines[j] = indent + lines[j];
	                    }
	                    str = lines.join("\n");
	                    ret += str + "\n";
	                }
	                level--;
	                return ret;
	            };
	
	            function OperationalError(message) {
	                if (!(this instanceof OperationalError)) return new OperationalError(message);
	                notEnumerableProp(this, "name", "OperationalError");
	                notEnumerableProp(this, "message", message);
	                this.cause = message;
	                this["isOperational"] = true;
	
	                if (message instanceof Error) {
	                    notEnumerableProp(this, "message", message.message);
	                    notEnumerableProp(this, "stack", message.stack);
	                } else if (Error.captureStackTrace) {
	                    Error.captureStackTrace(this, this.constructor);
	                }
	            }
	            inherits(OperationalError, Error);
	
	            var errorTypes = Error["__BluebirdErrorTypes__"];
	            if (!errorTypes) {
	                errorTypes = Objectfreeze({
	                    CancellationError: CancellationError,
	                    TimeoutError: TimeoutError,
	                    OperationalError: OperationalError,
	                    RejectionError: OperationalError,
	                    AggregateError: AggregateError
	                });
	                es5.defineProperty(Error, "__BluebirdErrorTypes__", {
	                    value: errorTypes,
	                    writable: false,
	                    enumerable: false,
	                    configurable: false
	                });
	            }
	
	            module.exports = {
	                Error: Error,
	                TypeError: _TypeError,
	                RangeError: _RangeError,
	                CancellationError: errorTypes.CancellationError,
	                OperationalError: errorTypes.OperationalError,
	                TimeoutError: errorTypes.TimeoutError,
	                AggregateError: errorTypes.AggregateError,
	                Warning: Warning
	            };
	        }, { "./es5": 13, "./util": 36 }], 13: [function (_dereq_, module, exports) {
	            var isES5 = function () {
	                "use strict";
	
	                return this === undefined;
	            }();
	
	            if (isES5) {
	                module.exports = {
	                    freeze: Object.freeze,
	                    defineProperty: Object.defineProperty,
	                    getDescriptor: Object.getOwnPropertyDescriptor,
	                    keys: Object.keys,
	                    names: Object.getOwnPropertyNames,
	                    getPrototypeOf: Object.getPrototypeOf,
	                    isArray: Array.isArray,
	                    isES5: isES5,
	                    propertyIsWritable: function propertyIsWritable(obj, prop) {
	                        var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
	                        return !!(!descriptor || descriptor.writable || descriptor.set);
	                    }
	                };
	            } else {
	                var has = {}.hasOwnProperty;
	                var str = {}.toString;
	                var proto = {}.constructor.prototype;
	
	                var ObjectKeys = function ObjectKeys(o) {
	                    var ret = [];
	                    for (var key in o) {
	                        if (has.call(o, key)) {
	                            ret.push(key);
	                        }
	                    }
	                    return ret;
	                };
	
	                var ObjectGetDescriptor = function ObjectGetDescriptor(o, key) {
	                    return { value: o[key] };
	                };
	
	                var ObjectDefineProperty = function ObjectDefineProperty(o, key, desc) {
	                    o[key] = desc.value;
	                    return o;
	                };
	
	                var ObjectFreeze = function ObjectFreeze(obj) {
	                    return obj;
	                };
	
	                var ObjectGetPrototypeOf = function ObjectGetPrototypeOf(obj) {
	                    try {
	                        return Object(obj).constructor.prototype;
	                    } catch (e) {
	                        return proto;
	                    }
	                };
	
	                var ArrayIsArray = function ArrayIsArray(obj) {
	                    try {
	                        return str.call(obj) === "[object Array]";
	                    } catch (e) {
	                        return false;
	                    }
	                };
	
	                module.exports = {
	                    isArray: ArrayIsArray,
	                    keys: ObjectKeys,
	                    names: ObjectKeys,
	                    defineProperty: ObjectDefineProperty,
	                    getDescriptor: ObjectGetDescriptor,
	                    freeze: ObjectFreeze,
	                    getPrototypeOf: ObjectGetPrototypeOf,
	                    isES5: isES5,
	                    propertyIsWritable: function propertyIsWritable() {
	                        return true;
	                    }
	                };
	            }
	        }, {}], 14: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL) {
	                var PromiseMap = Promise.map;
	
	                Promise.prototype.filter = function (fn, options) {
	                    return PromiseMap(this, fn, options, INTERNAL);
	                };
	
	                Promise.filter = function (promises, fn, options) {
	                    return PromiseMap(promises, fn, options, INTERNAL);
	                };
	            };
	        }, {}], 15: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, tryConvertToPromise) {
	                var util = _dereq_("./util");
	                var CancellationError = Promise.CancellationError;
	                var errorObj = util.errorObj;
	
	                function PassThroughHandlerContext(promise, type, handler) {
	                    this.promise = promise;
	                    this.type = type;
	                    this.handler = handler;
	                    this.called = false;
	                    this.cancelPromise = null;
	                }
	
	                PassThroughHandlerContext.prototype.isFinallyHandler = function () {
	                    return this.type === 0;
	                };
	
	                function FinallyHandlerCancelReaction(finallyHandler) {
	                    this.finallyHandler = finallyHandler;
	                }
	
	                FinallyHandlerCancelReaction.prototype._resultCancelled = function () {
	                    checkCancel(this.finallyHandler);
	                };
	
	                function checkCancel(ctx, reason) {
	                    if (ctx.cancelPromise != null) {
	                        if (arguments.length > 1) {
	                            ctx.cancelPromise._reject(reason);
	                        } else {
	                            ctx.cancelPromise._cancel();
	                        }
	                        ctx.cancelPromise = null;
	                        return true;
	                    }
	                    return false;
	                }
	
	                function succeed() {
	                    return finallyHandler.call(this, this.promise._target()._settledValue());
	                }
	                function fail(reason) {
	                    if (checkCancel(this, reason)) return;
	                    errorObj.e = reason;
	                    return errorObj;
	                }
	                function finallyHandler(reasonOrValue) {
	                    var promise = this.promise;
	                    var handler = this.handler;
	
	                    if (!this.called) {
	                        this.called = true;
	                        var ret = this.isFinallyHandler() ? handler.call(promise._boundValue()) : handler.call(promise._boundValue(), reasonOrValue);
	                        if (ret !== undefined) {
	                            promise._setReturnedNonUndefined();
	                            var maybePromise = tryConvertToPromise(ret, promise);
	                            if (maybePromise instanceof Promise) {
	                                if (this.cancelPromise != null) {
	                                    if (maybePromise._isCancelled()) {
	                                        var reason = new CancellationError("late cancellation observer");
	                                        promise._attachExtraTrace(reason);
	                                        errorObj.e = reason;
	                                        return errorObj;
	                                    } else if (maybePromise.isPending()) {
	                                        maybePromise._attachCancellationCallback(new FinallyHandlerCancelReaction(this));
	                                    }
	                                }
	                                return maybePromise._then(succeed, fail, undefined, this, undefined);
	                            }
	                        }
	                    }
	
	                    if (promise.isRejected()) {
	                        checkCancel(this);
	                        errorObj.e = reasonOrValue;
	                        return errorObj;
	                    } else {
	                        checkCancel(this);
	                        return reasonOrValue;
	                    }
	                }
	
	                Promise.prototype._passThrough = function (handler, type, success, fail) {
	                    if (typeof handler !== "function") return this.then();
	                    return this._then(success, fail, undefined, new PassThroughHandlerContext(this, type, handler), undefined);
	                };
	
	                Promise.prototype.lastly = Promise.prototype["finally"] = function (handler) {
	                    return this._passThrough(handler, 0, finallyHandler, finallyHandler);
	                };
	
	                Promise.prototype.tap = function (handler) {
	                    return this._passThrough(handler, 1, finallyHandler);
	                };
	
	                return PassThroughHandlerContext;
	            };
	        }, { "./util": 36 }], 16: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug) {
	                var errors = _dereq_("./errors");
	                var TypeError = errors.TypeError;
	                var util = _dereq_("./util");
	                var errorObj = util.errorObj;
	                var tryCatch = util.tryCatch;
	                var yieldHandlers = [];
	
	                function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
	                    for (var i = 0; i < yieldHandlers.length; ++i) {
	                        traceParent._pushContext();
	                        var result = tryCatch(yieldHandlers[i])(value);
	                        traceParent._popContext();
	                        if (result === errorObj) {
	                            traceParent._pushContext();
	                            var ret = Promise.reject(errorObj.e);
	                            traceParent._popContext();
	                            return ret;
	                        }
	                        var maybePromise = tryConvertToPromise(result, traceParent);
	                        if (maybePromise instanceof Promise) return maybePromise;
	                    }
	                    return null;
	                }
	
	                function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
	                    if (debug.cancellation()) {
	                        var internal = new Promise(INTERNAL);
	                        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
	                        this._promise = internal.lastly(function () {
	                            return _finallyPromise;
	                        });
	                        internal._captureStackTrace();
	                        internal._setOnCancel(this);
	                    } else {
	                        var promise = this._promise = new Promise(INTERNAL);
	                        promise._captureStackTrace();
	                    }
	                    this._stack = stack;
	                    this._generatorFunction = generatorFunction;
	                    this._receiver = receiver;
	                    this._generator = undefined;
	                    this._yieldHandlers = typeof yieldHandler === "function" ? [yieldHandler].concat(yieldHandlers) : yieldHandlers;
	                    this._yieldedPromise = null;
	                    this._cancellationPhase = false;
	                }
	                util.inherits(PromiseSpawn, Proxyable);
	
	                PromiseSpawn.prototype._isResolved = function () {
	                    return this._promise === null;
	                };
	
	                PromiseSpawn.prototype._cleanup = function () {
	                    this._promise = this._generator = null;
	                    if (debug.cancellation() && this._finallyPromise !== null) {
	                        this._finallyPromise._fulfill();
	                        this._finallyPromise = null;
	                    }
	                };
	
	                PromiseSpawn.prototype._promiseCancelled = function () {
	                    if (this._isResolved()) return;
	                    var implementsReturn = typeof this._generator["return"] !== "undefined";
	
	                    var result;
	                    if (!implementsReturn) {
	                        var reason = new Promise.CancellationError("generator .return() sentinel");
	                        Promise.coroutine.returnSentinel = reason;
	                        this._promise._attachExtraTrace(reason);
	                        this._promise._pushContext();
	                        result = tryCatch(this._generator["throw"]).call(this._generator, reason);
	                        this._promise._popContext();
	                    } else {
	                        this._promise._pushContext();
	                        result = tryCatch(this._generator["return"]).call(this._generator, undefined);
	                        this._promise._popContext();
	                    }
	                    this._cancellationPhase = true;
	                    this._yieldedPromise = null;
	                    this._continue(result);
	                };
	
	                PromiseSpawn.prototype._promiseFulfilled = function (value) {
	                    this._yieldedPromise = null;
	                    this._promise._pushContext();
	                    var result = tryCatch(this._generator.next).call(this._generator, value);
	                    this._promise._popContext();
	                    this._continue(result);
	                };
	
	                PromiseSpawn.prototype._promiseRejected = function (reason) {
	                    this._yieldedPromise = null;
	                    this._promise._attachExtraTrace(reason);
	                    this._promise._pushContext();
	                    var result = tryCatch(this._generator["throw"]).call(this._generator, reason);
	                    this._promise._popContext();
	                    this._continue(result);
	                };
	
	                PromiseSpawn.prototype._resultCancelled = function () {
	                    if (this._yieldedPromise instanceof Promise) {
	                        var promise = this._yieldedPromise;
	                        this._yieldedPromise = null;
	                        promise.cancel();
	                    }
	                };
	
	                PromiseSpawn.prototype.promise = function () {
	                    return this._promise;
	                };
	
	                PromiseSpawn.prototype._run = function () {
	                    this._generator = this._generatorFunction.call(this._receiver);
	                    this._receiver = this._generatorFunction = undefined;
	                    this._promiseFulfilled(undefined);
	                };
	
	                PromiseSpawn.prototype._continue = function (result) {
	                    var promise = this._promise;
	                    if (result === errorObj) {
	                        this._cleanup();
	                        if (this._cancellationPhase) {
	                            return promise.cancel();
	                        } else {
	                            return promise._rejectCallback(result.e, false);
	                        }
	                    }
	
	                    var value = result.value;
	                    if (result.done === true) {
	                        this._cleanup();
	                        if (this._cancellationPhase) {
	                            return promise.cancel();
	                        } else {
	                            return promise._resolveCallback(value);
	                        }
	                    } else {
	                        var maybePromise = tryConvertToPromise(value, this._promise);
	                        if (!(maybePromise instanceof Promise)) {
	                            maybePromise = promiseFromYieldHandler(maybePromise, this._yieldHandlers, this._promise);
	                            if (maybePromise === null) {
	                                this._promiseRejected(new TypeError("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", value) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
	                                return;
	                            }
	                        }
	                        maybePromise = maybePromise._target();
	                        var bitField = maybePromise._bitField;
	                        ;
	                        if ((bitField & 50397184) === 0) {
	                            this._yieldedPromise = maybePromise;
	                            maybePromise._proxy(this, null);
	                        } else if ((bitField & 33554432) !== 0) {
	                            Promise._async.invoke(this._promiseFulfilled, this, maybePromise._value());
	                        } else if ((bitField & 16777216) !== 0) {
	                            Promise._async.invoke(this._promiseRejected, this, maybePromise._reason());
	                        } else {
	                            this._promiseCancelled();
	                        }
	                    }
	                };
	
	                Promise.coroutine = function (generatorFunction, options) {
	                    if (typeof generatorFunction !== "function") {
	                        throw new TypeError("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                    var yieldHandler = Object(options).yieldHandler;
	                    var PromiseSpawn$ = PromiseSpawn;
	                    var stack = new Error().stack;
	                    return function () {
	                        var generator = generatorFunction.apply(this, arguments);
	                        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler, stack);
	                        var ret = spawn.promise();
	                        spawn._generator = generator;
	                        spawn._promiseFulfilled(undefined);
	                        return ret;
	                    };
	                };
	
	                Promise.coroutine.addYieldHandler = function (fn) {
	                    if (typeof fn !== "function") {
	                        throw new TypeError("expecting a function but got " + util.classString(fn));
	                    }
	                    yieldHandlers.push(fn);
	                };
	
	                Promise.spawn = function (generatorFunction) {
	                    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
	                    if (typeof generatorFunction !== "function") {
	                        return apiRejection("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                    var spawn = new PromiseSpawn(generatorFunction, this);
	                    var ret = spawn.promise();
	                    spawn._run(Promise.spawn);
	                    return ret;
	                };
	            };
	        }, { "./errors": 12, "./util": 36 }], 17: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain) {
	                var util = _dereq_("./util");
	                var canEvaluate = util.canEvaluate;
	                var tryCatch = util.tryCatch;
	                var errorObj = util.errorObj;
	                var reject;
	
	                if (false) {
	                    if (canEvaluate) {
	                        var thenCallback = function thenCallback(i) {
	                            return new Function("value", "holder", "                             \n\
	            'use strict';                                                    \n\
	            holder.pIndex = value;                                           \n\
	            holder.checkFulfillment(this);                                   \n\
	            ".replace(/Index/g, i));
	                        };
	
	                        var promiseSetter = function promiseSetter(i) {
	                            return new Function("promise", "holder", "                           \n\
	            'use strict';                                                    \n\
	            holder.pIndex = promise;                                         \n\
	            ".replace(/Index/g, i));
	                        };
	
	                        var generateHolderClass = function generateHolderClass(total) {
	                            var props = new Array(total);
	                            for (var i = 0; i < props.length; ++i) {
	                                props[i] = "this.p" + (i + 1);
	                            }
	                            var assignment = props.join(" = ") + " = null;";
	                            var cancellationCode = "var promise;\n" + props.map(function (prop) {
	                                return "                                                         \n\
	                promise = " + prop + ";                                      \n\
	                if (promise instanceof Promise) {                            \n\
	                    promise.cancel();                                        \n\
	                }                                                            \n\
	            ";
	                            }).join("\n");
	                            var passedArguments = props.join(", ");
	                            var name = "Holder$" + total;
	
	                            var code = "return function(tryCatch, errorObj, Promise, async) {    \n\
	            'use strict';                                                    \n\
	            function [TheName](fn) {                                         \n\
	                [TheProperties]                                              \n\
	                this.fn = fn;                                                \n\
	                this.asyncNeeded = true;                                     \n\
	                this.now = 0;                                                \n\
	            }                                                                \n\
	                                                                             \n\
	            [TheName].prototype._callFunction = function(promise) {          \n\
	                promise._pushContext();                                      \n\
	                var ret = tryCatch(this.fn)([ThePassedArguments]);           \n\
	                promise._popContext();                                       \n\
	                if (ret === errorObj) {                                      \n\
	                    promise._rejectCallback(ret.e, false);                   \n\
	                } else {                                                     \n\
	                    promise._resolveCallback(ret);                           \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype.checkFulfillment = function(promise) {       \n\
	                var now = ++this.now;                                        \n\
	                if (now === [TheTotal]) {                                    \n\
	                    if (this.asyncNeeded) {                                  \n\
	                        async.invoke(this._callFunction, this, promise);     \n\
	                    } else {                                                 \n\
	                        this._callFunction(promise);                         \n\
	                    }                                                        \n\
	                                                                             \n\
	                }                                                            \n\
	            };                                                               \n\
	                                                                             \n\
	            [TheName].prototype._resultCancelled = function() {              \n\
	                [CancellationCode]                                           \n\
	            };                                                               \n\
	                                                                             \n\
	            return [TheName];                                                \n\
	        }(tryCatch, errorObj, Promise, async);                               \n\
	        ";
	
	                            code = code.replace(/\[TheName\]/g, name).replace(/\[TheTotal\]/g, total).replace(/\[ThePassedArguments\]/g, passedArguments).replace(/\[TheProperties\]/g, assignment).replace(/\[CancellationCode\]/g, cancellationCode);
	
	                            return new Function("tryCatch", "errorObj", "Promise", "async", code)(tryCatch, errorObj, Promise, async);
	                        };
	
	                        var holderClasses = [];
	                        var thenCallbacks = [];
	                        var promiseSetters = [];
	
	                        for (var i = 0; i < 8; ++i) {
	                            holderClasses.push(generateHolderClass(i + 1));
	                            thenCallbacks.push(thenCallback(i + 1));
	                            promiseSetters.push(promiseSetter(i + 1));
	                        }
	
	                        reject = function reject(reason) {
	                            this._reject(reason);
	                        };
	                    }
	                }
	
	                Promise.join = function () {
	                    var last = arguments.length - 1;
	                    var fn;
	                    if (last > 0 && typeof arguments[last] === "function") {
	                        fn = arguments[last];
	                        if (false) {
	                            if (last <= 8 && canEvaluate) {
	                                var ret = new Promise(INTERNAL);
	                                ret._captureStackTrace();
	                                var HolderClass = holderClasses[last - 1];
	                                var holder = new HolderClass(fn);
	                                var callbacks = thenCallbacks;
	
	                                for (var i = 0; i < last; ++i) {
	                                    var maybePromise = tryConvertToPromise(arguments[i], ret);
	                                    if (maybePromise instanceof Promise) {
	                                        maybePromise = maybePromise._target();
	                                        var bitField = maybePromise._bitField;
	                                        ;
	                                        if ((bitField & 50397184) === 0) {
	                                            maybePromise._then(callbacks[i], reject, undefined, ret, holder);
	                                            promiseSetters[i](maybePromise, holder);
	                                            holder.asyncNeeded = false;
	                                        } else if ((bitField & 33554432) !== 0) {
	                                            callbacks[i].call(ret, maybePromise._value(), holder);
	                                        } else if ((bitField & 16777216) !== 0) {
	                                            ret._reject(maybePromise._reason());
	                                        } else {
	                                            ret._cancel();
	                                        }
	                                    } else {
	                                        callbacks[i].call(ret, maybePromise, holder);
	                                    }
	                                }
	
	                                if (!ret._isFateSealed()) {
	                                    if (holder.asyncNeeded) {
	                                        var domain = getDomain();
	                                        if (domain !== null) {
	                                            holder.fn = util.domainBind(domain, holder.fn);
	                                        }
	                                    }
	                                    ret._setAsyncGuaranteed();
	                                    ret._setOnCancel(holder);
	                                }
	                                return ret;
	                            }
	                        }
	                    }
	                    var args = [].slice.call(arguments);;
	                    if (fn) args.pop();
	                    var ret = new PromiseArray(args).promise();
	                    return fn !== undefined ? ret.spread(fn) : ret;
	                };
	            };
	        }, { "./util": 36 }], 18: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
	                var getDomain = Promise._getDomain;
	                var util = _dereq_("./util");
	                var tryCatch = util.tryCatch;
	                var errorObj = util.errorObj;
	                var async = Promise._async;
	
	                function MappingPromiseArray(promises, fn, limit, _filter) {
	                    this.constructor$(promises);
	                    this._promise._captureStackTrace();
	                    var domain = getDomain();
	                    this._callback = domain === null ? fn : util.domainBind(domain, fn);
	                    this._preservedValues = _filter === INTERNAL ? new Array(this.length()) : null;
	                    this._limit = limit;
	                    this._inFlight = 0;
	                    this._queue = [];
	                    async.invoke(this._asyncInit, this, undefined);
	                }
	                util.inherits(MappingPromiseArray, PromiseArray);
	
	                MappingPromiseArray.prototype._asyncInit = function () {
	                    this._init$(undefined, -2);
	                };
	
	                MappingPromiseArray.prototype._init = function () {};
	
	                MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
	                    var values = this._values;
	                    var length = this.length();
	                    var preservedValues = this._preservedValues;
	                    var limit = this._limit;
	
	                    if (index < 0) {
	                        index = index * -1 - 1;
	                        values[index] = value;
	                        if (limit >= 1) {
	                            this._inFlight--;
	                            this._drainQueue();
	                            if (this._isResolved()) return true;
	                        }
	                    } else {
	                        if (limit >= 1 && this._inFlight >= limit) {
	                            values[index] = value;
	                            this._queue.push(index);
	                            return false;
	                        }
	                        if (preservedValues !== null) preservedValues[index] = value;
	
	                        var promise = this._promise;
	                        var callback = this._callback;
	                        var receiver = promise._boundValue();
	                        promise._pushContext();
	                        var ret = tryCatch(callback).call(receiver, value, index, length);
	                        var promiseCreated = promise._popContext();
	                        debug.checkForgottenReturns(ret, promiseCreated, preservedValues !== null ? "Promise.filter" : "Promise.map", promise);
	                        if (ret === errorObj) {
	                            this._reject(ret.e);
	                            return true;
	                        }
	
	                        var maybePromise = tryConvertToPromise(ret, this._promise);
	                        if (maybePromise instanceof Promise) {
	                            maybePromise = maybePromise._target();
	                            var bitField = maybePromise._bitField;
	                            ;
	                            if ((bitField & 50397184) === 0) {
	                                if (limit >= 1) this._inFlight++;
	                                values[index] = maybePromise;
	                                maybePromise._proxy(this, (index + 1) * -1);
	                                return false;
	                            } else if ((bitField & 33554432) !== 0) {
	                                ret = maybePromise._value();
	                            } else if ((bitField & 16777216) !== 0) {
	                                this._reject(maybePromise._reason());
	                                return true;
	                            } else {
	                                this._cancel();
	                                return true;
	                            }
	                        }
	                        values[index] = ret;
	                    }
	                    var totalResolved = ++this._totalResolved;
	                    if (totalResolved >= length) {
	                        if (preservedValues !== null) {
	                            this._filter(values, preservedValues);
	                        } else {
	                            this._resolve(values);
	                        }
	                        return true;
	                    }
	                    return false;
	                };
	
	                MappingPromiseArray.prototype._drainQueue = function () {
	                    var queue = this._queue;
	                    var limit = this._limit;
	                    var values = this._values;
	                    while (queue.length > 0 && this._inFlight < limit) {
	                        if (this._isResolved()) return;
	                        var index = queue.pop();
	                        this._promiseFulfilled(values[index], index);
	                    }
	                };
	
	                MappingPromiseArray.prototype._filter = function (booleans, values) {
	                    var len = values.length;
	                    var ret = new Array(len);
	                    var j = 0;
	                    for (var i = 0; i < len; ++i) {
	                        if (booleans[i]) ret[j++] = values[i];
	                    }
	                    ret.length = j;
	                    this._resolve(ret);
	                };
	
	                MappingPromiseArray.prototype.preservedValues = function () {
	                    return this._preservedValues;
	                };
	
	                function map(promises, fn, options, _filter) {
	                    if (typeof fn !== "function") {
	                        return apiRejection("expecting a function but got " + util.classString(fn));
	                    }
	
	                    var limit = 0;
	                    if (options !== undefined) {
	                        if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object" && options !== null) {
	                            if (typeof options.concurrency !== "number") {
	                                return Promise.reject(new TypeError("'concurrency' must be a number but it is " + util.classString(options.concurrency)));
	                            }
	                            limit = options.concurrency;
	                        } else {
	                            return Promise.reject(new TypeError("options argument must be an object but it is " + util.classString(options)));
	                        }
	                    }
	                    limit = typeof limit === "number" && isFinite(limit) && limit >= 1 ? limit : 0;
	                    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
	                }
	
	                Promise.prototype.map = function (fn, options) {
	                    return map(this, fn, options, null);
	                };
	
	                Promise.map = function (promises, fn, options, _filter) {
	                    return map(promises, fn, options, _filter);
	                };
	            };
	        }, { "./util": 36 }], 19: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
	                var util = _dereq_("./util");
	                var tryCatch = util.tryCatch;
	
	                Promise.method = function (fn) {
	                    if (typeof fn !== "function") {
	                        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
	                    }
	                    return function () {
	                        var ret = new Promise(INTERNAL);
	                        ret._captureStackTrace();
	                        ret._pushContext();
	                        var value = tryCatch(fn).apply(this, arguments);
	                        var promiseCreated = ret._popContext();
	                        debug.checkForgottenReturns(value, promiseCreated, "Promise.method", ret);
	                        ret._resolveFromSyncValue(value);
	                        return ret;
	                    };
	                };
	
	                Promise.attempt = Promise["try"] = function (fn) {
	                    if (typeof fn !== "function") {
	                        return apiRejection("expecting a function but got " + util.classString(fn));
	                    }
	                    var ret = new Promise(INTERNAL);
	                    ret._captureStackTrace();
	                    ret._pushContext();
	                    var value;
	                    if (arguments.length > 1) {
	                        debug.deprecated("calling Promise.try with more than 1 argument");
	                        var arg = arguments[1];
	                        var ctx = arguments[2];
	                        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg) : tryCatch(fn).call(ctx, arg);
	                    } else {
	                        value = tryCatch(fn)();
	                    }
	                    var promiseCreated = ret._popContext();
	                    debug.checkForgottenReturns(value, promiseCreated, "Promise.try", ret);
	                    ret._resolveFromSyncValue(value);
	                    return ret;
	                };
	
	                Promise.prototype._resolveFromSyncValue = function (value) {
	                    if (value === util.errorObj) {
	                        this._rejectCallback(value.e, false);
	                    } else {
	                        this._resolveCallback(value, true);
	                    }
	                };
	            };
	        }, { "./util": 36 }], 20: [function (_dereq_, module, exports) {
	            "use strict";
	
	            var util = _dereq_("./util");
	            var maybeWrapAsError = util.maybeWrapAsError;
	            var errors = _dereq_("./errors");
	            var OperationalError = errors.OperationalError;
	            var es5 = _dereq_("./es5");
	
	            function isUntypedError(obj) {
	                return obj instanceof Error && es5.getPrototypeOf(obj) === Error.prototype;
	            }
	
	            var rErrorKey = /^(?:name|message|stack|cause)$/;
	            function wrapAsOperationalError(obj) {
	                var ret;
	                if (isUntypedError(obj)) {
	                    ret = new OperationalError(obj);
	                    ret.name = obj.name;
	                    ret.message = obj.message;
	                    ret.stack = obj.stack;
	                    var keys = es5.keys(obj);
	                    for (var i = 0; i < keys.length; ++i) {
	                        var key = keys[i];
	                        if (!rErrorKey.test(key)) {
	                            ret[key] = obj[key];
	                        }
	                    }
	                    return ret;
	                }
	                util.markAsOriginatingFromRejection(obj);
	                return obj;
	            }
	
	            function nodebackForPromise(promise, multiArgs) {
	                return function (err, value) {
	                    if (promise === null) return;
	                    if (err) {
	                        var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
	                        promise._attachExtraTrace(wrapped);
	                        promise._reject(wrapped);
	                    } else if (!multiArgs) {
	                        promise._fulfill(value);
	                    } else {
	                        var args = [].slice.call(arguments, 1);;
	                        promise._fulfill(args);
	                    }
	                    promise = null;
	                };
	            }
	
	            module.exports = nodebackForPromise;
	        }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise) {
	                var util = _dereq_("./util");
	                var async = Promise._async;
	                var tryCatch = util.tryCatch;
	                var errorObj = util.errorObj;
	
	                function spreadAdapter(val, nodeback) {
	                    var promise = this;
	                    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
	                    var ret = tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
	                    if (ret === errorObj) {
	                        async.throwLater(ret.e);
	                    }
	                }
	
	                function successAdapter(val, nodeback) {
	                    var promise = this;
	                    var receiver = promise._boundValue();
	                    var ret = val === undefined ? tryCatch(nodeback).call(receiver, null) : tryCatch(nodeback).call(receiver, null, val);
	                    if (ret === errorObj) {
	                        async.throwLater(ret.e);
	                    }
	                }
	                function errorAdapter(reason, nodeback) {
	                    var promise = this;
	                    if (!reason) {
	                        var newReason = new Error(reason + "");
	                        newReason.cause = reason;
	                        reason = newReason;
	                    }
	                    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
	                    if (ret === errorObj) {
	                        async.throwLater(ret.e);
	                    }
	                }
	
	                Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback, options) {
	                    if (typeof nodeback == "function") {
	                        var adapter = successAdapter;
	                        if (options !== undefined && Object(options).spread) {
	                            adapter = spreadAdapter;
	                        }
	                        this._then(adapter, errorAdapter, undefined, this, nodeback);
	                    }
	                    return this;
	                };
	            };
	        }, { "./util": 36 }], 22: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function () {
	                var makeSelfResolutionError = function makeSelfResolutionError() {
	                    return new TypeError("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
	                };
	                var reflectHandler = function reflectHandler() {
	                    return new Promise.PromiseInspection(this._target());
	                };
	                var apiRejection = function apiRejection(msg) {
	                    return Promise.reject(new TypeError(msg));
	                };
	                function Proxyable() {}
	                var UNDEFINED_BINDING = {};
	                var util = _dereq_("./util");
	
	                var getDomain;
	                if (util.isNode) {
	                    getDomain = function getDomain() {
	                        var ret = process.domain;
	                        if (ret === undefined) ret = null;
	                        return ret;
	                    };
	                } else {
	                    getDomain = function getDomain() {
	                        return null;
	                    };
	                }
	                util.notEnumerableProp(Promise, "_getDomain", getDomain);
	
	                var es5 = _dereq_("./es5");
	                var Async = _dereq_("./async");
	                var async = new Async();
	                es5.defineProperty(Promise, "_async", { value: async });
	                var errors = _dereq_("./errors");
	                var TypeError = Promise.TypeError = errors.TypeError;
	                Promise.RangeError = errors.RangeError;
	                var CancellationError = Promise.CancellationError = errors.CancellationError;
	                Promise.TimeoutError = errors.TimeoutError;
	                Promise.OperationalError = errors.OperationalError;
	                Promise.RejectionError = errors.OperationalError;
	                Promise.AggregateError = errors.AggregateError;
	                var INTERNAL = function INTERNAL() {};
	                var APPLY = {};
	                var NEXT_FILTER = {};
	                var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
	                var PromiseArray = _dereq_("./promise_array")(Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable);
	                var Context = _dereq_("./context")(Promise);
	                /*jshint unused:false*/
	                var createContext = Context.create;
	                var debug = _dereq_("./debuggability")(Promise, Context);
	                var CapturedTrace = debug.CapturedTrace;
	                var PassThroughHandlerContext = _dereq_("./finally")(Promise, tryConvertToPromise);
	                var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
	                var nodebackForPromise = _dereq_("./nodeback");
	                var errorObj = util.errorObj;
	                var tryCatch = util.tryCatch;
	                function check(self, executor) {
	                    if (typeof executor !== "function") {
	                        throw new TypeError("expecting a function but got " + util.classString(executor));
	                    }
	                    if (self.constructor !== Promise) {
	                        throw new TypeError("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                }
	
	                function Promise(executor) {
	                    this._bitField = 0;
	                    this._fulfillmentHandler0 = undefined;
	                    this._rejectionHandler0 = undefined;
	                    this._promise0 = undefined;
	                    this._receiver0 = undefined;
	                    if (executor !== INTERNAL) {
	                        check(this, executor);
	                        this._resolveFromExecutor(executor);
	                    }
	                    this._promiseCreated();
	                    this._fireEvent("promiseCreated", this);
	                }
	
	                Promise.prototype.toString = function () {
	                    return "[object Promise]";
	                };
	
	                Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
	                    var len = arguments.length;
	                    if (len > 1) {
	                        var catchInstances = new Array(len - 1),
	                            j = 0,
	                            i;
	                        for (i = 0; i < len - 1; ++i) {
	                            var item = arguments[i];
	                            if (util.isObject(item)) {
	                                catchInstances[j++] = item;
	                            } else {
	                                return apiRejection("expecting an object but got " + "A catch statement predicate " + util.classString(item));
	                            }
	                        }
	                        catchInstances.length = j;
	                        fn = arguments[i];
	                        return this.then(undefined, catchFilter(catchInstances, fn, this));
	                    }
	                    return this.then(undefined, fn);
	                };
	
	                Promise.prototype.reflect = function () {
	                    return this._then(reflectHandler, reflectHandler, undefined, this, undefined);
	                };
	
	                Promise.prototype.then = function (didFulfill, didReject) {
	                    if (debug.warnings() && arguments.length > 0 && typeof didFulfill !== "function" && typeof didReject !== "function") {
	                        var msg = ".then() only accepts functions but was passed: " + util.classString(didFulfill);
	                        if (arguments.length > 1) {
	                            msg += ", " + util.classString(didReject);
	                        }
	                        this._warn(msg);
	                    }
	                    return this._then(didFulfill, didReject, undefined, undefined, undefined);
	                };
	
	                Promise.prototype.done = function (didFulfill, didReject) {
	                    var promise = this._then(didFulfill, didReject, undefined, undefined, undefined);
	                    promise._setIsFinal();
	                };
	
	                Promise.prototype.spread = function (fn) {
	                    if (typeof fn !== "function") {
	                        return apiRejection("expecting a function but got " + util.classString(fn));
	                    }
	                    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
	                };
	
	                Promise.prototype.toJSON = function () {
	                    var ret = {
	                        isFulfilled: false,
	                        isRejected: false,
	                        fulfillmentValue: undefined,
	                        rejectionReason: undefined
	                    };
	                    if (this.isFulfilled()) {
	                        ret.fulfillmentValue = this.value();
	                        ret.isFulfilled = true;
	                    } else if (this.isRejected()) {
	                        ret.rejectionReason = this.reason();
	                        ret.isRejected = true;
	                    }
	                    return ret;
	                };
	
	                Promise.prototype.all = function () {
	                    if (arguments.length > 0) {
	                        this._warn(".all() was passed arguments but it does not take any");
	                    }
	                    return new PromiseArray(this).promise();
	                };
	
	                Promise.prototype.error = function (fn) {
	                    return this.caught(util.originatesFromRejection, fn);
	                };
	
	                Promise.getNewLibraryCopy = module.exports;
	
	                Promise.is = function (val) {
	                    return val instanceof Promise;
	                };
	
	                Promise.fromNode = Promise.fromCallback = function (fn) {
	                    var ret = new Promise(INTERNAL);
	                    ret._captureStackTrace();
	                    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs : false;
	                    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
	                    if (result === errorObj) {
	                        ret._rejectCallback(result.e, true);
	                    }
	                    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
	                    return ret;
	                };
	
	                Promise.all = function (promises) {
	                    return new PromiseArray(promises).promise();
	                };
	
	                Promise.cast = function (obj) {
	                    var ret = tryConvertToPromise(obj);
	                    if (!(ret instanceof Promise)) {
	                        ret = new Promise(INTERNAL);
	                        ret._captureStackTrace();
	                        ret._setFulfilled();
	                        ret._rejectionHandler0 = obj;
	                    }
	                    return ret;
	                };
	
	                Promise.resolve = Promise.fulfilled = Promise.cast;
	
	                Promise.reject = Promise.rejected = function (reason) {
	                    var ret = new Promise(INTERNAL);
	                    ret._captureStackTrace();
	                    ret._rejectCallback(reason, true);
	                    return ret;
	                };
	
	                Promise.setScheduler = function (fn) {
	                    if (typeof fn !== "function") {
	                        throw new TypeError("expecting a function but got " + util.classString(fn));
	                    }
	                    return async.setScheduler(fn);
	                };
	
	                Promise.prototype._then = function (didFulfill, didReject, _, receiver, internalData) {
	                    var haveInternalData = internalData !== undefined;
	                    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
	                    var target = this._target();
	                    var bitField = target._bitField;
	
	                    if (!haveInternalData) {
	                        promise._propagateFrom(this, 3);
	                        promise._captureStackTrace();
	                        if (receiver === undefined && (this._bitField & 2097152) !== 0) {
	                            if (!((bitField & 50397184) === 0)) {
	                                receiver = this._boundValue();
	                            } else {
	                                receiver = target === this ? undefined : this._boundTo;
	                            }
	                        }
	                        this._fireEvent("promiseChained", this, promise);
	                    }
	
	                    var domain = getDomain();
	                    if (!((bitField & 50397184) === 0)) {
	                        var handler,
	                            value,
	                            settler = target._settlePromiseCtx;
	                        if ((bitField & 33554432) !== 0) {
	                            value = target._rejectionHandler0;
	                            handler = didFulfill;
	                        } else if ((bitField & 16777216) !== 0) {
	                            value = target._fulfillmentHandler0;
	                            handler = didReject;
	                            target._unsetRejectionIsUnhandled();
	                        } else {
	                            settler = target._settlePromiseLateCancellationObserver;
	                            value = new CancellationError("late cancellation observer");
	                            target._attachExtraTrace(value);
	                            handler = didReject;
	                        }
	
	                        async.invoke(settler, target, {
	                            handler: domain === null ? handler : typeof handler === "function" && util.domainBind(domain, handler),
	                            promise: promise,
	                            receiver: receiver,
	                            value: value
	                        });
	                    } else {
	                        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
	                    }
	
	                    return promise;
	                };
	
	                Promise.prototype._length = function () {
	                    return this._bitField & 65535;
	                };
	
	                Promise.prototype._isFateSealed = function () {
	                    return (this._bitField & 117506048) !== 0;
	                };
	
	                Promise.prototype._isFollowing = function () {
	                    return (this._bitField & 67108864) === 67108864;
	                };
	
	                Promise.prototype._setLength = function (len) {
	                    this._bitField = this._bitField & -65536 | len & 65535;
	                };
	
	                Promise.prototype._setFulfilled = function () {
	                    this._bitField = this._bitField | 33554432;
	                    this._fireEvent("promiseFulfilled", this);
	                };
	
	                Promise.prototype._setRejected = function () {
	                    this._bitField = this._bitField | 16777216;
	                    this._fireEvent("promiseRejected", this);
	                };
	
	                Promise.prototype._setFollowing = function () {
	                    this._bitField = this._bitField | 67108864;
	                    this._fireEvent("promiseResolved", this);
	                };
	
	                Promise.prototype._setIsFinal = function () {
	                    this._bitField = this._bitField | 4194304;
	                };
	
	                Promise.prototype._isFinal = function () {
	                    return (this._bitField & 4194304) > 0;
	                };
	
	                Promise.prototype._unsetCancelled = function () {
	                    this._bitField = this._bitField & ~65536;
	                };
	
	                Promise.prototype._setCancelled = function () {
	                    this._bitField = this._bitField | 65536;
	                    this._fireEvent("promiseCancelled", this);
	                };
	
	                Promise.prototype._setWillBeCancelled = function () {
	                    this._bitField = this._bitField | 8388608;
	                };
	
	                Promise.prototype._setAsyncGuaranteed = function () {
	                    if (async.hasCustomScheduler()) return;
	                    this._bitField = this._bitField | 134217728;
	                };
	
	                Promise.prototype._receiverAt = function (index) {
	                    var ret = index === 0 ? this._receiver0 : this[index * 4 - 4 + 3];
	                    if (ret === UNDEFINED_BINDING) {
	                        return undefined;
	                    } else if (ret === undefined && this._isBound()) {
	                        return this._boundValue();
	                    }
	                    return ret;
	                };
	
	                Promise.prototype._promiseAt = function (index) {
	                    return this[index * 4 - 4 + 2];
	                };
	
	                Promise.prototype._fulfillmentHandlerAt = function (index) {
	                    return this[index * 4 - 4 + 0];
	                };
	
	                Promise.prototype._rejectionHandlerAt = function (index) {
	                    return this[index * 4 - 4 + 1];
	                };
	
	                Promise.prototype._boundValue = function () {};
	
	                Promise.prototype._migrateCallback0 = function (follower) {
	                    var bitField = follower._bitField;
	                    var fulfill = follower._fulfillmentHandler0;
	                    var reject = follower._rejectionHandler0;
	                    var promise = follower._promise0;
	                    var receiver = follower._receiverAt(0);
	                    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	                    this._addCallbacks(fulfill, reject, promise, receiver, null);
	                };
	
	                Promise.prototype._migrateCallbackAt = function (follower, index) {
	                    var fulfill = follower._fulfillmentHandlerAt(index);
	                    var reject = follower._rejectionHandlerAt(index);
	                    var promise = follower._promiseAt(index);
	                    var receiver = follower._receiverAt(index);
	                    if (receiver === undefined) receiver = UNDEFINED_BINDING;
	                    this._addCallbacks(fulfill, reject, promise, receiver, null);
	                };
	
	                Promise.prototype._addCallbacks = function (fulfill, reject, promise, receiver, domain) {
	                    var index = this._length();
	
	                    if (index >= 65535 - 4) {
	                        index = 0;
	                        this._setLength(0);
	                    }
	
	                    if (index === 0) {
	                        this._promise0 = promise;
	                        this._receiver0 = receiver;
	                        if (typeof fulfill === "function") {
	                            this._fulfillmentHandler0 = domain === null ? fulfill : util.domainBind(domain, fulfill);
	                        }
	                        if (typeof reject === "function") {
	                            this._rejectionHandler0 = domain === null ? reject : util.domainBind(domain, reject);
	                        }
	                    } else {
	                        var base = index * 4 - 4;
	                        this[base + 2] = promise;
	                        this[base + 3] = receiver;
	                        if (typeof fulfill === "function") {
	                            this[base + 0] = domain === null ? fulfill : util.domainBind(domain, fulfill);
	                        }
	                        if (typeof reject === "function") {
	                            this[base + 1] = domain === null ? reject : util.domainBind(domain, reject);
	                        }
	                    }
	                    this._setLength(index + 1);
	                    return index;
	                };
	
	                Promise.prototype._proxy = function (proxyable, arg) {
	                    this._addCallbacks(undefined, undefined, arg, proxyable, null);
	                };
	
	                Promise.prototype._resolveCallback = function (value, shouldBind) {
	                    if ((this._bitField & 117506048) !== 0) return;
	                    if (value === this) return this._rejectCallback(makeSelfResolutionError(), false);
	                    var maybePromise = tryConvertToPromise(value, this);
	                    if (!(maybePromise instanceof Promise)) return this._fulfill(value);
	
	                    if (shouldBind) this._propagateFrom(maybePromise, 2);
	
	                    var promise = maybePromise._target();
	
	                    if (promise === this) {
	                        this._reject(makeSelfResolutionError());
	                        return;
	                    }
	
	                    var bitField = promise._bitField;
	                    if ((bitField & 50397184) === 0) {
	                        var len = this._length();
	                        if (len > 0) promise._migrateCallback0(this);
	                        for (var i = 1; i < len; ++i) {
	                            promise._migrateCallbackAt(this, i);
	                        }
	                        this._setFollowing();
	                        this._setLength(0);
	                        this._setFollowee(promise);
	                    } else if ((bitField & 33554432) !== 0) {
	                        this._fulfill(promise._value());
	                    } else if ((bitField & 16777216) !== 0) {
	                        this._reject(promise._reason());
	                    } else {
	                        var reason = new CancellationError("late cancellation observer");
	                        promise._attachExtraTrace(reason);
	                        this._reject(reason);
	                    }
	                };
	
	                Promise.prototype._rejectCallback = function (reason, synchronous, ignoreNonErrorWarnings) {
	                    var trace = util.ensureErrorObject(reason);
	                    var hasStack = trace === reason;
	                    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
	                        var message = "a promise was rejected with a non-error: " + util.classString(reason);
	                        this._warn(message, true);
	                    }
	                    this._attachExtraTrace(trace, synchronous ? hasStack : false);
	                    this._reject(reason);
	                };
	
	                Promise.prototype._resolveFromExecutor = function (executor) {
	                    var promise = this;
	                    this._captureStackTrace();
	                    this._pushContext();
	                    var synchronous = true;
	                    var r = this._execute(executor, function (value) {
	                        promise._resolveCallback(value);
	                    }, function (reason) {
	                        promise._rejectCallback(reason, synchronous);
	                    });
	                    synchronous = false;
	                    this._popContext();
	
	                    if (r !== undefined) {
	                        promise._rejectCallback(r, true);
	                    }
	                };
	
	                Promise.prototype._settlePromiseFromHandler = function (handler, receiver, value, promise) {
	                    var bitField = promise._bitField;
	                    if ((bitField & 65536) !== 0) return;
	                    promise._pushContext();
	                    var x;
	                    if (receiver === APPLY) {
	                        if (!value || typeof value.length !== "number") {
	                            x = errorObj;
	                            x.e = new TypeError("cannot .spread() a non-array: " + util.classString(value));
	                        } else {
	                            x = tryCatch(handler).apply(this._boundValue(), value);
	                        }
	                    } else {
	                        x = tryCatch(handler).call(receiver, value);
	                    }
	                    var promiseCreated = promise._popContext();
	                    bitField = promise._bitField;
	                    if ((bitField & 65536) !== 0) return;
	
	                    if (x === NEXT_FILTER) {
	                        promise._reject(value);
	                    } else if (x === errorObj) {
	                        promise._rejectCallback(x.e, false);
	                    } else {
	                        debug.checkForgottenReturns(x, promiseCreated, "", promise, this);
	                        promise._resolveCallback(x);
	                    }
	                };
	
	                Promise.prototype._target = function () {
	                    var ret = this;
	                    while (ret._isFollowing()) {
	                        ret = ret._followee();
	                    }return ret;
	                };
	
	                Promise.prototype._followee = function () {
	                    return this._rejectionHandler0;
	                };
	
	                Promise.prototype._setFollowee = function (promise) {
	                    this._rejectionHandler0 = promise;
	                };
	
	                Promise.prototype._settlePromise = function (promise, handler, receiver, value) {
	                    var isPromise = promise instanceof Promise;
	                    var bitField = this._bitField;
	                    var asyncGuaranteed = (bitField & 134217728) !== 0;
	                    if ((bitField & 65536) !== 0) {
	                        if (isPromise) promise._invokeInternalOnCancel();
	
	                        if (receiver instanceof PassThroughHandlerContext && receiver.isFinallyHandler()) {
	                            receiver.cancelPromise = promise;
	                            if (tryCatch(handler).call(receiver, value) === errorObj) {
	                                promise._reject(errorObj.e);
	                            }
	                        } else if (handler === reflectHandler) {
	                            promise._fulfill(reflectHandler.call(receiver));
	                        } else if (receiver instanceof Proxyable) {
	                            receiver._promiseCancelled(promise);
	                        } else if (isPromise || promise instanceof PromiseArray) {
	                            promise._cancel();
	                        } else {
	                            receiver.cancel();
	                        }
	                    } else if (typeof handler === "function") {
	                        if (!isPromise) {
	                            handler.call(receiver, value, promise);
	                        } else {
	                            if (asyncGuaranteed) promise._setAsyncGuaranteed();
	                            this._settlePromiseFromHandler(handler, receiver, value, promise);
	                        }
	                    } else if (receiver instanceof Proxyable) {
	                        if (!receiver._isResolved()) {
	                            if ((bitField & 33554432) !== 0) {
	                                receiver._promiseFulfilled(value, promise);
	                            } else {
	                                receiver._promiseRejected(value, promise);
	                            }
	                        }
	                    } else if (isPromise) {
	                        if (asyncGuaranteed) promise._setAsyncGuaranteed();
	                        if ((bitField & 33554432) !== 0) {
	                            promise._fulfill(value);
	                        } else {
	                            promise._reject(value);
	                        }
	                    }
	                };
	
	                Promise.prototype._settlePromiseLateCancellationObserver = function (ctx) {
	                    var handler = ctx.handler;
	                    var promise = ctx.promise;
	                    var receiver = ctx.receiver;
	                    var value = ctx.value;
	                    if (typeof handler === "function") {
	                        if (!(promise instanceof Promise)) {
	                            handler.call(receiver, value, promise);
	                        } else {
	                            this._settlePromiseFromHandler(handler, receiver, value, promise);
	                        }
	                    } else if (promise instanceof Promise) {
	                        promise._reject(value);
	                    }
	                };
	
	                Promise.prototype._settlePromiseCtx = function (ctx) {
	                    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
	                };
	
	                Promise.prototype._settlePromise0 = function (handler, value, bitField) {
	                    var promise = this._promise0;
	                    var receiver = this._receiverAt(0);
	                    this._promise0 = undefined;
	                    this._receiver0 = undefined;
	                    this._settlePromise(promise, handler, receiver, value);
	                };
	
	                Promise.prototype._clearCallbackDataAtIndex = function (index) {
	                    var base = index * 4 - 4;
	                    this[base + 2] = this[base + 3] = this[base + 0] = this[base + 1] = undefined;
	                };
	
	                Promise.prototype._fulfill = function (value) {
	                    var bitField = this._bitField;
	                    if ((bitField & 117506048) >>> 16) return;
	                    if (value === this) {
	                        var err = makeSelfResolutionError();
	                        this._attachExtraTrace(err);
	                        return this._reject(err);
	                    }
	                    this._setFulfilled();
	                    this._rejectionHandler0 = value;
	
	                    if ((bitField & 65535) > 0) {
	                        if ((bitField & 134217728) !== 0) {
	                            this._settlePromises();
	                        } else {
	                            async.settlePromises(this);
	                        }
	                    }
	                };
	
	                Promise.prototype._reject = function (reason) {
	                    var bitField = this._bitField;
	                    if ((bitField & 117506048) >>> 16) return;
	                    this._setRejected();
	                    this._fulfillmentHandler0 = reason;
	
	                    if (this._isFinal()) {
	                        return async.fatalError(reason, util.isNode);
	                    }
	
	                    if ((bitField & 65535) > 0) {
	                        async.settlePromises(this);
	                    } else {
	                        this._ensurePossibleRejectionHandled();
	                    }
	                };
	
	                Promise.prototype._fulfillPromises = function (len, value) {
	                    for (var i = 1; i < len; i++) {
	                        var handler = this._fulfillmentHandlerAt(i);
	                        var promise = this._promiseAt(i);
	                        var receiver = this._receiverAt(i);
	                        this._clearCallbackDataAtIndex(i);
	                        this._settlePromise(promise, handler, receiver, value);
	                    }
	                };
	
	                Promise.prototype._rejectPromises = function (len, reason) {
	                    for (var i = 1; i < len; i++) {
	                        var handler = this._rejectionHandlerAt(i);
	                        var promise = this._promiseAt(i);
	                        var receiver = this._receiverAt(i);
	                        this._clearCallbackDataAtIndex(i);
	                        this._settlePromise(promise, handler, receiver, reason);
	                    }
	                };
	
	                Promise.prototype._settlePromises = function () {
	                    var bitField = this._bitField;
	                    var len = bitField & 65535;
	
	                    if (len > 0) {
	                        if ((bitField & 16842752) !== 0) {
	                            var reason = this._fulfillmentHandler0;
	                            this._settlePromise0(this._rejectionHandler0, reason, bitField);
	                            this._rejectPromises(len, reason);
	                        } else {
	                            var value = this._rejectionHandler0;
	                            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
	                            this._fulfillPromises(len, value);
	                        }
	                        this._setLength(0);
	                    }
	                    this._clearCancellationData();
	                };
	
	                Promise.prototype._settledValue = function () {
	                    var bitField = this._bitField;
	                    if ((bitField & 33554432) !== 0) {
	                        return this._rejectionHandler0;
	                    } else if ((bitField & 16777216) !== 0) {
	                        return this._fulfillmentHandler0;
	                    }
	                };
	
	                function deferResolve(v) {
	                    this.promise._resolveCallback(v);
	                }
	                function deferReject(v) {
	                    this.promise._rejectCallback(v, false);
	                }
	
	                Promise.defer = Promise.pending = function () {
	                    debug.deprecated("Promise.defer", "new Promise");
	                    var promise = new Promise(INTERNAL);
	                    return {
	                        promise: promise,
	                        resolve: deferResolve,
	                        reject: deferReject
	                    };
	                };
	
	                util.notEnumerableProp(Promise, "_makeSelfResolutionError", makeSelfResolutionError);
	
	                _dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug);
	                _dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
	                _dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
	                _dereq_("./direct_resolve")(Promise);
	                _dereq_("./synchronous_inspection")(Promise);
	                _dereq_("./join")(Promise, PromiseArray, tryConvertToPromise, INTERNAL, async, getDomain);
	                Promise.Promise = Promise;
	                Promise.version = "3.4.6";
	                _dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	                _dereq_('./call_get.js')(Promise);
	                _dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
	                _dereq_('./timers.js')(Promise, INTERNAL, debug);
	                _dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
	                _dereq_('./nodeify.js')(Promise);
	                _dereq_('./promisify.js')(Promise, INTERNAL);
	                _dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
	                _dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
	                _dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
	                _dereq_('./settle.js')(Promise, PromiseArray, debug);
	                _dereq_('./some.js')(Promise, PromiseArray, apiRejection);
	                _dereq_('./filter.js')(Promise, INTERNAL);
	                _dereq_('./each.js')(Promise, INTERNAL);
	                _dereq_('./any.js')(Promise);
	
	                util.toFastProperties(Promise);
	                util.toFastProperties(Promise.prototype);
	                function fillTypes(value) {
	                    var p = new Promise(INTERNAL);
	                    p._fulfillmentHandler0 = value;
	                    p._rejectionHandler0 = value;
	                    p._promise0 = value;
	                    p._receiver0 = value;
	                }
	                // Complete slack tracking, opt out of field-type tracking and           
	                // stabilize map                                                         
	                fillTypes({ a: 1 });
	                fillTypes({ b: 2 });
	                fillTypes({ c: 3 });
	                fillTypes(1);
	                fillTypes(function () {});
	                fillTypes(undefined);
	                fillTypes(false);
	                fillTypes(new Promise(INTERNAL));
	                debug.setBounds(Async.firstLineError, util.lastLineError);
	                return Promise;
	            };
	        }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection, Proxyable) {
	                var util = _dereq_("./util");
	                var isArray = util.isArray;
	
	                function toResolutionValue(val) {
	                    switch (val) {
	                        case -2:
	                            return [];
	                        case -3:
	                            return {};
	                    }
	                }
	
	                function PromiseArray(values) {
	                    var promise = this._promise = new Promise(INTERNAL);
	                    if (values instanceof Promise) {
	                        promise._propagateFrom(values, 3);
	                    }
	                    promise._setOnCancel(this);
	                    this._values = values;
	                    this._length = 0;
	                    this._totalResolved = 0;
	                    this._init(undefined, -2);
	                }
	                util.inherits(PromiseArray, Proxyable);
	
	                PromiseArray.prototype.length = function () {
	                    return this._length;
	                };
	
	                PromiseArray.prototype.promise = function () {
	                    return this._promise;
	                };
	
	                PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
	                    var values = tryConvertToPromise(this._values, this._promise);
	                    if (values instanceof Promise) {
	                        values = values._target();
	                        var bitField = values._bitField;
	                        ;
	                        this._values = values;
	
	                        if ((bitField & 50397184) === 0) {
	                            this._promise._setAsyncGuaranteed();
	                            return values._then(init, this._reject, undefined, this, resolveValueIfEmpty);
	                        } else if ((bitField & 33554432) !== 0) {
	                            values = values._value();
	                        } else if ((bitField & 16777216) !== 0) {
	                            return this._reject(values._reason());
	                        } else {
	                            return this._cancel();
	                        }
	                    }
	                    values = util.asArray(values);
	                    if (values === null) {
	                        var err = apiRejection("expecting an array or an iterable object but got " + util.classString(values)).reason();
	                        this._promise._rejectCallback(err, false);
	                        return;
	                    }
	
	                    if (values.length === 0) {
	                        if (resolveValueIfEmpty === -5) {
	                            this._resolveEmptyArray();
	                        } else {
	                            this._resolve(toResolutionValue(resolveValueIfEmpty));
	                        }
	                        return;
	                    }
	                    this._iterate(values);
	                };
	
	                PromiseArray.prototype._iterate = function (values) {
	                    var len = this.getActualLength(values.length);
	                    this._length = len;
	                    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
	                    var result = this._promise;
	                    var isResolved = false;
	                    var bitField = null;
	                    for (var i = 0; i < len; ++i) {
	                        var maybePromise = tryConvertToPromise(values[i], result);
	
	                        if (maybePromise instanceof Promise) {
	                            maybePromise = maybePromise._target();
	                            bitField = maybePromise._bitField;
	                        } else {
	                            bitField = null;
	                        }
	
	                        if (isResolved) {
	                            if (bitField !== null) {
	                                maybePromise.suppressUnhandledRejections();
	                            }
	                        } else if (bitField !== null) {
	                            if ((bitField & 50397184) === 0) {
	                                maybePromise._proxy(this, i);
	                                this._values[i] = maybePromise;
	                            } else if ((bitField & 33554432) !== 0) {
	                                isResolved = this._promiseFulfilled(maybePromise._value(), i);
	                            } else if ((bitField & 16777216) !== 0) {
	                                isResolved = this._promiseRejected(maybePromise._reason(), i);
	                            } else {
	                                isResolved = this._promiseCancelled(i);
	                            }
	                        } else {
	                            isResolved = this._promiseFulfilled(maybePromise, i);
	                        }
	                    }
	                    if (!isResolved) result._setAsyncGuaranteed();
	                };
	
	                PromiseArray.prototype._isResolved = function () {
	                    return this._values === null;
	                };
	
	                PromiseArray.prototype._resolve = function (value) {
	                    this._values = null;
	                    this._promise._fulfill(value);
	                };
	
	                PromiseArray.prototype._cancel = function () {
	                    if (this._isResolved() || !this._promise._isCancellable()) return;
	                    this._values = null;
	                    this._promise._cancel();
	                };
	
	                PromiseArray.prototype._reject = function (reason) {
	                    this._values = null;
	                    this._promise._rejectCallback(reason, false);
	                };
	
	                PromiseArray.prototype._promiseFulfilled = function (value, index) {
	                    this._values[index] = value;
	                    var totalResolved = ++this._totalResolved;
	                    if (totalResolved >= this._length) {
	                        this._resolve(this._values);
	                        return true;
	                    }
	                    return false;
	                };
	
	                PromiseArray.prototype._promiseCancelled = function () {
	                    this._cancel();
	                    return true;
	                };
	
	                PromiseArray.prototype._promiseRejected = function (reason) {
	                    this._totalResolved++;
	                    this._reject(reason);
	                    return true;
	                };
	
	                PromiseArray.prototype._resultCancelled = function () {
	                    if (this._isResolved()) return;
	                    var values = this._values;
	                    this._cancel();
	                    if (values instanceof Promise) {
	                        values.cancel();
	                    } else {
	                        for (var i = 0; i < values.length; ++i) {
	                            if (values[i] instanceof Promise) {
	                                values[i].cancel();
	                            }
	                        }
	                    }
	                };
	
	                PromiseArray.prototype.shouldCopyValues = function () {
	                    return true;
	                };
	
	                PromiseArray.prototype.getActualLength = function (len) {
	                    return len;
	                };
	
	                return PromiseArray;
	            };
	        }, { "./util": 36 }], 24: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL) {
	                var THIS = {};
	                var util = _dereq_("./util");
	                var nodebackForPromise = _dereq_("./nodeback");
	                var withAppended = util.withAppended;
	                var maybeWrapAsError = util.maybeWrapAsError;
	                var canEvaluate = util.canEvaluate;
	                var TypeError = _dereq_("./errors").TypeError;
	                var defaultSuffix = "Async";
	                var defaultPromisified = { __isPromisified__: true };
	                var noCopyProps = ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"];
	                var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");
	
	                var defaultFilter = function defaultFilter(name) {
	                    return util.isIdentifier(name) && name.charAt(0) !== "_" && name !== "constructor";
	                };
	
	                function propsFilter(key) {
	                    return !noCopyPropsPattern.test(key);
	                }
	
	                function isPromisified(fn) {
	                    try {
	                        return fn.__isPromisified__ === true;
	                    } catch (e) {
	                        return false;
	                    }
	                }
	
	                function hasPromisified(obj, key, suffix) {
	                    var val = util.getDataPropertyOrDefault(obj, key + suffix, defaultPromisified);
	                    return val ? isPromisified(val) : false;
	                }
	                function checkValid(ret, suffix, suffixRegexp) {
	                    for (var i = 0; i < ret.length; i += 2) {
	                        var key = ret[i];
	                        if (suffixRegexp.test(key)) {
	                            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
	                            for (var j = 0; j < ret.length; j += 2) {
	                                if (ret[j] === keyWithoutAsyncSuffix) {
	                                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", suffix));
	                                }
	                            }
	                        }
	                    }
	                }
	
	                function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
	                    var keys = util.inheritedDataKeys(obj);
	                    var ret = [];
	                    for (var i = 0; i < keys.length; ++i) {
	                        var key = keys[i];
	                        var value = obj[key];
	                        var passesDefaultFilter = filter === defaultFilter ? true : defaultFilter(key, value, obj);
	                        if (typeof value === "function" && !isPromisified(value) && !hasPromisified(obj, key, suffix) && filter(key, value, obj, passesDefaultFilter)) {
	                            ret.push(key, value);
	                        }
	                    }
	                    checkValid(ret, suffix, suffixRegexp);
	                    return ret;
	                }
	
	                var escapeIdentRegex = function escapeIdentRegex(str) {
	                    return str.replace(/([$])/, "\\$");
	                };
	
	                var makeNodePromisifiedEval;
	                if (false) {
	                    var switchCaseArgumentOrder = function switchCaseArgumentOrder(likelyArgumentCount) {
	                        var ret = [likelyArgumentCount];
	                        var min = Math.max(0, likelyArgumentCount - 1 - 3);
	                        for (var i = likelyArgumentCount - 1; i >= min; --i) {
	                            ret.push(i);
	                        }
	                        for (var i = likelyArgumentCount + 1; i <= 3; ++i) {
	                            ret.push(i);
	                        }
	                        return ret;
	                    };
	
	                    var argumentSequence = function argumentSequence(argumentCount) {
	                        return util.filledRange(argumentCount, "_arg", "");
	                    };
	
	                    var parameterDeclaration = function parameterDeclaration(parameterCount) {
	                        return util.filledRange(Math.max(parameterCount, 3), "_arg", "");
	                    };
	
	                    var parameterCount = function parameterCount(fn) {
	                        if (typeof fn.length === "number") {
	                            return Math.max(Math.min(fn.length, 1023 + 1), 0);
	                        }
	                        return 0;
	                    };
	
	                    makeNodePromisifiedEval = function makeNodePromisifiedEval(callback, receiver, originalName, fn, _, multiArgs) {
	                        var newParameterCount = Math.max(0, parameterCount(fn) - 1);
	                        var argumentOrder = switchCaseArgumentOrder(newParameterCount);
	                        var shouldProxyThis = typeof callback === "string" || receiver === THIS;
	
	                        function generateCallForArgumentCount(count) {
	                            var args = argumentSequence(count).join(", ");
	                            var comma = count > 0 ? ", " : "";
	                            var ret;
	                            if (shouldProxyThis) {
	                                ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
	                            } else {
	                                ret = receiver === undefined ? "ret = callback({{args}}, nodeback); break;\n" : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
	                            }
	                            return ret.replace("{{args}}", args).replace(", ", comma);
	                        }
	
	                        function generateArgumentSwitchCase() {
	                            var ret = "";
	                            for (var i = 0; i < argumentOrder.length; ++i) {
	                                ret += "case " + argumentOrder[i] + ":" + generateCallForArgumentCount(argumentOrder[i]);
	                            }
	
	                            ret += "                                                             \n\
	        default:                                                             \n\
	            var args = new Array(len + 1);                                   \n\
	            var i = 0;                                                       \n\
	            for (var i = 0; i < len; ++i) {                                  \n\
	               args[i] = arguments[i];                                       \n\
	            }                                                                \n\
	            args[i] = nodeback;                                              \n\
	            [CodeForCall]                                                    \n\
	            break;                                                           \n\
	        ".replace("[CodeForCall]", shouldProxyThis ? "ret = callback.apply(this, args);\n" : "ret = callback.apply(receiver, args);\n");
	                            return ret;
	                        }
	
	                        var getFunctionCode = typeof callback === "string" ? "this != null ? this['" + callback + "'] : fn" : "fn";
	                        var body = "'use strict';                                                \n\
	        var ret = function (Parameters) {                                    \n\
	            'use strict';                                                    \n\
	            var len = arguments.length;                                      \n\
	            var promise = new Promise(INTERNAL);                             \n\
	            promise._captureStackTrace();                                    \n\
	            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
	            var ret;                                                         \n\
	            var callback = tryCatch([GetFunctionCode]);                      \n\
	            switch(len) {                                                    \n\
	                [CodeForSwitchCase]                                          \n\
	            }                                                                \n\
	            if (ret === errorObj) {                                          \n\
	                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
	            }                                                                \n\
	            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
	            return promise;                                                  \n\
	        };                                                                   \n\
	        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
	        return ret;                                                          \n\
	    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase()).replace("[GetFunctionCode]", getFunctionCode);
	                        body = body.replace("Parameters", parameterDeclaration(newParameterCount));
	                        return new Function("Promise", "fn", "receiver", "withAppended", "maybeWrapAsError", "nodebackForPromise", "tryCatch", "errorObj", "notEnumerableProp", "INTERNAL", body)(Promise, fn, receiver, withAppended, maybeWrapAsError, nodebackForPromise, util.tryCatch, util.errorObj, util.notEnumerableProp, INTERNAL);
	                    };
	                }
	
	                function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
	                    var defaultThis = function () {
	                        return this;
	                    }();
	                    var method = callback;
	                    if (typeof method === "string") {
	                        callback = fn;
	                    }
	                    function promisified() {
	                        var _receiver = receiver;
	                        if (receiver === THIS) _receiver = this;
	                        var promise = new Promise(INTERNAL);
	                        promise._captureStackTrace();
	                        var cb = typeof method === "string" && this !== defaultThis ? this[method] : callback;
	                        var fn = nodebackForPromise(promise, multiArgs);
	                        try {
	                            cb.apply(_receiver, withAppended(arguments, fn));
	                        } catch (e) {
	                            promise._rejectCallback(maybeWrapAsError(e), true, true);
	                        }
	                        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
	                        return promise;
	                    }
	                    util.notEnumerableProp(promisified, "__isPromisified__", true);
	                    return promisified;
	                }
	
	                var makeNodePromisified = canEvaluate ? makeNodePromisifiedEval : makeNodePromisifiedClosure;
	
	                function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
	                    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
	                    var methods = promisifiableMethods(obj, suffix, suffixRegexp, filter);
	
	                    for (var i = 0, len = methods.length; i < len; i += 2) {
	                        var key = methods[i];
	                        var fn = methods[i + 1];
	                        var promisifiedKey = key + suffix;
	                        if (promisifier === makeNodePromisified) {
	                            obj[promisifiedKey] = makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
	                        } else {
	                            var promisified = promisifier(fn, function () {
	                                return makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
	                            });
	                            util.notEnumerableProp(promisified, "__isPromisified__", true);
	                            obj[promisifiedKey] = promisified;
	                        }
	                    }
	                    util.toFastProperties(obj);
	                    return obj;
	                }
	
	                function promisify(callback, receiver, multiArgs) {
	                    return makeNodePromisified(callback, receiver, undefined, callback, null, multiArgs);
	                }
	
	                Promise.promisify = function (fn, options) {
	                    if (typeof fn !== "function") {
	                        throw new TypeError("expecting a function but got " + util.classString(fn));
	                    }
	                    if (isPromisified(fn)) {
	                        return fn;
	                    }
	                    options = Object(options);
	                    var receiver = options.context === undefined ? THIS : options.context;
	                    var multiArgs = !!options.multiArgs;
	                    var ret = promisify(fn, receiver, multiArgs);
	                    util.copyDescriptors(fn, ret, propsFilter);
	                    return ret;
	                };
	
	                Promise.promisifyAll = function (target, options) {
	                    if (typeof target !== "function" && (typeof target === "undefined" ? "undefined" : _typeof(target)) !== "object") {
	                        throw new TypeError("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                    options = Object(options);
	                    var multiArgs = !!options.multiArgs;
	                    var suffix = options.suffix;
	                    if (typeof suffix !== "string") suffix = defaultSuffix;
	                    var filter = options.filter;
	                    if (typeof filter !== "function") filter = defaultFilter;
	                    var promisifier = options.promisifier;
	                    if (typeof promisifier !== "function") promisifier = makeNodePromisified;
	
	                    if (!util.isIdentifier(suffix)) {
	                        throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	
	                    var keys = util.inheritedDataKeys(target);
	                    for (var i = 0; i < keys.length; ++i) {
	                        var value = target[keys[i]];
	                        if (keys[i] !== "constructor" && util.isClass(value)) {
	                            promisifyAll(value.prototype, suffix, filter, promisifier, multiArgs);
	                            promisifyAll(value, suffix, filter, promisifier, multiArgs);
	                        }
	                    }
	
	                    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
	                };
	            };
	        }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, PromiseArray, tryConvertToPromise, apiRejection) {
	                var util = _dereq_("./util");
	                var isObject = util.isObject;
	                var es5 = _dereq_("./es5");
	                var Es6Map;
	                if (typeof Map === "function") Es6Map = Map;
	
	                var mapToEntries = function () {
	                    var index = 0;
	                    var size = 0;
	
	                    function extractEntry(value, key) {
	                        this[index] = value;
	                        this[index + size] = key;
	                        index++;
	                    }
	
	                    return function mapToEntries(map) {
	                        size = map.size;
	                        index = 0;
	                        var ret = new Array(map.size * 2);
	                        map.forEach(extractEntry, ret);
	                        return ret;
	                    };
	                }();
	
	                var entriesToMap = function entriesToMap(entries) {
	                    var ret = new Es6Map();
	                    var length = entries.length / 2 | 0;
	                    for (var i = 0; i < length; ++i) {
	                        var key = entries[length + i];
	                        var value = entries[i];
	                        ret.set(key, value);
	                    }
	                    return ret;
	                };
	
	                function PropertiesPromiseArray(obj) {
	                    var isMap = false;
	                    var entries;
	                    if (Es6Map !== undefined && obj instanceof Es6Map) {
	                        entries = mapToEntries(obj);
	                        isMap = true;
	                    } else {
	                        var keys = es5.keys(obj);
	                        var len = keys.length;
	                        entries = new Array(len * 2);
	                        for (var i = 0; i < len; ++i) {
	                            var key = keys[i];
	                            entries[i] = obj[key];
	                            entries[i + len] = key;
	                        }
	                    }
	                    this.constructor$(entries);
	                    this._isMap = isMap;
	                    this._init$(undefined, -3);
	                }
	                util.inherits(PropertiesPromiseArray, PromiseArray);
	
	                PropertiesPromiseArray.prototype._init = function () {};
	
	                PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
	                    this._values[index] = value;
	                    var totalResolved = ++this._totalResolved;
	                    if (totalResolved >= this._length) {
	                        var val;
	                        if (this._isMap) {
	                            val = entriesToMap(this._values);
	                        } else {
	                            val = {};
	                            var keyOffset = this.length();
	                            for (var i = 0, len = this.length(); i < len; ++i) {
	                                val[this._values[i + keyOffset]] = this._values[i];
	                            }
	                        }
	                        this._resolve(val);
	                        return true;
	                    }
	                    return false;
	                };
	
	                PropertiesPromiseArray.prototype.shouldCopyValues = function () {
	                    return false;
	                };
	
	                PropertiesPromiseArray.prototype.getActualLength = function (len) {
	                    return len >> 1;
	                };
	
	                function props(promises) {
	                    var ret;
	                    var castValue = tryConvertToPromise(promises);
	
	                    if (!isObject(castValue)) {
	                        return apiRejection("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
	                    } else if (castValue instanceof Promise) {
	                        ret = castValue._then(Promise.props, undefined, undefined, undefined, undefined);
	                    } else {
	                        ret = new PropertiesPromiseArray(castValue).promise();
	                    }
	
	                    if (castValue instanceof Promise) {
	                        ret._propagateFrom(castValue, 2);
	                    }
	                    return ret;
	                }
	
	                Promise.prototype.props = function () {
	                    return props(this);
	                };
	
	                Promise.props = function (promises) {
	                    return props(promises);
	                };
	            };
	        }, { "./es5": 13, "./util": 36 }], 26: [function (_dereq_, module, exports) {
	            "use strict";
	
	            function arrayMove(src, srcIndex, dst, dstIndex, len) {
	                for (var j = 0; j < len; ++j) {
	                    dst[j + dstIndex] = src[j + srcIndex];
	                    src[j + srcIndex] = void 0;
	                }
	            }
	
	            function Queue(capacity) {
	                this._capacity = capacity;
	                this._length = 0;
	                this._front = 0;
	            }
	
	            Queue.prototype._willBeOverCapacity = function (size) {
	                return this._capacity < size;
	            };
	
	            Queue.prototype._pushOne = function (arg) {
	                var length = this.length();
	                this._checkCapacity(length + 1);
	                var i = this._front + length & this._capacity - 1;
	                this[i] = arg;
	                this._length = length + 1;
	            };
	
	            Queue.prototype._unshiftOne = function (value) {
	                var capacity = this._capacity;
	                this._checkCapacity(this.length() + 1);
	                var front = this._front;
	                var i = (front - 1 & capacity - 1 ^ capacity) - capacity;
	                this[i] = value;
	                this._front = i;
	                this._length = this.length() + 1;
	            };
	
	            Queue.prototype.unshift = function (fn, receiver, arg) {
	                this._unshiftOne(arg);
	                this._unshiftOne(receiver);
	                this._unshiftOne(fn);
	            };
	
	            Queue.prototype.push = function (fn, receiver, arg) {
	                var length = this.length() + 3;
	                if (this._willBeOverCapacity(length)) {
	                    this._pushOne(fn);
	                    this._pushOne(receiver);
	                    this._pushOne(arg);
	                    return;
	                }
	                var j = this._front + length - 3;
	                this._checkCapacity(length);
	                var wrapMask = this._capacity - 1;
	                this[j + 0 & wrapMask] = fn;
	                this[j + 1 & wrapMask] = receiver;
	                this[j + 2 & wrapMask] = arg;
	                this._length = length;
	            };
	
	            Queue.prototype.shift = function () {
	                var front = this._front,
	                    ret = this[front];
	
	                this[front] = undefined;
	                this._front = front + 1 & this._capacity - 1;
	                this._length--;
	                return ret;
	            };
	
	            Queue.prototype.length = function () {
	                return this._length;
	            };
	
	            Queue.prototype._checkCapacity = function (size) {
	                if (this._capacity < size) {
	                    this._resizeTo(this._capacity << 1);
	                }
	            };
	
	            Queue.prototype._resizeTo = function (capacity) {
	                var oldCapacity = this._capacity;
	                this._capacity = capacity;
	                var front = this._front;
	                var length = this._length;
	                var moveItemsCount = front + length & oldCapacity - 1;
	                arrayMove(this, 0, this, oldCapacity, moveItemsCount);
	            };
	
	            module.exports = Queue;
	        }, {}], 27: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL, tryConvertToPromise, apiRejection) {
	                var util = _dereq_("./util");
	
	                var raceLater = function raceLater(promise) {
	                    return promise.then(function (array) {
	                        return race(array, promise);
	                    });
	                };
	
	                function race(promises, parent) {
	                    var maybePromise = tryConvertToPromise(promises);
	
	                    if (maybePromise instanceof Promise) {
	                        return raceLater(maybePromise);
	                    } else {
	                        promises = util.asArray(promises);
	                        if (promises === null) return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
	                    }
	
	                    var ret = new Promise(INTERNAL);
	                    if (parent !== undefined) {
	                        ret._propagateFrom(parent, 3);
	                    }
	                    var fulfill = ret._fulfill;
	                    var reject = ret._reject;
	                    for (var i = 0, len = promises.length; i < len; ++i) {
	                        var val = promises[i];
	
	                        if (val === undefined && !(i in promises)) {
	                            continue;
	                        }
	
	                        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
	                    }
	                    return ret;
	                }
	
	                Promise.race = function (promises) {
	                    return race(promises, undefined);
	                };
	
	                Promise.prototype.race = function () {
	                    return race(this, undefined);
	                };
	            };
	        }, { "./util": 36 }], 28: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug) {
	                var getDomain = Promise._getDomain;
	                var util = _dereq_("./util");
	                var tryCatch = util.tryCatch;
	
	                function ReductionPromiseArray(promises, fn, initialValue, _each) {
	                    this.constructor$(promises);
	                    var domain = getDomain();
	                    this._fn = domain === null ? fn : util.domainBind(domain, fn);
	                    if (initialValue !== undefined) {
	                        initialValue = Promise.resolve(initialValue);
	                        initialValue._attachCancellationCallback(this);
	                    }
	                    this._initialValue = initialValue;
	                    this._currentCancellable = null;
	                    if (_each === INTERNAL) {
	                        this._eachValues = Array(this._length);
	                    } else if (_each === 0) {
	                        this._eachValues = null;
	                    } else {
	                        this._eachValues = undefined;
	                    }
	                    this._promise._captureStackTrace();
	                    this._init$(undefined, -5);
	                }
	                util.inherits(ReductionPromiseArray, PromiseArray);
	
	                ReductionPromiseArray.prototype._gotAccum = function (accum) {
	                    if (this._eachValues !== undefined && this._eachValues !== null && accum !== INTERNAL) {
	                        this._eachValues.push(accum);
	                    }
	                };
	
	                ReductionPromiseArray.prototype._eachComplete = function (value) {
	                    if (this._eachValues !== null) {
	                        this._eachValues.push(value);
	                    }
	                    return this._eachValues;
	                };
	
	                ReductionPromiseArray.prototype._init = function () {};
	
	                ReductionPromiseArray.prototype._resolveEmptyArray = function () {
	                    this._resolve(this._eachValues !== undefined ? this._eachValues : this._initialValue);
	                };
	
	                ReductionPromiseArray.prototype.shouldCopyValues = function () {
	                    return false;
	                };
	
	                ReductionPromiseArray.prototype._resolve = function (value) {
	                    this._promise._resolveCallback(value);
	                    this._values = null;
	                };
	
	                ReductionPromiseArray.prototype._resultCancelled = function (sender) {
	                    if (sender === this._initialValue) return this._cancel();
	                    if (this._isResolved()) return;
	                    this._resultCancelled$();
	                    if (this._currentCancellable instanceof Promise) {
	                        this._currentCancellable.cancel();
	                    }
	                    if (this._initialValue instanceof Promise) {
	                        this._initialValue.cancel();
	                    }
	                };
	
	                ReductionPromiseArray.prototype._iterate = function (values) {
	                    this._values = values;
	                    var value;
	                    var i;
	                    var length = values.length;
	                    if (this._initialValue !== undefined) {
	                        value = this._initialValue;
	                        i = 0;
	                    } else {
	                        value = Promise.resolve(values[0]);
	                        i = 1;
	                    }
	
	                    this._currentCancellable = value;
	
	                    if (!value.isRejected()) {
	                        for (; i < length; ++i) {
	                            var ctx = {
	                                accum: null,
	                                value: values[i],
	                                index: i,
	                                length: length,
	                                array: this
	                            };
	                            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
	                        }
	                    }
	
	                    if (this._eachValues !== undefined) {
	                        value = value._then(this._eachComplete, undefined, undefined, this, undefined);
	                    }
	                    value._then(completed, completed, undefined, value, this);
	                };
	
	                Promise.prototype.reduce = function (fn, initialValue) {
	                    return reduce(this, fn, initialValue, null);
	                };
	
	                Promise.reduce = function (promises, fn, initialValue, _each) {
	                    return reduce(promises, fn, initialValue, _each);
	                };
	
	                function completed(valueOrReason, array) {
	                    if (this.isFulfilled()) {
	                        array._resolve(valueOrReason);
	                    } else {
	                        array._reject(valueOrReason);
	                    }
	                }
	
	                function reduce(promises, fn, initialValue, _each) {
	                    if (typeof fn !== "function") {
	                        return apiRejection("expecting a function but got " + util.classString(fn));
	                    }
	                    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
	                    return array.promise();
	                }
	
	                function gotAccum(accum) {
	                    this.accum = accum;
	                    this.array._gotAccum(accum);
	                    var value = tryConvertToPromise(this.value, this.array._promise);
	                    if (value instanceof Promise) {
	                        this.array._currentCancellable = value;
	                        return value._then(gotValue, undefined, undefined, this, undefined);
	                    } else {
	                        return gotValue.call(this, value);
	                    }
	                }
	
	                function gotValue(value) {
	                    var array = this.array;
	                    var promise = array._promise;
	                    var fn = tryCatch(array._fn);
	                    promise._pushContext();
	                    var ret;
	                    if (array._eachValues !== undefined) {
	                        ret = fn.call(promise._boundValue(), value, this.index, this.length);
	                    } else {
	                        ret = fn.call(promise._boundValue(), this.accum, value, this.index, this.length);
	                    }
	                    if (ret instanceof Promise) {
	                        array._currentCancellable = ret;
	                    }
	                    var promiseCreated = promise._popContext();
	                    debug.checkForgottenReturns(ret, promiseCreated, array._eachValues !== undefined ? "Promise.each" : "Promise.reduce", promise);
	                    return ret;
	                }
	            };
	        }, { "./util": 36 }], 29: [function (_dereq_, module, exports) {
	            "use strict";
	
	            var util = _dereq_("./util");
	            var schedule;
	            var noAsyncScheduler = function noAsyncScheduler() {
	                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
	            };
	            var NativePromise = util.getNativePromise();
	            if (util.isNode && typeof MutationObserver === "undefined") {
	                var GlobalSetImmediate = global.setImmediate;
	                var ProcessNextTick = process.nextTick;
	                schedule = util.isRecentNode ? function (fn) {
	                    GlobalSetImmediate.call(global, fn);
	                } : function (fn) {
	                    ProcessNextTick.call(process, fn);
	                };
	            } else if (typeof NativePromise === "function" && typeof NativePromise.resolve === "function") {
	                var nativePromise = NativePromise.resolve();
	                schedule = function schedule(fn) {
	                    nativePromise.then(fn);
	                };
	            } else if (typeof MutationObserver !== "undefined" && !(typeof window !== "undefined" && window.navigator && (window.navigator.standalone || window.cordova))) {
	                schedule = function () {
	                    var div = document.createElement("div");
	                    var opts = { attributes: true };
	                    var toggleScheduled = false;
	                    var div2 = document.createElement("div");
	                    var o2 = new MutationObserver(function () {
	                        div.classList.toggle("foo");
	                        toggleScheduled = false;
	                    });
	                    o2.observe(div2, opts);
	
	                    var scheduleToggle = function scheduleToggle() {
	                        if (toggleScheduled) return;
	                        toggleScheduled = true;
	                        div2.classList.toggle("foo");
	                    };
	
	                    return function schedule(fn) {
	                        var o = new MutationObserver(function () {
	                            o.disconnect();
	                            fn();
	                        });
	                        o.observe(div, opts);
	                        scheduleToggle();
	                    };
	                }();
	            } else if (typeof setImmediate !== "undefined") {
	                schedule = function schedule(fn) {
	                    setImmediate(fn);
	                };
	            } else if (typeof setTimeout !== "undefined") {
	                schedule = function schedule(fn) {
	                    setTimeout(fn, 0);
	                };
	            } else {
	                schedule = noAsyncScheduler;
	            }
	            module.exports = schedule;
	        }, { "./util": 36 }], 30: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, PromiseArray, debug) {
	                var PromiseInspection = Promise.PromiseInspection;
	                var util = _dereq_("./util");
	
	                function SettledPromiseArray(values) {
	                    this.constructor$(values);
	                }
	                util.inherits(SettledPromiseArray, PromiseArray);
	
	                SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
	                    this._values[index] = inspection;
	                    var totalResolved = ++this._totalResolved;
	                    if (totalResolved >= this._length) {
	                        this._resolve(this._values);
	                        return true;
	                    }
	                    return false;
	                };
	
	                SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
	                    var ret = new PromiseInspection();
	                    ret._bitField = 33554432;
	                    ret._settledValueField = value;
	                    return this._promiseResolved(index, ret);
	                };
	                SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
	                    var ret = new PromiseInspection();
	                    ret._bitField = 16777216;
	                    ret._settledValueField = reason;
	                    return this._promiseResolved(index, ret);
	                };
	
	                Promise.settle = function (promises) {
	                    debug.deprecated(".settle()", ".reflect()");
	                    return new SettledPromiseArray(promises).promise();
	                };
	
	                Promise.prototype.settle = function () {
	                    return Promise.settle(this);
	                };
	            };
	        }, { "./util": 36 }], 31: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, PromiseArray, apiRejection) {
	                var util = _dereq_("./util");
	                var RangeError = _dereq_("./errors").RangeError;
	                var AggregateError = _dereq_("./errors").AggregateError;
	                var isArray = util.isArray;
	                var CANCELLATION = {};
	
	                function SomePromiseArray(values) {
	                    this.constructor$(values);
	                    this._howMany = 0;
	                    this._unwrap = false;
	                    this._initialized = false;
	                }
	                util.inherits(SomePromiseArray, PromiseArray);
	
	                SomePromiseArray.prototype._init = function () {
	                    if (!this._initialized) {
	                        return;
	                    }
	                    if (this._howMany === 0) {
	                        this._resolve([]);
	                        return;
	                    }
	                    this._init$(undefined, -5);
	                    var isArrayResolved = isArray(this._values);
	                    if (!this._isResolved() && isArrayResolved && this._howMany > this._canPossiblyFulfill()) {
	                        this._reject(this._getRangeError(this.length()));
	                    }
	                };
	
	                SomePromiseArray.prototype.init = function () {
	                    this._initialized = true;
	                    this._init();
	                };
	
	                SomePromiseArray.prototype.setUnwrap = function () {
	                    this._unwrap = true;
	                };
	
	                SomePromiseArray.prototype.howMany = function () {
	                    return this._howMany;
	                };
	
	                SomePromiseArray.prototype.setHowMany = function (count) {
	                    this._howMany = count;
	                };
	
	                SomePromiseArray.prototype._promiseFulfilled = function (value) {
	                    this._addFulfilled(value);
	                    if (this._fulfilled() === this.howMany()) {
	                        this._values.length = this.howMany();
	                        if (this.howMany() === 1 && this._unwrap) {
	                            this._resolve(this._values[0]);
	                        } else {
	                            this._resolve(this._values);
	                        }
	                        return true;
	                    }
	                    return false;
	                };
	                SomePromiseArray.prototype._promiseRejected = function (reason) {
	                    this._addRejected(reason);
	                    return this._checkOutcome();
	                };
	
	                SomePromiseArray.prototype._promiseCancelled = function () {
	                    if (this._values instanceof Promise || this._values == null) {
	                        return this._cancel();
	                    }
	                    this._addRejected(CANCELLATION);
	                    return this._checkOutcome();
	                };
	
	                SomePromiseArray.prototype._checkOutcome = function () {
	                    if (this.howMany() > this._canPossiblyFulfill()) {
	                        var e = new AggregateError();
	                        for (var i = this.length(); i < this._values.length; ++i) {
	                            if (this._values[i] !== CANCELLATION) {
	                                e.push(this._values[i]);
	                            }
	                        }
	                        if (e.length > 0) {
	                            this._reject(e);
	                        } else {
	                            this._cancel();
	                        }
	                        return true;
	                    }
	                    return false;
	                };
	
	                SomePromiseArray.prototype._fulfilled = function () {
	                    return this._totalResolved;
	                };
	
	                SomePromiseArray.prototype._rejected = function () {
	                    return this._values.length - this.length();
	                };
	
	                SomePromiseArray.prototype._addRejected = function (reason) {
	                    this._values.push(reason);
	                };
	
	                SomePromiseArray.prototype._addFulfilled = function (value) {
	                    this._values[this._totalResolved++] = value;
	                };
	
	                SomePromiseArray.prototype._canPossiblyFulfill = function () {
	                    return this.length() - this._rejected();
	                };
	
	                SomePromiseArray.prototype._getRangeError = function (count) {
	                    var message = "Input array must contain at least " + this._howMany + " items but contains only " + count + " items";
	                    return new RangeError(message);
	                };
	
	                SomePromiseArray.prototype._resolveEmptyArray = function () {
	                    this._reject(this._getRangeError(0));
	                };
	
	                function some(promises, howMany) {
	                    if ((howMany | 0) !== howMany || howMany < 0) {
	                        return apiRejection("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                    var ret = new SomePromiseArray(promises);
	                    var promise = ret.promise();
	                    ret.setHowMany(howMany);
	                    ret.init();
	                    return promise;
	                }
	
	                Promise.some = function (promises, howMany) {
	                    return some(promises, howMany);
	                };
	
	                Promise.prototype.some = function (howMany) {
	                    return some(this, howMany);
	                };
	
	                Promise._SomePromiseArray = SomePromiseArray;
	            };
	        }, { "./errors": 12, "./util": 36 }], 32: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise) {
	                function PromiseInspection(promise) {
	                    if (promise !== undefined) {
	                        promise = promise._target();
	                        this._bitField = promise._bitField;
	                        this._settledValueField = promise._isFateSealed() ? promise._settledValue() : undefined;
	                    } else {
	                        this._bitField = 0;
	                        this._settledValueField = undefined;
	                    }
	                }
	
	                PromiseInspection.prototype._settledValue = function () {
	                    return this._settledValueField;
	                };
	
	                var value = PromiseInspection.prototype.value = function () {
	                    if (!this.isFulfilled()) {
	                        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                    return this._settledValue();
	                };
	
	                var reason = PromiseInspection.prototype.error = PromiseInspection.prototype.reason = function () {
	                    if (!this.isRejected()) {
	                        throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
	                    }
	                    return this._settledValue();
	                };
	
	                var isFulfilled = PromiseInspection.prototype.isFulfilled = function () {
	                    return (this._bitField & 33554432) !== 0;
	                };
	
	                var isRejected = PromiseInspection.prototype.isRejected = function () {
	                    return (this._bitField & 16777216) !== 0;
	                };
	
	                var isPending = PromiseInspection.prototype.isPending = function () {
	                    return (this._bitField & 50397184) === 0;
	                };
	
	                var isResolved = PromiseInspection.prototype.isResolved = function () {
	                    return (this._bitField & 50331648) !== 0;
	                };
	
	                PromiseInspection.prototype.isCancelled = function () {
	                    return (this._bitField & 8454144) !== 0;
	                };
	
	                Promise.prototype.__isCancelled = function () {
	                    return (this._bitField & 65536) === 65536;
	                };
	
	                Promise.prototype._isCancelled = function () {
	                    return this._target().__isCancelled();
	                };
	
	                Promise.prototype.isCancelled = function () {
	                    return (this._target()._bitField & 8454144) !== 0;
	                };
	
	                Promise.prototype.isPending = function () {
	                    return isPending.call(this._target());
	                };
	
	                Promise.prototype.isRejected = function () {
	                    return isRejected.call(this._target());
	                };
	
	                Promise.prototype.isFulfilled = function () {
	                    return isFulfilled.call(this._target());
	                };
	
	                Promise.prototype.isResolved = function () {
	                    return isResolved.call(this._target());
	                };
	
	                Promise.prototype.value = function () {
	                    return value.call(this._target());
	                };
	
	                Promise.prototype.reason = function () {
	                    var target = this._target();
	                    target._unsetRejectionIsUnhandled();
	                    return reason.call(target);
	                };
	
	                Promise.prototype._value = function () {
	                    return this._settledValue();
	                };
	
	                Promise.prototype._reason = function () {
	                    this._unsetRejectionIsUnhandled();
	                    return this._settledValue();
	                };
	
	                Promise.PromiseInspection = PromiseInspection;
	            };
	        }, {}], 33: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL) {
	                var util = _dereq_("./util");
	                var errorObj = util.errorObj;
	                var isObject = util.isObject;
	
	                function tryConvertToPromise(obj, context) {
	                    if (isObject(obj)) {
	                        if (obj instanceof Promise) return obj;
	                        var then = getThen(obj);
	                        if (then === errorObj) {
	                            if (context) context._pushContext();
	                            var ret = Promise.reject(then.e);
	                            if (context) context._popContext();
	                            return ret;
	                        } else if (typeof then === "function") {
	                            if (isAnyBluebirdPromise(obj)) {
	                                var ret = new Promise(INTERNAL);
	                                obj._then(ret._fulfill, ret._reject, undefined, ret, null);
	                                return ret;
	                            }
	                            return doThenable(obj, then, context);
	                        }
	                    }
	                    return obj;
	                }
	
	                function doGetThen(obj) {
	                    return obj.then;
	                }
	
	                function getThen(obj) {
	                    try {
	                        return doGetThen(obj);
	                    } catch (e) {
	                        errorObj.e = e;
	                        return errorObj;
	                    }
	                }
	
	                var hasProp = {}.hasOwnProperty;
	                function isAnyBluebirdPromise(obj) {
	                    try {
	                        return hasProp.call(obj, "_promise0");
	                    } catch (e) {
	                        return false;
	                    }
	                }
	
	                function doThenable(x, then, context) {
	                    var promise = new Promise(INTERNAL);
	                    var ret = promise;
	                    if (context) context._pushContext();
	                    promise._captureStackTrace();
	                    if (context) context._popContext();
	                    var synchronous = true;
	                    var result = util.tryCatch(then).call(x, resolve, reject);
	                    synchronous = false;
	
	                    if (promise && result === errorObj) {
	                        promise._rejectCallback(result.e, true, true);
	                        promise = null;
	                    }
	
	                    function resolve(value) {
	                        if (!promise) return;
	                        promise._resolveCallback(value);
	                        promise = null;
	                    }
	
	                    function reject(reason) {
	                        if (!promise) return;
	                        promise._rejectCallback(reason, synchronous, true);
	                        promise = null;
	                    }
	                    return ret;
	                }
	
	                return tryConvertToPromise;
	            };
	        }, { "./util": 36 }], 34: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, INTERNAL, debug) {
	                var util = _dereq_("./util");
	                var TimeoutError = Promise.TimeoutError;
	
	                function HandleWrapper(handle) {
	                    this.handle = handle;
	                }
	
	                HandleWrapper.prototype._resultCancelled = function () {
	                    clearTimeout(this.handle);
	                };
	
	                var afterValue = function afterValue(value) {
	                    return delay(+this).thenReturn(value);
	                };
	                var delay = Promise.delay = function (ms, value) {
	                    var ret;
	                    var handle;
	                    if (value !== undefined) {
	                        ret = Promise.resolve(value)._then(afterValue, null, null, ms, undefined);
	                        if (debug.cancellation() && value instanceof Promise) {
	                            ret._setOnCancel(value);
	                        }
	                    } else {
	                        ret = new Promise(INTERNAL);
	                        handle = setTimeout(function () {
	                            ret._fulfill();
	                        }, +ms);
	                        if (debug.cancellation()) {
	                            ret._setOnCancel(new HandleWrapper(handle));
	                        }
	                        ret._captureStackTrace();
	                    }
	                    ret._setAsyncGuaranteed();
	                    return ret;
	                };
	
	                Promise.prototype.delay = function (ms) {
	                    return delay(ms, this);
	                };
	
	                var afterTimeout = function afterTimeout(promise, message, parent) {
	                    var err;
	                    if (typeof message !== "string") {
	                        if (message instanceof Error) {
	                            err = message;
	                        } else {
	                            err = new TimeoutError("operation timed out");
	                        }
	                    } else {
	                        err = new TimeoutError(message);
	                    }
	                    util.markAsOriginatingFromRejection(err);
	                    promise._attachExtraTrace(err);
	                    promise._reject(err);
	
	                    if (parent != null) {
	                        parent.cancel();
	                    }
	                };
	
	                function successClear(value) {
	                    clearTimeout(this.handle);
	                    return value;
	                }
	
	                function failureClear(reason) {
	                    clearTimeout(this.handle);
	                    throw reason;
	                }
	
	                Promise.prototype.timeout = function (ms, message) {
	                    ms = +ms;
	                    var ret, parent;
	
	                    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
	                        if (ret.isPending()) {
	                            afterTimeout(ret, message, parent);
	                        }
	                    }, ms));
	
	                    if (debug.cancellation()) {
	                        parent = this.then();
	                        ret = parent._then(successClear, failureClear, undefined, handleWrapper, undefined);
	                        ret._setOnCancel(handleWrapper);
	                    } else {
	                        ret = this._then(successClear, failureClear, undefined, handleWrapper, undefined);
	                    }
	
	                    return ret;
	                };
	            };
	        }, { "./util": 36 }], 35: [function (_dereq_, module, exports) {
	            "use strict";
	
	            module.exports = function (Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug) {
	                var util = _dereq_("./util");
	                var TypeError = _dereq_("./errors").TypeError;
	                var inherits = _dereq_("./util").inherits;
	                var errorObj = util.errorObj;
	                var tryCatch = util.tryCatch;
	                var NULL = {};
	
	                function thrower(e) {
	                    setTimeout(function () {
	                        throw e;
	                    }, 0);
	                }
	
	                function castPreservingDisposable(thenable) {
	                    var maybePromise = tryConvertToPromise(thenable);
	                    if (maybePromise !== thenable && typeof thenable._isDisposable === "function" && typeof thenable._getDisposer === "function" && thenable._isDisposable()) {
	                        maybePromise._setDisposable(thenable._getDisposer());
	                    }
	                    return maybePromise;
	                }
	                function dispose(resources, inspection) {
	                    var i = 0;
	                    var len = resources.length;
	                    var ret = new Promise(INTERNAL);
	                    function iterator() {
	                        if (i >= len) return ret._fulfill();
	                        var maybePromise = castPreservingDisposable(resources[i++]);
	                        if (maybePromise instanceof Promise && maybePromise._isDisposable()) {
	                            try {
	                                maybePromise = tryConvertToPromise(maybePromise._getDisposer().tryDispose(inspection), resources.promise);
	                            } catch (e) {
	                                return thrower(e);
	                            }
	                            if (maybePromise instanceof Promise) {
	                                return maybePromise._then(iterator, thrower, null, null, null);
	                            }
	                        }
	                        iterator();
	                    }
	                    iterator();
	                    return ret;
	                }
	
	                function Disposer(data, promise, context) {
	                    this._data = data;
	                    this._promise = promise;
	                    this._context = context;
	                }
	
	                Disposer.prototype.data = function () {
	                    return this._data;
	                };
	
	                Disposer.prototype.promise = function () {
	                    return this._promise;
	                };
	
	                Disposer.prototype.resource = function () {
	                    if (this.promise().isFulfilled()) {
	                        return this.promise().value();
	                    }
	                    return NULL;
	                };
	
	                Disposer.prototype.tryDispose = function (inspection) {
	                    var resource = this.resource();
	                    var context = this._context;
	                    if (context !== undefined) context._pushContext();
	                    var ret = resource !== NULL ? this.doDispose(resource, inspection) : null;
	                    if (context !== undefined) context._popContext();
	                    this._promise._unsetDisposable();
	                    this._data = null;
	                    return ret;
	                };
	
	                Disposer.isDisposer = function (d) {
	                    return d != null && typeof d.resource === "function" && typeof d.tryDispose === "function";
	                };
	
	                function FunctionDisposer(fn, promise, context) {
	                    this.constructor$(fn, promise, context);
	                }
	                inherits(FunctionDisposer, Disposer);
	
	                FunctionDisposer.prototype.doDispose = function (resource, inspection) {
	                    var fn = this.data();
	                    return fn.call(resource, resource, inspection);
	                };
	
	                function maybeUnwrapDisposer(value) {
	                    if (Disposer.isDisposer(value)) {
	                        this.resources[this.index]._setDisposable(value);
	                        return value.promise();
	                    }
	                    return value;
	                }
	
	                function ResourceList(length) {
	                    this.length = length;
	                    this.promise = null;
	                    this[length - 1] = null;
	                }
	
	                ResourceList.prototype._resultCancelled = function () {
	                    var len = this.length;
	                    for (var i = 0; i < len; ++i) {
	                        var item = this[i];
	                        if (item instanceof Promise) {
	                            item.cancel();
	                        }
	                    }
	                };
	
	                Promise.using = function () {
	                    var len = arguments.length;
	                    if (len < 2) return apiRejection("you must pass at least 2 arguments to Promise.using");
	                    var fn = arguments[len - 1];
	                    if (typeof fn !== "function") {
	                        return apiRejection("expecting a function but got " + util.classString(fn));
	                    }
	                    var input;
	                    var spreadArgs = true;
	                    if (len === 2 && Array.isArray(arguments[0])) {
	                        input = arguments[0];
	                        len = input.length;
	                        spreadArgs = false;
	                    } else {
	                        input = arguments;
	                        len--;
	                    }
	                    var resources = new ResourceList(len);
	                    for (var i = 0; i < len; ++i) {
	                        var resource = input[i];
	                        if (Disposer.isDisposer(resource)) {
	                            var disposer = resource;
	                            resource = resource.promise();
	                            resource._setDisposable(disposer);
	                        } else {
	                            var maybePromise = tryConvertToPromise(resource);
	                            if (maybePromise instanceof Promise) {
	                                resource = maybePromise._then(maybeUnwrapDisposer, null, null, {
	                                    resources: resources,
	                                    index: i
	                                }, undefined);
	                            }
	                        }
	                        resources[i] = resource;
	                    }
	
	                    var reflectedResources = new Array(resources.length);
	                    for (var i = 0; i < reflectedResources.length; ++i) {
	                        reflectedResources[i] = Promise.resolve(resources[i]).reflect();
	                    }
	
	                    var resultPromise = Promise.all(reflectedResources).then(function (inspections) {
	                        for (var i = 0; i < inspections.length; ++i) {
	                            var inspection = inspections[i];
	                            if (inspection.isRejected()) {
	                                errorObj.e = inspection.error();
	                                return errorObj;
	                            } else if (!inspection.isFulfilled()) {
	                                resultPromise.cancel();
	                                return;
	                            }
	                            inspections[i] = inspection.value();
	                        }
	                        promise._pushContext();
	
	                        fn = tryCatch(fn);
	                        var ret = spreadArgs ? fn.apply(undefined, inspections) : fn(inspections);
	                        var promiseCreated = promise._popContext();
	                        debug.checkForgottenReturns(ret, promiseCreated, "Promise.using", promise);
	                        return ret;
	                    });
	
	                    var promise = resultPromise.lastly(function () {
	                        var inspection = new Promise.PromiseInspection(resultPromise);
	                        return dispose(resources, inspection);
	                    });
	                    resources.promise = promise;
	                    promise._setOnCancel(resources);
	                    return promise;
	                };
	
	                Promise.prototype._setDisposable = function (disposer) {
	                    this._bitField = this._bitField | 131072;
	                    this._disposer = disposer;
	                };
	
	                Promise.prototype._isDisposable = function () {
	                    return (this._bitField & 131072) > 0;
	                };
	
	                Promise.prototype._getDisposer = function () {
	                    return this._disposer;
	                };
	
	                Promise.prototype._unsetDisposable = function () {
	                    this._bitField = this._bitField & ~131072;
	                    this._disposer = undefined;
	                };
	
	                Promise.prototype.disposer = function (fn) {
	                    if (typeof fn === "function") {
	                        return new FunctionDisposer(fn, this, createContext());
	                    }
	                    throw new TypeError();
	                };
	            };
	        }, { "./errors": 12, "./util": 36 }], 36: [function (_dereq_, module, exports) {
	            "use strict";
	
	            var es5 = _dereq_("./es5");
	            var canEvaluate = typeof navigator == "undefined";
	
	            var errorObj = { e: {} };
	            var tryCatchTarget;
	            var globalObject = typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : this !== undefined ? this : null;
	
	            function tryCatcher() {
	                try {
	                    var target = tryCatchTarget;
	                    tryCatchTarget = null;
	                    return target.apply(this, arguments);
	                } catch (e) {
	                    errorObj.e = e;
	                    return errorObj;
	                }
	            }
	            function tryCatch(fn) {
	                tryCatchTarget = fn;
	                return tryCatcher;
	            }
	
	            var inherits = function inherits(Child, Parent) {
	                var hasProp = {}.hasOwnProperty;
	
	                function T() {
	                    this.constructor = Child;
	                    this.constructor$ = Parent;
	                    for (var propertyName in Parent.prototype) {
	                        if (hasProp.call(Parent.prototype, propertyName) && propertyName.charAt(propertyName.length - 1) !== "$") {
	                            this[propertyName + "$"] = Parent.prototype[propertyName];
	                        }
	                    }
	                }
	                T.prototype = Parent.prototype;
	                Child.prototype = new T();
	                return Child.prototype;
	            };
	
	            function isPrimitive(val) {
	                return val == null || val === true || val === false || typeof val === "string" || typeof val === "number";
	            }
	
	            function isObject(value) {
	                return typeof value === "function" || (typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && value !== null;
	            }
	
	            function maybeWrapAsError(maybeError) {
	                if (!isPrimitive(maybeError)) return maybeError;
	
	                return new Error(safeToString(maybeError));
	            }
	
	            function withAppended(target, appendee) {
	                var len = target.length;
	                var ret = new Array(len + 1);
	                var i;
	                for (i = 0; i < len; ++i) {
	                    ret[i] = target[i];
	                }
	                ret[i] = appendee;
	                return ret;
	            }
	
	            function getDataPropertyOrDefault(obj, key, defaultValue) {
	                if (es5.isES5) {
	                    var desc = Object.getOwnPropertyDescriptor(obj, key);
	
	                    if (desc != null) {
	                        return desc.get == null && desc.set == null ? desc.value : defaultValue;
	                    }
	                } else {
	                    return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
	                }
	            }
	
	            function notEnumerableProp(obj, name, value) {
	                if (isPrimitive(obj)) return obj;
	                var descriptor = {
	                    value: value,
	                    configurable: true,
	                    enumerable: false,
	                    writable: true
	                };
	                es5.defineProperty(obj, name, descriptor);
	                return obj;
	            }
	
	            function thrower(r) {
	                throw r;
	            }
	
	            var inheritedDataKeys = function () {
	                var excludedPrototypes = [Array.prototype, Object.prototype, Function.prototype];
	
	                var isExcludedProto = function isExcludedProto(val) {
	                    for (var i = 0; i < excludedPrototypes.length; ++i) {
	                        if (excludedPrototypes[i] === val) {
	                            return true;
	                        }
	                    }
	                    return false;
	                };
	
	                if (es5.isES5) {
	                    var getKeys = Object.getOwnPropertyNames;
	                    return function (obj) {
	                        var ret = [];
	                        var visitedKeys = Object.create(null);
	                        while (obj != null && !isExcludedProto(obj)) {
	                            var keys;
	                            try {
	                                keys = getKeys(obj);
	                            } catch (e) {
	                                return ret;
	                            }
	                            for (var i = 0; i < keys.length; ++i) {
	                                var key = keys[i];
	                                if (visitedKeys[key]) continue;
	                                visitedKeys[key] = true;
	                                var desc = Object.getOwnPropertyDescriptor(obj, key);
	                                if (desc != null && desc.get == null && desc.set == null) {
	                                    ret.push(key);
	                                }
	                            }
	                            obj = es5.getPrototypeOf(obj);
	                        }
	                        return ret;
	                    };
	                } else {
	                    var hasProp = {}.hasOwnProperty;
	                    return function (obj) {
	                        if (isExcludedProto(obj)) return [];
	                        var ret = [];
	
	                        /*jshint forin:false */
	                        enumeration: for (var key in obj) {
	                            if (hasProp.call(obj, key)) {
	                                ret.push(key);
	                            } else {
	                                for (var i = 0; i < excludedPrototypes.length; ++i) {
	                                    if (hasProp.call(excludedPrototypes[i], key)) {
	                                        continue enumeration;
	                                    }
	                                }
	                                ret.push(key);
	                            }
	                        }
	                        return ret;
	                    };
	                }
	            }();
	
	            var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
	            function isClass(fn) {
	                try {
	                    if (typeof fn === "function") {
	                        var keys = es5.names(fn.prototype);
	
	                        var hasMethods = es5.isES5 && keys.length > 1;
	                        var hasMethodsOtherThanConstructor = keys.length > 0 && !(keys.length === 1 && keys[0] === "constructor");
	                        var hasThisAssignmentAndStaticMethods = thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;
	
	                        if (hasMethods || hasMethodsOtherThanConstructor || hasThisAssignmentAndStaticMethods) {
	                            return true;
	                        }
	                    }
	                    return false;
	                } catch (e) {
	                    return false;
	                }
	            }
	
	            function toFastProperties(obj) {
	                /*jshint -W027,-W055,-W031*/
	                function FakeConstructor() {}
	                FakeConstructor.prototype = obj;
	                var l = 8;
	                while (l--) {
	                    new FakeConstructor();
	                }return obj;
	                eval(obj);
	            }
	
	            var rident = /^[a-z$_][a-z$_0-9]*$/i;
	            function isIdentifier(str) {
	                return rident.test(str);
	            }
	
	            function filledRange(count, prefix, suffix) {
	                var ret = new Array(count);
	                for (var i = 0; i < count; ++i) {
	                    ret[i] = prefix + i + suffix;
	                }
	                return ret;
	            }
	
	            function safeToString(obj) {
	                try {
	                    return obj + "";
	                } catch (e) {
	                    return "[no string representation]";
	                }
	            }
	
	            function isError(obj) {
	                return obj !== null && (typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object" && typeof obj.message === "string" && typeof obj.name === "string";
	            }
	
	            function markAsOriginatingFromRejection(e) {
	                try {
	                    notEnumerableProp(e, "isOperational", true);
	                } catch (ignore) {}
	            }
	
	            function originatesFromRejection(e) {
	                if (e == null) return false;
	                return e instanceof Error["__BluebirdErrorTypes__"].OperationalError || e["isOperational"] === true;
	            }
	
	            function canAttachTrace(obj) {
	                return isError(obj) && es5.propertyIsWritable(obj, "stack");
	            }
	
	            var ensureErrorObject = function () {
	                if (!("stack" in new Error())) {
	                    return function (value) {
	                        if (canAttachTrace(value)) return value;
	                        try {
	                            throw new Error(safeToString(value));
	                        } catch (err) {
	                            return err;
	                        }
	                    };
	                } else {
	                    return function (value) {
	                        if (canAttachTrace(value)) return value;
	                        return new Error(safeToString(value));
	                    };
	                }
	            }();
	
	            function classString(obj) {
	                return {}.toString.call(obj);
	            }
	
	            function copyDescriptors(from, to, filter) {
	                var keys = es5.names(from);
	                for (var i = 0; i < keys.length; ++i) {
	                    var key = keys[i];
	                    if (filter(key)) {
	                        try {
	                            es5.defineProperty(to, key, es5.getDescriptor(from, key));
	                        } catch (ignore) {}
	                    }
	                }
	            }
	
	            var asArray = function asArray(v) {
	                if (es5.isArray(v)) {
	                    return v;
	                }
	                return null;
	            };
	
	            if (typeof Symbol !== "undefined" && Symbol.iterator) {
	                var ArrayFrom = typeof Array.from === "function" ? function (v) {
	                    return Array.from(v);
	                } : function (v) {
	                    var ret = [];
	                    var it = v[Symbol.iterator]();
	                    var itResult;
	                    while (!(itResult = it.next()).done) {
	                        ret.push(itResult.value);
	                    }
	                    return ret;
	                };
	
	                asArray = function asArray(v) {
	                    if (es5.isArray(v)) {
	                        return v;
	                    } else if (v != null && typeof v[Symbol.iterator] === "function") {
	                        return ArrayFrom(v);
	                    }
	                    return null;
	                };
	            }
	
	            var isNode = typeof process !== "undefined" && classString(process).toLowerCase() === "[object process]";
	
	            function env(key, def) {
	                return isNode ? process.env[key] : def;
	            }
	
	            function getNativePromise() {
	                if (typeof Promise === "function") {
	                    try {
	                        var promise = new Promise(function () {});
	                        if ({}.toString.call(promise) === "[object Promise]") {
	                            return Promise;
	                        }
	                    } catch (e) {}
	                }
	            }
	
	            function domainBind(self, cb) {
	                return self.bind(cb);
	            }
	
	            var ret = {
	                isClass: isClass,
	                isIdentifier: isIdentifier,
	                inheritedDataKeys: inheritedDataKeys,
	                getDataPropertyOrDefault: getDataPropertyOrDefault,
	                thrower: thrower,
	                isArray: es5.isArray,
	                asArray: asArray,
	                notEnumerableProp: notEnumerableProp,
	                isPrimitive: isPrimitive,
	                isObject: isObject,
	                isError: isError,
	                canEvaluate: canEvaluate,
	                errorObj: errorObj,
	                tryCatch: tryCatch,
	                inherits: inherits,
	                withAppended: withAppended,
	                maybeWrapAsError: maybeWrapAsError,
	                toFastProperties: toFastProperties,
	                filledRange: filledRange,
	                toString: safeToString,
	                canAttachTrace: canAttachTrace,
	                ensureErrorObject: ensureErrorObject,
	                originatesFromRejection: originatesFromRejection,
	                markAsOriginatingFromRejection: markAsOriginatingFromRejection,
	                classString: classString,
	                copyDescriptors: copyDescriptors,
	                hasDevTools: typeof chrome !== "undefined" && chrome && typeof chrome.loadTimes === "function",
	                isNode: isNode,
	                env: env,
	                global: globalObject,
	                getNativePromise: getNativePromise,
	                domainBind: domainBind
	            };
	            ret.isRecentNode = ret.isNode && function () {
	                var version = process.versions.node.split(".").map(Number);
	                return version[0] === 0 && version[1] > 10 || version[0] > 0;
	            }();
	
	            if (ret.isNode) ret.toFastProperties(process);
	
	            try {
	                throw new Error();
	            } catch (e) {
	                ret.lastLineError = e;
	            }
	            module.exports = ret;
	        }, { "./es5": 13 }] }, {}, [4])(4);
	});;if (typeof window !== 'undefined' && window !== null) {
	    window.P = window.Promise;
	} else if (typeof self !== 'undefined' && self !== null) {
	    self.P = self.Promise;
	}
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(57), (function() { return this; }()), __webpack_require__(58).setImmediate))

/***/ }),
/* 57 */
/***/ (function(module, exports) {

	'use strict';
	
	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout() {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	})();
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e) {
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e) {
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while (len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) {
	    return [];
	};
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () {
	    return '/';
	};
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function () {
	    return 0;
	};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var apply = Function.prototype.apply;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function () {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function () {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout = exports.clearInterval = function (timeout) {
	  if (timeout) {
	    timeout.close();
	  }
	};
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function () {};
	Timeout.prototype.close = function () {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function (item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function (item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function (item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout) item._onTimeout();
	    }, msecs);
	  }
	};
	
	// setimmediate attaches itself to the global object
	__webpack_require__(59);
	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global, process) {"use strict";
	
	(function (global, undefined) {
	    "use strict";
	
	    if (global.setImmediate) {
	        return;
	    }
	
	    var nextHandle = 1; // Spec says greater than zero
	    var tasksByHandle = {};
	    var currentlyRunningATask = false;
	    var doc = global.document;
	    var registerImmediate;
	
	    function setImmediate(callback) {
	        // Callback can either be a function or a string
	        if (typeof callback !== "function") {
	            callback = new Function("" + callback);
	        }
	        // Copy function arguments
	        var args = new Array(arguments.length - 1);
	        for (var i = 0; i < args.length; i++) {
	            args[i] = arguments[i + 1];
	        }
	        // Store and register the task
	        var task = { callback: callback, args: args };
	        tasksByHandle[nextHandle] = task;
	        registerImmediate(nextHandle);
	        return nextHandle++;
	    }
	
	    function clearImmediate(handle) {
	        delete tasksByHandle[handle];
	    }
	
	    function run(task) {
	        var callback = task.callback;
	        var args = task.args;
	        switch (args.length) {
	            case 0:
	                callback();
	                break;
	            case 1:
	                callback(args[0]);
	                break;
	            case 2:
	                callback(args[0], args[1]);
	                break;
	            case 3:
	                callback(args[0], args[1], args[2]);
	                break;
	            default:
	                callback.apply(undefined, args);
	                break;
	        }
	    }
	
	    function runIfPresent(handle) {
	        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
	        // So if we're currently running a task, we'll need to delay this invocation.
	        if (currentlyRunningATask) {
	            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
	            // "too much recursion" error.
	            setTimeout(runIfPresent, 0, handle);
	        } else {
	            var task = tasksByHandle[handle];
	            if (task) {
	                currentlyRunningATask = true;
	                try {
	                    run(task);
	                } finally {
	                    clearImmediate(handle);
	                    currentlyRunningATask = false;
	                }
	            }
	        }
	    }
	
	    function installNextTickImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            process.nextTick(function () {
	                runIfPresent(handle);
	            });
	        };
	    }
	
	    function canUsePostMessage() {
	        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
	        // where `global.postMessage` means something completely different and can't be used for this purpose.
	        if (global.postMessage && !global.importScripts) {
	            var postMessageIsAsynchronous = true;
	            var oldOnMessage = global.onmessage;
	            global.onmessage = function () {
	                postMessageIsAsynchronous = false;
	            };
	            global.postMessage("", "*");
	            global.onmessage = oldOnMessage;
	            return postMessageIsAsynchronous;
	        }
	    }
	
	    function installPostMessageImplementation() {
	        // Installs an event handler on `global` for the `message` event: see
	        // * https://developer.mozilla.org/en/DOM/window.postMessage
	        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages
	
	        var messagePrefix = "setImmediate$" + Math.random() + "$";
	        var onGlobalMessage = function onGlobalMessage(event) {
	            if (event.source === global && typeof event.data === "string" && event.data.indexOf(messagePrefix) === 0) {
	                runIfPresent(+event.data.slice(messagePrefix.length));
	            }
	        };
	
	        if (global.addEventListener) {
	            global.addEventListener("message", onGlobalMessage, false);
	        } else {
	            global.attachEvent("onmessage", onGlobalMessage);
	        }
	
	        registerImmediate = function registerImmediate(handle) {
	            global.postMessage(messagePrefix + handle, "*");
	        };
	    }
	
	    function installMessageChannelImplementation() {
	        var channel = new MessageChannel();
	        channel.port1.onmessage = function (event) {
	            var handle = event.data;
	            runIfPresent(handle);
	        };
	
	        registerImmediate = function registerImmediate(handle) {
	            channel.port2.postMessage(handle);
	        };
	    }
	
	    function installReadyStateChangeImplementation() {
	        var html = doc.documentElement;
	        registerImmediate = function registerImmediate(handle) {
	            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
	            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
	            var script = doc.createElement("script");
	            script.onreadystatechange = function () {
	                runIfPresent(handle);
	                script.onreadystatechange = null;
	                html.removeChild(script);
	                script = null;
	            };
	            html.appendChild(script);
	        };
	    }
	
	    function installSetTimeoutImplementation() {
	        registerImmediate = function registerImmediate(handle) {
	            setTimeout(runIfPresent, 0, handle);
	        };
	    }
	
	    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
	    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
	    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;
	
	    // Don't get fooled by e.g. browserify environments.
	    if ({}.toString.call(global.process) === "[object process]") {
	        // For Node.js before 0.9
	        installNextTickImplementation();
	    } else if (canUsePostMessage()) {
	        // For non-IE10 modern browsers
	        installPostMessageImplementation();
	    } else if (global.MessageChannel) {
	        // For web workers, where supported
	        installMessageChannelImplementation();
	    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
	        // For IE 6–8
	        installReadyStateChangeImplementation();
	    } else {
	        // For older browsers
	        installSetTimeoutImplementation();
	    }
	
	    attachTo.setImmediate = setImmediate;
	    attachTo.clearImmediate = clearImmediate;
	})(typeof self === "undefined" ? typeof global === "undefined" ? undefined : global : self);
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }()), __webpack_require__(57)))

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var URLON = {
		stringify: function stringify(input) {
			function encodeString(str) {
				return encodeURI(str.replace(/([=:&@_;\/])/g, '/$1'));
			}
	
			function stringify(input) {
				// Number or Boolean or Null
				if (typeof input === 'number' || input === true || input === false || input === null) {
					return ':' + input;
				}
				// Array
				if (input instanceof Array) {
					var res = [];
					for (var i = 0; i < input.length; ++i) {
						res.push(stringify(input[i]));
					}
					return '@' + res.join('&') + ';';
				}
				// Object
				if ((typeof input === 'undefined' ? 'undefined' : _typeof(input)) === 'object') {
					var res = [];
					for (var key in input) {
						res.push(encodeString(key) + stringify(input[key]));
					}
					return '_' + res.join('&') + ';';
				}
				// String or undefined
				return '=' + encodeString((input !== null ? input !== undefined ? input : "undefined" : "null").toString());
			}
	
			return stringify(input).replace(/;+$/g, '');
		},
	
		parse: function parse(str) {
			var pos = 0;
			str = decodeURI(str);
	
			function read() {
				var token = '';
				for (; pos !== str.length; ++pos) {
					if (str.charAt(pos) === '/') {
						pos += 1;
						if (pos === str.length) {
							token += ';';
							break;
						}
					} else if (str.charAt(pos).match(/[=:&@_;]/)) {
						break;
					}
					token += str.charAt(pos);
				}
				return token;
			}
	
			function parse() {
				var type = str.charAt(pos++);
	
				// String
				if (type === '=') {
					return read();
				}
				// Number or Boolean
				if (type === ':') {
					var value = read();
					if (value === 'true') {
						return true;
					}
					if (value === 'false') {
						return false;
					}
					value = parseFloat(value);
					return isNaN(value) ? null : value;
				}
				// Array
				if (type === '@') {
					var res = [];
					loop: {
						if (pos >= str.length || str.charAt(pos) === ';') {
							break loop;
						}
						while (1) {
							res.push(parse());
							if (pos >= str.length || str.charAt(pos) === ';') {
								break loop;
							}
							pos += 1;
						}
					}
					pos += 1;
					return res;
				}
				// Object
				if (type === '_') {
					var res = {};
					loop: {
						if (pos >= str.length || str.charAt(pos) === ';') {
							break loop;
						}
						while (1) {
							var name = read();
							res[name] = parse();
							if (pos >= str.length || str.charAt(pos) === ';') {
								break loop;
							}
							pos += 1;
						}
					}
					pos += 1;
					return res;
				}
				// Error
				throw 'Unexpected char ' + type;
			}
	
			return parse();
		}
	};
	
	if (true) {
		exports.stringify = URLON.stringify;
		exports.parse = URLON.parse;
	}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var arrayMap = __webpack_require__(62),
	    baseIteratee = __webpack_require__(63),
	    baseMap = __webpack_require__(141),
	    isArray = __webpack_require__(5);
	
	/**
	 * Creates an array of values by running each element in `collection` thru
	 * `iteratee`. The iteratee is invoked with three arguments:
	 * (value, index|key, collection).
	 *
	 * Many lodash methods are guarded to work as iteratees for methods like
	 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
	 *
	 * The guarded methods are:
	 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
	 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
	 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
	 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Collection
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Array|Function|Object|string} [iteratee=_.identity]
	 *  The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 * @example
	 *
	 * function square(n) {
	 *   return n * n;
	 * }
	 *
	 * _.map([4, 8], square);
	 * // => [16, 64]
	 *
	 * _.map({ 'a': 4, 'b': 8 }, square);
	 * // => [16, 64] (iteration order is not guaranteed)
	 *
	 * var users = [
	 *   { 'user': 'barney' },
	 *   { 'user': 'fred' }
	 * ];
	 *
	 * // The `_.property` iteratee shorthand.
	 * _.map(users, 'user');
	 * // => ['barney', 'fred']
	 */
	function map(collection, iteratee) {
	  var func = isArray(collection) ? arrayMap : baseMap;
	  return func(collection, baseIteratee(iteratee, 3));
	}
	
	module.exports = map;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array ? array.length : 0,
	      result = Array(length);
	
	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}
	
	module.exports = arrayMap;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var baseMatches = __webpack_require__(64),
	    baseMatchesProperty = __webpack_require__(127),
	    identity = __webpack_require__(138),
	    isArray = __webpack_require__(5),
	    property = __webpack_require__(139);
	
	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
	    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
	  }
	  return property(value);
	}
	
	module.exports = baseIteratee;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsMatch = __webpack_require__(65),
	    getMatchData = __webpack_require__(124),
	    matchesStrictComparable = __webpack_require__(126);
	
	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function (object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}
	
	module.exports = baseMatches;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(66),
	    baseIsEqual = __webpack_require__(102);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;
	
	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
	  while (index--) {
	    var data = matchData[index];
	    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];
	
	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var stack = new Stack();
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}
	
	module.exports = baseIsMatch;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(67),
	    stackClear = __webpack_require__(74),
	    stackDelete = __webpack_require__(75),
	    stackGet = __webpack_require__(76),
	    stackHas = __webpack_require__(77),
	    stackSet = __webpack_require__(78);
	
	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Stack(entries) {
	  this.__data__ = new ListCache(entries);
	}
	
	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;
	
	module.exports = Stack;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var listCacheClear = __webpack_require__(68),
	    listCacheDelete = __webpack_require__(69),
	    listCacheGet = __webpack_require__(71),
	    listCacheHas = __webpack_require__(72),
	    listCacheSet = __webpack_require__(73);
	
	/**
	 * Creates an list cache object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function ListCache(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;
	
	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	
	// Add methods to `ListCache`.
	ListCache.prototype.clear = listCacheClear;
	ListCache.prototype['delete'] = listCacheDelete;
	ListCache.prototype.get = listCacheGet;
	ListCache.prototype.has = listCacheHas;
	ListCache.prototype.set = listCacheSet;
	
	module.exports = ListCache;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Removes all key-value entries from the list cache.
	 *
	 * @private
	 * @name clear
	 * @memberOf ListCache
	 */
	function listCacheClear() {
	  this.__data__ = [];
	}
	
	module.exports = listCacheClear;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(70);
	
	/** Used for built-in method references. */
	var arrayProto = Array.prototype;
	
	/** Built-in value references. */
	var splice = arrayProto.splice;
	
	/**
	 * Removes `key` and its value from the list cache.
	 *
	 * @private
	 * @name delete
	 * @memberOf ListCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function listCacheDelete(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = data.length - 1;
	  if (index == lastIndex) {
	    data.pop();
	  } else {
	    splice.call(data, index, 1);
	  }
	  return true;
	}
	
	module.exports = listCacheDelete;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var eq = __webpack_require__(12);
	
	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}
	
	module.exports = assocIndexOf;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(70);
	
	/**
	 * Gets the list cache value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf ListCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function listCacheGet(key) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  return index < 0 ? undefined : data[index][1];
	}
	
	module.exports = listCacheGet;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(70);
	
	/**
	 * Checks if a list cache value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf ListCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function listCacheHas(key) {
	  return assocIndexOf(this.__data__, key) > -1;
	}
	
	module.exports = listCacheHas;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assocIndexOf = __webpack_require__(70);
	
	/**
	 * Sets the list cache `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf ListCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the list cache instance.
	 */
	function listCacheSet(key, value) {
	  var data = this.__data__,
	      index = assocIndexOf(data, key);
	
	  if (index < 0) {
	    data.push([key, value]);
	  } else {
	    data[index][1] = value;
	  }
	  return this;
	}
	
	module.exports = listCacheSet;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(67);
	
	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = new ListCache();
	}
	
	module.exports = stackClear;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  return this.__data__['delete'](key);
	}
	
	module.exports = stackDelete;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  return this.__data__.get(key);
	}
	
	module.exports = stackGet;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  return this.__data__.has(key);
	}
	
	module.exports = stackHas;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var ListCache = __webpack_require__(67),
	    MapCache = __webpack_require__(79);
	
	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;
	
	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var cache = this.__data__;
	  if (cache instanceof ListCache && cache.__data__.length == LARGE_ARRAY_SIZE) {
	    cache = this.__data__ = new MapCache(cache.__data__);
	  }
	  cache.set(key, value);
	  return this;
	}
	
	module.exports = stackSet;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var mapCacheClear = __webpack_require__(80),
	    mapCacheDelete = __webpack_require__(96),
	    mapCacheGet = __webpack_require__(99),
	    mapCacheHas = __webpack_require__(100),
	    mapCacheSet = __webpack_require__(101);
	
	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function MapCache(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;
	
	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	
	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapCacheClear;
	MapCache.prototype['delete'] = mapCacheDelete;
	MapCache.prototype.get = mapCacheGet;
	MapCache.prototype.has = mapCacheHas;
	MapCache.prototype.set = mapCacheSet;
	
	module.exports = MapCache;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Hash = __webpack_require__(81),
	    ListCache = __webpack_require__(67),
	    Map = __webpack_require__(95);
	
	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapCacheClear() {
	  this.__data__ = {
	    'hash': new Hash(),
	    'map': new (Map || ListCache)(),
	    'string': new Hash()
	  };
	}
	
	module.exports = mapCacheClear;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var hashClear = __webpack_require__(82),
	    hashDelete = __webpack_require__(91),
	    hashGet = __webpack_require__(92),
	    hashHas = __webpack_require__(93),
	    hashSet = __webpack_require__(94);
	
	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [entries] The key-value pairs to cache.
	 */
	function Hash(entries) {
	    var index = -1,
	        length = entries ? entries.length : 0;
	
	    this.clear();
	    while (++index < length) {
	        var entry = entries[index];
	        this.set(entry[0], entry[1]);
	    }
	}
	
	// Add methods to `Hash`.
	Hash.prototype.clear = hashClear;
	Hash.prototype['delete'] = hashDelete;
	Hash.prototype.get = hashGet;
	Hash.prototype.has = hashHas;
	Hash.prototype.set = hashSet;
	
	module.exports = Hash;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(83);
	
	/**
	 * Removes all key-value entries from the hash.
	 *
	 * @private
	 * @name clear
	 * @memberOf Hash
	 */
	function hashClear() {
	  this.__data__ = nativeCreate ? nativeCreate(null) : {};
	}
	
	module.exports = hashClear;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(84);
	
	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');
	
	module.exports = nativeCreate;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsNative = __webpack_require__(85),
	    getValue = __webpack_require__(90);
	
	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = getValue(object, key);
	  return baseIsNative(value) ? value : undefined;
	}
	
	module.exports = getNative;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isFunction = __webpack_require__(19),
	    isHostObject = __webpack_require__(86),
	    isMasked = __webpack_require__(87),
	    isObject = __webpack_require__(8),
	    toSource = __webpack_require__(89);
	
	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
	
	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');
	
	/**
	 * The base implementation of `_.isNative` without bad shim checks.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 */
	function baseIsNative(value) {
	  if (!isObject(value) || isMasked(value)) {
	    return false;
	  }
	  var pattern = isFunction(value) || isHostObject(value) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}
	
	module.exports = baseIsNative;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

	'use strict';
	
	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}
	
	module.exports = isHostObject;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var coreJsData = __webpack_require__(88);
	
	/** Used to detect methods masquerading as native. */
	var maskSrcKey = function () {
	  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
	  return uid ? 'Symbol(src)_1.' + uid : '';
	}();
	
	/**
	 * Checks if `func` has its source masked.
	 *
	 * @private
	 * @param {Function} func The function to check.
	 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
	 */
	function isMasked(func) {
	  return !!maskSrcKey && maskSrcKey in func;
	}
	
	module.exports = isMasked;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(32);
	
	/** Used to detect overreaching core-js shims. */
	var coreJsData = root['__core-js_shared__'];
	
	module.exports = coreJsData;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;
	
	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return func + '';
	    } catch (e) {}
	  }
	  return '';
	}
	
	module.exports = toSource;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Gets the value at `key` of `object`.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {string} key The key of the property to get.
	 * @returns {*} Returns the property value.
	 */
	function getValue(object, key) {
	  return object == null ? undefined : object[key];
	}
	
	module.exports = getValue;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @name delete
	 * @memberOf Hash
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(key) {
	  return this.has(key) && delete this.__data__[key];
	}
	
	module.exports = hashDelete;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(83);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Hash
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(key) {
	  var data = this.__data__;
	  if (nativeCreate) {
	    var result = data[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(data, key) ? data[key] : undefined;
	}
	
	module.exports = hashGet;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(83);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Hash
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(key) {
	  var data = this.__data__;
	  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
	}
	
	module.exports = hashHas;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var nativeCreate = __webpack_require__(83);
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Hash
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the hash instance.
	 */
	function hashSet(key, value) {
	  var data = this.__data__;
	  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
	  return this;
	}
	
	module.exports = hashSet;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(84),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');
	
	module.exports = Map;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapCacheDelete(key) {
	  return getMapData(this, key)['delete'](key);
	}
	
	module.exports = mapCacheDelete;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isKeyable = __webpack_require__(98);
	
	/**
	 * Gets the data for `map`.
	 *
	 * @private
	 * @param {Object} map The map to query.
	 * @param {string} key The reference key.
	 * @returns {*} Returns the map data.
	 */
	function getMapData(map, key) {
	  var data = map.__data__;
	  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
	}
	
	module.exports = getMapData;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
	}
	
	module.exports = isKeyable;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapCacheGet(key) {
	  return getMapData(this, key).get(key);
	}
	
	module.exports = mapCacheGet;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapCacheHas(key) {
	  return getMapData(this, key).has(key);
	}
	
	module.exports = mapCacheHas;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getMapData = __webpack_require__(97);
	
	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapCacheSet(key, value) {
	  getMapData(this, key).set(key, value);
	  return this;
	}
	
	module.exports = mapCacheSet;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqualDeep = __webpack_require__(103),
	    isObject = __webpack_require__(8),
	    isObjectLike = __webpack_require__(7);
	
	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || !isObject(value) && !isObjectLike(other)) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqual;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var Stack = __webpack_require__(66),
	    equalArrays = __webpack_require__(104),
	    equalByTag = __webpack_require__(109),
	    equalObjects = __webpack_require__(113),
	    getTag = __webpack_require__(118),
	    isArray = __webpack_require__(5),
	    isHostObject = __webpack_require__(86),
	    isTypedArray = __webpack_require__(123);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;
	
	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;
	
	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack());
	    return objIsArr || isTypedArray(object) ? equalArrays(object, other, equalFunc, customizer, bitmask, stack) : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');
	
	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;
	
	      stack || (stack = new Stack());
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack());
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}
	
	module.exports = baseIsEqualDeep;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var SetCache = __webpack_require__(105),
	    arraySome = __webpack_require__(108);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;
	
	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var index = -1,
	      result = true,
	      seen = bitmask & UNORDERED_COMPARE_FLAG ? new SetCache() : undefined;
	
	  stack.set(array, other);
	
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];
	
	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (seen) {
	      if (!arraySome(other, function (othValue, othIndex) {
	        if (!seen.has(othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	          return seen.add(othIndex);
	        }
	      })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}
	
	module.exports = equalArrays;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(79),
	    setCacheAdd = __webpack_require__(106),
	    setCacheHas = __webpack_require__(107);
	
	/**
	 *
	 * Creates an array cache object to store unique values.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	    var index = -1,
	        length = values ? values.length : 0;
	
	    this.__data__ = new MapCache();
	    while (++index < length) {
	        this.add(values[index]);
	    }
	}
	
	// Add methods to `SetCache`.
	SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
	SetCache.prototype.has = setCacheHas;
	
	module.exports = SetCache;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

	'use strict';
	
	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';
	
	/**
	 * Adds `value` to the array cache.
	 *
	 * @private
	 * @name add
	 * @memberOf SetCache
	 * @alias push
	 * @param {*} value The value to cache.
	 * @returns {Object} Returns the cache instance.
	 */
	function setCacheAdd(value) {
	  this.__data__.set(value, HASH_UNDEFINED);
	  return this;
	}
	
	module.exports = setCacheAdd;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is in the array cache.
	 *
	 * @private
	 * @name has
	 * @memberOf SetCache
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `true` if `value` is found, else `false`.
	 */
	function setCacheHas(value) {
	  return this.__data__.has(value);
	}
	
	module.exports = setCacheHas;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} [array] The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array ? array.length : 0;
	
	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}
	
	module.exports = arraySome;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Symbol = __webpack_require__(41),
	    Uint8Array = __webpack_require__(110),
	    equalArrays = __webpack_require__(104),
	    mapToArray = __webpack_require__(111),
	    setToArray = __webpack_require__(112);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';
	
	/** Used to convert symbols to primitives and strings. */
	var symbolProto = _Symbol ? _Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;
	
	    case arrayBufferTag:
	      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;
	
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;
	
	    case errorTag:
	      return object.name == other.name && object.message == other.message;
	
	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return object != +object ? other != +other : object == +other;
	
	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == other + '';
	
	    case mapTag:
	      var convert = mapToArray;
	
	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);
	
	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);
	
	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);
	
	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}
	
	module.exports = equalByTag;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var root = __webpack_require__(32);
	
	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;
	
	module.exports = Uint8Array;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Converts `map` to its key-value pairs.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the key-value pairs.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);
	
	  map.forEach(function (value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}
	
	module.exports = mapToArray;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Converts `set` to an array of its values.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the values.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);
	
	  set.forEach(function (value) {
	    result[++index] = value;
	  });
	  return result;
	}
	
	module.exports = setToArray;

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHas = __webpack_require__(114),
	    keys = __webpack_require__(116);
	
	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;
	
	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);
	
	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];
	
	    if (customizer) {
	      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack) : compared)) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;
	
	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}
	
	module.exports = equalObjects;

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var getPrototype = __webpack_require__(115);
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;
	
	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return object != null && (hasOwnProperty.call(object, key) || (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && key in object && getPrototype(object) === null);
	}
	
	module.exports = baseHas;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

	"use strict";
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;
	
	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}
	
	module.exports = getPrototype;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHas = __webpack_require__(114),
	    baseKeys = __webpack_require__(117),
	    indexKeys = __webpack_require__(35),
	    isArrayLike = __webpack_require__(16),
	    isIndex = __webpack_require__(21),
	    isPrototype = __webpack_require__(28);
	
	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;
	
	  for (var key in object) {
	    if (baseHas(object, key) && !(skipIndexes && (key == 'length' || isIndex(key, length))) && !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}
	
	module.exports = keys;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

	"use strict";
	
	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;
	
	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}
	
	module.exports = baseKeys;

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var DataView = __webpack_require__(119),
	    Map = __webpack_require__(95),
	    Promise = __webpack_require__(120),
	    Set = __webpack_require__(121),
	    WeakMap = __webpack_require__(122),
	    toSource = __webpack_require__(89);
	
	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';
	
	var dataViewTag = '[object DataView]';
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);
	
	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}
	
	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
	  getTag = function getTag(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;
	
	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString:
	          return dataViewTag;
	        case mapCtorString:
	          return mapTag;
	        case promiseCtorString:
	          return promiseTag;
	        case setCtorString:
	          return setTag;
	        case weakMapCtorString:
	          return weakMapTag;
	      }
	    }
	    return result;
	  };
	}
	
	module.exports = getTag;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(84),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');
	
	module.exports = DataView;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(84),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');
	
	module.exports = Promise;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(84),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');
	
	module.exports = Set;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var getNative = __webpack_require__(84),
	    root = __webpack_require__(32);
	
	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');
	
	module.exports = WeakMap;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isLength = __webpack_require__(20),
	    isObjectLike = __webpack_require__(7);
	
	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';
	
	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';
	
	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
	
	/** Used for built-in method references. */
	var objectProto = Object.prototype;
	
	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;
	
	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}
	
	module.exports = isTypedArray;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isStrictComparable = __webpack_require__(125),
	    keys = __webpack_require__(116);
	
	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	    var result = keys(object),
	        length = result.length;
	
	    while (length--) {
	        var key = result[length],
	            value = object[key];
	
	        result[length] = [key, value, isStrictComparable(value)];
	    }
	    return result;
	}
	
	module.exports = getMatchData;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isObject = __webpack_require__(8);
	
	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}
	
	module.exports = isStrictComparable;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
	  };
	}
	
	module.exports = matchesStrictComparable;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseIsEqual = __webpack_require__(102),
	    get = __webpack_require__(128),
	    hasIn = __webpack_require__(135),
	    isKey = __webpack_require__(133),
	    isStrictComparable = __webpack_require__(125),
	    matchesStrictComparable = __webpack_require__(126),
	    toKey = __webpack_require__(134);
	
	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;
	
	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new spec function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function (object) {
	    var objValue = get(object, path);
	    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}
	
	module.exports = baseMatchesProperty;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(129);
	
	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}
	
	module.exports = get;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(130),
	    isKey = __webpack_require__(133),
	    toKey = __webpack_require__(134);
	
	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var index = 0,
	      length = path.length;
	
	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return index && index == length ? object : undefined;
	}
	
	module.exports = baseGet;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArray = __webpack_require__(5),
	    stringToPath = __webpack_require__(131);
	
	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}
	
	module.exports = castPath;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var memoize = __webpack_require__(132),
	    toString = __webpack_require__(48);
	
	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(\.|\[\])(?:\4|$))/g;
	
	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;
	
	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function (string) {
	  var result = [];
	  toString(string).replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : number || match);
	  });
	  return result;
	});
	
	module.exports = stringToPath;

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var MapCache = __webpack_require__(79);
	
	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';
	
	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoized function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || resolver && typeof resolver != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function memoized() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;
	
	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache)();
	  return memoized;
	}
	
	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;
	
	module.exports = memoize;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var isArray = __webpack_require__(5),
	    isSymbol = __webpack_require__(27);
	
	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;
	
	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
	  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
	}
	
	module.exports = isKey;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isSymbol = __webpack_require__(27);
	
	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;
	
	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = value + '';
	  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
	}
	
	module.exports = toKey;

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseHasIn = __webpack_require__(136),
	    hasPath = __webpack_require__(137);
	
	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}
	
	module.exports = hasIn;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} [object] The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return object != null && key in Object(object);
	}
	
	module.exports = baseHasIn;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var castPath = __webpack_require__(130),
	    isArguments = __webpack_require__(37),
	    isArray = __webpack_require__(5),
	    isIndex = __webpack_require__(21),
	    isKey = __webpack_require__(133),
	    isLength = __webpack_require__(20),
	    isString = __webpack_require__(6),
	    toKey = __webpack_require__(134);
	
	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);
	
	  var result,
	      index = -1,
	      length = path.length;
	
	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isString(object) || isArguments(object));
	}
	
	module.exports = hasPath;

/***/ }),
/* 138 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * console.log(_.identity(object) === object);
	 * // => true
	 */
	function identity(value) {
	  return value;
	}
	
	module.exports = identity;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseProperty = __webpack_require__(18),
	    basePropertyDeep = __webpack_require__(140),
	    isKey = __webpack_require__(133),
	    toKey = __webpack_require__(134);
	
	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}
	
	module.exports = property;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseGet = __webpack_require__(129);
	
	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new accessor function.
	 */
	function basePropertyDeep(path) {
	  return function (object) {
	    return baseGet(object, path);
	  };
	}
	
	module.exports = basePropertyDeep;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseEach = __webpack_require__(142),
	    isArrayLike = __webpack_require__(16);
	
	/**
	 * The base implementation of `_.map` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function baseMap(collection, iteratee) {
	  var index = -1,
	      result = isArrayLike(collection) ? Array(collection.length) : [];
	
	  baseEach(collection, function (value, key, collection) {
	    result[++index] = iteratee(value, key, collection);
	  });
	  return result;
	}
	
	module.exports = baseMap;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseForOwn = __webpack_require__(143),
	    createBaseEach = __webpack_require__(146);
	
	/**
	 * The base implementation of `_.forEach` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Array|Object} collection The collection to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array|Object} Returns `collection`.
	 */
	var baseEach = createBaseEach(baseForOwn);
	
	module.exports = baseEach;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var baseFor = __webpack_require__(144),
	    keys = __webpack_require__(116);
	
	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}
	
	module.exports = baseForOwn;

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var createBaseFor = __webpack_require__(145);
	
	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();
	
	module.exports = baseFor;

/***/ }),
/* 145 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;
	
	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}
	
	module.exports = createBaseFor;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var isArrayLike = __webpack_require__(16);
	
	/**
	 * Creates a `baseEach` or `baseEachRight` function.
	 *
	 * @private
	 * @param {Function} eachFunc The function to iterate over a collection.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseEach(eachFunc, fromRight) {
	  return function (collection, iteratee) {
	    if (collection == null) {
	      return collection;
	    }
	    if (!isArrayLike(collection)) {
	      return eachFunc(collection, iteratee);
	    }
	    var length = collection.length,
	        index = fromRight ? length : -1,
	        iterable = Object(collection);
	
	    while (fromRight ? index-- : ++index < length) {
	      if (iteratee(iterable[index], index, iterable) === false) {
	        break;
	      }
	    }
	    return collection;
	  };
	}
	
	module.exports = createBaseEach;

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	var assignValue = __webpack_require__(11),
	    baseZipObject = __webpack_require__(148);
	
	/**
	 * This method is like `_.fromPairs` except that it accepts two arrays,
	 * one of property identifiers and one of corresponding values.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.4.0
	 * @category Array
	 * @param {Array} [props=[]] The property identifiers.
	 * @param {Array} [values=[]] The property values.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * _.zipObject(['a', 'b'], [1, 2]);
	 * // => { 'a': 1, 'b': 2 }
	 */
	function zipObject(props, values) {
	  return baseZipObject(props || [], values || [], assignValue);
	}
	
	module.exports = zipObject;

/***/ }),
/* 148 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * This base implementation of `_.zipObject` which assigns values using `assignFunc`.
	 *
	 * @private
	 * @param {Array} props The property identifiers.
	 * @param {Array} values The property values.
	 * @param {Function} assignFunc The function to assign values.
	 * @returns {Object} Returns the new object.
	 */
	function baseZipObject(props, values, assignFunc) {
	  var index = -1,
	      length = props.length,
	      valsLength = values.length,
	      result = {};
	
	  while (++index < length) {
	    var value = index < valsLength ? values[index] : undefined;
	    assignFunc(result, props[index], value);
	  }
	  return result;
	}
	
	module.exports = baseZipObject;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

	"use strict";
	
	/**
	 * Checks if `value` is `null` or `undefined`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
	 * @example
	 *
	 * _.isNil(null);
	 * // => true
	 *
	 * _.isNil(void 0);
	 * // => true
	 *
	 * _.isNil(NaN);
	 * // => false
	 */
	function isNil(value) {
	  return value == null;
	}
	
	module.exports = isNil;

/***/ })
/******/ ]);
//# sourceMappingURL=vizabi-ws-reader.js.map