(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/news-detail/news-detail"],{"73c7":function(t,e,n){"use strict";n.r(e);var r=n("e23b"),a=n("9ee1");for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);n("e314");var i,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"3b1ac260",null,!1,r["a"],i);e["default"]=o.exports},"91ad":function(t,e,n){"use strict";(function(t){n("26ca");r(n("66fd"));var e=r(n("73c7"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},"9ee1":function(t,e,n){"use strict";n.r(e);var r=n("deb4"),a=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=a.a},cf87:function(t,e,n){},deb4:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=a(n("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function u(t,e,n,r,a,u,i){try{var c=t[u](i),o=c.value}catch(f){return void n(f)}c.done?e(o):Promise.resolve(o).then(r,a)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function c(t){u(i,r,a,c,o,"next",t)}function o(t){u(i,r,a,c,o,"throw",t)}c(void 0)}))}}var c={data:function(){return{detail:{},id:""}},onLoad:function(t){var e=this;return i(r.default.mark((function n(){var a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.id=t.id,n.next=3,e.$api.info("news",t.id);case 3:a=n.sent,e.detail=a.data,e.detail.content=e.detail.content.replace(/<img/g,'<img style="width: 100%;"');case 6:case"end":return n.stop()}}),n)})))()}};e.default=c},e23b:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},u=[]},e314:function(t,e,n){"use strict";var r=n("cf87"),a=n.n(r);a.a}},[["91ad","common/runtime","common/vendor"]]]);