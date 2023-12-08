function Ig(r,a){return function(){return r.apply(a,arguments)}}const{toString:lO}=Object.prototype,{getPrototypeOf:Ks}=Object,B6=(r=>a=>{const d=lO.call(a);return r[d]||(r[d]=d.slice(8,-1).toLowerCase())})(Object.create(null)),mt=r=>(r=r.toLowerCase(),a=>B6(a)===r),P6=r=>a=>typeof a===r,{isArray:K4}=Array,ti=P6("undefined");function dO(r){return r!==null&&!ti(r)&&r.constructor!==null&&!ti(r.constructor)&&Be(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Bg=mt("ArrayBuffer");function fO(r){let a;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?a=ArrayBuffer.isView(r):a=r&&r.buffer&&Bg(r.buffer),a}const uO=P6("string"),Be=P6("function"),Pg=P6("number"),O6=r=>r!==null&&typeof r=="object",hO=r=>r===!0||r===!1,f6=r=>{if(B6(r)!=="object")return!1;const a=Ks(r);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},mO=mt("Date"),pO=mt("File"),gO=mt("Blob"),bO=mt("FileList"),vO=r=>O6(r)&&Be(r.pipe),kO=r=>{let a;return r&&(typeof FormData=="function"&&r instanceof FormData||Be(r.append)&&((a=B6(r))==="formdata"||a==="object"&&Be(r.toString)&&r.toString()==="[object FormData]"))},CO=mt("URLSearchParams"),wO=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function bi(r,a,{allOwnKeys:d=!1}={}){if(r===null||typeof r>"u")return;let u,h;if(typeof r!="object"&&(r=[r]),K4(r))for(u=0,h=r.length;u<h;u++)a.call(null,r[u],u,r);else{const v=d?Object.getOwnPropertyNames(r):Object.keys(r),g=v.length;let C;for(u=0;u<g;u++)C=v[u],a.call(null,r[C],C,r)}}function Og(r,a){a=a.toLowerCase();const d=Object.keys(r);let u=d.length,h;for(;u-- >0;)if(h=d[u],a===h.toLowerCase())return h;return null}const Rg=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Fg=r=>!ti(r)&&r!==Rg;function fs(){const{caseless:r}=Fg(this)&&this||{},a={},d=(u,h)=>{const v=r&&Og(a,h)||h;f6(a[v])&&f6(u)?a[v]=fs(a[v],u):f6(u)?a[v]=fs({},u):K4(u)?a[v]=u.slice():a[v]=u};for(let u=0,h=arguments.length;u<h;u++)arguments[u]&&bi(arguments[u],d);return a}const AO=(r,a,d,{allOwnKeys:u}={})=>(bi(a,(h,v)=>{d&&Be(h)?r[v]=Ig(h,d):r[v]=h},{allOwnKeys:u}),r),_O=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),zO=(r,a,d,u)=>{r.prototype=Object.create(a.prototype,u),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:a.prototype}),d&&Object.assign(r.prototype,d)},yO=(r,a,d,u)=>{let h,v,g;const C={};if(a=a||{},r==null)return a;do{for(h=Object.getOwnPropertyNames(r),v=h.length;v-- >0;)g=h[v],(!u||u(g,r,a))&&!C[g]&&(a[g]=r[g],C[g]=!0);r=d!==!1&&Ks(r)}while(r&&(!d||d(r,a))&&r!==Object.prototype);return a},MO=(r,a,d)=>{r=String(r),(d===void 0||d>r.length)&&(d=r.length),d-=a.length;const u=r.indexOf(a,d);return u!==-1&&u===d},xO=r=>{if(!r)return null;if(K4(r))return r;let a=r.length;if(!Pg(a))return null;const d=new Array(a);for(;a-- >0;)d[a]=r[a];return d},HO=(r=>a=>r&&a instanceof r)(typeof Uint8Array<"u"&&Ks(Uint8Array)),VO=(r,a)=>{const u=(r&&r[Symbol.iterator]).call(r);let h;for(;(h=u.next())&&!h.done;){const v=h.value;a.call(r,v[0],v[1])}},LO=(r,a)=>{let d;const u=[];for(;(d=r.exec(a))!==null;)u.push(d);return u},SO=mt("HTMLFormElement"),EO=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(d,u,h){return u.toUpperCase()+h}),Wm=(({hasOwnProperty:r})=>(a,d)=>r.call(a,d))(Object.prototype),NO=mt("RegExp"),jg=(r,a)=>{const d=Object.getOwnPropertyDescriptors(r),u={};bi(d,(h,v)=>{let g;(g=a(h,v,r))!==!1&&(u[v]=g||h)}),Object.defineProperties(r,u)},DO=r=>{jg(r,(a,d)=>{if(Be(r)&&["arguments","caller","callee"].indexOf(d)!==-1)return!1;const u=r[d];if(Be(u)){if(a.enumerable=!1,"writable"in a){a.writable=!1;return}a.set||(a.set=()=>{throw Error("Can not rewrite read-only method '"+d+"'")})}})},TO=(r,a)=>{const d={},u=h=>{h.forEach(v=>{d[v]=!0})};return K4(r)?u(r):u(String(r).split(a)),d},IO=()=>{},BO=(r,a)=>(r=+r,Number.isFinite(r)?r:a),q0="abcdefghijklmnopqrstuvwxyz",$m="0123456789",Ug={DIGIT:$m,ALPHA:q0,ALPHA_DIGIT:q0+q0.toUpperCase()+$m},PO=(r=16,a=Ug.ALPHA_DIGIT)=>{let d="";const{length:u}=a;for(;r--;)d+=a[Math.random()*u|0];return d};function OO(r){return!!(r&&Be(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const RO=r=>{const a=new Array(10),d=(u,h)=>{if(O6(u)){if(a.indexOf(u)>=0)return;if(!("toJSON"in u)){a[h]=u;const v=K4(u)?[]:{};return bi(u,(g,C)=>{const b=d(g,h+1);!ti(b)&&(v[C]=b)}),a[h]=void 0,v}}return u};return d(r,0)},FO=mt("AsyncFunction"),jO=r=>r&&(O6(r)||Be(r))&&Be(r.then)&&Be(r.catch),e1={isArray:K4,isArrayBuffer:Bg,isBuffer:dO,isFormData:kO,isArrayBufferView:fO,isString:uO,isNumber:Pg,isBoolean:hO,isObject:O6,isPlainObject:f6,isUndefined:ti,isDate:mO,isFile:pO,isBlob:gO,isRegExp:NO,isFunction:Be,isStream:vO,isURLSearchParams:CO,isTypedArray:HO,isFileList:bO,forEach:bi,merge:fs,extend:AO,trim:wO,stripBOM:_O,inherits:zO,toFlatObject:yO,kindOf:B6,kindOfTest:mt,endsWith:MO,toArray:xO,forEachEntry:VO,matchAll:LO,isHTMLForm:SO,hasOwnProperty:Wm,hasOwnProp:Wm,reduceDescriptors:jg,freezeMethods:DO,toObjectSet:TO,toCamelCase:EO,noop:IO,toFiniteNumber:BO,findKey:Og,global:Rg,isContextDefined:Fg,ALPHABET:Ug,generateString:PO,isSpecCompliantForm:OO,toJSONObject:RO,isAsyncFn:FO,isThenable:jO};function Y1(r,a,d,u,h){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",a&&(this.code=a),d&&(this.config=d),u&&(this.request=u),h&&(this.response=h)}e1.inherits(Y1,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:e1.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const qg=Y1.prototype,Gg={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{Gg[r]={value:r}});Object.defineProperties(Y1,Gg);Object.defineProperty(qg,"isAxiosError",{value:!0});Y1.from=(r,a,d,u,h,v)=>{const g=Object.create(qg);return e1.toFlatObject(r,g,function(b){return b!==Error.prototype},C=>C!=="isAxiosError"),Y1.call(g,r.message,a,d,u,h),g.cause=r,g.name=r.name,v&&Object.assign(g,v),g};const UO=null;function us(r){return e1.isPlainObject(r)||e1.isArray(r)}function Wg(r){return e1.endsWith(r,"[]")?r.slice(0,-2):r}function Zm(r,a,d){return r?r.concat(a).map(function(h,v){return h=Wg(h),!d&&v?"["+h+"]":h}).join(d?".":""):a}function qO(r){return e1.isArray(r)&&!r.some(us)}const GO=e1.toFlatObject(e1,{},null,function(a){return/^is[A-Z]/.test(a)});function R6(r,a,d){if(!e1.isObject(r))throw new TypeError("target must be an object");a=a||new FormData,d=e1.toFlatObject(d,{metaTokens:!0,dots:!1,indexes:!1},!1,function(N,I){return!e1.isUndefined(I[N])});const u=d.metaTokens,h=d.visitor||z,v=d.dots,g=d.indexes,b=(d.Blob||typeof Blob<"u"&&Blob)&&e1.isSpecCompliantForm(a);if(!e1.isFunction(h))throw new TypeError("visitor must be a function");function y(L){if(L===null)return"";if(e1.isDate(L))return L.toISOString();if(!b&&e1.isBlob(L))throw new Y1("Blob is not supported. Use a Buffer instead.");return e1.isArrayBuffer(L)||e1.isTypedArray(L)?b&&typeof Blob=="function"?new Blob([L]):Buffer.from(L):L}function z(L,N,I){let T=L;if(L&&!I&&typeof L=="object"){if(e1.endsWith(N,"{}"))N=u?N:N.slice(0,-2),L=JSON.stringify(L);else if(e1.isArray(L)&&qO(L)||(e1.isFileList(L)||e1.endsWith(N,"[]"))&&(T=e1.toArray(L)))return N=Wg(N),T.forEach(function(P,R){!(e1.isUndefined(P)||P===null)&&a.append(g===!0?Zm([N],R,v):g===null?N:N+"[]",y(P))}),!1}return us(L)?!0:(a.append(Zm(I,N,v),y(L)),!1)}const _=[],w=Object.assign(GO,{defaultVisitor:z,convertValue:y,isVisitable:us});function M(L,N){if(!e1.isUndefined(L)){if(_.indexOf(L)!==-1)throw Error("Circular reference detected in "+N.join("."));_.push(L),e1.forEach(L,function(T,E){(!(e1.isUndefined(T)||T===null)&&h.call(a,T,e1.isString(E)?E.trim():E,N,w))===!0&&M(T,N?N.concat(E):[E])}),_.pop()}}if(!e1.isObject(r))throw new TypeError("data must be an object");return M(r),a}function Km(r){const a={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(u){return a[u]})}function Ys(r,a){this._pairs=[],r&&R6(r,this,a)}const $g=Ys.prototype;$g.append=function(a,d){this._pairs.push([a,d])};$g.toString=function(a){const d=a?function(u){return a.call(this,u,Km)}:Km;return this._pairs.map(function(h){return d(h[0])+"="+d(h[1])},"").join("&")};function WO(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Zg(r,a,d){if(!a)return r;const u=d&&d.encode||WO,h=d&&d.serialize;let v;if(h?v=h(a,d):v=e1.isURLSearchParams(a)?a.toString():new Ys(a,d).toString(u),v){const g=r.indexOf("#");g!==-1&&(r=r.slice(0,g)),r+=(r.indexOf("?")===-1?"?":"&")+v}return r}class $O{constructor(){this.handlers=[]}use(a,d,u){return this.handlers.push({fulfilled:a,rejected:d,synchronous:u?u.synchronous:!1,runWhen:u?u.runWhen:null}),this.handlers.length-1}eject(a){this.handlers[a]&&(this.handlers[a]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(a){e1.forEach(this.handlers,function(u){u!==null&&a(u)})}}const Ym=$O,Kg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ZO=typeof URLSearchParams<"u"?URLSearchParams:Ys,KO=typeof FormData<"u"?FormData:null,YO=typeof Blob<"u"?Blob:null,QO=(()=>{let r;return typeof navigator<"u"&&((r=navigator.product)==="ReactNative"||r==="NativeScript"||r==="NS")?!1:typeof window<"u"&&typeof document<"u"})(),JO=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),ft={isBrowser:!0,classes:{URLSearchParams:ZO,FormData:KO,Blob:YO},isStandardBrowserEnv:QO,isStandardBrowserWebWorkerEnv:JO,protocols:["http","https","file","blob","url","data"]};function XO(r,a){return R6(r,new ft.classes.URLSearchParams,Object.assign({visitor:function(d,u,h,v){return ft.isNode&&e1.isBuffer(d)?(this.append(u,d.toString("base64")),!1):v.defaultVisitor.apply(this,arguments)}},a))}function eR(r){return e1.matchAll(/\w+|\[(\w*)]/g,r).map(a=>a[0]==="[]"?"":a[1]||a[0])}function tR(r){const a={},d=Object.keys(r);let u;const h=d.length;let v;for(u=0;u<h;u++)v=d[u],a[v]=r[v];return a}function Yg(r){function a(d,u,h,v){let g=d[v++];const C=Number.isFinite(+g),b=v>=d.length;return g=!g&&e1.isArray(h)?h.length:g,b?(e1.hasOwnProp(h,g)?h[g]=[h[g],u]:h[g]=u,!C):((!h[g]||!e1.isObject(h[g]))&&(h[g]=[]),a(d,u,h[g],v)&&e1.isArray(h[g])&&(h[g]=tR(h[g])),!C)}if(e1.isFormData(r)&&e1.isFunction(r.entries)){const d={};return e1.forEachEntry(r,(u,h)=>{a(eR(u),h,d,0)}),d}return null}function nR(r,a,d){if(e1.isString(r))try{return(a||JSON.parse)(r),e1.trim(r)}catch(u){if(u.name!=="SyntaxError")throw u}return(d||JSON.stringify)(r)}const Qs={transitional:Kg,adapter:["xhr","http"],transformRequest:[function(a,d){const u=d.getContentType()||"",h=u.indexOf("application/json")>-1,v=e1.isObject(a);if(v&&e1.isHTMLForm(a)&&(a=new FormData(a)),e1.isFormData(a))return h&&h?JSON.stringify(Yg(a)):a;if(e1.isArrayBuffer(a)||e1.isBuffer(a)||e1.isStream(a)||e1.isFile(a)||e1.isBlob(a))return a;if(e1.isArrayBufferView(a))return a.buffer;if(e1.isURLSearchParams(a))return d.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),a.toString();let C;if(v){if(u.indexOf("application/x-www-form-urlencoded")>-1)return XO(a,this.formSerializer).toString();if((C=e1.isFileList(a))||u.indexOf("multipart/form-data")>-1){const b=this.env&&this.env.FormData;return R6(C?{"files[]":a}:a,b&&new b,this.formSerializer)}}return v||h?(d.setContentType("application/json",!1),nR(a)):a}],transformResponse:[function(a){const d=this.transitional||Qs.transitional,u=d&&d.forcedJSONParsing,h=this.responseType==="json";if(a&&e1.isString(a)&&(u&&!this.responseType||h)){const g=!(d&&d.silentJSONParsing)&&h;try{return JSON.parse(a)}catch(C){if(g)throw C.name==="SyntaxError"?Y1.from(C,Y1.ERR_BAD_RESPONSE,this,null,this.response):C}}return a}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:ft.classes.FormData,Blob:ft.classes.Blob},validateStatus:function(a){return a>=200&&a<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};e1.forEach(["delete","get","head","post","put","patch"],r=>{Qs.headers[r]={}});const Js=Qs,iR=e1.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),oR=r=>{const a={};let d,u,h;return r&&r.split(`
`).forEach(function(g){h=g.indexOf(":"),d=g.substring(0,h).trim().toLowerCase(),u=g.substring(h+1).trim(),!(!d||a[d]&&iR[d])&&(d==="set-cookie"?a[d]?a[d].push(u):a[d]=[u]:a[d]=a[d]?a[d]+", "+u:u)}),a},Qm=Symbol("internals");function In(r){return r&&String(r).trim().toLowerCase()}function u6(r){return r===!1||r==null?r:e1.isArray(r)?r.map(u6):String(r)}function rR(r){const a=Object.create(null),d=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let u;for(;u=d.exec(r);)a[u[1]]=u[2];return a}const cR=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function G0(r,a,d,u,h){if(e1.isFunction(u))return u.call(this,a,d);if(h&&(a=d),!!e1.isString(a)){if(e1.isString(u))return a.indexOf(u)!==-1;if(e1.isRegExp(u))return u.test(a)}}function sR(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(a,d,u)=>d.toUpperCase()+u)}function aR(r,a){const d=e1.toCamelCase(" "+a);["get","set","has"].forEach(u=>{Object.defineProperty(r,u+d,{value:function(h,v,g){return this[u].call(this,a,h,v,g)},configurable:!0})})}class F6{constructor(a){a&&this.set(a)}set(a,d,u){const h=this;function v(C,b,y){const z=In(b);if(!z)throw new Error("header name must be a non-empty string");const _=e1.findKey(h,z);(!_||h[_]===void 0||y===!0||y===void 0&&h[_]!==!1)&&(h[_||b]=u6(C))}const g=(C,b)=>e1.forEach(C,(y,z)=>v(y,z,b));return e1.isPlainObject(a)||a instanceof this.constructor?g(a,d):e1.isString(a)&&(a=a.trim())&&!cR(a)?g(oR(a),d):a!=null&&v(d,a,u),this}get(a,d){if(a=In(a),a){const u=e1.findKey(this,a);if(u){const h=this[u];if(!d)return h;if(d===!0)return rR(h);if(e1.isFunction(d))return d.call(this,h,u);if(e1.isRegExp(d))return d.exec(h);throw new TypeError("parser must be boolean|regexp|function")}}}has(a,d){if(a=In(a),a){const u=e1.findKey(this,a);return!!(u&&this[u]!==void 0&&(!d||G0(this,this[u],u,d)))}return!1}delete(a,d){const u=this;let h=!1;function v(g){if(g=In(g),g){const C=e1.findKey(u,g);C&&(!d||G0(u,u[C],C,d))&&(delete u[C],h=!0)}}return e1.isArray(a)?a.forEach(v):v(a),h}clear(a){const d=Object.keys(this);let u=d.length,h=!1;for(;u--;){const v=d[u];(!a||G0(this,this[v],v,a,!0))&&(delete this[v],h=!0)}return h}normalize(a){const d=this,u={};return e1.forEach(this,(h,v)=>{const g=e1.findKey(u,v);if(g){d[g]=u6(h),delete d[v];return}const C=a?sR(v):String(v).trim();C!==v&&delete d[v],d[C]=u6(h),u[C]=!0}),this}concat(...a){return this.constructor.concat(this,...a)}toJSON(a){const d=Object.create(null);return e1.forEach(this,(u,h)=>{u!=null&&u!==!1&&(d[h]=a&&e1.isArray(u)?u.join(", "):u)}),d}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([a,d])=>a+": "+d).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(a){return a instanceof this?a:new this(a)}static concat(a,...d){const u=new this(a);return d.forEach(h=>u.set(h)),u}static accessor(a){const u=(this[Qm]=this[Qm]={accessors:{}}).accessors,h=this.prototype;function v(g){const C=In(g);u[C]||(aR(h,g),u[C]=!0)}return e1.isArray(a)?a.forEach(v):v(a),this}}F6.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);e1.reduceDescriptors(F6.prototype,({value:r},a)=>{let d=a[0].toUpperCase()+a.slice(1);return{get:()=>r,set(u){this[d]=u}}});e1.freezeMethods(F6);const Vt=F6;function W0(r,a){const d=this||Js,u=a||d,h=Vt.from(u.headers);let v=u.data;return e1.forEach(r,function(C){v=C.call(d,v,h.normalize(),a?a.status:void 0)}),h.normalize(),v}function Qg(r){return!!(r&&r.__CANCEL__)}function vi(r,a,d){Y1.call(this,r??"canceled",Y1.ERR_CANCELED,a,d),this.name="CanceledError"}e1.inherits(vi,Y1,{__CANCEL__:!0});function lR(r,a,d){const u=d.config.validateStatus;!d.status||!u||u(d.status)?r(d):a(new Y1("Request failed with status code "+d.status,[Y1.ERR_BAD_REQUEST,Y1.ERR_BAD_RESPONSE][Math.floor(d.status/100)-4],d.config,d.request,d))}const dR=ft.isStandardBrowserEnv?function(){return{write:function(d,u,h,v,g,C){const b=[];b.push(d+"="+encodeURIComponent(u)),e1.isNumber(h)&&b.push("expires="+new Date(h).toGMTString()),e1.isString(v)&&b.push("path="+v),e1.isString(g)&&b.push("domain="+g),C===!0&&b.push("secure"),document.cookie=b.join("; ")},read:function(d){const u=document.cookie.match(new RegExp("(^|;\\s*)("+d+")=([^;]*)"));return u?decodeURIComponent(u[3]):null},remove:function(d){this.write(d,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function fR(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function uR(r,a){return a?r.replace(/\/+$/,"")+"/"+a.replace(/^\/+/,""):r}function Jg(r,a){return r&&!fR(a)?uR(r,a):a}const hR=ft.isStandardBrowserEnv?function(){const a=/(msie|trident)/i.test(navigator.userAgent),d=document.createElement("a");let u;function h(v){let g=v;return a&&(d.setAttribute("href",g),g=d.href),d.setAttribute("href",g),{href:d.href,protocol:d.protocol?d.protocol.replace(/:$/,""):"",host:d.host,search:d.search?d.search.replace(/^\?/,""):"",hash:d.hash?d.hash.replace(/^#/,""):"",hostname:d.hostname,port:d.port,pathname:d.pathname.charAt(0)==="/"?d.pathname:"/"+d.pathname}}return u=h(window.location.href),function(g){const C=e1.isString(g)?h(g):g;return C.protocol===u.protocol&&C.host===u.host}}():function(){return function(){return!0}}();function mR(r){const a=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return a&&a[1]||""}function pR(r,a){r=r||10;const d=new Array(r),u=new Array(r);let h=0,v=0,g;return a=a!==void 0?a:1e3,function(b){const y=Date.now(),z=u[v];g||(g=y),d[h]=b,u[h]=y;let _=v,w=0;for(;_!==h;)w+=d[_++],_=_%r;if(h=(h+1)%r,h===v&&(v=(v+1)%r),y-g<a)return;const M=z&&y-z;return M?Math.round(w*1e3/M):void 0}}function Jm(r,a){let d=0;const u=pR(50,250);return h=>{const v=h.loaded,g=h.lengthComputable?h.total:void 0,C=v-d,b=u(C),y=v<=g;d=v;const z={loaded:v,total:g,progress:g?v/g:void 0,bytes:C,rate:b||void 0,estimated:b&&g&&y?(g-v)/b:void 0,event:h};z[a?"download":"upload"]=!0,r(z)}}const gR=typeof XMLHttpRequest<"u",bR=gR&&function(r){return new Promise(function(d,u){let h=r.data;const v=Vt.from(r.headers).normalize(),g=r.responseType;let C;function b(){r.cancelToken&&r.cancelToken.unsubscribe(C),r.signal&&r.signal.removeEventListener("abort",C)}let y;e1.isFormData(h)&&(ft.isStandardBrowserEnv||ft.isStandardBrowserWebWorkerEnv?v.setContentType(!1):v.getContentType(/^\s*multipart\/form-data/)?e1.isString(y=v.getContentType())&&v.setContentType(y.replace(/^\s*(multipart\/form-data);+/,"$1")):v.setContentType("multipart/form-data"));let z=new XMLHttpRequest;if(r.auth){const L=r.auth.username||"",N=r.auth.password?unescape(encodeURIComponent(r.auth.password)):"";v.set("Authorization","Basic "+btoa(L+":"+N))}const _=Jg(r.baseURL,r.url);z.open(r.method.toUpperCase(),Zg(_,r.params,r.paramsSerializer),!0),z.timeout=r.timeout;function w(){if(!z)return;const L=Vt.from("getAllResponseHeaders"in z&&z.getAllResponseHeaders()),I={data:!g||g==="text"||g==="json"?z.responseText:z.response,status:z.status,statusText:z.statusText,headers:L,config:r,request:z};lR(function(E){d(E),b()},function(E){u(E),b()},I),z=null}if("onloadend"in z?z.onloadend=w:z.onreadystatechange=function(){!z||z.readyState!==4||z.status===0&&!(z.responseURL&&z.responseURL.indexOf("file:")===0)||setTimeout(w)},z.onabort=function(){z&&(u(new Y1("Request aborted",Y1.ECONNABORTED,r,z)),z=null)},z.onerror=function(){u(new Y1("Network Error",Y1.ERR_NETWORK,r,z)),z=null},z.ontimeout=function(){let N=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const I=r.transitional||Kg;r.timeoutErrorMessage&&(N=r.timeoutErrorMessage),u(new Y1(N,I.clarifyTimeoutError?Y1.ETIMEDOUT:Y1.ECONNABORTED,r,z)),z=null},ft.isStandardBrowserEnv){const L=(r.withCredentials||hR(_))&&r.xsrfCookieName&&dR.read(r.xsrfCookieName);L&&v.set(r.xsrfHeaderName,L)}h===void 0&&v.setContentType(null),"setRequestHeader"in z&&e1.forEach(v.toJSON(),function(N,I){z.setRequestHeader(I,N)}),e1.isUndefined(r.withCredentials)||(z.withCredentials=!!r.withCredentials),g&&g!=="json"&&(z.responseType=r.responseType),typeof r.onDownloadProgress=="function"&&z.addEventListener("progress",Jm(r.onDownloadProgress,!0)),typeof r.onUploadProgress=="function"&&z.upload&&z.upload.addEventListener("progress",Jm(r.onUploadProgress)),(r.cancelToken||r.signal)&&(C=L=>{z&&(u(!L||L.type?new vi(null,r,z):L),z.abort(),z=null)},r.cancelToken&&r.cancelToken.subscribe(C),r.signal&&(r.signal.aborted?C():r.signal.addEventListener("abort",C)));const M=mR(_);if(M&&ft.protocols.indexOf(M)===-1){u(new Y1("Unsupported protocol "+M+":",Y1.ERR_BAD_REQUEST,r));return}z.send(h||null)})},hs={http:UO,xhr:bR};e1.forEach(hs,(r,a)=>{if(r){try{Object.defineProperty(r,"name",{value:a})}catch{}Object.defineProperty(r,"adapterName",{value:a})}});const Xm=r=>`- ${r}`,vR=r=>e1.isFunction(r)||r===null||r===!1,Xg={getAdapter:r=>{r=e1.isArray(r)?r:[r];const{length:a}=r;let d,u;const h={};for(let v=0;v<a;v++){d=r[v];let g;if(u=d,!vR(d)&&(u=hs[(g=String(d)).toLowerCase()],u===void 0))throw new Y1(`Unknown adapter '${g}'`);if(u)break;h[g||"#"+v]=u}if(!u){const v=Object.entries(h).map(([C,b])=>`adapter ${C} `+(b===!1?"is not supported by the environment":"is not available in the build"));let g=a?v.length>1?`since :
`+v.map(Xm).join(`
`):" "+Xm(v[0]):"as no adapter specified";throw new Y1("There is no suitable adapter to dispatch the request "+g,"ERR_NOT_SUPPORT")}return u},adapters:hs};function $0(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new vi(null,r)}function ep(r){return $0(r),r.headers=Vt.from(r.headers),r.data=W0.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Xg.getAdapter(r.adapter||Js.adapter)(r).then(function(u){return $0(r),u.data=W0.call(r,r.transformResponse,u),u.headers=Vt.from(u.headers),u},function(u){return Qg(u)||($0(r),u&&u.response&&(u.response.data=W0.call(r,r.transformResponse,u.response),u.response.headers=Vt.from(u.response.headers))),Promise.reject(u)})}const tp=r=>r instanceof Vt?r.toJSON():r;function P4(r,a){a=a||{};const d={};function u(y,z,_){return e1.isPlainObject(y)&&e1.isPlainObject(z)?e1.merge.call({caseless:_},y,z):e1.isPlainObject(z)?e1.merge({},z):e1.isArray(z)?z.slice():z}function h(y,z,_){if(e1.isUndefined(z)){if(!e1.isUndefined(y))return u(void 0,y,_)}else return u(y,z,_)}function v(y,z){if(!e1.isUndefined(z))return u(void 0,z)}function g(y,z){if(e1.isUndefined(z)){if(!e1.isUndefined(y))return u(void 0,y)}else return u(void 0,z)}function C(y,z,_){if(_ in a)return u(y,z);if(_ in r)return u(void 0,y)}const b={url:v,method:v,data:v,baseURL:g,transformRequest:g,transformResponse:g,paramsSerializer:g,timeout:g,timeoutMessage:g,withCredentials:g,adapter:g,responseType:g,xsrfCookieName:g,xsrfHeaderName:g,onUploadProgress:g,onDownloadProgress:g,decompress:g,maxContentLength:g,maxBodyLength:g,beforeRedirect:g,transport:g,httpAgent:g,httpsAgent:g,cancelToken:g,socketPath:g,responseEncoding:g,validateStatus:C,headers:(y,z)=>h(tp(y),tp(z),!0)};return e1.forEach(Object.keys(Object.assign({},r,a)),function(z){const _=b[z]||h,w=_(r[z],a[z],z);e1.isUndefined(w)&&_!==C||(d[z]=w)}),d}const eb="1.5.1",Xs={};["object","boolean","number","function","string","symbol"].forEach((r,a)=>{Xs[r]=function(u){return typeof u===r||"a"+(a<1?"n ":" ")+r}});const np={};Xs.transitional=function(a,d,u){function h(v,g){return"[Axios v"+eb+"] Transitional option '"+v+"'"+g+(u?". "+u:"")}return(v,g,C)=>{if(a===!1)throw new Y1(h(g," has been removed"+(d?" in "+d:"")),Y1.ERR_DEPRECATED);return d&&!np[g]&&(np[g]=!0,console.warn(h(g," has been deprecated since v"+d+" and will be removed in the near future"))),a?a(v,g,C):!0}};function kR(r,a,d){if(typeof r!="object")throw new Y1("options must be an object",Y1.ERR_BAD_OPTION_VALUE);const u=Object.keys(r);let h=u.length;for(;h-- >0;){const v=u[h],g=a[v];if(g){const C=r[v],b=C===void 0||g(C,v,r);if(b!==!0)throw new Y1("option "+v+" must be "+b,Y1.ERR_BAD_OPTION_VALUE);continue}if(d!==!0)throw new Y1("Unknown option "+v,Y1.ERR_BAD_OPTION)}}const ms={assertOptions:kR,validators:Xs},Zt=ms.validators;class w6{constructor(a){this.defaults=a,this.interceptors={request:new Ym,response:new Ym}}request(a,d){typeof a=="string"?(d=d||{},d.url=a):d=a||{},d=P4(this.defaults,d);const{transitional:u,paramsSerializer:h,headers:v}=d;u!==void 0&&ms.assertOptions(u,{silentJSONParsing:Zt.transitional(Zt.boolean),forcedJSONParsing:Zt.transitional(Zt.boolean),clarifyTimeoutError:Zt.transitional(Zt.boolean)},!1),h!=null&&(e1.isFunction(h)?d.paramsSerializer={serialize:h}:ms.assertOptions(h,{encode:Zt.function,serialize:Zt.function},!0)),d.method=(d.method||this.defaults.method||"get").toLowerCase();let g=v&&e1.merge(v.common,v[d.method]);v&&e1.forEach(["delete","get","head","post","put","patch","common"],L=>{delete v[L]}),d.headers=Vt.concat(g,v);const C=[];let b=!0;this.interceptors.request.forEach(function(N){typeof N.runWhen=="function"&&N.runWhen(d)===!1||(b=b&&N.synchronous,C.unshift(N.fulfilled,N.rejected))});const y=[];this.interceptors.response.forEach(function(N){y.push(N.fulfilled,N.rejected)});let z,_=0,w;if(!b){const L=[ep.bind(this),void 0];for(L.unshift.apply(L,C),L.push.apply(L,y),w=L.length,z=Promise.resolve(d);_<w;)z=z.then(L[_++],L[_++]);return z}w=C.length;let M=d;for(_=0;_<w;){const L=C[_++],N=C[_++];try{M=L(M)}catch(I){N.call(this,I);break}}try{z=ep.call(this,M)}catch(L){return Promise.reject(L)}for(_=0,w=y.length;_<w;)z=z.then(y[_++],y[_++]);return z}getUri(a){a=P4(this.defaults,a);const d=Jg(a.baseURL,a.url);return Zg(d,a.params,a.paramsSerializer)}}e1.forEach(["delete","get","head","options"],function(a){w6.prototype[a]=function(d,u){return this.request(P4(u||{},{method:a,url:d,data:(u||{}).data}))}});e1.forEach(["post","put","patch"],function(a){function d(u){return function(v,g,C){return this.request(P4(C||{},{method:a,headers:u?{"Content-Type":"multipart/form-data"}:{},url:v,data:g}))}}w6.prototype[a]=d(),w6.prototype[a+"Form"]=d(!0)});const h6=w6;class ea{constructor(a){if(typeof a!="function")throw new TypeError("executor must be a function.");let d;this.promise=new Promise(function(v){d=v});const u=this;this.promise.then(h=>{if(!u._listeners)return;let v=u._listeners.length;for(;v-- >0;)u._listeners[v](h);u._listeners=null}),this.promise.then=h=>{let v;const g=new Promise(C=>{u.subscribe(C),v=C}).then(h);return g.cancel=function(){u.unsubscribe(v)},g},a(function(v,g,C){u.reason||(u.reason=new vi(v,g,C),d(u.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(a){if(this.reason){a(this.reason);return}this._listeners?this._listeners.push(a):this._listeners=[a]}unsubscribe(a){if(!this._listeners)return;const d=this._listeners.indexOf(a);d!==-1&&this._listeners.splice(d,1)}static source(){let a;return{token:new ea(function(h){a=h}),cancel:a}}}const CR=ea;function wR(r){return function(d){return r.apply(null,d)}}function AR(r){return e1.isObject(r)&&r.isAxiosError===!0}const ps={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ps).forEach(([r,a])=>{ps[a]=r});const _R=ps;function tb(r){const a=new h6(r),d=Ig(h6.prototype.request,a);return e1.extend(d,h6.prototype,a,{allOwnKeys:!0}),e1.extend(d,a,null,{allOwnKeys:!0}),d.create=function(h){return tb(P4(r,h))},d}const O2=tb(Js);O2.Axios=h6;O2.CanceledError=vi;O2.CancelToken=CR;O2.isCancel=Qg;O2.VERSION=eb;O2.toFormData=R6;O2.AxiosError=Y1;O2.Cancel=O2.CanceledError;O2.all=function(a){return Promise.all(a)};O2.spread=wR;O2.isAxiosError=AR;O2.mergeConfig=P4;O2.AxiosHeaders=Vt;O2.formToJSON=r=>Yg(e1.isHTMLForm(r)?new FormData(r):r);O2.getAdapter=Xg.getAdapter;O2.HttpStatusCode=_R;O2.default=O2;const yt=O2;function j6(r,a){const d=Object.create(null),u=r.split(",");for(let h=0;h<u.length;h++)d[u[h]]=!0;return a?h=>!!d[h.toLowerCase()]:h=>!!d[h]}const f2={},L4=[],Xe=()=>{},zR=()=>!1,yR=/^on[^a-z]/,ki=r=>yR.test(r),ta=r=>r.startsWith("onUpdate:"),v2=Object.assign,na=(r,a)=>{const d=r.indexOf(a);d>-1&&r.splice(d,1)},MR=Object.prototype.hasOwnProperty,e2=(r,a)=>MR.call(r,a),y1=Array.isArray,S4=r=>Y4(r)==="[object Map]",X3=r=>Y4(r)==="[object Set]",ip=r=>Y4(r)==="[object Date]",xR=r=>Y4(r)==="[object RegExp]",I1=r=>typeof r=="function",y2=r=>typeof r=="string",ni=r=>typeof r=="symbol",h2=r=>r!==null&&typeof r=="object",ia=r=>h2(r)&&I1(r.then)&&I1(r.catch),nb=Object.prototype.toString,Y4=r=>nb.call(r),HR=r=>Y4(r).slice(8,-1),ib=r=>Y4(r)==="[object Object]",oa=r=>y2(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,Wn=j6(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),U6=r=>{const a=Object.create(null);return d=>a[d]||(a[d]=r(d))},VR=/-(\w)/g,Me=U6(r=>r.replace(VR,(a,d)=>d?d.toUpperCase():"")),LR=/\B([A-Z])/g,Te=U6(r=>r.replace(LR,"-$1").toLowerCase()),q6=U6(r=>r.charAt(0).toUpperCase()+r.slice(1)),m6=U6(r=>r?`on${q6(r)}`:""),O4=(r,a)=>!Object.is(r,a),E4=(r,a)=>{for(let d=0;d<r.length;d++)r[d](a)},A6=(r,a,d)=>{Object.defineProperty(r,a,{configurable:!0,enumerable:!1,value:d})},_6=r=>{const a=parseFloat(r);return isNaN(a)?r:a},z6=r=>{const a=y2(r)?Number(r):NaN;return isNaN(a)?r:a};let op;const gs=()=>op||(op=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}),SR="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console",ER=j6(SR);function Ci(r){if(y1(r)){const a={};for(let d=0;d<r.length;d++){const u=r[d],h=y2(u)?IR(u):Ci(u);if(h)for(const v in h)a[v]=h[v]}return a}else{if(y2(r))return r;if(h2(r))return r}}const NR=/;(?![^(]*\))/g,DR=/:([^]+)/,TR=/\/\*[^]*?\*\//g;function IR(r){const a={};return r.replace(TR,"").split(NR).forEach(d=>{if(d){const u=d.split(DR);u.length>1&&(a[u[0].trim()]=u[1].trim())}}),a}function Ie(r){let a="";if(y2(r))a=r;else if(y1(r))for(let d=0;d<r.length;d++){const u=Ie(r[d]);u&&(a+=u+" ")}else if(h2(r))for(const d in r)r[d]&&(a+=d+" ");return a.trim()}function CA1(r){if(!r)return null;let{class:a,style:d}=r;return a&&!y2(a)&&(r.class=Ie(a)),d&&(r.style=Ci(d)),r}const BR="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",PR=j6(BR);function ob(r){return!!r||r===""}function OR(r,a){if(r.length!==a.length)return!1;let d=!0;for(let u=0;d&&u<r.length;u++)d=s3(r[u],a[u]);return d}function s3(r,a){if(r===a)return!0;let d=ip(r),u=ip(a);if(d||u)return d&&u?r.getTime()===a.getTime():!1;if(d=ni(r),u=ni(a),d||u)return r===a;if(d=y1(r),u=y1(a),d||u)return d&&u?OR(r,a):!1;if(d=h2(r),u=h2(a),d||u){if(!d||!u)return!1;const h=Object.keys(r).length,v=Object.keys(a).length;if(h!==v)return!1;for(const g in r){const C=r.hasOwnProperty(g),b=a.hasOwnProperty(g);if(C&&!b||!C&&b||!s3(r[g],a[g]))return!1}}return String(r)===String(a)}function G6(r,a){return r.findIndex(d=>s3(d,a))}const s2=r=>y2(r)?r:r==null?"":y1(r)||h2(r)&&(r.toString===nb||!I1(r.toString))?JSON.stringify(r,rb,2):String(r),rb=(r,a)=>a&&a.__v_isRef?rb(r,a.value):S4(a)?{[`Map(${a.size})`]:[...a.entries()].reduce((d,[u,h])=>(d[`${u} =>`]=h,d),{})}:X3(a)?{[`Set(${a.size})`]:[...a.values()]}:h2(a)&&!y1(a)&&!ib(a)?String(a):a;let _e;class cb{constructor(a=!1){this.detached=a,this._active=!0,this.effects=[],this.cleanups=[],this.parent=_e,!a&&_e&&(this.index=(_e.scopes||(_e.scopes=[])).push(this)-1)}get active(){return this._active}run(a){if(this._active){const d=_e;try{return _e=this,a()}finally{_e=d}}}on(){_e=this}off(){_e=this.parent}stop(a){if(this._active){let d,u;for(d=0,u=this.effects.length;d<u;d++)this.effects[d].stop();for(d=0,u=this.cleanups.length;d<u;d++)this.cleanups[d]();if(this.scopes)for(d=0,u=this.scopes.length;d<u;d++)this.scopes[d].stop(!0);if(!this.detached&&this.parent&&!a){const h=this.parent.scopes.pop();h&&h!==this&&(this.parent.scopes[this.index]=h,h.index=this.index)}this.parent=void 0,this._active=!1}}}function wA1(r){return new cb(r)}function sb(r,a=_e){a&&a.active&&a.effects.push(r)}function RR(){return _e}function AA1(r){_e&&_e.cleanups.push(r)}const ra=r=>{const a=new Set(r);return a.w=0,a.n=0,a},ab=r=>(r.w&a3)>0,lb=r=>(r.n&a3)>0,FR=({deps:r})=>{if(r.length)for(let a=0;a<r.length;a++)r[a].w|=a3},jR=r=>{const{deps:a}=r;if(a.length){let d=0;for(let u=0;u<a.length;u++){const h=a[u];ab(h)&&!lb(h)?h.delete(r):a[d++]=h,h.w&=~a3,h.n&=~a3}a.length=d}},y6=new WeakMap;let jn=0,a3=1;const bs=30;let Ye;const $3=Symbol(""),vs=Symbol("");class W6{constructor(a,d=null,u){this.fn=a,this.scheduler=d,this.active=!0,this.deps=[],this.parent=void 0,sb(this,u)}run(){if(!this.active)return this.fn();let a=Ye,d=o3;for(;a;){if(a===this)return;a=a.parent}try{return this.parent=Ye,Ye=this,o3=!0,a3=1<<++jn,jn<=bs?FR(this):rp(this),this.fn()}finally{jn<=bs&&jR(this),a3=1<<--jn,Ye=this.parent,o3=d,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(rp(this),this.onStop&&this.onStop(),this.active=!1)}}function rp(r){const{deps:a}=r;if(a.length){for(let d=0;d<a.length;d++)a[d].delete(r);a.length=0}}function _A1(r,a){r.effect&&(r=r.effect.fn);const d=new W6(r);a&&(v2(d,a),a.scope&&sb(d,a.scope)),(!a||!a.lazy)&&d.run();const u=d.run.bind(d);return u.effect=d,u}function zA1(r){r.effect.stop()}let o3=!0;const db=[];function Q4(){db.push(o3),o3=!1}function J4(){const r=db.pop();o3=r===void 0?!0:r}function he(r,a,d){if(o3&&Ye){let u=y6.get(r);u||y6.set(r,u=new Map);let h=u.get(d);h||u.set(d,h=ra()),fb(h)}}function fb(r,a){let d=!1;jn<=bs?lb(r)||(r.n|=a3,d=!ab(r)):d=!r.has(Ye),d&&(r.add(Ye),Ye.deps.push(r))}function St(r,a,d,u,h,v){const g=y6.get(r);if(!g)return;let C=[];if(a==="clear")C=[...g.values()];else if(d==="length"&&y1(r)){const b=Number(u);g.forEach((y,z)=>{(z==="length"||z>=b)&&C.push(y)})}else switch(d!==void 0&&C.push(g.get(d)),a){case"add":y1(r)?oa(d)&&C.push(g.get("length")):(C.push(g.get($3)),S4(r)&&C.push(g.get(vs)));break;case"delete":y1(r)||(C.push(g.get($3)),S4(r)&&C.push(g.get(vs)));break;case"set":S4(r)&&C.push(g.get($3));break}if(C.length===1)C[0]&&ks(C[0]);else{const b=[];for(const y of C)y&&b.push(...y);ks(ra(b))}}function ks(r,a){const d=y1(r)?r:[...r];for(const u of d)u.computed&&cp(u);for(const u of d)u.computed||cp(u)}function cp(r,a){(r!==Ye||r.allowRecurse)&&(r.scheduler?r.scheduler():r.run())}function UR(r,a){var d;return(d=y6.get(r))==null?void 0:d.get(a)}const qR=j6("__proto__,__v_isRef,__isVue"),ub=new Set(Object.getOwnPropertyNames(Symbol).filter(r=>r!=="arguments"&&r!=="caller").map(r=>Symbol[r]).filter(ni)),GR=$6(),WR=$6(!1,!0),$R=$6(!0),ZR=$6(!0,!0),sp=KR();function KR(){const r={};return["includes","indexOf","lastIndexOf"].forEach(a=>{r[a]=function(...d){const u=Q1(this);for(let v=0,g=this.length;v<g;v++)he(u,"get",v+"");const h=u[a](...d);return h===-1||h===!1?u[a](...d.map(Q1)):h}}),["push","pop","shift","unshift","splice"].forEach(a=>{r[a]=function(...d){Q4();const u=Q1(this)[a].apply(this,d);return J4(),u}}),r}function YR(r){const a=Q1(this);return he(a,"has",r),a.hasOwnProperty(r)}function $6(r=!1,a=!1){return function(u,h,v){if(h==="__v_isReactive")return!r;if(h==="__v_isReadonly")return r;if(h==="__v_isShallow")return a;if(h==="__v_raw"&&v===(r?a?kb:vb:a?bb:gb).get(u))return u;const g=y1(u);if(!r){if(g&&e2(sp,h))return Reflect.get(sp,h,v);if(h==="hasOwnProperty")return YR}const C=Reflect.get(u,h,v);return(ni(h)?ub.has(h):qR(h))||(r||he(u,"get",h),a)?C:t2(C)?g&&oa(h)?C:C.value:h2(C)?r?wb(C):Y6(C):C}}const QR=hb(),JR=hb(!0);function hb(r=!1){return function(d,u,h,v){let g=d[u];if(R4(g)&&t2(g)&&!t2(h))return!1;if(!r&&(!M6(h)&&!R4(h)&&(g=Q1(g),h=Q1(h)),!y1(d)&&t2(g)&&!t2(h)))return g.value=h,!0;const C=y1(d)&&oa(u)?Number(u)<d.length:e2(d,u),b=Reflect.set(d,u,h,v);return d===Q1(v)&&(C?O4(h,g)&&St(d,"set",u,h):St(d,"add",u,h)),b}}function XR(r,a){const d=e2(r,a);r[a];const u=Reflect.deleteProperty(r,a);return u&&d&&St(r,"delete",a,void 0),u}function eF(r,a){const d=Reflect.has(r,a);return(!ni(a)||!ub.has(a))&&he(r,"has",a),d}function tF(r){return he(r,"iterate",y1(r)?"length":$3),Reflect.ownKeys(r)}const mb={get:GR,set:QR,deleteProperty:XR,has:eF,ownKeys:tF},pb={get:$R,set(r,a){return!0},deleteProperty(r,a){return!0}},nF=v2({},mb,{get:WR,set:JR}),iF=v2({},pb,{get:ZR}),ca=r=>r,Z6=r=>Reflect.getPrototypeOf(r);function Uo(r,a,d=!1,u=!1){r=r.__v_raw;const h=Q1(r),v=Q1(a);d||(a!==v&&he(h,"get",a),he(h,"get",v));const{has:g}=Z6(h),C=u?ca:d?sa:ii;if(g.call(h,a))return C(r.get(a));if(g.call(h,v))return C(r.get(v));r!==h&&r.get(a)}function qo(r,a=!1){const d=this.__v_raw,u=Q1(d),h=Q1(r);return a||(r!==h&&he(u,"has",r),he(u,"has",h)),r===h?d.has(r):d.has(r)||d.has(h)}function Go(r,a=!1){return r=r.__v_raw,!a&&he(Q1(r),"iterate",$3),Reflect.get(r,"size",r)}function ap(r){r=Q1(r);const a=Q1(this);return Z6(a).has.call(a,r)||(a.add(r),St(a,"add",r,r)),this}function lp(r,a){a=Q1(a);const d=Q1(this),{has:u,get:h}=Z6(d);let v=u.call(d,r);v||(r=Q1(r),v=u.call(d,r));const g=h.call(d,r);return d.set(r,a),v?O4(a,g)&&St(d,"set",r,a):St(d,"add",r,a),this}function dp(r){const a=Q1(this),{has:d,get:u}=Z6(a);let h=d.call(a,r);h||(r=Q1(r),h=d.call(a,r)),u&&u.call(a,r);const v=a.delete(r);return h&&St(a,"delete",r,void 0),v}function fp(){const r=Q1(this),a=r.size!==0,d=r.clear();return a&&St(r,"clear",void 0,void 0),d}function Wo(r,a){return function(u,h){const v=this,g=v.__v_raw,C=Q1(g),b=a?ca:r?sa:ii;return!r&&he(C,"iterate",$3),g.forEach((y,z)=>u.call(h,b(y),b(z),v))}}function $o(r,a,d){return function(...u){const h=this.__v_raw,v=Q1(h),g=S4(v),C=r==="entries"||r===Symbol.iterator&&g,b=r==="keys"&&g,y=h[r](...u),z=d?ca:a?sa:ii;return!a&&he(v,"iterate",b?vs:$3),{next(){const{value:_,done:w}=y.next();return w?{value:_,done:w}:{value:C?[z(_[0]),z(_[1])]:z(_),done:w}},[Symbol.iterator](){return this}}}}function Kt(r){return function(...a){return r==="delete"?!1:this}}function oF(){const r={get(v){return Uo(this,v)},get size(){return Go(this)},has:qo,add:ap,set:lp,delete:dp,clear:fp,forEach:Wo(!1,!1)},a={get(v){return Uo(this,v,!1,!0)},get size(){return Go(this)},has:qo,add:ap,set:lp,delete:dp,clear:fp,forEach:Wo(!1,!0)},d={get(v){return Uo(this,v,!0)},get size(){return Go(this,!0)},has(v){return qo.call(this,v,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Wo(!0,!1)},u={get(v){return Uo(this,v,!0,!0)},get size(){return Go(this,!0)},has(v){return qo.call(this,v,!0)},add:Kt("add"),set:Kt("set"),delete:Kt("delete"),clear:Kt("clear"),forEach:Wo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(v=>{r[v]=$o(v,!1,!1),d[v]=$o(v,!0,!1),a[v]=$o(v,!1,!0),u[v]=$o(v,!0,!0)}),[r,d,a,u]}const[rF,cF,sF,aF]=oF();function K6(r,a){const d=a?r?aF:sF:r?cF:rF;return(u,h,v)=>h==="__v_isReactive"?!r:h==="__v_isReadonly"?r:h==="__v_raw"?u:Reflect.get(e2(d,h)&&h in u?d:u,h,v)}const lF={get:K6(!1,!1)},dF={get:K6(!1,!0)},fF={get:K6(!0,!1)},uF={get:K6(!0,!0)},gb=new WeakMap,bb=new WeakMap,vb=new WeakMap,kb=new WeakMap;function hF(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mF(r){return r.__v_skip||!Object.isExtensible(r)?0:hF(HR(r))}function Y6(r){return R4(r)?r:Q6(r,!1,mb,lF,gb)}function Cb(r){return Q6(r,!1,nF,dF,bb)}function wb(r){return Q6(r,!0,pb,fF,vb)}function yA1(r){return Q6(r,!0,iF,uF,kb)}function Q6(r,a,d,u,h){if(!h2(r)||r.__v_raw&&!(a&&r.__v_isReactive))return r;const v=h.get(r);if(v)return v;const g=mF(r);if(g===0)return r;const C=new Proxy(r,g===2?u:d);return h.set(r,C),C}function N4(r){return R4(r)?N4(r.__v_raw):!!(r&&r.__v_isReactive)}function R4(r){return!!(r&&r.__v_isReadonly)}function M6(r){return!!(r&&r.__v_isShallow)}function Ab(r){return N4(r)||R4(r)}function Q1(r){const a=r&&r.__v_raw;return a?Q1(a):r}function _b(r){return A6(r,"__v_skip",!0),r}const ii=r=>h2(r)?Y6(r):r,sa=r=>h2(r)?wb(r):r;function aa(r){o3&&Ye&&(r=Q1(r),fb(r.dep||(r.dep=ra())))}function J6(r,a){r=Q1(r);const d=r.dep;d&&ks(d)}function t2(r){return!!(r&&r.__v_isRef===!0)}function P1(r){return zb(r,!1)}function pF(r){return zb(r,!0)}function zb(r,a){return t2(r)?r:new gF(r,a)}class gF{constructor(a,d){this.__v_isShallow=d,this.dep=void 0,this.__v_isRef=!0,this._rawValue=d?a:Q1(a),this._value=d?a:ii(a)}get value(){return aa(this),this._value}set value(a){const d=this.__v_isShallow||M6(a)||R4(a);a=d?a:Q1(a),O4(a,this._rawValue)&&(this._rawValue=a,this._value=d?a:ii(a),J6(this))}}function MA1(r){J6(r)}function j(r){return t2(r)?r.value:r}function xA1(r){return I1(r)?r():j(r)}const bF={get:(r,a,d)=>j(Reflect.get(r,a,d)),set:(r,a,d,u)=>{const h=r[a];return t2(h)&&!t2(d)?(h.value=d,!0):Reflect.set(r,a,d,u)}};function yb(r){return N4(r)?r:new Proxy(r,bF)}class vF{constructor(a){this.dep=void 0,this.__v_isRef=!0;const{get:d,set:u}=a(()=>aa(this),()=>J6(this));this._get=d,this._set=u}get value(){return this._get()}set value(a){this._set(a)}}function HA1(r){return new vF(r)}function VA1(r){const a=y1(r)?new Array(r.length):{};for(const d in r)a[d]=Mb(r,d);return a}class kF{constructor(a,d,u){this._object=a,this._key=d,this._defaultValue=u,this.__v_isRef=!0}get value(){const a=this._object[this._key];return a===void 0?this._defaultValue:a}set value(a){this._object[this._key]=a}get dep(){return UR(Q1(this._object),this._key)}}class CF{constructor(a){this._getter=a,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function LA1(r,a,d){return t2(r)?r:I1(r)?new CF(r):h2(r)&&arguments.length>1?Mb(r,a,d):P1(r)}function Mb(r,a,d){const u=r[a];return t2(u)?u:new kF(r,a,d)}class wF{constructor(a,d,u,h){this._setter=d,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new W6(a,()=>{this._dirty||(this._dirty=!0,J6(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!h,this.__v_isReadonly=u}get value(){const a=Q1(this);return aa(a),(a._dirty||!a._cacheable)&&(a._dirty=!1,a._value=a.effect.run()),a._value}set value(a){this._setter(a)}}function AF(r,a,d=!1){let u,h;const v=I1(r);return v?(u=r,h=Xe):(u=r.get,h=r.set),new wF(u,h,v||!h,d)}function SA1(r,...a){}function EA1(r,a){}function r3(r,a,d,u){let h;try{h=u?r(...u):r()}catch(v){X4(v,a,d)}return h}function Pe(r,a,d,u){if(I1(r)){const v=r3(r,a,d,u);return v&&ia(v)&&v.catch(g=>{X4(g,a,d)}),v}const h=[];for(let v=0;v<r.length;v++)h.push(Pe(r[v],a,d,u));return h}function X4(r,a,d,u=!0){const h=a?a.vnode:null;if(a){let v=a.parent;const g=a.proxy,C=d;for(;v;){const y=v.ec;if(y){for(let z=0;z<y.length;z++)if(y[z](r,g,C)===!1)return}v=v.parent}const b=a.appContext.config.errorHandler;if(b){r3(b,null,10,[r,g,C]);return}}_F(r,d,h,u)}function _F(r,a,d,u=!0){console.error(r)}let oi=!1,Cs=!1;const ee=[];let dt=0;const D4=[];let Mt=null,j3=0;const xb=Promise.resolve();let la=null;function da(r){const a=la||xb;return r?a.then(this?r.bind(this):r):a}function zF(r){let a=dt+1,d=ee.length;for(;a<d;){const u=a+d>>>1;ri(ee[u])<r?a=u+1:d=u}return a}function X6(r){(!ee.length||!ee.includes(r,oi&&r.allowRecurse?dt+1:dt))&&(r.id==null?ee.push(r):ee.splice(zF(r.id),0,r),Hb())}function Hb(){!oi&&!Cs&&(Cs=!0,la=xb.then(Lb))}function yF(r){const a=ee.indexOf(r);a>dt&&ee.splice(a,1)}function Vb(r){y1(r)?D4.push(...r):(!Mt||!Mt.includes(r,r.allowRecurse?j3+1:j3))&&D4.push(r),Hb()}function up(r,a=oi?dt+1:0){for(;a<ee.length;a++){const d=ee[a];d&&d.pre&&(ee.splice(a,1),a--,d())}}function x6(r){if(D4.length){const a=[...new Set(D4)];if(D4.length=0,Mt){Mt.push(...a);return}for(Mt=a,Mt.sort((d,u)=>ri(d)-ri(u)),j3=0;j3<Mt.length;j3++)Mt[j3]();Mt=null,j3=0}}const ri=r=>r.id==null?1/0:r.id,MF=(r,a)=>{const d=ri(r)-ri(a);if(d===0){if(r.pre&&!a.pre)return-1;if(a.pre&&!r.pre)return 1}return d};function Lb(r){Cs=!1,oi=!0,ee.sort(MF);const a=Xe;try{for(dt=0;dt<ee.length;dt++){const d=ee[dt];d&&d.active!==!1&&r3(d,null,14)}}finally{dt=0,ee.length=0,x6(),oi=!1,la=null,(ee.length||D4.length)&&Lb()}}let Bn,Zo=[];function xF(r,a){var d,u;Bn=r,Bn?(Bn.enabled=!0,Zo.forEach(({event:h,args:v})=>Bn.emit(h,...v)),Zo=[]):typeof window<"u"&&window.HTMLElement&&!((u=(d=window.navigator)==null?void 0:d.userAgent)!=null&&u.includes("jsdom"))?((a.__VUE_DEVTOOLS_HOOK_REPLAY__=a.__VUE_DEVTOOLS_HOOK_REPLAY__||[]).push(v=>{xF(v,a)}),setTimeout(()=>{Bn||(a.__VUE_DEVTOOLS_HOOK_REPLAY__=null,Zo=[])},3e3)):Zo=[]}function HF(r,a,...d){if(r.isUnmounted)return;const u=r.vnode.props||f2;let h=d;const v=a.startsWith("update:"),g=v&&a.slice(7);if(g&&g in u){const z=`${g==="modelValue"?"model":g}Modifiers`,{number:_,trim:w}=u[z]||f2;w&&(h=d.map(M=>y2(M)?M.trim():M)),_&&(h=d.map(_6))}let C,b=u[C=m6(a)]||u[C=m6(Me(a))];!b&&v&&(b=u[C=m6(Te(a))]),b&&Pe(b,r,6,h);const y=u[C+"Once"];if(y){if(!r.emitted)r.emitted={};else if(r.emitted[C])return;r.emitted[C]=!0,Pe(y,r,6,h)}}function Sb(r,a,d=!1){const u=a.emitsCache,h=u.get(r);if(h!==void 0)return h;const v=r.emits;let g={},C=!1;if(!I1(r)){const b=y=>{const z=Sb(y,a,!0);z&&(C=!0,v2(g,z))};!d&&a.mixins.length&&a.mixins.forEach(b),r.extends&&b(r.extends),r.mixins&&r.mixins.forEach(b)}return!v&&!C?(h2(r)&&u.set(r,null),null):(y1(v)?v.forEach(b=>g[b]=null):v2(g,v),h2(r)&&u.set(r,g),g)}function er(r,a){return!r||!ki(a)?!1:(a=a.slice(2).replace(/Once$/,""),e2(r,a[0].toLowerCase()+a.slice(1))||e2(r,Te(a))||e2(r,a))}let W2=null,tr=null;function ci(r){const a=W2;return W2=r,tr=r&&r.type.__scopeId||null,a}function NA1(r){tr=r}function DA1(){tr=null}const TA1=r=>g2;function g2(r,a=W2,d){if(!a||r._n)return r;const u=(...h)=>{u._d&&yp(-1);const v=ci(a);let g;try{g=r(...h)}finally{ci(v),u._d&&yp(1)}return g};return u._n=!0,u._c=!0,u._d=!0,u}function p6(r){const{type:a,vnode:d,proxy:u,withProxy:h,props:v,propsOptions:[g],slots:C,attrs:b,emit:y,render:z,renderCache:_,data:w,setupState:M,ctx:L,inheritAttrs:N}=r;let I,T;const E=ci(r);try{if(d.shapeFlag&4){const R=h||u;I=ze(z.call(R,R,_,v,M,w,L)),T=b}else{const R=a;I=ze(R.length>1?R(v,{attrs:b,slots:C,emit:y}):R(v,null)),T=a.props?b:LF(b)}}catch(R){Kn.length=0,X4(R,r,1),I=h1(ie)}let P=I;if(T&&N!==!1){const R=Object.keys(T),{shapeFlag:W}=P;R.length&&W&7&&(g&&R.some(ta)&&(T=SF(T,g)),P=Et(P,T))}return d.dirs&&(P=Et(P),P.dirs=P.dirs?P.dirs.concat(d.dirs):d.dirs),d.transition&&(P.transition=d.transition),I=P,ci(E),I}function VF(r){let a;for(let d=0;d<r.length;d++){const u=r[d];if(Y3(u)){if(u.type!==ie||u.children==="v-if"){if(a)return;a=u}}else return}return a}const LF=r=>{let a;for(const d in r)(d==="class"||d==="style"||ki(d))&&((a||(a={}))[d]=r[d]);return a},SF=(r,a)=>{const d={};for(const u in r)(!ta(u)||!(u.slice(9)in a))&&(d[u]=r[u]);return d};function EF(r,a,d){const{props:u,children:h,component:v}=r,{props:g,children:C,patchFlag:b}=a,y=v.emitsOptions;if(a.dirs||a.transition)return!0;if(d&&b>=0){if(b&1024)return!0;if(b&16)return u?hp(u,g,y):!!g;if(b&8){const z=a.dynamicProps;for(let _=0;_<z.length;_++){const w=z[_];if(g[w]!==u[w]&&!er(y,w))return!0}}}else return(h||C)&&(!C||!C.$stable)?!0:u===g?!1:u?g?hp(u,g,y):!0:!!g;return!1}function hp(r,a,d){const u=Object.keys(a);if(u.length!==Object.keys(r).length)return!0;for(let h=0;h<u.length;h++){const v=u[h];if(a[v]!==r[v]&&!er(d,v))return!0}return!1}function fa({vnode:r,parent:a},d){for(;a&&a.subTree===r;)(r=a.vnode).el=d,a=a.parent}const Eb=r=>r.__isSuspense,NF={name:"Suspense",__isSuspense:!0,process(r,a,d,u,h,v,g,C,b,y){r==null?DF(a,d,u,h,v,g,C,b,y):TF(r,a,d,u,h,g,C,b,y)},hydrate:IF,create:ua,normalize:BF},IA1=NF;function si(r,a){const d=r.props&&r.props[a];I1(d)&&d()}function DF(r,a,d,u,h,v,g,C,b){const{p:y,o:{createElement:z}}=b,_=z("div"),w=r.suspense=ua(r,h,u,a,_,d,v,g,C,b);y(null,w.pendingBranch=r.ssContent,_,null,u,w,v,g),w.deps>0?(si(r,"onPending"),si(r,"onFallback"),y(null,r.ssFallback,a,d,u,null,v,g),T4(w,r.ssFallback)):w.resolve(!1,!0)}function TF(r,a,d,u,h,v,g,C,{p:b,um:y,o:{createElement:z}}){const _=a.suspense=r.suspense;_.vnode=a,a.el=r.el;const w=a.ssContent,M=a.ssFallback,{activeBranch:L,pendingBranch:N,isInFallback:I,isHydrating:T}=_;if(N)_.pendingBranch=w,Qe(w,N)?(b(N,w,_.hiddenContainer,null,h,_,v,g,C),_.deps<=0?_.resolve():I&&(b(L,M,d,u,h,null,v,g,C),T4(_,M))):(_.pendingId++,T?(_.isHydrating=!1,_.activeBranch=N):y(N,h,_),_.deps=0,_.effects.length=0,_.hiddenContainer=z("div"),I?(b(null,w,_.hiddenContainer,null,h,_,v,g,C),_.deps<=0?_.resolve():(b(L,M,d,u,h,null,v,g,C),T4(_,M))):L&&Qe(w,L)?(b(L,w,d,u,h,_,v,g,C),_.resolve(!0)):(b(null,w,_.hiddenContainer,null,h,_,v,g,C),_.deps<=0&&_.resolve()));else if(L&&Qe(w,L))b(L,w,d,u,h,_,v,g,C),T4(_,w);else if(si(a,"onPending"),_.pendingBranch=w,_.pendingId++,b(null,w,_.hiddenContainer,null,h,_,v,g,C),_.deps<=0)_.resolve();else{const{timeout:E,pendingId:P}=_;E>0?setTimeout(()=>{_.pendingId===P&&_.fallback(M)},E):E===0&&_.fallback(M)}}function ua(r,a,d,u,h,v,g,C,b,y,z=!1){const{p:_,m:w,um:M,n:L,o:{parentNode:N,remove:I}}=y;let T;const E=PF(r);E&&a!=null&&a.pendingBranch&&(T=a.pendingId,a.deps++);const P=r.props?z6(r.props.timeout):void 0,R={vnode:r,parent:a,parentComponent:d,isSVG:g,container:u,hiddenContainer:h,anchor:v,deps:0,pendingId:0,timeout:typeof P=="number"?P:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:z,isUnmounted:!1,effects:[],resolve(W=!1,i1=!1){const{vnode:K,activeBranch:S,pendingBranch:Y,pendingId:l1,effects:g1,parentComponent:d1,container:k1}=R;if(R.isHydrating)R.isHydrating=!1;else if(!W){const M1=S&&Y.transition&&Y.transition.mode==="out-in";M1&&(S.transition.afterLeave=()=>{l1===R.pendingId&&w(Y,k1,a1,0)});let{anchor:a1}=R;S&&(a1=L(S),M(S,d1,R,!0)),M1||w(Y,k1,a1,0)}T4(R,Y),R.pendingBranch=null,R.isInFallback=!1;let X=R.parent,s1=!1;for(;X;){if(X.pendingBranch){X.effects.push(...g1),s1=!0;break}X=X.parent}s1||Vb(g1),R.effects=[],E&&a&&a.pendingBranch&&T===a.pendingId&&(a.deps--,a.deps===0&&!i1&&a.resolve()),si(K,"onResolve")},fallback(W){if(!R.pendingBranch)return;const{vnode:i1,activeBranch:K,parentComponent:S,container:Y,isSVG:l1}=R;si(i1,"onFallback");const g1=L(K),d1=()=>{R.isInFallback&&(_(null,W,Y,g1,S,null,l1,C,b),T4(R,W))},k1=W.transition&&W.transition.mode==="out-in";k1&&(K.transition.afterLeave=d1),R.isInFallback=!0,M(K,S,null,!0),k1||d1()},move(W,i1,K){R.activeBranch&&w(R.activeBranch,W,i1,K),R.container=W},next(){return R.activeBranch&&L(R.activeBranch)},registerDep(W,i1){const K=!!R.pendingBranch;K&&R.deps++;const S=W.vnode.el;W.asyncDep.catch(Y=>{X4(Y,W,0)}).then(Y=>{if(W.isUnmounted||R.isUnmounted||R.pendingId!==W.suspenseId)return;W.asyncResolved=!0;const{vnode:l1}=W;xs(W,Y,!1),S&&(l1.el=S);const g1=!S&&W.subTree.el;i1(W,l1,N(S||W.subTree.el),S?null:L(W.subTree),R,g,b),g1&&I(g1),fa(W,l1.el),K&&--R.deps===0&&R.resolve()})},unmount(W,i1){R.isUnmounted=!0,R.activeBranch&&M(R.activeBranch,d,W,i1),R.pendingBranch&&M(R.pendingBranch,d,W,i1)}};return R}function IF(r,a,d,u,h,v,g,C,b){const y=a.suspense=ua(a,u,d,r.parentNode,document.createElement("div"),null,h,v,g,C,!0),z=b(r,y.pendingBranch=a.ssContent,d,y,v,g);return y.deps===0&&y.resolve(!1,!0),z}function BF(r){const{shapeFlag:a,children:d}=r,u=a&32;r.ssContent=mp(u?d.default:d),r.ssFallback=u?mp(d.fallback):h1(ie)}function mp(r){let a;if(I1(r)){const d=K3&&r._c;d&&(r._d=!1,E1()),r=r(),d&&(r._d=!0,a=ue,Qb())}return y1(r)&&(r=VF(r)),r=ze(r),a&&!r.dynamicChildren&&(r.dynamicChildren=a.filter(d=>d!==r)),r}function Nb(r,a){a&&a.pendingBranch?y1(r)?a.effects.push(...r):a.effects.push(r):Vb(r)}function T4(r,a){r.activeBranch=a;const{vnode:d,parentComponent:u}=r,h=d.el=a.el;u&&u.subTree===d&&(u.vnode.el=h,fa(u,h))}function PF(r){var a;return((a=r.props)==null?void 0:a.suspensible)!=null&&r.props.suspensible!==!1}function BA1(r,a){return wi(r,null,a)}function OF(r,a){return wi(r,null,{flush:"post"})}function PA1(r,a){return wi(r,null,{flush:"sync"})}const Ko={};function Lt(r,a,d){return wi(r,a,d)}function wi(r,a,{immediate:d,deep:u,flush:h,onTrack:v,onTrigger:g}=f2){var C;const b=RR()===((C=P2)==null?void 0:C.scope)?P2:null;let y,z=!1,_=!1;if(t2(r)?(y=()=>r.value,z=M6(r)):N4(r)?(y=()=>r,u=!0):y1(r)?(_=!0,z=r.some(R=>N4(R)||M6(R)),y=()=>r.map(R=>{if(t2(R))return R.value;if(N4(R))return q3(R);if(I1(R))return r3(R,b,2)})):I1(r)?a?y=()=>r3(r,b,2):y=()=>{if(!(b&&b.isUnmounted))return w&&w(),Pe(r,b,3,[M])}:y=Xe,a&&u){const R=y;y=()=>q3(R())}let w,M=R=>{w=E.onStop=()=>{r3(R,b,4)}},L;if(q4)if(M=Xe,a?d&&Pe(a,b,3,[y(),_?[]:void 0,M]):y(),h==="sync"){const R=Vj();L=R.__watcherHandles||(R.__watcherHandles=[])}else return Xe;let N=_?new Array(r.length).fill(Ko):Ko;const I=()=>{if(E.active)if(a){const R=E.run();(u||z||(_?R.some((W,i1)=>O4(W,N[i1])):O4(R,N)))&&(w&&w(),Pe(a,b,3,[R,N===Ko?void 0:_&&N[0]===Ko?[]:N,M]),N=R)}else E.run()};I.allowRecurse=!!a;let T;h==="sync"?T=I:h==="post"?T=()=>Y2(I,b&&b.suspense):(I.pre=!0,b&&(I.id=b.uid),T=()=>X6(I));const E=new W6(y,T);a?d?I():N=E.run():h==="post"?Y2(E.run.bind(E),b&&b.suspense):E.run();const P=()=>{E.stop(),b&&b.scope&&na(b.scope.effects,E)};return L&&L.push(P),P}function RF(r,a,d){const u=this.proxy,h=y2(r)?r.includes(".")?Db(u,r):()=>u[r]:r.bind(u,u);let v;I1(a)?v=a:(v=a.handler,d=a);const g=P2;l3(this);const C=wi(h,v.bind(u),d);return g?l3(g):c3(),C}function Db(r,a){const d=a.split(".");return()=>{let u=r;for(let h=0;h<d.length&&u;h++)u=u[d[h]];return u}}function q3(r,a){if(!h2(r)||r.__v_skip||(a=a||new Set,a.has(r)))return r;if(a.add(r),t2(r))q3(r.value,a);else if(y1(r))for(let d=0;d<r.length;d++)q3(r[d],a);else if(X3(r)||S4(r))r.forEach(d=>{q3(d,a)});else if(ib(r))for(const d in r)q3(r[d],a);return r}function _2(r,a){const d=W2;if(d===null)return r;const u=or(d)||d.proxy,h=r.dirs||(r.dirs=[]);for(let v=0;v<a.length;v++){let[g,C,b,y=f2]=a[v];g&&(I1(g)&&(g={mounted:g,updated:g}),g.deep&&q3(C),h.push({dir:g,instance:u,value:C,oldValue:void 0,arg:b,modifiers:y}))}return r}function lt(r,a,d,u){const h=r.dirs,v=a&&a.dirs;for(let g=0;g<h.length;g++){const C=h[g];v&&(C.oldValue=v[g].value);let b=C.dir[u];b&&(Q4(),Pe(b,d,8,[r.el,C,r,a]),J4())}}function Tb(){const r={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return me(()=>{r.isMounted=!0}),pa(()=>{r.isUnmounting=!0}),r}const De=[Function,Array],Ib={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:De,onEnter:De,onAfterEnter:De,onEnterCancelled:De,onBeforeLeave:De,onLeave:De,onAfterLeave:De,onLeaveCancelled:De,onBeforeAppear:De,onAppear:De,onAfterAppear:De,onAppearCancelled:De},FF={name:"BaseTransition",props:Ib,setup(r,{slots:a}){const d=m3(),u=Tb();let h;return()=>{const v=a.default&&ha(a.default(),!0);if(!v||!v.length)return;let g=v[0];if(v.length>1){for(const N of v)if(N.type!==ie){g=N;break}}const C=Q1(r),{mode:b}=C;if(u.isLeaving)return Z0(g);const y=pp(g);if(!y)return Z0(g);const z=ai(y,C,u,d);F4(y,z);const _=d.subTree,w=_&&pp(_);let M=!1;const{getTransitionKey:L}=y.type;if(L){const N=L();h===void 0?h=N:N!==h&&(h=N,M=!0)}if(w&&w.type!==ie&&(!Qe(y,w)||M)){const N=ai(w,C,u,d);if(F4(w,N),b==="out-in")return u.isLeaving=!0,N.afterLeave=()=>{u.isLeaving=!1,d.update.active!==!1&&d.update()},Z0(g);b==="in-out"&&y.type!==ie&&(N.delayLeave=(I,T,E)=>{const P=Bb(u,w);P[String(w.key)]=w,I._leaveCb=()=>{T(),I._leaveCb=void 0,delete z.delayedLeave},z.delayedLeave=E})}return g}}},jF=FF;function Bb(r,a){const{leavingVNodes:d}=r;let u=d.get(a.type);return u||(u=Object.create(null),d.set(a.type,u)),u}function ai(r,a,d,u){const{appear:h,mode:v,persisted:g=!1,onBeforeEnter:C,onEnter:b,onAfterEnter:y,onEnterCancelled:z,onBeforeLeave:_,onLeave:w,onAfterLeave:M,onLeaveCancelled:L,onBeforeAppear:N,onAppear:I,onAfterAppear:T,onAppearCancelled:E}=a,P=String(r.key),R=Bb(d,r),W=(S,Y)=>{S&&Pe(S,u,9,Y)},i1=(S,Y)=>{const l1=Y[1];W(S,Y),y1(S)?S.every(g1=>g1.length<=1)&&l1():S.length<=1&&l1()},K={mode:v,persisted:g,beforeEnter(S){let Y=C;if(!d.isMounted)if(h)Y=N||C;else return;S._leaveCb&&S._leaveCb(!0);const l1=R[P];l1&&Qe(r,l1)&&l1.el._leaveCb&&l1.el._leaveCb(),W(Y,[S])},enter(S){let Y=b,l1=y,g1=z;if(!d.isMounted)if(h)Y=I||b,l1=T||y,g1=E||z;else return;let d1=!1;const k1=S._enterCb=X=>{d1||(d1=!0,X?W(g1,[S]):W(l1,[S]),K.delayedLeave&&K.delayedLeave(),S._enterCb=void 0)};Y?i1(Y,[S,k1]):k1()},leave(S,Y){const l1=String(r.key);if(S._enterCb&&S._enterCb(!0),d.isUnmounting)return Y();W(_,[S]);let g1=!1;const d1=S._leaveCb=k1=>{g1||(g1=!0,Y(),k1?W(L,[S]):W(M,[S]),S._leaveCb=void 0,R[l1]===r&&delete R[l1])};R[l1]=r,w?i1(w,[S,d1]):d1()},clone(S){return ai(S,a,d,u)}};return K}function Z0(r){if(_i(r))return r=Et(r),r.children=null,r}function pp(r){return _i(r)?r.children?r.children[0]:void 0:r}function F4(r,a){r.shapeFlag&6&&r.component?F4(r.component.subTree,a):r.shapeFlag&128?(r.ssContent.transition=a.clone(r.ssContent),r.ssFallback.transition=a.clone(r.ssFallback)):r.transition=a}function ha(r,a=!1,d){let u=[],h=0;for(let v=0;v<r.length;v++){let g=r[v];const C=d==null?g.key:String(d)+String(g.key!=null?g.key:v);g.type===z2?(g.patchFlag&128&&h++,u=u.concat(ha(g.children,a,C))):(a||g.type!==ie)&&u.push(C!=null?Et(g,{key:C}):g)}if(h>1)for(let v=0;v<u.length;v++)u[v].patchFlag=-2;return u}function Ai(r,a){return I1(r)?(()=>v2({name:r.name},a,{setup:r}))():r}const Z3=r=>!!r.type.__asyncLoader;function OA1(r){I1(r)&&(r={loader:r});const{loader:a,loadingComponent:d,errorComponent:u,delay:h=200,timeout:v,suspensible:g=!0,onError:C}=r;let b=null,y,z=0;const _=()=>(z++,b=null,w()),w=()=>{let M;return b||(M=b=a().catch(L=>{if(L=L instanceof Error?L:new Error(String(L)),C)return new Promise((N,I)=>{C(L,()=>N(_()),()=>I(L),z+1)});throw L}).then(L=>M!==b&&b?b:(L&&(L.__esModule||L[Symbol.toStringTag]==="Module")&&(L=L.default),y=L,L)))};return Ai({name:"AsyncComponentWrapper",__asyncLoader:w,get __asyncResolved(){return y},setup(){const M=P2;if(y)return()=>K0(y,M);const L=E=>{b=null,X4(E,M,13,!u)};if(g&&M.suspense||q4)return w().then(E=>()=>K0(E,M)).catch(E=>(L(E),()=>u?h1(u,{error:E}):null));const N=P1(!1),I=P1(),T=P1(!!h);return h&&setTimeout(()=>{T.value=!1},h),v!=null&&setTimeout(()=>{if(!N.value&&!I.value){const E=new Error(`Async component timed out after ${v}ms.`);L(E),I.value=E}},v),w().then(()=>{N.value=!0,M.parent&&_i(M.parent.vnode)&&X6(M.parent.update)}).catch(E=>{L(E),I.value=E}),()=>{if(N.value&&y)return K0(y,M);if(I.value&&u)return h1(u,{error:I.value});if(d&&!T.value)return h1(d)}}})}function K0(r,a){const{ref:d,props:u,children:h,ce:v}=a.vnode,g=h1(r,u,h);return g.ref=d,g.ce=v,delete a.vnode.ce,g}const _i=r=>r.type.__isKeepAlive,UF={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(r,{slots:a}){const d=m3(),u=d.ctx;if(!u.renderer)return()=>{const E=a.default&&a.default();return E&&E.length===1?E[0]:E};const h=new Map,v=new Set;let g=null;const C=d.suspense,{renderer:{p:b,m:y,um:z,o:{createElement:_}}}=u,w=_("div");u.activate=(E,P,R,W,i1)=>{const K=E.component;y(E,P,R,0,C),b(K.vnode,E,P,R,K,C,W,E.slotScopeIds,i1),Y2(()=>{K.isDeactivated=!1,K.a&&E4(K.a);const S=E.props&&E.props.onVnodeMounted;S&&fe(S,K.parent,E)},C)},u.deactivate=E=>{const P=E.component;y(E,w,null,1,C),Y2(()=>{P.da&&E4(P.da);const R=E.props&&E.props.onVnodeUnmounted;R&&fe(R,P.parent,E),P.isDeactivated=!0},C)};function M(E){Y0(E),z(E,d,C,!0)}function L(E){h.forEach((P,R)=>{const W=Vs(P.type);W&&(!E||!E(W))&&N(R)})}function N(E){const P=h.get(E);!g||!Qe(P,g)?M(P):g&&Y0(g),h.delete(E),v.delete(E)}Lt(()=>[r.include,r.exclude],([E,P])=>{E&&L(R=>Un(E,R)),P&&L(R=>!Un(P,R))},{flush:"post",deep:!0});let I=null;const T=()=>{I!=null&&h.set(I,Q0(d.subTree))};return me(T),ma(T),pa(()=>{h.forEach(E=>{const{subTree:P,suspense:R}=d,W=Q0(P);if(E.type===W.type&&E.key===W.key){Y0(W);const i1=W.component.da;i1&&Y2(i1,R);return}M(E)})}),()=>{if(I=null,!a.default)return null;const E=a.default(),P=E[0];if(E.length>1)return g=null,E;if(!Y3(P)||!(P.shapeFlag&4)&&!(P.shapeFlag&128))return g=null,P;let R=Q0(P);const W=R.type,i1=Vs(Z3(R)?R.type.__asyncResolved||{}:W),{include:K,exclude:S,max:Y}=r;if(K&&(!i1||!Un(K,i1))||S&&i1&&Un(S,i1))return g=R,P;const l1=R.key==null?W:R.key,g1=h.get(l1);return R.el&&(R=Et(R),P.shapeFlag&128&&(P.ssContent=R)),I=l1,g1?(R.el=g1.el,R.component=g1.component,R.transition&&F4(R,R.transition),R.shapeFlag|=512,v.delete(l1),v.add(l1)):(v.add(l1),Y&&v.size>parseInt(Y,10)&&N(v.values().next().value)),R.shapeFlag|=256,g=R,Eb(P.type)?P:R}}},RA1=UF;function Un(r,a){return y1(r)?r.some(d=>Un(d,a)):y2(r)?r.split(",").includes(a):xR(r)?r.test(a):!1}function qF(r,a){Pb(r,"a",a)}function GF(r,a){Pb(r,"da",a)}function Pb(r,a,d=P2){const u=r.__wdc||(r.__wdc=()=>{let h=d;for(;h;){if(h.isDeactivated)return;h=h.parent}return r()});if(nr(a,u,d),d){let h=d.parent;for(;h&&h.parent;)_i(h.parent.vnode)&&WF(u,a,d,h),h=h.parent}}function WF(r,a,d,u){const h=nr(a,r,u,!0);zi(()=>{na(u[a],h)},d)}function Y0(r){r.shapeFlag&=-257,r.shapeFlag&=-513}function Q0(r){return r.shapeFlag&128?r.ssContent:r}function nr(r,a,d=P2,u=!1){if(d){const h=d[r]||(d[r]=[]),v=a.__weh||(a.__weh=(...g)=>{if(d.isUnmounted)return;Q4(),l3(d);const C=Pe(a,d,r,g);return c3(),J4(),C});return u?h.unshift(v):h.push(v),v}}const It=r=>(a,d=P2)=>(!q4||r==="sp")&&nr(r,(...u)=>a(...u),d),$F=It("bm"),me=It("m"),ZF=It("bu"),ma=It("u"),pa=It("bum"),zi=It("um"),KF=It("sp"),YF=It("rtg"),QF=It("rtc");function JF(r,a=P2){nr("ec",r,a)}const ga="components",XF="directives";function yi(r,a){return ba(ga,r,!0,a)||r}const Ob=Symbol.for("v-ndc");function FA1(r){return y2(r)?ba(ga,r,!1)||r:r||Ob}function jA1(r){return ba(XF,r)}function ba(r,a,d=!0,u=!1){const h=W2||P2;if(h){const v=h.type;if(r===ga){const C=Vs(v,!1);if(C&&(C===a||C===Me(a)||C===q6(Me(a))))return v}const g=gp(h[r]||v[r],a)||gp(h.appContext[r],a);return!g&&u?v:g}}function gp(r,a){return r&&(r[a]||r[Me(a)]||r[q6(Me(a))])}function g6(r,a,d,u){let h;const v=d&&d[u];if(y1(r)||y2(r)){h=new Array(r.length);for(let g=0,C=r.length;g<C;g++)h[g]=a(r[g],g,void 0,v&&v[g])}else if(typeof r=="number"){h=new Array(r);for(let g=0;g<r;g++)h[g]=a(g+1,g,void 0,v&&v[g])}else if(h2(r))if(r[Symbol.iterator])h=Array.from(r,(g,C)=>a(g,C,void 0,v&&v[C]));else{const g=Object.keys(r);h=new Array(g.length);for(let C=0,b=g.length;C<b;C++){const y=g[C];h[C]=a(r[y],y,C,v&&v[C])}}else h=[];return d&&(d[u]=h),h}function UA1(r,a){for(let d=0;d<a.length;d++){const u=a[d];if(y1(u))for(let h=0;h<u.length;h++)r[u[h].name]=u[h].fn;else u&&(r[u.name]=u.key?(...h)=>{const v=u.fn(...h);return v&&(v.key=u.key),v}:u.fn)}return r}function j4(r,a,d={},u,h){if(W2.isCE||W2.parent&&Z3(W2.parent)&&W2.parent.isCE)return a!=="default"&&(d.name=a),h1("slot",d,u&&u());let v=r[a];v&&v._c&&(v._d=!1),E1();const g=v&&Rb(v(d)),C=ye(z2,{key:d.key||g&&g.key||`_${a}`},g||(u?u():[]),g&&r._===1?64:-2);return!h&&C.scopeId&&(C.slotScopeIds=[C.scopeId+"-s"]),v&&v._c&&(v._d=!0),C}function Rb(r){return r.some(a=>Y3(a)?!(a.type===ie||a.type===z2&&!Rb(a.children)):!0)?r:null}function qA1(r,a){const d={};for(const u in r)d[a&&/[A-Z]/.test(u)?`on:${u}`:m6(u)]=r[u];return d}const ws=r=>r?tv(r)?or(r)||r.proxy:ws(r.parent):null,$n=v2(Object.create(null),{$:r=>r,$el:r=>r.vnode.el,$data:r=>r.data,$props:r=>r.props,$attrs:r=>r.attrs,$slots:r=>r.slots,$refs:r=>r.refs,$parent:r=>ws(r.parent),$root:r=>ws(r.root),$emit:r=>r.emit,$options:r=>va(r),$forceUpdate:r=>r.f||(r.f=()=>X6(r.update)),$nextTick:r=>r.n||(r.n=da.bind(r.proxy)),$watch:r=>RF.bind(r)}),J0=(r,a)=>r!==f2&&!r.__isScriptSetup&&e2(r,a),As={get({_:r},a){const{ctx:d,setupState:u,data:h,props:v,accessCache:g,type:C,appContext:b}=r;let y;if(a[0]!=="$"){const M=g[a];if(M!==void 0)switch(M){case 1:return u[a];case 2:return h[a];case 4:return d[a];case 3:return v[a]}else{if(J0(u,a))return g[a]=1,u[a];if(h!==f2&&e2(h,a))return g[a]=2,h[a];if((y=r.propsOptions[0])&&e2(y,a))return g[a]=3,v[a];if(d!==f2&&e2(d,a))return g[a]=4,d[a];_s&&(g[a]=0)}}const z=$n[a];let _,w;if(z)return a==="$attrs"&&he(r,"get",a),z(r);if((_=C.__cssModules)&&(_=_[a]))return _;if(d!==f2&&e2(d,a))return g[a]=4,d[a];if(w=b.config.globalProperties,e2(w,a))return w[a]},set({_:r},a,d){const{data:u,setupState:h,ctx:v}=r;return J0(h,a)?(h[a]=d,!0):u!==f2&&e2(u,a)?(u[a]=d,!0):e2(r.props,a)||a[0]==="$"&&a.slice(1)in r?!1:(v[a]=d,!0)},has({_:{data:r,setupState:a,accessCache:d,ctx:u,appContext:h,propsOptions:v}},g){let C;return!!d[g]||r!==f2&&e2(r,g)||J0(a,g)||(C=v[0])&&e2(C,g)||e2(u,g)||e2($n,g)||e2(h.config.globalProperties,g)},defineProperty(r,a,d){return d.get!=null?r._.accessCache[a]=0:e2(d,"value")&&this.set(r,a,d.value,null),Reflect.defineProperty(r,a,d)}},ej=v2({},As,{get(r,a){if(a!==Symbol.unscopables)return As.get(r,a,r)},has(r,a){return a[0]!=="_"&&!ER(a)}});function GA1(){return null}function WA1(){return null}function $A1(r){}function ZA1(r){}function KA1(){return null}function YA1(){}function QA1(r,a){return null}function JA1(){return Fb().slots}function XA1(){return Fb().attrs}function e_1(r,a,d){const u=m3();if(d&&d.local){const h=P1(r[a]);return Lt(()=>r[a],v=>h.value=v),Lt(h,v=>{v!==r[a]&&u.emit(`update:${a}`,v)}),h}else return{__v_isRef:!0,get value(){return r[a]},set value(h){u.emit(`update:${a}`,h)}}}function Fb(){const r=m3();return r.setupContext||(r.setupContext=ov(r))}function li(r){return y1(r)?r.reduce((a,d)=>(a[d]=null,a),{}):r}function t_1(r,a){const d=li(r);for(const u in a){if(u.startsWith("__skip"))continue;let h=d[u];h?y1(h)||I1(h)?h=d[u]={type:h,default:a[u]}:h.default=a[u]:h===null&&(h=d[u]={default:a[u]}),h&&a[`__skip_${u}`]&&(h.skipFactory=!0)}return d}function n_1(r,a){return!r||!a?r||a:y1(r)&&y1(a)?r.concat(a):v2({},li(r),li(a))}function i_1(r,a){const d={};for(const u in r)a.includes(u)||Object.defineProperty(d,u,{enumerable:!0,get:()=>r[u]});return d}function o_1(r){const a=m3();let d=r();return c3(),ia(d)&&(d=d.catch(u=>{throw l3(a),u})),[d,()=>l3(a)]}let _s=!0;function tj(r){const a=va(r),d=r.proxy,u=r.ctx;_s=!1,a.beforeCreate&&bp(a.beforeCreate,r,"bc");const{data:h,computed:v,methods:g,watch:C,provide:b,inject:y,created:z,beforeMount:_,mounted:w,beforeUpdate:M,updated:L,activated:N,deactivated:I,beforeDestroy:T,beforeUnmount:E,destroyed:P,unmounted:R,render:W,renderTracked:i1,renderTriggered:K,errorCaptured:S,serverPrefetch:Y,expose:l1,inheritAttrs:g1,components:d1,directives:k1,filters:X}=a;if(y&&nj(y,u,null),g)for(const a1 in g){const N1=g[a1];I1(N1)&&(u[a1]=N1.bind(d))}if(h){const a1=h.call(d,d);h2(a1)&&(r.data=Y6(a1))}if(_s=!0,v)for(const a1 in v){const N1=v[a1],R1=I1(N1)?N1.bind(d,d):I1(N1.get)?N1.get.bind(d,d):Xe,Oe=!I1(N1)&&I1(N1.set)?N1.set.bind(d):Xe,oe=Q2({get:R1,set:Oe});Object.defineProperty(u,a1,{enumerable:!0,configurable:!0,get:()=>oe.value,set:$2=>oe.value=$2})}if(C)for(const a1 in C)jb(C[a1],u,d,a1);if(b){const a1=I1(b)?b.call(d):b;Reflect.ownKeys(a1).forEach(N1=>{b6(N1,a1[N1])})}z&&bp(z,r,"c");function M1(a1,N1){y1(N1)?N1.forEach(R1=>a1(R1.bind(d))):N1&&a1(N1.bind(d))}if(M1($F,_),M1(me,w),M1(ZF,M),M1(ma,L),M1(qF,N),M1(GF,I),M1(JF,S),M1(QF,i1),M1(YF,K),M1(pa,E),M1(zi,R),M1(KF,Y),y1(l1))if(l1.length){const a1=r.exposed||(r.exposed={});l1.forEach(N1=>{Object.defineProperty(a1,N1,{get:()=>d[N1],set:R1=>d[N1]=R1})})}else r.exposed||(r.exposed={});W&&r.render===Xe&&(r.render=W),g1!=null&&(r.inheritAttrs=g1),d1&&(r.components=d1),k1&&(r.directives=k1)}function nj(r,a,d=Xe){y1(r)&&(r=zs(r));for(const u in r){const h=r[u];let v;h2(h)?"default"in h?v=ht(h.from||u,h.default,!0):v=ht(h.from||u):v=ht(h),t2(v)?Object.defineProperty(a,u,{enumerable:!0,configurable:!0,get:()=>v.value,set:g=>v.value=g}):a[u]=v}}function bp(r,a,d){Pe(y1(r)?r.map(u=>u.bind(a.proxy)):r.bind(a.proxy),a,d)}function jb(r,a,d,u){const h=u.includes(".")?Db(d,u):()=>d[u];if(y2(r)){const v=a[r];I1(v)&&Lt(h,v)}else if(I1(r))Lt(h,r.bind(d));else if(h2(r))if(y1(r))r.forEach(v=>jb(v,a,d,u));else{const v=I1(r.handler)?r.handler.bind(d):a[r.handler];I1(v)&&Lt(h,v,r)}}function va(r){const a=r.type,{mixins:d,extends:u}=a,{mixins:h,optionsCache:v,config:{optionMergeStrategies:g}}=r.appContext,C=v.get(a);let b;return C?b=C:!h.length&&!d&&!u?b=a:(b={},h.length&&h.forEach(y=>H6(b,y,g,!0)),H6(b,a,g)),h2(a)&&v.set(a,b),b}function H6(r,a,d,u=!1){const{mixins:h,extends:v}=a;v&&H6(r,v,d,!0),h&&h.forEach(g=>H6(r,g,d,!0));for(const g in a)if(!(u&&g==="expose")){const C=ij[g]||d&&d[g];r[g]=C?C(r[g],a[g]):a[g]}return r}const ij={data:vp,props:kp,emits:kp,methods:qn,computed:qn,beforeCreate:ne,created:ne,beforeMount:ne,mounted:ne,beforeUpdate:ne,updated:ne,beforeDestroy:ne,beforeUnmount:ne,destroyed:ne,unmounted:ne,activated:ne,deactivated:ne,errorCaptured:ne,serverPrefetch:ne,components:qn,directives:qn,watch:rj,provide:vp,inject:oj};function vp(r,a){return a?r?function(){return v2(I1(r)?r.call(this,this):r,I1(a)?a.call(this,this):a)}:a:r}function oj(r,a){return qn(zs(r),zs(a))}function zs(r){if(y1(r)){const a={};for(let d=0;d<r.length;d++)a[r[d]]=r[d];return a}return r}function ne(r,a){return r?[...new Set([].concat(r,a))]:a}function qn(r,a){return r?v2(Object.create(null),r,a):a}function kp(r,a){return r?y1(r)&&y1(a)?[...new Set([...r,...a])]:v2(Object.create(null),li(r),li(a??{})):a}function rj(r,a){if(!r)return a;if(!a)return r;const d=v2(Object.create(null),r);for(const u in a)d[u]=ne(r[u],a[u]);return d}function Ub(){return{app:null,config:{isNativeTag:zR,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cj=0;function sj(r,a){return function(u,h=null){I1(u)||(u=v2({},u)),h!=null&&!h2(h)&&(h=null);const v=Ub(),g=new Set;let C=!1;const b=v.app={_uid:cj++,_component:u,_props:h,_container:null,_context:v,_instance:null,version:Sj,get config(){return v.config},set config(y){},use(y,...z){return g.has(y)||(y&&I1(y.install)?(g.add(y),y.install(b,...z)):I1(y)&&(g.add(y),y(b,...z))),b},mixin(y){return v.mixins.includes(y)||v.mixins.push(y),b},component(y,z){return z?(v.components[y]=z,b):v.components[y]},directive(y,z){return z?(v.directives[y]=z,b):v.directives[y]},mount(y,z,_){if(!C){const w=h1(u,h);return w.appContext=v,z&&a?a(w,y):r(w,y,_),C=!0,b._container=y,y.__vue_app__=b,or(w.component)||w.component.proxy}},unmount(){C&&(r(null,b._container),delete b._container.__vue_app__)},provide(y,z){return v.provides[y]=z,b},runWithContext(y){di=b;try{return y()}finally{di=null}}};return b}}let di=null;function b6(r,a){if(P2){let d=P2.provides;const u=P2.parent&&P2.parent.provides;u===d&&(d=P2.provides=Object.create(u)),d[r]=a}}function ht(r,a,d=!1){const u=P2||W2;if(u||di){const h=u?u.parent==null?u.vnode.appContext&&u.vnode.appContext.provides:u.parent.provides:di._context.provides;if(h&&r in h)return h[r];if(arguments.length>1)return d&&I1(a)?a.call(u&&u.proxy):a}}function r_1(){return!!(P2||W2||di)}function aj(r,a,d,u=!1){const h={},v={};A6(v,ir,1),r.propsDefaults=Object.create(null),qb(r,a,h,v);for(const g in r.propsOptions[0])g in h||(h[g]=void 0);d?r.props=u?h:Cb(h):r.type.props?r.props=h:r.props=v,r.attrs=v}function lj(r,a,d,u){const{props:h,attrs:v,vnode:{patchFlag:g}}=r,C=Q1(h),[b]=r.propsOptions;let y=!1;if((u||g>0)&&!(g&16)){if(g&8){const z=r.vnode.dynamicProps;for(let _=0;_<z.length;_++){let w=z[_];if(er(r.emitsOptions,w))continue;const M=a[w];if(b)if(e2(v,w))M!==v[w]&&(v[w]=M,y=!0);else{const L=Me(w);h[L]=ys(b,C,L,M,r,!1)}else M!==v[w]&&(v[w]=M,y=!0)}}}else{qb(r,a,h,v)&&(y=!0);let z;for(const _ in C)(!a||!e2(a,_)&&((z=Te(_))===_||!e2(a,z)))&&(b?d&&(d[_]!==void 0||d[z]!==void 0)&&(h[_]=ys(b,C,_,void 0,r,!0)):delete h[_]);if(v!==C)for(const _ in v)(!a||!e2(a,_))&&(delete v[_],y=!0)}y&&St(r,"set","$attrs")}function qb(r,a,d,u){const[h,v]=r.propsOptions;let g=!1,C;if(a)for(let b in a){if(Wn(b))continue;const y=a[b];let z;h&&e2(h,z=Me(b))?!v||!v.includes(z)?d[z]=y:(C||(C={}))[z]=y:er(r.emitsOptions,b)||(!(b in u)||y!==u[b])&&(u[b]=y,g=!0)}if(v){const b=Q1(d),y=C||f2;for(let z=0;z<v.length;z++){const _=v[z];d[_]=ys(h,b,_,y[_],r,!e2(y,_))}}return g}function ys(r,a,d,u,h,v){const g=r[d];if(g!=null){const C=e2(g,"default");if(C&&u===void 0){const b=g.default;if(g.type!==Function&&!g.skipFactory&&I1(b)){const{propsDefaults:y}=h;d in y?u=y[d]:(l3(h),u=y[d]=b.call(null,a),c3())}else u=b}g[0]&&(v&&!C?u=!1:g[1]&&(u===""||u===Te(d))&&(u=!0))}return u}function Gb(r,a,d=!1){const u=a.propsCache,h=u.get(r);if(h)return h;const v=r.props,g={},C=[];let b=!1;if(!I1(r)){const z=_=>{b=!0;const[w,M]=Gb(_,a,!0);v2(g,w),M&&C.push(...M)};!d&&a.mixins.length&&a.mixins.forEach(z),r.extends&&z(r.extends),r.mixins&&r.mixins.forEach(z)}if(!v&&!b)return h2(r)&&u.set(r,L4),L4;if(y1(v))for(let z=0;z<v.length;z++){const _=Me(v[z]);Cp(_)&&(g[_]=f2)}else if(v)for(const z in v){const _=Me(z);if(Cp(_)){const w=v[z],M=g[_]=y1(w)||I1(w)?{type:w}:v2({},w);if(M){const L=_p(Boolean,M.type),N=_p(String,M.type);M[0]=L>-1,M[1]=N<0||L<N,(L>-1||e2(M,"default"))&&C.push(_)}}}const y=[g,C];return h2(r)&&u.set(r,y),y}function Cp(r){return r[0]!=="$"}function wp(r){const a=r&&r.toString().match(/^\s*(function|class) (\w+)/);return a?a[2]:r===null?"null":""}function Ap(r,a){return wp(r)===wp(a)}function _p(r,a){return y1(a)?a.findIndex(d=>Ap(d,r)):I1(a)&&Ap(a,r)?0:-1}const Wb=r=>r[0]==="_"||r==="$stable",ka=r=>y1(r)?r.map(ze):[ze(r)],dj=(r,a,d)=>{if(a._n)return a;const u=g2((...h)=>ka(a(...h)),d);return u._c=!1,u},$b=(r,a,d)=>{const u=r._ctx;for(const h in r){if(Wb(h))continue;const v=r[h];if(I1(v))a[h]=dj(h,v,u);else if(v!=null){const g=ka(v);a[h]=()=>g}}},Zb=(r,a)=>{const d=ka(a);r.slots.default=()=>d},fj=(r,a)=>{if(r.vnode.shapeFlag&32){const d=a._;d?(r.slots=Q1(a),A6(a,"_",d)):$b(a,r.slots={})}else r.slots={},a&&Zb(r,a);A6(r.slots,ir,1)},uj=(r,a,d)=>{const{vnode:u,slots:h}=r;let v=!0,g=f2;if(u.shapeFlag&32){const C=a._;C?d&&C===1?v=!1:(v2(h,a),!d&&C===1&&delete h._):(v=!a.$stable,$b(a,h)),g=a}else a&&(Zb(r,a),g={default:1});if(v)for(const C in h)!Wb(C)&&!(C in g)&&delete h[C]};function V6(r,a,d,u,h=!1){if(y1(r)){r.forEach((w,M)=>V6(w,a&&(y1(a)?a[M]:a),d,u,h));return}if(Z3(u)&&!h)return;const v=u.shapeFlag&4?or(u.component)||u.component.proxy:u.el,g=h?null:v,{i:C,r:b}=r,y=a&&a.r,z=C.refs===f2?C.refs={}:C.refs,_=C.setupState;if(y!=null&&y!==b&&(y2(y)?(z[y]=null,e2(_,y)&&(_[y]=null)):t2(y)&&(y.value=null)),I1(b))r3(b,C,12,[g,z]);else{const w=y2(b),M=t2(b);if(w||M){const L=()=>{if(r.f){const N=w?e2(_,b)?_[b]:z[b]:b.value;h?y1(N)&&na(N,v):y1(N)?N.includes(v)||N.push(v):w?(z[b]=[v],e2(_,b)&&(_[b]=z[b])):(b.value=[v],r.k&&(z[r.k]=b.value))}else w?(z[b]=g,e2(_,b)&&(_[b]=g)):M&&(b.value=g,r.k&&(z[r.k]=g))};g?(L.id=-1,Y2(L,d)):L()}}}let Yt=!1;const Yo=r=>/svg/.test(r.namespaceURI)&&r.tagName!=="foreignObject",Qo=r=>r.nodeType===8;function hj(r){const{mt:a,p:d,o:{patchProp:u,createText:h,nextSibling:v,parentNode:g,remove:C,insert:b,createComment:y}}=r,z=(T,E)=>{if(!E.hasChildNodes()){d(null,T,E),x6(),E._vnode=T;return}Yt=!1,_(E.firstChild,T,null,null,null),x6(),E._vnode=T,Yt&&console.error("Hydration completed but contains mismatches.")},_=(T,E,P,R,W,i1=!1)=>{const K=Qo(T)&&T.data==="[",S=()=>N(T,E,P,R,W,K),{type:Y,ref:l1,shapeFlag:g1,patchFlag:d1}=E;let k1=T.nodeType;E.el=T,d1===-2&&(i1=!1,E.dynamicChildren=null);let X=null;switch(Y){case U4:k1!==3?E.children===""?(b(E.el=h(""),g(T),T),X=T):X=S():(T.data!==E.children&&(Yt=!0,T.data=E.children),X=v(T));break;case ie:k1!==8||K?X=S():X=v(T);break;case I4:if(K&&(T=v(T),k1=T.nodeType),k1===1||k1===3){X=T;const s1=!E.children.length;for(let M1=0;M1<E.staticCount;M1++)s1&&(E.children+=X.nodeType===1?X.outerHTML:X.data),M1===E.staticCount-1&&(E.anchor=X),X=v(X);return K?v(X):X}else S();break;case z2:K?X=L(T,E,P,R,W,i1):X=S();break;default:if(g1&1)k1!==1||E.type.toLowerCase()!==T.tagName.toLowerCase()?X=S():X=w(T,E,P,R,W,i1);else if(g1&6){E.slotScopeIds=W;const s1=g(T);if(a(E,s1,null,P,R,Yo(s1),i1),X=K?I(T):v(T),X&&Qo(X)&&X.data==="teleport end"&&(X=v(X)),Z3(E)){let M1;K?(M1=h1(z2),M1.anchor=X?X.previousSibling:s1.lastChild):M1=T.nodeType===3?u2(""):h1("div"),M1.el=T,E.component.subTree=M1}}else g1&64?k1!==8?X=S():X=E.type.hydrate(T,E,P,R,W,i1,r,M):g1&128&&(X=E.type.hydrate(T,E,P,R,Yo(g(T)),W,i1,r,_))}return l1!=null&&V6(l1,null,R,E),X},w=(T,E,P,R,W,i1)=>{i1=i1||!!E.dynamicChildren;const{type:K,props:S,patchFlag:Y,shapeFlag:l1,dirs:g1}=E,d1=K==="input"&&g1||K==="option";if(d1||Y!==-1){if(g1&&lt(E,null,P,"created"),S)if(d1||!i1||Y&48)for(const X in S)(d1&&X.endsWith("value")||ki(X)&&!Wn(X))&&u(T,X,null,S[X],!1,void 0,P);else S.onClick&&u(T,"onClick",null,S.onClick,!1,void 0,P);let k1;if((k1=S&&S.onVnodeBeforeMount)&&fe(k1,P,E),g1&&lt(E,null,P,"beforeMount"),((k1=S&&S.onVnodeMounted)||g1)&&Nb(()=>{k1&&fe(k1,P,E),g1&&lt(E,null,P,"mounted")},R),l1&16&&!(S&&(S.innerHTML||S.textContent))){let X=M(T.firstChild,E,T,P,R,W,i1);for(;X;){Yt=!0;const s1=X;X=X.nextSibling,C(s1)}}else l1&8&&T.textContent!==E.children&&(Yt=!0,T.textContent=E.children)}return T.nextSibling},M=(T,E,P,R,W,i1,K)=>{K=K||!!E.dynamicChildren;const S=E.children,Y=S.length;for(let l1=0;l1<Y;l1++){const g1=K?S[l1]:S[l1]=ze(S[l1]);if(T)T=_(T,g1,R,W,i1,K);else{if(g1.type===U4&&!g1.children)continue;Yt=!0,d(null,g1,P,null,R,W,Yo(P),i1)}}return T},L=(T,E,P,R,W,i1)=>{const{slotScopeIds:K}=E;K&&(W=W?W.concat(K):K);const S=g(T),Y=M(v(T),E,S,P,R,W,i1);return Y&&Qo(Y)&&Y.data==="]"?v(E.anchor=Y):(Yt=!0,b(E.anchor=y("]"),S,Y),Y)},N=(T,E,P,R,W,i1)=>{if(Yt=!0,E.el=null,i1){const Y=I(T);for(;;){const l1=v(T);if(l1&&l1!==Y)C(l1);else break}}const K=v(T),S=g(T);return C(T),d(null,E,S,K,P,R,Yo(S),W),K},I=T=>{let E=0;for(;T;)if(T=v(T),T&&Qo(T)&&(T.data==="["&&E++,T.data==="]")){if(E===0)return v(T);E--}return T};return[z,_]}const Y2=Nb;function mj(r){return Kb(r)}function pj(r){return Kb(r,hj)}function Kb(r,a){const d=gs();d.__VUE__=!0;const{insert:u,remove:h,patchProp:v,createElement:g,createText:C,createComment:b,setText:y,setElementText:z,parentNode:_,nextSibling:w,setScopeId:M=Xe,insertStaticContent:L}=r,N=(O,U,G,J=null,t1=null,o1=null,w1=!1,f1=null,b1=!!U.dynamicChildren)=>{if(O===U)return;O&&!Qe(O,U)&&(J=Q(O),$2(O,t1,o1,!0),O=null),U.patchFlag===-2&&(b1=!1,U.dynamicChildren=null);const{type:c1,ref:_1,shapeFlag:C1}=U;switch(c1){case U4:I(O,U,G,J);break;case ie:T(O,U,G,J);break;case I4:O==null&&E(U,G,J,w1);break;case z2:d1(O,U,G,J,t1,o1,w1,f1,b1);break;default:C1&1?W(O,U,G,J,t1,o1,w1,f1,b1):C1&6?k1(O,U,G,J,t1,o1,w1,f1,b1):(C1&64||C1&128)&&c1.process(O,U,G,J,t1,o1,w1,f1,b1,p1)}_1!=null&&t1&&V6(_1,O&&O.ref,o1,U||O,!U)},I=(O,U,G,J)=>{if(O==null)u(U.el=C(U.children),G,J);else{const t1=U.el=O.el;U.children!==O.children&&y(t1,U.children)}},T=(O,U,G,J)=>{O==null?u(U.el=b(U.children||""),G,J):U.el=O.el},E=(O,U,G,J)=>{[O.el,O.anchor]=L(O.children,U,G,J,O.el,O.anchor)},P=({el:O,anchor:U},G,J)=>{let t1;for(;O&&O!==U;)t1=w(O),u(O,G,J),O=t1;u(U,G,J)},R=({el:O,anchor:U})=>{let G;for(;O&&O!==U;)G=w(O),h(O),O=G;h(U)},W=(O,U,G,J,t1,o1,w1,f1,b1)=>{w1=w1||U.type==="svg",O==null?i1(U,G,J,t1,o1,w1,f1,b1):Y(O,U,t1,o1,w1,f1,b1)},i1=(O,U,G,J,t1,o1,w1,f1)=>{let b1,c1;const{type:_1,props:C1,shapeFlag:L1,transition:B1,dirs:T1}=O;if(b1=O.el=g(O.type,o1,C1&&C1.is,C1),L1&8?z(b1,O.children):L1&16&&S(O.children,b1,null,J,t1,o1&&_1!=="foreignObject",w1,f1),T1&&lt(O,null,J,"created"),K(b1,O,O.scopeId,w1,J),C1){for(const i2 in C1)i2!=="value"&&!Wn(i2)&&v(b1,i2,null,C1[i2],o1,O.children,J,t1,D2);"value"in C1&&v(b1,"value",null,C1.value),(c1=C1.onVnodeBeforeMount)&&fe(c1,J,O)}T1&&lt(O,null,J,"beforeMount");const q1=(!t1||t1&&!t1.pendingBranch)&&B1&&!B1.persisted;q1&&B1.beforeEnter(b1),u(b1,U,G),((c1=C1&&C1.onVnodeMounted)||q1||T1)&&Y2(()=>{c1&&fe(c1,J,O),q1&&B1.enter(b1),T1&&lt(O,null,J,"mounted")},t1)},K=(O,U,G,J,t1)=>{if(G&&M(O,G),J)for(let o1=0;o1<J.length;o1++)M(O,J[o1]);if(t1){let o1=t1.subTree;if(U===o1){const w1=t1.vnode;K(O,w1,w1.scopeId,w1.slotScopeIds,t1.parent)}}},S=(O,U,G,J,t1,o1,w1,f1,b1=0)=>{for(let c1=b1;c1<O.length;c1++){const _1=O[c1]=f1?t3(O[c1]):ze(O[c1]);N(null,_1,U,G,J,t1,o1,w1,f1)}},Y=(O,U,G,J,t1,o1,w1)=>{const f1=U.el=O.el;let{patchFlag:b1,dynamicChildren:c1,dirs:_1}=U;b1|=O.patchFlag&16;const C1=O.props||f2,L1=U.props||f2;let B1;G&&R3(G,!1),(B1=L1.onVnodeBeforeUpdate)&&fe(B1,G,U,O),_1&&lt(U,O,G,"beforeUpdate"),G&&R3(G,!0);const T1=t1&&U.type!=="foreignObject";if(c1?l1(O.dynamicChildren,c1,f1,G,J,T1,o1):w1||N1(O,U,f1,null,G,J,T1,o1,!1),b1>0){if(b1&16)g1(f1,U,C1,L1,G,J,t1);else if(b1&2&&C1.class!==L1.class&&v(f1,"class",null,L1.class,t1),b1&4&&v(f1,"style",C1.style,L1.style,t1),b1&8){const q1=U.dynamicProps;for(let i2=0;i2<q1.length;i2++){const M2=q1[i2],pe=C1[M2],He=L1[M2];(He!==pe||M2==="value")&&v(f1,M2,pe,He,t1,O.children,G,J,D2)}}b1&1&&O.children!==U.children&&z(f1,U.children)}else!w1&&c1==null&&g1(f1,U,C1,L1,G,J,t1);((B1=L1.onVnodeUpdated)||_1)&&Y2(()=>{B1&&fe(B1,G,U,O),_1&&lt(U,O,G,"updated")},J)},l1=(O,U,G,J,t1,o1,w1)=>{for(let f1=0;f1<U.length;f1++){const b1=O[f1],c1=U[f1],_1=b1.el&&(b1.type===z2||!Qe(b1,c1)||b1.shapeFlag&70)?_(b1.el):G;N(b1,c1,_1,null,J,t1,o1,w1,!0)}},g1=(O,U,G,J,t1,o1,w1)=>{if(G!==J){if(G!==f2)for(const f1 in G)!Wn(f1)&&!(f1 in J)&&v(O,f1,G[f1],null,w1,U.children,t1,o1,D2);for(const f1 in J){if(Wn(f1))continue;const b1=J[f1],c1=G[f1];b1!==c1&&f1!=="value"&&v(O,f1,c1,b1,w1,U.children,t1,o1,D2)}"value"in J&&v(O,"value",G.value,J.value)}},d1=(O,U,G,J,t1,o1,w1,f1,b1)=>{const c1=U.el=O?O.el:C(""),_1=U.anchor=O?O.anchor:C("");let{patchFlag:C1,dynamicChildren:L1,slotScopeIds:B1}=U;B1&&(f1=f1?f1.concat(B1):B1),O==null?(u(c1,G,J),u(_1,G,J),S(U.children,G,_1,t1,o1,w1,f1,b1)):C1>0&&C1&64&&L1&&O.dynamicChildren?(l1(O.dynamicChildren,L1,G,t1,o1,w1,f1),(U.key!=null||t1&&U===t1.subTree)&&Ca(O,U,!0)):N1(O,U,G,_1,t1,o1,w1,f1,b1)},k1=(O,U,G,J,t1,o1,w1,f1,b1)=>{U.slotScopeIds=f1,O==null?U.shapeFlag&512?t1.ctx.activate(U,G,J,w1,b1):X(U,G,J,t1,o1,w1,b1):s1(O,U,b1)},X=(O,U,G,J,t1,o1,w1)=>{const f1=O.component=ev(O,J,t1);if(_i(O)&&(f1.ctx.renderer=p1),nv(f1),f1.asyncDep){if(t1&&t1.registerDep(f1,M1),!O.el){const b1=f1.subTree=h1(ie);T(null,b1,U,G)}return}M1(f1,O,U,G,t1,o1,w1)},s1=(O,U,G)=>{const J=U.component=O.component;if(EF(O,U,G))if(J.asyncDep&&!J.asyncResolved){a1(J,U,G);return}else J.next=U,yF(J.update),J.update();else U.el=O.el,J.vnode=U},M1=(O,U,G,J,t1,o1,w1)=>{const f1=()=>{if(O.isMounted){let{next:_1,bu:C1,u:L1,parent:B1,vnode:T1}=O,q1=_1,i2;R3(O,!1),_1?(_1.el=T1.el,a1(O,_1,w1)):_1=T1,C1&&E4(C1),(i2=_1.props&&_1.props.onVnodeBeforeUpdate)&&fe(i2,B1,_1,T1),R3(O,!0);const M2=p6(O),pe=O.subTree;O.subTree=M2,N(pe,M2,_(pe.el),Q(pe),O,t1,o1),_1.el=M2.el,q1===null&&fa(O,M2.el),L1&&Y2(L1,t1),(i2=_1.props&&_1.props.onVnodeUpdated)&&Y2(()=>fe(i2,B1,_1,T1),t1)}else{let _1;const{el:C1,props:L1}=U,{bm:B1,m:T1,parent:q1}=O,i2=Z3(U);if(R3(O,!1),B1&&E4(B1),!i2&&(_1=L1&&L1.onVnodeBeforeMount)&&fe(_1,q1,U),R3(O,!0),C1&&U1){const M2=()=>{O.subTree=p6(O),U1(C1,O.subTree,O,t1,null)};i2?U.type.__asyncLoader().then(()=>!O.isUnmounted&&M2()):M2()}else{const M2=O.subTree=p6(O);N(null,M2,G,J,O,t1,o1),U.el=M2.el}if(T1&&Y2(T1,t1),!i2&&(_1=L1&&L1.onVnodeMounted)){const M2=U;Y2(()=>fe(_1,q1,M2),t1)}(U.shapeFlag&256||q1&&Z3(q1.vnode)&&q1.vnode.shapeFlag&256)&&O.a&&Y2(O.a,t1),O.isMounted=!0,U=G=J=null}},b1=O.effect=new W6(f1,()=>X6(c1),O.scope),c1=O.update=()=>b1.run();c1.id=O.uid,R3(O,!0),c1()},a1=(O,U,G)=>{U.component=O;const J=O.vnode.props;O.vnode=U,O.next=null,lj(O,U.props,J,G),uj(O,U.children,G),Q4(),up(),J4()},N1=(O,U,G,J,t1,o1,w1,f1,b1=!1)=>{const c1=O&&O.children,_1=O?O.shapeFlag:0,C1=U.children,{patchFlag:L1,shapeFlag:B1}=U;if(L1>0){if(L1&128){Oe(c1,C1,G,J,t1,o1,w1,f1,b1);return}else if(L1&256){R1(c1,C1,G,J,t1,o1,w1,f1,b1);return}}B1&8?(_1&16&&D2(c1,t1,o1),C1!==c1&&z(G,C1)):_1&16?B1&16?Oe(c1,C1,G,J,t1,o1,w1,f1,b1):D2(c1,t1,o1,!0):(_1&8&&z(G,""),B1&16&&S(C1,G,J,t1,o1,w1,f1,b1))},R1=(O,U,G,J,t1,o1,w1,f1,b1)=>{O=O||L4,U=U||L4;const c1=O.length,_1=U.length,C1=Math.min(c1,_1);let L1;for(L1=0;L1<C1;L1++){const B1=U[L1]=b1?t3(U[L1]):ze(U[L1]);N(O[L1],B1,G,null,t1,o1,w1,f1,b1)}c1>_1?D2(O,t1,o1,!0,!1,C1):S(U,G,J,t1,o1,w1,f1,b1,C1)},Oe=(O,U,G,J,t1,o1,w1,f1,b1)=>{let c1=0;const _1=U.length;let C1=O.length-1,L1=_1-1;for(;c1<=C1&&c1<=L1;){const B1=O[c1],T1=U[c1]=b1?t3(U[c1]):ze(U[c1]);if(Qe(B1,T1))N(B1,T1,G,null,t1,o1,w1,f1,b1);else break;c1++}for(;c1<=C1&&c1<=L1;){const B1=O[C1],T1=U[L1]=b1?t3(U[L1]):ze(U[L1]);if(Qe(B1,T1))N(B1,T1,G,null,t1,o1,w1,f1,b1);else break;C1--,L1--}if(c1>C1){if(c1<=L1){const B1=L1+1,T1=B1<_1?U[B1].el:J;for(;c1<=L1;)N(null,U[c1]=b1?t3(U[c1]):ze(U[c1]),G,T1,t1,o1,w1,f1,b1),c1++}}else if(c1>L1)for(;c1<=C1;)$2(O[c1],t1,o1,!0),c1++;else{const B1=c1,T1=c1,q1=new Map;for(c1=T1;c1<=L1;c1++){const J2=U[c1]=b1?t3(U[c1]):ze(U[c1]);J2.key!=null&&q1.set(J2.key,c1)}let i2,M2=0;const pe=L1-T1+1;let He=!1,Di=0;const g3=new Array(pe);for(c1=0;c1<pe;c1++)g3[c1]=0;for(c1=B1;c1<=C1;c1++){const J2=O[c1];if(M2>=pe){$2(J2,t1,o1,!0);continue}let R2;if(J2.key!=null)R2=q1.get(J2.key);else for(i2=T1;i2<=L1;i2++)if(g3[i2-T1]===0&&Qe(J2,U[i2])){R2=i2;break}R2===void 0?$2(J2,t1,o1,!0):(g3[R2-T1]=c1+1,R2>=Di?Di=R2:He=!0,N(J2,U[R2],G,null,t1,o1,w1,f1,b1),M2++)}const Ti=He?gj(g3):L4;for(i2=Ti.length-1,c1=pe-1;c1>=0;c1--){const J2=T1+c1,R2=U[J2],q2=J2+1<_1?U[J2+1].el:J;g3[c1]===0?N(null,R2,G,q2,t1,o1,w1,f1,b1):He&&(i2<0||c1!==Ti[i2]?oe(R2,G,q2,2):i2--)}}},oe=(O,U,G,J,t1=null)=>{const{el:o1,type:w1,transition:f1,children:b1,shapeFlag:c1}=O;if(c1&6){oe(O.component.subTree,U,G,J);return}if(c1&128){O.suspense.move(U,G,J);return}if(c1&64){w1.move(O,U,G,p1);return}if(w1===z2){u(o1,U,G);for(let C1=0;C1<b1.length;C1++)oe(b1[C1],U,G,J);u(O.anchor,U,G);return}if(w1===I4){P(O,U,G);return}if(J!==2&&c1&1&&f1)if(J===0)f1.beforeEnter(o1),u(o1,U,G),Y2(()=>f1.enter(o1),t1);else{const{leave:C1,delayLeave:L1,afterLeave:B1}=f1,T1=()=>u(o1,U,G),q1=()=>{C1(o1,()=>{T1(),B1&&B1()})};L1?L1(o1,T1,q1):q1()}else u(o1,U,G)},$2=(O,U,G,J=!1,t1=!1)=>{const{type:o1,props:w1,ref:f1,children:b1,dynamicChildren:c1,shapeFlag:_1,patchFlag:C1,dirs:L1}=O;if(f1!=null&&V6(f1,null,G,O,!0),_1&256){U.ctx.deactivate(O);return}const B1=_1&1&&L1,T1=!Z3(O);let q1;if(T1&&(q1=w1&&w1.onVnodeBeforeUnmount)&&fe(q1,U,O),_1&6)p3(O.component,G,J);else{if(_1&128){O.suspense.unmount(G,J);return}B1&&lt(O,null,U,"beforeUnmount"),_1&64?O.type.remove(O,U,G,t1,p1,J):c1&&(o1!==z2||C1>0&&C1&64)?D2(c1,U,G,!1,!0):(o1===z2&&C1&384||!t1&&_1&16)&&D2(b1,U,G),J&&tt(O)}(T1&&(q1=w1&&w1.onVnodeUnmounted)||B1)&&Y2(()=>{q1&&fe(q1,U,O),B1&&lt(O,null,U,"unmounted")},G)},tt=O=>{const{type:U,el:G,anchor:J,transition:t1}=O;if(U===z2){pt(G,J);return}if(U===I4){R(O);return}const o1=()=>{h(G),t1&&!t1.persisted&&t1.afterLeave&&t1.afterLeave()};if(O.shapeFlag&1&&t1&&!t1.persisted){const{leave:w1,delayLeave:f1}=t1,b1=()=>w1(G,o1);f1?f1(O.el,o1,b1):b1()}else o1()},pt=(O,U)=>{let G;for(;O!==U;)G=w(O),h(O),O=G;h(U)},p3=(O,U,G)=>{const{bum:J,scope:t1,update:o1,subTree:w1,um:f1}=O;J&&E4(J),t1.stop(),o1&&(o1.active=!1,$2(w1,O,U,G)),f1&&Y2(f1,U),Y2(()=>{O.isUnmounted=!0},U),U&&U.pendingBranch&&!U.isUnmounted&&O.asyncDep&&!O.asyncResolved&&O.suspenseId===U.pendingId&&(U.deps--,U.deps===0&&U.resolve())},D2=(O,U,G,J=!1,t1=!1,o1=0)=>{for(let w1=o1;w1<O.length;w1++)$2(O[w1],U,G,J,t1)},Q=O=>O.shapeFlag&6?Q(O.component.subTree):O.shapeFlag&128?O.suspense.next():w(O.anchor||O.el),A1=(O,U,G)=>{O==null?U._vnode&&$2(U._vnode,null,null,!0):N(U._vnode||null,O,U,null,null,null,G),up(),x6(),U._vnode=O},p1={p:N,um:$2,m:oe,r:tt,mt:X,mc:S,pc:N1,pbc:l1,n:Q,o:r};let x1,U1;return a&&([x1,U1]=a(p1)),{render:A1,hydrate:x1,createApp:sj(A1,x1)}}function R3({effect:r,update:a},d){r.allowRecurse=a.allowRecurse=d}function Ca(r,a,d=!1){const u=r.children,h=a.children;if(y1(u)&&y1(h))for(let v=0;v<u.length;v++){const g=u[v];let C=h[v];C.shapeFlag&1&&!C.dynamicChildren&&((C.patchFlag<=0||C.patchFlag===32)&&(C=h[v]=t3(h[v]),C.el=g.el),d||Ca(g,C)),C.type===U4&&(C.el=g.el)}}function gj(r){const a=r.slice(),d=[0];let u,h,v,g,C;const b=r.length;for(u=0;u<b;u++){const y=r[u];if(y!==0){if(h=d[d.length-1],r[h]<y){a[u]=h,d.push(u);continue}for(v=0,g=d.length-1;v<g;)C=v+g>>1,r[d[C]]<y?v=C+1:g=C;y<r[d[v]]&&(v>0&&(a[u]=d[v-1]),d[v]=u)}}for(v=d.length,g=d[v-1];v-- >0;)d[v]=g,g=a[g];return d}const bj=r=>r.__isTeleport,Zn=r=>r&&(r.disabled||r.disabled===""),zp=r=>typeof SVGElement<"u"&&r instanceof SVGElement,Ms=(r,a)=>{const d=r&&r.to;return y2(d)?a?a(d):null:d},vj={__isTeleport:!0,process(r,a,d,u,h,v,g,C,b,y){const{mc:z,pc:_,pbc:w,o:{insert:M,querySelector:L,createText:N,createComment:I}}=y,T=Zn(a.props);let{shapeFlag:E,children:P,dynamicChildren:R}=a;if(r==null){const W=a.el=N(""),i1=a.anchor=N("");M(W,d,u),M(i1,d,u);const K=a.target=Ms(a.props,L),S=a.targetAnchor=N("");K&&(M(S,K),g=g||zp(K));const Y=(l1,g1)=>{E&16&&z(P,l1,g1,h,v,g,C,b)};T?Y(d,i1):K&&Y(K,S)}else{a.el=r.el;const W=a.anchor=r.anchor,i1=a.target=r.target,K=a.targetAnchor=r.targetAnchor,S=Zn(r.props),Y=S?d:i1,l1=S?W:K;if(g=g||zp(i1),R?(w(r.dynamicChildren,R,Y,h,v,g,C),Ca(r,a,!0)):b||_(r,a,Y,l1,h,v,g,C,!1),T)S||Jo(a,d,W,y,1);else if((a.props&&a.props.to)!==(r.props&&r.props.to)){const g1=a.target=Ms(a.props,L);g1&&Jo(a,g1,null,y,0)}else S&&Jo(a,i1,K,y,1)}Yb(a)},remove(r,a,d,u,{um:h,o:{remove:v}},g){const{shapeFlag:C,children:b,anchor:y,targetAnchor:z,target:_,props:w}=r;if(_&&v(z),(g||!Zn(w))&&(v(y),C&16))for(let M=0;M<b.length;M++){const L=b[M];h(L,a,d,!0,!!L.dynamicChildren)}},move:Jo,hydrate:kj};function Jo(r,a,d,{o:{insert:u},m:h},v=2){v===0&&u(r.targetAnchor,a,d);const{el:g,anchor:C,shapeFlag:b,children:y,props:z}=r,_=v===2;if(_&&u(g,a,d),(!_||Zn(z))&&b&16)for(let w=0;w<y.length;w++)h(y[w],a,d,2);_&&u(C,a,d)}function kj(r,a,d,u,h,v,{o:{nextSibling:g,parentNode:C,querySelector:b}},y){const z=a.target=Ms(a.props,b);if(z){const _=z._lpa||z.firstChild;if(a.shapeFlag&16)if(Zn(a.props))a.anchor=y(g(r),a,C(r),d,u,h,v),a.targetAnchor=_;else{a.anchor=g(r);let w=_;for(;w;)if(w=g(w),w&&w.nodeType===8&&w.data==="teleport anchor"){a.targetAnchor=w,z._lpa=a.targetAnchor&&g(a.targetAnchor);break}y(_,a,z,d,u,h,v)}Yb(a)}return a.anchor&&g(a.anchor)}const c_1=vj;function Yb(r){const a=r.ctx;if(a&&a.ut){let d=r.children[0].el;for(;d!==r.targetAnchor;)d.nodeType===1&&d.setAttribute("data-v-owner",a.uid),d=d.nextSibling;a.ut()}}const z2=Symbol.for("v-fgt"),U4=Symbol.for("v-txt"),ie=Symbol.for("v-cmt"),I4=Symbol.for("v-stc"),Kn=[];let ue=null;function E1(r=!1){Kn.push(ue=r?null:[])}function Qb(){Kn.pop(),ue=Kn[Kn.length-1]||null}let K3=1;function yp(r){K3+=r}function Jb(r){return r.dynamicChildren=K3>0?ue||L4:null,Qb(),K3>0&&ue&&ue.push(r),r}function F1(r,a,d,u,h,v){return Jb(F(r,a,d,u,h,v,!0))}function ye(r,a,d,u,h){return Jb(h1(r,a,d,u,h,!0))}function Y3(r){return r?r.__v_isVNode===!0:!1}function Qe(r,a){return r.type===a.type&&r.key===a.key}function s_1(r){}const ir="__vInternal",Xb=({key:r})=>r??null,v6=({ref:r,ref_key:a,ref_for:d})=>(typeof r=="number"&&(r=""+r),r!=null?y2(r)||t2(r)||I1(r)?{i:W2,r,k:a,f:!!d}:r:null);function F(r,a=null,d=null,u=0,h=null,v=r===z2?0:1,g=!1,C=!1){const b={__v_isVNode:!0,__v_skip:!0,type:r,props:a,key:a&&Xb(a),ref:a&&v6(a),scopeId:tr,slotScopeIds:null,children:d,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:v,patchFlag:u,dynamicProps:h,dynamicChildren:null,appContext:null,ctx:W2};return C?(Aa(b,d),v&128&&r.normalize(b)):d&&(b.shapeFlag|=y2(d)?8:16),K3>0&&!g&&ue&&(b.patchFlag>0||v&6)&&b.patchFlag!==32&&ue.push(b),b}const h1=Cj;function Cj(r,a=null,d=null,u=0,h=null,v=!1){if((!r||r===Ob)&&(r=ie),Y3(r)){const C=Et(r,a,!0);return d&&Aa(C,d),K3>0&&!v&&ue&&(C.shapeFlag&6?ue[ue.indexOf(r)]=C:ue.push(C)),C.patchFlag|=-2,C}if(xj(r)&&(r=r.__vccOpts),a){a=wj(a);let{class:C,style:b}=a;C&&!y2(C)&&(a.class=Ie(C)),h2(b)&&(Ab(b)&&!y1(b)&&(b=v2({},b)),a.style=Ci(b))}const g=y2(r)?1:Eb(r)?128:bj(r)?64:h2(r)?4:I1(r)?2:0;return F(r,a,d,u,h,g,v,!0)}function wj(r){return r?Ab(r)||ir in r?v2({},r):r:null}function Et(r,a,d=!1){const{props:u,ref:h,patchFlag:v,children:g}=r,C=a?Aj(u||{},a):u;return{__v_isVNode:!0,__v_skip:!0,type:r.type,props:C,key:C&&Xb(C),ref:a&&a.ref?d&&h?y1(h)?h.concat(v6(a)):[h,v6(a)]:v6(a):h,scopeId:r.scopeId,slotScopeIds:r.slotScopeIds,children:g,target:r.target,targetAnchor:r.targetAnchor,staticCount:r.staticCount,shapeFlag:r.shapeFlag,patchFlag:a&&r.type!==z2?v===-1?16:v|16:v,dynamicProps:r.dynamicProps,dynamicChildren:r.dynamicChildren,appContext:r.appContext,dirs:r.dirs,transition:r.transition,component:r.component,suspense:r.suspense,ssContent:r.ssContent&&Et(r.ssContent),ssFallback:r.ssFallback&&Et(r.ssFallback),el:r.el,anchor:r.anchor,ctx:r.ctx,ce:r.ce}}function u2(r=" ",a=0){return h1(U4,null,r,a)}function wa(r,a){const d=h1(I4,null,r);return d.staticCount=a,d}function te(r="",a=!1){return a?(E1(),ye(ie,null,r)):h1(ie,null,r)}function ze(r){return r==null||typeof r=="boolean"?h1(ie):y1(r)?h1(z2,null,r.slice()):typeof r=="object"?t3(r):h1(U4,null,String(r))}function t3(r){return r.el===null&&r.patchFlag!==-1||r.memo?r:Et(r)}function Aa(r,a){let d=0;const{shapeFlag:u}=r;if(a==null)a=null;else if(y1(a))d=16;else if(typeof a=="object")if(u&65){const h=a.default;h&&(h._c&&(h._d=!1),Aa(r,h()),h._c&&(h._d=!0));return}else{d=32;const h=a._;!h&&!(ir in a)?a._ctx=W2:h===3&&W2&&(W2.slots._===1?a._=1:(a._=2,r.patchFlag|=1024))}else I1(a)?(a={default:a,_ctx:W2},d=32):(a=String(a),u&64?(d=16,a=[u2(a)]):d=8);r.children=a,r.shapeFlag|=d}function Aj(...r){const a={};for(let d=0;d<r.length;d++){const u=r[d];for(const h in u)if(h==="class")a.class!==u.class&&(a.class=Ie([a.class,u.class]));else if(h==="style")a.style=Ci([a.style,u.style]);else if(ki(h)){const v=a[h],g=u[h];g&&v!==g&&!(y1(v)&&v.includes(g))&&(a[h]=v?[].concat(v,g):g)}else h!==""&&(a[h]=u[h])}return a}function fe(r,a,d,u=null){Pe(r,a,7,[d,u])}const _j=Ub();let zj=0;function ev(r,a,d){const u=r.type,h=(a?a.appContext:r.appContext)||_j,v={uid:zj++,vnode:r,type:u,parent:a,appContext:h,root:null,next:null,subTree:null,effect:null,update:null,scope:new cb(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:a?a.provides:Object.create(h.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gb(u,h),emitsOptions:Sb(u,h),emit:null,emitted:null,propsDefaults:f2,inheritAttrs:u.inheritAttrs,ctx:f2,data:f2,props:f2,attrs:f2,slots:f2,refs:f2,setupState:f2,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:d,suspenseId:d?d.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return v.ctx={_:v},v.root=a?a.root:v,v.emit=HF.bind(null,v),r.ce&&r.ce(v),v}let P2=null;const m3=()=>P2||W2;let _a,M4,Mp="__VUE_INSTANCE_SETTERS__";(M4=gs()[Mp])||(M4=gs()[Mp]=[]),M4.push(r=>P2=r),_a=r=>{M4.length>1?M4.forEach(a=>a(r)):M4[0](r)};const l3=r=>{_a(r),r.scope.on()},c3=()=>{P2&&P2.scope.off(),_a(null)};function tv(r){return r.vnode.shapeFlag&4}let q4=!1;function nv(r,a=!1){q4=a;const{props:d,children:u}=r.vnode,h=tv(r);aj(r,d,h,a),fj(r,u);const v=h?yj(r,a):void 0;return q4=!1,v}function yj(r,a){const d=r.type;r.accessCache=Object.create(null),r.proxy=_b(new Proxy(r.ctx,As));const{setup:u}=d;if(u){const h=r.setupContext=u.length>1?ov(r):null;l3(r),Q4();const v=r3(u,r,0,[r.props,h]);if(J4(),c3(),ia(v)){if(v.then(c3,c3),a)return v.then(g=>{xs(r,g,a)}).catch(g=>{X4(g,r,0)});r.asyncDep=v}else xs(r,v,a)}else iv(r,a)}function xs(r,a,d){I1(a)?r.type.__ssrInlineRender?r.ssrRender=a:r.render=a:h2(a)&&(r.setupState=yb(a)),iv(r,d)}let L6,Hs;function a_1(r){L6=r,Hs=a=>{a.render._rc&&(a.withProxy=new Proxy(a.ctx,ej))}}const l_1=()=>!L6;function iv(r,a,d){const u=r.type;if(!r.render){if(!a&&L6&&!u.render){const h=u.template||va(r).template;if(h){const{isCustomElement:v,compilerOptions:g}=r.appContext.config,{delimiters:C,compilerOptions:b}=u,y=v2(v2({isCustomElement:v,delimiters:C},g),b);u.render=L6(h,y)}}r.render=u.render||Xe,Hs&&Hs(r)}l3(r),Q4(),tj(r),J4(),c3()}function Mj(r){return r.attrsProxy||(r.attrsProxy=new Proxy(r.attrs,{get(a,d){return he(r,"get","$attrs"),a[d]}}))}function ov(r){const a=d=>{r.exposed=d||{}};return{get attrs(){return Mj(r)},slots:r.slots,emit:r.emit,expose:a}}function or(r){if(r.exposed)return r.exposeProxy||(r.exposeProxy=new Proxy(yb(_b(r.exposed)),{get(a,d){if(d in a)return a[d];if(d in $n)return $n[d](r)},has(a,d){return d in a||d in $n}}))}function Vs(r,a=!0){return I1(r)?r.displayName||r.name:r.name||a&&r.__name}function xj(r){return I1(r)&&"__vccOpts"in r}const Q2=(r,a)=>AF(r,a,q4);function rr(r,a,d){const u=arguments.length;return u===2?h2(a)&&!y1(a)?Y3(a)?h1(r,null,[a]):h1(r,a):h1(r,null,a):(u>3?d=Array.prototype.slice.call(arguments,2):u===3&&Y3(d)&&(d=[d]),h1(r,a,d))}const Hj=Symbol.for("v-scx"),Vj=()=>ht(Hj);function d_1(){}function f_1(r,a,d,u){const h=d[u];if(h&&Lj(h,r))return h;const v=a();return v.memo=r.slice(),d[u]=v}function Lj(r,a){const d=r.memo;if(d.length!=a.length)return!1;for(let u=0;u<d.length;u++)if(O4(d[u],a[u]))return!1;return K3>0&&ue&&ue.push(r),!0}const Sj="3.3.4",Ej={createComponentInstance:ev,setupComponent:nv,renderComponentRoot:p6,setCurrentRenderingInstance:ci,isVNode:Y3,normalizeVNode:ze},u_1=Ej,h_1=null,m_1=null,Nj="http://www.w3.org/2000/svg",U3=typeof document<"u"?document:null,xp=U3&&U3.createElement("template"),Dj={insert:(r,a,d)=>{a.insertBefore(r,d||null)},remove:r=>{const a=r.parentNode;a&&a.removeChild(r)},createElement:(r,a,d,u)=>{const h=a?U3.createElementNS(Nj,r):U3.createElement(r,d?{is:d}:void 0);return r==="select"&&u&&u.multiple!=null&&h.setAttribute("multiple",u.multiple),h},createText:r=>U3.createTextNode(r),createComment:r=>U3.createComment(r),setText:(r,a)=>{r.nodeValue=a},setElementText:(r,a)=>{r.textContent=a},parentNode:r=>r.parentNode,nextSibling:r=>r.nextSibling,querySelector:r=>U3.querySelector(r),setScopeId(r,a){r.setAttribute(a,"")},insertStaticContent(r,a,d,u,h,v){const g=d?d.previousSibling:a.lastChild;if(h&&(h===v||h.nextSibling))for(;a.insertBefore(h.cloneNode(!0),d),!(h===v||!(h=h.nextSibling)););else{xp.innerHTML=u?`<svg>${r}</svg>`:r;const C=xp.content;if(u){const b=C.firstChild;for(;b.firstChild;)C.appendChild(b.firstChild);C.removeChild(b)}a.insertBefore(C,d)}return[g?g.nextSibling:a.firstChild,d?d.previousSibling:a.lastChild]}};function Tj(r,a,d){const u=r._vtc;u&&(a=(a?[a,...u]:[...u]).join(" ")),a==null?r.removeAttribute("class"):d?r.setAttribute("class",a):r.className=a}function Ij(r,a,d){const u=r.style,h=y2(d);if(d&&!h){if(a&&!y2(a))for(const v in a)d[v]==null&&Ls(u,v,"");for(const v in d)Ls(u,v,d[v])}else{const v=u.display;h?a!==d&&(u.cssText=d):a&&r.removeAttribute("style"),"_vod"in r&&(u.display=v)}}const Hp=/\s*!important$/;function Ls(r,a,d){if(y1(d))d.forEach(u=>Ls(r,a,u));else if(d==null&&(d=""),a.startsWith("--"))r.setProperty(a,d);else{const u=Bj(r,a);Hp.test(d)?r.setProperty(Te(u),d.replace(Hp,""),"important"):r[u]=d}}const Vp=["Webkit","Moz","ms"],X0={};function Bj(r,a){const d=X0[a];if(d)return d;let u=Me(a);if(u!=="filter"&&u in r)return X0[a]=u;u=q6(u);for(let h=0;h<Vp.length;h++){const v=Vp[h]+u;if(v in r)return X0[a]=v}return a}const Lp="http://www.w3.org/1999/xlink";function Pj(r,a,d,u,h){if(u&&a.startsWith("xlink:"))d==null?r.removeAttributeNS(Lp,a.slice(6,a.length)):r.setAttributeNS(Lp,a,d);else{const v=PR(a);d==null||v&&!ob(d)?r.removeAttribute(a):r.setAttribute(a,v?"":d)}}function Oj(r,a,d,u,h,v,g){if(a==="innerHTML"||a==="textContent"){u&&g(u,h,v),r[a]=d??"";return}const C=r.tagName;if(a==="value"&&C!=="PROGRESS"&&!C.includes("-")){r._value=d;const y=C==="OPTION"?r.getAttribute("value"):r.value,z=d??"";y!==z&&(r.value=z),d==null&&r.removeAttribute(a);return}let b=!1;if(d===""||d==null){const y=typeof r[a];y==="boolean"?d=ob(d):d==null&&y==="string"?(d="",b=!0):y==="number"&&(d=0,b=!0)}try{r[a]=d}catch{}b&&r.removeAttribute(a)}function xt(r,a,d,u){r.addEventListener(a,d,u)}function Rj(r,a,d,u){r.removeEventListener(a,d,u)}function Fj(r,a,d,u,h=null){const v=r._vei||(r._vei={}),g=v[a];if(u&&g)g.value=u;else{const[C,b]=jj(a);if(u){const y=v[a]=Gj(u,h);xt(r,C,y,b)}else g&&(Rj(r,C,g,b),v[a]=void 0)}}const Sp=/(?:Once|Passive|Capture)$/;function jj(r){let a;if(Sp.test(r)){a={};let u;for(;u=r.match(Sp);)r=r.slice(0,r.length-u[0].length),a[u[0].toLowerCase()]=!0}return[r[2]===":"?r.slice(3):Te(r.slice(2)),a]}let es=0;const Uj=Promise.resolve(),qj=()=>es||(Uj.then(()=>es=0),es=Date.now());function Gj(r,a){const d=u=>{if(!u._vts)u._vts=Date.now();else if(u._vts<=d.attached)return;Pe(Wj(u,d.value),a,5,[u])};return d.value=r,d.attached=qj(),d}function Wj(r,a){if(y1(a)){const d=r.stopImmediatePropagation;return r.stopImmediatePropagation=()=>{d.call(r),r._stopped=!0},a.map(u=>h=>!h._stopped&&u&&u(h))}else return a}const Ep=/^on[a-z]/,$j=(r,a,d,u,h=!1,v,g,C,b)=>{a==="class"?Tj(r,u,h):a==="style"?Ij(r,d,u):ki(a)?ta(a)||Fj(r,a,d,u,g):(a[0]==="."?(a=a.slice(1),!0):a[0]==="^"?(a=a.slice(1),!1):Zj(r,a,u,h))?Oj(r,a,u,v,g,C,b):(a==="true-value"?r._trueValue=u:a==="false-value"&&(r._falseValue=u),Pj(r,a,u,h))};function Zj(r,a,d,u){return u?!!(a==="innerHTML"||a==="textContent"||a in r&&Ep.test(a)&&I1(d)):a==="spellcheck"||a==="draggable"||a==="translate"||a==="form"||a==="list"&&r.tagName==="INPUT"||a==="type"&&r.tagName==="TEXTAREA"||Ep.test(a)&&y2(d)?!1:a in r}function Kj(r,a){const d=Ai(r);class u extends za{constructor(v){super(d,v,a)}}return u.def=d,u}const p_1=r=>Kj(r,pU),Yj=typeof HTMLElement<"u"?HTMLElement:class{};class za extends Yj{constructor(a,d={},u){super(),this._def=a,this._props=d,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&u?u(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,da(()=>{this._connected||(jp(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let u=0;u<this.attributes.length;u++)this._setAttr(this.attributes[u].name);new MutationObserver(u=>{for(const h of u)this._setAttr(h.attributeName)}).observe(this,{attributes:!0});const a=(u,h=!1)=>{const{props:v,styles:g}=u;let C;if(v&&!y1(v))for(const b in v){const y=v[b];(y===Number||y&&y.type===Number)&&(b in this._props&&(this._props[b]=z6(this._props[b])),(C||(C=Object.create(null)))[Me(b)]=!0)}this._numberProps=C,h&&this._resolveProps(u),this._applyStyles(g),this._update()},d=this._def.__asyncLoader;d?d().then(u=>a(u,!0)):a(this._def)}_resolveProps(a){const{props:d}=a,u=y1(d)?d:Object.keys(d||{});for(const h of Object.keys(this))h[0]!=="_"&&u.includes(h)&&this._setProp(h,this[h],!0,!1);for(const h of u.map(Me))Object.defineProperty(this,h,{get(){return this._getProp(h)},set(v){this._setProp(h,v)}})}_setAttr(a){let d=this.getAttribute(a);const u=Me(a);this._numberProps&&this._numberProps[u]&&(d=z6(d)),this._setProp(u,d,!1)}_getProp(a){return this._props[a]}_setProp(a,d,u=!0,h=!0){d!==this._props[a]&&(this._props[a]=d,h&&this._instance&&this._update(),u&&(d===!0?this.setAttribute(Te(a),""):typeof d=="string"||typeof d=="number"?this.setAttribute(Te(a),d+""):d||this.removeAttribute(Te(a))))}_update(){jp(this._createVNode(),this.shadowRoot)}_createVNode(){const a=h1(this._def,v2({},this._props));return this._instance||(a.ce=d=>{this._instance=d,d.isCE=!0;const u=(v,g)=>{this.dispatchEvent(new CustomEvent(v,{detail:g}))};d.emit=(v,...g)=>{u(v,g),Te(v)!==v&&u(Te(v),g)};let h=this;for(;h=h&&(h.parentNode||h.host);)if(h instanceof za){d.parent=h._instance,d.provides=h._instance.provides;break}}),a}_applyStyles(a){a&&a.forEach(d=>{const u=document.createElement("style");u.textContent=d,this.shadowRoot.appendChild(u)})}}function g_1(r="$style"){{const a=m3();if(!a)return f2;const d=a.type.__cssModules;if(!d)return f2;const u=d[r];return u||f2}}function b_1(r){const a=m3();if(!a)return;const d=a.ut=(h=r(a.proxy))=>{Array.from(document.querySelectorAll(`[data-v-owner="${a.uid}"]`)).forEach(v=>Es(v,h))},u=()=>{const h=r(a.proxy);Ss(a.subTree,h),d(h)};OF(u),me(()=>{const h=new MutationObserver(u);h.observe(a.subTree.el.parentNode,{childList:!0}),zi(()=>h.disconnect())})}function Ss(r,a){if(r.shapeFlag&128){const d=r.suspense;r=d.activeBranch,d.pendingBranch&&!d.isHydrating&&d.effects.push(()=>{Ss(d.activeBranch,a)})}for(;r.component;)r=r.component.subTree;if(r.shapeFlag&1&&r.el)Es(r.el,a);else if(r.type===z2)r.children.forEach(d=>Ss(d,a));else if(r.type===I4){let{el:d,anchor:u}=r;for(;d&&(Es(d,a),d!==u);)d=d.nextSibling}}function Es(r,a){if(r.nodeType===1){const d=r.style;for(const u in a)d.setProperty(`--${u}`,a[u])}}const Qt="transition",Pn="animation",rv=(r,{slots:a})=>rr(jF,sv(r),a);rv.displayName="Transition";const cv={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},Qj=rv.props=v2({},Ib,cv),F3=(r,a=[])=>{y1(r)?r.forEach(d=>d(...a)):r&&r(...a)},Np=r=>r?y1(r)?r.some(a=>a.length>1):r.length>1:!1;function sv(r){const a={};for(const d1 in r)d1 in cv||(a[d1]=r[d1]);if(r.css===!1)return a;const{name:d="v",type:u,duration:h,enterFromClass:v=`${d}-enter-from`,enterActiveClass:g=`${d}-enter-active`,enterToClass:C=`${d}-enter-to`,appearFromClass:b=v,appearActiveClass:y=g,appearToClass:z=C,leaveFromClass:_=`${d}-leave-from`,leaveActiveClass:w=`${d}-leave-active`,leaveToClass:M=`${d}-leave-to`}=r,L=Jj(h),N=L&&L[0],I=L&&L[1],{onBeforeEnter:T,onEnter:E,onEnterCancelled:P,onLeave:R,onLeaveCancelled:W,onBeforeAppear:i1=T,onAppear:K=E,onAppearCancelled:S=P}=a,Y=(d1,k1,X)=>{e3(d1,k1?z:C),e3(d1,k1?y:g),X&&X()},l1=(d1,k1)=>{d1._isLeaving=!1,e3(d1,_),e3(d1,M),e3(d1,w),k1&&k1()},g1=d1=>(k1,X)=>{const s1=d1?K:E,M1=()=>Y(k1,d1,X);F3(s1,[k1,M1]),Dp(()=>{e3(k1,d1?b:v),zt(k1,d1?z:C),Np(s1)||Tp(k1,u,N,M1)})};return v2(a,{onBeforeEnter(d1){F3(T,[d1]),zt(d1,v),zt(d1,g)},onBeforeAppear(d1){F3(i1,[d1]),zt(d1,b),zt(d1,y)},onEnter:g1(!1),onAppear:g1(!0),onLeave(d1,k1){d1._isLeaving=!0;const X=()=>l1(d1,k1);zt(d1,_),lv(),zt(d1,w),Dp(()=>{d1._isLeaving&&(e3(d1,_),zt(d1,M),Np(R)||Tp(d1,u,I,X))}),F3(R,[d1,X])},onEnterCancelled(d1){Y(d1,!1),F3(P,[d1])},onAppearCancelled(d1){Y(d1,!0),F3(S,[d1])},onLeaveCancelled(d1){l1(d1),F3(W,[d1])}})}function Jj(r){if(r==null)return null;if(h2(r))return[ts(r.enter),ts(r.leave)];{const a=ts(r);return[a,a]}}function ts(r){return z6(r)}function zt(r,a){a.split(/\s+/).forEach(d=>d&&r.classList.add(d)),(r._vtc||(r._vtc=new Set)).add(a)}function e3(r,a){a.split(/\s+/).forEach(u=>u&&r.classList.remove(u));const{_vtc:d}=r;d&&(d.delete(a),d.size||(r._vtc=void 0))}function Dp(r){requestAnimationFrame(()=>{requestAnimationFrame(r)})}let Xj=0;function Tp(r,a,d,u){const h=r._endId=++Xj,v=()=>{h===r._endId&&u()};if(d)return setTimeout(v,d);const{type:g,timeout:C,propCount:b}=av(r,a);if(!g)return u();const y=g+"end";let z=0;const _=()=>{r.removeEventListener(y,w),v()},w=M=>{M.target===r&&++z>=b&&_()};setTimeout(()=>{z<b&&_()},C+1),r.addEventListener(y,w)}function av(r,a){const d=window.getComputedStyle(r),u=L=>(d[L]||"").split(", "),h=u(`${Qt}Delay`),v=u(`${Qt}Duration`),g=Ip(h,v),C=u(`${Pn}Delay`),b=u(`${Pn}Duration`),y=Ip(C,b);let z=null,_=0,w=0;a===Qt?g>0&&(z=Qt,_=g,w=v.length):a===Pn?y>0&&(z=Pn,_=y,w=b.length):(_=Math.max(g,y),z=_>0?g>y?Qt:Pn:null,w=z?z===Qt?v.length:b.length:0);const M=z===Qt&&/\b(transform|all)(,|$)/.test(u(`${Qt}Property`).toString());return{type:z,timeout:_,propCount:w,hasTransform:M}}function Ip(r,a){for(;r.length<a.length;)r=r.concat(r);return Math.max(...a.map((d,u)=>Bp(d)+Bp(r[u])))}function Bp(r){return Number(r.slice(0,-1).replace(",","."))*1e3}function lv(){return document.body.offsetHeight}const dv=new WeakMap,fv=new WeakMap,uv={name:"TransitionGroup",props:v2({},Qj,{tag:String,moveClass:String}),setup(r,{slots:a}){const d=m3(),u=Tb();let h,v;return ma(()=>{if(!h.length)return;const g=r.moveClass||`${r.name||"v"}-move`;if(!oU(h[0].el,d.vnode.el,g))return;h.forEach(tU),h.forEach(nU);const C=h.filter(iU);lv(),C.forEach(b=>{const y=b.el,z=y.style;zt(y,g),z.transform=z.webkitTransform=z.transitionDuration="";const _=y._moveCb=w=>{w&&w.target!==y||(!w||/transform$/.test(w.propertyName))&&(y.removeEventListener("transitionend",_),y._moveCb=null,e3(y,g))};y.addEventListener("transitionend",_)})}),()=>{const g=Q1(r),C=sv(g);let b=g.tag||z2;h=v,v=a.default?ha(a.default()):[];for(let y=0;y<v.length;y++){const z=v[y];z.key!=null&&F4(z,ai(z,C,u,d))}if(h)for(let y=0;y<h.length;y++){const z=h[y];F4(z,ai(z,C,u,d)),dv.set(z,z.el.getBoundingClientRect())}return h1(b,null,v)}}},eU=r=>delete r.mode;uv.props;const v_1=uv;function tU(r){const a=r.el;a._moveCb&&a._moveCb(),a._enterCb&&a._enterCb()}function nU(r){fv.set(r,r.el.getBoundingClientRect())}function iU(r){const a=dv.get(r),d=fv.get(r),u=a.left-d.left,h=a.top-d.top;if(u||h){const v=r.el.style;return v.transform=v.webkitTransform=`translate(${u}px,${h}px)`,v.transitionDuration="0s",r}}function oU(r,a,d){const u=r.cloneNode();r._vtc&&r._vtc.forEach(g=>{g.split(/\s+/).forEach(C=>C&&u.classList.remove(C))}),d.split(/\s+/).forEach(g=>g&&u.classList.add(g)),u.style.display="none";const h=a.nodeType===1?a:a.parentNode;h.appendChild(u);const{hasTransform:v}=av(u);return h.removeChild(u),v}const d3=r=>{const a=r.props["onUpdate:modelValue"]||!1;return y1(a)?d=>E4(a,d):a};function rU(r){r.target.composing=!0}function Pp(r){const a=r.target;a.composing&&(a.composing=!1,a.dispatchEvent(new Event("input")))}const b2={created(r,{modifiers:{lazy:a,trim:d,number:u}},h){r._assign=d3(h);const v=u||h.props&&h.props.type==="number";xt(r,a?"change":"input",g=>{if(g.target.composing)return;let C=r.value;d&&(C=C.trim()),v&&(C=_6(C)),r._assign(C)}),d&&xt(r,"change",()=>{r.value=r.value.trim()}),a||(xt(r,"compositionstart",rU),xt(r,"compositionend",Pp),xt(r,"change",Pp))},mounted(r,{value:a}){r.value=a??""},beforeUpdate(r,{value:a,modifiers:{lazy:d,trim:u,number:h}},v){if(r._assign=d3(v),r.composing||document.activeElement===r&&r.type!=="range"&&(d||u&&r.value.trim()===a||(h||r.type==="number")&&_6(r.value)===a))return;const g=a??"";r.value!==g&&(r.value=g)}},ya={deep:!0,created(r,a,d){r._assign=d3(d),xt(r,"change",()=>{const u=r._modelValue,h=G4(r),v=r.checked,g=r._assign;if(y1(u)){const C=G6(u,h),b=C!==-1;if(v&&!b)g(u.concat(h));else if(!v&&b){const y=[...u];y.splice(C,1),g(y)}}else if(X3(u)){const C=new Set(u);v?C.add(h):C.delete(h),g(C)}else g(mv(r,v))})},mounted:Op,beforeUpdate(r,a,d){r._assign=d3(d),Op(r,a,d)}};function Op(r,{value:a,oldValue:d},u){r._modelValue=a,y1(a)?r.checked=G6(a,u.props.value)>-1:X3(a)?r.checked=a.has(u.props.value):a!==d&&(r.checked=s3(a,mv(r,!0)))}const hv={created(r,{value:a},d){r.checked=s3(a,d.props.value),r._assign=d3(d),xt(r,"change",()=>{r._assign(G4(r))})},beforeUpdate(r,{value:a,oldValue:d},u){r._assign=d3(u),a!==d&&(r.checked=s3(a,u.props.value))}},cU={deep:!0,created(r,{value:a,modifiers:{number:d}},u){const h=X3(a);xt(r,"change",()=>{const v=Array.prototype.filter.call(r.options,g=>g.selected).map(g=>d?_6(G4(g)):G4(g));r._assign(r.multiple?h?new Set(v):v:v[0])}),r._assign=d3(u)},mounted(r,{value:a}){Rp(r,a)},beforeUpdate(r,a,d){r._assign=d3(d)},updated(r,{value:a}){Rp(r,a)}};function Rp(r,a){const d=r.multiple;if(!(d&&!y1(a)&&!X3(a))){for(let u=0,h=r.options.length;u<h;u++){const v=r.options[u],g=G4(v);if(d)y1(a)?v.selected=G6(a,g)>-1:v.selected=a.has(g);else if(s3(G4(v),a)){r.selectedIndex!==u&&(r.selectedIndex=u);return}}!d&&r.selectedIndex!==-1&&(r.selectedIndex=-1)}}function G4(r){return"_value"in r?r._value:r.value}function mv(r,a){const d=a?"_trueValue":"_falseValue";return d in r?r[d]:a}const sU={created(r,a,d){Xo(r,a,d,null,"created")},mounted(r,a,d){Xo(r,a,d,null,"mounted")},beforeUpdate(r,a,d,u){Xo(r,a,d,u,"beforeUpdate")},updated(r,a,d,u){Xo(r,a,d,u,"updated")}};function pv(r,a){switch(r){case"SELECT":return cU;case"TEXTAREA":return b2;default:switch(a){case"checkbox":return ya;case"radio":return hv;default:return b2}}}function Xo(r,a,d,u,h){const g=pv(r.tagName,d.props&&d.props.type)[h];g&&g(r,a,d,u)}function aU(){b2.getSSRProps=({value:r})=>({value:r}),hv.getSSRProps=({value:r},a)=>{if(a.props&&s3(a.props.value,r))return{checked:!0}},ya.getSSRProps=({value:r},a)=>{if(y1(r)){if(a.props&&G6(r,a.props.value)>-1)return{checked:!0}}else if(X3(r)){if(a.props&&r.has(a.props.value))return{checked:!0}}else if(r)return{checked:!0}},sU.getSSRProps=(r,a)=>{if(typeof a.type!="string")return;const d=pv(a.type.toUpperCase(),a.props&&a.props.type);if(d.getSSRProps)return d.getSSRProps(r,a)}}const lU=["ctrl","shift","alt","meta"],dU={stop:r=>r.stopPropagation(),prevent:r=>r.preventDefault(),self:r=>r.target!==r.currentTarget,ctrl:r=>!r.ctrlKey,shift:r=>!r.shiftKey,alt:r=>!r.altKey,meta:r=>!r.metaKey,left:r=>"button"in r&&r.button!==0,middle:r=>"button"in r&&r.button!==1,right:r=>"button"in r&&r.button!==2,exact:(r,a)=>lU.some(d=>r[`${d}Key`]&&!a.includes(d))},fU=(r,a)=>(d,...u)=>{for(let h=0;h<a.length;h++){const v=dU[a[h]];if(v&&v(d,a))return}return r(d,...u)},uU={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},k_1=(r,a)=>d=>{if(!("key"in d))return;const u=Te(d.key);if(a.some(h=>h===u||uU[h]===u))return r(d)},hU={beforeMount(r,{value:a},{transition:d}){r._vod=r.style.display==="none"?"":r.style.display,d&&a?d.beforeEnter(r):On(r,a)},mounted(r,{value:a},{transition:d}){d&&a&&d.enter(r)},updated(r,{value:a,oldValue:d},{transition:u}){!a!=!d&&(u?a?(u.beforeEnter(r),On(r,!0),u.enter(r)):u.leave(r,()=>{On(r,!1)}):On(r,a))},beforeUnmount(r,{value:a}){On(r,a)}};function On(r,a){r.style.display=a?r._vod:"none"}function mU(){hU.getSSRProps=({value:r})=>{if(!r)return{style:{display:"none"}}}}const gv=v2({patchProp:$j},Dj);let Yn,Fp=!1;function bv(){return Yn||(Yn=mj(gv))}function vv(){return Yn=Fp?Yn:pj(gv),Fp=!0,Yn}const jp=(...r)=>{bv().render(...r)},pU=(...r)=>{vv().hydrate(...r)},C_1=(...r)=>{const a=bv().createApp(...r),{mount:d}=a;return a.mount=u=>{const h=kv(u);if(!h)return;const v=a._component;!I1(v)&&!v.render&&!v.template&&(v.template=h.innerHTML),h.innerHTML="";const g=d(h,!1,h instanceof SVGElement);return h instanceof Element&&(h.removeAttribute("v-cloak"),h.setAttribute("data-v-app","")),g},a},w_1=(...r)=>{const a=vv().createApp(...r),{mount:d}=a;return a.mount=u=>{const h=kv(u);if(h)return d(h,!0,h instanceof SVGElement)},a};function kv(r){return y2(r)?document.querySelector(r):r}let Up=!1;const A_1=()=>{Up||(Up=!0,aU(),mU())},Ma=(r,a)=>{const d=r.__vccOpts||r;for(const[u,h]of a)d[u]=h;return d},gU={},bU={class:"nav-small-cap"},vU=F("i",{class:"ti ti-dots nav-small-cap-icon fs-4"},null,-1),kU={class:"hide-menu"};function CU(r,a){return E1(),F1("li",bU,[vU,F("span",kU,[j4(r.$slots,"default")])])}const ns=Ma(gU,[["render",CU]]);function qp(r,a){var d=Object.keys(r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(r);a&&(u=u.filter(function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable})),d.push.apply(d,u)}return d}function z1(r){for(var a=1;a<arguments.length;a++){var d=arguments[a]!=null?arguments[a]:{};a%2?qp(Object(d),!0).forEach(function(u){U2(r,u,d[u])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(d)):qp(Object(d)).forEach(function(u){Object.defineProperty(r,u,Object.getOwnPropertyDescriptor(d,u))})}return r}function S6(r){"@babel/helpers - typeof";return S6=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},S6(r)}function wU(r,a){if(!(r instanceof a))throw new TypeError("Cannot call a class as a function")}function Gp(r,a){for(var d=0;d<a.length;d++){var u=a[d];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(r,u.key,u)}}function AU(r,a,d){return a&&Gp(r.prototype,a),d&&Gp(r,d),Object.defineProperty(r,"prototype",{writable:!1}),r}function U2(r,a,d){return a in r?Object.defineProperty(r,a,{value:d,enumerable:!0,configurable:!0,writable:!0}):r[a]=d,r}function xa(r,a){return zU(r)||MU(r,a)||Cv(r,a)||HU()}function Mi(r){return _U(r)||yU(r)||Cv(r)||xU()}function _U(r){if(Array.isArray(r))return Ns(r)}function zU(r){if(Array.isArray(r))return r}function yU(r){if(typeof Symbol<"u"&&r[Symbol.iterator]!=null||r["@@iterator"]!=null)return Array.from(r)}function MU(r,a){var d=r==null?null:typeof Symbol<"u"&&r[Symbol.iterator]||r["@@iterator"];if(d!=null){var u=[],h=!0,v=!1,g,C;try{for(d=d.call(r);!(h=(g=d.next()).done)&&(u.push(g.value),!(a&&u.length===a));h=!0);}catch(b){v=!0,C=b}finally{try{!h&&d.return!=null&&d.return()}finally{if(v)throw C}}return u}}function Cv(r,a){if(r){if(typeof r=="string")return Ns(r,a);var d=Object.prototype.toString.call(r).slice(8,-1);if(d==="Object"&&r.constructor&&(d=r.constructor.name),d==="Map"||d==="Set")return Array.from(r);if(d==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(d))return Ns(r,a)}}function Ns(r,a){(a==null||a>r.length)&&(a=r.length);for(var d=0,u=new Array(a);d<a;d++)u[d]=r[d];return u}function xU(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function HU(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Wp=function(){},Ha={},wv={},Av=null,_v={mark:Wp,measure:Wp};try{typeof window<"u"&&(Ha=window),typeof document<"u"&&(wv=document),typeof MutationObserver<"u"&&(Av=MutationObserver),typeof performance<"u"&&(_v=performance)}catch{}var VU=Ha.navigator||{},$p=VU.userAgent,Zp=$p===void 0?"":$p,f3=Ha,A2=wv,Kp=Av,e6=_v;f3.document;var Bt=!!A2.documentElement&&!!A2.head&&typeof A2.addEventListener=="function"&&typeof A2.createElement=="function",zv=~Zp.indexOf("MSIE")||~Zp.indexOf("Trident/"),t6,n6,i6,o6,r6,Nt="___FONT_AWESOME___",Ds=16,yv="fa",Mv="svg-inline--fa",Q3="data-fa-i2svg",Ts="data-fa-pseudo-element",LU="data-fa-pseudo-element-pending",Va="data-prefix",La="data-icon",Yp="fontawesome-i2svg",SU="async",EU=["HTML","HEAD","STYLE","SCRIPT"],xv=function(){try{return!0}catch{return!1}}(),w2="classic",S2="sharp",Sa=[w2,S2];function xi(r){return new Proxy(r,{get:function(d,u){return u in d?d[u]:d[w2]}})}var fi=xi((t6={},U2(t6,w2,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),U2(t6,S2,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),t6)),ui=xi((n6={},U2(n6,w2,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),U2(n6,S2,{solid:"fass",regular:"fasr",light:"fasl"}),n6)),hi=xi((i6={},U2(i6,w2,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),U2(i6,S2,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),i6)),NU=xi((o6={},U2(o6,w2,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),U2(o6,S2,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),o6)),DU=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Hv="fa-layers-text",TU=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,IU=xi((r6={},U2(r6,w2,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),U2(r6,S2,{900:"fass",400:"fasr",300:"fasl"}),r6)),Vv=[1,2,3,4,5,6,7,8,9,10],BU=Vv.concat([11,12,13,14,15,16,17,18,19,20]),PU=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],G3={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},mi=new Set;Object.keys(ui[w2]).map(mi.add.bind(mi));Object.keys(ui[S2]).map(mi.add.bind(mi));var OU=[].concat(Sa,Mi(mi),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",G3.GROUP,G3.SWAP_OPACITY,G3.PRIMARY,G3.SECONDARY]).concat(Vv.map(function(r){return"".concat(r,"x")})).concat(BU.map(function(r){return"w-".concat(r)})),Qn=f3.FontAwesomeConfig||{};function RU(r){var a=A2.querySelector("script["+r+"]");if(a)return a.getAttribute(r)}function FU(r){return r===""?!0:r==="false"?!1:r==="true"?!0:r}if(A2&&typeof A2.querySelector=="function"){var jU=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];jU.forEach(function(r){var a=xa(r,2),d=a[0],u=a[1],h=FU(RU(d));h!=null&&(Qn[u]=h)})}var Lv={styleDefault:"solid",familyDefault:"classic",cssPrefix:yv,replacementClass:Mv,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Qn.familyPrefix&&(Qn.cssPrefix=Qn.familyPrefix);var W4=z1(z1({},Lv),Qn);W4.autoReplaceSvg||(W4.observeMutations=!1);var H1={};Object.keys(Lv).forEach(function(r){Object.defineProperty(H1,r,{enumerable:!0,set:function(d){W4[r]=d,Jn.forEach(function(u){return u(H1)})},get:function(){return W4[r]}})});Object.defineProperty(H1,"familyPrefix",{enumerable:!0,set:function(a){W4.cssPrefix=a,Jn.forEach(function(d){return d(H1)})},get:function(){return W4.cssPrefix}});f3.FontAwesomeConfig=H1;var Jn=[];function UU(r){return Jn.push(r),function(){Jn.splice(Jn.indexOf(r),1)}}var Jt=Ds,ut={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function qU(r){if(!(!r||!Bt)){var a=A2.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=r;for(var d=A2.head.childNodes,u=null,h=d.length-1;h>-1;h--){var v=d[h],g=(v.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(g)>-1&&(u=v)}return A2.head.insertBefore(a,u),r}}var GU="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function pi(){for(var r=12,a="";r-- >0;)a+=GU[Math.random()*62|0];return a}function en(r){for(var a=[],d=(r||[]).length>>>0;d--;)a[d]=r[d];return a}function Ea(r){return r.classList?en(r.classList):(r.getAttribute("class")||"").split(" ").filter(function(a){return a})}function Sv(r){return"".concat(r).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function WU(r){return Object.keys(r||{}).reduce(function(a,d){return a+"".concat(d,'="').concat(Sv(r[d]),'" ')},"").trim()}function cr(r){return Object.keys(r||{}).reduce(function(a,d){return a+"".concat(d,": ").concat(r[d].trim(),";")},"")}function Na(r){return r.size!==ut.size||r.x!==ut.x||r.y!==ut.y||r.rotate!==ut.rotate||r.flipX||r.flipY}function $U(r){var a=r.transform,d=r.containerWidth,u=r.iconWidth,h={transform:"translate(".concat(d/2," 256)")},v="translate(".concat(a.x*32,", ").concat(a.y*32,") "),g="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),C="rotate(".concat(a.rotate," 0 0)"),b={transform:"".concat(v," ").concat(g," ").concat(C)},y={transform:"translate(".concat(u/2*-1," -256)")};return{outer:h,inner:b,path:y}}function ZU(r){var a=r.transform,d=r.width,u=d===void 0?Ds:d,h=r.height,v=h===void 0?Ds:h,g=r.startCentered,C=g===void 0?!1:g,b="";return C&&zv?b+="translate(".concat(a.x/Jt-u/2,"em, ").concat(a.y/Jt-v/2,"em) "):C?b+="translate(calc(-50% + ".concat(a.x/Jt,"em), calc(-50% + ").concat(a.y/Jt,"em)) "):b+="translate(".concat(a.x/Jt,"em, ").concat(a.y/Jt,"em) "),b+="scale(".concat(a.size/Jt*(a.flipX?-1:1),", ").concat(a.size/Jt*(a.flipY?-1:1),") "),b+="rotate(".concat(a.rotate,"deg) "),b}var KU=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ev(){var r=yv,a=Mv,d=H1.cssPrefix,u=H1.replacementClass,h=KU;if(d!==r||u!==a){var v=new RegExp("\\.".concat(r,"\\-"),"g"),g=new RegExp("\\--".concat(r,"\\-"),"g"),C=new RegExp("\\.".concat(a),"g");h=h.replace(v,".".concat(d,"-")).replace(g,"--".concat(d,"-")).replace(C,".".concat(u))}return h}var Qp=!1;function is(){H1.autoAddCss&&!Qp&&(qU(Ev()),Qp=!0)}var YU={mixout:function(){return{dom:{css:Ev,insertCss:is}}},hooks:function(){return{beforeDOMElementCreation:function(){is()},beforeI2svg:function(){is()}}}},Dt=f3||{};Dt[Nt]||(Dt[Nt]={});Dt[Nt].styles||(Dt[Nt].styles={});Dt[Nt].hooks||(Dt[Nt].hooks={});Dt[Nt].shims||(Dt[Nt].shims=[]);var Je=Dt[Nt],Nv=[],QU=function r(){A2.removeEventListener("DOMContentLoaded",r),E6=1,Nv.map(function(a){return a()})},E6=!1;Bt&&(E6=(A2.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(A2.readyState),E6||A2.addEventListener("DOMContentLoaded",QU));function JU(r){Bt&&(E6?setTimeout(r,0):Nv.push(r))}function Hi(r){var a=r.tag,d=r.attributes,u=d===void 0?{}:d,h=r.children,v=h===void 0?[]:h;return typeof r=="string"?Sv(r):"<".concat(a," ").concat(WU(u),">").concat(v.map(Hi).join(""),"</").concat(a,">")}function Jp(r,a,d){if(r&&r[a]&&r[a][d])return{prefix:a,iconName:d,icon:r[a][d]}}var XU=function(a,d){return function(u,h,v,g){return a.call(d,u,h,v,g)}},os=function(a,d,u,h){var v=Object.keys(a),g=v.length,C=h!==void 0?XU(d,h):d,b,y,z;for(u===void 0?(b=1,z=a[v[0]]):(b=0,z=u);b<g;b++)y=v[b],z=C(z,a[y],y,a);return z};function eq(r){for(var a=[],d=0,u=r.length;d<u;){var h=r.charCodeAt(d++);if(h>=55296&&h<=56319&&d<u){var v=r.charCodeAt(d++);(v&64512)==56320?a.push(((h&1023)<<10)+(v&1023)+65536):(a.push(h),d--)}else a.push(h)}return a}function Is(r){var a=eq(r);return a.length===1?a[0].toString(16):null}function tq(r,a){var d=r.length,u=r.charCodeAt(a),h;return u>=55296&&u<=56319&&d>a+1&&(h=r.charCodeAt(a+1),h>=56320&&h<=57343)?(u-55296)*1024+h-56320+65536:u}function Xp(r){return Object.keys(r).reduce(function(a,d){var u=r[d],h=!!u.icon;return h?a[u.iconName]=u.icon:a[d]=u,a},{})}function Bs(r,a){var d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},u=d.skipHooks,h=u===void 0?!1:u,v=Xp(a);typeof Je.hooks.addPack=="function"&&!h?Je.hooks.addPack(r,Xp(a)):Je.styles[r]=z1(z1({},Je.styles[r]||{}),v),r==="fas"&&Bs("fa",a)}var c6,s6,a6,H4=Je.styles,nq=Je.shims,iq=(c6={},U2(c6,w2,Object.values(hi[w2])),U2(c6,S2,Object.values(hi[S2])),c6),Da=null,Dv={},Tv={},Iv={},Bv={},Pv={},oq=(s6={},U2(s6,w2,Object.keys(fi[w2])),U2(s6,S2,Object.keys(fi[S2])),s6);function rq(r){return~OU.indexOf(r)}function cq(r,a){var d=a.split("-"),u=d[0],h=d.slice(1).join("-");return u===r&&h!==""&&!rq(h)?h:null}var Ov=function(){var a=function(v){return os(H4,function(g,C,b){return g[b]=os(C,v,{}),g},{})};Dv=a(function(h,v,g){if(v[3]&&(h[v[3]]=g),v[2]){var C=v[2].filter(function(b){return typeof b=="number"});C.forEach(function(b){h[b.toString(16)]=g})}return h}),Tv=a(function(h,v,g){if(h[g]=g,v[2]){var C=v[2].filter(function(b){return typeof b=="string"});C.forEach(function(b){h[b]=g})}return h}),Pv=a(function(h,v,g){var C=v[2];return h[g]=g,C.forEach(function(b){h[b]=g}),h});var d="far"in H4||H1.autoFetchSvg,u=os(nq,function(h,v){var g=v[0],C=v[1],b=v[2];return C==="far"&&!d&&(C="fas"),typeof g=="string"&&(h.names[g]={prefix:C,iconName:b}),typeof g=="number"&&(h.unicodes[g.toString(16)]={prefix:C,iconName:b}),h},{names:{},unicodes:{}});Iv=u.names,Bv=u.unicodes,Da=sr(H1.styleDefault,{family:H1.familyDefault})};UU(function(r){Da=sr(r.styleDefault,{family:H1.familyDefault})});Ov();function Ta(r,a){return(Dv[r]||{})[a]}function sq(r,a){return(Tv[r]||{})[a]}function W3(r,a){return(Pv[r]||{})[a]}function Rv(r){return Iv[r]||{prefix:null,iconName:null}}function aq(r){var a=Bv[r],d=Ta("fas",r);return a||(d?{prefix:"fas",iconName:d}:null)||{prefix:null,iconName:null}}function u3(){return Da}var Ia=function(){return{prefix:null,iconName:null,rest:[]}};function sr(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=a.family,u=d===void 0?w2:d,h=fi[u][r],v=ui[u][r]||ui[u][h],g=r in Je.styles?r:null;return v||g||null}var eg=(a6={},U2(a6,w2,Object.keys(hi[w2])),U2(a6,S2,Object.keys(hi[S2])),a6);function ar(r){var a,d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.skipLookups,h=u===void 0?!1:u,v=(a={},U2(a,w2,"".concat(H1.cssPrefix,"-").concat(w2)),U2(a,S2,"".concat(H1.cssPrefix,"-").concat(S2)),a),g=null,C=w2;(r.includes(v[w2])||r.some(function(y){return eg[w2].includes(y)}))&&(C=w2),(r.includes(v[S2])||r.some(function(y){return eg[S2].includes(y)}))&&(C=S2);var b=r.reduce(function(y,z){var _=cq(H1.cssPrefix,z);if(H4[z]?(z=iq[C].includes(z)?NU[C][z]:z,g=z,y.prefix=z):oq[C].indexOf(z)>-1?(g=z,y.prefix=sr(z,{family:C})):_?y.iconName=_:z!==H1.replacementClass&&z!==v[w2]&&z!==v[S2]&&y.rest.push(z),!h&&y.prefix&&y.iconName){var w=g==="fa"?Rv(y.iconName):{},M=W3(y.prefix,y.iconName);w.prefix&&(g=null),y.iconName=w.iconName||M||y.iconName,y.prefix=w.prefix||y.prefix,y.prefix==="far"&&!H4.far&&H4.fas&&!H1.autoFetchSvg&&(y.prefix="fas")}return y},Ia());return(r.includes("fa-brands")||r.includes("fab"))&&(b.prefix="fab"),(r.includes("fa-duotone")||r.includes("fad"))&&(b.prefix="fad"),!b.prefix&&C===S2&&(H4.fass||H1.autoFetchSvg)&&(b.prefix="fass",b.iconName=W3(b.prefix,b.iconName)||b.iconName),(b.prefix==="fa"||g==="fa")&&(b.prefix=u3()||"fas"),b}var lq=function(){function r(){wU(this,r),this.definitions={}}return AU(r,[{key:"add",value:function(){for(var d=this,u=arguments.length,h=new Array(u),v=0;v<u;v++)h[v]=arguments[v];var g=h.reduce(this._pullDefinitions,{});Object.keys(g).forEach(function(C){d.definitions[C]=z1(z1({},d.definitions[C]||{}),g[C]),Bs(C,g[C]);var b=hi[w2][C];b&&Bs(b,g[C]),Ov()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(d,u){var h=u.prefix&&u.iconName&&u.icon?{0:u}:u;return Object.keys(h).map(function(v){var g=h[v],C=g.prefix,b=g.iconName,y=g.icon,z=y[2];d[C]||(d[C]={}),z.length>0&&z.forEach(function(_){typeof _=="string"&&(d[C][_]=y)}),d[C][b]=y}),d}}]),r}(),tg=[],V4={},B4={},dq=Object.keys(B4);function fq(r,a){var d=a.mixoutsTo;return tg=r,V4={},Object.keys(B4).forEach(function(u){dq.indexOf(u)===-1&&delete B4[u]}),tg.forEach(function(u){var h=u.mixout?u.mixout():{};if(Object.keys(h).forEach(function(g){typeof h[g]=="function"&&(d[g]=h[g]),S6(h[g])==="object"&&Object.keys(h[g]).forEach(function(C){d[g]||(d[g]={}),d[g][C]=h[g][C]})}),u.hooks){var v=u.hooks();Object.keys(v).forEach(function(g){V4[g]||(V4[g]=[]),V4[g].push(v[g])})}u.provides&&u.provides(B4)}),d}function Ps(r,a){for(var d=arguments.length,u=new Array(d>2?d-2:0),h=2;h<d;h++)u[h-2]=arguments[h];var v=V4[r]||[];return v.forEach(function(g){a=g.apply(null,[a].concat(u))}),a}function J3(r){for(var a=arguments.length,d=new Array(a>1?a-1:0),u=1;u<a;u++)d[u-1]=arguments[u];var h=V4[r]||[];h.forEach(function(v){v.apply(null,d)})}function Tt(){var r=arguments[0],a=Array.prototype.slice.call(arguments,1);return B4[r]?B4[r].apply(null,a):void 0}function Os(r){r.prefix==="fa"&&(r.prefix="fas");var a=r.iconName,d=r.prefix||u3();if(a)return a=W3(d,a)||a,Jp(Fv.definitions,d,a)||Jp(Je.styles,d,a)}var Fv=new lq,uq=function(){H1.autoReplaceSvg=!1,H1.observeMutations=!1,J3("noAuto")},hq={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Bt?(J3("beforeI2svg",a),Tt("pseudoElements2svg",a),Tt("i2svg",a)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.autoReplaceSvgRoot;H1.autoReplaceSvg===!1&&(H1.autoReplaceSvg=!0),H1.observeMutations=!0,JU(function(){pq({autoReplaceSvgRoot:d}),J3("watch",a)})}},mq={icon:function(a){if(a===null)return null;if(S6(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:W3(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var d=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],u=sr(a[0]);return{prefix:u,iconName:W3(u,d)||d}}if(typeof a=="string"&&(a.indexOf("".concat(H1.cssPrefix,"-"))>-1||a.match(DU))){var h=ar(a.split(" "),{skipLookups:!0});return{prefix:h.prefix||u3(),iconName:W3(h.prefix,h.iconName)||h.iconName}}if(typeof a=="string"){var v=u3();return{prefix:v,iconName:W3(v,a)||a}}}},xe={noAuto:uq,config:H1,dom:hq,parse:mq,library:Fv,findIconDefinition:Os,toHtml:Hi},pq=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},d=a.autoReplaceSvgRoot,u=d===void 0?A2:d;(Object.keys(Je.styles).length>0||H1.autoFetchSvg)&&Bt&&H1.autoReplaceSvg&&xe.dom.i2svg({node:u})};function lr(r,a){return Object.defineProperty(r,"abstract",{get:a}),Object.defineProperty(r,"html",{get:function(){return r.abstract.map(function(u){return Hi(u)})}}),Object.defineProperty(r,"node",{get:function(){if(Bt){var u=A2.createElement("div");return u.innerHTML=r.html,u.children}}}),r}function gq(r){var a=r.children,d=r.main,u=r.mask,h=r.attributes,v=r.styles,g=r.transform;if(Na(g)&&d.found&&!u.found){var C=d.width,b=d.height,y={x:C/b/2,y:.5};h.style=cr(z1(z1({},v),{},{"transform-origin":"".concat(y.x+g.x/16,"em ").concat(y.y+g.y/16,"em")}))}return[{tag:"svg",attributes:h,children:a}]}function bq(r){var a=r.prefix,d=r.iconName,u=r.children,h=r.attributes,v=r.symbol,g=v===!0?"".concat(a,"-").concat(H1.cssPrefix,"-").concat(d):v;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:z1(z1({},h),{},{id:g}),children:u}]}]}function Ba(r){var a=r.icons,d=a.main,u=a.mask,h=r.prefix,v=r.iconName,g=r.transform,C=r.symbol,b=r.title,y=r.maskId,z=r.titleId,_=r.extra,w=r.watchable,M=w===void 0?!1:w,L=u.found?u:d,N=L.width,I=L.height,T=h==="fak",E=[H1.replacementClass,v?"".concat(H1.cssPrefix,"-").concat(v):""].filter(function(Y){return _.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(_.classes).join(" "),P={children:[],attributes:z1(z1({},_.attributes),{},{"data-prefix":h,"data-icon":v,class:E,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(I)})},R=T&&!~_.classes.indexOf("fa-fw")?{width:"".concat(N/I*16*.0625,"em")}:{};M&&(P.attributes[Q3]=""),b&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(z||pi())},children:[b]}),delete P.attributes.title);var W=z1(z1({},P),{},{prefix:h,iconName:v,main:d,mask:u,maskId:y,transform:g,symbol:C,styles:z1(z1({},R),_.styles)}),i1=u.found&&d.found?Tt("generateAbstractMask",W)||{children:[],attributes:{}}:Tt("generateAbstractIcon",W)||{children:[],attributes:{}},K=i1.children,S=i1.attributes;return W.children=K,W.attributes=S,C?bq(W):gq(W)}function ng(r){var a=r.content,d=r.width,u=r.height,h=r.transform,v=r.title,g=r.extra,C=r.watchable,b=C===void 0?!1:C,y=z1(z1(z1({},g.attributes),v?{title:v}:{}),{},{class:g.classes.join(" ")});b&&(y[Q3]="");var z=z1({},g.styles);Na(h)&&(z.transform=ZU({transform:h,startCentered:!0,width:d,height:u}),z["-webkit-transform"]=z.transform);var _=cr(z);_.length>0&&(y.style=_);var w=[];return w.push({tag:"span",attributes:y,children:[a]}),v&&w.push({tag:"span",attributes:{class:"sr-only"},children:[v]}),w}function vq(r){var a=r.content,d=r.title,u=r.extra,h=z1(z1(z1({},u.attributes),d?{title:d}:{}),{},{class:u.classes.join(" ")}),v=cr(u.styles);v.length>0&&(h.style=v);var g=[];return g.push({tag:"span",attributes:h,children:[a]}),d&&g.push({tag:"span",attributes:{class:"sr-only"},children:[d]}),g}var rs=Je.styles;function Rs(r){var a=r[0],d=r[1],u=r.slice(4),h=xa(u,1),v=h[0],g=null;return Array.isArray(v)?g={tag:"g",attributes:{class:"".concat(H1.cssPrefix,"-").concat(G3.GROUP)},children:[{tag:"path",attributes:{class:"".concat(H1.cssPrefix,"-").concat(G3.SECONDARY),fill:"currentColor",d:v[0]}},{tag:"path",attributes:{class:"".concat(H1.cssPrefix,"-").concat(G3.PRIMARY),fill:"currentColor",d:v[1]}}]}:g={tag:"path",attributes:{fill:"currentColor",d:v}},{found:!0,width:a,height:d,icon:g}}var kq={found:!1,width:512,height:512};function Cq(r,a){!xv&&!H1.showMissingIcons&&r&&console.error('Icon with name "'.concat(r,'" and prefix "').concat(a,'" is missing.'))}function Fs(r,a){var d=a;return a==="fa"&&H1.styleDefault!==null&&(a=u3()),new Promise(function(u,h){if(Tt("missingIconAbstract"),d==="fa"){var v=Rv(r)||{};r=v.iconName||r,a=v.prefix||a}if(r&&a&&rs[a]&&rs[a][r]){var g=rs[a][r];return u(Rs(g))}Cq(r,a),u(z1(z1({},kq),{},{icon:H1.showMissingIcons&&r?Tt("missingIconAbstract")||{}:{}}))})}var ig=function(){},js=H1.measurePerformance&&e6&&e6.mark&&e6.measure?e6:{mark:ig,measure:ig},Gn='FA "6.4.2"',wq=function(a){return js.mark("".concat(Gn," ").concat(a," begins")),function(){return jv(a)}},jv=function(a){js.mark("".concat(Gn," ").concat(a," ends")),js.measure("".concat(Gn," ").concat(a),"".concat(Gn," ").concat(a," begins"),"".concat(Gn," ").concat(a," ends"))},Pa={begin:wq,end:jv},k6=function(){};function og(r){var a=r.getAttribute?r.getAttribute(Q3):null;return typeof a=="string"}function Aq(r){var a=r.getAttribute?r.getAttribute(Va):null,d=r.getAttribute?r.getAttribute(La):null;return a&&d}function _q(r){return r&&r.classList&&r.classList.contains&&r.classList.contains(H1.replacementClass)}function zq(){if(H1.autoReplaceSvg===!0)return C6.replace;var r=C6[H1.autoReplaceSvg];return r||C6.replace}function yq(r){return A2.createElementNS("http://www.w3.org/2000/svg",r)}function Mq(r){return A2.createElement(r)}function Uv(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},d=a.ceFn,u=d===void 0?r.tag==="svg"?yq:Mq:d;if(typeof r=="string")return A2.createTextNode(r);var h=u(r.tag);Object.keys(r.attributes||[]).forEach(function(g){h.setAttribute(g,r.attributes[g])});var v=r.children||[];return v.forEach(function(g){h.appendChild(Uv(g,{ceFn:u}))}),h}function xq(r){var a=" ".concat(r.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var C6={replace:function(a){var d=a[0];if(d.parentNode)if(a[1].forEach(function(h){d.parentNode.insertBefore(Uv(h),d)}),d.getAttribute(Q3)===null&&H1.keepOriginalSource){var u=A2.createComment(xq(d));d.parentNode.replaceChild(u,d)}else d.remove()},nest:function(a){var d=a[0],u=a[1];if(~Ea(d).indexOf(H1.replacementClass))return C6.replace(a);var h=new RegExp("".concat(H1.cssPrefix,"-.*"));if(delete u[0].attributes.id,u[0].attributes.class){var v=u[0].attributes.class.split(" ").reduce(function(C,b){return b===H1.replacementClass||b.match(h)?C.toSvg.push(b):C.toNode.push(b),C},{toNode:[],toSvg:[]});u[0].attributes.class=v.toSvg.join(" "),v.toNode.length===0?d.removeAttribute("class"):d.setAttribute("class",v.toNode.join(" "))}var g=u.map(function(C){return Hi(C)}).join(`
`);d.setAttribute(Q3,""),d.innerHTML=g}};function rg(r){r()}function qv(r,a){var d=typeof a=="function"?a:k6;if(r.length===0)d();else{var u=rg;H1.mutateApproach===SU&&(u=f3.requestAnimationFrame||rg),u(function(){var h=zq(),v=Pa.begin("mutate");r.map(h),v(),d()})}}var Oa=!1;function Gv(){Oa=!0}function Us(){Oa=!1}var N6=null;function cg(r){if(Kp&&H1.observeMutations){var a=r.treeCallback,d=a===void 0?k6:a,u=r.nodeCallback,h=u===void 0?k6:u,v=r.pseudoElementsCallback,g=v===void 0?k6:v,C=r.observeMutationsRoot,b=C===void 0?A2:C;N6=new Kp(function(y){if(!Oa){var z=u3();en(y).forEach(function(_){if(_.type==="childList"&&_.addedNodes.length>0&&!og(_.addedNodes[0])&&(H1.searchPseudoElements&&g(_.target),d(_.target)),_.type==="attributes"&&_.target.parentNode&&H1.searchPseudoElements&&g(_.target.parentNode),_.type==="attributes"&&og(_.target)&&~PU.indexOf(_.attributeName))if(_.attributeName==="class"&&Aq(_.target)){var w=ar(Ea(_.target)),M=w.prefix,L=w.iconName;_.target.setAttribute(Va,M||z),L&&_.target.setAttribute(La,L)}else _q(_.target)&&h(_.target)})}}),Bt&&N6.observe(b,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Hq(){N6&&N6.disconnect()}function Vq(r){var a=r.getAttribute("style"),d=[];return a&&(d=a.split(";").reduce(function(u,h){var v=h.split(":"),g=v[0],C=v.slice(1);return g&&C.length>0&&(u[g]=C.join(":").trim()),u},{})),d}function Lq(r){var a=r.getAttribute("data-prefix"),d=r.getAttribute("data-icon"),u=r.innerText!==void 0?r.innerText.trim():"",h=ar(Ea(r));return h.prefix||(h.prefix=u3()),a&&d&&(h.prefix=a,h.iconName=d),h.iconName&&h.prefix||(h.prefix&&u.length>0&&(h.iconName=sq(h.prefix,r.innerText)||Ta(h.prefix,Is(r.innerText))),!h.iconName&&H1.autoFetchSvg&&r.firstChild&&r.firstChild.nodeType===Node.TEXT_NODE&&(h.iconName=r.firstChild.data)),h}function Sq(r){var a=en(r.attributes).reduce(function(h,v){return h.name!=="class"&&h.name!=="style"&&(h[v.name]=v.value),h},{}),d=r.getAttribute("title"),u=r.getAttribute("data-fa-title-id");return H1.autoA11y&&(d?a["aria-labelledby"]="".concat(H1.replacementClass,"-title-").concat(u||pi()):(a["aria-hidden"]="true",a.focusable="false")),a}function Eq(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ut,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function sg(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},d=Lq(r),u=d.iconName,h=d.prefix,v=d.rest,g=Sq(r),C=Ps("parseNodeAttributes",{},r),b=a.styleParser?Vq(r):[];return z1({iconName:u,title:r.getAttribute("title"),titleId:r.getAttribute("data-fa-title-id"),prefix:h,transform:ut,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:v,styles:b,attributes:g}},C)}var Nq=Je.styles;function Wv(r){var a=H1.autoReplaceSvg==="nest"?sg(r,{styleParser:!1}):sg(r);return~a.extra.classes.indexOf(Hv)?Tt("generateLayersText",r,a):Tt("generateSvgReplacementMutation",r,a)}var h3=new Set;Sa.map(function(r){h3.add("fa-".concat(r))});Object.keys(fi[w2]).map(h3.add.bind(h3));Object.keys(fi[S2]).map(h3.add.bind(h3));h3=Mi(h3);function ag(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Bt)return Promise.resolve();var d=A2.documentElement.classList,u=function(_){return d.add("".concat(Yp,"-").concat(_))},h=function(_){return d.remove("".concat(Yp,"-").concat(_))},v=H1.autoFetchSvg?h3:Sa.map(function(z){return"fa-".concat(z)}).concat(Object.keys(Nq));v.includes("fa")||v.push("fa");var g=[".".concat(Hv,":not([").concat(Q3,"])")].concat(v.map(function(z){return".".concat(z,":not([").concat(Q3,"])")})).join(", ");if(g.length===0)return Promise.resolve();var C=[];try{C=en(r.querySelectorAll(g))}catch{}if(C.length>0)u("pending"),h("complete");else return Promise.resolve();var b=Pa.begin("onTree"),y=C.reduce(function(z,_){try{var w=Wv(_);w&&z.push(w)}catch(M){xv||M.name==="MissingIcon"&&console.error(M)}return z},[]);return new Promise(function(z,_){Promise.all(y).then(function(w){qv(w,function(){u("active"),u("complete"),h("pending"),typeof a=="function"&&a(),b(),z()})}).catch(function(w){b(),_(w)})})}function Dq(r){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wv(r).then(function(d){d&&qv([d],a)})}function Tq(r){return function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=(a||{}).icon?a:Os(a||{}),h=d.mask;return h&&(h=(h||{}).icon?h:Os(h||{})),r(u,z1(z1({},d),{},{mask:h}))}}var Iq=function(a){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},u=d.transform,h=u===void 0?ut:u,v=d.symbol,g=v===void 0?!1:v,C=d.mask,b=C===void 0?null:C,y=d.maskId,z=y===void 0?null:y,_=d.title,w=_===void 0?null:_,M=d.titleId,L=M===void 0?null:M,N=d.classes,I=N===void 0?[]:N,T=d.attributes,E=T===void 0?{}:T,P=d.styles,R=P===void 0?{}:P;if(a){var W=a.prefix,i1=a.iconName,K=a.icon;return lr(z1({type:"icon"},a),function(){return J3("beforeDOMElementCreation",{iconDefinition:a,params:d}),H1.autoA11y&&(w?E["aria-labelledby"]="".concat(H1.replacementClass,"-title-").concat(L||pi()):(E["aria-hidden"]="true",E.focusable="false")),Ba({icons:{main:Rs(K),mask:b?Rs(b.icon):{found:!1,width:null,height:null,icon:{}}},prefix:W,iconName:i1,transform:z1(z1({},ut),h),symbol:g,title:w,maskId:z,titleId:L,extra:{attributes:E,styles:R,classes:I}})})}},Bq={mixout:function(){return{icon:Tq(Iq)}},hooks:function(){return{mutationObserverCallbacks:function(d){return d.treeCallback=ag,d.nodeCallback=Dq,d}}},provides:function(a){a.i2svg=function(d){var u=d.node,h=u===void 0?A2:u,v=d.callback,g=v===void 0?function(){}:v;return ag(h,g)},a.generateSvgReplacementMutation=function(d,u){var h=u.iconName,v=u.title,g=u.titleId,C=u.prefix,b=u.transform,y=u.symbol,z=u.mask,_=u.maskId,w=u.extra;return new Promise(function(M,L){Promise.all([Fs(h,C),z.iconName?Fs(z.iconName,z.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var I=xa(N,2),T=I[0],E=I[1];M([d,Ba({icons:{main:T,mask:E},prefix:C,iconName:h,transform:b,symbol:y,maskId:_,title:v,titleId:g,extra:w,watchable:!0})])}).catch(L)})},a.generateAbstractIcon=function(d){var u=d.children,h=d.attributes,v=d.main,g=d.transform,C=d.styles,b=cr(C);b.length>0&&(h.style=b);var y;return Na(g)&&(y=Tt("generateAbstractTransformGrouping",{main:v,transform:g,containerWidth:v.width,iconWidth:v.width})),u.push(y||v.icon),{children:u,attributes:h}}}},Pq={mixout:function(){return{layer:function(d){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=u.classes,v=h===void 0?[]:h;return lr({type:"layer"},function(){J3("beforeDOMElementCreation",{assembler:d,params:u});var g=[];return d(function(C){Array.isArray(C)?C.map(function(b){g=g.concat(b.abstract)}):g=g.concat(C.abstract)}),[{tag:"span",attributes:{class:["".concat(H1.cssPrefix,"-layers")].concat(Mi(v)).join(" ")},children:g}]})}}}},Oq={mixout:function(){return{counter:function(d){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=u.title,v=h===void 0?null:h,g=u.classes,C=g===void 0?[]:g,b=u.attributes,y=b===void 0?{}:b,z=u.styles,_=z===void 0?{}:z;return lr({type:"counter",content:d},function(){return J3("beforeDOMElementCreation",{content:d,params:u}),vq({content:d.toString(),title:v,extra:{attributes:y,styles:_,classes:["".concat(H1.cssPrefix,"-layers-counter")].concat(Mi(C))}})})}}}},Rq={mixout:function(){return{text:function(d){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},h=u.transform,v=h===void 0?ut:h,g=u.title,C=g===void 0?null:g,b=u.classes,y=b===void 0?[]:b,z=u.attributes,_=z===void 0?{}:z,w=u.styles,M=w===void 0?{}:w;return lr({type:"text",content:d},function(){return J3("beforeDOMElementCreation",{content:d,params:u}),ng({content:d,transform:z1(z1({},ut),v),title:C,extra:{attributes:_,styles:M,classes:["".concat(H1.cssPrefix,"-layers-text")].concat(Mi(y))}})})}}},provides:function(a){a.generateLayersText=function(d,u){var h=u.title,v=u.transform,g=u.extra,C=null,b=null;if(zv){var y=parseInt(getComputedStyle(d).fontSize,10),z=d.getBoundingClientRect();C=z.width/y,b=z.height/y}return H1.autoA11y&&!h&&(g.attributes["aria-hidden"]="true"),Promise.resolve([d,ng({content:d.innerHTML,width:C,height:b,transform:v,title:h,extra:g,watchable:!0})])}}},Fq=new RegExp('"',"ug"),lg=[1105920,1112319];function jq(r){var a=r.replace(Fq,""),d=tq(a,0),u=d>=lg[0]&&d<=lg[1],h=a.length===2?a[0]===a[1]:!1;return{value:Is(h?a[0]:a),isSecondary:u||h}}function dg(r,a){var d="".concat(LU).concat(a.replace(":","-"));return new Promise(function(u,h){if(r.getAttribute(d)!==null)return u();var v=en(r.children),g=v.filter(function(K){return K.getAttribute(Ts)===a})[0],C=f3.getComputedStyle(r,a),b=C.getPropertyValue("font-family").match(TU),y=C.getPropertyValue("font-weight"),z=C.getPropertyValue("content");if(g&&!b)return r.removeChild(g),u();if(b&&z!=="none"&&z!==""){var _=C.getPropertyValue("content"),w=~["Sharp"].indexOf(b[2])?S2:w2,M=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(b[2])?ui[w][b[2].toLowerCase()]:IU[w][y],L=jq(_),N=L.value,I=L.isSecondary,T=b[0].startsWith("FontAwesome"),E=Ta(M,N),P=E;if(T){var R=aq(N);R.iconName&&R.prefix&&(E=R.iconName,M=R.prefix)}if(E&&!I&&(!g||g.getAttribute(Va)!==M||g.getAttribute(La)!==P)){r.setAttribute(d,P),g&&r.removeChild(g);var W=Eq(),i1=W.extra;i1.attributes[Ts]=a,Fs(E,M).then(function(K){var S=Ba(z1(z1({},W),{},{icons:{main:K,mask:Ia()},prefix:M,iconName:P,extra:i1,watchable:!0})),Y=A2.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?r.insertBefore(Y,r.firstChild):r.appendChild(Y),Y.outerHTML=S.map(function(l1){return Hi(l1)}).join(`
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const x4=typeof window<"u";function Dv1(r){return r.__esModule||r[Symbol.toStringTag]==="Module"}const c2=Object.assign;function as(r,a){const d={};for(const u in a){const h=a[u];d[u]=et(h)?h.map(r):r(h)}return d}const Xn=()=>{},et=Array.isArray,Tv1=/\/$/,Iv1=r=>r.replace(Tv1,"");function ls(r,a,d="/"){let u,h={},v="",g="";const C=a.indexOf("#");let b=a.indexOf("?");return C<b&&C>=0&&(b=-1),b>-1&&(u=a.slice(0,b),v=a.slice(b+1,C>-1?C:a.length),h=r(v)),C>-1&&(u=u||a.slice(0,C),g=a.slice(C,a.length)),u=Rv1(u??a,d),{fullPath:u+(v&&"?")+v+g,path:u,query:h,hash:g}}function Bv1(r,a){const d=a.query?r(a.query):"";return a.path+(d&&"?")+d+(a.hash||"")}function vg(r,a){return!a||!r.toLowerCase().startsWith(a.toLowerCase())?r:r.slice(a.length)||"/"}function Pv1(r,a,d){const u=a.matched.length-1,h=d.matched.length-1;return u>-1&&u===h&&$4(a.matched[u],d.matched[h])&&nx(a.params,d.params)&&r(a.query)===r(d.query)&&a.hash===d.hash}function $4(r,a){return(r.aliasOf||r)===(a.aliasOf||a)}function nx(r,a){if(Object.keys(r).length!==Object.keys(a).length)return!1;for(const d in r)if(!Ov1(r[d],a[d]))return!1;return!0}function Ov1(r,a){return et(r)?kg(r,a):et(a)?kg(a,r):r===a}function kg(r,a){return et(a)?r.length===a.length&&r.every((d,u)=>d===a[u]):r.length===1&&r[0]===a}function Rv1(r,a){if(r.startsWith("/"))return r;if(!r)return a;const d=a.split("/"),u=r.split("/"),h=u[u.length-1];(h===".."||h===".")&&u.push("");let v=d.length-1,g,C;for(g=0;g<u.length;g++)if(C=u[g],C!==".")if(C==="..")v>1&&v--;else break;return d.slice(0,v).join("/")+"/"+u.slice(g-(g===u.length?1:0)).join("/")}var gi;(function(r){r.pop="pop",r.push="push"})(gi||(gi={}));var ei;(function(r){r.back="back",r.forward="forward",r.unknown=""})(ei||(ei={}));function Fv1(r){if(!r)if(x4){const a=document.querySelector("base");r=a&&a.getAttribute("href")||"/",r=r.replace(/^\w+:\/\/[^\/]+/,"")}else r="/";return r[0]!=="/"&&r[0]!=="#"&&(r="/"+r),Iv1(r)}const jv1=/^[^#]+#/;function Uv1(r,a){return r.replace(jv1,"#")+a}function qv1(r,a){const d=document.documentElement.getBoundingClientRect(),u=r.getBoundingClientRect();return{behavior:a.behavior,left:u.left-d.left-(a.left||0),top:u.top-d.top-(a.top||0)}}const Mr=()=>({left:window.pageXOffset,top:window.pageYOffset});function Gv1(r){let a;if("el"in r){const d=r.el,u=typeof d=="string"&&d.startsWith("#"),h=typeof d=="string"?u?document.getElementById(d.slice(1)):document.querySelector(d):d;if(!h)return;a=qv1(h,r)}else a=r;"scrollBehavior"in document.documentElement.style?window.scrollTo(a):window.scrollTo(a.left!=null?a.left:window.pageXOffset,a.top!=null?a.top:window.pageYOffset)}function Cg(r,a){return(history.state?history.state.position-a:-1)+r}const Gs=new Map;function Wv1(r,a){Gs.set(r,a)}function $v1(r){const a=Gs.get(r);return Gs.delete(r),a}let Zv1=()=>location.protocol+"//"+location.host;function ix(r,a){const{pathname:d,search:u,hash:h}=a,v=r.indexOf("#");if(v>-1){let C=h.includes(r.slice(v))?r.slice(v).length:1,b=h.slice(C);return b[0]!=="/"&&(b="/"+b),vg(b,"")}return vg(d,r)+u+h}function Kv1(r,a,d,u){let h=[],v=[],g=null;const C=({state:w})=>{const M=ix(r,location),L=d.value,N=a.value;let I=0;if(w){if(d.value=M,a.value=w,g&&g===L){g=null;return}I=N?w.position-N.position:0}else u(M);h.forEach(T=>{T(d.value,L,{delta:I,type:gi.pop,direction:I?I>0?ei.forward:ei.back:ei.unknown})})};function b(){g=d.value}function y(w){h.push(w);const M=()=>{const L=h.indexOf(w);L>-1&&h.splice(L,1)};return v.push(M),M}function z(){const{history:w}=window;w.state&&w.replaceState(c2({},w.state,{scroll:Mr()}),"")}function _(){for(const w of v)w();v=[],window.removeEventListener("popstate",C),window.removeEventListener("beforeunload",z)}return window.addEventListener("popstate",C),window.addEventListener("beforeunload",z,{passive:!0}),{pauseListeners:b,listen:y,destroy:_}}function wg(r,a,d,u=!1,h=!1){return{back:r,current:a,forward:d,replaced:u,position:window.history.length,scroll:h?Mr():null}}function Yv1(r){const{history:a,location:d}=window,u={value:ix(r,d)},h={value:a.state};h.value||v(u.value,{back:null,current:u.value,forward:null,position:a.length-1,replaced:!0,scroll:null},!0);function v(b,y,z){const _=r.indexOf("#"),w=_>-1?(d.host&&document.querySelector("base")?r:r.slice(_))+b:Zv1()+r+b;try{a[z?"replaceState":"pushState"](y,"",w),h.value=y}catch(M){console.error(M),d[z?"replace":"assign"](w)}}function g(b,y){const z=c2({},a.state,wg(h.value.back,b,h.value.forward,!0),y,{position:h.value.position});v(b,z,!0),u.value=b}function C(b,y){const z=c2({},h.value,a.state,{forward:b,scroll:Mr()});v(z.current,z,!0);const _=c2({},wg(u.value,b,null),{position:z.position+1},y);v(b,_,!1),u.value=b}return{location:u,state:h,push:C,replace:g}}function Qv1(r){r=Fv1(r);const a=Yv1(r),d=Kv1(r,a.state,a.location,a.replace);function u(v,g=!0){g||d.pauseListeners(),history.go(v)}const h=c2({location:"",base:r,go:u,createHref:Uv1.bind(null,r)},a,d);return Object.defineProperty(h,"location",{enumerable:!0,get:()=>a.location.value}),Object.defineProperty(h,"state",{enumerable:!0,get:()=>a.state.value}),h}function Jv1(r){return r=location.host?r||location.pathname+location.search:"",r.includes("#")||(r+="#"),Qv1(r)}function Xv1(r){return typeof r=="string"||r&&typeof r=="object"}function ox(r){return typeof r=="string"||typeof r=="symbol"}const Xt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},rx=Symbol("");var Ag;(function(r){r[r.aborted=4]="aborted",r[r.cancelled=8]="cancelled",r[r.duplicated=16]="duplicated"})(Ag||(Ag={}));function Z4(r,a){return c2(new Error,{type:r,[rx]:!0},a)}function _t(r,a){return r instanceof Error&&rx in r&&(a==null||!!(r.type&a))}const _g="[^/]+?",ek1={sensitive:!1,strict:!1,start:!0,end:!0},tk1=/[.+*?^${}()[\]/\\]/g;function nk1(r,a){const d=c2({},ek1,a),u=[];let h=d.start?"^":"";const v=[];for(const y of r){const z=y.length?[]:[90];d.strict&&!y.length&&(h+="/");for(let _=0;_<y.length;_++){const w=y[_];let M=40+(d.sensitive?.25:0);if(w.type===0)_||(h+="/"),h+=w.value.replace(tk1,"\\$&"),M+=40;else if(w.type===1){const{value:L,repeatable:N,optional:I,regexp:T}=w;v.push({name:L,repeatable:N,optional:I});const E=T||_g;if(E!==_g){M+=10;try{new RegExp(`(${E})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${L}" (${E}): `+R.message)}}let P=N?`((?:${E})(?:/(?:${E}))*)`:`(${E})`;_||(P=I&&y.length<2?`(?:/${P})`:"/"+P),I&&(P+="?"),h+=P,M+=20,I&&(M+=-8),N&&(M+=-20),E===".*"&&(M+=-50)}z.push(M)}u.push(z)}if(d.strict&&d.end){const y=u.length-1;u[y][u[y].length-1]+=.7000000000000001}d.strict||(h+="/?"),d.end?h+="$":d.strict&&(h+="(?:/|$)");const g=new RegExp(h,d.sensitive?"":"i");function C(y){const z=y.match(g),_={};if(!z)return null;for(let w=1;w<z.length;w++){const M=z[w]||"",L=v[w-1];_[L.name]=M&&L.repeatable?M.split("/"):M}return _}function b(y){let z="",_=!1;for(const w of r){(!_||!z.endsWith("/"))&&(z+="/"),_=!1;for(const M of w)if(M.type===0)z+=M.value;else if(M.type===1){const{value:L,repeatable:N,optional:I}=M,T=L in y?y[L]:"";if(et(T)&&!N)throw new Error(`Provided param "${L}" is an array but it is not repeatable (* or + modifiers)`);const E=et(T)?T.join("/"):T;if(!E)if(I)w.length<2&&(z.endsWith("/")?z=z.slice(0,-1):_=!0);else throw new Error(`Missing required param "${L}"`);z+=E}}return z||"/"}return{re:g,score:u,keys:v,parse:C,stringify:b}}function ik1(r,a){let d=0;for(;d<r.length&&d<a.length;){const u=a[d]-r[d];if(u)return u;d++}return r.length<a.length?r.length===1&&r[0]===40+40?-1:1:r.length>a.length?a.length===1&&a[0]===40+40?1:-1:0}function ok1(r,a){let d=0;const u=r.score,h=a.score;for(;d<u.length&&d<h.length;){const v=ik1(u[d],h[d]);if(v)return v;d++}if(Math.abs(h.length-u.length)===1){if(zg(u))return 1;if(zg(h))return-1}return h.length-u.length}function zg(r){const a=r[r.length-1];return r.length>0&&a[a.length-1]<0}const rk1={type:0,value:""},ck1=/[a-zA-Z0-9_]/;function sk1(r){if(!r)return[[]];if(r==="/")return[[rk1]];if(!r.startsWith("/"))throw new Error(`Invalid path "${r}"`);function a(M){throw new Error(`ERR (${d})/"${y}": ${M}`)}let d=0,u=d;const h=[];let v;function g(){v&&h.push(v),v=[]}let C=0,b,y="",z="";function _(){y&&(d===0?v.push({type:0,value:y}):d===1||d===2||d===3?(v.length>1&&(b==="*"||b==="+")&&a(`A repeatable param (${y}) must be alone in its segment. eg: '/:ids+.`),v.push({type:1,value:y,regexp:z,repeatable:b==="*"||b==="+",optional:b==="*"||b==="?"})):a("Invalid state to consume buffer"),y="")}function w(){y+=b}for(;C<r.length;){if(b=r[C++],b==="\\"&&d!==2){u=d,d=4;continue}switch(d){case 0:b==="/"?(y&&_(),g()):b===":"?(_(),d=1):w();break;case 4:w(),d=u;break;case 1:b==="("?d=2:ck1.test(b)?w():(_(),d=0,b!=="*"&&b!=="?"&&b!=="+"&&C--);break;case 2:b===")"?z[z.length-1]=="\\"?z=z.slice(0,-1)+b:d=3:z+=b;break;case 3:_(),d=0,b!=="*"&&b!=="?"&&b!=="+"&&C--,z="";break;default:a("Unknown state");break}}return d===2&&a(`Unfinished custom RegExp for param "${y}"`),_(),g(),h}function ak1(r,a,d){const u=nk1(sk1(r.path),d),h=c2(u,{record:r,parent:a,children:[],alias:[]});return a&&!h.record.aliasOf==!a.record.aliasOf&&a.children.push(h),h}function lk1(r,a){const d=[],u=new Map;a=xg({strict:!1,end:!0,sensitive:!1},a);function h(z){return u.get(z)}function v(z,_,w){const M=!w,L=dk1(z);L.aliasOf=w&&w.record;const N=xg(a,z),I=[L];if("alias"in z){const P=typeof z.alias=="string"?[z.alias]:z.alias;for(const R of P)I.push(c2({},L,{components:w?w.record.components:L.components,path:R,aliasOf:w?w.record:L}))}let T,E;for(const P of I){const{path:R}=P;if(_&&R[0]!=="/"){const W=_.record.path,i1=W[W.length-1]==="/"?"":"/";P.path=_.record.path+(R&&i1+R)}if(T=ak1(P,_,N),w?w.alias.push(T):(E=E||T,E!==T&&E.alias.push(T),M&&z.name&&!Mg(T)&&g(z.name)),L.children){const W=L.children;for(let i1=0;i1<W.length;i1++)v(W[i1],T,w&&w.children[i1])}w=w||T,(T.record.components&&Object.keys(T.record.components).length||T.record.name||T.record.redirect)&&b(T)}return E?()=>{g(E)}:Xn}function g(z){if(ox(z)){const _=u.get(z);_&&(u.delete(z),d.splice(d.indexOf(_),1),_.children.forEach(g),_.alias.forEach(g))}else{const _=d.indexOf(z);_>-1&&(d.splice(_,1),z.record.name&&u.delete(z.record.name),z.children.forEach(g),z.alias.forEach(g))}}function C(){return d}function b(z){let _=0;for(;_<d.length&&ok1(z,d[_])>=0&&(z.record.path!==d[_].record.path||!cx(z,d[_]));)_++;d.splice(_,0,z),z.record.name&&!Mg(z)&&u.set(z.record.name,z)}function y(z,_){let w,M={},L,N;if("name"in z&&z.name){if(w=u.get(z.name),!w)throw Z4(1,{location:z});N=w.record.name,M=c2(yg(_.params,w.keys.filter(E=>!E.optional).map(E=>E.name)),z.params&&yg(z.params,w.keys.map(E=>E.name))),L=w.stringify(M)}else if("path"in z)L=z.path,w=d.find(E=>E.re.test(L)),w&&(M=w.parse(L),N=w.record.name);else{if(w=_.name?u.get(_.name):d.find(E=>E.re.test(_.path)),!w)throw Z4(1,{location:z,currentLocation:_});N=w.record.name,M=c2({},_.params,z.params),L=w.stringify(M)}const I=[];let T=w;for(;T;)I.unshift(T.record),T=T.parent;return{name:N,path:L,params:M,matched:I,meta:uk1(I)}}return r.forEach(z=>v(z)),{addRoute:v,resolve:y,removeRoute:g,getRoutes:C,getRecordMatcher:h}}function yg(r,a){const d={};for(const u of a)u in r&&(d[u]=r[u]);return d}function dk1(r){return{path:r.path,redirect:r.redirect,name:r.name,meta:r.meta||{},aliasOf:void 0,beforeEnter:r.beforeEnter,props:fk1(r),children:r.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in r?r.components||null:r.component&&{default:r.component}}}function fk1(r){const a={},d=r.props||!1;if("component"in r)a.default=d;else for(const u in r.components)a[u]=typeof d=="object"?d[u]:d;return a}function Mg(r){for(;r;){if(r.record.aliasOf)return!0;r=r.parent}return!1}function uk1(r){return r.reduce((a,d)=>c2(a,d.meta),{})}function xg(r,a){const d={};for(const u in r)d[u]=u in a?a[u]:r[u];return d}function cx(r,a){return a.children.some(d=>d===r||cx(r,d))}const sx=/#/g,hk1=/&/g,mk1=/\//g,pk1=/=/g,gk1=/\?/g,ax=/\+/g,bk1=/%5B/g,vk1=/%5D/g,lx=/%5E/g,kk1=/%60/g,dx=/%7B/g,Ck1=/%7C/g,fx=/%7D/g,wk1=/%20/g;function D5(r){return encodeURI(""+r).replace(Ck1,"|").replace(bk1,"[").replace(vk1,"]")}function Ak1(r){return D5(r).replace(dx,"{").replace(fx,"}").replace(lx,"^")}function Ws(r){return D5(r).replace(ax,"%2B").replace(wk1,"+").replace(sx,"%23").replace(hk1,"%26").replace(kk1,"`").replace(dx,"{").replace(fx,"}").replace(lx,"^")}function _k1(r){return Ws(r).replace(pk1,"%3D")}function zk1(r){return D5(r).replace(sx,"%23").replace(gk1,"%3F")}function yk1(r){return r==null?"":zk1(r).replace(mk1,"%2F")}function T6(r){try{return decodeURIComponent(""+r)}catch{}return""+r}function Mk1(r){const a={};if(r===""||r==="?")return a;const u=(r[0]==="?"?r.slice(1):r).split("&");for(let h=0;h<u.length;++h){const v=u[h].replace(ax," "),g=v.indexOf("="),C=T6(g<0?v:v.slice(0,g)),b=g<0?null:T6(v.slice(g+1));if(C in a){let y=a[C];et(y)||(y=a[C]=[y]),y.push(b)}else a[C]=b}return a}function Hg(r){let a="";for(let d in r){const u=r[d];if(d=_k1(d),u==null){u!==void 0&&(a+=(a.length?"&":"")+d);continue}(et(u)?u.map(v=>v&&Ws(v)):[u&&Ws(u)]).forEach(v=>{v!==void 0&&(a+=(a.length?"&":"")+d,v!=null&&(a+="="+v))})}return a}function xk1(r){const a={};for(const d in r){const u=r[d];u!==void 0&&(a[d]=et(u)?u.map(h=>h==null?null:""+h):u==null?u:""+u)}return a}const Hk1=Symbol(""),Vg=Symbol(""),T5=Symbol(""),I5=Symbol(""),$s=Symbol("");function Fn(){let r=[];function a(u){return r.push(u),()=>{const h=r.indexOf(u);h>-1&&r.splice(h,1)}}function d(){r=[]}return{add:a,list:()=>r.slice(),reset:d}}function n3(r,a,d,u,h){const v=u&&(u.enterCallbacks[h]=u.enterCallbacks[h]||[]);return()=>new Promise((g,C)=>{const b=_=>{_===!1?C(Z4(4,{from:d,to:a})):_ instanceof Error?C(_):Xv1(_)?C(Z4(2,{from:a,to:_})):(v&&u.enterCallbacks[h]===v&&typeof _=="function"&&v.push(_),g())},y=r.call(u&&u.instances[h],a,d,b);let z=Promise.resolve(y);r.length<3&&(z=z.then(b)),z.catch(_=>C(_))})}function ds(r,a,d,u){const h=[];for(const v of r)for(const g in v.components){let C=v.components[g];if(!(a!=="beforeRouteEnter"&&!v.instances[g]))if(Vk1(C)){const y=(C.__vccOpts||C)[a];y&&h.push(n3(y,d,u,v,g))}else{let b=C();h.push(()=>b.then(y=>{if(!y)return Promise.reject(new Error(`Couldn't resolve component "${g}" at "${v.path}"`));const z=Dv1(y)?y.default:y;v.components[g]=z;const w=(z.__vccOpts||z)[a];return w&&n3(w,d,u,v,g)()}))}}return h}function Vk1(r){return typeof r=="object"||"displayName"in r||"props"in r||"__vccOpts"in r}function Lg(r){const a=ht(T5),d=ht(I5),u=Q2(()=>a.resolve(j(r.to))),h=Q2(()=>{const{matched:b}=u.value,{length:y}=b,z=b[y-1],_=d.matched;if(!z||!_.length)return-1;const w=_.findIndex($4.bind(null,z));if(w>-1)return w;const M=Sg(b[y-2]);return y>1&&Sg(z)===M&&_[_.length-1].path!==M?_.findIndex($4.bind(null,b[y-2])):w}),v=Q2(()=>h.value>-1&&Nk1(d.params,u.value.params)),g=Q2(()=>h.value>-1&&h.value===d.matched.length-1&&nx(d.params,u.value.params));function C(b={}){return Ek1(b)?a[j(r.replace)?"replace":"push"](j(r.to)).catch(Xn):Promise.resolve()}return{route:u,href:Q2(()=>u.value.href),isActive:v,isExactActive:g,navigate:C}}const Lk1=Ai({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Lg,setup(r,{slots:a}){const d=Y6(Lg(r)),{options:u}=ht(T5),h=Q2(()=>({[Eg(r.activeClass,u.linkActiveClass,"router-link-active")]:d.isActive,[Eg(r.exactActiveClass,u.linkExactActiveClass,"router-link-exact-active")]:d.isExactActive}));return()=>{const v=a.default&&a.default(d);return r.custom?v:rr("a",{"aria-current":d.isExactActive?r.ariaCurrentValue:null,href:d.href,onClick:d.navigate,class:h.value},v)}}}),Sk1=Lk1;function Ek1(r){if(!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)&&!r.defaultPrevented&&!(r.button!==void 0&&r.button!==0)){if(r.currentTarget&&r.currentTarget.getAttribute){const a=r.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(a))return}return r.preventDefault&&r.preventDefault(),!0}}function Nk1(r,a){for(const d in a){const u=a[d],h=r[d];if(typeof u=="string"){if(u!==h)return!1}else if(!et(h)||h.length!==u.length||u.some((v,g)=>v!==h[g]))return!1}return!0}function Sg(r){return r?r.aliasOf?r.aliasOf.path:r.path:""}const Eg=(r,a,d)=>r??a??d,Dk1=Ai({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(r,{attrs:a,slots:d}){const u=ht($s),h=Q2(()=>r.route||u.value),v=ht(Vg,0),g=Q2(()=>{let y=j(v);const{matched:z}=h.value;let _;for(;(_=z[y])&&!_.components;)y++;return y}),C=Q2(()=>h.value.matched[g.value]);b6(Vg,Q2(()=>g.value+1)),b6(Hk1,C),b6($s,h);const b=P1();return Lt(()=>[b.value,C.value,r.name],([y,z,_],[w,M,L])=>{z&&(z.instances[_]=y,M&&M!==z&&y&&y===w&&(z.leaveGuards.size||(z.leaveGuards=M.leaveGuards),z.updateGuards.size||(z.updateGuards=M.updateGuards))),y&&z&&(!M||!$4(z,M)||!w)&&(z.enterCallbacks[_]||[]).forEach(N=>N(y))},{flush:"post"}),()=>{const y=h.value,z=r.name,_=C.value,w=_&&_.components[z];if(!w)return Ng(d.default,{Component:w,route:y});const M=_.props[z],L=M?M===!0?y.params:typeof M=="function"?M(y):M:null,I=rr(w,c2({},L,a,{onVnodeUnmounted:T=>{T.component.isUnmounted&&(_.instances[z]=null)},ref:b}));return Ng(d.default,{Component:I,route:y})||I}}});function Ng(r,a){if(!r)return null;const d=r(a);return d.length===1?d[0]:d}const Tk1=Dk1;function Ik1(r){const a=lk1(r.routes,r),d=r.parseQuery||Mk1,u=r.stringifyQuery||Hg,h=r.history,v=Fn(),g=Fn(),C=Fn(),b=pF(Xt);let y=Xt;x4&&r.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const z=as.bind(null,Q=>""+Q),_=as.bind(null,yk1),w=as.bind(null,T6);function M(Q,A1){let p1,x1;return ox(Q)?(p1=a.getRecordMatcher(Q),x1=A1):x1=Q,a.addRoute(x1,p1)}function L(Q){const A1=a.getRecordMatcher(Q);A1&&a.removeRoute(A1)}function N(){return a.getRoutes().map(Q=>Q.record)}function I(Q){return!!a.getRecordMatcher(Q)}function T(Q,A1){if(A1=c2({},A1||b.value),typeof Q=="string"){const G=ls(d,Q,A1.path),J=a.resolve({path:G.path},A1),t1=h.createHref(G.fullPath);return c2(G,J,{params:w(J.params),hash:T6(G.hash),redirectedFrom:void 0,href:t1})}let p1;if("path"in Q)p1=c2({},Q,{path:ls(d,Q.path,A1.path).path});else{const G=c2({},Q.params);for(const J in G)G[J]==null&&delete G[J];p1=c2({},Q,{params:_(G)}),A1.params=_(A1.params)}const x1=a.resolve(p1,A1),U1=Q.hash||"";x1.params=z(w(x1.params));const O=Bv1(u,c2({},Q,{hash:Ak1(U1),path:x1.path})),U=h.createHref(O);return c2({fullPath:O,hash:U1,query:u===Hg?xk1(Q.query):Q.query||{}},x1,{redirectedFrom:void 0,href:U})}function E(Q){return typeof Q=="string"?ls(d,Q,b.value.path):c2({},Q)}function P(Q,A1){if(y!==Q)return Z4(8,{from:A1,to:Q})}function R(Q){return K(Q)}function W(Q){return R(c2(E(Q),{replace:!0}))}function i1(Q){const A1=Q.matched[Q.matched.length-1];if(A1&&A1.redirect){const{redirect:p1}=A1;let x1=typeof p1=="function"?p1(Q):p1;return typeof x1=="string"&&(x1=x1.includes("?")||x1.includes("#")?x1=E(x1):{path:x1},x1.params={}),c2({query:Q.query,hash:Q.hash,params:"path"in x1?{}:Q.params},x1)}}function K(Q,A1){const p1=y=T(Q),x1=b.value,U1=Q.state,O=Q.force,U=Q.replace===!0,G=i1(p1);if(G)return K(c2(E(G),{state:typeof G=="object"?c2({},U1,G.state):U1,force:O,replace:U}),A1||p1);const J=p1;J.redirectedFrom=A1;let t1;return!O&&Pv1(u,x1,p1)&&(t1=Z4(16,{to:J,from:x1}),oe(x1,x1,!0,!1)),(t1?Promise.resolve(t1):l1(J,x1)).catch(o1=>_t(o1)?_t(o1,2)?o1:Oe(o1):N1(o1,J,x1)).then(o1=>{if(o1){if(_t(o1,2))return K(c2({replace:U},E(o1.to),{state:typeof o1.to=="object"?c2({},U1,o1.to.state):U1,force:O}),A1||J)}else o1=d1(J,x1,!0,U,U1);return g1(J,x1,o1),o1})}function S(Q,A1){const p1=P(Q,A1);return p1?Promise.reject(p1):Promise.resolve()}function Y(Q){const A1=pt.values().next().value;return A1&&typeof A1.runWithContext=="function"?A1.runWithContext(Q):Q()}function l1(Q,A1){let p1;const[x1,U1,O]=Bk1(Q,A1);p1=ds(x1.reverse(),"beforeRouteLeave",Q,A1);for(const G of x1)G.leaveGuards.forEach(J=>{p1.push(n3(J,Q,A1))});const U=S.bind(null,Q,A1);return p1.push(U),D2(p1).then(()=>{p1=[];for(const G of v.list())p1.push(n3(G,Q,A1));return p1.push(U),D2(p1)}).then(()=>{p1=ds(U1,"beforeRouteUpdate",Q,A1);for(const G of U1)G.updateGuards.forEach(J=>{p1.push(n3(J,Q,A1))});return p1.push(U),D2(p1)}).then(()=>{p1=[];for(const G of O)if(G.beforeEnter)if(et(G.beforeEnter))for(const J of G.beforeEnter)p1.push(n3(J,Q,A1));else p1.push(n3(G.beforeEnter,Q,A1));return p1.push(U),D2(p1)}).then(()=>(Q.matched.forEach(G=>G.enterCallbacks={}),p1=ds(O,"beforeRouteEnter",Q,A1),p1.push(U),D2(p1))).then(()=>{p1=[];for(const G of g.list())p1.push(n3(G,Q,A1));return p1.push(U),D2(p1)}).catch(G=>_t(G,8)?G:Promise.reject(G))}function g1(Q,A1,p1){C.list().forEach(x1=>Y(()=>x1(Q,A1,p1)))}function d1(Q,A1,p1,x1,U1){const O=P(Q,A1);if(O)return O;const U=A1===Xt,G=x4?history.state:{};p1&&(x1||U?h.replace(Q.fullPath,c2({scroll:U&&G&&G.scroll},U1)):h.push(Q.fullPath,U1)),b.value=Q,oe(Q,A1,p1,U),Oe()}let k1;function X(){k1||(k1=h.listen((Q,A1,p1)=>{if(!p3.listening)return;const x1=T(Q),U1=i1(x1);if(U1){K(c2(U1,{replace:!0}),x1).catch(Xn);return}y=x1;const O=b.value;x4&&Wv1(Cg(O.fullPath,p1.delta),Mr()),l1(x1,O).catch(U=>_t(U,12)?U:_t(U,2)?(K(U.to,x1).then(G=>{_t(G,20)&&!p1.delta&&p1.type===gi.pop&&h.go(-1,!1)}).catch(Xn),Promise.reject()):(p1.delta&&h.go(-p1.delta,!1),N1(U,x1,O))).then(U=>{U=U||d1(x1,O,!1),U&&(p1.delta&&!_t(U,8)?h.go(-p1.delta,!1):p1.type===gi.pop&&_t(U,20)&&h.go(-1,!1)),g1(x1,O,U)}).catch(Xn)}))}let s1=Fn(),M1=Fn(),a1;function N1(Q,A1,p1){Oe(Q);const x1=M1.list();return x1.length?x1.forEach(U1=>U1(Q,A1,p1)):console.error(Q),Promise.reject(Q)}function R1(){return a1&&b.value!==Xt?Promise.resolve():new Promise((Q,A1)=>{s1.add([Q,A1])})}function Oe(Q){return a1||(a1=!Q,X(),s1.list().forEach(([A1,p1])=>Q?p1(Q):A1()),s1.reset()),Q}function oe(Q,A1,p1,x1){const{scrollBehavior:U1}=r;if(!x4||!U1)return Promise.resolve();const O=!p1&&$v1(Cg(Q.fullPath,0))||(x1||!p1)&&history.state&&history.state.scroll||null;return da().then(()=>U1(Q,A1,O)).then(U=>U&&Gv1(U)).catch(U=>N1(U,Q,A1))}const $2=Q=>h.go(Q);let tt;const pt=new Set,p3={currentRoute:b,listening:!0,addRoute:M,removeRoute:L,hasRoute:I,getRoutes:N,resolve:T,options:r,push:R,replace:W,go:$2,back:()=>$2(-1),forward:()=>$2(1),beforeEach:v.add,beforeResolve:g.add,afterEach:C.add,onError:M1.add,isReady:R1,install(Q){const A1=this;Q.component("RouterLink",Sk1),Q.component("RouterView",Tk1),Q.config.globalProperties.$router=A1,Object.defineProperty(Q.config.globalProperties,"$route",{enumerable:!0,get:()=>j(b)}),x4&&!tt&&b.value===Xt&&(tt=!0,R(h.location).catch(U1=>{}));const p1={};for(const U1 in Xt)Object.defineProperty(p1,U1,{get:()=>b.value[U1],enumerable:!0});Q.provide(T5,A1),Q.provide(I5,Cb(p1)),Q.provide($s,b);const x1=Q.unmount;pt.add(Q),Q.unmount=function(){pt.delete(Q),pt.size<1&&(y=Xt,k1&&k1(),k1=null,b.value=Xt,tt=!1,a1=!1),x1()}}};function D2(Q){return Q.reduce((A1,p1)=>A1.then(()=>Y(p1)),Promise.resolve())}return p3}function Bk1(r,a){const d=[],u=[],h=[],v=Math.max(a.matched.length,r.matched.length);for(let g=0;g<v;g++){const C=a.matched[g];C&&(r.matched.find(y=>$4(y,C))?u.push(C):d.push(C));const b=r.matched[g];b&&(a.matched.find(y=>$4(y,b))||h.push(b))}return[d,u,h]}function ux(){return ht(I5)}function Dg(r){return r.split(/[#?]/)[0].split(".").pop().trim()}const Pk1={class:"h-[250px] w-full bg-white shadow rounded relative"},Ok1={key:0,class:"w-full h-[100px] flex justify-center items-center text-3xl text-white bg-gradient-to-bl from-orange-600 to-yellow-500 relative rounded"},Rk1={class:"overflow-hidden h-full rounded"},Fk1=["src"],jk1={key:0,class:"absolute right-1 bottom-2 text-sm bg-white text-black px-2 rounded shadow"},Uk1={key:1,class:"w-full h-[60px] flex justify-center items-center text-3xl text-white bg-gradient-to-bl from-orange-600 to-yellow-500 relative rounded"},qk1={class:"w-full pl-2 overflow-hidden relative"},Gk1={class:"mt-2 w-full table-fixed"},Wk1={class:"border-bottom"},$k1={class:"align-top w-[25px]"},Zk1=["title"],Kk1={class:"w-full !overflow-hidden"},Yk1={class:"border-bottom"},Qk1={class:"align-top w-[25px]"},Jk1=["title"],Xk1={class:"border-bottom hidden"},eC1={class:"align-top w-[25px]"},tC1=F("td",{class:"align-top px-2 overflow-hidden text-nowrap"},[F("select",null,[F("option",{value:"0"},"Private"),F("option",{value:"1"},"Public")])],-1),nC1={class:"align-top w-[25px]"},iC1={class:"align-top px-2 overflow-hidden text-nowrap h-[100px] relative"},oC1=["disabled"],rC1={__name:"FileInfoCard",props:{data:Object},setup(r){const a=r;let d=P1(!1),u=P1(!1),h=P1("success"),v=P1("No message"),g=P1("");me(()=>{let M=a.data.type.split("/");if(console.log(M,a.data.title),M[0]==="image")g.value="-image";else if(M[0]==="application"){let L=a.data.url;switch(Dg(L)){case"pdf":g.value="-pdf";break;case"pptx":g.value="-powerpoint";break;case"ppt":g.value="-powerpoint";break;case"docx":g.value="-word";break;case"doc":g.value="-word";break;case"xlsx":g.value="-excel";break}}else if(M[0]==="text")switch(M[1]){case"csv":g.value="-csv";break;case"plain":Dg(a.data.url)==="txt"&&(g.value="text");break}else M[0]==="youtube"&&(g.value="youtube")});let C=P1(a.data.note),b=P1(-1),y=()=>{let M=b.value;if(b.value===-1)return!1;b.value=-1,axios.post("/user/api/materials/update",{id:M,note:C.value}).then(L=>{L.data.status==="error"&&(b.value=M),z(L.data)}).catch(L=>{b.value=M,_("error","something wrong happened!")})},z=M=>{M.status==="ok"?_("success",M.message):_("error",M.message)},_=(M,L,N=5)=>{v.value=L,h.value=M,u.value=!0},w=()=>{u.value=!1};return(M,L)=>{const N=yi("router-link");return E1(),F1(z2,null,[F("div",Pk1,[j(g)==="youtube"?(E1(),F1("div",Ok1,[F("div",Rk1,[F("img",{src:r.data.thumb},null,8,Fk1)]),r.data.type.split("/")[1]==="playlist"?(E1(),F1("div",jk1,"Playlist")):te("",!0)])):(E1(),F1("div",Uk1,[j(g)!=="file-database"?(E1(),ye(j(W1),{key:0,icon:"file"+j(g)},null,8,["icon"])):te("",!0)])),F("div",qk1,[F("table",Gk1,[F("tr",Wk1,[F("td",$k1,[h1(j(W1),{icon:"leaf",class:"text-blue-500"})]),F("td",{class:"align-top px-2 overflow-hidden text-nowrap",title:r.data.title},[F("div",Kk1,s2(r.data.title),1)],8,Zk1)]),F("tr",Yk1,[F("td",Qk1,[h1(j(W1),{icon:"calendar",class:"text-yellow-300"})]),F("td",{class:"align-top px-2 overflow-hidden text-nowrap",title:r.data.created_at},s2(new Date(Date.parse(r.data.date)).toDateString()),9,Jk1)]),F("tr",Xk1,[F("td",eC1,[h1(j(W1),{icon:"user-group",class:"text-pink-500"})]),tC1]),F("tr",null,[F("td",nC1,[h1(j(W1),{icon:"pen",class:"text-gray-500"})]),F("td",iC1,[h1(j(W1),{icon:j(b)===-1?"pencil":"check",class:"absolute right-1 top-1 shadow text-sky-600 rounded cursor-pointer",onClick:L[0]||(L[0]=I=>j(b)===r.data.id?j(y)():t2(b)?b.value=r.data.id:b=r.data.id)},null,8,["icon"]),_2(F("textarea",{"onUpdate:modelValue":L[1]||(L[1]=I=>t2(C)?C.value=I:C=I),placeholder:"keep some note here",class:"w-full h-full bg-white border-blue-600 focus:border-l-2 focus:pl-1",disabled:j(b)===-1},null,8,oC1),[[b2,j(C)]])])])])]),h1(N,{to:{name:"show-material",params:{material_id:r.data.id,material_title:r.data.title}},class:"right-1 absolute bottom-0 text-blue-500 text-3xl",onMouseover:L[2]||(L[2]=I=>t2(d)?d.value=!0:d=!0),onMouseleave:L[3]||(L[3]=I=>t2(d)?d.value=!1:d=!1)},{default:g2(()=>[j(d)?te("",!0):(E1(),ye(j(W1),{key:0,icon:"book"})),j(d)?(E1(),ye(j(W1),{key:1,icon:"book-open",shake:""})):te("",!0)]),_:1},8,["to"])]),j(u)?(E1(),ye(N5,{key:0,onClose:j(w),type:j(h)},{default:g2(()=>[u2(s2(j(v)),1)]),_:1},8,["onClose","type"])):te("",!0)],64)}}};var l6=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}function x_1(r){if(r.__esModule)return r;var a=r.default;if(typeof a=="function"){var d=function u(){return this instanceof u?Reflect.construct(a,arguments,this.constructor):a.apply(this,arguments)};d.prototype=a.prototype}else d={};return Object.defineProperty(d,"__esModule",{value:!0}),Object.keys(r).forEach(function(u){var h=Object.getOwnPropertyDescriptor(r,u);Object.defineProperty(d,u,h.get?h:{enumerable:!0,get:function(){return r[u]}})}),d}var I6={exports:{}};I6.exports;(function(r,a){(function(d){const u=d.en=d.en||{};u.dictionary=Object.assign(u.dictionary||{},{"%0 of %1":"%0 of %1",Accept:"Accept","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor editing area: %0":"Editor editing area: %0","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent",Insert:"Insert","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image or file":"Insert image or file","Insert image via URL":"Insert image via URL","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Inserting image failed":"Inserting image failed",Inset:"Inset",Italic:"Italic","Justify cell text":"Justify cell text","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste the media URL in the input.":"Paste the media URL in the input.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough",Style:"Style",Subscript:"Subscript",Superscript:"Superscript","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(d,u){r.exports=u()}(self,()=>(()=>{var d={4959:(g,C,b)=>{const y=b(1103),z={};for(const w of Object.keys(y))z[y[w]]=w;const _={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};g.exports=_;for(const w of Object.keys(_)){if(!("channels"in _[w]))throw new Error("missing channels property: "+w);if(!("labels"in _[w]))throw new Error("missing channel labels property: "+w);if(_[w].labels.length!==_[w].channels)throw new Error("channel and label counts mismatch: "+w);const{channels:M,labels:L}=_[w];delete _[w].channels,delete _[w].labels,Object.defineProperty(_[w],"channels",{value:M}),Object.defineProperty(_[w],"labels",{value:L})}_.rgb.hsl=function(w){const M=w[0]/255,L=w[1]/255,N=w[2]/255,I=Math.min(M,L,N),T=Math.max(M,L,N),E=T-I;let P,R;T===I?P=0:M===T?P=(L-N)/E:L===T?P=2+(N-M)/E:N===T&&(P=4+(M-L)/E),P=Math.min(60*P,360),P<0&&(P+=360);const W=(I+T)/2;return R=T===I?0:W<=.5?E/(T+I):E/(2-T-I),[P,100*R,100*W]},_.rgb.hsv=function(w){let M,L,N,I,T;const E=w[0]/255,P=w[1]/255,R=w[2]/255,W=Math.max(E,P,R),i1=W-Math.min(E,P,R),K=function(S){return(W-S)/6/i1+.5};return i1===0?(I=0,T=0):(T=i1/W,M=K(E),L=K(P),N=K(R),E===W?I=N-L:P===W?I=.3333333333333333+M-N:R===W&&(I=.6666666666666666+L-M),I<0?I+=1:I>1&&(I-=1)),[360*I,100*T,100*W]},_.rgb.hwb=function(w){const M=w[0],L=w[1];let N=w[2];const I=_.rgb.hsl(w)[0],T=1/255*Math.min(M,Math.min(L,N));return N=1-.00392156862745098*Math.max(M,Math.max(L,N)),[I,100*T,100*N]},_.rgb.cmyk=function(w){const M=w[0]/255,L=w[1]/255,N=w[2]/255,I=Math.min(1-M,1-L,1-N);return[100*((1-M-I)/(1-I)||0),100*((1-L-I)/(1-I)||0),100*((1-N-I)/(1-I)||0),100*I]},_.rgb.keyword=function(w){const M=z[w];if(M)return M;let L,N=1/0;for(const E of Object.keys(y)){const P=y[E],R=(T=P,((I=w)[0]-T[0])**2+(I[1]-T[1])**2+(I[2]-T[2])**2);R<N&&(N=R,L=E)}var I,T;return L},_.keyword.rgb=function(w){return y[w]},_.rgb.xyz=function(w){let M=w[0]/255,L=w[1]/255,N=w[2]/255;return M=M>.04045?((M+.055)/1.055)**2.4:M/12.92,L=L>.04045?((L+.055)/1.055)**2.4:L/12.92,N=N>.04045?((N+.055)/1.055)**2.4:N/12.92,[100*(.4124*M+.3576*L+.1805*N),100*(.2126*M+.7152*L+.0722*N),100*(.0193*M+.1192*L+.9505*N)]},_.rgb.lab=function(w){const M=_.rgb.xyz(w);let L=M[0],N=M[1],I=M[2];return L/=95.047,N/=100,I/=108.883,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,I=I>.008856?I**.3333333333333333:7.787*I+.13793103448275862,[116*N-16,500*(L-N),200*(N-I)]},_.hsl.rgb=function(w){const M=w[0]/360,L=w[1]/100,N=w[2]/100;let I,T,E;if(L===0)return E=255*N,[E,E,E];I=N<.5?N*(1+L):N+L-N*L;const P=2*N-I,R=[0,0,0];for(let W=0;W<3;W++)T=M+.3333333333333333*-(W-1),T<0&&T++,T>1&&T--,E=6*T<1?P+6*(I-P)*T:2*T<1?I:3*T<2?P+(I-P)*(.6666666666666666-T)*6:P,R[W]=255*E;return R},_.hsl.hsv=function(w){const M=w[0];let L=w[1]/100,N=w[2]/100,I=L;const T=Math.max(N,.01);return N*=2,L*=N<=1?N:2-N,I*=T<=1?T:2-T,[M,100*(N===0?2*I/(T+I):2*L/(N+L)),100*((N+L)/2)]},_.hsv.rgb=function(w){const M=w[0]/60,L=w[1]/100;let N=w[2]/100;const I=Math.floor(M)%6,T=M-Math.floor(M),E=255*N*(1-L),P=255*N*(1-L*T),R=255*N*(1-L*(1-T));switch(N*=255,I){case 0:return[N,R,E];case 1:return[P,N,E];case 2:return[E,N,R];case 3:return[E,P,N];case 4:return[R,E,N];case 5:return[N,E,P]}},_.hsv.hsl=function(w){const M=w[0],L=w[1]/100,N=w[2]/100,I=Math.max(N,.01);let T,E;E=(2-L)*N;const P=(2-L)*I;return T=L*I,T/=P<=1?P:2-P,T=T||0,E/=2,[M,100*T,100*E]},_.hwb.rgb=function(w){const M=w[0]/360;let L=w[1]/100,N=w[2]/100;const I=L+N;let T;I>1&&(L/=I,N/=I);const E=Math.floor(6*M),P=1-N;T=6*M-E,1&E&&(T=1-T);const R=L+T*(P-L);let W,i1,K;switch(E){default:case 6:case 0:W=P,i1=R,K=L;break;case 1:W=R,i1=P,K=L;break;case 2:W=L,i1=P,K=R;break;case 3:W=L,i1=R,K=P;break;case 4:W=R,i1=L,K=P;break;case 5:W=P,i1=L,K=R}return[255*W,255*i1,255*K]},_.cmyk.rgb=function(w){const M=w[0]/100,L=w[1]/100,N=w[2]/100,I=w[3]/100;return[255*(1-Math.min(1,M*(1-I)+I)),255*(1-Math.min(1,L*(1-I)+I)),255*(1-Math.min(1,N*(1-I)+I))]},_.xyz.rgb=function(w){const M=w[0]/100,L=w[1]/100,N=w[2]/100;let I,T,E;return I=3.2406*M+-1.5372*L+-.4986*N,T=-.9689*M+1.8758*L+.0415*N,E=.0557*M+-.204*L+1.057*N,I=I>.0031308?1.055*I**.4166666666666667-.055:12.92*I,T=T>.0031308?1.055*T**.4166666666666667-.055:12.92*T,E=E>.0031308?1.055*E**.4166666666666667-.055:12.92*E,I=Math.min(Math.max(0,I),1),T=Math.min(Math.max(0,T),1),E=Math.min(Math.max(0,E),1),[255*I,255*T,255*E]},_.xyz.lab=function(w){let M=w[0],L=w[1],N=w[2];return M/=95.047,L/=100,N/=108.883,M=M>.008856?M**.3333333333333333:7.787*M+.13793103448275862,L=L>.008856?L**.3333333333333333:7.787*L+.13793103448275862,N=N>.008856?N**.3333333333333333:7.787*N+.13793103448275862,[116*L-16,500*(M-L),200*(L-N)]},_.lab.xyz=function(w){let M,L,N;L=(w[0]+16)/116,M=w[1]/500+L,N=L-w[2]/200;const I=L**3,T=M**3,E=N**3;return L=I>.008856?I:(L-.13793103448275862)/7.787,M=T>.008856?T:(M-.13793103448275862)/7.787,N=E>.008856?E:(N-.13793103448275862)/7.787,M*=95.047,L*=100,N*=108.883,[M,L,N]},_.lab.lch=function(w){const M=w[0],L=w[1],N=w[2];let I;return I=360*Math.atan2(N,L)/2/Math.PI,I<0&&(I+=360),[M,Math.sqrt(L*L+N*N),I]},_.lch.lab=function(w){const M=w[0],L=w[1],N=w[2]/360*2*Math.PI;return[M,L*Math.cos(N),L*Math.sin(N)]},_.rgb.ansi16=function(w,M=null){const[L,N,I]=w;let T=M===null?_.rgb.hsv(w)[2]:M;if(T=Math.round(T/50),T===0)return 30;let E=30+(Math.round(I/255)<<2|Math.round(N/255)<<1|Math.round(L/255));return T===2&&(E+=60),E},_.hsv.ansi16=function(w){return _.rgb.ansi16(_.hsv.rgb(w),w[2])},_.rgb.ansi256=function(w){const M=w[0],L=w[1],N=w[2];return M===L&&L===N?M<8?16:M>248?231:Math.round((M-8)/247*24)+232:16+36*Math.round(M/255*5)+6*Math.round(L/255*5)+Math.round(N/255*5)},_.ansi16.rgb=function(w){let M=w%10;if(M===0||M===7)return w>50&&(M+=3.5),M=M/10.5*255,[M,M,M];const L=.5*(1+~~(w>50));return[(1&M)*L*255,(M>>1&1)*L*255,(M>>2&1)*L*255]},_.ansi256.rgb=function(w){if(w>=232){const L=10*(w-232)+8;return[L,L,L]}let M;return w-=16,[Math.floor(w/36)/5*255,Math.floor((M=w%36)/6)/5*255,M%6/5*255]},_.rgb.hex=function(w){const M=(((255&Math.round(w[0]))<<16)+((255&Math.round(w[1]))<<8)+(255&Math.round(w[2]))).toString(16).toUpperCase();return"000000".substring(M.length)+M},_.hex.rgb=function(w){const M=w.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!M)return[0,0,0];let L=M[0];M[0].length===3&&(L=L.split("").map(I=>I+I).join(""));const N=parseInt(L,16);return[N>>16&255,N>>8&255,255&N]},_.rgb.hcg=function(w){const M=w[0]/255,L=w[1]/255,N=w[2]/255,I=Math.max(Math.max(M,L),N),T=Math.min(Math.min(M,L),N),E=I-T;let P,R;return P=E<1?T/(1-E):0,R=E<=0?0:I===M?(L-N)/E%6:I===L?2+(N-M)/E:4+(M-L)/E,R/=6,R%=1,[360*R,100*E,100*P]},_.hsl.hcg=function(w){const M=w[1]/100,L=w[2]/100,N=L<.5?2*M*L:2*M*(1-L);let I=0;return N<1&&(I=(L-.5*N)/(1-N)),[w[0],100*N,100*I]},_.hsv.hcg=function(w){const M=w[1]/100,L=w[2]/100,N=M*L;let I=0;return N<1&&(I=(L-N)/(1-N)),[w[0],100*N,100*I]},_.hcg.rgb=function(w){const M=w[0]/360,L=w[1]/100,N=w[2]/100;if(L===0)return[255*N,255*N,255*N];const I=[0,0,0],T=M%1*6,E=T%1,P=1-E;let R=0;switch(Math.floor(T)){case 0:I[0]=1,I[1]=E,I[2]=0;break;case 1:I[0]=P,I[1]=1,I[2]=0;break;case 2:I[0]=0,I[1]=1,I[2]=E;break;case 3:I[0]=0,I[1]=P,I[2]=1;break;case 4:I[0]=E,I[1]=0,I[2]=1;break;default:I[0]=1,I[1]=0,I[2]=P}return R=(1-L)*N,[255*(L*I[0]+R),255*(L*I[1]+R),255*(L*I[2]+R)]},_.hcg.hsv=function(w){const M=w[1]/100,L=M+w[2]/100*(1-M);let N=0;return L>0&&(N=M/L),[w[0],100*N,100*L]},_.hcg.hsl=function(w){const M=w[1]/100,L=w[2]/100*(1-M)+.5*M;let N=0;return L>0&&L<.5?N=M/(2*L):L>=.5&&L<1&&(N=M/(2*(1-L))),[w[0],100*N,100*L]},_.hcg.hwb=function(w){const M=w[1]/100,L=M+w[2]/100*(1-M);return[w[0],100*(L-M),100*(1-L)]},_.hwb.hcg=function(w){const M=w[1]/100,L=1-w[2]/100,N=L-M;let I=0;return N<1&&(I=(L-N)/(1-N)),[w[0],100*N,100*I]},_.apple.rgb=function(w){return[w[0]/65535*255,w[1]/65535*255,w[2]/65535*255]},_.rgb.apple=function(w){return[w[0]/255*65535,w[1]/255*65535,w[2]/255*65535]},_.gray.rgb=function(w){return[w[0]/100*255,w[0]/100*255,w[0]/100*255]},_.gray.hsl=function(w){return[0,0,w[0]]},_.gray.hsv=_.gray.hsl,_.gray.hwb=function(w){return[0,100,w[0]]},_.gray.cmyk=function(w){return[0,0,0,w[0]]},_.gray.lab=function(w){return[w[0],0,0]},_.gray.hex=function(w){const M=255&Math.round(w[0]/100*255),L=((M<<16)+(M<<8)+M).toString(16).toUpperCase();return"000000".substring(L.length)+L},_.rgb.gray=function(w){return[(w[0]+w[1]+w[2])/3/255*100]}},841:(g,C,b)=>{const y=b(4959),z=b(9325),_={};Object.keys(y).forEach(w=>{_[w]={},Object.defineProperty(_[w],"channels",{value:y[w].channels}),Object.defineProperty(_[w],"labels",{value:y[w].labels});const M=z(w);Object.keys(M).forEach(L=>{const N=M[L];_[w][L]=function(I){const T=function(...E){const P=E[0];if(P==null)return P;P.length>1&&(E=P);const R=I(E);if(typeof R=="object")for(let W=R.length,i1=0;i1<W;i1++)R[i1]=Math.round(R[i1]);return R};return"conversion"in I&&(T.conversion=I.conversion),T}(N),_[w][L].raw=function(I){const T=function(...E){const P=E[0];return P==null?P:(P.length>1&&(E=P),I(E))};return"conversion"in I&&(T.conversion=I.conversion),T}(N)})}),g.exports=_},9325:(g,C,b)=>{const y=b(4959);function z(M){const L=function(){const I={},T=Object.keys(y);for(let E=T.length,P=0;P<E;P++)I[T[P]]={distance:-1,parent:null};return I}(),N=[M];for(L[M].distance=0;N.length;){const I=N.pop(),T=Object.keys(y[I]);for(let E=T.length,P=0;P<E;P++){const R=T[P],W=L[R];W.distance===-1&&(W.distance=L[I].distance+1,W.parent=I,N.unshift(R))}}return L}function _(M,L){return function(N){return L(M(N))}}function w(M,L){const N=[L[M].parent,M];let I=y[L[M].parent][M],T=L[M].parent;for(;L[T].parent;)N.unshift(L[T].parent),I=_(y[L[T].parent][T],I),T=L[T].parent;return I.conversion=N,I}g.exports=function(M){const L=z(M),N={},I=Object.keys(L);for(let T=I.length,E=0;E<T;E++){const P=I[E];L[P].parent!==null&&(N[P]=w(P,L))}return N}},1103:g=>{g.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},8603:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const M=w},3062:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const M=w},903:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const M=w},3143:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-modal)}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-toolbar{border-bottom-width:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar{border-bottom-width:1px;border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content_sticky .ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,gDCED,eDKC,CAPA,uICMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAIF,CAPA,gDAMC,qBACD,CAEA,iFACC,uBAAwB,CCR1B,eDaC,CANA,yMCHA,qCAAsC,CDOpC,eAEF,CAKF,yCAEC,0CAA2C,CCpB3C,eD8BD,CAZA,yHCdE,qCAAsC,CDmBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-modal);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-toolbar {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border-bottom-width: 0;
		}

		& .ck-sticky-panel__content_sticky .ck-toolbar {
			border-bottom-width: 1px;

			@mixin ck-rounded-corners {
				border-radius: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},4717:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const M=w},9315:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const M=w},8733:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const M=w},3508:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const M=w},2640:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highligted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highligted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,mDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,oEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highligted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highligted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const M=w},3535:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-image-insert__panel{padding:var(--ck-spacing-large)}.ck.ck-image-insert__ck-finder-button{border:1px solid #ccc;border-radius:var(--ck-border-radius);display:block;margin:var(--ck-spacing-standard) auto;width:100%}.ck.ck-splitbutton>.ck-file-dialog-button.ck-button{border:none;margin:0;padding:0}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css"],names:[],mappings:"AAKA,2BACC,+BACD,CAEA,sCAIC,qBAAiC,CACjC,qCAAsC,CAJtC,aAAc,CAEd,sCAAuC,CADvC,UAID,CAGA,oDAGC,WAAY,CADZ,QAAS,CADT,SAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert__panel {
	padding: var(--ck-spacing-large);
}

.ck.ck-image-insert__ck-finder-button {
	display: block;
	width: 100%;
	margin: var(--ck-spacing-standard) auto;
	border: 1px solid hsl(0, 0%, 80%);
	border-radius: var(--ck-border-radius);
}

/* https://github.com/ckeditor/ckeditor5/issues/7986 */
.ck.ck-splitbutton > .ck-file-dialog-button.ck-button {
	padding: 0;
	margin: 0;
	border: none;
}
`],sourceRoot:""}]);const M=w},1568:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-image-insert-form:focus{outline:none}.ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-image-insert-form__action-row{margin-top:var(--ck-spacing-standard)}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-image-insert-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row.ck-image-insert-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsertformrowview.css"],names:[],mappings:"AAMC,+BAEC,YACD,CAGD,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAmBD,CAhBC,iCACC,WACD,CAEA,kDACC,qCAUD,CARC,sIAEC,sBACD,CAEA,+EACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-form {
	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}
}

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-image-insert-form__action-row {
		margin-top: var(--ck-spacing-standard);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const M=w},2873:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const M=w},6270:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const M=w},5083:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},4036:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const M=w},3773:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const M=w},3689:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const M=w},1905:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},9773:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const M=w},2347:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},7754:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},111:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const M=w},4721:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:0 var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,wDAAyD,CAFzD,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,yDACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-large);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: 0 var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const M=w},5730:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const M=w},4564:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},6082:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const M=w},2417:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const M=w},1199:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const M=w},4652:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const M=w},7442:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},9292:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},7368:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},4070:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},9247:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const M=w},1613:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const M=w},6306:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const M=w},2128:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const M=w},5087:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},4101:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const M=w},3881:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const M=w},6237:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},7341:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},6945:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},3210:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const M=w},8157:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-modal)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-modal);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=w},4906:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{font-weight:700;opacity:.7}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD4ID,CCzIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF6ID,CA5IA,wIEGE,qCFyIF,CA5IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAuID,CA7GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAYD,CAbA,6FAIE,mCASF,CAbA,6FAQE,oCAKF,CAbA,yEAWC,eAAiB,CACjB,UACD,CAIC,oIIrFD,oDJyFC,CAOA,gLKhGD,kCLkGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC/HA,+CDmIA,CChIC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CDgHA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC/IC,mDDoJD,CCjJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CDgID,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		font-weight: bold;
		opacity: .7;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=w},5332:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const M=w},6781:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const M=w},3398:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const M=w},4157:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const M=w},5485:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-modal)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-modal) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-modal);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-modal) + 1 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},3949:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-dropdown .ck-dropdown__panel .ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list,.ck.ck-dropdown .ck-dropdown__panel .ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:first-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button,.ck.ck-dropdown .ck-dropdown__panel .ck-list .ck-list__item:last-child .ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown .ck-dropdown__panel .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},7686:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},7339:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const M=w},9688:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=w},8847:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:38px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header .ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header .ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAkBD,CAbC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 38px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const M=w},8960:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const M=w},6574:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},4879:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=w},3662:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const M=w},2577:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,oUAGE,+HAYF,CAfA,oUAOE,wIAQF,CAfA,gTAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},1046:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item .ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item .ck-button{text-align:left}[dir=rtl] .ck.ck-list__item .ck-button{text-align:right}.ck.ck-list__item .ck-button{padding:calc(var(--ck-line-height-base)*.2*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*.4*var(--ck-font-size-base))}.ck.ck-list__item .ck-button .ck-button__label{line-height:calc(var(--ck-line-height-base)*1.2*var(--ck-font-size-base))}.ck.ck-list__item .ck-button:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item .ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item .ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item .ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item .ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item .ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item .ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,YCCC,eDID,CALA,+DCKE,qCDAF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cAkED,CAhEC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UA+CD,CAjDA,uCAME,eA2CF,CAjDA,uCAUE,gBAuCF,CAjDA,6BAgBC,iIAiCD,CA7BC,+CAEC,yEACD,CAEA,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding:
			calc(.2 * var(--ck-line-height-base) * var(--ck-font-size-base))
			calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));

		& .ck-button__label {
			/* https://github.com/ckeditor/ckeditor5-heading/issues/63 */
			line-height: calc(1.2 * var(--ck-line-height-base) * var(--ck-font-size-base));
		}

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},8793:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-modal)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-modal);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=w},4650:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const M=w},7676:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-modal) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-modal) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=w},5868:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-modal)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-modal); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=w},6764:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const M=w},6770:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const M=w},498:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const M=w},8182:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const M=w},9695:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const M=w},5542:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const M=w},3332:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);pointer-events:none;z-index:calc(var(--ck-z-modal) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDRnC,mBAAoB,CAEpB,qCACD,CCOC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CACrB,wCAAyC,CAFzC,wBAGD,CApBD,gCAuBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	/* Keep tooltips transparent for any interactions. */
	pointer-events: none;

	z-index: calc( var(--ck-z-modal) + 100 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const M=w},4793:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-modal:calc(var(--ck-z-default) + 999)}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-modal) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CACD,CCAA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CC3GhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJ2GD,CIrGA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-modal: calc( var(--ck-z-default) + 999 );
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-modal) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const M=w},3488:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const M=w},8506:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const M=w},4921:(g,C,b)=>{b.d(C,{Z:()=>M});var y=b(1799),z=b.n(y),_=b(2609),w=b.n(_)()(z());w.push([g.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const M=w},2609:g=>{g.exports=function(C){var b=[];return b.toString=function(){return this.map(function(y){var z=C(y);return y[2]?"@media ".concat(y[2]," {").concat(z,"}"):z}).join("")},b.i=function(y,z,_){typeof y=="string"&&(y=[[null,y,""]]);var w={};if(_)for(var M=0;M<this.length;M++){var L=this[M][0];L!=null&&(w[L]=!0)}for(var N=0;N<y.length;N++){var I=[].concat(y[N]);_&&w[I[0]]||(z&&(I[2]?I[2]="".concat(z," and ").concat(I[2]):I[2]=z),b.push(I))}},b}},1799:g=>{function C(y,z){return function(_){if(Array.isArray(_))return _}(y)||function(_,w){var M=_&&(typeof Symbol<"u"&&_[Symbol.iterator]||_["@@iterator"]);if(M!=null){var L,N,I=[],T=!0,E=!1;try{for(M=M.call(_);!(T=(L=M.next()).done)&&(I.push(L.value),!w||I.length!==w);T=!0);}catch(P){E=!0,N=P}finally{try{T||M.return==null||M.return()}finally{if(E)throw N}}return I}}(y,z)||function(_,w){if(_){if(typeof _=="string")return b(_,w);var M=Object.prototype.toString.call(_).slice(8,-1);if(M==="Object"&&_.constructor&&(M=_.constructor.name),M==="Map"||M==="Set")return Array.from(_);if(M==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(M))return b(_,w)}}(y,z)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(y,z){(z==null||z>y.length)&&(z=y.length);for(var _=0,w=new Array(z);_<z;_++)w[_]=y[_];return w}g.exports=function(y){var z=C(y,4),_=z[1],w=z[3];if(!w)return _;if(typeof btoa=="function"){var M=btoa(unescape(encodeURIComponent(JSON.stringify(w)))),L="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(M),N="/*# ".concat(L," */"),I=w.sources.map(function(T){return"/*# sourceURL=".concat(w.sourceRoot||"").concat(T," */")});return[_].concat(I).concat([N]).join(`
`)}return[_].join(`
`)}},6062:(g,C,b)=>{var y,z=function(){return y===void 0&&(y=!!(window&&document&&document.all&&!window.atob)),y},_=function(){var K={};return function(S){if(K[S]===void 0){var Y=document.querySelector(S);if(window.HTMLIFrameElement&&Y instanceof window.HTMLIFrameElement)try{Y=Y.contentDocument.head}catch{Y=null}K[S]=Y}return K[S]}}(),w=[];function M(K){for(var S=-1,Y=0;Y<w.length;Y++)if(w[Y].identifier===K){S=Y;break}return S}function L(K,S){for(var Y={},l1=[],g1=0;g1<K.length;g1++){var d1=K[g1],k1=S.base?d1[0]+S.base:d1[0],X=Y[k1]||0,s1="".concat(k1," ").concat(X);Y[k1]=X+1;var M1=M(s1),a1={css:d1[1],media:d1[2],sourceMap:d1[3]};M1!==-1?(w[M1].references++,w[M1].updater(a1)):w.push({identifier:s1,updater:i1(a1,S),references:1}),l1.push(s1)}return l1}function N(K){var S=document.createElement("style"),Y=K.attributes||{};if(Y.nonce===void 0){var l1=b.nc;l1&&(Y.nonce=l1)}if(Object.keys(Y).forEach(function(d1){S.setAttribute(d1,Y[d1])}),typeof K.insert=="function")K.insert(S);else{var g1=_(K.insert||"head");if(!g1)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");g1.appendChild(S)}return S}var I,T=(I=[],function(K,S){return I[K]=S,I.filter(Boolean).join(`
`)});function E(K,S,Y,l1){var g1=Y?"":l1.media?"@media ".concat(l1.media," {").concat(l1.css,"}"):l1.css;if(K.styleSheet)K.styleSheet.cssText=T(S,g1);else{var d1=document.createTextNode(g1),k1=K.childNodes;k1[S]&&K.removeChild(k1[S]),k1.length?K.insertBefore(d1,k1[S]):K.appendChild(d1)}}function P(K,S,Y){var l1=Y.css,g1=Y.media,d1=Y.sourceMap;if(g1?K.setAttribute("media",g1):K.removeAttribute("media"),d1&&typeof btoa<"u"&&(l1+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(d1))))," */")),K.styleSheet)K.styleSheet.cssText=l1;else{for(;K.firstChild;)K.removeChild(K.firstChild);K.appendChild(document.createTextNode(l1))}}var R=null,W=0;function i1(K,S){var Y,l1,g1;if(S.singleton){var d1=W++;Y=R||(R=N(S)),l1=E.bind(null,Y,d1,!1),g1=E.bind(null,Y,d1,!0)}else Y=N(S),l1=P.bind(null,Y,S),g1=function(){(function(k1){if(k1.parentNode===null)return!1;k1.parentNode.removeChild(k1)})(Y)};return l1(K),function(k1){if(k1){if(k1.css===K.css&&k1.media===K.media&&k1.sourceMap===K.sourceMap)return;l1(K=k1)}else g1()}}g.exports=function(K,S){(S=S||{}).singleton||typeof S.singleton=="boolean"||(S.singleton=z());var Y=L(K=K||[],S);return function(l1){if(l1=l1||[],Object.prototype.toString.call(l1)==="[object Array]"){for(var g1=0;g1<Y.length;g1++){var d1=M(Y[g1]);w[d1].references--}for(var k1=L(l1,S),X=0;X<Y.length;X++){var s1=M(Y[X]);w[s1].references===0&&(w[s1].updater(),w.splice(s1,1))}Y=k1}}}}},u={};function h(g){var C=u[g];if(C!==void 0)return C.exports;var b=u[g]={id:g,exports:{}};return d[g](b,b.exports,h),b.exports}h.n=g=>{var C=g&&g.__esModule?()=>g.default:()=>g;return h.d(C,{a:C}),C},h.d=(g,C)=>{for(var b in C)h.o(C,b)&&!h.o(g,b)&&Object.defineProperty(g,b,{enumerable:!0,get:C[b]})},h.o=(g,C)=>Object.prototype.hasOwnProperty.call(g,C),h.nc=void 0;var v={};return(()=>{function g({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(o,c)=>{if(!e())return;const s=typeof c.composedPath=="function"?c.composedPath():[],l=typeof n=="function"?n():n;for(const f of l)if(f.contains(c.target)||s.includes(f))return;t()})}function C(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function b({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}h.d(v,{default:()=>U0});const y=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var z;const _={isMac:w(y),isWindows:(z=y,z.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(y),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(y),isiOS:function(i){return!!i.match(/iphone|ipad/i)||w(i)&&navigator.maxTouchPoints>0}(y),isAndroid:function(i){return i.indexOf("android")>-1}(y),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(y),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function w(i){return i.indexOf("macintosh")>-1}function M(i,e,t,n){t=t||function(f,m){return f===m};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),c=Array.isArray(e)?e:Array.prototype.slice.call(e),s=function(f,m,p){const k=L(f,m,p);if(k===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const A=N(f,k),x=N(m,k),H=L(A,x,p),V=f.length-H,D=m.length-H;return{firstIndex:k,lastIndexOld:V,lastIndexNew:D}}(o,c,t);return n?function(f,m){const{firstIndex:p,lastIndexOld:k,lastIndexNew:A}=f;if(p===-1)return Array(m).fill("equal");let x=[];return p>0&&(x=x.concat(Array(p).fill("equal"))),A-p>0&&(x=x.concat(Array(A-p).fill("insert"))),k-p>0&&(x=x.concat(Array(k-p).fill("delete"))),A<m&&(x=x.concat(Array(m-A).fill("equal"))),x}(s,c.length):function(f,m){const p=[],{firstIndex:k,lastIndexOld:A,lastIndexNew:x}=m;return x-k>0&&p.push({index:k,type:"insert",values:f.slice(k,x)}),A-k>0&&p.push({index:k+(x-k),type:"delete",howMany:A-k}),p}(c,s)}function L(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function N(i,e){return i.slice(e).reverse()}function I(i,e,t){t=t||function(V,D){return V===D};const n=i.length,o=e.length;if(n>200||o>200||n+o>300)return I.fastDiff(i,e,t,!0);let c,s;if(o<n){const V=i;i=e,e=V,c="delete",s="insert"}else c="insert",s="delete";const l=i.length,f=e.length,m=f-l,p={},k={};function A(V){const D=(k[V-1]!==void 0?k[V-1]:-1)+1,B=k[V+1]!==void 0?k[V+1]:-1,q=D>B?-1:1;p[V+q]&&(p[V]=p[V+q].slice(0)),p[V]||(p[V]=[]),p[V].push(D>B?c:s);let Z=Math.max(D,B),m1=Z-V;for(;m1<l&&Z<f&&t(i[m1],e[Z]);)m1++,Z++,p[V].push("equal");return Z}let x,H=0;do{for(x=-H;x<m;x++)k[x]=A(x);for(x=m+H;x>m;x--)k[x]=A(x);k[m]=A(m),H++}while(k[m]!==f);return p[m].slice(1)}I.fastDiff=M;const T=function(){return function i(){i.called=!0}};class E{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=T(),this.off=T()}}const P=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function R(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+P[i>>0&255]+P[i>>8&255]+P[i>>16&255]+P[i>>24&255]+P[e>>0&255]+P[e>>8&255]+P[e>>16&255]+P[e>>24&255]+P[t>>0&255]+P[t>>8&255]+P[t>>16&255]+P[t>>24&255]+P[n>>0&255]+P[n>>8&255]+P[n>>16&255]+P[n>>24&255]}const W={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function i1(i,e){const t=W.get(e.priority);for(let n=0;n<i.length;n++)if(W.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}const K="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class S extends Error{constructor(e,t,n){super(function(o,c){const s=new WeakSet,l=(p,k)=>{if(typeof k=="object"&&k!==null){if(s.has(k))return`[object ${k.constructor.name}]`;s.add(k)}return k},f=c?` ${JSON.stringify(c,l)}`:"",m=g1(o);return o+f+m}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new S(e.message,t);throw n.stack=e.stack,n}}function Y(i,e){console.warn(...d1(i,e))}function l1(i,e){console.error(...d1(i,e))}function g1(i){return`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(l[0].end)]});else if(e.inputType=="insertText"&&s&&s.includes(`
`;let e="",t=null;for(const n of i.getChildren())e+=sD(n,t)+Rd(n),t=n;return e}function sD(i,e){return e?i.is("element","li")&&!i.isEmpty&&i.getChild(0).is("containerElement")||Od.includes(i.name)&&Od.includes(e.name)?`

`:i.is("containerElement")||e.is("containerElement")?Pd.includes(i.name)||Pd.includes(e.name)?`
`:`

 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var lw1=function(r){return r!=null&&(gx(r)||dw1(r)||!!r._isBuffer)};function gx(r){return!!r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function dw1(r){return typeof r.readFloatLE=="function"&&typeof r.slice=="function"&&gx(r.slice(0,0))}(function(){var r=aw1,a=Tg.utf8,d=lw1,u=Tg.bin,h=function(v,g){v.constructor==String?g&&g.encoding==="binary"?v=u.stringToBytes(v):v=a.stringToBytes(v):d(v)?v=Array.prototype.slice.call(v,0):!Array.isArray(v)&&v.constructor!==Uint8Array&&(v=v.toString());for(var C=r.bytesToWords(v),b=v.length*8,y=1732584193,z=-271733879,_=-1732584194,w=271733878,M=0;M<C.length;M++)C[M]=(C[M]<<8|C[M]>>>24)&16711935|(C[M]<<24|C[M]>>>8)&4278255360;C[b>>>5]|=128<<b%32,C[(b+64>>>9<<4)+14]=b;for(var L=h._ff,N=h._gg,I=h._hh,T=h._ii,M=0;M<C.length;M+=16){var E=y,P=z,R=_,W=w;y=L(y,z,_,w,C[M+0],7,-680876936),w=L(w,y,z,_,C[M+1],12,-389564586),_=L(_,w,y,z,C[M+2],17,606105819),z=L(z,_,w,y,C[M+3],22,-1044525330),y=L(y,z,_,w,C[M+4],7,-176418897),w=L(w,y,z,_,C[M+5],12,1200080426),_=L(_,w,y,z,C[M+6],17,-1473231341),z=L(z,_,w,y,C[M+7],22,-45705983),y=L(y,z,_,w,C[M+8],7,1770035416),w=L(w,y,z,_,C[M+9],12,-1958414417),_=L(_,w,y,z,C[M+10],17,-42063),z=L(z,_,w,y,C[M+11],22,-1990404162),y=L(y,z,_,w,C[M+12],7,1804603682),w=L(w,y,z,_,C[M+13],12,-40341101),_=L(_,w,y,z,C[M+14],17,-1502002290),z=L(z,_,w,y,C[M+15],22,1236535329),y=N(y,z,_,w,C[M+1],5,-165796510),w=N(w,y,z,_,C[M+6],9,-1069501632),_=N(_,w,y,z,C[M+11],14,643717713),z=N(z,_,w,y,C[M+0],20,-373897302),y=N(y,z,_,w,C[M+5],5,-701558691),w=N(w,y,z,_,C[M+10],9,38016083),_=N(_,w,y,z,C[M+15],14,-660478335),z=N(z,_,w,y,C[M+4],20,-405537848),y=N(y,z,_,w,C[M+9],5,568446438),w=N(w,y,z,_,C[M+14],9,-1019803690),_=N(_,w,y,z,C[M+3],14,-187363961),z=N(z,_,w,y,C[M+8],20,1163531501),y=N(y,z,_,w,C[M+13],5,-1444681467),w=N(w,y,z,_,C[M+2],9,-51403784),_=N(_,w,y,z,C[M+7],14,1735328473),z=N(z,_,w,y,C[M+12],20,-1926607734),y=I(y,z,_,w,C[M+5],4,-378558),w=I(w,y,z,_,C[M+8],11,-2022574463),_=I(_,w,y,z,C[M+11],16,1839030562),z=I(z,_,w,y,C[M+14],23,-35309556),y=I(y,z,_,w,C[M+1],4,-1530992060),w=I(w,y,z,_,C[M+4],11,1272893353),_=I(_,w,y,z,C[M+7],16,-155497632),z=I(z,_,w,y,C[M+10],23,-1094730640),y=I(y,z,_,w,C[M+13],4,681279174),w=I(w,y,z,_,C[M+0],11,-358537222),_=I(_,w,y,z,C[M+3],16,-722521979),z=I(z,_,w,y,C[M+6],23,76029189),y=I(y,z,_,w,C[M+9],4,-640364487),w=I(w,y,z,_,C[M+12],11,-421815835),_=I(_,w,y,z,C[M+15],16,530742520),z=I(z,_,w,y,C[M+2],23,-995338651),y=T(y,z,_,w,C[M+0],6,-198630844),w=T(w,y,z,_,C[M+7],10,1126891415),_=T(_,w,y,z,C[M+14],15,-1416354905),z=T(z,_,w,y,C[M+5],21,-57434055),y=T(y,z,_,w,C[M+12],6,1700485571),w=T(w,y,z,_,C[M+3],10,-1894986606),_=T(_,w,y,z,C[M+10],15,-1051523),z=T(z,_,w,y,C[M+1],21,-2054922799),y=T(y,z,_,w,C[M+8],6,1873313359),w=T(w,y,z,_,C[M+15],10,-30611744),_=T(_,w,y,z,C[M+6],15,-1560198380),z=T(z,_,w,y,C[M+13],21,1309151649),y=T(y,z,_,w,C[M+4],6,-145523070),w=T(w,y,z,_,C[M+11],10,-1120210379),_=T(_,w,y,z,C[M+2],15,718787259),z=T(z,_,w,y,C[M+9],21,-343485551),y=y+E>>>0,z=z+P>>>0,_=_+R>>>0,w=w+W>>>0}return r.endian([y,z,_,w])};h._ff=function(v,g,C,b,y,z,_){var w=v+(g&C|~g&b)+(y>>>0)+_;return(w<<z|w>>>32-z)+g},h._gg=function(v,g,C,b,y,z,_){var w=v+(g&b|C&~b)+(y>>>0)+_;return(w<<z|w>>>32-z)+g},h._hh=function(v,g,C,b,y,z,_){var w=v+(g^C^b)+(y>>>0)+_;return(w<<z|w>>>32-z)+g},h._ii=function(v,g,C,b,y,z,_){var w=v+(C^(g|~b))+(y>>>0)+_;return(w<<z|w>>>32-z)+g},h._blocksize=16,h._digestsize=16,mx.exports=function(v,g){if(v==null)throw new Error("Illegal argument "+v);var C=r.wordsToBytes(h(v,g));return g&&g.asBytes?C:g&&g.asString?u.bytesToString(C):r.bytesToHex(C)}})();var fw1=mx.exports;const uw1=hx(fw1),hw1=["src"],mw1={__name:"PdpReader",props:{url:String},setup(r){const a=r;let d=-1,u=uw1(a.url),h=P1("");return me(()=>{localStorage.getItem(u)!==void 0?h.value=a.url+"#page="+localStorage.getItem(u):h.value=a.url}),Lt(h,()=>{let v=document.getElementById("iframe");v.onload=()=>{let g=v.contentWindow.document,C=g.getElementById("pageNumber");d===-1&&(d=setInterval(()=>{let b=C.value;localStorage.setItem(u,b),console.log("page update set ",b)},1e3)),console.log(g.getElementById("pageNumber"))}}),zi(()=>{d!==-1&&(clearInterval(d),d=-1)}),(v,g)=>(E1(),F1("iframe",{id:"iframe",src:"/web/pdfjs/viewer.html?file="+j(h)},null,8,hw1))}};function pw1(r){var a=/(?:\?v=|\/videos\/|\/embed\/|\/v\/|\/e\/|watch\?v=|youtu.be\/|youtube.com\/user\/\w+\/|user\/\w+\/|playlist\?list=)([a-zA-Z0-9_-]{11})|(?:\?list=)([a-zA-Z0-9_-]+)(?=&|$)|([a-zA-Z0-9_-]{11})/,d=r.match(a);if(d){var u={};if(d[1]&&(u.videoId=d[1]),d[2])u.playlistId=d[2];else if(r.includes("list=")){var h=r.match(/list=([a-zA-Z0-9_-]+)/);h&&(u.playlistId=h[1])}return u}else return!1}const gw1=["src"],bw1=["src"],vw1={__name:"YoutubeVideoPlayer",props:{src:String},setup(r){const a=r;let d=P1(null),u=P1(null);return me(()=>{let h=pw1(a.src);h.videoId&&(d.value=h.videoId),h.playlistId&&(u.value=h.playlistId)}),(h,v)=>j(d)!=null&&j(u)===null?(E1(),F1("iframe",{key:0,width:"420",height:"315",src:"https://www.youtube.com/embed/"+j(d)},null,8,gw1)):j(u)!=null?(E1(),F1("iframe",{key:1,width:"420",height:"315",src:"https://www.youtube.com/embed/?listType=playlist&list="+j(u)},null,8,bw1)):te("",!0)}};let d6={};const kw1={class:"w-full h-screen"},Cw1=["src"],ww1={key:3},Aw1=["srcdoc"],_w1={__name:"OpenMaterial",setup(r){let a=ux();P1({});let d=P1(!1),u=!0;return me(()=>{document.title="Opening material...";let h=a.params.material_id;yt.get("/user/api/read-material/"+h+"?metadata=true").then(v=>{d.value=v.data,document.title=d.value.title})}),zi(()=>{u=!1}),d6.readingTimerSet||(d6.readingTimerSet=!1),d6.readingTimerSet||(d6.readingTimerSet=1,setInterval(()=>{if(document.visibilityState==="hidden"||!u)return;let h=d.value.class_id;yt.get("/user/api/classes/addReadingTime/"+h)},60*1e3)),(h,v)=>(E1(),F1("div",kw1,[j(d)&&j(d).type.split("/")[0]==="youtube"?(E1(),ye(vw1,{key:0,src:j(d).url,class:"w-full min-h-screen"},{default:g2(()=>[u2(" this is a youtube video ")]),_:1},8,["src"])):j(d)&&j(d).type==="application/pdf"?(E1(),ye(mw1,{key:1,url:j(d).url,class:"w-full min-h-screen"},null,8,["url"])):j(d)&&j(d).type.split("/")[0]==="image"?(E1(),F1("img",{key:2,src:j(d).url,class:"w-full min-h-screen"},null,8,Cw1)):j(d)&&j(d).type.split("/")[1]==="plain"?(E1(),F1("div",ww1,[F("iframe",{class:"w-full h-full",srcdoc:j(d).text_content},null,8,Aw1)])):te("",!0)]))}},zw1={},yw1={src:"https://wggb.github.io/whiteboard/",class:"w-full h-full"};function Mw1(r,a){return E1(),F1("iframe",yw1)}const xw1=Ma(zw1,[["render",Mw1]]),Hw1={key:0,class:"flex w-full justify-center items-center relative"},Vw1={class:"relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16"},Lw1={class:"px-6"},Sw1={class:"flex flex-wrap justify-center"},Ew1={class:"w-full px-4 flex justify-center"},Nw1=["src"],Dw1={class:"w-full px-4 text-center mt-20"},Tw1={class:"flex justify-center py-4 lg:pt-4 pt-8"},Iw1={class:"mr-4 p-3 text-center"},Bw1={class:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},Pw1=F("span",{class:"text-sm text-blueGray-400"},"Courses",-1),Ow1={class:"mr-4 p-3 text-center"},Rw1={class:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},Fw1=F("span",{class:"text-sm text-blueGray-400"},"Classes",-1),jw1={class:"lg:mr-4 p-3 text-center"},Uw1={class:"text-xl font-bold block uppercase tracking-wide text-blueGray-600"},qw1=F("span",{class:"text-sm text-blueGray-400"},"Materials",-1),Gw1={class:"text-center mt-12"},Ww1={class:"text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"},$w1={class:"text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase"},Zw1=F("i",{class:"fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"},null,-1),Kw1={class:"mb-2 text-blueGray-600 mt-10"},Yw1=F("i",{class:"fas fa-briefcase mr-2 text-lg text-blueGray-400"},null,-1),Qw1={class:"mb-2 text-blueGray-600"},Jw1=F("i",{class:"fas fa-university mr-2 text-lg text-blueGray-400"},null,-1),Xw1={class:"mt-10 py-10 border-t border-blueGray-200 text-center"},eA1={class:"flex flex-wrap justify-center"},tA1={class:"w-full lg:w-9/12 px-4"},nA1={class:"mb-4 text-lg leading-relaxed text-blueGray-700"},iA1={class:"form"},oA1={class:"w-11/12"},rA1=F("td",null,[F("div",{class:"px-2"}," First Name ")],-1),cA1=F("td",null,[F("div",{class:"px-2"}," Last Name ")],-1),sA1=F("td",null,[F("div",{class:"px-2"}," Email ")],-1),aA1=F("td",null,[F("div",{class:"px-2"}," Password ")],-1),lA1=F("td",null,[F("div",{class:"px-2"}," Work ")],-1),dA1={colspan:"3"},fA1=F("td",null,[F("div",{class:"px-2"}," Institute ")],-1),uA1={colspan:"3"},hA1=F("td",null,[F("div",{class:"px-2"}," Address ")],-1),mA1={colspan:"3"},pA1=F("td",null,[F("div",{class:"px-2"}," Bio ")],-1),gA1={colspan:"3"},bA1={__name:"UserProfile",setup(r){let a=P1();me(()=>{u()});let d=()=>{axios.post("/user/api/update",a.value).then(v=>{console.log(v),h.value=!1})},u=()=>{axios.get("/user/api/profile").then(v=>{a.value=v.data,a.value.password=""}).catch(()=>{})},h=P1(!1);return(v,g)=>(E1(),F1(z2,null,[j(a)?(E1(),F1("div",Hw1,[h1(j(W1),{onClick:g[0]||(g[0]=C=>t2(h)?h.value=!0:h=!0),icon:"pencil",class:"absolute right-10 top-[100px] z-[1000] w-[20px] h-[20px] cursor-pointer hover:text-blue-500"}),F("div",Vw1,[F("div",Lw1,[F("div",Sw1,[F("div",Ew1,[F("img",{alt:"...",src:j(a).avatar,class:"shadow-xl rounded-full align-middle border-none -m-16 -ml-20 lg:-ml-16 !w-[112px] !h-[112px]"},null,8,Nw1)]),F("div",Dw1,[F("div",Tw1,[F("div",Iw1,[F("span",Bw1,s2(j(a).course_count),1),Pw1]),F("div",Ow1,[F("span",Rw1,s2(j(a).class_count),1),Fw1]),F("div",jw1,[F("span",Uw1,s2(j(a).material_count),1),qw1])])])]),F("div",Gw1,[F("h3",Ww1,s2(j(a).first_name)+" "+s2(j(a).last_name),1),F("div",$w1,[Zw1,u2(" "+s2(j(a).address),1)]),F("div",Kw1,[Yw1,u2(" "+s2(j(a).work),1)]),F("div",Qw1,[Jw1,u2(" "+s2(j(a).institute),1)])]),F("div",Xw1,[F("div",eA1,[F("div",tA1,[F("p",nA1,s2(j(a).bio),1)])])])])])])):te("",!0),j(a)?(E1(),ye(i3,{key:1,visibility:j(h),onClose:g[10]||(g[10]=C=>t2(h)?h.value=!1:h=!1)},{default:g2(()=>[F("div",iA1,[F("table",oA1,[F("tr",null,[rA1,F("td",null,[_2(F("input",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full","onUpdate:modelValue":g[1]||(g[1]=C=>j(a).first_name=C)},null,512),[[b2,j(a).first_name]])]),cA1,F("td",null,[_2(F("input",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full","onUpdate:modelValue":g[2]||(g[2]=C=>j(a).last_name=C)},null,512),[[b2,j(a).last_name]])])]),F("tr",null,[sA1,F("td",null,[_2(F("input",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full","onUpdate:modelValue":g[3]||(g[3]=C=>j(a).email=C)},null,512),[[b2,j(a).email]])]),aA1,F("td",null,[_2(F("input",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full","onUpdate:modelValue":g[4]||(g[4]=C=>j(a).password=C)},null,512),[[b2,j(a).password]])])]),F("tr",null,[lA1,F("td",dA1,[_2(F("input",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full","onUpdate:modelValue":g[5]||(g[5]=C=>j(a).work=C)},null,512),[[b2,j(a).work]])])]),F("tr",null,[fA1,F("td",uA1,[_2(F("input",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full","onUpdate:modelValue":g[6]||(g[6]=C=>j(a).institute=C)},null,512),[[b2,j(a).institute]])])]),F("tr",null,[hA1,F("td",mA1,[_2(F("textarea",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full h-[100px]","onUpdate:modelValue":g[7]||(g[7]=C=>j(a).address=C)},null,512),[[b2,j(a).address]])])]),F("tr",null,[pA1,F("td",gA1,[_2(F("textarea",{type:"text",class:"border-b rounded py-1 px-2 ml-4 w-full h-[100px]","onUpdate:modelValue":g[8]||(g[8]=C=>j(a).bio=C)},null,512),[[b2,j(a).bio]])])])]),F("input",{type:"button",class:"bg-primary px-3 py-2 rounded text-white",value:"Save",onClick:g[9]||(g[9]=(...C)=>j(d)&&j(d)(...C))})])]),_:1},8,["visibility"])):te("",!0)],64))}},vA1=[{path:"/",redirect:"dashboard",children:[{path:"/dashboard",component:Ub1,name:"dashboard"},{path:"/courses",component:Nv1,name:"courses"},{path:"/open-course/:course_id/:course_title",component:sw1,name:"show-course"},{path:"/open-material/:material_id/:material_title",name:"show-material",component:_w1},{path:"/white-board/",name:"whiteboard",component:xw1},{path:"/profile",name:"profile",component:bA1}]}],H_1=Ik1({history:Jv1(),routes:vA1});export{wj as $,h1 as A,jF as B,ie as C,HA1 as D,cb as E,z2 as F,OA1 as G,Ai as H,Kj as I,WA1 as J,RA1 as K,$A1 as L,YA1 as M,ZA1 as N,GA1 as O,p_1 as P,KA1 as Q,W6 as R,I4 as S,c_1 as T,Bn as U,za as V,_A1 as W,wA1 as X,m3 as Y,RR as Z,ha as _,yt as a,s2 as a$,rr as a0,X4 as a1,r_1 as a2,pU as a3,d_1 as a4,A_1 as a5,ht as a6,Lj as a7,Ab as a8,N4 as a9,E1 as aA,DA1 as aB,b6 as aC,yb as aD,NA1 as aE,Vb as aF,Y6 as aG,wb as aH,P1 as aI,a_1 as aJ,jp as aK,g6 as aL,j4 as aM,yi as aN,jA1 as aO,FA1 as aP,h_1 as aQ,ai as aR,yp as aS,xF as aT,F4 as aU,Cb as aV,yA1 as aW,pF as aX,Hj as aY,u_1 as aZ,zA1 as a_,R4 as aa,t2 as ab,l_1 as ac,M6 as ad,Y3 as ae,_b as af,t_1 as ag,n_1 as ah,Aj as ai,da as aj,Ie as ak,CA1 as al,Ci as am,qF as an,$F as ao,pa as ap,ZF as aq,GF as ar,JF as as,me as at,QF as au,YF as av,AA1 as aw,KF as ax,zi as ay,ma as az,Ib as b,m6 as b0,qA1 as b1,Q1 as b2,LA1 as b3,VA1 as b4,xA1 as b5,s_1 as b6,MA1 as b7,j as b8,XA1 as b9,x_1 as bA,l6 as bB,hx as bC,__1 as bD,y_1 as bE,M_1 as bF,W1 as bG,H_1 as bH,z_1 as bI,g_1 as ba,b_1 as bb,e_1 as bc,Vj as bd,JA1 as be,Tb as bf,ya as bg,sU as bh,hv as bi,cU as bj,b2 as bk,hU as bl,Sj as bm,SA1 as bn,Lt as bo,BA1 as bp,OF as bq,PA1 as br,o_1 as bs,g2 as bt,QA1 as bu,_2 as bv,k_1 as bw,f_1 as bx,fU as by,TA1 as bz,IA1 as c,U4 as d,rv as e,v_1 as f,EA1 as g,Pe as h,r3 as i,Me as j,q6 as k,Et as l,m_1 as m,Q2 as n,C_1 as o,ye as p,te as q,F1 as r,F as s,pj as t,i_1 as u,mj as v,w_1 as w,UA1 as x,wa as y,u2 as z};