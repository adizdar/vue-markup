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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pino = __webpack_require__(14);

var _pino2 = _interopRequireDefault(_pino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const l = (0, _pino2.default)({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

exports.default = l;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _phantomHtmlToPdf = __webpack_require__(18);

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(6);

var _server = __webpack_require__(8);

var _server2 = _interopRequireDefault(_server);

var _routes = __webpack_require__(15);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _server2.default().router(_routes2.default).listen(process.env.PORT);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dotenv = __webpack_require__(7);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(9);

var path = _interopRequireWildcard(_path);

var _bodyParser = __webpack_require__(10);

var bodyParser = _interopRequireWildcard(_bodyParser);

var _http = __webpack_require__(11);

var http = _interopRequireWildcard(_http);

var _os = __webpack_require__(1);

var os = _interopRequireWildcard(_os);

var _cookieParser = __webpack_require__(12);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _cors = __webpack_require__(13);

var _cors2 = _interopRequireDefault(_cors);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express2.default();
// import swaggerify from './swagger';
class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.use((0, _cors2.default)());
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
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = __webpack_require__(16);

var _router2 = _interopRequireDefault(_router);

var _router3 = __webpack_require__(19);

var _router4 = _interopRequireDefault(_router3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const URL_PATH = '/api';
const VERSION_ONE = '/v1';

function routes(app) {
  app.use(`${URL_PATH + VERSION_ONE}/download`, _router2.default);
  app.use(`${URL_PATH + VERSION_ONE}/save`, _router4.default);
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(17);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = express.Router().post('/ashtml', _controller2.default.asHTML).post('/asmarkdown', _controller2.default.asMarkdown).post('/aspdf', _controller2.default.asPDF);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _converter = __webpack_require__(3);

var _converter2 = _interopRequireDefault(_converter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import logger from '../../../common/logger';

/**
 * Set content type header and disposition header.
 * It is mainly used in combination with content download.
 *
 * @param { function } callback
 * @param { string } type
 * @param { string } disposition
 */
function setContentTypeWithDispositionHeader(callback, type, disposition) {
  callback.call(this, 'Content-disposition', disposition);
  callback.call(this, 'Content-type', type);
}

/**
 * Sends the raw content as response so the client can handle the state.
 */
class DownloadContentController {
  /**
   * Convert html to pdf and return the raw pdf.
   *
   * @param {object} req
   * @param {object} res
   */
  asPDF(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    _converter2.default.getPdfStreamFromHtml(html).then(stream => {
      setContentTypeWithDispositionHeader.call(res, res.setHeader, 'application/pdf;', `attachment; filename=${filename}.pdf`);

      stream.pipe(res);
      res.status(201);
    }).catch(err => {
      res.status(500).send(`A Error occured while converting: ${err}`);
    });
  }

  /**
   * TODO this method doesn't make sense the client can download the html.
   * TODO but leave it if we decide to do some styling.
   *
   * @param {object} req
   * @param {object} res
   */
  asHTML(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    setContentTypeWithDispositionHeader.call(res, res.setHeader, 'text/html; charset=UTF-8', `attachment; filename=${filename}.html`);

    res.write(html);
    res.end();
  }

  /**
   * TODO this method doesn't make sense the client can download the markdown.
   * TODO but leave it if we decide to do some styling.
   *
   * @param {object} req
   * @param {object} res
   */
  asMarkdown(req, res) {
    const markdown = req.body.markdown;
    const filename = req.body.filename || Date.now();

    if (!markdown) {
      res.status(400).send('No markdown as param send.');
    }

    setContentTypeWithDispositionHeader.call(res, res.setHeader, 'text/markdown; charset=UTF-8', `attachment; filename=${filename}.md`);

    res.write(markdown);
    res.end();
  }
}

exports.default = new DownloadContentController();

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("phantom-html-to-pdf");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var express = _interopRequireWildcard(_express);

var _controller = __webpack_require__(20);

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = express.Router().post('/ashtml', _controller2.default.asHTML).post('/asmarkdown', _controller2.default.asMarkdown).post('/aspdf', _controller2.default.asPDF);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _os = __webpack_require__(1);

var _os2 = _interopRequireDefault(_os);

var _fs = __webpack_require__(21);

var _fs2 = _interopRequireDefault(_fs);

var _converter = __webpack_require__(3);

var _converter2 = _interopRequireDefault(_converter);

var _logger = __webpack_require__(2);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Tempory directory path.
 */
const TEMP_DIR_PATH = _os2.default.tmpdir();

/**
 * Set content type header and disposition header.
 * It is mainly used in combination with content download.
 *
 * @param { function } callback
 * @param { string } type
 * @param { string } disposition
 */
function setContentTypeWithDispositionHeader(callback, type, disposition) {
  callback.call(this, 'Content-disposition', disposition);
  callback.call(this, 'Content-type', type);
}

/**
 * Manages the saving of the content and providing the save url so it can be
 * managed by the client.
 */
class SaveContentController {
  /**
   * Save data as PDF file.
   *
   * @param  {object} req
   * @param  {object} res
   */
  asPDF(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();
    const path = `${req.body.path || TEMP_DIR_PATH}/${filename}.pdf`;

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    _converter2.default.getPdfStreamFromHtml(html).then(stream => {
      const output = _fs2.default.createWriteStream(path);

      if (!output.writable) {
        res.status(403).send(`The temp direcori is not writable ${path}`);
      }

      setContentTypeWithDispositionHeader.call(res, res.setHeader, 'text/plain', `attachment; filename=${filename}.pdf`);

      stream.pipe(output);
      res.status(201).send(path);
    }).catch(err => {
      res.status(500).send(`A Error occured while converting: ${err}`);
    });
  }

  /**
   * Save data as HTML file.
   *
   * @param  {object} req
   * @param  {object} res
   */
  asHTML(req, res) {
    const html = req.body.html;
    const filename = req.body.filename || Date.now();
    const path = `${req.body.path || TEMP_DIR_PATH}/${filename}.pdf`;

    if (!html) {
      res.status(400).send('No html as param send.');
    }

    setContentTypeWithDispositionHeader.call(res, res.setHeader, 'text/html; charset=UTF-8', `attachment; filename=${filename}.html`);

    res.download(path, `${filename}.html`, () => {
      res.status(201).send(html);
    });
  }

  /**
   * Save data as Markdown file.
   *
   * @param {object} req
   * @param {object} res
   */
  asMarkdown(req, res) {
    const markdown = req.body.markdown;
    const filename = req.body.filename || Date.now();
    const path = `${req.body.path || TEMP_DIR_PATH}/${filename}.pdf`;

    if (!markdown) {
      res.status(400).send('No markdown as param send.');
    }

    setContentTypeWithDispositionHeader.call(res, res.setHeader, 'text/markdown; charset=UTF-8', `attachment; filename=${filename}.md`);

    res.download(path, `${filename}.md`, () => {
      res.status(201).send(markdown);
    });
  }
}

exports.default = new SaveContentController();

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map