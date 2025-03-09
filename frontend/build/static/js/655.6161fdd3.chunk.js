/*! For license information please see 655.6161fdd3.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunksdk_structure_app=self.webpackChunksdk_structure_app||[]).push([[655],{3806:(t,r,e)=>{e.d(r,{A:()=>f});var o=e(8168),n=e(2284);function c(t){return t&&"object"===(0,n.A)(t)&&t.constructor===Object}function f(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{clone:!0},n=e.clone?(0,o.A)({},t):t;return c(t)&&c(r)&&Object.keys(r).forEach((function(o){"__proto__"!==o&&(c(r[o])&&o in t?n[o]=f(t[o],r[o],e):n[o]=r[o])})),n}},3024:(t,r,e)=>{function o(t){var r,e,n="";if("string"==typeof t||"number"==typeof t)n+=t;else if("object"==typeof t)if(Array.isArray(t))for(r=0;r<t.length;r++)t[r]&&(e=o(t[r]))&&(n&&(n+=" "),n+=e);else for(r in t)t[r]&&(n&&(n+=" "),n+=r);return n}function n(){for(var t,r,e=0,n="";e<arguments.length;)(t=arguments[e++])&&(r=o(t))&&(n&&(n+=" "),n+=r);return n}e.r(r),e.d(r,{clsx:()=>n,default:()=>c});const c=n},219:(t,r,e)=>{var o=e(3763),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},c={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},f={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},i={};function u(t){return o.isMemo(t)?f:i[t.$$typeof]||n}i[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},i[o.Memo]=f;var a=Object.defineProperty,s=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,l=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,m=Object.prototype;t.exports=function t(r,e,o){if("string"!==typeof e){if(m){var n=p(e);n&&n!==m&&t(r,n,o)}var f=s(e);y&&(f=f.concat(y(e)));for(var i=u(r),b=u(e),d=0;d<f.length;++d){var v=f[d];if(!c[v]&&(!o||!o[v])&&(!b||!b[v])&&(!i||!i[v])){var S=l(e,v);try{a(r,v,S)}catch(g){}}}}return r}},4983:(t,r)=>{var e="function"===typeof Symbol&&Symbol.for,o=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,c=e?Symbol.for("react.fragment"):60107,f=e?Symbol.for("react.strict_mode"):60108,i=e?Symbol.for("react.profiler"):60114,u=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,y=e?Symbol.for("react.concurrent_mode"):60111,l=e?Symbol.for("react.forward_ref"):60112,p=e?Symbol.for("react.suspense"):60113,m=e?Symbol.for("react.suspense_list"):60120,b=e?Symbol.for("react.memo"):60115,d=e?Symbol.for("react.lazy"):60116,v=e?Symbol.for("react.block"):60121,S=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,$=e?Symbol.for("react.scope"):60119;function A(t){if("object"===typeof t&&null!==t){var r=t.$$typeof;switch(r){case o:switch(t=t.type){case s:case y:case c:case i:case f:case p:return t;default:switch(t=t&&t.$$typeof){case a:case l:case d:case b:case u:return t;default:return r}}case n:return r}}}function O(t){return A(t)===y}r.AsyncMode=s,r.ConcurrentMode=y,r.ContextConsumer=a,r.ContextProvider=u,r.Element=o,r.ForwardRef=l,r.Fragment=c,r.Lazy=d,r.Memo=b,r.Portal=n,r.Profiler=i,r.StrictMode=f,r.Suspense=p,r.isAsyncMode=function(t){return O(t)||A(t)===s},r.isConcurrentMode=O,r.isContextConsumer=function(t){return A(t)===a},r.isContextProvider=function(t){return A(t)===u},r.isElement=function(t){return"object"===typeof t&&null!==t&&t.$$typeof===o},r.isForwardRef=function(t){return A(t)===l},r.isFragment=function(t){return A(t)===c},r.isLazy=function(t){return A(t)===d},r.isMemo=function(t){return A(t)===b},r.isPortal=function(t){return A(t)===n},r.isProfiler=function(t){return A(t)===i},r.isStrictMode=function(t){return A(t)===f},r.isSuspense=function(t){return A(t)===p},r.isValidElementType=function(t){return"string"===typeof t||"function"===typeof t||t===c||t===y||t===i||t===f||t===p||t===m||"object"===typeof t&&null!==t&&(t.$$typeof===d||t.$$typeof===b||t.$$typeof===u||t.$$typeof===a||t.$$typeof===l||t.$$typeof===S||t.$$typeof===g||t.$$typeof===$||t.$$typeof===v)},r.typeOf=A},3763:(t,r,e)=>{t.exports=e(4983)},3145:(t,r,e)=>{function o(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,o=Array(r);e<r;e++)o[e]=t[e];return o}e.d(r,{A:()=>o})},8168:(t,r,e)=>{function o(){return o=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var o in e)({}).hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},o.apply(null,arguments)}e.d(r,{A:()=>o})},7387:(t,r,e)=>{e.d(r,{A:()=>n});var o=e(3662);function n(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,(0,o.A)(t,r)}},45:(t,r,e)=>{e.d(r,{A:()=>n});var o=e(8587);function n(t,r){if(null==t)return{};var e,n,c=(0,o.A)(t,r);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(t);for(n=0;n<f.length;n++)e=f[n],r.includes(e)||{}.propertyIsEnumerable.call(t,e)&&(c[e]=t[e])}return c}},8587:(t,r,e)=>{function o(t,r){if(null==t)return{};var e={};for(var o in t)if({}.hasOwnProperty.call(t,o)){if(r.includes(o))continue;e[o]=t[o]}return e}e.d(r,{A:()=>o})},3662:(t,r,e)=>{function o(t,r){return o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,r){return t.__proto__=r,t},o(t,r)}e.d(r,{A:()=>o})},816:(t,r,e)=>{e.d(r,{A:()=>n});var o=e(2284);function n(t){var r=function(t,r){if("object"!=(0,o.A)(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,r||"default");if("object"!=(0,o.A)(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==(0,o.A)(r)?r:r+""}},2284:(t,r,e)=>{function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}e.d(r,{A:()=>o})},7800:(t,r,e)=>{e.d(r,{A:()=>n});var o=e(3145);function n(t,r){if(t){if("string"==typeof t)return(0,o.A)(t,r);var e={}.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?(0,o.A)(t,r):void 0}}}}]);
//# sourceMappingURL=655.6161fdd3.chunk.js.map