(function(e){function t(t){for(var r,o,a=t[0],u=t[1],c=t[2],l=0,d=[];l<a.length;l++)o=a[l],i[o]&&d.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(s.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},i={app:0},s=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-4022ca92":"e009c622","chunk-607bfb62":"5dcc93c1"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-4022ca92":1,"chunk-607bfb62":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise(function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-4022ca92":"ad5167a0","chunk-607bfb62":"620691f2"}[e]+".css",i=u.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var c=s[a],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return t()}var d=document.getElementsByTagName("style");for(a=0;a<d.length;a++){c=d[a],l=c.getAttribute("data-href");if(l===r||l===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.request=r,delete o[e],f.parentNode.removeChild(f),n(s)},f.href=i;var g=document.getElementsByTagName("head")[0];g.appendChild(f)}).then(function(){o[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise(function(t,n){r=i[e]=[t,n]});t.push(r[2]=s);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=a(e),c=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");s.type=r,s.request=o,n[1](s)}i[e]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"dialogShowing",function(){return m}),n.d(r,"user",function(){return h}),n.d(r,"userName",function(){return w}),n.d(r,"email",function(){return b}),n.d(r,"phone",function(){return y}),n.d(r,"password",function(){return _}),n.d(r,"createdAt",function(){return S});var o={};n.r(o),n.d(o,"dialogShowing",function(){return k}),n.d(o,"user",function(){return L}),n.d(o,"userName",function(){return C}),n.d(o,"email",function(){return $}),n.d(o,"phone",function(){return j}),n.d(o,"password",function(){return A}),n.d(o,"createdAt",function(){return x});var i={};n.r(i),n.d(i,"signUp",function(){return P});var s={};n.r(s),n.d(s,"dialogShowing",function(){return T}),n.d(s,"user",function(){return D}),n.d(s,"email",function(){return E}),n.d(s,"password",function(){return U});var a={};n.r(a),n.d(a,"dialogShowing",function(){return M}),n.d(a,"user",function(){return q}),n.d(a,"email",function(){return B}),n.d(a,"password",function(){return H});var u={};n.r(u),n.d(u,"login",function(){return J});var c={};n.r(c),n.d(c,"users",function(){return F});var l={};n.r(l),n.d(l,"addUser",function(){return G});var d={};n.r(d),n.d(d,"addUser",function(){return I}),n.d(d,"login",function(){return K});var f=n("2b0e"),g=n("8c4f");const p=[{path:"*",redirect:"/"},{path:"/",name:"root",component:()=>n.e("chunk-607bfb62").then(n.bind(null,"aed6"))},{path:"/onlineshopping",name:"onlineshopping",component:()=>n.e("chunk-4022ca92").then(n.bind(null,"7a43")),meta:{requiresAuth:!0}}];var v=n("2f62");const m=e=>e.dialogShowing,h=e=>e.user,w=e=>e.user.userName,b=e=>e.user.email,y=e=>e.user.phone,_=e=>e.user.password,S=e=>e.user.createdAt;function k(e,t){e.dialogShowing=t}function L(e,t){e.user=t}function C(e,t){e.user.userName=t}function $(e,t){e.user.email=t}function j(e,t){e.user.phone=t}function A(e,t){e.user.password=t}function x(e,t){e.user.createdAt=t}const P=({getters:e,dispatch:t})=>{let n={...e.user};return n.createdAt=(new Date).toLocaleDateString(),t("users/addUser",n,{root:!0})},N={dialogShowing:!1,user:{userName:"",email:"",phone:"",password:"",createdAt:""}};var O={namespaced:!0,state:N,getters:r,mutations:o,actions:i};const T=e=>e.dialogShowing,D=e=>e.user,E=e=>e.user.email,U=e=>e.user.password;function M(e,t){e.dialogShowing=t}function q(e,t){e.user=t}function B(e,t){e.user.email=t}function H(e,t){e.user.password=t}const J=({getters:e,dispatch:t})=>{return t("users/login",{...e.user},{root:!0})},R={dialogShowing:!1,user:{email:"",password:""}};var z={namespaced:!0,state:R,getters:s,mutations:a,actions:u};const F=e=>e.users;function G(e,t){e.users.push(t)}const I=({getters:e,commit:t},n)=>{return new Promise(r=>{setTimeout(()=>{let o=e.users.find(e=>{return e.email==n.email});o?r(!1):(n["id"]=Math.floor(2e16*Math.random()),t("addUser",n),r(n))},1500)})},K=({getters:e},t)=>{return new Promise(n=>{setTimeout(()=>{let r=e.users.find(e=>{return e.email==t.email&&e.password==t.password});n(r||!1)},1500)})},Q={users:[]};var V={namespaced:!0,state:Q,getters:c,mutations:l,actions:d};f["default"].use(v["a"]);const W={loading:!1,message:{type:"",text:""},userLogged:null},X={loading:e=>e.loading,message:e=>e.message,userLogged:e=>e.userLogged},Y={loading(e,t){e.loading=t},message(e,t){e.message=t},userLogged(e,t){e.userLogged=t}};var Z=new v["a"].Store({state:W,getters:X,mutations:Y,modules:{signup:O,login:z,users:V}}),ee=n("ce5b"),te=n.n(ee);n("bf40");f["default"].use(te.a,{iconfont:"fa",theme:{primary:"#b803ff",secondary:"#636363"}});n("d5e8"),n("d1e7");var ne=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("header",[n("Header",{attrs:{user:this.$store.getters.userLogged},on:{onSignup:function(t){return e.showSignupDialog()},onLogin:function(t){return e.showLoginDialog()},onLogoff:function(t){return e.logoff()},onScroll:function(t){return e.scroll()}}})],1),n("main",[n("v-content",[n("router-view")],1)],1)])},re=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-toolbar",{staticClass:"header",attrs:{dark:"",color:"primary","clipped-left":""}},[n("v-toolbar-side-icon",{staticClass:"hidden-md-and-up",on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),n("v-toolbar-title",{staticClass:"white--text font-weight-light display-1 condensed"},[e._v("\n      Look After™\n    ")]),n("v-spacer"),n("v-layout",{staticClass:"hidden-sm-and-down",attrs:{column:"","align-end":"","fill-height":""}},[e.user?n("v-layout",[n("v-layout",{attrs:{column:"","justify-center":""}},[n("span",{staticClass:"caption mx-3"},[e._v(" User: "+e._s(e.user.userName))]),n("span",{staticClass:"caption mx-3"},[e._v(" Registered at: "+e._s(e.user.createdAt))])]),n("v-divider",{attrs:{vertical:"",dark:""}}),n("v-layout",{attrs:{column:"","justify-center":"","fill-height":""}},[n("v-toolbar-items",{staticClass:"mr-0"},[n("v-btn",{attrs:{flat:""},on:{click:function(t){return e.$emit("onLogoff")}}},[n("v-icon",[e._v("close")]),e._v(" Log off")],1)],1)],1)],1):n("v-toolbar-items",[n("v-btn",{attrs:{flat:""},on:{click:function(t){return e.$emit("onLogin")}}},[e._v(" Login  ")]),n("v-btn",{attrs:{flat:""},on:{click:function(t){return e.$emit("onSignup")}}},[e._v("Create User")]),n("v-btn",{attrs:{flat:""},on:{click:function(t){return e.$emit("onScroll")}}},[e._v("Contact Us")])],1)],1)],1),n("v-navigation-drawer",{staticClass:"drawer",attrs:{temporary:"",absolute:"",width:"200"},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[e.user?n("v-layout",{staticClass:"py-3",attrs:{column:"","justify-center":"","align-center":""}},[n("v-icon",{attrs:{large:""}},[e._v("person_pin")]),n("h3",[e._v(e._s(e.user.userName))])],1):e._e(),n("v-divider"),e.user?n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-list-tile",{on:{click:function(t){e.$emit("onLogoff"),e.drawer=!1}}},[n("v-list-tile-action",[n("v-icon",[e._v("close")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Log off")])],1)],1)],1):n("v-list",{staticClass:"pt-0",attrs:{dense:""}},[n("v-list-tile",{on:{click:function(t){e.$emit("onLogin"),e.drawer=!1}}},[n("v-list-tile-action",[n("v-icon",[e._v("person")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Login")])],1)],1),n("v-list-tile",{on:{click:function(t){e.$emit("onSignup"),e.drawer=!1}}},[n("v-list-tile-action",[n("v-icon",[e._v("add")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Create user")])],1)],1),n("v-list-tile",{on:{click:function(t){e.$emit("onScroll"),e.drawer=!1}}},[n("v-list-tile-action",[n("v-icon",[e._v("phone")])],1),n("v-list-tile-content",[n("v-list-tile-title",[e._v("Contact us")])],1)],1)],1)],1)],1)},ie=[],se={props:["user"],data(){return{drawer:null}}},ae=se,ue=n("2877"),ce=Object(ue["a"])(ae,oe,ie,!1,null,"2cd60231",null),le=ce.exports,de={name:"App",components:{Header:le},methods:{closeDialogs(){this.$store.commit("login/dialogShowing",!1),this.$store.commit("signup/dialogShowing",!1)},showSignupDialog(){this.closeDialogs(),this.$store.commit("signup/dialogShowing",!0)},showLoginDialog(){this.closeDialogs(),this.$store.commit("login/dialogShowing",!0)},scroll(){this.closeDialogs(),this.$vuetify.goTo("#contact")},logoff(){this.$store.commit("userLogged",null),this.$router.push("/")}}},fe=de,ge=(n("5c0b"),Object(ue["a"])(fe,ne,re,!1,null,null,null)),pe=ge.exports;n.d(t,"router",function(){return ve}),f["default"].use(g["a"]);const ve=new g["a"]({routes:p});f["default"].config.productionTip=!1,new f["default"]({router:ve,store:Z,render:function(e){return e(pe)}}).$mount("#app"),ve.beforeResolve((e,t,n)=>{const r=e.matched.some(e=>e.meta.requiresAuth),o=Z.getters.userLogged;r&&!o?n("root"):n()})},"5c0b":function(e,t,n){"use strict";var r=n("5e27"),o=n.n(r);o.a},"5e27":function(e,t,n){}});
//# sourceMappingURL=app.7dae20cb.js.map