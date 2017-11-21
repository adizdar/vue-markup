require('source-map-support/register')
module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pino = __webpack_require__(12);

var _pino2 = _interopRequireDefault(_pino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const l = (0, _pino2.default)({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

exports.default = l;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(4);

var _server = __webpack_require__(6);

var _server2 = _interopRequireDefault(_server);

var _routes = __webpack_require__(13);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _server2.default().router(_routes2.default).listen(process.env.PORT);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dotenv = __webpack_require__(5);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(7);

var path = _interopRequireWildcard(_path);

var _bodyParser = __webpack_require__(8);

var bodyParser = _interopRequireWildcard(_bodyParser);

var _http = __webpack_require__(9);

var http = _interopRequireWildcard(_http);

var _os = __webpack_require__(10);

var os = _interopRequireWildcard(_os);

var _cookieParser = __webpack_require__(11);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express2.default();
// import swaggerify from './swagger';
class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use((0, _cookieParser2.default)(process.env.SESSION_SECRET));
    app.use(_express2.default.static(`${root}/public`));
  }

  router(routes) {
    routes(app);
    // swaggerify(app, routes);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => _logger2.default.info(`up and running in ${"development" || 'development'} @: ${os.hostname()} on port: ${p}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
exports.default = ExpressServer;
/* WEBPACK VAR INJECTION */}.call(exports, "server/common"))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = __webpack_require__(18);

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.use('/api/v1/download', _router2.default);
}

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(19);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = express.Router().post('/ashtml', _controller2.default.asHTML).post('/asmarkdown', _controller2.default.asMarkdown).post('/aspdf', _controller2.default.asPDF);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _converter = __webpack_require__(20);

var _converter2 = _interopRequireDefault(_converter);

var _logger = __webpack_require__(1);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Private part

/**
 * Set content type header and disposition header.
 * It is mainly used in combination with content download.
 *
 * @param { function } callback
 * @param { string } type
 * @param { string } disposition
 */
function setContentTypeWithDispositionHeader(callback, type, disposition) {
  callback.call(this, 'Content-type', type);
  callback.call(this, 'Content-disposition', disposition);
}

// Export part

class DownloadContentController {
  asPDF(req, res) {
    const html = req.body.html;

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    _converter2.default.getPdfStreamFromHtml(html).then(stream => {
      res.status(201).setHeader('Content-type', 'application/pdf');
      stream.pipe(res);
    }).catch(err => {
      res.status(500).send(`A Error occured while converting: ${err}`);
    });
  }

  asHTML(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    setContentTypeWithDispositionHeader.call(res, res.setHeader, 'text/html; charset=UTF-8', `attachment; filename=${filename}.html`);

    // res.setHeader('Content-type', 'text/html; charset=UTF-8');
    // res.setHeader('Content-disposition', `attachment; filename=${filename}.html`);

    res.download(__dirname, `${filename}.html`, () => {
      res.status(201).send(html);
    });
  }

  asMarkdown(req, res) {
    const markdown = req.body.markdown;
    const filename = req.body.filename || Date.now();

    if (!markdown) {
      res.status(400).send('No markdown as param send.');
    }

    setContentTypeWithDispositionHeader.call(res, res.setHeader, 'text/markdown; charset=UTF-8', `attachment; filename=${filename}.md`);

    // res.setHeader('Content-type', 'text/markdown; charset=UTF-8');
    // res.setHeader('Content-disposition', `attachment; filename=${filename}.md`);

    res.download(__dirname, `${filename}.md`, () => {
      res.status(201).send(markdown);
    });
  }
}

exports.default = new DownloadContentController();
/* WEBPACK VAR INJECTION */}.call(exports, "server/api/controllers/downloadContent"))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phantomHtmlToPdf = __webpack_require__(21);

var _phantomHtmlToPdf2 = _interopRequireDefault(_phantomHtmlToPdf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const phantomHtmlToPdfConverter = (0, _phantomHtmlToPdf2.default)();

// Export part
class ConverterService {
  constructor(htmlToPdfConverter) {
    this.convertHtmlToPdf = htmlToPdfConverter;
  }

  getPdfStreamFromHtml(html) {
    return new Promise((resolve, reject) => {
      this.convertHtmlToPdf({ html }, (err, pdf) => {
        if (err) {
          reject(err);
        } else {
          resolve(pdf.stream);
        }
      });
    });
  }
}

exports.default = new ConverterService(phantomHtmlToPdfConverter);

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("phantom-html-to-pdf");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map