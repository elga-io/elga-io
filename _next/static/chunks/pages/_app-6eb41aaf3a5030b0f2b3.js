(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{8485:function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}t.r(n),t.d(n,{default:function(){return d}});var o=t(7294),i=t(1163),u=t(9008),c=t(5893);function s(){return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(u.default,{children:[(0,c.jsx)("title",{children:"ELGA"})," ",(0,c.jsx)("meta",{name:"description",content:"https://elga.io"}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]})," "]})}function f(){return(0,c.jsx)(c.Fragment,{})}function a(){return(0,c.jsx)(c.Fragment,{})}function l(e){var n=e.children;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(s,{}),(0,c.jsx)(f,{}),(0,c.jsx)("main",{children:n}),(0,c.jsx)(a,{})]})}t(4090);var p=t(4155);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var d=function(e){var n=e.Component,t=e.pageProps,r=(0,i.useRouter)();return(0,o.useEffect)((function(){var e=function(e){window.gtag("config",p.env.NEXT_PUBLIC_GOOGLE_ANALYTICS,{page_path:e})};return r.events.on("routeChangeComplete",e),function(){r.events.off("routeChangeComplete",e)}}),[r.events]),(0,c.jsx)(l,{children:(0,c.jsx)(n,m({},t))})}},1780:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t(8485)}])},4090:function(){},9008:function(e,n,t){e.exports=t(639)},1163:function(e,n,t){e.exports=t(4651)},4155:function(e){var n,t,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(e){n=o}try{t="function"===typeof clearTimeout?clearTimeout:i}catch(e){t=i}}();var c,s=[],f=!1,a=-1;function l(){f&&c&&(f=!1,c.length?s=c.concat(s):a=-1,s.length&&p())}function p(){if(!f){var e=u(l);f=!0;for(var n=s.length;n;){for(c=s,s=[];++a<n;)c&&c[a].run();a=-1,n=s.length}c=null,f=!1,function(e){if(t===clearTimeout)return clearTimeout(e);if((t===i||!t)&&clearTimeout)return t=clearTimeout,clearTimeout(e);try{t(e)}catch(n){try{return t.call(null,e)}catch(n){return t.call(this,e)}}}(e)}}function h(e,n){this.fun=e,this.array=n}function m(){}r.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];s.push(new h(e,n)),1!==s.length||f||u(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}},function(e){var n=function(n){return e(e.s=n)};e.O(0,[774,179],(function(){return n(1780),n(4651)}));var t=e.O();_N_E=t}]);