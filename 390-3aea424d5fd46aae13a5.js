(window.webpackJsonp=window.webpackJsonp||[]).push([[390],{1038:function(e,t,a){"use strict";a.r(t),t.default={"content-wrapper-default":"TabsTemplate-module__content-wrapper-default___23YxA","content-wrapper-600":"TabsTemplate-module__content-wrapper-600___3qIhu","content-wrapper-400":"TabsTemplate-module__content-wrapper-400___3Uv7G","tab-content":"TabsTemplate-module__tab-content___2tpdx"}},1048:function(e,t,a){"use strict";var l=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),d=l(a(5)),u=l(a(2)),r=l(a(1038)),f=d.default.bind(r.default),i={isLabelHidden:u.default.bool,label:u.default.string,id:u.default.string},b=function(e){var t=e.isLabelHidden,a=e.label,l=e.id;return n.default.createElement("div",{className:f("tab-content"),id:l},t?n.default.createElement("h3",{className:"truncationHeader"},a):null,"Content for"," ",n.default.createElement("i",null,a))};b.propTypes=i;var o=b;t.default=o},1103:function(e,t,a){"use strict";var l=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(0)),d=l(a(5)),u=l(a(2)),r=l(a(1073)),f=l(a(1048)),i=l(a(1038)),b=d.default.bind(i.default),o={fill:u.default.bool,tabFill:u.default.bool,id:u.default.string,containerClassName:u.default.string,responsiveTo:u.default.string},c=function(e){return n.default.createElement("div",{className:b(e.containerClassName),id:"tabs-container"},n.default.createElement(r.default,{tabFill:e.tabFill,fill:e.fill,id:e.id,responsiveTo:e.responsiveTo},n.default.createElement(r.default.Pane,{label:"Tab 1",key:"Tab1",id:"tab1"},n.default.createElement(f.default,{label:"Tab 1",id:"tab1Content"})),n.default.createElement(r.default.Pane,{label:"Tab 2",key:"Tab2",id:"tab2"},n.default.createElement(f.default,{label:"Tab 2",id:"tab2Content"})),n.default.createElement(r.default.Pane,{label:"Disabled Tab",key:"disabled",id:"disabled",isDisabled:!0}),n.default.createElement(r.default.Pane,{label:"Tab 4",key:"Tab4",id:"tab4"},n.default.createElement(f.default,{label:"Tab 4",id:"tab4Content"})),n.default.createElement(r.default.Pane,{label:"Tab 5",key:"Tab5",id:"tab5"},n.default.createElement(f.default,{label:"Tab 5",id:"tab5Content"})),n.default.createElement(r.default.Pane,{label:"Tab 6",key:"Tab6",id:"tab6"},n.default.createElement(f.default,{label:"Tab 6",id:"tab6Content"})),n.default.createElement(r.default.Pane,{label:"Tab 7",key:"Tab7",id:"tab7"},n.default.createElement(f.default,{label:"Tab 7",id:"tab7Content"})),n.default.createElement(r.default.Pane,{label:"Tab 8 with longer text that should truncate",key:"Tab8",id:"tab8"},n.default.createElement(f.default,{label:"Tab 8",id:"tab8Content"})),n.default.createElement(r.default.Pane,{label:"Tab 9",key:"Tab9",id:"tab9"},n.default.createElement(f.default,{label:"Tab 9",id:"tab9Content"})),n.default.createElement(r.default.Pane,{label:"Tab 10",key:"Tab10",id:"tab10"},n.default.createElement(f.default,{label:"Tab 10",id:"tab10Content"})),n.default.createElement(r.default.Pane,{label:"Tab 11",key:"Tab11",id:"tab11"},n.default.createElement(f.default,{label:"Tab 11",id:"tab11Content"})),n.default.createElement(r.default.Pane,{label:"Tab 12",key:"Tab12",id:"tab12"},n.default.createElement(f.default,{label:"Tab 12",id:"tab12Content"}))))};c.propTypes=o,c.defaultProps={containerClassName:"content-wrapper-default",responsiveTo:"parent"};var s=c;t.default=s},2104:function(e,t,a){"use strict";var l=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(21)),d=l(a(25)),u=l(a(31)),r=l(a(28)),f=l(a(29)),i=l(a(30)),b=l(a(0)),o=l(a(1103));function c(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,l=(0,i.default)(e);if(t){var n=(0,i.default)(this).constructor;a=Reflect.construct(l,arguments,n)}else a=l.apply(this,arguments);return(0,f.default)(this,a)}}var s=function(e){(0,r.default)(a,e);var t=c(a);function a(e){var l;return(0,n.default)(this,a),(l=t.call(this,e)).handleOnButtonClick=l.handleOnButtonClick.bind((0,u.default)(l)),l.state={containerClassName:"content-wrapper"},l}return(0,d.default)(a,[{key:"handleOnButtonClick",value:function(){this.setState({containerClassName:"content-wrapper-600"})}},{key:"render",value:function(){return b.default.createElement("div",null,b.default.createElement("button",{type:"button",onClick:this.handleOnButtonClick},"Set Container Width to 600 px"),b.default.createElement(o.default,{responsiveTo:"parent",containerClassName:this.state.containerClassName}))}}]),a}(b.default.Component);t.default=s}}]);