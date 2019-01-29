(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Vuewel"] = factory();
	else
		root["Vuewel"] = factory();
})((typeof window !== 'undefined' ? window : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return registerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return registerComponentProgrammatic; });
const use = (plugin) => {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin)
  }
}

const registerComponent = (Vue, component) => {
  Vue.component(component.name, component)
}

const registerComponentProgrammatic = (Vue, property, component) => {
  Vue.prototype[property] = component
}


/***/ }),

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/rate/Rate.vue?vue&type=template&id=1914cd22&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "w-rate",
      style: { minWidth: 1.5 * _vm.num + "em", maxWidth: 1.5 * _vm.num + "em" }
    },
    [
      _c(
        "div",
        { staticClass: "stars-mask" },
        _vm._l(_vm.num, function(i) {
          return _c("w-icon", {
            key: i,
            attrs: { icon: "fas fa-star" },
            nativeOn: {
              mousemove: function($event) {
                $event.stopPropagation()
                return _vm.onMouseMove($event)
              },
              mouseleave: function($event) {
                $event.stopPropagation()
                return _vm.onMouseLeave($event)
              },
              mouseup: function($event) {
                $event.stopPropagation()
                return _vm.onMouseUp($event)
              },
              touchstart: function($event) {
                $event.stopPropagation()
                return _vm.onTouchStart($event)
              },
              touchmove: function($event) {
                $event.stopPropagation()
                return _vm.onTouchMove($event)
              }
            }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "stars",
          style: { width: (1.5 * _vm.val) / _vm.unit + "em" }
        },
        _vm._l(_vm.num, function(i) {
          return _c("w-icon", {
            key: i,
            attrs: { icon: "fas fa-star" },
            nativeOn: {
              mousemove: function($event) {
                $event.stopPropagation()
                return _vm.onMouseMove($event)
              },
              mouseleave: function($event) {
                $event.stopPropagation()
                return _vm.onMouseLeave($event)
              },
              mouseup: function($event) {
                $event.stopPropagation()
                return _vm.onMouseUp($event)
              },
              touchstart: function($event) {
                $event.stopPropagation()
                return _vm.onTouchStart($event)
              },
              touchmove: function($event) {
                $event.stopPropagation()
                return _vm.onTouchMove($event)
              }
            }
          })
        }),
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/rate/Rate.vue?vue&type=template&id=1914cd22&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/rate/Rate.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// import Icon from '../icon'

/* harmony default export */ var Ratevue_type_script_lang_js_ = ({
  name: 'WRate',
  components: {
    // Icon
  },
  props: {
    value: {
      type: Number,
      default: 3
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    unit: {
      type: Number,
      default: 1
    },
    decimal: {
      type: Number,
      default: 2
    },
    readonly: Boolean
  },
  data() {
    return {
      val: this.value
    }
  },
  computed: {
    num() {
      return Math.floor(this.max / this.unit)
    }
  },
  methods: {
    onMouseUp($event) {
      if (this.readonly) return

      this.val = this.getMouseValue($event)
      this.$emit('input', this.val)
    },
    onMouseMove($event) {
      if (this.readonly) return

      this.val = this.getMouseValue($event)
    },
    onMouseLeave() {
      if (this.readonly) return

      this.val = this.value
    },
    onTouchStart($event) {
      if (this.readonly) return

      this.val = this.getTouchValue($event)
      this.$emit('input', this.val)
    },
    onTouchMove($event) {
      if (this.readonly) return

      this.val = this.getTouchValue($event)
      this.$emit('input', this.val)
    },
    getMouseValue($event) {
      const val = Math.round(($event.clientX - this.$el.offsetLeft) / this.$el.getBoundingClientRect().width * this.max * this.decimal) / this.decimal
      return Math.min(this.max, Math.max(this.min, val))
    },
    getTouchValue($event) {
      const val = Math.round(($event.changedTouches[0].clientX - this.$el.getBoundingClientRect().x) / this.$el.getBoundingClientRect().width * this.max * this.decimal) / this.decimal
      return Math.min(this.max, Math.max(this.min, val))
    }
  }
});

// CONCATENATED MODULE: ./src/components/rate/Rate.vue?vue&type=script&lang=js&
 /* harmony default export */ var rate_Ratevue_type_script_lang_js_ = (Ratevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/rate/Rate.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  rate_Ratevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/rate/Rate.vue"
/* harmony default export */ var Rate = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/rate/index.js




const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Rate)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var rate = __webpack_exports__["default"] = (Plugin);


/***/ })

/******/ });
});