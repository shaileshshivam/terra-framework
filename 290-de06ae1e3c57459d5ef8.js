(window.webpackJsonp=window.webpackJsonp||[]).push([[290],{1015:function(e,n,t){"use strict";var l=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.SlidePanelPositions=n.default=void 0;var a=l(t(19)),i=l(t(24)),o=l(t(21)),r=l(t(25)),s=l(t(31)),d=l(t(28)),u=l(t(29)),c=l(t(30)),p=l(t(0)),f=l(t(2)),_=l(t(10)),m=l(t(5)),h=l(t(7)),v=l(t(1022));function P(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,l=(0,c.default)(e);if(n){var a=(0,c.default)(this).constructor;t=Reflect.construct(l,arguments,a)}else t=l.apply(this,arguments);return(0,u.default)(this,t)}}var b=m.default.bind(v.default),S={START:"start",END:"end"};n.SlidePanelPositions=S;var N={panelAriaLabel:f.default.string,mainAriaLabel:f.default.string,mainContent:f.default.node,panelContent:f.default.node,panelBehavior:f.default.oneOf(["overlay","squish"]),panelPosition:f.default.oneOf(["start","end"]),panelSize:f.default.oneOf(["small","large"]),isFullscreen:f.default.bool,isOpen:f.default.bool,fill:f.default.bool},y={panelBehavior:"overlay",panelPosition:S.END,panelSize:"small"},O=function(e){(0,d.default)(t,e);var n=P(t);function t(e){var l;return(0,o.default)(this,t),(l=n.call(this,e)).setPanelNode=l.setPanelNode.bind((0,s.default)(l)),l.mainNode=p.default.createRef(),l}return(0,r.default)(t,[{key:"componentDidUpdate",value:function(e){this.props.isOpen&&this.props.isOpen!==e.isOpen?this.panelNode.focus():this.props.isOpen||this.props.isOpen===e.isOpen||this.mainNode.current.focus()}},{key:"setPanelNode",value:function(e){this.panelNode=e}},{key:"render",value:function(){var e=this.props,n=e.panelAriaLabel,t=e.mainAriaLabel,l=e.mainContent,o=e.panelContent,r=e.panelBehavior,s=e.panelPosition,d=e.panelSize,u=e.isFullscreen,c=e.isOpen,f=e.fill,m=(0,i.default)(e,["panelAriaLabel","mainAriaLabel","mainContent","panelContent","panelBehavior","panelPosition","panelSize","isFullscreen","isOpen","fill"]),h=this.context,v=(0,_.default)(b("slide-panel",{"is-open":c},{"is-fullscreen":u},{fill:f},h.className),m.className),P=p.default.createElement("div",{className:b(["panel"]),key:"panel",tabIndex:"-1","aria-label":n,"aria-hidden":c?"false":"true",ref:this.setPanelNode},o),N=p.default.createElement("div",{className:b("main"),key:"main",tabIndex:"-1","aria-label":t,ref:this.mainNode},l),y=s===S.START?p.default.createElement(p.default.Fragment,null,P,N):p.default.createElement(p.default.Fragment,null,N,P);return p.default.createElement("div",(0,a.default)({},m,{className:v,"data-slide-panel-panel-behavior":r,"data-slide-panel-panel-position":s,"data-slide-panel-panel-size":d}),y)}}]),t}(p.default.Component);O.propTypes=N,O.defaultProps=y,O.contextType=h.default;var g=O;n.default=g},1022:function(e,n,t){"use strict";t.r(n),n.default={"clinical-lowlight-theme":"SlidePanel-module__clinical-lowlight-theme___3PlGc","orion-fusion-theme":"SlidePanel-module__orion-fusion-theme___2R-RA","slide-panel":"SlidePanel-module__slide-panel___3p50s",main:"SlidePanel-module__main___148ym",panel:"SlidePanel-module__panel___3U_Ba","is-open":"SlidePanel-module__is-open___2oBW3","is-fullscreen":"SlidePanel-module__is-fullscreen___2b64E",fill:"SlidePanel-module__fill___1cmXh"}},1089:function(e,n,t){"use strict";t.r(n),n.default={"content-wrapper":"SlidePanelDocCommon-test-module__content-wrapper___2tOmz","content-wrapper-large":"SlidePanelDocCommon-test-module__content-wrapper-large___3cz5N","main-content":"SlidePanelDocCommon-test-module__main-content___2y5xj","panel-content":"SlidePanelDocCommon-test-module__panel-content___95-83","content-wrapper-toggle":"SlidePanelDocCommon-test-module__content-wrapper-toggle___Lhxw2",button:"SlidePanelDocCommon-test-module__button___3sOc1"}},2086:function(e,n,t){"use strict";var l=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=l(t(0)),i=l(t(5)),o=l(t(1015)),r=l(t(1089)),s=i.default.bind(r.default),d=function(){return a.default.createElement("div",{className:s("content-wrapper-large")},a.default.createElement(o.default,{mainContent:a.default.createElement("div",{className:s("main-content")}),panelContent:a.default.createElement("div",{className:s("panel-content")}),panelBehavior:"squish",panelSize:"large",isOpen:!0,fill:!0}))};n.default=d}}]);