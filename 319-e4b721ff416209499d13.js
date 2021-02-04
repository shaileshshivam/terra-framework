(window.webpackJsonp=window.webpackJsonp||[]).push([[319],{1150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(0),r=n.n(a),o=n(988),p=n.n(o),u=function(e){var t=e.url;return r.a.createElement(p.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-date-input",name:"terra-date-input",version:"1.25.0",url:t})}},1587:function(e,t,n){"use strict";var a=n(12),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(55)),p=a(n(0)),u=r(n(1020)),m=function(){var e=(0,p.useState)(""),t=(0,o.default)(e,2),n=t[0],a=t[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement(u.default,{name:"date-input-value",value:n,onChange:function(e,t){return a(t)}}),p.default.createElement("p",null,"DateInput Value: ".concat(n)))};t.default=m},1588:function(e,t,n){"use strict";var a=n(12),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(55)),p=a(n(0)),u=r(n(1020)),m=function(){var e=(0,p.useState)(""),t=(0,o.default)(e,2),n=t[0],a=t[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement(u.default,{name:"date-input-value",value:n,onChange:function(e,t){return a(t)},displayFormat:"month-day-year"}),p.default.createElement("p",null,"DateInput Value: ".concat(n)))};t.default=m},1589:function(e,t,n){"use strict";var a=n(12),r=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(55)),p=a(n(0)),u=r(n(1020)),m=function(){var e=(0,p.useState)(""),t=(0,o.default)(e,2),n=t[0],a=t[1];return p.default.createElement(p.default.Fragment,null,p.default.createElement(u.default,{name:"date-input-value",value:n,onChange:function(e,t){return a(t)},displayFormat:"day-month-year"}),p.default.createElement("p",null,"DateInput Value: ".concat(n)))};t.default=m},2156:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return E}));var a=n(19),r=n.n(a),o=n(24),p=n.n(o),u=n(0),m=n.n(u),c=n(335),i=n(1150),d=n(999),l=n.n(d),s=function(){return Object(c.mdx)(l.a,{rows:[{name:"name",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Name of the date input. This name should be unique."))}return t.isMDXComponent=!0,t({})}},{name:"dayAttributes",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Custom input attributes to apply to the day input"))}return t.isMDXComponent=!0,t({})}},{name:"disabled",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"false",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Whether the date input should be disabled."))}return t.isMDXComponent=!0,t({})}},{name:"displayFormat",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"enum"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-json"},'[\n "month-day-year",\n "day-month-year"\n]\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Can be used to set the display format. One of ",Object(c.mdx)("inlineCode",{parentName:"p"},"month-day-year")," or ",Object(c.mdx)("inlineCode",{parentName:"p"},"day-month-year"),".\nOverrides default locale display format."))}return t.isMDXComponent=!0,t({})}},{name:"isIncomplete",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Whether the input displays as Incomplete. Use when no value has been provided. ",Object(c.mdx)("em",{parentName:"p"},"(usage note: ",Object(c.mdx)("inlineCode",{parentName:"em"},"required")," must also be set)"),"."))}return t.isMDXComponent=!0,t({})}},{name:"isInvalid",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Whether the input displays as Invalid. Use when value does not meet validation pattern."))}return t.isMDXComponent=!0,t({})}},{name:"monthAttributes",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Custom input attributes to apply to the month select"))}return t.isMDXComponent=!0,t({})}},{name:"onBlur",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"A callback function to execute when the entire date input component loses focus.\nThis event does not get triggered when the focus is moved from one input to another within the date input component because the focus is still within the main date input component."))}return t.isMDXComponent=!0,t({})}},{name:"onChange",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"null",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"A callback function to execute when a date is entered.\nThe first parameter is the event. The second parameter is the changed date value."))}return t.isMDXComponent=!0,t({})}},{name:"onFocus",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"A callback function triggered when the day, month, or year input receives focus."))}return t.isMDXComponent=!0,t({})}},{name:"refCallback",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"func"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Callback ref to access date input containing DOM element."))}return t.isMDXComponent=!0,t({})}},{name:"required",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"bool"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Whether is the date input is required"))}return t.isMDXComponent=!0,t({})}},{name:"value",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"string"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"undefined",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"An date string representation of the date value used for the component. This should be in ISO 8601 format: YYYY-MM-DD."))}return t.isMDXComponent=!0,t({})}},{name:"yearAttributes",type:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"object"))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,a=p()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,a,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"Custom input attributes to apply to the year input"))}return t.isMDXComponent=!0,t({})}}]})},x=n(1587),b=n.n(x),f={};function j(e){var t=e.components,n=p()(e,["components"]);return Object(c.mdx)("wrapper",r()({},f,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}j.isMDXComponent=!0;var y=n(990),O=n.n(y),v=function(e){var t=e.title,n=e.description,a=e.isExpanded;return m.a.createElement(O.a,{title:t||"Default Date Input",description:n,example:m.a.createElement(b.a,null),exampleSrc:m.a.createElement(j,null),isExpanded:a})},h=n(1588),D=n.n(h),M={};function g(e){var t=e.components,n=p()(e,["components"]);return Object(c.mdx)("wrapper",r()({},M,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"month-day-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}g.isMDXComponent=!0;var X=function(e){var t=e.title,n=e.description,a=e.isExpanded;return m.a.createElement(O.a,{title:t||"Month Day Year Date Input",description:n,example:m.a.createElement(D.a,null),exampleSrc:m.a.createElement(g,null),isExpanded:a})},w=n(1589),C=n.n(w),T={};function N(e){var t=e.components,n=p()(e,["components"]);return Object(c.mdx)("wrapper",r()({},T,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React, { useState } from 'react';\n\nimport DateInput from 'terra-date-input';\n\nconst Example = () => {\n  const [value, setValue] = useState('');\n\n  return (\n    <React.Fragment>\n      <DateInput\n        name=\"date-input-value\"\n        value={value}\n        onChange={(event, dateString) => setValue(dateString)}\n        displayFormat=\"day-month-year\"\n      />\n      <p>{`DateInput Value: ${value}`}</p>\n    </React.Fragment>\n  );\n};\n\nexport default Example;\n\n")))}N.isMDXComponent=!0;var I=function(e){var t=e.title,n=e.description,a=e.isExpanded;return m.a.createElement(O.a,{title:t||"Day Month Year Date Input",description:n,example:m.a.createElement(C.a,null),exampleSrc:m.a.createElement(N,null),isExpanded:a})},L={};function E(e){var t=e.components,n=p()(e,["components"]);return Object(c.mdx)("wrapper",r()({},L,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(i.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-date-input"},"Terra Date Input"),Object(c.mdx)("p",null,"The DateInput allows for easy data entry of known dates like birthdays, anniversaries, etc. The display of the DateInput is localized based on the locale but can be customized via the ",Object(c.mdx)("inlineCode",{parentName:"p"},"displayFormat")," prop. The DateInput uses the ISO 8601 format for date values (YYYY-MM-DD)."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm install terra-date-input"))))),Object(c.mdx)("h2",{id:"peer-dependencies"},"Peer Dependencies"),Object(c.mdx)("p",null,"This component requires the following peer dependencies be installed in your app for the component to properly function."),Object(c.mdx)("table",null,Object(c.mdx)("thead",{parentName:"table"},Object(c.mdx)("tr",{parentName:"thead"},Object(c.mdx)("th",{parentName:"tr",align:null},"Peer Dependency"),Object(c.mdx)("th",{parentName:"tr",align:null},"Version"))),Object(c.mdx)("tbody",{parentName:"table"},Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"react"),Object(c.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"react-dom"),Object(c.mdx)("td",{parentName:"tr",align:null},"^16.8.5")),Object(c.mdx)("tr",{parentName:"tbody"},Object(c.mdx)("td",{parentName:"tr",align:null},"react-intl"),Object(c.mdx)("td",{parentName:"tr",align:null},"^2.8.0")))),Object(c.mdx)("h2",{id:"component-features"},"Component Features"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#cross-browser-support"},"Cross-Browser Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#mobile-support"},"Mobile Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#internationalization-i18n"},"Internationalization Support")),Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("a",{parentName:"li",href:"https://engineering.cerner.com/terra-ui/about/terra-ui/component-standards#ltr--rtl"},"LTR/RTL Support"))),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(v,{title:"Default DateInput",mdxType:"DefaultDateInput"}),Object(c.mdx)(X,{title:"Month Day Year Display Format DateInput",mdxType:"MonthDayYearDateInput"}),Object(c.mdx)(I,{title:"Day Month Year Display Format DateInput",mdxType:"DayMonthYearDateInput"}),Object(c.mdx)("h2",{id:"date-input-props-table"},"Date Input props table"),Object(c.mdx)(s,{mdxType:"DateInputPropsTable"}),Object(c.mdx)("h2",{id:"testing"},"Testing"),Object(c.mdx)("p",null,"The Date Input uses ",Object(c.mdx)("inlineCode",{parentName:"p"},"uuid")," which changes the component's description id dynamically. To mock it in jest test teams can use ",Object(c.mdx)("inlineCode",{parentName:"p"},"jest.mock"),"."),Object(c.mdx)("p",null,"If teams are using ",Object(c.mdx)("inlineCode",{parentName:"p"},"shallow")," for the tests then the mock is not required. But if using ",Object(c.mdx)("inlineCode",{parentName:"p"},"mount")," then the teams must use the mock as given below."),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-js"},"jest.mock('uuid/v4', () => () => '00000000-0000-0000-0000-000000000000');\n")))}E.isMDXComponent=!0}}]);