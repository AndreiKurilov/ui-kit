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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/registrationPage/registrationPage.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/button/button.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/button/button.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/button/button.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/cardRegistration/cardRegistration.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/cardRegistration/cardRegistration.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/cardRegistration/cardRegistration.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/footer/footer.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/footer/footer.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/footer/footer.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/header/header.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/header/header.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/header/header.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/heading/heading.scss":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/heading/heading.scss ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/heading/heading.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/logo/logo.scss":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/logo/logo.scss ***!
  \**********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/logo/logo.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/nav/nav.scss":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/nav/nav.scss ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/nav/nav.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/radio/radio.scss":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/radio/radio.scss ***!
  \************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/radio/radio.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/socialIcons/socialIcons.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/socialIcons/socialIcons.scss ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/socialIcons/socialIcons.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/textField/textField.scss":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/textField/textField.scss ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/textField/textField.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/toggle/toggle.scss":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/components/toggle/toggle.scss ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/components/toggle/toggle.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/fonts/fonts.scss":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/fonts/fonts.scss ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/fonts/fonts.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/layouts/layout.scss":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/layouts/layout.scss ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/layouts/layout.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/registrationPage/registrationPage.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3!./src/pages/registrationPage/registrationPage.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\\nError: Node Sass version 7.0.3 is incompatible with ^4.0.0.\\n    at getSassImplementation (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\getSassImplementation.js:46:13)\\n    at Object.loader (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\sass-loader\\\\dist\\\\index.js:40:61)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\webpack\\\\lib\\\\NormalModule.js:316:20\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:367:11\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:233:18\\n    at runSyncOrAsync (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:143:3)\\n    at iterateNormalLoaders (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:232:2)\\n    at Array.<anonymous> (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\loader-runner\\\\lib\\\\LoaderRunner.js:205:4)\\n    at Storage.finished (C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:55:16)\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\enhanced-resolve\\\\lib\\\\CachedInputFileSystem.js:91:9\\n    at C:\\\\Users\\\\А\\\\Desktop\\\\Programms\\\\ui-kit\\\\node_modules\\\\graceful-fs\\\\graceful-fs.js:123:16\\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:68:3)\");\n\n//# sourceURL=webpack:///./src/pages/registrationPage/registrationPage.scss?./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js??ref--5-2!./node_modules/sass-loader/dist/cjs.js??ref--5-3");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ \"./src/components/button/button.scss\");\n/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/components/button/button.js?");

/***/ }),

/***/ "./src/components/button/button.scss":
/*!*******************************************!*\
  !*** ./src/components/button/button.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./button.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/button/button.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/button/button.scss?");

/***/ }),

/***/ "./src/components/cardRegistration/cardRegistration.js":
/*!*************************************************************!*\
  !*** ./src/components/cardRegistration/cardRegistration.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textField_textField_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../textField/textField.js */ \"./src/components/textField/textField.js\");\n/* harmony import */ var _radio_radio_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../radio/radio.js */ \"./src/components/radio/radio.js\");\n/* harmony import */ var _heading_heading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../heading/heading.js */ \"./src/components/heading/heading.js\");\n/* harmony import */ var _toggle_toggle_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle/toggle.js */ \"./src/components/toggle/toggle.js\");\n/* harmony import */ var _button_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.js */ \"./src/components/button/button.js\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fonts/fonts.scss */ \"./src/fonts/fonts.scss\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _cardRegistration_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardRegistration.scss */ \"./src/components/cardRegistration/cardRegistration.scss\");\n/* harmony import */ var _cardRegistration_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_cardRegistration_scss__WEBPACK_IMPORTED_MODULE_6__);\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/cardRegistration/cardRegistration.js?");

/***/ }),

/***/ "./src/components/cardRegistration/cardRegistration.scss":
/*!***************************************************************!*\
  !*** ./src/components/cardRegistration/cardRegistration.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./cardRegistration.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/cardRegistration/cardRegistration.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/cardRegistration/cardRegistration.scss?");

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.js */ \"./src/components/logo/logo.js\");\n/* harmony import */ var _nav_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.js */ \"./src/components/nav/nav.js\");\n/* harmony import */ var _socialIcons_socialIcons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socialIcons/socialIcons.js */ \"./src/components/socialIcons/socialIcons.js\");\n/* harmony import */ var _textField_textField_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../textField/textField.js */ \"./src/components/textField/textField.js\");\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer.scss */ \"./src/components/footer/footer.scss\");\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_4__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/components/footer/footer.js?");

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./footer.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/footer/footer.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/footer/footer.scss?");

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_logo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../logo/logo.js */ \"./src/components/logo/logo.js\");\n/* harmony import */ var _nav_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../nav/nav.js */ \"./src/components/nav/nav.js\");\n/* harmony import */ var _button_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../button/button.js */ \"./src/components/button/button.js\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.scss */ \"./src/components/header/header.scss\");\n/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_3__);\n\r\n\r\n\r\n\r\n\r\nclass burgerMenu {\r\n  constructor(selector) {\r\n    this.selector = selector;\r\n    this.addListener();\r\n  }\r\n  \r\n  addListener() {\r\n    this.selector.addEventListener('click', () =>\r\n    this.selector.classList.toggle('active'));\r\n  }\r\n}\r\n\r\nconst burgerMenuItems = document.querySelectorAll('.header__menu-burger');\r\n\r\nif (burgerMenuItems.length > 0) {\r\n  burgerMenuItems.forEach((selector) => new burgerMenu(selector));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/components/header/header.js?");

/***/ }),

/***/ "./src/components/header/header.scss":
/*!*******************************************!*\
  !*** ./src/components/header/header.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./header.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/header/header.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/header/header.scss?");

/***/ }),

/***/ "./src/components/heading/heading.js":
/*!*******************************************!*\
  !*** ./src/components/heading/heading.js ***!
  \*******************************************/
/*! exports provided: ExpandableСheckbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ExpandableСheckbox\", function() { return ExpandableСheckbox; });\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.scss */ \"./src/components/heading/heading.scss\");\n/* harmony import */ var _heading_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_heading_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\nclass ExpandableСheckbox {\r\n  constructor(selector) {\r\n    this.selector = selector;\r\n    this.addListener();\r\n  }\r\n  \r\n  addListener() {\r\n    this.selector.addEventListener('click', () =>\r\n    this.selector.classList.toggle('active'));\r\n  }\r\n}\r\n\r\nconst headingExpandMore = document.querySelectorAll('.heading_expand-more');\r\n\r\n\r\nif (headingExpandMore.length > 0) {\r\n  headingExpandMore.forEach((selector) => new ExpandableСheckbox(selector));\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n// addListener() {\r\n//   this.selector.addEventListener('click', this.toggleActived.bind(this));\r\n// }\r\n  \r\n// toggleActived() {\r\n//   this.selector.classList.toggle('active');\r\n// }\r\n\n\n//# sourceURL=webpack:///./src/components/heading/heading.js?");

/***/ }),

/***/ "./src/components/heading/heading.scss":
/*!*********************************************!*\
  !*** ./src/components/heading/heading.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./heading.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/heading/heading.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/heading/heading.scss?");

/***/ }),

/***/ "./src/components/logo/logo.js":
/*!*************************************!*\
  !*** ./src/components/logo/logo.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.scss */ \"./src/components/logo/logo.scss\");\n/* harmony import */ var _logo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_logo_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/components/logo/logo.js?");

/***/ }),

/***/ "./src/components/logo/logo.scss":
/*!***************************************!*\
  !*** ./src/components/logo/logo.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./logo.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/logo/logo.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/logo/logo.scss?");

/***/ }),

/***/ "./src/components/nav/nav.js":
/*!***********************************!*\
  !*** ./src/components/nav/nav.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav.scss */ \"./src/components/nav/nav.scss\");\n/* harmony import */ var _nav_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_nav_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/components/nav/nav.js?");

/***/ }),

/***/ "./src/components/nav/nav.scss":
/*!*************************************!*\
  !*** ./src/components/nav/nav.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./nav.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/nav/nav.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/nav/nav.scss?");

/***/ }),

/***/ "./src/components/radio/radio.js":
/*!***************************************!*\
  !*** ./src/components/radio/radio.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio.scss */ \"./src/components/radio/radio.scss\");\n/* harmony import */ var _radio_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_radio_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/components/radio/radio.js?");

/***/ }),

/***/ "./src/components/radio/radio.scss":
/*!*****************************************!*\
  !*** ./src/components/radio/radio.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./radio.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/radio/radio.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/radio/radio.scss?");

/***/ }),

/***/ "./src/components/socialIcons/socialIcons.js":
/*!***************************************************!*\
  !*** ./src/components/socialIcons/socialIcons.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _socialIcons_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socialIcons.scss */ \"./src/components/socialIcons/socialIcons.scss\");\n/* harmony import */ var _socialIcons_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_socialIcons_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/components/socialIcons/socialIcons.js?");

/***/ }),

/***/ "./src/components/socialIcons/socialIcons.scss":
/*!*****************************************************!*\
  !*** ./src/components/socialIcons/socialIcons.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./socialIcons.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/socialIcons/socialIcons.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/socialIcons/socialIcons.scss?");

/***/ }),

/***/ "./src/components/textField/textField.js":
/*!***********************************************!*\
  !*** ./src/components/textField/textField.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _textField_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./textField.scss */ \"./src/components/textField/textField.scss\");\n/* harmony import */ var _textField_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_textField_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/components/textField/textField.js?");

/***/ }),

/***/ "./src/components/textField/textField.scss":
/*!*************************************************!*\
  !*** ./src/components/textField/textField.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./textField.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/textField/textField.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/textField/textField.scss?");

/***/ }),

/***/ "./src/components/toggle/toggle.js":
/*!*****************************************!*\
  !*** ./src/components/toggle/toggle.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toggle_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle.scss */ \"./src/components/toggle/toggle.scss\");\n/* harmony import */ var _toggle_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toggle_scss__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\n\n//# sourceURL=webpack:///./src/components/toggle/toggle.js?");

/***/ }),

/***/ "./src/components/toggle/toggle.scss":
/*!*******************************************!*\
  !*** ./src/components/toggle/toggle.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./toggle.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/components/toggle/toggle.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/components/toggle/toggle.scss?");

/***/ }),

/***/ "./src/fonts/fonts.scss":
/*!******************************!*\
  !*** ./src/fonts/fonts.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./fonts.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/fonts/fonts.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/fonts/fonts.scss?");

/***/ }),

/***/ "./src/layouts/layout.scss":
/*!*********************************!*\
  !*** ./src/layouts/layout.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/mini-css-extract-plugin/dist/loader.js!../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./layout.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/layouts/layout.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/layouts/layout.scss?");

/***/ }),

/***/ "./src/pages/registrationPage/registrationPage.js":
/*!********************************************************!*\
  !*** ./src/pages/registrationPage/registrationPage.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/header/header.js */ \"./src/components/header/header.js\");\n/* harmony import */ var _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/footer/footer.js */ \"./src/components/footer/footer.js\");\n/* harmony import */ var _components_cardRegistration_cardRegistration_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/cardRegistration/cardRegistration.js */ \"./src/components/cardRegistration/cardRegistration.js\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../fonts/fonts.scss */ \"./src/fonts/fonts.scss\");\n/* harmony import */ var _fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _layouts_layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../layouts/layout.scss */ \"./src/layouts/layout.scss\");\n/* harmony import */ var _layouts_layout_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layouts_layout_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _registrationPage_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registrationPage.scss */ \"./src/pages/registrationPage/registrationPage.scss\");\n/* harmony import */ var _registrationPage_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_registrationPage_scss__WEBPACK_IMPORTED_MODULE_5__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/pages/registrationPage/registrationPage.js?");

/***/ }),

/***/ "./src/pages/registrationPage/registrationPage.scss":
/*!**********************************************************!*\
  !*** ./src/pages/registrationPage/registrationPage.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../node_modules/css-loader/dist/cjs.js??ref--5-2!../../../node_modules/sass-loader/dist/cjs.js??ref--5-3!./registrationPage.scss */ \"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./src/pages/registrationPage/registrationPage.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/pages/registrationPage/registrationPage.scss?");

/***/ })

/******/ });