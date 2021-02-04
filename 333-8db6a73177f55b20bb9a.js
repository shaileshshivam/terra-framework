(window.webpackJsonp=window.webpackJsonp||[]).push([[333],{1111:function(e,n,t){"use strict";t.d(n,"a",(function(){return l}));var r=t(0),a=t.n(r),i=t(988),u=t.n(i),l=function(e){var n=e.url;return a.a.createElement(u.a,{src:"https://github.com/cerner/terra-framework/tree/main/packages/terra-form-validation",name:"terra-form-validation",version:"1.55.0",url:n})}},1636:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(63)),i=r(t(21)),u=r(t(25)),l=r(t(31)),o=r(t(28)),s=r(t(29)),d=r(t(30)),m=r(t(1153)),c=r(t(1154)),p=r(t(0)),f=t(1080),v=r(t(1112)),h=r(t(46)),b=r(t(341));function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function g(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function F(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.default)(e);if(n){var a=(0,d.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,s.default)(this,t)}}var x=function(){var e=(0,c.default)(m.default.mark((function e(n){var t;return m.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return n.length<3?e("Not long enough"):e("TerraUser"===n?"Name is Unavailable":"")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),k=function(e){(0,o.default)(t,e);var n=F(t);function t(e){var r;return(0,i.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit;return p.default.createElement("form",{noValidate:!0,onSubmit:n},p.default.createElement(f.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return p.default.createElement(v.default,{inputId:"profile-description",label:"Description",error:t.error,isInvalid:!t.valid,inputAttrs:g({},n),onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(f.Field,{name:"user_name",validate:x},(function(e){var n=e.input,t=e.meta;return p.default.createElement(v.default,{inputId:"user-name",label:"User Name, requires at least 3 characters",error:t.error,isInvalid:"Name is Unavailable"===t.error,isIncomplete:"Not long enough"===t.error||"Required"===t.error,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),p.default.createElement(h.default,{text:"Submit",type:h.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return p.default.createElement(b.default,{marginBottom:"small"},p.default.createElement(f.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&p.default.createElement("div",null,p.default.createElement("p",null,"Form Submitted Successfully With"),p.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(p.default.Component);n.default=k},1637:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(63)),i=r(t(21)),u=r(t(25)),l=r(t(31)),o=r(t(28)),s=r(t(29)),d=r(t(30)),m=r(t(0)),c=t(1080),p=r(t(1112)),f=r(t(1426)),v=r(t(1427)),h=r(t(1368)),b=r(t(1424)),y=r(t(1425)),g=r(t(46)),F=r(t(341)),x=r(t(349));function k(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function S(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?k(Object(t),!0).forEach((function(n){(0,a.default)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):k(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function O(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,d.default)(e);if(n){var a=(0,d.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,s.default)(this,t)}}var E=function(e){return e&&e.length>0?void 0:"Required"},C=function(e){(0,o.default)(t,e);var n=O(t);function t(e){var r;return(0,i.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,l.default)(r)),r}return(0,u.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.errors,r=e.submitFailed;return m.default.createElement("form",{noValidate:!0,onSubmit:n},m.default.createElement(c.Field,{name:"description",validate:E},(function(e){var n=e.input,t=e.meta;return m.default.createElement(p.default,{inputId:"description",label:"Description",error:t.error,isInvalid:t.submitFailed,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),m.default.createElement("div",null,m.default.createElement(y.default,{legend:"Which kind of meal would you like?",isInvalid:r&&void 0!==t.meal,error:t.meal},m.default.createElement(c.Field,{name:"meal",type:"radio",value:"chicken",validate:E,component:function(e){var n=e.input;return m.default.createElement(b.default,{inputAttrs:S({},n),labelText:"Chicken",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"meal",type:"radio",value:"vegetarian",validate:E,component:function(e){var n=e.input;return m.default.createElement(b.default,{inputAttrs:S({},n),labelText:"Vegetarian",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"meal",type:"radio",value:"fish",validate:E,component:function(e){var n=e.input;return m.default.createElement(b.default,{inputAttrs:S({},n),labelText:"Fish",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),m.default.createElement(c.Field,{name:"travel",type:"select",validate:E,component:function(e){var n=e.input,t=e.meta;return m.default.createElement(h.default,{htmlFor:"airliner",label:"Which Airliner are you traveling on?",isInvalid:t.submitFailed&&void 0!==t.error,error:t.error},m.default.createElement(x.default,{id:"airliner",name:n.name,onChange:function(e){n.onChange(e)},defaultValue:n.value,placeholder:"Select an Airline"},m.default.createElement(x.default.Option,{value:"southwest",display:"Southwest",key:"southwest"}),m.default.createElement(x.default.Option,{value:"alaska",display:"Alaska",key:"alaska"}),m.default.createElement(x.default.Option,{value:"hawaii",display:"Hawaii",key:"hawaii"})))}}),m.default.createElement("div",null,m.default.createElement(v.default,{legend:"What are all the conference tracks you plan on attending?",error:t.tracks,isInvalid:r&&void 0!==t.tracks},m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"developer",validate:E,component:function(e){var n=e.input;return m.default.createElement(f.default,{inputAttrs:S({},n),labelText:"Developer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"designer",validate:E,component:function(e){var n=e.input;return m.default.createElement(f.default,{inputAttrs:S({},n),labelText:"Designer",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}),m.default.createElement(c.Field,{name:"tracks[]",type:"checkbox",value:"soft_skills",validate:E,component:function(e){var n=e.input;return m.default.createElement(f.default,{inputAttrs:S({},n),labelText:"Soft skills",id:n.id,name:n.name,checked:!!n.checked,onChange:n.onChange,value:n.value})}}))),m.default.createElement(g.default,{text:"Submit",type:g.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return m.default.createElement(F.default,{marginBottom:"small"},m.default.createElement(c.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""}}),this.state.submittedValues&&m.default.createElement("div",null,m.default.createElement("p",null,"Form Submitted Successfully With"),m.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(m.default.Component);n.default=C},1638:function(e,n,t){"use strict";var r=t(6);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t(21)),i=r(t(25)),u=r(t(31)),l=r(t(28)),o=r(t(29)),s=r(t(30)),d=r(t(1153)),m=r(t(1154)),c=r(t(0)),p=t(1080),f=r(t(1112)),v=r(t(46)),h=r(t(341));function b(e){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=(0,s.default)(e);if(n){var a=(0,s.default)(this).constructor;t=Reflect.construct(r,arguments,a)}else t=r.apply(this,arguments);return(0,o.default)(this,t)}}var y=function(){var e=(0,m.default)(d.default.mark((function e(n){var t;return d.default.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=new Promise((function(e){return e("TerraUser"!==n?"":"Name is Unavailable")})),e.next=3,t;case 3:return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),g=function(e){(0,l.default)(t,e);var n=b(t);function t(e){var r;return(0,a.default)(this,t),(r=n.call(this,e)).state={},r.submitForm=r.submitForm.bind((0,u.default)(r)),r}return(0,i.default)(t,[{key:"submitForm",value:function(e){this.setState({submittedValues:e})}},{key:"renderForm",value:function(e){var n=e.handleSubmit,t=e.pristine,r=e.invalid;return c.default.createElement("form",{noValidate:!0,onSubmit:n},c.default.createElement(p.Field,{name:"description"},(function(e){var n=e.input,t=e.meta;return c.default.createElement(f.default,{inputId:"description-input",label:"Description",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,inputAttrs:n,onChange:function(e){n.onChange(e.target.value)},value:n.value,required:!0})})),c.default.createElement(p.Field,{name:"user_name",validate:y},(function(e){var n=e.input,t=e.meta;return c.default.createElement(f.default,{inputId:"user-name-disabled",label:"User Name",error:t.error,isInvalid:t.submitFailed&&void 0!==t.error,onChange:function(e){n.onChange(e.target.value)},inputAttrs:n,value:n.value,required:!0})})),c.default.createElement(v.default,{text:"Submit",isDisabled:r||t,type:v.default.Opts.Types.SUBMIT}))}},{key:"render",value:function(){return c.default.createElement(h.default,{marginBottom:"small"},c.default.createElement(p.Form,{onSubmit:this.submitForm,render:this.renderForm,initialValues:{description:""},validate:function(e){var n={};return e.description||(n.description="Required"),e.user_name||(n.user_name="Required"),n}}),this.state.submittedValues&&c.default.createElement("div",null,c.default.createElement("p",null,"Form Submitted Successfully With"),c.default.createElement("pre",null,JSON.stringify(this.state.submittedValues,0,2))))}}]),t}(c.default.Component);n.default=g},2157:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return I}));var r=t(19),a=t.n(r),i=t(24),u=t.n(i),l=t(0),o=t.n(l),s=t(335),d=t(1111),m=t(1636),c=t.n(m),p={};function f(e){var n=e.components,t=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},p,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name.length < 3) {\n      return resolve('Not long enough');\n    }\n    if (name === 'TerraUser') {\n      return resolve('Name is Unavailable');\n    }\n    return resolve('');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"profile-description\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={!meta.valid}\n              inputAttrs={{\n                ...input,\n              }}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name\"\n              label=\"User Name, requires at least 3 characters\"\n              error={meta.error}\n              isInvalid={meta.error === 'Name is Unavailable'}\n              isIncomplete={meta.error === 'Not long enough' || meta.error === 'Required'}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}f.isMDXComponent=!0;var v=t(990),h=t.n(v),b=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(h.a,{title:n||"Validation On Input",description:t,example:o.a.createElement(c.a,null),exampleSrc:o.a.createElement(f,null),isExpanded:r})},y=t(1637),g=t.n(y),F={};function x(e){var n=e.components,t=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},F,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},'/* eslint-disable class-methods-use-this */\n\nimport React from \'react\';\nimport { Form, Field } from \'react-final-form\';\nimport InputField from \'terra-form-input/lib/InputField\';\nimport Checkbox from \'terra-form-checkbox\';\nimport CheckboxField from \'terra-form-checkbox/lib/CheckboxField\';\nimport TerraField from \'terra-form-field\';\nimport Radio from \'terra-form-radio\';\nimport RadioField from \'terra-form-radio/lib/RadioField\';\nimport Button from \'terra-button\';\nimport Spacer from \'terra-spacer\';\nimport Select from \'terra-form-select\';\n\nconst required = value => (value && value.length > 0 ? undefined : \'Required\');\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, errors, submitFailed }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name="description"\n          validate={required}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId="description"\n              label="Description"\n              error={meta.error}\n              isInvalid={meta.submitFailed}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <div>\n          <RadioField\n            legend="Which kind of meal would you like?"\n            isInvalid={submitFailed && errors.meal !== undefined}\n            error={errors.meal}\n          >\n            <Field\n              name="meal"\n              type="radio"\n              value="chicken"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Chicken"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="vegetarian"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Vegetarian"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="meal"\n              type="radio"\n              value="fish"\n              validate={required}\n              component={({ input }) => (\n                <Radio\n                  inputAttrs={{ ...input }}\n                  labelText="Fish"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </RadioField>\n        </div>\n        <Field\n          name="travel"\n          type="select"\n          validate={required}\n          component={({ input, meta }) => (\n            <TerraField\n              htmlFor="airliner"\n              label="Which Airliner are you traveling on?"\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              error={meta.error}\n            >\n              <Select\n                id="airliner"\n                name={input.name}\n                onChange={(value) => { input.onChange(value); }}\n                defaultValue={input.value}\n                placeholder="Select an Airline"\n              >\n                <Select.Option value="southwest" display="Southwest" key="southwest" />\n                <Select.Option value="alaska" display="Alaska" key="alaska" />\n                <Select.Option value="hawaii" display="Hawaii" key="hawaii" />\n              </Select>\n            </TerraField>\n          )}\n        />\n        <div>\n          <CheckboxField\n            legend="What are all the conference tracks you plan on attending?"\n            error={errors.tracks}\n            isInvalid={submitFailed && errors.tracks !== undefined}\n          >\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="developer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Developer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="designer"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Designer"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n            <Field\n              name="tracks[]"\n              type="checkbox"\n              value="soft_skills"\n              validate={required}\n              component={({ input }) => (\n                <Checkbox\n                  inputAttrs={{ ...input }}\n                  labelText="Soft skills"\n                  id={input.id}\n                  name={input.name}\n                  checked={!!input.checked}\n                  onChange={input.onChange}\n                  value={input.value}\n                />\n              )}\n            />\n          </CheckboxField>\n        </div>\n        <Button text="Submit" type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom="small">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: \'\' }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n')))}x.isMDXComponent=!0;var k=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(h.a,{title:n||"Validation On Submit",description:t,example:o.a.createElement(g.a,null),exampleSrc:o.a.createElement(x,null),isExpanded:r})},S=t(1638),O=t.n(S),E={};function C(e){var n=e.components,t=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},E,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)("pre",null,Object(s.mdx)("code",{parentName:"pre",className:"language-jsx"},"/* eslint-disable class-methods-use-this */\n\nimport React from 'react';\nimport { Form, Field } from 'react-final-form';\nimport InputField from 'terra-form-input/lib/InputField';\nimport Button from 'terra-button';\nimport Spacer from 'terra-spacer';\n\nconst validateUniqueUser = async (name) => {\n  const response = new Promise((resolve) => {\n    if (name !== 'TerraUser') {\n      return resolve('');\n    }\n\n    return resolve('Name is Unavailable');\n  });\n\n  await response;\n  return response;\n};\n\nexport default class MainEntry extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {};\n    this.submitForm = this.submitForm.bind(this);\n  }\n\n  submitForm(values) {\n    this.setState({\n      submittedValues: values,\n    });\n  }\n\n  renderForm({ handleSubmit, pristine, invalid }) {\n    return (\n      <form\n        noValidate\n        onSubmit={handleSubmit}\n      >\n        <Field\n          name=\"description\"\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"description-input\"\n              label=\"Description\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              inputAttrs={input}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Field\n          name=\"user_name\"\n          validate={validateUniqueUser}\n        >\n          {({ input, meta }) => (\n            <InputField\n              inputId=\"user-name-disabled\"\n              label=\"User Name\"\n              error={meta.error}\n              isInvalid={meta.submitFailed && meta.error !== undefined}\n              onChange={(e) => { input.onChange(e.target.value); }}\n              inputAttrs={input}\n              value={input.value}\n              required\n            />\n          )}\n        </Field>\n        <Button text=\"Submit\" isDisabled={invalid || pristine} type={Button.Opts.Types.SUBMIT} />\n      </form>\n    );\n  }\n\n  render() {\n    return (\n      <Spacer marginBottom=\"small\">\n        <Form\n          onSubmit={this.submitForm}\n          render={this.renderForm}\n          initialValues={{ description: '' }}\n          validate={(values) => {\n            const errors = {};\n\n            if (!values.description) {\n              errors.description = 'Required';\n            }\n\n            if (!values.user_name) {\n              errors.user_name = 'Required';\n            }\n\n            return errors;\n          }}\n        />\n        {this.state.submittedValues\n          && (\n          <div>\n            <p>Form Submitted Successfully With</p>\n            <pre>{JSON.stringify(this.state.submittedValues, 0, 2)}</pre>\n          </div>\n          )}\n      </Spacer>\n    );\n  }\n}\n\n")))}C.isMDXComponent=!0;var w=function(e){var n=e.title,t=e.description,r=e.isExpanded;return o.a.createElement(h.a,{title:n||"Validation Disable Submit",description:t,example:o.a.createElement(O.a,null),exampleSrc:o.a.createElement(C,null),isExpanded:r})},j={};function I(e){var n=e.components,t=u()(e,["components"]);return Object(s.mdx)("wrapper",a()({},j,t,{components:n,mdxType:"MDXLayout"}),Object(s.mdx)(d.a,{mdxType:"Badge"}),Object(s.mdx)("h1",{id:"validation-events"},"Validation Events"),Object(s.mdx)("h2",{id:"dynamic-validation"},"Dynamic Validation"),Object(s.mdx)("p",null,"The default behavior of ",Object(s.mdx)("em",{parentName:"p"},"react-final-form")," is to dynamically validate, meaning it validates the content while the user is interacting with the form, and when a form loads. To use this behavior, simply use the error key of the meta data passed to an individual form component, and pass it to the error prop of the Terra Field component (TextareaField, InputField, ...), like in the example below."),Object(s.mdx)("h2",{id:"display-validation-onsubmit"},"Display Validation onSubmit"),Object(s.mdx)("p",null,"Forms written with react-final-form are always validated dynamically, but you can delay showing the validation errors until the form is submitted. The meta argument contains an attribute submitFailed that indicates the last submit was a failure. To display errors on validation, set the isInvalid prop equal to meta.submitFailed like in the example below."),Object(s.mdx)("h2",{id:"disable-form-submission-for-an-invalid-form"},"Disable form submission for an invalid form"),Object(s.mdx)("p",null,"The form render function contains attributes such as invalid (the form has errors on it) and pristine (the form has not been touched yet by the user) that allow for you to enable and disable the submission button. All you need to do is pass in the attribute you wish to check in order to see if the button should be enabled or not."),Object(s.mdx)("p",null,"Consult ",Object(s.mdx)("a",{parentName:"p",href:"https://github.com/final-form/react-final-form"},"react-final-form")," for further functionality that can be used."),Object(s.mdx)("h2",{id:"examples"},"Examples"),Object(s.mdx)(b,{title:"Validation onInput",mdxType:"ValidationOnInput"}),Object(s.mdx)(k,{title:"Validation onSubmit",mdxType:"ValidationOnSubmit"}),Object(s.mdx)(w,{title:"Validation Disable Submit",mdxType:"ValidationDisableSubmit"}))}I.isMDXComponent=!0}}]);