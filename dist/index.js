(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "themeDefault", function() { return /* reexport */ global; });
__webpack_require__.d(__webpack_exports__, "Card", function() { return /* reexport */ components_Card; });

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/styles/global.js

var GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}body{background:var(--highlight);line-height:1;font-size:100%;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--darker:rgba(0,0,0,0.75);}img{display:block;width:100%;height:auto;}body.dark{--borders:#090909;--texts:#ff5252;--postColor:#f9f8eb;--highlight:#ff0000;--mediumBackground:#222831;--background:#393e46;--timelineColor:#a70000;--timelineLine:#ff0000;--timelineDate:#f9f8eb;--white:#fff;--black:#222;}body.light{--borders:#d0cece;--postColor:#111;--texts:#555555;--highlight:#ff0000;--mediumBackground:#dbdbde;--background:#fff;--timelineColor:#f0f0f3;--timelineLine:#ff0000;--timelineDate:#090909;--white:#fff;--black:#222;}"]);
/* harmony default export */ var global = (GlobalStyles);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// EXTERNAL MODULE: external "styled-media-query"
var external_styled_media_query_ = __webpack_require__("styled-media-query");
var external_styled_media_query_default = /*#__PURE__*/__webpack_require__.n(external_styled_media_query_);

// CONCATENATED MODULE: ./src/components/Card/styled.js
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CardWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__CardWrapper"
})(["border 1px solid var(--borders);border-radius:6px;box-shadow:0 4px 8px 0 var(--background);transition:0.3s;", ":hover{box-shadow:0 4px 4px 0 var(--highlight);}"], external_styled_media_query_default.a.lessThan('large')(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding-top: 3rem;\n  "]))));
/* harmony default export */ var styled = (CardWrapper);
// CONCATENATED MODULE: ./src/components/Card/index.jsx
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Card_Card = function Card(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/external_react_default.a.createElement(styled, props, children);
};

Card_Card.propTypes = {
  children: external_prop_types_default.a.node
};
Card_Card.defaultProps = {
  children: ''
};
/* harmony default export */ var components_Card = (Card_Card);
// CONCATENATED MODULE: ./src/index.js
/* ********************
styles and themes
******************** */

/** *******************
    components
******************** */
// export { default as Avatar } from 'components/Avatar'

 // export { default as Comments } from 'components/Comments'
// export { default as LayoutCustom } from 'components/LayoutCustom'
// export { default as LayoutHero } from 'components/LayoutHero'
// export { default as Loader } from 'components/Loader'
// export { default as MenuBar } from 'components/MenuBar'
// export { default as HeaderBanner } from 'components/HeaderBanner'
// export { default as MenuLinks } from 'components/MenuLinks'
// export { default as Pagination } from 'components/Pagination'
// export { default as PostItem } from 'components/PostItem'
// export { default as PostCard } from 'components/PostCard'
// export { default as Profile } from 'components/Profile'
// export { default as RecomendedPosts } from 'components/RecomendedPosts'
// export { default as NavigationBar } from 'components/NavigationBar'
// export { default as SocialLinks } from 'components/SocialLinks'
// export { default as SwUpdater } from 'components/SwUpdater'
// export { default as Timeline } from 'components/Timeline'
// export { default as Skills } from 'components/Skills'
// export { default as Seo } from 'components/Seo'

/* ********************
    utils
******************** */
// export { default as random } from 'utils/random'
// export { default as getThemeColor } from 'utils/getThemeColor'

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-media-query":
/***/ (function(module, exports) {

module.exports = require("styled-media-query");

/***/ })

/******/ })));