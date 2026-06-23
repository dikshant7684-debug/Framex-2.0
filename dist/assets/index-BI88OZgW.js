(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();function Mb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kd={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function M5(){if(ny)return js;ny=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(i,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:t,type:i,key:d,ref:o!==void 0?o:null,props:c}}return js.Fragment=e,js.jsx=a,js.jsxs=a,js}var ry;function z5(){return ry||(ry=1,Kd.exports=M5()),Kd.exports}var u=z5(),Yd={exports:{}},ke={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function U5(){if(ay)return ke;ay=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function _(N,I,J){this.props=N,this.context=I,this.refs=C,this.updater=J||S}_.prototype.isReactComponent={},_.prototype.setState=function(N,I){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,I,"setState")},_.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function R(){}R.prototype=_.prototype;function O(N,I,J){this.props=N,this.context=I,this.refs=C,this.updater=J||S}var P=O.prototype=new R;P.constructor=O,T(P,_.prototype),P.isPureReactComponent=!0;var X=Array.isArray;function W(){}var G={H:null,A:null,T:null,S:null},q=Object.prototype.hasOwnProperty;function Z(N,I,J){var ae=J.ref;return{$$typeof:t,type:N,key:I,ref:ae!==void 0?ae:null,props:J}}function re(N,I){return Z(N.type,I,N.props)}function xe(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function pe(N){var I={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(J){return I[J]})}var Ce=/\/+/g;function Le(N,I){return typeof N=="object"&&N!==null&&N.key!=null?pe(""+N.key):I.toString(36)}function me(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(W,W):(N.status="pending",N.then(function(I){N.status==="pending"&&(N.status="fulfilled",N.value=I)},function(I){N.status==="pending"&&(N.status="rejected",N.reason=I)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function E(N,I,J,ae,de){var je=typeof N;(je==="undefined"||je==="boolean")&&(N=null);var Q=!1;if(N===null)Q=!0;else switch(je){case"bigint":case"string":case"number":Q=!0;break;case"object":switch(N.$$typeof){case t:case e:Q=!0;break;case y:return Q=N._init,E(Q(N._payload),I,J,ae,de)}}if(Q)return de=de(N),Q=ae===""?"."+Le(N,0):ae,X(de)?(J="",Q!=null&&(J=Q.replace(Ce,"$&/")+"/"),E(de,I,J,"",function(L){return L})):de!=null&&(xe(de)&&(de=re(de,J+(de.key==null||N&&N.key===de.key?"":(""+de.key).replace(Ce,"$&/")+"/")+Q)),I.push(de)),1;Q=0;var ge=ae===""?".":ae+":";if(X(N))for(var he=0;he<N.length;he++)ae=N[he],je=ge+Le(ae,he),Q+=E(ae,I,J,je,de);else if(he=w(N),typeof he=="function")for(N=he.call(N),he=0;!(ae=N.next()).done;)ae=ae.value,je=ge+Le(ae,he++),Q+=E(ae,I,J,je,de);else if(je==="object"){if(typeof N.then=="function")return E(me(N),I,J,ae,de);throw I=String(N),Error("Objects are not valid as a React child (found: "+(I==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":I)+"). If you meant to render a collection of children, use an array instead.")}return Q}function $(N,I,J){if(N==null)return N;var ae=[],de=0;return E(N,ae,"","",function(je){return I.call(J,je,de++)}),ae}function ee(N){if(N._status===-1){var I=N._result;I=I(),I.then(function(J){(N._status===0||N._status===-1)&&(N._status=1,N._result=J)},function(J){(N._status===0||N._status===-1)&&(N._status=2,N._result=J)}),N._status===-1&&(N._status=0,N._result=I)}if(N._status===1)return N._result.default;throw N._result}var ce=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var I=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(I))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},be={map:$,forEach:function(N,I,J){$(N,function(){I.apply(this,arguments)},J)},count:function(N){var I=0;return $(N,function(){I++}),I},toArray:function(N){return $(N,function(I){return I})||[]},only:function(N){if(!xe(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return ke.Activity=v,ke.Children=be,ke.Component=_,ke.Fragment=a,ke.Profiler=o,ke.PureComponent=O,ke.StrictMode=i,ke.Suspense=p,ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ke.__COMPILER_RUNTIME={__proto__:null,c:function(N){return G.H.useMemoCache(N)}},ke.cache=function(N){return function(){return N.apply(null,arguments)}},ke.cacheSignal=function(){return null},ke.cloneElement=function(N,I,J){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ae=T({},N.props),de=N.key;if(I!=null)for(je in I.key!==void 0&&(de=""+I.key),I)!q.call(I,je)||je==="key"||je==="__self"||je==="__source"||je==="ref"&&I.ref===void 0||(ae[je]=I[je]);var je=arguments.length-2;if(je===1)ae.children=J;else if(1<je){for(var Q=Array(je),ge=0;ge<je;ge++)Q[ge]=arguments[ge+2];ae.children=Q}return Z(N.type,de,ae)},ke.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},ke.createElement=function(N,I,J){var ae,de={},je=null;if(I!=null)for(ae in I.key!==void 0&&(je=""+I.key),I)q.call(I,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(de[ae]=I[ae]);var Q=arguments.length-2;if(Q===1)de.children=J;else if(1<Q){for(var ge=Array(Q),he=0;he<Q;he++)ge[he]=arguments[he+2];de.children=ge}if(N&&N.defaultProps)for(ae in Q=N.defaultProps,Q)de[ae]===void 0&&(de[ae]=Q[ae]);return Z(N,je,de)},ke.createRef=function(){return{current:null}},ke.forwardRef=function(N){return{$$typeof:h,render:N}},ke.isValidElement=xe,ke.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:ee}},ke.memo=function(N,I){return{$$typeof:g,type:N,compare:I===void 0?null:I}},ke.startTransition=function(N){var I=G.T,J={};G.T=J;try{var ae=N(),de=G.S;de!==null&&de(J,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(W,ce)}catch(je){ce(je)}finally{I!==null&&J.types!==null&&(I.types=J.types),G.T=I}},ke.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ke.use=function(N){return G.H.use(N)},ke.useActionState=function(N,I,J){return G.H.useActionState(N,I,J)},ke.useCallback=function(N,I){return G.H.useCallback(N,I)},ke.useContext=function(N){return G.H.useContext(N)},ke.useDebugValue=function(){},ke.useDeferredValue=function(N,I){return G.H.useDeferredValue(N,I)},ke.useEffect=function(N,I){return G.H.useEffect(N,I)},ke.useEffectEvent=function(N){return G.H.useEffectEvent(N)},ke.useId=function(){return G.H.useId()},ke.useImperativeHandle=function(N,I,J){return G.H.useImperativeHandle(N,I,J)},ke.useInsertionEffect=function(N,I){return G.H.useInsertionEffect(N,I)},ke.useLayoutEffect=function(N,I){return G.H.useLayoutEffect(N,I)},ke.useMemo=function(N,I){return G.H.useMemo(N,I)},ke.useOptimistic=function(N,I){return G.H.useOptimistic(N,I)},ke.useReducer=function(N,I,J){return G.H.useReducer(N,I,J)},ke.useRef=function(N){return G.H.useRef(N)},ke.useState=function(N){return G.H.useState(N)},ke.useSyncExternalStore=function(N,I,J){return G.H.useSyncExternalStore(N,I,J)},ke.useTransition=function(){return G.H.useTransition()},ke.version="19.2.7",ke}var iy;function mf(){return iy||(iy=1,Yd.exports=U5()),Yd.exports}var j=mf();const Ns=Mb(j);var Xd={exports:{}},ks={},Wd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function B5(){return sy||(sy=1,(function(t){function e(E,$){var ee=E.length;E.push($);e:for(;0<ee;){var ce=ee-1>>>1,be=E[ce];if(0<o(be,$))E[ce]=$,E[ee]=be,ee=ce;else break e}}function a(E){return E.length===0?null:E[0]}function i(E){if(E.length===0)return null;var $=E[0],ee=E.pop();if(ee!==$){E[0]=ee;e:for(var ce=0,be=E.length,N=be>>>1;ce<N;){var I=2*(ce+1)-1,J=E[I],ae=I+1,de=E[ae];if(0>o(J,ee))ae<be&&0>o(de,J)?(E[ce]=de,E[ae]=ee,ce=ae):(E[ce]=J,E[I]=ee,ce=I);else if(ae<be&&0>o(de,ee))E[ce]=de,E[ae]=ee,ce=ae;else break e}}return $}function o(E,$){var ee=E.sortIndex-$.sortIndex;return ee!==0?ee:E.id-$.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],y=1,v=null,x=3,w=!1,S=!1,T=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function P(E){for(var $=a(g);$!==null;){if($.callback===null)i(g);else if($.startTime<=E)i(g),$.sortIndex=$.expirationTime,e(p,$);else break;$=a(g)}}function X(E){if(T=!1,P(E),!S)if(a(p)!==null)S=!0,W||(W=!0,pe());else{var $=a(g);$!==null&&me(X,$.startTime-E)}}var W=!1,G=-1,q=5,Z=-1;function re(){return C?!0:!(t.unstable_now()-Z<q)}function xe(){if(C=!1,W){var E=t.unstable_now();Z=E;var $=!0;try{e:{S=!1,T&&(T=!1,R(G),G=-1),w=!0;var ee=x;try{t:{for(P(E),v=a(p);v!==null&&!(v.expirationTime>E&&re());){var ce=v.callback;if(typeof ce=="function"){v.callback=null,x=v.priorityLevel;var be=ce(v.expirationTime<=E);if(E=t.unstable_now(),typeof be=="function"){v.callback=be,P(E),$=!0;break t}v===a(p)&&i(p),P(E)}else i(p);v=a(p)}if(v!==null)$=!0;else{var N=a(g);N!==null&&me(X,N.startTime-E),$=!1}}break e}finally{v=null,x=ee,w=!1}$=void 0}}finally{$?pe():W=!1}}}var pe;if(typeof O=="function")pe=function(){O(xe)};else if(typeof MessageChannel<"u"){var Ce=new MessageChannel,Le=Ce.port2;Ce.port1.onmessage=xe,pe=function(){Le.postMessage(null)}}else pe=function(){_(xe,0)};function me(E,$){G=_(function(){E(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(E){E.callback=null},t.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):q=0<E?Math.floor(1e3/E):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(E){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var ee=x;x=$;try{return E()}finally{x=ee}},t.unstable_requestPaint=function(){C=!0},t.unstable_runWithPriority=function(E,$){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var ee=x;x=E;try{return $()}finally{x=ee}},t.unstable_scheduleCallback=function(E,$,ee){var ce=t.unstable_now();switch(typeof ee=="object"&&ee!==null?(ee=ee.delay,ee=typeof ee=="number"&&0<ee?ce+ee:ce):ee=ce,E){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ee+be,E={id:y++,callback:$,priorityLevel:E,startTime:ee,expirationTime:be,sortIndex:-1},ee>ce?(E.sortIndex=ee,e(g,E),a(p)===null&&E===a(g)&&(T?(R(G),G=-1):T=!0,me(X,ee-ce))):(E.sortIndex=be,e(p,E),S||w||(S=!0,W||(W=!0,pe()))),E},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(E){var $=x;return function(){var ee=x;x=$;try{return E.apply(this,arguments)}finally{x=ee}}}})(Jd)),Jd}var oy;function P5(){return oy||(oy=1,Wd.exports=B5()),Wd.exports}var Qd={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function V5(){if(ly)return Tt;ly=1;var t=mf();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var i={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:g,implementation:y}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,Tt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return c(p,g,null,y)},Tt.flushSync=function(p){var g=d.T,y=i.p;try{if(d.T=null,i.p=2,p)return p()}finally{d.T=g,i.p=y,i.d.f()}},Tt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},Tt.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},Tt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):y==="script"&&i.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},Tt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin);i.d.L(p,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},Tt.requestFormReset=function(p){i.d.r(p)},Tt.unstable_batchedUpdates=function(p,g){return p(g)},Tt.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},Tt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tt.version="19.2.7",Tt}var cy;function H5(){if(cy)return Qd.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Qd.exports=V5(),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function $5(){if(uy)return ks;uy=1;var t=P5(),e=mf(),a=H5();function i(n){var r="https://react.dev/errors/"+n;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function d(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function h(n){if(n.tag===31){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function p(n){if(c(n)!==n)throw Error(i(188))}function g(n){var r=n.alternate;if(!r){if(r=c(n),r===null)throw Error(i(188));return r!==n?null:n}for(var s=n,l=r;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),n;if(m===l)return p(f),r;m=m.sibling}throw Error(i(188))}if(s.return!==l.return)s=f,l=m;else{for(var b=!1,k=f.child;k;){if(k===s){b=!0,s=f,l=m;break}if(k===l){b=!0,l=f,s=m;break}k=k.sibling}if(!b){for(k=m.child;k;){if(k===s){b=!0,s=m,l=f;break}if(k===l){b=!0,l=m,s=f;break}k=k.sibling}if(!b)throw Error(i(189))}}if(s.alternate!==l)throw Error(i(190))}if(s.tag!==3)throw Error(i(188));return s.stateNode.current===s?n:r}function y(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n;for(n=n.child;n!==null;){if(r=y(n),r!==null)return r;n=n.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),O=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),q=Symbol.for("react.lazy"),Z=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),xe=Symbol.iterator;function pe(n){return n===null||typeof n!="object"?null:(n=xe&&n[xe]||n["@@iterator"],typeof n=="function"?n:null)}var Ce=Symbol.for("react.client.reference");function Le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ce?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case _:return"Profiler";case C:return"StrictMode";case X:return"Suspense";case W:return"SuspenseList";case Z:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case O:return n.displayName||"Context";case R:return(n._context.displayName||"Context")+".Consumer";case P:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case G:return r=n.displayName||null,r!==null?r:Le(n.type)||"Memo";case q:r=n._payload,n=n._init;try{return Le(n(r))}catch{}}return null}var me=Array.isArray,E=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee={pending:!1,data:null,method:null,action:null},ce=[],be=-1;function N(n){return{current:n}}function I(n){0>be||(n.current=ce[be],ce[be]=null,be--)}function J(n,r){be++,ce[be]=n.current,n.current=r}var ae=N(null),de=N(null),je=N(null),Q=N(null);function ge(n,r){switch(J(je,r),J(de,n),J(ae,null),r.nodeType){case 9:case 11:n=(n=r.documentElement)&&(n=n.namespaceURI)?_0(n):0;break;default:if(n=r.tagName,r=r.namespaceURI)r=_0(r),n=T0(r,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}I(ae),J(ae,n)}function he(){I(ae),I(de),I(je)}function L(n){n.memoizedState!==null&&J(Q,n);var r=ae.current,s=T0(r,n.type);r!==s&&(J(de,n),J(ae,s))}function K(n){de.current===n&&(I(ae),I(de)),Q.current===n&&(I(Q),bs._currentValue=ee)}var ue,Se;function _e(n){if(ue===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);ue=r&&r[1]||"",Se=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ue+n+Se}var it=!1;function ht(n,r){if(!n||it)return"";it=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(r){var Y=function(){throw Error()};if(Object.defineProperty(Y.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Y,[])}catch(V){var B=V}Reflect.construct(n,[],Y)}else{try{Y.call()}catch(V){B=V}n.call(Y.prototype)}}else{try{throw Error()}catch(V){B=V}(Y=n())&&typeof Y.catch=="function"&&Y.catch(function(){})}}catch(V){if(V&&B&&typeof V.stack=="string")return[V.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],k=m[1];if(b&&k){var A=b.split(`
`),U=k.split(`
`);for(f=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;f<U.length&&!U[f].includes("DetermineComponentFrameRoot");)f++;if(l===A.length||f===U.length)for(l=A.length-1,f=U.length-1;1<=l&&0<=f&&A[l]!==U[f];)f--;for(;1<=l&&0<=f;l--,f--)if(A[l]!==U[f]){if(l!==1||f!==1)do if(l--,f--,0>f||A[l]!==U[f]){var H=`
`+A[l].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=l&&0<=f);break}}}finally{it=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?_e(s):""}function Rc(n,r){switch(n.tag){case 26:case 27:case 5:return _e(n.type);case 16:return _e("Lazy");case 13:return n.child!==r&&r!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return ht(n.type,!1);case 11:return ht(n.type.render,!1);case 1:return ht(n.type,!0);case 31:return _e("Activity");default:return""}}function Oc(n){try{var r="",s=null;do r+=Rc(n,s),s=n,n=n.return;while(n);return r}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ja=Object.prototype.hasOwnProperty,Dc=t.unstable_scheduleCallback,Lc=t.unstable_cancelCallback,fw=t.unstable_shouldYield,pw=t.unstable_requestPaint,It=t.unstable_now,mw=t.unstable_getCurrentPriorityLevel,rp=t.unstable_ImmediatePriority,ap=t.unstable_UserBlockingPriority,oo=t.unstable_NormalPriority,gw=t.unstable_LowPriority,ip=t.unstable_IdlePriority,yw=t.log,vw=t.unstable_setDisableYieldValue,Ri=null,qt=null;function pr(n){if(typeof yw=="function"&&vw(n),qt&&typeof qt.setStrictMode=="function")try{qt.setStrictMode(Ri,n)}catch{}}var Ft=Math.clz32?Math.clz32:ww,bw=Math.log,xw=Math.LN2;function ww(n){return n>>>=0,n===0?32:31-(bw(n)/xw|0)|0}var lo=256,co=262144,uo=4194304;function Kr(n){var r=n&42;if(r!==0)return r;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ho(n,r,s){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var k=l&134217727;return k!==0?(l=k&~m,l!==0?f=Kr(l):(b&=k,b!==0?f=Kr(b):s||(s=k&~n,s!==0&&(f=Kr(s))))):(k=l&~m,k!==0?f=Kr(k):b!==0?f=Kr(b):s||(s=l&~n,s!==0&&(f=Kr(s)))),f===0?0:r!==0&&r!==f&&(r&m)===0&&(m=f&-f,s=r&-r,m>=s||m===32&&(s&4194048)!==0)?r:f}function Oi(n,r){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&r)===0}function Sw(n,r){switch(n){case 1:case 2:case 4:case 8:case 64:return r+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sp(){var n=uo;return uo<<=1,(uo&62914560)===0&&(uo=4194304),n}function Mc(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function Di(n,r){n.pendingLanes|=r,r!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function jw(n,r,s,l,f,m){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var k=n.entanglements,A=n.expirationTimes,U=n.hiddenUpdates;for(s=b&~s;0<s;){var H=31-Ft(s),Y=1<<H;k[H]=0,A[H]=-1;var B=U[H];if(B!==null)for(U[H]=null,H=0;H<B.length;H++){var V=B[H];V!==null&&(V.lane&=-536870913)}s&=~Y}l!==0&&op(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~r))}function op(n,r,s){n.pendingLanes|=r,n.suspendedLanes&=~r;var l=31-Ft(r);n.entangledLanes|=r,n.entanglements[l]=n.entanglements[l]|1073741824|s&261930}function lp(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var l=31-Ft(s),f=1<<l;f&r|n[l]&r&&(n[l]|=r),s&=~f}}function cp(n,r){var s=r&-r;return s=(s&42)!==0?1:zc(s),(s&(n.suspendedLanes|r))!==0?0:s}function zc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Uc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function up(){var n=$.p;return n!==0?n:(n=window.event,n===void 0?32:X0(n.type))}function dp(n,r){var s=$.p;try{return $.p=n,r()}finally{$.p=s}}var mr=Math.random().toString(36).slice(2),bt="__reactFiber$"+mr,Lt="__reactProps$"+mr,ka="__reactContainer$"+mr,Bc="__reactEvents$"+mr,kw="__reactListeners$"+mr,_w="__reactHandles$"+mr,hp="__reactResources$"+mr,Li="__reactMarker$"+mr;function Pc(n){delete n[bt],delete n[Lt],delete n[Bc],delete n[kw],delete n[_w]}function _a(n){var r=n[bt];if(r)return r;for(var s=n.parentNode;s;){if(r=s[ka]||s[bt]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=D0(n);n!==null;){if(s=n[bt])return s;n=D0(n)}return r}n=s,s=n.parentNode}return null}function Ta(n){if(n=n[bt]||n[ka]){var r=n.tag;if(r===5||r===6||r===13||r===31||r===26||r===27||r===3)return n}return null}function Mi(n){var r=n.tag;if(r===5||r===26||r===27||r===6)return n.stateNode;throw Error(i(33))}function Ea(n){var r=n[hp];return r||(r=n[hp]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function gt(n){n[Li]=!0}var fp=new Set,pp={};function Yr(n,r){Ca(n,r),Ca(n+"Capture",r)}function Ca(n,r){for(pp[n]=r,n=0;n<r.length;n++)fp.add(r[n])}var Tw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mp={},gp={};function Ew(n){return ja.call(gp,n)?!0:ja.call(mp,n)?!1:Tw.test(n)?gp[n]=!0:(mp[n]=!0,!1)}function fo(n,r,s){if(Ew(r))if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(r);return;case"boolean":var l=r.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(r);return}}n.setAttribute(r,""+s)}}function po(n,r,s){if(s===null)n.removeAttribute(r);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(r);return}n.setAttribute(r,""+s)}}function In(n,r,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(r,s,""+l)}}function an(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yp(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Cw(n,r,s){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,r);if(!n.hasOwnProperty(r)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,m.call(this,b)}}),Object.defineProperty(n,r,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Vc(n){if(!n._valueTracker){var r=yp(n)?"checked":"value";n._valueTracker=Cw(n,r,""+n[r])}}function vp(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),l="";return n&&(l=yp(n)?n.checked?"true":"false":n.value),n=l,n!==s?(r.setValue(n),!0):!1}function mo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Aw=/[\n"\\]/g;function sn(n){return n.replace(Aw,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Hc(n,r,s,l,f,m,b,k){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),r!=null?b==="number"?(r===0&&n.value===""||n.value!=r)&&(n.value=""+an(r)):n.value!==""+an(r)&&(n.value=""+an(r)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),r!=null?$c(n,b,an(r)):s!=null?$c(n,b,an(s)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?n.name=""+an(k):n.removeAttribute("name")}function bp(n,r,s,l,f,m,b,k){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),r!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||r!=null)){Vc(n);return}s=s!=null?""+an(s):"",r=r!=null?""+an(r):s,k||r===n.value||(n.value=r),n.defaultValue=r}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=k?n.checked:!!l,n.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),Vc(n)}function $c(n,r,s){r==="number"&&mo(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Aa(n,r,s,l){if(n=n.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=r.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&l&&(n[s].defaultSelected=!0)}else{for(s=""+an(s),r=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function xp(n,r,s){if(r!=null&&(r=""+an(r),r!==n.value&&(n.value=r),s==null)){n.defaultValue!==r&&(n.defaultValue=r);return}n.defaultValue=s!=null?""+an(s):""}function wp(n,r,s,l){if(r==null){if(l!=null){if(s!=null)throw Error(i(92));if(me(l)){if(1<l.length)throw Error(i(93));l=l[0]}s=l}s==null&&(s=""),r=s}s=an(r),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l),Vc(n)}function Na(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var Nw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sp(n,r,s){var l=r.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(r,""):r==="float"?n.cssFloat="":n[r]="":l?n.setProperty(r,s):typeof s!="number"||s===0||Nw.has(r)?r==="float"?n.cssFloat=s:n[r]=(""+s).trim():n[r]=s+"px"}function jp(n,r,s){if(r!=null&&typeof r!="object")throw Error(i(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||r!=null&&r.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in r)l=r[f],r.hasOwnProperty(f)&&s[f]!==l&&Sp(n,f,l)}else for(var m in r)r.hasOwnProperty(m)&&Sp(n,m,r[m])}function Ic(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Rw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ow=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function go(n){return Ow.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function qn(){}var qc=null;function Fc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ra=null,Oa=null;function kp(n){var r=Ta(n);if(r&&(n=r.stateNode)){var s=n[Lt]||null;e:switch(n=r.stateNode,r.type){case"input":if(Hc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+sn(""+r)+'"][type="radio"]'),r=0;r<s.length;r++){var l=s[r];if(l!==n&&l.form===n.form){var f=l[Lt]||null;if(!f)throw Error(i(90));Hc(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(r=0;r<s.length;r++)l=s[r],l.form===n.form&&vp(l)}break e;case"textarea":xp(n,s.value,s.defaultValue);break e;case"select":r=s.value,r!=null&&Aa(n,!!s.multiple,r,!1)}}}var Gc=!1;function _p(n,r,s){if(Gc)return n(r,s);Gc=!0;try{var l=n(r);return l}finally{if(Gc=!1,(Ra!==null||Oa!==null)&&(rl(),Ra&&(r=Ra,n=Oa,Oa=Ra=null,kp(r),n)))for(r=0;r<n.length;r++)kp(n[r])}}function zi(n,r){var s=n.stateNode;if(s===null)return null;var l=s[Lt]||null;if(l===null)return null;s=l[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(i(231,r,typeof s));return s}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Fn)try{var Ui={};Object.defineProperty(Ui,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Ui,Ui),window.removeEventListener("test",Ui,Ui)}catch{Kc=!1}var gr=null,Yc=null,yo=null;function Tp(){if(yo)return yo;var n,r=Yc,s=r.length,l,f="value"in gr?gr.value:gr.textContent,m=f.length;for(n=0;n<s&&r[n]===f[n];n++);var b=s-n;for(l=1;l<=b&&r[s-l]===f[m-l];l++);return yo=f.slice(n,1<l?1-l:void 0)}function vo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function bo(){return!0}function Ep(){return!1}function Mt(n){function r(s,l,f,m,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(s=n[k],this[k]=s?s(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?bo:Ep,this.isPropagationStopped=Ep,this}return v(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),r}var Xr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=Mt(Xr),Bi=v({},Xr,{view:0,detail:0}),Dw=Mt(Bi),Xc,Wc,Pi,wo=v({},Bi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pi&&(Pi&&n.type==="mousemove"?(Xc=n.screenX-Pi.screenX,Wc=n.screenY-Pi.screenY):Wc=Xc=0,Pi=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:Wc}}),Cp=Mt(wo),Lw=v({},wo,{dataTransfer:0}),Mw=Mt(Lw),zw=v({},Bi,{relatedTarget:0}),Jc=Mt(zw),Uw=v({},Xr,{animationName:0,elapsedTime:0,pseudoElement:0}),Bw=Mt(Uw),Pw=v({},Xr,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vw=Mt(Pw),Hw=v({},Xr,{data:0}),Ap=Mt(Hw),$w={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Iw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},qw={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Fw(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=qw[n])?!!r[n]:!1}function Qc(){return Fw}var Gw=v({},Bi,{key:function(n){if(n.key){var r=$w[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Iw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(n){return n.type==="keypress"?vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Kw=Mt(Gw),Yw=v({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=Mt(Yw),Xw=v({},Bi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Ww=Mt(Xw),Jw=v({},Xr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qw=Mt(Jw),Zw=v({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),e2=Mt(Zw),t2=v({},Xr,{newState:0,oldState:0}),n2=Mt(t2),r2=[9,13,27,32],Zc=Fn&&"CompositionEvent"in window,Vi=null;Fn&&"documentMode"in document&&(Vi=document.documentMode);var a2=Fn&&"TextEvent"in window&&!Vi,Rp=Fn&&(!Zc||Vi&&8<Vi&&11>=Vi),Op=" ",Dp=!1;function Lp(n,r){switch(n){case"keyup":return r2.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Da=!1;function i2(n,r){switch(n){case"compositionend":return Mp(r);case"keypress":return r.which!==32?null:(Dp=!0,Op);case"textInput":return n=r.data,n===Op&&Dp?null:n;default:return null}}function s2(n,r){if(Da)return n==="compositionend"||!Zc&&Lp(n,r)?(n=Tp(),yo=Yc=gr=null,Da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Rp&&r.locale!=="ko"?null:r.data;default:return null}}var o2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!o2[n.type]:r==="textarea"}function Up(n,r,s,l){Ra?Oa?Oa.push(l):Oa=[l]:Ra=l,r=ul(r,"onChange"),0<r.length&&(s=new xo("onChange","change",null,s,l),n.push({event:s,listeners:r}))}var Hi=null,$i=null;function l2(n){b0(n,0)}function So(n){var r=Mi(n);if(vp(r))return n}function Bp(n,r){if(n==="change")return r}var Pp=!1;if(Fn){var eu;if(Fn){var tu="oninput"in document;if(!tu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),tu=typeof Vp.oninput=="function"}eu=tu}else eu=!1;Pp=eu&&(!document.documentMode||9<document.documentMode)}function Hp(){Hi&&(Hi.detachEvent("onpropertychange",$p),$i=Hi=null)}function $p(n){if(n.propertyName==="value"&&So($i)){var r=[];Up(r,$i,n,Fc(n)),_p(l2,r)}}function c2(n,r,s){n==="focusin"?(Hp(),Hi=r,$i=s,Hi.attachEvent("onpropertychange",$p)):n==="focusout"&&Hp()}function u2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return So($i)}function d2(n,r){if(n==="click")return So(r)}function h2(n,r){if(n==="input"||n==="change")return So(r)}function f2(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Gt=typeof Object.is=="function"?Object.is:f2;function Ii(n,r){if(Gt(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),l=Object.keys(r);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!ja.call(r,f)||!Gt(n[f],r[f]))return!1}return!0}function Ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qp(n,r){var s=Ip(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=r&&l>=r)return{node:s,offset:r-n};n=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ip(s)}}function Fp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Fp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Gp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var r=mo(n.document);r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=mo(n.document)}return r}function nu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}var p2=Fn&&"documentMode"in document&&11>=document.documentMode,La=null,ru=null,qi=null,au=!1;function Kp(n,r,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;au||La==null||La!==mo(l)||(l=La,"selectionStart"in l&&nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qi&&Ii(qi,l)||(qi=l,l=ul(ru,"onSelect"),0<l.length&&(r=new xo("onSelect","select",null,r,s),n.push({event:r,listeners:l}),r.target=La)))}function Wr(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var Ma={animationend:Wr("Animation","AnimationEnd"),animationiteration:Wr("Animation","AnimationIteration"),animationstart:Wr("Animation","AnimationStart"),transitionrun:Wr("Transition","TransitionRun"),transitionstart:Wr("Transition","TransitionStart"),transitioncancel:Wr("Transition","TransitionCancel"),transitionend:Wr("Transition","TransitionEnd")},iu={},Yp={};Fn&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function Jr(n){if(iu[n])return iu[n];if(!Ma[n])return n;var r=Ma[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in Yp)return iu[n]=r[s];return n}var Xp=Jr("animationend"),Wp=Jr("animationiteration"),Jp=Jr("animationstart"),m2=Jr("transitionrun"),g2=Jr("transitionstart"),y2=Jr("transitioncancel"),Qp=Jr("transitionend"),Zp=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function vn(n,r){Zp.set(n,r),Yr(r,[n])}var jo=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},on=[],za=0,ou=0;function ko(){for(var n=za,r=ou=za=0;r<n;){var s=on[r];on[r++]=null;var l=on[r];on[r++]=null;var f=on[r];on[r++]=null;var m=on[r];if(on[r++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}m!==0&&em(s,f,m)}}function _o(n,r,s,l){on[za++]=n,on[za++]=r,on[za++]=s,on[za++]=l,ou|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function lu(n,r,s,l){return _o(n,r,s,l),To(n)}function Qr(n,r){return _o(n,null,null,r),To(n)}function em(n,r,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=n.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&r!==null&&(f=31-Ft(s),n=m.hiddenUpdates,l=n[f],l===null?n[f]=[r]:l.push(r),r.lane=s|536870912),m):null}function To(n){if(50<hs)throw hs=0,yd=null,Error(i(185));for(var r=n.return;r!==null;)n=r,r=n.return;return n.tag===3?n.stateNode:null}var Ua={};function v2(n,r,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kt(n,r,s,l){return new v2(n,r,s,l)}function cu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gn(n,r){var s=n.alternate;return s===null?(s=Kt(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function tm(n,r){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=r,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,r=s.dependencies,n.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),n}function Eo(n,r,s,l,f,m){var b=0;if(l=n,typeof n=="function")cu(n)&&(b=1);else if(typeof n=="string")b=j5(n,s,ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case Z:return n=Kt(31,s,r,f),n.elementType=Z,n.lanes=m,n;case T:return Zr(s.children,f,m,r);case C:b=8,f|=24;break;case _:return n=Kt(12,s,r,f|2),n.elementType=_,n.lanes=m,n;case X:return n=Kt(13,s,r,f),n.elementType=X,n.lanes=m,n;case W:return n=Kt(19,s,r,f),n.elementType=W,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:b=10;break e;case R:b=9;break e;case P:b=11;break e;case G:b=14;break e;case q:b=16,l=null;break e}b=29,s=Error(i(130,n===null?"null":typeof n,"")),l=null}return r=Kt(b,s,r,f),r.elementType=n,r.type=l,r.lanes=m,r}function Zr(n,r,s,l){return n=Kt(7,n,l,r),n.lanes=s,n}function uu(n,r,s){return n=Kt(6,n,null,r),n.lanes=s,n}function nm(n){var r=Kt(18,null,null,0);return r.stateNode=n,r}function du(n,r,s){return r=Kt(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}var rm=new WeakMap;function ln(n,r){if(typeof n=="object"&&n!==null){var s=rm.get(n);return s!==void 0?s:(r={value:n,source:r,stack:Oc(r)},rm.set(n,r),r)}return{value:n,source:r,stack:Oc(r)}}var Ba=[],Pa=0,Co=null,Fi=0,cn=[],un=0,yr=null,Rn=1,On="";function Kn(n,r){Ba[Pa++]=Fi,Ba[Pa++]=Co,Co=n,Fi=r}function am(n,r,s){cn[un++]=Rn,cn[un++]=On,cn[un++]=yr,yr=n;var l=Rn;n=On;var f=32-Ft(l)-1;l&=~(1<<f),s+=1;var m=32-Ft(r)+f;if(30<m){var b=f-f%5;m=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Rn=1<<32-Ft(r)+f|s<<f|l,On=m+n}else Rn=1<<m|s<<f|l,On=n}function hu(n){n.return!==null&&(Kn(n,1),am(n,1,0))}function fu(n){for(;n===Co;)Co=Ba[--Pa],Ba[Pa]=null,Fi=Ba[--Pa],Ba[Pa]=null;for(;n===yr;)yr=cn[--un],cn[un]=null,On=cn[--un],cn[un]=null,Rn=cn[--un],cn[un]=null}function im(n,r){cn[un++]=Rn,cn[un++]=On,cn[un++]=yr,Rn=r.id,On=r.overflow,yr=n}var xt=null,Ke=null,De=!1,vr=null,dn=!1,pu=Error(i(519));function br(n){var r=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gi(ln(r,n)),pu}function sm(n){var r=n.stateNode,s=n.type,l=n.memoizedProps;switch(r[bt]=n,r[Lt]=l,s){case"dialog":Ne("cancel",r),Ne("close",r);break;case"iframe":case"object":case"embed":Ne("load",r);break;case"video":case"audio":for(s=0;s<ps.length;s++)Ne(ps[s],r);break;case"source":Ne("error",r);break;case"img":case"image":case"link":Ne("error",r),Ne("load",r);break;case"details":Ne("toggle",r);break;case"input":Ne("invalid",r),bp(r,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ne("invalid",r);break;case"textarea":Ne("invalid",r),wp(r,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||r.textContent===""+s||l.suppressHydrationWarning===!0||j0(r.textContent,s)?(l.popover!=null&&(Ne("beforetoggle",r),Ne("toggle",r)),l.onScroll!=null&&Ne("scroll",r),l.onScrollEnd!=null&&Ne("scrollend",r),l.onClick!=null&&(r.onclick=qn),r=!0):r=!1,r||br(n,!0)}function om(n){for(xt=n.return;xt;)switch(xt.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:xt=xt.return}}function Va(n){if(n!==xt)return!1;if(!De)return om(n),De=!0,!1;var r=n.tag,s;if((s=r!==3&&r!==27)&&((s=r===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Od(n.type,n.memoizedProps)),s=!s),s&&Ke&&br(n),om(n),r===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Ke=O0(n)}else if(r===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));Ke=O0(n)}else r===27?(r=Ke,Dr(n.type)?(n=Ud,Ud=null,Ke=n):Ke=r):Ke=xt?fn(n.stateNode.nextSibling):null;return!0}function ea(){Ke=xt=null,De=!1}function mu(){var n=vr;return n!==null&&(Pt===null?Pt=n:Pt.push.apply(Pt,n),vr=null),n}function Gi(n){vr===null?vr=[n]:vr.push(n)}var gu=N(null),ta=null,Yn=null;function xr(n,r,s){J(gu,r._currentValue),r._currentValue=s}function Xn(n){n._currentValue=gu.current,I(gu)}function yu(n,r,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,l!==null&&(l.childLanes|=r)):l!==null&&(l.childLanes&r)!==r&&(l.childLanes|=r),n===s)break;n=n.return}}function vu(n,r,s,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var k=m;m=f;for(var A=0;A<r.length;A++)if(k.context===r[A]){m.lanes|=s,k=m.alternate,k!==null&&(k.lanes|=s),yu(m.return,s,n),l||(b=null);break e}m=k.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(i(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),yu(b,s,n),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Ha(n,r,s,l){n=null;for(var f=r,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(i(387));if(b=b.memoizedProps,b!==null){var k=f.type;Gt(f.pendingProps.value,b.value)||(n!==null?n.push(k):n=[k])}}else if(f===Q.current){if(b=f.alternate,b===null)throw Error(i(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(bs):n=[bs])}f=f.return}n!==null&&vu(r,n,s,l),r.flags|=262144}function Ao(n){for(n=n.firstContext;n!==null;){if(!Gt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function na(n){ta=n,Yn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function wt(n){return lm(ta,n)}function No(n,r){return ta===null&&na(n),lm(n,r)}function lm(n,r){var s=r._currentValue;if(r={context:r,memoizedValue:s,next:null},Yn===null){if(n===null)throw Error(i(308));Yn=r,n.dependencies={lanes:0,firstContext:r},n.flags|=524288}else Yn=Yn.next=r;return s}var b2=typeof AbortController<"u"?AbortController:function(){var n=[],r=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){r.aborted=!0,n.forEach(function(s){return s()})}},x2=t.unstable_scheduleCallback,w2=t.unstable_NormalPriority,st={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new b2,data:new Map,refCount:0}}function Ki(n){n.refCount--,n.refCount===0&&x2(w2,function(){n.controller.abort()})}var Yi=null,xu=0,$a=0,Ia=null;function S2(n,r){if(Yi===null){var s=Yi=[];xu=0,$a=jd(),Ia={status:"pending",value:void 0,then:function(l){s.push(l)}}}return xu++,r.then(cm,cm),r}function cm(){if(--xu===0&&Yi!==null){Ia!==null&&(Ia.status="fulfilled");var n=Yi;Yi=null,$a=0,Ia=null;for(var r=0;r<n.length;r++)(0,n[r])()}}function j2(n,r){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){l.status="fulfilled",l.value=r;for(var f=0;f<s.length;f++)(0,s[f])(r)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var um=E.S;E.S=function(n,r){Kg=It(),typeof r=="object"&&r!==null&&typeof r.then=="function"&&S2(n,r),um!==null&&um(n,r)};var ra=N(null);function wu(){var n=ra.current;return n!==null?n:Ie.pooledCache}function Ro(n,r){r===null?J(ra,ra.current):J(ra,r.pool)}function dm(){var n=wu();return n===null?null:{parent:st._currentValue,pool:n}}var qa=Error(i(460)),Su=Error(i(474)),Oo=Error(i(542)),Do={then:function(){}};function hm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function fm(n,r,s){switch(s=n[s],s===void 0?n.push(r):s!==r&&(r.then(qn,qn),r=s),r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,mm(n),n;default:if(typeof r.status=="string")r.then(qn,qn);else{if(n=Ie,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=r,n.status="pending",n.then(function(l){if(r.status==="pending"){var f=r;f.status="fulfilled",f.value=l}},function(l){if(r.status==="pending"){var f=r;f.status="rejected",f.reason=l}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw n=r.reason,mm(n),n}throw ia=r,qa}}function aa(n){try{var r=n._init;return r(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ia=s,qa):s}}var ia=null;function pm(){if(ia===null)throw Error(i(459));var n=ia;return ia=null,n}function mm(n){if(n===qa||n===Oo)throw Error(i(483))}var Fa=null,Xi=0;function Lo(n){var r=Xi;return Xi+=1,Fa===null&&(Fa=[]),fm(Fa,n,r)}function Wi(n,r){r=r.props.ref,n.ref=r!==void 0?r:null}function Mo(n,r){throw r.$$typeof===x?Error(i(525)):(n=Object.prototype.toString.call(r),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n)))}function gm(n){function r(M,D){if(n){var z=M.deletions;z===null?(M.deletions=[D],M.flags|=16):z.push(D)}}function s(M,D){if(!n)return null;for(;D!==null;)r(M,D),D=D.sibling;return null}function l(M){for(var D=new Map;M!==null;)M.key!==null?D.set(M.key,M):D.set(M.index,M),M=M.sibling;return D}function f(M,D){return M=Gn(M,D),M.index=0,M.sibling=null,M}function m(M,D,z){return M.index=z,n?(z=M.alternate,z!==null?(z=z.index,z<D?(M.flags|=67108866,D):z):(M.flags|=67108866,D)):(M.flags|=1048576,D)}function b(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function k(M,D,z,F){return D===null||D.tag!==6?(D=uu(z,M.mode,F),D.return=M,D):(D=f(D,z),D.return=M,D)}function A(M,D,z,F){var fe=z.type;return fe===T?H(M,D,z.props.children,F,z.key):D!==null&&(D.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===q&&aa(fe)===D.type)?(D=f(D,z.props),Wi(D,z),D.return=M,D):(D=Eo(z.type,z.key,z.props,null,M.mode,F),Wi(D,z),D.return=M,D)}function U(M,D,z,F){return D===null||D.tag!==4||D.stateNode.containerInfo!==z.containerInfo||D.stateNode.implementation!==z.implementation?(D=du(z,M.mode,F),D.return=M,D):(D=f(D,z.children||[]),D.return=M,D)}function H(M,D,z,F,fe){return D===null||D.tag!==7?(D=Zr(z,M.mode,F,fe),D.return=M,D):(D=f(D,z),D.return=M,D)}function Y(M,D,z){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=uu(""+D,M.mode,z),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case w:return z=Eo(D.type,D.key,D.props,null,M.mode,z),Wi(z,D),z.return=M,z;case S:return D=du(D,M.mode,z),D.return=M,D;case q:return D=aa(D),Y(M,D,z)}if(me(D)||pe(D))return D=Zr(D,M.mode,z,null),D.return=M,D;if(typeof D.then=="function")return Y(M,Lo(D),z);if(D.$$typeof===O)return Y(M,No(M,D),z);Mo(M,D)}return null}function B(M,D,z,F){var fe=D!==null?D.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return fe!==null?null:k(M,D,""+z,F);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===fe?A(M,D,z,F):null;case S:return z.key===fe?U(M,D,z,F):null;case q:return z=aa(z),B(M,D,z,F)}if(me(z)||pe(z))return fe!==null?null:H(M,D,z,F,null);if(typeof z.then=="function")return B(M,D,Lo(z),F);if(z.$$typeof===O)return B(M,D,No(M,z),F);Mo(M,z)}return null}function V(M,D,z,F,fe){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return M=M.get(z)||null,k(D,M,""+F,fe);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return M=M.get(F.key===null?z:F.key)||null,A(D,M,F,fe);case S:return M=M.get(F.key===null?z:F.key)||null,U(D,M,F,fe);case q:return F=aa(F),V(M,D,z,F,fe)}if(me(F)||pe(F))return M=M.get(z)||null,H(D,M,F,fe,null);if(typeof F.then=="function")return V(M,D,z,Lo(F),fe);if(F.$$typeof===O)return V(M,D,z,No(D,F),fe);Mo(D,F)}return null}function ie(M,D,z,F){for(var fe=null,Me=null,le=D,Ee=D=0,Oe=null;le!==null&&Ee<z.length;Ee++){le.index>Ee?(Oe=le,le=null):Oe=le.sibling;var ze=B(M,le,z[Ee],F);if(ze===null){le===null&&(le=Oe);break}n&&le&&ze.alternate===null&&r(M,le),D=m(ze,D,Ee),Me===null?fe=ze:Me.sibling=ze,Me=ze,le=Oe}if(Ee===z.length)return s(M,le),De&&Kn(M,Ee),fe;if(le===null){for(;Ee<z.length;Ee++)le=Y(M,z[Ee],F),le!==null&&(D=m(le,D,Ee),Me===null?fe=le:Me.sibling=le,Me=le);return De&&Kn(M,Ee),fe}for(le=l(le);Ee<z.length;Ee++)Oe=V(le,M,Ee,z[Ee],F),Oe!==null&&(n&&Oe.alternate!==null&&le.delete(Oe.key===null?Ee:Oe.key),D=m(Oe,D,Ee),Me===null?fe=Oe:Me.sibling=Oe,Me=Oe);return n&&le.forEach(function(Br){return r(M,Br)}),De&&Kn(M,Ee),fe}function ye(M,D,z,F){if(z==null)throw Error(i(151));for(var fe=null,Me=null,le=D,Ee=D=0,Oe=null,ze=z.next();le!==null&&!ze.done;Ee++,ze=z.next()){le.index>Ee?(Oe=le,le=null):Oe=le.sibling;var Br=B(M,le,ze.value,F);if(Br===null){le===null&&(le=Oe);break}n&&le&&Br.alternate===null&&r(M,le),D=m(Br,D,Ee),Me===null?fe=Br:Me.sibling=Br,Me=Br,le=Oe}if(ze.done)return s(M,le),De&&Kn(M,Ee),fe;if(le===null){for(;!ze.done;Ee++,ze=z.next())ze=Y(M,ze.value,F),ze!==null&&(D=m(ze,D,Ee),Me===null?fe=ze:Me.sibling=ze,Me=ze);return De&&Kn(M,Ee),fe}for(le=l(le);!ze.done;Ee++,ze=z.next())ze=V(le,M,Ee,ze.value,F),ze!==null&&(n&&ze.alternate!==null&&le.delete(ze.key===null?Ee:ze.key),D=m(ze,D,Ee),Me===null?fe=ze:Me.sibling=ze,Me=ze);return n&&le.forEach(function(L5){return r(M,L5)}),De&&Kn(M,Ee),fe}function $e(M,D,z,F){if(typeof z=="object"&&z!==null&&z.type===T&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var fe=z.key;D!==null;){if(D.key===fe){if(fe=z.type,fe===T){if(D.tag===7){s(M,D.sibling),F=f(D,z.props.children),F.return=M,M=F;break e}}else if(D.elementType===fe||typeof fe=="object"&&fe!==null&&fe.$$typeof===q&&aa(fe)===D.type){s(M,D.sibling),F=f(D,z.props),Wi(F,z),F.return=M,M=F;break e}s(M,D);break}else r(M,D);D=D.sibling}z.type===T?(F=Zr(z.props.children,M.mode,F,z.key),F.return=M,M=F):(F=Eo(z.type,z.key,z.props,null,M.mode,F),Wi(F,z),F.return=M,M=F)}return b(M);case S:e:{for(fe=z.key;D!==null;){if(D.key===fe)if(D.tag===4&&D.stateNode.containerInfo===z.containerInfo&&D.stateNode.implementation===z.implementation){s(M,D.sibling),F=f(D,z.children||[]),F.return=M,M=F;break e}else{s(M,D);break}else r(M,D);D=D.sibling}F=du(z,M.mode,F),F.return=M,M=F}return b(M);case q:return z=aa(z),$e(M,D,z,F)}if(me(z))return ie(M,D,z,F);if(pe(z)){if(fe=pe(z),typeof fe!="function")throw Error(i(150));return z=fe.call(z),ye(M,D,z,F)}if(typeof z.then=="function")return $e(M,D,Lo(z),F);if(z.$$typeof===O)return $e(M,D,No(M,z),F);Mo(M,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,D!==null&&D.tag===6?(s(M,D.sibling),F=f(D,z),F.return=M,M=F):(s(M,D),F=uu(z,M.mode,F),F.return=M,M=F),b(M)):s(M,D)}return function(M,D,z,F){try{Xi=0;var fe=$e(M,D,z,F);return Fa=null,fe}catch(le){if(le===qa||le===Oo)throw le;var Me=Kt(29,le,null,M.mode);return Me.lanes=F,Me.return=M,Me}finally{}}}var sa=gm(!0),ym=gm(!1),wr=!1;function ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Sr(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function jr(n,r,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var f=l.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),l.pending=r,r=To(n),em(n,null,s),r}return _o(n,l,r,s),To(n)}function Ji(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194048)!==0)){var l=r.lanes;l&=n.pendingLanes,s|=l,r.lanes=s,lp(n,s)}}function _u(n,r){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?f=m=r:m=m.next=r}else f=m=r;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}var Tu=!1;function Qi(){if(Tu){var n=Ia;if(n!==null)throw n}}function Zi(n,r,s,l){Tu=!1;var f=n.updateQueue;wr=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var A=k,U=A.next;A.next=null,b===null?m=U:b.next=U,b=A;var H=n.alternate;H!==null&&(H=H.updateQueue,k=H.lastBaseUpdate,k!==b&&(k===null?H.firstBaseUpdate=U:k.next=U,H.lastBaseUpdate=A))}if(m!==null){var Y=f.baseState;b=0,H=U=A=null,k=m;do{var B=k.lane&-536870913,V=B!==k.lane;if(V?(Re&B)===B:(l&B)===B){B!==0&&B===$a&&(Tu=!0),H!==null&&(H=H.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var ie=n,ye=k;B=r;var $e=s;switch(ye.tag){case 1:if(ie=ye.payload,typeof ie=="function"){Y=ie.call($e,Y,B);break e}Y=ie;break e;case 3:ie.flags=ie.flags&-65537|128;case 0:if(ie=ye.payload,B=typeof ie=="function"?ie.call($e,Y,B):ie,B==null)break e;Y=v({},Y,B);break e;case 2:wr=!0}}B=k.callback,B!==null&&(n.flags|=64,V&&(n.flags|=8192),V=f.callbacks,V===null?f.callbacks=[B]:V.push(B))}else V={lane:B,tag:k.tag,payload:k.payload,callback:k.callback,next:null},H===null?(U=H=V,A=Y):H=H.next=V,b|=B;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;V=k,k=V.next,V.next=null,f.lastBaseUpdate=V,f.shared.pending=null}}while(!0);H===null&&(A=Y),f.baseState=A,f.firstBaseUpdate=U,f.lastBaseUpdate=H,m===null&&(f.shared.lanes=0),Cr|=b,n.lanes=b,n.memoizedState=Y}}function vm(n,r){if(typeof n!="function")throw Error(i(191,n));n.call(r)}function bm(n,r){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)vm(s[n],r)}var Ga=N(null),zo=N(0);function xm(n,r){n=ar,J(zo,n),J(Ga,r),ar=n|r.baseLanes}function Eu(){J(zo,ar),J(Ga,Ga.current)}function Cu(){ar=zo.current,I(Ga),I(zo)}var Yt=N(null),hn=null;function kr(n){var r=n.alternate;J(tt,tt.current&1),J(Yt,n),hn===null&&(r===null||Ga.current!==null||r.memoizedState!==null)&&(hn=n)}function Au(n){J(tt,tt.current),J(Yt,n),hn===null&&(hn=n)}function wm(n){n.tag===22?(J(tt,tt.current),J(Yt,n),hn===null&&(hn=n)):_r()}function _r(){J(tt,tt.current),J(Yt,Yt.current)}function Xt(n){I(Yt),hn===n&&(hn=null),I(tt)}var tt=N(0);function Uo(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Md(s)||zd(s)))return r}else if(r.tag===19&&(r.memoizedProps.revealOrder==="forwards"||r.memoizedProps.revealOrder==="backwards"||r.memoizedProps.revealOrder==="unstable_legacy-backwards"||r.memoizedProps.revealOrder==="together")){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Wn=0,Te=null,Ve=null,ot=null,Bo=!1,Ka=!1,oa=!1,Po=0,es=0,Ya=null,k2=0;function Je(){throw Error(i(321))}function Nu(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!Gt(n[s],r[s]))return!1;return!0}function Ru(n,r,s,l,f,m){return Wn=m,Te=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,E.H=n===null||n.memoizedState===null?ag:Gu,oa=!1,m=s(l,f),oa=!1,Ka&&(m=jm(r,s,l,f)),Sm(n),m}function Sm(n){E.H=rs;var r=Ve!==null&&Ve.next!==null;if(Wn=0,ot=Ve=Te=null,Bo=!1,es=0,Ya=null,r)throw Error(i(300));n===null||lt||(n=n.dependencies,n!==null&&Ao(n)&&(lt=!0))}function jm(n,r,s,l){Te=n;var f=0;do{if(Ka&&(Ya=null),es=0,Ka=!1,25<=f)throw Error(i(301));if(f+=1,ot=Ve=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}E.H=ig,m=r(s,l)}while(Ka);return m}function _2(){var n=E.H,r=n.useState()[0];return r=typeof r.then=="function"?ts(r):r,n=n.useState()[0],(Ve!==null?Ve.memoizedState:null)!==n&&(Te.flags|=1024),r}function Ou(){var n=Po!==0;return Po=0,n}function Du(n,r,s){r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~s}function Lu(n){if(Bo){for(n=n.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}Bo=!1}Wn=0,ot=Ve=Te=null,Ka=!1,es=Po=0,Ya=null}function Ct(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Te.memoizedState=ot=n:ot=ot.next=n,ot}function nt(){if(Ve===null){var n=Te.alternate;n=n!==null?n.memoizedState:null}else n=Ve.next;var r=ot===null?Te.memoizedState:ot.next;if(r!==null)ot=r,Ve=n;else{if(n===null)throw Te.alternate===null?Error(i(467)):Error(i(310));Ve=n,n={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ot===null?Te.memoizedState=ot=n:ot=ot.next=n}return ot}function Vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(n){var r=es;return es+=1,Ya===null&&(Ya=[]),n=fm(Ya,n,r),r=Te,(ot===null?r.memoizedState:ot.next)===null&&(r=r.alternate,E.H=r===null||r.memoizedState===null?ag:Gu),n}function Ho(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ts(n);if(n.$$typeof===O)return wt(n)}throw Error(i(438,String(n)))}function Mu(n){var r=null,s=Te.updateQueue;if(s!==null&&(r=s.memoCache),r==null){var l=Te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(r={data:l.data.map(function(f){return f.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),s===null&&(s=Vo(),Te.updateQueue=s),s.memoCache=r,s=r.data[r.index],s===void 0)for(s=r.data[r.index]=Array(n),l=0;l<n;l++)s[l]=re;return r.index++,s}function Jn(n,r){return typeof r=="function"?r(n):r}function $o(n){var r=nt();return zu(r,Ve,n)}function zu(n,r,s){var l=n.queue;if(l===null)throw Error(i(311));l.lastRenderedReducer=s;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}r.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{r=f.next;var k=b=null,A=null,U=r,H=!1;do{var Y=U.lane&-536870913;if(Y!==U.lane?(Re&Y)===Y:(Wn&Y)===Y){var B=U.revertLane;if(B===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),Y===$a&&(H=!0);else if((Wn&B)===B){U=U.next,B===$a&&(H=!0);continue}else Y={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(k=A=Y,b=m):A=A.next=Y,Te.lanes|=B,Cr|=B;Y=U.action,oa&&s(m,Y),m=U.hasEagerState?U.eagerState:s(m,Y)}else B={lane:Y,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(k=A=B,b=m):A=A.next=B,Te.lanes|=Y,Cr|=Y;U=U.next}while(U!==null&&U!==r);if(A===null?b=m:A.next=k,!Gt(m,n.memoizedState)&&(lt=!0,H&&(s=Ia,s!==null)))throw s;n.memoizedState=m,n.baseState=b,n.baseQueue=A,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Uu(n){var r=nt(),s=r.queue;if(s===null)throw Error(i(311));s.lastRenderedReducer=n;var l=s.dispatch,f=s.pending,m=r.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do m=n(m,b.action),b=b.next;while(b!==f);Gt(m,r.memoizedState)||(lt=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),s.lastRenderedState=m}return[m,l]}function km(n,r,s){var l=Te,f=nt(),m=De;if(m){if(s===void 0)throw Error(i(407));s=s()}else s=r();var b=!Gt((Ve||f).memoizedState,s);if(b&&(f.memoizedState=s,lt=!0),f=f.queue,Vu(Em.bind(null,l,f,n),[n]),f.getSnapshot!==r||b||ot!==null&&ot.memoizedState.tag&1){if(l.flags|=2048,Xa(9,{destroy:void 0},Tm.bind(null,l,f,s,r),null),Ie===null)throw Error(i(349));m||(Wn&127)!==0||_m(l,r,s)}return s}function _m(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Te.updateQueue,r===null?(r=Vo(),Te.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function Tm(n,r,s,l){r.value=s,r.getSnapshot=l,Cm(r)&&Am(n)}function Em(n,r,s){return s(function(){Cm(r)&&Am(n)})}function Cm(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!Gt(n,s)}catch{return!0}}function Am(n){var r=Qr(n,2);r!==null&&Vt(r,n,2)}function Bu(n){var r=Ct();if(typeof n=="function"){var s=n;if(n=s(),oa){pr(!0);try{s()}finally{pr(!1)}}}return r.memoizedState=r.baseState=n,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:n},r}function Nm(n,r,s,l){return n.baseState=s,zu(n,Ve,typeof l=="function"?l:Jn)}function T2(n,r,s,l,f){if(Fo(n))throw Error(i(485));if(n=r.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};E.T!==null?s(!0):m.isTransition=!1,l(m),s=r.pending,s===null?(m.next=r.pending=m,Rm(r,m)):(m.next=s.next,r.pending=s.next=m)}}function Rm(n,r){var s=r.action,l=r.payload,f=n.state;if(r.isTransition){var m=E.T,b={};E.T=b;try{var k=s(f,l),A=E.S;A!==null&&A(b,k),Om(n,r,k)}catch(U){Pu(n,r,U)}finally{m!==null&&b.types!==null&&(m.types=b.types),E.T=m}}else try{m=s(f,l),Om(n,r,m)}catch(U){Pu(n,r,U)}}function Om(n,r,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Dm(n,r,l)},function(l){return Pu(n,r,l)}):Dm(n,r,s)}function Dm(n,r,s){r.status="fulfilled",r.value=s,Lm(r),n.state=s,r=n.pending,r!==null&&(s=r.next,s===r?n.pending=null:(s=s.next,r.next=s,Rm(n,s)))}function Pu(n,r,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do r.status="rejected",r.reason=s,Lm(r),r=r.next;while(r!==l)}n.action=null}function Lm(n){n=n.listeners;for(var r=0;r<n.length;r++)(0,n[r])()}function Mm(n,r){return r}function zm(n,r){if(De){var s=Ie.formState;if(s!==null){e:{var l=Te;if(De){if(Ke){t:{for(var f=Ke,m=dn;f.nodeType!==8;){if(!m){f=null;break t}if(f=fn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ke=fn(f.nextSibling),l=f.data==="F!";break e}}br(l)}l=!1}l&&(r=s[0])}}return s=Ct(),s.memoizedState=s.baseState=r,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:r},s.queue=l,s=tg.bind(null,Te,l),l.dispatch=s,l=Bu(!1),m=Fu.bind(null,Te,!1,l.queue),l=Ct(),f={state:r,dispatch:null,action:n,pending:null},l.queue=f,s=T2.bind(null,Te,f,m,s),f.dispatch=s,l.memoizedState=n,[r,s,!1]}function Um(n){var r=nt();return Bm(r,Ve,n)}function Bm(n,r,s){if(r=zu(n,r,Mm)[0],n=$o(Jn)[0],typeof r=="object"&&r!==null&&typeof r.then=="function")try{var l=ts(r)}catch(b){throw b===qa?Oo:b}else l=r;r=nt();var f=r.queue,m=f.dispatch;return s!==r.memoizedState&&(Te.flags|=2048,Xa(9,{destroy:void 0},E2.bind(null,f,s),null)),[l,m,n]}function E2(n,r){n.action=r}function Pm(n){var r=nt(),s=Ve;if(s!==null)return Bm(r,s,n);nt(),r=r.memoizedState,s=nt();var l=s.queue.dispatch;return s.memoizedState=n,[r,l,!1]}function Xa(n,r,s,l){return n={tag:n,create:s,deps:l,inst:r,next:null},r=Te.updateQueue,r===null&&(r=Vo(),Te.updateQueue=r),s=r.lastEffect,s===null?r.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,r.lastEffect=n),n}function Vm(){return nt().memoizedState}function Io(n,r,s,l){var f=Ct();Te.flags|=n,f.memoizedState=Xa(1|r,{destroy:void 0},s,l===void 0?null:l)}function qo(n,r,s,l){var f=nt();l=l===void 0?null:l;var m=f.memoizedState.inst;Ve!==null&&l!==null&&Nu(l,Ve.memoizedState.deps)?f.memoizedState=Xa(r,m,s,l):(Te.flags|=n,f.memoizedState=Xa(1|r,m,s,l))}function Hm(n,r){Io(8390656,8,n,r)}function Vu(n,r){qo(2048,8,n,r)}function C2(n){Te.flags|=4;var r=Te.updateQueue;if(r===null)r=Vo(),Te.updateQueue=r,r.events=[n];else{var s=r.events;s===null?r.events=[n]:s.push(n)}}function $m(n){var r=nt().memoizedState;return C2({ref:r,nextImpl:n}),function(){if((Ue&2)!==0)throw Error(i(440));return r.impl.apply(void 0,arguments)}}function Im(n,r){return qo(4,2,n,r)}function qm(n,r){return qo(4,4,n,r)}function Fm(n,r){if(typeof r=="function"){n=n();var s=r(n);return function(){typeof s=="function"?s():r(null)}}if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Gm(n,r,s){s=s!=null?s.concat([n]):null,qo(4,4,Fm.bind(null,r,n),s)}function Hu(){}function Km(n,r){var s=nt();r=r===void 0?null:r;var l=s.memoizedState;return r!==null&&Nu(r,l[1])?l[0]:(s.memoizedState=[n,r],n)}function Ym(n,r){var s=nt();r=r===void 0?null:r;var l=s.memoizedState;if(r!==null&&Nu(r,l[1]))return l[0];if(l=n(),oa){pr(!0);try{n()}finally{pr(!1)}}return s.memoizedState=[l,r],l}function $u(n,r,s){return s===void 0||(Wn&1073741824)!==0&&(Re&261930)===0?n.memoizedState=r:(n.memoizedState=s,n=Xg(),Te.lanes|=n,Cr|=n,s)}function Xm(n,r,s,l){return Gt(s,r)?s:Ga.current!==null?(n=$u(n,s,l),Gt(n,r)||(lt=!0),n):(Wn&42)===0||(Wn&1073741824)!==0&&(Re&261930)===0?(lt=!0,n.memoizedState=s):(n=Xg(),Te.lanes|=n,Cr|=n,r)}function Wm(n,r,s,l,f){var m=$.p;$.p=m!==0&&8>m?m:8;var b=E.T,k={};E.T=k,Fu(n,!1,r,s);try{var A=f(),U=E.S;if(U!==null&&U(k,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var H=j2(A,l);ns(n,r,H,Qt(n))}else ns(n,r,l,Qt(n))}catch(Y){ns(n,r,{then:function(){},status:"rejected",reason:Y},Qt())}finally{$.p=m,b!==null&&k.types!==null&&(b.types=k.types),E.T=b}}function A2(){}function Iu(n,r,s,l){if(n.tag!==5)throw Error(i(476));var f=Jm(n).queue;Wm(n,f,r,ee,s===null?A2:function(){return Qm(n),s(l)})}function Jm(n){var r=n.memoizedState;if(r!==null)return r;r={memoizedState:ee,baseState:ee,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:ee},next:null};var s={};return r.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:s},next:null},n.memoizedState=r,n=n.alternate,n!==null&&(n.memoizedState=r),r}function Qm(n){var r=Jm(n);r.next===null&&(r=n.alternate.memoizedState),ns(n,r.next.queue,{},Qt())}function qu(){return wt(bs)}function Zm(){return nt().memoizedState}function eg(){return nt().memoizedState}function N2(n){for(var r=n.return;r!==null;){switch(r.tag){case 24:case 3:var s=Qt();n=Sr(s);var l=jr(r,n,s);l!==null&&(Vt(l,r,s),Ji(l,r,s)),r={cache:bu()},n.payload=r;return}r=r.return}}function R2(n,r,s){var l=Qt();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fo(n)?ng(r,s):(s=lu(n,r,s,l),s!==null&&(Vt(s,n,l),rg(s,r,l)))}function tg(n,r,s){var l=Qt();ns(n,r,s,l)}function ns(n,r,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Fo(n))ng(r,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var b=r.lastRenderedState,k=m(b,s);if(f.hasEagerState=!0,f.eagerState=k,Gt(k,b))return _o(n,r,f,0),Ie===null&&ko(),!1}catch{}finally{}if(s=lu(n,r,f,l),s!==null)return Vt(s,n,l),rg(s,r,l),!0}return!1}function Fu(n,r,s,l){if(l={lane:2,revertLane:jd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Fo(n)){if(r)throw Error(i(479))}else r=lu(n,s,l,2),r!==null&&Vt(r,n,2)}function Fo(n){var r=n.alternate;return n===Te||r!==null&&r===Te}function ng(n,r){Ka=Bo=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function rg(n,r,s){if((s&4194048)!==0){var l=r.lanes;l&=n.pendingLanes,s|=l,r.lanes=s,lp(n,s)}}var rs={readContext:wt,use:Ho,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};rs.useEffectEvent=Je;var ag={readContext:wt,use:Ho,useCallback:function(n,r){return Ct().memoizedState=[n,r===void 0?null:r],n},useContext:wt,useEffect:Hm,useImperativeHandle:function(n,r,s){s=s!=null?s.concat([n]):null,Io(4194308,4,Fm.bind(null,r,n),s)},useLayoutEffect:function(n,r){return Io(4194308,4,n,r)},useInsertionEffect:function(n,r){Io(4,2,n,r)},useMemo:function(n,r){var s=Ct();r=r===void 0?null:r;var l=n();if(oa){pr(!0);try{n()}finally{pr(!1)}}return s.memoizedState=[l,r],l},useReducer:function(n,r,s){var l=Ct();if(s!==void 0){var f=s(r);if(oa){pr(!0);try{s(r)}finally{pr(!1)}}}else f=r;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=R2.bind(null,Te,n),[l.memoizedState,n]},useRef:function(n){var r=Ct();return n={current:n},r.memoizedState=n},useState:function(n){n=Bu(n);var r=n.queue,s=tg.bind(null,Te,r);return r.dispatch=s,[n.memoizedState,s]},useDebugValue:Hu,useDeferredValue:function(n,r){var s=Ct();return $u(s,n,r)},useTransition:function(){var n=Bu(!1);return n=Wm.bind(null,Te,n.queue,!0,!1),Ct().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,r,s){var l=Te,f=Ct();if(De){if(s===void 0)throw Error(i(407));s=s()}else{if(s=r(),Ie===null)throw Error(i(349));(Re&127)!==0||_m(l,r,s)}f.memoizedState=s;var m={value:s,getSnapshot:r};return f.queue=m,Hm(Em.bind(null,l,m,n),[n]),l.flags|=2048,Xa(9,{destroy:void 0},Tm.bind(null,l,m,s,r),null),s},useId:function(){var n=Ct(),r=Ie.identifierPrefix;if(De){var s=On,l=Rn;s=(l&~(1<<32-Ft(l)-1)).toString(32)+s,r="_"+r+"R_"+s,s=Po++,0<s&&(r+="H"+s.toString(32)),r+="_"}else s=k2++,r="_"+r+"r_"+s.toString(32)+"_";return n.memoizedState=r},useHostTransitionStatus:qu,useFormState:zm,useActionState:zm,useOptimistic:function(n){var r=Ct();r.memoizedState=r.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=s,r=Fu.bind(null,Te,!0,s),s.dispatch=r,[n,r]},useMemoCache:Mu,useCacheRefresh:function(){return Ct().memoizedState=N2.bind(null,Te)},useEffectEvent:function(n){var r=Ct(),s={impl:n};return r.memoizedState=s,function(){if((Ue&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}},Gu={readContext:wt,use:Ho,useCallback:Km,useContext:wt,useEffect:Vu,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:qm,useMemo:Ym,useReducer:$o,useRef:Vm,useState:function(){return $o(Jn)},useDebugValue:Hu,useDeferredValue:function(n,r){var s=nt();return Xm(s,Ve.memoizedState,n,r)},useTransition:function(){var n=$o(Jn)[0],r=nt().memoizedState;return[typeof n=="boolean"?n:ts(n),r]},useSyncExternalStore:km,useId:Zm,useHostTransitionStatus:qu,useFormState:Um,useActionState:Um,useOptimistic:function(n,r){var s=nt();return Nm(s,Ve,n,r)},useMemoCache:Mu,useCacheRefresh:eg};Gu.useEffectEvent=$m;var ig={readContext:wt,use:Ho,useCallback:Km,useContext:wt,useEffect:Vu,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:qm,useMemo:Ym,useReducer:Uu,useRef:Vm,useState:function(){return Uu(Jn)},useDebugValue:Hu,useDeferredValue:function(n,r){var s=nt();return Ve===null?$u(s,n,r):Xm(s,Ve.memoizedState,n,r)},useTransition:function(){var n=Uu(Jn)[0],r=nt().memoizedState;return[typeof n=="boolean"?n:ts(n),r]},useSyncExternalStore:km,useId:Zm,useHostTransitionStatus:qu,useFormState:Pm,useActionState:Pm,useOptimistic:function(n,r){var s=nt();return Ve!==null?Nm(s,Ve,n,r):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:eg};ig.useEffectEvent=$m;function Ku(n,r,s,l){r=n.memoizedState,s=s(l,r),s=s==null?r:v({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Yu={enqueueSetState:function(n,r,s){n=n._reactInternals;var l=Qt(),f=Sr(l);f.payload=r,s!=null&&(f.callback=s),r=jr(n,f,l),r!==null&&(Vt(r,n,l),Ji(r,n,l))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var l=Qt(),f=Sr(l);f.tag=1,f.payload=r,s!=null&&(f.callback=s),r=jr(n,f,l),r!==null&&(Vt(r,n,l),Ji(r,n,l))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=Qt(),l=Sr(s);l.tag=2,r!=null&&(l.callback=r),r=jr(n,l,s),r!==null&&(Vt(r,n,s),Ji(r,n,s))}};function sg(n,r,s,l,f,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,b):r.prototype&&r.prototype.isPureReactComponent?!Ii(s,l)||!Ii(f,m):!0}function og(n,r,s,l){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,l),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,l),r.state!==n&&Yu.enqueueReplaceState(r,r.state,null)}function la(n,r){var s=r;if("ref"in r){s={};for(var l in r)l!=="ref"&&(s[l]=r[l])}if(n=n.defaultProps){s===r&&(s=v({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}function lg(n){jo(n)}function cg(n){console.error(n)}function ug(n){jo(n)}function Go(n,r){try{var s=n.onUncaughtError;s(r.value,{componentStack:r.stack})}catch(l){setTimeout(function(){throw l})}}function dg(n,r,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Xu(n,r,s){return s=Sr(s),s.tag=3,s.payload={element:null},s.callback=function(){Go(n,r)},s}function hg(n){return n=Sr(n),n.tag=3,n}function fg(n,r,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){dg(r,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){dg(r,s,l),typeof f!="function"&&(Ar===null?Ar=new Set([this]):Ar.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})})}function O2(n,r,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(r=s.alternate,r!==null&&Ha(r,s,f,!0),s=Yt.current,s!==null){switch(s.tag){case 31:case 13:return hn===null?al():s.alternate===null&&Qe===0&&(Qe=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Do?s.flags|=16384:(r=s.updateQueue,r===null?s.updateQueue=new Set([l]):r.add(l),xd(n,l,f)),!1;case 22:return s.flags|=65536,l===Do?s.flags|=16384:(r=s.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=r):(s=r.retryQueue,s===null?r.retryQueue=new Set([l]):s.add(l)),xd(n,l,f)),!1}throw Error(i(435,s.tag))}return xd(n,l,f),al(),!1}if(De)return r=Yt.current,r!==null?((r.flags&65536)===0&&(r.flags|=256),r.flags|=65536,r.lanes=f,l!==pu&&(n=Error(i(422),{cause:l}),Gi(ln(n,s)))):(l!==pu&&(r=Error(i(423),{cause:l}),Gi(ln(r,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=ln(l,s),f=Xu(n.stateNode,l,f),_u(n,f),Qe!==4&&(Qe=2)),!1;var m=Error(i(520),{cause:l});if(m=ln(m,s),ds===null?ds=[m]:ds.push(m),Qe!==4&&(Qe=2),r===null)return!0;l=ln(l,s),s=r;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=Xu(s.stateNode,l,n),_u(s,n),!1;case 1:if(r=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ar===null||!Ar.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=hg(f),fg(f,n,s,l),_u(s,f),!1}s=s.return}while(s!==null);return!1}var Wu=Error(i(461)),lt=!1;function St(n,r,s,l){r.child=n===null?ym(r,null,s,l):sa(r,n.child,s,l)}function pg(n,r,s,l,f){s=s.render;var m=r.ref;if("ref"in l){var b={};for(var k in l)k!=="ref"&&(b[k]=l[k])}else b=l;return na(r),l=Ru(n,r,s,b,m,f),k=Ou(),n!==null&&!lt?(Du(n,r,f),Qn(n,r,f)):(De&&k&&hu(r),r.flags|=1,St(n,r,l,f),r.child)}function mg(n,r,s,l,f){if(n===null){var m=s.type;return typeof m=="function"&&!cu(m)&&m.defaultProps===void 0&&s.compare===null?(r.tag=15,r.type=m,gg(n,r,m,l,f)):(n=Eo(s.type,null,l,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(m=n.child,!ad(n,f)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ii,s(b,l)&&n.ref===r.ref)return Qn(n,r,f)}return r.flags|=1,n=Gn(m,l),n.ref=r.ref,n.return=r,r.child=n}function gg(n,r,s,l,f){if(n!==null){var m=n.memoizedProps;if(Ii(m,l)&&n.ref===r.ref)if(lt=!1,r.pendingProps=l=m,ad(n,f))(n.flags&131072)!==0&&(lt=!0);else return r.lanes=n.lanes,Qn(n,r,f)}return Ju(n,r,s,l,f)}function yg(n,r,s,l){var f=l.children,m=n!==null?n.memoizedState:null;if(n===null&&r.stateNode===null&&(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((r.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,n!==null){for(l=r.child=n.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,r.child=null;return vg(n,r,m,s,l)}if((s&536870912)!==0)r.memoizedState={baseLanes:0,cachePool:null},n!==null&&Ro(r,m!==null?m.cachePool:null),m!==null?xm(r,m):Eu(),wm(r);else return l=r.lanes=536870912,vg(n,r,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(Ro(r,m.cachePool),xm(r,m),_r(),r.memoizedState=null):(n!==null&&Ro(r,null),Eu(),_r());return St(n,r,f,s),r.child}function as(n,r){return n!==null&&n.tag===22||r.stateNode!==null||(r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.sibling}function vg(n,r,s,l,f){var m=wu();return m=m===null?null:{parent:st._currentValue,pool:m},r.memoizedState={baseLanes:s,cachePool:m},n!==null&&Ro(r,null),Eu(),wm(r),n!==null&&Ha(n,r,l,!0),r.childLanes=f,null}function Ko(n,r){return r=Xo({mode:r.mode,children:r.children},n.mode),r.ref=n.ref,n.child=r,r.return=n,r}function bg(n,r,s){return sa(r,n.child,null,s),n=Ko(r,r.pendingProps),n.flags|=2,Xt(r),r.memoizedState=null,n}function D2(n,r,s){var l=r.pendingProps,f=(r.flags&128)!==0;if(r.flags&=-129,n===null){if(De){if(l.mode==="hidden")return n=Ko(r,l),r.lanes=536870912,as(null,n);if(Au(r),(n=Ke)?(n=R0(n,dn),n=n!==null&&n.data==="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:yr!==null?{id:Rn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},s=nm(n),s.return=r,r.child=s,xt=r,Ke=null)):n=null,n===null)throw br(r);return r.lanes=536870912,null}return Ko(r,l)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(Au(r),f)if(r.flags&256)r.flags&=-257,r=bg(n,r,s);else if(r.memoizedState!==null)r.child=n.child,r.flags|=128,r=null;else throw Error(i(558));else if(lt||Ha(n,r,s,!1),f=(s&n.childLanes)!==0,lt||f){if(l=Ie,l!==null&&(b=cp(l,s),b!==0&&b!==m.retryLane))throw m.retryLane=b,Qr(n,b),Vt(l,n,b),Wu;al(),r=bg(n,r,s)}else n=m.treeContext,Ke=fn(b.nextSibling),xt=r,De=!0,vr=null,dn=!1,n!==null&&im(r,n),r=Ko(r,l),r.flags|=4096;return r}return n=Gn(n.child,{mode:l.mode,children:l.children}),n.ref=r.ref,r.child=n,n.return=r,n}function Yo(n,r){var s=r.ref;if(s===null)n!==null&&n.ref!==null&&(r.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(i(284));(n===null||n.ref!==s)&&(r.flags|=4194816)}}function Ju(n,r,s,l,f){return na(r),s=Ru(n,r,s,l,void 0,f),l=Ou(),n!==null&&!lt?(Du(n,r,f),Qn(n,r,f)):(De&&l&&hu(r),r.flags|=1,St(n,r,s,f),r.child)}function xg(n,r,s,l,f,m){return na(r),r.updateQueue=null,s=jm(r,l,s,f),Sm(n),l=Ou(),n!==null&&!lt?(Du(n,r,m),Qn(n,r,m)):(De&&l&&hu(r),r.flags|=1,St(n,r,s,m),r.child)}function wg(n,r,s,l,f){if(na(r),r.stateNode===null){var m=Ua,b=s.contextType;typeof b=="object"&&b!==null&&(m=wt(b)),m=new s(l,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Yu,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=l,m.state=r.memoizedState,m.refs={},ju(r),b=s.contextType,m.context=typeof b=="object"&&b!==null?wt(b):Ua,m.state=r.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Ku(r,s,b,l),m.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Yu.enqueueReplaceState(m,m.state,null),Zi(r,l,m,f),Qi(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!0}else if(n===null){m=r.stateNode;var k=r.memoizedProps,A=la(s,k);m.props=A;var U=m.context,H=s.contextType;b=Ua,typeof H=="object"&&H!==null&&(b=wt(H));var Y=s.getDerivedStateFromProps;H=typeof Y=="function"||typeof m.getSnapshotBeforeUpdate=="function",k=r.pendingProps!==k,H||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(k||U!==b)&&og(r,m,l,b),wr=!1;var B=r.memoizedState;m.state=B,Zi(r,l,m,f),Qi(),U=r.memoizedState,k||B!==U||wr?(typeof Y=="function"&&(Ku(r,s,Y,l),U=r.memoizedState),(A=wr||sg(r,s,A,l,B,U,b))?(H||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=l,r.memoizedState=U),m.props=l,m.state=U,m.context=b,l=A):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),l=!1)}else{m=r.stateNode,ku(n,r),b=r.memoizedProps,H=la(s,b),m.props=H,Y=r.pendingProps,B=m.context,U=s.contextType,A=Ua,typeof U=="object"&&U!==null&&(A=wt(U)),k=s.getDerivedStateFromProps,(U=typeof k=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==Y||B!==A)&&og(r,m,l,A),wr=!1,B=r.memoizedState,m.state=B,Zi(r,l,m,f),Qi();var V=r.memoizedState;b!==Y||B!==V||wr||n!==null&&n.dependencies!==null&&Ao(n.dependencies)?(typeof k=="function"&&(Ku(r,s,k,l),V=r.memoizedState),(H=wr||sg(r,s,H,l,B,V,A)||n!==null&&n.dependencies!==null&&Ao(n.dependencies))?(U||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,V,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,V,A)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),r.memoizedProps=l,r.memoizedState=V),m.props=l,m.state=V,m.context=A,l=H):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(r.flags|=1024),l=!1)}return m=l,Yo(n,r),l=(r.flags&128)!==0,m||l?(m=r.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,n!==null&&l?(r.child=sa(r,n.child,null,f),r.child=sa(r,null,s,f)):St(n,r,s,f),r.memoizedState=m.state,n=r.child):n=Qn(n,r,f),n}function Sg(n,r,s,l){return ea(),r.flags|=256,St(n,r,s,l),r.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(n){return{baseLanes:n,cachePool:dm()}}function ed(n,r,s){return n=n!==null?n.childLanes&~s:0,r&&(n|=Jt),n}function jg(n,r,s){var l=r.pendingProps,f=!1,m=(r.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(tt.current&2)!==0),b&&(f=!0,r.flags&=-129),b=(r.flags&32)!==0,r.flags&=-33,n===null){if(De){if(f?kr(r):_r(),(n=Ke)?(n=R0(n,dn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(r.memoizedState={dehydrated:n,treeContext:yr!==null?{id:Rn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},s=nm(n),s.return=r,r.child=s,xt=r,Ke=null)):n=null,n===null)throw br(r);return zd(n)?r.lanes=32:r.lanes=536870912,null}var k=l.children;return l=l.fallback,f?(_r(),f=r.mode,k=Xo({mode:"hidden",children:k},f),l=Zr(l,f,s,null),k.return=r,l.return=r,k.sibling=l,r.child=k,l=r.child,l.memoizedState=Zu(s),l.childLanes=ed(n,b,s),r.memoizedState=Qu,as(null,l)):(kr(r),td(r,k))}var A=n.memoizedState;if(A!==null&&(k=A.dehydrated,k!==null)){if(m)r.flags&256?(kr(r),r.flags&=-257,r=nd(n,r,s)):r.memoizedState!==null?(_r(),r.child=n.child,r.flags|=128,r=null):(_r(),k=l.fallback,f=r.mode,l=Xo({mode:"visible",children:l.children},f),k=Zr(k,f,s,null),k.flags|=2,l.return=r,k.return=r,l.sibling=k,r.child=l,sa(r,n.child,null,s),l=r.child,l.memoizedState=Zu(s),l.childLanes=ed(n,b,s),r.memoizedState=Qu,r=as(null,l));else if(kr(r),zd(k)){if(b=k.nextSibling&&k.nextSibling.dataset,b)var U=b.dgst;b=U,l=Error(i(419)),l.stack="",l.digest=b,Gi({value:l,source:null,stack:null}),r=nd(n,r,s)}else if(lt||Ha(n,r,s,!1),b=(s&n.childLanes)!==0,lt||b){if(b=Ie,b!==null&&(l=cp(b,s),l!==0&&l!==A.retryLane))throw A.retryLane=l,Qr(n,l),Vt(b,n,l),Wu;Md(k)||al(),r=nd(n,r,s)}else Md(k)?(r.flags|=192,r.child=n.child,r=null):(n=A.treeContext,Ke=fn(k.nextSibling),xt=r,De=!0,vr=null,dn=!1,n!==null&&im(r,n),r=td(r,l.children),r.flags|=4096);return r}return f?(_r(),k=l.fallback,f=r.mode,A=n.child,U=A.sibling,l=Gn(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&65011712,U!==null?k=Gn(U,k):(k=Zr(k,f,s,null),k.flags|=2),k.return=r,l.return=r,l.sibling=k,r.child=l,as(null,l),l=r.child,k=n.child.memoizedState,k===null?k=Zu(s):(f=k.cachePool,f!==null?(A=st._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=dm(),k={baseLanes:k.baseLanes|s,cachePool:f}),l.memoizedState=k,l.childLanes=ed(n,b,s),r.memoizedState=Qu,as(n.child,l)):(kr(r),s=n.child,n=s.sibling,s=Gn(s,{mode:"visible",children:l.children}),s.return=r,s.sibling=null,n!==null&&(b=r.deletions,b===null?(r.deletions=[n],r.flags|=16):b.push(n)),r.child=s,r.memoizedState=null,s)}function td(n,r){return r=Xo({mode:"visible",children:r},n.mode),r.return=n,n.child=r}function Xo(n,r){return n=Kt(22,n,null,r),n.lanes=0,n}function nd(n,r,s){return sa(r,n.child,null,s),n=td(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function kg(n,r,s){n.lanes|=r;var l=n.alternate;l!==null&&(l.lanes|=r),yu(n.return,r,s)}function rd(n,r,s,l,f,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(b.isBackwards=r,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=m)}function _g(n,r,s){var l=r.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var b=tt.current,k=(b&2)!==0;if(k?(b=b&1|2,r.flags|=128):b&=1,J(tt,b),St(n,r,l,s),l=De?Fi:0,!k&&n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kg(n,s,r);else if(n.tag===19)kg(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(s=r.child,f=null;s!==null;)n=s.alternate,n!==null&&Uo(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),rd(r,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&Uo(n)===null){r.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}rd(r,!0,s,null,m,l);break;case"together":rd(r,!1,null,null,void 0,l);break;default:r.memoizedState=null}return r.child}function Qn(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),Cr|=r.lanes,(s&r.childLanes)===0)if(n!==null){if(Ha(n,r,s,!1),(s&r.childLanes)===0)return null}else return null;if(n!==null&&r.child!==n.child)throw Error(i(153));if(r.child!==null){for(n=r.child,s=Gn(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=Gn(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function ad(n,r){return(n.lanes&r)!==0?!0:(n=n.dependencies,!!(n!==null&&Ao(n)))}function L2(n,r,s){switch(r.tag){case 3:ge(r,r.stateNode.containerInfo),xr(r,st,n.memoizedState.cache),ea();break;case 27:case 5:L(r);break;case 4:ge(r,r.stateNode.containerInfo);break;case 10:xr(r,r.type,r.memoizedProps.value);break;case 31:if(r.memoizedState!==null)return r.flags|=128,Au(r),null;break;case 13:var l=r.memoizedState;if(l!==null)return l.dehydrated!==null?(kr(r),r.flags|=128,null):(s&r.child.childLanes)!==0?jg(n,r,s):(kr(r),n=Qn(n,r,s),n!==null?n.sibling:null);kr(r);break;case 19:var f=(n.flags&128)!==0;if(l=(s&r.childLanes)!==0,l||(Ha(n,r,s,!1),l=(s&r.childLanes)!==0),f){if(l)return _g(n,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),J(tt,tt.current),l)break;return null;case 22:return r.lanes=0,yg(n,r,s,r.pendingProps);case 24:xr(r,st,n.memoizedState.cache)}return Qn(n,r,s)}function Tg(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps)lt=!0;else{if(!ad(n,s)&&(r.flags&128)===0)return lt=!1,L2(n,r,s);lt=(n.flags&131072)!==0}else lt=!1,De&&(r.flags&1048576)!==0&&am(r,Fi,r.index);switch(r.lanes=0,r.tag){case 16:e:{var l=r.pendingProps;if(n=aa(r.elementType),r.type=n,typeof n=="function")cu(n)?(l=la(n,l),r.tag=1,r=wg(null,r,n,l,s)):(r.tag=0,r=Ju(null,r,n,l,s));else{if(n!=null){var f=n.$$typeof;if(f===P){r.tag=11,r=pg(null,r,n,l,s);break e}else if(f===G){r.tag=14,r=mg(null,r,n,l,s);break e}}throw r=Le(n)||n,Error(i(306,r,""))}}return r;case 0:return Ju(n,r,r.type,r.pendingProps,s);case 1:return l=r.type,f=la(l,r.pendingProps),wg(n,r,l,f,s);case 3:e:{if(ge(r,r.stateNode.containerInfo),n===null)throw Error(i(387));l=r.pendingProps;var m=r.memoizedState;f=m.element,ku(n,r),Zi(r,l,null,s);var b=r.memoizedState;if(l=b.cache,xr(r,st,l),l!==m.cache&&vu(r,[st],s,!0),Qi(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},r.updateQueue.baseState=m,r.memoizedState=m,r.flags&256){r=Sg(n,r,l,s);break e}else if(l!==f){f=ln(Error(i(424)),r),Gi(f),r=Sg(n,r,l,s);break e}else{switch(n=r.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ke=fn(n.firstChild),xt=r,De=!0,vr=null,dn=!0,s=ym(r,null,l,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ea(),l===f){r=Qn(n,r,s);break e}St(n,r,l,s)}r=r.child}return r;case 26:return Yo(n,r),n===null?(s=U0(r.type,null,r.pendingProps,null))?r.memoizedState=s:De||(s=r.type,n=r.pendingProps,l=dl(je.current).createElement(s),l[bt]=r,l[Lt]=n,jt(l,s,n),gt(l),r.stateNode=l):r.memoizedState=U0(r.type,n.memoizedProps,r.pendingProps,n.memoizedState),null;case 27:return L(r),n===null&&De&&(l=r.stateNode=L0(r.type,r.pendingProps,je.current),xt=r,dn=!0,f=Ke,Dr(r.type)?(Ud=f,Ke=fn(l.firstChild)):Ke=f),St(n,r,r.pendingProps.children,s),Yo(n,r),n===null&&(r.flags|=4194304),r.child;case 5:return n===null&&De&&((f=l=Ke)&&(l=u5(l,r.type,r.pendingProps,dn),l!==null?(r.stateNode=l,xt=r,Ke=fn(l.firstChild),dn=!1,f=!0):f=!1),f||br(r)),L(r),f=r.type,m=r.pendingProps,b=n!==null?n.memoizedProps:null,l=m.children,Od(f,m)?l=null:b!==null&&Od(f,b)&&(r.flags|=32),r.memoizedState!==null&&(f=Ru(n,r,_2,null,null,s),bs._currentValue=f),Yo(n,r),St(n,r,l,s),r.child;case 6:return n===null&&De&&((n=s=Ke)&&(s=d5(s,r.pendingProps,dn),s!==null?(r.stateNode=s,xt=r,Ke=null,n=!0):n=!1),n||br(r)),null;case 13:return jg(n,r,s);case 4:return ge(r,r.stateNode.containerInfo),l=r.pendingProps,n===null?r.child=sa(r,null,l,s):St(n,r,l,s),r.child;case 11:return pg(n,r,r.type,r.pendingProps,s);case 7:return St(n,r,r.pendingProps,s),r.child;case 8:return St(n,r,r.pendingProps.children,s),r.child;case 12:return St(n,r,r.pendingProps.children,s),r.child;case 10:return l=r.pendingProps,xr(r,r.type,l.value),St(n,r,l.children,s),r.child;case 9:return f=r.type._context,l=r.pendingProps.children,na(r),f=wt(f),l=l(f),r.flags|=1,St(n,r,l,s),r.child;case 14:return mg(n,r,r.type,r.pendingProps,s);case 15:return gg(n,r,r.type,r.pendingProps,s);case 19:return _g(n,r,s);case 31:return D2(n,r,s);case 22:return yg(n,r,s,r.pendingProps);case 24:return na(r),l=wt(st),n===null?(f=wu(),f===null&&(f=Ie,m=bu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),r.memoizedState={parent:l,cache:f},ju(r),xr(r,st,f)):((n.lanes&s)!==0&&(ku(n,r),Zi(r,null,null,s),Qi()),f=n.memoizedState,m=r.memoizedState,f.parent!==l?(f={parent:l,cache:l},r.memoizedState=f,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=f),xr(r,st,l)):(l=m.cache,xr(r,st,l),l!==f.cache&&vu(r,[st],s,!0))),St(n,r,r.pendingProps.children,s),r.child;case 29:throw r.pendingProps}throw Error(i(156,r.tag))}function Zn(n){n.flags|=4}function id(n,r,s,l,f){if((r=(n.mode&32)!==0)&&(r=!1),r){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(Zg())n.flags|=8192;else throw ia=Do,Su}else n.flags&=-16777217}function Eg(n,r){if(r.type!=="stylesheet"||(r.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!$0(r))if(Zg())n.flags|=8192;else throw ia=Do,Su}function Wo(n,r){r!==null&&(n.flags|=4),n.flags&16384&&(r=n.tag!==22?sp():536870912,n.lanes|=r,Za|=r)}function is(n,r){if(!De)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Ye(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(r)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=s,r}function M2(n,r,s){var l=r.pendingProps;switch(fu(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(r),null;case 1:return Ye(r),null;case 3:return s=r.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),r.memoizedState.cache!==l&&(r.flags|=2048),Xn(st),he(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Va(r)?Zn(r):n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,mu())),Ye(r),null;case 26:var f=r.type,m=r.memoizedState;return n===null?(Zn(r),m!==null?(Ye(r),Eg(r,m)):(Ye(r),id(r,f,null,l,s))):m?m!==n.memoizedState?(Zn(r),Ye(r),Eg(r,m)):(Ye(r),r.flags&=-16777217):(n=n.memoizedProps,n!==l&&Zn(r),Ye(r),id(r,f,n,l,s)),null;case 27:if(K(r),s=je.current,f=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&Zn(r);else{if(!l){if(r.stateNode===null)throw Error(i(166));return Ye(r),null}n=ae.current,Va(r)?sm(r):(n=L0(f,l,s),r.stateNode=n,Zn(r))}return Ye(r),null;case 5:if(K(r),f=r.type,n!==null&&r.stateNode!=null)n.memoizedProps!==l&&Zn(r);else{if(!l){if(r.stateNode===null)throw Error(i(166));return Ye(r),null}if(m=ae.current,Va(r))sm(r);else{var b=dl(je.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}m[bt]=r,m[Lt]=l;e:for(b=r.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===r)break e;for(;b.sibling===null;){if(b.return===null||b.return===r)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}r.stateNode=m;e:switch(jt(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Zn(r)}}return Ye(r),id(r,r.type,n===null?null:n.memoizedProps,r.pendingProps,s),null;case 6:if(n&&r.stateNode!=null)n.memoizedProps!==l&&Zn(r);else{if(typeof l!="string"&&r.stateNode===null)throw Error(i(166));if(n=je.current,Va(r)){if(n=r.stateNode,s=r.memoizedProps,l=null,f=xt,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[bt]=r,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||j0(n.nodeValue,s)),n||br(r,!0)}else n=dl(n).createTextNode(l),n[bt]=r,r.stateNode=n}return Ye(r),null;case 31:if(s=r.memoizedState,n===null||n.memoizedState!==null){if(l=Va(r),s!==null){if(n===null){if(!l)throw Error(i(318));if(n=r.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[bt]=r}else ea(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ye(r),n=!1}else s=mu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return r.flags&256?(Xt(r),r):(Xt(r),null);if((r.flags&128)!==0)throw Error(i(558))}return Ye(r),null;case 13:if(l=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Va(r),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(i(318));if(f=r.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(i(317));f[bt]=r}else ea(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ye(r),f=!1}else f=mu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return r.flags&256?(Xt(r),r):(Xt(r),null)}return Xt(r),(r.flags&128)!==0?(r.lanes=s,r):(s=l!==null,n=n!==null&&n.memoizedState!==null,s&&(l=r.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==n&&s&&(r.child.flags|=8192),Wo(r,r.updateQueue),Ye(r),null);case 4:return he(),n===null&&Ed(r.stateNode.containerInfo),Ye(r),null;case 10:return Xn(r.type),Ye(r),null;case 19:if(I(tt),l=r.memoizedState,l===null)return Ye(r),null;if(f=(r.flags&128)!==0,m=l.rendering,m===null)if(f)is(l,!1);else{if(Qe!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(m=Uo(n),m!==null){for(r.flags|=128,is(l,!1),n=m.updateQueue,r.updateQueue=n,Wo(r,n),r.subtreeFlags=0,n=s,s=r.child;s!==null;)tm(s,n),s=s.sibling;return J(tt,tt.current&1|2),De&&Kn(r,l.treeForkCount),r.child}n=n.sibling}l.tail!==null&&It()>tl&&(r.flags|=128,f=!0,is(l,!1),r.lanes=4194304)}else{if(!f)if(n=Uo(m),n!==null){if(r.flags|=128,f=!0,n=n.updateQueue,r.updateQueue=n,Wo(r,n),is(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!De)return Ye(r),null}else 2*It()-l.renderingStartTime>tl&&s!==536870912&&(r.flags|=128,f=!0,is(l,!1),r.lanes=4194304);l.isBackwards?(m.sibling=r.child,r.child=m):(n=l.last,n!==null?n.sibling=m:r.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=It(),n.sibling=null,s=tt.current,J(tt,f?s&1|2:s&1),De&&Kn(r,l.treeForkCount),n):(Ye(r),null);case 22:case 23:return Xt(r),Cu(),l=r.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(r.flags|=8192):l&&(r.flags|=8192),l?(s&536870912)!==0&&(r.flags&128)===0&&(Ye(r),r.subtreeFlags&6&&(r.flags|=8192)):Ye(r),s=r.updateQueue,s!==null&&Wo(r,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(l=r.memoizedState.cachePool.pool),l!==s&&(r.flags|=2048),n!==null&&I(ra),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),r.memoizedState.cache!==s&&(r.flags|=2048),Xn(st),Ye(r),null;case 25:return null;case 30:return null}throw Error(i(156,r.tag))}function z2(n,r){switch(fu(r),r.tag){case 1:return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Xn(st),he(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 26:case 27:case 5:return K(r),null;case 31:if(r.memoizedState!==null){if(Xt(r),r.alternate===null)throw Error(i(340));ea()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 13:if(Xt(r),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(i(340));ea()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return I(tt),null;case 4:return he(),null;case 10:return Xn(r.type),null;case 22:case 23:return Xt(r),Cu(),n!==null&&I(ra),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 24:return Xn(st),null;case 25:return null;default:return null}}function Cg(n,r){switch(fu(r),r.tag){case 3:Xn(st),he();break;case 26:case 27:case 5:K(r);break;case 4:he();break;case 31:r.memoizedState!==null&&Xt(r);break;case 13:Xt(r);break;case 19:I(tt);break;case 10:Xn(r.type);break;case 22:case 23:Xt(r),Cu(),n!==null&&I(ra);break;case 24:Xn(st)}}function ss(n,r){try{var s=r.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&n)===n){l=void 0;var m=s.create,b=s.inst;l=m(),b.destroy=l}s=s.next}while(s!==f)}}catch(k){Pe(r,r.return,k)}}function Tr(n,r,s){try{var l=r.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var b=l.inst,k=b.destroy;if(k!==void 0){b.destroy=void 0,f=r;var A=s,U=k;try{U()}catch(H){Pe(f,A,H)}}}l=l.next}while(l!==m)}}catch(H){Pe(r,r.return,H)}}function Ag(n){var r=n.updateQueue;if(r!==null){var s=n.stateNode;try{bm(r,s)}catch(l){Pe(n,n.return,l)}}}function Ng(n,r,s){s.props=la(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){Pe(n,r,l)}}function os(n,r){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(f){Pe(n,r,f)}}function Dn(n,r){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Pe(n,r,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Pe(n,r,f)}else s.current=null}function Rg(n){var r=n.type,s=n.memoizedProps,l=n.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Pe(n,n.return,f)}}function sd(n,r,s){try{var l=n.stateNode;a5(l,n.type,s,r),l[Lt]=r}catch(f){Pe(n,n.return,f)}}function Og(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Dr(n.type)||n.tag===4}function od(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Og(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Dr(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ld(n,r,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,r):(r=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,r.appendChild(n),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=qn));else if(l!==4&&(l===27&&Dr(n.type)&&(s=n.stateNode,r=null),n=n.child,n!==null))for(ld(n,r,s),n=n.sibling;n!==null;)ld(n,r,s),n=n.sibling}function Jo(n,r,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(l!==4&&(l===27&&Dr(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Jo(n,r,s),n=n.sibling;n!==null;)Jo(n,r,s),n=n.sibling}function Dg(n){var r=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,f=r.attributes;f.length;)r.removeAttributeNode(f[0]);jt(r,l,s),r[bt]=n,r[Lt]=s}catch(m){Pe(n,n.return,m)}}var er=!1,ct=!1,cd=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,yt=null;function U2(n,r){if(n=n.containerInfo,Nd=vl,n=Gp(n),nu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var b=0,k=-1,A=-1,U=0,H=0,Y=n,B=null;t:for(;;){for(var V;Y!==s||f!==0&&Y.nodeType!==3||(k=b+f),Y!==m||l!==0&&Y.nodeType!==3||(A=b+l),Y.nodeType===3&&(b+=Y.nodeValue.length),(V=Y.firstChild)!==null;)B=Y,Y=V;for(;;){if(Y===n)break t;if(B===s&&++U===f&&(k=b),B===m&&++H===l&&(A=b),(V=Y.nextSibling)!==null)break;Y=B,B=Y.parentNode}Y=V}s=k===-1||A===-1?null:{start:k,end:A}}else s=null}s=s||{start:0,end:0}}else s=null;for(Rd={focusedElem:n,selectionRange:s},vl=!1,yt=r;yt!==null;)if(r=yt,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,yt=n;else for(;yt!==null;){switch(r=yt,m=r.alternate,n=r.flags,r.tag){case 0:if((n&4)!==0&&(n=r.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)f=n[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=r,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var ie=la(s.type,f);n=l.getSnapshotBeforeUpdate(ie,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(ye){Pe(s,s.return,ye)}}break;case 3:if((n&1024)!==0){if(n=r.stateNode.containerInfo,s=n.nodeType,s===9)Ld(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ld(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=r.sibling,n!==null){n.return=r.return,yt=n;break}yt=r.return}}function Mg(n,r,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:nr(n,s),l&4&&ss(5,s);break;case 1:if(nr(n,s),l&4)if(n=s.stateNode,r===null)try{n.componentDidMount()}catch(b){Pe(s,s.return,b)}else{var f=la(s.type,r.memoizedProps);r=r.memoizedState;try{n.componentDidUpdate(f,r,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Pe(s,s.return,b)}}l&64&&Ag(s),l&512&&os(s,s.return);break;case 3:if(nr(n,s),l&64&&(n=s.updateQueue,n!==null)){if(r=null,s.child!==null)switch(s.child.tag){case 27:case 5:r=s.child.stateNode;break;case 1:r=s.child.stateNode}try{bm(n,r)}catch(b){Pe(s,s.return,b)}}break;case 27:r===null&&l&4&&Dg(s);case 26:case 5:nr(n,s),r===null&&l&4&&Rg(s),l&512&&os(s,s.return);break;case 12:nr(n,s);break;case 31:nr(n,s),l&4&&Bg(n,s);break;case 13:nr(n,s),l&4&&Pg(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=G2.bind(null,s),h5(n,s))));break;case 22:if(l=s.memoizedState!==null||er,!l){r=r!==null&&r.memoizedState!==null||ct,f=er;var m=ct;er=l,(ct=r)&&!m?rr(n,s,(s.subtreeFlags&8772)!==0):nr(n,s),er=f,ct=m}break;case 30:break;default:nr(n,s)}}function zg(n){var r=n.alternate;r!==null&&(n.alternate=null,zg(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&Pc(r)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Xe=null,zt=!1;function tr(n,r,s){for(s=s.child;s!==null;)Ug(n,r,s),s=s.sibling}function Ug(n,r,s){if(qt&&typeof qt.onCommitFiberUnmount=="function")try{qt.onCommitFiberUnmount(Ri,s)}catch{}switch(s.tag){case 26:ct||Dn(s,r),tr(n,r,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ct||Dn(s,r);var l=Xe,f=zt;Dr(s.type)&&(Xe=s.stateNode,zt=!1),tr(n,r,s),gs(s.stateNode),Xe=l,zt=f;break;case 5:ct||Dn(s,r);case 6:if(l=Xe,f=zt,Xe=null,tr(n,r,s),Xe=l,zt=f,Xe!==null)if(zt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(s.stateNode)}catch(m){Pe(s,r,m)}else try{Xe.removeChild(s.stateNode)}catch(m){Pe(s,r,m)}break;case 18:Xe!==null&&(zt?(n=Xe,A0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),oi(n)):A0(Xe,s.stateNode));break;case 4:l=Xe,f=zt,Xe=s.stateNode.containerInfo,zt=!0,tr(n,r,s),Xe=l,zt=f;break;case 0:case 11:case 14:case 15:Tr(2,s,r),ct||Tr(4,s,r),tr(n,r,s);break;case 1:ct||(Dn(s,r),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Ng(s,r,l)),tr(n,r,s);break;case 21:tr(n,r,s);break;case 22:ct=(l=ct)||s.memoizedState!==null,tr(n,r,s),ct=l;break;default:tr(n,r,s)}}function Bg(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{oi(n)}catch(s){Pe(r,r.return,s)}}}function Pg(n,r){if(r.memoizedState===null&&(n=r.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{oi(n)}catch(s){Pe(r,r.return,s)}}function B2(n){switch(n.tag){case 31:case 13:case 19:var r=n.stateNode;return r===null&&(r=n.stateNode=new Lg),r;case 22:return n=n.stateNode,r=n._retryCache,r===null&&(r=n._retryCache=new Lg),r;default:throw Error(i(435,n.tag))}}function Qo(n,r){var s=B2(n);r.forEach(function(l){if(!s.has(l)){s.add(l);var f=K2.bind(null,n,l);l.then(f,f)}})}function Ut(n,r){var s=r.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=n,b=r,k=b;e:for(;k!==null;){switch(k.tag){case 27:if(Dr(k.type)){Xe=k.stateNode,zt=!1;break e}break;case 5:Xe=k.stateNode,zt=!1;break e;case 3:case 4:Xe=k.stateNode.containerInfo,zt=!0;break e}k=k.return}if(Xe===null)throw Error(i(160));Ug(m,b,f),Xe=null,zt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(r.subtreeFlags&13886)for(r=r.child;r!==null;)Vg(r,n),r=r.sibling}var bn=null;function Vg(n,r){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ut(r,n),Bt(n),l&4&&(Tr(3,n,n.return),ss(3,n),Tr(5,n,n.return));break;case 1:Ut(r,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),l&64&&er&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=bn;if(Ut(r,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){e:{l=n.type,s=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Li]||m[bt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),jt(m,l,s),m[bt]=n,gt(m),l=m;break e;case"link":var b=V0("link","href",f).get(l+(s.href||""));if(b){for(var k=0;k<b.length;k++)if(m=b[k],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(k,1);break t}}m=f.createElement(l),jt(m,l,s),f.head.appendChild(m);break;case"meta":if(b=V0("meta","content",f).get(l+(s.content||""))){for(k=0;k<b.length;k++)if(m=b[k],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(k,1);break t}}m=f.createElement(l),jt(m,l,s),f.head.appendChild(m);break;default:throw Error(i(468,l))}m[bt]=n,gt(m),l=m}n.stateNode=l}else H0(f,n.type,n.stateNode);else n.stateNode=P0(f,l,n.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?H0(f,n.type,n.stateNode):P0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&sd(n,n.memoizedProps,s.memoizedProps)}break;case 27:Ut(r,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),s!==null&&l&4&&sd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Ut(r,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),n.flags&32){f=n.stateNode;try{Na(f,"")}catch(ie){Pe(n,n.return,ie)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,sd(n,f,s!==null?s.memoizedProps:f)),l&1024&&(cd=!0);break;case 6:if(Ut(r,n),Bt(n),l&4){if(n.stateNode===null)throw Error(i(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(ie){Pe(n,n.return,ie)}}break;case 3:if(pl=null,f=bn,bn=hl(r.containerInfo),Ut(r,n),bn=f,Bt(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{oi(r.containerInfo)}catch(ie){Pe(n,n.return,ie)}cd&&(cd=!1,Hg(n));break;case 4:l=bn,bn=hl(n.stateNode.containerInfo),Ut(r,n),Bt(n),bn=l;break;case 12:Ut(r,n),Bt(n);break;case 31:Ut(r,n),Bt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Qo(n,l)));break;case 13:Ut(r,n),Bt(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(el=It()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Qo(n,l)));break;case 22:f=n.memoizedState!==null;var A=s!==null&&s.memoizedState!==null,U=er,H=ct;if(er=U||f,ct=H||A,Ut(r,n),ct=H,er=U,Bt(n),l&8192)e:for(r=n.stateNode,r._visibility=f?r._visibility&-2:r._visibility|1,f&&(s===null||A||er||ct||ca(n)),s=null,r=n;;){if(r.tag===5||r.tag===26){if(s===null){A=s=r;try{if(m=A.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{k=A.stateNode;var Y=A.memoizedProps.style,B=Y!=null&&Y.hasOwnProperty("display")?Y.display:null;k.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(ie){Pe(A,A.return,ie)}}}else if(r.tag===6){if(s===null){A=r;try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(ie){Pe(A,A.return,ie)}}}else if(r.tag===18){if(s===null){A=r;try{var V=A.stateNode;f?N0(V,!0):N0(A.stateNode,!1)}catch(ie){Pe(A,A.return,ie)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===n)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break e;for(;r.sibling===null;){if(r.return===null||r.return===n)break e;s===r&&(s=null),r=r.return}s===r&&(s=null),r.sibling.return=r.return,r=r.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Qo(n,s))));break;case 19:Ut(r,n),Bt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Qo(n,l)));break;case 30:break;case 21:break;default:Ut(r,n),Bt(n)}}function Bt(n){var r=n.flags;if(r&2){try{for(var s,l=n.return;l!==null;){if(Og(l)){s=l;break}l=l.return}if(s==null)throw Error(i(160));switch(s.tag){case 27:var f=s.stateNode,m=od(n);Jo(n,m,f);break;case 5:var b=s.stateNode;s.flags&32&&(Na(b,""),s.flags&=-33);var k=od(n);Jo(n,k,b);break;case 3:case 4:var A=s.stateNode.containerInfo,U=od(n);ld(n,U,A);break;default:throw Error(i(161))}}catch(H){Pe(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function Hg(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var r=n;Hg(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),n=n.sibling}}function nr(n,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)Mg(n,r.alternate,r),r=r.sibling}function ca(n){for(n=n.child;n!==null;){var r=n;switch(r.tag){case 0:case 11:case 14:case 15:Tr(4,r,r.return),ca(r);break;case 1:Dn(r,r.return);var s=r.stateNode;typeof s.componentWillUnmount=="function"&&Ng(r,r.return,s),ca(r);break;case 27:gs(r.stateNode);case 26:case 5:Dn(r,r.return),ca(r);break;case 22:r.memoizedState===null&&ca(r);break;case 30:ca(r);break;default:ca(r)}n=n.sibling}}function rr(n,r,s){for(s=s&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var l=r.alternate,f=n,m=r,b=m.flags;switch(m.tag){case 0:case 11:case 15:rr(f,m,s),ss(4,m);break;case 1:if(rr(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(U){Pe(l,l.return,U)}if(l=m,f=l.updateQueue,f!==null){var k=l.stateNode;try{var A=f.shared.hiddenCallbacks;if(A!==null)for(f.shared.hiddenCallbacks=null,f=0;f<A.length;f++)vm(A[f],k)}catch(U){Pe(l,l.return,U)}}s&&b&64&&Ag(m),os(m,m.return);break;case 27:Dg(m);case 26:case 5:rr(f,m,s),s&&l===null&&b&4&&Rg(m),os(m,m.return);break;case 12:rr(f,m,s);break;case 31:rr(f,m,s),s&&b&4&&Bg(f,m);break;case 13:rr(f,m,s),s&&b&4&&Pg(f,m);break;case 22:m.memoizedState===null&&rr(f,m,s),os(m,m.return);break;case 30:break;default:rr(f,m,s)}r=r.sibling}}function ud(n,r){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(n=r.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Ki(s))}function dd(n,r){n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ki(n))}function xn(n,r,s,l){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)$g(n,r,s,l),r=r.sibling}function $g(n,r,s,l){var f=r.flags;switch(r.tag){case 0:case 11:case 15:xn(n,r,s,l),f&2048&&ss(9,r);break;case 1:xn(n,r,s,l);break;case 3:xn(n,r,s,l),f&2048&&(n=null,r.alternate!==null&&(n=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==n&&(r.refCount++,n!=null&&Ki(n)));break;case 12:if(f&2048){xn(n,r,s,l),n=r.stateNode;try{var m=r.memoizedProps,b=m.id,k=m.onPostCommit;typeof k=="function"&&k(b,r.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(A){Pe(r,r.return,A)}}else xn(n,r,s,l);break;case 31:xn(n,r,s,l);break;case 13:xn(n,r,s,l);break;case 23:break;case 22:m=r.stateNode,b=r.alternate,r.memoizedState!==null?m._visibility&2?xn(n,r,s,l):ls(n,r):m._visibility&2?xn(n,r,s,l):(m._visibility|=2,Wa(n,r,s,l,(r.subtreeFlags&10256)!==0||!1)),f&2048&&ud(b,r);break;case 24:xn(n,r,s,l),f&2048&&dd(r.alternate,r);break;default:xn(n,r,s,l)}}function Wa(n,r,s,l,f){for(f=f&&((r.subtreeFlags&10256)!==0||!1),r=r.child;r!==null;){var m=n,b=r,k=s,A=l,U=b.flags;switch(b.tag){case 0:case 11:case 15:Wa(m,b,k,A,f),ss(8,b);break;case 23:break;case 22:var H=b.stateNode;b.memoizedState!==null?H._visibility&2?Wa(m,b,k,A,f):ls(m,b):(H._visibility|=2,Wa(m,b,k,A,f)),f&&U&2048&&ud(b.alternate,b);break;case 24:Wa(m,b,k,A,f),f&&U&2048&&dd(b.alternate,b);break;default:Wa(m,b,k,A,f)}r=r.sibling}}function ls(n,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var s=n,l=r,f=l.flags;switch(l.tag){case 22:ls(s,l),f&2048&&ud(l.alternate,l);break;case 24:ls(s,l),f&2048&&dd(l.alternate,l);break;default:ls(s,l)}r=r.sibling}}var cs=8192;function Ja(n,r,s){if(n.subtreeFlags&cs)for(n=n.child;n!==null;)Ig(n,r,s),n=n.sibling}function Ig(n,r,s){switch(n.tag){case 26:Ja(n,r,s),n.flags&cs&&n.memoizedState!==null&&k5(s,bn,n.memoizedState,n.memoizedProps);break;case 5:Ja(n,r,s);break;case 3:case 4:var l=bn;bn=hl(n.stateNode.containerInfo),Ja(n,r,s),bn=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=cs,cs=16777216,Ja(n,r,s),cs=l):Ja(n,r,s));break;default:Ja(n,r,s)}}function qg(n){var r=n.alternate;if(r!==null&&(n=r.child,n!==null)){r.child=null;do r=n.sibling,n.sibling=null,n=r;while(n!==null)}}function us(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];yt=l,Gg(l,n)}qg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(n),n=n.sibling}function Fg(n){switch(n.tag){case 0:case 11:case 15:us(n),n.flags&2048&&Tr(9,n,n.return);break;case 3:us(n);break;case 12:us(n);break;case 22:var r=n.stateNode;n.memoizedState!==null&&r._visibility&2&&(n.return===null||n.return.tag!==13)?(r._visibility&=-3,Zo(n)):us(n);break;default:us(n)}}function Zo(n){var r=n.deletions;if((n.flags&16)!==0){if(r!==null)for(var s=0;s<r.length;s++){var l=r[s];yt=l,Gg(l,n)}qg(n)}for(n=n.child;n!==null;){switch(r=n,r.tag){case 0:case 11:case 15:Tr(8,r,r.return),Zo(r);break;case 22:s=r.stateNode,s._visibility&2&&(s._visibility&=-3,Zo(r));break;default:Zo(r)}n=n.sibling}}function Gg(n,r){for(;yt!==null;){var s=yt;switch(s.tag){case 0:case 11:case 15:Tr(8,s,r);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ki(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,yt=l;else e:for(s=n;yt!==null;){l=yt;var f=l.sibling,m=l.return;if(zg(l),l===s){yt=null;break e}if(f!==null){f.return=m,yt=f;break e}yt=m}}}var P2={getCacheForType:function(n){var r=wt(st),s=r.data.get(n);return s===void 0&&(s=n(),r.data.set(n,s)),s},cacheSignal:function(){return wt(st).controller.signal}},V2=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ie=null,Ae=null,Re=0,Be=0,Wt=null,Er=!1,Qa=!1,hd=!1,ar=0,Qe=0,Cr=0,ua=0,fd=0,Jt=0,Za=0,ds=null,Pt=null,pd=!1,el=0,Kg=0,tl=1/0,nl=null,Ar=null,ft=0,Nr=null,ei=null,ir=0,md=0,gd=null,Yg=null,hs=0,yd=null;function Qt(){return(Ue&2)!==0&&Re!==0?Re&-Re:E.T!==null?jd():up()}function Xg(){if(Jt===0)if((Re&536870912)===0||De){var n=co;co<<=1,(co&3932160)===0&&(co=262144),Jt=n}else Jt=536870912;return n=Yt.current,n!==null&&(n.flags|=32),Jt}function Vt(n,r,s){(n===Ie&&(Be===2||Be===9)||n.cancelPendingCommit!==null)&&(ti(n,0),Rr(n,Re,Jt,!1)),Di(n,s),((Ue&2)===0||n!==Ie)&&(n===Ie&&((Ue&2)===0&&(ua|=s),Qe===4&&Rr(n,Re,Jt,!1)),Ln(n))}function Wg(n,r,s){if((Ue&6)!==0)throw Error(i(327));var l=!s&&(r&127)===0&&(r&n.expiredLanes)===0||Oi(n,r),f=l?I2(n,r):bd(n,r,!0),m=l;do{if(f===0){Qa&&!l&&Rr(n,r,0,!1);break}else{if(s=n.current.alternate,m&&!H2(s)){f=bd(n,r,!1),m=!1;continue}if(f===2){if(m=r,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){r=b;e:{var k=n;f=ds;var A=k.current.memoizedState.isDehydrated;if(A&&(ti(k,b).flags|=256),b=bd(k,b,!1),b!==2){if(hd&&!A){k.errorRecoveryDisabledLanes|=m,ua|=m,f=4;break e}m=Pt,Pt=f,m!==null&&(Pt===null?Pt=m:Pt.push.apply(Pt,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){ti(n,0),Rr(n,r,0,!0);break}e:{switch(l=n,m=f,m){case 0:case 1:throw Error(i(345));case 4:if((r&4194048)!==r)break;case 6:Rr(l,r,Jt,!Er);break e;case 2:Pt=null;break;case 3:case 5:break;default:throw Error(i(329))}if((r&62914560)===r&&(f=el+300-It(),10<f)){if(Rr(l,r,Jt,!Er),ho(l,0,!0)!==0)break e;ir=r,l.timeoutHandle=E0(Jg.bind(null,l,s,Pt,nl,pd,r,Jt,ua,Za,Er,m,"Throttled",-0,0),f);break e}Jg(l,s,Pt,nl,pd,r,Jt,ua,Za,Er,m,null,-0,0)}}break}while(!0);Ln(n)}function Jg(n,r,s,l,f,m,b,k,A,U,H,Y,B,V){if(n.timeoutHandle=-1,Y=r.subtreeFlags,Y&8192||(Y&16785408)===16785408){Y={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qn},Ig(r,m,Y);var ie=(m&62914560)===m?el-It():(m&4194048)===m?Kg-It():0;if(ie=_5(Y,ie),ie!==null){ir=m,n.cancelPendingCommit=ie(i0.bind(null,n,r,m,s,l,f,b,k,A,H,Y,null,B,V)),Rr(n,m,b,!U);return}}i0(n,r,m,s,l,f,b,k,A)}function H2(n){for(var r=n;;){var s=r.tag;if((s===0||s===11||s===15)&&r.flags&16384&&(s=r.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Gt(m(),f))return!1}catch{return!1}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Rr(n,r,s,l){r&=~fd,r&=~ua,n.suspendedLanes|=r,n.pingedLanes&=~r,l&&(n.warmLanes|=r),l=n.expirationTimes;for(var f=r;0<f;){var m=31-Ft(f),b=1<<m;l[m]=-1,f&=~b}s!==0&&op(n,s,r)}function rl(){return(Ue&6)===0?(fs(0),!1):!0}function vd(){if(Ae!==null){if(Be===0)var n=Ae.return;else n=Ae,Yn=ta=null,Lu(n),Fa=null,Xi=0,n=Ae;for(;n!==null;)Cg(n.alternate,n),n=n.return;Ae=null}}function ti(n,r){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,o5(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),ir=0,vd(),Ie=n,Ae=s=Gn(n.current,null),Re=r,Be=0,Wt=null,Er=!1,Qa=Oi(n,r),hd=!1,Za=Jt=fd=ua=Cr=Qe=0,Pt=ds=null,pd=!1,(r&8)!==0&&(r|=r&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=r;0<l;){var f=31-Ft(l),m=1<<f;r|=n[f],l&=~m}return ar=r,ko(),s}function Qg(n,r){Te=null,E.H=rs,r===qa||r===Oo?(r=pm(),Be=3):r===Su?(r=pm(),Be=4):Be=r===Wu?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,Wt=r,Ae===null&&(Qe=1,Go(n,ln(r,n.current)))}function Zg(){var n=Yt.current;return n===null?!0:(Re&4194048)===Re?hn===null:(Re&62914560)===Re||(Re&536870912)!==0?n===hn:!1}function e0(){var n=E.H;return E.H=rs,n===null?rs:n}function t0(){var n=E.A;return E.A=P2,n}function al(){Qe=4,Er||(Re&4194048)!==Re&&Yt.current!==null||(Qa=!0),(Cr&134217727)===0&&(ua&134217727)===0||Ie===null||Rr(Ie,Re,Jt,!1)}function bd(n,r,s){var l=Ue;Ue|=2;var f=e0(),m=t0();(Ie!==n||Re!==r)&&(nl=null,ti(n,r)),r=!1;var b=Qe;e:do try{if(Be!==0&&Ae!==null){var k=Ae,A=Wt;switch(Be){case 8:vd(),b=6;break e;case 3:case 2:case 9:case 6:Yt.current===null&&(r=!0);var U=Be;if(Be=0,Wt=null,ni(n,k,A,U),s&&Qa){b=0;break e}break;default:U=Be,Be=0,Wt=null,ni(n,k,A,U)}}$2(),b=Qe;break}catch(H){Qg(n,H)}while(!0);return r&&n.shellSuspendCounter++,Yn=ta=null,Ue=l,E.H=f,E.A=m,Ae===null&&(Ie=null,Re=0,ko()),b}function $2(){for(;Ae!==null;)n0(Ae)}function I2(n,r){var s=Ue;Ue|=2;var l=e0(),f=t0();Ie!==n||Re!==r?(nl=null,tl=It()+500,ti(n,r)):Qa=Oi(n,r);e:do try{if(Be!==0&&Ae!==null){r=Ae;var m=Wt;t:switch(Be){case 1:Be=0,Wt=null,ni(n,r,m,1);break;case 2:case 9:if(hm(m)){Be=0,Wt=null,r0(r);break}r=function(){Be!==2&&Be!==9||Ie!==n||(Be=7),Ln(n)},m.then(r,r);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:hm(m)?(Be=0,Wt=null,r0(r)):(Be=0,Wt=null,ni(n,r,m,7));break;case 5:var b=null;switch(Ae.tag){case 26:b=Ae.memoizedState;case 5:case 27:var k=Ae;if(b?$0(b):k.stateNode.complete){Be=0,Wt=null;var A=k.sibling;if(A!==null)Ae=A;else{var U=k.return;U!==null?(Ae=U,il(U)):Ae=null}break t}}Be=0,Wt=null,ni(n,r,m,5);break;case 6:Be=0,Wt=null,ni(n,r,m,6);break;case 8:vd(),Qe=6;break e;default:throw Error(i(462))}}q2();break}catch(H){Qg(n,H)}while(!0);return Yn=ta=null,E.H=l,E.A=f,Ue=s,Ae!==null?0:(Ie=null,Re=0,ko(),Qe)}function q2(){for(;Ae!==null&&!fw();)n0(Ae)}function n0(n){var r=Tg(n.alternate,n,ar);n.memoizedProps=n.pendingProps,r===null?il(n):Ae=r}function r0(n){var r=n,s=r.alternate;switch(r.tag){case 15:case 0:r=xg(s,r,r.pendingProps,r.type,void 0,Re);break;case 11:r=xg(s,r,r.pendingProps,r.type.render,r.ref,Re);break;case 5:Lu(r);default:Cg(s,r),r=Ae=tm(r,ar),r=Tg(s,r,ar)}n.memoizedProps=n.pendingProps,r===null?il(n):Ae=r}function ni(n,r,s,l){Yn=ta=null,Lu(r),Fa=null,Xi=0;var f=r.return;try{if(O2(n,f,r,s,Re)){Qe=1,Go(n,ln(s,n.current)),Ae=null;return}}catch(m){if(f!==null)throw Ae=f,m;Qe=1,Go(n,ln(s,n.current)),Ae=null;return}r.flags&32768?(De||l===1?n=!0:Qa||(Re&536870912)!==0?n=!1:(Er=n=!0,(l===2||l===9||l===3||l===6)&&(l=Yt.current,l!==null&&l.tag===13&&(l.flags|=16384))),a0(r,n)):il(r)}function il(n){var r=n;do{if((r.flags&32768)!==0){a0(r,Er);return}n=r.return;var s=M2(r.alternate,r,ar);if(s!==null){Ae=s;return}if(r=r.sibling,r!==null){Ae=r;return}Ae=r=n}while(r!==null);Qe===0&&(Qe=5)}function a0(n,r){do{var s=z2(n.alternate,n);if(s!==null){s.flags&=32767,Ae=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!r&&(n=n.sibling,n!==null)){Ae=n;return}Ae=n=s}while(n!==null);Qe=6,Ae=null}function i0(n,r,s,l,f,m,b,k,A){n.cancelPendingCommit=null;do sl();while(ft!==0);if((Ue&6)!==0)throw Error(i(327));if(r!==null){if(r===n.current)throw Error(i(177));if(m=r.lanes|r.childLanes,m|=ou,jw(n,s,m,b,k,A),n===Ie&&(Ae=Ie=null,Re=0),ei=r,Nr=n,ir=s,md=m,gd=f,Yg=l,(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,Y2(oo,function(){return u0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(r.flags&13878)!==0,(r.subtreeFlags&13878)!==0||l){l=E.T,E.T=null,f=$.p,$.p=2,b=Ue,Ue|=4;try{U2(n,r,s)}finally{Ue=b,$.p=f,E.T=l}}ft=1,s0(),o0(),l0()}}function s0(){if(ft===1){ft=0;var n=Nr,r=ei,s=(r.flags&13878)!==0;if((r.subtreeFlags&13878)!==0||s){s=E.T,E.T=null;var l=$.p;$.p=2;var f=Ue;Ue|=4;try{Vg(r,n);var m=Rd,b=Gp(n.containerInfo),k=m.focusedElem,A=m.selectionRange;if(b!==k&&k&&k.ownerDocument&&Fp(k.ownerDocument.documentElement,k)){if(A!==null&&nu(k)){var U=A.start,H=A.end;if(H===void 0&&(H=U),"selectionStart"in k)k.selectionStart=U,k.selectionEnd=Math.min(H,k.value.length);else{var Y=k.ownerDocument||document,B=Y&&Y.defaultView||window;if(B.getSelection){var V=B.getSelection(),ie=k.textContent.length,ye=Math.min(A.start,ie),$e=A.end===void 0?ye:Math.min(A.end,ie);!V.extend&&ye>$e&&(b=$e,$e=ye,ye=b);var M=qp(k,ye),D=qp(k,$e);if(M&&D&&(V.rangeCount!==1||V.anchorNode!==M.node||V.anchorOffset!==M.offset||V.focusNode!==D.node||V.focusOffset!==D.offset)){var z=Y.createRange();z.setStart(M.node,M.offset),V.removeAllRanges(),ye>$e?(V.addRange(z),V.extend(D.node,D.offset)):(z.setEnd(D.node,D.offset),V.addRange(z))}}}}for(Y=[],V=k;V=V.parentNode;)V.nodeType===1&&Y.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<Y.length;k++){var F=Y[k];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}vl=!!Nd,Rd=Nd=null}finally{Ue=f,$.p=l,E.T=s}}n.current=r,ft=2}}function o0(){if(ft===2){ft=0;var n=Nr,r=ei,s=(r.flags&8772)!==0;if((r.subtreeFlags&8772)!==0||s){s=E.T,E.T=null;var l=$.p;$.p=2;var f=Ue;Ue|=4;try{Mg(n,r.alternate,r)}finally{Ue=f,$.p=l,E.T=s}}ft=3}}function l0(){if(ft===4||ft===3){ft=0,pw();var n=Nr,r=ei,s=ir,l=Yg;(r.subtreeFlags&10256)!==0||(r.flags&10256)!==0?ft=5:(ft=0,ei=Nr=null,c0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ar=null),Uc(s),r=r.stateNode,qt&&typeof qt.onCommitFiberRoot=="function")try{qt.onCommitFiberRoot(Ri,r,void 0,(r.current.flags&128)===128)}catch{}if(l!==null){r=E.T,f=$.p,$.p=2,E.T=null;try{for(var m=n.onRecoverableError,b=0;b<l.length;b++){var k=l[b];m(k.value,{componentStack:k.stack})}}finally{E.T=r,$.p=f}}(ir&3)!==0&&sl(),Ln(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===yd?hs++:(hs=0,yd=n):hs=0,fs(0)}}function c0(n,r){(n.pooledCacheLanes&=r)===0&&(r=n.pooledCache,r!=null&&(n.pooledCache=null,Ki(r)))}function sl(){return s0(),o0(),l0(),u0()}function u0(){if(ft!==5)return!1;var n=Nr,r=md;md=0;var s=Uc(ir),l=E.T,f=$.p;try{$.p=32>s?32:s,E.T=null,s=gd,gd=null;var m=Nr,b=ir;if(ft=0,ei=Nr=null,ir=0,(Ue&6)!==0)throw Error(i(331));var k=Ue;if(Ue|=4,Fg(m.current),$g(m,m.current,b,s),Ue=k,fs(0,!1),qt&&typeof qt.onPostCommitFiberRoot=="function")try{qt.onPostCommitFiberRoot(Ri,m)}catch{}return!0}finally{$.p=f,E.T=l,c0(n,r)}}function d0(n,r,s){r=ln(s,r),r=Xu(n.stateNode,r,2),n=jr(n,r,2),n!==null&&(Di(n,2),Ln(n))}function Pe(n,r,s){if(n.tag===3)d0(n,n,s);else for(;r!==null;){if(r.tag===3){d0(r,n,s);break}else if(r.tag===1){var l=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ar===null||!Ar.has(l))){n=ln(s,n),s=hg(2),l=jr(r,s,2),l!==null&&(fg(s,l,r,n),Di(l,2),Ln(l));break}}r=r.return}}function xd(n,r,s){var l=n.pingCache;if(l===null){l=n.pingCache=new V2;var f=new Set;l.set(r,f)}else f=l.get(r),f===void 0&&(f=new Set,l.set(r,f));f.has(s)||(hd=!0,f.add(s),n=F2.bind(null,n,r,s),r.then(n,n))}function F2(n,r,s){var l=n.pingCache;l!==null&&l.delete(r),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ie===n&&(Re&s)===s&&(Qe===4||Qe===3&&(Re&62914560)===Re&&300>It()-el?(Ue&2)===0&&ti(n,0):fd|=s,Za===Re&&(Za=0)),Ln(n)}function h0(n,r){r===0&&(r=sp()),n=Qr(n,r),n!==null&&(Di(n,r),Ln(n))}function G2(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),h0(n,s)}function K2(n,r){var s=0;switch(n.tag){case 31:case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(i(314))}l!==null&&l.delete(r),h0(n,s)}function Y2(n,r){return Dc(n,r)}var ol=null,ri=null,wd=!1,ll=!1,Sd=!1,Or=0;function Ln(n){n!==ri&&n.next===null&&(ri===null?ol=ri=n:ri=ri.next=n),ll=!0,wd||(wd=!0,W2())}function fs(n,r){if(!Sd&&ll){Sd=!0;do for(var s=!1,l=ol;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var b=l.suspendedLanes,k=l.pingedLanes;m=(1<<31-Ft(42|n)+1)-1,m&=f&~(b&~k),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,g0(l,m))}else m=Re,m=ho(l,l===Ie?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Oi(l,m)||(s=!0,g0(l,m));l=l.next}while(s);Sd=!1}}function X2(){f0()}function f0(){ll=wd=!1;var n=0;Or!==0&&s5()&&(n=Or);for(var r=It(),s=null,l=ol;l!==null;){var f=l.next,m=p0(l,r);m===0?(l.next=null,s===null?ol=f:s.next=f,f===null&&(ri=s)):(s=l,(n!==0||(m&3)!==0)&&(ll=!0)),l=f}ft!==0&&ft!==5||fs(n),Or!==0&&(Or=0)}function p0(n,r){for(var s=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-Ft(m),k=1<<b,A=f[b];A===-1?((k&s)===0||(k&l)!==0)&&(f[b]=Sw(k,r)):A<=r&&(n.expiredLanes|=k),m&=~k}if(r=Ie,s=Re,s=ho(n,n===r?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===r&&(Be===2||Be===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Lc(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Oi(n,s)){if(r=s&-s,r===n.callbackPriority)return r;switch(l!==null&&Lc(l),Uc(s)){case 2:case 8:s=ap;break;case 32:s=oo;break;case 268435456:s=ip;break;default:s=oo}return l=m0.bind(null,n),s=Dc(s,l),n.callbackPriority=r,n.callbackNode=s,r}return l!==null&&l!==null&&Lc(l),n.callbackPriority=2,n.callbackNode=null,2}function m0(n,r){if(ft!==0&&ft!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(sl()&&n.callbackNode!==s)return null;var l=Re;return l=ho(n,n===Ie?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Wg(n,l,r),p0(n,It()),n.callbackNode!=null&&n.callbackNode===s?m0.bind(null,n):null)}function g0(n,r){if(sl())return null;Wg(n,r,!0)}function W2(){l5(function(){(Ue&6)!==0?Dc(rp,X2):f0()})}function jd(){if(Or===0){var n=$a;n===0&&(n=lo,lo<<=1,(lo&261888)===0&&(lo=256)),Or=n}return Or}function y0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:go(""+n)}function v0(n,r){var s=r.ownerDocument.createElement("input");return s.name=r.name,s.value=r.value,n.id&&s.setAttribute("form",n.id),r.parentNode.insertBefore(s,r),n=new FormData(n),s.parentNode.removeChild(s),n}function J2(n,r,s,l,f){if(r==="submit"&&s&&s.stateNode===f){var m=y0((f[Lt]||null).action),b=l.submitter;b&&(r=(r=b[Lt]||null)?y0(r.formAction):b.getAttribute("formAction"),r!==null&&(m=r,b=null));var k=new xo("action","action",null,l,f);n.push({event:k,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Or!==0){var A=b?v0(f,b):new FormData(f);Iu(s,{pending:!0,data:A,method:f.method,action:m},null,A)}}else typeof m=="function"&&(k.preventDefault(),A=b?v0(f,b):new FormData(f),Iu(s,{pending:!0,data:A,method:f.method,action:m},m,A))},currentTarget:f}]})}}for(var kd=0;kd<su.length;kd++){var _d=su[kd],Q2=_d.toLowerCase(),Z2=_d[0].toUpperCase()+_d.slice(1);vn(Q2,"on"+Z2)}vn(Xp,"onAnimationEnd"),vn(Wp,"onAnimationIteration"),vn(Jp,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(m2,"onTransitionRun"),vn(g2,"onTransitionStart"),vn(y2,"onTransitionCancel"),vn(Qp,"onTransitionEnd"),Ca("onMouseEnter",["mouseout","mouseover"]),Ca("onMouseLeave",["mouseout","mouseover"]),Ca("onPointerEnter",["pointerout","pointerover"]),Ca("onPointerLeave",["pointerout","pointerover"]),Yr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yr("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),e5=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ps));function b0(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],f=l.event;l=l.listeners;e:{var m=void 0;if(r)for(var b=l.length-1;0<=b;b--){var k=l[b],A=k.instance,U=k.currentTarget;if(k=k.listener,A!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=U;try{m(f)}catch(H){jo(H)}f.currentTarget=null,m=A}else for(b=0;b<l.length;b++){if(k=l[b],A=k.instance,U=k.currentTarget,k=k.listener,A!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=U;try{m(f)}catch(H){jo(H)}f.currentTarget=null,m=A}}}}function Ne(n,r){var s=r[Bc];s===void 0&&(s=r[Bc]=new Set);var l=n+"__bubble";s.has(l)||(x0(r,n,2,!1),s.add(l))}function Td(n,r,s){var l=0;r&&(l|=4),x0(s,n,l,r)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Ed(n){if(!n[cl]){n[cl]=!0,fp.forEach(function(s){s!=="selectionchange"&&(e5.has(s)||Td(s,!1,n),Td(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[cl]||(r[cl]=!0,Td("selectionchange",!1,r))}}function x0(n,r,s,l){switch(X0(r)){case 2:var f=C5;break;case 8:f=A5;break;default:f=$d}s=f.bind(null,r,s,n),f=void 0,!Kc||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(r,s,{capture:!0,passive:f}):n.addEventListener(r,s,!0):f!==void 0?n.addEventListener(r,s,{passive:f}):n.addEventListener(r,s,!1)}function Cd(n,r,s,l,f){var m=l;if((r&1)===0&&(r&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var k=l.stateNode.containerInfo;if(k===f)break;if(b===4)for(b=l.return;b!==null;){var A=b.tag;if((A===3||A===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;k!==null;){if(b=_a(k),b===null)return;if(A=b.tag,A===5||A===6||A===26||A===27){l=m=b;continue e}k=k.parentNode}}l=l.return}_p(function(){var U=m,H=Fc(s),Y=[];e:{var B=Zp.get(n);if(B!==void 0){var V=xo,ie=n;switch(n){case"keypress":if(vo(s)===0)break e;case"keydown":case"keyup":V=Kw;break;case"focusin":ie="focus",V=Jc;break;case"focusout":ie="blur",V=Jc;break;case"beforeblur":case"afterblur":V=Jc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Mw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Ww;break;case Xp:case Wp:case Jp:V=Bw;break;case Qp:V=Qw;break;case"scroll":case"scrollend":V=Dw;break;case"wheel":V=e2;break;case"copy":case"cut":case"paste":V=Vw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Np;break;case"toggle":case"beforetoggle":V=n2}var ye=(r&4)!==0,$e=!ye&&(n==="scroll"||n==="scrollend"),M=ye?B!==null?B+"Capture":null:B;ye=[];for(var D=U,z;D!==null;){var F=D;if(z=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||z===null||M===null||(F=zi(D,M),F!=null&&ye.push(ms(D,F,z))),$e)break;D=D.return}0<ye.length&&(B=new V(B,ie,null,s,H),Y.push({event:B,listeners:ye}))}}if((r&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",V=n==="mouseout"||n==="pointerout",B&&s!==qc&&(ie=s.relatedTarget||s.fromElement)&&(_a(ie)||ie[ka]))break e;if((V||B)&&(B=H.window===H?H:(B=H.ownerDocument)?B.defaultView||B.parentWindow:window,V?(ie=s.relatedTarget||s.toElement,V=U,ie=ie?_a(ie):null,ie!==null&&($e=c(ie),ye=ie.tag,ie!==$e||ye!==5&&ye!==27&&ye!==6)&&(ie=null)):(V=null,ie=U),V!==ie)){if(ye=Cp,F="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ye=Np,F="onPointerLeave",M="onPointerEnter",D="pointer"),$e=V==null?B:Mi(V),z=ie==null?B:Mi(ie),B=new ye(F,D+"leave",V,s,H),B.target=$e,B.relatedTarget=z,F=null,_a(H)===U&&(ye=new ye(M,D+"enter",ie,s,H),ye.target=z,ye.relatedTarget=$e,F=ye),$e=F,V&&ie)t:{for(ye=t5,M=V,D=ie,z=0,F=M;F;F=ye(F))z++;F=0;for(var fe=D;fe;fe=ye(fe))F++;for(;0<z-F;)M=ye(M),z--;for(;0<F-z;)D=ye(D),F--;for(;z--;){if(M===D||D!==null&&M===D.alternate){ye=M;break t}M=ye(M),D=ye(D)}ye=null}else ye=null;V!==null&&w0(Y,B,V,ye,!1),ie!==null&&$e!==null&&w0(Y,$e,ie,ye,!0)}}e:{if(B=U?Mi(U):window,V=B.nodeName&&B.nodeName.toLowerCase(),V==="select"||V==="input"&&B.type==="file")var Me=Bp;else if(zp(B))if(Pp)Me=h2;else{Me=u2;var le=c2}else V=B.nodeName,!V||V.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?U&&Ic(U.elementType)&&(Me=Bp):Me=d2;if(Me&&(Me=Me(n,U))){Up(Y,Me,s,H);break e}le&&le(n,B,U),n==="focusout"&&U&&B.type==="number"&&U.memoizedProps.value!=null&&$c(B,"number",B.value)}switch(le=U?Mi(U):window,n){case"focusin":(zp(le)||le.contentEditable==="true")&&(La=le,ru=U,qi=null);break;case"focusout":qi=ru=La=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Kp(Y,s,H);break;case"selectionchange":if(p2)break;case"keydown":case"keyup":Kp(Y,s,H)}var Ee;if(Zc)e:{switch(n){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Da?Lp(n,s)&&(Oe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Oe="onCompositionStart");Oe&&(Rp&&s.locale!=="ko"&&(Da||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Da&&(Ee=Tp()):(gr=H,Yc="value"in gr?gr.value:gr.textContent,Da=!0)),le=ul(U,Oe),0<le.length&&(Oe=new Ap(Oe,n,null,s,H),Y.push({event:Oe,listeners:le}),Ee?Oe.data=Ee:(Ee=Mp(s),Ee!==null&&(Oe.data=Ee)))),(Ee=a2?i2(n,s):s2(n,s))&&(Oe=ul(U,"onBeforeInput"),0<Oe.length&&(le=new Ap("onBeforeInput","beforeinput",null,s,H),Y.push({event:le,listeners:Oe}),le.data=Ee)),J2(Y,n,U,s,H)}b0(Y,r)})}function ms(n,r,s){return{instance:n,listener:r,currentTarget:s}}function ul(n,r){for(var s=r+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=zi(n,s),f!=null&&l.unshift(ms(n,f,m)),f=zi(n,r),f!=null&&l.push(ms(n,f,m))),n.tag===3)return l;n=n.return}return[]}function t5(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function w0(n,r,s,l,f){for(var m=r._reactName,b=[];s!==null&&s!==l;){var k=s,A=k.alternate,U=k.stateNode;if(k=k.tag,A!==null&&A===l)break;k!==5&&k!==26&&k!==27||U===null||(A=U,f?(U=zi(s,m),U!=null&&b.unshift(ms(s,U,A))):f||(U=zi(s,m),U!=null&&b.push(ms(s,U,A)))),s=s.return}b.length!==0&&n.push({event:r,listeners:b})}var n5=/\r\n?/g,r5=/\u0000|\uFFFD/g;function S0(n){return(typeof n=="string"?n:""+n).replace(n5,`
`).replace(r5,"")}function j0(n,r){return r=S0(r),S0(n)===r}function He(n,r,s,l,f,m){switch(s){case"children":typeof l=="string"?r==="body"||r==="textarea"&&l===""||Na(n,l):(typeof l=="number"||typeof l=="bigint")&&r!=="body"&&Na(n,""+l);break;case"className":po(n,"class",l);break;case"tabIndex":po(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":po(n,s,l);break;case"style":jp(n,l,m);break;case"data":if(r!=="object"){po(n,"data",l);break}case"src":case"href":if(l===""&&(r!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=go(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(r!=="input"&&He(n,r,"name",f.name,f,null),He(n,r,"formEncType",f.formEncType,f,null),He(n,r,"formMethod",f.formMethod,f,null),He(n,r,"formTarget",f.formTarget,f,null)):(He(n,r,"encType",f.encType,f,null),He(n,r,"method",f.method,f,null),He(n,r,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=go(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=qn);break;case"onScroll":l!=null&&Ne("scroll",n);break;case"onScrollEnd":l!=null&&Ne("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=go(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":Ne("beforetoggle",n),Ne("toggle",n),fo(n,"popover",l);break;case"xlinkActuate":In(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":In(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":In(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":In(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":In(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":In(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":In(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":In(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":In(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fo(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Rw.get(s)||s,fo(n,s,l))}}function Ad(n,r,s,l,f,m){switch(s){case"style":jp(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(i(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(i(60));n.innerHTML=s}}break;case"children":typeof l=="string"?Na(n,l):(typeof l=="number"||typeof l=="bigint")&&Na(n,""+l);break;case"onScroll":l!=null&&Ne("scroll",n);break;case"onScrollEnd":l!=null&&Ne("scrollend",n);break;case"onClick":l!=null&&(n.onclick=qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pp.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),r=s.slice(2,f?s.length-7:void 0),m=n[Lt]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(r,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(r,l,f);break e}s in n?n[s]=l:l===!0?n.setAttribute(s,""):fo(n,s,l)}}}function jt(n,r,s){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ne("error",n),Ne("load",n);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:He(n,r,m,b,s,null)}}f&&He(n,r,"srcSet",s.srcSet,s,null),l&&He(n,r,"src",s.src,s,null);return;case"input":Ne("invalid",n);var k=m=b=f=null,A=null,U=null;for(l in s)if(s.hasOwnProperty(l)){var H=s[l];if(H!=null)switch(l){case"name":f=H;break;case"type":b=H;break;case"checked":A=H;break;case"defaultChecked":U=H;break;case"value":m=H;break;case"defaultValue":k=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(i(137,r));break;default:He(n,r,l,H,s,null)}}bp(n,m,k,A,U,b,f,!1);return;case"select":Ne("invalid",n),l=b=m=null;for(f in s)if(s.hasOwnProperty(f)&&(k=s[f],k!=null))switch(f){case"value":m=k;break;case"defaultValue":b=k;break;case"multiple":l=k;default:He(n,r,f,k,s,null)}r=m,s=b,n.multiple=!!l,r!=null?Aa(n,!!l,r,!1):s!=null&&Aa(n,!!l,s,!0);return;case"textarea":Ne("invalid",n),m=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(k=s[b],k!=null))switch(b){case"value":l=k;break;case"defaultValue":f=k;break;case"children":m=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(i(91));break;default:He(n,r,b,k,s,null)}wp(n,l,f,m);return;case"option":for(A in s)if(s.hasOwnProperty(A)&&(l=s[A],l!=null))switch(A){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(n,r,A,l,s,null)}return;case"dialog":Ne("beforetoggle",n),Ne("toggle",n),Ne("cancel",n),Ne("close",n);break;case"iframe":case"object":Ne("load",n);break;case"video":case"audio":for(l=0;l<ps.length;l++)Ne(ps[l],n);break;case"image":Ne("error",n),Ne("load",n);break;case"details":Ne("toggle",n);break;case"embed":case"source":case"link":Ne("error",n),Ne("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(l=s[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,r));default:He(n,r,U,l,s,null)}return;default:if(Ic(r)){for(H in s)s.hasOwnProperty(H)&&(l=s[H],l!==void 0&&Ad(n,r,H,l,s,void 0));return}}for(k in s)s.hasOwnProperty(k)&&(l=s[k],l!=null&&He(n,r,k,l,s,null))}function a5(n,r,s,l){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,k=null,A=null,U=null,H=null;for(V in s){var Y=s[V];if(s.hasOwnProperty(V)&&Y!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":A=Y;default:l.hasOwnProperty(V)||He(n,r,V,null,l,Y)}}for(var B in l){var V=l[B];if(Y=s[B],l.hasOwnProperty(B)&&(V!=null||Y!=null))switch(B){case"type":m=V;break;case"name":f=V;break;case"checked":U=V;break;case"defaultChecked":H=V;break;case"value":b=V;break;case"defaultValue":k=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(i(137,r));break;default:V!==Y&&He(n,r,B,V,l,Y)}}Hc(n,b,k,A,U,H,m,f);return;case"select":V=b=k=B=null;for(m in s)if(A=s[m],s.hasOwnProperty(m)&&A!=null)switch(m){case"value":break;case"multiple":V=A;default:l.hasOwnProperty(m)||He(n,r,m,null,l,A)}for(f in l)if(m=l[f],A=s[f],l.hasOwnProperty(f)&&(m!=null||A!=null))switch(f){case"value":B=m;break;case"defaultValue":k=m;break;case"multiple":b=m;default:m!==A&&He(n,r,f,m,l,A)}r=k,s=b,l=V,B!=null?Aa(n,!!s,B,!1):!!l!=!!s&&(r!=null?Aa(n,!!s,r,!0):Aa(n,!!s,s?[]:"",!1));return;case"textarea":V=B=null;for(k in s)if(f=s[k],s.hasOwnProperty(k)&&f!=null&&!l.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:He(n,r,k,null,l,f)}for(b in l)if(f=l[b],m=s[b],l.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":B=f;break;case"defaultValue":V=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(i(91));break;default:f!==m&&He(n,r,b,f,l,m)}xp(n,B,V);return;case"option":for(var ie in s)if(B=s[ie],s.hasOwnProperty(ie)&&B!=null&&!l.hasOwnProperty(ie))switch(ie){case"selected":n.selected=!1;break;default:He(n,r,ie,null,l,B)}for(A in l)if(B=l[A],V=s[A],l.hasOwnProperty(A)&&B!==V&&(B!=null||V!=null))switch(A){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:He(n,r,A,B,l,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ye in s)B=s[ye],s.hasOwnProperty(ye)&&B!=null&&!l.hasOwnProperty(ye)&&He(n,r,ye,null,l,B);for(U in l)if(B=l[U],V=s[U],l.hasOwnProperty(U)&&B!==V&&(B!=null||V!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(i(137,r));break;default:He(n,r,U,B,l,V)}return;default:if(Ic(r)){for(var $e in s)B=s[$e],s.hasOwnProperty($e)&&B!==void 0&&!l.hasOwnProperty($e)&&Ad(n,r,$e,void 0,l,B);for(H in l)B=l[H],V=s[H],!l.hasOwnProperty(H)||B===V||B===void 0&&V===void 0||Ad(n,r,H,B,l,V);return}}for(var M in s)B=s[M],s.hasOwnProperty(M)&&B!=null&&!l.hasOwnProperty(M)&&He(n,r,M,null,l,B);for(Y in l)B=l[Y],V=s[Y],!l.hasOwnProperty(Y)||B===V||B==null&&V==null||He(n,r,Y,B,l,V)}function k0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function i5(){if(typeof performance.getEntriesByType=="function"){for(var n=0,r=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,b=f.initiatorType,k=f.duration;if(m&&k&&k0(b)){for(b=0,k=f.responseEnd,l+=1;l<s.length;l++){var A=s[l],U=A.startTime;if(U>k)break;var H=A.transferSize,Y=A.initiatorType;H&&k0(Y)&&(A=A.responseEnd,b+=H*(A<k?1:(k-U)/(A-U)))}if(--l,r+=8*(m+b)/(f.duration/1e3),n++,10<n)break}}if(0<n)return r/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Nd=null,Rd=null;function dl(n){return n.nodeType===9?n:n.ownerDocument}function _0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(n,r){if(n===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&r==="foreignObject"?0:n}function Od(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Dd=null;function s5(){var n=window.event;return n&&n.type==="popstate"?n===Dd?!1:(Dd=n,!0):(Dd=null,!1)}var E0=typeof setTimeout=="function"?setTimeout:void 0,o5=typeof clearTimeout=="function"?clearTimeout:void 0,C0=typeof Promise=="function"?Promise:void 0,l5=typeof queueMicrotask=="function"?queueMicrotask:typeof C0<"u"?function(n){return C0.resolve(null).then(n).catch(c5)}:E0;function c5(n){setTimeout(function(){throw n})}function Dr(n){return n==="head"}function A0(n,r){var s=r,l=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){n.removeChild(f),oi(r);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")gs(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,gs(s);for(var m=s.firstChild;m;){var b=m.nextSibling,k=m.nodeName;m[Li]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=b}}else s==="body"&&gs(n.ownerDocument.body);s=f}while(s);oi(r)}function N0(n,r){var s=n;n=0;do{var l=s.nextSibling;if(s.nodeType===1?r?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(r?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=l}while(s)}function Ld(n){var r=n.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var s=r;switch(r=r.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ld(s),Pc(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function u5(n,r,s,l){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==r.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Li])switch(r){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(r==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=fn(n.nextSibling),n===null)break}return null}function d5(n,r,s){if(r==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=fn(n.nextSibling),n===null))return null;return n}function R0(n,r){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!r||(n=fn(n.nextSibling),n===null))return null;return n}function Md(n){return n.data==="$?"||n.data==="$~"}function zd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function h5(n,r){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=r;else if(n.data!=="$?"||s.readyState!=="loading")r();else{var l=function(){r(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function fn(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?"||r==="$~"||r==="&"||r==="F!"||r==="F")break;if(r==="/$"||r==="/&")return null}}return n}var Ud=null;function O0(n){n=n.nextSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(r===0)return fn(n.nextSibling);r--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||r++}n=n.nextSibling}return null}function D0(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(r===0)return n;r--}else s!=="/$"&&s!=="/&"||r++}n=n.previousSibling}return null}function L0(n,r,s){switch(r=dl(s),n){case"html":if(n=r.documentElement,!n)throw Error(i(452));return n;case"head":if(n=r.head,!n)throw Error(i(453));return n;case"body":if(n=r.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function gs(n){for(var r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Pc(n)}var pn=new Map,M0=new Set;function hl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var sr=$.d;$.d={f:f5,r:p5,D:m5,C:g5,L:y5,m:v5,X:x5,S:b5,M:w5};function f5(){var n=sr.f(),r=rl();return n||r}function p5(n){var r=Ta(n);r!==null&&r.tag===5&&r.type==="form"?Qm(r):sr.r(n)}var ai=typeof document>"u"?null:document;function z0(n,r,s){var l=ai;if(l&&typeof r=="string"&&r){var f=sn(r);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),M0.has(f)||(M0.add(f),n={rel:n,crossOrigin:s,href:r},l.querySelector(f)===null&&(r=l.createElement("link"),jt(r,"link",n),gt(r),l.head.appendChild(r)))}}function m5(n){sr.D(n),z0("dns-prefetch",n,null)}function g5(n,r){sr.C(n,r),z0("preconnect",n,r)}function y5(n,r,s){sr.L(n,r,s);var l=ai;if(l&&n&&r){var f='link[rel="preload"][as="'+sn(r)+'"]';r==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+sn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+sn(s.imageSizes)+'"]')):f+='[href="'+sn(n)+'"]';var m=f;switch(r){case"style":m=ii(n);break;case"script":m=si(n)}pn.has(m)||(n=v({rel:"preload",href:r==="image"&&s&&s.imageSrcSet?void 0:n,as:r},s),pn.set(m,n),l.querySelector(f)!==null||r==="style"&&l.querySelector(ys(m))||r==="script"&&l.querySelector(vs(m))||(r=l.createElement("link"),jt(r,"link",n),gt(r),l.head.appendChild(r)))}}function v5(n,r){sr.m(n,r);var s=ai;if(s&&n){var l=r&&typeof r.as=="string"?r.as:"script",f='link[rel="modulepreload"][as="'+sn(l)+'"][href="'+sn(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=si(n)}if(!pn.has(m)&&(n=v({rel:"modulepreload",href:n},r),pn.set(m,n),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(vs(m)))return}l=s.createElement("link"),jt(l,"link",n),gt(l),s.head.appendChild(l)}}}function b5(n,r,s){sr.S(n,r,s);var l=ai;if(l&&n){var f=Ea(l).hoistableStyles,m=ii(n);r=r||"default";var b=f.get(m);if(!b){var k={loading:0,preload:null};if(b=l.querySelector(ys(m)))k.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":r},s),(s=pn.get(m))&&Bd(n,s);var A=b=l.createElement("link");gt(A),jt(A,"link",n),A._p=new Promise(function(U,H){A.onload=U,A.onerror=H}),A.addEventListener("load",function(){k.loading|=1}),A.addEventListener("error",function(){k.loading|=2}),k.loading|=4,fl(b,r,l)}b={type:"stylesheet",instance:b,count:1,state:k},f.set(m,b)}}}function x5(n,r){sr.X(n,r);var s=ai;if(s&&n){var l=Ea(s).hoistableScripts,f=si(n),m=l.get(f);m||(m=s.querySelector(vs(f)),m||(n=v({src:n,async:!0},r),(r=pn.get(f))&&Pd(n,r),m=s.createElement("script"),gt(m),jt(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function w5(n,r){sr.M(n,r);var s=ai;if(s&&n){var l=Ea(s).hoistableScripts,f=si(n),m=l.get(f);m||(m=s.querySelector(vs(f)),m||(n=v({src:n,async:!0,type:"module"},r),(r=pn.get(f))&&Pd(n,r),m=s.createElement("script"),gt(m),jt(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function U0(n,r,s,l){var f=(f=je.current)?hl(f):null;if(!f)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(r=ii(s.href),s=Ea(f).hoistableStyles,l=s.get(r),l||(l={type:"style",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ii(s.href);var m=Ea(f).hoistableStyles,b=m.get(n);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=f.querySelector(ys(n)))&&!m._p&&(b.instance=m,b.state.loading=5),pn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pn.set(n,s),m||S5(f,n,s,b.state))),r&&l===null)throw Error(i(528,""));return b}if(r&&l!==null)throw Error(i(529,""));return null;case"script":return r=s.async,s=s.src,typeof s=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=si(s),s=Ea(f).hoistableScripts,l=s.get(r),l||(l={type:"script",instance:null,count:0,state:null},s.set(r,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function ii(n){return'href="'+sn(n)+'"'}function ys(n){return'link[rel="stylesheet"]['+n+"]"}function B0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function S5(n,r,s,l){n.querySelector('link[rel="preload"][as="style"]['+r+"]")?l.loading=1:(r=n.createElement("link"),l.preload=r,r.addEventListener("load",function(){return l.loading|=1}),r.addEventListener("error",function(){return l.loading|=2}),jt(r,"link",s),gt(r),n.head.appendChild(r))}function si(n){return'[src="'+sn(n)+'"]'}function vs(n){return"script[async]"+n}function P0(n,r,s){if(r.count++,r.instance===null)switch(r.type){case"style":var l=n.querySelector('style[data-href~="'+sn(s.href)+'"]');if(l)return r.instance=l,gt(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),gt(l),jt(l,"style",f),fl(l,s.precedence,n),r.instance=l;case"stylesheet":f=ii(s.href);var m=n.querySelector(ys(f));if(m)return r.state.loading|=4,r.instance=m,gt(m),m;l=B0(s),(f=pn.get(f))&&Bd(l,f),m=(n.ownerDocument||n).createElement("link"),gt(m);var b=m;return b._p=new Promise(function(k,A){b.onload=k,b.onerror=A}),jt(m,"link",l),r.state.loading|=4,fl(m,s.precedence,n),r.instance=m;case"script":return m=si(s.src),(f=n.querySelector(vs(m)))?(r.instance=f,gt(f),f):(l=s,(f=pn.get(m))&&(l=v({},s),Pd(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),gt(f),jt(f,"link",l),n.head.appendChild(f),r.instance=f);case"void":return null;default:throw Error(i(443,r.type))}else r.type==="stylesheet"&&(r.state.loading&4)===0&&(l=r.instance,r.state.loading|=4,fl(l,s.precedence,n));return r.instance}function fl(n,r,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,b=0;b<l.length;b++){var k=l[b];if(k.dataset.precedence===r)m=k;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(r=s.nodeType===9?s.head:s,r.insertBefore(n,r.firstChild))}function Bd(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.title==null&&(n.title=r.title)}function Pd(n,r){n.crossOrigin==null&&(n.crossOrigin=r.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=r.referrerPolicy),n.integrity==null&&(n.integrity=r.integrity)}var pl=null;function V0(n,r,s){if(pl===null){var l=new Map,f=pl=new Map;f.set(s,l)}else f=pl,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var m=s[f];if(!(m[Li]||m[bt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(r)||"";b=n+b;var k=l.get(b);k?k.push(m):l.set(b,[m])}}return l}function H0(n,r,s){n=n.ownerDocument||n,n.head.insertBefore(s,r==="title"?n.querySelector("head > title"):null)}function j5(n,r,s){if(s===1||r.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return n=r.disabled,typeof r.precedence=="string"&&n==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function $0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function k5(n,r,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=ii(l.href),m=r.querySelector(ys(f));if(m){r=m._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(n.count++,n=ml.bind(n),r.then(n,n)),s.state.loading|=4,s.instance=m,gt(m);return}m=r.ownerDocument||r,l=B0(l),(f=pn.get(f))&&Bd(l,f),m=m.createElement("link"),gt(m);var b=m;b._p=new Promise(function(k,A){b.onload=k,b.onerror=A}),jt(m,"link",l),s.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,r),(r=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=ml.bind(n),r.addEventListener("load",s),r.addEventListener("error",s))}}var Vd=0;function _5(n,r){return n.stylesheets&&n.count===0&&yl(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var l=setTimeout(function(){if(n.stylesheets&&yl(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+r);0<n.imgBytes&&Vd===0&&(Vd=62500*i5());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&yl(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Vd?50:800)+r);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function ml(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var gl=null;function yl(n,r){n.stylesheets=null,n.unsuspend!==null&&(n.count++,gl=new Map,r.forEach(T5,n),gl=null,ml.call(n))}function T5(n,r){if(!(r.state.loading&4)){var s=gl.get(n);if(s)var l=s.get(null);else{s=new Map,gl.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=r.instance,b=f.getAttribute("data-precedence"),m=s.get(b)||l,m===l&&s.set(null,f),s.set(b,f),this.count++,l=ml.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),r.state.loading|=4}}var bs={$$typeof:O,Provider:null,Consumer:null,_currentValue:ee,_currentValue2:ee,_threadCount:0};function E5(n,r,s,l,f,m,b,k,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.hiddenUpdates=Mc(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function I0(n,r,s,l,f,m,b,k,A,U,H,Y){return n=new E5(n,r,s,b,A,U,H,Y,k),r=1,m===!0&&(r|=24),m=Kt(3,null,null,r),n.current=m,m.stateNode=n,r=bu(),r.refCount++,n.pooledCache=r,r.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:r},ju(m),n}function q0(n){return n?(n=Ua,n):Ua}function F0(n,r,s,l,f,m){f=q0(f),l.context===null?l.context=f:l.pendingContext=f,l=Sr(r),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=jr(n,l,r),s!==null&&(Vt(s,n,r),Ji(s,n,r))}function G0(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function Hd(n,r){G0(n,r),(n=n.alternate)&&G0(n,r)}function K0(n){if(n.tag===13||n.tag===31){var r=Qr(n,67108864);r!==null&&Vt(r,n,67108864),Hd(n,67108864)}}function Y0(n){if(n.tag===13||n.tag===31){var r=Qt();r=zc(r);var s=Qr(n,r);s!==null&&Vt(s,n,r),Hd(n,r)}}var vl=!0;function C5(n,r,s,l){var f=E.T;E.T=null;var m=$.p;try{$.p=2,$d(n,r,s,l)}finally{$.p=m,E.T=f}}function A5(n,r,s,l){var f=E.T;E.T=null;var m=$.p;try{$.p=8,$d(n,r,s,l)}finally{$.p=m,E.T=f}}function $d(n,r,s,l){if(vl){var f=Id(l);if(f===null)Cd(n,r,l,bl,s),W0(n,l);else if(R5(f,n,r,s,l))l.stopPropagation();else if(W0(n,l),r&4&&-1<N5.indexOf(n)){for(;f!==null;){var m=Ta(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Kr(m.pendingLanes);if(b!==0){var k=m;for(k.pendingLanes|=2,k.entangledLanes|=2;b;){var A=1<<31-Ft(b);k.entanglements[1]|=A,b&=~A}Ln(m),(Ue&6)===0&&(tl=It()+500,fs(0))}}break;case 31:case 13:k=Qr(m,2),k!==null&&Vt(k,m,2),rl(),Hd(m,2)}if(m=Id(l),m===null&&Cd(n,r,l,bl,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Cd(n,r,l,null,s)}}function Id(n){return n=Fc(n),qd(n)}var bl=null;function qd(n){if(bl=null,n=_a(n),n!==null){var r=c(n);if(r===null)n=null;else{var s=r.tag;if(s===13){if(n=d(r),n!==null)return n;n=null}else if(s===31){if(n=h(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null)}}return bl=n,null}function X0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mw()){case rp:return 2;case ap:return 8;case oo:case gw:return 32;case ip:return 268435456;default:return 32}default:return 32}}var Fd=!1,Lr=null,Mr=null,zr=null,xs=new Map,ws=new Map,Ur=[],N5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function W0(n,r){switch(n){case"focusin":case"focusout":Lr=null;break;case"dragenter":case"dragleave":Mr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":xs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(r.pointerId)}}function Ss(n,r,s,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:r,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},r!==null&&(r=Ta(r),r!==null&&K0(r)),n):(n.eventSystemFlags|=l,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function R5(n,r,s,l,f){switch(r){case"focusin":return Lr=Ss(Lr,n,r,s,l,f),!0;case"dragenter":return Mr=Ss(Mr,n,r,s,l,f),!0;case"mouseover":return zr=Ss(zr,n,r,s,l,f),!0;case"pointerover":var m=f.pointerId;return xs.set(m,Ss(xs.get(m)||null,n,r,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ws.set(m,Ss(ws.get(m)||null,n,r,s,l,f)),!0}return!1}function J0(n){var r=_a(n.target);if(r!==null){var s=c(r);if(s!==null){if(r=s.tag,r===13){if(r=d(s),r!==null){n.blockedOn=r,dp(n.priority,function(){Y0(s)});return}}else if(r===31){if(r=h(s),r!==null){n.blockedOn=r,dp(n.priority,function(){Y0(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xl(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=Id(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);qc=l,s.target.dispatchEvent(l),qc=null}else return r=Ta(s),r!==null&&K0(r),n.blockedOn=s,!1;r.shift()}return!0}function Q0(n,r,s){xl(n)&&s.delete(r)}function O5(){Fd=!1,Lr!==null&&xl(Lr)&&(Lr=null),Mr!==null&&xl(Mr)&&(Mr=null),zr!==null&&xl(zr)&&(zr=null),xs.forEach(Q0),ws.forEach(Q0)}function wl(n,r){n.blockedOn===r&&(n.blockedOn=null,Fd||(Fd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,O5)))}var Sl=null;function Z0(n){Sl!==n&&(Sl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Sl===n&&(Sl=null);for(var r=0;r<n.length;r+=3){var s=n[r],l=n[r+1],f=n[r+2];if(typeof l!="function"){if(qd(l||s)===null)continue;break}var m=Ta(s);m!==null&&(n.splice(r,3),r-=3,Iu(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function oi(n){function r(A){return wl(A,n)}Lr!==null&&wl(Lr,n),Mr!==null&&wl(Mr,n),zr!==null&&wl(zr,n),xs.forEach(r),ws.forEach(r);for(var s=0;s<Ur.length;s++){var l=Ur[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ur.length&&(s=Ur[0],s.blockedOn===null);)J0(s),s.blockedOn===null&&Ur.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],b=f[Lt]||null;if(typeof m=="function")b||Z0(s);else if(b){var k=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Lt]||null)k=b.formAction;else if(qd(f)!==null)continue}else k=b.action;typeof k=="function"?s[l+1]=k:(s.splice(l,3),l-=3),Z0(s)}}}function ey(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function r(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",r),navigation.addEventListener("navigateerror",r),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",r),navigation.removeEventListener("navigateerror",r),f!==null&&(f(),f=null)}}}function Gd(n){this._internalRoot=n}jl.prototype.render=Gd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(i(409));var s=r.current,l=Qt();F0(s,l,n,r,null,null)},jl.prototype.unmount=Gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;F0(n.current,2,null,n,null,null),rl(),r[ka]=null}};function jl(n){this._internalRoot=n}jl.prototype.unstable_scheduleHydration=function(n){if(n){var r=up();n={blockedOn:null,target:n,priority:r};for(var s=0;s<Ur.length&&r!==0&&r<Ur[s].priority;s++);Ur.splice(s,0,n),s===0&&J0(n)}};var ty=e.version;if(ty!=="19.2.7")throw Error(i(527,ty,"19.2.7"));$.findDOMNode=function(n){var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=g(r),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var D5={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Ri=kl.inject(D5),qt=kl}catch{}}return ks.createRoot=function(n,r){if(!o(n))throw Error(i(299));var s=!1,l="",f=lg,m=cg,b=ug;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(l=r.identifierPrefix),r.onUncaughtError!==void 0&&(f=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(b=r.onRecoverableError)),r=I0(n,1,!1,null,null,s,l,null,f,m,b,ey),n[ka]=r.current,Ed(n),new Gd(r)},ks.hydrateRoot=function(n,r,s){if(!o(n))throw Error(i(299));var l=!1,f="",m=lg,b=cg,k=ug,A=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(k=s.onRecoverableError),s.formState!==void 0&&(A=s.formState)),r=I0(n,1,!0,r,s??null,l,f,A,m,b,k,ey),r.context=q0(null),s=r.current,l=Qt(),l=zc(l),f=Sr(l),f.callback=null,jr(s,f,l),s=l,r.current.lanes=s,Di(r,s),Ln(r),n[ka]=r.current,Ed(n),new jl(r)},ks.version="19.2.7",ks}var dy;function I5(){if(dy)return Xd.exports;dy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Xd.exports=$5(),Xd.exports}var q5=I5();const F5=Mb(q5);/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,zb=/^[\\/]{2}/;function G5(t,e){return e+t.replace(/\\/g,"/")}var hy="popstate";function fy(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function K5(t={}){function e(i,o){var g;let c=(g=o.state)==null?void 0:g.masked,{pathname:d,search:h,hash:p}=c||i.location;return Nh("",{pathname:d,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:i.location.pathname,search:i.location.search,hash:i.location.hash}:void 0)}function a(i,o){return typeof o=="string"?o:$s(o)}return X5(e,a,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function An(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Y5(){return Math.random().toString(36).substring(2,10)}function py(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Nh(t,e,a=null,i,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?ki(e):e,state:a,key:e&&e.key||i||Y5(),mask:o}}function $s({pathname:t="/",search:e="",hash:a=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function ki(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substring(a),t=t.substring(0,a));let i=t.indexOf("?");i>=0&&(e.search=t.substring(i),t=t.substring(0,i)),t&&(e.pathname=t)}return e}function X5(t,e,a,i={}){let{window:o=document.defaultView,v5Compat:c=!1}=i,d=o.history,h="POP",p=null,g=y();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function y(){return(d.state||{idx:null}).idx}function v(){h="POP";let C=y(),_=C==null?null:C-g;g=C,p&&p({action:h,location:T.location,delta:_})}function x(C,_){h="PUSH";let R=fy(C)?C:Nh(T.location,C,_);g=y()+1;let O=py(R,g),P=T.createHref(R.mask||R);try{d.pushState(O,"",P)}catch(X){if(X instanceof DOMException&&X.name==="DataCloneError")throw X;o.location.assign(P)}c&&p&&p({action:h,location:T.location,delta:1})}function w(C,_){h="REPLACE";let R=fy(C)?C:Nh(T.location,C,_);g=y();let O=py(R,g),P=T.createHref(R.mask||R);d.replaceState(O,"",P),c&&p&&p({action:h,location:T.location,delta:0})}function S(C){return W5(o,C)}let T={get action(){return h},get location(){return t(o,d)},listen(C){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(hy,v),p=C,()=>{o.removeEventListener(hy,v),p=null}},createHref(C){return e(o,C)},createURL:S,encodeLocation(C){let _=S(C);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:w,go(C){return d.go(C)}};return T}function W5(t,e,a=!1){let i="http://localhost";t&&(i=t.location.origin!=="null"?t.location.origin:t.location.href),We(i,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:$s(e);return o=o.replace(/ $/,"%20"),!a&&zb.test(o)&&(o=i+o),new URL(o,i)}function Ub(t,e,a="/"){return J5(t,e,a,!1)}function J5(t,e,a,i,o){let c=typeof e=="string"?ki(e):e,d=fr(c.pathname||"/",a);if(d==null)return null;let h=Q5(t),p=null,g=cS(d);for(let y=0;p==null&&y<h.length;++y)p=lS(h[y],g,i);return p}function Q5(t){let e=Bb(t);return Z5(e),e}function Bb(t,e=[],a=[],i="",o=!1){let c=(d,h,p=o,g)=>{let y={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(i)&&p)return;We(y.relativePath.startsWith(i),`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(i.length)}let v=En([i,y.relativePath]),x=a.concat(y);d.children&&d.children.length>0&&(We(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),Bb(d.children,e,x,v,p)),!(d.path==null&&!d.index)&&e.push({path:v,score:sS(v,d.index),routesMeta:x.map((w,S)=>{let[T,C]=Hb(w.relativePath,w.caseSensitive,S===x.length-1);return{...w,matcher:T,compiledParams:C}})})};return t.forEach((d,h)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))c(d,h);else for(let g of Pb(d.path))c(d,h,!0,g)}),e}function Pb(t){let e=t.split("/");if(e.length===0)return[];let[a,...i]=e,o=a.endsWith("?"),c=a.replace(/\?$/,"");if(i.length===0)return o?[c,""]:[c];let d=Pb(i.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),o&&h.push(...d),h.map(p=>t.startsWith("/")&&p===""?"/":p)}function Z5(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:oS(e.routesMeta.map(i=>i.childrenIndex),a.routesMeta.map(i=>i.childrenIndex)))}var eS=/^:[\w-]+$/,tS=3,nS=2,rS=1,aS=10,iS=-2,my=t=>t==="*";function sS(t,e){let a=t.split("/"),i=a.length;return a.some(my)&&(i+=iS),e&&(i+=nS),a.filter(o=>!my(o)).reduce((o,c)=>o+(eS.test(c)?tS:c===""?rS:aS),i)}function oS(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function lS(t,e,a=!1){let{routesMeta:i}=t,o={},c="/",d=[];for(let h=0;h<i.length;++h){let p=i[h],g=h===i.length-1,y=c==="/"?e:e.slice(c.length)||"/",v={path:p.relativePath,caseSensitive:p.caseSensitive,end:g},x=p.matcher&&p.compiledParams?Vb(v,y,p.matcher,p.compiledParams):Jl(v,y),w=p.route;if(!x&&g&&a&&!i[i.length-1].route.index&&(x=Jl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:En([c,x.pathname]),pathnameBase:hS(En([c,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(c=En([c,x.pathnameBase]))}return d}function Jl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,i]=Hb(t.path,t.caseSensitive,t.end);return Vb(t,e,a,i)}function Vb(t,e,a,i){let o=e.match(a);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((g,{paramName:y,isOptional:v},x)=>{if(y==="*"){let S=h[x]||"";d=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const w=h[x];return v&&!w?g[y]=void 0:g[y]=(w||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:d,pattern:t}}function Hb(t,e=!1,a=!0){An(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p,g,y)=>{if(i.push({paramName:h,isOptional:p!=null}),p){let v=y.charAt(g+d.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function cS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return An(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function fr(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,i=t.charAt(a);return i&&i!=="/"?null:t.slice(a)||"/"}function uS(t,e="/"){let{pathname:a,search:i="",hash:o=""}=typeof t=="string"?ki(t):t,c;return a?(a=$b(a),a.startsWith("/")?c=gy(a.substring(1),"/"):c=gy(a,e)):c=e,{pathname:c,search:fS(i),hash:pS(o)}}function gy(t,e){let a=Ql(e).split("/");return t.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function Zd(t,e,a,i){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function dS(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function yf(t){let e=dS(t);return e.map((a,i)=>i===e.length-1?a.pathname:a.pathnameBase)}function vc(t,e,a,i=!1){let o;typeof t=="string"?o=ki(t):(o={...t},We(!o.pathname||!o.pathname.includes("?"),Zd("?","pathname","search",o)),We(!o.pathname||!o.pathname.includes("#"),Zd("#","pathname","hash",o)),We(!o.search||!o.search.includes("#"),Zd("#","search","hash",o)));let c=t===""||o.pathname==="",d=c?"/":o.pathname,h;if(d==null)h=a;else{let v=e.length-1;if(!i&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}h=v>=0?e[v]:"/"}let p=uS(o,h),g=d&&d!=="/"&&d.endsWith("/"),y=(c||d===".")&&a.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var $b=t=>t.replace(/[\\/]{2,}/g,"/"),En=t=>$b(t.join("/")),Ql=t=>t.replace(/\/+$/,""),hS=t=>Ql(t).replace(/^\/*/,"/"),fS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,mS=class{constructor(t,e,a,i=!1){this.status=t,this.statusText=e||"",this.internal=i,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function gS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function yS(t){let e=t.map(a=>a.route.path).filter(Boolean);return En(e)||"/"}var Ib=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function qb(t,e){let a=t;if(typeof a!="string"||!gf.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let i=a,o=!1;if(Ib)try{let c=new URL(window.location.href),d=zb.test(a)?new URL(G5(a,c.protocol)):new URL(a),h=fr(d.pathname,e);d.origin===c.origin&&h!=null?a=h+d.search+d.hash:o=!0}catch{An(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:i,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Fb=["POST","PUT","PATCH","DELETE"];new Set(Fb);var vS=["GET",...Fb];new Set(vS);var bS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function xS(t){try{return bS.includes(new URL(t).protocol)}catch{return!1}}var _i=j.createContext(null);_i.displayName="DataRouter";var bc=j.createContext(null);bc.displayName="DataRouterState";var Gb=j.createContext(!1);function wS(){return j.useContext(Gb)}var Kb=j.createContext({isTransitioning:!1});Kb.displayName="ViewTransition";var SS=j.createContext(new Map);SS.displayName="Fetchers";var jS=j.createContext(null);jS.displayName="Await";var nn=j.createContext(null);nn.displayName="Navigation";var eo=j.createContext(null);eo.displayName="Location";var Nn=j.createContext({outlet:null,matches:[],isDataRoute:!1});Nn.displayName="Route";var vf=j.createContext(null);vf.displayName="RouteError";var Yb="REACT_ROUTER_ERROR",kS="REDIRECT",_S="ROUTE_ERROR_RESPONSE";function TS(t){if(t.startsWith(`${Yb}:${kS}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function ES(t){if(t.startsWith(`${Yb}:${_S}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new mS(e.status,e.statusText,e.data)}catch{}}function CS(t,{relative:e}={}){We(Ti(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:i}=j.useContext(nn),{hash:o,pathname:c,search:d}=to(t,{relative:e}),h=c;return a!=="/"&&(h=c==="/"?a:En([a,c])),i.createHref({pathname:h,search:d,hash:o})}function Ti(){return j.useContext(eo)!=null}function Dt(){return We(Ti(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(eo).location}var Xb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Wb(t){j.useContext(nn).static||j.useLayoutEffect(t)}function rn(){let{isDataRoute:t}=j.useContext(Nn);return t?$S():AS()}function AS(){We(Ti(),"useNavigate() may be used only in the context of a <Router> component.");let t=j.useContext(_i),{basename:e,navigator:a}=j.useContext(nn),{matches:i}=j.useContext(Nn),{pathname:o}=Dt(),c=JSON.stringify(yf(i)),d=j.useRef(!1);return Wb(()=>{d.current=!0}),j.useCallback((p,g={})=>{if(An(d.current,Xb),!d.current)return;if(typeof p=="number"){a.go(p);return}let y=vc(p,JSON.parse(c),o,g.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:En([e,y.pathname])),(g.replace?a.replace:a.push)(y,g.state,g)},[e,a,c,o,t])}j.createContext(null);function NS(){let{matches:t}=j.useContext(Nn),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function to(t,{relative:e}={}){let{matches:a}=j.useContext(Nn),{pathname:i}=Dt(),o=JSON.stringify(yf(a));return j.useMemo(()=>vc(t,JSON.parse(o),i,e==="path"),[t,o,i,e])}function RS(t,e){return Jb(t,e)}function Jb(t,e,a){var C;We(Ti(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:i}=j.useContext(nn),{matches:o}=j.useContext(Nn),c=o[o.length-1],d=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",g=c&&c.route;{let _=g&&g.path||"";Zb(h,!g||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let y=Dt(),v;if(e){let _=typeof e=="string"?ki(e):e;We(p==="/"||((C=_.pathname)==null?void 0:C.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=y;let x=v.pathname||"/",w=x;if(p!=="/"){let _=p.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let S=a&&a.state.matches.length?a.state.matches.map(_=>Object.assign(_,{route:a.manifest[_.route.id]||_.route})):Ub(t,{pathname:w});An(g||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),An(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=zS(S&&S.map(_=>Object.assign({},_,{params:Object.assign({},d,_.params),pathname:En([p,i.encodeLocation?i.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?p:En([p,i.encodeLocation?i.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,a);return e&&T?j.createElement(eo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},T):T}function OS(){let t=HS(),e=gS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:i},c={padding:"2px 4px",backgroundColor:i},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),a?j.createElement("pre",{style:o},a):null,d)}var DS=j.createElement(OS,null),Qb=class extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=ES(t.digest);a&&(t=a)}let e=t!==void 0?j.createElement(Nn.Provider,{value:this.props.routeContext},j.createElement(vf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?j.createElement(LS,{error:t},e):e}};Qb.contextType=Gb;var eh=new WeakMap;function LS({children:t,error:e}){let{basename:a}=j.useContext(nn);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let i=TS(e.digest);if(i){let o=eh.get(e);if(o)throw o;let c=qb(i.location,a),d=c.absoluteURL||c.to;if(xS(d))throw new Error("Invalid redirect location");if(Ib&&!eh.get(e))if(c.isExternal||i.reloadDocument)window.location.href=d;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:i.replace}));throw eh.set(e,h),h}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d}`})}}return t}function MS({routeContext:t,match:e,children:a}){let i=j.useContext(_i);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Nn.Provider,{value:t},a)}function zS(t,e=[],a){let i=a==null?void 0:a.state;if(t==null){if(!i)return null;if(i.errors)t=i.matches;else if(e.length===0&&!i.initialized&&i.matches.length>0)t=i.matches;else return null}let o=t,c=i==null?void 0:i.errors;if(c!=null){let y=o.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);We(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let d=!1,h=-1;if(a&&i){d=i.renderFallback;for(let y=0;y<o.length;y++){let v=o[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=y),v.route.id){let{loaderData:x,errors:w}=i,S=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!w||w[v.route.id]===void 0);if(v.route.lazy||S){a.isStatic&&(d=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let p=a==null?void 0:a.onError,g=i&&p?(y,v)=>{var x,w;p(y,{location:i.location,params:((w=(x=i.matches)==null?void 0:x[0])==null?void 0:w.params)??{},pattern:yS(i.matches),errorInfo:v})}:void 0;return o.reduceRight((y,v,x)=>{let w,S=!1,T=null,C=null;i&&(w=c&&v.route.id?c[v.route.id]:void 0,T=v.route.errorElement||DS,d&&(h<0&&x===0?(Zb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,C=null):h===x&&(S=!0,C=v.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,x+1)),R=()=>{let O;return w?O=T:S?O=C:v.route.Component?O=j.createElement(v.route.Component,null):v.route.element?O=v.route.element:O=y,j.createElement(MS,{match:v,routeContext:{outlet:y,matches:_,isDataRoute:i!=null},children:O})};return i&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?j.createElement(Qb,{location:i.location,revalidation:i.revalidation,component:T,error:w,children:R(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:g}):R()},null)}function bf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function US(t){let e=j.useContext(_i);return We(e,bf(t)),e}function BS(t){let e=j.useContext(bc);return We(e,bf(t)),e}function PS(t){let e=j.useContext(Nn);return We(e,bf(t)),e}function xf(t){let e=PS(t),a=e.matches[e.matches.length-1];return We(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function VS(){return xf("useRouteId")}function HS(){var i;let t=j.useContext(vf),e=BS("useRouteError"),a=xf("useRouteError");return t!==void 0?t:(i=e.errors)==null?void 0:i[a]}function $S(){let{router:t}=US("useNavigate"),e=xf("useNavigate"),a=j.useRef(!1);return Wb(()=>{a.current=!0}),j.useCallback(async(o,c={})=>{An(a.current,Xb),a.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:e,...c}))},[t,e])}var yy={};function Zb(t,e,a){!e&&!yy[t]&&(yy[t]=!0,An(!1,a))}j.memo(IS);function IS({routes:t,manifest:e,future:a,state:i,isStatic:o,onError:c}){return Jb(t,void 0,{manifest:e,state:i,isStatic:o,onError:c})}function qS({to:t,replace:e,state:a,relative:i}){We(Ti(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=j.useContext(nn);An(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=j.useContext(Nn),{pathname:d}=Dt(),h=rn(),p=vc(t,yf(c),d,i==="path"),g=JSON.stringify(p);return j.useEffect(()=>{h(JSON.parse(g),{replace:e,state:a,relative:i})},[h,g,i,e,a]),null}function At(t){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FS({basename:t="/",children:e=null,location:a,navigationType:i="POP",navigator:o,static:c=!1,useTransitions:d}){We(!Ti(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),p=j.useMemo(()=>({basename:h,navigator:o,static:c,useTransitions:d,future:{}}),[h,o,c,d]);typeof a=="string"&&(a=ki(a));let{pathname:g="/",search:y="",hash:v="",state:x=null,key:w="default",mask:S}=a,T=j.useMemo(()=>{let C=fr(g,h);return C==null?null:{location:{pathname:C,search:y,hash:v,state:x,key:w,mask:S},navigationType:i}},[h,g,y,v,x,w,i,S]);return An(T!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:j.createElement(nn.Provider,{value:p},j.createElement(eo.Provider,{children:e,value:T}))}function GS({children:t,location:e}){return RS(Rh(t),e)}function Rh(t,e=[]){let a=[];return j.Children.forEach(t,(i,o)=>{if(!j.isValidElement(i))return;let c=[...e,o];if(i.type===j.Fragment){a.push.apply(a,Rh(i.props.children,c));return}We(i.type===At,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!i.props.index||!i.props.children,"An index route cannot have child routes.");let d={id:i.props.id||c.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,middleware:i.props.middleware,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(d.children=Rh(i.props.children,c)),a.push(d)}),a}var Vl="get",Hl="application/x-www-form-urlencoded";function xc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function KS(t){return xc(t)&&t.tagName.toLowerCase()==="button"}function YS(t){return xc(t)&&t.tagName.toLowerCase()==="form"}function XS(t){return xc(t)&&t.tagName.toLowerCase()==="input"}function WS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function JS(t,e){return t.button===0&&(!e||e==="_self")&&!WS(t)}var _l=null;function QS(){if(_l===null)try{new FormData(document.createElement("form"),0),_l=!1}catch{_l=!0}return _l}var ZS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function th(t){return t!=null&&!ZS.has(t)?(An(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hl}"`),null):t}function ej(t,e){let a,i,o,c,d;if(YS(t)){let h=t.getAttribute("action");i=h?fr(h,e):null,a=t.getAttribute("method")||Vl,o=th(t.getAttribute("enctype"))||Hl,c=new FormData(t)}else if(KS(t)||XS(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||h.getAttribute("action");if(i=p?fr(p,e):null,a=t.getAttribute("formmethod")||h.getAttribute("method")||Vl,o=th(t.getAttribute("formenctype"))||th(h.getAttribute("enctype"))||Hl,c=new FormData(h,t),!QS()){let{name:g,type:y,value:v}=t;if(y==="image"){let x=g?`${g}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else g&&c.append(g,v)}}else{if(xc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Vl,i=null,o=Hl,d=t}return c&&o==="text/plain"&&(d=c,c=void 0),{action:i,method:a.toLowerCase(),encType:o,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ex(t,e,a,i){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${i}`:o.pathname=`${o.pathname}.${i}`:o.pathname==="/"?o.pathname=`_root.${i}`:e&&fr(o.pathname,e)==="/"?o.pathname=`${Ql(e)}/_root.${i}`:o.pathname=`${Ql(o.pathname)}.${i}`,o}async function tj(t,e){if(t.id in e)return e[t.id];try{let a=await import(t.module);return e[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function nj(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function rj(t,e,a){let i=await Promise.all(t.map(async o=>{let c=e.routes[o.route.id];if(c){let d=await tj(c,a);return d.links?d.links():[]}return[]}));return oj(i.flat(1).filter(nj).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function vy(t,e,a,i,o,c){let d=(p,g)=>a[g]?p.route.id!==a[g].route.id:!0,h=(p,g)=>{var y;return a[g].pathname!==p.pathname||((y=a[g].route.path)==null?void 0:y.endsWith("*"))&&a[g].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,g)=>d(p,g)||h(p,g)):c==="data"?e.filter((p,g)=>{var v;let y=i.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,g)||h(p,g))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=a[0])==null?void 0:v.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function aj(t,e,{includeHydrateFallback:a}={}){return ij(t.map(i=>{let o=e.routes[i.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function ij(t){return[...new Set(t)]}function sj(t){let e={},a=Object.keys(t).sort();for(let i of a)e[i]=t[i];return e}function oj(t,e){let a=new Set;return new Set(e),t.reduce((i,o)=>{let c=JSON.stringify(sj(o));return a.has(c)||(a.add(c),i.push({key:c,link:o})),i},[])}function Sf(){let t=j.useContext(_i);return wf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function lj(){let t=j.useContext(bc);return wf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var jf=j.createContext(void 0);jf.displayName="FrameworkContext";function wc(){let t=j.useContext(jf);return wf(t,"You must render this element inside a <HydratedRouter> element"),t}function cj(t,e){let a=j.useContext(jf),[i,o]=j.useState(!1),[c,d]=j.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=e,x=j.useRef(null);j.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let T=_=>{_.forEach(R=>{d(R.isIntersecting)})},C=new IntersectionObserver(T,{threshold:.5});return x.current&&C.observe(x.current),()=>{C.disconnect()}}},[t]),j.useEffect(()=>{if(i){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[i]);let w=()=>{o(!0)},S=()=>{o(!1),d(!1)};return a?t!=="intent"?[c,x,{}]:[c,x,{onFocus:_s(h,w),onBlur:_s(p,S),onMouseEnter:_s(g,w),onMouseLeave:_s(y,S),onTouchStart:_s(v,w)}]:[!1,x,{}]}function _s(t,e){return a=>{t&&t(a),a.defaultPrevented||e(a)}}function uj({page:t,...e}){let a=wS(),{nonce:i}=wc(),{router:o}=Sf(),c=j.useMemo(()=>Ub(o.routes,t,o.basename),[o.routes,t,o.basename]);return c?(e.nonce==null&&i&&(e={...e,nonce:i}),a?j.createElement(hj,{page:t,matches:c,...e}):j.createElement(fj,{page:t,matches:c,...e})):null}function dj(t){let{manifest:e,routeModules:a}=wc(),[i,o]=j.useState([]);return j.useEffect(()=>{let c=!1;return rj(t,e,a).then(d=>{c||o(d)}),()=>{c=!0}},[t,e,a]),i}function hj({page:t,matches:e,...a}){let i=Dt(),{future:o}=wc(),{basename:c}=Sf(),d=j.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let h=ex(t,c,o.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,g=[];for(let y of e)typeof y.route.shouldRevalidate=="function"?p=!0:g.push(y.route.id);return p&&g.length>0&&h.searchParams.set("_routes",g.join(",")),[h.pathname+h.search]},[c,o.v8_trailingSlashAwareDataRequests,t,i,e]);return j.createElement(j.Fragment,null,d.map(h=>j.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...a})))}function fj({page:t,matches:e,...a}){let i=Dt(),{future:o,manifest:c,routeModules:d}=wc(),{basename:h}=Sf(),{loaderData:p,matches:g}=lj(),y=j.useMemo(()=>vy(t,e,g,c,i,"data"),[t,e,g,c,i]),v=j.useMemo(()=>vy(t,e,g,c,i,"assets"),[t,e,g,c,i]),x=j.useMemo(()=>{if(t===i.pathname+i.search+i.hash)return[];let T=new Set,C=!1;if(e.forEach(R=>{var P;let O=c.routes[R.route.id];!O||!O.hasLoader||(!y.some(X=>X.route.id===R.route.id)&&R.route.id in p&&((P=d[R.route.id])!=null&&P.shouldRevalidate)||O.hasClientLoader?C=!0:T.add(R.route.id))}),T.size===0)return[];let _=ex(t,h,o.v8_trailingSlashAwareDataRequests,"data");return C&&T.size>0&&_.searchParams.set("_routes",e.filter(R=>T.has(R.route.id)).map(R=>R.route.id).join(",")),[_.pathname+_.search]},[h,o.v8_trailingSlashAwareDataRequests,p,i,c,y,e,t,d]),w=j.useMemo(()=>aj(v,c),[v,c]),S=dj(v);return j.createElement(j.Fragment,null,x.map(T=>j.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...a})),w.map(T=>j.createElement("link",{key:T,rel:"modulepreload",href:T,...a})),S.map(({key:T,link:C})=>j.createElement("link",{key:T,nonce:a.nonce,...C,crossOrigin:C.crossOrigin??a.crossOrigin})))}function pj(...t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var mj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{mj&&(window.__reactRouterVersion="7.18.0")}catch{}function gj({basename:t,children:e,useTransitions:a,window:i}){let o=j.useRef();o.current==null&&(o.current=K5({window:i,v5Compat:!0}));let c=o.current,[d,h]=j.useState({action:c.action,location:c.location}),p=j.useCallback(g=>{a===!1?h(g):j.startTransition(()=>h(g))},[a]);return j.useLayoutEffect(()=>c.listen(p),[c,p]),j.createElement(FS,{basename:t,children:e,location:d.location,navigationType:d.action,navigator:c,useTransitions:a})}var kf=j.forwardRef(function({onClick:e,discover:a="render",prefetch:i="none",relative:o,reloadDocument:c,replace:d,mask:h,state:p,target:g,to:y,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:w,...S},T){let{basename:C,navigator:_,useTransitions:R}=j.useContext(nn),O=typeof y=="string"&&gf.test(y),P=qb(y,C);y=P.to;let X=CS(y,{relative:o}),W=Dt(),G=null;if(h){let me=vc(h,[],W.mask?W.mask.pathname:"/",!0);C!=="/"&&(me.pathname=me.pathname==="/"?C:En([C,me.pathname])),G=_.createHref(me)}let[q,Z,re]=cj(i,S),xe=xj(y,{replace:d,mask:h,state:p,target:g,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:w,useTransitions:R});function pe(me){e&&e(me),me.defaultPrevented||xe(me)}let Ce=!(P.isExternal||c),Le=j.createElement("a",{...S,...re,href:(Ce?G:void 0)||P.absoluteURL||X,onClick:Ce?pe:e,ref:pj(T,Z),target:g,"data-discover":!O&&a==="render"?"true":void 0});return q&&!O?j.createElement(j.Fragment,null,Le,j.createElement(uj,{page:X})):Le});kf.displayName="Link";var yj=j.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:i="",end:o=!1,style:c,to:d,viewTransition:h,children:p,...g},y){let v=to(d,{relative:g.relative}),x=Dt(),w=j.useContext(bc),{navigator:S,basename:T}=j.useContext(nn),C=w!=null&&_j(v)&&h===!0,_=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,R=x.pathname,O=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(R=R.toLowerCase(),O=O?O.toLowerCase():null,_=_.toLowerCase()),O&&T&&(O=fr(O,T)||O);const P=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let X=R===_||!o&&R.startsWith(_)&&R.charAt(P)==="/",W=O!=null&&(O===_||!o&&O.startsWith(_)&&O.charAt(_.length)==="/"),G={isActive:X,isPending:W,isTransitioning:C},q=X?e:void 0,Z;typeof i=="function"?Z=i(G):Z=[i,X?"active":null,W?"pending":null,C?"transitioning":null].filter(Boolean).join(" ");let re=typeof c=="function"?c(G):c;return j.createElement(kf,{...g,"aria-current":q,className:Z,ref:y,style:re,to:d,viewTransition:h},typeof p=="function"?p(G):p)});yj.displayName="NavLink";var vj=j.forwardRef(({discover:t="render",fetcherKey:e,navigate:a,reloadDocument:i,replace:o,state:c,method:d=Vl,action:h,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x,...w},S)=>{let{useTransitions:T}=j.useContext(nn),C=jj(),_=kj(h,{relative:g}),R=d.toLowerCase()==="get"?"get":"post",O=typeof h=="string"&&gf.test(h),P=X=>{if(p&&p(X),X.defaultPrevented)return;X.preventDefault();let W=X.nativeEvent.submitter,G=(W==null?void 0:W.getAttribute("formmethod"))||d,q=()=>C(W||X.currentTarget,{fetcherKey:e,method:G,navigate:a,replace:o,state:c,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x});T&&a!==!1?j.startTransition(()=>q()):q()};return j.createElement("form",{ref:S,method:R,action:_,onSubmit:i?p:P,...w,"data-discover":!O&&t==="render"?"true":void 0})});vj.displayName="Form";function bj(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function tx(t){let e=j.useContext(_i);return We(e,bj(t)),e}function xj(t,{target:e,replace:a,mask:i,state:o,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p,useTransitions:g}={}){let y=rn(),v=Dt(),x=to(t,{relative:d});return j.useCallback(w=>{if(JS(w,e)){w.preventDefault();let S=a!==void 0?a:$s(v)===$s(x),T=()=>y(t,{replace:S,mask:i,state:o,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p});g?j.startTransition(()=>T()):T()}},[v,y,x,a,i,o,e,t,c,d,h,p,g])}var wj=0,Sj=()=>`__${String(++wj)}__`;function jj(){let{router:t}=tx("useSubmit"),{basename:e}=j.useContext(nn),a=VS(),i=t.fetch,o=t.navigate;return j.useCallback(async(c,d={})=>{let{action:h,method:p,encType:g,formData:y,body:v}=ej(c,e);if(d.navigate===!1){let x=d.fetcherKey||Sj();await i(x,a,d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||g,flushSync:d.flushSync})}else await o(d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||g,replace:d.replace,state:d.state,fromRouteId:a,flushSync:d.flushSync,viewTransition:d.viewTransition})},[i,o,e,a])}function kj(t,{relative:e}={}){let{basename:a}=j.useContext(nn),i=j.useContext(Nn);We(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),c={...to(t||".",{relative:e})},d=Dt();if(t==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let y=h.toString();c.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:En([a,c.pathname])),$s(c)}function _j(t,{relative:e}={}){let a=j.useContext(Kb);We(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=tx("useViewTransitionState"),o=to(t,{relative:e});if(!a.isTransitioning)return!1;let c=fr(a.currentLocation.pathname,i)||a.currentLocation.pathname,d=fr(a.nextLocation.pathname,i)||a.nextLocation.pathname;return Jl(o.pathname,d)!=null||Jl(o.pathname,c)!=null}function _f(){const t=rn(),a=Dt().pathname==="/",[i,o]=j.useState(!1),[c,d]=j.useState(!1),[h,p]=j.useState("");j.useEffect(()=>{const y=()=>o(window.scrollY>40);return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]),j.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(y=>{y.addEventListener("click",function(v){v.preventDefault();const x=document.querySelector(this.getAttribute("href"));x&&x.scrollIntoView({behavior:"smooth"})})})},[]);const g=()=>d(!1);return j.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[c]),j.useEffect(()=>{const y=v=>{v.key==="Escape"&&g()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:i?"scrolled":"",children:[u.jsx("div",{className:"logo",children:u.jsx("h1",{children:"FrameX"})}),u.jsx("ul",{children:a?u.jsxs(u.Fragment,{children:[u.jsx("li",{children:u.jsx("a",{href:"#features",onClick:g,children:"Features"})}),u.jsx("li",{children:u.jsx("a",{href:"#community",onClick:g,children:"Community"})}),u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:g,children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"#pricing",onClick:g,children:"Pricing"})})]}):u.jsx("li",{children:u.jsx(kf,{to:"/",className:"back-home-link",onClick:g,children:"← Back to Home"})})}),u.jsxs("div",{className:"nav-right",children:[a&&u.jsxs("div",{className:"auth-buttons",children:[u.jsx("button",{className:"login",onClick:()=>t("/login"),children:"Log In"}),u.jsx("button",{className:"get-started",onClick:()=>t("/login"),children:"Get Started"})]}),u.jsx("button",{className:"menu-toggle",onClick:()=>d(!c),"aria-label":"Toggle menu",children:u.jsx("i",{className:`menu-toggle-icon ${c?"fas fa-times":"fas fa-bars"}`})})]}),u.jsx("style",{children:`
        nav {
            position: fixed;
            top: 0;
            left: 16px;
            right: 16px;
            width: calc(100% - 32px);
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 5%;
            background: rgba(8, 8, 15, 0.25);
            backdrop-filter: blur(24px) saturate(180%);
            -webkit-backdrop-filter: blur(24px) saturate(180%);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            transition: background 0.3s ease;
        }

        nav.scrolled {
            background: rgba(8, 8, 15, 0.45);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo h1 {
            font-family: var(--font-display);
            font-size: 1.4rem;
            font-weight: 700;
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        nav ul {
            display: flex;
            gap: 2.5rem;
        }

        nav ul li a {
            font-size: 0.9rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 0.6);
            transition: color 0.3s ease;
            position: relative;
            letter-spacing: 0.02em;
        }

        nav ul li a::after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 0;
            height: 1.5px;
            background: var(--gradient-accent);
            transition: width 0.3s ease;
            border-radius: 2px;
        }

        nav ul li a:hover {
            color: #fff;
        }

        nav ul li a:hover::after {
            width: 100%;
        }

        .auth-buttons {
            display: flex;
            gap: 0.75rem;
        }

        .nav-right {
            display: flex;
            align-items: center;
            gap: 0.75rem;
        }

        .menu-toggle {
            display: none;
            width: 44px;
            height: 44px;
            align-items: center;
            justify-content: center;
            background: var(--color-glass);
            border: var(--glass-border);
            border-radius: 12px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.3rem;
            cursor: pointer;
            transition: all 0.3s ease;
            padding: 0;
            -webkit-tap-highlight-color: transparent;
            user-select: none;
        }

        .menu-toggle:hover {
            background: var(--color-glass-hover);
            color: #fff;
        }

        .menu-toggle:active {
            transform: scale(0.92);
        }

        .menu-toggle-icon {
            transition: transform 0.3s ease;
        }

        .menu-toggle-icon.fa-times {
            transform: rotate(90deg);
        }

        .login {
            padding: 0.5rem 1.5rem;
            background: var(--color-glass);
            color: rgba(255, 255, 255, 0.85);
            border: var(--glass-border);
            border-radius: 8px;
            font-size: 0.85rem;
            text-decoration: none;
            transition: all 0.3s ease;
        }

        .login:hover {
            background: var(--color-glass-hover);
            border-color: rgba(255, 255, 255, 0.2);
        }

        .signup,
        .get-started {
            padding: 0.5rem 1.5rem;
            background: var(--gradient-accent);
            color: #08080f;
            border-radius: 8px;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.3s ease;
        }

        .signup:hover,
        .get-started:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 20px rgba(204, 255, 0, 0.25);
        }

        @media (max-width: 968px) {
            nav ul {
                gap: 1.5rem;
            }
            nav ul li a {
                font-size: 0.8rem;
            }
            .auth-buttons .login,
            .auth-buttons .get-started {
                padding: 0.4rem 1rem;
                font-size: 0.78rem;
            }
            .logo h1 {
                font-size: 1.2rem;
            }
        }

        @media (max-width: 768px) {
            nav {
                padding: 0.7rem 5%;
            }
            nav ul {
                display: none;
            }
            .menu-toggle {
                display: flex;
            }

            /* Drawer backdrop — soft blur overlay */
            .mobile-backdrop {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.5);
                backdrop-filter: blur(8px) saturate(1.2);
                -webkit-backdrop-filter: blur(8px) saturate(1.2);
                z-index: 1001;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1);
            }
            .mobile-backdrop.active {
                opacity: 1;
                pointer-events: all;
            }

            /* Drawer panel — premium glass sidebar */
            .mobile-drawer {
                position: fixed;
                top: 0;
                right: 0;
                width: 82%;
                max-width: 380px;
                height: 100vh;
                height: 100dvh;
                background: rgba(12, 12, 24, 0.78);
                backdrop-filter: blur(32px) saturate(1.4);
                -webkit-backdrop-filter: blur(32px) saturate(1.4);
                border-left: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 24px 0 0 24px;
                z-index: 1002;
                transform: translateX(100%);
                opacity: 0;
                transition: transform 0.45s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.3s ease;
                display: flex;
                flex-direction: column;
                padding: 2rem 1.5rem;
                box-shadow: -10px 0 40px rgba(0, 0, 0, 0.4), -2px 0 60px rgba(204, 255, 0, 0.04);
            }
            .mobile-drawer.active {
                transform: translateX(0);
                opacity: 1;
            }

            /* Glowing left-edge accent on drawer */
            .mobile-drawer::before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 1px;
                height: 100%;
                background: linear-gradient(to bottom, transparent, rgba(204, 255, 0, 0.06), transparent);
            }

            /* Close button — glass capsule */
            .drawer-close {
                position: absolute;
                top: 1rem;
                right: 1.25rem;
                width: 44px;
                height: 44px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: rgba(255, 255, 255, 0.04);
                backdrop-filter: blur(16px);
                -webkit-backdrop-filter: blur(16px);
                border: 1px solid rgba(255, 255, 255, 0.08);
                border-radius: 14px;
                color: rgba(255, 255, 255, 0.5);
                font-size: 1.3rem;
                cursor: pointer;
                transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
                padding: 0;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
            }
            .drawer-close:hover {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
                transform: scale(1.08);
                box-shadow: 0 0 20px rgba(204, 255, 0, 0.06);
            }
            .drawer-close:active {
                transform: scale(0.92);
            }

            /* Menu items container */
            .drawer-menu-items {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                margin-top: 5rem;
            }

            /* Menu item links */
            .drawer-menu-items a {
                display: flex;
                align-items: center;
                min-height: 52px;
                padding: 0.75rem 1rem;
                font-size: 1.05rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.55);
                text-decoration: none;
                border-radius: 14px;
                transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
                letter-spacing: 0.04em;
                -webkit-tap-highlight-color: transparent;
            }
            .drawer-menu-items a:hover {
                color: #fff;
                background: rgba(255, 255, 255, 0.06);
                padding-left: 1.25rem;
            }
            .drawer-menu-items a:active {
                color: #fff;
                background: rgba(255, 255, 255, 0.08);
                transform: scale(0.97);
            }

            /* Active item — accent highlight */
            .drawer-menu-items a.active {
                color: var(--accent);
                background: rgba(204, 255, 0, 0.06);
            }
            .drawer-menu-items a.active::before {
                content: '';
                width: 3px;
                height: 24px;
                background: var(--accent);
                border-radius: 2px;
                margin-right: 0.75rem;
                flex-shrink: 0;
                box-shadow: 0 0 12px rgba(204, 255, 0, 0.3);
            }

            /* CTA button — gradient accent */
            .drawer-cta {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 52px;
                margin-top: 2rem;
                padding: 0.75rem 2rem;
                background: linear-gradient(135deg, var(--accent), #b8e600);
                color: #08080f !important;
                border-radius: 14px;
                font-size: 1.1rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
                -webkit-tap-highlight-color: transparent;
            }
            .drawer-cta:hover {
                transform: translateY(-2px);
                box-shadow: 0 8px 32px rgba(204, 255, 0, 0.25);
                background: linear-gradient(135deg, #d4ff1a, #c4e600);
            }
            .drawer-cta:active {
                transform: scale(0.97);
            }
        }

        @media (max-width: 480px) {
            .signup {
                display: none;
            }
        }
      `})]}),u.jsx("div",{className:`mobile-backdrop ${c?"active":""}`,onClick:g}),u.jsxs("div",{className:`mobile-drawer ${c?"active":""}`,children:[u.jsx("button",{className:"drawer-close",onClick:g,"aria-label":"Close menu",children:u.jsx("i",{className:"fas fa-times"})}),u.jsxs("div",{className:"drawer-menu-items",children:[u.jsx("a",{href:"#features",className:h==="features"?"active":"",onClick:()=>{p("features"),g()},children:"Features"}),u.jsx("a",{href:"#community",className:h==="community"?"active":"",onClick:()=>{p("community"),g()},children:"Community"}),u.jsx("a",{href:"#about",className:h==="about"?"active":"",onClick:()=>{p("about"),g()},children:"About"}),u.jsx("a",{href:"#pricing",className:h==="pricing"?"active":"",onClick:()=>{p("pricing"),g()},children:"Pricing"}),u.jsx("a",{href:"/login",className:"drawer-cta",onClick:g,children:"Get Started"})]})]})]})}function Tf(){return u.jsxs("footer",{children:[u.jsxs("div",{className:"footer-content",children:[u.jsxs("div",{className:"footer-logo",children:[u.jsx("div",{className:"logo-icon",children:"F"}),u.jsx("h2",{children:"FrameX"})]}),u.jsxs("div",{className:"footer-links",children:[u.jsx("a",{href:"#",children:"Privacy Policy"}),u.jsx("a",{href:"/terms",children:"Terms of Service"}),u.jsx("a",{href:"#",children:"Contact Us"})]})]}),u.jsx("div",{className:"footer-divider"}),u.jsx("p",{children:"© 2026 FrameX. All rights reserved."}),u.jsx("style",{children:`
        footer {
            padding: 3rem 5% 2rem;
            background: rgba(8, 8, 15, 0.8);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-top: var(--glass-border);
        }

        .footer-content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 1.5rem;
            margin-bottom: 2rem;
        }

        .footer-logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .footer-logo h2 {
            font-family: var(--font-display);
            font-size: 1.2rem;
            background: var(--gradient-accent);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .footer-links {
            display: flex;
            gap: 2rem;
        }

        .footer-links a {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.4);
            transition: color 0.3s ease;
        }

        .footer-links a:hover {
            color: rgba(255, 255, 255, 0.8);
        }

        .footer-divider {
            height: 1px;
            background: rgba(255, 255, 255, 0.06);
            margin-bottom: 1.5rem;
        }

        footer p {
            text-align: center;
            color: rgba(255, 255, 255, 0.25);
            font-size: 0.8rem;
        }

        @media (max-width: 768px) {
            .footer-content {
                flex-direction: column;
                text-align: center;
            }
            .footer-links {
                gap: 1.25rem;
                flex-wrap: wrap;
                justify-content: center;
            }
        }
      `})]})}function Tj(){const t=rn(),[e,a]=j.useState(!1);return j.useEffect(()=>{document.title="FrameX | Share Your World in Frames"},[]),j.useEffect(()=>{const i=document.querySelectorAll(".reveal"),o=new IntersectionObserver(g=>{g.forEach(y=>{y.isIntersecting&&(y.target.classList.add("visible"),o.unobserve(y.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});i.forEach(g=>o.observe(g)),document.querySelectorAll(".feature-card").forEach(g=>{g.addEventListener("mousemove",y=>{const v=g.getBoundingClientRect(),x=(y.clientX-v.left)/v.width*100,w=(y.clientY-v.top)/v.height*100;g.style.setProperty("--mouse-x",x+"%"),g.style.setProperty("--mouse-y",w+"%")})});const d=document.querySelectorAll(".hero-stat"),h=g=>{const y=(g.clientX/window.innerWidth-.5)*6,v=(g.clientY/window.innerHeight-.5)*6;d.forEach((x,w)=>{const S=w===0?1:-.8;x.style.transform=`translate(${y*S}px, ${v*S}px)`})};window.addEventListener("mousemove",h);const p=document.querySelector(".hero-media");if(p){const g=new IntersectionObserver(([y])=>{y.isIntersecting&&(y.target.classList.add("card-entered"),g.unobserve(y.target))},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return g.observe(p),()=>{o.disconnect(),window.removeEventListener("mousemove",h),g.disconnect()}}return()=>{o.disconnect(),window.removeEventListener("mousemove",h)}},[]),u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(_f,{}),u.jsxs("section",{className:"hero",id:"hero",children:[u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-badge",children:[u.jsx("span",{children:"New"}),"Now available on iOS & Android"]}),u.jsxs("h1",{children:["Share Your World",u.jsx("br",{}),"in ",u.jsx("span",{className:"gradient-text",children:"Every Frame"})]}),u.jsx("p",{children:"Discover, create, and connect with short videos and photos. Join millions of creators sharing their stories through the lens."}),u.jsxs("div",{className:"cta-buttons",children:[u.jsxs("a",{href:"/login",className:"btn-primary",onClick:i=>{i.preventDefault(),t("/login")},children:["Get Started ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsxs("a",{href:"#download",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-mobile-alt"})," Download App"]}),u.jsxs("a",{href:"#community",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-play"})," Explore Community"]})]})]}),u.jsxs("div",{className:"hero-media",children:[u.jsxs("div",{className:"glass-card-stack",children:[u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-video"})}),u.jsx("h3",{children:"Short Videos"}),u.jsx("p",{children:"Create and watch short, engaging videos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration glass-card-decoration--2"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-camera"})}),u.jsx("h3",{children:"Photo Sharing"}),u.jsx("p",{children:"Share moments with high-quality photos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-users"})}),u.jsx("h3",{children:"Community"}),u.jsx("p",{children:"Connect with creators worldwide"})]})]}),u.jsxs("div",{className:"hero-stat hero-stat--1",children:[u.jsx("strong",{children:"10M+"}),u.jsx("span",{children:"Active Users"})]}),u.jsxs("div",{className:"hero-stat hero-stat--2",children:[u.jsx("strong",{children:"4.8★"}),u.jsx("span",{children:"App Rating"})]})]})]}),u.jsxs("section",{id:"features",className:"features",children:[u.jsxs("div",{className:"features-header reveal",children:[u.jsx("span",{className:"section-label",children:"Features"}),u.jsx("h2",{children:"Built for Creators"}),u.jsx("p",{children:"Everything you need to capture, edit, and share your perspective with the world."})]}),u.jsx("div",{className:"feature-cards",children:[{icon:"fa-video",title:"Short Videos",desc:"Create and watch short, engaging videos on any topic. Our smart editor makes it effortless."},{icon:"fa-camera",title:"Photo Sharing",desc:"Share moments with high-quality photos and professional-grade filters built right in."},{icon:"fa-users",title:"Community",desc:"Connect with creators and friends from around the world. Your audience is waiting."}].map((i,o)=>u.jsxs("div",{className:`feature-card reveal reveal-delay-${o+1}`,children:[u.jsx("div",{className:"feature-icon",children:u.jsx("i",{className:`fas ${i.icon}`})}),u.jsx("h3",{children:i.title}),u.jsx("p",{children:i.desc})]},i.title))})]}),!e&&u.jsx("div",{className:"browser-bar",children:u.jsxs("div",{className:"browser-bar-content",children:[u.jsxs("div",{className:"browser-bar-text",children:[u.jsx("span",{className:"browser-bar-icon",children:u.jsx("i",{className:"fas fa-mobile-alt"})}),u.jsx("span",{children:"Continue in browser for the full experience"})]}),u.jsxs("button",{className:"browser-bar-btn",children:["Continue ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsx("button",{className:"browser-bar-close",onClick:()=>a(!0),"aria-label":"Dismiss",children:u.jsx("i",{className:"fas fa-times"})})]})}),u.jsxs("section",{id:"community",className:"community",children:[u.jsx("h2",{className:"reveal",children:"Join Our Community"}),u.jsx("p",{className:"reveal reveal-delay-1",children:"Follow us on social media and be part of the FrameX movement."}),u.jsx("div",{className:"social-links reveal reveal-delay-2",children:["instagram","twitter","tiktok","facebook","youtube"].map(i=>u.jsx("a",{href:"#",className:"social-link","aria-label":i.charAt(0).toUpperCase()+i.slice(1),children:u.jsx("i",{className:`fab fa-${i}`})},i))})]}),u.jsx("section",{id:"download",className:"download",children:u.jsxs("div",{className:"download-glass reveal",children:[u.jsx("span",{className:"section-label",children:"Get the App"}),u.jsx("h2",{children:"Download FrameX Now"}),u.jsx("p",{children:"Available on iOS and Android. Start sharing your story today."}),u.jsxs("div",{className:"download-buttons",children:[u.jsxs("a",{href:"#",className:"app-store",children:[u.jsx("i",{className:"fab fa-apple fa-lg"})," App Store"]}),u.jsxs("a",{href:"#",className:"google-play",children:[u.jsx("i",{className:"fab fa-google-play fa-lg"})," Google Play"]})]})]})}),u.jsx(Tf,{}),u.jsx("style",{children:`
        /* ----- PAGE THEME LOCK ----- */
        :root {
          --bg: #08080f !important;
          --bg-alt: #0c0c18 !important;
          --text: #ffffff !important;
          --text-secondary: rgba(255,255,255,0.4) !important;
          --surface: rgba(255,255,255,0.05) !important;
          --surface-hover: rgba(255,255,255,0.10) !important;
          --border: rgba(255,255,255,0.08) !important;
          --accent: #CCFF00 !important;
          --accent-text: #08080f !important;
          --danger: #ff4d4d !important;
          --glass-bg: rgba(255,255,255,0.05) !important;
          --glass-border: rgba(255,255,255,0.08) !important;
        }
        /* ===== HERO ===== */
        .hero {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 4rem;
            min-height: 100vh;
            padding: 8rem 5% 4rem;
            position: relative;
        }

        .hero-content {
            flex: 1;
            max-width: 580px;
        }

        .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.35rem 1rem 0.35rem 0.35rem;
            background: var(--color-glass);
            border: var(--glass-border);
            border-radius: 100px;
            font-size: 0.8rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 2rem;
            animation: fadeSlideUp 0.6s ease forwards;
            animation-delay: 0.1s;
            opacity: 0;
        }

        .hero-badge span {
            background: var(--gradient-accent);
            color: #08080f;
            padding: 0.2rem 0.7rem;
            border-radius: 100px;
            font-size: 0.7rem;
            font-weight: 600;
        }

        .hero-content h1 {
            font-size: clamp(2.8rem, 6vw, 4.5rem);
            line-height: 1.08;
            margin-bottom: 1.5rem;
            animation: fadeSlideUp 0.6s ease forwards;
            animation-delay: 0.2s;
            opacity: 0;
        }

        .hero-content h1 .gradient-text {
            background: var(--gradient-warm);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero-content p {
            font-size: 1.1rem;
            color: rgba(255, 255, 255, 0.5);
            margin-bottom: 2.5rem;
            max-width: 440px;
            line-height: 1.8;
            animation: fadeSlideUp 0.6s ease forwards;
            animation-delay: 0.3s;
            opacity: 0;
        }

        .cta-buttons {
            display: flex;
            gap: 1rem;
            animation: fadeSlideUp 0.6s ease forwards;
            animation-delay: 0.4s;
            opacity: 0;
        }

        /* ===== HERO MEDIA (GLASS CARD STACK) ===== */
        .hero-media {
            flex: 1;
            max-width: 480px;
            position: relative;
            opacity: 0;
            transform: translateY(30px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        .hero-media.card-entered {
            opacity: 1;
            transform: translateY(0);
            animation: heroFloat 6s ease-in-out infinite 2s;
        }

        @keyframes heroFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .glass-card-stack {
            position: relative;
            width: 100%;
            aspect-ratio: 3 / 4;
        }

        .glass-card {
            position: absolute;
            inset: 0;
            background: var(--color-glass);
            backdrop-filter: blur(var(--glass-blur));
            -webkit-backdrop-filter: blur(var(--glass-blur));
            border: var(--glass-border);
            border-radius: 24px;
            box-shadow: var(--shadow-glass-lg);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
            overflow: hidden;
        }

        .glass-card::before {
            display: none;
        }

        .glass-card::after {
            display: none;
        }

        .glass-card-decoration {
            position: absolute;
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: rgba(204, 255, 0, 0.08);
            opacity: 0.1;
            top: -30px;
            right: -30px;
            filter: blur(20px);
        }

        .glass-card-decoration--2 {
            width: 80px;
            height: 80px;
            background: rgba(204, 255, 0, 0.06);
            bottom: -20px;
            left: -20px;
            top: auto;
            right: auto;
        }

        .glass-card-icon {
            font-size: 3.5rem;
            color: var(--color-amber);
            margin-bottom: 1.5rem;
            opacity: 0.6;
        }

        .glass-card h3 {
            font-size: 1.3rem;
            margin-bottom: 0.5rem;
            color: rgba(255, 255, 255, 0.9);
        }

        .glass-card p {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.4);
            text-align: center;
        }

        .glass-card-stack .glass-card:nth-child(1) {
            transform: rotate(-6deg) translateY(8px) scale(0.92);
            z-index: 1;
        }

        .glass-card-stack .glass-card:nth-child(2) {
            transform: rotate(3deg) translateY(-4px) scale(0.96);
            z-index: 2;
        }

        .glass-card-stack .glass-card:nth-child(3) {
            transform: rotate(0deg) translateY(0) scale(1);
            z-index: 3;
        }

        .hero-stat {
            position: absolute;
            background: var(--color-glass-strong);
            backdrop-filter: blur(var(--glass-blur));
            -webkit-backdrop-filter: blur(var(--glass-blur));
            border: var(--glass-border);
            border-radius: 12px;
            padding: 0.75rem 1.25rem;
            box-shadow: var(--shadow-glass);
            z-index: 4;
            animation: float 4s ease-in-out infinite;
        }

        .hero-stat--1 {
            top: -10%;
            right: -10%;
            animation-delay: 0s;
        }

        .hero-stat--2 {
            bottom: 10%;
            left: -15%;
            animation-delay: -2s;
        }

        .hero-stat strong {
            display: block;
            font-family: var(--font-display);
            font-size: 1.2rem;
            color: #fff;
        }

        .hero-stat span {
            font-size: 0.7rem;
            color: rgba(255, 255, 255, 0.4);
            letter-spacing: 0.05em;
        }

        /* ===== FEATURES ===== */
        .features {
            padding: var(--section-padding);
            position: relative;
        }

        .features-header {
            text-align: center;
            max-width: 500px;
            margin: 0 auto 4rem;
        }

        .features-header h2 {
            font-size: clamp(2rem, 4vw, 3rem);
            margin-bottom: 1rem;
        }

        .features-header p {
            color: rgba(255, 255, 255, 0.45);
            font-size: 1.05rem;
        }

        .feature-cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 1.5rem;
        }

        .feature-card {
            background: var(--color-glass);
            backdrop-filter: blur(var(--glass-blur));
            -webkit-backdrop-filter: blur(var(--glass-blur));
            border: var(--glass-border);
            border-radius: 20px;
            padding: 2.5rem 2rem;
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
        }

        .feature-card::before {
            display: none;
        }

        .feature-card::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(
                circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
                rgba(255, 255, 255, 0.03),
                transparent 60%
            );
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.4s ease;
        }

        .feature-card:hover::after {
            opacity: 1;
        }

        .feature-card:hover {
            background: var(--color-glass-hover);
            border-color: rgba(255, 255, 255, 0.15);
            transform: translateY(-4px);
            box-shadow: var(--shadow-glass);
        }

        .feature-icon {
            width: 52px;
            height: 52px;
            border-radius: 14px;
            background: var(--color-glass-strong);
            border: var(--glass-border);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.3rem;
            margin-bottom: 1.5rem;
            color: var(--color-amber);
            transition: all 0.3s ease;
        }

        .feature-card:hover .feature-icon {
            background: var(--gradient-accent);
            color: #08080f;
            border-color: transparent;
        }

        .feature-card h3 {
            font-size: 1.25rem;
            margin-bottom: 0.75rem;
            color: rgba(255, 255, 255, 0.9);
        }

        .feature-card p {
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.9rem;
            line-height: 1.7;
        }

        /* ===== BROWSER BAR ===== */
        .browser-bar {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            padding: 0.75rem 5%;
            background: rgba(8, 8, 15, 0.85);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-top: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.5);
            animation: browserBarUp 0.5s ease-out;
        }

        .browser-bar-content {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
        }

        .browser-bar-text {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            color: rgba(255, 255, 255, 0.8);
            font-size: 0.9rem;
            font-weight: 500;
        }

        .browser-bar-icon {
            width: 36px;
            height: 36px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: var(--gradient-accent);
            border-radius: 10px;
            color: #08080f;
            font-size: 1rem;
            flex-shrink: 0;
        }

        .browser-bar-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.6rem 1.5rem;
            background: var(--gradient-accent);
            border: none;
            border-radius: 10px;
            color: #08080f;
            font-weight: 600;
            font-size: 0.85rem;
            cursor: pointer;
            transition: all 0.3s ease;
            white-space: nowrap;
            font-family: var(--font-body);
        }

        .browser-bar-btn:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 20px rgba(251, 191, 36, 0.25);
        }

        .browser-bar-close {
            width: 32px;
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: rgba(255, 255, 255, 0.06);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 8px;
            color: rgba(255, 255, 255, 0.5);
            cursor: pointer;
            transition: all 0.3s ease;
            flex-shrink: 0;
            font-size: 0.8rem;
        }

        .browser-bar-close:hover {
            background: rgba(255, 255, 255, 0.12);
            color: rgba(255, 255, 255, 0.8);
        }

        /* ===== COMMUNITY ===== */
        .community {
            padding: var(--section-padding);
            text-align: center;
        }

        .community h2 {
            font-size: clamp(1.8rem, 3vw, 2.5rem);
            margin-bottom: 0.75rem;
        }

        .community > p {
            color: rgba(255, 255, 255, 0.45);
            margin-bottom: 3rem;
            font-size: 1rem;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .social-link {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            background: var(--color-glass);
            backdrop-filter: blur(var(--glass-blur));
            -webkit-backdrop-filter: blur(var(--glass-blur));
            border: var(--glass-border);
            display: flex;
            align-items: center;
            justify-content: center;
            color: rgba(255, 255, 255, 0.6);
            font-size: 1.4rem;
            transition: all 0.3s ease;
        }

        .social-link:hover {
            background: var(--color-glass-hover);
            border-color: rgba(255, 255, 255, 0.2);
            color: #fff;
            transform: translateY(-4px);
            box-shadow: var(--shadow-glass);
        }

        /* ===== DOWNLOAD SECTION ===== */
        .download {
            padding: var(--section-padding);
            text-align: center;
        }

        .download-glass {
            max-width: 600px;
            margin: 0 auto;
            padding: 4rem 3rem;
            background: var(--color-glass);
            backdrop-filter: blur(var(--glass-blur));
            -webkit-backdrop-filter: blur(var(--glass-blur));
            border: var(--glass-border);
            border-radius: 28px;
            box-shadow: var(--shadow-glass-lg);
        }

        .download-glass h2 {
            font-size: clamp(1.8rem, 3vw, 2.5rem);
            margin-bottom: 0.75rem;
        }

        .download-glass p {
            color: rgba(255, 255, 255, 0.45);
            margin-bottom: 2rem;
            font-size: 1rem;
        }

        .download-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .app-store,
        .google-play {
            display: inline-flex;
            align-items: center;
            gap: 0.6rem;
            padding: 0.85rem 2rem;
            background: var(--color-glass-strong);
            border: var(--glass-border);
            border-radius: 14px;
            color: rgba(255, 255, 255, 0.85);
            font-size: 0.95rem;
            font-weight: 500;
            transition: all 0.3s ease;
        }

        .app-store:hover,
        .google-play:hover {
            background: var(--color-glass-hover);
            border-color: rgba(255, 255, 255, 0.2);
            transform: translateY(-2px);
            box-shadow: var(--shadow-glass);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 968px) {
            .hero {
                flex-direction: column;
                text-align: center;
                padding-top: 6rem;
                gap: 3rem;
            }
            .hero-content {
                max-width: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .hero-content p {
                max-width: 100%;
            }
            .hero-media {
                max-width: 360px;
            }
            .cta-buttons {
                justify-content: center;
            }
        }

        @media (max-width: 768px) {
            .hero-content h1 {
                font-size: 2.2rem;
            }
            .hero-content p {
                max-width: 100%;
            }
            .hero-media {
                width: 88%;
                max-width: 340px;
                margin: 2rem auto 0;
            }
            .glass-card-stack {
                aspect-ratio: 4 / 5;
            }
            .hero-stat--1 {
                right: -3%;
                top: -12%;
            }
            .hero-stat--2 {
                left: -3%;
                bottom: 8%;
            }
        }

        @media (max-width: 480px) {
            .hero-content h1 {
                font-size: 1.8rem;
            }
            .cta-buttons {
                flex-direction: column;
                width: 100%;
            }
            .btn-primary,
            .btn-secondary {
                width: 100%;
                justify-content: center;
            }
        }
      `})]})}function Ej(){j.useEffect(()=>{const a=new IntersectionObserver(i=>{i.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(i=>a.observe(i)),()=>a.disconnect()},[]);const t=[{name:"Alex Chen",role:"CEO & Founder",icon:"fa-user-tie"},{name:"Sarah Mitchell",role:"CTO",icon:"fa-laptop-code"},{name:"David Park",role:"Head of Design",icon:"fa-paint-brush"},{name:"Emily Rodriguez",role:"VP of Engineering",icon:"fa-cogs"}],e=[{icon:"fa-bolt",title:"Lightning Fast",desc:"Optimized for speed with sub-second response times across all platforms."},{icon:"fa-shield-alt",title:"Secure by Design",desc:"End-to-end encryption with enterprise-grade security protocols."},{icon:"fa-layer-group",title:"Modular Architecture",desc:"Plugin-based system that grows with your creative workflow."},{icon:"fa-robot",title:"AI-Powered",desc:"Intelligent suggestions and automation that learn from your style."}];return u.jsxs(u.Fragment,{children:[u.jsx(_f,{}),u.jsx("div",{className:"aurora-bg"}),u.jsxs("main",{className:"about-page",children:[u.jsxs("section",{className:"about-hero",children:[u.jsx("div",{className:"about-hero-bg-glow"}),u.jsxs("div",{className:"about-hero-content",children:[u.jsx("span",{className:"section-label reveal",children:"About FrameX"}),u.jsxs("h1",{className:"about-hero-title reveal reveal-delay-1",children:["Redefining ",u.jsx("span",{className:"lemon-text",children:"Creative"})," Boundaries"]}),u.jsx("p",{className:"about-hero-sub reveal reveal-delay-2",children:"We believe great design should be effortless. FrameX brings together cutting-edge AI, real-time collaboration, and intuitive tools to empower creators worldwide."}),u.jsxs("div",{className:"about-hero-stats reveal reveal-delay-3",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"50K+"}),u.jsx("span",{className:"stat-label",children:"Active Users"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"99.9%"}),u.jsx("span",{className:"stat-label",children:"Uptime"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"120+"}),u.jsx("span",{className:"stat-label",children:"Countries"})]})]})]})]}),u.jsx("section",{className:"about-section",id:"our-story",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Our Story"}),u.jsx("h2",{className:"section-title reveal",children:"How FrameX Began"}),u.jsxs("div",{className:"story-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"story-icon",children:u.jsx("i",{className:"fas fa-quote-left"})}),u.jsx("p",{className:"story-text",children:"FrameX was born in 2023 from a simple observation: creative tools were either powerful but complex, or simple but limiting. Our founders—engineers, designers, and artists—set out to build something different: a platform that combines professional-grade capabilities with an intuitive, joyful experience."}),u.jsx("p",{className:"story-text",children:"What started as a small project in a co-working space has grown into a global community of creators. Today, FrameX powers workflows for freelance designers, creative agencies, and enterprise teams across 120+ countries."}),u.jsxs("div",{className:"story-meta",children:[u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-calendar"})," Founded 2023"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-users"})," Team of 48"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-globe"})," Global Reach"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"mission-vision",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Mission & Vision"}),u.jsx("h2",{className:"section-title reveal",children:"What Drives Us"}),u.jsxs("div",{className:"mv-grid",children:[u.jsxs("div",{className:"mv-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-bullseye"})}),u.jsx("h3",{children:"Our Mission"}),u.jsx("p",{children:"To democratize creative technology by building tools that are powerful enough for professionals yet accessible enough for beginners. We remove barriers, not features."})]}),u.jsxs("div",{className:"mv-card glass reveal reveal-delay-2",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-eye"})}),u.jsx("h3",{children:"Our Vision"}),u.jsx("p",{children:"A world where anyone can bring their creative vision to life without wrestling with software. We envision FrameX as the invisible bridge between imagination and creation."})]})]})]})}),u.jsx("section",{className:"about-section",id:"what-makes-us-different",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Why FrameX"}),u.jsx("h2",{className:"section-title reveal",children:"What Makes Us Different"}),u.jsx("div",{className:"features-grid",children:e.map((a,i)=>u.jsxs("div",{className:`feature-card glass reveal reveal-delay-${i+1}`,children:[u.jsx("div",{className:"feature-card-icon",children:u.jsx("i",{className:`fas ${a.icon}`})}),u.jsx("h3",{children:a.title}),u.jsx("p",{children:a.desc})]},a.title))})]})}),u.jsx("section",{className:"about-section",id:"team",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Leadership"}),u.jsx("h2",{className:"section-title reveal",children:"Meet the Team"}),u.jsx("div",{className:"team-grid",children:t.map((a,i)=>u.jsxs("div",{className:`team-card glass reveal reveal-delay-${i+1}`,children:[u.jsx("div",{className:"team-avatar",children:u.jsx("i",{className:`fas ${a.icon}`})}),u.jsx("h3",{children:a.name}),u.jsx("p",{className:"team-role",children:a.role})]},a.name))})]})}),u.jsx("section",{className:"about-section",id:"info",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Snapshot"}),u.jsx("h2",{className:"section-title reveal",children:"Startup at a Glance"}),u.jsx("div",{className:"info-card glass reveal reveal-delay-1",children:u.jsxs("div",{className:"info-grid",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{className:"info-label",children:"Founded"}),u.jsx("span",{className:"info-value",children:"2023"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-map-pin"}),u.jsx("span",{className:"info-label",children:"Headquarters"}),u.jsx("span",{className:"info-value",children:"San Francisco, CA"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-user-friends"}),u.jsx("span",{className:"info-label",children:"Team Size"}),u.jsx("span",{className:"info-value",children:"48 Members"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-trophy"}),u.jsx("span",{className:"info-label",children:"Funding"}),u.jsx("span",{className:"info-value",children:"Series A"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-rocket"}),u.jsx("span",{className:"info-label",children:"Stage"}),u.jsx("span",{className:"info-value",children:"Growth"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-handshake"}),u.jsx("span",{className:"info-label",children:"Partners"}),u.jsx("span",{className:"info-value",children:"20+"})]})]})})]})}),u.jsx("section",{className:"about-section",id:"contact",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Contact"}),u.jsx("h2",{className:"section-title reveal",children:"Get In Touch"}),u.jsxs("div",{className:"contact-content glass reveal reveal-delay-1",children:[u.jsx("p",{className:"contact-text",children:"Have a question, partnership idea, or just want to say hello? We'd love to hear from you."}),u.jsxs("div",{className:"contact-links",children:[u.jsxs("a",{href:"mailto:hello@framex.com",className:"contact-link",children:[u.jsx("i",{className:"fas fa-envelope"})," hello@framex.com"]}),u.jsxs("a",{href:"tel:+1234567890",className:"contact-link",children:[u.jsx("i",{className:"fas fa-phone"})," +1 (234) 567-890"]}),u.jsxs("a",{href:"#",className:"contact-link",children:[u.jsx("i",{className:"fas fa-map-marker-alt"})," San Francisco, CA"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"social",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Community"}),u.jsx("h2",{className:"section-title reveal",children:"Follow Our Journey"}),u.jsxs("div",{className:"social-grid reveal reveal-delay-1",children:[u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-twitter"})," Twitter / X"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-linkedin-in"})," LinkedIn"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-discord"})," Discord"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-youtube"})," YouTube"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-instagram"})," Instagram"]})]})]})})]}),u.jsx(Tf,{}),u.jsx("style",{children:`
        .about-page {
          padding-top: 5rem;
        }

        /* ===== HERO ===== */
        .about-hero {
          position: relative;
          min-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 4rem 5%;
          overflow: hidden;
        }

        .about-hero-bg-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 600px;
          height: 600px;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(204, 255, 0, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-hero-content {
          max-width: 800px;
          position: relative;
          z-index: 1;
        }

        .about-hero-title {
          font-size: clamp(2.2rem, 6vw, 4rem);
          font-weight: 700;
          line-height: 1.15;
          margin-bottom: 1.5rem;
        }

        .lemon-text {
          color: var(--color-lemon);
        }

        .about-hero-sub {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: rgba(255, 255, 255, 0.6);
          max-width: 620px;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
        }

        .about-hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .stat-number {
          font-size: 1.6rem;
          font-weight: 700;
          color: var(--color-lemon);
          font-family: var(--font-display);
        }

        .stat-label {
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.4);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: rgba(255, 255, 255, 0.08);
        }

        /* ===== SECTIONS ===== */
        .about-section {
          padding: var(--section-padding);
        }

        .about-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .section-title {
          font-size: clamp(1.8rem, 4vw, 2.8rem);
          margin-bottom: 3rem;
          font-weight: 700;
        }

        /* ===== STORY ===== */
        .story-card {
          padding: 3rem;
          position: relative;
        }

        .story-icon {
          font-size: 2rem;
          color: var(--color-lemon);
          opacity: 0.3;
          margin-bottom: 1rem;
        }

        .story-text {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.8;
          margin-bottom: 1.2rem;
        }

        .story-text:last-of-type {
          margin-bottom: 2rem;
        }

        .story-meta {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
        }

        .story-meta span {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.5);
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .story-meta span i {
          color: var(--color-lemon);
          width: 16px;
        }

        /* ===== MISSION & VISION ===== */
        .mv-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        .mv-card {
          padding: 2.5rem;
          text-align: center;
        }

        .mv-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          background: rgba(204, 255, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: var(--color-lemon);
          margin: 0 auto 1.5rem;
        }

        .mv-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .mv-card p {
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          font-size: 0.95rem;
        }

        /* ===== FEATURES GRID ===== */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
        }

        .feature-card {
          padding: 2rem 1.5rem;
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
        }

        .feature-card-icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: rgba(204, 255, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          color: var(--color-lemon);
          margin: 0 auto 1.2rem;
        }

        .feature-card h3 {
          font-size: 1.05rem;
          margin-bottom: 0.6rem;
        }

        .feature-card p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.7;
        }

        /* ===== TEAM ===== */
        .team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.2rem;
        }

        .team-card {
          padding: 2rem 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }

        .team-card:hover {
          transform: translateY(-4px);
        }

        .team-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(204, 255, 0, 0.1);
          border: 2px solid rgba(204, 255, 0, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          color: var(--color-lemon);
          margin: 0 auto 1.2rem;
        }

        .team-card h3 {
          font-size: 1rem;
          margin-bottom: 0.3rem;
        }

        .team-role {
          font-size: 0.85rem;
          color: rgba(255, 255, 255, 0.45);
        }

        /* ===== INFO CARD ===== */
        .info-card {
          padding: 3rem;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .info-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.3rem;
        }

        .info-item i {
          font-size: 1.5rem;
          color: var(--color-lemon);
          margin-bottom: 0.5rem;
        }

        .info-label {
          font-size: 0.78rem;
          color: rgba(255, 255, 255, 0.35);
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .info-value {
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.85);
        }

        /* ===== CONTACT ===== */
        .contact-content {
          padding: 3rem;
          text-align: center;
        }

        .contact-text {
          font-size: 1.05rem;
          color: rgba(255, 255, 255, 0.6);
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.8;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.75rem 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 10px;
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .contact-link:hover {
          background: rgba(204, 255, 0, 0.08);
          border-color: rgba(204, 255, 0, 0.2);
          color: var(--color-lemon);
          transform: translateY(-2px);
        }

        .contact-link i {
          font-size: 1rem;
        }

        /* ===== SOCIAL ===== */
        .social-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }

        .social-grid .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 1.2rem;
          border-radius: 12px;
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.65);
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-grid .social-link:hover {
          background: rgba(204, 255, 0, 0.06);
          border-color: rgba(204, 255, 0, 0.15);
          color: var(--color-lemon);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        }

        .social-grid .social-link i {
          font-size: 1.2rem;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 968px) {
          .features-grid,
          .team-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .info-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            min-height: auto;
            padding: 3rem 5%;
          }

          .about-hero-stats {
            flex-direction: column;
            gap: 1rem;
          }

          .stat-divider {
            width: 40px;
            height: 1px;
          }

          .stat-number {
            font-size: 1.3rem;
          }

          .mv-grid {
            grid-template-columns: 1fr;
          }

          .story-card {
            padding: 2rem;
          }

          .story-meta {
            flex-direction: column;
            gap: 0.75rem;
          }

          .info-card {
            padding: 2rem;
          }

          .contact-content {
            padding: 2rem;
          }

          .contact-links {
            flex-direction: column;
            align-items: center;
          }

          .social-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 4rem 5%;
          }

          .features-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .team-card,
          .feature-card {
            padding: 1.5rem;
          }
        }
      `})]})}function Sc(t,e){var a={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(a[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(a[i[o]]=t[i[o]]);return a}function Cj(t,e,a,i){function o(c){return c instanceof a?c:new a(function(d){d(c)})}return new(a||(a=Promise))(function(c,d){function h(y){try{g(i.next(y))}catch(v){d(v)}}function p(y){try{g(i.throw(y))}catch(v){d(v)}}function g(y){y.done?c(y.value):o(y.value).then(h,p)}g((i=i.apply(t,e||[])).next())})}const Aj=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class Ef extends Error{constructor(e,a="FunctionsError",i){super(e),this.name=a,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Nj extends Ef{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class by extends Ef{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class xy extends Ef{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Oh;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Oh||(Oh={}));class Rj{constructor(e,{headers:a={},customFetch:i,region:o=Oh.Any}={}){this.url=e,this.headers=a,this.region=o,this.fetch=Aj(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Cj(this,arguments,void 0,function*(a,i={}){var o;let c,d;try{const{headers:h,method:p,body:g,signal:y,timeout:v}=i;let x={},{region:w}=i;w||(w=this.region);const S=new URL(`${this.url}/${a}`);w&&w!=="any"&&(x["x-region"]=w,S.searchParams.set("forceFunctionRegion",w));let T;g&&(h&&!Object.prototype.hasOwnProperty.call(h,"Content-Type")||!h)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(x["Content-Type"]="application/octet-stream",T=g):typeof g=="string"?(x["Content-Type"]="text/plain",T=g):typeof FormData<"u"&&g instanceof FormData?T=g:(x["Content-Type"]="application/json",T=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?T=JSON.stringify(g):T=g;let C=y;v&&(d=new AbortController,c=setTimeout(()=>d.abort(),v),y?(C=d.signal,y.addEventListener("abort",()=>d.abort())):C=d.signal);const _=yield this.fetch(S.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},x),this.headers),h),body:T,signal:C}).catch(X=>{throw new Nj(X)}),R=_.headers.get("x-relay-error");if(R&&R==="true")throw new by(_);if(!_.ok)throw new xy(_);let O=((o=_.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),P;return O==="application/json"?P=yield _.json():O==="application/octet-stream"||O==="application/pdf"?P=yield _.blob():O==="text/event-stream"?P=_:O==="multipart/form-data"?P=yield _.formData():P=yield _.text(),{data:P,error:null,response:_}}catch(h){return{data:null,error:h,response:h instanceof xy||h instanceof by?h.context:void 0}}finally{c&&clearTimeout(c)}})}}const nx=3,wy=t=>Math.min(1e3*2**t,3e4),Oj=[520,503],rx=["GET","HEAD","OPTIONS"];var Sy=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function jy(t,e){return new Promise(a=>{if(e!=null&&e.aborted){a();return}const i=setTimeout(()=>{e==null||e.removeEventListener("abort",o),a()},t);function o(){clearTimeout(i),a()}e==null||e.addEventListener("abort",o)})}function Dj(t,e,a,i){return!(!i||a>=nx||!rx.includes(t)||!Oj.includes(e))}var Lj=class{constructor(t){var e,a,i,o,c;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(a=t.isMaybeSingle)!==null&&a!==void 0?a:!1,this.shouldStripNulls=(i=t.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(o=t.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(c=t.retry)!==null&&c!==void 0?c:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var a=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const d=this.headers.get("Accept");d==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!d||d==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let c=(async()=>{let d=0;for(;;){const g={};a.headers.forEach((v,x)=>{g[x]=v}),d>0&&(g["X-Retry-Count"]=String(d));let y;try{y=await i(a.url.toString(),{method:a.method,headers:g,body:JSON.stringify(a.body,(v,x)=>typeof x=="bigint"?x.toString():x),signal:a.signal})}catch(v){if((v==null?void 0:v.name)==="AbortError"||(v==null?void 0:v.code)==="ABORT_ERR"||!rx.includes(a.method))throw v;if(a.retryEnabled&&d<nx){const x=wy(d);d++,await jy(x,a.signal);continue}throw v}if(Dj(a.method,y.status,d,a.retryEnabled)){var h,p;const v=(h=(p=y.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&h!==void 0?h:null,x=v!==null?Math.max(0,parseInt(v,10)||0)*1e3:wy(d);await y.text(),d++,await jy(x,a.signal);continue}return await a.processResponse(y)}})();return this.shouldThrowOnError||(c=c.catch(d=>{var h;let p="",g="",y="";const v=d==null?void 0:d.cause;if(v){var x,w,S,T;const R=(x=v==null?void 0:v.message)!==null&&x!==void 0?x:"",O=(w=v==null?void 0:v.code)!==null&&w!==void 0?w:"";p=`${(S=d==null?void 0:d.name)!==null&&S!==void 0?S:"FetchError"}: ${d==null?void 0:d.message}`,p+=`

Caused by: ${(T=v==null?void 0:v.name)!==null&&T!==void 0?T:"Error"}: ${R}`,O&&(p+=` (${O})`),v!=null&&v.stack&&(p+=`
${v.stack}`)}else{var C;p=(C=d==null?void 0:d.stack)!==null&&C!==void 0?C:""}const _=this.url.toString().length;return(d==null?void 0:d.name)==="AbortError"||(d==null?void 0:d.code)==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",_>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${_} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((v==null?void 0:v.name)==="HeadersOverflowError"||(v==null?void 0:v.code)==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",_>this.urlLengthLimit&&(g+=`. Your request URL is ${_} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(h=d==null?void 0:d.name)!==null&&h!==void 0?h:"FetchError"}: ${d==null?void 0:d.message}`,details:p,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),c.then(t,e)}async processResponse(t){var e=this;let a=null,i=null,o=null,c=t.status,d=t.statusText;if(t.ok){var h,p;if(e.method!=="HEAD"){var g;const x=await t.text();if(x!=="")if(e.headers.get("Accept")==="text/csv")i=x;else if(e.headers.get("Accept")&&(!((g=e.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))i=x;else try{i=JSON.parse(x)}catch{if(a={message:x},i=null,e.shouldThrowOnError)throw new Sy({message:x,details:"",hint:"",code:""})}}const y=(h=e.headers.get("Prefer"))===null||h===void 0?void 0:h.match(/count=(exact|planned|estimated)/),v=(p=t.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");y&&v&&v.length>1&&(o=parseInt(v[1])),e.isMaybeSingle&&Array.isArray(i)&&(i.length>1?(a={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,o=null,c=406,d="Not Acceptable"):i.length===1?i=i[0]:i=null)}else{const y=await t.text();try{a=JSON.parse(y),Array.isArray(a)&&t.status===404&&(i=[],a=null,c=200,d="OK")}catch{t.status===404&&y===""?(c=204,d="No Content"):a={message:y}}if(a&&e.shouldThrowOnError)throw new Sy(a)}return{success:a===null,error:a,data:i,count:o,status:c,statusText:d}}returns(){return this}overrideTypes(){return this}},Mj=class extends Lj{throwOnError(){return super.throwOnError()}select(t){let e=!1;const a=(t??"*").split("").map(i=>/\s/.test(i)&&!e?"":(i==='"'&&(e=!e),i)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:a,foreignTable:i,referencedTable:o=i}={}){const c=o?`${o}.order`:"order",d=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${d?`${d},`:""}${t}.${e?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:a=e}={}){const i=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,e,{foreignTable:a,referencedTable:i=a}={}){const o=typeof i>"u"?"offset":`${i}.offset`,c=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(o,`${t}`),this.url.searchParams.set(c,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:a=!1,buffers:i=!1,wal:o=!1,format:c="text"}={}){var d;const h=[t?"analyze":null,e?"verbose":null,a?"settings":null,i?"buffers":null,o?"wal":null].filter(Boolean).join("|"),p=(d=this.headers.get("Accept"))!==null&&d!==void 0?d:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${p}"; options=${h};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const ky=new RegExp("[,()]");var fi=class extends Mj{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const a=Array.from(new Set(e)).map(i=>typeof i=="string"&&ky.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${a})`),this}notIn(t,e){const a=Array.from(new Set(e)).map(i=>typeof i=="string"&&ky.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`not.in.(${a})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:a,type:i}={}){let o="";i==="plain"?o="pl":i==="phrase"?o="ph":i==="websearch"&&(o="w");const c=a===void 0?"":`(${a})`;return this.url.searchParams.append(t,`${o}fts${c}.${e}`),this}match(t){return Object.entries(t).filter(([e,a])=>a!==void 0).forEach(([e,a])=>{this.url.searchParams.append(e,`eq.${a}`)}),this}not(t,e,a){return this.url.searchParams.append(t,`not.${e}.${a}`),this}or(t,{foreignTable:e,referencedTable:a=e}={}){const i=a?`${a}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,e,a){return this.url.searchParams.append(t,`${e}.${a}`),this}},zj=class{constructor(t,{headers:e={},schema:a,fetch:i,urlLengthLimit:o=8e3,retry:c}){this.url=t,this.headers=new Headers(e),this.schema=a,this.fetch=i,this.urlLengthLimit=o,this.retry=c}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:a=!1,count:i}=e??{},o=a?"HEAD":"GET";let c=!1;const d=(t??"*").split("").map(g=>/\s/.test(g)&&!c?"":(g==='"'&&(c=!c),g)).join(""),{url:h,headers:p}=this.cloneRequestState();return h.searchParams.set("select",d),i&&p.append("Prefer",`count=${i}`),new fi({method:o,url:h,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:a=!0}={}){var i;const o="POST",{url:c,headers:d}=this.cloneRequestState();if(e&&d.append("Prefer",`count=${e}`),a||d.append("Prefer","missing=default"),Array.isArray(t)){const h=t.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(h.length>0){const p=[...new Set(h)].map(g=>`"${g}"`);c.searchParams.set("columns",p.join(","))}}return new fi({method:o,url:c,headers:d,schema:this.schema,body:t,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:a=!1,count:i,defaultToNull:o=!0}={}){var c;const d="POST",{url:h,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),e!==void 0&&h.searchParams.set("on_conflict",e),i&&p.append("Prefer",`count=${i}`),o||p.append("Prefer","missing=default"),Array.isArray(t)){const g=t.reduce((y,v)=>y.concat(Object.keys(v)),[]);if(g.length>0){const y=[...new Set(g)].map(v=>`"${v}"`);h.searchParams.set("columns",y.join(","))}}return new fi({method:d,url:h,headers:p,schema:this.schema,body:t,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var a;const i="PATCH",{url:o,headers:c}=this.cloneRequestState();return e&&c.append("Prefer",`count=${e}`),new fi({method:i,url:o,headers:c,schema:this.schema,body:t,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const a="DELETE",{url:i,headers:o}=this.cloneRequestState();return t&&o.append("Prefer",`count=${t}`),new fi({method:a,url:i,headers:o,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Is(t){"@babel/helpers - typeof";return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Is(t)}function Uj(t,e){if(Is(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var i=a.call(t,e);if(Is(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Bj(t){var e=Uj(t,"string");return Is(e)=="symbol"?e:e+""}function Pj(t,e,a){return(e=Bj(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function _y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,i)}return a}function Tl(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?_y(Object(a),!0).forEach(function(i){Pj(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_y(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}var Vj=class ax{constructor(e,{headers:a={},schema:i,fetch:o,timeout:c,urlLengthLimit:d=8e3,retry:h}={}){this.url=e,this.headers=new Headers(a),this.schemaName=i,this.urlLengthLimit=d;const p=o??globalThis.fetch;c!==void 0&&c>0?this.fetch=(g,y)=>{const v=new AbortController,x=setTimeout(()=>v.abort(),c),w=y==null?void 0:y.signal;if(w){if(w.aborted)return clearTimeout(x),p(g,y);const S=()=>{clearTimeout(x),v.abort()};return w.addEventListener("abort",S,{once:!0}),p(g,Tl(Tl({},y),{},{signal:v.signal})).finally(()=>{clearTimeout(x),w.removeEventListener("abort",S)})}return p(g,Tl(Tl({},y),{},{signal:v.signal})).finally(()=>clearTimeout(x))}:this.fetch=p,this.retry=h}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new zj(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new ax(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,a={},{head:i=!1,get:o=!1,count:c}={}){var d;let h;const p=new URL(`${this.url}/rpc/${e}`);let g;const y=w=>w!==null&&typeof w=="object"&&(!Array.isArray(w)||w.some(y)),v=i&&Object.values(a).some(y);v?(h="POST",g=a):i||o?(h=i?"HEAD":"GET",Object.entries(a).filter(([w,S])=>S!==void 0).map(([w,S])=>[w,Array.isArray(S)?`{${S.join(",")}}`:`${S}`]).forEach(([w,S])=>{p.searchParams.append(w,S)})):(h="POST",g=a);const x=new Headers(this.headers);return v?x.set("Prefer",c?`count=${c},return=minimal`:"return=minimal"):c&&x.set("Prefer",`count=${c}`),new fi({method:h,url:p,headers:x,schema:this.schemaName,body:g,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Hj{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const a=globalThis;if(typeof globalThis<"u"&&typeof a.WebSocket<"u")return{type:"native",wsConstructor:a.WebSocket};const i=typeof global<"u"?global:void 0;if(i&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};if(typeof globalThis<"u"&&typeof a.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&a.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const o=globalThis.process;if(o){const c=o.versions;if(c&&c.node){const d=c.node,h=parseInt(d.replace(/^v/,"").split(".")[0]);return h>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${h} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${h} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let a=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(a+=`

Suggested solution: ${e.workaround}`),new Error(a)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const $j="2.108.2",Ij=`realtime-js/${$j}`,qj="1.0.0",ix="2.0.0",Fj=ix,Gj=1e4,Kj=100,Vr={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},sx={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Dh={connecting:"connecting",closing:"closing",closed:"closed"};class Yj{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,a){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return a(this._binaryEncodeUserBroadcastPush(e));let i=[e.join_ref,e.ref,e.topic,e.event,e.payload];return a(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(e){var a;return this._isArrayBuffer((a=e.payload)===null||a===void 0?void 0:a.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var a,i;const o=(i=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(e){var a,i;const o=(i=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&i!==void 0?i:{},d=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,d)}_encodeUserBroadcastPush(e,a,i){var o,c;const d=e.topic,h=(o=e.ref)!==null&&o!==void 0?o:"",p=(c=e.join_ref)!==null&&c!==void 0?c:"",g=e.payload.event,y=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},v=Object.keys(y).length===0?"":JSON.stringify(y);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`ref length ${h.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`topic length ${d.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(v.length>255)throw new Error(`metadata length ${v.length} exceeds maximum of 255`);const x=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+h.length+d.length+g.length+v.length,w=new ArrayBuffer(this.HEADER_LENGTH+x);let S=new DataView(w),T=0;S.setUint8(T++,this.KINDS.userBroadcastPush),S.setUint8(T++,p.length),S.setUint8(T++,h.length),S.setUint8(T++,d.length),S.setUint8(T++,g.length),S.setUint8(T++,v.length),S.setUint8(T++,a),Array.from(p,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(h,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(d,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(g,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(v,_=>S.setUint8(T++,_.charCodeAt(0)));var C=new Uint8Array(w.byteLength+i.byteLength);return C.set(new Uint8Array(w),0),C.set(new Uint8Array(i),w.byteLength),C.buffer}decode(e,a){if(this._isArrayBuffer(e)){let i=this._binaryDecode(e);return a(i)}if(typeof e=="string"){const i=JSON.parse(e),[o,c,d,h,p]=i;return a({join_ref:o,ref:c,topic:d,event:h,payload:p})}return a({})}_binaryDecode(e){const a=new DataView(e),i=a.getUint8(0),o=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,a,o)}}_decodeUserBroadcast(e,a,i){const o=a.getUint8(1),c=a.getUint8(2),d=a.getUint8(3),h=a.getUint8(4);let p=this.HEADER_LENGTH+4;const g=i.decode(e.slice(p,p+o));p=p+o;const y=i.decode(e.slice(p,p+c));p=p+c;const v=i.decode(e.slice(p,p+d));p=p+d;const x=e.slice(p,e.byteLength),w=h===this.JSON_ENCODING?JSON.parse(i.decode(x)):x,S={type:this.BROADCAST_EVENT,event:y,payload:w};return d>0&&(S.meta=JSON.parse(v)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:S}}_isArrayBuffer(e){var a;return e instanceof ArrayBuffer||((a=e==null?void 0:e.constructor)===null||a===void 0?void 0:a.name)==="ArrayBuffer"}_pick(e,a){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([i])=>a.includes(i)))}}var Ge;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(Ge||(Ge={}));const Ty=(t,e,a={})=>{var i;const o=(i=a.skipTypes)!==null&&i!==void 0?i:[];return e?Object.keys(e).reduce((c,d)=>(c[d]=Xj(d,t,e,o),c),{}):{}},Xj=(t,e,a,i)=>{const o=e.find(h=>h.name===t),c=o==null?void 0:o.type,d=a[t];return c&&!i.includes(c)?ox(c,d):Lh(d)},ox=(t,e)=>{if(t.charAt(0)==="_"){const a=t.slice(1,t.length);return Zj(e,a)}switch(t){case Ge.bool:return Wj(e);case Ge.float4:case Ge.float8:case Ge.int2:case Ge.int4:case Ge.int8:case Ge.numeric:case Ge.oid:return Jj(e);case Ge.json:case Ge.jsonb:return Qj(e);case Ge.timestamp:return ek(e);case Ge.abstime:case Ge.date:case Ge.daterange:case Ge.int4range:case Ge.int8range:case Ge.money:case Ge.reltime:case Ge.text:case Ge.time:case Ge.timestamptz:case Ge.timetz:case Ge.tsrange:case Ge.tstzrange:return Lh(e);default:return Lh(e)}},Lh=t=>t,Wj=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Jj=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Qj=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Zj=(t,e)=>{if(typeof t!="string")return t;const a=t.length-1,i=t[a];if(t[0]==="{"&&i==="}"){let c;const d=t.slice(1,a);try{c=JSON.parse("["+d+"]")}catch{c=d?d.split(","):[]}return c.map(h=>ox(e,h))}return t},ek=t=>typeof t=="string"?t.replace(" ","T"):t,lx=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Ms=t=>typeof t=="function"?t:function(){return t},tk=typeof self<"u"?self:null,pi=typeof window<"u"?window:null,Un=tk||pi||globalThis,nk="2.0.0",rk=1e4,ak=1e3,Bn={connecting:0,open:1,closing:2,closed:3},Ht={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ur={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Mh={longpoll:"longpoll",websocket:"websocket"},ik={complete:4},zh="base64url.bearer.phx.",El=class{constructor(t,e,a,i){this.channel=t,this.event=e,this.payload=a||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:a}){this.recHooks.filter(i=>i.status===t).forEach(i=>i.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},cx=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},sk=class{constructor(t,e,a){this.state=Ht.closed,this.topic=t,this.params=Ms(e||{}),this.socket=a,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new El(this,ur.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new cx(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Ht.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=Ht.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Ht.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=Ht.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new El(this,ur.leave,Ms({}),this.timeout).send(),this.state=Ht.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(ur.reply,(i,o)=>{this.trigger(this.replyEventName(o),i)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Ht.closed,this.bindings=[]}onClose(t){this.on(ur.close,t)}onError(t){return this.on(ur.error,e=>t(e))}on(t,e){let a=this.bindingRef++;return this.bindings.push({event:t,ref:a,callback:e}),a}off(t,e){this.bindings=this.bindings.filter(a=>!(a.event===t&&(typeof e>"u"||e===a.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,a=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new El(this,t,function(){return e},a);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Ht.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(ur.close,"leave")},a=new El(this,ur.leave,Ms({}),t);return a.receive("ok",()=>e()).receive("timeout",()=>e()),a.send(),this.canPush()||a.trigger("ok",{}),a}onMessage(t,e,a){return e}filterBindings(t,e,a){return!0}isMember(t,e,a,i){return this.topic!==t?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:a,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Ht.joining,this.joinPush.resend(t))}trigger(t,e,a,i){let o=this.onMessage(t,e,a,i);if(e&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let c=this.bindings.filter(d=>d.event===t&&this.filterBindings(d,e,a));for(let d=0;d<c.length;d++)c[d].callback(o,a,i||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===Ht.closed}isErrored(){return this.state===Ht.errored}isJoined(){return this.state===Ht.joined}isJoining(){return this.state===Ht.joining}isLeaving(){return this.state===Ht.leaving}},Zl=class{static request(t,e,a,i,o,c,d){if(Un.XDomainRequest){let h=new Un.XDomainRequest;return this.xdomainRequest(h,t,e,i,o,c,d)}else if(Un.XMLHttpRequest){let h=new Un.XMLHttpRequest;return this.xhrRequest(h,t,e,a,i,o,c,d)}else{if(Un.fetch&&Un.AbortController)return this.fetchRequest(t,e,a,i,o,c,d);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,a,i,o,c,d){let h={method:t,headers:a,body:i},p=null;return o&&(p=new AbortController,setTimeout(()=>p.abort(),o),h.signal=p.signal),Un.fetch(e,h).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>d&&d(g)).catch(g=>{g.name==="AbortError"&&c?c():d&&d(null)}),p}static xdomainRequest(t,e,a,i,o,c,d){return t.timeout=o,t.open(e,a),t.onload=()=>{let h=this.parseJSON(t.responseText);d&&d(h)},c&&(t.ontimeout=c),t.onprogress=()=>{},t.send(i),t}static xhrRequest(t,e,a,i,o,c,d,h){t.open(e,a,!0),t.timeout=c;for(let[p,g]of Object.entries(i))t.setRequestHeader(p,g);return t.onerror=()=>h&&h(null),t.onreadystatechange=()=>{if(t.readyState===ik.complete&&h){let p=this.parseJSON(t.responseText);h(p)}},d&&(t.ontimeout=d),t.send(o),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let a=[];for(var i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;let o=e?`${e}[${i}]`:i,c=t[i];typeof c=="object"?a.push(this.serialize(c,o)):a.push(encodeURIComponent(o)+"="+encodeURIComponent(c))}return a.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let a=t.match(/\?/)?"&":"?";return`${t}${a}${this.serialize(e)}`}},ok=t=>{let e="",a=new Uint8Array(t),i=a.byteLength;for(let o=0;o<i;o++)e+=String.fromCharCode(a[o]);return btoa(e)},li=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(zh)&&(this.authToken=atob(e[1].slice(zh.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=Bn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Mh.websocket),"$1/"+Mh.longpoll)}endpointURL(){return Zl.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,a){this.close(t,e,a),this.readyState=Bn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Bn.open||this.readyState===Bn.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:a,token:i,messages:o}=e;if(a===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else a=0;switch(a){case 200:o.forEach(c=>{setTimeout(()=>this.onmessage({data:c}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Bn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${a}`)}})}send(t){typeof t!="string"&&(t=ok(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,a){for(let o of this.reqs)o.abort();this.readyState=Bn.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:a});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(t,e,a,i,o){let c,d=()=>{this.reqs.delete(c),i()};c=Zl.request(t,this.endpointURL(),e,a,this.timeout,d,h=>{this.reqs.delete(c),this.isActive()&&o(h)}),this.reqs.add(c)}},lk=class Rs{constructor(e,a={}){let i=a.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,o=>{let{onJoin:c,onLeave:d,onSync:h}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Rs.syncState(this.state,o,c,d),this.pendingDiffs.forEach(p=>{this.state=Rs.syncDiff(this.state,p,c,d)}),this.pendingDiffs=[],h()}),this.channel.on(i.diff,o=>{let{onJoin:c,onLeave:d,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Rs.syncDiff(this.state,o,c,d),h())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Rs.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,a,i,o){let c=this.clone(e),d={},h={};return this.map(c,(p,g)=>{a[p]||(h[p]=g)}),this.map(a,(p,g)=>{let y=c[p];if(y){let v=g.metas.map(T=>T.phx_ref),x=y.metas.map(T=>T.phx_ref),w=g.metas.filter(T=>x.indexOf(T.phx_ref)<0),S=y.metas.filter(T=>v.indexOf(T.phx_ref)<0);w.length>0&&(d[p]=g,d[p].metas=w),S.length>0&&(h[p]=this.clone(y),h[p].metas=S)}else d[p]=g}),this.syncDiff(c,{joins:d,leaves:h},i,o)}static syncDiff(e,a,i,o){let{joins:c,leaves:d}=this.clone(a);return i||(i=function(){}),o||(o=function(){}),this.map(c,(h,p)=>{let g=e[h];if(e[h]=this.clone(p),g){let y=e[h].metas.map(x=>x.phx_ref),v=g.metas.filter(x=>y.indexOf(x.phx_ref)<0);e[h].metas.unshift(...v)}i(h,g,p)}),this.map(d,(h,p)=>{let g=e[h];if(!g)return;let y=p.metas.map(v=>v.phx_ref);g.metas=g.metas.filter(v=>y.indexOf(v.phx_ref)<0),o(h,g,p),g.metas.length===0&&delete e[h]}),e}static list(e,a){return a||(a=function(i,o){return o}),this.map(e,(i,o)=>a(i,o))}static map(e,a){return Object.getOwnPropertyNames(e).map(i=>a(i,e[i]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Cl={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let a=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(a))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[a,i,o,c,d]=JSON.parse(t);return e({join_ref:a,ref:i,topic:o,event:c,payload:d})}},binaryEncode(t){let{join_ref:e,ref:a,event:i,topic:o,payload:c}=t,d=this.META_LENGTH+e.length+a.length+o.length+i.length,h=new ArrayBuffer(this.HEADER_LENGTH+d),p=new DataView(h),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,e.length),p.setUint8(g++,a.length),p.setUint8(g++,o.length),p.setUint8(g++,i.length),Array.from(e,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(a,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(o,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(i,v=>p.setUint8(g++,v.charCodeAt(0)));var y=new Uint8Array(h.byteLength+c.byteLength);return y.set(new Uint8Array(h),0),y.set(new Uint8Array(c),h.byteLength),y.buffer},binaryDecode(t){let e=new DataView(t),a=e.getUint8(0),i=new TextDecoder;switch(a){case this.KINDS.push:return this.decodePush(t,e,i);case this.KINDS.reply:return this.decodeReply(t,e,i);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,i)}},decodePush(t,e,a){let i=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),d=this.HEADER_LENGTH+this.META_LENGTH-1,h=a.decode(t.slice(d,d+i));d=d+i;let p=a.decode(t.slice(d,d+o));d=d+o;let g=a.decode(t.slice(d,d+c));d=d+c;let y=t.slice(d,t.byteLength);return{join_ref:h,ref:null,topic:p,event:g,payload:y}},decodeReply(t,e,a){let i=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),d=e.getUint8(4),h=this.HEADER_LENGTH+this.META_LENGTH,p=a.decode(t.slice(h,h+i));h=h+i;let g=a.decode(t.slice(h,h+o));h=h+o;let y=a.decode(t.slice(h,h+c));h=h+c;let v=a.decode(t.slice(h,h+d));h=h+d;let x=t.slice(h,t.byteLength),w={status:v,response:x};return{join_ref:p,ref:g,topic:y,event:ur.reply,payload:w}},decodeBroadcast(t,e,a){let i=e.getUint8(1),o=e.getUint8(2),c=this.HEADER_LENGTH+2,d=a.decode(t.slice(c,c+i));c=c+i;let h=a.decode(t.slice(c,c+o));c=c+o;let p=t.slice(c,t.byteLength);return{join_ref:null,ref:null,topic:d,event:h,payload:p}}},ck=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||rk,this.transport=e.transport||Un.WebSocket||li,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let a=null;try{a=Un&&Un.sessionStorage}catch{}this.sessionStore=e.sessionStorage||a,this.establishedConnections=0,this.defaultEncoder=Cl.encode.bind(Cl),this.defaultDecoder=Cl.decode.bind(Cl),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==li?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let i=null;pi&&pi.addEventListener&&(pi.addEventListener("pagehide",o=>{this.conn&&(this.disconnect(),i=this.connectClock)}),pi.addEventListener("pageshow",o=>{i===this.connectClock&&(i=null,this.connect())}),pi.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=o=>e.rejoinAfterMs?e.rejoinAfterMs(o):[1e3,2e3,5e3][o-1]||1e4,this.reconnectAfterMs=o=>e.reconnectAfterMs?e.reconnectAfterMs(o):[10,50,100,150,200,250,500,1e3,2e3][o-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(o,c,d)=>{console.log(`${o}: ${c}`,d)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Ms(e.params||{}),this.endPoint=`${t}/${Mh.websocket}`,this.vsn=e.vsn||nk,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new cx(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return li}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Zl.appendParams(Zl.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,a){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,a)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ms(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==li?this.connectWithFallback(li,this.longPollFallbackMs):this.transportConnect())}log(t,e,a){this.logger&&this.logger(t,e,a)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),a=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let i=this.onMessage(o=>{o.ref===e&&(this.off([i]),t(Date.now()-a))});return!0}transportName(t){switch(t){case li:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${zh}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let a=!1,i=!0,o,c,d=this.transportName(t),h=p=>{this.log("transport",`falling back to ${d}...`,p),this.off([o,c]),i=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${d}`))return h("memorized");this.fallbackTimer=setTimeout(h,e),c=this.onError(p=>{this.log("transport","error",p),i&&!a&&(clearTimeout(this.fallbackTimer),h(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(a=!0,!i){let p=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(h,e),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),ak,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,a){if(!this.conn)return t&&t();const i=this.conn;this.waitForBufferDone(i,()=>{e?i.close(e,a||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,a=1){if(a===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,a+1)},150*a)}waitForSocketClosed(t,e,a=1){if(a===5||t.readyState===Bn.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,a+1)},150*a)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,a=this.establishedConnections;this.triggerStateCallbacks("error",t,e,a),(e===this.transport||a>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(ur.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case Bn.connecting:return"connecting";case Bn.open:return"open";case Bn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([a])=>t.indexOf(a)===-1)}channel(t,e={}){let a=new sk(t,e,this);return this.channels.push(a),a}push(t){if(this.hasLogger()){let{topic:e,event:a,payload:i,ref:o,join_ref:c}=t;this.log("push",`${e} ${a} (${c}, ${o})`,i)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:a,event:i,payload:o,ref:c,join_ref:d}=e;if(c&&c===this.pendingHeartbeatRef){const h=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",h)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${a} ${i} ${c&&"("+c+")"||""}`.trim(),o);for(let h=0;h<this.channels.length;h++){const p=this.channels[h];p.isMember(a,i,o,d)&&p.trigger(i,o,c,d)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([a,i])=>{try{i(...e)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(a){this.log("error",`error triggering ${t} callbacks`,a)}}leaveOpenTopic(t){let e=this.channels.find(a=>a.topic===t&&(a.isJoined()||a.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class zs{constructor(e,a){const i=dk(a);this.presence=new lk(e.getChannel(),i),this.presence.onJoin((o,c,d)=>{const h=zs.onJoinPayload(o,c,d);e.getChannel().trigger("presence",h)}),this.presence.onLeave((o,c,d)=>{const h=zs.onLeavePayload(o,c,d);e.getChannel().trigger("presence",h)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return zs.transformState(this.presence.state)}static transformState(e){return e=uk(e),Object.getOwnPropertyNames(e).reduce((a,i)=>{const o=e[i];return a[i]=$l(o),a},{})}static onJoinPayload(e,a,i){const o=Ey(a),c=$l(i);return{event:"join",key:e,currentPresences:o,newPresences:c}}static onLeavePayload(e,a,i){const o=Ey(a),c=$l(i);return{event:"leave",key:e,currentPresences:o,leftPresences:c}}}function $l(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function uk(t){return JSON.parse(JSON.stringify(t))}function dk(t){return(t==null?void 0:t.events)&&{events:t.events}}function Ey(t){return t!=null&&t.metas?$l(t):[]}var Cy;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Cy||(Cy={}));class hk{get state(){return this.presenceAdapter.state}constructor(e,a){this.channel=e,this.presenceAdapter=new zs(this.channel.channelAdapter,a)}}function fk(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const a=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${a}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class pk{constructor(e,a,i){const o=mk(i);this.channel=e.getSocket().channel(a,o),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,a){return this.channel.on(e,a)}off(e,a){this.channel.off(e,a)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,a,i){let o;try{o=this.channel.push(e,a,i)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Kj){const c=this.channel.pushBuffer.shift();c.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${c.event}`,c.payload())}return o}updateJoinPayload(e){const a=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},a),e)}canPush(){return this.socket.isConnected()&&this.state===Vr.joined}isJoined(){return this.state===Vr.joined}isJoining(){return this.state===Vr.joining}isClosed(){return this.state===Vr.closed}isLeaving(){return this.state===Vr.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function mk(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var Ay;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Ay||(Ay={}));var yi;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(yi||(yi={}));var dr;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(dr||(dr={}));class Us{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,a={config:{}},i){var o,c;if(this.topic=e,this.params=a,this.socket=i,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},a.config),this.channelAdapter=new pk(this.socket.socketAdapter,e,this.params),this.presence=new hk(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=lx(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((c=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||c===void 0)&&c.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,a=this.timeout){var i,o,c;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:d,presence:h,private:p}}=this.params,g=(o=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(w=>w.filter))!==null&&o!==void 0?o:[],y=!!this.bindings[yi.PRESENCE]&&this.bindings[yi.PRESENCE].length>0||((c=this.params.config.presence)===null||c===void 0?void 0:c.enabled)===!0,v={},x={broadcast:d,presence:Object.assign(Object.assign({},h),{enabled:y}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(v.access_token=this.socket.accessTokenValue),this._onError(w=>{e==null||e(dr.CHANNEL_ERROR,fk(w))}),this._onClose(()=>e==null?void 0:e(dr.CLOSED)),this.updateJoinPayload(Object.assign({config:x},v)),this._updateFilterMessage(),this.channelAdapter.subscribe(a).receive("ok",async({postgres_changes:w})=>{if(this.socket._isManualToken()||this.socket.setAuth(),w===void 0){e==null||e(dr.SUBSCRIBED);return}this._updatePostgresBindings(w,e)}).receive("error",w=>{this.state=Vr.errored;const S=Object.values(w).join(", ")||"error";e==null||e(dr.CHANNEL_ERROR,new Error(S,{cause:w}))}).receive("timeout",()=>{e==null||e(dr.TIMED_OUT)})}return this}_updatePostgresBindings(e,a){var i;const o=this.bindings.postgres_changes,c=(i=o==null?void 0:o.length)!==null&&i!==void 0?i:0,d=[];for(let h=0;h<c;h++){const p=o[h],{filter:{event:g,schema:y,table:v,filter:x}}=p,w=e&&e[h];if(w&&w.event===g&&Us.isFilterValueEqual(w.schema,y)&&Us.isFilterValueEqual(w.table,v)&&Us.isFilterValueEqual(w.filter,x))d.push(Object.assign(Object.assign({},p),{id:w.id}));else{this.unsubscribe(),this.state=Vr.errored,a==null||a(dr.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=d,this.state!=Vr.errored&&a&&a(dr.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,a={}){return await this.send({type:"presence",event:"track",payload:e},a.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,a,i){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),c=e===yi.PRESENCE||e===yi.POSTGRES_CHANGES;if(o&&c)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,a,i)}async httpSend(e,a,i={}){var o;if(a==null)return Promise.reject(new Error("Payload is required for httpSend()"));const c=a instanceof ArrayBuffer||ArrayBuffer.isView(a),d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":c?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h=new URL(this.broadcastEndpointURL);h.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&h.searchParams.set("private","true");const p={method:"POST",headers:d,body:c?a:JSON.stringify(a)},g=await this._fetchWithTimeout(h.toString(),p,(o=i.timeout)!==null&&o!==void 0?o:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let y=g.statusText;try{const v=await g.json();y=v.error||v.message||y}catch{}return Promise.reject(new Error(y))}async send(e,a={}){var i,o;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:c,payload:d}=e,h={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(h.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:h,body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:d,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(i=a.timeout)!==null&&i!==void 0?i:this.timeout);return await((o=g.body)===null||o===void 0?void 0:o.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var d,h,p;const g=this.channelAdapter.push(e.type,e,a.timeout||this.timeout);e.type==="broadcast"&&!(!((p=(h=(d=this.params)===null||d===void 0?void 0:d.config)===null||h===void 0?void 0:h.broadcast)===null||p===void 0)&&p.ack)&&c("ok"),g.receive("ok",()=>c("ok")),g.receive("error",()=>c("error")),g.receive("timeout",()=>c("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(a=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>a("ok")).receive("timeout",()=>a("timed out")).receive("error",()=>a("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,a,i){const o=new AbortController,c=setTimeout(()=>o.abort(),i),d=await this.socket.fetch(e,Object.assign(Object.assign({},a),{signal:o.signal}));return clearTimeout(c),d}_on(e,a,i){const o=e.toLocaleLowerCase(),c=this.channelAdapter.on(e,i),d={type:o,filter:a,callback:i,ref:c};return this.bindings[o]?this.bindings[o].push(d):this.bindings[o]=[d],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,a,i)=>{var o,c,d,h,p,g,y;const v=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(v,i))return!1;const x=(o=this.bindings[v])===null||o===void 0?void 0:o.find(w=>w.ref===e.ref);if(!x)return!0;if(["broadcast","presence","postgres_changes"].includes(v))if("id"in x){const w=x.id,S=(c=x.filter)===null||c===void 0?void 0:c.event;return w&&((d=a.ids)===null||d===void 0?void 0:d.includes(w))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((h=a.data)===null||h===void 0?void 0:h.type.toLocaleLowerCase()))}else{const w=(g=(p=x==null?void 0:x.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return w==="*"||w===((y=a==null?void 0:a.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===v})}_notThisChannelEvent(e,a){const{close:i,error:o,leave:c,join:d}=sx;return a&&[i,o,c,d].includes(e)&&a!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,a,i)=>{if(typeof a=="object"&&"ids"in a){const o=a.data,{schema:c,table:d,commit_timestamp:h,type:p,errors:g}=o;return Object.assign(Object.assign({},{schema:c,table:d,commit_timestamp:h,eventType:p,new:{},old:{},errors:g}),this._getPayloadRecords(o))}return a})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const a in e.bindings)for(const i of e.bindings[a])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(e,a){return(e??void 0)===(a??void 0)}_getPayloadRecords(e){const a={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(a.new=Ty(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(a.old=Ty(e.columns,e.old_record)),a}}class gk{constructor(e,a){this.socket=new ck(e,a)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,a,i,o=1e4){return new Promise(c=>{setTimeout(()=>c("timeout"),o),this.socket.disconnect(()=>{e(),c("ok")},a,i)})}push(e){this.socket.push(e)}log(e,a,i){this.socket.log(e,a,i)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Dh.connecting}isDisconnecting(){return this.socket.connectionState()==Dh.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Ny={HEARTBEAT_INTERVAL:25e3},yk=[1e3,2e3,5e3,1e4],vk=1e4;function bk(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var a;return(a=Array.from(t.keys())[e])!==null&&a!==void 0?a:null},removeItem(e){t.delete(e)},setItem(e,a){t.set(e,String(a))}}}function xk(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return bk()}const wk=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Sk{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,a){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Yj,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=c=>c?(...d)=>c(...d):(...d)=>fetch(...d),!(!((i=a==null?void 0:a.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=a.params.apikey;const o=this._initializeOptions(a);this.socketAdapter=new gk(e,o),this.httpEndpoint=lx(e),this.fetch=this._resolveFetch(a==null?void 0:a.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const a=e.message;throw a.includes("Node.js")?new Error(`${a}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${a}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,a){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,a)}getChannels(){return this.channels}async removeChannel(e){const a=await e.unsubscribe();return a==="ok"&&e.teardown(),a}async removeAllChannels(){const e=this.channels.map(async i=>{const o=await i.unsubscribe();return i.teardown(),o}),a=await Promise.all(e);return await this.disconnect(),a}log(e,a,i){this.socketAdapter.log(e,a,i)}connectionState(){return this.socketAdapter.connectionState()||Dh.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,a={config:{}}){const i=`realtime:${e}`,o=this.getChannels().find(c=>c.topic===i);if(o)return o;{const c=new Us(`realtime:${e}`,a,this);return this._cancelPendingDisconnect(),this.channels.push(c),c}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(a=>a.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let a,i=!1;if(e)a=e,i=!0;else if(this.accessToken)try{a=await this.accessToken()}catch(o){this.log("error","Error fetching access token from callback",o),a=this.accessTokenValue}else a=this.accessTokenValue;i?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=a&&(this.accessTokenValue=a,this.channels.forEach(o=>{const c={access_token:a,version:Ij};a&&o.updateJoinPayload(c),o.joinedOnce&&o.channelAdapter.isJoined()&&o.channelAdapter.push(sx.access_token,{access_token:a})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(a=>{this.log("error",`Error setting auth in ${e}`,a)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(a=>{this.log("error","error waiting for auth on connect",a)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(a,i)=>{a=="sent"&&this._setAuthSafely(),e&&e(a,i)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=a=>{this.log("worker","worker error",a.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=a=>{a.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let a;if(e)a=e;else{const i=new Blob([wk],{type:"application/javascript"});a=URL.createObjectURL(i)}return a}_initializeOptions(e){var a,i,o,c,d,h,p,g,y,v,x,w;this.worker=(a=e==null?void 0:e.worker)!==null&&a!==void 0?a:!1,this.accessToken=(i=e==null?void 0:e.accessToken)!==null&&i!==void 0?i:null;const S={};S.timeout=(o=e==null?void 0:e.timeout)!==null&&o!==void 0?o:Gj,S.heartbeatIntervalMs=(c=e==null?void 0:e.heartbeatIntervalMs)!==null&&c!==void 0?c:Ny.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(d=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&d!==void 0?d:2*((h=e==null?void 0:e.heartbeatIntervalMs)!==null&&h!==void 0?h:Ny.HEARTBEAT_INTERVAL),S.transport=(p=e==null?void 0:e.transport)!==null&&p!==void 0?p:Hj.getWebSocketConstructor(),S.params=e==null?void 0:e.params,S.logger=e==null?void 0:e.logger,S.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),S.sessionStorage=(g=e==null?void 0:e.sessionStorage)!==null&&g!==void 0?g:xk(),S.reconnectAfterMs=(y=e==null?void 0:e.reconnectAfterMs)!==null&&y!==void 0?y:(R=>yk[R-1]||vk);let T,C;const _=(v=e==null?void 0:e.vsn)!==null&&v!==void 0?v:Fj;switch(_){case qj:T=(R,O)=>O(JSON.stringify(R)),C=(R,O)=>O(JSON.parse(R));break;case ix:T=this.serializer.encode.bind(this.serializer),C=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${S.vsn}`)}if(S.vsn=_,S.encode=(x=e==null?void 0:e.encode)!==null&&x!==void 0?x:T,S.decode=(w=e==null?void 0:e.decode)!==null&&w!==void 0?w:C,S.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,S.params=Object.assign(Object.assign({},S.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,S.autoSendHeartbeat=!this.worker}return S}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var qs=class extends Error{constructor(t,e){var a;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((a=e.icebergType)==null?void 0:a.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function jk(t,e,a){const i=new URL(e,t);if(a)for(const[o,c]of Object.entries(a))c!==void 0&&i.searchParams.set(o,c);return i.toString()}async function kk(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function _k(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:a,path:i,query:o,body:c,headers:d}){const h=jk(t.baseUrl,i,o),p=await kk(t.auth),g=await e(h,{method:a,headers:{...c?{"Content-Type":"application/json"}:{},...p,...d},body:c?JSON.stringify(c):void 0}),y=await g.text(),v=(g.headers.get("content-type")||"").includes("application/json"),x=v&&y?JSON.parse(y):y;if(!g.ok){const w=v?x:void 0,S=w==null?void 0:w.error;throw new qs((S==null?void 0:S.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:S==null?void 0:S.type,icebergCode:S==null?void 0:S.code,details:w})}return{status:g.status,headers:g.headers,data:x}}}}function Al(t){return t.join("")}var Tk=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Al(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(t,e){const a={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:a})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Al(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Al(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Al(t.namespace)}`}),!0}catch(e){if(e instanceof qs&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(a){if(a instanceof qs&&a.status===409)return;throw a}}};function ci(t){return t.join("")}var Ek=class{constructor(t,e="",a){this.client=t,this.prefix=e,this.accessDelegation=a}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ci(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ci(t.namespace)}/tables`,body:e,headers:a})).data.metadata}async updateTable(t,e){const a=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ci(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":a.data["metadata-location"],metadata:a.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ci(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ci(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ci(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(a){if(a instanceof qs&&a.status===404)return!1;throw a}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(a){if(a instanceof qs&&a.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw a}}},Ck=class{constructor(t){var i;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const a=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=_k({baseUrl:a,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(i=t.accessDelegation)==null?void 0:i.join(","),this.namespaceOps=new Tk(this.client,e),this.tableOps=new Ek(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function Fs(t){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fs(t)}function Ak(t,e){if(Fs(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var i=a.call(t,e);if(Fs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Nk(t){var e=Ak(t,"string");return Fs(e)=="symbol"?e:e+""}function Rk(t,e,a){return(e=Nk(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Ry(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,i)}return a}function ve(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ry(Object(a),!0).forEach(function(i){Rk(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ry(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}var jc=class extends Error{constructor(t,e="storage",a,i){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=a,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function kc(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var Uh=class extends jc{constructor(t,e,a,i="storage"){super(t,i,e,a),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=a}toJSON(){return ve({},super.toJSON())}},ux=class extends jc{constructor(t,e,a="storage"){super(t,a),this.name=a==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function ec(t,e,a){const i=ve({},t),o=e.toLowerCase();for(const c of Object.keys(i))c.toLowerCase()===o&&delete i[c];return i[o]=a,i}function Ok(t){const e={};for(const[a,i]of Object.entries(t))e[a.toLowerCase()]=i;return e}const Dk=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Lk=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Bh=t=>{if(Array.isArray(t))return t.map(a=>Bh(a));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([a,i])=>{const o=a.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));e[o]=Bh(i)}),e},Mk=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Oy=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const a=e.error;if(typeof a.message=="string")return a.message}}return JSON.stringify(t)},zk=async(t,e,a,i)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const o=t;let c=parseInt(String(o.status),10);Number.isFinite(c)||(c=500),o.json().then(d=>{const h=(d==null?void 0:d.statusCode)||(d==null?void 0:d.code)||c+"";e(new Uh(Oy(d),c,h,i))}).catch(()=>{const d=c+"";e(new Uh(o.statusText||`HTTP ${c} error`,c,d,i))})}else e(new ux(Oy(t),t,i))},Uk=(t,e,a,i)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!i)return ve(ve({},o),a);if(Lk(i)){var c;const d=(e==null?void 0:e.headers)||{};let h;for(const[p,g]of Object.entries(d))p.toLowerCase()==="content-type"&&(h=g);o.headers=ec(d,"Content-Type",(c=h)!==null&&c!==void 0?c:"application/json"),o.body=JSON.stringify(i)}else o.body=i;return e!=null&&e.duplex&&(o.duplex=e.duplex),ve(ve({},o),a)};async function Ts(t,e,a,i,o,c,d){return new Promise((h,p)=>{t(a,Uk(e,i,o,c)).then(g=>{if(!g.ok)throw g;if(i!=null&&i.noResolveJson)return g;if(d==="vectors"){const y=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!y||!y.includes("application/json"))return{}}return g.json()}).then(g=>h(g)).catch(g=>zk(g,p,i,d))})}function dx(t="storage"){return{get:async(e,a,i,o)=>Ts(e,"GET",a,i,o,void 0,t),post:async(e,a,i,o,c)=>Ts(e,"POST",a,o,c,i,t),put:async(e,a,i,o,c)=>Ts(e,"PUT",a,o,c,i,t),head:async(e,a,i,o)=>Ts(e,"HEAD",a,ve(ve({},i),{},{noResolveJson:!0}),o,void 0,t),remove:async(e,a,i,o,c)=>Ts(e,"DELETE",a,o,c,i,t)}}const Bk=dx("storage"),{get:Gs,post:_n,put:Ph,head:Pk,remove:Cf}=Bk,Zt=dx("vectors");var Ei=class{constructor(t,e={},a,i="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=Ok(e),this.fetch=Dk(a),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=ec(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(a){if(e.shouldThrowOnError)throw a;if(kc(a))return{data:null,error:a};throw a}}};let hx;hx=Symbol.toStringTag;var Vk=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[hx]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(kc(e))return{data:null,error:e};throw e}}};let fx;fx=Symbol.toStringTag;var Hk=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[fx]="BlobDownloadBuilder",this.promise=null}asStream(){return new Vk(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(kc(e))return{data:null,error:e};throw e}}};const $k={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Dy={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Ik=class extends Ei{constructor(t,e={},a,i){super(t,e,i,"storage"),this.bucketId=a}async uploadOrUpdate(t,e,a,i){var o=this;return o.handleOperation(async()=>{let c;const d=ve(ve({},Dy),i);let h=ve(ve({},o.headers),t==="POST"&&{"x-upsert":String(d.upsert)});const p=d.metadata;if(typeof Blob<"u"&&a instanceof Blob?(c=new FormData,c.append("cacheControl",d.cacheControl),p&&c.append("metadata",o.encodeMetadata(p)),c.append("",a)):typeof FormData<"u"&&a instanceof FormData?(c=a,c.has("cacheControl")||c.append("cacheControl",d.cacheControl),p&&!c.has("metadata")&&c.append("metadata",o.encodeMetadata(p))):(c=a,h["cache-control"]=`max-age=${d.cacheControl}`,h["content-type"]=d.contentType,p&&(h["x-metadata"]=o.toBase64(o.encodeMetadata(p))),(typeof ReadableStream<"u"&&c instanceof ReadableStream||c&&typeof c=="object"&&"pipe"in c&&typeof c.pipe=="function")&&!d.duplex&&(d.duplex="half")),i!=null&&i.headers)for(const[x,w]of Object.entries(i.headers))h=ec(h,x,w);const g=o._removeEmptyFolders(e),y=o._getFinalPath(g),v=await(t=="PUT"?Ph:_n)(o.fetch,`${o.url}/object/${y}`,c,ve({headers:h},d!=null&&d.duplex?{duplex:d.duplex}:{}));return{path:g,id:v.Id,fullPath:v.Key}})}async upload(t,e,a){return this.uploadOrUpdate("POST",t,e,a)}async uploadToSignedUrl(t,e,a,i){var o=this;const c=o._removeEmptyFolders(t),d=o._getFinalPath(c),h=new URL(o.url+`/object/upload/sign/${d}`);return h.searchParams.set("token",e),o.handleOperation(async()=>{let p;const g=ve(ve({},Dy),i);let y=ve(ve({},o.headers),{"x-upsert":String(g.upsert)});const v=g.metadata;if(typeof Blob<"u"&&a instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),v&&p.append("metadata",o.encodeMetadata(v)),p.append("",a)):typeof FormData<"u"&&a instanceof FormData?(p=a,p.has("cacheControl")||p.append("cacheControl",g.cacheControl),v&&!p.has("metadata")&&p.append("metadata",o.encodeMetadata(v))):(p=a,y["cache-control"]=`max-age=${g.cacheControl}`,y["content-type"]=g.contentType,v&&(y["x-metadata"]=o.toBase64(o.encodeMetadata(v))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!g.duplex&&(g.duplex="half")),i!=null&&i.headers)for(const[x,w]of Object.entries(i.headers))y=ec(y,x,w);return{path:c,fullPath:(await Ph(o.fetch,h.toString(),p,ve({headers:y},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var a=this;return a.handleOperation(async()=>{let i=a._getFinalPath(t);const o=ve({},a.headers);e!=null&&e.upsert&&(o["x-upsert"]="true");const c=await _n(a.fetch,`${a.url}/object/upload/sign/${i}`,{},{headers:o}),d=new URL(a.url+c.url),h=d.searchParams.get("token");if(!h)throw new jc("No token returned by API");return{signedUrl:d.toString(),path:t,token:h}})}async update(t,e,a){return this.uploadOrUpdate("PUT",t,e,a)}async move(t,e,a){var i=this;return i.handleOperation(async()=>await _n(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:i.headers}))}async copy(t,e,a){var i=this;return i.handleOperation(async()=>({path:(await _n(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(t,e,a){var i=this;return i.handleOperation(async()=>{let o=i._getFinalPath(t);const c=typeof(a==null?void 0:a.transform)=="object"&&a.transform!==null&&Object.keys(a.transform).length>0;let d=await _n(i.fetch,`${i.url}/object/sign/${o}`,ve({expiresIn:e},c?{transform:a.transform}:{}),{headers:i.headers});const h=new URLSearchParams;a!=null&&a.download&&h.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&h.set("cacheNonce",String(a.cacheNonce));const p=h.toString();return{signedUrl:encodeURI(`${i.url}${d.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(t,e,a){var i=this;return i.handleOperation(async()=>{const o=await _n(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:e,paths:t},{headers:i.headers}),c=new URLSearchParams;a!=null&&a.download&&c.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&c.set("cacheNonce",String(a.cacheNonce));const d=c.toString();return o.map(h=>ve(ve({},h),{},{signedUrl:h.signedURL?encodeURI(`${i.url}${h.signedURL}${d?`&${d}`:""}`):null}))})}download(t,e,a){const i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(o,e.transform),(e==null?void 0:e.cacheNonce)!=null&&o.set("cacheNonce",String(e.cacheNonce));const c=o.toString(),d=this._getFinalPath(t),h=()=>Gs(this.fetch,`${this.url}/${i}/${d}${c?`?${c}`:""}`,{headers:this.headers,noResolveJson:!0},a);return new Hk(h,this.shouldThrowOnError)}async info(t){var e=this;const a=e._getFinalPath(t);return e.handleOperation(async()=>Bh(await Gs(e.fetch,`${e.url}/object/info/${a}`,{headers:e.headers})))}async exists(t){var e=this;const a=e._getFinalPath(t);try{return await Pk(e.fetch,`${e.url}/object/${a}`,{headers:e.headers}),{data:!0,error:null}}catch(o){if(e.shouldThrowOnError)throw o;if(kc(o)){var i;const c=o instanceof Uh?o.status:o instanceof ux?(i=o.originalError)===null||i===void 0?void 0:i.status:void 0;if(c!==void 0&&[400,404].includes(c))return{data:!1,error:o}}throw o}}getPublicUrl(t,e){const a=this._getFinalPath(t),i=new URLSearchParams;e!=null&&e.download&&i.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const o=i.toString(),c=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${a}`)+(o?`?${o}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await Cf(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,a){var i=this;return i.handleOperation(async()=>{const o=ve(ve(ve({},$k),e),{},{prefix:t||""});return await _n(i.fetch,`${i.url}/object/list/${i.bucketId}`,o,{headers:i.headers},a)})}async listV2(t,e){var a=this;return a.handleOperation(async()=>{const i=ve({},t);return await _n(a.fetch,`${a.url}/object/list-v2/${a.bucketId}`,i,{headers:a.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const qk="2.108.2",no={"X-Client-Info":`storage-js/${qk}`};var Fk=class extends Ei{constructor(t,e={},a,i){const o=new URL(t);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const c=o.href.replace(/\/$/,""),d=ve(ve({},no),e);super(c,d,a,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=e.listBucketOptionsToQueryString(t);return await Gs(e.fetch,`${e.url}/bucket${a}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Gs(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var a=this;return a.handleOperation(async()=>await _n(a.fetch,`${a.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async updateBucket(t,e){var a=this;return a.handleOperation(async()=>await Ph(a.fetch,`${a.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await _n(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Cf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},Gk=class extends Ei{constructor(t,e={},a){const i=t.replace(/\/$/,""),o=ve(ve({},no),e);super(i,o,a,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await _n(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&a.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&a.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&a.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&a.set("sortOrder",t.sortOrder),t!=null&&t.search&&a.set("search",t.search);const i=a.toString(),o=i?`${e.url}/bucket?${i}`:`${e.url}/bucket`;return await Gs(e.fetch,o,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Cf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!Mk(t))throw new jc("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const a=new Ck({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(a,{get(o,c){const d=o[c];return typeof d!="function"?d:async(...h)=>{try{return{data:await d.apply(o,h),error:null}}catch(p){if(i)throw p;return{data:null,error:p}}}}})}},Kk=class extends Ei{constructor(t,e={},a){const i=t.replace(/\/$/,""),o=ve(ve({},no),{},{"Content-Type":"application/json"},e);super(i,o,a,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var a=this;return a.handleOperation(async()=>await Zt.post(a.fetch,`${a.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var a=this;return a.handleOperation(async()=>await Zt.post(a.fetch,`${a.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers})||{})}},Yk=class extends Ei{constructor(t,e={},a){const i=t.replace(/\/$/,""),o=ve(ve({},no),{},{"Content-Type":"application/json"},e);super(i,o,a,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},Xk=class extends Ei{constructor(t,e={},a){const i=t.replace(/\/$/,""),o=ve(ve({},no),{},{"Content-Type":"application/json"},e);super(i,o,a,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Zt.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Wk=class extends Xk{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Jk(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,a=this;return e().call(a,t)}async getBucket(t){var e=()=>super.getBucket,a=this;return e().call(a,t)}async listBuckets(t={}){var e=()=>super.listBuckets,a=this;return e().call(a,t)}async deleteBucket(t){var e=()=>super.deleteBucket,a=this;return e().call(a,t)}},Jk=class extends Kk{constructor(t,e,a,i){super(t,e,i),this.vectorBucketName=a}async createIndex(t){var e=()=>super.createIndex,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,a=this;return e().call(a,a.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,a=this;return e().call(a,a.vectorBucketName,t)}index(t){return new Qk(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Qk=class extends Yk{constructor(t,e,a,i,o){super(t,e,o),this.vectorBucketName=a,this.indexName=i}async putVectors(t){var e=()=>super.putVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async getVectors(t){var e=()=>super.getVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}},Zk=class extends Fk{constructor(t,e={},a,i){super(t,e,a,i)}from(t){return new Ik(this.url,this.headers,t,this.fetch)}get vectors(){return new Wk(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Gk(this.url+"/iceberg",this.headers,this.fetch)}};const px="2.108.2",hr=30*1e3,Os=3,nh=Os*hr,e_=2*hr,t_="http://localhost:9999",n_="supabase.auth.token",r_={"X-Client-Info":`gotrue-js/${px}`},Vh="X-Supabase-Api-Version",mx={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},a_=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,i_=600*1e3;class Ks extends Error{constructor(e,a,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=a,this.code=i}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function ne(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class s_ extends Ks{constructor(e,a,i){super(e,a,i),this.name="AuthApiError",this.status=a,this.code=i}}function o_(t){return ne(t)&&t.name==="AuthApiError"}class Tn extends Ks{constructor(e,a){super(e),this.name="AuthUnknownError",this.originalError=a}}class $n extends Ks{constructor(e,a,i,o){super(e,i,o),this.name=a,this.status=i}}class vt extends $n{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Nl(t){return ne(t)&&t.name==="AuthSessionMissingError"}class ui extends $n{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Rl extends $n{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ol extends $n{constructor(e,a=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function l_(t){return ne(t)&&t.name==="AuthImplicitGrantRedirectError"}class Ly extends $n{constructor(e,a=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class c_ extends $n{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Hh extends $n{constructor(e,a){super(e,"AuthRetryableFetchError",a,void 0)}}function My(t){return ne(t)&&t.name==="AuthRetryableFetchError"}class zy extends $n{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function u_(t){return ne(t)&&t.name==="AuthRefreshDiscardedError"}class Uy extends $n{constructor(e,a,i){super(e,"AuthWeakPasswordError",a,"weak_password"),this.reasons=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class tc extends $n{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const nc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),By=` 	
\r=`.split(""),d_=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<By.length;e+=1)t[By[e].charCodeAt(0)]=-2;for(let e=0;e<nc.length;e+=1)t[nc[e].charCodeAt(0)]=e;return t})();function Py(t,e,a){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;a(nc[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;a(nc[i]),e.queuedBits-=6}}function gx(t,e,a){const i=d_[t];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)a(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function Vy(t){const e=[],a=d=>{e.push(String.fromCodePoint(d))},i={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},c=d=>{p_(d,i,a)};for(let d=0;d<t.length;d+=1)gx(t.charCodeAt(d),o,c);return e.join("")}function h_(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function f_(t,e){for(let a=0;a<t.length;a+=1){let i=t.charCodeAt(a);if(i>55295&&i<=56319){const o=(i-55296)*1024&65535;i=(t.charCodeAt(a+1)-56320&65535|o)+65536,a+=1}h_(i,e)}}function p_(t,e,a){if(e.utf8seq===0){if(t<=127){a(t);return}for(let i=1;i<6;i+=1)if((t>>7-i&1)===0){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&a(e.codepoint)}}function wi(t){const e=[],a={queue:0,queuedBits:0},i=o=>{e.push(o)};for(let o=0;o<t.length;o+=1)gx(t.charCodeAt(o),a,i);return new Uint8Array(e)}function m_(t){const e=[];return f_(t,a=>e.push(a)),new Uint8Array(e)}function va(t){const e=[],a={queue:0,queuedBits:0},i=o=>{e.push(o)};return t.forEach(o=>Py(o,a,i)),Py(null,a,i),e.join("")}function g_(t){return Math.round(Date.now()/1e3)+t}function y_(){return Symbol("auth-callback")}const Et=()=>typeof window<"u"&&typeof document<"u",da={tested:!1,writable:!1},yx=()=>{if(!Et())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(da.tested)return da.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),da.tested=!0,da.writable=!0}catch{da.tested=!0,da.writable=!1}return da.writable};function v_(t){const e={},a=new URL(t);if(a.hash&&a.hash[0]==="#")try{new URLSearchParams(a.hash.substring(1)).forEach((o,c)=>{e[c]=o})}catch{}return a.searchParams.forEach((i,o)=>{e[o]=i}),e}const vx=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),b_=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",mi=async(t,e,a)=>{await t.setItem(e,JSON.stringify(a))},wn=async(t,e)=>{const a=await t.getItem(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}},rt=async(t,e)=>{await t.removeItem(e)};class _c{constructor(){this.promise=new _c.promiseConstructor((e,a)=>{this.resolve=e,this.reject=a})}}_c.promiseConstructor=Promise;function Dl(t){const e=t.split(".");if(e.length!==3)throw new tc("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!a_.test(e[i]))throw new tc("JWT not in base64url format");return{header:JSON.parse(Vy(e[0])),payload:JSON.parse(Vy(e[1])),signature:wi(e[2]),raw:{header:e[0],payload:e[1]}}}async function x_(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function w_(t,e){return new Promise((i,o)=>{(async()=>{for(let c=0;c<1/0;c++)try{const d=await t(c);if(!e(c,null,d)){i(d);return}}catch(d){if(!e(c,d)){o(d);return}}})()})}function S_(t){return("0"+t.toString(16)).substr(-2)}function j_(){const e=new Uint32Array(56);if(typeof crypto>"u"){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=a.length;let o="";for(let c=0;c<56;c++)o+=a.charAt(Math.floor(Math.random()*i));return o}return crypto.getRandomValues(e),Array.from(e,S_).join("")}async function k_(t){const a=new TextEncoder().encode(t),i=await crypto.subtle.digest("SHA-256",a),o=new Uint8Array(i);return Array.from(o).map(c=>String.fromCharCode(c)).join("")}async function __(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const a=await k_(t);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ha(t,e,a=!1){const i=j_();let o=i;a&&(o+="/recovery"),await mi(t,`${e}-code-verifier`,o);const c=await __(i);return[c,i===c?"plain":"s256"]}const T_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function E_(t){const e=t.headers.get(Vh);if(!e||!e.match(T_))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function C_(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function A_(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const N_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function or(t){if(!N_.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function jn(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function rh(){const t={};return new Proxy(t,{get:(e,a)=>{if(a==="__isUserNotAvailableProxy")return!0;if(typeof a=="symbol"){const i=a.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${a}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function R_(t,e){return new Proxy(t,{get:(a,i,o)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const c=i.toString();if(c==="Symbol(Symbol.toPrimitive)"||c==="Symbol(Symbol.toStringTag)"||c==="Symbol(util.inspect.custom)"||c==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(a,i,o)}return!e.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(a,i,o)}})}function Hy(t){return JSON.parse(JSON.stringify(t))}const pa=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},O_=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function $y(t){var e;if(!b_(t))throw new Hh(pa(t),0);if(O_.includes(t.status))throw new Hh(pa(t),t.status);let a;try{a=await t.json()}catch(c){throw new Tn(pa(c),c)}let i;const o=E_(t);if(o&&o.getTime()>=mx["2024-01-01"].timestamp&&typeof a=="object"&&a&&typeof a.code=="string"?i=a.code:typeof a=="object"&&a&&typeof a.error_code=="string"&&(i=a.error_code),i){if(i==="weak_password")throw new Uy(pa(a),t.status,((e=a.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new vt}else if(typeof a=="object"&&a&&typeof a.weak_password=="object"&&a.weak_password&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.reasons.reduce((c,d)=>c&&typeof d=="string",!0))throw new Uy(pa(a),t.status,a.weak_password.reasons);throw new s_(pa(a),t.status||500,i)}const D_=(t,e,a,i)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),o.body=JSON.stringify(i),Object.assign(Object.assign({},o),a))};async function oe(t,e,a,i){var o;const c=Object.assign({},i==null?void 0:i.headers);c[Vh]||(c[Vh]=mx["2024-01-01"].name),i!=null&&i.jwt&&(c.Authorization=`Bearer ${i.jwt}`);const d=(o=i==null?void 0:i.query)!==null&&o!==void 0?o:{};i!=null&&i.redirectTo&&(d.redirect_to=i.redirectTo);const h=Object.keys(d).length?"?"+new URLSearchParams(d).toString():"",p=await L_(t,e,a+h,{headers:c,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(p):{data:Object.assign({},p),error:null}}async function L_(t,e,a,i,o,c){const d=D_(e,i,o,c);let h;try{h=await t(a,Object.assign({},d))}catch(p){throw console.error(p),new Hh(pa(p),0)}if(h.ok||await $y(h),i!=null&&i.noResolveJson)return h;try{return await h.json()}catch(p){await $y(p)}}function mn(t){var e;let a=null;U_(t)&&(a=Object.assign({},t),t.expires_at||(a.expires_at=g_(t.expires_in)));const i=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:a,user:i},error:null}}function Iy(t){const e=mn(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((a,i)=>a&&typeof i=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Hr(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function M_(t){return{data:t,error:null}}function z_(t){const{action_link:e,email_otp:a,hashed_token:i,redirect_to:o,verification_type:c}=t,d=Sc(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:e,email_otp:a,hashed_token:i,redirect_to:o,verification_type:c},p=Object.assign({},d);return{data:{properties:h,user:p},error:null}}function qy(t){return t}function U_(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const ah=["global","local","others"];class B_{constructor({url:e="",headers:a={},fetch:i,experimental:o}){this.url=e,this.headers=a,this.fetch=vx(i),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,a=ah[0]){if(ah.indexOf(a)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ah.join(", ")}`);try{return await oe(this.fetch,"POST",`${this.url}/logout?scope=${a}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ne(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,a={}){try{return await oe(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:a.data},headers:this.headers,redirectTo:a.redirectTo,xform:Hr})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:a}=e,i=Sc(e,["options"]),o=Object.assign(Object.assign({},i),a);return"newEmail"in i&&(o.new_email=i==null?void 0:i.newEmail,delete o.newEmail),await oe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:z_,redirectTo:a==null?void 0:a.redirectTo})}catch(a){if(ne(a))return{data:{properties:null,user:null},error:a};throw a}}async createUser(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Hr})}catch(a){if(ne(a))return{data:{user:null},error:a};throw a}}async listUsers(e){var a,i,o,c,d,h,p;try{const g={nextPage:null,lastPage:0,total:0},y=await oe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&i!==void 0?i:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:qy});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),C=JSON.parse(S.split(";")[1].split("=")[1]);g[`${C}Page`]=T}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(ne(g))return{data:{users:[]},error:g};throw g}}async getUserById(e){or(e);try{return await oe(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Hr})}catch(a){if(ne(a))return{data:{user:null},error:a};throw a}}async updateUserById(e,a){or(e);try{return await oe(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:a,headers:this.headers,xform:Hr})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,a=!1){or(e);try{return await oe(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:a},xform:Hr})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){or(e.userId);try{const{data:a,error:i}=await oe(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:a,error:i}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _deleteFactor(e){or(e.userId),or(e.id);try{return{data:await oe(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _listOAuthClients(e){var a,i,o,c,d,h,p;try{const g={nextPage:null,lastPage:0,total:0},y=await oe(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&i!==void 0?i:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:qy});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),C=JSON.parse(S.split(";")[1].split("=")[1]);g[`${C}Page`]=T}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(ne(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _getOAuthClient(e){try{return await oe(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _updateOAuthClient(e,a){try{return await oe(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:a,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(e){try{return await oe(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _regenerateOAuthClientSecret(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _listCustomProviders(e){try{const a={};return e!=null&&e.type&&(a.type=e.type),await oe(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:a,xform:i=>{var o;return{data:{providers:(o=i==null?void 0:i.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(a){if(ne(a))return{data:{providers:[]},error:a};throw a}}async _createCustomProvider(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _getCustomProvider(e){try{return await oe(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _updateCustomProvider(e,a){try{return await oe(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:a,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(e){try{return await oe(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _adminListPasskeys(e){jn(this.experimental),or(e.userId);try{return await oe(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _adminDeletePasskey(e){jn(this.experimental),or(e.userId),or(e.passkeyId);try{return await oe(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}}function Fy(t={}){return{getItem:e=>t[e]||null,setItem:(e,a)=>{t[e]=a},removeItem:e=>{delete t[e]}}}globalThis&&yx()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class P_ extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function V_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function bx(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function H_(t){return parseInt(t,16)}function $_(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function I_(t){var e;const{chainId:a,domain:i,expirationTime:o,issuedAt:c=new Date,nonce:d,notBefore:h,requestId:p,resources:g,scheme:y,uri:v,version:x}=t;{if(!Number.isInteger(a))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${a}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(d&&d.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`);if(!v)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(x!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${x}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const w=bx(t.address),S=y?`${y}://${i}`:i,T=t.statement?`${t.statement}
`:"",C=`${S} wants you to sign in with your Ethereum account:
${w}

${T}`;let _=`URI: ${v}
Version: ${x}
Chain ID: ${a}${d?`
Nonce: ${d}`:""}
Issued At: ${c.toISOString()}`;if(o&&(_+=`
Expiration Time: ${o.toISOString()}`),h&&(_+=`
Not Before: ${h.toISOString()}`),p&&(_+=`
Request ID: ${p}`),g){let R=`
Resources:`;for(const O of g){if(!O||typeof O!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${O}`);R+=`
- ${O}`}_+=R}return`${C}
${_}`}class ut extends Error{constructor({message:e,code:a,cause:i,name:o}){var c;super(e,{cause:i}),this.__isWebAuthnError=!0,this.name=(c=o??(i instanceof Error?i.name:void 0))!==null&&c!==void 0?c:"Unknown Error",this.code=a}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class rc extends ut{constructor(e,a){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a,message:e}),this.name="WebAuthnUnknownError",this.originalError=a}}function q_({error:t,options:e}){var a,i,o;const{publicKey:c}=e;if(!c)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ut({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((a=c.authenticatorSelection)===null||a===void 0?void 0:a.requireResidentKey)===!0)return new ut({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((i=c.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new ut({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((o=c.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new ut({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new ut({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new ut({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return c.pubKeyCredParams.filter(h=>h.type==="public-key").length===0?new ut({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new ut({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const d=window.location.hostname;if(xx(d)){if(c.rp.id!==d)return new ut({message:`The RP ID "${c.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ut({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(c.user.id.byteLength<1||c.user.id.byteLength>64)return new ut({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new ut({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ut({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function F_({error:t,options:e}){const{publicKey:a}=e;if(!a)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ut({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new ut({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const i=window.location.hostname;if(xx(i)){if(a.rpId!==i)return new ut({message:`The RP ID "${a.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ut({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new ut({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ut({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class G_{createNewAbortSignal(){if(this.controller){const a=new Error("Cancelling existing WebAuthn API call for new one");a.name="AbortError",this.controller.abort(a)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const $h=new G_;function Gy(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:a,excludeCredentials:i}=t,o=Sc(t,["challenge","user","excludeCredentials"]),c=wi(e).buffer,d=Object.assign(Object.assign({},a),{id:wi(a.id).buffer}),h=Object.assign(Object.assign({},o),{challenge:c,user:d});if(i&&i.length>0){h.excludeCredentials=new Array(i.length);for(let p=0;p<i.length;p++){const g=i[p];h.excludeCredentials[p]=Object.assign(Object.assign({},g),{id:wi(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return h}function Ky(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:a}=t,i=Sc(t,["challenge","allowCredentials"]),o=wi(e).buffer,c=Object.assign(Object.assign({},i),{challenge:o});if(a&&a.length>0){c.allowCredentials=new Array(a.length);for(let d=0;d<a.length;d++){const h=a[d];c.allowCredentials[d]=Object.assign(Object.assign({},h),{id:wi(h.id).buffer,type:h.type||"public-key",transports:h.transports})}}return c}function Yy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t;return{id:t.id,rawId:t.id,response:{attestationObject:va(new Uint8Array(t.response.attestationObject)),clientDataJSON:va(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Xy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t,i=t.getClientExtensionResults(),o=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:va(new Uint8Array(o.authenticatorData)),clientDataJSON:va(new Uint8Array(o.clientDataJSON)),signature:va(new Uint8Array(o.signature)),userHandle:o.userHandle?va(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function xx(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function ac(){var t,e;return!!(Et()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function wx(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new rc("Browser returned unexpected credential type",e)}:{data:null,error:new rc("Empty credential response",e)}}catch(e){return{data:null,error:q_({error:e,options:t})}}}async function Sx(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new rc("Browser returned unexpected credential type",e)}:{data:null,error:new rc("Empty credential response",e)}}catch(e){return{data:null,error:F_({error:e,options:t})}}}const K_={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Y_={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function ic(...t){const e=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),a=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),i={};for(const o of t)if(o)for(const c in o){const d=o[c];if(d!==void 0)if(Array.isArray(d))i[c]=d;else if(a(d))i[c]=d;else if(e(d)){const h=i[c];e(h)?i[c]=ic(h,d):i[c]=ic(d)}else i[c]=d}return i}function X_(t,e){return ic(K_,t,e||{})}function W_(t,e){return ic(Y_,t,e||{})}class J_{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:a,friendlyName:i,signal:o},c){var d;try{const{data:h,error:p}=await this.client.mfa.challenge({factorId:e,webauthn:a});if(!h)return{data:null,error:p};const g=o??$h.createNewAbortSignal();if(h.webauthn.type==="create"){const{user:y}=h.webauthn.credential_options.publicKey;if(!y.name){const v=i;if(v)y.name=`${y.id}:${v}`;else{const w=(await this.client.getUser()).data.user,S=((d=w==null?void 0:w.user_metadata)===null||d===void 0?void 0:d.name)||(w==null?void 0:w.email)||(w==null?void 0:w.id)||"User";y.name=`${y.id}:${S}`}}y.displayName||(y.displayName=y.name)}switch(h.webauthn.type){case"create":{const y=X_(h.webauthn.credential_options.publicKey,c==null?void 0:c.create),{data:v,error:x}=await wx({publicKey:y,signal:g});return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}case"request":{const y=W_(h.webauthn.credential_options.publicKey,c==null?void 0:c.request),{data:v,error:x}=await Sx(Object.assign(Object.assign({},h.webauthn.credential_options),{publicKey:y,signal:g}));return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}}}catch(h){return ne(h)?{data:null,error:h}:{data:null,error:new Tn("Unexpected error in challenge",h)}}}async _verify({challengeId:e,factorId:a,webauthn:i}){return this.client.mfa.verify({factorId:a,challengeId:e,webauthn:i})}async _authenticate({factorId:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new Ks("rpId is required for WebAuthn authentication")};try{if(!ac())return{data:null,error:new Tn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this.challenge({factorId:e,webauthn:{rpId:a,rpOrigins:i},signal:o},{request:c});if(!d)return{data:null,error:h};const{webauthn:p}=d;return this._verify({factorId:e,challengeId:d.challengeId,webauthn:{type:p.type,rpId:a,rpOrigins:i,credential_response:p.credential_response}})}catch(d){return ne(d)?{data:null,error:d}:{data:null,error:new Tn("Unexpected error in authenticate",d)}}}async _register({friendlyName:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new Ks("rpId is required for WebAuthn registration")};try{if(!ac())return{data:null,error:new Tn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this._enroll({friendlyName:e});if(!d)return await this.client.mfa.listFactors().then(y=>{var v;return(v=y.data)===null||v===void 0?void 0:v.all.find(x=>x.factor_type==="webauthn"&&x.friendly_name===e&&x.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y==null?void 0:y.id}):void 0),{data:null,error:h};const{data:p,error:g}=await this._challenge({factorId:d.id,friendlyName:d.friendly_name,webauthn:{rpId:a,rpOrigins:i},signal:o},{create:c});return p?this._verify({factorId:d.id,challengeId:p.challengeId,webauthn:{rpId:a,rpOrigins:i,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:g}}catch(d){return ne(d)?{data:null,error:d}:{data:null,error:new Tn("Unexpected error in register",d)}}}}V_();const Q_={url:t_,storageKey:n_,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:r_,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},di={};class Ys{get jwks(){var e,a;return(a=(e=di[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&a!==void 0?a:{keys:[]}}set jwks(e){di[this.storageKey]=Object.assign(Object.assign({},di[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,a;return(a=(e=di[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&a!==void 0?a:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){di[this.storageKey]=Object.assign(Object.assign({},di[this.storageKey]),{cachedAt:e})}constructor(e){var a,i,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const c=Object.assign(Object.assign({},Q_),e);if(this.storageKey=c.storageKey,this.instanceID=(a=Ys.nextInstanceID[this.storageKey])!==null&&a!==void 0?a:0,Ys.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!c.debug,typeof c.debug=="function"&&(this.logger=c.debug),this.instanceID>0&&Et()){const d=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(d),this.logDebugMessages&&console.trace(d)}if(this.persistSession=c.persistSession,this.autoRefreshToken=c.autoRefreshToken,this.experimental=(i=c.experimental)!==null&&i!==void 0?i:{},this.admin=new B_({url:c.url,headers:c.headers,fetch:c.fetch,experimental:this.experimental}),this.url=c.url,this.headers=c.headers,this.fetch=vx(c.fetch),this.detectSessionInUrl=c.detectSessionInUrl,this.flowType=c.flowType,this.hasCustomAuthorizationHeader=c.hasCustomAuthorizationHeader,this.throwOnError=c.throwOnError,this.lockAcquireTimeout=c.lockAcquireTimeout,c.lock!=null&&(this.lock=c.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new J_(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(c.storage?this.storage=c.storage:yx()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Fy(this.memoryStorage)),c.userStorage&&(this.userStorage=c.userStorage)):(this.memoryStorage={},this.storage=Fy(this.memoryStorage)),Et()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(d){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",d)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async d=>{this._debug("received broadcast notification from other tab or client",d),(d.data.event==="TOKEN_REFRESHED"||d.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(d.data.event,d.data.session,!1)}catch(h){this._debug("#broadcastChannel","error",h)}})}c.skipAutoInitialize||this.initialize().catch(d=>{this._debug("#initialize()","error",d)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${px}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let a={},i="none";if(Et()&&(a=v_(window.location.href),this._isImplicitGrantCallback(a)?i="implicit":await this._isPKCECallback(a)&&(i="pkce")),Et()&&this.detectSessionInUrl&&i!=="none"){const{data:o,error:c}=await this._getSessionFromURL(a,i);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),l_(c)){const p=(e=c.details)===null||e===void 0?void 0:e.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:c}}return{error:c}}const{session:d,redirectType:h}=o;return this._debug("#_initialize()","detected session in URL",d,"redirect type",h),await this._saveSession(d),setTimeout(async()=>{h==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",d):await this._notifyAllSubscribers("SIGNED_IN",d)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(a){return ne(a)?this._returnResult({error:a}):this._returnResult({error:new Tn("Unexpected error during initialization",a)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var a,i,o;try{const c=await oe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(o=e==null?void 0:e.options)===null||o===void 0?void 0:o.captchaToken}},xform:mn}),{data:d,error:h}=c;if(h||!d)return this._returnResult({data:{user:null,session:null},error:h});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(ne(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signUp(e){var a,i,o;try{let c;if("email"in e){const{email:y,password:v,options:x}=e;let w=null,S=null;this.flowType==="pkce"&&([w,S]=await ha(this.storage,this.storageKey)),c=await oe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:y,password:v,data:(a=x==null?void 0:x.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:w,code_challenge_method:S},xform:mn})}else if("phone"in e){const{phone:y,password:v,options:x}=e;c=await oe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:v,data:(i=x==null?void 0:x.data)!==null&&i!==void 0?i:{},channel:(o=x==null?void 0:x.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:mn})}else throw new Rl("You must provide either an email or phone number and a password");const{data:d,error:h}=c;if(h||!d)return await rt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:h});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithPassword(e){try{let a;if("email"in e){const{email:c,password:d,options:h}=e;a=await oe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Iy})}else if("phone"in e){const{phone:c,password:d,options:h}=e;a=await oe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Iy})}else throw new Rl("You must provide either an email or phone number and a password");const{data:i,error:o}=a;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!i||!i.session||!i.user){const c=new ui;return this._returnResult({data:{user:null,session:null},error:c})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:o})}catch(a){if(ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOAuth(e){var a,i,o,c;return await this._handleProviderSignIn(e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(c=e.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:a}=e;switch(a){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`)}}async signInWithEthereum(e){var a,i,o,c,d,h,p,g,y,v,x;let w,S;if("message"in e)w=e.message,S=e.signature;else{const{chain:T,wallet:C,statement:_,options:R}=e;let O;if(Et())if(typeof C=="object")O=C;else{const Z=window;if("ethereum"in Z&&typeof Z.ethereum=="object"&&"request"in Z.ethereum&&typeof Z.ethereum.request=="function")O=Z.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof C!="object"||!(R!=null&&R.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");O=C}const P=new URL((a=R==null?void 0:R.url)!==null&&a!==void 0?a:window.location.href),X=await O.request({method:"eth_requestAccounts"}).then(Z=>Z).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!X||X.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const W=bx(X[0]);let G=(i=R==null?void 0:R.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!G){const Z=await O.request({method:"eth_chainId"});G=H_(Z)}const q={domain:P.host,address:W,statement:_,uri:P.href,version:"1",chainId:G,nonce:(o=R==null?void 0:R.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(d=(c=R==null?void 0:R.signInWithEthereum)===null||c===void 0?void 0:c.issuedAt)!==null&&d!==void 0?d:new Date,expirationTime:(h=R==null?void 0:R.signInWithEthereum)===null||h===void 0?void 0:h.expirationTime,notBefore:(p=R==null?void 0:R.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(g=R==null?void 0:R.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(y=R==null?void 0:R.signInWithEthereum)===null||y===void 0?void 0:y.resources};w=I_(q),S=await O.request({method:"personal_sign",params:[$_(w),W]})}try{const{data:T,error:C}=await oe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:S},!((v=e.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(x=e.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:mn});if(C)throw C;if(!T||!T.session||!T.user){const _=new ui;return this._returnResult({data:{user:null,session:null},error:_})}return T.session&&(await this._saveSession(T.session),await this._notifyAllSubscribers("SIGNED_IN",T.session)),this._returnResult({data:Object.assign({},T),error:C})}catch(T){if(ne(T))return this._returnResult({data:{user:null,session:null},error:T});throw T}}async signInWithSolana(e){var a,i,o,c,d,h,p,g,y,v,x,w;let S,T;if("message"in e)S=e.message,T=e.signature;else{const{chain:C,wallet:_,statement:R,options:O}=e;let P;if(Et())if(typeof _=="object")P=_;else{const W=window;if("solana"in W&&typeof W.solana=="object"&&("signIn"in W.solana&&typeof W.solana.signIn=="function"||"signMessage"in W.solana&&typeof W.solana.signMessage=="function"))P=W.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof _!="object"||!(O!=null&&O.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");P=_}const X=new URL((a=O==null?void 0:O.url)!==null&&a!==void 0?a:window.location.href);if("signIn"in P&&P.signIn){const W=await P.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},O==null?void 0:O.signInWithSolana),{version:"1",domain:X.host,uri:X.href}),R?{statement:R}:null));let G;if(Array.isArray(W)&&W[0]&&typeof W[0]=="object")G=W[0];else if(W&&typeof W=="object"&&"signedMessage"in W&&"signature"in W)G=W;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in G&&"signature"in G&&(typeof G.signedMessage=="string"||G.signedMessage instanceof Uint8Array)&&G.signature instanceof Uint8Array)S=typeof G.signedMessage=="string"?G.signedMessage:new TextDecoder().decode(G.signedMessage),T=G.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in P)||typeof P.signMessage!="function"||!("publicKey"in P)||typeof P!="object"||!P.publicKey||!("toBase58"in P.publicKey)||typeof P.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");S=[`${X.host} wants you to sign in with your Solana account:`,P.publicKey.toBase58(),...R?["",R,""]:[""],"Version: 1",`URI: ${X.href}`,`Issued At: ${(o=(i=O==null?void 0:O.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((c=O==null?void 0:O.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${O.signInWithSolana.notBefore}`]:[],...!((d=O==null?void 0:O.signInWithSolana)===null||d===void 0)&&d.expirationTime?[`Expiration Time: ${O.signInWithSolana.expirationTime}`]:[],...!((h=O==null?void 0:O.signInWithSolana)===null||h===void 0)&&h.chainId?[`Chain ID: ${O.signInWithSolana.chainId}`]:[],...!((p=O==null?void 0:O.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${O.signInWithSolana.nonce}`]:[],...!((g=O==null?void 0:O.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${O.signInWithSolana.requestId}`]:[],...!((v=(y=O==null?void 0:O.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||v===void 0)&&v.length?["Resources",...O.signInWithSolana.resources.map(G=>`- ${G}`)]:[]].join(`
`);const W=await P.signMessage(new TextEncoder().encode(S),"utf8");if(!W||!(W instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");T=W}}try{const{data:C,error:_}=await oe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:S,signature:va(T)},!((x=e.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(w=e.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:mn});if(_)throw _;if(!C||!C.session||!C.user){const R=new ui;return this._returnResult({data:{user:null,session:null},error:R})}return C.session&&(await this._saveSession(C.session),await this._notifyAllSubscribers("SIGNED_IN",C.session)),this._returnResult({data:Object.assign({},C),error:_})}catch(C){if(ne(C))return this._returnResult({data:{user:null,session:null},error:C});throw C}}async _exchangeCodeForSession(e){const a=await wn(this.storage,`${this.storageKey}-code-verifier`),[i,o]=(a??"").split("/");try{if(!i&&this.flowType==="pkce")throw new c_;const{data:c,error:d}=await oe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:i},xform:mn});if(await rt(this.storage,`${this.storageKey}-code-verifier`),d)throw d;if(!c||!c.session||!c.user){const h=new ui;return this._returnResult({data:{user:null,session:null,redirectType:null},error:h})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:o??null}),error:d})}catch(c){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:a,provider:i,token:o,access_token:c,nonce:d}=e,h=await oe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:o,access_token:c,nonce:d,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:mn}),{data:p,error:g}=h;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p||!p.session||!p.user){const y=new ui;return this._returnResult({data:{user:null,session:null},error:y})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:g})}catch(a){if(ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOtp(e){var a,i,o,c,d;try{if("email"in e){const{email:h,options:p}=e;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await ha(this.storage,this.storageKey));const{error:v}=await oe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:h,data:(a=p==null?void 0:p.data)!==null&&a!==void 0?a:{},create_user:(i=p==null?void 0:p.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:y},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:v})}if("phone"in e){const{phone:h,options:p}=e,{data:g,error:y}=await oe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:h,data:(o=p==null?void 0:p.data)!==null&&o!==void 0?o:{},create_user:(c=p==null?void 0:p.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(d=p==null?void 0:p.channel)!==null&&d!==void 0?d:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:y})}throw new Rl("You must provide either an email or phone number.")}catch(h){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(h))return this._returnResult({data:{user:null,session:null},error:h});throw h}}async verifyOtp(e){var a,i;try{let o,c;"options"in e&&(o=(a=e.options)===null||a===void 0?void 0:a.redirectTo,c=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:d,error:h}=await oe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:c}}),redirectTo:o,xform:mn});if(h)throw h;if(!d)throw new Error("An error occurred on token verification.");const p=d.session,g=d.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(o){if(ne(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(e){var a,i,o,c,d;try{let h=null,p=null;this.flowType==="pkce"&&([h,p]=await ha(this.storage,this.storageKey));const g=await oe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(i=(a=e.options)===null||a===void 0?void 0:a.redirectTo)!==null&&i!==void 0?i:void 0}),!((o=e==null?void 0:e.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:h,code_challenge_method:p}),headers:this.headers,xform:M_});return!((c=g.data)===null||c===void 0)&&c.url&&Et()&&!(!((d=e.options)===null||d===void 0)&&d.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(h){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(h))return this._returnResult({data:null,error:h});throw h}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:a},error:i}=e;if(i)throw i;if(!a)throw new vt;const{error:o}=await oe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:a.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(e){if(ne(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const a=`${this.url}/resend`;if("email"in e){const{email:i,type:o,options:c}=e;let d=null,h=null;this.flowType==="pkce"&&([d,h]=await ha(this.storage,this.storageKey));const{error:p}=await oe(this.fetch,"POST",a,{headers:this.headers,body:{email:i,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:d,code_challenge_method:h},redirectTo:c==null?void 0:c.emailRedirectTo});return p&&await rt(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in e){const{phone:i,type:o,options:c}=e,{data:d,error:h}=await oe(this.fetch,"POST",a,{headers:this.headers,body:{phone:i,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:h})}throw new Rl("You must provide either an email or phone number and a type")}catch(a){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,a){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await i,await a()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=a();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const a=await this.__loadSession();return await e(a)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const a=await wn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",a),a!==null&&(this._isValidSession(a)?e=a:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<nh:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.userStorage){const d=await wn(this.userStorage,this.storageKey+"-user");d!=null&&d.user?e.user=d.user:e.user=rh()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const d={value:this.suppressGetSessionWarning};e.user=R_(e.user,d),d.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);if(c){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const h=await wn(this.storage,this.storageKey);if(h&&h.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:c})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let a;return this.lock!=null?a=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):a=await this._getUser(),a.data.user&&(this.suppressGetSessionWarning=!0),a}async _getUser(e){try{return e?await oe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Hr}):await this._useSession(async a=>{var i,o,c;const{data:d,error:h}=a;if(h)throw h;return!(!((i=d.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new vt}:await oe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(o=d.session)===null||o===void 0?void 0:o.access_token)!==null&&c!==void 0?c:void 0,xform:Hr})})}catch(a){if(ne(a))return Nl(a)&&(await this._removeSession(),await rt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:a});throw a}}async updateUser(e,a={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,a)):await this._updateUser(e,a)}async _updateUser(e,a={}){try{return await this._useSession(async i=>{const{data:o,error:c}=i;if(c)throw c;if(!o.session)throw new vt;const d=o.session;let h=null,p=null;this.flowType==="pkce"&&e.email!=null&&([h,p]=await ha(this.storage,this.storageKey));const{data:g,error:y}=await oe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:a==null?void 0:a.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:h,code_challenge_method:p}),jwt:d.access_token,xform:Hr});if(y)throw y;return d.user=g.user,await this._saveSession(d),await this._notifyAllSubscribers("USER_UPDATED",d),this._returnResult({data:{user:d.user},error:null})})}catch(i){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(i))return this._returnResult({data:{user:null},error:i});throw i}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new vt;const a=Date.now()/1e3;let i=a,o=!0,c=null;const{payload:d}=Dl(e.access_token);if(d.exp&&(i=d.exp,o=i<=a),o){const{data:h,error:p}=await this._callRefreshToken(e.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!h)return{data:{user:null,session:null},error:null};c=h}else{const{data:h,error:p}=await this._getUser(e.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});c={access_token:e.access_token,refresh_token:e.refresh_token,user:h.user,token_type:"bearer",expires_in:i-a,expires_at:i},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return this._returnResult({data:{user:c.user,session:c},error:null})}catch(a){if(ne(a))return this._returnResult({data:{session:null,user:null},error:a});throw a}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async a=>{var i;if(!e){const{data:d,error:h}=a;if(h)throw h;e=(i=d.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new vt;const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);return c?this._returnResult({data:{user:null,session:null},error:c}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(a){if(ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async _getSessionFromURL(e,a){var i;try{if(!Et())throw new Ol("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ol(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(a){case"implicit":if(this.flowType==="pkce")throw new Ly("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ol("Not a valid implicit grant flow url.");break;default:}if(a==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ly("No code detected.");const{data:O,error:P}=await this._exchangeCodeForSession(e.code);if(P)throw P;const X=new URL(window.location.href);return X.searchParams.delete("code"),window.history.replaceState(window.history.state,"",X.toString()),{data:{session:O.session,redirectType:(i=O.redirectType)!==null&&i!==void 0?i:null},error:null}}const{provider_token:o,provider_refresh_token:c,access_token:d,refresh_token:h,expires_in:p,expires_at:g,token_type:y}=e;if(!d||!p||!h||!y)throw new Ol("No session defined in URL");const v=Math.round(Date.now()/1e3),x=parseInt(p);let w=v+x;g&&(w=parseInt(g));const S=w-v;S*1e3<=hr&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${x}s`);const T=w-x;v-T>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",T,w,v):v-T<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",T,w,v);const{data:C,error:_}=await this._getUser(d);if(_)throw _;const R={provider_token:o,provider_refresh_token:c,access_token:d,expires_in:x,expires_at:w,refresh_token:h,token_type:y,user:C.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:R,redirectType:e.type},error:null})}catch(o){if(ne(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const a=await wn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&a)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async a=>{var i;const{data:o,error:c}=a;if(c&&!Nl(c))return this._returnResult({error:c});const d=(i=o.session)===null||i===void 0?void 0:i.access_token;if(d){const{error:h}=await this.admin.signOut(d,e);if(h&&!(o_(h)&&(h.status===404||h.status===401||h.status===403)||Nl(h)))return this._returnResult({error:h})}return e!=="others"&&(await this._removeSession(),await rt(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const a=y_(),i={id:a,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",a),this.stateChangeEmitters.delete(a)}};return this._debug("#onAuthStateChange()","registered callback with id",a),this.stateChangeEmitters.set(a,i),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(a)}):await this._emitInitialSession(a)))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async a=>{var i,o;try{const{data:{session:c},error:d}=a;if(d)throw d;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",e,"session",c)}catch(c){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",c),Nl(c)?console.warn(c):console.error(c)}})}async resetPasswordForEmail(e,a={}){let i=null,o=null;this.flowType==="pkce"&&([i,o]=await ha(this.storage,this.storageKey,!0));try{return await oe(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:o,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:this.headers,redirectTo:a.redirectTo})}catch(c){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:null,error:c});throw c}}async getUserIdentities(){var e;try{const{data:a,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(e=a.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var a;try{const{data:i,error:o}=await this._useSession(async c=>{var d,h,p,g,y;const{data:v,error:x}=c;if(x)throw x;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(d=e.options)===null||d===void 0?void 0:d.redirectTo,scopes:(h=e.options)===null||h===void 0?void 0:h.scopes,queryParams:(p=e.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await oe(this.fetch,"GET",w,{headers:this.headers,jwt:(y=(g=v.session)===null||g===void 0?void 0:g.access_token)!==null&&y!==void 0?y:void 0})});if(o)throw o;return Et()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(i==null?void 0:i.url),this._returnResult({data:{provider:e.provider,url:i==null?void 0:i.url},error:null})}catch(i){if(ne(i))return this._returnResult({data:{provider:e.provider,url:null},error:i});throw i}}async linkIdentityIdToken(e){return await this._useSession(async a=>{var i;try{const{error:o,data:{session:c}}=a;if(o)throw o;const{options:d,provider:h,token:p,access_token:g,nonce:y}=e,v=await oe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=c==null?void 0:c.access_token)!==null&&i!==void 0?i:void 0,body:{provider:h,id_token:p,access_token:g,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:mn}),{data:x,error:w}=v;return w?this._returnResult({data:{user:null,session:null},error:w}):!x||!x.session||!x.user?this._returnResult({data:{user:null,session:null},error:new ui}):(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("USER_UPDATED",x.session)),this._returnResult({data:x,error:w}))}catch(o){if(await rt(this.storage,`${this.storageKey}-code-verifier`),ne(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(e){try{return await this._useSession(async a=>{var i,o;const{data:c,error:d}=a;if(d)throw d;return await oe(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(i=c.session)===null||i===void 0?void 0:i.access_token)!==null&&o!==void 0?o:void 0})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _refreshAccessToken(e){const a="#_refreshAccessToken()";this._debug(a,"begin");try{const i=Date.now();return await w_(async o=>(o>0&&await x_(200*Math.pow(2,o-1)),this._debug(a,"refreshing attempt",o),await oe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:mn})),(o,c)=>{const d=200*Math.pow(2,o);return c&&My(c)&&Date.now()+d-i<hr})}catch(i){if(this._debug(a,"error",i),ne(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(a,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,a){const i=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:a.redirectTo,scopes:a.scopes,queryParams:a.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",a,"url",i),Et()&&!a.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i},error:null}}async _recoverAndRefresh(){var e,a;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const o=await wn(this.storage,this.storageKey);if(o&&this.userStorage){let d=await wn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!d&&(d={user:o.user},await mi(this.userStorage,this.storageKey+"-user",d)),o.user=(e=d==null?void 0:d.user)!==null&&e!==void 0?e:rh()}else if(o&&!o.user&&!o.user){const d=await wn(this.storage,this.storageKey+"-user");d&&(d!=null&&d.user)?(o.user=d.user,await rt(this.storage,this.storageKey+"-user"),await mi(this.storage,this.storageKey,o)):o.user=rh()}if(this._debug(i,"session from storage",o),!this._isValidSession(o)){this._debug(i,"session is not valid"),o!==null&&await this._removeSession();return}const c=((a=o.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<nh;if(this._debug(i,`session has${c?"":" not"} expired with margin of ${nh}s`),c){if(this.autoRefreshToken&&o.refresh_token){const{error:d}=await this._callRefreshToken(o.refresh_token);d&&(u_(d)?this._debug(i,"refresh discarded by commit guard",d):this._debug(i,"refresh failed",d))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:d,error:h}=await this._getUser(o.access_token);!h&&(d!=null&&d.user)?(o.user=d.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(d){console.error("Error getting user data:",d),this._debug(i,"error getting user data, skipping SIGNED_IN notification",d)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(i,"error",o),console.error(o);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var a,i;if(!e)throw new vt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new _c;const c=await wn(this.storage,this.storageKey),{data:d,error:h}=await this._refreshAccessToken(e);if(h)throw h;if(!d.session)throw new vt;const p=await wn(this.storage,this.storageKey);if(c!==null&&(p===null||p.refresh_token!==c.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const x={data:null,error:new zy};return this.refreshingDeferred.resolve(x),x}const y=this._sessionRemovalEpoch;if(await this._saveSession(d.session),this._sessionRemovalEpoch!==y){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await rt(this.storage,this.storageKey),this.userStorage&&await rt(this.userStorage,this.storageKey+"-user");const x={data:null,error:new zy};return this.refreshingDeferred.resolve(x),x}await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const v={data:d.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(v),v}catch(c){if(this._debug(o,"error",c),ne(c)){const d={data:null,error:c};if(!My(c)){const h=await wn(this.storage,this.storageKey);!!(h!=null&&h.expires_at&&h.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:d,expiresAt:Date.now()+e_},(a=this.refreshingDeferred)===null||a===void 0||a.resolve(d),d}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(c),c}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,a,i=!0){const o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",a,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:a});const c=[],d=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(e,a)}catch(p){c.push(p)}});if(await Promise.all(d),c.length>0){for(let h=0;h<c.length;h+=1)console.error(c[h]);throw c[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await rt(this.storage,`${this.storageKey}-code-verifier`);const a=Object.assign({},e),i=a.user&&a.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&a.user&&await mi(this.userStorage,this.storageKey+"-user",{user:a.user});const o=Object.assign({},a);delete o.user;const c=Hy(o);await mi(this.storage,this.storageKey,c)}else{const o=Hy(a);await mi(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await rt(this.storage,this.storageKey),await rt(this.storage,this.storageKey+"-code-verifier"),await rt(this.storage,this.storageKey+"-user"),this.userStorage&&await rt(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Et()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(a){console.error("removing visibilitychange callback failed",a)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),hr);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const a=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const a=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,a&&clearTimeout(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async a=>{const{data:{session:i}}=a;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((i.expires_at*1e3-e)/hr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${hr}ms, refresh threshold is ${Os} ticks`),o<=Os&&await this._callRefreshToken(i.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof P_)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async a=>{const{data:{session:i}}=a;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((i.expires_at*1e3-e)/hr);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${hr}ms, refresh threshold is ${Os} ticks`),o<=Os&&await this._callRefreshToken(i.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Et()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const a=`#_onVisibilityChanged(${e})`;if(this._debug(a,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(a,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,a,i){const o=[`provider=${encodeURIComponent(a)}`];if(i!=null&&i.redirectTo&&o.push(`redirect_to=${encodeURIComponent(i.redirectTo)}`),i!=null&&i.scopes&&o.push(`scopes=${encodeURIComponent(i.scopes)}`),this.flowType==="pkce"){const[c,d]=await ha(this.storage,this.storageKey),h=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(d)}`});o.push(h.toString())}if(i!=null&&i.queryParams){const c=new URLSearchParams(i.queryParams);o.push(c.toString())}return i!=null&&i.skipBrowserRedirect&&o.push(`skip_http_redirect=${i.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async a=>{var i;const{data:o,error:c}=a;return c?this._returnResult({data:null,error:c}):await oe(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=o==null?void 0:o.session)===null||i===void 0?void 0:i.access_token})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _enroll(e){try{return await this._useSession(async a=>{var i,o;const{data:c,error:d}=a;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:p,error:g}=await oe(this.fetch,"POST",`${this.url}/factors`,{body:h,headers:this.headers,jwt:(i=c==null?void 0:c.session)===null||i===void 0?void 0:i.access_token});return g?this._returnResult({data:null,error:g}):(e.factorType==="totp"&&p.type==="totp"&&(!((o=p==null?void 0:p.totp)===null||o===void 0)&&o.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _verify(e){const a=async()=>{try{return await this._useSession(async i=>{var o;const{data:c,error:d}=i;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Yy(e.webauthn.credential_response):Xy(e.webauthn.credential_response)})}:{code:e.code}),{data:p,error:g}=await oe(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:h,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challenge(e){const a=async()=>{try{return await this._useSession(async i=>{var o;const{data:c,error:d}=i;if(d)return this._returnResult({data:null,error:d});const h=await oe(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});if(h.error)return h;const{data:p}=h;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Gy(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Ky(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challengeAndVerify(e){const{data:a,error:i}=await this._challenge({factorId:e.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:e.factorId,challengeId:a.id,code:e.code})}async _listFactors(){var e;const{data:{user:a},error:i}=await this.getUser();if(i)return{data:null,error:i};const o={all:[],phone:[],totp:[],webauthn:[]};for(const c of(e=a==null?void 0:a.factors)!==null&&e!==void 0?e:[])o.all.push(c),c.status==="verified"&&o[c.factor_type].push(c);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(e){var a,i,o,c;if(e)try{const{payload:w}=Dl(e);let S=null;w.aal&&(S=w.aal);let T=S;const{data:{user:C},error:_}=await this.getUser(e);if(_)return this._returnResult({data:null,error:_});((i=(a=C==null?void 0:C.factors)===null||a===void 0?void 0:a.filter(P=>P.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(T="aal2");const O=w.amr||[];return{data:{currentLevel:S,nextLevel:T,currentAuthenticationMethods:O},error:null}}catch(w){if(ne(w))return this._returnResult({data:null,error:w});throw w}const{data:{session:d},error:h}=await this.getSession();if(h)return this._returnResult({data:null,error:h});if(!d)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=Dl(d.access_token);let g=null;p.aal&&(g=p.aal);let y=g;((c=(o=d.user.factors)===null||o===void 0?void 0:o.filter(w=>w.status==="verified"))!==null&&c!==void 0?c:[]).length>0&&(y="aal2");const x=p.amr||[];return{data:{currentLevel:g,nextLevel:y,currentAuthenticationMethods:x},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async a=>{const{data:{session:i},error:o}=a;return o?this._returnResult({data:null,error:o}):i?await oe(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:i.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new vt})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _approveAuthorization(e,a){try{return await this._useSession(async i=>{const{data:{session:o},error:c}=i;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new vt});const d=await oe(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&Et()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(e,a){try{return await this._useSession(async i=>{const{data:{session:o},error:c}=i;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new vt});const d=await oe(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&Et()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:a},error:i}=e;return i?this._returnResult({data:null,error:i}):a?await oe(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:a.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new vt})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async a=>{const{data:{session:i},error:o}=a;return o?this._returnResult({data:null,error:o}):i?(await oe(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new vt})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async fetchJwk(e,a={keys:[]}){let i=a.keys.find(h=>h.kid===e);if(i)return i;const o=Date.now();if(i=this.jwks.keys.find(h=>h.kid===e),i&&this.jwks_cached_at+i_>o)return i;const{data:c,error:d}=await oe(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(d)throw d;return!c.keys||c.keys.length===0||(this.jwks=c,this.jwks_cached_at=o,i=c.keys.find(h=>h.kid===e),!i)?null:i}async getClaims(e,a={}){try{let i=e;if(!i){const{data:w,error:S}=await this.getSession();if(S||!w.session)return this._returnResult({data:null,error:S});i=w.session.access_token}const{header:o,payload:c,signature:d,raw:{header:h,payload:p}}=Dl(i);if(!(a!=null&&a.allowExpired))try{C_(c.exp)}catch(w){throw new tc(w instanceof Error?w.message:"JWT validation failed")}const g=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,a!=null&&a.keys?{keys:a.keys}:a==null?void 0:a.jwks);if(!g){const{error:w}=await this.getUser(i);if(w)throw w;return{data:{claims:c,header:o,signature:d},error:null}}const y=A_(o.alg),v=await crypto.subtle.importKey("jwk",g,y,!0,["verify"]);if(!await crypto.subtle.verify(y,v,d,m_(`${h}.${p}`)))throw new tc("Invalid JWT signature");return{data:{claims:c,header:o,signature:d},error:null}}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async signInWithPasskey(e){var a,i,o;jn(this.experimental);try{if(!ac())return this._returnResult({data:null,error:new Tn("Browser does not support WebAuthn",null)});const{data:c,error:d}=await this._startPasskeyAuthentication({options:{captchaToken:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}});if(d||!c)return this._returnResult({data:null,error:d});const h=Ky(c.options),p=(o=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.signal)!==null&&o!==void 0?o:$h.createNewAbortSignal(),{data:g,error:y}=await Sx({publicKey:h,signal:p});if(y||!g)return this._returnResult({data:null,error:y??new Tn("WebAuthn ceremony failed",null)});const v=Xy(g);return this._verifyPasskeyAuthentication({challengeId:c.challenge_id,credential:v})}catch(c){if(ne(c))return this._returnResult({data:null,error:c});throw c}}async registerPasskey(e){var a,i;jn(this.experimental);try{if(!ac())return this._returnResult({data:null,error:new Tn("Browser does not support WebAuthn",null)});const{data:o,error:c}=await this._startPasskeyRegistration();if(c||!o)return this._returnResult({data:null,error:c});const d=Gy(o.options),h=(i=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.signal)!==null&&i!==void 0?i:$h.createNewAbortSignal(),{data:p,error:g}=await wx({publicKey:d,signal:h});if(g||!p)return this._returnResult({data:null,error:g??new Tn("WebAuthn ceremony failed",null)});const y=Yy(p);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:y})}catch(o){if(ne(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){jn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!a)return this._returnResult({data:null,error:new vt});const{data:o,error:c}=await oe(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:a.access_token,body:{}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){jn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:i},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!i)return this._returnResult({data:null,error:new vt});const{data:c,error:d}=await oe(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:i.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _startPasskeyAuthentication(e){var a;jn(this.experimental);try{const{data:i,error:o}=await oe(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:i,error:null})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _verifyPasskeyAuthentication(e){jn(this.experimental);try{const{data:a,error:i}=await oe(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:mn});return i?this._returnResult({data:null,error:i}):(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),this._returnResult({data:a,error:null}))}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _listPasskeys(){jn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!a)return this._returnResult({data:null,error:new vt});const{data:o,error:c}=await oe(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:a.access_token,xform:d=>({data:d,error:null})});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){jn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:i},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!i)return this._returnResult({data:null,error:new vt});const{data:c,error:d}=await oe(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,body:{friendly_name:e.friendlyName}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _deletePasskey(e){jn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:i},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!i)return this._returnResult({data:null,error:new vt});const{error:c}=await oe(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,noResolveJson:!0});return c?this._returnResult({data:null,error:c}):this._returnResult({data:null,error:null})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}}Ys.nextInstanceID={};const Z_=Ys,eT="2.108.2";let Ds="",sc;if(typeof Deno<"u"){var ih;Ds="deno",sc=(ih=Deno.version)===null||ih===void 0?void 0:ih.deno}else if(typeof document<"u")Ds="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Ds="react-native";else{var sh;Ds="node",sc=typeof process<"u"?(sh=process.version)===null||sh===void 0?void 0:sh.replace(/^v/,""):void 0}const jx=[`runtime=${Ds}`];sc&&jx.push(`runtime-version=${sc}`);const tT={"X-Client-Info":`supabase-js/${eT}; ${jx.join("; ")}`},nT={headers:tT},rT={schema:"public"},aT={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},iT={},sT={enabled:!1,respectSamplingDecision:!0};function oT(t,e,a,i){function o(c){return c instanceof a?c:new a(function(d){d(c)})}return new(a||(a=Promise))(function(c,d){function h(y){try{g(i.next(y))}catch(v){d(v)}}function p(y){try{g(i.throw(y))}catch(v){d(v)}}function g(y){y.done?c(y.value):o(y.value).then(h,p)}g((i=i.apply(t,[])).next())})}let oh=null;const lT="@opentelemetry/api";function cT(){return oh===null&&(oh=import(lT).catch(()=>null)),oh}function uT(){return oT(this,void 0,void 0,function*(){try{const t=yield cT();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const a=e.traceparent;return a?{traceparent:a,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function dT(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[a,i,o,c]=e;if(a.length!==2||i.length!==32||o.length!==16||c.length!==2)return null;const d=/^[0-9a-f]+$/i;return!d.test(a)||!d.test(i)||!d.test(o)||!d.test(c)||i==="00000000000000000000000000000000"||o==="0000000000000000"?null:{version:a,traceId:i,parentId:o,traceFlags:c,isSampled:(parseInt(c,16)&1)===1}}function hT(t,e){if(!t||!e||e.length===0)return!1;let a;if(t instanceof URL)a=t;else try{a=new URL(t)}catch{return!1}for(const i of e)try{if(typeof i=="string"){if(fT(a.hostname,i))return!0}else if(i instanceof RegExp){if(i.test(a.hostname))return!0}else if(typeof i=="function"&&i(a))return!0}catch{continue}return!1}function fT(t,e){if(e===t)return!0;if(e.startsWith("*.")){const a=e.slice(2);if(t.endsWith(a)&&(t===a||t.endsWith("."+a)))return!0}return!1}function pT(t){const e=[];try{const a=new URL(t);e.push(a.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Xs(t){"@babel/helpers - typeof";return Xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xs(t)}function mT(t,e){if(Xs(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var i=a.call(t,e);if(Xs(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function gT(t){var e=mT(t,"string");return Xs(e)=="symbol"?e:e+""}function yT(t,e,a){return(e=gT(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Wy(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,i)}return a}function Ze(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Wy(Object(a),!0).forEach(function(i){yT(t,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Wy(Object(a)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))})}return t}const vT=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),bT=()=>Headers,xT=(t,e,a,i,o)=>{const c=vT(i),d=bT(),h=(o==null?void 0:o.enabled)===!0,p=(o==null?void 0:o.respectSamplingDecision)!==!1,g=h?pT(e):null;return async(y,v)=>{var x;const w=(x=await a())!==null&&x!==void 0?x:t;let S=new d(v==null?void 0:v.headers);if(S.has("apikey")||S.set("apikey",t),S.has("Authorization")||S.set("Authorization",`Bearer ${w}`),g){const T=await wT(y,g,p);T&&(T.traceparent&&!S.has("traceparent")&&S.set("traceparent",T.traceparent),T.tracestate&&!S.has("tracestate")&&S.set("tracestate",T.tracestate),T.baggage&&!S.has("baggage")&&S.set("baggage",T.baggage))}return c(y,Ze(Ze({},v),{},{headers:S}))}};async function wT(t,e,a){if(!hT(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const i=await uT();if(!i||!i.traceparent)return null;if(a){const o=dT(i.traceparent);if(o&&!o.isSampled)return null}return i}function Jy(t){return typeof t=="boolean"?{enabled:t}:t}function ST(t){return t.endsWith("/")?t:t+"/"}function jT(t,e){var a,i,o,c,d,h;const{db:p,auth:g,realtime:y,global:v}=t,{db:x,auth:w,realtime:S,global:T}=e,C=Jy(t.tracePropagation),_=Jy(e.tracePropagation),R={db:Ze(Ze({},x),p),auth:Ze(Ze({},w),g),realtime:Ze(Ze({},S),y),storage:{},global:Ze(Ze(Ze({},T),v),{},{headers:Ze(Ze({},(a=T==null?void 0:T.headers)!==null&&a!==void 0?a:{}),(i=v==null?void 0:v.headers)!==null&&i!==void 0?i:{})}),tracePropagation:{enabled:(o=(c=C==null?void 0:C.enabled)!==null&&c!==void 0?c:_==null?void 0:_.enabled)!==null&&o!==void 0?o:!1,respectSamplingDecision:(d=(h=C==null?void 0:C.respectSamplingDecision)!==null&&h!==void 0?h:_==null?void 0:_.respectSamplingDecision)!==null&&d!==void 0?d:!0},accessToken:async()=>""};return t.accessToken?R.accessToken=t.accessToken:delete R.accessToken,R}function kT(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(ST(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var _T=class extends Z_{constructor(t){super(t)}},TT=class{constructor(t,e,a){var i,o;this.supabaseUrl=t,this.supabaseKey=e;const c=kT(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const d=`sb-${c.hostname.split(".")[0]}-auth-token`,h={db:rT,realtime:iT,auth:Ze(Ze({},aT),{},{storageKey:d}),global:nT,tracePropagation:sT},p=jT(a??{},h);if(this.settings=p,this.storageKey=(i=p.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(o=p.global.headers)!==null&&o!==void 0?o:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(y,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=p.auth)!==null&&g!==void 0?g:{},this.headers,p.global.fetch)}this.fetch=xT(e,t,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(Ze({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new Vj(new URL("rest/v1",c).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new Zk(this.storageUrl.href,this.headers,this.fetch,a==null?void 0:a.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new Rj(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},a={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,a)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,a;if(t.accessToken)return await t.accessToken();const{data:i}=await t.auth.getSession();return(e=(a=i.session)===null||a===void 0?void 0:a.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:i,userStorage:o,storageKey:c,flowType:d,lock:h,debug:p,throwOnError:g,experimental:y,lockAcquireTimeout:v,skipAutoInitialize:x},w,S){const T={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new _T({url:this.authUrl.href,headers:Ze(Ze({},T),w),storageKey:c,autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:i,userStorage:o,flowType:d,lock:h,debug:p,throwOnError:g,experimental:y,fetch:S,lockAcquireTimeout:v,skipAutoInitialize:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(C=>C.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new Sk(this.realtimeUrl.href,Ze(Ze({},t),{},{params:Ze(Ze({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,a){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==a?(this.changedAccessToken=a,this.realtime.setAuth(a)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const ET=(t,e,a)=>new TT(t,e,a);function CT(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const a=e.match(/^v(\d+)\./);return a?parseInt(a[1],10)<=18:!1}CT()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const AT="https://nestgoiyryhcmwtdeoou.supabase.co",NT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3Rnb2l5cnloY213dGRlb291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNjI3MTUsImV4cCI6MjA5NzczODcxNX0.TJv9KqIl-2TZFsaEB3Lr0TzWKGR9GG1pE6abmr1FwYw",te=ET(AT,NT,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),Qy=t=>{let e;const a=new Set,i=(g,y)=>{const v=typeof g=="function"?g(e):g;if(!Object.is(v,e)){const x=e;e=y??(typeof v!="object"||v===null)?v:Object.assign({},e,v),a.forEach(w=>w(e,x))}},o=()=>e,h={setState:i,getState:o,getInitialState:()=>p,subscribe:g=>(a.add(g),()=>a.delete(g))},p=e=t(i,o,h);return h},RT=(t=>t?Qy(t):Qy),OT=t=>t;function DT(t,e=OT){const a=Ns.useSyncExternalStore(t.subscribe,Ns.useCallback(()=>e(t.getState()),[t,e]),Ns.useCallback(()=>e(t.getInitialState()),[t,e]));return Ns.useDebugValue(a),a}const Zy=t=>{const e=RT(t),a=i=>DT(e,i);return Object.assign(a,e),a},Fr=(t=>t?Zy(t):Zy),mt=Fr((t,e)=>({user:null,session:null,profile:null,isLoading:!0,error:null,_authListener:null,initialize:async()=>{var a;try{const{_authListener:i}=e();i&&(i(),t({_authListener:null}));const{data:{session:o},error:c}=await te.auth.getSession();if(c)throw c;if(o){let{data:h}=await te.from("profiles").select("*").eq("id",o.user.id).single();if(!h){const p=((a=o.user.email)==null?void 0:a.split("@")[0])||"user",{data:g}=await te.from("profiles").insert({id:o.user.id,username:p,display_name:p}).select().single();h=g}t({user:o.user,session:o,profile:h,isLoading:!1})}else t({user:null,session:null,profile:null,isLoading:!1});const d=te.auth.onAuthStateChange(async(h,p)=>{var g;if(p){let{data:y}=await te.from("profiles").select("*").eq("id",p.user.id).single();if(!y){const v=((g=p.user.email)==null?void 0:g.split("@")[0])||"user",{data:x}=await te.from("profiles").insert({id:p.user.id,username:v,display_name:v}).select().single();y=x}t({user:p.user,session:p,profile:y})}else t({user:null,session:null,profile:null})});t({_authListener:d})}catch(i){t({isLoading:!1,error:i.message})}},signIn:async(a,i)=>{const{data:o,error:c}=await te.auth.signInWithPassword({email:a,password:i});if(c)throw c;return o},signUp:async(a,i,o={})=>{const{data:c,error:d}=await te.auth.signUp({email:a,password:i,options:{data:o,emailRedirectTo:`${window.location.origin}/auth/callback`}});if(d)throw d;if(c!=null&&c.user){const h=o.username||a.split("@")[0],{error:p}=await te.from("profiles").insert({id:c.user.id,username:h,display_name:h});p&&console.warn("Failed to create profile:",p.message)}return c},signOut:async()=>{const{error:a}=await te.auth.signOut();if(a)throw a;t({user:null,session:null,profile:null})},updateProfile:async a=>{const{user:i}=e();if(!i)throw new Error("Not authenticated");const{data:o,error:c}=await te.from("profiles").update(a).eq("id",i.id).select().single();if(c)throw c;return t({profile:o}),o}}));function LT(){const t=rn(),{signIn:e,signUp:a}=mt(),[i,o]=j.useState(!1),[c,d]=j.useState(""),[h,p]=j.useState(""),[g,y]=j.useState(""),[v,x]=j.useState(!1),[w,S]=j.useState(null);j.useEffect(()=>{document.title=i?"Sign Up | FrameX":"Log In | FrameX"},[i]);const T=async _=>{_.preventDefault(),x(!0),S(null);try{i?(await a(c,h,{username:g||c.split("@")[0]}),alert("Check your email for the confirmation link!"),o(!1)):(await e(c,h),t("/home"))}catch(R){S(R.message)}finally{x(!1)}},C=async _=>{try{await te.auth.signInWithOAuth({provider:_,options:{redirectTo:`${window.location.origin}/auth/callback`}})}catch(R){S(R.message)}};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(_f,{}),u.jsx("section",{className:"auth-section",children:u.jsxs("div",{className:"auth-glass",children:[u.jsxs("div",{className:"auth-header",children:[u.jsx("span",{className:"section-label",children:i?"Get Started":"Welcome Back"}),u.jsx("h1",{children:i?"Sign Up":"Log In"}),u.jsx("p",{children:i?"Create your FrameX account":"Sign in to continue to FrameX"})]}),w&&u.jsx("div",{className:"auth-error",children:w}),u.jsxs("form",{className:"auth-form",onSubmit:T,children:[i&&u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"username",children:[u.jsx("i",{className:"fas fa-user"})," Username"]}),u.jsx("input",{id:"username",type:"text",placeholder:"yourname",value:g,onChange:_=>y(_.target.value)})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"email",children:[u.jsx("i",{className:"fas fa-envelope"})," Email"]}),u.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",value:c,onChange:_=>d(_.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"password",children:[u.jsx("i",{className:"fas fa-lock"})," Password"]}),u.jsx("input",{id:"password",type:"password",placeholder:i?"Create a password":"Enter your password",value:h,onChange:_=>p(_.target.value),required:!0,minLength:6})]}),u.jsx("button",{type:"submit",className:"btn-primary auth-submit",disabled:v,children:v?u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"})," ",i?"Creating account...":"Signing in..."]}):u.jsxs("span",{children:[i?"Create Account":"Sign In"," ",u.jsx("i",{className:"fas fa-arrow-right"})]})})]}),u.jsx("div",{className:"auth-divider",children:u.jsx("span",{children:"or continue with"})}),u.jsxs("div",{className:"social-auth",children:[u.jsxs("button",{className:"social-auth-btn",onClick:()=>C("google"),children:[u.jsx("i",{className:"fab fa-google"})," Google"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>C("apple"),children:[u.jsx("i",{className:"fab fa-apple"})," Apple"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>C("github"),children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]})]}),u.jsx("p",{className:"auth-footer-text",children:i?u.jsxs(u.Fragment,{children:["Already have an account? ",u.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),o(!1),S(null)},children:"Log In"})]}):u.jsxs(u.Fragment,{children:["Don't have an account? ",u.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),o(!0),S(null)},children:"Sign Up"})]})})]})}),u.jsx(Tf,{}),u.jsx("style",{children:`
        /* ===== AUTH PAGE (Login / Sign Up) ===== */
        .auth-section {
            padding: 8rem 5% 4rem;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
        }

        .auth-glass {
            max-width: 440px;
            width: 100%;
            padding: 3rem 2.5rem;
            position: relative;
            isolation: isolate;
            overflow: hidden;
            background: rgba(255, 255, 255, 0.04);
            backdrop-filter: blur(var(--glass-blur));
            -webkit-backdrop-filter: blur(var(--glass-blur));
            border-radius: 28px;
            box-shadow:
                0 16px 48px rgba(0, 0, 0, 0.5),
                inset 0 1px 0 rgba(255, 255, 255, 0.08);
        }

        .auth-glass::before {
            display: none;
        }

        .auth-glass::after {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            z-index: -1;
            background: linear-gradient(
                45deg,
                transparent 30%,
                rgba(255, 255, 255, 0.03) 40%,
                rgba(255, 255, 255, 0.06) 45%,
                rgba(255, 255, 255, 0.03) 50%,
                transparent 60%
            );
            pointer-events: none;
            animation: glassShine 8s ease-in-out infinite;
        }

        .auth-header {
            text-align: center;
            margin-bottom: 2rem;
        }

        .auth-header h1 {
            font-size: clamp(1.8rem, 3vw, 2.2rem);
            font-family: var(--font-display);
            margin-bottom: 0.5rem;
        }

        .auth-header p {
            color: rgba(255, 255, 255, 0.45);
            font-size: 0.9rem;
        }

        .auth-error {
            padding: 0.75rem 1rem;
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.2);
            border-radius: 12px;
            color: #ef4444;
            font-size: 0.85rem;
            margin-bottom: 1rem;
            text-align: center;
        }

        .auth-form {
            display: flex;
            flex-direction: column;
            gap: 1.25rem;
        }

        .form-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .form-group label {
            font-size: 0.82rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.65);
            letter-spacing: 0.02em;
        }

        .form-group label i {
            width: 16px;
            color: var(--color-amber);
            opacity: 0.7;
            margin-right: 0.4rem;
        }

        .form-group input {
            width: 100%;
            padding: 0.85rem 1rem;
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-radius: 12px;
            color: #fff;
            font-size: 0.95rem;
            font-family: var(--font-body);
            outline: none;
            transition: all 0.3s ease;
        }

        .form-group input::placeholder {
            color: rgba(255, 255, 255, 0.2);
        }

        .form-group input:focus {
            border-color: var(--color-amber);
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 3px rgba(251, 191, 36, 0.08);
        }

        .auth-submit {
            width: 100%;
            justify-content: center;
            margin-top: 0.5rem;
        }

        .auth-submit i {
            font-size: 0.85rem;
            transition: transform 0.3s ease;
        }

        .auth-submit:hover i {
            transform: translateX(4px);
        }

        .auth-divider {
            display: flex;
            align-items: center;
            gap: 1rem;
            margin: 1.5rem 0;
            color: rgba(255, 255, 255, 0.25);
            font-size: 0.8rem;
        }

        .auth-divider::before,
        .auth-divider::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(255, 255, 255, 0.06);
        }

        .social-auth {
            display: flex;
            flex-direction: column;
            gap: 0.75rem;
        }

        .social-auth-btn {
            width: 100%;
            padding: 0.8rem 1rem;
            background: var(--color-glass);
            border: var(--glass-border);
            border-radius: 12px;
            color: rgba(255, 255, 255, 0.7);
            font-size: 0.9rem;
            font-family: var(--font-body);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.6rem;
            transition: all 0.3s ease;
        }

        .social-auth-btn:hover {
            background: var(--color-glass-hover);
            border-color: rgba(255, 255, 255, 0.15);
            color: #fff;
            transform: translateY(-1px);
        }

        .social-auth-btn i {
            font-size: 1.1rem;
        }

        .auth-footer-text {
            text-align: center;
            margin-top: 1.5rem;
            color: rgba(255, 255, 255, 0.4);
            font-size: 0.88rem;
        }

        .auth-footer-text a {
            color: var(--color-amber);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .auth-footer-text a:hover {
            color: #fff;
        }

        @media (max-width: 480px) {
            .auth-glass {
                padding: 2rem 1.5rem;
                border-radius: 20px;
            }
        }
      `})]})}const at={menu:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),u.jsx("polyline",{points:"13 2 13 9 20 9"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),close:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),attachment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"})}),emoji:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),u.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),u.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),mic:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"}),u.jsx("path",{d:"M19 10v2a7 7 0 01-14 0v-2"}),u.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"})]}),send:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),u.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"17 6 7 16 2 11"}),u.jsx("polyline",{points:"22 6 12 16 9 13"})]}),reply:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 17 4 12 9 7"}),u.jsx("path",{d:"M20 18v-2a4 4 0 00-4-4H4"})]}),logo:"F"},hi=[{id:1,name:"Your Story",avatar:"",online:!0,unread:!1,isOwn:!0,stories:[{id:101,type:"gradient",gradient:"linear-gradient(135deg, #C6FF00, #00E5FF)",duration:5e3}]},{id:2,name:"Luna",avatar:"",online:!0,unread:!0,stories:[{id:201,type:"gradient",gradient:"linear-gradient(135deg, #f093fb, #f5576c)",duration:5e3},{id:202,type:"gradient",gradient:"linear-gradient(135deg, #4facfe, #00f2fe)",duration:4e3}]},{id:3,name:"Marcus",avatar:"",online:!0,unread:!0,stories:[{id:301,type:"gradient",gradient:"linear-gradient(135deg, #a18cd1, #fbc2eb)",duration:5e3}]},{id:4,name:"Sofia",avatar:"",online:!1,unread:!1,stories:[{id:401,type:"gradient",gradient:"linear-gradient(135deg, #fccb90, #d57eeb)",duration:4e3}]},{id:5,name:"Kai",avatar:"",online:!0,unread:!0,stories:[{id:501,type:"gradient",gradient:"linear-gradient(135deg, #667eea, #764ba2)",duration:5e3}]},{id:6,name:"Zara",avatar:"",online:!1,unread:!1,stories:[{id:601,type:"gradient",gradient:"linear-gradient(135deg, #89f7fe, #66a6ff)",duration:4e3}]},{id:7,name:"Jules",avatar:"",online:!0,unread:!0,stories:[{id:701,type:"gradient",gradient:"linear-gradient(135deg, #f43b47, #453a94)",duration:5e3}]}];function MT({stories:t,userIndex:e,storyIndex:a,onClose:i,onNext:o,onPrev:c}){const d=t[e];if(!d||!d.stories[a])return null;const h=d.stories[a];(a+1)/d.stories.length*100;const p=g=>(g==null?void 0:g.split(" ").map(y=>y[0]).join("").toUpperCase().slice(0,2))||"?";return u.jsx("div",{className:"story-viewer-overlay",onClick:i,children:u.jsxs("div",{className:"story-viewer",onClick:g=>g.stopPropagation(),children:[u.jsxs("div",{className:"story-viewer-header",children:[u.jsx("div",{className:"story-viewer-progress",children:d.stories.map((g,y)=>u.jsx("div",{className:`story-progress-bar ${y<=a?"active":""} ${y===a?"animating":""}`},y))}),u.jsxs("div",{className:"story-viewer-user",children:[u.jsx("div",{className:"story-viewer-avatar",style:{background:d.gradient||"rgba(255,255,255,0.1)"},children:d.avatar?u.jsx("img",{src:d.avatar,alt:""}):u.jsx("span",{children:p(d.name)})}),u.jsx("span",{className:"story-viewer-name",children:d.name}),u.jsx("span",{className:"story-viewer-time",children:"Just now"})]}),u.jsx("button",{className:"story-viewer-close",onClick:i,children:at.close})]}),u.jsx("div",{className:"story-viewer-content",style:{background:h.gradient||"#1a1a2e"},children:u.jsxs("div",{className:"story-viewer-text",children:[d.name,"'s Story"]})}),u.jsxs("div",{className:"story-viewer-tap-areas",children:[u.jsx("div",{className:"story-tap-left",onClick:g=>{g.stopPropagation(),c()}}),u.jsx("div",{className:"story-tap-right",onClick:g=>{g.stopPropagation(),o()}})]})]})})}function zT({users:t}){if(!t||t.length===0)return null;const e=t.length===1?`${t[0]} is typing...`:`${t.length} people are typing...`;return u.jsxs("div",{className:"typing-indicator",children:[u.jsxs("div",{className:"typing-dots",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]}),u.jsx("span",{className:"typing-label",children:e})]})}function UT({date:t}){const e=new Date,a=new Date(t),i=e.toDateString()===a.toDateString(),o=new Date(e);o.setDate(o.getDate()-1);const c=o.toDateString()===a.toDateString();let d=i?"Today":c?"Yesterday":a.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return u.jsx("div",{className:"date-divider",children:u.jsx("span",{children:d})})}const ev=`
/* ── Base ── */
.chat-page {
  --chat-bg: #050816;
  --chat-glass: rgba(255,255,255,0.08);
  --chat-glass-strong: rgba(255,255,255,0.12);
  --chat-glass-hover: rgba(255,255,255,0.14);
  --chat-accent: #C6FF00;
  --chat-cyan: #00E5FF;
  --chat-text: #ffffff;
  --chat-text-secondary: rgba(255,255,255,0.6);
  --chat-radius: 24px;
  --chat-radius-sm: 16px;
  --chat-radius-pill: 50px;
  --chat-blur: 24px;
  --chat-header-h: 64px;
  --chat-composer-h: 72px;
  --chat-sidebar-w: 280px;
  --font-body: 'DM Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: var(--chat-bg);
  color: var(--chat-text);
  font-family: var(--font-body);
  overflow: hidden;
  position: relative;
}

/* ── Header ── */
.chat-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: var(--chat-header-h);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  background: rgba(5, 8, 22, 0.75);
  backdrop-filter: blur(var(--chat-blur));
  -webkit-backdrop-filter: blur(var(--chat-blur));
  border-bottom: 1px solid rgba(255,255,255,0.06);
  z-index: 50;
}

.chat-header-left {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 120px;
}

.chat-header-center {
  flex: 1;
  text-align: center;
}

.chat-header-center h2 {
  font-size: 16px;
  font-weight: 600;
  font-family: var(--font-body);
  color: var(--chat-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.chat-header-right {
  display: flex;
  align-items: center;
  gap: 4px;
  min-width: 120px;
  justify-content: flex-end;
}

.header-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--chat-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 8px;
}

.header-btn:hover,
.header-btn:active {
  background: var(--chat-glass);
  color: var(--chat-text);
  transform: scale(0.92);
}

.header-btn svg {
  width: 22px;
  height: 22px;
}

.header-logo {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: var(--chat-accent);
  color: var(--chat-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  font-size: 18px;
  cursor: pointer;
  transition: transform 0.2s ease;
  border: none;
  flex-shrink: 0;
}

.header-logo:active {
  transform: scale(0.9);
}

.hamburger-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--chat-text);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.2s ease;
}

.hamburger-btn:hover,
.hamburger-btn:active {
  background: var(--chat-glass);
  transform: scale(0.92);
}

.hamburger-btn svg {
  width: 22px;
  height: 22px;
}

/* ── Sidebar ── */
.sidebar-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 60;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.sidebar-overlay.open {
  opacity: 1;
  pointer-events: all;
}

.chat-sidebar {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--chat-sidebar-w);
  max-width: 85vw;
  background: rgba(10, 14, 30, 0.92);
  backdrop-filter: blur(var(--chat-blur));
  -webkit-backdrop-filter: blur(var(--chat-blur));
  border-right: 1px solid rgba(255,255,255,0.06);
  z-index: 70;
  display: flex;
  flex-direction: column;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  overflow: hidden;
}

.chat-sidebar.open {
  transform: translateX(0);
}

.sidebar-profile {
  padding: 24px 20px 16px;
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.sidebar-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--chat-accent);
  color: var(--chat-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
}

.sidebar-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-dot {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: #22c55e;
  border: 3px solid rgba(10, 14, 30, 0.92);
}

.sidebar-user-info {
  flex: 1;
  min-width: 0;
}

.sidebar-username {
  font-size: 16px;
  font-weight: 600;
  color: var(--chat-text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.sidebar-status {
  font-size: 12px;
  color: #22c55e;
  font-weight: 500;
}

/* ── Sidebar Nav ── */
.sidebar-nav {
  flex: 1;
  padding: 12px 12px;
  overflow-y: auto;
}

.sidebar-nav-item {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: var(--chat-radius-sm);
  color: var(--chat-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-family: var(--font-body);
}

.sidebar-nav-item svg {
  width: 22px;
  height: 22px;
  flex-shrink: 0;
}

.sidebar-nav-item:hover {
  background: var(--chat-glass);
  color: var(--chat-text);
}

.sidebar-nav-item.active {
  background: rgba(198, 255, 0, 0.1);
  color: var(--chat-accent);
}

.sidebar-nav-item.active svg {
  color: var(--chat-accent);
}

.sidebar-nav-label {
  font-weight: 500;
}

.sidebar-section-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255,255,255,0.3);
  padding: 16px 14px 8px;
  font-weight: 600;
}

/* ── Sidebar Bottom ── */
.sidebar-bottom {
  padding: 12px;
  border-top: 1px solid rgba(255,255,255,0.06);
}

.sidebar-logout {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 14px;
  border-radius: var(--chat-radius-sm);
  color: #ef4444;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-family: var(--font-body);
}

.sidebar-logout svg {
  width: 22px;
  height: 22px;
}

.sidebar-logout:hover {
  background: rgba(239, 68, 68, 0.1);
}

.sidebar-version {
  text-align: center;
  padding: 8px;
  font-size: 11px;
  color: rgba(255,255,255,0.2);
  letter-spacing: 0.5px;
}

/* ── Main Content ── */
.chat-main {
  flex: 1;
  margin-top: var(--chat-header-h);
  margin-bottom: var(--chat-composer-h);
  overflow-y: auto;
  overflow-x: hidden;
  padding: 16px;
  display: flex;
  flex-direction: column;
  scroll-behavior: smooth;
  position: relative;
}

.chat-main::-webkit-scrollbar {
  width: 4px;
}

.chat-main::-webkit-scrollbar-track {
  background: transparent;
}

.chat-main::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.15);
  border-radius: 10px;
}

/* ── Messages ── */
.messages-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 8px 0;
  max-width: 720px;
  width: 100%;
  margin: 0 auto;
}

.date-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 12px;
}

.date-divider span {
  background: var(--chat-glass);
  padding: 4px 16px;
  border-radius: var(--chat-radius-pill);
  font-size: 12px;
  color: var(--chat-text-secondary);
  font-weight: 500;
  backdrop-filter: blur(10px);
}

.chat-msg-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 75%;
  animation: msgFadeSlide 0.35s ease forwards;
}

.chat-msg-wrapper.incoming {
  align-self: flex-start;
}

.chat-msg-wrapper.outgoing {
  align-self: flex-end;
}

.chat-msg-bubble {
  padding: 10px 16px;
  border-radius: var(--chat-radius-sm);
  font-size: 14px;
  line-height: 1.5;
  position: relative;
  word-wrap: break-word;
  overflow-wrap: break-word;
}

.chat-msg-wrapper.incoming .chat-msg-bubble {
  background: var(--chat-glass);
  border: 1px solid rgba(255,255,255,0.05);
  border-bottom-left-radius: 4px;
  color: var(--chat-text);
}

.chat-msg-wrapper.outgoing .chat-msg-bubble {
  background: rgba(198, 255, 0, 0.15);
  border: 1px solid rgba(198, 255, 0, 0.2);
  border-bottom-right-radius: 4px;
  color: var(--chat-text);
}

.chat-msg-meta {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  padding: 0 4px;
}

.chat-msg-wrapper.incoming .chat-msg-meta {
  justify-content: flex-start;
}

.chat-msg-wrapper.outgoing .chat-msg-meta {
  justify-content: flex-end;
}

.chat-msg-time {
  font-size: 11px;
  color: var(--chat-text-secondary);
}

.chat-msg-receipt {
  display: flex;
  align-items: center;
}

.chat-msg-receipt svg {
  width: 14px;
  height: 14px;
  color: var(--chat-accent);
}

.chat-msg-reactions {
  display: flex;
  gap: 4px;
  margin-top: 4px;
  flex-wrap: wrap;
}

.msg-reaction {
  font-size: 12px;
  background: var(--chat-glass);
  padding: 2px 8px;
  border-radius: var(--chat-radius-pill);
  cursor: pointer;
  transition: all 0.2s ease;
  border: 1px solid transparent;
  user-select: none;
}

.msg-reaction:hover {
  background: var(--chat-glass-hover);
  border-color: rgba(198, 255, 0, 0.3);
  transform: scale(1.05);
}

.chat-msg-reply {
  font-size: 12px;
  color: var(--chat-cyan);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 2px;
  padding: 0 4px;
  opacity: 0.6;
  transition: opacity 0.2s;
  background: none;
  border: none;
  font-family: var(--font-body);
}

.chat-msg-reply:hover {
  opacity: 1;
}

.chat-msg-reply svg {
  width: 12px;
  height: 12px;
}

/* ── Typing Indicator ── */
.typing-indicator {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 4px;
  align-self: flex-start;
}

.typing-dots {
  display: flex;
  align-items: center;
  gap: 3px;
  background: var(--chat-glass);
  padding: 8px 12px;
  border-radius: var(--chat-radius-pill);
}

.typing-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--chat-text-secondary);
  animation: typingBounce 1.4s ease-in-out infinite;
}

.typing-dot:nth-child(2) { animation-delay: 0.2s; }
.typing-dot:nth-child(3) { animation-delay: 0.4s; }

.typing-label {
  font-size: 12px;
  color: var(--chat-text-secondary);
  font-style: italic;
}

/* ── Empty State ── */
.empty-state {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--chat-text-secondary);
  gap: 12px;
  padding: 40px 20px;
  text-align: center;
}

.empty-state-icon {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: var(--chat-glass);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
}

.empty-state-icon svg {
  width: 32px;
  height: 32px;
  opacity: 0.5;
}

.empty-state h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--chat-text);
  font-family: var(--font-body);
}

.empty-state p {
  font-size: 14px;
  max-width: 280px;
  line-height: 1.5;
}

/* ── Composer ── */
.chat-composer-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: var(--chat-composer-h);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px 12px;
  background: linear-gradient(to top, var(--chat-bg) 60%, transparent);
  z-index: 40;
}

.chat-composer {
  display: flex;
  align-items: center;
  gap: 4px;
  width: 100%;
  max-width: 720px;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: var(--chat-radius-pill);
  padding: 4px 4px 4px 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.composer-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--chat-text);
  font-size: 15px;
  font-family: var(--font-body);
  padding: 10px 0;
  min-width: 0;
}

.composer-input::placeholder {
  color: var(--chat-text-secondary);
}

.composer-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: var(--chat-text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  flex-shrink: 0;
  padding: 8px;
}

.composer-btn:hover,
.composer-btn:active {
  background: var(--chat-glass);
  color: var(--chat-text);
  transform: scale(0.92);
}

.composer-btn.send-btn {
  background: var(--chat-accent);
  color: var(--chat-bg);
}

.composer-btn.send-btn:hover,
.composer-btn.send-btn:active {
  background: #b8f000;
  color: var(--chat-bg);
  transform: scale(0.92);
}

.composer-btn.send-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  transform: none;
}

.composer-btn svg {
  width: 20px;
  height: 20px;
}

/* ── Stories Rail ── */
.stories-rail-wrapper {
  position: fixed;
  right: 16px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 30;
  pointer-events: none;
}

.stories-rail {
  pointer-events: all;
  background: rgba(255,255,255,0.04);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: var(--chat-radius-pill);
  padding: 14px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  max-height: 80vh;
  overflow-y: auto;
  scrollbar-width: none;
  box-shadow: 0 8px 32px rgba(0,0,0,0.3);
}

.stories-rail::-webkit-scrollbar {
  display: none;
}

.story-avatar-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: storyFloat 3s ease-in-out infinite;
  animation-delay: calc(var(--story-index) * 0.3s);
}

.story-avatar-wrapper:active {
  transform: scale(1.1);
}

.story-avatar-ring {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.story-avatar-ring.unread {
  background: conic-gradient(from 0deg, var(--chat-accent), var(--chat-cyan), #a855f7, var(--chat-accent));
  animation: glowPulse 2s ease-in-out infinite;
}

.story-avatar-ring.seen {
  background: rgba(255,255,255,0.15);
}

.story-avatar-inner {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: rgba(20, 25, 50, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--chat-text);
  overflow: hidden;
  position: relative;
}

.story-avatar-inner img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-online-dot {
  position: absolute;
  bottom: 1px;
  right: 1px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #22c55e;
  border: 2px solid rgba(10, 14, 30, 0.95);
}

.story-avatar-name {
  font-size: 10px;
  color: var(--chat-text-secondary);
  white-space: nowrap;
  max-width: 62px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: center;
}

/* ── Story Viewer ── */
.story-viewer-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.92);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: fadeIn 0.2s ease;
}

.story-viewer {
  position: relative;
  width: 100%;
  max-width: 420px;
  height: 100vh;
  max-height: 700px;
  border-radius: var(--chat-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 60px rgba(0,0,0,0.5);
}

.story-viewer-header {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: linear-gradient(to bottom, rgba(0,0,0,0.5), transparent);
}

.story-viewer-progress {
  display: flex;
  gap: 4px;
}

.story-progress-bar {
  flex: 1;
  height: 3px;
  background: rgba(255,255,255,0.2);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.story-progress-bar.active {
  background: rgba(255,255,255,0.4);
}

.story-progress-bar.animating::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: #fff;
  animation: progressAnim var(--duration, 5s) linear forwards;
}

.story-viewer-user {
  display: flex;
  align-items: center;
  gap: 10px;
}

.story-viewer-avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  flex-shrink: 0;
}

.story-viewer-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.story-viewer-name {
  font-size: 14px;
  font-weight: 600;
  color: #fff;
}

.story-viewer-time {
  font-size: 12px;
  color: rgba(255,255,255,0.6);
}

.story-viewer-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: rgba(0,0,0,0.3);
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  transition: all 0.2s;
}

.story-viewer-close:hover {
  background: rgba(255,255,255,0.15);
}

.story-viewer-close svg {
  width: 20px;
  height: 20px;
}

.story-viewer-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.story-viewer-text {
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-shadow: 0 2px 20px rgba(0,0,0,0.3);
  text-align: center;
  padding: 20px;
}

.story-viewer-tap-areas {
  position: absolute;
  inset: 0;
  display: flex;
}

.story-tap-left,
.story-tap-right {
  flex: 1;
  cursor: pointer;
}

/* ── Loading ── */
.chat-loading {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 16px;
  background: var(--chat-bg);
  color: var(--chat-text-secondary);
}

.loading-spinner {
  width: 36px;
  height: 36px;
  border: 3px solid var(--chat-glass);
  border-top-color: var(--chat-accent);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

/* ── Channel List (no channel selected) ── */
.channel-selector {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px 0;
}

.channel-selector h3 {
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--chat-text-secondary);
  margin-bottom: 12px;
  font-family: var(--font-body);
  padding: 0 4px;
}

.channel-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 16px;
  border-radius: var(--chat-radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
  background: transparent;
  color: var(--chat-text);
  width: 100%;
  text-align: left;
  font-size: 15px;
  font-family: var(--font-body);
}

.channel-item:hover {
  background: var(--chat-glass);
}

.channel-item:active {
  transform: scale(0.98);
}

.channel-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--chat-glass-strong);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 16px;
  color: var(--chat-accent);
  flex-shrink: 0;
}

.channel-info {
  flex: 1;
  min-width: 0;
}

.channel-name {
  font-weight: 600;
  font-size: 15px;
}

.channel-preview {
  font-size: 13px;
  color: var(--chat-text-secondary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.channel-meta {
  text-align: right;
}

.channel-time {
  font-size: 11px;
  color: var(--chat-text-secondary);
}

.channel-unread {
  background: var(--chat-accent);
  color: var(--chat-bg);
  font-size: 11px;
  font-weight: 700;
  min-width: 20px;
  height: 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 6px;
  margin-top: 4px;
}

/* ── Responsive ── */
@media (max-width: 1024px) {
  .stories-rail-wrapper {
    right: 10px;
  }
  .stories-rail {
    padding: 12px 8px;
    gap: 14px;
  }
  .story-avatar-ring {
    width: 54px;
    height: 54px;
  }
  .story-avatar-name {
    max-width: 54px;
    font-size: 9px;
  }
}

@media (max-width: 768px) {
  .stories-rail-wrapper {
    display: none;
  }
  .chat-sidebar {
    max-width: 100vw;
  }
  .chat-main {
    padding: 12px;
  }
  .messages-container {
    padding: 4px 0;
  }
  .chat-msg-wrapper {
    max-width: 85%;
  }
  .chat-composer-wrapper {
    padding: 0 10px 10px;
  }
  .header-btn {
    width: 36px;
    height: 36px;
  }
  .header-btn svg {
    width: 20px;
    height: 20px;
  }
  .chat-header {
    padding: 0 10px;
  }
  .chat-header-right {
    min-width: auto;
    gap: 0;
  }
  .chat-header-left {
    min-width: auto;
  }
  .chat-header-center h2 {
    font-size: 14px;
  }
  .story-viewer {
    max-height: 100vh;
    border-radius: 0;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .chat-header-right .header-btn.chat-new-btn {
    display: none;
  }
}

/* ── Animations ── */
@keyframes msgFadeSlide {
  from {
    opacity: 0;
    transform: translateY(12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes typingBounce {
  0%, 60%, 100% {
    transform: translateY(0);
    opacity: 0.4;
  }
  30% {
    transform: translateY(-8px);
    opacity: 1;
  }
}

@keyframes storyFloat {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes glowPulse {
  0%, 100% {
    box-shadow: 0 0 8px rgba(198, 255, 0, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(198, 255, 0, 0.6);
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes progressAnim {
  from { width: 0%; }
  to { width: 100%; }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ── User Panel (Channel Members) ── */
.user-panel-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 998;
  animation: fadeIn 0.2s ease;
}
.user-panel {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(-8px);
  width: min(380px, calc(100vw - 32px));
  max-height: min(480px, calc(100vh - 160px));
  background: var(--bg-card, #1a1a2e);
  border: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
  border-radius: 16px;
  box-shadow: 0 16px 48px rgba(0, 0, 0, 0.4);
  z-index: 999;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  overflow: hidden;
}
.user-panel-open {
  opacity: 1;
  pointer-events: auto;
  transform: translateX(-50%) translateY(0);
}
.user-panel-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.user-panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--border-color, rgba(255, 255, 255, 0.08));
  flex-shrink: 0;
}
.user-panel-header h3 {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin: 0;
}
.user-panel-close-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 8px;
  background: var(--bg-hover, rgba(255, 255, 255, 0.06));
  color: var(--text-secondary, #8892b0);
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.user-panel-close-btn:hover {
  background: var(--bg-active, rgba(255, 255, 255, 0.1));
  color: var(--text-primary, #fff);
}
.user-panel-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px 0;
  min-height: 120px;
}
.user-panel-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 120px;
}
.user-panel-spinner {
  width: 28px;
  height: 28px;
  border: 3px solid var(--border-color, rgba(255, 255, 255, 0.08));
  border-top-color: var(--accent, #c6ff00);
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
.user-panel-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  text-align: center;
}
.user-panel-empty-icon {
  width: 48px;
  height: 48px;
  color: var(--text-tertiary, #4a4f6b);
  margin-bottom: 16px;
  opacity: 0.6;
}
.user-panel-empty p {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary, #fff);
  margin: 0 0 6px 0;
}
.user-panel-empty span {
  font-size: 13px;
  color: var(--text-tertiary, #4a4f6b);
}
.user-panel-list {
  display: flex;
  flex-direction: column;
}
.user-panel-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.15s;
}
.user-panel-item:hover {
  background: var(--bg-hover, rgba(255, 255, 255, 0.04));
}
.user-panel-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: var(--bg-hover, rgba(255, 255, 255, 0.06));
}
.user-panel-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.user-panel-avatar-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  color: var(--text-secondary, #8892b0);
  background: var(--bg-hover, rgba(255, 255, 255, 0.08));
}
.user-panel-info {
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.user-panel-name-row {
  display: flex;
  align-items: center;
  gap: 6px;
}
.user-panel-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary, #fff);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-panel-verified {
  color: var(--accent, #c6ff00);
  flex-shrink: 0;
}
.user-panel-handle {
  font-size: 12px;
  color: var(--text-tertiary, #4a4f6b);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.user-panel-badge {
  font-size: 11px;
  font-weight: 600;
  color: var(--accent, #c6ff00);
  background: rgba(198, 255, 0, 0.12);
  padding: 2px 10px;
  border-radius: 12px;
  flex-shrink: 0;
  white-space: nowrap;
}
.channel-dropdown-arrow {
  transition: transform 0.25s ease;
  margin-left: 6px;
  color: var(--text-tertiary, #4a4f6b);
}
.user-panel-open .channel-dropdown-arrow {
  transform: rotate(180deg);
}

/* ── Responsive & Touch-target Improvements ── */

/* Very small screens: < 400px */
@media (max-width: 399px) {
  .chat-container {
    --safe-bottom: 0px;
  }
  .chat-header {
    padding: 0 12px;
  }
  .chat-header-center h2 {
    font-size: 16px;
  }
  .chat-messages {
    padding: 12px;
  }
  .chat-composer {
    padding: 8px 12px;
    gap: 6px;
  }
  .chat-composer input {
    font-size: 14px;
    padding: 10px 12px;
  }
  .chat-sidebar {
    width: 100%;
  }
  .user-panel {
    width: calc(100vw - 16px);
    max-height: calc(100vh - 140px);
  }
  .message-bubble {
    max-width: 90%;
  }
}

/* Tablet landscape: 768–1024px */
@media (min-width: 768px) and (max-width: 1024px) {
  .chat-stories-rail {
    max-width: 140px;
  }
  .chat-main {
    max-width: calc(100% - 320px);
  }
}

/* Large screens: > 1400px */
@media (min-width: 1400px) {
  .chat-container {
    max-width: 1600px;
    margin: 0 auto;
  }
  .chat-main {
    max-width: 720px;
  }
  .chat-stories-rail {
    max-width: 220px;
  }
  .chat-sidebar {
    width: 300px;
  }
  .chat-messages {
    padding: 24px 40px;
  }
}

/* Touch target minimum sizes for mobile */
@media (max-width: 768px) {
  .chat-header button,
  .chat-composer button,
  .chat-message-actions button,
  .chat-sidebar-item,
  .chat-back-btn,
  .user-panel-close-btn {
    min-width: 40px;
    min-height: 40px;
  }
  .chat-composer input {
    font-size: 16px; /* prevent iOS zoom on focus */
  }
  .chat-composer {
    padding-bottom: max(8px, env(safe-area-inset-bottom, 0px));
  }
  .chat-header {
    padding-top: max(0px, env(safe-area-inset-top, 0px));
  }
}

/* Stories rail hide on very narrow screens */
@media (max-width: 500px) {
  .chat-stories-rail {
    display: none;
  }
}
`;function BT(){var ge,he;const t=rn(),[e,a]=j.useState(null),[i,o]=j.useState(!0),[c,d]=j.useState(null),[h,p]=j.useState(""),[g,y]=j.useState([]),[v,x]=j.useState([]),[w,S]=j.useState(!1),[T,C]=j.useState(!1),[_,R]=j.useState(0),[O,P]=j.useState(0),[X,W]=j.useState([]),[G,q]=j.useState(!1),[Z,re]=j.useState([]),[xe,pe]=j.useState(!1),Ce=j.useRef(null),Le=j.useRef(null);j.useEffect(()=>{document.title="Chat — FrameX",(async()=>{try{const{data:{session:K}}=await te.auth.getSession();if(!K){t("/login");return}a(K.user)}catch{console.warn("Auth check failed, running in offline mode"),a({id:"offline",email:"guest@framex.app"})}o(!1)})()},[t]),j.useEffect(()=>{if(!e||e.id==="offline"){x([{id:"general",name:"general",display_name:"# general"},{id:"random",name:"random",display_name:"# random"}]),d({id:"general",name:"general",display_name:"# general"});return}(async()=>{try{const{data:K}=await te.from("channels").select("*").order("name");K&&(x(K),!c&&K.length>0&&d(K[0]))}catch(K){console.warn("Failed to fetch channels:",K),x([{id:"general",name:"general",display_name:"# general"}]),d({id:"general",name:"general",display_name:"# general"})}})()},[e]),j.useEffect(()=>{if(!c)return;(async()=>{try{if((e==null?void 0:e.id)==="offline"){y([{id:"1",content:"Welcome to FrameX Chat! 🎉",user_id:"system",created_at:new Date().toISOString(),profiles:{display_name:"FrameX",username:"framex"}},{id:"2",content:"Select a story to view it. This is a demo environment.",user_id:"system",created_at:new Date(Date.now()-6e4).toISOString(),profiles:{display_name:"FrameX",username:"framex"}}]);return}const{data:K}=await te.from("messages").select("*, profiles(*)").eq("channel_id",c.id).order("created_at",{ascending:!0}).limit(100);K&&y(K)}catch{console.warn("Failed to load messages")}})()},[c,e]),j.useEffect(()=>{if(!c||(e==null?void 0:e.id)==="offline")return;let L;return(async()=>{try{L=te.channel(`messages:${c.id}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`channel_id=eq.${c.id}`},ue=>{const Se=ue.new;Se.user_id!==(e==null?void 0:e.id)&&te.from("profiles").select("*").eq("id",Se.user_id).single().then(({data:_e})=>{y(it=>[...it,{...Se,profiles:_e}])}).catch(()=>{y(_e=>[..._e,Se])})}).subscribe()}catch{console.warn("Realtime subscription failed")}})(),()=>{L&&te.removeChannel(L)}},[c,e]),j.useEffect(()=>{var L;(L=Ce.current)==null||L.scrollIntoView({behavior:"smooth"})},[g]),j.useEffect(()=>{const L=K=>{K.key==="Escape"&&S(!1)};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[]),j.useEffect(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[w]),j.useEffect(()=>{if(!T)return;const L=hi[_];if(!L)return;const K=L.stories[O];if(!K)return;const ue=setTimeout(()=>{be()},K.duration||5e3);return()=>clearTimeout(ue)},[T,_,O]);const me=j.useCallback(async()=>{if(!(!e||e.id==="offline")){pe(!0);try{const{data:L}=await te.from("follows").select("follower_id").eq("following_id",e.id),{data:K}=await te.from("follows").select("following_id").eq("follower_id",e.id),ue=(L||[]).map(ht=>ht.follower_id),Se=(K||[]).map(ht=>ht.following_id);if(ue.length===0){re([]),pe(!1);return}const{data:_e}=await te.from("profiles").select("id, username, display_name, avatar_url, bio, is_verified").in("id",ue),it=(_e||[]).map(ht=>({...ht,isFriend:Se.includes(ht.id),isFollower:!0}));re(it)}catch(L){console.warn("Failed to fetch panel users:",L),re([])}pe(!1)}},[e]);j.useEffect(()=>{G&&me()},[G,me]),j.useEffect(()=>{if(!e||e.id==="offline")return;let L;try{L=te.channel("follows-changes").on("postgres_changes",{event:"*",schema:"public",table:"follows"},()=>{G&&me()}).subscribe()}catch{console.warn("Realtime follows subscription failed")}return()=>{L&&te.removeChannel(L)}},[e,G,me]);const E=j.useCallback(async L=>{if(L==null||L.preventDefault(),!h.trim()||!c)return;const K=h.trim();if(p(""),(e==null?void 0:e.id)==="offline"){y(ue=>[...ue,{id:`msg-${Date.now()}`,content:K,user_id:"offline",created_at:new Date().toISOString(),profiles:{display_name:"You",username:"you"}}]);return}try{const{data:ue}=await te.from("messages").insert({channel_id:c.id,user_id:e.id,content:K}).select("*, profiles(*)").single();ue&&y(Se=>[...Se,ue])}catch{console.warn("Failed to send message")}},[h,c,e]),$=j.useCallback(async()=>{try{await te.auth.signOut()}catch{}t("/login")},[t]),ee=j.useCallback(L=>{R(L),P(0),C(!0)},[]),ce=j.useCallback(()=>{C(!1)},[]),be=j.useCallback(()=>{const L=hi[_];L&&(O<L.stories.length-1?P(K=>K+1):_<hi.length-1?(R(K=>K+1),P(0)):C(!1))},[_,O]),N=j.useCallback(()=>{var L;O>0?P(K=>K-1):_>0&&(R(K=>K-1),P(((L=hi[_-1])==null?void 0:L.stories.length)-1||0))},[_,O]),I=L=>L&&L.split(" ").map(K=>K[0]).join("").toUpperCase().slice(0,2)||"?",J=L=>{const K=new Date(L),Se=new Date-K,_e=Math.floor(Se/6e4),it=Math.floor(Se/36e5);return _e<1?"Now":_e<60?`${_e}m`:it<24?K.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):K.toLocaleDateString([],{month:"short",day:"numeric"})},ae=g.reduce((L,K,ue)=>{const Se=new Date(K.created_at).toDateString(),_e=ue>0?new Date(g[ue-1].created_at).toDateString():null;return Se!==_e&&L.push({type:"date",date:K.created_at}),L.push({type:"message",msg:K,isOwn:K.user_id===(e==null?void 0:e.id)}),L},[]);if(i)return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:ev}),u.jsxs("div",{className:"chat-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("span",{children:"Loading chat..."})]})]});const de=(c==null?void 0:c.display_name)||(c==null?void 0:c.name)||"Select a channel",je=((ge=e==null?void 0:e.user_metadata)==null?void 0:ge.full_name)||(e==null?void 0:e.email)||"User",Q=I(je);return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:ev}),u.jsxs("header",{className:"chat-header",children:[u.jsxs("div",{className:"chat-header-left",children:[u.jsx("button",{className:"hamburger-btn",onClick:()=>S(!0),"aria-label":"Open menu",children:at.menu}),u.jsx("button",{className:"header-logo",onClick:()=>t("/"),children:at.logo})]}),u.jsxs("div",{className:"chat-header-center",onClick:()=>{((c==null?void 0:c.name)==="general"||(c==null?void 0:c.display_name)==="# general")&&q(L=>!L)},style:{cursor:(c==null?void 0:c.name)==="general"?"pointer":"default"},children:[u.jsx("h2",{children:de}),(c==null?void 0:c.name)==="general"&&u.jsx("svg",{className:"channel-dropdown-arrow",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),u.jsxs("div",{className:"chat-header-right",children:[u.jsx("button",{className:"header-btn","aria-label":"Search",children:at.search}),u.jsxs("button",{className:"header-btn","aria-label":"Notifications",children:[at.bell,u.jsx("span",{className:"notification-badge"})]}),u.jsx("button",{className:"header-btn chat-new-btn","aria-label":"New chat",children:at.plus})]})]}),G&&u.jsx("div",{className:"user-panel-overlay",onClick:()=>q(!1)}),u.jsx("div",{className:`user-panel ${G?"user-panel-open":""}`,children:u.jsxs("div",{className:"user-panel-inner",children:[u.jsxs("div",{className:"user-panel-header",children:[u.jsx("h3",{children:"Channel Members"}),u.jsx("button",{className:"user-panel-close-btn",onClick:()=>q(!1),"aria-label":"Close panel",children:at.close})]}),u.jsx("div",{className:"user-panel-body",children:xe?u.jsx("div",{className:"user-panel-loading",children:u.jsx("div",{className:"user-panel-spinner"})}):Z.length===0?u.jsxs("div",{className:"user-panel-empty",children:[u.jsxs("svg",{className:"user-panel-empty-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("line",{x1:"22",y1:"6",x2:"22",y2:"12"}),u.jsx("line",{x1:"19",y1:"9",x2:"25",y2:"9"})]}),u.jsx("p",{children:"You are alone"}),u.jsx("span",{children:"Follow others to see them here"})]}):u.jsx("div",{className:"user-panel-list",children:Z.map(L=>u.jsxs("div",{className:"user-panel-item",onClick:()=>{q(!1)},children:[u.jsx("div",{className:"user-panel-avatar",children:L.avatar_url?u.jsx("img",{src:L.avatar_url,alt:"",loading:"lazy"}):u.jsx("span",{className:"user-panel-avatar-fallback",children:(L.display_name||L.username||"?")[0].toUpperCase()})}),u.jsxs("div",{className:"user-panel-info",children:[u.jsxs("div",{className:"user-panel-name-row",children:[u.jsx("span",{className:"user-panel-name",children:L.display_name||L.username||"Unknown"}),L.is_verified&&u.jsx("svg",{className:"user-panel-verified",viewBox:"0 0 24 24",fill:"currentColor",width:"14",height:"14",children:u.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"})})]}),u.jsxs("div",{className:"user-panel-handle",children:["@",L.username]})]}),L.isFriend&&u.jsx("span",{className:"user-panel-badge",children:"Friend"})]},L.id))})})]})}),u.jsx("div",{className:`sidebar-overlay ${w?"open":""}`,onClick:()=>S(!1)}),u.jsxs("aside",{className:`chat-sidebar ${w?"open":""}`,children:[u.jsxs("div",{className:"sidebar-profile",children:[u.jsxs("div",{className:"sidebar-avatar",children:[(he=e==null?void 0:e.user_metadata)!=null&&he.avatar_url?u.jsx("img",{src:e.user_metadata.avatar_url,alt:""}):Q,u.jsx("span",{className:"status-dot"})]}),u.jsxs("div",{className:"sidebar-user-info",children:[u.jsx("div",{className:"sidebar-username",children:je}),u.jsx("div",{className:"sidebar-status",children:"● Online"})]})]}),u.jsxs("nav",{className:"sidebar-nav",children:[u.jsx("div",{className:"sidebar-section-label",children:"Menu"}),u.jsxs("button",{className:"sidebar-nav-item active",onClick:()=>{S(!1),t("/chat")},children:[at.chat,u.jsx("span",{className:"sidebar-nav-label",children:"Chats"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/home")},children:[at.home,u.jsx("span",{className:"sidebar-nav-label",children:"Home"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/communities")},children:[at.communities,u.jsx("span",{className:"sidebar-nav-label",children:"Communities"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/explore")},children:[at.explore,u.jsx("span",{className:"sidebar-nav-label",children:"Explore"})]}),u.jsx("div",{className:"sidebar-section-label",children:"Preferences"}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/notifications")},children:[at.notification,u.jsx("span",{className:"sidebar-nav-label",children:"Notifications"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/settings")},children:[at.settings,u.jsx("span",{className:"sidebar-nav-label",children:"Settings"})]})]}),u.jsxs("div",{className:"sidebar-bottom",children:[u.jsxs("button",{className:"sidebar-logout",onClick:$,children:[at.logout,u.jsx("span",{children:"Log Out"})]}),u.jsx("div",{className:"sidebar-version",children:"FrameX v1.0.0"})]})]}),u.jsx("main",{className:"chat-main",children:c?g.length===0?u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-state-icon",children:at.chat}),u.jsx("h3",{children:"No messages yet"}),u.jsx("p",{children:"Start the conversation. Send a message to begin chatting."})]})}):u.jsxs("div",{className:"messages-container",children:[ae.map((L,K)=>{var _e,it;if(L.type==="date")return u.jsx(UT,{date:L.date},`date-${K}`);const{msg:ue,isOwn:Se}=L;return u.jsxs("div",{className:`chat-msg-wrapper ${Se?"outgoing":"incoming"}`,children:[u.jsxs("div",{className:"chat-msg-bubble",children:[!Se&&u.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--chat-accent)",marginBottom:2},children:((_e=ue.profiles)==null?void 0:_e.display_name)||((it=ue.profiles)==null?void 0:it.username)||"Unknown"}),u.jsx("div",{children:ue.content})]}),u.jsxs("div",{className:"chat-msg-meta",children:[u.jsx("span",{className:"chat-msg-time",children:J(ue.created_at)}),Se&&u.jsx("span",{className:"chat-msg-receipt",children:at.checkAll})]}),u.jsx("div",{style:{display:"flex",gap:6,alignItems:"center"},children:u.jsxs("button",{className:"chat-msg-reply",children:[at.reply," Reply"]})}),u.jsxs("div",{className:"chat-msg-reactions",children:[u.jsx("span",{className:"msg-reaction",children:"❤️"}),u.jsx("span",{className:"msg-reaction",children:"🔥"}),u.jsx("span",{className:"msg-reaction",children:"👍"})]})]},ue.id)}),X.length>0&&u.jsx(zT,{users:X}),u.jsx("div",{ref:Ce})]}):u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"channel-selector",children:[u.jsx("h3",{children:"Channels"}),v.map(L=>u.jsxs("button",{className:"channel-item",onClick:()=>d(L),children:[u.jsx("div",{className:"channel-avatar",children:"#"}),u.jsxs("div",{className:"channel-info",children:[u.jsx("div",{className:"channel-name",children:L.display_name||`# ${L.name}`}),u.jsx("div",{className:"channel-preview",children:"Tap to view messages"})]}),u.jsx("div",{className:"channel-meta"})]},L.id))]})})}),u.jsx("div",{className:"chat-composer-wrapper",children:u.jsxs("form",{className:"chat-composer",onSubmit:E,children:[u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Attach file",children:at.attachment}),u.jsx("input",{ref:Le,className:"composer-input",type:"text",placeholder:c?`Message ${c.display_name||c.name||"channel"}...`:"Select a channel to start chatting",value:h,onChange:L=>p(L.target.value),disabled:!c,"aria-label":"Message input"}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Add emoji",children:at.emoji}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Voice message",children:at.mic}),u.jsx("button",{type:"submit",className:"composer-btn send-btn",disabled:!h.trim()||!c,"aria-label":"Send message",children:at.send})]})}),u.jsx("div",{className:"stories-rail-wrapper",children:u.jsx("div",{className:"stories-rail",children:hi.map((L,K)=>u.jsxs("div",{className:"story-avatar-wrapper",style:{"--story-index":K},onClick:()=>ee(K),children:[u.jsx("div",{className:`story-avatar-ring ${L.unread?"unread":"seen"}`,children:u.jsxs("div",{className:"story-avatar-inner",children:[L.avatar?u.jsx("img",{src:L.avatar,alt:""}):I(L.name),L.online&&u.jsx("span",{className:"story-online-dot"})]})}),u.jsx("span",{className:"story-avatar-name",children:L.name})]},L.id))})}),T&&u.jsx(MT,{stories:hi,userIndex:_,storyIndex:O,onClose:ce,onNext:be,onPrev:N})]})}const Af=j.createContext({});function Nf(t){const e=j.useRef(null);return e.current===null&&(e.current=t()),e.current}const PT=typeof window<"u",kx=PT?j.useLayoutEffect:j.useEffect,Tc=j.createContext(null);function Rf(t,e){t.indexOf(e)===-1&&t.push(e)}function oc(t,e){const a=t.indexOf(e);a>-1&&t.splice(a,1)}const Hn=(t,e,a)=>a>e?e:a<t?t:a;let Of=()=>{};const Ir={},_x=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),Tx=t=>typeof t=="object"&&t!==null,Ex=t=>/^0[^.\s]+$/u.test(t);function Cx(t){let e;return()=>(e===void 0&&(e=t()),e)}const yn=t=>t,ro=(...t)=>t.reduce((e,a)=>i=>a(e(i))),Ws=(t,e,a)=>{const i=e-t;return i?(a-t)/i:1};class Df{constructor(){this.subscriptions=[]}add(e){return Rf(this.subscriptions,e),()=>oc(this.subscriptions,e)}notify(e,a,i){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,a,i);else for(let c=0;c<o;c++){const d=this.subscriptions[c];d&&d(e,a,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const en=t=>t*1e3,gn=t=>t/1e3,Ax=(t,e)=>e?t*(1e3/e):0,Nx=(t,e,a)=>(((1-3*a+3*e)*t+(3*a-6*e))*t+3*e)*t,VT=1e-7,HT=12;function $T(t,e,a,i,o){let c,d,h=0;do d=e+(a-e)/2,c=Nx(d,i,o)-t,c>0?a=d:e=d;while(Math.abs(c)>VT&&++h<HT);return d}function ao(t,e,a,i){if(t===e&&a===i)return yn;const o=c=>$T(c,0,1,t,a);return c=>c===0||c===1?c:Nx(o(c),e,i)}const Rx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Ox=t=>e=>1-t(1-e),Dx=ao(.33,1.53,.69,.99),Lf=Ox(Dx),Lx=Rx(Lf),Mx=t=>t>=1?1:(t*=2)<1?.5*Lf(t):.5*(2-Math.pow(2,-10*(t-1))),Mf=t=>1-Math.sin(Math.acos(t)),zx=Ox(Mf),Ux=Rx(Mf),IT=ao(.42,0,1,1),qT=ao(0,0,.58,1),Bx=ao(.42,0,.58,1),FT=t=>Array.isArray(t)&&typeof t[0]!="number",Px=t=>Array.isArray(t)&&typeof t[0]=="number",GT={linear:yn,easeIn:IT,easeInOut:Bx,easeOut:qT,circIn:Mf,circInOut:Ux,circOut:zx,backIn:Lf,backInOut:Lx,backOut:Dx,anticipate:Mx},KT=t=>typeof t=="string",tv=t=>{if(Px(t)){Of(t.length===4);const[e,a,i,o]=t;return ao(e,a,i,o)}else if(KT(t))return GT[t];return t},Ll=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function YT(t,e){let a=new Set,i=new Set,o=!1,c=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),t()),y(h)}const g={schedule:(y,v=!1,x=!1)=>{const S=x&&o?a:i;return v&&d.add(y),S.add(y),y},cancel:y=>{i.delete(y),d.delete(y)},process:y=>{if(h=y,o){c=!0;return}o=!0;const v=a;a=i,i=v,a.forEach(p),a.clear(),o=!1,c&&(c=!1,g.process(y))}};return g}const XT=40;function Vx(t,e){let a=!1,i=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>a=!0,d=Ll.reduce((O,P)=>(O[P]=YT(c),O),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:v,preRender:x,render:w,postRender:S}=d,T=()=>{const O=Ir.useManualTiming,P=O?o.timestamp:performance.now();a=!1,O||(o.delta=i?1e3/60:Math.max(Math.min(P-o.timestamp,XT),1)),o.timestamp=P,o.isProcessing=!0,h.process(o),p.process(o),g.process(o),y.process(o),v.process(o),x.process(o),w.process(o),S.process(o),o.isProcessing=!1,a&&e&&(i=!1,t(T))},C=()=>{a=!0,i=!0,o.isProcessing||t(T)};return{schedule:Ll.reduce((O,P)=>{const X=d[P];return O[P]=(W,G=!1,q=!1)=>(a||C(),X.schedule(W,G,q)),O},{}),cancel:O=>{for(let P=0;P<Ll.length;P++)d[Ll[P]].cancel(O)},state:o,steps:d}}const{schedule:Fe,cancel:qr,state:kt,steps:lh}=Vx(typeof requestAnimationFrame<"u"?requestAnimationFrame:yn,!0);let Il;function WT(){Il=void 0}const Nt={now:()=>(Il===void 0&&Nt.set(kt.isProcessing||Ir.useManualTiming?kt.timestamp:performance.now()),Il),set:t=>{Il=t,queueMicrotask(WT)}},Hx=t=>e=>typeof e=="string"&&e.startsWith(t),$x=Hx("--"),JT=Hx("var(--"),zf=t=>JT(t)?QT.test(t.split("/*")[0].trim()):!1,QT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function nv(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ci={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Js={...Ci,transform:t=>Hn(0,1,t)},Ml={...Ci,default:1},Bs=t=>Math.round(t*1e5)/1e5,Uf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function ZT(t){return t==null}const eE=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bf=(t,e)=>a=>!!(typeof a=="string"&&eE.test(a)&&a.startsWith(t)||e&&!ZT(a)&&Object.prototype.hasOwnProperty.call(a,e)),Ix=(t,e,a)=>i=>{if(typeof i!="string")return i;const[o,c,d,h]=i.match(Uf);return{[t]:parseFloat(o),[e]:parseFloat(c),[a]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},tE=t=>Hn(0,255,t),ch={...Ci,transform:t=>Math.round(tE(t))},ba={test:Bf("rgb","red"),parse:Ix("red","green","blue"),transform:({red:t,green:e,blue:a,alpha:i=1})=>"rgba("+ch.transform(t)+", "+ch.transform(e)+", "+ch.transform(a)+", "+Bs(Js.transform(i))+")"};function nE(t){let e="",a="",i="",o="";return t.length>5?(e=t.substring(1,3),a=t.substring(3,5),i=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),a=t.substring(2,3),i=t.substring(3,4),o=t.substring(4,5),e+=e,a+=a,i+=i,o+=o),{red:parseInt(e,16),green:parseInt(a,16),blue:parseInt(i,16),alpha:o?parseInt(o,16)/255:1}}const Ih={test:Bf("#"),parse:nE,transform:ba.transform},io=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),cr=io("deg"),Vn=io("%"),se=io("px"),rE=io("vh"),aE=io("vw"),rv={...Vn,parse:t=>Vn.parse(t)/100,transform:t=>Vn.transform(t*100)},vi={test:Bf("hsl","hue"),parse:Ix("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:a,alpha:i=1})=>"hsla("+Math.round(t)+", "+Vn.transform(Bs(e))+", "+Vn.transform(Bs(a))+", "+Bs(Js.transform(i))+")"},dt={test:t=>ba.test(t)||Ih.test(t)||vi.test(t),parse:t=>ba.test(t)?ba.parse(t):vi.test(t)?vi.parse(t):Ih.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ba.transform(t):vi.transform(t),getAnimatableNone:t=>{const e=dt.parse(t);return e.alpha=0,dt.transform(e)}},iE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function sE(t){var e,a;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Uf))==null?void 0:e.length)||0)+(((a=t.match(iE))==null?void 0:a.length)||0)>0}const qx="number",Fx="color",oE="var",lE="var(",av="${}",cE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Si(t){const e=t.toString(),a=[],i={color:[],number:[],var:[]},o=[];let c=0;const h=e.replace(cE,p=>(dt.test(p)?(i.color.push(c),o.push(Fx),a.push(dt.parse(p))):p.startsWith(lE)?(i.var.push(c),o.push(oE),a.push(p)):(i.number.push(c),o.push(qx),a.push(parseFloat(p))),++c,av)).split(av);return{values:a,split:h,indexes:i,types:o}}function uE(t){return Si(t).values}function Gx({split:t,types:e}){const a=t.length;return i=>{let o="";for(let c=0;c<a;c++)if(o+=t[c],i[c]!==void 0){const d=e[c];d===qx?o+=Bs(i[c]):d===Fx?o+=dt.transform(i[c]):o+=i[c]}return o}}function dE(t){return Gx(Si(t))}const hE=t=>typeof t=="number"?0:dt.test(t)?dt.getAnimatableNone(t):t,fE=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:hE(t);function pE(t){const e=Si(t);return Gx(e)(e.values.map((i,o)=>fE(i,e.split[o])))}const Cn={test:sE,parse:uE,createTransformer:dE,getAnimatableNone:pE};function uh(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*(2/3-a)*6:t}function mE({hue:t,saturation:e,lightness:a,alpha:i}){t/=360,e/=100,a/=100;let o=0,c=0,d=0;if(!e)o=c=d=a;else{const h=a<.5?a*(1+e):a+e-a*e,p=2*a-h;o=uh(p,h,t+1/3),c=uh(p,h,t),d=uh(p,h,t-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(d*255),alpha:i}}function lc(t,e){return a=>a>0?e:t}const qe=(t,e,a)=>t+(e-t)*a,dh=(t,e,a)=>{const i=t*t,o=a*(e*e-i)+i;return o<0?0:Math.sqrt(o)},gE=[Ih,ba,vi],yE=t=>gE.find(e=>e.test(t));function iv(t){const e=yE(t);if(!e)return!1;let a=e.parse(t);return e===vi&&(a=mE(a)),a}const sv=(t,e)=>{const a=iv(t),i=iv(e);if(!a||!i)return lc(t,e);const o={...a};return c=>(o.red=dh(a.red,i.red,c),o.green=dh(a.green,i.green,c),o.blue=dh(a.blue,i.blue,c),o.alpha=qe(a.alpha,i.alpha,c),ba.transform(o))},qh=new Set(["none","hidden"]);function vE(t,e){return qh.has(t)?a=>a<=0?t:e:a=>a>=1?e:t}function bE(t,e){return a=>qe(t,e,a)}function Pf(t){return typeof t=="number"?bE:typeof t=="string"?zf(t)?lc:dt.test(t)?sv:SE:Array.isArray(t)?Kx:typeof t=="object"?dt.test(t)?sv:xE:lc}function Kx(t,e){const a=[...t],i=a.length,o=t.map((c,d)=>Pf(c)(c,e[d]));return c=>{for(let d=0;d<i;d++)a[d]=o[d](c);return a}}function xE(t,e){const a={...t,...e},i={};for(const o in a)t[o]!==void 0&&e[o]!==void 0&&(i[o]=Pf(t[o])(t[o],e[o]));return o=>{for(const c in i)a[c]=i[c](o);return a}}function wE(t,e){const a=[],i={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const c=e.types[o],d=t.indexes[c][i[c]],h=t.values[d]??0;a[o]=h,i[c]++}return a}const SE=(t,e)=>{const a=Cn.createTransformer(e),i=Si(t),o=Si(e);return i.indexes.var.length===o.indexes.var.length&&i.indexes.color.length===o.indexes.color.length&&i.indexes.number.length>=o.indexes.number.length?qh.has(t)&&!o.values.length||qh.has(e)&&!i.values.length?vE(t,e):ro(Kx(wE(i,o),o.values),a):lc(t,e)};function Yx(t,e,a){return typeof t=="number"&&typeof e=="number"&&typeof a=="number"?qe(t,e,a):Pf(t)(t,e)}const jE=t=>{const e=({timestamp:a})=>t(a);return{start:(a=!0)=>Fe.update(e,a),stop:()=>qr(e),now:()=>kt.isProcessing?kt.timestamp:Nt.now()}},Xx=(t,e,a=10)=>{let i="";const o=Math.max(Math.round(e/a),2);for(let c=0;c<o;c++)i+=Math.round(t(c/(o-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},cc=2e4;function Vf(t){let e=0;const a=50;let i=t.next(e);for(;!i.done&&e<cc;)e+=a,i=t.next(e);return e>=cc?1/0:e}function kE(t,e=100,a){const i=a({...t,keyframes:[0,e]}),o=Math.min(Vf(i),cc);return{type:"keyframes",ease:c=>i.next(o*c).value/e,duration:gn(o)}}const et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Fh(t,e){return t*Math.sqrt(1-e*e)}const _E=12;function TE(t,e,a){let i=a;for(let o=1;o<_E;o++)i=i-t(i)/e(i);return i}const hh=.001;function EE({duration:t=et.duration,bounce:e=et.bounce,velocity:a=et.velocity,mass:i=et.mass}){let o,c,d=1-e;d=Hn(et.minDamping,et.maxDamping,d),t=Hn(et.minDuration,et.maxDuration,gn(t)),d<1?(o=g=>{const y=g*d,v=y*t,x=y-a,w=Fh(g,d),S=Math.exp(-v);return hh-x/w*S},c=g=>{const v=g*d*t,x=v*a+a,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-v),T=Fh(Math.pow(g,2),d);return(-o(g)+hh>0?-1:1)*((x-w)*S)/T}):(o=g=>{const y=Math.exp(-g*t),v=(g-a)*t+1;return-hh+y*v},c=g=>{const y=Math.exp(-g*t),v=(a-g)*(t*t);return y*v});const h=5/t,p=TE(o,c,h);if(t=en(t),isNaN(p))return{stiffness:et.stiffness,damping:et.damping,duration:t};{const g=Math.pow(p,2)*i;return{stiffness:g,damping:d*2*Math.sqrt(i*g),duration:t}}}const CE=["duration","bounce"],AE=["stiffness","damping","mass"];function ov(t,e){return e.some(a=>t[a]!==void 0)}function NE(t){let e={velocity:et.velocity,stiffness:et.stiffness,damping:et.damping,mass:et.mass,isResolvedFromDuration:!1,...t};if(!ov(t,AE)&&ov(t,CE))if(e.velocity=0,t.visualDuration){const a=t.visualDuration,i=2*Math.PI/(a*1.2),o=i*i,c=2*Hn(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:et.mass,stiffness:o,damping:c}}else{const a=EE({...t,velocity:0});e={...e,...a,mass:et.mass},e.isResolvedFromDuration=!0}return e}function uc(t=et.visualDuration,e=et.bounce){const a=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:o}=a;const c=a.keyframes[0],d=a.keyframes[a.keyframes.length-1],h={done:!1,value:c},{stiffness:p,damping:g,mass:y,duration:v,velocity:x,isResolvedFromDuration:w}=NE({...a,velocity:-gn(a.velocity||0)}),S=x||0,T=g/(2*Math.sqrt(p*y)),C=d-c,_=gn(Math.sqrt(p/y)),R=Math.abs(C)<5;i||(i=R?et.restSpeed.granular:et.restSpeed.default),o||(o=R?et.restDelta.granular:et.restDelta.default);let O,P,X,W,G,q;if(T<1)X=Fh(_,T),W=(S+T*_*C)/X,O=re=>{const xe=Math.exp(-T*_*re);return d-xe*(W*Math.sin(X*re)+C*Math.cos(X*re))},G=T*_*W+C*X,q=T*_*C-W*X,P=re=>Math.exp(-T*_*re)*(G*Math.sin(X*re)+q*Math.cos(X*re));else if(T===1){O=xe=>d-Math.exp(-_*xe)*(C+(S+_*C)*xe);const re=S+_*C;P=xe=>Math.exp(-_*xe)*(_*re*xe-S)}else{const re=_*Math.sqrt(T*T-1);O=Le=>{const me=Math.exp(-T*_*Le),E=Math.min(re*Le,300);return d-me*((S+T*_*C)*Math.sinh(E)+re*C*Math.cosh(E))/re};const xe=(S+T*_*C)/re,pe=T*_*xe-C*re,Ce=T*_*C-xe*re;P=Le=>{const me=Math.exp(-T*_*Le),E=Math.min(re*Le,300);return me*(pe*Math.sinh(E)+Ce*Math.cosh(E))}}const Z={calculatedDuration:w&&v||null,velocity:re=>en(P(re)),next:re=>{if(!w&&T<1){const pe=Math.exp(-T*_*re),Ce=Math.sin(X*re),Le=Math.cos(X*re),me=d-pe*(W*Ce+C*Le),E=en(pe*(G*Ce+q*Le));return h.done=Math.abs(E)<=i&&Math.abs(d-me)<=o,h.value=h.done?d:me,h}const xe=O(re);if(w)h.done=re>=v;else{const pe=en(P(re));h.done=Math.abs(pe)<=i&&Math.abs(d-xe)<=o}return h.value=h.done?d:xe,h},toString:()=>{const re=Math.min(Vf(Z),cc),xe=Xx(pe=>Z.next(re*pe).value,re,30);return re+"ms "+xe},toTransition:()=>{}};return Z}uc.applyToOptions=t=>{const e=kE(t,100,uc);return t.ease=e.ease,t.duration=en(e.duration),t.type="keyframes",t};const RE=5;function Wx(t,e,a){const i=Math.max(e-RE,0);return Ax(a-t(i),e-i)}function Gh({keyframes:t,velocity:e=0,power:a=.8,timeConstant:i=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:y}){const v=t[0],x={done:!1,value:v},w=q=>h!==void 0&&q<h||p!==void 0&&q>p,S=q=>h===void 0?p:p===void 0||Math.abs(h-q)<Math.abs(p-q)?h:p;let T=a*e;const C=v+T,_=d===void 0?C:d(C);_!==C&&(T=_-v);const R=q=>-T*Math.exp(-q/i),O=q=>_+R(q),P=q=>{const Z=R(q),re=O(q);x.done=Math.abs(Z)<=g,x.value=x.done?_:re};let X,W;const G=q=>{w(x.value)&&(X=q,W=uc({keyframes:[x.value,S(x.value)],velocity:Wx(O,q,x.value),damping:o,stiffness:c,restDelta:g,restSpeed:y}))};return G(0),{calculatedDuration:null,next:q=>{let Z=!1;return!W&&X===void 0&&(Z=!0,P(q),G(q)),X!==void 0&&q>=X?W.next(q-X):(!Z&&P(q),x)}}}function OE(t,e,a){const i=[],o=a||Ir.mix||Yx,c=t.length-1;for(let d=0;d<c;d++){let h=o(t[d],t[d+1]);if(e){const p=Array.isArray(e)?e[d]||yn:e;h=ro(p,h)}i.push(h)}return i}function DE(t,e,{clamp:a=!0,ease:i,mixer:o}={}){const c=t.length;if(Of(c===e.length),c===1)return()=>e[0];if(c===2&&e[0]===e[1])return()=>e[1];const d=t[0]===t[1];t[0]>t[c-1]&&(t=[...t].reverse(),e=[...e].reverse());const h=OE(e,i,o),p=h.length,g=y=>{if(d&&y<t[0])return e[0];let v=0;if(p>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const x=Ws(t[v],t[v+1],y);return h[v](x)};return a?y=>g(Hn(t[0],t[c-1],y)):g}function LE(t,e){const a=t[t.length-1];for(let i=1;i<=e;i++){const o=Ws(0,e,i);t.push(qe(a,1,o))}}function ME(t){const e=[0];return LE(e,t.length-1),e}function zE(t,e){return t.map(a=>a*e)}function UE(t,e){return t.map(()=>e||Bx).splice(0,t.length-1)}function Ps({duration:t=300,keyframes:e,times:a,ease:i="easeInOut"}){const o=FT(i)?i.map(tv):tv(i),c={done:!1,value:e[0]},d=zE(a&&a.length===e.length?a:ME(e),t),h=DE(d,e,{ease:Array.isArray(o)?o:UE(e,o)});return{calculatedDuration:t,next:p=>(c.value=h(p),c.done=p>=t,c)}}const BE=t=>t!==null;function Ec(t,{repeat:e,repeatType:a="loop"},i,o=1){const c=t.filter(BE),h=o<0||e&&a!=="loop"&&e%2===1?0:c.length-1;return!h||i===void 0?c[h]:i}const PE={decay:Gh,inertia:Gh,tween:Ps,keyframes:Ps,spring:uc};function Jx(t){typeof t.type=="string"&&(t.type=PE[t.type])}class Hf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,a){return this.finished.then(e,a)}}const VE=t=>t/100;class dc extends Hf{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var i,o;const{motionValue:a}=this.options;a&&a.updatedAt!==Nt.now()&&this.tick(Nt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(i=this.options).onStop)==null||o.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Jx(e);const{type:a=Ps,repeat:i=0,repeatDelay:o=0,repeatType:c,velocity:d=0}=e;let{keyframes:h}=e;const p=a||Ps;p!==Ps&&typeof h[0]!="number"&&(this.mixKeyframes=ro(VE,Yx(h[0],h[1])),h=[0,100]);const g=p({...e,keyframes:h});c==="mirror"&&(this.mirroredGenerator=p({...e,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Vf(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(i+1)-o,this.generator=g}updateTime(e){const a=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(e,a=!1){const{generator:i,totalDuration:o,mixKeyframes:c,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return i.next(0);const{delay:g=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:w,type:S,onUpdate:T,finalKeyframe:C}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),a?this.currentTime=e:this.updateTime(e);const _=this.currentTime-g*(this.playbackSpeed>=0?1:-1),R=this.playbackSpeed>=0?_<0:_>o;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let O=this.currentTime,P=i;if(v){const q=Math.min(this.currentTime,o)/h;let Z=Math.floor(q),re=q%1;!re&&q>=1&&(re=1),re===1&&Z--,Z=Math.min(Z,v+1),!!(Z%2)&&(x==="reverse"?(re=1-re,w&&(re-=w/h)):x==="mirror"&&(P=d)),O=Hn(0,1,re)*h}let X;R?(this.delayState.value=y[0],X=this.delayState):X=P.next(O),c&&!R&&(X.value=c(X.value));let{done:W}=X;!R&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const G=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return G&&S!==Gh&&(X.value=Ec(y,this.options,C,this.speed)),T&&T(X.value),G&&this.finish(),X}then(e,a){return this.finished.then(e,a)}get duration(){return gn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gn(e)}get time(){return gn(this.currentTime)}set time(e){e=en(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const a=this.generator.next(e).value;return Wx(i=>this.generator.next(i).value,e,a)}get speed(){return this.playbackSpeed}set speed(e){const a=this.playbackSpeed!==e;a&&this.driver&&this.updateTime(Nt.now()),this.playbackSpeed=e,a&&this.driver&&(this.time=gn(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:e=jE,startTime:a}=this.options;this.driver||(this.driver=e(d=>this.tick(d))),(c=(o=this.options).onPlay)==null||c.call(o);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=a??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Nt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(e=this.options).onComplete)==null||a.call(e)}cancel(){var e,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(e=this.options).onCancel)==null||a.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),e.observe(this)}}function HE(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const xa=t=>t*180/Math.PI,Kh=t=>{const e=xa(Math.atan2(t[1],t[0]));return Yh(e)},$E={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Kh,rotateZ:Kh,skewX:t=>xa(Math.atan(t[1])),skewY:t=>xa(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Yh=t=>(t=t%360,t<0&&(t+=360),t),lv=Kh,cv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),uv=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),IE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:cv,scaleY:uv,scale:t=>(cv(t)+uv(t))/2,rotateX:t=>Yh(xa(Math.atan2(t[6],t[5]))),rotateY:t=>Yh(xa(Math.atan2(-t[2],t[0]))),rotateZ:lv,rotate:lv,skewX:t=>xa(Math.atan(t[4])),skewY:t=>xa(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Xh(t){return t.includes("scale")?1:0}function Wh(t,e){if(!t||t==="none")return Xh(e);const a=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,o;if(a)i=IE,o=a;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=$E,o=h}if(!o)return Xh(e);const c=i[e],d=o[1].split(",").map(FE);return typeof c=="function"?c(d):d[c]}const qE=(t,e)=>{const{transform:a="none"}=getComputedStyle(t);return Wh(a,e)};function FE(t){return parseFloat(t.trim())}const Ai=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ni=new Set([...Ai,"pathRotation"]),dv=t=>t===Ci||t===se,GE=new Set(["x","y","z"]),KE=Ai.filter(t=>!GE.has(t));function YE(t){const e=[];return KE.forEach(a=>{const i=t.getValue(a);i!==void 0&&(e.push([a,i.get()]),i.set(a.startsWith("scale")?1:0))}),e}const $r={width:({x:t},{paddingLeft:e="0",paddingRight:a="0",boxSizing:i})=>{const o=t.max-t.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(a)},height:({y:t},{paddingTop:e="0",paddingBottom:a="0",boxSizing:i})=>{const o=t.max-t.min;return i==="border-box"?o:o-parseFloat(e)-parseFloat(a)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Wh(e,"x"),y:(t,{transform:e})=>Wh(e,"y")};$r.translateX=$r.x;$r.translateY=$r.y;const wa=new Set;let Jh=!1,Qh=!1,Zh=!1;function Qx(){if(Qh){const t=Array.from(wa).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),a=new Map;e.forEach(i=>{const o=YE(i);o.length&&(a.set(i,o),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const o=a.get(i);o&&o.forEach(([c,d])=>{var h;(h=i.getValue(c))==null||h.set(d)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}Qh=!1,Jh=!1,wa.forEach(t=>t.complete(Zh)),wa.clear()}function Zx(){wa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Qh=!0)})}function XE(){Zh=!0,Zx(),Qx(),Zh=!1}class $f{constructor(e,a,i,o,c,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=a,this.name=i,this.motionValue=o,this.element=c,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(wa.add(this),Jh||(Jh=!0,Fe.read(Zx),Fe.resolveKeyframes(Qx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:a,element:i,motionValue:o}=this;if(e[0]===null){const c=o==null?void 0:o.get(),d=e[e.length-1];if(c!==void 0)e[0]=c;else if(i&&a){const h=i.readValue(a,d);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=d),o&&c===void 0&&o.set(e[0])}HE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),wa.delete(this)}cancel(){this.state==="scheduled"&&(wa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const WE=t=>t.startsWith("--");function e1(t,e,a){WE(e)?t.style.setProperty(e,a):t.style[e]=a}const JE={};function t1(t,e){const a=Cx(t);return()=>JE[e]??a()}const QE=t1(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),n1=t1(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ls=([t,e,a,i])=>`cubic-bezier(${t}, ${e}, ${a}, ${i})`,hv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ls([0,.65,.55,1]),circOut:Ls([.55,0,1,.45]),backIn:Ls([.31,.01,.66,-.59]),backOut:Ls([.33,1.53,.69,.99])};function r1(t,e){if(t)return typeof t=="function"?n1()?Xx(t,e):"ease-out":Px(t)?Ls(t):Array.isArray(t)?t.map(a=>r1(a,e)||hv.easeOut):hv[t]}function ZE(t,e,a,{delay:i=0,duration:o=300,repeat:c=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[e]:a};p&&(y.offset=p);const v=r1(h,o);Array.isArray(v)&&(y.easing=v);const x={delay:i,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:d==="reverse"?"alternate":"normal"};return g&&(x.pseudoElement=g),t.animate(y,x)}function a1(t){return typeof t=="function"&&"applyToOptions"in t}function eC({type:t,...e}){return a1(t)&&n1()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class i1 extends Hf{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:a,name:i,keyframes:o,pseudoElement:c,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=e;this.isPseudoElement=!!c,this.allowFlatten=d,this.options=e,Of(typeof e.type!="string");const g=eC(e);this.animation=ZE(a,i,o,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=Ec(o,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(y),e1(a,i,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,a;(a=(e=this.animation).finish)==null||a.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var a,i,o;const e=(a=this.options)==null?void 0:a.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(i=this.animation).commitStyles)==null||o.call(i))}get duration(){var a,i;const e=((i=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:i.call(a).duration)||0;return gn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gn(e)}get time(){return gn(Number(this.animation.currentTime)||0)}set time(e){const a=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=en(e),a&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:a,rangeEnd:i,observe:o}){var c;return this.allowFlatten&&((c=this.animation.effect)==null||c.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&QE()?(this.animation.timeline=e,a&&(this.animation.rangeStart=a),i&&(this.animation.rangeEnd=i),yn):o(this)}}const s1={anticipate:Mx,backInOut:Lx,circInOut:Ux};function tC(t){return t in s1}function nC(t){typeof t.ease=="string"&&tC(t.ease)&&(t.ease=s1[t.ease])}const fh=10;class rC extends i1{constructor(e){nC(e),Jx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:a,onUpdate:i,onComplete:o,element:c,...d}=this.options;if(!a)return;if(e!==void 0){a.set(e);return}const h=new dc({...d,autoplay:!1}),p=Math.max(fh,Nt.now()-this.startTime),g=Hn(0,fh,p-fh),y=h.sample(p).value,{name:v}=this.options;c&&v&&e1(c,v,y),a.setWithVelocity(h.sample(Math.max(0,p-g)).value,y,g),h.stop()}}const fv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Cn.test(t)||t==="0")&&!t.startsWith("url("));function aC(t){const e=t[0];if(t.length===1)return!0;for(let a=0;a<t.length;a++)if(t[a]!==e)return!0}function iC(t,e,a,i){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const c=t[t.length-1],d=fv(o,e),h=fv(c,e);return!d||!h?!1:aC(t)||(a==="spring"||a1(a))&&i}function ef(t){t.duration=0,t.type="keyframes"}const o1=new Set(["opacity","clipPath","filter","transform"]),sC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function oC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&sC.test(t[e]))return!0;return!1}const lC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),cC=Cx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function uC(t){var v;const{motionValue:e,name:a,repeatDelay:i,repeatType:o,damping:c,type:d,keyframes:h}=t;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:y}=e.owner.getProps();return cC()&&a&&(o1.has(a)||lC.has(a)&&oC(h))&&(a!=="transform"||!y)&&!g&&!i&&o!=="mirror"&&c!==0&&d!=="inertia"}const dC=40;class hC extends Hf{constructor({autoplay:e=!0,delay:a=0,type:i="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:y,...v}){var S;super(),this.stop=()=>{var T,C;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(C=this.keyframeResolver)==null||C.cancel()},this.createdAt=Nt.now();const x={autoplay:e,delay:a,type:i,repeat:o,repeatDelay:c,repeatType:d,name:p,motionValue:g,element:y,...v},w=(y==null?void 0:y.KeyframeResolver)||$f;this.keyframeResolver=new w(h,(T,C,_)=>this.onKeyframesResolved(T,C,x,!_),p,g,y),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(e,a,i,o){var _,R;this.keyframeResolver=void 0;const{name:c,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:y}=i;this.resolvedAt=Nt.now();let v=!0;iC(e,c,d,h)||(v=!1,(Ir.instantAnimations||!p)&&(y==null||y(Ec(e,i,a))),e[0]=e[e.length-1],ef(i),i.repeat=0);const w={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>dC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...i,keyframes:e},S=v&&!g&&uC(w),T=(R=(_=w.motionValue)==null?void 0:_.owner)==null?void 0:R.current;let C;if(S)try{C=new rC({...w,element:T})}catch{C=new dc(w)}else C=new dc(w);C.finished.then(()=>{this.notifyFinished()}).catch(yn),this.pendingTimeline&&(this.stopTimeline=C.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=C}get finished(){return this._animation?this.animation.finished:this._finished}then(e,a){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),XE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function l1(t,e,a,i=0,o=1){const c=Array.from(t).sort((g,y)=>g.sortNodePosition(y)).indexOf(e),d=t.size,h=(d-1)*i;return typeof a=="function"?a(c,d):o===1?c*i:h-c*i}const pv=30,fC=t=>!isNaN(parseFloat(t));class pC{constructor(e,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var c;const o=Nt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=a.owner}setCurrent(e){this.current=e,this.updatedAt=Nt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=fC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,a){this.events[e]||(this.events[e]=new Df);const i=this.events[e].add(a);return e==="change"?()=>{i(),Fe.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,a){this.passiveEffect=e,this.stopPassiveEffect=a}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,a,i){this.set(a),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,a=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Nt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pv)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,pv);return Ax(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(e){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=e(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,a;(e=this.dependents)==null||e.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ji(t,e){return new pC(t,e)}function c1(t,e){if(t!=null&&t.inherit&&e){const{inherit:a,...i}=t;return{...e,...i}}return t}function If(t,e){const a=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return a!==t?c1(a,t):a}const mC={type:"spring",stiffness:500,damping:25,restSpeed:10},gC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),yC={type:"keyframes",duration:.8},vC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},bC=(t,{keyframes:e})=>e.length>2?yC:Ni.has(t)?t.startsWith("scale")?gC(e[1]):mC:vC,xC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function wC(t){for(const e in t)if(!xC.has(e))return!0;return!1}const qf=(t,e,a,i={},o,c)=>d=>{const h=If(i,t)||{},p=h.delay||i.delay||0;let{elapsed:g=0}=i;g=g-en(p);const y={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:e.getVelocity(),...h,delay:-g,onUpdate:x=>{e.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:e,element:c?void 0:o};wC(h)||Object.assign(y,bC(t,y)),y.duration&&(y.duration=en(y.duration)),y.repeatDelay&&(y.repeatDelay=en(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(ef(y),y.delay===0&&(v=!0)),(Ir.instantAnimations||Ir.skipAnimations||o!=null&&o.shouldSkipAnimations||h.skipAnimations)&&(v=!0,ef(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,v&&!c&&e.get()!==void 0){const x=Ec(y.keyframes,h);if(x!==void 0){Fe.update(()=>{y.onUpdate(x),y.onComplete()});return}}return h.isSync?new dc(y):new hC(y)},SC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function jC(t){const e=SC.exec(t);if(!e)return[,];const[,a,i,o]=e;return[`--${a??i}`,o]}function u1(t,e,a=1){const[i,o]=jC(t);if(!i)return;const c=window.getComputedStyle(e).getPropertyValue(i);if(c){const d=c.trim();return _x(d)?parseFloat(d):d}return zf(o)?u1(o,e,a+1):o}function mv(t){const e=[{},{}];return t==null||t.values.forEach((a,i)=>{e[0][i]=a.get(),e[1][i]=a.getVelocity()}),e}function Ff(t,e,a,i){if(typeof e=="function"){const[o,c]=mv(i);e=e(a!==void 0?a:t.custom,o,c)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,c]=mv(i);e=e(a!==void 0?a:t.custom,o,c)}return e}function Sa(t,e,a){const i=t.getProps();return Ff(i,e,a!==void 0?a:i.custom,t)}const d1=new Set(["width","height","top","left","right","bottom",...Ai]),tf=t=>Array.isArray(t);function kC(t,e,a){t.hasValue(e)?t.getValue(e).set(a):t.addValue(e,ji(a))}function _C(t){return tf(t)?t[t.length-1]||0:t}function TC(t,e){const a=Sa(t,e);let{transitionEnd:i={},transition:o={},...c}=a||{};c={...c,...i};for(const d in c){const h=_C(c[d]);kC(t,d,h)}}const _t=t=>!!(t&&t.getVelocity);function EC(t){return!!(_t(t)&&t.add)}function nf(t,e){const a=t.getValue("willChange");if(EC(a))return a.add(e);if(!a&&Ir.WillChange){const i=new Ir.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function Gf(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const CC="framerAppearId",h1="data-"+Gf(CC);function f1(t){return t.props[h1]}function AC({protectedKeys:t,needsAnimating:e},a){const i=t.hasOwnProperty(a)&&e[a]!==!0;return e[a]=!1,i}function p1(t,e,{delay:a=0,transitionOverride:i,type:o}={}){let{transition:c,transitionEnd:d,...h}=e;const p=t.getDefaultTransition();c=c?c1(c,p):p;const g=c==null?void 0:c.reduceMotion,y=c==null?void 0:c.skipAnimations;i&&(c=i);const v=[],x=o&&t.animationState&&t.animationState.getState()[o],w=c==null?void 0:c.path;w&&w.animateVisualElement(t,h,c,a,v);for(const S in h){const T=t.getValue(S,t.latestValues[S]??null),C=h[S];if(C===void 0||x&&AC(x,S))continue;const _={delay:a,...If(c||{},S)};y&&(_.skipAnimations=!0);const R=T.get();if(R!==void 0&&!T.isAnimating()&&!Array.isArray(C)&&C===R&&!_.velocity){Fe.update(()=>T.set(C));continue}let O=!1;if(window.MotionHandoffAnimation){const W=f1(t);if(W){const G=window.MotionHandoffAnimation(W,S,Fe);G!==null&&(_.startTime=G,O=!0)}}nf(t,S);const P=g??t.shouldReduceMotion;T.start(qf(S,T,C,P&&d1.has(S)?{type:!1}:_,t,O));const X=T.animation;X&&v.push(X)}if(d){const S=()=>Fe.update(()=>{d&&TC(t,d)});v.length?Promise.all(v).then(S):S()}return v}function rf(t,e,a={}){var p;const i=Sa(t,e,a.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=i||{};a.transitionOverride&&(o=a.transitionOverride);const c=i?()=>Promise.all(p1(t,i,a)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=o;return NC(t,e,g,y,v,x,a)}:()=>Promise.resolve(),{when:h}=o;if(h){const[g,y]=h==="beforeChildren"?[c,d]:[d,c];return g().then(()=>y())}else return Promise.all([c(),d(a.delay)])}function NC(t,e,a=0,i=0,o=0,c=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",e),h.push(rf(p,e,{...d,delay:a+(typeof i=="function"?0:i)+l1(t.variantChildren,p,i,o,c)}).then(()=>p.notify("AnimationComplete",e)));return Promise.all(h)}function RC(t,e,a={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const o=e.map(c=>rf(t,c,a));i=Promise.all(o)}else if(typeof e=="string")i=rf(t,e,a);else{const o=typeof e=="function"?Sa(t,e,a.custom):e;i=Promise.all(p1(t,o,a))}return i.then(()=>{t.notify("AnimationComplete",e)})}const OC={test:t=>t==="auto",parse:t=>t},m1=t=>e=>e.test(t),g1=[Ci,se,Vn,cr,aE,rE,OC],gv=t=>g1.find(m1(t));function DC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||Ex(t):!0}const LC=new Set(["brightness","contrast","saturate","opacity"]);function MC(t){const[e,a]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=a.match(Uf)||[];if(!i)return t;const o=a.replace(i,"");let c=LC.has(e)?1:0;return i!==a&&(c*=100),e+"("+c+o+")"}const zC=/\b([a-z-]*)\(.*?\)/gu,af={...Cn,getAnimatableNone:t=>{const e=t.match(zC);return e?e.map(MC).join(" "):t}},sf={...Cn,getAnimatableNone:t=>{const e=Cn.parse(t);return Cn.createTransformer(t)(e.map(i=>typeof i=="number"?0:typeof i=="object"?{...i,alpha:1}:i))}},yv={...Ci,transform:Math.round},UC={rotate:cr,pathRotation:cr,rotateX:cr,rotateY:cr,rotateZ:cr,scale:Ml,scaleX:Ml,scaleY:Ml,scaleZ:Ml,skew:cr,skewX:cr,skewY:cr,distance:se,translateX:se,translateY:se,translateZ:se,x:se,y:se,z:se,perspective:se,transformPerspective:se,opacity:Js,originX:rv,originY:rv,originZ:se},hc={borderWidth:se,borderTopWidth:se,borderRightWidth:se,borderBottomWidth:se,borderLeftWidth:se,borderRadius:se,borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomRightRadius:se,borderBottomLeftRadius:se,width:se,maxWidth:se,height:se,maxHeight:se,top:se,right:se,bottom:se,left:se,inset:se,insetBlock:se,insetBlockStart:se,insetBlockEnd:se,insetInline:se,insetInlineStart:se,insetInlineEnd:se,padding:se,paddingTop:se,paddingRight:se,paddingBottom:se,paddingLeft:se,paddingBlock:se,paddingBlockStart:se,paddingBlockEnd:se,paddingInline:se,paddingInlineStart:se,paddingInlineEnd:se,margin:se,marginTop:se,marginRight:se,marginBottom:se,marginLeft:se,marginBlock:se,marginBlockStart:se,marginBlockEnd:se,marginInline:se,marginInlineStart:se,marginInlineEnd:se,fontSize:se,backgroundPositionX:se,backgroundPositionY:se,...UC,zIndex:yv,fillOpacity:Js,strokeOpacity:Js,numOctaves:yv},BC={...hc,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:af,WebkitFilter:af,mask:sf,WebkitMask:sf},y1=t=>BC[t],PC=new Set([af,sf]);function v1(t,e){let a=y1(t);return PC.has(a)||(a=Cn),a.getAnimatableNone?a.getAnimatableNone(e):void 0}const VC=new Set(["auto","none","0"]);function HC(t,e,a){let i=0,o;for(;i<t.length&&!o;){const c=t[i];typeof c=="string"&&!VC.has(c)&&Si(c).values.length&&(o=t[i]),i++}if(o&&a)for(const c of e)t[c]=v1(a,o)}class $C extends $f{constructor(e,a,i,o,c){super(e,a,i,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:a,name:i}=this;if(!a||!a.current)return;super.readKeyframes();for(let y=0;y<e.length;y++){let v=e[y];if(typeof v=="string"&&(v=v.trim(),zf(v))){const x=u1(v,a.current);x!==void 0&&(e[y]=x),y===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!d1.has(i)||e.length!==2)return;const[o,c]=e,d=gv(o),h=gv(c),p=nv(o),g=nv(c);if(p!==g&&$r[i]){this.needsMeasurement=!0;return}if(d!==h)if(dv(d)&&dv(h))for(let y=0;y<e.length;y++){const v=e[y];typeof v=="string"&&(e[y]=parseFloat(v))}else $r[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:a}=this,i=[];for(let o=0;o<e.length;o++)(e[o]===null||DC(e[o]))&&i.push(o);i.length&&HC(e,i,a)}measureInitialState(){const{element:e,unresolvedKeyframes:a,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$r[i](e.measureViewportBox(),window.getComputedStyle(e.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&e.getValue(i,o).jump(o,!1)}measureEndState(){var h;const{element:e,name:a,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const o=e.getValue(a);o&&o.jump(this.measuredOrigin,!1);const c=i.length-1,d=i[c];i[c]=$r[a](e.measureViewportBox(),window.getComputedStyle(e.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{e.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function b1(t,e,a){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let i=document;const o=(a==null?void 0:a[t])??i.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t).filter(i=>i!=null)}const of=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ql(t){return Tx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Kf}=Vx(queueMicrotask,!1),kn={x:!1,y:!1};function x1(){return kn.x||kn.y}function IC(t){return t==="x"||t==="y"?kn[t]?null:(kn[t]=!0,()=>{kn[t]=!1}):kn.x||kn.y?null:(kn.x=kn.y=!0,()=>{kn.x=kn.y=!1})}function w1(t,e){const a=b1(t),i=new AbortController,o={passive:!0,...e,signal:i.signal};return[a,o,()=>i.abort()]}function qC(t){return!(t.pointerType==="touch"||x1())}function FC(t,e,a={}){const[i,o,c]=w1(t,a);return i.forEach(d=>{let h=!1,p=!1,g;const y=()=>{d.removeEventListener("pointerleave",S)},v=C=>{g&&(g(C),g=void 0),y()},x=C=>{h=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),p&&(p=!1,v(C))},w=()=>{h=!0,window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",x,o)},S=C=>{if(C.pointerType!=="touch"){if(h){p=!0;return}v(C)}},T=C=>{if(!qC(C))return;p=!1;const _=e(d,C);typeof _=="function"&&(g=_,d.addEventListener("pointerleave",S,o))};d.addEventListener("pointerenter",T,o),d.addEventListener("pointerdown",w,o)}),c}const S1=(t,e)=>e?t===e?!0:S1(t,e.parentElement):!1,Yf=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,GC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function KC(t){return GC.has(t.tagName)||t.isContentEditable===!0}const YC=new Set(["INPUT","SELECT","TEXTAREA"]);function XC(t){return YC.has(t.tagName)||t.isContentEditable===!0}const Fl=new WeakSet;function vv(t){return e=>{e.key==="Enter"&&t(e)}}function ph(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const WC=(t,e)=>{const a=t.currentTarget;if(!a)return;const i=vv(()=>{if(Fl.has(a))return;ph(a,"down");const o=vv(()=>{ph(a,"up")}),c=()=>ph(a,"cancel");a.addEventListener("keyup",o,e),a.addEventListener("blur",c,e)});a.addEventListener("keydown",i,e),a.addEventListener("blur",()=>a.removeEventListener("keydown",i),e)};function bv(t){return Yf(t)&&!x1()}const xv=new WeakSet;function JC(t,e,a={}){const[i,o,c]=w1(t,a),d=h=>{const p=h.currentTarget;if(!bv(h)||xv.has(h))return;Fl.add(p),a.stopPropagation&&xv.add(h);const g=e(p,h),y=(w,S)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),Fl.has(p)&&Fl.delete(p),bv(w)&&typeof g=="function"&&g(w,{success:S})},v=w=>{y(w,p===window||p===document||a.useGlobalTarget||S1(p,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",x,o)};return i.forEach(h=>{(a.useGlobalTarget?window:h).addEventListener("pointerdown",d,o),ql(h)&&(h.addEventListener("focus",g=>WC(g,o)),!KC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function Xf(t){return Tx(t)&&"ownerSVGElement"in t}const Gl=new WeakMap;let Pr;const j1=(t,e,a)=>(i,o)=>o&&o[0]?o[0][t+"Size"]:Xf(i)&&"getBBox"in i?i.getBBox()[e]:i[a],QC=j1("inline","width","offsetWidth"),ZC=j1("block","height","offsetHeight");function eA({target:t,borderBoxSize:e}){var a;(a=Gl.get(t))==null||a.forEach(i=>{i(t,{get width(){return QC(t,e)},get height(){return ZC(t,e)}})})}function tA(t){t.forEach(eA)}function nA(){typeof ResizeObserver>"u"||(Pr=new ResizeObserver(tA))}function rA(t,e){Pr||nA();const a=b1(t);return a.forEach(i=>{let o=Gl.get(i);o||(o=new Set,Gl.set(i,o)),o.add(e),Pr==null||Pr.observe(i)}),()=>{a.forEach(i=>{const o=Gl.get(i);o==null||o.delete(e),o!=null&&o.size||Pr==null||Pr.unobserve(i)})}}const Kl=new Set;let bi;function aA(){bi=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Kl.forEach(e=>e(t))},window.addEventListener("resize",bi)}function iA(t){return Kl.add(t),bi||aA(),()=>{Kl.delete(t),!Kl.size&&typeof bi=="function"&&(window.removeEventListener("resize",bi),bi=void 0)}}function wv(t,e){return typeof t=="function"?iA(t):rA(t,e)}function sA(t){return Xf(t)&&t.tagName==="svg"}const oA=[...g1,dt,Cn],lA=t=>oA.find(m1(t)),Sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),xi=()=>({x:Sv(),y:Sv()}),jv=()=>({min:0,max:0}),pt=()=>({x:jv(),y:jv()}),cA=new WeakMap;function Cc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Qs(t){return typeof t=="string"||Array.isArray(t)}const Wf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jf=["initial",...Wf];function Ac(t){return Cc(t.animate)||Jf.some(e=>Qs(t[e]))}function k1(t){return!!(Ac(t)||t.variants)}function uA(t,e,a){for(const i in e){const o=e[i],c=a[i];if(_t(o))t.addValue(i,o);else if(_t(c))t.addValue(i,ji(o,{owner:t}));else if(c!==o)if(t.hasValue(i)){const d=t.getValue(i);d.liveStyle===!0?d.jump(o):d.hasAnimated||d.set(o)}else{const d=t.getStaticValue(i);t.addValue(i,ji(d!==void 0?d:o,{owner:t}))}}for(const i in a)e[i]===void 0&&t.removeValue(i);return e}const lf={current:null},_1={current:!1},dA=typeof window<"u";function hA(){if(_1.current=!0,!!dA)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>lf.current=t.matches;t.addEventListener("change",e),e()}else lf.current=!1}const kv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let fc={};function T1(t){fc=t}function fA(){return fc}class pA{scrapeMotionValuesFromProps(e,a,i){return{}}constructor({parent:e,props:a,presenceContext:i,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=$f,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Nt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Fe.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=a.initial?{...g}:{},this.renderState=y,this.parent=e,this.props=a,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Ac(a),this.isVariantNode=k1(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(a,{},this);for(const w in x){const S=x[w];g[w]!==void 0&&_t(S)&&S.set(g[w])}}mount(e){var a,i;if(this.hasBeenMounted)for(const o in this.initialValues)(a=this.values.get(o))==null||a.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,cA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,c)=>this.bindToMotionValue(c,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(_1.current||hA(),this.shouldReduceMotion=lf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),qr(this.notifyUpdate),qr(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const i=this.features[a];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,a){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),a.accelerate&&o1.has(e)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:y}=a.accelerate,v=new i1({element:this.current,name:e,keyframes:h,times:p,ease:g,duration:en(y)}),x=d(v);this.valueSubscriptions.set(e,()=>{x(),v.cancel()});return}const i=Ni.has(e);i&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",d=>{this.latestValues[e]=d,this.props.onUpdate&&Fe.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,a)),this.valueSubscriptions.set(e,()=>{o(),c&&c()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in fc){const a=fc[e];if(!a)continue;const{isEnabled:i,Feature:o}=a;if(!this.features[e]&&o&&i(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,a){this.latestValues[e]=a}update(e,a){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let i=0;i<kv.length;i++){const o=kv[i];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,d=e[c];d&&(this.propEventSubscriptions[o]=this.on(o,d))}this.prevMotionValues=uA(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(e),()=>a.variantChildren.delete(e)}addValue(e,a){const i=this.values.get(e);a!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,a),this.values.set(e,a),this.latestValues[e]=a.get())}removeValue(e){this.values.delete(e);const a=this.valueSubscriptions.get(e);a&&(a(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,a){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&a!==void 0&&(i=ji(a===null?void 0:a,{owner:this}),this.addValue(e,i)),i}readValue(e,a){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(_x(i)||Ex(i))?i=parseFloat(i):!lA(i)&&Cn.test(a)&&(i=v1(e,a)),this.setBaseTarget(e,_t(i)?i.get():i)),_t(i)?i.get():i}setBaseTarget(e,a){this.baseTarget[e]=a}getBaseTarget(e){var c;const{initial:a}=this.props;let i;if(typeof a=="string"||typeof a=="object"){const d=Ff(this.props,a,(c=this.presenceContext)==null?void 0:c.custom);d&&(i=d[e])}if(a&&i!==void 0)return i;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!_t(o)?o:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,a){return this.events[e]||(this.events[e]=new Df),this.events[e].add(a)}notify(e,...a){this.events[e]&&this.events[e].notify(...a)}scheduleRenderMicrotask(){Kf.render(this.render)}}class E1 extends pA{constructor(){super(...arguments),this.KeyframeResolver=$C}sortInstanceNodePosition(e,a){return e.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(e,a){const i=e.style;return i?i[a]:void 0}removeValueFromRenderState(e,{vars:a,style:i}){delete a[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;_t(e)&&(this.childSubscription=e.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}class Gr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function C1({top:t,left:e,right:a,bottom:i}){return{x:{min:e,max:a},y:{min:t,max:i}}}function mA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function gA(t,e){if(!e)return t;const a=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:a.y,left:a.x,bottom:i.y,right:i.x}}function mh(t){return t===void 0||t===1}function cf({scale:t,scaleX:e,scaleY:a}){return!mh(t)||!mh(e)||!mh(a)}function ma(t){return cf(t)||A1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function A1(t){return _v(t.x)||_v(t.y)}function _v(t){return t&&t!=="0%"}function pc(t,e,a){const i=t-a,o=e*i;return a+o}function Tv(t,e,a,i,o){return o!==void 0&&(t=pc(t,o,i)),pc(t,a,i)+e}function uf(t,e=0,a=1,i,o){t.min=Tv(t.min,e,a,i,o),t.max=Tv(t.max,e,a,i,o)}function N1(t,{x:e,y:a}){uf(t.x,e.translate,e.scale,e.originPoint),uf(t.y,a.translate,a.scale,a.originPoint)}const Ev=.999999999999,Cv=1.0000000000001;function yA(t,e,a,i=!1){var h;const o=a.length;if(!o)return;e.x=e.y=1;let c,d;for(let p=0;p<o;p++){c=a[p],d=c.projectionDelta;const{visualElement:g}=c.options;g&&g.props.style&&g.props.style.display==="contents"||(i&&c.options.layoutScroll&&c.scroll&&c!==c.root&&(Pn(t.x,-c.scroll.offset.x),Pn(t.y,-c.scroll.offset.y)),d&&(e.x*=d.x.scale,e.y*=d.y.scale,N1(t,d)),i&&ma(c.latestValues)&&Yl(t,c.latestValues,(h=c.layout)==null?void 0:h.layoutBox))}e.x<Cv&&e.x>Ev&&(e.x=1),e.y<Cv&&e.y>Ev&&(e.y=1)}function Pn(t,e){t.min+=e,t.max+=e}function Av(t,e,a,i,o=.5){const c=qe(t.min,t.max,o);uf(t,e,a,c,i)}function Nv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Yl(t,e,a){const i=a??t;Av(t.x,Nv(e.x,i.x),e.scaleX,e.scale,e.originX),Av(t.y,Nv(e.y,i.y),e.scaleY,e.scale,e.originY)}function R1(t,e){return C1(gA(t.getBoundingClientRect(),e))}function vA(t,e,a){const i=R1(t,a),{scroll:o}=e;return o&&(Pn(i.x,o.offset.x),Pn(i.y,o.offset.y)),i}const bA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},xA=Ai.length;function wA(t,e,a){let i="",o=!0;for(let d=0;d<xA;d++){const h=Ai[d],p=t[h];if(p===void 0)continue;let g=!0;if(typeof p=="number")g=p===(h.startsWith("scale")?1:0);else{const y=parseFloat(p);g=h.startsWith("scale")?y===1:y===0}if(!g||a){const y=of(p,hc[h]);if(!g){o=!1;const v=bA[h]||h;i+=`${v}(${y}) `}a&&(e[h]=y)}}const c=t.pathRotation;return c&&(o=!1,i+=`rotate(${of(c,hc.pathRotation)}) `),i=i.trim(),a?i=a(e,o?"":i):o&&(i="none"),i}function Qf(t,e,a){const{style:i,vars:o,transformOrigin:c}=t;let d=!1,h=!1;for(const p in e){const g=e[p];if(Ni.has(p)){d=!0;continue}else if($x(p)){o[p]=g;continue}else{const y=of(g,hc[p]);p.startsWith("origin")?(h=!0,c[p]=y):i[p]=y}}if(e.transform||(d||a?i.transform=wA(e,t.transform,a):i.transform&&(i.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=c;i.transformOrigin=`${p} ${g} ${y}`}}function O1(t,{style:e,vars:a},i,o){const c=t.style;let d;for(d in e)c[d]=e[d];o==null||o.applyProjectionStyles(c,i);for(d in a)c.setProperty(d,a[d])}function Rv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Es={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(se.test(t))t=parseFloat(t);else return t;const a=Rv(t,e.target.x),i=Rv(t,e.target.y);return`${a}% ${i}%`}},SA={correct:(t,{treeScale:e,projectionDelta:a})=>{const i=t,o=Cn.parse(t);if(o.length>5)return i;const c=Cn.createTransformer(t),d=typeof o[0]!="number"?1:0,h=a.x.scale*e.x,p=a.y.scale*e.y;o[0+d]/=h,o[1+d]/=p;const g=qe(h,p,.5);return typeof o[2+d]=="number"&&(o[2+d]/=g),typeof o[3+d]=="number"&&(o[3+d]/=g),c(o)}},df={borderRadius:{...Es,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Es,borderTopRightRadius:Es,borderBottomLeftRadius:Es,borderBottomRightRadius:Es,boxShadow:SA};function D1(t,{layout:e,layoutId:a}){return Ni.has(t)||t.startsWith("origin")||(e||a!==void 0)&&(!!df[t]||t==="opacity")}function Zf(t,e,a){var d;const i=t.style,o=e==null?void 0:e.style,c={};if(!i)return c;for(const h in i)(_t(i[h])||o&&_t(o[h])||D1(h,t)||((d=a==null?void 0:a.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(c[h]=i[h]);return c}function jA(t){return window.getComputedStyle(t)}class kA extends E1{constructor(){super(...arguments),this.type="html",this.renderInstance=O1}readValueFromInstance(e,a){var i;if(Ni.has(a))return(i=this.projection)!=null&&i.isProjecting?Xh(a):qE(e,a);{const o=jA(e),c=($x(a)?o.getPropertyValue(a):o[a])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(e,{transformPagePoint:a}){return R1(e,a)}build(e,a,i){Qf(e,a,i.transformTemplate)}scrapeMotionValuesFromProps(e,a,i){return Zf(e,a,i)}}const _A={offset:"stroke-dashoffset",array:"stroke-dasharray"},TA={offset:"strokeDashoffset",array:"strokeDasharray"};function EA(t,e,a=1,i=0,o=!0){t.pathLength=1;const c=o?_A:TA;t[c.offset]=`${-i}`,t[c.array]=`${e} ${a}`}const CA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function L1(t,{attrX:e,attrY:a,attrScale:i,pathLength:o,pathSpacing:c=1,pathOffset:d=0,...h},p,g,y){if(Qf(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:x}=t;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete v.transformBox);for(const w of CA)v[w]!==void 0&&(x[w]=v[w],delete v[w]);e!==void 0&&(v.x=e),a!==void 0&&(v.y=a),i!==void 0&&(v.scale=i),o!==void 0&&EA(v,o,c,d,!1)}const M1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),z1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function AA(t,e,a,i){O1(t,e,void 0,i);for(const o in e.attrs)t.setAttribute(M1.has(o)?o:Gf(o),e.attrs[o])}function U1(t,e,a){const i=Zf(t,e,a);for(const o in t)if(_t(t[o])||_t(e[o])){const c=Ai.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;i[c]=t[o]}return i}class NA extends E1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pt}getBaseTargetFromProps(e,a){return e[a]}readValueFromInstance(e,a){if(Ni.has(a)){const i=y1(a);return i&&i.default||0}return a=M1.has(a)?a:Gf(a),e.getAttribute(a)}scrapeMotionValuesFromProps(e,a,i){return U1(e,a,i)}build(e,a,i){L1(e,a,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,a,i,o){AA(e,a,i,o)}mount(e){this.isSVGTag=z1(e.tagName),super.mount(e)}}const RA=Jf.length;function B1(t){if(!t)return;if(!t.isControllingVariants){const a=t.parent?B1(t.parent)||{}:{};return t.props.initial!==void 0&&(a.initial=t.props.initial),a}const e={};for(let a=0;a<RA;a++){const i=Jf[a],o=t.props[i];(Qs(o)||o===!1)&&(e[i]=o)}return e}function P1(t,e){if(!Array.isArray(e))return!1;const a=e.length;if(a!==t.length)return!1;for(let i=0;i<a;i++)if(e[i]!==t[i])return!1;return!0}const OA=[...Wf].reverse(),DA=Wf.length;function LA(t){return e=>Promise.all(e.map(({animation:a,options:i})=>RC(t,a,i)))}function MA(t){let e=LA(t),a=Ov(),i=!0,o=!1;const c=g=>(y,v)=>{var w;const x=Sa(t,v,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(x){const{transition:S,transitionEnd:T,...C}=x;y={...y,...C,...T}}return y};function d(g){e=g(t)}function h(g){const{props:y}=t,v=B1(t.parent)||{},x=[],w=new Set;let S={},T=1/0;for(let _=0;_<DA;_++){const R=OA[_],O=a[R],P=y[R]!==void 0?y[R]:v[R],X=Qs(P),W=R===g?O.isActive:null;W===!1&&(T=_);let G=P===v[R]&&P!==y[R]&&X;if(G&&(i||o)&&t.manuallyAnimateOnMount&&(G=!1),O.protectedKeys={...S},!O.isActive&&W===null||!P&&!O.prevProp||Cc(P)||typeof P=="boolean")continue;if(R==="exit"&&O.isActive&&W!==!0){O.prevResolvedValues&&(S={...S,...O.prevResolvedValues});continue}const q=zA(O.prevProp,P);let Z=q||R===g&&O.isActive&&!G&&X||_>T&&X,re=!1;const xe=Array.isArray(P)?P:[P];let pe=xe.reduce(c(R),{});W===!1&&(pe={});const{prevResolvedValues:Ce={}}=O,Le={...Ce,...pe},me=ee=>{Z=!0,w.has(ee)&&(re=!0,w.delete(ee)),O.needsAnimating[ee]=!0;const ce=t.getValue(ee);ce&&(ce.liveStyle=!1)};for(const ee in Le){const ce=pe[ee],be=Ce[ee];if(S.hasOwnProperty(ee))continue;let N=!1;tf(ce)&&tf(be)?N=!P1(ce,be)||q:N=ce!==be,N?ce!=null?me(ee):w.add(ee):ce!==void 0&&w.has(ee)?me(ee):O.protectedKeys[ee]=!0}O.prevProp=P,O.prevResolvedValues=pe,O.isActive&&(S={...S,...pe}),(i||o)&&t.blockInitialAnimation&&(Z=!1);const E=G&&q;Z&&(!E||re)&&x.push(...xe.map(ee=>{const ce={type:R};if(typeof ee=="string"&&(i||o)&&!E&&t.manuallyAnimateOnMount&&t.parent){const{parent:be}=t,N=Sa(be,ee);if(be.enteringChildren&&N){const{delayChildren:I}=N.transition||{};ce.delay=l1(be.enteringChildren,t,I)}}return{animation:ee,options:ce}}))}if(w.size){const _={};if(typeof y.initial!="boolean"){const R=Sa(t,Array.isArray(y.initial)?y.initial[0]:y.initial);R&&R.transition&&(_.transition=R.transition)}w.forEach(R=>{const O=t.getBaseTarget(R),P=t.getValue(R);P&&(P.liveStyle=!0),_[R]=O??null}),x.push({animation:_})}let C=!!x.length;return i&&(y.initial===!1||y.initial===y.animate)&&!t.manuallyAnimateOnMount&&(C=!1),i=!1,o=!1,C?e(x):Promise.resolve()}function p(g,y){var x;if(a[g].isActive===y)return Promise.resolve();(x=t.variantChildren)==null||x.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,y)}),a[g].isActive=y;const v=h(g);for(const w in a)a[w].protectedKeys={};return v}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>a,reset:()=>{a=Ov(),o=!0}}}function zA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!P1(e,t):!1}function fa(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ov(){return{animate:fa(!0),whileInView:fa(),whileHover:fa(),whileTap:fa(),whileDrag:fa(),whileFocus:fa(),exit:fa()}}function hf(t,e){t.min=e.min,t.max=e.max}function Sn(t,e){hf(t.x,e.x),hf(t.y,e.y)}function Dv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const V1=1e-4,UA=1-V1,BA=1+V1,H1=.01,PA=0-H1,VA=0+H1;function Rt(t){return t.max-t.min}function HA(t,e,a){return Math.abs(t-e)<=a}function Lv(t,e,a,i=.5){t.origin=i,t.originPoint=qe(e.min,e.max,t.origin),t.scale=Rt(a)/Rt(e),t.translate=qe(a.min,a.max,t.origin)-t.originPoint,(t.scale>=UA&&t.scale<=BA||isNaN(t.scale))&&(t.scale=1),(t.translate>=PA&&t.translate<=VA||isNaN(t.translate))&&(t.translate=0)}function Vs(t,e,a,i){Lv(t.x,e.x,a.x,i?i.originX:void 0),Lv(t.y,e.y,a.y,i?i.originY:void 0)}function Mv(t,e,a,i=0){const o=i?qe(a.min,a.max,i):a.min;t.min=o+e.min,t.max=t.min+Rt(e)}function $A(t,e,a,i){Mv(t.x,e.x,a.x,i==null?void 0:i.x),Mv(t.y,e.y,a.y,i==null?void 0:i.y)}function zv(t,e,a,i=0){const o=i?qe(a.min,a.max,i):a.min;t.min=e.min-o,t.max=t.min+Rt(e)}function mc(t,e,a,i){zv(t.x,e.x,a.x,i==null?void 0:i.x),zv(t.y,e.y,a.y,i==null?void 0:i.y)}function Uv(t,e,a,i,o){return t-=e,t=pc(t,1/a,i),o!==void 0&&(t=pc(t,1/o,i)),t}function IA(t,e=0,a=1,i=.5,o,c=t,d=t){if(Vn.test(e)&&(e=parseFloat(e),e=qe(d.min,d.max,e/100)-d.min),typeof e!="number")return;let h=qe(c.min,c.max,i);t===c&&(h-=e),t.min=Uv(t.min,e,a,h,o),t.max=Uv(t.max,e,a,h,o)}function Bv(t,e,[a,i,o],c,d){IA(t,e[a],e[i],e[o],e.scale,c,d)}const qA=["x","scaleX","originX"],FA=["y","scaleY","originY"];function Pv(t,e,a,i){Bv(t.x,e,qA,a?a.x:void 0,i?i.x:void 0),Bv(t.y,e,FA,a?a.y:void 0,i?i.y:void 0)}function Vv(t){return t.translate===0&&t.scale===1}function $1(t){return Vv(t.x)&&Vv(t.y)}function Hv(t,e){return t.min===e.min&&t.max===e.max}function GA(t,e){return Hv(t.x,e.x)&&Hv(t.y,e.y)}function $v(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function I1(t,e){return $v(t.x,e.x)&&$v(t.y,e.y)}function Iv(t){return Rt(t.x)/Rt(t.y)}function qv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function zn(t){return[t("x"),t("y")]}function KA(t,e,a){let i="";const o=t.x.translate/e.x,c=t.y.translate/e.y,d=(a==null?void 0:a.z)||0;if((o||c||d)&&(i=`translate3d(${o}px, ${c}px, ${d}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),a){const{transformPerspective:g,rotate:y,pathRotation:v,rotateX:x,rotateY:w,skewX:S,skewY:T}=a;g&&(i=`perspective(${g}px) ${i}`),y&&(i+=`rotate(${y}deg) `),v&&(i+=`rotate(${v}deg) `),x&&(i+=`rotateX(${x}deg) `),w&&(i+=`rotateY(${w}deg) `),S&&(i+=`skewX(${S}deg) `),T&&(i+=`skewY(${T}deg) `)}const h=t.x.scale*e.x,p=t.y.scale*e.y;return(h!==1||p!==1)&&(i+=`scale(${h}, ${p})`),i||"none"}const q1=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],YA=q1.length,Fv=t=>typeof t=="string"?parseFloat(t):t,Gv=t=>typeof t=="number"||se.test(t);function XA(t,e,a,i,o,c){o?(t.opacity=qe(0,a.opacity??1,WA(i)),t.opacityExit=qe(e.opacity??1,0,JA(i))):c&&(t.opacity=qe(e.opacity??1,a.opacity??1,i));for(let d=0;d<YA;d++){const h=q1[d];let p=Kv(e,h),g=Kv(a,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||Gv(p)===Gv(g)?(t[h]=Math.max(qe(Fv(p),Fv(g),i),0),(Vn.test(g)||Vn.test(p))&&(t[h]+="%")):t[h]=g}(e.rotate||a.rotate)&&(t.rotate=qe(e.rotate||0,a.rotate||0,i))}function Kv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const WA=F1(0,.5,zx),JA=F1(.5,.95,yn);function F1(t,e,a){return i=>i<t?0:i>e?1:a(Ws(t,e,i))}function QA(t,e,a){const i=_t(t)?t:ji(t);return i.start(qf("",i,e,a)),i.animation}function Zs(t,e,a,i={passive:!0}){return t.addEventListener(e,a,i),()=>t.removeEventListener(e,a)}const ZA=(t,e)=>t.depth-e.depth;class e4{constructor(){this.children=[],this.isDirty=!1}add(e){Rf(this.children,e),this.isDirty=!0}remove(e){oc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(ZA),this.isDirty=!1,this.children.forEach(e)}}function t4(t,e){const a=Nt.now(),i=({timestamp:o})=>{const c=o-a;c>=e&&(qr(i),t(c-e))};return Fe.setup(i,!0),()=>qr(i)}function Xl(t){return _t(t)?t.get():t}class n4{constructor(){this.members=[]}add(e){Rf(this.members,e);for(let a=this.members.length-1;a>=0;a--){const i=this.members[a];if(i===e||i===this.lead||i===this.prevLead)continue;const o=i.instance;(!o||o.isConnected===!1)&&!i.snapshot&&(oc(this.members,i),i.unmount())}e.scheduleRender()}remove(e){if(oc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(e){var a;for(let i=this.members.indexOf(e)-1;i>=0;i--){const o=this.members[i];if(o.isPresent!==!1&&((a=o.instance)==null?void 0:a.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,a){var o;const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.updateSnapshot(),e.scheduleRender();const{layoutDependency:c}=i.options,{layoutDependency:d}=e.options;(c===void 0||c!==d)&&(e.resumeFrom=i,a&&(i.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var a,i,o,c,d;(i=(a=e.options).onExitComplete)==null||i.call(a),(d=(o=e.resumingFrom)==null?void 0:(c=o.options).onExitComplete)==null||d.call(c)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Wl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gh=["","X","Y","Z"],r4=1e3;let a4=0;function yh(t,e,a,i){const{latestValues:o}=e;o[t]&&(a[t]=o[t],e.setStaticValue(t,0),i&&(i[t]=0))}function G1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const a=f1(e);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:c}=t.options;window.MotionCancelOptimisedAnimation(a,"transform",Fe,!(o||c))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&G1(i)}function K1({attachResizeListener:t,defaultParent:e,measureScroll:a,checkIsScrollRoot:i,resetTransform:o}){return class{constructor(d={},h=e==null?void 0:e()){this.id=a4++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(o4),this.nodes.forEach(f4),this.nodes.forEach(p4),this.nodes.forEach(l4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new e4)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Df),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Xf(d)&&!sA(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;Fe.read(()=>{v=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=t4(x,250),Wl.hasAnimatedSinceResize&&(Wl.hasAnimatedSinceResize=!1,this.nodes.forEach(Wv)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||b4,{onLayoutAnimationStart:T,onLayoutAnimationComplete:C}=g.getProps(),_=!this.targetLayout||!I1(this.targetLayout,w),R=!v&&x;if(this.options.layoutRoot||this.resumeFrom||R||v&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const O={...If(S,"layout"),onPlay:T,onComplete:C};(g.shouldReduceMotion||this.options.layoutRoot)&&(O.delay=0,O.type=!1),this.startAnimation(O),this.setAnimationOrigin(y,R,O.path)}else v||Wv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qr(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(m4),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&G1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(u4),this.nodes.forEach(Yv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Xv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(d4),this.nodes.forEach(h4),this.nodes.forEach(i4),this.nodes.forEach(s4)):this.nodes.forEach(Xv),this.clearAllSnapshots();const h=Nt.now();kt.delta=Hn(0,1e3/60,h-kt.timestamp),kt.timestamp=h,kt.isProcessing=!0,lh.update.process(kt),lh.preRender.process(kt),lh.render.process(kt),kt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Kf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(c4),this.sharedNodes.forEach(g4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Rt(this.snapshot.measuredBox.x)&&!Rt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=pt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=i(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!$1(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||ma(this.latestValues)||y)&&(o(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),x4(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return pt();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(w4))){const{scroll:y}=this.root;y&&(Pn(h.x,y.offset.x),Pn(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=pt();if(Sn(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&Sn(h,d),Pn(h.x,v.offset.x),Pn(h.y,v.offset.y))}return h}applyTransform(d,h=!1,p){var y,v;const g=p||pt();Sn(g,d);for(let x=0;x<this.path.length;x++){const w=this.path[x];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Pn(g.x,-w.scroll.offset.x),Pn(g.y,-w.scroll.offset.y)),ma(w.latestValues)&&Yl(g,w.latestValues,(y=w.layout)==null?void 0:y.layoutBox)}return ma(this.latestValues)&&Yl(g,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),g}removeTransform(d){var p;const h=pt();Sn(h,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];if(!ma(y.latestValues))continue;let v;y.instance&&(cf(y.latestValues)&&y.updateSnapshot(),v=pt(),Sn(v,y.measurePageBox())),Pv(h,y.latestValues,(p=y.snapshot)==null?void 0:p.layoutBox,v)}return ma(this.latestValues)&&Pv(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==kt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=kt.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=pt(),this.targetWithTransforms=pt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),$A(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Sn(this.target,this.layout.layoutBox),N1(this.target,this.targetDelta)):Sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||cf(this.parent.latestValues)||A1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pt(),this.relativeTargetOrigin=pt(),mc(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Sn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===kt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Sn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;yA(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=pt());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Dv(this.prevProjectionDelta.x,this.projectionDelta.x),Dv(this.prevProjectionDelta.y,this.projectionDelta.y)),Vs(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!qv(this.projectionDelta.x,this.prevProjectionDelta.x)||!qv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xi(),this.projectionDelta=xi(),this.projectionDeltaWithTransform=xi()}setAnimationOrigin(d,h=!1,p){const g=this.snapshot,y=g?g.latestValues:{},v={...this.latestValues},x=xi();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=pt(),S=g?g.source:void 0,T=this.layout?this.layout.source:void 0,C=S!==T,_=this.getStack(),R=!_||_.members.length<=1,O=!!(C&&!R&&this.options.crossfade===!0&&!this.path.some(v4));this.animationProgress=0;let P;const X=p==null?void 0:p.interpolateProjection(d);this.mixTargetDelta=W=>{const G=W/1e3,q=X==null?void 0:X(G);q?(x.x.translate=q.x,x.x.scale=qe(d.x.scale,1,G),x.x.origin=d.x.origin,x.x.originPoint=d.x.originPoint,x.y.translate=q.y,x.y.scale=qe(d.y.scale,1,G),x.y.origin=d.y.origin,x.y.originPoint=d.y.originPoint):(Jv(x.x,d.x,G),Jv(x.y,d.y,G)),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(mc(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),y4(this.relativeTarget,this.relativeTargetOrigin,w,G),P&&GA(this.relativeTarget,P)&&(this.isProjectionDirty=!1),P||(P=pt()),Sn(P,this.relativeTarget)),C&&(this.animationValues=v,XA(v,y,this.latestValues,G,O,R)),q&&q.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=q.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=G},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(qr(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Fe.update(()=>{Wl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ji(0)),this.motionValue.jump(0,!1),this.currentAnimation=QA(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(r4),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&Y1(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||pt();const v=Rt(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+v;const x=Rt(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+x}Sn(h,p),Yl(h,y),Vs(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new n4),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&yh("z",d,g,this.animationValues);for(let y=0;y<gh.length;y++)yh(`rotate${gh[y]}`,d,g,this.animationValues),yh(`skew${gh[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Xl(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Xl(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!ma(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=KA(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),d.transform=v;const{x,y:w}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const S in df){if(y[S]===void 0)continue;const{correct:T,applyTo:C,isCSSVariable:_}=df[S],R=v==="none"?y[S]:T(y[S],g);if(C){const O=C.length;for(let P=0;P<O;P++)d[C[P]]=R}else _?this.options.visualElement.renderState.vars[S]=R:d[S]=R}this.options.layoutId&&(d.pointerEvents=g===this?Xl(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Yv),this.root.sharedNodes.clear()}}}function i4(t){t.updateLayout()}function s4(t){var a;const e=((a=t.resumeFrom)==null?void 0:a.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:o}=t.layout,{animationType:c}=t.options,d=e.source!==t.layout.source;if(c==="size")zn(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Rt(x);x.min=i[v].min,x.max=x.min+w});else if(c==="x"||c==="y"){const v=c==="x"?"y":"x";hf(d?e.measuredBox[v]:e.layoutBox[v],i[v])}else Y1(c,e.layoutBox,i)&&zn(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Rt(i[v]);x.max=x.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+w)});const h=xi();Vs(h,i,e.layoutBox);const p=xi();d?Vs(p,t.applyTransform(o,!0),e.measuredBox):Vs(p,i,e.layoutBox);const g=!$1(h);let y=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:w}=v;if(x&&w){const S=t.options.layoutAnchor||void 0,T=pt();mc(T,e.layoutBox,x.layoutBox,S);const C=pt();mc(C,i,w.layoutBox,S),I1(T,C)||(y=!0),v.options.layoutRoot&&(t.relativeTarget=C,t.relativeTargetOrigin=T,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function o4(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function l4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function c4(t){t.clearSnapshot()}function Yv(t){t.clearMeasurements()}function u4(t){t.isLayoutDirty=!0,t.updateLayout()}function Xv(t){t.isLayoutDirty=!1}function d4(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function h4(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Wv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function f4(t){t.resolveTargetDelta()}function p4(t){t.calcProjection()}function m4(t){t.resetSkewAndRotation()}function g4(t){t.removeLeadSnapshot()}function Jv(t,e,a){t.translate=qe(e.translate,0,a),t.scale=qe(e.scale,1,a),t.origin=e.origin,t.originPoint=e.originPoint}function Qv(t,e,a,i){t.min=qe(e.min,a.min,i),t.max=qe(e.max,a.max,i)}function y4(t,e,a,i){Qv(t.x,e.x,a.x,i),Qv(t.y,e.y,a.y,i)}function v4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const b4={duration:.45,ease:[.4,0,.1,1]},Zv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),eb=Zv("applewebkit/")&&!Zv("chrome/")?Math.round:yn;function tb(t){t.min=eb(t.min),t.max=eb(t.max)}function x4(t){tb(t.x),tb(t.y)}function Y1(t,e,a){return t==="position"||t==="preserve-aspect"&&!HA(Iv(e),Iv(a),.2)}function w4(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const S4=K1({attachResizeListener:(t,e)=>Zs(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),vh={current:void 0},X1=K1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!vh.current){const t=new S4({});t.mount(window),t.setOptions({layoutScroll:!0}),vh.current=t}return vh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),ep=j.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function nb(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function j4(...t){return e=>{let a=!1;const i=t.map(o=>{const c=nb(o,e);return!a&&typeof c=="function"&&(a=!0),c});if(a)return()=>{for(let o=0;o<i.length;o++){const c=i[o];typeof c=="function"?c():nb(t[o],null)}}}}function k4(...t){return j.useCallback(j4(...t),t)}class _4 extends j.Component{getSnapshotBeforeUpdate(e){const a=this.props.childRef.current;if(ql(a)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const i=a.offsetParent,o=ql(i)&&i.offsetWidth||0,c=ql(i)&&i.offsetHeight||0,d=getComputedStyle(a),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=a.offsetTop,h.left=a.offsetLeft,h.right=o-h.width-h.left,h.bottom=c-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function T4({children:t,isPresent:e,anchorX:a,anchorY:i,root:o,pop:c}){var x;const d=j.useId(),h=j.useRef(null),p=j.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:g}=j.useContext(ep),y=((x=t.props)==null?void 0:x.ref)??(t==null?void 0:t.ref),v=k4(h,y);return j.useInsertionEffect(()=>{const{width:w,height:S,top:T,left:C,right:_,bottom:R,direction:O}=p.current;if(e||c===!1||!h.current||!w||!S)return;const P=O==="rtl",X=a==="left"?P?`right: ${_}`:`left: ${C}`:P?`left: ${C}`:`right: ${_}`,W=i==="bottom"?`bottom: ${R}`:`top: ${T}`;h.current.dataset.motionPopId=d;const G=document.createElement("style");g&&(G.nonce=g);const q=o??document.head;return q.appendChild(G),G.sheet&&G.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${S}px !important;
            ${X}px !important;
            ${W}px !important;
          }
        `),()=>{var Z;(Z=h.current)==null||Z.removeAttribute("data-motion-pop-id"),q.contains(G)&&q.removeChild(G)}},[e]),u.jsx(_4,{isPresent:e,childRef:h,sizeRef:p,pop:c,children:c===!1?t:j.cloneElement(t,{ref:v})})}const E4=({children:t,initial:e,isPresent:a,onExitComplete:i,custom:o,presenceAffectsLayout:c,mode:d,anchorX:h,anchorY:p,root:g})=>{const y=Nf(C4),v=j.useId();let x=!0,w=j.useMemo(()=>(x=!1,{id:v,initial:e,isPresent:a,custom:o,onExitComplete:S=>{y.set(S,!0);for(const T of y.values())if(!T)return;i&&i()},register:S=>(y.set(S,!1),()=>y.delete(S))}),[a,y,i]);return c&&x&&(w={...w}),j.useMemo(()=>{y.forEach((S,T)=>y.set(T,!1))},[a]),j.useEffect(()=>{!a&&!y.size&&i&&i()},[a]),t=u.jsx(T4,{pop:d==="popLayout",isPresent:a,anchorX:h,anchorY:p,root:g,children:t}),u.jsx(Tc.Provider,{value:w,children:t})};function C4(){return new Map}function W1(t=!0){const e=j.useContext(Tc);if(e===null)return[!0,null];const{isPresent:a,onExitComplete:i,register:o}=e,c=j.useId();j.useEffect(()=>{if(t)return o(c)},[t]);const d=j.useCallback(()=>t&&i&&i(c),[c,i,t]);return!a&&i?[!1,d]:[!0]}const zl=t=>t.key||"";function rb(t){const e=[];return j.Children.forEach(t,a=>{j.isValidElement(a)&&e.push(a)}),e}const tn=({children:t,custom:e,initial:a=!0,onExitComplete:i,presenceAffectsLayout:o=!0,mode:c="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,v]=W1(d),x=j.useMemo(()=>rb(t),[t]),w=d&&!y?[]:x.map(zl),S=j.useRef(!0),T=j.useRef(x),C=Nf(()=>new Map),_=j.useRef(new Set),[R,O]=j.useState(x),[P,X]=j.useState(x);kx(()=>{S.current=!1,T.current=x;for(let q=0;q<P.length;q++){const Z=zl(P[q]);w.includes(Z)?(C.delete(Z),_.current.delete(Z)):C.get(Z)!==!0&&C.set(Z,!1)}},[P,w.length,w.join("-")]);const W=[];if(x!==R){let q=[...x];for(let Z=0;Z<P.length;Z++){const re=P[Z],xe=zl(re);w.includes(xe)||(q.splice(Z,0,re),W.push(re))}return c==="wait"&&W.length&&(q=W),X(rb(q)),O(x),null}const{forceRender:G}=j.useContext(Af);return u.jsx(u.Fragment,{children:P.map(q=>{const Z=zl(q),re=d&&!y?!1:x===P||w.includes(Z),xe=()=>{if(_.current.has(Z))return;if(C.has(Z))_.current.add(Z),C.set(Z,!0);else return;let pe=!0;C.forEach(Ce=>{Ce||(pe=!1)}),pe&&(G==null||G(),X(T.current),d&&(v==null||v()),i&&i())};return u.jsx(E4,{isPresent:re,initial:!S.current||a?void 0:!1,custom:e,presenceAffectsLayout:o,mode:c,root:g,onExitComplete:re?void 0:xe,anchorX:h,anchorY:p,children:q},Z)})})},J1=j.createContext({strict:!1}),ab={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let ib=!1;function A4(){if(ib)return;const t={};for(const e in ab)t[e]={isEnabled:a=>ab[e].some(i=>!!a[i])};T1(t),ib=!0}function Q1(){return A4(),fA()}function N4(t){const e=Q1();for(const a in t)e[a]={...e[a],...t[a]};T1(e)}const R4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function gc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||R4.has(t)}let Z1=t=>!gc(t);function O4(t){typeof t=="function"&&(Z1=e=>e.startsWith("on")?!gc(e):t(e))}try{O4(require("@emotion/is-prop-valid").default)}catch{}function D4(t,e,a){const i={};for(const o in t)o==="values"&&typeof t.values=="object"||_t(t[o])||(Z1(o)||a===!0&&gc(o)||!e&&!gc(o)||t.draggable&&o.startsWith("onDrag"))&&(i[o]=t[o]);return i}const Nc=j.createContext({});function L4(t,e){if(Ac(t)){const{initial:a,animate:i}=t;return{initial:a===!1||Qs(a)?a:void 0,animate:Qs(i)?i:void 0}}return t.inherit!==!1?e:{}}function M4(t){const{initial:e,animate:a}=L4(t,j.useContext(Nc));return j.useMemo(()=>({initial:e,animate:a}),[sb(e),sb(a)])}function sb(t){return Array.isArray(t)?t.join(" "):t}const tp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function ew(t,e,a){for(const i in e)!_t(e[i])&&!D1(i,a)&&(t[i]=e[i])}function z4({transformTemplate:t},e){return j.useMemo(()=>{const a=tp();return Qf(a,e,t),Object.assign({},a.vars,a.style)},[e])}function U4(t,e){const a=t.style||{},i={};return ew(i,a,t),Object.assign(i,z4(t,e)),i}function B4(t,e){const a={},i=U4(t,e);return t.drag&&t.dragListener!==!1&&(a.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(a.tabIndex=0),a.style=i,a}const tw=()=>({...tp(),attrs:{}});function P4(t,e,a,i){const o=j.useMemo(()=>{const c=tw();return L1(c,e,z1(i),t.transformTemplate,t.style),{...c.attrs,style:{...c.style}}},[e]);if(t.style){const c={};ew(c,t.style,t),o.style={...c,...o.style}}return o}const V4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function np(t){return typeof t!="string"||t.includes("-")?!1:!!(V4.indexOf(t)>-1||/[A-Z]/u.test(t))}function H4(t,e,a,{latestValues:i},o,c=!1,d){const p=(d??np(t)?P4:B4)(e,i,o,t),g=D4(e,typeof t=="string",c),y=t!==j.Fragment?{...g,...p,ref:a}:{},{children:v}=e,x=j.useMemo(()=>_t(v)?v.get():v,[v]);return j.createElement(t,{...y,children:x})}function $4({scrapeMotionValuesFromProps:t,createRenderState:e},a,i,o){return{latestValues:I4(a,i,o,t),renderState:e()}}function I4(t,e,a,i){const o={},c=i(t,{});for(const x in c)o[x]=Xl(c[x]);let{initial:d,animate:h}=t;const p=Ac(t),g=k1(t);e&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=e.initial),h===void 0&&(h=e.animate));let y=a?a.initial===!1:!1;y=y||d===!1;const v=y?h:d;if(v&&typeof v!="boolean"&&!Cc(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const S=Ff(t,x[w]);if(S){const{transitionEnd:T,transition:C,..._}=S;for(const R in _){let O=_[R];if(Array.isArray(O)){const P=y?O.length-1:0;O=O[P]}O!==null&&(o[R]=O)}for(const R in T)o[R]=T[R]}}}return o}const nw=t=>(e,a)=>{const i=j.useContext(Nc),o=j.useContext(Tc),c=()=>$4(t,e,i,o);return a?c():Nf(c)},q4=nw({scrapeMotionValuesFromProps:Zf,createRenderState:tp}),F4=nw({scrapeMotionValuesFromProps:U1,createRenderState:tw}),G4=Symbol.for("motionComponentSymbol");function K4(t,e,a){const i=j.useRef(a);j.useInsertionEffect(()=>{i.current=a});const o=j.useRef(null);return j.useCallback(c=>{var h;c&&((h=t.onMount)==null||h.call(t,c)),e&&(c?e.mount(c):e.unmount());const d=i.current;if(typeof d=="function")if(c){const p=d(c);typeof p=="function"&&(o.current=p)}else o.current?(o.current(),o.current=null):d(c);else d&&(d.current=c)},[e])}const rw=j.createContext({});function gi(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function Y4(t,e,a,i,o,c){var O,P;const{visualElement:d}=j.useContext(Nc),h=j.useContext(J1),p=j.useContext(Tc),g=j.useContext(ep),y=g.reducedMotion,v=g.skipAnimations,x=j.useRef(null),w=j.useRef(!1);i=i||h.renderer,!x.current&&i&&(x.current=i(t,{visualState:e,parent:d,props:a,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:v,isSVG:c}),w.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const S=x.current,T=j.useContext(rw);S&&!S.projection&&o&&(S.type==="html"||S.type==="svg")&&X4(x.current,a,o,T);const C=j.useRef(!1);j.useInsertionEffect(()=>{S&&C.current&&S.update(a,p)});const _=a[h1],R=j.useRef(!!_&&typeof window<"u"&&!((O=window.MotionHandoffIsComplete)!=null&&O.call(window,_))&&((P=window.MotionHasOptimisedAnimation)==null?void 0:P.call(window,_)));return kx(()=>{w.current=!0,S&&(C.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),R.current&&S.animationState&&S.animationState.animateChanges())}),j.useEffect(()=>{S&&(!R.current&&S.animationState&&S.animationState.animateChanges(),R.current&&(queueMicrotask(()=>{var X;(X=window.MotionHandoffMarkAsComplete)==null||X.call(window,_)}),R.current=!1),S.enteringChildren=void 0)}),S}function X4(t,e,a,i){const{layoutId:o,layout:c,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:y,layoutCrossfade:v}=e;t.projection=new a(t.latestValues,e["data-framer-portal-id"]?void 0:aw(t.parent)),t.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!d||h&&gi(h),visualElement:t,animationType:typeof c=="string"?c:"both",initialPromotionConfig:i,crossfade:v,layoutScroll:p,layoutRoot:g,layoutAnchor:y})}function aw(t){if(t)return t.options.allowProjection!==!1?t.projection:aw(t.parent)}function bh(t,{forwardMotionProps:e=!1,type:a}={},i,o){i&&N4(i);const c=a?a==="svg":np(t),d=c?F4:q4;function h(g,y){let v;const x={...j.useContext(ep),...g,layoutId:W4(g)},{isStatic:w}=x,S=M4(g),T=d(g,w);if(!w&&typeof window<"u"){J4();const C=Q4(x);v=C.MeasureLayout,S.visualElement=Y4(t,T,x,o,C.ProjectionNode,c)}return u.jsxs(Nc.Provider,{value:S,children:[v&&S.visualElement?u.jsx(v,{visualElement:S.visualElement,...x}):null,H4(t,g,K4(T,S.visualElement,y),T,w,e,c)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const p=j.forwardRef(h);return p[G4]=t,p}function W4({layoutId:t}){const e=j.useContext(Af).id;return e&&t!==void 0?e+"-"+t:t}function J4(t,e){j.useContext(J1).strict}function Q4(t){const e=Q1(),{drag:a,layout:i}=e;if(!a&&!i)return{};const o={...a,...i};return{MeasureLayout:a!=null&&a.isEnabled(t)||i!=null&&i.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function Z4(t,e){if(typeof Proxy>"u")return bh;const a=new Map,i=(c,d)=>bh(c,d,t,e),o=(c,d)=>i(c,d);return new Proxy(o,{get:(c,d)=>d==="create"?i:(a.has(d)||a.set(d,bh(d,void 0,t,e)),a.get(d))})}const eN=(t,e)=>e.isSVG??np(t)?new NA(e):new kA(e,{allowProjection:t!==j.Fragment});class tN extends Gr{constructor(e){super(e),e.animationState||(e.animationState=MA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Cc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:a}=this.node.prevProps||{};e!==a&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let nN=0;class rN extends Gr{constructor(){super(...arguments),this.id=nN++,this.isExitComplete=!1}update(){var c;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:a}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;if(e&&i===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const p=Sa(this.node,d,h);if(p){const{transition:g,transitionEnd:y,...v}=p;for(const x in v)(c=this.node.getValue(x))==null||c.jump(v[x])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);a&&!e&&o.then(()=>{this.isExitComplete=!0,a(this.id)})}mount(){const{register:e,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const aN={animation:{Feature:tN},exit:{Feature:rN}};function so(t){return{point:{x:t.pageX,y:t.pageY}}}const iN=t=>e=>Yf(e)&&t(e,so(e));function Hs(t,e,a,i){return Zs(t,e,iN(a),i)}const iw=({current:t})=>t?t.ownerDocument.defaultView:null,ob=(t,e)=>Math.abs(t-e);function sN(t,e){const a=ob(t.x,e.x),i=ob(t.y,e.y);return Math.sqrt(a**2+i**2)}const lb=new Set(["auto","scroll"]);class sw{constructor(e,a,{transformPagePoint:i,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ul(this.lastRawMoveEventInfo,this.transformPagePoint));const w=xh(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,T=sN(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!T)return;const{point:C}=w,{timestamp:_}=kt;this.history.push({...C,timestamp:_});const{onStart:R,onMove:O}=this.handlers;S||(R&&R(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),O&&O(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=Ul(S,this.transformPagePoint),Fe.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:T,onSessionEnd:C,resumeAnimation:_}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const R=xh(w.type==="pointercancel"?this.lastMoveEventInfo:Ul(S,this.transformPagePoint),this.history);this.startEvent&&T&&T(w,R),C&&C(w,R)},!Yf(e))return;this.dragSnapToOrigin=c,this.handlers=a,this.transformPagePoint=i,this.distanceThreshold=d,this.contextWindow=o||window;const p=so(e),g=Ul(p,this.transformPagePoint),{point:y}=g,{timestamp:v}=kt;this.history=[{...y,timestamp:v}];const{onSessionStart:x}=a;x&&x(e,xh(g,this.history)),this.removeListeners=ro(Hs(this.contextWindow,"pointermove",this.handlePointerMove),Hs(this.contextWindow,"pointerup",this.handlePointerUp),Hs(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(e){let a=e.parentElement;for(;a;){const i=getComputedStyle(a);(lb.has(i.overflowX)||lb.has(i.overflowY))&&this.scrollPositions.set(a,{x:a.scrollLeft,y:a.scrollTop}),a=a.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const a=this.scrollPositions.get(e);if(!a)return;const i=e===window,o=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},c={x:o.x-a.x,y:o.y-a.y};c.x===0&&c.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(e,o),Fe.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qr(this.updatePoint)}}function Ul(t,e){return e?{point:e(t.point)}:t}function cb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function xh({point:t},e){return{point:t,delta:cb(t,ow(e)),offset:cb(t,oN(e)),velocity:lN(e,.1)}}function oN(t){return t[0]}function ow(t){return t[t.length-1]}function lN(t,e){if(t.length<2)return{x:0,y:0};let a=t.length-1,i=null;const o=ow(t);for(;a>=0&&(i=t[a],!(o.timestamp-i.timestamp>en(e)));)a--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&o.timestamp-i.timestamp>en(e)*2&&(i=t[1]);const c=gn(o.timestamp-i.timestamp);if(c===0)return{x:0,y:0};const d={x:(o.x-i.x)/c,y:(o.y-i.y)/c};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function cN(t,{min:e,max:a},i){return e!==void 0&&t<e?t=i?qe(e,t,i.min):Math.max(t,e):a!==void 0&&t>a&&(t=i?qe(a,t,i.max):Math.min(t,a)),t}function ub(t,e,a){return{min:e!==void 0?t.min+e:void 0,max:a!==void 0?t.max+a-(t.max-t.min):void 0}}function uN(t,{top:e,left:a,bottom:i,right:o}){return{x:ub(t.x,a,o),y:ub(t.y,e,i)}}function db(t,e){let a=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([a,i]=[i,a]),{min:a,max:i}}function dN(t,e){return{x:db(t.x,e.x),y:db(t.y,e.y)}}function hN(t,e){let a=.5;const i=Rt(t),o=Rt(e);return o>i?a=Ws(e.min,e.max-i,t.min):i>o&&(a=Ws(t.min,t.max-o,e.min)),Hn(0,1,a)}function fN(t,e){const a={};return e.min!==void 0&&(a.min=e.min-t.min),e.max!==void 0&&(a.max=e.max-t.min),a}const ff=.35;function pN(t=ff){return t===!1?t=0:t===!0&&(t=ff),{x:hb(t,"left","right"),y:hb(t,"top","bottom")}}function hb(t,e,a){return{min:fb(t,e),max:fb(t,a)}}function fb(t,e){return typeof t=="number"?t:t[e]||0}const mN=new WeakMap;class gN{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:a=!1,distanceThreshold:i}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{a&&this.snapToCursor(so(v).point),this.stopAnimation()},d=(v,x)=>{const{drag:w,dragPropagation:S,onDragStart:T}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=IC(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zn(_=>{let R=this.getAxisMotionValue(_).get()||0;if(Vn.test(R)){const{projection:O}=this.visualElement;if(O&&O.layout){const P=O.layout.layoutBox[_];P&&(R=Rt(P)*(parseFloat(R)/100))}}this.originPoint[_]=R}),T&&Fe.update(()=>T(v,x),!1,!0),nf(this.visualElement,"transform");const{animationState:C}=this.visualElement;C&&C.setActive("whileDrag",!0)},h=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:T,onDrag:C}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:_}=x;if(S&&this.currentDirection===null){this.currentDirection=vN(_),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",x.point,_),this.updateAxis("y",x.point,_),this.visualElement.render(),C&&Fe.update(()=>C(v,x),!1,!0)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new sw(e,{onSessionStart:c,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:i,contextWindow:iw(this.visualElement),element:this.visualElement.current})}stop(e,a){const i=e||this.latestPointerEvent,o=a||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!i)return;const{velocity:d}=o;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Fe.postRender(()=>h(i,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:a}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,a,i){const{drag:o}=this.getProps();if(!i||!Bl(e,o,this.currentDirection))return;const c=this.getAxisMotionValue(e);let d=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(d=cN(d,this.constraints[e],this.elastic[e])),c.set(d)}resolveConstraints(){var c;const{dragConstraints:e,dragElastic:a}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;e&&gi(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=uN(i.layoutBox,e):this.constraints=!1,this.elastic=pN(a),o!==this.constraints&&!gi(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&zn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=fN(i.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:a}=this.getProps();if(!e||!gi(e))return!1;const i=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const c=vA(i,o.root,this.visualElement.getTransformPagePoint());let d=dN(o.layout.layoutBox,c);if(a){const h=a(mA(d));this.hasMutatedConstraints=!!h,h&&(d=C1(h))}return d}startAnimation(e){const{drag:a,dragMomentum:i,dragElastic:o,dragTransition:c,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=zn(y=>{if(!Bl(y,a,this.currentDirection))return;let v=p&&p[y]||{};(d===!0||d===y)&&(v={min:0,max:0});const x=o?200:1e6,w=o?40:1e7,S={type:"inertia",velocity:i?e[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(y,S)});return Promise.all(g).then(h)}startAxisValueAnimation(e,a){const i=this.getAxisMotionValue(e);return nf(this.visualElement,e),i.start(qf(e,i,0,a,this.visualElement,!1))}stopAnimation(){zn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const a=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[a];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){zn(a=>{const{drag:i}=this.getProps();if(!Bl(a,i,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(a);if(o&&o.layout){const{min:d,max:h}=o.layout.layoutBox[a],p=c.get()||0;c.set(e[a]-qe(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:a}=this.getProps(),{projection:i}=this.visualElement;if(!gi(a)||!i||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};zn(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();o[d]=hN({min:p,max:p},this.constraints[d])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),zn(d=>{if(!Bl(d,e,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(qe(p,g,o[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;mN.set(this.visualElement,this);const e=this.visualElement.current,a=Hs(e,"pointerdown",g=>{const{drag:y,dragListener:v=!0}=this.getProps(),x=g.target,w=x!==e&&XC(x);y&&v&&!w&&this.start(g)});let i;const o=()=>{const{dragConstraints:g}=this.getProps();gi(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),i||(i=yN(e,g.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,d=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Fe.read(o);const h=Zs(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(zn(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=g[v].translate,x.set(x.get()+g[v].translate))}),this.visualElement.render())}));return()=>{h(),a(),d(),p&&p(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:i=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:d=ff,dragMomentum:h=!0}=e;return{...e,drag:a,dragDirectionLock:i,dragPropagation:o,dragConstraints:c,dragElastic:d,dragMomentum:h}}}function pb(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function yN(t,e,a){const i=wv(t,pb(a)),o=wv(e,pb(a));return()=>{i(),o()}}function Bl(t,e,a){return(e===!0||e===t)&&(a===null||a===t)}function vN(t,e=10){let a=null;return Math.abs(t.y)>e?a="y":Math.abs(t.x)>e&&(a="x"),a}class bN extends Gr{constructor(e){super(e),this.removeGroupControls=yn,this.removeListeners=yn,this.controls=new gN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:a}=this.node.prevProps||{};e!==a&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wh=t=>(e,a)=>{t&&Fe.update(()=>t(e,a),!1,!0)};class xN extends Gr{constructor(){super(...arguments),this.removePointerDownListener=yn}onPointerDown(e){this.session=new sw(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:iw(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:a,onPan:i,onPanEnd:o}=this.node.getProps();return{onSessionStart:wh(e),onStart:wh(a),onMove:wh(i),onEnd:(c,d)=>{delete this.session,o&&Fe.postRender(()=>o(c,d))}}}mount(){this.removePointerDownListener=Hs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sh=!1;class wN extends j.Component{componentDidMount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:i,layoutId:o}=this.props,{projection:c}=e;c&&(a.group&&a.group.add(c),i&&i.register&&o&&i.register(c),Sh&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Wl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:a,visualElement:i,drag:o,isPresent:c}=this.props,{projection:d}=i;return d&&(d.isPresent=c,e.layoutDependency!==a&&d.setOptions({...d.options,layoutDependency:a}),Sh=!0,o||e.layoutDependency!==a||a===void 0||e.isPresent!==c?d.willUpdate():this.safeToRemove(),e.isPresent!==c&&(c?d.promote():d.relegate()||Fe.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:a}=this.props,{projection:i}=e;i&&(i.options.layoutAnchor=a,i.root.didUpdate(),Kf.postRender(()=>{!i.currentAnimation&&i.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:i}=this.props,{projection:o}=e;Sh=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),i&&i.deregister&&i.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function lw(t){const[e,a]=W1(),i=j.useContext(Af);return u.jsx(wN,{...t,layoutGroup:i,switchLayoutGroup:j.useContext(rw),isPresent:e,safeToRemove:a})}const SN={pan:{Feature:xN},drag:{Feature:bN,ProjectionNode:X1,MeasureLayout:lw}};function mb(t,e,a){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,c=i[o];c&&Fe.postRender(()=>c(e,so(e)))}class jN extends Gr{mount(){const{current:e}=this.node;e&&(this.unmount=FC(e,(a,i)=>(mb(this.node,i,"Start"),o=>mb(this.node,o,"End"))))}unmount(){}}class kN extends Gr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ro(Zs(this.node.current,"focus",()=>this.onFocus()),Zs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function gb(t,e,a){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),c=i[o];c&&Fe.postRender(()=>c(e,so(e)))}class _N extends Gr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:a,propagate:i}=this.node.props;this.unmount=JC(e,(o,c)=>(gb(this.node,c,"Start"),(d,{success:h})=>gb(this.node,d,h?"End":"Cancel")),{useGlobalTarget:a,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const pf=new WeakMap,jh=new WeakMap,TN=t=>{const e=pf.get(t.target);e&&e(t)},EN=t=>{t.forEach(TN)};function CN({root:t,...e}){const a=t||document;jh.has(a)||jh.set(a,{});const i=jh.get(a),o=JSON.stringify(e);return i[o]||(i[o]=new IntersectionObserver(EN,{root:t,...e})),i[o]}function AN(t,e,a){const i=CN(e);return pf.set(t,a),i.observe(t),()=>{pf.delete(t),i.unobserve(t)}}const NN={some:0,all:1};class RN extends Gr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:e={}}=this.node.getProps(),{root:a,margin:i,amount:o="some",once:c}=e,d={root:a?a.current:void 0,rootMargin:i,threshold:typeof o=="number"?o:NN[o]},h=g=>{const{isIntersecting:y}=g;if(this.isInView===y||(this.isInView=y,c&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),w=y?v:x;w&&w(g)};this.stopObserver=AN(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:a}=this.node;["amount","margin","root"].some(ON(e,a))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function ON({viewport:t={}},{viewport:e={}}={}){return a=>t[a]!==e[a]}const DN={inView:{Feature:RN},tap:{Feature:_N},focus:{Feature:kN},hover:{Feature:jN}},LN={layout:{ProjectionNode:X1,MeasureLayout:lw}},MN={...aN,...DN,...SN,...LN},we=Z4(MN,eN),zN=[{id:"own",name:"Your Story",avatar:null,isOwn:!0,unread:!1,online:!0},{id:"u1",name:"Luna",avatar:"https://i.pravatar.cc/150?u=luna",unread:!0,online:!0},{id:"u2",name:"Max",avatar:"https://i.pravatar.cc/150?u=max",unread:!0,online:!0},{id:"u3",name:"Zara",avatar:"https://i.pravatar.cc/150?u=zara",unread:!1,online:!0},{id:"u4",name:"Kai",avatar:"https://i.pravatar.cc/150?u=kai",unread:!0,online:!1},{id:"u5",name:"Nova",avatar:"https://i.pravatar.cc/150?u=nova",unread:!1,online:!1},{id:"u6",name:"Rey",avatar:"https://i.pravatar.cc/150?u=rey",unread:!0,online:!0},{id:"u7",name:"Elise",avatar:"https://i.pravatar.cc/150?u=elise",unread:!1,online:!1},{id:"u8",name:"Theo",avatar:"https://i.pravatar.cc/150?u=theo",unread:!0,online:!0}],yb=["linear-gradient(135deg, #f093fb, #f5576c)","linear-gradient(135deg, #4facfe, #00f2fe)","linear-gradient(135deg, #a18cd1, #fbc2eb)","linear-gradient(135deg, #fccb90, #d57eeb)","linear-gradient(135deg, #667eea, #764ba2)","linear-gradient(135deg, #89f7fe, #66a6ff)","linear-gradient(135deg, #f43b47, #453a94)","linear-gradient(135deg, #11998e, #38ef7d)"];function UN(t){return yb[t%yb.length]}function BN(t){return t.charAt(0).toUpperCase()}function PN(){const t=j.useRef(null),[e,a]=j.useState(!1),[i,o]=j.useState(0),[c,d]=j.useState(0),h=v=>{a(!0),o(v.pageX-t.current.offsetLeft),d(t.current.scrollLeft)},p=()=>a(!1),g=()=>a(!1),y=v=>{if(!e)return;v.preventDefault();const w=(v.pageX-t.current.offsetLeft-i)*1.5;t.current.scrollLeft=c-w};return u.jsxs("div",{className:"stories-section",children:[u.jsx("div",{className:"stories-header",children:u.jsx("span",{className:"stories-title",children:"Stories"})}),u.jsx("div",{ref:t,className:"stories-scroll",onMouseDown:h,onMouseUp:p,onMouseLeave:g,onMouseMove:y,children:zN.map((v,x)=>{const w=UN(x),S=BN(v.name),T=v.unread;return u.jsxs(we.div,{className:`story-item ${T?"unread":""}`,whileTap:{scale:.92},whileHover:{y:-2},transition:{type:"spring",stiffness:400,damping:17},children:[u.jsxs("div",{className:"story-avatar-ring",style:{background:w},children:[u.jsx("div",{className:"story-avatar-inner",children:v.avatar?u.jsx("img",{src:v.avatar,alt:v.name}):u.jsx("span",{className:"story-avatar-text",children:S})}),v.isOwn&&u.jsx("span",{className:"story-plus-badge",children:"+"})]}),u.jsx("span",{className:"story-name",children:v.name}),v.online&&u.jsx("span",{className:"story-online-dot"})]},v.id)})}),u.jsx("style",{children:VN})]})}const VN=`
  .stories-section {
    margin-bottom: 0.5rem;
    padding: 0.75rem 0 0.25rem;
  }

  .stories-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.25rem;
    margin-bottom: 0.75rem;
  }
  .stories-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255,255,255,0.6);
    text-transform: uppercase;
    letter-spacing: 0.08em;
  }

  .stories-scroll {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 0 1.25rem 0.5rem;
    scrollbar-width: none;
    -webkit-overflow-scrolling: touch;
    cursor: grab;
    user-select: none;
  }
  .stories-scroll::-webkit-scrollbar {
    display: none;
  }
  .stories-scroll:active {
    cursor: grabbing;
  }

  .story-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    flex-shrink: 0;
    width: 68px;
    cursor: pointer;
    position: relative;
    -webkit-tap-highlight-color: transparent;
  }

  .story-avatar-ring {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-shrink: 0;
  }
  .story-item.unread .story-avatar-ring {
    box-shadow: 0 0 0 3px rgba(204,255,0,0.15);
  }

  .story-avatar-inner {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    overflow: hidden;
    background: #08080f;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .story-avatar-inner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .story-avatar-text {
    font-size: 1.25rem;
    font-weight: 700;
    color: #fff;
  }
  .story-plus-badge {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #CCFF00;
    color: #08080f;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #08080f;
    line-height: 1;
  }

  .story-name {
    font-size: 0.7rem;
    color: rgba(255,255,255,0.6);
    text-align: center;
    max-width: 68px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .story-online-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #22c55e;
    position: absolute;
    bottom: 18px;
    right: 6px;
    border: 2px solid var(--bg, #08080f);
  }

  @media (max-width: 600px) {
    .stories-scroll { padding: 0 0.75rem 0.5rem; }
    .story-item { width: 60px; }
    .story-avatar-ring { width: 52px; height: 52px; }
    .story-avatar-inner { width: 44px; height: 44px; }
    .story-name { max-width: 60px; }
    .stories-header { padding: 0 0.75rem; }
  }
`,kh=10,Ot=Fr((t,e)=>({posts:[],isLoading:!1,isRefreshing:!1,hasMore:!0,page:0,newPostsCount:0,_channel:null,fetchFeed:async({refresh:a=!1}={})=>{const{page:i,hasMore:o,isLoading:c,isRefreshing:d}=e();if(c||d||!a&&!o)return;t(a?{isRefreshing:!0}:{isLoading:!0});const h=a?0:i,p=h*kh,g=p+kh-1;try{const{data:y,error:v,count:x}=await te.from("posts").select(`
          *,
          likes_count:likes(count),
          comments_count:comments(count)
        `,{count:"exact"}).eq("is_deleted",!1).order("created_at",{ascending:!1}).range(p,g);if(v)throw v;const w=[...new Set((y||[]).map(_=>_.user_id).filter(Boolean))];let S={};if(w.length>0){const{data:_}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").in("id",w);S=Object.fromEntries((_||[]).map(R=>[R.id,R]))}const T=(y||[]).map(_=>{var R,O,P,X;return{..._,profiles:S[_.user_id]||null,likes:((O=(R=_.likes_count)==null?void 0:R[0])==null?void 0:O.count)??0,comments:((X=(P=_.comments_count)==null?void 0:P[0])==null?void 0:X.count)??0,isLiked:!1}}),C=p+kh<(x||0);t(a?{posts:T,page:1,hasMore:C,isRefreshing:!1,isLoading:!1,newPostsCount:0}:_=>({posts:[..._.posts,...T],page:h+1,hasMore:C,isLoading:!1}))}catch(y){t({isRefreshing:!1,isLoading:!1}),console.error("Feed fetch error:",y.message)}},refreshFeed:()=>e().fetchFeed({refresh:!0}),addPostOptimistic:a=>{t(i=>({posts:[a,...i.posts]}))},removePostOptimistic:a=>{t(i=>({posts:i.posts.filter(o=>o.id!==a)}))},updatePostInFeed:(a,i)=>{t(o=>({posts:o.posts.map(c=>c.id===a?{...c,...i}:c)}))},subscribeToPosts:()=>{const{_channel:a}=e();if(a)return;const i=te.channel("feed-store-realtime").on("postgres_changes",{event:"INSERT",schema:"public",table:"posts"},async o=>{var g,y,v,x;const{data:c,error:d}=await te.from("posts").select(`
              *,
              likes_count:likes(count),
              comments_count:comments(count)
            `).eq("id",o.new.id).single();if(d||!c)return;const{data:h}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",c.user_id).single(),p={...c,profiles:h||null,likes:((y=(g=c.likes_count)==null?void 0:g[0])==null?void 0:y.count)??0,comments:((x=(v=c.comments_count)==null?void 0:v[0])==null?void 0:x.count)??0,isLiked:!1};t(w=>w.posts.some(S=>S.id===p.id)?w:{posts:[p,...w.posts],newPostsCount:w.newPostsCount+1})}).subscribe();t({_channel:i})},unsubscribeFromPosts:()=>{const{_channel:a}=e();a&&(te.removeChannel(a),t({_channel:null}))},acknowledgeNewPosts:()=>{t({newPostsCount:0})}})),yc=Fr(()=>({createPost:async({content:t,image_url:e,video_url:a,type:i="text",audience:o="public",media:c=[]})=>{const{data:{user:d},error:h}=await te.auth.getUser();if(h||!d)throw new Error("Authentication required");const{data:p,error:g}=await te.from("posts").insert({content:t,image_url:e,video_url:a,type:i,audience:o,media:c,user_id:d.id}).select().single();if(g)throw g;try{const{data:y}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",p.user_id).single();p.profiles=y||null}catch{p.profiles=null}return p},uploadPostImage:async(t,e,a)=>{const i=t.name.split(".").pop(),c=`post-images/${`${e}/${Date.now()}_${Math.random().toString(36).slice(2)}.${i}`}`,{data:d,error:h}=await te.storage.from("post-images").upload(c,t,{cacheControl:"3600",upsert:!1});if(h)throw h;const{data:{publicUrl:p}}=te.storage.from("post-images").getPublicUrl(d.path);return{url:p,path:d.path}},deletePostImage:async t=>{const{error:e}=await te.storage.from("post-images").remove([t]);if(e)throw e},deletePost:async t=>{const{error:e}=await te.from("posts").update({is_deleted:!0}).eq("id",t);if(e)throw e;Ot.getState().removePostOptimistic(t)},likePost:async t=>{const{error:e}=await te.from("likes").insert({post_id:t});if(e)throw e;const a=Ot.getState(),i=a.posts.find(o=>o.id===t);i&&a.updatePostInFeed(t,{likes:(i.likes||0)+1,isLiked:!0})},unlikePost:async t=>{const{error:e}=await te.from("likes").delete().eq("post_id",t);if(e)throw e;const a=Ot.getState(),i=a.posts.find(o=>o.id===t);i&&a.updatePostInFeed(t,{likes:Math.max(0,(i.likes||0)-1),isLiked:!1})},addComment:async({postId:t,content:e,parentId:a=null})=>{const i={post_id:t,content:e};a&&(i.parent_id=a);const{data:o,error:c}=await te.from("comments").insert(i).select().single();if(c)throw c;try{const{data:p}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",o.user_id).single();o.profiles=p||null}catch{o.profiles=null}const d=Ot.getState(),h=d.posts.find(p=>p.id===t);return h&&d.updatePostInFeed(t,{comments:(h.comments||0)+1}),o},deleteComment:async t=>{const{error:e}=await te.from("comments").update({is_deleted:!0}).eq("id",t);if(e)throw e},repostPost:async({postId:t,quoteText:e=null})=>{const a={post_id:t};e&&(a.quote_text=e);const{data:i,error:o}=await te.from("reposts").insert(a).select().single();if(o)throw o;return i},undoRepost:async t=>{const{error:e}=await te.from("reposts").delete().eq("post_id",t);if(e)throw e}}));function HN(t){const e=Date.now()-t,a=Math.floor(e/6e4);if(a<1)return"Just now";if(a<60)return`${a}m ago`;const i=Math.floor(a/60);if(i<24)return`${i}h ago`;const o=Math.floor(i/24);return o<7?`${o}d ago`:new Date(t).toLocaleDateString()}function vb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}const Cs={heart:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#ff4d6d":"none",stroke:t?"#ff4d6d":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:t?"drop-shadow(0 0 6px rgba(255,77,109,0.4))":"none"},children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),comment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),share:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"18",cy:"5",r:"3"}),u.jsx("circle",{cx:"6",cy:"12",r:"3"}),u.jsx("circle",{cx:"18",cy:"19",r:"3"}),u.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),u.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]}),bookmark:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#CCFF00":"none",stroke:t?"#CCFF00":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"})}),dots:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"1"}),u.jsx("circle",{cx:"19",cy:"12",r:"1"}),u.jsx("circle",{cx:"5",cy:"12",r:"1"})]})};function cw({post:t}){const[e,a]=j.useState(t.liked),[i,o]=j.useState(t.saved),[c,d]=j.useState(t.likes),[h,p]=j.useState(0),g=yc(S=>S.likePost),y=yc(S=>S.unlikePost),v=()=>{e?(a(!1),d(S=>S-1),y(t.id).catch(()=>{a(!0),d(S=>S+1)})):(a(!0),d(S=>S+1),p(S=>S+1),g(t.id).catch(()=>{a(!1),d(S=>S-1)}))},x=()=>o(S=>!S),w=S=>S.charAt(0).toUpperCase();return u.jsxs(we.div,{className:"feed-post",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-header",children:[u.jsx("div",{className:"post-avatar",style:{background:t.avatarColor},children:u.jsx("span",{children:w(t.username)})}),u.jsxs("div",{className:"post-user-info",children:[u.jsx("span",{className:"post-username",children:t.username}),u.jsxs("span",{className:"post-handle",children:[t.handle," · ",HN(t.timestamp)]})]}),u.jsx("button",{className:"post-more-btn",children:Cs.dots})]}),u.jsx("div",{className:"post-content",children:u.jsx("p",{children:t.content})}),t.images&&t.images.length>0&&u.jsx("div",{className:`post-images ${t.images.length>1?"multi":""}`,children:t.images.map((S,T)=>u.jsx(we.div,{className:"post-image-wrap",whileHover:{scale:1.01},transition:{type:"spring",stiffness:300,damping:20},children:u.jsx("img",{src:S,alt:`Post image ${T+1}`,loading:"lazy"})},T))}),u.jsxs("div",{className:"post-stats",children:[u.jsxs("span",{className:"post-stat",children:[u.jsx("span",{style:{color:e?"#ff4d6d":void 0},children:vb(c)})," likes"]}),u.jsxs("span",{className:"post-stat",children:[vb(t.comments)," comments"]})]}),u.jsxs("div",{className:"post-actions",children:[u.jsxs(we.button,{className:`post-action ${e?"liked":""}`,onClick:v,whileTap:{scale:.8},children:[u.jsx(we.span,{initial:e?{scale:.5}:!1,animate:{scale:1},transition:{type:"spring",stiffness:500,damping:15},className:"post-action-icon",children:Cs.heart(e)},h),u.jsx("span",{children:"Like"})]}),u.jsxs("button",{className:"post-action",children:[u.jsx("span",{className:"post-action-icon",children:Cs.comment}),u.jsx("span",{children:"Comment"})]}),u.jsxs("button",{className:"post-action",children:[u.jsx("span",{className:"post-action-icon",children:Cs.share}),u.jsx("span",{children:"Share"})]}),u.jsxs(we.button,{className:`post-action ${i?"saved":""}`,onClick:x,whileTap:{scale:.8},children:[u.jsx("span",{className:"post-action-icon",children:Cs.bookmark(i)}),u.jsx("span",{children:"Save"})]})]}),u.jsx("style",{children:$N})]})}const $N=`
  .feed-post {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 1.1rem 1.25rem;
    margin-bottom: 0.85rem;
    transition: border-color 0.3s ease;
  }
  .feed-post:hover {
    border-color: rgba(255,255,255,0.1);
  }

  .post-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
  }

  .post-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    color: #08080f;
    flex-shrink: 0;
  }

  .post-user-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
  }
  .post-username {
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
  }
  .post-handle {
    font-size: 0.75rem;
    color: rgba(255,255,255,0.35);
  }

  .post-more-btn {
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: rgba(255,255,255,0.3);
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s;
    padding: 0;
    flex-shrink: 0;
  }
  .post-more-btn:hover {
    background: rgba(255,255,255,0.05);
    color: rgba(255,255,255,0.6);
  }
  .post-more-btn svg {
    width: 18px;
    height: 18px;
  }

  .post-content {
    margin-bottom: 0.85rem;
  }
  .post-content p {
    font-size: 0.95rem;
    line-height: 1.6;
    color: rgba(255,255,255,0.85);
    margin: 0;
  }

  .post-images {
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 0.75rem;
  }
  .post-images.multi {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4px;
  }
  .post-image-wrap {
    overflow: hidden;
    cursor: pointer;
  }
  .post-image-wrap img {
    width: 100%;
    height: 280px;
    object-fit: cover;
    display: block;
    transition: transform 0.4s ease;
  }
  .post-image-wrap:hover img {
    transform: scale(1.03);
  }
  .post-images.multi .post-image-wrap img {
    height: 200px;
  }

  .post-stats {
    display: flex;
    gap: 1rem;
    padding: 0.5rem 0 0.65rem;
    border-top: 1px solid rgba(255,255,255,0.04);
    margin-bottom: 0.25rem;
  }
  .post-stat {
    font-size: 0.78rem;
    color: rgba(255,255,255,0.35);
    font-weight: 500;
  }
  .post-stat span {
    color: rgba(255,255,255,0.7);
  }

  .post-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 0.4rem;
    border-top: 1px solid rgba(255,255,255,0.04);
  }
  .post-action {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.6rem;
    background: none;
    border: none;
    border-radius: 8px;
    color: rgba(255,255,255,0.4);
    font-size: 0.8rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    flex: 1;
    justify-content: center;
  }
  .post-action:hover {
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.7);
  }
  .post-action.liked {
    color: #ff4d6d;
  }
  .post-action.saved {
    color: #CCFF00;
  }

  .post-action-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .post-action-icon svg {
    width: 18px;
    height: 18px;
  }

  @media (max-width: 480px) {
    .feed-post { padding: 1rem; }
    .post-image-wrap img { height: 220px; }
    .post-images.multi .post-image-wrap img { height: 150px; }
    .post-action { font-size: 0.72rem; padding: 0.35rem 0.4rem; }
    .post-action-icon svg { width: 16px; height: 16px; }
  }
`;function IN({onClose:t}){const[e,a]=j.useState(""),[i,o]=j.useState(""),[c,d]=j.useState(!1),[h,p]=j.useState(""),g=mt(_=>_.user),y=mt(_=>_.profile),v=yc(_=>_.createPost),x=Ot(_=>_.fetchFeed),w=j.useRef(null),S=async()=>{const _=e.trim();if(_){d(!0),p("");try{await v({content:_,image_url:i.trim()||null}),a(""),o(""),x({refresh:!0}),t&&t()}catch(R){p(R.message||"Failed to create post")}finally{d(!1)}}},T=(y==null?void 0:y.avatar_color)||"#CCFF00",C=(y==null?void 0:y.display_name)||(y==null?void 0:y.username)||(g==null?void 0:g.email)||"User";return u.jsxs(we.div,{className:"post-composer-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:_=>{_.target===_.currentTarget&&t&&t()},children:[u.jsxs(we.div,{className:"post-composer",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-composer-header",children:[u.jsx("h3",{children:"Create Post"}),u.jsx("button",{className:"post-composer-close",onClick:t,children:"×"})]}),u.jsxs("div",{className:"post-composer-body",children:[u.jsx("div",{className:"post-composer-avatar",style:{background:T},children:C.charAt(0).toUpperCase()}),u.jsx("textarea",{ref:w,className:"post-composer-textarea",placeholder:"What's on your mind?",value:e,onChange:_=>a(_.target.value),maxLength:2e3,autoFocus:!0})]}),u.jsx("div",{className:"post-composer-image",children:u.jsx("input",{className:"post-composer-image-input",placeholder:"Add image URL (optional)",value:i,onChange:_=>o(_.target.value)})}),h&&u.jsx("p",{className:"post-composer-error",children:h}),u.jsxs("div",{className:"post-composer-footer",children:[u.jsxs("span",{className:"post-composer-count",children:[e.length,"/2000"]}),u.jsx("button",{className:"post-composer-submit",onClick:S,disabled:!e.trim()||c,children:c?"Posting...":"Post"})]})]}),u.jsx("style",{children:qN})]})}const qN=`
  .post-composer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    padding: 1rem;
    backdrop-filter: blur(4px);
  }

  .post-composer {
    background: var(--bg);
    border: 1px solid var(--border);
    border-radius: 16px;
    width: 100%;
    max-width: 520px;
    overflow: hidden;
  }

  .post-composer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid var(--border);
  }
  .post-composer-header h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
  }
  .post-composer-close {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    border: none;
    background: var(--surface);
    color: var(--text-secondary);
    font-size: 1.25rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
  }
  .post-composer-close:hover {
    background: var(--surface-hover);
    color: var(--text);
  }

  .post-composer-body {
    display: flex;
    gap: 0.75rem;
    padding: 1rem 1.25rem;
  }
  .post-composer-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 700;
    color: #08080f;
    flex-shrink: 0;
  }
  .post-composer-textarea {
    flex: 1;
    background: none;
    border: none;
    color: var(--text);
    font-size: 1rem;
    font-family: inherit;
    resize: none;
    min-height: 100px;
    outline: none;
    line-height: 1.5;
  }
  .post-composer-textarea::placeholder {
    color: var(--text-secondary);
  }

  .post-composer-image {
    padding: 0 1.25rem 0.75rem;
  }
  .post-composer-image-input {
    width: 100%;
    padding: 0.6rem 0.75rem;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text);
    font-size: 0.85rem;
    font-family: inherit;
    outline: none;
    box-sizing: border-box;
  }
  .post-composer-image-input:focus {
    border-color: var(--accent);
  }

  .post-composer-error {
    color: var(--danger, #ff4d4d);
    font-size: 0.85rem;
    padding: 0 1.25rem 0.5rem;
    margin: 0;
  }

  .post-composer-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    border-top: 1px solid var(--border);
  }
  .post-composer-count {
    font-size: 0.8rem;
    color: var(--text-secondary);
  }
  .post-composer-submit {
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: none;
    background: var(--accent);
    color: #08080f;
    font-weight: 600;
    font-size: 0.9rem;
    cursor: pointer;
    font-family: inherit;
    transition: all 0.2s;
  }
  .post-composer-submit:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }
  .post-composer-submit:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;function _h(){return u.jsxs("div",{className:"feed-post-skeleton",children:[u.jsxs("div",{className:"skeleton-header",children:[u.jsx("div",{className:"skeleton-circle"}),u.jsxs("div",{className:"skeleton-lines",children:[u.jsx("div",{className:"skeleton-line w-40"}),u.jsx("div",{className:"skeleton-line w-24"})]})]}),u.jsxs("div",{className:"skeleton-body",children:[u.jsx("div",{className:"skeleton-line w-100"}),u.jsx("div",{className:"skeleton-line w-80"})]}),u.jsx("div",{className:"skeleton-image"}),u.jsxs("div",{className:"skeleton-actions",children:[u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"})]}),u.jsx("style",{children:FN})]})}const FN=`
  @keyframes shimmer {
    0% { background-position: -200% 0; }
    100% { background-position: 200% 0; }
  }

  .feed-post-skeleton {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 16px;
    padding: 1.25rem;
    margin-bottom: 1rem;
  }

  .skeleton-header {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 1rem;
  }

  .skeleton-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  .skeleton-circle.lg {
    width: 56px;
    height: 56px;
  }

  .skeleton-lines {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .skeleton-line {
    height: 12px;
    border-radius: 6px;
    background: linear-gradient(90deg, rgba(255,255,255,0.06) 25%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.06) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
  }

  .skeleton-line.w-16 { width: 64px; }
  .skeleton-line.w-20 { width: 80px; }
  .skeleton-line.w-24 { width: 96px; }
  .skeleton-line.w-40 { width: 160px; }
  .skeleton-line.w-80 { width: 80%; }
  .skeleton-line.w-100 { width: 100%; }

  .skeleton-body {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .skeleton-image {
    width: 100%;
    height: 300px;
    border-radius: 12px;
    background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.04) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s ease-in-out infinite;
    margin-bottom: 1rem;
  }

  .skeleton-actions {
    display: flex;
    gap: 1.5rem;
  }

  .story-skeleton {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    flex-shrink: 0;
  }
`;function GN(t,{threshold:e=.5,enabled:a=!0}={}){const i=j.useRef(null);j.useEffect(()=>{if(!a)return;const c=i.current;if(!c)return;const d=new IntersectionObserver(h=>{h[0].isIntersecting&&t()},{threshold:e});return d.observe(c),()=>d.disconnect()},[t,e,a]);const o=j.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);return{sentinelRef:i,scrollToTop:o}}function KN(){const t=Ot(i=>i.newPostsCount),e=Ot(i=>i.subscribeToPosts),a=Ot(i=>i.acknowledgeNewPosts);return j.useEffect(()=>{e()},[e]),{newPosts:t>0?Array.from({length:t}):[],postUpdates:{},clearNewPosts:a,feedEvents:[]}}const YN={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},XN={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},bb=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];function WN(t){const e=t.profiles||{},a=e.display_name||e.username||"user",i=typeof t.id=="string"?t.id:String(t.id??"");return typeof t.id!="string"&&t.id!=null&&console.warn("mapPost: post.id is not a string",{type:typeof t.id,value:t.id,post:t}),{id:t.id,username:a,handle:"@"+(e.username||"user"),avatarColor:bb[(i.charCodeAt(0)||0)%bb.length],timestamp:t.created_at?new Date(t.created_at).getTime():Date.now(),content:t.content||"",images:t.image_url?[t.image_url]:[],likes:t.likes??0,comments:t.comments??0,liked:t.isLiked??!1,saved:!1}}function JN(){const[t,e]=j.useState(!0),[a,i]=j.useState(!1),o=Ot(C=>C.posts),c=Ot(C=>C.isLoading),d=Ot(C=>C.hasMore),h=Ot(C=>C.fetchFeed),{newPosts:p,clearNewPosts:g}=KN();j.useEffect(()=>{h({refresh:!0}).then(()=>e(!1))},[h]);const y=j.useCallback(()=>{!c&&d&&h()},[c,d,h]),{sentinelRef:v,scrollToTop:x}=GN(y,{enabled:!t&&d}),w=()=>{e(!0),h({refresh:!0}).then(()=>e(!1))},S=()=>{g(),w(),x()},T=j.useMemo(()=>o.map(WN),[o]);return u.jsxs("div",{className:"feed-container",children:[u.jsxs("div",{className:"feed-header",children:[u.jsx("h1",{className:"feed-title",children:"Home"}),u.jsxs("div",{className:"feed-header-actions",children:[u.jsx("button",{className:"feed-compose-btn",onClick:()=>i(!0),"aria-label":"Create post",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),u.jsx("button",{className:"feed-refresh-btn",onClick:w,"aria-label":"Refresh",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("path",{d:"M20.49 15a9 9 0 11-2.12-9.36L23 10"})]})})]})]}),t?u.jsxs("div",{className:"feed-posts",children:[u.jsx(_h,{}),u.jsx(_h,{}),u.jsx(_h,{})]}):u.jsxs(we.div,{className:"feed-posts",variants:YN,initial:"hidden",animate:"visible",children:[u.jsx(PN,{}),u.jsxs(tn,{mode:"popLayout",children:[p.length>0&&u.jsx(we.div,{className:"feed-new-posts-banner",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},onClick:S,children:u.jsxs("span",{children:[p.length," new post",p.length>1?"s":""," available"]})},"new-posts-banner"),T.map(C=>u.jsx(we.div,{variants:XN,layout:!0,children:u.jsx(cw,{post:C})},C.id))]}),c&&u.jsxs("div",{className:"feed-loading-more",children:[u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"})]}),u.jsx("div",{ref:v,className:"feed-sentinel"}),!d&&!c&&T.length>0&&u.jsx("p",{className:"feed-end",children:"You're all caught up! 🎉"})]}),u.jsx(tn,{children:a&&u.jsx(IN,{onClose:()=>i(!1)})}),u.jsx("style",{children:`
        .feed-container {
          max-width: 600px;
          margin: 0 auto;
          padding: 1rem;
          padding-bottom: 5rem;
        }
        .feed-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .feed-title {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }
        .feed-header-actions {
          display: flex;
          gap: 0.5rem;
        }
        .feed-compose-btn, .feed-refresh-btn {
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 12px;
          color: var(--text-secondary);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .feed-compose-btn:hover, .feed-refresh-btn:hover { background: var(--surface-hover); color: var(--accent); }
        .feed-compose-btn:active, .feed-refresh-btn:active { transform: scale(0.92); }
        .feed-compose-btn svg, .feed-refresh-btn svg { width: 18px; height: 18px; }
        .feed-posts {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .feed-loading-more {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          padding: 1.5rem 0;
        }
        .feed-loading-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: color-mix(in srgb, var(--accent) 40%, transparent);
          animation: feedDotPulse 1.4s ease-in-out infinite;
        }
        .feed-loading-dot:nth-child(2) { animation-delay: 0.2s; }
        .feed-loading-dot:nth-child(3) { animation-delay: 0.4s; }
        @keyframes feedDotPulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40% { transform: scale(1); opacity: 1; }
        }
        .feed-sentinel { height: 1px; }
        .feed-new-posts-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          background: color-mix(in srgb, var(--accent) 8%, transparent);
          border: 1px solid color-mix(in srgb, var(--accent) 20%, transparent);
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s;
          overflow: hidden;
        }
        .feed-new-posts-banner:hover { background: color-mix(in srgb, var(--accent) 14%, transparent); }
        .feed-new-posts-banner span {
          font-size: 0.85rem;
          color: var(--accent);
          font-weight: 500;
        }
        .feed-end {
          text-align: center;
          color: var(--text-secondary);
          font-size: 0.85rem;
          padding: 1.5rem 0;
        }
        @media (max-width: 600px) {
          .feed-container { padding: 0.75rem; padding-bottom: 5rem; }
          .feed-title { font-size: 1.25rem; }
        }
        @media (min-width: 768px) {
          .feed-container { padding-top: 1.5rem; }
        }
      `})]})}const QN=Fr((t,e)=>({onlineUserIds:new Set,setOnlineUsers:a=>{t({onlineUserIds:new Set(a)})},addOnlineUser:a=>{t(i=>{const o=new Set(i.onlineUserIds);return o.add(a),{onlineUserIds:o}})},removeOnlineUser:a=>{t(i=>{const o=new Set(i.onlineUserIds);return o.delete(a),{onlineUserIds:o}})},isOnline:a=>e().onlineUserIds.has(a)}));function ZN(t){const[e,a]=j.useState(null),i=QN(c=>c.onlineUserIds),o=t?i.has(t):!1;return j.useEffect(()=>{if(!t)return;const c=async()=>{const{count:h}=await te.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",t);h!==null&&a(h)};c();const d=te.channel(`profile-follows-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"follows",filter:`following_id=eq.${t}`},()=>c()).subscribe();return()=>{te.removeChannel(d)}},[t]),{liveFollowerCount:e,isOnline:o}}const Pl=Fr((t,e)=>({profilesByUserId:{},followersByUserId:{},isLoading:!1,fetchProfile:async a=>{const{profilesByUserId:i}=e();if(i[a])return i[a];t({isLoading:!0});try{const{data:o,error:c}=await te.from("profiles").select("*").eq("id",a).single();if(c)throw c;return t(d=>({profilesByUserId:{...d.profilesByUserId,[a]:o},isLoading:!1})),o}catch(o){return t({isLoading:!1}),console.error("Fetch profile error:",o.message),null}},fetchFollowers:async a=>{try{const{data:i,error:o}=await te.from("follows").select("follower_id").eq("following_id",a);if(o)throw o;return t(c=>({followersByUserId:{...c.followersByUserId,[a]:i||[]}})),i||[]}catch(i){return console.error("Fetch followers error:",i.message),[]}},getFollowerCount:a=>{var o;const{followersByUserId:i}=e();return((o=i[a])==null?void 0:o.length)??0},followUser:async a=>{const i=mt.getState().user;if(!i)throw new Error("Not authenticated");const{error:o}=await te.from("follows").insert({follower_id:i.id,following_id:a});if(o)throw o;t(c=>{const d=c.followersByUserId[a]||[];return{followersByUserId:{...c.followersByUserId,[a]:[...d,{follower_id:i.id}]}}})},unfollowUser:async a=>{const i=mt.getState().user;if(!i)throw new Error("Not authenticated");const{error:o}=await te.from("follows").delete().eq("follower_id",i.id).eq("following_id",a);if(o)throw o;t(c=>{const d=c.followersByUserId[a]||[];return{followersByUserId:{...c.followersByUserId,[a]:d.filter(h=>h.follower_id!==i.id)}}})},isFollowing:a=>{const i=mt.getState().user;if(!i)return!1;const{followersByUserId:o}=e();return(o[a]||[]).some(d=>d.follower_id===i.id)},updateProfile:async a=>{const{data:i,error:o}=await te.from("profiles").update(a).select().single();if(o)throw o;return t(c=>({profilesByUserId:{...c.profilesByUserId,[i.id]:i}})),i},updateProfileRealtime:a=>{t(i=>({profilesByUserId:{...i.profilesByUserId,[a.id]:a}}))}})),Th=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9"],eR=t=>{if(typeof t!="string")return Th[0];let e=0;for(let a=0;a<t.length;a++)e=t.charCodeAt(a)+((e<<5)-e);return Th[Math.abs(e)%Th.length]};function Eh(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}function xb(){const{id:t}=NS(),[e,a]=j.useState("grid"),[i,o]=j.useState("posts"),c=rn(),[d,h]=j.useState(!1),[p,g]=j.useState(!1),[y,v]=j.useState(!1),[x,w]=j.useState(null),[S,T]=j.useState(null),[C,_]=j.useState(!1),[R,O]=j.useState([]),[P,X]=j.useState(!1),[W,G]=j.useState({posts:0,followers:0,following:0}),[q,Z]=j.useState({avatar_url:"",cover_url:"",full_name:"",username:"",bio:"",website:""}),re=j.useRef(null),xe=j.useRef(null),pe=mt(L=>L.profile),Ce=mt(L=>L.user),Le=mt(L=>L.updateProfile),me=!t||t===(Ce==null?void 0:Ce.id),E=t||(Ce==null?void 0:Ce.id),{liveFollowerCount:$,isOnline:ee}=ZN(E),ce=Pl(L=>L.followUser),be=Pl(L=>L.unfollowUser),N=Pl(L=>L.fetchFollowers),I=Pl(L=>L.followersByUserId),J=j.useMemo(()=>{const L=me?pe:S;return L?{username:L.display_name||L.username||"Unknown",handle:`@${L.username||"unknown"}`,avatarUrl:L.avatar_url||null,bio:L.bio||"",website:L.website||"",posts:W.posts,followers:$??W.followers,following:W.following}:{username:"Loading...",handle:"@...",avatarUrl:null,bio:"",website:"",posts:"0",followers:0,following:0}},[me,S,pe,W,$]),ae=j.useMemo(()=>me||!E?!1:(I[E]||[]).some(K=>K.follower_id===(Ce==null?void 0:Ce.id)),[me,E,I,Ce]);j.useEffect(()=>{me||!t||(_(!0),te.from("profiles").select("*").eq("id",t).single().then(({data:L,error:K})=>{if(K)throw K;T(L)}).catch(L=>console.warn("Failed to load user profile:",L.message)).finally(()=>_(!1)))},[t,me]),j.useEffect(()=>{E&&(X(!0),te.from("posts").select("*").eq("user_id",E).eq("is_deleted",!1).order("created_at",{ascending:!1}).then(({data:L,error:K})=>{!K&&L&&O(L)}).finally(()=>X(!1)))},[E]),j.useEffect(()=>{if(!E)return;(async()=>{try{const[K,ue,Se]=await Promise.all([te.from("posts").select("id",{count:"exact",head:!0}).eq("user_id",E).eq("is_deleted",!1),te.from("follows").select("id",{count:"exact",head:!0}).eq("follower_id",E),te.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",E)]);G({posts:K.count??0,following:ue.count??0,followers:Se.count??0})}catch(K){console.warn("Failed to fetch user stats:",K)}})()},[E]),j.useEffect(()=>{!E||me||N(E)},[E,me,N]);const de=(L,K)=>{w({type:L,message:K}),setTimeout(()=>w(null),3e3)},je=async L=>{const{data:K}=await te.storage.listBuckets();if(K!=null&&K.some(Se=>Se.name===L))return!0;const{error:ue}=await te.storage.createBucket(L,{public:!0});return ue?(console.warn(`Could not auto-create bucket "${L}":`,ue.message),!1):!0},Q=async(L,K)=>{var ue,Se;if(!L)return null;g(!0);try{const _e=L.name.split(".").pop(),it=`${Date.now()}_${Math.random().toString(36).substring(2)}.${_e}`,{error:ht}=await te.storage.from(K).upload(it,L);if((ue=ht==null?void 0:ht.message)!=null&&ue.includes("bucket")||(Se=ht==null?void 0:ht.message)!=null&&Se.includes("Bucket")){if(!await je(K))return de("error",`Storage bucket "${K}" not found. Create it in Supabase dashboard or run the migration SQL.`),null;const{error:ja}=await te.storage.from(K).upload(it,L);if(ja)throw ja}else if(ht)throw ht;const{data:{publicUrl:Rc}}=te.storage.from(K).getPublicUrl(it);return Rc}catch(_e){return de("error",_e.message||"Failed to upload image"),null}finally{g(!1)}},ge=async()=>{v(!0);try{const L={};q.full_name&&(L.full_name=q.full_name),q.username&&(L.username=q.username),q.bio&&(L.bio=q.bio),q.website&&(L.website=q.website),q.avatar_url&&(L.avatar_url=q.avatar_url),q.cover_url&&(L.cover_url=q.cover_url),await Le(L),de("success","Profile updated successfully!"),h(!1)}catch(L){de("error",L.message||"Failed to update profile")}finally{v(!1)}},he=[{id:"posts",label:"Posts"},{id:"likes",label:"Likes"},{id:"saved",label:"Saved"}];return u.jsxs(we.div,{className:"profile-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[u.jsxs("div",{className:"profile-header",children:[u.jsxs("div",{className:"profile-cover",children:[u.jsx("div",{className:"profile-cover-bg"}),!me&&u.jsx("button",{className:"profile-back-btn",onClick:()=>c(-1),"aria-label":"Go back",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"22",height:"22",children:u.jsx("polyline",{points:"15 18 9 12 15 6"})})})]}),u.jsxs("div",{className:"profile-info",children:[u.jsxs("div",{className:"profile-avatar-section",children:[u.jsxs("div",{className:"profile-avatar",style:{background:eR(J.username),position:"relative"},children:[J.avatarUrl?u.jsx("img",{src:J.avatarUrl,alt:J.username,className:"profile-avatar-img"}):u.jsx("span",{children:J.username.charAt(0).toUpperCase()}),u.jsx("span",{className:`profile-status-badge ${ee?"online":"offline"}`})]}),u.jsxs("div",{className:"profile-actions",children:[me&&u.jsxs(u.Fragment,{children:[u.jsx(we.button,{className:"profile-settings-btn",onClick:()=>c("/settings"),"aria-label":"Settings",whileHover:{scale:1.05},whileTap:{scale:.92,rotate:15},transition:{type:"spring",stiffness:400,damping:17},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]})}),u.jsx(we.button,{className:"profile-edit-btn",onClick:()=>{pe&&Z({avatar_url:pe.avatar_url||"",cover_url:pe.cover_url||"",full_name:pe.full_name||"",username:pe.username||"",bio:pe.bio||"",website:pe.website||""}),h(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:"Edit Profile"})]}),!me&&u.jsx(we.button,{className:`profile-follow-btn${ae?" following":""}`,onClick:()=>ae?be(E):ce(E),whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:ae?"Following":"Follow"})]})]}),u.jsxs("div",{className:"profile-details",children:[u.jsx("h1",{className:"profile-name",children:J.username}),u.jsx("span",{className:"profile-handle",children:J.handle}),u.jsx("p",{className:"profile-bio",children:J.bio}),u.jsxs("a",{className:"profile-website",href:J.website?J.website.startsWith("http")?J.website:`https://${J.website}`:"#",target:"_blank",rel:"noopener noreferrer",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"14",height:"14",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),J.website]})]}),u.jsxs("div",{className:"profile-stats",children:[u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Eh(J.posts)}),u.jsx("span",{className:"profile-stat-label",children:"Posts"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Eh($||J.followers)}),u.jsx("span",{className:"profile-stat-label",children:"Followers"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Eh(J.following)}),u.jsx("span",{className:"profile-stat-label",children:"Following"})]})]})]})]}),u.jsxs("div",{className:"profile-tabs",children:[he.map(L=>u.jsxs("button",{className:`profile-tab ${i===L.id?"active":""}`,onClick:()=>o(L.id),children:[L.label,i===L.id&&u.jsx(we.div,{className:"profile-tab-underline",layoutId:"tab-underline"})]},L.id)),u.jsxs("div",{className:"profile-view-toggle",children:[u.jsx("button",{className:`view-btn ${e==="grid"?"active":""}`,onClick:()=>a("grid"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]})}),u.jsx("button",{className:`view-btn ${e==="list"?"active":""}`,onClick:()=>a("list"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),u.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})})]})]}),u.jsxs(tn,{mode:"wait",children:[i==="posts"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:e==="grid"?u.jsx("div",{className:"profile-grid",children:R.length>0?R.map(L=>u.jsxs(we.div,{className:"profile-grid-item",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:20},children:[L.image_url?u.jsx("img",{src:L.image_url,alt:"",loading:"lazy"}):u.jsx("div",{className:"grid-item-text",children:u.jsxs("p",{children:[L.content.substring(0,60),"..."]})}),u.jsx("div",{className:"grid-item-overlay",children:u.jsxs("span",{children:[L.likes_count||L.likes||0," ❤"]})})]},L.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})}):u.jsx("div",{className:"profile-list",children:R.length>0?R.map(L=>u.jsx(cw,{post:L},L.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})})},"posts"),i==="likes"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No liked posts yet"})})},"likes"),i==="saved"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No saved posts yet"})})},"saved")]}),u.jsx(tn,{children:d&&u.jsx(we.div,{className:"edit-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>h(!1),children:u.jsxs(we.div,{className:"edit-modal",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},onClick:L=>L.stopPropagation(),children:[u.jsxs("div",{className:"edit-modal-header",children:[u.jsx("h2",{children:"Edit Profile"}),u.jsx(we.button,{className:"edit-modal-close",onClick:()=>h(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"20",height:"20",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),u.jsxs("div",{className:"edit-modal-body",children:[u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Profile Picture"}),u.jsxs("div",{className:"image-upload-area",onClick:()=>{var L;return(L=re.current)==null?void 0:L.click()},children:[q.avatar_url?u.jsx("img",{src:q.avatar_url,alt:"Avatar",className:"image-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("path",{d:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"}),u.jsx("circle",{cx:"12",cy:"13",r:"4"})]}),u.jsx("span",{children:"Tap to change"})]}),p&&u.jsx("div",{className:"image-upload-spinner"})]}),u.jsx("input",{ref:re,type:"file",accept:"image/*",hidden:!0,onChange:async L=>{var Se;const K=(Se=L.target.files)==null?void 0:Se[0];if(!K)return;const ue=await Q(K,"avatars");ue&&Z(_e=>({..._e,avatar_url:ue}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Cover Image"}),u.jsx("div",{className:"cover-upload-area",onClick:()=>{var L;return(L=xe.current)==null?void 0:L.click()},children:q.cover_url?u.jsx("img",{src:q.cover_url,alt:"Cover",className:"cover-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Tap to change cover"})]})}),u.jsx("input",{ref:xe,type:"file",accept:"image/*",hidden:!0,onChange:async L=>{var Se;const K=(Se=L.target.files)==null?void 0:Se[0];if(!K)return;const ue=await Q(K,"covers");ue&&Z(_e=>({..._e,cover_url:ue}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Name"}),u.jsx("input",{type:"text",value:q.full_name,onChange:L=>Z(K=>({...K,full_name:L.target.value})),placeholder:"Your full name"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Username"}),u.jsx("input",{type:"text",value:q.username,onChange:L=>Z(K=>({...K,username:L.target.value})),placeholder:"Your username"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Bio"}),u.jsx("textarea",{value:q.bio,onChange:L=>Z(K=>({...K,bio:L.target.value})),placeholder:"Tell your story",rows:3})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Website"}),u.jsx("input",{type:"text",value:q.website,onChange:L=>Z(K=>({...K,website:L.target.value})),placeholder:"yourwebsite.com"})]})]}),u.jsxs("div",{className:"edit-modal-footer",children:[u.jsx(we.button,{className:"edit-btn-cancel",onClick:()=>h(!1),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Cancel"}),u.jsx(we.button,{className:"edit-btn-save",onClick:ge,disabled:y,whileHover:{scale:1.02},whileTap:{scale:.98},children:y?"Saving...":"Save Changes"})]})]})})}),u.jsx(tn,{children:x&&u.jsxs(we.div,{className:`toast toast-${x.type}`,initial:{opacity:0,y:50,x:20},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:20,x:20},transition:{type:"spring",stiffness:300,damping:25},children:[x.type==="success"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),u.jsx("span",{children:x.message})]})}),u.jsx("style",{children:tR})]})}const tR=`
  .profile-page {
    max-width: 800px;
    margin: 0 auto;
    padding-bottom: 5rem;
  }

  .profile-cover {
    height: 160px;
    border-radius: 0 0 24px 24px;
    overflow: hidden;
    position: relative;
  }
  .profile-cover-bg {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(204,255,0,0.15), rgba(0,229,255,0.1), rgba(204,255,0,0.05));
  }
  .profile-back-btn {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 10;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(8, 8, 15, 0.5);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    padding: 0;
    transition: all 0.25s ease;
    font-family: inherit;
  }
  .profile-back-btn:hover {
    background: rgba(8, 8, 15, 0.7);
    color: #fff;
    transform: scale(1.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  }
  .profile-back-btn:active {
    transform: scale(0.92);
  }

  .profile-info {
    padding: 0 1.5rem;
    margin-top: -40px;
    position: relative;
  }

  .profile-avatar-section {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  .profile-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-text);
    border: 4px solid var(--bg);
    flex-shrink: 0;
    box-shadow: 0 0 0 2px color-mix(in srgb, var(--accent) 20%, transparent);
    overflow: hidden;
  }
  .profile-avatar-img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
  }
  .profile-edit-btn {
    padding: 0.45rem 1.2rem;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: color-mix(in srgb, var(--text) 70%, transparent);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    font-weight: 500;
  }
  .profile-edit-btn:hover {
    border-color: color-mix(in srgb, var(--accent) 40%, transparent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 6%, transparent);
  }

  .profile-follow-btn {
    padding: 0.45rem 1.2rem;
    border-radius: 8px;
    border: 1px solid var(--accent);
    background: var(--accent);
    color: var(--accent-text);
    font-size: 0.85rem;
    cursor: pointer;
    font-family: inherit;
    font-weight: 600;
    transition: all 0.2s;
  }
  .profile-follow-btn:hover {
    opacity: 0.85;
  }
  .profile-follow-btn.following {
    background: var(--surface);
    color: var(--text);
    border-color: var(--border);
  }

  .profile-settings-btn {
    width: 38px;
    height: 38px;
    border-radius: 12px;
    border: 1px solid var(--border);
    background: var(--surface);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    transition: all 0.2s;
    font-family: inherit;
    flex-shrink: 0;
  }
  .profile-settings-btn:hover {
    color: var(--accent);
    border-color: color-mix(in srgb, var(--accent) 30%, transparent);
  }
  .profile-settings-btn:active {
    transform: scale(0.92);
  }

  .profile-status-badge {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    border: 2.5px solid var(--bg);
    z-index: 2;
  }
  .profile-status-badge.online { background: #22c55e; }
  .profile-status-badge.offline { background: #6b7280; }

  .profile-details {
    margin-bottom: 1.25rem;
  }
  .profile-name {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--text);
    margin: 0 0 0.15rem;
  }
  .profile-handle {
    font-size: 0.9rem;
    color: var(--text-secondary);
    display: block;
    margin-bottom: 0.5rem;
  }
  .profile-bio {
    font-size: 0.9rem;
    color: color-mix(in srgb, var(--text) 65%, transparent);
    line-height: 1.5;
    margin: 0 0 0.5rem;
  }
  .profile-website {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
  }
  .profile-website:hover {
    text-decoration: underline;
  }

  .profile-stats {
    display: flex;
    gap: 2.5rem;
    padding: 1rem 0;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    margin-bottom: 0;
  }
  .profile-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .profile-stat-value {
    font-size: 1.15rem;
    font-weight: 700;
    color: var(--text);
  }
  .profile-stat-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .profile-tabs {
    display: flex;
    align-items: center;
    gap: 0;
    padding: 0 1.5rem;
    border-bottom: 1px solid var(--border);
    position: relative;
  }
  .profile-tab {
    padding: 0.85rem 1.25rem;
    background: none;
    border: none;
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    font-family: inherit;
    transition: color 0.2s;
  }
  .profile-tab.active {
    color: var(--text);
  }
  .profile-tab-underline {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--accent);
    border-radius: 2px 2px 0 0;
  }

  .profile-view-toggle {
    margin-left: auto;
    display: flex;
    gap: 0.25rem;
  }
  .view-btn {
    width: 34px;
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: color-mix(in srgb, var(--text) 25%, transparent);
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.2s;
    padding: 0;
  }
  .view-btn svg {
    width: 18px;
    height: 18px;
  }
  .view-btn:hover {
    color: color-mix(in srgb, var(--text) 50%, transparent);
    background: var(--surface);
  }
  .view-btn.active {
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
  }

  .profile-content {
    padding: 1.25rem 1.5rem;
  }

  .profile-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 6px;
  }
  .profile-grid-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    background: var(--surface);
  }
  .profile-grid-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .grid-item-text {
    padding: 0.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .grid-item-text p {
    font-size: 0.75rem;
    color: var(--text-secondary);
    text-align: center;
    margin: 0;
  }
  .grid-item-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
    font-size: 0.9rem;
    color: #fff;
    font-weight: 600;
  }
  .profile-grid-item:hover .grid-item-overlay {
    opacity: 1;
  }

  .profile-empty {
    text-align: center;
    padding: 3rem 0;
  }
  .profile-empty p {
    color: var(--text-secondary);
    font-size: 0.95rem;
  }

  /* Actions container */
  .profile-actions {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    margin-top: -24px;
  }

  /* Edit Modal */
  .edit-modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.6);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
  }
  .edit-modal {
    background: var(--bg);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    max-width: 480px;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    padding: 1.5rem;
    box-shadow: 0 25px 50px rgba(0,0,0,0.25);
  }
  .edit-modal::-webkit-scrollbar { width: 4px; }
  .edit-modal::-webkit-scrollbar-thumb { background: var(--border); border-radius: 4px; }
  .edit-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
  }
  .edit-modal-header h2 {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text);
    margin: 0;
  }
  .edit-modal-close {
    width: 34px;
    height: 34px;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-family: inherit;
  }
  .edit-modal-body {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .edit-field {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .edit-field label {
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }
  .edit-field input,
  .edit-field textarea {
    width: 100%;
    padding: 0.7rem 0.85rem;
    border: 1px solid var(--border);
    border-radius: 10px;
    background: var(--surface);
    color: var(--text);
    font-size: 0.9rem;
    font-family: inherit;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .edit-field input:focus,
  .edit-field textarea:focus {
    border-color: var(--accent);
  }
  .edit-field textarea {
    resize: vertical;
    min-height: 80px;
  }
  .image-upload-area {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px dashed var(--border);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
    transition: border-color 0.2s;
  }
  .image-upload-area:hover {
    border-color: var(--accent);
  }
  .cover-upload-area {
    width: 100%;
    height: 120px;
    border-radius: 12px;
    border: 2px dashed var(--border);
    overflow: hidden;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--surface);
    transition: border-color 0.2s;
  }
  .cover-upload-area:hover {
    border-color: var(--accent);
  }
  .image-preview, .cover-preview {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .image-upload-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
    color: var(--text-secondary);
    font-size: 0.7rem;
  }
  .image-upload-placeholder svg {
    opacity: 0.5;
  }
  .image-upload-spinner {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  .image-upload-spinner::after {
    content: '';
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: modal-spin 0.7s linear infinite;
  }
  .edit-modal-footer {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
  }
  .edit-btn-cancel {
    padding: 0.6rem 1.25rem;
    border-radius: 10px;
    border: 1px solid var(--border);
    background: var(--surface);
    color: var(--text-secondary);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    font-family: inherit;
  }
  .edit-btn-save {
    padding: 0.6rem 1.25rem;
    border-radius: 10px;
    border: none;
    background: var(--accent);
    color: var(--accent-text);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    font-family: inherit;
  }
  .edit-btn-save:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  /* Toast */
  .toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    display: flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.75rem 1.25rem;
    border-radius: 12px;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    font-size: 0.85rem;
    font-weight: 500;
    z-index: 200;
    box-shadow: 0 8px 32px rgba(0,0,0,0.2);
  }
  .toast-success {
    background: rgba(34,197,94,0.12);
    border: 1px solid rgba(34,197,94,0.25);
    color: #22c55e;
  }
  .toast-error {
    background: rgba(239,68,68,0.12);
    border: 1px solid rgba(239,68,68,0.25);
    color: #ef4444;
  }

  @keyframes modal-spin {
    to { transform: rotate(360deg); }
  }

  @media (max-width: 600px) {
    .profile-grid { grid-template-columns: repeat(3, 1fr); gap: 4px; }
    .profile-info { padding: 0 1rem; }
    .profile-tabs { padding: 0 1rem; }
    .profile-content { padding: 1rem; }
    .profile-avatar { width: 68px; height: 68px; font-size: 1.6rem; }
    .profile-cover { height: 120px; }
    .profile-stats { gap: 1.5rem; }
    .profile-actions { margin-top: -16px; }
    .toast {
      bottom: 1rem;
      right: 1rem;
      left: 1rem;
    }
    .edit-modal { padding: 1.25rem; max-height: 85vh; }
  }
`,As={search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),hash:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),u.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),u.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),u.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]})},nR=["All","Gaming","Art","Music","Tech","Photography","Fitness","Fashion"],rR=[{name:"Pixel Art Masters",members:"12.4k",category:"Art",desc:"A community for pixel art enthusiasts and digital artists.",color:"#ff6b6b"},{name:"Cyber Gamers",members:"8.7k",category:"Gaming",desc:"Discuss the latest games, strategies, and esports.",color:"#ffa502"},{name:"Synthwave Producers",members:"5.2k",category:"Music",desc:"Create and share synthwave, retrowave, and chill beats.",color:"#7bed9f"},{name:"Code Brigade",members:"15.3k",category:"Tech",desc:"Web dev, AI, open source — all things code.",color:"#70a1ff"},{name:"Lens Culture",members:"6.8k",category:"Photography",desc:"Share your best shots and photography techniques.",color:"#ff6348"},{name:"Neon Fitness",members:"4.1k",category:"Fitness",desc:"Push your limits with the neon fitness crew.",color:"#a29bfe"},{name:"Digital Canvas",members:"9.5k",category:"Art",desc:"Digital painting, 3D modeling, and concept art.",color:"#55efc4"},{name:"Vaporwave Lounge",members:"3.9k",category:"Music",desc:"Chill aesthetics, vaporwave, and lo-fi vibes.",color:"#fd79a8"}];function aR(){const[t,e]=j.useState("All"),[a,i]=j.useState(""),o=rR.filter(c=>{const d=t==="All"||c.category===t,h=c.name.toLowerCase().includes(a.toLowerCase())||c.desc.toLowerCase().includes(a.toLowerCase());return d&&h});return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"communities-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Communities"}),u.jsx("p",{children:"Discover and join communities that match your interests"})]}),u.jsxs("div",{className:"search-bar glass",children:[As.search,u.jsx("input",{type:"text",placeholder:"Search communities...",value:a,onChange:c=>i(c.target.value)})]}),u.jsx("div",{className:"category-pills",children:nR.map(c=>u.jsxs("button",{className:`pill ${t===c?"active":""}`,onClick:()=>e(c),children:[c==="All"?null:u.jsx("span",{className:"pill-icon",children:As.hash}),c]},c))}),o.length===0?u.jsxs("div",{className:"empty-state glass",children:[As.search,u.jsx("h3",{children:"No communities found"}),u.jsx("p",{children:"Try adjusting your search or filter"})]}):u.jsxs("div",{className:"communities-grid",children:[o.map((c,d)=>u.jsxs("div",{className:"community-card glass",children:[u.jsxs("div",{className:"community-card-header",style:{background:`linear-gradient(135deg, ${c.color}22, ${c.color}44)`},children:[u.jsx("div",{className:"community-avatar",style:{background:c.color},children:c.name.charAt(0)}),u.jsx("span",{className:"community-category",children:c.category})]}),u.jsxs("div",{className:"community-card-body",children:[u.jsx("h3",{children:c.name}),u.jsx("p",{children:c.desc}),u.jsx("div",{className:"community-meta",children:u.jsxs("span",{children:[As.users," ",c.members," members"]})})]}),u.jsx("div",{className:"community-card-footer",children:u.jsx("button",{className:"join-community-btn",children:"Join Community"})})]},d)),u.jsxs("div",{className:"community-card create-card glass",children:[u.jsx("div",{className:"create-card-icon",children:As.plus}),u.jsx("h3",{children:"Create Community"}),u.jsx("p",{children:"Start your own community and bring people together"}),u.jsx("button",{className:"create-community-btn",children:"Get Started"})]})]})]}),u.jsx("style",{children:`
        .communities-page {
          padding: 1.5rem;
          max-width: 1200px;
          margin: 0 auto;
          animation: fadeSlideUp 0.5s ease;
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .glass {
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 16px;
        }

        .page-header { margin-bottom: 1.5rem; }
        .page-header h1 { font-size: 1.75rem; font-weight: 700; color: #fff; margin: 0 0 0.35rem; }
        .page-header p { font-size: 0.9rem; color: rgba(255,255,255,0.4); margin: 0; }

        /* Search */
        .search-bar {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1.25rem;
          margin-bottom: 1.25rem;
        }
        .search-bar svg { width: 20px; height: 20px; color: rgba(255,255,255,0.3); flex-shrink: 0; }
        .search-bar input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: #fff;
          font-size: 0.95rem;
          font-family: inherit;
        }
        .search-bar input::placeholder { color: rgba(255,255,255,0.3); }

        /* Category Pills */
        .category-pills {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          white-space: nowrap;
        }
        .pill:hover { border-color: rgba(204,255,0,0.3); color: #fff; }
        .pill.active { background: #CCFF00; color: #08080f; border-color: #CCFF00; font-weight: 600; }
        .pill-icon svg { width: 14px; height: 14px; }

        /* Empty */
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 3rem 2rem;
          text-align: center;
          gap: 0.75rem;
        }
        .empty-state svg { width: 48px; height: 48px; color: rgba(255,255,255,0.15); }
        .empty-state h3 { margin: 0; color: #fff; font-weight: 600; }
        .empty-state p { margin: 0; color: rgba(255,255,255,0.4); font-size: 0.9rem; }

        /* Grid */
        .communities-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .community-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .community-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
        .community-card-header {
          padding: 1.5rem 1.25rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .community-avatar {
          width: 48px; height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }
        .community-category {
          padding: 0.25rem 0.6rem;
          border-radius: 6px;
          background: rgba(255,255,255,0.08);
          font-size: 0.75rem;
          color: rgba(255,255,255,0.6);
        }
        .community-card-body { padding: 0 1.25rem 1rem; flex: 1; }
        .community-card-body h3 { margin: 0 0 0.4rem; font-size: 1rem; color: #fff; font-weight: 600; }
        .community-card-body p { margin: 0 0 0.75rem; font-size: 0.85rem; color: rgba(255,255,255,0.4); line-height: 1.4; }
        .community-meta { display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.4); }
        .community-meta svg { width: 14px; height: 14px; vertical-align: middle; margin-right: 0.3rem; }
        .community-card-footer { padding: 0.75rem 1.25rem; border-top: 1px solid rgba(255,255,255,0.06); }
        .join-community-btn {
          width: 100%;
          padding: 0.6rem;
          border-radius: 8px;
          border: none;
          background: rgba(204,255,0,0.1);
          color: #CCFF00;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          font-weight: 500;
        }
        .join-community-btn:hover { background: #CCFF00; color: #08080f; }

        /* Create card */
        .create-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          text-align: center;
          gap: 0.75rem;
          border: 1px dashed rgba(255,255,255,0.12);
          cursor: pointer;
        }
        .create-card:hover { border-color: rgba(204,255,0,0.3); }
        .create-card-icon svg { width: 40px; height: 40px; color: rgba(255,255,255,0.2); }
        .create-card h3 { margin: 0; color: #fff; font-weight: 600; font-size: 1rem; }
        .create-card p { margin: 0; color: rgba(255,255,255,0.4); font-size: 0.85rem; }
        .create-community-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.15);
          background: transparent;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .create-community-btn:hover { border-color: #CCFF00; color: #CCFF00; }

        @media (max-width: 900px) {
          .communities-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .communities-page { padding: 1rem; }
          .communities-grid { grid-template-columns: 1fr; }
          .page-header h1 { font-size: 1.4rem; }
        }
      `})]})}function wb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":String(t)}function iR(){const[t,e]=j.useState([]),[a,i]=j.useState([]),[o,c]=j.useState(!0);return j.useEffect(()=>{const d=async()=>{try{const{data:p}=await te.from("posts").select("content, created_at").not("content","is",null).eq("is_deleted",!1).order("created_at",{ascending:!1}).limit(200),g={},y=/#(\w+)/gi;if(p)for(const x of p){let w;for(;(w=y.exec(x.content))!==null;){const S=w[1].toLowerCase();g[S]=(g[S]||0)+1}}const v=Object.entries(g).sort((x,w)=>w[1]-x[1]).slice(0,8).map(([x,w])=>({tag:x,posts:wb(w)}));e(v)}catch(p){console.warn("Failed to fetch trends:",p)}},h=async()=>{try{const{data:p}=await te.from("follows").select("following_id");if(p&&p.length>0){const g={};p.forEach(v=>{g[v.following_id]=(g[v.following_id]||0)+1});const y=Object.entries(g).sort((v,x)=>x[1]-v[1]).slice(0,4).map(([v])=>v);if(y.length>0){const{data:v}=await te.from("profiles").select("id, username, display_name, avatar_url").in("id",y);if(v){const x={};v.forEach(S=>{x[S.id]=S});const w=y.map((S,T)=>{const C=x[S]||{};return{handle:`@${C.username||"user"}`,name:C.display_name||C.username||"User",avatarUrl:C.avatar_url||null,followers:wb(g[S])}});i(w)}}}}catch(p){console.warn("Failed to fetch creators:",p)}};Promise.all([d(),h()]).finally(()=>c(!1))},[]),{trendData:t,trendingCreators:a,loading:o}}const sR=[{id:"1",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:"creativemind",avatarColor:"#CCFF00",likes:234,comments:18,isVideo:!1},{id:"2",imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",username:"designpro",avatarColor:"#FF6B6B",likes:189,comments:24,isVideo:!1},{id:"3",imageUrl:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600",username:"codemaster",avatarColor:"#4ECDC4",likes:312,comments:42,isVideo:!1},{id:"4",imageUrl:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600",username:"artistico",avatarColor:"#A78BFA",likes:156,comments:11,isVideo:!0},{id:"5",imageUrl:"https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600",username:"pixelator",avatarColor:"#FFD93D",likes:278,comments:33,isVideo:!1},{id:"6",imageUrl:"https://images.unsplash.com/photo-1563089145-599997674d42?w=600",username:"neonwave",avatarColor:"#6BCB77",likes:445,comments:67,isVideo:!1},{id:"7",imageUrl:"https://images.unsplash.com/photo-1557683316-973673baf926?w=600",username:"cyberpunk",avatarColor:"#FF6B6B",likes:523,comments:89,isVideo:!0},{id:"8",imageUrl:"https://images.unsplash.com/photo-1574169208507-84376144848b?w=600",username:"abstractor",avatarColor:"#CCFF00",likes:167,comments:14,isVideo:!1},{id:"9",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:"dreamcast",avatarColor:"#A78BFA",likes:398,comments:55,isVideo:!1}],Sb=[{type:"trend",label:"FrameX",sub:"Trending"},{type:"trend",label:"Design",sub:"12.4K posts"},{type:"trend",label:"React",sub:"8.2K posts"},{type:"trend",label:"UI/UX",sub:"6.7K posts"},{type:"community",label:"Pixel Artists",sub:"12.4K members"},{type:"community",label:"Code Crew",sub:"8.2K members"},{type:"community",label:"Synthwave",sub:"6.7K members"},{type:"community",label:"Neo Creators",sub:"15.1K members"}],oR=[{tag:"framex",posts:"2.4K"},{tag:"design",posts:"1.8K"},{tag:"coding",posts:"1.2K"},{tag:"uiux",posts:"892"},{tag:"react",posts:"756"},{tag:"photography",posts:"654"},{tag:"art",posts:"543"},{tag:"music",posts:"432"}],lR=[{id:"for-you",label:"For You",icon:"✨"},{id:"trending",label:"Trending",icon:"🔥"},{id:"photos",label:"Photos",icon:"📷"},{id:"videos",label:"Videos",icon:"🎬"},{id:"communities",label:"Communities",icon:"👥"},{id:"technology",label:"Tech",icon:"💻"},{id:"gaming",label:"Gaming",icon:"🎮"},{id:"art",label:"Art",icon:"🎨"},{id:"music",label:"Music",icon:"🎵"}],jb=[{handle:"@creativemind",name:"Creative Mind",avatarColor:"#CCFF00",followers:"12.4K"},{handle:"@designpro",name:"Design Pro",avatarColor:"#FF6B6B",followers:"8.7K"},{handle:"@codemaster",name:"Code Master",avatarColor:"#4ECDC4",followers:"6.2K"},{handle:"@artistico",name:"Artistico",avatarColor:"#A78BFA",followers:"5.1K"}],kb=[{name:"Pixel Artists",icon:"🎨",members:"12.4K"},{name:"Code Crew",icon:"💻",members:"8.2K"},{name:"Synthwave",icon:"🎵",members:"6.7K"},{name:"Neo Creators",icon:"✨",members:"15.1K"},{name:"Photo Masters",icon:"📷",members:"9.3K"},{name:"Gaming Hub",icon:"🎮",members:"11.8K"},{name:"Design Talk",icon:"🎨",members:"7.5K"}],cR=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),uR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),dR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),hR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:u.jsx("path",{d:"M8 5v14l11-7z"})}),fR={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.04}}},pR={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:18}}};function mR(){const t=rn(),[e,a]=j.useState(!0),[i,o]=j.useState("for-you"),[c,d]=j.useState(""),[h,p]=j.useState(!1),{trendData:g,trendingCreators:y}=iR(),[v,x]=j.useState({}),[w,S]=j.useState({}),T=j.useRef(null),C=j.useRef(null),_=j.useRef(null),[R,O]=j.useState({users:[],hashtags:[],posts:[]}),[P,X]=j.useState(!1),W=j.useRef(null),G=j.useCallback(async E=>{if(E.length<1){O({users:[],hashtags:[],posts:[]});return}X(!0);try{const $=`%${E}%`,[ee,ce]=await Promise.all([te.from("profiles").select("id, username, display_name, avatar_url, bio").or(`username.ilike.${$},display_name.ilike.${$}`).limit(5),te.from("posts").select("id, content, created_at, profiles!inner(id, username, display_name, avatar_url)").ilike("content",$).order("created_at",{ascending:!1}).limit(10)]),be=new Set,N=[];if(ce.data){const I=/#(\w+)/gi;for(const J of ce.data){let ae;for(;(ae=I.exec(J.content))!==null;){const de=ae[1].toLowerCase();!be.has(de)&&de.includes(E.toLowerCase())&&(be.add(de),N.push({tag:de,posts:"—"}))}}}O({users:ee.data||[],hashtags:N.slice(0,5),posts:ce.data||[]})}catch($){console.warn("Search error:",$),O({users:[],hashtags:[],posts:[]})}finally{X(!1)}},[]);j.useEffect(()=>{if(W.current&&clearTimeout(W.current),!c.trim()){O({users:[],hashtags:[],posts:[]});return}return W.current=setTimeout(()=>G(c.trim()),300),()=>{W.current&&clearTimeout(W.current)}},[c,G]),j.useEffect(()=>{const E=setTimeout(()=>a(!1),1800);return()=>clearTimeout(E)},[]);const q=Ot(E=>E.posts),Z=Ot(E=>E.fetchFeed),re=j.useMemo(()=>{if((q==null?void 0:q.length)>0){const E=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];return q.filter($=>$.image_url||$.video_url).map(($,ee)=>{var ce,be;return{id:$.id,imageUrl:$.image_url||"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:((ce=$.profiles)==null?void 0:ce.username)||((be=$.profiles)==null?void 0:be.display_name)||"user",avatarColor:E[ee%E.length],likes:$.likes??0,comments:$.comments??0,isVideo:!!$.video_url}})}return sR},[q]);j.useEffect(()=>{q!=null&&q.length||Z()},[]),j.useEffect(()=>{const E=$=>{T.current&&!T.current.contains($.target)&&p(!1)};return document.addEventListener("mousedown",E),()=>document.removeEventListener("mousedown",E)},[]);const xe=j.useMemo(()=>{if(!c.trim())return Sb;const E=c.toLowerCase();return Sb.filter($=>$.label.toLowerCase().includes(E)||$.sub.toLowerCase().includes(E))},[c]),pe=E=>{x($=>({...$,[E]:!$[E]}))},Ce=E=>{S($=>({...$,[E]:!$[E]}))},Le=E=>{switch(E){case"user":return"👤";case"hashtag":return"#️⃣";case"post":return"📄";case"community":return"👥";default:return"•"}},me=()=>u.jsx("div",{className:"explore-skeleton-grid",children:Array.from({length:6}).map((E,$)=>u.jsx("div",{className:"explore-skeleton-item",style:{height:$%3===0?280:$%3===1?200:240},children:u.jsx("div",{className:"explore-shimmer"})},$))});return u.jsxs("div",{className:"explore-page",children:[u.jsxs("div",{className:"explore-search-wrapper",ref:T,children:[u.jsxs("div",{className:`explore-search ${h?"explore-search-focused":""}`,children:[u.jsx(cR,{}),u.jsx("input",{type:"text",placeholder:"Search posts, creators, hashtags...",value:c,onChange:E=>d(E.target.value),onFocus:()=>p(!0)}),c&&u.jsx("button",{className:"explore-search-clear",onClick:()=>d(""),children:"✕"})]}),u.jsx(tn,{children:h&&u.jsx(we.div,{className:"explore-suggestions",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},children:c.trim()?P?u.jsx("div",{className:"explore-search-status",children:"Searching..."}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Users"}),R.users.length>0?R.users.map((E,$)=>{var ee,ce;return u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:$*.03},onClick:()=>t(`/profile/${E.id}`),style:{cursor:"pointer"},children:[u.jsx("span",{className:"explore-suggestion-icon",style:{background:E.avatar_url?`url(${E.avatar_url}) center/cover`:"var(--surface)",borderRadius:"50%",overflow:"hidden"},children:!E.avatar_url&&(((ee=E.display_name)==null?void 0:ee[0])||((ce=E.username)==null?void 0:ce[0])||"?")}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:E.display_name||E.username}),u.jsxs("span",{className:"explore-suggestion-sub",children:["@",E.username]})]})]},`user-${E.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No users found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Hashtags"}),R.hashtags.length>0?R.hashtags.map((E,$)=>u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:$*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"#️⃣"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsxs("span",{className:"explore-suggestion-label",children:["#",E.tag]}),u.jsxs("span",{className:"explore-suggestion-sub",children:[E.posts," posts"]})]})]},`tag-${E.tag}`)):u.jsx("div",{className:"explore-search-empty",children:"No hashtags found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Posts"}),R.posts.length>0?R.posts.map((E,$)=>{var ee,ce;return u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:$*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"📄"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:E.content.length>60?E.content.slice(0,60)+"...":E.content}),u.jsxs("span",{className:"explore-suggestion-sub",children:["by @",((ee=E.profiles)==null?void 0:ee.username)||((ce=E.profiles)==null?void 0:ce.display_name)||"user"]})]})]},`post-${E.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No posts found"})]}),!P&&R.users.length===0&&R.hashtags.length===0&&R.posts.length===0&&u.jsxs("div",{className:"explore-search-empty explore-search-empty-all",children:['No results found for "',c,'"']})]}):xe.map((E,$)=>u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:$*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:Le(E.type)}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:E.label}),u.jsx("span",{className:"explore-suggestion-sub",children:E.sub})]})]},`${E.type}-${E.label}`))})})]}),u.jsx("div",{className:"explore-hashtags-wrapper",children:u.jsx("div",{className:"explore-hashtags",ref:C,children:((g==null?void 0:g.length)>0?g:oR).map(E=>u.jsxs("button",{className:"explore-hashtag-pill",children:[u.jsx("span",{className:"explore-hashtag-sign",children:"#"}),E.tag,u.jsx("span",{className:"explore-hashtag-count",children:E.posts})]},E.tag))})}),u.jsx("div",{className:"explore-tabs-wrapper",children:u.jsxs("div",{className:"explore-tabs",ref:_,children:[lR.map(E=>u.jsxs("button",{className:`explore-tab ${i===E.id?"explore-tab-active":""}`,onClick:()=>o(E.id),children:[u.jsx("span",{className:"explore-tab-icon",children:E.icon}),u.jsx("span",{className:"explore-tab-label",children:E.label})]},E.id)),u.jsx(we.div,{className:"explore-tab-indicator",layoutId:"active-tab",transition:{type:"spring",stiffness:400,damping:30}})]})}),u.jsxs("div",{className:"explore-content",children:[u.jsx("div",{className:"explore-grid-section",children:e?u.jsx(me,{}):u.jsx(we.div,{className:"explore-masonry",variants:fR,initial:"hidden",animate:"visible",children:u.jsx(tn,{mode:"popLayout",children:re.map(E=>u.jsx(we.div,{className:"explore-masonry-item",variants:pR,layout:!0,exit:{opacity:0,scale:.9,transition:{duration:.2}},children:u.jsxs("div",{className:"explore-masonry-img-wrap",children:[u.jsx("img",{src:E.imageUrl,alt:`by ${E.username}`,loading:"lazy"}),E.isVideo&&u.jsx("div",{className:"explore-video-badge",children:u.jsx(hR,{})}),u.jsxs("div",{className:"explore-masonry-overlay",children:[u.jsxs("div",{className:"explore-masonry-stats",children:[u.jsxs("span",{children:[u.jsx(uR,{})," ",E.likes>=1e3?`${(E.likes/1e3).toFixed(1)}K`:E.likes]}),u.jsxs("span",{children:[u.jsx(dR,{})," ",E.comments]})]}),u.jsxs("div",{className:"explore-masonry-creator",children:[u.jsx("span",{className:"explore-masonry-avatar",style:{background:E.avatarColor},children:E.username.charAt(0)}),u.jsx("span",{className:"explore-masonry-username",children:E.username})]})]})]})},E.id))})},i)}),u.jsxs("aside",{className:"explore-sidebar",children:[u.jsxs("div",{className:"explore-sidebar-section",children:[u.jsx("h3",{className:"explore-sidebar-title",children:"Trending Creators"}),u.jsx("div",{className:"explore-creators-list",children:((y==null?void 0:y.length)>0?y:jb).map(E=>u.jsxs("div",{className:"explore-creator-row",children:[u.jsx("div",{className:"explore-creator-avatar",style:{background:E.avatarColor},children:E.name.charAt(0)}),u.jsxs("div",{className:"explore-creator-info",children:[u.jsx("span",{className:"explore-creator-name",children:E.name}),u.jsx("span",{className:"explore-creator-handle",children:E.handle}),u.jsxs("span",{className:"explore-creator-followers",children:[E.followers," followers"]})]}),u.jsx("button",{className:`explore-follow-btn ${v[E.handle]?"explore-following":""}`,onClick:()=>pe(E.handle),children:v[E.handle]?"Following":"Follow"})]},E.handle))})]}),u.jsxs("div",{className:"explore-sidebar-section",children:[u.jsx("h3",{className:"explore-sidebar-title",children:"Suggested Communities"}),u.jsx("div",{className:"explore-communities-list",children:kb.slice(0,5).map(E=>u.jsxs("div",{className:"explore-community-row",children:[u.jsx("span",{className:"explore-community-icon",children:E.icon}),u.jsxs("div",{className:"explore-community-info",children:[u.jsx("span",{className:"explore-community-name",children:E.name}),u.jsxs("span",{className:"explore-community-members",children:[E.members," members"]})]}),u.jsx("button",{className:`explore-join-btn ${w[E.name]?"explore-joined":""}`,onClick:()=>Ce(E.name),children:w[E.name]?"Joined":"Join"})]},E.name))})]})]})]}),u.jsxs("div",{className:"explore-mobile-section",children:[u.jsx("h3",{className:"explore-mobile-title",children:"Trending Creators"}),u.jsx("div",{className:"explore-mobile-scroll",children:((y==null?void 0:y.length)>0?y:jb).map(E=>u.jsxs("div",{className:"explore-mobile-creator",children:[u.jsx("div",{className:"explore-mobile-creator-avatar",style:{background:E.avatarColor},children:E.name.charAt(0)}),u.jsx("span",{className:"explore-mobile-creator-name",children:E.name}),u.jsx("span",{className:"explore-mobile-creator-followers",children:E.followers}),u.jsx("button",{className:`explore-mobile-follow-btn ${v[E.handle]?"explore-following":""}`,onClick:()=>pe(E.handle),children:v[E.handle]?"Following":"Follow"})]},E.handle))})]}),u.jsxs("div",{className:"explore-mobile-section",children:[u.jsx("h3",{className:"explore-mobile-title",children:"Suggested Communities"}),u.jsx("div",{className:"explore-mobile-scroll",children:kb.slice(0,6).map(E=>u.jsxs("div",{className:"explore-mobile-community",children:[u.jsx("span",{className:"explore-mobile-community-icon",children:E.icon}),u.jsx("span",{className:"explore-mobile-community-name",children:E.name}),u.jsx("span",{className:"explore-mobile-community-members",children:E.members}),u.jsx("button",{className:`explore-mobile-join-btn ${w[E.name]?"explore-joined":""}`,onClick:()=>Ce(E.name),children:w[E.name]?"Joined":"Join"})]},E.name))})]}),u.jsx("style",{children:`
        /* ────────── Layout ────────── */
        .explore-page {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem;
          padding-bottom: 5rem;
        }

        /* ────────── Search ────────── */
        .explore-search-wrapper {
          position: relative;
          margin-bottom: 0.75rem;
          z-index: 50;
        }
        .explore-search {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.7rem 1.1rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          transition: all 0.25s ease;
        }
        .explore-search-focused {
          border-color: var(--accent);
          background: var(--bg-alt);
          box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 8%, transparent);
        }
        .explore-search svg {
          color: var(--text-secondary);
          flex-shrink: 0;
        }
        .explore-search input {
          flex: 1;
          background: none;
          border: none;
          outline: none;
          color: var(--text);
          font-size: 0.9rem;
          font-family: inherit;
        }
        .explore-search input::placeholder {
          color: var(--text-secondary);
        }
        .explore-search-clear {
          background: none;
          border: none;
          color: var(--text-secondary);
          cursor: pointer;
          font-size: 0.85rem;
          padding: 2px;
          line-height: 1;
        }
        .explore-search-clear:hover {
          color: var(--text);
        }

        /* ────────── Suggestions ────────── */
        .explore-suggestions {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: var(--bg-alt);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 0.5rem;
          overflow: hidden;
          box-shadow: 0 12px 40px color-mix(in srgb, var(--text) 4%, transparent);
        }
        .explore-suggestion-item {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          padding: 0.55rem 0.6rem;
          border-radius: 10px;
          cursor: pointer;
          transition: background 0.15s;
        }
        .explore-suggestion-item:hover {
          background: var(--surface);
        }
        .explore-suggestion-icon {
          font-size: 1.1rem;
          flex-shrink: 0;
          width: 28px;
          height: 28px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .explore-suggestion-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .explore-suggestion-label {
          font-size: 0.85rem;
          color: var(--text);
          font-weight: 500;
        }
        .explore-suggestion-sub {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        /* ────────── Search Results ────────── */
        .explore-search-status {
          text-align: center;
          padding: 0.75rem;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .explore-search-section {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          padding: 0.75rem 0;
          border-top: 1px solid var(--border);
        }
        .explore-search-section:first-of-type {
          border-top: none;
          padding-top: 0;
        }
        .explore-search-section-title {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 0 0.25rem 0.25rem;
        }
        .explore-search-empty {
          text-align: center;
          padding: 0.75rem 0;
          color: var(--text-secondary);
          font-size: 0.85rem;
        }
        .explore-search-empty-all {
          text-align: center;
          padding: 1.5rem 1rem;
          color: var(--text-secondary);
          font-size: 1rem;
        }

        /* ────────── Hashtags ────────── */
        .explore-hashtags-wrapper {
          margin-bottom: 1rem;
          overflow: hidden;
        }
        .explore-hashtags {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .explore-hashtags::-webkit-scrollbar {
          display: none;
        }
        .explore-hashtag-pill {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.4rem 0.9rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 100px;
          color: var(--text-secondary);
          font-size: 0.8rem;
          font-family: inherit;
          white-space: nowrap;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
        }
        .explore-hashtag-pill:hover {
          border-color: var(--accent);
          color: var(--accent);
          background: color-mix(in srgb, var(--accent) 6%, transparent);
        }
        .explore-hashtag-sign {
          color: var(--accent);
          font-weight: 600;
        }
        .explore-hashtag-count {
          font-size: 0.7rem;
          color: var(--text-secondary);
          opacity: 0.6;
        }

        /* ────────── Category Tabs ────────── */
        .explore-tabs-wrapper {
          margin-bottom: 1.25rem;
          overflow: hidden;
        }
        .explore-tabs {
          display: flex;
          gap: 0.35rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          position: relative;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .explore-tabs::-webkit-scrollbar {
          display: none;
        }
        .explore-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.5rem 0.85rem;
          background: transparent;
          border: none;
          border-radius: 10px;
          color: var(--text-secondary);
          font-size: 0.82rem;
          font-family: inherit;
          white-space: nowrap;
          cursor: pointer;
          transition: color 0.2s, background 0.2s;
          flex-shrink: 0;
        }
        .explore-tab:hover {
          color: var(--text);
          background: var(--surface);
        }
        .explore-tab-active {
          color: var(--accent) !important;
          background: color-mix(in srgb, var(--accent) 7%, transparent);
        }
        .explore-tab-icon {
          font-size: 0.9rem;
        }
        .explore-tab-indicator {
          display: none;
        }
        .explore-tab-active .explore-tab-indicator {
          display: block;
        }

        /* ────────── Content Layout ────────── */
        .explore-content {
          display: flex;
          gap: 1.5rem;
        }
        .explore-grid-section {
          flex: 1;
          min-width: 0;
        }

        /* ────────── Masonry Grid ────────── */
        .explore-masonry {
          column-count: 3;
          column-gap: 0.75rem;
        }
        .explore-masonry-item {
          break-inside: avoid;
          margin-bottom: 0.75rem;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
        }
        .explore-masonry-img-wrap {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: var(--surface);
          cursor: pointer;
        }
        .explore-masonry-img-wrap img {
          display: block;
          width: 100%;
          height: auto;
          transition: transform 0.4s ease;
        }
        .explore-masonry-img-wrap:hover img {
          transform: scale(1.05);
        }
        .explore-video-badge {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          border-radius: 8px;
          color: #fff;
          opacity: 0.9;
        }
        .explore-masonry-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.7) 0%,
            rgba(0,0,0,0.2) 40%,
            transparent 60%
          );
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 0.9rem;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .explore-masonry-img-wrap:hover .explore-masonry-overlay {
          opacity: 1;
        }
        .explore-masonry-stats {
          display: flex;
          gap: 0.8rem;
          margin-bottom: 0.5rem;
        }
        .explore-masonry-stats span {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.78rem;
          color: #fff;
          font-weight: 500;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }
        .explore-masonry-stats span svg {
          width: 14px;
          height: 14px;
        }
        .explore-masonry-creator {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .explore-masonry-avatar {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.6rem;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          border: 1.5px solid rgba(255,255,255,0.3);
        }
        .explore-masonry-username {
          font-size: 0.75rem;
          color: #fff;
          font-weight: 500;
          text-shadow: 0 1px 3px rgba(0,0,0,0.5);
        }

        /* ────────── Skeleton ────────── */
        .explore-skeleton-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.75rem;
        }
        .explore-skeleton-item {
          border-radius: 12px;
          overflow: hidden;
          background: var(--surface);
          position: relative;
        }
        .explore-shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,0.04) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: exploreShimmer 1.8s ease-in-out infinite;
        }
        @keyframes exploreShimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ────────── Sidebar ────────── */
        .explore-sidebar {
          width: 280px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .explore-sidebar-section {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1rem;
        }
        .explore-sidebar-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.85rem;
        }

        /* ── Creator Row ── */
        .explore-creators-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .explore-creator-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .explore-creator-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: var(--accent-text);
          flex-shrink: 0;
        }
        .explore-creator-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .explore-creator-name {
          font-size: 0.82rem;
          color: var(--text);
          font-weight: 500;
        }
        .explore-creator-handle {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .explore-creator-followers {
          font-size: 0.65rem;
          color: var(--text-secondary);
          opacity: 0.7;
        }
        .explore-follow-btn {
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .explore-follow-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .explore-following {
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ── Community Row ── */
        .explore-communities-list {
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }
        .explore-community-row {
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }
        .explore-community-icon {
          font-size: 1.4rem;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .explore-community-info {
          flex: 1;
          min-width: 0;
          display: flex;
          flex-direction: column;
          line-height: 1.3;
        }
        .explore-community-name {
          font-size: 0.82rem;
          color: var(--text);
          font-weight: 500;
        }
        .explore-community-members {
          font-size: 0.7rem;
          color: var(--text-secondary);
        }
        .explore-join-btn {
          padding: 0.3rem 0.75rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.75rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
          flex-shrink: 0;
          white-space: nowrap;
        }
        .explore-join-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }
        .explore-joined {
          background: color-mix(in srgb, var(--accent) 10%, transparent);
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ────────── Mobile Carousels ────────── */
        .explore-mobile-section {
          display: none;
          margin-top: 1.25rem;
        }
        .explore-mobile-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: var(--text);
          margin: 0 0 0.75rem;
        }
        .explore-mobile-scroll {
          display: flex;
          gap: 0.7rem;
          overflow-x: auto;
          padding-bottom: 0.25rem;
          scrollbar-width: none;
        }
        .explore-mobile-scroll::-webkit-scrollbar {
          display: none;
        }

        .explore-mobile-creator {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.35rem;
          min-width: 100px;
          padding: 0.75rem 0.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          flex-shrink: 0;
        }
        .explore-mobile-creator-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-text);
        }
        .explore-mobile-creator-name {
          font-size: 0.78rem;
          color: var(--text);
          font-weight: 500;
          text-align: center;
        }
        .explore-mobile-creator-followers {
          font-size: 0.65rem;
          color: var(--text-secondary);
        }
        .explore-mobile-follow-btn {
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
        }
        .explore-mobile-follow-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        .explore-mobile-community {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
          min-width: 110px;
          padding: 0.75rem 0.5rem;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          flex-shrink: 0;
        }
        .explore-mobile-community-icon {
          font-size: 1.6rem;
        }
        .explore-mobile-community-name {
          font-size: 0.78rem;
          color: var(--text);
          font-weight: 500;
          text-align: center;
        }
        .explore-mobile-community-members {
          font-size: 0.65rem;
          color: var(--text-secondary);
        }
        .explore-mobile-join-btn {
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.7rem;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.2s;
        }
        .explore-mobile-join-btn:hover {
          border-color: var(--accent);
          color: var(--accent);
        }

        /* ────────── Responsive ────────── */
        @media (min-width: 1024px) {
          .explore-sidebar {
            display: flex;
          }
          .explore-mobile-section {
            display: none;
          }
        }

        @media (max-width: 1023px) {
          .explore-sidebar {
            display: none;
          }
          .explore-mobile-section {
            display: block;
          }
          .explore-masonry {
            column-count: 2;
          }
        }

        @media (max-width: 600px) {
          .explore-page {
            padding: 0.75rem;
            padding-bottom: 5rem;
          }
          .explore-masonry {
            column-count: 2;
            column-gap: 0.5rem;
          }
          .explore-masonry-item {
            margin-bottom: 0.5rem;
          }
          .explore-skeleton-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }
          .explore-tab {
            padding: 0.4rem 0.65rem;
            font-size: 0.78rem;
          }
          .explore-tab-icon {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 380px) {
          .explore-masonry {
            column-count: 2;
          }
        }
      `})]})}const ga=Fr((t,e)=>({notifications:[],unreadCount:0,isLoading:!1,fetchNotifications:async()=>{t({isLoading:!0});try{const{data:a,error:i}=await te.from("notifications").select(`
          *,
          actor:actor_id (id, username, display_name, avatar_url)
        `).order("created_at",{ascending:!1}).limit(50);if(i)throw i;const o=(a||[]).filter(c=>!c.is_read).length;t({notifications:a||[],unreadCount:o,isLoading:!1})}catch(a){t({isLoading:!1}),console.error("Fetch notifications error:",a.message)}},addNotificationRealtime:a=>{t(i=>i.notifications.some(c=>c.id===a.id)?i:{notifications:[a,...i.notifications],unreadCount:i.unreadCount+(a.is_read?0:1)})},markAsRead:async a=>{const{error:i}=await te.from("notifications").update({is_read:!0}).eq("id",a);if(i){console.error("Mark as read error:",i.message);return}t(o=>({notifications:o.notifications.map(c=>c.id===a?{...c,is_read:!0}:c),unreadCount:Math.max(0,o.unreadCount-1)}))},markAllAsRead:async()=>{const{error:a}=await te.from("notifications").update({is_read:!0}).eq("is_read",!1);if(a){console.error("Mark all as read error:",a.message);return}t(i=>({notifications:i.notifications.map(o=>({...o,is_read:!0})),unreadCount:0}))}}));function gR(){const t=mt(p=>p.user),e=ga(p=>p.notifications),a=ga(p=>p.unreadCount),i=ga(p=>p.fetchNotifications),o=ga(p=>p.markAllAsRead),c=ga(p=>p.addNotificationRealtime),[d,h]=j.useState([]);return j.useEffect(()=>{i()},[i]),j.useEffect(()=>{if(!t)return;const p=te.channel("realtime-notifications").on("postgres_changes",{event:"INSERT",schema:"public",table:"notifications",filter:`user_id=eq.${t.id}`},async g=>{const{data:y,error:v}=await te.from("notifications").select("*, actor:actor_id (id, username, display_name, avatar_url)").eq("id",g.new.id).single();v||!y||(h(x=>x.some(w=>w.id===y.id)?x:[y,...x]),c(y))}).subscribe();return()=>{te.removeChannel(p)}},[t,c]),{liveNotifications:d,unreadCount:a,markAllAsRead:o,notificationEvents:e}}const ya={heartFilled:u.jsx("svg",{viewBox:"0 0 24 24",fill:"#ff6464",stroke:"#ff6464",strokeWidth:"2",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),messageCircle:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 11 12 14 22 4"}),u.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"}),u.jsx("polyline",{points:"9 11 12 14 22 4"})]}),bellOff:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"}),u.jsx("path",{d:"M18.63 13A17.89 17.89 0 0118 8"}),u.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"}),u.jsx("path",{d:"M18 8a6 6 0 00-9.33-5"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),tag:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"}),u.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})},_b={heart:ya.heartFilled,user:ya.user,message:ya.messageCircle,users:ya.users,tag:ya.tag};function yR(){const{notificationState:t=[],unreadCount:e,markAllAsRead:a}=gR(),[i,o]=j.useState(!1),c=a,d=t.filter(p=>{const g=p.time.match(/(\d+)([mh])/);if(!g)return!1;const[,y,v]=g;return v==="m"?parseInt(y)<60:v==="h"?parseInt(y)<24:!1}),h=t.filter(p=>{const g=p.time.match(/(\d+)([dh])/);if(!g)return!0;const[,y,v]=g;return v==="h"?parseInt(y)>=1:!0});return i||t.length===0?u.jsxs("div",{className:"page-enter",children:[u.jsx("div",{className:"notifications-page",children:u.jsxs("div",{className:"empty-state glass",children:[u.jsx("div",{className:"empty-icon",children:ya.bellOff}),u.jsx("h3",{children:"All caught up!"}),u.jsx("p",{children:"No new notifications. You're up to date."})]})}),u.jsx("style",{children:Tb})]}):u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"notifications-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsxs("div",{className:"page-header-left",children:[u.jsx("h1",{children:"Notifications"}),e>0&&u.jsx("span",{className:"unread-badge",children:e})]}),u.jsxs("button",{className:"mark-all-btn",onClick:c,disabled:e===0,children:[ya.checkAll," Mark all as read"]})]}),d.length>0&&u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Today"}),u.jsx("div",{className:"notif-list",children:u.jsx(tn,{mode:"popLayout",children:d.map((p,g)=>u.jsxs(we.div,{layout:!0,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{type:"spring",stiffness:300,damping:25},className:`notif-item glass ${p.read?"notif-read":""}`,children:[u.jsx("div",{className:"notif-icon",style:{background:p.read?"var(--surface)":"color-mix(in srgb, var(--accent) 10%, transparent)"},children:_b[p.icon]}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:p.text}),u.jsx("span",{className:"notif-time",children:p.time})]}),!p.read&&u.jsx("div",{className:"notif-dot"})]},`today-${p.type}-${g}`))})})]}),u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Earlier"}),u.jsx("div",{className:"notif-list",children:u.jsx(tn,{mode:"popLayout",children:h.map((p,g)=>u.jsxs(we.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,x:20},transition:{duration:.2},className:"notif-item glass notif-read",children:[u.jsx("div",{className:"notif-icon",style:{background:"var(--surface)"},children:_b[p.icon]}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:p.text}),u.jsx("span",{className:"notif-time",children:p.time})]})]},`earlier-${p.type}-${g}`))})})]})]}),u.jsx("style",{children:Tb})]})}const Tb=`
  .notifications-page {
    padding: 1.5rem;
    max-width: 800px;
    margin: 0 auto;
    animation: fadeSlideUp 0.5s ease;
  }
  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .glass {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
  }

  .page-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.75rem;
    gap: 1rem;
  }
  .page-header-left { display: flex; align-items: center; gap: 0.75rem; }
  .page-header h1 { font-size: 1.75rem; font-weight: 700; color: var(--text); margin: 0; }
  .unread-badge {
    padding: 0.15rem 0.55rem;
    border-radius: 100px;
    background: var(--accent);
    color: var(--accent-text);
    font-size: 0.8rem;
    font-weight: 600;
  }
  .mark-all-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid var(--border);
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .mark-all-btn svg { width: 16px; height: 16px; }
  .mark-all-btn:hover:not(:disabled) { border-color: var(--accent); color: var(--accent); }
  .mark-all-btn:disabled { opacity: 0.4; cursor: default; }

  .notif-section { margin-bottom: 1.5rem; }
  .notif-section-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--text-secondary);
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin: 0 0 0.75rem;
  }
  .notif-list { display: flex; flex-direction: column; gap: 0.5rem; }
  .notif-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.25rem;
    transition: transform 0.2s;
  }
  .notif-item:hover { transform: translateX(4px); }
  .notif-item.notif-read { opacity: 0.65; }
  .notif-icon {
    width: 40px; height: 40px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  .notif-icon svg { width: 20px; height: 20px; }
  .notif-icon svg { color: var(--accent); }
  .notif-read .notif-icon svg { color: var(--text-secondary); }
  .notif-content { flex: 1; min-width: 0; }
  .notif-text {
    margin: 0 0 0.2rem;
    font-size: 0.9rem;
    color: var(--text);
    line-height: 1.4;
  }
  .notif-time { font-size: 0.78rem; color: var(--text-secondary); }
  .notif-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--accent);
    flex-shrink: 0;
    animation: pulse-dot 2s infinite;
  }
  @keyframes pulse-dot {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem 2rem;
    text-align: center;
    gap: 0.75rem;
  }
  .empty-icon svg { width: 56px; height: 56px; color: color-mix(in srgb, var(--text) 12%, transparent); }
  .empty-state h3 { margin: 0; color: var(--text); font-weight: 600; }
  .empty-state p { margin: 0; color: var(--text-secondary); font-size: 0.9rem; }

  @media (max-width: 768px) {
    .page-header { flex-direction: column; align-items: flex-start; }
    .mark-all-btn { width: 100%; justify-content: center; }
    .notif-item { padding: 0.85rem 1rem; }
  }
  @media (max-width: 600px) {
    .notifications-page { padding: 1rem; }
    .page-header h1 { font-size: 1.4rem; }
  }
`,Eb=Fr(t=>({metrics:null,isLoading:!1,dateRange:"7d",fetchMetrics:async(e="7d")=>{t({isLoading:!0,dateRange:e});const a=new Date;let i;switch(e){case"24h":i=new Date(a-1440*60*1e3);break;case"7d":i=new Date(a-10080*60*1e3);break;case"30d":i=new Date(a-720*60*60*1e3);break;case"90d":i=new Date(a-2160*60*60*1e3);break;default:i=new Date(a-10080*60*1e3)}try{const[o,c,d,h]=await Promise.allSettled([te.from("posts").select("id",{count:"exact",head:!0}).gte("created_at",i.toISOString()),te.from("likes").select("id",{count:"exact",head:!0}).gte("created_at",i.toISOString()),te.from("comments").select("id",{count:"exact",head:!0}).gte("created_at",i.toISOString()),te.from("follows").select("id",{count:"exact",head:!0}).gte("created_at",i.toISOString())]),p={posts:o.status==="fulfilled"?o.value.count??0:0,likes:c.status==="fulfilled"?c.value.count??0:0,comments:d.status==="fulfilled"?d.value.count??0:0,follows:h.status==="fulfilled"?h.value.count??0:0};t({metrics:p,isLoading:!1})}catch(o){t({isLoading:!1}),console.error("Fetch metrics error:",o.message)}},getMetricHistory:async(e="posts",a="7d")=>{const i=new Date;let o;switch(a){case"24h":o=new Date(i-1440*60*1e3);break;case"7d":o=new Date(i-10080*60*1e3);break;case"30d":o=new Date(i-720*60*60*1e3);break;case"90d":o=new Date(i-2160*60*60*1e3);break;default:o=new Date(i-10080*60*1e3)}const d={posts:"posts",likes:"likes",comments:"comments",follows:"follows"}[e];if(!d)return[];try{const{data:h,error:p}=await te.from(d).select("created_at").gte("created_at",o.toISOString()).order("created_at",{ascending:!0});if(p)throw p;const g={},y=a==="24h"?3600*1e3:1440*60*1e3;for(const v of h||[]){const w=new Date(Math.floor(new Date(v.created_at).getTime()/y)*y).toISOString();g[w]=(g[w]||0)+1}return Object.entries(g).map(([v,x])=>({date:v,value:x}))}catch(h){return console.error(`Fetch ${e} history error:`,h.message),[]}}}));function vR(){const t=Eb(a=>a.metrics),e=Eb(a=>a.fetchMetrics);return j.useEffect(()=>{t||e()},[t,e]),{analyticsData:t}}const Cb={connecting:{color:"#fbbf24",label:"Connecting...",pulse:!0},connected:{color:"#22c55e",label:"Connected",pulse:!1},disconnected:{color:"#ef4444",label:"Disconnected",pulse:!1},reconnecting:{color:"#f97316",label:"Reconnecting...",pulse:!0}};function uw({variant:t="sidebar"}){const[e,a]=j.useState(!1),i=j.useRef(null);j.useEffect(()=>()=>clearTimeout(i.current),[]);const{connectionStatus:o,isFallbackMode:c}=window.__FRAMEX_REALTIME__||{connectionStatus:"connecting",isFallbackMode:!0};j.useEffect(()=>{a(!0),clearTimeout(i.current),o==="connected"&&(i.current=setTimeout(()=>a(!1),3e3))},[o]);const d=Cb[o]||Cb.connecting;return t==="sidebar"?u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",cursor:"pointer",position:"relative"},title:`${d.label}${c?" (Simulated)":""}`,children:[u.jsx("span",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none",flexShrink:0}}),u.jsx("span",{style:{fontSize:11,color:"var(--text-secondary, rgba(255,255,255,0.4))",fontFamily:"monospace"},children:d.label}),c&&u.jsx("span",{style:{fontSize:9,padding:"1px 5px",borderRadius:4,backgroundColor:"var(--surface, rgba(255,255,255,0.05))",color:"var(--text-secondary, rgba(255,255,255,0.4))"},children:"SIM"})]}):u.jsx("div",{style:{position:"relative",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},title:`${d.label}${c?" (Simulated)":""}`,children:u.jsx("span",{style:{width:6,height:6,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none"}})})}const bR={liveViewers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),activeUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),totalUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M22 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),postsPerMinute:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),u.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),engagementRate:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),dailyActiveUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),newSignupsToday:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),u.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),u.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),avgSessionDuration:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"12 6 12 12 16 14"})]})},xR={liveViewers:"Live Viewers",activeUsers:"Active Users",totalUsers:"Total Users",postsPerMinute:"Posts / Min",engagementRate:"Engagement Rate",dailyActiveUsers:"DAU",newSignupsToday:"New Signups",avgSessionDuration:"Avg Session"},wR={liveViewers:"#CCFF00",activeUsers:"#60a5fa",totalUsers:"#a78bfa",postsPerMinute:"#f472b6",engagementRate:"#34d399",dailyActiveUsers:"#fbbf24",newSignupsToday:"#fb923c",avgSessionDuration:"#22d3ee"};function SR({value:t,color:e}){const a=Array.from({length:20},(o,c)=>{const d=t*(1+(Math.random()-.5)*.4);return{x:c*5,y:30-d/100*25}}),i=a.map((o,c)=>`${c===0?"M":"L"}${o.x},${o.y}`).join(" ");return u.jsxs("svg",{width:"100",height:"30",style:{flexShrink:0},children:[u.jsx("path",{d:i,fill:"none",stroke:e,strokeWidth:"1.5",opacity:"0.6"}),a.map((o,c)=>u.jsx("circle",{cx:o.x,cy:o.y,r:"1.5",fill:e,opacity:"0.4"},c))]})}function Ab({metricKey:t,metric:e,index:a}){var d,h;const i=wR[t]||"#CCFF00",o=typeof e.current=="number"?e.current.toLocaleString():e.current,c=(h=(d=e.change)==null?void 0:d.startsWith)==null?void 0:h.call(d,"+");return u.jsxs(we.div,{className:"analytics-card glass",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:a*.05,type:"spring",stiffness:100},children:[u.jsxs("div",{className:"analytics-card-header",children:[u.jsx("div",{className:"analytics-card-icon",style:{background:`${i}15`,color:i},children:bR[t]}),u.jsx("span",{className:"analytics-card-change",style:{color:c?"#34d399":"#f87171"},children:e.change})]}),u.jsx("div",{className:"analytics-card-value",children:o}),u.jsx("div",{className:"analytics-card-label",children:xR[t]}),u.jsx(SR,{value:typeof e.current=="number"?e.current:parseInt(e.current)||50,color:i})]})}function jR(){const{analyticsData:t}=vR(),[e,a]=j.useState("1h"),i=Object.entries(t),o=i.slice(0,4),c=i.slice(4);return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"analytics-dashboard",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"analytics-title",children:"Live Analytics"}),u.jsx("p",{className:"analytics-subtitle",children:"Real-time dashboard metrics"})]}),u.jsxs("div",{className:"analytics-header-right",children:[u.jsx(uw,{variant:"sidebar"}),u.jsx("div",{className:"analytics-time-selector",children:["1h","24h","7d","30d"].map(d=>u.jsx("button",{className:`analytics-time-btn ${e===d?"active":""}`,onClick:()=>a(d),children:d},d))})]})]}),u.jsx("div",{className:"analytics-primary-grid",children:o.map(([d,h],p)=>u.jsx(Ab,{metricKey:d,metric:h,index:p},d))}),u.jsx("div",{className:"analytics-secondary-grid",children:c.map(([d,h],p)=>u.jsx(Ab,{metricKey:d,metric:h,index:p+4},d))}),u.jsxs("div",{className:"analytics-footer glass",children:[u.jsx("div",{className:"analytics-footer-dot"}),u.jsx("span",{children:"All metrics updating in real-time • Auto-refresh enabled"})]})]}),u.jsx("style",{children:kR})]})}const kR=`
  .analytics-dashboard {
    padding: 1.5rem;
    max-width: 960px;
    margin: 0 auto;
    animation: fadeSlideUp 0.5s ease;
  }
  .analytics-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    gap: 1rem;
    flex-wrap: wrap;
  }
  .analytics-title {
    font-family: 'Playfair Display', Georgia, serif;
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    margin: 0;
  }
  .analytics-subtitle {
    color: rgba(255,255,255,0.4);
    font-size: 0.85rem;
    margin: 0.25rem 0 0;
  }
  .analytics-header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .analytics-time-selector {
    display: flex;
    background: rgba(255,255,255,0.05);
    border-radius: 10px;
    padding: 3px;
    gap: 2px;
  }
  .analytics-time-btn {
    padding: 0.35rem 0.75rem;
    border: none;
    border-radius: 7px;
    background: transparent;
    color: rgba(255,255,255,0.4);
    font-size: 0.8rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .analytics-time-btn.active {
    background: rgba(204,255,0,0.15);
    color: #CCFF00;
  }
  .analytics-time-btn:hover:not(.active) { color: rgba(255,255,255,0.7); }

  .analytics-primary-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 1rem;
  }
  .analytics-secondary-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .analytics-card {
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
  }
  .analytics-card:hover {
    transform: translateY(-2px);
    border-color: rgba(255,255,255,0.15);
  }
  .glass {
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    transition: all 0.3s ease;
  }
  .analytics-card-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .analytics-card-icon {
    width: 32px; height: 32px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .analytics-card-icon svg { width: 16px; height: 16px; }
  .analytics-card-change {
    font-size: 0.75rem;
    font-weight: 600;
    font-family: monospace;
  }
  .analytics-card-value {
    font-size: 1.75rem;
    font-weight: 700;
    color: #fff;
    font-family: monospace;
    line-height: 1;
  }
  .analytics-card-label {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.4);
    font-weight: 500;
  }

  .analytics-footer {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.75rem 1.25rem;
  }
  .analytics-footer-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #22c55e;
    animation: connectionPulse 2s infinite;
  }
  .analytics-footer span {
    font-size: 0.8rem;
    color: rgba(255,255,255,0.3);
  }

  @keyframes fadeSlideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes connectionPulse {
    0%, 100% { opacity: 1; box-shadow: 0 0 4px #22c55e; }
    50% { opacity: 0.5; box-shadow: 0 0 8px #22c55e; }
  }

  @media (max-width: 768px) {
    .analytics-primary-grid { grid-template-columns: repeat(2, 1fr); }
    .analytics-secondary-grid { grid-template-columns: repeat(2, 1fr); }
    .analytics-header { flex-direction: column; }
    .analytics-card-value { font-size: 1.4rem; }
  }
  @media (max-width: 480px) {
    .analytics-primary-grid, .analytics-secondary-grid { grid-template-columns: 1fr; }
    .analytics-dashboard { padding: 1rem; }
  }
`,dw=j.createContext(),Nb="framex-theme",_R={"--bg":"#08080f","--bg-alt":"#0c0c18","--text":"#ffffff","--text-secondary":"rgba(255,255,255,0.4)","--surface":"rgba(255,255,255,0.05)","--surface-hover":"rgba(255,255,255,0.10)","--border":"rgba(255,255,255,0.08)","--accent":"#CCFF00","--accent-text":"#08080f","--danger":"#ff4d4d","--glass-bg":"rgba(255,255,255,0.05)","--glass-border":"rgba(255,255,255,0.08)"},TR={"--bg":"#ffffff","--bg-alt":"#f5f5f7","--text":"#111111","--text-secondary":"rgba(0,0,0,0.45)","--surface":"rgba(0,0,0,0.03)","--surface-hover":"rgba(0,0,0,0.06)","--border":"rgba(0,0,0,0.08)","--accent":"#a0cc00","--accent-text":"#ffffff","--danger":"#e03030","--glass-bg":"rgba(255,255,255,0.7)","--glass-border":"rgba(0,0,0,0.06)"};function Rb(t){const e=t==="light"?TR:_R,a=document.documentElement;Object.entries(e).forEach(([i,o])=>a.style.setProperty(i,o)),a.setAttribute("data-theme",t)}function Ch(){return typeof window>"u"?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function ER({children:t}){const[e,a]=j.useState(()=>{try{const h=localStorage.getItem(Nb);if(h==="dark"||h==="light"||h==="system")return h}catch{}return"dark"}),[i,o]=j.useState(()=>e==="system"?Ch():e),c=j.useCallback(h=>{a(h);try{localStorage.setItem(Nb,h)}catch{}},[]),d=Dt();return j.useEffect(()=>{d.pathname==="/"?Rb("dark"):Rb(i)},[i,d.pathname]),j.useEffect(()=>{o(e==="system"?Ch():e)},[e]),j.useEffect(()=>{if(e!=="system")return;const h=window.matchMedia("(prefers-color-scheme: dark)"),p=()=>o(Ch());return h.addEventListener("change",p),()=>h.removeEventListener("change",p)},[e]),j.useEffect(()=>{const h=document.createElement("style");h.textContent=`
      *, *::before, *::after {
        transition: background-color 0.3s ease, color 0.3s ease,
                    border-color 0.3s ease, box-shadow 0.3s ease,
                    backdrop-filter 0.3s ease !important;
      }
    `,h.id="theme-transition-style";const p=document.getElementById("theme-transition-style");p&&p.remove(),document.head.appendChild(h);const g=setTimeout(()=>{const y=document.getElementById("theme-transition-style");y&&y.remove()},400);return()=>{clearTimeout(g);const y=document.getElementById("theme-transition-style");y&&y.remove()}},[i]),u.jsx(dw.Provider,{value:{theme:e,setTheme:c,resolvedTheme:i},children:t})}function CR(){const t=j.useContext(dw);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const $t={dark:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),light:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),u.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),u.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),u.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),u.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),u.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),u.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),system:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),u.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),u.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),lock:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"})]}),shield:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),chevronRight:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"9 18 15 12 9 6"})}),helpCircle:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),info:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),fileText:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),u.jsx("polyline",{points:"14 2 14 8 20 8"}),u.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),u.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),u.jsx("polyline",{points:"10 9 9 9 8 9"})]}),logOut:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),check:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})})},AR=[{id:"dark",label:"Dark",icon:$t.dark},{id:"light",label:"Light",icon:$t.light},{id:"system",label:"System",icon:$t.system}],NR=[{id:"edit-profile",label:"Edit Profile",icon:$t.user},{id:"privacy",label:"Privacy Settings",icon:$t.lock},{id:"notifications",label:"Notification Settings",icon:$t.bell},{id:"security",label:"Security Settings",icon:$t.shield}],RR=[{id:"contact",label:"Contact Us",icon:$t.helpCircle},{id:"about",label:"About FrameX",icon:$t.info},{id:"terms",label:"Terms & Privacy Policy",icon:$t.fileText}],OR={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}};function DR(){const{theme:t,setTheme:e}=CR(),{signOut:a}=mt(),i=rn(),o=async()=>{try{await a(),i("/login")}catch{}};return u.jsxs(we.div,{className:"settings-page",...OR,children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Settings"}),u.jsx("p",{children:"Manage your account and preferences"})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Appearance"}),u.jsx("div",{className:"theme-options",children:AR.map(c=>u.jsxs("button",{className:`theme-card ${t===c.id?"active":""}`,onClick:()=>e(c.id),children:[u.jsx("div",{className:"theme-card-icon",children:c.icon}),u.jsx("span",{className:"theme-card-label",children:c.label}),t===c.id&&u.jsx("div",{className:"theme-card-check",children:$t.check})]},c.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Account"}),u.jsx("div",{className:"settings-items",children:NR.map(c=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:c.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:c.label})}),u.jsx("div",{className:"settings-item-arrow",children:$t.chevronRight})]},c.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Support"}),u.jsx("div",{className:"settings-items",children:RR.map(c=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:c.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:c.label})}),u.jsx("div",{className:"settings-item-arrow",children:$t.chevronRight})]},c.id))})]}),u.jsxs("div",{className:"logout-section",children:[u.jsxs("button",{className:"logout-btn",onClick:o,children:[$t.logOut," Logout"]}),u.jsx("span",{className:"version",children:"FrameX v1.0.0"})]}),u.jsx("style",{children:`
        .settings-page {
          padding: 1.5rem;
          max-width: 720px;
          margin: 0 auto;
        }

        .glass {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
          border-radius: 16px;
        }

        .page-header { margin-bottom: 1.5rem; }
        .page-header h1 {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--text);
          margin: 0 0 0.35rem;
        }
        .page-header p {
          font-size: 0.9rem;
          color: var(--text-secondary);
          margin: 0;
        }

        /* Cards */
        .settings-card {
          padding: 1.25rem;
          margin-bottom: 1rem;
        }
        .settings-card-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text-secondary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.85rem;
        }

        /* Theme Options */
        .theme-options {
          display: flex;
          gap: 0.75rem;
        }
        .theme-card {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          padding: 1rem 0.5rem;
          border-radius: 12px;
          border: 2px solid var(--border);
          background: var(--surface);
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          position: relative;
        }
        .theme-card:hover {
          background: var(--surface-hover);
          color: var(--text);
        }
        .theme-card.active {
          border-color: var(--accent);
          color: var(--text);
        }
        .theme-card-icon svg {
          width: 24px;
          height: 24px;
        }
        .theme-card-label {
          font-size: 0.82rem;
          font-weight: 500;
        }
        .theme-card-check {
          position: absolute;
          top: 6px;
          right: 6px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent);
          color: var(--accent-text);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .theme-card-check svg {
          width: 12px;
          height: 12px;
        }

        /* Settings Items */
        .settings-items { display: flex; flex-direction: column; }
        .settings-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .settings-item:last-child { border-bottom: none; }
        .settings-item:hover { opacity: 0.8; }
        .settings-item-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--surface);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .settings-item-icon svg {
          width: 18px;
          height: 18px;
          color: var(--text-secondary);
        }
        .settings-item-content { flex: 1; min-width: 0; }
        .settings-item-label {
          font-size: 0.9rem;
          color: var(--text);
          font-weight: 500;
        }
        .settings-item-arrow svg {
          width: 18px;
          height: 18px;
          color: var(--text-secondary);
          opacity: 0.4;
        }

        /* Logout */
        .logout-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 1.5rem 0;
        }
        .logout-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 2rem;
          border-radius: 8px;
          border: 1px solid var(--border);
          background: transparent;
          color: var(--text-secondary);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .logout-btn svg { width: 18px; height: 18px; }
        .logout-btn:hover {
          border-color: color-mix(in srgb, var(--danger) 40%, transparent);
          color: var(--danger);
        }
        .version {
          font-size: 0.75rem;
          color: var(--text-secondary);
          opacity: 0.4;
        }

        @media (max-width: 600px) {
          .settings-page { padding: 1rem; }
          .page-header h1 { font-size: 1.4rem; }
          .theme-options { gap: 0.5rem; }
          .theme-card { padding: 0.85rem 0.35rem; }
          .theme-card-icon svg { width: 20px; height: 20px; }
        }
      `})]})}let LR=0;const hw=Fr((t,e)=>({activeModal:null,modalProps:{},toasts:[],openModal:(a,i={})=>{t({activeModal:a,modalProps:i})},closeModal:()=>{t({activeModal:null,modalProps:{}})},addToast:(a,i="info",o=3e3)=>{const c=++LR,d={id:c,message:a,type:i,duration:o};return t(h=>({toasts:[...h.toasts,d]})),o>0&&setTimeout(()=>{e().removeToast(c)},o),c},removeToast:a=>{t(i=>({toasts:i.toasts.filter(o=>o.id!==a)}))},clearToasts:()=>{t({toasts:[]})}})),Ah=2200,Ob=10,MR=["image/jpeg","image/png","image/webp","image/gif"],zR=20*1024*1024,UR=[{value:"public",label:"Public",icon:"globe",desc:"Anyone can see this post"},{value:"followers",label:"Followers Only",icon:"users",desc:"Only followers can see this post"},{value:"private",label:"Private",icon:"lock",desc:"Only you can see this post"}];function BR(){const t=rn(),{profile:e}=mt(),{createPost:a,uploadPostImage:i,deletePostImage:o}=yc(),{addPostOptimistic:c,removePostOptimistic:d}=Ot(),{addToast:h}=hw(),[p,g]=j.useState(""),[y,v]=j.useState([]),[x,w]=j.useState("public"),[S,T]=j.useState(!1),[C,_]=j.useState({}),[R,O]=j.useState(!1),[P,X]=j.useState(!1),[W,G]=j.useState(0),[q,Z]=j.useState(null),re=j.useRef(null),xe=j.useRef(null),pe=j.useRef(0);j.useEffect(()=>{var ge;const Q=()=>{if(window.visualViewport){const he=Math.max(0,window.innerHeight-window.visualViewport.height);G(he)}};return(ge=window.visualViewport)==null||ge.addEventListener("resize",Q),()=>{var he;return(he=window.visualViewport)==null?void 0:he.removeEventListener("resize",Q)}},[]);const Ce=j.useCallback(()=>{S||(p||y.length>0?window.confirm("Discard this post?")&&(Le(),t(-1)):t(-1))},[p,y,S,t]);j.useEffect(()=>{const Q=()=>{(p||y.length>0)&&Le()};return window.addEventListener("popstate",Q),()=>window.removeEventListener("popstate",Q)},[p,y]);const Le=async()=>{for(const Q of y)if(Q.path)try{await o(Q.path)}catch{}},me=Q=>MR.includes(Q.type)?Q.size>zR?(h("File too large. Max 20MB.","error"),!1):!0:(h(`Unsupported file type: ${Q.type}`,"error"),!1),E=async Q=>{const ge=Ob-y.length;Q.length>ge&&h(`You can only add ${ge} more image(s)`,"error");const he=Array.from(Q).slice(0,ge).filter(me);if(he.length===0)return;const L=he.map(K=>({id:`temp_${Date.now()}_${Math.random().toString(36).slice(2)}`,file:K,url:URL.createObjectURL(K),path:null,progress:0,status:"pending"}));v(K=>[...K,...L])},$=Q=>{const ge=Q.target,he=ge.files;he&&E(he),ge.value=""},ee=Q=>{v(ge=>{var L;const he=ge.find(K=>K.id===Q);return(L=he==null?void 0:he.url)!=null&&L.startsWith("blob:")&&URL.revokeObjectURL(he.url),he!=null&&he.path&&o(he.path).catch(()=>{}),ge.filter(K=>K.id!==Q)})},ce=Q=>Z(Q),be=(Q,ge)=>{Q.preventDefault(),!(q===null||q===ge)&&(v(he=>{const L=[...he],[K]=L.splice(q,1);return L.splice(ge,0,K),L}),Z(ge))},N=()=>Z(null),I=async()=>{var L;const Q=y.filter(K=>K.status==="pending");if(Q.length===0)return[];const ge=(L=mt.getState().user)==null?void 0:L.id;if(!ge)throw new Error("Not authenticated");const he=[];for(const K of Q){v(ue=>ue.map(Se=>Se.id===K.id?{...Se,status:"uploading",progress:0}:Se));try{const ue=await i(K.file,ge,Se=>{v(_e=>_e.map(it=>it.id===K.id?{...it,progress:Se}:it))});v(Se=>Se.map(_e=>_e.id===K.id?{..._e,path:ue.path,url:ue.url,status:"done",progress:100}:_e)),he.push({url:ue.url,path:ue.path})}catch(ue){throw v(Se=>Se.map(_e=>_e.id===K.id?{..._e,status:"error"}:_e)),new Error(`Failed to upload ${K.file.name}: ${ue.message}`)}}return he},J=async()=>{var he,L,K;if(R||S)return;if(y.length===0&&!p.trim()){h("Add a photo or write something","error");return}if(!mt.getState().user){h("Your session has expired. Please log in again.","error"),t("/login",{replace:!0});return}O(!0),T(!0),pe.current=Date.now();let ge;try{const ue=await I();T(!1),ge=`opt_${Date.now()}`;const Se={id:ge,user_id:(he=mt.getState().user)==null?void 0:he.id,content:p.trim(),type:ue.length>0?"image":"text",media:ue,image_url:((L=ue[0])==null?void 0:L.url)||null,audience:x,is_deleted:!1,created_at:new Date().toISOString(),profiles:e?{id:e.id,username:e.username,display_name:e.display_name,avatar_url:e.avatar_url,is_verified:e.is_verified||!1}:null};c(Se);const _e=await a({content:p.trim(),type:ue.length>0?"image":"text",media:ue,image_url:((K=ue[0])==null?void 0:K.url)||null,audience:x});navigator.vibrate&&navigator.vibrate(20),d(ge),c({..._e}),h("Post uploaded successfully","success"),X(!0),setTimeout(()=>{t("/home",{replace:!0})},800)}catch(ue){T(!1),O(!1),X(!1),d(ge),console.error("Post creation failed:",ue),h("Unable to create post. Please try again.","error")}},ae=(y.length>0||p.trim().length>0)&&!R&&!S,de=Ah-p.length,je=Q=>Q?Q.slice(0,2).toUpperCase():"?";return u.jsxs(we.div,{className:"post-creation-page",initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:30},transition:{type:"spring",stiffness:300,damping:30},style:{paddingBottom:W>0?`${W}px`:0},children:[u.jsxs("div",{className:"pc-header",children:[u.jsx("button",{className:"pc-back-btn",onClick:Ce,disabled:S,"aria-label":"Go back",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),u.jsx("h1",{className:"pc-title",children:"New Post"}),u.jsx("button",{className:`pc-submit-btn ${ae?"":"disabled"} ${P?"success":""}`,onClick:J,disabled:!ae,children:P?u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"pc-check-icon",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}):R?u.jsx("div",{className:"pc-spinner"}):"Post"})]}),u.jsxs("div",{className:"pc-user-info",children:[u.jsx("div",{className:"pc-avatar",style:{background:(e==null?void 0:e.avatar_color)||"var(--accent)"},children:e!=null&&e.avatar_url?u.jsx("img",{src:e.avatar_url,alt:""}):u.jsx("span",{children:je((e==null?void 0:e.display_name)||(e==null?void 0:e.username))})}),u.jsxs("div",{className:"pc-user-details",children:[u.jsx("span",{className:"pc-display-name",children:(e==null?void 0:e.display_name)||"Unknown"}),u.jsxs("span",{className:"pc-username",children:["@",(e==null?void 0:e.username)||"unknown"]})]})]}),u.jsxs("div",{className:"pc-caption-area",children:[u.jsx("textarea",{ref:xe,className:"pc-caption-input",placeholder:"Write a caption...",value:p,onChange:Q=>{Q.target.value.length<=Ah&&g(Q.target.value)},rows:4,maxLength:Ah}),p.length>0&&u.jsx("span",{className:`pc-char-count ${de<100?"pc-char-warn":""} ${de<20?"pc-char-danger":""}`,children:de})]}),u.jsx(tn,{children:y.length>0&&u.jsxs(we.div,{className:"pc-image-grid",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[y.map((Q,ge)=>u.jsxs(we.div,{className:`pc-image-item ${Q.status==="uploading"?"uploading":""} ${Q.status==="error"?"error":""}`,layout:!0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:ge*.05}},draggable:!0,onDragStart:()=>ce(ge),onDragOver:he=>be(he,ge),onDragEnd:N,children:[u.jsx("img",{src:Q.url,alt:`Upload ${ge+1}`}),u.jsx("button",{className:"pc-img-remove",onClick:()=>ee(Q.id),"aria-label":"Remove image",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),Q.status==="uploading"&&u.jsxs("div",{className:"pc-img-progress",children:[u.jsxs("svg",{className:"pc-progress-ring",viewBox:"0 0 36 36",children:[u.jsx("circle",{className:"pc-progress-bg",cx:"18",cy:"18",r:"16"}),u.jsx("circle",{className:"pc-progress-bar",cx:"18",cy:"18",r:"16",strokeDasharray:`${Q.progress*1.005} 100.5`,strokeDashoffset:"0"})]}),u.jsxs("span",{className:"pc-progress-text",children:[Math.round(Q.progress),"%"]})]}),Q.status==="error"&&u.jsx("div",{className:"pc-img-error-overlay",children:u.jsx("span",{children:"Failed"})}),u.jsx("span",{className:"pc-img-order",children:ge+1})]},Q.id)),y.length<Ob&&!R&&u.jsxs(we.button,{className:"pc-add-image-btn",onClick:()=>{var Q;return(Q=re.current)==null?void 0:Q.click()},whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add"})]})]})}),y.length===0&&u.jsxs(we.button,{className:"pc-add-photo-btn",onClick:()=>{var Q;return(Q=re.current)==null?void 0:Q.click()},whileHover:{scale:1.02},whileTap:{scale:.98},disabled:R,children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add Photos"})]}),u.jsx("input",{ref:re,type:"file",accept:"image/jpeg,image/png,image/webp,image/gif",multiple:!0,onChange:$,style:{display:"none"}}),u.jsxs("div",{className:"pc-audience-section",children:[u.jsx("label",{className:"pc-section-label",children:"Audience"}),u.jsx("div",{className:"pc-audience-options",children:UR.map(Q=>u.jsxs("button",{className:`pc-audience-btn ${x===Q.value?"active":""}`,onClick:()=>!R&&w(Q.value),disabled:R,children:[u.jsxs("span",{className:"pc-audience-icon",children:[Q.icon==="globe"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),Q.icon==="users"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),Q.icon==="lock"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})]}),u.jsx("span",{className:"pc-audience-label",children:Q.label})]},Q.value))})]}),u.jsx("style",{children:PR})]})}const PR=`
  .post-creation-page {
    max-width: 600px;
    margin: 0 auto;
    padding: 0 1rem 6rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    transition: padding-bottom 0.2s ease;
  }

  /* Header */
  .pc-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    border-bottom: 1px solid var(--border);
    position: sticky;
    top: 0;
    background: var(--bg);
    z-index: 10;
  }

  .pc-back-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: var(--surface);
    color: var(--text);
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-back-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .pc-back-btn svg {
    width: 20px;
    height: 20px;
  }
  .pc-back-btn:active {
    background: var(--surface-hover);
  }

  .pc-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--text);
    margin: 0;
  }

  .pc-submit-btn {
    padding: 0.5rem 1.25rem;
    border-radius: 100px;
    border: none;
    background: var(--accent);
    color: var(--accent-text, #000);
    font-size: 0.85rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.25s ease;
    min-width: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-submit-btn.disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }
  .pc-submit-btn.success {
    background: #22c55e;
    color: #fff;
    min-width: 64px;
  }
  .pc-check-icon {
    width: 20px;
    height: 20px;
  }

  .pc-spinner {
    width: 18px;
    height: 18px;
    border: 2px solid rgba(0,0,0,0.15);
    border-top-color: var(--accent-text, #000);
    border-radius: 50%;
    animation: pc-spin 0.6s linear infinite;
  }
  @keyframes pc-spin { to { transform: rotate(360deg); } }

  /* User Info */
  .pc-user-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 0;
  }

  .pc-avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--accent-text, #000);
    overflow: hidden;
    flex-shrink: 0;
  }
  .pc-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .pc-user-details {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }
  .pc-display-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--text);
  }
  .pc-username {
    font-size: 0.78rem;
    color: var(--text-secondary);
  }

  /* Caption */
  .pc-caption-area {
    position: relative;
    margin-bottom: 1rem;
  }

  .pc-caption-input {
    width: 100%;
    min-height: 100px;
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 0.85rem;
    color: var(--text);
    font-size: 0.95rem;
    font-family: inherit;
    resize: vertical;
    line-height: 1.5;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
  }
  .pc-caption-input:focus {
    border-color: var(--accent);
  }
  .pc-caption-input::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }

  .pc-char-count {
    position: absolute;
    bottom: 0.75rem;
    right: 0.85rem;
    font-size: 0.72rem;
    color: var(--text-secondary);
    font-weight: 500;
  }
  .pc-char-warn {
    color: #f59e0b;
  }
  .pc-char-danger {
    color: var(--danger);
  }

  /* Add Photo Button (empty state) */
  .pc-add-photo-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    width: 100%;
    padding: 1rem;
    border: 2px dashed var(--border);
    border-radius: 12px;
    background: transparent;
    color: var(--text-secondary);
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    margin-bottom: 1rem;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-add-photo-btn:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
  .pc-add-photo-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
    background: color-mix(in srgb, var(--accent) 6%, transparent);
  }
  .pc-add-photo-btn svg {
    width: 22px;
    height: 22px;
  }

  /* Image Grid */
  .pc-image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    margin-bottom: 1rem;
  }

  .pc-image-item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 10px;
    overflow: hidden;
    background: var(--surface);
    border: 2px solid transparent;
    cursor: grab;
    transition: border-color 0.2s;
  }
  .pc-image-item:active {
    cursor: grabbing;
  }
  .pc-image-item.uploading {
    border-color: var(--accent);
  }
  .pc-image-item.error {
    border-color: var(--danger);
  }
  .pc-image-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .pc-img-remove {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(0,0,0,0.65);
    border: none;
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-img-remove svg {
    width: 14px;
    height: 14px;
  }

  .pc-img-order {
    position: absolute;
    bottom: 4px;
    left: 4px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(0,0,0,0.55);
    color: #fff;
    font-size: 0.6rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Upload Progress Overlay */
  .pc-img-progress {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
  }
  .pc-progress-ring {
    width: 44px;
    height: 44px;
    transform: rotate(-90deg);
  }
  .pc-progress-bg {
    fill: none;
    stroke: rgba(255,255,255,0.15);
    stroke-width: 3;
  }
  .pc-progress-bar {
    fill: none;
    stroke: var(--accent);
    stroke-width: 3;
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
  }
  .pc-progress-text {
    position: absolute;
    font-size: 0.65rem;
    font-weight: 700;
    color: #fff;
  }

  .pc-img-error-overlay {
    position: absolute;
    inset: 0;
    background: rgba(220, 38, 38, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 1;
  }

  /* Add Image Button (in grid) */
  .pc-add-image-btn {
    aspect-ratio: 1;
    border-radius: 10px;
    border: 2px dashed var(--border);
    background: transparent;
    color: var(--text-secondary);
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;
    transition: all 0.2s;
    font-family: inherit;
    font-size: 0.7rem;
    font-weight: 500;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-add-image-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
  .pc-add-image-btn svg {
    width: 24px;
    height: 24px;
  }

  /* Audience Selector */
  .pc-audience-section {
    margin-top: 0.5rem;
  }

  .pc-section-label {
    display: block;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--text-secondary);
    margin-bottom: 0.6rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .pc-audience-options {
    display: flex;
    gap: 0.5rem;
  }

  .pc-audience-btn {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.35rem;
    padding: 0.75rem 0.5rem;
    border-radius: 10px;
    border: 1.5px solid var(--border);
    background: var(--surface);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
    -webkit-tap-highlight-color: transparent;
  }
  .pc-audience-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .pc-audience-btn.active {
    border-color: var(--accent);
    background: color-mix(in srgb, var(--accent) 8%, transparent);
    color: var(--accent);
  }
  .pc-audience-btn:not(.active):hover {
    border-color: var(--text-secondary);
  }

  .pc-audience-icon svg {
    width: 20px;
    height: 20px;
  }
  .pc-audience-label {
    font-size: 0.72rem;
    font-weight: 500;
    text-align: center;
    line-height: 1.2;
  }

  /* Responsive */
  @media (min-width: 768px) {
    .post-creation-page {
      padding: 0 2rem 2rem;
    }
    .pc-image-grid {
      grid-template-columns: repeat(4, 1fr);
    }
    .pc-caption-input {
      min-height: 120px;
    }
  }

  @media (max-width: 380px) {
    .pc-audience-options {
      flex-direction: column;
    }
    .pc-audience-btn {
      flex-direction: row;
      padding: 0.6rem 0.75rem;
    }
  }
`;class VR extends j.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,a){console.error("ErrorBoundary caught:",e,a)}render(){return this.state.error?u.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},children:u.jsxs("div",{style:{maxWidth:480,padding:"2rem",background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.08)"},children:[u.jsx("h2",{style:{margin:"0 0 0.75rem",fontSize:"1.25rem"},children:"Something went wrong"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",margin:0},children:this.state.error.message})]})}):this.props.children}}function Mn({children:t}){const{user:e,isLoading:a}=mt(),i=Dt();return a?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"auth-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .auth-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):e?t:u.jsx(qS,{to:"/login",state:{from:i},replace:!0})}const HR=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Alerts",icon:"bell"},{path:"/profile",label:"Profile",icon:"user"}],Db={home:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),chat:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),bell:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),user:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),plus:()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})};function $R(){const t=rn(),e=Dt(),{unreadCount:a}=ga(),[i,o]=j.useState(!0),c=j.useRef(0);return j.useEffect(()=>{const d=()=>{const h=window.scrollY;h>c.current&&h>60?o(!1):o(!0),c.current=h};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),u.jsx(tn,{children:i&&u.jsxs(we.nav,{className:"bottom-nav",initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",stiffness:300,damping:30},children:[u.jsx("div",{className:"bottom-nav-inner",children:HR.map(d=>{const h=e.pathname===d.path;return u.jsxs("button",{className:`bottom-nav-item ${h?"active":""}`,onClick:()=>{e.pathname!==d.path&&(window.scrollTo({top:0,behavior:"smooth"}),t(d.path))},children:[u.jsxs("span",{className:"nav-icon-wrap",children:[Db[d.icon](h),d.path==="/notifications"&&a>0&&u.jsx("span",{className:"bottom-nav-badge",children:a>99?"99+":a})]}),u.jsx("span",{className:"nav-label-text",children:d.label})]},d.path)})}),u.jsx("button",{className:"create-btn",onClick:()=>t("/create"),"aria-label":"Create post",children:Db.plus()}),u.jsx("style",{children:IR})]})})}const IR=`
  .bottom-nav {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
    display: flex;
    justify-content: center;
    padding: 0 0 env(safe-area-inset-bottom, 0);
    pointer-events: none;
  }

  .bottom-nav-inner {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    max-width: 600px;
    height: 64px;
    padding: 0 0.5rem;
    background: color-mix(in srgb, var(--bg-alt) 88%, transparent);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border-top: 1px solid var(--border);
    pointer-events: auto;
    position: relative;
  }

  .bottom-nav-connection {
    position: absolute;
    top: 6px;
    right: 6px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    z-index: 3;
    border: 1.5px solid color-mix(in srgb, var(--bg-alt) 95%, transparent);
  }

  .bottom-nav-badge {
    position: absolute;
    top: -5px;
    right: -7px;
    min-width: 16px;
    height: 16px;
    padding: 0 4px;
    border-radius: 100px;
    background: var(--danger);
    color: #fff;
    font-size: 0.55rem;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    box-shadow: 0 0 0 1.5px color-mix(in srgb, var(--bg-alt) 95%, transparent);
  }

  .bottom-nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    width: 56px;
    height: 48px;
    background: none;
    border: none;
    color: var(--text-secondary);
    cursor: pointer;
    transition: color 0.2s;
    font-family: inherit;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    padding: 0;
  }
  .bottom-nav-item.active {
    color: var(--accent);
  }

  .nav-icon-wrap {
    width: 22px;
    height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-icon-wrap svg {
    width: 20px;
    height: 20px;
  }
  .bottom-nav-item.active .nav-icon-wrap svg {
    filter: drop-shadow(0 0 8px color-mix(in srgb, var(--accent) 30%, transparent));
  }

  .nav-label-text {
    font-size: 0.6rem;
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  .create-btn {
    position: absolute;
    bottom: 28px;
    left: 50%;
    transform: translateX(-50%);
    width: 52px;
    height: 52px;
    border-radius: 50%;
    background: var(--accent);
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--accent-text);
    cursor: pointer;
    box-shadow: 0 4px 20px color-mix(in srgb, var(--accent) 35%, transparent);
    transition: all 0.2s ease;
    pointer-events: auto;
    -webkit-tap-highlight-color: transparent;
    z-index: 2;
  }
  .create-btn:hover {
    transform: translateX(-50%) scale(1.05);
    box-shadow: 0 6px 28px color-mix(in srgb, var(--accent) 50%, transparent);
  }
  .create-btn:active {
    transform: translateX(-50%) scale(0.92);
  }
  .create-btn svg {
    width: 26px;
    height: 26px;
  }

  @media (min-width: 768px) {
    .bottom-nav {
      display: none;
    }
  }
`;function qR(){const{toasts:t,removeToast:e}=hw();return u.jsxs("div",{className:"toast-container",children:[u.jsx(tn,{mode:"popLayout",children:t.map(a=>u.jsxs(we.div,{className:`toast-pill toast-${a.type}`,layout:!0,initial:{opacity:0,y:-40,scale:.92},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95,filter:"blur(4px)"},transition:{type:"spring",stiffness:400,damping:28,mass:.8},onClick:()=>e(a.id),children:[a.type==="success"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"16 8 10 16 7 13"})]}),a.type==="error"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),a.type==="info"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),u.jsx("span",{className:"toast-message",children:a.message})]},a.id))}),u.jsx("style",{children:FR})]})}const FR=`
  .toast-container {
    position: fixed;
    top: 16px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    pointer-events: none;
    width: auto;
    max-width: calc(100vw - 32px);
  }

  .toast-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 24px;
    border-radius: 100px;
    background: color-mix(in srgb, var(--bg-alt, #0a0a14) 75%, transparent);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid color-mix(in srgb, var(--border, #222) 60%, transparent);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.35),
      0 2px 8px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 color-mix(in srgb, #fff 8%, transparent);
    pointer-events: auto;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  .toast-icon {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
  }

  .toast-success .toast-icon {
    color: #22c55e;
  }

  .toast-error .toast-icon {
    color: #ef4444;
  }

  .toast-info .toast-icon {
    color: var(--accent, #CCFF00);
  }

  .toast-message {
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text, #eee);
    white-space: normal;
    word-break: break-word;
    overflow-wrap: break-word;
  }

  .toast-success .toast-message {
    color: #e8f5e9;
  }

  .toast-error .toast-message {
    color: #fce4ec;
  }

  .toast-info .toast-message {
    color: var(--text, #eee);
  }

  @media (max-width: 480px) {
    .toast-container {
      top: 12px;
      max-width: calc(100vw - 24px);
    }
    .toast-pill {
      padding: 10px 18px;
      gap: 8px;
    }
    .toast-message {
      font-size: 0.8125rem;
    }
  }
`,Lb={home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),analytics:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 20V10"}),u.jsx("path",{d:"M12 20V4"}),u.jsx("path",{d:"M6 20v-6"})]}),profile:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})},GR=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/communities",label:"Communities",icon:"communities"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Notifications",icon:"notification"},{path:"/profile",label:"Profile",icon:"profile"},{path:"/analytics",label:"Analytics",icon:"analytics"},{path:"/settings",label:"Settings",icon:"settings"}],KR={"/home":"Home","/explore":"Explore","/communities":"Communities","/chat":"Chats","/notifications":"Notifications","/profile":"Profile","/analytics":"Analytics","/settings":"Settings"},YR={initial:{opacity:0,y:12},animate:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-12,transition:{duration:.2,ease:"easeIn"}}};function lr({children:t}){var v,x,w,S;const{user:e,profile:a,signOut:i}=mt(),o=rn(),c=Dt(),d=KR[c.pathname]||"FrameX",{unreadCount:h}=ga(),p=c.pathname.split("/"),g=p[1]==="profile"&&p[2]&&p[2]!==(e==null?void 0:e.id),y=async()=>{await i(),o("/login")};return u.jsxs("div",{className:"app-layout",children:[!g&&u.jsxs("aside",{className:"desktop-sidebar",children:[u.jsxs("div",{className:"sidebar-brand",onClick:()=>o("/home"),children:[u.jsx("span",{className:"sidebar-logo-mark",children:"F"}),u.jsx("span",{className:"sidebar-logo-text",children:"FrameX"})]}),u.jsx("nav",{className:"sidebar-nav-main",children:GR.map(T=>u.jsxs("button",{className:`sidebar-nav-item ${c.pathname===T.path?"active":""}`,onClick:()=>o(T.path),children:[u.jsx("span",{className:"sidebar-nav-icon",children:Lb[T.icon]}),u.jsx("span",{className:"sidebar-nav-label",children:T.label}),T.path==="/notifications"&&h>0&&u.jsx("span",{className:"sidebar-notif-badge",children:h>99?"99+":h})]},T.path))}),u.jsx(uw,{variant:"sidebar"}),u.jsx("div",{className:"sidebar-divider"}),u.jsxs("div",{className:"sidebar-profile-section",onClick:()=>o("/profile"),children:[u.jsx("div",{className:"sidebar-profile-avatar",style:{background:(a==null?void 0:a.avatar_color)||"var(--accent)"},children:((v=a==null?void 0:a.username)==null?void 0:v[0])||((w=(x=e==null?void 0:e.email)==null?void 0:x[0])==null?void 0:w.toUpperCase())||"?"}),u.jsxs("div",{className:"sidebar-profile-info",children:[u.jsx("span",{className:"sidebar-profile-name",children:(a==null?void 0:a.username)||((S=e==null?void 0:e.email)==null?void 0:S.split("@")[0])||"User"}),u.jsxs("span",{className:"sidebar-profile-handle",children:["@",(a==null?void 0:a.username)||"user"]})]})]}),u.jsxs("button",{className:"sidebar-logout-btn",onClick:y,children:[u.jsx("span",{className:"sidebar-nav-icon",children:Lb.logout}),u.jsx("span",{className:"sidebar-nav-label",children:"Log Out"})]})]}),u.jsxs("div",{className:"app-main",children:[!g&&u.jsx("header",{className:"mobile-header",children:u.jsxs("div",{className:"mobile-header-left",onClick:()=>o("/home"),children:[u.jsx("span",{className:"mobile-header-logo",children:"F"}),u.jsx("span",{className:"mobile-header-title",children:d})]})}),u.jsx("main",{className:"app-content",children:u.jsx(tn,{mode:"wait",children:u.jsx(we.div,{variants:YR,initial:"initial",animate:"animate",exit:"exit",children:t},c.pathname)})}),u.jsx(qR,{})]}),!g&&u.jsx($R,{}),u.jsx("style",{children:`
        .app-layout {
          display: flex;
          min-height: 100vh;
          background: var(--bg-alt);
        }

        /* ===== DESKTOP SIDEBAR ===== */
        .desktop-sidebar {
          display: none;
          width: 260px;
          min-width: 260px;
          height: 100vh; height: 100dvh;
          position: sticky;
          top: 0;
          background: var(--bg-alt);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-right: 1px solid var(--border);
          flex-direction: column;
          padding: 1rem 0.75rem;
        }

        @media (min-width: 768px) {
          .desktop-sidebar { display: flex; }
        }

        .sidebar-brand {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 0.85rem 1.25rem;
          cursor: pointer;
        }
        .sidebar-logo-mark {
          width: 34px; height: 34px;
          border-radius: 10px;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          font-weight: 800;
          color: var(--accent-text);
          font-family: 'Playfair Display', Georgia, serif;
          flex-shrink: 0;
        }
        .sidebar-logo-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: var(--accent);
        }

        .sidebar-nav-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.7rem 0.85rem;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        .sidebar-nav-item:hover {
          color: var(--text);
          background: var(--surface);
        }
        .sidebar-nav-item.active {
          color: var(--accent);
          background: rgba(204,255,0,0.08);
        }
        .sidebar-nav-icon {
          width: 22px; height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .sidebar-nav-icon svg { width: 20px; height: 20px; }
        .sidebar-nav-label { flex: 1; }
        .sidebar-notif-badge {
          min-width: 20px; height: 20px;
          padding: 0 5px;
          border-radius: 100px;
          background: var(--danger);
          color: #fff;
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          line-height: 1;
        }

        .sidebar-divider {
          height: 1px;
          border: none;
          margin: 0.5rem 0.85rem;
          background: var(--border);
        }

        .sidebar-profile-section {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0.85rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          margin-bottom: 0.25rem;
        }
        .sidebar-profile-section:hover { background: var(--surface); }
        .sidebar-profile-avatar {
          width: 38px; height: 38px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: var(--accent-text);
          font-size: 0.95rem;
          flex-shrink: 0;
        }
        .sidebar-profile-info {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .sidebar-profile-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: var(--text);
        }
        .sidebar-profile-handle {
          font-size: 0.75rem;
          color: var(--text-secondary);
        }

        .sidebar-logout-btn {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.7rem 0.85rem;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: var(--text-secondary);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
          font-family: 'DM Sans', 'Inter', sans-serif;
        }
        .sidebar-logout-btn:hover { color: var(--danger); background: rgba(255,77,77,0.06); }

        /* ===== MAIN CONTENT ===== */
        .app-main {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        /* ===== MOBILE HEADER ===== */
        .mobile-header {
          display: flex;
          align-items: center;
          height: 56px;
          padding: 0 1rem;
          background: color-mix(in srgb, var(--bg-alt) 88%, transparent);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid var(--border);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        @media (min-width: 768px) {
          .mobile-header { display: none; }
        }

        .mobile-header-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
        }
        .mobile-header-logo {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 800;
          color: var(--accent-text);
          font-family: 'Playfair Display', Georgia, serif;
          flex-shrink: 0;
        }
        .mobile-header-title {
          font-size: 1rem;
          font-weight: 600;
          color: var(--text);
        }

        /* ===== APP CONTENT ===== */
        .app-content {
          flex: 1;
        }

        @media (max-width: 767px) {
          .app-content { padding-bottom: 80px; }
        }
      `})]})}function XR(){const t=rn(),[e,a]=j.useState("Verifying your email...");return j.useEffect(()=>{(async()=>{const{data:c,error:d}=await te.auth.getSession();if(d){a("Authentication failed. Please try signing in again."),setTimeout(()=>t("/login"),3e3);return}c!=null&&c.session?t("/home"):a("Redirecting...")})();const{data:{subscription:o}}=te.auth.onAuthStateChange(c=>{(c==="SIGNED_IN"||c==="SIGNED_UP")&&t("/home")});return()=>o==null?void 0:o.unsubscribe()},[t]),u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"auth-callback-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:e}),u.jsx("style",{children:`
        .auth-callback-spinner {
          width: 32px; height: 32px;
          border: 2px solid rgba(255,255,255,0.06);
          border-top-color: #CCFF00;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function WR(){const{isLoading:t}=mt();return t?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"app-loading-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .app-loading-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):u.jsx(VR,{children:u.jsx(ER,{children:u.jsxs(GS,{children:[u.jsx(At,{path:"/",element:u.jsx(Tj,{})}),u.jsx(At,{path:"/about",element:u.jsx(Ej,{})}),u.jsx(At,{path:"/login",element:u.jsx(LT,{})}),u.jsx(At,{path:"/auth/callback",element:u.jsx(XR,{})}),u.jsx(At,{path:"/chat",element:u.jsx(Mn,{children:u.jsx(BT,{})})}),u.jsx(At,{path:"/home",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(JN,{})})})}),u.jsx(At,{path:"/profile",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(xb,{})})})}),u.jsx(At,{path:"/profile/:id",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(xb,{})})})}),u.jsx(At,{path:"/communities",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(aR,{})})})}),u.jsx(At,{path:"/explore",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(mR,{})})})}),u.jsx(At,{path:"/notifications",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(yR,{})})})}),u.jsx(At,{path:"/settings",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(DR,{})})})}),u.jsx(At,{path:"/analytics",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(jR,{})})})}),u.jsx(At,{path:"/create",element:u.jsx(Mn,{children:u.jsx(lr,{children:u.jsx(BR,{})})})})]})})})}mt.getState().initialize();F5.createRoot(document.getElementById("root")).render(u.jsx(Ns.StrictMode,{children:u.jsx(gj,{children:u.jsx(WR,{})})}));
