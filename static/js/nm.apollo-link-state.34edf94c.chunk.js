(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{75:function(t,e,r){"use strict";var n=r(8),o=r(10),i=r(2),a=r(67),c=r(76),u={test:function(t){return"client"===t.name.value},remove:!0},f=new Map;r.d(e,"a",(function(){return v}));var s=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),p=a.graphql,v=function(t){void 0===t&&(t={resolvers:{},defaults:{}});var e=t.defaults,r=t.cache,a=t.typeDefs,v=t.fragmentMatcher;return r&&e&&r.writeData({data:e}),new(function(o){function l(){return null!==o&&o.apply(this,arguments)||this}return s(l,o),l.prototype.writeDefaults=function(){r&&e&&r.writeData({data:e})},l.prototype.request=function(r,o){if(void 0===o&&(o=function(){return n.a.of({data:{}})}),a){var s=function(t){return(Array.isArray(t)?t:[t]).map((function(t){return"string"===typeof t?t:Object(c.a)(t)})).map((function(t){return t.trim()})).join("\n")}(a);r.setContext((function(t){var e=t.schemas;return{schemas:(void 0===e?[]:e).concat([{definition:s,directives:"directive @client on FIELD"}])}}))}if(!Object(i.hasDirectives)(["client"],r.query))return o(r);var l,d="function"===typeof t.resolvers?t.resolvers():t.resolvers,y=function(t){var e=f.get(t);if(e)return e;Object(i.checkDocument)(t);var r=Object(i.removeDirectivesFromDocument)([u],t);return f.set(t,r),r}(r.query),m=r.query,h=(l=(Object(i.getMainDefinition)(m)||{}).operation).charAt(0).toUpperCase()+l.slice(1)||"Query",b=function(t,r,n,o,i){void 0===r&&(r={});var a=i.resultKey,c=r[a],u=r[t],f=a!==t;if(void 0!==c||void 0!==u)return c||u;var s=d[r.__typename||h];if(s){var p=s[t];if(p)return p(r,n,o,i)}return(f?c:u)||(e||{})[t]};y&&(r.query=y);var w=y&&o?o(r):n.a.of({data:{}});return new n.a((function(t){var e=!1,n=!1;w.subscribe({next:function(o){var i=o.data,a=o.errors,c=t.error.bind(t),u=r.getContext();n=!0,p(b,m,i,u,r.variables,{fragmentMatcher:v}).then((function(r){t.next({data:r,errors:a}),e&&t.complete(),n=!1})).catch(c)},error:t.error.bind(t),complete:function(){n||t.complete(),e=!0}})}))},l}(o.a))}}}]);
//# sourceMappingURL=nm.apollo-link-state.34edf94c.chunk.js.map