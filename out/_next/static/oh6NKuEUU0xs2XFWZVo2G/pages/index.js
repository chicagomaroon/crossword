(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{238:function(e,t,n){__NEXT_REGISTER_PAGE("/",function(){return e.exports=n(258),{page:e.exports.default}})},258:function(e,t,n){"use strict";n.r(t);var r=n(33),o=n.n(r),i=n(44),a=n.n(i),c=n(0),u=n.n(c),s=n(1);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=s.d.div.withConfig({displayName:"CrosswordPreview__Container",componentId:"sc-1s7c5jn-0"})(["overflow:hidden;border:1px solid ",";display:flex;flex-direction:column;height:100%;"],function(e){return e.theme.colors.brightness_80}),b=s.d.div.withConfig({displayName:"CrosswordPreview__Body",componentId:"sc-1s7c5jn-1"})(["text-align:center;"]),w=s.d.div.withConfig({displayName:"CrosswordPreview__HeaderContainer",componentId:"sc-1s7c5jn-2"})(["padding:0 1rem 0 1rem;flex-grow:0;a{text-decoration:none;}a:hover{text-decoration:underline;}"]),h=s.d.h2.withConfig({displayName:"CrosswordPreview__Header",componentId:"sc-1s7c5jn-3"})(["font-size:1.5rem;"]),v=s.d.p.withConfig({displayName:"CrosswordPreview__Timestamp",componentId:"sc-1s7c5jn-4"})(["color:",";font-size:1rem;margin-bottom:-1rem;"],function(e){return e.theme.colors.primary}),_=(s.d.p.withConfig({displayName:"CrosswordPreview__Byline",componentId:"sc-1s7c5jn-5"})(["color:",";font-size:0.9rem;padding:0 1rem 0 1rem;"],function(e){return e.theme.colors.brightness_50}),function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),p(this,d(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){return u.a.createElement(y,null,u.a.createElement(b,null,u.a.createElement(w,null,u.a.createElement(v,null,this.props.date),u.a.createElement(a.a,{as:"/crossword/".concat(this.props.index),href:"/crossword?id=".concat(this.props.index)},u.a.createElement("a",null,u.a.createElement(h,null,this.props.name))))))}}])&&f(n.prototype,r),o&&f(n,o),t}()),g=n(6);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function C(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var P=s.d.div.withConfig({displayName:"CrosswordListGrid__Container",componentId:"sc-1n2wd8c-0"})([""]),S=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),C(this,x(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(t,u.a.Component),n=t,(r=[{key:"render",value:function(){var e=this.props.crosswords.map(function(e){return u.a.createElement(g.a,{sm:6,md:4,lg:3,key:e.index},u.a.createElement(_,{name:e.name,date:e.date,index:e.index}))});return u.a.createElement(P,null,u.a.createElement(g.b,{fluid:!0},u.a.createElement(g.c,null,e)))}}])&&j(n.prototype,r),o&&j(n,o),t}(),I=n(55),N=n(56),k=n(15),T=n(57);function z(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o)}function R(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var i=e.apply(t,n);function a(e){z(i,r,o,a,c,"next",e)}function c(e){z(i,r,o,a,c,"throw",e)}a(void 0)})}}var G=s.d.div.withConfig({displayName:"pages__Content",componentId:"sc-1zjpqv-0"})(["padding-top:4rem;"]),B=function(e){return u.a.createElement(u.a.Fragment,null,u.a.createElement(N.a,null),u.a.createElement(G,null,u.a.createElement(k.b,null,u.a.createElement(g.b,{fluid:!0},u.a.createElement(g.c,null,u.a.createElement(g.a,{xs:12},u.a.createElement(S,{crosswords:e.crosswords})))))),u.a.createElement(I.a,null))};B.getInitialProps=R(o.a.mark(function e(){var t;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.e(2).then(n.t.bind(null,257,3));case 2:return t=e.sent,e.abrupt("return",{crosswords:(r=t.default,r.map(function(e,t){var n=e.trim(),r=n.substring(0,n.length-5).split(" "),o=r[0];return{name:r.splice(1,r.length-1).join(" "),date:o,index:t}}))});case 4:case"end":return e.stop()}var r},e,this)})),B.componentWillMount=function(){Object(T.a)("/crosswords")};t.default=B}},[[238,1,0]]]);