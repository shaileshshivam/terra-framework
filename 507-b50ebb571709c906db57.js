(window.webpackJsonp=window.webpackJsonp||[]).push([[507],{1102:function(e,t,a){"use strict";var i=a(12),r=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(19)),o=r(a(24)),l=r(a(55)),d=i(a(0)),u=r(a(46)),c=r(a(2)),f=r(a(223)),s={variant:c.default.oneOf(["hazard-high","hazard-medium","hazard-low","error","custom"])},v=function(e){var t=(0,d.useState)(!1),a=(0,l.default)(t,2),i=a[0],r=a[1],c=function(){r(!1)},s=e.variant,v=(0,o.default)(e,["variant"]);return d.default.createElement(d.default.Fragment,null,i&&d.default.createElement(f.default,(0,n.default)({},v,{variant:s,dialogTitle:"The title relates directly to the choices.",startMessage:"The Main Instruction is text used to provide more detail or define terminology. Don’t repeat the title verbatim.",acceptAction:{text:"Confirm",onClick:c},rejectAction:{text:"Close",onClick:c},buttonOrder:"acceptFirst",emphasizedAction:"accept"})),d.default.createElement(u.default,{id:"trigger-notification-dialog",text:"Trigger NotificationDialog",onClick:function(){r(!0)}}))};v.propTypes=s;var p=v;t.default=p},2048:function(e,t,a){"use strict";var i=a(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(a(0)),n=i(a(1102)),o=function(){return r.default.createElement(n.default,{variant:"hazard-high"})};t.default=o}}]);