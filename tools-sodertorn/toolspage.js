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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTo = scrollTo;
exports.translateNode = translateNode;
exports.loadJS = loadJS;
function scrollTo(_ref) {
  var _ref$durationLeft = _ref.durationLeft,
      durationLeft = _ref$durationLeft === undefined ? 200 : _ref$durationLeft,
      element = _ref.element,
      complete = _ref.complete;

  var positionFrom = element.scrollTop;
  var positionTo = 0 - positionFrom;

  if (positionTo < 0) {
    var positionDiff = positionTo / durationLeft * 10;
    element.scrollTop += positionDiff;
    setTimeout(function () {
      scrollTo({ durationLeft: durationLeft - 25, element: element, complete: complete });
    }, 25);
  } else {
    complete();
  }
}

function translateNode(translator) {
  return function () {
    var el = d3.select(this);
    var text = el.attr("data-text");
    if (!text) return;
    var textChildNode = Array.from(el.node().childNodes).filter(function (_ref2) {
      var nodeName = _ref2.nodeName;
      return nodeName === "#text";
    })[0];
    if (textChildNode) {
      textChildNode.textContent = translator(text);
    } else {
      el.text(translator(text));
    }
  };
}

function loadJS(url, implementationCode, location) {
  //url is URL of external file, implementationCode is the code
  //to be called from the file, location is the location to 
  //insert the <script> element
  var scriptTag = document.createElement('script');
  scriptTag.src = url;
  scriptTag.onload = implementationCode;
  scriptTag.onreadystatechange = implementationCode;
  location.appendChild(scriptTag);
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var appState = {};
var dispatch = d3.dispatch("translate", "toolChanged");

exports.appState = appState;
exports.dispatch = dispatch;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTool = exports.VIZABI_PAGE_MODEL = exports.viz = undefined;

var _global = __webpack_require__(1);

var _url = __webpack_require__(3);

var _utils = __webpack_require__(0);

var _timelogger = __webpack_require__(5);

var _timelogger2 = _interopRequireDefault(_timelogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var viz = void 0;
var VIZABI_PAGE_MODEL = void 0;

function setTool(arg) {
  if (!arg) arg = _global.appState.tool;
  Vizabi.clearInstances();
  d3.select(".vzb-placeholder").remove();
  d3.select("body").select(".column.main").select(".vizabi-placeholder").append("div").attr("class", "vzb-placeholder").attr("style", "width: 100%; height: 100%;");
  var toolConfig = toolsPage_toolset.filter(function (f) {
    return f.id === arg;
  })[0];
  (0, _utils.loadJS)("assets/js/toolconfigs/" + (toolConfig.config || toolConfig.tool) + ".js", function () {

    VIZABI_MODEL.locale = {
      "id": _global.appState.language,
      "filePath": "assets/translation/"
    };
    VIZABI_MODEL.bind = {
      'ready': function ready(evt) {
        var splashTime = _timelogger2.default.snapOnce("SPLASH");
        if (gtag && splashTime) gtag('event', 'timing_complete', {
          'name': 'splashload',
          'value': splashTime,
          'event_category': 'Splash data loading time'
        });

        var fullTime = _timelogger2.default.snapOnce("FULL");
        if (gtag && fullTime) gtag('event', 'timing_complete', {
          'name': 'allyearsload',
          'value': fullTime,
          'event_category': 'Complete data loading time'
        });

        if ((this.ui || {}).splash) _timelogger2.default.add("FULL");
        _timelogger2.default.add("DATA");
        _timelogger2.default.update("DATA");

        (0, _url.updateURL)();
      },
      'persistentChange': function persistentChange(evt) {
        (0, _url.updateURL)(evt); // force update
      },
      'load_error': function load_error(evt, error) {
        if (gtag) gtag('event', 'error', {
          'event_label': JSON.stringify(error).substring(0, 500), //500 characters is the limit of GA field
          'event_category': this._name
        });
        if (gtag) gtag('event', 'exception', {
          'description': JSON.stringify(error).substr(0, 150), //150 characters is the limit of GA field
          'fatal': true
        });

        var totalTime = _timelogger2.default.snapOnce("TOTAL");
        if (gtag && totalTime) gtag('event', 'timing_complete', {
          'name': 'loadtotal',
          'value': totalTime,
          'event_category': 'Time to error since vizabi object created'
        });
      },
      'dataLoaded': function dataLoaded() {
        var dataTime = _timelogger2.default.snapOnce("DATA");
        if (gtag && dataTime) gtag('event', 'timing_complete', {
          'name': 'gapfill',
          'value': dataTime,
          'event_category': 'Gap filling time'
        });

        var totalTime = _timelogger2.default.snapOnce("TOTAL");
        if (gtag && totalTime) gtag('event', 'timing_complete', {
          'name': 'loadtotal',
          'value': totalTime,
          'event_category': 'Total loading time since vizabi object created'
        });
      }
    };

    var dataSources = toolsPage_datasources.filter(function (f) {
      return f.toolIds.includes(toolConfig.id);
    });
    Object.assign(VIZABI_MODEL, dataSources.length > 1 ? dataSources.reduce(function (result, ds, index) {
      result["data_" + (index ? index : "")] = ds.datasource;
      return result;
    }, {}) : { data: dataSources[0].datasource });
    exports.VIZABI_PAGE_MODEL = VIZABI_PAGE_MODEL = Vizabi.utils.deepExtend({}, VIZABI_MODEL);
    delete VIZABI_PAGE_MODEL.bind;
    delete VIZABI_PAGE_MODEL.locale.id;
    exports.viz = viz = Vizabi(toolConfig.tool, document.getElementsByClassName('vzb-placeholder')[0], Vizabi.utils.deepExtend({}, VIZABI_MODEL, _url.URLI.model, true));

    _timelogger2.default.removeAll();
    _timelogger2.default.add("TOTAL");
    _timelogger2.default.add((viz.model.ui || {}).splash ? "SPLASH" : "FULL");
    if (gaEnabled && gtag) gtag('config', GAPMINDER_TOOLS_GA_ID_PROD, { 'page_path': '/' + toolConfig.tool });
    if (gtag) gtag('config', GAPMINDER_TOOLS_GA_ID_DEV, { 'page_path': '/' + toolConfig.tool });
  }, document.body);
  _global.appState.tool = arg;
}

exports.viz = viz;
exports.VIZABI_PAGE_MODEL = VIZABI_PAGE_MODEL;
exports.setTool = setTool;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resetURL = exports.parseURL = exports.updateURL = exports.URLI = undefined;

var _tool = __webpack_require__(2);

var _global = __webpack_require__(1);

//ADAPTED CODE FROM: http://blog.vjeux.com/2011/javascript/urlon-url-object-notation.html
var poppedState;
var URLI = {};
var minModel;

window.addEventListener('popstate', function (e) {
  console.log(e, Vizabi.utils.diffObject());
  if (e.state) {
    console.log("model diff", Vizabi.utils.diffObject(e.state.model, _tool.viz.getModel()));
    poppedState = e.state.model;
    _tool.viz.setModel(e.state.model);
  } else {
    poppedState = null;
  }
});

//grabs width, height, tabs open, and updates the url
function updateURL(event) {
  if (poppedState && Vizabi.utils.comparePlainObjects(_tool.viz.getModel(), poppedState)) return;

  var model;
  if (typeof _tool.viz !== 'undefined') {
    minModel = _tool.viz.getPersistentMinimalModel(_tool.VIZABI_PAGE_MODEL);
  }

  var url = {
    "chart-type": _global.appState.tool
  };

  if (minModel && Object.keys(minModel).length > 0) {
    url.model = minModel;
  }
  console.log('pushing state', _tool.viz.getModel(), event);
  window.history.pushState({ tool: url["chart-type"], model: _tool.viz.getModel() }, 'Title', "#" + urlon.stringify(url));
}

function parseURL() {
  var loc = window.location.toString();
  var hash = null;
  exports.URLI = URLI = {};
  if (loc.indexOf('#') >= 0) {
    hash = loc.substring(loc.indexOf('#') + 1);

    if (hash) {
      var parsedUrl = urlon.parse(hash);

      exports.URLI = URLI = parsedUrl || {};
      return;
    }
  }
}

function resetURL() {
  //var href = location.href + "#";

  window.history.replaceState('Object', 'Title', "#");
  //location.href = href.substring(0, href.indexOf('#'));
}

exports.URLI = URLI;
exports.updateURL = updateURL;
exports.parseURL = parseURL;
exports.resetURL = resetURL;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _tool = __webpack_require__(2);

var _url = __webpack_require__(3);

var _global = __webpack_require__(1);

var _deprecatedUrl = __webpack_require__(6);

var _language = __webpack_require__(8);

var _chartSwitcher = __webpack_require__(9);

var _chartSwitcher2 = _interopRequireDefault(_chartSwitcher);

var _languageSwitcher = __webpack_require__(11);

var _languageSwitcher2 = _interopRequireDefault(_languageSwitcher);

var _socialButtons = __webpack_require__(13);

var _socialButtons2 = _interopRequireDefault(_socialButtons);

var _menu = __webpack_require__(15);

var _menu2 = _interopRequireDefault(_menu);

var _menuMobile = __webpack_require__(17);

var _menuMobile2 = _interopRequireDefault(_menuMobile);

var _seeAlso = __webpack_require__(18);

var _seeAlso2 = _interopRequireDefault(_seeAlso);

var _menuItems = __webpack_require__(20);

var _menuItems2 = _interopRequireDefault(_menuItems);

var _relatedItems = __webpack_require__(21);

var _relatedItems2 = _interopRequireDefault(_relatedItems);

var _bitly = __webpack_require__(22);

var _bitly2 = _interopRequireDefault(_bitly);

var _relatedItems3 = __webpack_require__(23);

var _relatedItems4 = _interopRequireDefault(_relatedItems3);

var _footer = __webpack_require__(25);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var url = location.href;
var upgradedUrl = (0, _deprecatedUrl.upgradeUrl)(url);
if (upgradedUrl !== url) {
  location.replace(upgradedUrl);
}

var tools = toolsPage_toolset.filter(function (f) {
  return !!f.tool;
}).map(function (m) {
  return m.id;
});
(0, _url.parseURL)();
Object.assign(_global.appState, {
  tool: _url.URLI["chart-type"] && tools.includes(_url.URLI["chart-type"]) ? _url.URLI["chart-type"] : tools[0],
  language: ((_url.URLI.model || {}).locale || {}).id || "en"
});
(0, _tool.setTool)();

var languageSwitcher = new _languageSwitcher2.default(d3.select(".header .app-language-switcher"), _language.translator, {
  languages: (0, _language.getLanguages)(),
  selectedLanguage: _global.appState.language,
  onClick: function onClick(d) {
    return (0, _language.setLanguage)(d.key);
  }
});

var chartSwitcher = new _chartSwitcher2.default(d3.select(".header .app-chart-switcher"), _language.translator, _global.dispatch, {
  tools: toolsPage_toolset,
  selectedTool: _global.appState.tool,
  onClick: function onClick(d) {
    _global.dispatch.call("toolChanged", null, d);
    (0, _tool.setTool)(d.id);
  }
});

var menu = new _menu2.default(d3.select(".header .app-menu"), _language.translator, _global.dispatch, {
  menuItems: _menuItems2.default.children
});

var menuMobile = new _menuMobile2.default(d3.select(".header .menu-mobile"), _language.translator, _global.dispatch, {
  menu: d3.select(".header")
});

var seeAlso = new _seeAlso2.default(d3.select(".app-see-also"), _language.translator, _global.dispatch, {
  tools: toolsPage_toolset,
  selectedTool: _global.appState.tool,
  onClick: function onClick(d) {
    _global.dispatch.call("toolChanged", null, d);
    (0, _tool.setTool)(d.id);
  }
});

var socialButtons = new _socialButtons2.default(d3.select(".social-list .app-social-buttons"), _language.translator, _global.dispatch, {
  bitlyService: (0, _bitly2.default)(),
  locationService: function locationService() {}
});

var related = new _relatedItems4.default(d3.select(".app-related-items"), _language.translator, _global.dispatch, {
  relatedItems: _relatedItems2.default
});

var footer = new _footer2.default(d3.select(".app-footer"), _language.translator, _global.dispatch);

(0, _language.setLanguage)(_global.appState.language);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  _values: {},

  add: function add(key) {
    if (!this._values[key]) {
      this._values[key] = {
        time: this._now(),
        isSnapped: false
      };
    }
  },

  update: function update(key) {
    var value = this._values[key];
    if (value) {
      value.time = this._now();
    }
  },

  reset: function reset(key) {
    var value = this._values[key];
    if (value) {
      value.isSnapped = false;
    }
  },

  snapOnce: function snapOnce(key) {
    var value = this._values[key];
    if (value && !value.isSnapped) {
      value.isSnapped = true;
      return this._diff(key);
    }
    return 0;
  },

  snap: function snap(key) {
    return this._values[key] ? this._diff(key) : 0;
  },

  remove: function remove(key) {
    delete this._values[key];
  },

  removeAll: function removeAll() {
    this._values = {};
  },

  _now: function _now() {
    return performance.now();
  },

  _diff: function _diff(key) {
    return Math.round(this._now() - this._values[key].time);
  }
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.upgradeUrl = undefined;

var _urlonUpgrade = __webpack_require__(7);

var _urlonUpgrade2 = _interopRequireDefault(_urlonUpgrade);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rules = [];

addRule(_urlonUpgrade2.default);

function upgradeUrl(url) {
  return rules.reduce(function (resultUrl, _ref) {
    var test = _ref.test,
        use = _ref.use;

    return test(resultUrl) ? use(resultUrl) : resultUrl;
  }, url);
}

function addRule(rule) {
  rules.push(rule);
}

exports.upgradeUrl = upgradeUrl;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var rule = {
  test: function test(url) {
    return (/#_/.test(url)
    );
  },

  use: function use(url) {
    var hashIndex = url.indexOf("#");
    var hashPrefix = url.substr(0, hashIndex);
    var hash = url.substr(hashIndex);

    return hashPrefix + hash.replace("$", "/$").replace(/([^\/])_/g, "$1$");
  }
};

exports.default = rule;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLanguages = exports.setLanguage = exports.translator = undefined;

var _tool = __webpack_require__(2);

var _global = __webpack_require__(1);

var DEFAULT_LANGUAGE = { key: 'en', text: 'English' };
var AVAILABLE_LANGUAGES = [DEFAULT_LANGUAGE, { key: 'ar-SA', text: 'العربية', isRtl: true }];

var TRANSLATION_DICTIONARY = {};

function setLocale(arg) {
  if (!arg) arg = _global.appState.language;
  if (!_tool.viz || !_tool.viz.model) return;
  _tool.viz.model.locale.id = arg;
  _global.appState.language = arg;
}

function loadTranslation(language, callback) {
  d3.json("assets/i18n/" + language + ".json", function (error, translation) {
    if (error) return;
    callback(translation);
  });
}

function changeLanguage(language) {
  if (TRANSLATION_DICTIONARY[language]) {
    translateNow();
  } else {
    loadTranslation(language, function (translation) {
      TRANSLATION_DICTIONARY[language] = translation;
      translateNow();
    });
  }
}

function translateNow() {
  var languageConfig = AVAILABLE_LANGUAGES.filter(function (_ref) {
    var key = _ref.key;
    return key === _global.appState.language;
  })[0];
  d3.select(".wrapper").classed("page-lang-rtl", languageConfig.isRtl);
  _global.dispatch.call("translate");
}

function translator(key) {
  return TRANSLATION_DICTIONARY[_global.appState.language] && TRANSLATION_DICTIONARY[_global.appState.language][key] ? TRANSLATION_DICTIONARY[_global.appState.language][key] : key;
}

function setLanguage(language) {
  setLocale(language);
  changeLanguage(_global.appState.language);
}

function getLanguages() {
  return AVAILABLE_LANGUAGES;
}

exports.translator = translator;
exports.setLanguage = setLanguage;
exports.getLanguages = getLanguages;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ChartSwitcher = function ChartSwitcher(placeHolder, translator, dispatch, _ref) {
  var _this2 = this;

  var tools = _ref.tools,
      selectedTool = _ref.selectedTool,
      onClick = _ref.onClick;

  var templateHtml = __webpack_require__(10);

  var template = d3.create("div");
  template.html(templateHtml);

  var itemTemplate = template.select(".chart-switcher-options div");
  var onlyChartTools = tools.filter(function (_ref2) {
    var tool = _ref2.tool;
    return tool;
  });
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = onlyChartTools[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tool = _step.value;

      itemTemplate.clone(true).datum(tool).attr("hidden", tool.id === selectedTool ? true : null).raise().call(fillToolItem, this);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  itemTemplate.remove();

  this.areToolsOpen = false;
  var switcher = template.select(".chart-switcher-button");
  switcher.on("click", function () {
    return switchTools.call(_this2);
  });

  var _loop = function _loop(elem) {
    placeHolder.append(function () {
      return elem;
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Array.from(template.node().children)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  translate();
  dispatch.on("translate.chartSwitcher", function () {
    translate();
  });

  dispatch.on("toolChanged.chartSwitcher", function (d) {
    toolChanged(d);
  });

  d3.select(window).on("resize.chartSwitcher", function () {
    return switchTools.call(_this2, false);
  });
  d3.select(window).on("click.chartSwitcher", function () {
    var event = d3.event;
    if (_this2.areToolsOpen && event.target && event.target !== switcher.node()) {
      switchTools.call(_this2, false);
    }
  });

  function translate() {
    var selectedToolConfig = tools.filter(function (_ref3) {
      var id = _ref3.id;
      return id === selectedTool;
    })[0];
    placeHolder.select(".chart-switcher-button").text(translator(selectedToolConfig.title || selectedToolConfig.id));
    placeHolder.selectAll(".chart-switcher-options div").select("a").text(function (d) {
      return translator(d.title || d.id);
    });
  }

  function toolChanged(tool) {
    placeHolder.select(".chart-switcher-button").text(translator(tool.title || tool.id));
    placeHolder.selectAll(".chart-switcher-options div").attr("hidden", function (_d) {
      return _d.id === tool.id ? true : null;
    });
  }

  function switchTools(force) {
    this.areToolsOpen = force || force === false ? force : !this.areToolsOpen;
    placeHolder.select(".chart-switcher-options").attr("hidden", this.areToolsOpen ? null : true);
  }

  function fillToolItem(item, _this) {
    var tool = item.datum();
    var a = item.select("a");
    a.on("click", function (d) {
      switchTools.call(_this);
      onClick(d);
    });
  }
};

exports.default = ChartSwitcher;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-switcher\">\n  <a class=\"chart-switcher-button\"></a>\n</div>\n<div class=\"chart-switcher-options\" hidden>\n    <div><a rel=\"noopener\"></a></div>\n</div>";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var LanguageSwitcher = function LanguageSwitcher(placeHolder, translator, _ref) {
  var _this = this;

  var languages = _ref.languages,
      selectedLanguage = _ref.selectedLanguage,
      onClick = _ref.onClick;

  var templateHtml = __webpack_require__(12);

  var template = d3.create("div");
  template.html(templateHtml);

  var itemTemplate = template.select("ul li");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = languages[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var language = _step.value;

      itemTemplate.clone(true).datum(language).raise().on("click", function (d) {
        switcher.text(d.text);
        switchLanguage.call(_this);
        onClick(d);
      }).text(function (d) {
        return d.text;
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  itemTemplate.remove();

  this.isLanguageSwitcherVisible = false;
  var selectedLanguageConfig = languages.filter(function (_ref2) {
    var key = _ref2.key;
    return key === selectedLanguage;
  })[0];
  var switcher = template.select(".lang-current");
  switcher.on("click", function () {
    return switchLanguage.call(_this);
  });
  switcher.text(selectedLanguageConfig.text);

  var _loop = function _loop(elem) {
    placeHolder.append(function () {
      return elem;
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Array.from(template.node().children)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  d3.select(window).on("resize.languageSwitcher", function () {
    return switchLanguage.call(_this, false);
  });
  d3.select(window).on("click.languageSwitcher", function () {
    var event = d3.event;
    if (_this.isLanguageSwitcherVisible && event.target && event.target !== switcher.node()) {
      switchLanguage.call(_this, false);
    }
  });

  function switchLanguage(force) {
    this.isLanguageSwitcherVisible = force || force === false ? force : !this.isLanguageSwitcherVisible;
    placeHolder.select("ul").attr("class", this.isLanguageSwitcherVisible ? "selected" : null);
  }
};

exports.default = LanguageSwitcher;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<div class=\"lang-current\"></div>\n\n<ul>\n  <li></li>\n</ul>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SocialButtons = function SocialButtons(placeHolder, translator, dispatch, _ref) {
  var bitlyService = _ref.bitlyService,
      locationService = _ref.locationService;

  var templateHtml = __webpack_require__(14);

  var template = d3.create("div");
  template.html(templateHtml);

  template.select(".share-text-box").on("click", setMainLink());
  template.select(".mail.button").on("click", mail);
  template.select(".twitter.button").on("click", twitter);
  template.select(".facebook.button").on("click", facebook);
  template.select(".ico-plane.button").on("click", shareLink);
  template.select(".ico-code.button").on("click", getEmbeddedUrl);

  var _loop = function _loop(elem) {
    placeHolder.append(function () {
      return elem;
    });
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Array.from(template.node().children)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  translate();
  dispatch.on("translate.socialButtons", function () {
    translate();
  });

  function translate() {
    placeHolder.select(".share-text-box").each(utils.translateNode(translator));
  }

  function twitter() {
    openWindow("https://twitter.com/intent/tweet?original_referer=#{url}&amp;related=Gapminder&amp;text=Gapminder&amp;tw_p=tweetbutton&amp;url=#{url}");
  }

  function facebook() {
    openWindow("http://www.addtoany.com/add_to/facebook?linkurl=#{url}&amp;");
  }

  function mail() {
    setMainLink();
    placeHolder.select(".mailLink").node().click();
  }

  function setMainLink() {
    var mailUrl = encodeURIComponent(window.location.href);
    placeHolder.select(".mailLink").attr("href", "mailto:?subject=Gapminder&body=" + mailUrl);
  }

  function openWindow(urlTemplate) {
    var half = 2;
    var windowWidth = 490;
    var left = (window.innerWidth - windowWidth) / half;
    var newWindow = window.open('', '_blank', "width=" + windowWidth + ", height=368, top=100, left=" + left);

    bitlyService.shortenUrl(undefined, function (url) {
      newWindow.location.href = urlTemplate.replace(/#{url}/g, url);
      newWindow.focus();
    });
  }

  function shareLink() {
    var message = 'Copy this fragment and paste it in your website or blog:\n(more instructions on vizabi.org/tutorials)';

    prompt(message, wrapInIFrame(locationService.getUrlReadyForEmbedding()));
  }

  function getEmbeddedUrl() {
    bitlyService.shortenUrl(undefined, function (shortened) {
      return prompt('Copy the following link: ', shortened);
    });
  }

  function wrapInIFrame(content) {
    return "<iframe src=\"" + content + "\" style=\"width: 100%; height: 500px; margin: 0 0 0 0; border: 1px solid grey;\"></iframe>";
  }
};

exports.default = SocialButtons;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<li>\n  <div class=\"share-text-box\" data-text=\"share\"></div>\n</li>\n<li>\n  <a class=\"mail button\">\n    <i class=\"fa fa-envelope-o\"></i>\n  </a>\n</li>\n<li>\n  <a class=\"twitter button\">\n    <i class=\"fa fa-twitter\"></i>\n  </a>\n</li>\n<li>\n  <a class=\"facebook button\">\n    <i class=\"fa fa-facebook\"></i>\n  </a>\n</li>\n<li>\n  <button class=\"button ico-plane\">\n    <svg width=\"13\" height=\"13\" viewBox=\"0 0 1792 1792\" xmlns=\"http://www.w3.org/2000/svg\">\n      <path\n              d=\"M1764 11q33 24 27 64l-256 1536q-5 29-32 45-14 8-31 8-11 0-24-5l-527-215-298 327q-18 21-47 21-14 0-23-4-19-7-30-23.5t-11-36.5v-452l-472-193q-37-14-40-55-3-39 32-59l1664-960q35-21 68 2zm-342 1499l221-1323-1434 827 336 137 863-639-478 797z\"/>\n    </svg>\n  </button>\n</li>\n<li>\n  <a class=\"button ico-code\">\n    <i class=\"fa fa-code\"></i>\n  </a>\n</li>\n<a class=\"mailLink\" href=\"#\"></a>\n";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Menu = function Menu(placeHolder, translator, dispatch, _ref) {
  var _this2 = this;

  var menuItems = _ref.menuItems;

  var _this = this;
  var templateHtml = __webpack_require__(16);
  var path = "./assets";

  var template = d3.create("div");
  template.html(templateHtml);

  var itemTemplate = template.select(".menu-items .nav-expandable-item");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = menuItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      itemTemplate.clone(true).datum(item).raise().call(fillMenuItem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  itemTemplate.remove();

  this.selectedMenuItem = null;

  this.howToContent = template.select(".howToContent");
  this.howToMobileContent = template.select(".howToMobileContent");
  template.select(".how-to-button").datum({ menu_label: "how_to_use" }).on("click", function (d) {
    selectMenuItem(d);
    switchHowTo.call(_this2);
  });
  template.select(".how-to-close").on("click", function () {
    _this2.selectedMenuItem = null;
    selectMenuItem({});
    switchHowTo.call(_this2);
  });

  var _loop = function _loop(elem) {
    placeHolder.append(function () {
      return elem;
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Array.from(template.node().children)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  translate();
  dispatch.on("translate.menu", function () {
    translate();
  });

  d3.select(window).on("resize.menu", function () {
    _this2.selectedMenuItem = null;
    selectMenuItem({});
    switchHowTo.call(_this2);
  });

  function translate() {
    placeHolder.selectAll(".menu-items .nav-expandable-item").call(function (selection) {
      return selection.select("a.menu-item").text(function (d) {
        return translator(d.menu_label);
      });
    }).selectAll(".expanded-column-item").call(function (selection) {
      selection.select(".column-item-heading").text(function (d) {
        return translator(d.menu_label);
      });
      selection.select(".column-item-description").text(function (d) {
        return translator(d.caption);
      });
    });

    placeHolder.select(".menu-item.how-to-use-video").each(utils.translateNode(translator));
    placeHolder.selectAll("p.nav-faq-help-links a").each(utils.translateNode(translator));
  }

  function switchHowTo() {
    var howToContentEmpty = this.howToContent.node().children.length <= 0;

    if (howToContentEmpty) {
      var content = document.createElement('div');
      var contentMobile = document.createElement('div');
      var vimeoContent = "<iframe src=\"https://player.vimeo.com/video/231885967\"\n                                    class=\"how-to-frame\"\n                                    webkitallowfullscreen\n                                    mozallowfullscreen\n                                    allowfullscreen></iframe>";

      content.innerHTML = vimeoContent;
      contentMobile.innerHTML = vimeoContent;
      this.howToContent.node().appendChild(content);
    }
  }

  function selectMenuItem(d) {
    _this.selectedMenuItem = d.menu_label === _this.selectedMenuItem ? null : d.menu_label;
    placeHolder.selectAll(".nav-expandable-item a.menu-item").classed("active", function (d) {
      return _this.selectedMenuItem === d.menu_label;
    });
  }

  function fillMenuItem(item) {
    var menuItem = item.datum();
    var a = item.select("a.menu-item");
    a.on("click", function (d) {
      return selectMenuItem(d);
    });
    var itemTemplate = item.select(".expanded-column-item");
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = menuItem.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _item = _step3.value;

        itemTemplate.clone(true).datum(_item).raise().call(fillColumnItem);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    itemTemplate.remove();
  }

  function fillColumnItem(item) {
    var columnItem = item.datum();
    var a = item.select("a.menu-item");
    a.attr("href", columnItem.url);
    var img = a.select(".column-item-icon img");
    if (columnItem.icon_url) {
      img.attr("src", path + columnItem.icon_url);
    } else {
      img.remove();
    }
  }
};

exports.default = Menu;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<li class=\"nav-expandable menu-items\">\n  <div class=\"nav-expandable-item\">\n\n    <a class=\"menu-item nav-toggle-expanded\"></a>\n\n    <div class=\"nav-expanded\">\n      <div class=\"nav-expanded-columns nav-expanded-columns-2 nav-expanded-columns-icons\">\n        <div class=\"nav-expanded-columns-inner\">\n          <ul>\n            <li class=\"expanded-column-item\">\n              <a class=\"menu-item\" href=\"\">\n                <div class=\"column-item-icon\">\n                  <img>\n                </div>\n                <div class=\"column-item-info\">\n                  <div class=\"column-item-heading\"></div>\n                  <div class=\"column-item-description\"></div>\n                </div>\n              </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n</li>\n\n<li class=\"nav-expandable\">\n  <div class=\"nav-expandable-item\">\n\n    <a class=\"menu-item how-to-button how-to-use-video\" data-text=\"how_to_use\"><span>►</span>_</a>\n\n    <div class=\"nav-expanded\">\n      <div class=\"how-to-outer\">\n        <div class=\"how-to-content\">\n          <span class=\"how-to-close\">&times;</span>\n          <div class=\"howToContent\"></div>\n            <p class=\"nav-faq-help-links\">\n              <a target=\"_blank\" href=\"//www.gapminder.org/GapminderMedia/wp-uploads/Gapminder-Tools-Guide.pdf\" data-text=\"pdf_guide\"></a>\n              <a target=\"_blank\" href=\"//www.gapminder.org/tools-offline/\" data-text=\"can_i_download_Gapminder_Tools\"></a>\n              <a target=\"_blank\" href=\"//vizabi.org/tutorials/2017/04/03/show-your-data/\" data-text=\"can_i_show_my_own_data\"></a>\n              <a target=\"_blank\" href=\"//www.gapminder.org/faq_frequently_asked_questions/\" data-text=\"more_help_and_faq\"></a>\n            </p>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</li>\n";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var MobileMenu = function MobileMenu(placeHolder, translator, dispatch, _ref) {
  var _this = this;

  var menu = _ref.menu;


  this.isMobileMenuOpen = false;
  placeHolder.on("click", function () {
    return switchMobileMenu.call(_this);
  });

  d3.select(window).on("resize.mobileMenu", function () {
    return switchMobileMenu.call(_this, false);
  });

  function switchMobileMenu(force) {
    this.isMobileMenuOpen = force || force === false ? force : !this.isMobileMenuOpen;
    menu.classed("open", this.isMobileMenuOpen);
    placeHolder.classed("open", this.isMobileMenuOpen);
  }
};

exports.default = MobileMenu;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var SeeAlso = function SeeAlso(placeHolder, translator, dispatch, _ref) {
  var tools = _ref.tools,
      selectedTool = _ref.selectedTool,
      onClick = _ref.onClick;

  var templateHtml = __webpack_require__(19);

  var template = d3.create("div");
  template.html(templateHtml);

  var itemTemplate = template.select(".other-tools-item");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tools[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tool = _step.value;

      itemTemplate.clone(true).datum(tool).attr("hidden", tool.id === selectedTool ? true : null).raise().call(fillToolItem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  itemTemplate.remove();

  var _loop = function _loop(elem) {
    placeHolder.append(function () {
      return elem;
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Array.from(template.node().children)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  translate();
  dispatch.on("translate.seeAlso", function () {
    translate();
  });

  dispatch.on("toolChanged.seeAlso", function (d) {
    toolChanged(d);
  });

  function translate() {
    placeHolder.select(".see-also-heading").each(utils.translateNode(translator));
    placeHolder.selectAll(".other-tools-item").select(".title").text(function (d) {
      return translator(d.title || d.id);
    });
  }

  function toolChanged(tool) {
    placeHolder.selectAll(".other-tools-item").attr("hidden", function (_d) {
      return _d.id === tool.id ? true : null;
    });
  }

  function fillToolItem(item) {
    var tool = item.datum();
    var a = item.select("a");
    if (tool.url) {
      a.attr("href", tool.url);
    } else {
      a.on("click", function (d) {
        onClick(d);
      });
    }
    a.select(".image").attr("src", "." + tool.image);
  }
};

exports.default = SeeAlso;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<div class=\"see-also-block\">\n  <h2 class=\"heading-2 see-also-heading\" data-text=\"other_tools\"></h2>\n\n  <div class=\"other-tools-container\">\n    <div class=\"other-tools-item\">\n      <a rel=\"noopener\">\n        <img class=\"image\"/>\n        <span class=\"title\"></span>\n      </a>\n    </div>\n  </div>\n</div>\n";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/* tslint:disable */

exports.default = {
  "_id": "56002c460faa9de708f37c33",
  "node_id": null,
  "menu_label": "Home",
  "caption": null,
  "url": null,
  "children": [{
    "node_id": null,
    "menu_label": "facts",
    "caption": null,
    "url": null,
    "children": [{
      "node_id": null,
      "menu_label": "tools_offline",
      "caption": "download_these_tools",
      "url": "http://www.gapminder.org/tools-offline",
      "icon_url": "/images/icons/menu/bubchart.png",
      "$$hashKey": "object:8"
    }, {
      "node_id": null,
      "menu_label": "answers",
      "caption": "watch_Hans_Rosling_answer",
      "url": "http://www.gapminder.org/answers/",
      "icon_url": "/images/icons/menu/answers.png",
      "$$hashKey": "object:9"
    }, {
      "node_id": null,
      "menu_label": "massive_ignorance",
      "caption": "beware_the_shocking_results",
      "url": "http://www.gapminder.org/ignorance",
      "icon_url": "/images/icons/menu/igmo.png",
      "$$hashKey": "object:10"
    }, {
      "node_id": null,
      "menu_label": "data",
      "caption": "download_tables_with_stats",
      "url": "http://www.gapminder.org/data",
      "icon_url": "/images/icons/menu/data.png",
      "$$hashKey": "object:11"
    }]
  }, {
    "node_id": null,
    "menu_label": "teach",
    "caption": null,
    "url": null,
    "children": [{
      "node_id": null,
      "menu_label": "teachers",
      "caption": "see_how_teachers_use_Gapminder",
      "url": "http://www.gapminder.org/for-teachers",
      "icon_url": "/images/icons/menu/teach.png",
      "$$hashKey": "object:21"
    }, {
      "node_id": null,
      "menu_label": "slideshows",
      "caption": "download_and_edit_our_modular_slides",
      "url": "http://www.gapminder.org/presentations",
      "icon_url": "/images/icons/menu/slides.png",
      "$$hashKey": "object:22"
    }, {
      "node_id": null,
      "menu_label": "workshops",
      "caption": "let_your_students_practice_analytical_skills_without_computers",
      "url": "http://www.gapminder.org/workshops",
      "icon_url": "/images/icons/menu/workshops.png",
      "$$hashKey": "object:23"
    }, {
      "node_id": null,
      "menu_label": "test_questions",
      "caption": "boost_your_students_confidence",
      "url": "http://www.gapminder.org/test-questions",
      "icon_url": "/images/icons/menu/testquestion.png",
      "$$hashKey": "object:24"
    }]
  }, {
    "node_id": null,
    "menu_label": "about",
    "caption": null,
    "url": null,
    "children": [{
      "node_id": null,
      "menu_label": "our_organization",
      "caption": "read_about_the_Gapminder_Foundation",
      "url": "http://www.gapminder.org/about-gapminder",
      "icon_url": "/images/icons/menu/gapminder.png",
      "$$hashKey": "object:34"
    }, {
      "node_id": null,
      "menu_label": "news",
      "caption": "stay_tuned_with_our_blog",
      "url": "http://www.gapminder.org/news",
      "icon_url": "/images/icons/menu/news.png",
      "$$hashKey": "object:35"
    }, {
      "node_id": null,
      "menu_label": "faq",
      "caption": "find_answers",
      "url": "http://www.gapminder.org/faq_frequently_asked_questions",
      "icon_url": "/images/icons/menu/faq.png",
      "$$hashKey": "object:36"
    }, {
      "node_id": null,
      "menu_label": "open_license",
      "caption": "copy_change_spread_material",
      "url": "http://www.gapminder.org/free-material",
      "icon_url": "/images/icons/menu/license.png",
      "$$hashKey": "object:37"
    }]
  }]
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = [];

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BitlyService;
function BitlyService() {

  var bitlyUrl = 'https://api-ssl.bitly.com/v3/shorten';

  return {
    shortenUrl: function shortenUrl() {
      var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.URL;
      var callback = arguments[1];

      // if (!url.includes('gapminder')) {
      //   return;
      // }

      var serviceUrl = bitlyUrl + '?access_token=' + 'c5c5bdef4905a307a3a64664b1d06add09c48eb8' + '&longUrl=' + encodeURIComponent(url);

      return d3.json(serviceUrl, function (error, response) {
        var bitlyResponse = response;

        callback(bitlyResponse.status_code === 200 ? bitlyResponse.data.url : window.location);
      });
    }
  };
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var RelatedItems = function RelatedItems(placeHolder, translator, dispatch, _ref) {
  var relatedItems = _ref.relatedItems;

  var templateHtml = __webpack_require__(24);

  var template = d3.create("div");
  template.html(templateHtml);

  var itemTemplate = template.select(".related-item");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = relatedItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var relatedItem = _step.value;

      itemTemplate.clone(true).datum(relatedItem).raise().call(fillRelatedItem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  itemTemplate.remove();

  var _loop = function _loop(elem) {
    placeHolder.append(function () {
      return elem;
    });
  };

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = Array.from(template.node().children)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var elem = _step2.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  translate();
  dispatch.on("translate.relatedItems", function () {
    translate();
  });

  function translate() {
    placeHolder.select(".related-heading").each(utils.translateNode(translator));
    placeHolder.selectAll(".related-item .related-item-info .title").each(utils.translateNode(translator));
    placeHolder.selectAll(".related-item .related-item-info .subtitle").each(utils.translateNode(translator));
  }

  function fillRelatedItem(item) {
    var relatedItem = item.datum();
    var a = item.select("a");
    a.attr("href", relatedItem.link);
    a.select(".related-item-thumbnail img").attr("src", relatedItem.image);
    a.select(".related-item-info .title").attr("data-text", 'related-' + relatedItem._id + '-title');
    a.select(".related-item-info .subtitle").attr("data-text", 'related-' + relatedItem._id + '-subtitle');
  }
};

exports.default = RelatedItems;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<div class=\"related-block\">\n  <h2 class=\"heading-2 related-heading\" data-text=\"popular\"></h2>\n\n  <div class=\"related-container\">\n    <ul class=\"related-items\">\n\n      <li class=\"related-item\">\n        <a rel=\"noopener\">\n          <div class=\"related-item-thumbnail\">\n            <img>\n          </div>\n          <div class=\"related-item-info\">\n            <span class=\"title\"></span>\n            <span class=\"subtitle\"></span>\n          </div>\n        </a>\n      </li>\n\n    </ul>\n  </div>\n</div>\n";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = __webpack_require__(0);

var utils = _interopRequireWildcard(_utils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var Footer = function Footer(placeHolder, translator, dispatch) {
  var templateHtml = __webpack_require__(26);

  var template = d3.create("div");
  template.html(templateHtml);

  var _loop = function _loop(elem) {
    placeHolder.append(function () {
      return elem;
    });
  };

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = Array.from(template.node().children)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var elem = _step.value;

      _loop(elem);
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  translate();
  dispatch.on("translate.footer", function () {
    translate();
  });

  function translate() {
    placeHolder.selectAll("ul.nav li a").each(utils.translateNode(translator));
  }
};

exports.default = Footer;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-container\">\n    <div class=\"footer-container menu-holder\">\n        <div class=\"logo-gray\">\n            <img src=\"assets/images/logo-gray.png\">\n        </div>\n        <div class=\"general-menu\">\n            <ul class=\"nav\">\n                <li><a href=\"//gapminder.org/world/?use_gapminder_world\" data-text=\"old_bubble_chart\"></a></li>\n                <li><a href=\"//gapminder.org/for-teachers/\" data-text=\"for_teachers\"></a></li>\n            </ul>\n        </div>\n        <div class=\"main-menu\">\n            <ul class=\"nav\">\n                <li><a href=\"//gapminder.org/about-gapminder/\" data-text=\"about\"></a></li>\n                <li><a href=\"//gapminder.org/about-gapminder/contact/\" data-text=\"contact\"></a></li>\n                <li><a href=\"//gapminder.org/news/\" data-text=\"blog\"></a></li>\n                <li><a href=\"//gapminder.org/donations/\" data-text=\"donate\"></a></li>\n                <li><a href=\"//docs.google.com/a/gapminder.org/document/pub?id=1POd-pBMc5vDXAmxrpGjPLaCSDSWuxX6FLQgq5DhlUhM\" data-text=\"terms\"></a></li>\n                <li><a href=\"//gapminder.org/about-gapminder/press-and-media/\" data-text=\"media\"></a></li>\n                <li><a href=\"//gapminder.org/faq_frequently_asked_questions/\" data-text=\"help\"></a></li>\n                <li><a href=\"//vizabi.org/tutorials/\" data-text=\"labs\"></a></li>\n                <li><a href=\"//getsatisfaction.com/gapminder/#problem\" data-text=\"report_problem\"></a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"footer-container service-container\">\n        <div class=\"service-content\">\n            <a href=\"https://twitter.com/intent/tweet?original_referer=http%3A%2F%2Fwww.gapminder.org&related=Gapminder&text=Gapminder&tw_p=tweetbutton&url=http%3A%2F%2Fwww.gapminder.org%2Ftools%2F\"><img src=\"assets/images/footer/twitter-gray.png\"></a>\n            <a href=\"http://www.addtoany.com/add_to/facebook?linkurl=http%3A%2F%2Fwww.gapminder.org%2Ftools%2F&\"><img src=\"assets/images/footer/facebook-gray.png\"></a>\n        </div>\n    </div>\n</div>\n";

/***/ })
/******/ ]);
//# sourceMappingURL=toolspage.js.map