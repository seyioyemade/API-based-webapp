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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  font-size: 62.5%;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  font-family: Arial, Helvetica, sans-serif;\\r\\n  font-size: 1.6rem;\\r\\n}\\r\\n\\r\\nheader,\\r\\nheader ul {\\r\\n  display: flex;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 2rem 5rem;\\r\\n}\\r\\n\\r\\nul {\\r\\n  gap: 4rem;\\r\\n}\\r\\n\\r\\nli {\\r\\n  list-style: none;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: rgb(36, 36, 36);\\r\\n}\\r\\n\\r\\na:hover {\\r\\n  text-decoration: underline;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 2.1rem;\\r\\n}\\r\\n\\r\\nh2 {\\r\\n  font-size: 1.8rem;\\r\\n  font-weight: 600;\\r\\n  margin-bottom: 2rem;\\r\\n}\\r\\n\\r\\nheader img {\\r\\n  width: 10%;\\r\\n}\\r\\n\\r\\n.home {\\r\\n  display: grid;\\r\\n  grid-template-columns: 25% 25% 25%;\\r\\n  grid-template-rows: 1fr 1fr 1fr 1fr;\\r\\n  grid-template-areas:\\r\\n    'card card card'\\r\\n    'card card card'\\r\\n    'card card card'\\r\\n    'card card card';\\r\\n  justify-content: center;\\r\\n  gap: 3rem;\\r\\n  padding: 5rem 0 9rem;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  border: 1px solid black;\\r\\n  border-radius: 15px;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n  padding: 1.5rem;\\r\\n}\\r\\n\\r\\n.movie-title {\\r\\n  margin-top: 2rem;\\r\\n}\\r\\n\\r\\n.like-btn {\\r\\n  position: relative;\\r\\n  margin-top: 1.5rem;\\r\\n  width: 10%;\\r\\n}\\r\\n\\r\\n.genre {\\r\\n  margin-top: 1.5rem;\\r\\n}\\r\\n\\r\\n.status {\\r\\n  margin-top: 1.5rem;\\r\\n}\\r\\n\\r\\n.comment-btn {\\r\\n  margin-top: 1.5rem;\\r\\n  padding: 1rem;\\r\\n  background-color: #fff;\\r\\n  border-radius: 4px;\\r\\n}\\r\\n\\r\\n.comment-btn:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: aqua;\\r\\n  transform: scale(1.15);\\r\\n  transition: 0.5s;\\r\\n}\\r\\n\\r\\ninput,\\r\\ntextarea {\\r\\n  display: block;\\r\\n  border: 1px solid black;\\r\\n  padding: 0.5rem;\\r\\n}\\r\\n\\r\\n.popup-cont {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  z-index: 1;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100vh;\\r\\n  background-color: #ebebeb79;\\r\\n  backdrop-filter: blur(4px);\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  border: 2px solid black;\\r\\n  width: 50rem;\\r\\n  padding: 2rem 1rem;\\r\\n  height: 100vh;\\r\\n  overflow-y: auto;\\r\\n}\\r\\n\\r\\n.popup > div:nth-child(1) {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: end;\\r\\n}\\r\\n\\r\\n.popup > div:nth-child(2) {\\r\\n  text-align: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.movie-img,\\r\\n.more-info > li,\\r\\nh1 {\\r\\n  margin-bottom: 1rem;\\r\\n}\\r\\n\\r\\n.comments,\\r\\n.comment-form {\\r\\n  margin-top: 3rem;\\r\\n}\\r\\n\\r\\n.close {\\r\\n  background: none;\\r\\n  border: none;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\ninput,\\r\\ninput::placeholder,\\r\\ntextarea,\\r\\ntextarea::placeholder {\\r\\n  color: #000;\\r\\n  font-weight: 700;\\r\\n}\\r\\n\\r\\ntextarea {\\r\\n  margin: 2rem 0 1rem;\\r\\n}\\r\\n\\r\\n.submit-cont {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n}\\r\\n\\r\\n.material-symbols-outlined {\\r\\n  font-size: 30px;\\r\\n}\\r\\n\\r\\n.footer {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.footer hr {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.footer p {\\r\\n  padding: 3rem 5rem;\\r\\n}\\r\\n\\r\\n@media (max-width: 1000px) {\\r\\n  .home {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(2, 45%);\\r\\n    grid-template-rows: repeat(6, 1fr);\\r\\n    grid-template-areas:\\r\\n      'card card'\\r\\n      'card card'\\r\\n      'card card'\\r\\n      'card card'\\r\\n      'card card'\\r\\n      'card card';\\r\\n    justify-content: center;\\r\\n    gap: 2rem;\\r\\n  }\\r\\n\\r\\n  .popup {\\r\\n    width: 40rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n@media (max-width: 600px) {\\r\\n  .home {\\r\\n    display: grid;\\r\\n    grid-template-columns: 90%;\\r\\n    grid-template-rows: repeat(12, 1fr);\\r\\n    grid-template-areas:\\r\\n      'card''card''card'\\r\\n      'card''card''card'\\r\\n      'card''card''card'\\r\\n      'card''card''card';\\r\\n    justify-content: center;\\r\\n  }\\r\\n\\r\\n  .popup {\\r\\n    width: 35rem;\\r\\n  }\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://api-based-webapp/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://api-based-webapp/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://api-based-webapp/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo.png */ \"./src/assets/logo.png\");\n/* harmony import */ var _modules_movie_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/movie-list.js */ \"./src/modules/movie-list.js\");\n\r\n\r\n\r\n\r\ndocument.querySelector('#logo').src = _assets_logo_png__WEBPACK_IMPORTED_MODULE_1__;\r\n\r\n(0,_modules_movie_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n\n\n//# sourceURL=webpack://api-based-webapp/./src/index.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"commentsData\": () => (/* binding */ commentsData)\n/* harmony export */ });\n\r\nconst commentsData = async (ul, id) => {\r\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/l9F9LbmS8FpilLXhSiV3/comments?item_id=item${id}`);\r\n  const jsonData = await response.json();\r\n\r\n  jsonData.forEach((item) => {\r\n    const li = `${item.creation_date} ${item.username}: ${item.comment}`;\r\n    ul.innerHTML += li; \r\n  });\r\n};\r\n\r\n\r\n// export const postData = async (url = '', data = {}) => {\r\n//   const response = await fetch(url, {\r\n//     method: 'POST',\r\n//     headers: {\r\n//       'Content-Type': 'application/json',\r\n//     },\r\n//     body: JSON.stringify(data),\r\n//   });\r\n//   return response.json();\r\n// };\r\n\r\n\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/display-popup.js":
/*!**************************************!*\
  !*** ./src/modules/display-popup.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"close\": () => (/* binding */ close),\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comments.js */ \"./src/modules/comments.js\");\n\r\n\r\nconst mainContainer = document.querySelector('main');\r\nconst popupContainer = document.createElement('section');\r\npopupContainer.className = 'popup-cont';\r\n\r\nconst display = (img, title, genres, lang, days, time, rating, sts, id) => {\r\n  const section = document.createElement('section');\r\n  section.className = 'popup';\r\n\r\n  const closeDiv = document.createElement('div');\r\n  const closeBtn = document.createElement('button');\r\n  closeBtn.classList.add('material-symbols-outlined', 'close');\r\n  closeBtn.textContent = 'close'\r\n  closeDiv.appendChild(closeBtn);\r\n  const allDetailsCont = document.createElement('div');\r\n  const movieImgCont = document.createElement('div');\r\n  movieImgCont.className = 'movie-img';\r\n  const movieImg = document.createElement('img');\r\n  movieImg.src = img;\r\n  movieImg.alt = 'movie-img';\r\n  movieImgCont.appendChild(movieImg);\r\n  const movieInfo = document.createElement('div');\r\n  const movTitle = document.createElement('h1');\r\n  movTitle.textContent = title;\r\n  const infoLists = document.createElement('ul');\r\n  infoLists.className = 'more-info';\r\n  infoLists.innerHTML = `<li>Genre: ${genres}</li>\r\n  <li>Language: ${lang}</li>\r\n  <li>Schedule: ${days}, ${time}</li>\r\n  <li>Rating: ${rating}</li>\r\n  <li>Status: ${sts}</li>`;\r\n  movieInfo.appendChild(infoLists);\r\n  const commentsCont = document.createElement('div');\r\n  commentsCont.className = 'comments';\r\n  const commentsTitle = document.createElement('h2');\r\n  commentsTitle.textContent = 'Comments';\r\n  const commentsList = document.createElement('ul');\r\n  commentsList.className = 'comments-list';\r\n  (0,_comments_js__WEBPACK_IMPORTED_MODULE_0__.commentsData)(commentsList, id);\r\n  commentsCont.append(commentsTitle, commentsList);\r\n  const formCont = document.createElement('div');\r\n  formCont.className = 'comment-form';\r\n  const formTitle = document.createElement('h2');\r\n  formTitle.textContent = 'Add a comment';\r\n  const form = document.createElement('form');\r\n  const input = document.createElement('input');\r\n  input.id = 'name'\r\n  input.setAttribute(\"type\", \"text\");\r\n  input.setAttribute(\"name\", \"name\");\r\n  input.setAttribute(\"placeholder\", \"Your name\");\r\n  const textarea = document.createElement('textarea');\r\n  textarea.id = 'insights'\r\n  textarea.setAttribute(\"name\", \"insights\");\r\n  textarea.setAttribute(\"cols\", \"30\");\r\n  textarea.setAttribute(\"rows\", \"10\");\r\n  textarea.setAttribute(\"placeholder\", \"Your insights\");\r\n  const submitCont = document.createElement('div');\r\n  submitCont.className = 'submit-cont';\r\n  const submit = document.createElement('button');\r\n  submit.textContent = 'Comment';\r\n  submit.setAttribute(\"type\", \"submit\");\r\n  submit.className = 'comment-btn';\r\n  submitCont.appendChild(submit);\r\n  form.append(input, textarea, submitCont);\r\n  formCont.append(formTitle, form);\r\n  allDetailsCont.append(movieImgCont, movieInfo, commentsCont, formCont);\r\n\r\n  section.append(closeDiv, allDetailsCont);\r\n  popupContainer.appendChild(section);\r\n  mainContainer.insertBefore(popupContainer, mainContainer.firstElementChild);\r\n\r\n};\r\n\r\nconst close = () => {\r\n  const closeBtn = document.querySelector('.close');\r\n\r\n  closeBtn.addEventListener('click', () => {\r\n    popupContainer.innerHTML = '';\r\n    popupContainer.remove();\r\n  });\r\n};\r\n\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/display-popup.js?");

/***/ }),

/***/ "./src/modules/movie-list.js":
/*!***********************************!*\
  !*** ./src/modules/movie-list.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _assets_Like_emoji_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/Like-emoji.png */ \"./src/assets/Like-emoji.png\");\n/* harmony import */ var _display_popup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display-popup.js */ \"./src/modules/display-popup.js\");\n\r\n\r\n// import {commentsData} from './comments.js';\r\n\r\nconst createList = async () => {\r\n  const container = document.querySelector('.home');\r\n\r\n  const response = await fetch('https://api.tvmaze.com/shows');\r\n  const data = await response.json();\r\n\r\n  const filtered = data.filter((display) => display.id <= 12);\r\n\r\n  filtered.forEach((content) => {\r\n    const movieCard = document.createElement('div');\r\n    movieCard.className = 'card';\r\n\r\n    const picture = document.createElement('img');\r\n    picture.alt = 'Movie photo';\r\n    picture.src = content.image.medium;\r\n    movieCard.appendChild(picture);\r\n\r\n    const title = document.createElement('h3');\r\n    title.className = 'movie-title';\r\n    title.textContent = `${content.name}`;\r\n    movieCard.appendChild(title);\r\n\r\n    const like = document.createElement('img');\r\n    like.alt = 'Like button';\r\n    like.className = 'like-btn';\r\n    like.src = _assets_Like_emoji_png__WEBPACK_IMPORTED_MODULE_0__;\r\n    movieCard.appendChild(like);\r\n\r\n    const genre = document.createElement('p');\r\n    genre.className = 'genre';\r\n    genre.textContent = `Genre: ${content.genres}`;\r\n    movieCard.appendChild(genre);\r\n\r\n    const status = document.createElement('p');\r\n    status.className = 'status';\r\n    status.textContent = `Status: ${content.status}`;\r\n    movieCard.appendChild(status);\r\n\r\n    const comment = document.createElement('button');\r\n    comment.className = 'comment-btn';\r\n    comment.textContent = 'Comments';\r\n\r\n    comment.addEventListener('click', () => {\r\n      (0,_display_popup_js__WEBPACK_IMPORTED_MODULE_1__.display)(content.image.medium, content.name, content.genres, content.language,\r\n        content.schedule.days[0], content.schedule.time, content.rating.average, content.status, content.id);\r\n\r\n      (0,_display_popup_js__WEBPACK_IMPORTED_MODULE_1__.close)();\r\n      // console.log(content.id)\r\n\r\n      // commentsData(content.id);\r\n    });\r\n\r\n    movieCard.appendChild(comment);\r\n\r\n    container.appendChild(movieCard);\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createList);\n\n//# sourceURL=webpack://api-based-webapp/./src/modules/movie-list.js?");

/***/ }),

/***/ "./src/assets/Like-emoji.png":
/*!***********************************!*\
  !*** ./src/assets/Like-emoji.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"8efe4118edfc42a1b050.png\";\n\n//# sourceURL=webpack://api-based-webapp/./src/assets/Like-emoji.png?");

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"3b1e989c0b4fdf54bf08.png\";\n\n//# sourceURL=webpack://api-based-webapp/./src/assets/logo.png?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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