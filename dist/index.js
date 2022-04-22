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
__webpack_require__.d(__webpack_exports__, "Avatar", function() { return /* reexport */ components_Avatar; });
__webpack_require__.d(__webpack_exports__, "Card", function() { return /* reexport */ components_Card; });
__webpack_require__.d(__webpack_exports__, "Comments", function() { return /* reexport */ components_Comments; });
__webpack_require__.d(__webpack_exports__, "LayoutCustom", function() { return /* reexport */ components_LayoutCustom; });
__webpack_require__.d(__webpack_exports__, "LayoutHero", function() { return /* reexport */ components_LayoutHero; });
__webpack_require__.d(__webpack_exports__, "Loader", function() { return /* reexport */ components_Loader; });
__webpack_require__.d(__webpack_exports__, "MenuBar", function() { return /* reexport */ components_MenuBar; });
__webpack_require__.d(__webpack_exports__, "HeaderBanner", function() { return /* reexport */ components_HeaderBanner; });
__webpack_require__.d(__webpack_exports__, "MenuLinks", function() { return /* reexport */ components_MenuLinks; });
__webpack_require__.d(__webpack_exports__, "Pagination", function() { return /* reexport */ components_Pagination; });
__webpack_require__.d(__webpack_exports__, "PostItem", function() { return /* reexport */ components_PostItem; });
__webpack_require__.d(__webpack_exports__, "PostCard", function() { return /* reexport */ components_PostCard; });
__webpack_require__.d(__webpack_exports__, "Profile", function() { return /* reexport */ components_Profile; });
__webpack_require__.d(__webpack_exports__, "RecomendedPosts", function() { return /* reexport */ components_RecomendedPosts; });
__webpack_require__.d(__webpack_exports__, "NavigationBar", function() { return /* reexport */ components_NavigationBar; });
__webpack_require__.d(__webpack_exports__, "SocialLinks", function() { return /* reexport */ components_SocialLinks; });
__webpack_require__.d(__webpack_exports__, "SwUpdater", function() { return /* reexport */ components_SwUpdater; });
__webpack_require__.d(__webpack_exports__, "Timeline", function() { return /* reexport */ components_Timeline; });
__webpack_require__.d(__webpack_exports__, "Skills", function() { return /* reexport */ components_Skills; });
__webpack_require__.d(__webpack_exports__, "Seo", function() { return /* reexport */ components_Seo; });
__webpack_require__.d(__webpack_exports__, "random", function() { return /* reexport */ utils_random; });
__webpack_require__.d(__webpack_exports__, "getThemeColor", function() { return /* reexport */ utils_getThemeColor; });

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("styled-components");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./src/styles/global.js

var GlobalStyles = Object(external_styled_components_["createGlobalStyle"])(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}*{box-sizing:border-box;}body{background:var(--highlight);line-height:1;font-size:100%;font-family:-apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif,\"Apple Color Emoji\",\"Segoe UI Emoji\",\"Segoe UI Symbol\";--darker:rgba(0,0,0,0.75);}img{display:block;width:100%;height:auto;}body.dark{--borders:#090909;--texts:#ff5252;--postColor:#f9f8eb;--highlight:#ff0000;--mediumBackground:#222831;--background:#393e46;--timelineColor:#a70000;--timelineLine:#ff0000;--timelineDate:#f9f8eb;--white:#fff;--black:#222;}body.light{--borders:#d0cece;--postColor:#111;--texts:#555555;--highlight:#ff0000;--mediumBackground:#dbdbde;--background:#fff;--timelineColor:#f0f0f3;--timelineLine:#ff0000;--timelineDate:#090909;--white:#fff;--black:#222;}"]);
/* harmony default export */ var global = (GlobalStyles);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./src/components/Avatar/styled.js

var AvatarWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__AvatarWrapper"
})([".gatsby-image-wrapper{border-radius:50%;height:3.75rem;margin:auto;width:3.75rem;display:flex;}"]);
/* harmony default export */ var styled = (AvatarWrapper);
// CONCATENATED MODULE: ./src/components/Avatar/index.jsx



var Avatar_Avatar = function Avatar() {
  return /*#__PURE__*/external_react_default.a.createElement(styled, null, /*#__PURE__*/external_react_default.a.createElement("img", {
    src: "../../images/profile.jpeg",
    alt: "jorge profile picture",
    placeholder: "blurred"
  }));
};

/* harmony default export */ var components_Avatar = (Avatar_Avatar);
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
/* harmony default export */ var Card_styled = (CardWrapper);
// CONCATENATED MODULE: ./src/components/Card/index.jsx
var _excluded = ["children"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Card_Card = function Card(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/external_react_default.a.createElement(Card_styled, props, children);
};

Card_Card.propTypes = {
  children: external_prop_types_default.a.node
};
Card_Card.defaultProps = {
  children: ''
};
/* harmony default export */ var components_Card = (Card_Card);
// EXTERNAL MODULE: external "react-disqus-comments"
var external_react_disqus_comments_ = __webpack_require__("react-disqus-comments");
var external_react_disqus_comments_default = /*#__PURE__*/__webpack_require__.n(external_react_disqus_comments_);

// CONCATENATED MODULE: ./src/components/Comments/styled.js
var styled_templateObject, _templateObject2;

function styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var CommentsWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__CommentsWrapper"
})(["margin:auto;max-width:70rem;padding:3rem 6.4rem 3rem;", " iframe[src*=\"ads-iframe\"]{display:none;}#disqus_thread{a{color:var(--highlight) !important;}}"], external_styled_media_query_default.a.lessThan('large')(styled_templateObject || (styled_templateObject = styled_taggedTemplateLiteral(["\n    padding: 3rem 1.4rem 0;\n    max-width: 100%;\n  "]))));
var CommentsTitle = external_styled_components_default.a.h2.withConfig({
  displayName: "styled__CommentsTitle"
})(["color:var(--postColor);font-size:2.1rem;font-weight:700;padding-bottom:2rem;", ""], external_styled_media_query_default.a.lessThan('large')(_templateObject2 || (_templateObject2 = styled_taggedTemplateLiteral(["\n    font-size: 1.375rem;\n  "]))));
// CONCATENATED MODULE: ./src/components/Comments/index.jsx





var Comments_Comments = function Comments(_ref) {
  var url = _ref.url,
      title = _ref.title;
  var completeURL = "https://jorgemendes.com.br".concat(url);
  return /*#__PURE__*/external_react_default.a.createElement(CommentsWrapper, null, /*#__PURE__*/external_react_default.a.createElement(CommentsTitle, null, "Comments"), /*#__PURE__*/external_react_default.a.createElement(external_react_disqus_comments_default.a, {
    shortname: "jorgemendes-com-br",
    identifier: completeURL,
    title: title,
    url: completeURL
  }));
};

Comments_Comments.propTypes = {
  url: external_prop_types_default.a.string.isRequired,
  title: external_prop_types_default.a.string.isRequired
};
/* harmony default export */ var components_Comments = (Comments_Comments);
// CONCATENATED MODULE: ./src/components/Profile/styled.js
var Profile_styled_templateObject, styled_templateObject2, _templateObject3, _templateObject4;

function Profile_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ProfileWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__ProfileWrapper"
})(["", ""], function (_ref) {
  var size = _ref.size;
  return Object(external_styled_components_["css"])(["color:var(--texts);display:flex;flex-direction:column;", ";", ""], size === 'small' && "\n    width: 20vw;\n  ", external_styled_media_query_default.a.lessThan('large')(Profile_styled_templateObject || (Profile_styled_templateObject = Profile_styled_taggedTemplateLiteral(["\n    display: flex;\n    text-align: left;\n    width: auto;\n  "]))));
});
var ProfileLink = external_styled_components_default.a.a.withConfig({
  displayName: "styled__ProfileLink"
})(["color:var(--texts);text-decoration:none;text-align:center;transition:color 0.5s;&:hover{color:var(--highlight);}"]);
var ProfileAuthor = external_styled_components_default.a.h1.withConfig({
  displayName: "styled__ProfileAuthor"
})(["font-size:1.4rem;text-transform:uppercase;margin:0.5rem auto 0.5rem;", ""], external_styled_media_query_default.a.lessThan('large')(styled_templateObject2 || (styled_templateObject2 = Profile_styled_taggedTemplateLiteral(["\n    font-size: 1.2rem;\n    margin: 0 0 0 10px;\n  "]))));
var ProfilePosition = external_styled_components_default.a.small.withConfig({
  displayName: "styled__ProfilePosition"
})(["display:block;font-size:1.2rem;font-weight:300;text-transform:capitalize;", ""], external_styled_media_query_default.a.lessThan('large')(_templateObject3 || (_templateObject3 = Profile_styled_taggedTemplateLiteral(["\n    font-size: 0.8rem;\n    margin-top: 0.2rem;\n  "]))));
var ProfileDescription = external_styled_components_default.a.p.withConfig({
  displayName: "styled__ProfileDescription"
})(["font-size:1rem;font-weight:300;line-height:1.4;", ""], external_styled_media_query_default.a.lessThan('large')(_templateObject4 || (_templateObject4 = Profile_styled_taggedTemplateLiteral(["\n    display: none;\n  "]))));
// CONCATENATED MODULE: ./src/components/Profile/index.jsx
var Profile_excluded = ["size", "showAvatar", "showDescription", "title", "position", "description"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function Profile_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Profile_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Profile_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Profile_Profile = function Profile(_ref) {
  var size = _ref.size,
      showAvatar = _ref.showAvatar,
      showDescription = _ref.showDescription,
      title = _ref.title,
      position = _ref.position,
      description = _ref.description,
      props = Profile_objectWithoutProperties(_ref, Profile_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(ProfileWrapper, _extends({
    size: size
  }, props), /*#__PURE__*/external_react_default.a.createElement(ProfileLink, {
    href: "/"
  }, showAvatar && /*#__PURE__*/external_react_default.a.createElement(components_Avatar, null), /*#__PURE__*/external_react_default.a.createElement(ProfileAuthor, null, title, /*#__PURE__*/external_react_default.a.createElement(ProfilePosition, null, position))), showDescription && /*#__PURE__*/external_react_default.a.createElement(ProfileDescription, null, description));
};

Profile_Profile.propTypes = {
  size: external_prop_types_default.a.oneOf(['small', 'auto']),
  showAvatar: external_prop_types_default.a.bool,
  showDescription: external_prop_types_default.a.bool,
  title: external_prop_types_default.a.string,
  position: external_prop_types_default.a.string,
  description: external_prop_types_default.a.string
};
Profile_Profile.defaultProps = {
  size: 'auto',
  showAvatar: false,
  showDescription: true,
  title: '',
  position: '',
  description: ''
};
/* harmony default export */ var components_Profile = (Profile_Profile);
// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Github"
var Github_ = __webpack_require__("@styled-icons/boxicons-logos/Github");

// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Linkedin"
var Linkedin_ = __webpack_require__("@styled-icons/boxicons-logos/Linkedin");

// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Facebook"
var Facebook_ = __webpack_require__("@styled-icons/boxicons-logos/Facebook");

// EXTERNAL MODULE: external "@styled-icons/boxicons-logos/Instagram"
var Instagram_ = __webpack_require__("@styled-icons/boxicons-logos/Instagram");

// EXTERNAL MODULE: external "@styled-icons/simple-icons/Gmail"
var Gmail_ = __webpack_require__("@styled-icons/simple-icons/Gmail");

// EXTERNAL MODULE: external "@styled-icons/material/Work"
var Work_ = __webpack_require__("@styled-icons/material/Work");

// EXTERNAL MODULE: external "@styled-icons/zondicons/Education"
var Education_ = __webpack_require__("@styled-icons/zondicons/Education");

// CONCATENATED MODULE: ./src/components/SocialLinks/Icons.jsx







var Icons = {
  Github: Github_["Github"],
  Linkedin: Linkedin_["Linkedin"],
  Facebook: Facebook_["Facebook"],
  Instagram: Instagram_["Instagram"],
  Gmail: Gmail_["Gmail"],
  Work: Work_["Work"],
  Education: Education_["Education"]
};
/* harmony default export */ var SocialLinks_Icons = (Icons);
// CONCATENATED MODULE: ./src/components/SocialLinks/content.jsx
var github = 'Jorge-Bill';
var linkedin = '';
var instagram = '';
var facebook = '';
var gmail = 'jorge.mendesx@gmail.com';
var links = [{
  label: 'Gmail',
  url: "mailto:".concat(gmail)
}, {
  label: 'Github',
  url: "https://github.com/".concat(github)
}, {
  label: 'Linkedin',
  url: "https://www.linkedin.com/in/".concat(linkedin)
}, {
  label: 'Facebook',
  url: "https://www.facebook.com/".concat(facebook)
}, {
  label: 'Instagram',
  url: "https://www.instagram.com/".concat(instagram)
}];
/* harmony default export */ var content = (links);
// CONCATENATED MODULE: ./src/components/SocialLinks/styled.js
var SocialLinks_styled_templateObject;

function SocialLinks_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var SocialLinksWrapper = external_styled_components_default.a.nav.withConfig({
  displayName: "styled__SocialLinksWrapper"
})(["", ""], function (_ref) {
  var size = _ref.size;
  return Object(external_styled_components_["css"])(["width:100%;margin:2rem auto;", ";", ""], size === 'small' && "\n    width: 20vw;\n    margin: 0 1rem;\n  ", external_styled_media_query_default.a.lessThan('large')(SocialLinks_styled_templateObject || (SocialLinks_styled_templateObject = SocialLinks_styled_taggedTemplateLiteral(["\n    margin: 0.8rem auto;\n    width: 100%;\n  "]))));
});
var SocialLinksList = external_styled_components_default.a.ul.withConfig({
  displayName: "styled__SocialLinksList"
})(["align-items:center;display:flex;justify-content:space-around;list-style:none;"]);
var SocialLinksItem = external_styled_components_default.a.li.withConfig({
  displayName: "styled__SocialLinksItem"
})([""]);
var SocialLinksLink = external_styled_components_default.a.a.withConfig({
  displayName: "styled__SocialLinksLink"
})(["color:var(--texts);text-decoration:none;transition:color 0.5s;&:hover{color:var(--highlight);}"]);
var IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__IconWrapper"
})(["fill:#bbb;width:30px;height:30px;"]);
// CONCATENATED MODULE: ./src/components/SocialLinks/index.jsx
var SocialLinks_excluded = ["className", "size"];

function SocialLinks_extends() { SocialLinks_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SocialLinks_extends.apply(this, arguments); }

function SocialLinks_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = SocialLinks_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function SocialLinks_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var SocialLinks_SocialLinks = function SocialLinks(_ref) {
  var className = _ref.className,
      size = _ref.size,
      props = SocialLinks_objectWithoutProperties(_ref, SocialLinks_excluded);

  var random = function random() {
    return Math.random().toString(36).slice(2);
  };

  return /*#__PURE__*/external_react_default.a.createElement(SocialLinksWrapper, SocialLinks_extends({
    className: className,
    size: size
  }, props), /*#__PURE__*/external_react_default.a.createElement(SocialLinksList, null, content.map(function (link) {
    var Icon = SocialLinks_Icons[link.label];
    return /*#__PURE__*/external_react_default.a.createElement(SocialLinksItem, {
      key: random()
    }, /*#__PURE__*/external_react_default.a.createElement(SocialLinksLink, {
      href: link.url,
      title: link.label,
      target: "_blank",
      rel: "noopener noreferrer"
    }, /*#__PURE__*/external_react_default.a.createElement(IconWrapper, null, /*#__PURE__*/external_react_default.a.createElement(Icon, null))));
  })));
};

SocialLinks_SocialLinks.propTypes = {
  className: external_prop_types_default.a.string,
  size: external_prop_types_default.a.oneOf(['small', 'auto'])
};
SocialLinks_SocialLinks.defaultProps = {
  className: '',
  size: 'auto'
};
/* harmony default export */ var components_SocialLinks = (SocialLinks_SocialLinks);
// CONCATENATED MODULE: ./src/utils/random.js
var random_random = function random() {
  return Math.random().toString(36).slice(2);
};

/* harmony default export */ var utils_random = (random_random);
// CONCATENATED MODULE: ./src/utils/getThemeColor.js
var getThemeColor = function getThemeColor() {
  var theme = typeof window !== 'undefined' && window.__theme;
  var dark = '#ff0000';
  var light = '#f0f0f3';

  switch (theme) {
    case 'light':
      return light;

    case 'dark':
      return dark;

    default:
      return dark;
  }
};

/* harmony default export */ var utils_getThemeColor = (getThemeColor);
// CONCATENATED MODULE: ./src/components/MenuLinks/content.jsx
var content_links = [{
  label: 'Home',
  url: '/'
}, {
  label: 'Posts',
  url: '/posts/'
}, {
  label: 'About',
  url: '/about/'
}, {
  label: 'Search',
  url: '/search/'
}];
/* harmony default export */ var MenuLinks_content = (content_links);
// CONCATENATED MODULE: ./src/components/MenuLinks/styled.js
var MenuLinks_styled_templateObject;

function MenuLinks_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var MenuLinksWrapper = external_styled_components_default.a.nav.withConfig({
  displayName: "styled__MenuLinksWrapper"
})(["", ""], function (_ref) {
  var variant = _ref.variant;
  return Object(external_styled_components_["css"])(["", ";", ";"], variant === 'inline' && "\n    display: flex;\n  ", external_styled_media_query_default.a.lessThan('large')(MenuLinks_styled_templateObject || (MenuLinks_styled_templateObject = MenuLinks_styled_taggedTemplateLiteral(["\n    display: none;\n  "]))));
});
var MenuLinksList = external_styled_components_default.a.ul.withConfig({
  displayName: "styled__MenuLinksList"
})(["", ""], function (_ref2) {
  var variant = _ref2.variant;
  return Object(external_styled_components_["css"])(["font-size:1.2rem;font-weight:300;", ";"], variant === 'inline' && "\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n  ");
});
var MenuLinksItem = external_styled_components_default.a.li.withConfig({
  displayName: "styled__MenuLinksItem"
})(["", ""], function (_ref3) {
  var variant = _ref3.variant;
  return Object(external_styled_components_["css"])(["padding:0.5rem 0;.active{color:var(--highlight);}", ";"], variant === 'inline' && "\n    padding: 0 0.3rem;\n\n    &:first-child{\n      padding-left: 0;\n    }\n\n    &:last-child {\n      padding-right: 0;\n    }\n  ");
});
var MenuLinksLink = external_styled_components_default.a.a.withConfig({
  displayName: "styled__MenuLinksLink"
})(["color:var(--texts);text-decoration:none;text-transform:uppercase;transition:color 0.5s;&:hover{color:var(--highlight);}"]);
// CONCATENATED MODULE: ./src/components/MenuLinks/index.jsx
var MenuLinks_excluded = ["className", "variant"];

function MenuLinks_extends() { MenuLinks_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuLinks_extends.apply(this, arguments); }

function MenuLinks_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuLinks_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuLinks_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var MenuLinks_MenuLinks = function MenuLinks(_ref) {
  var className = _ref.className,
      variant = _ref.variant,
      props = MenuLinks_objectWithoutProperties(_ref, MenuLinks_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(MenuLinksWrapper, MenuLinks_extends({
    className: className,
    variant: variant
  }, props), /*#__PURE__*/external_react_default.a.createElement(MenuLinksList, {
    variant: variant
  }, MenuLinks_content.map(function (link) {
    return /*#__PURE__*/external_react_default.a.createElement(MenuLinksItem, {
      key: utils_random(),
      variant: variant
    }, /*#__PURE__*/external_react_default.a.createElement(MenuLinksLink, {
      cover: true,
      direction: "left",
      bg: utils_getThemeColor(),
      duration: 0.6,
      href: link.url,
      activeClassName: "active"
    }, link.label));
  })));
};

MenuLinks_MenuLinks.propTypes = {
  className: external_prop_types_default.a.string,
  variant: external_prop_types_default.a.oneOf(['inline', 'column'])
};
MenuLinks_MenuLinks.defaultProps = {
  className: '',
  variant: 'column'
};
/* harmony default export */ var components_MenuLinks = (MenuLinks_MenuLinks);
// CONCATENATED MODULE: ./src/components/NavigationBar/styled.js
var NavigationBar_styled_templateObject;

function NavigationBar_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var NavigationBarWrapper = external_styled_components_default.a.aside.withConfig({
  displayName: "styled__NavigationBarWrapper"
})(["", ""], function (_ref) {
  var variant = _ref.variant;
  return Object(external_styled_components_["css"])(["display:flex;background:var(--mediumBackground);position:fixed;text-align:center;", ";", ";", ""], variant === 'sidebar' && "\n    height: 100vh;\n    width: 20rem;\n    flex-direction: column;\n    padding: 2rem;\n    border-right: 1px solid var(--borders);\n  ", variant === 'navbar' && "\n    width: 100vw;\n    height: auto;\n    flex-direction: row;\n    align-items: center;\n    padding: 0;\n    border-bottom: 1px solid var(--borders);\n    justify-content: space-between;\n  ", external_styled_media_query_default.a.lessThan('large')(NavigationBar_styled_templateObject || (NavigationBar_styled_templateObject = NavigationBar_styled_taggedTemplateLiteral(["\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-bottom: 1px solid var(--borders);\n    height: auto;\n    padding: 1rem 2rem;\n    width: 100%;\n  "]))));
});
// CONCATENATED MODULE: ./src/components/NavigationBar/index.jsx
var NavigationBar_excluded = ["variant", "profileSize", "profileAvatar", "profileDescription", "menuLinksDisplay", "firstMenu", "socialSize"];

function NavigationBar_extends() { NavigationBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return NavigationBar_extends.apply(this, arguments); }

function NavigationBar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = NavigationBar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function NavigationBar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }








var NavigationBar_NavigationBar = function NavigationBar(_ref) {
  var variant = _ref.variant,
      profileSize = _ref.profileSize,
      profileAvatar = _ref.profileAvatar,
      profileDescription = _ref.profileDescription,
      menuLinksDisplay = _ref.menuLinksDisplay,
      firstMenu = _ref.firstMenu,
      socialSize = _ref.socialSize,
      props = NavigationBar_objectWithoutProperties(_ref, NavigationBar_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(NavigationBarWrapper, NavigationBar_extends({
    variant: variant
  }, props), /*#__PURE__*/external_react_default.a.createElement(components_Profile, {
    size: profileSize,
    showAvatar: profileAvatar,
    showDescription: profileDescription
  }), firstMenu ? /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_MenuLinks, {
    variant: menuLinksDisplay
  }), /*#__PURE__*/external_react_default.a.createElement(components_SocialLinks, {
    size: socialSize
  })) : /*#__PURE__*/external_react_default.a.createElement(external_react_default.a.Fragment, null, /*#__PURE__*/external_react_default.a.createElement(components_SocialLinks, {
    size: socialSize
  }), /*#__PURE__*/external_react_default.a.createElement(components_MenuLinks, {
    variant: menuLinksDisplay
  })));
};

NavigationBar_NavigationBar.propTypes = {
  variant: external_prop_types_default.a.oneOf(['navbar', 'sidebar']),
  profileAvatar: external_prop_types_default.a.bool,
  profileDescription: external_prop_types_default.a.bool,
  menuLinksDisplay: external_prop_types_default.a.oneOf(['inline', 'column']),
  firstMenu: external_prop_types_default.a.bool,
  profileSize: external_prop_types_default.a.oneOf(['small', 'auto']),
  socialSize: external_prop_types_default.a.oneOf(['small', 'auto'])
};
NavigationBar_NavigationBar.defaultProps = {
  variant: 'sidebar',
  profileAvatar: false,
  profileDescription: true,
  menuLinksDisplay: 'column',
  firstMenu: false,
  profileSize: 'auto',
  socialSize: 'auto'
};
/* harmony default export */ var components_NavigationBar = (NavigationBar_NavigationBar);
// EXTERNAL MODULE: external "@styled-icons/boxicons-solid/Home"
var Home_ = __webpack_require__("@styled-icons/boxicons-solid/Home");

// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/SearchAlt2"
var SearchAlt2_ = __webpack_require__("@styled-icons/boxicons-regular/SearchAlt2");

// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/User"
var User_ = __webpack_require__("@styled-icons/boxicons-regular/User");

// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/UpArrowAlt"
var UpArrowAlt_ = __webpack_require__("@styled-icons/boxicons-regular/UpArrowAlt");

// EXTERNAL MODULE: external "@styled-icons/remix-line/Lightbulb"
var Lightbulb_ = __webpack_require__("@styled-icons/remix-line/Lightbulb");

// EXTERNAL MODULE: external "@styled-icons/remix-fill/LightbulbFlash"
var LightbulbFlash_ = __webpack_require__("@styled-icons/remix-fill/LightbulbFlash");

// EXTERNAL MODULE: external "@styled-icons/boxicons-solid/Grid"
var Grid_ = __webpack_require__("@styled-icons/boxicons-solid/Grid");

// EXTERNAL MODULE: external "@styled-icons/evaicons-solid/List"
var List_ = __webpack_require__("@styled-icons/evaicons-solid/List");

// EXTERNAL MODULE: external "@styled-icons/bootstrap/FileText"
var FileText_ = __webpack_require__("@styled-icons/bootstrap/FileText");

// CONCATENATED MODULE: ./src/components/MenuBar/Icons.jsx
/* eslint-disable import/no-extraneous-dependencies */









var Icons_Icons = {
  Home: Home_["Home"],
  Search: SearchAlt2_["SearchAlt2"],
  User: User_["User"],
  Arrow: UpArrowAlt_["UpArrowAlt"],
  LightOff: Lightbulb_["Lightbulb"],
  LightOn: LightbulbFlash_["LightbulbFlash"],
  Grid: Grid_["Grid"],
  List: List_["List"],
  FileText: FileText_["FileText"]
};
/* harmony default export */ var MenuBar_Icons = (Icons_Icons);
// CONCATENATED MODULE: ./src/components/MenuBar/styled.js
var MenuBar_styled_templateObject, MenuBar_styled_templateObject2, styled_templateObject3, styled_templateObject4, _templateObject5;

function MenuBar_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var MenuBarWrapper = external_styled_components_default.a.aside.withConfig({
  displayName: "styled__MenuBarWrapper"
})(["", ""], function (_ref) {
  var variant = _ref.variant;
  return Object(external_styled_components_["css"])(["align-items:center;background:var(--mediumBackground);border-left:1px solid var(--borders);display:flex;flex-direction:column;height:100vh;justify-content:space-between;padding:0.8rem 0;position:fixed;right:0;width:3.75rem;transition:background 0.5s;", ";", ";"], external_styled_media_query_default.a.lessThan('large')(MenuBar_styled_templateObject || (MenuBar_styled_templateObject = MenuBar_styled_taggedTemplateLiteral(["\n      border-top: 1px solid var(--borders);\n      bottom: 0;\n      flex-direction: row;\n      height: auto;\n      width: 100vw;\n    "]))), variant === 'bottom' && "\n      width: 100vw;\n      height: 3.75rem;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      bottom: 0;\n    ");
});
var MenuBarGroup = external_styled_components_default.a.div.withConfig({
  displayName: "styled__MenuBarGroup"
})(["", ""], function (_ref2) {
  var variant = _ref2.variant;
  return Object(external_styled_components_["css"])(["display:flex;flex-direction:column;", " ", ";"], external_styled_media_query_default.a.lessThan('large')(MenuBar_styled_templateObject2 || (MenuBar_styled_templateObject2 = MenuBar_styled_taggedTemplateLiteral(["\n      flex-direction: row;\n    "]))), variant === 'bottom' && "\n      flex-direction: row;\n    ");
});
var MenuBarLink = external_styled_components_default.a.a.withConfig({
  displayName: "styled__MenuBarLink"
})(["display:block;&.active{span{color:var(--highlight);}}"]);
var MenuBarItem = external_styled_components_default.a.span.withConfig({
  displayName: "styled__MenuBarItem"
})(["color:var(--texts);cursor:pointer;display:block;height:3.75rem;padding:1.1rem;position:relative;width:3.75rem;&.light{color:var(--highlight);&:hover{color:var(--texts);}}&:hover{color:var(--highlight);}&.display{", "}", " ", ""], external_styled_media_query_default.a.lessThan('large')(styled_templateObject3 || (styled_templateObject3 = MenuBar_styled_taggedTemplateLiteral(["\n      display: none;\n    "]))), external_styled_media_query_default.a.greaterThan('large')(styled_templateObject4 || (styled_templateObject4 = MenuBar_styled_taggedTemplateLiteral(["\n    &:hover {\n      color: var(--highlight);\n    }\n  "]))), external_styled_media_query_default.a.lessThan('large')(_templateObject5 || (_templateObject5 = MenuBar_styled_taggedTemplateLiteral(["\n    height: 3.2rem;\n    padding: .9rem;\n    position: relative;\n    width: 3.2rem;\n  "]))));
// CONCATENATED MODULE: ./src/components/MenuBar/index.jsx
var MenuBar_excluded = ["variant"];

function MenuBar_extends() { MenuBar_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return MenuBar_extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function MenuBar_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = MenuBar_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function MenuBar_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var MenuBar_MenuBar = function MenuBar(_ref) {
  var variant = _ref.variant,
      props = MenuBar_objectWithoutProperties(_ref, MenuBar_excluded);

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      theme = _useState2[0],
      setTheme = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      display = _useState4[0],
      setDisplay = _useState4[1];

  var isLightMode = theme === 'light';
  var isListMode = display === 'list';
  Object(external_react_["useEffect"])(function () {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = function () {
      return setTheme(window.__theme);
    };

    window.__onDisplayChange = function () {
      return setDisplay(window.__display);
    };
  }, []);
  return /*#__PURE__*/external_react_default.a.createElement(MenuBarWrapper, MenuBar_extends({
    variant: variant
  }, props), /*#__PURE__*/external_react_default.a.createElement(MenuBarGroup, {
    variant: variant
  }, /*#__PURE__*/external_react_default.a.createElement(MenuBarLink, {
    href: "/",
    title: "Back to Home",
    cover: true,
    direction: "right",
    bg: utils_getThemeColor(),
    duration: 0.6,
    activeClassName: "active"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuBarItem, null, /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.Home, null))), /*#__PURE__*/external_react_default.a.createElement(MenuBarLink, {
    href: "/posts/",
    title: "Go to Home",
    cover: true,
    direction: "right",
    bg: utils_getThemeColor(),
    duration: 0.6,
    activeClassName: "active"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuBarItem, null, /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.FileText, null))), /*#__PURE__*/external_react_default.a.createElement(MenuBarLink, {
    href: "/about/",
    title: "Go to About",
    cover: true,
    direction: "right",
    bg: utils_getThemeColor(),
    duration: 0.6,
    activeClassName: "active"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuBarItem, null, /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.User, null))), /*#__PURE__*/external_react_default.a.createElement(MenuBarLink, {
    href: "/search/",
    title: "Go to Search",
    cover: true,
    direction: "right",
    bg: utils_getThemeColor(),
    duration: 0.6,
    activeClassName: "active"
  }, /*#__PURE__*/external_react_default.a.createElement(MenuBarItem, null, /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.Search, null)))), /*#__PURE__*/external_react_default.a.createElement(MenuBarGroup, {
    variant: variant
  }, /*#__PURE__*/external_react_default.a.createElement(MenuBarItem, {
    title: "change theme",
    onClick: function onClick() {
      window.__setPreferredTheme(isLightMode ? 'dark' : 'light');
    },
    className: theme
  }, isLightMode ? /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.LightOn, null) : /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.LightOff, null)), variant === 'right' && /*#__PURE__*/external_react_default.a.createElement(MenuBarItem, {
    title: "change posts layout",
    onClick: function onClick() {
      window.__setPreferredDisplay(isListMode ? 'grid' : 'list');
    },
    className: "display"
  }, isListMode ? /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.Grid, null) : /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.List, null)), /*#__PURE__*/external_react_default.a.createElement(MenuBarItem, {
    title: "go to top",
    onClick: function onClick() {
      window.scroll({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, /*#__PURE__*/external_react_default.a.createElement(MenuBar_Icons.Arrow, null))));
};

MenuBar_MenuBar.propTypes = {
  variant: external_prop_types_default.a.oneOf(['right', 'bottom'])
};
MenuBar_MenuBar.defaultProps = {
  variant: 'right'
};
/* harmony default export */ var components_MenuBar = (MenuBar_MenuBar);
// CONCATENATED MODULE: ./src/components/LayoutCustom/styled.js
var LayoutCustom_styled_templateObject, LayoutCustom_styled_templateObject2;

function LayoutCustom_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var LayoutWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__LayoutWrapper"
})(["display:flex;", ""], external_styled_media_query_default.a.lessThan('large')(LayoutCustom_styled_templateObject || (LayoutCustom_styled_templateObject = LayoutCustom_styled_taggedTemplateLiteral(["\n    flex-direction: column;\n  "]))));
var LayoutMain = external_styled_components_default.a.main.withConfig({
  displayName: "styled__LayoutMain"
})(["background:var(--background);min-height:100vh;padding:0 3.75rem 0 20rem;transition:background,color 0.5s;width:100%;body#grid &{grid-template-areas:'posts' 'pagination';}", ""], external_styled_media_query_default.a.lessThan('large')(LayoutCustom_styled_templateObject2 || (LayoutCustom_styled_templateObject2 = LayoutCustom_styled_taggedTemplateLiteral(["\n    padding: 7.5rem 0 5rem 0;\n  "]))));
// CONCATENATED MODULE: ./src/components/LayoutCustom/index.jsx







var LayoutCustom_LayoutCustom = function LayoutCustom(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/external_react_default.a.createElement(LayoutWrapper, null, /*#__PURE__*/external_react_default.a.createElement(global, null), /*#__PURE__*/external_react_default.a.createElement(components_NavigationBar, null), /*#__PURE__*/external_react_default.a.createElement(LayoutMain, null, children), /*#__PURE__*/external_react_default.a.createElement(components_MenuBar, null));
};

LayoutCustom_LayoutCustom.propTypes = {
  children: external_prop_types_default.a.node.isRequired
};
/* harmony default export */ var components_LayoutCustom = (LayoutCustom_LayoutCustom);
// EXTERNAL MODULE: external "react-lazyload"
var external_react_lazyload_ = __webpack_require__("react-lazyload");
var external_react_lazyload_default = /*#__PURE__*/__webpack_require__.n(external_react_lazyload_);

// CONCATENATED MODULE: ./src/components/Loader/styled.js

var loadingAnimation = Object(external_styled_components_["keyframes"])(["0%{transform:rotate(0deg);transition:opacity 0.5s;}100%{transform:rotate(360deg);transition:opacity 0.8s;}"]);
var LoaderWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__LoaderWrapper"
})(["margin:auto;position:absolute;top:35vh;left:0;right:0;z-index:1;width:20rem;height:20rem;border-radius:50%;animation:", " .5s linear infinite;border:1em solid var(--postColor);border-image-source:linear-gradient(to left,(--postColor),var(--borders));border-top:1em solid var(--highlight);box-shadow:0 4px 8px 0 var(--highlight);opacity 0.7;"], loadingAnimation);
/* harmony default export */ var Loader_styled = (LoaderWrapper);
// CONCATENATED MODULE: ./src/components/Loader/index.jsx
var Loader_excluded = ["stopOutside"];

function Loader_extends() { Loader_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Loader_extends.apply(this, arguments); }

function Loader_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Loader_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Loader_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





var Loader_Loader = function Loader(_ref) {
  var stopOutside = _ref.stopOutside,
      props = Loader_objectWithoutProperties(_ref, Loader_excluded);

  var refLoader = external_react_default.a.useRef();

  function removeLoader() {
    refLoader.current.remove();
  }

  Object(external_react_["useEffect"])(function () {
    if (!stopOutside) {
      removeLoader();
    }
  });
  return /*#__PURE__*/external_react_default.a.createElement(Loader_styled, Loader_extends({}, props, {
    ref: refLoader
  }));
};

Loader_Loader.propTypes = {
  stopOutside: external_prop_types_default.a.bool.isRequired
};
/* harmony default export */ var components_Loader = (/*#__PURE__*/external_react_default.a.memo(Loader_Loader));
// CONCATENATED MODULE: ./src/components/HeaderBanner/styled.js
var HeaderBanner_styled_templateObject, HeaderBanner_styled_templateObject2;

function HeaderBanner_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var BannerWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__BannerWrapper"
})(["display:flex;justify-content:center;align-items:center;border-bottom:1px solid var(--borders);background-color:var(--timelineColor);box-shadow:0 4px 8px 0 var(--background);min-height:100vh;transition:0.15s;", ""], external_styled_media_query_default.a.lessThan('large')(HeaderBanner_styled_templateObject || (HeaderBanner_styled_templateObject = HeaderBanner_styled_taggedTemplateLiteral(["\n    display: none;\n  "]))));
var ImageBanner = external_styled_components_default.a.img.withConfig({
  displayName: "styled__ImageBanner"
})(["background-image:linear-gradient(to right,var(--timelineColor) 0%,var(--mediumBackground) 100%);position:absolute;top:0;left:0;width:100%;height:100vh;object-fit:cover;opacity:0.8;"]);
var BannerTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "styled__BannerTitle"
})(["position:absolute;z-index:999;left:0;right:0;text-align:center;color:var(--postColor);text-transform:uppercase;font-size:6rem;font-weight:700;letter-spacing:0.2rem;text-shadow:6px 6px 0px var(--timelineColor);", ""], external_styled_media_query_default.a.lessThan('large')(HeaderBanner_styled_templateObject2 || (HeaderBanner_styled_templateObject2 = HeaderBanner_styled_taggedTemplateLiteral(["\n    font-size: 2.5rem;\n  "]))));
// CONCATENATED MODULE: ./src/components/HeaderBanner/index.jsx
var HeaderBanner_excluded = ["title", "tags"];

function HeaderBanner_slicedToArray(arr, i) { return HeaderBanner_arrayWithHoles(arr) || HeaderBanner_iterableToArrayLimit(arr, i) || HeaderBanner_unsupportedIterableToArray(arr, i) || HeaderBanner_nonIterableRest(); }

function HeaderBanner_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function HeaderBanner_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return HeaderBanner_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return HeaderBanner_arrayLikeToArray(o, minLen); }

function HeaderBanner_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function HeaderBanner_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function HeaderBanner_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function HeaderBanner_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = HeaderBanner_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function HeaderBanner_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var HeaderBanner_HeaderBanner = function HeaderBanner(_ref) {
  var title = _ref.title,
      tags = _ref.tags,
      props = HeaderBanner_objectWithoutProperties(_ref, HeaderBanner_excluded);

  var _useState = Object(external_react_["useState"])(true),
      _useState2 = HeaderBanner_slicedToArray(_useState, 2),
      loader = _useState2[0],
      setLoader = _useState2[1];

  var handleLoader = function handleLoader() {
    return setLoader(!loader);
  };

  return /*#__PURE__*/external_react_default.a.createElement(BannerWrapper, props, /*#__PURE__*/external_react_default.a.createElement(external_react_lazyload_default.a, null, /*#__PURE__*/external_react_default.a.createElement(BannerTitle, null, title), /*#__PURE__*/external_react_default.a.createElement(components_Loader, {
    stopOutside: loader
  }), /*#__PURE__*/external_react_default.a.createElement(ImageBanner, {
    src: "https://source.unsplash.com/1600x900/?desktop,".concat(tags),
    alt: "Random desktop wallpapers about the tags: ".concat(tags),
    onLoad: handleLoader,
    onError: handleLoader
  })));
};

HeaderBanner_HeaderBanner.propTypes = {
  title: external_prop_types_default.a.string,
  tags: external_prop_types_default.a.string
};
HeaderBanner_HeaderBanner.defaultProps = {
  title: '',
  tags: 'nature,star,galaxy,space'
};
/* harmony default export */ var components_HeaderBanner = (/*#__PURE__*/external_react_default.a.memo(HeaderBanner_HeaderBanner));
// CONCATENATED MODULE: ./src/components/LayoutHero/styled.js
var LayoutHero_styled_templateObject;

function LayoutHero_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var LayoutHeroWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__LayoutHeroWrapper"
})(["display:flex;flex-direction:column;"]);
var LayoutHeroMain = external_styled_components_default.a.main.withConfig({
  displayName: "styled__LayoutHeroMain"
})(["background:var(--background);transition:background,color 0.5s;min-height:100vh;padding:2rem 0 5rem 0;", ""], external_styled_media_query_default.a.lessThan('large')(LayoutHero_styled_templateObject || (LayoutHero_styled_templateObject = LayoutHero_styled_taggedTemplateLiteral(["\n    padding: 7.5rem 0 5rem 0;\n  "]))));
// CONCATENATED MODULE: ./src/components/LayoutHero/index.jsx
var LayoutHero_excluded = ["title", "bannerTags", "noBanner", "children"];

function LayoutHero_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = LayoutHero_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function LayoutHero_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









var LayoutHero_LayoutHero = function LayoutHero(_ref) {
  var title = _ref.title,
      bannerTags = _ref.bannerTags,
      noBanner = _ref.noBanner,
      children = _ref.children,
      props = LayoutHero_objectWithoutProperties(_ref, LayoutHero_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(LayoutHeroWrapper, props, /*#__PURE__*/external_react_default.a.createElement(global, null), /*#__PURE__*/external_react_default.a.createElement(components_NavigationBar, {
    variant: "navbar",
    profileSize: "small",
    profileAvatar: false,
    profileDescription: false,
    menuLinksDisplay: "inline",
    firstMenu: true,
    socialSize: "small"
  }), !noBanner && /*#__PURE__*/external_react_default.a.createElement(components_HeaderBanner, {
    title: title,
    tags: bannerTags
  }), /*#__PURE__*/external_react_default.a.createElement(LayoutHeroMain, null, children), /*#__PURE__*/external_react_default.a.createElement(components_MenuBar, {
    variant: "bottom",
    size: "small"
  }));
};

LayoutHero_LayoutHero.propTypes = {
  children: external_prop_types_default.a.node.isRequired,
  title: external_prop_types_default.a.string,
  bannerTags: external_prop_types_default.a.string,
  noBanner: external_prop_types_default.a.bool
};
LayoutHero_LayoutHero.defaultProps = {
  title: 'Jorge Mendes',
  bannerTags: '',
  noBanner: false
};
/* harmony default export */ var components_LayoutHero = (LayoutHero_LayoutHero);
// CONCATENATED MODULE: ./src/components/Pagination/styled.js
var Pagination_styled_templateObject;

function Pagination_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PaginationWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__PaginationWrapper"
})(["align-items:center;color:var(--texts);display:flex;padding:1.5rem 3rem;justify-content:space-between;", " a{transition:0.3s;color:var(--texts);text-decoration:none;transition:color 0.5s;text-transform:uppercase;&:hover{color:var(--highlight);font-weight:500;}}"], external_styled_media_query_default.a.lessThan('large')(Pagination_styled_templateObject || (Pagination_styled_templateObject = Pagination_styled_taggedTemplateLiteral(["\n    font-size: .8rem;\n    padding: 1rem;\n  "]))));
// CONCATENATED MODULE: ./src/components/Pagination/index.jsx





var Pagination_Pagination = function Pagination(_ref) {
  var isFirst = _ref.isFirst,
      isLast = _ref.isLast,
      currentPage = _ref.currentPage,
      numPages = _ref.numPages,
      prevPage = _ref.prevPage,
      nextPage = _ref.nextPage;
  return /*#__PURE__*/external_react_default.a.createElement(PaginationWrapper, null, !isFirst && /*#__PURE__*/external_react_default.a.createElement("a", {
    cover: true,
    direction: "left",
    title: "Previous page",
    bg: utils_getThemeColor(),
    duration: 0.6,
    href: prevPage
  }, "\u2190 Previous Page"), /*#__PURE__*/external_react_default.a.createElement("p", null, currentPage, " of ", numPages), !isLast && /*#__PURE__*/external_react_default.a.createElement("a", {
    cover: true,
    title: "next page",
    direction: "right",
    bg: utils_getThemeColor(),
    duration: 0.6,
    href: nextPage
  }, "Next Page \u2192"));
};

Pagination_Pagination.propTypes = {
  isFirst: external_prop_types_default.a.bool.isRequired,
  isLast: external_prop_types_default.a.bool.isRequired,
  currentPage: external_prop_types_default.a.number.isRequired,
  numPages: external_prop_types_default.a.number.isRequired,
  prevPage: external_prop_types_default.a.string,
  nextPage: external_prop_types_default.a.string
};
Pagination_Pagination.defaultProps = {
  prevPage: '',
  nextPage: ''
};
/* harmony default export */ var components_Pagination = (Pagination_Pagination);
// CONCATENATED MODULE: ./src/components/PostItem/styled.js
var PostItem_styled_templateObject, PostItem_styled_templateObject2, PostItem_styled_templateObject3;

function PostItem_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PostItemLink = external_styled_components_default.a.a.withConfig({
  displayName: "styled__PostItemLink"
})(["color:var(--texts);display:flex;text-decoration:none;body#grid &{background-color:var(--background);}&:hover{color:var(--postColor);}"]);
var PostItemWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__PostItemWrapper"
})(["align-items:center;border-bottom:1px solid var(--borders);display:flex;padding:2rem 3rem;width:100%;transition:background 0.3s,border 0.3s,border-radius 0.3s,box-shadow 0.3s;body#grid &{border:none;padding:2rem 1rem;flex-direction:column;justify-content:center;height:354px;}", " &:hover{background-image:linear-gradient(to right,var(--timelineColor) 0%,var(--mediumBackground) 100%);}"], external_styled_media_query_default.a.lessThan('large')(PostItem_styled_templateObject || (PostItem_styled_templateObject = PostItem_styled_taggedTemplateLiteral(["\n    align-items: flex-start;\n    flex-direction: column;\n    padding: 2rem 1rem;\n  "]))));
var PostItemTag = external_styled_components_default.a.div.withConfig({
  displayName: "styled__PostItemTag"
})(["align-items:center;display:flex;justify-content:center;min-height:90px;min-width:90px;border:2px solid ", ";border-radius:50%;box-shadow:0 1px 10px rgb(29 34 47 / 10%);color:var(--postColor);font-size:1.3rem;font-weight:700;text-transform:uppercase;", " body#grid &{margin-bottom:1.5rem;}"], function (props) {
  return props.background ? props.background : 'var(--highlight)';
}, external_styled_media_query_default.a.lessThan('large')(PostItem_styled_templateObject2 || (PostItem_styled_templateObject2 = PostItem_styled_taggedTemplateLiteral(["\n    border-radius: 0;\n    font-size: 1rem;\n    min-height: auto;\n    min-width: auto;\n    padding: .2rem .5rem;\n    margin-bottom: .7rem;\n  "]))));
var PostItemInfo = external_styled_components_default.a.div.withConfig({
  displayName: "styled__PostItemInfo"
})(["display:flex;flex-direction:column;margin-left:1.5rem;body#grid &{line-height:1.1;margin:0.8rem 0;}", ""], external_styled_media_query_default.a.lessThan('large')(PostItem_styled_templateObject3 || (PostItem_styled_templateObject3 = PostItem_styled_taggedTemplateLiteral(["\n    margin: 0;\n  "]))));
var PostItemDate = external_styled_components_default.a.time.withConfig({
  displayName: "styled__PostItemDate"
})(["font-size:0.9rem;"]);
var PostItemTitle = external_styled_components_default.a.h1.withConfig({
  displayName: "styled__PostItemTitle"
})(["font-size:1.6rem;font-weight:700;margin:0.2rem 0 0.5rem;"]);
var PostItemDescription = external_styled_components_default.a.p.withConfig({
  displayName: "styled__PostItemDescription"
})(["font-size:1.2rem;font-weight:300;line-height:1.2;"]);
// CONCATENATED MODULE: ./src/components/PostItem/index.jsx
var PostItem_excluded = ["slug", "background", "category", "date", "timeToRead", "title", "description"];

function PostItem_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PostItem_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PostItem_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var PostItem_PostItem = function PostItem(_ref) {
  var slug = _ref.slug,
      background = _ref.background,
      category = _ref.category,
      date = _ref.date,
      timeToRead = _ref.timeToRead,
      title = _ref.title,
      description = _ref.description,
      props = PostItem_objectWithoutProperties(_ref, PostItem_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(PostItemLink, {
    href: slug,
    title: "go to post",
    cover: true,
    direction: "right",
    bg: utils_getThemeColor(),
    duration: 0.6
  }, /*#__PURE__*/external_react_default.a.createElement(PostItemWrapper, props, /*#__PURE__*/external_react_default.a.createElement(PostItemTag, {
    background: background
  }, category), /*#__PURE__*/external_react_default.a.createElement(PostItemInfo, null, /*#__PURE__*/external_react_default.a.createElement(PostItemDate, null, date, " - ", timeToRead, " min of read"), /*#__PURE__*/external_react_default.a.createElement(PostItemTitle, null, title), /*#__PURE__*/external_react_default.a.createElement(PostItemDescription, null, description))));
};

PostItem_PostItem.propTypes = {
  slug: external_prop_types_default.a.string.isRequired,
  background: external_prop_types_default.a.string,
  category: external_prop_types_default.a.string.isRequired,
  date: external_prop_types_default.a.string.isRequired,
  timeToRead: external_prop_types_default.a.number.isRequired,
  title: external_prop_types_default.a.string.isRequired,
  description: external_prop_types_default.a.string.isRequired
};
PostItem_PostItem.defaultProps = {
  background: ''
};
/* harmony default export */ var components_PostItem = (PostItem_PostItem);
// CONCATENATED MODULE: ./src/components/PostCard/styled.js
var PostCard_styled_templateObject, PostCard_styled_templateObject2, PostCard_styled_templateObject3;

function PostCard_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var PostCardWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__PostCardWrapper"
})(["display:flex;flex-wrap:wrap;justify-content:space-evenly;", ""], external_styled_media_query_default.a.lessThan('large')(PostCard_styled_templateObject || (PostCard_styled_templateObject = PostCard_styled_taggedTemplateLiteral(["\n    flex-direction: column;\n    padding: .8rem;\n  "]))));
var PostCardItem = external_styled_components_default.a.a.withConfig({
  displayName: "styled__PostCardItem"
})(["border:1px solid var(--mediumBackground);box-shadow:0 1px 10px rgb(29 34 47 / 10%);background:var(--mediumBackground);text-decoration:none;white-space:normal;border-radius:4px;margin-top:1rem;transition:0.3s;text-align:left;cursor:pointer;max-width:33%;&:hover{border:1px solid var(--highlight);background-image:linear-gradient(to right,var(--timelineColor) 0%,var(--mediumBackground) 100%);}", " ", ""], external_styled_media_query_default.a.lessThan('large')(PostCard_styled_templateObject2 || (PostCard_styled_templateObject2 = PostCard_styled_taggedTemplateLiteral(["\n    max-width: 100%;\n    margin-top: 0;\n    margin-bottom: .8rem;\n\n    &:last-child{\n      margin-bottom: 0;\n    }\n  "]))), external_styled_media_query_default.a.greaterThan('huge')(PostCard_styled_templateObject3 || (PostCard_styled_templateObject3 = PostCard_styled_taggedTemplateLiteral(["\n    width: 300px;\n  "]))));
var PostCardImage = external_styled_components_default.a.img.withConfig({
  displayName: "styled__PostCardImage"
})(["object-fit:cover;margin:auto;width:100%;height:8em;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom:1px solid var(--mediumBackground);background-image:linear-gradient(-20deg,", " 0%,var(--highlight) 100%);"], function (props) {
  return props.background;
});
var PostCardContent = external_styled_components_default.a.div.withConfig({
  displayName: "styled__PostCardContent"
})(["padding:1rem;p{margin:0;}"]);
var PostCardTitle = external_styled_components_default.a.h6.withConfig({
  displayName: "styled__PostCardTitle"
})(["color:var(--postColor);text-shadow:rgb(0 0 0 / 1%) 0 0 1px;font-smoothing:antialiased;font-weight:700;line-height:1.4rem;margin-bottom:1rem;height:70px;"]);
var PostCardDesc = external_styled_components_default.a.p.withConfig({
  displayName: "styled__PostCardDesc"
})(["font-size:0.85rem;font-weight:400;line-height:1.2rem;text-transform:capitalize;height:60px;color:var(--texts);margin:0;"]);
var PostCardInfo = external_styled_components_default.a.div.withConfig({
  displayName: "styled__PostCardInfo"
})(["p{font-size:0.75rem;text-align:center;color:var(--postColor);margin:1rem;}"]);
// CONCATENATED MODULE: ./src/components/PostCard/index.jsx
var PostCard_excluded = ["data"];

function PostCard_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = PostCard_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function PostCard_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var PostCard_PostCard = function PostCard(_ref) {
  var data = _ref.data,
      props = PostCard_objectWithoutProperties(_ref, PostCard_excluded);

  return /*#__PURE__*/external_react_default.a.createElement(PostCardWrapper, props, data.map(function (_ref2) {
    var _ref2$node = _ref2.node,
        _ref2$node$frontmatte = _ref2$node.frontmatter,
        category = _ref2$node$frontmatte.category,
        thumbnail = _ref2$node$frontmatte.thumbnail,
        date = _ref2$node$frontmatte.date,
        description = _ref2$node$frontmatte.description,
        title = _ref2$node$frontmatte.title,
        background = _ref2$node$frontmatte.background,
        timeToRead = _ref2$node.timeToRead,
        id = _ref2$node.id,
        slug = _ref2$node.fields.slug;
    return /*#__PURE__*/external_react_default.a.createElement(PostCardItem, {
      key: id,
      href: slug,
      title: title,
      cover: true,
      direction: "right",
      bg: utils_getThemeColor(),
      duration: 0.6
    }, /*#__PURE__*/external_react_default.a.createElement(PostCardImage, {
      src: "/".concat(thumbnail),
      alt: title,
      background: background
    }), /*#__PURE__*/external_react_default.a.createElement(PostCardContent, null, /*#__PURE__*/external_react_default.a.createElement(PostCardTitle, null, title), /*#__PURE__*/external_react_default.a.createElement(PostCardDesc, null, description)), /*#__PURE__*/external_react_default.a.createElement(PostCardInfo, null, /*#__PURE__*/external_react_default.a.createElement("p", null, category, " - ", date, " - ", timeToRead, " min of read")));
  }));
};

PostCard_PostCard.propTypes = {
  data: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.array]).isRequired
};
/* harmony default export */ var components_PostCard = (PostCard_PostCard);
// CONCATENATED MODULE: ./src/components/RecomendedPosts/styled.js
var RecomendedPosts_styled_templateObject;

function RecomendedPosts_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var RecommendedWrapper = external_styled_components_default.a.section.withConfig({
  displayName: "styled__RecommendedWrapper"
})(["border-bottom:1px solid var(--borders);border-top:1px solid var(--borders);background:var(--mediumBackground);display:flex;", ""], external_styled_media_query_default.a.lessThan('large')(RecomendedPosts_styled_templateObject || (RecomendedPosts_styled_templateObject = RecomendedPosts_styled_taggedTemplateLiteral(["\n    padding: 2rem 1rem;\n    line-height: 1.3;\n    font-size: .9rem;\n  "]))));
var RecommendedLink = external_styled_components_default.a.a.withConfig({
  displayName: "styled__RecommendedLink"
})(["align-items:center;background:var(--mediumBackground);color:var(--highlight);display:flex;padding:3rem;text-decoration:none;transition:background 0.5s;width:50%;&:hover{background:var(--borders);}&.previous{border-right:1px solid var(--borders);}&.next{justify-content:flex-end;}&.previous:before{content:'\\2190';margin-right:0.5rem;}&.next:after{content:'\\2192';margin-left:0.5rem;}"]);
// CONCATENATED MODULE: ./src/components/RecomendedPosts/index.jsx





var RecomendedPosts_RecomendedPosts = function RecomendedPosts(_ref) {
  var next = _ref.next,
      previous = _ref.previous;
  return /*#__PURE__*/external_react_default.a.createElement(RecommendedWrapper, null, previous && /*#__PURE__*/external_react_default.a.createElement(RecommendedLink, {
    href: previous.fields.slug,
    cover: true,
    direction: "left",
    bg: utils_getThemeColor(),
    title: "previous",
    className: "previous"
  }, previous.frontmatter.title), next && /*#__PURE__*/external_react_default.a.createElement(RecommendedLink, {
    href: next.fields.slug,
    cover: true,
    direction: "right",
    bg: utils_getThemeColor(),
    title: "next",
    className: "next"
  }, next.frontmatter.title));
};

RecomendedPosts_RecomendedPosts.propTypes = {
  next: external_prop_types_default.a.shape({
    frontmatter: external_prop_types_default.a.shape({
      title: external_prop_types_default.a.string.isRequired
    }),
    fields: external_prop_types_default.a.shape({
      slug: external_prop_types_default.a.string.isRequired
    })
  }),
  previous: external_prop_types_default.a.shape({
    frontmatter: external_prop_types_default.a.shape({
      title: external_prop_types_default.a.string.isRequired
    }),
    fields: external_prop_types_default.a.shape({
      slug: external_prop_types_default.a.string.isRequired
    })
  })
};
RecomendedPosts_RecomendedPosts.defaultProps = {
  next: '',
  previous: ''
};
/* harmony default export */ var components_RecomendedPosts = (RecomendedPosts_RecomendedPosts);
// EXTERNAL MODULE: external "@styled-icons/boxicons-regular/Refresh"
var Refresh_ = __webpack_require__("@styled-icons/boxicons-regular/Refresh");

// CONCATENATED MODULE: ./src/components/SwUpdater/styled.js

var NotificationWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__NotificationWrapper"
})(["display:flex;justify-content:center;align-items:center;position:fixed;z-index:10;width:320px;right:calc(50vw - 320px / 2);padding:20px 10px;border:1px solid var(--borders);background:var(--mediumBackground);color:var(--texts);animation:moveUp 0.5s ease-in-out both;@keyframes moveUp{0%{bottom:-100vh;}100%{bottom:60px;}}"]);
var styled_IconWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__IconWrapper"
})(["margin-left:10px;cursor:pointer;color:var(--texts);width:30px;height:30px;"]);
// CONCATENATED MODULE: ./src/components/SwUpdater/index.jsx




var SwUpdater_SwUpdater = function SwUpdater() {
  return /*#__PURE__*/external_react_default.a.createElement(NotificationWrapper, null, /*#__PURE__*/external_react_default.a.createElement("p", null, "Update - reload the page or click here"), /*#__PURE__*/external_react_default.a.createElement(styled_IconWrapper, null, /*#__PURE__*/external_react_default.a.createElement(Refresh_["Refresh"], {
    onClick: function onClick() {
      return window.location.reload();
    }
  })));
};

/* harmony default export */ var components_SwUpdater = (SwUpdater_SwUpdater);
// EXTERNAL MODULE: external "react-vertical-timeline-component"
var external_react_vertical_timeline_component_ = __webpack_require__("react-vertical-timeline-component");

// EXTERNAL MODULE: external "react-vertical-timeline-component/style.min.css"
var style_min_css_ = __webpack_require__("react-vertical-timeline-component/style.min.css");

// CONCATENATED MODULE: ./src/components/Timeline/styled.js



var TimelineWrapper = external_styled_components_default()(external_react_vertical_timeline_component_["VerticalTimeline"]).withConfig({
  displayName: "styled__TimelineWrapper"
})(["::before{background:var(--timelineLine);}.vertical-timeline-element-date{color:var(--timelineDate);}"]);
var TimelineElement = external_styled_components_default()(external_react_vertical_timeline_component_["VerticalTimelineElement"]).withConfig({
  displayName: "styled__TimelineElement"
})(["h3,h4,p{color:var(--postColor);}"]);
// CONCATENATED MODULE: ./src/components/Timeline/index.jsx







var Timeline_Timeline = function Timeline(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/external_react_default.a.createElement(TimelineWrapper, {
    className: "vertical-timeline.vertical-timeline-custom-line"
  }, data.map(function (item) {
    var Icon = SocialLinks_Icons[item.icon];
    return /*#__PURE__*/external_react_default.a.createElement(TimelineElement, {
      key: utils_random(),
      className: "vertical-timeline-element--".concat(item.icon.toLowerCase()),
      contentStyle: {
        background: 'var(--timelineColor)',
        color: 'var(--borders)'
      },
      contentArrowStyle: {
        borderRight: '8px solid var(--borders)'
      },
      date: item.period,
      iconStyle: {
        background: 'var(--timelineColor)',
        color: 'var(--borders)'
      },
      icon: /*#__PURE__*/external_react_default.a.createElement(Icon, null)
    }, /*#__PURE__*/external_react_default.a.createElement("h3", {
      className: "vertical-timeline-element-title"
    }, item.institution), /*#__PURE__*/external_react_default.a.createElement("h4", {
      className: "vertical-timeline-element-subtitle"
    }, item.position), /*#__PURE__*/external_react_default.a.createElement("p", null, item.description), /*#__PURE__*/external_react_default.a.createElement("p", null, item.location));
  }), /*#__PURE__*/external_react_default.a.createElement(TimelineElement, {
    iconStyle: {
      background: 'var(--timelineColor)',
      color: 'var(--borders)'
    },
    icon: /*#__PURE__*/external_react_default.a.createElement(Github_["Github"], null)
  }));
};

Timeline_Timeline.propTypes = {
  data: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.array]).isRequired
};
/* harmony default export */ var components_Timeline = (Timeline_Timeline);
// EXTERNAL MODULE: external "@styled-icons/bootstrap/StarFill"
var StarFill_ = __webpack_require__("@styled-icons/bootstrap/StarFill");

// CONCATENATED MODULE: ./src/components/Skills/styled.js
var Skills_styled_templateObject, Skills_styled_templateObject2;

function Skills_styled_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var SkillsWrapper = external_styled_components_default.a.div.withConfig({
  displayName: "styled__SkillsWrapper"
})(["display:flex;justify-content:center;align-items:center;flex-direction:column;"]);
var SkillTitle = external_styled_components_default.a.h6.withConfig({
  displayName: "styled__SkillTitle"
})(["text-transform:Capitalize;color:var(--postColor);font-weight:400;letter-spacing:0.2em;text-shadow:2px 2px 0px var(--timelineColor);font-size:1.5rem;margin-bottom:1rem;", ";"], external_styled_media_query_default.a.lessThan('large')(Skills_styled_templateObject || (Skills_styled_templateObject = Skills_styled_taggedTemplateLiteral(["\n    margin-top: 2rem;\n  "]))));
var SkillsContainer = external_styled_components_default.a.div.withConfig({
  displayName: "styled__SkillsContainer"
})(["display:flex;align-items:center;", ";"], external_styled_media_query_default.a.lessThan('large')(Skills_styled_templateObject2 || (Skills_styled_templateObject2 = Skills_styled_taggedTemplateLiteral(["\n    width: 100%;\n    justify-content: space-around;\n  "]))));
var SkillName = external_styled_components_default.a.p.withConfig({
  displayName: "styled__SkillName"
})(["min-width:150px;font-weight:bold;color:var(--postColor);text-transform:uppercase;font-size:1rem;margin-right:1rem;"]);
var SkillLevel = external_styled_components_default.a.p.withConfig({
  displayName: "styled__SkillLevel"
})(["min-width:100px;color:var(--highlight);&:hover{color:yellow;}"]);
var SkillStar = external_styled_components_default()(StarFill_["StarFill"]).withConfig({
  displayName: "styled__SkillStar"
})(["width:1rem;margin-right:.3rem;\xA8 cursor:pointer;&:last-child{margin-right:0;}"]);
// CONCATENATED MODULE: ./src/components/Skills/index.jsx
var Skills_excluded = ["title", "data"];

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || Skills_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Skills_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Skills_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Skills_arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return Skills_arrayLikeToArray(arr); }

function Skills_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Skills_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = Skills_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function Skills_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






var Skills_Skills = function Skills(_ref) {
  var title = _ref.title,
      data = _ref.data,
      props = Skills_objectWithoutProperties(_ref, Skills_excluded);

  var stars = function stars(level) {
    return _toConsumableArray(Array(level)).map(function () {
      return /*#__PURE__*/external_react_default.a.createElement(SkillStar, {
        key: utils_random()
      });
    });
  };

  return /*#__PURE__*/external_react_default.a.createElement(SkillsWrapper, props, /*#__PURE__*/external_react_default.a.createElement(SkillTitle, null, title), data.map(function (skill) {
    return /*#__PURE__*/external_react_default.a.createElement(SkillsContainer, {
      key: utils_random()
    }, /*#__PURE__*/external_react_default.a.createElement(SkillName, null, skill.name), /*#__PURE__*/external_react_default.a.createElement(SkillLevel, null, stars(skill.level, skill.id)));
  }));
};

Skills_Skills.propTypes = {
  data: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.array]).isRequired,
  title: external_prop_types_default.a.string
};
Skills_Skills.defaultProps = {
  title: ''
};
/* harmony default export */ var components_Skills = (Skills_Skills);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__("react-helmet");

// CONCATENATED MODULE: ./src/components/Seo/index.jsx




function Seo(_ref) {
  var description = _ref.description,
      lang = _ref.lang,
      meta = _ref.meta,
      title = _ref.title,
      image = _ref.image,
      site = _ref.site;
  var metaDescription = description || site.siteMetadata.description;
  var url = site.siteMetadata.siteUrl;
  var ogImage = "".concat(url).concat(image || '/assets/img/jorge_banner.png');
  return /*#__PURE__*/external_react_default.a.createElement(external_react_helmet_["Helmet"], {
    htmlAttributes: {
      lang: lang
    },
    title: title,
    titleTemplate: "%s | ".concat(site.siteMetadata.title),
    meta: [{
      name: "description",
      content: metaDescription
    }, {
      property: "og:title",
      content: title
    }, {
      property: "og:image",
      content: ogImage
    }, {
      property: "og:description",
      content: metaDescription
    }, {
      property: "og:type",
      content: "website"
    }, {
      name: "twitter:card",
      content: "summary_large_image"
    }, {
      name: "twitter:image:src",
      content: ogImage
    }, {
      name: "twitter:creator",
      content: site.siteMetadata.author
    }, {
      name: "twitter:title",
      content: title
    }, {
      name: "twitter:description",
      content: metaDescription
    }].concat(meta)
  });
}

Seo.propTypes = {
  description: external_prop_types_default.a.string,
  lang: external_prop_types_default.a.string,
  meta: external_prop_types_default.a.arrayOf(external_prop_types_default.a.object),
  title: external_prop_types_default.a.string.isRequired,
  image: external_prop_types_default.a.string,
  site: external_prop_types_default.a.arrayOf(external_prop_types_default.a.object).isRequired
};
Seo.defaultProps = {
  lang: "en",
  meta: [],
  description: "",
  image: ''
};
/* harmony default export */ var components_Seo = (Seo);
// CONCATENATED MODULE: ./src/index.js
/* ********************
styles and themes
******************** */

/** *******************
    components
******************** */





















/* ********************
    utils
******************** */




/***/ }),

/***/ "@styled-icons/bootstrap/FileText":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/bootstrap/FileText");

/***/ }),

/***/ "@styled-icons/bootstrap/StarFill":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/bootstrap/StarFill");

/***/ }),

/***/ "@styled-icons/boxicons-logos/Facebook":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-logos/Facebook");

/***/ }),

/***/ "@styled-icons/boxicons-logos/Github":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-logos/Github");

/***/ }),

/***/ "@styled-icons/boxicons-logos/Instagram":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-logos/Instagram");

/***/ }),

/***/ "@styled-icons/boxicons-logos/Linkedin":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-logos/Linkedin");

/***/ }),

/***/ "@styled-icons/boxicons-regular/Refresh":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/Refresh");

/***/ }),

/***/ "@styled-icons/boxicons-regular/SearchAlt2":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/SearchAlt2");

/***/ }),

/***/ "@styled-icons/boxicons-regular/UpArrowAlt":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/UpArrowAlt");

/***/ }),

/***/ "@styled-icons/boxicons-regular/User":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-regular/User");

/***/ }),

/***/ "@styled-icons/boxicons-solid/Grid":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-solid/Grid");

/***/ }),

/***/ "@styled-icons/boxicons-solid/Home":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/boxicons-solid/Home");

/***/ }),

/***/ "@styled-icons/evaicons-solid/List":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/evaicons-solid/List");

/***/ }),

/***/ "@styled-icons/material/Work":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/material/Work");

/***/ }),

/***/ "@styled-icons/remix-fill/LightbulbFlash":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/remix-fill/LightbulbFlash");

/***/ }),

/***/ "@styled-icons/remix-line/Lightbulb":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/remix-line/Lightbulb");

/***/ }),

/***/ "@styled-icons/simple-icons/Gmail":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/simple-icons/Gmail");

/***/ }),

/***/ "@styled-icons/zondicons/Education":
/***/ (function(module, exports) {

module.exports = require("@styled-icons/zondicons/Education");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-disqus-comments":
/***/ (function(module, exports) {

module.exports = require("react-disqus-comments");

/***/ }),

/***/ "react-helmet":
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-lazyload":
/***/ (function(module, exports) {

module.exports = require("react-lazyload");

/***/ }),

/***/ "react-vertical-timeline-component":
/***/ (function(module, exports) {

module.exports = require("react-vertical-timeline-component");

/***/ }),

/***/ "react-vertical-timeline-component/style.min.css":
/***/ (function(module, exports) {

module.exports = require("react-vertical-timeline-component/style.min.css");

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