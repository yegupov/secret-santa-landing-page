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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var initReviewsSlider = function initReviewsSlider() {\n  var $reviewsSlider = $('.reviews-slider');\n  $reviewsSlider.slick({\n    slidesToShow: 1,\n    slidesToScroll: 1,\n    autoplay: true,\n    autoplaySpeed: 3800,\n    dots: true,\n    prevArrow: \"<span class=\\\"slider-arrow is-prev\\\">\\n                  <img src=\\\"img/arrow-left.png\\\" width=\\\"40\\\" height=\\\"40\\\">\\n                </span>\",\n    nextArrow: \"<span class=\\\"slider-arrow is-next\\\">\\n                  <img src=\\\"img/arrow-right.png\\\" width=\\\"40\\\" height=\\\"40\\\">\\n                </span>\"\n  });\n};\n\nvar initChildrenSlider = function initChildrenSlider() {\n  var $childrenSlider = $('.children-slider');\n  $childrenSlider.slick({\n    slidesToShow: 4,\n    slidesToScroll: 4,\n    autoplay: true,\n    autoplaySpeed: 3800,\n    dots: true,\n    prevArrow: \"<span class=\\\"slider-arrow is-prev\\\">\\n                  <img src=\\\"img/arrow-red-left.png\\\" width=\\\"40\\\" height=\\\"40\\\">\\n                </span>\",\n    nextArrow: \"<span class=\\\"slider-arrow is-next\\\">\\n                  <img src=\\\"img/arrow-red-right.png\\\" width=\\\"40\\\" height=\\\"40\\\">\\n                </span>\",\n    responsive: [{\n      breakpoint: 992,\n      settings: {\n        slidesToShow: 3\n      }\n    }, {\n      breakpoint: 480,\n      settings: {\n        slidesToShow: 2\n      }\n    }, {\n      breakpoint: 375,\n      settings: {\n        slidesToShow: 1\n      }\n    }]\n  });\n};\n\n$(document).ready(function () {\n  initReviewsSlider();\n  initChildrenSlider();\n});\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ })

/******/ });