!function(n,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Vuewel=t():n.Vuewel=t()}(window,function(){return function(n){var t={};function e(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return n[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var i in n)e.d(r,i,function(t){return n[t]}.bind(null,i));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="/",e(e.s=35)}({0:function(n,t,e){"use strict";e.d(t,"c",function(){return r}),e.d(t,"a",function(){return i}),e.d(t,"b",function(){return o});const r=n=>{"undefined"!=typeof window&&window.Vue&&window.Vue.use(n)},i=(n,t)=>{n.component(t.name,t)},o=(n,t,e)=>{n.prototype[t]=e}},1:function(n,t,e){"use strict";function r(n,t,e,r,i,o,c,s){var u,a="function"==typeof n?n.options:n;if(t&&(a.render=t,a.staticRenderFns=e,a._compiled=!0),r&&(a.functional=!0),o&&(a._scopeId="data-v-"+o),c?(u=function(n){(n=n||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(n=__VUE_SSR_CONTEXT__),i&&i.call(this,n),n&&n._registeredComponents&&n._registeredComponents.add(c)},a._ssrRegister=u):i&&(u=s?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(a.functional){a._injectStyles=u;var f=a.render;a.render=function(n,t){return u.call(t),f(n,t)}}else{var l=a.beforeCreate;a.beforeCreate=l?[].concat(l,u):[u]}return{exports:n,options:a}}e.d(t,"a",function(){return r})},15:function(n,t,e){"use strict";e.r(t);var r=function(){var n=this.$createElement;return(this._self._c||n)("div",{staticClass:"w-columns",style:{flexWrap:this.multi?"wrap":"nowrap"}},[this._t("default")],2)};r._withStripped=!0;var i={name:"WColumns",props:{multi:Boolean}},o=(e(24),e(1)),c=Object(o.a)(i,r,[],!1,null,null,null);c.options.__file="src/components/columns/Columns.vue";var s=c.exports,u=e(0);const a={install(n){Object(u.a)(n,s)}};Object(u.c)(a);t.default=a},2:function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map(function(t){var e=function(n,t){var e=n[1]||"",r=n[3];if(!r)return e;if(t&&"function"==typeof btoa){var i=(c=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(c))))+" */"),o=r.sources.map(function(n){return"/*# sourceURL="+r.sourceRoot+n+" */"});return[e].concat(o).concat([i]).join("\n")}var c;return[e].join("\n")}(t,n);return t[2]?"@media "+t[2]+"{"+e+"}":e}).join("")},t.i=function(n,e){"string"==typeof n&&(n=[[null,n,""]]);for(var r={},i=0;i<this.length;i++){var o=this[i][0];null!=o&&(r[o]=!0)}for(i=0;i<n.length;i++){var c=n[i];null!=c[0]&&r[c[0]]||(e&&!c[2]?c[2]=e:e&&(c[2]="("+c[2]+") and ("+e+")"),t.push(c))}},t}},24:function(n,t,e){"use strict";var r=e(8);e.n(r).a},25:function(n,t,e){(n.exports=e(2)(!1)).push([n.i,"@keyframes spinAround {\nfrom {\n    transform: rotate(0deg);\n}\nto {\n    transform: rotate(359deg);\n}\n}\n.w-columns {\n  display: flex;\n  margin: -.5rem;\n}\n.w-columns > * {\n    flex: none;\n    height: 100%;\n    width: 100%;\n    padding: .5rem;\n}\n.w-columns > .is-1 {\n    width: calc(100% / 12 * 1);\n}\n.w-columns > .is-2 {\n    width: calc(100% / 12 * 2);\n}\n.w-columns > .is-3 {\n    width: calc(100% / 12 * 3);\n}\n.w-columns > .is-4 {\n    width: 33.33333%;\n}\n.w-columns > .is-5 {\n    width: calc(100% / 12 * 5);\n}\n.w-columns > .is-6 {\n    width: calc(100% / 12 * 6);\n}\n.w-columns > .is-7 {\n    width: calc(100% / 12 * 7);\n}\n.w-columns > .is-8 {\n    width: calc(100% / 12 * 8);\n}\n.w-columns > .is-9 {\n    width: calc(100% / 12 * 9);\n}\n.w-columns > .is-10 {\n    width: calc(100% / 12 * 10);\n}\n.w-columns > .is-11 {\n    width: calc(100% / 12 * 11);\n}\n.w-columns > .is-12 {\n    width: calc(100% / 12 * 12);\n}\n@media screen and (min-width: 769px) {\n.w-columns > .is-1-tablet {\n      width: calc(100% / 12 * 1);\n}\n.w-columns > .is-2-tablet {\n      width: calc(100% / 12 * 2);\n}\n.w-columns > .is-3-tablet {\n      width: calc(100% / 12 * 3);\n}\n.w-columns > .is-4-tablet {\n      width: calc(100% / 12 * 4);\n}\n.w-columns > .is-5-tablet {\n      width: calc(100% / 12 * 5);\n}\n.w-columns > .is-6-tablet {\n      width: calc(100% / 12 * 6);\n}\n.w-columns > .is-7-tablet {\n      width: calc(100% / 12 * 7);\n}\n.w-columns > .is-8-tablet {\n      width: calc(100% / 12 * 8);\n}\n.w-columns > .is-9-tablet {\n      width: calc(100% / 12 * 9);\n}\n.w-columns > .is-10-tablet {\n      width: calc(100% / 12 * 10);\n}\n.w-columns > .is-11-tablet {\n      width: calc(100% / 12 * 11);\n}\n.w-columns > .is-12-tablet {\n      width: calc(100% / 12 * 12);\n}\n}\n@media screen and (min-width: 1080px) {\n.w-columns > .is-1-desktop {\n      width: calc(100% / 12 * 1);\n}\n.w-columns > .is-2-desktop {\n      width: calc(100% / 12 * 2);\n}\n.w-columns > .is-3-desktop {\n      width: calc(100% / 12 * 3);\n}\n.w-columns > .is-4-desktop {\n      width: calc(100% / 12 * 4);\n}\n.w-columns > .is-5-desktop {\n      width: calc(100% / 12 * 5);\n}\n.w-columns > .is-6-desktop {\n      width: calc(100% / 12 * 6);\n}\n.w-columns > .is-7-desktop {\n      width: calc(100% / 12 * 7);\n}\n.w-columns > .is-8-desktop {\n      width: calc(100% / 12 * 8);\n}\n.w-columns > .is-9-desktop {\n      width: calc(100% / 12 * 9);\n}\n.w-columns > .is-10-desktop {\n      width: calc(100% / 12 * 10);\n}\n.w-columns > .is-11-desktop {\n      width: calc(100% / 12 * 11);\n}\n.w-columns > .is-12-desktop {\n      width: calc(100% / 12 * 12);\n}\n}\n",""])},3:function(n,t,e){var r,i,o={},c=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(n){var t={};return function(n,e){if("function"==typeof n)return n();if(void 0===t[n]){var r=function(n,t){return t?t.querySelector(n):document.querySelector(n)}.call(this,n,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}t[n]=r}return t[n]}}(),u=null,a=0,f=[],l=e(4);function d(n,t){for(var e=0;e<n.length;e++){var r=n[e],i=o[r.id];if(i){i.refs++;for(var c=0;c<i.parts.length;c++)i.parts[c](r.parts[c]);for(;c<r.parts.length;c++)i.parts.push(b(r.parts[c],t))}else{var s=[];for(c=0;c<r.parts.length;c++)s.push(b(r.parts[c],t));o[r.id]={id:r.id,refs:1,parts:s}}}}function p(n,t){for(var e=[],r={},i=0;i<n.length;i++){var o=n[i],c=t.base?o[0]+t.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};r[c]?r[c].parts.push(s):e.push(r[c]={id:c,parts:[s]})}return e}function h(n,t){var e=s(n.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===n.insertAt)r?r.nextSibling?e.insertBefore(t,r.nextSibling):e.appendChild(t):e.insertBefore(t,e.firstChild),f.push(t);else if("bottom"===n.insertAt)e.appendChild(t);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertAt.before,e);e.insertBefore(t,i)}}function w(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var t=f.indexOf(n);t>=0&&f.splice(t,1)}function m(n){var t=document.createElement("style");if(void 0===n.attrs.type&&(n.attrs.type="text/css"),void 0===n.attrs.nonce){var r=function(){0;return e.nc}();r&&(n.attrs.nonce=r)}return v(t,n.attrs),h(n,t),t}function v(n,t){Object.keys(t).forEach(function(e){n.setAttribute(e,t[e])})}function b(n,t){var e,r,i,o;if(t.transform&&n.css){if(!(o="function"==typeof t.transform?t.transform(n.css):t.transform.default(n.css)))return function(){};n.css=o}if(t.singleton){var c=a++;e=u||(u=m(t)),r=C.bind(null,e,c,!1),i=C.bind(null,e,c,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(n){var t=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",v(t,n.attrs),h(n,t),t}(t),r=function(n,t,e){var r=e.css,i=e.sourceMap,o=void 0===t.convertToAbsoluteUrls&&i;(t.convertToAbsoluteUrls||o)&&(r=l(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var c=new Blob([r],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(c),s&&URL.revokeObjectURL(s)}.bind(null,e,t),i=function(){w(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(t),r=function(n,t){var e=t.css,r=t.media;r&&n.setAttribute("media",r);if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){w(e)});return r(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;r(n=t)}else i()}}n.exports=function(n,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=c()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var e=p(n,t);return d(e,t),function(n){for(var r=[],i=0;i<e.length;i++){var c=e[i];(s=o[c.id]).refs--,r.push(s)}n&&d(p(n,t),t);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}};var _,U=(_=[],function(n,t){return _[n]=t,_.filter(Boolean).join("\n")});function C(n,t,e,r){var i=e?"":r.css;if(n.styleSheet)n.styleSheet.cssText=U(t,i);else{var o=document.createTextNode(i),c=n.childNodes;c[t]&&n.removeChild(c[t]),c.length?n.insertBefore(o,c[t]):n.appendChild(o)}}},35:function(n,t,e){n.exports=e(15)},4:function(n,t){n.exports=function(n){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var e=t.protocol+"//"+t.host,r=e+t.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,t){var i,o=t.trim().replace(/^"(.*)"$/,function(n,t){return t}).replace(/^'(.*)'$/,function(n,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?n:(i=0===o.indexOf("//")?o:0===o.indexOf("/")?e+o:r+o.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},8:function(n,t,e){var r=e(25);"string"==typeof r&&(r=[[n.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(3)(r,i);r.locals&&(n.exports=r.locals)}})});