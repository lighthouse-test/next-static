_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=c,t.useAmp=function(){return c(o.default.useContext(i.AmpStateContext))};var r,o=(r=n("q1tI"))&&r.__esModule?r:{default:r},i=n("lwAK");function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,o=void 0!==r&&r,i=e.hasQuery,c=void 0!==i&&i;return n||o&&c}},"/EDR":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("23aj")}])},"1bsW":function(e,t,n){"use strict";n.r(t),n.d(t,"Todos",(function(){return m}));var r=n("nKUr");function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function c(e,t,n){return(c=i()?Reflect.construct:function(e,t,n){var r=[null];r.push.apply(r,t);var i=new(Function.bind.apply(e,r));return n&&o(i,n.prototype),i}).apply(null,arguments)}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var l=n("q1tI"),s=["Feature","Docs","Issue","Backend","Frontent"],d=[{id:1,name:"Add more frameworks",description:"We need to add more frameworks",type:"Issue",confidential:"Yes",remind:!0,date:"2021-04-07"}],f=function(){return d},p=function(e){return f().filter((function(t){return t.id===e}))[0]},h=function(e){var t,n=Object(l.useState)(e.todo)[0];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h4",{children:"Todo"}),Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:"Name"}),Object(r.jsx)("td",{children:n.name})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:"Description"}),Object(r.jsx)("td",{children:n.description})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:"Type"}),Object(r.jsx)("td",{children:n.type})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:"Confidential"}),Object(r.jsx)("td",{children:n.confidential})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:"Remind"}),Object(r.jsx)("td",{children:null===(t=n.remind)||void 0===t?void 0:t.toString()})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:"Date"}),Object(r.jsx)("td",{children:n.date})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,align:"right",children:Object(r.jsx)("button",{type:"button",onClick:function(){e.onClose()},children:"Close"})})})]})})]})},b=n("rePB");function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){Object(b.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t=Object(l.useState)(e.todo),n=t[0],o=t[1],i=Object(l.useState)(s)[0],c=Object(l.useState)({status:!1}),a=c[0],u=c[1],d=function(e){var t,r=e.target,i=r.name;switch(r.type){case"checkbox":t=r.checked;break;default:t=r.value}o(y({},Object.assign(n,Object(b.a)({},i,t))))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h4",{children:[n.id?"Update":"Add"," Todo"]}),Object(r.jsx)("form",{onSubmit:function(t){t.preventDefault(),u({status:!1}),n.name||u(y({},Object.assign(a,{name:"Name is required.",status:!0}))),n.description||u(y({},Object.assign(a,{description:"Description is required.",status:!0}))),n.type||u(y({},Object.assign(a,{type:"Type is required.",status:!0}))),n.date||u(y({},Object.assign(a,{date:"Date is required.",status:!0}))),setTimeout((function(){a.status?alert("All Fields are required"):e.onAddOrUpdate(n)}))},noValidate:!0,children:Object(r.jsx)("table",{children:Object(r.jsxs)("tbody",{children:[Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:Object(r.jsx)("label",{htmlFor:"name",children:"Name"})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{id:"name",type:"text",name:"name",onChange:d,value:n.name,required:!0})}),Object(r.jsx)("td",{children:a.name})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:Object(r.jsx)("label",{htmlFor:"description",children:"description"})}),Object(r.jsx)("td",{children:Object(r.jsx)("textarea",{id:"description",name:"description",onChange:d,value:n.description,required:!0})}),Object(r.jsx)("td",{children:a.description})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:Object(r.jsx)("label",{children:"Type"})}),Object(r.jsx)("td",{children:Object(r.jsx)("select",{id:"type",name:"type",onChange:d,value:n.type,required:!0,children:i.map((function(e){return Object(r.jsx)("option",{value:e,children:e},e)}))})}),Object(r.jsx)("td",{children:a.type})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:Object(r.jsx)("label",{children:"Confidential"})}),Object(r.jsxs)("td",{children:[Object(r.jsx)("label",{htmlFor:"confidential1",children:"Yes"}),Object(r.jsx)("input",{id:"confidential1",type:"radio",name:"confidential",value:"Yes",onChange:d,checked:"Yes"===n.confidential}),Object(r.jsx)("label",{htmlFor:"confidential2",children:"No"}),Object(r.jsx)("input",{id:"confidential2",type:"radio",name:"confidential",value:"No",onChange:d,checked:"No"===n.confidential})]}),Object(r.jsx)("td",{})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:Object(r.jsx)("label",{children:"Remind"})}),Object(r.jsxs)("td",{children:[Object(r.jsx)("label",{htmlFor:"remind",children:"Yes"}),Object(r.jsx)("input",{id:"remind",type:"checkbox",name:"remind",onChange:d,checked:n.remind})]}),Object(r.jsx)("td",{})]}),Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:Object(r.jsx)("label",{htmlFor:"date",children:"Date"})}),Object(r.jsx)("td",{children:Object(r.jsx)("input",{id:"date",type:"date",name:"date",onChange:d,value:n.date,required:!0})}),Object(r.jsx)("td",{children:a.date})]}),Object(r.jsx)("tr",{children:Object(r.jsx)("th",{colSpan:2,align:"right",children:Object(r.jsx)("button",{type:"submit",children:n.id?"Update":"Add"})})})]})})})]})},m=function(){var e=Object(l.useState)(null),t=e[0],n=e[1],o=Object(l.useState)(null),i=o[0],a=o[1],s=Object(l.useState)(f()),d=s[0],b=s[1],j=function(e,t){a(t),n(p(e))},y=function(e){!function(e){var t=f(),n=p(e),r=t.indexOf(n);t.splice(r,1)}(e),b(c(Array,u(f())))};return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("h3",{children:["Todos ",Object(r.jsx)("button",{onClick:function(){a("edit"),n({name:"",description:"",type:"",confidential:"No",remind:!1,date:""})},children:"New"})]}),t&&"view"===i&&Object(r.jsx)(h,{todo:t,onClose:function(){return a(null)}}),t&&"edit"===i&&Object(r.jsx)(O,{todo:t,onAddOrUpdate:function(e){e.id?function(e){var t=p(e.id),n=f(),r=n.indexOf(t);n[r]=e}(e):function(e){var t=f();e.id=t.length?t[t.length-1].id+1:1,t.push(e)}(e),n(null),b(c(Array,u(f())))}}),Object(r.jsx)("br",{}),Object(r.jsxs)("table",{width:"100%",children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{align:"left",children:"Id"}),Object(r.jsx)("th",{align:"left",children:"Name"}),Object(r.jsx)("th",{align:"left",children:"description"}),Object(r.jsx)("th",{align:"left",children:"Type"}),Object(r.jsx)("th",{align:"left",children:"Confidential"}),Object(r.jsx)("th",{align:"left",children:"Remind"}),Object(r.jsx)("th",{align:"left",children:"Date"}),Object(r.jsx)("th",{align:"left",children:"Actions"})]})}),Object(r.jsx)("tbody",{children:d.map((function(e){return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:e.id}),Object(r.jsx)("td",{children:e.name}),Object(r.jsx)("td",{children:e.description}),Object(r.jsx)("td",{children:e.type}),Object(r.jsx)("td",{children:e.confidential}),Object(r.jsx)("td",{children:e.remind.toString()}),Object(r.jsx)("td",{children:e.date}),Object(r.jsxs)("td",{children:[Object(r.jsx)("button",{type:"button",onClick:function(){return j(e.id,"view")},children:"View"}),"\xa0",Object(r.jsx)("button",{type:"button",onClick:function(){return j(e.id,"edit")},children:"Edit"}),"\xa0",Object(r.jsx)("button",{type:"button",onClick:function(){return y(e.id)},children:"Delete"})]})]},e.id)}))})]})]})};t.default=m},"23aj":function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"Index",(function(){return l}));var r=n("nKUr"),o=(n("q1tI"),n("g4pe")),i=n.n(o),c=n("1bsW"),a=n("Vvt1"),u=n.n(a),l=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)(i.a,{children:[Object(r.jsx)("title",{children:"Lighthouse Test | Next"}),Object(r.jsx)("meta",{name:"description",content:"Lighthouse Test | Next"})]}),Object(r.jsx)("h2",{children:"Home"}),function(){if("spa"===e.env.MODE){var t=u()((function(){return Promise.resolve().then(n.bind(null,"1bsW"))}),{ssr:!1,loadableGenerated:{webpack:function(){return["1bsW"]},modules:["../components/Todos"]}});return Object(r.jsx)(t,{})}return Object(r.jsx)(c.default,{})}()]})};t.default=l}.call(this,n("8oxB"))},"2qu3":function(e,t,n){"use strict";var r=n("lSNA"),o=n("lwsE"),i=n("W8MJ");function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){a=!0,i=e},f:function(){try{c||null==n.return||n.return()}finally{if(a)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=void 0;var s,d=(s=n("q1tI"))&&s.__esModule?s:{default:s},f=n("8L3h"),p=n("jwwS");var h=[],b=[],j=!1;function y(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}function O(e){var t={loading:!1,loaded:{},error:null},n=[];try{Object.keys(e).forEach((function(r){var o=y(e[r]);o.loading?t.loading=!0:(t.loaded[r]=o.loaded,t.error=o.error),n.push(o.promise),o.promise.then((function(e){t.loaded[r]=e})).catch((function(e){t.error=e}))}))}catch(r){t.error=r}return t.promise=Promise.all(n).then((function(e){return t.loading=!1,e})).catch((function(e){throw t.loading=!1,e})),t}function m(e,t){return d.default.createElement(function(e){return e&&e.__esModule?e.default:e}(e),t)}function v(e,t){var n=Object.assign({loader:null,loading:null,delay:200,timeout:null,render:m,webpack:null,modules:null},t),r=null;function o(){if(!r){var t=new x(e,n);r={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return r.promise()}if(!j&&"function"===typeof n.webpack){var i=n.webpack();b.push((function(e){var t,n=u(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(-1!==e.indexOf(r))return o()}}catch(c){n.e(c)}finally{n.f()}}))}var c=function(e,t){o();var i=d.default.useContext(p.LoadableContext),c=(0,f.useSubscription)(r);return d.default.useImperativeHandle(t,(function(){return{retry:r.retry}}),[]),i&&Array.isArray(n.modules)&&n.modules.forEach((function(e){i(e)})),d.default.useMemo((function(){return c.loading||c.error?d.default.createElement(n.loading,{isLoading:c.loading,pastDelay:c.pastDelay,timedOut:c.timedOut,error:c.error,retry:r.retry}):c.loaded?n.render(c.loaded,e):null}),[e,c])};return c.preload=function(){return o()},c.displayName="LoadableComponent",d.default.forwardRef(c)}var x=function(){function e(t,n){o(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return i(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a(a({},this._state),{},{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function g(e){return v(y,e)}function w(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return w(e,t)}))}g.Map=function(e){if("function"!==typeof e.render)throw new Error("LoadableMap requires a `render(loaded, props)` function");return v(O,e)},g.preloadAll=function(){return new Promise((function(e,t){w(h).then(e,t)}))},g.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return j=!0,t()};w(b,e).then(n,n)}))},window.__NEXT_PRELOADREADY=g.preloadReady;var _=g;t.default=_},"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=s,t.default=void 0;var r,o=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=l();if(t&&t.has(e))return t.get(e);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var i=r?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),i=(r=n("Xuae"))&&r.__esModule?r:{default:r},c=n("lwAK"),a=n("FYa8"),u=n("/0+H");function l(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return l=function(){return e},e}function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[o.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(o.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function d(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===o.default.Fragment?e.concat(o.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function p(e,t){return e.reduce((function(e,t){var n=o.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(d,[]).reverse().concat(s(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,r={};return function(o){var i=!0,c=!1;if(o.key&&"number"!==typeof o.key&&o.key.indexOf("$")>0){c=!0;var a=o.key.slice(o.key.indexOf("$")+1);e.has(a)?i=!1:e.add(a)}switch(o.type){case"title":case"base":t.has(o.type)?i=!1:t.add(o.type);break;case"meta":for(var u=0,l=f.length;u<l;u++){var s=f[u];if(o.props.hasOwnProperty(s))if("charSet"===s)n.has(s)?i=!1:n.add(s);else{var d=o.props[s],p=r[s]||new Set;"name"===s&&c||!p.has(d)?(p.add(d),r[s]=p):i=!1}}}return i}}()).reverse().map((function(e,t){var n=e.key||t;return o.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,o.useContext)(c.AmpStateContext),r=(0,o.useContext)(a.HeadManagerContext);return o.default.createElement(i.default,{reduceComponentsToState:p,headManager:r,inAmpMode:(0,u.isInAmpMode)(n)},t)}h.rewind=function(){};var b=h;t.default=b},"8oxB":function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(e){r=c}}();var u,l=[],s=!1,d=-1;function f(){s&&u&&(s=!1,u.length?l=u.concat(l):d=-1,l.length&&p())}function p(){if(!s){var e=a(f);s=!0;for(var t=l.length;t;){for(u=l,l=[];++d<t;)u&&u[d].run();d=-1,t=l.length}u=null,s=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function b(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new h(e,t)),1!==l.length||s||a(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=b,o.addListener=b,o.once=b,o.off=b,o.removeListener=b,o.removeAllListeners=b,o.emit=b,o.prependListener=b,o.prependOnceListener=b,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var r;t.__esModule=!0,t.HeadManagerContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.HeadManagerContext=o},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},Qetd:function(e,t,n){"use strict";var r=Object.assign.bind(Object);e.exports=r,e.exports.default=e.exports},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),c=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||c()}},SksO:function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},Vvt1:function(e,t,n){e.exports=n("a6RD")},W8MJ:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},Xuae:function(e,t,n){"use strict";var r=n("RIqP"),o=n("lwsE"),i=n("W8MJ"),c=(n("PJYZ"),n("7W2i")),a=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=u(e);if(t){var o=u(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return a(this,n)}}t.__esModule=!0,t.default=void 0;var s=n("q1tI"),d=function(e){c(n,e);var t=l(n);function n(e){var i;return o(this,n),(i=t.call(this,e))._hasHeadManager=void 0,i.emitChange=function(){i._hasHeadManager&&i.props.headManager.updateHead(i.props.reduceComponentsToState(r(i.props.headManager.mountedInstances),i.props))},i._hasHeadManager=i.props.headManager&&i.props.headManager.mountedInstances,i}return i(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(s.Component);t.default=d},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},a6RD:function(e,t,n){"use strict";var r=n("lSNA");function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.__esModule=!0,t.noSSR=u,t.default=function(e,t){var n=c.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};e instanceof Promise?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=i(i({},r),e));if(r=i(i({},r),t),"object"===typeof e&&!(e instanceof Promise)&&(e.render&&(r.render=function(t,n){return e.render(n,t)}),e.modules)){n=c.default.Map;var o={},a=e.modules();Object.keys(a).forEach((function(e){var t=a[e];"function"!==typeof t.then?o[e]=t:o[e]=function(){return t.then((function(e){return e.default||e}))}})),r.loader=o}r.loadableGenerated&&delete(r=i(i({},r),r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};a(n("q1tI"));var c=a(n("2qu3"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},cDf5:function(e,t){function n(t){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},g4pe:function(e,t,n){e.exports=n("8Kt/")},jwwS:function(e,t,n){"use strict";var r;t.__esModule=!0,t.LoadableContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var r;t.__esModule=!0,t.AmpStateContext=void 0;var o=((r=n("q1tI"))&&r.__esModule?r:{default:r}).default.createContext({});t.AmpStateContext=o},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}},[["/EDR",0,1]]]);