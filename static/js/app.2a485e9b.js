(function(t){function e(e){for(var n,s,i=e[0],c=e[1],u=e[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var c=r[i];0!==o[c]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=c;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"56d7":function(t,e,r){"use strict";r.r(e);var n=r("2b0e"),o=r("8c4f"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("b-container",[r("b-row",{staticClass:"mt-2",attrs:{"align-h":"center"}},[r("b-col",{attrs:{sm:"4",order:t.order_component_1}},[r("MainCard",{attrs:{body_text:t.text_1,"is-primary":!0}})],1),r("b-col",{attrs:{sm:"4"}},[r("MainCard",{attrs:{body_text:t.text_2}})],1)],1),r("b-row",{staticClass:"mt-3",attrs:{"align-h":"center"}},[r("b-col",{attrs:{sm:"1"}},[r("b-button",{attrs:{variant:"success"},on:{click:t.swap}},[t._v("Swap!")])],1)],1)],1)],1)},s=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("b-card",{class:t.style},[r("b-card-body",[r("p",[t._v(t._s(t.body_text))])])],1)],1)},c=[],u={name:"MainCard",props:["body_text","isPrimary"],computed:{style:function(){return this.isPrimary?"bg-primary text-white":"bg-warning"}}},l=u,p=r("2877"),d=Object(p["a"])(l,i,c,!1,null,"11ecec4a",null),f=d.exports,b={name:"IndexPage",components:{MainCard:f},data:()=>({text_1:"First component",text_2:"Second component",order_component_1:0}),methods:{swap(){this.order_component_1=1===this.order_component_1?0:1}}},m=b,v=Object(p["a"])(m,a,s,!1,null,"ca715876",null),y=v.exports;const _=[{path:"/",component:y,name:"indexPage",meta:{}}];var h=_,w=r("2f62");n["default"].use(w["a"]);const x=new w["a"].Store({state:{},mutations:{}});var g=x,O=r("5f5b");r("f9e3"),r("2dd8");n["default"].use(O["a"]);const j=r("bc3a");var P=j.create({baseURL:"/api"}),M=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},S=[],C={name:"App"},k=C,$=Object(p["a"])(k,M,S,!1,null,null,null),E=$.exports;n["default"].use(o["a"]),n["default"].config.productionTip=!1,n["default"].prototype.$api=P;const T=new o["a"]({routes:h,mode:"history",scrollBehavior:()=>({y:0})});new n["default"]({el:"#app",router:T,store:g,render:t=>t(E)})}});