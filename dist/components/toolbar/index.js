!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.Vuewel=n():t.Vuewel=n()}(window,function(){return function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s=38)}({0:function(t,n,r){"use strict";r.d(n,"c",function(){return e}),r.d(n,"a",function(){return o}),r.d(n,"b",function(){return i});const e=t=>{"undefined"!=typeof window&&window.Vue&&window.Vue.use(t)},o=(t,n)=>{t.component(n.name,n)},i=(t,n,r)=>{t.prototype[n]=r}},1:function(t,n,r){"use strict";function e(t,n,r,e,o,i,a,s){var f,u="function"==typeof t?t.options:t;if(n&&(u.render=n,u.staticRenderFns=r,u._compiled=!0),e&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),a?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},u._ssrRegister=f):o&&(f=s?function(){o.call(this,this.$root.$options.shadowRoot)}:o),f)if(u.functional){u._injectStyles=f;var c=u.render;u.render=function(t,n){return f.call(n),c(t,n)}}else{var l=u.beforeCreate;u.beforeCreate=l?[].concat(l,f):[f]}return{exports:t,options:u}}r.d(n,"a",function(){return e})},14:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"w-toolbar",class:{"is-foot":this.foot},style:this.rootStyle},[1===this.scopedRow?n("div",{staticClass:"w-toolbar-wrapper",style:{maxWidth:this.width+"px"}},[this._t("default")],2):this._t("default")],2)};e._withStripped=!0;var o={name:"WToolbar",props:{row:{type:Number|String,default:"1"},scrollTop:{type:Number,default:0},width:{type:String,default:"1080"},height:{type:String,default:"48"},foot:Boolean},data:()=>({scrolled:0}),computed:{scopedRow:t=>Number(t.row),scrollableHeight:t=>t.height*(t.scopedRow-1),rootStyle:t=>({top:`-${Math.min(t.scrolled,t.scrollTop)}px`,height:`${t.height*t.scopedRow}px`})},watch:{scrollTop(t,n){this.scrolled=t<n?Math.max(0,this.scrolled+t-n):Math.min(this.scrollableHeight,this.scrolled+t-n)}}},i=(r(22),r(1)),a=Object(i.a)(o,e,[],!1,null,null,null);a.options.__file="src/components/toolbar/Toolbar.vue";var s=a.exports,f=r(0);const u={install(t){Object(f.a)(t,s)}};Object(f.c)(u);n.default=u},2:function(t,n,r){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var r=function(t,n){var r=t[1]||"",e=t[3];if(!e)return r;if(n&&"function"==typeof btoa){var o=(a=e,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=e.sources.map(function(t){return"/*# sourceURL="+e.sourceRoot+t+" */"});return[r].concat(i).concat([o]).join("\n")}var a;return[r].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+r+"}":r}).join("")},n.i=function(t,r){"string"==typeof t&&(t=[[null,t,""]]);for(var e={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(e[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];null!=a[0]&&e[a[0]]||(r&&!a[2]?a[2]=r:r&&(a[2]="("+a[2]+") and ("+r+")"),n.push(a))}},n}},22:function(t,n,r){"use strict";var e=r(7);r.n(e).a},23:function(t,n,r){(t.exports=r(2)(!1)).push([t.i,"@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n.w-toolbar {\n  position: fixed;\n  left: 0;\n  right: 0;\n  background-color: white;\n  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.1);\n  z-index: 99;\n}\n.w-toolbar.is-foot {\n    top: initial;\n    bottom: 0;\n}\n.w-toolbar .w-toolbar-wrapper {\n    display: flex;\n    height: 100%;\n    margin: auto;\n}\n.w-toolbar .w-toolbar-wrapper > * {\n      display: flex;\n      align-items: center;\n}\n.w-toolbar .w-toolbar-wrapper > :first-child {\n      flex-basis: 20%;\n      padding-left: .5rem;\n}\n.w-toolbar .w-toolbar-wrapper > :last-child {\n      flex-basis: 20%;\n      padding: .5rem;\n      justify-content: flex-end;\n}\n.w-toolbar .w-toolbar-wrapper > :first-child + :not(:last-child) {\n      flex: 1;\n      padding: .5rem;\n      justify-content: center;\n}\n",""])},3:function(t,n,r){var e,o,i={},a=(e=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=e.apply(this,arguments)),o}),s=function(t){var n={};return function(t,r){if("function"==typeof t)return t();if(void 0===n[t]){var e=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(t){e=null}n[t]=e}return n[t]}}(),f=null,u=0,c=[],l=r(4);function p(t,n){for(var r=0;r<t.length;r++){var e=t[r],o=i[e.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](e.parts[a]);for(;a<e.parts.length;a++)o.parts.push(m(e.parts[a],n))}else{var s=[];for(a=0;a<e.parts.length;a++)s.push(m(e.parts[a],n));i[e.id]={id:e.id,refs:1,parts:s}}}}function d(t,n){for(var r=[],e={},o=0;o<t.length;o++){var i=t[o],a=n.base?i[0]+n.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};e[a]?e[a].parts.push(s):r.push(e[a]={id:a,parts:[s]})}return r}function h(t,n){var r=s(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var e=c[c.length-1];if("top"===t.insertAt)e?e.nextSibling?r.insertBefore(n,e.nextSibling):r.appendChild(n):r.insertBefore(n,r.firstChild),c.push(n);else if("bottom"===t.insertAt)r.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(t.insertAt.before,r);r.insertBefore(n,o)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=c.indexOf(t);n>=0&&c.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var e=function(){0;return r.nc}();e&&(t.attrs.nonce=e)}return w(n,t.attrs),h(t,n),n}function w(t,n){Object.keys(n).forEach(function(r){t.setAttribute(r,n[r])})}function m(t,n){var r,e,o,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var a=u++;r=f||(f=b(n)),e=_.bind(null,r,a,!1),o=_.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",w(n,t.attrs),h(t,n),n}(n),e=function(t,n,r){var e=r.css,o=r.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(e=l(e));o&&(e+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([e],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,r,n),o=function(){v(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(n),e=function(t,n){var r=n.css,e=n.media;e&&t.setAttribute("media",e);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){v(r)});return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var r=d(t,n);return p(r,n),function(t){for(var e=[],o=0;o<r.length;o++){var a=r[o];(s=i[a.id]).refs--,e.push(s)}t&&p(d(t,n),n);for(o=0;o<e.length;o++){var s;if(0===(s=e[o]).refs){for(var f=0;f<s.parts.length;f++)s.parts[f]();delete i[s.id]}}}};var x,g=(x=[],function(t,n){return x[t]=n,x.filter(Boolean).join("\n")});function _(t,n,r,e){var o=r?"":e.css;if(t.styleSheet)t.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),a=t.childNodes;a[n]&&t.removeChild(a[n]),a.length?t.insertBefore(i,a[n]):t.appendChild(i)}}},38:function(t,n,r){t.exports=r(14)},4:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=n.protocol+"//"+n.host,e=r+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:e+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},7:function(t,n,r){var e=r(23);"string"==typeof e&&(e=[[t.i,e,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(3)(e,o);e.locals&&(t.exports=e.locals)}})});