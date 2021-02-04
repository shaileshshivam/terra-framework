/*! For license information please see 8-a5ecdd207f6d5932a2c1.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1542:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n(0)),r=c(n(1543)),i=c(n(1546)),a=c(n(1547)),l=c(n(7)),s=c(n(1548)),u=c(n(1549));function c(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var h=a.default.bind(s.default),m={checked:r.default.bool,defaultChecked:r.default.bool,id:r.default.string,inputAttrs:r.default.object,disabled:r.default.bool,isInline:r.default.bool,isLabelHidden:r.default.bool,labelText:r.default.string.isRequired,labelTextAttrs:r.default.object,name:r.default.string,onBlur:r.default.func,onChange:r.default.func,onFocus:r.default.func,value:r.default.string},_={checked:void 0,defaultChecked:void 0,id:void 0,inputAttrs:{},disabled:!1,isInline:!1,isLabelHidden:!1,labelTextAttrs:{},name:null,onBlur:void 0,onChange:void 0,onFocus:void 0,value:void 0},v=function(e){var t=e.checked,n=e.defaultChecked,r=e.inputAttrs,a=e.id,s=e.disabled,c=e.isInline,m=e.isLabelHidden,_=e.labelText,v=e.labelTextAttrs,y=e.name,x=e.onBlur,O=e.onChange,g=e.onFocus,k=e.value,w=b(e,["checked","defaultChecked","inputAttrs","id","disabled","isInline","isLabelHidden","labelText","labelTextAttrs","name","onBlur","onChange","onFocus","value"]),C=o.default.useContext(l.default),j=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},r);void 0!==t?j.checked=t:j.defaultChecked=n;var P=(0,i.default)(h("checkbox",{"is-inline":c},C.className),w.className),T=h(["label",{"is-disabled":s},{"is-mobile":u.default.isConsideredMobileDevice()},v.className]),A=h(["native-input",r.className]),E=h(["label-text",{"is-hidden":m},{"is-mobile":u.default.isConsideredMobileDevice()}]),D=null;return m?(j["aria-label"]=_,D=o.default.createElement("span",d({},v,{className:E}))):D=o.default.createElement("span",d({},v,{className:E}),_),o.default.createElement("div",d({},w,{className:P}),o.default.createElement("label",{htmlFor:a,className:T},o.default.createElement("input",d({},j,{type:"checkbox",id:a,disabled:s,name:y,value:k,onChange:O,onFocus:g,onBlur:x,className:A})),D))};v.propTypes=m,v.defaultProps=_,v.isCheckbox=!0;var y=v;t.default=y},1543:function(e,t,n){e.exports=n(1544)()},1544:function(e,t,n){"use strict";var o=n(1545);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,a){if(a!==o){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},1545:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},1546:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(o);else if(Array.isArray(o)&&o.length){var a=r.apply(null,o);a&&e.push(a)}else if("object"===i)for(var l in o)n.call(o,l)&&o[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},1547:function(e,t,n){var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var i=typeof o;if("string"===i||"number"===i)e.push(this&&this[o]||o);else if(Array.isArray(o))e.push(r.apply(this,o));else if("object"===i)for(var a in o)n.call(o,a)&&o[a]&&e.push(this&&this[a]||a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},1548:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"Checkbox-module__clinical-lowlight-theme___E682H","orion-fusion-theme":"Checkbox-module__orion-fusion-theme___1g8Iw",checkbox:"Checkbox-module__checkbox___2e9nD",label:"Checkbox-module__label___3KkUv","is-mobile":"Checkbox-module__is-mobile___1JhhC","native-input":"Checkbox-module__native-input___1WcyB","label-text":"Checkbox-module__label-text___2HgY0","is-hidden":"Checkbox-module__is-hidden___hw4cg","is-disabled":"Checkbox-module__is-disabled___2pASP","is-inline":"Checkbox-module__is-inline___2lk2K"}},1549:function(e,t,n){"use strict";var o={isConsideredMobileDevice:function(){return window.matchMedia("(max-width: 1024px)").matches&&("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0)}};e.exports=o}}]);