(()=>{"use strict";var e,r,n,t,o,i,a,c,d={8698:(e,r,n)=>{n(7888);var t,o={w:65,s:83,d:68,f:70,g:71,h:72,j:74,k:75,l:76},i=!1;function a(e){var r=e.keyCode?e.keyCode:+this.getAttribute("data-key");Object.values(o).includes(r)&&(83===r&&function(){if(i)return;i=!0;var e='\n  <div class="wrapper">\n      <div class="border_wrapper">\n          '.concat(l("main"),'\n      </div>\n  </div>\n  <div class="text_after_wrapper">What?</div>\n  ');document.querySelector("main").innerHTML=e,setTimeout((function(){return document.body.style.backgroundColor="black"}),10),document.querySelectorAll(".key").forEach((function(e){e.classList.add("small_key"),e.addEventListener("click",a)}))}(),74===r&&(c(),t=setTimeout((function(){document.querySelector("#tbc_arrow").classList.add("arrow_appear"),document.body.style.backgroundColor="#a28f57",t=void 0}),4650)),function(e){document.querySelectorAll("audio").forEach((function(r){+r.getAttribute("data-key")===e?(r.currentTime=0,r.play()):(r.pause(),r.currentTime=0)}))}(r),function(e){setTimeout((function(){document.querySelectorAll(".memImage").forEach((function(r){+r.getAttribute("data-key")===e?(r.classList.add("appear"),setTimeout((function(){return r.classList.add("visible")}),10)):(r.classList.remove("visible"),setTimeout((function(){return r.classList.add("appear")}),10))}))}),10)}(r),document.querySelector('.key[data-key="'.concat(r,'"]')).classList.add("playing"))}function c(){t&&clearTimeout(t),t=void 0,document.querySelector("#tbc_arrow").classList.remove("arrow_appear"),document.body.style.removeProperty("background-color")}function d(){var e,r=+this.getAttribute("data-key");(document.querySelector('.key[data-key="'.concat(r,'"]')).classList.remove("playing"),83!==r)?74!==r?document.querySelector('img[data-key="'.concat(r,'"]')).classList.remove("visible"):c():(e=l(".border_wrapper"))&&(document.querySelector("main").innerHTML=e,document.body.style.removeProperty("background-color"),document.querySelectorAll(".key").forEach((function(e){e.classList.remove("small_key"),e.addEventListener("click",a)})),i=!1)}function l(e){var r=document.querySelector(e);return r?Array.prototype.reduce.call(r.childNodes,(function(e,r){return e+(r.outerHTML||r.nodeValue)}),""):""}window.onload=function(){document.querySelector(".alert").style.display="none"},window.addEventListener("keydown",a),document.querySelectorAll(".key").forEach((function(e){e.addEventListener("click",a)})),document.querySelectorAll("audio").forEach((function(e){e.addEventListener("ended",d),e.addEventListener("pause",d)}))},7888:(e,r,n)=>{var t=n(4783)(e.id,{locals:!1});e.hot.dispose(t),e.hot.accept(void 0,t)}},l={};function u(e){var r=l[e];if(void 0!==r){if(void 0!==r.error)throw r.error;return r.exports}var n=l[e]={id:e,exports:{}};try{var t={id:e,module:n,factory:d[e],require:u};u.i.forEach((function(e){e(t)})),n=t.module,t.factory.call(n.exports,n,n.exports,t.require)}catch(e){throw n.error=e,e}return n.exports}u.m=d,u.c=l,u.i=[],e=[],u.O=(r,n,t,o)=>{if(!n){var i=1/0;for(l=0;l<e.length;l++){for(var[n,t,o]=e[l],a=!0,c=0;c<n.length;c++)(!1&o||i>=o)&&Object.keys(u.O).every((e=>u.O[e](n[c])))?n.splice(c--,1):(a=!1,o<i&&(i=o));if(a){e.splice(l--,1);var d=t();void 0!==d&&(r=d)}}return r}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,t,o]},u.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return u.d(r,{a:r}),r},u.d=(e,r)=>{for(var n in r)u.o(r,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},u.hu=e=>e+"."+u.h()+".hot-update.js",u.miniCssF=e=>{},u.hmrF=()=>"lesson12."+u.h()+".hot-update.json",u.h=()=>"65270d875d533e37f5a8",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),r={},n="homework17:",u.l=(e,t,o,i)=>{if(r[e])r[e].push(t);else{var a,c;if(void 0!==o)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var s=d[l];if(s.getAttribute("src")==e||s.getAttribute("data-webpack")==n+o){a=s;break}}a||(c=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,u.nc&&a.setAttribute("nonce",u.nc),a.setAttribute("data-webpack",n+o),a.src=e),r[e]=[t];var f=(n,t)=>{a.onerror=a.onload=null,clearTimeout(p);var o=r[e];if(delete r[e],a.parentNode&&a.parentNode.removeChild(a),o&&o.forEach((e=>e(t))),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=f.bind(null,a.onerror),a.onload=f.bind(null,a.onload),c&&document.head.appendChild(a)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e,r,n,t={},o=u.c,i=[],a=[],c="idle",d=0,l=[];function s(e){c=e;for(var r=[],n=0;n<a.length;n++)r[n]=a[n].call(null,e);return Promise.all(r)}function f(){0==--d&&s("ready").then((function(){if(0===d){var e=l;l=[];for(var r=0;r<e.length;r++)e[r]()}}))}function p(e){if("idle"!==c)throw new Error("check() is only allowed in idle status");return s("check").then(u.hmrM).then((function(n){return n?s("prepare").then((function(){var t=[];return r=[],Promise.all(Object.keys(u.hmrC).reduce((function(e,o){return u.hmrC[o](n.c,n.r,n.m,e,r,t),e}),[])).then((function(){return r=function(){return e?m(e):s("ready").then((function(){return t}))},0===d?r():new Promise((function(e){l.push((function(){e(r())}))}));var r}))})):s(v()?"ready":"idle").then((function(){return null}))}))}function h(e){return"ready"!==c?Promise.resolve().then((function(){throw new Error("apply() is only allowed in ready status (state: "+c+")")})):m(e)}function m(e){e=e||{},v();var t=r.map((function(r){return r(e)}));r=void 0;var o=t.map((function(e){return e.error})).filter(Boolean);if(o.length>0)return s("abort").then((function(){throw o[0]}));var i=s("dispose");t.forEach((function(e){e.dispose&&e.dispose()}));var a,c=s("apply"),d=function(e){a||(a=e)},l=[];return t.forEach((function(e){if(e.apply){var r=e.apply(d);if(r)for(var n=0;n<r.length;n++)l.push(r[n])}})),Promise.all([i,c]).then((function(){return a?s("fail").then((function(){throw a})):n?m(e).then((function(e){return l.forEach((function(r){e.indexOf(r)<0&&e.push(r)})),e})):s("idle").then((function(){return l}))}))}function v(){if(n)return r||(r=[]),Object.keys(u.hmrI).forEach((function(e){n.forEach((function(n){u.hmrI[e](n,r)}))})),n=void 0,!0}u.hmrD=t,u.i.push((function(l){var m,v,y,g,b=l.module,w=function(r,n){var t=o[n];if(!t)return r;var a=function(a){if(t.hot.active){if(o[a]){var c=o[a].parents;-1===c.indexOf(n)&&c.push(n)}else i=[n],e=a;-1===t.children.indexOf(a)&&t.children.push(a)}else console.warn("[HMR] unexpected require("+a+") from disposed module "+n),i=[];return r(a)},l=function(e){return{configurable:!0,enumerable:!0,get:function(){return r[e]},set:function(n){r[e]=n}}};for(var u in r)Object.prototype.hasOwnProperty.call(r,u)&&"e"!==u&&Object.defineProperty(a,u,l(u));return a.e=function(e){return function(e){switch(c){case"ready":s("prepare");case"prepare":return d++,e.then(f,f),e;default:return e}}(r.e(e))},a}(l.require,l.id);b.hot=(m=l.id,v=b,g={_acceptedDependencies:{},_acceptedErrorHandlers:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_selfInvalidated:!1,_disposeHandlers:[],_main:y=e!==m,_requireSelf:function(){i=v.parents.slice(),e=y?void 0:m,u(m)},active:!0,accept:function(e,r,n){if(void 0===e)g._selfAccepted=!0;else if("function"==typeof e)g._selfAccepted=e;else if("object"==typeof e&&null!==e)for(var t=0;t<e.length;t++)g._acceptedDependencies[e[t]]=r||function(){},g._acceptedErrorHandlers[e[t]]=n;else g._acceptedDependencies[e]=r||function(){},g._acceptedErrorHandlers[e]=n},decline:function(e){if(void 0===e)g._selfDeclined=!0;else if("object"==typeof e&&null!==e)for(var r=0;r<e.length;r++)g._declinedDependencies[e[r]]=!0;else g._declinedDependencies[e]=!0},dispose:function(e){g._disposeHandlers.push(e)},addDisposeHandler:function(e){g._disposeHandlers.push(e)},removeDisposeHandler:function(e){var r=g._disposeHandlers.indexOf(e);r>=0&&g._disposeHandlers.splice(r,1)},invalidate:function(){switch(this._selfInvalidated=!0,c){case"idle":r=[],Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](m,r)})),s("ready");break;case"ready":Object.keys(u.hmrI).forEach((function(e){u.hmrI[e](m,r)}));break;case"prepare":case"check":case"dispose":case"apply":(n=n||[]).push(m)}},check:p,apply:h,status:function(e){if(!e)return c;a.push(e)},addStatusHandler:function(e){a.push(e)},removeStatusHandler:function(e){var r=a.indexOf(e);r>=0&&a.splice(r,1)},data:t[m]},e=void 0,g),b.parents=i,b.children=[],i=[],l.require=w})),u.hmrC={},u.hmrI={}})(),(()=>{var e;u.g.importScripts&&(e=u.g.location+"");var r=u.g.document;if(!e&&r&&(r.currentScript&&(e=r.currentScript.src),!e)){var n=r.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),u.p=e+"../../"})(),t=(e,r,n,t)=>{var o=document.createElement("link");return o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=i=>{if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),c=i&&i.target&&i.target.href||r,d=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");d.code="CSS_CHUNK_LOAD_FAILED",d.type=a,d.request=c,o.parentNode.removeChild(o),t(d)}},o.href=r,document.head.appendChild(o),o},o=(e,r)=>{for(var n=document.getElementsByTagName("link"),t=0;t<n.length;t++){var o=(a=n[t]).getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(o===e||o===r))return a}var i=document.getElementsByTagName("style");for(t=0;t<i.length;t++){var a;if((o=(a=i[t]).getAttribute("data-href"))===e||o===r)return a}},i=[],a=[],c=e=>({dispose:()=>{for(var e=0;e<i.length;e++){var r=i[e];r.parentNode&&r.parentNode.removeChild(r)}i.length=0},apply:()=>{for(var e=0;e<a.length;e++)a[e].rel="stylesheet";a.length=0}}),u.hmrC.miniCss=(e,r,n,d,l,s)=>{l.push(c),e.forEach((e=>{var r=u.miniCssF(e),n=u.p+r,c=o(r,n);c&&d.push(new Promise(((r,o)=>{var d=t(e,n,(()=>{d.as="style",d.rel="preload",r()}),o);i.push(c),a.push(d)})))}))},(()=>{var e,r,n,t,o,i=u.hmrS_jsonp=u.hmrS_jsonp||{598:0},a={};function c(r,n){return e=n,new Promise(((e,n)=>{a[r]=e;var t=u.p+u.hu(r),o=new Error;u.l(t,(e=>{if(a[r]){a[r]=void 0;var t=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;o.message="Loading hot update chunk "+r+" failed.\n("+t+": "+i+")",o.name="ChunkLoadError",o.type=t,o.request=i,n(o)}}))}))}function d(e){function a(e){for(var r=[e],n={},t=r.map((function(e){return{chain:[e],id:e}}));t.length>0;){var o=t.pop(),i=o.id,a=o.chain,d=u.c[i];if(d&&(!d.hot._selfAccepted||d.hot._selfInvalidated)){if(d.hot._selfDeclined)return{type:"self-declined",chain:a,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:a,moduleId:i};for(var l=0;l<d.parents.length;l++){var s=d.parents[l],f=u.c[s];if(f){if(f.hot._declinedDependencies[i])return{type:"declined",chain:a.concat([s]),moduleId:i,parentId:s};-1===r.indexOf(s)&&(f.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),c(n[s],[i])):(delete n[s],r.push(s),t.push({chain:a.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:r,outdatedDependencies:n}}function c(e,r){for(var n=0;n<r.length;n++){var t=r[n];-1===e.indexOf(t)&&e.push(t)}}u.f&&delete u.f.jsonpHmr,r=void 0;var d={},l=[],s={},f=function(e){console.warn("[HMR] unexpected require("+e.id+") to disposed module")};for(var p in n)if(u.o(n,p)){var h,m=n[p],v=!1,y=!1,g=!1,b="";switch((h=m?a(p):{type:"disposed",moduleId:p}).chain&&(b="\nUpdate propagation: "+h.chain.join(" -> ")),h.type){case"self-declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of self decline: "+h.moduleId+b));break;case"declined":e.onDeclined&&e.onDeclined(h),e.ignoreDeclined||(v=new Error("Aborted because of declined dependency: "+h.moduleId+" in "+h.parentId+b));break;case"unaccepted":e.onUnaccepted&&e.onUnaccepted(h),e.ignoreUnaccepted||(v=new Error("Aborted because "+p+" is not accepted"+b));break;case"accepted":e.onAccepted&&e.onAccepted(h),y=!0;break;case"disposed":e.onDisposed&&e.onDisposed(h),g=!0;break;default:throw new Error("Unexception type "+h.type)}if(v)return{error:v};if(y)for(p in s[p]=m,c(l,h.outdatedModules),h.outdatedDependencies)u.o(h.outdatedDependencies,p)&&(d[p]||(d[p]=[]),c(d[p],h.outdatedDependencies[p]));g&&(c(l,[h.moduleId]),s[p]=f)}n=void 0;for(var w,E=[],k=0;k<l.length;k++){var _=l[k],I=u.c[_];I&&(I.hot._selfAccepted||I.hot._main)&&s[_]!==f&&!I.hot._selfInvalidated&&E.push({module:_,require:I.hot._requireSelf,errorHandler:I.hot._selfAccepted})}return{dispose:function(){var e;t.forEach((function(e){delete i[e]})),t=void 0;for(var r,n=l.slice();n.length>0;){var o=n.pop(),a=u.c[o];if(a){var c={},s=a.hot._disposeHandlers;for(k=0;k<s.length;k++)s[k].call(null,c);for(u.hmrD[o]=c,a.hot.active=!1,delete u.c[o],delete d[o],k=0;k<a.children.length;k++){var f=u.c[a.children[k]];f&&((e=f.parents.indexOf(o))>=0&&f.parents.splice(e,1))}}}for(var p in d)if(u.o(d,p)&&(a=u.c[p]))for(w=d[p],k=0;k<w.length;k++)r=w[k],(e=a.children.indexOf(r))>=0&&a.children.splice(e,1)},apply:function(r){for(var n in s)u.o(s,n)&&(u.m[n]=s[n]);for(var t=0;t<o.length;t++)o[t](u);for(var i in d)if(u.o(d,i)){var a=u.c[i];if(a){w=d[i];for(var c=[],f=[],p=[],h=0;h<w.length;h++){var m=w[h],v=a.hot._acceptedDependencies[m],y=a.hot._acceptedErrorHandlers[m];if(v){if(-1!==c.indexOf(v))continue;c.push(v),f.push(y),p.push(m)}}for(var g=0;g<c.length;g++)try{c[g].call(null,w)}catch(n){if("function"==typeof f[g])try{f[g](n,{moduleId:i,dependencyId:p[g]})}catch(t){e.onErrored&&e.onErrored({type:"accept-error-handler-errored",moduleId:i,dependencyId:p[g],error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"accept-errored",moduleId:i,dependencyId:p[g],error:n}),e.ignoreErrored||r(n)}}}for(var b=0;b<E.length;b++){var k=E[b],_=k.module;try{k.require(_)}catch(n){if("function"==typeof k.errorHandler)try{k.errorHandler(n,{moduleId:_,module:u.c[_]})}catch(t){e.onErrored&&e.onErrored({type:"self-accept-error-handler-errored",moduleId:_,error:t,originalError:n}),e.ignoreErrored||(r(t),r(n))}else e.onErrored&&e.onErrored({type:"self-accept-errored",moduleId:_,error:n}),e.ignoreErrored||r(n)}}return l}}}self.webpackHotUpdatehomework17=(r,t,i)=>{for(var c in t)u.o(t,c)&&(n[c]=t[c],e&&e.push(c));i&&o.push(i),a[r]&&(a[r](),a[r]=void 0)},u.hmrI.jsonp=function(e,r){n||(n={},o=[],t=[],r.push(d)),u.o(n,e)||(n[e]=u.m[e])},u.hmrC.jsonp=function(e,a,l,s,f,p){f.push(d),r={},t=a,n=l.reduce((function(e,r){return e[r]=!1,e}),{}),o=[],e.forEach((function(e){u.o(i,e)&&void 0!==i[e]?(s.push(c(e,p)),r[e]=!0):r[e]=!1})),u.f&&(u.f.jsonpHmr=function(e,n){r&&u.o(r,e)&&!r[e]&&(n.push(c(e)),r[e]=!0)})},u.hmrM=()=>{if("undefined"==typeof fetch)throw new Error("No browser support: need fetch API");return fetch(u.p+u.hmrF()).then((e=>{if(404!==e.status){if(!e.ok)throw new Error("Failed to fetch update manifest "+e.statusText);return e.json()}}))},u.O.j=e=>0===i[e];var l=(e,r)=>{var n,t,[o,a,c]=r,d=0;if(o.some((e=>0!==i[e]))){for(n in a)u.o(a,n)&&(u.m[n]=a[n]);if(c)var l=c(u)}for(e&&e(r);d<o.length;d++)t=o[d],u.o(i,t)&&i[t]&&i[t][0](),i[t]=0;return u.O(l)},s=self.webpackChunkhomework17=self.webpackChunkhomework17||[];s.forEach(l.bind(null,0)),s.push=l.bind(null,s.push.bind(s))})(),u.O(void 0,[14],(()=>u(9240))),u.O(void 0,[14],(()=>u(6952)));var s=u.O(void 0,[14],(()=>u(8698)));s=u.O(s)})();