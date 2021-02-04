(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),l=n.n(a),r=n(988),o=n.n(r),m=function(e){var t=e.url;return l.a.createElement(o.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-context",name:"terra-theme-context",version:"1.4.0",url:t})}},1335:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(5)),o=a(n(7)),m=a(n(1386)),c=r.default.bind(m.default),d=function(){var e=l.default.useContext(o.default);return l.default.createElement("div",{className:c("themed",e.className)},l.default.createElement("h1",null,"Theme Name: ".concat(e.name)),l.default.createElement("div",{className:c("themed-block")}))};t.default=d},1385:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=a(n(0)),r=a(n(351)),o=a(n(1335)),m=function(){return l.default.createElement(r.default,{theme:{name:"test-theme",className:"test-theme"}},l.default.createElement(o.default,null))};t.default=m},1386:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___2imPC","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___1w-U8","test-theme":"ThemedComponent-module__test-theme___2L1Y5",themed:"ThemedComponent-module__themed___2By-3","themed-block":"ThemedComponent-module__themed-block___3de6s"}},1402:function(e,t,n){"use strict";var a=n(0),l=n.n(a),r=n(1385),o=n.n(r),m=n(19),c=n.n(m),d=n(24),u=n.n(d),i=n(335),s={};function p(e){var t=e.components,n=u()(e,["components"]);return Object(i.mdx)("wrapper",c()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)("pre",null,Object(i.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n\nimport ThemedComponent from './ThemedComponent';\n\nconst ThemeContextProviderExample = () => (\n  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme' }}>\n    <ThemedComponent />\n  </ThemeContextProvider>\n);\n\nexport default ThemeContextProviderExample;\n\n")))}p.isMDXComponent=!0;var f=n(990),h=n.n(f);t.a=function(e){var t=e.title,n=e.description,a=e.isExpanded;return l.a.createElement(h.a,{title:t||"Theme Context Provider Example",description:n,example:l.a.createElement(o.a,null),exampleSrc:l.a.createElement(p,null),isExpanded:a})}},2171:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return y}));var a=n(19),l=n.n(a),r=n(24),o=n.n(r),m=n(0),c=n.n(m),d=n(335),u=n(1172),i=(n(1402),n(1335)),s=n.n(i),p={};function f(e){var t=e.components,n=o()(e,["components"]);return Object(d.mdx)("wrapper",l()({},p,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport classNames from 'classnames/bind';\nimport ThemeContext from 'terra-theme-context';\n\nimport styles from './ThemedComponent.module.scss';\n\nconst cx = classNames.bind(styles);\n\nconst Themed = () => {\n  const theme = React.useContext(ThemeContext);\n  return (\n    <div className={cx('themed', theme.className)}>\n      <h1>\n        {`Theme Name: ${theme.name}`}\n      </h1>\n      <div className={cx('themed-block')} />\n    </div>\n  );\n};\n\nexport default Themed;\n\n")))}f.isMDXComponent=!0;var h=n(990),b=n.n(h),_={};function x(e){var t=e.components,n=o()(e,["components"]);return Object(d.mdx)("wrapper",l()({},_,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-scss"},"//Themes\n@import './ThemedComponent.clinical-lowlight-theme.module';\n@import './ThemedComponent.orion-fusion-theme.module';\n@import './ThemedComponent.test-theme.module';\n\n:local {\n  .themed {\n    height: 100%;\n    overflow: auto;\n    padding: 24px;\n    position: relative;\n  }\n\n  .themed-block {\n    background-color: var(--terra-theme-context-themed-component-block-background-color, #0079be);\n    height: 24px;\n  }\n}\n\n")))}x.isMDXComponent=!0;var v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return c.a.createElement(b.a,{title:t||"Themed Component",description:n,example:c.a.createElement(s.a,null),exampleCssSrc:c.a.createElement(x,null),exampleSrc:c.a.createElement(f,null),isExpanded:a})},g={};function y(e){var t=e.components,n=o()(e,["components"]);return Object(d.mdx)("wrapper",l()({},g,n,{components:t,mdxType:"MDXLayout"}),Object(d.mdx)(u.a,{mdxType:"Badge"}),Object(d.mdx)("h1",{id:"terra-theme-context"},"Terra Theme Context"),Object(d.mdx)("p",null,"A React context to provide the current theme. This package is intended to be used by Terra components only. Any terra consumers or custom Terra components should consume the context from the ",Object(d.mdx)("inlineCode",{parentName:"p"},"terra-application")," package."),Object(d.mdx)("p",null,"This context can be used to apply any theme related changes to a component."),Object(d.mdx)("p",null,"The most common use would be to apply a theme class to the root tag of the component to apply theme variables. See below for an example."),Object(d.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(d.mdx)("ul",null,Object(d.mdx)("li",{parentName:"ul"},"Install with ",Object(d.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(d.mdx)("ul",{parentName:"li"},Object(d.mdx)("li",{parentName:"ul"},Object(d.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-context"))))),Object(d.mdx)("h2",{id:"usage"},"Usage"),Object(d.mdx)("pre",null,Object(d.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ThemeContext from 'terra-theme-context';\n")),Object(d.mdx)("h2",{id:"examples"},"Examples"),Object(d.mdx)(v,{title:"A component using the theme context",mdxType:"ThemedComponent"}),Object(d.mdx)("h2",{id:"context-value"},"Context Value"),Object(d.mdx)("p",null,"The ThemeContext provides an object with the following values:"),Object(d.mdx)("table",null,Object(d.mdx)("thead",{parentName:"table"},Object(d.mdx)("tr",{parentName:"thead"},Object(d.mdx)("th",{parentName:"tr",align:null},"Key Name"),Object(d.mdx)("th",{parentName:"tr",align:null},"Type"),Object(d.mdx)("th",{parentName:"tr",align:null},"Is Required"),Object(d.mdx)("th",{parentName:"tr",align:null},"DefaultValue"),Object(d.mdx)("th",{parentName:"tr",align:null},"Description"))),Object(d.mdx)("tbody",{parentName:"table"},Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"name")),Object(d.mdx)("td",{parentName:"tr",align:null},"String"),Object(d.mdx)("td",{parentName:"tr",align:null},"optional"),Object(d.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(d.mdx)("td",{parentName:"tr",align:null},"The current application theme name. This field requires use of the terra-toolkit webpack config.")),Object(d.mdx)("tr",{parentName:"tbody"},Object(d.mdx)("td",{parentName:"tr",align:null},Object(d.mdx)("inlineCode",{parentName:"td"},"className")),Object(d.mdx)("td",{parentName:"tr",align:null},"String"),Object(d.mdx)("td",{parentName:"tr",align:null},"optional"),Object(d.mdx)("td",{parentName:"tr",align:null},"undefined"),Object(d.mdx)("td",{parentName:"tr",align:null},"The current application theme className. The default theme is indicated as undefined or empty string.")))))}y.isMDXComponent=!0},988:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=m(n(0)),l=m(n(2)),r=m(n(5)),o=m(n(989));function m(e){return e&&e.__esModule?e:{default:e}}var c=r.default.bind(o.default),d={name:l.default.string.isRequired,src:l.default.string,url:l.default.string,version:l.default.string.isRequired},u=function(e){var t=e.src,n=e.name,l=e.url,r=e.version,o=a.default.createElement("a",{className:c("badge"),href:l||"https://www.npmjs.org/package/".concat(n,"/v/").concat(r)},a.default.createElement("span",{className:c("badge-name")},l?"package":"npm"),a.default.createElement("span",{className:c("badge-version")},"v".concat(r))),m=t?a.default.createElement("a",{className:c("badge"),href:t},a.default.createElement("span",{className:c("badge-name")},"github"),a.default.createElement("span",{className:c("badge-version")},"source")):void 0;return a.default.createElement("div",{className:c("badge-container")},o,m)};u.propTypes=d;var i=u;t.default=i},989:function(e,t,n){"use strict";n.r(t),t.default={badge:"Badges-module__badge___1ATf2","badge-container":"Badges-module__badge-container___5v0AK","badge-name":"Badges-module__badge-name___1rRv5","badge-version":"Badges-module__badge-version___2Cim-"}},990:function(e,t,n){"use strict";function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!=typeof e)return{default:e};var t=p();if(t&&t.has(e))return t.get(e);var n={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=l?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(0)),r=s(n(2)),o=s(n(5)),m=n(95),c=s(n(995)),d=s(n(336)),u=n(22),i=s(n(996));function s(e){return e&&e.__esModule?e:{default:e}}function p(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return p=function(){return e},e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,l=!1,r=void 0;try{for(var o,m=e[Symbol.iterator]();!(a=(o=m.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){l=!0,r=e}finally{try{a||null==m.return||m.return()}finally{if(l)throw r}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var b=o.default.bind(i.default),_={example:r.default.element,exampleSrc:r.default.element,exampleCssSrc:r.default.element,title:r.default.string,description:r.default.node,isExpanded:r.default.bool},x=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","true")},v=function(e){e.currentTarget.setAttribute("data-focus-styles-enabled","false")},g=function(e){var t=e.example,n=e.exampleSrc,a=e.exampleCssSrc,r=e.title,o=e.description,i=e.isExpanded,s=f((0,l.useState)(i),2),p=s[0],h=s[1],_=f((0,l.useState)(!1),2),g=_[0],y=_[1],j=l.default.useContext(m.ThemeContext),N=void 0!==a,E=function(){y(!g),p&&h(!p)},T=function(){h(!p),g&&y(!g)},O=function(e,t){e.nativeEvent.keyCode!==u.KEY_SPACE&&e.nativeEvent.keyCode!==u.KEY_RETURN||(e.preventDefault(),t())};return l.default.createElement("div",{className:b("template",j.className)},l.default.createElement("div",{className:b("header")},r&&l.default.createElement("h2",{className:b("title")},r)),l.default.createElement("div",{className:b("content")},o&&l.default.createElement("div",{className:b("description")},o),t),l.default.createElement("div",{className:b("footer")},n?l.default.createElement("div",{className:b("button-container")},N&&l.default.createElement("button",{type:"button",className:b("css-toggle","item",{"is-selected":g}),onClick:E,onKeyDown:function(e){return O(e,E)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:b("chevron")}),l.default.createElement("span",null,"CSS"),l.default.createElement(d.default,{className:b("chevron")})),l.default.createElement("button",{type:"button",className:b("code-toggle","item",{"is-selected":p}),onClick:T,onKeyDown:function(e){return O(e,T)},onBlur:x,onMouseDown:v,tabIndex:0,"data-focus-styles-enabled":!0},l.default.createElement(c.default,{className:b("chevron")}),l.default.createElement("span",null,"Code"),l.default.createElement(d.default,{className:b("chevron")}))):null,l.default.createElement("div",null,g&&l.default.createElement("div",{className:b("css")},a),p&&l.default.createElement("div",{className:b("code")},n))))};g.propTypes=_,g.defaultProps={isExpanded:!1};var y=g;t.default=y},995:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n(0)),l=r(n(27));function r(e){return e&&e.__esModule?e:{default:e}}function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var m=function(e){var t=o({},e);return a.default.createElement(l.default,t,a.default.createElement("path",{d:"M10.3 24L33.8 0l3.9 3.8L18 24l19.7 20.2-3.9 3.8z"}))};m.displayName="IconChevronLeft",m.defaultProps={className:"",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",isBidi:!0};var c=m;t.default=c},996:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ExampleTemplate-module__clinical-lowlight-theme___1O6_b","orion-fusion-theme":"ExampleTemplate-module__orion-fusion-theme___1ZoHH",template:"ExampleTemplate-module__template___1B5g9",header:"ExampleTemplate-module__header___2bR5C",content:"ExampleTemplate-module__content___2SASu",description:"ExampleTemplate-module__description___3lxCI",footer:"ExampleTemplate-module__footer___2Ksgb","button-container":"ExampleTemplate-module__button-container___14QQP",css:"ExampleTemplate-module__css___jQeii",code:"ExampleTemplate-module__code___cXBxV","css-toggle":"ExampleTemplate-module__css-toggle___SAHk3","code-toggle":"ExampleTemplate-module__code-toggle___2m6hb","is-selected":"ExampleTemplate-module__is-selected___1x5R9",item:"ExampleTemplate-module__item___3iCxl",chevron:"ExampleTemplate-module__chevron___3omkp",title:"ExampleTemplate-module__title___1WjQj","dynamic-content":"ExampleTemplate-module__dynamic-content___2bRVU"}}}]);