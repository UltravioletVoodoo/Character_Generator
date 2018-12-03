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
/******/ 	return __webpack_require__(__webpack_require__.s = "./target/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./target/Util.js":
/*!************************!*\
  !*** ./target/Util.js ***!
  \************************/
/*! exports provided: Util */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Util\", function() { return Util; });\nclass Util {\r\n    //Just a class to store various helper functions\r\n    choice(collection) {\r\n        const index = Math.floor(Math.random() * collection.length);\r\n        return collection[index];\r\n    }\r\n    pointBuy() {\r\n        const attrs = {\r\n            str: 8,\r\n            dex: 8,\r\n            con: 8,\r\n            int: 8,\r\n            wis: 8,\r\n            cha: 8\r\n        };\r\n        let points = 27;\r\n        while (this.canBuy(attrs, points)) {\r\n            console.log(\"attrs: \" + attrs + \"\\n\" + \"points: \" + points);\r\n            const attr = this.choice(Object.keys(attrs));\r\n            const cost = this.getCost(attrs, attr);\r\n            if (cost && cost <= points) {\r\n                attrs[attr]++;\r\n                points = points - cost;\r\n            }\r\n        }\r\n        return attrs;\r\n    }\r\n    canBuy(attrs, points) {\r\n        if (points < 0) {\r\n            throw 'Error: pointBuy exeeded point cap';\r\n        }\r\n        if (points == 0) {\r\n            return false;\r\n        }\r\n        if (points == 1 && Object.values(attrs).every(val => val >= 13)) {\r\n            return false;\r\n        }\r\n        return true;\r\n    }\r\n    getCost(attrs, attr) {\r\n        const currentValue = attrs[attr];\r\n        if (currentValue < 13) {\r\n            return 1;\r\n        }\r\n        if (currentValue < 15) {\r\n            return 2;\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./target/Util.js?");

/***/ }),

/***/ "./target/main.js":
/*!************************!*\
  !*** ./target/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util */ \"./target/Util.js\");\n\r\nconst util = new _Util__WEBPACK_IMPORTED_MODULE_0__[\"Util\"];\r\nconsole.log(\"Nothing here yet. Complain to the dev for being lazy\");\r\nconsole.log(\"Creating an empty character...\");\r\nlet player = { attributes: util.pointBuy() };\r\nconsole.log(player);\r\n\n\n//# sourceURL=webpack:///./target/main.js?");

/***/ })

/******/ });