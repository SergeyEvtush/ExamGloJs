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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/forms */ \"./modules/forms.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_mainMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/mainMenu */ \"./modules/mainMenu.js\");\n/* harmony import */ var _modules_scrollingArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/scrollingArrow */ \"./modules/scrollingArrow.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_mainMenu__WEBPACK_IMPORTED_MODULE_2__.mainMenu)();\r\n(0,_modules_scrollingArrow__WEBPACK_IMPORTED_MODULE_3__.scrollingArrow)();\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__.modal)();\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.sendForm)({\r\n\tformId: 'form[name=form-callback]',\r\n},\"https://jsonplaceholder.typicode.com/posts\");\r\n(0,_modules_forms__WEBPACK_IMPORTED_MODULE_0__.sendForm)({\r\n\tformId: 'form[name=form-feedback]',\r\n},\"https://jsonplaceholder.typicode.com/posts\");\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/forms.js":
/*!**************************!*\
  !*** ./modules/forms.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   sendForm: () => (/* binding */ sendForm)\n/* harmony export */ });\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../modules/helpers */ \"./modules/helpers.js\");\n\r\n//https://jsonplaceholder.typicode.com/posts\r\n\r\nconst sendForm = ({ formId, someElem = [] },url) => {\r\n\tconst form = document.querySelector(formId);\r\n\tconst formContainer = document.querySelector(`#${formId.slice(formId.indexOf('-')+1,formId.indexOf(']'))}`);\r\n\tconst statusBlock = document.querySelector('#responseMessage');\r\n\tconst modalContent = document.querySelector('.modal-content');\r\n\t\r\n\tconst message = {\r\n\t\tloadText: 'Load...',\r\n\t\terrorText: 'Error...',\r\n\t\tsuccessText: 'Success'\r\n\t};\r\n\t\r\n\r\n\tconst submitForm = () => {\r\n\t\tconst formElements = form.querySelectorAll('input');\r\n\t\tconst formData = new FormData(form);\r\n\t\tconst formBody = {};\r\n\t\tconst bool = true;\r\n\t\tconst val = (0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.validationForm)(formElements, _modules_helpers__WEBPACK_IMPORTED_MODULE_0__.validations);\r\n\t\t\r\n\t\t\r\n\t\tconst nameInputs = {\r\n\t\t\t\"fio\": \"Фамилия Имя\",\r\n\t\t\t\"tel\":\"Номер телефона\"\r\n\t\t}\r\n\t\t\r\n\t\t\r\n\r\n\r\n\t\t\r\n\r\n\t\tformData.forEach((key, val) => {\r\n\t\t\tformBody[key] = val;\r\n\t\t});\r\n\r\n\t\tsomeElem.forEach(el => {\r\n\t\t\tconst element = document.getElementById(el.id)\r\n\t\t\tif (el.type === \"block\") {\r\n\t\t\t\tformBody[el.id] = element.textContent;\r\n\t\t\t}\r\n\t\t\telse if (el.type === \"input\") {\r\n\t\t\t\tformBody[el.id] = element.value;\r\n\t\t\t}\r\n\t\t});\r\n\t\tif (statusBlock) {\r\n\t\t\tconst messageBtn = document.querySelector('.fancyClose');\r\n\t\t\tconst owerlayModal = document.querySelector('.modal-overlay');\r\n\t\t\tmessageBtn.addEventListener('click', (e) => { \r\n\t\t\t\te.preventDefault();\r\n\t\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.addRemoveStyle)(statusBlock, owerlayModal, 'none');\r\n\t\t\t\t\r\n\t\t\t});\r\n\t\t\t\r\n\t\t }\r\n\t\t\r\n\t\t\r\n\r\n\t\tif (val.some(el => el.hasOwnProperty(bool))) {\r\n\t\t\tconst arrayErrors = val.filter(el => el.hasOwnProperty(bool));\r\n\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.findModal)(statusBlock, window.innerWidth);\r\n\t\t\tmodalContent.innerHTML = '';\r\n\t\t\tstatusBlock.style.display = 'block';\r\n\t\t\tmodalContent.classList.add('error');\r\n\t\t\tform.style.display = 'none';\r\n\t\t\tarrayErrors.forEach(elem => { \r\n\t\t\t\tmodalContent.insertAdjacentHTML('afterbegin', ` Ошибка ввода данных в input ${elem[bool]===\"fio\"?nameInputs[\"fio\"]:nameInputs[\"tel\"]}`);\r\n\t\t\t\tsetTimeout(() => {\r\n\t\t\t\t\tstatusBlock.style.display = 'none';\r\n\t\t\t\t\tform.style.display = 'block';\r\n\t\t\t\t\tmodalContent.classList.remove('error');\r\n\t\t\t\t\tmodalContent.innerHTML = '';\r\n\t\t\t\t}, 2000);\r\n\t\t\t}); \r\n\t\t\t\r\n\t\t} else {  \r\n\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.sendData)(url, formBody, modalContent, message);\r\n\t\t\tformContainer.style.display = 'none';\r\n\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.findModal)(statusBlock, window.innerWidth);\r\n\t\t\tmodalContent.innerHTML = '';\r\n\t\t\tstatusBlock.style.display = 'block';\r\n\t\t\tmodalContent.classList.add('error');\r\n\t\t } \r\n\t\t\r\n\t\tformElements.forEach(el => {\r\n\t\t\tel.value = '';\r\n\t\t});\r\n\t};\r\n\r\n\ttry {\r\n\t\tif (!form) {\r\n\t\t\tthrow new Error('Ошибка нет формы');\r\n\t\t}\r\n\t\tform.addEventListener('submit', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\t\tsubmitForm();\r\n\t\t});\r\n\t\t\r\n\t} catch (error) {\r\n\t\tconsole.log(error.message);\r\n\t}\r\n};\n\n//# sourceURL=webpack:///./modules/forms.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addRemoveStyle: () => (/* binding */ addRemoveStyle),\n/* harmony export */   animate: () => (/* binding */ animate),\n/* harmony export */   findModal: () => (/* binding */ findModal),\n/* harmony export */   getData: () => (/* binding */ getData),\n/* harmony export */   getNameOfBlock: () => (/* binding */ getNameOfBlock),\n/* harmony export */   isError: () => (/* binding */ isError),\n/* harmony export */   scrollingToView: () => (/* binding */ scrollingToView),\n/* harmony export */   sendData: () => (/* binding */ sendData),\n/* harmony export */   validationForm: () => (/* binding */ validationForm),\n/* harmony export */   validations: () => (/* binding */ validations),\n/* harmony export */   visiblityElem: () => (/* binding */ visiblityElem)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n\tlet start = performance.now();\r\n \r\n\trequestAnimationFrame(function animate(time) {\r\n\t\t// timeFraction изменяется от 0 до 1\r\n\t\tlet timeFraction = (time - start) / duration;\r\n\t\tif (timeFraction > 1) timeFraction = 1;\r\n \r\n\t\t// вычисление текущего состояния анимации\r\n\t\tlet progress = timing(timeFraction);\r\n \r\n\t\tdraw(progress); // отрисовать её\r\n \r\n\t\tif (timeFraction < 1) {\r\n\t\t\trequestAnimationFrame(animate);\r\n\t\t}\r\n \r\n\t});\r\n};\r\n\r\nconst validations = {\r\n\t\"tel\": (elem) => {\r\n\t\tlet bool;\r\n\t\tif (/^[\\d\\+][\\d\\(\\)\\ -]{4,14}\\d$/g.test(elem.value) && elem.value !== '') { //валидация на номера телефона только чисел\r\n\t\t\tbool = isError(elem, false);\r\n\t\t} else {\r\n\t\t\tbool = isError(elem, true);\r\n\t\t}\r\n\t\treturn bool;\r\n\t},\r\n\t\"user_email\": (elem) => {\r\n\t\tlet bool;\r\n\t\tif (/^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/g.test(elem.value) && elem.value !== '') { //валидация на ввод email\r\n\t\t\tbool = isError(elem, false);\r\n\t\t} else {\r\n\t\t\tbool = isError(elem, true);\r\n\t\t}\r\n\t\treturn bool;\r\n\t},\r\n\t\"fio\": (elem) => {\r\n\t\tlet bool;\r\n\t\tif (/(^[A-Z]{1}[a-z]{1,14} [A-Z]{1}[a-z]{1,14}$)|(^[А-Я]{1}[а-я]{1,14} [А-Я]{1}[а-я]{1,14}$)/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел\r\n\t\t\tbool = isError(elem, false);\r\n\t\t} else {\r\n\t\t\tbool = isError(elem, true);\r\n\t\t}\r\n\t\treturn bool;\r\n\t},\r\n\t\"message\": (elem) => {\r\n\t\tlet bool;\r\n\t\tif (/[^а-яА-Я]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только кирилицы\r\n\t\t\tbool = isError(elem, false);\r\n\t\t} else {\r\n\t\t\tbool = isError(elem, true);\r\n\t\t}\r\n\t\treturn bool;\r\n\t},\r\n\t\"isNumber\": (elem) => {\r\n\t\r\n\t\tif (!/[^\\d]/g.test(elem.value) && elem.value !== '') { //валидация на ввод только чисел\r\n\t\t\tisError(elem, false);\r\n\t\t} else {\r\n\t\t\tisError(elem, true);\r\n\t\t}\r\n\t}\r\n\t\r\n};\r\nconst validationForm = (formInputs, functions) => {\r\n\tconst arr = [];\r\n\tformInputs.forEach(el => {\r\n\t\tif (functions.hasOwnProperty(el.name)) {\r\n\t\t\tconst obj = {};\r\n\t\t\tobj[functions[el.name](el)] =el.name ;\r\n\t\t\tarr.push(obj);\r\n\t\t}\r\n\t});\r\n\tconsole.log(arr);\r\n\treturn arr;\r\n};\r\nconst isError = (elem, bool) => {\r\n\tconst message = {\r\n\t\terrorMessage: \"bad validation\",\r\n\t\tsuccesMessage: \"good validation\"\r\n\t};\r\n\r\n\tif (bool === true) {\r\n\t\telem.classList.add('iserror');\r\n\t\telem.value = message.errorMessage;\r\n\t\tsetTimeout(()=>{elem.value = ''}, 1000);\r\n\t\tconsole.log(message.errorMessage);\r\n\t\t\r\n\t} else {\r\n\t\tif (elem.classList.contains('iserror')) {\r\n\t\t\telem.classList.remove('iserror');\r\n\t\t\tconsole.log(message.succesMessage);\r\n\t\t}\r\n\t\tconsole.log(message.succesMessage);\r\n\t\t\r\n\t}\r\n\treturn bool;\r\n};\r\nconst scrollingToView = (targetElement, scrollOptions) => {\r\n\tconst elem = document.querySelector(`#${getNameOfBlock(targetElement)}`)\r\n\telem.scrollIntoView(scrollOptions);//\r\n};\r\nconst getNameOfBlock = (link) => {\r\n\tconst hrefLink = link.href;\r\n\tconst res = hrefLink.split('#').pop();\r\n\treturn res;\r\n};\r\nconst sendData = (url, data, messageElement, {errorText,successText}) => {\r\n\treturn fetch(url, {\r\n\t\tmethod: 'POST',\r\n\t\tbody: JSON.stringify(data),\r\n\t\theaders: {\r\n\t\t\t'Content-type': 'application/json; charset=UTF-8',\r\n\t\t},\r\n\t})\r\n\t\t.then(() => {\r\n\t\t\tsetTimeout(() => { messageElement.textContent = successText }, 1000);\r\n\t\t})\r\n\t\t.then(() => {\r\n\t\t\tsetTimeout(() => { messageElement.textContent = '' }, 2000);\r\n\t\t})\r\n\t\t.catch(dataError => messageElement.textContent = `${errorText}:${dataError.message}`);\r\n};\r\nconst getData = (url) => {\r\n\treturn fetch(url)\r\n\t\t.then(data => data.json())\r\n\t\t.catch(errorData => console.log(errorData))\r\n\t\t.finally(() => console.log('Сессия завершена')\r\n\t\t);\r\n};\r\nconst findModal = (modal,width) => { \r\n\tif ((modal.getBoundingClientRect().x + (+(window.getComputedStyle(modal).width.slice(0, -2)) / 2)) < ((width / 2) - 14)) {\r\n\t\tmodal.style.cssText = `\r\n\t\tposition:fixed;\r\n\t\ttop:20%;\r\n\t\tleft:${((width / 2) - ((window.getComputedStyle(modal).width.slice(0, -2)) / 2))}px;\r\n\t\tz-index:999;`;\r\n\t}\r\n}\r\nconst addRemoveStyle = (el,el2, style) => {\r\n\tel.style.display = style;\r\n\tel2.style.display = style;\r\n};\r\nconst  visiblityElem = (target)=> {\r\n\t// Все позиции элемента\r\n\tconst targetPosition = {\r\n\t\t top: window.pageYOffset + target.getBoundingClientRect().top,\r\n\t\t left: window.pageXOffset + target.getBoundingClientRect().left,\r\n\t\t right: window.pageXOffset + target.getBoundingClientRect().right,\r\n\t\t bottom: window.pageYOffset + target.getBoundingClientRect().bottom\r\n\t  },\r\n\t  // Получаем позиции окна\r\n\t  windowPosition = {\r\n\t\t \ttop: window.pageYOffset,\r\n\t\t\tleft: window.pageXOffset,\r\n\t\t\tright: window.pageXOffset + document.documentElement.clientWidth,\r\n\t\t \tbottom: window.pageYOffset + document.documentElement.clientHeight\r\n\t  };\r\n \r\n\tif (\r\n\t  targetPosition.top < windowPosition.bottom  // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу\r\n\t ) { \r\n\t\treturn true;\r\n\t} else {\r\n\t\treturn false;\r\n\t};\r\n };\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/mainMenu.js":
/*!*****************************!*\
  !*** ./modules/mainMenu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   mainMenu: () => (/* binding */ mainMenu)\n/* harmony export */ });\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../modules/helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst mainMenu = () => {\r\n\tconst menu = document.querySelector('.top-menu');\r\n\tmenu.addEventListener('click', (e) => {\r\n\t\te.preventDefault();\r\n\t\tconst target = e.target;\r\n\t\tif (target.closest('a')) {\r\n\t\t\tconsole.log(target);\r\n\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.scrollingToView)(target, { block: \"center\", inline: \"nearest\", behavior: \"smooth\" });\r\n\t\t}\r\n\t});\r\n};\n\n//# sourceURL=webpack:///./modules/mainMenu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modal: () => (/* binding */ modal)\n/* harmony export */ });\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../modules/helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst modal = () => {\r\n\tconst modalBtns = document.querySelectorAll('.fancyboxModal');\r\n\tconst owerlayModal = document.querySelector('.modal-overlay');\r\n\t\r\n\r\n\tmodalBtns.forEach(el => {\r\n\t\tel.addEventListener('click', (e) => {\r\n\t\t\te.preventDefault();\r\n\t\t\tconst target = e.target;\r\n\t\t\tconst id = target.href.slice(target.href.indexOf('#'));\r\n\t\t\tif (id) {\r\n\t\t\t\tconst modal = document.querySelector(id);\r\n\t\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.findModal)(modal,window.innerWidth);\r\n\t\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.addRemoveStyle)(modal, owerlayModal, 'block');\r\n\t\t\t\t\r\n\t\t\t\twindow.addEventListener('click', (e) => {\r\n\t\t\t\t\tif(e.target.closest('.modal-close')||e.target.closest('.modal-overlay')){\r\n\t\t\t\t\t\t(0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.addRemoveStyle)(modal, owerlayModal, 'none');\r\n\t\t\t\t\t}\r\n\t\t\t\t});\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\t\r\n\t\r\n};\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollingArrow.js":
/*!***********************************!*\
  !*** ./modules/scrollingArrow.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   scrollingArrow: () => (/* binding */ scrollingArrow)\n/* harmony export */ });\n/* harmony import */ var _modules_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../../modules/helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst scrollingArrow = () => {\r\n\tconst arrow = document.querySelector('.up');\r\n\tconst stepsSection = document.querySelector('.steps-section');\r\n\tconsole.log(stepsSection);\r\n\tarrow.style.display = 'none';\r\n// Запускаем функцию при прокрутке страницы\r\n\twindow.addEventListener('scroll', () => {\r\n\t\tif ((0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.visiblityElem)(stepsSection)) {\r\n\t\t\tarrow.style.display = 'block';\r\n\t\t\tarrow.addEventListener('click', () => { \r\n\t\t\t\twindow.scrollTo({\r\n\t\t\t\t\ttop: 0,\r\n\t\t\t\t\tbehavior: \"smooth\"\r\n\t\t\t  });\r\n\t\t\t});\r\n\r\n\t\t} else { \r\n\t\t\tarrow.style.display = 'none';\r\n\t\t}\r\n\t\r\n });\r\n \r\n // А также запустим функцию сразу. А то вдруг, элемент изначально видно\r\n (0,_modules_helpers__WEBPACK_IMPORTED_MODULE_0__.visiblityElem) (stepsSection);\r\n }\n\n//# sourceURL=webpack:///./modules/scrollingArrow.js?");

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