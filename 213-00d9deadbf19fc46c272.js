(window.webpackJsonp=window.webpackJsonp||[]).push([[213],{1172:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var o=n(0),r=n.n(o),a=n(988),m=n.n(a),c=function(e){var t=e.url;return r.a.createElement(m.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-theme-context",name:"terra-theme-context",version:"1.4.0",url:t})}},1335:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(5)),m=o(n(7)),c=o(n(1386)),d=a.default.bind(c.default),l=function(){var e=r.default.useContext(m.default);return r.default.createElement("div",{className:d("themed",e.className)},r.default.createElement("h1",null,"Theme Name: ".concat(e.name)),r.default.createElement("div",{className:d("themed-block")}))};t.default=l},1385:function(e,t,n){"use strict";var o=n(6);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=o(n(0)),a=o(n(351)),m=o(n(1335)),c=function(){return r.default.createElement(a.default,{theme:{name:"test-theme",className:"test-theme"}},r.default.createElement(m.default,null))};t.default=c},1386:function(e,t,n){"use strict";n.r(t),t.default={"clinical-lowlight-theme":"ThemedComponent-module__clinical-lowlight-theme___2imPC","orion-fusion-theme":"ThemedComponent-module__orion-fusion-theme___1w-U8","test-theme":"ThemedComponent-module__test-theme___2L1Y5",themed:"ThemedComponent-module__themed___2By-3","themed-block":"ThemedComponent-module__themed-block___3de6s"}},1402:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(1385),m=n.n(a),c=n(19),d=n.n(c),l=n(24),i=n.n(l),p=n(335),s={};function u(e){var t=e.components,n=i()(e,["components"]);return Object(p.mdx)("wrapper",d()({},s,n,{components:t,mdxType:"MDXLayout"}),Object(p.mdx)("pre",null,Object(p.mdx)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n\nimport ThemedComponent from './ThemedComponent';\n\nconst ThemeContextProviderExample = () => (\n  <ThemeContextProvider theme={{ name: 'test-theme', className: 'test-theme' }}>\n    <ThemedComponent />\n  </ThemeContextProvider>\n);\n\nexport default ThemeContextProviderExample;\n\n")))}u.isMDXComponent=!0;var h=n(990),x=n.n(h);t.a=function(e){var t=e.title,n=e.description,o=e.isExpanded;return r.a.createElement(x.a,{title:t||"Theme Context Provider Example",description:n,example:r.a.createElement(m.a,null),exampleSrc:r.a.createElement(u,null),isExpanded:o})}},2210:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return h}));var o=n(19),r=n.n(o),a=n(24),m=n.n(a),c=(n(0),n(335)),d=n(1172),l=n(999),i=n.n(l),p=function(){return Object(c.mdx)(i.a,{rows:[{name:"children",type:function(){var e={};function t(t){var n=t.components,o=m()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"element"))}return t.isMDXComponent=!0,t({})},required:!0,defaultValue:"none",description:function(){var e={};function t(t){var n=t.components,o=m()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"The components to be rendered within the context of the ThemeContextProvider. Components rendered here are able to interact with ThemeContextProvider through the ThemeContext."))}return t.isMDXComponent=!0,t({})}},{name:"theme",type:function(){var e={};function t(t){var n=t.components,o=m()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"shape"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-json"},'{\n "name": {\n  "name": "string",\n  "required": false\n },\n "className": {\n  "name": "string",\n  "required": false\n }\n}\n')))}return t.isMDXComponent=!0,t({})},required:!1,defaultValue:"{}",description:function(){var e={};function t(t){var n=t.components,o=m()(t,["components"]);return Object(c.mdx)("wrapper",r()({},e,o,{components:n,mdxType:"MDXLayout"}),Object(c.mdx)("p",null,"An object containing the name and className of the selected theme."))}return t.isMDXComponent=!0,t({})}}]})},s=n(1402),u={};function h(e){var t=e.components,n=m()(e,["components"]);return Object(c.mdx)("wrapper",r()({},u,n,{components:t,mdxType:"MDXLayout"}),Object(c.mdx)(d.a,{mdxType:"Badge"}),Object(c.mdx)("h1",{id:"terra-theme-context"},"Terra Theme Context"),Object(c.mdx)("p",null,"A provider component for the terra theme context. This component is not intended for use outside of terra-application."),Object(c.mdx)("h2",{id:"how-does-this-relate-to-terra-theme-provider"},"How does this relate to terra-theme-provider"),Object(c.mdx)("p",null,"terra-theme-provider and terra-context/ThemeContextProvider work in concert to provide all aspects of terra themeing."),Object(c.mdx)("p",null,"The terra-theme-provider component is responsible for applying the theme class to the document element on the page. This will allow any non locally scoped theme classes to be applied throughout the application."),Object(c.mdx)("p",null,"This component sets the provided theme in react context so that react components can apply locally scoped theme classes to apply the theme variables directly."),Object(c.mdx)("p",null,"These components should be given the same theme name and will be orchestrated by terra-application."),Object(c.mdx)("h2",{id:"getting-started"},"Getting Started"),Object(c.mdx)("ul",null,Object(c.mdx)("li",{parentName:"ul"},"Install with ",Object(c.mdx)("a",{parentName:"li",href:"https://www.npmjs.com/"},"npmjs"),":",Object(c.mdx)("ul",{parentName:"li"},Object(c.mdx)("li",{parentName:"ul"},Object(c.mdx)("inlineCode",{parentName:"li"},"npm install terra-theme-context"))))),Object(c.mdx)("h2",{id:"usage"},"Usage"),Object(c.mdx)("pre",null,Object(c.mdx)("code",{parentName:"pre",className:"language-jsx"},"import ThemeContextProvider from 'terra-theme-context/lib/ThemeContextProvider';\n")),Object(c.mdx)("h2",{id:"examples"},"Examples"),Object(c.mdx)(s.a,{mdxType:"ThemeContextProviderExample"}),Object(c.mdx)("h2",{id:"props-table"},"Props Table"),Object(c.mdx)(p,{mdxType:"PropsTable"}))}h.isMDXComponent=!0}}]);