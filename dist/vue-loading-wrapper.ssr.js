'use strict';Object.defineProperty(exports,'__esModule',{value:true});//
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
var script = {
  name: "LoadingWrapper",
  props: {
    loading: Boolean,
    pulse: Boolean,
    text: {
      type: String,
      default: "Loading"
    },
    tag: {
      type: String,
      default: "div"
    },
    containerClass: {
      type: String,
      default: "loading-wrapper"
    },
    barClass: {
      type: String,
      default: "loading-wrapper__bar"
    },
    progressClass: {
      type: String,
      default: "loading-wrapper__progress"
    },
    textClass: {
      type: String,
      default: "loading-wrapper__text"
    },
    barBgColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.15)"
    },
    progressBgColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.5)"
    },
    textColor: {
      type: String,
      default: "rgba(0, 0, 0, 0.9)"
    }
  },
  data: function data() {
    return {
      progress: 0,
      isFinishAnimationEnded: false,
      timeoutId: null
    };
  },
  mounted: function mounted() {
    this.randomlyFillProgress();
  },
  watch: {
    loading: function loading() {
      var _this = this;

      clearTimeout(this.timeoutId);
      this.progress = 100;
      setTimeout(function () {
        _this.isFinishAnimationEnded = true;
      }, 500);
    }
  },
  methods: {
    randomlyFillProgress: function randomlyFillProgress() {
      var _this2 = this;

      if (this.progress === 100) return;
      setTimeout(function () {
        var randomProgressDelta = Math.floor(Math.random() * 21) + 5;
        var nextRandomProgressDelta = _this2.progress + randomProgressDelta > 100 ? 100 - _this2.progress : randomProgressDelta;
        _this2.progress += nextRandomProgressDelta;
        _this2.timeoutId = setTimeout(function () {
          _this2.randomlyFillProgress();
        }, 500);
      }, 0);
    }
  }
};function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier /* server only */, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
    if (typeof shadowMode !== 'boolean') {
        createInjectorSSR = createInjector;
        createInjector = shadowMode;
        shadowMode = false;
    }
    // Vue.extend constructor export interop.
    const options = typeof script === 'function' ? script.options : script;
    // render functions
    if (template && template.render) {
        options.render = template.render;
        options.staticRenderFns = template.staticRenderFns;
        options._compiled = true;
        // functional template
        if (isFunctionalTemplate) {
            options.functional = true;
        }
    }
    // scopedId
    if (scopeId) {
        options._scopeId = scopeId;
    }
    let hook;
    if (moduleIdentifier) {
        // server build
        hook = function (context) {
            // 2.3 injection
            context =
                context || // cached call
                    (this.$vnode && this.$vnode.ssrContext) || // stateful
                    (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
            // 2.2 with runInNewContext: true
            if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
                context = __VUE_SSR_CONTEXT__;
            }
            // inject component styles
            if (style) {
                style.call(this, createInjectorSSR(context));
            }
            // register component module identifier for async chunk inference
            if (context && context._registeredComponents) {
                context._registeredComponents.add(moduleIdentifier);
            }
        };
        // used by ssr in case component is cached and beforeCreate
        // never gets called
        options._ssrRegister = hook;
    }
    else if (style) {
        hook = shadowMode
            ? function (context) {
                style.call(this, createInjectorShadow(context, this.$root.$options.shadowRoot));
            }
            : function (context) {
                style.call(this, createInjector(context));
            };
    }
    if (hook) {
        if (options.functional) {
            // register for functional component in vue file
            const originalRender = options.render;
            options.render = function renderWithStyleInjection(h, context) {
                hook.call(context);
                return originalRender(h, context);
            };
        }
        else {
            // inject component registration as beforeCreate hook
            const existing = options.beforeCreate;
            options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
        }
    }
    return script;
}function createInjectorSSR(context) {
    if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
    }
    if (!context)
        return () => { };
    if (!('styles' in context)) {
        context._styles = context._styles || {};
        Object.defineProperty(context, 'styles', {
            enumerable: true,
            get: () => context._renderStyles(context._styles)
        });
        context._renderStyles = context._renderStyles || renderStyles;
    }
    return (id, style) => addStyle(id, style, context);
}
function addStyle(id, css, context) {
    const group =  css.media || 'default' ;
    const style = context._styles[group] || (context._styles[group] = { ids: [], css: '' });
    if (!style.ids.includes(id)) {
        style.media = css.media;
        style.ids.push(id);
        let code = css.source;
        style.css += code + '\n';
    }
}
function renderStyles(styles) {
    let css = '';
    for (const key in styles) {
        const style = styles[key];
        css +=
            '<style data-vue-ssr-id="' +
                Array.from(style.ids).join(' ') +
                '"' +
                (style.media ? ' media="' + style.media + '"' : '') +
                '>' +
                style.css +
                '</style>';
    }
    return css;
}/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _vm.loading || !_vm.isFinishAnimationEnded ? _c('div', {
    class: _vm.containerClass
  }, [_vm._ssrNode("<div" + _vm._ssrClass(null, _vm.barClass) + _vm._ssrStyle(null, {
    backgroundColor: _vm.barBgColor
  }, null) + " data-v-44a53d0a><div" + _vm._ssrClass(null, [_vm.progressClass, {
    'animate-pulse': _vm.pulse
  }]) + _vm._ssrStyle(null, {
    width: _vm.progress + "%",
    backgroundColor: _vm.progressBgColor
  }, null) + " data-v-44a53d0a></div></div> <div" + _vm._ssrClass(null, _vm.textClass) + _vm._ssrStyle(null, {
    color: _vm.textColor
  }, null) + " data-v-44a53d0a>" + _vm._ssrEscape(_vm._s(_vm.text)) + "</div>")], 2) : _c(_vm.tag, {
    tag: "component"
  }, [_vm._t("default")], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-44a53d0a_0", {
    source: ".loading-wrapper[data-v-44a53d0a]{display:flex;flex-direction:column;justify-content:center;align-items:center;user-select:none}.loading-wrapper__bar[data-v-44a53d0a]{position:relative;width:10rem}.loading-wrapper__progress[data-v-44a53d0a]{height:.05rem;transition:width .25s linear}.animate-pulse[data-v-44a53d0a]{animation:pulse-data-v-44a53d0a .5s ease infinite}.loading-wrapper__text[data-v-44a53d0a]{font-family:sans-serif;font-size:.8rem}@keyframes pulse-data-v-44a53d0a{from,to{opacity:1}50%{opacity:.25}}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = "data-v-44a53d0a";
/* module identifier */

var __vue_module_identifier__ = "data-v-44a53d0a";
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject shadow dom */

var __vue_component__ = /*#__PURE__*/normalizeComponent({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, false, undefined, createInjectorSSR, undefined);// Import vue component

var install = function installLoadingWrapper(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component("LoadingWrapper", __vue_component__);
}; // Create module definition for Vue.use()


var plugin = {
  install: install
}; // To auto-install on non-es builds, when vue is found
// eslint-disable-next-line no-redeclare

/* global window, global */

{
  var GlobalVue = null;

  if (typeof window !== "undefined") {
    GlobalVue = window.Vue;
  } else if (typeof global !== "undefined") {
    GlobalVue = global.Vue;
  }

  if (GlobalVue) {
    GlobalVue.use(plugin);
  }
} // Inject install function into component - allows component
// to be registered via Vue.use() as well as Vue.component()


__vue_component__.install = install; // Export component by default
// also be used as directives, etc. - eg. import { RollupDemoDirective } from 'rollup-demo';
// export const RollupDemoDirective = component;
exports.default=__vue_component__;