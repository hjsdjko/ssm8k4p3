(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{4524:function(n,t,e){},4574:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var a=function(){var n=this,t=n.$createElement;n._self._c},i=[]},6043:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(e("a34a")),a=i(e("374e"));function i(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,o,a,i,r){try{var u=n[i](r),s=u.value}catch(c){return void e(c)}u.done?t(s):Promise.resolve(s).then(o,a)}function u(n){return function(){var t=this,e=arguments;return new Promise((function(o,a){var i=n.apply(t,e);function u(n){r(i,o,a,u,s,"next",n)}function s(n){r(i,o,a,u,s,"throw",n)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0}},onLoad:function(){var n=["请选择登录用户类型"],t=a.default.list();this.menuList=t;for(var e=0;e<this.menuList.length;e++)"是"==this.menuList[e].hasFrontLogin&&n.push(this.menuList[e].roleName);this.options=n,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){n.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=this;return u(o.default.mark((function e(){var a;return o.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.optionsValues[t.index]){e.next=3;break}return t.$utils.msg("请选择登陆用户类型"),e.abrupt("return");case 3:return e.next=5,t.$api.login("".concat(t.optionsValues[t.index]),{username:t.username,password:t.password});case 5:return a=e.sent,n.setStorageSync("token",a.token),n.setStorageSync("nickname",t.username),n.setStorageSync("nowTable","".concat(t.optionsValues[t.index])),e.next=11,t.$api.session("".concat(t.optionsValues[t.index]));case 11:a=e.sent,n.setStorageSync("userid",a.data.id),n.setStorageSync("role","".concat(t.options[t.index])),t.$utils.tab("../index/index");case 15:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value}}};t.default=s}).call(this,e("543d")["default"])},"85f9":function(n,t,e){"use strict";(function(n){e("26ca");o(e("66fd"));var t=o(e("ff04"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},afe0:function(n,t,e){"use strict";var o=e("4524"),a=e.n(o);a.a},da32:function(n,t,e){"use strict";e.r(t);var o=e("6043"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=a.a},ff04:function(n,t,e){"use strict";e.r(t);var o=e("4574"),a=e("da32");for(var i in a)"default"!==i&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("afe0");var r,u=e("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"43c0f202",null,!1,o["a"],r);t["default"]=s.exports}},[["85f9","common/runtime","common/vendor"]]]);