!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.tutu=t():e.tutu=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";r.r(t);var n={data:function(){return{isSidebarEntire:!0,isSidebarCollapsed:!0,activeMenuWithSubItems:null}},methods:{selectMenuWithSubItems:function(e,t){this.activeMenuWithSubItems==e&&t?this.activeMenuWithSubItems=null:this.activeMenuWithSubItems=e},toggleSidebarWidth:function(){this.isSidebarEntire=!this.isSidebarEntire},toggleSidebarVisibility:function(){this.isSidebarCollapsed=!this.isSidebarCollapsed},scrollToError:function(){var e=$("#frame-scrollable"),t=e.find(".errors, .error");t.length>0&&e.animate({scrollTop:e.scrollTop()-e.offset().top+t.filter(":first").offset().top-15})},getErrorHtml:function(e){if(null==e||0==e.length)return null;if(e.hasOwnProperty("message")&&e.hasOwnProperty("errors")){if((null==e.errors||0==e.errors.length)&&(null==e.message||""==e.message))return null;var t="";return null!=e.message&&""!=e.message&&(t+="<strong>"+e.message+"</strong><br />"),null!=e.errors&&0!=e.errors.length&&(t+=e.errors.map((function(e){return e.message})).join("<br />")),t}return e.hasOwnProperty("errors")&&(!e.hasOwnProperty("isValid")||void 0!=e.isValid&&0==e.isValid)?null==e.errors||0==e.errors.length?null:e.errors.map((function(e){return e.value})).join("<br />"):null}}},o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{directives:[{name:"show",rawName:"v-show",value:e.isVisible,expression:"isVisible"}],class:e.alertClass,attrs:{id:e.id,role:"alert"}},[e.closable?r("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:e.closeAlert}},[r("span",{attrs:{"aria-hidden":"true"}},[e._t("close",[e._v("\xd7")])],2)]):e._e(),e._v(" "),e._t("default"),e._v(" "),r("span",{domProps:{innerHTML:e._s(e.errorMessage)}})],2)};o._withStripped=!0;var i=function(e,t,r,n,o,i,s,l){var u,a="function"===typeof e?e.options:e;if(t&&(a.render=t,a.staticRenderFns=r,a._compiled=!0),n&&(a.functional=!0),i&&(a._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},a._ssrRegister=u):o&&(u=l?function(){o.call(this,(a.functional?this.parent:this).$root.$options.shadowRoot)}:o),u)if(a.functional){a._injectStyles=u;var c=a.render;a.render=function(e,t){return u.call(t),c(e,t)}}else{var d=a.beforeCreate;a.beforeCreate=d?[].concat(d,u):[u]}return{exports:e,options:a}}({mixins:[n],props:{id:{type:String,default:function(){return"alert-id-"+this._uid}},closable:{type:Boolean,default:!1},duration:{type:Number,default:0},type:{type:String,default:"danger"},className:{type:String,default:null},errors:{type:[Object,Array],required:!1,default:null}},data:function(){return{timeout:0}},computed:{alertClass:function(){return null!=this.className?this.className:"alert alert-".concat(this.type)},isVisible:function(){return null!=this.errorMessage||null!=this.$slots.default&&""!=this.$slots.default},errorMessage:function(){return this.getErrorHtml(this.errors)}},mounted:function(){this.duration>0&&(this.timeout=setTimeout(this.closeAlert,this.duration))},destroyed:function(){clearTimeout(this.timeout)},methods:{closeAlert:function(){clearTimeout(this.timeout),this.$emit("close")}}},o,[],!1,null,null,null);i.options.__file="src/components/alert.vue";var s=i.exports;t.default={helper:n,alert:s}}])}));