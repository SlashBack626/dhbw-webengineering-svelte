var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function a(e,t,n){e.insertBefore(t,n||null)}function c(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function l(e){return document.createTextNode(e)}function f(){return l(" ")}function d(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function h(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function m(e,t){e.value=null==t?"":t}let g;function v(e){g=e}function y(){const e=function(){if(!g)throw new Error("Function called outside component initialization");return g}();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const o=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);r.slice().forEach((t=>{t.call(e,o)}))}}}const b=[],w=[],x=[],k=[],$=Promise.resolve();let E=!1;function C(e){x.push(e)}let S=!1;const j=new Set;function A(){if(!S){S=!0;do{for(let e=0;e<b.length;e+=1){const t=b[e];v(t),z(t.$$)}for(v(null),b.length=0;w.length;)w.pop()();for(let e=0;e<x.length;e+=1){const t=x[e];j.has(t)||(j.add(t),t())}x.length=0}while(b.length);for(;k.length;)k.pop()();E=!1,S=!1,j.clear()}}function z(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const O=new Set;let R;function N(e,t){e&&e.i&&(O.delete(e),e.i(t))}function T(e,t,n,r){if(e&&e.o){if(O.has(e))return;O.add(e),R.c.push((()=>{O.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}}function _(e){e&&e.c()}function B(e,n,i){const{fragment:s,on_mount:a,on_destroy:c,after_update:u}=e.$$;s&&s.m(n,i),C((()=>{const n=a.map(t).filter(o);c?c.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(C)}function L(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function P(e,t){-1===e.$$.dirty[0]&&(b.push(e),E||(E=!0,$.then(A)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function U(t,o,i,s,a,u,l=[-1]){const f=g;v(t);const d=o.props||{},p=t.$$={fragment:null,ctx:null,props:u,update:e,not_equal:a,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:n(),dirty:l,skip_bound:!1};let h=!1;if(p.ctx=i?i(t,d,((e,n,...r)=>{const o=r.length?r[0]:n;return p.ctx&&a(p.ctx[e],p.ctx[e]=o)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](o),h&&P(t,e)),n})):[],p.update(),h=!0,r(p.before_update),p.fragment=!!s&&s(p.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();o.intro&&N(t.$$.fragment),B(t,o.target,o.anchor),A()}v(f)}class q{$destroy(){L(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function D(t){let n,r,o,i,d,m,g,v,y,b,w;return{c(){n=u("section"),r=u("div"),o=u("h2"),i=l(t[0]),d=f(),m=u("div"),g=u("img"),y=f(),b=u("p"),w=l(t[2]),p(r,"class","title svelte-cqjye3"),g.src!==(v=t[1])&&p(g,"src",v),p(g,"alt",""),p(g,"class","svelte-cqjye3"),p(b,"class","svelte-cqjye3"),p(m,"class","content svelte-cqjye3"),p(n,"id",t[3]),p(n,"class","svelte-cqjye3")},m(e,t){a(e,n,t),s(n,r),s(r,o),s(o,i),s(n,d),s(n,m),s(m,g),s(m,y),s(m,b),s(b,w)},p(e,[t]){1&t&&h(i,e[0]),2&t&&g.src!==(v=e[1])&&p(g,"src",v),4&t&&h(w,e[2]),8&t&&p(n,"id",e[3])},i:e,o:e,d(e){e&&c(n)}}}function M(e,t,n){let{name:r}=t,{img:o}=t,{description:i}=t,{id:s}=t;return e.$$set=e=>{"name"in e&&n(0,r=e.name),"img"in e&&n(1,o=e.img),"description"in e&&n(2,i=e.description),"id"in e&&n(3,s=e.id)},[r,o,i,s]}class H extends q{constructor(e){super(),U(this,e,M,D,i,{name:0,img:1,description:2,id:3})}}function I(t){let n,r,o;return{c(){n=u("footer"),n.innerHTML="<span>©DHBW Stuttgart</span>",r=f(),o=u("div"),o.innerHTML='Icons made by\n  <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a>\n  from\n  <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',p(n,"class","svelte-1lna1po"),p(o,"class","svelte-1lna1po")},m(e,t){a(e,n,t),a(e,r,t),a(e,o,t)},p:e,i:e,o:e,d(e){e&&c(n),e&&c(r),e&&c(o)}}}class F extends q{constructor(e){super(),U(this,e,null,I,i,{})}}function V(t){let n,o,i,m,g,v,y,b,w,x,k,$,E,C,S,j,A,z,O;return{c(){n=u("header"),o=u("div"),i=u("img"),g=f(),v=u("h1"),y=l(t[0]),b=f(),w=u("nav"),x=u("ul"),k=u("li"),k.textContent="Informatik",$=f(),E=u("li"),E.textContent="Elektrotechnik",C=f(),S=u("li"),S.textContent="Maschinenbau",j=f(),A=u("li"),A.textContent="Services",i.src!==(m="./assets/logodhbw.svg")&&p(i,"src","./assets/logodhbw.svg"),p(i,"alt","DHBW Logo"),p(i,"class","svelte-1sx6zza"),p(v,"class","svelte-1sx6zza"),p(o,"class","svelte-1sx6zza"),p(n,"class","svelte-1sx6zza"),p(k,"class","svelte-1sx6zza"),p(E,"class","svelte-1sx6zza"),p(S,"class","svelte-1sx6zza"),p(A,"class","svelte-1sx6zza"),p(x,"class","svelte-1sx6zza"),p(w,"class","svelte-1sx6zza")},m(e,r){a(e,n,r),s(n,o),s(o,i),s(o,g),s(o,v),s(v,y),a(e,b,r),a(e,w,r),s(w,x),s(x,k),s(x,$),s(x,E),s(x,C),s(x,S),s(x,j),s(x,A),z||(O=[d(k,"click",t[2]),d(E,"click",t[3]),d(S,"click",t[4]),d(A,"click",t[5])],z=!0)},p(e,[t]){1&t&&h(y,e[0])},i:e,o:e,d(e){e&&c(n),e&&c(b),e&&c(w),z=!1,r(O)}}}function W(e,t,n){let{title:r}=t;const o=y();function i(e){o("navClick",e)}return e.$$set=e=>{"title"in e&&n(0,r=e.title)},[r,i,()=>i("informatik"),()=>i("elektrotechnik"),()=>i("maschinenbau"),()=>i("services")]}class X extends q{constructor(e){super(),U(this,e,W,V,i,{title:0})}}var J=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}},K=Object.prototype.toString;function G(e){return"[object Array]"===K.call(e)}function Q(e){return void 0===e}function Y(e){return null!==e&&"object"==typeof e}function Z(e){if("[object Object]"!==K.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function ee(e){return"[object Function]"===K.call(e)}function te(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),G(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}var ne={isArray:G,isArrayBuffer:function(e){return"[object ArrayBuffer]"===K.call(e)},isBuffer:function(e){return null!==e&&!Q(e)&&null!==e.constructor&&!Q(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:Y,isPlainObject:Z,isUndefined:Q,isDate:function(e){return"[object Date]"===K.call(e)},isFile:function(e){return"[object File]"===K.call(e)},isBlob:function(e){return"[object Blob]"===K.call(e)},isFunction:ee,isStream:function(e){return Y(e)&&ee(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:te,merge:function e(){var t={};function n(n,r){Z(t[r])&&Z(n)?t[r]=e(t[r],n):Z(n)?t[r]=e({},n):G(n)?t[r]=n.slice():t[r]=n}for(var r=0,o=arguments.length;r<o;r++)te(arguments[r],n);return t},extend:function(e,t,n){return te(t,(function(t,r){e[r]=n&&"function"==typeof t?J(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}};function re(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var oe=function(e,t,n){if(!t)return e;var r;if(n)r=n(t);else if(ne.isURLSearchParams(t))r=t.toString();else{var o=[];ne.forEach(t,(function(e,t){null!=e&&(ne.isArray(e)?t+="[]":e=[e],ne.forEach(e,(function(e){ne.isDate(e)?e=e.toISOString():ne.isObject(e)&&(e=JSON.stringify(e)),o.push(re(t)+"="+re(e))})))})),r=o.join("&")}if(r){var i=e.indexOf("#");-1!==i&&(e=e.slice(0,i)),e+=(-1===e.indexOf("?")?"?":"&")+r}return e};function ie(){this.handlers=[]}ie.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},ie.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},ie.prototype.forEach=function(e){ne.forEach(this.handlers,(function(t){null!==t&&e(t)}))};var se=ie,ae=function(e,t,n){return ne.forEach(n,(function(n){e=n(e,t)})),e},ce=function(e){return!(!e||!e.__CANCEL__)},ue=function(e,t){ne.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))},le=function(e,t,n,r,o){return function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}(new Error(e),t,n,r,o)},fe=ne.isStandardBrowserEnv()?{write:function(e,t,n,r,o,i){var s=[];s.push(e+"="+encodeURIComponent(t)),ne.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ne.isString(r)&&s.push("path="+r),ne.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}},de=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],pe=ne.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=ne.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0},he=function(e){return new Promise((function(t,n){var r=e.data,o=e.headers;ne.isFormData(r)&&delete o["Content-Type"];var i=new XMLHttpRequest;if(e.auth){var s=e.auth.username||"",a=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(s+":"+a)}var c,u,l=(c=e.baseURL,u=e.url,c&&!/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(u)?function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}(c,u):u);if(i.open(e.method.toUpperCase(),oe(l,e.params,e.paramsSerializer),!0),i.timeout=e.timeout,i.onreadystatechange=function(){if(i&&4===i.readyState&&(0!==i.status||i.responseURL&&0===i.responseURL.indexOf("file:"))){var r,o,s,a,c,u="getAllResponseHeaders"in i?(r=i.getAllResponseHeaders(),c={},r?(ne.forEach(r.split("\n"),(function(e){if(a=e.indexOf(":"),o=ne.trim(e.substr(0,a)).toLowerCase(),s=ne.trim(e.substr(a+1)),o){if(c[o]&&de.indexOf(o)>=0)return;c[o]="set-cookie"===o?(c[o]?c[o]:[]).concat([s]):c[o]?c[o]+", "+s:s}})),c):c):null,l={data:e.responseType&&"text"!==e.responseType?i.response:i.responseText,status:i.status,statusText:i.statusText,headers:u,config:e,request:i};!function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(le("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}(t,n,l),i=null}},i.onabort=function(){i&&(n(le("Request aborted",e,"ECONNABORTED",i)),i=null)},i.onerror=function(){n(le("Network Error",e,null,i)),i=null},i.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(le(t,e,"ECONNABORTED",i)),i=null},ne.isStandardBrowserEnv()){var f=(e.withCredentials||pe(l))&&e.xsrfCookieName?fe.read(e.xsrfCookieName):void 0;f&&(o[e.xsrfHeaderName]=f)}if("setRequestHeader"in i&&ne.forEach(o,(function(e,t){void 0===r&&"content-type"===t.toLowerCase()?delete o[t]:i.setRequestHeader(t,e)})),ne.isUndefined(e.withCredentials)||(i.withCredentials=!!e.withCredentials),e.responseType)try{i.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&i.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&i.upload&&i.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){i&&(i.abort(),n(e),i=null)})),r||(r=null),i.send(r)}))},me={"Content-Type":"application/x-www-form-urlencoded"};function ge(e,t){!ne.isUndefined(e)&&ne.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var ve,ye={adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(ve=he),ve),transformRequest:[function(e,t){return ue(t,"Accept"),ue(t,"Content-Type"),ne.isFormData(e)||ne.isArrayBuffer(e)||ne.isBuffer(e)||ne.isStream(e)||ne.isFile(e)||ne.isBlob(e)?e:ne.isArrayBufferView(e)?e.buffer:ne.isURLSearchParams(e)?(ge(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):ne.isObject(e)?(ge(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300}};ye.headers={common:{Accept:"application/json, text/plain, */*"}},ne.forEach(["delete","get","head"],(function(e){ye.headers[e]={}})),ne.forEach(["post","put","patch"],(function(e){ye.headers[e]=ne.merge(me)}));var be=ye;function we(e){e.cancelToken&&e.cancelToken.throwIfRequested()}var xe=function(e){return we(e),e.headers=e.headers||{},e.data=ae(e.data,e.headers,e.transformRequest),e.headers=ne.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ne.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||be.adapter)(e).then((function(t){return we(e),t.data=ae(t.data,t.headers,e.transformResponse),t}),(function(t){return ce(t)||(we(e),t&&t.response&&(t.response.data=ae(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))},ke=function(e,t){t=t||{};var n={},r=["url","method","data"],o=["headers","auth","proxy","params"],i=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function a(e,t){return ne.isPlainObject(e)&&ne.isPlainObject(t)?ne.merge(e,t):ne.isPlainObject(t)?ne.merge({},t):ne.isArray(t)?t.slice():t}function c(r){ne.isUndefined(t[r])?ne.isUndefined(e[r])||(n[r]=a(void 0,e[r])):n[r]=a(e[r],t[r])}ne.forEach(r,(function(e){ne.isUndefined(t[e])||(n[e]=a(void 0,t[e]))})),ne.forEach(o,c),ne.forEach(i,(function(r){ne.isUndefined(t[r])?ne.isUndefined(e[r])||(n[r]=a(void 0,e[r])):n[r]=a(void 0,t[r])})),ne.forEach(s,(function(r){r in t?n[r]=a(e[r],t[r]):r in e&&(n[r]=a(void 0,e[r]))}));var u=r.concat(o).concat(i).concat(s),l=Object.keys(e).concat(Object.keys(t)).filter((function(e){return-1===u.indexOf(e)}));return ne.forEach(l,c),n};function $e(e){this.defaults=e,this.interceptors={request:new se,response:new se}}$e.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=ke(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[xe,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},$e.prototype.getUri=function(e){return e=ke(this.defaults,e),oe(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},ne.forEach(["delete","get","head","options"],(function(e){$e.prototype[e]=function(t,n){return this.request(ke(n||{},{method:e,url:t,data:(n||{}).data}))}})),ne.forEach(["post","put","patch"],(function(e){$e.prototype[e]=function(t,n,r){return this.request(ke(r||{},{method:e,url:t,data:n}))}}));var Ee=$e;function Ce(e){this.message=e}Ce.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},Ce.prototype.__CANCEL__=!0;var Se=Ce;function je(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new Se(e),t(n.reason))}))}je.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},je.source=function(){var e;return{token:new je((function(t){e=t})),cancel:e}};var Ae=je;function ze(e){var t=new Ee(e),n=J(Ee.prototype.request,t);return ne.extend(n,Ee.prototype,t),ne.extend(n,t),n}var Oe=ze(be);Oe.Axios=Ee,Oe.create=function(e){return ze(ke(Oe.defaults,e))},Oe.Cancel=Se,Oe.CancelToken=Ae,Oe.isCancel=ce,Oe.all=function(e){return Promise.all(e)},Oe.spread=function(e){return function(t){return e.apply(null,t)}};var Re=Oe,Ne=Oe;Re.default=Ne;var Te=Re;function _e(e,t,n){const r=e.slice();return r[5]=t[n],r}function Be(e){let t,n,r,o=e[1],i=[];for(let t=0;t<o.length;t+=1)i[t]=Le(_e(e,o,t));return{c(){t=u("table"),n=u("tr"),n.innerHTML='<th class="svelte-s4x15y">Title</th> \n          <th class="svelte-s4x15y">Description</th> \n          <th class="svelte-s4x15y">Extract</th>',r=f();for(let e=0;e<i.length;e+=1)i[e].c();p(t,"class","svelte-s4x15y")},m(e,o){a(e,t,o),s(t,n),s(t,r);for(let e=0;e<i.length;e+=1)i[e].m(t,null)},p(e,n){if(2&n){let r;for(o=e[1],r=0;r<o.length;r+=1){const s=_e(e,o,r);i[r]?i[r].p(s,n):(i[r]=Le(s),i[r].c(),i[r].m(t,null))}for(;r<i.length;r+=1)i[r].d(1);i.length=o.length}},d(e){e&&c(t),function(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}(i,e)}}}function Le(e){let t,n,r,o,i,d,m,g,v,y,b,w,x=e[5].title+"",k=e[5].description+"",$=e[5].extract+"";return{c(){t=u("tr"),n=u("td"),r=u("a"),o=l(x),d=f(),m=u("td"),g=l(k),v=f(),y=u("td"),b=l($),w=f(),p(r,"href",i="https://de.wikipedia.org/?curid="+e[5].pageid),p(r,"class","svelte-s4x15y"),p(n,"class","svelte-s4x15y"),p(m,"class","svelte-s4x15y"),p(y,"class","svelte-s4x15y")},m(e,i){a(e,t,i),s(t,n),s(n,r),s(r,o),s(t,d),s(t,m),s(m,g),s(t,v),s(t,y),s(y,b),s(t,w)},p(e,t){2&t&&x!==(x=e[5].title+"")&&h(o,x),2&t&&i!==(i="https://de.wikipedia.org/?curid="+e[5].pageid)&&p(r,"href",i),2&t&&k!==(k=e[5].description+"")&&h(g,k),2&t&&$!==($=e[5].extract+"")&&h(b,$)},d(e){e&&c(t)}}}function Pe(t){let n,o,i,l,h,g,v,y,b,w,x=t[1]&&Be(t);return{c(){n=u("div"),o=u("span"),o.textContent="Wikipedia search:",i=f(),l=u("div"),h=u("input"),g=f(),v=u("button"),v.textContent="go",y=f(),x&&x.c(),p(h,"type","text"),p(h,"class","svelte-s4x15y"),p(v,"class","svelte-s4x15y"),p(n,"id","popup"),p(n,"class","svelte-s4x15y")},m(e,r){a(e,n,r),s(n,o),s(n,i),s(n,l),s(l,h),m(h,t[0]),s(l,g),s(l,v),s(l,y),x&&x.m(l,null),b||(w=[d(h,"input",t[3]),d(v,"click",t[2])],b=!0)},p(e,[t]){1&t&&h.value!==e[0]&&m(h,e[0]),e[1]?x?x.p(e,t):(x=Be(e),x.c(),x.m(l,null)):x&&(x.d(1),x=null)},i:e,o:e,d(e){e&&c(n),x&&x.d(),b=!1,r(w)}}}function Ue(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};let o,i=null;return[o,i,function(e){return r(this,void 0,void 0,(function*(){if(0===o.length)return;let e=yield Te.get("/wikisearch/"+o);e.data.results.forEach((e=>{console.log(e.title)})),n(1,i=e.data.results)}))},function(){o=this.value,n(0,o)}]}class qe extends q{constructor(e){super(),U(this,e,Ue,Pe,i,{})}}function De(t){let n,r,o,i,l,h,m,g;return l=new qe({}),{c(){n=u("div"),r=u("img"),i=f(),_(l.$$.fragment),r.src!==(o="./assets/close.svg")&&p(r,"src","./assets/close.svg"),p(r,"alt","close"),p(r,"class","svelte-193rv91"),p(n,"id","popupRoot"),p(n,"class","svelte-193rv91")},m(e,o){a(e,n,o),s(n,r),s(n,i),B(l,n,null),h=!0,m||(g=d(r,"click",t[4]),m=!0)},p:e,i(e){h||(N(l.$$.fragment,e),h=!0)},o(e){T(l.$$.fragment,e),h=!1},d(e){e&&c(n),L(l),m=!1,g()}}}function Me(e){let t,n,o,i,l,d,p,h,m,g,v,y;t=new X({props:{title:"DHBW WebEngineering"}}),t.$on("navClick",e[3]),i=new H({props:{id:"informatik",name:"Informatik",description:e[1].informatik,img:e[2].informatik}}),d=new H({props:{id:"elektrotechnik",name:"Elektrotechnik",description:e[1].elektrotechnik,img:e[2].elektrotechnik}}),h=new H({props:{id:"maschinenbau",name:"Maschinenbau",description:e[1].maschinenbau,img:e[2].maschinenbau}});let b=e[0]&&De(e);return v=new F({}),{c(){_(t.$$.fragment),n=f(),o=u("main"),_(i.$$.fragment),l=f(),_(d.$$.fragment),p=f(),_(h.$$.fragment),m=f(),b&&b.c(),g=f(),_(v.$$.fragment)},m(e,r){B(t,e,r),a(e,n,r),a(e,o,r),B(i,o,null),s(o,l),B(d,o,null),s(o,p),B(h,o,null),a(e,m,r),b&&b.m(e,r),a(e,g,r),B(v,e,r),y=!0},p(e,[t]){e[0]?b?(b.p(e,t),1&t&&N(b,1)):(b=De(e),b.c(),N(b,1),b.m(g.parentNode,g)):b&&(R={r:0,c:[],p:R},T(b,1,1,(()=>{b=null})),R.r||r(R.c),R=R.p)},i(e){y||(N(t.$$.fragment,e),N(i.$$.fragment,e),N(d.$$.fragment,e),N(h.$$.fragment,e),N(b),N(v.$$.fragment,e),y=!0)},o(e){T(t.$$.fragment,e),T(i.$$.fragment,e),T(d.$$.fragment,e),T(h.$$.fragment,e),T(b),T(v.$$.fragment,e),y=!1},d(e){L(t,e),e&&c(n),e&&c(o),L(i),L(d),L(h),e&&c(m),b&&b.d(e),e&&c(g),L(v,e)}}}function He(e,t,n){let r=!1;return[r,{informatik:"\n\tInformatiker übertragen Vorgänge der realen Welt auf\n\tComputersysteme, indem sie die Aufgabenstellung in geeignete Modelle\n\tüberführen und diese dann auf Softwaresystemen abbilden. Die\n\tVielfalt an Anwendungsmöglichkeiten ist dabei nahezu unbegrenzt und\n\tsteigt stetig mit der zunehmenden Leistungsfähigkeit der Systeme.\n\t  ",elektrotechnik:"\n\tDie Elektrotechnik bewegt und verändert die Welt: Smartphones,\n\tAssistenzsysteme, Smart Home oder Medizintechnik sind aus unserem\n\tLeben nicht mehr wegzudenken, die Energiewende ist in aller Munde.\n\tIngenieurinnen und Ingenieure der Elektrotechnik gestalten und\n\tentwickeln die Systeme und haben so einen direkten Einfluss auf\n\tunser alltägliches Leben. Sie befassen sich nicht nur mit\n\telektrischen und elektronischen Systemen, sondern arbeiten in einem\n\tsehr vielfältigen Arbeitsfeld, das von der Entwicklung eines\n\tProdukts über das Projektmanagement bis hin zu Marketing und\n\tVertrieb reicht.\n\t",maschinenbau:"\n\tDer Maschinenbau mit seinen zahlreichen Ausprägungen verknüpft\n\tTheorie und Praxis, Naturwissenschaft und Technik. Die umfassende\n\tAusbildung an der Dualen Hochschule Stuttgart ermöglicht es\n\tAbsolventinnen und Absolventen des Studiengangs, Aufgaben in vielen\n\tTätigkeitsfeldern zu übernehmen.\n\t"},{informatik:"https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_960_720.jpg",elektrotechnik:"https://cdn.pixabay.com/photo/2014/09/20/13/52/board-453758_960_720.jpg",maschinenbau:"https://cdn.pixabay.com/photo/2016/03/04/19/36/gears-1236578_960_720.jpg"},function(e){if("services"===e.detail)n(0,r=!0),document.body.style.overflow="hidden";else{document.getElementById(e.detail).scrollIntoView({behavior:"smooth"})}},function(e){n(0,r=!1),document.body.style.overflow="auto"}]}return new class extends q{constructor(e){super(),U(this,e,He,Me,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
