!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Vuewel=t():n.Vuewel=t()}(window,function(){return function(n){var t={};function r(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return n[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=n,r.c=t,r.d=function(n,t,e){r.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:e})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,t){if(1&t&&(n=r(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)r.d(e,o,function(t){return n[t]}.bind(null,o));return e},r.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(t,"a",t),t},r.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},r.p="/",r(r.s=23)}([function(n,t,r){"use strict";r.d(t,"c",function(){return e}),r.d(t,"a",function(){return o}),r.d(t,"b",function(){return i});const e=n=>{"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},o=(n,t)=>{n.component(t.name,t)},i=(n,t,r)=>{n.prototype[t]=r}},function(n,t,r){"use strict";function e(n,t,r,e,o,i,a,f){var s,c="function"==typeof n?n.options:n;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),e&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),a?(s=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),o&&o.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(a)},c._ssrRegister=s):o&&(s=f?function(){o.call(this,this.$root.$options.shadowRoot)}:o),s)if(c.functional){c._injectStyles=s;var u=c.render;c.render=function(n,t){return s.call(t),u(n,t)}}else{var p=c.beforeCreate;c.beforeCreate=p?[].concat(p,s):[s]}return{exports:n,options:c}}r.d(t,"a",function(){return e})},function(n,t,r){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var r=function(n,t){var r=n[1]||"",e=n[3];if(!e)return r;if(t&&"function"==typeof btoa){var o=(a=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=e.sources.map(function(n){return"/*# sourceURL="+e.sourceRoot+n+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(n,r){"string"==typeof n&&(n=[[null,n,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(e[i]=!0)}for(o=0;o<n.length;o++){var a=n[o];null!=a[0]&&e[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),t.push(a))}},t}},function(n,t,r){var e,o,i={},a=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),f=function(n){var t={};return function(n,r){if("function"==typeof n)return n();if(void 0===t[n]){var e=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}}(),s=null,c=0,u=[],p=r(7);function l(n,t){for(var r=0;r<n.length;r++){var e=n[r],o=i[e.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](e.parts[a]);for(;a<e.parts.length;a++)o.parts.push(w(e.parts[a],t))}else{var f=[];for(a=0;a<e.parts.length;a++)f.push(w(e.parts[a],t));i[e.id]={id:e.id,refs:1,parts:f}}}}function d(n,t){for(var r=[],e={},o=0;o<n.length;o++){var i=n[o],a=t.base?i[0]+t.base:i[0],f={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(f):r.push(e[a]={id:a,parts:[f]})}return r}function h(n,t){var r=f(n.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=u[u.length-1];if("top"===n.insertAt)e?e.nextSibling?r.insertBefore(t,e.nextSibling):r.appendChild(t):r.insertBefore(t,r.firstChild),u.push(t);else if("bottom"===n.insertAt)r.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=f(n.insertAt.before,r);r.insertBefore(t,o)}}function b(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=u.indexOf(n);t>=0&&u.splice(t,1)}function v(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var e=function(){0;return r.nc}();e&&(n.attrs.nonce=e)}return m(t,n.attrs),h(n,t),t}function m(n,t){Object.keys(t).forEach(function(r){n.setAttribute(r,t[r])})}function w(n,t){var r,e,o,i;if(t.transform&&n.css){if(!(i="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=i}if(t.singleton){var a=c++;r=s||(s=v(t)),e=_.bind(null,r,a,!1),o=_.bind(null,r,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",m(t,n.attrs),h(n,t),t}(t),e=function(n,t,r){var e=r.css,o=r.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(e=p(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([e],{type:"text/css"}),f=n.href;n.href=URL.createObjectURL(a),f&&URL.revokeObjectURL(f)}.bind(null,r,t),o=function(){b(r),r.href&&URL.revokeObjectURL(r.href)}):(r=v(t),e=function(n,t){var r=t.css,e=t.media;e&&n.setAttribute("media",e);if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){b(r)});return e(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;e(n=t)}else o()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var r=d(n,t);return l(r,t),function(n){for(var e=[],o=0;o<r.length;o++){var a=r[o];(f=i[a.id]).refs--,e.push(f)}n&&l(d(n,t),t);for(o=0;o<e.length;o++){var f;if(0===(f=e[o]).refs){for(var s=0;s<f.parts.length;s++)f.parts[s]();delete i[f.id]}}}};var x,g=(x=[],function(n,t){return x[n]=t,x.filter(Boolean).join("\n")});function _(n,t,r,e){var o=r?"":e.css;if(n.styleSheet)n.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),a=n.childNodes;a[t]&&n.removeChild(a[t]),a.length?n.insertBefore(i,a[t]):n.appendChild(i)}}},,,function(n,t,r){var e=r(16);"string"==typeof e&&(e=[[n.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(3)(e,o);e.locals&&(n.exports=e.locals)},function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var r=t.protocol+"//"+t.host,e=r+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var o,i=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?n:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},,,function(n,t,r){"use strict";r.r(t);var e=function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"w-toolbar"},[t("div",{staticClass:"w-toolbar-wrapper",style:{maxWidth:this.width+"px"}},[this._t("default")],2)])};e._withStripped=!0;var o={name:"WToolbar",props:{width:{type:String,default:"1080"}}},i=(r(15),r(1)),a=Object(i.a)(o,e,[],!1,null,null,null);a.options.__file="src/components/toolbar/Toolbar.vue";var f=a.exports,s=r(0);const c={install(n){Object(s.a)(n,f)}};Object(s.c)(c);t.default=c},,,,,function(n,t,r){"use strict";var e=r(6);r.n(e).a},function(n,t,r){(n.exports=r(2)(!1)).push([n.i,'@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\nhtml {\n  font-size: 1rem;\n}\nbody .is-huge {\n  font-size: calc(1rem + 0.125rem * 4);\n}\nbody .is-large {\n  font-size: calc(1rem + 0.125rem * 2);\n}\nbody .is-small {\n  font-size: calc(1rem + 0.125rem * -2);\n}\nbody .is-mini {\n  font-size: calc(1rem + 0.125rem * -4);\n}\ninput, textarea {\n  font-size: 1rem;\n}\n.field:not(:last-child) {\n  margin-bottom: .5rem;\n}\n.is-loading {\n  color: transparent !important;\n}\n.is-loading:after {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: calc(-.5em - 2px);\n    margin-left: calc(-.5em - 2px);\n    animation: spinAround .5s infinite linear;\n    border: 2px solid #dbdbdb;\n    border-radius: 290486px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    content: "";\n    display: block;\n    height: 1em;\n    width: 1em;\n}\n.w-toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 48px;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n}\n.w-toolbar .w-toolbar-wrapper {\n    display: flex;\n    height: 100%;\n    margin: auto;\n}\n.w-toolbar .w-toolbar-wrapper > * {\n      display: flex;\n      align-items: center;\n}\n.w-toolbar .w-toolbar-wrapper > :first-child {\n      flex-basis: 20%;\n      padding-left: .5rem;\n}\n.w-toolbar .w-toolbar-wrapper > :last-child {\n      flex-basis: 20%;\n      padding: .5rem;\n      justify-content: flex-end;\n}\n.w-toolbar .w-toolbar-wrapper > :first-child + :not(:last-child) {\n      flex: 1;\n      padding: .5rem;\n      justify-content: center;\n}\n',""])},,,,,,,function(n,t,r){n.exports=r(10)}])});