(function(e){function t(t){for(var n,o,i=t[0],l=t[1],u=t[2],p=0,m=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(m.length)m.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var e,t=0;t<a.length;t++){for(var s=a[t],n=!0,i=1;i<s.length;i++){var l=s[i];0!==r[l]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},r={app:0},a=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=l;a.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"1aba":function(e,t,s){},"1f43":function(e,t,s){"use strict";var n=s("45bf"),r=s.n(n);r.a},"45bf":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);var n=s("5f5b"),r=s("8c4f"),a=s("2b0e"),o=(s("f9e3"),s("2dd8"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"main"}},[s("navigaton"),s("b-container",[s("b-row",{attrs:{"align-h":"center","align-v":"end"}},[s("b-col",{ref:"messageDisplay",staticClass:"messageCol messageDisplay",attrs:{sm:"8"}},[e.username?e._e():s("b-row",[s("b-col",{staticClass:"text-center"},[s("strong",[e._v("Enter your name please")])])],1),e._l(e.msgHistory,(function(t,n){return s("b-row",{key:n},[s("b-col",{staticClass:"mt-1"},[t.name?s("user-message",{attrs:{text:t.text,date:t.created,username:t.name===e.username?"You":t.name}}):s("system-message",{attrs:{text:t.text,date:t.created}})],1)],1)}))],2)],1),s("b-row",{staticClass:"fixed-bottom",attrs:{"align-h":"center"}},[s("b-col",{attrs:{sm:"6"}},[s("b-input-group",[s("b-form-input",{ref:"msgInput",attrs:{placeholder:e.username?"Enter your message":"Enter your name"},model:{value:e.msgInput,callback:function(t){e.msgInput=t},expression:"msgInput"}}),s("b-input-group-append",[s("b-button",{attrs:{variant:"primary"},on:{click:e.send_msg}},[e._v(e._s(e.username?"Send":"Join"))])],1)],1)],1)],1)],1)],1)}),i=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"main"}},[s("b-row",{staticStyle:{"font-size":"14px"}},[s("b-col",[s("em",[e._v(e._s(e.text))]),s("em",{staticStyle:{"font-size":"10px"}},[e._v(" "+e._s(new Date(e.date).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}))+" ")])])],1)],1)},u=[],c={name:"SystemMessage",props:["text","date"]},p=c,m=s("2877"),f=Object(m["a"])(p,l,u,!1,null,"3af4e553",null),d=f.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"main"}},[s("b-row",[s("b-col",[s("strong",{staticStyle:{"font-size":"16px"}},[e._v(e._s(e.username)+": ")]),s("span",{staticStyle:{"font-size":"15px"}},[e._v(e._s(e.text))]),s("em",{staticStyle:{"font-size":"10px"}},[e._v(" "+e._s(new Date(e.date).toLocaleTimeString("en-GB",{hour:"2-digit",minute:"2-digit"}))+" ")])])],1)],1)},g=[],v={name:"UserMessage",props:["text","date","username"]},h=v,y=Object(m["a"])(h,b,g,!1,null,"6eeb3955",null),_=y.exports,w=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"nav"}},[s("b-container",{attrs:{fluid:""}},[s("b-row",{staticClass:"navbar-row",attrs:{"align-v":"center"}},[s("b-col",{attrs:{sm:"8"}},[s("h4",[s("span",{staticClass:"navbar-row-logo"},[e._v("Chat")])])])],1)],1)],1)},x=[],k={name:"Navigaton"},O=k,S=(s("b132"),Object(m["a"])(O,w,x,!1,null,"4518f5a9",null)),j=S.exports,I={name:"IndexView",components:{Navigaton:j,UserMessage:_,SystemMessage:d},data:()=>({msgHistory:[],msgInput:"",username:null,socket:null}),methods:{init_sock(){window.addEventListener("keypress",this.keypressHold),this.$refs.msgInput.$el.focus(),this.socket=new WebSocket("ws://pm.tada.team/ws?name="+this.username),this.socket.onmessage=e=>{this.msgHistory.push(JSON.parse(e.data))}},send_msg(){this.username?(this.socket.send(JSON.stringify({text:this.msgInput,created:new Date})),this.$refs.msgInput.$el.focus()):(this.username=this.msgInput,this.init_sock()),this.msgInput=""},scroll_to_bottom(){let e=this.$refs.messageDisplay;e.scrollTop=e.scrollHeight},keypressHold(e){"Enter"===e.code&&this.send_msg()}},watch:{msgHistory:function(){setInterval(this.scroll_to_bottom,1e3)}},destroyed(){window.removeEventListener("keypress",this.keypressHold)}},E=I,$=(s("1f43"),Object(m["a"])(E,o,i,!1,null,"5c50dfd2",null)),C=$.exports;const H=[{path:"/",component:C,name:"indexPage",meta:{}}];var M=H,P=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"home"},[s("router-view")],1)},D=[],z={},J=z,T=(s("5c0b"),Object(m["a"])(J,P,D,!1,null,null,null)),L=T.exports;a["default"].use(n["a"]),a["default"].use(r["a"]),a["default"].prototype.$axios=s("bc3a");const N=new r["a"]({routes:M,mode:"history",scrollBehavior:()=>({y:0})});new a["default"]({el:"#app",router:N,render:e=>e(L)})},"5c0b":function(e,t,s){"use strict";var n=s("9c0c"),r=s.n(n);r.a},"9c0c":function(e,t,s){},b132:function(e,t,s){"use strict";var n=s("1aba"),r=s.n(n);r.a}});