/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ \"./src/fonts/Roboto-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/RubikMarkerHatch-Regular.ttf */ \"./src/fonts/RubikMarkerHatch-Regular.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/hedgehog-svgrepo-com.svg */ \"./src/images/hedgehog-svgrepo-com.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: 'Roboto';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n@font-face {\\n  font-family: 'Rubik';\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n}\\n\\n* {\\n  font-family: 'Roboto', sans-serif;\\n  font-size: 16px;\\n}\\n\\nbody {\\n  margin: 0;\\n  padding: 0;\\n}\\n\\n.content {\\n  min-height: 100vh;\\n  height: auto;\\n  display: grid;\\n  grid-template: 120px 6fr / 1fr 7fr;\\n}\\n\\n.header {\\n  background-color: #65a30d;\\n  grid-area: 1 / 1 / 2 / 3;\\n  display: flex;\\n  justify-content: center;\\n  padding: 5px;\\n}\\n\\n.header-text {\\n  font-family: 'Rubik', 'Roboto', sans-serif;\\n  font-size: 2.8rem;\\n  color: white;\\n  align-self: center;\\n}\\n\\n.logo {\\n  width: 100px;\\n  background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n  background-repeat: no-repeat;\\n  background-position: center;\\n}\\n\\n.sidebar {\\n  background-color: #84cc16;\\n  grid-area: 2 / 1 / 3 / 2;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.sidebar .button {\\n  font-family: 'Rubik', 'Roboto', sans-serif;\\n  padding: 15px;\\n  text-align: end;\\n  color: white;\\n  font-size: 1.9rem;\\n}\\n\\n.sidebar .button:hover,\\n.sidebar .button.active {\\n  background-color: #a3e635;\\n  padding-right: 0;\\n  color: #65a30d;\\n}\\n\\n.sidebar .button:hover {\\n  color: white;\\n}\\n\\n.mainfieldcontainer {\\n  background-color: #a3e635;\\n  grid-area: 2 / 2 / 3 / 3;\\n  padding: 4% 25%;\\n}\\n\\n.mainfield {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: start;\\n  gap: 25px;\\n  padding: 25px;\\n  border: 10px dashed #65a30d;\\n}\\n\\n.card {\\n  background-color: #bef264;\\n  border: 5px solid #65a30d;\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  padding: 20px;\\n}\\n\\n.card .text {\\n  font-size: 1.3rem;\\n  color: #65a30d;\\n}\\n\\n.card .title {\\n  font-size: 1.2rem;\\n  font-weight: 700;\\n  color: white;\\n  font-style: italic;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact)\n/* harmony export */ });\nconst contact = () => {\n  const content = document.querySelector('.content');\n\n  /* main content */\n  const mainfieldContainer = document.createElement('div');\n  mainfieldContainer.classList.add('mainfieldcontainer');\n  content.appendChild(mainfieldContainer);\n\n  const mainField = document.createElement('div');\n  mainField.classList.add('mainfield');\n  mainfieldContainer.appendChild(mainField);\n\n    /* contact 1 */\n  const contactNo1 = document.createElement('div');\n  contactNo1.classList.add('card');\n  mainField.appendChild(contactNo1);\n\n  const mrduesy = document.createElement('div');\n  mrduesy.classList.add('title');\n  mrduesy.textContent = 'Mr. Duesy - Owner';\n  contactNo1.appendChild(mrduesy);\n\n  const mrduesyInfo = document.createElement('div');\n  mrduesyInfo.classList.add('text');\n  mrduesyInfo.textContent = 'Phone: 123-456-789';\n  contactNo1.appendChild(mrduesyInfo);\n\n  const mrduesyInfo2 = document.createElement('div');\n  mrduesyInfo2.classList.add('text');\n  mrduesyInfo2.textContent = 'E-mail: mr_duesy@realmail.com';\n  contactNo1.appendChild(mrduesyInfo2);\n\n  /* contact 2 */\n  const contactNo2 = document.createElement('div');\n  contactNo2.classList.add('card');\n  mainField.appendChild(contactNo2);\n\n  const mrsduesy = document.createElement('div');\n  mrsduesy.classList.add('title');\n  mrsduesy.textContent = 'Mrs. Duesy - Secretary';\n  contactNo2.appendChild(mrsduesy);\n\n  const mrsduesyInfo = document.createElement('div');\n  mrsduesyInfo.classList.add('text');\n  mrsduesyInfo.textContent = 'Phone: 123-456-788';\n  contactNo2.appendChild(mrsduesyInfo);\n\n  const mrsduesyInfo2 = document.createElement('div');\n  mrsduesyInfo2.classList.add('text');\n  mrsduesyInfo.textContent = 'E-mail: mrs_duesy@realmail.com';\n  contactNo2.appendChild(mrsduesyInfo2);\n  \n  /* contact 3 */\n  const contactNo3 = document.createElement('div');\n  contactNo3.classList.add('card');\n  mainField.appendChild(contactNo3);\n\n  const lilduesy = document.createElement('div');\n  lilduesy.classList.add('title');\n  lilduesy.textContent = 'Duesy Jr. - Cook';\n  contactNo3.appendChild(lilduesy);\n\n  const lilduesyInfo = document.createElement('div');\n  lilduesyInfo.classList.add('text');\n  lilduesyInfo.textContent = 'Phone: 123-456-787s';\n  contactNo3.appendChild(lilduesyInfo);\n  \n  const lilduesyInfo2 = document.createElement('div');\n  lilduesyInfo2.classList.add('text');\n  lilduesyInfo2.textContent = 'E-mail: jr_duesy@realmail.com';\n  contactNo3.appendChild(lilduesyInfo2); \n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = () => {\n  const content = document.querySelector('.content');\n\n  /* main content */\n  const mainfieldContainer = document.createElement('div');\n  mainfieldContainer.classList.add('mainfieldcontainer');\n  content.appendChild(mainfieldContainer);\n\n  const mainField = document.createElement('div');\n  mainField.classList.add('mainfield');\n  mainfieldContainer.appendChild(mainField);\n\n  /* review card */\n  const reviewCard = document.createElement('div');\n  reviewCard.classList.add('card');\n  mainField.appendChild(reviewCard);\n\n  const reviewText = document.createElement('div');\n  reviewText.classList.add('text');\n  reviewText.textContent = \"'I've had a splendid time dining at this very real restaurant.\";\n  reviewCard.appendChild(reviewText);\n\n  const reviewText2 = document.createElement('div');\n  reviewText2.classList.add('text');\n  reviewText2.textContent = \"Duesy is the best restaurant owner!'\";\n  reviewCard.appendChild(reviewText2);\n\n  const reviewPerson = document.createElement('div');\n  reviewPerson.classList.add('title');\n  reviewPerson.textContent = \"Suzy - A customer who is very real as well.\";\n  reviewCard.appendChild(reviewPerson);\n\n  /* working hours card */\n  const timeCard = document.createElement('div');\n  timeCard.classList.add('card');\n  mainField.appendChild(timeCard);\n  const timeTitle = document.createElement('div');\n  timeTitle.classList.add('title');\n  timeTitle.textContent = \"Working hours:\";\n  timeCard.appendChild(timeTitle);\n  const timeText = document.createElement('div');\n  timeText.classList.add('text');\n  timeText.textContent = 'Monday - Thursday: 6am - 10pm';\n  timeCard.appendChild(timeText);\n  const timeText2 = document.createElement('div');\n  timeText2.classList.add('text');\n  timeText2.textContent = 'Friday & Saturday: 6am - 12pm';\n  timeCard.appendChild(timeText2);\n\n  /* location */\n  const locationCard = document.createElement('div');\n  locationCard.classList.add('card');\n  mainField.appendChild(locationCard);\n  const locTitle = document.createElement('div');\n  locTitle.classList.add('title');\n  locTitle.textContent = \"Location:\";\n  locationCard.appendChild(locTitle);\n  const locText = document.createElement('div');\n  locText.classList.add('text');\n  locText.textContent = \"1234 Somewhere Dr., RealState, Earth 12345\";\n  locationCard.appendChild(locText);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nconst maincontainer = document.querySelector('#content');\n\nconst content = document.createElement('div');\ncontent.classList.add('content');\nmaincontainer.appendChild(content);\n\n/* header */\nconst header = document.createElement('div');\nheader.classList.add('header');\ncontent.appendChild(header);\n\nconst logo = document.createElement('div');\nlogo.classList.add('logo');\nheader.appendChild(logo);\n\nconst headerText = document.createElement('div');\nheaderText.classList.add('header-text');\nheaderText.textContent = \"Duesy's very real restaurant\";\nheader.appendChild(headerText);\n\nconst logo2 = document.createElement('div');\nlogo2.classList.add('logo');\nheader.appendChild(logo2);\n\n/* sidebar */\nconst sidebar = document.createElement('div');\nsidebar.classList.add('sidebar');\ncontent.appendChild(sidebar);\n\nconst homeButton = document.createElement('div');\nhomeButton.classList.add('homebutton');\nhomeButton.classList.add('button');\nhomeButton.textContent = \"Home\";\nsidebar.appendChild(homeButton);\n\nconst menuButton = document.createElement('div');\nmenuButton.classList.add('menubutton');\nmenuButton.classList.add('button');\nmenuButton.textContent = \"Menu\";\nsidebar.appendChild(menuButton);\n\nconst contactButton = document.createElement('div');\ncontactButton.classList.add('contactbutton');\ncontactButton.classList.add('button');\ncontactButton.textContent = \"Contact\";\nsidebar.appendChild(contactButton);\n\n(0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\nhomeButton.classList.add('active')\n\nhomeButton.addEventListener('click', () => {\n  homeButton.classList.add('active');\n  contactButton.classList.remove('active');\n  menuButton.classList.remove('active');\n  content.removeChild(content.lastChild);\n  (0,_home__WEBPACK_IMPORTED_MODULE_0__.home)();\n});\ncontactButton.addEventListener('click', () => {\n  contactButton.classList.add('active');\n  homeButton.classList.remove('active');\n  menuButton.classList.remove('active');\n  content.removeChild(content.lastChild);\n  (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contact)();\n});\nmenuButton.addEventListener('click', () => {\n  menuButton.classList.add('active');\n  contactButton.classList.remove('active');\n  homeButton.classList.remove('active');\n  content.removeChild(content.lastChild);\n  (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menu)();\n})\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\nconst menu = () => {\n  const content = document.querySelector('.content');\n\n  /* main content */\n  const mainfieldContainer = document.createElement('div');\n  mainfieldContainer.classList.add('mainfieldcontainer');\n  content.appendChild(mainfieldContainer);\n\n  const mainField = document.createElement('div');\n  mainField.classList.add('mainfield');\n  mainfieldContainer.appendChild(mainField);\n\n  /* recipe1 */\n  const recipeCard1 = document.createElement('div');\n  recipeCard1.classList.add('card');\n  mainField.appendChild(recipeCard1);\n\n  const recipeTitle1 = document.createElement('div');\n  recipeTitle1.classList.add('title');\n  recipeTitle1.textContent = \"Canary - $7.36\";\n  recipeCard1.appendChild(recipeTitle1);\n\n  const recipeText1 = document.createElement('div');\n  recipeText1.classList.add('text');\n  recipeText1.textContent = \"Fresh slices of banana with Nutella\";\n  recipeCard1.appendChild(recipeText1);\n\n  /* recipe2 */\n  const recipeCard2 = document.createElement('div');\n  recipeCard2.classList.add('card');\n  mainField.appendChild(recipeCard2);\n\n  const recipeTitle2 = document.createElement('div');\n  recipeTitle2.classList.add('title');\n  recipeTitle2.textContent = \"Razz Dream - $9.99\";\n  recipeCard2.appendChild(recipeTitle2);\n\n  const recipeText2 = document.createElement('div');\n  recipeText2.classList.add('text');\n  recipeText2.textContent = \"Raspberries, cream cheese, razz drizzle topped with ABC'auce\";\n  recipeCard2.appendChild(recipeText2);\n\n  /* recipe3 */\n  const recipeCard3 = document.createElement('div');\n  recipeCard3.classList.add('card');\n  mainField.appendChild(recipeCard3);\n\n  const recipeTitle3 = document.createElement('div');\n  recipeTitle3.classList.add('title');\n  recipeTitle3.textContent = \"Last Wednesday - $10.46\";\n  recipeCard3.appendChild(recipeTitle3);\n\n  const recipeText3 = document.createElement('div');\n  recipeText3.classList.add('text');\n  recipeText3.textContent = \"Egg, bacon, swiss cheese, mushroom, dijon mustard & spinach\";\n  recipeCard3.appendChild(recipeText3);\n\n  /* recipe4 */\n  const recipeCard4 = document.createElement('div');\n  recipeCard4.classList.add('card');\n  mainField.appendChild(recipeCard4);\n\n  const recipeTitle4 = document.createElement('div');\n  recipeTitle4.classList.add('title');\n  recipeTitle4.textContent = \"Chicken Bacon Ranch - $10.46\";\n  recipeCard4.appendChild(recipeTitle4);\n\n  const recipeText4 = document.createElement('div');\n  recipeText4.classList.add('text');\n  recipeText4.textContent = \"Chopped chicken, bacon, sharp cheddar, tomato, spinach, ranch\";\n  recipeCard4.appendChild(recipeText4);\n\n  /* recipe5 */\n  const recipeCard5 = document.createElement('div');\n  recipeCard5.classList.add('card');\n  mainField.appendChild(recipeCard5);\n\n  const recipeTitle5 = document.createElement('div');\n  recipeTitle5.classList.add('title');\n  recipeTitle5.textContent = \"Bacon Cheeseburger - $5.55\";\n  recipeCard5.appendChild(recipeTitle5);\n\n  const recipeText5 = document.createElement('div');\n  recipeText5.classList.add('text');\n  recipeText5.textContent = \"Beef, cheddar cheese, avocado, ranch sauce\";\n  recipeCard5.appendChild(recipeText5);\n\n  /* recipe6 */\n  const recipeCard6 = document.createElement('div');\n  recipeCard6.classList.add('card');\n  mainField.appendChild(recipeCard6);\n\n  const recipeTitle6 = document.createElement('div');\n  recipeTitle6.classList.add('title');\n  recipeTitle6.textContent = \"Chipotle Veggie Burger - $5.55\";\n  recipeCard6.appendChild(recipeTitle6);\n\n  const recipeText6 = document.createElement('div');\n  recipeText6.classList.add('text');\n  recipeText6.textContent = \"Veggie patty, avocado, pickled red onions, tomato, chipotle aioli\";\n  recipeCard6.appendChild(recipeText6);\n\n  /* recipe7 */\n  const recipeCard7 = document.createElement('div');\n  recipeCard7.classList.add('card');\n  mainField.appendChild(recipeCard7);\n\n  const recipeTitle7 = document.createElement('div');\n  recipeTitle7.classList.add('title');\n  recipeTitle7.textContent = \"Strawberry Short Crepe - $10.46\";\n  recipeCard7.appendChild(recipeTitle7);\n\n  const recipeText7 = document.createElement('div');\n  recipeText7.classList.add('text');\n  recipeText7.textContent = \"Angel food cake, strawberries, ABC'ause & graham crackers\";\n  recipeCard7.appendChild(recipeText7);\n\n  /* recipe8 */\n  const recipeCard8 = document.createElement('div');\n  recipeCard8.classList.add('card');\n  mainField.appendChild(recipeCard8);\n\n  const recipeTitle8 = document.createElement('div');\n  recipeTitle8.classList.add('title');\n  recipeTitle8.textContent = \"Crepe Pizza - $9.99\";\n  recipeCard8.appendChild(recipeTitle8);\n\n  const recipeText8 = document.createElement('div');\n  recipeText8.classList.add('text');\n  recipeText8.textContent = \"Mozzarella, pepperoni, marinara & additional 2 ingredients of your choice\";\n  recipeCard8.appendChild(recipeText8);\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/fonts/Roboto-Regular.ttf":
/*!**************************************!*\
  !*** ./src/fonts/Roboto-Regular.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"fc2b5060f7accec5cf74.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/Roboto-Regular.ttf?");

/***/ }),

/***/ "./src/fonts/RubikMarkerHatch-Regular.ttf":
/*!************************************************!*\
  !*** ./src/fonts/RubikMarkerHatch-Regular.ttf ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"0526a43151bfc38557b5.ttf\";\n\n//# sourceURL=webpack://restaurant-page/./src/fonts/RubikMarkerHatch-Regular.ttf?");

/***/ }),

/***/ "./src/images/hedgehog-svgrepo-com.svg":
/*!*********************************************!*\
  !*** ./src/images/hedgehog-svgrepo-com.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8d1a73cd4e8a716563b2.svg\";\n\n//# sourceURL=webpack://restaurant-page/./src/images/hedgehog-svgrepo-com.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;