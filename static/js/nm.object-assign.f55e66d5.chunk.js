/*! For license information please see nm.object-assign.f55e66d5.chunk.js.LICENSE */
(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{86:function(r,t,e){"use strict";var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function i(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var t={},e=0;e<10;e++)t["_"+String.fromCharCode(e)]=e;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(r){return t[r]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(r){n[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(o){return!1}}()?Object.assign:function(r,t){for(var e,a,s=i(r),p=1;p<arguments.length;p++){for(var b in e=Object(arguments[p]))o.call(e,b)&&(s[b]=e[b]);if(n){a=n(e);for(var f=0;f<a.length;f++)c.call(e,a[f])&&(s[a[f]]=e[a[f]])}}return s}}}]);
//# sourceMappingURL=nm.object-assign.f55e66d5.chunk.js.map