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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_first__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/first */ \"./modules/first.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/first.js":
/*!**************************!*\
  !*** ./modules/first.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   first: () => (/* binding */ first)\n/* harmony export */ });\nconst first = () => { \r\n\tconsole.log('first');\r\n\t\r\n}\n\n//# sourceURL=webpack:///./modules/first.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\nconst modal = () => {\r\n\tconst modalBtns = document.querySelectorAll('.fancyboxModal');\r\n\tconst owerlayModal = document.querySelector('.modal-overlay');\r\n\tconst width = window.innerWidth;\r\n\tconst addRemoveStyle = (el,el2, style) => {\r\n\t\tel.style.display = style;\r\n\t\tel2.style.display = style;\r\n\t};\r\n\r\n\tmodalBtns.forEach(el => {\r\n\t\tel.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tconst target = e.target;\r\n\t\t\tconst id = target.href.slice(target.href.indexOf('#'));\r\n\t\t\tif (id) {\r\n\t\t\t\tconst modal = document.querySelector(id);\r\n\t\t\t\tif ((modal.getBoundingClientRect().x + (+(window.getComputedStyle(modal).width.slice(0, -2)) / 2)) < ((width / 2) - 14)) {\r\n\t\t\t\t\tmodal.style.cssText = `\r\n\t\t\t\t\tposition:fixed;\r\n\t\t\t\t\ttop:20%;\r\n\t\t\t\t\tleft:${((width / 2) - ((window.getComputedStyle(modal).width.slice(0, -2)) / 2))}px;\r\n\t\t\t\t\tz-index:999;`;\r\n\t\t\t\t}\r\n\t\t\t\taddRemoveStyle(modal, owerlayModal, 'block');\r\n\t\t\t\t\r\n\t\t\t\twindow.addEventListener('click', (e) => {\r\n\t\t\t\t\tif(e.target.closest('.modal-close')||e.target.closest('.modal-overlay')){\r\n\t\t\t\t\t\taddRemoveStyle(modal, owerlayModal, 'none');\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\t\r\n\t\r\n};\n\n//# sourceURL=webpack:///./modules/modal.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;