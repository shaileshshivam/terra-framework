(window.webpackJsonp=window.webpackJsonp||[]).push([[204],{1087:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(19)),o=r(n(24)),a=r(n(21)),d=r(n(25)),c=r(n(28)),l=r(n(29)),i=r(n(30)),f=r(n(0)),s=r(n(2));function p(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=(0,i.default)(e);if(t){var u=(0,i.default)(this).constructor;n=Reflect.construct(r,arguments,u)}else n=r.apply(this,arguments);return(0,l.default)(this,n)}}n(1109),n(1110);var m={children:s.default.node.isRequired},v=function(e){(0,c.default)(n,e);var t=p(n);function n(){return(0,a.default)(this,n),t.apply(this,arguments)}return(0,d.default)(n,[{key:"componentDidMount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"componentWillUnmount",value:function(){document.body.classList.toggle("embedded-content-provider-test-template-body")}},{key:"render",value:function(){var e=this.props,t=e.children,n=(0,o.default)(e,["children"]);return f.default.createElement("div",(0,u.default)({"data-embedded-content-consumer-provider-test-template":!0},n),t)}}]),n}(f.default.Component);v.propTypes=m;var h=v;t.default=h},1088:function(e,t,n){"use strict";n.r(t),t.default={"content-wrapper":"EmbeddedContentConsumerCommon-module__content-wrapper___1WHhV"}},1109:function(e,t,n){"use strict";n.r(t)},1110:function(e,t,n){"use strict";n.r(t)},1418:function(e,t,n){"use strict";var r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=r(n(0)),o=r(n(5)),a=r(n(1087)),d=r(n(1088)),c=o.default.bind(d.default),l=function(){return u.default.createElement(a.default,null,u.default.createElement("div",{className:c("content-wrapper")},u.default.createElement("h1",null,"Basic Content"),u.default.createElement("p",null,"This example demonstrates that the embedded content consumer will display the providers web content within an iframe.")))};t.default=l}}]);