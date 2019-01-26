(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["Vuewel"] = factory(require("vue"));
	else
		root["Vuewel"] = factory(root["Vue"]);
})((typeof window !== 'undefined' ? window : this), function(__WEBPACK_EXTERNAL_MODULE__2__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
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
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/Button.vue?vue&type=template&id=5975756f&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "button",
    {
      staticClass: "w-button",
      class: { "is-loading": _vm.computedProcessing },
      attrs: { disabled: _vm.disabled },
      on: { click: _vm.onClick }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/button/Button.vue?vue&type=template&id=5975756f&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/button/Button.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//

/* harmony default export */ var Buttonvue_type_script_lang_js_ = ({
  name: 'WButton',
  props: {
    disabled: Boolean,
    processing: Boolean,
    onclick: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      scopedProcessing: false
    }
  },
  computed: {
    computedProcessing: $e => $e.processing || $e.scopedProcessing
  },
  methods: {
    async onClick() {
      if (this.disabled || this.computedProcessing) return

      this.scopedProcessing = true
      if (this.onclick) {
        await this.onclick()
      } else {
        this.$emit('click')
      }
      this.scopedProcessing = false
    }
  }
});

// CONCATENATED MODULE: ./src/components/button/Button.vue?vue&type=script&lang=js&
 /* harmony default export */ var button_Buttonvue_type_script_lang_js_ = (Buttonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/button/Button.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  button_Buttonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/button/Button.vue"
/* harmony default export */ var Button = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/button/index.js




const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Button)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var components_button = __webpack_exports__["default"] = (Plugin);


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__(2);
var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default = /*#__PURE__*/__webpack_require__.n(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/Modal.vue?vue&type=template&id=177f8d4b&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: _vm.transition } }, [
    _vm.active
      ? _c(
          "div",
          { staticClass: "w-modal" },
          [
            !_vm.full
              ? _c("div", {
                  staticClass: "modal-backdrop",
                  on: { click: _vm.onClickBackdrop }
                })
              : _vm._e(),
            _vm._v(" "),
            _vm.component
              ? _c(
                  _vm.component,
                  _vm._g(
                    _vm._b(
                      {
                        tag: "component",
                        style: {
                          minWidth: _vm.width + "px",
                          maxHeight: _vm.height + "px"
                        },
                        on: { close: _vm.close }
                      },
                      "component",
                      _vm.props,
                      false
                    ),
                    _vm.events
                  )
                )
              : _c(
                  "div",
                  { staticClass: "modal-container" },
                  [
                    _vm.content
                      ? _c("div", {
                          domProps: { innerHTML: _vm._s(_vm.content) }
                        })
                      : _vm._t("default")
                  ],
                  2
                )
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/modal/Modal.vue?vue&type=template&id=177f8d4b&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/modal/Modal.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Modalvue_type_script_lang_js_ = ({
  name: 'WModal',
  props: {
    programmatic: Boolean,
    component: [Object, Function],
    content: String,
    props: Object,
    events: Object,
    name: {
      type: String,
      default: ['', '', '', '', '', '', '', '', ''].reduce((y, x) => y + "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(Math.random() * 36)])
    },
    width: {
      type: Number,
      default: 320
    },
    height: {
      type: Number,
      default: 480
    },
    canClose: {
      type: Boolean,
      default: true
    },
    full: Boolean,
    scroll: {
      type: String,
      default: 'clip',
      validator: value => ['clip', 'keep'].indexOf(value) >= 0
    }
  },
  data() {
    return {
      active: false,
      transition: 'transition'
    }
  },
  created() {
    this.registerWModal(this.name, this.activate, this.deactivate)
  },
  beforeMount() {
    this.programmatic && document.body.appendChild(this.$el)
  },
  mounted() {
    if (this.programmatic) this.active = true
    else if (this.active) this.handleScroll()
  },
  destroyed() {
    this.unregisterWModal(this.name)
  },
  methods: {
    activate() {
      this.active = true
    },
    deactivate() {
      this.active = false
    },
    open() {
      this.openWModal(this.name)
    },
    close() {
      this.closeWModal(this.name)
      this.$emit('close')
    },
    onClickBackdrop() {
      if (!this.canClose) return
      this.closeWModal(this.name)
    },
    handleScroll() {
      if (typeof window === 'undefined') return
      if (this.scroll === 'clip') {
        if (this.isActive) {
          document.documentElement.classList.add('is-clipped')
        } else {
          document.documentElement.classList.remove('is-clipped')
        }
        return
      }
      this.savedScrollTop = !this.savedScrollTop
          ? document.documentElement.scrollTop
          : this.savedScrollTop
      if (this.isActive) {
        document.body.classList.add('is-noscroll')
      } else {
        document.body.classList.remove('is-noscroll')
      }
      if (this.isActive) {
        document.body.style.top = `-${this.savedScrollTop}px`
        return
      }
      document.documentElement.scrollTop = this.savedScrollTop
      document.body.style.top = null
      this.savedScrollTop = null
    }
  }
});

// CONCATENATED MODULE: ./src/components/modal/Modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var modal_Modalvue_type_script_lang_js_ = (Modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/modal/Modal.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  modal_Modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/modal/Modal.vue"
/* harmony default export */ var Modal = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/modal/index.js





const ModalProgrammatic = {
  open(params) {
    let content
    let parent
    if (typeof params === 'string') content = params

    const defaultParam = {
      programmatic: true,
      content
    }
    if (params.parent) {
      parent = params.parent
      delete params.parent
    }
    const propsData = Object.assign(defaultParam, params)

    const vm = typeof window !== 'undefined' && window.Vue ? window.Vue : external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_default.a
    const ModalComponent = vm.extend(Modal)
    return new ModalComponent({
      parent,
      el: document.createElement('div'),
      propsData
    })
  }
}

const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Modal)
    Object(plugins["b" /* registerComponentProgrammatic */])(Vue, '$modal', ModalProgrammatic)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var modal = __webpack_exports__["default"] = (Plugin);


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/toolbar/Toolbar.vue?vue&type=template&id=b35df132&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "w-toolbar",
      class: { "is-foot": _vm.foot, "has-shadow": _vm.shadow },
      style: _vm.rootStyle
    },
    [
      1 === _vm.scopedRow
        ? _c(
            "div",
            {
              staticClass: "w-toolbar-wrapper",
              style: { maxWidth: _vm.width + "px" }
            },
            [_vm._t("default")],
            2
          )
        : _vm._t("default")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/toolbar/Toolbar.vue?vue&type=template&id=b35df132&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/toolbar/Toolbar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Toolbarvue_type_script_lang_js_ = ({
  name: 'WToolbar',
  props: {
    row: {
      type: Number | String,
      default: '1'
    },
    scrollTop: {
      type: Number,
      default: 0
    },
    width: {
      type: String,
      default: '1080'
    },
    height: {
      type: String,
      default: '48'
    },
    foot: Boolean,
    shadow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      scrolled: 0
    }
  },
  computed: {
    scopedRow: vm => Number(vm.row),
    scrollableHeight: vm => vm.height * (vm.scopedRow - 1),
    rootStyle: vm => ({
      top: `-${Math.min(vm.scrolled, vm.scrollTop)}px`,
      height: `${vm.height * vm.scopedRow}px`
    })
  },
  watch: {
    scrollTop(newValue, oldValue) {
      if (newValue < oldValue) {
        this.scrolled = Math.max(0, this.scrolled + newValue - oldValue)
      } else {
        this.scrolled = Math.min(this.scrollableHeight, this.scrolled + newValue - oldValue)
      }
    }
  }
});

// CONCATENATED MODULE: ./src/components/toolbar/Toolbar.vue?vue&type=script&lang=js&
 /* harmony default export */ var toolbar_Toolbarvue_type_script_lang_js_ = (Toolbarvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/toolbar/Toolbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  toolbar_Toolbarvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/toolbar/Toolbar.vue"
/* harmony default export */ var Toolbar = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/toolbar/index.js




const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Toolbar)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var toolbar = __webpack_exports__["default"] = (Plugin);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/columns/Columns.vue?vue&type=template&id=bf32c7aa&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "w-columns",
      style: { flexWrap: _vm.multi ? "wrap" : "nowrap" }
    },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/columns/Columns.vue?vue&type=template&id=bf32c7aa&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/columns/Columns.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Columnsvue_type_script_lang_js_ = ({
  name: 'WColumns',
  props: {
    multi: Boolean
  }
});

// CONCATENATED MODULE: ./src/components/columns/Columns.vue?vue&type=script&lang=js&
 /* harmony default export */ var columns_Columnsvue_type_script_lang_js_ = (Columnsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/columns/Columns.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  columns_Columnsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/columns/Columns.vue"
/* harmony default export */ var Columns = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/columns/index.js




const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Columns)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var columns = __webpack_exports__["default"] = (Plugin);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/Icon.vue?vue&type=template&id=0933a10f&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "span",
    { staticClass: "w-icon" },
    [_vm.icon ? _c("i", { class: _vm.cls }) : _vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/icon/Icon.vue?vue&type=template&id=0933a10f&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/icon/Icon.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//

/* harmony default export */ var Iconvue_type_script_lang_js_ = ({
  name: 'WIcon',
  props: {
    icon: String,
    size: String,
    fw: Boolean
  },
  computed: {
    cls: vm => [
      vm.icon,
      vm.size ? `fa-${vm.size}` : '',
      vm.fw ? `fa-fw` : ''
    ]
  }
});

// CONCATENATED MODULE: ./src/components/icon/Icon.vue?vue&type=script&lang=js&
 /* harmony default export */ var icon_Iconvue_type_script_lang_js_ = (Iconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/icon/Icon.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  icon_Iconvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/icon/Icon.vue"
/* harmony default export */ var Icon = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/icon/index.js




const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Icon)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var icon = __webpack_exports__["default"] = (Plugin);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/Card.vue?vue&type=template&id=7be81122&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "w-card" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/card/Card.vue?vue&type=template&id=7be81122&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/card/Card.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Cardvue_type_script_lang_js_ = ({
  name: 'WCard'
});

// CONCATENATED MODULE: ./src/components/card/Card.vue?vue&type=script&lang=js&
 /* harmony default export */ var card_Cardvue_type_script_lang_js_ = (Cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/card/Card.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  card_Cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/card/Card.vue"
/* harmony default export */ var Card = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/card/index.js




const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Card)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var card = __webpack_exports__["default"] = (Plugin);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/navtabs/Navtabs.vue?vue&type=template&id=0c768ab3&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    { staticClass: "w-navtabs" },
    _vm._l(_vm.tabs, function(tab, i) {
      return _c(
        "li",
        {
          key: tab.id,
          staticClass: "w-navtab",
          class: { "is-active": _vm.activeIndex === i },
          on: {
            click: function($event) {
              _vm.onClick(i)
            }
          }
        },
        [_c("span", [_vm._v(_vm._s(tab.name))])]
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/navtabs/Navtabs.vue?vue&type=template&id=0c768ab3&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/components/navtabs/Navtabs.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Navtabsvue_type_script_lang_js_ = ({
  name: 'WNavtabs',
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  methods: {
    onClick(index) {
      this.activeIndex = index
      const tab = this.tabs[index]
      if (tab.path && this.$router) {
        this.$router.push(tab.path)
      } else if (tab.url && typeof window !== 'undefined') {
        window.open(tab.url, '_blank')
      }
      this.$emit('click', tab)
    }
  }
});

// CONCATENATED MODULE: ./src/components/navtabs/Navtabs.vue?vue&type=script&lang=js&
 /* harmony default export */ var navtabs_Navtabsvue_type_script_lang_js_ = (Navtabsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./src/components/navtabs/Navtabs.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navtabs_Navtabsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/navtabs/Navtabs.vue"
/* harmony default export */ var Navtabs = (component.exports);
// EXTERNAL MODULE: ./src/utils/plugins.js
var plugins = __webpack_require__(0);

// CONCATENATED MODULE: ./src/components/navtabs/index.js




const Plugin = {
  install(Vue) {
    Object(plugins["a" /* registerComponent */])(Vue, Navtabs)
  }
}

Object(plugins["c" /* use */])(Plugin)

/* harmony default export */ var navtabs = __webpack_exports__["default"] = (Plugin);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return _toolbar__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _columns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Columns", function() { return _columns__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return _icon__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return _card__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _navtabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Navtabs", function() { return _navtabs__WEBPACK_IMPORTED_MODULE_6__["default"]; });












/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(10);


/***/ })
/******/ ]);
});