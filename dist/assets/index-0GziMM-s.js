(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function a(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=a(o);fetch(o.href,c)}})();function Db(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Kd={exports:{}},js={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ny;function D5(){if(ny)return js;ny=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(r,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:t,type:r,key:d,ref:o!==void 0?o:null,props:c}}return js.Fragment=e,js.jsx=a,js.jsxs=a,js}var iy;function L5(){return iy||(iy=1,Kd.exports=D5()),Kd.exports}var u=L5(),Yd={exports:{}},je={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function M5(){if(ay)return je;ay=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function w(R){return R===null||typeof R!="object"?null:(R=x&&R[x]||R["@@iterator"],typeof R=="function"?R:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,E={};function _(R,q,W){this.props=R,this.context=q,this.refs=E,this.updater=W||S}_.prototype.isReactComponent={},_.prototype.setState=function(R,q){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,q,"setState")},_.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function N(){}N.prototype=_.prototype;function C(R,q,W){this.props=R,this.context=q,this.refs=E,this.updater=W||S}var V=C.prototype=new N;V.constructor=C,T(V,_.prototype),V.isPureReactComponent=!0;var Y=Array.isArray;function J(){}var M={H:null,A:null,T:null,S:null},H=Object.prototype.hasOwnProperty;function Q(R,q,W){var ae=W.ref;return{$$typeof:t,type:R,key:q,ref:ae!==void 0?ae:null,props:W}}function Z(R,q){return Q(R.type,q,R.props)}function ye(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function he(R){var q={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(W){return q[W]})}var Ae=/\/+/g;function Le(R,q){return typeof R=="object"&&R!==null&&R.key!=null?he(""+R.key):q.toString(36)}function pe(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(J,J):(R.status="pending",R.then(function(q){R.status==="pending"&&(R.status="fulfilled",R.value=q)},function(q){R.status==="pending"&&(R.status="rejected",R.reason=q)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function z(R,q,W,ae,fe){var Se=typeof R;(Se==="undefined"||Se==="boolean")&&(R=null);var X=!1;if(R===null)X=!0;else switch(Se){case"bigint":case"string":case"number":X=!0;break;case"object":switch(R.$$typeof){case t:case e:X=!0;break;case y:return X=R._init,z(X(R._payload),q,W,ae,fe)}}if(X)return fe=fe(R),X=ae===""?"."+Le(R,0):ae,Y(fe)?(W="",X!=null&&(W=X.replace(Ae,"$&/")+"/"),z(fe,q,W,"",function(D){return D})):fe!=null&&(ye(fe)&&(fe=Z(fe,W+(fe.key==null||R&&R.key===fe.key?"":(""+fe.key).replace(Ae,"$&/")+"/")+X)),q.push(fe)),1;X=0;var me=ae===""?".":ae+":";if(Y(R))for(var ue=0;ue<R.length;ue++)ae=R[ue],Se=me+Le(ae,ue),X+=z(ae,q,W,Se,fe);else if(ue=w(R),typeof ue=="function")for(R=ue.call(R),ue=0;!(ae=R.next()).done;)ae=ae.value,Se=me+Le(ae,ue++),X+=z(ae,q,W,Se,fe);else if(Se==="object"){if(typeof R.then=="function")return z(pe(R),q,W,ae,fe);throw q=String(R),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return X}function ee(R,q,W){if(R==null)return R;var ae=[],fe=0;return z(R,ae,"","",function(Se){return q.call(W,Se,fe++)}),ae}function ie(R){if(R._status===-1){var q=R._result;q=q(),q.then(function(W){(R._status===0||R._status===-1)&&(R._status=1,R._result=W)},function(W){(R._status===0||R._status===-1)&&(R._status=2,R._result=W)}),R._status===-1&&(R._status=0,R._result=q)}if(R._status===1)return R._result.default;throw R._result}var be=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},ke={map:ee,forEach:function(R,q,W){ee(R,function(){q.apply(this,arguments)},W)},count:function(R){var q=0;return ee(R,function(){q++}),q},toArray:function(R){return ee(R,function(q){return q})||[]},only:function(R){if(!ye(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return je.Activity=v,je.Children=ke,je.Component=_,je.Fragment=a,je.Profiler=o,je.PureComponent=C,je.StrictMode=r,je.Suspense=p,je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=M,je.__COMPILER_RUNTIME={__proto__:null,c:function(R){return M.H.useMemoCache(R)}},je.cache=function(R){return function(){return R.apply(null,arguments)}},je.cacheSignal=function(){return null},je.cloneElement=function(R,q,W){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ae=T({},R.props),fe=R.key;if(q!=null)for(Se in q.key!==void 0&&(fe=""+q.key),q)!H.call(q,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&q.ref===void 0||(ae[Se]=q[Se]);var Se=arguments.length-2;if(Se===1)ae.children=W;else if(1<Se){for(var X=Array(Se),me=0;me<Se;me++)X[me]=arguments[me+2];ae.children=X}return Q(R.type,fe,ae)},je.createContext=function(R){return R={$$typeof:d,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:c,_context:R},R},je.createElement=function(R,q,W){var ae,fe={},Se=null;if(q!=null)for(ae in q.key!==void 0&&(Se=""+q.key),q)H.call(q,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(fe[ae]=q[ae]);var X=arguments.length-2;if(X===1)fe.children=W;else if(1<X){for(var me=Array(X),ue=0;ue<X;ue++)me[ue]=arguments[ue+2];fe.children=me}if(R&&R.defaultProps)for(ae in X=R.defaultProps,X)fe[ae]===void 0&&(fe[ae]=X[ae]);return Q(R,Se,fe)},je.createRef=function(){return{current:null}},je.forwardRef=function(R){return{$$typeof:h,render:R}},je.isValidElement=ye,je.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:ie}},je.memo=function(R,q){return{$$typeof:g,type:R,compare:q===void 0?null:q}},je.startTransition=function(R){var q=M.T,W={};M.T=W;try{var ae=R(),fe=M.S;fe!==null&&fe(W,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(J,be)}catch(Se){be(Se)}finally{q!==null&&W.types!==null&&(q.types=W.types),M.T=q}},je.unstable_useCacheRefresh=function(){return M.H.useCacheRefresh()},je.use=function(R){return M.H.use(R)},je.useActionState=function(R,q,W){return M.H.useActionState(R,q,W)},je.useCallback=function(R,q){return M.H.useCallback(R,q)},je.useContext=function(R){return M.H.useContext(R)},je.useDebugValue=function(){},je.useDeferredValue=function(R,q){return M.H.useDeferredValue(R,q)},je.useEffect=function(R,q){return M.H.useEffect(R,q)},je.useEffectEvent=function(R){return M.H.useEffectEvent(R)},je.useId=function(){return M.H.useId()},je.useImperativeHandle=function(R,q,W){return M.H.useImperativeHandle(R,q,W)},je.useInsertionEffect=function(R,q){return M.H.useInsertionEffect(R,q)},je.useLayoutEffect=function(R,q){return M.H.useLayoutEffect(R,q)},je.useMemo=function(R,q){return M.H.useMemo(R,q)},je.useOptimistic=function(R,q){return M.H.useOptimistic(R,q)},je.useReducer=function(R,q,W){return M.H.useReducer(R,q,W)},je.useRef=function(R){return M.H.useRef(R)},je.useState=function(R){return M.H.useState(R)},je.useSyncExternalStore=function(R,q,W){return M.H.useSyncExternalStore(R,q,W)},je.useTransition=function(){return M.H.useTransition()},je.version="19.2.7",je}var ry;function mf(){return ry||(ry=1,Yd.exports=M5()),Yd.exports}var j=mf();const Rs=Db(j);var Wd={exports:{}},ks={},Xd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function z5(){return sy||(sy=1,(function(t){function e(z,ee){var ie=z.length;z.push(ee);e:for(;0<ie;){var be=ie-1>>>1,ke=z[be];if(0<o(ke,ee))z[be]=ee,z[ie]=ke,ie=be;else break e}}function a(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var ee=z[0],ie=z.pop();if(ie!==ee){z[0]=ie;e:for(var be=0,ke=z.length,R=ke>>>1;be<R;){var q=2*(be+1)-1,W=z[q],ae=q+1,fe=z[ae];if(0>o(W,ie))ae<ke&&0>o(fe,W)?(z[be]=fe,z[ae]=ie,be=ae):(z[be]=W,z[q]=ie,be=q);else if(ae<ke&&0>o(fe,ie))z[be]=fe,z[ae]=ie,be=ae;else break e}}return ee}function o(z,ee){var ie=z.sortIndex-ee.sortIndex;return ie!==0?ie:z.id-ee.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],y=1,v=null,x=3,w=!1,S=!1,T=!1,E=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function V(z){for(var ee=a(g);ee!==null;){if(ee.callback===null)r(g);else if(ee.startTime<=z)r(g),ee.sortIndex=ee.expirationTime,e(p,ee);else break;ee=a(g)}}function Y(z){if(T=!1,V(z),!S)if(a(p)!==null)S=!0,J||(J=!0,he());else{var ee=a(g);ee!==null&&pe(Y,ee.startTime-z)}}var J=!1,M=-1,H=5,Q=-1;function Z(){return E?!0:!(t.unstable_now()-Q<H)}function ye(){if(E=!1,J){var z=t.unstable_now();Q=z;var ee=!0;try{e:{S=!1,T&&(T=!1,N(M),M=-1),w=!0;var ie=x;try{t:{for(V(z),v=a(p);v!==null&&!(v.expirationTime>z&&Z());){var be=v.callback;if(typeof be=="function"){v.callback=null,x=v.priorityLevel;var ke=be(v.expirationTime<=z);if(z=t.unstable_now(),typeof ke=="function"){v.callback=ke,V(z),ee=!0;break t}v===a(p)&&r(p),V(z)}else r(p);v=a(p)}if(v!==null)ee=!0;else{var R=a(g);R!==null&&pe(Y,R.startTime-z),ee=!1}}break e}finally{v=null,x=ie,w=!1}ee=void 0}}finally{ee?he():J=!1}}}var he;if(typeof C=="function")he=function(){C(ye)};else if(typeof MessageChannel<"u"){var Ae=new MessageChannel,Le=Ae.port2;Ae.port1.onmessage=ye,he=function(){Le.postMessage(null)}}else he=function(){_(ye,0)};function pe(z,ee){M=_(function(){z(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(z){switch(x){case 1:case 2:case 3:var ee=3;break;default:ee=x}var ie=x;x=ee;try{return z()}finally{x=ie}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(z,ee){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var ie=x;x=z;try{return ee()}finally{x=ie}},t.unstable_scheduleCallback=function(z,ee,ie){var be=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?be+ie:be):ie=be,z){case 1:var ke=-1;break;case 2:ke=250;break;case 5:ke=1073741823;break;case 4:ke=1e4;break;default:ke=5e3}return ke=ie+ke,z={id:y++,callback:ee,priorityLevel:z,startTime:ie,expirationTime:ke,sortIndex:-1},ie>be?(z.sortIndex=ie,e(g,z),a(p)===null&&z===a(g)&&(T?(N(M),M=-1):T=!0,pe(Y,ie-be))):(z.sortIndex=ke,e(p,z),S||w||(S=!0,J||(J=!0,he()))),z},t.unstable_shouldYield=Z,t.unstable_wrapCallback=function(z){var ee=x;return function(){var ie=x;x=ee;try{return z.apply(this,arguments)}finally{x=ie}}}})(Jd)),Jd}var oy;function U5(){return oy||(oy=1,Xd.exports=z5()),Xd.exports}var Qd={exports:{}},Tt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function B5(){if(ly)return Tt;ly=1;var t=mf();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:g,implementation:y}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Tt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Tt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return c(p,g,null,y)},Tt.flushSync=function(p){var g=d.T,y=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=g,r.p=y,r.d.f()}},Tt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},Tt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Tt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):y==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Tt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},Tt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin);r.d.L(p,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Tt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},Tt.requestFormReset=function(p){r.d.r(p)},Tt.unstable_batchedUpdates=function(p,g){return p(g)},Tt.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},Tt.useFormStatus=function(){return d.H.useHostTransitionStatus()},Tt.version="19.2.7",Tt}var cy;function P5(){if(cy)return Qd.exports;cy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Qd.exports=B5(),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uy;function V5(){if(uy)return ks;uy=1;var t=U5(),e=mf(),a=P5();function r(n){var i="https://react.dev/errors/"+n;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var i=n,s=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(s=i.return),n=i.return;while(n)}return i.tag===3?s:null}function d(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function h(n){if(n.tag===31){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function p(n){if(c(n)!==n)throw Error(r(188))}function g(n){var i=n.alternate;if(!i){if(i=c(n),i===null)throw Error(r(188));return i!==n?null:n}for(var s=n,l=i;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),n;if(m===l)return p(f),i;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var b=!1,k=f.child;k;){if(k===s){b=!0,s=f,l=m;break}if(k===l){b=!0,l=f,s=m;break}k=k.sibling}if(!b){for(k=m.child;k;){if(k===s){b=!0,s=m,l=f;break}if(k===l){b=!0,l=m,s=f;break}k=k.sibling}if(!b)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:i}function y(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n;for(n=n.child;n!==null;){if(i=y(n),i!==null)return i;n=n.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),C=Symbol.for("react.context"),V=Symbol.for("react.forward_ref"),Y=Symbol.for("react.suspense"),J=Symbol.for("react.suspense_list"),M=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),Q=Symbol.for("react.activity"),Z=Symbol.for("react.memo_cache_sentinel"),ye=Symbol.iterator;function he(n){return n===null||typeof n!="object"?null:(n=ye&&n[ye]||n["@@iterator"],typeof n=="function"?n:null)}var Ae=Symbol.for("react.client.reference");function Le(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Ae?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case T:return"Fragment";case _:return"Profiler";case E:return"StrictMode";case Y:return"Suspense";case J:return"SuspenseList";case Q:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case C:return n.displayName||"Context";case N:return(n._context.displayName||"Context")+".Consumer";case V:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case M:return i=n.displayName||null,i!==null?i:Le(n.type)||"Memo";case H:i=n._payload,n=n._init;try{return Le(n(i))}catch{}}return null}var pe=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ee=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},be=[],ke=-1;function R(n){return{current:n}}function q(n){0>ke||(n.current=be[ke],be[ke]=null,ke--)}function W(n,i){ke++,be[ke]=n.current,n.current=i}var ae=R(null),fe=R(null),Se=R(null),X=R(null);function me(n,i){switch(W(Se,i),W(fe,n),W(ae,null),i.nodeType){case 9:case 11:n=(n=i.documentElement)&&(n=n.namespaceURI)?_0(n):0;break;default:if(n=i.tagName,i=i.namespaceURI)i=_0(i),n=T0(i,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}q(ae),W(ae,n)}function ue(){q(ae),q(fe),q(Se)}function D(n){n.memoizedState!==null&&W(X,n);var i=ae.current,s=T0(i,n.type);i!==s&&(W(fe,n),W(ae,s))}function G(n){fe.current===n&&(q(ae),q(fe)),X.current===n&&(q(X),bs._currentValue=ie)}var ce,we;function _e(n){if(ce===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);ce=i&&i[1]||"",we=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ce+n+we}var rt=!1;function ht(n,i){if(!n||rt)return"";rt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch($){var P=$}Reflect.construct(n,[],K)}else{try{K.call()}catch($){P=$}n.call(K.prototype)}}else{try{throw Error()}catch($){P=$}(K=n())&&typeof K.catch=="function"&&K.catch(function(){})}}catch($){if($&&P&&typeof $.stack=="string")return[$.stack,P.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],k=m[1];if(b&&k){var A=b.split(`
`),B=k.split(`
`);for(f=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;f<B.length&&!B[f].includes("DetermineComponentFrameRoot");)f++;if(l===A.length||f===B.length)for(l=A.length-1,f=B.length-1;1<=l&&0<=f&&A[l]!==B[f];)f--;for(;1<=l&&0<=f;l--,f--)if(A[l]!==B[f]){if(l!==1||f!==1)do if(l--,f--,0>f||A[l]!==B[f]){var I=`
`+A[l].replace(" at new "," at ");return n.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",n.displayName)),I}while(1<=l&&0<=f);break}}}finally{rt=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?_e(s):""}function Nc(n,i){switch(n.tag){case 26:case 27:case 5:return _e(n.type);case 16:return _e("Lazy");case 13:return n.child!==i&&i!==null?_e("Suspense Fallback"):_e("Suspense");case 19:return _e("SuspenseList");case 0:case 15:return ht(n.type,!1);case 11:return ht(n.type.render,!1);case 1:return ht(n.type,!0);case 31:return _e("Activity");default:return""}}function Oc(n){try{var i="",s=null;do i+=Nc(n,s),s=n,n=n.return;while(n);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var ja=Object.prototype.hasOwnProperty,Dc=t.unstable_scheduleCallback,Lc=t.unstable_cancelCallback,dw=t.unstable_shouldYield,hw=t.unstable_requestPaint,qt=t.unstable_now,fw=t.unstable_getCurrentPriorityLevel,ip=t.unstable_ImmediatePriority,ap=t.unstable_UserBlockingPriority,oo=t.unstable_NormalPriority,pw=t.unstable_LowPriority,rp=t.unstable_IdlePriority,mw=t.log,gw=t.unstable_setDisableYieldValue,Nr=null,Ft=null;function pi(n){if(typeof mw=="function"&&gw(n),Ft&&typeof Ft.setStrictMode=="function")try{Ft.setStrictMode(Nr,n)}catch{}}var Gt=Math.clz32?Math.clz32:bw,yw=Math.log,vw=Math.LN2;function bw(n){return n>>>=0,n===0?32:31-(yw(n)/vw|0)|0}var lo=256,co=262144,uo=4194304;function Ki(n){var i=n&42;if(i!==0)return i;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ho(n,i,s){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var k=l&134217727;return k!==0?(l=k&~m,l!==0?f=Ki(l):(b&=k,b!==0?f=Ki(b):s||(s=k&~n,s!==0&&(f=Ki(s))))):(k=l&~m,k!==0?f=Ki(k):b!==0?f=Ki(b):s||(s=l&~n,s!==0&&(f=Ki(s)))),f===0?0:i!==0&&i!==f&&(i&m)===0&&(m=f&-f,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:f}function Or(n,i){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&i)===0}function xw(n,i){switch(n){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function sp(){var n=uo;return uo<<=1,(uo&62914560)===0&&(uo=4194304),n}function Mc(n){for(var i=[],s=0;31>s;s++)i.push(n);return i}function Dr(n,i){n.pendingLanes|=i,i!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ww(n,i,s,l,f,m){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var k=n.entanglements,A=n.expirationTimes,B=n.hiddenUpdates;for(s=b&~s;0<s;){var I=31-Gt(s),K=1<<I;k[I]=0,A[I]=-1;var P=B[I];if(P!==null)for(B[I]=null,I=0;I<P.length;I++){var $=P[I];$!==null&&($.lane&=-536870913)}s&=~K}l!==0&&op(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~i))}function op(n,i,s){n.pendingLanes|=i,n.suspendedLanes&=~i;var l=31-Gt(i);n.entangledLanes|=i,n.entanglements[l]=n.entanglements[l]|1073741824|s&261930}function lp(n,i){var s=n.entangledLanes|=i;for(n=n.entanglements;s;){var l=31-Gt(s),f=1<<l;f&i|n[l]&i&&(n[l]|=i),s&=~f}}function cp(n,i){var s=i&-i;return s=(s&42)!==0?1:zc(s),(s&(n.suspendedLanes|i))!==0?0:s}function zc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Uc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function up(){var n=ee.p;return n!==0?n:(n=window.event,n===void 0?32:W0(n.type))}function dp(n,i){var s=ee.p;try{return ee.p=n,i()}finally{ee.p=s}}var mi=Math.random().toString(36).slice(2),bt="__reactFiber$"+mi,Lt="__reactProps$"+mi,ka="__reactContainer$"+mi,Bc="__reactEvents$"+mi,Sw="__reactListeners$"+mi,jw="__reactHandles$"+mi,hp="__reactResources$"+mi,Lr="__reactMarker$"+mi;function Pc(n){delete n[bt],delete n[Lt],delete n[Bc],delete n[Sw],delete n[jw]}function _a(n){var i=n[bt];if(i)return i;for(var s=n.parentNode;s;){if(i=s[ka]||s[bt]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(n=D0(n);n!==null;){if(s=n[bt])return s;n=D0(n)}return i}n=s,s=n.parentNode}return null}function Ta(n){if(n=n[bt]||n[ka]){var i=n.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return n}return null}function Mr(n){var i=n.tag;if(i===5||i===26||i===27||i===6)return n.stateNode;throw Error(r(33))}function Ea(n){var i=n[hp];return i||(i=n[hp]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function gt(n){n[Lr]=!0}var fp=new Set,pp={};function Yi(n,i){Aa(n,i),Aa(n+"Capture",i)}function Aa(n,i){for(pp[n]=i,n=0;n<i.length;n++)fp.add(i[n])}var kw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),mp={},gp={};function _w(n){return ja.call(gp,n)?!0:ja.call(mp,n)?!1:kw.test(n)?gp[n]=!0:(mp[n]=!0,!1)}function fo(n,i,s){if(_w(i))if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(i);return}}n.setAttribute(i,""+s)}}function po(n,i,s){if(s===null)n.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(i);return}n.setAttribute(i,""+s)}}function In(n,i,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(i,s,""+l)}}function rn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function yp(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Tw(n,i,s){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,i);if(!n.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Vc(n){if(!n._valueTracker){var i=yp(n)?"checked":"value";n._valueTracker=Tw(n,i,""+n[i])}}function vp(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var s=i.getValue(),l="";return n&&(l=yp(n)?n.checked?"true":"false":n.value),n=l,n!==s?(i.setValue(n),!0):!1}function mo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ew=/[\n"\\]/g;function sn(n){return n.replace(Ew,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Hc(n,i,s,l,f,m,b,k){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),i!=null?b==="number"?(i===0&&n.value===""||n.value!=i)&&(n.value=""+rn(i)):n.value!==""+rn(i)&&(n.value=""+rn(i)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),i!=null?$c(n,b,rn(i)):s!=null?$c(n,b,rn(s)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),k!=null&&typeof k!="function"&&typeof k!="symbol"&&typeof k!="boolean"?n.name=""+rn(k):n.removeAttribute("name")}function bp(n,i,s,l,f,m,b,k){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Vc(n);return}s=s!=null?""+rn(s):"",i=i!=null?""+rn(i):s,k||i===n.value||(n.value=i),n.defaultValue=i}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=k?n.checked:!!l,n.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),Vc(n)}function $c(n,i,s){i==="number"&&mo(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ca(n,i,s,l){if(n=n.options,i){i={};for(var f=0;f<s.length;f++)i["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=i.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&l&&(n[s].defaultSelected=!0)}else{for(s=""+rn(s),i=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function xp(n,i,s){if(i!=null&&(i=""+rn(i),i!==n.value&&(n.value=i),s==null)){n.defaultValue!==i&&(n.defaultValue=i);return}n.defaultValue=s!=null?""+rn(s):""}function wp(n,i,s,l){if(i==null){if(l!=null){if(s!=null)throw Error(r(92));if(pe(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),i=s}s=rn(i),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l),Vc(n)}function Ra(n,i){if(i){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=i;return}}n.textContent=i}var Aw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sp(n,i,s){var l=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(i,""):i==="float"?n.cssFloat="":n[i]="":l?n.setProperty(i,s):typeof s!="number"||s===0||Aw.has(i)?i==="float"?n.cssFloat=s:n[i]=(""+s).trim():n[i]=s+"px"}function jp(n,i,s){if(i!=null&&typeof i!="object")throw Error(r(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in i)l=i[f],i.hasOwnProperty(f)&&s[f]!==l&&Sp(n,f,l)}else for(var m in i)i.hasOwnProperty(m)&&Sp(n,m,i[m])}function Ic(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Rw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function go(n){return Rw.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function qn(){}var qc=null;function Fc(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Na=null,Oa=null;function kp(n){var i=Ta(n);if(i&&(n=i.stateNode)){var s=n[Lt]||null;e:switch(n=i.stateNode,i.type){case"input":if(Hc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+sn(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var l=s[i];if(l!==n&&l.form===n.form){var f=l[Lt]||null;if(!f)throw Error(r(90));Hc(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(i=0;i<s.length;i++)l=s[i],l.form===n.form&&vp(l)}break e;case"textarea":xp(n,s.value,s.defaultValue);break e;case"select":i=s.value,i!=null&&Ca(n,!!s.multiple,i,!1)}}}var Gc=!1;function _p(n,i,s){if(Gc)return n(i,s);Gc=!0;try{var l=n(i);return l}finally{if(Gc=!1,(Na!==null||Oa!==null)&&(il(),Na&&(i=Na,n=Oa,Oa=Na=null,kp(i),n)))for(i=0;i<n.length;i++)kp(n[i])}}function zr(n,i){var s=n.stateNode;if(s===null)return null;var l=s[Lt]||null;if(l===null)return null;s=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,i,typeof s));return s}var Fn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Kc=!1;if(Fn)try{var Ur={};Object.defineProperty(Ur,"passive",{get:function(){Kc=!0}}),window.addEventListener("test",Ur,Ur),window.removeEventListener("test",Ur,Ur)}catch{Kc=!1}var gi=null,Yc=null,yo=null;function Tp(){if(yo)return yo;var n,i=Yc,s=i.length,l,f="value"in gi?gi.value:gi.textContent,m=f.length;for(n=0;n<s&&i[n]===f[n];n++);var b=s-n;for(l=1;l<=b&&i[s-l]===f[m-l];l++);return yo=f.slice(n,1<l?1-l:void 0)}function vo(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function bo(){return!0}function Ep(){return!1}function Mt(n){function i(s,l,f,m,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var k in n)n.hasOwnProperty(k)&&(s=n[k],this[k]=s?s(m):m[k]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?bo:Ep,this.isPropagationStopped=Ep,this}return v(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=bo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=bo)},persist:function(){},isPersistent:bo}),i}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xo=Mt(Wi),Br=v({},Wi,{view:0,detail:0}),Nw=Mt(Br),Wc,Xc,Pr,wo=v({},Br,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Qc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Pr&&(Pr&&n.type==="mousemove"?(Wc=n.screenX-Pr.screenX,Xc=n.screenY-Pr.screenY):Xc=Wc=0,Pr=n),Wc)},movementY:function(n){return"movementY"in n?n.movementY:Xc}}),Ap=Mt(wo),Ow=v({},wo,{dataTransfer:0}),Dw=Mt(Ow),Lw=v({},Br,{relatedTarget:0}),Jc=Mt(Lw),Mw=v({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),zw=Mt(Mw),Uw=v({},Wi,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bw=Mt(Uw),Pw=v({},Wi,{data:0}),Cp=Mt(Pw),Vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iw(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=$w[n])?!!i[n]:!1}function Qc(){return Iw}var qw=v({},Br,{key:function(n){if(n.key){var i=Vw[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=vo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Hw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Qc,charCode:function(n){return n.type==="keypress"?vo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?vo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fw=Mt(qw),Gw=v({},wo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Rp=Mt(Gw),Kw=v({},Br,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Qc}),Yw=Mt(Kw),Ww=v({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xw=Mt(Ww),Jw=v({},wo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qw=Mt(Jw),Zw=v({},Wi,{newState:0,oldState:0}),e2=Mt(Zw),t2=[9,13,27,32],Zc=Fn&&"CompositionEvent"in window,Vr=null;Fn&&"documentMode"in document&&(Vr=document.documentMode);var n2=Fn&&"TextEvent"in window&&!Vr,Np=Fn&&(!Zc||Vr&&8<Vr&&11>=Vr),Op=" ",Dp=!1;function Lp(n,i){switch(n){case"keyup":return t2.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Da=!1;function i2(n,i){switch(n){case"compositionend":return Mp(i);case"keypress":return i.which!==32?null:(Dp=!0,Op);case"textInput":return n=i.data,n===Op&&Dp?null:n;default:return null}}function a2(n,i){if(Da)return n==="compositionend"||!Zc&&Lp(n,i)?(n=Tp(),yo=Yc=gi=null,Da=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Np&&i.locale!=="ko"?null:i.data;default:return null}}var r2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zp(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!r2[n.type]:i==="textarea"}function Up(n,i,s,l){Na?Oa?Oa.push(l):Oa=[l]:Na=l,i=ul(i,"onChange"),0<i.length&&(s=new xo("onChange","change",null,s,l),n.push({event:s,listeners:i}))}var Hr=null,$r=null;function s2(n){b0(n,0)}function So(n){var i=Mr(n);if(vp(i))return n}function Bp(n,i){if(n==="change")return i}var Pp=!1;if(Fn){var eu;if(Fn){var tu="oninput"in document;if(!tu){var Vp=document.createElement("div");Vp.setAttribute("oninput","return;"),tu=typeof Vp.oninput=="function"}eu=tu}else eu=!1;Pp=eu&&(!document.documentMode||9<document.documentMode)}function Hp(){Hr&&(Hr.detachEvent("onpropertychange",$p),$r=Hr=null)}function $p(n){if(n.propertyName==="value"&&So($r)){var i=[];Up(i,$r,n,Fc(n)),_p(s2,i)}}function o2(n,i,s){n==="focusin"?(Hp(),Hr=i,$r=s,Hr.attachEvent("onpropertychange",$p)):n==="focusout"&&Hp()}function l2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return So($r)}function c2(n,i){if(n==="click")return So(i)}function u2(n,i){if(n==="input"||n==="change")return So(i)}function d2(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var Kt=typeof Object.is=="function"?Object.is:d2;function Ir(n,i){if(Kt(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var s=Object.keys(n),l=Object.keys(i);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!ja.call(i,f)||!Kt(n[f],i[f]))return!1}return!0}function Ip(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function qp(n,i){var s=Ip(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=i&&l>=i)return{node:s,offset:i-n};n=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Ip(s)}}function Fp(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Fp(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Gp(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var i=mo(n.document);i instanceof n.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)n=i.contentWindow;else break;i=mo(n.document)}return i}function nu(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}var h2=Fn&&"documentMode"in document&&11>=document.documentMode,La=null,iu=null,qr=null,au=!1;function Kp(n,i,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;au||La==null||La!==mo(l)||(l=La,"selectionStart"in l&&nu(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qr&&Ir(qr,l)||(qr=l,l=ul(iu,"onSelect"),0<l.length&&(i=new xo("onSelect","select",null,i,s),n.push({event:i,listeners:l}),i.target=La)))}function Xi(n,i){var s={};return s[n.toLowerCase()]=i.toLowerCase(),s["Webkit"+n]="webkit"+i,s["Moz"+n]="moz"+i,s}var Ma={animationend:Xi("Animation","AnimationEnd"),animationiteration:Xi("Animation","AnimationIteration"),animationstart:Xi("Animation","AnimationStart"),transitionrun:Xi("Transition","TransitionRun"),transitionstart:Xi("Transition","TransitionStart"),transitioncancel:Xi("Transition","TransitionCancel"),transitionend:Xi("Transition","TransitionEnd")},ru={},Yp={};Fn&&(Yp=document.createElement("div").style,"AnimationEvent"in window||(delete Ma.animationend.animation,delete Ma.animationiteration.animation,delete Ma.animationstart.animation),"TransitionEvent"in window||delete Ma.transitionend.transition);function Ji(n){if(ru[n])return ru[n];if(!Ma[n])return n;var i=Ma[n],s;for(s in i)if(i.hasOwnProperty(s)&&s in Yp)return ru[n]=i[s];return n}var Wp=Ji("animationend"),Xp=Ji("animationiteration"),Jp=Ji("animationstart"),f2=Ji("transitionrun"),p2=Ji("transitionstart"),m2=Ji("transitioncancel"),Qp=Ji("transitionend"),Zp=new Map,su="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");su.push("scrollEnd");function vn(n,i){Zp.set(n,i),Yi(i,[n])}var jo=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},on=[],za=0,ou=0;function ko(){for(var n=za,i=ou=za=0;i<n;){var s=on[i];on[i++]=null;var l=on[i];on[i++]=null;var f=on[i];on[i++]=null;var m=on[i];if(on[i++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}m!==0&&em(s,f,m)}}function _o(n,i,s,l){on[za++]=n,on[za++]=i,on[za++]=s,on[za++]=l,ou|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function lu(n,i,s,l){return _o(n,i,s,l),To(n)}function Qi(n,i){return _o(n,null,null,i),To(n)}function em(n,i,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=n.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&i!==null&&(f=31-Gt(s),n=m.hiddenUpdates,l=n[f],l===null?n[f]=[i]:l.push(i),i.lane=s|536870912),m):null}function To(n){if(50<hs)throw hs=0,yd=null,Error(r(185));for(var i=n.return;i!==null;)n=i,i=n.return;return n.tag===3?n.stateNode:null}var Ua={};function g2(n,i,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Yt(n,i,s,l){return new g2(n,i,s,l)}function cu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Gn(n,i){var s=n.alternate;return s===null?(s=Yt(n.tag,i,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=i,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,i=n.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function tm(n,i){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=i,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,i=s.dependencies,n.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),n}function Eo(n,i,s,l,f,m){var b=0;if(l=n,typeof n=="function")cu(n)&&(b=1);else if(typeof n=="string")b=w5(n,s,ae.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case Q:return n=Yt(31,s,i,f),n.elementType=Q,n.lanes=m,n;case T:return Zi(s.children,f,m,i);case E:b=8,f|=24;break;case _:return n=Yt(12,s,i,f|2),n.elementType=_,n.lanes=m,n;case Y:return n=Yt(13,s,i,f),n.elementType=Y,n.lanes=m,n;case J:return n=Yt(19,s,i,f),n.elementType=J,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:b=10;break e;case N:b=9;break e;case V:b=11;break e;case M:b=14;break e;case H:b=16,l=null;break e}b=29,s=Error(r(130,n===null?"null":typeof n,"")),l=null}return i=Yt(b,s,i,f),i.elementType=n,i.type=l,i.lanes=m,i}function Zi(n,i,s,l){return n=Yt(7,n,l,i),n.lanes=s,n}function uu(n,i,s){return n=Yt(6,n,null,i),n.lanes=s,n}function nm(n){var i=Yt(18,null,null,0);return i.stateNode=n,i}function du(n,i,s){return i=Yt(4,n.children!==null?n.children:[],n.key,i),i.lanes=s,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}var im=new WeakMap;function ln(n,i){if(typeof n=="object"&&n!==null){var s=im.get(n);return s!==void 0?s:(i={value:n,source:i,stack:Oc(i)},im.set(n,i),i)}return{value:n,source:i,stack:Oc(i)}}var Ba=[],Pa=0,Ao=null,Fr=0,cn=[],un=0,yi=null,Nn=1,On="";function Kn(n,i){Ba[Pa++]=Fr,Ba[Pa++]=Ao,Ao=n,Fr=i}function am(n,i,s){cn[un++]=Nn,cn[un++]=On,cn[un++]=yi,yi=n;var l=Nn;n=On;var f=32-Gt(l)-1;l&=~(1<<f),s+=1;var m=32-Gt(i)+f;if(30<m){var b=f-f%5;m=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Nn=1<<32-Gt(i)+f|s<<f|l,On=m+n}else Nn=1<<m|s<<f|l,On=n}function hu(n){n.return!==null&&(Kn(n,1),am(n,1,0))}function fu(n){for(;n===Ao;)Ao=Ba[--Pa],Ba[Pa]=null,Fr=Ba[--Pa],Ba[Pa]=null;for(;n===yi;)yi=cn[--un],cn[un]=null,On=cn[--un],cn[un]=null,Nn=cn[--un],cn[un]=null}function rm(n,i){cn[un++]=Nn,cn[un++]=On,cn[un++]=yi,Nn=i.id,On=i.overflow,yi=n}var xt=null,Ke=null,De=!1,vi=null,dn=!1,pu=Error(r(519));function bi(n){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gr(ln(i,n)),pu}function sm(n){var i=n.stateNode,s=n.type,l=n.memoizedProps;switch(i[bt]=n,i[Lt]=l,s){case"dialog":Re("cancel",i),Re("close",i);break;case"iframe":case"object":case"embed":Re("load",i);break;case"video":case"audio":for(s=0;s<ps.length;s++)Re(ps[s],i);break;case"source":Re("error",i);break;case"img":case"image":case"link":Re("error",i),Re("load",i);break;case"details":Re("toggle",i);break;case"input":Re("invalid",i),bp(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Re("invalid",i);break;case"textarea":Re("invalid",i),wp(i,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||l.suppressHydrationWarning===!0||j0(i.textContent,s)?(l.popover!=null&&(Re("beforetoggle",i),Re("toggle",i)),l.onScroll!=null&&Re("scroll",i),l.onScrollEnd!=null&&Re("scrollend",i),l.onClick!=null&&(i.onclick=qn),i=!0):i=!1,i||bi(n,!0)}function om(n){for(xt=n.return;xt;)switch(xt.tag){case 5:case 31:case 13:dn=!1;return;case 27:case 3:dn=!0;return;default:xt=xt.return}}function Va(n){if(n!==xt)return!1;if(!De)return om(n),De=!0,!1;var i=n.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Od(n.type,n.memoizedProps)),s=!s),s&&Ke&&bi(n),om(n),i===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Ke=O0(n)}else if(i===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Ke=O0(n)}else i===27?(i=Ke,Di(n.type)?(n=Ud,Ud=null,Ke=n):Ke=i):Ke=xt?fn(n.stateNode.nextSibling):null;return!0}function ea(){Ke=xt=null,De=!1}function mu(){var n=vi;return n!==null&&(Pt===null?Pt=n:Pt.push.apply(Pt,n),vi=null),n}function Gr(n){vi===null?vi=[n]:vi.push(n)}var gu=R(null),ta=null,Yn=null;function xi(n,i,s){W(gu,i._currentValue),i._currentValue=s}function Wn(n){n._currentValue=gu.current,q(gu)}function yu(n,i,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),n===s)break;n=n.return}}function vu(n,i,s,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var k=m;m=f;for(var A=0;A<i.length;A++)if(k.context===i[A]){m.lanes|=s,k=m.alternate,k!==null&&(k.lanes|=s),yu(m.return,s,n),l||(b=null);break e}m=k.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),yu(b,s,n),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Ha(n,i,s,l){n=null;for(var f=i,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var k=f.type;Kt(f.pendingProps.value,b.value)||(n!==null?n.push(k):n=[k])}}else if(f===X.current){if(b=f.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(bs):n=[bs])}f=f.return}n!==null&&vu(i,n,s,l),i.flags|=262144}function Co(n){for(n=n.firstContext;n!==null;){if(!Kt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function na(n){ta=n,Yn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function wt(n){return lm(ta,n)}function Ro(n,i){return ta===null&&na(n),lm(n,i)}function lm(n,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Yn===null){if(n===null)throw Error(r(308));Yn=i,n.dependencies={lanes:0,firstContext:i},n.flags|=524288}else Yn=Yn.next=i;return s}var y2=typeof AbortController<"u"?AbortController:function(){var n=[],i=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){i.aborted=!0,n.forEach(function(s){return s()})}},v2=t.unstable_scheduleCallback,b2=t.unstable_NormalPriority,st={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function bu(){return{controller:new y2,data:new Map,refCount:0}}function Kr(n){n.refCount--,n.refCount===0&&v2(b2,function(){n.controller.abort()})}var Yr=null,xu=0,$a=0,Ia=null;function x2(n,i){if(Yr===null){var s=Yr=[];xu=0,$a=jd(),Ia={status:"pending",value:void 0,then:function(l){s.push(l)}}}return xu++,i.then(cm,cm),i}function cm(){if(--xu===0&&Yr!==null){Ia!==null&&(Ia.status="fulfilled");var n=Yr;Yr=null,$a=0,Ia=null;for(var i=0;i<n.length;i++)(0,n[i])()}}function w2(n,i){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){l.status="fulfilled",l.value=i;for(var f=0;f<s.length;f++)(0,s[f])(i)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var um=z.S;z.S=function(n,i){Kg=qt(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&x2(n,i),um!==null&&um(n,i)};var ia=R(null);function wu(){var n=ia.current;return n!==null?n:Ie.pooledCache}function No(n,i){i===null?W(ia,ia.current):W(ia,i.pool)}function dm(){var n=wu();return n===null?null:{parent:st._currentValue,pool:n}}var qa=Error(r(460)),Su=Error(r(474)),Oo=Error(r(542)),Do={then:function(){}};function hm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function fm(n,i,s){switch(s=n[s],s===void 0?n.push(i):s!==i&&(i.then(qn,qn),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,mm(n),n;default:if(typeof i.status=="string")i.then(qn,qn);else{if(n=Ie,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=i,n.status="pending",n.then(function(l){if(i.status==="pending"){var f=i;f.status="fulfilled",f.value=l}},function(l){if(i.status==="pending"){var f=i;f.status="rejected",f.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw n=i.reason,mm(n),n}throw ra=i,qa}}function aa(n){try{var i=n._init;return i(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ra=s,qa):s}}var ra=null;function pm(){if(ra===null)throw Error(r(459));var n=ra;return ra=null,n}function mm(n){if(n===qa||n===Oo)throw Error(r(483))}var Fa=null,Wr=0;function Lo(n){var i=Wr;return Wr+=1,Fa===null&&(Fa=[]),fm(Fa,n,i)}function Xr(n,i){i=i.props.ref,n.ref=i!==void 0?i:null}function Mo(n,i){throw i.$$typeof===x?Error(r(525)):(n=Object.prototype.toString.call(i),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n)))}function gm(n){function i(L,O){if(n){var U=L.deletions;U===null?(L.deletions=[O],L.flags|=16):U.push(O)}}function s(L,O){if(!n)return null;for(;O!==null;)i(L,O),O=O.sibling;return null}function l(L){for(var O=new Map;L!==null;)L.key!==null?O.set(L.key,L):O.set(L.index,L),L=L.sibling;return O}function f(L,O){return L=Gn(L,O),L.index=0,L.sibling=null,L}function m(L,O,U){return L.index=U,n?(U=L.alternate,U!==null?(U=U.index,U<O?(L.flags|=67108866,O):U):(L.flags|=67108866,O)):(L.flags|=1048576,O)}function b(L){return n&&L.alternate===null&&(L.flags|=67108866),L}function k(L,O,U,F){return O===null||O.tag!==6?(O=uu(U,L.mode,F),O.return=L,O):(O=f(O,U),O.return=L,O)}function A(L,O,U,F){var de=U.type;return de===T?I(L,O,U.props.children,F,U.key):O!==null&&(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===H&&aa(de)===O.type)?(O=f(O,U.props),Xr(O,U),O.return=L,O):(O=Eo(U.type,U.key,U.props,null,L.mode,F),Xr(O,U),O.return=L,O)}function B(L,O,U,F){return O===null||O.tag!==4||O.stateNode.containerInfo!==U.containerInfo||O.stateNode.implementation!==U.implementation?(O=du(U,L.mode,F),O.return=L,O):(O=f(O,U.children||[]),O.return=L,O)}function I(L,O,U,F,de){return O===null||O.tag!==7?(O=Zi(U,L.mode,F,de),O.return=L,O):(O=f(O,U),O.return=L,O)}function K(L,O,U){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=uu(""+O,L.mode,U),O.return=L,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case w:return U=Eo(O.type,O.key,O.props,null,L.mode,U),Xr(U,O),U.return=L,U;case S:return O=du(O,L.mode,U),O.return=L,O;case H:return O=aa(O),K(L,O,U)}if(pe(O)||he(O))return O=Zi(O,L.mode,U,null),O.return=L,O;if(typeof O.then=="function")return K(L,Lo(O),U);if(O.$$typeof===C)return K(L,Ro(L,O),U);Mo(L,O)}return null}function P(L,O,U,F){var de=O!==null?O.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return de!==null?null:k(L,O,""+U,F);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case w:return U.key===de?A(L,O,U,F):null;case S:return U.key===de?B(L,O,U,F):null;case H:return U=aa(U),P(L,O,U,F)}if(pe(U)||he(U))return de!==null?null:I(L,O,U,F,null);if(typeof U.then=="function")return P(L,O,Lo(U),F);if(U.$$typeof===C)return P(L,O,Ro(L,U),F);Mo(L,U)}return null}function $(L,O,U,F,de){if(typeof F=="string"&&F!==""||typeof F=="number"||typeof F=="bigint")return L=L.get(U)||null,k(O,L,""+F,de);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case w:return L=L.get(F.key===null?U:F.key)||null,A(O,L,F,de);case S:return L=L.get(F.key===null?U:F.key)||null,B(O,L,F,de);case H:return F=aa(F),$(L,O,U,F,de)}if(pe(F)||he(F))return L=L.get(U)||null,I(O,L,F,de,null);if(typeof F.then=="function")return $(L,O,U,Lo(F),de);if(F.$$typeof===C)return $(L,O,U,Ro(O,F),de);Mo(O,F)}return null}function re(L,O,U,F){for(var de=null,Me=null,le=O,Ee=O=0,Oe=null;le!==null&&Ee<U.length;Ee++){le.index>Ee?(Oe=le,le=null):Oe=le.sibling;var ze=P(L,le,U[Ee],F);if(ze===null){le===null&&(le=Oe);break}n&&le&&ze.alternate===null&&i(L,le),O=m(ze,O,Ee),Me===null?de=ze:Me.sibling=ze,Me=ze,le=Oe}if(Ee===U.length)return s(L,le),De&&Kn(L,Ee),de;if(le===null){for(;Ee<U.length;Ee++)le=K(L,U[Ee],F),le!==null&&(O=m(le,O,Ee),Me===null?de=le:Me.sibling=le,Me=le);return De&&Kn(L,Ee),de}for(le=l(le);Ee<U.length;Ee++)Oe=$(le,L,Ee,U[Ee],F),Oe!==null&&(n&&Oe.alternate!==null&&le.delete(Oe.key===null?Ee:Oe.key),O=m(Oe,O,Ee),Me===null?de=Oe:Me.sibling=Oe,Me=Oe);return n&&le.forEach(function(Bi){return i(L,Bi)}),De&&Kn(L,Ee),de}function ge(L,O,U,F){if(U==null)throw Error(r(151));for(var de=null,Me=null,le=O,Ee=O=0,Oe=null,ze=U.next();le!==null&&!ze.done;Ee++,ze=U.next()){le.index>Ee?(Oe=le,le=null):Oe=le.sibling;var Bi=P(L,le,ze.value,F);if(Bi===null){le===null&&(le=Oe);break}n&&le&&Bi.alternate===null&&i(L,le),O=m(Bi,O,Ee),Me===null?de=Bi:Me.sibling=Bi,Me=Bi,le=Oe}if(ze.done)return s(L,le),De&&Kn(L,Ee),de;if(le===null){for(;!ze.done;Ee++,ze=U.next())ze=K(L,ze.value,F),ze!==null&&(O=m(ze,O,Ee),Me===null?de=ze:Me.sibling=ze,Me=ze);return De&&Kn(L,Ee),de}for(le=l(le);!ze.done;Ee++,ze=U.next())ze=$(le,L,Ee,ze.value,F),ze!==null&&(n&&ze.alternate!==null&&le.delete(ze.key===null?Ee:ze.key),O=m(ze,O,Ee),Me===null?de=ze:Me.sibling=ze,Me=ze);return n&&le.forEach(function(O5){return i(L,O5)}),De&&Kn(L,Ee),de}function $e(L,O,U,F){if(typeof U=="object"&&U!==null&&U.type===T&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case w:e:{for(var de=U.key;O!==null;){if(O.key===de){if(de=U.type,de===T){if(O.tag===7){s(L,O.sibling),F=f(O,U.props.children),F.return=L,L=F;break e}}else if(O.elementType===de||typeof de=="object"&&de!==null&&de.$$typeof===H&&aa(de)===O.type){s(L,O.sibling),F=f(O,U.props),Xr(F,U),F.return=L,L=F;break e}s(L,O);break}else i(L,O);O=O.sibling}U.type===T?(F=Zi(U.props.children,L.mode,F,U.key),F.return=L,L=F):(F=Eo(U.type,U.key,U.props,null,L.mode,F),Xr(F,U),F.return=L,L=F)}return b(L);case S:e:{for(de=U.key;O!==null;){if(O.key===de)if(O.tag===4&&O.stateNode.containerInfo===U.containerInfo&&O.stateNode.implementation===U.implementation){s(L,O.sibling),F=f(O,U.children||[]),F.return=L,L=F;break e}else{s(L,O);break}else i(L,O);O=O.sibling}F=du(U,L.mode,F),F.return=L,L=F}return b(L);case H:return U=aa(U),$e(L,O,U,F)}if(pe(U))return re(L,O,U,F);if(he(U)){if(de=he(U),typeof de!="function")throw Error(r(150));return U=de.call(U),ge(L,O,U,F)}if(typeof U.then=="function")return $e(L,O,Lo(U),F);if(U.$$typeof===C)return $e(L,O,Ro(L,U),F);Mo(L,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,O!==null&&O.tag===6?(s(L,O.sibling),F=f(O,U),F.return=L,L=F):(s(L,O),F=uu(U,L.mode,F),F.return=L,L=F),b(L)):s(L,O)}return function(L,O,U,F){try{Wr=0;var de=$e(L,O,U,F);return Fa=null,de}catch(le){if(le===qa||le===Oo)throw le;var Me=Yt(29,le,null,L.mode);return Me.lanes=F,Me.return=L,Me}finally{}}}var sa=gm(!0),ym=gm(!1),wi=!1;function ju(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ku(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function Si(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function ji(n,i,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,i=To(n),em(n,null,s),i}return _o(n,l,i,s),To(n)}function Jr(n,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,lp(n,s)}}function _u(n,i){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?f=m=i:m=m.next=i}else f=m=i;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=i:n.next=i,s.lastBaseUpdate=i}var Tu=!1;function Qr(){if(Tu){var n=Ia;if(n!==null)throw n}}function Zr(n,i,s,l){Tu=!1;var f=n.updateQueue;wi=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,k=f.shared.pending;if(k!==null){f.shared.pending=null;var A=k,B=A.next;A.next=null,b===null?m=B:b.next=B,b=A;var I=n.alternate;I!==null&&(I=I.updateQueue,k=I.lastBaseUpdate,k!==b&&(k===null?I.firstBaseUpdate=B:k.next=B,I.lastBaseUpdate=A))}if(m!==null){var K=f.baseState;b=0,I=B=A=null,k=m;do{var P=k.lane&-536870913,$=P!==k.lane;if($?(Ne&P)===P:(l&P)===P){P!==0&&P===$a&&(Tu=!0),I!==null&&(I=I.next={lane:0,tag:k.tag,payload:k.payload,callback:null,next:null});e:{var re=n,ge=k;P=i;var $e=s;switch(ge.tag){case 1:if(re=ge.payload,typeof re=="function"){K=re.call($e,K,P);break e}K=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ge.payload,P=typeof re=="function"?re.call($e,K,P):re,P==null)break e;K=v({},K,P);break e;case 2:wi=!0}}P=k.callback,P!==null&&(n.flags|=64,$&&(n.flags|=8192),$=f.callbacks,$===null?f.callbacks=[P]:$.push(P))}else $={lane:P,tag:k.tag,payload:k.payload,callback:k.callback,next:null},I===null?(B=I=$,A=K):I=I.next=$,b|=P;if(k=k.next,k===null){if(k=f.shared.pending,k===null)break;$=k,k=$.next,$.next=null,f.lastBaseUpdate=$,f.shared.pending=null}}while(!0);I===null&&(A=K),f.baseState=A,f.firstBaseUpdate=B,f.lastBaseUpdate=I,m===null&&(f.shared.lanes=0),Ai|=b,n.lanes=b,n.memoizedState=K}}function vm(n,i){if(typeof n!="function")throw Error(r(191,n));n.call(i)}function bm(n,i){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)vm(s[n],i)}var Ga=R(null),zo=R(0);function xm(n,i){n=ai,W(zo,n),W(Ga,i),ai=n|i.baseLanes}function Eu(){W(zo,ai),W(Ga,Ga.current)}function Au(){ai=zo.current,q(Ga),q(zo)}var Wt=R(null),hn=null;function ki(n){var i=n.alternate;W(tt,tt.current&1),W(Wt,n),hn===null&&(i===null||Ga.current!==null||i.memoizedState!==null)&&(hn=n)}function Cu(n){W(tt,tt.current),W(Wt,n),hn===null&&(hn=n)}function wm(n){n.tag===22?(W(tt,tt.current),W(Wt,n),hn===null&&(hn=n)):_i()}function _i(){W(tt,tt.current),W(Wt,Wt.current)}function Xt(n){q(Wt),hn===n&&(hn=null),q(tt)}var tt=R(0);function Uo(n){for(var i=n;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Md(s)||zd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Xn=0,Te=null,Ve=null,ot=null,Bo=!1,Ka=!1,oa=!1,Po=0,es=0,Ya=null,S2=0;function Je(){throw Error(r(321))}function Ru(n,i){if(i===null)return!1;for(var s=0;s<i.length&&s<n.length;s++)if(!Kt(n[s],i[s]))return!1;return!0}function Nu(n,i,s,l,f,m){return Xn=m,Te=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,z.H=n===null||n.memoizedState===null?ag:Gu,oa=!1,m=s(l,f),oa=!1,Ka&&(m=jm(i,s,l,f)),Sm(n),m}function Sm(n){z.H=is;var i=Ve!==null&&Ve.next!==null;if(Xn=0,ot=Ve=Te=null,Bo=!1,es=0,Ya=null,i)throw Error(r(300));n===null||lt||(n=n.dependencies,n!==null&&Co(n)&&(lt=!0))}function jm(n,i,s,l){Te=n;var f=0;do{if(Ka&&(Ya=null),es=0,Ka=!1,25<=f)throw Error(r(301));if(f+=1,ot=Ve=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}z.H=rg,m=i(s,l)}while(Ka);return m}function j2(){var n=z.H,i=n.useState()[0];return i=typeof i.then=="function"?ts(i):i,n=n.useState()[0],(Ve!==null?Ve.memoizedState:null)!==n&&(Te.flags|=1024),i}function Ou(){var n=Po!==0;return Po=0,n}function Du(n,i,s){i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~s}function Lu(n){if(Bo){for(n=n.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Bo=!1}Xn=0,ot=Ve=Te=null,Ka=!1,es=Po=0,Ya=null}function At(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ot===null?Te.memoizedState=ot=n:ot=ot.next=n,ot}function nt(){if(Ve===null){var n=Te.alternate;n=n!==null?n.memoizedState:null}else n=Ve.next;var i=ot===null?Te.memoizedState:ot.next;if(i!==null)ot=i,Ve=n;else{if(n===null)throw Te.alternate===null?Error(r(467)):Error(r(310));Ve=n,n={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},ot===null?Te.memoizedState=ot=n:ot=ot.next=n}return ot}function Vo(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ts(n){var i=es;return es+=1,Ya===null&&(Ya=[]),n=fm(Ya,n,i),i=Te,(ot===null?i.memoizedState:ot.next)===null&&(i=i.alternate,z.H=i===null||i.memoizedState===null?ag:Gu),n}function Ho(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return ts(n);if(n.$$typeof===C)return wt(n)}throw Error(r(438,String(n)))}function Mu(n){var i=null,s=Te.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var l=Te.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(f){return f.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=Vo(),Te.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(n),l=0;l<n;l++)s[l]=Z;return i.index++,s}function Jn(n,i){return typeof i=="function"?i(n):i}function $o(n){var i=nt();return zu(i,Ve,n)}function zu(n,i,s){var l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}i.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{i=f.next;var k=b=null,A=null,B=i,I=!1;do{var K=B.lane&-536870913;if(K!==B.lane?(Ne&K)===K:(Xn&K)===K){var P=B.revertLane;if(P===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),K===$a&&(I=!0);else if((Xn&P)===P){B=B.next,P===$a&&(I=!0);continue}else K={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(k=A=K,b=m):A=A.next=K,Te.lanes|=P,Ai|=P;K=B.action,oa&&s(m,K),m=B.hasEagerState?B.eagerState:s(m,K)}else P={lane:K,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},A===null?(k=A=P,b=m):A=A.next=P,Te.lanes|=K,Ai|=K;B=B.next}while(B!==null&&B!==i);if(A===null?b=m:A.next=k,!Kt(m,n.memoizedState)&&(lt=!0,I&&(s=Ia,s!==null)))throw s;n.memoizedState=m,n.baseState=b,n.baseQueue=A,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Uu(n){var i=nt(),s=i.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var l=s.dispatch,f=s.pending,m=i.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do m=n(m,b.action),b=b.next;while(b!==f);Kt(m,i.memoizedState)||(lt=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,l]}function km(n,i,s){var l=Te,f=nt(),m=De;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=i();var b=!Kt((Ve||f).memoizedState,s);if(b&&(f.memoizedState=s,lt=!0),f=f.queue,Vu(Em.bind(null,l,f,n),[n]),f.getSnapshot!==i||b||ot!==null&&ot.memoizedState.tag&1){if(l.flags|=2048,Wa(9,{destroy:void 0},Tm.bind(null,l,f,s,i),null),Ie===null)throw Error(r(349));m||(Xn&127)!==0||_m(l,i,s)}return s}function _m(n,i,s){n.flags|=16384,n={getSnapshot:i,value:s},i=Te.updateQueue,i===null?(i=Vo(),Te.updateQueue=i,i.stores=[n]):(s=i.stores,s===null?i.stores=[n]:s.push(n))}function Tm(n,i,s,l){i.value=s,i.getSnapshot=l,Am(i)&&Cm(n)}function Em(n,i,s){return s(function(){Am(i)&&Cm(n)})}function Am(n){var i=n.getSnapshot;n=n.value;try{var s=i();return!Kt(n,s)}catch{return!0}}function Cm(n){var i=Qi(n,2);i!==null&&Vt(i,n,2)}function Bu(n){var i=At();if(typeof n=="function"){var s=n;if(n=s(),oa){pi(!0);try{s()}finally{pi(!1)}}}return i.memoizedState=i.baseState=n,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:n},i}function Rm(n,i,s,l){return n.baseState=s,zu(n,Ve,typeof l=="function"?l:Jn)}function k2(n,i,s,l,f){if(Fo(n))throw Error(r(485));if(n=i.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};z.T!==null?s(!0):m.isTransition=!1,l(m),s=i.pending,s===null?(m.next=i.pending=m,Nm(i,m)):(m.next=s.next,i.pending=s.next=m)}}function Nm(n,i){var s=i.action,l=i.payload,f=n.state;if(i.isTransition){var m=z.T,b={};z.T=b;try{var k=s(f,l),A=z.S;A!==null&&A(b,k),Om(n,i,k)}catch(B){Pu(n,i,B)}finally{m!==null&&b.types!==null&&(m.types=b.types),z.T=m}}else try{m=s(f,l),Om(n,i,m)}catch(B){Pu(n,i,B)}}function Om(n,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Dm(n,i,l)},function(l){return Pu(n,i,l)}):Dm(n,i,s)}function Dm(n,i,s){i.status="fulfilled",i.value=s,Lm(i),n.state=s,i=n.pending,i!==null&&(s=i.next,s===i?n.pending=null:(s=s.next,i.next=s,Nm(n,s)))}function Pu(n,i,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=s,Lm(i),i=i.next;while(i!==l)}n.action=null}function Lm(n){n=n.listeners;for(var i=0;i<n.length;i++)(0,n[i])()}function Mm(n,i){return i}function zm(n,i){if(De){var s=Ie.formState;if(s!==null){e:{var l=Te;if(De){if(Ke){t:{for(var f=Ke,m=dn;f.nodeType!==8;){if(!m){f=null;break t}if(f=fn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ke=fn(f.nextSibling),l=f.data==="F!";break e}}bi(l)}l=!1}l&&(i=s[0])}}return s=At(),s.memoizedState=s.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Mm,lastRenderedState:i},s.queue=l,s=tg.bind(null,Te,l),l.dispatch=s,l=Bu(!1),m=Fu.bind(null,Te,!1,l.queue),l=At(),f={state:i,dispatch:null,action:n,pending:null},l.queue=f,s=k2.bind(null,Te,f,m,s),f.dispatch=s,l.memoizedState=n,[i,s,!1]}function Um(n){var i=nt();return Bm(i,Ve,n)}function Bm(n,i,s){if(i=zu(n,i,Mm)[0],n=$o(Jn)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=ts(i)}catch(b){throw b===qa?Oo:b}else l=i;i=nt();var f=i.queue,m=f.dispatch;return s!==i.memoizedState&&(Te.flags|=2048,Wa(9,{destroy:void 0},_2.bind(null,f,s),null)),[l,m,n]}function _2(n,i){n.action=i}function Pm(n){var i=nt(),s=Ve;if(s!==null)return Bm(i,s,n);nt(),i=i.memoizedState,s=nt();var l=s.queue.dispatch;return s.memoizedState=n,[i,l,!1]}function Wa(n,i,s,l){return n={tag:n,create:s,deps:l,inst:i,next:null},i=Te.updateQueue,i===null&&(i=Vo(),Te.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,i.lastEffect=n),n}function Vm(){return nt().memoizedState}function Io(n,i,s,l){var f=At();Te.flags|=n,f.memoizedState=Wa(1|i,{destroy:void 0},s,l===void 0?null:l)}function qo(n,i,s,l){var f=nt();l=l===void 0?null:l;var m=f.memoizedState.inst;Ve!==null&&l!==null&&Ru(l,Ve.memoizedState.deps)?f.memoizedState=Wa(i,m,s,l):(Te.flags|=n,f.memoizedState=Wa(1|i,m,s,l))}function Hm(n,i){Io(8390656,8,n,i)}function Vu(n,i){qo(2048,8,n,i)}function T2(n){Te.flags|=4;var i=Te.updateQueue;if(i===null)i=Vo(),Te.updateQueue=i,i.events=[n];else{var s=i.events;s===null?i.events=[n]:s.push(n)}}function $m(n){var i=nt().memoizedState;return T2({ref:i,nextImpl:n}),function(){if((Ue&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function Im(n,i){return qo(4,2,n,i)}function qm(n,i){return qo(4,4,n,i)}function Fm(n,i){if(typeof i=="function"){n=n();var s=i(n);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Gm(n,i,s){s=s!=null?s.concat([n]):null,qo(4,4,Fm.bind(null,i,n),s)}function Hu(){}function Km(n,i){var s=nt();i=i===void 0?null:i;var l=s.memoizedState;return i!==null&&Ru(i,l[1])?l[0]:(s.memoizedState=[n,i],n)}function Ym(n,i){var s=nt();i=i===void 0?null:i;var l=s.memoizedState;if(i!==null&&Ru(i,l[1]))return l[0];if(l=n(),oa){pi(!0);try{n()}finally{pi(!1)}}return s.memoizedState=[l,i],l}function $u(n,i,s){return s===void 0||(Xn&1073741824)!==0&&(Ne&261930)===0?n.memoizedState=i:(n.memoizedState=s,n=Wg(),Te.lanes|=n,Ai|=n,s)}function Wm(n,i,s,l){return Kt(s,i)?s:Ga.current!==null?(n=$u(n,s,l),Kt(n,i)||(lt=!0),n):(Xn&42)===0||(Xn&1073741824)!==0&&(Ne&261930)===0?(lt=!0,n.memoizedState=s):(n=Wg(),Te.lanes|=n,Ai|=n,i)}function Xm(n,i,s,l,f){var m=ee.p;ee.p=m!==0&&8>m?m:8;var b=z.T,k={};z.T=k,Fu(n,!1,i,s);try{var A=f(),B=z.S;if(B!==null&&B(k,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var I=w2(A,l);ns(n,i,I,Zt(n))}else ns(n,i,l,Zt(n))}catch(K){ns(n,i,{then:function(){},status:"rejected",reason:K},Zt())}finally{ee.p=m,b!==null&&k.types!==null&&(b.types=k.types),z.T=b}}function E2(){}function Iu(n,i,s,l){if(n.tag!==5)throw Error(r(476));var f=Jm(n).queue;Xm(n,f,i,ie,s===null?E2:function(){return Qm(n),s(l)})}function Jm(n){var i=n.memoizedState;if(i!==null)return i;i={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:ie},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:s},next:null},n.memoizedState=i,n=n.alternate,n!==null&&(n.memoizedState=i),i}function Qm(n){var i=Jm(n);i.next===null&&(i=n.alternate.memoizedState),ns(n,i.next.queue,{},Zt())}function qu(){return wt(bs)}function Zm(){return nt().memoizedState}function eg(){return nt().memoizedState}function A2(n){for(var i=n.return;i!==null;){switch(i.tag){case 24:case 3:var s=Zt();n=Si(s);var l=ji(i,n,s);l!==null&&(Vt(l,i,s),Jr(l,i,s)),i={cache:bu()},n.payload=i;return}i=i.return}}function C2(n,i,s){var l=Zt();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Fo(n)?ng(i,s):(s=lu(n,i,s,l),s!==null&&(Vt(s,n,l),ig(s,i,l)))}function tg(n,i,s){var l=Zt();ns(n,i,s,l)}function ns(n,i,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(Fo(n))ng(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,k=m(b,s);if(f.hasEagerState=!0,f.eagerState=k,Kt(k,b))return _o(n,i,f,0),Ie===null&&ko(),!1}catch{}finally{}if(s=lu(n,i,f,l),s!==null)return Vt(s,n,l),ig(s,i,l),!0}return!1}function Fu(n,i,s,l){if(l={lane:2,revertLane:jd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Fo(n)){if(i)throw Error(r(479))}else i=lu(n,s,l,2),i!==null&&Vt(i,n,2)}function Fo(n){var i=n.alternate;return n===Te||i!==null&&i===Te}function ng(n,i){Ka=Bo=!0;var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}function ig(n,i,s){if((s&4194048)!==0){var l=i.lanes;l&=n.pendingLanes,s|=l,i.lanes=s,lp(n,s)}}var is={readContext:wt,use:Ho,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};is.useEffectEvent=Je;var ag={readContext:wt,use:Ho,useCallback:function(n,i){return At().memoizedState=[n,i===void 0?null:i],n},useContext:wt,useEffect:Hm,useImperativeHandle:function(n,i,s){s=s!=null?s.concat([n]):null,Io(4194308,4,Fm.bind(null,i,n),s)},useLayoutEffect:function(n,i){return Io(4194308,4,n,i)},useInsertionEffect:function(n,i){Io(4,2,n,i)},useMemo:function(n,i){var s=At();i=i===void 0?null:i;var l=n();if(oa){pi(!0);try{n()}finally{pi(!1)}}return s.memoizedState=[l,i],l},useReducer:function(n,i,s){var l=At();if(s!==void 0){var f=s(i);if(oa){pi(!0);try{s(i)}finally{pi(!1)}}}else f=i;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=C2.bind(null,Te,n),[l.memoizedState,n]},useRef:function(n){var i=At();return n={current:n},i.memoizedState=n},useState:function(n){n=Bu(n);var i=n.queue,s=tg.bind(null,Te,i);return i.dispatch=s,[n.memoizedState,s]},useDebugValue:Hu,useDeferredValue:function(n,i){var s=At();return $u(s,n,i)},useTransition:function(){var n=Bu(!1);return n=Xm.bind(null,Te,n.queue,!0,!1),At().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,i,s){var l=Te,f=At();if(De){if(s===void 0)throw Error(r(407));s=s()}else{if(s=i(),Ie===null)throw Error(r(349));(Ne&127)!==0||_m(l,i,s)}f.memoizedState=s;var m={value:s,getSnapshot:i};return f.queue=m,Hm(Em.bind(null,l,m,n),[n]),l.flags|=2048,Wa(9,{destroy:void 0},Tm.bind(null,l,m,s,i),null),s},useId:function(){var n=At(),i=Ie.identifierPrefix;if(De){var s=On,l=Nn;s=(l&~(1<<32-Gt(l)-1)).toString(32)+s,i="_"+i+"R_"+s,s=Po++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=S2++,i="_"+i+"r_"+s.toString(32)+"_";return n.memoizedState=i},useHostTransitionStatus:qu,useFormState:zm,useActionState:zm,useOptimistic:function(n){var i=At();i.memoizedState=i.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=Fu.bind(null,Te,!0,s),s.dispatch=i,[n,i]},useMemoCache:Mu,useCacheRefresh:function(){return At().memoizedState=A2.bind(null,Te)},useEffectEvent:function(n){var i=At(),s={impl:n};return i.memoizedState=s,function(){if((Ue&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Gu={readContext:wt,use:Ho,useCallback:Km,useContext:wt,useEffect:Vu,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:qm,useMemo:Ym,useReducer:$o,useRef:Vm,useState:function(){return $o(Jn)},useDebugValue:Hu,useDeferredValue:function(n,i){var s=nt();return Wm(s,Ve.memoizedState,n,i)},useTransition:function(){var n=$o(Jn)[0],i=nt().memoizedState;return[typeof n=="boolean"?n:ts(n),i]},useSyncExternalStore:km,useId:Zm,useHostTransitionStatus:qu,useFormState:Um,useActionState:Um,useOptimistic:function(n,i){var s=nt();return Rm(s,Ve,n,i)},useMemoCache:Mu,useCacheRefresh:eg};Gu.useEffectEvent=$m;var rg={readContext:wt,use:Ho,useCallback:Km,useContext:wt,useEffect:Vu,useImperativeHandle:Gm,useInsertionEffect:Im,useLayoutEffect:qm,useMemo:Ym,useReducer:Uu,useRef:Vm,useState:function(){return Uu(Jn)},useDebugValue:Hu,useDeferredValue:function(n,i){var s=nt();return Ve===null?$u(s,n,i):Wm(s,Ve.memoizedState,n,i)},useTransition:function(){var n=Uu(Jn)[0],i=nt().memoizedState;return[typeof n=="boolean"?n:ts(n),i]},useSyncExternalStore:km,useId:Zm,useHostTransitionStatus:qu,useFormState:Pm,useActionState:Pm,useOptimistic:function(n,i){var s=nt();return Ve!==null?Rm(s,Ve,n,i):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Mu,useCacheRefresh:eg};rg.useEffectEvent=$m;function Ku(n,i,s,l){i=n.memoizedState,s=s(l,i),s=s==null?i:v({},i,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Yu={enqueueSetState:function(n,i,s){n=n._reactInternals;var l=Zt(),f=Si(l);f.payload=i,s!=null&&(f.callback=s),i=ji(n,f,l),i!==null&&(Vt(i,n,l),Jr(i,n,l))},enqueueReplaceState:function(n,i,s){n=n._reactInternals;var l=Zt(),f=Si(l);f.tag=1,f.payload=i,s!=null&&(f.callback=s),i=ji(n,f,l),i!==null&&(Vt(i,n,l),Jr(i,n,l))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var s=Zt(),l=Si(s);l.tag=2,i!=null&&(l.callback=i),i=ji(n,l,s),i!==null&&(Vt(i,n,s),Jr(i,n,s))}};function sg(n,i,s,l,f,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,b):i.prototype&&i.prototype.isPureReactComponent?!Ir(s,l)||!Ir(f,m):!0}function og(n,i,s,l){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,l),i.state!==n&&Yu.enqueueReplaceState(i,i.state,null)}function la(n,i){var s=i;if("ref"in i){s={};for(var l in i)l!=="ref"&&(s[l]=i[l])}if(n=n.defaultProps){s===i&&(s=v({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}function lg(n){jo(n)}function cg(n){console.error(n)}function ug(n){jo(n)}function Go(n,i){try{var s=n.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function dg(n,i,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Wu(n,i,s){return s=Si(s),s.tag=3,s.payload={element:null},s.callback=function(){Go(n,i)},s}function hg(n){return n=Si(n),n.tag=3,n}function fg(n,i,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){dg(i,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){dg(i,s,l),typeof f!="function"&&(Ci===null?Ci=new Set([this]):Ci.add(this));var k=l.stack;this.componentDidCatch(l.value,{componentStack:k!==null?k:""})})}function R2(n,i,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=s.alternate,i!==null&&Ha(i,s,f,!0),s=Wt.current,s!==null){switch(s.tag){case 31:case 13:return hn===null?al():s.alternate===null&&Qe===0&&(Qe=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Do?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([l]):i.add(l),xd(n,l,f)),!1;case 22:return s.flags|=65536,l===Do?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([l]):s.add(l)),xd(n,l,f)),!1}throw Error(r(435,s.tag))}return xd(n,l,f),al(),!1}if(De)return i=Wt.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=f,l!==pu&&(n=Error(r(422),{cause:l}),Gr(ln(n,s)))):(l!==pu&&(i=Error(r(423),{cause:l}),Gr(ln(i,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=ln(l,s),f=Wu(n.stateNode,l,f),_u(n,f),Qe!==4&&(Qe=2)),!1;var m=Error(r(520),{cause:l});if(m=ln(m,s),ds===null?ds=[m]:ds.push(m),Qe!==4&&(Qe=2),i===null)return!0;l=ln(l,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=Wu(s.stateNode,l,n),_u(s,n),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ci===null||!Ci.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=hg(f),fg(f,n,s,l),_u(s,f),!1}s=s.return}while(s!==null);return!1}var Xu=Error(r(461)),lt=!1;function St(n,i,s,l){i.child=n===null?ym(i,null,s,l):sa(i,n.child,s,l)}function pg(n,i,s,l,f){s=s.render;var m=i.ref;if("ref"in l){var b={};for(var k in l)k!=="ref"&&(b[k]=l[k])}else b=l;return na(i),l=Nu(n,i,s,b,m,f),k=Ou(),n!==null&&!lt?(Du(n,i,f),Qn(n,i,f)):(De&&k&&hu(i),i.flags|=1,St(n,i,l,f),i.child)}function mg(n,i,s,l,f){if(n===null){var m=s.type;return typeof m=="function"&&!cu(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,gg(n,i,m,l,f)):(n=Eo(s.type,null,l,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!ad(n,f)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:Ir,s(b,l)&&n.ref===i.ref)return Qn(n,i,f)}return i.flags|=1,n=Gn(m,l),n.ref=i.ref,n.return=i,i.child=n}function gg(n,i,s,l,f){if(n!==null){var m=n.memoizedProps;if(Ir(m,l)&&n.ref===i.ref)if(lt=!1,i.pendingProps=l=m,ad(n,f))(n.flags&131072)!==0&&(lt=!0);else return i.lanes=n.lanes,Qn(n,i,f)}return Ju(n,i,s,l,f)}function yg(n,i,s,l){var f=l.children,m=n!==null?n.memoizedState:null;if(n===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,n!==null){for(l=i.child=n.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,i.child=null;return vg(n,i,m,s,l)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},n!==null&&No(i,m!==null?m.cachePool:null),m!==null?xm(i,m):Eu(),wm(i);else return l=i.lanes=536870912,vg(n,i,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(No(i,m.cachePool),xm(i,m),_i(),i.memoizedState=null):(n!==null&&No(i,null),Eu(),_i());return St(n,i,f,s),i.child}function as(n,i){return n!==null&&n.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function vg(n,i,s,l,f){var m=wu();return m=m===null?null:{parent:st._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},n!==null&&No(i,null),Eu(),wm(i),n!==null&&Ha(n,i,l,!0),i.childLanes=f,null}function Ko(n,i){return i=Wo({mode:i.mode,children:i.children},n.mode),i.ref=n.ref,n.child=i,i.return=n,i}function bg(n,i,s){return sa(i,n.child,null,s),n=Ko(i,i.pendingProps),n.flags|=2,Xt(i),i.memoizedState=null,n}function N2(n,i,s){var l=i.pendingProps,f=(i.flags&128)!==0;if(i.flags&=-129,n===null){if(De){if(l.mode==="hidden")return n=Ko(i,l),i.lanes=536870912,as(null,n);if(Cu(i),(n=Ke)?(n=N0(n,dn),n=n!==null&&n.data==="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:yi!==null?{id:Nn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},s=nm(n),s.return=i,i.child=s,xt=i,Ke=null)):n=null,n===null)throw bi(i);return i.lanes=536870912,null}return Ko(i,l)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(Cu(i),f)if(i.flags&256)i.flags&=-257,i=bg(n,i,s);else if(i.memoizedState!==null)i.child=n.child,i.flags|=128,i=null;else throw Error(r(558));else if(lt||Ha(n,i,s,!1),f=(s&n.childLanes)!==0,lt||f){if(l=Ie,l!==null&&(b=cp(l,s),b!==0&&b!==m.retryLane))throw m.retryLane=b,Qi(n,b),Vt(l,n,b),Xu;al(),i=bg(n,i,s)}else n=m.treeContext,Ke=fn(b.nextSibling),xt=i,De=!0,vi=null,dn=!1,n!==null&&rm(i,n),i=Ko(i,l),i.flags|=4096;return i}return n=Gn(n.child,{mode:l.mode,children:l.children}),n.ref=i.ref,i.child=n,n.return=i,n}function Yo(n,i){var s=i.ref;if(s===null)n!==null&&n.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(i.flags|=4194816)}}function Ju(n,i,s,l,f){return na(i),s=Nu(n,i,s,l,void 0,f),l=Ou(),n!==null&&!lt?(Du(n,i,f),Qn(n,i,f)):(De&&l&&hu(i),i.flags|=1,St(n,i,s,f),i.child)}function xg(n,i,s,l,f,m){return na(i),i.updateQueue=null,s=jm(i,l,s,f),Sm(n),l=Ou(),n!==null&&!lt?(Du(n,i,m),Qn(n,i,m)):(De&&l&&hu(i),i.flags|=1,St(n,i,s,m),i.child)}function wg(n,i,s,l,f){if(na(i),i.stateNode===null){var m=Ua,b=s.contextType;typeof b=="object"&&b!==null&&(m=wt(b)),m=new s(l,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Yu,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=l,m.state=i.memoizedState,m.refs={},ju(i),b=s.contextType,m.context=typeof b=="object"&&b!==null?wt(b):Ua,m.state=i.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(Ku(i,s,b,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Yu.enqueueReplaceState(m,m.state,null),Zr(i,l,m,f),Qr(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(n===null){m=i.stateNode;var k=i.memoizedProps,A=la(s,k);m.props=A;var B=m.context,I=s.contextType;b=Ua,typeof I=="object"&&I!==null&&(b=wt(I));var K=s.getDerivedStateFromProps;I=typeof K=="function"||typeof m.getSnapshotBeforeUpdate=="function",k=i.pendingProps!==k,I||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(k||B!==b)&&og(i,m,l,b),wi=!1;var P=i.memoizedState;m.state=P,Zr(i,l,m,f),Qr(),B=i.memoizedState,k||P!==B||wi?(typeof K=="function"&&(Ku(i,s,K,l),B=i.memoizedState),(A=wi||sg(i,s,A,l,P,B,b))?(I||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=B),m.props=l,m.state=B,m.context=b,l=A):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{m=i.stateNode,ku(n,i),b=i.memoizedProps,I=la(s,b),m.props=I,K=i.pendingProps,P=m.context,B=s.contextType,A=Ua,typeof B=="object"&&B!==null&&(A=wt(B)),k=s.getDerivedStateFromProps,(B=typeof k=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==K||P!==A)&&og(i,m,l,A),wi=!1,P=i.memoizedState,m.state=P,Zr(i,l,m,f),Qr();var $=i.memoizedState;b!==K||P!==$||wi||n!==null&&n.dependencies!==null&&Co(n.dependencies)?(typeof k=="function"&&(Ku(i,s,k,l),$=i.memoizedState),(I=wi||sg(i,s,I,l,P,$,A)||n!==null&&n.dependencies!==null&&Co(n.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,$,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,$,A)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=$),m.props=l,m.state=$,m.context=A,l=I):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&P===n.memoizedState||(i.flags|=1024),l=!1)}return m=l,Yo(n,i),l=(i.flags&128)!==0,m||l?(m=i.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,n!==null&&l?(i.child=sa(i,n.child,null,f),i.child=sa(i,null,s,f)):St(n,i,s,f),i.memoizedState=m.state,n=i.child):n=Qn(n,i,f),n}function Sg(n,i,s,l){return ea(),i.flags|=256,St(n,i,s,l),i.child}var Qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zu(n){return{baseLanes:n,cachePool:dm()}}function ed(n,i,s){return n=n!==null?n.childLanes&~s:0,i&&(n|=Qt),n}function jg(n,i,s){var l=i.pendingProps,f=!1,m=(i.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(tt.current&2)!==0),b&&(f=!0,i.flags&=-129),b=(i.flags&32)!==0,i.flags&=-33,n===null){if(De){if(f?ki(i):_i(),(n=Ke)?(n=N0(n,dn),n=n!==null&&n.data!=="&"?n:null,n!==null&&(i.memoizedState={dehydrated:n,treeContext:yi!==null?{id:Nn,overflow:On}:null,retryLane:536870912,hydrationErrors:null},s=nm(n),s.return=i,i.child=s,xt=i,Ke=null)):n=null,n===null)throw bi(i);return zd(n)?i.lanes=32:i.lanes=536870912,null}var k=l.children;return l=l.fallback,f?(_i(),f=i.mode,k=Wo({mode:"hidden",children:k},f),l=Zi(l,f,s,null),k.return=i,l.return=i,k.sibling=l,i.child=k,l=i.child,l.memoizedState=Zu(s),l.childLanes=ed(n,b,s),i.memoizedState=Qu,as(null,l)):(ki(i),td(i,k))}var A=n.memoizedState;if(A!==null&&(k=A.dehydrated,k!==null)){if(m)i.flags&256?(ki(i),i.flags&=-257,i=nd(n,i,s)):i.memoizedState!==null?(_i(),i.child=n.child,i.flags|=128,i=null):(_i(),k=l.fallback,f=i.mode,l=Wo({mode:"visible",children:l.children},f),k=Zi(k,f,s,null),k.flags|=2,l.return=i,k.return=i,l.sibling=k,i.child=l,sa(i,n.child,null,s),l=i.child,l.memoizedState=Zu(s),l.childLanes=ed(n,b,s),i.memoizedState=Qu,i=as(null,l));else if(ki(i),zd(k)){if(b=k.nextSibling&&k.nextSibling.dataset,b)var B=b.dgst;b=B,l=Error(r(419)),l.stack="",l.digest=b,Gr({value:l,source:null,stack:null}),i=nd(n,i,s)}else if(lt||Ha(n,i,s,!1),b=(s&n.childLanes)!==0,lt||b){if(b=Ie,b!==null&&(l=cp(b,s),l!==0&&l!==A.retryLane))throw A.retryLane=l,Qi(n,l),Vt(b,n,l),Xu;Md(k)||al(),i=nd(n,i,s)}else Md(k)?(i.flags|=192,i.child=n.child,i=null):(n=A.treeContext,Ke=fn(k.nextSibling),xt=i,De=!0,vi=null,dn=!1,n!==null&&rm(i,n),i=td(i,l.children),i.flags|=4096);return i}return f?(_i(),k=l.fallback,f=i.mode,A=n.child,B=A.sibling,l=Gn(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&65011712,B!==null?k=Gn(B,k):(k=Zi(k,f,s,null),k.flags|=2),k.return=i,l.return=i,l.sibling=k,i.child=l,as(null,l),l=i.child,k=n.child.memoizedState,k===null?k=Zu(s):(f=k.cachePool,f!==null?(A=st._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=dm(),k={baseLanes:k.baseLanes|s,cachePool:f}),l.memoizedState=k,l.childLanes=ed(n,b,s),i.memoizedState=Qu,as(n.child,l)):(ki(i),s=n.child,n=s.sibling,s=Gn(s,{mode:"visible",children:l.children}),s.return=i,s.sibling=null,n!==null&&(b=i.deletions,b===null?(i.deletions=[n],i.flags|=16):b.push(n)),i.child=s,i.memoizedState=null,s)}function td(n,i){return i=Wo({mode:"visible",children:i},n.mode),i.return=n,n.child=i}function Wo(n,i){return n=Yt(22,n,null,i),n.lanes=0,n}function nd(n,i,s){return sa(i,n.child,null,s),n=td(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function kg(n,i,s){n.lanes|=i;var l=n.alternate;l!==null&&(l.lanes|=i),yu(n.return,i,s)}function id(n,i,s,l,f,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(b.isBackwards=i,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=m)}function _g(n,i,s){var l=i.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var b=tt.current,k=(b&2)!==0;if(k?(b=b&1|2,i.flags|=128):b&=1,W(tt,b),St(n,i,l,s),l=De?Fr:0,!k&&n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&kg(n,s,i);else if(n.tag===19)kg(n,s,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(s=i.child,f=null;s!==null;)n=s.alternate,n!==null&&Uo(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=i.child,i.child=null):(f=s.sibling,s.sibling=null),id(i,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Uo(n)===null){i.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}id(i,!0,s,null,m,l);break;case"together":id(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Qn(n,i,s){if(n!==null&&(i.dependencies=n.dependencies),Ai|=i.lanes,(s&i.childLanes)===0)if(n!==null){if(Ha(n,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(n!==null&&i.child!==n.child)throw Error(r(153));if(i.child!==null){for(n=i.child,s=Gn(n,n.pendingProps),i.child=s,s.return=i;n.sibling!==null;)n=n.sibling,s=s.sibling=Gn(n,n.pendingProps),s.return=i;s.sibling=null}return i.child}function ad(n,i){return(n.lanes&i)!==0?!0:(n=n.dependencies,!!(n!==null&&Co(n)))}function O2(n,i,s){switch(i.tag){case 3:me(i,i.stateNode.containerInfo),xi(i,st,n.memoizedState.cache),ea();break;case 27:case 5:D(i);break;case 4:me(i,i.stateNode.containerInfo);break;case 10:xi(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Cu(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(ki(i),i.flags|=128,null):(s&i.child.childLanes)!==0?jg(n,i,s):(ki(i),n=Qn(n,i,s),n!==null?n.sibling:null);ki(i);break;case 19:var f=(n.flags&128)!==0;if(l=(s&i.childLanes)!==0,l||(Ha(n,i,s,!1),l=(s&i.childLanes)!==0),f){if(l)return _g(n,i,s);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),W(tt,tt.current),l)break;return null;case 22:return i.lanes=0,yg(n,i,s,i.pendingProps);case 24:xi(i,st,n.memoizedState.cache)}return Qn(n,i,s)}function Tg(n,i,s){if(n!==null)if(n.memoizedProps!==i.pendingProps)lt=!0;else{if(!ad(n,s)&&(i.flags&128)===0)return lt=!1,O2(n,i,s);lt=(n.flags&131072)!==0}else lt=!1,De&&(i.flags&1048576)!==0&&am(i,Fr,i.index);switch(i.lanes=0,i.tag){case 16:e:{var l=i.pendingProps;if(n=aa(i.elementType),i.type=n,typeof n=="function")cu(n)?(l=la(n,l),i.tag=1,i=wg(null,i,n,l,s)):(i.tag=0,i=Ju(null,i,n,l,s));else{if(n!=null){var f=n.$$typeof;if(f===V){i.tag=11,i=pg(null,i,n,l,s);break e}else if(f===M){i.tag=14,i=mg(null,i,n,l,s);break e}}throw i=Le(n)||n,Error(r(306,i,""))}}return i;case 0:return Ju(n,i,i.type,i.pendingProps,s);case 1:return l=i.type,f=la(l,i.pendingProps),wg(n,i,l,f,s);case 3:e:{if(me(i,i.stateNode.containerInfo),n===null)throw Error(r(387));l=i.pendingProps;var m=i.memoizedState;f=m.element,ku(n,i),Zr(i,l,null,s);var b=i.memoizedState;if(l=b.cache,xi(i,st,l),l!==m.cache&&vu(i,[st],s,!0),Qr(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=Sg(n,i,l,s);break e}else if(l!==f){f=ln(Error(r(424)),i),Gr(f),i=Sg(n,i,l,s);break e}else{switch(n=i.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ke=fn(n.firstChild),xt=i,De=!0,vi=null,dn=!0,s=ym(i,null,l,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(ea(),l===f){i=Qn(n,i,s);break e}St(n,i,l,s)}i=i.child}return i;case 26:return Yo(n,i),n===null?(s=U0(i.type,null,i.pendingProps,null))?i.memoizedState=s:De||(s=i.type,n=i.pendingProps,l=dl(Se.current).createElement(s),l[bt]=i,l[Lt]=n,jt(l,s,n),gt(l),i.stateNode=l):i.memoizedState=U0(i.type,n.memoizedProps,i.pendingProps,n.memoizedState),null;case 27:return D(i),n===null&&De&&(l=i.stateNode=L0(i.type,i.pendingProps,Se.current),xt=i,dn=!0,f=Ke,Di(i.type)?(Ud=f,Ke=fn(l.firstChild)):Ke=f),St(n,i,i.pendingProps.children,s),Yo(n,i),n===null&&(i.flags|=4194304),i.child;case 5:return n===null&&De&&((f=l=Ke)&&(l=l5(l,i.type,i.pendingProps,dn),l!==null?(i.stateNode=l,xt=i,Ke=fn(l.firstChild),dn=!1,f=!0):f=!1),f||bi(i)),D(i),f=i.type,m=i.pendingProps,b=n!==null?n.memoizedProps:null,l=m.children,Od(f,m)?l=null:b!==null&&Od(f,b)&&(i.flags|=32),i.memoizedState!==null&&(f=Nu(n,i,j2,null,null,s),bs._currentValue=f),Yo(n,i),St(n,i,l,s),i.child;case 6:return n===null&&De&&((n=s=Ke)&&(s=c5(s,i.pendingProps,dn),s!==null?(i.stateNode=s,xt=i,Ke=null,n=!0):n=!1),n||bi(i)),null;case 13:return jg(n,i,s);case 4:return me(i,i.stateNode.containerInfo),l=i.pendingProps,n===null?i.child=sa(i,null,l,s):St(n,i,l,s),i.child;case 11:return pg(n,i,i.type,i.pendingProps,s);case 7:return St(n,i,i.pendingProps,s),i.child;case 8:return St(n,i,i.pendingProps.children,s),i.child;case 12:return St(n,i,i.pendingProps.children,s),i.child;case 10:return l=i.pendingProps,xi(i,i.type,l.value),St(n,i,l.children,s),i.child;case 9:return f=i.type._context,l=i.pendingProps.children,na(i),f=wt(f),l=l(f),i.flags|=1,St(n,i,l,s),i.child;case 14:return mg(n,i,i.type,i.pendingProps,s);case 15:return gg(n,i,i.type,i.pendingProps,s);case 19:return _g(n,i,s);case 31:return N2(n,i,s);case 22:return yg(n,i,s,i.pendingProps);case 24:return na(i),l=wt(st),n===null?(f=wu(),f===null&&(f=Ie,m=bu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),i.memoizedState={parent:l,cache:f},ju(i),xi(i,st,f)):((n.lanes&s)!==0&&(ku(n,i),Zr(i,null,null,s),Qr()),f=n.memoizedState,m=i.memoizedState,f.parent!==l?(f={parent:l,cache:l},i.memoizedState=f,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=f),xi(i,st,l)):(l=m.cache,xi(i,st,l),l!==f.cache&&vu(i,[st],s,!0))),St(n,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Zn(n){n.flags|=4}function rd(n,i,s,l,f){if((i=(n.mode&32)!==0)&&(i=!1),i){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(Zg())n.flags|=8192;else throw ra=Do,Su}else n.flags&=-16777217}function Eg(n,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!$0(i))if(Zg())n.flags|=8192;else throw ra=Do,Su}function Xo(n,i){i!==null&&(n.flags|=4),n.flags&16384&&(i=n.tag!==22?sp():536870912,n.lanes|=i,Za|=i)}function rs(n,i){if(!De)switch(n.tailMode){case"hidden":i=n.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Ye(n){var i=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(i)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=s,i}function D2(n,i,s){var l=i.pendingProps;switch(fu(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(i),null;case 1:return Ye(i),null;case 3:return s=i.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Wn(st),ue(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Va(i)?Zn(i):n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,mu())),Ye(i),null;case 26:var f=i.type,m=i.memoizedState;return n===null?(Zn(i),m!==null?(Ye(i),Eg(i,m)):(Ye(i),rd(i,f,null,l,s))):m?m!==n.memoizedState?(Zn(i),Ye(i),Eg(i,m)):(Ye(i),i.flags&=-16777217):(n=n.memoizedProps,n!==l&&Zn(i),Ye(i),rd(i,f,n,l,s)),null;case 27:if(G(i),s=Se.current,f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Zn(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Ye(i),null}n=ae.current,Va(i)?sm(i):(n=L0(f,l,s),i.stateNode=n,Zn(i))}return Ye(i),null;case 5:if(G(i),f=i.type,n!==null&&i.stateNode!=null)n.memoizedProps!==l&&Zn(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return Ye(i),null}if(m=ae.current,Va(i))sm(i);else{var b=dl(Se.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}m[bt]=i,m[Lt]=l;e:for(b=i.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===i)break e;for(;b.sibling===null;){if(b.return===null||b.return===i)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}i.stateNode=m;e:switch(jt(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Zn(i)}}return Ye(i),rd(i,i.type,n===null?null:n.memoizedProps,i.pendingProps,s),null;case 6:if(n&&i.stateNode!=null)n.memoizedProps!==l&&Zn(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(n=Se.current,Va(i)){if(n=i.stateNode,s=i.memoizedProps,l=null,f=xt,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[bt]=i,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||j0(n.nodeValue,s)),n||bi(i,!0)}else n=dl(n).createTextNode(l),n[bt]=i,i.stateNode=n}return Ye(i),null;case 31:if(s=i.memoizedState,n===null||n.memoizedState!==null){if(l=Va(i),s!==null){if(n===null){if(!l)throw Error(r(318));if(n=i.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(557));n[bt]=i}else ea(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),n=!1}else s=mu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return i.flags&256?(Xt(i),i):(Xt(i),null);if((i.flags&128)!==0)throw Error(r(558))}return Ye(i),null;case 13:if(l=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Va(i),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=i.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[bt]=i}else ea(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ye(i),f=!1}else f=mu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return i.flags&256?(Xt(i),i):(Xt(i),null)}return Xt(i),(i.flags&128)!==0?(i.lanes=s,i):(s=l!==null,n=n!==null&&n.memoizedState!==null,s&&(l=i.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==n&&s&&(i.child.flags|=8192),Xo(i,i.updateQueue),Ye(i),null);case 4:return ue(),n===null&&Ed(i.stateNode.containerInfo),Ye(i),null;case 10:return Wn(i.type),Ye(i),null;case 19:if(q(tt),l=i.memoizedState,l===null)return Ye(i),null;if(f=(i.flags&128)!==0,m=l.rendering,m===null)if(f)rs(l,!1);else{if(Qe!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(m=Uo(n),m!==null){for(i.flags|=128,rs(l,!1),n=m.updateQueue,i.updateQueue=n,Xo(i,n),i.subtreeFlags=0,n=s,s=i.child;s!==null;)tm(s,n),s=s.sibling;return W(tt,tt.current&1|2),De&&Kn(i,l.treeForkCount),i.child}n=n.sibling}l.tail!==null&&qt()>tl&&(i.flags|=128,f=!0,rs(l,!1),i.lanes=4194304)}else{if(!f)if(n=Uo(m),n!==null){if(i.flags|=128,f=!0,n=n.updateQueue,i.updateQueue=n,Xo(i,n),rs(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!De)return Ye(i),null}else 2*qt()-l.renderingStartTime>tl&&s!==536870912&&(i.flags|=128,f=!0,rs(l,!1),i.lanes=4194304);l.isBackwards?(m.sibling=i.child,i.child=m):(n=l.last,n!==null?n.sibling=m:i.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=qt(),n.sibling=null,s=tt.current,W(tt,f?s&1|2:s&1),De&&Kn(i,l.treeForkCount),n):(Ye(i),null);case 22:case 23:return Xt(i),Au(),l=i.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(s&536870912)!==0&&(i.flags&128)===0&&(Ye(i),i.subtreeFlags&6&&(i.flags|=8192)):Ye(i),s=i.updateQueue,s!==null&&Xo(i,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==s&&(i.flags|=2048),n!==null&&q(ia),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Wn(st),Ye(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function L2(n,i){switch(fu(i),i.tag){case 1:return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Wn(st),ue(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 26:case 27:case 5:return G(i),null;case 31:if(i.memoizedState!==null){if(Xt(i),i.alternate===null)throw Error(r(340));ea()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 13:if(Xt(i),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(r(340));ea()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return q(tt),null;case 4:return ue(),null;case 10:return Wn(i.type),null;case 22:case 23:return Xt(i),Au(),n!==null&&q(ia),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 24:return Wn(st),null;case 25:return null;default:return null}}function Ag(n,i){switch(fu(i),i.tag){case 3:Wn(st),ue();break;case 26:case 27:case 5:G(i);break;case 4:ue();break;case 31:i.memoizedState!==null&&Xt(i);break;case 13:Xt(i);break;case 19:q(tt);break;case 10:Wn(i.type);break;case 22:case 23:Xt(i),Au(),n!==null&&q(ia);break;case 24:Wn(st)}}function ss(n,i){try{var s=i.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&n)===n){l=void 0;var m=s.create,b=s.inst;l=m(),b.destroy=l}s=s.next}while(s!==f)}}catch(k){Pe(i,i.return,k)}}function Ti(n,i,s){try{var l=i.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var b=l.inst,k=b.destroy;if(k!==void 0){b.destroy=void 0,f=i;var A=s,B=k;try{B()}catch(I){Pe(f,A,I)}}}l=l.next}while(l!==m)}}catch(I){Pe(i,i.return,I)}}function Cg(n){var i=n.updateQueue;if(i!==null){var s=n.stateNode;try{bm(i,s)}catch(l){Pe(n,n.return,l)}}}function Rg(n,i,s){s.props=la(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){Pe(n,i,l)}}function os(n,i){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(f){Pe(n,i,f)}}function Dn(n,i){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Pe(n,i,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Pe(n,i,f)}else s.current=null}function Ng(n){var i=n.type,s=n.memoizedProps,l=n.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Pe(n,n.return,f)}}function sd(n,i,s){try{var l=n.stateNode;n5(l,n.type,s,i),l[Lt]=i}catch(f){Pe(n,n.return,f)}}function Og(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Di(n.type)||n.tag===4}function od(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Og(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Di(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ld(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(n),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=qn));else if(l!==4&&(l===27&&Di(n.type)&&(s=n.stateNode,i=null),n=n.child,n!==null))for(ld(n,i,s),n=n.sibling;n!==null;)ld(n,i,s),n=n.sibling}function Jo(n,i,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,i?s.insertBefore(n,i):s.appendChild(n);else if(l!==4&&(l===27&&Di(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Jo(n,i,s),n=n.sibling;n!==null;)Jo(n,i,s),n=n.sibling}function Dg(n){var i=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,f=i.attributes;f.length;)i.removeAttributeNode(f[0]);jt(i,l,s),i[bt]=n,i[Lt]=s}catch(m){Pe(n,n.return,m)}}var ei=!1,ct=!1,cd=!1,Lg=typeof WeakSet=="function"?WeakSet:Set,yt=null;function M2(n,i){if(n=n.containerInfo,Rd=vl,n=Gp(n),nu(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var b=0,k=-1,A=-1,B=0,I=0,K=n,P=null;t:for(;;){for(var $;K!==s||f!==0&&K.nodeType!==3||(k=b+f),K!==m||l!==0&&K.nodeType!==3||(A=b+l),K.nodeType===3&&(b+=K.nodeValue.length),($=K.firstChild)!==null;)P=K,K=$;for(;;){if(K===n)break t;if(P===s&&++B===f&&(k=b),P===m&&++I===l&&(A=b),($=K.nextSibling)!==null)break;K=P,P=K.parentNode}K=$}s=k===-1||A===-1?null:{start:k,end:A}}else s=null}s=s||{start:0,end:0}}else s=null;for(Nd={focusedElem:n,selectionRange:s},vl=!1,yt=i;yt!==null;)if(i=yt,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,yt=n;else for(;yt!==null;){switch(i=yt,m=i.alternate,n=i.flags,i.tag){case 0:if((n&4)!==0&&(n=i.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)f=n[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=i,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var re=la(s.type,f);n=l.getSnapshotBeforeUpdate(re,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Pe(s,s.return,ge)}}break;case 3:if((n&1024)!==0){if(n=i.stateNode.containerInfo,s=n.nodeType,s===9)Ld(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Ld(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=i.sibling,n!==null){n.return=i.return,yt=n;break}yt=i.return}}function Mg(n,i,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ni(n,s),l&4&&ss(5,s);break;case 1:if(ni(n,s),l&4)if(n=s.stateNode,i===null)try{n.componentDidMount()}catch(b){Pe(s,s.return,b)}else{var f=la(s.type,i.memoizedProps);i=i.memoizedState;try{n.componentDidUpdate(f,i,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Pe(s,s.return,b)}}l&64&&Cg(s),l&512&&os(s,s.return);break;case 3:if(ni(n,s),l&64&&(n=s.updateQueue,n!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{bm(n,i)}catch(b){Pe(s,s.return,b)}}break;case 27:i===null&&l&4&&Dg(s);case 26:case 5:ni(n,s),i===null&&l&4&&Ng(s),l&512&&os(s,s.return);break;case 12:ni(n,s);break;case 31:ni(n,s),l&4&&Bg(n,s);break;case 13:ni(n,s),l&4&&Pg(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=q2.bind(null,s),u5(n,s))));break;case 22:if(l=s.memoizedState!==null||ei,!l){i=i!==null&&i.memoizedState!==null||ct,f=ei;var m=ct;ei=l,(ct=i)&&!m?ii(n,s,(s.subtreeFlags&8772)!==0):ni(n,s),ei=f,ct=m}break;case 30:break;default:ni(n,s)}}function zg(n){var i=n.alternate;i!==null&&(n.alternate=null,zg(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&Pc(i)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var We=null,zt=!1;function ti(n,i,s){for(s=s.child;s!==null;)Ug(n,i,s),s=s.sibling}function Ug(n,i,s){if(Ft&&typeof Ft.onCommitFiberUnmount=="function")try{Ft.onCommitFiberUnmount(Nr,s)}catch{}switch(s.tag){case 26:ct||Dn(s,i),ti(n,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:ct||Dn(s,i);var l=We,f=zt;Di(s.type)&&(We=s.stateNode,zt=!1),ti(n,i,s),gs(s.stateNode),We=l,zt=f;break;case 5:ct||Dn(s,i);case 6:if(l=We,f=zt,We=null,ti(n,i,s),We=l,zt=f,We!==null)if(zt)try{(We.nodeType===9?We.body:We.nodeName==="HTML"?We.ownerDocument.body:We).removeChild(s.stateNode)}catch(m){Pe(s,i,m)}else try{We.removeChild(s.stateNode)}catch(m){Pe(s,i,m)}break;case 18:We!==null&&(zt?(n=We,C0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),or(n)):C0(We,s.stateNode));break;case 4:l=We,f=zt,We=s.stateNode.containerInfo,zt=!0,ti(n,i,s),We=l,zt=f;break;case 0:case 11:case 14:case 15:Ti(2,s,i),ct||Ti(4,s,i),ti(n,i,s);break;case 1:ct||(Dn(s,i),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Rg(s,i,l)),ti(n,i,s);break;case 21:ti(n,i,s);break;case 22:ct=(l=ct)||s.memoizedState!==null,ti(n,i,s),ct=l;break;default:ti(n,i,s)}}function Bg(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{or(n)}catch(s){Pe(i,i.return,s)}}}function Pg(n,i){if(i.memoizedState===null&&(n=i.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{or(n)}catch(s){Pe(i,i.return,s)}}function z2(n){switch(n.tag){case 31:case 13:case 19:var i=n.stateNode;return i===null&&(i=n.stateNode=new Lg),i;case 22:return n=n.stateNode,i=n._retryCache,i===null&&(i=n._retryCache=new Lg),i;default:throw Error(r(435,n.tag))}}function Qo(n,i){var s=z2(n);i.forEach(function(l){if(!s.has(l)){s.add(l);var f=F2.bind(null,n,l);l.then(f,f)}})}function Ut(n,i){var s=i.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=n,b=i,k=b;e:for(;k!==null;){switch(k.tag){case 27:if(Di(k.type)){We=k.stateNode,zt=!1;break e}break;case 5:We=k.stateNode,zt=!1;break e;case 3:case 4:We=k.stateNode.containerInfo,zt=!0;break e}k=k.return}if(We===null)throw Error(r(160));Ug(m,b,f),We=null,zt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Vg(i,n),i=i.sibling}var bn=null;function Vg(n,i){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Ut(i,n),Bt(n),l&4&&(Ti(3,n,n.return),ss(3,n),Ti(5,n,n.return));break;case 1:Ut(i,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),l&64&&ei&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=bn;if(Ut(i,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){e:{l=n.type,s=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Lr]||m[bt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),jt(m,l,s),m[bt]=n,gt(m),l=m;break e;case"link":var b=V0("link","href",f).get(l+(s.href||""));if(b){for(var k=0;k<b.length;k++)if(m=b[k],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(k,1);break t}}m=f.createElement(l),jt(m,l,s),f.head.appendChild(m);break;case"meta":if(b=V0("meta","content",f).get(l+(s.content||""))){for(k=0;k<b.length;k++)if(m=b[k],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(k,1);break t}}m=f.createElement(l),jt(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[bt]=n,gt(m),l=m}n.stateNode=l}else H0(f,n.type,n.stateNode);else n.stateNode=P0(f,l,n.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?H0(f,n.type,n.stateNode):P0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&sd(n,n.memoizedProps,s.memoizedProps)}break;case 27:Ut(i,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),s!==null&&l&4&&sd(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Ut(i,n),Bt(n),l&512&&(ct||s===null||Dn(s,s.return)),n.flags&32){f=n.stateNode;try{Ra(f,"")}catch(re){Pe(n,n.return,re)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,sd(n,f,s!==null?s.memoizedProps:f)),l&1024&&(cd=!0);break;case 6:if(Ut(i,n),Bt(n),l&4){if(n.stateNode===null)throw Error(r(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(re){Pe(n,n.return,re)}}break;case 3:if(pl=null,f=bn,bn=hl(i.containerInfo),Ut(i,n),bn=f,Bt(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{or(i.containerInfo)}catch(re){Pe(n,n.return,re)}cd&&(cd=!1,Hg(n));break;case 4:l=bn,bn=hl(n.stateNode.containerInfo),Ut(i,n),Bt(n),bn=l;break;case 12:Ut(i,n),Bt(n);break;case 31:Ut(i,n),Bt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Qo(n,l)));break;case 13:Ut(i,n),Bt(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(el=qt()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Qo(n,l)));break;case 22:f=n.memoizedState!==null;var A=s!==null&&s.memoizedState!==null,B=ei,I=ct;if(ei=B||f,ct=I||A,Ut(i,n),ct=I,ei=B,Bt(n),l&8192)e:for(i=n.stateNode,i._visibility=f?i._visibility&-2:i._visibility|1,f&&(s===null||A||ei||ct||ca(n)),s=null,i=n;;){if(i.tag===5||i.tag===26){if(s===null){A=s=i;try{if(m=A.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{k=A.stateNode;var K=A.memoizedProps.style,P=K!=null&&K.hasOwnProperty("display")?K.display:null;k.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(re){Pe(A,A.return,re)}}}else if(i.tag===6){if(s===null){A=i;try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(re){Pe(A,A.return,re)}}}else if(i.tag===18){if(s===null){A=i;try{var $=A.stateNode;f?R0($,!0):R0(A.stateNode,!1)}catch(re){Pe(A,A.return,re)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===n)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break e;for(;i.sibling===null;){if(i.return===null||i.return===n)break e;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Qo(n,s))));break;case 19:Ut(i,n),Bt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Qo(n,l)));break;case 30:break;case 21:break;default:Ut(i,n),Bt(n)}}function Bt(n){var i=n.flags;if(i&2){try{for(var s,l=n.return;l!==null;){if(Og(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=od(n);Jo(n,m,f);break;case 5:var b=s.stateNode;s.flags&32&&(Ra(b,""),s.flags&=-33);var k=od(n);Jo(n,k,b);break;case 3:case 4:var A=s.stateNode.containerInfo,B=od(n);ld(n,B,A);break;default:throw Error(r(161))}}catch(I){Pe(n,n.return,I)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Hg(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var i=n;Hg(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),n=n.sibling}}function ni(n,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Mg(n,i.alternate,i),i=i.sibling}function ca(n){for(n=n.child;n!==null;){var i=n;switch(i.tag){case 0:case 11:case 14:case 15:Ti(4,i,i.return),ca(i);break;case 1:Dn(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&Rg(i,i.return,s),ca(i);break;case 27:gs(i.stateNode);case 26:case 5:Dn(i,i.return),ca(i);break;case 22:i.memoizedState===null&&ca(i);break;case 30:ca(i);break;default:ca(i)}n=n.sibling}}function ii(n,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,f=n,m=i,b=m.flags;switch(m.tag){case 0:case 11:case 15:ii(f,m,s),ss(4,m);break;case 1:if(ii(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(B){Pe(l,l.return,B)}if(l=m,f=l.updateQueue,f!==null){var k=l.stateNode;try{var A=f.shared.hiddenCallbacks;if(A!==null)for(f.shared.hiddenCallbacks=null,f=0;f<A.length;f++)vm(A[f],k)}catch(B){Pe(l,l.return,B)}}s&&b&64&&Cg(m),os(m,m.return);break;case 27:Dg(m);case 26:case 5:ii(f,m,s),s&&l===null&&b&4&&Ng(m),os(m,m.return);break;case 12:ii(f,m,s);break;case 31:ii(f,m,s),s&&b&4&&Bg(f,m);break;case 13:ii(f,m,s),s&&b&4&&Pg(f,m);break;case 22:m.memoizedState===null&&ii(f,m,s),os(m,m.return);break;case 30:break;default:ii(f,m,s)}i=i.sibling}}function ud(n,i){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(n=i.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Kr(s))}function dd(n,i){n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Kr(n))}function xn(n,i,s,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)$g(n,i,s,l),i=i.sibling}function $g(n,i,s,l){var f=i.flags;switch(i.tag){case 0:case 11:case 15:xn(n,i,s,l),f&2048&&ss(9,i);break;case 1:xn(n,i,s,l);break;case 3:xn(n,i,s,l),f&2048&&(n=null,i.alternate!==null&&(n=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==n&&(i.refCount++,n!=null&&Kr(n)));break;case 12:if(f&2048){xn(n,i,s,l),n=i.stateNode;try{var m=i.memoizedProps,b=m.id,k=m.onPostCommit;typeof k=="function"&&k(b,i.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(A){Pe(i,i.return,A)}}else xn(n,i,s,l);break;case 31:xn(n,i,s,l);break;case 13:xn(n,i,s,l);break;case 23:break;case 22:m=i.stateNode,b=i.alternate,i.memoizedState!==null?m._visibility&2?xn(n,i,s,l):ls(n,i):m._visibility&2?xn(n,i,s,l):(m._visibility|=2,Xa(n,i,s,l,(i.subtreeFlags&10256)!==0||!1)),f&2048&&ud(b,i);break;case 24:xn(n,i,s,l),f&2048&&dd(i.alternate,i);break;default:xn(n,i,s,l)}}function Xa(n,i,s,l,f){for(f=f&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=n,b=i,k=s,A=l,B=b.flags;switch(b.tag){case 0:case 11:case 15:Xa(m,b,k,A,f),ss(8,b);break;case 23:break;case 22:var I=b.stateNode;b.memoizedState!==null?I._visibility&2?Xa(m,b,k,A,f):ls(m,b):(I._visibility|=2,Xa(m,b,k,A,f)),f&&B&2048&&ud(b.alternate,b);break;case 24:Xa(m,b,k,A,f),f&&B&2048&&dd(b.alternate,b);break;default:Xa(m,b,k,A,f)}i=i.sibling}}function ls(n,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=n,l=i,f=l.flags;switch(l.tag){case 22:ls(s,l),f&2048&&ud(l.alternate,l);break;case 24:ls(s,l),f&2048&&dd(l.alternate,l);break;default:ls(s,l)}i=i.sibling}}var cs=8192;function Ja(n,i,s){if(n.subtreeFlags&cs)for(n=n.child;n!==null;)Ig(n,i,s),n=n.sibling}function Ig(n,i,s){switch(n.tag){case 26:Ja(n,i,s),n.flags&cs&&n.memoizedState!==null&&S5(s,bn,n.memoizedState,n.memoizedProps);break;case 5:Ja(n,i,s);break;case 3:case 4:var l=bn;bn=hl(n.stateNode.containerInfo),Ja(n,i,s),bn=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=cs,cs=16777216,Ja(n,i,s),cs=l):Ja(n,i,s));break;default:Ja(n,i,s)}}function qg(n){var i=n.alternate;if(i!==null&&(n=i.child,n!==null)){i.child=null;do i=n.sibling,n.sibling=null,n=i;while(n!==null)}}function us(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yt=l,Gg(l,n)}qg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Fg(n),n=n.sibling}function Fg(n){switch(n.tag){case 0:case 11:case 15:us(n),n.flags&2048&&Ti(9,n,n.return);break;case 3:us(n);break;case 12:us(n);break;case 22:var i=n.stateNode;n.memoizedState!==null&&i._visibility&2&&(n.return===null||n.return.tag!==13)?(i._visibility&=-3,Zo(n)):us(n);break;default:us(n)}}function Zo(n){var i=n.deletions;if((n.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var l=i[s];yt=l,Gg(l,n)}qg(n)}for(n=n.child;n!==null;){switch(i=n,i.tag){case 0:case 11:case 15:Ti(8,i,i.return),Zo(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,Zo(i));break;default:Zo(i)}n=n.sibling}}function Gg(n,i){for(;yt!==null;){var s=yt;switch(s.tag){case 0:case 11:case 15:Ti(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Kr(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,yt=l;else e:for(s=n;yt!==null;){l=yt;var f=l.sibling,m=l.return;if(zg(l),l===s){yt=null;break e}if(f!==null){f.return=m,yt=f;break e}yt=m}}}var U2={getCacheForType:function(n){var i=wt(st),s=i.data.get(n);return s===void 0&&(s=n(),i.data.set(n,s)),s},cacheSignal:function(){return wt(st).controller.signal}},B2=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ie=null,Ce=null,Ne=0,Be=0,Jt=null,Ei=!1,Qa=!1,hd=!1,ai=0,Qe=0,Ai=0,ua=0,fd=0,Qt=0,Za=0,ds=null,Pt=null,pd=!1,el=0,Kg=0,tl=1/0,nl=null,Ci=null,ft=0,Ri=null,er=null,ri=0,md=0,gd=null,Yg=null,hs=0,yd=null;function Zt(){return(Ue&2)!==0&&Ne!==0?Ne&-Ne:z.T!==null?jd():up()}function Wg(){if(Qt===0)if((Ne&536870912)===0||De){var n=co;co<<=1,(co&3932160)===0&&(co=262144),Qt=n}else Qt=536870912;return n=Wt.current,n!==null&&(n.flags|=32),Qt}function Vt(n,i,s){(n===Ie&&(Be===2||Be===9)||n.cancelPendingCommit!==null)&&(tr(n,0),Ni(n,Ne,Qt,!1)),Dr(n,s),((Ue&2)===0||n!==Ie)&&(n===Ie&&((Ue&2)===0&&(ua|=s),Qe===4&&Ni(n,Ne,Qt,!1)),Ln(n))}function Xg(n,i,s){if((Ue&6)!==0)throw Error(r(327));var l=!s&&(i&127)===0&&(i&n.expiredLanes)===0||Or(n,i),f=l?H2(n,i):bd(n,i,!0),m=l;do{if(f===0){Qa&&!l&&Ni(n,i,0,!1);break}else{if(s=n.current.alternate,m&&!P2(s)){f=bd(n,i,!1),m=!1;continue}if(f===2){if(m=i,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){i=b;e:{var k=n;f=ds;var A=k.current.memoizedState.isDehydrated;if(A&&(tr(k,b).flags|=256),b=bd(k,b,!1),b!==2){if(hd&&!A){k.errorRecoveryDisabledLanes|=m,ua|=m,f=4;break e}m=Pt,Pt=f,m!==null&&(Pt===null?Pt=m:Pt.push.apply(Pt,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){tr(n,0),Ni(n,i,0,!0);break}e:{switch(l=n,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Ni(l,i,Qt,!Ei);break e;case 2:Pt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(f=el+300-qt(),10<f)){if(Ni(l,i,Qt,!Ei),ho(l,0,!0)!==0)break e;ri=i,l.timeoutHandle=E0(Jg.bind(null,l,s,Pt,nl,pd,i,Qt,ua,Za,Ei,m,"Throttled",-0,0),f);break e}Jg(l,s,Pt,nl,pd,i,Qt,ua,Za,Ei,m,null,-0,0)}}break}while(!0);Ln(n)}function Jg(n,i,s,l,f,m,b,k,A,B,I,K,P,$){if(n.timeoutHandle=-1,K=i.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qn},Ig(i,m,K);var re=(m&62914560)===m?el-qt():(m&4194048)===m?Kg-qt():0;if(re=j5(K,re),re!==null){ri=m,n.cancelPendingCommit=re(r0.bind(null,n,i,m,s,l,f,b,k,A,I,K,null,P,$)),Ni(n,m,b,!B);return}}r0(n,i,m,s,l,f,b,k,A)}function P2(n){for(var i=n;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!Kt(m(),f))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ni(n,i,s,l){i&=~fd,i&=~ua,n.suspendedLanes|=i,n.pingedLanes&=~i,l&&(n.warmLanes|=i),l=n.expirationTimes;for(var f=i;0<f;){var m=31-Gt(f),b=1<<m;l[m]=-1,f&=~b}s!==0&&op(n,s,i)}function il(){return(Ue&6)===0?(fs(0),!1):!0}function vd(){if(Ce!==null){if(Be===0)var n=Ce.return;else n=Ce,Yn=ta=null,Lu(n),Fa=null,Wr=0,n=Ce;for(;n!==null;)Ag(n.alternate,n),n=n.return;Ce=null}}function tr(n,i){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,r5(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),ri=0,vd(),Ie=n,Ce=s=Gn(n.current,null),Ne=i,Be=0,Jt=null,Ei=!1,Qa=Or(n,i),hd=!1,Za=Qt=fd=ua=Ai=Qe=0,Pt=ds=null,pd=!1,(i&8)!==0&&(i|=i&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=i;0<l;){var f=31-Gt(l),m=1<<f;i|=n[f],l&=~m}return ai=i,ko(),s}function Qg(n,i){Te=null,z.H=is,i===qa||i===Oo?(i=pm(),Be=3):i===Su?(i=pm(),Be=4):Be=i===Xu?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Jt=i,Ce===null&&(Qe=1,Go(n,ln(i,n.current)))}function Zg(){var n=Wt.current;return n===null?!0:(Ne&4194048)===Ne?hn===null:(Ne&62914560)===Ne||(Ne&536870912)!==0?n===hn:!1}function e0(){var n=z.H;return z.H=is,n===null?is:n}function t0(){var n=z.A;return z.A=U2,n}function al(){Qe=4,Ei||(Ne&4194048)!==Ne&&Wt.current!==null||(Qa=!0),(Ai&134217727)===0&&(ua&134217727)===0||Ie===null||Ni(Ie,Ne,Qt,!1)}function bd(n,i,s){var l=Ue;Ue|=2;var f=e0(),m=t0();(Ie!==n||Ne!==i)&&(nl=null,tr(n,i)),i=!1;var b=Qe;e:do try{if(Be!==0&&Ce!==null){var k=Ce,A=Jt;switch(Be){case 8:vd(),b=6;break e;case 3:case 2:case 9:case 6:Wt.current===null&&(i=!0);var B=Be;if(Be=0,Jt=null,nr(n,k,A,B),s&&Qa){b=0;break e}break;default:B=Be,Be=0,Jt=null,nr(n,k,A,B)}}V2(),b=Qe;break}catch(I){Qg(n,I)}while(!0);return i&&n.shellSuspendCounter++,Yn=ta=null,Ue=l,z.H=f,z.A=m,Ce===null&&(Ie=null,Ne=0,ko()),b}function V2(){for(;Ce!==null;)n0(Ce)}function H2(n,i){var s=Ue;Ue|=2;var l=e0(),f=t0();Ie!==n||Ne!==i?(nl=null,tl=qt()+500,tr(n,i)):Qa=Or(n,i);e:do try{if(Be!==0&&Ce!==null){i=Ce;var m=Jt;t:switch(Be){case 1:Be=0,Jt=null,nr(n,i,m,1);break;case 2:case 9:if(hm(m)){Be=0,Jt=null,i0(i);break}i=function(){Be!==2&&Be!==9||Ie!==n||(Be=7),Ln(n)},m.then(i,i);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:hm(m)?(Be=0,Jt=null,i0(i)):(Be=0,Jt=null,nr(n,i,m,7));break;case 5:var b=null;switch(Ce.tag){case 26:b=Ce.memoizedState;case 5:case 27:var k=Ce;if(b?$0(b):k.stateNode.complete){Be=0,Jt=null;var A=k.sibling;if(A!==null)Ce=A;else{var B=k.return;B!==null?(Ce=B,rl(B)):Ce=null}break t}}Be=0,Jt=null,nr(n,i,m,5);break;case 6:Be=0,Jt=null,nr(n,i,m,6);break;case 8:vd(),Qe=6;break e;default:throw Error(r(462))}}$2();break}catch(I){Qg(n,I)}while(!0);return Yn=ta=null,z.H=l,z.A=f,Ue=s,Ce!==null?0:(Ie=null,Ne=0,ko(),Qe)}function $2(){for(;Ce!==null&&!dw();)n0(Ce)}function n0(n){var i=Tg(n.alternate,n,ai);n.memoizedProps=n.pendingProps,i===null?rl(n):Ce=i}function i0(n){var i=n,s=i.alternate;switch(i.tag){case 15:case 0:i=xg(s,i,i.pendingProps,i.type,void 0,Ne);break;case 11:i=xg(s,i,i.pendingProps,i.type.render,i.ref,Ne);break;case 5:Lu(i);default:Ag(s,i),i=Ce=tm(i,ai),i=Tg(s,i,ai)}n.memoizedProps=n.pendingProps,i===null?rl(n):Ce=i}function nr(n,i,s,l){Yn=ta=null,Lu(i),Fa=null,Wr=0;var f=i.return;try{if(R2(n,f,i,s,Ne)){Qe=1,Go(n,ln(s,n.current)),Ce=null;return}}catch(m){if(f!==null)throw Ce=f,m;Qe=1,Go(n,ln(s,n.current)),Ce=null;return}i.flags&32768?(De||l===1?n=!0:Qa||(Ne&536870912)!==0?n=!1:(Ei=n=!0,(l===2||l===9||l===3||l===6)&&(l=Wt.current,l!==null&&l.tag===13&&(l.flags|=16384))),a0(i,n)):rl(i)}function rl(n){var i=n;do{if((i.flags&32768)!==0){a0(i,Ei);return}n=i.return;var s=D2(i.alternate,i,ai);if(s!==null){Ce=s;return}if(i=i.sibling,i!==null){Ce=i;return}Ce=i=n}while(i!==null);Qe===0&&(Qe=5)}function a0(n,i){do{var s=L2(n.alternate,n);if(s!==null){s.flags&=32767,Ce=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(n=n.sibling,n!==null)){Ce=n;return}Ce=n=s}while(n!==null);Qe=6,Ce=null}function r0(n,i,s,l,f,m,b,k,A){n.cancelPendingCommit=null;do sl();while(ft!==0);if((Ue&6)!==0)throw Error(r(327));if(i!==null){if(i===n.current)throw Error(r(177));if(m=i.lanes|i.childLanes,m|=ou,ww(n,s,m,b,k,A),n===Ie&&(Ce=Ie=null,Ne=0),er=i,Ri=n,ri=s,md=m,gd=f,Yg=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,G2(oo,function(){return u0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=z.T,z.T=null,f=ee.p,ee.p=2,b=Ue,Ue|=4;try{M2(n,i,s)}finally{Ue=b,ee.p=f,z.T=l}}ft=1,s0(),o0(),l0()}}function s0(){if(ft===1){ft=0;var n=Ri,i=er,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=z.T,z.T=null;var l=ee.p;ee.p=2;var f=Ue;Ue|=4;try{Vg(i,n);var m=Nd,b=Gp(n.containerInfo),k=m.focusedElem,A=m.selectionRange;if(b!==k&&k&&k.ownerDocument&&Fp(k.ownerDocument.documentElement,k)){if(A!==null&&nu(k)){var B=A.start,I=A.end;if(I===void 0&&(I=B),"selectionStart"in k)k.selectionStart=B,k.selectionEnd=Math.min(I,k.value.length);else{var K=k.ownerDocument||document,P=K&&K.defaultView||window;if(P.getSelection){var $=P.getSelection(),re=k.textContent.length,ge=Math.min(A.start,re),$e=A.end===void 0?ge:Math.min(A.end,re);!$.extend&&ge>$e&&(b=$e,$e=ge,ge=b);var L=qp(k,ge),O=qp(k,$e);if(L&&O&&($.rangeCount!==1||$.anchorNode!==L.node||$.anchorOffset!==L.offset||$.focusNode!==O.node||$.focusOffset!==O.offset)){var U=K.createRange();U.setStart(L.node,L.offset),$.removeAllRanges(),ge>$e?($.addRange(U),$.extend(O.node,O.offset)):(U.setEnd(O.node,O.offset),$.addRange(U))}}}}for(K=[],$=k;$=$.parentNode;)$.nodeType===1&&K.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof k.focus=="function"&&k.focus(),k=0;k<K.length;k++){var F=K[k];F.element.scrollLeft=F.left,F.element.scrollTop=F.top}}vl=!!Rd,Nd=Rd=null}finally{Ue=f,ee.p=l,z.T=s}}n.current=i,ft=2}}function o0(){if(ft===2){ft=0;var n=Ri,i=er,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=z.T,z.T=null;var l=ee.p;ee.p=2;var f=Ue;Ue|=4;try{Mg(n,i.alternate,i)}finally{Ue=f,ee.p=l,z.T=s}}ft=3}}function l0(){if(ft===4||ft===3){ft=0,hw();var n=Ri,i=er,s=ri,l=Yg;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?ft=5:(ft=0,er=Ri=null,c0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ci=null),Uc(s),i=i.stateNode,Ft&&typeof Ft.onCommitFiberRoot=="function")try{Ft.onCommitFiberRoot(Nr,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=z.T,f=ee.p,ee.p=2,z.T=null;try{for(var m=n.onRecoverableError,b=0;b<l.length;b++){var k=l[b];m(k.value,{componentStack:k.stack})}}finally{z.T=i,ee.p=f}}(ri&3)!==0&&sl(),Ln(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===yd?hs++:(hs=0,yd=n):hs=0,fs(0)}}function c0(n,i){(n.pooledCacheLanes&=i)===0&&(i=n.pooledCache,i!=null&&(n.pooledCache=null,Kr(i)))}function sl(){return s0(),o0(),l0(),u0()}function u0(){if(ft!==5)return!1;var n=Ri,i=md;md=0;var s=Uc(ri),l=z.T,f=ee.p;try{ee.p=32>s?32:s,z.T=null,s=gd,gd=null;var m=Ri,b=ri;if(ft=0,er=Ri=null,ri=0,(Ue&6)!==0)throw Error(r(331));var k=Ue;if(Ue|=4,Fg(m.current),$g(m,m.current,b,s),Ue=k,fs(0,!1),Ft&&typeof Ft.onPostCommitFiberRoot=="function")try{Ft.onPostCommitFiberRoot(Nr,m)}catch{}return!0}finally{ee.p=f,z.T=l,c0(n,i)}}function d0(n,i,s){i=ln(s,i),i=Wu(n.stateNode,i,2),n=ji(n,i,2),n!==null&&(Dr(n,2),Ln(n))}function Pe(n,i,s){if(n.tag===3)d0(n,n,s);else for(;i!==null;){if(i.tag===3){d0(i,n,s);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ci===null||!Ci.has(l))){n=ln(s,n),s=hg(2),l=ji(i,s,2),l!==null&&(fg(s,l,i,n),Dr(l,2),Ln(l));break}}i=i.return}}function xd(n,i,s){var l=n.pingCache;if(l===null){l=n.pingCache=new B2;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(s)||(hd=!0,f.add(s),n=I2.bind(null,n,i,s),i.then(n,n))}function I2(n,i,s){var l=n.pingCache;l!==null&&l.delete(i),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ie===n&&(Ne&s)===s&&(Qe===4||Qe===3&&(Ne&62914560)===Ne&&300>qt()-el?(Ue&2)===0&&tr(n,0):fd|=s,Za===Ne&&(Za=0)),Ln(n)}function h0(n,i){i===0&&(i=sp()),n=Qi(n,i),n!==null&&(Dr(n,i),Ln(n))}function q2(n){var i=n.memoizedState,s=0;i!==null&&(s=i.retryLane),h0(n,s)}function F2(n,i){var s=0;switch(n.tag){case 31:case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),h0(n,s)}function G2(n,i){return Dc(n,i)}var ol=null,ir=null,wd=!1,ll=!1,Sd=!1,Oi=0;function Ln(n){n!==ir&&n.next===null&&(ir===null?ol=ir=n:ir=ir.next=n),ll=!0,wd||(wd=!0,Y2())}function fs(n,i){if(!Sd&&ll){Sd=!0;do for(var s=!1,l=ol;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var b=l.suspendedLanes,k=l.pingedLanes;m=(1<<31-Gt(42|n)+1)-1,m&=f&~(b&~k),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,g0(l,m))}else m=Ne,m=ho(l,l===Ie?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Or(l,m)||(s=!0,g0(l,m));l=l.next}while(s);Sd=!1}}function K2(){f0()}function f0(){ll=wd=!1;var n=0;Oi!==0&&a5()&&(n=Oi);for(var i=qt(),s=null,l=ol;l!==null;){var f=l.next,m=p0(l,i);m===0?(l.next=null,s===null?ol=f:s.next=f,f===null&&(ir=s)):(s=l,(n!==0||(m&3)!==0)&&(ll=!0)),l=f}ft!==0&&ft!==5||fs(n),Oi!==0&&(Oi=0)}function p0(n,i){for(var s=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-Gt(m),k=1<<b,A=f[b];A===-1?((k&s)===0||(k&l)!==0)&&(f[b]=xw(k,i)):A<=i&&(n.expiredLanes|=k),m&=~k}if(i=Ie,s=Ne,s=ho(n,n===i?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===i&&(Be===2||Be===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Lc(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Or(n,s)){if(i=s&-s,i===n.callbackPriority)return i;switch(l!==null&&Lc(l),Uc(s)){case 2:case 8:s=ap;break;case 32:s=oo;break;case 268435456:s=rp;break;default:s=oo}return l=m0.bind(null,n),s=Dc(s,l),n.callbackPriority=i,n.callbackNode=s,i}return l!==null&&l!==null&&Lc(l),n.callbackPriority=2,n.callbackNode=null,2}function m0(n,i){if(ft!==0&&ft!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(sl()&&n.callbackNode!==s)return null;var l=Ne;return l=ho(n,n===Ie?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Xg(n,l,i),p0(n,qt()),n.callbackNode!=null&&n.callbackNode===s?m0.bind(null,n):null)}function g0(n,i){if(sl())return null;Xg(n,i,!0)}function Y2(){s5(function(){(Ue&6)!==0?Dc(ip,K2):f0()})}function jd(){if(Oi===0){var n=$a;n===0&&(n=lo,lo<<=1,(lo&261888)===0&&(lo=256)),Oi=n}return Oi}function y0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:go(""+n)}function v0(n,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,n.id&&s.setAttribute("form",n.id),i.parentNode.insertBefore(s,i),n=new FormData(n),s.parentNode.removeChild(s),n}function W2(n,i,s,l,f){if(i==="submit"&&s&&s.stateNode===f){var m=y0((f[Lt]||null).action),b=l.submitter;b&&(i=(i=b[Lt]||null)?y0(i.formAction):b.getAttribute("formAction"),i!==null&&(m=i,b=null));var k=new xo("action","action",null,l,f);n.push({event:k,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Oi!==0){var A=b?v0(f,b):new FormData(f);Iu(s,{pending:!0,data:A,method:f.method,action:m},null,A)}}else typeof m=="function"&&(k.preventDefault(),A=b?v0(f,b):new FormData(f),Iu(s,{pending:!0,data:A,method:f.method,action:m},m,A))},currentTarget:f}]})}}for(var kd=0;kd<su.length;kd++){var _d=su[kd],X2=_d.toLowerCase(),J2=_d[0].toUpperCase()+_d.slice(1);vn(X2,"on"+J2)}vn(Wp,"onAnimationEnd"),vn(Xp,"onAnimationIteration"),vn(Jp,"onAnimationStart"),vn("dblclick","onDoubleClick"),vn("focusin","onFocus"),vn("focusout","onBlur"),vn(f2,"onTransitionRun"),vn(p2,"onTransitionStart"),vn(m2,"onTransitionCancel"),vn(Qp,"onTransitionEnd"),Aa("onMouseEnter",["mouseout","mouseover"]),Aa("onMouseLeave",["mouseout","mouseover"]),Aa("onPointerEnter",["pointerout","pointerover"]),Aa("onPointerLeave",["pointerout","pointerover"]),Yi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Yi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Yi("onBeforeInput",["compositionend","keypress","textInput","paste"]),Yi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Yi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ps));function b0(n,i){i=(i&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],f=l.event;l=l.listeners;e:{var m=void 0;if(i)for(var b=l.length-1;0<=b;b--){var k=l[b],A=k.instance,B=k.currentTarget;if(k=k.listener,A!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=B;try{m(f)}catch(I){jo(I)}f.currentTarget=null,m=A}else for(b=0;b<l.length;b++){if(k=l[b],A=k.instance,B=k.currentTarget,k=k.listener,A!==m&&f.isPropagationStopped())break e;m=k,f.currentTarget=B;try{m(f)}catch(I){jo(I)}f.currentTarget=null,m=A}}}}function Re(n,i){var s=i[Bc];s===void 0&&(s=i[Bc]=new Set);var l=n+"__bubble";s.has(l)||(x0(i,n,2,!1),s.add(l))}function Td(n,i,s){var l=0;i&&(l|=4),x0(s,n,l,i)}var cl="_reactListening"+Math.random().toString(36).slice(2);function Ed(n){if(!n[cl]){n[cl]=!0,fp.forEach(function(s){s!=="selectionchange"&&(Q2.has(s)||Td(s,!1,n),Td(s,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[cl]||(i[cl]=!0,Td("selectionchange",!1,i))}}function x0(n,i,s,l){switch(W0(i)){case 2:var f=T5;break;case 8:f=E5;break;default:f=$d}s=f.bind(null,i,s,n),f=void 0,!Kc||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(i,s,{capture:!0,passive:f}):n.addEventListener(i,s,!0):f!==void 0?n.addEventListener(i,s,{passive:f}):n.addEventListener(i,s,!1)}function Ad(n,i,s,l,f){var m=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var k=l.stateNode.containerInfo;if(k===f)break;if(b===4)for(b=l.return;b!==null;){var A=b.tag;if((A===3||A===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;k!==null;){if(b=_a(k),b===null)return;if(A=b.tag,A===5||A===6||A===26||A===27){l=m=b;continue e}k=k.parentNode}}l=l.return}_p(function(){var B=m,I=Fc(s),K=[];e:{var P=Zp.get(n);if(P!==void 0){var $=xo,re=n;switch(n){case"keypress":if(vo(s)===0)break e;case"keydown":case"keyup":$=Fw;break;case"focusin":re="focus",$=Jc;break;case"focusout":re="blur",$=Jc;break;case"beforeblur":case"afterblur":$=Jc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=Dw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=Yw;break;case Wp:case Xp:case Jp:$=zw;break;case Qp:$=Xw;break;case"scroll":case"scrollend":$=Nw;break;case"wheel":$=Qw;break;case"copy":case"cut":case"paste":$=Bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=Rp;break;case"toggle":case"beforetoggle":$=e2}var ge=(i&4)!==0,$e=!ge&&(n==="scroll"||n==="scrollend"),L=ge?P!==null?P+"Capture":null:P;ge=[];for(var O=B,U;O!==null;){var F=O;if(U=F.stateNode,F=F.tag,F!==5&&F!==26&&F!==27||U===null||L===null||(F=zr(O,L),F!=null&&ge.push(ms(O,F,U))),$e)break;O=O.return}0<ge.length&&(P=new $(P,re,null,s,I),K.push({event:P,listeners:ge}))}}if((i&7)===0){e:{if(P=n==="mouseover"||n==="pointerover",$=n==="mouseout"||n==="pointerout",P&&s!==qc&&(re=s.relatedTarget||s.fromElement)&&(_a(re)||re[ka]))break e;if(($||P)&&(P=I.window===I?I:(P=I.ownerDocument)?P.defaultView||P.parentWindow:window,$?(re=s.relatedTarget||s.toElement,$=B,re=re?_a(re):null,re!==null&&($e=c(re),ge=re.tag,re!==$e||ge!==5&&ge!==27&&ge!==6)&&(re=null)):($=null,re=B),$!==re)){if(ge=Ap,F="onMouseLeave",L="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(ge=Rp,F="onPointerLeave",L="onPointerEnter",O="pointer"),$e=$==null?P:Mr($),U=re==null?P:Mr(re),P=new ge(F,O+"leave",$,s,I),P.target=$e,P.relatedTarget=U,F=null,_a(I)===B&&(ge=new ge(L,O+"enter",re,s,I),ge.target=U,ge.relatedTarget=$e,F=ge),$e=F,$&&re)t:{for(ge=Z2,L=$,O=re,U=0,F=L;F;F=ge(F))U++;F=0;for(var de=O;de;de=ge(de))F++;for(;0<U-F;)L=ge(L),U--;for(;0<F-U;)O=ge(O),F--;for(;U--;){if(L===O||O!==null&&L===O.alternate){ge=L;break t}L=ge(L),O=ge(O)}ge=null}else ge=null;$!==null&&w0(K,P,$,ge,!1),re!==null&&$e!==null&&w0(K,$e,re,ge,!0)}}e:{if(P=B?Mr(B):window,$=P.nodeName&&P.nodeName.toLowerCase(),$==="select"||$==="input"&&P.type==="file")var Me=Bp;else if(zp(P))if(Pp)Me=u2;else{Me=l2;var le=o2}else $=P.nodeName,!$||$.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?B&&Ic(B.elementType)&&(Me=Bp):Me=c2;if(Me&&(Me=Me(n,B))){Up(K,Me,s,I);break e}le&&le(n,P,B),n==="focusout"&&B&&P.type==="number"&&B.memoizedProps.value!=null&&$c(P,"number",P.value)}switch(le=B?Mr(B):window,n){case"focusin":(zp(le)||le.contentEditable==="true")&&(La=le,iu=B,qr=null);break;case"focusout":qr=iu=La=null;break;case"mousedown":au=!0;break;case"contextmenu":case"mouseup":case"dragend":au=!1,Kp(K,s,I);break;case"selectionchange":if(h2)break;case"keydown":case"keyup":Kp(K,s,I)}var Ee;if(Zc)e:{switch(n){case"compositionstart":var Oe="onCompositionStart";break e;case"compositionend":Oe="onCompositionEnd";break e;case"compositionupdate":Oe="onCompositionUpdate";break e}Oe=void 0}else Da?Lp(n,s)&&(Oe="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Oe="onCompositionStart");Oe&&(Np&&s.locale!=="ko"&&(Da||Oe!=="onCompositionStart"?Oe==="onCompositionEnd"&&Da&&(Ee=Tp()):(gi=I,Yc="value"in gi?gi.value:gi.textContent,Da=!0)),le=ul(B,Oe),0<le.length&&(Oe=new Cp(Oe,n,null,s,I),K.push({event:Oe,listeners:le}),Ee?Oe.data=Ee:(Ee=Mp(s),Ee!==null&&(Oe.data=Ee)))),(Ee=n2?i2(n,s):a2(n,s))&&(Oe=ul(B,"onBeforeInput"),0<Oe.length&&(le=new Cp("onBeforeInput","beforeinput",null,s,I),K.push({event:le,listeners:Oe}),le.data=Ee)),W2(K,n,B,s,I)}b0(K,i)})}function ms(n,i,s){return{instance:n,listener:i,currentTarget:s}}function ul(n,i){for(var s=i+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=zr(n,s),f!=null&&l.unshift(ms(n,f,m)),f=zr(n,i),f!=null&&l.push(ms(n,f,m))),n.tag===3)return l;n=n.return}return[]}function Z2(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function w0(n,i,s,l,f){for(var m=i._reactName,b=[];s!==null&&s!==l;){var k=s,A=k.alternate,B=k.stateNode;if(k=k.tag,A!==null&&A===l)break;k!==5&&k!==26&&k!==27||B===null||(A=B,f?(B=zr(s,m),B!=null&&b.unshift(ms(s,B,A))):f||(B=zr(s,m),B!=null&&b.push(ms(s,B,A)))),s=s.return}b.length!==0&&n.push({event:i,listeners:b})}var e5=/\r\n?/g,t5=/\u0000|\uFFFD/g;function S0(n){return(typeof n=="string"?n:""+n).replace(e5,`
`).replace(t5,"")}function j0(n,i){return i=S0(i),S0(n)===i}function He(n,i,s,l,f,m){switch(s){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||Ra(n,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&Ra(n,""+l);break;case"className":po(n,"class",l);break;case"tabIndex":po(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":po(n,s,l);break;case"style":jp(n,l,m);break;case"data":if(i!=="object"){po(n,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=go(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&He(n,i,"name",f.name,f,null),He(n,i,"formEncType",f.formEncType,f,null),He(n,i,"formMethod",f.formMethod,f,null),He(n,i,"formTarget",f.formTarget,f,null)):(He(n,i,"encType",f.encType,f,null),He(n,i,"method",f.method,f,null),He(n,i,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=go(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=qn);break;case"onScroll":l!=null&&Re("scroll",n);break;case"onScrollEnd":l!=null&&Re("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=go(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":Re("beforetoggle",n),Re("toggle",n),fo(n,"popover",l);break;case"xlinkActuate":In(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":In(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":In(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":In(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":In(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":In(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":In(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":In(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":In(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":fo(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Cw.get(s)||s,fo(n,s,l))}}function Cd(n,i,s,l,f,m){switch(s){case"style":jp(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof l=="string"?Ra(n,l):(typeof l=="number"||typeof l=="bigint")&&Ra(n,""+l);break;case"onScroll":l!=null&&Re("scroll",n);break;case"onScrollEnd":l!=null&&Re("scrollend",n);break;case"onClick":l!=null&&(n.onclick=qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!pp.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),i=s.slice(2,f?s.length-7:void 0),m=n[Lt]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(i,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(i,l,f);break e}s in n?n[s]=l:l===!0?n.setAttribute(s,""):fo(n,s,l)}}}function jt(n,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Re("error",n),Re("load",n);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:He(n,i,m,b,s,null)}}f&&He(n,i,"srcSet",s.srcSet,s,null),l&&He(n,i,"src",s.src,s,null);return;case"input":Re("invalid",n);var k=m=b=f=null,A=null,B=null;for(l in s)if(s.hasOwnProperty(l)){var I=s[l];if(I!=null)switch(l){case"name":f=I;break;case"type":b=I;break;case"checked":A=I;break;case"defaultChecked":B=I;break;case"value":m=I;break;case"defaultValue":k=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,i));break;default:He(n,i,l,I,s,null)}}bp(n,m,k,A,B,b,f,!1);return;case"select":Re("invalid",n),l=b=m=null;for(f in s)if(s.hasOwnProperty(f)&&(k=s[f],k!=null))switch(f){case"value":m=k;break;case"defaultValue":b=k;break;case"multiple":l=k;default:He(n,i,f,k,s,null)}i=m,s=b,n.multiple=!!l,i!=null?Ca(n,!!l,i,!1):s!=null&&Ca(n,!!l,s,!0);return;case"textarea":Re("invalid",n),m=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(k=s[b],k!=null))switch(b){case"value":l=k;break;case"defaultValue":f=k;break;case"children":m=k;break;case"dangerouslySetInnerHTML":if(k!=null)throw Error(r(91));break;default:He(n,i,b,k,s,null)}wp(n,l,f,m);return;case"option":for(A in s)if(s.hasOwnProperty(A)&&(l=s[A],l!=null))switch(A){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(n,i,A,l,s,null)}return;case"dialog":Re("beforetoggle",n),Re("toggle",n),Re("cancel",n),Re("close",n);break;case"iframe":case"object":Re("load",n);break;case"video":case"audio":for(l=0;l<ps.length;l++)Re(ps[l],n);break;case"image":Re("error",n),Re("load",n);break;case"details":Re("toggle",n);break;case"embed":case"source":case"link":Re("error",n),Re("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in s)if(s.hasOwnProperty(B)&&(l=s[B],l!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:He(n,i,B,l,s,null)}return;default:if(Ic(i)){for(I in s)s.hasOwnProperty(I)&&(l=s[I],l!==void 0&&Cd(n,i,I,l,s,void 0));return}}for(k in s)s.hasOwnProperty(k)&&(l=s[k],l!=null&&He(n,i,k,l,s,null))}function n5(n,i,s,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,k=null,A=null,B=null,I=null;for($ in s){var K=s[$];if(s.hasOwnProperty($)&&K!=null)switch($){case"checked":break;case"value":break;case"defaultValue":A=K;default:l.hasOwnProperty($)||He(n,i,$,null,l,K)}}for(var P in l){var $=l[P];if(K=s[P],l.hasOwnProperty(P)&&($!=null||K!=null))switch(P){case"type":m=$;break;case"name":f=$;break;case"checked":B=$;break;case"defaultChecked":I=$;break;case"value":b=$;break;case"defaultValue":k=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,i));break;default:$!==K&&He(n,i,P,$,l,K)}}Hc(n,b,k,A,B,I,m,f);return;case"select":$=b=k=P=null;for(m in s)if(A=s[m],s.hasOwnProperty(m)&&A!=null)switch(m){case"value":break;case"multiple":$=A;default:l.hasOwnProperty(m)||He(n,i,m,null,l,A)}for(f in l)if(m=l[f],A=s[f],l.hasOwnProperty(f)&&(m!=null||A!=null))switch(f){case"value":P=m;break;case"defaultValue":k=m;break;case"multiple":b=m;default:m!==A&&He(n,i,f,m,l,A)}i=k,s=b,l=$,P!=null?Ca(n,!!s,P,!1):!!l!=!!s&&(i!=null?Ca(n,!!s,i,!0):Ca(n,!!s,s?[]:"",!1));return;case"textarea":$=P=null;for(k in s)if(f=s[k],s.hasOwnProperty(k)&&f!=null&&!l.hasOwnProperty(k))switch(k){case"value":break;case"children":break;default:He(n,i,k,null,l,f)}for(b in l)if(f=l[b],m=s[b],l.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":P=f;break;case"defaultValue":$=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&He(n,i,b,f,l,m)}xp(n,P,$);return;case"option":for(var re in s)if(P=s[re],s.hasOwnProperty(re)&&P!=null&&!l.hasOwnProperty(re))switch(re){case"selected":n.selected=!1;break;default:He(n,i,re,null,l,P)}for(A in l)if(P=l[A],$=s[A],l.hasOwnProperty(A)&&P!==$&&(P!=null||$!=null))switch(A){case"selected":n.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:He(n,i,A,P,l,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in s)P=s[ge],s.hasOwnProperty(ge)&&P!=null&&!l.hasOwnProperty(ge)&&He(n,i,ge,null,l,P);for(B in l)if(P=l[B],$=s[B],l.hasOwnProperty(B)&&P!==$&&(P!=null||$!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(r(137,i));break;default:He(n,i,B,P,l,$)}return;default:if(Ic(i)){for(var $e in s)P=s[$e],s.hasOwnProperty($e)&&P!==void 0&&!l.hasOwnProperty($e)&&Cd(n,i,$e,void 0,l,P);for(I in l)P=l[I],$=s[I],!l.hasOwnProperty(I)||P===$||P===void 0&&$===void 0||Cd(n,i,I,P,l,$);return}}for(var L in s)P=s[L],s.hasOwnProperty(L)&&P!=null&&!l.hasOwnProperty(L)&&He(n,i,L,null,l,P);for(K in l)P=l[K],$=s[K],!l.hasOwnProperty(K)||P===$||P==null&&$==null||He(n,i,K,P,l,$)}function k0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function i5(){if(typeof performance.getEntriesByType=="function"){for(var n=0,i=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,b=f.initiatorType,k=f.duration;if(m&&k&&k0(b)){for(b=0,k=f.responseEnd,l+=1;l<s.length;l++){var A=s[l],B=A.startTime;if(B>k)break;var I=A.transferSize,K=A.initiatorType;I&&k0(K)&&(A=A.responseEnd,b+=I*(A<k?1:(k-B)/(A-B)))}if(--l,i+=8*(m+b)/(f.duration/1e3),n++,10<n)break}}if(0<n)return i/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Rd=null,Nd=null;function dl(n){return n.nodeType===9?n:n.ownerDocument}function _0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function T0(n,i){if(n===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&i==="foreignObject"?0:n}function Od(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Dd=null;function a5(){var n=window.event;return n&&n.type==="popstate"?n===Dd?!1:(Dd=n,!0):(Dd=null,!1)}var E0=typeof setTimeout=="function"?setTimeout:void 0,r5=typeof clearTimeout=="function"?clearTimeout:void 0,A0=typeof Promise=="function"?Promise:void 0,s5=typeof queueMicrotask=="function"?queueMicrotask:typeof A0<"u"?function(n){return A0.resolve(null).then(n).catch(o5)}:E0;function o5(n){setTimeout(function(){throw n})}function Di(n){return n==="head"}function C0(n,i){var s=i,l=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){n.removeChild(f),or(i);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")gs(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,gs(s);for(var m=s.firstChild;m;){var b=m.nextSibling,k=m.nodeName;m[Lr]||k==="SCRIPT"||k==="STYLE"||k==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=b}}else s==="body"&&gs(n.ownerDocument.body);s=f}while(s);or(i)}function R0(n,i){var s=n;n=0;do{var l=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=l}while(s)}function Ld(n){var i=n.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Ld(s),Pc(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function l5(n,i,s,l){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Lr])switch(i){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(i==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=fn(n.nextSibling),n===null)break}return null}function c5(n,i,s){if(i==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=fn(n.nextSibling),n===null))return null;return n}function N0(n,i){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!i||(n=fn(n.nextSibling),n===null))return null;return n}function Md(n){return n.data==="$?"||n.data==="$~"}function zd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function u5(n,i){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=i;else if(n.data!=="$?"||s.readyState!=="loading")i();else{var l=function(){i(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function fn(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return n}var Ud=null;function O0(n){n=n.nextSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(i===0)return fn(n.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}n=n.nextSibling}return null}function D0(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return n;i--}else s!=="/$"&&s!=="/&"||i++}n=n.previousSibling}return null}function L0(n,i,s){switch(i=dl(s),n){case"html":if(n=i.documentElement,!n)throw Error(r(452));return n;case"head":if(n=i.head,!n)throw Error(r(453));return n;case"body":if(n=i.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function gs(n){for(var i=n.attributes;i.length;)n.removeAttributeNode(i[0]);Pc(n)}var pn=new Map,M0=new Set;function hl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var si=ee.d;ee.d={f:d5,r:h5,D:f5,C:p5,L:m5,m:g5,X:v5,S:y5,M:b5};function d5(){var n=si.f(),i=il();return n||i}function h5(n){var i=Ta(n);i!==null&&i.tag===5&&i.type==="form"?Qm(i):si.r(n)}var ar=typeof document>"u"?null:document;function z0(n,i,s){var l=ar;if(l&&typeof i=="string"&&i){var f=sn(i);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),M0.has(f)||(M0.add(f),n={rel:n,crossOrigin:s,href:i},l.querySelector(f)===null&&(i=l.createElement("link"),jt(i,"link",n),gt(i),l.head.appendChild(i)))}}function f5(n){si.D(n),z0("dns-prefetch",n,null)}function p5(n,i){si.C(n,i),z0("preconnect",n,i)}function m5(n,i,s){si.L(n,i,s);var l=ar;if(l&&n&&i){var f='link[rel="preload"][as="'+sn(i)+'"]';i==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+sn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+sn(s.imageSizes)+'"]')):f+='[href="'+sn(n)+'"]';var m=f;switch(i){case"style":m=rr(n);break;case"script":m=sr(n)}pn.has(m)||(n=v({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:n,as:i},s),pn.set(m,n),l.querySelector(f)!==null||i==="style"&&l.querySelector(ys(m))||i==="script"&&l.querySelector(vs(m))||(i=l.createElement("link"),jt(i,"link",n),gt(i),l.head.appendChild(i)))}}function g5(n,i){si.m(n,i);var s=ar;if(s&&n){var l=i&&typeof i.as=="string"?i.as:"script",f='link[rel="modulepreload"][as="'+sn(l)+'"][href="'+sn(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=sr(n)}if(!pn.has(m)&&(n=v({rel:"modulepreload",href:n},i),pn.set(m,n),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(vs(m)))return}l=s.createElement("link"),jt(l,"link",n),gt(l),s.head.appendChild(l)}}}function y5(n,i,s){si.S(n,i,s);var l=ar;if(l&&n){var f=Ea(l).hoistableStyles,m=rr(n);i=i||"default";var b=f.get(m);if(!b){var k={loading:0,preload:null};if(b=l.querySelector(ys(m)))k.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":i},s),(s=pn.get(m))&&Bd(n,s);var A=b=l.createElement("link");gt(A),jt(A,"link",n),A._p=new Promise(function(B,I){A.onload=B,A.onerror=I}),A.addEventListener("load",function(){k.loading|=1}),A.addEventListener("error",function(){k.loading|=2}),k.loading|=4,fl(b,i,l)}b={type:"stylesheet",instance:b,count:1,state:k},f.set(m,b)}}}function v5(n,i){si.X(n,i);var s=ar;if(s&&n){var l=Ea(s).hoistableScripts,f=sr(n),m=l.get(f);m||(m=s.querySelector(vs(f)),m||(n=v({src:n,async:!0},i),(i=pn.get(f))&&Pd(n,i),m=s.createElement("script"),gt(m),jt(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function b5(n,i){si.M(n,i);var s=ar;if(s&&n){var l=Ea(s).hoistableScripts,f=sr(n),m=l.get(f);m||(m=s.querySelector(vs(f)),m||(n=v({src:n,async:!0,type:"module"},i),(i=pn.get(f))&&Pd(n,i),m=s.createElement("script"),gt(m),jt(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function U0(n,i,s,l){var f=(f=Se.current)?hl(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=rr(s.href),s=Ea(f).hoistableStyles,l=s.get(i),l||(l={type:"style",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=rr(s.href);var m=Ea(f).hoistableStyles,b=m.get(n);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=f.querySelector(ys(n)))&&!m._p&&(b.instance=m,b.state.loading=5),pn.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},pn.set(n,s),m||x5(f,n,s,b.state))),i&&l===null)throw Error(r(528,""));return b}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=sr(s),s=Ea(f).hoistableScripts,l=s.get(i),l||(l={type:"script",instance:null,count:0,state:null},s.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function rr(n){return'href="'+sn(n)+'"'}function ys(n){return'link[rel="stylesheet"]['+n+"]"}function B0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function x5(n,i,s,l){n.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=n.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),jt(i,"link",s),gt(i),n.head.appendChild(i))}function sr(n){return'[src="'+sn(n)+'"]'}function vs(n){return"script[async]"+n}function P0(n,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var l=n.querySelector('style[data-href~="'+sn(s.href)+'"]');if(l)return i.instance=l,gt(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),gt(l),jt(l,"style",f),fl(l,s.precedence,n),i.instance=l;case"stylesheet":f=rr(s.href);var m=n.querySelector(ys(f));if(m)return i.state.loading|=4,i.instance=m,gt(m),m;l=B0(s),(f=pn.get(f))&&Bd(l,f),m=(n.ownerDocument||n).createElement("link"),gt(m);var b=m;return b._p=new Promise(function(k,A){b.onload=k,b.onerror=A}),jt(m,"link",l),i.state.loading|=4,fl(m,s.precedence,n),i.instance=m;case"script":return m=sr(s.src),(f=n.querySelector(vs(m)))?(i.instance=f,gt(f),f):(l=s,(f=pn.get(m))&&(l=v({},s),Pd(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),gt(f),jt(f,"link",l),n.head.appendChild(f),i.instance=f);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,fl(l,s.precedence,n));return i.instance}function fl(n,i,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,b=0;b<l.length;b++){var k=l[b];if(k.dataset.precedence===i)m=k;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(n,i.firstChild))}function Bd(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.title==null&&(n.title=i.title)}function Pd(n,i){n.crossOrigin==null&&(n.crossOrigin=i.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=i.referrerPolicy),n.integrity==null&&(n.integrity=i.integrity)}var pl=null;function V0(n,i,s){if(pl===null){var l=new Map,f=pl=new Map;f.set(s,l)}else f=pl,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var m=s[f];if(!(m[Lr]||m[bt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(i)||"";b=n+b;var k=l.get(b);k?k.push(m):l.set(b,[m])}}return l}function H0(n,i,s){n=n.ownerDocument||n,n.head.insertBefore(s,i==="title"?n.querySelector("head > title"):null)}function w5(n,i,s){if(s===1||i.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return n=i.disabled,typeof i.precedence=="string"&&n==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function $0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function S5(n,i,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=rr(l.href),m=i.querySelector(ys(f));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(n.count++,n=ml.bind(n),i.then(n,n)),s.state.loading|=4,s.instance=m,gt(m);return}m=i.ownerDocument||i,l=B0(l),(f=pn.get(f))&&Bd(l,f),m=m.createElement("link"),gt(m);var b=m;b._p=new Promise(function(k,A){b.onload=k,b.onerror=A}),jt(m,"link",l),s.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=ml.bind(n),i.addEventListener("load",s),i.addEventListener("error",s))}}var Vd=0;function j5(n,i){return n.stylesheets&&n.count===0&&yl(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var l=setTimeout(function(){if(n.stylesheets&&yl(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+i);0<n.imgBytes&&Vd===0&&(Vd=62500*i5());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&yl(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Vd?50:800)+i);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function ml(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)yl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var gl=null;function yl(n,i){n.stylesheets=null,n.unsuspend!==null&&(n.count++,gl=new Map,i.forEach(k5,n),gl=null,ml.call(n))}function k5(n,i){if(!(i.state.loading&4)){var s=gl.get(n);if(s)var l=s.get(null);else{s=new Map,gl.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=i.instance,b=f.getAttribute("data-precedence"),m=s.get(b)||l,m===l&&s.set(null,f),s.set(b,f),this.count++,l=ml.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),i.state.loading|=4}}var bs={$$typeof:C,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function _5(n,i,s,l,f,m,b,k,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mc(0),this.hiddenUpdates=Mc(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function I0(n,i,s,l,f,m,b,k,A,B,I,K){return n=new _5(n,i,s,b,A,B,I,K,k),i=1,m===!0&&(i|=24),m=Yt(3,null,null,i),n.current=m,m.stateNode=n,i=bu(),i.refCount++,n.pooledCache=i,i.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:i},ju(m),n}function q0(n){return n?(n=Ua,n):Ua}function F0(n,i,s,l,f,m){f=q0(f),l.context===null?l.context=f:l.pendingContext=f,l=Si(i),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=ji(n,l,i),s!==null&&(Vt(s,n,i),Jr(s,n,i))}function G0(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<i?s:i}}function Hd(n,i){G0(n,i),(n=n.alternate)&&G0(n,i)}function K0(n){if(n.tag===13||n.tag===31){var i=Qi(n,67108864);i!==null&&Vt(i,n,67108864),Hd(n,67108864)}}function Y0(n){if(n.tag===13||n.tag===31){var i=Zt();i=zc(i);var s=Qi(n,i);s!==null&&Vt(s,n,i),Hd(n,i)}}var vl=!0;function T5(n,i,s,l){var f=z.T;z.T=null;var m=ee.p;try{ee.p=2,$d(n,i,s,l)}finally{ee.p=m,z.T=f}}function E5(n,i,s,l){var f=z.T;z.T=null;var m=ee.p;try{ee.p=8,$d(n,i,s,l)}finally{ee.p=m,z.T=f}}function $d(n,i,s,l){if(vl){var f=Id(l);if(f===null)Ad(n,i,l,bl,s),X0(n,l);else if(C5(f,n,i,s,l))l.stopPropagation();else if(X0(n,l),i&4&&-1<A5.indexOf(n)){for(;f!==null;){var m=Ta(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Ki(m.pendingLanes);if(b!==0){var k=m;for(k.pendingLanes|=2,k.entangledLanes|=2;b;){var A=1<<31-Gt(b);k.entanglements[1]|=A,b&=~A}Ln(m),(Ue&6)===0&&(tl=qt()+500,fs(0))}}break;case 31:case 13:k=Qi(m,2),k!==null&&Vt(k,m,2),il(),Hd(m,2)}if(m=Id(l),m===null&&Ad(n,i,l,bl,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else Ad(n,i,l,null,s)}}function Id(n){return n=Fc(n),qd(n)}var bl=null;function qd(n){if(bl=null,n=_a(n),n!==null){var i=c(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=d(i),n!==null)return n;n=null}else if(s===31){if(n=h(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}return bl=n,null}function W0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fw()){case ip:return 2;case ap:return 8;case oo:case pw:return 32;case rp:return 268435456;default:return 32}default:return 32}}var Fd=!1,Li=null,Mi=null,zi=null,xs=new Map,ws=new Map,Ui=[],A5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function X0(n,i){switch(n){case"focusin":case"focusout":Li=null;break;case"dragenter":case"dragleave":Mi=null;break;case"mouseover":case"mouseout":zi=null;break;case"pointerover":case"pointerout":xs.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ws.delete(i.pointerId)}}function Ss(n,i,s,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ta(i),i!==null&&K0(i)),n):(n.eventSystemFlags|=l,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function C5(n,i,s,l,f){switch(i){case"focusin":return Li=Ss(Li,n,i,s,l,f),!0;case"dragenter":return Mi=Ss(Mi,n,i,s,l,f),!0;case"mouseover":return zi=Ss(zi,n,i,s,l,f),!0;case"pointerover":var m=f.pointerId;return xs.set(m,Ss(xs.get(m)||null,n,i,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,ws.set(m,Ss(ws.get(m)||null,n,i,s,l,f)),!0}return!1}function J0(n){var i=_a(n.target);if(i!==null){var s=c(i);if(s!==null){if(i=s.tag,i===13){if(i=d(s),i!==null){n.blockedOn=i,dp(n.priority,function(){Y0(s)});return}}else if(i===31){if(i=h(s),i!==null){n.blockedOn=i,dp(n.priority,function(){Y0(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function xl(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var s=Id(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);qc=l,s.target.dispatchEvent(l),qc=null}else return i=Ta(s),i!==null&&K0(i),n.blockedOn=s,!1;i.shift()}return!0}function Q0(n,i,s){xl(n)&&s.delete(i)}function R5(){Fd=!1,Li!==null&&xl(Li)&&(Li=null),Mi!==null&&xl(Mi)&&(Mi=null),zi!==null&&xl(zi)&&(zi=null),xs.forEach(Q0),ws.forEach(Q0)}function wl(n,i){n.blockedOn===i&&(n.blockedOn=null,Fd||(Fd=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,R5)))}var Sl=null;function Z0(n){Sl!==n&&(Sl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){Sl===n&&(Sl=null);for(var i=0;i<n.length;i+=3){var s=n[i],l=n[i+1],f=n[i+2];if(typeof l!="function"){if(qd(l||s)===null)continue;break}var m=Ta(s);m!==null&&(n.splice(i,3),i-=3,Iu(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function or(n){function i(A){return wl(A,n)}Li!==null&&wl(Li,n),Mi!==null&&wl(Mi,n),zi!==null&&wl(zi,n),xs.forEach(i),ws.forEach(i);for(var s=0;s<Ui.length;s++){var l=Ui[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<Ui.length&&(s=Ui[0],s.blockedOn===null);)J0(s),s.blockedOn===null&&Ui.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],b=f[Lt]||null;if(typeof m=="function")b||Z0(s);else if(b){var k=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Lt]||null)k=b.formAction;else if(qd(f)!==null)continue}else k=b.action;typeof k=="function"?s[l+1]=k:(s.splice(l,3),l-=3),Z0(s)}}}function ey(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function i(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),f!==null&&(f(),f=null)}}}function Gd(n){this._internalRoot=n}jl.prototype.render=Gd.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(r(409));var s=i.current,l=Zt();F0(s,l,n,i,null,null)},jl.prototype.unmount=Gd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;F0(n.current,2,null,n,null,null),il(),i[ka]=null}};function jl(n){this._internalRoot=n}jl.prototype.unstable_scheduleHydration=function(n){if(n){var i=up();n={blockedOn:null,target:n,priority:i};for(var s=0;s<Ui.length&&i!==0&&i<Ui[s].priority;s++);Ui.splice(s,0,n),s===0&&J0(n)}};var ty=e.version;if(ty!=="19.2.7")throw Error(r(527,ty,"19.2.7"));ee.findDOMNode=function(n){var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=g(i),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var N5={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{Nr=kl.inject(N5),Ft=kl}catch{}}return ks.createRoot=function(n,i){if(!o(n))throw Error(r(299));var s=!1,l="",f=lg,m=cg,b=ug;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(b=i.onRecoverableError)),i=I0(n,1,!1,null,null,s,l,null,f,m,b,ey),n[ka]=i.current,Ed(n),new Gd(i)},ks.hydrateRoot=function(n,i,s){if(!o(n))throw Error(r(299));var l=!1,f="",m=lg,b=cg,k=ug,A=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(k=s.onRecoverableError),s.formState!==void 0&&(A=s.formState)),i=I0(n,1,!0,i,s??null,l,f,A,m,b,k,ey),i.context=q0(null),s=i.current,l=Zt(),l=zc(l),f=Si(l),f.callback=null,ji(s,f,l),s=l,i.current.lanes=s,Dr(i,s),Ln(i),n[ka]=i.current,Ed(n),new jl(i)},ks.version="19.2.7",ks}var dy;function H5(){if(dy)return Wd.exports;dy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Wd.exports=V5(),Wd.exports}var $5=H5();const I5=Db($5);/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var gf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Lb=/^[\\/]{2}/;function q5(t,e){return e+t.replace(/\\/g,"/")}var hy="popstate";function fy(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function F5(t={}){function e(r,o){var g;let c=(g=o.state)==null?void 0:g.masked,{pathname:d,search:h,hash:p}=c||r.location;return Rh("",{pathname:d,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function a(r,o){return typeof o=="string"?o:$s(o)}return K5(e,a,null,t)}function Xe(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Cn(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function G5(){return Math.random().toString(36).substring(2,10)}function py(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Rh(t,e,a=null,r,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?kr(e):e,state:a,key:e&&e.key||r||G5(),mask:o}}function $s({pathname:t="/",search:e="",hash:a=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function kr(t){let e={};if(t){let a=t.indexOf("#");a>=0&&(e.hash=t.substring(a),t=t.substring(0,a));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function K5(t,e,a,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,d=o.history,h="POP",p=null,g=y();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function y(){return(d.state||{idx:null}).idx}function v(){h="POP";let E=y(),_=E==null?null:E-g;g=E,p&&p({action:h,location:T.location,delta:_})}function x(E,_){h="PUSH";let N=fy(E)?E:Rh(T.location,E,_);g=y()+1;let C=py(N,g),V=T.createHref(N.mask||N);try{d.pushState(C,"",V)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;o.location.assign(V)}c&&p&&p({action:h,location:T.location,delta:1})}function w(E,_){h="REPLACE";let N=fy(E)?E:Rh(T.location,E,_);g=y();let C=py(N,g),V=T.createHref(N.mask||N);d.replaceState(C,"",V),c&&p&&p({action:h,location:T.location,delta:0})}function S(E){return Y5(o,E)}let T={get action(){return h},get location(){return t(o,d)},listen(E){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(hy,v),p=E,()=>{o.removeEventListener(hy,v),p=null}},createHref(E){return e(o,E)},createURL:S,encodeLocation(E){let _=S(E);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:x,replace:w,go(E){return d.go(E)}};return T}function Y5(t,e,a=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),Xe(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:$s(e);return o=o.replace(/ $/,"%20"),!a&&Lb.test(o)&&(o=r+o),new URL(o,r)}function Mb(t,e,a="/"){return W5(t,e,a,!1)}function W5(t,e,a,r,o){let c=typeof e=="string"?kr(e):e,d=fi(c.pathname||"/",a);if(d==null)return null;let h=X5(t),p=null,g=oS(d);for(let y=0;p==null&&y<h.length;++y)p=sS(h[y],g,r);return p}function X5(t){let e=zb(t);return J5(e),e}function zb(t,e=[],a=[],r="",o=!1){let c=(d,h,p=o,g)=>{let y={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&p)return;Xe(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let v=En([r,y.relativePath]),x=a.concat(y);d.children&&d.children.length>0&&(Xe(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),zb(d.children,e,x,v,p)),!(d.path==null&&!d.index)&&e.push({path:v,score:aS(v,d.index),routesMeta:x.map((w,S)=>{let[T,E]=Pb(w.relativePath,w.caseSensitive,S===x.length-1);return{...w,matcher:T,compiledParams:E}})})};return t.forEach((d,h)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))c(d,h);else for(let g of Ub(d.path))c(d,h,!0,g)}),e}function Ub(t){let e=t.split("/");if(e.length===0)return[];let[a,...r]=e,o=a.endsWith("?"),c=a.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let d=Ub(r.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),o&&h.push(...d),h.map(p=>t.startsWith("/")&&p===""?"/":p)}function J5(t){t.sort((e,a)=>e.score!==a.score?a.score-e.score:rS(e.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var Q5=/^:[\w-]+$/,Z5=3,eS=2,tS=1,nS=10,iS=-2,my=t=>t==="*";function aS(t,e){let a=t.split("/"),r=a.length;return a.some(my)&&(r+=iS),e&&(r+=eS),a.filter(o=>!my(o)).reduce((o,c)=>o+(Q5.test(c)?Z5:c===""?tS:nS),r)}function rS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function sS(t,e,a=!1){let{routesMeta:r}=t,o={},c="/",d=[];for(let h=0;h<r.length;++h){let p=r[h],g=h===r.length-1,y=c==="/"?e:e.slice(c.length)||"/",v={path:p.relativePath,caseSensitive:p.caseSensitive,end:g},x=p.matcher&&p.compiledParams?Bb(v,y,p.matcher,p.compiledParams):Jl(v,y),w=p.route;if(!x&&g&&a&&!r[r.length-1].route.index&&(x=Jl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:En([c,x.pathname]),pathnameBase:uS(En([c,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(c=En([c,x.pathnameBase]))}return d}function Jl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,r]=Pb(t.path,t.caseSensitive,t.end);return Bb(t,e,a,r)}function Bb(t,e,a,r){let o=e.match(a);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((g,{paramName:y,isOptional:v},x)=>{if(y==="*"){let S=h[x]||"";d=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const w=h[x];return v&&!w?g[y]=void 0:g[y]=(w||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:d,pattern:t}}function Pb(t,e=!1,a=!0){Cn(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p,g,y)=>{if(r.push({paramName:h,isOptional:p!=null}),p){let v=y.charAt(g+d.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function oS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Cn(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function fi(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let a=e.endsWith("/")?e.length-1:e.length,r=t.charAt(a);return r&&r!=="/"?null:t.slice(a)||"/"}function lS(t,e="/"){let{pathname:a,search:r="",hash:o=""}=typeof t=="string"?kr(t):t,c;return a?(a=Vb(a),a.startsWith("/")?c=gy(a.substring(1),"/"):c=gy(a,e)):c=e,{pathname:c,search:dS(r),hash:hS(o)}}function gy(t,e){let a=Ql(e).split("/");return t.split("/").forEach(o=>{o===".."?a.length>1&&a.pop():o!=="."&&a.push(o)}),a.length>1?a.join("/"):"/"}function Zd(t,e,a,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cS(t){return t.filter((e,a)=>a===0||e.route.path&&e.route.path.length>0)}function yf(t){let e=cS(t);return e.map((a,r)=>r===e.length-1?a.pathname:a.pathnameBase)}function vc(t,e,a,r=!1){let o;typeof t=="string"?o=kr(t):(o={...t},Xe(!o.pathname||!o.pathname.includes("?"),Zd("?","pathname","search",o)),Xe(!o.pathname||!o.pathname.includes("#"),Zd("#","pathname","hash",o)),Xe(!o.search||!o.search.includes("#"),Zd("#","search","hash",o)));let c=t===""||o.pathname==="",d=c?"/":o.pathname,h;if(d==null)h=a;else{let v=e.length-1;if(!r&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}h=v>=0?e[v]:"/"}let p=lS(o,h),g=d&&d!=="/"&&d.endsWith("/"),y=(c||d===".")&&a.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var Vb=t=>t.replace(/[\\/]{2,}/g,"/"),En=t=>Vb(t.join("/")),Ql=t=>t.replace(/\/+$/,""),uS=t=>Ql(t).replace(/^\/*/,"/"),dS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,fS=class{constructor(t,e,a,r=!1){this.status=t,this.statusText=e||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function pS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function mS(t){let e=t.map(a=>a.route.path).filter(Boolean);return En(e)||"/"}var Hb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $b(t,e){let a=t;if(typeof a!="string"||!gf.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,o=!1;if(Hb)try{let c=new URL(window.location.href),d=Lb.test(a)?new URL(q5(a,c.protocol)):new URL(a),h=fi(d.pathname,e);d.origin===c.origin&&h!=null?a=h+d.search+d.hash:o=!0}catch{Cn(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ib=["POST","PUT","PATCH","DELETE"];new Set(Ib);var gS=["GET",...Ib];new Set(gS);var yS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function vS(t){try{return yS.includes(new URL(t).protocol)}catch{return!1}}var _r=j.createContext(null);_r.displayName="DataRouter";var bc=j.createContext(null);bc.displayName="DataRouterState";var qb=j.createContext(!1);function bS(){return j.useContext(qb)}var Fb=j.createContext({isTransitioning:!1});Fb.displayName="ViewTransition";var xS=j.createContext(new Map);xS.displayName="Fetchers";var wS=j.createContext(null);wS.displayName="Await";var an=j.createContext(null);an.displayName="Navigation";var eo=j.createContext(null);eo.displayName="Location";var Rn=j.createContext({outlet:null,matches:[],isDataRoute:!1});Rn.displayName="Route";var vf=j.createContext(null);vf.displayName="RouteError";var Gb="REACT_ROUTER_ERROR",SS="REDIRECT",jS="ROUTE_ERROR_RESPONSE";function kS(t){if(t.startsWith(`${Gb}:${SS}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function _S(t){if(t.startsWith(`${Gb}:${jS}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new fS(e.status,e.statusText,e.data)}catch{}}function TS(t,{relative:e}={}){Xe(Tr(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=j.useContext(an),{hash:o,pathname:c,search:d}=to(t,{relative:e}),h=c;return a!=="/"&&(h=c==="/"?a:En([a,c])),r.createHref({pathname:h,search:d,hash:o})}function Tr(){return j.useContext(eo)!=null}function Dt(){return Xe(Tr(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(eo).location}var Kb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yb(t){j.useContext(an).static||j.useLayoutEffect(t)}function It(){let{isDataRoute:t}=j.useContext(Rn);return t?VS():ES()}function ES(){Xe(Tr(),"useNavigate() may be used only in the context of a <Router> component.");let t=j.useContext(_r),{basename:e,navigator:a}=j.useContext(an),{matches:r}=j.useContext(Rn),{pathname:o}=Dt(),c=JSON.stringify(yf(r)),d=j.useRef(!1);return Yb(()=>{d.current=!0}),j.useCallback((p,g={})=>{if(Cn(d.current,Kb),!d.current)return;if(typeof p=="number"){a.go(p);return}let y=vc(p,JSON.parse(c),o,g.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:En([e,y.pathname])),(g.replace?a.replace:a.push)(y,g.state,g)},[e,a,c,o,t])}j.createContext(null);function AS(){let{matches:t}=j.useContext(Rn),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function to(t,{relative:e}={}){let{matches:a}=j.useContext(Rn),{pathname:r}=Dt(),o=JSON.stringify(yf(a));return j.useMemo(()=>vc(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function CS(t,e){return Wb(t,e)}function Wb(t,e,a){var E;Xe(Tr(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=j.useContext(an),{matches:o}=j.useContext(Rn),c=o[o.length-1],d=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",g=c&&c.route;{let _=g&&g.path||"";Jb(h,!g||_.endsWith("*")||_.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${_}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${_}"> to <Route path="${_==="/"?"*":`${_}/*`}">.`)}let y=Dt(),v;if(e){let _=typeof e=="string"?kr(e):e;Xe(p==="/"||((E=_.pathname)==null?void 0:E.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${_.pathname}" was given in the \`location\` prop.`),v=_}else v=y;let x=v.pathname||"/",w=x;if(p!=="/"){let _=p.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(_.length).join("/")}let S=a&&a.state.matches.length?a.state.matches.map(_=>Object.assign(_,{route:a.manifest[_.route.id]||_.route})):Mb(t,{pathname:w});Cn(g||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),Cn(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let T=LS(S&&S.map(_=>Object.assign({},_,{params:Object.assign({},d,_.params),pathname:En([p,r.encodeLocation?r.encodeLocation(_.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?p:En([p,r.encodeLocation?r.encodeLocation(_.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:_.pathnameBase])})),o,a);return e&&T?j.createElement(eo.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},T):T}function RS(){let t=PS(),e=pS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:c},"ErrorBoundary")," or"," ",j.createElement("code",{style:c},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),a?j.createElement("pre",{style:o},a):null,d)}var NS=j.createElement(RS,null),Xb=class extends j.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=_S(t.digest);a&&(t=a)}let e=t!==void 0?j.createElement(Rn.Provider,{value:this.props.routeContext},j.createElement(vf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?j.createElement(OS,{error:t},e):e}};Xb.contextType=qb;var eh=new WeakMap;function OS({children:t,error:e}){let{basename:a}=j.useContext(an);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=kS(e.digest);if(r){let o=eh.get(e);if(o)throw o;let c=$b(r.location,a),d=c.absoluteURL||c.to;if(vS(d))throw new Error("Invalid redirect location");if(Hb&&!eh.get(e))if(c.isExternal||r.reloadDocument)window.location.href=d;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw eh.set(e,h),h}return j.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d}`})}}return t}function DS({routeContext:t,match:e,children:a}){let r=j.useContext(_r);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Rn.Provider,{value:t},a)}function LS(t,e=[],a){let r=a==null?void 0:a.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,c=r==null?void 0:r.errors;if(c!=null){let y=o.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);Xe(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let d=!1,h=-1;if(a&&r){d=r.renderFallback;for(let y=0;y<o.length;y++){let v=o[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=y),v.route.id){let{loaderData:x,errors:w}=r,S=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!w||w[v.route.id]===void 0);if(v.route.lazy||S){a.isStatic&&(d=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let p=a==null?void 0:a.onError,g=r&&p?(y,v)=>{var x,w;p(y,{location:r.location,params:((w=(x=r.matches)==null?void 0:x[0])==null?void 0:w.params)??{},pattern:mS(r.matches),errorInfo:v})}:void 0;return o.reduceRight((y,v,x)=>{let w,S=!1,T=null,E=null;r&&(w=c&&v.route.id?c[v.route.id]:void 0,T=v.route.errorElement||NS,d&&(h<0&&x===0?(Jb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):h===x&&(S=!0,E=v.route.hydrateFallbackElement||null)));let _=e.concat(o.slice(0,x+1)),N=()=>{let C;return w?C=T:S?C=E:v.route.Component?C=j.createElement(v.route.Component,null):v.route.element?C=v.route.element:C=y,j.createElement(DS,{match:v,routeContext:{outlet:y,matches:_,isDataRoute:r!=null},children:C})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?j.createElement(Xb,{location:r.location,revalidation:r.revalidation,component:T,error:w,children:N(),routeContext:{outlet:null,matches:_,isDataRoute:!0},onError:g}):N()},null)}function bf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function MS(t){let e=j.useContext(_r);return Xe(e,bf(t)),e}function zS(t){let e=j.useContext(bc);return Xe(e,bf(t)),e}function US(t){let e=j.useContext(Rn);return Xe(e,bf(t)),e}function xf(t){let e=US(t),a=e.matches[e.matches.length-1];return Xe(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function BS(){return xf("useRouteId")}function PS(){var r;let t=j.useContext(vf),e=zS("useRouteError"),a=xf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[a]}function VS(){let{router:t}=MS("useNavigate"),e=xf("useNavigate"),a=j.useRef(!1);return Yb(()=>{a.current=!0}),j.useCallback(async(o,c={})=>{Cn(a.current,Kb),a.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:e,...c}))},[t,e])}var yy={};function Jb(t,e,a){!e&&!yy[t]&&(yy[t]=!0,Cn(!1,a))}j.memo(HS);function HS({routes:t,manifest:e,future:a,state:r,isStatic:o,onError:c}){return Wb(t,void 0,{manifest:e,state:r,isStatic:o,onError:c})}function $S({to:t,replace:e,state:a,relative:r}){Xe(Tr(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=j.useContext(an);Cn(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=j.useContext(Rn),{pathname:d}=Dt(),h=It(),p=vc(t,yf(c),d,r==="path"),g=JSON.stringify(p);return j.useEffect(()=>{h(JSON.parse(g),{replace:e,state:a,relative:r})},[h,g,r,e,a]),null}function Ct(t){Xe(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IS({basename:t="/",children:e=null,location:a,navigationType:r="POP",navigator:o,static:c=!1,useTransitions:d}){Xe(!Tr(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),p=j.useMemo(()=>({basename:h,navigator:o,static:c,useTransitions:d,future:{}}),[h,o,c,d]);typeof a=="string"&&(a=kr(a));let{pathname:g="/",search:y="",hash:v="",state:x=null,key:w="default",mask:S}=a,T=j.useMemo(()=>{let E=fi(g,h);return E==null?null:{location:{pathname:E,search:y,hash:v,state:x,key:w,mask:S},navigationType:r}},[h,g,y,v,x,w,r,S]);return Cn(T!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),T==null?null:j.createElement(an.Provider,{value:p},j.createElement(eo.Provider,{children:e,value:T}))}function qS({children:t,location:e}){return CS(Nh(t),e)}function Nh(t,e=[]){let a=[];return j.Children.forEach(t,(r,o)=>{if(!j.isValidElement(r))return;let c=[...e,o];if(r.type===j.Fragment){a.push.apply(a,Nh(r.props.children,c));return}Xe(r.type===Ct,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Xe(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Nh(r.props.children,c)),a.push(d)}),a}var Vl="get",Hl="application/x-www-form-urlencoded";function xc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function FS(t){return xc(t)&&t.tagName.toLowerCase()==="button"}function GS(t){return xc(t)&&t.tagName.toLowerCase()==="form"}function KS(t){return xc(t)&&t.tagName.toLowerCase()==="input"}function YS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function WS(t,e){return t.button===0&&(!e||e==="_self")&&!YS(t)}var _l=null;function XS(){if(_l===null)try{new FormData(document.createElement("form"),0),_l=!1}catch{_l=!0}return _l}var JS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function th(t){return t!=null&&!JS.has(t)?(Cn(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Hl}"`),null):t}function QS(t,e){let a,r,o,c,d;if(GS(t)){let h=t.getAttribute("action");r=h?fi(h,e):null,a=t.getAttribute("method")||Vl,o=th(t.getAttribute("enctype"))||Hl,c=new FormData(t)}else if(FS(t)||KS(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||h.getAttribute("action");if(r=p?fi(p,e):null,a=t.getAttribute("formmethod")||h.getAttribute("method")||Vl,o=th(t.getAttribute("formenctype"))||th(h.getAttribute("enctype"))||Hl,c=new FormData(h,t),!XS()){let{name:g,type:y,value:v}=t;if(y==="image"){let x=g?`${g}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else g&&c.append(g,v)}}else{if(xc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=Vl,r=null,o=Hl,d=t}return c&&o==="text/plain"&&(d=c,c=void 0),{action:r,method:a.toLowerCase(),encType:o,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function wf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qb(t,e,a,r){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&fi(o.pathname,e)==="/"?o.pathname=`${Ql(e)}/_root.${r}`:o.pathname=`${Ql(o.pathname)}.${r}`,o}async function ZS(t,e){if(t.id in e)return e[t.id];try{let a=await import(t.module);return e[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ej(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function tj(t,e,a){let r=await Promise.all(t.map(async o=>{let c=e.routes[o.route.id];if(c){let d=await ZS(c,a);return d.links?d.links():[]}return[]}));return rj(r.flat(1).filter(ej).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function vy(t,e,a,r,o,c){let d=(p,g)=>a[g]?p.route.id!==a[g].route.id:!0,h=(p,g)=>{var y;return a[g].pathname!==p.pathname||((y=a[g].route.path)==null?void 0:y.endsWith("*"))&&a[g].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,g)=>d(p,g)||h(p,g)):c==="data"?e.filter((p,g)=>{var v;let y=r.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,g)||h(p,g))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=a[0])==null?void 0:v.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function nj(t,e,{includeHydrateFallback:a}={}){return ij(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),a&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function ij(t){return[...new Set(t)]}function aj(t){let e={},a=Object.keys(t).sort();for(let r of a)e[r]=t[r];return e}function rj(t,e){let a=new Set;return new Set(e),t.reduce((r,o)=>{let c=JSON.stringify(aj(o));return a.has(c)||(a.add(c),r.push({key:c,link:o})),r},[])}function Sf(){let t=j.useContext(_r);return wf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function sj(){let t=j.useContext(bc);return wf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var jf=j.createContext(void 0);jf.displayName="FrameworkContext";function wc(){let t=j.useContext(jf);return wf(t,"You must render this element inside a <HydratedRouter> element"),t}function oj(t,e){let a=j.useContext(jf),[r,o]=j.useState(!1),[c,d]=j.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=e,x=j.useRef(null);j.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let T=_=>{_.forEach(N=>{d(N.isIntersecting)})},E=new IntersectionObserver(T,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[t]),j.useEffect(()=>{if(r){let T=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(T)}}},[r]);let w=()=>{o(!0)},S=()=>{o(!1),d(!1)};return a?t!=="intent"?[c,x,{}]:[c,x,{onFocus:_s(h,w),onBlur:_s(p,S),onMouseEnter:_s(g,w),onMouseLeave:_s(y,S),onTouchStart:_s(v,w)}]:[!1,x,{}]}function _s(t,e){return a=>{t&&t(a),a.defaultPrevented||e(a)}}function lj({page:t,...e}){let a=bS(),{nonce:r}=wc(),{router:o}=Sf(),c=j.useMemo(()=>Mb(o.routes,t,o.basename),[o.routes,t,o.basename]);return c?(e.nonce==null&&r&&(e={...e,nonce:r}),a?j.createElement(uj,{page:t,matches:c,...e}):j.createElement(dj,{page:t,matches:c,...e})):null}function cj(t){let{manifest:e,routeModules:a}=wc(),[r,o]=j.useState([]);return j.useEffect(()=>{let c=!1;return tj(t,e,a).then(d=>{c||o(d)}),()=>{c=!0}},[t,e,a]),r}function uj({page:t,matches:e,...a}){let r=Dt(),{future:o}=wc(),{basename:c}=Sf(),d=j.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let h=Qb(t,c,o.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,g=[];for(let y of e)typeof y.route.shouldRevalidate=="function"?p=!0:g.push(y.route.id);return p&&g.length>0&&h.searchParams.set("_routes",g.join(",")),[h.pathname+h.search]},[c,o.v8_trailingSlashAwareDataRequests,t,r,e]);return j.createElement(j.Fragment,null,d.map(h=>j.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...a})))}function dj({page:t,matches:e,...a}){let r=Dt(),{future:o,manifest:c,routeModules:d}=wc(),{basename:h}=Sf(),{loaderData:p,matches:g}=sj(),y=j.useMemo(()=>vy(t,e,g,c,r,"data"),[t,e,g,c,r]),v=j.useMemo(()=>vy(t,e,g,c,r,"assets"),[t,e,g,c,r]),x=j.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let T=new Set,E=!1;if(e.forEach(N=>{var V;let C=c.routes[N.route.id];!C||!C.hasLoader||(!y.some(Y=>Y.route.id===N.route.id)&&N.route.id in p&&((V=d[N.route.id])!=null&&V.shouldRevalidate)||C.hasClientLoader?E=!0:T.add(N.route.id))}),T.size===0)return[];let _=Qb(t,h,o.v8_trailingSlashAwareDataRequests,"data");return E&&T.size>0&&_.searchParams.set("_routes",e.filter(N=>T.has(N.route.id)).map(N=>N.route.id).join(",")),[_.pathname+_.search]},[h,o.v8_trailingSlashAwareDataRequests,p,r,c,y,e,t,d]),w=j.useMemo(()=>nj(v,c),[v,c]),S=cj(v);return j.createElement(j.Fragment,null,x.map(T=>j.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...a})),w.map(T=>j.createElement("link",{key:T,rel:"modulepreload",href:T,...a})),S.map(({key:T,link:E})=>j.createElement("link",{key:T,nonce:a.nonce,...E,crossOrigin:E.crossOrigin??a.crossOrigin})))}function hj(...t){return e=>{t.forEach(a=>{typeof a=="function"?a(e):a!=null&&(a.current=e)})}}var fj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fj&&(window.__reactRouterVersion="7.18.0")}catch{}function pj({basename:t,children:e,useTransitions:a,window:r}){let o=j.useRef();o.current==null&&(o.current=F5({window:r,v5Compat:!0}));let c=o.current,[d,h]=j.useState({action:c.action,location:c.location}),p=j.useCallback(g=>{a===!1?h(g):j.startTransition(()=>h(g))},[a]);return j.useLayoutEffect(()=>c.listen(p),[c,p]),j.createElement(IS,{basename:t,children:e,location:d.location,navigationType:d.action,navigator:c,useTransitions:a})}var kf=j.forwardRef(function({onClick:e,discover:a="render",prefetch:r="none",relative:o,reloadDocument:c,replace:d,mask:h,state:p,target:g,to:y,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:w,...S},T){let{basename:E,navigator:_,useTransitions:N}=j.useContext(an),C=typeof y=="string"&&gf.test(y),V=$b(y,E);y=V.to;let Y=TS(y,{relative:o}),J=Dt(),M=null;if(h){let pe=vc(h,[],J.mask?J.mask.pathname:"/",!0);E!=="/"&&(pe.pathname=pe.pathname==="/"?E:En([E,pe.pathname])),M=_.createHref(pe)}let[H,Q,Z]=oj(r,S),ye=vj(y,{replace:d,mask:h,state:p,target:g,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:w,useTransitions:N});function he(pe){e&&e(pe),pe.defaultPrevented||ye(pe)}let Ae=!(V.isExternal||c),Le=j.createElement("a",{...S,...Z,href:(Ae?M:void 0)||V.absoluteURL||Y,onClick:Ae?he:e,ref:hj(T,Q),target:g,"data-discover":!C&&a==="render"?"true":void 0});return H&&!C?j.createElement(j.Fragment,null,Le,j.createElement(lj,{page:Y})):Le});kf.displayName="Link";var mj=j.forwardRef(function({"aria-current":e="page",caseSensitive:a=!1,className:r="",end:o=!1,style:c,to:d,viewTransition:h,children:p,...g},y){let v=to(d,{relative:g.relative}),x=Dt(),w=j.useContext(bc),{navigator:S,basename:T}=j.useContext(an),E=w!=null&&jj(v)&&h===!0,_=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,N=x.pathname,C=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;a||(N=N.toLowerCase(),C=C?C.toLowerCase():null,_=_.toLowerCase()),C&&T&&(C=fi(C,T)||C);const V=_!=="/"&&_.endsWith("/")?_.length-1:_.length;let Y=N===_||!o&&N.startsWith(_)&&N.charAt(V)==="/",J=C!=null&&(C===_||!o&&C.startsWith(_)&&C.charAt(_.length)==="/"),M={isActive:Y,isPending:J,isTransitioning:E},H=Y?e:void 0,Q;typeof r=="function"?Q=r(M):Q=[r,Y?"active":null,J?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let Z=typeof c=="function"?c(M):c;return j.createElement(kf,{...g,"aria-current":H,className:Q,ref:y,style:Z,to:d,viewTransition:h},typeof p=="function"?p(M):p)});mj.displayName="NavLink";var gj=j.forwardRef(({discover:t="render",fetcherKey:e,navigate:a,reloadDocument:r,replace:o,state:c,method:d=Vl,action:h,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x,...w},S)=>{let{useTransitions:T}=j.useContext(an),E=wj(),_=Sj(h,{relative:g}),N=d.toLowerCase()==="get"?"get":"post",C=typeof h=="string"&&gf.test(h),V=Y=>{if(p&&p(Y),Y.defaultPrevented)return;Y.preventDefault();let J=Y.nativeEvent.submitter,M=(J==null?void 0:J.getAttribute("formmethod"))||d,H=()=>E(J||Y.currentTarget,{fetcherKey:e,method:M,navigate:a,replace:o,state:c,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x});T&&a!==!1?j.startTransition(()=>H()):H()};return j.createElement("form",{ref:S,method:N,action:_,onSubmit:r?p:V,...w,"data-discover":!C&&t==="render"?"true":void 0})});gj.displayName="Form";function yj(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zb(t){let e=j.useContext(_r);return Xe(e,yj(t)),e}function vj(t,{target:e,replace:a,mask:r,state:o,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p,useTransitions:g}={}){let y=It(),v=Dt(),x=to(t,{relative:d});return j.useCallback(w=>{if(WS(w,e)){w.preventDefault();let S=a!==void 0?a:$s(v)===$s(x),T=()=>y(t,{replace:S,mask:r,state:o,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p});g?j.startTransition(()=>T()):T()}},[v,y,x,a,r,o,e,t,c,d,h,p,g])}var bj=0,xj=()=>`__${String(++bj)}__`;function wj(){let{router:t}=Zb("useSubmit"),{basename:e}=j.useContext(an),a=BS(),r=t.fetch,o=t.navigate;return j.useCallback(async(c,d={})=>{let{action:h,method:p,encType:g,formData:y,body:v}=QS(c,e);if(d.navigate===!1){let x=d.fetcherKey||xj();await r(x,a,d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||g,flushSync:d.flushSync})}else await o(d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||g,replace:d.replace,state:d.state,fromRouteId:a,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,o,e,a])}function Sj(t,{relative:e}={}){let{basename:a}=j.useContext(an),r=j.useContext(Rn);Xe(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...to(t||".",{relative:e})},d=Dt();if(t==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let y=h.toString();c.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(c.pathname=c.pathname==="/"?a:En([a,c.pathname])),$s(c)}function jj(t,{relative:e}={}){let a=j.useContext(Fb);Xe(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Zb("useViewTransitionState"),o=to(t,{relative:e});if(!a.isTransitioning)return!1;let c=fi(a.currentLocation.pathname,r)||a.currentLocation.pathname,d=fi(a.nextLocation.pathname,r)||a.nextLocation.pathname;return Jl(o.pathname,d)!=null||Jl(o.pathname,c)!=null}function _f(){const t=It(),a=Dt().pathname==="/",[r,o]=j.useState(!1),[c,d]=j.useState(!1),[h,p]=j.useState("");j.useEffect(()=>{const y=()=>o(window.scrollY>40);return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]),j.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(y=>{y.addEventListener("click",function(v){v.preventDefault();const x=document.querySelector(this.getAttribute("href"));x&&x.scrollIntoView({behavior:"smooth"})})})},[]);const g=()=>d(!1);return j.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[c]),j.useEffect(()=>{const y=v=>{v.key==="Escape"&&g()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:r?"scrolled":"",children:[u.jsx("div",{className:"logo",children:u.jsx("h1",{children:"FrameX"})}),u.jsx("ul",{children:a?u.jsxs(u.Fragment,{children:[u.jsx("li",{children:u.jsx("a",{href:"#features",onClick:g,children:"Features"})}),u.jsx("li",{children:u.jsx("a",{href:"#community",onClick:g,children:"Community"})}),u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:g,children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"#pricing",onClick:g,children:"Pricing"})})]}):u.jsx("li",{children:u.jsx(kf,{to:"/",className:"back-home-link",onClick:g,children:"← Back to Home"})})}),u.jsxs("div",{className:"nav-right",children:[a&&u.jsxs("div",{className:"auth-buttons",children:[u.jsx("button",{className:"login",onClick:()=>t("/login"),children:"Log In"}),u.jsx("button",{className:"get-started",onClick:()=>t("/login"),children:"Get Started"})]}),u.jsx("button",{className:"menu-toggle",onClick:()=>d(!c),"aria-label":"Toggle menu",children:u.jsx("i",{className:`menu-toggle-icon ${c?"fas fa-times":"fas fa-bars"}`})})]}),u.jsx("style",{children:`
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
      `})]})}function kj(){const t=It(),[e,a]=j.useState(!1);return j.useEffect(()=>{document.title="FrameX | Share Your World in Frames"},[]),j.useEffect(()=>{const r=document.querySelectorAll(".reveal"),o=new IntersectionObserver(g=>{g.forEach(y=>{y.isIntersecting&&(y.target.classList.add("visible"),o.unobserve(y.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});r.forEach(g=>o.observe(g)),document.querySelectorAll(".feature-card").forEach(g=>{g.addEventListener("mousemove",y=>{const v=g.getBoundingClientRect(),x=(y.clientX-v.left)/v.width*100,w=(y.clientY-v.top)/v.height*100;g.style.setProperty("--mouse-x",x+"%"),g.style.setProperty("--mouse-y",w+"%")})});const d=document.querySelectorAll(".hero-stat"),h=g=>{const y=(g.clientX/window.innerWidth-.5)*6,v=(g.clientY/window.innerHeight-.5)*6;d.forEach((x,w)=>{const S=w===0?1:-.8;x.style.transform=`translate(${y*S}px, ${v*S}px)`})};window.addEventListener("mousemove",h);const p=document.querySelector(".hero-media");if(p){const g=new IntersectionObserver(([y])=>{y.isIntersecting&&(y.target.classList.add("card-entered"),g.unobserve(y.target))},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return g.observe(p),()=>{o.disconnect(),window.removeEventListener("mousemove",h),g.disconnect()}}return()=>{o.disconnect(),window.removeEventListener("mousemove",h)}},[]),u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(_f,{}),u.jsxs("section",{className:"hero",id:"hero",children:[u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-badge",children:[u.jsx("span",{children:"New"}),"Now available on iOS & Android"]}),u.jsxs("h1",{children:["Share Your World",u.jsx("br",{}),"in ",u.jsx("span",{className:"gradient-text",children:"Every Frame"})]}),u.jsx("p",{children:"Discover, create, and connect with short videos and photos. Join millions of creators sharing their stories through the lens."}),u.jsxs("div",{className:"cta-buttons",children:[u.jsxs("a",{href:"/login",className:"btn-primary",onClick:r=>{r.preventDefault(),t("/login")},children:["Get Started ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsxs("a",{href:"#download",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-mobile-alt"})," Download App"]}),u.jsxs("a",{href:"#community",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-play"})," Explore Community"]})]})]}),u.jsxs("div",{className:"hero-media",children:[u.jsxs("div",{className:"glass-card-stack",children:[u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-video"})}),u.jsx("h3",{children:"Short Videos"}),u.jsx("p",{children:"Create and watch short, engaging videos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration glass-card-decoration--2"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-camera"})}),u.jsx("h3",{children:"Photo Sharing"}),u.jsx("p",{children:"Share moments with high-quality photos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-users"})}),u.jsx("h3",{children:"Community"}),u.jsx("p",{children:"Connect with creators worldwide"})]})]}),u.jsxs("div",{className:"hero-stat hero-stat--1",children:[u.jsx("strong",{children:"10M+"}),u.jsx("span",{children:"Active Users"})]}),u.jsxs("div",{className:"hero-stat hero-stat--2",children:[u.jsx("strong",{children:"4.8★"}),u.jsx("span",{children:"App Rating"})]})]})]}),u.jsxs("section",{id:"features",className:"features",children:[u.jsxs("div",{className:"features-header reveal",children:[u.jsx("span",{className:"section-label",children:"Features"}),u.jsx("h2",{children:"Built for Creators"}),u.jsx("p",{children:"Everything you need to capture, edit, and share your perspective with the world."})]}),u.jsx("div",{className:"feature-cards",children:[{icon:"fa-video",title:"Short Videos",desc:"Create and watch short, engaging videos on any topic. Our smart editor makes it effortless."},{icon:"fa-camera",title:"Photo Sharing",desc:"Share moments with high-quality photos and professional-grade filters built right in."},{icon:"fa-users",title:"Community",desc:"Connect with creators and friends from around the world. Your audience is waiting."}].map((r,o)=>u.jsxs("div",{className:`feature-card reveal reveal-delay-${o+1}`,children:[u.jsx("div",{className:"feature-icon",children:u.jsx("i",{className:`fas ${r.icon}`})}),u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.desc})]},r.title))})]}),!e&&u.jsx("div",{className:"browser-bar",children:u.jsxs("div",{className:"browser-bar-content",children:[u.jsxs("div",{className:"browser-bar-text",children:[u.jsx("span",{className:"browser-bar-icon",children:u.jsx("i",{className:"fas fa-mobile-alt"})}),u.jsx("span",{children:"Continue in browser for the full experience"})]}),u.jsxs("button",{className:"browser-bar-btn",children:["Continue ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsx("button",{className:"browser-bar-close",onClick:()=>a(!0),"aria-label":"Dismiss",children:u.jsx("i",{className:"fas fa-times"})})]})}),u.jsxs("section",{id:"community",className:"community",children:[u.jsx("h2",{className:"reveal",children:"Join Our Community"}),u.jsx("p",{className:"reveal reveal-delay-1",children:"Follow us on social media and be part of the FrameX movement."}),u.jsx("div",{className:"social-links reveal reveal-delay-2",children:["instagram","twitter","tiktok","facebook","youtube"].map(r=>u.jsx("a",{href:"#",className:"social-link","aria-label":r.charAt(0).toUpperCase()+r.slice(1),children:u.jsx("i",{className:`fab fa-${r}`})},r))})]}),u.jsx("section",{id:"download",className:"download",children:u.jsxs("div",{className:"download-glass reveal",children:[u.jsx("span",{className:"section-label",children:"Get the App"}),u.jsx("h2",{children:"Download FrameX Now"}),u.jsx("p",{children:"Available on iOS and Android. Start sharing your story today."}),u.jsxs("div",{className:"download-buttons",children:[u.jsxs("a",{href:"#",className:"app-store",children:[u.jsx("i",{className:"fab fa-apple fa-lg"})," App Store"]}),u.jsxs("a",{href:"#",className:"google-play",children:[u.jsx("i",{className:"fab fa-google-play fa-lg"})," Google Play"]})]})]})}),u.jsx(Tf,{}),u.jsx("style",{children:`
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
      `})]})}function _j(){j.useEffect(()=>{const a=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(r=>a.observe(r)),()=>a.disconnect()},[]);const t=[{name:"Alex Chen",role:"CEO & Founder",icon:"fa-user-tie"},{name:"Sarah Mitchell",role:"CTO",icon:"fa-laptop-code"},{name:"David Park",role:"Head of Design",icon:"fa-paint-brush"},{name:"Emily Rodriguez",role:"VP of Engineering",icon:"fa-cogs"}],e=[{icon:"fa-bolt",title:"Lightning Fast",desc:"Optimized for speed with sub-second response times across all platforms."},{icon:"fa-shield-alt",title:"Secure by Design",desc:"End-to-end encryption with enterprise-grade security protocols."},{icon:"fa-layer-group",title:"Modular Architecture",desc:"Plugin-based system that grows with your creative workflow."},{icon:"fa-robot",title:"AI-Powered",desc:"Intelligent suggestions and automation that learn from your style."}];return u.jsxs(u.Fragment,{children:[u.jsx(_f,{}),u.jsx("div",{className:"aurora-bg"}),u.jsxs("main",{className:"about-page",children:[u.jsxs("section",{className:"about-hero",children:[u.jsx("div",{className:"about-hero-bg-glow"}),u.jsxs("div",{className:"about-hero-content",children:[u.jsx("span",{className:"section-label reveal",children:"About FrameX"}),u.jsxs("h1",{className:"about-hero-title reveal reveal-delay-1",children:["Redefining ",u.jsx("span",{className:"lemon-text",children:"Creative"})," Boundaries"]}),u.jsx("p",{className:"about-hero-sub reveal reveal-delay-2",children:"We believe great design should be effortless. FrameX brings together cutting-edge AI, real-time collaboration, and intuitive tools to empower creators worldwide."}),u.jsxs("div",{className:"about-hero-stats reveal reveal-delay-3",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"50K+"}),u.jsx("span",{className:"stat-label",children:"Active Users"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"99.9%"}),u.jsx("span",{className:"stat-label",children:"Uptime"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"120+"}),u.jsx("span",{className:"stat-label",children:"Countries"})]})]})]})]}),u.jsx("section",{className:"about-section",id:"our-story",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Our Story"}),u.jsx("h2",{className:"section-title reveal",children:"How FrameX Began"}),u.jsxs("div",{className:"story-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"story-icon",children:u.jsx("i",{className:"fas fa-quote-left"})}),u.jsx("p",{className:"story-text",children:"FrameX was born in 2023 from a simple observation: creative tools were either powerful but complex, or simple but limiting. Our founders—engineers, designers, and artists—set out to build something different: a platform that combines professional-grade capabilities with an intuitive, joyful experience."}),u.jsx("p",{className:"story-text",children:"What started as a small project in a co-working space has grown into a global community of creators. Today, FrameX powers workflows for freelance designers, creative agencies, and enterprise teams across 120+ countries."}),u.jsxs("div",{className:"story-meta",children:[u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-calendar"})," Founded 2023"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-users"})," Team of 48"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-globe"})," Global Reach"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"mission-vision",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Mission & Vision"}),u.jsx("h2",{className:"section-title reveal",children:"What Drives Us"}),u.jsxs("div",{className:"mv-grid",children:[u.jsxs("div",{className:"mv-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-bullseye"})}),u.jsx("h3",{children:"Our Mission"}),u.jsx("p",{children:"To democratize creative technology by building tools that are powerful enough for professionals yet accessible enough for beginners. We remove barriers, not features."})]}),u.jsxs("div",{className:"mv-card glass reveal reveal-delay-2",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-eye"})}),u.jsx("h3",{children:"Our Vision"}),u.jsx("p",{children:"A world where anyone can bring their creative vision to life without wrestling with software. We envision FrameX as the invisible bridge between imagination and creation."})]})]})]})}),u.jsx("section",{className:"about-section",id:"what-makes-us-different",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Why FrameX"}),u.jsx("h2",{className:"section-title reveal",children:"What Makes Us Different"}),u.jsx("div",{className:"features-grid",children:e.map((a,r)=>u.jsxs("div",{className:`feature-card glass reveal reveal-delay-${r+1}`,children:[u.jsx("div",{className:"feature-card-icon",children:u.jsx("i",{className:`fas ${a.icon}`})}),u.jsx("h3",{children:a.title}),u.jsx("p",{children:a.desc})]},a.title))})]})}),u.jsx("section",{className:"about-section",id:"team",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Leadership"}),u.jsx("h2",{className:"section-title reveal",children:"Meet the Team"}),u.jsx("div",{className:"team-grid",children:t.map((a,r)=>u.jsxs("div",{className:`team-card glass reveal reveal-delay-${r+1}`,children:[u.jsx("div",{className:"team-avatar",children:u.jsx("i",{className:`fas ${a.icon}`})}),u.jsx("h3",{children:a.name}),u.jsx("p",{className:"team-role",children:a.role})]},a.name))})]})}),u.jsx("section",{className:"about-section",id:"info",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Snapshot"}),u.jsx("h2",{className:"section-title reveal",children:"Startup at a Glance"}),u.jsx("div",{className:"info-card glass reveal reveal-delay-1",children:u.jsxs("div",{className:"info-grid",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{className:"info-label",children:"Founded"}),u.jsx("span",{className:"info-value",children:"2023"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-map-pin"}),u.jsx("span",{className:"info-label",children:"Headquarters"}),u.jsx("span",{className:"info-value",children:"San Francisco, CA"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-user-friends"}),u.jsx("span",{className:"info-label",children:"Team Size"}),u.jsx("span",{className:"info-value",children:"48 Members"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-trophy"}),u.jsx("span",{className:"info-label",children:"Funding"}),u.jsx("span",{className:"info-value",children:"Series A"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-rocket"}),u.jsx("span",{className:"info-label",children:"Stage"}),u.jsx("span",{className:"info-value",children:"Growth"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-handshake"}),u.jsx("span",{className:"info-label",children:"Partners"}),u.jsx("span",{className:"info-value",children:"20+"})]})]})})]})}),u.jsx("section",{className:"about-section",id:"contact",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Contact"}),u.jsx("h2",{className:"section-title reveal",children:"Get In Touch"}),u.jsxs("div",{className:"contact-content glass reveal reveal-delay-1",children:[u.jsx("p",{className:"contact-text",children:"Have a question, partnership idea, or just want to say hello? We'd love to hear from you."}),u.jsxs("div",{className:"contact-links",children:[u.jsxs("a",{href:"mailto:hello@framex.com",className:"contact-link",children:[u.jsx("i",{className:"fas fa-envelope"})," hello@framex.com"]}),u.jsxs("a",{href:"tel:+1234567890",className:"contact-link",children:[u.jsx("i",{className:"fas fa-phone"})," +1 (234) 567-890"]}),u.jsxs("a",{href:"#",className:"contact-link",children:[u.jsx("i",{className:"fas fa-map-marker-alt"})," San Francisco, CA"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"social",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Community"}),u.jsx("h2",{className:"section-title reveal",children:"Follow Our Journey"}),u.jsxs("div",{className:"social-grid reveal reveal-delay-1",children:[u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-twitter"})," Twitter / X"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-linkedin-in"})," LinkedIn"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-discord"})," Discord"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-youtube"})," YouTube"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-instagram"})," Instagram"]})]})]})})]}),u.jsx(Tf,{}),u.jsx("style",{children:`
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
      `})]})}function Sc(t,e){var a={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(a[r[o]]=t[r[o]]);return a}function Tj(t,e,a,r){function o(c){return c instanceof a?c:new a(function(d){d(c)})}return new(a||(a=Promise))(function(c,d){function h(y){try{g(r.next(y))}catch(v){d(v)}}function p(y){try{g(r.throw(y))}catch(v){d(v)}}function g(y){y.done?c(y.value):o(y.value).then(h,p)}g((r=r.apply(t,e||[])).next())})}const Ej=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class Ef extends Error{constructor(e,a="FunctionsError",r){super(e),this.name=a,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Aj extends Ef{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class by extends Ef{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class xy extends Ef{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Oh;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Oh||(Oh={}));class Cj{constructor(e,{headers:a={},customFetch:r,region:o=Oh.Any}={}){this.url=e,this.headers=a,this.region=o,this.fetch=Ej(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Tj(this,arguments,void 0,function*(a,r={}){var o;let c,d;try{const{headers:h,method:p,body:g,signal:y,timeout:v}=r;let x={},{region:w}=r;w||(w=this.region);const S=new URL(`${this.url}/${a}`);w&&w!=="any"&&(x["x-region"]=w,S.searchParams.set("forceFunctionRegion",w));let T;g&&(h&&!Object.prototype.hasOwnProperty.call(h,"Content-Type")||!h)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(x["Content-Type"]="application/octet-stream",T=g):typeof g=="string"?(x["Content-Type"]="text/plain",T=g):typeof FormData<"u"&&g instanceof FormData?T=g:(x["Content-Type"]="application/json",T=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?T=JSON.stringify(g):T=g;let E=y;v&&(d=new AbortController,c=setTimeout(()=>d.abort(),v),y?(E=d.signal,y.addEventListener("abort",()=>d.abort())):E=d.signal);const _=yield this.fetch(S.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},x),this.headers),h),body:T,signal:E}).catch(Y=>{throw new Aj(Y)}),N=_.headers.get("x-relay-error");if(N&&N==="true")throw new by(_);if(!_.ok)throw new xy(_);let C=((o=_.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),V;return C==="application/json"?V=yield _.json():C==="application/octet-stream"||C==="application/pdf"?V=yield _.blob():C==="text/event-stream"?V=_:C==="multipart/form-data"?V=yield _.formData():V=yield _.text(),{data:V,error:null,response:_}}catch(h){return{data:null,error:h,response:h instanceof xy||h instanceof by?h.context:void 0}}finally{c&&clearTimeout(c)}})}}const ex=3,wy=t=>Math.min(1e3*2**t,3e4),Rj=[520,503],tx=["GET","HEAD","OPTIONS"];var Sy=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function jy(t,e){return new Promise(a=>{if(e!=null&&e.aborted){a();return}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",o),a()},t);function o(){clearTimeout(r),a()}e==null||e.addEventListener("abort",o)})}function Nj(t,e,a,r){return!(!r||a>=ex||!tx.includes(t)||!Rj.includes(e))}var Oj=class{constructor(t){var e,a,r,o,c;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(a=t.isMaybeSingle)!==null&&a!==void 0?a:!1,this.shouldStripNulls=(r=t.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(o=t.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(c=t.retry)!==null&&c!==void 0?c:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var a=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const d=this.headers.get("Accept");d==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!d||d==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let c=(async()=>{let d=0;for(;;){const g={};a.headers.forEach((v,x)=>{g[x]=v}),d>0&&(g["X-Retry-Count"]=String(d));let y;try{y=await r(a.url.toString(),{method:a.method,headers:g,body:JSON.stringify(a.body,(v,x)=>typeof x=="bigint"?x.toString():x),signal:a.signal})}catch(v){if((v==null?void 0:v.name)==="AbortError"||(v==null?void 0:v.code)==="ABORT_ERR"||!tx.includes(a.method))throw v;if(a.retryEnabled&&d<ex){const x=wy(d);d++,await jy(x,a.signal);continue}throw v}if(Nj(a.method,y.status,d,a.retryEnabled)){var h,p;const v=(h=(p=y.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&h!==void 0?h:null,x=v!==null?Math.max(0,parseInt(v,10)||0)*1e3:wy(d);await y.text(),d++,await jy(x,a.signal);continue}return await a.processResponse(y)}})();return this.shouldThrowOnError||(c=c.catch(d=>{var h;let p="",g="",y="";const v=d==null?void 0:d.cause;if(v){var x,w,S,T;const N=(x=v==null?void 0:v.message)!==null&&x!==void 0?x:"",C=(w=v==null?void 0:v.code)!==null&&w!==void 0?w:"";p=`${(S=d==null?void 0:d.name)!==null&&S!==void 0?S:"FetchError"}: ${d==null?void 0:d.message}`,p+=`

Caused by: ${(T=v==null?void 0:v.name)!==null&&T!==void 0?T:"Error"}: ${N}`,C&&(p+=` (${C})`),v!=null&&v.stack&&(p+=`
${v.stack}`)}else{var E;p=(E=d==null?void 0:d.stack)!==null&&E!==void 0?E:""}const _=this.url.toString().length;return(d==null?void 0:d.name)==="AbortError"||(d==null?void 0:d.code)==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",_>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${_} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((v==null?void 0:v.name)==="HeadersOverflowError"||(v==null?void 0:v.code)==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",_>this.urlLengthLimit&&(g+=`. Your request URL is ${_} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(h=d==null?void 0:d.name)!==null&&h!==void 0?h:"FetchError"}: ${d==null?void 0:d.message}`,details:p,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),c.then(t,e)}async processResponse(t){var e=this;let a=null,r=null,o=null,c=t.status,d=t.statusText;if(t.ok){var h,p;if(e.method!=="HEAD"){var g;const x=await t.text();if(x!=="")if(e.headers.get("Accept")==="text/csv")r=x;else if(e.headers.get("Accept")&&(!((g=e.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))r=x;else try{r=JSON.parse(x)}catch{if(a={message:x},r=null,e.shouldThrowOnError)throw new Sy({message:x,details:"",hint:"",code:""})}}const y=(h=e.headers.get("Prefer"))===null||h===void 0?void 0:h.match(/count=(exact|planned|estimated)/),v=(p=t.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");y&&v&&v.length>1&&(o=parseInt(v[1])),e.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(a={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,o=null,c=406,d="Not Acceptable"):r.length===1?r=r[0]:r=null)}else{const y=await t.text();try{a=JSON.parse(y),Array.isArray(a)&&t.status===404&&(r=[],a=null,c=200,d="OK")}catch{t.status===404&&y===""?(c=204,d="No Content"):a={message:y}}if(a&&e.shouldThrowOnError)throw new Sy(a)}return{success:a===null,error:a,data:r,count:o,status:c,statusText:d}}returns(){return this}overrideTypes(){return this}},Dj=class extends Oj{throwOnError(){return super.throwOnError()}select(t){let e=!1;const a=(t??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",a),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:a,foreignTable:r,referencedTable:o=r}={}){const c=o?`${o}.order`:"order",d=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${d?`${d},`:""}${t}.${e?"asc":"desc"}${a===void 0?"":a?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:a=e}={}){const r=typeof a>"u"?"limit":`${a}.limit`;return this.url.searchParams.set(r,`${t}`),this}range(t,e,{foreignTable:a,referencedTable:r=a}={}){const o=typeof r>"u"?"offset":`${r}.offset`,c=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(o,`${t}`),this.url.searchParams.set(c,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:a=!1,buffers:r=!1,wal:o=!1,format:c="text"}={}){var d;const h=[t?"analyze":null,e?"verbose":null,a?"settings":null,r?"buffers":null,o?"wal":null].filter(Boolean).join("|"),p=(d=this.headers.get("Accept"))!==null&&d!==void 0?d:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${p}"; options=${h};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const ky=new RegExp("[,()]");var fr=class extends Dj{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const a=Array.from(new Set(e)).map(r=>typeof r=="string"&&ky.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`in.(${a})`),this}notIn(t,e){const a=Array.from(new Set(e)).map(r=>typeof r=="string"&&ky.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`not.in.(${a})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:a,type:r}={}){let o="";r==="plain"?o="pl":r==="phrase"?o="ph":r==="websearch"&&(o="w");const c=a===void 0?"":`(${a})`;return this.url.searchParams.append(t,`${o}fts${c}.${e}`),this}match(t){return Object.entries(t).filter(([e,a])=>a!==void 0).forEach(([e,a])=>{this.url.searchParams.append(e,`eq.${a}`)}),this}not(t,e,a){return this.url.searchParams.append(t,`not.${e}.${a}`),this}or(t,{foreignTable:e,referencedTable:a=e}={}){const r=a?`${a}.or`:"or";return this.url.searchParams.append(r,`(${t})`),this}filter(t,e,a){return this.url.searchParams.append(t,`${e}.${a}`),this}},Lj=class{constructor(t,{headers:e={},schema:a,fetch:r,urlLengthLimit:o=8e3,retry:c}){this.url=t,this.headers=new Headers(e),this.schema=a,this.fetch=r,this.urlLengthLimit=o,this.retry=c}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:a=!1,count:r}=e??{},o=a?"HEAD":"GET";let c=!1;const d=(t??"*").split("").map(g=>/\s/.test(g)&&!c?"":(g==='"'&&(c=!c),g)).join(""),{url:h,headers:p}=this.cloneRequestState();return h.searchParams.set("select",d),r&&p.append("Prefer",`count=${r}`),new fr({method:o,url:h,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:a=!0}={}){var r;const o="POST",{url:c,headers:d}=this.cloneRequestState();if(e&&d.append("Prefer",`count=${e}`),a||d.append("Prefer","missing=default"),Array.isArray(t)){const h=t.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(h.length>0){const p=[...new Set(h)].map(g=>`"${g}"`);c.searchParams.set("columns",p.join(","))}}return new fr({method:o,url:c,headers:d,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:a=!1,count:r,defaultToNull:o=!0}={}){var c;const d="POST",{url:h,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${a?"ignore":"merge"}-duplicates`),e!==void 0&&h.searchParams.set("on_conflict",e),r&&p.append("Prefer",`count=${r}`),o||p.append("Prefer","missing=default"),Array.isArray(t)){const g=t.reduce((y,v)=>y.concat(Object.keys(v)),[]);if(g.length>0){const y=[...new Set(g)].map(v=>`"${v}"`);h.searchParams.set("columns",y.join(","))}}return new fr({method:d,url:h,headers:p,schema:this.schema,body:t,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var a;const r="PATCH",{url:o,headers:c}=this.cloneRequestState();return e&&c.append("Prefer",`count=${e}`),new fr({method:r,url:o,headers:c,schema:this.schema,body:t,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const a="DELETE",{url:r,headers:o}=this.cloneRequestState();return t&&o.append("Prefer",`count=${t}`),new fr({method:a,url:r,headers:o,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Is(t){"@babel/helpers - typeof";return Is=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Is(t)}function Mj(t,e){if(Is(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(Is(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zj(t){var e=Mj(t,"string");return Is(e)=="symbol"?e:e+""}function Uj(t,e,a){return(e=zj(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function _y(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function Tl(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?_y(Object(a),!0).forEach(function(r){Uj(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):_y(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var Bj=class nx{constructor(e,{headers:a={},schema:r,fetch:o,timeout:c,urlLengthLimit:d=8e3,retry:h}={}){this.url=e,this.headers=new Headers(a),this.schemaName=r,this.urlLengthLimit=d;const p=o??globalThis.fetch;c!==void 0&&c>0?this.fetch=(g,y)=>{const v=new AbortController,x=setTimeout(()=>v.abort(),c),w=y==null?void 0:y.signal;if(w){if(w.aborted)return clearTimeout(x),p(g,y);const S=()=>{clearTimeout(x),v.abort()};return w.addEventListener("abort",S,{once:!0}),p(g,Tl(Tl({},y),{},{signal:v.signal})).finally(()=>{clearTimeout(x),w.removeEventListener("abort",S)})}return p(g,Tl(Tl({},y),{},{signal:v.signal})).finally(()=>clearTimeout(x))}:this.fetch=p,this.retry=h}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Lj(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new nx(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,a={},{head:r=!1,get:o=!1,count:c}={}){var d;let h;const p=new URL(`${this.url}/rpc/${e}`);let g;const y=w=>w!==null&&typeof w=="object"&&(!Array.isArray(w)||w.some(y)),v=r&&Object.values(a).some(y);v?(h="POST",g=a):r||o?(h=r?"HEAD":"GET",Object.entries(a).filter(([w,S])=>S!==void 0).map(([w,S])=>[w,Array.isArray(S)?`{${S.join(",")}}`:`${S}`]).forEach(([w,S])=>{p.searchParams.append(w,S)})):(h="POST",g=a);const x=new Headers(this.headers);return v?x.set("Prefer",c?`count=${c},return=minimal`:"return=minimal"):c&&x.set("Prefer",`count=${c}`),new fr({method:h,url:p,headers:x,schema:this.schemaName,body:g,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Pj{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const a=globalThis;if(typeof globalThis<"u"&&typeof a.WebSocket<"u")return{type:"native",wsConstructor:a.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof a.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&a.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const o=globalThis.process;if(o){const c=o.versions;if(c&&c.node){const d=c.node,h=parseInt(d.replace(/^v/,"").split(".")[0]);return h>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${h} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${h} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let a=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(a+=`

Suggested solution: ${e.workaround}`),new Error(a)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Vj="2.108.2",Hj=`realtime-js/${Vj}`,$j="1.0.0",ix="2.0.0",Ij=ix,qj=1e4,Fj=100,Vi={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ax={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Dh={connecting:"connecting",closing:"closing",closed:"closed"};class Gj{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,a){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return a(this._binaryEncodeUserBroadcastPush(e));let r=[e.join_ref,e.ref,e.topic,e.event,e.payload];return a(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var a;return this._isArrayBuffer((a=e.payload)===null||a===void 0?void 0:a.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var a,r;const o=(r=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(e){var a,r;const o=(r=(a=e.payload)===null||a===void 0?void 0:a.payload)!==null&&r!==void 0?r:{},d=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,d)}_encodeUserBroadcastPush(e,a,r){var o,c;const d=e.topic,h=(o=e.ref)!==null&&o!==void 0?o:"",p=(c=e.join_ref)!==null&&c!==void 0?c:"",g=e.payload.event,y=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},v=Object.keys(y).length===0?"":JSON.stringify(y);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`ref length ${h.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`topic length ${d.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(v.length>255)throw new Error(`metadata length ${v.length} exceeds maximum of 255`);const x=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+h.length+d.length+g.length+v.length,w=new ArrayBuffer(this.HEADER_LENGTH+x);let S=new DataView(w),T=0;S.setUint8(T++,this.KINDS.userBroadcastPush),S.setUint8(T++,p.length),S.setUint8(T++,h.length),S.setUint8(T++,d.length),S.setUint8(T++,g.length),S.setUint8(T++,v.length),S.setUint8(T++,a),Array.from(p,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(h,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(d,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(g,_=>S.setUint8(T++,_.charCodeAt(0))),Array.from(v,_=>S.setUint8(T++,_.charCodeAt(0)));var E=new Uint8Array(w.byteLength+r.byteLength);return E.set(new Uint8Array(w),0),E.set(new Uint8Array(r),w.byteLength),E.buffer}decode(e,a){if(this._isArrayBuffer(e)){let r=this._binaryDecode(e);return a(r)}if(typeof e=="string"){const r=JSON.parse(e),[o,c,d,h,p]=r;return a({join_ref:o,ref:c,topic:d,event:h,payload:p})}return a({})}_binaryDecode(e){const a=new DataView(e),r=a.getUint8(0),o=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,a,o)}}_decodeUserBroadcast(e,a,r){const o=a.getUint8(1),c=a.getUint8(2),d=a.getUint8(3),h=a.getUint8(4);let p=this.HEADER_LENGTH+4;const g=r.decode(e.slice(p,p+o));p=p+o;const y=r.decode(e.slice(p,p+c));p=p+c;const v=r.decode(e.slice(p,p+d));p=p+d;const x=e.slice(p,e.byteLength),w=h===this.JSON_ENCODING?JSON.parse(r.decode(x)):x,S={type:this.BROADCAST_EVENT,event:y,payload:w};return d>0&&(S.meta=JSON.parse(v)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:S}}_isArrayBuffer(e){var a;return e instanceof ArrayBuffer||((a=e==null?void 0:e.constructor)===null||a===void 0?void 0:a.name)==="ArrayBuffer"}_pick(e,a){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([r])=>a.includes(r)))}}var Ge;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(Ge||(Ge={}));const Ty=(t,e,a={})=>{var r;const o=(r=a.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((c,d)=>(c[d]=Kj(d,t,e,o),c),{}):{}},Kj=(t,e,a,r)=>{const o=e.find(h=>h.name===t),c=o==null?void 0:o.type,d=a[t];return c&&!r.includes(c)?rx(c,d):Lh(d)},rx=(t,e)=>{if(t.charAt(0)==="_"){const a=t.slice(1,t.length);return Jj(e,a)}switch(t){case Ge.bool:return Yj(e);case Ge.float4:case Ge.float8:case Ge.int2:case Ge.int4:case Ge.int8:case Ge.numeric:case Ge.oid:return Wj(e);case Ge.json:case Ge.jsonb:return Xj(e);case Ge.timestamp:return Qj(e);case Ge.abstime:case Ge.date:case Ge.daterange:case Ge.int4range:case Ge.int8range:case Ge.money:case Ge.reltime:case Ge.text:case Ge.time:case Ge.timestamptz:case Ge.timetz:case Ge.tsrange:case Ge.tstzrange:return Lh(e);default:return Lh(e)}},Lh=t=>t,Yj=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Wj=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Xj=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Jj=(t,e)=>{if(typeof t!="string")return t;const a=t.length-1,r=t[a];if(t[0]==="{"&&r==="}"){let c;const d=t.slice(1,a);try{c=JSON.parse("["+d+"]")}catch{c=d?d.split(","):[]}return c.map(h=>rx(e,h))}return t},Qj=t=>typeof t=="string"?t.replace(" ","T"):t,sx=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Ms=t=>typeof t=="function"?t:function(){return t},Zj=typeof self<"u"?self:null,pr=typeof window<"u"?window:null,Un=Zj||pr||globalThis,ek="2.0.0",tk=1e4,nk=1e3,Bn={connecting:0,open:1,closing:2,closed:3},Ht={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ui={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Mh={longpoll:"longpoll",websocket:"websocket"},ik={complete:4},zh="base64url.bearer.phx.",El=class{constructor(t,e,a,r){this.channel=t,this.event=e,this.payload=a||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:a}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},ox=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},ak=class{constructor(t,e,a){this.state=Ht.closed,this.topic=t,this.params=Ms(e||{}),this.socket=a,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new El(this,ui.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new ox(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Ht.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=Ht.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Ht.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=Ht.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new El(this,ui.leave,Ms({}),this.timeout).send(),this.state=Ht.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(ui.reply,(r,o)=>{this.trigger(this.replyEventName(o),r)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Ht.closed,this.bindings=[]}onClose(t){this.on(ui.close,t)}onError(t){return this.on(ui.error,e=>t(e))}on(t,e){let a=this.bindingRef++;return this.bindings.push({event:t,ref:a,callback:e}),a}off(t,e){this.bindings=this.bindings.filter(a=>!(a.event===t&&(typeof e>"u"||e===a.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,a=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new El(this,t,function(){return e},a);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Ht.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(ui.close,"leave")},a=new El(this,ui.leave,Ms({}),t);return a.receive("ok",()=>e()).receive("timeout",()=>e()),a.send(),this.canPush()||a.trigger("ok",{}),a}onMessage(t,e,a){return e}filterBindings(t,e,a){return!0}isMember(t,e,a,r){return this.topic!==t?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:a,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Ht.joining,this.joinPush.resend(t))}trigger(t,e,a,r){let o=this.onMessage(t,e,a,r);if(e&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let c=this.bindings.filter(d=>d.event===t&&this.filterBindings(d,e,a));for(let d=0;d<c.length;d++)c[d].callback(o,a,r||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===Ht.closed}isErrored(){return this.state===Ht.errored}isJoined(){return this.state===Ht.joined}isJoining(){return this.state===Ht.joining}isLeaving(){return this.state===Ht.leaving}},Zl=class{static request(t,e,a,r,o,c,d){if(Un.XDomainRequest){let h=new Un.XDomainRequest;return this.xdomainRequest(h,t,e,r,o,c,d)}else if(Un.XMLHttpRequest){let h=new Un.XMLHttpRequest;return this.xhrRequest(h,t,e,a,r,o,c,d)}else{if(Un.fetch&&Un.AbortController)return this.fetchRequest(t,e,a,r,o,c,d);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,a,r,o,c,d){let h={method:t,headers:a,body:r},p=null;return o&&(p=new AbortController,setTimeout(()=>p.abort(),o),h.signal=p.signal),Un.fetch(e,h).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>d&&d(g)).catch(g=>{g.name==="AbortError"&&c?c():d&&d(null)}),p}static xdomainRequest(t,e,a,r,o,c,d){return t.timeout=o,t.open(e,a),t.onload=()=>{let h=this.parseJSON(t.responseText);d&&d(h)},c&&(t.ontimeout=c),t.onprogress=()=>{},t.send(r),t}static xhrRequest(t,e,a,r,o,c,d,h){t.open(e,a,!0),t.timeout=c;for(let[p,g]of Object.entries(r))t.setRequestHeader(p,g);return t.onerror=()=>h&&h(null),t.onreadystatechange=()=>{if(t.readyState===ik.complete&&h){let p=this.parseJSON(t.responseText);h(p)}},d&&(t.ontimeout=d),t.send(o),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let a=[];for(var r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let o=e?`${e}[${r}]`:r,c=t[r];typeof c=="object"?a.push(this.serialize(c,o)):a.push(encodeURIComponent(o)+"="+encodeURIComponent(c))}return a.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let a=t.match(/\?/)?"&":"?";return`${t}${a}${this.serialize(e)}`}},rk=t=>{let e="",a=new Uint8Array(t),r=a.byteLength;for(let o=0;o<r;o++)e+=String.fromCharCode(a[o]);return btoa(e)},lr=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(zh)&&(this.authToken=atob(e[1].slice(zh.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=Bn.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Mh.websocket),"$1/"+Mh.longpoll)}endpointURL(){return Zl.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,a){this.close(t,e,a),this.readyState=Bn.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Bn.open||this.readyState===Bn.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:a,token:r,messages:o}=e;if(a===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else a=0;switch(a){case 200:o.forEach(c=>{setTimeout(()=>this.onmessage({data:c}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Bn.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${a}`)}})}send(t){typeof t!="string"&&(t=rk(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,a){for(let o of this.reqs)o.abort();this.readyState=Bn.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:a});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(t,e,a,r,o){let c,d=()=>{this.reqs.delete(c),r()};c=Zl.request(t,this.endpointURL(),e,a,this.timeout,d,h=>{this.reqs.delete(c),this.isActive()&&o(h)}),this.reqs.add(c)}},sk=class Ns{constructor(e,a={}){let r=a.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,o=>{let{onJoin:c,onLeave:d,onSync:h}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Ns.syncState(this.state,o,c,d),this.pendingDiffs.forEach(p=>{this.state=Ns.syncDiff(this.state,p,c,d)}),this.pendingDiffs=[],h()}),this.channel.on(r.diff,o=>{let{onJoin:c,onLeave:d,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Ns.syncDiff(this.state,o,c,d),h())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Ns.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,a,r,o){let c=this.clone(e),d={},h={};return this.map(c,(p,g)=>{a[p]||(h[p]=g)}),this.map(a,(p,g)=>{let y=c[p];if(y){let v=g.metas.map(T=>T.phx_ref),x=y.metas.map(T=>T.phx_ref),w=g.metas.filter(T=>x.indexOf(T.phx_ref)<0),S=y.metas.filter(T=>v.indexOf(T.phx_ref)<0);w.length>0&&(d[p]=g,d[p].metas=w),S.length>0&&(h[p]=this.clone(y),h[p].metas=S)}else d[p]=g}),this.syncDiff(c,{joins:d,leaves:h},r,o)}static syncDiff(e,a,r,o){let{joins:c,leaves:d}=this.clone(a);return r||(r=function(){}),o||(o=function(){}),this.map(c,(h,p)=>{let g=e[h];if(e[h]=this.clone(p),g){let y=e[h].metas.map(x=>x.phx_ref),v=g.metas.filter(x=>y.indexOf(x.phx_ref)<0);e[h].metas.unshift(...v)}r(h,g,p)}),this.map(d,(h,p)=>{let g=e[h];if(!g)return;let y=p.metas.map(v=>v.phx_ref);g.metas=g.metas.filter(v=>y.indexOf(v.phx_ref)<0),o(h,g,p),g.metas.length===0&&delete e[h]}),e}static list(e,a){return a||(a=function(r,o){return o}),this.map(e,(r,o)=>a(r,o))}static map(e,a){return Object.getOwnPropertyNames(e).map(r=>a(r,e[r]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Al={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let a=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(a))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[a,r,o,c,d]=JSON.parse(t);return e({join_ref:a,ref:r,topic:o,event:c,payload:d})}},binaryEncode(t){let{join_ref:e,ref:a,event:r,topic:o,payload:c}=t,d=this.META_LENGTH+e.length+a.length+o.length+r.length,h=new ArrayBuffer(this.HEADER_LENGTH+d),p=new DataView(h),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,e.length),p.setUint8(g++,a.length),p.setUint8(g++,o.length),p.setUint8(g++,r.length),Array.from(e,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(a,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(o,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(r,v=>p.setUint8(g++,v.charCodeAt(0)));var y=new Uint8Array(h.byteLength+c.byteLength);return y.set(new Uint8Array(h),0),y.set(new Uint8Array(c),h.byteLength),y.buffer},binaryDecode(t){let e=new DataView(t),a=e.getUint8(0),r=new TextDecoder;switch(a){case this.KINDS.push:return this.decodePush(t,e,r);case this.KINDS.reply:return this.decodeReply(t,e,r);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,r)}},decodePush(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),d=this.HEADER_LENGTH+this.META_LENGTH-1,h=a.decode(t.slice(d,d+r));d=d+r;let p=a.decode(t.slice(d,d+o));d=d+o;let g=a.decode(t.slice(d,d+c));d=d+c;let y=t.slice(d,t.byteLength);return{join_ref:h,ref:null,topic:p,event:g,payload:y}},decodeReply(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),d=e.getUint8(4),h=this.HEADER_LENGTH+this.META_LENGTH,p=a.decode(t.slice(h,h+r));h=h+r;let g=a.decode(t.slice(h,h+o));h=h+o;let y=a.decode(t.slice(h,h+c));h=h+c;let v=a.decode(t.slice(h,h+d));h=h+d;let x=t.slice(h,t.byteLength),w={status:v,response:x};return{join_ref:p,ref:g,topic:y,event:ui.reply,payload:w}},decodeBroadcast(t,e,a){let r=e.getUint8(1),o=e.getUint8(2),c=this.HEADER_LENGTH+2,d=a.decode(t.slice(c,c+r));c=c+r;let h=a.decode(t.slice(c,c+o));c=c+o;let p=t.slice(c,t.byteLength);return{join_ref:null,ref:null,topic:d,event:h,payload:p}}},ok=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||tk,this.transport=e.transport||Un.WebSocket||lr,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let a=null;try{a=Un&&Un.sessionStorage}catch{}this.sessionStore=e.sessionStorage||a,this.establishedConnections=0,this.defaultEncoder=Al.encode.bind(Al),this.defaultDecoder=Al.decode.bind(Al),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==lr?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;pr&&pr.addEventListener&&(pr.addEventListener("pagehide",o=>{this.conn&&(this.disconnect(),r=this.connectClock)}),pr.addEventListener("pageshow",o=>{r===this.connectClock&&(r=null,this.connect())}),pr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=o=>e.rejoinAfterMs?e.rejoinAfterMs(o):[1e3,2e3,5e3][o-1]||1e4,this.reconnectAfterMs=o=>e.reconnectAfterMs?e.reconnectAfterMs(o):[10,50,100,150,200,250,500,1e3,2e3][o-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(o,c,d)=>{console.log(`${o}: ${c}`,d)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Ms(e.params||{}),this.endPoint=`${t}/${Mh.websocket}`,this.vsn=e.vsn||ek,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new ox(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return lr}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Zl.appendParams(Zl.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,a){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,a)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ms(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==lr?this.connectWithFallback(lr,this.longPollFallbackMs):this.transportConnect())}log(t,e,a){this.logger&&this.logger(t,e,a)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),a=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let r=this.onMessage(o=>{o.ref===e&&(this.off([r]),t(Date.now()-a))});return!0}transportName(t){switch(t){case lr:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${zh}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let a=!1,r=!0,o,c,d=this.transportName(t),h=p=>{this.log("transport",`falling back to ${d}...`,p),this.off([o,c]),r=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${d}`))return h("memorized");this.fallbackTimer=setTimeout(h,e),c=this.onError(p=>{this.log("transport","error",p),r&&!a&&(clearTimeout(this.fallbackTimer),h(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(a=!0,!r){let p=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(h,e),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),nk,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,a){if(!this.conn)return t&&t();const r=this.conn;this.waitForBufferDone(r,()=>{e?r.close(e,a||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,a=1){if(a===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,a+1)},150*a)}waitForSocketClosed(t,e,a=1){if(a===5||t.readyState===Bn.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,a+1)},150*a)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,a=this.establishedConnections;this.triggerStateCallbacks("error",t,e,a),(e===this.transport||a>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(ui.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case Bn.connecting:return"connecting";case Bn.open:return"open";case Bn.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([a])=>t.indexOf(a)===-1)}channel(t,e={}){let a=new ak(t,e,this);return this.channels.push(a),a}push(t){if(this.hasLogger()){let{topic:e,event:a,payload:r,ref:o,join_ref:c}=t;this.log("push",`${e} ${a} (${c}, ${o})`,r)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:a,event:r,payload:o,ref:c,join_ref:d}=e;if(c&&c===this.pendingHeartbeatRef){const h=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",h)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${a} ${r} ${c&&"("+c+")"||""}`.trim(),o);for(let h=0;h<this.channels.length;h++){const p=this.channels[h];p.isMember(a,r,o,d)&&p.trigger(r,o,c,d)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([a,r])=>{try{r(...e)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(a){this.log("error",`error triggering ${t} callbacks`,a)}}leaveOpenTopic(t){let e=this.channels.find(a=>a.topic===t&&(a.isJoined()||a.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class zs{constructor(e,a){const r=ck(a);this.presence=new sk(e.getChannel(),r),this.presence.onJoin((o,c,d)=>{const h=zs.onJoinPayload(o,c,d);e.getChannel().trigger("presence",h)}),this.presence.onLeave((o,c,d)=>{const h=zs.onLeavePayload(o,c,d);e.getChannel().trigger("presence",h)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return zs.transformState(this.presence.state)}static transformState(e){return e=lk(e),Object.getOwnPropertyNames(e).reduce((a,r)=>{const o=e[r];return a[r]=$l(o),a},{})}static onJoinPayload(e,a,r){const o=Ey(a),c=$l(r);return{event:"join",key:e,currentPresences:o,newPresences:c}}static onLeavePayload(e,a,r){const o=Ey(a),c=$l(r);return{event:"leave",key:e,currentPresences:o,leftPresences:c}}}function $l(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function lk(t){return JSON.parse(JSON.stringify(t))}function ck(t){return(t==null?void 0:t.events)&&{events:t.events}}function Ey(t){return t!=null&&t.metas?$l(t):[]}var Ay;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(Ay||(Ay={}));class uk{get state(){return this.presenceAdapter.state}constructor(e,a){this.channel=e,this.presenceAdapter=new zs(this.channel.channelAdapter,a)}}function dk(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const a=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${a}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class hk{constructor(e,a,r){const o=fk(r);this.channel=e.getSocket().channel(a,o),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,a){return this.channel.on(e,a)}off(e,a){this.channel.off(e,a)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,a,r){let o;try{o=this.channel.push(e,a,r)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Fj){const c=this.channel.pushBuffer.shift();c.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${c.event}`,c.payload())}return o}updateJoinPayload(e){const a=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},a),e)}canPush(){return this.socket.isConnected()&&this.state===Vi.joined}isJoined(){return this.state===Vi.joined}isJoining(){return this.state===Vi.joining}isClosed(){return this.state===Vi.closed}isLeaving(){return this.state===Vi.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function fk(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var Cy;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Cy||(Cy={}));var yr;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(yr||(yr={}));var di;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(di||(di={}));class Us{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,a={config:{}},r){var o,c;if(this.topic=e,this.params=a,this.socket=r,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},a.config),this.channelAdapter=new hk(this.socket.socketAdapter,e,this.params),this.presence=new uk(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=sx(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((c=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||c===void 0)&&c.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,a=this.timeout){var r,o,c;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:d,presence:h,private:p}}=this.params,g=(o=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(w=>w.filter))!==null&&o!==void 0?o:[],y=!!this.bindings[yr.PRESENCE]&&this.bindings[yr.PRESENCE].length>0||((c=this.params.config.presence)===null||c===void 0?void 0:c.enabled)===!0,v={},x={broadcast:d,presence:Object.assign(Object.assign({},h),{enabled:y}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(v.access_token=this.socket.accessTokenValue),this._onError(w=>{e==null||e(di.CHANNEL_ERROR,dk(w))}),this._onClose(()=>e==null?void 0:e(di.CLOSED)),this.updateJoinPayload(Object.assign({config:x},v)),this._updateFilterMessage(),this.channelAdapter.subscribe(a).receive("ok",async({postgres_changes:w})=>{if(this.socket._isManualToken()||this.socket.setAuth(),w===void 0){e==null||e(di.SUBSCRIBED);return}this._updatePostgresBindings(w,e)}).receive("error",w=>{this.state=Vi.errored;const S=Object.values(w).join(", ")||"error";e==null||e(di.CHANNEL_ERROR,new Error(S,{cause:w}))}).receive("timeout",()=>{e==null||e(di.TIMED_OUT)})}return this}_updatePostgresBindings(e,a){var r;const o=this.bindings.postgres_changes,c=(r=o==null?void 0:o.length)!==null&&r!==void 0?r:0,d=[];for(let h=0;h<c;h++){const p=o[h],{filter:{event:g,schema:y,table:v,filter:x}}=p,w=e&&e[h];if(w&&w.event===g&&Us.isFilterValueEqual(w.schema,y)&&Us.isFilterValueEqual(w.table,v)&&Us.isFilterValueEqual(w.filter,x))d.push(Object.assign(Object.assign({},p),{id:w.id}));else{this.unsubscribe(),this.state=Vi.errored,a==null||a(di.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=d,this.state!=Vi.errored&&a&&a(di.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,a={}){return await this.send({type:"presence",event:"track",payload:e},a.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,a,r){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),c=e===yr.PRESENCE||e===yr.POSTGRES_CHANGES;if(o&&c)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,a,r)}async httpSend(e,a,r={}){var o;if(a==null)return Promise.reject(new Error("Payload is required for httpSend()"));const c=a instanceof ArrayBuffer||ArrayBuffer.isView(a),d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":c?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h=new URL(this.broadcastEndpointURL);h.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&h.searchParams.set("private","true");const p={method:"POST",headers:d,body:c?a:JSON.stringify(a)},g=await this._fetchWithTimeout(h.toString(),p,(o=r.timeout)!==null&&o!==void 0?o:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let y=g.statusText;try{const v=await g.json();y=v.error||v.message||y}catch{}return Promise.reject(new Error(y))}async send(e,a={}){var r,o;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:c,payload:d}=e,h={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(h.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:h,body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:d,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(r=a.timeout)!==null&&r!==void 0?r:this.timeout);return await((o=g.body)===null||o===void 0?void 0:o.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var d,h,p;const g=this.channelAdapter.push(e.type,e,a.timeout||this.timeout);e.type==="broadcast"&&!(!((p=(h=(d=this.params)===null||d===void 0?void 0:d.config)===null||h===void 0?void 0:h.broadcast)===null||p===void 0)&&p.ack)&&c("ok"),g.receive("ok",()=>c("ok")),g.receive("error",()=>c("error")),g.receive("timeout",()=>c("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(a=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>a("ok")).receive("timeout",()=>a("timed out")).receive("error",()=>a("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,a,r){const o=new AbortController,c=setTimeout(()=>o.abort(),r),d=await this.socket.fetch(e,Object.assign(Object.assign({},a),{signal:o.signal}));return clearTimeout(c),d}_on(e,a,r){const o=e.toLocaleLowerCase(),c=this.channelAdapter.on(e,r),d={type:o,filter:a,callback:r,ref:c};return this.bindings[o]?this.bindings[o].push(d):this.bindings[o]=[d],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,a,r)=>{var o,c,d,h,p,g,y;const v=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(v,r))return!1;const x=(o=this.bindings[v])===null||o===void 0?void 0:o.find(w=>w.ref===e.ref);if(!x)return!0;if(["broadcast","presence","postgres_changes"].includes(v))if("id"in x){const w=x.id,S=(c=x.filter)===null||c===void 0?void 0:c.event;return w&&((d=a.ids)===null||d===void 0?void 0:d.includes(w))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((h=a.data)===null||h===void 0?void 0:h.type.toLocaleLowerCase()))}else{const w=(g=(p=x==null?void 0:x.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return w==="*"||w===((y=a==null?void 0:a.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===v})}_notThisChannelEvent(e,a){const{close:r,error:o,leave:c,join:d}=ax;return a&&[r,o,c,d].includes(e)&&a!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,a,r)=>{if(typeof a=="object"&&"ids"in a){const o=a.data,{schema:c,table:d,commit_timestamp:h,type:p,errors:g}=o;return Object.assign(Object.assign({},{schema:c,table:d,commit_timestamp:h,eventType:p,new:{},old:{},errors:g}),this._getPayloadRecords(o))}return a})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const a in e.bindings)for(const r of e.bindings[a])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(e,a){return(e??void 0)===(a??void 0)}_getPayloadRecords(e){const a={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(a.new=Ty(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(a.old=Ty(e.columns,e.old_record)),a}}class pk{constructor(e,a){this.socket=new ok(e,a)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,a,r,o=1e4){return new Promise(c=>{setTimeout(()=>c("timeout"),o),this.socket.disconnect(()=>{e(),c("ok")},a,r)})}push(e){this.socket.push(e)}log(e,a,r){this.socket.log(e,a,r)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Dh.connecting}isDisconnecting(){return this.socket.connectionState()==Dh.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Ry={HEARTBEAT_INTERVAL:25e3},mk=[1e3,2e3,5e3,1e4],gk=1e4;function yk(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var a;return(a=Array.from(t.keys())[e])!==null&&a!==void 0?a:null},removeItem(e){t.delete(e)},setItem(e,a){t.set(e,String(a))}}}function vk(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return yk()}const bk=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class xk{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,a){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Gj,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=c=>c?(...d)=>c(...d):(...d)=>fetch(...d),!(!((r=a==null?void 0:a.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=a.params.apikey;const o=this._initializeOptions(a);this.socketAdapter=new pk(e,o),this.httpEndpoint=sx(e),this.fetch=this._resolveFetch(a==null?void 0:a.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const a=e.message;throw a.includes("Node.js")?new Error(`${a}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${a}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,a){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,a)}getChannels(){return this.channels}async removeChannel(e){const a=await e.unsubscribe();return a==="ok"&&e.teardown(),a}async removeAllChannels(){const e=this.channels.map(async r=>{const o=await r.unsubscribe();return r.teardown(),o}),a=await Promise.all(e);return await this.disconnect(),a}log(e,a,r){this.socketAdapter.log(e,a,r)}connectionState(){return this.socketAdapter.connectionState()||Dh.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,a={config:{}}){const r=`realtime:${e}`,o=this.getChannels().find(c=>c.topic===r);if(o)return o;{const c=new Us(`realtime:${e}`,a,this);return this._cancelPendingDisconnect(),this.channels.push(c),c}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(a=>a.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let a,r=!1;if(e)a=e,r=!0;else if(this.accessToken)try{a=await this.accessToken()}catch(o){this.log("error","Error fetching access token from callback",o),a=this.accessTokenValue}else a=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=a&&(this.accessTokenValue=a,this.channels.forEach(o=>{const c={access_token:a,version:Hj};a&&o.updateJoinPayload(c),o.joinedOnce&&o.channelAdapter.isJoined()&&o.channelAdapter.push(ax.access_token,{access_token:a})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(a=>{this.log("error",`Error setting auth in ${e}`,a)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(a=>{this.log("error","error waiting for auth on connect",a)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(a,r)=>{a=="sent"&&this._setAuthSafely(),e&&e(a,r)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=a=>{this.log("worker","worker error",a.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=a=>{a.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let a;if(e)a=e;else{const r=new Blob([bk],{type:"application/javascript"});a=URL.createObjectURL(r)}return a}_initializeOptions(e){var a,r,o,c,d,h,p,g,y,v,x,w;this.worker=(a=e==null?void 0:e.worker)!==null&&a!==void 0?a:!1,this.accessToken=(r=e==null?void 0:e.accessToken)!==null&&r!==void 0?r:null;const S={};S.timeout=(o=e==null?void 0:e.timeout)!==null&&o!==void 0?o:qj,S.heartbeatIntervalMs=(c=e==null?void 0:e.heartbeatIntervalMs)!==null&&c!==void 0?c:Ry.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(d=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&d!==void 0?d:2*((h=e==null?void 0:e.heartbeatIntervalMs)!==null&&h!==void 0?h:Ry.HEARTBEAT_INTERVAL),S.transport=(p=e==null?void 0:e.transport)!==null&&p!==void 0?p:Pj.getWebSocketConstructor(),S.params=e==null?void 0:e.params,S.logger=e==null?void 0:e.logger,S.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),S.sessionStorage=(g=e==null?void 0:e.sessionStorage)!==null&&g!==void 0?g:vk(),S.reconnectAfterMs=(y=e==null?void 0:e.reconnectAfterMs)!==null&&y!==void 0?y:(N=>mk[N-1]||gk);let T,E;const _=(v=e==null?void 0:e.vsn)!==null&&v!==void 0?v:Ij;switch(_){case $j:T=(N,C)=>C(JSON.stringify(N)),E=(N,C)=>C(JSON.parse(N));break;case ix:T=this.serializer.encode.bind(this.serializer),E=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${S.vsn}`)}if(S.vsn=_,S.encode=(x=e==null?void 0:e.encode)!==null&&x!==void 0?x:T,S.decode=(w=e==null?void 0:e.decode)!==null&&w!==void 0?w:E,S.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,S.params=Object.assign(Object.assign({},S.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,S.autoSendHeartbeat=!this.worker}return S}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var qs=class extends Error{constructor(t,e){var a;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((a=e.icebergType)==null?void 0:a.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function wk(t,e,a){const r=new URL(e,t);if(a)for(const[o,c]of Object.entries(a))c!==void 0&&r.searchParams.set(o,c);return r.toString()}async function Sk(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function jk(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:a,path:r,query:o,body:c,headers:d}){const h=wk(t.baseUrl,r,o),p=await Sk(t.auth),g=await e(h,{method:a,headers:{...c?{"Content-Type":"application/json"}:{},...p,...d},body:c?JSON.stringify(c):void 0}),y=await g.text(),v=(g.headers.get("content-type")||"").includes("application/json"),x=v&&y?JSON.parse(y):y;if(!g.ok){const w=v?x:void 0,S=w==null?void 0:w.error;throw new qs((S==null?void 0:S.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:S==null?void 0:S.type,icebergCode:S==null?void 0:S.code,details:w})}return{status:g.status,headers:g.headers,data:x}}}}function Cl(t){return t.join("")}var kk=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Cl(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(t,e){const a={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:a})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`}),!0}catch(e){if(e instanceof qs&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(a){if(a instanceof qs&&a.status===409)return;throw a}}};function cr(t){return t.join("")}var _k=class{constructor(t,e="",a){this.client=t,this.prefix=e,this.accessDelegation=a}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${cr(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const a={};return this.accessDelegation&&(a["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${cr(t.namespace)}/tables`,body:e,headers:a})).data.metadata}async updateTable(t,e){const a=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${cr(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":a.data["metadata-location"],metadata:a.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${cr(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${cr(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${cr(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(a){if(a instanceof qs&&a.status===404)return!1;throw a}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(a){if(a instanceof qs&&a.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw a}}},Tk=class{constructor(t){var r;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const a=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=jk({baseUrl:a,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(r=t.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new kk(this.client,e),this.tableOps=new _k(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function Fs(t){"@babel/helpers - typeof";return Fs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Fs(t)}function Ek(t,e){if(Fs(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(Fs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ak(t){var e=Ek(t,"string");return Fs(e)=="symbol"?e:e+""}function Ck(t,e,a){return(e=Ak(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Ny(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function ve(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Ny(Object(a),!0).forEach(function(r){Ck(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Ny(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}var jc=class extends Error{constructor(t,e="storage",a,r){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=a,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function kc(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var Uh=class extends jc{constructor(t,e,a,r="storage"){super(t,r,e,a),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=a}toJSON(){return ve({},super.toJSON())}},lx=class extends jc{constructor(t,e,a="storage"){super(t,a),this.name=a==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function ec(t,e,a){const r=ve({},t),o=e.toLowerCase();for(const c of Object.keys(r))c.toLowerCase()===o&&delete r[c];return r[o]=a,r}function Rk(t){const e={};for(const[a,r]of Object.entries(t))e[a.toLowerCase()]=r;return e}const Nk=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Ok=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Bh=t=>{if(Array.isArray(t))return t.map(a=>Bh(a));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([a,r])=>{const o=a.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));e[o]=Bh(r)}),e},Dk=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Oy=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const a=e.error;if(typeof a.message=="string")return a.message}}return JSON.stringify(t)},Lk=async(t,e,a,r)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const o=t;let c=parseInt(String(o.status),10);Number.isFinite(c)||(c=500),o.json().then(d=>{const h=(d==null?void 0:d.statusCode)||(d==null?void 0:d.code)||c+"";e(new Uh(Oy(d),c,h,r))}).catch(()=>{const d=c+"";e(new Uh(o.statusText||`HTTP ${c} error`,c,d,r))})}else e(new lx(Oy(t),t,r))},Mk=(t,e,a,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!r)return ve(ve({},o),a);if(Ok(r)){var c;const d=(e==null?void 0:e.headers)||{};let h;for(const[p,g]of Object.entries(d))p.toLowerCase()==="content-type"&&(h=g);o.headers=ec(d,"Content-Type",(c=h)!==null&&c!==void 0?c:"application/json"),o.body=JSON.stringify(r)}else o.body=r;return e!=null&&e.duplex&&(o.duplex=e.duplex),ve(ve({},o),a)};async function Ts(t,e,a,r,o,c,d){return new Promise((h,p)=>{t(a,Mk(e,r,o,c)).then(g=>{if(!g.ok)throw g;if(r!=null&&r.noResolveJson)return g;if(d==="vectors"){const y=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!y||!y.includes("application/json"))return{}}return g.json()}).then(g=>h(g)).catch(g=>Lk(g,p,r,d))})}function cx(t="storage"){return{get:async(e,a,r,o)=>Ts(e,"GET",a,r,o,void 0,t),post:async(e,a,r,o,c)=>Ts(e,"POST",a,o,c,r,t),put:async(e,a,r,o,c)=>Ts(e,"PUT",a,o,c,r,t),head:async(e,a,r,o)=>Ts(e,"HEAD",a,ve(ve({},r),{},{noResolveJson:!0}),o,void 0,t),remove:async(e,a,r,o,c)=>Ts(e,"DELETE",a,o,c,r,t)}}const zk=cx("storage"),{get:Gs,post:_n,put:Ph,head:Uk,remove:Af}=zk,en=cx("vectors");var Er=class{constructor(t,e={},a,r="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=Rk(e),this.fetch=Nk(a),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=ec(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(a){if(e.shouldThrowOnError)throw a;if(kc(a))return{data:null,error:a};throw a}}};let ux;ux=Symbol.toStringTag;var Bk=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[ux]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(kc(e))return{data:null,error:e};throw e}}};let dx;dx=Symbol.toStringTag;var Pk=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[dx]="BlobDownloadBuilder",this.promise=null}asStream(){return new Bk(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(kc(e))return{data:null,error:e};throw e}}};const Vk={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Dy={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Hk=class extends Er{constructor(t,e={},a,r){super(t,e,r,"storage"),this.bucketId=a}async uploadOrUpdate(t,e,a,r){var o=this;return o.handleOperation(async()=>{let c;const d=ve(ve({},Dy),r);let h=ve(ve({},o.headers),t==="POST"&&{"x-upsert":String(d.upsert)});const p=d.metadata;if(typeof Blob<"u"&&a instanceof Blob?(c=new FormData,c.append("cacheControl",d.cacheControl),p&&c.append("metadata",o.encodeMetadata(p)),c.append("",a)):typeof FormData<"u"&&a instanceof FormData?(c=a,c.has("cacheControl")||c.append("cacheControl",d.cacheControl),p&&!c.has("metadata")&&c.append("metadata",o.encodeMetadata(p))):(c=a,h["cache-control"]=`max-age=${d.cacheControl}`,h["content-type"]=d.contentType,p&&(h["x-metadata"]=o.toBase64(o.encodeMetadata(p))),(typeof ReadableStream<"u"&&c instanceof ReadableStream||c&&typeof c=="object"&&"pipe"in c&&typeof c.pipe=="function")&&!d.duplex&&(d.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))h=ec(h,x,w);const g=o._removeEmptyFolders(e),y=o._getFinalPath(g),v=await(t=="PUT"?Ph:_n)(o.fetch,`${o.url}/object/${y}`,c,ve({headers:h},d!=null&&d.duplex?{duplex:d.duplex}:{}));return{path:g,id:v.Id,fullPath:v.Key}})}async upload(t,e,a){return this.uploadOrUpdate("POST",t,e,a)}async uploadToSignedUrl(t,e,a,r){var o=this;const c=o._removeEmptyFolders(t),d=o._getFinalPath(c),h=new URL(o.url+`/object/upload/sign/${d}`);return h.searchParams.set("token",e),o.handleOperation(async()=>{let p;const g=ve(ve({},Dy),r);let y=ve(ve({},o.headers),{"x-upsert":String(g.upsert)});const v=g.metadata;if(typeof Blob<"u"&&a instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),v&&p.append("metadata",o.encodeMetadata(v)),p.append("",a)):typeof FormData<"u"&&a instanceof FormData?(p=a,p.has("cacheControl")||p.append("cacheControl",g.cacheControl),v&&!p.has("metadata")&&p.append("metadata",o.encodeMetadata(v))):(p=a,y["cache-control"]=`max-age=${g.cacheControl}`,y["content-type"]=g.contentType,v&&(y["x-metadata"]=o.toBase64(o.encodeMetadata(v))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!g.duplex&&(g.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))y=ec(y,x,w);return{path:c,fullPath:(await Ph(o.fetch,h.toString(),p,ve({headers:y},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var a=this;return a.handleOperation(async()=>{let r=a._getFinalPath(t);const o=ve({},a.headers);e!=null&&e.upsert&&(o["x-upsert"]="true");const c=await _n(a.fetch,`${a.url}/object/upload/sign/${r}`,{},{headers:o}),d=new URL(a.url+c.url),h=d.searchParams.get("token");if(!h)throw new jc("No token returned by API");return{signedUrl:d.toString(),path:t,token:h}})}async update(t,e,a){return this.uploadOrUpdate("PUT",t,e,a)}async move(t,e,a){var r=this;return r.handleOperation(async()=>await _n(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers}))}async copy(t,e,a){var r=this;return r.handleOperation(async()=>({path:(await _n(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:a==null?void 0:a.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(t,e,a){var r=this;return r.handleOperation(async()=>{let o=r._getFinalPath(t);const c=typeof(a==null?void 0:a.transform)=="object"&&a.transform!==null&&Object.keys(a.transform).length>0;let d=await _n(r.fetch,`${r.url}/object/sign/${o}`,ve({expiresIn:e},c?{transform:a.transform}:{}),{headers:r.headers});const h=new URLSearchParams;a!=null&&a.download&&h.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&h.set("cacheNonce",String(a.cacheNonce));const p=h.toString();return{signedUrl:encodeURI(`${r.url}${d.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(t,e,a){var r=this;return r.handleOperation(async()=>{const o=await _n(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:e,paths:t},{headers:r.headers}),c=new URLSearchParams;a!=null&&a.download&&c.set("download",a.download===!0?"":a.download),(a==null?void 0:a.cacheNonce)!=null&&c.set("cacheNonce",String(a.cacheNonce));const d=c.toString();return o.map(h=>ve(ve({},h),{},{signedUrl:h.signedURL?encodeURI(`${r.url}${h.signedURL}${d?`&${d}`:""}`):null}))})}download(t,e,a){const r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(o,e.transform),(e==null?void 0:e.cacheNonce)!=null&&o.set("cacheNonce",String(e.cacheNonce));const c=o.toString(),d=this._getFinalPath(t),h=()=>Gs(this.fetch,`${this.url}/${r}/${d}${c?`?${c}`:""}`,{headers:this.headers,noResolveJson:!0},a);return new Pk(h,this.shouldThrowOnError)}async info(t){var e=this;const a=e._getFinalPath(t);return e.handleOperation(async()=>Bh(await Gs(e.fetch,`${e.url}/object/info/${a}`,{headers:e.headers})))}async exists(t){var e=this;const a=e._getFinalPath(t);try{return await Uk(e.fetch,`${e.url}/object/${a}`,{headers:e.headers}),{data:!0,error:null}}catch(o){if(e.shouldThrowOnError)throw o;if(kc(o)){var r;const c=o instanceof Uh?o.status:o instanceof lx?(r=o.originalError)===null||r===void 0?void 0:r.status:void 0;if(c!==void 0&&[400,404].includes(c))return{data:!1,error:o}}throw o}}getPublicUrl(t,e){const a=this._getFinalPath(t),r=new URLSearchParams;e!=null&&e.download&&r.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const o=r.toString(),c=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${a}`)+(o?`?${o}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await Af(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,a){var r=this;return r.handleOperation(async()=>{const o=ve(ve(ve({},Vk),e),{},{prefix:t||""});return await _n(r.fetch,`${r.url}/object/list/${r.bucketId}`,o,{headers:r.headers},a)})}async listV2(t,e){var a=this;return a.handleOperation(async()=>{const r=ve({},t);return await _n(a.fetch,`${a.url}/object/list-v2/${a.bucketId}`,r,{headers:a.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const $k="2.108.2",no={"X-Client-Info":`storage-js/${$k}`};var Ik=class extends Er{constructor(t,e={},a,r){const o=new URL(t);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const c=o.href.replace(/\/$/,""),d=ve(ve({},no),e);super(c,d,a,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=e.listBucketOptionsToQueryString(t);return await Gs(e.fetch,`${e.url}/bucket${a}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Gs(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var a=this;return a.handleOperation(async()=>await _n(a.fetch,`${a.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async updateBucket(t,e){var a=this;return a.handleOperation(async()=>await Ph(a.fetch,`${a.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:a.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await _n(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Af(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},qk=class extends Er{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=ve(ve({},no),e);super(r,o,a,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await _n(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const a=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&a.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&a.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&a.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&a.set("sortOrder",t.sortOrder),t!=null&&t.search&&a.set("search",t.search);const r=a.toString(),o=r?`${e.url}/bucket?${r}`:`${e.url}/bucket`;return await Gs(e.fetch,o,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Af(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!Dk(t))throw new jc("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const a=new Tk({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(a,{get(o,c){const d=o[c];return typeof d!="function"?d:async(...h)=>{try{return{data:await d.apply(o,h),error:null}}catch(p){if(r)throw p;return{data:null,error:p}}}}})}},Fk=class extends Er{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=ve(ve({},no),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var a=this;return a.handleOperation(async()=>await en.post(a.fetch,`${a.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var a=this;return a.handleOperation(async()=>await en.post(a.fetch,`${a.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:a.headers})||{})}},Gk=class extends Er{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=ve(ve({},no),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},Kk=class extends Er{constructor(t,e={},a){const r=t.replace(/\/$/,""),o=ve(ve({},no),{},{"Content-Type":"application/json"},e);super(r,o,a,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await en.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Yk=class extends Kk{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Wk(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,a=this;return e().call(a,t)}async getBucket(t){var e=()=>super.getBucket,a=this;return e().call(a,t)}async listBuckets(t={}){var e=()=>super.listBuckets,a=this;return e().call(a,t)}async deleteBucket(t){var e=()=>super.deleteBucket,a=this;return e().call(a,t)}},Wk=class extends Fk{constructor(t,e,a,r){super(t,e,r),this.vectorBucketName=a}async createIndex(t){var e=()=>super.createIndex,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,a=this;return e().call(a,a.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,a=this;return e().call(a,a.vectorBucketName,t)}index(t){return new Xk(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Xk=class extends Gk{constructor(t,e,a,r,o){super(t,e,o),this.vectorBucketName=a,this.indexName=r}async putVectors(t){var e=()=>super.putVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async getVectors(t){var e=()=>super.getVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,a=this;return e().call(a,ve(ve({},t),{},{vectorBucketName:a.vectorBucketName,indexName:a.indexName}))}},Jk=class extends Ik{constructor(t,e={},a,r){super(t,e,a,r)}from(t){return new Hk(this.url,this.headers,t,this.fetch)}get vectors(){return new Yk(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new qk(this.url+"/iceberg",this.headers,this.fetch)}};const hx="2.108.2",hi=30*1e3,Os=3,nh=Os*hi,Qk=2*hi,Zk="http://localhost:9999",e_="supabase.auth.token",t_={"X-Client-Info":`gotrue-js/${hx}`},Vh="X-Supabase-Api-Version",fx={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},n_=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,i_=600*1e3;class Ks extends Error{constructor(e,a,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=a,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function ne(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class a_ extends Ks{constructor(e,a,r){super(e,a,r),this.name="AuthApiError",this.status=a,this.code=r}}function r_(t){return ne(t)&&t.name==="AuthApiError"}class Tn extends Ks{constructor(e,a){super(e),this.name="AuthUnknownError",this.originalError=a}}class $n extends Ks{constructor(e,a,r,o){super(e,r,o),this.name=a,this.status=r}}class vt extends $n{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Rl(t){return ne(t)&&t.name==="AuthSessionMissingError"}class ur extends $n{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Nl extends $n{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Ol extends $n{constructor(e,a=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function s_(t){return ne(t)&&t.name==="AuthImplicitGrantRedirectError"}class Ly extends $n{constructor(e,a=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=a}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class o_ extends $n{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Hh extends $n{constructor(e,a){super(e,"AuthRetryableFetchError",a,void 0)}}function My(t){return ne(t)&&t.name==="AuthRetryableFetchError"}class zy extends $n{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function l_(t){return ne(t)&&t.name==="AuthRefreshDiscardedError"}class Uy extends $n{constructor(e,a,r){super(e,"AuthWeakPasswordError",a,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class tc extends $n{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const nc="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),By=` 	
\r=`.split(""),c_=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<By.length;e+=1)t[By[e].charCodeAt(0)]=-2;for(let e=0;e<nc.length;e+=1)t[nc[e].charCodeAt(0)]=e;return t})();function Py(t,e,a){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;a(nc[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;a(nc[r]),e.queuedBits-=6}}function px(t,e,a){const r=c_[t];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)a(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function Vy(t){const e=[],a=d=>{e.push(String.fromCodePoint(d))},r={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},c=d=>{h_(d,r,a)};for(let d=0;d<t.length;d+=1)px(t.charCodeAt(d),o,c);return e.join("")}function u_(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function d_(t,e){for(let a=0;a<t.length;a+=1){let r=t.charCodeAt(a);if(r>55295&&r<=56319){const o=(r-55296)*1024&65535;r=(t.charCodeAt(a+1)-56320&65535|o)+65536,a+=1}u_(r,e)}}function h_(t,e,a){if(e.utf8seq===0){if(t<=127){a(t);return}for(let r=1;r<6;r+=1)if((t>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&a(e.codepoint)}}function wr(t){const e=[],a={queue:0,queuedBits:0},r=o=>{e.push(o)};for(let o=0;o<t.length;o+=1)px(t.charCodeAt(o),a,r);return new Uint8Array(e)}function f_(t){const e=[];return d_(t,a=>e.push(a)),new Uint8Array(e)}function va(t){const e=[],a={queue:0,queuedBits:0},r=o=>{e.push(o)};return t.forEach(o=>Py(o,a,r)),Py(null,a,r),e.join("")}function p_(t){return Math.round(Date.now()/1e3)+t}function m_(){return Symbol("auth-callback")}const Et=()=>typeof window<"u"&&typeof document<"u",da={tested:!1,writable:!1},mx=()=>{if(!Et())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(da.tested)return da.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),da.tested=!0,da.writable=!0}catch{da.tested=!0,da.writable=!1}return da.writable};function g_(t){const e={},a=new URL(t);if(a.hash&&a.hash[0]==="#")try{new URLSearchParams(a.hash.substring(1)).forEach((o,c)=>{e[c]=o})}catch{}return a.searchParams.forEach((r,o)=>{e[o]=r}),e}const gx=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),y_=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",mr=async(t,e,a)=>{await t.setItem(e,JSON.stringify(a))},wn=async(t,e)=>{const a=await t.getItem(e);if(!a)return null;try{return JSON.parse(a)}catch{return null}},it=async(t,e)=>{await t.removeItem(e)};class _c{constructor(){this.promise=new _c.promiseConstructor((e,a)=>{this.resolve=e,this.reject=a})}}_c.promiseConstructor=Promise;function Dl(t){const e=t.split(".");if(e.length!==3)throw new tc("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!n_.test(e[r]))throw new tc("JWT not in base64url format");return{header:JSON.parse(Vy(e[0])),payload:JSON.parse(Vy(e[1])),signature:wr(e[2]),raw:{header:e[0],payload:e[1]}}}async function v_(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function b_(t,e){return new Promise((r,o)=>{(async()=>{for(let c=0;c<1/0;c++)try{const d=await t(c);if(!e(c,null,d)){r(d);return}}catch(d){if(!e(c,d)){o(d);return}}})()})}function x_(t){return("0"+t.toString(16)).substr(-2)}function w_(){const e=new Uint32Array(56);if(typeof crypto>"u"){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=a.length;let o="";for(let c=0;c<56;c++)o+=a.charAt(Math.floor(Math.random()*r));return o}return crypto.getRandomValues(e),Array.from(e,x_).join("")}async function S_(t){const a=new TextEncoder().encode(t),r=await crypto.subtle.digest("SHA-256",a),o=new Uint8Array(r);return Array.from(o).map(c=>String.fromCharCode(c)).join("")}async function j_(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const a=await S_(t);return btoa(a).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ha(t,e,a=!1){const r=w_();let o=r;a&&(o+="/recovery"),await mr(t,`${e}-code-verifier`,o);const c=await j_(r);return[c,r===c?"plain":"s256"]}const k_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function __(t){const e=t.headers.get(Vh);if(!e||!e.match(k_))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function T_(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function E_(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const A_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function oi(t){if(!A_.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function jn(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function ih(){const t={};return new Proxy(t,{get:(e,a)=>{if(a==="__isUserNotAvailableProxy")return!0;if(typeof a=="symbol"){const r=a.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${a}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,a)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${a}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function C_(t,e){return new Proxy(t,{get:(a,r,o)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const c=r.toString();if(c==="Symbol(Symbol.toPrimitive)"||c==="Symbol(Symbol.toStringTag)"||c==="Symbol(util.inspect.custom)"||c==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(a,r,o)}return!e.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(a,r,o)}})}function Hy(t){return JSON.parse(JSON.stringify(t))}const pa=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},R_=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function $y(t){var e;if(!y_(t))throw new Hh(pa(t),0);if(R_.includes(t.status))throw new Hh(pa(t),t.status);let a;try{a=await t.json()}catch(c){throw new Tn(pa(c),c)}let r;const o=__(t);if(o&&o.getTime()>=fx["2024-01-01"].timestamp&&typeof a=="object"&&a&&typeof a.code=="string"?r=a.code:typeof a=="object"&&a&&typeof a.error_code=="string"&&(r=a.error_code),r){if(r==="weak_password")throw new Uy(pa(a),t.status,((e=a.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new vt}else if(typeof a=="object"&&a&&typeof a.weak_password=="object"&&a.weak_password&&Array.isArray(a.weak_password.reasons)&&a.weak_password.reasons.length&&a.weak_password.reasons.reduce((c,d)=>c&&typeof d=="string",!0))throw new Uy(pa(a),t.status,a.weak_password.reasons);throw new a_(pa(a),t.status||500,r)}const N_=(t,e,a,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),o.body=JSON.stringify(r),Object.assign(Object.assign({},o),a))};async function oe(t,e,a,r){var o;const c=Object.assign({},r==null?void 0:r.headers);c[Vh]||(c[Vh]=fx["2024-01-01"].name),r!=null&&r.jwt&&(c.Authorization=`Bearer ${r.jwt}`);const d=(o=r==null?void 0:r.query)!==null&&o!==void 0?o:{};r!=null&&r.redirectTo&&(d.redirect_to=r.redirectTo);const h=Object.keys(d).length?"?"+new URLSearchParams(d).toString():"",p=await O_(t,e,a+h,{headers:c,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(p):{data:Object.assign({},p),error:null}}async function O_(t,e,a,r,o,c){const d=N_(e,r,o,c);let h;try{h=await t(a,Object.assign({},d))}catch(p){throw console.error(p),new Hh(pa(p),0)}if(h.ok||await $y(h),r!=null&&r.noResolveJson)return h;try{return await h.json()}catch(p){await $y(p)}}function mn(t){var e;let a=null;M_(t)&&(a=Object.assign({},t),t.expires_at||(a.expires_at=p_(t.expires_in)));const r=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:a,user:r},error:null}}function Iy(t){const e=mn(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((a,r)=>a&&typeof r=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Hi(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function D_(t){return{data:t,error:null}}function L_(t){const{action_link:e,email_otp:a,hashed_token:r,redirect_to:o,verification_type:c}=t,d=Sc(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:e,email_otp:a,hashed_token:r,redirect_to:o,verification_type:c},p=Object.assign({},d);return{data:{properties:h,user:p},error:null}}function qy(t){return t}function M_(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const ah=["global","local","others"];class z_{constructor({url:e="",headers:a={},fetch:r,experimental:o}){this.url=e,this.headers=a,this.fetch=gx(r),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,a=ah[0]){if(ah.indexOf(a)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${ah.join(", ")}`);try{return await oe(this.fetch,"POST",`${this.url}/logout?scope=${a}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(ne(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,a={}){try{return await oe(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:a.data},headers:this.headers,redirectTo:a.redirectTo,xform:Hi})}catch(r){if(ne(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:a}=e,r=Sc(e,["options"]),o=Object.assign(Object.assign({},r),a);return"newEmail"in r&&(o.new_email=r==null?void 0:r.newEmail,delete o.newEmail),await oe(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:L_,redirectTo:a==null?void 0:a.redirectTo})}catch(a){if(ne(a))return{data:{properties:null,user:null},error:a};throw a}}async createUser(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Hi})}catch(a){if(ne(a))return{data:{user:null},error:a};throw a}}async listUsers(e){var a,r,o,c,d,h,p;try{const g={nextPage:null,lastPage:0,total:0},y=await oe(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:qy});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(S.split(";")[1].split("=")[1]);g[`${E}Page`]=T}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(ne(g))return{data:{users:[]},error:g};throw g}}async getUserById(e){oi(e);try{return await oe(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Hi})}catch(a){if(ne(a))return{data:{user:null},error:a};throw a}}async updateUserById(e,a){oi(e);try{return await oe(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:a,headers:this.headers,xform:Hi})}catch(r){if(ne(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,a=!1){oi(e);try{return await oe(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:a},xform:Hi})}catch(r){if(ne(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){oi(e.userId);try{const{data:a,error:r}=await oe(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:a,error:r}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _deleteFactor(e){oi(e.userId),oi(e.id);try{return{data:await oe(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _listOAuthClients(e){var a,r,o,c,d,h,p;try{const g={nextPage:null,lastPage:0,total:0},y=await oe(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(a=e==null?void 0:e.page)===null||a===void 0?void 0:a.toString())!==null&&r!==void 0?r:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:qy});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(S=>{const T=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(S.split(";")[1].split("=")[1]);g[`${E}Page`]=T}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(ne(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _getOAuthClient(e){try{return await oe(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _updateOAuthClient(e,a){try{return await oe(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:a,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(ne(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await oe(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _regenerateOAuthClientSecret(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _listCustomProviders(e){try{const a={};return e!=null&&e.type&&(a.type=e.type),await oe(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:a,xform:r=>{var o;return{data:{providers:(o=r==null?void 0:r.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(a){if(ne(a))return{data:{providers:[]},error:a};throw a}}async _createCustomProvider(e){try{return await oe(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _getCustomProvider(e){try{return await oe(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _updateCustomProvider(e,a){try{return await oe(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:a,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(ne(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(e){try{return await oe(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _adminListPasskeys(e){jn(this.experimental),oi(e.userId);try{return await oe(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:a=>({data:a,error:null})})}catch(a){if(ne(a))return{data:null,error:a};throw a}}async _adminDeletePasskey(e){jn(this.experimental),oi(e.userId),oi(e.passkeyId);try{return await oe(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(a){if(ne(a))return{data:null,error:a};throw a}}}function Fy(t={}){return{getItem:e=>t[e]||null,setItem:(e,a)=>{t[e]=a},removeItem:e=>{delete t[e]}}}globalThis&&mx()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class U_ extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function B_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function yx(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function P_(t){return parseInt(t,16)}function V_(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function H_(t){var e;const{chainId:a,domain:r,expirationTime:o,issuedAt:c=new Date,nonce:d,notBefore:h,requestId:p,resources:g,scheme:y,uri:v,version:x}=t;{if(!Number.isInteger(a))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${a}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(d&&d.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`);if(!v)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(x!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${x}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const w=yx(t.address),S=y?`${y}://${r}`:r,T=t.statement?`${t.statement}
`:"",E=`${S} wants you to sign in with your Ethereum account:
${w}

${T}`;let _=`URI: ${v}
Version: ${x}
Chain ID: ${a}${d?`
Nonce: ${d}`:""}
Issued At: ${c.toISOString()}`;if(o&&(_+=`
Expiration Time: ${o.toISOString()}`),h&&(_+=`
Not Before: ${h.toISOString()}`),p&&(_+=`
Request ID: ${p}`),g){let N=`
Resources:`;for(const C of g){if(!C||typeof C!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${C}`);N+=`
- ${C}`}_+=N}return`${E}
${_}`}class ut extends Error{constructor({message:e,code:a,cause:r,name:o}){var c;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(c=o??(r instanceof Error?r.name:void 0))!==null&&c!==void 0?c:"Unknown Error",this.code=a}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class ic extends ut{constructor(e,a){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:a,message:e}),this.name="WebAuthnUnknownError",this.originalError=a}}function $_({error:t,options:e}){var a,r,o;const{publicKey:c}=e;if(!c)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ut({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((a=c.authenticatorSelection)===null||a===void 0?void 0:a.requireResidentKey)===!0)return new ut({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((r=c.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new ut({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((o=c.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new ut({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new ut({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new ut({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return c.pubKeyCredParams.filter(h=>h.type==="public-key").length===0?new ut({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new ut({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const d=window.location.hostname;if(vx(d)){if(c.rp.id!==d)return new ut({message:`The RP ID "${c.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ut({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(c.user.id.byteLength<1||c.user.id.byteLength>64)return new ut({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new ut({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ut({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function I_({error:t,options:e}){const{publicKey:a}=e;if(!a)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ut({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new ut({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const r=window.location.hostname;if(vx(r)){if(a.rpId!==r)return new ut({message:`The RP ID "${a.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ut({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new ut({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ut({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class q_{createNewAbortSignal(){if(this.controller){const a=new Error("Cancelling existing WebAuthn API call for new one");a.name="AbortError",this.controller.abort(a)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const $h=new q_;function Gy(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:a,excludeCredentials:r}=t,o=Sc(t,["challenge","user","excludeCredentials"]),c=wr(e).buffer,d=Object.assign(Object.assign({},a),{id:wr(a.id).buffer}),h=Object.assign(Object.assign({},o),{challenge:c,user:d});if(r&&r.length>0){h.excludeCredentials=new Array(r.length);for(let p=0;p<r.length;p++){const g=r[p];h.excludeCredentials[p]=Object.assign(Object.assign({},g),{id:wr(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return h}function Ky(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:a}=t,r=Sc(t,["challenge","allowCredentials"]),o=wr(e).buffer,c=Object.assign(Object.assign({},r),{challenge:o});if(a&&a.length>0){c.allowCredentials=new Array(a.length);for(let d=0;d<a.length;d++){const h=a[d];c.allowCredentials[d]=Object.assign(Object.assign({},h),{id:wr(h.id).buffer,type:h.type||"public-key",transports:h.transports})}}return c}function Yy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t;return{id:t.id,rawId:t.id,response:{attestationObject:va(new Uint8Array(t.response.attestationObject)),clientDataJSON:va(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Wy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const a=t,r=t.getClientExtensionResults(),o=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:va(new Uint8Array(o.authenticatorData)),clientDataJSON:va(new Uint8Array(o.clientDataJSON)),signature:va(new Uint8Array(o.signature)),userHandle:o.userHandle?va(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=a.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function vx(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function ac(){var t,e;return!!(Et()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function bx(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ic("Browser returned unexpected credential type",e)}:{data:null,error:new ic("Empty credential response",e)}}catch(e){return{data:null,error:$_({error:e,options:t})}}}async function xx(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ic("Browser returned unexpected credential type",e)}:{data:null,error:new ic("Empty credential response",e)}}catch(e){return{data:null,error:I_({error:e,options:t})}}}const F_={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},G_={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function rc(...t){const e=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),a=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),r={};for(const o of t)if(o)for(const c in o){const d=o[c];if(d!==void 0)if(Array.isArray(d))r[c]=d;else if(a(d))r[c]=d;else if(e(d)){const h=r[c];e(h)?r[c]=rc(h,d):r[c]=rc(d)}else r[c]=d}return r}function K_(t,e){return rc(F_,t,e||{})}function Y_(t,e){return rc(G_,t,e||{})}class W_{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:a,friendlyName:r,signal:o},c){var d;try{const{data:h,error:p}=await this.client.mfa.challenge({factorId:e,webauthn:a});if(!h)return{data:null,error:p};const g=o??$h.createNewAbortSignal();if(h.webauthn.type==="create"){const{user:y}=h.webauthn.credential_options.publicKey;if(!y.name){const v=r;if(v)y.name=`${y.id}:${v}`;else{const w=(await this.client.getUser()).data.user,S=((d=w==null?void 0:w.user_metadata)===null||d===void 0?void 0:d.name)||(w==null?void 0:w.email)||(w==null?void 0:w.id)||"User";y.name=`${y.id}:${S}`}}y.displayName||(y.displayName=y.name)}switch(h.webauthn.type){case"create":{const y=K_(h.webauthn.credential_options.publicKey,c==null?void 0:c.create),{data:v,error:x}=await bx({publicKey:y,signal:g});return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}case"request":{const y=Y_(h.webauthn.credential_options.publicKey,c==null?void 0:c.request),{data:v,error:x}=await xx(Object.assign(Object.assign({},h.webauthn.credential_options),{publicKey:y,signal:g}));return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}}}catch(h){return ne(h)?{data:null,error:h}:{data:null,error:new Tn("Unexpected error in challenge",h)}}}async _verify({challengeId:e,factorId:a,webauthn:r}){return this.client.mfa.verify({factorId:a,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new Ks("rpId is required for WebAuthn authentication")};try{if(!ac())return{data:null,error:new Tn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this.challenge({factorId:e,webauthn:{rpId:a,rpOrigins:r},signal:o},{request:c});if(!d)return{data:null,error:h};const{webauthn:p}=d;return this._verify({factorId:e,challengeId:d.challengeId,webauthn:{type:p.type,rpId:a,rpOrigins:r,credential_response:p.credential_response}})}catch(d){return ne(d)?{data:null,error:d}:{data:null,error:new Tn("Unexpected error in authenticate",d)}}}async _register({friendlyName:e,webauthn:{rpId:a=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!a)return{data:null,error:new Ks("rpId is required for WebAuthn registration")};try{if(!ac())return{data:null,error:new Tn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this._enroll({friendlyName:e});if(!d)return await this.client.mfa.listFactors().then(y=>{var v;return(v=y.data)===null||v===void 0?void 0:v.all.find(x=>x.factor_type==="webauthn"&&x.friendly_name===e&&x.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y==null?void 0:y.id}):void 0),{data:null,error:h};const{data:p,error:g}=await this._challenge({factorId:d.id,friendlyName:d.friendly_name,webauthn:{rpId:a,rpOrigins:r},signal:o},{create:c});return p?this._verify({factorId:d.id,challengeId:p.challengeId,webauthn:{rpId:a,rpOrigins:r,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:g}}catch(d){return ne(d)?{data:null,error:d}:{data:null,error:new Tn("Unexpected error in register",d)}}}}B_();const X_={url:Zk,storageKey:e_,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:t_,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},dr={};class Ys{get jwks(){var e,a;return(a=(e=dr[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&a!==void 0?a:{keys:[]}}set jwks(e){dr[this.storageKey]=Object.assign(Object.assign({},dr[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,a;return(a=(e=dr[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&a!==void 0?a:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){dr[this.storageKey]=Object.assign(Object.assign({},dr[this.storageKey]),{cachedAt:e})}constructor(e){var a,r,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const c=Object.assign(Object.assign({},X_),e);if(this.storageKey=c.storageKey,this.instanceID=(a=Ys.nextInstanceID[this.storageKey])!==null&&a!==void 0?a:0,Ys.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!c.debug,typeof c.debug=="function"&&(this.logger=c.debug),this.instanceID>0&&Et()){const d=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(d),this.logDebugMessages&&console.trace(d)}if(this.persistSession=c.persistSession,this.autoRefreshToken=c.autoRefreshToken,this.experimental=(r=c.experimental)!==null&&r!==void 0?r:{},this.admin=new z_({url:c.url,headers:c.headers,fetch:c.fetch,experimental:this.experimental}),this.url=c.url,this.headers=c.headers,this.fetch=gx(c.fetch),this.detectSessionInUrl=c.detectSessionInUrl,this.flowType=c.flowType,this.hasCustomAuthorizationHeader=c.hasCustomAuthorizationHeader,this.throwOnError=c.throwOnError,this.lockAcquireTimeout=c.lockAcquireTimeout,c.lock!=null&&(this.lock=c.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new W_(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(c.storage?this.storage=c.storage:mx()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Fy(this.memoryStorage)),c.userStorage&&(this.userStorage=c.userStorage)):(this.memoryStorage={},this.storage=Fy(this.memoryStorage)),Et()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(d){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",d)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async d=>{this._debug("received broadcast notification from other tab or client",d),(d.data.event==="TOKEN_REFRESHED"||d.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(d.data.event,d.data.session,!1)}catch(h){this._debug("#broadcastChannel","error",h)}})}c.skipAutoInitialize||this.initialize().catch(d=>{this._debug("#initialize()","error",d)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${hx}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let a={},r="none";if(Et()&&(a=g_(window.location.href),this._isImplicitGrantCallback(a)?r="implicit":await this._isPKCECallback(a)&&(r="pkce")),Et()&&this.detectSessionInUrl&&r!=="none"){const{data:o,error:c}=await this._getSessionFromURL(a,r);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),s_(c)){const p=(e=c.details)===null||e===void 0?void 0:e.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:c}}return{error:c}}const{session:d,redirectType:h}=o;return this._debug("#_initialize()","detected session in URL",d,"redirect type",h),await this._saveSession(d),setTimeout(async()=>{h==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",d):await this._notifyAllSubscribers("SIGNED_IN",d)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(a){return ne(a)?this._returnResult({error:a}):this._returnResult({error:new Tn("Unexpected error during initialization",a)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var a,r,o;try{const c=await oe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(o=e==null?void 0:e.options)===null||o===void 0?void 0:o.captchaToken}},xform:mn}),{data:d,error:h}=c;if(h||!d)return this._returnResult({data:{user:null,session:null},error:h});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(ne(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signUp(e){var a,r,o;try{let c;if("email"in e){const{email:y,password:v,options:x}=e;let w=null,S=null;this.flowType==="pkce"&&([w,S]=await ha(this.storage,this.storageKey)),c=await oe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:y,password:v,data:(a=x==null?void 0:x.data)!==null&&a!==void 0?a:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:w,code_challenge_method:S},xform:mn})}else if("phone"in e){const{phone:y,password:v,options:x}=e;c=await oe(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:v,data:(r=x==null?void 0:x.data)!==null&&r!==void 0?r:{},channel:(o=x==null?void 0:x.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:mn})}else throw new Nl("You must provide either an email or phone number and a password");const{data:d,error:h}=c;if(h||!d)return await it(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:h});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithPassword(e){try{let a;if("email"in e){const{email:c,password:d,options:h}=e;a=await oe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Iy})}else if("phone"in e){const{phone:c,password:d,options:h}=e;a=await oe(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Iy})}else throw new Nl("You must provide either an email or phone number and a password");const{data:r,error:o}=a;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!r||!r.session||!r.user){const c=new ur;return this._returnResult({data:{user:null,session:null},error:c})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:o})}catch(a){if(ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOAuth(e){var a,r,o,c;return await this._handleProviderSignIn(e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(c=e.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:a}=e;switch(a){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${a}"`)}}async signInWithEthereum(e){var a,r,o,c,d,h,p,g,y,v,x;let w,S;if("message"in e)w=e.message,S=e.signature;else{const{chain:T,wallet:E,statement:_,options:N}=e;let C;if(Et())if(typeof E=="object")C=E;else{const Q=window;if("ethereum"in Q&&typeof Q.ethereum=="object"&&"request"in Q.ethereum&&typeof Q.ethereum.request=="function")C=Q.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof E!="object"||!(N!=null&&N.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");C=E}const V=new URL((a=N==null?void 0:N.url)!==null&&a!==void 0?a:window.location.href),Y=await C.request({method:"eth_requestAccounts"}).then(Q=>Q).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!Y||Y.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const J=yx(Y[0]);let M=(r=N==null?void 0:N.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!M){const Q=await C.request({method:"eth_chainId"});M=P_(Q)}const H={domain:V.host,address:J,statement:_,uri:V.href,version:"1",chainId:M,nonce:(o=N==null?void 0:N.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(d=(c=N==null?void 0:N.signInWithEthereum)===null||c===void 0?void 0:c.issuedAt)!==null&&d!==void 0?d:new Date,expirationTime:(h=N==null?void 0:N.signInWithEthereum)===null||h===void 0?void 0:h.expirationTime,notBefore:(p=N==null?void 0:N.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(g=N==null?void 0:N.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(y=N==null?void 0:N.signInWithEthereum)===null||y===void 0?void 0:y.resources};w=H_(H),S=await C.request({method:"personal_sign",params:[V_(w),J]})}try{const{data:T,error:E}=await oe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:S},!((v=e.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(x=e.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:mn});if(E)throw E;if(!T||!T.session||!T.user){const _=new ur;return this._returnResult({data:{user:null,session:null},error:_})}return T.session&&(await this._saveSession(T.session),await this._notifyAllSubscribers("SIGNED_IN",T.session)),this._returnResult({data:Object.assign({},T),error:E})}catch(T){if(ne(T))return this._returnResult({data:{user:null,session:null},error:T});throw T}}async signInWithSolana(e){var a,r,o,c,d,h,p,g,y,v,x,w;let S,T;if("message"in e)S=e.message,T=e.signature;else{const{chain:E,wallet:_,statement:N,options:C}=e;let V;if(Et())if(typeof _=="object")V=_;else{const J=window;if("solana"in J&&typeof J.solana=="object"&&("signIn"in J.solana&&typeof J.solana.signIn=="function"||"signMessage"in J.solana&&typeof J.solana.signMessage=="function"))V=J.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof _!="object"||!(C!=null&&C.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");V=_}const Y=new URL((a=C==null?void 0:C.url)!==null&&a!==void 0?a:window.location.href);if("signIn"in V&&V.signIn){const J=await V.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},C==null?void 0:C.signInWithSolana),{version:"1",domain:Y.host,uri:Y.href}),N?{statement:N}:null));let M;if(Array.isArray(J)&&J[0]&&typeof J[0]=="object")M=J[0];else if(J&&typeof J=="object"&&"signedMessage"in J&&"signature"in J)M=J;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in M&&"signature"in M&&(typeof M.signedMessage=="string"||M.signedMessage instanceof Uint8Array)&&M.signature instanceof Uint8Array)S=typeof M.signedMessage=="string"?M.signedMessage:new TextDecoder().decode(M.signedMessage),T=M.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in V)||typeof V.signMessage!="function"||!("publicKey"in V)||typeof V!="object"||!V.publicKey||!("toBase58"in V.publicKey)||typeof V.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");S=[`${Y.host} wants you to sign in with your Solana account:`,V.publicKey.toBase58(),...N?["",N,""]:[""],"Version: 1",`URI: ${Y.href}`,`Issued At: ${(o=(r=C==null?void 0:C.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((c=C==null?void 0:C.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${C.signInWithSolana.notBefore}`]:[],...!((d=C==null?void 0:C.signInWithSolana)===null||d===void 0)&&d.expirationTime?[`Expiration Time: ${C.signInWithSolana.expirationTime}`]:[],...!((h=C==null?void 0:C.signInWithSolana)===null||h===void 0)&&h.chainId?[`Chain ID: ${C.signInWithSolana.chainId}`]:[],...!((p=C==null?void 0:C.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${C.signInWithSolana.nonce}`]:[],...!((g=C==null?void 0:C.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${C.signInWithSolana.requestId}`]:[],...!((v=(y=C==null?void 0:C.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||v===void 0)&&v.length?["Resources",...C.signInWithSolana.resources.map(M=>`- ${M}`)]:[]].join(`
`);const J=await V.signMessage(new TextEncoder().encode(S),"utf8");if(!J||!(J instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");T=J}}try{const{data:E,error:_}=await oe(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:S,signature:va(T)},!((x=e.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(w=e.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:mn});if(_)throw _;if(!E||!E.session||!E.user){const N=new ur;return this._returnResult({data:{user:null,session:null},error:N})}return E.session&&(await this._saveSession(E.session),await this._notifyAllSubscribers("SIGNED_IN",E.session)),this._returnResult({data:Object.assign({},E),error:_})}catch(E){if(ne(E))return this._returnResult({data:{user:null,session:null},error:E});throw E}}async _exchangeCodeForSession(e){const a=await wn(this.storage,`${this.storageKey}-code-verifier`),[r,o]=(a??"").split("/");try{if(!r&&this.flowType==="pkce")throw new o_;const{data:c,error:d}=await oe(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:mn});if(await it(this.storage,`${this.storageKey}-code-verifier`),d)throw d;if(!c||!c.session||!c.user){const h=new ur;return this._returnResult({data:{user:null,session:null,redirectType:null},error:h})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:o??null}),error:d})}catch(c){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:a,provider:r,token:o,access_token:c,nonce:d}=e,h=await oe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:o,access_token:c,nonce:d,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:mn}),{data:p,error:g}=h;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p||!p.session||!p.user){const y=new ur;return this._returnResult({data:{user:null,session:null},error:y})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:g})}catch(a){if(ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithOtp(e){var a,r,o,c,d;try{if("email"in e){const{email:h,options:p}=e;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await ha(this.storage,this.storageKey));const{error:v}=await oe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:h,data:(a=p==null?void 0:p.data)!==null&&a!==void 0?a:{},create_user:(r=p==null?void 0:p.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:y},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:v})}if("phone"in e){const{phone:h,options:p}=e,{data:g,error:y}=await oe(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:h,data:(o=p==null?void 0:p.data)!==null&&o!==void 0?o:{},create_user:(c=p==null?void 0:p.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(d=p==null?void 0:p.channel)!==null&&d!==void 0?d:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:y})}throw new Nl("You must provide either an email or phone number.")}catch(h){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(h))return this._returnResult({data:{user:null,session:null},error:h});throw h}}async verifyOtp(e){var a,r;try{let o,c;"options"in e&&(o=(a=e.options)===null||a===void 0?void 0:a.redirectTo,c=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:d,error:h}=await oe(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:c}}),redirectTo:o,xform:mn});if(h)throw h;if(!d)throw new Error("An error occurred on token verification.");const p=d.session,g=d.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(o){if(ne(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(e){var a,r,o,c,d;try{let h=null,p=null;this.flowType==="pkce"&&([h,p]=await ha(this.storage,this.storageKey));const g=await oe(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(a=e.options)===null||a===void 0?void 0:a.redirectTo)!==null&&r!==void 0?r:void 0}),!((o=e==null?void 0:e.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:h,code_challenge_method:p}),headers:this.headers,xform:D_});return!((c=g.data)===null||c===void 0)&&c.url&&Et()&&!(!((d=e.options)===null||d===void 0)&&d.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(h){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(h))return this._returnResult({data:null,error:h});throw h}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)throw r;if(!a)throw new vt;const{error:o}=await oe(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:a.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(e){if(ne(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const a=`${this.url}/resend`;if("email"in e){const{email:r,type:o,options:c}=e;let d=null,h=null;this.flowType==="pkce"&&([d,h]=await ha(this.storage,this.storageKey));const{error:p}=await oe(this.fetch,"POST",a,{headers:this.headers,body:{email:r,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:d,code_challenge_method:h},redirectTo:c==null?void 0:c.emailRedirectTo});return p&&await it(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in e){const{phone:r,type:o,options:c}=e,{data:d,error:h}=await oe(this.fetch,"POST",a,{headers:this.headers,body:{phone:r,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:h})}throw new Nl("You must provide either an email or phone number and a type")}catch(a){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,a){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await r,await a()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=a();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const a=await this.__loadSession();return await e(a)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const a=await wn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",a),a!==null&&(this._isValidSession(a)?e=a:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<nh:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const d=await wn(this.userStorage,this.storageKey+"-user");d!=null&&d.user?e.user=d.user:e.user=ih()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const d={value:this.suppressGetSessionWarning};e.user=C_(e.user,d),d.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);if(c){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const h=await wn(this.storage,this.storageKey);if(h&&h.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:c})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let a;return this.lock!=null?a=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):a=await this._getUser(),a.data.user&&(this.suppressGetSessionWarning=!0),a}async _getUser(e){try{return e?await oe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Hi}):await this._useSession(async a=>{var r,o,c;const{data:d,error:h}=a;if(h)throw h;return!(!((r=d.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new vt}:await oe(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(o=d.session)===null||o===void 0?void 0:o.access_token)!==null&&c!==void 0?c:void 0,xform:Hi})})}catch(a){if(ne(a))return Rl(a)&&(await this._removeSession(),await it(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:a});throw a}}async updateUser(e,a={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,a)):await this._updateUser(e,a)}async _updateUser(e,a={}){try{return await this._useSession(async r=>{const{data:o,error:c}=r;if(c)throw c;if(!o.session)throw new vt;const d=o.session;let h=null,p=null;this.flowType==="pkce"&&e.email!=null&&([h,p]=await ha(this.storage,this.storageKey));const{data:g,error:y}=await oe(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:a==null?void 0:a.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:h,code_challenge_method:p}),jwt:d.access_token,xform:Hi});if(y)throw y;return d.user=g.user,await this._saveSession(d),await this._notifyAllSubscribers("USER_UPDATED",d),this._returnResult({data:{user:d.user},error:null})})}catch(r){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new vt;const a=Date.now()/1e3;let r=a,o=!0,c=null;const{payload:d}=Dl(e.access_token);if(d.exp&&(r=d.exp,o=r<=a),o){const{data:h,error:p}=await this._callRefreshToken(e.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!h)return{data:{user:null,session:null},error:null};c=h}else{const{data:h,error:p}=await this._getUser(e.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});c={access_token:e.access_token,refresh_token:e.refresh_token,user:h.user,token_type:"bearer",expires_in:r-a,expires_at:r},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return this._returnResult({data:{user:c.user,session:c},error:null})}catch(a){if(ne(a))return this._returnResult({data:{session:null,user:null},error:a});throw a}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async a=>{var r;if(!e){const{data:d,error:h}=a;if(h)throw h;e=(r=d.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new vt;const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);return c?this._returnResult({data:{user:null,session:null},error:c}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(a){if(ne(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async _getSessionFromURL(e,a){var r;try{if(!Et())throw new Ol("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Ol(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(a){case"implicit":if(this.flowType==="pkce")throw new Ly("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Ol("Not a valid implicit grant flow url.");break;default:}if(a==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ly("No code detected.");const{data:C,error:V}=await this._exchangeCodeForSession(e.code);if(V)throw V;const Y=new URL(window.location.href);return Y.searchParams.delete("code"),window.history.replaceState(window.history.state,"",Y.toString()),{data:{session:C.session,redirectType:(r=C.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:o,provider_refresh_token:c,access_token:d,refresh_token:h,expires_in:p,expires_at:g,token_type:y}=e;if(!d||!p||!h||!y)throw new Ol("No session defined in URL");const v=Math.round(Date.now()/1e3),x=parseInt(p);let w=v+x;g&&(w=parseInt(g));const S=w-v;S*1e3<=hi&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${x}s`);const T=w-x;v-T>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",T,w,v):v-T<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",T,w,v);const{data:E,error:_}=await this._getUser(d);if(_)throw _;const N={provider_token:o,provider_refresh_token:c,access_token:d,expires_in:x,expires_at:w,refresh_token:h,token_type:y,user:E.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:N,redirectType:e.type},error:null})}catch(o){if(ne(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const a=await wn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&a)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async a=>{var r;const{data:o,error:c}=a;if(c&&!Rl(c))return this._returnResult({error:c});const d=(r=o.session)===null||r===void 0?void 0:r.access_token;if(d){const{error:h}=await this.admin.signOut(d,e);if(h&&!(r_(h)&&(h.status===404||h.status===401||h.status===403)||Rl(h)))return this._returnResult({error:h})}return e!=="others"&&(await this._removeSession(),await it(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const a=m_(),r={id:a,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",a),this.stateChangeEmitters.delete(a)}};return this._debug("#onAuthStateChange()","registered callback with id",a),this.stateChangeEmitters.set(a,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(a)}):await this._emitInitialSession(a)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async a=>{var r,o;try{const{data:{session:c},error:d}=a;if(d)throw d;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",e,"session",c)}catch(c){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",c),Rl(c)?console.warn(c):console.error(c)}})}async resetPasswordForEmail(e,a={}){let r=null,o=null;this.flowType==="pkce"&&([r,o]=await ha(this.storage,this.storageKey,!0));try{return await oe(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:o,gotrue_meta_security:{captcha_token:a.captchaToken}},headers:this.headers,redirectTo:a.redirectTo})}catch(c){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:null,error:c});throw c}}async getUserIdentities(){var e;try{const{data:a,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=a.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var a;try{const{data:r,error:o}=await this._useSession(async c=>{var d,h,p,g,y;const{data:v,error:x}=c;if(x)throw x;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(d=e.options)===null||d===void 0?void 0:d.redirectTo,scopes:(h=e.options)===null||h===void 0?void 0:h.scopes,queryParams:(p=e.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await oe(this.fetch,"GET",w,{headers:this.headers,jwt:(y=(g=v.session)===null||g===void 0?void 0:g.access_token)!==null&&y!==void 0?y:void 0})});if(o)throw o;return Et()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(ne(r))return this._returnResult({data:{provider:e.provider,url:null},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async a=>{var r;try{const{error:o,data:{session:c}}=a;if(o)throw o;const{options:d,provider:h,token:p,access_token:g,nonce:y}=e,v=await oe(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=c==null?void 0:c.access_token)!==null&&r!==void 0?r:void 0,body:{provider:h,id_token:p,access_token:g,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:mn}),{data:x,error:w}=v;return w?this._returnResult({data:{user:null,session:null},error:w}):!x||!x.session||!x.user?this._returnResult({data:{user:null,session:null},error:new ur}):(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("USER_UPDATED",x.session)),this._returnResult({data:x,error:w}))}catch(o){if(await it(this.storage,`${this.storageKey}-code-verifier`),ne(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(e){try{return await this._useSession(async a=>{var r,o;const{data:c,error:d}=a;if(d)throw d;return await oe(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(r=c.session)===null||r===void 0?void 0:r.access_token)!==null&&o!==void 0?o:void 0})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _refreshAccessToken(e){const a="#_refreshAccessToken()";this._debug(a,"begin");try{const r=Date.now();return await b_(async o=>(o>0&&await v_(200*Math.pow(2,o-1)),this._debug(a,"refreshing attempt",o),await oe(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:mn})),(o,c)=>{const d=200*Math.pow(2,o);return c&&My(c)&&Date.now()+d-r<hi})}catch(r){if(this._debug(a,"error",r),ne(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(a,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,a){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:a.redirectTo,scopes:a.scopes,queryParams:a.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",a,"url",r),Et()&&!a.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,a;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const o=await wn(this.storage,this.storageKey);if(o&&this.userStorage){let d=await wn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!d&&(d={user:o.user},await mr(this.userStorage,this.storageKey+"-user",d)),o.user=(e=d==null?void 0:d.user)!==null&&e!==void 0?e:ih()}else if(o&&!o.user&&!o.user){const d=await wn(this.storage,this.storageKey+"-user");d&&(d!=null&&d.user)?(o.user=d.user,await it(this.storage,this.storageKey+"-user"),await mr(this.storage,this.storageKey,o)):o.user=ih()}if(this._debug(r,"session from storage",o),!this._isValidSession(o)){this._debug(r,"session is not valid"),o!==null&&await this._removeSession();return}const c=((a=o.expires_at)!==null&&a!==void 0?a:1/0)*1e3-Date.now()<nh;if(this._debug(r,`session has${c?"":" not"} expired with margin of ${nh}s`),c){if(this.autoRefreshToken&&o.refresh_token){const{error:d}=await this._callRefreshToken(o.refresh_token);d&&(l_(d)?this._debug(r,"refresh discarded by commit guard",d):this._debug(r,"refresh failed",d))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:d,error:h}=await this._getUser(o.access_token);!h&&(d!=null&&d.user)?(o.user=d.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(d){console.error("Error getting user data:",d),this._debug(r,"error getting user data, skipping SIGNED_IN notification",d)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(r,"error",o),console.error(o);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var a,r;if(!e)throw new vt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new _c;const c=await wn(this.storage,this.storageKey),{data:d,error:h}=await this._refreshAccessToken(e);if(h)throw h;if(!d.session)throw new vt;const p=await wn(this.storage,this.storageKey);if(c!==null&&(p===null||p.refresh_token!==c.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const x={data:null,error:new zy};return this.refreshingDeferred.resolve(x),x}const y=this._sessionRemovalEpoch;if(await this._saveSession(d.session),this._sessionRemovalEpoch!==y){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await it(this.storage,this.storageKey),this.userStorage&&await it(this.userStorage,this.storageKey+"-user");const x={data:null,error:new zy};return this.refreshingDeferred.resolve(x),x}await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const v={data:d.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(v),v}catch(c){if(this._debug(o,"error",c),ne(c)){const d={data:null,error:c};if(!My(c)){const h=await wn(this.storage,this.storageKey);!!(h!=null&&h.expires_at&&h.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:d,expiresAt:Date.now()+Qk},(a=this.refreshingDeferred)===null||a===void 0||a.resolve(d),d}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(c),c}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,a,r=!0){const o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",a,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:a});const c=[],d=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(e,a)}catch(p){c.push(p)}});if(await Promise.all(d),c.length>0){for(let h=0;h<c.length;h+=1)console.error(c[h]);throw c[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await it(this.storage,`${this.storageKey}-code-verifier`);const a=Object.assign({},e),r=a.user&&a.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&a.user&&await mr(this.userStorage,this.storageKey+"-user",{user:a.user});const o=Object.assign({},a);delete o.user;const c=Hy(o);await mr(this.storage,this.storageKey,c)}else{const o=Hy(a);await mr(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await it(this.storage,this.storageKey),await it(this.storage,this.storageKey+"-code-verifier"),await it(this.storage,this.storageKey+"-user"),this.userStorage&&await it(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&Et()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(a){console.error("removing visibilitychange callback failed",a)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),hi);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const a=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=a,a&&typeof a=="object"&&typeof a.unref=="function"?a.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(a)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const a=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,a&&clearTimeout(a)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async a=>{const{data:{session:r}}=a;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/hi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${hi}ms, refresh threshold is ${Os} ticks`),o<=Os&&await this._callRefreshToken(r.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof U_)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async a=>{const{data:{session:r}}=a;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/hi);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${hi}ms, refresh threshold is ${Os} ticks`),o<=Os&&await this._callRefreshToken(r.refresh_token)})}catch(a){console.error("Auto refresh tick failed with error. This is likely a transient error.",a)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!Et()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const a=`#_onVisibilityChanged(${e})`;if(this._debug(a,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(a,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(a,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,a,r){const o=[`provider=${encodeURIComponent(a)}`];if(r!=null&&r.redirectTo&&o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&o.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[c,d]=await ha(this.storage,this.storageKey),h=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(d)}`});o.push(h.toString())}if(r!=null&&r.queryParams){const c=new URLSearchParams(r.queryParams);o.push(c.toString())}return r!=null&&r.skipBrowserRedirect&&o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async a=>{var r;const{data:o,error:c}=a;return c?this._returnResult({data:null,error:c}):await oe(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _enroll(e){try{return await this._useSession(async a=>{var r,o;const{data:c,error:d}=a;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:p,error:g}=await oe(this.fetch,"POST",`${this.url}/factors`,{body:h,headers:this.headers,jwt:(r=c==null?void 0:c.session)===null||r===void 0?void 0:r.access_token});return g?this._returnResult({data:null,error:g}):(e.factorType==="totp"&&p.type==="totp"&&(!((o=p==null?void 0:p.totp)===null||o===void 0)&&o.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _verify(e){const a=async()=>{try{return await this._useSession(async r=>{var o;const{data:c,error:d}=r;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Yy(e.webauthn.credential_response):Wy(e.webauthn.credential_response)})}:{code:e.code}),{data:p,error:g}=await oe(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:h,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challenge(e){const a=async()=>{try{return await this._useSession(async r=>{var o;const{data:c,error:d}=r;if(d)return this._returnResult({data:null,error:d});const h=await oe(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});if(h.error)return h;const{data:p}=h;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Gy(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Ky(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,a):a()}async _challengeAndVerify(e){const{data:a,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:a.id,code:e.code})}async _listFactors(){var e;const{data:{user:a},error:r}=await this.getUser();if(r)return{data:null,error:r};const o={all:[],phone:[],totp:[],webauthn:[]};for(const c of(e=a==null?void 0:a.factors)!==null&&e!==void 0?e:[])o.all.push(c),c.status==="verified"&&o[c.factor_type].push(c);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(e){var a,r,o,c;if(e)try{const{payload:w}=Dl(e);let S=null;w.aal&&(S=w.aal);let T=S;const{data:{user:E},error:_}=await this.getUser(e);if(_)return this._returnResult({data:null,error:_});((r=(a=E==null?void 0:E.factors)===null||a===void 0?void 0:a.filter(V=>V.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(T="aal2");const C=w.amr||[];return{data:{currentLevel:S,nextLevel:T,currentAuthenticationMethods:C},error:null}}catch(w){if(ne(w))return this._returnResult({data:null,error:w});throw w}const{data:{session:d},error:h}=await this.getSession();if(h)return this._returnResult({data:null,error:h});if(!d)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=Dl(d.access_token);let g=null;p.aal&&(g=p.aal);let y=g;((c=(o=d.user.factors)===null||o===void 0?void 0:o.filter(w=>w.status==="verified"))!==null&&c!==void 0?c:[]).length>0&&(y="aal2");const x=p.amr||[];return{data:{currentLevel:g,nextLevel:y,currentAuthenticationMethods:x},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;return o?this._returnResult({data:null,error:o}):r?await oe(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new vt})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _approveAuthorization(e,a){try{return await this._useSession(async r=>{const{data:{session:o},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new vt});const d=await oe(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&Et()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,a){try{return await this._useSession(async r=>{const{data:{session:o},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new vt});const d=await oe(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&Et()&&!(a!=null&&a.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;return r?this._returnResult({data:null,error:r}):a?await oe(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:a.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new vt})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;return o?this._returnResult({data:null,error:o}):r?(await oe(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new vt})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async fetchJwk(e,a={keys:[]}){let r=a.keys.find(h=>h.kid===e);if(r)return r;const o=Date.now();if(r=this.jwks.keys.find(h=>h.kid===e),r&&this.jwks_cached_at+i_>o)return r;const{data:c,error:d}=await oe(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(d)throw d;return!c.keys||c.keys.length===0||(this.jwks=c,this.jwks_cached_at=o,r=c.keys.find(h=>h.kid===e),!r)?null:r}async getClaims(e,a={}){try{let r=e;if(!r){const{data:w,error:S}=await this.getSession();if(S||!w.session)return this._returnResult({data:null,error:S});r=w.session.access_token}const{header:o,payload:c,signature:d,raw:{header:h,payload:p}}=Dl(r);if(!(a!=null&&a.allowExpired))try{T_(c.exp)}catch(w){throw new tc(w instanceof Error?w.message:"JWT validation failed")}const g=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,a!=null&&a.keys?{keys:a.keys}:a==null?void 0:a.jwks);if(!g){const{error:w}=await this.getUser(r);if(w)throw w;return{data:{claims:c,header:o,signature:d},error:null}}const y=E_(o.alg),v=await crypto.subtle.importKey("jwk",g,y,!0,["verify"]);if(!await crypto.subtle.verify(y,v,d,f_(`${h}.${p}`)))throw new tc("Invalid JWT signature");return{data:{claims:c,header:o,signature:d},error:null}}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var a,r,o;jn(this.experimental);try{if(!ac())return this._returnResult({data:null,error:new Tn("Browser does not support WebAuthn",null)});const{data:c,error:d}=await this._startPasskeyAuthentication({options:{captchaToken:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}});if(d||!c)return this._returnResult({data:null,error:d});const h=Ky(c.options),p=(o=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&o!==void 0?o:$h.createNewAbortSignal(),{data:g,error:y}=await xx({publicKey:h,signal:p});if(y||!g)return this._returnResult({data:null,error:y??new Tn("WebAuthn ceremony failed",null)});const v=Wy(g);return this._verifyPasskeyAuthentication({challengeId:c.challenge_id,credential:v})}catch(c){if(ne(c))return this._returnResult({data:null,error:c});throw c}}async registerPasskey(e){var a,r;jn(this.experimental);try{if(!ac())return this._returnResult({data:null,error:new Tn("Browser does not support WebAuthn",null)});const{data:o,error:c}=await this._startPasskeyRegistration();if(c||!o)return this._returnResult({data:null,error:c});const d=Gy(o.options),h=(r=(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.signal)!==null&&r!==void 0?r:$h.createNewAbortSignal(),{data:p,error:g}=await bx({publicKey:d,signal:h});if(g||!p)return this._returnResult({data:null,error:g??new Tn("WebAuthn ceremony failed",null)});const y=Yy(p);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:y})}catch(o){if(ne(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){jn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!a)return this._returnResult({data:null,error:new vt});const{data:o,error:c}=await oe(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:a.access_token,body:{}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){jn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new vt});const{data:c,error:d}=await oe(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _startPasskeyAuthentication(e){var a;jn(this.experimental);try{const{data:r,error:o}=await oe(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(a=e==null?void 0:e.options)===null||a===void 0?void 0:a.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:r,error:null})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){jn(this.experimental);try{const{data:a,error:r}=await oe(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:mn});return r?this._returnResult({data:null,error:r}):(a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",a.session)),this._returnResult({data:a,error:null}))}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _listPasskeys(){jn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:a},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!a)return this._returnResult({data:null,error:new vt});const{data:o,error:c}=await oe(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:a.access_token,xform:d=>({data:d,error:null})});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){jn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new vt});const{data:c,error:d}=await oe(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}async _deletePasskey(e){jn(this.experimental);try{return await this._useSession(async a=>{const{data:{session:r},error:o}=a;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new vt});const{error:c}=await oe(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return c?this._returnResult({data:null,error:c}):this._returnResult({data:null,error:null})})}catch(a){if(ne(a))return this._returnResult({data:null,error:a});throw a}}}Ys.nextInstanceID={};const J_=Ys,Q_="2.108.2";let Ds="",sc;if(typeof Deno<"u"){var rh;Ds="deno",sc=(rh=Deno.version)===null||rh===void 0?void 0:rh.deno}else if(typeof document<"u")Ds="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Ds="react-native";else{var sh;Ds="node",sc=typeof process<"u"?(sh=process.version)===null||sh===void 0?void 0:sh.replace(/^v/,""):void 0}const wx=[`runtime=${Ds}`];sc&&wx.push(`runtime-version=${sc}`);const Z_={"X-Client-Info":`supabase-js/${Q_}; ${wx.join("; ")}`},eT={headers:Z_},tT={schema:"public"},nT={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},iT={},aT={enabled:!1,respectSamplingDecision:!0};function rT(t,e,a,r){function o(c){return c instanceof a?c:new a(function(d){d(c)})}return new(a||(a=Promise))(function(c,d){function h(y){try{g(r.next(y))}catch(v){d(v)}}function p(y){try{g(r.throw(y))}catch(v){d(v)}}function g(y){y.done?c(y.value):o(y.value).then(h,p)}g((r=r.apply(t,[])).next())})}let oh=null;const sT="@opentelemetry/api";function oT(){return oh===null&&(oh=import(sT).catch(()=>null)),oh}function lT(){return rT(this,void 0,void 0,function*(){try{const t=yield oT();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const a=e.traceparent;return a?{traceparent:a,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function cT(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[a,r,o,c]=e;if(a.length!==2||r.length!==32||o.length!==16||c.length!==2)return null;const d=/^[0-9a-f]+$/i;return!d.test(a)||!d.test(r)||!d.test(o)||!d.test(c)||r==="00000000000000000000000000000000"||o==="0000000000000000"?null:{version:a,traceId:r,parentId:o,traceFlags:c,isSampled:(parseInt(c,16)&1)===1}}function uT(t,e){if(!t||!e||e.length===0)return!1;let a;if(t instanceof URL)a=t;else try{a=new URL(t)}catch{return!1}for(const r of e)try{if(typeof r=="string"){if(dT(a.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(a.hostname))return!0}else if(typeof r=="function"&&r(a))return!0}catch{continue}return!1}function dT(t,e){if(e===t)return!0;if(e.startsWith("*.")){const a=e.slice(2);if(t.endsWith(a)&&(t===a||t.endsWith("."+a)))return!0}return!1}function hT(t){const e=[];try{const a=new URL(t);e.push(a.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Ws(t){"@babel/helpers - typeof";return Ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ws(t)}function fT(t,e){if(Ws(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var r=a.call(t,e);if(Ws(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pT(t){var e=fT(t,"string");return Ws(e)=="symbol"?e:e+""}function mT(t,e,a){return(e=pT(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Xy(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),a.push.apply(a,r)}return a}function Ze(t){for(var e=1;e<arguments.length;e++){var a=arguments[e]!=null?arguments[e]:{};e%2?Xy(Object(a),!0).forEach(function(r){mT(t,r,a[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):Xy(Object(a)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(a,r))})}return t}const gT=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),yT=()=>Headers,vT=(t,e,a,r,o)=>{const c=gT(r),d=yT(),h=(o==null?void 0:o.enabled)===!0,p=(o==null?void 0:o.respectSamplingDecision)!==!1,g=h?hT(e):null;return async(y,v)=>{var x;const w=(x=await a())!==null&&x!==void 0?x:t;let S=new d(v==null?void 0:v.headers);if(S.has("apikey")||S.set("apikey",t),S.has("Authorization")||S.set("Authorization",`Bearer ${w}`),g){const T=await bT(y,g,p);T&&(T.traceparent&&!S.has("traceparent")&&S.set("traceparent",T.traceparent),T.tracestate&&!S.has("tracestate")&&S.set("tracestate",T.tracestate),T.baggage&&!S.has("baggage")&&S.set("baggage",T.baggage))}return c(y,Ze(Ze({},v),{},{headers:S}))}};async function bT(t,e,a){if(!uT(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=await lT();if(!r||!r.traceparent)return null;if(a){const o=cT(r.traceparent);if(o&&!o.isSampled)return null}return r}function Jy(t){return typeof t=="boolean"?{enabled:t}:t}function xT(t){return t.endsWith("/")?t:t+"/"}function wT(t,e){var a,r,o,c,d,h;const{db:p,auth:g,realtime:y,global:v}=t,{db:x,auth:w,realtime:S,global:T}=e,E=Jy(t.tracePropagation),_=Jy(e.tracePropagation),N={db:Ze(Ze({},x),p),auth:Ze(Ze({},w),g),realtime:Ze(Ze({},S),y),storage:{},global:Ze(Ze(Ze({},T),v),{},{headers:Ze(Ze({},(a=T==null?void 0:T.headers)!==null&&a!==void 0?a:{}),(r=v==null?void 0:v.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(o=(c=E==null?void 0:E.enabled)!==null&&c!==void 0?c:_==null?void 0:_.enabled)!==null&&o!==void 0?o:!1,respectSamplingDecision:(d=(h=E==null?void 0:E.respectSamplingDecision)!==null&&h!==void 0?h:_==null?void 0:_.respectSamplingDecision)!==null&&d!==void 0?d:!0},accessToken:async()=>""};return t.accessToken?N.accessToken=t.accessToken:delete N.accessToken,N}function ST(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(xT(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var jT=class extends J_{constructor(t){super(t)}},kT=class{constructor(t,e,a){var r,o;this.supabaseUrl=t,this.supabaseKey=e;const c=ST(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const d=`sb-${c.hostname.split(".")[0]}-auth-token`,h={db:tT,realtime:iT,auth:Ze(Ze({},nT),{},{storageKey:d}),global:eT,tracePropagation:aT},p=wT(a??{},h);if(this.settings=p,this.storageKey=(r=p.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(o=p.global.headers)!==null&&o!==void 0?o:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(y,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=p.auth)!==null&&g!==void 0?g:{},this.headers,p.global.fetch)}this.fetch=vT(e,t,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(Ze({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new Bj(new URL("rest/v1",c).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new Jk(this.storageUrl.href,this.headers,this.fetch,a==null?void 0:a.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new Cj(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},a={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,a)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,a;if(t.accessToken)return await t.accessToken();const{data:r}=await t.auth.getSession();return(e=(a=r.session)===null||a===void 0?void 0:a.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:r,userStorage:o,storageKey:c,flowType:d,lock:h,debug:p,throwOnError:g,experimental:y,lockAcquireTimeout:v,skipAutoInitialize:x},w,S){const T={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new jT({url:this.authUrl.href,headers:Ze(Ze({},T),w),storageKey:c,autoRefreshToken:t,persistSession:e,detectSessionInUrl:a,storage:r,userStorage:o,flowType:d,lock:h,debug:p,throwOnError:g,experimental:y,fetch:S,lockAcquireTimeout:v,skipAutoInitialize:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(E=>E.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new xk(this.realtimeUrl.href,Ze(Ze({},t),{},{params:Ze(Ze({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,a){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==a?(this.changedAccessToken=a,this.realtime.setAuth(a)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const _T=(t,e,a)=>new kT(t,e,a);function TT(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const a=e.match(/^v(\d+)\./);return a?parseInt(a[1],10)<=18:!1}TT()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const ET="https://nestgoiyryhcmwtdeoou.supabase.co",AT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3Rnb2l5cnloY213dGRlb291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNjI3MTUsImV4cCI6MjA5NzczODcxNX0.TJv9KqIl-2TZFsaEB3Lr0TzWKGR9GG1pE6abmr1FwYw",te=_T(ET,AT,{auth:{persistSession:!0,autoRefreshToken:!0,detectSessionInUrl:!0}}),Qy=t=>{let e;const a=new Set,r=(g,y)=>{const v=typeof g=="function"?g(e):g;if(!Object.is(v,e)){const x=e;e=y??(typeof v!="object"||v===null)?v:Object.assign({},e,v),a.forEach(w=>w(e,x))}},o=()=>e,h={setState:r,getState:o,getInitialState:()=>p,subscribe:g=>(a.add(g),()=>a.delete(g))},p=e=t(r,o,h);return h},CT=(t=>t?Qy(t):Qy),RT=t=>t;function NT(t,e=RT){const a=Rs.useSyncExternalStore(t.subscribe,Rs.useCallback(()=>e(t.getState()),[t,e]),Rs.useCallback(()=>e(t.getInitialState()),[t,e]));return Rs.useDebugValue(a),a}const Zy=t=>{const e=CT(t),a=r=>NT(e,r);return Object.assign(a,e),a},Fi=(t=>t?Zy(t):Zy),mt=Fi((t,e)=>({user:null,session:null,profile:null,isLoading:!0,error:null,_authListener:null,initialize:async()=>{var a;try{const{_authListener:r}=e();r&&(r(),t({_authListener:null}));const o=new Promise((g,y)=>setTimeout(()=>y(new Error("Auth request timed out")),8e3)),c=await Promise.race([te.auth.getSession(),o]),{data:{session:d},error:h}=c;if(h)throw h;if(d){let{data:g}=await te.from("profiles").select("*").eq("id",d.user.id).single();if(!g){const y=((a=d.user.email)==null?void 0:a.split("@")[0])||"user",{data:v}=await te.from("profiles").insert({id:d.user.id,username:y,display_name:y}).select().single();g=v}t({user:d.user,session:d,profile:g,isLoading:!1})}else t({user:null,session:null,profile:null,isLoading:!1});const p=te.auth.onAuthStateChange(async(g,y)=>{var v;if(y){let{data:x}=await te.from("profiles").select("*").eq("id",y.user.id).single();if(!x){const w=((v=y.user.email)==null?void 0:v.split("@")[0])||"user",{data:S}=await te.from("profiles").insert({id:y.user.id,username:w,display_name:w}).select().single();x=S}t({user:y.user,session:y,profile:x})}else t({user:null,session:null,profile:null})});t({_authListener:p})}catch(r){t({isLoading:!1,error:r.message})}},signIn:async(a,r)=>{const{data:o,error:c}=await te.auth.signInWithPassword({email:a,password:r});if(c)throw c;return o},signUp:async(a,r,o={})=>{const{data:c,error:d}=await te.auth.signUp({email:a,password:r,options:{data:o,emailRedirectTo:`${window.location.origin}/auth/callback`}});if(d)throw d;if(c!=null&&c.user){const h=o.username||a.split("@")[0],{error:p}=await te.from("profiles").insert({id:c.user.id,username:h,display_name:h});p&&console.warn("Failed to create profile:",p.message)}return c},signOut:async()=>{const{error:a}=await te.auth.signOut();if(a)throw a;t({user:null,session:null,profile:null})},updateProfile:async a=>{const{user:r}=e();if(!r)throw new Error("Not authenticated");const{data:o,error:c}=await te.from("profiles").update(a).eq("id",r.id).select().single();if(c)throw c;return t({profile:o}),o}}));function OT(){const t=It(),{signIn:e,signUp:a}=mt(),[r,o]=j.useState(!1),[c,d]=j.useState(""),[h,p]=j.useState(""),[g,y]=j.useState(""),[v,x]=j.useState(!1),[w,S]=j.useState(null);j.useEffect(()=>{document.title=r?"Sign Up | FrameX":"Log In | FrameX"},[r]);const T=async _=>{_.preventDefault(),x(!0),S(null);try{r?(await a(c,h,{username:g||c.split("@")[0]}),alert("Check your email for the confirmation link!"),o(!1)):(await e(c,h),t("/home"))}catch(N){S(N.message)}finally{x(!1)}},E=async _=>{try{await te.auth.signInWithOAuth({provider:_,options:{redirectTo:`${window.location.origin}/auth/callback`}})}catch(N){S(N.message)}};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(_f,{}),u.jsx("section",{className:"auth-section",children:u.jsxs("div",{className:"auth-glass",children:[u.jsxs("div",{className:"auth-header",children:[u.jsx("span",{className:"section-label",children:r?"Get Started":"Welcome Back"}),u.jsx("h1",{children:r?"Sign Up":"Log In"}),u.jsx("p",{children:r?"Create your FrameX account":"Sign in to continue to FrameX"})]}),w&&u.jsx("div",{className:"auth-error",children:w}),u.jsxs("form",{className:"auth-form",onSubmit:T,children:[r&&u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"username",children:[u.jsx("i",{className:"fas fa-user"})," Username"]}),u.jsx("input",{id:"username",type:"text",placeholder:"yourname",value:g,onChange:_=>y(_.target.value)})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"email",children:[u.jsx("i",{className:"fas fa-envelope"})," Email"]}),u.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",value:c,onChange:_=>d(_.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"password",children:[u.jsx("i",{className:"fas fa-lock"})," Password"]}),u.jsx("input",{id:"password",type:"password",placeholder:r?"Create a password":"Enter your password",value:h,onChange:_=>p(_.target.value),required:!0,minLength:6})]}),u.jsx("button",{type:"submit",className:"btn-primary auth-submit",disabled:v,children:v?u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"})," ",r?"Creating account...":"Signing in..."]}):u.jsxs("span",{children:[r?"Create Account":"Sign In"," ",u.jsx("i",{className:"fas fa-arrow-right"})]})})]}),u.jsx("div",{className:"auth-divider",children:u.jsx("span",{children:"or continue with"})}),u.jsxs("div",{className:"social-auth",children:[u.jsxs("button",{className:"social-auth-btn",onClick:()=>E("google"),children:[u.jsx("i",{className:"fab fa-google"})," Google"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>E("apple"),children:[u.jsx("i",{className:"fab fa-apple"})," Apple"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>E("github"),children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]})]}),u.jsx("p",{className:"auth-footer-text",children:r?u.jsxs(u.Fragment,{children:["Already have an account? ",u.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),o(!1),S(null)},children:"Log In"})]}):u.jsxs(u.Fragment,{children:["Don't have an account? ",u.jsx("a",{href:"#",onClick:_=>{_.preventDefault(),o(!0),S(null)},children:"Sign Up"})]})})]})}),u.jsx(Tf,{}),u.jsx("style",{children:`
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
      `})]})}const at={menu:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),u.jsx("polyline",{points:"13 2 13 9 20 9"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),close:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),attachment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"})}),emoji:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),u.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),u.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),mic:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"}),u.jsx("path",{d:"M19 10v2a7 7 0 01-14 0v-2"}),u.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"})]}),send:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),u.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"17 6 7 16 2 11"}),u.jsx("polyline",{points:"22 6 12 16 9 13"})]}),reply:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 17 4 12 9 7"}),u.jsx("path",{d:"M20 18v-2a4 4 0 00-4-4H4"})]}),logo:"F"},hr=[{id:1,name:"Your Story",avatar:"",online:!0,unread:!1,isOwn:!0,stories:[{id:101,type:"gradient",gradient:"linear-gradient(135deg, #C6FF00, #00E5FF)",duration:5e3}]},{id:2,name:"Luna",avatar:"",online:!0,unread:!0,stories:[{id:201,type:"gradient",gradient:"linear-gradient(135deg, #f093fb, #f5576c)",duration:5e3},{id:202,type:"gradient",gradient:"linear-gradient(135deg, #4facfe, #00f2fe)",duration:4e3}]},{id:3,name:"Marcus",avatar:"",online:!0,unread:!0,stories:[{id:301,type:"gradient",gradient:"linear-gradient(135deg, #a18cd1, #fbc2eb)",duration:5e3}]},{id:4,name:"Sofia",avatar:"",online:!1,unread:!1,stories:[{id:401,type:"gradient",gradient:"linear-gradient(135deg, #fccb90, #d57eeb)",duration:4e3}]},{id:5,name:"Kai",avatar:"",online:!0,unread:!0,stories:[{id:501,type:"gradient",gradient:"linear-gradient(135deg, #667eea, #764ba2)",duration:5e3}]},{id:6,name:"Zara",avatar:"",online:!1,unread:!1,stories:[{id:601,type:"gradient",gradient:"linear-gradient(135deg, #89f7fe, #66a6ff)",duration:4e3}]},{id:7,name:"Jules",avatar:"",online:!0,unread:!0,stories:[{id:701,type:"gradient",gradient:"linear-gradient(135deg, #f43b47, #453a94)",duration:5e3}]}];function DT({stories:t,userIndex:e,storyIndex:a,onClose:r,onNext:o,onPrev:c}){const d=t[e];if(!d||!d.stories[a])return null;const h=d.stories[a];(a+1)/d.stories.length*100;const p=g=>(g==null?void 0:g.split(" ").map(y=>y[0]).join("").toUpperCase().slice(0,2))||"?";return u.jsx("div",{className:"story-viewer-overlay",onClick:r,children:u.jsxs("div",{className:"story-viewer",onClick:g=>g.stopPropagation(),children:[u.jsxs("div",{className:"story-viewer-header",children:[u.jsx("div",{className:"story-viewer-progress",children:d.stories.map((g,y)=>u.jsx("div",{className:`story-progress-bar ${y<=a?"active":""} ${y===a?"animating":""}`},y))}),u.jsxs("div",{className:"story-viewer-user",children:[u.jsx("div",{className:"story-viewer-avatar",style:{background:d.gradient||"rgba(255,255,255,0.1)"},children:d.avatar?u.jsx("img",{src:d.avatar,alt:""}):u.jsx("span",{children:p(d.name)})}),u.jsx("span",{className:"story-viewer-name",children:d.name}),u.jsx("span",{className:"story-viewer-time",children:"Just now"})]}),u.jsx("button",{className:"story-viewer-close",onClick:r,children:at.close})]}),u.jsx("div",{className:"story-viewer-content",style:{background:h.gradient||"#1a1a2e"},children:u.jsxs("div",{className:"story-viewer-text",children:[d.name,"'s Story"]})}),u.jsxs("div",{className:"story-viewer-tap-areas",children:[u.jsx("div",{className:"story-tap-left",onClick:g=>{g.stopPropagation(),c()}}),u.jsx("div",{className:"story-tap-right",onClick:g=>{g.stopPropagation(),o()}})]})]})})}function LT({users:t}){if(!t||t.length===0)return null;const e=t.length===1?`${t[0]} is typing...`:`${t.length} people are typing...`;return u.jsxs("div",{className:"typing-indicator",children:[u.jsxs("div",{className:"typing-dots",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]}),u.jsx("span",{className:"typing-label",children:e})]})}function MT({date:t}){const e=new Date,a=new Date(t),r=e.toDateString()===a.toDateString(),o=new Date(e);o.setDate(o.getDate()-1);const c=o.toDateString()===a.toDateString();let d=r?"Today":c?"Yesterday":a.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return u.jsx("div",{className:"date-divider",children:u.jsx("span",{children:d})})}const ev=`
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
`;function zT(){var me,ue;const t=It(),[e,a]=j.useState(null),[r,o]=j.useState(!0),[c,d]=j.useState(null),[h,p]=j.useState(""),[g,y]=j.useState([]),[v,x]=j.useState([]),[w,S]=j.useState(!1),[T,E]=j.useState(!1),[_,N]=j.useState(0),[C,V]=j.useState(0),[Y,J]=j.useState([]),[M,H]=j.useState(!1),[Q,Z]=j.useState([]),[ye,he]=j.useState(!1),Ae=j.useRef(null),Le=j.useRef(null);j.useEffect(()=>{document.title="Chat — FrameX",(async()=>{try{const{data:{session:G}}=await te.auth.getSession();if(!G){t("/login");return}a(G.user)}catch{console.warn("Auth check failed, running in offline mode"),a({id:"offline",email:"guest@framex.app"})}o(!1)})()},[t]),j.useEffect(()=>{if(!e||e.id==="offline"){x([{id:"general",name:"general",display_name:"# general"},{id:"random",name:"random",display_name:"# random"}]),d({id:"general",name:"general",display_name:"# general"});return}(async()=>{try{const{data:G}=await te.from("channels").select("*").order("name");G&&(x(G),!c&&G.length>0&&d(G[0]))}catch(G){console.warn("Failed to fetch channels:",G),x([{id:"general",name:"general",display_name:"# general"}]),d({id:"general",name:"general",display_name:"# general"})}})()},[e]),j.useEffect(()=>{if(!c)return;(async()=>{try{if((e==null?void 0:e.id)==="offline"){y([{id:"1",content:"Welcome to FrameX Chat! 🎉",user_id:"system",created_at:new Date().toISOString(),profiles:{display_name:"FrameX",username:"framex"}},{id:"2",content:"Select a story to view it. This is a demo environment.",user_id:"system",created_at:new Date(Date.now()-6e4).toISOString(),profiles:{display_name:"FrameX",username:"framex"}}]);return}const{data:G}=await te.from("messages").select("*, profiles(*)").eq("channel_id",c.id).order("created_at",{ascending:!0}).limit(100);G&&y(G)}catch{console.warn("Failed to load messages")}})()},[c,e]),j.useEffect(()=>{if(!c||(e==null?void 0:e.id)==="offline")return;let D;return(async()=>{try{D=te.channel(`messages:${c.id}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`channel_id=eq.${c.id}`},ce=>{const we=ce.new;we.user_id!==(e==null?void 0:e.id)&&te.from("profiles").select("*").eq("id",we.user_id).single().then(({data:_e})=>{y(rt=>[...rt,{...we,profiles:_e}])}).catch(()=>{y(_e=>[..._e,we])})}).subscribe()}catch{console.warn("Realtime subscription failed")}})(),()=>{D&&te.removeChannel(D)}},[c,e]),j.useEffect(()=>{var D;(D=Ae.current)==null||D.scrollIntoView({behavior:"smooth"})},[g]),j.useEffect(()=>{const D=G=>{G.key==="Escape"&&S(!1)};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[]),j.useEffect(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[w]),j.useEffect(()=>{if(!T)return;const D=hr[_];if(!D)return;const G=D.stories[C];if(!G)return;const ce=setTimeout(()=>{ke()},G.duration||5e3);return()=>clearTimeout(ce)},[T,_,C]);const pe=j.useCallback(async()=>{if(!(!e||e.id==="offline")){he(!0);try{const{data:D}=await te.from("follows").select("follower_id").eq("following_id",e.id),{data:G}=await te.from("follows").select("following_id").eq("follower_id",e.id),ce=(D||[]).map(ht=>ht.follower_id),we=(G||[]).map(ht=>ht.following_id);if(ce.length===0){Z([]),he(!1);return}const{data:_e}=await te.from("profiles").select("id, username, display_name, avatar_url, bio, is_verified").in("id",ce),rt=(_e||[]).map(ht=>({...ht,isFriend:we.includes(ht.id),isFollower:!0}));Z(rt)}catch(D){console.warn("Failed to fetch panel users:",D),Z([])}he(!1)}},[e]);j.useEffect(()=>{M&&pe()},[M,pe]),j.useEffect(()=>{if(!e||e.id==="offline")return;let D;try{D=te.channel("follows-changes").on("postgres_changes",{event:"*",schema:"public",table:"follows"},()=>{M&&pe()}).subscribe()}catch{console.warn("Realtime follows subscription failed")}return()=>{D&&te.removeChannel(D)}},[e,M,pe]);const z=j.useCallback(async D=>{if(D==null||D.preventDefault(),!h.trim()||!c)return;const G=h.trim();if(p(""),(e==null?void 0:e.id)==="offline"){y(ce=>[...ce,{id:`msg-${Date.now()}`,content:G,user_id:"offline",created_at:new Date().toISOString(),profiles:{display_name:"You",username:"you"}}]);return}try{const{data:ce}=await te.from("messages").insert({channel_id:c.id,user_id:e.id,content:G}).select("*, profiles(*)").single();ce&&y(we=>[...we,ce])}catch{console.warn("Failed to send message")}},[h,c,e]),ee=j.useCallback(async()=>{try{await te.auth.signOut()}catch{}t("/login")},[t]),ie=j.useCallback(D=>{N(D),V(0),E(!0)},[]),be=j.useCallback(()=>{E(!1)},[]),ke=j.useCallback(()=>{const D=hr[_];D&&(C<D.stories.length-1?V(G=>G+1):_<hr.length-1?(N(G=>G+1),V(0)):E(!1))},[_,C]),R=j.useCallback(()=>{var D;C>0?V(G=>G-1):_>0&&(N(G=>G-1),V(((D=hr[_-1])==null?void 0:D.stories.length)-1||0))},[_,C]),q=D=>D&&D.split(" ").map(G=>G[0]).join("").toUpperCase().slice(0,2)||"?",W=D=>{const G=new Date(D),we=new Date-G,_e=Math.floor(we/6e4),rt=Math.floor(we/36e5);return _e<1?"Now":_e<60?`${_e}m`:rt<24?G.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):G.toLocaleDateString([],{month:"short",day:"numeric"})},ae=g.reduce((D,G,ce)=>{const we=new Date(G.created_at).toDateString(),_e=ce>0?new Date(g[ce-1].created_at).toDateString():null;return we!==_e&&D.push({type:"date",date:G.created_at}),D.push({type:"message",msg:G,isOwn:G.user_id===(e==null?void 0:e.id)}),D},[]);if(r)return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:ev}),u.jsxs("div",{className:"chat-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("span",{children:"Loading chat..."})]})]});const fe=(c==null?void 0:c.display_name)||(c==null?void 0:c.name)||"Select a channel",Se=((me=e==null?void 0:e.user_metadata)==null?void 0:me.full_name)||(e==null?void 0:e.email)||"User",X=q(Se);return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:ev}),u.jsxs("header",{className:"chat-header",children:[u.jsxs("div",{className:"chat-header-left",children:[u.jsx("button",{className:"hamburger-btn",onClick:()=>S(!0),"aria-label":"Open menu",children:at.menu}),u.jsx("button",{className:"header-logo",onClick:()=>t("/"),children:at.logo})]}),u.jsxs("div",{className:"chat-header-center",onClick:()=>{((c==null?void 0:c.name)==="general"||(c==null?void 0:c.display_name)==="# general")&&H(D=>!D)},style:{cursor:(c==null?void 0:c.name)==="general"?"pointer":"default"},children:[u.jsx("h2",{children:fe}),(c==null?void 0:c.name)==="general"&&u.jsx("svg",{className:"channel-dropdown-arrow",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),u.jsxs("div",{className:"chat-header-right",children:[u.jsx("button",{className:"header-btn","aria-label":"Search",children:at.search}),u.jsxs("button",{className:"header-btn","aria-label":"Notifications",children:[at.bell,u.jsx("span",{className:"notification-badge"})]}),u.jsx("button",{className:"header-btn chat-new-btn","aria-label":"New chat",children:at.plus})]})]}),M&&u.jsx("div",{className:"user-panel-overlay",onClick:()=>H(!1)}),u.jsx("div",{className:`user-panel ${M?"user-panel-open":""}`,children:u.jsxs("div",{className:"user-panel-inner",children:[u.jsxs("div",{className:"user-panel-header",children:[u.jsx("h3",{children:"Channel Members"}),u.jsx("button",{className:"user-panel-close-btn",onClick:()=>H(!1),"aria-label":"Close panel",children:at.close})]}),u.jsx("div",{className:"user-panel-body",children:ye?u.jsx("div",{className:"user-panel-loading",children:u.jsx("div",{className:"user-panel-spinner"})}):Q.length===0?u.jsxs("div",{className:"user-panel-empty",children:[u.jsxs("svg",{className:"user-panel-empty-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("line",{x1:"22",y1:"6",x2:"22",y2:"12"}),u.jsx("line",{x1:"19",y1:"9",x2:"25",y2:"9"})]}),u.jsx("p",{children:"You are alone"}),u.jsx("span",{children:"Follow others to see them here"})]}):u.jsx("div",{className:"user-panel-list",children:Q.map(D=>u.jsxs("div",{className:"user-panel-item",onClick:()=>{H(!1)},children:[u.jsx("div",{className:"user-panel-avatar",children:D.avatar_url?u.jsx("img",{src:D.avatar_url,alt:"",loading:"lazy"}):u.jsx("span",{className:"user-panel-avatar-fallback",children:(D.display_name||D.username||"?")[0].toUpperCase()})}),u.jsxs("div",{className:"user-panel-info",children:[u.jsxs("div",{className:"user-panel-name-row",children:[u.jsx("span",{className:"user-panel-name",children:D.display_name||D.username||"Unknown"}),D.is_verified&&u.jsx("svg",{className:"user-panel-verified",viewBox:"0 0 24 24",fill:"currentColor",width:"14",height:"14",children:u.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"})})]}),u.jsxs("div",{className:"user-panel-handle",children:["@",D.username]})]}),D.isFriend&&u.jsx("span",{className:"user-panel-badge",children:"Friend"})]},D.id))})})]})}),u.jsx("div",{className:`sidebar-overlay ${w?"open":""}`,onClick:()=>S(!1)}),u.jsxs("aside",{className:`chat-sidebar ${w?"open":""}`,children:[u.jsxs("div",{className:"sidebar-profile",children:[u.jsxs("div",{className:"sidebar-avatar",children:[(ue=e==null?void 0:e.user_metadata)!=null&&ue.avatar_url?u.jsx("img",{src:e.user_metadata.avatar_url,alt:""}):X,u.jsx("span",{className:"status-dot"})]}),u.jsxs("div",{className:"sidebar-user-info",children:[u.jsx("div",{className:"sidebar-username",children:Se}),u.jsx("div",{className:"sidebar-status",children:"● Online"})]})]}),u.jsxs("nav",{className:"sidebar-nav",children:[u.jsx("div",{className:"sidebar-section-label",children:"Menu"}),u.jsxs("button",{className:"sidebar-nav-item active",onClick:()=>{S(!1),t("/chat")},children:[at.chat,u.jsx("span",{className:"sidebar-nav-label",children:"Chats"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/home")},children:[at.home,u.jsx("span",{className:"sidebar-nav-label",children:"Home"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/communities")},children:[at.communities,u.jsx("span",{className:"sidebar-nav-label",children:"Communities"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/explore")},children:[at.explore,u.jsx("span",{className:"sidebar-nav-label",children:"Explore"})]}),u.jsx("div",{className:"sidebar-section-label",children:"Preferences"}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/notifications")},children:[at.notification,u.jsx("span",{className:"sidebar-nav-label",children:"Notifications"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/settings")},children:[at.settings,u.jsx("span",{className:"sidebar-nav-label",children:"Settings"})]})]}),u.jsxs("div",{className:"sidebar-bottom",children:[u.jsxs("button",{className:"sidebar-logout",onClick:ee,children:[at.logout,u.jsx("span",{children:"Log Out"})]}),u.jsx("div",{className:"sidebar-version",children:"FrameX v1.0.0"})]})]}),u.jsx("main",{className:"chat-main",children:c?g.length===0?u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-state-icon",children:at.chat}),u.jsx("h3",{children:"No messages yet"}),u.jsx("p",{children:"Start the conversation. Send a message to begin chatting."})]})}):u.jsxs("div",{className:"messages-container",children:[ae.map((D,G)=>{var _e,rt;if(D.type==="date")return u.jsx(MT,{date:D.date},`date-${G}`);const{msg:ce,isOwn:we}=D;return u.jsxs("div",{className:`chat-msg-wrapper ${we?"outgoing":"incoming"}`,children:[u.jsxs("div",{className:"chat-msg-bubble",children:[!we&&u.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--chat-accent)",marginBottom:2},children:((_e=ce.profiles)==null?void 0:_e.display_name)||((rt=ce.profiles)==null?void 0:rt.username)||"Unknown"}),u.jsx("div",{children:ce.content})]}),u.jsxs("div",{className:"chat-msg-meta",children:[u.jsx("span",{className:"chat-msg-time",children:W(ce.created_at)}),we&&u.jsx("span",{className:"chat-msg-receipt",children:at.checkAll})]}),u.jsx("div",{style:{display:"flex",gap:6,alignItems:"center"},children:u.jsxs("button",{className:"chat-msg-reply",children:[at.reply," Reply"]})}),u.jsxs("div",{className:"chat-msg-reactions",children:[u.jsx("span",{className:"msg-reaction",children:"❤️"}),u.jsx("span",{className:"msg-reaction",children:"🔥"}),u.jsx("span",{className:"msg-reaction",children:"👍"})]})]},ce.id)}),Y.length>0&&u.jsx(LT,{users:Y}),u.jsx("div",{ref:Ae})]}):u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"channel-selector",children:[u.jsx("h3",{children:"Channels"}),v.map(D=>u.jsxs("button",{className:"channel-item",onClick:()=>d(D),children:[u.jsx("div",{className:"channel-avatar",children:"#"}),u.jsxs("div",{className:"channel-info",children:[u.jsx("div",{className:"channel-name",children:D.display_name||`# ${D.name}`}),u.jsx("div",{className:"channel-preview",children:"Tap to view messages"})]}),u.jsx("div",{className:"channel-meta"})]},D.id))]})})}),u.jsx("div",{className:"chat-composer-wrapper",children:u.jsxs("form",{className:"chat-composer",onSubmit:z,children:[u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Attach file",children:at.attachment}),u.jsx("input",{ref:Le,className:"composer-input",type:"text",placeholder:c?`Message ${c.display_name||c.name||"channel"}...`:"Select a channel to start chatting",value:h,onChange:D=>p(D.target.value),disabled:!c,"aria-label":"Message input"}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Add emoji",children:at.emoji}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Voice message",children:at.mic}),u.jsx("button",{type:"submit",className:"composer-btn send-btn",disabled:!h.trim()||!c,"aria-label":"Send message",children:at.send})]})}),u.jsx("div",{className:"stories-rail-wrapper",children:u.jsx("div",{className:"stories-rail",children:hr.map((D,G)=>u.jsxs("div",{className:"story-avatar-wrapper",style:{"--story-index":G},onClick:()=>ie(G),children:[u.jsx("div",{className:`story-avatar-ring ${D.unread?"unread":"seen"}`,children:u.jsxs("div",{className:"story-avatar-inner",children:[D.avatar?u.jsx("img",{src:D.avatar,alt:""}):q(D.name),D.online&&u.jsx("span",{className:"story-online-dot"})]})}),u.jsx("span",{className:"story-avatar-name",children:D.name})]},D.id))})}),T&&u.jsx(DT,{stories:hr,userIndex:_,storyIndex:C,onClose:be,onNext:ke,onPrev:R})]})}const Cf=j.createContext({});function Rf(t){const e=j.useRef(null);return e.current===null&&(e.current=t()),e.current}const UT=typeof window<"u",Sx=UT?j.useLayoutEffect:j.useEffect,Tc=j.createContext(null);function Nf(t,e){t.indexOf(e)===-1&&t.push(e)}function oc(t,e){const a=t.indexOf(e);a>-1&&t.splice(a,1)}const Hn=(t,e,a)=>a>e?e:a<t?t:a;let Of=()=>{};const Ii={},jx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),kx=t=>typeof t=="object"&&t!==null,_x=t=>/^0[^.\s]+$/u.test(t);function Tx(t){let e;return()=>(e===void 0&&(e=t()),e)}const yn=t=>t,io=(...t)=>t.reduce((e,a)=>r=>a(e(r))),Xs=(t,e,a)=>{const r=e-t;return r?(a-t)/r:1};class Df{constructor(){this.subscriptions=[]}add(e){return Nf(this.subscriptions,e),()=>oc(this.subscriptions,e)}notify(e,a,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,a,r);else for(let c=0;c<o;c++){const d=this.subscriptions[c];d&&d(e,a,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tn=t=>t*1e3,gn=t=>t/1e3,Ex=(t,e)=>e?t*(1e3/e):0,Ax=(t,e,a)=>(((1-3*a+3*e)*t+(3*a-6*e))*t+3*e)*t,BT=1e-7,PT=12;function VT(t,e,a,r,o){let c,d,h=0;do d=e+(a-e)/2,c=Ax(d,r,o)-t,c>0?a=d:e=d;while(Math.abs(c)>BT&&++h<PT);return d}function ao(t,e,a,r){if(t===e&&a===r)return yn;const o=c=>VT(c,0,1,t,a);return c=>c===0||c===1?c:Ax(o(c),e,r)}const Cx=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Rx=t=>e=>1-t(1-e),Nx=ao(.33,1.53,.69,.99),Lf=Rx(Nx),Ox=Cx(Lf),Dx=t=>t>=1?1:(t*=2)<1?.5*Lf(t):.5*(2-Math.pow(2,-10*(t-1))),Mf=t=>1-Math.sin(Math.acos(t)),Lx=Rx(Mf),Mx=Cx(Mf),HT=ao(.42,0,1,1),$T=ao(0,0,.58,1),zx=ao(.42,0,.58,1),IT=t=>Array.isArray(t)&&typeof t[0]!="number",Ux=t=>Array.isArray(t)&&typeof t[0]=="number",qT={linear:yn,easeIn:HT,easeInOut:zx,easeOut:$T,circIn:Mf,circInOut:Mx,circOut:Lx,backIn:Lf,backInOut:Ox,backOut:Nx,anticipate:Dx},FT=t=>typeof t=="string",tv=t=>{if(Ux(t)){Of(t.length===4);const[e,a,r,o]=t;return ao(e,a,r,o)}else if(FT(t))return qT[t];return t},Ll=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GT(t,e){let a=new Set,r=new Set,o=!1,c=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),t()),y(h)}const g={schedule:(y,v=!1,x=!1)=>{const S=x&&o?a:r;return v&&d.add(y),S.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(h=y,o){c=!0;return}o=!0;const v=a;a=r,r=v,a.forEach(p),a.clear(),o=!1,c&&(c=!1,g.process(y))}};return g}const KT=40;function Bx(t,e){let a=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>a=!0,d=Ll.reduce((C,V)=>(C[V]=GT(c),C),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:v,preRender:x,render:w,postRender:S}=d,T=()=>{const C=Ii.useManualTiming,V=C?o.timestamp:performance.now();a=!1,C||(o.delta=r?1e3/60:Math.max(Math.min(V-o.timestamp,KT),1)),o.timestamp=V,o.isProcessing=!0,h.process(o),p.process(o),g.process(o),y.process(o),v.process(o),x.process(o),w.process(o),S.process(o),o.isProcessing=!1,a&&e&&(r=!1,t(T))},E=()=>{a=!0,r=!0,o.isProcessing||t(T)};return{schedule:Ll.reduce((C,V)=>{const Y=d[V];return C[V]=(J,M=!1,H=!1)=>(a||E(),Y.schedule(J,M,H)),C},{}),cancel:C=>{for(let V=0;V<Ll.length;V++)d[Ll[V]].cancel(C)},state:o,steps:d}}const{schedule:Fe,cancel:qi,state:kt,steps:lh}=Bx(typeof requestAnimationFrame<"u"?requestAnimationFrame:yn,!0);let Il;function YT(){Il=void 0}const Rt={now:()=>(Il===void 0&&Rt.set(kt.isProcessing||Ii.useManualTiming?kt.timestamp:performance.now()),Il),set:t=>{Il=t,queueMicrotask(YT)}},Px=t=>e=>typeof e=="string"&&e.startsWith(t),Vx=Px("--"),WT=Px("var(--"),zf=t=>WT(t)?XT.test(t.split("/*")[0].trim()):!1,XT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function nv(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Ar={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Js={...Ar,transform:t=>Hn(0,1,t)},Ml={...Ar,default:1},Bs=t=>Math.round(t*1e5)/1e5,Uf=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function JT(t){return t==null}const QT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Bf=(t,e)=>a=>!!(typeof a=="string"&&QT.test(a)&&a.startsWith(t)||e&&!JT(a)&&Object.prototype.hasOwnProperty.call(a,e)),Hx=(t,e,a)=>r=>{if(typeof r!="string")return r;const[o,c,d,h]=r.match(Uf);return{[t]:parseFloat(o),[e]:parseFloat(c),[a]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},ZT=t=>Hn(0,255,t),ch={...Ar,transform:t=>Math.round(ZT(t))},ba={test:Bf("rgb","red"),parse:Hx("red","green","blue"),transform:({red:t,green:e,blue:a,alpha:r=1})=>"rgba("+ch.transform(t)+", "+ch.transform(e)+", "+ch.transform(a)+", "+Bs(Js.transform(r))+")"};function eE(t){let e="",a="",r="",o="";return t.length>5?(e=t.substring(1,3),a=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),a=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,a+=a,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(a,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ih={test:Bf("#"),parse:eE,transform:ba.transform},ro=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),ci=ro("deg"),Vn=ro("%"),se=ro("px"),tE=ro("vh"),nE=ro("vw"),iv={...Vn,parse:t=>Vn.parse(t)/100,transform:t=>Vn.transform(t*100)},vr={test:Bf("hsl","hue"),parse:Hx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:a,alpha:r=1})=>"hsla("+Math.round(t)+", "+Vn.transform(Bs(e))+", "+Vn.transform(Bs(a))+", "+Bs(Js.transform(r))+")"},dt={test:t=>ba.test(t)||Ih.test(t)||vr.test(t),parse:t=>ba.test(t)?ba.parse(t):vr.test(t)?vr.parse(t):Ih.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?ba.transform(t):vr.transform(t),getAnimatableNone:t=>{const e=dt.parse(t);return e.alpha=0,dt.transform(e)}},iE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function aE(t){var e,a;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Uf))==null?void 0:e.length)||0)+(((a=t.match(iE))==null?void 0:a.length)||0)>0}const $x="number",Ix="color",rE="var",sE="var(",av="${}",oE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Sr(t){const e=t.toString(),a=[],r={color:[],number:[],var:[]},o=[];let c=0;const h=e.replace(oE,p=>(dt.test(p)?(r.color.push(c),o.push(Ix),a.push(dt.parse(p))):p.startsWith(sE)?(r.var.push(c),o.push(rE),a.push(p)):(r.number.push(c),o.push($x),a.push(parseFloat(p))),++c,av)).split(av);return{values:a,split:h,indexes:r,types:o}}function lE(t){return Sr(t).values}function qx({split:t,types:e}){const a=t.length;return r=>{let o="";for(let c=0;c<a;c++)if(o+=t[c],r[c]!==void 0){const d=e[c];d===$x?o+=Bs(r[c]):d===Ix?o+=dt.transform(r[c]):o+=r[c]}return o}}function cE(t){return qx(Sr(t))}const uE=t=>typeof t=="number"?0:dt.test(t)?dt.getAnimatableNone(t):t,dE=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:uE(t);function hE(t){const e=Sr(t);return qx(e)(e.values.map((r,o)=>dE(r,e.split[o])))}const An={test:aE,parse:lE,createTransformer:cE,getAnimatableNone:hE};function uh(t,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?t+(e-t)*6*a:a<1/2?e:a<2/3?t+(e-t)*(2/3-a)*6:t}function fE({hue:t,saturation:e,lightness:a,alpha:r}){t/=360,e/=100,a/=100;let o=0,c=0,d=0;if(!e)o=c=d=a;else{const h=a<.5?a*(1+e):a+e-a*e,p=2*a-h;o=uh(p,h,t+1/3),c=uh(p,h,t),d=uh(p,h,t-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(d*255),alpha:r}}function lc(t,e){return a=>a>0?e:t}const qe=(t,e,a)=>t+(e-t)*a,dh=(t,e,a)=>{const r=t*t,o=a*(e*e-r)+r;return o<0?0:Math.sqrt(o)},pE=[Ih,ba,vr],mE=t=>pE.find(e=>e.test(t));function rv(t){const e=mE(t);if(!e)return!1;let a=e.parse(t);return e===vr&&(a=fE(a)),a}const sv=(t,e)=>{const a=rv(t),r=rv(e);if(!a||!r)return lc(t,e);const o={...a};return c=>(o.red=dh(a.red,r.red,c),o.green=dh(a.green,r.green,c),o.blue=dh(a.blue,r.blue,c),o.alpha=qe(a.alpha,r.alpha,c),ba.transform(o))},qh=new Set(["none","hidden"]);function gE(t,e){return qh.has(t)?a=>a<=0?t:e:a=>a>=1?e:t}function yE(t,e){return a=>qe(t,e,a)}function Pf(t){return typeof t=="number"?yE:typeof t=="string"?zf(t)?lc:dt.test(t)?sv:xE:Array.isArray(t)?Fx:typeof t=="object"?dt.test(t)?sv:vE:lc}function Fx(t,e){const a=[...t],r=a.length,o=t.map((c,d)=>Pf(c)(c,e[d]));return c=>{for(let d=0;d<r;d++)a[d]=o[d](c);return a}}function vE(t,e){const a={...t,...e},r={};for(const o in a)t[o]!==void 0&&e[o]!==void 0&&(r[o]=Pf(t[o])(t[o],e[o]));return o=>{for(const c in r)a[c]=r[c](o);return a}}function bE(t,e){const a=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const c=e.types[o],d=t.indexes[c][r[c]],h=t.values[d]??0;a[o]=h,r[c]++}return a}const xE=(t,e)=>{const a=An.createTransformer(e),r=Sr(t),o=Sr(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?qh.has(t)&&!o.values.length||qh.has(e)&&!r.values.length?gE(t,e):io(Fx(bE(r,o),o.values),a):lc(t,e)};function Gx(t,e,a){return typeof t=="number"&&typeof e=="number"&&typeof a=="number"?qe(t,e,a):Pf(t)(t,e)}const wE=t=>{const e=({timestamp:a})=>t(a);return{start:(a=!0)=>Fe.update(e,a),stop:()=>qi(e),now:()=>kt.isProcessing?kt.timestamp:Rt.now()}},Kx=(t,e,a=10)=>{let r="";const o=Math.max(Math.round(e/a),2);for(let c=0;c<o;c++)r+=Math.round(t(c/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},cc=2e4;function Vf(t){let e=0;const a=50;let r=t.next(e);for(;!r.done&&e<cc;)e+=a,r=t.next(e);return e>=cc?1/0:e}function SE(t,e=100,a){const r=a({...t,keyframes:[0,e]}),o=Math.min(Vf(r),cc);return{type:"keyframes",ease:c=>r.next(o*c).value/e,duration:gn(o)}}const et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Fh(t,e){return t*Math.sqrt(1-e*e)}const jE=12;function kE(t,e,a){let r=a;for(let o=1;o<jE;o++)r=r-t(r)/e(r);return r}const hh=.001;function _E({duration:t=et.duration,bounce:e=et.bounce,velocity:a=et.velocity,mass:r=et.mass}){let o,c,d=1-e;d=Hn(et.minDamping,et.maxDamping,d),t=Hn(et.minDuration,et.maxDuration,gn(t)),d<1?(o=g=>{const y=g*d,v=y*t,x=y-a,w=Fh(g,d),S=Math.exp(-v);return hh-x/w*S},c=g=>{const v=g*d*t,x=v*a+a,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-v),T=Fh(Math.pow(g,2),d);return(-o(g)+hh>0?-1:1)*((x-w)*S)/T}):(o=g=>{const y=Math.exp(-g*t),v=(g-a)*t+1;return-hh+y*v},c=g=>{const y=Math.exp(-g*t),v=(a-g)*(t*t);return y*v});const h=5/t,p=kE(o,c,h);if(t=tn(t),isNaN(p))return{stiffness:et.stiffness,damping:et.damping,duration:t};{const g=Math.pow(p,2)*r;return{stiffness:g,damping:d*2*Math.sqrt(r*g),duration:t}}}const TE=["duration","bounce"],EE=["stiffness","damping","mass"];function ov(t,e){return e.some(a=>t[a]!==void 0)}function AE(t){let e={velocity:et.velocity,stiffness:et.stiffness,damping:et.damping,mass:et.mass,isResolvedFromDuration:!1,...t};if(!ov(t,EE)&&ov(t,TE))if(e.velocity=0,t.visualDuration){const a=t.visualDuration,r=2*Math.PI/(a*1.2),o=r*r,c=2*Hn(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:et.mass,stiffness:o,damping:c}}else{const a=_E({...t,velocity:0});e={...e,...a,mass:et.mass},e.isResolvedFromDuration=!0}return e}function uc(t=et.visualDuration,e=et.bounce){const a=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=a;const c=a.keyframes[0],d=a.keyframes[a.keyframes.length-1],h={done:!1,value:c},{stiffness:p,damping:g,mass:y,duration:v,velocity:x,isResolvedFromDuration:w}=AE({...a,velocity:-gn(a.velocity||0)}),S=x||0,T=g/(2*Math.sqrt(p*y)),E=d-c,_=gn(Math.sqrt(p/y)),N=Math.abs(E)<5;r||(r=N?et.restSpeed.granular:et.restSpeed.default),o||(o=N?et.restDelta.granular:et.restDelta.default);let C,V,Y,J,M,H;if(T<1)Y=Fh(_,T),J=(S+T*_*E)/Y,C=Z=>{const ye=Math.exp(-T*_*Z);return d-ye*(J*Math.sin(Y*Z)+E*Math.cos(Y*Z))},M=T*_*J+E*Y,H=T*_*E-J*Y,V=Z=>Math.exp(-T*_*Z)*(M*Math.sin(Y*Z)+H*Math.cos(Y*Z));else if(T===1){C=ye=>d-Math.exp(-_*ye)*(E+(S+_*E)*ye);const Z=S+_*E;V=ye=>Math.exp(-_*ye)*(_*Z*ye-S)}else{const Z=_*Math.sqrt(T*T-1);C=Le=>{const pe=Math.exp(-T*_*Le),z=Math.min(Z*Le,300);return d-pe*((S+T*_*E)*Math.sinh(z)+Z*E*Math.cosh(z))/Z};const ye=(S+T*_*E)/Z,he=T*_*ye-E*Z,Ae=T*_*E-ye*Z;V=Le=>{const pe=Math.exp(-T*_*Le),z=Math.min(Z*Le,300);return pe*(he*Math.sinh(z)+Ae*Math.cosh(z))}}const Q={calculatedDuration:w&&v||null,velocity:Z=>tn(V(Z)),next:Z=>{if(!w&&T<1){const he=Math.exp(-T*_*Z),Ae=Math.sin(Y*Z),Le=Math.cos(Y*Z),pe=d-he*(J*Ae+E*Le),z=tn(he*(M*Ae+H*Le));return h.done=Math.abs(z)<=r&&Math.abs(d-pe)<=o,h.value=h.done?d:pe,h}const ye=C(Z);if(w)h.done=Z>=v;else{const he=tn(V(Z));h.done=Math.abs(he)<=r&&Math.abs(d-ye)<=o}return h.value=h.done?d:ye,h},toString:()=>{const Z=Math.min(Vf(Q),cc),ye=Kx(he=>Q.next(Z*he).value,Z,30);return Z+"ms "+ye},toTransition:()=>{}};return Q}uc.applyToOptions=t=>{const e=SE(t,100,uc);return t.ease=e.ease,t.duration=tn(e.duration),t.type="keyframes",t};const CE=5;function Yx(t,e,a){const r=Math.max(e-CE,0);return Ex(a-t(r),e-r)}function Gh({keyframes:t,velocity:e=0,power:a=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:y}){const v=t[0],x={done:!1,value:v},w=H=>h!==void 0&&H<h||p!==void 0&&H>p,S=H=>h===void 0?p:p===void 0||Math.abs(h-H)<Math.abs(p-H)?h:p;let T=a*e;const E=v+T,_=d===void 0?E:d(E);_!==E&&(T=_-v);const N=H=>-T*Math.exp(-H/r),C=H=>_+N(H),V=H=>{const Q=N(H),Z=C(H);x.done=Math.abs(Q)<=g,x.value=x.done?_:Z};let Y,J;const M=H=>{w(x.value)&&(Y=H,J=uc({keyframes:[x.value,S(x.value)],velocity:Yx(C,H,x.value),damping:o,stiffness:c,restDelta:g,restSpeed:y}))};return M(0),{calculatedDuration:null,next:H=>{let Q=!1;return!J&&Y===void 0&&(Q=!0,V(H),M(H)),Y!==void 0&&H>=Y?J.next(H-Y):(!Q&&V(H),x)}}}function RE(t,e,a){const r=[],o=a||Ii.mix||Gx,c=t.length-1;for(let d=0;d<c;d++){let h=o(t[d],t[d+1]);if(e){const p=Array.isArray(e)?e[d]||yn:e;h=io(p,h)}r.push(h)}return r}function NE(t,e,{clamp:a=!0,ease:r,mixer:o}={}){const c=t.length;if(Of(c===e.length),c===1)return()=>e[0];if(c===2&&e[0]===e[1])return()=>e[1];const d=t[0]===t[1];t[0]>t[c-1]&&(t=[...t].reverse(),e=[...e].reverse());const h=RE(e,r,o),p=h.length,g=y=>{if(d&&y<t[0])return e[0];let v=0;if(p>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const x=Xs(t[v],t[v+1],y);return h[v](x)};return a?y=>g(Hn(t[0],t[c-1],y)):g}function OE(t,e){const a=t[t.length-1];for(let r=1;r<=e;r++){const o=Xs(0,e,r);t.push(qe(a,1,o))}}function DE(t){const e=[0];return OE(e,t.length-1),e}function LE(t,e){return t.map(a=>a*e)}function ME(t,e){return t.map(()=>e||zx).splice(0,t.length-1)}function Ps({duration:t=300,keyframes:e,times:a,ease:r="easeInOut"}){const o=IT(r)?r.map(tv):tv(r),c={done:!1,value:e[0]},d=LE(a&&a.length===e.length?a:DE(e),t),h=NE(d,e,{ease:Array.isArray(o)?o:ME(e,o)});return{calculatedDuration:t,next:p=>(c.value=h(p),c.done=p>=t,c)}}const zE=t=>t!==null;function Ec(t,{repeat:e,repeatType:a="loop"},r,o=1){const c=t.filter(zE),h=o<0||e&&a!=="loop"&&e%2===1?0:c.length-1;return!h||r===void 0?c[h]:r}const UE={decay:Gh,inertia:Gh,tween:Ps,keyframes:Ps,spring:uc};function Wx(t){typeof t.type=="string"&&(t.type=UE[t.type])}class Hf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,a){return this.finished.then(e,a)}}const BE=t=>t/100;class dc extends Hf{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:a}=this.options;a&&a.updatedAt!==Rt.now()&&this.tick(Rt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Wx(e);const{type:a=Ps,repeat:r=0,repeatDelay:o=0,repeatType:c,velocity:d=0}=e;let{keyframes:h}=e;const p=a||Ps;p!==Ps&&typeof h[0]!="number"&&(this.mixKeyframes=io(BE,Gx(h[0],h[1])),h=[0,100]);const g=p({...e,keyframes:h});c==="mirror"&&(this.mirroredGenerator=p({...e,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=Vf(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=g}updateTime(e){const a=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=a}tick(e,a=!1){const{generator:r,totalDuration:o,mixKeyframes:c,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:w,type:S,onUpdate:T,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),a?this.currentTime=e:this.updateTime(e);const _=this.currentTime-g*(this.playbackSpeed>=0?1:-1),N=this.playbackSpeed>=0?_<0:_>o;this.currentTime=Math.max(_,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let C=this.currentTime,V=r;if(v){const H=Math.min(this.currentTime,o)/h;let Q=Math.floor(H),Z=H%1;!Z&&H>=1&&(Z=1),Z===1&&Q--,Q=Math.min(Q,v+1),!!(Q%2)&&(x==="reverse"?(Z=1-Z,w&&(Z-=w/h)):x==="mirror"&&(V=d)),C=Hn(0,1,Z)*h}let Y;N?(this.delayState.value=y[0],Y=this.delayState):Y=V.next(C),c&&!N&&(Y.value=c(Y.value));let{done:J}=Y;!N&&p!==null&&(J=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const M=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&J);return M&&S!==Gh&&(Y.value=Ec(y,this.options,E,this.speed)),T&&T(Y.value),M&&this.finish(),Y}then(e,a){return this.finished.then(e,a)}get duration(){return gn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gn(e)}get time(){return gn(this.currentTime)}set time(e){e=tn(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const a=this.generator.next(e).value;return Yx(r=>this.generator.next(r).value,e,a)}get speed(){return this.playbackSpeed}set speed(e){const a=this.playbackSpeed!==e;a&&this.driver&&this.updateTime(Rt.now()),this.playbackSpeed=e,a&&this.driver&&(this.time=gn(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:e=wE,startTime:a}=this.options;this.driver||(this.driver=e(d=>this.tick(d))),(c=(o=this.options).onPlay)==null||c.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=a??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Rt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,a;this.notifyFinished(),this.teardown(),this.state="finished",(a=(e=this.options).onComplete)==null||a.call(e)}cancel(){var e,a;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(a=(e=this.options).onCancel)==null||a.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var a;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(a=this.driver)==null||a.stop(),e.observe(this)}}function PE(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const xa=t=>t*180/Math.PI,Kh=t=>{const e=xa(Math.atan2(t[1],t[0]));return Yh(e)},VE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Kh,rotateZ:Kh,skewX:t=>xa(Math.atan(t[1])),skewY:t=>xa(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},Yh=t=>(t=t%360,t<0&&(t+=360),t),lv=Kh,cv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),uv=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),HE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:cv,scaleY:uv,scale:t=>(cv(t)+uv(t))/2,rotateX:t=>Yh(xa(Math.atan2(t[6],t[5]))),rotateY:t=>Yh(xa(Math.atan2(-t[2],t[0]))),rotateZ:lv,rotate:lv,skewX:t=>xa(Math.atan(t[4])),skewY:t=>xa(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Wh(t){return t.includes("scale")?1:0}function Xh(t,e){if(!t||t==="none")return Wh(e);const a=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(a)r=HE,o=a;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=VE,o=h}if(!o)return Wh(e);const c=r[e],d=o[1].split(",").map(IE);return typeof c=="function"?c(d):d[c]}const $E=(t,e)=>{const{transform:a="none"}=getComputedStyle(t);return Xh(a,e)};function IE(t){return parseFloat(t.trim())}const Cr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Rr=new Set([...Cr,"pathRotation"]),dv=t=>t===Ar||t===se,qE=new Set(["x","y","z"]),FE=Cr.filter(t=>!qE.has(t));function GE(t){const e=[];return FE.forEach(a=>{const r=t.getValue(a);r!==void 0&&(e.push([a,r.get()]),r.set(a.startsWith("scale")?1:0))}),e}const $i={width:({x:t},{paddingLeft:e="0",paddingRight:a="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(a)},height:({y:t},{paddingTop:e="0",paddingBottom:a="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(a)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Xh(e,"x"),y:(t,{transform:e})=>Xh(e,"y")};$i.translateX=$i.x;$i.translateY=$i.y;const wa=new Set;let Jh=!1,Qh=!1,Zh=!1;function Xx(){if(Qh){const t=Array.from(wa).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),a=new Map;e.forEach(r=>{const o=GE(r);o.length&&(a.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=a.get(r);o&&o.forEach(([c,d])=>{var h;(h=r.getValue(c))==null||h.set(d)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Qh=!1,Jh=!1,wa.forEach(t=>t.complete(Zh)),wa.clear()}function Jx(){wa.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Qh=!0)})}function KE(){Zh=!0,Jx(),Xx(),Zh=!1}class $f{constructor(e,a,r,o,c,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=a,this.name=r,this.motionValue=o,this.element=c,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(wa.add(this),Jh||(Jh=!0,Fe.read(Jx),Fe.resolveKeyframes(Xx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:a,element:r,motionValue:o}=this;if(e[0]===null){const c=o==null?void 0:o.get(),d=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&a){const h=r.readValue(a,d);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=d),o&&c===void 0&&o.set(e[0])}PE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),wa.delete(this)}cancel(){this.state==="scheduled"&&(wa.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const YE=t=>t.startsWith("--");function Qx(t,e,a){YE(e)?t.style.setProperty(e,a):t.style[e]=a}const WE={};function Zx(t,e){const a=Tx(t);return()=>WE[e]??a()}const XE=Zx(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),e1=Zx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ls=([t,e,a,r])=>`cubic-bezier(${t}, ${e}, ${a}, ${r})`,hv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ls([0,.65,.55,1]),circOut:Ls([.55,0,1,.45]),backIn:Ls([.31,.01,.66,-.59]),backOut:Ls([.33,1.53,.69,.99])};function t1(t,e){if(t)return typeof t=="function"?e1()?Kx(t,e):"ease-out":Ux(t)?Ls(t):Array.isArray(t)?t.map(a=>t1(a,e)||hv.easeOut):hv[t]}function JE(t,e,a,{delay:r=0,duration:o=300,repeat:c=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[e]:a};p&&(y.offset=p);const v=t1(h,o);Array.isArray(v)&&(y.easing=v);const x={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:d==="reverse"?"alternate":"normal"};return g&&(x.pseudoElement=g),t.animate(y,x)}function n1(t){return typeof t=="function"&&"applyToOptions"in t}function QE({type:t,...e}){return n1(t)&&e1()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class i1 extends Hf{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:a,name:r,keyframes:o,pseudoElement:c,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=e;this.isPseudoElement=!!c,this.allowFlatten=d,this.options=e,Of(typeof e.type!="string");const g=QE(e);this.animation=JE(a,r,o,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=Ec(o,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(y),Qx(a,r,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,a;(a=(e=this.animation).finish)==null||a.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var a,r,o;const e=(a=this.options)==null?void 0:a.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var a,r;const e=((r=(a=this.animation.effect)==null?void 0:a.getComputedTiming)==null?void 0:r.call(a).duration)||0;return gn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+gn(e)}get time(){return gn(Number(this.animation.currentTime)||0)}set time(e){const a=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tn(e),a&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:a,rangeEnd:r,observe:o}){var c;return this.allowFlatten&&((c=this.animation.effect)==null||c.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&XE()?(this.animation.timeline=e,a&&(this.animation.rangeStart=a),r&&(this.animation.rangeEnd=r),yn):o(this)}}const a1={anticipate:Dx,backInOut:Ox,circInOut:Mx};function ZE(t){return t in a1}function eA(t){typeof t.ease=="string"&&ZE(t.ease)&&(t.ease=a1[t.ease])}const fh=10;class tA extends i1{constructor(e){eA(e),Wx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:a,onUpdate:r,onComplete:o,element:c,...d}=this.options;if(!a)return;if(e!==void 0){a.set(e);return}const h=new dc({...d,autoplay:!1}),p=Math.max(fh,Rt.now()-this.startTime),g=Hn(0,fh,p-fh),y=h.sample(p).value,{name:v}=this.options;c&&v&&Qx(c,v,y),a.setWithVelocity(h.sample(Math.max(0,p-g)).value,y,g),h.stop()}}const fv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(An.test(t)||t==="0")&&!t.startsWith("url("));function nA(t){const e=t[0];if(t.length===1)return!0;for(let a=0;a<t.length;a++)if(t[a]!==e)return!0}function iA(t,e,a,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const c=t[t.length-1],d=fv(o,e),h=fv(c,e);return!d||!h?!1:nA(t)||(a==="spring"||n1(a))&&r}function ef(t){t.duration=0,t.type="keyframes"}const r1=new Set(["opacity","clipPath","filter","transform"]),aA=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function rA(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&aA.test(t[e]))return!0;return!1}const sA=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),oA=Tx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lA(t){var v;const{motionValue:e,name:a,repeatDelay:r,repeatType:o,damping:c,type:d,keyframes:h}=t;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:y}=e.owner.getProps();return oA()&&a&&(r1.has(a)||sA.has(a)&&rA(h))&&(a!=="transform"||!y)&&!g&&!r&&o!=="mirror"&&c!==0&&d!=="inertia"}const cA=40;class uA extends Hf{constructor({autoplay:e=!0,delay:a=0,type:r="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:y,...v}){var S;super(),this.stop=()=>{var T,E;this._animation&&(this._animation.stop(),(T=this.stopTimeline)==null||T.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=Rt.now();const x={autoplay:e,delay:a,type:r,repeat:o,repeatDelay:c,repeatType:d,name:p,motionValue:g,element:y,...v},w=(y==null?void 0:y.KeyframeResolver)||$f;this.keyframeResolver=new w(h,(T,E,_)=>this.onKeyframesResolved(T,E,x,!_),p,g,y),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(e,a,r,o){var _,N;this.keyframeResolver=void 0;const{name:c,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:y}=r;this.resolvedAt=Rt.now();let v=!0;iA(e,c,d,h)||(v=!1,(Ii.instantAnimations||!p)&&(y==null||y(Ec(e,r,a))),e[0]=e[e.length-1],ef(r),r.repeat=0);const w={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>cA?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:a,...r,keyframes:e},S=v&&!g&&lA(w),T=(N=(_=w.motionValue)==null?void 0:_.owner)==null?void 0:N.current;let E;if(S)try{E=new tA({...w,element:T})}catch{E=new dc(w)}else E=new dc(w);E.finished.then(()=>{this.notifyFinished()}).catch(yn),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(e,a){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),KE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function s1(t,e,a,r=0,o=1){const c=Array.from(t).sort((g,y)=>g.sortNodePosition(y)).indexOf(e),d=t.size,h=(d-1)*r;return typeof a=="function"?a(c,d):o===1?c*r:h-c*r}const pv=30,dA=t=>!isNaN(parseFloat(t));class hA{constructor(e,a={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var c;const o=Rt.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=a.owner}setCurrent(e){this.current=e,this.updatedAt=Rt.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=dA(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,a){this.events[e]||(this.events[e]=new Df);const r=this.events[e].add(a);return e==="change"?()=>{r(),Fe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,a){this.passiveEffect=e,this.stopPassiveEffect=a}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,a,r){this.set(a),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,a=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,a&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Rt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>pv)return 0;const a=Math.min(this.updatedAt-this.prevUpdatedAt,pv);return Ex(parseFloat(this.current)-parseFloat(this.prevFrameValue),a)}start(e){return this.stop(),new Promise(a=>{this.hasAnimated=!0,this.animation=e(a),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,a;(e=this.dependents)==null||e.clear(),(a=this.events.destroy)==null||a.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function jr(t,e){return new hA(t,e)}function o1(t,e){if(t!=null&&t.inherit&&e){const{inherit:a,...r}=t;return{...e,...r}}return t}function If(t,e){const a=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return a!==t?o1(a,t):a}const fA={type:"spring",stiffness:500,damping:25,restSpeed:10},pA=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),mA={type:"keyframes",duration:.8},gA={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yA=(t,{keyframes:e})=>e.length>2?mA:Rr.has(t)?t.startsWith("scale")?pA(e[1]):fA:gA,vA=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function bA(t){for(const e in t)if(!vA.has(e))return!0;return!1}const qf=(t,e,a,r={},o,c)=>d=>{const h=If(r,t)||{},p=h.delay||r.delay||0;let{elapsed:g=0}=r;g=g-tn(p);const y={keyframes:Array.isArray(a)?a:[null,a],ease:"easeOut",velocity:e.getVelocity(),...h,delay:-g,onUpdate:x=>{e.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:e,element:c?void 0:o};bA(h)||Object.assign(y,yA(t,y)),y.duration&&(y.duration=tn(y.duration)),y.repeatDelay&&(y.repeatDelay=tn(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(ef(y),y.delay===0&&(v=!0)),(Ii.instantAnimations||Ii.skipAnimations||o!=null&&o.shouldSkipAnimations||h.skipAnimations)&&(v=!0,ef(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,v&&!c&&e.get()!==void 0){const x=Ec(y.keyframes,h);if(x!==void 0){Fe.update(()=>{y.onUpdate(x),y.onComplete()});return}}return h.isSync?new dc(y):new uA(y)},xA=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wA(t){const e=xA.exec(t);if(!e)return[,];const[,a,r,o]=e;return[`--${a??r}`,o]}function l1(t,e,a=1){const[r,o]=wA(t);if(!r)return;const c=window.getComputedStyle(e).getPropertyValue(r);if(c){const d=c.trim();return jx(d)?parseFloat(d):d}return zf(o)?l1(o,e,a+1):o}function mv(t){const e=[{},{}];return t==null||t.values.forEach((a,r)=>{e[0][r]=a.get(),e[1][r]=a.getVelocity()}),e}function Ff(t,e,a,r){if(typeof e=="function"){const[o,c]=mv(r);e=e(a!==void 0?a:t.custom,o,c)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,c]=mv(r);e=e(a!==void 0?a:t.custom,o,c)}return e}function Sa(t,e,a){const r=t.getProps();return Ff(r,e,a!==void 0?a:r.custom,t)}const c1=new Set(["width","height","top","left","right","bottom",...Cr]),tf=t=>Array.isArray(t);function SA(t,e,a){t.hasValue(e)?t.getValue(e).set(a):t.addValue(e,jr(a))}function jA(t){return tf(t)?t[t.length-1]||0:t}function kA(t,e){const a=Sa(t,e);let{transitionEnd:r={},transition:o={},...c}=a||{};c={...c,...r};for(const d in c){const h=jA(c[d]);SA(t,d,h)}}const _t=t=>!!(t&&t.getVelocity);function _A(t){return!!(_t(t)&&t.add)}function nf(t,e){const a=t.getValue("willChange");if(_A(a))return a.add(e);if(!a&&Ii.WillChange){const r=new Ii.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function Gf(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const TA="framerAppearId",u1="data-"+Gf(TA);function d1(t){return t.props[u1]}function EA({protectedKeys:t,needsAnimating:e},a){const r=t.hasOwnProperty(a)&&e[a]!==!0;return e[a]=!1,r}function h1(t,e,{delay:a=0,transitionOverride:r,type:o}={}){let{transition:c,transitionEnd:d,...h}=e;const p=t.getDefaultTransition();c=c?o1(c,p):p;const g=c==null?void 0:c.reduceMotion,y=c==null?void 0:c.skipAnimations;r&&(c=r);const v=[],x=o&&t.animationState&&t.animationState.getState()[o],w=c==null?void 0:c.path;w&&w.animateVisualElement(t,h,c,a,v);for(const S in h){const T=t.getValue(S,t.latestValues[S]??null),E=h[S];if(E===void 0||x&&EA(x,S))continue;const _={delay:a,...If(c||{},S)};y&&(_.skipAnimations=!0);const N=T.get();if(N!==void 0&&!T.isAnimating()&&!Array.isArray(E)&&E===N&&!_.velocity){Fe.update(()=>T.set(E));continue}let C=!1;if(window.MotionHandoffAnimation){const J=d1(t);if(J){const M=window.MotionHandoffAnimation(J,S,Fe);M!==null&&(_.startTime=M,C=!0)}}nf(t,S);const V=g??t.shouldReduceMotion;T.start(qf(S,T,E,V&&c1.has(S)?{type:!1}:_,t,C));const Y=T.animation;Y&&v.push(Y)}if(d){const S=()=>Fe.update(()=>{d&&kA(t,d)});v.length?Promise.all(v).then(S):S()}return v}function af(t,e,a={}){var p;const r=Sa(t,e,a.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};a.transitionOverride&&(o=a.transitionOverride);const c=r?()=>Promise.all(h1(t,r,a)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=o;return AA(t,e,g,y,v,x,a)}:()=>Promise.resolve(),{when:h}=o;if(h){const[g,y]=h==="beforeChildren"?[c,d]:[d,c];return g().then(()=>y())}else return Promise.all([c(),d(a.delay)])}function AA(t,e,a=0,r=0,o=0,c=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",e),h.push(af(p,e,{...d,delay:a+(typeof r=="function"?0:r)+s1(t.variantChildren,p,r,o,c)}).then(()=>p.notify("AnimationComplete",e)));return Promise.all(h)}function CA(t,e,a={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(c=>af(t,c,a));r=Promise.all(o)}else if(typeof e=="string")r=af(t,e,a);else{const o=typeof e=="function"?Sa(t,e,a.custom):e;r=Promise.all(h1(t,o,a))}return r.then(()=>{t.notify("AnimationComplete",e)})}const RA={test:t=>t==="auto",parse:t=>t},f1=t=>e=>e.test(t),p1=[Ar,se,Vn,ci,nE,tE,RA],gv=t=>p1.find(f1(t));function NA(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||_x(t):!0}const OA=new Set(["brightness","contrast","saturate","opacity"]);function DA(t){const[e,a]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=a.match(Uf)||[];if(!r)return t;const o=a.replace(r,"");let c=OA.has(e)?1:0;return r!==a&&(c*=100),e+"("+c+o+")"}const LA=/\b([a-z-]*)\(.*?\)/gu,rf={...An,getAnimatableNone:t=>{const e=t.match(LA);return e?e.map(DA).join(" "):t}},sf={...An,getAnimatableNone:t=>{const e=An.parse(t);return An.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},yv={...Ar,transform:Math.round},MA={rotate:ci,pathRotation:ci,rotateX:ci,rotateY:ci,rotateZ:ci,scale:Ml,scaleX:Ml,scaleY:Ml,scaleZ:Ml,skew:ci,skewX:ci,skewY:ci,distance:se,translateX:se,translateY:se,translateZ:se,x:se,y:se,z:se,perspective:se,transformPerspective:se,opacity:Js,originX:iv,originY:iv,originZ:se},hc={borderWidth:se,borderTopWidth:se,borderRightWidth:se,borderBottomWidth:se,borderLeftWidth:se,borderRadius:se,borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomRightRadius:se,borderBottomLeftRadius:se,width:se,maxWidth:se,height:se,maxHeight:se,top:se,right:se,bottom:se,left:se,inset:se,insetBlock:se,insetBlockStart:se,insetBlockEnd:se,insetInline:se,insetInlineStart:se,insetInlineEnd:se,padding:se,paddingTop:se,paddingRight:se,paddingBottom:se,paddingLeft:se,paddingBlock:se,paddingBlockStart:se,paddingBlockEnd:se,paddingInline:se,paddingInlineStart:se,paddingInlineEnd:se,margin:se,marginTop:se,marginRight:se,marginBottom:se,marginLeft:se,marginBlock:se,marginBlockStart:se,marginBlockEnd:se,marginInline:se,marginInlineStart:se,marginInlineEnd:se,fontSize:se,backgroundPositionX:se,backgroundPositionY:se,...MA,zIndex:yv,fillOpacity:Js,strokeOpacity:Js,numOctaves:yv},zA={...hc,color:dt,backgroundColor:dt,outlineColor:dt,fill:dt,stroke:dt,borderColor:dt,borderTopColor:dt,borderRightColor:dt,borderBottomColor:dt,borderLeftColor:dt,filter:rf,WebkitFilter:rf,mask:sf,WebkitMask:sf},m1=t=>zA[t],UA=new Set([rf,sf]);function g1(t,e){let a=m1(t);return UA.has(a)||(a=An),a.getAnimatableNone?a.getAnimatableNone(e):void 0}const BA=new Set(["auto","none","0"]);function PA(t,e,a){let r=0,o;for(;r<t.length&&!o;){const c=t[r];typeof c=="string"&&!BA.has(c)&&Sr(c).values.length&&(o=t[r]),r++}if(o&&a)for(const c of e)t[c]=g1(a,o)}class VA extends $f{constructor(e,a,r,o,c){super(e,a,r,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:a,name:r}=this;if(!a||!a.current)return;super.readKeyframes();for(let y=0;y<e.length;y++){let v=e[y];if(typeof v=="string"&&(v=v.trim(),zf(v))){const x=l1(v,a.current);x!==void 0&&(e[y]=x),y===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!c1.has(r)||e.length!==2)return;const[o,c]=e,d=gv(o),h=gv(c),p=nv(o),g=nv(c);if(p!==g&&$i[r]){this.needsMeasurement=!0;return}if(d!==h)if(dv(d)&&dv(h))for(let y=0;y<e.length;y++){const v=e[y];typeof v=="string"&&(e[y]=parseFloat(v))}else $i[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:a}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||NA(e[o]))&&r.push(o);r.length&&PA(e,r,a)}measureInitialState(){const{element:e,unresolvedKeyframes:a,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=$i[r](e.measureViewportBox(),window.getComputedStyle(e.current)),a[0]=this.measuredOrigin;const o=a[a.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var h;const{element:e,name:a,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(a);o&&o.jump(this.measuredOrigin,!1);const c=r.length-1,d=r[c];r[c]=$i[a](e.measureViewportBox(),window.getComputedStyle(e.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{e.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function y1(t,e,a){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(a==null?void 0:a[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t).filter(r=>r!=null)}const of=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function ql(t){return kx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:Kf}=Bx(queueMicrotask,!1),kn={x:!1,y:!1};function v1(){return kn.x||kn.y}function HA(t){return t==="x"||t==="y"?kn[t]?null:(kn[t]=!0,()=>{kn[t]=!1}):kn.x||kn.y?null:(kn.x=kn.y=!0,()=>{kn.x=kn.y=!1})}function b1(t,e){const a=y1(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[a,o,()=>r.abort()]}function $A(t){return!(t.pointerType==="touch"||v1())}function IA(t,e,a={}){const[r,o,c]=b1(t,a);return r.forEach(d=>{let h=!1,p=!1,g;const y=()=>{d.removeEventListener("pointerleave",S)},v=E=>{g&&(g(E),g=void 0),y()},x=E=>{h=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),p&&(p=!1,v(E))},w=()=>{h=!0,window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",x,o)},S=E=>{if(E.pointerType!=="touch"){if(h){p=!0;return}v(E)}},T=E=>{if(!$A(E))return;p=!1;const _=e(d,E);typeof _=="function"&&(g=_,d.addEventListener("pointerleave",S,o))};d.addEventListener("pointerenter",T,o),d.addEventListener("pointerdown",w,o)}),c}const x1=(t,e)=>e?t===e?!0:x1(t,e.parentElement):!1,Yf=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,qA=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FA(t){return qA.has(t.tagName)||t.isContentEditable===!0}const GA=new Set(["INPUT","SELECT","TEXTAREA"]);function KA(t){return GA.has(t.tagName)||t.isContentEditable===!0}const Fl=new WeakSet;function vv(t){return e=>{e.key==="Enter"&&t(e)}}function ph(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const YA=(t,e)=>{const a=t.currentTarget;if(!a)return;const r=vv(()=>{if(Fl.has(a))return;ph(a,"down");const o=vv(()=>{ph(a,"up")}),c=()=>ph(a,"cancel");a.addEventListener("keyup",o,e),a.addEventListener("blur",c,e)});a.addEventListener("keydown",r,e),a.addEventListener("blur",()=>a.removeEventListener("keydown",r),e)};function bv(t){return Yf(t)&&!v1()}const xv=new WeakSet;function WA(t,e,a={}){const[r,o,c]=b1(t,a),d=h=>{const p=h.currentTarget;if(!bv(h)||xv.has(h))return;Fl.add(p),a.stopPropagation&&xv.add(h);const g=e(p,h),y=(w,S)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),Fl.has(p)&&Fl.delete(p),bv(w)&&typeof g=="function"&&g(w,{success:S})},v=w=>{y(w,p===window||p===document||a.useGlobalTarget||x1(p,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",x,o)};return r.forEach(h=>{(a.useGlobalTarget?window:h).addEventListener("pointerdown",d,o),ql(h)&&(h.addEventListener("focus",g=>YA(g,o)),!FA(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function Wf(t){return kx(t)&&"ownerSVGElement"in t}const Gl=new WeakMap;let Pi;const w1=(t,e,a)=>(r,o)=>o&&o[0]?o[0][t+"Size"]:Wf(r)&&"getBBox"in r?r.getBBox()[e]:r[a],XA=w1("inline","width","offsetWidth"),JA=w1("block","height","offsetHeight");function QA({target:t,borderBoxSize:e}){var a;(a=Gl.get(t))==null||a.forEach(r=>{r(t,{get width(){return XA(t,e)},get height(){return JA(t,e)}})})}function ZA(t){t.forEach(QA)}function eC(){typeof ResizeObserver>"u"||(Pi=new ResizeObserver(ZA))}function tC(t,e){Pi||eC();const a=y1(t);return a.forEach(r=>{let o=Gl.get(r);o||(o=new Set,Gl.set(r,o)),o.add(e),Pi==null||Pi.observe(r)}),()=>{a.forEach(r=>{const o=Gl.get(r);o==null||o.delete(e),o!=null&&o.size||Pi==null||Pi.unobserve(r)})}}const Kl=new Set;let br;function nC(){br=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Kl.forEach(e=>e(t))},window.addEventListener("resize",br)}function iC(t){return Kl.add(t),br||nC(),()=>{Kl.delete(t),!Kl.size&&typeof br=="function"&&(window.removeEventListener("resize",br),br=void 0)}}function wv(t,e){return typeof t=="function"?iC(t):tC(t,e)}function aC(t){return Wf(t)&&t.tagName==="svg"}const rC=[...p1,dt,An],sC=t=>rC.find(f1(t)),Sv=()=>({translate:0,scale:1,origin:0,originPoint:0}),xr=()=>({x:Sv(),y:Sv()}),jv=()=>({min:0,max:0}),pt=()=>({x:jv(),y:jv()}),oC=new WeakMap;function Ac(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Qs(t){return typeof t=="string"||Array.isArray(t)}const Xf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Jf=["initial",...Xf];function Cc(t){return Ac(t.animate)||Jf.some(e=>Qs(t[e]))}function S1(t){return!!(Cc(t)||t.variants)}function lC(t,e,a){for(const r in e){const o=e[r],c=a[r];if(_t(o))t.addValue(r,o);else if(_t(c))t.addValue(r,jr(o,{owner:t}));else if(c!==o)if(t.hasValue(r)){const d=t.getValue(r);d.liveStyle===!0?d.jump(o):d.hasAnimated||d.set(o)}else{const d=t.getStaticValue(r);t.addValue(r,jr(d!==void 0?d:o,{owner:t}))}}for(const r in a)e[r]===void 0&&t.removeValue(r);return e}const lf={current:null},j1={current:!1},cC=typeof window<"u";function uC(){if(j1.current=!0,!!cC)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>lf.current=t.matches;t.addEventListener("change",e),e()}else lf.current=!1}const kv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let fc={};function k1(t){fc=t}function dC(){return fc}class hC{scrapeMotionValuesFromProps(e,a,r){return{}}constructor({parent:e,props:a,presenceContext:r,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=$f,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Rt.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Fe.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=a.initial?{...g}:{},this.renderState=y,this.parent=e,this.props=a,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Cc(a),this.isVariantNode=S1(a),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(a,{},this);for(const w in x){const S=x[w];g[w]!==void 0&&_t(S)&&S.set(g[w])}}mount(e){var a,r;if(this.hasBeenMounted)for(const o in this.initialValues)(a=this.values.get(o))==null||a.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,oC.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,c)=>this.bindToMotionValue(c,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(j1.current||uC(),this.shouldReduceMotion=lf.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),qi(this.notifyUpdate),qi(this.render),this.valueSubscriptions.forEach(a=>a()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const a in this.events)this.events[a].clear();for(const a in this.features){const r=this.features[a];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,a){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),a.accelerate&&r1.has(e)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:y}=a.accelerate,v=new i1({element:this.current,name:e,keyframes:h,times:p,ease:g,duration:tn(y)}),x=d(v);this.valueSubscriptions.set(e,()=>{x(),v.cancel()});return}const r=Rr.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=a.on("change",d=>{this.latestValues[e]=d,this.props.onUpdate&&Fe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,a)),this.valueSubscriptions.set(e,()=>{o(),c&&c()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in fc){const a=fc[e];if(!a)continue;const{isEnabled:r,Feature:o}=a;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):pt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,a){this.latestValues[e]=a}update(e,a){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=a;for(let r=0;r<kv.length;r++){const o=kv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,d=e[c];d&&(this.propEventSubscriptions[o]=this.on(o,d))}this.prevMotionValues=lC(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const a=this.getClosestVariantNode();if(a)return a.variantChildren&&a.variantChildren.add(e),()=>a.variantChildren.delete(e)}addValue(e,a){const r=this.values.get(e);a!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,a),this.values.set(e,a),this.latestValues[e]=a.get())}removeValue(e){this.values.delete(e);const a=this.valueSubscriptions.get(e);a&&(a(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,a){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&a!==void 0&&(r=jr(a===null?void 0:a,{owner:this}),this.addValue(e,r)),r}readValue(e,a){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(jx(r)||_x(r))?r=parseFloat(r):!sC(r)&&An.test(a)&&(r=g1(e,a)),this.setBaseTarget(e,_t(r)?r.get():r)),_t(r)?r.get():r}setBaseTarget(e,a){this.baseTarget[e]=a}getBaseTarget(e){var c;const{initial:a}=this.props;let r;if(typeof a=="string"||typeof a=="object"){const d=Ff(this.props,a,(c=this.presenceContext)==null?void 0:c.custom);d&&(r=d[e])}if(a&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!_t(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,a){return this.events[e]||(this.events[e]=new Df),this.events[e].add(a)}notify(e,...a){this.events[e]&&this.events[e].notify(...a)}scheduleRenderMicrotask(){Kf.render(this.render)}}class _1 extends hC{constructor(){super(...arguments),this.KeyframeResolver=VA}sortInstanceNodePosition(e,a){return e.compareDocumentPosition(a)&2?1:-1}getBaseTargetFromProps(e,a){const r=e.style;return r?r[a]:void 0}removeValueFromRenderState(e,{vars:a,style:r}){delete a[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;_t(e)&&(this.childSubscription=e.on("change",a=>{this.current&&(this.current.textContent=`${a}`)}))}}class Gi{constructor(e){this.isMounted=!1,this.node=e}update(){}}function T1({top:t,left:e,right:a,bottom:r}){return{x:{min:e,max:a},y:{min:t,max:r}}}function fC({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function pC(t,e){if(!e)return t;const a=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:a.y,left:a.x,bottom:r.y,right:r.x}}function mh(t){return t===void 0||t===1}function cf({scale:t,scaleX:e,scaleY:a}){return!mh(t)||!mh(e)||!mh(a)}function ma(t){return cf(t)||E1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function E1(t){return _v(t.x)||_v(t.y)}function _v(t){return t&&t!=="0%"}function pc(t,e,a){const r=t-a,o=e*r;return a+o}function Tv(t,e,a,r,o){return o!==void 0&&(t=pc(t,o,r)),pc(t,a,r)+e}function uf(t,e=0,a=1,r,o){t.min=Tv(t.min,e,a,r,o),t.max=Tv(t.max,e,a,r,o)}function A1(t,{x:e,y:a}){uf(t.x,e.translate,e.scale,e.originPoint),uf(t.y,a.translate,a.scale,a.originPoint)}const Ev=.999999999999,Av=1.0000000000001;function mC(t,e,a,r=!1){var h;const o=a.length;if(!o)return;e.x=e.y=1;let c,d;for(let p=0;p<o;p++){c=a[p],d=c.projectionDelta;const{visualElement:g}=c.options;g&&g.props.style&&g.props.style.display==="contents"||(r&&c.options.layoutScroll&&c.scroll&&c!==c.root&&(Pn(t.x,-c.scroll.offset.x),Pn(t.y,-c.scroll.offset.y)),d&&(e.x*=d.x.scale,e.y*=d.y.scale,A1(t,d)),r&&ma(c.latestValues)&&Yl(t,c.latestValues,(h=c.layout)==null?void 0:h.layoutBox))}e.x<Av&&e.x>Ev&&(e.x=1),e.y<Av&&e.y>Ev&&(e.y=1)}function Pn(t,e){t.min+=e,t.max+=e}function Cv(t,e,a,r,o=.5){const c=qe(t.min,t.max,o);uf(t,e,a,c,r)}function Rv(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Yl(t,e,a){const r=a??t;Cv(t.x,Rv(e.x,r.x),e.scaleX,e.scale,e.originX),Cv(t.y,Rv(e.y,r.y),e.scaleY,e.scale,e.originY)}function C1(t,e){return T1(pC(t.getBoundingClientRect(),e))}function gC(t,e,a){const r=C1(t,a),{scroll:o}=e;return o&&(Pn(r.x,o.offset.x),Pn(r.y,o.offset.y)),r}const yC={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vC=Cr.length;function bC(t,e,a){let r="",o=!0;for(let d=0;d<vC;d++){const h=Cr[d],p=t[h];if(p===void 0)continue;let g=!0;if(typeof p=="number")g=p===(h.startsWith("scale")?1:0);else{const y=parseFloat(p);g=h.startsWith("scale")?y===1:y===0}if(!g||a){const y=of(p,hc[h]);if(!g){o=!1;const v=yC[h]||h;r+=`${v}(${y}) `}a&&(e[h]=y)}}const c=t.pathRotation;return c&&(o=!1,r+=`rotate(${of(c,hc.pathRotation)}) `),r=r.trim(),a?r=a(e,o?"":r):o&&(r="none"),r}function Qf(t,e,a){const{style:r,vars:o,transformOrigin:c}=t;let d=!1,h=!1;for(const p in e){const g=e[p];if(Rr.has(p)){d=!0;continue}else if(Vx(p)){o[p]=g;continue}else{const y=of(g,hc[p]);p.startsWith("origin")?(h=!0,c[p]=y):r[p]=y}}if(e.transform||(d||a?r.transform=bC(e,t.transform,a):r.transform&&(r.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=c;r.transformOrigin=`${p} ${g} ${y}`}}function R1(t,{style:e,vars:a},r,o){const c=t.style;let d;for(d in e)c[d]=e[d];o==null||o.applyProjectionStyles(c,r);for(d in a)c.setProperty(d,a[d])}function Nv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Es={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(se.test(t))t=parseFloat(t);else return t;const a=Nv(t,e.target.x),r=Nv(t,e.target.y);return`${a}% ${r}%`}},xC={correct:(t,{treeScale:e,projectionDelta:a})=>{const r=t,o=An.parse(t);if(o.length>5)return r;const c=An.createTransformer(t),d=typeof o[0]!="number"?1:0,h=a.x.scale*e.x,p=a.y.scale*e.y;o[0+d]/=h,o[1+d]/=p;const g=qe(h,p,.5);return typeof o[2+d]=="number"&&(o[2+d]/=g),typeof o[3+d]=="number"&&(o[3+d]/=g),c(o)}},df={borderRadius:{...Es,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Es,borderTopRightRadius:Es,borderBottomLeftRadius:Es,borderBottomRightRadius:Es,boxShadow:xC};function N1(t,{layout:e,layoutId:a}){return Rr.has(t)||t.startsWith("origin")||(e||a!==void 0)&&(!!df[t]||t==="opacity")}function Zf(t,e,a){var d;const r=t.style,o=e==null?void 0:e.style,c={};if(!r)return c;for(const h in r)(_t(r[h])||o&&_t(o[h])||N1(h,t)||((d=a==null?void 0:a.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(c[h]=r[h]);return c}function wC(t){return window.getComputedStyle(t)}class SC extends _1{constructor(){super(...arguments),this.type="html",this.renderInstance=R1}readValueFromInstance(e,a){var r;if(Rr.has(a))return(r=this.projection)!=null&&r.isProjecting?Wh(a):$E(e,a);{const o=wC(e),c=(Vx(a)?o.getPropertyValue(a):o[a])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(e,{transformPagePoint:a}){return C1(e,a)}build(e,a,r){Qf(e,a,r.transformTemplate)}scrapeMotionValuesFromProps(e,a,r){return Zf(e,a,r)}}const jC={offset:"stroke-dashoffset",array:"stroke-dasharray"},kC={offset:"strokeDashoffset",array:"strokeDasharray"};function _C(t,e,a=1,r=0,o=!0){t.pathLength=1;const c=o?jC:kC;t[c.offset]=`${-r}`,t[c.array]=`${e} ${a}`}const TC=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function O1(t,{attrX:e,attrY:a,attrScale:r,pathLength:o,pathSpacing:c=1,pathOffset:d=0,...h},p,g,y){if(Qf(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:x}=t;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete v.transformBox);for(const w of TC)v[w]!==void 0&&(x[w]=v[w],delete v[w]);e!==void 0&&(v.x=e),a!==void 0&&(v.y=a),r!==void 0&&(v.scale=r),o!==void 0&&_C(v,o,c,d,!1)}const D1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),L1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function EC(t,e,a,r){R1(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(D1.has(o)?o:Gf(o),e.attrs[o])}function M1(t,e,a){const r=Zf(t,e,a);for(const o in t)if(_t(t[o])||_t(e[o])){const c=Cr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[c]=t[o]}return r}class AC extends _1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=pt}getBaseTargetFromProps(e,a){return e[a]}readValueFromInstance(e,a){if(Rr.has(a)){const r=m1(a);return r&&r.default||0}return a=D1.has(a)?a:Gf(a),e.getAttribute(a)}scrapeMotionValuesFromProps(e,a,r){return M1(e,a,r)}build(e,a,r){O1(e,a,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,a,r,o){EC(e,a,r,o)}mount(e){this.isSVGTag=L1(e.tagName),super.mount(e)}}const CC=Jf.length;function z1(t){if(!t)return;if(!t.isControllingVariants){const a=t.parent?z1(t.parent)||{}:{};return t.props.initial!==void 0&&(a.initial=t.props.initial),a}const e={};for(let a=0;a<CC;a++){const r=Jf[a],o=t.props[r];(Qs(o)||o===!1)&&(e[r]=o)}return e}function U1(t,e){if(!Array.isArray(e))return!1;const a=e.length;if(a!==t.length)return!1;for(let r=0;r<a;r++)if(e[r]!==t[r])return!1;return!0}const RC=[...Xf].reverse(),NC=Xf.length;function OC(t){return e=>Promise.all(e.map(({animation:a,options:r})=>CA(t,a,r)))}function DC(t){let e=OC(t),a=Ov(),r=!0,o=!1;const c=g=>(y,v)=>{var w;const x=Sa(t,v,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(x){const{transition:S,transitionEnd:T,...E}=x;y={...y,...E,...T}}return y};function d(g){e=g(t)}function h(g){const{props:y}=t,v=z1(t.parent)||{},x=[],w=new Set;let S={},T=1/0;for(let _=0;_<NC;_++){const N=RC[_],C=a[N],V=y[N]!==void 0?y[N]:v[N],Y=Qs(V),J=N===g?C.isActive:null;J===!1&&(T=_);let M=V===v[N]&&V!==y[N]&&Y;if(M&&(r||o)&&t.manuallyAnimateOnMount&&(M=!1),C.protectedKeys={...S},!C.isActive&&J===null||!V&&!C.prevProp||Ac(V)||typeof V=="boolean")continue;if(N==="exit"&&C.isActive&&J!==!0){C.prevResolvedValues&&(S={...S,...C.prevResolvedValues});continue}const H=LC(C.prevProp,V);let Q=H||N===g&&C.isActive&&!M&&Y||_>T&&Y,Z=!1;const ye=Array.isArray(V)?V:[V];let he=ye.reduce(c(N),{});J===!1&&(he={});const{prevResolvedValues:Ae={}}=C,Le={...Ae,...he},pe=ie=>{Q=!0,w.has(ie)&&(Z=!0,w.delete(ie)),C.needsAnimating[ie]=!0;const be=t.getValue(ie);be&&(be.liveStyle=!1)};for(const ie in Le){const be=he[ie],ke=Ae[ie];if(S.hasOwnProperty(ie))continue;let R=!1;tf(be)&&tf(ke)?R=!U1(be,ke)||H:R=be!==ke,R?be!=null?pe(ie):w.add(ie):be!==void 0&&w.has(ie)?pe(ie):C.protectedKeys[ie]=!0}C.prevProp=V,C.prevResolvedValues=he,C.isActive&&(S={...S,...he}),(r||o)&&t.blockInitialAnimation&&(Q=!1);const z=M&&H;Q&&(!z||Z)&&x.push(...ye.map(ie=>{const be={type:N};if(typeof ie=="string"&&(r||o)&&!z&&t.manuallyAnimateOnMount&&t.parent){const{parent:ke}=t,R=Sa(ke,ie);if(ke.enteringChildren&&R){const{delayChildren:q}=R.transition||{};be.delay=s1(ke.enteringChildren,t,q)}}return{animation:ie,options:be}}))}if(w.size){const _={};if(typeof y.initial!="boolean"){const N=Sa(t,Array.isArray(y.initial)?y.initial[0]:y.initial);N&&N.transition&&(_.transition=N.transition)}w.forEach(N=>{const C=t.getBaseTarget(N),V=t.getValue(N);V&&(V.liveStyle=!0),_[N]=C??null}),x.push({animation:_})}let E=!!x.length;return r&&(y.initial===!1||y.initial===y.animate)&&!t.manuallyAnimateOnMount&&(E=!1),r=!1,o=!1,E?e(x):Promise.resolve()}function p(g,y){var x;if(a[g].isActive===y)return Promise.resolve();(x=t.variantChildren)==null||x.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,y)}),a[g].isActive=y;const v=h(g);for(const w in a)a[w].protectedKeys={};return v}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>a,reset:()=>{a=Ov(),o=!0}}}function LC(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!U1(e,t):!1}function fa(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ov(){return{animate:fa(!0),whileInView:fa(),whileHover:fa(),whileTap:fa(),whileDrag:fa(),whileFocus:fa(),exit:fa()}}function hf(t,e){t.min=e.min,t.max=e.max}function Sn(t,e){hf(t.x,e.x),hf(t.y,e.y)}function Dv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const B1=1e-4,MC=1-B1,zC=1+B1,P1=.01,UC=0-P1,BC=0+P1;function Nt(t){return t.max-t.min}function PC(t,e,a){return Math.abs(t-e)<=a}function Lv(t,e,a,r=.5){t.origin=r,t.originPoint=qe(e.min,e.max,t.origin),t.scale=Nt(a)/Nt(e),t.translate=qe(a.min,a.max,t.origin)-t.originPoint,(t.scale>=MC&&t.scale<=zC||isNaN(t.scale))&&(t.scale=1),(t.translate>=UC&&t.translate<=BC||isNaN(t.translate))&&(t.translate=0)}function Vs(t,e,a,r){Lv(t.x,e.x,a.x,r?r.originX:void 0),Lv(t.y,e.y,a.y,r?r.originY:void 0)}function Mv(t,e,a,r=0){const o=r?qe(a.min,a.max,r):a.min;t.min=o+e.min,t.max=t.min+Nt(e)}function VC(t,e,a,r){Mv(t.x,e.x,a.x,r==null?void 0:r.x),Mv(t.y,e.y,a.y,r==null?void 0:r.y)}function zv(t,e,a,r=0){const o=r?qe(a.min,a.max,r):a.min;t.min=e.min-o,t.max=t.min+Nt(e)}function mc(t,e,a,r){zv(t.x,e.x,a.x,r==null?void 0:r.x),zv(t.y,e.y,a.y,r==null?void 0:r.y)}function Uv(t,e,a,r,o){return t-=e,t=pc(t,1/a,r),o!==void 0&&(t=pc(t,1/o,r)),t}function HC(t,e=0,a=1,r=.5,o,c=t,d=t){if(Vn.test(e)&&(e=parseFloat(e),e=qe(d.min,d.max,e/100)-d.min),typeof e!="number")return;let h=qe(c.min,c.max,r);t===c&&(h-=e),t.min=Uv(t.min,e,a,h,o),t.max=Uv(t.max,e,a,h,o)}function Bv(t,e,[a,r,o],c,d){HC(t,e[a],e[r],e[o],e.scale,c,d)}const $C=["x","scaleX","originX"],IC=["y","scaleY","originY"];function Pv(t,e,a,r){Bv(t.x,e,$C,a?a.x:void 0,r?r.x:void 0),Bv(t.y,e,IC,a?a.y:void 0,r?r.y:void 0)}function Vv(t){return t.translate===0&&t.scale===1}function V1(t){return Vv(t.x)&&Vv(t.y)}function Hv(t,e){return t.min===e.min&&t.max===e.max}function qC(t,e){return Hv(t.x,e.x)&&Hv(t.y,e.y)}function $v(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function H1(t,e){return $v(t.x,e.x)&&$v(t.y,e.y)}function Iv(t){return Nt(t.x)/Nt(t.y)}function qv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function zn(t){return[t("x"),t("y")]}function FC(t,e,a){let r="";const o=t.x.translate/e.x,c=t.y.translate/e.y,d=(a==null?void 0:a.z)||0;if((o||c||d)&&(r=`translate3d(${o}px, ${c}px, ${d}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),a){const{transformPerspective:g,rotate:y,pathRotation:v,rotateX:x,rotateY:w,skewX:S,skewY:T}=a;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),v&&(r+=`rotate(${v}deg) `),x&&(r+=`rotateX(${x}deg) `),w&&(r+=`rotateY(${w}deg) `),S&&(r+=`skewX(${S}deg) `),T&&(r+=`skewY(${T}deg) `)}const h=t.x.scale*e.x,p=t.y.scale*e.y;return(h!==1||p!==1)&&(r+=`scale(${h}, ${p})`),r||"none"}const $1=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],GC=$1.length,Fv=t=>typeof t=="string"?parseFloat(t):t,Gv=t=>typeof t=="number"||se.test(t);function KC(t,e,a,r,o,c){o?(t.opacity=qe(0,a.opacity??1,YC(r)),t.opacityExit=qe(e.opacity??1,0,WC(r))):c&&(t.opacity=qe(e.opacity??1,a.opacity??1,r));for(let d=0;d<GC;d++){const h=$1[d];let p=Kv(e,h),g=Kv(a,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||Gv(p)===Gv(g)?(t[h]=Math.max(qe(Fv(p),Fv(g),r),0),(Vn.test(g)||Vn.test(p))&&(t[h]+="%")):t[h]=g}(e.rotate||a.rotate)&&(t.rotate=qe(e.rotate||0,a.rotate||0,r))}function Kv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const YC=I1(0,.5,Lx),WC=I1(.5,.95,yn);function I1(t,e,a){return r=>r<t?0:r>e?1:a(Xs(t,e,r))}function XC(t,e,a){const r=_t(t)?t:jr(t);return r.start(qf("",r,e,a)),r.animation}function Zs(t,e,a,r={passive:!0}){return t.addEventListener(e,a,r),()=>t.removeEventListener(e,a)}const JC=(t,e)=>t.depth-e.depth;class QC{constructor(){this.children=[],this.isDirty=!1}add(e){Nf(this.children,e),this.isDirty=!0}remove(e){oc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JC),this.isDirty=!1,this.children.forEach(e)}}function ZC(t,e){const a=Rt.now(),r=({timestamp:o})=>{const c=o-a;c>=e&&(qi(r),t(c-e))};return Fe.setup(r,!0),()=>qi(r)}function Wl(t){return _t(t)?t.get():t}class e4{constructor(){this.members=[]}add(e){Nf(this.members,e);for(let a=this.members.length-1;a>=0;a--){const r=this.members[a];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(oc(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(oc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const a=this.members[this.members.length-1];a&&this.promote(a)}}relegate(e){var a;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((a=o.instance)==null?void 0:a.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,a){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:c}=r.options,{layoutDependency:d}=e.options;(c===void 0||c!==d)&&(e.resumeFrom=r,a&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var a,r,o,c,d;(r=(a=e.options).onExitComplete)==null||r.call(a),(d=(o=e.resumingFrom)==null?void 0:(c=o.options).onExitComplete)==null||d.call(c)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Xl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},gh=["","X","Y","Z"],t4=1e3;let n4=0;function yh(t,e,a,r){const{latestValues:o}=e;o[t]&&(a[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function q1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const a=d1(e);if(window.MotionHasOptimisedAnimation(a,"transform")){const{layout:o,layoutId:c}=t.options;window.MotionCancelOptimisedAnimation(a,"transform",Fe,!(o||c))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&q1(r)}function F1({attachResizeListener:t,defaultParent:e,measureScroll:a,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(d={},h=e==null?void 0:e()){this.id=n4++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(r4),this.nodes.forEach(d4),this.nodes.forEach(h4),this.nodes.forEach(s4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new QC)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Df),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Wf(d)&&!aC(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;Fe.read(()=>{v=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=ZC(x,250),Xl.hasAnimatedSinceResize&&(Xl.hasAnimatedSinceResize=!1,this.nodes.forEach(Xv)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||y4,{onLayoutAnimationStart:T,onLayoutAnimationComplete:E}=g.getProps(),_=!this.targetLayout||!H1(this.targetLayout,w),N=!v&&x;if(this.options.layoutRoot||this.resumeFrom||N||v&&(_||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const C={...If(S,"layout"),onPlay:T,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C),this.setAnimationOrigin(y,N,C.path)}else v||Xv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(f4),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&q1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(l4),this.nodes.forEach(Yv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Wv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(c4),this.nodes.forEach(u4),this.nodes.forEach(i4),this.nodes.forEach(a4)):this.nodes.forEach(Wv),this.clearAllSnapshots();const h=Rt.now();kt.delta=Hn(0,1e3/60,h-kt.timestamp),kt.timestamp=h,kt.isProcessing=!0,lh.update.process(kt),lh.preRender.process(kt),lh.render.process(kt),kt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,Kf.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(o4),this.sharedNodes.forEach(p4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Nt(this.snapshot.measuredBox.x)&&!Nt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=pt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:a(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!V1(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||ma(this.latestValues)||y)&&(o(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),v4(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return pt();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(b4))){const{scroll:y}=this.root;y&&(Pn(h.x,y.offset.x),Pn(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=pt();if(Sn(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&Sn(h,d),Pn(h.x,v.offset.x),Pn(h.y,v.offset.y))}return h}applyTransform(d,h=!1,p){var y,v;const g=p||pt();Sn(g,d);for(let x=0;x<this.path.length;x++){const w=this.path[x];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Pn(g.x,-w.scroll.offset.x),Pn(g.y,-w.scroll.offset.y)),ma(w.latestValues)&&Yl(g,w.latestValues,(y=w.layout)==null?void 0:y.layoutBox)}return ma(this.latestValues)&&Yl(g,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),g}removeTransform(d){var p;const h=pt();Sn(h,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];if(!ma(y.latestValues))continue;let v;y.instance&&(cf(y.latestValues)&&y.updateSnapshot(),v=pt(),Sn(v,y.measurePageBox())),Pv(h,y.latestValues,(p=y.snapshot)==null?void 0:p.layoutBox,v)}return ma(this.latestValues)&&Pv(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==kt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=kt.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=pt(),this.targetWithTransforms=pt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VC(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Sn(this.target,this.layout.layoutBox),A1(this.target,this.targetDelta)):Sn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||cf(this.parent.latestValues)||E1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=pt(),this.relativeTargetOrigin=pt(),mc(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),Sn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===kt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;Sn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;mC(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=pt());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Dv(this.prevProjectionDelta.x,this.projectionDelta.x),Dv(this.prevProjectionDelta.y,this.projectionDelta.y)),Vs(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!qv(this.projectionDelta.x,this.prevProjectionDelta.x)||!qv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=xr(),this.projectionDelta=xr(),this.projectionDeltaWithTransform=xr()}setAnimationOrigin(d,h=!1,p){const g=this.snapshot,y=g?g.latestValues:{},v={...this.latestValues},x=xr();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=pt(),S=g?g.source:void 0,T=this.layout?this.layout.source:void 0,E=S!==T,_=this.getStack(),N=!_||_.members.length<=1,C=!!(E&&!N&&this.options.crossfade===!0&&!this.path.some(g4));this.animationProgress=0;let V;const Y=p==null?void 0:p.interpolateProjection(d);this.mixTargetDelta=J=>{const M=J/1e3,H=Y==null?void 0:Y(M);H?(x.x.translate=H.x,x.x.scale=qe(d.x.scale,1,M),x.x.origin=d.x.origin,x.x.originPoint=d.x.originPoint,x.y.translate=H.y,x.y.scale=qe(d.y.scale,1,M),x.y.origin=d.y.origin,x.y.originPoint=d.y.originPoint):(Jv(x.x,d.x,M),Jv(x.y,d.y,M)),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(mc(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),m4(this.relativeTarget,this.relativeTargetOrigin,w,M),V&&qC(this.relativeTarget,V)&&(this.isProjectionDirty=!1),V||(V=pt()),Sn(V,this.relativeTarget)),E&&(this.animationValues=v,KC(v,y,this.latestValues,M,C,N)),H&&H.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=H.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(qi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Fe.update(()=>{Xl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=jr(0)),this.motionValue.jump(0,!1),this.currentAnimation=XC(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(t4),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&G1(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||pt();const v=Nt(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+v;const x=Nt(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+x}Sn(h,p),Yl(h,y),Vs(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new e4),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&yh("z",d,g,this.animationValues);for(let y=0;y<gh.length;y++)yh(`rotate${gh[y]}`,d,g,this.animationValues),yh(`skew${gh[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Wl(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Wl(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!ma(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=FC(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),d.transform=v;const{x,y:w}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const S in df){if(y[S]===void 0)continue;const{correct:T,applyTo:E,isCSSVariable:_}=df[S],N=v==="none"?y[S]:T(y[S],g);if(E){const C=E.length;for(let V=0;V<C;V++)d[E[V]]=N}else _?this.options.visualElement.renderState.vars[S]=N:d[S]=N}this.options.layoutId&&(d.pointerEvents=g===this?Wl(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Yv),this.root.sharedNodes.clear()}}}function i4(t){t.updateLayout()}function a4(t){var a;const e=((a=t.resumeFrom)==null?void 0:a.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:c}=t.options,d=e.source!==t.layout.source;if(c==="size")zn(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Nt(x);x.min=r[v].min,x.max=x.min+w});else if(c==="x"||c==="y"){const v=c==="x"?"y":"x";hf(d?e.measuredBox[v]:e.layoutBox[v],r[v])}else G1(c,e.layoutBox,r)&&zn(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Nt(r[v]);x.max=x.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+w)});const h=xr();Vs(h,r,e.layoutBox);const p=xr();d?Vs(p,t.applyTransform(o,!0),e.measuredBox):Vs(p,r,e.layoutBox);const g=!V1(h);let y=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:w}=v;if(x&&w){const S=t.options.layoutAnchor||void 0,T=pt();mc(T,e.layoutBox,x.layoutBox,S);const E=pt();mc(E,r,w.layoutBox,S),H1(T,E)||(y=!0),v.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=T,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function r4(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function s4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function o4(t){t.clearSnapshot()}function Yv(t){t.clearMeasurements()}function l4(t){t.isLayoutDirty=!0,t.updateLayout()}function Wv(t){t.isLayoutDirty=!1}function c4(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function u4(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Xv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function d4(t){t.resolveTargetDelta()}function h4(t){t.calcProjection()}function f4(t){t.resetSkewAndRotation()}function p4(t){t.removeLeadSnapshot()}function Jv(t,e,a){t.translate=qe(e.translate,0,a),t.scale=qe(e.scale,1,a),t.origin=e.origin,t.originPoint=e.originPoint}function Qv(t,e,a,r){t.min=qe(e.min,a.min,r),t.max=qe(e.max,a.max,r)}function m4(t,e,a,r){Qv(t.x,e.x,a.x,r),Qv(t.y,e.y,a.y,r)}function g4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const y4={duration:.45,ease:[.4,0,.1,1]},Zv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),eb=Zv("applewebkit/")&&!Zv("chrome/")?Math.round:yn;function tb(t){t.min=eb(t.min),t.max=eb(t.max)}function v4(t){tb(t.x),tb(t.y)}function G1(t,e,a){return t==="position"||t==="preserve-aspect"&&!PC(Iv(e),Iv(a),.2)}function b4(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const x4=F1({attachResizeListener:(t,e)=>Zs(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),vh={current:void 0},K1=F1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!vh.current){const t=new x4({});t.mount(window),t.setOptions({layoutScroll:!0}),vh.current=t}return vh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),ep=j.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function nb(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function w4(...t){return e=>{let a=!1;const r=t.map(o=>{const c=nb(o,e);return!a&&typeof c=="function"&&(a=!0),c});if(a)return()=>{for(let o=0;o<r.length;o++){const c=r[o];typeof c=="function"?c():nb(t[o],null)}}}}function S4(...t){return j.useCallback(w4(...t),t)}class j4 extends j.Component{getSnapshotBeforeUpdate(e){const a=this.props.childRef.current;if(ql(a)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=a.offsetParent,o=ql(r)&&r.offsetWidth||0,c=ql(r)&&r.offsetHeight||0,d=getComputedStyle(a),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=a.offsetTop,h.left=a.offsetLeft,h.right=o-h.width-h.left,h.bottom=c-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function k4({children:t,isPresent:e,anchorX:a,anchorY:r,root:o,pop:c}){var x;const d=j.useId(),h=j.useRef(null),p=j.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:g}=j.useContext(ep),y=((x=t.props)==null?void 0:x.ref)??(t==null?void 0:t.ref),v=S4(h,y);return j.useInsertionEffect(()=>{const{width:w,height:S,top:T,left:E,right:_,bottom:N,direction:C}=p.current;if(e||c===!1||!h.current||!w||!S)return;const V=C==="rtl",Y=a==="left"?V?`right: ${_}`:`left: ${E}`:V?`left: ${E}`:`right: ${_}`,J=r==="bottom"?`bottom: ${N}`:`top: ${T}`;h.current.dataset.motionPopId=d;const M=document.createElement("style");g&&(M.nonce=g);const H=o??document.head;return H.appendChild(M),M.sheet&&M.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${S}px !important;
            ${Y}px !important;
            ${J}px !important;
          }
        `),()=>{var Q;(Q=h.current)==null||Q.removeAttribute("data-motion-pop-id"),H.contains(M)&&H.removeChild(M)}},[e]),u.jsx(j4,{isPresent:e,childRef:h,sizeRef:p,pop:c,children:c===!1?t:j.cloneElement(t,{ref:v})})}const _4=({children:t,initial:e,isPresent:a,onExitComplete:r,custom:o,presenceAffectsLayout:c,mode:d,anchorX:h,anchorY:p,root:g})=>{const y=Rf(T4),v=j.useId();let x=!0,w=j.useMemo(()=>(x=!1,{id:v,initial:e,isPresent:a,custom:o,onExitComplete:S=>{y.set(S,!0);for(const T of y.values())if(!T)return;r&&r()},register:S=>(y.set(S,!1),()=>y.delete(S))}),[a,y,r]);return c&&x&&(w={...w}),j.useMemo(()=>{y.forEach((S,T)=>y.set(T,!1))},[a]),j.useEffect(()=>{!a&&!y.size&&r&&r()},[a]),t=u.jsx(k4,{pop:d==="popLayout",isPresent:a,anchorX:h,anchorY:p,root:g,children:t}),u.jsx(Tc.Provider,{value:w,children:t})};function T4(){return new Map}function Y1(t=!0){const e=j.useContext(Tc);if(e===null)return[!0,null];const{isPresent:a,onExitComplete:r,register:o}=e,c=j.useId();j.useEffect(()=>{if(t)return o(c)},[t]);const d=j.useCallback(()=>t&&r&&r(c),[c,r,t]);return!a&&r?[!1,d]:[!0]}const zl=t=>t.key||"";function ib(t){const e=[];return j.Children.forEach(t,a=>{j.isValidElement(a)&&e.push(a)}),e}const nn=({children:t,custom:e,initial:a=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:c="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,v]=Y1(d),x=j.useMemo(()=>ib(t),[t]),w=d&&!y?[]:x.map(zl),S=j.useRef(!0),T=j.useRef(x),E=Rf(()=>new Map),_=j.useRef(new Set),[N,C]=j.useState(x),[V,Y]=j.useState(x);Sx(()=>{S.current=!1,T.current=x;for(let H=0;H<V.length;H++){const Q=zl(V[H]);w.includes(Q)?(E.delete(Q),_.current.delete(Q)):E.get(Q)!==!0&&E.set(Q,!1)}},[V,w.length,w.join("-")]);const J=[];if(x!==N){let H=[...x];for(let Q=0;Q<V.length;Q++){const Z=V[Q],ye=zl(Z);w.includes(ye)||(H.splice(Q,0,Z),J.push(Z))}return c==="wait"&&J.length&&(H=J),Y(ib(H)),C(x),null}const{forceRender:M}=j.useContext(Cf);return u.jsx(u.Fragment,{children:V.map(H=>{const Q=zl(H),Z=d&&!y?!1:x===V||w.includes(Q),ye=()=>{if(_.current.has(Q))return;if(E.has(Q))_.current.add(Q),E.set(Q,!0);else return;let he=!0;E.forEach(Ae=>{Ae||(he=!1)}),he&&(M==null||M(),Y(T.current),d&&(v==null||v()),r&&r())};return u.jsx(_4,{isPresent:Z,initial:!S.current||a?void 0:!1,custom:e,presenceAffectsLayout:o,mode:c,root:g,onExitComplete:Z?void 0:ye,anchorX:h,anchorY:p,children:H},Q)})})},W1=j.createContext({strict:!1}),ab={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let rb=!1;function E4(){if(rb)return;const t={};for(const e in ab)t[e]={isEnabled:a=>ab[e].some(r=>!!a[r])};k1(t),rb=!0}function X1(){return E4(),dC()}function A4(t){const e=X1();for(const a in t)e[a]={...e[a],...t[a]};k1(e)}const C4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function gc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||C4.has(t)}let J1=t=>!gc(t);function R4(t){typeof t=="function"&&(J1=e=>e.startsWith("on")?!gc(e):t(e))}try{R4(require("@emotion/is-prop-valid").default)}catch{}function N4(t,e,a){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||_t(t[o])||(J1(o)||a===!0&&gc(o)||!e&&!gc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const Rc=j.createContext({});function O4(t,e){if(Cc(t)){const{initial:a,animate:r}=t;return{initial:a===!1||Qs(a)?a:void 0,animate:Qs(r)?r:void 0}}return t.inherit!==!1?e:{}}function D4(t){const{initial:e,animate:a}=O4(t,j.useContext(Rc));return j.useMemo(()=>({initial:e,animate:a}),[sb(e),sb(a)])}function sb(t){return Array.isArray(t)?t.join(" "):t}const tp=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Q1(t,e,a){for(const r in e)!_t(e[r])&&!N1(r,a)&&(t[r]=e[r])}function L4({transformTemplate:t},e){return j.useMemo(()=>{const a=tp();return Qf(a,e,t),Object.assign({},a.vars,a.style)},[e])}function M4(t,e){const a=t.style||{},r={};return Q1(r,a,t),Object.assign(r,L4(t,e)),r}function z4(t,e){const a={},r=M4(t,e);return t.drag&&t.dragListener!==!1&&(a.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(a.tabIndex=0),a.style=r,a}const Z1=()=>({...tp(),attrs:{}});function U4(t,e,a,r){const o=j.useMemo(()=>{const c=Z1();return O1(c,e,L1(r),t.transformTemplate,t.style),{...c.attrs,style:{...c.style}}},[e]);if(t.style){const c={};Q1(c,t.style,t),o.style={...c,...o.style}}return o}const B4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function np(t){return typeof t!="string"||t.includes("-")?!1:!!(B4.indexOf(t)>-1||/[A-Z]/u.test(t))}function P4(t,e,a,{latestValues:r},o,c=!1,d){const p=(d??np(t)?U4:z4)(e,r,o,t),g=N4(e,typeof t=="string",c),y=t!==j.Fragment?{...g,...p,ref:a}:{},{children:v}=e,x=j.useMemo(()=>_t(v)?v.get():v,[v]);return j.createElement(t,{...y,children:x})}function V4({scrapeMotionValuesFromProps:t,createRenderState:e},a,r,o){return{latestValues:H4(a,r,o,t),renderState:e()}}function H4(t,e,a,r){const o={},c=r(t,{});for(const x in c)o[x]=Wl(c[x]);let{initial:d,animate:h}=t;const p=Cc(t),g=S1(t);e&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=e.initial),h===void 0&&(h=e.animate));let y=a?a.initial===!1:!1;y=y||d===!1;const v=y?h:d;if(v&&typeof v!="boolean"&&!Ac(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const S=Ff(t,x[w]);if(S){const{transitionEnd:T,transition:E,..._}=S;for(const N in _){let C=_[N];if(Array.isArray(C)){const V=y?C.length-1:0;C=C[V]}C!==null&&(o[N]=C)}for(const N in T)o[N]=T[N]}}}return o}const ew=t=>(e,a)=>{const r=j.useContext(Rc),o=j.useContext(Tc),c=()=>V4(t,e,r,o);return a?c():Rf(c)},$4=ew({scrapeMotionValuesFromProps:Zf,createRenderState:tp}),I4=ew({scrapeMotionValuesFromProps:M1,createRenderState:Z1}),q4=Symbol.for("motionComponentSymbol");function F4(t,e,a){const r=j.useRef(a);j.useInsertionEffect(()=>{r.current=a});const o=j.useRef(null);return j.useCallback(c=>{var h;c&&((h=t.onMount)==null||h.call(t,c)),e&&(c?e.mount(c):e.unmount());const d=r.current;if(typeof d=="function")if(c){const p=d(c);typeof p=="function"&&(o.current=p)}else o.current?(o.current(),o.current=null):d(c);else d&&(d.current=c)},[e])}const tw=j.createContext({});function gr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function G4(t,e,a,r,o,c){var C,V;const{visualElement:d}=j.useContext(Rc),h=j.useContext(W1),p=j.useContext(Tc),g=j.useContext(ep),y=g.reducedMotion,v=g.skipAnimations,x=j.useRef(null),w=j.useRef(!1);r=r||h.renderer,!x.current&&r&&(x.current=r(t,{visualState:e,parent:d,props:a,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:v,isSVG:c}),w.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const S=x.current,T=j.useContext(tw);S&&!S.projection&&o&&(S.type==="html"||S.type==="svg")&&K4(x.current,a,o,T);const E=j.useRef(!1);j.useInsertionEffect(()=>{S&&E.current&&S.update(a,p)});const _=a[u1],N=j.useRef(!!_&&typeof window<"u"&&!((C=window.MotionHandoffIsComplete)!=null&&C.call(window,_))&&((V=window.MotionHasOptimisedAnimation)==null?void 0:V.call(window,_)));return Sx(()=>{w.current=!0,S&&(E.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),N.current&&S.animationState&&S.animationState.animateChanges())}),j.useEffect(()=>{S&&(!N.current&&S.animationState&&S.animationState.animateChanges(),N.current&&(queueMicrotask(()=>{var Y;(Y=window.MotionHandoffMarkAsComplete)==null||Y.call(window,_)}),N.current=!1),S.enteringChildren=void 0)}),S}function K4(t,e,a,r){const{layoutId:o,layout:c,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:y,layoutCrossfade:v}=e;t.projection=new a(t.latestValues,e["data-framer-portal-id"]?void 0:nw(t.parent)),t.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!d||h&&gr(h),visualElement:t,animationType:typeof c=="string"?c:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:p,layoutRoot:g,layoutAnchor:y})}function nw(t){if(t)return t.options.allowProjection!==!1?t.projection:nw(t.parent)}function bh(t,{forwardMotionProps:e=!1,type:a}={},r,o){r&&A4(r);const c=a?a==="svg":np(t),d=c?I4:$4;function h(g,y){let v;const x={...j.useContext(ep),...g,layoutId:Y4(g)},{isStatic:w}=x,S=D4(g),T=d(g,w);if(!w&&typeof window<"u"){W4();const E=X4(x);v=E.MeasureLayout,S.visualElement=G4(t,T,x,o,E.ProjectionNode,c)}return u.jsxs(Rc.Provider,{value:S,children:[v&&S.visualElement?u.jsx(v,{visualElement:S.visualElement,...x}):null,P4(t,g,F4(T,S.visualElement,y),T,w,e,c)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const p=j.forwardRef(h);return p[q4]=t,p}function Y4({layoutId:t}){const e=j.useContext(Cf).id;return e&&t!==void 0?e+"-"+t:t}function W4(t,e){j.useContext(W1).strict}function X4(t){const e=X1(),{drag:a,layout:r}=e;if(!a&&!r)return{};const o={...a,...r};return{MeasureLayout:a!=null&&a.isEnabled(t)||r!=null&&r.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function J4(t,e){if(typeof Proxy>"u")return bh;const a=new Map,r=(c,d)=>bh(c,d,t,e),o=(c,d)=>r(c,d);return new Proxy(o,{get:(c,d)=>d==="create"?r:(a.has(d)||a.set(d,bh(d,void 0,t,e)),a.get(d))})}const Q4=(t,e)=>e.isSVG??np(t)?new AC(e):new SC(e,{allowProjection:t!==j.Fragment});class Z4 extends Gi{constructor(e){super(e),e.animationState||(e.animationState=DC(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Ac(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:a}=this.node.prevProps||{};e!==a&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let eR=0;class tR extends Gi{constructor(){super(...arguments),this.id=eR++,this.isExitComplete=!1}update(){var c;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:a}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const p=Sa(this.node,d,h);if(p){const{transition:g,transitionEnd:y,...v}=p;for(const x in v)(c=this.node.getValue(x))==null||c.jump(v[x])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);a&&!e&&o.then(()=>{this.isExitComplete=!0,a(this.id)})}mount(){const{register:e,onExitComplete:a}=this.node.presenceContext||{};a&&a(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const nR={animation:{Feature:Z4},exit:{Feature:tR}};function so(t){return{point:{x:t.pageX,y:t.pageY}}}const iR=t=>e=>Yf(e)&&t(e,so(e));function Hs(t,e,a,r){return Zs(t,e,iR(a),r)}const iw=({current:t})=>t?t.ownerDocument.defaultView:null,ob=(t,e)=>Math.abs(t-e);function aR(t,e){const a=ob(t.x,e.x),r=ob(t.y,e.y);return Math.sqrt(a**2+r**2)}const lb=new Set(["auto","scroll"]);class aw{constructor(e,a,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Ul(this.lastRawMoveEventInfo,this.transformPagePoint));const w=xh(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,T=aR(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!T)return;const{point:E}=w,{timestamp:_}=kt;this.history.push({...E,timestamp:_});const{onStart:N,onMove:C}=this.handlers;S||(N&&N(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),C&&C(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=Ul(S,this.transformPagePoint),Fe.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:T,onSessionEnd:E,resumeAnimation:_}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&_&&_(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const N=xh(w.type==="pointercancel"?this.lastMoveEventInfo:Ul(S,this.transformPagePoint),this.history);this.startEvent&&T&&T(w,N),E&&E(w,N)},!Yf(e))return;this.dragSnapToOrigin=c,this.handlers=a,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=o||window;const p=so(e),g=Ul(p,this.transformPagePoint),{point:y}=g,{timestamp:v}=kt;this.history=[{...y,timestamp:v}];const{onSessionStart:x}=a;x&&x(e,xh(g,this.history)),this.removeListeners=io(Hs(this.contextWindow,"pointermove",this.handlePointerMove),Hs(this.contextWindow,"pointerup",this.handlePointerUp),Hs(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(e){let a=e.parentElement;for(;a;){const r=getComputedStyle(a);(lb.has(r.overflowX)||lb.has(r.overflowY))&&this.scrollPositions.set(a,{x:a.scrollLeft,y:a.scrollTop}),a=a.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const a=this.scrollPositions.get(e);if(!a)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},c={x:o.x-a.x,y:o.y-a.y};c.x===0&&c.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(e,o),Fe.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qi(this.updatePoint)}}function Ul(t,e){return e?{point:e(t.point)}:t}function cb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function xh({point:t},e){return{point:t,delta:cb(t,rw(e)),offset:cb(t,rR(e)),velocity:sR(e,.1)}}function rR(t){return t[0]}function rw(t){return t[t.length-1]}function sR(t,e){if(t.length<2)return{x:0,y:0};let a=t.length-1,r=null;const o=rw(t);for(;a>=0&&(r=t[a],!(o.timestamp-r.timestamp>tn(e)));)a--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&o.timestamp-r.timestamp>tn(e)*2&&(r=t[1]);const c=gn(o.timestamp-r.timestamp);if(c===0)return{x:0,y:0};const d={x:(o.x-r.x)/c,y:(o.y-r.y)/c};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function oR(t,{min:e,max:a},r){return e!==void 0&&t<e?t=r?qe(e,t,r.min):Math.max(t,e):a!==void 0&&t>a&&(t=r?qe(a,t,r.max):Math.min(t,a)),t}function ub(t,e,a){return{min:e!==void 0?t.min+e:void 0,max:a!==void 0?t.max+a-(t.max-t.min):void 0}}function lR(t,{top:e,left:a,bottom:r,right:o}){return{x:ub(t.x,a,o),y:ub(t.y,e,r)}}function db(t,e){let a=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([a,r]=[r,a]),{min:a,max:r}}function cR(t,e){return{x:db(t.x,e.x),y:db(t.y,e.y)}}function uR(t,e){let a=.5;const r=Nt(t),o=Nt(e);return o>r?a=Xs(e.min,e.max-r,t.min):r>o&&(a=Xs(t.min,t.max-o,e.min)),Hn(0,1,a)}function dR(t,e){const a={};return e.min!==void 0&&(a.min=e.min-t.min),e.max!==void 0&&(a.max=e.max-t.min),a}const ff=.35;function hR(t=ff){return t===!1?t=0:t===!0&&(t=ff),{x:hb(t,"left","right"),y:hb(t,"top","bottom")}}function hb(t,e,a){return{min:fb(t,e),max:fb(t,a)}}function fb(t,e){return typeof t=="number"?t:t[e]||0}const fR=new WeakMap;class pR{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=pt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:a=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{a&&this.snapToCursor(so(v).point),this.stopAnimation()},d=(v,x)=>{const{drag:w,dragPropagation:S,onDragStart:T}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=HA(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),zn(_=>{let N=this.getAxisMotionValue(_).get()||0;if(Vn.test(N)){const{projection:C}=this.visualElement;if(C&&C.layout){const V=C.layout.layoutBox[_];V&&(N=Nt(V)*(parseFloat(N)/100))}}this.originPoint[_]=N}),T&&Fe.update(()=>T(v,x),!1,!0),nf(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:T,onDrag:E}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:_}=x;if(S&&this.currentDirection===null){this.currentDirection=gR(_),this.currentDirection!==null&&T&&T(this.currentDirection);return}this.updateAxis("x",x.point,_),this.updateAxis("y",x.point,_),this.visualElement.render(),E&&Fe.update(()=>E(v,x),!1,!0)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new aw(e,{onSessionStart:c,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:iw(this.visualElement),element:this.visualElement.current})}stop(e,a){const r=e||this.latestPointerEvent,o=a||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!r)return;const{velocity:d}=o;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Fe.postRender(()=>h(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:a}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),a&&a.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,a,r){const{drag:o}=this.getProps();if(!r||!Bl(e,o,this.currentDirection))return;const c=this.getAxisMotionValue(e);let d=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(d=oR(d,this.constraints[e],this.elastic[e])),c.set(d)}resolveConstraints(){var c;const{dragConstraints:e,dragElastic:a}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;e&&gr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=lR(r.layoutBox,e):this.constraints=!1,this.elastic=hR(a),o!==this.constraints&&!gr(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&zn(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=dR(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:a}=this.getProps();if(!e||!gr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const c=gC(r,o.root,this.visualElement.getTransformPagePoint());let d=cR(o.layout.layoutBox,c);if(a){const h=a(fC(d));this.hasMutatedConstraints=!!h,h&&(d=T1(h))}return d}startAnimation(e){const{drag:a,dragMomentum:r,dragElastic:o,dragTransition:c,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=zn(y=>{if(!Bl(y,a,this.currentDirection))return;let v=p&&p[y]||{};(d===!0||d===y)&&(v={min:0,max:0});const x=o?200:1e6,w=o?40:1e7,S={type:"inertia",velocity:r?e[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(y,S)});return Promise.all(g).then(h)}startAxisValueAnimation(e,a){const r=this.getAxisMotionValue(e);return nf(this.visualElement,e),r.start(qf(e,r,0,a,this.visualElement,!1))}stopAnimation(){zn(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const a=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[a];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){zn(a=>{const{drag:r}=this.getProps();if(!Bl(a,r,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(a);if(o&&o.layout){const{min:d,max:h}=o.layout.layoutBox[a],p=c.get()||0;c.set(e[a]-qe(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:a}=this.getProps(),{projection:r}=this.visualElement;if(!gr(a)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};zn(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();o[d]=uR({min:p,max:p},this.constraints[d])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),zn(d=>{if(!Bl(d,e,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(qe(p,g,o[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;fR.set(this.visualElement,this);const e=this.visualElement.current,a=Hs(e,"pointerdown",g=>{const{drag:y,dragListener:v=!0}=this.getProps(),x=g.target,w=x!==e&&KA(x);y&&v&&!w&&this.start(g)});let r;const o=()=>{const{dragConstraints:g}=this.getProps();gr(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=mR(e,g.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,d=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Fe.read(o);const h=Zs(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(zn(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=g[v].translate,x.set(x.get()+g[v].translate))}),this.visualElement.render())}));return()=>{h(),a(),d(),p&&p(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:a=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:d=ff,dragMomentum:h=!0}=e;return{...e,drag:a,dragDirectionLock:r,dragPropagation:o,dragConstraints:c,dragElastic:d,dragMomentum:h}}}function pb(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function mR(t,e,a){const r=wv(t,pb(a)),o=wv(e,pb(a));return()=>{r(),o()}}function Bl(t,e,a){return(e===!0||e===t)&&(a===null||a===t)}function gR(t,e=10){let a=null;return Math.abs(t.y)>e?a="y":Math.abs(t.x)>e&&(a="x"),a}class yR extends Gi{constructor(e){super(e),this.removeGroupControls=yn,this.removeListeners=yn,this.controls=new pR(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||yn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:a}=this.node.prevProps||{};e!==a&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const wh=t=>(e,a)=>{t&&Fe.update(()=>t(e,a),!1,!0)};class vR extends Gi{constructor(){super(...arguments),this.removePointerDownListener=yn}onPointerDown(e){this.session=new aw(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:iw(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:a,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:wh(e),onStart:wh(a),onMove:wh(r),onEnd:(c,d)=>{delete this.session,o&&Fe.postRender(()=>o(c,d))}}}mount(){this.removePointerDownListener=Hs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Sh=!1;class bR extends j.Component{componentDidMount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:r,layoutId:o}=this.props,{projection:c}=e;c&&(a.group&&a.group.add(c),r&&r.register&&o&&r.register(c),Sh&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Xl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:a,visualElement:r,drag:o,isPresent:c}=this.props,{projection:d}=r;return d&&(d.isPresent=c,e.layoutDependency!==a&&d.setOptions({...d.options,layoutDependency:a}),Sh=!0,o||e.layoutDependency!==a||a===void 0||e.isPresent!==c?d.willUpdate():this.safeToRemove(),e.isPresent!==c&&(c?d.promote():d.relegate()||Fe.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:a}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=a,r.root.didUpdate(),Kf.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:a,switchLayoutGroup:r}=this.props,{projection:o}=e;Sh=!0,o&&(o.scheduleCheckAfterUnmount(),a&&a.group&&a.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function sw(t){const[e,a]=Y1(),r=j.useContext(Cf);return u.jsx(bR,{...t,layoutGroup:r,switchLayoutGroup:j.useContext(tw),isPresent:e,safeToRemove:a})}const xR={pan:{Feature:vR},drag:{Feature:yR,ProjectionNode:K1,MeasureLayout:sw}};function mb(t,e,a){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",a==="Start");const o="onHover"+a,c=r[o];c&&Fe.postRender(()=>c(e,so(e)))}class wR extends Gi{mount(){const{current:e}=this.node;e&&(this.unmount=IA(e,(a,r)=>(mb(this.node,r,"Start"),o=>mb(this.node,o,"End"))))}unmount(){}}class SR extends Gi{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=io(Zs(this.node.current,"focus",()=>this.onFocus()),Zs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function gb(t,e,a){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",a==="Start");const o="onTap"+(a==="End"?"":a),c=r[o];c&&Fe.postRender(()=>c(e,so(e)))}class jR extends Gi{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:a,propagate:r}=this.node.props;this.unmount=WA(e,(o,c)=>(gb(this.node,c,"Start"),(d,{success:h})=>gb(this.node,d,h?"End":"Cancel")),{useGlobalTarget:a,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const pf=new WeakMap,jh=new WeakMap,kR=t=>{const e=pf.get(t.target);e&&e(t)},_R=t=>{t.forEach(kR)};function TR({root:t,...e}){const a=t||document;jh.has(a)||jh.set(a,{});const r=jh.get(a),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(_R,{root:t,...e})),r[o]}function ER(t,e,a){const r=TR(e);return pf.set(t,a),r.observe(t),()=>{pf.delete(t),r.unobserve(t)}}const AR={some:0,all:1};class CR extends Gi{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:e={}}=this.node.getProps(),{root:a,margin:r,amount:o="some",once:c}=e,d={root:a?a.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:AR[o]},h=g=>{const{isIntersecting:y}=g;if(this.isInView===y||(this.isInView=y,c&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),w=y?v:x;w&&w(g)};this.stopObserver=ER(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:a}=this.node;["amount","margin","root"].some(RR(e,a))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function RR({viewport:t={}},{viewport:e={}}={}){return a=>t[a]!==e[a]}const NR={inView:{Feature:CR},tap:{Feature:jR},focus:{Feature:SR},hover:{Feature:wR}},OR={layout:{ProjectionNode:K1,MeasureLayout:sw}},DR={...nR,...NR,...xR,...OR},xe=J4(DR,Q4),LR=[{id:"own",name:"Your Story",avatar:null,isOwn:!0,unread:!1,online:!0},{id:"u1",name:"Luna",avatar:"https://i.pravatar.cc/150?u=luna",unread:!0,online:!0},{id:"u2",name:"Max",avatar:"https://i.pravatar.cc/150?u=max",unread:!0,online:!0},{id:"u3",name:"Zara",avatar:"https://i.pravatar.cc/150?u=zara",unread:!1,online:!0},{id:"u4",name:"Kai",avatar:"https://i.pravatar.cc/150?u=kai",unread:!0,online:!1},{id:"u5",name:"Nova",avatar:"https://i.pravatar.cc/150?u=nova",unread:!1,online:!1},{id:"u6",name:"Rey",avatar:"https://i.pravatar.cc/150?u=rey",unread:!0,online:!0},{id:"u7",name:"Elise",avatar:"https://i.pravatar.cc/150?u=elise",unread:!1,online:!1},{id:"u8",name:"Theo",avatar:"https://i.pravatar.cc/150?u=theo",unread:!0,online:!0}],yb=["linear-gradient(135deg, #f093fb, #f5576c)","linear-gradient(135deg, #4facfe, #00f2fe)","linear-gradient(135deg, #a18cd1, #fbc2eb)","linear-gradient(135deg, #fccb90, #d57eeb)","linear-gradient(135deg, #667eea, #764ba2)","linear-gradient(135deg, #89f7fe, #66a6ff)","linear-gradient(135deg, #f43b47, #453a94)","linear-gradient(135deg, #11998e, #38ef7d)"];function MR(t){return yb[t%yb.length]}function zR(t){return t.charAt(0).toUpperCase()}function UR(){const t=j.useRef(null),[e,a]=j.useState(!1),[r,o]=j.useState(0),[c,d]=j.useState(0),h=v=>{a(!0),o(v.pageX-t.current.offsetLeft),d(t.current.scrollLeft)},p=()=>a(!1),g=()=>a(!1),y=v=>{if(!e)return;v.preventDefault();const w=(v.pageX-t.current.offsetLeft-r)*1.5;t.current.scrollLeft=c-w};return u.jsxs("div",{className:"stories-section",children:[u.jsx("div",{className:"stories-header",children:u.jsx("span",{className:"stories-title",children:"Stories"})}),u.jsx("div",{ref:t,className:"stories-scroll",onMouseDown:h,onMouseUp:p,onMouseLeave:g,onMouseMove:y,children:LR.map((v,x)=>{const w=MR(x),S=zR(v.name),T=v.unread;return u.jsxs(xe.div,{className:`story-item ${T?"unread":""}`,whileTap:{scale:.92},whileHover:{y:-2},transition:{type:"spring",stiffness:400,damping:17},children:[u.jsxs("div",{className:"story-avatar-ring",style:{background:w},children:[u.jsx("div",{className:"story-avatar-inner",children:v.avatar?u.jsx("img",{src:v.avatar,alt:v.name}):u.jsx("span",{className:"story-avatar-text",children:S})}),v.isOwn&&u.jsx("span",{className:"story-plus-badge",children:"+"})]}),u.jsx("span",{className:"story-name",children:v.name}),v.online&&u.jsx("span",{className:"story-online-dot"})]},v.id)})}),u.jsx("style",{children:BR})]})}const BR=`
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
`,kh=10,Ot=Fi((t,e)=>({posts:[],isLoading:!1,isRefreshing:!1,hasMore:!0,page:0,newPostsCount:0,_channel:null,fetchFeed:async({refresh:a=!1}={})=>{const{page:r,hasMore:o,isLoading:c,isRefreshing:d}=e();if(c||d||!a&&!o)return;t(a?{isRefreshing:!0}:{isLoading:!0});const h=a?0:r,p=h*kh,g=p+kh-1;try{const{data:y,error:v,count:x}=await te.from("posts").select(`
          *,
          likes_count:likes(count),
          comments_count:comments(count)
        `,{count:"exact"}).eq("is_deleted",!1).order("created_at",{ascending:!1}).range(p,g);if(v)throw v;const w=[...new Set((y||[]).map(_=>_.user_id).filter(Boolean))];let S={};if(w.length>0){const{data:_}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").in("id",w);S=Object.fromEntries((_||[]).map(N=>[N.id,N]))}const T=(y||[]).map(_=>{var N,C,V,Y;return{..._,profiles:S[_.user_id]||null,likes:((C=(N=_.likes_count)==null?void 0:N[0])==null?void 0:C.count)??0,comments:((Y=(V=_.comments_count)==null?void 0:V[0])==null?void 0:Y.count)??0,isLiked:!1}}),E=p+kh<(x||0);t(a?{posts:T,page:1,hasMore:E,isRefreshing:!1,isLoading:!1,newPostsCount:0}:_=>({posts:[..._.posts,...T],page:h+1,hasMore:E,isLoading:!1}))}catch(y){t({isRefreshing:!1,isLoading:!1}),console.error("Feed fetch error:",y.message)}},refreshFeed:()=>e().fetchFeed({refresh:!0}),addPostOptimistic:a=>{t(r=>({posts:[a,...r.posts]}))},removePostOptimistic:a=>{t(r=>({posts:r.posts.filter(o=>o.id!==a)}))},updatePostInFeed:(a,r)=>{t(o=>({posts:o.posts.map(c=>c.id===a?{...c,...r}:c)}))},subscribeToPosts:()=>{const{_channel:a}=e();if(a)return;const r=te.channel("feed-store-realtime").on("postgres_changes",{event:"INSERT",schema:"public",table:"posts"},async o=>{var g,y,v,x;const{data:c,error:d}=await te.from("posts").select(`
              *,
              likes_count:likes(count),
              comments_count:comments(count)
            `).eq("id",o.new.id).single();if(d||!c)return;const{data:h}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",c.user_id).single(),p={...c,profiles:h||null,likes:((y=(g=c.likes_count)==null?void 0:g[0])==null?void 0:y.count)??0,comments:((x=(v=c.comments_count)==null?void 0:v[0])==null?void 0:x.count)??0,isLiked:!1};t(w=>w.posts.some(S=>S.id===p.id)?w:{posts:[p,...w.posts],newPostsCount:w.newPostsCount+1})}).subscribe();t({_channel:r})},unsubscribeFromPosts:()=>{const{_channel:a}=e();a&&(te.removeChannel(a),t({_channel:null}))},acknowledgeNewPosts:()=>{t({newPostsCount:0})}})),yc=Fi(()=>({createPost:async({content:t,image_url:e,video_url:a,type:r="text",audience:o="public",media:c=[]})=>{const{data:{user:d},error:h}=await te.auth.getUser();if(h||!d)throw new Error("Authentication required");const{data:p,error:g}=await te.from("posts").insert({content:t,image_url:e,video_url:a,type:r,audience:o,media:c,user_id:d.id}).select().single();if(g)throw g;try{const{data:y}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",p.user_id).single();p.profiles=y||null}catch{p.profiles=null}return p},uploadPostImage:async(t,e,a)=>{const r=t.name.split(".").pop(),c=`post-images/${`${e}/${Date.now()}_${Math.random().toString(36).slice(2)}.${r}`}`,{data:d,error:h}=await te.storage.from("post-images").upload(c,t,{cacheControl:"3600",upsert:!1});if(h)throw h;const{data:{publicUrl:p}}=te.storage.from("post-images").getPublicUrl(d.path);return{url:p,path:d.path}},deletePostImage:async t=>{const{error:e}=await te.storage.from("post-images").remove([t]);if(e)throw e},deletePost:async t=>{const{error:e}=await te.from("posts").update({is_deleted:!0}).eq("id",t);if(e)throw e;Ot.getState().removePostOptimistic(t)},likePost:async t=>{const{error:e}=await te.from("likes").insert({post_id:t});if(e)throw e;const a=Ot.getState(),r=a.posts.find(o=>o.id===t);r&&a.updatePostInFeed(t,{likes:(r.likes||0)+1,isLiked:!0})},unlikePost:async t=>{const{error:e}=await te.from("likes").delete().eq("post_id",t);if(e)throw e;const a=Ot.getState(),r=a.posts.find(o=>o.id===t);r&&a.updatePostInFeed(t,{likes:Math.max(0,(r.likes||0)-1),isLiked:!1})},addComment:async({postId:t,content:e,parentId:a=null})=>{const r={post_id:t,content:e};a&&(r.parent_id=a);const{data:o,error:c}=await te.from("comments").insert(r).select().single();if(c)throw c;try{const{data:p}=await te.from("profiles").select("id, username, display_name, avatar_url, is_verified").eq("id",o.user_id).single();o.profiles=p||null}catch{o.profiles=null}const d=Ot.getState(),h=d.posts.find(p=>p.id===t);return h&&d.updatePostInFeed(t,{comments:(h.comments||0)+1}),o},deleteComment:async t=>{const{error:e}=await te.from("comments").update({is_deleted:!0}).eq("id",t);if(e)throw e},repostPost:async({postId:t,quoteText:e=null})=>{const a={post_id:t};e&&(a.quote_text=e);const{data:r,error:o}=await te.from("reposts").insert(a).select().single();if(o)throw o;return r},undoRepost:async t=>{const{error:e}=await te.from("reposts").delete().eq("post_id",t);if(e)throw e}}));function PR(t){const e=Date.now()-t,a=Math.floor(e/6e4);if(a<1)return"Just now";if(a<60)return`${a}m ago`;const r=Math.floor(a/60);if(r<24)return`${r}h ago`;const o=Math.floor(r/24);return o<7?`${o}d ago`:new Date(t).toLocaleDateString()}function vb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}const As={heart:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#ff4d6d":"none",stroke:t?"#ff4d6d":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:t?"drop-shadow(0 0 6px rgba(255,77,109,0.4))":"none"},children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),comment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),share:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"18",cy:"5",r:"3"}),u.jsx("circle",{cx:"6",cy:"12",r:"3"}),u.jsx("circle",{cx:"18",cy:"19",r:"3"}),u.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),u.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]}),bookmark:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#CCFF00":"none",stroke:t?"#CCFF00":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"})}),dots:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"1"}),u.jsx("circle",{cx:"19",cy:"12",r:"1"}),u.jsx("circle",{cx:"5",cy:"12",r:"1"})]})};function ow({post:t}){const[e,a]=j.useState(t.liked),[r,o]=j.useState(t.saved),[c,d]=j.useState(t.likes),[h,p]=j.useState(0),g=yc(S=>S.likePost),y=yc(S=>S.unlikePost),v=()=>{e?(a(!1),d(S=>S-1),y(t.id).catch(()=>{a(!0),d(S=>S+1)})):(a(!0),d(S=>S+1),p(S=>S+1),g(t.id).catch(()=>{a(!1),d(S=>S-1)}))},x=()=>o(S=>!S),w=S=>S.charAt(0).toUpperCase();return u.jsxs(xe.div,{className:"feed-post",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-header",children:[u.jsx("div",{className:"post-avatar",style:{background:t.avatarColor},children:u.jsx("span",{children:w(t.username)})}),u.jsxs("div",{className:"post-user-info",children:[u.jsx("span",{className:"post-username",children:t.username}),u.jsxs("span",{className:"post-handle",children:[t.handle," · ",PR(t.timestamp)]})]}),u.jsx("button",{className:"post-more-btn",children:As.dots})]}),u.jsx("div",{className:"post-content",children:u.jsx("p",{children:t.content})}),t.images&&t.images.length>0&&u.jsx("div",{className:`post-images ${t.images.length>1?"multi":""}`,children:t.images.map((S,T)=>u.jsx(xe.div,{className:"post-image-wrap",whileHover:{scale:1.01},transition:{type:"spring",stiffness:300,damping:20},children:u.jsx("img",{src:S,alt:`Post image ${T+1}`,loading:"lazy"})},T))}),u.jsxs("div",{className:"post-stats",children:[u.jsxs("span",{className:"post-stat",children:[u.jsx("span",{style:{color:e?"#ff4d6d":void 0},children:vb(c)})," likes"]}),u.jsxs("span",{className:"post-stat",children:[vb(t.comments)," comments"]})]}),u.jsxs("div",{className:"post-actions",children:[u.jsxs(xe.button,{className:`post-action ${e?"liked":""}`,onClick:v,whileTap:{scale:.8},children:[u.jsx(xe.span,{initial:e?{scale:.5}:!1,animate:{scale:1},transition:{type:"spring",stiffness:500,damping:15},className:"post-action-icon",children:As.heart(e)},h),u.jsx("span",{children:"Like"})]}),u.jsxs("button",{className:"post-action",children:[u.jsx("span",{className:"post-action-icon",children:As.comment}),u.jsx("span",{children:"Comment"})]}),u.jsxs("button",{className:"post-action",children:[u.jsx("span",{className:"post-action-icon",children:As.share}),u.jsx("span",{children:"Share"})]}),u.jsxs(xe.button,{className:`post-action ${r?"saved":""}`,onClick:x,whileTap:{scale:.8},children:[u.jsx("span",{className:"post-action-icon",children:As.bookmark(r)}),u.jsx("span",{children:"Save"})]})]}),u.jsx("style",{children:VR})]})}const VR=`
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
`;function HR({onClose:t}){const[e,a]=j.useState(""),[r,o]=j.useState(""),[c,d]=j.useState(!1),[h,p]=j.useState(""),g=mt(_=>_.user),y=mt(_=>_.profile),v=yc(_=>_.createPost),x=Ot(_=>_.fetchFeed),w=j.useRef(null),S=async()=>{const _=e.trim();if(_){d(!0),p("");try{await v({content:_,image_url:r.trim()||null}),a(""),o(""),x({refresh:!0}),t&&t()}catch(N){p(N.message||"Failed to create post")}finally{d(!1)}}},T=(y==null?void 0:y.avatar_color)||"#CCFF00",E=(y==null?void 0:y.display_name)||(y==null?void 0:y.username)||(g==null?void 0:g.email)||"User";return u.jsxs(xe.div,{className:"post-composer-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:_=>{_.target===_.currentTarget&&t&&t()},children:[u.jsxs(xe.div,{className:"post-composer",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-composer-header",children:[u.jsx("h3",{children:"Create Post"}),u.jsx("button",{className:"post-composer-close",onClick:t,children:"×"})]}),u.jsxs("div",{className:"post-composer-body",children:[u.jsx("div",{className:"post-composer-avatar",style:{background:T},children:E.charAt(0).toUpperCase()}),u.jsx("textarea",{ref:w,className:"post-composer-textarea",placeholder:"What's on your mind?",value:e,onChange:_=>a(_.target.value),maxLength:2e3,autoFocus:!0})]}),u.jsx("div",{className:"post-composer-image",children:u.jsx("input",{className:"post-composer-image-input",placeholder:"Add image URL (optional)",value:r,onChange:_=>o(_.target.value)})}),h&&u.jsx("p",{className:"post-composer-error",children:h}),u.jsxs("div",{className:"post-composer-footer",children:[u.jsxs("span",{className:"post-composer-count",children:[e.length,"/2000"]}),u.jsx("button",{className:"post-composer-submit",onClick:S,disabled:!e.trim()||c,children:c?"Posting...":"Post"})]})]}),u.jsx("style",{children:$R})]})}const $R=`
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
`;function _h(){return u.jsxs("div",{className:"feed-post-skeleton",children:[u.jsxs("div",{className:"skeleton-header",children:[u.jsx("div",{className:"skeleton-circle"}),u.jsxs("div",{className:"skeleton-lines",children:[u.jsx("div",{className:"skeleton-line w-40"}),u.jsx("div",{className:"skeleton-line w-24"})]})]}),u.jsxs("div",{className:"skeleton-body",children:[u.jsx("div",{className:"skeleton-line w-100"}),u.jsx("div",{className:"skeleton-line w-80"})]}),u.jsx("div",{className:"skeleton-image"}),u.jsxs("div",{className:"skeleton-actions",children:[u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"})]}),u.jsx("style",{children:IR})]})}const IR=`
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
`;function qR(t,{threshold:e=.5,enabled:a=!0}={}){const r=j.useRef(null);j.useEffect(()=>{if(!a)return;const c=r.current;if(!c)return;const d=new IntersectionObserver(h=>{h[0].isIntersecting&&t()},{threshold:e});return d.observe(c),()=>d.disconnect()},[t,e,a]);const o=j.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);return{sentinelRef:r,scrollToTop:o}}function FR(){const t=Ot(r=>r.newPostsCount),e=Ot(r=>r.subscribeToPosts),a=Ot(r=>r.acknowledgeNewPosts);return j.useEffect(()=>{e()},[e]),{newPosts:t>0?Array.from({length:t}):[],postUpdates:{},clearNewPosts:a,feedEvents:[]}}const GR={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},KR={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},bb=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];function YR(t){const e=t.profiles||{},a=e.display_name||e.username||"user",r=typeof t.id=="string"?t.id:String(t.id??"");return typeof t.id!="string"&&t.id!=null&&console.warn("mapPost: post.id is not a string",{type:typeof t.id,value:t.id,post:t}),{id:t.id,username:a,handle:"@"+(e.username||"user"),avatarColor:bb[(r.charCodeAt(0)||0)%bb.length],timestamp:t.created_at?new Date(t.created_at).getTime():Date.now(),content:t.content||"",images:t.image_url?[t.image_url]:[],likes:t.likes??0,comments:t.comments??0,liked:t.isLiked??!1,saved:!1}}function WR(){const[t,e]=j.useState(!0),[a,r]=j.useState(!1),o=Ot(E=>E.posts),c=Ot(E=>E.isLoading),d=Ot(E=>E.hasMore),h=Ot(E=>E.fetchFeed),{newPosts:p,clearNewPosts:g}=FR();j.useEffect(()=>{h({refresh:!0}).then(()=>e(!1))},[h]);const y=j.useCallback(()=>{!c&&d&&h()},[c,d,h]),{sentinelRef:v,scrollToTop:x}=qR(y,{enabled:!t&&d}),w=()=>{e(!0),h({refresh:!0}).then(()=>e(!1))},S=()=>{g(),w(),x()},T=j.useMemo(()=>o.map(YR),[o]);return u.jsxs("div",{className:"feed-container",children:[u.jsxs("div",{className:"feed-header",children:[u.jsx("h1",{className:"feed-title",children:"Home"}),u.jsxs("div",{className:"feed-header-actions",children:[u.jsx("button",{className:"feed-compose-btn",onClick:()=>r(!0),"aria-label":"Create post",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),u.jsx("button",{className:"feed-refresh-btn",onClick:w,"aria-label":"Refresh",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("path",{d:"M20.49 15a9 9 0 11-2.12-9.36L23 10"})]})})]})]}),t?u.jsxs("div",{className:"feed-posts",children:[u.jsx(_h,{}),u.jsx(_h,{}),u.jsx(_h,{})]}):u.jsxs(xe.div,{className:"feed-posts",variants:GR,initial:"hidden",animate:"visible",children:[u.jsx(UR,{}),u.jsxs(nn,{mode:"popLayout",children:[p.length>0&&u.jsx(xe.div,{className:"feed-new-posts-banner",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},onClick:S,children:u.jsxs("span",{children:[p.length," new post",p.length>1?"s":""," available"]})},"new-posts-banner"),T.map(E=>u.jsx(xe.div,{variants:KR,layout:!0,children:u.jsx(ow,{post:E})},E.id))]}),c&&u.jsxs("div",{className:"feed-loading-more",children:[u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"})]}),u.jsx("div",{ref:v,className:"feed-sentinel"}),!d&&!c&&T.length>0&&u.jsx("p",{className:"feed-end",children:"You're all caught up! 🎉"})]}),u.jsx(nn,{children:a&&u.jsx(HR,{onClose:()=>r(!1)})}),u.jsx("style",{children:`
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
      `})]})}const XR=Fi((t,e)=>({onlineUserIds:new Set,setOnlineUsers:a=>{t({onlineUserIds:new Set(a)})},addOnlineUser:a=>{t(r=>{const o=new Set(r.onlineUserIds);return o.add(a),{onlineUserIds:o}})},removeOnlineUser:a=>{t(r=>{const o=new Set(r.onlineUserIds);return o.delete(a),{onlineUserIds:o}})},isOnline:a=>e().onlineUserIds.has(a)}));function JR(t){const[e,a]=j.useState(null),r=XR(c=>c.onlineUserIds),o=t?r.has(t):!1;return j.useEffect(()=>{if(!t)return;const c=async()=>{const{count:h}=await te.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",t);h!==null&&a(h)};c();const d=te.channel(`profile-follows-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"follows",filter:`following_id=eq.${t}`},()=>c()).subscribe();return()=>{te.removeChannel(d)}},[t]),{liveFollowerCount:e,isOnline:o}}const Pl=Fi((t,e)=>({profilesByUserId:{},followersByUserId:{},isLoading:!1,fetchProfile:async a=>{const{profilesByUserId:r}=e();if(r[a])return r[a];t({isLoading:!0});try{const{data:o,error:c}=await te.from("profiles").select("*").eq("id",a).single();if(c)throw c;return t(d=>({profilesByUserId:{...d.profilesByUserId,[a]:o},isLoading:!1})),o}catch(o){return t({isLoading:!1}),console.error("Fetch profile error:",o.message),null}},fetchFollowers:async a=>{try{const{data:r,error:o}=await te.from("follows").select("follower_id").eq("following_id",a);if(o)throw o;return t(c=>({followersByUserId:{...c.followersByUserId,[a]:r||[]}})),r||[]}catch(r){return console.error("Fetch followers error:",r.message),[]}},getFollowerCount:a=>{var o;const{followersByUserId:r}=e();return((o=r[a])==null?void 0:o.length)??0},followUser:async a=>{const r=mt.getState().user;if(!r)throw new Error("Not authenticated");const{error:o}=await te.from("follows").insert({follower_id:r.id,following_id:a});if(o)throw o;t(c=>{const d=c.followersByUserId[a]||[];return{followersByUserId:{...c.followersByUserId,[a]:[...d,{follower_id:r.id}]}}})},unfollowUser:async a=>{const r=mt.getState().user;if(!r)throw new Error("Not authenticated");const{error:o}=await te.from("follows").delete().eq("follower_id",r.id).eq("following_id",a);if(o)throw o;t(c=>{const d=c.followersByUserId[a]||[];return{followersByUserId:{...c.followersByUserId,[a]:d.filter(h=>h.follower_id!==r.id)}}})},isFollowing:a=>{const r=mt.getState().user;if(!r)return!1;const{followersByUserId:o}=e();return(o[a]||[]).some(d=>d.follower_id===r.id)},updateProfile:async a=>{const{data:r,error:o}=await te.from("profiles").update(a).select().single();if(o)throw o;return t(c=>({profilesByUserId:{...c.profilesByUserId,[r.id]:r}})),r},updateProfileRealtime:a=>{t(r=>({profilesByUserId:{...r.profilesByUserId,[a.id]:a}}))}})),Th=["#FF6B6B","#4ECDC4","#45B7D1","#96CEB4","#FFEAA7","#DDA0DD","#98D8C8","#F7DC6F","#BB8FCE","#85C1E9"],QR=t=>{if(typeof t!="string")return Th[0];let e=0;for(let a=0;a<t.length;a++)e=t.charCodeAt(a)+((e<<5)-e);return Th[Math.abs(e)%Th.length]};function Eh(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}function xb(){const{id:t}=AS(),[e,a]=j.useState("grid"),[r,o]=j.useState("posts"),c=It(),[d,h]=j.useState(!1),[p,g]=j.useState(!1),[y,v]=j.useState(!1),[x,w]=j.useState(null),[S,T]=j.useState(null),[E,_]=j.useState(!1),[N,C]=j.useState([]),[V,Y]=j.useState(!1),[J,M]=j.useState({posts:0,followers:0,following:0}),[H,Q]=j.useState({avatar_url:"",cover_url:"",full_name:"",username:"",bio:"",website:""}),Z=j.useRef(null),ye=j.useRef(null),he=mt(D=>D.profile),Ae=mt(D=>D.user),Le=mt(D=>D.updateProfile),pe=!t||t===(Ae==null?void 0:Ae.id),z=t||(Ae==null?void 0:Ae.id),{liveFollowerCount:ee,isOnline:ie}=JR(z),be=Pl(D=>D.followUser),ke=Pl(D=>D.unfollowUser),R=Pl(D=>D.fetchFollowers),q=Pl(D=>D.followersByUserId),W=j.useMemo(()=>{const D=pe?he:S;return D?{username:D.display_name||D.username||"Unknown",handle:`@${D.username||"unknown"}`,avatarUrl:D.avatar_url||null,bio:D.bio||"",website:D.website||"",posts:J.posts,followers:ee??J.followers,following:J.following}:{username:"Loading...",handle:"@...",avatarUrl:null,bio:"",website:"",posts:"0",followers:0,following:0}},[pe,S,he,J,ee]),ae=j.useMemo(()=>pe||!z?!1:(q[z]||[]).some(G=>G.follower_id===(Ae==null?void 0:Ae.id)),[pe,z,q,Ae]);j.useEffect(()=>{pe||!t||(_(!0),te.from("profiles").select("*").eq("id",t).single().then(({data:D,error:G})=>{if(G)throw G;T(D)}).catch(D=>console.warn("Failed to load user profile:",D.message)).finally(()=>_(!1)))},[t,pe]),j.useEffect(()=>{z&&(Y(!0),te.from("posts").select("*").eq("user_id",z).eq("is_deleted",!1).order("created_at",{ascending:!1}).then(({data:D,error:G})=>{!G&&D&&C(D)}).finally(()=>Y(!1)))},[z]),j.useEffect(()=>{if(!z)return;(async()=>{try{const[G,ce,we]=await Promise.all([te.from("posts").select("id",{count:"exact",head:!0}).eq("user_id",z).eq("is_deleted",!1),te.from("follows").select("id",{count:"exact",head:!0}).eq("follower_id",z),te.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",z)]);M({posts:G.count??0,following:ce.count??0,followers:we.count??0})}catch(G){console.warn("Failed to fetch user stats:",G)}})()},[z]),j.useEffect(()=>{!z||pe||R(z)},[z,pe,R]);const fe=(D,G)=>{w({type:D,message:G}),setTimeout(()=>w(null),3e3)},Se=async D=>{const{data:G}=await te.storage.listBuckets();if(G!=null&&G.some(we=>we.name===D))return!0;const{error:ce}=await te.storage.createBucket(D,{public:!0});return ce?(console.warn(`Could not auto-create bucket "${D}":`,ce.message),!1):!0},X=async(D,G)=>{var ce,we;if(!D)return null;g(!0);try{const _e=D.name.split(".").pop(),rt=`${Date.now()}_${Math.random().toString(36).substring(2)}.${_e}`,{error:ht}=await te.storage.from(G).upload(rt,D);if((ce=ht==null?void 0:ht.message)!=null&&ce.includes("bucket")||(we=ht==null?void 0:ht.message)!=null&&we.includes("Bucket")){if(!await Se(G))return fe("error",`Storage bucket "${G}" not found. Create it in Supabase dashboard or run the migration SQL.`),null;const{error:ja}=await te.storage.from(G).upload(rt,D);if(ja)throw ja}else if(ht)throw ht;const{data:{publicUrl:Nc}}=te.storage.from(G).getPublicUrl(rt);return Nc}catch(_e){return fe("error",_e.message||"Failed to upload image"),null}finally{g(!1)}},me=async()=>{v(!0);try{const D={};H.full_name&&(D.full_name=H.full_name),H.username&&(D.username=H.username),H.bio&&(D.bio=H.bio),H.website&&(D.website=H.website),H.avatar_url&&(D.avatar_url=H.avatar_url),H.cover_url&&(D.cover_url=H.cover_url),await Le(D),fe("success","Profile updated successfully!"),h(!1)}catch(D){fe("error",D.message||"Failed to update profile")}finally{v(!1)}},ue=[{id:"posts",label:"Posts"},{id:"likes",label:"Likes"},{id:"saved",label:"Saved"}];return u.jsxs(xe.div,{className:"profile-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[u.jsxs("div",{className:"profile-header",children:[u.jsxs("div",{className:"profile-cover",children:[u.jsx("div",{className:"profile-cover-bg"}),!pe&&u.jsx("button",{className:"profile-back-btn",onClick:()=>c(-1),"aria-label":"Go back",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"22",height:"22",children:u.jsx("polyline",{points:"15 18 9 12 15 6"})})})]}),u.jsxs("div",{className:"profile-info",children:[u.jsxs("div",{className:"profile-avatar-section",children:[u.jsxs("div",{className:"profile-avatar",style:{background:QR(W.username),position:"relative"},children:[W.avatarUrl?u.jsx("img",{src:W.avatarUrl,alt:W.username,className:"profile-avatar-img"}):u.jsx("span",{children:W.username.charAt(0).toUpperCase()}),u.jsx("span",{className:`profile-status-badge ${ie?"online":"offline"}`})]}),u.jsxs("div",{className:"profile-actions",children:[pe&&u.jsxs(u.Fragment,{children:[u.jsx(xe.button,{className:"profile-settings-btn",onClick:()=>c("/settings"),"aria-label":"Settings",whileHover:{scale:1.05},whileTap:{scale:.92,rotate:15},transition:{type:"spring",stiffness:400,damping:17},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]})}),u.jsx(xe.button,{className:"profile-edit-btn",onClick:()=>{he&&Q({avatar_url:he.avatar_url||"",cover_url:he.cover_url||"",full_name:he.full_name||"",username:he.username||"",bio:he.bio||"",website:he.website||""}),h(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:"Edit Profile"})]}),!pe&&u.jsx(xe.button,{className:`profile-follow-btn${ae?" following":""}`,onClick:()=>ae?ke(z):be(z),whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:ae?"Following":"Follow"})]})]}),u.jsxs("div",{className:"profile-details",children:[u.jsx("h1",{className:"profile-name",children:W.username}),u.jsx("span",{className:"profile-handle",children:W.handle}),u.jsx("p",{className:"profile-bio",children:W.bio}),u.jsxs("a",{className:"profile-website",href:W.website?W.website.startsWith("http")?W.website:`https://${W.website}`:"#",target:"_blank",rel:"noopener noreferrer",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"14",height:"14",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),W.website]})]}),u.jsxs("div",{className:"profile-stats",children:[u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Eh(W.posts)}),u.jsx("span",{className:"profile-stat-label",children:"Posts"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Eh(ee||W.followers)}),u.jsx("span",{className:"profile-stat-label",children:"Followers"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:Eh(W.following)}),u.jsx("span",{className:"profile-stat-label",children:"Following"})]})]})]})]}),u.jsxs("div",{className:"profile-tabs",children:[ue.map(D=>u.jsxs("button",{className:`profile-tab ${r===D.id?"active":""}`,onClick:()=>o(D.id),children:[D.label,r===D.id&&u.jsx(xe.div,{className:"profile-tab-underline",layoutId:"tab-underline"})]},D.id)),u.jsxs("div",{className:"profile-view-toggle",children:[u.jsx("button",{className:`view-btn ${e==="grid"?"active":""}`,onClick:()=>a("grid"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]})}),u.jsx("button",{className:`view-btn ${e==="list"?"active":""}`,onClick:()=>a("list"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),u.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})})]})]}),u.jsxs(nn,{mode:"wait",children:[r==="posts"&&u.jsx(xe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:e==="grid"?u.jsx("div",{className:"profile-grid",children:N.length>0?N.map(D=>u.jsxs(xe.div,{className:"profile-grid-item",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:20},children:[D.image_url?u.jsx("img",{src:D.image_url,alt:"",loading:"lazy"}):u.jsx("div",{className:"grid-item-text",children:u.jsxs("p",{children:[D.content.substring(0,60),"..."]})}),u.jsx("div",{className:"grid-item-overlay",children:u.jsxs("span",{children:[D.likes_count||D.likes||0," ❤"]})})]},D.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})}):u.jsx("div",{className:"profile-list",children:N.length>0?N.map(D=>u.jsx(ow,{post:D},D.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})})},"posts"),r==="likes"&&u.jsx(xe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No liked posts yet"})})},"likes"),r==="saved"&&u.jsx(xe.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No saved posts yet"})})},"saved")]}),u.jsx(nn,{children:d&&u.jsx(xe.div,{className:"edit-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>h(!1),children:u.jsxs(xe.div,{className:"edit-modal",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},onClick:D=>D.stopPropagation(),children:[u.jsxs("div",{className:"edit-modal-header",children:[u.jsx("h2",{children:"Edit Profile"}),u.jsx(xe.button,{className:"edit-modal-close",onClick:()=>h(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"20",height:"20",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),u.jsxs("div",{className:"edit-modal-body",children:[u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Profile Picture"}),u.jsxs("div",{className:"image-upload-area",onClick:()=>{var D;return(D=Z.current)==null?void 0:D.click()},children:[H.avatar_url?u.jsx("img",{src:H.avatar_url,alt:"Avatar",className:"image-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("path",{d:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"}),u.jsx("circle",{cx:"12",cy:"13",r:"4"})]}),u.jsx("span",{children:"Tap to change"})]}),p&&u.jsx("div",{className:"image-upload-spinner"})]}),u.jsx("input",{ref:Z,type:"file",accept:"image/*",hidden:!0,onChange:async D=>{var we;const G=(we=D.target.files)==null?void 0:we[0];if(!G)return;const ce=await X(G,"avatars");ce&&Q(_e=>({..._e,avatar_url:ce}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Cover Image"}),u.jsx("div",{className:"cover-upload-area",onClick:()=>{var D;return(D=ye.current)==null?void 0:D.click()},children:H.cover_url?u.jsx("img",{src:H.cover_url,alt:"Cover",className:"cover-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Tap to change cover"})]})}),u.jsx("input",{ref:ye,type:"file",accept:"image/*",hidden:!0,onChange:async D=>{var we;const G=(we=D.target.files)==null?void 0:we[0];if(!G)return;const ce=await X(G,"covers");ce&&Q(_e=>({..._e,cover_url:ce}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Name"}),u.jsx("input",{type:"text",value:H.full_name,onChange:D=>Q(G=>({...G,full_name:D.target.value})),placeholder:"Your full name"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Username"}),u.jsx("input",{type:"text",value:H.username,onChange:D=>Q(G=>({...G,username:D.target.value})),placeholder:"Your username"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Bio"}),u.jsx("textarea",{value:H.bio,onChange:D=>Q(G=>({...G,bio:D.target.value})),placeholder:"Tell your story",rows:3})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Website"}),u.jsx("input",{type:"text",value:H.website,onChange:D=>Q(G=>({...G,website:D.target.value})),placeholder:"yourwebsite.com"})]})]}),u.jsxs("div",{className:"edit-modal-footer",children:[u.jsx(xe.button,{className:"edit-btn-cancel",onClick:()=>h(!1),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Cancel"}),u.jsx(xe.button,{className:"edit-btn-save",onClick:me,disabled:y,whileHover:{scale:1.02},whileTap:{scale:.98},children:y?"Saving...":"Save Changes"})]})]})})}),u.jsx(nn,{children:x&&u.jsxs(xe.div,{className:`toast toast-${x.type}`,initial:{opacity:0,y:50,x:20},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:20,x:20},transition:{type:"spring",stiffness:300,damping:25},children:[x.type==="success"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),u.jsx("span",{children:x.message})]})}),u.jsx("style",{children:ZR})]})}const ZR=`
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
`,Cs={search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),hash:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),u.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),u.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),u.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]})},eN=["All","Gaming","Art","Music","Tech","Photography","Fitness","Fashion"],tN=[{name:"Pixel Art Masters",members:"12.4k",category:"Art",desc:"A community for pixel art enthusiasts and digital artists.",color:"#ff6b6b"},{name:"Cyber Gamers",members:"8.7k",category:"Gaming",desc:"Discuss the latest games, strategies, and esports.",color:"#ffa502"},{name:"Synthwave Producers",members:"5.2k",category:"Music",desc:"Create and share synthwave, retrowave, and chill beats.",color:"#7bed9f"},{name:"Code Brigade",members:"15.3k",category:"Tech",desc:"Web dev, AI, open source — all things code.",color:"#70a1ff"},{name:"Lens Culture",members:"6.8k",category:"Photography",desc:"Share your best shots and photography techniques.",color:"#ff6348"},{name:"Neon Fitness",members:"4.1k",category:"Fitness",desc:"Push your limits with the neon fitness crew.",color:"#a29bfe"},{name:"Digital Canvas",members:"9.5k",category:"Art",desc:"Digital painting, 3D modeling, and concept art.",color:"#55efc4"},{name:"Vaporwave Lounge",members:"3.9k",category:"Music",desc:"Chill aesthetics, vaporwave, and lo-fi vibes.",color:"#fd79a8"}];function nN(){const[t,e]=j.useState("All"),[a,r]=j.useState(""),o=tN.filter(c=>{const d=t==="All"||c.category===t,h=c.name.toLowerCase().includes(a.toLowerCase())||c.desc.toLowerCase().includes(a.toLowerCase());return d&&h});return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"communities-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Communities"}),u.jsx("p",{children:"Discover and join communities that match your interests"})]}),u.jsxs("div",{className:"search-bar glass",children:[Cs.search,u.jsx("input",{type:"text",placeholder:"Search communities...",value:a,onChange:c=>r(c.target.value)})]}),u.jsx("div",{className:"category-pills",children:eN.map(c=>u.jsxs("button",{className:`pill ${t===c?"active":""}`,onClick:()=>e(c),children:[c==="All"?null:u.jsx("span",{className:"pill-icon",children:Cs.hash}),c]},c))}),o.length===0?u.jsxs("div",{className:"empty-state glass",children:[Cs.search,u.jsx("h3",{children:"No communities found"}),u.jsx("p",{children:"Try adjusting your search or filter"})]}):u.jsxs("div",{className:"communities-grid",children:[o.map((c,d)=>u.jsxs("div",{className:"community-card glass",children:[u.jsxs("div",{className:"community-card-header",style:{background:`linear-gradient(135deg, ${c.color}22, ${c.color}44)`},children:[u.jsx("div",{className:"community-avatar",style:{background:c.color},children:c.name.charAt(0)}),u.jsx("span",{className:"community-category",children:c.category})]}),u.jsxs("div",{className:"community-card-body",children:[u.jsx("h3",{children:c.name}),u.jsx("p",{children:c.desc}),u.jsx("div",{className:"community-meta",children:u.jsxs("span",{children:[Cs.users," ",c.members," members"]})})]}),u.jsx("div",{className:"community-card-footer",children:u.jsx("button",{className:"join-community-btn",children:"Join Community"})})]},d)),u.jsxs("div",{className:"community-card create-card glass",children:[u.jsx("div",{className:"create-card-icon",children:Cs.plus}),u.jsx("h3",{children:"Create Community"}),u.jsx("p",{children:"Start your own community and bring people together"}),u.jsx("button",{className:"create-community-btn",children:"Get Started"})]})]})]}),u.jsx("style",{children:`
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
      `})]})}function wb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":String(t)}function iN(){const[t,e]=j.useState([]),[a,r]=j.useState([]),[o,c]=j.useState(!0);return j.useEffect(()=>{const d=async()=>{try{const{data:p}=await te.from("posts").select("content, created_at").not("content","is",null).eq("is_deleted",!1).order("created_at",{ascending:!1}).limit(200),g={},y=/#(\w+)/gi;if(p)for(const x of p){let w;for(;(w=y.exec(x.content))!==null;){const S=w[1].toLowerCase();g[S]=(g[S]||0)+1}}const v=Object.entries(g).sort((x,w)=>w[1]-x[1]).slice(0,8).map(([x,w])=>({tag:x,posts:wb(w)}));e(v)}catch(p){console.warn("Failed to fetch trends:",p)}},h=async()=>{try{const{data:p}=await te.from("follows").select("following_id");if(p&&p.length>0){const g={};p.forEach(v=>{g[v.following_id]=(g[v.following_id]||0)+1});const y=Object.entries(g).sort((v,x)=>x[1]-v[1]).slice(0,4).map(([v])=>v);if(y.length>0){const{data:v}=await te.from("profiles").select("id, username, display_name, avatar_url").in("id",y);if(v){const x={};v.forEach(S=>{x[S.id]=S});const w=y.map((S,T)=>{const E=x[S]||{};return{handle:`@${E.username||"user"}`,name:E.display_name||E.username||"User",avatarUrl:E.avatar_url||null,followers:wb(g[S])}});r(w)}}}}catch(p){console.warn("Failed to fetch creators:",p)}};Promise.all([d(),h()]).finally(()=>c(!1))},[]),{trendData:t,trendingCreators:a,loading:o}}const aN=[{id:"for-you",label:"For You",icon:"✨"},{id:"trending",label:"Trending",icon:"🔥"},{id:"photos",label:"Photos",icon:"📷"},{id:"videos",label:"Videos",icon:"🎬"},{id:"technology",label:"Tech",icon:"💻"},{id:"gaming",label:"Gaming",icon:"🎮"},{id:"art",label:"Art",icon:"🎨"},{id:"music",label:"Music",icon:"🎵"}],rN=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),sN=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),oN=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),lN=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:u.jsx("path",{d:"M8 5v14l11-7z"})}),cN={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.04}}},uN={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:18}}};function dN(){const t=It(),[e,a]=j.useState(!0),[r,o]=j.useState("for-you"),[c,d]=j.useState(""),[h,p]=j.useState(!1),{trendData:g}=iN(),y=j.useRef(null),v=j.useRef(null),x=j.useRef(null),[w,S]=j.useState({users:[],hashtags:[],posts:[]}),[T,E]=j.useState(!1),_=j.useRef(null),N=j.useCallback(async M=>{if(M.length<1){S({users:[],hashtags:[],posts:[]});return}E(!0);try{const H=`%${M}%`,[Q,Z]=await Promise.all([te.from("profiles").select("id, username, display_name, avatar_url, bio").or(`username.ilike.${H},display_name.ilike.${H}`).limit(5),te.from("posts").select("id, content, created_at, profiles!inner(id, username, display_name, avatar_url)").ilike("content",H).order("created_at",{ascending:!1}).limit(10)]),ye=new Set,he=[];if(Z.data){const Ae=/#(\w+)/gi;for(const Le of Z.data){let pe;for(;(pe=Ae.exec(Le.content))!==null;){const z=pe[1].toLowerCase();!ye.has(z)&&z.includes(M.toLowerCase())&&(ye.add(z),he.push({tag:z,posts:"—"}))}}}S({users:Q.data||[],hashtags:he.slice(0,5),posts:Z.data||[]})}catch(H){console.warn("Search error:",H),S({users:[],hashtags:[],posts:[]})}finally{E(!1)}},[]);j.useEffect(()=>{if(_.current&&clearTimeout(_.current),!c.trim()){S({users:[],hashtags:[],posts:[]});return}return _.current=setTimeout(()=>N(c.trim()),300),()=>{_.current&&clearTimeout(_.current)}},[c,N]),j.useEffect(()=>{const M=setTimeout(()=>a(!1),1800);return()=>clearTimeout(M)},[]);const C=Ot(M=>M.posts),V=Ot(M=>M.fetchFeed),Y=j.useMemo(()=>{if((C==null?void 0:C.length)>0){const M=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];return C.filter(H=>H.image_url||H.video_url).map((H,Q)=>{var Z,ye;return{id:H.id,imageUrl:H.image_url||"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:((Z=H.profiles)==null?void 0:Z.username)||((ye=H.profiles)==null?void 0:ye.display_name)||"user",avatarColor:M[Q%M.length],likes:H.likes??0,comments:H.comments??0,isVideo:!!H.video_url}})}return[]},[C]);j.useEffect(()=>{C!=null&&C.length||V()},[]),j.useEffect(()=>{const M=H=>{y.current&&!y.current.contains(H.target)&&p(!1)};return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]);const J=()=>u.jsx("div",{className:"explore-skeleton-grid",children:Array.from({length:6}).map((M,H)=>u.jsx("div",{className:"explore-skeleton-item",style:{height:H%3===0?280:H%3===1?200:240},children:u.jsx("div",{className:"explore-shimmer"})},H))});return u.jsxs("div",{className:"explore-page",children:[u.jsxs("div",{className:"explore-search-wrapper",ref:y,children:[u.jsxs("div",{className:`explore-search ${h?"explore-search-focused":""}`,children:[u.jsx(rN,{}),u.jsx("input",{type:"text",placeholder:"Search posts, creators, hashtags...",value:c,onChange:M=>d(M.target.value),onFocus:()=>p(!0)}),c&&u.jsx("button",{className:"explore-search-clear",onClick:()=>d(""),children:"✕"})]}),u.jsx(nn,{children:h&&c.trim()&&u.jsx(xe.div,{className:"explore-suggestions",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},children:c.trim()?T?u.jsx("div",{className:"explore-search-status",children:"Searching..."}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Users"}),w.users.length>0?w.users.map((M,H)=>{var Q,Z;return u.jsxs(xe.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:H*.03},onClick:()=>t(`/profile/${M.id}`),style:{cursor:"pointer"},children:[u.jsx("span",{className:"explore-suggestion-icon",style:{background:M.avatar_url?`url(${M.avatar_url}) center/cover`:"var(--surface)",borderRadius:"50%",overflow:"hidden"},children:!M.avatar_url&&(((Q=M.display_name)==null?void 0:Q[0])||((Z=M.username)==null?void 0:Z[0])||"?")}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:M.display_name||M.username}),u.jsxs("span",{className:"explore-suggestion-sub",children:["@",M.username]})]})]},`user-${M.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No users found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Hashtags"}),w.hashtags.length>0?w.hashtags.map((M,H)=>u.jsxs(xe.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:H*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"#️⃣"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsxs("span",{className:"explore-suggestion-label",children:["#",M.tag]}),u.jsxs("span",{className:"explore-suggestion-sub",children:[M.posts," posts"]})]})]},`tag-${M.tag}`)):u.jsx("div",{className:"explore-search-empty",children:"No hashtags found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Posts"}),w.posts.length>0?w.posts.map((M,H)=>{var Q,Z;return u.jsxs(xe.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:H*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"📄"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:M.content.length>60?M.content.slice(0,60)+"...":M.content}),u.jsxs("span",{className:"explore-suggestion-sub",children:["by @",((Q=M.profiles)==null?void 0:Q.username)||((Z=M.profiles)==null?void 0:Z.display_name)||"user"]})]})]},`post-${M.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No posts found"})]}),!T&&w.users.length===0&&w.hashtags.length===0&&w.posts.length===0&&u.jsxs("div",{className:"explore-search-empty explore-search-empty-all",children:['No results found for "',c,'"']})]}):null})})]}),u.jsx("div",{className:"explore-hashtags-wrapper",children:u.jsxs("div",{className:"explore-hashtags",ref:v,children:[(g||[]).map(M=>u.jsxs("button",{className:"explore-hashtag-pill",children:[u.jsx("span",{className:"explore-hashtag-sign",children:"#"}),M.tag,u.jsx("span",{className:"explore-hashtag-count",children:M.posts})]},M.tag)),(!g||g.length===0)&&u.jsx("div",{className:"explore-search-empty",children:"No trends available yet"})]})}),u.jsx("div",{className:"explore-tabs-wrapper",children:u.jsxs("div",{className:"explore-tabs",ref:x,children:[aN.map(M=>u.jsxs("button",{className:`explore-tab ${r===M.id?"explore-tab-active":""}`,onClick:()=>o(M.id),children:[u.jsx("span",{className:"explore-tab-icon",children:M.icon}),u.jsx("span",{className:"explore-tab-label",children:M.label})]},M.id)),u.jsx(xe.div,{className:"explore-tab-indicator",layoutId:"active-tab",transition:{type:"spring",stiffness:400,damping:30}})]})}),u.jsx("div",{className:"explore-content",children:u.jsx("div",{className:"explore-grid-section",children:e?u.jsx(J,{}):u.jsx(xe.div,{className:"explore-masonry",variants:cN,initial:"hidden",animate:"visible",children:u.jsx(nn,{mode:"popLayout",children:Y.map(M=>u.jsx(xe.div,{className:"explore-masonry-item",variants:uN,layout:!0,exit:{opacity:0,scale:.9,transition:{duration:.2}},children:u.jsxs("div",{className:"explore-masonry-img-wrap",children:[u.jsx("img",{src:M.imageUrl,alt:`by ${M.username}`,loading:"lazy"}),M.isVideo&&u.jsx("div",{className:"explore-video-badge",children:u.jsx(lN,{})}),u.jsxs("div",{className:"explore-masonry-overlay",children:[u.jsxs("div",{className:"explore-masonry-stats",children:[u.jsxs("span",{children:[u.jsx(sN,{})," ",M.likes>=1e3?`${(M.likes/1e3).toFixed(1)}K`:M.likes]}),u.jsxs("span",{children:[u.jsx(oN,{})," ",M.comments]})]}),u.jsxs("div",{className:"explore-masonry-creator",children:[u.jsx("span",{className:"explore-masonry-avatar",style:{background:M.avatarColor},children:M.username.charAt(0)}),u.jsx("span",{className:"explore-masonry-username",children:M.username})]})]})]})},M.id))})},r)})}),u.jsx("style",{children:`
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


        /* ────────── Responsive ────────── */
        @media (max-width: 1023px) {
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
      `})]})}const ga=Fi((t,e)=>({notifications:[],unreadCount:0,isLoading:!1,fetchNotifications:async()=>{t({isLoading:!0});try{const{data:a,error:r}=await te.from("notifications").select(`
          *,
          actor:actor_id (id, username, display_name, avatar_url)
        `).order("created_at",{ascending:!1}).limit(50);if(r)throw r;const o=(a||[]).filter(c=>!c.is_read).length;t({notifications:a||[],unreadCount:o,isLoading:!1})}catch(a){t({isLoading:!1}),console.error("Fetch notifications error:",a.message)}},addNotificationRealtime:a=>{t(r=>r.notifications.some(c=>c.id===a.id)?r:{notifications:[a,...r.notifications],unreadCount:r.unreadCount+(a.is_read?0:1)})},markAsRead:async a=>{const{error:r}=await te.from("notifications").update({is_read:!0}).eq("id",a);if(r){console.error("Mark as read error:",r.message);return}t(o=>({notifications:o.notifications.map(c=>c.id===a?{...c,is_read:!0}:c),unreadCount:Math.max(0,o.unreadCount-1)}))},markAllAsRead:async()=>{const{error:a}=await te.from("notifications").update({is_read:!0}).eq("is_read",!1);if(a){console.error("Mark all as read error:",a.message);return}t(r=>({notifications:r.notifications.map(o=>({...o,is_read:!0})),unreadCount:0}))}}));function hN(){const t=mt(p=>p.user),e=ga(p=>p.notifications),a=ga(p=>p.unreadCount),r=ga(p=>p.fetchNotifications),o=ga(p=>p.markAllAsRead),c=ga(p=>p.addNotificationRealtime),[d,h]=j.useState([]);return j.useEffect(()=>{r()},[r]),j.useEffect(()=>{if(!t)return;const p=te.channel("realtime-notifications").on("postgres_changes",{event:"INSERT",schema:"public",table:"notifications",filter:`user_id=eq.${t.id}`},async g=>{const{data:y,error:v}=await te.from("notifications").select("*, actor:actor_id (id, username, display_name, avatar_url)").eq("id",g.new.id).single();v||!y||(h(x=>x.some(w=>w.id===y.id)?x:[y,...x]),c(y))}).subscribe();return()=>{te.removeChannel(p)}},[t,c]),{liveNotifications:d,unreadCount:a,markAllAsRead:o,notificationEvents:e}}const ya={heartFilled:u.jsx("svg",{viewBox:"0 0 24 24",fill:"#ff6464",stroke:"#ff6464",strokeWidth:"2",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),messageCircle:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 11 12 14 22 4"}),u.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"}),u.jsx("polyline",{points:"9 11 12 14 22 4"})]}),bellOff:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"}),u.jsx("path",{d:"M18.63 13A17.89 17.89 0 0118 8"}),u.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"}),u.jsx("path",{d:"M18 8a6 6 0 00-9.33-5"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),tag:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"}),u.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})},Sb={heart:ya.heartFilled,user:ya.user,message:ya.messageCircle,users:ya.users,tag:ya.tag};function fN(){const{notificationState:t=[],unreadCount:e,markAllAsRead:a}=hN(),[r,o]=j.useState(!1),c=a,d=t.filter(p=>{const g=p.time.match(/(\d+)([mh])/);if(!g)return!1;const[,y,v]=g;return v==="m"?parseInt(y)<60:v==="h"?parseInt(y)<24:!1}),h=t.filter(p=>{const g=p.time.match(/(\d+)([dh])/);if(!g)return!0;const[,y,v]=g;return v==="h"?parseInt(y)>=1:!0});return r||t.length===0?u.jsxs("div",{className:"page-enter",children:[u.jsx("div",{className:"notifications-page",children:u.jsxs("div",{className:"empty-state glass",children:[u.jsx("div",{className:"empty-icon",children:ya.bellOff}),u.jsx("h3",{children:"All caught up!"}),u.jsx("p",{children:"No new notifications. You're up to date."})]})}),u.jsx("style",{children:jb})]}):u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"notifications-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsxs("div",{className:"page-header-left",children:[u.jsx("h1",{children:"Notifications"}),e>0&&u.jsx("span",{className:"unread-badge",children:e})]}),u.jsxs("button",{className:"mark-all-btn",onClick:c,disabled:e===0,children:[ya.checkAll," Mark all as read"]})]}),d.length>0&&u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Today"}),u.jsx("div",{className:"notif-list",children:u.jsx(nn,{mode:"popLayout",children:d.map((p,g)=>u.jsxs(xe.div,{layout:!0,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{type:"spring",stiffness:300,damping:25},className:`notif-item glass ${p.read?"notif-read":""}`,children:[u.jsx("div",{className:"notif-icon",style:{background:p.read?"var(--surface)":"color-mix(in srgb, var(--accent) 10%, transparent)"},children:Sb[p.icon]}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:p.text}),u.jsx("span",{className:"notif-time",children:p.time})]}),!p.read&&u.jsx("div",{className:"notif-dot"})]},`today-${p.type}-${g}`))})})]}),u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Earlier"}),u.jsx("div",{className:"notif-list",children:u.jsx(nn,{mode:"popLayout",children:h.map((p,g)=>u.jsxs(xe.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,x:20},transition:{duration:.2},className:"notif-item glass notif-read",children:[u.jsx("div",{className:"notif-icon",style:{background:"var(--surface)"},children:Sb[p.icon]}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:p.text}),u.jsx("span",{className:"notif-time",children:p.time})]})]},`earlier-${p.type}-${g}`))})})]})]}),u.jsx("style",{children:jb})]})}const jb=`
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
`,kb=Fi(t=>({metrics:null,isLoading:!1,dateRange:"7d",fetchMetrics:async(e="7d")=>{t({isLoading:!0,dateRange:e});const a=new Date;let r;switch(e){case"24h":r=new Date(a-1440*60*1e3);break;case"7d":r=new Date(a-10080*60*1e3);break;case"30d":r=new Date(a-720*60*60*1e3);break;case"90d":r=new Date(a-2160*60*60*1e3);break;default:r=new Date(a-10080*60*1e3)}try{const[o,c,d,h]=await Promise.allSettled([te.from("posts").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),te.from("likes").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),te.from("comments").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),te.from("follows").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString())]),p={posts:o.status==="fulfilled"?o.value.count??0:0,likes:c.status==="fulfilled"?c.value.count??0:0,comments:d.status==="fulfilled"?d.value.count??0:0,follows:h.status==="fulfilled"?h.value.count??0:0};t({metrics:p,isLoading:!1})}catch(o){t({isLoading:!1}),console.error("Fetch metrics error:",o.message)}},getMetricHistory:async(e="posts",a="7d")=>{const r=new Date;let o;switch(a){case"24h":o=new Date(r-1440*60*1e3);break;case"7d":o=new Date(r-10080*60*1e3);break;case"30d":o=new Date(r-720*60*60*1e3);break;case"90d":o=new Date(r-2160*60*60*1e3);break;default:o=new Date(r-10080*60*1e3)}const d={posts:"posts",likes:"likes",comments:"comments",follows:"follows"}[e];if(!d)return[];try{const{data:h,error:p}=await te.from(d).select("created_at").gte("created_at",o.toISOString()).order("created_at",{ascending:!0});if(p)throw p;const g={},y=a==="24h"?3600*1e3:1440*60*1e3;for(const v of h||[]){const w=new Date(Math.floor(new Date(v.created_at).getTime()/y)*y).toISOString();g[w]=(g[w]||0)+1}return Object.entries(g).map(([v,x])=>({date:v,value:x}))}catch(h){return console.error(`Fetch ${e} history error:`,h.message),[]}}}));function pN(){const t=kb(a=>a.metrics),e=kb(a=>a.fetchMetrics);return j.useEffect(()=>{t||e()},[t,e]),{analyticsData:t}}const _b={connecting:{color:"#fbbf24",label:"Connecting...",pulse:!0},connected:{color:"#22c55e",label:"Connected",pulse:!1},disconnected:{color:"#ef4444",label:"Disconnected",pulse:!1},reconnecting:{color:"#f97316",label:"Reconnecting...",pulse:!0}};function lw({variant:t="sidebar"}){const[e,a]=j.useState(!1),r=j.useRef(null);j.useEffect(()=>()=>clearTimeout(r.current),[]);const{connectionStatus:o,isFallbackMode:c}=window.__FRAMEX_REALTIME__||{connectionStatus:"connecting",isFallbackMode:!0};j.useEffect(()=>{a(!0),clearTimeout(r.current),o==="connected"&&(r.current=setTimeout(()=>a(!1),3e3))},[o]);const d=_b[o]||_b.connecting;return t==="sidebar"?u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",cursor:"pointer",position:"relative"},title:`${d.label}${c?" (Simulated)":""}`,children:[u.jsx("span",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none",flexShrink:0}}),u.jsx("span",{style:{fontSize:11,color:"var(--text-secondary, rgba(255,255,255,0.4))",fontFamily:"monospace"},children:d.label}),c&&u.jsx("span",{style:{fontSize:9,padding:"1px 5px",borderRadius:4,backgroundColor:"var(--surface, rgba(255,255,255,0.05))",color:"var(--text-secondary, rgba(255,255,255,0.4))"},children:"SIM"})]}):u.jsx("div",{style:{position:"relative",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},title:`${d.label}${c?" (Simulated)":""}`,children:u.jsx("span",{style:{width:6,height:6,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none"}})})}const mN={liveViewers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),activeUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),totalUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M22 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),postsPerMinute:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),u.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),engagementRate:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),dailyActiveUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),newSignupsToday:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),u.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),u.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),avgSessionDuration:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"12 6 12 12 16 14"})]})},gN={liveViewers:"Live Viewers",activeUsers:"Active Users",totalUsers:"Total Users",postsPerMinute:"Posts / Min",engagementRate:"Engagement Rate",dailyActiveUsers:"DAU",newSignupsToday:"New Signups",avgSessionDuration:"Avg Session"},yN={liveViewers:"#CCFF00",activeUsers:"#60a5fa",totalUsers:"#a78bfa",postsPerMinute:"#f472b6",engagementRate:"#34d399",dailyActiveUsers:"#fbbf24",newSignupsToday:"#fb923c",avgSessionDuration:"#22d3ee"};function vN({value:t,color:e}){const a=Array.from({length:20},(o,c)=>{const d=t*(1+(Math.random()-.5)*.4);return{x:c*5,y:30-d/100*25}}),r=a.map((o,c)=>`${c===0?"M":"L"}${o.x},${o.y}`).join(" ");return u.jsxs("svg",{width:"100",height:"30",style:{flexShrink:0},children:[u.jsx("path",{d:r,fill:"none",stroke:e,strokeWidth:"1.5",opacity:"0.6"}),a.map((o,c)=>u.jsx("circle",{cx:o.x,cy:o.y,r:"1.5",fill:e,opacity:"0.4"},c))]})}function Tb({metricKey:t,metric:e,index:a}){var d,h;const r=yN[t]||"#CCFF00",o=typeof e.current=="number"?e.current.toLocaleString():e.current,c=(h=(d=e.change)==null?void 0:d.startsWith)==null?void 0:h.call(d,"+");return u.jsxs(xe.div,{className:"analytics-card glass",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:a*.05,type:"spring",stiffness:100},children:[u.jsxs("div",{className:"analytics-card-header",children:[u.jsx("div",{className:"analytics-card-icon",style:{background:`${r}15`,color:r},children:mN[t]}),u.jsx("span",{className:"analytics-card-change",style:{color:c?"#34d399":"#f87171"},children:e.change})]}),u.jsx("div",{className:"analytics-card-value",children:o}),u.jsx("div",{className:"analytics-card-label",children:gN[t]}),u.jsx(vN,{value:typeof e.current=="number"?e.current:parseInt(e.current)||50,color:r})]})}function bN(){const{analyticsData:t}=pN(),[e,a]=j.useState("1h"),r=Object.entries(t),o=r.slice(0,4),c=r.slice(4);return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"analytics-dashboard",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"analytics-title",children:"Live Analytics"}),u.jsx("p",{className:"analytics-subtitle",children:"Real-time dashboard metrics"})]}),u.jsxs("div",{className:"analytics-header-right",children:[u.jsx(lw,{variant:"sidebar"}),u.jsx("div",{className:"analytics-time-selector",children:["1h","24h","7d","30d"].map(d=>u.jsx("button",{className:`analytics-time-btn ${e===d?"active":""}`,onClick:()=>a(d),children:d},d))})]})]}),u.jsx("div",{className:"analytics-primary-grid",children:o.map(([d,h],p)=>u.jsx(Tb,{metricKey:d,metric:h,index:p},d))}),u.jsx("div",{className:"analytics-secondary-grid",children:c.map(([d,h],p)=>u.jsx(Tb,{metricKey:d,metric:h,index:p+4},d))}),u.jsxs("div",{className:"analytics-footer glass",children:[u.jsx("div",{className:"analytics-footer-dot"}),u.jsx("span",{children:"All metrics updating in real-time • Auto-refresh enabled"})]})]}),u.jsx("style",{children:xN})]})}const xN=`
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
`,cw=j.createContext(),Eb="framex-theme",wN={"--bg":"#08080f","--bg-alt":"#0c0c18","--text":"#ffffff","--text-secondary":"rgba(255,255,255,0.4)","--surface":"rgba(255,255,255,0.05)","--surface-hover":"rgba(255,255,255,0.10)","--border":"rgba(255,255,255,0.08)","--accent":"#CCFF00","--accent-text":"#08080f","--danger":"#ff4d4d","--glass-bg":"rgba(255,255,255,0.05)","--glass-border":"rgba(255,255,255,0.08)"},SN={"--bg":"#ffffff","--bg-alt":"#f5f5f7","--text":"#111111","--text-secondary":"rgba(0,0,0,0.45)","--surface":"rgba(0,0,0,0.03)","--surface-hover":"rgba(0,0,0,0.06)","--border":"rgba(0,0,0,0.08)","--accent":"#a0cc00","--accent-text":"#ffffff","--danger":"#e03030","--glass-bg":"rgba(255,255,255,0.7)","--glass-border":"rgba(0,0,0,0.06)"};function Ab(t){const e=t==="light"?SN:wN,a=document.documentElement;Object.entries(e).forEach(([r,o])=>a.style.setProperty(r,o)),a.setAttribute("data-theme",t)}function Ah(){return typeof window>"u"?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function jN({children:t}){const[e,a]=j.useState(()=>{try{const h=localStorage.getItem(Eb);if(h==="dark"||h==="light"||h==="system")return h}catch{}return"dark"}),[r,o]=j.useState(()=>e==="system"?Ah():e),c=j.useCallback(h=>{a(h);try{localStorage.setItem(Eb,h)}catch{}},[]),d=Dt();return j.useEffect(()=>{d.pathname==="/"?Ab("dark"):Ab(r)},[r,d.pathname]),j.useEffect(()=>{o(e==="system"?Ah():e)},[e]),j.useEffect(()=>{if(e!=="system")return;const h=window.matchMedia("(prefers-color-scheme: dark)"),p=()=>o(Ah());return h.addEventListener("change",p),()=>h.removeEventListener("change",p)},[e]),j.useEffect(()=>{const h=document.createElement("style");h.textContent=`
      *, *::before, *::after {
        transition: background-color 0.3s ease, color 0.3s ease,
                    border-color 0.3s ease, box-shadow 0.3s ease,
                    backdrop-filter 0.3s ease !important;
      }
    `,h.id="theme-transition-style";const p=document.getElementById("theme-transition-style");p&&p.remove(),document.head.appendChild(h);const g=setTimeout(()=>{const y=document.getElementById("theme-transition-style");y&&y.remove()},400);return()=>{clearTimeout(g);const y=document.getElementById("theme-transition-style");y&&y.remove()}},[r]),u.jsx(cw.Provider,{value:{theme:e,setTheme:c,resolvedTheme:r},children:t})}function kN(){const t=j.useContext(cw);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const $t={dark:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),light:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),u.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),u.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),u.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),u.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),u.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),u.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),system:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),u.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),u.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),lock:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"})]}),shield:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),chevronRight:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"9 18 15 12 9 6"})}),helpCircle:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),info:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),fileText:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),u.jsx("polyline",{points:"14 2 14 8 20 8"}),u.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),u.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),u.jsx("polyline",{points:"10 9 9 9 8 9"})]}),logOut:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),check:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})})},_N=[{id:"dark",label:"Dark",icon:$t.dark},{id:"light",label:"Light",icon:$t.light},{id:"system",label:"System",icon:$t.system}],TN=[{id:"edit-profile",label:"Edit Profile",icon:$t.user},{id:"privacy",label:"Privacy Settings",icon:$t.lock},{id:"notifications",label:"Notification Settings",icon:$t.bell},{id:"security",label:"Security Settings",icon:$t.shield}],EN=[{id:"contact",label:"Contact Us",icon:$t.helpCircle},{id:"about",label:"About FrameX",icon:$t.info},{id:"terms",label:"Terms & Privacy Policy",icon:$t.fileText}],AN={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}};function CN(){const{theme:t,setTheme:e}=kN(),{signOut:a}=mt(),r=It(),o=async()=>{try{await a(),r("/login")}catch{}};return u.jsxs(xe.div,{className:"settings-page",...AN,children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Settings"}),u.jsx("p",{children:"Manage your account and preferences"})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Appearance"}),u.jsx("div",{className:"theme-options",children:_N.map(c=>u.jsxs("button",{className:`theme-card ${t===c.id?"active":""}`,onClick:()=>e(c.id),children:[u.jsx("div",{className:"theme-card-icon",children:c.icon}),u.jsx("span",{className:"theme-card-label",children:c.label}),t===c.id&&u.jsx("div",{className:"theme-card-check",children:$t.check})]},c.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Account"}),u.jsx("div",{className:"settings-items",children:TN.map(c=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:c.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:c.label})}),u.jsx("div",{className:"settings-item-arrow",children:$t.chevronRight})]},c.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Support"}),u.jsx("div",{className:"settings-items",children:EN.map(c=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:c.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:c.label})}),u.jsx("div",{className:"settings-item-arrow",children:$t.chevronRight})]},c.id))})]}),u.jsxs("div",{className:"logout-section",children:[u.jsxs("button",{className:"logout-btn",onClick:o,children:[$t.logOut," Logout"]}),u.jsx("span",{className:"version",children:"FrameX v1.0.0"})]}),u.jsx("style",{children:`
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
      `})]})}let RN=0;const uw=Fi((t,e)=>({activeModal:null,modalProps:{},toasts:[],openModal:(a,r={})=>{t({activeModal:a,modalProps:r})},closeModal:()=>{t({activeModal:null,modalProps:{}})},addToast:(a,r="info",o=3e3)=>{const c=++RN,d={id:c,message:a,type:r,duration:o};return t(h=>({toasts:[...h.toasts,d]})),o>0&&setTimeout(()=>{e().removeToast(c)},o),c},removeToast:a=>{t(r=>({toasts:r.toasts.filter(o=>o.id!==a)}))},clearToasts:()=>{t({toasts:[]})}})),Ch=2200,Cb=10,NN=["image/jpeg","image/png","image/webp","image/gif"],ON=20*1024*1024,DN=[{value:"public",label:"Public",icon:"globe",desc:"Anyone can see this post"},{value:"followers",label:"Followers Only",icon:"users",desc:"Only followers can see this post"},{value:"private",label:"Private",icon:"lock",desc:"Only you can see this post"}];function LN(){const t=It(),{profile:e}=mt(),{createPost:a,uploadPostImage:r,deletePostImage:o}=yc(),{addPostOptimistic:c,removePostOptimistic:d}=Ot(),{addToast:h}=uw(),[p,g]=j.useState(""),[y,v]=j.useState([]),[x,w]=j.useState("public"),[S,T]=j.useState(!1),[E,_]=j.useState({}),[N,C]=j.useState(!1),[V,Y]=j.useState(!1),[J,M]=j.useState(0),[H,Q]=j.useState(null),Z=j.useRef(null),ye=j.useRef(null),he=j.useRef(0);j.useEffect(()=>{var me;const X=()=>{if(window.visualViewport){const ue=Math.max(0,window.innerHeight-window.visualViewport.height);M(ue)}};return(me=window.visualViewport)==null||me.addEventListener("resize",X),()=>{var ue;return(ue=window.visualViewport)==null?void 0:ue.removeEventListener("resize",X)}},[]);const Ae=j.useCallback(()=>{S||(p||y.length>0?window.confirm("Discard this post?")&&(Le(),t(-1)):t(-1))},[p,y,S,t]);j.useEffect(()=>{const X=()=>{(p||y.length>0)&&Le()};return window.addEventListener("popstate",X),()=>window.removeEventListener("popstate",X)},[p,y]);const Le=async()=>{for(const X of y)if(X.path)try{await o(X.path)}catch{}},pe=X=>NN.includes(X.type)?X.size>ON?(h("File too large. Max 20MB.","error"),!1):!0:(h(`Unsupported file type: ${X.type}`,"error"),!1),z=async X=>{const me=Cb-y.length;X.length>me&&h(`You can only add ${me} more image(s)`,"error");const ue=Array.from(X).slice(0,me).filter(pe);if(ue.length===0)return;const D=ue.map(G=>({id:`temp_${Date.now()}_${Math.random().toString(36).slice(2)}`,file:G,url:URL.createObjectURL(G),path:null,progress:0,status:"pending"}));v(G=>[...G,...D])},ee=X=>{const me=X.target,ue=me.files;ue&&z(ue),me.value=""},ie=X=>{v(me=>{var D;const ue=me.find(G=>G.id===X);return(D=ue==null?void 0:ue.url)!=null&&D.startsWith("blob:")&&URL.revokeObjectURL(ue.url),ue!=null&&ue.path&&o(ue.path).catch(()=>{}),me.filter(G=>G.id!==X)})},be=X=>Q(X),ke=(X,me)=>{X.preventDefault(),!(H===null||H===me)&&(v(ue=>{const D=[...ue],[G]=D.splice(H,1);return D.splice(me,0,G),D}),Q(me))},R=()=>Q(null),q=async()=>{var D;const X=y.filter(G=>G.status==="pending");if(X.length===0)return[];const me=(D=mt.getState().user)==null?void 0:D.id;if(!me)throw new Error("Not authenticated");const ue=[];for(const G of X){v(ce=>ce.map(we=>we.id===G.id?{...we,status:"uploading",progress:0}:we));try{const ce=await r(G.file,me,we=>{v(_e=>_e.map(rt=>rt.id===G.id?{...rt,progress:we}:rt))});v(we=>we.map(_e=>_e.id===G.id?{..._e,path:ce.path,url:ce.url,status:"done",progress:100}:_e)),ue.push({url:ce.url,path:ce.path})}catch(ce){throw v(we=>we.map(_e=>_e.id===G.id?{..._e,status:"error"}:_e)),new Error(`Failed to upload ${G.file.name}: ${ce.message}`)}}return ue},W=async()=>{var ue,D,G;if(N||S)return;if(y.length===0&&!p.trim()){h("Add a photo or write something","error");return}if(!mt.getState().user){h("Your session has expired. Please log in again.","error"),t("/login",{replace:!0});return}C(!0),T(!0),he.current=Date.now();let me;try{const ce=await q();T(!1),me=`opt_${Date.now()}`;const we={id:me,user_id:(ue=mt.getState().user)==null?void 0:ue.id,content:p.trim(),type:ce.length>0?"image":"text",media:ce,image_url:((D=ce[0])==null?void 0:D.url)||null,audience:x,is_deleted:!1,created_at:new Date().toISOString(),profiles:e?{id:e.id,username:e.username,display_name:e.display_name,avatar_url:e.avatar_url,is_verified:e.is_verified||!1}:null};c(we);const _e=await a({content:p.trim(),type:ce.length>0?"image":"text",media:ce,image_url:((G=ce[0])==null?void 0:G.url)||null,audience:x});navigator.vibrate&&navigator.vibrate(20),d(me),c({..._e}),h("Post uploaded successfully","success"),Y(!0),setTimeout(()=>{t("/home",{replace:!0})},800)}catch(ce){T(!1),C(!1),Y(!1),d(me),console.error("Post creation failed:",ce),h("Unable to create post. Please try again.","error")}},ae=(y.length>0||p.trim().length>0)&&!N&&!S,fe=Ch-p.length,Se=X=>X?X.slice(0,2).toUpperCase():"?";return u.jsxs(xe.div,{className:"post-creation-page",initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:30},transition:{type:"spring",stiffness:300,damping:30},style:{paddingBottom:J>0?`${J}px`:0},children:[u.jsxs("div",{className:"pc-header",children:[u.jsx("button",{className:"pc-back-btn",onClick:Ae,disabled:S,"aria-label":"Go back",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),u.jsx("h1",{className:"pc-title",children:"New Post"}),u.jsx("button",{className:`pc-submit-btn ${ae?"":"disabled"} ${V?"success":""}`,onClick:W,disabled:!ae,children:V?u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"pc-check-icon",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}):N?u.jsx("div",{className:"pc-spinner"}):"Post"})]}),u.jsxs("div",{className:"pc-user-info",children:[u.jsx("div",{className:"pc-avatar",style:{background:(e==null?void 0:e.avatar_color)||"var(--accent)"},children:e!=null&&e.avatar_url?u.jsx("img",{src:e.avatar_url,alt:""}):u.jsx("span",{children:Se((e==null?void 0:e.display_name)||(e==null?void 0:e.username))})}),u.jsxs("div",{className:"pc-user-details",children:[u.jsx("span",{className:"pc-display-name",children:(e==null?void 0:e.display_name)||"Unknown"}),u.jsxs("span",{className:"pc-username",children:["@",(e==null?void 0:e.username)||"unknown"]})]})]}),u.jsxs("div",{className:"pc-caption-area",children:[u.jsx("textarea",{ref:ye,className:"pc-caption-input",placeholder:"Write a caption...",value:p,onChange:X=>{X.target.value.length<=Ch&&g(X.target.value)},rows:4,maxLength:Ch}),p.length>0&&u.jsx("span",{className:`pc-char-count ${fe<100?"pc-char-warn":""} ${fe<20?"pc-char-danger":""}`,children:fe})]}),u.jsx(nn,{children:y.length>0&&u.jsxs(xe.div,{className:"pc-image-grid",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[y.map((X,me)=>u.jsxs(xe.div,{className:`pc-image-item ${X.status==="uploading"?"uploading":""} ${X.status==="error"?"error":""}`,layout:!0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:me*.05}},draggable:!0,onDragStart:()=>be(me),onDragOver:ue=>ke(ue,me),onDragEnd:R,children:[u.jsx("img",{src:X.url,alt:`Upload ${me+1}`}),u.jsx("button",{className:"pc-img-remove",onClick:()=>ie(X.id),"aria-label":"Remove image",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),X.status==="uploading"&&u.jsxs("div",{className:"pc-img-progress",children:[u.jsxs("svg",{className:"pc-progress-ring",viewBox:"0 0 36 36",children:[u.jsx("circle",{className:"pc-progress-bg",cx:"18",cy:"18",r:"16"}),u.jsx("circle",{className:"pc-progress-bar",cx:"18",cy:"18",r:"16",strokeDasharray:`${X.progress*1.005} 100.5`,strokeDashoffset:"0"})]}),u.jsxs("span",{className:"pc-progress-text",children:[Math.round(X.progress),"%"]})]}),X.status==="error"&&u.jsx("div",{className:"pc-img-error-overlay",children:u.jsx("span",{children:"Failed"})}),u.jsx("span",{className:"pc-img-order",children:me+1})]},X.id)),y.length<Cb&&!N&&u.jsxs(xe.button,{className:"pc-add-image-btn",onClick:()=>{var X;return(X=Z.current)==null?void 0:X.click()},whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add"})]})]})}),y.length===0&&u.jsxs(xe.button,{className:"pc-add-photo-btn",onClick:()=>{var X;return(X=Z.current)==null?void 0:X.click()},whileHover:{scale:1.02},whileTap:{scale:.98},disabled:N,children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add Photos"})]}),u.jsx("input",{ref:Z,type:"file",accept:"image/jpeg,image/png,image/webp,image/gif",multiple:!0,onChange:ee,style:{display:"none"}}),u.jsxs("div",{className:"pc-audience-section",children:[u.jsx("label",{className:"pc-section-label",children:"Audience"}),u.jsx("div",{className:"pc-audience-options",children:DN.map(X=>u.jsxs("button",{className:`pc-audience-btn ${x===X.value?"active":""}`,onClick:()=>!N&&w(X.value),disabled:N,children:[u.jsxs("span",{className:"pc-audience-icon",children:[X.icon==="globe"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),X.icon==="users"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),X.icon==="lock"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})]}),u.jsx("span",{className:"pc-audience-label",children:X.label})]},X.value))})]}),u.jsx("style",{children:MN})]})}const MN=`
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
`;class zN extends j.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,a){console.error("ErrorBoundary caught:",e,a)}render(){return this.state.error?u.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},children:u.jsxs("div",{style:{maxWidth:480,padding:"2rem",background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.08)"},children:[u.jsx("h2",{style:{margin:"0 0 0.75rem",fontSize:"1.25rem"},children:"Something went wrong"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",margin:0},children:this.state.error.message})]})}):this.props.children}}function Mn({children:t}){const{user:e,isLoading:a}=mt(),r=Dt();return a?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"auth-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .auth-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):e?t:u.jsx($S,{to:"/login",state:{from:r},replace:!0})}const UN=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Alerts",icon:"bell"},{path:"/profile",label:"Profile",icon:"user"}],BN={home:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),chat:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),bell:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),user:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]})};function PN(){const t=It(),e=Dt(),{unreadCount:a}=ga(),[r,o]=j.useState(!0),c=j.useRef(0);return j.useEffect(()=>{const d=()=>{const h=window.scrollY;h>c.current&&h>60?o(!1):o(!0),c.current=h};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),u.jsx(nn,{children:r&&u.jsxs(xe.nav,{className:"bottom-nav",initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",stiffness:300,damping:30},children:[u.jsx("div",{className:"bottom-nav-inner",children:UN.map(d=>{const h=e.pathname===d.path;return u.jsxs("button",{className:`bottom-nav-item ${h?"active":""}`,onClick:()=>{e.pathname!==d.path&&(window.scrollTo({top:0,behavior:"smooth"}),t(d.path))},children:[u.jsxs("span",{className:"nav-icon-wrap",children:[BN[d.icon](h),d.path==="/notifications"&&a>0&&u.jsx("span",{className:"bottom-nav-badge",children:a>99?"99+":a})]}),u.jsx("span",{className:"nav-label-text",children:d.label})]},d.path)})}),u.jsx("style",{children:VN})]})})}const VN=`
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

  @media (min-width: 768px) {
    .bottom-nav {
      display: none;
    }
  }
`,Rb=140,Nb=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]});function HN(){const t=It(),[e,a]=j.useState(!1);return u.jsxs("div",{className:"slide-fab-wrap",children:[u.jsxs(xe.div,{className:"slide-fab-inner",drag:"x",dragConstraints:{left:0,right:Rb},dragElastic:.15,onDragEnd:(r,o)=>{o.offset.x<-30||o.velocity.x<-20?a(!0):(o.offset.x>20||o.velocity.x>20)&&a(!1)},animate:{x:e?0:Rb},transition:{type:"spring",stiffness:400,damping:30},onTap:()=>{e?t("/create"):a(!0)},whileTap:{scale:.94},layout:!0,children:[u.jsxs("div",{className:"slide-fab-body",children:[u.jsx("span",{className:"slide-fab-body-icon",children:u.jsx(Nb,{})}),u.jsx("span",{className:"slide-fab-body-text",children:"Create Post"})]}),u.jsx("div",{className:"slide-fab-tab",children:u.jsx(Nb,{})})]}),u.jsx("style",{children:$N})]})}const $N=`
  .slide-fab-wrap {
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1000;
    pointer-events: none;
  }

  .slide-fab-inner {
    display: flex;
    align-items: center;
    pointer-events: auto;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
    user-select: none;
    touch-action: pan-y;
  }

  .slide-fab-tab {
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--accent);
    color: var(--accent-text);
    border-radius: 12px 0 0 12px;
    box-shadow: -2px 2px 12px color-mix(in srgb, var(--accent) 25%, transparent);
    flex-shrink: 0;
  }
  .slide-fab-tab svg {
    width: 22px;
    height: 22px;
  }

  .slide-fab-body {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    height: 44px;
    padding: 0 0.75rem 0 1rem;
    background: var(--accent);
    color: var(--accent-text);
    flex-shrink: 0;
    white-space: nowrap;
  }
  .slide-fab-body-icon svg {
    width: 18px;
    height: 18px;
  }
  .slide-fab-body-text {
    font-size: 0.85rem;
    font-weight: 600;
    font-family: inherit;
  }

  @media (min-width: 768px) {
    .slide-fab-wrap {
      display: none;
    }
  }
`;function IN(){const{toasts:t,removeToast:e}=uw();return u.jsxs("div",{className:"toast-container",children:[u.jsx(nn,{mode:"popLayout",children:t.map(a=>u.jsxs(xe.div,{className:`toast-pill toast-${a.type}`,layout:!0,initial:{opacity:0,y:-40,scale:.92},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,y:-20,scale:.95,filter:"blur(4px)"},transition:{type:"spring",stiffness:400,damping:28,mass:.8},onClick:()=>e(a.id),children:[a.type==="success"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"16 8 10 16 7 13"})]}),a.type==="error"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),a.type==="info"&&u.jsxs("svg",{className:"toast-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),u.jsx("span",{className:"toast-message",children:a.message})]},a.id))}),u.jsx("style",{children:qN})]})}const qN=`
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
`,Ob={home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),analytics:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 20V10"}),u.jsx("path",{d:"M12 20V4"}),u.jsx("path",{d:"M6 20v-6"})]}),profile:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})},FN=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/communities",label:"Communities",icon:"communities"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Notifications",icon:"notification"},{path:"/profile",label:"Profile",icon:"profile"},{path:"/analytics",label:"Analytics",icon:"analytics"},{path:"/settings",label:"Settings",icon:"settings"}],GN={"/home":"Home","/explore":"Explore","/communities":"Communities","/chat":"Chats","/notifications":"Notifications","/profile":"Profile","/analytics":"Analytics","/settings":"Settings"},KN={initial:{opacity:0,y:12},animate:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-12,transition:{duration:.2,ease:"easeIn"}}};function li({children:t}){var v,x,w,S;const{user:e,profile:a,signOut:r}=mt(),o=It(),c=Dt(),d=GN[c.pathname]||"FrameX",{unreadCount:h}=ga(),p=c.pathname.split("/"),g=p[1]==="profile"&&p[2]&&p[2]!==(e==null?void 0:e.id),y=async()=>{await r(),o("/login")};return u.jsxs("div",{className:"app-layout",children:[!g&&u.jsxs("aside",{className:"desktop-sidebar",children:[u.jsxs("div",{className:"sidebar-brand",onClick:()=>o("/home"),children:[u.jsx("span",{className:"sidebar-logo-mark",children:"F"}),u.jsx("span",{className:"sidebar-logo-text",children:"FrameX"})]}),u.jsx("nav",{className:"sidebar-nav-main",children:FN.map(T=>u.jsxs("button",{className:`sidebar-nav-item ${c.pathname===T.path?"active":""}`,onClick:()=>o(T.path),children:[u.jsx("span",{className:"sidebar-nav-icon",children:Ob[T.icon]}),u.jsx("span",{className:"sidebar-nav-label",children:T.label}),T.path==="/notifications"&&h>0&&u.jsx("span",{className:"sidebar-notif-badge",children:h>99?"99+":h})]},T.path))}),u.jsx(lw,{variant:"sidebar"}),u.jsx("div",{className:"sidebar-divider"}),u.jsxs("div",{className:"sidebar-profile-section",onClick:()=>o("/profile"),children:[u.jsx("div",{className:"sidebar-profile-avatar",style:{background:(a==null?void 0:a.avatar_color)||"var(--accent)"},children:((v=a==null?void 0:a.username)==null?void 0:v[0])||((w=(x=e==null?void 0:e.email)==null?void 0:x[0])==null?void 0:w.toUpperCase())||"?"}),u.jsxs("div",{className:"sidebar-profile-info",children:[u.jsx("span",{className:"sidebar-profile-name",children:(a==null?void 0:a.username)||((S=e==null?void 0:e.email)==null?void 0:S.split("@")[0])||"User"}),u.jsxs("span",{className:"sidebar-profile-handle",children:["@",(a==null?void 0:a.username)||"user"]})]})]}),u.jsxs("button",{className:"sidebar-logout-btn",onClick:y,children:[u.jsx("span",{className:"sidebar-nav-icon",children:Ob.logout}),u.jsx("span",{className:"sidebar-nav-label",children:"Log Out"})]})]}),u.jsxs("div",{className:"app-main",children:[!g&&u.jsx("header",{className:"mobile-header",children:u.jsxs("div",{className:"mobile-header-left",onClick:()=>o("/home"),children:[u.jsx("span",{className:"mobile-header-logo",children:"F"}),u.jsx("span",{className:"mobile-header-title",children:d})]})}),u.jsx("main",{className:"app-content",children:u.jsx(nn,{mode:"wait",children:u.jsx(xe.div,{variants:KN,initial:"initial",animate:"animate",exit:"exit",children:t},c.pathname)})}),u.jsx(IN,{})]}),!g&&u.jsx(PN,{}),u.jsx(HN,{}),u.jsx("style",{children:`
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
      `})]})}function YN(){const t=It(),[e,a]=j.useState("Verifying your email...");return j.useEffect(()=>{(async()=>{const{data:c,error:d}=await te.auth.getSession();if(d){a("Authentication failed. Please try signing in again."),setTimeout(()=>t("/login"),3e3);return}c!=null&&c.session?t("/home"):a("Redirecting...")})();const{data:{subscription:o}}=te.auth.onAuthStateChange(c=>{(c==="SIGNED_IN"||c==="SIGNED_UP")&&t("/home")});return()=>o==null?void 0:o.unsubscribe()},[t]),u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"auth-callback-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.6)",fontSize:"0.9rem"},children:e}),u.jsx("style",{children:`
        .auth-callback-spinner {
          width: 32px; height: 32px;
          border: 2px solid rgba(255,255,255,0.06);
          border-top-color: #CCFF00;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `})]})}function WN(){const{isLoading:t}=mt();return t?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"app-loading-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .app-loading-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):u.jsx(zN,{children:u.jsx(jN,{children:u.jsxs(qS,{children:[u.jsx(Ct,{path:"/",element:u.jsx(kj,{})}),u.jsx(Ct,{path:"/about",element:u.jsx(_j,{})}),u.jsx(Ct,{path:"/login",element:u.jsx(OT,{})}),u.jsx(Ct,{path:"/auth/callback",element:u.jsx(YN,{})}),u.jsx(Ct,{path:"/chat",element:u.jsx(Mn,{children:u.jsx(zT,{})})}),u.jsx(Ct,{path:"/home",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(WR,{})})})}),u.jsx(Ct,{path:"/profile",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(xb,{})})})}),u.jsx(Ct,{path:"/profile/:id",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(xb,{})})})}),u.jsx(Ct,{path:"/communities",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(nN,{})})})}),u.jsx(Ct,{path:"/explore",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(dN,{})})})}),u.jsx(Ct,{path:"/notifications",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(fN,{})})})}),u.jsx(Ct,{path:"/settings",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(CN,{})})})}),u.jsx(Ct,{path:"/analytics",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(bN,{})})})}),u.jsx(Ct,{path:"/create",element:u.jsx(Mn,{children:u.jsx(li,{children:u.jsx(LN,{})})})})]})})})}mt.getState().initialize();I5.createRoot(document.getElementById("root")).render(u.jsx(Rs.StrictMode,{children:u.jsx(pj,{children:u.jsx(WN,{})})}));
