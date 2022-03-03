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

/***/ "./src/pages/page6/styles6.css":
/*!*************************************!*\
  !*** ./src/pages/page6/styles6.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://lab06/./src/pages/page6/styles6.css?");

/***/ }),

/***/ "./src/pages/page6/script7.js":
/*!************************************!*\
  !*** ./src/pages/page6/script7.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles6_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles6.css */ \"./src/pages/page6/styles6.css\");\n\r\nconst story = document.createElement('story');\r\nstory.innerHTML = `\r\n        <div class=\"container\">\r\n            <article>\r\n                <h2>Into the woods</h2>\r\n                <p class=\"text-white\">\r\n                    Ulrich se dirige al bosque y encuentra la cueva. Entonces decide adentrarse a ella.\r\n                    En lo profundo encuentra <span style=\"color:black\">dos caminos.</span>\r\n                </p>\r\n            </article>\r\n            <img src=\"../../../images/cave.jpg\" alt=\"Bosque\" width=\"350\" height=\"300\">\r\n\r\n            <ul>\r\n                <li>\r\n                    <a href=\"7.html\">Derecha</a>\r\n                </li>\r\n                <li>\r\n                    <a href=\"8.html\">Izquierda</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n`\r\n\r\ndocument.body.appendChild(story);\n\n//# sourceURL=webpack://lab06/./src/pages/page6/script7.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages/page6/script7.js");
/******/ 	
/******/ })()
;