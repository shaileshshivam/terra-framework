(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1058:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),l=a(n(24)),s=a(n(21)),o=a(n(25)),u=a(n(31)),r=a(n(28)),d=a(n(29)),c=a(n(30)),f=a(n(0)),h=a(n(2)),p=a(n(5)),b=a(n(134)),v=n(84),y=a(n(7)),_=a(n(1494)),m=a(n(1495)),k=a(n(1498)),C=a(n(1142));function R(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,c.default)(e);if(t){var i=(0,c.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,d.default)(this,n)}}var E=p.default.bind(C.default),g={alignment:h.default.oneOf(["start","center","end"]),links:h.default.arrayOf(h.default.shape({id:h.default.string,path:h.default.string.isRequired,text:h.default.string.isRequired,icon:h.default.icon})),location:h.default.object.isRequired,match:h.default.object.isRequired,history:h.default.object.isRequired,staticContext:h.default.object,hasIcons:h.default.bool},T=function(e){(0,r.default)(n,e);var t=R(n);function n(e){var a;return(0,s.default)(this,n),(a=t.call(this,e)).setContainerNode=a.setContainerNode.bind((0,u.default)(a)),a.handleResize=a.handleResize.bind((0,u.default)(a)),a.resetCalculations(),a}return(0,o.default)(n,[{key:"componentDidMount",value:function(){var e=this;this.resizeObserver=new b.default((function(t){e.contentWidth=t[0].contentRect.width,e.isCalculating||(e.animationFrameID=window.requestAnimationFrame((function(){e.resetCalculations(),e.forceUpdate()})))})),this.resizeObserver.observe(this.container),this.handleResize(this.contentWidth)}},{key:"shouldComponentUpdate",value:function(e){return this.props.links.length!==e.links.length&&this.resetCalculations(),!0}},{key:"componentDidUpdate",value:function(){this.isCalculating&&(this.isCalculating=!1,this.handleResize(this.contentWidth))}},{key:"componentWillUnmount",value:function(){window.cancelAnimationFrame(this.animationFrameID),this.resizeObserver.disconnect(this.container),this.container=null}},{key:"handleResize",value:function(e){for(var t=this.props.links.length,n=t>1?this.container.children[0].getBoundingClientRect().width:0,a=e-n,i=t,l=0,s=!0,o=0;o<t;o+=1)if((l+=n)>a&&!(o===t-1&&l<=e)){i=o,s=!1;break}this.hiddenStartIndex!==i&&(this.hiddenStartIndex=i,this.menuHidden=s,this.forceUpdate())}},{key:"setContainerNode",value:function(e){null!==e&&(this.container=e)}},{key:"resetCalculations",value:function(){this.animationFrameID=null,this.hiddenStartIndex=-1,this.menuHidden=!1,this.isCalculating=!0}},{key:"render",value:function(){var e=this,t=this.props,n=t.alignment,a=t.links,s=t.location,o=(t.match,t.history),u=(t.staticContext,t.hasIcons),r=(0,l.default)(t,["alignment","links","location","match","history","staticContext","hasIcons"]),d=[],c=[];a.forEach((function(t,n){var a={id:t.id,path:t.path,text:t.text,key:t.path,externalLink:t.externalLink,icon:t.icon,location:s,history:o};e.hiddenStartIndex<0?(d.push(f.default.createElement(_.default,a)),c.push(f.default.createElement(k.default,a))):n<e.hiddenStartIndex?d.push(f.default.createElement(_.default,a)):c.push(f.default.createElement(k.default,a))}));var h=E("tabs-container",{"is-calculating":this.isCalculating},n),p=this.context;return f.default.createElement("div",(0,i.default)({},r,{className:E("tabs-wrapper",p.className)}),f.default.createElement("div",{className:h,role:"tablist",ref:this.setContainerNode},d,f.default.createElement(m.default,{location:s,isHidden:this.menuHidden,hasIcons:u},c),f.default.createElement("div",{className:E("divider-after-last-tab")})))}}]),n}(f.default.Component);T.propTypes=g,T.defaultProps={alignment:"center",links:[]},T.contextType=y.default;var w=(0,v.withRouter)(T);t.default=w},1142:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ApplicationTabs-module__clinical-lowlight-theme___1ysmC","orion-fusion-theme":"ApplicationTabs-module__orion-fusion-theme___1jwjI","tabs-wrapper":"ApplicationTabs-module__tabs-wrapper___1JNUD","tabs-container":"ApplicationTabs-module__tabs-container___3cVEk",start:"ApplicationTabs-module__start___1gusX",center:"ApplicationTabs-module__center___WfgNr",end:"ApplicationTabs-module__end___3mlfU","is-calculating":"ApplicationTabs-module__is-calculating___1uwHa",tab:"ApplicationTabs-module__tab___2h9OA","is-disabled":"ApplicationTabs-module__is-disabled___IF9sG","tab-menu-display":"ApplicationTabs-module__tab-menu-display___F2fS8","tab-menu-display-label":"ApplicationTabs-module__tab-menu-display-label___31gwW","tab-menu-display-icon":"ApplicationTabs-module__tab-menu-display-icon___3NZmx","divider-after-last-tab":"ApplicationTabs-module__divider-after-last-tab___3-zy7","tab-inner":"ApplicationTabs-module__tab-inner___ciD-l","tab-inner-with-icon":"ApplicationTabs-module__tab-inner-with-icon___Bx_vn","tab-icon":"ApplicationTabs-module__tab-icon___3xFmU","tab-label":"ApplicationTabs-module__tab-label___3Gzou","is-hovered":"ApplicationTabs-module__is-hovered___2z-f8","is-focused":"ApplicationTabs-module__is-focused___vnpzK","is-active":"ApplicationTabs-module__is-active___3T0GU","is-hidden":"ApplicationTabs-module__is-hidden___U5u-l","collapsed-tab":"ApplicationTabs-module__collapsed-tab___2lMBa","collapsed-tab-icon":"ApplicationTabs-module__collapsed-tab-icon___MxPH0","tab-menu-list":"ApplicationTabs-module__tab-menu-list___1fWSc","bounded-height":"ApplicationTabs-module__bounded-height___2SGbK","bounded-width":"ApplicationTabs-module__bounded-width___b7mQa"}},1494:function(e,t,n){"use strict";var a=n(12),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(19)),s=i(n(24)),o=i(n(21)),u=i(n(25)),r=i(n(31)),d=i(n(28)),c=i(n(29)),f=i(n(30)),h=a(n(0)),p=i(n(2)),b=i(n(10)),v=i(n(5)),y=i(n(7)),_=n(84),m=a(n(22)),k=i(n(1142));function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var R=v.default.bind(k.default),E={externalLink:p.default.shape({path:p.default.string.isRequired,target:p.default.string}),history:p.default.object.isRequired,location:p.default.object.isRequired,path:p.default.string.isRequired,text:p.default.string.isRequired,onTabClick:p.default.func,icon:p.default.node},g=function(e){(0,d.default)(n,e);var t=C(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).state={active:!1,focused:!1},a.handleOnClick=a.handleOnClick.bind((0,r.default)(a)),a.handleKeyDown=a.handleKeyDown.bind((0,r.default)(a)),a.handleKeyUp=a.handleKeyUp.bind((0,r.default)(a)),a.handleOnBlur=a.handleOnBlur.bind((0,r.default)(a)),a.isCurrentPath=a.isCurrentPath.bind((0,r.default)(a)),a}return(0,u.default)(n,[{key:"handleOnBlur",value:function(){this.setState({focused:!1})}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===m.KEY_SPACE&&this.setState({active:!0}),e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(this.setState({focused:!0}),e.preventDefault(),this.handleOnClick(e))}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===m.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===m.KEY_TAB&&(e.preventDefault(),e.stopPropagation(),this.setState({focused:!0}))}},{key:"handleOnClick",value:function(e){if(this.props.externalLink)return window.open(this.props.externalLink.path,this.props.externalLink.target||"_blank"),void(this.props.onTabClick&&this.props.onTabClick(e));this.isCurrentPath()?this.props.onTabClick&&this.props.onTabClick(e):this.props.history.push(this.props.path)}},{key:"isCurrentPath",value:function(){return!!(0,_.matchPath)(this.props.location.pathname,{path:this.props.path})}},{key:"render",value:function(){var e=this.props,t=(e.externalLink,e.history,e.location,e.onTabClick,e.path,e.text),n=e.icon,a=(0,s.default)(e,["externalLink","history","location","onTabClick","path","text","icon"]),i=this.state,o=i.active,u=i.focused,r=!!n,d=this.isCurrentPath(),c=this.context,f=(0,b.default)(R("tab",{"tab-with-icon":r},{"is-disabled":d&&!0},{"is-active":o},{"is-focused":u},c.className),a.className),p={"aria-current":d},v=R("tab-inner",{"tab-inner-with-icon":r}),y=r?"div":"span";return h.default.createElement("button",(0,l.default)({},a,p,{role:"link",type:"button",tabIndex:"0",className:f,onClick:this.handleOnClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur}),h.default.createElement(y,{className:v},r&&h.default.createElement("span",{className:R("tab-icon")},n),h.default.createElement("span",{className:R("tab-label")},t)))}}]),n}(h.Component);g.propTypes=E,g.contextType=y.default;var T=g;t.default=T},1495:function(e,t,n){"use strict";var a=n(12),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(21)),s=i(n(25)),o=i(n(31)),u=i(n(28)),r=i(n(29)),d=i(n(30)),c=i(n(0)),f=i(n(2)),h=i(n(132)),p=n(84),b=a(n(22)),v=n(9),y=i(n(1496)),_=i(n(1497));function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,d.default)(e);if(t){var i=(0,d.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,r.default)(this,n)}}var k={children:f.default.array,isHidden:f.default.bool,intl:f.default.shape({formatMessage:f.default.func}),location:f.default.object.isRequired},C=function(e){(0,u.default)(n,e);var t=m(n);function n(e){var a;return(0,l.default)(this,n),(a=t.call(this,e)).handleOnRequestClose=a.handleOnRequestClose.bind((0,o.default)(a)),a.handleOnClick=a.handleOnClick.bind((0,o.default)(a)),a.handleOnKeyDown=a.handleOnKeyDown.bind((0,o.default)(a)),a.getTargetRef=a.getTargetRef.bind((0,o.default)(a)),a.setTargetRef=a.setTargetRef.bind((0,o.default)(a)),a.createDisplay=a.createDisplay.bind((0,o.default)(a)),a.state={isOpen:!1},a.shouldResetFocus=!1,a}return(0,s.default)(n,[{key:"componentDidUpdate",value:function(e){e.location!==this.props.location&&this.setState({isOpen:!1}),this.shouldResetFocus&&this.targetRef&&(this.targetRef.focus(),this.shouldResetFocus=this.targetRef!==document.activeElement)}},{key:"handleOnRequestClose",value:function(){this.state.isOpen&&(this.shouldResetFocus=!0,this.setState({isOpen:!1}))}},{key:"handleOnClick",value:function(){this.state.isOpen||this.setState({isOpen:!0})}},{key:"handleOnKeyDown",value:function(e){e.nativeEvent.keyCode!==b.KEY_RETURN&&e.nativeEvent.keyCode!==b.KEY_SPACE||this.state.isOpen||this.setState({isOpen:!0})}},{key:"getTargetRef",value:function(){return this.targetRef}},{key:"setTargetRef",value:function(e){this.targetRef=e}},{key:"createDisplay",value:function(e){for(var t,n,a=this.props.location,i=!1,l=this.props.children,s=l.length,o=0;o<s;o+=1){var u=l[o];if((0,p.matchPath)(a.pathname,{path:u.props.path})){n=u.props.text,t=u.props.icon,i=!0;break}}return c.default.createElement(_.default,{onClick:this.handleOnClick,onKeyDown:this.handleOnKeyDown,popup:e,refCallback:this.setTargetRef,isHidden:this.props.isHidden,text:n||this.props.intl.formatMessage({id:"Terra.application.tabs.more"}),isSelected:i,icon:t,key:"application-tab-more","data-application-tabs-more":!0})}},{key:"render",value:function(){var e,t=this.props.children,n=this.state.isOpen;if(n){var a={onTabClick:this.handleOnRequestClose};e=c.default.createElement(h.default,{contentHeight:"auto",contentWidth:"240",onRequestClose:this.handleOnRequestClose,targetRef:this.getTargetRef,isOpen:n,isArrowDisplayed:!0},c.default.createElement(y.default,null,c.default.Children.map(t,(function(e){return c.default.cloneElement(e,a)}))))}return this.createDisplay(e)}}]),n}(c.default.Component);C.propTypes=k;var R=(0,v.injectIntl)(C);t.default=R},1496:function(e,t,n){"use strict";var a=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n(19)),l=a(n(24)),s=a(n(0)),o=a(n(2)),u=a(n(10)),r=a(n(5)),d=a(n(7)),c=a(n(1142)),f=r.default.bind(c.default),h={children:o.default.node,isHeightBounded:o.default.bool,isWidthBounded:o.default.bool,refCallback:o.default.func},p=function(e){var t=e.children,n=e.isHeightBounded,a=e.isWidthBounded,o=e.refCallback,r=(0,l.default)(e,["children","isHeightBounded","isWidthBounded","refCallback"]),c=s.default.useContext(d.default),h=(0,u.default)(f("tab-menu-list",{"height-bounded":n},{"width-bounded":a},c.className));return s.default.createElement("ul",(0,i.default)({},r,{"data-application-tab-menu-content":!0,className:h,role:"menu",ref:o}),t)};p.propTypes=h;var b=p;t.default=b},1497:function(e,t,n){"use strict";var a=n(12),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(19)),s=i(n(24)),o=i(n(21)),u=i(n(25)),r=i(n(31)),d=i(n(28)),c=i(n(29)),f=i(n(30)),h=i(n(0)),p=i(n(2)),b=i(n(10)),v=i(n(5)),y=i(n(7)),_=i(n(353)),m=a(n(22)),k=i(n(1142));function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var R=v.default.bind(k.default),E={isHidden:p.default.bool,isSelected:p.default.bool,onKeyDown:p.default.func,popup:p.default.node,text:p.default.string,refCallback:p.default.func,icon:p.default.node},g=function(e){(0,d.default)(n,e);var t=C(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).handleKeyDown=a.handleKeyDown.bind((0,r.default)(a)),a.handleKeyUp=a.handleKeyUp.bind((0,r.default)(a)),a.handleOnBlur=a.handleOnBlur.bind((0,r.default)(a)),a.state={focused:!1},a}return(0,u.default)(n,[{key:"handleOnBlur",value:function(){this.props.popup||this.setState({focused:!1})}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===m.KEY_SPACE&&this.setState({active:!0}),e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(this.setState({focused:!0}),e.preventDefault(),this.props.onKeyDown&&this.props.onKeyDown(e))}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===m.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===m.KEY_TAB&&this.setState({focused:!0})}},{key:"render",value:function(){var e=this,t=this.props,n=t.isHidden,a=t.isSelected,i=(t.onKeyDown,t.popup),o=(t.refCallback,t.text),u=t.icon,r=(0,s.default)(t,["isHidden","isSelected","onKeyDown","popup","refCallback","text","icon"]),d=!!u,c=this.context,f=(0,b.default)(R("tab-menu-display",{"is-hidden":n},{"is-active":this.state.active},{"is-focused":this.state.focused},c.className),r.className),p={"aria-current":a},v=R("tab-inner",{"tab-inner-with-icon":d});return h.default.createElement("div",(0,l.default)({},r,p,{role:"tab",tabIndex:"0",className:f,ref:function(t){e.contentNode=t,e.props.refCallback(t)},onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur}),h.default.createElement("div",{className:v},d&&h.default.createElement("span",{className:R("tab-menu-display-icon")},u),h.default.createElement("div",{className:R("tab-menu-display-label")},h.default.createElement("span",null,o),h.default.createElement(_.default,null))),i)}}]),n}(h.default.Component);g.propTypes=E,g.defaultProps={isSelected:!1,isHidden:!1},g.contextType=y.default;var T=g;t.default=T},1498:function(e,t,n){"use strict";var a=n(12),i=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=i(n(19)),s=i(n(24)),o=i(n(21)),u=i(n(25)),r=i(n(31)),d=i(n(28)),c=i(n(29)),f=i(n(30)),h=a(n(0)),p=i(n(2)),b=i(n(10)),v=i(n(5)),y=i(n(7)),_=n(84),m=a(n(22)),k=i(n(1142));function C(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=(0,f.default)(e);if(t){var i=(0,f.default)(this).constructor;n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments);return(0,c.default)(this,n)}}var R=v.default.bind(k.default),E={externalLink:p.default.shape({path:p.default.string.isRequired,target:p.default.string}),history:p.default.object.isRequired,location:p.default.object.isRequired,path:p.default.string.isRequired,text:p.default.string.isRequired,onTabClick:p.default.func,icon:p.default.node},g=function(e){(0,d.default)(n,e);var t=C(n);function n(e){var a;return(0,o.default)(this,n),(a=t.call(this,e)).state={active:!1,focused:!1},a.handleOnClick=a.handleOnClick.bind((0,r.default)(a)),a.handleKeyDown=a.handleKeyDown.bind((0,r.default)(a)),a.handleKeyUp=a.handleKeyUp.bind((0,r.default)(a)),a.handleOnBlur=a.handleOnBlur.bind((0,r.default)(a)),a.isCurrentPath=a.isCurrentPath.bind((0,r.default)(a)),a}return(0,u.default)(n,[{key:"handleOnBlur",value:function(){this.setState({focused:!1})}},{key:"handleKeyDown",value:function(e){e.nativeEvent.keyCode===m.KEY_SPACE&&this.setState({active:!0}),e.nativeEvent.keyCode!==m.KEY_SPACE&&e.nativeEvent.keyCode!==m.KEY_RETURN||(this.setState({focused:!0}),e.preventDefault(),this.handleOnClick(e))}},{key:"handleKeyUp",value:function(e){e.nativeEvent.keyCode===m.KEY_SPACE&&this.setState({active:!1}),e.nativeEvent.keyCode===m.KEY_TAB&&(e.preventDefault(),e.stopPropagation(),this.setState({focused:!0}))}},{key:"handleOnClick",value:function(e){if(this.props.externalLink)return window.open(this.props.externalLink.path,this.props.externalLink.target||"_blank"),void(this.props.onTabClick&&this.props.onTabClick(e));this.isCurrentPath()?this.props.onTabClick&&this.props.onTabClick(e):this.props.history.push(this.props.path)}},{key:"isCurrentPath",value:function(){return!!(0,_.matchPath)(this.props.location.pathname,{path:this.props.path})}},{key:"render",value:function(){var e=this.props,t=(e.externalLink,e.history,e.location,e.onTabClick,e.path,e.text),n=e.icon,a=(0,s.default)(e,["externalLink","history","location","onTabClick","path","text","icon"]),i=this.state,o=i.active,u=i.focused,r=this.isCurrentPath(),d=!!n,c=this.context,f=(0,b.default)(R("collapsed-tab",{"collapsed-tab-with-icon":d},{"is-active":o},{"is-focused":u},c.className),a.className),p={"aria-current":r};return h.default.createElement("li",(0,l.default)({},a,p,{role:"menuitem",className:f,onClick:this.handleOnClick,onKeyDown:this.handleKeyDown,onKeyUp:this.handleKeyUp,onBlur:this.handleOnBlur}),h.default.createElement("div",{className:R("tab-inner")},n&&h.default.createElement("span",{className:R("collapsed-tab-icon")},n),h.default.createElement("span",{className:R("tab-label")},t)))}}]),n}(h.Component);g.propTypes=E,g.contextType=y.default;var T=g;t.default=T}}]);