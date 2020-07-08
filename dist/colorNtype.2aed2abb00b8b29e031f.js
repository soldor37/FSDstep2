/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"colorNtype": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./Uikit/ColorNtype/ColorNtype.js","vendors~colorNtype"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./Uikit/ColorNtype/ColorNtype.scss":
/*!*************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./Uikit/ColorNtype/ColorNtype.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"../node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Bold.ttf */ \"./assets/fonts/Quicksand/Quicksand-Bold.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Bold.eot */ \"./assets/fonts/Quicksand/Quicksand-Bold.eot\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Bold.otf */ \"./assets/fonts/Quicksand/Quicksand-Bold.otf\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Bold.woff */ \"./assets/fonts/Quicksand/Quicksand-Bold.woff\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Regular.ttf */ \"./assets/fonts/Quicksand/Quicksand-Regular.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Regular.eot */ \"./assets/fonts/Quicksand/Quicksand-Regular.eot\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Regular.otf */ \"./assets/fonts/Quicksand/Quicksand-Regular.otf\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ../../assets/fonts/Quicksand/Quicksand-Regular.woff */ \"./assets/fonts/Quicksand/Quicksand-Regular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ../../assets/fonts/Montserrat/Montserrat-Regular.ttf */ \"./assets/fonts/Montserrat/Montserrat-Regular.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ../../assets/fonts/Montserrat/Montserrat-Regular.eot */ \"./assets/fonts/Montserrat/Montserrat-Regular.eot\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ../../assets/fonts/Montserrat/Montserrat-Regular.otf */ \"./assets/fonts/Montserrat/Montserrat-Regular.otf\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ../../assets/fonts/Montserrat/Montserrat-Regular.woff */ \"./assets/fonts/Montserrat/Montserrat-Regular.woff\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\n// Module\nexports.push([module.i, \".logo {\\n  width: 100%;\\n  height: 48px;\\n  margin-left: 30px;\\n  margin-top: 30px;\\n}\\n\\n@font-face {\\n  font-family: \\\"Quicksand\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \");\\n}\\n@font-face {\\n  font-family: \\\"Montserrat\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \");\\n}\\n.text-H1, .text-H2, .text-H3 {\\n  color: #1f2041;\\n}\\n\\n.text-H1 {\\n  font-family: \\\"Quicksand\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 24px;\\n}\\n\\n.text-H2 {\\n  font-family: \\\"Quicksand\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 19px;\\n}\\n\\n.text-H3 {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: bold;\\n  font-size: 12px;\\n  /* identical to box height */\\n  text-transform: uppercase;\\n}\\n\\n.text-Body {\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: normal;\\n  font-size: 14px;\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n\\n.text-types__name {\\n  color: rgba(31, 32, 65, 0.25);\\n  font-family: \\\"Montserrat\\\", sans-serif;\\n  font-style: normal;\\n  font-weight: normal;\\n  text-align: right;\\n}\\n\\n.color-dark100 {\\n  color: #1f2041;\\n}\\n.color-dark75 {\\n  color: rgba(31, 32, 65, 0.75);\\n}\\n.color-dark50 {\\n  color: rgba(31, 32, 65, 0.5);\\n}\\n.color-dark25 {\\n  color: rgba(31, 32, 65, 0.25);\\n}\\n.color-dark5 {\\n  color: rgba(31, 32, 65, 0.05);\\n}\\n.color-purple {\\n  color: #bc9cff;\\n}\\n.color-green {\\n  color: #6fcf97;\\n}\\n\\n.color-types {\\n  font-family: \\\"Quicksand\\\";\\n  font-weight: bold;\\n  font-size: 19px;\\n  line-height: 29px;\\n}\\n.color-types .color-types__bg {\\n  width: 70px;\\n  height: 70px;\\n  border-radius: 6px;\\n}\\n.color-types .color-types__hash {\\n  font-weight: normal;\\n}\\n\\nbody {\\n  margin: 0px;\\n  max-width: 1440;\\n  min-width: 320;\\n}\\n\\n.page {\\n  display: flex;\\n  justify-content: start;\\n  flex-flow: row wrap;\\n}\\n.page .text-types {\\n  max-width: 400px;\\n  display: flex;\\n  flex-direction: column;\\n  margin-top: 67px;\\n  margin-left: 435px;\\n}\\n.page .text-types .text-types__item {\\n  display: flex;\\n  flex-direction: row;\\n  margin-bottom: 50px;\\n}\\n.page .text-types .text-types__item .text-types__name {\\n  width: 10%;\\n  margin-right: 30px;\\n}\\n.page .text-types .text-types__item .text-types__inline {\\n  width: 90%;\\n}\\n.page .color-types {\\n  margin-top: 67px;\\n  margin-left: 150px;\\n}\\n.page .color-types .color-types__item {\\n  display: flex;\\n  margin-bottom: 20px;\\n  align-items: center;\\n}\\n.page .color-types .color-types__item .color-types__bg {\\n  margin-right: 40px;\\n}\\n.page .color-types .color-types__item .color-types__title {\\n  flex-flow: column;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./Uikit/ColorNtype/ColorNtype.scss?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./Uikit/ColorNtype/ColorNtype.js":
/*!****************************************!*\
  !*** ./Uikit/ColorNtype/ColorNtype.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_logo_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/logo/logo.svg */ \"./assets/logo/logo.svg\");\n/* harmony import */ var _ColorNtype_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorNtype.scss */ \"./Uikit/ColorNtype/ColorNtype.scss\");\n/* harmony import */ var _ColorNtype_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ColorNtype_scss__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\n\n//# sourceURL=webpack:///./Uikit/ColorNtype/ColorNtype.js?");

/***/ }),

/***/ "./Uikit/ColorNtype/ColorNtype.scss":
/*!******************************************!*\
  !*** ./Uikit/ColorNtype/ColorNtype.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./ColorNtype.scss */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./Uikit/ColorNtype/ColorNtype.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./Uikit/ColorNtype/ColorNtype.scss?");

/***/ }),

/***/ "./assets/fonts/Montserrat/Montserrat-Regular.eot":
/*!********************************************************!*\
  !*** ./assets/fonts/Montserrat/Montserrat-Regular.eot ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Montserrat-Regular.eot\");\n\n//# sourceURL=webpack:///./assets/fonts/Montserrat/Montserrat-Regular.eot?");

/***/ }),

/***/ "./assets/fonts/Montserrat/Montserrat-Regular.otf":
/*!********************************************************!*\
  !*** ./assets/fonts/Montserrat/Montserrat-Regular.otf ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Montserrat-Regular.otf\");\n\n//# sourceURL=webpack:///./assets/fonts/Montserrat/Montserrat-Regular.otf?");

/***/ }),

/***/ "./assets/fonts/Montserrat/Montserrat-Regular.ttf":
/*!********************************************************!*\
  !*** ./assets/fonts/Montserrat/Montserrat-Regular.ttf ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Montserrat-Regular.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Montserrat/Montserrat-Regular.ttf?");

/***/ }),

/***/ "./assets/fonts/Montserrat/Montserrat-Regular.woff":
/*!*********************************************************!*\
  !*** ./assets/fonts/Montserrat/Montserrat-Regular.woff ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Montserrat-Regular.woff\");\n\n//# sourceURL=webpack:///./assets/fonts/Montserrat/Montserrat-Regular.woff?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Bold.eot":
/*!***************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Bold.eot ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Bold.eot\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Bold.eot?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Bold.otf":
/*!***************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Bold.otf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Bold.otf\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Bold.otf?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Bold.ttf":
/*!***************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Bold.ttf ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Bold.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Bold.ttf?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Bold.woff":
/*!****************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Bold.woff ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Bold.woff\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Bold.woff?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Regular.eot":
/*!******************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Regular.eot ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Regular.eot\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Regular.eot?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Regular.otf":
/*!******************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Regular.otf ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Regular.otf\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Regular.otf?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Regular.ttf":
/*!******************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Regular.ttf ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Regular.ttf\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Regular.ttf?");

/***/ }),

/***/ "./assets/fonts/Quicksand/Quicksand-Regular.woff":
/*!*******************************************************!*\
  !*** ./assets/fonts/Quicksand/Quicksand-Regular.woff ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/Quicksand-Regular.woff\");\n\n//# sourceURL=webpack:///./assets/fonts/Quicksand/Quicksand-Regular.woff?");

/***/ }),

/***/ "./assets/logo/logo.svg":
/*!******************************!*\
  !*** ./assets/logo/logo.svg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"assets/logo.svg\");\n\n//# sourceURL=webpack:///./assets/logo/logo.svg?");

/***/ })

/******/ });