(window.webpackJsonp=window.webpackJsonp||[]).push([[406],{1050:function(e,t,r){"use strict";var a=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(19)),o=a(r(24)),i=a(r(0)),c=a(r(2)),s=a(r(10)),l=a(r(5)),h=a(r(7)),d=a(r(1062)),m=l.default.bind(d.default),u={sections:c.default.arrayOf(c.default.shape({headerText:c.default.string,links:c.default.arrayOf(c.default.shape({text:c.default.string.isRequired,href:c.default.string.isRequired,target:c.default.string}))})),isVertical:c.default.bool,contentLeft:c.default.node,contentRight:c.default.node,contentBottom:c.default.node},f=function(e){for(var t=e.sections,r=e.isVertical,a=e.contentLeft,c=e.contentRight,l=e.contentBottom,d=(0,o.default)(e,["sections","isVertical","contentLeft","contentRight","contentBottom"]),u=i.default.useContext(h.default),f=(0,s.default)(m("brand-footer",u.className),d.className),_=t,p=0;p<_.length;p+=1)_[p].id=p;var x,g=_.some((function(e){return e.headerText}));return _.length>0&&(x=i.default.createElement("nav",{className:m("nav",r?"nav-vertical":"nav-horizontal")},_.map((function(e){return i.default.createElement("section",{className:m("navigation-section"),key:e.id},(g&&r||e.headerText)&&i.default.createElement("h3",{className:m("list-header"),key:e.headerText},e.headerText||"​"),i.default.createElement("ul",{className:m("menu")},e.links&&e.links.map((function(e,t){var a=void 0!==e.target?{target:e.target}:{},o=!r&&t>=1?i.default.createElement("span",{className:m("separator"),"aria-hidden":!0},"/"):"";return i.default.createElement("li",{className:m("list-item"),key:e.text+e.href},o,i.default.createElement("a",(0,n.default)({className:m("link"),href:e.href},a),e.text))}))))})))),i.default.createElement("footer",(0,n.default)({role:"contentinfo"},d,{className:f}),x,i.default.createElement("div",{className:m("footer-content")},i.default.createElement("div",{className:m("content-top")},a,c),i.default.createElement("div",{className:m("content-bottom")},l)))};f.propTypes=u,f.defaultProps={sections:[],isVertical:!1,contentLeft:null,contentRight:null,contentBottom:null};var _=f;t.default=_},1062:function(e,t,r){"use strict";r.r(t),t.default={"orion-fusion-theme":"BrandFooter-module__orion-fusion-theme___URPpI","clinical-lowlight-theme":"BrandFooter-module__clinical-lowlight-theme___3A5eY","brand-footer":"BrandFooter-module__brand-footer___3gBaj",nav:"BrandFooter-module__nav___24cym","nav-vertical":"BrandFooter-module__nav-vertical___3PHTo","navigation-section":"BrandFooter-module__navigation-section___3n1UT",menu:"BrandFooter-module__menu___3NJDQ","list-item":"BrandFooter-module__list-item___2rAtU","list-header":"BrandFooter-module__list-header___N_jbP","nav-horizontal":"BrandFooter-module__nav-horizontal___2iHiJ",separator:"BrandFooter-module__separator___1nlWS",link:"BrandFooter-module__link___12UrH","footer-content":"BrandFooter-module__footer-content___3a4p3","content-top":"BrandFooter-module__content-top___21NjW","content-bottom":"BrandFooter-module__content-bottom___3dAu_"}},1870:function(e,t,r){"use strict";var a=r(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(r(0)),o=a(r(1050));t.default=function(){return n.default.createElement(o.default,{isVertical:!0,sections:[{headerText:"Links",links:[{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homea"},{text:"Cerner",href:"https://www.cerner.com/a",target:"_blank"},{text:"Cerner",href:"https://www.cerner.com/b",target:"_blank"},{text:"Cerner",href:"https://www.cerner.com/c",target:"_blank"},{text:"Cerner",href:"https://www.cerner.com/d",target:"_blank"}]},{headerText:"More Links",links:[{text:"Cerner Engineering",href:"https://engineering.cerner.com/a"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/b"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/c"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/d"},{text:"Cerner Engineering",href:"https://engineering.cerner.com/e"}]},{headerText:"Extra Links",links:[{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeb"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homec"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homed"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homee"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homef"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeg"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeh"}]},{links:[{text:"No Header",href:"http://terra-ui.com/static/#/site/homea"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homeb"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homec"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homed"}]},{links:[{text:"No Header",href:"http://terra-ui.com/static/#/site/homea"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homeb"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homec"},{text:"No Header",href:"http://terra-ui.com/static/#/site/homed"}]},{headerText:"Extra Links",links:[{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeb"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homec"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homed"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homee"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homef"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeg"},{text:"Terra UI",href:"http://terra-ui.com/static/#/site/homeh"}]}]})}}}]);