(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{23:function(t,e,s){t.exports=s(69)},42:function(t,e,s){"use strict";var n=s(6);s.n(n).a},6:function(t,e,s){},69:function(t,e,s){"use strict";s.r(e);s(24);var n=s(5),r=s(10),a=s(8),i={data:function(){return{isSidebarEntire:!0,isSidebarCollapsed:!0,activeMenuWithSubItems:null}},methods:{selectMenuWithSubItems:function(t,e){this.activeMenuWithSubItems==t&&e?this.activeMenuWithSubItems=null:this.activeMenuWithSubItems=t},toggleSidebarWidth:function(){this.isSidebarEntire=!this.isSidebarEntire},toggleSidebarVisibility:function(){this.isSidebarCollapsed=!this.isSidebarCollapsed},scrollToError:function(){var t=$("#frame-scrollable"),e=t.find(".errors, .error");e.length>0&&t.animate({scrollTop:t.scrollTop()-t.offset().top+e.filter(":first").offset().top-15})},getErrorHtml:function(t){if(null==t||0==t.length)return null;if(t.hasOwnProperty("message")&&t.hasOwnProperty("errors")){if((null==t.errors||0==t.errors.length)&&(null==t.message||""==t.message))return null;var e="";return null!=t.message&&""!=t.message&&(e+="<strong>"+t.message+"</strong><br />"),null!=t.errors&&0!=t.errors.length&&(e+=t.errors.map((function(t){return t.message})).join("<br />")),e}return t.hasOwnProperty("errors")&&(!t.hasOwnProperty("isValid")||void 0!=t.isValid&&0==t.isValid)?null==t.errors||0==t.errors.length?null:t.errors.map((function(t){return t.value})).join("<br />"):null}}},o=s(4),l=s.n(o);function u(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=function(t,e){if(!t)return;if("string"===typeof t)return c(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return c(t,e)}(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return i=t.done,t},e:function(t){o=!0,a=t},f:function(){try{i||null==s.return||s.return()}finally{if(o)throw a}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=t[s];return n}var d={computed:{headline:function(){var t,e=this.$route.name,s=u(p.menu);try{for(s.s();!(t=s.n()).done;){var n=t.value;if(e==n.name)return n.text;if(void 0!=n.subs&&null!=n.subs&&n.subs.length>0){var r,a=u(n.subs);try{for(a.s();!(r=a.n()).done;){var i=r.value;if(e==i.name)return i.text}}catch(o){a.e(o)}finally{a.f()}}}}catch(o){s.e(o)}finally{s.f()}return"?"}}},m=s(2),v=Object(m.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h1",[this._v(this._s(this.headline))])])}),[],!1,null,null,null).exports,p={devMode:!0,signInUrl:"/sign-in",signInAjaxUrl:"/api/sign-in",getLoginInfoAjaxUrl:"/api/get-login-info",signOutAjaxUrl:"/api/sign-out",menu:[{icon:"ti-dashboard",text:"Dashboard",name:"dashboard",path:"/dashboard",params:{},component:v},{icon:"ti-alarm-clock",text:"One",name:"one",path:"/one",params:{},component:v},{icon:"ti-gallery",text:"Two",name:"two",path:"/two",params:{},component:v},{text:"Other options",name:"other-options",subs:[{icon:"ti-car",text:"Sub One",name:"sub-one",path:"/sub-one/:id?",params:{},component:v},{icon:"ti-truck",text:"Sub Two",name:"sub-two",path:"/sub-two/:id?",params:{},component:v}]},{text:"Secret options",name:"secret-options",path:"/secret-options",params:{},component:v,subs:[{icon:"ti-crown",text:"Sub Three",name:"sub-three",path:"/sub-three/:id?",params:{},component:v},{icon:"ti-heart",text:"Sub Four",name:"sub-four",path:"/sub-four/:id?",params:{},component:v}]}],mavonToolbars:{bold:!0,italic:!0,header:!0,ol:!0,ul:!0,link:!0,fullscreen:!0,undo:!0,redo:!0,preview:!0}};function h(t,e){var s;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(s=function(t,e){if(!t)return;if("string"===typeof t)return f(t,e);var s=Object.prototype.toString.call(t).slice(8,-1);"Object"===s&&t.constructor&&(s=t.constructor.name);if("Map"===s||"Set"===s)return Array.from(t);if("Arguments"===s||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))return f(t,e)}(t))||e&&t&&"number"===typeof t.length){s&&(t=s);var n=0,r=function(){};return{s:r,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,o=!1;return{s:function(){s=t[Symbol.iterator]()},n:function(){var t=s.next();return i=t.done,t},e:function(t){o=!0,a=t},f:function(){try{i||null==s.return||s.return()}finally{if(o)throw a}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var s=0,n=new Array(e);s<e;s++)n[s]=t[s];return n}var b={name:"Tutu",mixins:[i],data:function(){return{config:p}},watch:{$route:function(t,e){this.checkMenu(t.name)}},created:function(){this.checkMenu(this.$route.name)},methods:{checkMenu:function(t){var e,s=null,n=null,r=h(p.menu);try{for(r.s();!(e=r.n()).done;){var a=e.value;if(t==a.name){s=a;break}if(void 0!=a.subs&&null!=a.subs&&a.subs.length>0){var i,o=h(a.subs);try{for(o.s();!(i=o.n()).done;){var l=i.value;if(t==l.name){s=a,n=l;break}}}catch(u){o.e(u)}finally{o.f()}}if(null!=s||null!=n)break}}catch(u){r.e(u)}finally{r.f()}(null!=n||null!=s)&&this.selectMenuWithSubItems(s.name,!1)},getActiveMenuClass:function(t){var e=[];return void 0==t.subs||null==t.subs||0==t.subs.length?this.$route.name==t.name&&e.push("active"):null!=this.activeMenuWithSubItems&&this.activeMenuWithSubItems==t.name&&e.push("active"),e},signOut:function(){var t=this;p.devMode?(t.$store.commit("setUser",null),t.$router.push({path:p.signInUrl})):l.a.post(p.signOutAjaxUrl).then((function(e){t.$store.commit("setUser",null),t.$router.push({path:p.signInUrl})}))}}},g=(s(42),Object(m.a)(b,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",class:[{"sidebar-collapsed":t.isSidebarCollapsed},t.isSidebarEntire?"sidebar-entire":"sidebar-compressed"]},[s("keep-alive",[null!=t.$store.state.user?s("nav",{staticClass:"navbar navbar-expand navbar-light bg-light"},[s("div",{staticClass:"sidebar-nav-row"},[s("span",{staticClass:"sidebar-nav-icon sidebar-toggle",on:{click:function(e){return t.toggleSidebarVisibility()}}},[s("span",{staticClass:"hamburger"},[s("span"),t._v(" "),s("span"),t._v(" "),s("span")])]),t._v(" "),s("router-link",{staticClass:"navbar-brand",attrs:{to:{name:t.config.menu[0].name,params:t.config.menu[0].params}}},[t._v("TUTU")])],1),t._v(" "),s("ul",{staticClass:"navbar-nav ml-auto"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle",attrs:{href:"#",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.$store.state.user.login))]),t._v(" "),s("div",{staticClass:"dropdown-menu dropdown-menu-right"},[s("span",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Action")]),t._v(" "),s("span",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("Another action")]),t._v(" "),s("div",{staticClass:"dropdown-divider"}),t._v(" "),s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.signOut()}}},[t._v("Log out")])])])])]):t._e()]),t._v(" "),s("div",{staticClass:"content"},[s("keep-alive",[null!=t.$store.state.user?s("aside",{staticClass:"sidebar"},[s("div",{staticClass:"sidebar-header"},[s("div",{staticClass:"sidebar-nav-row"},[s("span",{staticClass:"sidebar-nav-icon"},[s("i",{staticClass:"ti-star"})]),t._v(" "),s("span",{staticClass:"sidebar-nav-text"},[t._v("Menu")])])]),t._v(" "),s("div",{staticClass:"sidebar-body vertical-scroll custom-scrollbar"},[s("nav",{staticClass:"sidebar-nav"},[t._l(t.config.menu,(function(e){return[s("div",{key:e.name,staticClass:"sidebar-nav-group",class:t.getActiveMenuClass(e)},[void 0!=e.path&&null!=e.path?s("router-link",{staticClass:"sidebar-nav-row sidebar-nav-item",attrs:{to:{name:e.name,params:e.params}}},[s("span",{staticClass:"sidebar-nav-icon"},[void 0==e.subs||null==e.subs||0==e.subs.length?s("i",{class:e.icon}):t._e(),t._v(" "),void 0!=e.subs&&null!=e.subs&&e.subs.length>0&&(null==t.activeMenuWithSubItems||t.activeMenuWithSubItems!=e.name)?s("i",{staticClass:"ti-angle-right"}):t._e(),t._v(" "),void 0!=e.subs&&null!=e.subs&&e.subs.length>0&&null!=t.activeMenuWithSubItems&&t.activeMenuWithSubItems==e.name?s("i",{staticClass:"ti-angle-down"}):t._e()]),t._v(" "),s("span",{staticClass:"sidebar-nav-text"},[t._v(t._s(e.text))])]):t._e(),t._v(" "),void 0==e.path||null==e.path?s("a",{staticClass:"sidebar-nav-row sidebar-nav-item",attrs:{href:"#"},on:{click:function(s){return t.selectMenuWithSubItems(e.name,!0)}}},[s("span",{staticClass:"sidebar-nav-icon"},[void 0==e.subs||null==e.subs||0==e.subs.length?s("i",{class:e.icon}):t._e(),t._v(" "),void 0!=e.subs&&null!=e.subs&&e.subs.length>0&&(null==t.activeMenuWithSubItems||t.activeMenuWithSubItems!=e.name)?s("i",{staticClass:"ti-angle-right"}):t._e(),t._v(" "),void 0!=e.subs&&null!=e.subs&&e.subs.length>0&&null!=t.activeMenuWithSubItems&&t.activeMenuWithSubItems==e.name?s("i",{staticClass:"ti-angle-down"}):t._e()]),t._v(" "),s("span",{staticClass:"sidebar-nav-text"},[t._v(t._s(e.text))])]):t._e(),t._v(" "),void 0!=e.subs&&null!=e.subs&&e.subs.length>0&&null!=t.activeMenuWithSubItems&&t.activeMenuWithSubItems==e.name?t._l(e.subs,(function(e){return s("router-link",{key:e.name,staticClass:"sidebar-nav-row sidebar-nav-item",class:[t.$route.name==e.name&&"active"],attrs:{to:{name:e.name,params:e.params}}},[s("span",{staticClass:"sidebar-nav-icon"},[s("i",{class:e.icon})]),t._v(" "),s("span",{staticClass:"sidebar-nav-text"},[t._v(t._s(e.text))])])})):t._e()],2)]}))],2)]),t._v(" "),s("div",{staticClass:"sidebar-footer"},[s("div",{staticClass:"sidebar-nav-row"},[s("span",{staticClass:"sidebar-nav-icon"},[s("i",{staticClass:"tutu-info"})]),t._v(" "),s("span",{staticClass:"sidebar-nav-text"},[t._v("footer")]),t._v(" "),s("button",{staticClass:"sidebar-nav-icon ml-auto visible-entire",on:{click:function(e){return t.toggleSidebarWidth()}}},[s("i",{staticClass:"ti-angle-double-left"})])]),t._v(" "),s("div",{staticClass:"sidebar-nav-row visible-compressed"},[s("button",{staticClass:"sidebar-nav-icon",on:{click:function(e){return t.toggleSidebarWidth()}}},[s("i",{staticClass:"ti-angle-double-right"})])])])]):t._e()]),t._v(" "),s("div",{staticClass:"frame",class:{"justify-content-center":null==t.$store.state.user}},[s("div",{staticClass:"container-fluid vertical-scroll",attrs:{id:"frame-scrollable"}},[s("router-view")],1)])],1)],1)}),[],!1,null,null,null).exports),w=s(21),_=s(22),x=s.n(_),C=s(9),y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],class:t.alertClass,attrs:{id:t.id,role:"alert"}},[t.closable?s("button",{staticClass:"close",attrs:{type:"button","aria-label":"Close"},on:{click:t.closeAlert}},[s("span",{attrs:{"aria-hidden":"true"}},[t._t("close",[t._v("\xd7")])],2)]):t._e(),t._v(" "),t._t("default"),t._v(" "),s("span",{domProps:{innerHTML:t._s(t.errorMessage)}})],2)};y._withStripped=!0;var S={mixins:[i],props:{id:{type:String,default:function(){return"alert-id-"+this._uid}},closable:{type:Boolean,default:!1},duration:{type:Number,default:0},type:{type:String,default:"danger"},className:{type:String,default:null},errors:{type:[Object,Array],required:!1,default:null}},data:function(){return{timeout:0}},computed:{alertClass:function(){return null!=this.className?this.className:"alert alert-".concat(this.type)},isVisible:function(){return null!=this.errorMessage||null!=this.$slots.default&&""!=this.$slots.default},errorMessage:function(){return this.getErrorHtml(this.errors)}},mounted:function(){this.duration>0&&(this.timeout=setTimeout(this.closeAlert,this.duration))},destroyed:function(){clearTimeout(this.timeout)},methods:{closeAlert:function(){clearTimeout(this.timeout),this.$emit("close")}}},I=Object(m.a)(S,y,[],!1,null,null,null);I.options.__file="src/components/alert.vue";var M={components:{alert:I.exports},data:function(){return{working:!1,x:{login:"",password:""},errors:[]}},validations:function(){var t={x:{login:{required:C.required},password:{required:C.required}}};return{x:t.x,validationGroup:["x"]}},mounted:function(){$(".form-gp input").on("focus",(function(){$(this).parent(".form-gp").addClass("focused")})),$(".form-gp input").on("focusout",(function(){0===$(this).val().length&&$(this).parent(".form-gp").removeClass("focused")}))},route:{canReuse:!1},methods:{signIn:function(){var t=this;t.$v.$touch(),t.$v.x.$invalid||(t.$v.x.$reset(),t.working=!0,t.errors=[],p.devMode?t.x.login===t.x.password?(t.$store.commit("setUser",{login:t.x.login}),null!=t.$store.state.user&&t.$router.push({name:p.menu[0].name,params:p.menu[0].params})):t.errors={message:"",errors:[{field:null,message:"Invalid login or password."}]}:l.a.post(p.signInAjaxUrl,t.x).then((function(e){t.working=!1,t.$store.commit("setUser",e.data),null!=t.$store.state.user&&t.$router.push({name:p.menu[0].name,params:p.menu[0].params})})).catch((function(e){t.working=!1;try{t.errors=e.response.data}catch(s){console.log("ERROR",s)}})))}}},k=Object(m.a)(M,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card mx-auto w-max-5"},[s("div",{staticClass:"card-header"},[t._v("Signing in")]),t._v(" "),s("div",{staticClass:"card-body"},[s("alert",{attrs:{errors:t.errors}}),t._v(" "),s("form",{attrs:{method:"post",novalidate:""},on:{submit:function(e){return e.preventDefault(),t.signIn()}}},[s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.x.login,expression:"x.login"}],staticClass:"form-control",attrs:{type:"text",required:""},domProps:{value:t.x.login},on:{input:function(e){e.target.composing||t.$set(t.x,"login",e.target.value)}}}),t._v(" "),s("span",{staticClass:"floating-label"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.$v.x.login.$error,expression:"!$v.x.login.$error"}]},[t._v("Login")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.$v.x.login.$error&&!t.$v.x.login.required,expression:"$v.x.login.$error && !$v.x.login.required"}],staticClass:"error"},[t._v("Login is required.")])])]),t._v(" "),s("div",{staticClass:"form-group"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.x.password,expression:"x.password"}],staticClass:"form-control",attrs:{type:"password",required:""},domProps:{value:t.x.password},on:{input:function(e){e.target.composing||t.$set(t.x,"password",e.target.value)}}}),t._v(" "),s("span",{staticClass:"floating-label"},[s("span",{directives:[{name:"show",rawName:"v-show",value:!t.$v.x.password.$error,expression:"!$v.x.password.$error"}]},[t._v("Password")]),t._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:t.$v.x.password.$error&&!t.$v.x.password.required,expression:"$v.x.password.$error && !$v.x.password.required"}],staticClass:"error"},[t._v("Password is required.")])])]),t._v(" "),t._m(0)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"form-group text-center"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"submit"}},[e("span",{staticClass:"ti-user"}),this._v(" Sign in")])])}],!1,null,null,null).exports,A=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"alert alert-danger text-center"},[this._v("\r\n    PAGE NOT FOUND.\r\n")])};A._withStripped=!0;var O={},U=Object(m.a)(O,A,[],!1,null,null,null);U.options.__file="app.src/core/not-found.vue";var j=U.exports;$=window.jQuery=window.$=s(11),n.a.use(x.a),n.a.use(a.a);var W=new n.a,E=new a.a.Store({state:{user:null,working:!1,bus:W},mutations:{setUser:function(t,e){t.user=e},work:function(t){t.working=!0},picnic:function(t){t.working=!1}}});n.a.use(r.a);for(var T=[{path:p.signInUrl,component:k}],q=0;q<p.menu.length;q++){var N=p.menu[q];if(void 0!=N.path&&void 0!=N.component&&T.push({name:N.name,path:N.path,component:N.component,meta:{requiresAuth:!0},params:N.params}),void 0!=N.subs&&null!=N.subs&&N.subs.length>0)for(var P=0;P<N.subs.length;P++){var V=N.subs[P];T.push({name:V.name,path:V.path,component:V.component,meta:{requiresAuth:!0},params:V.params})}}T.push({path:"/",redirect:{name:p.menu[0].name,params:p.menu[0].params}}),T.push({path:"*",component:j});var R=new r.a({routes:T,linkActiveClass:"active"});R.beforeEach((function(t,e,s){t.matched.some((function(t){return t.meta.requiresAuth}))?p.devMode?(null==E.state.user&&E.commit("setUser",{login:"foo"}),s()):l.a.get(p.getLoginInfoAjaxUrl+"?_="+(new Date).getTime()).then((function(t){E.commit("setUser",t.data),E.commit("picnic"),null==E.state.user&&s({path:p.signInUrl}),s()})).catch((function(t){E.commit("setUser",null),E.commit("picnic"),console.log("ERROR",t),s({path:p.signInUrl})})):s()})),new n.a({router:R,store:E,render:function(t){return t(g)}}).$mount("#app"),Object(w.sync)(E,R)}},[[23,2,0]]]);