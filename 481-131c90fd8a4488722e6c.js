(window.webpackJsonp=window.webpackJsonp||[]).push([[481],{1400:function(t,e,n){"use strict";n.r(e),e.default={"test-popup-area":"PopupTypeCommon-test-module__test-popup-area___1iO7V","popup-button":"PopupTypeCommon-test-module__popup-button___fs0bi"}},2074:function(t,e,n){"use strict";var u=n(6);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=u(n(21)),a=u(n(25)),l=u(n(31)),s=u(n(28)),d=u(n(29)),r=u(n(30)),i=u(n(0)),c=u(n(5)),f=u(n(132)),p=u(n(1400));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,u=(0,r.default)(t);if(e){var o=(0,r.default)(this).constructor;n=Reflect.construct(u,arguments,o)}else n=u.apply(this,arguments);return(0,d.default)(this,n)}}var b=c.default.bind(p.default),m=function(t){(0,s.default)(n,t);var e=h(n);function n(t){var u;return(0,o.default)(this,n),(u=e.call(this,t)).handleButtonClick=u.handleButtonClick.bind((0,l.default)(u)),u.handleRequestClose=u.handleRequestClose.bind((0,l.default)(u)),u.setButtonNode=u.setButtonNode.bind((0,l.default)(u)),u.getButtonNode=u.getButtonNode.bind((0,l.default)(u)),u.state={open:!0},u}return(0,a.default)(n,[{key:"componentDidMount",value:function(){this.forceUpdate()}},{key:"handleButtonClick",value:function(){this.setState({open:!0})}},{key:"handleRequestClose",value:function(){this.setState({open:!1})}},{key:"setButtonNode",value:function(t){this.buttonNode=t}},{key:"getButtonNode",value:function(){return this.buttonNode}},{key:"render",value:function(){return i.default.createElement("div",{id:"test-popup-area",className:b("test-popup-area")},i.default.createElement(f.default,{classNameArrow:"test-arrow",classNameContent:"test-content",isOpen:this.state.open,targetRef:this.getButtonNode,onRequestClose:this.handleRequestClose},i.default.createElement("p",null,"this is popup content"),i.default.createElement("button",{id:"button1",type:"button"},"Test button 1"),i.default.createElement("button",{id:"button2",type:"button"},"Test button 2")),i.default.createElement("button",{type:"button",id:"default-button",className:b("popup-button"),onClick:this.handleButtonClick,ref:this.setButtonNode},"Default Popup"))}}]),n}(i.default.Component);e.default=m}}]);