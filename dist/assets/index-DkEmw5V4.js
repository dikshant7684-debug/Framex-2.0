(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&l(f)}).observe(document,{childList:!0,subtree:!0});function i(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function l(o){if(o.ep)return;o.ep=!0;const u=i(o);fetch(o.href,u)}})();function Wp(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var cu={exports:{}},ki={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function dy(){if(Zm)return ki;Zm=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.fragment");function i(l,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var m in o)m!=="key"&&(u[m]=o[m])}else u=o;return o=u.ref,{$$typeof:r,type:l,key:f,ref:o!==void 0?o:null,props:u}}return ki.Fragment=a,ki.jsx=i,ki.jsxs=i,ki}var ep;function hy(){return ep||(ep=1,cu.exports=dy()),cu.exports}var d=hy(),uu={exports:{}},se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tp;function fy(){if(tp)return se;tp=1;var r=Symbol.for("react.transitional.element"),a=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),l=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),m=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),w=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=w&&k[w]||k["@@iterator"],typeof k=="function"?k:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,D={};function z(k,G,L){this.props=k,this.context=G,this.refs=D,this.updater=L||E}z.prototype.isReactComponent={},z.prototype.setState=function(k,G){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,G,"setState")},z.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function Y(){}Y.prototype=z.prototype;function H(k,G,L){this.props=k,this.context=G,this.refs=D,this.updater=L||E}var I=H.prototype=new Y;I.constructor=H,N(I,z.prototype),I.isPureReactComponent=!0;var ie=Array.isArray;function ee(){}var X={H:null,A:null,T:null,S:null},Ae=Object.prototype.hasOwnProperty;function _e(k,G,L){var V=L.ref;return{$$typeof:r,type:k,key:G,ref:V!==void 0?V:null,props:L}}function zt(k,G){return _e(k.type,G,k.props)}function ct(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function Je(k){var G={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(L){return G[L]})}var bt=/\/+/g;function ut(k,G){return typeof k=="object"&&k!==null&&k.key!=null?Je(""+k.key):G.toString(36)}function ze(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(ee,ee):(k.status="pending",k.then(function(G){k.status==="pending"&&(k.status="fulfilled",k.value=G)},function(G){k.status==="pending"&&(k.status="rejected",k.reason=G)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function B(k,G,L,V,W){var te=typeof k;(te==="undefined"||te==="boolean")&&(k=null);var le=!1;if(k===null)le=!0;else switch(te){case"bigint":case"string":case"number":le=!0;break;case"object":switch(k.$$typeof){case r:case a:le=!0;break;case y:return le=k._init,B(le(k._payload),G,L,V,W)}}if(le)return W=W(k),le=V===""?"."+ut(k,0):V,ie(W)?(L="",le!=null&&(L=le.replace(bt,"$&/")+"/"),B(W,G,L,"",function(Or){return Or})):W!=null&&(ct(W)&&(W=zt(W,L+(W.key==null||k&&k.key===W.key?"":(""+W.key).replace(bt,"$&/")+"/")+le)),G.push(W)),1;le=0;var Ue=V===""?".":V+":";if(ie(k))for(var Be=0;Be<k.length;Be++)V=k[Be],te=Ue+ut(V,Be),le+=B(V,G,L,te,W);else if(Be=_(k),typeof Be=="function")for(k=Be.call(k),Be=0;!(V=k.next()).done;)V=V.value,te=Ue+ut(V,Be++),le+=B(V,G,L,te,W);else if(te==="object"){if(typeof k.then=="function")return B(ze(k),G,L,V,W);throw G=String(k),Error("Objects are not valid as a React child (found: "+(G==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":G)+"). If you meant to render a collection of children, use an array instead.")}return le}function K(k,G,L){if(k==null)return k;var V=[],W=0;return B(k,V,"","",function(te){return G.call(L,te,W++)}),V}function ne(k){if(k._status===-1){var G=k._result;G=G(),G.then(function(L){(k._status===0||k._status===-1)&&(k._status=1,k._result=L)},function(L){(k._status===0||k._status===-1)&&(k._status=2,k._result=L)}),k._status===-1&&(k._status=0,k._result=G)}if(k._status===1)return k._result.default;throw k._result}var ve=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var G=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(G))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)},be={map:K,forEach:function(k,G,L){K(k,function(){G.apply(this,arguments)},L)},count:function(k){var G=0;return K(k,function(){G++}),G},toArray:function(k){return K(k,function(G){return G})||[]},only:function(k){if(!ct(k))throw Error("React.Children.only expected to receive a single React element child.");return k}};return se.Activity=b,se.Children=be,se.Component=z,se.Fragment=i,se.Profiler=o,se.PureComponent=H,se.StrictMode=l,se.Suspense=p,se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,se.__COMPILER_RUNTIME={__proto__:null,c:function(k){return X.H.useMemoCache(k)}},se.cache=function(k){return function(){return k.apply(null,arguments)}},se.cacheSignal=function(){return null},se.cloneElement=function(k,G,L){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var V=N({},k.props),W=k.key;if(G!=null)for(te in G.key!==void 0&&(W=""+G.key),G)!Ae.call(G,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&G.ref===void 0||(V[te]=G[te]);var te=arguments.length-2;if(te===1)V.children=L;else if(1<te){for(var le=Array(te),Ue=0;Ue<te;Ue++)le[Ue]=arguments[Ue+2];V.children=le}return _e(k.type,W,V)},se.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:u,_context:k},k},se.createElement=function(k,G,L){var V,W={},te=null;if(G!=null)for(V in G.key!==void 0&&(te=""+G.key),G)Ae.call(G,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(W[V]=G[V]);var le=arguments.length-2;if(le===1)W.children=L;else if(1<le){for(var Ue=Array(le),Be=0;Be<le;Be++)Ue[Be]=arguments[Be+2];W.children=Ue}if(k&&k.defaultProps)for(V in le=k.defaultProps,le)W[V]===void 0&&(W[V]=le[V]);return _e(k,te,W)},se.createRef=function(){return{current:null}},se.forwardRef=function(k){return{$$typeof:m,render:k}},se.isValidElement=ct,se.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:ne}},se.memo=function(k,G){return{$$typeof:g,type:k,compare:G===void 0?null:G}},se.startTransition=function(k){var G=X.T,L={};X.T=L;try{var V=k(),W=X.S;W!==null&&W(L,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(ee,ve)}catch(te){ve(te)}finally{G!==null&&L.types!==null&&(G.types=L.types),X.T=G}},se.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},se.use=function(k){return X.H.use(k)},se.useActionState=function(k,G,L){return X.H.useActionState(k,G,L)},se.useCallback=function(k,G){return X.H.useCallback(k,G)},se.useContext=function(k){return X.H.useContext(k)},se.useDebugValue=function(){},se.useDeferredValue=function(k,G){return X.H.useDeferredValue(k,G)},se.useEffect=function(k,G){return X.H.useEffect(k,G)},se.useEffectEvent=function(k){return X.H.useEffectEvent(k)},se.useId=function(){return X.H.useId()},se.useImperativeHandle=function(k,G,L){return X.H.useImperativeHandle(k,G,L)},se.useInsertionEffect=function(k,G){return X.H.useInsertionEffect(k,G)},se.useLayoutEffect=function(k,G){return X.H.useLayoutEffect(k,G)},se.useMemo=function(k,G){return X.H.useMemo(k,G)},se.useOptimistic=function(k,G){return X.H.useOptimistic(k,G)},se.useReducer=function(k,G,L){return X.H.useReducer(k,G,L)},se.useRef=function(k){return X.H.useRef(k)},se.useState=function(k){return X.H.useState(k)},se.useSyncExternalStore=function(k,G,L){return X.H.useSyncExternalStore(k,G,L)},se.useTransition=function(){return X.H.useTransition()},se.version="19.2.7",se}var ap;function Mu(){return ap||(ap=1,uu.exports=fy()),uu.exports}var T=Mu();const my=Wp(T);var du={exports:{}},Ei={},hu={exports:{}},fu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var np;function py(){return np||(np=1,(function(r){function a(B,K){var ne=B.length;B.push(K);e:for(;0<ne;){var ve=ne-1>>>1,be=B[ve];if(0<o(be,K))B[ve]=K,B[ne]=be,ne=ve;else break e}}function i(B){return B.length===0?null:B[0]}function l(B){if(B.length===0)return null;var K=B[0],ne=B.pop();if(ne!==K){B[0]=ne;e:for(var ve=0,be=B.length,k=be>>>1;ve<k;){var G=2*(ve+1)-1,L=B[G],V=G+1,W=B[V];if(0>o(L,ne))V<be&&0>o(W,L)?(B[ve]=W,B[V]=ne,ve=V):(B[ve]=L,B[G]=ne,ve=G);else if(V<be&&0>o(W,ne))B[ve]=W,B[V]=ne,ve=V;else break e}}return K}function o(B,K){var ne=B.sortIndex-K.sortIndex;return ne!==0?ne:B.id-K.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,m=f.now();r.unstable_now=function(){return f.now()-m}}var p=[],g=[],y=1,b=null,w=3,_=!1,E=!1,N=!1,D=!1,z=typeof setTimeout=="function"?setTimeout:null,Y=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function I(B){for(var K=i(g);K!==null;){if(K.callback===null)l(g);else if(K.startTime<=B)l(g),K.sortIndex=K.expirationTime,a(p,K);else break;K=i(g)}}function ie(B){if(N=!1,I(B),!E)if(i(p)!==null)E=!0,ee||(ee=!0,Je());else{var K=i(g);K!==null&&ze(ie,K.startTime-B)}}var ee=!1,X=-1,Ae=5,_e=-1;function zt(){return D?!0:!(r.unstable_now()-_e<Ae)}function ct(){if(D=!1,ee){var B=r.unstable_now();_e=B;var K=!0;try{e:{E=!1,N&&(N=!1,Y(X),X=-1),_=!0;var ne=w;try{t:{for(I(B),b=i(p);b!==null&&!(b.expirationTime>B&&zt());){var ve=b.callback;if(typeof ve=="function"){b.callback=null,w=b.priorityLevel;var be=ve(b.expirationTime<=B);if(B=r.unstable_now(),typeof be=="function"){b.callback=be,I(B),K=!0;break t}b===i(p)&&l(p),I(B)}else l(p);b=i(p)}if(b!==null)K=!0;else{var k=i(g);k!==null&&ze(ie,k.startTime-B),K=!1}}break e}finally{b=null,w=ne,_=!1}K=void 0}}finally{K?Je():ee=!1}}}var Je;if(typeof H=="function")Je=function(){H(ct)};else if(typeof MessageChannel<"u"){var bt=new MessageChannel,ut=bt.port2;bt.port1.onmessage=ct,Je=function(){ut.postMessage(null)}}else Je=function(){z(ct,0)};function ze(B,K){X=z(function(){B(r.unstable_now())},K)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(B){B.callback=null},r.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ae=0<B?Math.floor(1e3/B):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(B){switch(w){case 1:case 2:case 3:var K=3;break;default:K=w}var ne=w;w=K;try{return B()}finally{w=ne}},r.unstable_requestPaint=function(){D=!0},r.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ne=w;w=B;try{return K()}finally{w=ne}},r.unstable_scheduleCallback=function(B,K,ne){var ve=r.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?ve+ne:ve):ne=ve,B){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ne+be,B={id:y++,callback:K,priorityLevel:B,startTime:ne,expirationTime:be,sortIndex:-1},ne>ve?(B.sortIndex=ne,a(g,B),i(p)===null&&B===i(g)&&(N?(Y(X),X=-1):N=!0,ze(ie,ne-ve))):(B.sortIndex=be,a(p,B),E||_||(E=!0,ee||(ee=!0,Je()))),B},r.unstable_shouldYield=zt,r.unstable_wrapCallback=function(B){var K=w;return function(){var ne=w;w=K;try{return B.apply(this,arguments)}finally{w=ne}}}})(fu)),fu}var rp;function gy(){return rp||(rp=1,hu.exports=py()),hu.exports}var mu={exports:{}},rt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ip;function vy(){if(ip)return rt;ip=1;var r=Mu();function a(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var l={d:{f:i,r:function(){throw Error(a(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(p,g,y){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:p,containerInfo:g,implementation:y}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,rt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(a(299));return u(p,g,null,y)},rt.flushSync=function(p){var g=f.T,y=l.p;try{if(f.T=null,l.p=2,p)return p()}finally{f.T=g,l.p=y,l.d.f()}},rt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,l.d.C(p,g))},rt.prefetchDNS=function(p){typeof p=="string"&&l.d.D(p)},rt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,b=m(y,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,_=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?l.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:_}):y==="script"&&l.d.X(p,{crossOrigin:b,integrity:w,fetchPriority:_,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},rt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);l.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&l.d.M(p)},rt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,b=m(y,g.crossOrigin);l.d.L(p,y,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},rt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=m(g.as,g.crossOrigin);l.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else l.d.m(p)},rt.requestFormReset=function(p){l.d.r(p)},rt.unstable_batchedUpdates=function(p,g){return p(g)},rt.useFormState=function(p,g,y){return f.H.useFormState(p,g,y)},rt.useFormStatus=function(){return f.H.useHostTransitionStatus()},rt.version="19.2.7",rt}var sp;function yy(){if(sp)return mu.exports;sp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),mu.exports=vy(),mu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lp;function by(){if(lp)return Ei;lp=1;var r=gy(),a=Mu(),i=yy();function l(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function f(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function m(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(l(188))}function g(e){var t=e.alternate;if(!t){if(t=u(e),t===null)throw Error(l(188));return t!==e?null:e}for(var n=e,s=t;;){var c=n.return;if(c===null)break;var h=c.alternate;if(h===null){if(s=c.return,s!==null){n=s;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===n)return p(c),e;if(h===s)return p(c),t;h=h.sibling}throw Error(l(188))}if(n.return!==s.return)n=c,s=h;else{for(var v=!1,x=c.child;x;){if(x===n){v=!0,n=c,s=h;break}if(x===s){v=!0,s=c,n=h;break}x=x.sibling}if(!v){for(x=h.child;x;){if(x===n){v=!0,n=h,s=c;break}if(x===s){v=!0,s=h,n=c;break}x=x.sibling}if(!v)throw Error(l(189))}}if(n.alternate!==s)throw Error(l(190))}if(n.tag!==3)throw Error(l(188));return n.stateNode.current===n?e:t}function y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=y(e),t!==null)return t;e=e.sibling}return null}var b=Object.assign,w=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),H=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Ae=Symbol.for("react.lazy"),_e=Symbol.for("react.activity"),zt=Symbol.for("react.memo_cache_sentinel"),ct=Symbol.iterator;function Je(e){return e===null||typeof e!="object"?null:(e=ct&&e[ct]||e["@@iterator"],typeof e=="function"?e:null)}var bt=Symbol.for("react.client.reference");function ut(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===bt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case z:return"Profiler";case D:return"StrictMode";case ie:return"Suspense";case ee:return"SuspenseList";case _e:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case H:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case I:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:ut(e.type)||"Memo";case Ae:t=e._payload,e=e._init;try{return ut(e(t))}catch{}}return null}var ze=Array.isArray,B=a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ne={pending:!1,data:null,method:null,action:null},ve=[],be=-1;function k(e){return{current:e}}function G(e){0>be||(e.current=ve[be],ve[be]=null,be--)}function L(e,t){be++,ve[be]=e.current,e.current=t}var V=k(null),W=k(null),te=k(null),le=k(null);function Ue(e,t){switch(L(te,t),L(W,e),L(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?_m(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=_m(t),e=Sm(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}G(V),L(V,e)}function Be(){G(V),G(W),G(te)}function Or(e){e.memoizedState!==null&&L(le,e);var t=V.current,n=Sm(t,e.type);t!==n&&(L(W,e),L(V,n))}function Ji(e){W.current===e&&(G(V),G(W)),le.current===e&&(G(le),wi._currentValue=ne)}var Yl,Qu;function on(e){if(Yl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Yl=t&&t[1]||"",Qu=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yl+e+Qu}var Kl=!1;function Pl(e,t){if(!e||Kl)return"";Kl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(t){var q=function(){throw Error()};if(Object.defineProperty(q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(q,[])}catch(U){var O=U}Reflect.construct(e,[],q)}else{try{q.call()}catch(U){O=U}e.call(q.prototype)}}else{try{throw Error()}catch(U){O=U}(q=e())&&typeof q.catch=="function"&&q.catch(function(){})}}catch(U){if(U&&O&&typeof U.stack=="string")return[U.stack,O.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=s.DetermineComponentFrameRoot(),v=h[0],x=h[1];if(v&&x){var S=v.split(`
`),R=x.split(`
`);for(c=s=0;s<S.length&&!S[s].includes("DetermineComponentFrameRoot");)s++;for(;c<R.length&&!R[c].includes("DetermineComponentFrameRoot");)c++;if(s===S.length||c===R.length)for(s=S.length-1,c=R.length-1;1<=s&&0<=c&&S[s]!==R[c];)c--;for(;1<=s&&0<=c;s--,c--)if(S[s]!==R[c]){if(s!==1||c!==1)do if(s--,c--,0>c||S[s]!==R[c]){var M=`
`+S[s].replace(" at new "," at ");return e.displayName&&M.includes("<anonymous>")&&(M=M.replace("<anonymous>",e.displayName)),M}while(1<=s&&0<=c);break}}}finally{Kl=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?on(n):""}function Gg(e,t){switch(e.tag){case 26:case 27:case 5:return on(e.type);case 16:return on("Lazy");case 13:return e.child!==t&&t!==null?on("Suspense Fallback"):on("Suspense");case 19:return on("SuspenseList");case 0:case 15:return Pl(e.type,!1);case 11:return Pl(e.type.render,!1);case 1:return Pl(e.type,!0);case 31:return on("Activity");default:return""}}function Wu(e){try{var t="",n=null;do t+=Gg(e,n),n=e,e=e.return;while(e);return t}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Il=Object.prototype.hasOwnProperty,Xl=r.unstable_scheduleCallback,Jl=r.unstable_cancelCallback,Vg=r.unstable_shouldYield,Yg=r.unstable_requestPaint,xt=r.unstable_now,Kg=r.unstable_getCurrentPriorityLevel,Zu=r.unstable_ImmediatePriority,ed=r.unstable_UserBlockingPriority,Fi=r.unstable_NormalPriority,Pg=r.unstable_LowPriority,td=r.unstable_IdlePriority,Ig=r.log,Xg=r.unstable_setDisableYieldValue,zr=null,wt=null;function za(e){if(typeof Ig=="function"&&Xg(e),wt&&typeof wt.setStrictMode=="function")try{wt.setStrictMode(zr,e)}catch{}}var _t=Math.clz32?Math.clz32:Qg,Jg=Math.log,Fg=Math.LN2;function Qg(e){return e>>>=0,e===0?32:31-(Jg(e)/Fg|0)|0}var Qi=256,Wi=262144,Zi=4194304;function cn(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function es(e,t,n){var s=e.pendingLanes;if(s===0)return 0;var c=0,h=e.suspendedLanes,v=e.pingedLanes;e=e.warmLanes;var x=s&134217727;return x!==0?(s=x&~h,s!==0?c=cn(s):(v&=x,v!==0?c=cn(v):n||(n=x&~e,n!==0&&(c=cn(n))))):(x=s&~h,x!==0?c=cn(x):v!==0?c=cn(v):n||(n=s&~e,n!==0&&(c=cn(n)))),c===0?0:t!==0&&t!==c&&(t&h)===0&&(h=c&-c,n=t&-t,h>=n||h===32&&(n&4194048)!==0)?t:c}function Ur(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Wg(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ad(){var e=Zi;return Zi<<=1,(Zi&62914560)===0&&(Zi=4194304),e}function Fl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Dr(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zg(e,t,n,s,c,h){var v=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,S=e.expirationTimes,R=e.hiddenUpdates;for(n=v&~n;0<n;){var M=31-_t(n),q=1<<M;x[M]=0,S[M]=-1;var O=R[M];if(O!==null)for(R[M]=null,M=0;M<O.length;M++){var U=O[M];U!==null&&(U.lane&=-536870913)}n&=~q}s!==0&&nd(e,s,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(v&~t))}function nd(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var s=31-_t(t);e.entangledLanes|=t,e.entanglements[s]=e.entanglements[s]|1073741824|n&261930}function rd(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var s=31-_t(n),c=1<<s;c&t|e[s]&t&&(e[s]|=t),n&=~c}}function id(e,t){var n=t&-t;return n=(n&42)!==0?1:Ql(n),(n&(e.suspendedLanes|t))!==0?0:n}function Ql(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sd(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:Pm(e.type))}function ld(e,t){var n=K.p;try{return K.p=e,t()}finally{K.p=n}}var Ua=Math.random().toString(36).slice(2),Ze="__reactFiber$"+Ua,dt="__reactProps$"+Ua,On="__reactContainer$"+Ua,Zl="__reactEvents$"+Ua,e0="__reactListeners$"+Ua,t0="__reactHandles$"+Ua,od="__reactResources$"+Ua,Lr="__reactMarker$"+Ua;function eo(e){delete e[Ze],delete e[dt],delete e[Zl],delete e[e0],delete e[t0]}function zn(e){var t=e[Ze];if(t)return t;for(var n=e.parentNode;n;){if(t=n[On]||n[Ze]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Cm(e);e!==null;){if(n=e[Ze])return n;e=Cm(e)}return t}e=n,n=e.parentNode}return null}function Un(e){if(e=e[Ze]||e[On]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Mr(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(l(33))}function Dn(e){var t=e[od];return t||(t=e[od]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Fe(e){e[Lr]=!0}var cd=new Set,ud={};function un(e,t){Ln(e,t),Ln(e+"Capture",t)}function Ln(e,t){for(ud[e]=t,e=0;e<t.length;e++)cd.add(t[e])}var a0=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),dd={},hd={};function n0(e){return Il.call(hd,e)?!0:Il.call(dd,e)?!1:a0.test(e)?hd[e]=!0:(dd[e]=!0,!1)}function ts(e,t,n){if(n0(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var s=t.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+n)}}function as(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+n)}}function ua(e,t,n,s){if(s===null)e.removeAttribute(n);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(t,n,""+s)}}function Ut(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function fd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function r0(e,t,n){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,h=s.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return c.call(this)},set:function(v){n=""+v,h.call(this,v)}}),Object.defineProperty(e,t,{enumerable:s.enumerable}),{getValue:function(){return n},setValue:function(v){n=""+v},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function to(e){if(!e._valueTracker){var t=fd(e)?"checked":"value";e._valueTracker=r0(e,t,""+e[t])}}function md(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),s="";return e&&(s=fd(e)?e.checked?"true":"false":e.value),e=s,e!==n?(t.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var i0=/[\n"\\]/g;function Dt(e){return e.replace(i0,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function ao(e,t,n,s,c,h,v,x){e.name="",v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"?e.type=v:e.removeAttribute("type"),t!=null?v==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+Ut(t)):e.value!==""+Ut(t)&&(e.value=""+Ut(t)):v!=="submit"&&v!=="reset"||e.removeAttribute("value"),t!=null?no(e,v,Ut(t)):n!=null?no(e,v,Ut(n)):s!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Ut(x):e.removeAttribute("name")}function pd(e,t,n,s,c,h,v,x){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),t!=null||n!=null){if(!(h!=="submit"&&h!=="reset"||t!=null)){to(e);return}n=n!=null?""+Ut(n):"",t=t!=null?""+Ut(t):n,x||t===e.value||(e.value=t),e.defaultValue=t}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=x?e.checked:!!s,e.defaultChecked=!!s,v!=null&&typeof v!="function"&&typeof v!="symbol"&&typeof v!="boolean"&&(e.name=v),to(e)}function no(e,t,n){t==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function Mn(e,t,n,s){if(e=e.options,t){t={};for(var c=0;c<n.length;c++)t["$"+n[c]]=!0;for(n=0;n<e.length;n++)c=t.hasOwnProperty("$"+e[n].value),e[n].selected!==c&&(e[n].selected=c),c&&s&&(e[n].defaultSelected=!0)}else{for(n=""+Ut(n),t=null,c=0;c<e.length;c++){if(e[c].value===n){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}t!==null||e[c].disabled||(t=e[c])}t!==null&&(t.selected=!0)}}function gd(e,t,n){if(t!=null&&(t=""+Ut(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n!=null?""+Ut(n):""}function vd(e,t,n,s){if(t==null){if(s!=null){if(n!=null)throw Error(l(92));if(ze(s)){if(1<s.length)throw Error(l(93));s=s[0]}n=s}n==null&&(n=""),t=n}n=Ut(t),e.defaultValue=n,s=e.textContent,s===n&&s!==""&&s!==null&&(e.value=s),to(e)}function Bn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var s0=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yd(e,t,n){var s=t.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?s?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":s?e.setProperty(t,n):typeof n!="number"||n===0||s0.has(t)?t==="float"?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function bd(e,t,n){if(t!=null&&typeof t!="object")throw Error(l(62));if(e=e.style,n!=null){for(var s in n)!n.hasOwnProperty(s)||t!=null&&t.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in t)s=t[c],t.hasOwnProperty(c)&&n[c]!==s&&yd(e,c,s)}else for(var h in t)t.hasOwnProperty(h)&&yd(e,h,t[h])}function ro(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var l0=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),o0=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function rs(e){return o0.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var io=null;function so(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hn=null,$n=null;function xd(e){var t=Un(e);if(t&&(e=t.stateNode)){var n=e[dt]||null;e:switch(e=t.stateNode,t.type){case"input":if(ao(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Dt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var s=n[t];if(s!==e&&s.form===e.form){var c=s[dt]||null;if(!c)throw Error(l(90));ao(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(t=0;t<n.length;t++)s=n[t],s.form===e.form&&md(s)}break e;case"textarea":gd(e,n.value,n.defaultValue);break e;case"select":t=n.value,t!=null&&Mn(e,!!n.multiple,t,!1)}}}var lo=!1;function wd(e,t,n){if(lo)return e(t,n);lo=!0;try{var s=e(t);return s}finally{if(lo=!1,(Hn!==null||$n!==null)&&(Ks(),Hn&&(t=Hn,e=$n,$n=Hn=null,xd(t),e)))for(t=0;t<e.length;t++)xd(e[t])}}function Br(e,t){var n=e.stateNode;if(n===null)return null;var s=n[dt]||null;if(s===null)return null;n=s[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(l(231,t,typeof n));return n}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),oo=!1;if(ha)try{var Hr={};Object.defineProperty(Hr,"passive",{get:function(){oo=!0}}),window.addEventListener("test",Hr,Hr),window.removeEventListener("test",Hr,Hr)}catch{oo=!1}var Da=null,co=null,is=null;function _d(){if(is)return is;var e,t=co,n=t.length,s,c="value"in Da?Da.value:Da.textContent,h=c.length;for(e=0;e<n&&t[e]===c[e];e++);var v=n-e;for(s=1;s<=v&&t[n-s]===c[h-s];s++);return is=c.slice(e,1<s?1-s:void 0)}function ss(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ls(){return!0}function Sd(){return!1}function ht(e){function t(n,s,c,h,v){this._reactName=n,this._targetInst=c,this.type=s,this.nativeEvent=h,this.target=v,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(h):h[x]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ls:Sd,this.isPropagationStopped=Sd,this}return b(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ls)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ls)},persist:function(){},isPersistent:ls}),t}var dn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},os=ht(dn),$r=b({},dn,{view:0,detail:0}),c0=ht($r),uo,ho,qr,cs=b({},$r,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:mo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==qr&&(qr&&e.type==="mousemove"?(uo=e.screenX-qr.screenX,ho=e.screenY-qr.screenY):ho=uo=0,qr=e),uo)},movementY:function(e){return"movementY"in e?e.movementY:ho}}),jd=ht(cs),u0=b({},cs,{dataTransfer:0}),d0=ht(u0),h0=b({},$r,{relatedTarget:0}),fo=ht(h0),f0=b({},dn,{animationName:0,elapsedTime:0,pseudoElement:0}),m0=ht(f0),p0=b({},dn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),g0=ht(p0),v0=b({},dn,{data:0}),kd=ht(v0),y0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},b0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},x0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function w0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=x0[e])?!!t[e]:!1}function mo(){return w0}var _0=b({},$r,{key:function(e){if(e.key){var t=y0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?b0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:mo,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),S0=ht(_0),j0=b({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ed=ht(j0),k0=b({},$r,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:mo}),E0=ht(k0),T0=b({},dn,{propertyName:0,elapsedTime:0,pseudoElement:0}),A0=ht(T0),N0=b({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),C0=ht(N0),R0=b({},dn,{newState:0,oldState:0}),O0=ht(R0),z0=[9,13,27,32],po=ha&&"CompositionEvent"in window,Gr=null;ha&&"documentMode"in document&&(Gr=document.documentMode);var U0=ha&&"TextEvent"in window&&!Gr,Td=ha&&(!po||Gr&&8<Gr&&11>=Gr),Ad=" ",Nd=!1;function Cd(e,t){switch(e){case"keyup":return z0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qn=!1;function D0(e,t){switch(e){case"compositionend":return Rd(t);case"keypress":return t.which!==32?null:(Nd=!0,Ad);case"textInput":return e=t.data,e===Ad&&Nd?null:e;default:return null}}function L0(e,t){if(qn)return e==="compositionend"||!po&&Cd(e,t)?(e=_d(),is=co=Da=null,qn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Td&&t.locale!=="ko"?null:t.data;default:return null}}var M0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!M0[e.type]:t==="textarea"}function zd(e,t,n,s){Hn?$n?$n.push(s):$n=[s]:Hn=s,t=Ws(t,"onChange"),0<t.length&&(n=new os("onChange","change",null,n,s),e.push({event:n,listeners:t}))}var Vr=null,Yr=null;function B0(e){gm(e,0)}function us(e){var t=Mr(e);if(md(t))return e}function Ud(e,t){if(e==="change")return t}var Dd=!1;if(ha){var go;if(ha){var vo="oninput"in document;if(!vo){var Ld=document.createElement("div");Ld.setAttribute("oninput","return;"),vo=typeof Ld.oninput=="function"}go=vo}else go=!1;Dd=go&&(!document.documentMode||9<document.documentMode)}function Md(){Vr&&(Vr.detachEvent("onpropertychange",Bd),Yr=Vr=null)}function Bd(e){if(e.propertyName==="value"&&us(Yr)){var t=[];zd(t,Yr,e,so(e)),wd(B0,t)}}function H0(e,t,n){e==="focusin"?(Md(),Vr=t,Yr=n,Vr.attachEvent("onpropertychange",Bd)):e==="focusout"&&Md()}function $0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(Yr)}function q0(e,t){if(e==="click")return us(t)}function G0(e,t){if(e==="input"||e==="change")return us(t)}function V0(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:V0;function Kr(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),s=Object.keys(t);if(n.length!==s.length)return!1;for(s=0;s<n.length;s++){var c=n[s];if(!Il.call(t,c)||!St(e[c],t[c]))return!1}return!0}function Hd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,t){var n=Hd(e);e=0;for(var s;n;){if(n.nodeType===3){if(s=e+n.textContent.length,e<=t&&s>=t)return{node:n,offset:t-e};e=s}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Hd(n)}}function qd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?qd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Gd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=ns(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=ns(e.document)}return t}function yo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Y0=ha&&"documentMode"in document&&11>=document.documentMode,Gn=null,bo=null,Pr=null,xo=!1;function Vd(e,t,n){var s=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xo||Gn==null||Gn!==ns(s)||(s=Gn,"selectionStart"in s&&yo(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Pr&&Kr(Pr,s)||(Pr=s,s=Ws(bo,"onSelect"),0<s.length&&(t=new os("onSelect","select",null,t,n),e.push({event:t,listeners:s}),t.target=Gn)))}function hn(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Vn={animationend:hn("Animation","AnimationEnd"),animationiteration:hn("Animation","AnimationIteration"),animationstart:hn("Animation","AnimationStart"),transitionrun:hn("Transition","TransitionRun"),transitionstart:hn("Transition","TransitionStart"),transitioncancel:hn("Transition","TransitionCancel"),transitionend:hn("Transition","TransitionEnd")},wo={},Yd={};ha&&(Yd=document.createElement("div").style,"AnimationEvent"in window||(delete Vn.animationend.animation,delete Vn.animationiteration.animation,delete Vn.animationstart.animation),"TransitionEvent"in window||delete Vn.transitionend.transition);function fn(e){if(wo[e])return wo[e];if(!Vn[e])return e;var t=Vn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Yd)return wo[e]=t[n];return e}var Kd=fn("animationend"),Pd=fn("animationiteration"),Id=fn("animationstart"),K0=fn("transitionrun"),P0=fn("transitionstart"),I0=fn("transitioncancel"),Xd=fn("transitionend"),Jd=new Map,_o="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_o.push("scrollEnd");function Kt(e,t){Jd.set(e,t),un(t,[e])}var ds=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Lt=[],Yn=0,So=0;function hs(){for(var e=Yn,t=So=Yn=0;t<e;){var n=Lt[t];Lt[t++]=null;var s=Lt[t];Lt[t++]=null;var c=Lt[t];Lt[t++]=null;var h=Lt[t];if(Lt[t++]=null,s!==null&&c!==null){var v=s.pending;v===null?c.next=c:(c.next=v.next,v.next=c),s.pending=c}h!==0&&Fd(n,c,h)}}function fs(e,t,n,s){Lt[Yn++]=e,Lt[Yn++]=t,Lt[Yn++]=n,Lt[Yn++]=s,So|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function jo(e,t,n,s){return fs(e,t,n,s),ms(e)}function mn(e,t){return fs(e,null,null,t),ms(e)}function Fd(e,t,n){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n);for(var c=!1,h=e.return;h!==null;)h.childLanes|=n,s=h.alternate,s!==null&&(s.childLanes|=n),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&t!==null&&(c=31-_t(n),e=h.hiddenUpdates,s=e[c],s===null?e[c]=[t]:s.push(t),t.lane=n|536870912),h):null}function ms(e){if(50<mi)throw mi=0,zc=null,Error(l(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var Kn={};function X0(e,t,n,s){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jt(e,t,n,s){return new X0(e,t,n,s)}function ko(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,t){var n=e.alternate;return n===null?(n=jt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Qd(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function ps(e,t,n,s,c,h){var v=0;if(s=e,typeof e=="function")ko(e)&&(v=1);else if(typeof e=="string")v=Zv(e,n,V.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case _e:return e=jt(31,n,t,c),e.elementType=_e,e.lanes=h,e;case N:return pn(n.children,c,h,t);case D:v=8,c|=24;break;case z:return e=jt(12,n,t,c|2),e.elementType=z,e.lanes=h,e;case ie:return e=jt(13,n,t,c),e.elementType=ie,e.lanes=h,e;case ee:return e=jt(19,n,t,c),e.elementType=ee,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:v=10;break e;case Y:v=9;break e;case I:v=11;break e;case X:v=14;break e;case Ae:v=16,s=null;break e}v=29,n=Error(l(130,e===null?"null":typeof e,"")),s=null}return t=jt(v,n,t,c),t.elementType=e,t.type=s,t.lanes=h,t}function pn(e,t,n,s){return e=jt(7,e,s,t),e.lanes=n,e}function Eo(e,t,n){return e=jt(6,e,null,t),e.lanes=n,e}function Wd(e){var t=jt(18,null,null,0);return t.stateNode=e,t}function To(e,t,n){return t=jt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Zd=new WeakMap;function Mt(e,t){if(typeof e=="object"&&e!==null){var n=Zd.get(e);return n!==void 0?n:(t={value:e,source:t,stack:Wu(t)},Zd.set(e,t),t)}return{value:e,source:t,stack:Wu(t)}}var Pn=[],In=0,gs=null,Ir=0,Bt=[],Ht=0,La=null,ea=1,ta="";function ma(e,t){Pn[In++]=Ir,Pn[In++]=gs,gs=e,Ir=t}function eh(e,t,n){Bt[Ht++]=ea,Bt[Ht++]=ta,Bt[Ht++]=La,La=e;var s=ea;e=ta;var c=32-_t(s)-1;s&=~(1<<c),n+=1;var h=32-_t(t)+c;if(30<h){var v=c-c%5;h=(s&(1<<v)-1).toString(32),s>>=v,c-=v,ea=1<<32-_t(t)+c|n<<c|s,ta=h+e}else ea=1<<h|n<<c|s,ta=e}function Ao(e){e.return!==null&&(ma(e,1),eh(e,1,0))}function No(e){for(;e===gs;)gs=Pn[--In],Pn[In]=null,Ir=Pn[--In],Pn[In]=null;for(;e===La;)La=Bt[--Ht],Bt[Ht]=null,ta=Bt[--Ht],Bt[Ht]=null,ea=Bt[--Ht],Bt[Ht]=null}function th(e,t){Bt[Ht++]=ea,Bt[Ht++]=ta,Bt[Ht++]=La,ea=t.id,ta=t.overflow,La=e}var et=null,Ne=null,me=!1,Ma=null,$t=!1,Co=Error(l(519));function Ba(e){var t=Error(l(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Xr(Mt(t,e)),Co}function ah(e){var t=e.stateNode,n=e.type,s=e.memoizedProps;switch(t[Ze]=e,t[dt]=s,n){case"dialog":de("cancel",t),de("close",t);break;case"iframe":case"object":case"embed":de("load",t);break;case"video":case"audio":for(n=0;n<gi.length;n++)de(gi[n],t);break;case"source":de("error",t);break;case"img":case"image":case"link":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"input":de("invalid",t),pd(t,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":de("invalid",t);break;case"textarea":de("invalid",t),vd(t,s.value,s.defaultValue,s.children)}n=s.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||t.textContent===""+n||s.suppressHydrationWarning===!0||xm(t.textContent,n)?(s.popover!=null&&(de("beforetoggle",t),de("toggle",t)),s.onScroll!=null&&de("scroll",t),s.onScrollEnd!=null&&de("scrollend",t),s.onClick!=null&&(t.onclick=da),t=!0):t=!1,t||Ba(e,!0)}function nh(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:$t=!1;return;case 27:case 3:$t=!0;return;default:et=et.return}}function Xn(e){if(e!==et)return!1;if(!me)return nh(e),me=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Xc(e.type,e.memoizedProps)),n=!n),n&&Ne&&Ba(e),nh(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ne=Nm(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));Ne=Nm(e)}else t===27?(t=Ne,Wa(e.type)?(e=Zc,Zc=null,Ne=e):Ne=t):Ne=et?Gt(e.stateNode.nextSibling):null;return!0}function gn(){Ne=et=null,me=!1}function Ro(){var e=Ma;return e!==null&&(gt===null?gt=e:gt.push.apply(gt,e),Ma=null),e}function Xr(e){Ma===null?Ma=[e]:Ma.push(e)}var Oo=k(null),vn=null,pa=null;function Ha(e,t,n){L(Oo,t._currentValue),t._currentValue=n}function ga(e){e._currentValue=Oo.current,G(Oo)}function zo(e,t,n){for(;e!==null;){var s=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,s!==null&&(s.childLanes|=t)):s!==null&&(s.childLanes&t)!==t&&(s.childLanes|=t),e===n)break;e=e.return}}function Uo(e,t,n,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var v=c.child;h=h.firstContext;e:for(;h!==null;){var x=h;h=c;for(var S=0;S<t.length;S++)if(x.context===t[S]){h.lanes|=n,x=h.alternate,x!==null&&(x.lanes|=n),zo(h.return,n,e),s||(v=null);break e}h=x.next}}else if(c.tag===18){if(v=c.return,v===null)throw Error(l(341));v.lanes|=n,h=v.alternate,h!==null&&(h.lanes|=n),zo(v,n,e),v=null}else v=c.child;if(v!==null)v.return=c;else for(v=c;v!==null;){if(v===e){v=null;break}if(c=v.sibling,c!==null){c.return=v.return,v=c;break}v=v.return}c=v}}function Jn(e,t,n,s){e=null;for(var c=t,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var v=c.alternate;if(v===null)throw Error(l(387));if(v=v.memoizedProps,v!==null){var x=c.type;St(c.pendingProps.value,v.value)||(e!==null?e.push(x):e=[x])}}else if(c===le.current){if(v=c.alternate,v===null)throw Error(l(387));v.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wi):e=[wi])}c=c.return}e!==null&&Uo(t,e,n,s),t.flags|=262144}function vs(e){for(e=e.firstContext;e!==null;){if(!St(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function yn(e){vn=e,pa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return rh(vn,e)}function ys(e,t){return vn===null&&yn(e),rh(e,t)}function rh(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},pa===null){if(e===null)throw Error(l(308));pa=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else pa=pa.next=t;return n}var J0=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(n,s){e.push(s)}};this.abort=function(){t.aborted=!0,e.forEach(function(n){return n()})}},F0=r.unstable_scheduleCallback,Q0=r.unstable_NormalPriority,Ge={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Do(){return{controller:new J0,data:new Map,refCount:0}}function Jr(e){e.refCount--,e.refCount===0&&F0(Q0,function(){e.controller.abort()})}var Fr=null,Lo=0,Fn=0,Qn=null;function W0(e,t){if(Fr===null){var n=Fr=[];Lo=0,Fn=Hc(),Qn={status:"pending",value:void 0,then:function(s){n.push(s)}}}return Lo++,t.then(ih,ih),t}function ih(){if(--Lo===0&&Fr!==null){Qn!==null&&(Qn.status="fulfilled");var e=Fr;Fr=null,Fn=0,Qn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Z0(e,t){var n=[],s={status:"pending",value:null,reason:null,then:function(c){n.push(c)}};return e.then(function(){s.status="fulfilled",s.value=t;for(var c=0;c<n.length;c++)(0,n[c])(t)},function(c){for(s.status="rejected",s.reason=c,c=0;c<n.length;c++)(0,n[c])(void 0)}),s}var sh=B.S;B.S=function(e,t){Yf=xt(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&W0(e,t),sh!==null&&sh(e,t)};var bn=k(null);function Mo(){var e=bn.current;return e!==null?e:Ee.pooledCache}function bs(e,t){t===null?L(bn,bn.current):L(bn,t.pool)}function lh(){var e=Mo();return e===null?null:{parent:Ge._currentValue,pool:e}}var Wn=Error(l(460)),Bo=Error(l(474)),xs=Error(l(542)),ws={then:function(){}};function oh(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ch(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(da,da),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dh(e),e;default:if(typeof t.status=="string")t.then(da,da);else{if(e=Ee,e!==null&&100<e.shellSuspendCounter)throw Error(l(482));e=t,e.status="pending",e.then(function(s){if(t.status==="pending"){var c=t;c.status="fulfilled",c.value=s}},function(s){if(t.status==="pending"){var c=t;c.status="rejected",c.reason=s}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,dh(e),e}throw wn=t,Wn}}function xn(e){try{var t=e._init;return t(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(wn=n,Wn):n}}var wn=null;function uh(){if(wn===null)throw Error(l(459));var e=wn;return wn=null,e}function dh(e){if(e===Wn||e===xs)throw Error(l(483))}var Zn=null,Qr=0;function _s(e){var t=Qr;return Qr+=1,Zn===null&&(Zn=[]),ch(Zn,e,t)}function Wr(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ss(e,t){throw t.$$typeof===w?Error(l(525)):(e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function hh(e){function t(A,j){if(e){var C=A.deletions;C===null?(A.deletions=[j],A.flags|=16):C.push(j)}}function n(A,j){if(!e)return null;for(;j!==null;)t(A,j),j=j.sibling;return null}function s(A){for(var j=new Map;A!==null;)A.key!==null?j.set(A.key,A):j.set(A.index,A),A=A.sibling;return j}function c(A,j){return A=fa(A,j),A.index=0,A.sibling=null,A}function h(A,j,C){return A.index=C,e?(C=A.alternate,C!==null?(C=C.index,C<j?(A.flags|=67108866,j):C):(A.flags|=67108866,j)):(A.flags|=1048576,j)}function v(A){return e&&A.alternate===null&&(A.flags|=67108866),A}function x(A,j,C,$){return j===null||j.tag!==6?(j=Eo(C,A.mode,$),j.return=A,j):(j=c(j,C),j.return=A,j)}function S(A,j,C,$){var Z=C.type;return Z===N?M(A,j,C.props.children,$,C.key):j!==null&&(j.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ae&&xn(Z)===j.type)?(j=c(j,C.props),Wr(j,C),j.return=A,j):(j=ps(C.type,C.key,C.props,null,A.mode,$),Wr(j,C),j.return=A,j)}function R(A,j,C,$){return j===null||j.tag!==4||j.stateNode.containerInfo!==C.containerInfo||j.stateNode.implementation!==C.implementation?(j=To(C,A.mode,$),j.return=A,j):(j=c(j,C.children||[]),j.return=A,j)}function M(A,j,C,$,Z){return j===null||j.tag!==7?(j=pn(C,A.mode,$,Z),j.return=A,j):(j=c(j,C),j.return=A,j)}function q(A,j,C){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Eo(""+j,A.mode,C),j.return=A,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case _:return C=ps(j.type,j.key,j.props,null,A.mode,C),Wr(C,j),C.return=A,C;case E:return j=To(j,A.mode,C),j.return=A,j;case Ae:return j=xn(j),q(A,j,C)}if(ze(j)||Je(j))return j=pn(j,A.mode,C,null),j.return=A,j;if(typeof j.then=="function")return q(A,_s(j),C);if(j.$$typeof===H)return q(A,ys(A,j),C);Ss(A,j)}return null}function O(A,j,C,$){var Z=j!==null?j.key:null;if(typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint")return Z!==null?null:x(A,j,""+C,$);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case _:return C.key===Z?S(A,j,C,$):null;case E:return C.key===Z?R(A,j,C,$):null;case Ae:return C=xn(C),O(A,j,C,$)}if(ze(C)||Je(C))return Z!==null?null:M(A,j,C,$,null);if(typeof C.then=="function")return O(A,j,_s(C),$);if(C.$$typeof===H)return O(A,j,ys(A,C),$);Ss(A,C)}return null}function U(A,j,C,$,Z){if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return A=A.get(C)||null,x(j,A,""+$,Z);if(typeof $=="object"&&$!==null){switch($.$$typeof){case _:return A=A.get($.key===null?C:$.key)||null,S(j,A,$,Z);case E:return A=A.get($.key===null?C:$.key)||null,R(j,A,$,Z);case Ae:return $=xn($),U(A,j,C,$,Z)}if(ze($)||Je($))return A=A.get(C)||null,M(j,A,$,Z,null);if(typeof $.then=="function")return U(A,j,C,_s($),Z);if($.$$typeof===H)return U(A,j,C,ys(j,$),Z);Ss(j,$)}return null}function J(A,j,C,$){for(var Z=null,pe=null,Q=j,ce=j=0,fe=null;Q!==null&&ce<C.length;ce++){Q.index>ce?(fe=Q,Q=null):fe=Q.sibling;var ge=O(A,Q,C[ce],$);if(ge===null){Q===null&&(Q=fe);break}e&&Q&&ge.alternate===null&&t(A,Q),j=h(ge,j,ce),pe===null?Z=ge:pe.sibling=ge,pe=ge,Q=fe}if(ce===C.length)return n(A,Q),me&&ma(A,ce),Z;if(Q===null){for(;ce<C.length;ce++)Q=q(A,C[ce],$),Q!==null&&(j=h(Q,j,ce),pe===null?Z=Q:pe.sibling=Q,pe=Q);return me&&ma(A,ce),Z}for(Q=s(Q);ce<C.length;ce++)fe=U(Q,A,ce,C[ce],$),fe!==null&&(e&&fe.alternate!==null&&Q.delete(fe.key===null?ce:fe.key),j=h(fe,j,ce),pe===null?Z=fe:pe.sibling=fe,pe=fe);return e&&Q.forEach(function(nn){return t(A,nn)}),me&&ma(A,ce),Z}function ae(A,j,C,$){if(C==null)throw Error(l(151));for(var Z=null,pe=null,Q=j,ce=j=0,fe=null,ge=C.next();Q!==null&&!ge.done;ce++,ge=C.next()){Q.index>ce?(fe=Q,Q=null):fe=Q.sibling;var nn=O(A,Q,ge.value,$);if(nn===null){Q===null&&(Q=fe);break}e&&Q&&nn.alternate===null&&t(A,Q),j=h(nn,j,ce),pe===null?Z=nn:pe.sibling=nn,pe=nn,Q=fe}if(ge.done)return n(A,Q),me&&ma(A,ce),Z;if(Q===null){for(;!ge.done;ce++,ge=C.next())ge=q(A,ge.value,$),ge!==null&&(j=h(ge,j,ce),pe===null?Z=ge:pe.sibling=ge,pe=ge);return me&&ma(A,ce),Z}for(Q=s(Q);!ge.done;ce++,ge=C.next())ge=U(Q,A,ce,ge.value,$),ge!==null&&(e&&ge.alternate!==null&&Q.delete(ge.key===null?ce:ge.key),j=h(ge,j,ce),pe===null?Z=ge:pe.sibling=ge,pe=ge);return e&&Q.forEach(function(uy){return t(A,uy)}),me&&ma(A,ce),Z}function ke(A,j,C,$){if(typeof C=="object"&&C!==null&&C.type===N&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case _:e:{for(var Z=C.key;j!==null;){if(j.key===Z){if(Z=C.type,Z===N){if(j.tag===7){n(A,j.sibling),$=c(j,C.props.children),$.return=A,A=$;break e}}else if(j.elementType===Z||typeof Z=="object"&&Z!==null&&Z.$$typeof===Ae&&xn(Z)===j.type){n(A,j.sibling),$=c(j,C.props),Wr($,C),$.return=A,A=$;break e}n(A,j);break}else t(A,j);j=j.sibling}C.type===N?($=pn(C.props.children,A.mode,$,C.key),$.return=A,A=$):($=ps(C.type,C.key,C.props,null,A.mode,$),Wr($,C),$.return=A,A=$)}return v(A);case E:e:{for(Z=C.key;j!==null;){if(j.key===Z)if(j.tag===4&&j.stateNode.containerInfo===C.containerInfo&&j.stateNode.implementation===C.implementation){n(A,j.sibling),$=c(j,C.children||[]),$.return=A,A=$;break e}else{n(A,j);break}else t(A,j);j=j.sibling}$=To(C,A.mode,$),$.return=A,A=$}return v(A);case Ae:return C=xn(C),ke(A,j,C,$)}if(ze(C))return J(A,j,C,$);if(Je(C)){if(Z=Je(C),typeof Z!="function")throw Error(l(150));return C=Z.call(C),ae(A,j,C,$)}if(typeof C.then=="function")return ke(A,j,_s(C),$);if(C.$$typeof===H)return ke(A,j,ys(A,C),$);Ss(A,C)}return typeof C=="string"&&C!==""||typeof C=="number"||typeof C=="bigint"?(C=""+C,j!==null&&j.tag===6?(n(A,j.sibling),$=c(j,C),$.return=A,A=$):(n(A,j),$=Eo(C,A.mode,$),$.return=A,A=$),v(A)):n(A,j)}return function(A,j,C,$){try{Qr=0;var Z=ke(A,j,C,$);return Zn=null,Z}catch(Q){if(Q===Wn||Q===xs)throw Q;var pe=jt(29,Q,null,A.mode);return pe.lanes=$,pe.return=A,pe}finally{}}}var _n=hh(!0),fh=hh(!1),$a=!1;function Ho(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function $o(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ga(e,t,n){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(ye&2)!==0){var c=s.pending;return c===null?t.next=t:(t.next=c.next,c.next=t),s.pending=t,t=ms(e),Fd(e,null,n),t}return fs(e,s,t,n),ms(e)}function Zr(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194048)!==0)){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,rd(e,n)}}function qo(e,t){var n=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,n===s)){var c=null,h=null;if(n=n.firstBaseUpdate,n!==null){do{var v={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};h===null?c=h=v:h=h.next=v,n=n.next}while(n!==null);h===null?c=h=t:h=h.next=t}else c=h=t;n={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:s.shared,callbacks:s.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Go=!1;function ei(){if(Go){var e=Qn;if(e!==null)throw e}}function ti(e,t,n,s){Go=!1;var c=e.updateQueue;$a=!1;var h=c.firstBaseUpdate,v=c.lastBaseUpdate,x=c.shared.pending;if(x!==null){c.shared.pending=null;var S=x,R=S.next;S.next=null,v===null?h=R:v.next=R,v=S;var M=e.alternate;M!==null&&(M=M.updateQueue,x=M.lastBaseUpdate,x!==v&&(x===null?M.firstBaseUpdate=R:x.next=R,M.lastBaseUpdate=S))}if(h!==null){var q=c.baseState;v=0,M=R=S=null,x=h;do{var O=x.lane&-536870913,U=O!==x.lane;if(U?(he&O)===O:(s&O)===O){O!==0&&O===Fn&&(Go=!0),M!==null&&(M=M.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var J=e,ae=x;O=t;var ke=n;switch(ae.tag){case 1:if(J=ae.payload,typeof J=="function"){q=J.call(ke,q,O);break e}q=J;break e;case 3:J.flags=J.flags&-65537|128;case 0:if(J=ae.payload,O=typeof J=="function"?J.call(ke,q,O):J,O==null)break e;q=b({},q,O);break e;case 2:$a=!0}}O=x.callback,O!==null&&(e.flags|=64,U&&(e.flags|=8192),U=c.callbacks,U===null?c.callbacks=[O]:U.push(O))}else U={lane:O,tag:x.tag,payload:x.payload,callback:x.callback,next:null},M===null?(R=M=U,S=q):M=M.next=U,v|=O;if(x=x.next,x===null){if(x=c.shared.pending,x===null)break;U=x,x=U.next,U.next=null,c.lastBaseUpdate=U,c.shared.pending=null}}while(!0);M===null&&(S=q),c.baseState=S,c.firstBaseUpdate=R,c.lastBaseUpdate=M,h===null&&(c.shared.lanes=0),Ia|=v,e.lanes=v,e.memoizedState=q}}function mh(e,t){if(typeof e!="function")throw Error(l(191,e));e.call(t)}function ph(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)mh(n[e],t)}var er=k(null),js=k(0);function gh(e,t){e=ka,L(js,e),L(er,t),ka=e|t.baseLanes}function Vo(){L(js,ka),L(er,er.current)}function Yo(){ka=js.current,G(er),G(js)}var kt=k(null),qt=null;function Va(e){var t=e.alternate;L(He,He.current&1),L(kt,e),qt===null&&(t===null||er.current!==null||t.memoizedState!==null)&&(qt=e)}function Ko(e){L(He,He.current),L(kt,e),qt===null&&(qt=e)}function vh(e){e.tag===22?(L(He,He.current),L(kt,e),qt===null&&(qt=e)):Ya()}function Ya(){L(He,He.current),L(kt,kt.current)}function Et(e){G(kt),qt===e&&(qt=null),G(He)}var He=k(0);function ks(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Qc(n)||Wc(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var va=0,oe=null,Se=null,Ve=null,Es=!1,tr=!1,Sn=!1,Ts=0,ai=0,ar=null,ev=0;function De(){throw Error(l(321))}function Po(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!St(e[n],t[n]))return!1;return!0}function Io(e,t,n,s,c,h){return va=h,oe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,B.H=e===null||e.memoizedState===null?ef:oc,Sn=!1,h=n(s,c),Sn=!1,tr&&(h=bh(t,n,s,c)),yh(e),h}function yh(e){B.H=ii;var t=Se!==null&&Se.next!==null;if(va=0,Ve=Se=oe=null,Es=!1,ai=0,ar=null,t)throw Error(l(300));e===null||Ye||(e=e.dependencies,e!==null&&vs(e)&&(Ye=!0))}function bh(e,t,n,s){oe=e;var c=0;do{if(tr&&(ar=null),ai=0,tr=!1,25<=c)throw Error(l(301));if(c+=1,Ve=Se=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}B.H=tf,h=t(n,s)}while(tr);return h}function tv(){var e=B.H,t=e.useState()[0];return t=typeof t.then=="function"?ni(t):t,e=e.useState()[0],(Se!==null?Se.memoizedState:null)!==e&&(oe.flags|=1024),t}function Xo(){var e=Ts!==0;return Ts=0,e}function Jo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fo(e){if(Es){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Es=!1}va=0,Ve=Se=oe=null,tr=!1,ai=Ts=0,ar=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ve===null?oe.memoizedState=Ve=e:Ve=Ve.next=e,Ve}function $e(){if(Se===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Se.next;var t=Ve===null?oe.memoizedState:Ve.next;if(t!==null)Ve=t,Se=e;else{if(e===null)throw oe.alternate===null?Error(l(467)):Error(l(310));Se=e,e={memoizedState:Se.memoizedState,baseState:Se.baseState,baseQueue:Se.baseQueue,queue:Se.queue,next:null},Ve===null?oe.memoizedState=Ve=e:Ve=Ve.next=e}return Ve}function As(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ni(e){var t=ai;return ai+=1,ar===null&&(ar=[]),e=ch(ar,e,t),t=oe,(Ve===null?t.memoizedState:Ve.next)===null&&(t=t.alternate,B.H=t===null||t.memoizedState===null?ef:oc),e}function Ns(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ni(e);if(e.$$typeof===H)return tt(e)}throw Error(l(438,String(e)))}function Qo(e){var t=null,n=oe.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var s=oe.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(t={data:s.data.map(function(c){return c.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),n===null&&(n=As(),oe.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),s=0;s<e;s++)n[s]=zt;return t.index++,n}function ya(e,t){return typeof t=="function"?t(e):t}function Cs(e){var t=$e();return Wo(t,Se,e)}function Wo(e,t,n){var s=e.queue;if(s===null)throw Error(l(311));s.lastRenderedReducer=n;var c=e.baseQueue,h=s.pending;if(h!==null){if(c!==null){var v=c.next;c.next=h.next,h.next=v}t.baseQueue=c=h,s.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{t=c.next;var x=v=null,S=null,R=t,M=!1;do{var q=R.lane&-536870913;if(q!==R.lane?(he&q)===q:(va&q)===q){var O=R.revertLane;if(O===0)S!==null&&(S=S.next={lane:0,revertLane:0,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),q===Fn&&(M=!0);else if((va&O)===O){R=R.next,O===Fn&&(M=!0);continue}else q={lane:0,revertLane:R.revertLane,gesture:null,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(x=S=q,v=h):S=S.next=q,oe.lanes|=O,Ia|=O;q=R.action,Sn&&n(h,q),h=R.hasEagerState?R.eagerState:n(h,q)}else O={lane:q,revertLane:R.revertLane,gesture:R.gesture,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null},S===null?(x=S=O,v=h):S=S.next=O,oe.lanes|=q,Ia|=q;R=R.next}while(R!==null&&R!==t);if(S===null?v=h:S.next=x,!St(h,e.memoizedState)&&(Ye=!0,M&&(n=Qn,n!==null)))throw n;e.memoizedState=h,e.baseState=v,e.baseQueue=S,s.lastRenderedState=h}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Zo(e){var t=$e(),n=t.queue;if(n===null)throw Error(l(311));n.lastRenderedReducer=e;var s=n.dispatch,c=n.pending,h=t.memoizedState;if(c!==null){n.pending=null;var v=c=c.next;do h=e(h,v.action),v=v.next;while(v!==c);St(h,t.memoizedState)||(Ye=!0),t.memoizedState=h,t.baseQueue===null&&(t.baseState=h),n.lastRenderedState=h}return[h,s]}function xh(e,t,n){var s=oe,c=$e(),h=me;if(h){if(n===void 0)throw Error(l(407));n=n()}else n=t();var v=!St((Se||c).memoizedState,n);if(v&&(c.memoizedState=n,Ye=!0),c=c.queue,ac(Sh.bind(null,s,c,e),[e]),c.getSnapshot!==t||v||Ve!==null&&Ve.memoizedState.tag&1){if(s.flags|=2048,nr(9,{destroy:void 0},_h.bind(null,s,c,n,t),null),Ee===null)throw Error(l(349));h||(va&127)!==0||wh(s,t,n)}return n}function wh(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=oe.updateQueue,t===null?(t=As(),oe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function _h(e,t,n,s){t.value=n,t.getSnapshot=s,jh(t)&&kh(e)}function Sh(e,t,n){return n(function(){jh(t)&&kh(e)})}function jh(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!St(e,n)}catch{return!0}}function kh(e){var t=mn(e,2);t!==null&&vt(t,e,2)}function ec(e){var t=lt();if(typeof e=="function"){var n=e;if(e=n(),Sn){za(!0);try{n()}finally{za(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},t}function Eh(e,t,n,s){return e.baseState=n,Wo(e,Se,typeof s=="function"?s:ya)}function av(e,t,n,s,c){if(zs(e))throw Error(l(485));if(e=t.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(v){h.listeners.push(v)}};B.T!==null?n(!0):h.isTransition=!1,s(h),n=t.pending,n===null?(h.next=t.pending=h,Th(t,h)):(h.next=n.next,t.pending=n.next=h)}}function Th(e,t){var n=t.action,s=t.payload,c=e.state;if(t.isTransition){var h=B.T,v={};B.T=v;try{var x=n(c,s),S=B.S;S!==null&&S(v,x),Ah(e,t,x)}catch(R){tc(e,t,R)}finally{h!==null&&v.types!==null&&(h.types=v.types),B.T=h}}else try{h=n(c,s),Ah(e,t,h)}catch(R){tc(e,t,R)}}function Ah(e,t,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(s){Nh(e,t,s)},function(s){return tc(e,t,s)}):Nh(e,t,n)}function Nh(e,t,n){t.status="fulfilled",t.value=n,Ch(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,Th(e,n)))}function tc(e,t,n){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do t.status="rejected",t.reason=n,Ch(t),t=t.next;while(t!==s)}e.action=null}function Ch(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Rh(e,t){return t}function Oh(e,t){if(me){var n=Ee.formState;if(n!==null){e:{var s=oe;if(me){if(Ne){t:{for(var c=Ne,h=$t;c.nodeType!==8;){if(!h){c=null;break t}if(c=Gt(c.nextSibling),c===null){c=null;break t}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Ne=Gt(c.nextSibling),s=c.data==="F!";break e}}Ba(s)}s=!1}s&&(t=n[0])}}return n=lt(),n.memoizedState=n.baseState=t,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Rh,lastRenderedState:t},n.queue=s,n=Qh.bind(null,oe,s),s.dispatch=n,s=ec(!1),h=lc.bind(null,oe,!1,s.queue),s=lt(),c={state:t,dispatch:null,action:e,pending:null},s.queue=c,n=av.bind(null,oe,c,h,n),c.dispatch=n,s.memoizedState=e,[t,n,!1]}function zh(e){var t=$e();return Uh(t,Se,e)}function Uh(e,t,n){if(t=Wo(e,t,Rh)[0],e=Cs(ya)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var s=ni(t)}catch(v){throw v===Wn?xs:v}else s=t;t=$e();var c=t.queue,h=c.dispatch;return n!==t.memoizedState&&(oe.flags|=2048,nr(9,{destroy:void 0},nv.bind(null,c,n),null)),[s,h,e]}function nv(e,t){e.action=t}function Dh(e){var t=$e(),n=Se;if(n!==null)return Uh(t,n,e);$e(),t=t.memoizedState,n=$e();var s=n.queue.dispatch;return n.memoizedState=e,[t,s,!1]}function nr(e,t,n,s){return e={tag:e,create:n,deps:s,inst:t,next:null},t=oe.updateQueue,t===null&&(t=As(),oe.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(s=n.next,n.next=e,e.next=s,t.lastEffect=e),e}function Lh(){return $e().memoizedState}function Rs(e,t,n,s){var c=lt();oe.flags|=e,c.memoizedState=nr(1|t,{destroy:void 0},n,s===void 0?null:s)}function Os(e,t,n,s){var c=$e();s=s===void 0?null:s;var h=c.memoizedState.inst;Se!==null&&s!==null&&Po(s,Se.memoizedState.deps)?c.memoizedState=nr(t,h,n,s):(oe.flags|=e,c.memoizedState=nr(1|t,h,n,s))}function Mh(e,t){Rs(8390656,8,e,t)}function ac(e,t){Os(2048,8,e,t)}function rv(e){oe.flags|=4;var t=oe.updateQueue;if(t===null)t=As(),oe.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function Bh(e){var t=$e().memoizedState;return rv({ref:t,nextImpl:e}),function(){if((ye&2)!==0)throw Error(l(440));return t.impl.apply(void 0,arguments)}}function Hh(e,t){return Os(4,2,e,t)}function $h(e,t){return Os(4,4,e,t)}function qh(e,t){if(typeof t=="function"){e=e();var n=t(e);return function(){typeof n=="function"?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Gh(e,t,n){n=n!=null?n.concat([e]):null,Os(4,4,qh.bind(null,t,e),n)}function nc(){}function Vh(e,t){var n=$e();t=t===void 0?null:t;var s=n.memoizedState;return t!==null&&Po(t,s[1])?s[0]:(n.memoizedState=[e,t],e)}function Yh(e,t){var n=$e();t=t===void 0?null:t;var s=n.memoizedState;if(t!==null&&Po(t,s[1]))return s[0];if(s=e(),Sn){za(!0);try{e()}finally{za(!1)}}return n.memoizedState=[s,t],s}function rc(e,t,n){return n===void 0||(va&1073741824)!==0&&(he&261930)===0?e.memoizedState=t:(e.memoizedState=n,e=Pf(),oe.lanes|=e,Ia|=e,n)}function Kh(e,t,n,s){return St(n,t)?n:er.current!==null?(e=rc(e,n,s),St(e,t)||(Ye=!0),e):(va&42)===0||(va&1073741824)!==0&&(he&261930)===0?(Ye=!0,e.memoizedState=n):(e=Pf(),oe.lanes|=e,Ia|=e,t)}function Ph(e,t,n,s,c){var h=K.p;K.p=h!==0&&8>h?h:8;var v=B.T,x={};B.T=x,lc(e,!1,t,n);try{var S=c(),R=B.S;if(R!==null&&R(x,S),S!==null&&typeof S=="object"&&typeof S.then=="function"){var M=Z0(S,s);ri(e,t,M,Nt(e))}else ri(e,t,s,Nt(e))}catch(q){ri(e,t,{then:function(){},status:"rejected",reason:q},Nt())}finally{K.p=h,v!==null&&x.types!==null&&(v.types=x.types),B.T=v}}function iv(){}function ic(e,t,n,s){if(e.tag!==5)throw Error(l(476));var c=Ih(e).queue;Ph(e,c,t,ne,n===null?iv:function(){return Xh(e),n(s)})}function Ih(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:ne,baseState:ne,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:ne},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Xh(e){var t=Ih(e);t.next===null&&(t=e.alternate.memoizedState),ri(e,t.next.queue,{},Nt())}function sc(){return tt(wi)}function Jh(){return $e().memoizedState}function Fh(){return $e().memoizedState}function sv(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=Nt();e=qa(n);var s=Ga(t,e,n);s!==null&&(vt(s,t,n),Zr(s,t,n)),t={cache:Do()},e.payload=t;return}t=t.return}}function lv(e,t,n){var s=Nt();n={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},zs(e)?Wh(t,n):(n=jo(e,t,n,s),n!==null&&(vt(n,e,s),Zh(n,t,s)))}function Qh(e,t,n){var s=Nt();ri(e,t,n,s)}function ri(e,t,n,s){var c={lane:s,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(zs(e))Wh(t,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=t.lastRenderedReducer,h!==null))try{var v=t.lastRenderedState,x=h(v,n);if(c.hasEagerState=!0,c.eagerState=x,St(x,v))return fs(e,t,c,0),Ee===null&&hs(),!1}catch{}finally{}if(n=jo(e,t,c,s),n!==null)return vt(n,e,s),Zh(n,t,s),!0}return!1}function lc(e,t,n,s){if(s={lane:2,revertLane:Hc(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},zs(e)){if(t)throw Error(l(479))}else t=jo(e,n,s,2),t!==null&&vt(t,e,2)}function zs(e){var t=e.alternate;return e===oe||t!==null&&t===oe}function Wh(e,t){tr=Es=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Zh(e,t,n){if((n&4194048)!==0){var s=t.lanes;s&=e.pendingLanes,n|=s,t.lanes=n,rd(e,n)}}var ii={readContext:tt,use:Ns,useCallback:De,useContext:De,useEffect:De,useImperativeHandle:De,useLayoutEffect:De,useInsertionEffect:De,useMemo:De,useReducer:De,useRef:De,useState:De,useDebugValue:De,useDeferredValue:De,useTransition:De,useSyncExternalStore:De,useId:De,useHostTransitionStatus:De,useFormState:De,useActionState:De,useOptimistic:De,useMemoCache:De,useCacheRefresh:De};ii.useEffectEvent=De;var ef={readContext:tt,use:Ns,useCallback:function(e,t){return lt().memoizedState=[e,t===void 0?null:t],e},useContext:tt,useEffect:Mh,useImperativeHandle:function(e,t,n){n=n!=null?n.concat([e]):null,Rs(4194308,4,qh.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Rs(4194308,4,e,t)},useInsertionEffect:function(e,t){Rs(4,2,e,t)},useMemo:function(e,t){var n=lt();t=t===void 0?null:t;var s=e();if(Sn){za(!0);try{e()}finally{za(!1)}}return n.memoizedState=[s,t],s},useReducer:function(e,t,n){var s=lt();if(n!==void 0){var c=n(t);if(Sn){za(!0);try{n(t)}finally{za(!1)}}}else c=t;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=lv.bind(null,oe,e),[s.memoizedState,e]},useRef:function(e){var t=lt();return e={current:e},t.memoizedState=e},useState:function(e){e=ec(e);var t=e.queue,n=Qh.bind(null,oe,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:nc,useDeferredValue:function(e,t){var n=lt();return rc(n,e,t)},useTransition:function(){var e=ec(!1);return e=Ph.bind(null,oe,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var s=oe,c=lt();if(me){if(n===void 0)throw Error(l(407));n=n()}else{if(n=t(),Ee===null)throw Error(l(349));(he&127)!==0||wh(s,t,n)}c.memoizedState=n;var h={value:n,getSnapshot:t};return c.queue=h,Mh(Sh.bind(null,s,h,e),[e]),s.flags|=2048,nr(9,{destroy:void 0},_h.bind(null,s,h,n,t),null),n},useId:function(){var e=lt(),t=Ee.identifierPrefix;if(me){var n=ta,s=ea;n=(s&~(1<<32-_t(s)-1)).toString(32)+n,t="_"+t+"R_"+n,n=Ts++,0<n&&(t+="H"+n.toString(32)),t+="_"}else n=ev++,t="_"+t+"r_"+n.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:sc,useFormState:Oh,useActionState:Oh,useOptimistic:function(e){var t=lt();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=lc.bind(null,oe,!0,n),n.dispatch=t,[e,t]},useMemoCache:Qo,useCacheRefresh:function(){return lt().memoizedState=sv.bind(null,oe)},useEffectEvent:function(e){var t=lt(),n={impl:e};return t.memoizedState=n,function(){if((ye&2)!==0)throw Error(l(440));return n.impl.apply(void 0,arguments)}}},oc={readContext:tt,use:Ns,useCallback:Vh,useContext:tt,useEffect:ac,useImperativeHandle:Gh,useInsertionEffect:Hh,useLayoutEffect:$h,useMemo:Yh,useReducer:Cs,useRef:Lh,useState:function(){return Cs(ya)},useDebugValue:nc,useDeferredValue:function(e,t){var n=$e();return Kh(n,Se.memoizedState,e,t)},useTransition:function(){var e=Cs(ya)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:xh,useId:Jh,useHostTransitionStatus:sc,useFormState:zh,useActionState:zh,useOptimistic:function(e,t){var n=$e();return Eh(n,Se,e,t)},useMemoCache:Qo,useCacheRefresh:Fh};oc.useEffectEvent=Bh;var tf={readContext:tt,use:Ns,useCallback:Vh,useContext:tt,useEffect:ac,useImperativeHandle:Gh,useInsertionEffect:Hh,useLayoutEffect:$h,useMemo:Yh,useReducer:Zo,useRef:Lh,useState:function(){return Zo(ya)},useDebugValue:nc,useDeferredValue:function(e,t){var n=$e();return Se===null?rc(n,e,t):Kh(n,Se.memoizedState,e,t)},useTransition:function(){var e=Zo(ya)[0],t=$e().memoizedState;return[typeof e=="boolean"?e:ni(e),t]},useSyncExternalStore:xh,useId:Jh,useHostTransitionStatus:sc,useFormState:Dh,useActionState:Dh,useOptimistic:function(e,t){var n=$e();return Se!==null?Eh(n,Se,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Qo,useCacheRefresh:Fh};tf.useEffectEvent=Bh;function cc(e,t,n,s){t=e.memoizedState,n=n(s,t),n=n==null?t:b({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var uc={enqueueSetState:function(e,t,n){e=e._reactInternals;var s=Nt(),c=qa(s);c.payload=t,n!=null&&(c.callback=n),t=Ga(e,c,s),t!==null&&(vt(t,e,s),Zr(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var s=Nt(),c=qa(s);c.tag=1,c.payload=t,n!=null&&(c.callback=n),t=Ga(e,c,s),t!==null&&(vt(t,e,s),Zr(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Nt(),s=qa(n);s.tag=2,t!=null&&(s.callback=t),t=Ga(e,s,n),t!==null&&(vt(t,e,n),Zr(t,e,n))}};function af(e,t,n,s,c,h,v){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,h,v):t.prototype&&t.prototype.isPureReactComponent?!Kr(n,s)||!Kr(c,h):!0}function nf(e,t,n,s){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,s),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,s),t.state!==e&&uc.enqueueReplaceState(t,t.state,null)}function jn(e,t){var n=t;if("ref"in t){n={};for(var s in t)s!=="ref"&&(n[s]=t[s])}if(e=e.defaultProps){n===t&&(n=b({},n));for(var c in e)n[c]===void 0&&(n[c]=e[c])}return n}function rf(e){ds(e)}function sf(e){console.error(e)}function lf(e){ds(e)}function Us(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(s){setTimeout(function(){throw s})}}function of(e,t,n){try{var s=e.onCaughtError;s(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function dc(e,t,n){return n=qa(n),n.tag=3,n.payload={element:null},n.callback=function(){Us(e,t)},n}function cf(e){return e=qa(e),e.tag=3,e}function uf(e,t,n,s){var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var h=s.value;e.payload=function(){return c(h)},e.callback=function(){of(t,n,s)}}var v=n.stateNode;v!==null&&typeof v.componentDidCatch=="function"&&(e.callback=function(){of(t,n,s),typeof c!="function"&&(Xa===null?Xa=new Set([this]):Xa.add(this));var x=s.stack;this.componentDidCatch(s.value,{componentStack:x!==null?x:""})})}function ov(e,t,n,s,c){if(n.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(t=n.alternate,t!==null&&Jn(t,n,c,!0),n=kt.current,n!==null){switch(n.tag){case 31:case 13:return qt===null?Ps():n.alternate===null&&Le===0&&(Le=3),n.flags&=-257,n.flags|=65536,n.lanes=c,s===ws?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([s]):t.add(s),Lc(e,s,c)),!1;case 22:return n.flags|=65536,s===ws?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([s])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([s]):n.add(s)),Lc(e,s,c)),!1}throw Error(l(435,n.tag))}return Lc(e,s,c),Ps(),!1}if(me)return t=kt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=c,s!==Co&&(e=Error(l(422),{cause:s}),Xr(Mt(e,n)))):(s!==Co&&(t=Error(l(423),{cause:s}),Xr(Mt(t,n))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Mt(s,n),c=dc(e.stateNode,s,c),qo(e,c),Le!==4&&(Le=2)),!1;var h=Error(l(520),{cause:s});if(h=Mt(h,n),fi===null?fi=[h]:fi.push(h),Le!==4&&(Le=2),t===null)return!0;s=Mt(s,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=c&-c,n.lanes|=e,e=dc(n.stateNode,s,e),qo(n,e),!1;case 1:if(t=n.type,h=n.stateNode,(n.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Xa===null||!Xa.has(h))))return n.flags|=65536,c&=-c,n.lanes|=c,c=cf(c),uf(c,e,n,s),qo(n,c),!1}n=n.return}while(n!==null);return!1}var hc=Error(l(461)),Ye=!1;function at(e,t,n,s){t.child=e===null?fh(t,null,n,s):_n(t,e.child,n,s)}function df(e,t,n,s,c){n=n.render;var h=t.ref;if("ref"in s){var v={};for(var x in s)x!=="ref"&&(v[x]=s[x])}else v=s;return yn(t),s=Io(e,t,n,v,h,c),x=Xo(),e!==null&&!Ye?(Jo(e,t,c),ba(e,t,c)):(me&&x&&Ao(t),t.flags|=1,at(e,t,s,c),t.child)}function hf(e,t,n,s,c){if(e===null){var h=n.type;return typeof h=="function"&&!ko(h)&&h.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=h,ff(e,t,h,s,c)):(e=ps(n.type,null,s,t,t.mode,c),e.ref=t.ref,e.return=t,t.child=e)}if(h=e.child,!xc(e,c)){var v=h.memoizedProps;if(n=n.compare,n=n!==null?n:Kr,n(v,s)&&e.ref===t.ref)return ba(e,t,c)}return t.flags|=1,e=fa(h,s),e.ref=t.ref,e.return=t,t.child=e}function ff(e,t,n,s,c){if(e!==null){var h=e.memoizedProps;if(Kr(h,s)&&e.ref===t.ref)if(Ye=!1,t.pendingProps=s=h,xc(e,c))(e.flags&131072)!==0&&(Ye=!0);else return t.lanes=e.lanes,ba(e,t,c)}return fc(e,t,n,s,c)}function mf(e,t,n,s){var c=s.children,h=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((t.flags&128)!==0){if(h=h!==null?h.baseLanes|n:n,e!==null){for(s=t.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~h}else s=0,t.child=null;return pf(e,t,h,n,s)}if((n&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&bs(t,h!==null?h.cachePool:null),h!==null?gh(t,h):Vo(),vh(t);else return s=t.lanes=536870912,pf(e,t,h!==null?h.baseLanes|n:n,n,s)}else h!==null?(bs(t,h.cachePool),gh(t,h),Ya(),t.memoizedState=null):(e!==null&&bs(t,null),Vo(),Ya());return at(e,t,c,n),t.child}function si(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function pf(e,t,n,s,c){var h=Mo();return h=h===null?null:{parent:Ge._currentValue,pool:h},t.memoizedState={baseLanes:n,cachePool:h},e!==null&&bs(t,null),Vo(),vh(t),e!==null&&Jn(e,t,s,!0),t.childLanes=c,null}function Ds(e,t){return t=Ms({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function gf(e,t,n){return _n(t,e.child,null,n),e=Ds(t,t.pendingProps),e.flags|=2,Et(t),t.memoizedState=null,e}function cv(e,t,n){var s=t.pendingProps,c=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(me){if(s.mode==="hidden")return e=Ds(t,s),t.lanes=536870912,si(null,e);if(Ko(t),(e=Ne)?(e=Am(e,$t),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:La!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=Wd(e),n.return=t,t.child=n,et=t,Ne=null)):e=null,e===null)throw Ba(t);return t.lanes=536870912,null}return Ds(t,s)}var h=e.memoizedState;if(h!==null){var v=h.dehydrated;if(Ko(t),c)if(t.flags&256)t.flags&=-257,t=gf(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(l(558));else if(Ye||Jn(e,t,n,!1),c=(n&e.childLanes)!==0,Ye||c){if(s=Ee,s!==null&&(v=id(s,n),v!==0&&v!==h.retryLane))throw h.retryLane=v,mn(e,v),vt(s,e,v),hc;Ps(),t=gf(e,t,n)}else e=h.treeContext,Ne=Gt(v.nextSibling),et=t,me=!0,Ma=null,$t=!1,e!==null&&th(t,e),t=Ds(t,s),t.flags|=4096;return t}return e=fa(e.child,{mode:s.mode,children:s.children}),e.ref=t.ref,t.child=e,e.return=t,e}function Ls(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(l(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function fc(e,t,n,s,c){return yn(t),n=Io(e,t,n,s,void 0,c),s=Xo(),e!==null&&!Ye?(Jo(e,t,c),ba(e,t,c)):(me&&s&&Ao(t),t.flags|=1,at(e,t,n,c),t.child)}function vf(e,t,n,s,c,h){return yn(t),t.updateQueue=null,n=bh(t,s,n,c),yh(e),s=Xo(),e!==null&&!Ye?(Jo(e,t,h),ba(e,t,h)):(me&&s&&Ao(t),t.flags|=1,at(e,t,n,h),t.child)}function yf(e,t,n,s,c){if(yn(t),t.stateNode===null){var h=Kn,v=n.contextType;typeof v=="object"&&v!==null&&(h=tt(v)),h=new n(s,h),t.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=uc,t.stateNode=h,h._reactInternals=t,h=t.stateNode,h.props=s,h.state=t.memoizedState,h.refs={},Ho(t),v=n.contextType,h.context=typeof v=="object"&&v!==null?tt(v):Kn,h.state=t.memoizedState,v=n.getDerivedStateFromProps,typeof v=="function"&&(cc(t,n,v,s),h.state=t.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(v=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),v!==h.state&&uc.enqueueReplaceState(h,h.state,null),ti(t,s,h,c),ei(),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!0}else if(e===null){h=t.stateNode;var x=t.memoizedProps,S=jn(n,x);h.props=S;var R=h.context,M=n.contextType;v=Kn,typeof M=="object"&&M!==null&&(v=tt(M));var q=n.getDerivedStateFromProps;M=typeof q=="function"||typeof h.getSnapshotBeforeUpdate=="function",x=t.pendingProps!==x,M||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(x||R!==v)&&nf(t,h,s,v),$a=!1;var O=t.memoizedState;h.state=O,ti(t,s,h,c),ei(),R=t.memoizedState,x||O!==R||$a?(typeof q=="function"&&(cc(t,n,q,s),R=t.memoizedState),(S=$a||af(t,n,S,s,O,R,v))?(M||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=s,t.memoizedState=R),h.props=s,h.state=R,h.context=v,s=S):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),s=!1)}else{h=t.stateNode,$o(e,t),v=t.memoizedProps,M=jn(n,v),h.props=M,q=t.pendingProps,O=h.context,R=n.contextType,S=Kn,typeof R=="object"&&R!==null&&(S=tt(R)),x=n.getDerivedStateFromProps,(R=typeof x=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==q||O!==S)&&nf(t,h,s,S),$a=!1,O=t.memoizedState,h.state=O,ti(t,s,h,c),ei();var U=t.memoizedState;v!==q||O!==U||$a||e!==null&&e.dependencies!==null&&vs(e.dependencies)?(typeof x=="function"&&(cc(t,n,x,s),U=t.memoizedState),(M=$a||af(t,n,M,s,O,U,S)||e!==null&&e.dependencies!==null&&vs(e.dependencies))?(R||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(s,U,S),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(s,U,S)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=s,t.memoizedState=U),h.props=s,h.state=U,h.context=S,s=M):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),s=!1)}return h=s,Ls(e,t),s=(t.flags&128)!==0,h||s?(h=t.stateNode,n=s&&typeof n.getDerivedStateFromError!="function"?null:h.render(),t.flags|=1,e!==null&&s?(t.child=_n(t,e.child,null,c),t.child=_n(t,null,n,c)):at(e,t,n,c),t.memoizedState=h.state,e=t.child):e=ba(e,t,c),e}function bf(e,t,n,s){return gn(),t.flags|=256,at(e,t,n,s),t.child}var mc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:lh()}}function gc(e,t,n){return e=e!==null?e.childLanes&~n:0,t&&(e|=At),e}function xf(e,t,n){var s=t.pendingProps,c=!1,h=(t.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(He.current&2)!==0),v&&(c=!0,t.flags&=-129),v=(t.flags&32)!==0,t.flags&=-33,e===null){if(me){if(c?Va(t):Ya(),(e=Ne)?(e=Am(e,$t),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:La!==null?{id:ea,overflow:ta}:null,retryLane:536870912,hydrationErrors:null},n=Wd(e),n.return=t,t.child=n,et=t,Ne=null)):e=null,e===null)throw Ba(t);return Wc(e)?t.lanes=32:t.lanes=536870912,null}var x=s.children;return s=s.fallback,c?(Ya(),c=t.mode,x=Ms({mode:"hidden",children:x},c),s=pn(s,c,n,null),x.return=t,s.return=t,x.sibling=s,t.child=x,s=t.child,s.memoizedState=pc(n),s.childLanes=gc(e,v,n),t.memoizedState=mc,si(null,s)):(Va(t),vc(t,x))}var S=e.memoizedState;if(S!==null&&(x=S.dehydrated,x!==null)){if(h)t.flags&256?(Va(t),t.flags&=-257,t=yc(e,t,n)):t.memoizedState!==null?(Ya(),t.child=e.child,t.flags|=128,t=null):(Ya(),x=s.fallback,c=t.mode,s=Ms({mode:"visible",children:s.children},c),x=pn(x,c,n,null),x.flags|=2,s.return=t,x.return=t,s.sibling=x,t.child=s,_n(t,e.child,null,n),s=t.child,s.memoizedState=pc(n),s.childLanes=gc(e,v,n),t.memoizedState=mc,t=si(null,s));else if(Va(t),Wc(x)){if(v=x.nextSibling&&x.nextSibling.dataset,v)var R=v.dgst;v=R,s=Error(l(419)),s.stack="",s.digest=v,Xr({value:s,source:null,stack:null}),t=yc(e,t,n)}else if(Ye||Jn(e,t,n,!1),v=(n&e.childLanes)!==0,Ye||v){if(v=Ee,v!==null&&(s=id(v,n),s!==0&&s!==S.retryLane))throw S.retryLane=s,mn(e,s),vt(v,e,s),hc;Qc(x)||Ps(),t=yc(e,t,n)}else Qc(x)?(t.flags|=192,t.child=e.child,t=null):(e=S.treeContext,Ne=Gt(x.nextSibling),et=t,me=!0,Ma=null,$t=!1,e!==null&&th(t,e),t=vc(t,s.children),t.flags|=4096);return t}return c?(Ya(),x=s.fallback,c=t.mode,S=e.child,R=S.sibling,s=fa(S,{mode:"hidden",children:s.children}),s.subtreeFlags=S.subtreeFlags&65011712,R!==null?x=fa(R,x):(x=pn(x,c,n,null),x.flags|=2),x.return=t,s.return=t,s.sibling=x,t.child=s,si(null,s),s=t.child,x=e.child.memoizedState,x===null?x=pc(n):(c=x.cachePool,c!==null?(S=Ge._currentValue,c=c.parent!==S?{parent:S,pool:S}:c):c=lh(),x={baseLanes:x.baseLanes|n,cachePool:c}),s.memoizedState=x,s.childLanes=gc(e,v,n),t.memoizedState=mc,si(e.child,s)):(Va(t),n=e.child,e=n.sibling,n=fa(n,{mode:"visible",children:s.children}),n.return=t,n.sibling=null,e!==null&&(v=t.deletions,v===null?(t.deletions=[e],t.flags|=16):v.push(e)),t.child=n,t.memoizedState=null,n)}function vc(e,t){return t=Ms({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function Ms(e,t){return e=jt(22,e,null,t),e.lanes=0,e}function yc(e,t,n){return _n(t,e.child,null,n),e=vc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function wf(e,t,n){e.lanes|=t;var s=e.alternate;s!==null&&(s.lanes|=t),zo(e.return,t,n)}function bc(e,t,n,s,c,h){var v=e.memoizedState;v===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:s,tail:n,tailMode:c,treeForkCount:h}:(v.isBackwards=t,v.rendering=null,v.renderingStartTime=0,v.last=s,v.tail=n,v.tailMode=c,v.treeForkCount=h)}function _f(e,t,n){var s=t.pendingProps,c=s.revealOrder,h=s.tail;s=s.children;var v=He.current,x=(v&2)!==0;if(x?(v=v&1|2,t.flags|=128):v&=1,L(He,v),at(e,t,s,n),s=me?Ir:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&wf(e,n,t);else if(e.tag===19)wf(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(n=t.child,c=null;n!==null;)e=n.alternate,e!==null&&ks(e)===null&&(c=n),n=n.sibling;n=c,n===null?(c=t.child,t.child=null):(c=n.sibling,n.sibling=null),bc(t,!1,c,n,h,s);break;case"backwards":case"unstable_legacy-backwards":for(n=null,c=t.child,t.child=null;c!==null;){if(e=c.alternate,e!==null&&ks(e)===null){t.child=c;break}e=c.sibling,c.sibling=n,n=c,c=e}bc(t,!0,n,null,h,s);break;case"together":bc(t,!1,null,null,void 0,s);break;default:t.memoizedState=null}return t.child}function ba(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ia|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Jn(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,n=fa(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=fa(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function xc(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&vs(e)))}function uv(e,t,n){switch(t.tag){case 3:Ue(t,t.stateNode.containerInfo),Ha(t,Ge,e.memoizedState.cache),gn();break;case 27:case 5:Or(t);break;case 4:Ue(t,t.stateNode.containerInfo);break;case 10:Ha(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Ko(t),null;break;case 13:var s=t.memoizedState;if(s!==null)return s.dehydrated!==null?(Va(t),t.flags|=128,null):(n&t.child.childLanes)!==0?xf(e,t,n):(Va(t),e=ba(e,t,n),e!==null?e.sibling:null);Va(t);break;case 19:var c=(e.flags&128)!==0;if(s=(n&t.childLanes)!==0,s||(Jn(e,t,n,!1),s=(n&t.childLanes)!==0),c){if(s)return _f(e,t,n);t.flags|=128}if(c=t.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),L(He,He.current),s)break;return null;case 22:return t.lanes=0,mf(e,t,n,t.pendingProps);case 24:Ha(t,Ge,e.memoizedState.cache)}return ba(e,t,n)}function Sf(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)Ye=!0;else{if(!xc(e,n)&&(t.flags&128)===0)return Ye=!1,uv(e,t,n);Ye=(e.flags&131072)!==0}else Ye=!1,me&&(t.flags&1048576)!==0&&eh(t,Ir,t.index);switch(t.lanes=0,t.tag){case 16:e:{var s=t.pendingProps;if(e=xn(t.elementType),t.type=e,typeof e=="function")ko(e)?(s=jn(e,s),t.tag=1,t=yf(null,t,e,s,n)):(t.tag=0,t=fc(null,t,e,s,n));else{if(e!=null){var c=e.$$typeof;if(c===I){t.tag=11,t=df(null,t,e,s,n);break e}else if(c===X){t.tag=14,t=hf(null,t,e,s,n);break e}}throw t=ut(e)||e,Error(l(306,t,""))}}return t;case 0:return fc(e,t,t.type,t.pendingProps,n);case 1:return s=t.type,c=jn(s,t.pendingProps),yf(e,t,s,c,n);case 3:e:{if(Ue(t,t.stateNode.containerInfo),e===null)throw Error(l(387));s=t.pendingProps;var h=t.memoizedState;c=h.element,$o(e,t),ti(t,s,null,n);var v=t.memoizedState;if(s=v.cache,Ha(t,Ge,s),s!==h.cache&&Uo(t,[Ge],n,!0),ei(),s=v.element,h.isDehydrated)if(h={element:s,isDehydrated:!1,cache:v.cache},t.updateQueue.baseState=h,t.memoizedState=h,t.flags&256){t=bf(e,t,s,n);break e}else if(s!==c){c=Mt(Error(l(424)),t),Xr(c),t=bf(e,t,s,n);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ne=Gt(e.firstChild),et=t,me=!0,Ma=null,$t=!0,n=fh(t,null,s,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(gn(),s===c){t=ba(e,t,n);break e}at(e,t,s,n)}t=t.child}return t;case 26:return Ls(e,t),e===null?(n=Um(t.type,null,t.pendingProps,null))?t.memoizedState=n:me||(n=t.type,e=t.pendingProps,s=Zs(te.current).createElement(n),s[Ze]=t,s[dt]=e,nt(s,n,e),Fe(s),t.stateNode=s):t.memoizedState=Um(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Or(t),e===null&&me&&(s=t.stateNode=Rm(t.type,t.pendingProps,te.current),et=t,$t=!0,c=Ne,Wa(t.type)?(Zc=c,Ne=Gt(s.firstChild)):Ne=c),at(e,t,t.pendingProps.children,n),Ls(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&me&&((c=s=Ne)&&(s=$v(s,t.type,t.pendingProps,$t),s!==null?(t.stateNode=s,et=t,Ne=Gt(s.firstChild),$t=!1,c=!0):c=!1),c||Ba(t)),Or(t),c=t.type,h=t.pendingProps,v=e!==null?e.memoizedProps:null,s=h.children,Xc(c,h)?s=null:v!==null&&Xc(c,v)&&(t.flags|=32),t.memoizedState!==null&&(c=Io(e,t,tv,null,null,n),wi._currentValue=c),Ls(e,t),at(e,t,s,n),t.child;case 6:return e===null&&me&&((e=n=Ne)&&(n=qv(n,t.pendingProps,$t),n!==null?(t.stateNode=n,et=t,Ne=null,e=!0):e=!1),e||Ba(t)),null;case 13:return xf(e,t,n);case 4:return Ue(t,t.stateNode.containerInfo),s=t.pendingProps,e===null?t.child=_n(t,null,s,n):at(e,t,s,n),t.child;case 11:return df(e,t,t.type,t.pendingProps,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:return s=t.pendingProps,Ha(t,t.type,s.value),at(e,t,s.children,n),t.child;case 9:return c=t.type._context,s=t.pendingProps.children,yn(t),c=tt(c),s=s(c),t.flags|=1,at(e,t,s,n),t.child;case 14:return hf(e,t,t.type,t.pendingProps,n);case 15:return ff(e,t,t.type,t.pendingProps,n);case 19:return _f(e,t,n);case 31:return cv(e,t,n);case 22:return mf(e,t,n,t.pendingProps);case 24:return yn(t),s=tt(Ge),e===null?(c=Mo(),c===null&&(c=Ee,h=Do(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=n),c=h),t.memoizedState={parent:s,cache:c},Ho(t),Ha(t,Ge,c)):((e.lanes&n)!==0&&($o(e,t),ti(t,null,null,n),ei()),c=e.memoizedState,h=t.memoizedState,c.parent!==s?(c={parent:s,cache:s},t.memoizedState=c,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=c),Ha(t,Ge,s)):(s=h.cache,Ha(t,Ge,s),s!==c.cache&&Uo(t,[Ge],n,!0))),at(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(l(156,t.tag))}function xa(e){e.flags|=4}function wc(e,t,n,s,c){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Ff())e.flags|=8192;else throw wn=ws,Bo}else e.flags&=-16777217}function jf(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hm(t))if(Ff())e.flags|=8192;else throw wn=ws,Bo}function Bs(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?ad():536870912,e.lanes|=t,lr|=t)}function li(e,t){if(!me)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var s=null;n!==null;)n.alternate!==null&&(s=n),n=n.sibling;s===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ce(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,s=0;if(t)for(var c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)n|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=n,t}function dv(e,t,n){var s=t.pendingProps;switch(No(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(t),null;case 1:return Ce(t),null;case 3:return n=t.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),ga(Ge),Be(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Xn(t)?xa(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ro())),Ce(t),null;case 26:var c=t.type,h=t.memoizedState;return e===null?(xa(t),h!==null?(Ce(t),jf(t,h)):(Ce(t),wc(t,c,null,s,n))):h?h!==e.memoizedState?(xa(t),Ce(t),jf(t,h)):(Ce(t),t.flags&=-16777217):(e=e.memoizedProps,e!==s&&xa(t),Ce(t),wc(t,c,e,s,n)),null;case 27:if(Ji(t),n=te.current,c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&xa(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ce(t),null}e=V.current,Xn(t)?ah(t):(e=Rm(c,s,n),t.stateNode=e,xa(t))}return Ce(t),null;case 5:if(Ji(t),c=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==s&&xa(t);else{if(!s){if(t.stateNode===null)throw Error(l(166));return Ce(t),null}if(h=V.current,Xn(t))ah(t);else{var v=Zs(te.current);switch(h){case 1:h=v.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=v.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=v.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=v.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof s.is=="string"?v.createElement("select",{is:s.is}):v.createElement("select"),s.multiple?h.multiple=!0:s.size&&(h.size=s.size);break;default:h=typeof s.is=="string"?v.createElement(c,{is:s.is}):v.createElement(c)}}h[Ze]=t,h[dt]=s;e:for(v=t.child;v!==null;){if(v.tag===5||v.tag===6)h.appendChild(v.stateNode);else if(v.tag!==4&&v.tag!==27&&v.child!==null){v.child.return=v,v=v.child;continue}if(v===t)break e;for(;v.sibling===null;){if(v.return===null||v.return===t)break e;v=v.return}v.sibling.return=v.return,v=v.sibling}t.stateNode=h;e:switch(nt(h,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&xa(t)}}return Ce(t),wc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==s&&xa(t);else{if(typeof s!="string"&&t.stateNode===null)throw Error(l(166));if(e=te.current,Xn(t)){if(e=t.stateNode,n=t.memoizedProps,s=null,c=et,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[Ze]=t,e=!!(e.nodeValue===n||s!==null&&s.suppressHydrationWarning===!0||xm(e.nodeValue,n)),e||Ba(t,!0)}else e=Zs(e).createTextNode(s),e[Ze]=t,t.stateNode=e}return Ce(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(s=Xn(t),n!==null){if(e===null){if(!s)throw Error(l(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(557));e[Ze]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),e=!1}else n=Ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(Et(t),t):(Et(t),null);if((t.flags&128)!==0)throw Error(l(558))}return Ce(t),null;case 13:if(s=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Xn(t),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(l(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(l(317));c[Ze]=t}else gn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ce(t),c=!1}else c=Ro(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return t.flags&256?(Et(t),t):(Et(t),null)}return Et(t),(t.flags&128)!==0?(t.lanes=n,t):(n=s!==null,e=e!==null&&e.memoizedState!==null,n&&(s=t.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),h=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(h=s.memoizedState.cachePool.pool),h!==c&&(s.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Bs(t,t.updateQueue),Ce(t),null);case 4:return Be(),e===null&&Vc(t.stateNode.containerInfo),Ce(t),null;case 10:return ga(t.type),Ce(t),null;case 19:if(G(He),s=t.memoizedState,s===null)return Ce(t),null;if(c=(t.flags&128)!==0,h=s.rendering,h===null)if(c)li(s,!1);else{if(Le!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=ks(e),h!==null){for(t.flags|=128,li(s,!1),e=h.updateQueue,t.updateQueue=e,Bs(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)Qd(n,e),n=n.sibling;return L(He,He.current&1|2),me&&ma(t,s.treeForkCount),t.child}e=e.sibling}s.tail!==null&&xt()>Vs&&(t.flags|=128,c=!0,li(s,!1),t.lanes=4194304)}else{if(!c)if(e=ks(h),e!==null){if(t.flags|=128,c=!0,e=e.updateQueue,t.updateQueue=e,Bs(t,e),li(s,!0),s.tail===null&&s.tailMode==="hidden"&&!h.alternate&&!me)return Ce(t),null}else 2*xt()-s.renderingStartTime>Vs&&n!==536870912&&(t.flags|=128,c=!0,li(s,!1),t.lanes=4194304);s.isBackwards?(h.sibling=t.child,t.child=h):(e=s.last,e!==null?e.sibling=h:t.child=h,s.last=h)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,n=He.current,L(He,c?n&1|2:n&1),me&&ma(t,s.treeForkCount),e):(Ce(t),null);case 22:case 23:return Et(t),Yo(),s=t.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(t.flags|=8192):s&&(t.flags|=8192),s?(n&536870912)!==0&&(t.flags&128)===0&&(Ce(t),t.subtreeFlags&6&&(t.flags|=8192)):Ce(t),n=t.updateQueue,n!==null&&Bs(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),s=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(s=t.memoizedState.cachePool.pool),s!==n&&(t.flags|=2048),e!==null&&G(bn),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),ga(Ge),Ce(t),null;case 25:return null;case 30:return null}throw Error(l(156,t.tag))}function hv(e,t){switch(No(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return ga(Ge),Be(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return Ji(t),null;case 31:if(t.memoizedState!==null){if(Et(t),t.alternate===null)throw Error(l(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(Et(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));gn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return G(He),null;case 4:return Be(),null;case 10:return ga(t.type),null;case 22:case 23:return Et(t),Yo(),e!==null&&G(bn),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return ga(Ge),null;case 25:return null;default:return null}}function kf(e,t){switch(No(t),t.tag){case 3:ga(Ge),Be();break;case 26:case 27:case 5:Ji(t);break;case 4:Be();break;case 31:t.memoizedState!==null&&Et(t);break;case 13:Et(t);break;case 19:G(He);break;case 10:ga(t.type);break;case 22:case 23:Et(t),Yo(),e!==null&&G(bn);break;case 24:ga(Ge)}}function oi(e,t){try{var n=t.updateQueue,s=n!==null?n.lastEffect:null;if(s!==null){var c=s.next;n=c;do{if((n.tag&e)===e){s=void 0;var h=n.create,v=n.inst;s=h(),v.destroy=s}n=n.next}while(n!==c)}}catch(x){we(t,t.return,x)}}function Ka(e,t,n){try{var s=t.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var h=c.next;s=h;do{if((s.tag&e)===e){var v=s.inst,x=v.destroy;if(x!==void 0){v.destroy=void 0,c=t;var S=n,R=x;try{R()}catch(M){we(c,S,M)}}}s=s.next}while(s!==h)}}catch(M){we(t,t.return,M)}}function Ef(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{ph(t,n)}catch(s){we(e,e.return,s)}}}function Tf(e,t,n){n.props=jn(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(s){we(e,t,s)}}function ci(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof n=="function"?e.refCleanup=n(s):n.current=s}}catch(c){we(e,t,c)}}function aa(e,t){var n=e.ref,s=e.refCleanup;if(n!==null)if(typeof s=="function")try{s()}catch(c){we(e,t,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(c){we(e,t,c)}else n.current=null}function Af(e){var t=e.type,n=e.memoizedProps,s=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&s.focus();break e;case"img":n.src?s.src=n.src:n.srcSet&&(s.srcset=n.srcSet)}}catch(c){we(e,e.return,c)}}function _c(e,t,n){try{var s=e.stateNode;Uv(s,e.type,n,t),s[dt]=t}catch(c){we(e,e.return,c)}}function Nf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function Sc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Nf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jc(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=da));else if(s!==4&&(s===27&&Wa(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(jc(e,t,n),e=e.sibling;e!==null;)jc(e,t,n),e=e.sibling}function Hs(e,t,n){var s=e.tag;if(s===5||s===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(s!==4&&(s===27&&Wa(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Hs(e,t,n),e=e.sibling;e!==null;)Hs(e,t,n),e=e.sibling}function Cf(e){var t=e.stateNode,n=e.memoizedProps;try{for(var s=e.type,c=t.attributes;c.length;)t.removeAttributeNode(c[0]);nt(t,s,n),t[Ze]=e,t[dt]=n}catch(h){we(e,e.return,h)}}var wa=!1,Ke=!1,kc=!1,Rf=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function fv(e,t){if(e=e.containerInfo,Pc=sl,e=Gd(e),yo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var s=n.getSelection&&n.getSelection();if(s&&s.rangeCount!==0){n=s.anchorNode;var c=s.anchorOffset,h=s.focusNode;s=s.focusOffset;try{n.nodeType,h.nodeType}catch{n=null;break e}var v=0,x=-1,S=-1,R=0,M=0,q=e,O=null;t:for(;;){for(var U;q!==n||c!==0&&q.nodeType!==3||(x=v+c),q!==h||s!==0&&q.nodeType!==3||(S=v+s),q.nodeType===3&&(v+=q.nodeValue.length),(U=q.firstChild)!==null;)O=q,q=U;for(;;){if(q===e)break t;if(O===n&&++R===c&&(x=v),O===h&&++M===s&&(S=v),(U=q.nextSibling)!==null)break;q=O,O=q.parentNode}q=U}n=x===-1||S===-1?null:{start:x,end:S}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ic={focusedElem:e,selectionRange:n},sl=!1,Qe=t;Qe!==null;)if(t=Qe,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Qe=e;else for(;Qe!==null;){switch(t=Qe,h=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)c=e[n],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,n=t,c=h.memoizedProps,h=h.memoizedState,s=n.stateNode;try{var J=jn(n.type,c);e=s.getSnapshotBeforeUpdate(J,h),s.__reactInternalSnapshotBeforeUpdate=e}catch(ae){we(n,n.return,ae)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)Fc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Fc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(l(163))}if(e=t.sibling,e!==null){e.return=t.return,Qe=e;break}Qe=t.return}}function Of(e,t,n){var s=n.flags;switch(n.tag){case 0:case 11:case 15:Sa(e,n),s&4&&oi(5,n);break;case 1:if(Sa(e,n),s&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(v){we(n,n.return,v)}else{var c=jn(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(c,t,e.__reactInternalSnapshotBeforeUpdate)}catch(v){we(n,n.return,v)}}s&64&&Ef(n),s&512&&ci(n,n.return);break;case 3:if(Sa(e,n),s&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{ph(e,t)}catch(v){we(n,n.return,v)}}break;case 27:t===null&&s&4&&Cf(n);case 26:case 5:Sa(e,n),t===null&&s&4&&Af(n),s&512&&ci(n,n.return);break;case 12:Sa(e,n);break;case 31:Sa(e,n),s&4&&Df(e,n);break;case 13:Sa(e,n),s&4&&Lf(e,n),s&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=_v.bind(null,n),Gv(e,n))));break;case 22:if(s=n.memoizedState!==null||wa,!s){t=t!==null&&t.memoizedState!==null||Ke,c=wa;var h=Ke;wa=s,(Ke=t)&&!h?ja(e,n,(n.subtreeFlags&8772)!==0):Sa(e,n),wa=c,Ke=h}break;case 30:break;default:Sa(e,n)}}function zf(e){var t=e.alternate;t!==null&&(e.alternate=null,zf(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&eo(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Re=null,ft=!1;function _a(e,t,n){for(n=n.child;n!==null;)Uf(e,t,n),n=n.sibling}function Uf(e,t,n){if(wt&&typeof wt.onCommitFiberUnmount=="function")try{wt.onCommitFiberUnmount(zr,n)}catch{}switch(n.tag){case 26:Ke||aa(n,t),_a(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Ke||aa(n,t);var s=Re,c=ft;Wa(n.type)&&(Re=n.stateNode,ft=!1),_a(e,t,n),yi(n.stateNode),Re=s,ft=c;break;case 5:Ke||aa(n,t);case 6:if(s=Re,c=ft,Re=null,_a(e,t,n),Re=s,ft=c,Re!==null)if(ft)try{(Re.nodeType===9?Re.body:Re.nodeName==="HTML"?Re.ownerDocument.body:Re).removeChild(n.stateNode)}catch(h){we(n,t,h)}else try{Re.removeChild(n.stateNode)}catch(h){we(n,t,h)}break;case 18:Re!==null&&(ft?(e=Re,Em(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),pr(e)):Em(Re,n.stateNode));break;case 4:s=Re,c=ft,Re=n.stateNode.containerInfo,ft=!0,_a(e,t,n),Re=s,ft=c;break;case 0:case 11:case 14:case 15:Ka(2,n,t),Ke||Ka(4,n,t),_a(e,t,n);break;case 1:Ke||(aa(n,t),s=n.stateNode,typeof s.componentWillUnmount=="function"&&Tf(n,t,s)),_a(e,t,n);break;case 21:_a(e,t,n);break;case 22:Ke=(s=Ke)||n.memoizedState!==null,_a(e,t,n),Ke=s;break;default:_a(e,t,n)}}function Df(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(n){we(t,t.return,n)}}}function Lf(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(n){we(t,t.return,n)}}function mv(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Rf),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Rf),t;default:throw Error(l(435,e.tag))}}function $s(e,t){var n=mv(e);t.forEach(function(s){if(!n.has(s)){n.add(s);var c=Sv.bind(null,e,s);s.then(c,c)}})}function mt(e,t){var n=t.deletions;if(n!==null)for(var s=0;s<n.length;s++){var c=n[s],h=e,v=t,x=v;e:for(;x!==null;){switch(x.tag){case 27:if(Wa(x.type)){Re=x.stateNode,ft=!1;break e}break;case 5:Re=x.stateNode,ft=!1;break e;case 3:case 4:Re=x.stateNode.containerInfo,ft=!0;break e}x=x.return}if(Re===null)throw Error(l(160));Uf(h,v,c),Re=null,ft=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}var Pt=null;function Mf(e,t){var n=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:mt(t,e),pt(e),s&4&&(Ka(3,e,e.return),oi(3,e),Ka(5,e,e.return));break;case 1:mt(t,e),pt(e),s&512&&(Ke||n===null||aa(n,n.return)),s&64&&wa&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?s:n.concat(s))));break;case 26:var c=Pt;if(mt(t,e),pt(e),s&512&&(Ke||n===null||aa(n,n.return)),s&4){var h=n!==null?n.memoizedState:null;if(s=e.memoizedState,n===null)if(s===null)if(e.stateNode===null){e:{s=e.type,n=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":h=c.getElementsByTagName("title")[0],(!h||h[Lr]||h[Ze]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(s),c.head.insertBefore(h,c.querySelector("head > title"))),nt(h,s,n),h[Ze]=e,Fe(h),s=h;break e;case"link":var v=Mm("link","href",c).get(s+(n.href||""));if(v){for(var x=0;x<v.length;x++)if(h=v[x],h.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&h.getAttribute("rel")===(n.rel==null?null:n.rel)&&h.getAttribute("title")===(n.title==null?null:n.title)&&h.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){v.splice(x,1);break t}}h=c.createElement(s),nt(h,s,n),c.head.appendChild(h);break;case"meta":if(v=Mm("meta","content",c).get(s+(n.content||""))){for(x=0;x<v.length;x++)if(h=v[x],h.getAttribute("content")===(n.content==null?null:""+n.content)&&h.getAttribute("name")===(n.name==null?null:n.name)&&h.getAttribute("property")===(n.property==null?null:n.property)&&h.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&h.getAttribute("charset")===(n.charSet==null?null:n.charSet)){v.splice(x,1);break t}}h=c.createElement(s),nt(h,s,n),c.head.appendChild(h);break;default:throw Error(l(468,s))}h[Ze]=e,Fe(h),s=h}e.stateNode=s}else Bm(c,e.type,e.stateNode);else e.stateNode=Lm(c,s,e.memoizedProps);else h!==s?(h===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):h.count--,s===null?Bm(c,e.type,e.stateNode):Lm(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&_c(e,e.memoizedProps,n.memoizedProps)}break;case 27:mt(t,e),pt(e),s&512&&(Ke||n===null||aa(n,n.return)),n!==null&&s&4&&_c(e,e.memoizedProps,n.memoizedProps);break;case 5:if(mt(t,e),pt(e),s&512&&(Ke||n===null||aa(n,n.return)),e.flags&32){c=e.stateNode;try{Bn(c,"")}catch(J){we(e,e.return,J)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,_c(e,c,n!==null?n.memoizedProps:c)),s&1024&&(kc=!0);break;case 6:if(mt(t,e),pt(e),s&4){if(e.stateNode===null)throw Error(l(162));s=e.memoizedProps,n=e.stateNode;try{n.nodeValue=s}catch(J){we(e,e.return,J)}}break;case 3:if(al=null,c=Pt,Pt=el(t.containerInfo),mt(t,e),Pt=c,pt(e),s&4&&n!==null&&n.memoizedState.isDehydrated)try{pr(t.containerInfo)}catch(J){we(e,e.return,J)}kc&&(kc=!1,Bf(e));break;case 4:s=Pt,Pt=el(e.stateNode.containerInfo),mt(t,e),pt(e),Pt=s;break;case 12:mt(t,e),pt(e);break;case 31:mt(t,e),pt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,$s(e,s)));break;case 13:mt(t,e),pt(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Gs=xt()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,$s(e,s)));break;case 22:c=e.memoizedState!==null;var S=n!==null&&n.memoizedState!==null,R=wa,M=Ke;if(wa=R||c,Ke=M||S,mt(t,e),Ke=M,wa=R,pt(e),s&8192)e:for(t=e.stateNode,t._visibility=c?t._visibility&-2:t._visibility|1,c&&(n===null||S||wa||Ke||kn(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){S=n=t;try{if(h=S.stateNode,c)v=h.style,typeof v.setProperty=="function"?v.setProperty("display","none","important"):v.display="none";else{x=S.stateNode;var q=S.memoizedProps.style,O=q!=null&&q.hasOwnProperty("display")?q.display:null;x.style.display=O==null||typeof O=="boolean"?"":(""+O).trim()}}catch(J){we(S,S.return,J)}}}else if(t.tag===6){if(n===null){S=t;try{S.stateNode.nodeValue=c?"":S.memoizedProps}catch(J){we(S,S.return,J)}}}else if(t.tag===18){if(n===null){S=t;try{var U=S.stateNode;c?Tm(U,!0):Tm(S.stateNode,!1)}catch(J){we(S,S.return,J)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}s&4&&(s=e.updateQueue,s!==null&&(n=s.retryQueue,n!==null&&(s.retryQueue=null,$s(e,n))));break;case 19:mt(t,e),pt(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,$s(e,s)));break;case 30:break;case 21:break;default:mt(t,e),pt(e)}}function pt(e){var t=e.flags;if(t&2){try{for(var n,s=e.return;s!==null;){if(Nf(s)){n=s;break}s=s.return}if(n==null)throw Error(l(160));switch(n.tag){case 27:var c=n.stateNode,h=Sc(e);Hs(e,h,c);break;case 5:var v=n.stateNode;n.flags&32&&(Bn(v,""),n.flags&=-33);var x=Sc(e);Hs(e,x,v);break;case 3:case 4:var S=n.stateNode.containerInfo,R=Sc(e);jc(e,R,S);break;default:throw Error(l(161))}}catch(M){we(e,e.return,M)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Bf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Bf(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Sa(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Of(e,t.alternate,t),t=t.sibling}function kn(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Ka(4,t,t.return),kn(t);break;case 1:aa(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount=="function"&&Tf(t,t.return,n),kn(t);break;case 27:yi(t.stateNode);case 26:case 5:aa(t,t.return),kn(t);break;case 22:t.memoizedState===null&&kn(t);break;case 30:kn(t);break;default:kn(t)}e=e.sibling}}function ja(e,t,n){for(n=n&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var s=t.alternate,c=e,h=t,v=h.flags;switch(h.tag){case 0:case 11:case 15:ja(c,h,n),oi(4,h);break;case 1:if(ja(c,h,n),s=h,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(R){we(s,s.return,R)}if(s=h,c=s.updateQueue,c!==null){var x=s.stateNode;try{var S=c.shared.hiddenCallbacks;if(S!==null)for(c.shared.hiddenCallbacks=null,c=0;c<S.length;c++)mh(S[c],x)}catch(R){we(s,s.return,R)}}n&&v&64&&Ef(h),ci(h,h.return);break;case 27:Cf(h);case 26:case 5:ja(c,h,n),n&&s===null&&v&4&&Af(h),ci(h,h.return);break;case 12:ja(c,h,n);break;case 31:ja(c,h,n),n&&v&4&&Df(c,h);break;case 13:ja(c,h,n),n&&v&4&&Lf(c,h);break;case 22:h.memoizedState===null&&ja(c,h,n),ci(h,h.return);break;case 30:break;default:ja(c,h,n)}t=t.sibling}}function Ec(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&Jr(n))}function Tc(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jr(e))}function It(e,t,n,s){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Hf(e,t,n,s),t=t.sibling}function Hf(e,t,n,s){var c=t.flags;switch(t.tag){case 0:case 11:case 15:It(e,t,n,s),c&2048&&oi(9,t);break;case 1:It(e,t,n,s);break;case 3:It(e,t,n,s),c&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Jr(e)));break;case 12:if(c&2048){It(e,t,n,s),e=t.stateNode;try{var h=t.memoizedProps,v=h.id,x=h.onPostCommit;typeof x=="function"&&x(v,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(S){we(t,t.return,S)}}else It(e,t,n,s);break;case 31:It(e,t,n,s);break;case 13:It(e,t,n,s);break;case 23:break;case 22:h=t.stateNode,v=t.alternate,t.memoizedState!==null?h._visibility&2?It(e,t,n,s):ui(e,t):h._visibility&2?It(e,t,n,s):(h._visibility|=2,rr(e,t,n,s,(t.subtreeFlags&10256)!==0||!1)),c&2048&&Ec(v,t);break;case 24:It(e,t,n,s),c&2048&&Tc(t.alternate,t);break;default:It(e,t,n,s)}}function rr(e,t,n,s,c){for(c=c&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var h=e,v=t,x=n,S=s,R=v.flags;switch(v.tag){case 0:case 11:case 15:rr(h,v,x,S,c),oi(8,v);break;case 23:break;case 22:var M=v.stateNode;v.memoizedState!==null?M._visibility&2?rr(h,v,x,S,c):ui(h,v):(M._visibility|=2,rr(h,v,x,S,c)),c&&R&2048&&Ec(v.alternate,v);break;case 24:rr(h,v,x,S,c),c&&R&2048&&Tc(v.alternate,v);break;default:rr(h,v,x,S,c)}t=t.sibling}}function ui(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,s=t,c=s.flags;switch(s.tag){case 22:ui(n,s),c&2048&&Ec(s.alternate,s);break;case 24:ui(n,s),c&2048&&Tc(s.alternate,s);break;default:ui(n,s)}t=t.sibling}}var di=8192;function ir(e,t,n){if(e.subtreeFlags&di)for(e=e.child;e!==null;)$f(e,t,n),e=e.sibling}function $f(e,t,n){switch(e.tag){case 26:ir(e,t,n),e.flags&di&&e.memoizedState!==null&&ey(n,Pt,e.memoizedState,e.memoizedProps);break;case 5:ir(e,t,n);break;case 3:case 4:var s=Pt;Pt=el(e.stateNode.containerInfo),ir(e,t,n),Pt=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=di,di=16777216,ir(e,t,n),di=s):ir(e,t,n));break;default:ir(e,t,n)}}function qf(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function hi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Qe=s,Vf(s,e)}qf(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Gf(e),e=e.sibling}function Gf(e){switch(e.tag){case 0:case 11:case 15:hi(e),e.flags&2048&&Ka(9,e,e.return);break;case 3:hi(e);break;case 12:hi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,qs(e)):hi(e);break;default:hi(e)}}function qs(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var n=0;n<t.length;n++){var s=t[n];Qe=s,Vf(s,e)}qf(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Ka(8,t,t.return),qs(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,qs(t));break;default:qs(t)}e=e.sibling}}function Vf(e,t){for(;Qe!==null;){var n=Qe;switch(n.tag){case 0:case 11:case 15:Ka(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var s=n.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Jr(n.memoizedState.cache)}if(s=n.child,s!==null)s.return=n,Qe=s;else e:for(n=e;Qe!==null;){s=Qe;var c=s.sibling,h=s.return;if(zf(s),s===n){Qe=null;break e}if(c!==null){c.return=h,Qe=c;break e}Qe=h}}}var pv={getCacheForType:function(e){var t=tt(Ge),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return tt(Ge).controller.signal}},gv=typeof WeakMap=="function"?WeakMap:Map,ye=0,Ee=null,ue=null,he=0,xe=0,Tt=null,Pa=!1,sr=!1,Ac=!1,ka=0,Le=0,Ia=0,En=0,Nc=0,At=0,lr=0,fi=null,gt=null,Cc=!1,Gs=0,Yf=0,Vs=1/0,Ys=null,Xa=null,Xe=0,Ja=null,or=null,Ea=0,Rc=0,Oc=null,Kf=null,mi=0,zc=null;function Nt(){return(ye&2)!==0&&he!==0?he&-he:B.T!==null?Hc():sd()}function Pf(){if(At===0)if((he&536870912)===0||me){var e=Wi;Wi<<=1,(Wi&3932160)===0&&(Wi=262144),At=e}else At=536870912;return e=kt.current,e!==null&&(e.flags|=32),At}function vt(e,t,n){(e===Ee&&(xe===2||xe===9)||e.cancelPendingCommit!==null)&&(cr(e,0),Fa(e,he,At,!1)),Dr(e,n),((ye&2)===0||e!==Ee)&&(e===Ee&&((ye&2)===0&&(En|=n),Le===4&&Fa(e,he,At,!1)),na(e))}function If(e,t,n){if((ye&6)!==0)throw Error(l(327));var s=!n&&(t&127)===0&&(t&e.expiredLanes)===0||Ur(e,t),c=s?bv(e,t):Dc(e,t,!0),h=s;do{if(c===0){sr&&!s&&Fa(e,t,0,!1);break}else{if(n=e.current.alternate,h&&!vv(n)){c=Dc(e,t,!1),h=!1;continue}if(c===2){if(h=t,e.errorRecoveryDisabledLanes&h)var v=0;else v=e.pendingLanes&-536870913,v=v!==0?v:v&536870912?536870912:0;if(v!==0){t=v;e:{var x=e;c=fi;var S=x.current.memoizedState.isDehydrated;if(S&&(cr(x,v).flags|=256),v=Dc(x,v,!1),v!==2){if(Ac&&!S){x.errorRecoveryDisabledLanes|=h,En|=h,c=4;break e}h=gt,gt=c,h!==null&&(gt===null?gt=h:gt.push.apply(gt,h))}c=v}if(h=!1,c!==2)continue}}if(c===1){cr(e,0),Fa(e,t,0,!0);break}e:{switch(s=e,h=c,h){case 0:case 1:throw Error(l(345));case 4:if((t&4194048)!==t)break;case 6:Fa(s,t,At,!Pa);break e;case 2:gt=null;break;case 3:case 5:break;default:throw Error(l(329))}if((t&62914560)===t&&(c=Gs+300-xt(),10<c)){if(Fa(s,t,At,!Pa),es(s,0,!0)!==0)break e;Ea=t,s.timeoutHandle=jm(Xf.bind(null,s,n,gt,Ys,Cc,t,At,En,lr,Pa,h,"Throttled",-0,0),c);break e}Xf(s,n,gt,Ys,Cc,t,At,En,lr,Pa,h,null,-0,0)}}break}while(!0);na(e)}function Xf(e,t,n,s,c,h,v,x,S,R,M,q,O,U){if(e.timeoutHandle=-1,q=t.subtreeFlags,q&8192||(q&16785408)===16785408){q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},$f(t,h,q);var J=(h&62914560)===h?Gs-xt():(h&4194048)===h?Yf-xt():0;if(J=ty(q,J),J!==null){Ea=h,e.cancelPendingCommit=J(am.bind(null,e,t,h,n,s,c,v,x,S,M,q,null,O,U)),Fa(e,h,v,!R);return}}am(e,t,h,n,s,c,v,x,S)}function vv(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var s=0;s<n.length;s++){var c=n[s],h=c.getSnapshot;c=c.value;try{if(!St(h(),c))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Fa(e,t,n,s){t&=~Nc,t&=~En,e.suspendedLanes|=t,e.pingedLanes&=~t,s&&(e.warmLanes|=t),s=e.expirationTimes;for(var c=t;0<c;){var h=31-_t(c),v=1<<h;s[h]=-1,c&=~v}n!==0&&nd(e,n,t)}function Ks(){return(ye&6)===0?(pi(0),!1):!0}function Uc(){if(ue!==null){if(xe===0)var e=ue.return;else e=ue,pa=vn=null,Fo(e),Zn=null,Qr=0,e=ue;for(;e!==null;)kf(e.alternate,e),e=e.return;ue=null}}function cr(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Mv(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),Ea=0,Uc(),Ee=e,ue=n=fa(e.current,null),he=t,xe=0,Tt=null,Pa=!1,sr=Ur(e,t),Ac=!1,lr=At=Nc=En=Ia=Le=0,gt=fi=null,Cc=!1,(t&8)!==0&&(t|=t&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=t;0<s;){var c=31-_t(s),h=1<<c;t|=e[c],s&=~h}return ka=t,hs(),n}function Jf(e,t){oe=null,B.H=ii,t===Wn||t===xs?(t=uh(),xe=3):t===Bo?(t=uh(),xe=4):xe=t===hc?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,Tt=t,ue===null&&(Le=1,Us(e,Mt(t,e.current)))}function Ff(){var e=kt.current;return e===null?!0:(he&4194048)===he?qt===null:(he&62914560)===he||(he&536870912)!==0?e===qt:!1}function Qf(){var e=B.H;return B.H=ii,e===null?ii:e}function Wf(){var e=B.A;return B.A=pv,e}function Ps(){Le=4,Pa||(he&4194048)!==he&&kt.current!==null||(sr=!0),(Ia&134217727)===0&&(En&134217727)===0||Ee===null||Fa(Ee,he,At,!1)}function Dc(e,t,n){var s=ye;ye|=2;var c=Qf(),h=Wf();(Ee!==e||he!==t)&&(Ys=null,cr(e,t)),t=!1;var v=Le;e:do try{if(xe!==0&&ue!==null){var x=ue,S=Tt;switch(xe){case 8:Uc(),v=6;break e;case 3:case 2:case 9:case 6:kt.current===null&&(t=!0);var R=xe;if(xe=0,Tt=null,ur(e,x,S,R),n&&sr){v=0;break e}break;default:R=xe,xe=0,Tt=null,ur(e,x,S,R)}}yv(),v=Le;break}catch(M){Jf(e,M)}while(!0);return t&&e.shellSuspendCounter++,pa=vn=null,ye=s,B.H=c,B.A=h,ue===null&&(Ee=null,he=0,hs()),v}function yv(){for(;ue!==null;)Zf(ue)}function bv(e,t){var n=ye;ye|=2;var s=Qf(),c=Wf();Ee!==e||he!==t?(Ys=null,Vs=xt()+500,cr(e,t)):sr=Ur(e,t);e:do try{if(xe!==0&&ue!==null){t=ue;var h=Tt;t:switch(xe){case 1:xe=0,Tt=null,ur(e,t,h,1);break;case 2:case 9:if(oh(h)){xe=0,Tt=null,em(t);break}t=function(){xe!==2&&xe!==9||Ee!==e||(xe=7),na(e)},h.then(t,t);break e;case 3:xe=7;break e;case 4:xe=5;break e;case 7:oh(h)?(xe=0,Tt=null,em(t)):(xe=0,Tt=null,ur(e,t,h,7));break;case 5:var v=null;switch(ue.tag){case 26:v=ue.memoizedState;case 5:case 27:var x=ue;if(v?Hm(v):x.stateNode.complete){xe=0,Tt=null;var S=x.sibling;if(S!==null)ue=S;else{var R=x.return;R!==null?(ue=R,Is(R)):ue=null}break t}}xe=0,Tt=null,ur(e,t,h,5);break;case 6:xe=0,Tt=null,ur(e,t,h,6);break;case 8:Uc(),Le=6;break e;default:throw Error(l(462))}}xv();break}catch(M){Jf(e,M)}while(!0);return pa=vn=null,B.H=s,B.A=c,ye=n,ue!==null?0:(Ee=null,he=0,hs(),Le)}function xv(){for(;ue!==null&&!Vg();)Zf(ue)}function Zf(e){var t=Sf(e.alternate,e,ka);e.memoizedProps=e.pendingProps,t===null?Is(e):ue=t}function em(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=vf(n,t,t.pendingProps,t.type,void 0,he);break;case 11:t=vf(n,t,t.pendingProps,t.type.render,t.ref,he);break;case 5:Fo(t);default:kf(n,t),t=ue=Qd(t,ka),t=Sf(n,t,ka)}e.memoizedProps=e.pendingProps,t===null?Is(e):ue=t}function ur(e,t,n,s){pa=vn=null,Fo(t),Zn=null,Qr=0;var c=t.return;try{if(ov(e,c,t,n,he)){Le=1,Us(e,Mt(n,e.current)),ue=null;return}}catch(h){if(c!==null)throw ue=c,h;Le=1,Us(e,Mt(n,e.current)),ue=null;return}t.flags&32768?(me||s===1?e=!0:sr||(he&536870912)!==0?e=!1:(Pa=e=!0,(s===2||s===9||s===3||s===6)&&(s=kt.current,s!==null&&s.tag===13&&(s.flags|=16384))),tm(t,e)):Is(t)}function Is(e){var t=e;do{if((t.flags&32768)!==0){tm(t,Pa);return}e=t.return;var n=dv(t.alternate,t,ka);if(n!==null){ue=n;return}if(t=t.sibling,t!==null){ue=t;return}ue=t=e}while(t!==null);Le===0&&(Le=5)}function tm(e,t){do{var n=hv(e.alternate,e);if(n!==null){n.flags&=32767,ue=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){ue=e;return}ue=e=n}while(e!==null);Le=6,ue=null}function am(e,t,n,s,c,h,v,x,S){e.cancelPendingCommit=null;do Xs();while(Xe!==0);if((ye&6)!==0)throw Error(l(327));if(t!==null){if(t===e.current)throw Error(l(177));if(h=t.lanes|t.childLanes,h|=So,Zg(e,n,h,v,x,S),e===Ee&&(ue=Ee=null,he=0),or=t,Ja=e,Ea=n,Rc=h,Oc=c,Kf=s,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,jv(Fi,function(){return lm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||s){s=B.T,B.T=null,c=K.p,K.p=2,v=ye,ye|=4;try{fv(e,t,n)}finally{ye=v,K.p=c,B.T=s}}Xe=1,nm(),rm(),im()}}function nm(){if(Xe===1){Xe=0;var e=Ja,t=or,n=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||n){n=B.T,B.T=null;var s=K.p;K.p=2;var c=ye;ye|=4;try{Mf(t,e);var h=Ic,v=Gd(e.containerInfo),x=h.focusedElem,S=h.selectionRange;if(v!==x&&x&&x.ownerDocument&&qd(x.ownerDocument.documentElement,x)){if(S!==null&&yo(x)){var R=S.start,M=S.end;if(M===void 0&&(M=R),"selectionStart"in x)x.selectionStart=R,x.selectionEnd=Math.min(M,x.value.length);else{var q=x.ownerDocument||document,O=q&&q.defaultView||window;if(O.getSelection){var U=O.getSelection(),J=x.textContent.length,ae=Math.min(S.start,J),ke=S.end===void 0?ae:Math.min(S.end,J);!U.extend&&ae>ke&&(v=ke,ke=ae,ae=v);var A=$d(x,ae),j=$d(x,ke);if(A&&j&&(U.rangeCount!==1||U.anchorNode!==A.node||U.anchorOffset!==A.offset||U.focusNode!==j.node||U.focusOffset!==j.offset)){var C=q.createRange();C.setStart(A.node,A.offset),U.removeAllRanges(),ae>ke?(U.addRange(C),U.extend(j.node,j.offset)):(C.setEnd(j.node,j.offset),U.addRange(C))}}}}for(q=[],U=x;U=U.parentNode;)U.nodeType===1&&q.push({element:U,left:U.scrollLeft,top:U.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<q.length;x++){var $=q[x];$.element.scrollLeft=$.left,$.element.scrollTop=$.top}}sl=!!Pc,Ic=Pc=null}finally{ye=c,K.p=s,B.T=n}}e.current=t,Xe=2}}function rm(){if(Xe===2){Xe=0;var e=Ja,t=or,n=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||n){n=B.T,B.T=null;var s=K.p;K.p=2;var c=ye;ye|=4;try{Of(e,t.alternate,t)}finally{ye=c,K.p=s,B.T=n}}Xe=3}}function im(){if(Xe===4||Xe===3){Xe=0,Yg();var e=Ja,t=or,n=Ea,s=Kf;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Xe=5:(Xe=0,or=Ja=null,sm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Xa=null),Wl(n),t=t.stateNode,wt&&typeof wt.onCommitFiberRoot=="function")try{wt.onCommitFiberRoot(zr,t,void 0,(t.current.flags&128)===128)}catch{}if(s!==null){t=B.T,c=K.p,K.p=2,B.T=null;try{for(var h=e.onRecoverableError,v=0;v<s.length;v++){var x=s[v];h(x.value,{componentStack:x.stack})}}finally{B.T=t,K.p=c}}(Ea&3)!==0&&Xs(),na(e),c=e.pendingLanes,(n&261930)!==0&&(c&42)!==0?e===zc?mi++:(mi=0,zc=e):mi=0,pi(0)}}function sm(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Jr(t)))}function Xs(){return nm(),rm(),im(),lm()}function lm(){if(Xe!==5)return!1;var e=Ja,t=Rc;Rc=0;var n=Wl(Ea),s=B.T,c=K.p;try{K.p=32>n?32:n,B.T=null,n=Oc,Oc=null;var h=Ja,v=Ea;if(Xe=0,or=Ja=null,Ea=0,(ye&6)!==0)throw Error(l(331));var x=ye;if(ye|=4,Gf(h.current),Hf(h,h.current,v,n),ye=x,pi(0,!1),wt&&typeof wt.onPostCommitFiberRoot=="function")try{wt.onPostCommitFiberRoot(zr,h)}catch{}return!0}finally{K.p=c,B.T=s,sm(e,t)}}function om(e,t,n){t=Mt(n,t),t=dc(e.stateNode,t,2),e=Ga(e,t,2),e!==null&&(Dr(e,2),na(e))}function we(e,t,n){if(e.tag===3)om(e,e,n);else for(;t!==null;){if(t.tag===3){om(t,e,n);break}else if(t.tag===1){var s=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Xa===null||!Xa.has(s))){e=Mt(n,e),n=cf(2),s=Ga(t,n,2),s!==null&&(uf(n,s,t,e),Dr(s,2),na(s));break}}t=t.return}}function Lc(e,t,n){var s=e.pingCache;if(s===null){s=e.pingCache=new gv;var c=new Set;s.set(t,c)}else c=s.get(t),c===void 0&&(c=new Set,s.set(t,c));c.has(n)||(Ac=!0,c.add(n),e=wv.bind(null,e,t,n),t.then(e,e))}function wv(e,t,n){var s=e.pingCache;s!==null&&s.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,Ee===e&&(he&n)===n&&(Le===4||Le===3&&(he&62914560)===he&&300>xt()-Gs?(ye&2)===0&&cr(e,0):Nc|=n,lr===he&&(lr=0)),na(e)}function cm(e,t){t===0&&(t=ad()),e=mn(e,t),e!==null&&(Dr(e,t),na(e))}function _v(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),cm(e,n)}function Sv(e,t){var n=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(n=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(l(314))}s!==null&&s.delete(t),cm(e,n)}function jv(e,t){return Xl(e,t)}var Js=null,dr=null,Mc=!1,Fs=!1,Bc=!1,Qa=0;function na(e){e!==dr&&e.next===null&&(dr===null?Js=dr=e:dr=dr.next=e),Fs=!0,Mc||(Mc=!0,Ev())}function pi(e,t){if(!Bc&&Fs){Bc=!0;do for(var n=!1,s=Js;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var h=0;else{var v=s.suspendedLanes,x=s.pingedLanes;h=(1<<31-_t(42|e)+1)-1,h&=c&~(v&~x),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(n=!0,fm(s,h))}else h=he,h=es(s,s===Ee?h:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(h&3)===0||Ur(s,h)||(n=!0,fm(s,h));s=s.next}while(n);Bc=!1}}function kv(){um()}function um(){Fs=Mc=!1;var e=0;Qa!==0&&Lv()&&(e=Qa);for(var t=xt(),n=null,s=Js;s!==null;){var c=s.next,h=dm(s,t);h===0?(s.next=null,n===null?Js=c:n.next=c,c===null&&(dr=n)):(n=s,(e!==0||(h&3)!==0)&&(Fs=!0)),s=c}Xe!==0&&Xe!==5||pi(e),Qa!==0&&(Qa=0)}function dm(e,t){for(var n=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var v=31-_t(h),x=1<<v,S=c[v];S===-1?((x&n)===0||(x&s)!==0)&&(c[v]=Wg(x,t)):S<=t&&(e.expiredLanes|=x),h&=~x}if(t=Ee,n=he,n=es(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,n===0||e===t&&(xe===2||xe===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&Jl(s),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ur(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(s!==null&&Jl(s),Wl(n)){case 2:case 8:n=ed;break;case 32:n=Fi;break;case 268435456:n=td;break;default:n=Fi}return s=hm.bind(null,e),n=Xl(n,s),e.callbackPriority=t,e.callbackNode=n,t}return s!==null&&s!==null&&Jl(s),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,t){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Xs()&&e.callbackNode!==n)return null;var s=he;return s=es(e,e===Ee?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(If(e,s,t),dm(e,xt()),e.callbackNode!=null&&e.callbackNode===n?hm.bind(null,e):null)}function fm(e,t){if(Xs())return null;If(e,t,!0)}function Ev(){Bv(function(){(ye&6)!==0?Xl(Zu,kv):um()})}function Hc(){if(Qa===0){var e=Fn;e===0&&(e=Qi,Qi<<=1,(Qi&261888)===0&&(Qi=256)),Qa=e}return Qa}function mm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:rs(""+e)}function pm(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function Tv(e,t,n,s,c){if(t==="submit"&&n&&n.stateNode===c){var h=mm((c[dt]||null).action),v=s.submitter;v&&(t=(t=v[dt]||null)?mm(t.formAction):v.getAttribute("formAction"),t!==null&&(h=t,v=null));var x=new os("action","action",null,s,c);e.push({event:x,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Qa!==0){var S=v?pm(c,v):new FormData(c);ic(n,{pending:!0,data:S,method:c.method,action:h},null,S)}}else typeof h=="function"&&(x.preventDefault(),S=v?pm(c,v):new FormData(c),ic(n,{pending:!0,data:S,method:c.method,action:h},h,S))},currentTarget:c}]})}}for(var $c=0;$c<_o.length;$c++){var qc=_o[$c],Av=qc.toLowerCase(),Nv=qc[0].toUpperCase()+qc.slice(1);Kt(Av,"on"+Nv)}Kt(Kd,"onAnimationEnd"),Kt(Pd,"onAnimationIteration"),Kt(Id,"onAnimationStart"),Kt("dblclick","onDoubleClick"),Kt("focusin","onFocus"),Kt("focusout","onBlur"),Kt(K0,"onTransitionRun"),Kt(P0,"onTransitionStart"),Kt(I0,"onTransitionCancel"),Kt(Xd,"onTransitionEnd"),Ln("onMouseEnter",["mouseout","mouseover"]),Ln("onMouseLeave",["mouseout","mouseover"]),Ln("onPointerEnter",["pointerout","pointerover"]),Ln("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var gi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Cv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(gi));function gm(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var s=e[n],c=s.event;s=s.listeners;e:{var h=void 0;if(t)for(var v=s.length-1;0<=v;v--){var x=s[v],S=x.instance,R=x.currentTarget;if(x=x.listener,S!==h&&c.isPropagationStopped())break e;h=x,c.currentTarget=R;try{h(c)}catch(M){ds(M)}c.currentTarget=null,h=S}else for(v=0;v<s.length;v++){if(x=s[v],S=x.instance,R=x.currentTarget,x=x.listener,S!==h&&c.isPropagationStopped())break e;h=x,c.currentTarget=R;try{h(c)}catch(M){ds(M)}c.currentTarget=null,h=S}}}}function de(e,t){var n=t[Zl];n===void 0&&(n=t[Zl]=new Set);var s=e+"__bubble";n.has(s)||(vm(t,e,2,!1),n.add(s))}function Gc(e,t,n){var s=0;t&&(s|=4),vm(n,e,s,t)}var Qs="_reactListening"+Math.random().toString(36).slice(2);function Vc(e){if(!e[Qs]){e[Qs]=!0,cd.forEach(function(n){n!=="selectionchange"&&(Cv.has(n)||Gc(n,!1,e),Gc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Qs]||(t[Qs]=!0,Gc("selectionchange",!1,t))}}function vm(e,t,n,s){switch(Pm(t)){case 2:var c=ry;break;case 8:c=iy;break;default:c=ru}n=c.bind(null,t,n,e),c=void 0,!oo||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(t,n,{capture:!0,passive:c}):e.addEventListener(t,n,!0):c!==void 0?e.addEventListener(t,n,{passive:c}):e.addEventListener(t,n,!1)}function Yc(e,t,n,s,c){var h=s;if((t&1)===0&&(t&2)===0&&s!==null)e:for(;;){if(s===null)return;var v=s.tag;if(v===3||v===4){var x=s.stateNode.containerInfo;if(x===c)break;if(v===4)for(v=s.return;v!==null;){var S=v.tag;if((S===3||S===4)&&v.stateNode.containerInfo===c)return;v=v.return}for(;x!==null;){if(v=zn(x),v===null)return;if(S=v.tag,S===5||S===6||S===26||S===27){s=h=v;continue e}x=x.parentNode}}s=s.return}wd(function(){var R=h,M=so(n),q=[];e:{var O=Jd.get(e);if(O!==void 0){var U=os,J=e;switch(e){case"keypress":if(ss(n)===0)break e;case"keydown":case"keyup":U=S0;break;case"focusin":J="focus",U=fo;break;case"focusout":J="blur",U=fo;break;case"beforeblur":case"afterblur":U=fo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":U=jd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":U=d0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":U=E0;break;case Kd:case Pd:case Id:U=m0;break;case Xd:U=A0;break;case"scroll":case"scrollend":U=c0;break;case"wheel":U=C0;break;case"copy":case"cut":case"paste":U=g0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":U=Ed;break;case"toggle":case"beforetoggle":U=O0}var ae=(t&4)!==0,ke=!ae&&(e==="scroll"||e==="scrollend"),A=ae?O!==null?O+"Capture":null:O;ae=[];for(var j=R,C;j!==null;){var $=j;if(C=$.stateNode,$=$.tag,$!==5&&$!==26&&$!==27||C===null||A===null||($=Br(j,A),$!=null&&ae.push(vi(j,$,C))),ke)break;j=j.return}0<ae.length&&(O=new U(O,J,null,n,M),q.push({event:O,listeners:ae}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",U=e==="mouseout"||e==="pointerout",O&&n!==io&&(J=n.relatedTarget||n.fromElement)&&(zn(J)||J[On]))break e;if((U||O)&&(O=M.window===M?M:(O=M.ownerDocument)?O.defaultView||O.parentWindow:window,U?(J=n.relatedTarget||n.toElement,U=R,J=J?zn(J):null,J!==null&&(ke=u(J),ae=J.tag,J!==ke||ae!==5&&ae!==27&&ae!==6)&&(J=null)):(U=null,J=R),U!==J)){if(ae=jd,$="onMouseLeave",A="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Ed,$="onPointerLeave",A="onPointerEnter",j="pointer"),ke=U==null?O:Mr(U),C=J==null?O:Mr(J),O=new ae($,j+"leave",U,n,M),O.target=ke,O.relatedTarget=C,$=null,zn(M)===R&&(ae=new ae(A,j+"enter",J,n,M),ae.target=C,ae.relatedTarget=ke,$=ae),ke=$,U&&J)t:{for(ae=Rv,A=U,j=J,C=0,$=A;$;$=ae($))C++;$=0;for(var Z=j;Z;Z=ae(Z))$++;for(;0<C-$;)A=ae(A),C--;for(;0<$-C;)j=ae(j),$--;for(;C--;){if(A===j||j!==null&&A===j.alternate){ae=A;break t}A=ae(A),j=ae(j)}ae=null}else ae=null;U!==null&&ym(q,O,U,ae,!1),J!==null&&ke!==null&&ym(q,ke,J,ae,!0)}}e:{if(O=R?Mr(R):window,U=O.nodeName&&O.nodeName.toLowerCase(),U==="select"||U==="input"&&O.type==="file")var pe=Ud;else if(Od(O))if(Dd)pe=G0;else{pe=$0;var Q=H0}else U=O.nodeName,!U||U.toLowerCase()!=="input"||O.type!=="checkbox"&&O.type!=="radio"?R&&ro(R.elementType)&&(pe=Ud):pe=q0;if(pe&&(pe=pe(e,R))){zd(q,pe,n,M);break e}Q&&Q(e,O,R),e==="focusout"&&R&&O.type==="number"&&R.memoizedProps.value!=null&&no(O,"number",O.value)}switch(Q=R?Mr(R):window,e){case"focusin":(Od(Q)||Q.contentEditable==="true")&&(Gn=Q,bo=R,Pr=null);break;case"focusout":Pr=bo=Gn=null;break;case"mousedown":xo=!0;break;case"contextmenu":case"mouseup":case"dragend":xo=!1,Vd(q,n,M);break;case"selectionchange":if(Y0)break;case"keydown":case"keyup":Vd(q,n,M)}var ce;if(po)e:{switch(e){case"compositionstart":var fe="onCompositionStart";break e;case"compositionend":fe="onCompositionEnd";break e;case"compositionupdate":fe="onCompositionUpdate";break e}fe=void 0}else qn?Cd(e,n)&&(fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(fe="onCompositionStart");fe&&(Td&&n.locale!=="ko"&&(qn||fe!=="onCompositionStart"?fe==="onCompositionEnd"&&qn&&(ce=_d()):(Da=M,co="value"in Da?Da.value:Da.textContent,qn=!0)),Q=Ws(R,fe),0<Q.length&&(fe=new kd(fe,e,null,n,M),q.push({event:fe,listeners:Q}),ce?fe.data=ce:(ce=Rd(n),ce!==null&&(fe.data=ce)))),(ce=U0?D0(e,n):L0(e,n))&&(fe=Ws(R,"onBeforeInput"),0<fe.length&&(Q=new kd("onBeforeInput","beforeinput",null,n,M),q.push({event:Q,listeners:fe}),Q.data=ce)),Tv(q,e,R,n,M)}gm(q,t)})}function vi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Ws(e,t){for(var n=t+"Capture",s=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Br(e,n),c!=null&&s.unshift(vi(e,c,h)),c=Br(e,t),c!=null&&s.push(vi(e,c,h))),e.tag===3)return s;e=e.return}return[]}function Rv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ym(e,t,n,s,c){for(var h=t._reactName,v=[];n!==null&&n!==s;){var x=n,S=x.alternate,R=x.stateNode;if(x=x.tag,S!==null&&S===s)break;x!==5&&x!==26&&x!==27||R===null||(S=R,c?(R=Br(n,h),R!=null&&v.unshift(vi(n,R,S))):c||(R=Br(n,h),R!=null&&v.push(vi(n,R,S)))),n=n.return}v.length!==0&&e.push({event:t,listeners:v})}var Ov=/\r\n?/g,zv=/\u0000|\uFFFD/g;function bm(e){return(typeof e=="string"?e:""+e).replace(Ov,`
`).replace(zv,"")}function xm(e,t){return t=bm(t),bm(e)===t}function je(e,t,n,s,c,h){switch(n){case"children":typeof s=="string"?t==="body"||t==="textarea"&&s===""||Bn(e,s):(typeof s=="number"||typeof s=="bigint")&&t!=="body"&&Bn(e,""+s);break;case"className":as(e,"class",s);break;case"tabIndex":as(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":as(e,n,s);break;case"style":bd(e,s,h);break;case"data":if(t!=="object"){as(e,"data",s);break}case"src":case"href":if(s===""&&(t!=="a"||n!=="href")){e.removeAttribute(n);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=rs(""+s),e.setAttribute(n,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(n==="formAction"?(t!=="input"&&je(e,t,"name",c.name,c,null),je(e,t,"formEncType",c.formEncType,c,null),je(e,t,"formMethod",c.formMethod,c,null),je(e,t,"formTarget",c.formTarget,c,null)):(je(e,t,"encType",c.encType,c,null),je(e,t,"method",c.method,c,null),je(e,t,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(n);break}s=rs(""+s),e.setAttribute(n,s);break;case"onClick":s!=null&&(e.onclick=da);break;case"onScroll":s!=null&&de("scroll",e);break;case"onScrollEnd":s!=null&&de("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}n=rs(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""+s):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":s===!0?e.setAttribute(n,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(n,s):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(n,s):e.removeAttribute(n);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(n):e.setAttribute(n,s);break;case"popover":de("beforetoggle",e),de("toggle",e),ts(e,"popover",s);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ts(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=l0.get(n)||n,ts(e,n,s))}}function Kc(e,t,n,s,c,h){switch(n){case"style":bd(e,s,h);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(l(61));if(n=s.__html,n!=null){if(c.children!=null)throw Error(l(60));e.innerHTML=n}}break;case"children":typeof s=="string"?Bn(e,s):(typeof s=="number"||typeof s=="bigint")&&Bn(e,""+s);break;case"onScroll":s!=null&&de("scroll",e);break;case"onScrollEnd":s!=null&&de("scrollend",e);break;case"onClick":s!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ud.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(c=n.endsWith("Capture"),t=n.slice(2,c?n.length-7:void 0),h=e[dt]||null,h=h!=null?h[n]:null,typeof h=="function"&&e.removeEventListener(t,h,c),typeof s=="function")){typeof h!="function"&&h!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,s,c);break e}n in e?e[n]=s:s===!0?e.setAttribute(n,""):ts(e,n,s)}}}function nt(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",e),de("load",e);var s=!1,c=!1,h;for(h in n)if(n.hasOwnProperty(h)){var v=n[h];if(v!=null)switch(h){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:je(e,t,h,v,n,null)}}c&&je(e,t,"srcSet",n.srcSet,n,null),s&&je(e,t,"src",n.src,n,null);return;case"input":de("invalid",e);var x=h=v=c=null,S=null,R=null;for(s in n)if(n.hasOwnProperty(s)){var M=n[s];if(M!=null)switch(s){case"name":c=M;break;case"type":v=M;break;case"checked":S=M;break;case"defaultChecked":R=M;break;case"value":h=M;break;case"defaultValue":x=M;break;case"children":case"dangerouslySetInnerHTML":if(M!=null)throw Error(l(137,t));break;default:je(e,t,s,M,n,null)}}pd(e,h,x,S,R,v,c,!1);return;case"select":de("invalid",e),s=v=h=null;for(c in n)if(n.hasOwnProperty(c)&&(x=n[c],x!=null))switch(c){case"value":h=x;break;case"defaultValue":v=x;break;case"multiple":s=x;default:je(e,t,c,x,n,null)}t=h,n=v,e.multiple=!!s,t!=null?Mn(e,!!s,t,!1):n!=null&&Mn(e,!!s,n,!0);return;case"textarea":de("invalid",e),h=c=s=null;for(v in n)if(n.hasOwnProperty(v)&&(x=n[v],x!=null))switch(v){case"value":s=x;break;case"defaultValue":c=x;break;case"children":h=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(l(91));break;default:je(e,t,v,x,n,null)}vd(e,s,c,h);return;case"option":for(S in n)if(n.hasOwnProperty(S)&&(s=n[S],s!=null))switch(S){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:je(e,t,S,s,n,null)}return;case"dialog":de("beforetoggle",e),de("toggle",e),de("cancel",e),de("close",e);break;case"iframe":case"object":de("load",e);break;case"video":case"audio":for(s=0;s<gi.length;s++)de(gi[s],e);break;case"image":de("error",e),de("load",e);break;case"details":de("toggle",e);break;case"embed":case"source":case"link":de("error",e),de("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(R in n)if(n.hasOwnProperty(R)&&(s=n[R],s!=null))switch(R){case"children":case"dangerouslySetInnerHTML":throw Error(l(137,t));default:je(e,t,R,s,n,null)}return;default:if(ro(t)){for(M in n)n.hasOwnProperty(M)&&(s=n[M],s!==void 0&&Kc(e,t,M,s,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(s=n[x],s!=null&&je(e,t,x,s,n,null))}function Uv(e,t,n,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,v=null,x=null,S=null,R=null,M=null;for(U in n){var q=n[U];if(n.hasOwnProperty(U)&&q!=null)switch(U){case"checked":break;case"value":break;case"defaultValue":S=q;default:s.hasOwnProperty(U)||je(e,t,U,null,s,q)}}for(var O in s){var U=s[O];if(q=n[O],s.hasOwnProperty(O)&&(U!=null||q!=null))switch(O){case"type":h=U;break;case"name":c=U;break;case"checked":R=U;break;case"defaultChecked":M=U;break;case"value":v=U;break;case"defaultValue":x=U;break;case"children":case"dangerouslySetInnerHTML":if(U!=null)throw Error(l(137,t));break;default:U!==q&&je(e,t,O,U,s,q)}}ao(e,v,x,S,R,M,h,c);return;case"select":U=v=x=O=null;for(h in n)if(S=n[h],n.hasOwnProperty(h)&&S!=null)switch(h){case"value":break;case"multiple":U=S;default:s.hasOwnProperty(h)||je(e,t,h,null,s,S)}for(c in s)if(h=s[c],S=n[c],s.hasOwnProperty(c)&&(h!=null||S!=null))switch(c){case"value":O=h;break;case"defaultValue":x=h;break;case"multiple":v=h;default:h!==S&&je(e,t,c,h,s,S)}t=x,n=v,s=U,O!=null?Mn(e,!!n,O,!1):!!s!=!!n&&(t!=null?Mn(e,!!n,t,!0):Mn(e,!!n,n?[]:"",!1));return;case"textarea":U=O=null;for(x in n)if(c=n[x],n.hasOwnProperty(x)&&c!=null&&!s.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:je(e,t,x,null,s,c)}for(v in s)if(c=s[v],h=n[v],s.hasOwnProperty(v)&&(c!=null||h!=null))switch(v){case"value":O=c;break;case"defaultValue":U=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(l(91));break;default:c!==h&&je(e,t,v,c,s,h)}gd(e,O,U);return;case"option":for(var J in n)if(O=n[J],n.hasOwnProperty(J)&&O!=null&&!s.hasOwnProperty(J))switch(J){case"selected":e.selected=!1;break;default:je(e,t,J,null,s,O)}for(S in s)if(O=s[S],U=n[S],s.hasOwnProperty(S)&&O!==U&&(O!=null||U!=null))switch(S){case"selected":e.selected=O&&typeof O!="function"&&typeof O!="symbol";break;default:je(e,t,S,O,s,U)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in n)O=n[ae],n.hasOwnProperty(ae)&&O!=null&&!s.hasOwnProperty(ae)&&je(e,t,ae,null,s,O);for(R in s)if(O=s[R],U=n[R],s.hasOwnProperty(R)&&O!==U&&(O!=null||U!=null))switch(R){case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(l(137,t));break;default:je(e,t,R,O,s,U)}return;default:if(ro(t)){for(var ke in n)O=n[ke],n.hasOwnProperty(ke)&&O!==void 0&&!s.hasOwnProperty(ke)&&Kc(e,t,ke,void 0,s,O);for(M in s)O=s[M],U=n[M],!s.hasOwnProperty(M)||O===U||O===void 0&&U===void 0||Kc(e,t,M,O,s,U);return}}for(var A in n)O=n[A],n.hasOwnProperty(A)&&O!=null&&!s.hasOwnProperty(A)&&je(e,t,A,null,s,O);for(q in s)O=s[q],U=n[q],!s.hasOwnProperty(q)||O===U||O==null&&U==null||je(e,t,q,O,s,U)}function wm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Dv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,n=performance.getEntriesByType("resource"),s=0;s<n.length;s++){var c=n[s],h=c.transferSize,v=c.initiatorType,x=c.duration;if(h&&x&&wm(v)){for(v=0,x=c.responseEnd,s+=1;s<n.length;s++){var S=n[s],R=S.startTime;if(R>x)break;var M=S.transferSize,q=S.initiatorType;M&&wm(q)&&(S=S.responseEnd,v+=M*(S<x?1:(x-R)/(S-R)))}if(--s,t+=8*(h+v)/(c.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Pc=null,Ic=null;function Zs(e){return e.nodeType===9?e:e.ownerDocument}function _m(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Sm(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xc(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Jc=null;function Lv(){var e=window.event;return e&&e.type==="popstate"?e===Jc?!1:(Jc=e,!0):(Jc=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,km=typeof Promise=="function"?Promise:void 0,Bv=typeof queueMicrotask=="function"?queueMicrotask:typeof km<"u"?function(e){return km.resolve(null).then(e).catch(Hv)}:jm;function Hv(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function Em(e,t){var n=t,s=0;do{var c=n.nextSibling;if(e.removeChild(n),c&&c.nodeType===8)if(n=c.data,n==="/$"||n==="/&"){if(s===0){e.removeChild(c),pr(t);return}s--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")s++;else if(n==="html")yi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,yi(n);for(var h=n.firstChild;h;){var v=h.nextSibling,x=h.nodeName;h[Lr]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&h.rel.toLowerCase()==="stylesheet"||n.removeChild(h),h=v}}else n==="body"&&yi(e.ownerDocument.body);n=c}while(n);pr(t)}function Tm(e,t){var n=e;e=0;do{var s=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=s}while(n)}function Fc(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Fc(n),eo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function $v(e,t,n,s){for(;e.nodeType===1;){var c=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Lr])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Gt(e.nextSibling),e===null)break}return null}function qv(e,t,n){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Gt(e.nextSibling),e===null))return null;return e}function Am(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=Gt(e.nextSibling),e===null))return null;return e}function Qc(e){return e.data==="$?"||e.data==="$~"}function Wc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gv(e,t){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||n.readyState!=="loading")t();else{var s=function(){t(),n.removeEventListener("DOMContentLoaded",s)};n.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function Gt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Zc=null;function Nm(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(t===0)return Gt(e.nextSibling);t--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||t++}e=e.nextSibling}return null}function Cm(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(t===0)return e;t--}else n!=="/$"&&n!=="/&"||t++}e=e.previousSibling}return null}function Rm(e,t,n){switch(t=Zs(n),e){case"html":if(e=t.documentElement,!e)throw Error(l(452));return e;case"head":if(e=t.head,!e)throw Error(l(453));return e;case"body":if(e=t.body,!e)throw Error(l(454));return e;default:throw Error(l(451))}}function yi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);eo(e)}var Vt=new Map,Om=new Set;function el(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ta=K.d;K.d={f:Vv,r:Yv,D:Kv,C:Pv,L:Iv,m:Xv,X:Fv,S:Jv,M:Qv};function Vv(){var e=Ta.f(),t=Ks();return e||t}function Yv(e){var t=Un(e);t!==null&&t.tag===5&&t.type==="form"?Xh(t):Ta.r(e)}var hr=typeof document>"u"?null:document;function zm(e,t,n){var s=hr;if(s&&typeof t=="string"&&t){var c=Dt(t);c='link[rel="'+e+'"][href="'+c+'"]',typeof n=="string"&&(c+='[crossorigin="'+n+'"]'),Om.has(c)||(Om.add(c),e={rel:e,crossOrigin:n,href:t},s.querySelector(c)===null&&(t=s.createElement("link"),nt(t,"link",e),Fe(t),s.head.appendChild(t)))}}function Kv(e){Ta.D(e),zm("dns-prefetch",e,null)}function Pv(e,t){Ta.C(e,t),zm("preconnect",e,t)}function Iv(e,t,n){Ta.L(e,t,n);var s=hr;if(s&&e&&t){var c='link[rel="preload"][as="'+Dt(t)+'"]';t==="image"&&n&&n.imageSrcSet?(c+='[imagesrcset="'+Dt(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(c+='[imagesizes="'+Dt(n.imageSizes)+'"]')):c+='[href="'+Dt(e)+'"]';var h=c;switch(t){case"style":h=fr(e);break;case"script":h=mr(e)}Vt.has(h)||(e=b({rel:"preload",href:t==="image"&&n&&n.imageSrcSet?void 0:e,as:t},n),Vt.set(h,e),s.querySelector(c)!==null||t==="style"&&s.querySelector(bi(h))||t==="script"&&s.querySelector(xi(h))||(t=s.createElement("link"),nt(t,"link",e),Fe(t),s.head.appendChild(t)))}}function Xv(e,t){Ta.m(e,t);var n=hr;if(n&&e){var s=t&&typeof t.as=="string"?t.as:"script",c='link[rel="modulepreload"][as="'+Dt(s)+'"][href="'+Dt(e)+'"]',h=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=mr(e)}if(!Vt.has(h)&&(e=b({rel:"modulepreload",href:e},t),Vt.set(h,e),n.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(xi(h)))return}s=n.createElement("link"),nt(s,"link",e),Fe(s),n.head.appendChild(s)}}}function Jv(e,t,n){Ta.S(e,t,n);var s=hr;if(s&&e){var c=Dn(s).hoistableStyles,h=fr(e);t=t||"default";var v=c.get(h);if(!v){var x={loading:0,preload:null};if(v=s.querySelector(bi(h)))x.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Vt.get(h))&&eu(e,n);var S=v=s.createElement("link");Fe(S),nt(S,"link",e),S._p=new Promise(function(R,M){S.onload=R,S.onerror=M}),S.addEventListener("load",function(){x.loading|=1}),S.addEventListener("error",function(){x.loading|=2}),x.loading|=4,tl(v,t,s)}v={type:"stylesheet",instance:v,count:1,state:x},c.set(h,v)}}}function Fv(e,t){Ta.X(e,t);var n=hr;if(n&&e){var s=Dn(n).hoistableScripts,c=mr(e),h=s.get(c);h||(h=n.querySelector(xi(c)),h||(e=b({src:e,async:!0},t),(t=Vt.get(c))&&tu(e,t),h=n.createElement("script"),Fe(h),nt(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function Qv(e,t){Ta.M(e,t);var n=hr;if(n&&e){var s=Dn(n).hoistableScripts,c=mr(e),h=s.get(c);h||(h=n.querySelector(xi(c)),h||(e=b({src:e,async:!0,type:"module"},t),(t=Vt.get(c))&&tu(e,t),h=n.createElement("script"),Fe(h),nt(h,"link",e),n.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},s.set(c,h))}}function Um(e,t,n,s){var c=(c=te.current)?el(c):null;if(!c)throw Error(l(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(t=fr(n.href),n=Dn(c).hoistableStyles,s=n.get(t),s||(s={type:"style",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=fr(n.href);var h=Dn(c).hoistableStyles,v=h.get(e);if(v||(c=c.ownerDocument||c,v={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,v),(h=c.querySelector(bi(e)))&&!h._p&&(v.instance=h,v.state.loading=5),Vt.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Vt.set(e,n),h||Wv(c,e,n,v.state))),t&&s===null)throw Error(l(528,""));return v}if(t&&s!==null)throw Error(l(529,""));return null;case"script":return t=n.async,n=n.src,typeof n=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=mr(n),n=Dn(c).hoistableScripts,s=n.get(t),s||(s={type:"script",instance:null,count:0,state:null},n.set(t,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(l(444,e))}}function fr(e){return'href="'+Dt(e)+'"'}function bi(e){return'link[rel="stylesheet"]['+e+"]"}function Dm(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Wv(e,t,n,s){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?s.loading=1:(t=e.createElement("link"),s.preload=t,t.addEventListener("load",function(){return s.loading|=1}),t.addEventListener("error",function(){return s.loading|=2}),nt(t,"link",n),Fe(t),e.head.appendChild(t))}function mr(e){return'[src="'+Dt(e)+'"]'}function xi(e){return"script[async]"+e}function Lm(e,t,n){if(t.count++,t.instance===null)switch(t.type){case"style":var s=e.querySelector('style[data-href~="'+Dt(n.href)+'"]');if(s)return t.instance=s,Fe(s),s;var c=b({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Fe(s),nt(s,"style",c),tl(s,n.precedence,e),t.instance=s;case"stylesheet":c=fr(n.href);var h=e.querySelector(bi(c));if(h)return t.state.loading|=4,t.instance=h,Fe(h),h;s=Dm(n),(c=Vt.get(c))&&eu(s,c),h=(e.ownerDocument||e).createElement("link"),Fe(h);var v=h;return v._p=new Promise(function(x,S){v.onload=x,v.onerror=S}),nt(h,"link",s),t.state.loading|=4,tl(h,n.precedence,e),t.instance=h;case"script":return h=mr(n.src),(c=e.querySelector(xi(h)))?(t.instance=c,Fe(c),c):(s=n,(c=Vt.get(h))&&(s=b({},n),tu(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Fe(c),nt(c,"link",s),e.head.appendChild(c),t.instance=c);case"void":return null;default:throw Error(l(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(s=t.instance,t.state.loading|=4,tl(s,n.precedence,e));return t.instance}function tl(e,t,n){for(var s=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,h=c,v=0;v<s.length;v++){var x=s[v];if(x.dataset.precedence===t)h=x;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function eu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function tu(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var al=null;function Mm(e,t,n){if(al===null){var s=new Map,c=al=new Map;c.set(n,s)}else c=al,s=c.get(n),s||(s=new Map,c.set(n,s));if(s.has(e))return s;for(s.set(e,null),n=n.getElementsByTagName(e),c=0;c<n.length;c++){var h=n[c];if(!(h[Lr]||h[Ze]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var v=h.getAttribute(t)||"";v=e+v;var x=s.get(v);x?x.push(h):s.set(v,[h])}}return s}function Bm(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t==="title"?e.querySelector("head > title"):null)}function Zv(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ey(e,t,n,s){if(n.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var c=fr(s.href),h=t.querySelector(bi(c));if(h){t=h._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=nl.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=h,Fe(h);return}h=t.ownerDocument||t,s=Dm(s),(c=Vt.get(c))&&eu(s,c),h=h.createElement("link"),Fe(h);var v=h;v._p=new Promise(function(x,S){v.onload=x,v.onerror=S}),nt(h,"link",s),n.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=nl.bind(e),t.addEventListener("load",n),t.addEventListener("error",n))}}var au=0;function ty(e,t){return e.stylesheets&&e.count===0&&il(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var s=setTimeout(function(){if(e.stylesheets&&il(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+t);0<e.imgBytes&&au===0&&(au=62500*Dv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&il(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>au?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function nl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)il(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var rl=null;function il(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,rl=new Map,t.forEach(ay,e),rl=null,nl.call(e))}function ay(e,t){if(!(t.state.loading&4)){var n=rl.get(e);if(n)var s=n.get(null);else{n=new Map,rl.set(e,n);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var v=c[h];(v.nodeName==="LINK"||v.getAttribute("media")!=="not all")&&(n.set(v.dataset.precedence,v),s=v)}s&&n.set(null,s)}c=t.instance,v=c.getAttribute("data-precedence"),h=n.get(v)||s,h===s&&n.set(null,c),n.set(v,c),this.count++,s=nl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),t.state.loading|=4}}var wi={$$typeof:H,Provider:null,Consumer:null,_currentValue:ne,_currentValue2:ne,_threadCount:0};function ny(e,t,n,s,c,h,v,x,S){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Fl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fl(0),this.hiddenUpdates=Fl(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=v,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=S,this.incompleteTransitions=new Map}function $m(e,t,n,s,c,h,v,x,S,R,M,q){return e=new ny(e,t,n,v,S,R,M,q,x),t=1,h===!0&&(t|=24),h=jt(3,null,null,t),e.current=h,h.stateNode=e,t=Do(),t.refCount++,e.pooledCache=t,t.refCount++,h.memoizedState={element:s,isDehydrated:n,cache:t},Ho(h),e}function qm(e){return e?(e=Kn,e):Kn}function Gm(e,t,n,s,c,h){c=qm(c),s.context===null?s.context=c:s.pendingContext=c,s=qa(t),s.payload={element:n},h=h===void 0?null:h,h!==null&&(s.callback=h),n=Ga(e,s,t),n!==null&&(vt(n,e,t),Zr(n,e,t))}function Vm(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function nu(e,t){Vm(e,t),(e=e.alternate)&&Vm(e,t)}function Ym(e){if(e.tag===13||e.tag===31){var t=mn(e,67108864);t!==null&&vt(t,e,67108864),nu(e,67108864)}}function Km(e){if(e.tag===13||e.tag===31){var t=Nt();t=Ql(t);var n=mn(e,t);n!==null&&vt(n,e,t),nu(e,t)}}var sl=!0;function ry(e,t,n,s){var c=B.T;B.T=null;var h=K.p;try{K.p=2,ru(e,t,n,s)}finally{K.p=h,B.T=c}}function iy(e,t,n,s){var c=B.T;B.T=null;var h=K.p;try{K.p=8,ru(e,t,n,s)}finally{K.p=h,B.T=c}}function ru(e,t,n,s){if(sl){var c=iu(s);if(c===null)Yc(e,t,s,ll,n),Im(e,s);else if(ly(c,e,t,n,s))s.stopPropagation();else if(Im(e,s),t&4&&-1<sy.indexOf(e)){for(;c!==null;){var h=Un(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var v=cn(h.pendingLanes);if(v!==0){var x=h;for(x.pendingLanes|=2,x.entangledLanes|=2;v;){var S=1<<31-_t(v);x.entanglements[1]|=S,v&=~S}na(h),(ye&6)===0&&(Vs=xt()+500,pi(0))}}break;case 31:case 13:x=mn(h,2),x!==null&&vt(x,h,2),Ks(),nu(h,2)}if(h=iu(s),h===null&&Yc(e,t,s,ll,n),h===c)break;c=h}c!==null&&s.stopPropagation()}else Yc(e,t,s,null,n)}}function iu(e){return e=so(e),su(e)}var ll=null;function su(e){if(ll=null,e=zn(e),e!==null){var t=u(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=f(t),e!==null)return e;e=null}else if(n===31){if(e=m(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return ll=e,null}function Pm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Kg()){case Zu:return 2;case ed:return 8;case Fi:case Pg:return 32;case td:return 268435456;default:return 32}default:return 32}}var lu=!1,Za=null,en=null,tn=null,_i=new Map,Si=new Map,an=[],sy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Im(e,t){switch(e){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":en=null;break;case"mouseover":case"mouseout":tn=null;break;case"pointerover":case"pointerout":_i.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Si.delete(t.pointerId)}}function ji(e,t,n,s,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:t,domEventName:n,eventSystemFlags:s,nativeEvent:h,targetContainers:[c]},t!==null&&(t=Un(t),t!==null&&Ym(t)),e):(e.eventSystemFlags|=s,t=e.targetContainers,c!==null&&t.indexOf(c)===-1&&t.push(c),e)}function ly(e,t,n,s,c){switch(t){case"focusin":return Za=ji(Za,e,t,n,s,c),!0;case"dragenter":return en=ji(en,e,t,n,s,c),!0;case"mouseover":return tn=ji(tn,e,t,n,s,c),!0;case"pointerover":var h=c.pointerId;return _i.set(h,ji(_i.get(h)||null,e,t,n,s,c)),!0;case"gotpointercapture":return h=c.pointerId,Si.set(h,ji(Si.get(h)||null,e,t,n,s,c)),!0}return!1}function Xm(e){var t=zn(e.target);if(t!==null){var n=u(t);if(n!==null){if(t=n.tag,t===13){if(t=f(n),t!==null){e.blockedOn=t,ld(e.priority,function(){Km(n)});return}}else if(t===31){if(t=m(n),t!==null){e.blockedOn=t,ld(e.priority,function(){Km(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ol(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=iu(e.nativeEvent);if(n===null){n=e.nativeEvent;var s=new n.constructor(n.type,n);io=s,n.target.dispatchEvent(s),io=null}else return t=Un(n),t!==null&&Ym(t),e.blockedOn=n,!1;t.shift()}return!0}function Jm(e,t,n){ol(e)&&n.delete(t)}function oy(){lu=!1,Za!==null&&ol(Za)&&(Za=null),en!==null&&ol(en)&&(en=null),tn!==null&&ol(tn)&&(tn=null),_i.forEach(Jm),Si.forEach(Jm)}function cl(e,t){e.blockedOn===t&&(e.blockedOn=null,lu||(lu=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,oy)))}var ul=null;function Fm(e){ul!==e&&(ul=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ul===e&&(ul=null);for(var t=0;t<e.length;t+=3){var n=e[t],s=e[t+1],c=e[t+2];if(typeof s!="function"){if(su(s||n)===null)continue;break}var h=Un(n);h!==null&&(e.splice(t,3),t-=3,ic(h,{pending:!0,data:c,method:n.method,action:s},s,c))}}))}function pr(e){function t(S){return cl(S,e)}Za!==null&&cl(Za,e),en!==null&&cl(en,e),tn!==null&&cl(tn,e),_i.forEach(t),Si.forEach(t);for(var n=0;n<an.length;n++){var s=an[n];s.blockedOn===e&&(s.blockedOn=null)}for(;0<an.length&&(n=an[0],n.blockedOn===null);)Xm(n),n.blockedOn===null&&an.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(s=0;s<n.length;s+=3){var c=n[s],h=n[s+1],v=c[dt]||null;if(typeof h=="function")v||Fm(n);else if(v){var x=null;if(h&&h.hasAttribute("formAction")){if(c=h,v=h[dt]||null)x=v.formAction;else if(su(c)!==null)continue}else x=v.action;typeof x=="function"?n[s+1]=x:(n.splice(s,3),s-=3),Fm(n)}}}function Qm(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(v){return c=v})},focusReset:"manual",scroll:"manual"})}function t(){c!==null&&(c(),c=null),s||setTimeout(n,20)}function n(){if(!s&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(n,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),c!==null&&(c(),c=null)}}}function ou(e){this._internalRoot=e}dl.prototype.render=ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));var n=t.current,s=Nt();Gm(n,s,e,t,null,null)},dl.prototype.unmount=ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Gm(e.current,2,null,e,null,null),Ks(),t[On]=null}};function dl(e){this._internalRoot=e}dl.prototype.unstable_scheduleHydration=function(e){if(e){var t=sd();e={blockedOn:null,target:e,priority:t};for(var n=0;n<an.length&&t!==0&&t<an[n].priority;n++);an.splice(n,0,e),n===0&&Xm(e)}};var Wm=a.version;if(Wm!=="19.2.7")throw Error(l(527,Wm,"19.2.7"));K.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=g(t),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var cy={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{zr=hl.inject(cy),wt=hl}catch{}}return Ei.createRoot=function(e,t){if(!o(e))throw Error(l(299));var n=!1,s="",c=rf,h=sf,v=lf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onUncaughtError!==void 0&&(c=t.onUncaughtError),t.onCaughtError!==void 0&&(h=t.onCaughtError),t.onRecoverableError!==void 0&&(v=t.onRecoverableError)),t=$m(e,1,!1,null,null,n,s,null,c,h,v,Qm),e[On]=t.current,Vc(e),new ou(t)},Ei.hydrateRoot=function(e,t,n){if(!o(e))throw Error(l(299));var s=!1,c="",h=rf,v=sf,x=lf,S=null;return n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(c=n.identifierPrefix),n.onUncaughtError!==void 0&&(h=n.onUncaughtError),n.onCaughtError!==void 0&&(v=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(S=n.formState)),t=$m(e,1,!0,t,n??null,s,c,S,h,v,x,Qm),t.context=qm(null),n=t.current,s=Nt(),s=Ql(s),c=qa(s),c.callback=null,Ga(n,c,s),n=s,t.current.lanes=n,Dr(t,n),na(t),e[On]=t.current,Vc(e),new dl(t)},Ei.version="19.2.7",Ei}var op;function xy(){if(op)return du.exports;op=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(a){console.error(a)}}return r(),du.exports=by(),du.exports}var wy=xy();const _y=Wp(wy);/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Bu=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Zp=/^[\\/]{2}/;function Sy(r,a){return a+r.replace(/\\/g,"/")}var cp="popstate";function up(r){return typeof r=="object"&&r!=null&&"pathname"in r&&"search"in r&&"hash"in r&&"state"in r&&"key"in r}function jy(r={}){function a(l,o){var g;let u=(g=o.state)==null?void 0:g.masked,{pathname:f,search:m,hash:p}=u||l.location;return ju("",{pathname:f,search:m,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",u?{pathname:l.location.pathname,search:l.location.search,hash:l.location.hash}:void 0)}function i(l,o){return typeof o=="string"?o:Bi(o)}return Ey(a,i,null,r)}function Oe(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function Zt(r,a){if(!r){typeof console<"u"&&console.warn(a);try{throw new Error(a)}catch{}}}function ky(){return Math.random().toString(36).substring(2,10)}function dp(r,a){return{usr:r.state,key:r.key,idx:a,masked:r.mask?{pathname:r.pathname,search:r.search,hash:r.hash}:void 0}}function ju(r,a,i=null,l,o){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof a=="string"?Tr(a):a,state:i,key:a&&a.key||l||ky(),mask:o}}function Bi({pathname:r="/",search:a="",hash:i=""}){return a&&a!=="?"&&(r+=a.charAt(0)==="?"?a:"?"+a),i&&i!=="#"&&(r+=i.charAt(0)==="#"?i:"#"+i),r}function Tr(r){let a={};if(r){let i=r.indexOf("#");i>=0&&(a.hash=r.substring(i),r=r.substring(0,i));let l=r.indexOf("?");l>=0&&(a.search=r.substring(l),r=r.substring(0,l)),r&&(a.pathname=r)}return a}function Ey(r,a,i,l={}){let{window:o=document.defaultView,v5Compat:u=!1}=l,f=o.history,m="POP",p=null,g=y();g==null&&(g=0,f.replaceState({...f.state,idx:g},""));function y(){return(f.state||{idx:null}).idx}function b(){m="POP";let D=y(),z=D==null?null:D-g;g=D,p&&p({action:m,location:N.location,delta:z})}function w(D,z){m="PUSH";let Y=up(D)?D:ju(N.location,D,z);g=y()+1;let H=dp(Y,g),I=N.createHref(Y.mask||Y);try{f.pushState(H,"",I)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;o.location.assign(I)}u&&p&&p({action:m,location:N.location,delta:1})}function _(D,z){m="REPLACE";let Y=up(D)?D:ju(N.location,D,z);g=y();let H=dp(Y,g),I=N.createHref(Y.mask||Y);f.replaceState(H,"",I),u&&p&&p({action:m,location:N.location,delta:0})}function E(D){return Ty(o,D)}let N={get action(){return m},get location(){return r(o,f)},listen(D){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(cp,b),p=D,()=>{o.removeEventListener(cp,b),p=null}},createHref(D){return a(o,D)},createURL:E,encodeLocation(D){let z=E(D);return{pathname:z.pathname,search:z.search,hash:z.hash}},push:w,replace:_,go(D){return f.go(D)}};return N}function Ty(r,a,i=!1){let l="http://localhost";r&&(l=r.location.origin!=="null"?r.location.origin:r.location.href),Oe(l,"No window.location.(origin|href) available to create URL");let o=typeof a=="string"?a:Bi(a);return o=o.replace(/ $/,"%20"),!i&&Zp.test(o)&&(o=l+o),new URL(o,l)}function eg(r,a,i="/"){return Ay(r,a,i,!1)}function Ay(r,a,i,l,o){let u=typeof a=="string"?Tr(a):a,f=Oa(u.pathname||"/",i);if(f==null)return null;let m=Ny(r),p=null,g=$y(f);for(let y=0;p==null&&y<m.length;++y)p=Hy(m[y],g,l);return p}function Ny(r){let a=tg(r);return Cy(a),a}function tg(r,a=[],i=[],l="",o=!1){let u=(f,m,p=o,g)=>{let y={relativePath:g===void 0?f.path||"":g,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(l)&&p)return;Oe(y.relativePath.startsWith(l),`Absolute route path "${y.relativePath}" nested under path "${l}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(l.length)}let b=Wt([l,y.relativePath]),w=i.concat(y);f.children&&f.children.length>0&&(Oe(f.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),tg(f.children,a,w,b,p)),!(f.path==null&&!f.index)&&a.push({path:b,score:My(b,f.index),routesMeta:w.map((_,E)=>{let[N,D]=rg(_.relativePath,_.caseSensitive,E===w.length-1);return{..._,matcher:N,compiledParams:D}})})};return r.forEach((f,m)=>{var p;if(f.path===""||!((p=f.path)!=null&&p.includes("?")))u(f,m);else for(let g of ag(f.path))u(f,m,!0,g)}),a}function ag(r){let a=r.split("/");if(a.length===0)return[];let[i,...l]=a,o=i.endsWith("?"),u=i.replace(/\?$/,"");if(l.length===0)return o?[u,""]:[u];let f=ag(l.join("/")),m=[];return m.push(...f.map(p=>p===""?u:[u,p].join("/"))),o&&m.push(...f),m.map(p=>r.startsWith("/")&&p===""?"/":p)}function Cy(r){r.sort((a,i)=>a.score!==i.score?i.score-a.score:By(a.routesMeta.map(l=>l.childrenIndex),i.routesMeta.map(l=>l.childrenIndex)))}var Ry=/^:[\w-]+$/,Oy=3,zy=2,Uy=1,Dy=10,Ly=-2,hp=r=>r==="*";function My(r,a){let i=r.split("/"),l=i.length;return i.some(hp)&&(l+=Ly),a&&(l+=zy),i.filter(o=>!hp(o)).reduce((o,u)=>o+(Ry.test(u)?Oy:u===""?Uy:Dy),l)}function By(r,a){return r.length===a.length&&r.slice(0,-1).every((l,o)=>l===a[o])?r[r.length-1]-a[a.length-1]:0}function Hy(r,a,i=!1){let{routesMeta:l}=r,o={},u="/",f=[];for(let m=0;m<l.length;++m){let p=l[m],g=m===l.length-1,y=u==="/"?a:a.slice(u.length)||"/",b={path:p.relativePath,caseSensitive:p.caseSensitive,end:g},w=p.matcher&&p.compiledParams?ng(b,y,p.matcher,p.compiledParams):kl(b,y),_=p.route;if(!w&&g&&i&&!l[l.length-1].route.index&&(w=kl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!w)return null;Object.assign(o,w.params),f.push({params:o,pathname:Wt([u,w.pathname]),pathnameBase:Vy(Wt([u,w.pathnameBase])),route:_}),w.pathnameBase!=="/"&&(u=Wt([u,w.pathnameBase]))}return f}function kl(r,a){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[i,l]=rg(r.path,r.caseSensitive,r.end);return ng(r,a,i,l)}function ng(r,a,i,l){let o=a.match(i);if(!o)return null;let u=o[0],f=u.replace(/(.)\/+$/,"$1"),m=o.slice(1);return{params:l.reduce((g,{paramName:y,isOptional:b},w)=>{if(y==="*"){let E=m[w]||"";f=u.slice(0,u.length-E.length).replace(/(.)\/+$/,"$1")}const _=m[w];return b&&!_?g[y]=void 0:g[y]=(_||"").replace(/%2F/g,"/"),g},{}),pathname:u,pathnameBase:f,pattern:r}}function rg(r,a=!1,i=!0){Zt(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let l=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,m,p,g,y)=>{if(l.push({paramName:m,isOptional:p!=null}),p){let b=y.charAt(g+f.length);return b&&b!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return r.endsWith("*")?(l.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,a?void 0:"i"),l]}function $y(r){try{return r.split("/").map(a=>decodeURIComponent(a).replace(/\//g,"%2F")).join("/")}catch(a){return Zt(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${a}).`),r}}function Oa(r,a){if(a==="/")return r;if(!r.toLowerCase().startsWith(a.toLowerCase()))return null;let i=a.endsWith("/")?a.length-1:a.length,l=r.charAt(i);return l&&l!=="/"?null:r.slice(i)||"/"}function qy(r,a="/"){let{pathname:i,search:l="",hash:o=""}=typeof r=="string"?Tr(r):r,u;return i?(i=ig(i),i.startsWith("/")?u=fp(i.substring(1),"/"):u=fp(i,a)):u=a,{pathname:u,search:Yy(l),hash:Ky(o)}}function fp(r,a){let i=El(a).split("/");return r.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function pu(r,a,i,l){return`Cannot include a '${r}' character in a manually specified \`to.${a}\` field [${JSON.stringify(l)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Gy(r){return r.filter((a,i)=>i===0||a.route.path&&a.route.path.length>0)}function Hu(r){let a=Gy(r);return a.map((i,l)=>l===a.length-1?i.pathname:i.pathnameBase)}function Dl(r,a,i,l=!1){let o;typeof r=="string"?o=Tr(r):(o={...r},Oe(!o.pathname||!o.pathname.includes("?"),pu("?","pathname","search",o)),Oe(!o.pathname||!o.pathname.includes("#"),pu("#","pathname","hash",o)),Oe(!o.search||!o.search.includes("#"),pu("#","search","hash",o)));let u=r===""||o.pathname==="",f=u?"/":o.pathname,m;if(f==null)m=i;else{let b=a.length-1;if(!l&&f.startsWith("..")){let w=f.split("/");for(;w[0]==="..";)w.shift(),b-=1;o.pathname=w.join("/")}m=b>=0?a[b]:"/"}let p=qy(o,m),g=f&&f!=="/"&&f.endsWith("/"),y=(u||f===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var ig=r=>r.replace(/[\\/]{2,}/g,"/"),Wt=r=>ig(r.join("/")),El=r=>r.replace(/\/+$/,""),Vy=r=>El(r).replace(/^\/*/,"/"),Yy=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Ky=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r,Py=class{constructor(r,a,i,l=!1){this.status=r,this.statusText=a||"",this.internal=l,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function Iy(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}function Xy(r){let a=r.map(i=>i.route.path).filter(Boolean);return Wt(a)||"/"}var sg=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function lg(r,a){let i=r;if(typeof i!="string"||!Bu.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let l=i,o=!1;if(sg)try{let u=new URL(window.location.href),f=Zp.test(i)?new URL(Sy(i,u.protocol)):new URL(i),m=Oa(f.pathname,a);f.origin===u.origin&&m!=null?i=m+f.search+f.hash:o=!0}catch{Zt(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:l,isExternal:o,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var og=["POST","PUT","PATCH","DELETE"];new Set(og);var Jy=["GET",...og];new Set(Jy);var Fy=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function Qy(r){try{return Fy.includes(new URL(r).protocol)}catch{return!1}}var Ar=T.createContext(null);Ar.displayName="DataRouter";var Ll=T.createContext(null);Ll.displayName="DataRouterState";var cg=T.createContext(!1);function Wy(){return T.useContext(cg)}var ug=T.createContext({isTransitioning:!1});ug.displayName="ViewTransition";var Zy=T.createContext(new Map);Zy.displayName="Fetchers";var eb=T.createContext(null);eb.displayName="Await";var Rt=T.createContext(null);Rt.displayName="Navigation";var Pi=T.createContext(null);Pi.displayName="Location";var oa=T.createContext({outlet:null,matches:[],isDataRoute:!1});oa.displayName="Route";var $u=T.createContext(null);$u.displayName="RouteError";var dg="REACT_ROUTER_ERROR",tb="REDIRECT",ab="ROUTE_ERROR_RESPONSE";function nb(r){if(r.startsWith(`${dg}:${tb}:{`))try{let a=JSON.parse(r.slice(28));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string"&&typeof a.location=="string"&&typeof a.reloadDocument=="boolean"&&typeof a.replace=="boolean")return a}catch{}}function rb(r){if(r.startsWith(`${dg}:${ab}:{`))try{let a=JSON.parse(r.slice(40));if(typeof a=="object"&&a&&typeof a.status=="number"&&typeof a.statusText=="string")return new Py(a.status,a.statusText,a.data)}catch{}}function ib(r,{relative:a}={}){Oe(Nr(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:l}=T.useContext(Rt),{hash:o,pathname:u,search:f}=Ii(r,{relative:a}),m=u;return i!=="/"&&(m=u==="/"?i:Wt([i,u])),l.createHref({pathname:m,search:f,hash:o})}function Nr(){return T.useContext(Pi)!=null}function Ot(){return Oe(Nr(),"useLocation() may be used only in the context of a <Router> component."),T.useContext(Pi).location}var hg="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function fg(r){T.useContext(Rt).static||T.useLayoutEffect(r)}function Cr(){let{isDataRoute:r}=T.useContext(oa);return r?yb():sb()}function sb(){Oe(Nr(),"useNavigate() may be used only in the context of a <Router> component.");let r=T.useContext(Ar),{basename:a,navigator:i}=T.useContext(Rt),{matches:l}=T.useContext(oa),{pathname:o}=Ot(),u=JSON.stringify(Hu(l)),f=T.useRef(!1);return fg(()=>{f.current=!0}),T.useCallback((p,g={})=>{if(Zt(f.current,hg),!f.current)return;if(typeof p=="number"){i.go(p);return}let y=Dl(p,JSON.parse(u),o,g.relative==="path");r==null&&a!=="/"&&(y.pathname=y.pathname==="/"?a:Wt([a,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[a,i,u,o,r])}T.createContext(null);function Ii(r,{relative:a}={}){let{matches:i}=T.useContext(oa),{pathname:l}=Ot(),o=JSON.stringify(Hu(i));return T.useMemo(()=>Dl(r,JSON.parse(o),l,a==="path"),[r,o,l,a])}function lb(r,a){return mg(r,a)}function mg(r,a,i){var D;Oe(Nr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:l}=T.useContext(Rt),{matches:o}=T.useContext(oa),u=o[o.length-1],f=u?u.params:{},m=u?u.pathname:"/",p=u?u.pathnameBase:"/",g=u&&u.route;{let z=g&&g.path||"";gg(m,!g||z.endsWith("*")||z.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${m}" (under <Route path="${z}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${z}"> to <Route path="${z==="/"?"*":`${z}/*`}">.`)}let y=Ot(),b;if(a){let z=typeof a=="string"?Tr(a):a;Oe(p==="/"||((D=z.pathname)==null?void 0:D.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${z.pathname}" was given in the \`location\` prop.`),b=z}else b=y;let w=b.pathname||"/",_=w;if(p!=="/"){let z=p.replace(/^\//,"").split("/");_="/"+w.replace(/^\//,"").split("/").slice(z.length).join("/")}let E=i&&i.state.matches.length?i.state.matches.map(z=>Object.assign(z,{route:i.manifest[z.route.id]||z.route})):eg(r,{pathname:_});Zt(g||E!=null,`No routes matched location "${b.pathname}${b.search}${b.hash}" `),Zt(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let N=hb(E&&E.map(z=>Object.assign({},z,{params:Object.assign({},f,z.params),pathname:Wt([p,l.encodeLocation?l.encodeLocation(z.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?p:Wt([p,l.encodeLocation?l.encodeLocation(z.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:z.pathnameBase])})),o,i);return a&&N?T.createElement(Pi.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...b},navigationType:"POP"}},N):N}function ob(){let r=vb(),a=Iy(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),i=r instanceof Error?r.stack:null,l="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:l},u={padding:"2px 4px",backgroundColor:l},f=null;return console.error("Error handled by React Router default ErrorBoundary:",r),f=T.createElement(T.Fragment,null,T.createElement("p",null,"💿 Hey developer 👋"),T.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",T.createElement("code",{style:u},"ErrorBoundary")," or"," ",T.createElement("code",{style:u},"errorElement")," prop on your route.")),T.createElement(T.Fragment,null,T.createElement("h2",null,"Unexpected Application Error!"),T.createElement("h3",{style:{fontStyle:"italic"}},a),i?T.createElement("pre",{style:o},i):null,f)}var cb=T.createElement(ob,null),pg=class extends T.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,a){return a.location!==r.location||a.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:a.error,location:a.location,revalidation:r.revalidation||a.revalidation}}componentDidCatch(r,a){this.props.onError?this.props.onError(r,a):console.error("React Router caught the following error during render",r)}render(){let r=this.state.error;if(this.context&&typeof r=="object"&&r&&"digest"in r&&typeof r.digest=="string"){const i=rb(r.digest);i&&(r=i)}let a=r!==void 0?T.createElement(oa.Provider,{value:this.props.routeContext},T.createElement($u.Provider,{value:r,children:this.props.component})):this.props.children;return this.context?T.createElement(ub,{error:r},a):a}};pg.contextType=cg;var gu=new WeakMap;function ub({children:r,error:a}){let{basename:i}=T.useContext(Rt);if(typeof a=="object"&&a&&"digest"in a&&typeof a.digest=="string"){let l=nb(a.digest);if(l){let o=gu.get(a);if(o)throw o;let u=lg(l.location,i),f=u.absoluteURL||u.to;if(Qy(f))throw new Error("Invalid redirect location");if(sg&&!gu.get(a))if(u.isExternal||l.reloadDocument)window.location.href=f;else{const m=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(u.to,{replace:l.replace}));throw gu.set(a,m),m}return T.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f}`})}}return r}function db({routeContext:r,match:a,children:i}){let l=T.useContext(Ar);return l&&l.static&&l.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(l.staticContext._deepestRenderedBoundaryId=a.route.id),T.createElement(oa.Provider,{value:r},i)}function hb(r,a=[],i){let l=i==null?void 0:i.state;if(r==null){if(!l)return null;if(l.errors)r=l.matches;else if(a.length===0&&!l.initialized&&l.matches.length>0)r=l.matches;else return null}let o=r,u=l==null?void 0:l.errors;if(u!=null){let y=o.findIndex(b=>b.route.id&&(u==null?void 0:u[b.route.id])!==void 0);Oe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(u).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let f=!1,m=-1;if(i&&l){f=l.renderFallback;for(let y=0;y<o.length;y++){let b=o[y];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=y),b.route.id){let{loaderData:w,errors:_}=l,E=b.route.loader&&!w.hasOwnProperty(b.route.id)&&(!_||_[b.route.id]===void 0);if(b.route.lazy||E){i.isStatic&&(f=!0),m>=0?o=o.slice(0,m+1):o=[o[0]];break}}}}let p=i==null?void 0:i.onError,g=l&&p?(y,b)=>{var w,_;p(y,{location:l.location,params:((_=(w=l.matches)==null?void 0:w[0])==null?void 0:_.params)??{},pattern:Xy(l.matches),errorInfo:b})}:void 0;return o.reduceRight((y,b,w)=>{let _,E=!1,N=null,D=null;l&&(_=u&&b.route.id?u[b.route.id]:void 0,N=b.route.errorElement||cb,f&&(m<0&&w===0?(gg("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,D=null):m===w&&(E=!0,D=b.route.hydrateFallbackElement||null)));let z=a.concat(o.slice(0,w+1)),Y=()=>{let H;return _?H=N:E?H=D:b.route.Component?H=T.createElement(b.route.Component,null):b.route.element?H=b.route.element:H=y,T.createElement(db,{match:b,routeContext:{outlet:y,matches:z,isDataRoute:l!=null},children:H})};return l&&(b.route.ErrorBoundary||b.route.errorElement||w===0)?T.createElement(pg,{location:l.location,revalidation:l.revalidation,component:N,error:_,children:Y(),routeContext:{outlet:null,matches:z,isDataRoute:!0},onError:g}):Y()},null)}function qu(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function fb(r){let a=T.useContext(Ar);return Oe(a,qu(r)),a}function mb(r){let a=T.useContext(Ll);return Oe(a,qu(r)),a}function pb(r){let a=T.useContext(oa);return Oe(a,qu(r)),a}function Gu(r){let a=pb(r),i=a.matches[a.matches.length-1];return Oe(i.route.id,`${r} can only be used on routes that contain a unique "id"`),i.route.id}function gb(){return Gu("useRouteId")}function vb(){var l;let r=T.useContext($u),a=mb("useRouteError"),i=Gu("useRouteError");return r!==void 0?r:(l=a.errors)==null?void 0:l[i]}function yb(){let{router:r}=fb("useNavigate"),a=Gu("useNavigate"),i=T.useRef(!1);return fg(()=>{i.current=!0}),T.useCallback(async(o,u={})=>{Zt(i.current,hg),i.current&&(typeof o=="number"?await r.navigate(o):await r.navigate(o,{fromRouteId:a,...u}))},[r,a])}var mp={};function gg(r,a,i){!a&&!mp[r]&&(mp[r]=!0,Zt(!1,i))}T.memo(bb);function bb({routes:r,manifest:a,future:i,state:l,isStatic:o,onError:u}){return mg(r,void 0,{manifest:a,state:l,isStatic:o,onError:u})}function xb({to:r,replace:a,state:i,relative:l}){Oe(Nr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=T.useContext(Rt);Zt(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:u}=T.useContext(oa),{pathname:f}=Ot(),m=Cr(),p=Dl(r,Hu(u),f,l==="path"),g=JSON.stringify(p);return T.useEffect(()=>{m(JSON.parse(g),{replace:a,state:i,relative:l})},[m,g,l,a,i]),null}function ia(r){Oe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function wb({basename:r="/",children:a=null,location:i,navigationType:l="POP",navigator:o,static:u=!1,useTransitions:f}){Oe(!Nr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let m=r.replace(/^\/*/,"/"),p=T.useMemo(()=>({basename:m,navigator:o,static:u,useTransitions:f,future:{}}),[m,o,u,f]);typeof i=="string"&&(i=Tr(i));let{pathname:g="/",search:y="",hash:b="",state:w=null,key:_="default",mask:E}=i,N=T.useMemo(()=>{let D=Oa(g,m);return D==null?null:{location:{pathname:D,search:y,hash:b,state:w,key:_,mask:E},navigationType:l}},[m,g,y,b,w,_,l,E]);return Zt(N!=null,`<Router basename="${m}"> is not able to match the URL "${g}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:T.createElement(Rt.Provider,{value:p},T.createElement(Pi.Provider,{children:a,value:N}))}function _b({children:r,location:a}){return lb(ku(r),a)}function ku(r,a=[]){let i=[];return T.Children.forEach(r,(l,o)=>{if(!T.isValidElement(l))return;let u=[...a,o];if(l.type===T.Fragment){i.push.apply(i,ku(l.props.children,u));return}Oe(l.type===ia,`[${typeof l.type=="string"?l.type:l.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Oe(!l.props.index||!l.props.children,"An index route cannot have child routes.");let f={id:l.props.id||u.join("-"),caseSensitive:l.props.caseSensitive,element:l.props.element,Component:l.props.Component,index:l.props.index,path:l.props.path,middleware:l.props.middleware,loader:l.props.loader,action:l.props.action,hydrateFallbackElement:l.props.hydrateFallbackElement,HydrateFallback:l.props.HydrateFallback,errorElement:l.props.errorElement,ErrorBoundary:l.props.ErrorBoundary,hasErrorBoundary:l.props.hasErrorBoundary===!0||l.props.ErrorBoundary!=null||l.props.errorElement!=null,shouldRevalidate:l.props.shouldRevalidate,handle:l.props.handle,lazy:l.props.lazy};l.props.children&&(f.children=ku(l.props.children,u)),i.push(f)}),i}var _l="get",Sl="application/x-www-form-urlencoded";function Ml(r){return typeof HTMLElement<"u"&&r instanceof HTMLElement}function Sb(r){return Ml(r)&&r.tagName.toLowerCase()==="button"}function jb(r){return Ml(r)&&r.tagName.toLowerCase()==="form"}function kb(r){return Ml(r)&&r.tagName.toLowerCase()==="input"}function Eb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Tb(r,a){return r.button===0&&(!a||a==="_self")&&!Eb(r)}var fl=null;function Ab(){if(fl===null)try{new FormData(document.createElement("form"),0),fl=!1}catch{fl=!0}return fl}var Nb=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function vu(r){return r!=null&&!Nb.has(r)?(Zt(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Sl}"`),null):r}function Cb(r,a){let i,l,o,u,f;if(jb(r)){let m=r.getAttribute("action");l=m?Oa(m,a):null,i=r.getAttribute("method")||_l,o=vu(r.getAttribute("enctype"))||Sl,u=new FormData(r)}else if(Sb(r)||kb(r)&&(r.type==="submit"||r.type==="image")){let m=r.form;if(m==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||m.getAttribute("action");if(l=p?Oa(p,a):null,i=r.getAttribute("formmethod")||m.getAttribute("method")||_l,o=vu(r.getAttribute("formenctype"))||vu(m.getAttribute("enctype"))||Sl,u=new FormData(m,r),!Ab()){let{name:g,type:y,value:b}=r;if(y==="image"){let w=g?`${g}.`:"";u.append(`${w}x`,"0"),u.append(`${w}y`,"0")}else g&&u.append(g,b)}}else{if(Ml(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=_l,l=null,o=Sl,f=r}return u&&o==="text/plain"&&(f=u,u=void 0),{action:l,method:i.toLowerCase(),encType:o,formData:u,body:f}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Vu(r,a){if(r===!1||r===null||typeof r>"u")throw new Error(a)}function vg(r,a,i,l){let o=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return i?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${l}`:o.pathname=`${o.pathname}.${l}`:o.pathname==="/"?o.pathname=`_root.${l}`:a&&Oa(o.pathname,a)==="/"?o.pathname=`${El(a)}/_root.${l}`:o.pathname=`${El(o.pathname)}.${l}`,o}async function Rb(r,a){if(r.id in a)return a[r.id];try{let i=await import(r.module);return a[r.id]=i,i}catch(i){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function Ob(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function zb(r,a,i){let l=await Promise.all(r.map(async o=>{let u=a.routes[o.route.id];if(u){let f=await Rb(u,i);return f.links?f.links():[]}return[]}));return Mb(l.flat(1).filter(Ob).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function pp(r,a,i,l,o,u){let f=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,m=(p,g)=>{var y;return i[g].pathname!==p.pathname||((y=i[g].route.path)==null?void 0:y.endsWith("*"))&&i[g].params["*"]!==p.params["*"]};return u==="assets"?a.filter((p,g)=>f(p,g)||m(p,g)):u==="data"?a.filter((p,g)=>{var b;let y=l.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(f(p,g)||m(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((b=i[0])==null?void 0:b.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function Ub(r,a,{includeHydrateFallback:i}={}){return Db(r.map(l=>{let o=a.routes[l.route.id];if(!o)return[];let u=[o.module];return o.clientActionModule&&(u=u.concat(o.clientActionModule)),o.clientLoaderModule&&(u=u.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(u=u.concat(o.hydrateFallbackModule)),o.imports&&(u=u.concat(o.imports)),u}).flat(1))}function Db(r){return[...new Set(r)]}function Lb(r){let a={},i=Object.keys(r).sort();for(let l of i)a[l]=r[l];return a}function Mb(r,a){let i=new Set;return new Set(a),r.reduce((l,o)=>{let u=JSON.stringify(Lb(o));return i.has(u)||(i.add(u),l.push({key:u,link:o})),l},[])}function Yu(){let r=T.useContext(Ar);return Vu(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function Bb(){let r=T.useContext(Ll);return Vu(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Ku=T.createContext(void 0);Ku.displayName="FrameworkContext";function Bl(){let r=T.useContext(Ku);return Vu(r,"You must render this element inside a <HydratedRouter> element"),r}function Hb(r,a){let i=T.useContext(Ku),[l,o]=T.useState(!1),[u,f]=T.useState(!1),{onFocus:m,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:b}=a,w=T.useRef(null);T.useEffect(()=>{if(r==="render"&&f(!0),r==="viewport"){let N=z=>{z.forEach(Y=>{f(Y.isIntersecting)})},D=new IntersectionObserver(N,{threshold:.5});return w.current&&D.observe(w.current),()=>{D.disconnect()}}},[r]),T.useEffect(()=>{if(l){let N=setTimeout(()=>{f(!0)},100);return()=>{clearTimeout(N)}}},[l]);let _=()=>{o(!0)},E=()=>{o(!1),f(!1)};return i?r!=="intent"?[u,w,{}]:[u,w,{onFocus:Ti(m,_),onBlur:Ti(p,E),onMouseEnter:Ti(g,_),onMouseLeave:Ti(y,E),onTouchStart:Ti(b,_)}]:[!1,w,{}]}function Ti(r,a){return i=>{r&&r(i),i.defaultPrevented||a(i)}}function $b({page:r,...a}){let i=Wy(),{nonce:l}=Bl(),{router:o}=Yu(),u=T.useMemo(()=>eg(o.routes,r,o.basename),[o.routes,r,o.basename]);return u?(a.nonce==null&&l&&(a={...a,nonce:l}),i?T.createElement(Gb,{page:r,matches:u,...a}):T.createElement(Vb,{page:r,matches:u,...a})):null}function qb(r){let{manifest:a,routeModules:i}=Bl(),[l,o]=T.useState([]);return T.useEffect(()=>{let u=!1;return zb(r,a,i).then(f=>{u||o(f)}),()=>{u=!0}},[r,a,i]),l}function Gb({page:r,matches:a,...i}){let l=Ot(),{future:o}=Bl(),{basename:u}=Yu(),f=T.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let m=vg(r,u,o.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,g=[];for(let y of a)typeof y.route.shouldRevalidate=="function"?p=!0:g.push(y.route.id);return p&&g.length>0&&m.searchParams.set("_routes",g.join(",")),[m.pathname+m.search]},[u,o.v8_trailingSlashAwareDataRequests,r,l,a]);return T.createElement(T.Fragment,null,f.map(m=>T.createElement("link",{key:m,rel:"prefetch",as:"fetch",href:m,...i})))}function Vb({page:r,matches:a,...i}){let l=Ot(),{future:o,manifest:u,routeModules:f}=Bl(),{basename:m}=Yu(),{loaderData:p,matches:g}=Bb(),y=T.useMemo(()=>pp(r,a,g,u,l,"data"),[r,a,g,u,l]),b=T.useMemo(()=>pp(r,a,g,u,l,"assets"),[r,a,g,u,l]),w=T.useMemo(()=>{if(r===l.pathname+l.search+l.hash)return[];let N=new Set,D=!1;if(a.forEach(Y=>{var I;let H=u.routes[Y.route.id];!H||!H.hasLoader||(!y.some(ie=>ie.route.id===Y.route.id)&&Y.route.id in p&&((I=f[Y.route.id])!=null&&I.shouldRevalidate)||H.hasClientLoader?D=!0:N.add(Y.route.id))}),N.size===0)return[];let z=vg(r,m,o.v8_trailingSlashAwareDataRequests,"data");return D&&N.size>0&&z.searchParams.set("_routes",a.filter(Y=>N.has(Y.route.id)).map(Y=>Y.route.id).join(",")),[z.pathname+z.search]},[m,o.v8_trailingSlashAwareDataRequests,p,l,u,y,a,r,f]),_=T.useMemo(()=>Ub(b,u),[b,u]),E=qb(b);return T.createElement(T.Fragment,null,w.map(N=>T.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...i})),_.map(N=>T.createElement("link",{key:N,rel:"modulepreload",href:N,...i})),E.map(({key:N,link:D})=>T.createElement("link",{key:N,nonce:i.nonce,...D,crossOrigin:D.crossOrigin??i.crossOrigin})))}function Yb(...r){return a=>{r.forEach(i=>{typeof i=="function"?i(a):i!=null&&(i.current=a)})}}var Kb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Kb&&(window.__reactRouterVersion="7.18.0")}catch{}function Pb({basename:r,children:a,useTransitions:i,window:l}){let o=T.useRef();o.current==null&&(o.current=jy({window:l,v5Compat:!0}));let u=o.current,[f,m]=T.useState({action:u.action,location:u.location}),p=T.useCallback(g=>{i===!1?m(g):T.startTransition(()=>m(g))},[i]);return T.useLayoutEffect(()=>u.listen(p),[u,p]),T.createElement(wb,{basename:r,children:a,location:f.location,navigationType:f.action,navigator:u,useTransitions:i})}var Pu=T.forwardRef(function({onClick:a,discover:i="render",prefetch:l="none",relative:o,reloadDocument:u,replace:f,mask:m,state:p,target:g,to:y,preventScrollReset:b,viewTransition:w,defaultShouldRevalidate:_,...E},N){let{basename:D,navigator:z,useTransitions:Y}=T.useContext(Rt),H=typeof y=="string"&&Bu.test(y),I=lg(y,D);y=I.to;let ie=ib(y,{relative:o}),ee=Ot(),X=null;if(m){let ze=Dl(m,[],ee.mask?ee.mask.pathname:"/",!0);D!=="/"&&(ze.pathname=ze.pathname==="/"?D:Wt([D,ze.pathname])),X=z.createHref(ze)}let[Ae,_e,zt]=Hb(l,E),ct=Fb(y,{replace:f,mask:m,state:p,target:g,preventScrollReset:b,relative:o,viewTransition:w,defaultShouldRevalidate:_,useTransitions:Y});function Je(ze){a&&a(ze),ze.defaultPrevented||ct(ze)}let bt=!(I.isExternal||u),ut=T.createElement("a",{...E,...zt,href:(bt?X:void 0)||I.absoluteURL||ie,onClick:bt?Je:a,ref:Yb(N,_e),target:g,"data-discover":!H&&i==="render"?"true":void 0});return Ae&&!H?T.createElement(T.Fragment,null,ut,T.createElement($b,{page:ie})):ut});Pu.displayName="Link";var Ib=T.forwardRef(function({"aria-current":a="page",caseSensitive:i=!1,className:l="",end:o=!1,style:u,to:f,viewTransition:m,children:p,...g},y){let b=Ii(f,{relative:g.relative}),w=Ot(),_=T.useContext(Ll),{navigator:E,basename:N}=T.useContext(Rt),D=_!=null&&tx(b)&&m===!0,z=E.encodeLocation?E.encodeLocation(b).pathname:b.pathname,Y=w.pathname,H=_&&_.navigation&&_.navigation.location?_.navigation.location.pathname:null;i||(Y=Y.toLowerCase(),H=H?H.toLowerCase():null,z=z.toLowerCase()),H&&N&&(H=Oa(H,N)||H);const I=z!=="/"&&z.endsWith("/")?z.length-1:z.length;let ie=Y===z||!o&&Y.startsWith(z)&&Y.charAt(I)==="/",ee=H!=null&&(H===z||!o&&H.startsWith(z)&&H.charAt(z.length)==="/"),X={isActive:ie,isPending:ee,isTransitioning:D},Ae=ie?a:void 0,_e;typeof l=="function"?_e=l(X):_e=[l,ie?"active":null,ee?"pending":null,D?"transitioning":null].filter(Boolean).join(" ");let zt=typeof u=="function"?u(X):u;return T.createElement(Pu,{...g,"aria-current":Ae,className:_e,ref:y,style:zt,to:f,viewTransition:m},typeof p=="function"?p(X):p)});Ib.displayName="NavLink";var Xb=T.forwardRef(({discover:r="render",fetcherKey:a,navigate:i,reloadDocument:l,replace:o,state:u,method:f=_l,action:m,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:b,defaultShouldRevalidate:w,..._},E)=>{let{useTransitions:N}=T.useContext(Rt),D=Zb(),z=ex(m,{relative:g}),Y=f.toLowerCase()==="get"?"get":"post",H=typeof m=="string"&&Bu.test(m),I=ie=>{if(p&&p(ie),ie.defaultPrevented)return;ie.preventDefault();let ee=ie.nativeEvent.submitter,X=(ee==null?void 0:ee.getAttribute("formmethod"))||f,Ae=()=>D(ee||ie.currentTarget,{fetcherKey:a,method:X,navigate:i,replace:o,state:u,relative:g,preventScrollReset:y,viewTransition:b,defaultShouldRevalidate:w});N&&i!==!1?T.startTransition(()=>Ae()):Ae()};return T.createElement("form",{ref:E,method:Y,action:z,onSubmit:l?p:I,..._,"data-discover":!H&&r==="render"?"true":void 0})});Xb.displayName="Form";function Jb(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function yg(r){let a=T.useContext(Ar);return Oe(a,Jb(r)),a}function Fb(r,{target:a,replace:i,mask:l,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p,useTransitions:g}={}){let y=Cr(),b=Ot(),w=Ii(r,{relative:f});return T.useCallback(_=>{if(Tb(_,a)){_.preventDefault();let E=i!==void 0?i:Bi(b)===Bi(w),N=()=>y(r,{replace:E,mask:l,state:o,preventScrollReset:u,relative:f,viewTransition:m,defaultShouldRevalidate:p});g?T.startTransition(()=>N()):N()}},[b,y,w,i,l,o,a,r,u,f,m,p,g])}var Qb=0,Wb=()=>`__${String(++Qb)}__`;function Zb(){let{router:r}=yg("useSubmit"),{basename:a}=T.useContext(Rt),i=gb(),l=r.fetch,o=r.navigate;return T.useCallback(async(u,f={})=>{let{action:m,method:p,encType:g,formData:y,body:b}=Cb(u,a);if(f.navigate===!1){let w=f.fetcherKey||Wb();await l(w,i,f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||p,formEncType:f.encType||g,flushSync:f.flushSync})}else await o(f.action||m,{defaultShouldRevalidate:f.defaultShouldRevalidate,preventScrollReset:f.preventScrollReset,formData:y,body:b,formMethod:f.method||p,formEncType:f.encType||g,replace:f.replace,state:f.state,fromRouteId:i,flushSync:f.flushSync,viewTransition:f.viewTransition})},[l,o,a,i])}function ex(r,{relative:a}={}){let{basename:i}=T.useContext(Rt),l=T.useContext(oa);Oe(l,"useFormAction must be used inside a RouteContext");let[o]=l.matches.slice(-1),u={...Ii(r||".",{relative:a})},f=Ot();if(r==null){u.search=f.search;let m=new URLSearchParams(u.search),p=m.getAll("index");if(p.some(y=>y==="")){m.delete("index"),p.filter(b=>b).forEach(b=>m.append("index",b));let y=m.toString();u.search=y?`?${y}`:""}}return(!r||r===".")&&o.route.index&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(u.pathname=u.pathname==="/"?i:Wt([i,u.pathname])),Bi(u)}function tx(r,{relative:a}={}){let i=T.useContext(ug);Oe(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:l}=yg("useViewTransitionState"),o=Ii(r,{relative:a});if(!i.isTransitioning)return!1;let u=Oa(i.currentLocation.pathname,l)||i.currentLocation.pathname,f=Oa(i.nextLocation.pathname,l)||i.nextLocation.pathname;return kl(o.pathname,f)!=null||kl(o.pathname,u)!=null}function Iu(){const r=Cr(),i=Ot().pathname==="/",[l,o]=T.useState(!1),[u,f]=T.useState(!1);T.useEffect(()=>{const p=()=>o(window.scrollY>40);return window.addEventListener("scroll",p),()=>window.removeEventListener("scroll",p)},[]),T.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(p=>{p.addEventListener("click",function(g){g.preventDefault();const y=document.querySelector(this.getAttribute("href"));y&&y.scrollIntoView({behavior:"smooth"})})})},[]);const m=()=>f(!1);return T.useEffect(()=>(u?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[u]),T.useEffect(()=>{const p=g=>{g.key==="Escape"&&m()};return window.addEventListener("keydown",p),()=>window.removeEventListener("keydown",p)},[]),d.jsxs(d.Fragment,{children:[d.jsxs("nav",{className:l?"scrolled":"",children:[d.jsxs("div",{className:"logo",children:[d.jsx("div",{className:"logo-icon",children:"F"}),d.jsx("h1",{children:"FrameX"})]}),d.jsx("ul",{children:i?d.jsxs(d.Fragment,{children:[d.jsx("li",{children:d.jsx("a",{href:"#features",onClick:m,children:"Features"})}),d.jsx("li",{children:d.jsx("a",{href:"#community",onClick:m,children:"Community"})}),d.jsx("li",{children:d.jsx("a",{href:"#about",onClick:m,children:"About"})}),d.jsx("li",{children:d.jsx("a",{href:"#pricing",onClick:m,children:"Pricing"})})]}):d.jsx("li",{children:d.jsx(Pu,{to:"/",className:"back-home-link",onClick:m,children:"← Back to Home"})})}),d.jsxs("div",{className:"nav-right",children:[i&&d.jsxs("div",{className:"auth-buttons",children:[d.jsx("button",{className:"login",onClick:()=>r("/login"),children:"Log In"}),d.jsx("button",{className:"get-started",onClick:()=>r("/login"),children:"Get Started"})]}),d.jsx("button",{className:"menu-toggle",onClick:()=>f(!u),"aria-label":"Toggle menu",children:d.jsx("i",{className:`menu-toggle-icon ${u?"fas fa-times":"fas fa-bars"}`})})]}),d.jsx("style",{children:`
        nav {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1000;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.8rem 5%;
            background: rgba(8, 8, 15, 0.6);
            backdrop-filter: blur(24px);
            -webkit-backdrop-filter: blur(24px);
            border-bottom: var(--glass-border);
            transition: background 0.3s ease;
        }

        nav.scrolled {
            background: rgba(8, 8, 15, 0.85);
        }

        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .logo-icon {
            width: 32px;
            height: 32px;
            border-radius: 8px;
            background: var(--gradient-accent);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 0.9rem;
            font-weight: 700;
            color: #08080f;
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
            .nav-right .auth-buttons {
                display: none;
            }
            .menu-toggle {
                display: flex;
            }

            /* Drawer backdrop */
            .mobile-backdrop {
                position: fixed;
                inset: 0;
                background: rgba(0, 0, 0, 0.65);
                backdrop-filter: blur(6px);
                -webkit-backdrop-filter: blur(6px);
                z-index: 1001;
                opacity: 0;
                pointer-events: none;
                transition: opacity 0.3s ease;
            }
            .mobile-backdrop.active {
                opacity: 1;
                pointer-events: all;
            }

            /* Drawer panel */
            .mobile-drawer {
                position: fixed;
                top: 0;
                right: 0;
                width: 82%;
                max-width: 380px;
                height: 100vh;
                height: 100dvh;
                background: rgba(10, 10, 22, 0.96);
                backdrop-filter: blur(40px);
                -webkit-backdrop-filter: blur(40px);
                border-left: 1px solid rgba(255, 255, 255, 0.06);
                z-index: 1002;
                transform: translateX(100%);
                transition: transform 0.3s ease-in-out;
                display: flex;
                flex-direction: column;
                padding: 2rem 1.5rem;
                box-shadow: -10px 0 40px rgba(0, 0, 0, 0.3);
            }
            .mobile-drawer.active {
                transform: translateX(0);
            }

            /* Close button */
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
                border: 1px solid rgba(255, 255, 255, 0.06);
                border-radius: 12px;
                color: rgba(255, 255, 255, 0.5);
                font-size: 1.3rem;
                cursor: pointer;
                transition: all 0.3s ease;
                -webkit-tap-highlight-color: transparent;
                user-select: none;
                padding: 0;
            }
            .drawer-close:hover {
                background: rgba(255, 255, 255, 0.1);
                color: #fff;
            }
            .drawer-close:active {
                transform: scale(0.92);
            }

            /* Menu items */
            .drawer-menu-items {
                display: flex;
                flex-direction: column;
                gap: 0.25rem;
                margin-top: 5rem;
            }
            .drawer-menu-items a {
                display: flex;
                align-items: center;
                min-height: 48px;
                padding: 0.75rem 1rem;
                font-size: 1.05rem;
                font-weight: 400;
                color: rgba(255, 255, 255, 0.55);
                text-decoration: none;
                border-radius: 12px;
                transition: all 0.25s ease;
                letter-spacing: 0.02em;
                -webkit-tap-highlight-color: transparent;
            }
            .drawer-menu-items a:hover {
                color: #fff;
                background: rgba(255, 255, 255, 0.04);
            }
            .drawer-menu-items a:active {
                color: #fff;
                background: rgba(255, 255, 255, 0.08);
                transform: scale(0.98);
            }

            /* Accent bar on hover */
            .drawer-menu-items a::before {
                content: '';
                width: 3px;
                height: 0;
                background: var(--color-lemon);
                border-radius: 2px;
                margin-right: 0.75rem;
                transition: height 0.25s ease;
                flex-shrink: 0;
            }
            .drawer-menu-items a:hover::before {
                height: 20px;
            }

            /* CTA button */
            .drawer-cta {
                display: flex;
                align-items: center;
                justify-content: center;
                min-height: 48px;
                margin-top: 2rem;
                padding: 0.75rem 2rem;
                background: var(--color-lemon);
                color: #08080f !important;
                border-radius: 12px;
                font-size: 1.1rem;
                font-weight: 600;
                text-decoration: none;
                transition: all 0.3s ease;
                -webkit-tap-highlight-color: transparent;
            }
            .drawer-cta:hover {
                transform: translateY(-1px);
                box-shadow: 0 4px 24px rgba(204, 255, 0, 0.25);
                background: #d4ff1a;
            }
            .drawer-cta:active {
                transform: scale(0.97);
            }
        }

        @media (max-width: 480px) {
            .signup,
            .get-started {
                display: none;
            }
        }
      `})]}),d.jsx("div",{className:`mobile-backdrop ${u?"active":""}`,onClick:m}),d.jsxs("div",{className:`mobile-drawer ${u?"active":""}`,children:[d.jsx("button",{className:"drawer-close",onClick:m,"aria-label":"Close menu",children:d.jsx("i",{className:"fas fa-times"})}),d.jsxs("div",{className:"drawer-menu-items",children:[d.jsx("a",{href:"#features",onClick:m,children:"Features"}),d.jsx("a",{href:"#community",onClick:m,children:"Community"}),d.jsx("a",{href:"#about",onClick:m,children:"About"}),d.jsx("a",{href:"#pricing",onClick:m,children:"Pricing"}),d.jsx("a",{href:"#get-started",className:"drawer-cta",onClick:m,children:"Get Started"})]})]})]})}function Xu(){return d.jsxs("footer",{children:[d.jsxs("div",{className:"footer-content",children:[d.jsxs("div",{className:"footer-logo",children:[d.jsx("div",{className:"logo-icon",children:"F"}),d.jsx("h2",{children:"FrameX"})]}),d.jsxs("div",{className:"footer-links",children:[d.jsx("a",{href:"#",children:"Privacy Policy"}),d.jsx("a",{href:"/terms",children:"Terms of Service"}),d.jsx("a",{href:"#",children:"Contact Us"})]})]}),d.jsx("div",{className:"footer-divider"}),d.jsx("p",{children:"© 2026 FrameX. All rights reserved."}),d.jsx("style",{children:`
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
      `})]})}function ax(){const[r,a]=T.useState(!1);return T.useEffect(()=>{document.title="FrameX | Share Your World in Frames"},[]),T.useEffect(()=>{const i=document.querySelectorAll(".reveal"),l=new IntersectionObserver(p=>{p.forEach(g=>{g.isIntersecting&&(g.target.classList.add("visible"),l.unobserve(g.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});i.forEach(p=>l.observe(p)),document.querySelectorAll(".feature-card").forEach(p=>{p.addEventListener("mousemove",g=>{const y=p.getBoundingClientRect(),b=(g.clientX-y.left)/y.width*100,w=(g.clientY-y.top)/y.height*100;p.style.setProperty("--mouse-x",b+"%"),p.style.setProperty("--mouse-y",w+"%")})});const u=document.querySelectorAll(".hero-stat"),f=p=>{const g=(p.clientX/window.innerWidth-.5)*6,y=(p.clientY/window.innerHeight-.5)*6;u.forEach((b,w)=>{const _=w===0?1:-.8;b.style.transform=`translate(${g*_}px, ${y*_}px)`})};window.addEventListener("mousemove",f);const m=document.querySelector(".hero-media");if(m){const p=new IntersectionObserver(([g])=>{g.isIntersecting&&(g.target.classList.add("card-entered"),p.unobserve(g.target))},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return p.observe(m),()=>{l.disconnect(),window.removeEventListener("mousemove",f),p.disconnect()}}return()=>{l.disconnect(),window.removeEventListener("mousemove",f)}},[]),d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"aurora-bg"}),d.jsx(Iu,{}),d.jsxs("section",{className:"hero",id:"hero",children:[d.jsxs("div",{className:"hero-content",children:[d.jsxs("div",{className:"hero-badge",children:[d.jsx("span",{children:"New"}),"Now available on iOS & Android"]}),d.jsxs("h1",{children:["Share Your World",d.jsx("br",{}),"in ",d.jsx("span",{className:"gradient-text",children:"Every Frame"})]}),d.jsx("p",{children:"Discover, create, and connect with short videos and photos. Join millions of creators sharing their stories through the lens."}),d.jsxs("div",{className:"cta-buttons",children:[d.jsxs("a",{href:"#get-started",className:"btn-primary",children:["Get Started ",d.jsx("i",{className:"fas fa-arrow-right"})]}),d.jsxs("a",{href:"#download",className:"btn-secondary",children:[d.jsx("i",{className:"fas fa-mobile-alt"})," Download App"]}),d.jsxs("a",{href:"#community",className:"btn-secondary",children:[d.jsx("i",{className:"fas fa-play"})," Explore Community"]})]})]}),d.jsxs("div",{className:"hero-media",children:[d.jsxs("div",{className:"glass-card-stack",children:[d.jsxs("div",{className:"glass-card",children:[d.jsx("div",{className:"glass-card-decoration"}),d.jsx("div",{className:"glass-card-icon",children:d.jsx("i",{className:"fas fa-video"})}),d.jsx("h3",{children:"Short Videos"}),d.jsx("p",{children:"Create and watch short, engaging videos"})]}),d.jsxs("div",{className:"glass-card",children:[d.jsx("div",{className:"glass-card-decoration glass-card-decoration--2"}),d.jsx("div",{className:"glass-card-icon",children:d.jsx("i",{className:"fas fa-camera"})}),d.jsx("h3",{children:"Photo Sharing"}),d.jsx("p",{children:"Share moments with high-quality photos"})]}),d.jsxs("div",{className:"glass-card",children:[d.jsx("div",{className:"glass-card-icon",children:d.jsx("i",{className:"fas fa-users"})}),d.jsx("h3",{children:"Community"}),d.jsx("p",{children:"Connect with creators worldwide"})]})]}),d.jsxs("div",{className:"hero-stat hero-stat--1",children:[d.jsx("strong",{children:"10M+"}),d.jsx("span",{children:"Active Users"})]}),d.jsxs("div",{className:"hero-stat hero-stat--2",children:[d.jsx("strong",{children:"4.8★"}),d.jsx("span",{children:"App Rating"})]})]})]}),d.jsxs("section",{id:"features",className:"features",children:[d.jsxs("div",{className:"features-header reveal",children:[d.jsx("span",{className:"section-label",children:"Features"}),d.jsx("h2",{children:"Built for Creators"}),d.jsx("p",{children:"Everything you need to capture, edit, and share your perspective with the world."})]}),d.jsx("div",{className:"feature-cards",children:[{icon:"fa-video",title:"Short Videos",desc:"Create and watch short, engaging videos on any topic. Our smart editor makes it effortless."},{icon:"fa-camera",title:"Photo Sharing",desc:"Share moments with high-quality photos and professional-grade filters built right in."},{icon:"fa-users",title:"Community",desc:"Connect with creators and friends from around the world. Your audience is waiting."}].map((i,l)=>d.jsxs("div",{className:`feature-card reveal reveal-delay-${l+1}`,children:[d.jsx("div",{className:"feature-icon",children:d.jsx("i",{className:`fas ${i.icon}`})}),d.jsx("h3",{children:i.title}),d.jsx("p",{children:i.desc})]},i.title))})]}),!r&&d.jsx("div",{className:"browser-bar",children:d.jsxs("div",{className:"browser-bar-content",children:[d.jsxs("div",{className:"browser-bar-text",children:[d.jsx("span",{className:"browser-bar-icon",children:d.jsx("i",{className:"fas fa-mobile-alt"})}),d.jsx("span",{children:"Continue in browser for the full experience"})]}),d.jsxs("button",{className:"browser-bar-btn",children:["Continue ",d.jsx("i",{className:"fas fa-arrow-right"})]}),d.jsx("button",{className:"browser-bar-close",onClick:()=>a(!0),"aria-label":"Dismiss",children:d.jsx("i",{className:"fas fa-times"})})]})}),d.jsxs("section",{id:"community",className:"community",children:[d.jsx("h2",{className:"reveal",children:"Join Our Community"}),d.jsx("p",{className:"reveal reveal-delay-1",children:"Follow us on social media and be part of the FrameX movement."}),d.jsx("div",{className:"social-links reveal reveal-delay-2",children:["instagram","twitter","tiktok","facebook","youtube"].map(i=>d.jsx("a",{href:"#",className:"social-link","aria-label":i.charAt(0).toUpperCase()+i.slice(1),children:d.jsx("i",{className:`fab fa-${i}`})},i))})]}),d.jsx("section",{id:"download",className:"download",children:d.jsxs("div",{className:"download-glass reveal",children:[d.jsx("span",{className:"section-label",children:"Get the App"}),d.jsx("h2",{children:"Download FrameX Now"}),d.jsx("p",{children:"Available on iOS and Android. Start sharing your story today."}),d.jsxs("div",{className:"download-buttons",children:[d.jsxs("a",{href:"#",className:"app-store",children:[d.jsx("i",{className:"fab fa-apple fa-lg"})," App Store"]}),d.jsxs("a",{href:"#",className:"google-play",children:[d.jsx("i",{className:"fab fa-google-play fa-lg"})," Google Play"]})]})]})}),d.jsx(Xu,{}),d.jsx("style",{children:`
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
      `})]})}function nx(){T.useEffect(()=>{const i=new IntersectionObserver(l=>{l.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(l=>i.observe(l)),()=>i.disconnect()},[]);const r=[{name:"Alex Chen",role:"CEO & Founder",icon:"fa-user-tie"},{name:"Sarah Mitchell",role:"CTO",icon:"fa-laptop-code"},{name:"David Park",role:"Head of Design",icon:"fa-paint-brush"},{name:"Emily Rodriguez",role:"VP of Engineering",icon:"fa-cogs"}],a=[{icon:"fa-bolt",title:"Lightning Fast",desc:"Optimized for speed with sub-second response times across all platforms."},{icon:"fa-shield-alt",title:"Secure by Design",desc:"End-to-end encryption with enterprise-grade security protocols."},{icon:"fa-layer-group",title:"Modular Architecture",desc:"Plugin-based system that grows with your creative workflow."},{icon:"fa-robot",title:"AI-Powered",desc:"Intelligent suggestions and automation that learn from your style."}];return d.jsxs(d.Fragment,{children:[d.jsx(Iu,{}),d.jsx("div",{className:"aurora-bg"}),d.jsxs("main",{className:"about-page",children:[d.jsxs("section",{className:"about-hero",children:[d.jsx("div",{className:"about-hero-bg-glow"}),d.jsxs("div",{className:"about-hero-content",children:[d.jsx("span",{className:"section-label reveal",children:"About FrameX"}),d.jsxs("h1",{className:"about-hero-title reveal reveal-delay-1",children:["Redefining ",d.jsx("span",{className:"lemon-text",children:"Creative"})," Boundaries"]}),d.jsx("p",{className:"about-hero-sub reveal reveal-delay-2",children:"We believe great design should be effortless. FrameX brings together cutting-edge AI, real-time collaboration, and intuitive tools to empower creators worldwide."}),d.jsxs("div",{className:"about-hero-stats reveal reveal-delay-3",children:[d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"stat-number",children:"50K+"}),d.jsx("span",{className:"stat-label",children:"Active Users"})]}),d.jsx("div",{className:"stat-divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"stat-number",children:"99.9%"}),d.jsx("span",{className:"stat-label",children:"Uptime"})]}),d.jsx("div",{className:"stat-divider"}),d.jsxs("div",{className:"stat-item",children:[d.jsx("span",{className:"stat-number",children:"120+"}),d.jsx("span",{className:"stat-label",children:"Countries"})]})]})]})]}),d.jsx("section",{className:"about-section",id:"our-story",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Our Story"}),d.jsx("h2",{className:"section-title reveal",children:"How FrameX Began"}),d.jsxs("div",{className:"story-card glass reveal reveal-delay-1",children:[d.jsx("div",{className:"story-icon",children:d.jsx("i",{className:"fas fa-quote-left"})}),d.jsx("p",{className:"story-text",children:"FrameX was born in 2023 from a simple observation: creative tools were either powerful but complex, or simple but limiting. Our founders—engineers, designers, and artists—set out to build something different: a platform that combines professional-grade capabilities with an intuitive, joyful experience."}),d.jsx("p",{className:"story-text",children:"What started as a small project in a co-working space has grown into a global community of creators. Today, FrameX powers workflows for freelance designers, creative agencies, and enterprise teams across 120+ countries."}),d.jsxs("div",{className:"story-meta",children:[d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-calendar"})," Founded 2023"]}),d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-users"})," Team of 48"]}),d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-globe"})," Global Reach"]})]})]})]})}),d.jsx("section",{className:"about-section",id:"mission-vision",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Mission & Vision"}),d.jsx("h2",{className:"section-title reveal",children:"What Drives Us"}),d.jsxs("div",{className:"mv-grid",children:[d.jsxs("div",{className:"mv-card glass reveal reveal-delay-1",children:[d.jsx("div",{className:"mv-icon",children:d.jsx("i",{className:"fas fa-bullseye"})}),d.jsx("h3",{children:"Our Mission"}),d.jsx("p",{children:"To democratize creative technology by building tools that are powerful enough for professionals yet accessible enough for beginners. We remove barriers, not features."})]}),d.jsxs("div",{className:"mv-card glass reveal reveal-delay-2",children:[d.jsx("div",{className:"mv-icon",children:d.jsx("i",{className:"fas fa-eye"})}),d.jsx("h3",{children:"Our Vision"}),d.jsx("p",{children:"A world where anyone can bring their creative vision to life without wrestling with software. We envision FrameX as the invisible bridge between imagination and creation."})]})]})]})}),d.jsx("section",{className:"about-section",id:"what-makes-us-different",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Why FrameX"}),d.jsx("h2",{className:"section-title reveal",children:"What Makes Us Different"}),d.jsx("div",{className:"features-grid",children:a.map((i,l)=>d.jsxs("div",{className:`feature-card glass reveal reveal-delay-${l+1}`,children:[d.jsx("div",{className:"feature-card-icon",children:d.jsx("i",{className:`fas ${i.icon}`})}),d.jsx("h3",{children:i.title}),d.jsx("p",{children:i.desc})]},i.title))})]})}),d.jsx("section",{className:"about-section",id:"team",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Leadership"}),d.jsx("h2",{className:"section-title reveal",children:"Meet the Team"}),d.jsx("div",{className:"team-grid",children:r.map((i,l)=>d.jsxs("div",{className:`team-card glass reveal reveal-delay-${l+1}`,children:[d.jsx("div",{className:"team-avatar",children:d.jsx("i",{className:`fas ${i.icon}`})}),d.jsx("h3",{children:i.name}),d.jsx("p",{className:"team-role",children:i.role})]},i.name))})]})}),d.jsx("section",{className:"about-section",id:"info",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Snapshot"}),d.jsx("h2",{className:"section-title reveal",children:"Startup at a Glance"}),d.jsx("div",{className:"info-card glass reveal reveal-delay-1",children:d.jsxs("div",{className:"info-grid",children:[d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-calendar-alt"}),d.jsx("span",{className:"info-label",children:"Founded"}),d.jsx("span",{className:"info-value",children:"2023"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-map-pin"}),d.jsx("span",{className:"info-label",children:"Headquarters"}),d.jsx("span",{className:"info-value",children:"San Francisco, CA"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-user-friends"}),d.jsx("span",{className:"info-label",children:"Team Size"}),d.jsx("span",{className:"info-value",children:"48 Members"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-trophy"}),d.jsx("span",{className:"info-label",children:"Funding"}),d.jsx("span",{className:"info-value",children:"Series A"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-rocket"}),d.jsx("span",{className:"info-label",children:"Stage"}),d.jsx("span",{className:"info-value",children:"Growth"})]}),d.jsxs("div",{className:"info-item",children:[d.jsx("i",{className:"fas fa-handshake"}),d.jsx("span",{className:"info-label",children:"Partners"}),d.jsx("span",{className:"info-value",children:"20+"})]})]})})]})}),d.jsx("section",{className:"about-section",id:"contact",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Contact"}),d.jsx("h2",{className:"section-title reveal",children:"Get In Touch"}),d.jsxs("div",{className:"contact-content glass reveal reveal-delay-1",children:[d.jsx("p",{className:"contact-text",children:"Have a question, partnership idea, or just want to say hello? We'd love to hear from you."}),d.jsxs("div",{className:"contact-links",children:[d.jsxs("a",{href:"mailto:hello@framex.com",className:"contact-link",children:[d.jsx("i",{className:"fas fa-envelope"})," hello@framex.com"]}),d.jsxs("a",{href:"tel:+1234567890",className:"contact-link",children:[d.jsx("i",{className:"fas fa-phone"})," +1 (234) 567-890"]}),d.jsxs("a",{href:"#",className:"contact-link",children:[d.jsx("i",{className:"fas fa-map-marker-alt"})," San Francisco, CA"]})]})]})]})}),d.jsx("section",{className:"about-section",id:"social",children:d.jsxs("div",{className:"about-container",children:[d.jsx("span",{className:"section-label reveal",children:"Community"}),d.jsx("h2",{className:"section-title reveal",children:"Follow Our Journey"}),d.jsxs("div",{className:"social-grid reveal reveal-delay-1",children:[d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-twitter"})," Twitter / X"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-github"})," GitHub"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-linkedin-in"})," LinkedIn"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-discord"})," Discord"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-youtube"})," YouTube"]}),d.jsxs("a",{href:"#",className:"social-link glass",children:[d.jsx("i",{className:"fab fa-instagram"})," Instagram"]})]})]})})]}),d.jsx(Xu,{}),d.jsx("style",{children:`
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
      `})]})}function Hl(r,a){var i={};for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&a.indexOf(l)<0&&(i[l]=r[l]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,l=Object.getOwnPropertySymbols(r);o<l.length;o++)a.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(r,l[o])&&(i[l[o]]=r[l[o]]);return i}function rx(r,a,i,l){function o(u){return u instanceof i?u:new i(function(f){f(u)})}return new(i||(i=Promise))(function(u,f){function m(y){try{g(l.next(y))}catch(b){f(b)}}function p(y){try{g(l.throw(y))}catch(b){f(b)}}function g(y){y.done?u(y.value):o(y.value).then(m,p)}g((l=l.apply(r,a||[])).next())})}const ix=r=>r?(...a)=>r(...a):(...a)=>fetch(...a);class Ju extends Error{constructor(a,i="FunctionsError",l){super(a),this.name=i,this.context=l}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class sx extends Ju{constructor(a){super("Failed to send a request to the Edge Function","FunctionsFetchError",a)}}class gp extends Ju{constructor(a){super("Relay Error invoking the Edge Function","FunctionsRelayError",a)}}class vp extends Ju{constructor(a){super("Edge Function returned a non-2xx status code","FunctionsHttpError",a)}}var Eu;(function(r){r.Any="any",r.ApNortheast1="ap-northeast-1",r.ApNortheast2="ap-northeast-2",r.ApSouth1="ap-south-1",r.ApSoutheast1="ap-southeast-1",r.ApSoutheast2="ap-southeast-2",r.CaCentral1="ca-central-1",r.EuCentral1="eu-central-1",r.EuWest1="eu-west-1",r.EuWest2="eu-west-2",r.EuWest3="eu-west-3",r.SaEast1="sa-east-1",r.UsEast1="us-east-1",r.UsWest1="us-west-1",r.UsWest2="us-west-2"})(Eu||(Eu={}));class lx{constructor(a,{headers:i={},customFetch:l,region:o=Eu.Any}={}){this.url=a,this.headers=i,this.region=o,this.fetch=ix(l)}setAuth(a){this.headers.Authorization=`Bearer ${a}`}invoke(a){return rx(this,arguments,void 0,function*(i,l={}){var o;let u,f;try{const{headers:m,method:p,body:g,signal:y,timeout:b}=l;let w={},{region:_}=l;_||(_=this.region);const E=new URL(`${this.url}/${i}`);_&&_!=="any"&&(w["x-region"]=_,E.searchParams.set("forceFunctionRegion",_));let N;g&&(m&&!Object.prototype.hasOwnProperty.call(m,"Content-Type")||!m)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(w["Content-Type"]="application/octet-stream",N=g):typeof g=="string"?(w["Content-Type"]="text/plain",N=g):typeof FormData<"u"&&g instanceof FormData?N=g:(w["Content-Type"]="application/json",N=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?N=JSON.stringify(g):N=g;let D=y;b&&(f=new AbortController,u=setTimeout(()=>f.abort(),b),y?(D=f.signal,y.addEventListener("abort",()=>f.abort())):D=f.signal);const z=yield this.fetch(E.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},w),this.headers),m),body:N,signal:D}).catch(ie=>{throw new sx(ie)}),Y=z.headers.get("x-relay-error");if(Y&&Y==="true")throw new gp(z);if(!z.ok)throw new vp(z);let H=((o=z.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),I;return H==="application/json"?I=yield z.json():H==="application/octet-stream"||H==="application/pdf"?I=yield z.blob():H==="text/event-stream"?I=z:H==="multipart/form-data"?I=yield z.formData():I=yield z.text(),{data:I,error:null,response:z}}catch(m){return{data:null,error:m,response:m instanceof vp||m instanceof gp?m.context:void 0}}finally{u&&clearTimeout(u)}})}}const bg=3,yp=r=>Math.min(1e3*2**r,3e4),ox=[520,503],xg=["GET","HEAD","OPTIONS"];var bp=class extends Error{constructor(r){super(r.message),this.name="PostgrestError",this.details=r.details,this.hint=r.hint,this.code=r.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function xp(r,a){return new Promise(i=>{if(a!=null&&a.aborted){i();return}const l=setTimeout(()=>{a==null||a.removeEventListener("abort",o),i()},r);function o(){clearTimeout(l),i()}a==null||a.addEventListener("abort",o)})}function cx(r,a,i,l){return!(!l||i>=bg||!xg.includes(r)||!ox.includes(a))}var ux=class{constructor(r){var a,i,l,o,u;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=r.method,this.url=r.url,this.headers=new Headers(r.headers),this.schema=r.schema,this.body=r.body,this.shouldThrowOnError=(a=r.shouldThrowOnError)!==null&&a!==void 0?a:!1,this.signal=r.signal,this.isMaybeSingle=(i=r.isMaybeSingle)!==null&&i!==void 0?i:!1,this.shouldStripNulls=(l=r.shouldStripNulls)!==null&&l!==void 0?l:!1,this.urlLengthLimit=(o=r.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(u=r.retry)!==null&&u!==void 0?u:!0,r.fetch?this.fetch=r.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(r,a){return this.headers=new Headers(this.headers),this.headers.set(r,a),this}retry(r){return this.retryEnabled=r,this}then(r,a){var i=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const f=this.headers.get("Accept");f==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!f||f==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const l=this.fetch;let u=(async()=>{let f=0;for(;;){const g={};i.headers.forEach((b,w)=>{g[w]=b}),f>0&&(g["X-Retry-Count"]=String(f));let y;try{y=await l(i.url.toString(),{method:i.method,headers:g,body:JSON.stringify(i.body,(b,w)=>typeof w=="bigint"?w.toString():w),signal:i.signal})}catch(b){if((b==null?void 0:b.name)==="AbortError"||(b==null?void 0:b.code)==="ABORT_ERR"||!xg.includes(i.method))throw b;if(i.retryEnabled&&f<bg){const w=yp(f);f++,await xp(w,i.signal);continue}throw b}if(cx(i.method,y.status,f,i.retryEnabled)){var m,p;const b=(m=(p=y.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&m!==void 0?m:null,w=b!==null?Math.max(0,parseInt(b,10)||0)*1e3:yp(f);await y.text(),f++,await xp(w,i.signal);continue}return await i.processResponse(y)}})();return this.shouldThrowOnError||(u=u.catch(f=>{var m;let p="",g="",y="";const b=f==null?void 0:f.cause;if(b){var w,_,E,N;const Y=(w=b==null?void 0:b.message)!==null&&w!==void 0?w:"",H=(_=b==null?void 0:b.code)!==null&&_!==void 0?_:"";p=`${(E=f==null?void 0:f.name)!==null&&E!==void 0?E:"FetchError"}: ${f==null?void 0:f.message}`,p+=`

Caused by: ${(N=b==null?void 0:b.name)!==null&&N!==void 0?N:"Error"}: ${Y}`,H&&(p+=` (${H})`),b!=null&&b.stack&&(p+=`
${b.stack}`)}else{var D;p=(D=f==null?void 0:f.stack)!==null&&D!==void 0?D:""}const z=this.url.toString().length;return(f==null?void 0:f.name)==="AbortError"||(f==null?void 0:f.code)==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",z>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${z} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((b==null?void 0:b.name)==="HeadersOverflowError"||(b==null?void 0:b.code)==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",z>this.urlLengthLimit&&(g+=`. Your request URL is ${z} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(m=f==null?void 0:f.name)!==null&&m!==void 0?m:"FetchError"}: ${f==null?void 0:f.message}`,details:p,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),u.then(r,a)}async processResponse(r){var a=this;let i=null,l=null,o=null,u=r.status,f=r.statusText;if(r.ok){var m,p;if(a.method!=="HEAD"){var g;const w=await r.text();if(w!=="")if(a.headers.get("Accept")==="text/csv")l=w;else if(a.headers.get("Accept")&&(!((g=a.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))l=w;else try{l=JSON.parse(w)}catch{if(i={message:w},l=null,a.shouldThrowOnError)throw new bp({message:w,details:"",hint:"",code:""})}}const y=(m=a.headers.get("Prefer"))===null||m===void 0?void 0:m.match(/count=(exact|planned|estimated)/),b=(p=r.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");y&&b&&b.length>1&&(o=parseInt(b[1])),a.isMaybeSingle&&Array.isArray(l)&&(l.length>1?(i={code:"PGRST116",details:`Results contain ${l.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},l=null,o=null,u=406,f="Not Acceptable"):l.length===1?l=l[0]:l=null)}else{const y=await r.text();try{i=JSON.parse(y),Array.isArray(i)&&r.status===404&&(l=[],i=null,u=200,f="OK")}catch{r.status===404&&y===""?(u=204,f="No Content"):i={message:y}}if(i&&a.shouldThrowOnError)throw new bp(i)}return{success:i===null,error:i,data:l,count:o,status:u,statusText:f}}returns(){return this}overrideTypes(){return this}},dx=class extends ux{throwOnError(){return super.throwOnError()}select(r){let a=!1;const i=(r??"*").split("").map(l=>/\s/.test(l)&&!a?"":(l==='"'&&(a=!a),l)).join("");return this.url.searchParams.set("select",i),this.headers.append("Prefer","return=representation"),this}order(r,{ascending:a=!0,nullsFirst:i,foreignTable:l,referencedTable:o=l}={}){const u=o?`${o}.order`:"order",f=this.url.searchParams.get(u);return this.url.searchParams.set(u,`${f?`${f},`:""}${r}.${a?"asc":"desc"}${i===void 0?"":i?".nullsfirst":".nullslast"}`),this}limit(r,{foreignTable:a,referencedTable:i=a}={}){const l=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(l,`${r}`),this}range(r,a,{foreignTable:i,referencedTable:l=i}={}){const o=typeof l>"u"?"offset":`${l}.offset`,u=typeof l>"u"?"limit":`${l}.limit`;return this.url.searchParams.set(o,`${r}`),this.url.searchParams.set(u,`${a-r+1}`),this}abortSignal(r){return this.signal=r,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:r=!1,verbose:a=!1,settings:i=!1,buffers:l=!1,wal:o=!1,format:u="text"}={}){var f;const m=[r?"analyze":null,a?"verbose":null,i?"settings":null,l?"buffers":null,o?"wal":null].filter(Boolean).join("|"),p=(f=this.headers.get("Accept"))!==null&&f!==void 0?f:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${u}; for="${p}"; options=${m};`),u==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(r){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${r}`),this}};const wp=new RegExp("[,()]");var _r=class extends dx{throwOnError(){return super.throwOnError()}eq(r,a){return this.url.searchParams.append(r,`eq.${a}`),this}neq(r,a){return this.url.searchParams.append(r,`neq.${a}`),this}gt(r,a){return this.url.searchParams.append(r,`gt.${a}`),this}gte(r,a){return this.url.searchParams.append(r,`gte.${a}`),this}lt(r,a){return this.url.searchParams.append(r,`lt.${a}`),this}lte(r,a){return this.url.searchParams.append(r,`lte.${a}`),this}like(r,a){return this.url.searchParams.append(r,`like.${a}`),this}likeAllOf(r,a){return this.url.searchParams.append(r,`like(all).{${a.join(",")}}`),this}likeAnyOf(r,a){return this.url.searchParams.append(r,`like(any).{${a.join(",")}}`),this}ilike(r,a){return this.url.searchParams.append(r,`ilike.${a}`),this}ilikeAllOf(r,a){return this.url.searchParams.append(r,`ilike(all).{${a.join(",")}}`),this}ilikeAnyOf(r,a){return this.url.searchParams.append(r,`ilike(any).{${a.join(",")}}`),this}regexMatch(r,a){return this.url.searchParams.append(r,`match.${a}`),this}regexIMatch(r,a){return this.url.searchParams.append(r,`imatch.${a}`),this}is(r,a){return this.url.searchParams.append(r,`is.${a}`),this}isDistinct(r,a){return this.url.searchParams.append(r,`isdistinct.${a}`),this}in(r,a){const i=Array.from(new Set(a)).map(l=>typeof l=="string"&&wp.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(r,`in.(${i})`),this}notIn(r,a){const i=Array.from(new Set(a)).map(l=>typeof l=="string"&&wp.test(l)?`"${l}"`:`${l}`).join(",");return this.url.searchParams.append(r,`not.in.(${i})`),this}contains(r,a){return typeof a=="string"?this.url.searchParams.append(r,`cs.${a}`):Array.isArray(a)?this.url.searchParams.append(r,`cs.{${a.join(",")}}`):this.url.searchParams.append(r,`cs.${JSON.stringify(a)}`),this}containedBy(r,a){return typeof a=="string"?this.url.searchParams.append(r,`cd.${a}`):Array.isArray(a)?this.url.searchParams.append(r,`cd.{${a.join(",")}}`):this.url.searchParams.append(r,`cd.${JSON.stringify(a)}`),this}rangeGt(r,a){return this.url.searchParams.append(r,`sr.${a}`),this}rangeGte(r,a){return this.url.searchParams.append(r,`nxl.${a}`),this}rangeLt(r,a){return this.url.searchParams.append(r,`sl.${a}`),this}rangeLte(r,a){return this.url.searchParams.append(r,`nxr.${a}`),this}rangeAdjacent(r,a){return this.url.searchParams.append(r,`adj.${a}`),this}overlaps(r,a){return typeof a=="string"?this.url.searchParams.append(r,`ov.${a}`):this.url.searchParams.append(r,`ov.{${a.join(",")}}`),this}textSearch(r,a,{config:i,type:l}={}){let o="";l==="plain"?o="pl":l==="phrase"?o="ph":l==="websearch"&&(o="w");const u=i===void 0?"":`(${i})`;return this.url.searchParams.append(r,`${o}fts${u}.${a}`),this}match(r){return Object.entries(r).filter(([a,i])=>i!==void 0).forEach(([a,i])=>{this.url.searchParams.append(a,`eq.${i}`)}),this}not(r,a,i){return this.url.searchParams.append(r,`not.${a}.${i}`),this}or(r,{foreignTable:a,referencedTable:i=a}={}){const l=i?`${i}.or`:"or";return this.url.searchParams.append(l,`(${r})`),this}filter(r,a,i){return this.url.searchParams.append(r,`${a}.${i}`),this}},hx=class{constructor(r,{headers:a={},schema:i,fetch:l,urlLengthLimit:o=8e3,retry:u}){this.url=r,this.headers=new Headers(a),this.schema=i,this.fetch=l,this.urlLengthLimit=o,this.retry=u}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(r,a){const{head:i=!1,count:l}=a??{},o=i?"HEAD":"GET";let u=!1;const f=(r??"*").split("").map(g=>/\s/.test(g)&&!u?"":(g==='"'&&(u=!u),g)).join(""),{url:m,headers:p}=this.cloneRequestState();return m.searchParams.set("select",f),l&&p.append("Prefer",`count=${l}`),new _r({method:o,url:m,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(r,{count:a,defaultToNull:i=!0}={}){var l;const o="POST",{url:u,headers:f}=this.cloneRequestState();if(a&&f.append("Prefer",`count=${a}`),i||f.append("Prefer","missing=default"),Array.isArray(r)){const m=r.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(m.length>0){const p=[...new Set(m)].map(g=>`"${g}"`);u.searchParams.set("columns",p.join(","))}}return new _r({method:o,url:u,headers:f,schema:this.schema,body:r,fetch:(l=this.fetch)!==null&&l!==void 0?l:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(r,{onConflict:a,ignoreDuplicates:i=!1,count:l,defaultToNull:o=!0}={}){var u;const f="POST",{url:m,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${i?"ignore":"merge"}-duplicates`),a!==void 0&&m.searchParams.set("on_conflict",a),l&&p.append("Prefer",`count=${l}`),o||p.append("Prefer","missing=default"),Array.isArray(r)){const g=r.reduce((y,b)=>y.concat(Object.keys(b)),[]);if(g.length>0){const y=[...new Set(g)].map(b=>`"${b}"`);m.searchParams.set("columns",y.join(","))}}return new _r({method:f,url:m,headers:p,schema:this.schema,body:r,fetch:(u=this.fetch)!==null&&u!==void 0?u:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(r,{count:a}={}){var i;const l="PATCH",{url:o,headers:u}=this.cloneRequestState();return a&&u.append("Prefer",`count=${a}`),new _r({method:l,url:o,headers:u,schema:this.schema,body:r,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:r}={}){var a;const i="DELETE",{url:l,headers:o}=this.cloneRequestState();return r&&o.append("Prefer",`count=${r}`),new _r({method:i,url:l,headers:o,schema:this.schema,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Hi(r){"@babel/helpers - typeof";return Hi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Hi(r)}function fx(r,a){if(Hi(r)!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var l=i.call(r,a);if(Hi(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function mx(r){var a=fx(r,"string");return Hi(a)=="symbol"?a:a+""}function px(r,a,i){return(a=mx(a))in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,r}function _p(r,a){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);a&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),i.push.apply(i,l)}return i}function ml(r){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?_p(Object(i),!0).forEach(function(l){px(r,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):_p(Object(i)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(i,l))})}return r}var gx=class wg{constructor(a,{headers:i={},schema:l,fetch:o,timeout:u,urlLengthLimit:f=8e3,retry:m}={}){this.url=a,this.headers=new Headers(i),this.schemaName=l,this.urlLengthLimit=f;const p=o??globalThis.fetch;u!==void 0&&u>0?this.fetch=(g,y)=>{const b=new AbortController,w=setTimeout(()=>b.abort(),u),_=y==null?void 0:y.signal;if(_){if(_.aborted)return clearTimeout(w),p(g,y);const E=()=>{clearTimeout(w),b.abort()};return _.addEventListener("abort",E,{once:!0}),p(g,ml(ml({},y),{},{signal:b.signal})).finally(()=>{clearTimeout(w),_.removeEventListener("abort",E)})}return p(g,ml(ml({},y),{},{signal:b.signal})).finally(()=>clearTimeout(w))}:this.fetch=p,this.retry=m}from(a){if(!a||typeof a!="string"||a.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new hx(new URL(`${this.url}/${a}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(a){return new wg(this.url,{headers:this.headers,schema:a,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(a,i={},{head:l=!1,get:o=!1,count:u}={}){var f;let m;const p=new URL(`${this.url}/rpc/${a}`);let g;const y=_=>_!==null&&typeof _=="object"&&(!Array.isArray(_)||_.some(y)),b=l&&Object.values(i).some(y);b?(m="POST",g=i):l||o?(m=l?"HEAD":"GET",Object.entries(i).filter(([_,E])=>E!==void 0).map(([_,E])=>[_,Array.isArray(E)?`{${E.join(",")}}`:`${E}`]).forEach(([_,E])=>{p.searchParams.append(_,E)})):(m="POST",g=i);const w=new Headers(this.headers);return b?w.set("Prefer",u?`count=${u},return=minimal`:"return=minimal"):u&&w.set("Prefer",`count=${u}`),new _r({method:m,url:p,headers:w,schema:this.schemaName,body:g,fetch:(f=this.fetch)!==null&&f!==void 0?f:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class vx{constructor(){}static detectEnvironment(){var a;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const i=globalThis;if(typeof globalThis<"u"&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};const l=typeof global<"u"?global:void 0;if(l&&typeof l.WebSocket<"u")return{type:"native",wsConstructor:l.WebSocket};if(typeof globalThis<"u"&&typeof i.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&i.EdgeRuntime||typeof navigator<"u"&&(!((a=navigator.userAgent)===null||a===void 0)&&a.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const o=globalThis.process;if(o){const u=o.versions;if(u&&u.node){const f=u.node,m=parseInt(f.replace(/^v/,"").split(".")[0]);return m>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${m} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${m} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const a=this.detectEnvironment();if(a.wsConstructor)return a.wsConstructor;let i=a.error||"WebSocket not supported in this environment.";throw a.workaround&&(i+=`

Suggested solution: ${a.workaround}`),new Error(i)}static isWebSocketSupported(){try{const a=this.detectEnvironment();return a.type==="native"||a.type==="ws"}catch{return!1}}}const yx="2.108.2",bx=`realtime-js/${yx}`,xx="1.0.0",_g="2.0.0",wx=_g,_x=1e4,Sx=100,sn={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Sg={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Tu={connecting:"connecting",closing:"closing",closed:"closed"};class jx{constructor(a){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=a??[]}encode(a,i){if(a.event===this.BROADCAST_EVENT&&!(a.payload instanceof ArrayBuffer)&&typeof a.payload.event=="string")return i(this._binaryEncodeUserBroadcastPush(a));let l=[a.join_ref,a.ref,a.topic,a.event,a.payload];return i(JSON.stringify(l))}_binaryEncodeUserBroadcastPush(a){var i;return this._isArrayBuffer((i=a.payload)===null||i===void 0?void 0:i.payload)?this._encodeBinaryUserBroadcastPush(a):this._encodeJsonUserBroadcastPush(a)}_encodeBinaryUserBroadcastPush(a){var i,l;const o=(l=(i=a.payload)===null||i===void 0?void 0:i.payload)!==null&&l!==void 0?l:new ArrayBuffer(0);return this._encodeUserBroadcastPush(a,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(a){var i,l;const o=(l=(i=a.payload)===null||i===void 0?void 0:i.payload)!==null&&l!==void 0?l:{},f=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(a,this.JSON_ENCODING,f)}_encodeUserBroadcastPush(a,i,l){var o,u;const f=a.topic,m=(o=a.ref)!==null&&o!==void 0?o:"",p=(u=a.join_ref)!==null&&u!==void 0?u:"",g=a.payload.event,y=this.allowedMetadataKeys?this._pick(a.payload,this.allowedMetadataKeys):{},b=Object.keys(y).length===0?"":JSON.stringify(y);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(m.length>255)throw new Error(`ref length ${m.length} exceeds maximum of 255`);if(f.length>255)throw new Error(`topic length ${f.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(b.length>255)throw new Error(`metadata length ${b.length} exceeds maximum of 255`);const w=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+m.length+f.length+g.length+b.length,_=new ArrayBuffer(this.HEADER_LENGTH+w);let E=new DataView(_),N=0;E.setUint8(N++,this.KINDS.userBroadcastPush),E.setUint8(N++,p.length),E.setUint8(N++,m.length),E.setUint8(N++,f.length),E.setUint8(N++,g.length),E.setUint8(N++,b.length),E.setUint8(N++,i),Array.from(p,z=>E.setUint8(N++,z.charCodeAt(0))),Array.from(m,z=>E.setUint8(N++,z.charCodeAt(0))),Array.from(f,z=>E.setUint8(N++,z.charCodeAt(0))),Array.from(g,z=>E.setUint8(N++,z.charCodeAt(0))),Array.from(b,z=>E.setUint8(N++,z.charCodeAt(0)));var D=new Uint8Array(_.byteLength+l.byteLength);return D.set(new Uint8Array(_),0),D.set(new Uint8Array(l),_.byteLength),D.buffer}decode(a,i){if(this._isArrayBuffer(a)){let l=this._binaryDecode(a);return i(l)}if(typeof a=="string"){const l=JSON.parse(a),[o,u,f,m,p]=l;return i({join_ref:o,ref:u,topic:f,event:m,payload:p})}return i({})}_binaryDecode(a){const i=new DataView(a),l=i.getUint8(0),o=new TextDecoder;switch(l){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(a,i,o)}}_decodeUserBroadcast(a,i,l){const o=i.getUint8(1),u=i.getUint8(2),f=i.getUint8(3),m=i.getUint8(4);let p=this.HEADER_LENGTH+4;const g=l.decode(a.slice(p,p+o));p=p+o;const y=l.decode(a.slice(p,p+u));p=p+u;const b=l.decode(a.slice(p,p+f));p=p+f;const w=a.slice(p,a.byteLength),_=m===this.JSON_ENCODING?JSON.parse(l.decode(w)):w,E={type:this.BROADCAST_EVENT,event:y,payload:_};return f>0&&(E.meta=JSON.parse(b)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:E}}_isArrayBuffer(a){var i;return a instanceof ArrayBuffer||((i=a==null?void 0:a.constructor)===null||i===void 0?void 0:i.name)==="ArrayBuffer"}_pick(a,i){return!a||typeof a!="object"?{}:Object.fromEntries(Object.entries(a).filter(([l])=>i.includes(l)))}}var Te;(function(r){r.abstime="abstime",r.bool="bool",r.date="date",r.daterange="daterange",r.float4="float4",r.float8="float8",r.int2="int2",r.int4="int4",r.int4range="int4range",r.int8="int8",r.int8range="int8range",r.json="json",r.jsonb="jsonb",r.money="money",r.numeric="numeric",r.oid="oid",r.reltime="reltime",r.text="text",r.time="time",r.timestamp="timestamp",r.timestamptz="timestamptz",r.timetz="timetz",r.tsrange="tsrange",r.tstzrange="tstzrange"})(Te||(Te={}));const Sp=(r,a,i={})=>{var l;const o=(l=i.skipTypes)!==null&&l!==void 0?l:[];return a?Object.keys(a).reduce((u,f)=>(u[f]=kx(f,r,a,o),u),{}):{}},kx=(r,a,i,l)=>{const o=a.find(m=>m.name===r),u=o==null?void 0:o.type,f=i[r];return u&&!l.includes(u)?jg(u,f):Au(f)},jg=(r,a)=>{if(r.charAt(0)==="_"){const i=r.slice(1,r.length);return Nx(a,i)}switch(r){case Te.bool:return Ex(a);case Te.float4:case Te.float8:case Te.int2:case Te.int4:case Te.int8:case Te.numeric:case Te.oid:return Tx(a);case Te.json:case Te.jsonb:return Ax(a);case Te.timestamp:return Cx(a);case Te.abstime:case Te.date:case Te.daterange:case Te.int4range:case Te.int8range:case Te.money:case Te.reltime:case Te.text:case Te.time:case Te.timestamptz:case Te.timetz:case Te.tsrange:case Te.tstzrange:return Au(a);default:return Au(a)}},Au=r=>r,Ex=r=>{switch(r){case"t":return!0;case"f":return!1;default:return r}},Tx=r=>{if(typeof r=="string"){const a=parseFloat(r);if(!Number.isNaN(a))return a}return r},Ax=r=>{if(typeof r=="string")try{return JSON.parse(r)}catch{return r}return r},Nx=(r,a)=>{if(typeof r!="string")return r;const i=r.length-1,l=r[i];if(r[0]==="{"&&l==="}"){let u;const f=r.slice(1,i);try{u=JSON.parse("["+f+"]")}catch{u=f?f.split(","):[]}return u.map(m=>jg(a,m))}return r},Cx=r=>typeof r=="string"?r.replace(" ","T"):r,kg=r=>{const a=new URL(r);return a.protocol=a.protocol.replace(/^ws/i,"http"),a.pathname=a.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),a.pathname===""||a.pathname==="/"?a.pathname="/api/broadcast":a.pathname=a.pathname+"/api/broadcast",a.href};var Di=r=>typeof r=="function"?r:function(){return r},Rx=typeof self<"u"?self:null,Sr=typeof window<"u"?window:null,sa=Rx||Sr||globalThis,Ox="2.0.0",zx=1e4,Ux=1e3,la={connecting:0,open:1,closing:2,closed:3},yt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Na={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Nu={longpoll:"longpoll",websocket:"websocket"},Dx={complete:4},Cu="base64url.bearer.phx.",pl=class{constructor(r,a,i,l){this.channel=r,this.event=a,this.payload=i||function(){return{}},this.receivedResp=null,this.timeout=l,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(r){this.timeout=r,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(r,a){return this.hasReceived(r)&&a(this.receivedResp.response),this.recHooks.push({status:r,callback:a}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:r,response:a,_ref:i}){this.recHooks.filter(l=>l.status===r).forEach(l=>l.callback(a))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,r=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=r,this.matchReceive(r)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(r){return this.receivedResp&&this.receivedResp.status===r}trigger(r,a){this.channel.trigger(this.refEvent,{status:r,response:a})}},Eg=class{constructor(r,a){this.callback=r,this.timerCalc=a,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},Lx=class{constructor(r,a,i){this.state=yt.closed,this.topic=r,this.params=Di(a||{}),this.socket=i,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new pl(this,Na.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Eg(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=yt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(l=>l.send()),this.pushBuffer=[]}),this.joinPush.receive("error",l=>{this.state=yt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,l),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=yt.closed,this.socket.remove(this)}),this.onError(l=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,l),this.isJoining()&&this.joinPush.reset(),this.state=yt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new pl(this,Na.leave,Di({}),this.timeout).send(),this.state=yt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Na.reply,(l,o)=>{this.trigger(this.replyEventName(o),l)})}join(r=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=r,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(r=>r.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=yt.closed,this.bindings=[]}onClose(r){this.on(Na.close,r)}onError(r){return this.on(Na.error,a=>r(a))}on(r,a){let i=this.bindingRef++;return this.bindings.push({event:r,ref:i,callback:a}),i}off(r,a){this.bindings=this.bindings.filter(i=>!(i.event===r&&(typeof a>"u"||a===i.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(r,a,i=this.timeout){if(a=a||{},!this.joinedOnce)throw new Error(`tried to push '${r}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let l=new pl(this,r,function(){return a},i);return this.canPush()?l.send():(l.startTimeout(),this.pushBuffer.push(l)),l}leave(r=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=yt.leaving;let a=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Na.close,"leave")},i=new pl(this,Na.leave,Di({}),r);return i.receive("ok",()=>a()).receive("timeout",()=>a()),i.send(),this.canPush()||i.trigger("ok",{}),i}onMessage(r,a,i){return a}filterBindings(r,a,i){return!0}isMember(r,a,i,l){return this.topic!==r?!1:l&&l!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:r,event:a,payload:i,joinRef:l}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(r=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=yt.joining,this.joinPush.resend(r))}trigger(r,a,i,l){let o=this.onMessage(r,a,i,l);if(a&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let u=this.bindings.filter(f=>f.event===r&&this.filterBindings(f,a,i));for(let f=0;f<u.length;f++)u[f].callback(o,i,l||this.joinRef())}replyEventName(r){return`chan_reply_${r}`}isClosed(){return this.state===yt.closed}isErrored(){return this.state===yt.errored}isJoined(){return this.state===yt.joined}isJoining(){return this.state===yt.joining}isLeaving(){return this.state===yt.leaving}},Tl=class{static request(r,a,i,l,o,u,f){if(sa.XDomainRequest){let m=new sa.XDomainRequest;return this.xdomainRequest(m,r,a,l,o,u,f)}else if(sa.XMLHttpRequest){let m=new sa.XMLHttpRequest;return this.xhrRequest(m,r,a,i,l,o,u,f)}else{if(sa.fetch&&sa.AbortController)return this.fetchRequest(r,a,i,l,o,u,f);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(r,a,i,l,o,u,f){let m={method:r,headers:i,body:l},p=null;return o&&(p=new AbortController,setTimeout(()=>p.abort(),o),m.signal=p.signal),sa.fetch(a,m).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>f&&f(g)).catch(g=>{g.name==="AbortError"&&u?u():f&&f(null)}),p}static xdomainRequest(r,a,i,l,o,u,f){return r.timeout=o,r.open(a,i),r.onload=()=>{let m=this.parseJSON(r.responseText);f&&f(m)},u&&(r.ontimeout=u),r.onprogress=()=>{},r.send(l),r}static xhrRequest(r,a,i,l,o,u,f,m){r.open(a,i,!0),r.timeout=u;for(let[p,g]of Object.entries(l))r.setRequestHeader(p,g);return r.onerror=()=>m&&m(null),r.onreadystatechange=()=>{if(r.readyState===Dx.complete&&m){let p=this.parseJSON(r.responseText);m(p)}},f&&(r.ontimeout=f),r.send(o),r}static parseJSON(r){if(!r||r==="")return null;try{return JSON.parse(r)}catch{return console&&console.log("failed to parse JSON response",r),null}}static serialize(r,a){let i=[];for(var l in r){if(!Object.prototype.hasOwnProperty.call(r,l))continue;let o=a?`${a}[${l}]`:l,u=r[l];typeof u=="object"?i.push(this.serialize(u,o)):i.push(encodeURIComponent(o)+"="+encodeURIComponent(u))}return i.join("&")}static appendParams(r,a){if(Object.keys(a).length===0)return r;let i=r.match(/\?/)?"&":"?";return`${r}${i}${this.serialize(a)}`}},Mx=r=>{let a="",i=new Uint8Array(r),l=i.byteLength;for(let o=0;o<l;o++)a+=String.fromCharCode(i[o]);return btoa(a)},gr=class{constructor(r,a){a&&a.length===2&&a[1].startsWith(Cu)&&(this.authToken=atob(a[1].slice(Cu.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(r),this.readyState=la.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(r){return r.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Nu.websocket),"$1/"+Nu.longpoll)}endpointURL(){return Tl.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(r,a,i){this.close(r,a,i),this.readyState=la.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===la.open||this.readyState===la.connecting}poll(){const r={Accept:"application/json"};this.authToken&&(r["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",r,null,()=>this.ontimeout(),a=>{if(a){var{status:i,token:l,messages:o}=a;if(i===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=l}else i=0;switch(i){case 200:o.forEach(u=>{setTimeout(()=>this.onmessage({data:u}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=la.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${i}`)}})}send(r){typeof r!="string"&&(r=Mx(r)),this.currentBatch?this.currentBatch.push(r):this.awaitingBatchAck?this.batchBuffer.push(r):(this.currentBatch=[r],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(r){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},r.join(`
`),()=>this.onerror("timeout"),a=>{this.awaitingBatchAck=!1,!a||a.status!==200?(this.onerror(a&&a.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(r,a,i){for(let o of this.reqs)o.abort();this.readyState=la.closed;let l=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:r,reason:a,wasClean:i});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",l)):this.onclose(l)}ajax(r,a,i,l,o){let u,f=()=>{this.reqs.delete(u),l()};u=Tl.request(r,this.endpointURL(),a,i,this.timeout,f,m=>{this.reqs.delete(u),this.isActive()&&o(m)}),this.reqs.add(u)}},Bx=class Oi{constructor(a,i={}){let l=i.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=a,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(l.state,o=>{let{onJoin:u,onLeave:f,onSync:m}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Oi.syncState(this.state,o,u,f),this.pendingDiffs.forEach(p=>{this.state=Oi.syncDiff(this.state,p,u,f)}),this.pendingDiffs=[],m()}),this.channel.on(l.diff,o=>{let{onJoin:u,onLeave:f,onSync:m}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Oi.syncDiff(this.state,o,u,f),m())})}onJoin(a){this.caller.onJoin=a}onLeave(a){this.caller.onLeave=a}onSync(a){this.caller.onSync=a}list(a){return Oi.list(this.state,a)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(a,i,l,o){let u=this.clone(a),f={},m={};return this.map(u,(p,g)=>{i[p]||(m[p]=g)}),this.map(i,(p,g)=>{let y=u[p];if(y){let b=g.metas.map(N=>N.phx_ref),w=y.metas.map(N=>N.phx_ref),_=g.metas.filter(N=>w.indexOf(N.phx_ref)<0),E=y.metas.filter(N=>b.indexOf(N.phx_ref)<0);_.length>0&&(f[p]=g,f[p].metas=_),E.length>0&&(m[p]=this.clone(y),m[p].metas=E)}else f[p]=g}),this.syncDiff(u,{joins:f,leaves:m},l,o)}static syncDiff(a,i,l,o){let{joins:u,leaves:f}=this.clone(i);return l||(l=function(){}),o||(o=function(){}),this.map(u,(m,p)=>{let g=a[m];if(a[m]=this.clone(p),g){let y=a[m].metas.map(w=>w.phx_ref),b=g.metas.filter(w=>y.indexOf(w.phx_ref)<0);a[m].metas.unshift(...b)}l(m,g,p)}),this.map(f,(m,p)=>{let g=a[m];if(!g)return;let y=p.metas.map(b=>b.phx_ref);g.metas=g.metas.filter(b=>y.indexOf(b.phx_ref)<0),o(m,g,p),g.metas.length===0&&delete a[m]}),a}static list(a,i){return i||(i=function(l,o){return o}),this.map(a,(l,o)=>i(l,o))}static map(a,i){return Object.getOwnPropertyNames(a).map(l=>i(l,a[l]))}static clone(a){return JSON.parse(JSON.stringify(a))}},gl={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(r,a){if(r.payload.constructor===ArrayBuffer)return a(this.binaryEncode(r));{let i=[r.join_ref,r.ref,r.topic,r.event,r.payload];return a(JSON.stringify(i))}},decode(r,a){if(r.constructor===ArrayBuffer)return a(this.binaryDecode(r));{let[i,l,o,u,f]=JSON.parse(r);return a({join_ref:i,ref:l,topic:o,event:u,payload:f})}},binaryEncode(r){let{join_ref:a,ref:i,event:l,topic:o,payload:u}=r,f=this.META_LENGTH+a.length+i.length+o.length+l.length,m=new ArrayBuffer(this.HEADER_LENGTH+f),p=new DataView(m),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,a.length),p.setUint8(g++,i.length),p.setUint8(g++,o.length),p.setUint8(g++,l.length),Array.from(a,b=>p.setUint8(g++,b.charCodeAt(0))),Array.from(i,b=>p.setUint8(g++,b.charCodeAt(0))),Array.from(o,b=>p.setUint8(g++,b.charCodeAt(0))),Array.from(l,b=>p.setUint8(g++,b.charCodeAt(0)));var y=new Uint8Array(m.byteLength+u.byteLength);return y.set(new Uint8Array(m),0),y.set(new Uint8Array(u),m.byteLength),y.buffer},binaryDecode(r){let a=new DataView(r),i=a.getUint8(0),l=new TextDecoder;switch(i){case this.KINDS.push:return this.decodePush(r,a,l);case this.KINDS.reply:return this.decodeReply(r,a,l);case this.KINDS.broadcast:return this.decodeBroadcast(r,a,l)}},decodePush(r,a,i){let l=a.getUint8(1),o=a.getUint8(2),u=a.getUint8(3),f=this.HEADER_LENGTH+this.META_LENGTH-1,m=i.decode(r.slice(f,f+l));f=f+l;let p=i.decode(r.slice(f,f+o));f=f+o;let g=i.decode(r.slice(f,f+u));f=f+u;let y=r.slice(f,r.byteLength);return{join_ref:m,ref:null,topic:p,event:g,payload:y}},decodeReply(r,a,i){let l=a.getUint8(1),o=a.getUint8(2),u=a.getUint8(3),f=a.getUint8(4),m=this.HEADER_LENGTH+this.META_LENGTH,p=i.decode(r.slice(m,m+l));m=m+l;let g=i.decode(r.slice(m,m+o));m=m+o;let y=i.decode(r.slice(m,m+u));m=m+u;let b=i.decode(r.slice(m,m+f));m=m+f;let w=r.slice(m,r.byteLength),_={status:b,response:w};return{join_ref:p,ref:g,topic:y,event:Na.reply,payload:_}},decodeBroadcast(r,a,i){let l=a.getUint8(1),o=a.getUint8(2),u=this.HEADER_LENGTH+2,f=i.decode(r.slice(u,u+l));u=u+l;let m=i.decode(r.slice(u,u+o));u=u+o;let p=r.slice(u,r.byteLength);return{join_ref:null,ref:null,topic:f,event:m,payload:p}}},Hx=class{constructor(r,a={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=a.timeout||zx,this.transport=a.transport||sa.WebSocket||gr,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=a.longPollFallbackMs,this.fallbackTimer=null;let i=null;try{i=sa&&sa.sessionStorage}catch{}this.sessionStore=a.sessionStorage||i,this.establishedConnections=0,this.defaultEncoder=gl.encode.bind(gl),this.defaultDecoder=gl.decode.bind(gl),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=a.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==gr?(this.encode=a.encode||this.defaultEncoder,this.decode=a.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let l=null;Sr&&Sr.addEventListener&&(Sr.addEventListener("pagehide",o=>{this.conn&&(this.disconnect(),l=this.connectClock)}),Sr.addEventListener("pageshow",o=>{l===this.connectClock&&(l=null,this.connect())}),Sr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=a.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=a.autoSendHeartbeat??!0,this.heartbeatCallback=a.heartbeatCallback??(()=>{}),this.rejoinAfterMs=o=>a.rejoinAfterMs?a.rejoinAfterMs(o):[1e3,2e3,5e3][o-1]||1e4,this.reconnectAfterMs=o=>a.reconnectAfterMs?a.reconnectAfterMs(o):[10,50,100,150,200,250,500,1e3,2e3][o-1]||5e3,this.logger=a.logger||null,!this.logger&&a.debug&&(this.logger=(o,u,f)=>{console.log(`${o}: ${u}`,f)}),this.longpollerTimeout=a.longpollerTimeout||2e4,this.params=Di(a.params||{}),this.endPoint=`${r}/${Nu.websocket}`,this.vsn=a.vsn||Ox,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Eg(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{a.beforeReconnect&&await a.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=a.authToken}getLongPollTransport(){return gr}replaceTransport(r){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=r}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let r=Tl.appendParams(Tl.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return r.charAt(0)!=="/"?r:r.charAt(1)==="/"?`${this.protocol()}:${r}`:`${this.protocol()}://${location.host}${r}`}disconnect(r,a,i){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,r&&r()},a,i)}connect(r){r&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Di(r)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==gr?this.connectWithFallback(gr,this.longPollFallbackMs):this.transportConnect())}log(r,a,i){this.logger&&this.logger(r,a,i)}hasLogger(){return this.logger!==null}onOpen(r){let a=this.makeRef();return this.stateChangeCallbacks.open.push([a,r]),a}onClose(r){let a=this.makeRef();return this.stateChangeCallbacks.close.push([a,r]),a}onError(r){let a=this.makeRef();return this.stateChangeCallbacks.error.push([a,r]),a}onMessage(r){let a=this.makeRef();return this.stateChangeCallbacks.message.push([a,r]),a}onHeartbeat(r){this.heartbeatCallback=r}ping(r){if(!this.isConnected())return!1;let a=this.makeRef(),i=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:a});let l=this.onMessage(o=>{o.ref===a&&(this.off([l]),r(Date.now()-i))});return!0}transportName(r){switch(r){case gr:return"LongPoll";default:return r.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let r;this.authToken&&(r=["phoenix",`${Cu}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),r),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=a=>this.onConnError(a),this.conn.onmessage=a=>this.onConnMessage(a),this.conn.onclose=a=>this.onConnClose(a)}getSession(r){return this.sessionStore&&this.sessionStore.getItem(r)}storeSession(r,a){this.sessionStore&&this.sessionStore.setItem(r,a)}connectWithFallback(r,a=2500){clearTimeout(this.fallbackTimer);let i=!1,l=!0,o,u,f=this.transportName(r),m=p=>{this.log("transport",`falling back to ${f}...`,p),this.off([o,u]),l=!1,this.replaceTransport(r),this.transportConnect()};if(this.getSession(`phx:fallback:${f}`))return m("memorized");this.fallbackTimer=setTimeout(m,a),u=this.onError(p=>{this.log("transport","error",p),l&&!i&&(clearTimeout(this.fallbackTimer),m(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(i=!0,!l){let p=this.transportName(r);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(m,a),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(r){this.log("error","error in heartbeat callback",r)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Ux,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(r,a,i){if(!this.conn)return r&&r();const l=this.conn;this.waitForBufferDone(l,()=>{a?l.close(a,i||""):l.close(),this.waitForSocketClosed(l,()=>{this.conn===l&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),r&&r()})})}waitForBufferDone(r,a,i=1){if(i===5||!r.bufferedAmount){a();return}setTimeout(()=>{this.waitForBufferDone(r,a,i+1)},150*i)}waitForSocketClosed(r,a,i=1){if(i===5||r.readyState===la.closed){a();return}setTimeout(()=>{this.waitForSocketClosed(r,a,i+1)},150*i)}onConnClose(r){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",r),this.triggerChanError(r),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",r)}onConnError(r){this.hasLogger()&&this.log("transport","error",r);let a=this.transport,i=this.establishedConnections;this.triggerStateCallbacks("error",r,a,i),(a===this.transport||i>0)&&this.triggerChanError(r)}triggerChanError(r){this.channels.forEach(a=>{a.isErrored()||a.isLeaving()||a.isClosed()||a.trigger(Na.error,r)})}connectionState(){switch(this.conn&&this.conn.readyState){case la.connecting:return"connecting";case la.open:return"open";case la.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(r){this.off(r.stateChangeRefs),this.channels=this.channels.filter(a=>a!==r)}off(r){for(let a in this.stateChangeCallbacks)this.stateChangeCallbacks[a]=this.stateChangeCallbacks[a].filter(([i])=>r.indexOf(i)===-1)}channel(r,a={}){let i=new Lx(r,a,this);return this.channels.push(i),i}push(r){if(this.hasLogger()){let{topic:a,event:i,payload:l,ref:o,join_ref:u}=r;this.log("push",`${a} ${i} (${u}, ${o})`,l)}this.isConnected()?this.encode(r,a=>this.conn.send(a)):this.sendBuffer.push(()=>this.encode(r,a=>this.conn.send(a)))}makeRef(){let r=this.ref+1;return r===this.ref?this.ref=0:this.ref=r,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(r){this.log("error","error in heartbeat callback",r)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(r){this.log("error","error in heartbeat callback",r)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(r=>r()),this.sendBuffer=[])}onConnMessage(r){this.decode(r.data,a=>{let{topic:i,event:l,payload:o,ref:u,join_ref:f}=a;if(u&&u===this.pendingHeartbeatRef){const m=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",m)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${i} ${l} ${u&&"("+u+")"||""}`.trim(),o);for(let m=0;m<this.channels.length;m++){const p=this.channels[m];p.isMember(i,l,o,f)&&p.trigger(l,o,u,f)}this.triggerStateCallbacks("message",a)})}triggerStateCallbacks(r,...a){try{this.stateChangeCallbacks[r].forEach(([i,l])=>{try{l(...a)}catch(o){this.log("error",`error in ${r} callback`,o)}})}catch(i){this.log("error",`error triggering ${r} callbacks`,i)}}leaveOpenTopic(r){let a=this.channels.find(i=>i.topic===r&&(i.isJoined()||i.isJoining()));a&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${r}"`),a.leave())}};class Li{constructor(a,i){const l=qx(i);this.presence=new Bx(a.getChannel(),l),this.presence.onJoin((o,u,f)=>{const m=Li.onJoinPayload(o,u,f);a.getChannel().trigger("presence",m)}),this.presence.onLeave((o,u,f)=>{const m=Li.onLeavePayload(o,u,f);a.getChannel().trigger("presence",m)}),this.presence.onSync(()=>{a.getChannel().trigger("presence",{event:"sync"})})}get state(){return Li.transformState(this.presence.state)}static transformState(a){return a=$x(a),Object.getOwnPropertyNames(a).reduce((i,l)=>{const o=a[l];return i[l]=jl(o),i},{})}static onJoinPayload(a,i,l){const o=jp(i),u=jl(l);return{event:"join",key:a,currentPresences:o,newPresences:u}}static onLeavePayload(a,i,l){const o=jp(i),u=jl(l);return{event:"leave",key:a,currentPresences:o,leftPresences:u}}}function jl(r){return r.metas.map(a=>(a.presence_ref=a.phx_ref,delete a.phx_ref,delete a.phx_ref_prev,a))}function $x(r){return JSON.parse(JSON.stringify(r))}function qx(r){return(r==null?void 0:r.events)&&{events:r.events}}function jp(r){return r!=null&&r.metas?jl(r):[]}var kp;(function(r){r.SYNC="sync",r.JOIN="join",r.LEAVE="leave"})(kp||(kp={}));class Gx{get state(){return this.presenceAdapter.state}constructor(a,i){this.channel=a,this.presenceAdapter=new Li(this.channel.channelAdapter,i)}}function Vx(r){if(r instanceof Error)return r;if(typeof r=="string")return new Error(r);if(r&&typeof r=="object"){const a=r;if(typeof a.code=="number"){const i=typeof a.reason=="string"&&a.reason?` (${a.reason})`:"";return new Error(`socket closed: ${a.code}${i}`,{cause:r})}return new Error("channel error: transport failure",{cause:r})}return new Error("channel error: connection lost")}class Yx{constructor(a,i,l){const o=Kx(l);this.channel=a.getSocket().channel(i,o),this.socket=a}get state(){return this.channel.state}set state(a){this.channel.state=a}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(a,i){return this.channel.on(a,i)}off(a,i){this.channel.off(a,i)}subscribe(a){return this.channel.join(a)}unsubscribe(a){return this.channel.leave(a)}teardown(){this.channel.teardown()}onClose(a){this.channel.onClose(a)}onError(a){return this.channel.onError(a)}push(a,i,l){let o;try{o=this.channel.push(a,i,l)}catch{throw new Error(`tried to push '${a}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Sx){const u=this.channel.pushBuffer.shift();u.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${u.event}`,u.payload())}return o}updateJoinPayload(a){const i=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},i),a)}canPush(){return this.socket.isConnected()&&this.state===sn.joined}isJoined(){return this.state===sn.joined}isJoining(){return this.state===sn.joining}isClosed(){return this.state===sn.closed}isLeaving(){return this.state===sn.leaving}updateFilterBindings(a){this.channel.filterBindings=a}updatePayloadTransform(a){this.channel.onMessage=a}getChannel(){return this.channel}}function Kx(r){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config)}}var Ep;(function(r){r.ALL="*",r.INSERT="INSERT",r.UPDATE="UPDATE",r.DELETE="DELETE"})(Ep||(Ep={}));var kr;(function(r){r.BROADCAST="broadcast",r.PRESENCE="presence",r.POSTGRES_CHANGES="postgres_changes",r.SYSTEM="system"})(kr||(kr={}));var Ca;(function(r){r.SUBSCRIBED="SUBSCRIBED",r.TIMED_OUT="TIMED_OUT",r.CLOSED="CLOSED",r.CHANNEL_ERROR="CHANNEL_ERROR"})(Ca||(Ca={}));class Mi{get state(){return this.channelAdapter.state}set state(a){this.channelAdapter.state=a}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(a,i={config:{}},l){var o,u;if(this.topic=a,this.params=i,this.socket=l,this.bindings={},this.subTopic=a.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},i.config),this.channelAdapter=new Yx(this.socket.socketAdapter,a,this.params),this.presence=new Gx(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=kg(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((u=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||u===void 0)&&u.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(a,i=this.timeout){var l,o,u;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:f,presence:m,private:p}}=this.params,g=(o=(l=this.bindings.postgres_changes)===null||l===void 0?void 0:l.map(_=>_.filter))!==null&&o!==void 0?o:[],y=!!this.bindings[kr.PRESENCE]&&this.bindings[kr.PRESENCE].length>0||((u=this.params.config.presence)===null||u===void 0?void 0:u.enabled)===!0,b={},w={broadcast:f,presence:Object.assign(Object.assign({},m),{enabled:y}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(b.access_token=this.socket.accessTokenValue),this._onError(_=>{a==null||a(Ca.CHANNEL_ERROR,Vx(_))}),this._onClose(()=>a==null?void 0:a(Ca.CLOSED)),this.updateJoinPayload(Object.assign({config:w},b)),this._updateFilterMessage(),this.channelAdapter.subscribe(i).receive("ok",async({postgres_changes:_})=>{if(this.socket._isManualToken()||this.socket.setAuth(),_===void 0){a==null||a(Ca.SUBSCRIBED);return}this._updatePostgresBindings(_,a)}).receive("error",_=>{this.state=sn.errored;const E=Object.values(_).join(", ")||"error";a==null||a(Ca.CHANNEL_ERROR,new Error(E,{cause:_}))}).receive("timeout",()=>{a==null||a(Ca.TIMED_OUT)})}return this}_updatePostgresBindings(a,i){var l;const o=this.bindings.postgres_changes,u=(l=o==null?void 0:o.length)!==null&&l!==void 0?l:0,f=[];for(let m=0;m<u;m++){const p=o[m],{filter:{event:g,schema:y,table:b,filter:w}}=p,_=a&&a[m];if(_&&_.event===g&&Mi.isFilterValueEqual(_.schema,y)&&Mi.isFilterValueEqual(_.table,b)&&Mi.isFilterValueEqual(_.filter,w))f.push(Object.assign(Object.assign({},p),{id:_.id}));else{this.unsubscribe(),this.state=sn.errored,i==null||i(Ca.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=f,this.state!=sn.errored&&i&&i(Ca.SUBSCRIBED)}presenceState(){return this.presence.state}async track(a,i={}){return await this.send({type:"presence",event:"track",payload:a},i.timeout||this.timeout)}async untrack(a={}){return await this.send({type:"presence",event:"untrack"},a)}on(a,i,l){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),u=a===kr.PRESENCE||a===kr.POSTGRES_CHANGES;if(o&&u)throw this.socket.log("channel",`cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${a}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(a,i,l)}async httpSend(a,i,l={}){var o;if(i==null)return Promise.reject(new Error("Payload is required for httpSend()"));const u=i instanceof ArrayBuffer||ArrayBuffer.isView(i),f={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":u?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(f.Authorization=`Bearer ${this.socket.accessTokenValue}`);const m=new URL(this.broadcastEndpointURL);m.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(a)}`,this.private&&m.searchParams.set("private","true");const p={method:"POST",headers:f,body:u?i:JSON.stringify(i)},g=await this._fetchWithTimeout(m.toString(),p,(o=l.timeout)!==null&&o!==void 0?o:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let y=g.statusText;try{const b=await g.json();y=b.error||b.message||y}catch{}return Promise.reject(new Error(y))}async send(a,i={}){var l,o;if(!this.channelAdapter.canPush()&&a.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:u,payload:f}=a,m={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(m.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:m,body:JSON.stringify({messages:[{topic:this.subTopic,event:u,payload:f,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(l=i.timeout)!==null&&l!==void 0?l:this.timeout);return await((o=g.body)===null||o===void 0?void 0:o.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(u=>{var f,m,p;const g=this.channelAdapter.push(a.type,a,i.timeout||this.timeout);a.type==="broadcast"&&!(!((p=(m=(f=this.params)===null||f===void 0?void 0:f.config)===null||m===void 0?void 0:m.broadcast)===null||p===void 0)&&p.ack)&&u("ok"),g.receive("ok",()=>u("ok")),g.receive("error",()=>u("error")),g.receive("timeout",()=>u("timed out"))})}updateJoinPayload(a){this.channelAdapter.updateJoinPayload(a)}async unsubscribe(a=this.timeout){return new Promise(i=>{this.channelAdapter.unsubscribe(a).receive("ok",()=>i("ok")).receive("timeout",()=>i("timed out")).receive("error",()=>i("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(a,i,l){const o=new AbortController,u=setTimeout(()=>o.abort(),l),f=await this.socket.fetch(a,Object.assign(Object.assign({},i),{signal:o.signal}));return clearTimeout(u),f}_on(a,i,l){const o=a.toLocaleLowerCase(),u=this.channelAdapter.on(a,l),f={type:o,filter:i,callback:l,ref:u};return this.bindings[o]?this.bindings[o].push(f):this.bindings[o]=[f],this._updateFilterMessage(),this}_onClose(a){this.channelAdapter.onClose(a)}_onError(a){this.channelAdapter.onError(a)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((a,i,l)=>{var o,u,f,m,p,g,y;const b=a.event.toLocaleLowerCase();if(this._notThisChannelEvent(b,l))return!1;const w=(o=this.bindings[b])===null||o===void 0?void 0:o.find(_=>_.ref===a.ref);if(!w)return!0;if(["broadcast","presence","postgres_changes"].includes(b))if("id"in w){const _=w.id,E=(u=w.filter)===null||u===void 0?void 0:u.event;return _&&((f=i.ids)===null||f===void 0?void 0:f.includes(_))&&(E==="*"||(E==null?void 0:E.toLocaleLowerCase())===((m=i.data)===null||m===void 0?void 0:m.type.toLocaleLowerCase()))}else{const _=(g=(p=w==null?void 0:w.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return _==="*"||_===((y=i==null?void 0:i.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return w.type.toLocaleLowerCase()===b})}_notThisChannelEvent(a,i){const{close:l,error:o,leave:u,join:f}=Sg;return i&&[l,o,u,f].includes(a)&&i!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((a,i,l)=>{if(typeof i=="object"&&"ids"in i){const o=i.data,{schema:u,table:f,commit_timestamp:m,type:p,errors:g}=o;return Object.assign(Object.assign({},{schema:u,table:f,commit_timestamp:m,eventType:p,new:{},old:{},errors:g}),this._getPayloadRecords(o))}return i})}copyBindings(a){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const i in a.bindings)for(const l of a.bindings[i])this._on(l.type,l.filter,l.callback)}static isFilterValueEqual(a,i){return(a??void 0)===(i??void 0)}_getPayloadRecords(a){const i={new:{},old:{}};return(a.type==="INSERT"||a.type==="UPDATE")&&(i.new=Sp(a.columns,a.record)),(a.type==="UPDATE"||a.type==="DELETE")&&(i.old=Sp(a.columns,a.old_record)),i}}class Px{constructor(a,i){this.socket=new Hx(a,i)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(a){this.socket.heartbeatCallback=a}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(a,i,l,o=1e4){return new Promise(u=>{setTimeout(()=>u("timeout"),o),this.socket.disconnect(()=>{a(),u("ok")},i,l)})}push(a){this.socket.push(a)}log(a,i,l){this.socket.log(a,i,l)}makeRef(){return this.socket.makeRef()}onOpen(a){this.socket.onOpen(a)}onClose(a){this.socket.onClose(a)}onError(a){this.socket.onError(a)}onMessage(a){this.socket.onMessage(a)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Tu.connecting}isDisconnecting(){return this.socket.connectionState()==Tu.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Tp={HEARTBEAT_INTERVAL:25e3},Ix=[1e3,2e3,5e3,1e4],Xx=1e4;function Jx(){const r=new Map;return{get length(){return r.size},clear(){r.clear()},getItem(a){return r.has(a)?r.get(a):null},key(a){var i;return(i=Array.from(r.keys())[a])!==null&&i!==void 0?i:null},removeItem(a){r.delete(a)},setItem(a,i){r.set(a,String(i))}}}function Fx(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return Jx()}const Qx=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Wx{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(a,i){var l;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new jx,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=u=>u?(...f)=>u(...f):(...f)=>fetch(...f),!(!((l=i==null?void 0:i.params)===null||l===void 0)&&l.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=i.params.apikey;const o=this._initializeOptions(i);this.socketAdapter=new Px(a,o),this.httpEndpoint=kg(a),this.fetch=this._resolveFetch(i==null?void 0:i.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(a){const i=a.message;throw i.includes("Node.js")?new Error(`${i}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${i}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(a,i){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},a,i)}getChannels(){return this.channels}async removeChannel(a){const i=await a.unsubscribe();return i==="ok"&&a.teardown(),i}async removeAllChannels(){const a=this.channels.map(async l=>{const o=await l.unsubscribe();return l.teardown(),o}),i=await Promise.all(a);return await this.disconnect(),i}log(a,i,l){this.socketAdapter.log(a,i,l)}connectionState(){return this.socketAdapter.connectionState()||Tu.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(a,i={config:{}}){const l=`realtime:${a}`,o=this.getChannels().find(u=>u.topic===l);if(o)return o;{const u=new Mi(`realtime:${a}`,i,this);return this._cancelPendingDisconnect(),this.channels.push(u),u}}push(a){this.socketAdapter.push(a)}async setAuth(a=null){this._authPromise=this._performAuth(a);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(a){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(a)}_makeRef(){return this.socketAdapter.makeRef()}_remove(a){this.channels=this.channels.filter(i=>i.topic!==a.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(a=null){let i,l=!1;if(a)i=a,l=!0;else if(this.accessToken)try{i=await this.accessToken()}catch(o){this.log("error","Error fetching access token from callback",o),i=this.accessTokenValue}else i=this.accessTokenValue;l?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=i&&(this.accessTokenValue=i,this.channels.forEach(o=>{const u={access_token:i,version:bx};i&&o.updateJoinPayload(u),o.joinedOnce&&o.channelAdapter.isJoined()&&o.channelAdapter.push(Sg.access_token,{access_token:i})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(a="general"){this._isManualToken()||this.setAuth().catch(i=>{this.log("error",`Error setting auth in ${a}`,i)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(i=>{this.log("error","error waiting for auth on connect",i)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(a=>{a.ref&&a.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(a){return(i,l)=>{i=="sent"&&this._setAuthSafely(),a&&a(i,l)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const a=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(a),this.workerRef.onerror=i=>{this.log("worker","worker error",i.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=i=>{i.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(a){let i;if(a)i=a;else{const l=new Blob([Qx],{type:"application/javascript"});i=URL.createObjectURL(l)}return i}_initializeOptions(a){var i,l,o,u,f,m,p,g,y,b,w,_;this.worker=(i=a==null?void 0:a.worker)!==null&&i!==void 0?i:!1,this.accessToken=(l=a==null?void 0:a.accessToken)!==null&&l!==void 0?l:null;const E={};E.timeout=(o=a==null?void 0:a.timeout)!==null&&o!==void 0?o:_x,E.heartbeatIntervalMs=(u=a==null?void 0:a.heartbeatIntervalMs)!==null&&u!==void 0?u:Tp.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(f=a==null?void 0:a.disconnectOnEmptyChannelsAfterMs)!==null&&f!==void 0?f:2*((m=a==null?void 0:a.heartbeatIntervalMs)!==null&&m!==void 0?m:Tp.HEARTBEAT_INTERVAL),E.transport=(p=a==null?void 0:a.transport)!==null&&p!==void 0?p:vx.getWebSocketConstructor(),E.params=a==null?void 0:a.params,E.logger=a==null?void 0:a.logger,E.heartbeatCallback=this._wrapHeartbeatCallback(a==null?void 0:a.heartbeatCallback),E.sessionStorage=(g=a==null?void 0:a.sessionStorage)!==null&&g!==void 0?g:Fx(),E.reconnectAfterMs=(y=a==null?void 0:a.reconnectAfterMs)!==null&&y!==void 0?y:(Y=>Ix[Y-1]||Xx);let N,D;const z=(b=a==null?void 0:a.vsn)!==null&&b!==void 0?b:wx;switch(z){case xx:N=(Y,H)=>H(JSON.stringify(Y)),D=(Y,H)=>H(JSON.parse(Y));break;case _g:N=this.serializer.encode.bind(this.serializer),D=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${E.vsn}`)}if(E.vsn=z,E.encode=(w=a==null?void 0:a.encode)!==null&&w!==void 0?w:N,E.decode=(_=a==null?void 0:a.decode)!==null&&_!==void 0?_:D,E.beforeReconnect=this._reconnectAuth.bind(this),(a!=null&&a.logLevel||a!=null&&a.log_level)&&(this.logLevel=a.logLevel||a.log_level,E.params=Object.assign(Object.assign({},E.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=a==null?void 0:a.workerUrl,E.autoSendHeartbeat=!this.worker}return E}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var $i=class extends Error{constructor(r,a){var i;super(r),this.name="IcebergError",this.status=a.status,this.icebergType=a.icebergType,this.icebergCode=a.icebergCode,this.details=a.details,this.isCommitStateUnknown=a.icebergType==="CommitStateUnknownException"||[500,502,504].includes(a.status)&&((i=a.icebergType)==null?void 0:i.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Zx(r,a,i){const l=new URL(a,r);if(i)for(const[o,u]of Object.entries(i))u!==void 0&&l.searchParams.set(o,u);return l.toString()}async function e1(r){return!r||r.type==="none"?{}:r.type==="bearer"?{Authorization:`Bearer ${r.token}`}:r.type==="header"?{[r.name]:r.value}:r.type==="custom"?await r.getHeaders():{}}function t1(r){const a=r.fetchImpl??globalThis.fetch;return{async request({method:i,path:l,query:o,body:u,headers:f}){const m=Zx(r.baseUrl,l,o),p=await e1(r.auth),g=await a(m,{method:i,headers:{...u?{"Content-Type":"application/json"}:{},...p,...f},body:u?JSON.stringify(u):void 0}),y=await g.text(),b=(g.headers.get("content-type")||"").includes("application/json"),w=b&&y?JSON.parse(y):y;if(!g.ok){const _=b?w:void 0,E=_==null?void 0:_.error;throw new $i((E==null?void 0:E.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:E==null?void 0:E.type,icebergCode:E==null?void 0:E.code,details:_})}return{status:g.status,headers:g.headers,data:w}}}}function vl(r){return r.join("")}var a1=class{constructor(r,a=""){this.client=r,this.prefix=a}async listNamespaces(r){const a=r?{parent:vl(r.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:a})).data.namespaces.map(l=>({namespace:l}))}async createNamespace(r,a){const i={namespace:r.namespace,properties:a==null?void 0:a.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:i})).data}async dropNamespace(r){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${vl(r.namespace)}`})}async loadNamespaceMetadata(r){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${vl(r.namespace)}`})).data.properties}}async namespaceExists(r){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${vl(r.namespace)}`}),!0}catch(a){if(a instanceof $i&&a.status===404)return!1;throw a}}async createNamespaceIfNotExists(r,a){try{return await this.createNamespace(r,a)}catch(i){if(i instanceof $i&&i.status===409)return;throw i}}};function vr(r){return r.join("")}var n1=class{constructor(r,a="",i){this.client=r,this.prefix=a,this.accessDelegation=i}async listTables(r){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${vr(r.namespace)}/tables`})).data.identifiers}async createTable(r,a){const i={};return this.accessDelegation&&(i["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${vr(r.namespace)}/tables`,body:a,headers:i})).data.metadata}async updateTable(r,a){const i=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${vr(r.namespace)}/tables/${r.name}`,body:a});return{"metadata-location":i.data["metadata-location"],metadata:i.data.metadata}}async dropTable(r,a){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${vr(r.namespace)}/tables/${r.name}`,query:{purgeRequested:String((a==null?void 0:a.purge)??!1)}})}async loadTable(r){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${vr(r.namespace)}/tables/${r.name}`,headers:a})).data.metadata}async tableExists(r){const a={};this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${vr(r.namespace)}/tables/${r.name}`,headers:a}),!0}catch(i){if(i instanceof $i&&i.status===404)return!1;throw i}}async createTableIfNotExists(r,a){try{return await this.createTable(r,a)}catch(i){if(i instanceof $i&&i.status===409)return await this.loadTable({namespace:r.namespace,name:a.name});throw i}}},r1=class{constructor(r){var l;let a="v1";r.catalogName&&(a+=`/${r.catalogName}`);const i=r.baseUrl.endsWith("/")?r.baseUrl:`${r.baseUrl}/`;this.client=t1({baseUrl:i,auth:r.auth,fetchImpl:r.fetch}),this.accessDelegation=(l=r.accessDelegation)==null?void 0:l.join(","),this.namespaceOps=new a1(this.client,a),this.tableOps=new n1(this.client,a,this.accessDelegation)}async listNamespaces(r){return this.namespaceOps.listNamespaces(r)}async createNamespace(r,a){return this.namespaceOps.createNamespace(r,a)}async dropNamespace(r){await this.namespaceOps.dropNamespace(r)}async loadNamespaceMetadata(r){return this.namespaceOps.loadNamespaceMetadata(r)}async listTables(r){return this.tableOps.listTables(r)}async createTable(r,a){return this.tableOps.createTable(r,a)}async updateTable(r,a){return this.tableOps.updateTable(r,a)}async dropTable(r,a){await this.tableOps.dropTable(r,a)}async loadTable(r){return this.tableOps.loadTable(r)}async namespaceExists(r){return this.namespaceOps.namespaceExists(r)}async tableExists(r){return this.tableOps.tableExists(r)}async createNamespaceIfNotExists(r,a){return this.namespaceOps.createNamespaceIfNotExists(r,a)}async createTableIfNotExists(r,a){return this.tableOps.createTableIfNotExists(r,a)}};function qi(r){"@babel/helpers - typeof";return qi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},qi(r)}function i1(r,a){if(qi(r)!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var l=i.call(r,a);if(qi(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function s1(r){var a=i1(r,"string");return qi(a)=="symbol"?a:a+""}function l1(r,a,i){return(a=s1(a))in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,r}function Ap(r,a){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);a&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),i.push.apply(i,l)}return i}function re(r){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Ap(Object(i),!0).forEach(function(l){l1(r,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Ap(Object(i)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(i,l))})}return r}var $l=class extends Error{constructor(r,a="storage",i,l){super(r),this.__isStorageError=!0,this.namespace=a,this.name=a==="vectors"?"StorageVectorsError":"StorageError",this.status=i,this.statusCode=l}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function ql(r){return typeof r=="object"&&r!==null&&"__isStorageError"in r}var Ru=class extends $l{constructor(r,a,i,l="storage"){super(r,l,a,i),this.name=l==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=a,this.statusCode=i}toJSON(){return re({},super.toJSON())}},Tg=class extends $l{constructor(r,a,i="storage"){super(r,i),this.name=i==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=a}};function Al(r,a,i){const l=re({},r),o=a.toLowerCase();for(const u of Object.keys(l))u.toLowerCase()===o&&delete l[u];return l[o]=i,l}function o1(r){const a={};for(const[i,l]of Object.entries(r))a[i.toLowerCase()]=l;return a}const c1=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),u1=r=>{if(typeof r!="object"||r===null)return!1;const a=Object.getPrototypeOf(r);return(a===null||a===Object.prototype||Object.getPrototypeOf(a)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},Ou=r=>{if(Array.isArray(r))return r.map(i=>Ou(i));if(typeof r=="function"||r!==Object(r))return r;const a={};return Object.entries(r).forEach(([i,l])=>{const o=i.replace(/([-_][a-z])/gi,u=>u.toUpperCase().replace(/[-_]/g,""));a[o]=Ou(l)}),a},d1=r=>!r||typeof r!="string"||r.length===0||r.length>100||r.trim()!==r||r.includes("/")||r.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(r),Np=r=>{if(typeof r=="object"&&r!==null){const a=r;if(typeof a.msg=="string")return a.msg;if(typeof a.message=="string")return a.message;if(typeof a.error_description=="string")return a.error_description;if(typeof a.error=="string")return a.error;if(typeof a.error=="object"&&a.error!==null){const i=a.error;if(typeof i.message=="string")return i.message}}return JSON.stringify(r)},h1=async(r,a,i,l)=>{if(r!==null&&typeof r=="object"&&"json"in r&&typeof r.json=="function"){const o=r;let u=parseInt(String(o.status),10);Number.isFinite(u)||(u=500),o.json().then(f=>{const m=(f==null?void 0:f.statusCode)||(f==null?void 0:f.code)||u+"";a(new Ru(Np(f),u,m,l))}).catch(()=>{const f=u+"";a(new Ru(o.statusText||`HTTP ${u} error`,u,f,l))})}else a(new Tg(Np(r),r,l))},f1=(r,a,i,l)=>{const o={method:r,headers:(a==null?void 0:a.headers)||{}};if(r==="GET"||r==="HEAD"||!l)return re(re({},o),i);if(u1(l)){var u;const f=(a==null?void 0:a.headers)||{};let m;for(const[p,g]of Object.entries(f))p.toLowerCase()==="content-type"&&(m=g);o.headers=Al(f,"Content-Type",(u=m)!==null&&u!==void 0?u:"application/json"),o.body=JSON.stringify(l)}else o.body=l;return a!=null&&a.duplex&&(o.duplex=a.duplex),re(re({},o),i)};async function Ai(r,a,i,l,o,u,f){return new Promise((m,p)=>{r(i,f1(a,l,o,u)).then(g=>{if(!g.ok)throw g;if(l!=null&&l.noResolveJson)return g;if(f==="vectors"){const y=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!y||!y.includes("application/json"))return{}}return g.json()}).then(g=>m(g)).catch(g=>h1(g,p,l,f))})}function Ag(r="storage"){return{get:async(a,i,l,o)=>Ai(a,"GET",i,l,o,void 0,r),post:async(a,i,l,o,u)=>Ai(a,"POST",i,o,u,l,r),put:async(a,i,l,o,u)=>Ai(a,"PUT",i,o,u,l,r),head:async(a,i,l,o)=>Ai(a,"HEAD",i,re(re({},l),{},{noResolveJson:!0}),o,void 0,r),remove:async(a,i,l,o,u)=>Ai(a,"DELETE",i,o,u,l,r)}}const m1=Ag("storage"),{get:Gi,post:Ft,put:zu,head:p1,remove:Fu}=m1,Ct=Ag("vectors");var Rr=class{constructor(r,a={},i,l="storage"){this.shouldThrowOnError=!1,this.url=r,this.headers=o1(a),this.fetch=c1(i),this.namespace=l}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(r,a){return this.headers=Al(this.headers,r,a),this}async handleOperation(r){var a=this;try{return{data:await r(),error:null}}catch(i){if(a.shouldThrowOnError)throw i;if(ql(i))return{data:null,error:i};throw i}}};let Ng;Ng=Symbol.toStringTag;var g1=class{constructor(r,a){this.downloadFn=r,this.shouldThrowOnError=a,this[Ng]="StreamDownloadBuilder",this.promise=null}then(r,a){return this.getPromise().then(r,a)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:(await r.downloadFn()).body,error:null}}catch(a){if(r.shouldThrowOnError)throw a;if(ql(a))return{data:null,error:a};throw a}}};let Cg;Cg=Symbol.toStringTag;var v1=class{constructor(r,a){this.downloadFn=r,this.shouldThrowOnError=a,this[Cg]="BlobDownloadBuilder",this.promise=null}asStream(){return new g1(this.downloadFn,this.shouldThrowOnError)}then(r,a){return this.getPromise().then(r,a)}catch(r){return this.getPromise().catch(r)}finally(r){return this.getPromise().finally(r)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var r=this;try{return{data:await(await r.downloadFn()).blob(),error:null}}catch(a){if(r.shouldThrowOnError)throw a;if(ql(a))return{data:null,error:a};throw a}}};const y1={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Cp={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var b1=class extends Rr{constructor(r,a={},i,l){super(r,a,l,"storage"),this.bucketId=i}async uploadOrUpdate(r,a,i,l){var o=this;return o.handleOperation(async()=>{let u;const f=re(re({},Cp),l);let m=re(re({},o.headers),r==="POST"&&{"x-upsert":String(f.upsert)});const p=f.metadata;if(typeof Blob<"u"&&i instanceof Blob?(u=new FormData,u.append("cacheControl",f.cacheControl),p&&u.append("metadata",o.encodeMetadata(p)),u.append("",i)):typeof FormData<"u"&&i instanceof FormData?(u=i,u.has("cacheControl")||u.append("cacheControl",f.cacheControl),p&&!u.has("metadata")&&u.append("metadata",o.encodeMetadata(p))):(u=i,m["cache-control"]=`max-age=${f.cacheControl}`,m["content-type"]=f.contentType,p&&(m["x-metadata"]=o.toBase64(o.encodeMetadata(p))),(typeof ReadableStream<"u"&&u instanceof ReadableStream||u&&typeof u=="object"&&"pipe"in u&&typeof u.pipe=="function")&&!f.duplex&&(f.duplex="half")),l!=null&&l.headers)for(const[w,_]of Object.entries(l.headers))m=Al(m,w,_);const g=o._removeEmptyFolders(a),y=o._getFinalPath(g),b=await(r=="PUT"?zu:Ft)(o.fetch,`${o.url}/object/${y}`,u,re({headers:m},f!=null&&f.duplex?{duplex:f.duplex}:{}));return{path:g,id:b.Id,fullPath:b.Key}})}async upload(r,a,i){return this.uploadOrUpdate("POST",r,a,i)}async uploadToSignedUrl(r,a,i,l){var o=this;const u=o._removeEmptyFolders(r),f=o._getFinalPath(u),m=new URL(o.url+`/object/upload/sign/${f}`);return m.searchParams.set("token",a),o.handleOperation(async()=>{let p;const g=re(re({},Cp),l);let y=re(re({},o.headers),{"x-upsert":String(g.upsert)});const b=g.metadata;if(typeof Blob<"u"&&i instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),b&&p.append("metadata",o.encodeMetadata(b)),p.append("",i)):typeof FormData<"u"&&i instanceof FormData?(p=i,p.has("cacheControl")||p.append("cacheControl",g.cacheControl),b&&!p.has("metadata")&&p.append("metadata",o.encodeMetadata(b))):(p=i,y["cache-control"]=`max-age=${g.cacheControl}`,y["content-type"]=g.contentType,b&&(y["x-metadata"]=o.toBase64(o.encodeMetadata(b))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!g.duplex&&(g.duplex="half")),l!=null&&l.headers)for(const[w,_]of Object.entries(l.headers))y=Al(y,w,_);return{path:u,fullPath:(await zu(o.fetch,m.toString(),p,re({headers:y},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(r,a){var i=this;return i.handleOperation(async()=>{let l=i._getFinalPath(r);const o=re({},i.headers);a!=null&&a.upsert&&(o["x-upsert"]="true");const u=await Ft(i.fetch,`${i.url}/object/upload/sign/${l}`,{},{headers:o}),f=new URL(i.url+u.url),m=f.searchParams.get("token");if(!m)throw new $l("No token returned by API");return{signedUrl:f.toString(),path:r,token:m}})}async update(r,a,i){return this.uploadOrUpdate("PUT",r,a,i)}async move(r,a,i){var l=this;return l.handleOperation(async()=>await Ft(l.fetch,`${l.url}/object/move`,{bucketId:l.bucketId,sourceKey:r,destinationKey:a,destinationBucket:i==null?void 0:i.destinationBucket},{headers:l.headers}))}async copy(r,a,i){var l=this;return l.handleOperation(async()=>({path:(await Ft(l.fetch,`${l.url}/object/copy`,{bucketId:l.bucketId,sourceKey:r,destinationKey:a,destinationBucket:i==null?void 0:i.destinationBucket},{headers:l.headers})).Key}))}async createSignedUrl(r,a,i){var l=this;return l.handleOperation(async()=>{let o=l._getFinalPath(r);const u=typeof(i==null?void 0:i.transform)=="object"&&i.transform!==null&&Object.keys(i.transform).length>0;let f=await Ft(l.fetch,`${l.url}/object/sign/${o}`,re({expiresIn:a},u?{transform:i.transform}:{}),{headers:l.headers});const m=new URLSearchParams;i!=null&&i.download&&m.set("download",i.download===!0?"":i.download),(i==null?void 0:i.cacheNonce)!=null&&m.set("cacheNonce",String(i.cacheNonce));const p=m.toString();return{signedUrl:encodeURI(`${l.url}${f.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(r,a,i){var l=this;return l.handleOperation(async()=>{const o=await Ft(l.fetch,`${l.url}/object/sign/${l.bucketId}`,{expiresIn:a,paths:r},{headers:l.headers}),u=new URLSearchParams;i!=null&&i.download&&u.set("download",i.download===!0?"":i.download),(i==null?void 0:i.cacheNonce)!=null&&u.set("cacheNonce",String(i.cacheNonce));const f=u.toString();return o.map(m=>re(re({},m),{},{signedUrl:m.signedURL?encodeURI(`${l.url}${m.signedURL}${f?`&${f}`:""}`):null}))})}download(r,a,i){const l=typeof(a==null?void 0:a.transform)=="object"&&a.transform!==null&&Object.keys(a.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;a!=null&&a.transform&&this.applyTransformOptsToQuery(o,a.transform),(a==null?void 0:a.cacheNonce)!=null&&o.set("cacheNonce",String(a.cacheNonce));const u=o.toString(),f=this._getFinalPath(r),m=()=>Gi(this.fetch,`${this.url}/${l}/${f}${u?`?${u}`:""}`,{headers:this.headers,noResolveJson:!0},i);return new v1(m,this.shouldThrowOnError)}async info(r){var a=this;const i=a._getFinalPath(r);return a.handleOperation(async()=>Ou(await Gi(a.fetch,`${a.url}/object/info/${i}`,{headers:a.headers})))}async exists(r){var a=this;const i=a._getFinalPath(r);try{return await p1(a.fetch,`${a.url}/object/${i}`,{headers:a.headers}),{data:!0,error:null}}catch(o){if(a.shouldThrowOnError)throw o;if(ql(o)){var l;const u=o instanceof Ru?o.status:o instanceof Tg?(l=o.originalError)===null||l===void 0?void 0:l.status:void 0;if(u!==void 0&&[400,404].includes(u))return{data:!1,error:o}}throw o}}getPublicUrl(r,a){const i=this._getFinalPath(r),l=new URLSearchParams;a!=null&&a.download&&l.set("download",a.download===!0?"":a.download),a!=null&&a.transform&&this.applyTransformOptsToQuery(l,a.transform),(a==null?void 0:a.cacheNonce)!=null&&l.set("cacheNonce",String(a.cacheNonce));const o=l.toString(),u=typeof(a==null?void 0:a.transform)=="object"&&a.transform!==null&&Object.keys(a.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${u}/public/${i}`)+(o?`?${o}`:"")}}}async remove(r){var a=this;return a.handleOperation(async()=>await Fu(a.fetch,`${a.url}/object/${a.bucketId}`,{prefixes:r},{headers:a.headers}))}async list(r,a,i){var l=this;return l.handleOperation(async()=>{const o=re(re(re({},y1),a),{},{prefix:r||""});return await Ft(l.fetch,`${l.url}/object/list/${l.bucketId}`,o,{headers:l.headers},i)})}async listV2(r,a){var i=this;return i.handleOperation(async()=>{const l=re({},r);return await Ft(i.fetch,`${i.url}/object/list-v2/${i.bucketId}`,l,{headers:i.headers},a)})}encodeMetadata(r){return JSON.stringify(r)}toBase64(r){return typeof Buffer<"u"?Buffer.from(r).toString("base64"):btoa(r)}_getFinalPath(r){return`${this.bucketId}/${r.replace(/^\/+/,"")}`}_removeEmptyFolders(r){return r.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(r,a){return a.width&&r.set("width",a.width.toString()),a.height&&r.set("height",a.height.toString()),a.resize&&r.set("resize",a.resize),a.format&&r.set("format",a.format),a.quality&&r.set("quality",a.quality.toString()),r}};const x1="2.108.2",Xi={"X-Client-Info":`storage-js/${x1}`};var w1=class extends Rr{constructor(r,a={},i,l){const o=new URL(r);l!=null&&l.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const u=o.href.replace(/\/$/,""),f=re(re({},Xi),a);super(u,f,i,"storage")}async listBuckets(r){var a=this;return a.handleOperation(async()=>{const i=a.listBucketOptionsToQueryString(r);return await Gi(a.fetch,`${a.url}/bucket${i}`,{headers:a.headers})})}async getBucket(r){var a=this;return a.handleOperation(async()=>await Gi(a.fetch,`${a.url}/bucket/${r}`,{headers:a.headers}))}async createBucket(r,a={public:!1}){var i=this;return i.handleOperation(async()=>await Ft(i.fetch,`${i.url}/bucket`,{id:r,name:r,type:a.type,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:i.headers}))}async updateBucket(r,a){var i=this;return i.handleOperation(async()=>await zu(i.fetch,`${i.url}/bucket/${r}`,{id:r,name:r,public:a.public,file_size_limit:a.fileSizeLimit,allowed_mime_types:a.allowedMimeTypes},{headers:i.headers}))}async emptyBucket(r){var a=this;return a.handleOperation(async()=>await Ft(a.fetch,`${a.url}/bucket/${r}/empty`,{},{headers:a.headers}))}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await Fu(a.fetch,`${a.url}/bucket/${r}`,{},{headers:a.headers}))}listBucketOptionsToQueryString(r){const a={};return r&&("limit"in r&&(a.limit=String(r.limit)),"offset"in r&&(a.offset=String(r.offset)),r.search&&(a.search=r.search),r.sortColumn&&(a.sortColumn=r.sortColumn),r.sortOrder&&(a.sortOrder=r.sortOrder)),Object.keys(a).length>0?"?"+new URLSearchParams(a).toString():""}},_1=class extends Rr{constructor(r,a={},i){const l=r.replace(/\/$/,""),o=re(re({},Xi),a);super(l,o,i,"storage")}async createBucket(r){var a=this;return a.handleOperation(async()=>await Ft(a.fetch,`${a.url}/bucket`,{name:r},{headers:a.headers}))}async listBuckets(r){var a=this;return a.handleOperation(async()=>{const i=new URLSearchParams;(r==null?void 0:r.limit)!==void 0&&i.set("limit",r.limit.toString()),(r==null?void 0:r.offset)!==void 0&&i.set("offset",r.offset.toString()),r!=null&&r.sortColumn&&i.set("sortColumn",r.sortColumn),r!=null&&r.sortOrder&&i.set("sortOrder",r.sortOrder),r!=null&&r.search&&i.set("search",r.search);const l=i.toString(),o=l?`${a.url}/bucket?${l}`:`${a.url}/bucket`;return await Gi(a.fetch,o,{headers:a.headers})})}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await Fu(a.fetch,`${a.url}/bucket/${r}`,{},{headers:a.headers}))}from(r){var a=this;if(!d1(r))throw new $l("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const i=new r1({baseUrl:this.url,catalogName:r,auth:{type:"custom",getHeaders:async()=>a.headers},fetch:this.fetch}),l=this.shouldThrowOnError;return new Proxy(i,{get(o,u){const f=o[u];return typeof f!="function"?f:async(...m)=>{try{return{data:await f.apply(o,m),error:null}}catch(p){if(l)throw p;return{data:null,error:p}}}}})}},S1=class extends Rr{constructor(r,a={},i){const l=r.replace(/\/$/,""),o=re(re({},Xi),{},{"Content-Type":"application/json"},a);super(l,o,i,"vectors")}async createIndex(r){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/CreateIndex`,r,{headers:a.headers})||{})}async getIndex(r,a){var i=this;return i.handleOperation(async()=>await Ct.post(i.fetch,`${i.url}/GetIndex`,{vectorBucketName:r,indexName:a},{headers:i.headers}))}async listIndexes(r){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/ListIndexes`,r,{headers:a.headers}))}async deleteIndex(r,a){var i=this;return i.handleOperation(async()=>await Ct.post(i.fetch,`${i.url}/DeleteIndex`,{vectorBucketName:r,indexName:a},{headers:i.headers})||{})}},j1=class extends Rr{constructor(r,a={},i){const l=r.replace(/\/$/,""),o=re(re({},Xi),{},{"Content-Type":"application/json"},a);super(l,o,i,"vectors")}async putVectors(r){var a=this;if(r.vectors.length<1||r.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/PutVectors`,r,{headers:a.headers})||{})}async getVectors(r){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/GetVectors`,r,{headers:a.headers}))}async listVectors(r){var a=this;if(r.segmentCount!==void 0){if(r.segmentCount<1||r.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(r.segmentIndex!==void 0&&(r.segmentIndex<0||r.segmentIndex>=r.segmentCount))throw new Error(`segmentIndex must be between 0 and ${r.segmentCount-1}`)}return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/ListVectors`,r,{headers:a.headers}))}async queryVectors(r){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/QueryVectors`,r,{headers:a.headers}))}async deleteVectors(r){var a=this;if(r.keys.length<1||r.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/DeleteVectors`,r,{headers:a.headers})||{})}},k1=class extends Rr{constructor(r,a={},i){const l=r.replace(/\/$/,""),o=re(re({},Xi),{},{"Content-Type":"application/json"},a);super(l,o,i,"vectors")}async createBucket(r){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/CreateVectorBucket`,{vectorBucketName:r},{headers:a.headers})||{})}async getBucket(r){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/GetVectorBucket`,{vectorBucketName:r},{headers:a.headers}))}async listBuckets(r={}){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/ListVectorBuckets`,r,{headers:a.headers}))}async deleteBucket(r){var a=this;return a.handleOperation(async()=>await Ct.post(a.fetch,`${a.url}/DeleteVectorBucket`,{vectorBucketName:r},{headers:a.headers})||{})}},E1=class extends k1{constructor(r,a={}){super(r,a.headers||{},a.fetch)}from(r){return new T1(this.url,this.headers,r,this.fetch)}async createBucket(r){var a=()=>super.createBucket,i=this;return a().call(i,r)}async getBucket(r){var a=()=>super.getBucket,i=this;return a().call(i,r)}async listBuckets(r={}){var a=()=>super.listBuckets,i=this;return a().call(i,r)}async deleteBucket(r){var a=()=>super.deleteBucket,i=this;return a().call(i,r)}},T1=class extends S1{constructor(r,a,i,l){super(r,a,l),this.vectorBucketName=i}async createIndex(r){var a=()=>super.createIndex,i=this;return a().call(i,re(re({},r),{},{vectorBucketName:i.vectorBucketName}))}async listIndexes(r={}){var a=()=>super.listIndexes,i=this;return a().call(i,re(re({},r),{},{vectorBucketName:i.vectorBucketName}))}async getIndex(r){var a=()=>super.getIndex,i=this;return a().call(i,i.vectorBucketName,r)}async deleteIndex(r){var a=()=>super.deleteIndex,i=this;return a().call(i,i.vectorBucketName,r)}index(r){return new A1(this.url,this.headers,this.vectorBucketName,r,this.fetch)}},A1=class extends j1{constructor(r,a,i,l,o){super(r,a,o),this.vectorBucketName=i,this.indexName=l}async putVectors(r){var a=()=>super.putVectors,i=this;return a().call(i,re(re({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async getVectors(r){var a=()=>super.getVectors,i=this;return a().call(i,re(re({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async listVectors(r={}){var a=()=>super.listVectors,i=this;return a().call(i,re(re({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async queryVectors(r){var a=()=>super.queryVectors,i=this;return a().call(i,re(re({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async deleteVectors(r){var a=()=>super.deleteVectors,i=this;return a().call(i,re(re({},r),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}},N1=class extends w1{constructor(r,a={},i,l){super(r,a,i,l)}from(r){return new b1(this.url,this.headers,r,this.fetch)}get vectors(){return new E1(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new _1(this.url+"/iceberg",this.headers,this.fetch)}};const Rg="2.108.2",Ra=30*1e3,zi=3,yu=zi*Ra,C1=2*Ra,R1="http://localhost:9999",O1="supabase.auth.token",z1={"X-Client-Info":`gotrue-js/${Rg}`},Uu="X-Supabase-Api-Version",Og={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},U1=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,D1=600*1e3;class Vi extends Error{constructor(a,i,l){super(a),this.__isAuthError=!0,this.name="AuthError",this.status=i,this.code=l}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function P(r){return typeof r=="object"&&r!==null&&"__isAuthError"in r}class L1 extends Vi{constructor(a,i,l){super(a,i,l),this.name="AuthApiError",this.status=i,this.code=l}}function M1(r){return P(r)&&r.name==="AuthApiError"}class Qt extends Vi{constructor(a,i){super(a),this.name="AuthUnknownError",this.originalError=i}}class ca extends Vi{constructor(a,i,l,o){super(a,l,o),this.name=i,this.status=l}}class We extends ca{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function yl(r){return P(r)&&r.name==="AuthSessionMissingError"}class yr extends ca{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class bl extends ca{constructor(a){super(a,"AuthInvalidCredentialsError",400,void 0)}}class xl extends ca{constructor(a,i=null){super(a,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function B1(r){return P(r)&&r.name==="AuthImplicitGrantRedirectError"}class Rp extends ca{constructor(a,i=null){super(a,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class H1 extends ca{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Du extends ca{constructor(a,i){super(a,"AuthRetryableFetchError",i,void 0)}}function Op(r){return P(r)&&r.name==="AuthRetryableFetchError"}class zp extends ca{constructor(a="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(a,"AuthRefreshDiscardedError",409,void 0)}}function $1(r){return P(r)&&r.name==="AuthRefreshDiscardedError"}class Up extends ca{constructor(a,i,l){super(a,"AuthWeakPasswordError",i,"weak_password"),this.reasons=l}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Nl extends ca{constructor(a){super(a,"AuthInvalidJwtError",400,"invalid_jwt")}}const Cl="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Dp=` 	
\r=`.split(""),q1=(()=>{const r=new Array(128);for(let a=0;a<r.length;a+=1)r[a]=-1;for(let a=0;a<Dp.length;a+=1)r[Dp[a].charCodeAt(0)]=-2;for(let a=0;a<Cl.length;a+=1)r[Cl[a].charCodeAt(0)]=a;return r})();function Lp(r,a,i){if(r!==null)for(a.queue=a.queue<<8|r,a.queuedBits+=8;a.queuedBits>=6;){const l=a.queue>>a.queuedBits-6&63;i(Cl[l]),a.queuedBits-=6}else if(a.queuedBits>0)for(a.queue=a.queue<<6-a.queuedBits,a.queuedBits=6;a.queuedBits>=6;){const l=a.queue>>a.queuedBits-6&63;i(Cl[l]),a.queuedBits-=6}}function zg(r,a,i){const l=q1[r];if(l>-1)for(a.queue=a.queue<<6|l,a.queuedBits+=6;a.queuedBits>=8;)i(a.queue>>a.queuedBits-8&255),a.queuedBits-=8;else{if(l===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(r)}"`)}}function Mp(r){const a=[],i=f=>{a.push(String.fromCodePoint(f))},l={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},u=f=>{Y1(f,l,i)};for(let f=0;f<r.length;f+=1)zg(r.charCodeAt(f),o,u);return a.join("")}function G1(r,a){if(r<=127){a(r);return}else if(r<=2047){a(192|r>>6),a(128|r&63);return}else if(r<=65535){a(224|r>>12),a(128|r>>6&63),a(128|r&63);return}else if(r<=1114111){a(240|r>>18),a(128|r>>12&63),a(128|r>>6&63),a(128|r&63);return}throw new Error(`Unrecognized Unicode codepoint: ${r.toString(16)}`)}function V1(r,a){for(let i=0;i<r.length;i+=1){let l=r.charCodeAt(i);if(l>55295&&l<=56319){const o=(l-55296)*1024&65535;l=(r.charCodeAt(i+1)-56320&65535|o)+65536,i+=1}G1(l,a)}}function Y1(r,a,i){if(a.utf8seq===0){if(r<=127){i(r);return}for(let l=1;l<6;l+=1)if((r>>7-l&1)===0){a.utf8seq=l;break}if(a.utf8seq===2)a.codepoint=r&31;else if(a.utf8seq===3)a.codepoint=r&15;else if(a.utf8seq===4)a.codepoint=r&7;else throw new Error("Invalid UTF-8 sequence");a.utf8seq-=1}else if(a.utf8seq>0){if(r<=127)throw new Error("Invalid UTF-8 sequence");a.codepoint=a.codepoint<<6|r&63,a.utf8seq-=1,a.utf8seq===0&&i(a.codepoint)}}function Er(r){const a=[],i={queue:0,queuedBits:0},l=o=>{a.push(o)};for(let o=0;o<r.length;o+=1)zg(r.charCodeAt(o),i,l);return new Uint8Array(a)}function K1(r){const a=[];return V1(r,i=>a.push(i)),new Uint8Array(a)}function Rn(r){const a=[],i={queue:0,queuedBits:0},l=o=>{a.push(o)};return r.forEach(o=>Lp(o,i,l)),Lp(null,i,l),a.join("")}function P1(r){return Math.round(Date.now()/1e3)+r}function I1(){return Symbol("auth-callback")}const it=()=>typeof window<"u"&&typeof document<"u",Tn={tested:!1,writable:!1},Ug=()=>{if(!it())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(Tn.tested)return Tn.writable;const r=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(r,r),globalThis.localStorage.removeItem(r),Tn.tested=!0,Tn.writable=!0}catch{Tn.tested=!0,Tn.writable=!1}return Tn.writable};function X1(r){const a={},i=new URL(r);if(i.hash&&i.hash[0]==="#")try{new URLSearchParams(i.hash.substring(1)).forEach((o,u)=>{a[u]=o})}catch{}return i.searchParams.forEach((l,o)=>{a[o]=l}),a}const Dg=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),J1=r=>typeof r=="object"&&r!==null&&"status"in r&&"ok"in r&&"json"in r&&typeof r.json=="function",jr=async(r,a,i)=>{await r.setItem(a,JSON.stringify(i))},Xt=async(r,a)=>{const i=await r.getItem(a);if(!i)return null;try{return JSON.parse(i)}catch{return null}},qe=async(r,a)=>{await r.removeItem(a)};class Gl{constructor(){this.promise=new Gl.promiseConstructor((a,i)=>{this.resolve=a,this.reject=i})}}Gl.promiseConstructor=Promise;function wl(r){const a=r.split(".");if(a.length!==3)throw new Nl("Invalid JWT structure");for(let l=0;l<a.length;l++)if(!U1.test(a[l]))throw new Nl("JWT not in base64url format");return{header:JSON.parse(Mp(a[0])),payload:JSON.parse(Mp(a[1])),signature:Er(a[2]),raw:{header:a[0],payload:a[1]}}}async function F1(r){return await new Promise(a=>{setTimeout(()=>a(null),r)})}function Q1(r,a){return new Promise((l,o)=>{(async()=>{for(let u=0;u<1/0;u++)try{const f=await r(u);if(!a(u,null,f)){l(f);return}}catch(f){if(!a(u,f)){o(f);return}}})()})}function W1(r){return("0"+r.toString(16)).substr(-2)}function Z1(){const a=new Uint32Array(56);if(typeof crypto>"u"){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",l=i.length;let o="";for(let u=0;u<56;u++)o+=i.charAt(Math.floor(Math.random()*l));return o}return crypto.getRandomValues(a),Array.from(a,W1).join("")}async function e2(r){const i=new TextEncoder().encode(r),l=await crypto.subtle.digest("SHA-256",i),o=new Uint8Array(l);return Array.from(o).map(u=>String.fromCharCode(u)).join("")}async function t2(r){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),r;const i=await e2(r);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function An(r,a,i=!1){const l=Z1();let o=l;i&&(o+="/recovery"),await jr(r,`${a}-code-verifier`,o);const u=await t2(l);return[u,l===u?"plain":"s256"]}const a2=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function n2(r){const a=r.headers.get(Uu);if(!a||!a.match(a2))return null;try{return new Date(`${a}T00:00:00.0Z`)}catch{return null}}function r2(r){if(!r)throw new Error("Missing exp claim");const a=Math.floor(Date.now()/1e3);if(r<=a)throw new Error("JWT has expired")}function i2(r){switch(r){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const s2=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function Aa(r){if(!s2.test(r))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Jt(r){if(!r.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function bu(){const r={};return new Proxy(r,{get:(a,i)=>{if(i==="__isUserNotAvailableProxy")return!0;if(typeof i=="symbol"){const l=i.toString();if(l==="Symbol(Symbol.toPrimitive)"||l==="Symbol(Symbol.toStringTag)"||l==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${i}" property of the session object is not supported. Please use getUser() instead.`)},set:(a,i)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(a,i)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function l2(r,a){return new Proxy(r,{get:(i,l,o)=>{if(l==="__isInsecureUserWarningProxy")return!0;if(typeof l=="symbol"){const u=l.toString();if(u==="Symbol(Symbol.toPrimitive)"||u==="Symbol(Symbol.toStringTag)"||u==="Symbol(util.inspect.custom)"||u==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(i,l,o)}return!a.value&&typeof l=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),a.value=!0),Reflect.get(i,l,o)}})}function Bp(r){return JSON.parse(JSON.stringify(r))}const Nn=r=>{if(typeof r=="object"&&r!==null){const a=r;if(typeof a.msg=="string")return a.msg;if(typeof a.message=="string")return a.message;if(typeof a.error_description=="string")return a.error_description;if(typeof a.error=="string")return a.error}return JSON.stringify(r)},o2=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Hp(r){var a;if(!J1(r))throw new Du(Nn(r),0);if(o2.includes(r.status))throw new Du(Nn(r),r.status);let i;try{i=await r.json()}catch(u){throw new Qt(Nn(u),u)}let l;const o=n2(r);if(o&&o.getTime()>=Og["2024-01-01"].timestamp&&typeof i=="object"&&i&&typeof i.code=="string"?l=i.code:typeof i=="object"&&i&&typeof i.error_code=="string"&&(l=i.error_code),l){if(l==="weak_password")throw new Up(Nn(i),r.status,((a=i.weak_password)===null||a===void 0?void 0:a.reasons)||[]);if(l==="session_not_found")throw new We}else if(typeof i=="object"&&i&&typeof i.weak_password=="object"&&i.weak_password&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.reasons.reduce((u,f)=>u&&typeof f=="string",!0))throw new Up(Nn(i),r.status,i.weak_password.reasons);throw new L1(Nn(i),r.status||500,l)}const c2=(r,a,i,l)=>{const o={method:r,headers:(a==null?void 0:a.headers)||{}};return r==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},a==null?void 0:a.headers),o.body=JSON.stringify(l),Object.assign(Object.assign({},o),i))};async function F(r,a,i,l){var o;const u=Object.assign({},l==null?void 0:l.headers);u[Uu]||(u[Uu]=Og["2024-01-01"].name),l!=null&&l.jwt&&(u.Authorization=`Bearer ${l.jwt}`);const f=(o=l==null?void 0:l.query)!==null&&o!==void 0?o:{};l!=null&&l.redirectTo&&(f.redirect_to=l.redirectTo);const m=Object.keys(f).length?"?"+new URLSearchParams(f).toString():"",p=await u2(r,a,i+m,{headers:u,noResolveJson:l==null?void 0:l.noResolveJson},{},l==null?void 0:l.body);return l!=null&&l.xform?l==null?void 0:l.xform(p):{data:Object.assign({},p),error:null}}async function u2(r,a,i,l,o,u){const f=c2(a,l,o,u);let m;try{m=await r(i,Object.assign({},f))}catch(p){throw console.error(p),new Du(Nn(p),0)}if(m.ok||await Hp(m),l!=null&&l.noResolveJson)return m;try{return await m.json()}catch(p){await Hp(p)}}function Yt(r){var a;let i=null;f2(r)&&(i=Object.assign({},r),r.expires_at||(i.expires_at=P1(r.expires_in)));const l=(a=r.user)!==null&&a!==void 0?a:typeof(r==null?void 0:r.id)=="string"?r:null;return{data:{session:i,user:l},error:null}}function $p(r){const a=Yt(r);return!a.error&&r.weak_password&&typeof r.weak_password=="object"&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.message&&typeof r.weak_password.message=="string"&&r.weak_password.reasons.reduce((i,l)=>i&&typeof l=="string",!0)&&(a.data.weak_password=r.weak_password),a}function ln(r){var a;return{data:{user:(a=r.user)!==null&&a!==void 0?a:r},error:null}}function d2(r){return{data:r,error:null}}function h2(r){const{action_link:a,email_otp:i,hashed_token:l,redirect_to:o,verification_type:u}=r,f=Hl(r,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),m={action_link:a,email_otp:i,hashed_token:l,redirect_to:o,verification_type:u},p=Object.assign({},f);return{data:{properties:m,user:p},error:null}}function qp(r){return r}function f2(r){return!!r.access_token&&!!r.refresh_token&&!!r.expires_in}const xu=["global","local","others"];class m2{constructor({url:a="",headers:i={},fetch:l,experimental:o}){this.url=a,this.headers=i,this.fetch=Dg(l),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(a,i=xu[0]){if(xu.indexOf(i)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${xu.join(", ")}`);try{return await F(this.fetch,"POST",`${this.url}/logout?scope=${i}`,{headers:this.headers,jwt:a,noResolveJson:!0}),{data:null,error:null}}catch(l){if(P(l))return{data:null,error:l};throw l}}async inviteUserByEmail(a,i={}){try{return await F(this.fetch,"POST",`${this.url}/invite`,{body:{email:a,data:i.data},headers:this.headers,redirectTo:i.redirectTo,xform:ln})}catch(l){if(P(l))return{data:{user:null},error:l};throw l}}async generateLink(a){try{const{options:i}=a,l=Hl(a,["options"]),o=Object.assign(Object.assign({},l),i);return"newEmail"in l&&(o.new_email=l==null?void 0:l.newEmail,delete o.newEmail),await F(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:h2,redirectTo:i==null?void 0:i.redirectTo})}catch(i){if(P(i))return{data:{properties:null,user:null},error:i};throw i}}async createUser(a){try{return await F(this.fetch,"POST",`${this.url}/admin/users`,{body:a,headers:this.headers,xform:ln})}catch(i){if(P(i))return{data:{user:null},error:i};throw i}}async listUsers(a){var i,l,o,u,f,m,p;try{const g={nextPage:null,lastPage:0,total:0},y=await F(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(i=a==null?void 0:a.page)===null||i===void 0?void 0:i.toString())!==null&&l!==void 0?l:"",per_page:(u=(o=a==null?void 0:a.perPage)===null||o===void 0?void 0:o.toString())!==null&&u!==void 0?u:""},xform:qp});if(y.error)throw y.error;const b=await y.json(),w=(f=y.headers.get("x-total-count"))!==null&&f!==void 0?f:0,_=(p=(m=y.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return _.length>0&&(_.forEach(E=>{const N=parseInt(E.split(";")[0].split("=")[1].substring(0,1)),D=JSON.parse(E.split(";")[1].split("=")[1]);g[`${D}Page`]=N}),g.total=parseInt(w)),{data:Object.assign(Object.assign({},b),g),error:null}}catch(g){if(P(g))return{data:{users:[]},error:g};throw g}}async getUserById(a){Aa(a);try{return await F(this.fetch,"GET",`${this.url}/admin/users/${a}`,{headers:this.headers,xform:ln})}catch(i){if(P(i))return{data:{user:null},error:i};throw i}}async updateUserById(a,i){Aa(a);try{return await F(this.fetch,"PUT",`${this.url}/admin/users/${a}`,{body:i,headers:this.headers,xform:ln})}catch(l){if(P(l))return{data:{user:null},error:l};throw l}}async deleteUser(a,i=!1){Aa(a);try{return await F(this.fetch,"DELETE",`${this.url}/admin/users/${a}`,{headers:this.headers,body:{should_soft_delete:i},xform:ln})}catch(l){if(P(l))return{data:{user:null},error:l};throw l}}async _listFactors(a){Aa(a.userId);try{const{data:i,error:l}=await F(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:i,error:l}}catch(i){if(P(i))return{data:null,error:i};throw i}}async _deleteFactor(a){Aa(a.userId),Aa(a.id);try{return{data:await F(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/factors/${a.id}`,{headers:this.headers}),error:null}}catch(i){if(P(i))return{data:null,error:i};throw i}}async _listOAuthClients(a){var i,l,o,u,f,m,p;try{const g={nextPage:null,lastPage:0,total:0},y=await F(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(l=(i=a==null?void 0:a.page)===null||i===void 0?void 0:i.toString())!==null&&l!==void 0?l:"",per_page:(u=(o=a==null?void 0:a.perPage)===null||o===void 0?void 0:o.toString())!==null&&u!==void 0?u:""},xform:qp});if(y.error)throw y.error;const b=await y.json(),w=(f=y.headers.get("x-total-count"))!==null&&f!==void 0?f:0,_=(p=(m=y.headers.get("link"))===null||m===void 0?void 0:m.split(","))!==null&&p!==void 0?p:[];return _.length>0&&(_.forEach(E=>{const N=parseInt(E.split(";")[0].split("=")[1].substring(0,1)),D=JSON.parse(E.split(";")[1].split("=")[1]);g[`${D}Page`]=N}),g.total=parseInt(w)),{data:Object.assign(Object.assign({},b),g),error:null}}catch(g){if(P(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(a){try{return await F(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:a,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(P(i))return{data:null,error:i};throw i}}async _getOAuthClient(a){try{return await F(this.fetch,"GET",`${this.url}/admin/oauth/clients/${a}`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(P(i))return{data:null,error:i};throw i}}async _updateOAuthClient(a,i){try{return await F(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${a}`,{body:i,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(P(l))return{data:null,error:l};throw l}}async _deleteOAuthClient(a){try{return await F(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${a}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(i){if(P(i))return{data:null,error:i};throw i}}async _regenerateOAuthClientSecret(a){try{return await F(this.fetch,"POST",`${this.url}/admin/oauth/clients/${a}/regenerate_secret`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(P(i))return{data:null,error:i};throw i}}async _listCustomProviders(a){try{const i={};return a!=null&&a.type&&(i.type=a.type),await F(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:i,xform:l=>{var o;return{data:{providers:(o=l==null?void 0:l.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(i){if(P(i))return{data:{providers:[]},error:i};throw i}}async _createCustomProvider(a){try{return await F(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:a,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(P(i))return{data:null,error:i};throw i}}async _getCustomProvider(a){try{return await F(this.fetch,"GET",`${this.url}/admin/custom-providers/${a}`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(P(i))return{data:null,error:i};throw i}}async _updateCustomProvider(a,i){try{return await F(this.fetch,"PUT",`${this.url}/admin/custom-providers/${a}`,{body:i,headers:this.headers,xform:l=>({data:l,error:null})})}catch(l){if(P(l))return{data:null,error:l};throw l}}async _deleteCustomProvider(a){try{return await F(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${a}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(i){if(P(i))return{data:null,error:i};throw i}}async _adminListPasskeys(a){Jt(this.experimental),Aa(a.userId);try{return await F(this.fetch,"GET",`${this.url}/admin/users/${a.userId}/passkeys`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(P(i))return{data:null,error:i};throw i}}async _adminDeletePasskey(a){Jt(this.experimental),Aa(a.userId),Aa(a.passkeyId);try{return await F(this.fetch,"DELETE",`${this.url}/admin/users/${a.userId}/passkeys/${a.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(i){if(P(i))return{data:null,error:i};throw i}}}function Gp(r={}){return{getItem:a=>r[a]||null,setItem:(a,i)=>{r[a]=i},removeItem:a=>{delete r[a]}}}globalThis&&Ug()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class p2 extends Error{constructor(a){super(a),this.isAcquireTimeout=!0}}function g2(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Lg(r){if(!/^0x[a-fA-F0-9]{40}$/.test(r))throw new Error(`@supabase/auth-js: Address "${r}" is invalid.`);return r.toLowerCase()}function v2(r){return parseInt(r,16)}function y2(r){const a=new TextEncoder().encode(r);return"0x"+Array.from(a,l=>l.toString(16).padStart(2,"0")).join("")}function b2(r){var a;const{chainId:i,domain:l,expirationTime:o,issuedAt:u=new Date,nonce:f,notBefore:m,requestId:p,resources:g,scheme:y,uri:b,version:w}=r;{if(!Number.isInteger(i))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${i}`);if(!l)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(f&&f.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${f}`);if(!b)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(w!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${w}`);if(!((a=r.statement)===null||a===void 0)&&a.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${r.statement}`)}const _=Lg(r.address),E=y?`${y}://${l}`:l,N=r.statement?`${r.statement}
`:"",D=`${E} wants you to sign in with your Ethereum account:
${_}

${N}`;let z=`URI: ${b}
Version: ${w}
Chain ID: ${i}${f?`
Nonce: ${f}`:""}
Issued At: ${u.toISOString()}`;if(o&&(z+=`
Expiration Time: ${o.toISOString()}`),m&&(z+=`
Not Before: ${m.toISOString()}`),p&&(z+=`
Request ID: ${p}`),g){let Y=`
Resources:`;for(const H of g){if(!H||typeof H!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${H}`);Y+=`
- ${H}`}z+=Y}return`${D}
${z}`}class Ie extends Error{constructor({message:a,code:i,cause:l,name:o}){var u;super(a,{cause:l}),this.__isWebAuthnError=!0,this.name=(u=o??(l instanceof Error?l.name:void 0))!==null&&u!==void 0?u:"Unknown Error",this.code=i}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class Rl extends Ie{constructor(a,i){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i,message:a}),this.name="WebAuthnUnknownError",this.originalError=i}}function x2({error:r,options:a}){var i,l,o;const{publicKey:u}=a;if(!u)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(a.signal instanceof AbortSignal)return new Ie({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else if(r.name==="ConstraintError"){if(((i=u.authenticatorSelection)===null||i===void 0?void 0:i.requireResidentKey)===!0)return new Ie({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:r});if(a.mediation==="conditional"&&((l=u.authenticatorSelection)===null||l===void 0?void 0:l.userVerification)==="required")return new Ie({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:r});if(((o=u.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new Ie({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:r})}else{if(r.name==="InvalidStateError")return new Ie({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:r});if(r.name==="NotAllowedError")return new Ie({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="NotSupportedError")return u.pubKeyCredParams.filter(m=>m.type==="public-key").length===0?new Ie({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:r}):new Ie({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:r});if(r.name==="SecurityError"){const f=window.location.hostname;if(Mg(f)){if(u.rp.id!==f)return new Ie({message:`The RP ID "${u.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new Ie({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="TypeError"){if(u.user.id.byteLength<1||u.user.id.byteLength>64)return new Ie({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:r})}else if(r.name==="UnknownError")return new Ie({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new Ie({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}function w2({error:r,options:a}){const{publicKey:i}=a;if(!i)throw Error("options was missing required publicKey property");if(r.name==="AbortError"){if(a.signal instanceof AbortSignal)return new Ie({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:r})}else{if(r.name==="NotAllowedError")return new Ie({message:r.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r});if(r.name==="SecurityError"){const l=window.location.hostname;if(Mg(l)){if(i.rpId!==l)return new Ie({message:`The RP ID "${i.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:r})}else return new Ie({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:r})}else if(r.name==="UnknownError")return new Ie({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:r})}return new Ie({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r})}class _2{createNewAbortSignal(){if(this.controller){const i=new Error("Cancelling existing WebAuthn API call for new one");i.name="AbortError",this.controller.abort(i)}const a=new AbortController;return this.controller=a,a.signal}cancelCeremony(){if(this.controller){const a=new Error("Manually cancelling existing WebAuthn API call");a.name="AbortError",this.controller.abort(a),this.controller=void 0}}}const Lu=new _2;function Vp(r){if(!r)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(r);const{challenge:a,user:i,excludeCredentials:l}=r,o=Hl(r,["challenge","user","excludeCredentials"]),u=Er(a).buffer,f=Object.assign(Object.assign({},i),{id:Er(i.id).buffer}),m=Object.assign(Object.assign({},o),{challenge:u,user:f});if(l&&l.length>0){m.excludeCredentials=new Array(l.length);for(let p=0;p<l.length;p++){const g=l[p];m.excludeCredentials[p]=Object.assign(Object.assign({},g),{id:Er(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return m}function Yp(r){if(!r)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(r);const{challenge:a,allowCredentials:i}=r,l=Hl(r,["challenge","allowCredentials"]),o=Er(a).buffer,u=Object.assign(Object.assign({},l),{challenge:o});if(i&&i.length>0){u.allowCredentials=new Array(i.length);for(let f=0;f<i.length;f++){const m=i[f];u.allowCredentials[f]=Object.assign(Object.assign({},m),{id:Er(m.id).buffer,type:m.type||"public-key",transports:m.transports})}}return u}function Kp(r){var a;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const i=r;return{id:r.id,rawId:r.id,response:{attestationObject:Rn(new Uint8Array(r.response.attestationObject)),clientDataJSON:Rn(new Uint8Array(r.response.clientDataJSON))},type:"public-key",clientExtensionResults:r.getClientExtensionResults(),authenticatorAttachment:(a=i.authenticatorAttachment)!==null&&a!==void 0?a:void 0}}function Pp(r){var a;if("toJSON"in r&&typeof r.toJSON=="function")return r.toJSON();const i=r,l=r.getClientExtensionResults(),o=r.response;return{id:r.id,rawId:r.id,response:{authenticatorData:Rn(new Uint8Array(o.authenticatorData)),clientDataJSON:Rn(new Uint8Array(o.clientDataJSON)),signature:Rn(new Uint8Array(o.signature)),userHandle:o.userHandle?Rn(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:l,authenticatorAttachment:(a=i.authenticatorAttachment)!==null&&a!==void 0?a:void 0}}function Mg(r){return r==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(r)}function Ol(){var r,a;return!!(it()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((r=navigator==null?void 0:navigator.credentials)===null||r===void 0?void 0:r.create)=="function"&&typeof((a=navigator==null?void 0:navigator.credentials)===null||a===void 0?void 0:a.get)=="function")}async function Bg(r){try{const a=await navigator.credentials.create(r);return a?a instanceof PublicKeyCredential?{data:a,error:null}:{data:null,error:new Rl("Browser returned unexpected credential type",a)}:{data:null,error:new Rl("Empty credential response",a)}}catch(a){return{data:null,error:x2({error:a,options:r})}}}async function Hg(r){try{const a=await navigator.credentials.get(r);return a?a instanceof PublicKeyCredential?{data:a,error:null}:{data:null,error:new Rl("Browser returned unexpected credential type",a)}:{data:null,error:new Rl("Empty credential response",a)}}catch(a){return{data:null,error:w2({error:a,options:r})}}}const S2={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},j2={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function zl(...r){const a=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),i=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),l={};for(const o of r)if(o)for(const u in o){const f=o[u];if(f!==void 0)if(Array.isArray(f))l[u]=f;else if(i(f))l[u]=f;else if(a(f)){const m=l[u];a(m)?l[u]=zl(m,f):l[u]=zl(f)}else l[u]=f}return l}function k2(r,a){return zl(S2,r,a||{})}function E2(r,a){return zl(j2,r,a||{})}class T2{constructor(a){this.client=a,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(a){return this.client.mfa.enroll(Object.assign(Object.assign({},a),{factorType:"webauthn"}))}async _challenge({factorId:a,webauthn:i,friendlyName:l,signal:o},u){var f;try{const{data:m,error:p}=await this.client.mfa.challenge({factorId:a,webauthn:i});if(!m)return{data:null,error:p};const g=o??Lu.createNewAbortSignal();if(m.webauthn.type==="create"){const{user:y}=m.webauthn.credential_options.publicKey;if(!y.name){const b=l;if(b)y.name=`${y.id}:${b}`;else{const _=(await this.client.getUser()).data.user,E=((f=_==null?void 0:_.user_metadata)===null||f===void 0?void 0:f.name)||(_==null?void 0:_.email)||(_==null?void 0:_.id)||"User";y.name=`${y.id}:${E}`}}y.displayName||(y.displayName=y.name)}switch(m.webauthn.type){case"create":{const y=k2(m.webauthn.credential_options.publicKey,u==null?void 0:u.create),{data:b,error:w}=await Bg({publicKey:y,signal:g});return b?{data:{factorId:a,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:b}},error:null}:{data:null,error:w}}case"request":{const y=E2(m.webauthn.credential_options.publicKey,u==null?void 0:u.request),{data:b,error:w}=await Hg(Object.assign(Object.assign({},m.webauthn.credential_options),{publicKey:y,signal:g}));return b?{data:{factorId:a,challengeId:m.id,webauthn:{type:m.webauthn.type,credential_response:b}},error:null}:{data:null,error:w}}}}catch(m){return P(m)?{data:null,error:m}:{data:null,error:new Qt("Unexpected error in challenge",m)}}}async _verify({challengeId:a,factorId:i,webauthn:l}){return this.client.mfa.verify({factorId:i,challengeId:a,webauthn:l})}async _authenticate({factorId:a,webauthn:{rpId:i=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},u){if(!i)return{data:null,error:new Vi("rpId is required for WebAuthn authentication")};try{if(!Ol())return{data:null,error:new Qt("Browser does not support WebAuthn",null)};const{data:f,error:m}=await this.challenge({factorId:a,webauthn:{rpId:i,rpOrigins:l},signal:o},{request:u});if(!f)return{data:null,error:m};const{webauthn:p}=f;return this._verify({factorId:a,challengeId:f.challengeId,webauthn:{type:p.type,rpId:i,rpOrigins:l,credential_response:p.credential_response}})}catch(f){return P(f)?{data:null,error:f}:{data:null,error:new Qt("Unexpected error in authenticate",f)}}}async _register({friendlyName:a,webauthn:{rpId:i=typeof window<"u"?window.location.hostname:void 0,rpOrigins:l=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},u){if(!i)return{data:null,error:new Vi("rpId is required for WebAuthn registration")};try{if(!Ol())return{data:null,error:new Qt("Browser does not support WebAuthn",null)};const{data:f,error:m}=await this._enroll({friendlyName:a});if(!f)return await this.client.mfa.listFactors().then(y=>{var b;return(b=y.data)===null||b===void 0?void 0:b.all.find(w=>w.factor_type==="webauthn"&&w.friendly_name===a&&w.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y==null?void 0:y.id}):void 0),{data:null,error:m};const{data:p,error:g}=await this._challenge({factorId:f.id,friendlyName:f.friendly_name,webauthn:{rpId:i,rpOrigins:l},signal:o},{create:u});return p?this._verify({factorId:f.id,challengeId:p.challengeId,webauthn:{rpId:i,rpOrigins:l,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:g}}catch(f){return P(f)?{data:null,error:f}:{data:null,error:new Qt("Unexpected error in register",f)}}}}g2();const A2={url:R1,storageKey:O1,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:z1,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},br={};class Yi{get jwks(){var a,i;return(i=(a=br[this.storageKey])===null||a===void 0?void 0:a.jwks)!==null&&i!==void 0?i:{keys:[]}}set jwks(a){br[this.storageKey]=Object.assign(Object.assign({},br[this.storageKey]),{jwks:a})}get jwks_cached_at(){var a,i;return(i=(a=br[this.storageKey])===null||a===void 0?void 0:a.cachedAt)!==null&&i!==void 0?i:Number.MIN_SAFE_INTEGER}set jwks_cached_at(a){br[this.storageKey]=Object.assign(Object.assign({},br[this.storageKey]),{cachedAt:a})}constructor(a){var i,l,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const u=Object.assign(Object.assign({},A2),a);if(this.storageKey=u.storageKey,this.instanceID=(i=Yi.nextInstanceID[this.storageKey])!==null&&i!==void 0?i:0,Yi.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!u.debug,typeof u.debug=="function"&&(this.logger=u.debug),this.instanceID>0&&it()){const f=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(f),this.logDebugMessages&&console.trace(f)}if(this.persistSession=u.persistSession,this.autoRefreshToken=u.autoRefreshToken,this.experimental=(l=u.experimental)!==null&&l!==void 0?l:{},this.admin=new m2({url:u.url,headers:u.headers,fetch:u.fetch,experimental:this.experimental}),this.url=u.url,this.headers=u.headers,this.fetch=Dg(u.fetch),this.detectSessionInUrl=u.detectSessionInUrl,this.flowType=u.flowType,this.hasCustomAuthorizationHeader=u.hasCustomAuthorizationHeader,this.throwOnError=u.throwOnError,this.lockAcquireTimeout=u.lockAcquireTimeout,u.lock!=null&&(this.lock=u.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new T2(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(u.storage?this.storage=u.storage:Ug()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Gp(this.memoryStorage)),u.userStorage&&(this.userStorage=u.userStorage)):(this.memoryStorage={},this.storage=Gp(this.memoryStorage)),it()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(f){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",f)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async f=>{this._debug("received broadcast notification from other tab or client",f),(f.data.event==="TOKEN_REFRESHED"||f.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(f.data.event,f.data.session,!1)}catch(m){this._debug("#broadcastChannel","error",m)}})}u.skipAutoInitialize||this.initialize().catch(f=>{this._debug("#initialize()","error",f)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(a){if(this.throwOnError&&a&&a.error)throw a.error;return a}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Rg}) ${new Date().toISOString()}`}_debug(...a){return this.logDebugMessages&&this.logger(this._logPrefix(),...a),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var a;try{let i={},l="none";if(it()&&(i=X1(window.location.href),this._isImplicitGrantCallback(i)?l="implicit":await this._isPKCECallback(i)&&(l="pkce")),it()&&this.detectSessionInUrl&&l!=="none"){const{data:o,error:u}=await this._getSessionFromURL(i,l);if(u){if(this._debug("#_initialize()","error detecting session from URL",u),B1(u)){const p=(a=u.details)===null||a===void 0?void 0:a.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:u}}return{error:u}}const{session:f,redirectType:m}=o;return this._debug("#_initialize()","detected session in URL",f,"redirect type",m),await this._saveSession(f),setTimeout(async()=>{m==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",f):await this._notifyAllSubscribers("SIGNED_IN",f)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(i){return P(i)?this._returnResult({error:i}):this._returnResult({error:new Qt("Unexpected error during initialization",i)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(a){var i,l,o;try{const u=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(l=(i=a==null?void 0:a.options)===null||i===void 0?void 0:i.data)!==null&&l!==void 0?l:{},gotrue_meta_security:{captcha_token:(o=a==null?void 0:a.options)===null||o===void 0?void 0:o.captchaToken}},xform:Yt}),{data:f,error:m}=u;if(m||!f)return this._returnResult({data:{user:null,session:null},error:m});const p=f.session,g=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(u){if(P(u))return this._returnResult({data:{user:null,session:null},error:u});throw u}}async signUp(a){var i,l,o;try{let u;if("email"in a){const{email:y,password:b,options:w}=a;let _=null,E=null;this.flowType==="pkce"&&([_,E]=await An(this.storage,this.storageKey)),u=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:w==null?void 0:w.emailRedirectTo,body:{email:y,password:b,data:(i=w==null?void 0:w.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:w==null?void 0:w.captchaToken},code_challenge:_,code_challenge_method:E},xform:Yt})}else if("phone"in a){const{phone:y,password:b,options:w}=a;u=await F(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:b,data:(l=w==null?void 0:w.data)!==null&&l!==void 0?l:{},channel:(o=w==null?void 0:w.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:w==null?void 0:w.captchaToken}},xform:Yt})}else throw new bl("You must provide either an email or phone number and a password");const{data:f,error:m}=u;if(m||!f)return await qe(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:m});const p=f.session,g=f.user;return f.session&&(await this._saveSession(f.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(u){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(u))return this._returnResult({data:{user:null,session:null},error:u});throw u}}async signInWithPassword(a){try{let i;if("email"in a){const{email:u,password:f,options:m}=a;i=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:u,password:f,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:$p})}else if("phone"in a){const{phone:u,password:f,options:m}=a;i=await F(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:u,password:f,gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:$p})}else throw new bl("You must provide either an email or phone number and a password");const{data:l,error:o}=i;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!l||!l.session||!l.user){const u=new yr;return this._returnResult({data:{user:null,session:null},error:u})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:Object.assign({user:l.user,session:l.session},l.weak_password?{weakPassword:l.weak_password}:null),error:o})}catch(i){if(P(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithOAuth(a){var i,l,o,u;return await this._handleProviderSignIn(a.provider,{redirectTo:(i=a.options)===null||i===void 0?void 0:i.redirectTo,scopes:(l=a.options)===null||l===void 0?void 0:l.scopes,queryParams:(o=a.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(u=a.options)===null||u===void 0?void 0:u.skipBrowserRedirect})}async exchangeCodeForSession(a){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(a)):this._exchangeCodeForSession(a)}async signInWithWeb3(a){const{chain:i}=a;switch(i){case"ethereum":return await this.signInWithEthereum(a);case"solana":return await this.signInWithSolana(a);default:throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`)}}async signInWithEthereum(a){var i,l,o,u,f,m,p,g,y,b,w;let _,E;if("message"in a)_=a.message,E=a.signature;else{const{chain:N,wallet:D,statement:z,options:Y}=a;let H;if(it())if(typeof D=="object")H=D;else{const _e=window;if("ethereum"in _e&&typeof _e.ethereum=="object"&&"request"in _e.ethereum&&typeof _e.ethereum.request=="function")H=_e.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof D!="object"||!(Y!=null&&Y.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");H=D}const I=new URL((i=Y==null?void 0:Y.url)!==null&&i!==void 0?i:window.location.href),ie=await H.request({method:"eth_requestAccounts"}).then(_e=>_e).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!ie||ie.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const ee=Lg(ie[0]);let X=(l=Y==null?void 0:Y.signInWithEthereum)===null||l===void 0?void 0:l.chainId;if(!X){const _e=await H.request({method:"eth_chainId"});X=v2(_e)}const Ae={domain:I.host,address:ee,statement:z,uri:I.href,version:"1",chainId:X,nonce:(o=Y==null?void 0:Y.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(f=(u=Y==null?void 0:Y.signInWithEthereum)===null||u===void 0?void 0:u.issuedAt)!==null&&f!==void 0?f:new Date,expirationTime:(m=Y==null?void 0:Y.signInWithEthereum)===null||m===void 0?void 0:m.expirationTime,notBefore:(p=Y==null?void 0:Y.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(g=Y==null?void 0:Y.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(y=Y==null?void 0:Y.signInWithEthereum)===null||y===void 0?void 0:y.resources};_=b2(Ae),E=await H.request({method:"personal_sign",params:[y2(_),ee]})}try{const{data:N,error:D}=await F(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:_,signature:E},!((b=a.options)===null||b===void 0)&&b.captchaToken?{gotrue_meta_security:{captcha_token:(w=a.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:Yt});if(D)throw D;if(!N||!N.session||!N.user){const z=new yr;return this._returnResult({data:{user:null,session:null},error:z})}return N.session&&(await this._saveSession(N.session),await this._notifyAllSubscribers("SIGNED_IN",N.session)),this._returnResult({data:Object.assign({},N),error:D})}catch(N){if(P(N))return this._returnResult({data:{user:null,session:null},error:N});throw N}}async signInWithSolana(a){var i,l,o,u,f,m,p,g,y,b,w,_;let E,N;if("message"in a)E=a.message,N=a.signature;else{const{chain:D,wallet:z,statement:Y,options:H}=a;let I;if(it())if(typeof z=="object")I=z;else{const ee=window;if("solana"in ee&&typeof ee.solana=="object"&&("signIn"in ee.solana&&typeof ee.solana.signIn=="function"||"signMessage"in ee.solana&&typeof ee.solana.signMessage=="function"))I=ee.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof z!="object"||!(H!=null&&H.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");I=z}const ie=new URL((i=H==null?void 0:H.url)!==null&&i!==void 0?i:window.location.href);if("signIn"in I&&I.signIn){const ee=await I.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},H==null?void 0:H.signInWithSolana),{version:"1",domain:ie.host,uri:ie.href}),Y?{statement:Y}:null));let X;if(Array.isArray(ee)&&ee[0]&&typeof ee[0]=="object")X=ee[0];else if(ee&&typeof ee=="object"&&"signedMessage"in ee&&"signature"in ee)X=ee;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in X&&"signature"in X&&(typeof X.signedMessage=="string"||X.signedMessage instanceof Uint8Array)&&X.signature instanceof Uint8Array)E=typeof X.signedMessage=="string"?X.signedMessage:new TextDecoder().decode(X.signedMessage),N=X.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in I)||typeof I.signMessage!="function"||!("publicKey"in I)||typeof I!="object"||!I.publicKey||!("toBase58"in I.publicKey)||typeof I.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");E=[`${ie.host} wants you to sign in with your Solana account:`,I.publicKey.toBase58(),...Y?["",Y,""]:[""],"Version: 1",`URI: ${ie.href}`,`Issued At: ${(o=(l=H==null?void 0:H.signInWithSolana)===null||l===void 0?void 0:l.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((u=H==null?void 0:H.signInWithSolana)===null||u===void 0)&&u.notBefore?[`Not Before: ${H.signInWithSolana.notBefore}`]:[],...!((f=H==null?void 0:H.signInWithSolana)===null||f===void 0)&&f.expirationTime?[`Expiration Time: ${H.signInWithSolana.expirationTime}`]:[],...!((m=H==null?void 0:H.signInWithSolana)===null||m===void 0)&&m.chainId?[`Chain ID: ${H.signInWithSolana.chainId}`]:[],...!((p=H==null?void 0:H.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${H.signInWithSolana.nonce}`]:[],...!((g=H==null?void 0:H.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${H.signInWithSolana.requestId}`]:[],...!((b=(y=H==null?void 0:H.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||b===void 0)&&b.length?["Resources",...H.signInWithSolana.resources.map(X=>`- ${X}`)]:[]].join(`
`);const ee=await I.signMessage(new TextEncoder().encode(E),"utf8");if(!ee||!(ee instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");N=ee}}try{const{data:D,error:z}=await F(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:E,signature:Rn(N)},!((w=a.options)===null||w===void 0)&&w.captchaToken?{gotrue_meta_security:{captcha_token:(_=a.options)===null||_===void 0?void 0:_.captchaToken}}:null),xform:Yt});if(z)throw z;if(!D||!D.session||!D.user){const Y=new yr;return this._returnResult({data:{user:null,session:null},error:Y})}return D.session&&(await this._saveSession(D.session),await this._notifyAllSubscribers("SIGNED_IN",D.session)),this._returnResult({data:Object.assign({},D),error:z})}catch(D){if(P(D))return this._returnResult({data:{user:null,session:null},error:D});throw D}}async _exchangeCodeForSession(a){const i=await Xt(this.storage,`${this.storageKey}-code-verifier`),[l,o]=(i??"").split("/");try{if(!l&&this.flowType==="pkce")throw new H1;const{data:u,error:f}=await F(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:a,code_verifier:l},xform:Yt});if(await qe(this.storage,`${this.storageKey}-code-verifier`),f)throw f;if(!u||!u.session||!u.user){const m=new yr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:m})}return u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",u.session)),this._returnResult({data:Object.assign(Object.assign({},u),{redirectType:o??null}),error:f})}catch(u){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(u))return this._returnResult({data:{user:null,session:null,redirectType:null},error:u});throw u}}async signInWithIdToken(a){try{const{options:i,provider:l,token:o,access_token:u,nonce:f}=a,m=await F(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:l,id_token:o,access_token:u,nonce:f,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},xform:Yt}),{data:p,error:g}=m;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p||!p.session||!p.user){const y=new yr;return this._returnResult({data:{user:null,session:null},error:y})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:g})}catch(i){if(P(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithOtp(a){var i,l,o,u,f;try{if("email"in a){const{email:m,options:p}=a;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await An(this.storage,this.storageKey));const{error:b}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:m,data:(i=p==null?void 0:p.data)!==null&&i!==void 0?i:{},create_user:(l=p==null?void 0:p.shouldCreateUser)!==null&&l!==void 0?l:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:y},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:b})}if("phone"in a){const{phone:m,options:p}=a,{data:g,error:y}=await F(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:m,data:(o=p==null?void 0:p.data)!==null&&o!==void 0?o:{},create_user:(u=p==null?void 0:p.shouldCreateUser)!==null&&u!==void 0?u:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(f=p==null?void 0:p.channel)!==null&&f!==void 0?f:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:y})}throw new bl("You must provide either an email or phone number.")}catch(m){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(m))return this._returnResult({data:{user:null,session:null},error:m});throw m}}async verifyOtp(a){var i,l;try{let o,u;"options"in a&&(o=(i=a.options)===null||i===void 0?void 0:i.redirectTo,u=(l=a.options)===null||l===void 0?void 0:l.captchaToken);const{data:f,error:m}=await F(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},a),{gotrue_meta_security:{captcha_token:u}}),redirectTo:o,xform:Yt});if(m)throw m;if(!f)throw new Error("An error occurred on token verification.");const p=f.session,g=f.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(a.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(o){if(P(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(a){var i,l,o,u,f;try{let m=null,p=null;this.flowType==="pkce"&&([m,p]=await An(this.storage,this.storageKey));const g=await F(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in a?{provider_id:a.providerId}:null),"domain"in a?{domain:a.domain}:null),{redirect_to:(l=(i=a.options)===null||i===void 0?void 0:i.redirectTo)!==null&&l!==void 0?l:void 0}),!((o=a==null?void 0:a.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:a.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:m,code_challenge_method:p}),headers:this.headers,xform:d2});return!((u=g.data)===null||u===void 0)&&u.url&&it()&&!(!((f=a.options)===null||f===void 0)&&f.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(m){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(m))return this._returnResult({data:null,error:m});throw m}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async a=>{const{data:{session:i},error:l}=a;if(l)throw l;if(!i)throw new We;const{error:o}=await F(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:i.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(a){if(P(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async resend(a){try{const i=`${this.url}/resend`;if("email"in a){const{email:l,type:o,options:u}=a;let f=null,m=null;this.flowType==="pkce"&&([f,m]=await An(this.storage,this.storageKey));const{error:p}=await F(this.fetch,"POST",i,{headers:this.headers,body:{email:l,type:o,gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken},code_challenge:f,code_challenge_method:m},redirectTo:u==null?void 0:u.emailRedirectTo});return p&&await qe(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in a){const{phone:l,type:o,options:u}=a,{data:f,error:m}=await F(this.fetch,"POST",i,{headers:this.headers,body:{phone:l,type:o,gotrue_meta_security:{captcha_token:u==null?void 0:u.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:f==null?void 0:f.message_id},error:m})}throw new bl("You must provide either an email or phone number and a type")}catch(i){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async a=>a)):await this._useSession(async a=>a)}async _acquireLock(a,i){this._debug("#_acquireLock","begin",a);try{if(this.lockAcquired){const l=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await l,await i()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,a,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const l=i();for(this.pendingInLock.push((async()=>{try{await l}catch{}})()),await l;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await l}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(a){this._debug("#_useSession","begin");try{const i=await this.__loadSession();return await a(i)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let a=null;const i=await Xt(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",i),i!==null&&(this._isValidSession(i)?a=i:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!a)return{data:{session:null},error:null};const l=a.expires_at?a.expires_at*1e3-Date.now()<yu:!1;if(this._debug("#__loadSession()",`session has${l?"":" not"} expired`,"expires_at",a.expires_at),!l){if(this.userStorage){const f=await Xt(this.userStorage,this.storageKey+"-user");f!=null&&f.user?a.user=f.user:a.user=bu()}if(this.storage.isServer&&a.user&&!a.user.__isUserNotAvailableProxy){const f={value:this.suppressGetSessionWarning};a.user=l2(a.user,f),f.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:a},error:null}}const{data:o,error:u}=await this._callRefreshToken(a.refresh_token);if(u){if(!!(a.expires_at&&a.expires_at*1e3>Date.now())){const m=await Xt(this.storage,this.storageKey);if(m&&m.refresh_token===a.refresh_token)return this._returnResult({data:{session:a},error:null})}return this._returnResult({data:{session:null},error:u})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(a){if(a)return await this._getUser(a);await this.initializePromise;let i;return this.lock!=null?i=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):i=await this._getUser(),i.data.user&&(this.suppressGetSessionWarning=!0),i}async _getUser(a){try{return a?await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:a,xform:ln}):await this._useSession(async i=>{var l,o,u;const{data:f,error:m}=i;if(m)throw m;return!(!((l=f.session)===null||l===void 0)&&l.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new We}:await F(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(u=(o=f.session)===null||o===void 0?void 0:o.access_token)!==null&&u!==void 0?u:void 0,xform:ln})})}catch(i){if(P(i))return yl(i)&&(await this._removeSession(),await qe(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:i});throw i}}async updateUser(a,i={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(a,i)):await this._updateUser(a,i)}async _updateUser(a,i={}){try{return await this._useSession(async l=>{const{data:o,error:u}=l;if(u)throw u;if(!o.session)throw new We;const f=o.session;let m=null,p=null;this.flowType==="pkce"&&a.email!=null&&([m,p]=await An(this.storage,this.storageKey));const{data:g,error:y}=await F(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:i==null?void 0:i.emailRedirectTo,body:Object.assign(Object.assign({},a),{code_challenge:m,code_challenge_method:p}),jwt:f.access_token,xform:ln});if(y)throw y;return f.user=g.user,await this._saveSession(f),await this._notifyAllSubscribers("USER_UPDATED",f),this._returnResult({data:{user:f.user},error:null})})}catch(l){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(l))return this._returnResult({data:{user:null},error:l});throw l}}async setSession(a){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(a)):await this._setSession(a)}async _setSession(a){try{if(!a.access_token||!a.refresh_token)throw new We;const i=Date.now()/1e3;let l=i,o=!0,u=null;const{payload:f}=wl(a.access_token);if(f.exp&&(l=f.exp,o=l<=i),o){const{data:m,error:p}=await this._callRefreshToken(a.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!m)return{data:{user:null,session:null},error:null};u=m}else{const{data:m,error:p}=await this._getUser(a.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});u={access_token:a.access_token,refresh_token:a.refresh_token,user:m.user,token_type:"bearer",expires_in:l-i,expires_at:l},await this._saveSession(u),await this._notifyAllSubscribers("SIGNED_IN",u)}return this._returnResult({data:{user:u.user,session:u},error:null})}catch(i){if(P(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}}async refreshSession(a){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(a)):await this._refreshSession(a)}async _refreshSession(a){try{return await this._useSession(async i=>{var l;if(!a){const{data:f,error:m}=i;if(m)throw m;a=(l=f.session)!==null&&l!==void 0?l:void 0}if(!(a!=null&&a.refresh_token))throw new We;const{data:o,error:u}=await this._callRefreshToken(a.refresh_token);return u?this._returnResult({data:{user:null,session:null},error:u}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(i){if(P(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async _getSessionFromURL(a,i){var l;try{if(!it())throw new xl("No browser detected.");if(a.error||a.error_description||a.error_code)throw new xl(a.error_description||"Error in URL with unspecified error_description",{error:a.error||"unspecified_error",code:a.error_code||"unspecified_code"});switch(i){case"implicit":if(this.flowType==="pkce")throw new Rp("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new xl("Not a valid implicit grant flow url.");break;default:}if(i==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!a.code)throw new Rp("No code detected.");const{data:H,error:I}=await this._exchangeCodeForSession(a.code);if(I)throw I;const ie=new URL(window.location.href);return ie.searchParams.delete("code"),window.history.replaceState(window.history.state,"",ie.toString()),{data:{session:H.session,redirectType:(l=H.redirectType)!==null&&l!==void 0?l:null},error:null}}const{provider_token:o,provider_refresh_token:u,access_token:f,refresh_token:m,expires_in:p,expires_at:g,token_type:y}=a;if(!f||!p||!m||!y)throw new xl("No session defined in URL");const b=Math.round(Date.now()/1e3),w=parseInt(p);let _=b+w;g&&(_=parseInt(g));const E=_-b;E*1e3<=Ra&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${E}s, should have been closer to ${w}s`);const N=_-w;b-N>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",N,_,b):b-N<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",N,_,b);const{data:D,error:z}=await this._getUser(f);if(z)throw z;const Y={provider_token:o,provider_refresh_token:u,access_token:f,expires_in:w,expires_at:_,refresh_token:m,token_type:y,user:D.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:Y,redirectType:a.type},error:null})}catch(o){if(P(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(a){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),a):!!(a.access_token||a.error||a.error_description||a.error_code)}async _isPKCECallback(a){const i=await Xt(this.storage,`${this.storageKey}-code-verifier`);return!!(a.code&&i)}async signOut(a={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(a)):await this._signOut(a)}async _signOut({scope:a}={scope:"global"}){return await this._useSession(async i=>{var l;const{data:o,error:u}=i;if(u&&!yl(u))return this._returnResult({error:u});const f=(l=o.session)===null||l===void 0?void 0:l.access_token;if(f){const{error:m}=await this.admin.signOut(f,a);if(m&&!(M1(m)&&(m.status===404||m.status===401||m.status===403)||yl(m)))return this._returnResult({error:m})}return a!=="others"&&(await this._removeSession(),await qe(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(a){const i=I1(),l={id:i,callback:a,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",i),this.stateChangeEmitters.delete(i)}};return this._debug("#onAuthStateChange()","registered callback with id",i),this.stateChangeEmitters.set(i,l),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(i)}):await this._emitInitialSession(i)))(),{data:{subscription:l}}}async _emitInitialSession(a){return await this._useSession(async i=>{var l,o;try{const{data:{session:u},error:f}=i;if(f)throw f;await((l=this.stateChangeEmitters.get(a))===null||l===void 0?void 0:l.callback("INITIAL_SESSION",u)),this._debug("INITIAL_SESSION","callback id",a,"session",u)}catch(u){await((o=this.stateChangeEmitters.get(a))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",a,"error",u),yl(u)?console.warn(u):console.error(u)}})}async resetPasswordForEmail(a,i={}){let l=null,o=null;this.flowType==="pkce"&&([l,o]=await An(this.storage,this.storageKey,!0));try{return await F(this.fetch,"POST",`${this.url}/recover`,{body:{email:a,code_challenge:l,code_challenge_method:o,gotrue_meta_security:{captcha_token:i.captchaToken}},headers:this.headers,redirectTo:i.redirectTo})}catch(u){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(u))return this._returnResult({data:null,error:u});throw u}}async getUserIdentities(){var a;try{const{data:i,error:l}=await this.getUser();if(l)throw l;return this._returnResult({data:{identities:(a=i.user.identities)!==null&&a!==void 0?a:[]},error:null})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async linkIdentity(a){return"token"in a?this.linkIdentityIdToken(a):this.linkIdentityOAuth(a)}async linkIdentityOAuth(a){var i;try{const{data:l,error:o}=await this._useSession(async u=>{var f,m,p,g,y;const{data:b,error:w}=u;if(w)throw w;const _=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,a.provider,{redirectTo:(f=a.options)===null||f===void 0?void 0:f.redirectTo,scopes:(m=a.options)===null||m===void 0?void 0:m.scopes,queryParams:(p=a.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await F(this.fetch,"GET",_,{headers:this.headers,jwt:(y=(g=b.session)===null||g===void 0?void 0:g.access_token)!==null&&y!==void 0?y:void 0})});if(o)throw o;return it()&&!(!((i=a.options)===null||i===void 0)&&i.skipBrowserRedirect)&&window.location.assign(l==null?void 0:l.url),this._returnResult({data:{provider:a.provider,url:l==null?void 0:l.url},error:null})}catch(l){if(P(l))return this._returnResult({data:{provider:a.provider,url:null},error:l});throw l}}async linkIdentityIdToken(a){return await this._useSession(async i=>{var l;try{const{error:o,data:{session:u}}=i;if(o)throw o;const{options:f,provider:m,token:p,access_token:g,nonce:y}=a,b=await F(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(l=u==null?void 0:u.access_token)!==null&&l!==void 0?l:void 0,body:{provider:m,id_token:p,access_token:g,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:f==null?void 0:f.captchaToken}},xform:Yt}),{data:w,error:_}=b;return _?this._returnResult({data:{user:null,session:null},error:_}):!w||!w.session||!w.user?this._returnResult({data:{user:null,session:null},error:new yr}):(w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("USER_UPDATED",w.session)),this._returnResult({data:w,error:_}))}catch(o){if(await qe(this.storage,`${this.storageKey}-code-verifier`),P(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(a){try{return await this._useSession(async i=>{var l,o;const{data:u,error:f}=i;if(f)throw f;return await F(this.fetch,"DELETE",`${this.url}/user/identities/${a.identity_id}`,{headers:this.headers,jwt:(o=(l=u.session)===null||l===void 0?void 0:l.access_token)!==null&&o!==void 0?o:void 0})})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async _refreshAccessToken(a){const i="#_refreshAccessToken()";this._debug(i,"begin");try{const l=Date.now();return await Q1(async o=>(o>0&&await F1(200*Math.pow(2,o-1)),this._debug(i,"refreshing attempt",o),await F(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:a},headers:this.headers,xform:Yt})),(o,u)=>{const f=200*Math.pow(2,o);return u&&Op(u)&&Date.now()+f-l<Ra})}catch(l){if(this._debug(i,"error",l),P(l))return this._returnResult({data:{session:null,user:null},error:l});throw l}finally{this._debug(i,"end")}}_isValidSession(a){return typeof a=="object"&&a!==null&&"access_token"in a&&"refresh_token"in a&&"expires_at"in a}async _handleProviderSignIn(a,i){const l=await this._getUrlForProvider(`${this.url}/authorize`,a,{redirectTo:i.redirectTo,scopes:i.scopes,queryParams:i.queryParams});return this._debug("#_handleProviderSignIn()","provider",a,"options",i,"url",l),it()&&!i.skipBrowserRedirect&&window.location.assign(l),{data:{provider:a,url:l},error:null}}async _recoverAndRefresh(){var a,i;const l="#_recoverAndRefresh()";this._debug(l,"begin");try{const o=await Xt(this.storage,this.storageKey);if(o&&this.userStorage){let f=await Xt(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!f&&(f={user:o.user},await jr(this.userStorage,this.storageKey+"-user",f)),o.user=(a=f==null?void 0:f.user)!==null&&a!==void 0?a:bu()}else if(o&&!o.user&&!o.user){const f=await Xt(this.storage,this.storageKey+"-user");f&&(f!=null&&f.user)?(o.user=f.user,await qe(this.storage,this.storageKey+"-user"),await jr(this.storage,this.storageKey,o)):o.user=bu()}if(this._debug(l,"session from storage",o),!this._isValidSession(o)){this._debug(l,"session is not valid"),o!==null&&await this._removeSession();return}const u=((i=o.expires_at)!==null&&i!==void 0?i:1/0)*1e3-Date.now()<yu;if(this._debug(l,`session has${u?"":" not"} expired with margin of ${yu}s`),u){if(this.autoRefreshToken&&o.refresh_token){const{error:f}=await this._callRefreshToken(o.refresh_token);f&&($1(f)?this._debug(l,"refresh discarded by commit guard",f):this._debug(l,"refresh failed",f))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:f,error:m}=await this._getUser(o.access_token);!m&&(f!=null&&f.user)?(o.user=f.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(l,"could not get user data, skipping SIGNED_IN notification")}catch(f){console.error("Error getting user data:",f),this._debug(l,"error getting user data, skipping SIGNED_IN notification",f)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(l,"error",o),console.error(o);return}finally{this._debug(l,"end")}}async _callRefreshToken(a){var i,l;if(!a)throw new We;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===a&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new Gl;const u=await Xt(this.storage,this.storageKey),{data:f,error:m}=await this._refreshAccessToken(a);if(m)throw m;if(!f.session)throw new We;const p=await Xt(this.storage,this.storageKey);if(u!==null&&(p===null||p.refresh_token!==u.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const w={data:null,error:new zp};return this.refreshingDeferred.resolve(w),w}const y=this._sessionRemovalEpoch;if(await this._saveSession(f.session),this._sessionRemovalEpoch!==y){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await qe(this.storage,this.storageKey),this.userStorage&&await qe(this.userStorage,this.storageKey+"-user");const w={data:null,error:new zp};return this.refreshingDeferred.resolve(w),w}await this._notifyAllSubscribers("TOKEN_REFRESHED",f.session);const b={data:f.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(b),b}catch(u){if(this._debug(o,"error",u),P(u)){const f={data:null,error:u};if(!Op(u)){const m=await Xt(this.storage,this.storageKey);!!(m!=null&&m.expires_at&&m.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:a,result:f,expiresAt:Date.now()+C1},(i=this.refreshingDeferred)===null||i===void 0||i.resolve(f),f}throw(l=this.refreshingDeferred)===null||l===void 0||l.reject(u),u}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(a,i,l=!0){const o=`#_notifyAllSubscribers(${a})`;this._debug(o,"begin",i,`broadcast = ${l}`);try{this.broadcastChannel&&l&&this.broadcastChannel.postMessage({event:a,session:i});const u=[],f=Array.from(this.stateChangeEmitters.values()).map(async m=>{try{await m.callback(a,i)}catch(p){u.push(p)}});if(await Promise.all(f),u.length>0){for(let m=0;m<u.length;m+=1)console.error(u[m]);throw u[0]}}finally{this._debug(o,"end")}}async _saveSession(a){this._debug("#_saveSession()",a),this.suppressGetSessionWarning=!0,await qe(this.storage,`${this.storageKey}-code-verifier`);const i=Object.assign({},a),l=i.user&&i.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!l&&i.user&&await jr(this.userStorage,this.storageKey+"-user",{user:i.user});const o=Object.assign({},i);delete o.user;const u=Bp(o);await jr(this.storage,this.storageKey,u)}else{const o=Bp(i);await jr(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await qe(this.storage,this.storageKey),await qe(this.storage,this.storageKey+"-code-verifier"),await qe(this.storage,this.storageKey+"-user"),this.userStorage&&await qe(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const a=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{a&&it()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",a)}catch(i){console.error("removing visibilitychange callback failed",i)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const a=setInterval(()=>this._autoRefreshTokenTick(),Ra);this.autoRefreshTicker=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a);const i=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=i,i&&typeof i=="object"&&typeof i.unref=="function"?i.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(i)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const a=this.autoRefreshTicker;this.autoRefreshTicker=null,a&&clearInterval(a);const i=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,i&&clearTimeout(i)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var a;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(a=this.broadcastChannel)===null||a===void 0||a.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const a=Date.now();try{return await this._useSession(async i=>{const{data:{session:l}}=i;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((l.expires_at*1e3-a)/Ra);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Ra}ms, refresh threshold is ${zi} ticks`),o<=zi&&await this._callRefreshToken(l.refresh_token)})}catch(i){console.error("Auto refresh tick failed with error. This is likely a transient error.",i)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(a){if(a instanceof p2)this._debug("auto refresh token tick lock not available");else throw a}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const a=Date.now();try{await this._useSession(async i=>{const{data:{session:l}}=i;if(!l||!l.refresh_token||!l.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((l.expires_at*1e3-a)/Ra);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${Ra}ms, refresh threshold is ${zi} ticks`),o<=zi&&await this._callRefreshToken(l.refresh_token)})}catch(i){console.error("Auto refresh tick failed with error. This is likely a transient error.",i)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!it()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(a){this._debug("#visibilityChangedCallback","error",a)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(a){console.error("_handleVisibilityChange",a)}}async _onVisibilityChanged(a){const i=`#_onVisibilityChanged(${a})`;if(this._debug(i,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!a)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(i,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(i,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(a,i,l){const o=[`provider=${encodeURIComponent(i)}`];if(l!=null&&l.redirectTo&&o.push(`redirect_to=${encodeURIComponent(l.redirectTo)}`),l!=null&&l.scopes&&o.push(`scopes=${encodeURIComponent(l.scopes)}`),this.flowType==="pkce"){const[u,f]=await An(this.storage,this.storageKey),m=new URLSearchParams({code_challenge:`${encodeURIComponent(u)}`,code_challenge_method:`${encodeURIComponent(f)}`});o.push(m.toString())}if(l!=null&&l.queryParams){const u=new URLSearchParams(l.queryParams);o.push(u.toString())}return l!=null&&l.skipBrowserRedirect&&o.push(`skip_http_redirect=${l.skipBrowserRedirect}`),`${a}?${o.join("&")}`}async _unenroll(a){try{return await this._useSession(async i=>{var l;const{data:o,error:u}=i;return u?this._returnResult({data:null,error:u}):await F(this.fetch,"DELETE",`${this.url}/factors/${a.factorId}`,{headers:this.headers,jwt:(l=o==null?void 0:o.session)===null||l===void 0?void 0:l.access_token})})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async _enroll(a){try{return await this._useSession(async i=>{var l,o;const{data:u,error:f}=i;if(f)return this._returnResult({data:null,error:f});const m=Object.assign({friendly_name:a.friendlyName,factor_type:a.factorType},a.factorType==="phone"?{phone:a.phone}:a.factorType==="totp"?{issuer:a.issuer}:{}),{data:p,error:g}=await F(this.fetch,"POST",`${this.url}/factors`,{body:m,headers:this.headers,jwt:(l=u==null?void 0:u.session)===null||l===void 0?void 0:l.access_token});return g?this._returnResult({data:null,error:g}):(a.factorType==="totp"&&p.type==="totp"&&(!((o=p==null?void 0:p.totp)===null||o===void 0)&&o.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async _verify(a){const i=async()=>{try{return await this._useSession(async l=>{var o;const{data:u,error:f}=l;if(f)return this._returnResult({data:null,error:f});const m=Object.assign({challenge_id:a.challengeId},"webauthn"in a?{webauthn:Object.assign(Object.assign({},a.webauthn),{credential_response:a.webauthn.type==="create"?Kp(a.webauthn.credential_response):Pp(a.webauthn.credential_response)})}:{code:a.code}),{data:p,error:g}=await F(this.fetch,"POST",`${this.url}/factors/${a.factorId}/verify`,{body:m,headers:this.headers,jwt:(o=u==null?void 0:u.session)===null||o===void 0?void 0:o.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(l){if(P(l))return this._returnResult({data:null,error:l});throw l}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,i):i()}async _challenge(a){const i=async()=>{try{return await this._useSession(async l=>{var o;const{data:u,error:f}=l;if(f)return this._returnResult({data:null,error:f});const m=await F(this.fetch,"POST",`${this.url}/factors/${a.factorId}/challenge`,{body:a,headers:this.headers,jwt:(o=u==null?void 0:u.session)===null||o===void 0?void 0:o.access_token});if(m.error)return m;const{data:p}=m;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Vp(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Yp(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(l){if(P(l))return this._returnResult({data:null,error:l});throw l}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,i):i()}async _challengeAndVerify(a){const{data:i,error:l}=await this._challenge({factorId:a.factorId});return l?this._returnResult({data:null,error:l}):await this._verify({factorId:a.factorId,challengeId:i.id,code:a.code})}async _listFactors(){var a;const{data:{user:i},error:l}=await this.getUser();if(l)return{data:null,error:l};const o={all:[],phone:[],totp:[],webauthn:[]};for(const u of(a=i==null?void 0:i.factors)!==null&&a!==void 0?a:[])o.all.push(u),u.status==="verified"&&o[u.factor_type].push(u);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(a){var i,l,o,u;if(a)try{const{payload:_}=wl(a);let E=null;_.aal&&(E=_.aal);let N=E;const{data:{user:D},error:z}=await this.getUser(a);if(z)return this._returnResult({data:null,error:z});((l=(i=D==null?void 0:D.factors)===null||i===void 0?void 0:i.filter(I=>I.status==="verified"))!==null&&l!==void 0?l:[]).length>0&&(N="aal2");const H=_.amr||[];return{data:{currentLevel:E,nextLevel:N,currentAuthenticationMethods:H},error:null}}catch(_){if(P(_))return this._returnResult({data:null,error:_});throw _}const{data:{session:f},error:m}=await this.getSession();if(m)return this._returnResult({data:null,error:m});if(!f)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=wl(f.access_token);let g=null;p.aal&&(g=p.aal);let y=g;((u=(o=f.user.factors)===null||o===void 0?void 0:o.filter(_=>_.status==="verified"))!==null&&u!==void 0?u:[]).length>0&&(y="aal2");const w=p.amr||[];return{data:{currentLevel:g,nextLevel:y,currentAuthenticationMethods:w},error:null}}async _getAuthorizationDetails(a){try{return await this._useSession(async i=>{const{data:{session:l},error:o}=i;return o?this._returnResult({data:null,error:o}):l?await F(this.fetch,"GET",`${this.url}/oauth/authorizations/${a}`,{headers:this.headers,jwt:l.access_token,xform:u=>({data:u,error:null})}):this._returnResult({data:null,error:new We})})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async _approveAuthorization(a,i){try{return await this._useSession(async l=>{const{data:{session:o},error:u}=l;if(u)return this._returnResult({data:null,error:u});if(!o)return this._returnResult({data:null,error:new We});const f=await F(this.fetch,"POST",`${this.url}/oauth/authorizations/${a}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:m=>({data:m,error:null})});return f.data&&f.data.redirect_url&&it()&&!(i!=null&&i.skipBrowserRedirect)&&window.location.assign(f.data.redirect_url),f})}catch(l){if(P(l))return this._returnResult({data:null,error:l});throw l}}async _denyAuthorization(a,i){try{return await this._useSession(async l=>{const{data:{session:o},error:u}=l;if(u)return this._returnResult({data:null,error:u});if(!o)return this._returnResult({data:null,error:new We});const f=await F(this.fetch,"POST",`${this.url}/oauth/authorizations/${a}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:m=>({data:m,error:null})});return f.data&&f.data.redirect_url&&it()&&!(i!=null&&i.skipBrowserRedirect)&&window.location.assign(f.data.redirect_url),f})}catch(l){if(P(l))return this._returnResult({data:null,error:l});throw l}}async _listOAuthGrants(){try{return await this._useSession(async a=>{const{data:{session:i},error:l}=a;return l?this._returnResult({data:null,error:l}):i?await F(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new We})})}catch(a){if(P(a))return this._returnResult({data:null,error:a});throw a}}async _revokeOAuthGrant(a){try{return await this._useSession(async i=>{const{data:{session:l},error:o}=i;return o?this._returnResult({data:null,error:o}):l?(await F(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:l.access_token,query:{client_id:a.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new We})})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async fetchJwk(a,i={keys:[]}){let l=i.keys.find(m=>m.kid===a);if(l)return l;const o=Date.now();if(l=this.jwks.keys.find(m=>m.kid===a),l&&this.jwks_cached_at+D1>o)return l;const{data:u,error:f}=await F(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(f)throw f;return!u.keys||u.keys.length===0||(this.jwks=u,this.jwks_cached_at=o,l=u.keys.find(m=>m.kid===a),!l)?null:l}async getClaims(a,i={}){try{let l=a;if(!l){const{data:_,error:E}=await this.getSession();if(E||!_.session)return this._returnResult({data:null,error:E});l=_.session.access_token}const{header:o,payload:u,signature:f,raw:{header:m,payload:p}}=wl(l);if(!(i!=null&&i.allowExpired))try{r2(u.exp)}catch(_){throw new Nl(_ instanceof Error?_.message:"JWT validation failed")}const g=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,i!=null&&i.keys?{keys:i.keys}:i==null?void 0:i.jwks);if(!g){const{error:_}=await this.getUser(l);if(_)throw _;return{data:{claims:u,header:o,signature:f},error:null}}const y=i2(o.alg),b=await crypto.subtle.importKey("jwk",g,y,!0,["verify"]);if(!await crypto.subtle.verify(y,b,f,K1(`${m}.${p}`)))throw new Nl("Invalid JWT signature");return{data:{claims:u,header:o,signature:f},error:null}}catch(l){if(P(l))return this._returnResult({data:null,error:l});throw l}}async signInWithPasskey(a){var i,l,o;Jt(this.experimental);try{if(!Ol())return this._returnResult({data:null,error:new Qt("Browser does not support WebAuthn",null)});const{data:u,error:f}=await this._startPasskeyAuthentication({options:{captchaToken:(i=a==null?void 0:a.options)===null||i===void 0?void 0:i.captchaToken}});if(f||!u)return this._returnResult({data:null,error:f});const m=Yp(u.options),p=(o=(l=a==null?void 0:a.options)===null||l===void 0?void 0:l.signal)!==null&&o!==void 0?o:Lu.createNewAbortSignal(),{data:g,error:y}=await Hg({publicKey:m,signal:p});if(y||!g)return this._returnResult({data:null,error:y??new Qt("WebAuthn ceremony failed",null)});const b=Pp(g);return this._verifyPasskeyAuthentication({challengeId:u.challenge_id,credential:b})}catch(u){if(P(u))return this._returnResult({data:null,error:u});throw u}}async registerPasskey(a){var i,l;Jt(this.experimental);try{if(!Ol())return this._returnResult({data:null,error:new Qt("Browser does not support WebAuthn",null)});const{data:o,error:u}=await this._startPasskeyRegistration();if(u||!o)return this._returnResult({data:null,error:u});const f=Vp(o.options),m=(l=(i=a==null?void 0:a.options)===null||i===void 0?void 0:i.signal)!==null&&l!==void 0?l:Lu.createNewAbortSignal(),{data:p,error:g}=await Bg({publicKey:f,signal:m});if(g||!p)return this._returnResult({data:null,error:g??new Qt("WebAuthn ceremony failed",null)});const y=Kp(p);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:y})}catch(o){if(P(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){Jt(this.experimental);try{return await this._useSession(async a=>{const{data:{session:i},error:l}=a;if(l)return this._returnResult({data:null,error:l});if(!i)return this._returnResult({data:null,error:new We});const{data:o,error:u}=await F(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:i.access_token,body:{}});return u?this._returnResult({data:null,error:u}):this._returnResult({data:o,error:null})})}catch(a){if(P(a))return this._returnResult({data:null,error:a});throw a}}async _verifyPasskeyRegistration(a){Jt(this.experimental);try{return await this._useSession(async i=>{const{data:{session:l},error:o}=i;if(o)return this._returnResult({data:null,error:o});if(!l)return this._returnResult({data:null,error:new We});const{data:u,error:f}=await F(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:l.access_token,body:{challenge_id:a.challengeId,credential:a.credential}});return f?this._returnResult({data:null,error:f}):this._returnResult({data:u,error:null})})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async _startPasskeyAuthentication(a){var i;Jt(this.experimental);try{const{data:l,error:o}=await F(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(i=a==null?void 0:a.options)===null||i===void 0?void 0:i.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:l,error:null})}catch(l){if(P(l))return this._returnResult({data:null,error:l});throw l}}async _verifyPasskeyAuthentication(a){Jt(this.experimental);try{const{data:i,error:l}=await F(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:a.challengeId,credential:a.credential},xform:Yt});return l?this._returnResult({data:null,error:l}):(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:i,error:null}))}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async _listPasskeys(){Jt(this.experimental);try{return await this._useSession(async a=>{const{data:{session:i},error:l}=a;if(l)return this._returnResult({data:null,error:l});if(!i)return this._returnResult({data:null,error:new We});const{data:o,error:u}=await F(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:i.access_token,xform:f=>({data:f,error:null})});return u?this._returnResult({data:null,error:u}):this._returnResult({data:o,error:null})})}catch(a){if(P(a))return this._returnResult({data:null,error:a});throw a}}async _updatePasskey(a){Jt(this.experimental);try{return await this._useSession(async i=>{const{data:{session:l},error:o}=i;if(o)return this._returnResult({data:null,error:o});if(!l)return this._returnResult({data:null,error:new We});const{data:u,error:f}=await F(this.fetch,"PATCH",`${this.url}/passkeys/${a.passkeyId}`,{headers:this.headers,jwt:l.access_token,body:{friendly_name:a.friendlyName}});return f?this._returnResult({data:null,error:f}):this._returnResult({data:u,error:null})})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}async _deletePasskey(a){Jt(this.experimental);try{return await this._useSession(async i=>{const{data:{session:l},error:o}=i;if(o)return this._returnResult({data:null,error:o});if(!l)return this._returnResult({data:null,error:new We});const{error:u}=await F(this.fetch,"DELETE",`${this.url}/passkeys/${a.passkeyId}`,{headers:this.headers,jwt:l.access_token,noResolveJson:!0});return u?this._returnResult({data:null,error:u}):this._returnResult({data:null,error:null})})}catch(i){if(P(i))return this._returnResult({data:null,error:i});throw i}}}Yi.nextInstanceID={};const N2=Yi,C2="2.108.2";let Ui="",Ul;if(typeof Deno<"u"){var wu;Ui="deno",Ul=(wu=Deno.version)===null||wu===void 0?void 0:wu.deno}else if(typeof document<"u")Ui="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Ui="react-native";else{var _u;Ui="node",Ul=typeof process<"u"?(_u=process.version)===null||_u===void 0?void 0:_u.replace(/^v/,""):void 0}const $g=[`runtime=${Ui}`];Ul&&$g.push(`runtime-version=${Ul}`);const R2={"X-Client-Info":`supabase-js/${C2}; ${$g.join("; ")}`},O2={headers:R2},z2={schema:"public"},U2={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},D2={},L2={enabled:!1,respectSamplingDecision:!0};function M2(r,a,i,l){function o(u){return u instanceof i?u:new i(function(f){f(u)})}return new(i||(i=Promise))(function(u,f){function m(y){try{g(l.next(y))}catch(b){f(b)}}function p(y){try{g(l.throw(y))}catch(b){f(b)}}function g(y){y.done?u(y.value):o(y.value).then(m,p)}g((l=l.apply(r,[])).next())})}let Su=null;const B2="@opentelemetry/api";function H2(){return Su===null&&(Su=import(B2).catch(()=>null)),Su}function $2(){return M2(this,void 0,void 0,function*(){try{const r=yield H2();if(!r||!r.propagation||!r.context)return null;const a={};r.propagation.inject(r.context.active(),a);const i=a.traceparent;return i?{traceparent:i,tracestate:a.tracestate,baggage:a.baggage}:null}catch{return null}})}function q2(r){if(!r||typeof r!="string")return null;const a=r.split("-");if(a.length!==4)return null;const[i,l,o,u]=a;if(i.length!==2||l.length!==32||o.length!==16||u.length!==2)return null;const f=/^[0-9a-f]+$/i;return!f.test(i)||!f.test(l)||!f.test(o)||!f.test(u)||l==="00000000000000000000000000000000"||o==="0000000000000000"?null:{version:i,traceId:l,parentId:o,traceFlags:u,isSampled:(parseInt(u,16)&1)===1}}function G2(r,a){if(!r||!a||a.length===0)return!1;let i;if(r instanceof URL)i=r;else try{i=new URL(r)}catch{return!1}for(const l of a)try{if(typeof l=="string"){if(V2(i.hostname,l))return!0}else if(l instanceof RegExp){if(l.test(i.hostname))return!0}else if(typeof l=="function"&&l(i))return!0}catch{continue}return!1}function V2(r,a){if(a===r)return!0;if(a.startsWith("*.")){const i=a.slice(2);if(r.endsWith(i)&&(r===i||r.endsWith("."+i)))return!0}return!1}function Y2(r){const a=[];try{const i=new URL(r);a.push(i.hostname)}catch{}return a.push("*.supabase.co","*.supabase.in"),a.push("localhost","127.0.0.1","[::1]"),a}function Ki(r){"@babel/helpers - typeof";return Ki=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Ki(r)}function K2(r,a){if(Ki(r)!="object"||!r)return r;var i=r[Symbol.toPrimitive];if(i!==void 0){var l=i.call(r,a);if(Ki(l)!="object")return l;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(r)}function P2(r){var a=K2(r,"string");return Ki(a)=="symbol"?a:a+""}function I2(r,a,i){return(a=P2(a))in r?Object.defineProperty(r,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[a]=i,r}function Ip(r,a){var i=Object.keys(r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(r);a&&(l=l.filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable})),i.push.apply(i,l)}return i}function Me(r){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?Ip(Object(i),!0).forEach(function(l){I2(r,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(i)):Ip(Object(i)).forEach(function(l){Object.defineProperty(r,l,Object.getOwnPropertyDescriptor(i,l))})}return r}const X2=r=>r?(...a)=>r(...a):(...a)=>fetch(...a),J2=()=>Headers,F2=(r,a,i,l,o)=>{const u=X2(l),f=J2(),m=(o==null?void 0:o.enabled)===!0,p=(o==null?void 0:o.respectSamplingDecision)!==!1,g=m?Y2(a):null;return async(y,b)=>{var w;const _=(w=await i())!==null&&w!==void 0?w:r;let E=new f(b==null?void 0:b.headers);if(E.has("apikey")||E.set("apikey",r),E.has("Authorization")||E.set("Authorization",`Bearer ${_}`),g){const N=await Q2(y,g,p);N&&(N.traceparent&&!E.has("traceparent")&&E.set("traceparent",N.traceparent),N.tracestate&&!E.has("tracestate")&&E.set("tracestate",N.tracestate),N.baggage&&!E.has("baggage")&&E.set("baggage",N.baggage))}return u(y,Me(Me({},b),{},{headers:E}))}};async function Q2(r,a,i){if(!G2(typeof r=="string"||r instanceof URL?r:r.url,a))return null;const l=await $2();if(!l||!l.traceparent)return null;if(i){const o=q2(l.traceparent);if(o&&!o.isSampled)return null}return l}function Xp(r){return typeof r=="boolean"?{enabled:r}:r}function W2(r){return r.endsWith("/")?r:r+"/"}function Z2(r,a){var i,l,o,u,f,m;const{db:p,auth:g,realtime:y,global:b}=r,{db:w,auth:_,realtime:E,global:N}=a,D=Xp(r.tracePropagation),z=Xp(a.tracePropagation),Y={db:Me(Me({},w),p),auth:Me(Me({},_),g),realtime:Me(Me({},E),y),storage:{},global:Me(Me(Me({},N),b),{},{headers:Me(Me({},(i=N==null?void 0:N.headers)!==null&&i!==void 0?i:{}),(l=b==null?void 0:b.headers)!==null&&l!==void 0?l:{})}),tracePropagation:{enabled:(o=(u=D==null?void 0:D.enabled)!==null&&u!==void 0?u:z==null?void 0:z.enabled)!==null&&o!==void 0?o:!1,respectSamplingDecision:(f=(m=D==null?void 0:D.respectSamplingDecision)!==null&&m!==void 0?m:z==null?void 0:z.respectSamplingDecision)!==null&&f!==void 0?f:!0},accessToken:async()=>""};return r.accessToken?Y.accessToken=r.accessToken:delete Y.accessToken,Y}function ew(r){const a=r==null?void 0:r.trim();if(!a)throw new Error("supabaseUrl is required.");if(!a.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(W2(a))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var tw=class extends N2{constructor(r){super(r)}},aw=class{constructor(r,a,i){var l,o;this.supabaseUrl=r,this.supabaseKey=a;const u=ew(r);if(!a)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",u),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",u),this.storageUrl=new URL("storage/v1",u),this.functionsUrl=new URL("functions/v1",u);const f=`sb-${u.hostname.split(".")[0]}-auth-token`,m={db:z2,realtime:D2,auth:Me(Me({},U2),{},{storageKey:f}),global:O2,tracePropagation:L2},p=Z2(i??{},m);if(this.settings=p,this.storageKey=(l=p.auth.storageKey)!==null&&l!==void 0?l:"",this.headers=(o=p.global.headers)!==null&&o!==void 0?o:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(y,b)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(b)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=p.auth)!==null&&g!==void 0?g:{},this.headers,p.global.fetch)}this.fetch=F2(a,r,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(Me({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new gx(new URL("rest/v1",u).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new N1(this.storageUrl.href,this.headers,this.fetch,i==null?void 0:i.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new lx(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(r){return this.rest.from(r)}schema(r){return this.rest.schema(r)}rpc(r,a={},i={head:!1,get:!1,count:void 0}){return this.rest.rpc(r,a,i)}channel(r,a={config:{}}){return this.realtime.channel(r,a)}getChannels(){return this.realtime.getChannels()}removeChannel(r){return this.realtime.removeChannel(r)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var r=this,a,i;if(r.accessToken)return await r.accessToken();const{data:l}=await r.auth.getSession();return(a=(i=l.session)===null||i===void 0?void 0:i.access_token)!==null&&a!==void 0?a:r.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:r,persistSession:a,detectSessionInUrl:i,storage:l,userStorage:o,storageKey:u,flowType:f,lock:m,debug:p,throwOnError:g,experimental:y,lockAcquireTimeout:b,skipAutoInitialize:w},_,E){const N={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new tw({url:this.authUrl.href,headers:Me(Me({},N),_),storageKey:u,autoRefreshToken:r,persistSession:a,detectSessionInUrl:i,storage:l,userStorage:o,flowType:f,lock:m,debug:p,throwOnError:g,experimental:y,fetch:E,lockAcquireTimeout:b,skipAutoInitialize:w,hasCustomAuthorizationHeader:Object.keys(this.headers).some(D=>D.toLowerCase()==="authorization")})}_initRealtimeClient(r){return new Wx(this.realtimeUrl.href,Me(Me({},r),{},{params:Me(Me({},{apikey:this.supabaseKey}),r==null?void 0:r.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((r,a)=>{this._handleTokenChanged(r,"CLIENT",a==null?void 0:a.access_token)})}_handleTokenChanged(r,a,i){(r==="TOKEN_REFRESHED"||r==="SIGNED_IN")&&this.changedAccessToken!==i?(this.changedAccessToken=i,this.realtime.setAuth(i)):r==="SIGNED_OUT"&&(this.realtime.setAuth(),a=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const nw=(r,a,i)=>new aw(r,a,i);function rw(){if(typeof window<"u")return!1;const r=globalThis.process;if(!r)return!1;const a=r.version;if(a==null)return!1;const i=a.match(/^v(\d+)\./);return i?parseInt(i[1],10)<=18:!1}rw()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const iw="https://ezrwzujtvavaonpccpqn.supabase.co",sw="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV6cnd6dWp0dmF2YW9ucGNjcHFuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE4MjgwNTEsImV4cCI6MjA5NzQwNDA1MX0.IsC73Nvn3MljGdCNJ9rm4KFrJW0vRzM4e7APKhGAO4o",st=nw(iw,sw);function lw(){const r=Cr(),[a,i]=T.useState(!1),[l,o]=T.useState(""),[u,f]=T.useState(""),[m,p]=T.useState(""),[g,y]=T.useState(!1),[b,w]=T.useState(null);T.useEffect(()=>{document.title=a?"Sign Up | FrameX":"Log In | FrameX"},[a]);const _=async N=>{N.preventDefault(),y(!0),w(null);try{if(a){const{error:D}=await st.auth.signUp({email:l,password:u,options:{data:{username:m||l.split("@")[0]}}});if(D)throw D;alert("Check your email for the confirmation link!"),i(!1)}else{const{error:D}=await st.auth.signInWithPassword({email:l,password:u});if(D)throw D;r("/home")}}catch(D){w(D.message)}finally{y(!1)}},E=async N=>{try{await st.auth.signInWithOAuth({provider:N})}catch(D){w(D.message)}};return d.jsxs(d.Fragment,{children:[d.jsx("div",{className:"aurora-bg"}),d.jsx(Iu,{}),d.jsx("section",{className:"auth-section",children:d.jsxs("div",{className:"auth-glass",children:[d.jsxs("div",{className:"auth-header",children:[d.jsx("span",{className:"section-label",children:a?"Get Started":"Welcome Back"}),d.jsx("h1",{children:a?"Sign Up":"Log In"}),d.jsx("p",{children:a?"Create your FrameX account":"Sign in to continue to FrameX"})]}),b&&d.jsx("div",{className:"auth-error",children:b}),d.jsxs("form",{className:"auth-form",onSubmit:_,children:[a&&d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{htmlFor:"username",children:[d.jsx("i",{className:"fas fa-user"})," Username"]}),d.jsx("input",{id:"username",type:"text",placeholder:"yourname",value:m,onChange:N=>p(N.target.value)})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{htmlFor:"email",children:[d.jsx("i",{className:"fas fa-envelope"})," Email"]}),d.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",value:l,onChange:N=>o(N.target.value),required:!0})]}),d.jsxs("div",{className:"form-group",children:[d.jsxs("label",{htmlFor:"password",children:[d.jsx("i",{className:"fas fa-lock"})," Password"]}),d.jsx("input",{id:"password",type:"password",placeholder:a?"Create a password":"Enter your password",value:u,onChange:N=>f(N.target.value),required:!0,minLength:6})]}),d.jsx("button",{type:"submit",className:"btn-primary auth-submit",disabled:g,children:g?d.jsxs("span",{children:[d.jsx("i",{className:"fas fa-spinner fa-spin"})," ",a?"Creating account...":"Signing in..."]}):d.jsxs("span",{children:[a?"Create Account":"Sign In"," ",d.jsx("i",{className:"fas fa-arrow-right"})]})})]}),d.jsx("div",{className:"auth-divider",children:d.jsx("span",{children:"or continue with"})}),d.jsxs("div",{className:"social-auth",children:[d.jsxs("button",{className:"social-auth-btn",onClick:()=>E("google"),children:[d.jsx("i",{className:"fab fa-google"})," Google"]}),d.jsxs("button",{className:"social-auth-btn",onClick:()=>E("apple"),children:[d.jsx("i",{className:"fab fa-apple"})," Apple"]}),d.jsxs("button",{className:"social-auth-btn",onClick:()=>E("github"),children:[d.jsx("i",{className:"fab fa-github"})," GitHub"]})]}),d.jsx("p",{className:"auth-footer-text",children:a?d.jsxs(d.Fragment,{children:["Already have an account? ",d.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),i(!1),w(null)},children:"Log In"})]}):d.jsxs(d.Fragment,{children:["Don't have an account? ",d.jsx("a",{href:"#",onClick:N=>{N.preventDefault(),i(!0),w(null)},children:"Sign Up"})]})})]})}),d.jsx(Xu,{}),d.jsx("style",{children:`
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
      `})]})}const Pe={menu:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),search:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),bell:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),plus:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),home:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M3 12l9-9 9 9"}),d.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),chat:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),communities:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),notification:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),d.jsx("polyline",{points:"13 2 13 9 20 9"})]}),settings:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),logout:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),close:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),attachment:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"})}),emoji:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),d.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),d.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),mic:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"}),d.jsx("path",{d:"M19 10v2a7 7 0 01-14 0v-2"}),d.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"})]}),send:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),d.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),checkAll:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"17 6 7 16 2 11"}),d.jsx("polyline",{points:"22 6 12 16 9 13"})]}),reply:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"9 17 4 12 9 7"}),d.jsx("path",{d:"M20 18v-2a4 4 0 00-4-4H4"})]}),logo:"F"},xr=[{id:1,name:"Your Story",avatar:"",online:!0,unread:!1,isOwn:!0,stories:[{id:101,type:"gradient",gradient:"linear-gradient(135deg, #C6FF00, #00E5FF)",duration:5e3}]},{id:2,name:"Luna",avatar:"",online:!0,unread:!0,stories:[{id:201,type:"gradient",gradient:"linear-gradient(135deg, #f093fb, #f5576c)",duration:5e3},{id:202,type:"gradient",gradient:"linear-gradient(135deg, #4facfe, #00f2fe)",duration:4e3}]},{id:3,name:"Marcus",avatar:"",online:!0,unread:!0,stories:[{id:301,type:"gradient",gradient:"linear-gradient(135deg, #a18cd1, #fbc2eb)",duration:5e3}]},{id:4,name:"Sofia",avatar:"",online:!1,unread:!1,stories:[{id:401,type:"gradient",gradient:"linear-gradient(135deg, #fccb90, #d57eeb)",duration:4e3}]},{id:5,name:"Kai",avatar:"",online:!0,unread:!0,stories:[{id:501,type:"gradient",gradient:"linear-gradient(135deg, #667eea, #764ba2)",duration:5e3}]},{id:6,name:"Zara",avatar:"",online:!1,unread:!1,stories:[{id:601,type:"gradient",gradient:"linear-gradient(135deg, #89f7fe, #66a6ff)",duration:4e3}]},{id:7,name:"Jules",avatar:"",online:!0,unread:!0,stories:[{id:701,type:"gradient",gradient:"linear-gradient(135deg, #f43b47, #453a94)",duration:5e3}]}];function ow({stories:r,userIndex:a,storyIndex:i,onClose:l,onNext:o,onPrev:u}){const f=r[a];if(!f||!f.stories[i])return null;const m=f.stories[i];(i+1)/f.stories.length*100;const p=g=>(g==null?void 0:g.split(" ").map(y=>y[0]).join("").toUpperCase().slice(0,2))||"?";return d.jsx("div",{className:"story-viewer-overlay",onClick:l,children:d.jsxs("div",{className:"story-viewer",onClick:g=>g.stopPropagation(),children:[d.jsxs("div",{className:"story-viewer-header",children:[d.jsx("div",{className:"story-viewer-progress",children:f.stories.map((g,y)=>d.jsx("div",{className:`story-progress-bar ${y<=i?"active":""} ${y===i?"animating":""}`},y))}),d.jsxs("div",{className:"story-viewer-user",children:[d.jsx("div",{className:"story-viewer-avatar",style:{background:f.gradient||"rgba(255,255,255,0.1)"},children:f.avatar?d.jsx("img",{src:f.avatar,alt:""}):d.jsx("span",{children:p(f.name)})}),d.jsx("span",{className:"story-viewer-name",children:f.name}),d.jsx("span",{className:"story-viewer-time",children:"Just now"})]}),d.jsx("button",{className:"story-viewer-close",onClick:l,children:Pe.close})]}),d.jsx("div",{className:"story-viewer-content",style:{background:m.gradient||"#1a1a2e"},children:d.jsxs("div",{className:"story-viewer-text",children:[f.name,"'s Story"]})}),d.jsxs("div",{className:"story-viewer-tap-areas",children:[d.jsx("div",{className:"story-tap-left",onClick:g=>{g.stopPropagation(),u()}}),d.jsx("div",{className:"story-tap-right",onClick:g=>{g.stopPropagation(),o()}})]})]})})}function cw({users:r}){if(!r||r.length===0)return null;const a=r.length===1?`${r[0]} is typing...`:`${r.length} people are typing...`;return d.jsxs("div",{className:"typing-indicator",children:[d.jsxs("div",{className:"typing-dots",children:[d.jsx("span",{className:"typing-dot"}),d.jsx("span",{className:"typing-dot"}),d.jsx("span",{className:"typing-dot"})]}),d.jsx("span",{className:"typing-label",children:a})]})}function uw({date:r}){const a=new Date,i=new Date(r),l=a.toDateString()===i.toDateString(),o=new Date(a);o.setDate(o.getDate()-1);const u=o.toDateString()===i.toDateString();let f=l?"Today":u?"Yesterday":i.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return d.jsx("div",{className:"date-divider",children:d.jsx("span",{children:f})})}const Jp=`
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
`;function dw(){var k,G;const r=Cr(),[a,i]=T.useState(null),[l,o]=T.useState(!0),[u,f]=T.useState(null),[m,p]=T.useState(""),[g,y]=T.useState([]),[b,w]=T.useState([]),[_,E]=T.useState(!1),[N,D]=T.useState(!1),[z,Y]=T.useState(0),[H,I]=T.useState(0),[ie,ee]=T.useState([]),X=T.useRef(null),Ae=T.useRef(null);T.useEffect(()=>{document.title="Chat — FrameX",(async()=>{try{const{data:{session:V}}=await st.auth.getSession();if(!V){r("/login");return}i(V.user)}catch{console.warn("Auth check failed, running in offline mode"),i({id:"offline",email:"guest@framex.app"})}o(!1)})()},[r]),T.useEffect(()=>{if(!a||a.id==="offline"){w([{id:"general",name:"general",display_name:"# general"},{id:"random",name:"random",display_name:"# random"}]),f({id:"general",name:"general",display_name:"# general"});return}(async()=>{try{const{data:V}=await st.from("channels").select("*").order("name");V&&(w(V),!u&&V.length>0&&f(V[0]))}catch(V){console.warn("Failed to fetch channels:",V),w([{id:"general",name:"general",display_name:"# general"}]),f({id:"general",name:"general",display_name:"# general"})}})()},[a]),T.useEffect(()=>{if(!u)return;(async()=>{try{if((a==null?void 0:a.id)==="offline"){y([{id:"1",content:"Welcome to FrameX Chat! 🎉",user_id:"system",created_at:new Date().toISOString(),profiles:{display_name:"FrameX",username:"framex"}},{id:"2",content:"Select a story to view it. This is a demo environment.",user_id:"system",created_at:new Date(Date.now()-6e4).toISOString(),profiles:{display_name:"FrameX",username:"framex"}}]);return}const{data:V}=await st.from("messages").select("*, profiles(*)").eq("channel_id",u.id).order("created_at",{ascending:!0}).limit(100);V&&y(V)}catch{console.warn("Failed to load messages")}})()},[u,a]),T.useEffect(()=>{if(!u||(a==null?void 0:a.id)==="offline")return;let L;return(async()=>{try{L=st.channel(`messages:${u.id}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`channel_id=eq.${u.id}`},W=>{const te=W.new;te.user_id!==(a==null?void 0:a.id)&&st.from("profiles").select("*").eq("id",te.user_id).single().then(({data:le})=>{y(Ue=>[...Ue,{...te,profiles:le}])}).catch(()=>{y(le=>[...le,te])})}).subscribe()}catch{console.warn("Realtime subscription failed")}})(),()=>{L&&st.removeChannel(L)}},[u,a]),T.useEffect(()=>{var L;(L=X.current)==null||L.scrollIntoView({behavior:"smooth"})},[g]),T.useEffect(()=>{const L=V=>{V.key==="Escape"&&E(!1)};return window.addEventListener("keydown",L),()=>window.removeEventListener("keydown",L)},[]),T.useEffect(()=>(_?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[_]),T.useEffect(()=>{if(!N)return;const L=xr[z];if(!L)return;const V=L.stories[H];if(!V)return;const W=setTimeout(()=>{bt()},V.duration||5e3);return()=>clearTimeout(W)},[N,z,H]);const _e=T.useCallback(async L=>{if(L==null||L.preventDefault(),!m.trim()||!u)return;const V=m.trim();if(p(""),(a==null?void 0:a.id)==="offline"){y(W=>[...W,{id:`msg-${Date.now()}`,content:V,user_id:"offline",created_at:new Date().toISOString(),profiles:{display_name:"You",username:"you"}}]);return}try{await st.from("messages").insert({channel_id:u.id,user_id:a.id,content:V})}catch{console.warn("Failed to send message")}},[m,u,a]),zt=T.useCallback(async()=>{try{await st.auth.signOut()}catch{}r("/login")},[r]),ct=T.useCallback(L=>{Y(L),I(0),D(!0)},[]),Je=T.useCallback(()=>{D(!1)},[]),bt=T.useCallback(()=>{const L=xr[z];L&&(H<L.stories.length-1?I(V=>V+1):z<xr.length-1?(Y(V=>V+1),I(0)):D(!1))},[z,H]),ut=T.useCallback(()=>{var L;H>0?I(V=>V-1):z>0&&(Y(V=>V-1),I(((L=xr[z-1])==null?void 0:L.stories.length)-1||0))},[z,H]),ze=L=>L&&L.split(" ").map(V=>V[0]).join("").toUpperCase().slice(0,2)||"?",B=L=>{const V=new Date(L),te=new Date-V,le=Math.floor(te/6e4),Ue=Math.floor(te/36e5);return le<1?"Now":le<60?`${le}m`:Ue<24?V.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):V.toLocaleDateString([],{month:"short",day:"numeric"})},K=g.reduce((L,V,W)=>{const te=new Date(V.created_at).toDateString(),le=W>0?new Date(g[W-1].created_at).toDateString():null;return te!==le&&L.push({type:"date",date:V.created_at}),L.push({type:"message",msg:V,isOwn:V.user_id===(a==null?void 0:a.id)}),L},[]);if(l)return d.jsxs("div",{className:"chat-page",children:[d.jsx("style",{children:Jp}),d.jsxs("div",{className:"chat-loading",children:[d.jsx("div",{className:"loading-spinner"}),d.jsx("span",{children:"Loading chat..."})]})]});const ne=(u==null?void 0:u.display_name)||(u==null?void 0:u.name)||"Select a channel",ve=((k=a==null?void 0:a.user_metadata)==null?void 0:k.full_name)||(a==null?void 0:a.email)||"User",be=ze(ve);return d.jsxs("div",{className:"chat-page",children:[d.jsx("style",{children:Jp}),d.jsxs("header",{className:"chat-header",children:[d.jsxs("div",{className:"chat-header-left",children:[d.jsx("button",{className:"hamburger-btn",onClick:()=>E(!0),"aria-label":"Open menu",children:Pe.menu}),d.jsx("button",{className:"header-logo",onClick:()=>r("/"),children:Pe.logo})]}),d.jsx("div",{className:"chat-header-center",children:d.jsx("h2",{children:ne})}),d.jsxs("div",{className:"chat-header-right",children:[d.jsx("button",{className:"header-btn","aria-label":"Search",children:Pe.search}),d.jsxs("button",{className:"header-btn","aria-label":"Notifications",children:[Pe.bell,d.jsx("span",{className:"notification-badge"})]}),d.jsx("button",{className:"header-btn chat-new-btn","aria-label":"New chat",children:Pe.plus})]})]}),d.jsx("div",{className:`sidebar-overlay ${_?"open":""}`,onClick:()=>E(!1)}),d.jsxs("aside",{className:`chat-sidebar ${_?"open":""}`,children:[d.jsxs("div",{className:"sidebar-profile",children:[d.jsxs("div",{className:"sidebar-avatar",children:[(G=a==null?void 0:a.user_metadata)!=null&&G.avatar_url?d.jsx("img",{src:a.user_metadata.avatar_url,alt:""}):be,d.jsx("span",{className:"status-dot"})]}),d.jsxs("div",{className:"sidebar-user-info",children:[d.jsx("div",{className:"sidebar-username",children:ve}),d.jsx("div",{className:"sidebar-status",children:"● Online"})]})]}),d.jsxs("nav",{className:"sidebar-nav",children:[d.jsx("div",{className:"sidebar-section-label",children:"Menu"}),d.jsxs("button",{className:"sidebar-nav-item active",onClick:()=>{E(!1),r("/chat")},children:[Pe.chat,d.jsx("span",{className:"sidebar-nav-label",children:"Chats"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{E(!1),r("/home")},children:[Pe.home,d.jsx("span",{className:"sidebar-nav-label",children:"Home"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{E(!1),r("/communities")},children:[Pe.communities,d.jsx("span",{className:"sidebar-nav-label",children:"Communities"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{E(!1),r("/explore")},children:[Pe.explore,d.jsx("span",{className:"sidebar-nav-label",children:"Explore"})]}),d.jsx("div",{className:"sidebar-section-label",children:"Preferences"}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{E(!1),r("/notifications")},children:[Pe.notification,d.jsx("span",{className:"sidebar-nav-label",children:"Notifications"})]}),d.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{E(!1),r("/settings")},children:[Pe.settings,d.jsx("span",{className:"sidebar-nav-label",children:"Settings"})]})]}),d.jsxs("div",{className:"sidebar-bottom",children:[d.jsxs("button",{className:"sidebar-logout",onClick:zt,children:[Pe.logout,d.jsx("span",{children:"Log Out"})]}),d.jsx("div",{className:"sidebar-version",children:"FrameX v1.0.0"})]})]}),d.jsx("main",{className:"chat-main",children:u?g.length===0?d.jsx("div",{className:"messages-container",children:d.jsxs("div",{className:"empty-state",children:[d.jsx("div",{className:"empty-state-icon",children:Pe.chat}),d.jsx("h3",{children:"No messages yet"}),d.jsx("p",{children:"Start the conversation. Send a message to begin chatting."})]})}):d.jsxs("div",{className:"messages-container",children:[K.map((L,V)=>{var le,Ue;if(L.type==="date")return d.jsx(uw,{date:L.date},`date-${V}`);const{msg:W,isOwn:te}=L;return d.jsxs("div",{className:`chat-msg-wrapper ${te?"outgoing":"incoming"}`,children:[d.jsxs("div",{className:"chat-msg-bubble",children:[!te&&d.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--chat-accent)",marginBottom:2},children:((le=W.profiles)==null?void 0:le.display_name)||((Ue=W.profiles)==null?void 0:Ue.username)||"Unknown"}),d.jsx("div",{children:W.content})]}),d.jsxs("div",{className:"chat-msg-meta",children:[d.jsx("span",{className:"chat-msg-time",children:B(W.created_at)}),te&&d.jsx("span",{className:"chat-msg-receipt",children:Pe.checkAll})]}),d.jsx("div",{style:{display:"flex",gap:6,alignItems:"center"},children:d.jsxs("button",{className:"chat-msg-reply",children:[Pe.reply," Reply"]})}),d.jsxs("div",{className:"chat-msg-reactions",children:[d.jsx("span",{className:"msg-reaction",children:"❤️"}),d.jsx("span",{className:"msg-reaction",children:"🔥"}),d.jsx("span",{className:"msg-reaction",children:"👍"})]})]},W.id)}),ie.length>0&&d.jsx(cw,{users:ie}),d.jsx("div",{ref:X})]}):d.jsx("div",{className:"messages-container",children:d.jsxs("div",{className:"channel-selector",children:[d.jsx("h3",{children:"Channels"}),b.map(L=>d.jsxs("button",{className:"channel-item",onClick:()=>f(L),children:[d.jsx("div",{className:"channel-avatar",children:"#"}),d.jsxs("div",{className:"channel-info",children:[d.jsx("div",{className:"channel-name",children:L.display_name||`# ${L.name}`}),d.jsx("div",{className:"channel-preview",children:"Tap to view messages"})]}),d.jsx("div",{className:"channel-meta"})]},L.id))]})})}),d.jsx("div",{className:"chat-composer-wrapper",children:d.jsxs("form",{className:"chat-composer",onSubmit:_e,children:[d.jsx("button",{type:"button",className:"composer-btn","aria-label":"Attach file",children:Pe.attachment}),d.jsx("input",{ref:Ae,className:"composer-input",type:"text",placeholder:u?`Message ${u.display_name||u.name||"channel"}...`:"Select a channel to start chatting",value:m,onChange:L=>p(L.target.value),disabled:!u,"aria-label":"Message input"}),d.jsx("button",{type:"button",className:"composer-btn","aria-label":"Add emoji",children:Pe.emoji}),d.jsx("button",{type:"button",className:"composer-btn","aria-label":"Voice message",children:Pe.mic}),d.jsx("button",{type:"submit",className:"composer-btn send-btn",disabled:!m.trim()||!u,"aria-label":"Send message",children:Pe.send})]})}),d.jsx("div",{className:"stories-rail-wrapper",children:d.jsx("div",{className:"stories-rail",children:xr.map((L,V)=>d.jsxs("div",{className:"story-avatar-wrapper",style:{"--story-index":V},onClick:()=>ct(V),children:[d.jsx("div",{className:`story-avatar-ring ${L.unread?"unread":"seen"}`,children:d.jsxs("div",{className:"story-avatar-inner",children:[L.avatar?d.jsx("img",{src:L.avatar,alt:""}):ze(L.name),L.online&&d.jsx("span",{className:"story-online-dot"})]})}),d.jsx("span",{className:"story-avatar-name",children:L.name})]},L.id))})}),N&&d.jsx(ow,{stories:xr,userIndex:z,storyIndex:H,onClose:Je,onNext:bt,onPrev:ut})]})}const qg=T.createContext(null);function hw({children:r}){const[a,i]=T.useState(null),[l,o]=T.useState(null),[u,f]=T.useState(!0);T.useEffect(()=>{st.auth.getSession().then(({data:{session:b}})=>{o(b),i((b==null?void 0:b.user)??null),f(!1)});const{data:{subscription:y}}=st.auth.onAuthStateChange((b,w)=>{o(w),i((w==null?void 0:w.user)??null),f(!1)});return()=>y==null?void 0:y.unsubscribe()},[]);const m=async(y,b)=>{const{error:w}=await st.auth.signInWithPassword({email:y,password:b});if(w)throw w},p=async(y,b,w)=>{const{error:_}=await st.auth.signUp({email:y,password:b,options:{data:{username:w||y.split("@")[0]}}});if(_)throw _},g=async()=>{await st.auth.signOut()};return d.jsx(qg.Provider,{value:{user:a,session:l,loading:u,isAuthenticated:!!l,signIn:m,signUp:p,signOut:g},children:r})}function Vl(){const r=T.useContext(qg);if(!r)throw new Error("useAuth must be used within AuthProvider");return r}const ot={communities:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),settings:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),trending:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),d.jsx("polyline",{points:"17 6 23 6 23 12"})]}),plus:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),arrowRight:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),d.jsx("polyline",{points:"12 5 19 12 12 19"})]}),heart:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),messageSquare:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),bell:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]})};function fw(){var u,f;const{user:r}=Vl(),a=((u=r==null?void 0:r.user_metadata)==null?void 0:u.username)||((f=r==null?void 0:r.email)==null?void 0:f.split("@")[0])||"User",i=a.charAt(0).toUpperCase(),l=new Date().getHours(),o=l<12?"Good morning":l<18?"Good afternoon":"Good evening";return d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"dashboard",children:[d.jsxs("div",{className:"welcome-card glass",children:[d.jsx("div",{className:"welcome-avatar",children:i}),d.jsxs("div",{className:"welcome-text",children:[d.jsx("span",{className:"welcome-greeting",children:o}),d.jsx("h1",{className:"welcome-name",children:a}),d.jsx("p",{className:"welcome-sub",children:"Welcome to your FrameX dashboard"})]})]}),d.jsxs("div",{className:"stats-row",children:[d.jsxs("div",{className:"stat-card glass",children:[d.jsx("div",{className:"stat-icon stat-icon-chat",children:ot.messageSquare}),d.jsxs("div",{className:"stat-info",children:[d.jsx("span",{className:"stat-value",children:"12"}),d.jsx("span",{className:"stat-label",children:"Messages"})]})]}),d.jsxs("div",{className:"stat-card glass",children:[d.jsx("div",{className:"stat-icon stat-icon-community",children:ot.communities}),d.jsxs("div",{className:"stat-info",children:[d.jsx("span",{className:"stat-value",children:"5"}),d.jsx("span",{className:"stat-label",children:"Communities"})]})]}),d.jsxs("div",{className:"stat-card glass",children:[d.jsx("div",{className:"stat-icon stat-icon-notif",children:ot.bell}),d.jsxs("div",{className:"stat-info",children:[d.jsx("span",{className:"stat-value",children:"8"}),d.jsx("span",{className:"stat-label",children:"Notifications"})]})]}),d.jsxs("div",{className:"stat-card glass",children:[d.jsx("div",{className:"stat-icon stat-icon-trend",children:ot.trending}),d.jsxs("div",{className:"stat-info",children:[d.jsx("span",{className:"stat-value",children:"3"}),d.jsx("span",{className:"stat-label",children:"Trending"})]})]})]}),d.jsxs("section",{className:"section",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("h2",{className:"section-title",children:[ot.trending," Trending Now"]}),d.jsxs("button",{className:"section-link",children:["View all ",ot.arrowRight]})]}),d.jsx("div",{className:"trending-grid",children:["Neon Nights","Digital Horizons","Cyber Pulse"].map((m,p)=>d.jsxs("div",{className:"trending-card glass",style:{"--card-hue":p*120},children:[d.jsx("div",{className:"trending-thumb",style:{background:`linear-gradient(135deg, hsl(${p*120}, 80%, 20%), hsl(${p*120+60}, 80%, 10%))`},children:d.jsx("div",{className:"trending-thumb-icon",children:ot.trending})}),d.jsxs("div",{className:"trending-body",children:[d.jsx("h3",{children:m}),d.jsxs("div",{className:"trending-meta",children:[d.jsxs("span",{children:[ot.heart," 2.4k"]}),d.jsxs("span",{children:[ot.messageSquare," 89"]})]})]})]},p))})]}),d.jsxs("section",{className:"section",children:[d.jsxs("div",{className:"section-header",children:[d.jsxs("h2",{className:"section-title",children:[ot.communities," Suggested Communities"]}),d.jsxs("button",{className:"section-link",children:["View all ",ot.arrowRight]})]}),d.jsx("div",{className:"communities-row",children:[{name:"Pixel Artists",members:"12.4k",tag:"Art"},{name:"Code Crew",members:"8.2k",tag:"Tech"},{name:"Synthwave",members:"6.7k",tag:"Music"},{name:"Neo Creators",members:"15.1k",tag:"Design"}].map((m,p)=>d.jsxs("div",{className:"community-mini-card glass",style:{"--card-hue":p*90},children:[d.jsx("div",{className:"community-mini-avatar",style:{background:`linear-gradient(135deg, hsl(${p*90}, 80%, 30%), hsl(${p*90+50}, 80%, 15%))`},children:m.name.charAt(0)}),d.jsxs("div",{className:"community-mini-info",children:[d.jsx("h4",{children:m.name}),d.jsxs("span",{className:"community-mini-meta",children:[m.members," members · ",m.tag]})]}),d.jsx("button",{className:"join-btn",children:"Join"})]},p))})]}),d.jsxs("section",{className:"section",children:[d.jsx("div",{className:"section-header",children:d.jsx("h2",{className:"section-title",children:"Quick Actions"})}),d.jsx("div",{className:"actions-grid",children:[{icon:ot.plus,label:"New Post",desc:"Share something new"},{icon:ot.communities,label:"Communities",desc:"Find your people"},{icon:ot.explore,label:"Explore",desc:"Discover content"},{icon:ot.settings,label:"Settings",desc:"Customize your experience"}].map((m,p)=>d.jsxs("div",{className:"action-card glass",children:[d.jsx("div",{className:"action-icon",children:m.icon}),d.jsxs("div",{className:"action-text",children:[d.jsx("h4",{children:m.label}),d.jsx("p",{children:m.desc})]})]},p))})]})]}),d.jsx("style",{children:`
        .dashboard {
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

        /* Welcome */
        .welcome-card {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.75rem;
          margin-bottom: 1.5rem;
        }
        .welcome-avatar {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #CCFF00, #a0cc00);
          color: #08080f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .welcome-text { display: flex; flex-direction: column; gap: 0.2rem; }
        .welcome-greeting { font-size: 0.85rem; color: rgba(255,255,255,0.4); text-transform: uppercase; letter-spacing: 0.05em; }
        .welcome-name { font-size: 1.5rem; font-weight: 700; color: #fff; margin: 0; }
        .welcome-sub { font-size: 0.9rem; color: rgba(255,255,255,0.5); margin: 0; }

        /* Stats */
        .stats-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .stat-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
        }
        .stat-icon {
          width: 44px; height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .stat-icon svg { width: 22px; height: 22px; }
        .stat-icon-chat { background: rgba(0, 150, 255, 0.15); color: #0096ff; }
        .stat-icon-community { background: rgba(204, 255, 0, 0.15); color: #CCFF00; }
        .stat-icon-notif { background: rgba(255, 100, 100, 0.15); color: #ff6464; }
        .stat-icon-trend { background: rgba(150, 50, 255, 0.15); color: #9632ff; }
        .stat-info { display: flex; flex-direction: column; gap: 0.15rem; }
        .stat-value { font-size: 1.5rem; font-weight: 700; color: #fff; line-height: 1; }
        .stat-label { font-size: 0.8rem; color: rgba(255,255,255,0.4); }

        /* Sections */
        .section { margin-bottom: 2rem; }
        .section-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
        }
        .section-title {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
          color: #fff;
          margin: 0;
        }
        .section-title svg { width: 20px; height: 20px; color: #CCFF00; }
        .section-link {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          background: none;
          border: none;
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          cursor: pointer;
          transition: color 0.2s;
          padding: 0;
          font-family: inherit;
        }
        .section-link svg { width: 14px; height: 14px; }
        .section-link:hover { color: #CCFF00; }

        /* Trending */
        .trending-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        .trending-card { overflow: hidden; cursor: pointer; transition: transform 0.3s, box-shadow 0.3s; }
        .trending-card:hover { transform: translateY(-4px); box-shadow: 0 8px 30px rgba(0,0,0,0.3); }
        .trending-thumb {
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .trending-thumb-icon svg { width: 40px; height: 40px; color: rgba(255,255,255,0.3); }
        .trending-body { padding: 1rem; }
        .trending-body h3 { margin: 0 0 0.5rem; font-size: 1rem; color: #fff; font-weight: 600; }
        .trending-meta { display: flex; gap: 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.4); }
        .trending-meta svg { width: 14px; height: 14px; vertical-align: middle; margin-right: 0.25rem; }

        /* Communities mini */
        .communities-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .community-mini-card {
          padding: 1.25rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 0.75rem;
          transition: transform 0.3s;
        }
        .community-mini-card:hover { transform: translateY(-4px); }
        .community-mini-avatar {
          width: 52px; height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
        }
        .community-mini-info h4 { margin: 0; font-size: 0.95rem; color: #fff; font-weight: 600; }
        .community-mini-meta { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
        .join-btn {
          padding: 0.4rem 1rem;
          border-radius: 8px;
          border: 1px solid #CCFF00;
          background: transparent;
          color: #CCFF00;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .join-btn:hover { background: #CCFF00; color: #08080f; }

        /* Quick Actions */
        .actions-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }
        .action-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 1.5rem 1rem;
          gap: 0.75rem;
          cursor: pointer;
          transition: transform 0.3s, border-color 0.3s;
        }
        .action-card:hover { transform: translateY(-4px); border-color: rgba(204, 255, 0, 0.3); }
        .action-icon svg { width: 32px; height: 32px; color: #CCFF00; }
        .action-text h4 { margin: 0; font-size: 0.95rem; color: #fff; font-weight: 600; }
        .action-text p { margin: 0; font-size: 0.8rem; color: rgba(255,255,255,0.4); }

        /* Responsive */
        @media (max-width: 900px) {
          .stats-row { grid-template-columns: repeat(2, 1fr); }
          .trending-grid { grid-template-columns: repeat(2, 1fr); }
          .communities-row { grid-template-columns: repeat(2, 1fr); }
          .actions-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .dashboard { padding: 1rem; }
          .stats-row { grid-template-columns: 1fr 1fr; }
          .trending-grid { grid-template-columns: 1fr; }
          .communities-row { grid-template-columns: 1fr; }
          .actions-grid { grid-template-columns: 1fr; }
          .welcome-card { flex-direction: column; text-align: center; }
        }
      `})]})}const Ni={search:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),users:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),plus:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),hash:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),d.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),d.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),d.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]})},mw=["All","Gaming","Art","Music","Tech","Photography","Fitness","Fashion"],pw=[{name:"Pixel Art Masters",members:"12.4k",category:"Art",desc:"A community for pixel art enthusiasts and digital artists.",color:"#ff6b6b"},{name:"Cyber Gamers",members:"8.7k",category:"Gaming",desc:"Discuss the latest games, strategies, and esports.",color:"#ffa502"},{name:"Synthwave Producers",members:"5.2k",category:"Music",desc:"Create and share synthwave, retrowave, and chill beats.",color:"#7bed9f"},{name:"Code Brigade",members:"15.3k",category:"Tech",desc:"Web dev, AI, open source — all things code.",color:"#70a1ff"},{name:"Lens Culture",members:"6.8k",category:"Photography",desc:"Share your best shots and photography techniques.",color:"#ff6348"},{name:"Neon Fitness",members:"4.1k",category:"Fitness",desc:"Push your limits with the neon fitness crew.",color:"#a29bfe"},{name:"Digital Canvas",members:"9.5k",category:"Art",desc:"Digital painting, 3D modeling, and concept art.",color:"#55efc4"},{name:"Vaporwave Lounge",members:"3.9k",category:"Music",desc:"Chill aesthetics, vaporwave, and lo-fi vibes.",color:"#fd79a8"}];function gw(){const[r,a]=T.useState("All"),[i,l]=T.useState(""),o=pw.filter(u=>{const f=r==="All"||u.category===r,m=u.name.toLowerCase().includes(i.toLowerCase())||u.desc.toLowerCase().includes(i.toLowerCase());return f&&m});return d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"communities-page",children:[d.jsxs("div",{className:"page-header",children:[d.jsx("h1",{children:"Communities"}),d.jsx("p",{children:"Discover and join communities that match your interests"})]}),d.jsxs("div",{className:"search-bar glass",children:[Ni.search,d.jsx("input",{type:"text",placeholder:"Search communities...",value:i,onChange:u=>l(u.target.value)})]}),d.jsx("div",{className:"category-pills",children:mw.map(u=>d.jsxs("button",{className:`pill ${r===u?"active":""}`,onClick:()=>a(u),children:[u==="All"?null:d.jsx("span",{className:"pill-icon",children:Ni.hash}),u]},u))}),o.length===0?d.jsxs("div",{className:"empty-state glass",children:[Ni.search,d.jsx("h3",{children:"No communities found"}),d.jsx("p",{children:"Try adjusting your search or filter"})]}):d.jsxs("div",{className:"communities-grid",children:[o.map((u,f)=>d.jsxs("div",{className:"community-card glass",children:[d.jsxs("div",{className:"community-card-header",style:{background:`linear-gradient(135deg, ${u.color}22, ${u.color}44)`},children:[d.jsx("div",{className:"community-avatar",style:{background:u.color},children:u.name.charAt(0)}),d.jsx("span",{className:"community-category",children:u.category})]}),d.jsxs("div",{className:"community-card-body",children:[d.jsx("h3",{children:u.name}),d.jsx("p",{children:u.desc}),d.jsx("div",{className:"community-meta",children:d.jsxs("span",{children:[Ni.users," ",u.members," members"]})})]}),d.jsx("div",{className:"community-card-footer",children:d.jsx("button",{className:"join-community-btn",children:"Join Community"})})]},f)),d.jsxs("div",{className:"community-card create-card glass",children:[d.jsx("div",{className:"create-card-icon",children:Ni.plus}),d.jsx("h3",{children:"Create Community"}),d.jsx("p",{children:"Start your own community and bring people together"}),d.jsx("button",{className:"create-community-btn",children:"Get Started"})]})]})]}),d.jsx("style",{children:`
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
      `})]})}const ra={search:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"11",cy:"11",r:"8"}),d.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),trending:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),d.jsx("polyline",{points:"17 6 23 6 23 12"})]}),heart:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),heartFilled:d.jsx("svg",{viewBox:"0 0 24 24",fill:"#ff6464",stroke:"#ff6464",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),messageCircle:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),eye:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),d.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),hash:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),d.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),d.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),d.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]})},vw=["Trending","Recent","Popular","Following"],yw=[{title:"Neon Dreams Collection",author:"@cyberartist",likes:"3.4k",comments:"142",hue:0},{title:"Synthwave Sunset",author:"@vaporwave",likes:"2.8k",comments:"98",hue:220},{title:"Digital Garden",author:"@pixelkitten",likes:"1.9k",comments:"67",hue:120},{title:"Cyberpunk Cityscape",author:"@neondreamer",likes:"4.2k",comments:"203",hue:300},{title:"Abstract AI Series #7",author:"@deepmind",likes:"2.1k",comments:"55",hue:45},{title:"Retro Wave Rider",author:"@outrun",likes:"5.6k",comments:"312",hue:170}],bw=[{name:"CyberArtist",handle:"@cyberartist",color:"#ff6b6b"},{name:"PixelKitten",handle:"@pixelkitten",color:"#7bed9f"},{name:"NeonDreamer",handle:"@neondreamer",color:"#70a1ff"},{name:"VaporWave",handle:"@vaporwave",color:"#fd79a8"},{name:"DeepMind",handle:"@deepmind",color:"#a29bfe"}];function xw(){const[r,a]=T.useState("Trending"),[i,l]=T.useState(""),[o,u]=T.useState({}),f=m=>u(p=>({...p,[m]:!p[m]}));return d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"explore-page",children:[d.jsxs("div",{className:"page-header",children:[d.jsx("h1",{children:"Explore"}),d.jsx("p",{children:"Discover trending content, creators, and more"})]}),d.jsxs("div",{className:"search-bar glass",children:[ra.search,d.jsx("input",{type:"text",placeholder:"Search posts, creators, hashtags...",value:i,onChange:m=>l(m.target.value)})]}),d.jsx("div",{className:"hashtags-row",children:["#neon","#synthwave","#cyberpunk","#aiart","#vaporwave","#pixelart"].map((m,p)=>d.jsxs("span",{className:"hashtag-pill glass",children:[ra.hash," ",m]},p))}),d.jsx("div",{className:"filter-tabs",children:vw.map(m=>d.jsxs("button",{className:`filter-tab ${r===m?"active":""}`,onClick:()=>a(m),children:[m==="Trending"&&ra.trending,m==="Recent"&&ra.eye,m==="Popular"&&ra.heart,m==="Following"&&ra.hash,m]},m))}),d.jsx("div",{className:"explore-grid",children:yw.map((m,p)=>d.jsxs("div",{className:"explore-card glass",children:[d.jsx("div",{className:"explore-card-thumb",style:{background:`linear-gradient(135deg, hsl(${m.hue}, 80%, 20%), hsl(${m.hue+60}, 80%, 8%))`},children:d.jsx("div",{className:"explore-card-overlay",children:d.jsxs("span",{className:"explore-view-btn",children:[ra.eye," View"]})})}),d.jsxs("div",{className:"explore-card-body",children:[d.jsx("h3",{children:m.title}),d.jsx("span",{className:"explore-author",children:m.author}),d.jsxs("div",{className:"explore-card-actions",children:[d.jsxs("button",{className:`explore-action ${o[p]?"liked":""}`,onClick:()=>f(p),children:[o[p]?ra.heartFilled:ra.heart,d.jsx("span",{children:m.likes})]}),d.jsxs("span",{className:"explore-action",children:[ra.messageCircle,d.jsx("span",{children:m.comments})]})]})]})]},p))}),d.jsxs("section",{className:"section",children:[d.jsx("h2",{className:"section-title",children:"Creators to Follow"}),d.jsx("div",{className:"creators-scroll",children:bw.map((m,p)=>d.jsxs("div",{className:"creator-card glass",children:[d.jsx("div",{className:"creator-avatar",style:{background:`linear-gradient(135deg, ${m.color}, ${m.color}88)`},children:m.name.charAt(0)}),d.jsxs("div",{className:"creator-info",children:[d.jsx("span",{className:"creator-name",children:m.name}),d.jsx("span",{className:"creator-handle",children:m.handle})]}),d.jsx("button",{className:"follow-btn",children:"Follow"})]},p))})]})]}),d.jsx("style",{children:`
        .explore-page {
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

        .hashtags-row {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .hashtag-pill {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.2s;
        }
        .hashtag-pill svg { width: 14px; height: 14px; }
        .hashtag-pill:hover { color: #CCFF00; border-color: rgba(204,255,0,0.3); }

        .filter-tabs {
          display: flex;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .filter-tab {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.08);
          background: transparent;
          color: rgba(255,255,255,0.5);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .filter-tab svg { width: 16px; height: 16px; }
        .filter-tab:hover { color: #fff; border-color: rgba(255,255,255,0.15); }
        .filter-tab.active { background: rgba(204,255,0,0.1); color: #CCFF00; border-color: rgba(204,255,0,0.3); }

        .explore-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .explore-card { overflow: hidden; transition: transform 0.3s; }
        .explore-card:hover { transform: translateY(-4px); }
        .explore-card-thumb {
          height: 180px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .explore-card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s;
        }
        .explore-card:hover .explore-card-overlay { opacity: 1; }
        .explore-view-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.2rem;
          border-radius: 8px;
          background: rgba(255,255,255,0.1);
          color: #fff;
          font-size: 0.85rem;
          cursor: pointer;
          backdrop-filter: blur(8px);
        }
        .explore-view-btn svg { width: 16px; height: 16px; }
        .explore-card-body { padding: 1rem; }
        .explore-card-body h3 { margin: 0 0 0.25rem; font-size: 0.95rem; color: #fff; font-weight: 600; }
        .explore-author { font-size: 0.8rem; color: rgba(255,255,255,0.35); display: block; margin-bottom: 0.75rem; }
        .explore-card-actions { display: flex; gap: 1rem; }
        .explore-action {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.8rem;
          color: rgba(255,255,255,0.4);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
        }
        .explore-action svg { width: 16px; height: 16px; }
        .explore-action.liked { color: #ff6464; }

        .section { margin-bottom: 2rem; }
        .section-title { font-size: 1.1rem; font-weight: 600; color: #fff; margin: 0 0 1rem; }

        .creators-scroll {
          display: flex;
          gap: 0.75rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
          scrollbar-width: none;
        }
        .creators-scroll::-webkit-scrollbar { display: none; }
        .creator-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          min-width: 240px;
          flex-shrink: 0;
          transition: transform 0.3s;
        }
        .creator-card:hover { transform: translateY(-2px); }
        .creator-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: #fff;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .creator-info { display: flex; flex-direction: column; flex: 1; min-width: 0; }
        .creator-name { font-size: 0.85rem; color: #fff; font-weight: 500; }
        .creator-handle { font-size: 0.75rem; color: rgba(255,255,255,0.35); }
        .follow-btn {
          padding: 0.35rem 0.8rem;
          border-radius: 6px;
          border: 1px solid rgba(255,255,255,0.12);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          flex-shrink: 0;
        }
        .follow-btn:hover { border-color: #CCFF00; color: #CCFF00; }

        @media (max-width: 900px) {
          .explore-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .explore-page { padding: 1rem; }
          .explore-grid { grid-template-columns: 1fr; }
          .filter-tabs { flex-wrap: wrap; }
          .page-header h1 { font-size: 1.4rem; }
        }
      `})]})}const Cn={heartFilled:d.jsx("svg",{viewBox:"0 0 24 24",fill:"#ff6464",stroke:"#ff6464",strokeWidth:"2",children:d.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),user:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),messageCircle:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),users:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),checkAll:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("polyline",{points:"9 11 12 14 22 4"}),d.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"}),d.jsx("polyline",{points:"9 11 12 14 22 4"})]}),bellOff:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"}),d.jsx("path",{d:"M18.63 13A17.89 17.89 0 0118 8"}),d.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"}),d.jsx("path",{d:"M18 8a6 6 0 00-9.33-5"}),d.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),tag:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"}),d.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})},ww=[{type:"like",icon:"heart",text:'CyberArtist liked your post "Neon Dreams"',time:"2m ago",read:!1},{type:"follow",icon:"user",text:"PixelKitten started following you",time:"8m ago",read:!1},{type:"comment",icon:"message",text:"VaporWave commented on your post",time:"15m ago",read:!1},{type:"invite",icon:"users",text:"You were invited to join Synthwave Producers",time:"42m ago",read:!1},{type:"tag",icon:"tag",text:"NeonDreamer tagged you in a post",time:"1h ago",read:!0}],_w=[{type:"like",icon:"heart",text:'DeepMind liked your post "Abstract #7"',time:"3h ago",read:!0},{type:"follow",icon:"user",text:"OutRunner started following you",time:"5h ago",read:!0},{type:"comment",icon:"message",text:'RetroArt commented on "Digital Garden"',time:"1d ago",read:!0},{type:"like",icon:"heart",text:"AstroMike liked 3 of your posts",time:"2d ago",read:!0}],Fp={heart:Cn.heartFilled,user:Cn.user,message:Cn.messageCircle,users:Cn.users,tag:Cn.tag};function Sw(){const[r,a]=T.useState(ww),[i,l]=T.useState(!1),o=()=>{a(f=>f.map(m=>({...m,read:!0})))},u=r.filter(f=>!f.read).length;return i?d.jsxs("div",{className:"page-enter",children:[d.jsx("div",{className:"notifications-page",children:d.jsxs("div",{className:"empty-state glass",children:[d.jsx("div",{className:"empty-icon",children:Cn.bellOff}),d.jsx("h3",{children:"All caught up!"}),d.jsx("p",{children:"No new notifications. You're up to date."})]})}),d.jsx("style",{children:Qp})]}):d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"notifications-page",children:[d.jsxs("div",{className:"page-header",children:[d.jsxs("div",{className:"page-header-left",children:[d.jsx("h1",{children:"Notifications"}),u>0&&d.jsx("span",{className:"unread-badge",children:u})]}),d.jsxs("button",{className:"mark-all-btn",onClick:o,disabled:u===0,children:[Cn.checkAll," Mark all as read"]})]}),u>0&&d.jsxs("div",{className:"notif-section",children:[d.jsx("h2",{className:"notif-section-title",children:"Today"}),d.jsx("div",{className:"notif-list",children:r.map((f,m)=>d.jsxs("div",{className:`notif-item glass ${f.read?"notif-read":""}`,children:[d.jsx("div",{className:"notif-icon",style:{background:f.read?"rgba(255,255,255,0.05)":"rgba(204,255,0,0.1)"},children:Fp[f.icon]}),d.jsxs("div",{className:"notif-content",children:[d.jsx("p",{className:"notif-text",children:f.text}),d.jsx("span",{className:"notif-time",children:f.time})]}),!f.read&&d.jsx("div",{className:"notif-dot"})]},m))})]}),d.jsxs("div",{className:"notif-section",children:[d.jsx("h2",{className:"notif-section-title",children:"Earlier"}),d.jsx("div",{className:"notif-list",children:_w.map((f,m)=>d.jsxs("div",{className:"notif-item glass notif-read",children:[d.jsx("div",{className:"notif-icon",style:{background:"rgba(255,255,255,0.05)"},children:Fp[f.icon]}),d.jsxs("div",{className:"notif-content",children:[d.jsx("p",{className:"notif-text",children:f.text}),d.jsx("span",{className:"notif-time",children:f.time})]})]},m))})]})]}),d.jsx("style",{children:Qp})]})}const Qp=`
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
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255,255,255,0.08);
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
  .page-header h1 { font-size: 1.75rem; font-weight: 700; color: #fff; margin: 0; }
  .unread-badge {
    padding: 0.15rem 0.55rem;
    border-radius: 100px;
    background: #CCFF00;
    color: #08080f;
    font-size: 0.8rem;
    font-weight: 600;
  }
  .mark-all-btn {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.1);
    background: transparent;
    color: rgba(255,255,255,0.5);
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: inherit;
  }
  .mark-all-btn svg { width: 16px; height: 16px; }
  .mark-all-btn:hover:not(:disabled) { border-color: #CCFF00; color: #CCFF00; }
  .mark-all-btn:disabled { opacity: 0.4; cursor: default; }

  .notif-section { margin-bottom: 1.5rem; }
  .notif-section-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: rgba(255,255,255,0.3);
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
  .notif-icon svg { color: #CCFF00; }
  .notif-read .notif-icon svg { color: rgba(255,255,255,0.3); }
  .notif-content { flex: 1; min-width: 0; }
  .notif-text {
    margin: 0 0 0.2rem;
    font-size: 0.9rem;
    color: #fff;
    line-height: 1.4;
  }
  .notif-time { font-size: 0.78rem; color: rgba(255,255,255,0.3); }
  .notif-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: #CCFF00;
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
  .empty-icon svg { width: 56px; height: 56px; color: rgba(255,255,255,0.12); }
  .empty-state h3 { margin: 0; color: #fff; font-weight: 600; }
  .empty-state p { margin: 0; color: rgba(255,255,255,0.4); font-size: 0.9rem; }

  @media (max-width: 768px) {
    .page-header { flex-direction: column; align-items: flex-start; }
    .mark-all-btn { width: 100%; justify-content: center; }
    .notif-item { padding: 0.85rem 1rem; }
  }
  @media (max-width: 600px) {
    .notifications-page { padding: 1rem; }
    .page-header h1 { font-size: 1.4rem; }
  }
`,rn={mail:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"}),d.jsx("polyline",{points:"22,6 12,13 2,6"})]}),shield:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),globe:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),d.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),lock:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),d.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),chevronRight:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("polyline",{points:"9 18 15 12 9 6"})}),edit:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"}),d.jsx("path",{d:"M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"})]}),logOut:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),smartphone:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("rect",{x:"5",y:"2",width:"14",height:"20",rx:"2",ry:"2"}),d.jsx("line",{x1:"12",y1:"18",x2:"12.01",y2:"18"})]})};function jw(){var u,f;const{user:r,signOut:a}=Vl(),i=((u=r==null?void 0:r.user_metadata)==null?void 0:u.username)||((f=r==null?void 0:r.email)==null?void 0:f.split("@")[0])||"User",l=(r==null?void 0:r.email)||"user@framex.app",o=i.charAt(0).toUpperCase();return d.jsxs("div",{className:"page-enter",children:[d.jsxs("div",{className:"settings-page",children:[d.jsxs("div",{className:"page-header",children:[d.jsx("h1",{children:"Settings"}),d.jsx("p",{children:"Manage your account and preferences"})]}),d.jsxs("div",{className:"profile-card glass",children:[d.jsx("div",{className:"profile-avatar",children:o}),d.jsxs("div",{className:"profile-info",children:[d.jsx("h2",{children:i}),d.jsx("span",{className:"profile-email",children:l})]}),d.jsxs("button",{className:"edit-profile-btn",children:[rn.edit," Edit Profile"]})]}),d.jsxs("div",{className:"settings-card glass",children:[d.jsx("h3",{className:"settings-card-title",children:"Account Settings"}),d.jsx("div",{className:"settings-items",children:[{icon:rn.mail,label:"Email Notifications",desc:"Manage email preferences"},{icon:rn.shield,label:"Two-Factor Auth",desc:"Enhance account security"},{icon:rn.smartphone,label:"Connected Accounts",desc:"Link social profiles"},{icon:rn.globe,label:"Language",desc:"English (US)"}].map((m,p)=>d.jsxs("div",{className:"settings-item",children:[d.jsx("div",{className:"settings-item-icon",children:m.icon}),d.jsxs("div",{className:"settings-item-content",children:[d.jsx("span",{className:"settings-item-label",children:m.label}),d.jsx("span",{className:"settings-item-desc",children:m.desc})]}),d.jsx("div",{className:"settings-item-arrow",children:rn.chevronRight})]},p))})]}),d.jsxs("div",{className:"settings-card glass",children:[d.jsx("h3",{className:"settings-card-title",children:"Privacy"}),d.jsx("div",{className:"settings-items",children:[{label:"Private Account",desc:"Only approved followers can see your content"},{label:"Activity Status",desc:"Show when you're active"},{label:"Show Read Receipts",desc:"Let others know you've seen their messages"}].map((m,p)=>d.jsxs("div",{className:"settings-item",children:[d.jsx("div",{className:"settings-item-icon",children:rn.lock}),d.jsxs("div",{className:"settings-item-content",children:[d.jsx("span",{className:"settings-item-label",children:m.label}),d.jsx("span",{className:"settings-item-desc",children:m.desc})]}),d.jsx("div",{className:`toggle ${p===1?"toggle-on":""}`,children:d.jsx("div",{className:"toggle-knob"})})]},p))})]}),d.jsxs("div",{className:"settings-card glass danger-zone",children:[d.jsx("h3",{className:"settings-card-title",style:{color:"#ff6464"},children:"Danger Zone"}),d.jsx("p",{className:"danger-desc",children:"Once you delete your account, there is no going back. Please be certain."}),d.jsx("button",{className:"delete-btn",children:"Delete Account"})]}),d.jsxs("div",{className:"sign-out-section",children:[d.jsxs("button",{className:"sign-out-btn",onClick:a,children:[rn.logOut," Sign Out"]}),d.jsx("span",{className:"version",children:"FrameX v1.0.0"})]})]}),d.jsx("style",{children:`
        .settings-page {
          padding: 1.5rem;
          max-width: 720px;
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

        /* Profile */
        .profile-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1.25rem;
          margin-bottom: 1rem;
        }
        .profile-avatar {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #CCFF00, #a0cc00);
          color: #08080f;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.4rem;
          font-weight: 700;
          flex-shrink: 0;
        }
        .profile-info { flex: 1; min-width: 0; }
        .profile-info h2 { margin: 0; font-size: 1.1rem; font-weight: 600; color: #fff; }
        .profile-email { font-size: 0.85rem; color: rgba(255,255,255,0.4); }
        .edit-profile-btn {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.6);
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          flex-shrink: 0;
        }
        .edit-profile-btn svg { width: 16px; height: 16px; }
        .edit-profile-btn:hover { border-color: #CCFF00; color: #CCFF00; }

        /* Cards */
        .settings-card {
          padding: 1.25rem;
          margin-bottom: 1rem;
        }
        .settings-card-title {
          font-size: 0.9rem;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin: 0 0 0.75rem;
        }
        .settings-items { display: flex; flex-direction: column; }
        .settings-item {
          display: flex;
          align-items: center;
          gap: 0.85rem;
          padding: 0.85rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .settings-item:last-child { border-bottom: none; }
        .settings-item:hover { opacity: 0.8; }
        .settings-item-icon {
          width: 36px; height: 36px;
          border-radius: 10px;
          background: rgba(255,255,255,0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .settings-item-icon svg { width: 18px; height: 18px; color: rgba(255,255,255,0.4); }
        .settings-item-content { flex: 1; min-width: 0; display: flex; flex-direction: column; gap: 0.1rem; }
        .settings-item-label { font-size: 0.9rem; color: #fff; font-weight: 500; }
        .settings-item-desc { font-size: 0.78rem; color: rgba(255,255,255,0.3); }
        .settings-item-arrow svg { width: 18px; height: 18px; color: rgba(255,255,255,0.2); }

        /* Toggle */
        .toggle {
          width: 40px; height: 22px;
          border-radius: 11px;
          background: rgba(255,255,255,0.1);
          position: relative;
          transition: background 0.3s;
          flex-shrink: 0;
          cursor: pointer;
        }
        .toggle-on { background: #CCFF00; }
        .toggle-knob {
          width: 16px; height: 16px;
          border-radius: 50%;
          background: #fff;
          position: absolute;
          top: 3px; left: 3px;
          transition: transform 0.3s;
        }
        .toggle-on .toggle-knob { transform: translateX(18px); }

        /* Danger zone */
        .danger-zone { border-color: rgba(255, 100, 100, 0.15); }
        .danger-desc { font-size: 0.85rem; color: rgba(255,255,255,0.4); margin: 0 0 1rem; }
        .delete-btn {
          padding: 0.6rem 1.5rem;
          border-radius: 8px;
          border: 1px solid rgba(255, 100, 100, 0.3);
          background: rgba(255, 100, 100, 0.1);
          color: #ff6464;
          font-size: 0.85rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
          font-weight: 500;
        }
        .delete-btn:hover { background: #ff6464; color: #fff; }

        /* Sign out */
        .sign-out-section {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.75rem;
          padding: 2rem 0;
        }
        .sign-out-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 2rem;
          border-radius: 8px;
          border: 1px solid rgba(255,255,255,0.1);
          background: transparent;
          color: rgba(255,255,255,0.5);
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.2s;
          font-family: inherit;
        }
        .sign-out-btn svg { width: 18px; height: 18px; }
        .sign-out-btn:hover { border-color: rgba(255,100,100,0.4); color: #ff6464; }
        .version { font-size: 0.75rem; color: rgba(255,255,255,0.2); }

        @media (max-width: 600px) {
          .settings-page { padding: 1rem; }
          .profile-card { flex-wrap: wrap; justify-content: center; text-align: center; }
          .profile-info { width: 100%; text-align: center; }
          .edit-profile-btn { width: 100%; justify-content: center; }
          .page-header h1 { font-size: 1.4rem; }
        }
      `})]})}class kw extends T.Component{constructor(a){super(a),this.state={error:null}}static getDerivedStateFromError(a){return{error:a}}componentDidCatch(a,i){console.error("ErrorBoundary caught:",a,i)}render(){return this.state.error?d.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},children:d.jsxs("div",{style:{maxWidth:480,padding:"2rem",background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.08)"},children:[d.jsx("h2",{style:{margin:"0 0 0.75rem",fontSize:"1.25rem"},children:"Something went wrong"}),d.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",margin:0},children:this.state.error.message})]})}):this.props.children}}function wr({children:r}){const{isAuthenticated:a,loading:i}=Vl(),l=Ot();return i?d.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[d.jsx("div",{className:"auth-spinner"}),d.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),d.jsx("style",{children:`
          .auth-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):a?r:d.jsx(xb,{to:"/login",state:{from:l},replace:!0})}const Ci={menu:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),d.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),d.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),home:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M3 12l9-9 9 9"}),d.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),chat:d.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:d.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),communities:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),d.jsx("circle",{cx:"9",cy:"7",r:"4"}),d.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),d.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"10"}),d.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),notification:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),d.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),settings:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("circle",{cx:"12",cy:"12",r:"3"}),d.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),logout:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),d.jsx("polyline",{points:"16 17 21 12 16 7"}),d.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),close:d.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[d.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),d.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})},Ew=[{path:"/home",label:"Home",icon:"home"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/communities",label:"Communities",icon:"communities"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/notifications",label:"Notifications",icon:"notification"},{path:"/settings",label:"Settings",icon:"settings"}],Tw={"/home":"Home","/chat":"Chats","/communities":"Communities","/explore":"Explore","/notifications":"Notifications","/settings":"Settings"};function Ri({children:r}){var b,w;const[a,i]=T.useState(!1),{user:l,signOut:o}=Vl(),u=Cr(),f=Ot(),m=((b=l==null?void 0:l.user_metadata)==null?void 0:b.username)||((w=l==null?void 0:l.email)==null?void 0:w.split("@")[0])||"User";T.useEffect(()=>(a?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[a]),T.useEffect(()=>{const _=E=>{E.key==="Escape"&&i(!1)};return window.addEventListener("keydown",_),()=>window.removeEventListener("keydown",_)},[]);const p=_=>{i(!1),u(_)},g=async()=>{i(!1),await o(),u("/login")},y=Tw[f.pathname]||"FrameX";return d.jsxs("div",{className:"app-layout",children:[d.jsxs("header",{className:"app-header",children:[d.jsx("button",{className:"hamburger",onClick:()=>i(!0),"aria-label":"Open menu",children:Ci.menu}),d.jsxs("div",{className:"header-logo",onClick:()=>u("/home"),children:[d.jsx("span",{className:"logo-mark",children:"F"}),d.jsx("span",{className:"logo-text",children:"FrameX"})]}),d.jsx("div",{className:"header-title",children:y}),d.jsx("div",{className:"header-actions",children:d.jsx("button",{className:"header-icon",onClick:()=>u("/notifications"),"aria-label":"Notifications",children:Ci.notification})})]}),d.jsx("div",{className:`sidebar-backdrop ${a?"active":""}`,onClick:()=>i(!1)}),d.jsxs("aside",{className:`app-sidebar ${a?"open":""}`,children:[d.jsxs("div",{className:"sidebar-header",children:[d.jsxs("div",{className:"sidebar-profile",children:[d.jsx("div",{className:"sidebar-avatar",children:m[0].toUpperCase()}),d.jsxs("div",{className:"sidebar-user-info",children:[d.jsx("span",{className:"sidebar-username",children:m}),d.jsx("span",{className:"sidebar-status",children:"Online"})]})]}),d.jsx("button",{className:"sidebar-close",onClick:()=>i(!1),"aria-label":"Close menu",children:Ci.close})]}),d.jsx("nav",{className:"sidebar-nav",children:Ew.map(_=>d.jsxs("button",{className:`sidebar-nav-item ${f.pathname===_.path?"active":""}`,onClick:()=>p(_.path),children:[d.jsx("span",{className:"nav-icon",children:Ci[_.icon]}),d.jsx("span",{className:"nav-label",children:_.label}),_.label==="Notifications"&&d.jsx("span",{className:"nav-badge",children:"3"})]},_.path))}),d.jsxs("div",{className:"sidebar-footer",children:[d.jsxs("button",{className:"sidebar-nav-item logout",onClick:g,children:[d.jsx("span",{className:"nav-icon",children:Ci.logout}),d.jsx("span",{className:"nav-label",children:"Log Out"})]}),d.jsx("div",{className:"sidebar-version",children:"FrameX v1.0.0"})]})]}),d.jsx("main",{className:"app-main",children:r}),d.jsx("style",{children:`
        .app-layout {
          min-height: 100vh;
          background: #08080f;
          color: #fff;
        }

        /* ===== HEADER ===== */
        .app-header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 5%;
          background: rgba(8,8,15,0.85);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border-bottom: 1px solid rgba(255,255,255,0.05);
          height: 56px;
        }

        .hamburger {
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 12px;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .hamburger:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .hamburger:active { transform: scale(0.92); }
        .hamburger svg { width: 20px; height: 20px; }

        .header-logo {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          cursor: pointer;
          flex-shrink: 0;
        }
        .logo-mark {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: #CCFF00;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.8rem;
          font-weight: 700;
          color: #08080f;
          flex-shrink: 0;
        }
        .logo-text {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #CCFF00;
          display: none;
        }
        @media (min-width: 480px) { .logo-text { display: block; } }

        .header-title {
          flex: 1;
          font-size: 1rem;
          font-weight: 600;
          color: rgba(255,255,255,0.85);
          text-align: center;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        .header-icon {
          width: 38px; height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          transition: all 0.25s ease;
          padding: 0;
        }
        .header-icon:hover { background: rgba(255,255,255,0.06); color: #fff; }
        .header-icon:active { transform: scale(0.92); }
        .header-icon svg { width: 20px; height: 20px; }

        /* ===== SIDEBAR BACKDROP ===== */
        .sidebar-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          z-index: 200;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .sidebar-backdrop.active { opacity: 1; pointer-events: all; }

        /* ===== SIDEBAR ===== */
        .app-sidebar {
          position: fixed;
          top: 0; left: 0;
          width: 280px;
          max-width: 82vw;
          height: 100vh; height: 100dvh;
          z-index: 201;
          background: rgba(10,10,22,0.97);
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          border-right: 1px solid rgba(255,255,255,0.06);
          transform: translateX(-100%);
          transition: transform 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          display: flex;
          flex-direction: column;
          box-shadow: 4px 0 40px rgba(0,0,0,0.4);
        }
        .app-sidebar.open { transform: translateX(0); }

        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 1.25rem 1.25rem 0.75rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .sidebar-profile {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .sidebar-avatar {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: linear-gradient(135deg, #CCFF00, #00E5FF);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.1rem;
          font-weight: 700;
          color: #08080f;
          flex-shrink: 0;
        }
        .sidebar-user-info {
          display: flex;
          flex-direction: column;
        }
        .sidebar-username {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
        }
        .sidebar-status {
          font-size: 0.75rem;
          color: #4ade80;
        }
        .sidebar-close {
          width: 36px; height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          color: rgba(255,255,255,0.5);
          cursor: pointer;
          padding: 0;
          transition: all 0.25s ease;
        }
        .sidebar-close:hover { background: rgba(255,255,255,0.1); color: #fff; }
        .sidebar-close svg { width: 18px; height: 18px; }

        .sidebar-nav {
          flex: 1;
          padding: 0.75rem 0.75rem;
          display: flex;
          flex-direction: column;
          gap: 0.15rem;
          overflow-y: auto;
        }
        .sidebar-nav-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 0.85rem;
          background: transparent;
          border: none;
          border-radius: 12px;
          color: rgba(255,255,255,0.55);
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.2s ease;
          text-align: left;
          width: 100%;
          font-family: 'DM Sans', 'Inter', sans-serif;
          position: relative;
        }
        .sidebar-nav-item:hover {
          color: #fff;
          background: rgba(255,255,255,0.05);
        }
        .sidebar-nav-item.active {
          color: #CCFF00;
          background: rgba(204,255,0,0.08);
        }
        .sidebar-nav-item .nav-icon {
          width: 22px; height: 22px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sidebar-nav-item .nav-icon svg {
          width: 20px; height: 20px;
        }
        .sidebar-nav-item .nav-label {
          flex: 1;
        }
        .nav-badge {
          background: #CCFF00;
          color: #08080f;
          font-size: 0.7rem;
          font-weight: 700;
          padding: 0.1rem 0.45rem;
          border-radius: 10px;
          min-width: 20px;
          text-align: center;
        }

        .sidebar-footer {
          padding: 0.75rem;
          border-top: 1px solid rgba(255,255,255,0.04);
        }
        .sidebar-footer .logout {
          color: rgba(255,255,255,0.4);
        }
        .sidebar-footer .logout:hover {
          color: #ff4d4d;
          background: rgba(255,77,77,0.06);
        }
        .sidebar-version {
          text-align: center;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.15);
          margin-top: 0.5rem;
        }

        /* ===== MAIN CONTENT ===== */
        .app-main {
          padding-top: 56px;
          min-height: 100vh;
        }

        /* ===== PAGE TRANSITIONS ===== */
        .page-enter {
          animation: pageIn 0.35s ease-out;
        }
        @keyframes pageIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ===== RESPONSIVE ===== */
        @media (min-width: 768px) {
          .app-sidebar { width: 280px; }
        }

        @media (max-width: 480px) {
          .app-header { padding: 0.6rem 4%; }
          .header-title { font-size: 0.9rem; }
        }
      `})]})}function Aw(){return d.jsx(kw,{children:d.jsx(hw,{children:d.jsxs(_b,{children:[d.jsx(ia,{path:"/",element:d.jsx(ax,{})}),d.jsx(ia,{path:"/about",element:d.jsx(nx,{})}),d.jsx(ia,{path:"/login",element:d.jsx(lw,{})}),d.jsx(ia,{path:"/chat",element:d.jsx(wr,{children:d.jsx(dw,{})})}),d.jsx(ia,{path:"/home",element:d.jsx(wr,{children:d.jsx(Ri,{children:d.jsx(fw,{})})})}),d.jsx(ia,{path:"/communities",element:d.jsx(wr,{children:d.jsx(Ri,{children:d.jsx(gw,{})})})}),d.jsx(ia,{path:"/explore",element:d.jsx(wr,{children:d.jsx(Ri,{children:d.jsx(xw,{})})})}),d.jsx(ia,{path:"/notifications",element:d.jsx(wr,{children:d.jsx(Ri,{children:d.jsx(Sw,{})})})}),d.jsx(ia,{path:"/settings",element:d.jsx(wr,{children:d.jsx(Ri,{children:d.jsx(jw,{})})})})]})})})}_y.createRoot(document.getElementById("root")).render(d.jsx(my.StrictMode,{children:d.jsx(Pb,{children:d.jsx(Aw,{})})}));
