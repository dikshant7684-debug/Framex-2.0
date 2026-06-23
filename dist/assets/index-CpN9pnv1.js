(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=i(o);fetch(o.href,c)}})();function Db(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qd={exports:{}},Ss={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function D5(){if(Z0)return Ss;Z0=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,o,c){var d=null;if(c!==void 0&&(d=""+c),o.key!==void 0&&(d=""+o.key),"key"in o){c={};for(var h in o)h!=="key"&&(c[h]=o[h])}else c=o;return o=c.ref,{$$typeof:t,type:r,key:d,ref:o!==void 0?o:null,props:c}}return Ss.Fragment=e,Ss.jsx=i,Ss.jsxs=i,Ss}var ey;function M5(){return ey||(ey=1,qd.exports=D5()),qd.exports}var u=M5(),Fd={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ty;function L5(){if(ty)return xe;ty=1;var t=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),x=Symbol.iterator;function w(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,E={};function T(N,V,Q){this.props=N,this.context=V,this.refs=E,this.updater=Q||S}T.prototype.isReactComponent={},T.prototype.setState=function(N,V){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,V,"setState")},T.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function O(){}O.prototype=T.prototype;function R(N,V,Q){this.props=N,this.context=V,this.refs=E,this.updater=Q||S}var L=R.prototype=new O;L.constructor=R,_(L,T.prototype),L.isPureReactComponent=!0;var K=Array.isArray;function W(){}var F={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ee(N,V,Q){var ie=Q.ref;return{$$typeof:t,type:N,key:V,ref:ie!==void 0?ie:null,props:Q}}function re(N,V){return ee(N.type,V,N.props)}function me(N){return typeof N=="object"&&N!==null&&N.$$typeof===t}function fe(N){var V={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Q){return V[Q]})}var Oe=/\/+/g;function Ne(N,V){return typeof N=="object"&&N!==null&&N.key!=null?fe(""+N.key):V.toString(36)}function je(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(W,W):(N.status="pending",N.then(function(V){N.status==="pending"&&(N.status="fulfilled",N.value=V)},function(V){N.status==="pending"&&(N.status="rejected",N.reason=V)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function C(N,V,Q,ie,ce){var be=typeof N;(be==="undefined"||be==="boolean")&&(N=null);var J=!1;if(N===null)J=!0;else switch(be){case"bigint":case"string":case"number":J=!0;break;case"object":switch(N.$$typeof){case t:case e:J=!0;break;case y:return J=N._init,C(J(N._payload),V,Q,ie,ce)}}if(J)return ce=ce(N),J=ie===""?"."+Ne(N,0):ie,K(ce)?(Q="",J!=null&&(Q=J.replace(Oe,"$&/")+"/"),C(ce,V,Q,"",function(X){return X})):ce!=null&&(me(ce)&&(ce=re(ce,Q+(ce.key==null||N&&N.key===ce.key?"":(""+ce.key).replace(Oe,"$&/")+"/")+J)),V.push(ce)),1;J=0;var ye=ie===""?".":ie+":";if(K(N))for(var pe=0;pe<N.length;pe++)ie=N[pe],be=ye+Ne(ie,pe),J+=C(ie,V,Q,be,ce);else if(pe=w(N),typeof pe=="function")for(N=pe.call(N),pe=0;!(ie=N.next()).done;)ie=ie.value,be=ye+Ne(ie,pe++),J+=C(ie,V,Q,be,ce);else if(be==="object"){if(typeof N.then=="function")return C(je(N),V,Q,ie,ce);throw V=String(N),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return J}function I(N,V,Q){if(N==null)return N;var ie=[],ce=0;return C(N,ie,"","",function(be){return V.call(Q,be,ce++)}),ie}function Z(N){if(N._status===-1){var V=N._result;V=V(),V.then(function(Q){(N._status===0||N._status===-1)&&(N._status=1,N._result=Q)},function(Q){(N._status===0||N._status===-1)&&(N._status=2,N._result=Q)}),N._status===-1&&(N._status=0,N._result=V)}if(N._status===1)return N._result.default;throw N._result}var H=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},ae={map:I,forEach:function(N,V,Q){I(N,function(){V.apply(this,arguments)},Q)},count:function(N){var V=0;return I(N,function(){V++}),V},toArray:function(N){return I(N,function(V){return V})||[]},only:function(N){if(!me(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return xe.Activity=v,xe.Children=ae,xe.Component=T,xe.Fragment=i,xe.Profiler=o,xe.PureComponent=R,xe.StrictMode=r,xe.Suspense=p,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,xe.__COMPILER_RUNTIME={__proto__:null,c:function(N){return F.H.useMemoCache(N)}},xe.cache=function(N){return function(){return N.apply(null,arguments)}},xe.cacheSignal=function(){return null},xe.cloneElement=function(N,V,Q){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var ie=_({},N.props),ce=N.key;if(V!=null)for(be in V.key!==void 0&&(ce=""+V.key),V)!Y.call(V,be)||be==="key"||be==="__self"||be==="__source"||be==="ref"&&V.ref===void 0||(ie[be]=V[be]);var be=arguments.length-2;if(be===1)ie.children=Q;else if(1<be){for(var J=Array(be),ye=0;ye<be;ye++)J[ye]=arguments[ye+2];ie.children=J}return ee(N.type,ce,ie)},xe.createContext=function(N){return N={$$typeof:d,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:c,_context:N},N},xe.createElement=function(N,V,Q){var ie,ce={},be=null;if(V!=null)for(ie in V.key!==void 0&&(be=""+V.key),V)Y.call(V,ie)&&ie!=="key"&&ie!=="__self"&&ie!=="__source"&&(ce[ie]=V[ie]);var J=arguments.length-2;if(J===1)ce.children=Q;else if(1<J){for(var ye=Array(J),pe=0;pe<J;pe++)ye[pe]=arguments[pe+2];ce.children=ye}if(N&&N.defaultProps)for(ie in J=N.defaultProps,J)ce[ie]===void 0&&(ce[ie]=J[ie]);return ee(N,be,ce)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(N){return{$$typeof:h,render:N}},xe.isValidElement=me,xe.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:Z}},xe.memo=function(N,V){return{$$typeof:g,type:N,compare:V===void 0?null:V}},xe.startTransition=function(N){var V=F.T,Q={};F.T=Q;try{var ie=N(),ce=F.S;ce!==null&&ce(Q,ie),typeof ie=="object"&&ie!==null&&typeof ie.then=="function"&&ie.then(W,H)}catch(be){H(be)}finally{V!==null&&Q.types!==null&&(V.types=Q.types),F.T=V}},xe.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},xe.use=function(N){return F.H.use(N)},xe.useActionState=function(N,V,Q){return F.H.useActionState(N,V,Q)},xe.useCallback=function(N,V){return F.H.useCallback(N,V)},xe.useContext=function(N){return F.H.useContext(N)},xe.useDebugValue=function(){},xe.useDeferredValue=function(N,V){return F.H.useDeferredValue(N,V)},xe.useEffect=function(N,V){return F.H.useEffect(N,V)},xe.useEffectEvent=function(N){return F.H.useEffectEvent(N)},xe.useId=function(){return F.H.useId()},xe.useImperativeHandle=function(N,V,Q){return F.H.useImperativeHandle(N,V,Q)},xe.useInsertionEffect=function(N,V){return F.H.useInsertionEffect(N,V)},xe.useLayoutEffect=function(N,V){return F.H.useLayoutEffect(N,V)},xe.useMemo=function(N,V){return F.H.useMemo(N,V)},xe.useOptimistic=function(N,V){return F.H.useOptimistic(N,V)},xe.useReducer=function(N,V,Q){return F.H.useReducer(N,V,Q)},xe.useRef=function(N){return F.H.useRef(N)},xe.useState=function(N){return F.H.useState(N)},xe.useSyncExternalStore=function(N,V,Q){return F.H.useSyncExternalStore(N,V,Q)},xe.useTransition=function(){return F.H.useTransition()},xe.version="19.2.7",xe}var ny;function df(){return ny||(ny=1,Fd.exports=L5()),Fd.exports}var k=df();const As=Db(k);var Gd={exports:{}},js={},Kd={exports:{}},Yd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function z5(){return ay||(ay=1,(function(t){function e(C,I){var Z=C.length;C.push(I);e:for(;0<Z;){var H=Z-1>>>1,ae=C[H];if(0<o(ae,I))C[H]=I,C[Z]=ae,Z=H;else break e}}function i(C){return C.length===0?null:C[0]}function r(C){if(C.length===0)return null;var I=C[0],Z=C.pop();if(Z!==I){C[0]=Z;e:for(var H=0,ae=C.length,N=ae>>>1;H<N;){var V=2*(H+1)-1,Q=C[V],ie=V+1,ce=C[ie];if(0>o(Q,Z))ie<ae&&0>o(ce,Q)?(C[H]=ce,C[ie]=Z,H=ie):(C[H]=Q,C[V]=Z,H=V);else if(ie<ae&&0>o(ce,Z))C[H]=ce,C[ie]=Z,H=ie;else break e}}return I}function o(C,I){var Z=C.sortIndex-I.sortIndex;return Z!==0?Z:C.id-I.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;t.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();t.unstable_now=function(){return d.now()-h}}var p=[],g=[],y=1,v=null,x=3,w=!1,S=!1,_=!1,E=!1,T=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function L(C){for(var I=i(g);I!==null;){if(I.callback===null)r(g);else if(I.startTime<=C)r(g),I.sortIndex=I.expirationTime,e(p,I);else break;I=i(g)}}function K(C){if(_=!1,L(C),!S)if(i(p)!==null)S=!0,W||(W=!0,fe());else{var I=i(g);I!==null&&je(K,I.startTime-C)}}var W=!1,F=-1,Y=5,ee=-1;function re(){return E?!0:!(t.unstable_now()-ee<Y)}function me(){if(E=!1,W){var C=t.unstable_now();ee=C;var I=!0;try{e:{S=!1,_&&(_=!1,O(F),F=-1),w=!0;var Z=x;try{t:{for(L(C),v=i(p);v!==null&&!(v.expirationTime>C&&re());){var H=v.callback;if(typeof H=="function"){v.callback=null,x=v.priorityLevel;var ae=H(v.expirationTime<=C);if(C=t.unstable_now(),typeof ae=="function"){v.callback=ae,L(C),I=!0;break t}v===i(p)&&r(p),L(C)}else r(p);v=i(p)}if(v!==null)I=!0;else{var N=i(g);N!==null&&je(K,N.startTime-C),I=!1}}break e}finally{v=null,x=Z,w=!1}I=void 0}}finally{I?fe():W=!1}}}var fe;if(typeof R=="function")fe=function(){R(me)};else if(typeof MessageChannel<"u"){var Oe=new MessageChannel,Ne=Oe.port2;Oe.port1.onmessage=me,fe=function(){Ne.postMessage(null)}}else fe=function(){T(me,0)};function je(C,I){F=T(function(){C(t.unstable_now())},I)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(C){C.callback=null},t.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<C?Math.floor(1e3/C):5},t.unstable_getCurrentPriorityLevel=function(){return x},t.unstable_next=function(C){switch(x){case 1:case 2:case 3:var I=3;break;default:I=x}var Z=x;x=I;try{return C()}finally{x=Z}},t.unstable_requestPaint=function(){E=!0},t.unstable_runWithPriority=function(C,I){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var Z=x;x=C;try{return I()}finally{x=Z}},t.unstable_scheduleCallback=function(C,I,Z){var H=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?H+Z:H):Z=H,C){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=Z+ae,C={id:y++,callback:I,priorityLevel:C,startTime:Z,expirationTime:ae,sortIndex:-1},Z>H?(C.sortIndex=Z,e(g,C),i(p)===null&&C===i(g)&&(_?(O(F),F=-1):_=!0,je(K,Z-H))):(C.sortIndex=ae,e(p,C),S||w||(S=!0,W||(W=!0,fe()))),C},t.unstable_shouldYield=re,t.unstable_wrapCallback=function(C){var I=x;return function(){var Z=x;x=I;try{return C.apply(this,arguments)}finally{x=Z}}}})(Yd)),Yd}var iy;function U5(){return iy||(iy=1,Kd.exports=z5()),Kd.exports}var Xd={exports:{}},kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function B5(){if(ry)return kt;ry=1;var t=df();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},o=Symbol.for("react.portal");function c(p,g,y){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:v==null?null:""+v,children:p,containerInfo:g,implementation:y}}var d=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,kt.createPortal=function(p,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return c(p,g,null,y)},kt.flushSync=function(p){var g=d.T,y=r.p;try{if(d.T=null,r.p=2,p)return p()}finally{d.T=g,r.p=y,r.d.f()}},kt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(p,g))},kt.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},kt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin),x=typeof g.integrity=="string"?g.integrity:void 0,w=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?r.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:v,integrity:x,fetchPriority:w}):y==="script"&&r.d.X(p,{crossOrigin:v,integrity:x,fetchPriority:w,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},kt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=h(g.as,g.crossOrigin);r.d.M(p,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&r.d.M(p)},kt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,v=h(y,g.crossOrigin);r.d.L(p,y,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},kt.preloadModule=function(p,g){if(typeof p=="string")if(g){var y=h(g.as,g.crossOrigin);r.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else r.d.m(p)},kt.requestFormReset=function(p){r.d.r(p)},kt.unstable_batchedUpdates=function(p,g){return p(g)},kt.useFormState=function(p,g,y){return d.H.useFormState(p,g,y)},kt.useFormStatus=function(){return d.H.useHostTransitionStatus()},kt.version="19.2.7",kt}var sy;function P5(){if(sy)return Xd.exports;sy=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Xd.exports=B5(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function V5(){if(oy)return js;oy=1;var t=U5(),e=df(),i=P5();function r(n){var a="https://react.dev/errors/"+n;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)a+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+n+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function c(n){var a=n,s=n;if(n.alternate)for(;a.return;)a=a.return;else{n=a;do a=n,(a.flags&4098)!==0&&(s=a.return),n=a.return;while(n)}return a.tag===3?s:null}function d(n){if(n.tag===13){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function h(n){if(n.tag===31){var a=n.memoizedState;if(a===null&&(n=n.alternate,n!==null&&(a=n.memoizedState)),a!==null)return a.dehydrated}return null}function p(n){if(c(n)!==n)throw Error(r(188))}function g(n){var a=n.alternate;if(!a){if(a=c(n),a===null)throw Error(r(188));return a!==n?null:n}for(var s=n,l=a;;){var f=s.return;if(f===null)break;var m=f.alternate;if(m===null){if(l=f.return,l!==null){s=l;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===s)return p(f),n;if(m===l)return p(f),a;m=m.sibling}throw Error(r(188))}if(s.return!==l.return)s=f,l=m;else{for(var b=!1,j=f.child;j;){if(j===s){b=!0,s=f,l=m;break}if(j===l){b=!0,l=f,s=m;break}j=j.sibling}if(!b){for(j=m.child;j;){if(j===s){b=!0,s=m,l=f;break}if(j===l){b=!0,l=m,s=f;break}j=j.sibling}if(!b)throw Error(r(189))}}if(s.alternate!==l)throw Error(r(190))}if(s.tag!==3)throw Error(r(188));return s.stateNode.current===s?n:a}function y(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n;for(n=n.child;n!==null;){if(a=y(n),a!==null)return a;n=n.sibling}return null}var v=Object.assign,x=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),S=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),E=Symbol.for("react.strict_mode"),T=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),R=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),K=Symbol.for("react.suspense"),W=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),re=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function fe(n){return n===null||typeof n!="object"?null:(n=me&&n[me]||n["@@iterator"],typeof n=="function"?n:null)}var Oe=Symbol.for("react.client.reference");function Ne(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===Oe?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case _:return"Fragment";case T:return"Profiler";case E:return"StrictMode";case K:return"Suspense";case W:return"SuspenseList";case ee:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case S:return"Portal";case R:return n.displayName||"Context";case O:return(n._context.displayName||"Context")+".Consumer";case L:var a=n.render;return n=n.displayName,n||(n=a.displayName||a.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case F:return a=n.displayName||null,a!==null?a:Ne(n.type)||"Memo";case Y:a=n._payload,n=n._init;try{return Ne(n(a))}catch{}}return null}var je=Array.isArray,C=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Z={pending:!1,data:null,method:null,action:null},H=[],ae=-1;function N(n){return{current:n}}function V(n){0>ae||(n.current=H[ae],H[ae]=null,ae--)}function Q(n,a){ae++,H[ae]=n.current,n.current=a}var ie=N(null),ce=N(null),be=N(null),J=N(null);function ye(n,a){switch(Q(be,a),Q(ce,n),Q(ie,null),a.nodeType){case 9:case 11:n=(n=a.documentElement)&&(n=n.namespaceURI)?S0(n):0;break;default:if(n=a.tagName,a=a.namespaceURI)a=S0(a),n=j0(a,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}V(ie),Q(ie,n)}function pe(){V(ie),V(ce),V(be)}function X(n){n.memoizedState!==null&&Q(J,n);var a=ie.current,s=j0(a,n.type);a!==s&&(Q(ce,n),Q(ie,s))}function te(n){ce.current===n&&(V(ie),V(ce)),J.current===n&&(V(J),vs._currentValue=Z)}var _e,De;function Me(n){if(_e===void 0)try{throw Error()}catch(s){var a=s.stack.trim().match(/\n( *(at )?)/);_e=a&&a[1]||"",De=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+_e+n+De}var jt=!1;function An(n,a){if(!n||jt)return"";jt=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var G=function(){throw Error()};if(Object.defineProperty(G.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(G,[])}catch(P){var B=P}Reflect.construct(n,[],G)}else{try{G.call()}catch(P){B=P}n.call(G.prototype)}}else{try{throw Error()}catch(P){B=P}(G=n())&&typeof G.catch=="function"&&G.catch(function(){})}}catch(P){if(P&&B&&typeof P.stack=="string")return[P.stack,B.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=l.DetermineComponentFrameRoot(),b=m[0],j=m[1];if(b&&j){var A=b.split(`
`),U=j.split(`
`);for(f=l=0;l<A.length&&!A[l].includes("DetermineComponentFrameRoot");)l++;for(;f<U.length&&!U[f].includes("DetermineComponentFrameRoot");)f++;if(l===A.length||f===U.length)for(l=A.length-1,f=U.length-1;1<=l&&0<=f&&A[l]!==U[f];)f--;for(;1<=l&&0<=f;l--,f--)if(A[l]!==U[f]){if(l!==1||f!==1)do if(l--,f--,0>f||A[l]!==U[f]){var $=`
`+A[l].replace(" at new "," at ");return n.displayName&&$.includes("<anonymous>")&&($=$.replace("<anonymous>",n.displayName)),$}while(1<=l&&0<=f);break}}}finally{jt=!1,Error.prepareStackTrace=s}return(s=n?n.displayName||n.name:"")?Me(s):""}function uw(n,a){switch(n.tag){case 26:case 27:case 5:return Me(n.type);case 16:return Me("Lazy");case 13:return n.child!==a&&a!==null?Me("Suspense Fallback"):Me("Suspense");case 19:return Me("SuspenseList");case 0:case 15:return An(n.type,!1);case 11:return An(n.type.render,!1);case 1:return An(n.type,!0);case 31:return Me("Activity");default:return""}}function Zf(n){try{var a="",s=null;do a+=uw(n,s),s=n,n=n.return;while(n);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ac=Object.prototype.hasOwnProperty,Nc=t.unstable_scheduleCallback,Rc=t.unstable_cancelCallback,dw=t.unstable_shouldYield,hw=t.unstable_requestPaint,Ht=t.unstable_now,fw=t.unstable_getCurrentPriorityLevel,ep=t.unstable_ImmediatePriority,tp=t.unstable_UserBlockingPriority,so=t.unstable_NormalPriority,pw=t.unstable_LowPriority,np=t.unstable_IdlePriority,mw=t.log,gw=t.unstable_setDisableYieldValue,Nr=null,$t=null;function fa(n){if(typeof mw=="function"&&gw(n),$t&&typeof $t.setStrictMode=="function")try{$t.setStrictMode(Nr,n)}catch{}}var It=Math.clz32?Math.clz32:bw,yw=Math.log,vw=Math.LN2;function bw(n){return n>>>=0,n===0?32:31-(yw(n)/vw|0)|0}var oo=256,lo=262144,co=4194304;function Ga(n){var a=n&42;if(a!==0)return a;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function uo(n,a,s){var l=n.pendingLanes;if(l===0)return 0;var f=0,m=n.suspendedLanes,b=n.pingedLanes;n=n.warmLanes;var j=l&134217727;return j!==0?(l=j&~m,l!==0?f=Ga(l):(b&=j,b!==0?f=Ga(b):s||(s=j&~n,s!==0&&(f=Ga(s))))):(j=l&~m,j!==0?f=Ga(j):b!==0?f=Ga(b):s||(s=l&~n,s!==0&&(f=Ga(s)))),f===0?0:a!==0&&a!==f&&(a&m)===0&&(m=f&-f,s=a&-a,m>=s||m===32&&(s&4194048)!==0)?a:f}function Rr(n,a){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&a)===0}function xw(n,a){switch(n){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ap(){var n=co;return co<<=1,(co&62914560)===0&&(co=4194304),n}function Oc(n){for(var a=[],s=0;31>s;s++)a.push(n);return a}function Or(n,a){n.pendingLanes|=a,a!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function ww(n,a,s,l,f,m){var b=n.pendingLanes;n.pendingLanes=s,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=s,n.entangledLanes&=s,n.errorRecoveryDisabledLanes&=s,n.shellSuspendCounter=0;var j=n.entanglements,A=n.expirationTimes,U=n.hiddenUpdates;for(s=b&~s;0<s;){var $=31-It(s),G=1<<$;j[$]=0,A[$]=-1;var B=U[$];if(B!==null)for(U[$]=null,$=0;$<B.length;$++){var P=B[$];P!==null&&(P.lane&=-536870913)}s&=~G}l!==0&&ip(n,l,0),m!==0&&f===0&&n.tag!==0&&(n.suspendedLanes|=m&~(b&~a))}function ip(n,a,s){n.pendingLanes|=a,n.suspendedLanes&=~a;var l=31-It(a);n.entangledLanes|=a,n.entanglements[l]=n.entanglements[l]|1073741824|s&261930}function rp(n,a){var s=n.entangledLanes|=a;for(n=n.entanglements;s;){var l=31-It(s),f=1<<l;f&a|n[l]&a&&(n[l]|=a),s&=~f}}function sp(n,a){var s=a&-a;return s=(s&42)!==0?1:Dc(s),(s&(n.suspendedLanes|a))!==0?0:s}function Dc(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function Mc(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function op(){var n=I.p;return n!==0?n:(n=window.event,n===void 0?32:G0(n.type))}function lp(n,a){var s=I.p;try{return I.p=n,a()}finally{I.p=s}}var pa=Math.random().toString(36).slice(2),gt="__reactFiber$"+pa,Rt="__reactProps$"+pa,ji="__reactContainer$"+pa,Lc="__reactEvents$"+pa,Sw="__reactListeners$"+pa,jw="__reactHandles$"+pa,cp="__reactResources$"+pa,Dr="__reactMarker$"+pa;function zc(n){delete n[gt],delete n[Rt],delete n[Lc],delete n[Sw],delete n[jw]}function ki(n){var a=n[gt];if(a)return a;for(var s=n.parentNode;s;){if(a=s[ji]||s[gt]){if(s=a.alternate,a.child!==null||s!==null&&s.child!==null)for(n=N0(n);n!==null;){if(s=n[gt])return s;n=N0(n)}return a}n=s,s=n.parentNode}return null}function _i(n){if(n=n[gt]||n[ji]){var a=n.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return n}return null}function Mr(n){var a=n.tag;if(a===5||a===26||a===27||a===6)return n.stateNode;throw Error(r(33))}function Ti(n){var a=n[cp];return a||(a=n[cp]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function ft(n){n[Dr]=!0}var up=new Set,dp={};function Ka(n,a){Ei(n,a),Ei(n+"Capture",a)}function Ei(n,a){for(dp[n]=a,n=0;n<a.length;n++)up.add(a[n])}var kw=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),hp={},fp={};function _w(n){return Ac.call(fp,n)?!0:Ac.call(hp,n)?!1:kw.test(n)?fp[n]=!0:(hp[n]=!0,!1)}function ho(n,a,s){if(_w(a))if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":n.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){n.removeAttribute(a);return}}n.setAttribute(a,""+s)}}function fo(n,a,s){if(s===null)n.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(a);return}n.setAttribute(a,""+s)}}function $n(n,a,s,l){if(l===null)n.removeAttribute(s);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttributeNS(a,s,""+l)}}function en(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function pp(n){var a=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Tw(n,a,s){var l=Object.getOwnPropertyDescriptor(n.constructor.prototype,a);if(!n.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,m=l.set;return Object.defineProperty(n,a,{configurable:!0,get:function(){return f.call(this)},set:function(b){s=""+b,m.call(this,b)}}),Object.defineProperty(n,a,{enumerable:l.enumerable}),{getValue:function(){return s},setValue:function(b){s=""+b},stopTracking:function(){n._valueTracker=null,delete n[a]}}}}function Uc(n){if(!n._valueTracker){var a=pp(n)?"checked":"value";n._valueTracker=Tw(n,a,""+n[a])}}function mp(n){if(!n)return!1;var a=n._valueTracker;if(!a)return!0;var s=a.getValue(),l="";return n&&(l=pp(n)?n.checked?"true":"false":n.value),n=l,n!==s?(a.setValue(n),!0):!1}function po(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var Ew=/[\n"\\]/g;function tn(n){return n.replace(Ew,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Bc(n,a,s,l,f,m,b,j){n.name="",b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?n.type=b:n.removeAttribute("type"),a!=null?b==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+en(a)):n.value!==""+en(a)&&(n.value=""+en(a)):b!=="submit"&&b!=="reset"||n.removeAttribute("value"),a!=null?Pc(n,b,en(a)):s!=null?Pc(n,b,en(s)):l!=null&&n.removeAttribute("value"),f==null&&m!=null&&(n.defaultChecked=!!m),f!=null&&(n.checked=f&&typeof f!="function"&&typeof f!="symbol"),j!=null&&typeof j!="function"&&typeof j!="symbol"&&typeof j!="boolean"?n.name=""+en(j):n.removeAttribute("name")}function gp(n,a,s,l,f,m,b,j){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),a!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||a!=null)){Uc(n);return}s=s!=null?""+en(s):"",a=a!=null?""+en(a):s,j||a===n.value||(n.value=a),n.defaultValue=a}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,n.checked=j?n.checked:!!l,n.defaultChecked=!!l,b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"&&(n.name=b),Uc(n)}function Pc(n,a,s){a==="number"&&po(n.ownerDocument)===n||n.defaultValue===""+s||(n.defaultValue=""+s)}function Ci(n,a,s,l){if(n=n.options,a){a={};for(var f=0;f<s.length;f++)a["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=a.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&l&&(n[s].defaultSelected=!0)}else{for(s=""+en(s),a=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,l&&(n[f].defaultSelected=!0);return}a!==null||n[f].disabled||(a=n[f])}a!==null&&(a.selected=!0)}}function yp(n,a,s){if(a!=null&&(a=""+en(a),a!==n.value&&(n.value=a),s==null)){n.defaultValue!==a&&(n.defaultValue=a);return}n.defaultValue=s!=null?""+en(s):""}function vp(n,a,s,l){if(a==null){if(l!=null){if(s!=null)throw Error(r(92));if(je(l)){if(1<l.length)throw Error(r(93));l=l[0]}s=l}s==null&&(s=""),a=s}s=en(a),n.defaultValue=s,l=n.textContent,l===s&&l!==""&&l!==null&&(n.value=l),Uc(n)}function Ai(n,a){if(a){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=a;return}}n.textContent=a}var Cw=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bp(n,a,s){var l=a.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?l?n.setProperty(a,""):a==="float"?n.cssFloat="":n[a]="":l?n.setProperty(a,s):typeof s!="number"||s===0||Cw.has(a)?a==="float"?n.cssFloat=s:n[a]=(""+s).trim():n[a]=s+"px"}function xp(n,a,s){if(a!=null&&typeof a!="object")throw Error(r(62));if(n=n.style,s!=null){for(var l in s)!s.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?n.setProperty(l,""):l==="float"?n.cssFloat="":n[l]="");for(var f in a)l=a[f],a.hasOwnProperty(f)&&s[f]!==l&&bp(n,f,l)}else for(var m in a)a.hasOwnProperty(m)&&bp(n,m,a[m])}function Vc(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Aw=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Nw=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function mo(n){return Nw.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function In(){}var Hc=null;function $c(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ni=null,Ri=null;function wp(n){var a=_i(n);if(a&&(n=a.stateNode)){var s=n[Rt]||null;e:switch(n=a.stateNode,a.type){case"input":if(Bc(n,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),a=s.name,s.type==="radio"&&a!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+tn(""+a)+'"][type="radio"]'),a=0;a<s.length;a++){var l=s[a];if(l!==n&&l.form===n.form){var f=l[Rt]||null;if(!f)throw Error(r(90));Bc(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(a=0;a<s.length;a++)l=s[a],l.form===n.form&&mp(l)}break e;case"textarea":yp(n,s.value,s.defaultValue);break e;case"select":a=s.value,a!=null&&Ci(n,!!s.multiple,a,!1)}}}var Ic=!1;function Sp(n,a,s){if(Ic)return n(a,s);Ic=!0;try{var l=n(a);return l}finally{if(Ic=!1,(Ni!==null||Ri!==null)&&(nl(),Ni&&(a=Ni,n=Ri,Ri=Ni=null,wp(a),n)))for(a=0;a<n.length;a++)wp(n[a])}}function Lr(n,a){var s=n.stateNode;if(s===null)return null;var l=s[Rt]||null;if(l===null)return null;s=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(n=n.type,l=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!l;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(r(231,a,typeof s));return s}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qc=!1;if(qn)try{var zr={};Object.defineProperty(zr,"passive",{get:function(){qc=!0}}),window.addEventListener("test",zr,zr),window.removeEventListener("test",zr,zr)}catch{qc=!1}var ma=null,Fc=null,go=null;function jp(){if(go)return go;var n,a=Fc,s=a.length,l,f="value"in ma?ma.value:ma.textContent,m=f.length;for(n=0;n<s&&a[n]===f[n];n++);var b=s-n;for(l=1;l<=b&&a[s-l]===f[m-l];l++);return go=f.slice(n,1<l?1-l:void 0)}function yo(n){var a=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&a===13&&(n=13)):n=a,n===10&&(n=13),32<=n||n===13?n:0}function vo(){return!0}function kp(){return!1}function Ot(n){function a(s,l,f,m,b){this._reactName=s,this._targetInst=f,this.type=l,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var j in n)n.hasOwnProperty(j)&&(s=n[j],this[j]=s?s(m):m[j]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?vo:kp,this.isPropagationStopped=kp,this}return v(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=vo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=vo)},persist:function(){},isPersistent:vo}),a}var Ya={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},bo=Ot(Ya),Ur=v({},Ya,{view:0,detail:0}),Rw=Ot(Ur),Gc,Kc,Br,xo=v({},Ur,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Br&&(Br&&n.type==="mousemove"?(Gc=n.screenX-Br.screenX,Kc=n.screenY-Br.screenY):Kc=Gc=0,Br=n),Gc)},movementY:function(n){return"movementY"in n?n.movementY:Kc}}),_p=Ot(xo),Ow=v({},xo,{dataTransfer:0}),Dw=Ot(Ow),Mw=v({},Ur,{relatedTarget:0}),Yc=Ot(Mw),Lw=v({},Ya,{animationName:0,elapsedTime:0,pseudoElement:0}),zw=Ot(Lw),Uw=v({},Ya,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Bw=Ot(Uw),Pw=v({},Ya,{data:0}),Tp=Ot(Pw),Vw={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Hw={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$w={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Iw(n){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(n):(n=$w[n])?!!a[n]:!1}function Xc(){return Iw}var qw=v({},Ur,{key:function(n){if(n.key){var a=Vw[n.key]||n.key;if(a!=="Unidentified")return a}return n.type==="keypress"?(n=yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Hw[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(n){return n.type==="keypress"?yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Fw=Ot(qw),Gw=v({},xo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ep=Ot(Gw),Kw=v({},Ur,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),Yw=Ot(Kw),Xw=v({},Ya,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ww=Ot(Xw),Jw=v({},xo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Qw=Ot(Jw),Zw=v({},Ya,{newState:0,oldState:0}),e2=Ot(Zw),t2=[9,13,27,32],Wc=qn&&"CompositionEvent"in window,Pr=null;qn&&"documentMode"in document&&(Pr=document.documentMode);var n2=qn&&"TextEvent"in window&&!Pr,Cp=qn&&(!Wc||Pr&&8<Pr&&11>=Pr),Ap=" ",Np=!1;function Rp(n,a){switch(n){case"keyup":return t2.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Op(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Oi=!1;function a2(n,a){switch(n){case"compositionend":return Op(a);case"keypress":return a.which!==32?null:(Np=!0,Ap);case"textInput":return n=a.data,n===Ap&&Np?null:n;default:return null}}function i2(n,a){if(Oi)return n==="compositionend"||!Wc&&Rp(n,a)?(n=jp(),go=Fc=ma=null,Oi=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Cp&&a.locale!=="ko"?null:a.data;default:return null}}var r2={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a==="input"?!!r2[n.type]:a==="textarea"}function Mp(n,a,s,l){Ni?Ri?Ri.push(l):Ri=[l]:Ni=l,a=cl(a,"onChange"),0<a.length&&(s=new bo("onChange","change",null,s,l),n.push({event:s,listeners:a}))}var Vr=null,Hr=null;function s2(n){g0(n,0)}function wo(n){var a=Mr(n);if(mp(a))return n}function Lp(n,a){if(n==="change")return a}var zp=!1;if(qn){var Jc;if(qn){var Qc="oninput"in document;if(!Qc){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Qc=typeof Up.oninput=="function"}Jc=Qc}else Jc=!1;zp=Jc&&(!document.documentMode||9<document.documentMode)}function Bp(){Vr&&(Vr.detachEvent("onpropertychange",Pp),Hr=Vr=null)}function Pp(n){if(n.propertyName==="value"&&wo(Hr)){var a=[];Mp(a,Hr,n,$c(n)),Sp(s2,a)}}function o2(n,a,s){n==="focusin"?(Bp(),Vr=a,Hr=s,Vr.attachEvent("onpropertychange",Pp)):n==="focusout"&&Bp()}function l2(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return wo(Hr)}function c2(n,a){if(n==="click")return wo(a)}function u2(n,a){if(n==="input"||n==="change")return wo(a)}function d2(n,a){return n===a&&(n!==0||1/n===1/a)||n!==n&&a!==a}var qt=typeof Object.is=="function"?Object.is:d2;function $r(n,a){if(qt(n,a))return!0;if(typeof n!="object"||n===null||typeof a!="object"||a===null)return!1;var s=Object.keys(n),l=Object.keys(a);if(s.length!==l.length)return!1;for(l=0;l<s.length;l++){var f=s[l];if(!Ac.call(a,f)||!qt(n[f],a[f]))return!1}return!0}function Vp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Hp(n,a){var s=Vp(n);n=0;for(var l;s;){if(s.nodeType===3){if(l=n+s.textContent.length,n<=a&&l>=a)return{node:s,offset:a-n};n=l}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Vp(s)}}function $p(n,a){return n&&a?n===a?!0:n&&n.nodeType===3?!1:a&&a.nodeType===3?$p(n,a.parentNode):"contains"in n?n.contains(a):n.compareDocumentPosition?!!(n.compareDocumentPosition(a)&16):!1:!1}function Ip(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var a=po(n.document);a instanceof n.HTMLIFrameElement;){try{var s=typeof a.contentWindow.location.href=="string"}catch{s=!1}if(s)n=a.contentWindow;else break;a=po(n.document)}return a}function Zc(n){var a=n&&n.nodeName&&n.nodeName.toLowerCase();return a&&(a==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||a==="textarea"||n.contentEditable==="true")}var h2=qn&&"documentMode"in document&&11>=document.documentMode,Di=null,eu=null,Ir=null,tu=!1;function qp(n,a,s){var l=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;tu||Di==null||Di!==po(l)||(l=Di,"selectionStart"in l&&Zc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Ir&&$r(Ir,l)||(Ir=l,l=cl(eu,"onSelect"),0<l.length&&(a=new bo("onSelect","select",null,a,s),n.push({event:a,listeners:l}),a.target=Di)))}function Xa(n,a){var s={};return s[n.toLowerCase()]=a.toLowerCase(),s["Webkit"+n]="webkit"+a,s["Moz"+n]="moz"+a,s}var Mi={animationend:Xa("Animation","AnimationEnd"),animationiteration:Xa("Animation","AnimationIteration"),animationstart:Xa("Animation","AnimationStart"),transitionrun:Xa("Transition","TransitionRun"),transitionstart:Xa("Transition","TransitionStart"),transitioncancel:Xa("Transition","TransitionCancel"),transitionend:Xa("Transition","TransitionEnd")},nu={},Fp={};qn&&(Fp=document.createElement("div").style,"AnimationEvent"in window||(delete Mi.animationend.animation,delete Mi.animationiteration.animation,delete Mi.animationstart.animation),"TransitionEvent"in window||delete Mi.transitionend.transition);function Wa(n){if(nu[n])return nu[n];if(!Mi[n])return n;var a=Mi[n],s;for(s in a)if(a.hasOwnProperty(s)&&s in Fp)return nu[n]=a[s];return n}var Gp=Wa("animationend"),Kp=Wa("animationiteration"),Yp=Wa("animationstart"),f2=Wa("transitionrun"),p2=Wa("transitionstart"),m2=Wa("transitioncancel"),Xp=Wa("transitionend"),Wp=new Map,au="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");au.push("scrollEnd");function gn(n,a){Wp.set(n,a),Ka(a,[n])}var So=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},nn=[],Li=0,iu=0;function jo(){for(var n=Li,a=iu=Li=0;a<n;){var s=nn[a];nn[a++]=null;var l=nn[a];nn[a++]=null;var f=nn[a];nn[a++]=null;var m=nn[a];if(nn[a++]=null,l!==null&&f!==null){var b=l.pending;b===null?f.next=f:(f.next=b.next,b.next=f),l.pending=f}m!==0&&Jp(s,f,m)}}function ko(n,a,s,l){nn[Li++]=n,nn[Li++]=a,nn[Li++]=s,nn[Li++]=l,iu|=l,n.lanes|=l,n=n.alternate,n!==null&&(n.lanes|=l)}function ru(n,a,s,l){return ko(n,a,s,l),_o(n)}function Ja(n,a){return ko(n,null,null,a),_o(n)}function Jp(n,a,s){n.lanes|=s;var l=n.alternate;l!==null&&(l.lanes|=s);for(var f=!1,m=n.return;m!==null;)m.childLanes|=s,l=m.alternate,l!==null&&(l.childLanes|=s),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(f=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,f&&a!==null&&(f=31-It(s),n=m.hiddenUpdates,l=n[f],l===null?n[f]=[a]:l.push(a),a.lane=s|536870912),m):null}function _o(n){if(50<ds)throw ds=0,pd=null,Error(r(185));for(var a=n.return;a!==null;)n=a,a=n.return;return n.tag===3?n.stateNode:null}var zi={};function g2(n,a,s,l){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(n,a,s,l){return new g2(n,a,s,l)}function su(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Fn(n,a){var s=n.alternate;return s===null?(s=Ft(n.tag,a,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=a,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&65011712,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,a=n.dependencies,s.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s.refCleanup=n.refCleanup,s}function Qp(n,a){n.flags&=65011714;var s=n.alternate;return s===null?(n.childLanes=0,n.lanes=a,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=s.childLanes,n.lanes=s.lanes,n.child=s.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=s.memoizedProps,n.memoizedState=s.memoizedState,n.updateQueue=s.updateQueue,n.type=s.type,a=s.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),n}function To(n,a,s,l,f,m){var b=0;if(l=n,typeof n=="function")su(n)&&(b=1);else if(typeof n=="string")b=w5(n,s,ie.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case ee:return n=Ft(31,s,a,f),n.elementType=ee,n.lanes=m,n;case _:return Qa(s.children,f,m,a);case E:b=8,f|=24;break;case T:return n=Ft(12,s,a,f|2),n.elementType=T,n.lanes=m,n;case K:return n=Ft(13,s,a,f),n.elementType=K,n.lanes=m,n;case W:return n=Ft(19,s,a,f),n.elementType=W,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:b=10;break e;case O:b=9;break e;case L:b=11;break e;case F:b=14;break e;case Y:b=16,l=null;break e}b=29,s=Error(r(130,n===null?"null":typeof n,"")),l=null}return a=Ft(b,s,a,f),a.elementType=n,a.type=l,a.lanes=m,a}function Qa(n,a,s,l){return n=Ft(7,n,l,a),n.lanes=s,n}function ou(n,a,s){return n=Ft(6,n,null,a),n.lanes=s,n}function Zp(n){var a=Ft(18,null,null,0);return a.stateNode=n,a}function lu(n,a,s){return a=Ft(4,n.children!==null?n.children:[],n.key,a),a.lanes=s,a.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},a}var em=new WeakMap;function an(n,a){if(typeof n=="object"&&n!==null){var s=em.get(n);return s!==void 0?s:(a={value:n,source:a,stack:Zf(a)},em.set(n,a),a)}return{value:n,source:a,stack:Zf(a)}}var Ui=[],Bi=0,Eo=null,qr=0,rn=[],sn=0,ga=null,Nn=1,Rn="";function Gn(n,a){Ui[Bi++]=qr,Ui[Bi++]=Eo,Eo=n,qr=a}function tm(n,a,s){rn[sn++]=Nn,rn[sn++]=Rn,rn[sn++]=ga,ga=n;var l=Nn;n=Rn;var f=32-It(l)-1;l&=~(1<<f),s+=1;var m=32-It(a)+f;if(30<m){var b=f-f%5;m=(l&(1<<b)-1).toString(32),l>>=b,f-=b,Nn=1<<32-It(a)+f|s<<f|l,Rn=m+n}else Nn=1<<m|s<<f|l,Rn=n}function cu(n){n.return!==null&&(Gn(n,1),tm(n,1,0))}function uu(n){for(;n===Eo;)Eo=Ui[--Bi],Ui[Bi]=null,qr=Ui[--Bi],Ui[Bi]=null;for(;n===ga;)ga=rn[--sn],rn[sn]=null,Rn=rn[--sn],rn[sn]=null,Nn=rn[--sn],rn[sn]=null}function nm(n,a){rn[sn++]=Nn,rn[sn++]=Rn,rn[sn++]=ga,Nn=a.id,Rn=a.overflow,ga=n}var yt=null,Ke=null,Re=!1,ya=null,on=!1,du=Error(r(519));function va(n){var a=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fr(an(a,n)),du}function am(n){var a=n.stateNode,s=n.type,l=n.memoizedProps;switch(a[gt]=n,a[Rt]=l,s){case"dialog":Ee("cancel",a),Ee("close",a);break;case"iframe":case"object":case"embed":Ee("load",a);break;case"video":case"audio":for(s=0;s<fs.length;s++)Ee(fs[s],a);break;case"source":Ee("error",a);break;case"img":case"image":case"link":Ee("error",a),Ee("load",a);break;case"details":Ee("toggle",a);break;case"input":Ee("invalid",a),gp(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ee("invalid",a);break;case"textarea":Ee("invalid",a),vp(a,l.value,l.defaultValue,l.children)}s=l.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||a.textContent===""+s||l.suppressHydrationWarning===!0||x0(a.textContent,s)?(l.popover!=null&&(Ee("beforetoggle",a),Ee("toggle",a)),l.onScroll!=null&&Ee("scroll",a),l.onScrollEnd!=null&&Ee("scrollend",a),l.onClick!=null&&(a.onclick=In),a=!0):a=!1,a||va(n,!0)}function im(n){for(yt=n.return;yt;)switch(yt.tag){case 5:case 31:case 13:on=!1;return;case 27:case 3:on=!0;return;default:yt=yt.return}}function Pi(n){if(n!==yt)return!1;if(!Re)return im(n),Re=!0,!1;var a=n.tag,s;if((s=a!==3&&a!==27)&&((s=a===5)&&(s=n.type,s=!(s!=="form"&&s!=="button")||Ad(n.type,n.memoizedProps)),s=!s),s&&Ke&&va(n),im(n),a===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Ke=A0(n)}else if(a===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(317));Ke=A0(n)}else a===27?(a=Ke,Oa(n.type)?(n=Md,Md=null,Ke=n):Ke=a):Ke=yt?cn(n.stateNode.nextSibling):null;return!0}function Za(){Ke=yt=null,Re=!1}function hu(){var n=ya;return n!==null&&(zt===null?zt=n:zt.push.apply(zt,n),ya=null),n}function Fr(n){ya===null?ya=[n]:ya.push(n)}var fu=N(null),ei=null,Kn=null;function ba(n,a,s){Q(fu,a._currentValue),a._currentValue=s}function Yn(n){n._currentValue=fu.current,V(fu)}function pu(n,a,s){for(;n!==null;){var l=n.alternate;if((n.childLanes&a)!==a?(n.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),n===s)break;n=n.return}}function mu(n,a,s,l){var f=n.child;for(f!==null&&(f.return=n);f!==null;){var m=f.dependencies;if(m!==null){var b=f.child;m=m.firstContext;e:for(;m!==null;){var j=m;m=f;for(var A=0;A<a.length;A++)if(j.context===a[A]){m.lanes|=s,j=m.alternate,j!==null&&(j.lanes|=s),pu(m.return,s,n),l||(b=null);break e}m=j.next}}else if(f.tag===18){if(b=f.return,b===null)throw Error(r(341));b.lanes|=s,m=b.alternate,m!==null&&(m.lanes|=s),pu(b,s,n),b=null}else b=f.child;if(b!==null)b.return=f;else for(b=f;b!==null;){if(b===n){b=null;break}if(f=b.sibling,f!==null){f.return=b.return,b=f;break}b=b.return}f=b}}function Vi(n,a,s,l){n=null;for(var f=a,m=!1;f!==null;){if(!m){if((f.flags&524288)!==0)m=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var b=f.alternate;if(b===null)throw Error(r(387));if(b=b.memoizedProps,b!==null){var j=f.type;qt(f.pendingProps.value,b.value)||(n!==null?n.push(j):n=[j])}}else if(f===J.current){if(b=f.alternate,b===null)throw Error(r(387));b.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(n!==null?n.push(vs):n=[vs])}f=f.return}n!==null&&mu(a,n,s,l),a.flags|=262144}function Co(n){for(n=n.firstContext;n!==null;){if(!qt(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function ti(n){ei=n,Kn=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function vt(n){return rm(ei,n)}function Ao(n,a){return ei===null&&ti(n),rm(n,a)}function rm(n,a){var s=a._currentValue;if(a={context:a,memoizedValue:s,next:null},Kn===null){if(n===null)throw Error(r(308));Kn=a,n.dependencies={lanes:0,firstContext:a},n.flags|=524288}else Kn=Kn.next=a;return s}var y2=typeof AbortController<"u"?AbortController:function(){var n=[],a=this.signal={aborted:!1,addEventListener:function(s,l){n.push(l)}};this.abort=function(){a.aborted=!0,n.forEach(function(s){return s()})}},v2=t.unstable_scheduleCallback,b2=t.unstable_NormalPriority,rt={$$typeof:R,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function gu(){return{controller:new y2,data:new Map,refCount:0}}function Gr(n){n.refCount--,n.refCount===0&&v2(b2,function(){n.controller.abort()})}var Kr=null,yu=0,Hi=0,$i=null;function x2(n,a){if(Kr===null){var s=Kr=[];yu=0,Hi=xd(),$i={status:"pending",value:void 0,then:function(l){s.push(l)}}}return yu++,a.then(sm,sm),a}function sm(){if(--yu===0&&Kr!==null){$i!==null&&($i.status="fulfilled");var n=Kr;Kr=null,Hi=0,$i=null;for(var a=0;a<n.length;a++)(0,n[a])()}}function w2(n,a){var s=[],l={status:"pending",value:null,reason:null,then:function(f){s.push(f)}};return n.then(function(){l.status="fulfilled",l.value=a;for(var f=0;f<s.length;f++)(0,s[f])(a)},function(f){for(l.status="rejected",l.reason=f,f=0;f<s.length;f++)(0,s[f])(void 0)}),l}var om=C.S;C.S=function(n,a){qg=Ht(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&x2(n,a),om!==null&&om(n,a)};var ni=N(null);function vu(){var n=ni.current;return n!==null?n:Ie.pooledCache}function No(n,a){a===null?Q(ni,ni.current):Q(ni,a.pool)}function lm(){var n=vu();return n===null?null:{parent:rt._currentValue,pool:n}}var Ii=Error(r(460)),bu=Error(r(474)),Ro=Error(r(542)),Oo={then:function(){}};function cm(n){return n=n.status,n==="fulfilled"||n==="rejected"}function um(n,a,s){switch(s=n[s],s===void 0?n.push(a):s!==a&&(a.then(In,In),a=s),a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,hm(n),n;default:if(typeof a.status=="string")a.then(In,In);else{if(n=Ie,n!==null&&100<n.shellSuspendCounter)throw Error(r(482));n=a,n.status="pending",n.then(function(l){if(a.status==="pending"){var f=a;f.status="fulfilled",f.value=l}},function(l){if(a.status==="pending"){var f=a;f.status="rejected",f.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw n=a.reason,hm(n),n}throw ii=a,Ii}}function ai(n){try{var a=n._init;return a(n._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(ii=s,Ii):s}}var ii=null;function dm(){if(ii===null)throw Error(r(459));var n=ii;return ii=null,n}function hm(n){if(n===Ii||n===Ro)throw Error(r(483))}var qi=null,Yr=0;function Do(n){var a=Yr;return Yr+=1,qi===null&&(qi=[]),um(qi,n,a)}function Xr(n,a){a=a.props.ref,n.ref=a!==void 0?a:null}function Mo(n,a){throw a.$$typeof===x?Error(r(525)):(n=Object.prototype.toString.call(a),Error(r(31,n==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":n)))}function fm(n){function a(M,D){if(n){var z=M.deletions;z===null?(M.deletions=[D],M.flags|=16):z.push(D)}}function s(M,D){if(!n)return null;for(;D!==null;)a(M,D),D=D.sibling;return null}function l(M){for(var D=new Map;M!==null;)M.key!==null?D.set(M.key,M):D.set(M.index,M),M=M.sibling;return D}function f(M,D){return M=Fn(M,D),M.index=0,M.sibling=null,M}function m(M,D,z){return M.index=z,n?(z=M.alternate,z!==null?(z=z.index,z<D?(M.flags|=67108866,D):z):(M.flags|=67108866,D)):(M.flags|=1048576,D)}function b(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function j(M,D,z,q){return D===null||D.tag!==6?(D=ou(z,M.mode,q),D.return=M,D):(D=f(D,z),D.return=M,D)}function A(M,D,z,q){var he=z.type;return he===_?$(M,D,z.props.children,q,z.key):D!==null&&(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Y&&ai(he)===D.type)?(D=f(D,z.props),Xr(D,z),D.return=M,D):(D=To(z.type,z.key,z.props,null,M.mode,q),Xr(D,z),D.return=M,D)}function U(M,D,z,q){return D===null||D.tag!==4||D.stateNode.containerInfo!==z.containerInfo||D.stateNode.implementation!==z.implementation?(D=lu(z,M.mode,q),D.return=M,D):(D=f(D,z.children||[]),D.return=M,D)}function $(M,D,z,q,he){return D===null||D.tag!==7?(D=Qa(z,M.mode,q,he),D.return=M,D):(D=f(D,z),D.return=M,D)}function G(M,D,z){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=ou(""+D,M.mode,z),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case w:return z=To(D.type,D.key,D.props,null,M.mode,z),Xr(z,D),z.return=M,z;case S:return D=lu(D,M.mode,z),D.return=M,D;case Y:return D=ai(D),G(M,D,z)}if(je(D)||fe(D))return D=Qa(D,M.mode,z,null),D.return=M,D;if(typeof D.then=="function")return G(M,Do(D),z);if(D.$$typeof===R)return G(M,Ao(M,D),z);Mo(M,D)}return null}function B(M,D,z,q){var he=D!==null?D.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return he!==null?null:j(M,D,""+z,q);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case w:return z.key===he?A(M,D,z,q):null;case S:return z.key===he?U(M,D,z,q):null;case Y:return z=ai(z),B(M,D,z,q)}if(je(z)||fe(z))return he!==null?null:$(M,D,z,q,null);if(typeof z.then=="function")return B(M,D,Do(z),q);if(z.$$typeof===R)return B(M,D,Ao(M,z),q);Mo(M,z)}return null}function P(M,D,z,q,he){if(typeof q=="string"&&q!==""||typeof q=="number"||typeof q=="bigint")return M=M.get(z)||null,j(D,M,""+q,he);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case w:return M=M.get(q.key===null?z:q.key)||null,A(D,M,q,he);case S:return M=M.get(q.key===null?z:q.key)||null,U(D,M,q,he);case Y:return q=ai(q),P(M,D,z,q,he)}if(je(q)||fe(q))return M=M.get(z)||null,$(D,M,q,he,null);if(typeof q.then=="function")return P(M,D,z,Do(q),he);if(q.$$typeof===R)return P(M,D,z,Ao(D,q),he);Mo(D,q)}return null}function se(M,D,z,q){for(var he=null,Le=null,ue=D,ke=D=0,Ae=null;ue!==null&&ke<z.length;ke++){ue.index>ke?(Ae=ue,ue=null):Ae=ue.sibling;var ze=B(M,ue,z[ke],q);if(ze===null){ue===null&&(ue=Ae);break}n&&ue&&ze.alternate===null&&a(M,ue),D=m(ze,D,ke),Le===null?he=ze:Le.sibling=ze,Le=ze,ue=Ae}if(ke===z.length)return s(M,ue),Re&&Gn(M,ke),he;if(ue===null){for(;ke<z.length;ke++)ue=G(M,z[ke],q),ue!==null&&(D=m(ue,D,ke),Le===null?he=ue:Le.sibling=ue,Le=ue);return Re&&Gn(M,ke),he}for(ue=l(ue);ke<z.length;ke++)Ae=P(ue,M,ke,z[ke],q),Ae!==null&&(n&&Ae.alternate!==null&&ue.delete(Ae.key===null?ke:Ae.key),D=m(Ae,D,ke),Le===null?he=Ae:Le.sibling=Ae,Le=Ae);return n&&ue.forEach(function(Ua){return a(M,Ua)}),Re&&Gn(M,ke),he}function ge(M,D,z,q){if(z==null)throw Error(r(151));for(var he=null,Le=null,ue=D,ke=D=0,Ae=null,ze=z.next();ue!==null&&!ze.done;ke++,ze=z.next()){ue.index>ke?(Ae=ue,ue=null):Ae=ue.sibling;var Ua=B(M,ue,ze.value,q);if(Ua===null){ue===null&&(ue=Ae);break}n&&ue&&Ua.alternate===null&&a(M,ue),D=m(Ua,D,ke),Le===null?he=Ua:Le.sibling=Ua,Le=Ua,ue=Ae}if(ze.done)return s(M,ue),Re&&Gn(M,ke),he;if(ue===null){for(;!ze.done;ke++,ze=z.next())ze=G(M,ze.value,q),ze!==null&&(D=m(ze,D,ke),Le===null?he=ze:Le.sibling=ze,Le=ze);return Re&&Gn(M,ke),he}for(ue=l(ue);!ze.done;ke++,ze=z.next())ze=P(ue,M,ke,ze.value,q),ze!==null&&(n&&ze.alternate!==null&&ue.delete(ze.key===null?ke:ze.key),D=m(ze,D,ke),Le===null?he=ze:Le.sibling=ze,Le=ze);return n&&ue.forEach(function(O5){return a(M,O5)}),Re&&Gn(M,ke),he}function $e(M,D,z,q){if(typeof z=="object"&&z!==null&&z.type===_&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case w:e:{for(var he=z.key;D!==null;){if(D.key===he){if(he=z.type,he===_){if(D.tag===7){s(M,D.sibling),q=f(D,z.props.children),q.return=M,M=q;break e}}else if(D.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===Y&&ai(he)===D.type){s(M,D.sibling),q=f(D,z.props),Xr(q,z),q.return=M,M=q;break e}s(M,D);break}else a(M,D);D=D.sibling}z.type===_?(q=Qa(z.props.children,M.mode,q,z.key),q.return=M,M=q):(q=To(z.type,z.key,z.props,null,M.mode,q),Xr(q,z),q.return=M,M=q)}return b(M);case S:e:{for(he=z.key;D!==null;){if(D.key===he)if(D.tag===4&&D.stateNode.containerInfo===z.containerInfo&&D.stateNode.implementation===z.implementation){s(M,D.sibling),q=f(D,z.children||[]),q.return=M,M=q;break e}else{s(M,D);break}else a(M,D);D=D.sibling}q=lu(z,M.mode,q),q.return=M,M=q}return b(M);case Y:return z=ai(z),$e(M,D,z,q)}if(je(z))return se(M,D,z,q);if(fe(z)){if(he=fe(z),typeof he!="function")throw Error(r(150));return z=he.call(z),ge(M,D,z,q)}if(typeof z.then=="function")return $e(M,D,Do(z),q);if(z.$$typeof===R)return $e(M,D,Ao(M,z),q);Mo(M,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,D!==null&&D.tag===6?(s(M,D.sibling),q=f(D,z),q.return=M,M=q):(s(M,D),q=ou(z,M.mode,q),q.return=M,M=q),b(M)):s(M,D)}return function(M,D,z,q){try{Yr=0;var he=$e(M,D,z,q);return qi=null,he}catch(ue){if(ue===Ii||ue===Ro)throw ue;var Le=Ft(29,ue,null,M.mode);return Le.lanes=q,Le.return=M,Le}finally{}}}var ri=fm(!0),pm=fm(!1),xa=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wu(n,a){n=n.updateQueue,a.updateQueue===n&&(a.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function wa(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function Sa(n,a,s){var l=n.updateQueue;if(l===null)return null;if(l=l.shared,(Ue&2)!==0){var f=l.pending;return f===null?a.next=a:(a.next=f.next,f.next=a),l.pending=a,a=_o(n),Jp(n,null,s),a}return ko(n,l,a,s),_o(n)}function Wr(n,a,s){if(a=a.updateQueue,a!==null&&(a=a.shared,(s&4194048)!==0)){var l=a.lanes;l&=n.pendingLanes,s|=l,a.lanes=s,rp(n,s)}}function Su(n,a){var s=n.updateQueue,l=n.alternate;if(l!==null&&(l=l.updateQueue,s===l)){var f=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var b={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?f=m=b:m=m.next=b,s=s.next}while(s!==null);m===null?f=m=a:m=m.next=a}else f=m=a;s={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:l.shared,callbacks:l.callbacks},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=a:n.next=a,s.lastBaseUpdate=a}var ju=!1;function Jr(){if(ju){var n=$i;if(n!==null)throw n}}function Qr(n,a,s,l){ju=!1;var f=n.updateQueue;xa=!1;var m=f.firstBaseUpdate,b=f.lastBaseUpdate,j=f.shared.pending;if(j!==null){f.shared.pending=null;var A=j,U=A.next;A.next=null,b===null?m=U:b.next=U,b=A;var $=n.alternate;$!==null&&($=$.updateQueue,j=$.lastBaseUpdate,j!==b&&(j===null?$.firstBaseUpdate=U:j.next=U,$.lastBaseUpdate=A))}if(m!==null){var G=f.baseState;b=0,$=U=A=null,j=m;do{var B=j.lane&-536870913,P=B!==j.lane;if(P?(Ce&B)===B:(l&B)===B){B!==0&&B===Hi&&(ju=!0),$!==null&&($=$.next={lane:0,tag:j.tag,payload:j.payload,callback:null,next:null});e:{var se=n,ge=j;B=a;var $e=s;switch(ge.tag){case 1:if(se=ge.payload,typeof se=="function"){G=se.call($e,G,B);break e}G=se;break e;case 3:se.flags=se.flags&-65537|128;case 0:if(se=ge.payload,B=typeof se=="function"?se.call($e,G,B):se,B==null)break e;G=v({},G,B);break e;case 2:xa=!0}}B=j.callback,B!==null&&(n.flags|=64,P&&(n.flags|=8192),P=f.callbacks,P===null?f.callbacks=[B]:P.push(B))}else P={lane:B,tag:j.tag,payload:j.payload,callback:j.callback,next:null},$===null?(U=$=P,A=G):$=$.next=P,b|=B;if(j=j.next,j===null){if(j=f.shared.pending,j===null)break;P=j,j=P.next,P.next=null,f.lastBaseUpdate=P,f.shared.pending=null}}while(!0);$===null&&(A=G),f.baseState=A,f.firstBaseUpdate=U,f.lastBaseUpdate=$,m===null&&(f.shared.lanes=0),Ea|=b,n.lanes=b,n.memoizedState=G}}function mm(n,a){if(typeof n!="function")throw Error(r(191,n));n.call(a)}function gm(n,a){var s=n.callbacks;if(s!==null)for(n.callbacks=null,n=0;n<s.length;n++)mm(s[n],a)}var Fi=N(null),Lo=N(0);function ym(n,a){n=aa,Q(Lo,n),Q(Fi,a),aa=n|a.baseLanes}function ku(){Q(Lo,aa),Q(Fi,Fi.current)}function _u(){aa=Lo.current,V(Fi),V(Lo)}var Gt=N(null),ln=null;function ja(n){var a=n.alternate;Q(tt,tt.current&1),Q(Gt,n),ln===null&&(a===null||Fi.current!==null||a.memoizedState!==null)&&(ln=n)}function Tu(n){Q(tt,tt.current),Q(Gt,n),ln===null&&(ln=n)}function vm(n){n.tag===22?(Q(tt,tt.current),Q(Gt,n),ln===null&&(ln=n)):ka()}function ka(){Q(tt,tt.current),Q(Gt,Gt.current)}function Kt(n){V(Gt),ln===n&&(ln=null),V(tt)}var tt=N(0);function zo(n){for(var a=n;a!==null;){if(a.tag===13){var s=a.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||Od(s)||Dd(s)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Xn=0,Se=null,Ve=null,st=null,Uo=!1,Gi=!1,si=!1,Bo=0,Zr=0,Ki=null,S2=0;function Je(){throw Error(r(321))}function Eu(n,a){if(a===null)return!1;for(var s=0;s<a.length&&s<n.length;s++)if(!qt(n[s],a[s]))return!1;return!0}function Cu(n,a,s,l,f,m){return Xn=m,Se=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,C.H=n===null||n.memoizedState===null?tg:Iu,si=!1,m=s(l,f),si=!1,Gi&&(m=xm(a,s,l,f)),bm(n),m}function bm(n){C.H=ns;var a=Ve!==null&&Ve.next!==null;if(Xn=0,st=Ve=Se=null,Uo=!1,Zr=0,Ki=null,a)throw Error(r(300));n===null||ot||(n=n.dependencies,n!==null&&Co(n)&&(ot=!0))}function xm(n,a,s,l){Se=n;var f=0;do{if(Gi&&(Ki=null),Zr=0,Gi=!1,25<=f)throw Error(r(301));if(f+=1,st=Ve=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}C.H=ng,m=a(s,l)}while(Gi);return m}function j2(){var n=C.H,a=n.useState()[0];return a=typeof a.then=="function"?es(a):a,n=n.useState()[0],(Ve!==null?Ve.memoizedState:null)!==n&&(Se.flags|=1024),a}function Au(){var n=Bo!==0;return Bo=0,n}function Nu(n,a,s){a.updateQueue=n.updateQueue,a.flags&=-2053,n.lanes&=~s}function Ru(n){if(Uo){for(n=n.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Uo=!1}Xn=0,st=Ve=Se=null,Gi=!1,Zr=Bo=0,Ki=null}function Tt(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return st===null?Se.memoizedState=st=n:st=st.next=n,st}function nt(){if(Ve===null){var n=Se.alternate;n=n!==null?n.memoizedState:null}else n=Ve.next;var a=st===null?Se.memoizedState:st.next;if(a!==null)st=a,Ve=n;else{if(n===null)throw Se.alternate===null?Error(r(467)):Error(r(310));Ve=n,n={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},st===null?Se.memoizedState=st=n:st=st.next=n}return st}function Po(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function es(n){var a=Zr;return Zr+=1,Ki===null&&(Ki=[]),n=um(Ki,n,a),a=Se,(st===null?a.memoizedState:st.next)===null&&(a=a.alternate,C.H=a===null||a.memoizedState===null?tg:Iu),n}function Vo(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return es(n);if(n.$$typeof===R)return vt(n)}throw Error(r(438,String(n)))}function Ou(n){var a=null,s=Se.updateQueue;if(s!==null&&(a=s.memoCache),a==null){var l=Se.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(f){return f.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),s===null&&(s=Po(),Se.updateQueue=s),s.memoCache=a,s=a.data[a.index],s===void 0)for(s=a.data[a.index]=Array(n),l=0;l<n;l++)s[l]=re;return a.index++,s}function Wn(n,a){return typeof a=="function"?a(n):a}function Ho(n){var a=nt();return Du(a,Ve,n)}function Du(n,a,s){var l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=s;var f=n.baseQueue,m=l.pending;if(m!==null){if(f!==null){var b=f.next;f.next=m.next,m.next=b}a.baseQueue=f=m,l.pending=null}if(m=n.baseState,f===null)n.memoizedState=m;else{a=f.next;var j=b=null,A=null,U=a,$=!1;do{var G=U.lane&-536870913;if(G!==U.lane?(Ce&G)===G:(Xn&G)===G){var B=U.revertLane;if(B===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),G===Hi&&($=!0);else if((Xn&B)===B){U=U.next,B===Hi&&($=!0);continue}else G={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(j=A=G,b=m):A=A.next=G,Se.lanes|=B,Ea|=B;G=U.action,si&&s(m,G),m=U.hasEagerState?U.eagerState:s(m,G)}else B={lane:G,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},A===null?(j=A=B,b=m):A=A.next=B,Se.lanes|=G,Ea|=G;U=U.next}while(U!==null&&U!==a);if(A===null?b=m:A.next=j,!qt(m,n.memoizedState)&&(ot=!0,$&&(s=$i,s!==null)))throw s;n.memoizedState=m,n.baseState=b,n.baseQueue=A,l.lastRenderedState=m}return f===null&&(l.lanes=0),[n.memoizedState,l.dispatch]}function Mu(n){var a=nt(),s=a.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=n;var l=s.dispatch,f=s.pending,m=a.memoizedState;if(f!==null){s.pending=null;var b=f=f.next;do m=n(m,b.action),b=b.next;while(b!==f);qt(m,a.memoizedState)||(ot=!0),a.memoizedState=m,a.baseQueue===null&&(a.baseState=m),s.lastRenderedState=m}return[m,l]}function wm(n,a,s){var l=Se,f=nt(),m=Re;if(m){if(s===void 0)throw Error(r(407));s=s()}else s=a();var b=!qt((Ve||f).memoizedState,s);if(b&&(f.memoizedState=s,ot=!0),f=f.queue,Uu(km.bind(null,l,f,n),[n]),f.getSnapshot!==a||b||st!==null&&st.memoizedState.tag&1){if(l.flags|=2048,Yi(9,{destroy:void 0},jm.bind(null,l,f,s,a),null),Ie===null)throw Error(r(349));m||(Xn&127)!==0||Sm(l,a,s)}return s}function Sm(n,a,s){n.flags|=16384,n={getSnapshot:a,value:s},a=Se.updateQueue,a===null?(a=Po(),Se.updateQueue=a,a.stores=[n]):(s=a.stores,s===null?a.stores=[n]:s.push(n))}function jm(n,a,s,l){a.value=s,a.getSnapshot=l,_m(a)&&Tm(n)}function km(n,a,s){return s(function(){_m(a)&&Tm(n)})}function _m(n){var a=n.getSnapshot;n=n.value;try{var s=a();return!qt(n,s)}catch{return!0}}function Tm(n){var a=Ja(n,2);a!==null&&Ut(a,n,2)}function Lu(n){var a=Tt();if(typeof n=="function"){var s=n;if(n=s(),si){fa(!0);try{s()}finally{fa(!1)}}}return a.memoizedState=a.baseState=n,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:n},a}function Em(n,a,s,l){return n.baseState=s,Du(n,Ve,typeof l=="function"?l:Wn)}function k2(n,a,s,l,f){if(qo(n))throw Error(r(485));if(n=a.action,n!==null){var m={payload:f,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(b){m.listeners.push(b)}};C.T!==null?s(!0):m.isTransition=!1,l(m),s=a.pending,s===null?(m.next=a.pending=m,Cm(a,m)):(m.next=s.next,a.pending=s.next=m)}}function Cm(n,a){var s=a.action,l=a.payload,f=n.state;if(a.isTransition){var m=C.T,b={};C.T=b;try{var j=s(f,l),A=C.S;A!==null&&A(b,j),Am(n,a,j)}catch(U){zu(n,a,U)}finally{m!==null&&b.types!==null&&(m.types=b.types),C.T=m}}else try{m=s(f,l),Am(n,a,m)}catch(U){zu(n,a,U)}}function Am(n,a,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(l){Nm(n,a,l)},function(l){return zu(n,a,l)}):Nm(n,a,s)}function Nm(n,a,s){a.status="fulfilled",a.value=s,Rm(a),n.state=s,a=n.pending,a!==null&&(s=a.next,s===a?n.pending=null:(s=s.next,a.next=s,Cm(n,s)))}function zu(n,a,s){var l=n.pending;if(n.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=s,Rm(a),a=a.next;while(a!==l)}n.action=null}function Rm(n){n=n.listeners;for(var a=0;a<n.length;a++)(0,n[a])()}function Om(n,a){return a}function Dm(n,a){if(Re){var s=Ie.formState;if(s!==null){e:{var l=Se;if(Re){if(Ke){t:{for(var f=Ke,m=on;f.nodeType!==8;){if(!m){f=null;break t}if(f=cn(f.nextSibling),f===null){f=null;break t}}m=f.data,f=m==="F!"||m==="F"?f:null}if(f){Ke=cn(f.nextSibling),l=f.data==="F!";break e}}va(l)}l=!1}l&&(a=s[0])}}return s=Tt(),s.memoizedState=s.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Om,lastRenderedState:a},s.queue=l,s=Qm.bind(null,Se,l),l.dispatch=s,l=Lu(!1),m=$u.bind(null,Se,!1,l.queue),l=Tt(),f={state:a,dispatch:null,action:n,pending:null},l.queue=f,s=k2.bind(null,Se,f,m,s),f.dispatch=s,l.memoizedState=n,[a,s,!1]}function Mm(n){var a=nt();return Lm(a,Ve,n)}function Lm(n,a,s){if(a=Du(n,a,Om)[0],n=Ho(Wn)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=es(a)}catch(b){throw b===Ii?Ro:b}else l=a;a=nt();var f=a.queue,m=f.dispatch;return s!==a.memoizedState&&(Se.flags|=2048,Yi(9,{destroy:void 0},_2.bind(null,f,s),null)),[l,m,n]}function _2(n,a){n.action=a}function zm(n){var a=nt(),s=Ve;if(s!==null)return Lm(a,s,n);nt(),a=a.memoizedState,s=nt();var l=s.queue.dispatch;return s.memoizedState=n,[a,l,!1]}function Yi(n,a,s,l){return n={tag:n,create:s,deps:l,inst:a,next:null},a=Se.updateQueue,a===null&&(a=Po(),Se.updateQueue=a),s=a.lastEffect,s===null?a.lastEffect=n.next=n:(l=s.next,s.next=n,n.next=l,a.lastEffect=n),n}function Um(){return nt().memoizedState}function $o(n,a,s,l){var f=Tt();Se.flags|=n,f.memoizedState=Yi(1|a,{destroy:void 0},s,l===void 0?null:l)}function Io(n,a,s,l){var f=nt();l=l===void 0?null:l;var m=f.memoizedState.inst;Ve!==null&&l!==null&&Eu(l,Ve.memoizedState.deps)?f.memoizedState=Yi(a,m,s,l):(Se.flags|=n,f.memoizedState=Yi(1|a,m,s,l))}function Bm(n,a){$o(8390656,8,n,a)}function Uu(n,a){Io(2048,8,n,a)}function T2(n){Se.flags|=4;var a=Se.updateQueue;if(a===null)a=Po(),Se.updateQueue=a,a.events=[n];else{var s=a.events;s===null?a.events=[n]:s.push(n)}}function Pm(n){var a=nt().memoizedState;return T2({ref:a,nextImpl:n}),function(){if((Ue&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}function Vm(n,a){return Io(4,2,n,a)}function Hm(n,a){return Io(4,4,n,a)}function $m(n,a){if(typeof a=="function"){n=n();var s=a(n);return function(){typeof s=="function"?s():a(null)}}if(a!=null)return n=n(),a.current=n,function(){a.current=null}}function Im(n,a,s){s=s!=null?s.concat([n]):null,Io(4,4,$m.bind(null,a,n),s)}function Bu(){}function qm(n,a){var s=nt();a=a===void 0?null:a;var l=s.memoizedState;return a!==null&&Eu(a,l[1])?l[0]:(s.memoizedState=[n,a],n)}function Fm(n,a){var s=nt();a=a===void 0?null:a;var l=s.memoizedState;if(a!==null&&Eu(a,l[1]))return l[0];if(l=n(),si){fa(!0);try{n()}finally{fa(!1)}}return s.memoizedState=[l,a],l}function Pu(n,a,s){return s===void 0||(Xn&1073741824)!==0&&(Ce&261930)===0?n.memoizedState=a:(n.memoizedState=s,n=Gg(),Se.lanes|=n,Ea|=n,s)}function Gm(n,a,s,l){return qt(s,a)?s:Fi.current!==null?(n=Pu(n,s,l),qt(n,a)||(ot=!0),n):(Xn&42)===0||(Xn&1073741824)!==0&&(Ce&261930)===0?(ot=!0,n.memoizedState=s):(n=Gg(),Se.lanes|=n,Ea|=n,a)}function Km(n,a,s,l,f){var m=I.p;I.p=m!==0&&8>m?m:8;var b=C.T,j={};C.T=j,$u(n,!1,a,s);try{var A=f(),U=C.S;if(U!==null&&U(j,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var $=w2(A,l);ts(n,a,$,Wt(n))}else ts(n,a,l,Wt(n))}catch(G){ts(n,a,{then:function(){},status:"rejected",reason:G},Wt())}finally{I.p=m,b!==null&&j.types!==null&&(b.types=j.types),C.T=b}}function E2(){}function Vu(n,a,s,l){if(n.tag!==5)throw Error(r(476));var f=Ym(n).queue;Km(n,f,a,Z,s===null?E2:function(){return Xm(n),s(l)})}function Ym(n){var a=n.memoizedState;if(a!==null)return a;a={memoizedState:Z,baseState:Z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:Z},next:null};var s={};return a.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wn,lastRenderedState:s},next:null},n.memoizedState=a,n=n.alternate,n!==null&&(n.memoizedState=a),a}function Xm(n){var a=Ym(n);a.next===null&&(a=n.alternate.memoizedState),ts(n,a.next.queue,{},Wt())}function Hu(){return vt(vs)}function Wm(){return nt().memoizedState}function Jm(){return nt().memoizedState}function C2(n){for(var a=n.return;a!==null;){switch(a.tag){case 24:case 3:var s=Wt();n=wa(s);var l=Sa(a,n,s);l!==null&&(Ut(l,a,s),Wr(l,a,s)),a={cache:gu()},n.payload=a;return}a=a.return}}function A2(n,a,s){var l=Wt();s={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},qo(n)?Zm(a,s):(s=ru(n,a,s,l),s!==null&&(Ut(s,n,l),eg(s,a,l)))}function Qm(n,a,s){var l=Wt();ts(n,a,s,l)}function ts(n,a,s,l){var f={lane:l,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(qo(n))Zm(a,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=a.lastRenderedReducer,m!==null))try{var b=a.lastRenderedState,j=m(b,s);if(f.hasEagerState=!0,f.eagerState=j,qt(j,b))return ko(n,a,f,0),Ie===null&&jo(),!1}catch{}finally{}if(s=ru(n,a,f,l),s!==null)return Ut(s,n,l),eg(s,a,l),!0}return!1}function $u(n,a,s,l){if(l={lane:2,revertLane:xd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qo(n)){if(a)throw Error(r(479))}else a=ru(n,s,l,2),a!==null&&Ut(a,n,2)}function qo(n){var a=n.alternate;return n===Se||a!==null&&a===Se}function Zm(n,a){Gi=Uo=!0;var s=n.pending;s===null?a.next=a:(a.next=s.next,s.next=a),n.pending=a}function eg(n,a,s){if((s&4194048)!==0){var l=a.lanes;l&=n.pendingLanes,s|=l,a.lanes=s,rp(n,s)}}var ns={readContext:vt,use:Vo,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useLayoutEffect:Je,useInsertionEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useSyncExternalStore:Je,useId:Je,useHostTransitionStatus:Je,useFormState:Je,useActionState:Je,useOptimistic:Je,useMemoCache:Je,useCacheRefresh:Je};ns.useEffectEvent=Je;var tg={readContext:vt,use:Vo,useCallback:function(n,a){return Tt().memoizedState=[n,a===void 0?null:a],n},useContext:vt,useEffect:Bm,useImperativeHandle:function(n,a,s){s=s!=null?s.concat([n]):null,$o(4194308,4,$m.bind(null,a,n),s)},useLayoutEffect:function(n,a){return $o(4194308,4,n,a)},useInsertionEffect:function(n,a){$o(4,2,n,a)},useMemo:function(n,a){var s=Tt();a=a===void 0?null:a;var l=n();if(si){fa(!0);try{n()}finally{fa(!1)}}return s.memoizedState=[l,a],l},useReducer:function(n,a,s){var l=Tt();if(s!==void 0){var f=s(a);if(si){fa(!0);try{s(a)}finally{fa(!1)}}}else f=a;return l.memoizedState=l.baseState=f,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:f},l.queue=n,n=n.dispatch=A2.bind(null,Se,n),[l.memoizedState,n]},useRef:function(n){var a=Tt();return n={current:n},a.memoizedState=n},useState:function(n){n=Lu(n);var a=n.queue,s=Qm.bind(null,Se,a);return a.dispatch=s,[n.memoizedState,s]},useDebugValue:Bu,useDeferredValue:function(n,a){var s=Tt();return Pu(s,n,a)},useTransition:function(){var n=Lu(!1);return n=Km.bind(null,Se,n.queue,!0,!1),Tt().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,a,s){var l=Se,f=Tt();if(Re){if(s===void 0)throw Error(r(407));s=s()}else{if(s=a(),Ie===null)throw Error(r(349));(Ce&127)!==0||Sm(l,a,s)}f.memoizedState=s;var m={value:s,getSnapshot:a};return f.queue=m,Bm(km.bind(null,l,m,n),[n]),l.flags|=2048,Yi(9,{destroy:void 0},jm.bind(null,l,m,s,a),null),s},useId:function(){var n=Tt(),a=Ie.identifierPrefix;if(Re){var s=Rn,l=Nn;s=(l&~(1<<32-It(l)-1)).toString(32)+s,a="_"+a+"R_"+s,s=Bo++,0<s&&(a+="H"+s.toString(32)),a+="_"}else s=S2++,a="_"+a+"r_"+s.toString(32)+"_";return n.memoizedState=a},useHostTransitionStatus:Hu,useFormState:Dm,useActionState:Dm,useOptimistic:function(n){var a=Tt();a.memoizedState=a.baseState=n;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=s,a=$u.bind(null,Se,!0,s),s.dispatch=a,[n,a]},useMemoCache:Ou,useCacheRefresh:function(){return Tt().memoizedState=C2.bind(null,Se)},useEffectEvent:function(n){var a=Tt(),s={impl:n};return a.memoizedState=s,function(){if((Ue&2)!==0)throw Error(r(440));return s.impl.apply(void 0,arguments)}}},Iu={readContext:vt,use:Vo,useCallback:qm,useContext:vt,useEffect:Uu,useImperativeHandle:Im,useInsertionEffect:Vm,useLayoutEffect:Hm,useMemo:Fm,useReducer:Ho,useRef:Um,useState:function(){return Ho(Wn)},useDebugValue:Bu,useDeferredValue:function(n,a){var s=nt();return Gm(s,Ve.memoizedState,n,a)},useTransition:function(){var n=Ho(Wn)[0],a=nt().memoizedState;return[typeof n=="boolean"?n:es(n),a]},useSyncExternalStore:wm,useId:Wm,useHostTransitionStatus:Hu,useFormState:Mm,useActionState:Mm,useOptimistic:function(n,a){var s=nt();return Em(s,Ve,n,a)},useMemoCache:Ou,useCacheRefresh:Jm};Iu.useEffectEvent=Pm;var ng={readContext:vt,use:Vo,useCallback:qm,useContext:vt,useEffect:Uu,useImperativeHandle:Im,useInsertionEffect:Vm,useLayoutEffect:Hm,useMemo:Fm,useReducer:Mu,useRef:Um,useState:function(){return Mu(Wn)},useDebugValue:Bu,useDeferredValue:function(n,a){var s=nt();return Ve===null?Pu(s,n,a):Gm(s,Ve.memoizedState,n,a)},useTransition:function(){var n=Mu(Wn)[0],a=nt().memoizedState;return[typeof n=="boolean"?n:es(n),a]},useSyncExternalStore:wm,useId:Wm,useHostTransitionStatus:Hu,useFormState:zm,useActionState:zm,useOptimistic:function(n,a){var s=nt();return Ve!==null?Em(s,Ve,n,a):(s.baseState=n,[n,s.queue.dispatch])},useMemoCache:Ou,useCacheRefresh:Jm};ng.useEffectEvent=Pm;function qu(n,a,s,l){a=n.memoizedState,s=s(l,a),s=s==null?a:v({},a,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var Fu={enqueueSetState:function(n,a,s){n=n._reactInternals;var l=Wt(),f=wa(l);f.payload=a,s!=null&&(f.callback=s),a=Sa(n,f,l),a!==null&&(Ut(a,n,l),Wr(a,n,l))},enqueueReplaceState:function(n,a,s){n=n._reactInternals;var l=Wt(),f=wa(l);f.tag=1,f.payload=a,s!=null&&(f.callback=s),a=Sa(n,f,l),a!==null&&(Ut(a,n,l),Wr(a,n,l))},enqueueForceUpdate:function(n,a){n=n._reactInternals;var s=Wt(),l=wa(s);l.tag=2,a!=null&&(l.callback=a),a=Sa(n,l,s),a!==null&&(Ut(a,n,s),Wr(a,n,s))}};function ag(n,a,s,l,f,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(l,m,b):a.prototype&&a.prototype.isPureReactComponent?!$r(s,l)||!$r(f,m):!0}function ig(n,a,s,l){n=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(s,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(s,l),a.state!==n&&Fu.enqueueReplaceState(a,a.state,null)}function oi(n,a){var s=a;if("ref"in a){s={};for(var l in a)l!=="ref"&&(s[l]=a[l])}if(n=n.defaultProps){s===a&&(s=v({},s));for(var f in n)s[f]===void 0&&(s[f]=n[f])}return s}function rg(n){So(n)}function sg(n){console.error(n)}function og(n){So(n)}function Fo(n,a){try{var s=n.onUncaughtError;s(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function lg(n,a,s){try{var l=n.onCaughtError;l(s.value,{componentStack:s.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Gu(n,a,s){return s=wa(s),s.tag=3,s.payload={element:null},s.callback=function(){Fo(n,a)},s}function cg(n){return n=wa(n),n.tag=3,n}function ug(n,a,s,l){var f=s.type.getDerivedStateFromError;if(typeof f=="function"){var m=l.value;n.payload=function(){return f(m)},n.callback=function(){lg(a,s,l)}}var b=s.stateNode;b!==null&&typeof b.componentDidCatch=="function"&&(n.callback=function(){lg(a,s,l),typeof f!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var j=l.stack;this.componentDidCatch(l.value,{componentStack:j!==null?j:""})})}function N2(n,a,s,l,f){if(s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=s.alternate,a!==null&&Vi(a,s,f,!0),s=Gt.current,s!==null){switch(s.tag){case 31:case 13:return ln===null?al():s.alternate===null&&Qe===0&&(Qe=3),s.flags&=-257,s.flags|=65536,s.lanes=f,l===Oo?s.flags|=16384:(a=s.updateQueue,a===null?s.updateQueue=new Set([l]):a.add(l),yd(n,l,f)),!1;case 22:return s.flags|=65536,l===Oo?s.flags|=16384:(a=s.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},s.updateQueue=a):(s=a.retryQueue,s===null?a.retryQueue=new Set([l]):s.add(l)),yd(n,l,f)),!1}throw Error(r(435,s.tag))}return yd(n,l,f),al(),!1}if(Re)return a=Gt.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=f,l!==du&&(n=Error(r(422),{cause:l}),Fr(an(n,s)))):(l!==du&&(a=Error(r(423),{cause:l}),Fr(an(a,s))),n=n.current.alternate,n.flags|=65536,f&=-f,n.lanes|=f,l=an(l,s),f=Gu(n.stateNode,l,f),Su(n,f),Qe!==4&&(Qe=2)),!1;var m=Error(r(520),{cause:l});if(m=an(m,s),us===null?us=[m]:us.push(m),Qe!==4&&(Qe=2),a===null)return!0;l=an(l,s),s=a;do{switch(s.tag){case 3:return s.flags|=65536,n=f&-f,s.lanes|=n,n=Gu(s.stateNode,l,n),Su(s,n),!1;case 1:if(a=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Ca===null||!Ca.has(m))))return s.flags|=65536,f&=-f,s.lanes|=f,f=cg(f),ug(f,n,s,l),Su(s,f),!1}s=s.return}while(s!==null);return!1}var Ku=Error(r(461)),ot=!1;function bt(n,a,s,l){a.child=n===null?pm(a,null,s,l):ri(a,n.child,s,l)}function dg(n,a,s,l,f){s=s.render;var m=a.ref;if("ref"in l){var b={};for(var j in l)j!=="ref"&&(b[j]=l[j])}else b=l;return ti(a),l=Cu(n,a,s,b,m,f),j=Au(),n!==null&&!ot?(Nu(n,a,f),Jn(n,a,f)):(Re&&j&&cu(a),a.flags|=1,bt(n,a,l,f),a.child)}function hg(n,a,s,l,f){if(n===null){var m=s.type;return typeof m=="function"&&!su(m)&&m.defaultProps===void 0&&s.compare===null?(a.tag=15,a.type=m,fg(n,a,m,l,f)):(n=To(s.type,null,l,a,a.mode,f),n.ref=a.ref,n.return=a,a.child=n)}if(m=n.child,!td(n,f)){var b=m.memoizedProps;if(s=s.compare,s=s!==null?s:$r,s(b,l)&&n.ref===a.ref)return Jn(n,a,f)}return a.flags|=1,n=Fn(m,l),n.ref=a.ref,n.return=a,a.child=n}function fg(n,a,s,l,f){if(n!==null){var m=n.memoizedProps;if($r(m,l)&&n.ref===a.ref)if(ot=!1,a.pendingProps=l=m,td(n,f))(n.flags&131072)!==0&&(ot=!0);else return a.lanes=n.lanes,Jn(n,a,f)}return Yu(n,a,s,l,f)}function pg(n,a,s,l){var f=l.children,m=n!==null?n.memoizedState:null;if(n===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,n!==null){for(l=a.child=n.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~m}else l=0,a.child=null;return mg(n,a,m,s,l)}if((s&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},n!==null&&No(a,m!==null?m.cachePool:null),m!==null?ym(a,m):ku(),vm(a);else return l=a.lanes=536870912,mg(n,a,m!==null?m.baseLanes|s:s,s,l)}else m!==null?(No(a,m.cachePool),ym(a,m),ka(),a.memoizedState=null):(n!==null&&No(a,null),ku(),ka());return bt(n,a,f,s),a.child}function as(n,a){return n!==null&&n.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function mg(n,a,s,l,f){var m=vu();return m=m===null?null:{parent:rt._currentValue,pool:m},a.memoizedState={baseLanes:s,cachePool:m},n!==null&&No(a,null),ku(),vm(a),n!==null&&Vi(n,a,l,!0),a.childLanes=f,null}function Go(n,a){return a=Yo({mode:a.mode,children:a.children},n.mode),a.ref=n.ref,n.child=a,a.return=n,a}function gg(n,a,s){return ri(a,n.child,null,s),n=Go(a,a.pendingProps),n.flags|=2,Kt(a),a.memoizedState=null,n}function R2(n,a,s){var l=a.pendingProps,f=(a.flags&128)!==0;if(a.flags&=-129,n===null){if(Re){if(l.mode==="hidden")return n=Go(a,l),a.lanes=536870912,as(null,n);if(Tu(a),(n=Ke)?(n=C0(n,on),n=n!==null&&n.data==="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ga!==null?{id:Nn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},s=Zp(n),s.return=a,a.child=s,yt=a,Ke=null)):n=null,n===null)throw va(a);return a.lanes=536870912,null}return Go(a,l)}var m=n.memoizedState;if(m!==null){var b=m.dehydrated;if(Tu(a),f)if(a.flags&256)a.flags&=-257,a=gg(n,a,s);else if(a.memoizedState!==null)a.child=n.child,a.flags|=128,a=null;else throw Error(r(558));else if(ot||Vi(n,a,s,!1),f=(s&n.childLanes)!==0,ot||f){if(l=Ie,l!==null&&(b=sp(l,s),b!==0&&b!==m.retryLane))throw m.retryLane=b,Ja(n,b),Ut(l,n,b),Ku;al(),a=gg(n,a,s)}else n=m.treeContext,Ke=cn(b.nextSibling),yt=a,Re=!0,ya=null,on=!1,n!==null&&nm(a,n),a=Go(a,l),a.flags|=4096;return a}return n=Fn(n.child,{mode:l.mode,children:l.children}),n.ref=a.ref,a.child=n,n.return=a,n}function Ko(n,a){var s=a.ref;if(s===null)n!==null&&n.ref!==null&&(a.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(r(284));(n===null||n.ref!==s)&&(a.flags|=4194816)}}function Yu(n,a,s,l,f){return ti(a),s=Cu(n,a,s,l,void 0,f),l=Au(),n!==null&&!ot?(Nu(n,a,f),Jn(n,a,f)):(Re&&l&&cu(a),a.flags|=1,bt(n,a,s,f),a.child)}function yg(n,a,s,l,f,m){return ti(a),a.updateQueue=null,s=xm(a,l,s,f),bm(n),l=Au(),n!==null&&!ot?(Nu(n,a,m),Jn(n,a,m)):(Re&&l&&cu(a),a.flags|=1,bt(n,a,s,m),a.child)}function vg(n,a,s,l,f){if(ti(a),a.stateNode===null){var m=zi,b=s.contextType;typeof b=="object"&&b!==null&&(m=vt(b)),m=new s(l,m),a.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=Fu,a.stateNode=m,m._reactInternals=a,m=a.stateNode,m.props=l,m.state=a.memoizedState,m.refs={},xu(a),b=s.contextType,m.context=typeof b=="object"&&b!==null?vt(b):zi,m.state=a.memoizedState,b=s.getDerivedStateFromProps,typeof b=="function"&&(qu(a,s,b,l),m.state=a.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(b=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),b!==m.state&&Fu.enqueueReplaceState(m,m.state,null),Qr(a,l,m,f),Jr(),m.state=a.memoizedState),typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(n===null){m=a.stateNode;var j=a.memoizedProps,A=oi(s,j);m.props=A;var U=m.context,$=s.contextType;b=zi,typeof $=="object"&&$!==null&&(b=vt($));var G=s.getDerivedStateFromProps;$=typeof G=="function"||typeof m.getSnapshotBeforeUpdate=="function",j=a.pendingProps!==j,$||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(j||U!==b)&&ig(a,m,l,b),xa=!1;var B=a.memoizedState;m.state=B,Qr(a,l,m,f),Jr(),U=a.memoizedState,j||B!==U||xa?(typeof G=="function"&&(qu(a,s,G,l),U=a.memoizedState),(A=xa||ag(a,s,A,l,B,U,b))?($||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(a.flags|=4194308)):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=U),m.props=l,m.state=U,m.context=b,l=A):(typeof m.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{m=a.stateNode,wu(n,a),b=a.memoizedProps,$=oi(s,b),m.props=$,G=a.pendingProps,B=m.context,U=s.contextType,A=zi,typeof U=="object"&&U!==null&&(A=vt(U)),j=s.getDerivedStateFromProps,(U=typeof j=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(b!==G||B!==A)&&ig(a,m,l,A),xa=!1,B=a.memoizedState,m.state=B,Qr(a,l,m,f),Jr();var P=a.memoizedState;b!==G||B!==P||xa||n!==null&&n.dependencies!==null&&Co(n.dependencies)?(typeof j=="function"&&(qu(a,s,j,l),P=a.memoizedState),($=xa||ag(a,s,$,l,B,P,A)||n!==null&&n.dependencies!==null&&Co(n.dependencies))?(U||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(l,P,A),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(l,P,A)),typeof m.componentDidUpdate=="function"&&(a.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=P),m.props=l,m.state=P,m.context=A,l=$):(typeof m.componentDidUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(a.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||b===n.memoizedProps&&B===n.memoizedState||(a.flags|=1024),l=!1)}return m=l,Ko(n,a),l=(a.flags&128)!==0,m||l?(m=a.stateNode,s=l&&typeof s.getDerivedStateFromError!="function"?null:m.render(),a.flags|=1,n!==null&&l?(a.child=ri(a,n.child,null,f),a.child=ri(a,null,s,f)):bt(n,a,s,f),a.memoizedState=m.state,n=a.child):n=Jn(n,a,f),n}function bg(n,a,s,l){return Za(),a.flags|=256,bt(n,a,s,l),a.child}var Xu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Wu(n){return{baseLanes:n,cachePool:lm()}}function Ju(n,a,s){return n=n!==null?n.childLanes&~s:0,a&&(n|=Xt),n}function xg(n,a,s){var l=a.pendingProps,f=!1,m=(a.flags&128)!==0,b;if((b=m)||(b=n!==null&&n.memoizedState===null?!1:(tt.current&2)!==0),b&&(f=!0,a.flags&=-129),b=(a.flags&32)!==0,a.flags&=-33,n===null){if(Re){if(f?ja(a):ka(),(n=Ke)?(n=C0(n,on),n=n!==null&&n.data!=="&"?n:null,n!==null&&(a.memoizedState={dehydrated:n,treeContext:ga!==null?{id:Nn,overflow:Rn}:null,retryLane:536870912,hydrationErrors:null},s=Zp(n),s.return=a,a.child=s,yt=a,Ke=null)):n=null,n===null)throw va(a);return Dd(n)?a.lanes=32:a.lanes=536870912,null}var j=l.children;return l=l.fallback,f?(ka(),f=a.mode,j=Yo({mode:"hidden",children:j},f),l=Qa(l,f,s,null),j.return=a,l.return=a,j.sibling=l,a.child=j,l=a.child,l.memoizedState=Wu(s),l.childLanes=Ju(n,b,s),a.memoizedState=Xu,as(null,l)):(ja(a),Qu(a,j))}var A=n.memoizedState;if(A!==null&&(j=A.dehydrated,j!==null)){if(m)a.flags&256?(ja(a),a.flags&=-257,a=Zu(n,a,s)):a.memoizedState!==null?(ka(),a.child=n.child,a.flags|=128,a=null):(ka(),j=l.fallback,f=a.mode,l=Yo({mode:"visible",children:l.children},f),j=Qa(j,f,s,null),j.flags|=2,l.return=a,j.return=a,l.sibling=j,a.child=l,ri(a,n.child,null,s),l=a.child,l.memoizedState=Wu(s),l.childLanes=Ju(n,b,s),a.memoizedState=Xu,a=as(null,l));else if(ja(a),Dd(j)){if(b=j.nextSibling&&j.nextSibling.dataset,b)var U=b.dgst;b=U,l=Error(r(419)),l.stack="",l.digest=b,Fr({value:l,source:null,stack:null}),a=Zu(n,a,s)}else if(ot||Vi(n,a,s,!1),b=(s&n.childLanes)!==0,ot||b){if(b=Ie,b!==null&&(l=sp(b,s),l!==0&&l!==A.retryLane))throw A.retryLane=l,Ja(n,l),Ut(b,n,l),Ku;Od(j)||al(),a=Zu(n,a,s)}else Od(j)?(a.flags|=192,a.child=n.child,a=null):(n=A.treeContext,Ke=cn(j.nextSibling),yt=a,Re=!0,ya=null,on=!1,n!==null&&nm(a,n),a=Qu(a,l.children),a.flags|=4096);return a}return f?(ka(),j=l.fallback,f=a.mode,A=n.child,U=A.sibling,l=Fn(A,{mode:"hidden",children:l.children}),l.subtreeFlags=A.subtreeFlags&65011712,U!==null?j=Fn(U,j):(j=Qa(j,f,s,null),j.flags|=2),j.return=a,l.return=a,l.sibling=j,a.child=l,as(null,l),l=a.child,j=n.child.memoizedState,j===null?j=Wu(s):(f=j.cachePool,f!==null?(A=rt._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=lm(),j={baseLanes:j.baseLanes|s,cachePool:f}),l.memoizedState=j,l.childLanes=Ju(n,b,s),a.memoizedState=Xu,as(n.child,l)):(ja(a),s=n.child,n=s.sibling,s=Fn(s,{mode:"visible",children:l.children}),s.return=a,s.sibling=null,n!==null&&(b=a.deletions,b===null?(a.deletions=[n],a.flags|=16):b.push(n)),a.child=s,a.memoizedState=null,s)}function Qu(n,a){return a=Yo({mode:"visible",children:a},n.mode),a.return=n,n.child=a}function Yo(n,a){return n=Ft(22,n,null,a),n.lanes=0,n}function Zu(n,a,s){return ri(a,n.child,null,s),n=Qu(a,a.pendingProps.children),n.flags|=2,a.memoizedState=null,n}function wg(n,a,s){n.lanes|=a;var l=n.alternate;l!==null&&(l.lanes|=a),pu(n.return,a,s)}function ed(n,a,s,l,f,m){var b=n.memoizedState;b===null?n.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:s,tailMode:f,treeForkCount:m}:(b.isBackwards=a,b.rendering=null,b.renderingStartTime=0,b.last=l,b.tail=s,b.tailMode=f,b.treeForkCount=m)}function Sg(n,a,s){var l=a.pendingProps,f=l.revealOrder,m=l.tail;l=l.children;var b=tt.current,j=(b&2)!==0;if(j?(b=b&1|2,a.flags|=128):b&=1,Q(tt,b),bt(n,a,l,s),l=Re?qr:0,!j&&n!==null&&(n.flags&128)!==0)e:for(n=a.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&wg(n,s,a);else if(n.tag===19)wg(n,s,a);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break e;for(;n.sibling===null;){if(n.return===null||n.return===a)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(f){case"forwards":for(s=a.child,f=null;s!==null;)n=s.alternate,n!==null&&zo(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=a.child,a.child=null):(f=s.sibling,s.sibling=null),ed(a,!1,f,s,m,l);break;case"backwards":case"unstable_legacy-backwards":for(s=null,f=a.child,a.child=null;f!==null;){if(n=f.alternate,n!==null&&zo(n)===null){a.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}ed(a,!0,s,null,m,l);break;case"together":ed(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function Jn(n,a,s){if(n!==null&&(a.dependencies=n.dependencies),Ea|=a.lanes,(s&a.childLanes)===0)if(n!==null){if(Vi(n,a,s,!1),(s&a.childLanes)===0)return null}else return null;if(n!==null&&a.child!==n.child)throw Error(r(153));if(a.child!==null){for(n=a.child,s=Fn(n,n.pendingProps),a.child=s,s.return=a;n.sibling!==null;)n=n.sibling,s=s.sibling=Fn(n,n.pendingProps),s.return=a;s.sibling=null}return a.child}function td(n,a){return(n.lanes&a)!==0?!0:(n=n.dependencies,!!(n!==null&&Co(n)))}function O2(n,a,s){switch(a.tag){case 3:ye(a,a.stateNode.containerInfo),ba(a,rt,n.memoizedState.cache),Za();break;case 27:case 5:X(a);break;case 4:ye(a,a.stateNode.containerInfo);break;case 10:ba(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Tu(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(ja(a),a.flags|=128,null):(s&a.child.childLanes)!==0?xg(n,a,s):(ja(a),n=Jn(n,a,s),n!==null?n.sibling:null);ja(a);break;case 19:var f=(n.flags&128)!==0;if(l=(s&a.childLanes)!==0,l||(Vi(n,a,s,!1),l=(s&a.childLanes)!==0),f){if(l)return Sg(n,a,s);a.flags|=128}if(f=a.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Q(tt,tt.current),l)break;return null;case 22:return a.lanes=0,pg(n,a,s,a.pendingProps);case 24:ba(a,rt,n.memoizedState.cache)}return Jn(n,a,s)}function jg(n,a,s){if(n!==null)if(n.memoizedProps!==a.pendingProps)ot=!0;else{if(!td(n,s)&&(a.flags&128)===0)return ot=!1,O2(n,a,s);ot=(n.flags&131072)!==0}else ot=!1,Re&&(a.flags&1048576)!==0&&tm(a,qr,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(n=ai(a.elementType),a.type=n,typeof n=="function")su(n)?(l=oi(n,l),a.tag=1,a=vg(null,a,n,l,s)):(a.tag=0,a=Yu(null,a,n,l,s));else{if(n!=null){var f=n.$$typeof;if(f===L){a.tag=11,a=dg(null,a,n,l,s);break e}else if(f===F){a.tag=14,a=hg(null,a,n,l,s);break e}}throw a=Ne(n)||n,Error(r(306,a,""))}}return a;case 0:return Yu(n,a,a.type,a.pendingProps,s);case 1:return l=a.type,f=oi(l,a.pendingProps),vg(n,a,l,f,s);case 3:e:{if(ye(a,a.stateNode.containerInfo),n===null)throw Error(r(387));l=a.pendingProps;var m=a.memoizedState;f=m.element,wu(n,a),Qr(a,l,null,s);var b=a.memoizedState;if(l=b.cache,ba(a,rt,l),l!==m.cache&&mu(a,[rt],s,!0),Jr(),l=b.element,m.isDehydrated)if(m={element:l,isDehydrated:!1,cache:b.cache},a.updateQueue.baseState=m,a.memoizedState=m,a.flags&256){a=bg(n,a,l,s);break e}else if(l!==f){f=an(Error(r(424)),a),Fr(f),a=bg(n,a,l,s);break e}else{switch(n=a.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(Ke=cn(n.firstChild),yt=a,Re=!0,ya=null,on=!0,s=pm(a,null,l,s),a.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(Za(),l===f){a=Jn(n,a,s);break e}bt(n,a,l,s)}a=a.child}return a;case 26:return Ko(n,a),n===null?(s=M0(a.type,null,a.pendingProps,null))?a.memoizedState=s:Re||(s=a.type,n=a.pendingProps,l=ul(be.current).createElement(s),l[gt]=a,l[Rt]=n,xt(l,s,n),ft(l),a.stateNode=l):a.memoizedState=M0(a.type,n.memoizedProps,a.pendingProps,n.memoizedState),null;case 27:return X(a),n===null&&Re&&(l=a.stateNode=R0(a.type,a.pendingProps,be.current),yt=a,on=!0,f=Ke,Oa(a.type)?(Md=f,Ke=cn(l.firstChild)):Ke=f),bt(n,a,a.pendingProps.children,s),Ko(n,a),n===null&&(a.flags|=4194304),a.child;case 5:return n===null&&Re&&((f=l=Ke)&&(l=l5(l,a.type,a.pendingProps,on),l!==null?(a.stateNode=l,yt=a,Ke=cn(l.firstChild),on=!1,f=!0):f=!1),f||va(a)),X(a),f=a.type,m=a.pendingProps,b=n!==null?n.memoizedProps:null,l=m.children,Ad(f,m)?l=null:b!==null&&Ad(f,b)&&(a.flags|=32),a.memoizedState!==null&&(f=Cu(n,a,j2,null,null,s),vs._currentValue=f),Ko(n,a),bt(n,a,l,s),a.child;case 6:return n===null&&Re&&((n=s=Ke)&&(s=c5(s,a.pendingProps,on),s!==null?(a.stateNode=s,yt=a,Ke=null,n=!0):n=!1),n||va(a)),null;case 13:return xg(n,a,s);case 4:return ye(a,a.stateNode.containerInfo),l=a.pendingProps,n===null?a.child=ri(a,null,l,s):bt(n,a,l,s),a.child;case 11:return dg(n,a,a.type,a.pendingProps,s);case 7:return bt(n,a,a.pendingProps,s),a.child;case 8:return bt(n,a,a.pendingProps.children,s),a.child;case 12:return bt(n,a,a.pendingProps.children,s),a.child;case 10:return l=a.pendingProps,ba(a,a.type,l.value),bt(n,a,l.children,s),a.child;case 9:return f=a.type._context,l=a.pendingProps.children,ti(a),f=vt(f),l=l(f),a.flags|=1,bt(n,a,l,s),a.child;case 14:return hg(n,a,a.type,a.pendingProps,s);case 15:return fg(n,a,a.type,a.pendingProps,s);case 19:return Sg(n,a,s);case 31:return R2(n,a,s);case 22:return pg(n,a,s,a.pendingProps);case 24:return ti(a),l=vt(rt),n===null?(f=vu(),f===null&&(f=Ie,m=gu(),f.pooledCache=m,m.refCount++,m!==null&&(f.pooledCacheLanes|=s),f=m),a.memoizedState={parent:l,cache:f},xu(a),ba(a,rt,f)):((n.lanes&s)!==0&&(wu(n,a),Qr(a,null,null,s),Jr()),f=n.memoizedState,m=a.memoizedState,f.parent!==l?(f={parent:l,cache:l},a.memoizedState=f,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=f),ba(a,rt,l)):(l=m.cache,ba(a,rt,l),l!==f.cache&&mu(a,[rt],s,!0))),bt(n,a,a.pendingProps.children,s),a.child;case 29:throw a.pendingProps}throw Error(r(156,a.tag))}function Qn(n){n.flags|=4}function nd(n,a,s,l,f){if((a=(n.mode&32)!==0)&&(a=!1),a){if(n.flags|=16777216,(f&335544128)===f)if(n.stateNode.complete)n.flags|=8192;else if(Wg())n.flags|=8192;else throw ii=Oo,bu}else n.flags&=-16777217}function kg(n,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!P0(a))if(Wg())n.flags|=8192;else throw ii=Oo,bu}function Xo(n,a){a!==null&&(n.flags|=4),n.flags&16384&&(a=n.tag!==22?ap():536870912,n.lanes|=a,Qi|=a)}function is(n,a){if(!Re)switch(n.tailMode){case"hidden":a=n.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?a||n.tail===null?n.tail=null:n.tail.sibling=null:l.sibling=null}}function Ye(n){var a=n.alternate!==null&&n.alternate.child===n.child,s=0,l=0;if(a)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=l,n.childLanes=s,a}function D2(n,a,s){var l=a.pendingProps;switch(uu(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(a),null;case 1:return Ye(a),null;case 3:return s=a.stateNode,l=null,n!==null&&(l=n.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),Yn(rt),pe(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(n===null||n.child===null)&&(Pi(a)?Qn(a):n===null||n.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,hu())),Ye(a),null;case 26:var f=a.type,m=a.memoizedState;return n===null?(Qn(a),m!==null?(Ye(a),kg(a,m)):(Ye(a),nd(a,f,null,l,s))):m?m!==n.memoizedState?(Qn(a),Ye(a),kg(a,m)):(Ye(a),a.flags&=-16777217):(n=n.memoizedProps,n!==l&&Qn(a),Ye(a),nd(a,f,n,l,s)),null;case 27:if(te(a),s=be.current,f=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==l&&Qn(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ye(a),null}n=ie.current,Pi(a)?am(a):(n=R0(f,l,s),a.stateNode=n,Qn(a))}return Ye(a),null;case 5:if(te(a),f=a.type,n!==null&&a.stateNode!=null)n.memoizedProps!==l&&Qn(a);else{if(!l){if(a.stateNode===null)throw Error(r(166));return Ye(a),null}if(m=ie.current,Pi(a))am(a);else{var b=ul(be.current);switch(m){case 1:m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":m=b.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":m=b.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":m=b.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof l.is=="string"?b.createElement("select",{is:l.is}):b.createElement("select"),l.multiple?m.multiple=!0:l.size&&(m.size=l.size);break;default:m=typeof l.is=="string"?b.createElement(f,{is:l.is}):b.createElement(f)}}m[gt]=a,m[Rt]=l;e:for(b=a.child;b!==null;){if(b.tag===5||b.tag===6)m.appendChild(b.stateNode);else if(b.tag!==4&&b.tag!==27&&b.child!==null){b.child.return=b,b=b.child;continue}if(b===a)break e;for(;b.sibling===null;){if(b.return===null||b.return===a)break e;b=b.return}b.sibling.return=b.return,b=b.sibling}a.stateNode=m;e:switch(xt(m,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&Qn(a)}}return Ye(a),nd(a,a.type,n===null?null:n.memoizedProps,a.pendingProps,s),null;case 6:if(n&&a.stateNode!=null)n.memoizedProps!==l&&Qn(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(r(166));if(n=be.current,Pi(a)){if(n=a.stateNode,s=a.memoizedProps,l=null,f=yt,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}n[gt]=a,n=!!(n.nodeValue===s||l!==null&&l.suppressHydrationWarning===!0||x0(n.nodeValue,s)),n||va(a,!0)}else n=ul(n).createTextNode(l),n[gt]=a,a.stateNode=n}return Ye(a),null;case 31:if(s=a.memoizedState,n===null||n.memoizedState!==null){if(l=Pi(a),s!==null){if(n===null){if(!l)throw Error(r(318));if(n=a.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(r(557));n[gt]=a}else Za(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),n=!1}else s=hu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=s),n=!0;if(!n)return a.flags&256?(Kt(a),a):(Kt(a),null);if((a.flags&128)!==0)throw Error(r(558))}return Ye(a),null;case 13:if(l=a.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(f=Pi(a),l!==null&&l.dehydrated!==null){if(n===null){if(!f)throw Error(r(318));if(f=a.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[gt]=a}else Za(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;Ye(a),f=!1}else f=hu(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=f),f=!0;if(!f)return a.flags&256?(Kt(a),a):(Kt(a),null)}return Kt(a),(a.flags&128)!==0?(a.lanes=s,a):(s=l!==null,n=n!==null&&n.memoizedState!==null,s&&(l=a.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),m=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(m=l.memoizedState.cachePool.pool),m!==f&&(l.flags|=2048)),s!==n&&s&&(a.child.flags|=8192),Xo(a,a.updateQueue),Ye(a),null);case 4:return pe(),n===null&&kd(a.stateNode.containerInfo),Ye(a),null;case 10:return Yn(a.type),Ye(a),null;case 19:if(V(tt),l=a.memoizedState,l===null)return Ye(a),null;if(f=(a.flags&128)!==0,m=l.rendering,m===null)if(f)is(l,!1);else{if(Qe!==0||n!==null&&(n.flags&128)!==0)for(n=a.child;n!==null;){if(m=zo(n),m!==null){for(a.flags|=128,is(l,!1),n=m.updateQueue,a.updateQueue=n,Xo(a,n),a.subtreeFlags=0,n=s,s=a.child;s!==null;)Qp(s,n),s=s.sibling;return Q(tt,tt.current&1|2),Re&&Gn(a,l.treeForkCount),a.child}n=n.sibling}l.tail!==null&&Ht()>el&&(a.flags|=128,f=!0,is(l,!1),a.lanes=4194304)}else{if(!f)if(n=zo(m),n!==null){if(a.flags|=128,f=!0,n=n.updateQueue,a.updateQueue=n,Xo(a,n),is(l,!0),l.tail===null&&l.tailMode==="hidden"&&!m.alternate&&!Re)return Ye(a),null}else 2*Ht()-l.renderingStartTime>el&&s!==536870912&&(a.flags|=128,f=!0,is(l,!1),a.lanes=4194304);l.isBackwards?(m.sibling=a.child,a.child=m):(n=l.last,n!==null?n.sibling=m:a.child=m,l.last=m)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Ht(),n.sibling=null,s=tt.current,Q(tt,f?s&1|2:s&1),Re&&Gn(a,l.treeForkCount),n):(Ye(a),null);case 22:case 23:return Kt(a),_u(),l=a.memoizedState!==null,n!==null?n.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(s&536870912)!==0&&(a.flags&128)===0&&(Ye(a),a.subtreeFlags&6&&(a.flags|=8192)):Ye(a),s=a.updateQueue,s!==null&&Xo(a,s.retryQueue),s=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==s&&(a.flags|=2048),n!==null&&V(ni),null;case 24:return s=null,n!==null&&(s=n.memoizedState.cache),a.memoizedState.cache!==s&&(a.flags|=2048),Yn(rt),Ye(a),null;case 25:return null;case 30:return null}throw Error(r(156,a.tag))}function M2(n,a){switch(uu(a),a.tag){case 1:return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 3:return Yn(rt),pe(),n=a.flags,(n&65536)!==0&&(n&128)===0?(a.flags=n&-65537|128,a):null;case 26:case 27:case 5:return te(a),null;case 31:if(a.memoizedState!==null){if(Kt(a),a.alternate===null)throw Error(r(340));Za()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 13:if(Kt(a),n=a.memoizedState,n!==null&&n.dehydrated!==null){if(a.alternate===null)throw Error(r(340));Za()}return n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 19:return V(tt),null;case 4:return pe(),null;case 10:return Yn(a.type),null;case 22:case 23:return Kt(a),_u(),n!==null&&V(ni),n=a.flags,n&65536?(a.flags=n&-65537|128,a):null;case 24:return Yn(rt),null;case 25:return null;default:return null}}function _g(n,a){switch(uu(a),a.tag){case 3:Yn(rt),pe();break;case 26:case 27:case 5:te(a);break;case 4:pe();break;case 31:a.memoizedState!==null&&Kt(a);break;case 13:Kt(a);break;case 19:V(tt);break;case 10:Yn(a.type);break;case 22:case 23:Kt(a),_u(),n!==null&&V(ni);break;case 24:Yn(rt)}}function rs(n,a){try{var s=a.updateQueue,l=s!==null?s.lastEffect:null;if(l!==null){var f=l.next;s=f;do{if((s.tag&n)===n){l=void 0;var m=s.create,b=s.inst;l=m(),b.destroy=l}s=s.next}while(s!==f)}}catch(j){Pe(a,a.return,j)}}function _a(n,a,s){try{var l=a.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var m=f.next;l=m;do{if((l.tag&n)===n){var b=l.inst,j=b.destroy;if(j!==void 0){b.destroy=void 0,f=a;var A=s,U=j;try{U()}catch($){Pe(f,A,$)}}}l=l.next}while(l!==m)}}catch($){Pe(a,a.return,$)}}function Tg(n){var a=n.updateQueue;if(a!==null){var s=n.stateNode;try{gm(a,s)}catch(l){Pe(n,n.return,l)}}}function Eg(n,a,s){s.props=oi(n.type,n.memoizedProps),s.state=n.memoizedState;try{s.componentWillUnmount()}catch(l){Pe(n,a,l)}}function ss(n,a){try{var s=n.ref;if(s!==null){switch(n.tag){case 26:case 27:case 5:var l=n.stateNode;break;case 30:l=n.stateNode;break;default:l=n.stateNode}typeof s=="function"?n.refCleanup=s(l):s.current=l}}catch(f){Pe(n,a,f)}}function On(n,a){var s=n.ref,l=n.refCleanup;if(s!==null)if(typeof l=="function")try{l()}catch(f){Pe(n,a,f)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(f){Pe(n,a,f)}else s.current=null}function Cg(n){var a=n.type,s=n.memoizedProps,l=n.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":s.autoFocus&&l.focus();break e;case"img":s.src?l.src=s.src:s.srcSet&&(l.srcset=s.srcSet)}}catch(f){Pe(n,n.return,f)}}function ad(n,a,s){try{var l=n.stateNode;n5(l,n.type,s,a),l[Rt]=a}catch(f){Pe(n,n.return,f)}}function Ag(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Oa(n.type)||n.tag===4}function id(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Ag(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Oa(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,a,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(n,a):(a=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,a.appendChild(n),s=s._reactRootContainer,s!=null||a.onclick!==null||(a.onclick=In));else if(l!==4&&(l===27&&Oa(n.type)&&(s=n.stateNode,a=null),n=n.child,n!==null))for(rd(n,a,s),n=n.sibling;n!==null;)rd(n,a,s),n=n.sibling}function Wo(n,a,s){var l=n.tag;if(l===5||l===6)n=n.stateNode,a?s.insertBefore(n,a):s.appendChild(n);else if(l!==4&&(l===27&&Oa(n.type)&&(s=n.stateNode),n=n.child,n!==null))for(Wo(n,a,s),n=n.sibling;n!==null;)Wo(n,a,s),n=n.sibling}function Ng(n){var a=n.stateNode,s=n.memoizedProps;try{for(var l=n.type,f=a.attributes;f.length;)a.removeAttributeNode(f[0]);xt(a,l,s),a[gt]=n,a[Rt]=s}catch(m){Pe(n,n.return,m)}}var Zn=!1,lt=!1,sd=!1,Rg=typeof WeakSet=="function"?WeakSet:Set,pt=null;function L2(n,a){if(n=n.containerInfo,Ed=yl,n=Ip(n),Zc(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var l=s.getSelection&&s.getSelection();if(l&&l.rangeCount!==0){s=l.anchorNode;var f=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break e}var b=0,j=-1,A=-1,U=0,$=0,G=n,B=null;t:for(;;){for(var P;G!==s||f!==0&&G.nodeType!==3||(j=b+f),G!==m||l!==0&&G.nodeType!==3||(A=b+l),G.nodeType===3&&(b+=G.nodeValue.length),(P=G.firstChild)!==null;)B=G,G=P;for(;;){if(G===n)break t;if(B===s&&++U===f&&(j=b),B===m&&++$===l&&(A=b),(P=G.nextSibling)!==null)break;G=B,B=G.parentNode}G=P}s=j===-1||A===-1?null:{start:j,end:A}}else s=null}s=s||{start:0,end:0}}else s=null;for(Cd={focusedElem:n,selectionRange:s},yl=!1,pt=a;pt!==null;)if(a=pt,n=a.child,(a.subtreeFlags&1028)!==0&&n!==null)n.return=a,pt=n;else for(;pt!==null;){switch(a=pt,m=a.alternate,n=a.flags,a.tag){case 0:if((n&4)!==0&&(n=a.updateQueue,n=n!==null?n.events:null,n!==null))for(s=0;s<n.length;s++)f=n[s],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,s=a,f=m.memoizedProps,m=m.memoizedState,l=s.stateNode;try{var se=oi(s.type,f);n=l.getSnapshotBeforeUpdate(se,m),l.__reactInternalSnapshotBeforeUpdate=n}catch(ge){Pe(s,s.return,ge)}}break;case 3:if((n&1024)!==0){if(n=a.stateNode.containerInfo,s=n.nodeType,s===9)Rd(n);else if(s===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":Rd(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(r(163))}if(n=a.sibling,n!==null){n.return=a.return,pt=n;break}pt=a.return}}function Og(n,a,s){var l=s.flags;switch(s.tag){case 0:case 11:case 15:ta(n,s),l&4&&rs(5,s);break;case 1:if(ta(n,s),l&4)if(n=s.stateNode,a===null)try{n.componentDidMount()}catch(b){Pe(s,s.return,b)}else{var f=oi(s.type,a.memoizedProps);a=a.memoizedState;try{n.componentDidUpdate(f,a,n.__reactInternalSnapshotBeforeUpdate)}catch(b){Pe(s,s.return,b)}}l&64&&Tg(s),l&512&&ss(s,s.return);break;case 3:if(ta(n,s),l&64&&(n=s.updateQueue,n!==null)){if(a=null,s.child!==null)switch(s.child.tag){case 27:case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}try{gm(n,a)}catch(b){Pe(s,s.return,b)}}break;case 27:a===null&&l&4&&Ng(s);case 26:case 5:ta(n,s),a===null&&l&4&&Cg(s),l&512&&ss(s,s.return);break;case 12:ta(n,s);break;case 31:ta(n,s),l&4&&Lg(n,s);break;case 13:ta(n,s),l&4&&zg(n,s),l&64&&(n=s.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(s=q2.bind(null,s),u5(n,s))));break;case 22:if(l=s.memoizedState!==null||Zn,!l){a=a!==null&&a.memoizedState!==null||lt,f=Zn;var m=lt;Zn=l,(lt=a)&&!m?na(n,s,(s.subtreeFlags&8772)!==0):ta(n,s),Zn=f,lt=m}break;case 30:break;default:ta(n,s)}}function Dg(n){var a=n.alternate;a!==null&&(n.alternate=null,Dg(a)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(a=n.stateNode,a!==null&&zc(a)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var Xe=null,Dt=!1;function ea(n,a,s){for(s=s.child;s!==null;)Mg(n,a,s),s=s.sibling}function Mg(n,a,s){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(Nr,s)}catch{}switch(s.tag){case 26:lt||On(s,a),ea(n,a,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:lt||On(s,a);var l=Xe,f=Dt;Oa(s.type)&&(Xe=s.stateNode,Dt=!1),ea(n,a,s),ms(s.stateNode),Xe=l,Dt=f;break;case 5:lt||On(s,a);case 6:if(l=Xe,f=Dt,Xe=null,ea(n,a,s),Xe=l,Dt=f,Xe!==null)if(Dt)try{(Xe.nodeType===9?Xe.body:Xe.nodeName==="HTML"?Xe.ownerDocument.body:Xe).removeChild(s.stateNode)}catch(m){Pe(s,a,m)}else try{Xe.removeChild(s.stateNode)}catch(m){Pe(s,a,m)}break;case 18:Xe!==null&&(Dt?(n=Xe,T0(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,s.stateNode),sr(n)):T0(Xe,s.stateNode));break;case 4:l=Xe,f=Dt,Xe=s.stateNode.containerInfo,Dt=!0,ea(n,a,s),Xe=l,Dt=f;break;case 0:case 11:case 14:case 15:_a(2,s,a),lt||_a(4,s,a),ea(n,a,s);break;case 1:lt||(On(s,a),l=s.stateNode,typeof l.componentWillUnmount=="function"&&Eg(s,a,l)),ea(n,a,s);break;case 21:ea(n,a,s);break;case 22:lt=(l=lt)||s.memoizedState!==null,ea(n,a,s),lt=l;break;default:ea(n,a,s)}}function Lg(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{sr(n)}catch(s){Pe(a,a.return,s)}}}function zg(n,a){if(a.memoizedState===null&&(n=a.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{sr(n)}catch(s){Pe(a,a.return,s)}}function z2(n){switch(n.tag){case 31:case 13:case 19:var a=n.stateNode;return a===null&&(a=n.stateNode=new Rg),a;case 22:return n=n.stateNode,a=n._retryCache,a===null&&(a=n._retryCache=new Rg),a;default:throw Error(r(435,n.tag))}}function Jo(n,a){var s=z2(n);a.forEach(function(l){if(!s.has(l)){s.add(l);var f=F2.bind(null,n,l);l.then(f,f)}})}function Mt(n,a){var s=a.deletions;if(s!==null)for(var l=0;l<s.length;l++){var f=s[l],m=n,b=a,j=b;e:for(;j!==null;){switch(j.tag){case 27:if(Oa(j.type)){Xe=j.stateNode,Dt=!1;break e}break;case 5:Xe=j.stateNode,Dt=!1;break e;case 3:case 4:Xe=j.stateNode.containerInfo,Dt=!0;break e}j=j.return}if(Xe===null)throw Error(r(160));Mg(m,b,f),Xe=null,Dt=!1,m=f.alternate,m!==null&&(m.return=null),f.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)Ug(a,n),a=a.sibling}var yn=null;function Ug(n,a){var s=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Mt(a,n),Lt(n),l&4&&(_a(3,n,n.return),rs(3,n),_a(5,n,n.return));break;case 1:Mt(a,n),Lt(n),l&512&&(lt||s===null||On(s,s.return)),l&64&&Zn&&(n=n.updateQueue,n!==null&&(l=n.callbacks,l!==null&&(s=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=s===null?l:s.concat(l))));break;case 26:var f=yn;if(Mt(a,n),Lt(n),l&512&&(lt||s===null||On(s,s.return)),l&4){var m=s!==null?s.memoizedState:null;if(l=n.memoizedState,s===null)if(l===null)if(n.stateNode===null){e:{l=n.type,s=n.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":m=f.getElementsByTagName("title")[0],(!m||m[Dr]||m[gt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=f.createElement(l),f.head.insertBefore(m,f.querySelector("head > title"))),xt(m,l,s),m[gt]=n,ft(m),l=m;break e;case"link":var b=U0("link","href",f).get(l+(s.href||""));if(b){for(var j=0;j<b.length;j++)if(m=b[j],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){b.splice(j,1);break t}}m=f.createElement(l),xt(m,l,s),f.head.appendChild(m);break;case"meta":if(b=U0("meta","content",f).get(l+(s.content||""))){for(j=0;j<b.length;j++)if(m=b[j],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){b.splice(j,1);break t}}m=f.createElement(l),xt(m,l,s),f.head.appendChild(m);break;default:throw Error(r(468,l))}m[gt]=n,ft(m),l=m}n.stateNode=l}else B0(f,n.type,n.stateNode);else n.stateNode=z0(f,l,n.memoizedProps);else m!==l?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,l===null?B0(f,n.type,n.stateNode):z0(f,l,n.memoizedProps)):l===null&&n.stateNode!==null&&ad(n,n.memoizedProps,s.memoizedProps)}break;case 27:Mt(a,n),Lt(n),l&512&&(lt||s===null||On(s,s.return)),s!==null&&l&4&&ad(n,n.memoizedProps,s.memoizedProps);break;case 5:if(Mt(a,n),Lt(n),l&512&&(lt||s===null||On(s,s.return)),n.flags&32){f=n.stateNode;try{Ai(f,"")}catch(se){Pe(n,n.return,se)}}l&4&&n.stateNode!=null&&(f=n.memoizedProps,ad(n,f,s!==null?s.memoizedProps:f)),l&1024&&(sd=!0);break;case 6:if(Mt(a,n),Lt(n),l&4){if(n.stateNode===null)throw Error(r(162));l=n.memoizedProps,s=n.stateNode;try{s.nodeValue=l}catch(se){Pe(n,n.return,se)}}break;case 3:if(fl=null,f=yn,yn=dl(a.containerInfo),Mt(a,n),yn=f,Lt(n),l&4&&s!==null&&s.memoizedState.isDehydrated)try{sr(a.containerInfo)}catch(se){Pe(n,n.return,se)}sd&&(sd=!1,Bg(n));break;case 4:l=yn,yn=dl(n.stateNode.containerInfo),Mt(a,n),Lt(n),yn=l;break;case 12:Mt(a,n),Lt(n);break;case 31:Mt(a,n),Lt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Jo(n,l)));break;case 13:Mt(a,n),Lt(n),n.child.flags&8192&&n.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Zo=Ht()),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Jo(n,l)));break;case 22:f=n.memoizedState!==null;var A=s!==null&&s.memoizedState!==null,U=Zn,$=lt;if(Zn=U||f,lt=$||A,Mt(a,n),lt=$,Zn=U,Lt(n),l&8192)e:for(a=n.stateNode,a._visibility=f?a._visibility&-2:a._visibility|1,f&&(s===null||A||Zn||lt||li(n)),s=null,a=n;;){if(a.tag===5||a.tag===26){if(s===null){A=s=a;try{if(m=A.stateNode,f)b=m.style,typeof b.setProperty=="function"?b.setProperty("display","none","important"):b.display="none";else{j=A.stateNode;var G=A.memoizedProps.style,B=G!=null&&G.hasOwnProperty("display")?G.display:null;j.style.display=B==null||typeof B=="boolean"?"":(""+B).trim()}}catch(se){Pe(A,A.return,se)}}}else if(a.tag===6){if(s===null){A=a;try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(se){Pe(A,A.return,se)}}}else if(a.tag===18){if(s===null){A=a;try{var P=A.stateNode;f?E0(P,!0):E0(A.stateNode,!1)}catch(se){Pe(A,A.return,se)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===n)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break e;for(;a.sibling===null;){if(a.return===null||a.return===n)break e;s===a&&(s=null),a=a.return}s===a&&(s=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=n.updateQueue,l!==null&&(s=l.retryQueue,s!==null&&(l.retryQueue=null,Jo(n,s))));break;case 19:Mt(a,n),Lt(n),l&4&&(l=n.updateQueue,l!==null&&(n.updateQueue=null,Jo(n,l)));break;case 30:break;case 21:break;default:Mt(a,n),Lt(n)}}function Lt(n){var a=n.flags;if(a&2){try{for(var s,l=n.return;l!==null;){if(Ag(l)){s=l;break}l=l.return}if(s==null)throw Error(r(160));switch(s.tag){case 27:var f=s.stateNode,m=id(n);Wo(n,m,f);break;case 5:var b=s.stateNode;s.flags&32&&(Ai(b,""),s.flags&=-33);var j=id(n);Wo(n,j,b);break;case 3:case 4:var A=s.stateNode.containerInfo,U=id(n);rd(n,U,A);break;default:throw Error(r(161))}}catch($){Pe(n,n.return,$)}n.flags&=-3}a&4096&&(n.flags&=-4097)}function Bg(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var a=n;Bg(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),n=n.sibling}}function ta(n,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Og(n,a.alternate,a),a=a.sibling}function li(n){for(n=n.child;n!==null;){var a=n;switch(a.tag){case 0:case 11:case 14:case 15:_a(4,a,a.return),li(a);break;case 1:On(a,a.return);var s=a.stateNode;typeof s.componentWillUnmount=="function"&&Eg(a,a.return,s),li(a);break;case 27:ms(a.stateNode);case 26:case 5:On(a,a.return),li(a);break;case 22:a.memoizedState===null&&li(a);break;case 30:li(a);break;default:li(a)}n=n.sibling}}function na(n,a,s){for(s=s&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,f=n,m=a,b=m.flags;switch(m.tag){case 0:case 11:case 15:na(f,m,s),rs(4,m);break;case 1:if(na(f,m,s),l=m,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(U){Pe(l,l.return,U)}if(l=m,f=l.updateQueue,f!==null){var j=l.stateNode;try{var A=f.shared.hiddenCallbacks;if(A!==null)for(f.shared.hiddenCallbacks=null,f=0;f<A.length;f++)mm(A[f],j)}catch(U){Pe(l,l.return,U)}}s&&b&64&&Tg(m),ss(m,m.return);break;case 27:Ng(m);case 26:case 5:na(f,m,s),s&&l===null&&b&4&&Cg(m),ss(m,m.return);break;case 12:na(f,m,s);break;case 31:na(f,m,s),s&&b&4&&Lg(f,m);break;case 13:na(f,m,s),s&&b&4&&zg(f,m);break;case 22:m.memoizedState===null&&na(f,m,s),ss(m,m.return);break;case 30:break;default:na(f,m,s)}a=a.sibling}}function od(n,a){var s=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),n=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(n=a.memoizedState.cachePool.pool),n!==s&&(n!=null&&n.refCount++,s!=null&&Gr(s))}function ld(n,a){n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Gr(n))}function vn(n,a,s,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)Pg(n,a,s,l),a=a.sibling}function Pg(n,a,s,l){var f=a.flags;switch(a.tag){case 0:case 11:case 15:vn(n,a,s,l),f&2048&&rs(9,a);break;case 1:vn(n,a,s,l);break;case 3:vn(n,a,s,l),f&2048&&(n=null,a.alternate!==null&&(n=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==n&&(a.refCount++,n!=null&&Gr(n)));break;case 12:if(f&2048){vn(n,a,s,l),n=a.stateNode;try{var m=a.memoizedProps,b=m.id,j=m.onPostCommit;typeof j=="function"&&j(b,a.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(A){Pe(a,a.return,A)}}else vn(n,a,s,l);break;case 31:vn(n,a,s,l);break;case 13:vn(n,a,s,l);break;case 23:break;case 22:m=a.stateNode,b=a.alternate,a.memoizedState!==null?m._visibility&2?vn(n,a,s,l):os(n,a):m._visibility&2?vn(n,a,s,l):(m._visibility|=2,Xi(n,a,s,l,(a.subtreeFlags&10256)!==0||!1)),f&2048&&od(b,a);break;case 24:vn(n,a,s,l),f&2048&&ld(a.alternate,a);break;default:vn(n,a,s,l)}}function Xi(n,a,s,l,f){for(f=f&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var m=n,b=a,j=s,A=l,U=b.flags;switch(b.tag){case 0:case 11:case 15:Xi(m,b,j,A,f),rs(8,b);break;case 23:break;case 22:var $=b.stateNode;b.memoizedState!==null?$._visibility&2?Xi(m,b,j,A,f):os(m,b):($._visibility|=2,Xi(m,b,j,A,f)),f&&U&2048&&od(b.alternate,b);break;case 24:Xi(m,b,j,A,f),f&&U&2048&&ld(b.alternate,b);break;default:Xi(m,b,j,A,f)}a=a.sibling}}function os(n,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var s=n,l=a,f=l.flags;switch(l.tag){case 22:os(s,l),f&2048&&od(l.alternate,l);break;case 24:os(s,l),f&2048&&ld(l.alternate,l);break;default:os(s,l)}a=a.sibling}}var ls=8192;function Wi(n,a,s){if(n.subtreeFlags&ls)for(n=n.child;n!==null;)Vg(n,a,s),n=n.sibling}function Vg(n,a,s){switch(n.tag){case 26:Wi(n,a,s),n.flags&ls&&n.memoizedState!==null&&S5(s,yn,n.memoizedState,n.memoizedProps);break;case 5:Wi(n,a,s);break;case 3:case 4:var l=yn;yn=dl(n.stateNode.containerInfo),Wi(n,a,s),yn=l;break;case 22:n.memoizedState===null&&(l=n.alternate,l!==null&&l.memoizedState!==null?(l=ls,ls=16777216,Wi(n,a,s),ls=l):Wi(n,a,s));break;default:Wi(n,a,s)}}function Hg(n){var a=n.alternate;if(a!==null&&(n=a.child,n!==null)){a.child=null;do a=n.sibling,n.sibling=null,n=a;while(n!==null)}}function cs(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];pt=l,Ig(l,n)}Hg(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)$g(n),n=n.sibling}function $g(n){switch(n.tag){case 0:case 11:case 15:cs(n),n.flags&2048&&_a(9,n,n.return);break;case 3:cs(n);break;case 12:cs(n);break;case 22:var a=n.stateNode;n.memoizedState!==null&&a._visibility&2&&(n.return===null||n.return.tag!==13)?(a._visibility&=-3,Qo(n)):cs(n);break;default:cs(n)}}function Qo(n){var a=n.deletions;if((n.flags&16)!==0){if(a!==null)for(var s=0;s<a.length;s++){var l=a[s];pt=l,Ig(l,n)}Hg(n)}for(n=n.child;n!==null;){switch(a=n,a.tag){case 0:case 11:case 15:_a(8,a,a.return),Qo(a);break;case 22:s=a.stateNode,s._visibility&2&&(s._visibility&=-3,Qo(a));break;default:Qo(a)}n=n.sibling}}function Ig(n,a){for(;pt!==null;){var s=pt;switch(s.tag){case 0:case 11:case 15:_a(8,s,a);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var l=s.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Gr(s.memoizedState.cache)}if(l=s.child,l!==null)l.return=s,pt=l;else e:for(s=n;pt!==null;){l=pt;var f=l.sibling,m=l.return;if(Dg(l),l===s){pt=null;break e}if(f!==null){f.return=m,pt=f;break e}pt=m}}}var U2={getCacheForType:function(n){var a=vt(rt),s=a.data.get(n);return s===void 0&&(s=n(),a.data.set(n,s)),s},cacheSignal:function(){return vt(rt).controller.signal}},B2=typeof WeakMap=="function"?WeakMap:Map,Ue=0,Ie=null,Te=null,Ce=0,Be=0,Yt=null,Ta=!1,Ji=!1,cd=!1,aa=0,Qe=0,Ea=0,ci=0,ud=0,Xt=0,Qi=0,us=null,zt=null,dd=!1,Zo=0,qg=0,el=1/0,tl=null,Ca=null,dt=0,Aa=null,Zi=null,ia=0,hd=0,fd=null,Fg=null,ds=0,pd=null;function Wt(){return(Ue&2)!==0&&Ce!==0?Ce&-Ce:C.T!==null?xd():op()}function Gg(){if(Xt===0)if((Ce&536870912)===0||Re){var n=lo;lo<<=1,(lo&3932160)===0&&(lo=262144),Xt=n}else Xt=536870912;return n=Gt.current,n!==null&&(n.flags|=32),Xt}function Ut(n,a,s){(n===Ie&&(Be===2||Be===9)||n.cancelPendingCommit!==null)&&(er(n,0),Na(n,Ce,Xt,!1)),Or(n,s),((Ue&2)===0||n!==Ie)&&(n===Ie&&((Ue&2)===0&&(ci|=s),Qe===4&&Na(n,Ce,Xt,!1)),Dn(n))}function Kg(n,a,s){if((Ue&6)!==0)throw Error(r(327));var l=!s&&(a&127)===0&&(a&n.expiredLanes)===0||Rr(n,a),f=l?H2(n,a):gd(n,a,!0),m=l;do{if(f===0){Ji&&!l&&Na(n,a,0,!1);break}else{if(s=n.current.alternate,m&&!P2(s)){f=gd(n,a,!1),m=!1;continue}if(f===2){if(m=a,n.errorRecoveryDisabledLanes&m)var b=0;else b=n.pendingLanes&-536870913,b=b!==0?b:b&536870912?536870912:0;if(b!==0){a=b;e:{var j=n;f=us;var A=j.current.memoizedState.isDehydrated;if(A&&(er(j,b).flags|=256),b=gd(j,b,!1),b!==2){if(cd&&!A){j.errorRecoveryDisabledLanes|=m,ci|=m,f=4;break e}m=zt,zt=f,m!==null&&(zt===null?zt=m:zt.push.apply(zt,m))}f=b}if(m=!1,f!==2)continue}}if(f===1){er(n,0),Na(n,a,0,!0);break}e:{switch(l=n,m=f,m){case 0:case 1:throw Error(r(345));case 4:if((a&4194048)!==a)break;case 6:Na(l,a,Xt,!Ta);break e;case 2:zt=null;break;case 3:case 5:break;default:throw Error(r(329))}if((a&62914560)===a&&(f=Zo+300-Ht(),10<f)){if(Na(l,a,Xt,!Ta),uo(l,0,!0)!==0)break e;ia=a,l.timeoutHandle=k0(Yg.bind(null,l,s,zt,tl,dd,a,Xt,ci,Qi,Ta,m,"Throttled",-0,0),f);break e}Yg(l,s,zt,tl,dd,a,Xt,ci,Qi,Ta,m,null,-0,0)}}break}while(!0);Dn(n)}function Yg(n,a,s,l,f,m,b,j,A,U,$,G,B,P){if(n.timeoutHandle=-1,G=a.subtreeFlags,G&8192||(G&16785408)===16785408){G={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:In},Vg(a,m,G);var se=(m&62914560)===m?Zo-Ht():(m&4194048)===m?qg-Ht():0;if(se=j5(G,se),se!==null){ia=m,n.cancelPendingCommit=se(n0.bind(null,n,a,m,s,l,f,b,j,A,$,G,null,B,P)),Na(n,m,b,!U);return}}n0(n,a,m,s,l,f,b,j,A)}function P2(n){for(var a=n;;){var s=a.tag;if((s===0||s===11||s===15)&&a.flags&16384&&(s=a.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var l=0;l<s.length;l++){var f=s[l],m=f.getSnapshot;f=f.value;try{if(!qt(m(),f))return!1}catch{return!1}}if(s=a.child,a.subtreeFlags&16384&&s!==null)s.return=a,a=s;else{if(a===n)break;for(;a.sibling===null;){if(a.return===null||a.return===n)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Na(n,a,s,l){a&=~ud,a&=~ci,n.suspendedLanes|=a,n.pingedLanes&=~a,l&&(n.warmLanes|=a),l=n.expirationTimes;for(var f=a;0<f;){var m=31-It(f),b=1<<m;l[m]=-1,f&=~b}s!==0&&ip(n,s,a)}function nl(){return(Ue&6)===0?(hs(0),!1):!0}function md(){if(Te!==null){if(Be===0)var n=Te.return;else n=Te,Kn=ei=null,Ru(n),qi=null,Yr=0,n=Te;for(;n!==null;)_g(n.alternate,n),n=n.return;Te=null}}function er(n,a){var s=n.timeoutHandle;s!==-1&&(n.timeoutHandle=-1,r5(s)),s=n.cancelPendingCommit,s!==null&&(n.cancelPendingCommit=null,s()),ia=0,md(),Ie=n,Te=s=Fn(n.current,null),Ce=a,Be=0,Yt=null,Ta=!1,Ji=Rr(n,a),cd=!1,Qi=Xt=ud=ci=Ea=Qe=0,zt=us=null,dd=!1,(a&8)!==0&&(a|=a&32);var l=n.entangledLanes;if(l!==0)for(n=n.entanglements,l&=a;0<l;){var f=31-It(l),m=1<<f;a|=n[f],l&=~m}return aa=a,jo(),s}function Xg(n,a){Se=null,C.H=ns,a===Ii||a===Ro?(a=dm(),Be=3):a===bu?(a=dm(),Be=4):Be=a===Ku?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Yt=a,Te===null&&(Qe=1,Fo(n,an(a,n.current)))}function Wg(){var n=Gt.current;return n===null?!0:(Ce&4194048)===Ce?ln===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?n===ln:!1}function Jg(){var n=C.H;return C.H=ns,n===null?ns:n}function Qg(){var n=C.A;return C.A=U2,n}function al(){Qe=4,Ta||(Ce&4194048)!==Ce&&Gt.current!==null||(Ji=!0),(Ea&134217727)===0&&(ci&134217727)===0||Ie===null||Na(Ie,Ce,Xt,!1)}function gd(n,a,s){var l=Ue;Ue|=2;var f=Jg(),m=Qg();(Ie!==n||Ce!==a)&&(tl=null,er(n,a)),a=!1;var b=Qe;e:do try{if(Be!==0&&Te!==null){var j=Te,A=Yt;switch(Be){case 8:md(),b=6;break e;case 3:case 2:case 9:case 6:Gt.current===null&&(a=!0);var U=Be;if(Be=0,Yt=null,tr(n,j,A,U),s&&Ji){b=0;break e}break;default:U=Be,Be=0,Yt=null,tr(n,j,A,U)}}V2(),b=Qe;break}catch($){Xg(n,$)}while(!0);return a&&n.shellSuspendCounter++,Kn=ei=null,Ue=l,C.H=f,C.A=m,Te===null&&(Ie=null,Ce=0,jo()),b}function V2(){for(;Te!==null;)Zg(Te)}function H2(n,a){var s=Ue;Ue|=2;var l=Jg(),f=Qg();Ie!==n||Ce!==a?(tl=null,el=Ht()+500,er(n,a)):Ji=Rr(n,a);e:do try{if(Be!==0&&Te!==null){a=Te;var m=Yt;t:switch(Be){case 1:Be=0,Yt=null,tr(n,a,m,1);break;case 2:case 9:if(cm(m)){Be=0,Yt=null,e0(a);break}a=function(){Be!==2&&Be!==9||Ie!==n||(Be=7),Dn(n)},m.then(a,a);break e;case 3:Be=7;break e;case 4:Be=5;break e;case 7:cm(m)?(Be=0,Yt=null,e0(a)):(Be=0,Yt=null,tr(n,a,m,7));break;case 5:var b=null;switch(Te.tag){case 26:b=Te.memoizedState;case 5:case 27:var j=Te;if(b?P0(b):j.stateNode.complete){Be=0,Yt=null;var A=j.sibling;if(A!==null)Te=A;else{var U=j.return;U!==null?(Te=U,il(U)):Te=null}break t}}Be=0,Yt=null,tr(n,a,m,5);break;case 6:Be=0,Yt=null,tr(n,a,m,6);break;case 8:md(),Qe=6;break e;default:throw Error(r(462))}}$2();break}catch($){Xg(n,$)}while(!0);return Kn=ei=null,C.H=l,C.A=f,Ue=s,Te!==null?0:(Ie=null,Ce=0,jo(),Qe)}function $2(){for(;Te!==null&&!dw();)Zg(Te)}function Zg(n){var a=jg(n.alternate,n,aa);n.memoizedProps=n.pendingProps,a===null?il(n):Te=a}function e0(n){var a=n,s=a.alternate;switch(a.tag){case 15:case 0:a=yg(s,a,a.pendingProps,a.type,void 0,Ce);break;case 11:a=yg(s,a,a.pendingProps,a.type.render,a.ref,Ce);break;case 5:Ru(a);default:_g(s,a),a=Te=Qp(a,aa),a=jg(s,a,aa)}n.memoizedProps=n.pendingProps,a===null?il(n):Te=a}function tr(n,a,s,l){Kn=ei=null,Ru(a),qi=null,Yr=0;var f=a.return;try{if(N2(n,f,a,s,Ce)){Qe=1,Fo(n,an(s,n.current)),Te=null;return}}catch(m){if(f!==null)throw Te=f,m;Qe=1,Fo(n,an(s,n.current)),Te=null;return}a.flags&32768?(Re||l===1?n=!0:Ji||(Ce&536870912)!==0?n=!1:(Ta=n=!0,(l===2||l===9||l===3||l===6)&&(l=Gt.current,l!==null&&l.tag===13&&(l.flags|=16384))),t0(a,n)):il(a)}function il(n){var a=n;do{if((a.flags&32768)!==0){t0(a,Ta);return}n=a.return;var s=D2(a.alternate,a,aa);if(s!==null){Te=s;return}if(a=a.sibling,a!==null){Te=a;return}Te=a=n}while(a!==null);Qe===0&&(Qe=5)}function t0(n,a){do{var s=M2(n.alternate,n);if(s!==null){s.flags&=32767,Te=s;return}if(s=n.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!a&&(n=n.sibling,n!==null)){Te=n;return}Te=n=s}while(n!==null);Qe=6,Te=null}function n0(n,a,s,l,f,m,b,j,A){n.cancelPendingCommit=null;do rl();while(dt!==0);if((Ue&6)!==0)throw Error(r(327));if(a!==null){if(a===n.current)throw Error(r(177));if(m=a.lanes|a.childLanes,m|=iu,ww(n,s,m,b,j,A),n===Ie&&(Te=Ie=null,Ce=0),Zi=a,Aa=n,ia=s,hd=m,fd=f,Fg=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,G2(so,function(){return o0(),null})):(n.callbackNode=null,n.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=C.T,C.T=null,f=I.p,I.p=2,b=Ue,Ue|=4;try{L2(n,a,s)}finally{Ue=b,I.p=f,C.T=l}}dt=1,a0(),i0(),r0()}}function a0(){if(dt===1){dt=0;var n=Aa,a=Zi,s=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||s){s=C.T,C.T=null;var l=I.p;I.p=2;var f=Ue;Ue|=4;try{Ug(a,n);var m=Cd,b=Ip(n.containerInfo),j=m.focusedElem,A=m.selectionRange;if(b!==j&&j&&j.ownerDocument&&$p(j.ownerDocument.documentElement,j)){if(A!==null&&Zc(j)){var U=A.start,$=A.end;if($===void 0&&($=U),"selectionStart"in j)j.selectionStart=U,j.selectionEnd=Math.min($,j.value.length);else{var G=j.ownerDocument||document,B=G&&G.defaultView||window;if(B.getSelection){var P=B.getSelection(),se=j.textContent.length,ge=Math.min(A.start,se),$e=A.end===void 0?ge:Math.min(A.end,se);!P.extend&&ge>$e&&(b=$e,$e=ge,ge=b);var M=Hp(j,ge),D=Hp(j,$e);if(M&&D&&(P.rangeCount!==1||P.anchorNode!==M.node||P.anchorOffset!==M.offset||P.focusNode!==D.node||P.focusOffset!==D.offset)){var z=G.createRange();z.setStart(M.node,M.offset),P.removeAllRanges(),ge>$e?(P.addRange(z),P.extend(D.node,D.offset)):(z.setEnd(D.node,D.offset),P.addRange(z))}}}}for(G=[],P=j;P=P.parentNode;)P.nodeType===1&&G.push({element:P,left:P.scrollLeft,top:P.scrollTop});for(typeof j.focus=="function"&&j.focus(),j=0;j<G.length;j++){var q=G[j];q.element.scrollLeft=q.left,q.element.scrollTop=q.top}}yl=!!Ed,Cd=Ed=null}finally{Ue=f,I.p=l,C.T=s}}n.current=a,dt=2}}function i0(){if(dt===2){dt=0;var n=Aa,a=Zi,s=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||s){s=C.T,C.T=null;var l=I.p;I.p=2;var f=Ue;Ue|=4;try{Og(n,a.alternate,a)}finally{Ue=f,I.p=l,C.T=s}}dt=3}}function r0(){if(dt===4||dt===3){dt=0,hw();var n=Aa,a=Zi,s=ia,l=Fg;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?dt=5:(dt=0,Zi=Aa=null,s0(n,n.pendingLanes));var f=n.pendingLanes;if(f===0&&(Ca=null),Mc(s),a=a.stateNode,$t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(Nr,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=C.T,f=I.p,I.p=2,C.T=null;try{for(var m=n.onRecoverableError,b=0;b<l.length;b++){var j=l[b];m(j.value,{componentStack:j.stack})}}finally{C.T=a,I.p=f}}(ia&3)!==0&&rl(),Dn(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===pd?ds++:(ds=0,pd=n):ds=0,hs(0)}}function s0(n,a){(n.pooledCacheLanes&=a)===0&&(a=n.pooledCache,a!=null&&(n.pooledCache=null,Gr(a)))}function rl(){return a0(),i0(),r0(),o0()}function o0(){if(dt!==5)return!1;var n=Aa,a=hd;hd=0;var s=Mc(ia),l=C.T,f=I.p;try{I.p=32>s?32:s,C.T=null,s=fd,fd=null;var m=Aa,b=ia;if(dt=0,Zi=Aa=null,ia=0,(Ue&6)!==0)throw Error(r(331));var j=Ue;if(Ue|=4,$g(m.current),Pg(m,m.current,b,s),Ue=j,hs(0,!1),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(Nr,m)}catch{}return!0}finally{I.p=f,C.T=l,s0(n,a)}}function l0(n,a,s){a=an(s,a),a=Gu(n.stateNode,a,2),n=Sa(n,a,2),n!==null&&(Or(n,2),Dn(n))}function Pe(n,a,s){if(n.tag===3)l0(n,n,s);else for(;a!==null;){if(a.tag===3){l0(a,n,s);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Ca===null||!Ca.has(l))){n=an(s,n),s=cg(2),l=Sa(a,s,2),l!==null&&(ug(s,l,a,n),Or(l,2),Dn(l));break}}a=a.return}}function yd(n,a,s){var l=n.pingCache;if(l===null){l=n.pingCache=new B2;var f=new Set;l.set(a,f)}else f=l.get(a),f===void 0&&(f=new Set,l.set(a,f));f.has(s)||(cd=!0,f.add(s),n=I2.bind(null,n,a,s),a.then(n,n))}function I2(n,a,s){var l=n.pingCache;l!==null&&l.delete(a),n.pingedLanes|=n.suspendedLanes&s,n.warmLanes&=~s,Ie===n&&(Ce&s)===s&&(Qe===4||Qe===3&&(Ce&62914560)===Ce&&300>Ht()-Zo?(Ue&2)===0&&er(n,0):ud|=s,Qi===Ce&&(Qi=0)),Dn(n)}function c0(n,a){a===0&&(a=ap()),n=Ja(n,a),n!==null&&(Or(n,a),Dn(n))}function q2(n){var a=n.memoizedState,s=0;a!==null&&(s=a.retryLane),c0(n,s)}function F2(n,a){var s=0;switch(n.tag){case 31:case 13:var l=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:l=n.stateNode;break;case 22:l=n.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(a),c0(n,s)}function G2(n,a){return Nc(n,a)}var sl=null,nr=null,vd=!1,ol=!1,bd=!1,Ra=0;function Dn(n){n!==nr&&n.next===null&&(nr===null?sl=nr=n:nr=nr.next=n),ol=!0,vd||(vd=!0,Y2())}function hs(n,a){if(!bd&&ol){bd=!0;do for(var s=!1,l=sl;l!==null;){if(n!==0){var f=l.pendingLanes;if(f===0)var m=0;else{var b=l.suspendedLanes,j=l.pingedLanes;m=(1<<31-It(42|n)+1)-1,m&=f&~(b&~j),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,f0(l,m))}else m=Ce,m=uo(l,l===Ie?m:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(m&3)===0||Rr(l,m)||(s=!0,f0(l,m));l=l.next}while(s);bd=!1}}function K2(){u0()}function u0(){ol=vd=!1;var n=0;Ra!==0&&i5()&&(n=Ra);for(var a=Ht(),s=null,l=sl;l!==null;){var f=l.next,m=d0(l,a);m===0?(l.next=null,s===null?sl=f:s.next=f,f===null&&(nr=s)):(s=l,(n!==0||(m&3)!==0)&&(ol=!0)),l=f}dt!==0&&dt!==5||hs(n),Ra!==0&&(Ra=0)}function d0(n,a){for(var s=n.suspendedLanes,l=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var b=31-It(m),j=1<<b,A=f[b];A===-1?((j&s)===0||(j&l)!==0)&&(f[b]=xw(j,a)):A<=a&&(n.expiredLanes|=j),m&=~j}if(a=Ie,s=Ce,s=uo(n,n===a?s:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l=n.callbackNode,s===0||n===a&&(Be===2||Be===9)||n.cancelPendingCommit!==null)return l!==null&&l!==null&&Rc(l),n.callbackNode=null,n.callbackPriority=0;if((s&3)===0||Rr(n,s)){if(a=s&-s,a===n.callbackPriority)return a;switch(l!==null&&Rc(l),Mc(s)){case 2:case 8:s=tp;break;case 32:s=so;break;case 268435456:s=np;break;default:s=so}return l=h0.bind(null,n),s=Nc(s,l),n.callbackPriority=a,n.callbackNode=s,a}return l!==null&&l!==null&&Rc(l),n.callbackPriority=2,n.callbackNode=null,2}function h0(n,a){if(dt!==0&&dt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var s=n.callbackNode;if(rl()&&n.callbackNode!==s)return null;var l=Ce;return l=uo(n,n===Ie?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),l===0?null:(Kg(n,l,a),d0(n,Ht()),n.callbackNode!=null&&n.callbackNode===s?h0.bind(null,n):null)}function f0(n,a){if(rl())return null;Kg(n,a,!0)}function Y2(){s5(function(){(Ue&6)!==0?Nc(ep,K2):u0()})}function xd(){if(Ra===0){var n=Hi;n===0&&(n=oo,oo<<=1,(oo&261888)===0&&(oo=256)),Ra=n}return Ra}function p0(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:mo(""+n)}function m0(n,a){var s=a.ownerDocument.createElement("input");return s.name=a.name,s.value=a.value,n.id&&s.setAttribute("form",n.id),a.parentNode.insertBefore(s,a),n=new FormData(n),s.parentNode.removeChild(s),n}function X2(n,a,s,l,f){if(a==="submit"&&s&&s.stateNode===f){var m=p0((f[Rt]||null).action),b=l.submitter;b&&(a=(a=b[Rt]||null)?p0(a.formAction):b.getAttribute("formAction"),a!==null&&(m=a,b=null));var j=new bo("action","action",null,l,f);n.push({event:j,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ra!==0){var A=b?m0(f,b):new FormData(f);Vu(s,{pending:!0,data:A,method:f.method,action:m},null,A)}}else typeof m=="function"&&(j.preventDefault(),A=b?m0(f,b):new FormData(f),Vu(s,{pending:!0,data:A,method:f.method,action:m},m,A))},currentTarget:f}]})}}for(var wd=0;wd<au.length;wd++){var Sd=au[wd],W2=Sd.toLowerCase(),J2=Sd[0].toUpperCase()+Sd.slice(1);gn(W2,"on"+J2)}gn(Gp,"onAnimationEnd"),gn(Kp,"onAnimationIteration"),gn(Yp,"onAnimationStart"),gn("dblclick","onDoubleClick"),gn("focusin","onFocus"),gn("focusout","onBlur"),gn(f2,"onTransitionRun"),gn(p2,"onTransitionStart"),gn(m2,"onTransitionCancel"),gn(Xp,"onTransitionEnd"),Ei("onMouseEnter",["mouseout","mouseover"]),Ei("onMouseLeave",["mouseout","mouseover"]),Ei("onPointerEnter",["pointerout","pointerover"]),Ei("onPointerLeave",["pointerout","pointerover"]),Ka("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ka("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ka("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ka("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ka("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Q2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fs));function g0(n,a){a=(a&4)!==0;for(var s=0;s<n.length;s++){var l=n[s],f=l.event;l=l.listeners;e:{var m=void 0;if(a)for(var b=l.length-1;0<=b;b--){var j=l[b],A=j.instance,U=j.currentTarget;if(j=j.listener,A!==m&&f.isPropagationStopped())break e;m=j,f.currentTarget=U;try{m(f)}catch($){So($)}f.currentTarget=null,m=A}else for(b=0;b<l.length;b++){if(j=l[b],A=j.instance,U=j.currentTarget,j=j.listener,A!==m&&f.isPropagationStopped())break e;m=j,f.currentTarget=U;try{m(f)}catch($){So($)}f.currentTarget=null,m=A}}}}function Ee(n,a){var s=a[Lc];s===void 0&&(s=a[Lc]=new Set);var l=n+"__bubble";s.has(l)||(y0(a,n,2,!1),s.add(l))}function jd(n,a,s){var l=0;a&&(l|=4),y0(s,n,l,a)}var ll="_reactListening"+Math.random().toString(36).slice(2);function kd(n){if(!n[ll]){n[ll]=!0,up.forEach(function(s){s!=="selectionchange"&&(Q2.has(s)||jd(s,!1,n),jd(s,!0,n))});var a=n.nodeType===9?n:n.ownerDocument;a===null||a[ll]||(a[ll]=!0,jd("selectionchange",!1,a))}}function y0(n,a,s,l){switch(G0(a)){case 2:var f=T5;break;case 8:f=E5;break;default:f=Pd}s=f.bind(null,a,s,n),f=void 0,!qc||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(f=!0),l?f!==void 0?n.addEventListener(a,s,{capture:!0,passive:f}):n.addEventListener(a,s,!0):f!==void 0?n.addEventListener(a,s,{passive:f}):n.addEventListener(a,s,!1)}function _d(n,a,s,l,f){var m=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var b=l.tag;if(b===3||b===4){var j=l.stateNode.containerInfo;if(j===f)break;if(b===4)for(b=l.return;b!==null;){var A=b.tag;if((A===3||A===4)&&b.stateNode.containerInfo===f)return;b=b.return}for(;j!==null;){if(b=ki(j),b===null)return;if(A=b.tag,A===5||A===6||A===26||A===27){l=m=b;continue e}j=j.parentNode}}l=l.return}Sp(function(){var U=m,$=$c(s),G=[];e:{var B=Wp.get(n);if(B!==void 0){var P=bo,se=n;switch(n){case"keypress":if(yo(s)===0)break e;case"keydown":case"keyup":P=Fw;break;case"focusin":se="focus",P=Yc;break;case"focusout":se="blur",P=Yc;break;case"beforeblur":case"afterblur":P=Yc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":P=_p;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":P=Dw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":P=Yw;break;case Gp:case Kp:case Yp:P=zw;break;case Xp:P=Ww;break;case"scroll":case"scrollend":P=Rw;break;case"wheel":P=Qw;break;case"copy":case"cut":case"paste":P=Bw;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":P=Ep;break;case"toggle":case"beforetoggle":P=e2}var ge=(a&4)!==0,$e=!ge&&(n==="scroll"||n==="scrollend"),M=ge?B!==null?B+"Capture":null:B;ge=[];for(var D=U,z;D!==null;){var q=D;if(z=q.stateNode,q=q.tag,q!==5&&q!==26&&q!==27||z===null||M===null||(q=Lr(D,M),q!=null&&ge.push(ps(D,q,z))),$e)break;D=D.return}0<ge.length&&(B=new P(B,se,null,s,$),G.push({event:B,listeners:ge}))}}if((a&7)===0){e:{if(B=n==="mouseover"||n==="pointerover",P=n==="mouseout"||n==="pointerout",B&&s!==Hc&&(se=s.relatedTarget||s.fromElement)&&(ki(se)||se[ji]))break e;if((P||B)&&(B=$.window===$?$:(B=$.ownerDocument)?B.defaultView||B.parentWindow:window,P?(se=s.relatedTarget||s.toElement,P=U,se=se?ki(se):null,se!==null&&($e=c(se),ge=se.tag,se!==$e||ge!==5&&ge!==27&&ge!==6)&&(se=null)):(P=null,se=U),P!==se)){if(ge=_p,q="onMouseLeave",M="onMouseEnter",D="mouse",(n==="pointerout"||n==="pointerover")&&(ge=Ep,q="onPointerLeave",M="onPointerEnter",D="pointer"),$e=P==null?B:Mr(P),z=se==null?B:Mr(se),B=new ge(q,D+"leave",P,s,$),B.target=$e,B.relatedTarget=z,q=null,ki($)===U&&(ge=new ge(M,D+"enter",se,s,$),ge.target=z,ge.relatedTarget=$e,q=ge),$e=q,P&&se)t:{for(ge=Z2,M=P,D=se,z=0,q=M;q;q=ge(q))z++;q=0;for(var he=D;he;he=ge(he))q++;for(;0<z-q;)M=ge(M),z--;for(;0<q-z;)D=ge(D),q--;for(;z--;){if(M===D||D!==null&&M===D.alternate){ge=M;break t}M=ge(M),D=ge(D)}ge=null}else ge=null;P!==null&&v0(G,B,P,ge,!1),se!==null&&$e!==null&&v0(G,$e,se,ge,!0)}}e:{if(B=U?Mr(U):window,P=B.nodeName&&B.nodeName.toLowerCase(),P==="select"||P==="input"&&B.type==="file")var Le=Lp;else if(Dp(B))if(zp)Le=u2;else{Le=l2;var ue=o2}else P=B.nodeName,!P||P.toLowerCase()!=="input"||B.type!=="checkbox"&&B.type!=="radio"?U&&Vc(U.elementType)&&(Le=Lp):Le=c2;if(Le&&(Le=Le(n,U))){Mp(G,Le,s,$);break e}ue&&ue(n,B,U),n==="focusout"&&U&&B.type==="number"&&U.memoizedProps.value!=null&&Pc(B,"number",B.value)}switch(ue=U?Mr(U):window,n){case"focusin":(Dp(ue)||ue.contentEditable==="true")&&(Di=ue,eu=U,Ir=null);break;case"focusout":Ir=eu=Di=null;break;case"mousedown":tu=!0;break;case"contextmenu":case"mouseup":case"dragend":tu=!1,qp(G,s,$);break;case"selectionchange":if(h2)break;case"keydown":case"keyup":qp(G,s,$)}var ke;if(Wc)e:{switch(n){case"compositionstart":var Ae="onCompositionStart";break e;case"compositionend":Ae="onCompositionEnd";break e;case"compositionupdate":Ae="onCompositionUpdate";break e}Ae=void 0}else Oi?Rp(n,s)&&(Ae="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(Ae="onCompositionStart");Ae&&(Cp&&s.locale!=="ko"&&(Oi||Ae!=="onCompositionStart"?Ae==="onCompositionEnd"&&Oi&&(ke=jp()):(ma=$,Fc="value"in ma?ma.value:ma.textContent,Oi=!0)),ue=cl(U,Ae),0<ue.length&&(Ae=new Tp(Ae,n,null,s,$),G.push({event:Ae,listeners:ue}),ke?Ae.data=ke:(ke=Op(s),ke!==null&&(Ae.data=ke)))),(ke=n2?a2(n,s):i2(n,s))&&(Ae=cl(U,"onBeforeInput"),0<Ae.length&&(ue=new Tp("onBeforeInput","beforeinput",null,s,$),G.push({event:ue,listeners:Ae}),ue.data=ke)),X2(G,n,U,s,$)}g0(G,a)})}function ps(n,a,s){return{instance:n,listener:a,currentTarget:s}}function cl(n,a){for(var s=a+"Capture",l=[];n!==null;){var f=n,m=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||m===null||(f=Lr(n,s),f!=null&&l.unshift(ps(n,f,m)),f=Lr(n,a),f!=null&&l.push(ps(n,f,m))),n.tag===3)return l;n=n.return}return[]}function Z2(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function v0(n,a,s,l,f){for(var m=a._reactName,b=[];s!==null&&s!==l;){var j=s,A=j.alternate,U=j.stateNode;if(j=j.tag,A!==null&&A===l)break;j!==5&&j!==26&&j!==27||U===null||(A=U,f?(U=Lr(s,m),U!=null&&b.unshift(ps(s,U,A))):f||(U=Lr(s,m),U!=null&&b.push(ps(s,U,A)))),s=s.return}b.length!==0&&n.push({event:a,listeners:b})}var e5=/\r\n?/g,t5=/\u0000|\uFFFD/g;function b0(n){return(typeof n=="string"?n:""+n).replace(e5,`
`).replace(t5,"")}function x0(n,a){return a=b0(a),b0(n)===a}function He(n,a,s,l,f,m){switch(s){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Ai(n,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Ai(n,""+l);break;case"className":fo(n,"class",l);break;case"tabIndex":fo(n,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":fo(n,s,l);break;case"style":xp(n,l,m);break;case"data":if(a!=="object"){fo(n,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||s!=="href")){n.removeAttribute(s);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=mo(""+l),n.setAttribute(s,l);break;case"action":case"formAction":if(typeof l=="function"){n.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(a!=="input"&&He(n,a,"name",f.name,f,null),He(n,a,"formEncType",f.formEncType,f,null),He(n,a,"formMethod",f.formMethod,f,null),He(n,a,"formTarget",f.formTarget,f,null)):(He(n,a,"encType",f.encType,f,null),He(n,a,"method",f.method,f,null),He(n,a,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){n.removeAttribute(s);break}l=mo(""+l),n.setAttribute(s,l);break;case"onClick":l!=null&&(n.onclick=In);break;case"onScroll":l!=null&&Ee("scroll",n);break;case"onScrollEnd":l!=null&&Ee("scrollend",n);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"multiple":n.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":n.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){n.removeAttribute("xlink:href");break}s=mo(""+l),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""+l):n.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,""):n.removeAttribute(s);break;case"capture":case"download":l===!0?n.setAttribute(s,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?n.setAttribute(s,l):n.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?n.setAttribute(s,l):n.removeAttribute(s);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?n.removeAttribute(s):n.setAttribute(s,l);break;case"popover":Ee("beforetoggle",n),Ee("toggle",n),ho(n,"popover",l);break;case"xlinkActuate":$n(n,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":$n(n,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":$n(n,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":$n(n,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":$n(n,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":$n(n,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":$n(n,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":$n(n,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":$n(n,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ho(n,"is",l);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Aw.get(s)||s,ho(n,s,l))}}function Td(n,a,s,l,f,m){switch(s){case"style":xp(n,l,m);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(s=l.__html,s!=null){if(f.children!=null)throw Error(r(60));n.innerHTML=s}}break;case"children":typeof l=="string"?Ai(n,l):(typeof l=="number"||typeof l=="bigint")&&Ai(n,""+l);break;case"onScroll":l!=null&&Ee("scroll",n);break;case"onScrollEnd":l!=null&&Ee("scrollend",n);break;case"onClick":l!=null&&(n.onclick=In);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!dp.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(f=s.endsWith("Capture"),a=s.slice(2,f?s.length-7:void 0),m=n[Rt]||null,m=m!=null?m[s]:null,typeof m=="function"&&n.removeEventListener(a,m,f),typeof l=="function")){typeof m!="function"&&m!==null&&(s in n?n[s]=null:n.hasAttribute(s)&&n.removeAttribute(s)),n.addEventListener(a,l,f);break e}s in n?n[s]=l:l===!0?n.setAttribute(s,""):ho(n,s,l)}}}function xt(n,a,s){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ee("error",n),Ee("load",n);var l=!1,f=!1,m;for(m in s)if(s.hasOwnProperty(m)){var b=s[m];if(b!=null)switch(m){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:He(n,a,m,b,s,null)}}f&&He(n,a,"srcSet",s.srcSet,s,null),l&&He(n,a,"src",s.src,s,null);return;case"input":Ee("invalid",n);var j=m=b=f=null,A=null,U=null;for(l in s)if(s.hasOwnProperty(l)){var $=s[l];if($!=null)switch(l){case"name":f=$;break;case"type":b=$;break;case"checked":A=$;break;case"defaultChecked":U=$;break;case"value":m=$;break;case"defaultValue":j=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,a));break;default:He(n,a,l,$,s,null)}}gp(n,m,j,A,U,b,f,!1);return;case"select":Ee("invalid",n),l=b=m=null;for(f in s)if(s.hasOwnProperty(f)&&(j=s[f],j!=null))switch(f){case"value":m=j;break;case"defaultValue":b=j;break;case"multiple":l=j;default:He(n,a,f,j,s,null)}a=m,s=b,n.multiple=!!l,a!=null?Ci(n,!!l,a,!1):s!=null&&Ci(n,!!l,s,!0);return;case"textarea":Ee("invalid",n),m=f=l=null;for(b in s)if(s.hasOwnProperty(b)&&(j=s[b],j!=null))switch(b){case"value":l=j;break;case"defaultValue":f=j;break;case"children":m=j;break;case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(91));break;default:He(n,a,b,j,s,null)}vp(n,l,f,m);return;case"option":for(A in s)if(s.hasOwnProperty(A)&&(l=s[A],l!=null))switch(A){case"selected":n.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:He(n,a,A,l,s,null)}return;case"dialog":Ee("beforetoggle",n),Ee("toggle",n),Ee("cancel",n),Ee("close",n);break;case"iframe":case"object":Ee("load",n);break;case"video":case"audio":for(l=0;l<fs.length;l++)Ee(fs[l],n);break;case"image":Ee("error",n),Ee("load",n);break;case"details":Ee("toggle",n);break;case"embed":case"source":case"link":Ee("error",n),Ee("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in s)if(s.hasOwnProperty(U)&&(l=s[U],l!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,a));default:He(n,a,U,l,s,null)}return;default:if(Vc(a)){for($ in s)s.hasOwnProperty($)&&(l=s[$],l!==void 0&&Td(n,a,$,l,s,void 0));return}}for(j in s)s.hasOwnProperty(j)&&(l=s[j],l!=null&&He(n,a,j,l,s,null))}function n5(n,a,s,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,m=null,b=null,j=null,A=null,U=null,$=null;for(P in s){var G=s[P];if(s.hasOwnProperty(P)&&G!=null)switch(P){case"checked":break;case"value":break;case"defaultValue":A=G;default:l.hasOwnProperty(P)||He(n,a,P,null,l,G)}}for(var B in l){var P=l[B];if(G=s[B],l.hasOwnProperty(B)&&(P!=null||G!=null))switch(B){case"type":m=P;break;case"name":f=P;break;case"checked":U=P;break;case"defaultChecked":$=P;break;case"value":b=P;break;case"defaultValue":j=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(r(137,a));break;default:P!==G&&He(n,a,B,P,l,G)}}Bc(n,b,j,A,U,$,m,f);return;case"select":P=b=j=B=null;for(m in s)if(A=s[m],s.hasOwnProperty(m)&&A!=null)switch(m){case"value":break;case"multiple":P=A;default:l.hasOwnProperty(m)||He(n,a,m,null,l,A)}for(f in l)if(m=l[f],A=s[f],l.hasOwnProperty(f)&&(m!=null||A!=null))switch(f){case"value":B=m;break;case"defaultValue":j=m;break;case"multiple":b=m;default:m!==A&&He(n,a,f,m,l,A)}a=j,s=b,l=P,B!=null?Ci(n,!!s,B,!1):!!l!=!!s&&(a!=null?Ci(n,!!s,a,!0):Ci(n,!!s,s?[]:"",!1));return;case"textarea":P=B=null;for(j in s)if(f=s[j],s.hasOwnProperty(j)&&f!=null&&!l.hasOwnProperty(j))switch(j){case"value":break;case"children":break;default:He(n,a,j,null,l,f)}for(b in l)if(f=l[b],m=s[b],l.hasOwnProperty(b)&&(f!=null||m!=null))switch(b){case"value":B=f;break;case"defaultValue":P=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==m&&He(n,a,b,f,l,m)}yp(n,B,P);return;case"option":for(var se in s)if(B=s[se],s.hasOwnProperty(se)&&B!=null&&!l.hasOwnProperty(se))switch(se){case"selected":n.selected=!1;break;default:He(n,a,se,null,l,B)}for(A in l)if(B=l[A],P=s[A],l.hasOwnProperty(A)&&B!==P&&(B!=null||P!=null))switch(A){case"selected":n.selected=B&&typeof B!="function"&&typeof B!="symbol";break;default:He(n,a,A,B,l,P)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in s)B=s[ge],s.hasOwnProperty(ge)&&B!=null&&!l.hasOwnProperty(ge)&&He(n,a,ge,null,l,B);for(U in l)if(B=l[U],P=s[U],l.hasOwnProperty(U)&&B!==P&&(B!=null||P!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(B!=null)throw Error(r(137,a));break;default:He(n,a,U,B,l,P)}return;default:if(Vc(a)){for(var $e in s)B=s[$e],s.hasOwnProperty($e)&&B!==void 0&&!l.hasOwnProperty($e)&&Td(n,a,$e,void 0,l,B);for($ in l)B=l[$],P=s[$],!l.hasOwnProperty($)||B===P||B===void 0&&P===void 0||Td(n,a,$,B,l,P);return}}for(var M in s)B=s[M],s.hasOwnProperty(M)&&B!=null&&!l.hasOwnProperty(M)&&He(n,a,M,null,l,B);for(G in l)B=l[G],P=s[G],!l.hasOwnProperty(G)||B===P||B==null&&P==null||He(n,a,G,B,l,P)}function w0(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function a5(){if(typeof performance.getEntriesByType=="function"){for(var n=0,a=0,s=performance.getEntriesByType("resource"),l=0;l<s.length;l++){var f=s[l],m=f.transferSize,b=f.initiatorType,j=f.duration;if(m&&j&&w0(b)){for(b=0,j=f.responseEnd,l+=1;l<s.length;l++){var A=s[l],U=A.startTime;if(U>j)break;var $=A.transferSize,G=A.initiatorType;$&&w0(G)&&(A=A.responseEnd,b+=$*(A<j?1:(j-U)/(A-U)))}if(--l,a+=8*(m+b)/(f.duration/1e3),n++,10<n)break}}if(0<n)return a/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Ed=null,Cd=null;function ul(n){return n.nodeType===9?n:n.ownerDocument}function S0(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function j0(n,a){if(n===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&a==="foreignObject"?0:n}function Ad(n,a){return n==="textarea"||n==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Nd=null;function i5(){var n=window.event;return n&&n.type==="popstate"?n===Nd?!1:(Nd=n,!0):(Nd=null,!1)}var k0=typeof setTimeout=="function"?setTimeout:void 0,r5=typeof clearTimeout=="function"?clearTimeout:void 0,_0=typeof Promise=="function"?Promise:void 0,s5=typeof queueMicrotask=="function"?queueMicrotask:typeof _0<"u"?function(n){return _0.resolve(null).then(n).catch(o5)}:k0;function o5(n){setTimeout(function(){throw n})}function Oa(n){return n==="head"}function T0(n,a){var s=a,l=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"||s==="/&"){if(l===0){n.removeChild(f),sr(a);return}l--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")l++;else if(s==="html")ms(n.ownerDocument.documentElement);else if(s==="head"){s=n.ownerDocument.head,ms(s);for(var m=s.firstChild;m;){var b=m.nextSibling,j=m.nodeName;m[Dr]||j==="SCRIPT"||j==="STYLE"||j==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=b}}else s==="body"&&ms(n.ownerDocument.body);s=f}while(s);sr(a)}function E0(n,a){var s=n;n=0;do{var l=s.nextSibling;if(s.nodeType===1?a?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(a?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),l&&l.nodeType===8)if(s=l.data,s==="/$"){if(n===0)break;n--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||n++;s=l}while(s)}function Rd(n){var a=n.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var s=a;switch(a=a.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Rd(s),zc(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}n.removeChild(s)}}function l5(n,a,s,l){for(;n.nodeType===1;){var f=s;if(n.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(l){if(!n[Dr])switch(a){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==f.rel||n.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||n.getAttribute("title")!==(f.title==null?null:f.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(f.src==null?null:f.src)||n.getAttribute("type")!==(f.type==null?null:f.type)||n.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(a==="input"&&n.type==="hidden"){var m=f.name==null?null:""+f.name;if(f.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=cn(n.nextSibling),n===null)break}return null}function c5(n,a,s){if(a==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=cn(n.nextSibling),n===null))return null;return n}function C0(n,a){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!a||(n=cn(n.nextSibling),n===null))return null;return n}function Od(n){return n.data==="$?"||n.data==="$~"}function Dd(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function u5(n,a){var s=n.ownerDocument;if(n.data==="$~")n._reactRetry=a;else if(n.data!=="$?"||s.readyState!=="loading")a();else{var l=function(){a(),s.removeEventListener("DOMContentLoaded",l)};s.addEventListener("DOMContentLoaded",l),n._reactRetry=l}}function cn(n){for(;n!=null;n=n.nextSibling){var a=n.nodeType;if(a===1||a===3)break;if(a===8){if(a=n.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return n}var Md=null;function A0(n){n=n.nextSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"||s==="/&"){if(a===0)return cn(n.nextSibling);a--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||a++}n=n.nextSibling}return null}function N0(n){n=n.previousSibling;for(var a=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(a===0)return n;a--}else s!=="/$"&&s!=="/&"||a++}n=n.previousSibling}return null}function R0(n,a,s){switch(a=ul(s),n){case"html":if(n=a.documentElement,!n)throw Error(r(452));return n;case"head":if(n=a.head,!n)throw Error(r(453));return n;case"body":if(n=a.body,!n)throw Error(r(454));return n;default:throw Error(r(451))}}function ms(n){for(var a=n.attributes;a.length;)n.removeAttributeNode(a[0]);zc(n)}var un=new Map,O0=new Set;function dl(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var ra=I.d;I.d={f:d5,r:h5,D:f5,C:p5,L:m5,m:g5,X:v5,S:y5,M:b5};function d5(){var n=ra.f(),a=nl();return n||a}function h5(n){var a=_i(n);a!==null&&a.tag===5&&a.type==="form"?Xm(a):ra.r(n)}var ar=typeof document>"u"?null:document;function D0(n,a,s){var l=ar;if(l&&typeof a=="string"&&a){var f=tn(a);f='link[rel="'+n+'"][href="'+f+'"]',typeof s=="string"&&(f+='[crossorigin="'+s+'"]'),O0.has(f)||(O0.add(f),n={rel:n,crossOrigin:s,href:a},l.querySelector(f)===null&&(a=l.createElement("link"),xt(a,"link",n),ft(a),l.head.appendChild(a)))}}function f5(n){ra.D(n),D0("dns-prefetch",n,null)}function p5(n,a){ra.C(n,a),D0("preconnect",n,a)}function m5(n,a,s){ra.L(n,a,s);var l=ar;if(l&&n&&a){var f='link[rel="preload"][as="'+tn(a)+'"]';a==="image"&&s&&s.imageSrcSet?(f+='[imagesrcset="'+tn(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(f+='[imagesizes="'+tn(s.imageSizes)+'"]')):f+='[href="'+tn(n)+'"]';var m=f;switch(a){case"style":m=ir(n);break;case"script":m=rr(n)}un.has(m)||(n=v({rel:"preload",href:a==="image"&&s&&s.imageSrcSet?void 0:n,as:a},s),un.set(m,n),l.querySelector(f)!==null||a==="style"&&l.querySelector(gs(m))||a==="script"&&l.querySelector(ys(m))||(a=l.createElement("link"),xt(a,"link",n),ft(a),l.head.appendChild(a)))}}function g5(n,a){ra.m(n,a);var s=ar;if(s&&n){var l=a&&typeof a.as=="string"?a.as:"script",f='link[rel="modulepreload"][as="'+tn(l)+'"][href="'+tn(n)+'"]',m=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=rr(n)}if(!un.has(m)&&(n=v({rel:"modulepreload",href:n},a),un.set(m,n),s.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(ys(m)))return}l=s.createElement("link"),xt(l,"link",n),ft(l),s.head.appendChild(l)}}}function y5(n,a,s){ra.S(n,a,s);var l=ar;if(l&&n){var f=Ti(l).hoistableStyles,m=ir(n);a=a||"default";var b=f.get(m);if(!b){var j={loading:0,preload:null};if(b=l.querySelector(gs(m)))j.loading=5;else{n=v({rel:"stylesheet",href:n,"data-precedence":a},s),(s=un.get(m))&&Ld(n,s);var A=b=l.createElement("link");ft(A),xt(A,"link",n),A._p=new Promise(function(U,$){A.onload=U,A.onerror=$}),A.addEventListener("load",function(){j.loading|=1}),A.addEventListener("error",function(){j.loading|=2}),j.loading|=4,hl(b,a,l)}b={type:"stylesheet",instance:b,count:1,state:j},f.set(m,b)}}}function v5(n,a){ra.X(n,a);var s=ar;if(s&&n){var l=Ti(s).hoistableScripts,f=rr(n),m=l.get(f);m||(m=s.querySelector(ys(f)),m||(n=v({src:n,async:!0},a),(a=un.get(f))&&zd(n,a),m=s.createElement("script"),ft(m),xt(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function b5(n,a){ra.M(n,a);var s=ar;if(s&&n){var l=Ti(s).hoistableScripts,f=rr(n),m=l.get(f);m||(m=s.querySelector(ys(f)),m||(n=v({src:n,async:!0,type:"module"},a),(a=un.get(f))&&zd(n,a),m=s.createElement("script"),ft(m),xt(m,"link",n),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},l.set(f,m))}}function M0(n,a,s,l){var f=(f=be.current)?dl(f):null;if(!f)throw Error(r(446));switch(n){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(a=ir(s.href),s=Ti(f).hoistableStyles,l=s.get(a),l||(l={type:"style",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){n=ir(s.href);var m=Ti(f).hoistableStyles,b=m.get(n);if(b||(f=f.ownerDocument||f,b={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,b),(m=f.querySelector(gs(n)))&&!m._p&&(b.instance=m,b.state.loading=5),un.has(n)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},un.set(n,s),m||x5(f,n,s,b.state))),a&&l===null)throw Error(r(528,""));return b}if(a&&l!==null)throw Error(r(529,""));return null;case"script":return a=s.async,s=s.src,typeof s=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=rr(s),s=Ti(f).hoistableScripts,l=s.get(a),l||(l={type:"script",instance:null,count:0,state:null},s.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,n))}}function ir(n){return'href="'+tn(n)+'"'}function gs(n){return'link[rel="stylesheet"]['+n+"]"}function L0(n){return v({},n,{"data-precedence":n.precedence,precedence:null})}function x5(n,a,s,l){n.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=n.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),xt(a,"link",s),ft(a),n.head.appendChild(a))}function rr(n){return'[src="'+tn(n)+'"]'}function ys(n){return"script[async]"+n}function z0(n,a,s){if(a.count++,a.instance===null)switch(a.type){case"style":var l=n.querySelector('style[data-href~="'+tn(s.href)+'"]');if(l)return a.instance=l,ft(l),l;var f=v({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return l=(n.ownerDocument||n).createElement("style"),ft(l),xt(l,"style",f),hl(l,s.precedence,n),a.instance=l;case"stylesheet":f=ir(s.href);var m=n.querySelector(gs(f));if(m)return a.state.loading|=4,a.instance=m,ft(m),m;l=L0(s),(f=un.get(f))&&Ld(l,f),m=(n.ownerDocument||n).createElement("link"),ft(m);var b=m;return b._p=new Promise(function(j,A){b.onload=j,b.onerror=A}),xt(m,"link",l),a.state.loading|=4,hl(m,s.precedence,n),a.instance=m;case"script":return m=rr(s.src),(f=n.querySelector(ys(m)))?(a.instance=f,ft(f),f):(l=s,(f=un.get(m))&&(l=v({},s),zd(l,f)),n=n.ownerDocument||n,f=n.createElement("script"),ft(f),xt(f,"link",l),n.head.appendChild(f),a.instance=f);case"void":return null;default:throw Error(r(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,hl(l,s.precedence,n));return a.instance}function hl(n,a,s){for(var l=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,m=f,b=0;b<l.length;b++){var j=l[b];if(j.dataset.precedence===a)m=j;else if(m!==f)break}m?m.parentNode.insertBefore(n,m.nextSibling):(a=s.nodeType===9?s.head:s,a.insertBefore(n,a.firstChild))}function Ld(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.title==null&&(n.title=a.title)}function zd(n,a){n.crossOrigin==null&&(n.crossOrigin=a.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=a.referrerPolicy),n.integrity==null&&(n.integrity=a.integrity)}var fl=null;function U0(n,a,s){if(fl===null){var l=new Map,f=fl=new Map;f.set(s,l)}else f=fl,l=f.get(s),l||(l=new Map,f.set(s,l));if(l.has(n))return l;for(l.set(n,null),s=s.getElementsByTagName(n),f=0;f<s.length;f++){var m=s[f];if(!(m[Dr]||m[gt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var b=m.getAttribute(a)||"";b=n+b;var j=l.get(b);j?j.push(m):l.set(b,[m])}}return l}function B0(n,a,s){n=n.ownerDocument||n,n.head.insertBefore(s,a==="title"?n.querySelector("head > title"):null)}function w5(n,a,s){if(s===1||a.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return n=a.disabled,typeof a.precedence=="string"&&n==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function P0(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function S5(n,a,s,l){if(s.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var f=ir(l.href),m=a.querySelector(gs(f));if(m){a=m._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(n.count++,n=pl.bind(n),a.then(n,n)),s.state.loading|=4,s.instance=m,ft(m);return}m=a.ownerDocument||a,l=L0(l),(f=un.get(f))&&Ld(l,f),m=m.createElement("link"),ft(m);var b=m;b._p=new Promise(function(j,A){b.onload=j,b.onerror=A}),xt(m,"link",l),s.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(s,a),(a=s.state.preload)&&(s.state.loading&3)===0&&(n.count++,s=pl.bind(n),a.addEventListener("load",s),a.addEventListener("error",s))}}var Ud=0;function j5(n,a){return n.stylesheets&&n.count===0&&gl(n,n.stylesheets),0<n.count||0<n.imgCount?function(s){var l=setTimeout(function(){if(n.stylesheets&&gl(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+a);0<n.imgBytes&&Ud===0&&(Ud=62500*a5());var f=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&gl(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>Ud?50:800)+a);return n.unsuspend=s,function(){n.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function pl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)gl(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var ml=null;function gl(n,a){n.stylesheets=null,n.unsuspend!==null&&(n.count++,ml=new Map,a.forEach(k5,n),ml=null,pl.call(n))}function k5(n,a){if(!(a.state.loading&4)){var s=ml.get(n);if(s)var l=s.get(null);else{s=new Map,ml.set(n,s);for(var f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<f.length;m++){var b=f[m];(b.nodeName==="LINK"||b.getAttribute("media")!=="not all")&&(s.set(b.dataset.precedence,b),l=b)}l&&s.set(null,l)}f=a.instance,b=f.getAttribute("data-precedence"),m=s.get(b)||l,m===l&&s.set(null,f),s.set(b,f),this.count++,l=pl.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),m?m.parentNode.insertBefore(f,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(f,n.firstChild)),a.state.loading|=4}}var vs={$$typeof:R,Provider:null,Consumer:null,_currentValue:Z,_currentValue2:Z,_threadCount:0};function _5(n,a,s,l,f,m,b,j,A){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Oc(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Oc(0),this.hiddenUpdates=Oc(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=m,this.onRecoverableError=b,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function V0(n,a,s,l,f,m,b,j,A,U,$,G){return n=new _5(n,a,s,b,A,U,$,G,j),a=1,m===!0&&(a|=24),m=Ft(3,null,null,a),n.current=m,m.stateNode=n,a=gu(),a.refCount++,n.pooledCache=a,a.refCount++,m.memoizedState={element:l,isDehydrated:s,cache:a},xu(m),n}function H0(n){return n?(n=zi,n):zi}function $0(n,a,s,l,f,m){f=H0(f),l.context===null?l.context=f:l.pendingContext=f,l=wa(a),l.payload={element:s},m=m===void 0?null:m,m!==null&&(l.callback=m),s=Sa(n,l,a),s!==null&&(Ut(s,n,a),Wr(s,n,a))}function I0(n,a){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<a?s:a}}function Bd(n,a){I0(n,a),(n=n.alternate)&&I0(n,a)}function q0(n){if(n.tag===13||n.tag===31){var a=Ja(n,67108864);a!==null&&Ut(a,n,67108864),Bd(n,67108864)}}function F0(n){if(n.tag===13||n.tag===31){var a=Wt();a=Dc(a);var s=Ja(n,a);s!==null&&Ut(s,n,a),Bd(n,a)}}var yl=!0;function T5(n,a,s,l){var f=C.T;C.T=null;var m=I.p;try{I.p=2,Pd(n,a,s,l)}finally{I.p=m,C.T=f}}function E5(n,a,s,l){var f=C.T;C.T=null;var m=I.p;try{I.p=8,Pd(n,a,s,l)}finally{I.p=m,C.T=f}}function Pd(n,a,s,l){if(yl){var f=Vd(l);if(f===null)_d(n,a,l,vl,s),K0(n,l);else if(A5(f,n,a,s,l))l.stopPropagation();else if(K0(n,l),a&4&&-1<C5.indexOf(n)){for(;f!==null;){var m=_i(f);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var b=Ga(m.pendingLanes);if(b!==0){var j=m;for(j.pendingLanes|=2,j.entangledLanes|=2;b;){var A=1<<31-It(b);j.entanglements[1]|=A,b&=~A}Dn(m),(Ue&6)===0&&(el=Ht()+500,hs(0))}}break;case 31:case 13:j=Ja(m,2),j!==null&&Ut(j,m,2),nl(),Bd(m,2)}if(m=Vd(l),m===null&&_d(n,a,l,vl,s),m===f)break;f=m}f!==null&&l.stopPropagation()}else _d(n,a,l,null,s)}}function Vd(n){return n=$c(n),Hd(n)}var vl=null;function Hd(n){if(vl=null,n=ki(n),n!==null){var a=c(n);if(a===null)n=null;else{var s=a.tag;if(s===13){if(n=d(a),n!==null)return n;n=null}else if(s===31){if(n=h(a),n!==null)return n;n=null}else if(s===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;n=null}else a!==n&&(n=null)}}return vl=n,null}function G0(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(fw()){case ep:return 2;case tp:return 8;case so:case pw:return 32;case np:return 268435456;default:return 32}default:return 32}}var $d=!1,Da=null,Ma=null,La=null,bs=new Map,xs=new Map,za=[],C5="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(n,a){switch(n){case"focusin":case"focusout":Da=null;break;case"dragenter":case"dragleave":Ma=null;break;case"mouseover":case"mouseout":La=null;break;case"pointerover":case"pointerout":bs.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":xs.delete(a.pointerId)}}function ws(n,a,s,l,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:a,domEventName:s,eventSystemFlags:l,nativeEvent:m,targetContainers:[f]},a!==null&&(a=_i(a),a!==null&&q0(a)),n):(n.eventSystemFlags|=l,a=n.targetContainers,f!==null&&a.indexOf(f)===-1&&a.push(f),n)}function A5(n,a,s,l,f){switch(a){case"focusin":return Da=ws(Da,n,a,s,l,f),!0;case"dragenter":return Ma=ws(Ma,n,a,s,l,f),!0;case"mouseover":return La=ws(La,n,a,s,l,f),!0;case"pointerover":var m=f.pointerId;return bs.set(m,ws(bs.get(m)||null,n,a,s,l,f)),!0;case"gotpointercapture":return m=f.pointerId,xs.set(m,ws(xs.get(m)||null,n,a,s,l,f)),!0}return!1}function Y0(n){var a=ki(n.target);if(a!==null){var s=c(a);if(s!==null){if(a=s.tag,a===13){if(a=d(s),a!==null){n.blockedOn=a,lp(n.priority,function(){F0(s)});return}}else if(a===31){if(a=h(s),a!==null){n.blockedOn=a,lp(n.priority,function(){F0(s)});return}}else if(a===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function bl(n){if(n.blockedOn!==null)return!1;for(var a=n.targetContainers;0<a.length;){var s=Vd(n.nativeEvent);if(s===null){s=n.nativeEvent;var l=new s.constructor(s.type,s);Hc=l,s.target.dispatchEvent(l),Hc=null}else return a=_i(s),a!==null&&q0(a),n.blockedOn=s,!1;a.shift()}return!0}function X0(n,a,s){bl(n)&&s.delete(a)}function N5(){$d=!1,Da!==null&&bl(Da)&&(Da=null),Ma!==null&&bl(Ma)&&(Ma=null),La!==null&&bl(La)&&(La=null),bs.forEach(X0),xs.forEach(X0)}function xl(n,a){n.blockedOn===a&&(n.blockedOn=null,$d||($d=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,N5)))}var wl=null;function W0(n){wl!==n&&(wl=n,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){wl===n&&(wl=null);for(var a=0;a<n.length;a+=3){var s=n[a],l=n[a+1],f=n[a+2];if(typeof l!="function"){if(Hd(l||s)===null)continue;break}var m=_i(s);m!==null&&(n.splice(a,3),a-=3,Vu(m,{pending:!0,data:f,method:s.method,action:l},l,f))}}))}function sr(n){function a(A){return xl(A,n)}Da!==null&&xl(Da,n),Ma!==null&&xl(Ma,n),La!==null&&xl(La,n),bs.forEach(a),xs.forEach(a);for(var s=0;s<za.length;s++){var l=za[s];l.blockedOn===n&&(l.blockedOn=null)}for(;0<za.length&&(s=za[0],s.blockedOn===null);)Y0(s),s.blockedOn===null&&za.shift();if(s=(n.ownerDocument||n).$$reactFormReplay,s!=null)for(l=0;l<s.length;l+=3){var f=s[l],m=s[l+1],b=f[Rt]||null;if(typeof m=="function")b||W0(s);else if(b){var j=null;if(m&&m.hasAttribute("formAction")){if(f=m,b=m[Rt]||null)j=b.formAction;else if(Hd(f)!==null)continue}else j=b.action;typeof j=="function"?s[l+1]=j:(s.splice(l,3),l-=3),W0(s)}}}function J0(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(b){return f=b})},focusReset:"manual",scroll:"manual"})}function a(){f!==null&&(f(),f=null),l||setTimeout(s,20)}function s(){if(!l&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(s,100),function(){l=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),f!==null&&(f(),f=null)}}}function Id(n){this._internalRoot=n}Sl.prototype.render=Id.prototype.render=function(n){var a=this._internalRoot;if(a===null)throw Error(r(409));var s=a.current,l=Wt();$0(s,l,n,a,null,null)},Sl.prototype.unmount=Id.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var a=n.containerInfo;$0(n.current,2,null,n,null,null),nl(),a[ji]=null}};function Sl(n){this._internalRoot=n}Sl.prototype.unstable_scheduleHydration=function(n){if(n){var a=op();n={blockedOn:null,target:n,priority:a};for(var s=0;s<za.length&&a!==0&&a<za[s].priority;s++);za.splice(s,0,n),s===0&&Y0(n)}};var Q0=e.version;if(Q0!=="19.2.7")throw Error(r(527,Q0,"19.2.7"));I.findDOMNode=function(n){var a=n._reactInternals;if(a===void 0)throw typeof n.render=="function"?Error(r(188)):(n=Object.keys(n).join(","),Error(r(268,n)));return n=g(a),n=n!==null?y(n):null,n=n===null?null:n.stateNode,n};var R5={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{Nr=jl.inject(R5),$t=jl}catch{}}return js.createRoot=function(n,a){if(!o(n))throw Error(r(299));var s=!1,l="",f=rg,m=sg,b=og;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(m=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),a=V0(n,1,!1,null,null,s,l,null,f,m,b,J0),n[ji]=a.current,kd(n),new Id(a)},js.hydrateRoot=function(n,a,s){if(!o(n))throw Error(r(299));var l=!1,f="",m=rg,b=sg,j=og,A=null;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(b=s.onCaughtError),s.onRecoverableError!==void 0&&(j=s.onRecoverableError),s.formState!==void 0&&(A=s.formState)),a=V0(n,1,!0,a,s??null,l,f,A,m,b,j,J0),a.context=H0(null),s=a.current,l=Wt(),l=Dc(l),f=wa(l),f.callback=null,Sa(s,f,l),s=l,a.current.lanes=s,Or(a,s),Dn(a),n[ji]=a.current,kd(n),new Sl(a)},js.version="19.2.7",js}var ly;function H5(){if(ly)return Gd.exports;ly=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Gd.exports=V5(),Gd.exports}var $5=H5();const I5=Db($5);/**
 * react-router v7.18.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hf=/^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,Mb=/^[\\/]{2}/;function q5(t,e){return e+t.replace(/\\/g,"/")}var cy="popstate";function uy(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function F5(t={}){function e(r,o){var g;let c=(g=o.state)==null?void 0:g.masked,{pathname:d,search:h,hash:p}=c||r.location;return Th("",{pathname:d,search:h,hash:p},o.state&&o.state.usr||null,o.state&&o.state.key||"default",c?{pathname:r.location.pathname,search:r.location.search,hash:r.location.hash}:void 0)}function i(r,o){return typeof o=="string"?o:Hs(o)}return K5(e,i,null,t)}function We(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function En(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function G5(){return Math.random().toString(36).substring(2,10)}function dy(t,e){return{usr:t.state,key:t.key,idx:e,masked:t.mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function Th(t,e,i=null,r,o){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof e=="string"?jr(e):e,state:i,key:e&&e.key||r||G5(),mask:o}}function Hs({pathname:t="/",search:e="",hash:i=""}){return e&&e!=="?"&&(t+=e.charAt(0)==="?"?e:"?"+e),i&&i!=="#"&&(t+=i.charAt(0)==="#"?i:"#"+i),t}function jr(t){let e={};if(t){let i=t.indexOf("#");i>=0&&(e.hash=t.substring(i),t=t.substring(0,i));let r=t.indexOf("?");r>=0&&(e.search=t.substring(r),t=t.substring(0,r)),t&&(e.pathname=t)}return e}function K5(t,e,i,r={}){let{window:o=document.defaultView,v5Compat:c=!1}=r,d=o.history,h="POP",p=null,g=y();g==null&&(g=0,d.replaceState({...d.state,idx:g},""));function y(){return(d.state||{idx:null}).idx}function v(){h="POP";let E=y(),T=E==null?null:E-g;g=E,p&&p({action:h,location:_.location,delta:T})}function x(E,T){h="PUSH";let O=uy(E)?E:Th(_.location,E,T);g=y()+1;let R=dy(O,g),L=_.createHref(O.mask||O);try{d.pushState(R,"",L)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;o.location.assign(L)}c&&p&&p({action:h,location:_.location,delta:1})}function w(E,T){h="REPLACE";let O=uy(E)?E:Th(_.location,E,T);g=y();let R=dy(O,g),L=_.createHref(O.mask||O);d.replaceState(R,"",L),c&&p&&p({action:h,location:_.location,delta:0})}function S(E){return Y5(o,E)}let _={get action(){return h},get location(){return t(o,d)},listen(E){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(cy,v),p=E,()=>{o.removeEventListener(cy,v),p=null}},createHref(E){return e(o,E)},createURL:S,encodeLocation(E){let T=S(E);return{pathname:T.pathname,search:T.search,hash:T.hash}},push:x,replace:w,go(E){return d.go(E)}};return _}function Y5(t,e,i=!1){let r="http://localhost";t&&(r=t.location.origin!=="null"?t.location.origin:t.location.href),We(r,"No window.location.(origin|href) available to create URL");let o=typeof e=="string"?e:Hs(e);return o=o.replace(/ $/,"%20"),!i&&Mb.test(o)&&(o=r+o),new URL(o,r)}function Lb(t,e,i="/"){return X5(t,e,i,!1)}function X5(t,e,i,r,o){let c=typeof e=="string"?jr(e):e,d=ha(c.pathname||"/",i);if(d==null)return null;let h=W5(t),p=null,g=oS(d);for(let y=0;p==null&&y<h.length;++y)p=sS(h[y],g,r);return p}function W5(t){let e=zb(t);return J5(e),e}function zb(t,e=[],i=[],r="",o=!1){let c=(d,h,p=o,g)=>{let y={relativePath:g===void 0?d.path||"":g,caseSensitive:d.caseSensitive===!0,childrenIndex:h,route:d};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&p)return;We(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let v=_n([r,y.relativePath]),x=i.concat(y);d.children&&d.children.length>0&&(We(d.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${v}".`),zb(d.children,e,x,v,p)),!(d.path==null&&!d.index)&&e.push({path:v,score:iS(v,d.index),routesMeta:x.map((w,S)=>{let[_,E]=Pb(w.relativePath,w.caseSensitive,S===x.length-1);return{...w,matcher:_,compiledParams:E}})})};return t.forEach((d,h)=>{var p;if(d.path===""||!((p=d.path)!=null&&p.includes("?")))c(d,h);else for(let g of Ub(d.path))c(d,h,!0,g)}),e}function Ub(t){let e=t.split("/");if(e.length===0)return[];let[i,...r]=e,o=i.endsWith("?"),c=i.replace(/\?$/,"");if(r.length===0)return o?[c,""]:[c];let d=Ub(r.join("/")),h=[];return h.push(...d.map(p=>p===""?c:[c,p].join("/"))),o&&h.push(...d),h.map(p=>t.startsWith("/")&&p===""?"/":p)}function J5(t){t.sort((e,i)=>e.score!==i.score?i.score-e.score:rS(e.routesMeta.map(r=>r.childrenIndex),i.routesMeta.map(r=>r.childrenIndex)))}var Q5=/^:[\w-]+$/,Z5=3,eS=2,tS=1,nS=10,aS=-2,hy=t=>t==="*";function iS(t,e){let i=t.split("/"),r=i.length;return i.some(hy)&&(r+=aS),e&&(r+=eS),i.filter(o=>!hy(o)).reduce((o,c)=>o+(Q5.test(c)?Z5:c===""?tS:nS),r)}function rS(t,e){return t.length===e.length&&t.slice(0,-1).every((r,o)=>r===e[o])?t[t.length-1]-e[e.length-1]:0}function sS(t,e,i=!1){let{routesMeta:r}=t,o={},c="/",d=[];for(let h=0;h<r.length;++h){let p=r[h],g=h===r.length-1,y=c==="/"?e:e.slice(c.length)||"/",v={path:p.relativePath,caseSensitive:p.caseSensitive,end:g},x=p.matcher&&p.compiledParams?Bb(v,y,p.matcher,p.compiledParams):Xl(v,y),w=p.route;if(!x&&g&&i&&!r[r.length-1].route.index&&(x=Xl({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},y)),!x)return null;Object.assign(o,x.params),d.push({params:o,pathname:_n([c,x.pathname]),pathnameBase:uS(_n([c,x.pathnameBase])),route:w}),x.pathnameBase!=="/"&&(c=_n([c,x.pathnameBase]))}return d}function Xl(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[i,r]=Pb(t.path,t.caseSensitive,t.end);return Bb(t,e,i,r)}function Bb(t,e,i,r){let o=e.match(i);if(!o)return null;let c=o[0],d=c.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:r.reduce((g,{paramName:y,isOptional:v},x)=>{if(y==="*"){let S=h[x]||"";d=c.slice(0,c.length-S.length).replace(/(.)\/+$/,"$1")}const w=h[x];return v&&!w?g[y]=void 0:g[y]=(w||"").replace(/%2F/g,"/"),g},{}),pathname:c,pathnameBase:d,pattern:t}}function Pb(t,e=!1,i=!0){En(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,p,g,y)=>{if(r.push({paramName:h,isOptional:p!=null}),p){let v=y.charAt(g+d.length);return v&&v!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),r]}function oS(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return En(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),t}}function ha(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let i=e.endsWith("/")?e.length-1:e.length,r=t.charAt(i);return r&&r!=="/"?null:t.slice(i)||"/"}function lS(t,e="/"){let{pathname:i,search:r="",hash:o=""}=typeof t=="string"?jr(t):t,c;return i?(i=Vb(i),i.startsWith("/")?c=fy(i.substring(1),"/"):c=fy(i,e)):c=e,{pathname:c,search:dS(r),hash:hS(o)}}function fy(t,e){let i=Wl(e).split("/");return t.split("/").forEach(o=>{o===".."?i.length>1&&i.pop():o!=="."&&i.push(o)}),i.length>1?i.join("/"):"/"}function Wd(t,e,i,r){return`Cannot include a '${t}' character in a manually specified \`to.${e}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${i}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function cS(t){return t.filter((e,i)=>i===0||e.route.path&&e.route.path.length>0)}function ff(t){let e=cS(t);return e.map((i,r)=>r===e.length-1?i.pathname:i.pathnameBase)}function gc(t,e,i,r=!1){let o;typeof t=="string"?o=jr(t):(o={...t},We(!o.pathname||!o.pathname.includes("?"),Wd("?","pathname","search",o)),We(!o.pathname||!o.pathname.includes("#"),Wd("#","pathname","hash",o)),We(!o.search||!o.search.includes("#"),Wd("#","search","hash",o)));let c=t===""||o.pathname==="",d=c?"/":o.pathname,h;if(d==null)h=i;else{let v=e.length-1;if(!r&&d.startsWith("..")){let x=d.split("/");for(;x[0]==="..";)x.shift(),v-=1;o.pathname=x.join("/")}h=v>=0?e[v]:"/"}let p=lS(o,h),g=d&&d!=="/"&&d.endsWith("/"),y=(c||d===".")&&i.endsWith("/");return!p.pathname.endsWith("/")&&(g||y)&&(p.pathname+="/"),p}var Vb=t=>t.replace(/[\\/]{2,}/g,"/"),_n=t=>Vb(t.join("/")),Wl=t=>t.replace(/\/+$/,""),uS=t=>Wl(t).replace(/^\/*/,"/"),dS=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,hS=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,fS=class{constructor(t,e,i,r=!1){this.status=t,this.statusText=e||"",this.internal=r,i instanceof Error?(this.data=i.toString(),this.error=i):this.data=i}};function pS(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function mS(t){let e=t.map(i=>i.route.path).filter(Boolean);return _n(e)||"/"}var Hb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function $b(t,e){let i=t;if(typeof i!="string"||!hf.test(i))return{absoluteURL:void 0,isExternal:!1,to:i};let r=i,o=!1;if(Hb)try{let c=new URL(window.location.href),d=Mb.test(i)?new URL(q5(i,c.protocol)):new URL(i),h=ha(d.pathname,e);d.origin===c.origin&&h!=null?i=h+d.search+d.hash:o=!0}catch{En(!1,`<Link to="${i}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:o,to:i}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var Ib=["POST","PUT","PATCH","DELETE"];new Set(Ib);var gS=["GET",...Ib];new Set(gS);var yS=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];function vS(t){try{return yS.includes(new URL(t).protocol)}catch{return!1}}var kr=k.createContext(null);kr.displayName="DataRouter";var yc=k.createContext(null);yc.displayName="DataRouterState";var qb=k.createContext(!1);function bS(){return k.useContext(qb)}var Fb=k.createContext({isTransitioning:!1});Fb.displayName="ViewTransition";var xS=k.createContext(new Map);xS.displayName="Fetchers";var wS=k.createContext(null);wS.displayName="Await";var Zt=k.createContext(null);Zt.displayName="Navigation";var Zs=k.createContext(null);Zs.displayName="Location";var Cn=k.createContext({outlet:null,matches:[],isDataRoute:!1});Cn.displayName="Route";var pf=k.createContext(null);pf.displayName="RouteError";var Gb="REACT_ROUTER_ERROR",SS="REDIRECT",jS="ROUTE_ERROR_RESPONSE";function kS(t){if(t.startsWith(`${Gb}:${SS}:{`))try{let e=JSON.parse(t.slice(28));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.location=="string"&&typeof e.reloadDocument=="boolean"&&typeof e.replace=="boolean")return e}catch{}}function _S(t){if(t.startsWith(`${Gb}:${jS}:{`))try{let e=JSON.parse(t.slice(40));if(typeof e=="object"&&e&&typeof e.status=="number"&&typeof e.statusText=="string")return new fS(e.status,e.statusText,e.data)}catch{}}function TS(t,{relative:e}={}){We(_r(),"useHref() may be used only in the context of a <Router> component.");let{basename:i,navigator:r}=k.useContext(Zt),{hash:o,pathname:c,search:d}=eo(t,{relative:e}),h=c;return i!=="/"&&(h=c==="/"?i:_n([i,c])),r.createHref({pathname:h,search:d,hash:o})}function _r(){return k.useContext(Zs)!=null}function Nt(){return We(_r(),"useLocation() may be used only in the context of a <Router> component."),k.useContext(Zs).location}var Kb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Yb(t){k.useContext(Zt).static||k.useLayoutEffect(t)}function mn(){let{isDataRoute:t}=k.useContext(Cn);return t?VS():ES()}function ES(){We(_r(),"useNavigate() may be used only in the context of a <Router> component.");let t=k.useContext(kr),{basename:e,navigator:i}=k.useContext(Zt),{matches:r}=k.useContext(Cn),{pathname:o}=Nt(),c=JSON.stringify(ff(r)),d=k.useRef(!1);return Yb(()=>{d.current=!0}),k.useCallback((p,g={})=>{if(En(d.current,Kb),!d.current)return;if(typeof p=="number"){i.go(p);return}let y=gc(p,JSON.parse(c),o,g.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:_n([e,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[e,i,c,o,t])}k.createContext(null);function CS(){let{matches:t}=k.useContext(Cn),e=t[t.length-1];return(e==null?void 0:e.params)??{}}function eo(t,{relative:e}={}){let{matches:i}=k.useContext(Cn),{pathname:r}=Nt(),o=JSON.stringify(ff(i));return k.useMemo(()=>gc(t,JSON.parse(o),r,e==="path"),[t,o,r,e])}function AS(t,e){return Xb(t,e)}function Xb(t,e,i){var E;We(_r(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=k.useContext(Zt),{matches:o}=k.useContext(Cn),c=o[o.length-1],d=c?c.params:{},h=c?c.pathname:"/",p=c?c.pathnameBase:"/",g=c&&c.route;{let T=g&&g.path||"";Jb(h,!g||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=Nt(),v;if(e){let T=typeof e=="string"?jr(e):e;We(p==="/"||((E=T.pathname)==null?void 0:E.startsWith(p)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${T.pathname}" was given in the \`location\` prop.`),v=T}else v=y;let x=v.pathname||"/",w=x;if(p!=="/"){let T=p.replace(/^\//,"").split("/");w="/"+x.replace(/^\//,"").split("/").slice(T.length).join("/")}let S=i&&i.state.matches.length?i.state.matches.map(T=>Object.assign(T,{route:i.manifest[T.route.id]||T.route})):Lb(t,{pathname:w});En(g||S!=null,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),En(S==null||S[S.length-1].route.element!==void 0||S[S.length-1].route.Component!==void 0||S[S.length-1].route.lazy!==void 0,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=MS(S&&S.map(T=>Object.assign({},T,{params:Object.assign({},d,T.params),pathname:_n([p,r.encodeLocation?r.encodeLocation(T.pathname.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?p:_n([p,r.encodeLocation?r.encodeLocation(T.pathnameBase.replace(/%/g,"%25").replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),o,i);return e&&_?k.createElement(Zs.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",mask:void 0,...v},navigationType:"POP"}},_):_}function NS(){let t=PS(),e=pS(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),i=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:r},c={padding:"2px 4px",backgroundColor:r},d=null;return console.error("Error handled by React Router default ErrorBoundary:",t),d=k.createElement(k.Fragment,null,k.createElement("p",null,"💿 Hey developer 👋"),k.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",k.createElement("code",{style:c},"ErrorBoundary")," or"," ",k.createElement("code",{style:c},"errorElement")," prop on your route.")),k.createElement(k.Fragment,null,k.createElement("h2",null,"Unexpected Application Error!"),k.createElement("h3",{style:{fontStyle:"italic"}},e),i?k.createElement("pre",{style:o},i):null,d)}var RS=k.createElement(NS,null),Wb=class extends k.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,e){return e.location!==t.location||e.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:e.error,location:e.location,revalidation:t.revalidation||e.revalidation}}componentDidCatch(t,e){this.props.onError?this.props.onError(t,e):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const i=_S(t.digest);i&&(t=i)}let e=t!==void 0?k.createElement(Cn.Provider,{value:this.props.routeContext},k.createElement(pf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?k.createElement(OS,{error:t},e):e}};Wb.contextType=qb;var Jd=new WeakMap;function OS({children:t,error:e}){let{basename:i}=k.useContext(Zt);if(typeof e=="object"&&e&&"digest"in e&&typeof e.digest=="string"){let r=kS(e.digest);if(r){let o=Jd.get(e);if(o)throw o;let c=$b(r.location,i),d=c.absoluteURL||c.to;if(vS(d))throw new Error("Invalid redirect location");if(Hb&&!Jd.get(e))if(c.isExternal||r.reloadDocument)window.location.href=d;else{const h=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(c.to,{replace:r.replace}));throw Jd.set(e,h),h}return k.createElement("meta",{httpEquiv:"refresh",content:`0;url=${d}`})}}return t}function DS({routeContext:t,match:e,children:i}){let r=k.useContext(kr);return r&&r.static&&r.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=e.route.id),k.createElement(Cn.Provider,{value:t},i)}function MS(t,e=[],i){let r=i==null?void 0:i.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(e.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let o=t,c=r==null?void 0:r.errors;if(c!=null){let y=o.findIndex(v=>v.route.id&&(c==null?void 0:c[v.route.id])!==void 0);We(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(",")}`),o=o.slice(0,Math.min(o.length,y+1))}let d=!1,h=-1;if(i&&r){d=r.renderFallback;for(let y=0;y<o.length;y++){let v=o[y];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=y),v.route.id){let{loaderData:x,errors:w}=r,S=v.route.loader&&!x.hasOwnProperty(v.route.id)&&(!w||w[v.route.id]===void 0);if(v.route.lazy||S){i.isStatic&&(d=!0),h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}}let p=i==null?void 0:i.onError,g=r&&p?(y,v)=>{var x,w;p(y,{location:r.location,params:((w=(x=r.matches)==null?void 0:x[0])==null?void 0:w.params)??{},pattern:mS(r.matches),errorInfo:v})}:void 0;return o.reduceRight((y,v,x)=>{let w,S=!1,_=null,E=null;r&&(w=c&&v.route.id?c[v.route.id]:void 0,_=v.route.errorElement||RS,d&&(h<0&&x===0?(Jb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),S=!0,E=null):h===x&&(S=!0,E=v.route.hydrateFallbackElement||null)));let T=e.concat(o.slice(0,x+1)),O=()=>{let R;return w?R=_:S?R=E:v.route.Component?R=k.createElement(v.route.Component,null):v.route.element?R=v.route.element:R=y,k.createElement(DS,{match:v,routeContext:{outlet:y,matches:T,isDataRoute:r!=null},children:R})};return r&&(v.route.ErrorBoundary||v.route.errorElement||x===0)?k.createElement(Wb,{location:r.location,revalidation:r.revalidation,component:_,error:w,children:O(),routeContext:{outlet:null,matches:T,isDataRoute:!0},onError:g}):O()},null)}function mf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function LS(t){let e=k.useContext(kr);return We(e,mf(t)),e}function zS(t){let e=k.useContext(yc);return We(e,mf(t)),e}function US(t){let e=k.useContext(Cn);return We(e,mf(t)),e}function gf(t){let e=US(t),i=e.matches[e.matches.length-1];return We(i.route.id,`${t} can only be used on routes that contain a unique "id"`),i.route.id}function BS(){return gf("useRouteId")}function PS(){var r;let t=k.useContext(pf),e=zS("useRouteError"),i=gf("useRouteError");return t!==void 0?t:(r=e.errors)==null?void 0:r[i]}function VS(){let{router:t}=LS("useNavigate"),e=gf("useNavigate"),i=k.useRef(!1);return Yb(()=>{i.current=!0}),k.useCallback(async(o,c={})=>{En(i.current,Kb),i.current&&(typeof o=="number"?await t.navigate(o):await t.navigate(o,{fromRouteId:e,...c}))},[t,e])}var py={};function Jb(t,e,i){!e&&!py[t]&&(py[t]=!0,En(!1,i))}k.memo(HS);function HS({routes:t,manifest:e,future:i,state:r,isStatic:o,onError:c}){return Xb(t,void 0,{manifest:e,state:r,isStatic:o,onError:c})}function $S({to:t,replace:e,state:i,relative:r}){We(_r(),"<Navigate> may be used only in the context of a <Router> component.");let{static:o}=k.useContext(Zt);En(!o,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:c}=k.useContext(Cn),{pathname:d}=Nt(),h=mn(),p=gc(t,ff(c),d,r==="path"),g=JSON.stringify(p);return k.useEffect(()=>{h(JSON.parse(g),{replace:e,state:i,relative:r})},[h,g,r,e,i]),null}function Pt(t){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function IS({basename:t="/",children:e=null,location:i,navigationType:r="POP",navigator:o,static:c=!1,useTransitions:d}){We(!_r(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),p=k.useMemo(()=>({basename:h,navigator:o,static:c,useTransitions:d,future:{}}),[h,o,c,d]);typeof i=="string"&&(i=jr(i));let{pathname:g="/",search:y="",hash:v="",state:x=null,key:w="default",mask:S}=i,_=k.useMemo(()=>{let E=ha(g,h);return E==null?null:{location:{pathname:E,search:y,hash:v,state:x,key:w,mask:S},navigationType:r}},[h,g,y,v,x,w,r,S]);return En(_!=null,`<Router basename="${h}"> is not able to match the URL "${g}${y}${v}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:k.createElement(Zt.Provider,{value:p},k.createElement(Zs.Provider,{children:e,value:_}))}function qS({children:t,location:e}){return AS(Eh(t),e)}function Eh(t,e=[]){let i=[];return k.Children.forEach(t,(r,o)=>{if(!k.isValidElement(r))return;let c=[...e,o];if(r.type===k.Fragment){i.push.apply(i,Eh(r.props.children,c));return}We(r.type===Pt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!r.props.index||!r.props.children,"An index route cannot have child routes.");let d={id:r.props.id||c.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(d.children=Eh(r.props.children,c)),i.push(d)}),i}var Bl="get",Pl="application/x-www-form-urlencoded";function vc(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function FS(t){return vc(t)&&t.tagName.toLowerCase()==="button"}function GS(t){return vc(t)&&t.tagName.toLowerCase()==="form"}function KS(t){return vc(t)&&t.tagName.toLowerCase()==="input"}function YS(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function XS(t,e){return t.button===0&&(!e||e==="_self")&&!YS(t)}var kl=null;function WS(){if(kl===null)try{new FormData(document.createElement("form"),0),kl=!1}catch{kl=!0}return kl}var JS=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Qd(t){return t!=null&&!JS.has(t)?(En(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Pl}"`),null):t}function QS(t,e){let i,r,o,c,d;if(GS(t)){let h=t.getAttribute("action");r=h?ha(h,e):null,i=t.getAttribute("method")||Bl,o=Qd(t.getAttribute("enctype"))||Pl,c=new FormData(t)}else if(FS(t)||KS(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=t.getAttribute("formaction")||h.getAttribute("action");if(r=p?ha(p,e):null,i=t.getAttribute("formmethod")||h.getAttribute("method")||Bl,o=Qd(t.getAttribute("formenctype"))||Qd(h.getAttribute("enctype"))||Pl,c=new FormData(h,t),!WS()){let{name:g,type:y,value:v}=t;if(y==="image"){let x=g?`${g}.`:"";c.append(`${x}x`,"0"),c.append(`${x}y`,"0")}else g&&c.append(g,v)}}else{if(vc(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');i=Bl,r=null,o=Pl,d=t}return c&&o==="text/plain"&&(d=c,c=void 0),{action:r,method:i.toLowerCase(),encType:o,formData:c,body:d}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function yf(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Qb(t,e,i,r){let o=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return i?o.pathname.endsWith("/")?o.pathname=`${o.pathname}_.${r}`:o.pathname=`${o.pathname}.${r}`:o.pathname==="/"?o.pathname=`_root.${r}`:e&&ha(o.pathname,e)==="/"?o.pathname=`${Wl(e)}/_root.${r}`:o.pathname=`${Wl(o.pathname)}.${r}`,o}async function ZS(t,e){if(t.id in e)return e[t.id];try{let i=await import(t.module);return e[t.id]=i,i}catch(i){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(i),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ej(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function tj(t,e,i){let r=await Promise.all(t.map(async o=>{let c=e.routes[o.route.id];if(c){let d=await ZS(c,i);return d.links?d.links():[]}return[]}));return rj(r.flat(1).filter(ej).filter(o=>o.rel==="stylesheet"||o.rel==="preload").map(o=>o.rel==="stylesheet"?{...o,rel:"prefetch",as:"style"}:{...o,rel:"prefetch"}))}function my(t,e,i,r,o,c){let d=(p,g)=>i[g]?p.route.id!==i[g].route.id:!0,h=(p,g)=>{var y;return i[g].pathname!==p.pathname||((y=i[g].route.path)==null?void 0:y.endsWith("*"))&&i[g].params["*"]!==p.params["*"]};return c==="assets"?e.filter((p,g)=>d(p,g)||h(p,g)):c==="data"?e.filter((p,g)=>{var v;let y=r.routes[p.route.id];if(!y||!y.hasLoader)return!1;if(d(p,g)||h(p,g))return!0;if(p.route.shouldRevalidate){let x=p.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:((v=i[0])==null?void 0:v.params)||{},nextUrl:new URL(t,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof x=="boolean")return x}return!0}):[]}function nj(t,e,{includeHydrateFallback:i}={}){return aj(t.map(r=>{let o=e.routes[r.route.id];if(!o)return[];let c=[o.module];return o.clientActionModule&&(c=c.concat(o.clientActionModule)),o.clientLoaderModule&&(c=c.concat(o.clientLoaderModule)),i&&o.hydrateFallbackModule&&(c=c.concat(o.hydrateFallbackModule)),o.imports&&(c=c.concat(o.imports)),c}).flat(1))}function aj(t){return[...new Set(t)]}function ij(t){let e={},i=Object.keys(t).sort();for(let r of i)e[r]=t[r];return e}function rj(t,e){let i=new Set;return new Set(e),t.reduce((r,o)=>{let c=JSON.stringify(ij(o));return i.has(c)||(i.add(c),r.push({key:c,link:o})),r},[])}function vf(){let t=k.useContext(kr);return yf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function sj(){let t=k.useContext(yc);return yf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var bf=k.createContext(void 0);bf.displayName="FrameworkContext";function bc(){let t=k.useContext(bf);return yf(t,"You must render this element inside a <HydratedRouter> element"),t}function oj(t,e){let i=k.useContext(bf),[r,o]=k.useState(!1),[c,d]=k.useState(!1),{onFocus:h,onBlur:p,onMouseEnter:g,onMouseLeave:y,onTouchStart:v}=e,x=k.useRef(null);k.useEffect(()=>{if(t==="render"&&d(!0),t==="viewport"){let _=T=>{T.forEach(O=>{d(O.isIntersecting)})},E=new IntersectionObserver(_,{threshold:.5});return x.current&&E.observe(x.current),()=>{E.disconnect()}}},[t]),k.useEffect(()=>{if(r){let _=setTimeout(()=>{d(!0)},100);return()=>{clearTimeout(_)}}},[r]);let w=()=>{o(!0)},S=()=>{o(!1),d(!1)};return i?t!=="intent"?[c,x,{}]:[c,x,{onFocus:ks(h,w),onBlur:ks(p,S),onMouseEnter:ks(g,w),onMouseLeave:ks(y,S),onTouchStart:ks(v,w)}]:[!1,x,{}]}function ks(t,e){return i=>{t&&t(i),i.defaultPrevented||e(i)}}function lj({page:t,...e}){let i=bS(),{nonce:r}=bc(),{router:o}=vf(),c=k.useMemo(()=>Lb(o.routes,t,o.basename),[o.routes,t,o.basename]);return c?(e.nonce==null&&r&&(e={...e,nonce:r}),i?k.createElement(uj,{page:t,matches:c,...e}):k.createElement(dj,{page:t,matches:c,...e})):null}function cj(t){let{manifest:e,routeModules:i}=bc(),[r,o]=k.useState([]);return k.useEffect(()=>{let c=!1;return tj(t,e,i).then(d=>{c||o(d)}),()=>{c=!0}},[t,e,i]),r}function uj({page:t,matches:e,...i}){let r=Nt(),{future:o}=bc(),{basename:c}=vf(),d=k.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let h=Qb(t,c,o.v8_trailingSlashAwareDataRequests,"rsc"),p=!1,g=[];for(let y of e)typeof y.route.shouldRevalidate=="function"?p=!0:g.push(y.route.id);return p&&g.length>0&&h.searchParams.set("_routes",g.join(",")),[h.pathname+h.search]},[c,o.v8_trailingSlashAwareDataRequests,t,r,e]);return k.createElement(k.Fragment,null,d.map(h=>k.createElement("link",{key:h,rel:"prefetch",as:"fetch",href:h,...i})))}function dj({page:t,matches:e,...i}){let r=Nt(),{future:o,manifest:c,routeModules:d}=bc(),{basename:h}=vf(),{loaderData:p,matches:g}=sj(),y=k.useMemo(()=>my(t,e,g,c,r,"data"),[t,e,g,c,r]),v=k.useMemo(()=>my(t,e,g,c,r,"assets"),[t,e,g,c,r]),x=k.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let _=new Set,E=!1;if(e.forEach(O=>{var L;let R=c.routes[O.route.id];!R||!R.hasLoader||(!y.some(K=>K.route.id===O.route.id)&&O.route.id in p&&((L=d[O.route.id])!=null&&L.shouldRevalidate)||R.hasClientLoader?E=!0:_.add(O.route.id))}),_.size===0)return[];let T=Qb(t,h,o.v8_trailingSlashAwareDataRequests,"data");return E&&_.size>0&&T.searchParams.set("_routes",e.filter(O=>_.has(O.route.id)).map(O=>O.route.id).join(",")),[T.pathname+T.search]},[h,o.v8_trailingSlashAwareDataRequests,p,r,c,y,e,t,d]),w=k.useMemo(()=>nj(v,c),[v,c]),S=cj(v);return k.createElement(k.Fragment,null,x.map(_=>k.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...i})),w.map(_=>k.createElement("link",{key:_,rel:"modulepreload",href:_,...i})),S.map(({key:_,link:E})=>k.createElement("link",{key:_,nonce:i.nonce,...E,crossOrigin:E.crossOrigin??i.crossOrigin})))}function hj(...t){return e=>{t.forEach(i=>{typeof i=="function"?i(e):i!=null&&(i.current=e)})}}var fj=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{fj&&(window.__reactRouterVersion="7.18.0")}catch{}function pj({basename:t,children:e,useTransitions:i,window:r}){let o=k.useRef();o.current==null&&(o.current=F5({window:r,v5Compat:!0}));let c=o.current,[d,h]=k.useState({action:c.action,location:c.location}),p=k.useCallback(g=>{i===!1?h(g):k.startTransition(()=>h(g))},[i]);return k.useLayoutEffect(()=>c.listen(p),[c,p]),k.createElement(IS,{basename:t,children:e,location:d.location,navigationType:d.action,navigator:c,useTransitions:i})}var xf=k.forwardRef(function({onClick:e,discover:i="render",prefetch:r="none",relative:o,reloadDocument:c,replace:d,mask:h,state:p,target:g,to:y,preventScrollReset:v,viewTransition:x,defaultShouldRevalidate:w,...S},_){let{basename:E,navigator:T,useTransitions:O}=k.useContext(Zt),R=typeof y=="string"&&hf.test(y),L=$b(y,E);y=L.to;let K=TS(y,{relative:o}),W=Nt(),F=null;if(h){let je=gc(h,[],W.mask?W.mask.pathname:"/",!0);E!=="/"&&(je.pathname=je.pathname==="/"?E:_n([E,je.pathname])),F=T.createHref(je)}let[Y,ee,re]=oj(r,S),me=vj(y,{replace:d,mask:h,state:p,target:g,preventScrollReset:v,relative:o,viewTransition:x,defaultShouldRevalidate:w,useTransitions:O});function fe(je){e&&e(je),je.defaultPrevented||me(je)}let Oe=!(L.isExternal||c),Ne=k.createElement("a",{...S,...re,href:(Oe?F:void 0)||L.absoluteURL||K,onClick:Oe?fe:e,ref:hj(_,ee),target:g,"data-discover":!R&&i==="render"?"true":void 0});return Y&&!R?k.createElement(k.Fragment,null,Ne,k.createElement(lj,{page:K})):Ne});xf.displayName="Link";var mj=k.forwardRef(function({"aria-current":e="page",caseSensitive:i=!1,className:r="",end:o=!1,style:c,to:d,viewTransition:h,children:p,...g},y){let v=eo(d,{relative:g.relative}),x=Nt(),w=k.useContext(yc),{navigator:S,basename:_}=k.useContext(Zt),E=w!=null&&jj(v)&&h===!0,T=S.encodeLocation?S.encodeLocation(v).pathname:v.pathname,O=x.pathname,R=w&&w.navigation&&w.navigation.location?w.navigation.location.pathname:null;i||(O=O.toLowerCase(),R=R?R.toLowerCase():null,T=T.toLowerCase()),R&&_&&(R=ha(R,_)||R);const L=T!=="/"&&T.endsWith("/")?T.length-1:T.length;let K=O===T||!o&&O.startsWith(T)&&O.charAt(L)==="/",W=R!=null&&(R===T||!o&&R.startsWith(T)&&R.charAt(T.length)==="/"),F={isActive:K,isPending:W,isTransitioning:E},Y=K?e:void 0,ee;typeof r=="function"?ee=r(F):ee=[r,K?"active":null,W?"pending":null,E?"transitioning":null].filter(Boolean).join(" ");let re=typeof c=="function"?c(F):c;return k.createElement(xf,{...g,"aria-current":Y,className:ee,ref:y,style:re,to:d,viewTransition:h},typeof p=="function"?p(F):p)});mj.displayName="NavLink";var gj=k.forwardRef(({discover:t="render",fetcherKey:e,navigate:i,reloadDocument:r,replace:o,state:c,method:d=Bl,action:h,onSubmit:p,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x,...w},S)=>{let{useTransitions:_}=k.useContext(Zt),E=wj(),T=Sj(h,{relative:g}),O=d.toLowerCase()==="get"?"get":"post",R=typeof h=="string"&&hf.test(h),L=K=>{if(p&&p(K),K.defaultPrevented)return;K.preventDefault();let W=K.nativeEvent.submitter,F=(W==null?void 0:W.getAttribute("formmethod"))||d,Y=()=>E(W||K.currentTarget,{fetcherKey:e,method:F,navigate:i,replace:o,state:c,relative:g,preventScrollReset:y,viewTransition:v,defaultShouldRevalidate:x});_&&i!==!1?k.startTransition(()=>Y()):Y()};return k.createElement("form",{ref:S,method:O,action:T,onSubmit:r?p:L,...w,"data-discover":!R&&t==="render"?"true":void 0})});gj.displayName="Form";function yj(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Zb(t){let e=k.useContext(kr);return We(e,yj(t)),e}function vj(t,{target:e,replace:i,mask:r,state:o,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p,useTransitions:g}={}){let y=mn(),v=Nt(),x=eo(t,{relative:d});return k.useCallback(w=>{if(XS(w,e)){w.preventDefault();let S=i!==void 0?i:Hs(v)===Hs(x),_=()=>y(t,{replace:S,mask:r,state:o,preventScrollReset:c,relative:d,viewTransition:h,defaultShouldRevalidate:p});g?k.startTransition(()=>_()):_()}},[v,y,x,i,r,o,e,t,c,d,h,p,g])}var bj=0,xj=()=>`__${String(++bj)}__`;function wj(){let{router:t}=Zb("useSubmit"),{basename:e}=k.useContext(Zt),i=BS(),r=t.fetch,o=t.navigate;return k.useCallback(async(c,d={})=>{let{action:h,method:p,encType:g,formData:y,body:v}=QS(c,e);if(d.navigate===!1){let x=d.fetcherKey||xj();await r(x,i,d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||g,flushSync:d.flushSync})}else await o(d.action||h,{defaultShouldRevalidate:d.defaultShouldRevalidate,preventScrollReset:d.preventScrollReset,formData:y,body:v,formMethod:d.method||p,formEncType:d.encType||g,replace:d.replace,state:d.state,fromRouteId:i,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,o,e,i])}function Sj(t,{relative:e}={}){let{basename:i}=k.useContext(Zt),r=k.useContext(Cn);We(r,"useFormAction must be used inside a RouteContext");let[o]=r.matches.slice(-1),c={...eo(t||".",{relative:e})},d=Nt();if(t==null){c.search=d.search;let h=new URLSearchParams(c.search),p=h.getAll("index");if(p.some(y=>y==="")){h.delete("index"),p.filter(v=>v).forEach(v=>h.append("index",v));let y=h.toString();c.search=y?`?${y}`:""}}return(!t||t===".")&&o.route.index&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),i!=="/"&&(c.pathname=c.pathname==="/"?i:_n([i,c.pathname])),Hs(c)}function jj(t,{relative:e}={}){let i=k.useContext(Fb);We(i!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=Zb("useViewTransitionState"),o=eo(t,{relative:e});if(!i.isTransitioning)return!1;let c=ha(i.currentLocation.pathname,r)||i.currentLocation.pathname,d=ha(i.nextLocation.pathname,r)||i.nextLocation.pathname;return Xl(o.pathname,d)!=null||Xl(o.pathname,c)!=null}function wf(){const t=mn(),i=Nt().pathname==="/",[r,o]=k.useState(!1),[c,d]=k.useState(!1),[h,p]=k.useState("");k.useEffect(()=>{const y=()=>o(window.scrollY>40);return window.addEventListener("scroll",y),()=>window.removeEventListener("scroll",y)},[]),k.useEffect(()=>{document.querySelectorAll('a[href^="#"]').forEach(y=>{y.addEventListener("click",function(v){v.preventDefault();const x=document.querySelector(this.getAttribute("href"));x&&x.scrollIntoView({behavior:"smooth"})})})},[]);const g=()=>d(!1);return k.useEffect(()=>(c?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[c]),k.useEffect(()=>{const y=v=>{v.key==="Escape"&&g()};return window.addEventListener("keydown",y),()=>window.removeEventListener("keydown",y)},[]),u.jsxs(u.Fragment,{children:[u.jsxs("nav",{className:r?"scrolled":"",children:[u.jsx("div",{className:"logo",children:u.jsx("h1",{children:"FrameX"})}),u.jsx("ul",{children:i?u.jsxs(u.Fragment,{children:[u.jsx("li",{children:u.jsx("a",{href:"#features",onClick:g,children:"Features"})}),u.jsx("li",{children:u.jsx("a",{href:"#community",onClick:g,children:"Community"})}),u.jsx("li",{children:u.jsx("a",{href:"#about",onClick:g,children:"About"})}),u.jsx("li",{children:u.jsx("a",{href:"#pricing",onClick:g,children:"Pricing"})})]}):u.jsx("li",{children:u.jsx(xf,{to:"/",className:"back-home-link",onClick:g,children:"← Back to Home"})})}),u.jsxs("div",{className:"nav-right",children:[i&&u.jsxs("div",{className:"auth-buttons",children:[u.jsx("button",{className:"login",onClick:()=>t("/login"),children:"Log In"}),u.jsx("button",{className:"get-started",onClick:()=>t("/login"),children:"Get Started"})]}),u.jsx("button",{className:"menu-toggle",onClick:()=>d(!c),"aria-label":"Toggle menu",children:u.jsx("i",{className:`menu-toggle-icon ${c?"fas fa-times":"fas fa-bars"}`})})]}),u.jsx("style",{children:`
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
      `})]}),u.jsx("div",{className:`mobile-backdrop ${c?"active":""}`,onClick:g}),u.jsxs("div",{className:`mobile-drawer ${c?"active":""}`,children:[u.jsx("button",{className:"drawer-close",onClick:g,"aria-label":"Close menu",children:u.jsx("i",{className:"fas fa-times"})}),u.jsxs("div",{className:"drawer-menu-items",children:[u.jsx("a",{href:"#features",className:h==="features"?"active":"",onClick:()=>{p("features"),g()},children:"Features"}),u.jsx("a",{href:"#community",className:h==="community"?"active":"",onClick:()=>{p("community"),g()},children:"Community"}),u.jsx("a",{href:"#about",className:h==="about"?"active":"",onClick:()=>{p("about"),g()},children:"About"}),u.jsx("a",{href:"#pricing",className:h==="pricing"?"active":"",onClick:()=>{p("pricing"),g()},children:"Pricing"}),u.jsx("a",{href:"/login",className:"drawer-cta",onClick:g,children:"Get Started"})]})]})]})}function Sf(){return u.jsxs("footer",{children:[u.jsxs("div",{className:"footer-content",children:[u.jsxs("div",{className:"footer-logo",children:[u.jsx("div",{className:"logo-icon",children:"F"}),u.jsx("h2",{children:"FrameX"})]}),u.jsxs("div",{className:"footer-links",children:[u.jsx("a",{href:"#",children:"Privacy Policy"}),u.jsx("a",{href:"/terms",children:"Terms of Service"}),u.jsx("a",{href:"#",children:"Contact Us"})]})]}),u.jsx("div",{className:"footer-divider"}),u.jsx("p",{children:"© 2026 FrameX. All rights reserved."}),u.jsx("style",{children:`
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
      `})]})}function kj(){const t=mn(),[e,i]=k.useState(!1);return k.useEffect(()=>{document.title="FrameX | Share Your World in Frames"},[]),k.useEffect(()=>{const r=document.querySelectorAll(".reveal"),o=new IntersectionObserver(g=>{g.forEach(y=>{y.isIntersecting&&(y.target.classList.add("visible"),o.unobserve(y.target))})},{threshold:.1,rootMargin:"0px 0px -60px 0px"});r.forEach(g=>o.observe(g)),document.querySelectorAll(".feature-card").forEach(g=>{g.addEventListener("mousemove",y=>{const v=g.getBoundingClientRect(),x=(y.clientX-v.left)/v.width*100,w=(y.clientY-v.top)/v.height*100;g.style.setProperty("--mouse-x",x+"%"),g.style.setProperty("--mouse-y",w+"%")})});const d=document.querySelectorAll(".hero-stat"),h=g=>{const y=(g.clientX/window.innerWidth-.5)*6,v=(g.clientY/window.innerHeight-.5)*6;d.forEach((x,w)=>{const S=w===0?1:-.8;x.style.transform=`translate(${y*S}px, ${v*S}px)`})};window.addEventListener("mousemove",h);const p=document.querySelector(".hero-media");if(p){const g=new IntersectionObserver(([y])=>{y.isIntersecting&&(y.target.classList.add("card-entered"),g.unobserve(y.target))},{threshold:.1,rootMargin:"0px 0px -40px 0px"});return g.observe(p),()=>{o.disconnect(),window.removeEventListener("mousemove",h),g.disconnect()}}return()=>{o.disconnect(),window.removeEventListener("mousemove",h)}},[]),u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(wf,{}),u.jsxs("section",{className:"hero",id:"hero",children:[u.jsxs("div",{className:"hero-content",children:[u.jsxs("div",{className:"hero-badge",children:[u.jsx("span",{children:"New"}),"Now available on iOS & Android"]}),u.jsxs("h1",{children:["Share Your World",u.jsx("br",{}),"in ",u.jsx("span",{className:"gradient-text",children:"Every Frame"})]}),u.jsx("p",{children:"Discover, create, and connect with short videos and photos. Join millions of creators sharing their stories through the lens."}),u.jsxs("div",{className:"cta-buttons",children:[u.jsxs("a",{href:"/login",className:"btn-primary",onClick:r=>{r.preventDefault(),t("/login")},children:["Get Started ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsxs("a",{href:"#download",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-mobile-alt"})," Download App"]}),u.jsxs("a",{href:"#community",className:"btn-secondary",children:[u.jsx("i",{className:"fas fa-play"})," Explore Community"]})]})]}),u.jsxs("div",{className:"hero-media",children:[u.jsxs("div",{className:"glass-card-stack",children:[u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-video"})}),u.jsx("h3",{children:"Short Videos"}),u.jsx("p",{children:"Create and watch short, engaging videos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-decoration glass-card-decoration--2"}),u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-camera"})}),u.jsx("h3",{children:"Photo Sharing"}),u.jsx("p",{children:"Share moments with high-quality photos"})]}),u.jsxs("div",{className:"glass-card",children:[u.jsx("div",{className:"glass-card-icon",children:u.jsx("i",{className:"fas fa-users"})}),u.jsx("h3",{children:"Community"}),u.jsx("p",{children:"Connect with creators worldwide"})]})]}),u.jsxs("div",{className:"hero-stat hero-stat--1",children:[u.jsx("strong",{children:"10M+"}),u.jsx("span",{children:"Active Users"})]}),u.jsxs("div",{className:"hero-stat hero-stat--2",children:[u.jsx("strong",{children:"4.8★"}),u.jsx("span",{children:"App Rating"})]})]})]}),u.jsxs("section",{id:"features",className:"features",children:[u.jsxs("div",{className:"features-header reveal",children:[u.jsx("span",{className:"section-label",children:"Features"}),u.jsx("h2",{children:"Built for Creators"}),u.jsx("p",{children:"Everything you need to capture, edit, and share your perspective with the world."})]}),u.jsx("div",{className:"feature-cards",children:[{icon:"fa-video",title:"Short Videos",desc:"Create and watch short, engaging videos on any topic. Our smart editor makes it effortless."},{icon:"fa-camera",title:"Photo Sharing",desc:"Share moments with high-quality photos and professional-grade filters built right in."},{icon:"fa-users",title:"Community",desc:"Connect with creators and friends from around the world. Your audience is waiting."}].map((r,o)=>u.jsxs("div",{className:`feature-card reveal reveal-delay-${o+1}`,children:[u.jsx("div",{className:"feature-icon",children:u.jsx("i",{className:`fas ${r.icon}`})}),u.jsx("h3",{children:r.title}),u.jsx("p",{children:r.desc})]},r.title))})]}),!e&&u.jsx("div",{className:"browser-bar",children:u.jsxs("div",{className:"browser-bar-content",children:[u.jsxs("div",{className:"browser-bar-text",children:[u.jsx("span",{className:"browser-bar-icon",children:u.jsx("i",{className:"fas fa-mobile-alt"})}),u.jsx("span",{children:"Continue in browser for the full experience"})]}),u.jsxs("button",{className:"browser-bar-btn",children:["Continue ",u.jsx("i",{className:"fas fa-arrow-right"})]}),u.jsx("button",{className:"browser-bar-close",onClick:()=>i(!0),"aria-label":"Dismiss",children:u.jsx("i",{className:"fas fa-times"})})]})}),u.jsxs("section",{id:"community",className:"community",children:[u.jsx("h2",{className:"reveal",children:"Join Our Community"}),u.jsx("p",{className:"reveal reveal-delay-1",children:"Follow us on social media and be part of the FrameX movement."}),u.jsx("div",{className:"social-links reveal reveal-delay-2",children:["instagram","twitter","tiktok","facebook","youtube"].map(r=>u.jsx("a",{href:"#",className:"social-link","aria-label":r.charAt(0).toUpperCase()+r.slice(1),children:u.jsx("i",{className:`fab fa-${r}`})},r))})]}),u.jsx("section",{id:"download",className:"download",children:u.jsxs("div",{className:"download-glass reveal",children:[u.jsx("span",{className:"section-label",children:"Get the App"}),u.jsx("h2",{children:"Download FrameX Now"}),u.jsx("p",{children:"Available on iOS and Android. Start sharing your story today."}),u.jsxs("div",{className:"download-buttons",children:[u.jsxs("a",{href:"#",className:"app-store",children:[u.jsx("i",{className:"fab fa-apple fa-lg"})," App Store"]}),u.jsxs("a",{href:"#",className:"google-play",children:[u.jsx("i",{className:"fab fa-google-play fa-lg"})," Google Play"]})]})]})}),u.jsx(Sf,{}),u.jsx("style",{children:`
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
      `})]})}function _j(){k.useEffect(()=>{const i=new IntersectionObserver(r=>{r.forEach(o=>{o.isIntersecting&&o.target.classList.add("visible")})},{threshold:.1});return document.querySelectorAll(".reveal").forEach(r=>i.observe(r)),()=>i.disconnect()},[]);const t=[{name:"Alex Chen",role:"CEO & Founder",icon:"fa-user-tie"},{name:"Sarah Mitchell",role:"CTO",icon:"fa-laptop-code"},{name:"David Park",role:"Head of Design",icon:"fa-paint-brush"},{name:"Emily Rodriguez",role:"VP of Engineering",icon:"fa-cogs"}],e=[{icon:"fa-bolt",title:"Lightning Fast",desc:"Optimized for speed with sub-second response times across all platforms."},{icon:"fa-shield-alt",title:"Secure by Design",desc:"End-to-end encryption with enterprise-grade security protocols."},{icon:"fa-layer-group",title:"Modular Architecture",desc:"Plugin-based system that grows with your creative workflow."},{icon:"fa-robot",title:"AI-Powered",desc:"Intelligent suggestions and automation that learn from your style."}];return u.jsxs(u.Fragment,{children:[u.jsx(wf,{}),u.jsx("div",{className:"aurora-bg"}),u.jsxs("main",{className:"about-page",children:[u.jsxs("section",{className:"about-hero",children:[u.jsx("div",{className:"about-hero-bg-glow"}),u.jsxs("div",{className:"about-hero-content",children:[u.jsx("span",{className:"section-label reveal",children:"About FrameX"}),u.jsxs("h1",{className:"about-hero-title reveal reveal-delay-1",children:["Redefining ",u.jsx("span",{className:"lemon-text",children:"Creative"})," Boundaries"]}),u.jsx("p",{className:"about-hero-sub reveal reveal-delay-2",children:"We believe great design should be effortless. FrameX brings together cutting-edge AI, real-time collaboration, and intuitive tools to empower creators worldwide."}),u.jsxs("div",{className:"about-hero-stats reveal reveal-delay-3",children:[u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"50K+"}),u.jsx("span",{className:"stat-label",children:"Active Users"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"99.9%"}),u.jsx("span",{className:"stat-label",children:"Uptime"})]}),u.jsx("div",{className:"stat-divider"}),u.jsxs("div",{className:"stat-item",children:[u.jsx("span",{className:"stat-number",children:"120+"}),u.jsx("span",{className:"stat-label",children:"Countries"})]})]})]})]}),u.jsx("section",{className:"about-section",id:"our-story",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Our Story"}),u.jsx("h2",{className:"section-title reveal",children:"How FrameX Began"}),u.jsxs("div",{className:"story-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"story-icon",children:u.jsx("i",{className:"fas fa-quote-left"})}),u.jsx("p",{className:"story-text",children:"FrameX was born in 2023 from a simple observation: creative tools were either powerful but complex, or simple but limiting. Our founders—engineers, designers, and artists—set out to build something different: a platform that combines professional-grade capabilities with an intuitive, joyful experience."}),u.jsx("p",{className:"story-text",children:"What started as a small project in a co-working space has grown into a global community of creators. Today, FrameX powers workflows for freelance designers, creative agencies, and enterprise teams across 120+ countries."}),u.jsxs("div",{className:"story-meta",children:[u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-calendar"})," Founded 2023"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-users"})," Team of 48"]}),u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-globe"})," Global Reach"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"mission-vision",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Mission & Vision"}),u.jsx("h2",{className:"section-title reveal",children:"What Drives Us"}),u.jsxs("div",{className:"mv-grid",children:[u.jsxs("div",{className:"mv-card glass reveal reveal-delay-1",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-bullseye"})}),u.jsx("h3",{children:"Our Mission"}),u.jsx("p",{children:"To democratize creative technology by building tools that are powerful enough for professionals yet accessible enough for beginners. We remove barriers, not features."})]}),u.jsxs("div",{className:"mv-card glass reveal reveal-delay-2",children:[u.jsx("div",{className:"mv-icon",children:u.jsx("i",{className:"fas fa-eye"})}),u.jsx("h3",{children:"Our Vision"}),u.jsx("p",{children:"A world where anyone can bring their creative vision to life without wrestling with software. We envision FrameX as the invisible bridge between imagination and creation."})]})]})]})}),u.jsx("section",{className:"about-section",id:"what-makes-us-different",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Why FrameX"}),u.jsx("h2",{className:"section-title reveal",children:"What Makes Us Different"}),u.jsx("div",{className:"features-grid",children:e.map((i,r)=>u.jsxs("div",{className:`feature-card glass reveal reveal-delay-${r+1}`,children:[u.jsx("div",{className:"feature-card-icon",children:u.jsx("i",{className:`fas ${i.icon}`})}),u.jsx("h3",{children:i.title}),u.jsx("p",{children:i.desc})]},i.title))})]})}),u.jsx("section",{className:"about-section",id:"team",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Leadership"}),u.jsx("h2",{className:"section-title reveal",children:"Meet the Team"}),u.jsx("div",{className:"team-grid",children:t.map((i,r)=>u.jsxs("div",{className:`team-card glass reveal reveal-delay-${r+1}`,children:[u.jsx("div",{className:"team-avatar",children:u.jsx("i",{className:`fas ${i.icon}`})}),u.jsx("h3",{children:i.name}),u.jsx("p",{className:"team-role",children:i.role})]},i.name))})]})}),u.jsx("section",{className:"about-section",id:"info",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Snapshot"}),u.jsx("h2",{className:"section-title reveal",children:"Startup at a Glance"}),u.jsx("div",{className:"info-card glass reveal reveal-delay-1",children:u.jsxs("div",{className:"info-grid",children:[u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-calendar-alt"}),u.jsx("span",{className:"info-label",children:"Founded"}),u.jsx("span",{className:"info-value",children:"2023"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-map-pin"}),u.jsx("span",{className:"info-label",children:"Headquarters"}),u.jsx("span",{className:"info-value",children:"San Francisco, CA"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-user-friends"}),u.jsx("span",{className:"info-label",children:"Team Size"}),u.jsx("span",{className:"info-value",children:"48 Members"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-trophy"}),u.jsx("span",{className:"info-label",children:"Funding"}),u.jsx("span",{className:"info-value",children:"Series A"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-rocket"}),u.jsx("span",{className:"info-label",children:"Stage"}),u.jsx("span",{className:"info-value",children:"Growth"})]}),u.jsxs("div",{className:"info-item",children:[u.jsx("i",{className:"fas fa-handshake"}),u.jsx("span",{className:"info-label",children:"Partners"}),u.jsx("span",{className:"info-value",children:"20+"})]})]})})]})}),u.jsx("section",{className:"about-section",id:"contact",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Contact"}),u.jsx("h2",{className:"section-title reveal",children:"Get In Touch"}),u.jsxs("div",{className:"contact-content glass reveal reveal-delay-1",children:[u.jsx("p",{className:"contact-text",children:"Have a question, partnership idea, or just want to say hello? We'd love to hear from you."}),u.jsxs("div",{className:"contact-links",children:[u.jsxs("a",{href:"mailto:hello@framex.com",className:"contact-link",children:[u.jsx("i",{className:"fas fa-envelope"})," hello@framex.com"]}),u.jsxs("a",{href:"tel:+1234567890",className:"contact-link",children:[u.jsx("i",{className:"fas fa-phone"})," +1 (234) 567-890"]}),u.jsxs("a",{href:"#",className:"contact-link",children:[u.jsx("i",{className:"fas fa-map-marker-alt"})," San Francisco, CA"]})]})]})]})}),u.jsx("section",{className:"about-section",id:"social",children:u.jsxs("div",{className:"about-container",children:[u.jsx("span",{className:"section-label reveal",children:"Community"}),u.jsx("h2",{className:"section-title reveal",children:"Follow Our Journey"}),u.jsxs("div",{className:"social-grid reveal reveal-delay-1",children:[u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-twitter"})," Twitter / X"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-linkedin-in"})," LinkedIn"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-discord"})," Discord"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-youtube"})," YouTube"]}),u.jsxs("a",{href:"#",className:"social-link glass",children:[u.jsx("i",{className:"fab fa-instagram"})," Instagram"]})]})]})})]}),u.jsx(Sf,{}),u.jsx("style",{children:`
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
      `})]})}function xc(t,e){var i={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(i[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(t);o<r.length;o++)e.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(t,r[o])&&(i[r[o]]=t[r[o]]);return i}function Tj(t,e,i,r){function o(c){return c instanceof i?c:new i(function(d){d(c)})}return new(i||(i=Promise))(function(c,d){function h(y){try{g(r.next(y))}catch(v){d(v)}}function p(y){try{g(r.throw(y))}catch(v){d(v)}}function g(y){y.done?c(y.value):o(y.value).then(h,p)}g((r=r.apply(t,e||[])).next())})}const Ej=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class jf extends Error{constructor(e,i="FunctionsError",r){super(e),this.name=i,this.context=r}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Cj extends jf{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class gy extends jf{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class yy extends jf{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Ch;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Ch||(Ch={}));class Aj{constructor(e,{headers:i={},customFetch:r,region:o=Ch.Any}={}){this.url=e,this.headers=i,this.region=o,this.fetch=Ej(r)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return Tj(this,arguments,void 0,function*(i,r={}){var o;let c,d;try{const{headers:h,method:p,body:g,signal:y,timeout:v}=r;let x={},{region:w}=r;w||(w=this.region);const S=new URL(`${this.url}/${i}`);w&&w!=="any"&&(x["x-region"]=w,S.searchParams.set("forceFunctionRegion",w));let _;g&&(h&&!Object.prototype.hasOwnProperty.call(h,"Content-Type")||!h)?typeof Blob<"u"&&g instanceof Blob||g instanceof ArrayBuffer?(x["Content-Type"]="application/octet-stream",_=g):typeof g=="string"?(x["Content-Type"]="text/plain",_=g):typeof FormData<"u"&&g instanceof FormData?_=g:(x["Content-Type"]="application/json",_=JSON.stringify(g)):g&&typeof g!="string"&&!(typeof Blob<"u"&&g instanceof Blob)&&!(g instanceof ArrayBuffer)&&!(typeof FormData<"u"&&g instanceof FormData)?_=JSON.stringify(g):_=g;let E=y;v&&(d=new AbortController,c=setTimeout(()=>d.abort(),v),y?(E=d.signal,y.addEventListener("abort",()=>d.abort())):E=d.signal);const T=yield this.fetch(S.toString(),{method:p||"POST",headers:Object.assign(Object.assign(Object.assign({},x),this.headers),h),body:_,signal:E}).catch(K=>{throw new Cj(K)}),O=T.headers.get("x-relay-error");if(O&&O==="true")throw new gy(T);if(!T.ok)throw new yy(T);let R=((o=T.headers.get("Content-Type"))!==null&&o!==void 0?o:"text/plain").split(";")[0].trim(),L;return R==="application/json"?L=yield T.json():R==="application/octet-stream"||R==="application/pdf"?L=yield T.blob():R==="text/event-stream"?L=T:R==="multipart/form-data"?L=yield T.formData():L=yield T.text(),{data:L,error:null,response:T}}catch(h){return{data:null,error:h,response:h instanceof yy||h instanceof gy?h.context:void 0}}finally{c&&clearTimeout(c)}})}}const ex=3,vy=t=>Math.min(1e3*2**t,3e4),Nj=[520,503],tx=["GET","HEAD","OPTIONS"];var by=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function xy(t,e){return new Promise(i=>{if(e!=null&&e.aborted){i();return}const r=setTimeout(()=>{e==null||e.removeEventListener("abort",o),i()},t);function o(){clearTimeout(r),i()}e==null||e.addEventListener("abort",o)})}function Rj(t,e,i,r){return!(!r||i>=ex||!tx.includes(t)||!Nj.includes(e))}var Oj=class{constructor(t){var e,i,r,o,c;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(i=t.isMaybeSingle)!==null&&i!==void 0?i:!1,this.shouldStripNulls=(r=t.shouldStripNulls)!==null&&r!==void 0?r:!1,this.urlLengthLimit=(o=t.urlLengthLimit)!==null&&o!==void 0?o:8e3,this.retryEnabled=(c=t.retry)!==null&&c!==void 0?c:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var i=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const d=this.headers.get("Accept");d==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!d||d==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const r=this.fetch;let c=(async()=>{let d=0;for(;;){const g={};i.headers.forEach((v,x)=>{g[x]=v}),d>0&&(g["X-Retry-Count"]=String(d));let y;try{y=await r(i.url.toString(),{method:i.method,headers:g,body:JSON.stringify(i.body,(v,x)=>typeof x=="bigint"?x.toString():x),signal:i.signal})}catch(v){if((v==null?void 0:v.name)==="AbortError"||(v==null?void 0:v.code)==="ABORT_ERR"||!tx.includes(i.method))throw v;if(i.retryEnabled&&d<ex){const x=vy(d);d++,await xy(x,i.signal);continue}throw v}if(Rj(i.method,y.status,d,i.retryEnabled)){var h,p;const v=(h=(p=y.headers)===null||p===void 0?void 0:p.get("Retry-After"))!==null&&h!==void 0?h:null,x=v!==null?Math.max(0,parseInt(v,10)||0)*1e3:vy(d);await y.text(),d++,await xy(x,i.signal);continue}return await i.processResponse(y)}})();return this.shouldThrowOnError||(c=c.catch(d=>{var h;let p="",g="",y="";const v=d==null?void 0:d.cause;if(v){var x,w,S,_;const O=(x=v==null?void 0:v.message)!==null&&x!==void 0?x:"",R=(w=v==null?void 0:v.code)!==null&&w!==void 0?w:"";p=`${(S=d==null?void 0:d.name)!==null&&S!==void 0?S:"FetchError"}: ${d==null?void 0:d.message}`,p+=`

Caused by: ${(_=v==null?void 0:v.name)!==null&&_!==void 0?_:"Error"}: ${O}`,R&&(p+=` (${R})`),v!=null&&v.stack&&(p+=`
${v.stack}`)}else{var E;p=(E=d==null?void 0:d.stack)!==null&&E!==void 0?E:""}const T=this.url.toString().length;return(d==null?void 0:d.name)==="AbortError"||(d==null?void 0:d.code)==="ABORT_ERR"?(y="",g="Request was aborted (timeout or manual cancellation)",T>this.urlLengthLimit&&(g+=`. Note: Your request URL is ${T} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((v==null?void 0:v.name)==="HeadersOverflowError"||(v==null?void 0:v.code)==="UND_ERR_HEADERS_OVERFLOW")&&(y="",g="HTTP headers exceeded server limits (typically 16KB)",T>this.urlLengthLimit&&(g+=`. Your request URL is ${T} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(h=d==null?void 0:d.name)!==null&&h!==void 0?h:"FetchError"}: ${d==null?void 0:d.message}`,details:p,hint:g,code:y},data:null,count:null,status:0,statusText:""}})),c.then(t,e)}async processResponse(t){var e=this;let i=null,r=null,o=null,c=t.status,d=t.statusText;if(t.ok){var h,p;if(e.method!=="HEAD"){var g;const x=await t.text();if(x!=="")if(e.headers.get("Accept")==="text/csv")r=x;else if(e.headers.get("Accept")&&(!((g=e.headers.get("Accept"))===null||g===void 0)&&g.includes("application/vnd.pgrst.plan+text")))r=x;else try{r=JSON.parse(x)}catch{if(i={message:x},r=null,e.shouldThrowOnError)throw new by({message:x,details:"",hint:"",code:""})}}const y=(h=e.headers.get("Prefer"))===null||h===void 0?void 0:h.match(/count=(exact|planned|estimated)/),v=(p=t.headers.get("content-range"))===null||p===void 0?void 0:p.split("/");y&&v&&v.length>1&&(o=parseInt(v[1])),e.isMaybeSingle&&Array.isArray(r)&&(r.length>1?(i={code:"PGRST116",details:`Results contain ${r.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},r=null,o=null,c=406,d="Not Acceptable"):r.length===1?r=r[0]:r=null)}else{const y=await t.text();try{i=JSON.parse(y),Array.isArray(i)&&t.status===404&&(r=[],i=null,c=200,d="OK")}catch{t.status===404&&y===""?(c=204,d="No Content"):i={message:y}}if(i&&e.shouldThrowOnError)throw new by(i)}return{success:i===null,error:i,data:r,count:o,status:c,statusText:d}}returns(){return this}overrideTypes(){return this}},Dj=class extends Oj{throwOnError(){return super.throwOnError()}select(t){let e=!1;const i=(t??"*").split("").map(r=>/\s/.test(r)&&!e?"":(r==='"'&&(e=!e),r)).join("");return this.url.searchParams.set("select",i),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:i,foreignTable:r,referencedTable:o=r}={}){const c=o?`${o}.order`:"order",d=this.url.searchParams.get(c);return this.url.searchParams.set(c,`${d?`${d},`:""}${t}.${e?"asc":"desc"}${i===void 0?"":i?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:i=e}={}){const r=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${t}`),this}range(t,e,{foreignTable:i,referencedTable:r=i}={}){const o=typeof r>"u"?"offset":`${r}.offset`,c=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(o,`${t}`),this.url.searchParams.set(c,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:i=!1,buffers:r=!1,wal:o=!1,format:c="text"}={}){var d;const h=[t?"analyze":null,e?"verbose":null,i?"settings":null,r?"buffers":null,o?"wal":null].filter(Boolean).join("|"),p=(d=this.headers.get("Accept"))!==null&&d!==void 0?d:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${c}; for="${p}"; options=${h};`),c==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const wy=new RegExp("[,()]");var hr=class extends Dj{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const i=Array.from(new Set(e)).map(r=>typeof r=="string"&&wy.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`in.(${i})`),this}notIn(t,e){const i=Array.from(new Set(e)).map(r=>typeof r=="string"&&wy.test(r)?`"${r}"`:`${r}`).join(",");return this.url.searchParams.append(t,`not.in.(${i})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:i,type:r}={}){let o="";r==="plain"?o="pl":r==="phrase"?o="ph":r==="websearch"&&(o="w");const c=i===void 0?"":`(${i})`;return this.url.searchParams.append(t,`${o}fts${c}.${e}`),this}match(t){return Object.entries(t).filter(([e,i])=>i!==void 0).forEach(([e,i])=>{this.url.searchParams.append(e,`eq.${i}`)}),this}not(t,e,i){return this.url.searchParams.append(t,`not.${e}.${i}`),this}or(t,{foreignTable:e,referencedTable:i=e}={}){const r=i?`${i}.or`:"or";return this.url.searchParams.append(r,`(${t})`),this}filter(t,e,i){return this.url.searchParams.append(t,`${e}.${i}`),this}},Mj=class{constructor(t,{headers:e={},schema:i,fetch:r,urlLengthLimit:o=8e3,retry:c}){this.url=t,this.headers=new Headers(e),this.schema=i,this.fetch=r,this.urlLengthLimit=o,this.retry=c}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:i=!1,count:r}=e??{},o=i?"HEAD":"GET";let c=!1;const d=(t??"*").split("").map(g=>/\s/.test(g)&&!c?"":(g==='"'&&(c=!c),g)).join(""),{url:h,headers:p}=this.cloneRequestState();return h.searchParams.set("select",d),r&&p.append("Prefer",`count=${r}`),new hr({method:o,url:h,headers:p,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:i=!0}={}){var r;const o="POST",{url:c,headers:d}=this.cloneRequestState();if(e&&d.append("Prefer",`count=${e}`),i||d.append("Prefer","missing=default"),Array.isArray(t)){const h=t.reduce((p,g)=>p.concat(Object.keys(g)),[]);if(h.length>0){const p=[...new Set(h)].map(g=>`"${g}"`);c.searchParams.set("columns",p.join(","))}}return new hr({method:o,url:c,headers:d,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:i=!1,count:r,defaultToNull:o=!0}={}){var c;const d="POST",{url:h,headers:p}=this.cloneRequestState();if(p.append("Prefer",`resolution=${i?"ignore":"merge"}-duplicates`),e!==void 0&&h.searchParams.set("on_conflict",e),r&&p.append("Prefer",`count=${r}`),o||p.append("Prefer","missing=default"),Array.isArray(t)){const g=t.reduce((y,v)=>y.concat(Object.keys(v)),[]);if(g.length>0){const y=[...new Set(g)].map(v=>`"${v}"`);h.searchParams.set("columns",y.join(","))}}return new hr({method:d,url:h,headers:p,schema:this.schema,body:t,fetch:(c=this.fetch)!==null&&c!==void 0?c:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var i;const r="PATCH",{url:o,headers:c}=this.cloneRequestState();return e&&c.append("Prefer",`count=${e}`),new hr({method:r,url:o,headers:c,schema:this.schema,body:t,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const i="DELETE",{url:r,headers:o}=this.cloneRequestState();return t&&o.append("Prefer",`count=${t}`),new hr({method:i,url:r,headers:o,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function $s(t){"@babel/helpers - typeof";return $s=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$s(t)}function Lj(t,e){if($s(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if($s(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zj(t){var e=Lj(t,"string");return $s(e)=="symbol"?e:e+""}function Uj(t,e,i){return(e=zj(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Sy(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function _l(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Sy(Object(i),!0).forEach(function(r){Uj(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Sy(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}var Bj=class nx{constructor(e,{headers:i={},schema:r,fetch:o,timeout:c,urlLengthLimit:d=8e3,retry:h}={}){this.url=e,this.headers=new Headers(i),this.schemaName=r,this.urlLengthLimit=d;const p=o??globalThis.fetch;c!==void 0&&c>0?this.fetch=(g,y)=>{const v=new AbortController,x=setTimeout(()=>v.abort(),c),w=y==null?void 0:y.signal;if(w){if(w.aborted)return clearTimeout(x),p(g,y);const S=()=>{clearTimeout(x),v.abort()};return w.addEventListener("abort",S,{once:!0}),p(g,_l(_l({},y),{},{signal:v.signal})).finally(()=>{clearTimeout(x),w.removeEventListener("abort",S)})}return p(g,_l(_l({},y),{},{signal:v.signal})).finally(()=>clearTimeout(x))}:this.fetch=p,this.retry=h}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Mj(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new nx(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,i={},{head:r=!1,get:o=!1,count:c}={}){var d;let h;const p=new URL(`${this.url}/rpc/${e}`);let g;const y=w=>w!==null&&typeof w=="object"&&(!Array.isArray(w)||w.some(y)),v=r&&Object.values(i).some(y);v?(h="POST",g=i):r||o?(h=r?"HEAD":"GET",Object.entries(i).filter(([w,S])=>S!==void 0).map(([w,S])=>[w,Array.isArray(S)?`{${S.join(",")}}`:`${S}`]).forEach(([w,S])=>{p.searchParams.append(w,S)})):(h="POST",g=i);const x=new Headers(this.headers);return v?x.set("Prefer",c?`count=${c},return=minimal`:"return=minimal"):c&&x.set("Prefer",`count=${c}`),new hr({method:h,url:p,headers:x,schema:this.schemaName,body:g,fetch:(d=this.fetch)!==null&&d!==void 0?d:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Pj{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const i=globalThis;if(typeof globalThis<"u"&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};const r=typeof global<"u"?global:void 0;if(r&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};if(typeof globalThis<"u"&&typeof i.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&i.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const o=globalThis.process;if(o){const c=o.versions;if(c&&c.node){const d=c.node,h=parseInt(d.replace(/^v/,"").split(".")[0]);return h>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${h} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${h} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let i=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(i+=`

Suggested solution: ${e.workaround}`),new Error(i)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const Vj="2.108.2",Hj=`realtime-js/${Vj}`,$j="1.0.0",ax="2.0.0",Ij=ax,qj=1e4,Fj=100,Pa={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ix={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Ah={connecting:"connecting",closing:"closing",closed:"closed"};class Gj{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,i){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return i(this._binaryEncodeUserBroadcastPush(e));let r=[e.join_ref,e.ref,e.topic,e.event,e.payload];return i(JSON.stringify(r))}_binaryEncodeUserBroadcastPush(e){var i;return this._isArrayBuffer((i=e.payload)===null||i===void 0?void 0:i.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var i,r;const o=(r=(i=e.payload)===null||i===void 0?void 0:i.payload)!==null&&r!==void 0?r:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,o)}_encodeJsonUserBroadcastPush(e){var i,r;const o=(r=(i=e.payload)===null||i===void 0?void 0:i.payload)!==null&&r!==void 0?r:{},d=new TextEncoder().encode(JSON.stringify(o)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,d)}_encodeUserBroadcastPush(e,i,r){var o,c;const d=e.topic,h=(o=e.ref)!==null&&o!==void 0?o:"",p=(c=e.join_ref)!==null&&c!==void 0?c:"",g=e.payload.event,y=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},v=Object.keys(y).length===0?"":JSON.stringify(y);if(p.length>255)throw new Error(`joinRef length ${p.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`ref length ${h.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`topic length ${d.length} exceeds maximum of 255`);if(g.length>255)throw new Error(`userEvent length ${g.length} exceeds maximum of 255`);if(v.length>255)throw new Error(`metadata length ${v.length} exceeds maximum of 255`);const x=this.USER_BROADCAST_PUSH_META_LENGTH+p.length+h.length+d.length+g.length+v.length,w=new ArrayBuffer(this.HEADER_LENGTH+x);let S=new DataView(w),_=0;S.setUint8(_++,this.KINDS.userBroadcastPush),S.setUint8(_++,p.length),S.setUint8(_++,h.length),S.setUint8(_++,d.length),S.setUint8(_++,g.length),S.setUint8(_++,v.length),S.setUint8(_++,i),Array.from(p,T=>S.setUint8(_++,T.charCodeAt(0))),Array.from(h,T=>S.setUint8(_++,T.charCodeAt(0))),Array.from(d,T=>S.setUint8(_++,T.charCodeAt(0))),Array.from(g,T=>S.setUint8(_++,T.charCodeAt(0))),Array.from(v,T=>S.setUint8(_++,T.charCodeAt(0)));var E=new Uint8Array(w.byteLength+r.byteLength);return E.set(new Uint8Array(w),0),E.set(new Uint8Array(r),w.byteLength),E.buffer}decode(e,i){if(this._isArrayBuffer(e)){let r=this._binaryDecode(e);return i(r)}if(typeof e=="string"){const r=JSON.parse(e),[o,c,d,h,p]=r;return i({join_ref:o,ref:c,topic:d,event:h,payload:p})}return i({})}_binaryDecode(e){const i=new DataView(e),r=i.getUint8(0),o=new TextDecoder;switch(r){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,i,o)}}_decodeUserBroadcast(e,i,r){const o=i.getUint8(1),c=i.getUint8(2),d=i.getUint8(3),h=i.getUint8(4);let p=this.HEADER_LENGTH+4;const g=r.decode(e.slice(p,p+o));p=p+o;const y=r.decode(e.slice(p,p+c));p=p+c;const v=r.decode(e.slice(p,p+d));p=p+d;const x=e.slice(p,e.byteLength),w=h===this.JSON_ENCODING?JSON.parse(r.decode(x)):x,S={type:this.BROADCAST_EVENT,event:y,payload:w};return d>0&&(S.meta=JSON.parse(v)),{join_ref:null,ref:null,topic:g,event:this.BROADCAST_EVENT,payload:S}}_isArrayBuffer(e){var i;return e instanceof ArrayBuffer||((i=e==null?void 0:e.constructor)===null||i===void 0?void 0:i.name)==="ArrayBuffer"}_pick(e,i){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([r])=>i.includes(r)))}}var Ge;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(Ge||(Ge={}));const jy=(t,e,i={})=>{var r;const o=(r=i.skipTypes)!==null&&r!==void 0?r:[];return e?Object.keys(e).reduce((c,d)=>(c[d]=Kj(d,t,e,o),c),{}):{}},Kj=(t,e,i,r)=>{const o=e.find(h=>h.name===t),c=o==null?void 0:o.type,d=i[t];return c&&!r.includes(c)?rx(c,d):Nh(d)},rx=(t,e)=>{if(t.charAt(0)==="_"){const i=t.slice(1,t.length);return Jj(e,i)}switch(t){case Ge.bool:return Yj(e);case Ge.float4:case Ge.float8:case Ge.int2:case Ge.int4:case Ge.int8:case Ge.numeric:case Ge.oid:return Xj(e);case Ge.json:case Ge.jsonb:return Wj(e);case Ge.timestamp:return Qj(e);case Ge.abstime:case Ge.date:case Ge.daterange:case Ge.int4range:case Ge.int8range:case Ge.money:case Ge.reltime:case Ge.text:case Ge.time:case Ge.timestamptz:case Ge.timetz:case Ge.tsrange:case Ge.tstzrange:return Nh(e);default:return Nh(e)}},Nh=t=>t,Yj=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Xj=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Wj=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Jj=(t,e)=>{if(typeof t!="string")return t;const i=t.length-1,r=t[i];if(t[0]==="{"&&r==="}"){let c;const d=t.slice(1,i);try{c=JSON.parse("["+d+"]")}catch{c=d?d.split(","):[]}return c.map(h=>rx(e,h))}return t},Qj=t=>typeof t=="string"?t.replace(" ","T"):t,sx=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Ms=t=>typeof t=="function"?t:function(){return t},Zj=typeof self<"u"?self:null,fr=typeof window<"u"?window:null,zn=Zj||fr||globalThis,ek="2.0.0",tk=1e4,nk=1e3,Un={connecting:0,open:1,closing:2,closed:3},Bt={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ca={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Rh={longpoll:"longpoll",websocket:"websocket"},ak={complete:4},Oh="base64url.bearer.phx.",Tl=class{constructor(t,e,i,r){this.channel=t,this.event=e,this.payload=i||function(){return{}},this.receivedResp=null,this.timeout=r,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:i}){this.recHooks.filter(r=>r.status===t).forEach(r=>r.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},ox=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},ik=class{constructor(t,e,i){this.state=Bt.closed,this.topic=t,this.params=Ms(e||{}),this.socket=i,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Tl(this,ca.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new ox(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=Bt.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(r=>r.send()),this.pushBuffer=[]}),this.joinPush.receive("error",r=>{this.state=Bt.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=Bt.closed,this.socket.remove(this)}),this.onError(r=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,r),this.isJoining()&&this.joinPush.reset(),this.state=Bt.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Tl(this,ca.leave,Ms({}),this.timeout).send(),this.state=Bt.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(ca.reply,(r,o)=>{this.trigger(this.replyEventName(o),r)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=Bt.closed,this.bindings=[]}onClose(t){this.on(ca.close,t)}onError(t){return this.on(ca.error,e=>t(e))}on(t,e){let i=this.bindingRef++;return this.bindings.push({event:t,ref:i,callback:e}),i}off(t,e){this.bindings=this.bindings.filter(i=>!(i.event===t&&(typeof e>"u"||e===i.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,i=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let r=new Tl(this,t,function(){return e},i);return this.canPush()?r.send():(r.startTimeout(),this.pushBuffer.push(r)),r}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=Bt.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(ca.close,"leave")},i=new Tl(this,ca.leave,Ms({}),t);return i.receive("ok",()=>e()).receive("timeout",()=>e()),i.send(),this.canPush()||i.trigger("ok",{}),i}onMessage(t,e,i){return e}filterBindings(t,e,i){return!0}isMember(t,e,i,r){return this.topic!==t?!1:r&&r!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:i,joinRef:r}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=Bt.joining,this.joinPush.resend(t))}trigger(t,e,i,r){let o=this.onMessage(t,e,i,r);if(e&&!o)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let c=this.bindings.filter(d=>d.event===t&&this.filterBindings(d,e,i));for(let d=0;d<c.length;d++)c[d].callback(o,i,r||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===Bt.closed}isErrored(){return this.state===Bt.errored}isJoined(){return this.state===Bt.joined}isJoining(){return this.state===Bt.joining}isLeaving(){return this.state===Bt.leaving}},Jl=class{static request(t,e,i,r,o,c,d){if(zn.XDomainRequest){let h=new zn.XDomainRequest;return this.xdomainRequest(h,t,e,r,o,c,d)}else if(zn.XMLHttpRequest){let h=new zn.XMLHttpRequest;return this.xhrRequest(h,t,e,i,r,o,c,d)}else{if(zn.fetch&&zn.AbortController)return this.fetchRequest(t,e,i,r,o,c,d);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,i,r,o,c,d){let h={method:t,headers:i,body:r},p=null;return o&&(p=new AbortController,setTimeout(()=>p.abort(),o),h.signal=p.signal),zn.fetch(e,h).then(g=>g.text()).then(g=>this.parseJSON(g)).then(g=>d&&d(g)).catch(g=>{g.name==="AbortError"&&c?c():d&&d(null)}),p}static xdomainRequest(t,e,i,r,o,c,d){return t.timeout=o,t.open(e,i),t.onload=()=>{let h=this.parseJSON(t.responseText);d&&d(h)},c&&(t.ontimeout=c),t.onprogress=()=>{},t.send(r),t}static xhrRequest(t,e,i,r,o,c,d,h){t.open(e,i,!0),t.timeout=c;for(let[p,g]of Object.entries(r))t.setRequestHeader(p,g);return t.onerror=()=>h&&h(null),t.onreadystatechange=()=>{if(t.readyState===ak.complete&&h){let p=this.parseJSON(t.responseText);h(p)}},d&&(t.ontimeout=d),t.send(o),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let i=[];for(var r in t){if(!Object.prototype.hasOwnProperty.call(t,r))continue;let o=e?`${e}[${r}]`:r,c=t[r];typeof c=="object"?i.push(this.serialize(c,o)):i.push(encodeURIComponent(o)+"="+encodeURIComponent(c))}return i.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let i=t.match(/\?/)?"&":"?";return`${t}${i}${this.serialize(e)}`}},rk=t=>{let e="",i=new Uint8Array(t),r=i.byteLength;for(let o=0;o<r;o++)e+=String.fromCharCode(i[o]);return btoa(e)},or=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(Oh)&&(this.authToken=atob(e[1].slice(Oh.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=Un.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Rh.websocket),"$1/"+Rh.longpoll)}endpointURL(){return Jl.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,i){this.close(t,e,i),this.readyState=Un.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Un.open||this.readyState===Un.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:i,token:r,messages:o}=e;if(i===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=r}else i=0;switch(i){case 200:o.forEach(c=>{setTimeout(()=>this.onmessage({data:c}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Un.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${i}`)}})}send(t){typeof t!="string"&&(t=rk(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,i){for(let o of this.reqs)o.abort();this.readyState=Un.closed;let r=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:i});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",r)):this.onclose(r)}ajax(t,e,i,r,o){let c,d=()=>{this.reqs.delete(c),r()};c=Jl.request(t,this.endpointURL(),e,i,this.timeout,d,h=>{this.reqs.delete(c),this.isActive()&&o(h)}),this.reqs.add(c)}},sk=class Ns{constructor(e,i={}){let r=i.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(r.state,o=>{let{onJoin:c,onLeave:d,onSync:h}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Ns.syncState(this.state,o,c,d),this.pendingDiffs.forEach(p=>{this.state=Ns.syncDiff(this.state,p,c,d)}),this.pendingDiffs=[],h()}),this.channel.on(r.diff,o=>{let{onJoin:c,onLeave:d,onSync:h}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(o):(this.state=Ns.syncDiff(this.state,o,c,d),h())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Ns.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,i,r,o){let c=this.clone(e),d={},h={};return this.map(c,(p,g)=>{i[p]||(h[p]=g)}),this.map(i,(p,g)=>{let y=c[p];if(y){let v=g.metas.map(_=>_.phx_ref),x=y.metas.map(_=>_.phx_ref),w=g.metas.filter(_=>x.indexOf(_.phx_ref)<0),S=y.metas.filter(_=>v.indexOf(_.phx_ref)<0);w.length>0&&(d[p]=g,d[p].metas=w),S.length>0&&(h[p]=this.clone(y),h[p].metas=S)}else d[p]=g}),this.syncDiff(c,{joins:d,leaves:h},r,o)}static syncDiff(e,i,r,o){let{joins:c,leaves:d}=this.clone(i);return r||(r=function(){}),o||(o=function(){}),this.map(c,(h,p)=>{let g=e[h];if(e[h]=this.clone(p),g){let y=e[h].metas.map(x=>x.phx_ref),v=g.metas.filter(x=>y.indexOf(x.phx_ref)<0);e[h].metas.unshift(...v)}r(h,g,p)}),this.map(d,(h,p)=>{let g=e[h];if(!g)return;let y=p.metas.map(v=>v.phx_ref);g.metas=g.metas.filter(v=>y.indexOf(v.phx_ref)<0),o(h,g,p),g.metas.length===0&&delete e[h]}),e}static list(e,i){return i||(i=function(r,o){return o}),this.map(e,(r,o)=>i(r,o))}static map(e,i){return Object.getOwnPropertyNames(e).map(r=>i(r,e[r]))}static clone(e){return JSON.parse(JSON.stringify(e))}},El={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let i=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(i))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[i,r,o,c,d]=JSON.parse(t);return e({join_ref:i,ref:r,topic:o,event:c,payload:d})}},binaryEncode(t){let{join_ref:e,ref:i,event:r,topic:o,payload:c}=t,d=this.META_LENGTH+e.length+i.length+o.length+r.length,h=new ArrayBuffer(this.HEADER_LENGTH+d),p=new DataView(h),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,e.length),p.setUint8(g++,i.length),p.setUint8(g++,o.length),p.setUint8(g++,r.length),Array.from(e,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(i,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(o,v=>p.setUint8(g++,v.charCodeAt(0))),Array.from(r,v=>p.setUint8(g++,v.charCodeAt(0)));var y=new Uint8Array(h.byteLength+c.byteLength);return y.set(new Uint8Array(h),0),y.set(new Uint8Array(c),h.byteLength),y.buffer},binaryDecode(t){let e=new DataView(t),i=e.getUint8(0),r=new TextDecoder;switch(i){case this.KINDS.push:return this.decodePush(t,e,r);case this.KINDS.reply:return this.decodeReply(t,e,r);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,r)}},decodePush(t,e,i){let r=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),d=this.HEADER_LENGTH+this.META_LENGTH-1,h=i.decode(t.slice(d,d+r));d=d+r;let p=i.decode(t.slice(d,d+o));d=d+o;let g=i.decode(t.slice(d,d+c));d=d+c;let y=t.slice(d,t.byteLength);return{join_ref:h,ref:null,topic:p,event:g,payload:y}},decodeReply(t,e,i){let r=e.getUint8(1),o=e.getUint8(2),c=e.getUint8(3),d=e.getUint8(4),h=this.HEADER_LENGTH+this.META_LENGTH,p=i.decode(t.slice(h,h+r));h=h+r;let g=i.decode(t.slice(h,h+o));h=h+o;let y=i.decode(t.slice(h,h+c));h=h+c;let v=i.decode(t.slice(h,h+d));h=h+d;let x=t.slice(h,t.byteLength),w={status:v,response:x};return{join_ref:p,ref:g,topic:y,event:ca.reply,payload:w}},decodeBroadcast(t,e,i){let r=e.getUint8(1),o=e.getUint8(2),c=this.HEADER_LENGTH+2,d=i.decode(t.slice(c,c+r));c=c+r;let h=i.decode(t.slice(c,c+o));c=c+o;let p=t.slice(c,t.byteLength);return{join_ref:null,ref:null,topic:d,event:h,payload:p}}},ok=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||tk,this.transport=e.transport||zn.WebSocket||or,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let i=null;try{i=zn&&zn.sessionStorage}catch{}this.sessionStore=e.sessionStorage||i,this.establishedConnections=0,this.defaultEncoder=El.encode.bind(El),this.defaultDecoder=El.decode.bind(El),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==or?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let r=null;fr&&fr.addEventListener&&(fr.addEventListener("pagehide",o=>{this.conn&&(this.disconnect(),r=this.connectClock)}),fr.addEventListener("pageshow",o=>{r===this.connectClock&&(r=null,this.connect())}),fr.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=o=>e.rejoinAfterMs?e.rejoinAfterMs(o):[1e3,2e3,5e3][o-1]||1e4,this.reconnectAfterMs=o=>e.reconnectAfterMs?e.reconnectAfterMs(o):[10,50,100,150,200,250,500,1e3,2e3][o-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(o,c,d)=>{console.log(`${o}: ${c}`,d)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Ms(e.params||{}),this.endPoint=`${t}/${Rh.websocket}`,this.vsn=e.vsn||ek,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new ox(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return or}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=Jl.appendParams(Jl.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,i){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,i)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ms(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==or?this.connectWithFallback(or,this.longPollFallbackMs):this.transportConnect())}log(t,e,i){this.logger&&this.logger(t,e,i)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),i=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let r=this.onMessage(o=>{o.ref===e&&(this.off([r]),t(Date.now()-i))});return!0}transportName(t){switch(t){case or:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${Oh}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let i=!1,r=!0,o,c,d=this.transportName(t),h=p=>{this.log("transport",`falling back to ${d}...`,p),this.off([o,c]),r=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${d}`))return h("memorized");this.fallbackTimer=setTimeout(h,e),c=this.onError(p=>{this.log("transport","error",p),r&&!i&&(clearTimeout(this.fallbackTimer),h(p))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(i=!0,!r){let p=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${p}`,"true"),this.log("transport",`established ${p} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(h,e),this.ping(p=>{this.log("transport","connected to primary after",p),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),nk,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,i){if(!this.conn)return t&&t();const r=this.conn;this.waitForBufferDone(r,()=>{e?r.close(e,i||""):r.close(),this.waitForSocketClosed(r,()=>{this.conn===r&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,i=1){if(i===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,i+1)},150*i)}waitForSocketClosed(t,e,i=1){if(i===5||t.readyState===Un.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,i+1)},150*i)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,i=this.establishedConnections;this.triggerStateCallbacks("error",t,e,i),(e===this.transport||i>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(ca.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case Un.connecting:return"connecting";case Un.open:return"open";case Un.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([i])=>t.indexOf(i)===-1)}channel(t,e={}){let i=new ik(t,e,this);return this.channels.push(i),i}push(t){if(this.hasLogger()){let{topic:e,event:i,payload:r,ref:o,join_ref:c}=t;this.log("push",`${e} ${i} (${c}, ${o})`,r)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:i,event:r,payload:o,ref:c,join_ref:d}=e;if(c&&c===this.pendingHeartbeatRef){const h=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(o.status==="ok"?"ok":"error",h)}catch(p){this.log("error","error in heartbeat callback",p)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${o.status||""} ${i} ${r} ${c&&"("+c+")"||""}`.trim(),o);for(let h=0;h<this.channels.length;h++){const p=this.channels[h];p.isMember(i,r,o,d)&&p.trigger(r,o,c,d)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([i,r])=>{try{r(...e)}catch(o){this.log("error",`error in ${t} callback`,o)}})}catch(i){this.log("error",`error triggering ${t} callbacks`,i)}}leaveOpenTopic(t){let e=this.channels.find(i=>i.topic===t&&(i.isJoined()||i.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class Ls{constructor(e,i){const r=ck(i);this.presence=new sk(e.getChannel(),r),this.presence.onJoin((o,c,d)=>{const h=Ls.onJoinPayload(o,c,d);e.getChannel().trigger("presence",h)}),this.presence.onLeave((o,c,d)=>{const h=Ls.onLeavePayload(o,c,d);e.getChannel().trigger("presence",h)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return Ls.transformState(this.presence.state)}static transformState(e){return e=lk(e),Object.getOwnPropertyNames(e).reduce((i,r)=>{const o=e[r];return i[r]=Vl(o),i},{})}static onJoinPayload(e,i,r){const o=ky(i),c=Vl(r);return{event:"join",key:e,currentPresences:o,newPresences:c}}static onLeavePayload(e,i,r){const o=ky(i),c=Vl(r);return{event:"leave",key:e,currentPresences:o,leftPresences:c}}}function Vl(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function lk(t){return JSON.parse(JSON.stringify(t))}function ck(t){return(t==null?void 0:t.events)&&{events:t.events}}function ky(t){return t!=null&&t.metas?Vl(t):[]}var _y;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(_y||(_y={}));class uk{get state(){return this.presenceAdapter.state}constructor(e,i){this.channel=e,this.presenceAdapter=new Ls(this.channel.channelAdapter,i)}}function dk(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const i=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${i}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class hk{constructor(e,i,r){const o=fk(r);this.channel=e.getSocket().channel(i,o),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,i){return this.channel.on(e,i)}off(e,i){this.channel.off(e,i)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,i,r){let o;try{o=this.channel.push(e,i,r)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Fj){const c=this.channel.pushBuffer.shift();c.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${c.event}`,c.payload())}return o}updateJoinPayload(e){const i=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},i),e)}canPush(){return this.socket.isConnected()&&this.state===Pa.joined}isJoined(){return this.state===Pa.joined}isJoining(){return this.state===Pa.joining}isClosed(){return this.state===Pa.closed}isLeaving(){return this.state===Pa.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function fk(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var Ty;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(Ty||(Ty={}));var gr;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(gr||(gr={}));var ua;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(ua||(ua={}));class zs{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,i={config:{}},r){var o,c;if(this.topic=e,this.params=i,this.socket=r,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},i.config),this.channelAdapter=new hk(this.socket.socketAdapter,e,this.params),this.presence=new uk(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=sx(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((c=(o=this.params.config)===null||o===void 0?void 0:o.broadcast)===null||c===void 0)&&c.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,i=this.timeout){var r,o,c;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:d,presence:h,private:p}}=this.params,g=(o=(r=this.bindings.postgres_changes)===null||r===void 0?void 0:r.map(w=>w.filter))!==null&&o!==void 0?o:[],y=!!this.bindings[gr.PRESENCE]&&this.bindings[gr.PRESENCE].length>0||((c=this.params.config.presence)===null||c===void 0?void 0:c.enabled)===!0,v={},x={broadcast:d,presence:Object.assign(Object.assign({},h),{enabled:y}),postgres_changes:g,private:p};this.socket.accessTokenValue&&(v.access_token=this.socket.accessTokenValue),this._onError(w=>{e==null||e(ua.CHANNEL_ERROR,dk(w))}),this._onClose(()=>e==null?void 0:e(ua.CLOSED)),this.updateJoinPayload(Object.assign({config:x},v)),this._updateFilterMessage(),this.channelAdapter.subscribe(i).receive("ok",async({postgres_changes:w})=>{if(this.socket._isManualToken()||this.socket.setAuth(),w===void 0){e==null||e(ua.SUBSCRIBED);return}this._updatePostgresBindings(w,e)}).receive("error",w=>{this.state=Pa.errored;const S=Object.values(w).join(", ")||"error";e==null||e(ua.CHANNEL_ERROR,new Error(S,{cause:w}))}).receive("timeout",()=>{e==null||e(ua.TIMED_OUT)})}return this}_updatePostgresBindings(e,i){var r;const o=this.bindings.postgres_changes,c=(r=o==null?void 0:o.length)!==null&&r!==void 0?r:0,d=[];for(let h=0;h<c;h++){const p=o[h],{filter:{event:g,schema:y,table:v,filter:x}}=p,w=e&&e[h];if(w&&w.event===g&&zs.isFilterValueEqual(w.schema,y)&&zs.isFilterValueEqual(w.table,v)&&zs.isFilterValueEqual(w.filter,x))d.push(Object.assign(Object.assign({},p),{id:w.id}));else{this.unsubscribe(),this.state=Pa.errored,i==null||i(ua.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=d,this.state!=Pa.errored&&i&&i(ua.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,i={}){return await this.send({type:"presence",event:"track",payload:e},i.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,i,r){const o=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),c=e===gr.PRESENCE||e===gr.POSTGRES_CHANGES;if(o&&c)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,i,r)}async httpSend(e,i,r={}){var o;if(i==null)return Promise.reject(new Error("Payload is required for httpSend()"));const c=i instanceof ArrayBuffer||ArrayBuffer.isView(i),d={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":c?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(d.Authorization=`Bearer ${this.socket.accessTokenValue}`);const h=new URL(this.broadcastEndpointURL);h.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&h.searchParams.set("private","true");const p={method:"POST",headers:d,body:c?i:JSON.stringify(i)},g=await this._fetchWithTimeout(h.toString(),p,(o=r.timeout)!==null&&o!==void 0?o:this.timeout);if(g.status===202)return{success:!0};if(g.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let y=g.statusText;try{const v=await g.json();y=v.error||v.message||y}catch{}return Promise.reject(new Error(y))}async send(e,i={}){var r,o;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:c,payload:d}=e,h={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(h.Authorization=`Bearer ${this.socket.accessTokenValue}`);const p={method:"POST",headers:h,body:JSON.stringify({messages:[{topic:this.subTopic,event:c,payload:d,private:this.private}]})};try{const g=await this._fetchWithTimeout(this.broadcastEndpointURL,p,(r=i.timeout)!==null&&r!==void 0?r:this.timeout);return await((o=g.body)===null||o===void 0?void 0:o.cancel()),g.ok?"ok":"error"}catch(g){return g instanceof Error&&g.name==="AbortError"?"timed out":"error"}}else return new Promise(c=>{var d,h,p;const g=this.channelAdapter.push(e.type,e,i.timeout||this.timeout);e.type==="broadcast"&&!(!((p=(h=(d=this.params)===null||d===void 0?void 0:d.config)===null||h===void 0?void 0:h.broadcast)===null||p===void 0)&&p.ack)&&c("ok"),g.receive("ok",()=>c("ok")),g.receive("error",()=>c("error")),g.receive("timeout",()=>c("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(i=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>i("ok")).receive("timeout",()=>i("timed out")).receive("error",()=>i("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,i,r){const o=new AbortController,c=setTimeout(()=>o.abort(),r),d=await this.socket.fetch(e,Object.assign(Object.assign({},i),{signal:o.signal}));return clearTimeout(c),d}_on(e,i,r){const o=e.toLocaleLowerCase(),c=this.channelAdapter.on(e,r),d={type:o,filter:i,callback:r,ref:c};return this.bindings[o]?this.bindings[o].push(d):this.bindings[o]=[d],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,i,r)=>{var o,c,d,h,p,g,y;const v=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(v,r))return!1;const x=(o=this.bindings[v])===null||o===void 0?void 0:o.find(w=>w.ref===e.ref);if(!x)return!0;if(["broadcast","presence","postgres_changes"].includes(v))if("id"in x){const w=x.id,S=(c=x.filter)===null||c===void 0?void 0:c.event;return w&&((d=i.ids)===null||d===void 0?void 0:d.includes(w))&&(S==="*"||(S==null?void 0:S.toLocaleLowerCase())===((h=i.data)===null||h===void 0?void 0:h.type.toLocaleLowerCase()))}else{const w=(g=(p=x==null?void 0:x.filter)===null||p===void 0?void 0:p.event)===null||g===void 0?void 0:g.toLocaleLowerCase();return w==="*"||w===((y=i==null?void 0:i.event)===null||y===void 0?void 0:y.toLocaleLowerCase())}else return x.type.toLocaleLowerCase()===v})}_notThisChannelEvent(e,i){const{close:r,error:o,leave:c,join:d}=ix;return i&&[r,o,c,d].includes(e)&&i!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,i,r)=>{if(typeof i=="object"&&"ids"in i){const o=i.data,{schema:c,table:d,commit_timestamp:h,type:p,errors:g}=o;return Object.assign(Object.assign({},{schema:c,table:d,commit_timestamp:h,eventType:p,new:{},old:{},errors:g}),this._getPayloadRecords(o))}return i})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const i in e.bindings)for(const r of e.bindings[i])this._on(r.type,r.filter,r.callback)}static isFilterValueEqual(e,i){return(e??void 0)===(i??void 0)}_getPayloadRecords(e){const i={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(i.new=jy(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(i.old=jy(e.columns,e.old_record)),i}}class pk{constructor(e,i){this.socket=new ok(e,i)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,i,r,o=1e4){return new Promise(c=>{setTimeout(()=>c("timeout"),o),this.socket.disconnect(()=>{e(),c("ok")},i,r)})}push(e){this.socket.push(e)}log(e,i,r){this.socket.log(e,i,r)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Ah.connecting}isDisconnecting(){return this.socket.connectionState()==Ah.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Ey={HEARTBEAT_INTERVAL:25e3},mk=[1e3,2e3,5e3,1e4],gk=1e4;function yk(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var i;return(i=Array.from(t.keys())[e])!==null&&i!==void 0?i:null},removeItem(e){t.delete(e)},setItem(e,i){t.set(e,String(i))}}}function vk(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return yk()}const bk=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class xk{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,i){var r;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Gj,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=c=>c?(...d)=>c(...d):(...d)=>fetch(...d),!(!((r=i==null?void 0:i.params)===null||r===void 0)&&r.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=i.params.apikey;const o=this._initializeOptions(i);this.socketAdapter=new pk(e,o),this.httpEndpoint=sx(e),this.fetch=this._resolveFetch(i==null?void 0:i.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const i=e.message;throw i.includes("Node.js")?new Error(`${i}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${i}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,i){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,i)}getChannels(){return this.channels}async removeChannel(e){const i=await e.unsubscribe();return i==="ok"&&e.teardown(),i}async removeAllChannels(){const e=this.channels.map(async r=>{const o=await r.unsubscribe();return r.teardown(),o}),i=await Promise.all(e);return await this.disconnect(),i}log(e,i,r){this.socketAdapter.log(e,i,r)}connectionState(){return this.socketAdapter.connectionState()||Ah.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,i={config:{}}){const r=`realtime:${e}`,o=this.getChannels().find(c=>c.topic===r);if(o)return o;{const c=new zs(`realtime:${e}`,i,this);return this._cancelPendingDisconnect(),this.channels.push(c),c}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(i=>i.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let i,r=!1;if(e)i=e,r=!0;else if(this.accessToken)try{i=await this.accessToken()}catch(o){this.log("error","Error fetching access token from callback",o),i=this.accessTokenValue}else i=this.accessTokenValue;r?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=i&&(this.accessTokenValue=i,this.channels.forEach(o=>{const c={access_token:i,version:Hj};i&&o.updateJoinPayload(c),o.joinedOnce&&o.channelAdapter.isJoined()&&o.channelAdapter.push(ix.access_token,{access_token:i})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(i=>{this.log("error",`Error setting auth in ${e}`,i)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(i=>{this.log("error","error waiting for auth on connect",i)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(i,r)=>{i=="sent"&&this._setAuthSafely(),e&&e(i,r)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=i=>{this.log("worker","worker error",i.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=i=>{i.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let i;if(e)i=e;else{const r=new Blob([bk],{type:"application/javascript"});i=URL.createObjectURL(r)}return i}_initializeOptions(e){var i,r,o,c,d,h,p,g,y,v,x,w;this.worker=(i=e==null?void 0:e.worker)!==null&&i!==void 0?i:!1,this.accessToken=(r=e==null?void 0:e.accessToken)!==null&&r!==void 0?r:null;const S={};S.timeout=(o=e==null?void 0:e.timeout)!==null&&o!==void 0?o:qj,S.heartbeatIntervalMs=(c=e==null?void 0:e.heartbeatIntervalMs)!==null&&c!==void 0?c:Ey.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(d=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&d!==void 0?d:2*((h=e==null?void 0:e.heartbeatIntervalMs)!==null&&h!==void 0?h:Ey.HEARTBEAT_INTERVAL),S.transport=(p=e==null?void 0:e.transport)!==null&&p!==void 0?p:Pj.getWebSocketConstructor(),S.params=e==null?void 0:e.params,S.logger=e==null?void 0:e.logger,S.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),S.sessionStorage=(g=e==null?void 0:e.sessionStorage)!==null&&g!==void 0?g:vk(),S.reconnectAfterMs=(y=e==null?void 0:e.reconnectAfterMs)!==null&&y!==void 0?y:(O=>mk[O-1]||gk);let _,E;const T=(v=e==null?void 0:e.vsn)!==null&&v!==void 0?v:Ij;switch(T){case $j:_=(O,R)=>R(JSON.stringify(O)),E=(O,R)=>R(JSON.parse(O));break;case ax:_=this.serializer.encode.bind(this.serializer),E=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${S.vsn}`)}if(S.vsn=T,S.encode=(x=e==null?void 0:e.encode)!==null&&x!==void 0?x:_,S.decode=(w=e==null?void 0:e.decode)!==null&&w!==void 0?w:E,S.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,S.params=Object.assign(Object.assign({},S.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,S.autoSendHeartbeat=!this.worker}return S}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Is=class extends Error{constructor(t,e){var i;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((i=e.icebergType)==null?void 0:i.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function wk(t,e,i){const r=new URL(e,t);if(i)for(const[o,c]of Object.entries(i))c!==void 0&&r.searchParams.set(o,c);return r.toString()}async function Sk(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function jk(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:i,path:r,query:o,body:c,headers:d}){const h=wk(t.baseUrl,r,o),p=await Sk(t.auth),g=await e(h,{method:i,headers:{...c?{"Content-Type":"application/json"}:{},...p,...d},body:c?JSON.stringify(c):void 0}),y=await g.text(),v=(g.headers.get("content-type")||"").includes("application/json"),x=v&&y?JSON.parse(y):y;if(!g.ok){const w=v?x:void 0,S=w==null?void 0:w.error;throw new Is((S==null?void 0:S.message)??`Request failed with status ${g.status}`,{status:g.status,icebergType:S==null?void 0:S.type,icebergCode:S==null?void 0:S.code,details:w})}return{status:g.status,headers:g.headers,data:x}}}}function Cl(t){return t.join("")}var kk=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Cl(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(r=>({namespace:r}))}async createNamespace(t,e){const i={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:i})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Cl(t.namespace)}`}),!0}catch(e){if(e instanceof Is&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(i){if(i instanceof Is&&i.status===409)return;throw i}}};function lr(t){return t.join("")}var _k=class{constructor(t,e="",i){this.client=t,this.prefix=e,this.accessDelegation=i}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${lr(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const i={};return this.accessDelegation&&(i["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${lr(t.namespace)}/tables`,body:e,headers:i})).data.metadata}async updateTable(t,e){const i=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${lr(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":i.data["metadata-location"],metadata:i.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${lr(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${lr(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${lr(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(i){if(i instanceof Is&&i.status===404)return!1;throw i}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(i){if(i instanceof Is&&i.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw i}}},Tk=class{constructor(t){var r;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const i=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=jk({baseUrl:i,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(r=t.accessDelegation)==null?void 0:r.join(","),this.namespaceOps=new kk(this.client,e),this.tableOps=new _k(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function qs(t){"@babel/helpers - typeof";return qs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},qs(t)}function Ek(t,e){if(qs(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(qs(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ck(t){var e=Ek(t,"string");return qs(e)=="symbol"?e:e+""}function Ak(t,e,i){return(e=Ck(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Cy(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function ve(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Cy(Object(i),!0).forEach(function(r){Ak(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Cy(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}var wc=class extends Error{constructor(t,e="storage",i,r){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=i,this.statusCode=r}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Sc(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var Dh=class extends wc{constructor(t,e,i,r="storage"){super(t,r,e,i),this.name=r==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=i}toJSON(){return ve({},super.toJSON())}},lx=class extends wc{constructor(t,e,i="storage"){super(t,i),this.name=i==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function Ql(t,e,i){const r=ve({},t),o=e.toLowerCase();for(const c of Object.keys(r))c.toLowerCase()===o&&delete r[c];return r[o]=i,r}function Nk(t){const e={};for(const[i,r]of Object.entries(t))e[i.toLowerCase()]=r;return e}const Rk=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Ok=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Mh=t=>{if(Array.isArray(t))return t.map(i=>Mh(i));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([i,r])=>{const o=i.replace(/([-_][a-z])/gi,c=>c.toUpperCase().replace(/[-_]/g,""));e[o]=Mh(r)}),e},Dk=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),Ay=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const i=e.error;if(typeof i.message=="string")return i.message}}return JSON.stringify(t)},Mk=async(t,e,i,r)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const o=t;let c=parseInt(String(o.status),10);Number.isFinite(c)||(c=500),o.json().then(d=>{const h=(d==null?void 0:d.statusCode)||(d==null?void 0:d.code)||c+"";e(new Dh(Ay(d),c,h,r))}).catch(()=>{const d=c+"";e(new Dh(o.statusText||`HTTP ${c} error`,c,d,r))})}else e(new lx(Ay(t),t,r))},Lk=(t,e,i,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!r)return ve(ve({},o),i);if(Ok(r)){var c;const d=(e==null?void 0:e.headers)||{};let h;for(const[p,g]of Object.entries(d))p.toLowerCase()==="content-type"&&(h=g);o.headers=Ql(d,"Content-Type",(c=h)!==null&&c!==void 0?c:"application/json"),o.body=JSON.stringify(r)}else o.body=r;return e!=null&&e.duplex&&(o.duplex=e.duplex),ve(ve({},o),i)};async function _s(t,e,i,r,o,c,d){return new Promise((h,p)=>{t(i,Lk(e,r,o,c)).then(g=>{if(!g.ok)throw g;if(r!=null&&r.noResolveJson)return g;if(d==="vectors"){const y=g.headers.get("content-type");if(g.headers.get("content-length")==="0"||g.status===204)return{};if(!y||!y.includes("application/json"))return{}}return g.json()}).then(g=>h(g)).catch(g=>Mk(g,p,r,d))})}function cx(t="storage"){return{get:async(e,i,r,o)=>_s(e,"GET",i,r,o,void 0,t),post:async(e,i,r,o,c)=>_s(e,"POST",i,o,c,r,t),put:async(e,i,r,o,c)=>_s(e,"PUT",i,o,c,r,t),head:async(e,i,r,o)=>_s(e,"HEAD",i,ve(ve({},r),{},{noResolveJson:!0}),o,void 0,t),remove:async(e,i,r,o,c)=>_s(e,"DELETE",i,o,c,r,t)}}const zk=cx("storage"),{get:Fs,post:jn,put:Lh,head:Uk,remove:kf}=zk,Jt=cx("vectors");var Tr=class{constructor(t,e={},i,r="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=Nk(e),this.fetch=Rk(i),this.namespace=r}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=Ql(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(i){if(e.shouldThrowOnError)throw i;if(Sc(i))return{data:null,error:i};throw i}}};let ux;ux=Symbol.toStringTag;var Bk=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[ux]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Sc(e))return{data:null,error:e};throw e}}};let dx;dx=Symbol.toStringTag;var Pk=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[dx]="BlobDownloadBuilder",this.promise=null}asStream(){return new Bk(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Sc(e))return{data:null,error:e};throw e}}};const Vk={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},Ny={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Hk=class extends Tr{constructor(t,e={},i,r){super(t,e,r,"storage"),this.bucketId=i}async uploadOrUpdate(t,e,i,r){var o=this;return o.handleOperation(async()=>{let c;const d=ve(ve({},Ny),r);let h=ve(ve({},o.headers),t==="POST"&&{"x-upsert":String(d.upsert)});const p=d.metadata;if(typeof Blob<"u"&&i instanceof Blob?(c=new FormData,c.append("cacheControl",d.cacheControl),p&&c.append("metadata",o.encodeMetadata(p)),c.append("",i)):typeof FormData<"u"&&i instanceof FormData?(c=i,c.has("cacheControl")||c.append("cacheControl",d.cacheControl),p&&!c.has("metadata")&&c.append("metadata",o.encodeMetadata(p))):(c=i,h["cache-control"]=`max-age=${d.cacheControl}`,h["content-type"]=d.contentType,p&&(h["x-metadata"]=o.toBase64(o.encodeMetadata(p))),(typeof ReadableStream<"u"&&c instanceof ReadableStream||c&&typeof c=="object"&&"pipe"in c&&typeof c.pipe=="function")&&!d.duplex&&(d.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))h=Ql(h,x,w);const g=o._removeEmptyFolders(e),y=o._getFinalPath(g),v=await(t=="PUT"?Lh:jn)(o.fetch,`${o.url}/object/${y}`,c,ve({headers:h},d!=null&&d.duplex?{duplex:d.duplex}:{}));return{path:g,id:v.Id,fullPath:v.Key}})}async upload(t,e,i){return this.uploadOrUpdate("POST",t,e,i)}async uploadToSignedUrl(t,e,i,r){var o=this;const c=o._removeEmptyFolders(t),d=o._getFinalPath(c),h=new URL(o.url+`/object/upload/sign/${d}`);return h.searchParams.set("token",e),o.handleOperation(async()=>{let p;const g=ve(ve({},Ny),r);let y=ve(ve({},o.headers),{"x-upsert":String(g.upsert)});const v=g.metadata;if(typeof Blob<"u"&&i instanceof Blob?(p=new FormData,p.append("cacheControl",g.cacheControl),v&&p.append("metadata",o.encodeMetadata(v)),p.append("",i)):typeof FormData<"u"&&i instanceof FormData?(p=i,p.has("cacheControl")||p.append("cacheControl",g.cacheControl),v&&!p.has("metadata")&&p.append("metadata",o.encodeMetadata(v))):(p=i,y["cache-control"]=`max-age=${g.cacheControl}`,y["content-type"]=g.contentType,v&&(y["x-metadata"]=o.toBase64(o.encodeMetadata(v))),(typeof ReadableStream<"u"&&p instanceof ReadableStream||p&&typeof p=="object"&&"pipe"in p&&typeof p.pipe=="function")&&!g.duplex&&(g.duplex="half")),r!=null&&r.headers)for(const[x,w]of Object.entries(r.headers))y=Ql(y,x,w);return{path:c,fullPath:(await Lh(o.fetch,h.toString(),p,ve({headers:y},g!=null&&g.duplex?{duplex:g.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var i=this;return i.handleOperation(async()=>{let r=i._getFinalPath(t);const o=ve({},i.headers);e!=null&&e.upsert&&(o["x-upsert"]="true");const c=await jn(i.fetch,`${i.url}/object/upload/sign/${r}`,{},{headers:o}),d=new URL(i.url+c.url),h=d.searchParams.get("token");if(!h)throw new wc("No token returned by API");return{signedUrl:d.toString(),path:t,token:h}})}async update(t,e,i){return this.uploadOrUpdate("PUT",t,e,i)}async move(t,e,i){var r=this;return r.handleOperation(async()=>await jn(r.fetch,`${r.url}/object/move`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:i==null?void 0:i.destinationBucket},{headers:r.headers}))}async copy(t,e,i){var r=this;return r.handleOperation(async()=>({path:(await jn(r.fetch,`${r.url}/object/copy`,{bucketId:r.bucketId,sourceKey:t,destinationKey:e,destinationBucket:i==null?void 0:i.destinationBucket},{headers:r.headers})).Key}))}async createSignedUrl(t,e,i){var r=this;return r.handleOperation(async()=>{let o=r._getFinalPath(t);const c=typeof(i==null?void 0:i.transform)=="object"&&i.transform!==null&&Object.keys(i.transform).length>0;let d=await jn(r.fetch,`${r.url}/object/sign/${o}`,ve({expiresIn:e},c?{transform:i.transform}:{}),{headers:r.headers});const h=new URLSearchParams;i!=null&&i.download&&h.set("download",i.download===!0?"":i.download),(i==null?void 0:i.cacheNonce)!=null&&h.set("cacheNonce",String(i.cacheNonce));const p=h.toString();return{signedUrl:encodeURI(`${r.url}${d.signedURL}${p?`&${p}`:""}`)}})}async createSignedUrls(t,e,i){var r=this;return r.handleOperation(async()=>{const o=await jn(r.fetch,`${r.url}/object/sign/${r.bucketId}`,{expiresIn:e,paths:t},{headers:r.headers}),c=new URLSearchParams;i!=null&&i.download&&c.set("download",i.download===!0?"":i.download),(i==null?void 0:i.cacheNonce)!=null&&c.set("cacheNonce",String(i.cacheNonce));const d=c.toString();return o.map(h=>ve(ve({},h),{},{signedUrl:h.signedURL?encodeURI(`${r.url}${h.signedURL}${d?`&${d}`:""}`):null}))})}download(t,e,i){const r=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",o=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(o,e.transform),(e==null?void 0:e.cacheNonce)!=null&&o.set("cacheNonce",String(e.cacheNonce));const c=o.toString(),d=this._getFinalPath(t),h=()=>Fs(this.fetch,`${this.url}/${r}/${d}${c?`?${c}`:""}`,{headers:this.headers,noResolveJson:!0},i);return new Pk(h,this.shouldThrowOnError)}async info(t){var e=this;const i=e._getFinalPath(t);return e.handleOperation(async()=>Mh(await Fs(e.fetch,`${e.url}/object/info/${i}`,{headers:e.headers})))}async exists(t){var e=this;const i=e._getFinalPath(t);try{return await Uk(e.fetch,`${e.url}/object/${i}`,{headers:e.headers}),{data:!0,error:null}}catch(o){if(e.shouldThrowOnError)throw o;if(Sc(o)){var r;const c=o instanceof Dh?o.status:o instanceof lx?(r=o.originalError)===null||r===void 0?void 0:r.status:void 0;if(c!==void 0&&[400,404].includes(c))return{data:!1,error:o}}throw o}}getPublicUrl(t,e){const i=this._getFinalPath(t),r=new URLSearchParams;e!=null&&e.download&&r.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const o=r.toString(),c=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${c}/public/${i}`)+(o?`?${o}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await kf(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,i){var r=this;return r.handleOperation(async()=>{const o=ve(ve(ve({},Vk),e),{},{prefix:t||""});return await jn(r.fetch,`${r.url}/object/list/${r.bucketId}`,o,{headers:r.headers},i)})}async listV2(t,e){var i=this;return i.handleOperation(async()=>{const r=ve({},t);return await jn(i.fetch,`${i.url}/object/list-v2/${i.bucketId}`,r,{headers:i.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const $k="2.108.2",to={"X-Client-Info":`storage-js/${$k}`};var Ik=class extends Tr{constructor(t,e={},i,r){const o=new URL(t);r!=null&&r.useNewHostname&&/supabase\.(co|in|red)$/.test(o.hostname)&&!o.hostname.includes("storage.supabase.")&&(o.hostname=o.hostname.replace("supabase.","storage.supabase."));const c=o.href.replace(/\/$/,""),d=ve(ve({},to),e);super(c,d,i,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const i=e.listBucketOptionsToQueryString(t);return await Fs(e.fetch,`${e.url}/bucket${i}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Fs(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var i=this;return i.handleOperation(async()=>await jn(i.fetch,`${i.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:i.headers}))}async updateBucket(t,e){var i=this;return i.handleOperation(async()=>await Lh(i.fetch,`${i.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:i.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await jn(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await kf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},qk=class extends Tr{constructor(t,e={},i){const r=t.replace(/\/$/,""),o=ve(ve({},to),e);super(r,o,i,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await jn(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const i=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&i.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&i.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&i.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&i.set("sortOrder",t.sortOrder),t!=null&&t.search&&i.set("search",t.search);const r=i.toString(),o=r?`${e.url}/bucket?${r}`:`${e.url}/bucket`;return await Fs(e.fetch,o,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await kf(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!Dk(t))throw new wc("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const i=new Tk({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),r=this.shouldThrowOnError;return new Proxy(i,{get(o,c){const d=o[c];return typeof d!="function"?d:async(...h)=>{try{return{data:await d.apply(o,h),error:null}}catch(p){if(r)throw p;return{data:null,error:p}}}}})}},Fk=class extends Tr{constructor(t,e={},i){const r=t.replace(/\/$/,""),o=ve(ve({},to),{},{"Content-Type":"application/json"},e);super(r,o,i,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var i=this;return i.handleOperation(async()=>await Jt.post(i.fetch,`${i.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:i.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var i=this;return i.handleOperation(async()=>await Jt.post(i.fetch,`${i.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:i.headers})||{})}},Gk=class extends Tr{constructor(t,e={},i){const r=t.replace(/\/$/,""),o=ve(ve({},to),{},{"Content-Type":"application/json"},e);super(r,o,i,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},Kk=class extends Tr{constructor(t,e={},i){const r=t.replace(/\/$/,""),o=ve(ve({},to),{},{"Content-Type":"application/json"},e);super(r,o,i,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Jt.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Yk=class extends Kk{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Xk(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,i=this;return e().call(i,t)}async getBucket(t){var e=()=>super.getBucket,i=this;return e().call(i,t)}async listBuckets(t={}){var e=()=>super.listBuckets,i=this;return e().call(i,t)}async deleteBucket(t){var e=()=>super.deleteBucket,i=this;return e().call(i,t)}},Xk=class extends Fk{constructor(t,e,i,r){super(t,e,r),this.vectorBucketName=i}async createIndex(t){var e=()=>super.createIndex,i=this;return e().call(i,ve(ve({},t),{},{vectorBucketName:i.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,i=this;return e().call(i,ve(ve({},t),{},{vectorBucketName:i.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,i=this;return e().call(i,i.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,i=this;return e().call(i,i.vectorBucketName,t)}index(t){return new Wk(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Wk=class extends Gk{constructor(t,e,i,r,o){super(t,e,o),this.vectorBucketName=i,this.indexName=r}async putVectors(t){var e=()=>super.putVectors,i=this;return e().call(i,ve(ve({},t),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async getVectors(t){var e=()=>super.getVectors,i=this;return e().call(i,ve(ve({},t),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,i=this;return e().call(i,ve(ve({},t),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,i=this;return e().call(i,ve(ve({},t),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,i=this;return e().call(i,ve(ve({},t),{},{vectorBucketName:i.vectorBucketName,indexName:i.indexName}))}},Jk=class extends Ik{constructor(t,e={},i,r){super(t,e,i,r)}from(t){return new Hk(this.url,this.headers,t,this.fetch)}get vectors(){return new Yk(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new qk(this.url+"/iceberg",this.headers,this.fetch)}};const hx="2.108.2",da=30*1e3,Rs=3,Zd=Rs*da,Qk=2*da,Zk="http://localhost:9999",e_="supabase.auth.token",t_={"X-Client-Info":`gotrue-js/${hx}`},zh="X-Supabase-Api-Version",fx={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},n_=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,a_=600*1e3;class Gs extends Error{constructor(e,i,r){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=i,this.code=r}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function ne(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class i_ extends Gs{constructor(e,i,r){super(e,i,r),this.name="AuthApiError",this.status=i,this.code=r}}function r_(t){return ne(t)&&t.name==="AuthApiError"}class kn extends Gs{constructor(e,i){super(e),this.name="AuthUnknownError",this.originalError=i}}class Hn extends Gs{constructor(e,i,r,o){super(e,r,o),this.name=i,this.status=r}}class mt extends Hn{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function Al(t){return ne(t)&&t.name==="AuthSessionMissingError"}class cr extends Hn{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class Nl extends Hn{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class Rl extends Hn{constructor(e,i=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function s_(t){return ne(t)&&t.name==="AuthImplicitGrantRedirectError"}class Ry extends Hn{constructor(e,i=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class o_ extends Hn{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Uh extends Hn{constructor(e,i){super(e,"AuthRetryableFetchError",i,void 0)}}function Oy(t){return ne(t)&&t.name==="AuthRetryableFetchError"}class Dy extends Hn{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function l_(t){return ne(t)&&t.name==="AuthRefreshDiscardedError"}class My extends Hn{constructor(e,i,r){super(e,"AuthWeakPasswordError",i,"weak_password"),this.reasons=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class Zl extends Hn{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const ec="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Ly=` 	
\r=`.split(""),c_=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<Ly.length;e+=1)t[Ly[e].charCodeAt(0)]=-2;for(let e=0;e<ec.length;e+=1)t[ec[e].charCodeAt(0)]=e;return t})();function zy(t,e,i){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;i(ec[r]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const r=e.queue>>e.queuedBits-6&63;i(ec[r]),e.queuedBits-=6}}function px(t,e,i){const r=c_[t];if(r>-1)for(e.queue=e.queue<<6|r,e.queuedBits+=6;e.queuedBits>=8;)i(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(r===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function Uy(t){const e=[],i=d=>{e.push(String.fromCodePoint(d))},r={utf8seq:0,codepoint:0},o={queue:0,queuedBits:0},c=d=>{h_(d,r,i)};for(let d=0;d<t.length;d+=1)px(t.charCodeAt(d),o,c);return e.join("")}function u_(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function d_(t,e){for(let i=0;i<t.length;i+=1){let r=t.charCodeAt(i);if(r>55295&&r<=56319){const o=(r-55296)*1024&65535;r=(t.charCodeAt(i+1)-56320&65535|o)+65536,i+=1}u_(r,e)}}function h_(t,e,i){if(e.utf8seq===0){if(t<=127){i(t);return}for(let r=1;r<6;r+=1)if((t>>7-r&1)===0){e.utf8seq=r;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&i(e.codepoint)}}function xr(t){const e=[],i={queue:0,queuedBits:0},r=o=>{e.push(o)};for(let o=0;o<t.length;o+=1)px(t.charCodeAt(o),i,r);return new Uint8Array(e)}function f_(t){const e=[];return d_(t,i=>e.push(i)),new Uint8Array(e)}function yi(t){const e=[],i={queue:0,queuedBits:0},r=o=>{e.push(o)};return t.forEach(o=>zy(o,i,r)),zy(null,i,r),e.join("")}function p_(t){return Math.round(Date.now()/1e3)+t}function m_(){return Symbol("auth-callback")}const _t=()=>typeof window<"u"&&typeof document<"u",ui={tested:!1,writable:!1},mx=()=>{if(!_t())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(ui.tested)return ui.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),ui.tested=!0,ui.writable=!0}catch{ui.tested=!0,ui.writable=!1}return ui.writable};function g_(t){const e={},i=new URL(t);if(i.hash&&i.hash[0]==="#")try{new URLSearchParams(i.hash.substring(1)).forEach((o,c)=>{e[c]=o})}catch{}return i.searchParams.forEach((r,o)=>{e[o]=r}),e}const gx=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),y_=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",pr=async(t,e,i)=>{await t.setItem(e,JSON.stringify(i))},bn=async(t,e)=>{const i=await t.getItem(e);if(!i)return null;try{return JSON.parse(i)}catch{return null}},at=async(t,e)=>{await t.removeItem(e)};class jc{constructor(){this.promise=new jc.promiseConstructor((e,i)=>{this.resolve=e,this.reject=i})}}jc.promiseConstructor=Promise;function Ol(t){const e=t.split(".");if(e.length!==3)throw new Zl("Invalid JWT structure");for(let r=0;r<e.length;r++)if(!n_.test(e[r]))throw new Zl("JWT not in base64url format");return{header:JSON.parse(Uy(e[0])),payload:JSON.parse(Uy(e[1])),signature:xr(e[2]),raw:{header:e[0],payload:e[1]}}}async function v_(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function b_(t,e){return new Promise((r,o)=>{(async()=>{for(let c=0;c<1/0;c++)try{const d=await t(c);if(!e(c,null,d)){r(d);return}}catch(d){if(!e(c,d)){o(d);return}}})()})}function x_(t){return("0"+t.toString(16)).substr(-2)}function w_(){const e=new Uint32Array(56);if(typeof crypto>"u"){const i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",r=i.length;let o="";for(let c=0;c<56;c++)o+=i.charAt(Math.floor(Math.random()*r));return o}return crypto.getRandomValues(e),Array.from(e,x_).join("")}async function S_(t){const i=new TextEncoder().encode(t),r=await crypto.subtle.digest("SHA-256",i),o=new Uint8Array(r);return Array.from(o).map(c=>String.fromCharCode(c)).join("")}async function j_(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const i=await S_(t);return btoa(i).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function di(t,e,i=!1){const r=w_();let o=r;i&&(o+="/recovery"),await pr(t,`${e}-code-verifier`,o);const c=await j_(r);return[c,r===c?"plain":"s256"]}const k_=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function __(t){const e=t.headers.get(zh);if(!e||!e.match(k_))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function T_(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function E_(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const C_=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function sa(t){if(!C_.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function wn(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function eh(){const t={};return new Proxy(t,{get:(e,i)=>{if(i==="__isUserNotAvailableProxy")return!0;if(typeof i=="symbol"){const r=i.toString();if(r==="Symbol(Symbol.toPrimitive)"||r==="Symbol(Symbol.toStringTag)"||r==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${i}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,i)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,i)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${i}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function A_(t,e){return new Proxy(t,{get:(i,r,o)=>{if(r==="__isInsecureUserWarningProxy")return!0;if(typeof r=="symbol"){const c=r.toString();if(c==="Symbol(Symbol.toPrimitive)"||c==="Symbol(Symbol.toStringTag)"||c==="Symbol(util.inspect.custom)"||c==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(i,r,o)}return!e.value&&typeof r=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(i,r,o)}})}function By(t){return JSON.parse(JSON.stringify(t))}const fi=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},N_=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Py(t){var e;if(!y_(t))throw new Uh(fi(t),0);if(N_.includes(t.status))throw new Uh(fi(t),t.status);let i;try{i=await t.json()}catch(c){throw new kn(fi(c),c)}let r;const o=__(t);if(o&&o.getTime()>=fx["2024-01-01"].timestamp&&typeof i=="object"&&i&&typeof i.code=="string"?r=i.code:typeof i=="object"&&i&&typeof i.error_code=="string"&&(r=i.error_code),r){if(r==="weak_password")throw new My(fi(i),t.status,((e=i.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(r==="session_not_found")throw new mt}else if(typeof i=="object"&&i&&typeof i.weak_password=="object"&&i.weak_password&&Array.isArray(i.weak_password.reasons)&&i.weak_password.reasons.length&&i.weak_password.reasons.reduce((c,d)=>c&&typeof d=="string",!0))throw new My(fi(i),t.status,i.weak_password.reasons);throw new i_(fi(i),t.status||500,r)}const R_=(t,e,i,r)=>{const o={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?o:(o.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),o.body=JSON.stringify(r),Object.assign(Object.assign({},o),i))};async function le(t,e,i,r){var o;const c=Object.assign({},r==null?void 0:r.headers);c[zh]||(c[zh]=fx["2024-01-01"].name),r!=null&&r.jwt&&(c.Authorization=`Bearer ${r.jwt}`);const d=(o=r==null?void 0:r.query)!==null&&o!==void 0?o:{};r!=null&&r.redirectTo&&(d.redirect_to=r.redirectTo);const h=Object.keys(d).length?"?"+new URLSearchParams(d).toString():"",p=await O_(t,e,i+h,{headers:c,noResolveJson:r==null?void 0:r.noResolveJson},{},r==null?void 0:r.body);return r!=null&&r.xform?r==null?void 0:r.xform(p):{data:Object.assign({},p),error:null}}async function O_(t,e,i,r,o,c){const d=R_(e,r,o,c);let h;try{h=await t(i,Object.assign({},d))}catch(p){throw console.error(p),new Uh(fi(p),0)}if(h.ok||await Py(h),r!=null&&r.noResolveJson)return h;try{return await h.json()}catch(p){await Py(p)}}function dn(t){var e;let i=null;L_(t)&&(i=Object.assign({},t),t.expires_at||(i.expires_at=p_(t.expires_in)));const r=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:i,user:r},error:null}}function Vy(t){const e=dn(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((i,r)=>i&&typeof r=="string",!0)&&(e.data.weak_password=t.weak_password),e}function Va(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function D_(t){return{data:t,error:null}}function M_(t){const{action_link:e,email_otp:i,hashed_token:r,redirect_to:o,verification_type:c}=t,d=xc(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),h={action_link:e,email_otp:i,hashed_token:r,redirect_to:o,verification_type:c},p=Object.assign({},d);return{data:{properties:h,user:p},error:null}}function Hy(t){return t}function L_(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const th=["global","local","others"];class z_{constructor({url:e="",headers:i={},fetch:r,experimental:o}){this.url=e,this.headers=i,this.fetch=gx(r),this.experimental=o??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,i=th[0]){if(th.indexOf(i)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${th.join(", ")}`);try{return await le(this.fetch,"POST",`${this.url}/logout?scope=${i}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(r){if(ne(r))return{data:null,error:r};throw r}}async inviteUserByEmail(e,i={}){try{return await le(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:i.data},headers:this.headers,redirectTo:i.redirectTo,xform:Va})}catch(r){if(ne(r))return{data:{user:null},error:r};throw r}}async generateLink(e){try{const{options:i}=e,r=xc(e,["options"]),o=Object.assign(Object.assign({},r),i);return"newEmail"in r&&(o.new_email=r==null?void 0:r.newEmail,delete o.newEmail),await le(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:o,headers:this.headers,xform:M_,redirectTo:i==null?void 0:i.redirectTo})}catch(i){if(ne(i))return{data:{properties:null,user:null},error:i};throw i}}async createUser(e){try{return await le(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:Va})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async listUsers(e){var i,r,o,c,d,h,p;try{const g={nextPage:null,lastPage:0,total:0},y=await le(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(i=e==null?void 0:e.page)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:Hy});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(S=>{const _=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(S.split(";")[1].split("=")[1]);g[`${E}Page`]=_}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(ne(g))return{data:{users:[]},error:g};throw g}}async getUserById(e){sa(e);try{return await le(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:Va})}catch(i){if(ne(i))return{data:{user:null},error:i};throw i}}async updateUserById(e,i){sa(e);try{return await le(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:i,headers:this.headers,xform:Va})}catch(r){if(ne(r))return{data:{user:null},error:r};throw r}}async deleteUser(e,i=!1){sa(e);try{return await le(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:i},xform:Va})}catch(r){if(ne(r))return{data:{user:null},error:r};throw r}}async _listFactors(e){sa(e.userId);try{const{data:i,error:r}=await le(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:o=>({data:{factors:o},error:null})});return{data:i,error:r}}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _deleteFactor(e){sa(e.userId),sa(e.id);try{return{data:await le(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _listOAuthClients(e){var i,r,o,c,d,h,p;try{const g={nextPage:null,lastPage:0,total:0},y=await le(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(r=(i=e==null?void 0:e.page)===null||i===void 0?void 0:i.toString())!==null&&r!==void 0?r:"",per_page:(c=(o=e==null?void 0:e.perPage)===null||o===void 0?void 0:o.toString())!==null&&c!==void 0?c:""},xform:Hy});if(y.error)throw y.error;const v=await y.json(),x=(d=y.headers.get("x-total-count"))!==null&&d!==void 0?d:0,w=(p=(h=y.headers.get("link"))===null||h===void 0?void 0:h.split(","))!==null&&p!==void 0?p:[];return w.length>0&&(w.forEach(S=>{const _=parseInt(S.split(";")[0].split("=")[1].substring(0,1)),E=JSON.parse(S.split(";")[1].split("=")[1]);g[`${E}Page`]=_}),g.total=parseInt(x)),{data:Object.assign(Object.assign({},v),g),error:null}}catch(g){if(ne(g))return{data:{clients:[]},error:g};throw g}}async _createOAuthClient(e){try{return await le(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _getOAuthClient(e){try{return await le(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _updateOAuthClient(e,i){try{return await le(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:i,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(ne(r))return{data:null,error:r};throw r}}async _deleteOAuthClient(e){try{return await le(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _regenerateOAuthClientSecret(e){try{return await le(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _listCustomProviders(e){try{const i={};return e!=null&&e.type&&(i.type=e.type),await le(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:i,xform:r=>{var o;return{data:{providers:(o=r==null?void 0:r.providers)!==null&&o!==void 0?o:[]},error:null}}})}catch(i){if(ne(i))return{data:{providers:[]},error:i};throw i}}async _createCustomProvider(e){try{return await le(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _getCustomProvider(e){try{return await le(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _updateCustomProvider(e,i){try{return await le(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:i,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(ne(r))return{data:null,error:r};throw r}}async _deleteCustomProvider(e){try{return await le(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _adminListPasskeys(e){wn(this.experimental),sa(e.userId);try{return await le(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(ne(i))return{data:null,error:i};throw i}}async _adminDeletePasskey(e){wn(this.experimental),sa(e.userId),sa(e.passkeyId);try{return await le(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(i){if(ne(i))return{data:null,error:i};throw i}}}function $y(t={}){return{getItem:e=>t[e]||null,setItem:(e,i)=>{t[e]=i},removeItem:e=>{delete t[e]}}}globalThis&&mx()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class U_ extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function B_(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function yx(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function P_(t){return parseInt(t,16)}function V_(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,r=>r.toString(16).padStart(2,"0")).join("")}function H_(t){var e;const{chainId:i,domain:r,expirationTime:o,issuedAt:c=new Date,nonce:d,notBefore:h,requestId:p,resources:g,scheme:y,uri:v,version:x}=t;{if(!Number.isInteger(i))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${i}`);if(!r)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(d&&d.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${d}`);if(!v)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(x!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${x}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const w=yx(t.address),S=y?`${y}://${r}`:r,_=t.statement?`${t.statement}
`:"",E=`${S} wants you to sign in with your Ethereum account:
${w}

${_}`;let T=`URI: ${v}
Version: ${x}
Chain ID: ${i}${d?`
Nonce: ${d}`:""}
Issued At: ${c.toISOString()}`;if(o&&(T+=`
Expiration Time: ${o.toISOString()}`),h&&(T+=`
Not Before: ${h.toISOString()}`),p&&(T+=`
Request ID: ${p}`),g){let O=`
Resources:`;for(const R of g){if(!R||typeof R!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${R}`);O+=`
- ${R}`}T+=O}return`${E}
${T}`}class ct extends Error{constructor({message:e,code:i,cause:r,name:o}){var c;super(e,{cause:r}),this.__isWebAuthnError=!0,this.name=(c=o??(r instanceof Error?r.name:void 0))!==null&&c!==void 0?c:"Unknown Error",this.code=i}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class tc extends ct{constructor(e,i){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:i,message:e}),this.name="WebAuthnUnknownError",this.originalError=i}}function $_({error:t,options:e}){var i,r,o;const{publicKey:c}=e;if(!c)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ct({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((i=c.authenticatorSelection)===null||i===void 0?void 0:i.requireResidentKey)===!0)return new ct({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((r=c.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new ct({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((o=c.authenticatorSelection)===null||o===void 0?void 0:o.userVerification)==="required")return new ct({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new ct({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new ct({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return c.pubKeyCredParams.filter(h=>h.type==="public-key").length===0?new ct({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new ct({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const d=window.location.hostname;if(vx(d)){if(c.rp.id!==d)return new ct({message:`The RP ID "${c.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ct({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(c.user.id.byteLength<1||c.user.id.byteLength>64)return new ct({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new ct({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ct({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function I_({error:t,options:e}){const{publicKey:i}=e;if(!i)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new ct({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new ct({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const r=window.location.hostname;if(vx(r)){if(i.rpId!==r)return new ct({message:`The RP ID "${i.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new ct({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new ct({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new ct({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class q_{createNewAbortSignal(){if(this.controller){const i=new Error("Cancelling existing WebAuthn API call for new one");i.name="AbortError",this.controller.abort(i)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Bh=new q_;function Iy(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:i,excludeCredentials:r}=t,o=xc(t,["challenge","user","excludeCredentials"]),c=xr(e).buffer,d=Object.assign(Object.assign({},i),{id:xr(i.id).buffer}),h=Object.assign(Object.assign({},o),{challenge:c,user:d});if(r&&r.length>0){h.excludeCredentials=new Array(r.length);for(let p=0;p<r.length;p++){const g=r[p];h.excludeCredentials[p]=Object.assign(Object.assign({},g),{id:xr(g.id).buffer,type:g.type||"public-key",transports:g.transports})}}return h}function qy(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:i}=t,r=xc(t,["challenge","allowCredentials"]),o=xr(e).buffer,c=Object.assign(Object.assign({},r),{challenge:o});if(i&&i.length>0){c.allowCredentials=new Array(i.length);for(let d=0;d<i.length;d++){const h=i[d];c.allowCredentials[d]=Object.assign(Object.assign({},h),{id:xr(h.id).buffer,type:h.type||"public-key",transports:h.transports})}}return c}function Fy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const i=t;return{id:t.id,rawId:t.id,response:{attestationObject:yi(new Uint8Array(t.response.attestationObject)),clientDataJSON:yi(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=i.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Gy(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const i=t,r=t.getClientExtensionResults(),o=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:yi(new Uint8Array(o.authenticatorData)),clientDataJSON:yi(new Uint8Array(o.clientDataJSON)),signature:yi(new Uint8Array(o.signature)),userHandle:o.userHandle?yi(new Uint8Array(o.userHandle)):void 0},type:"public-key",clientExtensionResults:r,authenticatorAttachment:(e=i.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function vx(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function nc(){var t,e;return!!(_t()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function bx(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new tc("Browser returned unexpected credential type",e)}:{data:null,error:new tc("Empty credential response",e)}}catch(e){return{data:null,error:$_({error:e,options:t})}}}async function xx(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new tc("Browser returned unexpected credential type",e)}:{data:null,error:new tc("Empty credential response",e)}}catch(e){return{data:null,error:I_({error:e,options:t})}}}const F_={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},G_={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function ac(...t){const e=o=>o!==null&&typeof o=="object"&&!Array.isArray(o),i=o=>o instanceof ArrayBuffer||ArrayBuffer.isView(o),r={};for(const o of t)if(o)for(const c in o){const d=o[c];if(d!==void 0)if(Array.isArray(d))r[c]=d;else if(i(d))r[c]=d;else if(e(d)){const h=r[c];e(h)?r[c]=ac(h,d):r[c]=ac(d)}else r[c]=d}return r}function K_(t,e){return ac(F_,t,e||{})}function Y_(t,e){return ac(G_,t,e||{})}class X_{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:i,friendlyName:r,signal:o},c){var d;try{const{data:h,error:p}=await this.client.mfa.challenge({factorId:e,webauthn:i});if(!h)return{data:null,error:p};const g=o??Bh.createNewAbortSignal();if(h.webauthn.type==="create"){const{user:y}=h.webauthn.credential_options.publicKey;if(!y.name){const v=r;if(v)y.name=`${y.id}:${v}`;else{const w=(await this.client.getUser()).data.user,S=((d=w==null?void 0:w.user_metadata)===null||d===void 0?void 0:d.name)||(w==null?void 0:w.email)||(w==null?void 0:w.id)||"User";y.name=`${y.id}:${S}`}}y.displayName||(y.displayName=y.name)}switch(h.webauthn.type){case"create":{const y=K_(h.webauthn.credential_options.publicKey,c==null?void 0:c.create),{data:v,error:x}=await bx({publicKey:y,signal:g});return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}case"request":{const y=Y_(h.webauthn.credential_options.publicKey,c==null?void 0:c.request),{data:v,error:x}=await xx(Object.assign(Object.assign({},h.webauthn.credential_options),{publicKey:y,signal:g}));return v?{data:{factorId:e,challengeId:h.id,webauthn:{type:h.webauthn.type,credential_response:v}},error:null}:{data:null,error:x}}}}catch(h){return ne(h)?{data:null,error:h}:{data:null,error:new kn("Unexpected error in challenge",h)}}}async _verify({challengeId:e,factorId:i,webauthn:r}){return this.client.mfa.verify({factorId:i,challengeId:e,webauthn:r})}async _authenticate({factorId:e,webauthn:{rpId:i=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!i)return{data:null,error:new Gs("rpId is required for WebAuthn authentication")};try{if(!nc())return{data:null,error:new kn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this.challenge({factorId:e,webauthn:{rpId:i,rpOrigins:r},signal:o},{request:c});if(!d)return{data:null,error:h};const{webauthn:p}=d;return this._verify({factorId:e,challengeId:d.challengeId,webauthn:{type:p.type,rpId:i,rpOrigins:r,credential_response:p.credential_response}})}catch(d){return ne(d)?{data:null,error:d}:{data:null,error:new kn("Unexpected error in authenticate",d)}}}async _register({friendlyName:e,webauthn:{rpId:i=typeof window<"u"?window.location.hostname:void 0,rpOrigins:r=typeof window<"u"?[window.location.origin]:void 0,signal:o}={}},c){if(!i)return{data:null,error:new Gs("rpId is required for WebAuthn registration")};try{if(!nc())return{data:null,error:new kn("Browser does not support WebAuthn",null)};const{data:d,error:h}=await this._enroll({friendlyName:e});if(!d)return await this.client.mfa.listFactors().then(y=>{var v;return(v=y.data)===null||v===void 0?void 0:v.all.find(x=>x.factor_type==="webauthn"&&x.friendly_name===e&&x.status!=="unverified")}).then(y=>y?this.client.mfa.unenroll({factorId:y==null?void 0:y.id}):void 0),{data:null,error:h};const{data:p,error:g}=await this._challenge({factorId:d.id,friendlyName:d.friendly_name,webauthn:{rpId:i,rpOrigins:r},signal:o},{create:c});return p?this._verify({factorId:d.id,challengeId:p.challengeId,webauthn:{rpId:i,rpOrigins:r,type:p.webauthn.type,credential_response:p.webauthn.credential_response}}):{data:null,error:g}}catch(d){return ne(d)?{data:null,error:d}:{data:null,error:new kn("Unexpected error in register",d)}}}}B_();const W_={url:Zk,storageKey:e_,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:t_,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},ur={};class Ks{get jwks(){var e,i;return(i=(e=ur[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&i!==void 0?i:{keys:[]}}set jwks(e){ur[this.storageKey]=Object.assign(Object.assign({},ur[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,i;return(i=(e=ur[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&i!==void 0?i:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){ur[this.storageKey]=Object.assign(Object.assign({},ur[this.storageKey]),{cachedAt:e})}constructor(e){var i,r,o;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const c=Object.assign(Object.assign({},W_),e);if(this.storageKey=c.storageKey,this.instanceID=(i=Ks.nextInstanceID[this.storageKey])!==null&&i!==void 0?i:0,Ks.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!c.debug,typeof c.debug=="function"&&(this.logger=c.debug),this.instanceID>0&&_t()){const d=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(d),this.logDebugMessages&&console.trace(d)}if(this.persistSession=c.persistSession,this.autoRefreshToken=c.autoRefreshToken,this.experimental=(r=c.experimental)!==null&&r!==void 0?r:{},this.admin=new z_({url:c.url,headers:c.headers,fetch:c.fetch,experimental:this.experimental}),this.url=c.url,this.headers=c.headers,this.fetch=gx(c.fetch),this.detectSessionInUrl=c.detectSessionInUrl,this.flowType=c.flowType,this.hasCustomAuthorizationHeader=c.hasCustomAuthorizationHeader,this.throwOnError=c.throwOnError,this.lockAcquireTimeout=c.lockAcquireTimeout,c.lock!=null&&(this.lock=c.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new X_(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(c.storage?this.storage=c.storage:mx()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=$y(this.memoryStorage)),c.userStorage&&(this.userStorage=c.userStorage)):(this.memoryStorage={},this.storage=$y(this.memoryStorage)),_t()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(d){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",d)}(o=this.broadcastChannel)===null||o===void 0||o.addEventListener("message",async d=>{this._debug("received broadcast notification from other tab or client",d),(d.data.event==="TOKEN_REFRESHED"||d.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(d.data.event,d.data.session,!1)}catch(h){this._debug("#broadcastChannel","error",h)}})}c.skipAutoInitialize||this.initialize().catch(d=>{this._debug("#initialize()","error",d)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${hx}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let i={},r="none";if(_t()&&(i=g_(window.location.href),this._isImplicitGrantCallback(i)?r="implicit":await this._isPKCECallback(i)&&(r="pkce")),_t()&&this.detectSessionInUrl&&r!=="none"){const{data:o,error:c}=await this._getSessionFromURL(i,r);if(c){if(this._debug("#_initialize()","error detecting session from URL",c),s_(c)){const p=(e=c.details)===null||e===void 0?void 0:e.code;if(p==="identity_already_exists"||p==="identity_not_found"||p==="single_identity_not_deletable")return{error:c}}return{error:c}}const{session:d,redirectType:h}=o;return this._debug("#_initialize()","detected session in URL",d,"redirect type",h),await this._saveSession(d),setTimeout(async()=>{h==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",d):await this._notifyAllSubscribers("SIGNED_IN",d)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(i){return ne(i)?this._returnResult({error:i}):this._returnResult({error:new kn("Unexpected error during initialization",i)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var i,r,o;try{const c=await le(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(r=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:(o=e==null?void 0:e.options)===null||o===void 0?void 0:o.captchaToken}},xform:dn}),{data:d,error:h}=c;if(h||!d)return this._returnResult({data:{user:null,session:null},error:h});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(ne(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signUp(e){var i,r,o;try{let c;if("email"in e){const{email:y,password:v,options:x}=e;let w=null,S=null;this.flowType==="pkce"&&([w,S]=await di(this.storage,this.storageKey)),c=await le(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:x==null?void 0:x.emailRedirectTo,body:{email:y,password:v,data:(i=x==null?void 0:x.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken},code_challenge:w,code_challenge_method:S},xform:dn})}else if("phone"in e){const{phone:y,password:v,options:x}=e;c=await le(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:y,password:v,data:(r=x==null?void 0:x.data)!==null&&r!==void 0?r:{},channel:(o=x==null?void 0:x.channel)!==null&&o!==void 0?o:"sms",gotrue_meta_security:{captcha_token:x==null?void 0:x.captchaToken}},xform:dn})}else throw new Nl("You must provide either an email or phone number and a password");const{data:d,error:h}=c;if(h||!d)return await at(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:h});const p=d.session,g=d.user;return d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(c){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:{user:null,session:null},error:c});throw c}}async signInWithPassword(e){try{let i;if("email"in e){const{email:c,password:d,options:h}=e;i=await le(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:c,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Vy})}else if("phone"in e){const{phone:c,password:d,options:h}=e;i=await le(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:c,password:d,gotrue_meta_security:{captcha_token:h==null?void 0:h.captchaToken}},xform:Vy})}else throw new Nl("You must provide either an email or phone number and a password");const{data:r,error:o}=i;if(o)return this._returnResult({data:{user:null,session:null},error:o});if(!r||!r.session||!r.user){const c=new cr;return this._returnResult({data:{user:null,session:null},error:c})}return r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:Object.assign({user:r.user,session:r.session},r.weak_password?{weakPassword:r.weak_password}:null),error:o})}catch(i){if(ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithOAuth(e){var i,r,o,c;return await this._handleProviderSignIn(e.provider,{redirectTo:(i=e.options)===null||i===void 0?void 0:i.redirectTo,scopes:(r=e.options)===null||r===void 0?void 0:r.scopes,queryParams:(o=e.options)===null||o===void 0?void 0:o.queryParams,skipBrowserRedirect:(c=e.options)===null||c===void 0?void 0:c.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:i}=e;switch(i){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${i}"`)}}async signInWithEthereum(e){var i,r,o,c,d,h,p,g,y,v,x;let w,S;if("message"in e)w=e.message,S=e.signature;else{const{chain:_,wallet:E,statement:T,options:O}=e;let R;if(_t())if(typeof E=="object")R=E;else{const ee=window;if("ethereum"in ee&&typeof ee.ethereum=="object"&&"request"in ee.ethereum&&typeof ee.ethereum.request=="function")R=ee.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof E!="object"||!(O!=null&&O.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");R=E}const L=new URL((i=O==null?void 0:O.url)!==null&&i!==void 0?i:window.location.href),K=await R.request({method:"eth_requestAccounts"}).then(ee=>ee).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!K||K.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const W=yx(K[0]);let F=(r=O==null?void 0:O.signInWithEthereum)===null||r===void 0?void 0:r.chainId;if(!F){const ee=await R.request({method:"eth_chainId"});F=P_(ee)}const Y={domain:L.host,address:W,statement:T,uri:L.href,version:"1",chainId:F,nonce:(o=O==null?void 0:O.signInWithEthereum)===null||o===void 0?void 0:o.nonce,issuedAt:(d=(c=O==null?void 0:O.signInWithEthereum)===null||c===void 0?void 0:c.issuedAt)!==null&&d!==void 0?d:new Date,expirationTime:(h=O==null?void 0:O.signInWithEthereum)===null||h===void 0?void 0:h.expirationTime,notBefore:(p=O==null?void 0:O.signInWithEthereum)===null||p===void 0?void 0:p.notBefore,requestId:(g=O==null?void 0:O.signInWithEthereum)===null||g===void 0?void 0:g.requestId,resources:(y=O==null?void 0:O.signInWithEthereum)===null||y===void 0?void 0:y.resources};w=H_(Y),S=await R.request({method:"personal_sign",params:[V_(w),W]})}try{const{data:_,error:E}=await le(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:w,signature:S},!((v=e.options)===null||v===void 0)&&v.captchaToken?{gotrue_meta_security:{captcha_token:(x=e.options)===null||x===void 0?void 0:x.captchaToken}}:null),xform:dn});if(E)throw E;if(!_||!_.session||!_.user){const T=new cr;return this._returnResult({data:{user:null,session:null},error:T})}return _.session&&(await this._saveSession(_.session),await this._notifyAllSubscribers("SIGNED_IN",_.session)),this._returnResult({data:Object.assign({},_),error:E})}catch(_){if(ne(_))return this._returnResult({data:{user:null,session:null},error:_});throw _}}async signInWithSolana(e){var i,r,o,c,d,h,p,g,y,v,x,w;let S,_;if("message"in e)S=e.message,_=e.signature;else{const{chain:E,wallet:T,statement:O,options:R}=e;let L;if(_t())if(typeof T=="object")L=T;else{const W=window;if("solana"in W&&typeof W.solana=="object"&&("signIn"in W.solana&&typeof W.solana.signIn=="function"||"signMessage"in W.solana&&typeof W.solana.signMessage=="function"))L=W.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof T!="object"||!(R!=null&&R.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");L=T}const K=new URL((i=R==null?void 0:R.url)!==null&&i!==void 0?i:window.location.href);if("signIn"in L&&L.signIn){const W=await L.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},R==null?void 0:R.signInWithSolana),{version:"1",domain:K.host,uri:K.href}),O?{statement:O}:null));let F;if(Array.isArray(W)&&W[0]&&typeof W[0]=="object")F=W[0];else if(W&&typeof W=="object"&&"signedMessage"in W&&"signature"in W)F=W;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in F&&"signature"in F&&(typeof F.signedMessage=="string"||F.signedMessage instanceof Uint8Array)&&F.signature instanceof Uint8Array)S=typeof F.signedMessage=="string"?F.signedMessage:new TextDecoder().decode(F.signedMessage),_=F.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in L)||typeof L.signMessage!="function"||!("publicKey"in L)||typeof L!="object"||!L.publicKey||!("toBase58"in L.publicKey)||typeof L.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");S=[`${K.host} wants you to sign in with your Solana account:`,L.publicKey.toBase58(),...O?["",O,""]:[""],"Version: 1",`URI: ${K.href}`,`Issued At: ${(o=(r=R==null?void 0:R.signInWithSolana)===null||r===void 0?void 0:r.issuedAt)!==null&&o!==void 0?o:new Date().toISOString()}`,...!((c=R==null?void 0:R.signInWithSolana)===null||c===void 0)&&c.notBefore?[`Not Before: ${R.signInWithSolana.notBefore}`]:[],...!((d=R==null?void 0:R.signInWithSolana)===null||d===void 0)&&d.expirationTime?[`Expiration Time: ${R.signInWithSolana.expirationTime}`]:[],...!((h=R==null?void 0:R.signInWithSolana)===null||h===void 0)&&h.chainId?[`Chain ID: ${R.signInWithSolana.chainId}`]:[],...!((p=R==null?void 0:R.signInWithSolana)===null||p===void 0)&&p.nonce?[`Nonce: ${R.signInWithSolana.nonce}`]:[],...!((g=R==null?void 0:R.signInWithSolana)===null||g===void 0)&&g.requestId?[`Request ID: ${R.signInWithSolana.requestId}`]:[],...!((v=(y=R==null?void 0:R.signInWithSolana)===null||y===void 0?void 0:y.resources)===null||v===void 0)&&v.length?["Resources",...R.signInWithSolana.resources.map(F=>`- ${F}`)]:[]].join(`
`);const W=await L.signMessage(new TextEncoder().encode(S),"utf8");if(!W||!(W instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");_=W}}try{const{data:E,error:T}=await le(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:S,signature:yi(_)},!((x=e.options)===null||x===void 0)&&x.captchaToken?{gotrue_meta_security:{captcha_token:(w=e.options)===null||w===void 0?void 0:w.captchaToken}}:null),xform:dn});if(T)throw T;if(!E||!E.session||!E.user){const O=new cr;return this._returnResult({data:{user:null,session:null},error:O})}return E.session&&(await this._saveSession(E.session),await this._notifyAllSubscribers("SIGNED_IN",E.session)),this._returnResult({data:Object.assign({},E),error:T})}catch(E){if(ne(E))return this._returnResult({data:{user:null,session:null},error:E});throw E}}async _exchangeCodeForSession(e){const i=await bn(this.storage,`${this.storageKey}-code-verifier`),[r,o]=(i??"").split("/");try{if(!r&&this.flowType==="pkce")throw new o_;const{data:c,error:d}=await le(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:r},xform:dn});if(await at(this.storage,`${this.storageKey}-code-verifier`),d)throw d;if(!c||!c.session||!c.user){const h=new cr;return this._returnResult({data:{user:null,session:null,redirectType:null},error:h})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(o==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:o??null}),error:d})}catch(c){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:i,provider:r,token:o,access_token:c,nonce:d}=e,h=await le(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:r,id_token:o,access_token:c,nonce:d,gotrue_meta_security:{captcha_token:i==null?void 0:i.captchaToken}},xform:dn}),{data:p,error:g}=h;if(g)return this._returnResult({data:{user:null,session:null},error:g});if(!p||!p.session||!p.user){const y=new cr;return this._returnResult({data:{user:null,session:null},error:y})}return p.session&&(await this._saveSession(p.session),await this._notifyAllSubscribers("SIGNED_IN",p.session)),this._returnResult({data:p,error:g})}catch(i){if(ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithOtp(e){var i,r,o,c,d;try{if("email"in e){const{email:h,options:p}=e;let g=null,y=null;this.flowType==="pkce"&&([g,y]=await di(this.storage,this.storageKey));const{error:v}=await le(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:h,data:(i=p==null?void 0:p.data)!==null&&i!==void 0?i:{},create_user:(r=p==null?void 0:p.shouldCreateUser)!==null&&r!==void 0?r:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},code_challenge:g,code_challenge_method:y},redirectTo:p==null?void 0:p.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:v})}if("phone"in e){const{phone:h,options:p}=e,{data:g,error:y}=await le(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:h,data:(o=p==null?void 0:p.data)!==null&&o!==void 0?o:{},create_user:(c=p==null?void 0:p.shouldCreateUser)!==null&&c!==void 0?c:!0,gotrue_meta_security:{captcha_token:p==null?void 0:p.captchaToken},channel:(d=p==null?void 0:p.channel)!==null&&d!==void 0?d:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:g==null?void 0:g.message_id},error:y})}throw new Nl("You must provide either an email or phone number.")}catch(h){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(h))return this._returnResult({data:{user:null,session:null},error:h});throw h}}async verifyOtp(e){var i,r;try{let o,c;"options"in e&&(o=(i=e.options)===null||i===void 0?void 0:i.redirectTo,c=(r=e.options)===null||r===void 0?void 0:r.captchaToken);const{data:d,error:h}=await le(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:c}}),redirectTo:o,xform:dn});if(h)throw h;if(!d)throw new Error("An error occurred on token verification.");const p=d.session,g=d.user;return p!=null&&p.access_token&&(await this._saveSession(p),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",p)),this._returnResult({data:{user:g,session:p},error:null})}catch(o){if(ne(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async signInWithSSO(e){var i,r,o,c,d;try{let h=null,p=null;this.flowType==="pkce"&&([h,p]=await di(this.storage,this.storageKey));const g=await le(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(r=(i=e.options)===null||i===void 0?void 0:i.redirectTo)!==null&&r!==void 0?r:void 0}),!((o=e==null?void 0:e.options)===null||o===void 0)&&o.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:h,code_challenge_method:p}),headers:this.headers,xform:D_});return!((c=g.data)===null||c===void 0)&&c.url&&_t()&&!(!((d=e.options)===null||d===void 0)&&d.skipBrowserRedirect)&&window.location.assign(g.data.url),this._returnResult(g)}catch(h){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(h))return this._returnResult({data:null,error:h});throw h}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:i},error:r}=e;if(r)throw r;if(!i)throw new mt;const{error:o}=await le(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:i.access_token});return this._returnResult({data:{user:null,session:null},error:o})})}catch(e){if(ne(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const i=`${this.url}/resend`;if("email"in e){const{email:r,type:o,options:c}=e;let d=null,h=null;this.flowType==="pkce"&&([d,h]=await di(this.storage,this.storageKey));const{error:p}=await le(this.fetch,"POST",i,{headers:this.headers,body:{email:r,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:d,code_challenge_method:h},redirectTo:c==null?void 0:c.emailRedirectTo});return p&&await at(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:p})}else if("phone"in e){const{phone:r,type:o,options:c}=e,{data:d,error:h}=await le(this.fetch,"POST",i,{headers:this.headers,body:{phone:r,type:o,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:h})}throw new Nl("You must provide either an email or phone number and a type")}catch(i){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,i){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const r=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),o=(async()=>(await r,await i()))();return this.pendingInLock.push((async()=>{try{await o}catch{}})()),o}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const r=i();for(this.pendingInLock.push((async()=>{try{await r}catch{}})()),await r;this.pendingInLock.length;){const o=[...this.pendingInLock];await Promise.all(o),this.pendingInLock.splice(0,o.length)}return await r}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const i=await this.__loadSession();return await e(i)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const i=await bn(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",i),i!==null&&(this._isValidSession(i)?e=i:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const r=e.expires_at?e.expires_at*1e3-Date.now()<Zd:!1;if(this._debug("#__loadSession()",`session has${r?"":" not"} expired`,"expires_at",e.expires_at),!r){if(this.userStorage){const d=await bn(this.userStorage,this.storageKey+"-user");d!=null&&d.user?e.user=d.user:e.user=eh()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const d={value:this.suppressGetSessionWarning};e.user=A_(e.user,d),d.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);if(c){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const h=await bn(this.storage,this.storageKey);if(h&&h.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:c})}return this._returnResult({data:{session:o},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let i;return this.lock!=null?i=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):i=await this._getUser(),i.data.user&&(this.suppressGetSessionWarning=!0),i}async _getUser(e){try{return e?await le(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:Va}):await this._useSession(async i=>{var r,o,c;const{data:d,error:h}=i;if(h)throw h;return!(!((r=d.session)===null||r===void 0)&&r.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new mt}:await le(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(c=(o=d.session)===null||o===void 0?void 0:o.access_token)!==null&&c!==void 0?c:void 0,xform:Va})})}catch(i){if(ne(i))return Al(i)&&(await this._removeSession(),await at(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:i});throw i}}async updateUser(e,i={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,i)):await this._updateUser(e,i)}async _updateUser(e,i={}){try{return await this._useSession(async r=>{const{data:o,error:c}=r;if(c)throw c;if(!o.session)throw new mt;const d=o.session;let h=null,p=null;this.flowType==="pkce"&&e.email!=null&&([h,p]=await di(this.storage,this.storageKey));const{data:g,error:y}=await le(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:i==null?void 0:i.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:h,code_challenge_method:p}),jwt:d.access_token,xform:Va});if(y)throw y;return d.user=g.user,await this._saveSession(d),await this._notifyAllSubscribers("USER_UPDATED",d),this._returnResult({data:{user:d.user},error:null})})}catch(r){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new mt;const i=Date.now()/1e3;let r=i,o=!0,c=null;const{payload:d}=Ol(e.access_token);if(d.exp&&(r=d.exp,o=r<=i),o){const{data:h,error:p}=await this._callRefreshToken(e.refresh_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});if(!h)return{data:{user:null,session:null},error:null};c=h}else{const{data:h,error:p}=await this._getUser(e.access_token);if(p)return this._returnResult({data:{user:null,session:null},error:p});c={access_token:e.access_token,refresh_token:e.refresh_token,user:h.user,token_type:"bearer",expires_in:r-i,expires_at:r},await this._saveSession(c),await this._notifyAllSubscribers("SIGNED_IN",c)}return this._returnResult({data:{user:c.user,session:c},error:null})}catch(i){if(ne(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async i=>{var r;if(!e){const{data:d,error:h}=i;if(h)throw h;e=(r=d.session)!==null&&r!==void 0?r:void 0}if(!(e!=null&&e.refresh_token))throw new mt;const{data:o,error:c}=await this._callRefreshToken(e.refresh_token);return c?this._returnResult({data:{user:null,session:null},error:c}):o?this._returnResult({data:{user:o.user,session:o},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(i){if(ne(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async _getSessionFromURL(e,i){var r;try{if(!_t())throw new Rl("No browser detected.");if(e.error||e.error_description||e.error_code)throw new Rl(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(i){case"implicit":if(this.flowType==="pkce")throw new Ry("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new Rl("Not a valid implicit grant flow url.");break;default:}if(i==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Ry("No code detected.");const{data:R,error:L}=await this._exchangeCodeForSession(e.code);if(L)throw L;const K=new URL(window.location.href);return K.searchParams.delete("code"),window.history.replaceState(window.history.state,"",K.toString()),{data:{session:R.session,redirectType:(r=R.redirectType)!==null&&r!==void 0?r:null},error:null}}const{provider_token:o,provider_refresh_token:c,access_token:d,refresh_token:h,expires_in:p,expires_at:g,token_type:y}=e;if(!d||!p||!h||!y)throw new Rl("No session defined in URL");const v=Math.round(Date.now()/1e3),x=parseInt(p);let w=v+x;g&&(w=parseInt(g));const S=w-v;S*1e3<=da&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${S}s, should have been closer to ${x}s`);const _=w-x;v-_>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",_,w,v):v-_<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",_,w,v);const{data:E,error:T}=await this._getUser(d);if(T)throw T;const O={provider_token:o,provider_refresh_token:c,access_token:d,expires_in:x,expires_at:w,refresh_token:h,token_type:y,user:E.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:O,redirectType:e.type},error:null})}catch(o){if(ne(o))return this._returnResult({data:{session:null,redirectType:null},error:o});throw o}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const i=await bn(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&i)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async i=>{var r;const{data:o,error:c}=i;if(c&&!Al(c))return this._returnResult({error:c});const d=(r=o.session)===null||r===void 0?void 0:r.access_token;if(d){const{error:h}=await this.admin.signOut(d,e);if(h&&!(r_(h)&&(h.status===404||h.status===401||h.status===403)||Al(h)))return this._returnResult({error:h})}return e!=="others"&&(await this._removeSession(),await at(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const i=m_(),r={id:i,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",i),this.stateChangeEmitters.delete(i)}};return this._debug("#onAuthStateChange()","registered callback with id",i),this.stateChangeEmitters.set(i,r),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(i)}):await this._emitInitialSession(i)))(),{data:{subscription:r}}}async _emitInitialSession(e){return await this._useSession(async i=>{var r,o;try{const{data:{session:c},error:d}=i;if(d)throw d;await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",c)),this._debug("INITIAL_SESSION","callback id",e,"session",c)}catch(c){await((o=this.stateChangeEmitters.get(e))===null||o===void 0?void 0:o.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",c),Al(c)?console.warn(c):console.error(c)}})}async resetPasswordForEmail(e,i={}){let r=null,o=null;this.flowType==="pkce"&&([r,o]=await di(this.storage,this.storageKey,!0));try{return await le(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:r,code_challenge_method:o,gotrue_meta_security:{captcha_token:i.captchaToken}},headers:this.headers,redirectTo:i.redirectTo})}catch(c){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(c))return this._returnResult({data:null,error:c});throw c}}async getUserIdentities(){var e;try{const{data:i,error:r}=await this.getUser();if(r)throw r;return this._returnResult({data:{identities:(e=i.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var i;try{const{data:r,error:o}=await this._useSession(async c=>{var d,h,p,g,y;const{data:v,error:x}=c;if(x)throw x;const w=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(d=e.options)===null||d===void 0?void 0:d.redirectTo,scopes:(h=e.options)===null||h===void 0?void 0:h.scopes,queryParams:(p=e.options)===null||p===void 0?void 0:p.queryParams,skipBrowserRedirect:!0});return await le(this.fetch,"GET",w,{headers:this.headers,jwt:(y=(g=v.session)===null||g===void 0?void 0:g.access_token)!==null&&y!==void 0?y:void 0})});if(o)throw o;return _t()&&!(!((i=e.options)===null||i===void 0)&&i.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url},error:null})}catch(r){if(ne(r))return this._returnResult({data:{provider:e.provider,url:null},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async i=>{var r;try{const{error:o,data:{session:c}}=i;if(o)throw o;const{options:d,provider:h,token:p,access_token:g,nonce:y}=e,v=await le(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(r=c==null?void 0:c.access_token)!==null&&r!==void 0?r:void 0,body:{provider:h,id_token:p,access_token:g,nonce:y,link_identity:!0,gotrue_meta_security:{captcha_token:d==null?void 0:d.captchaToken}},xform:dn}),{data:x,error:w}=v;return w?this._returnResult({data:{user:null,session:null},error:w}):!x||!x.session||!x.user?this._returnResult({data:{user:null,session:null},error:new cr}):(x.session&&(await this._saveSession(x.session),await this._notifyAllSubscribers("USER_UPDATED",x.session)),this._returnResult({data:x,error:w}))}catch(o){if(await at(this.storage,`${this.storageKey}-code-verifier`),ne(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}})}async unlinkIdentity(e){try{return await this._useSession(async i=>{var r,o;const{data:c,error:d}=i;if(d)throw d;return await le(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(o=(r=c.session)===null||r===void 0?void 0:r.access_token)!==null&&o!==void 0?o:void 0})})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _refreshAccessToken(e){const i="#_refreshAccessToken()";this._debug(i,"begin");try{const r=Date.now();return await b_(async o=>(o>0&&await v_(200*Math.pow(2,o-1)),this._debug(i,"refreshing attempt",o),await le(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:dn})),(o,c)=>{const d=200*Math.pow(2,o);return c&&Oy(c)&&Date.now()+d-r<da})}catch(r){if(this._debug(i,"error",r),ne(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}finally{this._debug(i,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,i){const r=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:i.redirectTo,scopes:i.scopes,queryParams:i.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",i,"url",r),_t()&&!i.skipBrowserRedirect&&window.location.assign(r),{data:{provider:e,url:r},error:null}}async _recoverAndRefresh(){var e,i;const r="#_recoverAndRefresh()";this._debug(r,"begin");try{const o=await bn(this.storage,this.storageKey);if(o&&this.userStorage){let d=await bn(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!d&&(d={user:o.user},await pr(this.userStorage,this.storageKey+"-user",d)),o.user=(e=d==null?void 0:d.user)!==null&&e!==void 0?e:eh()}else if(o&&!o.user&&!o.user){const d=await bn(this.storage,this.storageKey+"-user");d&&(d!=null&&d.user)?(o.user=d.user,await at(this.storage,this.storageKey+"-user"),await pr(this.storage,this.storageKey,o)):o.user=eh()}if(this._debug(r,"session from storage",o),!this._isValidSession(o)){this._debug(r,"session is not valid"),o!==null&&await this._removeSession();return}const c=((i=o.expires_at)!==null&&i!==void 0?i:1/0)*1e3-Date.now()<Zd;if(this._debug(r,`session has${c?"":" not"} expired with margin of ${Zd}s`),c){if(this.autoRefreshToken&&o.refresh_token){const{error:d}=await this._callRefreshToken(o.refresh_token);d&&(l_(d)?this._debug(r,"refresh discarded by commit guard",d):this._debug(r,"refresh failed",d))}}else if(o.user&&o.user.__isUserNotAvailableProxy===!0)try{const{data:d,error:h}=await this._getUser(o.access_token);!h&&(d!=null&&d.user)?(o.user=d.user,await this._saveSession(o),await this._notifyAllSubscribers("SIGNED_IN",o)):this._debug(r,"could not get user data, skipping SIGNED_IN notification")}catch(d){console.error("Error getting user data:",d),this._debug(r,"error getting user data, skipping SIGNED_IN notification",d)}else await this._notifyAllSubscribers("SIGNED_IN",o)}catch(o){this._debug(r,"error",o),console.error(o);return}finally{this._debug(r,"end")}}async _callRefreshToken(e){var i,r;if(!e)throw new mt;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const o="#_callRefreshToken()";this._debug(o,"begin");try{this.refreshingDeferred=new jc;const c=await bn(this.storage,this.storageKey),{data:d,error:h}=await this._refreshAccessToken(e);if(h)throw h;if(!d.session)throw new mt;const p=await bn(this.storage,this.storageKey);if(c!==null&&(p===null||p.refresh_token!==c.refresh_token)){this._debug(o,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:p?"replaced":"cleared"});const x={data:null,error:new Dy};return this.refreshingDeferred.resolve(x),x}const y=this._sessionRemovalEpoch;if(await this._saveSession(d.session),this._sessionRemovalEpoch!==y){this._debug(o,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await at(this.storage,this.storageKey),this.userStorage&&await at(this.userStorage,this.storageKey+"-user");const x={data:null,error:new Dy};return this.refreshingDeferred.resolve(x),x}await this._notifyAllSubscribers("TOKEN_REFRESHED",d.session);const v={data:d.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(v),v}catch(c){if(this._debug(o,"error",c),ne(c)){const d={data:null,error:c};if(!Oy(c)){const h=await bn(this.storage,this.storageKey);!!(h!=null&&h.expires_at&&h.expires_at*1e3>Date.now())?this._debug(o,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:d,expiresAt:Date.now()+Qk},(i=this.refreshingDeferred)===null||i===void 0||i.resolve(d),d}throw(r=this.refreshingDeferred)===null||r===void 0||r.reject(c),c}finally{this.refreshingDeferred=null,this._debug(o,"end")}}async _notifyAllSubscribers(e,i,r=!0){const o=`#_notifyAllSubscribers(${e})`;this._debug(o,"begin",i,`broadcast = ${r}`);try{this.broadcastChannel&&r&&this.broadcastChannel.postMessage({event:e,session:i});const c=[],d=Array.from(this.stateChangeEmitters.values()).map(async h=>{try{await h.callback(e,i)}catch(p){c.push(p)}});if(await Promise.all(d),c.length>0){for(let h=0;h<c.length;h+=1)console.error(c[h]);throw c[0]}}finally{this._debug(o,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await at(this.storage,`${this.storageKey}-code-verifier`);const i=Object.assign({},e),r=i.user&&i.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!r&&i.user&&await pr(this.userStorage,this.storageKey+"-user",{user:i.user});const o=Object.assign({},i);delete o.user;const c=By(o);await pr(this.storage,this.storageKey,c)}else{const o=By(i);await pr(this.storage,this.storageKey,o)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await at(this.storage,this.storageKey),await at(this.storage,this.storageKey+"-code-verifier"),await at(this.storage,this.storageKey+"-user"),this.userStorage&&await at(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&_t()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(i){console.error("removing visibilitychange callback failed",i)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),da);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const i=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=i,i&&typeof i=="object"&&typeof i.unref=="function"?i.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(i)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const i=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,i&&clearTimeout(i)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async i=>{const{data:{session:r}}=i;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/da);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${da}ms, refresh threshold is ${Rs} ticks`),o<=Rs&&await this._callRefreshToken(r.refresh_token)})}catch(i){console.error("Auto refresh tick failed with error. This is likely a transient error.",i)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof U_)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async i=>{const{data:{session:r}}=i;if(!r||!r.refresh_token||!r.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const o=Math.floor((r.expires_at*1e3-e)/da);this._debug("#_autoRefreshTokenTick()",`access token expires in ${o} ticks, a tick lasts ${da}ms, refresh threshold is ${Rs} ticks`),o<=Rs&&await this._callRefreshToken(r.refresh_token)})}catch(i){console.error("Auto refresh tick failed with error. This is likely a transient error.",i)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!_t()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const i=`#_onVisibilityChanged(${e})`;if(this._debug(i,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(i,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(i,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,i,r){const o=[`provider=${encodeURIComponent(i)}`];if(r!=null&&r.redirectTo&&o.push(`redirect_to=${encodeURIComponent(r.redirectTo)}`),r!=null&&r.scopes&&o.push(`scopes=${encodeURIComponent(r.scopes)}`),this.flowType==="pkce"){const[c,d]=await di(this.storage,this.storageKey),h=new URLSearchParams({code_challenge:`${encodeURIComponent(c)}`,code_challenge_method:`${encodeURIComponent(d)}`});o.push(h.toString())}if(r!=null&&r.queryParams){const c=new URLSearchParams(r.queryParams);o.push(c.toString())}return r!=null&&r.skipBrowserRedirect&&o.push(`skip_http_redirect=${r.skipBrowserRedirect}`),`${e}?${o.join("&")}`}async _unenroll(e){try{return await this._useSession(async i=>{var r;const{data:o,error:c}=i;return c?this._returnResult({data:null,error:c}):await le(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(r=o==null?void 0:o.session)===null||r===void 0?void 0:r.access_token})})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _enroll(e){try{return await this._useSession(async i=>{var r,o;const{data:c,error:d}=i;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:p,error:g}=await le(this.fetch,"POST",`${this.url}/factors`,{body:h,headers:this.headers,jwt:(r=c==null?void 0:c.session)===null||r===void 0?void 0:r.access_token});return g?this._returnResult({data:null,error:g}):(e.factorType==="totp"&&p.type==="totp"&&(!((o=p==null?void 0:p.totp)===null||o===void 0)&&o.qr_code)&&(p.totp.qr_code=`data:image/svg+xml;utf-8,${p.totp.qr_code}`),this._returnResult({data:p,error:null}))})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _verify(e){const i=async()=>{try{return await this._useSession(async r=>{var o;const{data:c,error:d}=r;if(d)return this._returnResult({data:null,error:d});const h=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?Fy(e.webauthn.credential_response):Gy(e.webauthn.credential_response)})}:{code:e.code}),{data:p,error:g}=await le(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:h,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});return g?this._returnResult({data:null,error:g}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+p.expires_in},p)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",p),this._returnResult({data:p,error:g}))})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,i):i()}async _challenge(e){const i=async()=>{try{return await this._useSession(async r=>{var o;const{data:c,error:d}=r;if(d)return this._returnResult({data:null,error:d});const h=await le(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(o=c==null?void 0:c.session)===null||o===void 0?void 0:o.access_token});if(h.error)return h;const{data:p}=h;if(p.type!=="webauthn")return{data:p,error:null};switch(p.webauthn.type){case"create":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:Iy(p.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},p),{webauthn:Object.assign(Object.assign({},p.webauthn),{credential_options:Object.assign(Object.assign({},p.webauthn.credential_options),{publicKey:qy(p.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,i):i()}async _challengeAndVerify(e){const{data:i,error:r}=await this._challenge({factorId:e.factorId});return r?this._returnResult({data:null,error:r}):await this._verify({factorId:e.factorId,challengeId:i.id,code:e.code})}async _listFactors(){var e;const{data:{user:i},error:r}=await this.getUser();if(r)return{data:null,error:r};const o={all:[],phone:[],totp:[],webauthn:[]};for(const c of(e=i==null?void 0:i.factors)!==null&&e!==void 0?e:[])o.all.push(c),c.status==="verified"&&o[c.factor_type].push(c);return{data:o,error:null}}async _getAuthenticatorAssuranceLevel(e){var i,r,o,c;if(e)try{const{payload:w}=Ol(e);let S=null;w.aal&&(S=w.aal);let _=S;const{data:{user:E},error:T}=await this.getUser(e);if(T)return this._returnResult({data:null,error:T});((r=(i=E==null?void 0:E.factors)===null||i===void 0?void 0:i.filter(L=>L.status==="verified"))!==null&&r!==void 0?r:[]).length>0&&(_="aal2");const R=w.amr||[];return{data:{currentLevel:S,nextLevel:_,currentAuthenticationMethods:R},error:null}}catch(w){if(ne(w))return this._returnResult({data:null,error:w});throw w}const{data:{session:d},error:h}=await this.getSession();if(h)return this._returnResult({data:null,error:h});if(!d)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:p}=Ol(d.access_token);let g=null;p.aal&&(g=p.aal);let y=g;((c=(o=d.user.factors)===null||o===void 0?void 0:o.filter(w=>w.status==="verified"))!==null&&c!==void 0?c:[]).length>0&&(y="aal2");const x=p.amr||[];return{data:{currentLevel:g,nextLevel:y,currentAuthenticationMethods:x},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async i=>{const{data:{session:r},error:o}=i;return o?this._returnResult({data:null,error:o}):r?await le(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:r.access_token,xform:c=>({data:c,error:null})}):this._returnResult({data:null,error:new mt})})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _approveAuthorization(e,i){try{return await this._useSession(async r=>{const{data:{session:o},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new mt});const d=await le(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"approve"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&_t()&&!(i!=null&&i.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async _denyAuthorization(e,i){try{return await this._useSession(async r=>{const{data:{session:o},error:c}=r;if(c)return this._returnResult({data:null,error:c});if(!o)return this._returnResult({data:null,error:new mt});const d=await le(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:o.access_token,body:{action:"deny"},xform:h=>({data:h,error:null})});return d.data&&d.data.redirect_url&&_t()&&!(i!=null&&i.skipBrowserRedirect)&&window.location.assign(d.data.redirect_url),d})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:i},error:r}=e;return r?this._returnResult({data:null,error:r}):i?await le(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,xform:o=>({data:o,error:null})}):this._returnResult({data:null,error:new mt})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async i=>{const{data:{session:r},error:o}=i;return o?this._returnResult({data:null,error:o}):r?(await le(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new mt})})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async fetchJwk(e,i={keys:[]}){let r=i.keys.find(h=>h.kid===e);if(r)return r;const o=Date.now();if(r=this.jwks.keys.find(h=>h.kid===e),r&&this.jwks_cached_at+a_>o)return r;const{data:c,error:d}=await le(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(d)throw d;return!c.keys||c.keys.length===0||(this.jwks=c,this.jwks_cached_at=o,r=c.keys.find(h=>h.kid===e),!r)?null:r}async getClaims(e,i={}){try{let r=e;if(!r){const{data:w,error:S}=await this.getSession();if(S||!w.session)return this._returnResult({data:null,error:S});r=w.session.access_token}const{header:o,payload:c,signature:d,raw:{header:h,payload:p}}=Ol(r);if(!(i!=null&&i.allowExpired))try{T_(c.exp)}catch(w){throw new Zl(w instanceof Error?w.message:"JWT validation failed")}const g=!o.alg||o.alg.startsWith("HS")||!o.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(o.kid,i!=null&&i.keys?{keys:i.keys}:i==null?void 0:i.jwks);if(!g){const{error:w}=await this.getUser(r);if(w)throw w;return{data:{claims:c,header:o,signature:d},error:null}}const y=E_(o.alg),v=await crypto.subtle.importKey("jwk",g,y,!0,["verify"]);if(!await crypto.subtle.verify(y,v,d,f_(`${h}.${p}`)))throw new Zl("Invalid JWT signature");return{data:{claims:c,header:o,signature:d},error:null}}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async signInWithPasskey(e){var i,r,o;wn(this.experimental);try{if(!nc())return this._returnResult({data:null,error:new kn("Browser does not support WebAuthn",null)});const{data:c,error:d}=await this._startPasskeyAuthentication({options:{captchaToken:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}});if(d||!c)return this._returnResult({data:null,error:d});const h=qy(c.options),p=(o=(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.signal)!==null&&o!==void 0?o:Bh.createNewAbortSignal(),{data:g,error:y}=await xx({publicKey:h,signal:p});if(y||!g)return this._returnResult({data:null,error:y??new kn("WebAuthn ceremony failed",null)});const v=Gy(g);return this._verifyPasskeyAuthentication({challengeId:c.challenge_id,credential:v})}catch(c){if(ne(c))return this._returnResult({data:null,error:c});throw c}}async registerPasskey(e){var i,r;wn(this.experimental);try{if(!nc())return this._returnResult({data:null,error:new kn("Browser does not support WebAuthn",null)});const{data:o,error:c}=await this._startPasskeyRegistration();if(c||!o)return this._returnResult({data:null,error:c});const d=Iy(o.options),h=(r=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.signal)!==null&&r!==void 0?r:Bh.createNewAbortSignal(),{data:p,error:g}=await bx({publicKey:d,signal:h});if(g||!p)return this._returnResult({data:null,error:g??new kn("WebAuthn ceremony failed",null)});const y=Fy(p);return this._verifyPasskeyRegistration({challengeId:o.challenge_id,credential:y})}catch(o){if(ne(o))return this._returnResult({data:null,error:o});throw o}}async _startPasskeyRegistration(){wn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:i},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new mt});const{data:o,error:c}=await le(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:i.access_token,body:{}});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){wn(this.experimental);try{return await this._useSession(async i=>{const{data:{session:r},error:o}=i;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new mt});const{data:c,error:d}=await le(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:r.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _startPasskeyAuthentication(e){var i;wn(this.experimental);try{const{data:r,error:o}=await le(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.captchaToken}}});return o?this._returnResult({data:null,error:o}):this._returnResult({data:r,error:null})}catch(r){if(ne(r))return this._returnResult({data:null,error:r});throw r}}async _verifyPasskeyAuthentication(e){wn(this.experimental);try{const{data:i,error:r}=await le(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:dn});return r?this._returnResult({data:null,error:r}):(i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:i,error:null}))}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _listPasskeys(){wn(this.experimental);try{return await this._useSession(async e=>{const{data:{session:i},error:r}=e;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new mt});const{data:o,error:c}=await le(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:i.access_token,xform:d=>({data:d,error:null})});return c?this._returnResult({data:null,error:c}):this._returnResult({data:o,error:null})})}catch(e){if(ne(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){wn(this.experimental);try{return await this._useSession(async i=>{const{data:{session:r},error:o}=i;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new mt});const{data:c,error:d}=await le(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,body:{friendly_name:e.friendlyName}});return d?this._returnResult({data:null,error:d}):this._returnResult({data:c,error:null})})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}async _deletePasskey(e){wn(this.experimental);try{return await this._useSession(async i=>{const{data:{session:r},error:o}=i;if(o)return this._returnResult({data:null,error:o});if(!r)return this._returnResult({data:null,error:new mt});const{error:c}=await le(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:r.access_token,noResolveJson:!0});return c?this._returnResult({data:null,error:c}):this._returnResult({data:null,error:null})})}catch(i){if(ne(i))return this._returnResult({data:null,error:i});throw i}}}Ks.nextInstanceID={};const J_=Ks,Q_="2.108.2";let Os="",ic;if(typeof Deno<"u"){var nh;Os="deno",ic=(nh=Deno.version)===null||nh===void 0?void 0:nh.deno}else if(typeof document<"u")Os="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Os="react-native";else{var ah;Os="node",ic=typeof process<"u"?(ah=process.version)===null||ah===void 0?void 0:ah.replace(/^v/,""):void 0}const wx=[`runtime=${Os}`];ic&&wx.push(`runtime-version=${ic}`);const Z_={"X-Client-Info":`supabase-js/${Q_}; ${wx.join("; ")}`},eT={headers:Z_},tT={schema:"public"},nT={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},aT={},iT={enabled:!1,respectSamplingDecision:!0};function rT(t,e,i,r){function o(c){return c instanceof i?c:new i(function(d){d(c)})}return new(i||(i=Promise))(function(c,d){function h(y){try{g(r.next(y))}catch(v){d(v)}}function p(y){try{g(r.throw(y))}catch(v){d(v)}}function g(y){y.done?c(y.value):o(y.value).then(h,p)}g((r=r.apply(t,[])).next())})}let ih=null;const sT="@opentelemetry/api";function oT(){return ih===null&&(ih=import(sT).catch(()=>null)),ih}function lT(){return rT(this,void 0,void 0,function*(){try{const t=yield oT();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const i=e.traceparent;return i?{traceparent:i,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function cT(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[i,r,o,c]=e;if(i.length!==2||r.length!==32||o.length!==16||c.length!==2)return null;const d=/^[0-9a-f]+$/i;return!d.test(i)||!d.test(r)||!d.test(o)||!d.test(c)||r==="00000000000000000000000000000000"||o==="0000000000000000"?null:{version:i,traceId:r,parentId:o,traceFlags:c,isSampled:(parseInt(c,16)&1)===1}}function uT(t,e){if(!t||!e||e.length===0)return!1;let i;if(t instanceof URL)i=t;else try{i=new URL(t)}catch{return!1}for(const r of e)try{if(typeof r=="string"){if(dT(i.hostname,r))return!0}else if(r instanceof RegExp){if(r.test(i.hostname))return!0}else if(typeof r=="function"&&r(i))return!0}catch{continue}return!1}function dT(t,e){if(e===t)return!0;if(e.startsWith("*.")){const i=e.slice(2);if(t.endsWith(i)&&(t===i||t.endsWith("."+i)))return!0}return!1}function hT(t){const e=[];try{const i=new URL(t);e.push(i.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Ys(t){"@babel/helpers - typeof";return Ys=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ys(t)}function fT(t,e){if(Ys(t)!="object"||!t)return t;var i=t[Symbol.toPrimitive];if(i!==void 0){var r=i.call(t,e);if(Ys(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function pT(t){var e=fT(t,"string");return Ys(e)=="symbol"?e:e+""}function mT(t,e,i){return(e=pT(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function Ky(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(t,o).enumerable})),i.push.apply(i,r)}return i}function Ze(t){for(var e=1;e<arguments.length;e++){var i=arguments[e]!=null?arguments[e]:{};e%2?Ky(Object(i),!0).forEach(function(r){mT(t,r,i[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):Ky(Object(i)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(i,r))})}return t}const gT=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),yT=()=>Headers,vT=(t,e,i,r,o)=>{const c=gT(r),d=yT(),h=(o==null?void 0:o.enabled)===!0,p=(o==null?void 0:o.respectSamplingDecision)!==!1,g=h?hT(e):null;return async(y,v)=>{var x;const w=(x=await i())!==null&&x!==void 0?x:t;let S=new d(v==null?void 0:v.headers);if(S.has("apikey")||S.set("apikey",t),S.has("Authorization")||S.set("Authorization",`Bearer ${w}`),g){const _=await bT(y,g,p);_&&(_.traceparent&&!S.has("traceparent")&&S.set("traceparent",_.traceparent),_.tracestate&&!S.has("tracestate")&&S.set("tracestate",_.tracestate),_.baggage&&!S.has("baggage")&&S.set("baggage",_.baggage))}return c(y,Ze(Ze({},v),{},{headers:S}))}};async function bT(t,e,i){if(!uT(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=await lT();if(!r||!r.traceparent)return null;if(i){const o=cT(r.traceparent);if(o&&!o.isSampled)return null}return r}function Yy(t){return typeof t=="boolean"?{enabled:t}:t}function xT(t){return t.endsWith("/")?t:t+"/"}function wT(t,e){var i,r,o,c,d,h;const{db:p,auth:g,realtime:y,global:v}=t,{db:x,auth:w,realtime:S,global:_}=e,E=Yy(t.tracePropagation),T=Yy(e.tracePropagation),O={db:Ze(Ze({},x),p),auth:Ze(Ze({},w),g),realtime:Ze(Ze({},S),y),storage:{},global:Ze(Ze(Ze({},_),v),{},{headers:Ze(Ze({},(i=_==null?void 0:_.headers)!==null&&i!==void 0?i:{}),(r=v==null?void 0:v.headers)!==null&&r!==void 0?r:{})}),tracePropagation:{enabled:(o=(c=E==null?void 0:E.enabled)!==null&&c!==void 0?c:T==null?void 0:T.enabled)!==null&&o!==void 0?o:!1,respectSamplingDecision:(d=(h=E==null?void 0:E.respectSamplingDecision)!==null&&h!==void 0?h:T==null?void 0:T.respectSamplingDecision)!==null&&d!==void 0?d:!0},accessToken:async()=>""};return t.accessToken?O.accessToken=t.accessToken:delete O.accessToken,O}function ST(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(xT(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var jT=class extends J_{constructor(t){super(t)}},kT=class{constructor(t,e,i){var r,o;this.supabaseUrl=t,this.supabaseKey=e;const c=ST(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",c),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",c),this.storageUrl=new URL("storage/v1",c),this.functionsUrl=new URL("functions/v1",c);const d=`sb-${c.hostname.split(".")[0]}-auth-token`,h={db:tT,realtime:aT,auth:Ze(Ze({},nT),{},{storageKey:d}),global:eT,tracePropagation:iT},p=wT(i??{},h);if(this.settings=p,this.storageKey=(r=p.auth.storageKey)!==null&&r!==void 0?r:"",this.headers=(o=p.global.headers)!==null&&o!==void 0?o:{},p.accessToken)this.accessToken=p.accessToken,this.auth=new Proxy({},{get:(y,v)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(v)} is not possible`)}});else{var g;this.auth=this._initSupabaseAuthClient((g=p.auth)!==null&&g!==void 0?g:{},this.headers,p.global.fetch)}this.fetch=vT(e,t,this._getAccessToken.bind(this),p.global.fetch,p.tracePropagation),this.realtime=this._initRealtimeClient(Ze({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},p.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(y=>this.realtime.setAuth(y)).catch(y=>console.warn("Failed to set initial Realtime auth token:",y)),this.rest=new Bj(new URL("rest/v1",c).href,{headers:this.headers,schema:p.db.schema,fetch:this.fetch,timeout:p.db.timeout,urlLengthLimit:p.db.urlLengthLimit}),this.storage=new Jk(this.storageUrl.href,this.headers,this.fetch,i==null?void 0:i.storage),p.accessToken||this._listenForAuthEvents()}get functions(){return new Aj(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},i={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,i)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,i;if(t.accessToken)return await t.accessToken();const{data:r}=await t.auth.getSession();return(e=(i=r.session)===null||i===void 0?void 0:i.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:i,storage:r,userStorage:o,storageKey:c,flowType:d,lock:h,debug:p,throwOnError:g,experimental:y,lockAcquireTimeout:v,skipAutoInitialize:x},w,S){const _={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new jT({url:this.authUrl.href,headers:Ze(Ze({},_),w),storageKey:c,autoRefreshToken:t,persistSession:e,detectSessionInUrl:i,storage:r,userStorage:o,flowType:d,lock:h,debug:p,throwOnError:g,experimental:y,fetch:S,lockAcquireTimeout:v,skipAutoInitialize:x,hasCustomAuthorizationHeader:Object.keys(this.headers).some(E=>E.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new xk(this.realtimeUrl.href,Ze(Ze({},t),{},{params:Ze(Ze({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,i){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==i?(this.changedAccessToken=i,this.realtime.setAuth(i)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const _T=(t,e,i)=>new kT(t,e,i);function TT(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const i=e.match(/^v(\d+)\./);return i?parseInt(i[1],10)<=18:!1}TT()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const ET="https://nestgoiyryhcmwtdeoou.supabase.co",CT="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lc3Rnb2l5cnloY213dGRlb291Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxNjI3MTUsImV4cCI6MjA5NzczODcxNX0.TJv9KqIl-2TZFsaEB3Lr0TzWKGR9GG1pE6abmr1FwYw",de=_T(ET,CT),Xy=t=>{let e;const i=new Set,r=(g,y)=>{const v=typeof g=="function"?g(e):g;if(!Object.is(v,e)){const x=e;e=y??(typeof v!="object"||v===null)?v:Object.assign({},e,v),i.forEach(w=>w(e,x))}},o=()=>e,h={setState:r,getState:o,getInitialState:()=>p,subscribe:g=>(i.add(g),()=>i.delete(g))},p=e=t(r,o,h);return h},AT=(t=>t?Xy(t):Xy),NT=t=>t;function RT(t,e=NT){const i=As.useSyncExternalStore(t.subscribe,As.useCallback(()=>e(t.getState()),[t,e]),As.useCallback(()=>e(t.getInitialState()),[t,e]));return As.useDebugValue(i),i}const Wy=t=>{const e=AT(t),i=r=>RT(e,r);return Object.assign(i,e),i},Si=(t=>t?Wy(t):Wy),At=Si((t,e)=>({user:null,session:null,profile:null,isLoading:!0,error:null,initialize:async()=>{try{const{data:{session:i},error:r}=await de.auth.getSession();if(r)throw r;if(i){const{data:o}=await de.from("profiles").select("*").eq("id",i.user.id).single();t({user:i.user,session:i,profile:o||null,isLoading:!1})}else t({user:null,session:null,profile:null,isLoading:!1});de.auth.onAuthStateChange(async(o,c)=>{if(c){const{data:d}=await de.from("profiles").select("*").eq("id",c.user.id).single();t({user:c.user,session:c,profile:d||null})}else t({user:null,session:null,profile:null})})}catch(i){t({isLoading:!1,error:i.message})}},signIn:async(i,r)=>{const{data:o,error:c}=await de.auth.signInWithPassword({email:i,password:r});if(c)throw c;return o},signUp:async(i,r,o={})=>{const{data:c,error:d}=await de.auth.signUp({email:i,password:r,options:{data:o}});if(d)throw d;return c},signOut:async()=>{const{error:i}=await de.auth.signOut();if(i)throw i;t({user:null,session:null,profile:null})},updateProfile:async i=>{const{user:r}=e();if(!r)throw new Error("Not authenticated");const{data:o,error:c}=await de.from("profiles").update(i).eq("id",r.id).select().single();if(c)throw c;return t({profile:o}),o}}));function OT(){const t=mn(),{signIn:e,signUp:i}=At(),[r,o]=k.useState(!1),[c,d]=k.useState(""),[h,p]=k.useState(""),[g,y]=k.useState(""),[v,x]=k.useState(!1),[w,S]=k.useState(null);k.useEffect(()=>{document.title=r?"Sign Up | FrameX":"Log In | FrameX"},[r]);const _=async T=>{T.preventDefault(),x(!0),S(null);try{r?(await i(c,h,{username:g||c.split("@")[0]}),alert("Check your email for the confirmation link!"),o(!1)):(await e(c,h),t("/home"))}catch(O){S(O.message)}finally{x(!1)}},E=async T=>{try{await de.auth.signInWithOAuth({provider:T})}catch(O){S(O.message)}};return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:"aurora-bg"}),u.jsx(wf,{}),u.jsx("section",{className:"auth-section",children:u.jsxs("div",{className:"auth-glass",children:[u.jsxs("div",{className:"auth-header",children:[u.jsx("span",{className:"section-label",children:r?"Get Started":"Welcome Back"}),u.jsx("h1",{children:r?"Sign Up":"Log In"}),u.jsx("p",{children:r?"Create your FrameX account":"Sign in to continue to FrameX"})]}),w&&u.jsx("div",{className:"auth-error",children:w}),u.jsxs("form",{className:"auth-form",onSubmit:_,children:[r&&u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"username",children:[u.jsx("i",{className:"fas fa-user"})," Username"]}),u.jsx("input",{id:"username",type:"text",placeholder:"yourname",value:g,onChange:T=>y(T.target.value)})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"email",children:[u.jsx("i",{className:"fas fa-envelope"})," Email"]}),u.jsx("input",{id:"email",type:"email",placeholder:"you@example.com",value:c,onChange:T=>d(T.target.value),required:!0})]}),u.jsxs("div",{className:"form-group",children:[u.jsxs("label",{htmlFor:"password",children:[u.jsx("i",{className:"fas fa-lock"})," Password"]}),u.jsx("input",{id:"password",type:"password",placeholder:r?"Create a password":"Enter your password",value:h,onChange:T=>p(T.target.value),required:!0,minLength:6})]}),u.jsx("button",{type:"submit",className:"btn-primary auth-submit",disabled:v,children:v?u.jsxs("span",{children:[u.jsx("i",{className:"fas fa-spinner fa-spin"})," ",r?"Creating account...":"Signing in..."]}):u.jsxs("span",{children:[r?"Create Account":"Sign In"," ",u.jsx("i",{className:"fas fa-arrow-right"})]})})]}),u.jsx("div",{className:"auth-divider",children:u.jsx("span",{children:"or continue with"})}),u.jsxs("div",{className:"social-auth",children:[u.jsxs("button",{className:"social-auth-btn",onClick:()=>E("google"),children:[u.jsx("i",{className:"fab fa-google"})," Google"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>E("apple"),children:[u.jsx("i",{className:"fab fa-apple"})," Apple"]}),u.jsxs("button",{className:"social-auth-btn",onClick:()=>E("github"),children:[u.jsx("i",{className:"fab fa-github"})," GitHub"]})]}),u.jsx("p",{className:"auth-footer-text",children:r?u.jsxs(u.Fragment,{children:["Already have an account? ",u.jsx("a",{href:"#",onClick:T=>{T.preventDefault(),o(!1),S(null)},children:"Log In"})]}):u.jsxs(u.Fragment,{children:["Don't have an account? ",u.jsx("a",{href:"#",onClick:T=>{T.preventDefault(),o(!0),S(null)},children:"Sign Up"})]})})]})}),u.jsx(Sf,{}),u.jsx("style",{children:`
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
      `})]})}const it={menu:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"21",y2:"18"})]}),search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z"}),u.jsx("polyline",{points:"13 2 13 9 20 9"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),close:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),attachment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48"})}),emoji:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M8 14s1.5 2 4 2 4-2 4-2"}),u.jsx("line",{x1:"9",y1:"9",x2:"9.01",y2:"9"}),u.jsx("line",{x1:"15",y1:"9",x2:"15.01",y2:"9"})]}),mic:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z"}),u.jsx("path",{d:"M19 10v2a7 7 0 01-14 0v-2"}),u.jsx("line",{x1:"12",y1:"19",x2:"12",y2:"22"})]}),send:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),u.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"17 6 7 16 2 11"}),u.jsx("polyline",{points:"22 6 12 16 9 13"})]}),reply:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 17 4 12 9 7"}),u.jsx("path",{d:"M20 18v-2a4 4 0 00-4-4H4"})]}),logo:"F"},dr=[{id:1,name:"Your Story",avatar:"",online:!0,unread:!1,isOwn:!0,stories:[{id:101,type:"gradient",gradient:"linear-gradient(135deg, #C6FF00, #00E5FF)",duration:5e3}]},{id:2,name:"Luna",avatar:"",online:!0,unread:!0,stories:[{id:201,type:"gradient",gradient:"linear-gradient(135deg, #f093fb, #f5576c)",duration:5e3},{id:202,type:"gradient",gradient:"linear-gradient(135deg, #4facfe, #00f2fe)",duration:4e3}]},{id:3,name:"Marcus",avatar:"",online:!0,unread:!0,stories:[{id:301,type:"gradient",gradient:"linear-gradient(135deg, #a18cd1, #fbc2eb)",duration:5e3}]},{id:4,name:"Sofia",avatar:"",online:!1,unread:!1,stories:[{id:401,type:"gradient",gradient:"linear-gradient(135deg, #fccb90, #d57eeb)",duration:4e3}]},{id:5,name:"Kai",avatar:"",online:!0,unread:!0,stories:[{id:501,type:"gradient",gradient:"linear-gradient(135deg, #667eea, #764ba2)",duration:5e3}]},{id:6,name:"Zara",avatar:"",online:!1,unread:!1,stories:[{id:601,type:"gradient",gradient:"linear-gradient(135deg, #89f7fe, #66a6ff)",duration:4e3}]},{id:7,name:"Jules",avatar:"",online:!0,unread:!0,stories:[{id:701,type:"gradient",gradient:"linear-gradient(135deg, #f43b47, #453a94)",duration:5e3}]}];function DT({stories:t,userIndex:e,storyIndex:i,onClose:r,onNext:o,onPrev:c}){const d=t[e];if(!d||!d.stories[i])return null;const h=d.stories[i];(i+1)/d.stories.length*100;const p=g=>(g==null?void 0:g.split(" ").map(y=>y[0]).join("").toUpperCase().slice(0,2))||"?";return u.jsx("div",{className:"story-viewer-overlay",onClick:r,children:u.jsxs("div",{className:"story-viewer",onClick:g=>g.stopPropagation(),children:[u.jsxs("div",{className:"story-viewer-header",children:[u.jsx("div",{className:"story-viewer-progress",children:d.stories.map((g,y)=>u.jsx("div",{className:`story-progress-bar ${y<=i?"active":""} ${y===i?"animating":""}`},y))}),u.jsxs("div",{className:"story-viewer-user",children:[u.jsx("div",{className:"story-viewer-avatar",style:{background:d.gradient||"rgba(255,255,255,0.1)"},children:d.avatar?u.jsx("img",{src:d.avatar,alt:""}):u.jsx("span",{children:p(d.name)})}),u.jsx("span",{className:"story-viewer-name",children:d.name}),u.jsx("span",{className:"story-viewer-time",children:"Just now"})]}),u.jsx("button",{className:"story-viewer-close",onClick:r,children:it.close})]}),u.jsx("div",{className:"story-viewer-content",style:{background:h.gradient||"#1a1a2e"},children:u.jsxs("div",{className:"story-viewer-text",children:[d.name,"'s Story"]})}),u.jsxs("div",{className:"story-viewer-tap-areas",children:[u.jsx("div",{className:"story-tap-left",onClick:g=>{g.stopPropagation(),c()}}),u.jsx("div",{className:"story-tap-right",onClick:g=>{g.stopPropagation(),o()}})]})]})})}function MT({users:t}){if(!t||t.length===0)return null;const e=t.length===1?`${t[0]} is typing...`:`${t.length} people are typing...`;return u.jsxs("div",{className:"typing-indicator",children:[u.jsxs("div",{className:"typing-dots",children:[u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"}),u.jsx("span",{className:"typing-dot"})]}),u.jsx("span",{className:"typing-label",children:e})]})}function LT({date:t}){const e=new Date,i=new Date(t),r=e.toDateString()===i.toDateString(),o=new Date(e);o.setDate(o.getDate()-1);const c=o.toDateString()===i.toDateString();let d=r?"Today":c?"Yesterday":i.toLocaleDateString("en-US",{month:"long",day:"numeric",year:"numeric"});return u.jsx("div",{className:"date-divider",children:u.jsx("span",{children:d})})}const Jy=`
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
`;function zT(){var ye,pe;const t=mn(),[e,i]=k.useState(null),[r,o]=k.useState(!0),[c,d]=k.useState(null),[h,p]=k.useState(""),[g,y]=k.useState([]),[v,x]=k.useState([]),[w,S]=k.useState(!1),[_,E]=k.useState(!1),[T,O]=k.useState(0),[R,L]=k.useState(0),[K,W]=k.useState([]),[F,Y]=k.useState(!1),[ee,re]=k.useState([]),[me,fe]=k.useState(!1),Oe=k.useRef(null),Ne=k.useRef(null);k.useEffect(()=>{document.title="Chat — FrameX",(async()=>{try{const{data:{session:te}}=await de.auth.getSession();if(!te){t("/login");return}i(te.user)}catch{console.warn("Auth check failed, running in offline mode"),i({id:"offline",email:"guest@framex.app"})}o(!1)})()},[t]),k.useEffect(()=>{if(!e||e.id==="offline"){x([{id:"general",name:"general",display_name:"# general"},{id:"random",name:"random",display_name:"# random"}]),d({id:"general",name:"general",display_name:"# general"});return}(async()=>{try{const{data:te}=await de.from("channels").select("*").order("name");te&&(x(te),!c&&te.length>0&&d(te[0]))}catch(te){console.warn("Failed to fetch channels:",te),x([{id:"general",name:"general",display_name:"# general"}]),d({id:"general",name:"general",display_name:"# general"})}})()},[e]),k.useEffect(()=>{if(!c)return;(async()=>{try{if((e==null?void 0:e.id)==="offline"){y([{id:"1",content:"Welcome to FrameX Chat! 🎉",user_id:"system",created_at:new Date().toISOString(),profiles:{display_name:"FrameX",username:"framex"}},{id:"2",content:"Select a story to view it. This is a demo environment.",user_id:"system",created_at:new Date(Date.now()-6e4).toISOString(),profiles:{display_name:"FrameX",username:"framex"}}]);return}const{data:te}=await de.from("messages").select("*, profiles(*)").eq("channel_id",c.id).order("created_at",{ascending:!0}).limit(100);te&&y(te)}catch{console.warn("Failed to load messages")}})()},[c,e]),k.useEffect(()=>{if(!c||(e==null?void 0:e.id)==="offline")return;let X;return(async()=>{try{X=de.channel(`messages:${c.id}`).on("postgres_changes",{event:"INSERT",schema:"public",table:"messages",filter:`channel_id=eq.${c.id}`},_e=>{const De=_e.new;De.user_id!==(e==null?void 0:e.id)&&de.from("profiles").select("*").eq("id",De.user_id).single().then(({data:Me})=>{y(jt=>[...jt,{...De,profiles:Me}])}).catch(()=>{y(Me=>[...Me,De])})}).subscribe()}catch{console.warn("Realtime subscription failed")}})(),()=>{X&&de.removeChannel(X)}},[c,e]),k.useEffect(()=>{var X;(X=Oe.current)==null||X.scrollIntoView({behavior:"smooth"})},[g]),k.useEffect(()=>{const X=te=>{te.key==="Escape"&&S(!1)};return window.addEventListener("keydown",X),()=>window.removeEventListener("keydown",X)},[]),k.useEffect(()=>(w?document.body.style.overflow="hidden":document.body.style.overflow="",()=>{document.body.style.overflow=""}),[w]),k.useEffect(()=>{if(!_)return;const X=dr[T];if(!X)return;const te=X.stories[R];if(!te)return;const _e=setTimeout(()=>{ae()},te.duration||5e3);return()=>clearTimeout(_e)},[_,T,R]);const je=k.useCallback(async()=>{if(!(!e||e.id==="offline")){fe(!0);try{const{data:X}=await de.from("follows").select("follower_id").eq("following_id",e.id),{data:te}=await de.from("follows").select("following_id").eq("follower_id",e.id),_e=(X||[]).map(An=>An.follower_id),De=(te||[]).map(An=>An.following_id);if(_e.length===0){re([]),fe(!1);return}const{data:Me}=await de.from("profiles").select("id, username, display_name, avatar_url, bio, is_verified").in("id",_e),jt=(Me||[]).map(An=>({...An,isFriend:De.includes(An.id),isFollower:!0}));re(jt)}catch(X){console.warn("Failed to fetch panel users:",X),re([])}fe(!1)}},[e]);k.useEffect(()=>{F&&je()},[F,je]),k.useEffect(()=>{if(!e||e.id==="offline")return;let X;try{X=de.channel("follows-changes").on("postgres_changes",{event:"*",schema:"public",table:"follows"},()=>{F&&je()}).subscribe()}catch{console.warn("Realtime follows subscription failed")}return()=>{X&&de.removeChannel(X)}},[e,F,je]);const C=k.useCallback(async X=>{if(X==null||X.preventDefault(),!h.trim()||!c)return;const te=h.trim();if(p(""),(e==null?void 0:e.id)==="offline"){y(_e=>[..._e,{id:`msg-${Date.now()}`,content:te,user_id:"offline",created_at:new Date().toISOString(),profiles:{display_name:"You",username:"you"}}]);return}try{const{data:_e}=await de.from("messages").insert({channel_id:c.id,user_id:e.id,content:te}).select("*, profiles(*)").single();_e&&y(De=>[...De,_e])}catch{console.warn("Failed to send message")}},[h,c,e]),I=k.useCallback(async()=>{try{await de.auth.signOut()}catch{}t("/login")},[t]),Z=k.useCallback(X=>{O(X),L(0),E(!0)},[]),H=k.useCallback(()=>{E(!1)},[]),ae=k.useCallback(()=>{const X=dr[T];X&&(R<X.stories.length-1?L(te=>te+1):T<dr.length-1?(O(te=>te+1),L(0)):E(!1))},[T,R]),N=k.useCallback(()=>{var X;R>0?L(te=>te-1):T>0&&(O(te=>te-1),L(((X=dr[T-1])==null?void 0:X.stories.length)-1||0))},[T,R]),V=X=>X&&X.split(" ").map(te=>te[0]).join("").toUpperCase().slice(0,2)||"?",Q=X=>{const te=new Date(X),De=new Date-te,Me=Math.floor(De/6e4),jt=Math.floor(De/36e5);return Me<1?"Now":Me<60?`${Me}m`:jt<24?te.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):te.toLocaleDateString([],{month:"short",day:"numeric"})},ie=g.reduce((X,te,_e)=>{const De=new Date(te.created_at).toDateString(),Me=_e>0?new Date(g[_e-1].created_at).toDateString():null;return De!==Me&&X.push({type:"date",date:te.created_at}),X.push({type:"message",msg:te,isOwn:te.user_id===(e==null?void 0:e.id)}),X},[]);if(r)return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:Jy}),u.jsxs("div",{className:"chat-loading",children:[u.jsx("div",{className:"loading-spinner"}),u.jsx("span",{children:"Loading chat..."})]})]});const ce=(c==null?void 0:c.display_name)||(c==null?void 0:c.name)||"Select a channel",be=((ye=e==null?void 0:e.user_metadata)==null?void 0:ye.full_name)||(e==null?void 0:e.email)||"User",J=V(be);return u.jsxs("div",{className:"chat-page",children:[u.jsx("style",{children:Jy}),u.jsxs("header",{className:"chat-header",children:[u.jsxs("div",{className:"chat-header-left",children:[u.jsx("button",{className:"hamburger-btn",onClick:()=>S(!0),"aria-label":"Open menu",children:it.menu}),u.jsx("button",{className:"header-logo",onClick:()=>t("/"),children:it.logo})]}),u.jsxs("div",{className:"chat-header-center",onClick:()=>{((c==null?void 0:c.name)==="general"||(c==null?void 0:c.display_name)==="# general")&&Y(X=>!X)},style:{cursor:(c==null?void 0:c.name)==="general"?"pointer":"default"},children:[u.jsx("h2",{children:ce}),(c==null?void 0:c.name)==="general"&&u.jsx("svg",{className:"channel-dropdown-arrow",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"14",height:"14",children:u.jsx("polyline",{points:"6 9 12 15 18 9"})})]}),u.jsxs("div",{className:"chat-header-right",children:[u.jsx("button",{className:"header-btn","aria-label":"Search",children:it.search}),u.jsxs("button",{className:"header-btn","aria-label":"Notifications",children:[it.bell,u.jsx("span",{className:"notification-badge"})]}),u.jsx("button",{className:"header-btn chat-new-btn","aria-label":"New chat",children:it.plus})]})]}),F&&u.jsx("div",{className:"user-panel-overlay",onClick:()=>Y(!1)}),u.jsx("div",{className:`user-panel ${F?"user-panel-open":""}`,children:u.jsxs("div",{className:"user-panel-inner",children:[u.jsxs("div",{className:"user-panel-header",children:[u.jsx("h3",{children:"Channel Members"}),u.jsx("button",{className:"user-panel-close-btn",onClick:()=>Y(!1),"aria-label":"Close panel",children:it.close})]}),u.jsx("div",{className:"user-panel-body",children:me?u.jsx("div",{className:"user-panel-loading",children:u.jsx("div",{className:"user-panel-spinner"})}):ee.length===0?u.jsxs("div",{className:"user-panel-empty",children:[u.jsxs("svg",{className:"user-panel-empty-icon",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("line",{x1:"22",y1:"6",x2:"22",y2:"12"}),u.jsx("line",{x1:"19",y1:"9",x2:"25",y2:"9"})]}),u.jsx("p",{children:"You are alone"}),u.jsx("span",{children:"Follow others to see them here"})]}):u.jsx("div",{className:"user-panel-list",children:ee.map(X=>u.jsxs("div",{className:"user-panel-item",onClick:()=>{Y(!1)},children:[u.jsx("div",{className:"user-panel-avatar",children:X.avatar_url?u.jsx("img",{src:X.avatar_url,alt:"",loading:"lazy"}):u.jsx("span",{className:"user-panel-avatar-fallback",children:(X.display_name||X.username||"?")[0].toUpperCase()})}),u.jsxs("div",{className:"user-panel-info",children:[u.jsxs("div",{className:"user-panel-name-row",children:[u.jsx("span",{className:"user-panel-name",children:X.display_name||X.username||"Unknown"}),X.is_verified&&u.jsx("svg",{className:"user-panel-verified",viewBox:"0 0 24 24",fill:"currentColor",width:"14",height:"14",children:u.jsx("path",{d:"M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z"})})]}),u.jsxs("div",{className:"user-panel-handle",children:["@",X.username]})]}),X.isFriend&&u.jsx("span",{className:"user-panel-badge",children:"Friend"})]},X.id))})})]})}),u.jsx("div",{className:`sidebar-overlay ${w?"open":""}`,onClick:()=>S(!1)}),u.jsxs("aside",{className:`chat-sidebar ${w?"open":""}`,children:[u.jsxs("div",{className:"sidebar-profile",children:[u.jsxs("div",{className:"sidebar-avatar",children:[(pe=e==null?void 0:e.user_metadata)!=null&&pe.avatar_url?u.jsx("img",{src:e.user_metadata.avatar_url,alt:""}):J,u.jsx("span",{className:"status-dot"})]}),u.jsxs("div",{className:"sidebar-user-info",children:[u.jsx("div",{className:"sidebar-username",children:be}),u.jsx("div",{className:"sidebar-status",children:"● Online"})]})]}),u.jsxs("nav",{className:"sidebar-nav",children:[u.jsx("div",{className:"sidebar-section-label",children:"Menu"}),u.jsxs("button",{className:"sidebar-nav-item active",onClick:()=>{S(!1),t("/chat")},children:[it.chat,u.jsx("span",{className:"sidebar-nav-label",children:"Chats"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/home")},children:[it.home,u.jsx("span",{className:"sidebar-nav-label",children:"Home"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/communities")},children:[it.communities,u.jsx("span",{className:"sidebar-nav-label",children:"Communities"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/explore")},children:[it.explore,u.jsx("span",{className:"sidebar-nav-label",children:"Explore"})]}),u.jsx("div",{className:"sidebar-section-label",children:"Preferences"}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/notifications")},children:[it.notification,u.jsx("span",{className:"sidebar-nav-label",children:"Notifications"})]}),u.jsxs("button",{className:"sidebar-nav-item",onClick:()=>{S(!1),t("/settings")},children:[it.settings,u.jsx("span",{className:"sidebar-nav-label",children:"Settings"})]})]}),u.jsxs("div",{className:"sidebar-bottom",children:[u.jsxs("button",{className:"sidebar-logout",onClick:I,children:[it.logout,u.jsx("span",{children:"Log Out"})]}),u.jsx("div",{className:"sidebar-version",children:"FrameX v1.0.0"})]})]}),u.jsx("main",{className:"chat-main",children:c?g.length===0?u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"empty-state",children:[u.jsx("div",{className:"empty-state-icon",children:it.chat}),u.jsx("h3",{children:"No messages yet"}),u.jsx("p",{children:"Start the conversation. Send a message to begin chatting."})]})}):u.jsxs("div",{className:"messages-container",children:[ie.map((X,te)=>{var Me,jt;if(X.type==="date")return u.jsx(LT,{date:X.date},`date-${te}`);const{msg:_e,isOwn:De}=X;return u.jsxs("div",{className:`chat-msg-wrapper ${De?"outgoing":"incoming"}`,children:[u.jsxs("div",{className:"chat-msg-bubble",children:[!De&&u.jsx("div",{style:{fontSize:12,fontWeight:600,color:"var(--chat-accent)",marginBottom:2},children:((Me=_e.profiles)==null?void 0:Me.display_name)||((jt=_e.profiles)==null?void 0:jt.username)||"Unknown"}),u.jsx("div",{children:_e.content})]}),u.jsxs("div",{className:"chat-msg-meta",children:[u.jsx("span",{className:"chat-msg-time",children:Q(_e.created_at)}),De&&u.jsx("span",{className:"chat-msg-receipt",children:it.checkAll})]}),u.jsx("div",{style:{display:"flex",gap:6,alignItems:"center"},children:u.jsxs("button",{className:"chat-msg-reply",children:[it.reply," Reply"]})}),u.jsxs("div",{className:"chat-msg-reactions",children:[u.jsx("span",{className:"msg-reaction",children:"❤️"}),u.jsx("span",{className:"msg-reaction",children:"🔥"}),u.jsx("span",{className:"msg-reaction",children:"👍"})]})]},_e.id)}),K.length>0&&u.jsx(MT,{users:K}),u.jsx("div",{ref:Oe})]}):u.jsx("div",{className:"messages-container",children:u.jsxs("div",{className:"channel-selector",children:[u.jsx("h3",{children:"Channels"}),v.map(X=>u.jsxs("button",{className:"channel-item",onClick:()=>d(X),children:[u.jsx("div",{className:"channel-avatar",children:"#"}),u.jsxs("div",{className:"channel-info",children:[u.jsx("div",{className:"channel-name",children:X.display_name||`# ${X.name}`}),u.jsx("div",{className:"channel-preview",children:"Tap to view messages"})]}),u.jsx("div",{className:"channel-meta"})]},X.id))]})})}),u.jsx("div",{className:"chat-composer-wrapper",children:u.jsxs("form",{className:"chat-composer",onSubmit:C,children:[u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Attach file",children:it.attachment}),u.jsx("input",{ref:Ne,className:"composer-input",type:"text",placeholder:c?`Message ${c.display_name||c.name||"channel"}...`:"Select a channel to start chatting",value:h,onChange:X=>p(X.target.value),disabled:!c,"aria-label":"Message input"}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Add emoji",children:it.emoji}),u.jsx("button",{type:"button",className:"composer-btn","aria-label":"Voice message",children:it.mic}),u.jsx("button",{type:"submit",className:"composer-btn send-btn",disabled:!h.trim()||!c,"aria-label":"Send message",children:it.send})]})}),u.jsx("div",{className:"stories-rail-wrapper",children:u.jsx("div",{className:"stories-rail",children:dr.map((X,te)=>u.jsxs("div",{className:"story-avatar-wrapper",style:{"--story-index":te},onClick:()=>Z(te),children:[u.jsx("div",{className:`story-avatar-ring ${X.unread?"unread":"seen"}`,children:u.jsxs("div",{className:"story-avatar-inner",children:[X.avatar?u.jsx("img",{src:X.avatar,alt:""}):V(X.name),X.online&&u.jsx("span",{className:"story-online-dot"})]})}),u.jsx("span",{className:"story-avatar-name",children:X.name})]},X.id))})}),_&&u.jsx(DT,{stories:dr,userIndex:T,storyIndex:R,onClose:H,onNext:ae,onPrev:N})]})}const _f=k.createContext({});function Tf(t){const e=k.useRef(null);return e.current===null&&(e.current=t()),e.current}const UT=typeof window<"u",Sx=UT?k.useLayoutEffect:k.useEffect,kc=k.createContext(null);function Ef(t,e){t.indexOf(e)===-1&&t.push(e)}function rc(t,e){const i=t.indexOf(e);i>-1&&t.splice(i,1)}const Vn=(t,e,i)=>i>e?e:i<t?t:i;let Cf=()=>{};const Ia={},jx=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t),kx=t=>typeof t=="object"&&t!==null,_x=t=>/^0[^.\s]+$/u.test(t);function Tx(t){let e;return()=>(e===void 0&&(e=t()),e)}const fn=t=>t,no=(...t)=>t.reduce((e,i)=>r=>i(e(r))),Xs=(t,e,i)=>{const r=e-t;return r?(i-t)/r:1};class Af{constructor(){this.subscriptions=[]}add(e){return Ef(this.subscriptions,e),()=>rc(this.subscriptions,e)}notify(e,i,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,i,r);else for(let c=0;c<o;c++){const d=this.subscriptions[c];d&&d(e,i,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Qt=t=>t*1e3,hn=t=>t/1e3,Ex=(t,e)=>e?t*(1e3/e):0,Cx=(t,e,i)=>(((1-3*i+3*e)*t+(3*i-6*e))*t+3*e)*t,BT=1e-7,PT=12;function VT(t,e,i,r,o){let c,d,h=0;do d=e+(i-e)/2,c=Cx(d,r,o)-t,c>0?i=d:e=d;while(Math.abs(c)>BT&&++h<PT);return d}function ao(t,e,i,r){if(t===e&&i===r)return fn;const o=c=>VT(c,0,1,t,i);return c=>c===0||c===1?c:Cx(o(c),e,r)}const Ax=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Nx=t=>e=>1-t(1-e),Rx=ao(.33,1.53,.69,.99),Nf=Nx(Rx),Ox=Ax(Nf),Dx=t=>t>=1?1:(t*=2)<1?.5*Nf(t):.5*(2-Math.pow(2,-10*(t-1))),Rf=t=>1-Math.sin(Math.acos(t)),Mx=Nx(Rf),Lx=Ax(Rf),HT=ao(.42,0,1,1),$T=ao(0,0,.58,1),zx=ao(.42,0,.58,1),IT=t=>Array.isArray(t)&&typeof t[0]!="number",Ux=t=>Array.isArray(t)&&typeof t[0]=="number",qT={linear:fn,easeIn:HT,easeInOut:zx,easeOut:$T,circIn:Rf,circInOut:Lx,circOut:Mx,backIn:Nf,backInOut:Ox,backOut:Rx,anticipate:Dx},FT=t=>typeof t=="string",Qy=t=>{if(Ux(t)){Cf(t.length===4);const[e,i,r,o]=t;return ao(e,i,r,o)}else if(FT(t))return qT[t];return t},Dl=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function GT(t,e){let i=new Set,r=new Set,o=!1,c=!1;const d=new WeakSet;let h={delta:0,timestamp:0,isProcessing:!1};function p(y){d.has(y)&&(g.schedule(y),t()),y(h)}const g={schedule:(y,v=!1,x=!1)=>{const S=x&&o?i:r;return v&&d.add(y),S.add(y),y},cancel:y=>{r.delete(y),d.delete(y)},process:y=>{if(h=y,o){c=!0;return}o=!0;const v=i;i=r,r=v,i.forEach(p),i.clear(),o=!1,c&&(c=!1,g.process(y))}};return g}const KT=40;function Bx(t,e){let i=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},c=()=>i=!0,d=Dl.reduce((R,L)=>(R[L]=GT(c),R),{}),{setup:h,read:p,resolveKeyframes:g,preUpdate:y,update:v,preRender:x,render:w,postRender:S}=d,_=()=>{const R=Ia.useManualTiming,L=R?o.timestamp:performance.now();i=!1,R||(o.delta=r?1e3/60:Math.max(Math.min(L-o.timestamp,KT),1)),o.timestamp=L,o.isProcessing=!0,h.process(o),p.process(o),g.process(o),y.process(o),v.process(o),x.process(o),w.process(o),S.process(o),o.isProcessing=!1,i&&e&&(r=!1,t(_))},E=()=>{i=!0,r=!0,o.isProcessing||t(_)};return{schedule:Dl.reduce((R,L)=>{const K=d[L];return R[L]=(W,F=!1,Y=!1)=>(i||E(),K.schedule(W,F,Y)),R},{}),cancel:R=>{for(let L=0;L<Dl.length;L++)d[Dl[L]].cancel(R)},state:o,steps:d}}const{schedule:Fe,cancel:qa,state:wt,steps:rh}=Bx(typeof requestAnimationFrame<"u"?requestAnimationFrame:fn,!0);let Hl;function YT(){Hl=void 0}const Et={now:()=>(Hl===void 0&&Et.set(wt.isProcessing||Ia.useManualTiming?wt.timestamp:performance.now()),Hl),set:t=>{Hl=t,queueMicrotask(YT)}},Px=t=>e=>typeof e=="string"&&e.startsWith(t),Vx=Px("--"),XT=Px("var(--"),Of=t=>XT(t)?WT.test(t.split("/*")[0].trim()):!1,WT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function Zy(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Er={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Ws={...Er,transform:t=>Vn(0,1,t)},Ml={...Er,default:1},Us=t=>Math.round(t*1e5)/1e5,Df=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function JT(t){return t==null}const QT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Mf=(t,e)=>i=>!!(typeof i=="string"&&QT.test(i)&&i.startsWith(t)||e&&!JT(i)&&Object.prototype.hasOwnProperty.call(i,e)),Hx=(t,e,i)=>r=>{if(typeof r!="string")return r;const[o,c,d,h]=r.match(Df);return{[t]:parseFloat(o),[e]:parseFloat(c),[i]:parseFloat(d),alpha:h!==void 0?parseFloat(h):1}},ZT=t=>Vn(0,255,t),sh={...Er,transform:t=>Math.round(ZT(t))},vi={test:Mf("rgb","red"),parse:Hx("red","green","blue"),transform:({red:t,green:e,blue:i,alpha:r=1})=>"rgba("+sh.transform(t)+", "+sh.transform(e)+", "+sh.transform(i)+", "+Us(Ws.transform(r))+")"};function eE(t){let e="",i="",r="",o="";return t.length>5?(e=t.substring(1,3),i=t.substring(3,5),r=t.substring(5,7),o=t.substring(7,9)):(e=t.substring(1,2),i=t.substring(2,3),r=t.substring(3,4),o=t.substring(4,5),e+=e,i+=i,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(i,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Ph={test:Mf("#"),parse:eE,transform:vi.transform},io=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),la=io("deg"),Pn=io("%"),oe=io("px"),tE=io("vh"),nE=io("vw"),ev={...Pn,parse:t=>Pn.parse(t)/100,transform:t=>Pn.transform(t*100)},yr={test:Mf("hsl","hue"),parse:Hx("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:i,alpha:r=1})=>"hsla("+Math.round(t)+", "+Pn.transform(Us(e))+", "+Pn.transform(Us(i))+", "+Us(Ws.transform(r))+")"},ut={test:t=>vi.test(t)||Ph.test(t)||yr.test(t),parse:t=>vi.test(t)?vi.parse(t):yr.test(t)?yr.parse(t):Ph.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?vi.transform(t):yr.transform(t),getAnimatableNone:t=>{const e=ut.parse(t);return e.alpha=0,ut.transform(e)}},aE=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function iE(t){var e,i;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Df))==null?void 0:e.length)||0)+(((i=t.match(aE))==null?void 0:i.length)||0)>0}const $x="number",Ix="color",rE="var",sE="var(",tv="${}",oE=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function wr(t){const e=t.toString(),i=[],r={color:[],number:[],var:[]},o=[];let c=0;const h=e.replace(oE,p=>(ut.test(p)?(r.color.push(c),o.push(Ix),i.push(ut.parse(p))):p.startsWith(sE)?(r.var.push(c),o.push(rE),i.push(p)):(r.number.push(c),o.push($x),i.push(parseFloat(p))),++c,tv)).split(tv);return{values:i,split:h,indexes:r,types:o}}function lE(t){return wr(t).values}function qx({split:t,types:e}){const i=t.length;return r=>{let o="";for(let c=0;c<i;c++)if(o+=t[c],r[c]!==void 0){const d=e[c];d===$x?o+=Us(r[c]):d===Ix?o+=ut.transform(r[c]):o+=r[c]}return o}}function cE(t){return qx(wr(t))}const uE=t=>typeof t=="number"?0:ut.test(t)?ut.getAnimatableNone(t):t,dE=(t,e)=>typeof t=="number"?e!=null&&e.trim().endsWith("/")?t:0:uE(t);function hE(t){const e=wr(t);return qx(e)(e.values.map((r,o)=>dE(r,e.split[o])))}const Tn={test:iE,parse:lE,createTransformer:cE,getAnimatableNone:hE};function oh(t,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?t+(e-t)*6*i:i<1/2?e:i<2/3?t+(e-t)*(2/3-i)*6:t}function fE({hue:t,saturation:e,lightness:i,alpha:r}){t/=360,e/=100,i/=100;let o=0,c=0,d=0;if(!e)o=c=d=i;else{const h=i<.5?i*(1+e):i+e-i*e,p=2*i-h;o=oh(p,h,t+1/3),c=oh(p,h,t),d=oh(p,h,t-1/3)}return{red:Math.round(o*255),green:Math.round(c*255),blue:Math.round(d*255),alpha:r}}function sc(t,e){return i=>i>0?e:t}const qe=(t,e,i)=>t+(e-t)*i,lh=(t,e,i)=>{const r=t*t,o=i*(e*e-r)+r;return o<0?0:Math.sqrt(o)},pE=[Ph,vi,yr],mE=t=>pE.find(e=>e.test(t));function nv(t){const e=mE(t);if(!e)return!1;let i=e.parse(t);return e===yr&&(i=fE(i)),i}const av=(t,e)=>{const i=nv(t),r=nv(e);if(!i||!r)return sc(t,e);const o={...i};return c=>(o.red=lh(i.red,r.red,c),o.green=lh(i.green,r.green,c),o.blue=lh(i.blue,r.blue,c),o.alpha=qe(i.alpha,r.alpha,c),vi.transform(o))},Vh=new Set(["none","hidden"]);function gE(t,e){return Vh.has(t)?i=>i<=0?t:e:i=>i>=1?e:t}function yE(t,e){return i=>qe(t,e,i)}function Lf(t){return typeof t=="number"?yE:typeof t=="string"?Of(t)?sc:ut.test(t)?av:xE:Array.isArray(t)?Fx:typeof t=="object"?ut.test(t)?av:vE:sc}function Fx(t,e){const i=[...t],r=i.length,o=t.map((c,d)=>Lf(c)(c,e[d]));return c=>{for(let d=0;d<r;d++)i[d]=o[d](c);return i}}function vE(t,e){const i={...t,...e},r={};for(const o in i)t[o]!==void 0&&e[o]!==void 0&&(r[o]=Lf(t[o])(t[o],e[o]));return o=>{for(const c in r)i[c]=r[c](o);return i}}function bE(t,e){const i=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const c=e.types[o],d=t.indexes[c][r[c]],h=t.values[d]??0;i[o]=h,r[c]++}return i}const xE=(t,e)=>{const i=Tn.createTransformer(e),r=wr(t),o=wr(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?Vh.has(t)&&!o.values.length||Vh.has(e)&&!r.values.length?gE(t,e):no(Fx(bE(r,o),o.values),i):sc(t,e)};function Gx(t,e,i){return typeof t=="number"&&typeof e=="number"&&typeof i=="number"?qe(t,e,i):Lf(t)(t,e)}const wE=t=>{const e=({timestamp:i})=>t(i);return{start:(i=!0)=>Fe.update(e,i),stop:()=>qa(e),now:()=>wt.isProcessing?wt.timestamp:Et.now()}},Kx=(t,e,i=10)=>{let r="";const o=Math.max(Math.round(e/i),2);for(let c=0;c<o;c++)r+=Math.round(t(c/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},oc=2e4;function zf(t){let e=0;const i=50;let r=t.next(e);for(;!r.done&&e<oc;)e+=i,r=t.next(e);return e>=oc?1/0:e}function SE(t,e=100,i){const r=i({...t,keyframes:[0,e]}),o=Math.min(zf(r),oc);return{type:"keyframes",ease:c=>r.next(o*c).value/e,duration:hn(o)}}const et={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Hh(t,e){return t*Math.sqrt(1-e*e)}const jE=12;function kE(t,e,i){let r=i;for(let o=1;o<jE;o++)r=r-t(r)/e(r);return r}const ch=.001;function _E({duration:t=et.duration,bounce:e=et.bounce,velocity:i=et.velocity,mass:r=et.mass}){let o,c,d=1-e;d=Vn(et.minDamping,et.maxDamping,d),t=Vn(et.minDuration,et.maxDuration,hn(t)),d<1?(o=g=>{const y=g*d,v=y*t,x=y-i,w=Hh(g,d),S=Math.exp(-v);return ch-x/w*S},c=g=>{const v=g*d*t,x=v*i+i,w=Math.pow(d,2)*Math.pow(g,2)*t,S=Math.exp(-v),_=Hh(Math.pow(g,2),d);return(-o(g)+ch>0?-1:1)*((x-w)*S)/_}):(o=g=>{const y=Math.exp(-g*t),v=(g-i)*t+1;return-ch+y*v},c=g=>{const y=Math.exp(-g*t),v=(i-g)*(t*t);return y*v});const h=5/t,p=kE(o,c,h);if(t=Qt(t),isNaN(p))return{stiffness:et.stiffness,damping:et.damping,duration:t};{const g=Math.pow(p,2)*r;return{stiffness:g,damping:d*2*Math.sqrt(r*g),duration:t}}}const TE=["duration","bounce"],EE=["stiffness","damping","mass"];function iv(t,e){return e.some(i=>t[i]!==void 0)}function CE(t){let e={velocity:et.velocity,stiffness:et.stiffness,damping:et.damping,mass:et.mass,isResolvedFromDuration:!1,...t};if(!iv(t,EE)&&iv(t,TE))if(e.velocity=0,t.visualDuration){const i=t.visualDuration,r=2*Math.PI/(i*1.2),o=r*r,c=2*Vn(.05,1,1-(t.bounce||0))*Math.sqrt(o);e={...e,mass:et.mass,stiffness:o,damping:c}}else{const i=_E({...t,velocity:0});e={...e,...i,mass:et.mass},e.isResolvedFromDuration=!0}return e}function lc(t=et.visualDuration,e=et.bounce){const i=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:r,restDelta:o}=i;const c=i.keyframes[0],d=i.keyframes[i.keyframes.length-1],h={done:!1,value:c},{stiffness:p,damping:g,mass:y,duration:v,velocity:x,isResolvedFromDuration:w}=CE({...i,velocity:-hn(i.velocity||0)}),S=x||0,_=g/(2*Math.sqrt(p*y)),E=d-c,T=hn(Math.sqrt(p/y)),O=Math.abs(E)<5;r||(r=O?et.restSpeed.granular:et.restSpeed.default),o||(o=O?et.restDelta.granular:et.restDelta.default);let R,L,K,W,F,Y;if(_<1)K=Hh(T,_),W=(S+_*T*E)/K,R=re=>{const me=Math.exp(-_*T*re);return d-me*(W*Math.sin(K*re)+E*Math.cos(K*re))},F=_*T*W+E*K,Y=_*T*E-W*K,L=re=>Math.exp(-_*T*re)*(F*Math.sin(K*re)+Y*Math.cos(K*re));else if(_===1){R=me=>d-Math.exp(-T*me)*(E+(S+T*E)*me);const re=S+T*E;L=me=>Math.exp(-T*me)*(T*re*me-S)}else{const re=T*Math.sqrt(_*_-1);R=Ne=>{const je=Math.exp(-_*T*Ne),C=Math.min(re*Ne,300);return d-je*((S+_*T*E)*Math.sinh(C)+re*E*Math.cosh(C))/re};const me=(S+_*T*E)/re,fe=_*T*me-E*re,Oe=_*T*E-me*re;L=Ne=>{const je=Math.exp(-_*T*Ne),C=Math.min(re*Ne,300);return je*(fe*Math.sinh(C)+Oe*Math.cosh(C))}}const ee={calculatedDuration:w&&v||null,velocity:re=>Qt(L(re)),next:re=>{if(!w&&_<1){const fe=Math.exp(-_*T*re),Oe=Math.sin(K*re),Ne=Math.cos(K*re),je=d-fe*(W*Oe+E*Ne),C=Qt(fe*(F*Oe+Y*Ne));return h.done=Math.abs(C)<=r&&Math.abs(d-je)<=o,h.value=h.done?d:je,h}const me=R(re);if(w)h.done=re>=v;else{const fe=Qt(L(re));h.done=Math.abs(fe)<=r&&Math.abs(d-me)<=o}return h.value=h.done?d:me,h},toString:()=>{const re=Math.min(zf(ee),oc),me=Kx(fe=>ee.next(re*fe).value,re,30);return re+"ms "+me},toTransition:()=>{}};return ee}lc.applyToOptions=t=>{const e=SE(t,100,lc);return t.ease=e.ease,t.duration=Qt(e.duration),t.type="keyframes",t};const AE=5;function Yx(t,e,i){const r=Math.max(e-AE,0);return Ex(i-t(r),e-r)}function $h({keyframes:t,velocity:e=0,power:i=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:c=500,modifyTarget:d,min:h,max:p,restDelta:g=.5,restSpeed:y}){const v=t[0],x={done:!1,value:v},w=Y=>h!==void 0&&Y<h||p!==void 0&&Y>p,S=Y=>h===void 0?p:p===void 0||Math.abs(h-Y)<Math.abs(p-Y)?h:p;let _=i*e;const E=v+_,T=d===void 0?E:d(E);T!==E&&(_=T-v);const O=Y=>-_*Math.exp(-Y/r),R=Y=>T+O(Y),L=Y=>{const ee=O(Y),re=R(Y);x.done=Math.abs(ee)<=g,x.value=x.done?T:re};let K,W;const F=Y=>{w(x.value)&&(K=Y,W=lc({keyframes:[x.value,S(x.value)],velocity:Yx(R,Y,x.value),damping:o,stiffness:c,restDelta:g,restSpeed:y}))};return F(0),{calculatedDuration:null,next:Y=>{let ee=!1;return!W&&K===void 0&&(ee=!0,L(Y),F(Y)),K!==void 0&&Y>=K?W.next(Y-K):(!ee&&L(Y),x)}}}function NE(t,e,i){const r=[],o=i||Ia.mix||Gx,c=t.length-1;for(let d=0;d<c;d++){let h=o(t[d],t[d+1]);if(e){const p=Array.isArray(e)?e[d]||fn:e;h=no(p,h)}r.push(h)}return r}function RE(t,e,{clamp:i=!0,ease:r,mixer:o}={}){const c=t.length;if(Cf(c===e.length),c===1)return()=>e[0];if(c===2&&e[0]===e[1])return()=>e[1];const d=t[0]===t[1];t[0]>t[c-1]&&(t=[...t].reverse(),e=[...e].reverse());const h=NE(e,r,o),p=h.length,g=y=>{if(d&&y<t[0])return e[0];let v=0;if(p>1)for(;v<t.length-2&&!(y<t[v+1]);v++);const x=Xs(t[v],t[v+1],y);return h[v](x)};return i?y=>g(Vn(t[0],t[c-1],y)):g}function OE(t,e){const i=t[t.length-1];for(let r=1;r<=e;r++){const o=Xs(0,e,r);t.push(qe(i,1,o))}}function DE(t){const e=[0];return OE(e,t.length-1),e}function ME(t,e){return t.map(i=>i*e)}function LE(t,e){return t.map(()=>e||zx).splice(0,t.length-1)}function Bs({duration:t=300,keyframes:e,times:i,ease:r="easeInOut"}){const o=IT(r)?r.map(Qy):Qy(r),c={done:!1,value:e[0]},d=ME(i&&i.length===e.length?i:DE(e),t),h=RE(d,e,{ease:Array.isArray(o)?o:LE(e,o)});return{calculatedDuration:t,next:p=>(c.value=h(p),c.done=p>=t,c)}}const zE=t=>t!==null;function _c(t,{repeat:e,repeatType:i="loop"},r,o=1){const c=t.filter(zE),h=o<0||e&&i!=="loop"&&e%2===1?0:c.length-1;return!h||r===void 0?c[h]:r}const UE={decay:$h,inertia:$h,tween:Bs,keyframes:Bs,spring:lc};function Xx(t){typeof t.type=="string"&&(t.type=UE[t.type])}class Uf{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,i){return this.finished.then(e,i)}}const BE=t=>t/100;class cc extends Uf{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,o;const{motionValue:i}=this.options;i&&i.updatedAt!==Et.now()&&this.tick(Et.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(o=(r=this.options).onStop)==null||o.call(r))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;Xx(e);const{type:i=Bs,repeat:r=0,repeatDelay:o=0,repeatType:c,velocity:d=0}=e;let{keyframes:h}=e;const p=i||Bs;p!==Bs&&typeof h[0]!="number"&&(this.mixKeyframes=no(BE,Gx(h[0],h[1])),h=[0,100]);const g=p({...e,keyframes:h});c==="mirror"&&(this.mirroredGenerator=p({...e,keyframes:[...h].reverse(),velocity:-d})),g.calculatedDuration===null&&(g.calculatedDuration=zf(g));const{calculatedDuration:y}=g;this.calculatedDuration=y,this.resolvedDuration=y+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=g}updateTime(e){const i=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=i}tick(e,i=!1){const{generator:r,totalDuration:o,mixKeyframes:c,mirroredGenerator:d,resolvedDuration:h,calculatedDuration:p}=this;if(this.startTime===null)return r.next(0);const{delay:g=0,keyframes:y,repeat:v,repeatType:x,repeatDelay:w,type:S,onUpdate:_,finalKeyframe:E}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),i?this.currentTime=e:this.updateTime(e);const T=this.currentTime-g*(this.playbackSpeed>=0?1:-1),O=this.playbackSpeed>=0?T<0:T>o;this.currentTime=Math.max(T,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let R=this.currentTime,L=r;if(v){const Y=Math.min(this.currentTime,o)/h;let ee=Math.floor(Y),re=Y%1;!re&&Y>=1&&(re=1),re===1&&ee--,ee=Math.min(ee,v+1),!!(ee%2)&&(x==="reverse"?(re=1-re,w&&(re-=w/h)):x==="mirror"&&(L=d)),R=Vn(0,1,re)*h}let K;O?(this.delayState.value=y[0],K=this.delayState):K=L.next(R),c&&!O&&(K.value=c(K.value));let{done:W}=K;!O&&p!==null&&(W=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const F=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&W);return F&&S!==$h&&(K.value=_c(y,this.options,E,this.speed)),_&&_(K.value),F&&this.finish(),K}then(e,i){return this.finished.then(e,i)}get duration(){return hn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hn(e)}get time(){return hn(this.currentTime)}set time(e){e=Qt(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const i=this.generator.next(e).value;return Yx(r=>this.generator.next(r).value,e,i)}get speed(){return this.playbackSpeed}set speed(e){const i=this.playbackSpeed!==e;i&&this.driver&&this.updateTime(Et.now()),this.playbackSpeed=e,i&&this.driver&&(this.time=hn(this.currentTime))}play(){var o,c;if(this.isStopped)return;const{driver:e=wE,startTime:i}=this.options;this.driver||(this.driver=e(d=>this.tick(d))),(c=(o=this.options).onPlay)==null||c.call(o);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=i??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Et.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,i;this.notifyFinished(),this.teardown(),this.state="finished",(i=(e=this.options).onComplete)==null||i.call(e)}cancel(){var e,i;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(i=(e=this.options).onCancel)==null||i.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var i;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(i=this.driver)==null||i.stop(),e.observe(this)}}function PE(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const bi=t=>t*180/Math.PI,Ih=t=>{const e=bi(Math.atan2(t[1],t[0]));return qh(e)},VE={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Ih,rotateZ:Ih,skewX:t=>bi(Math.atan(t[1])),skewY:t=>bi(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},qh=t=>(t=t%360,t<0&&(t+=360),t),rv=Ih,sv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),ov=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),HE={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:sv,scaleY:ov,scale:t=>(sv(t)+ov(t))/2,rotateX:t=>qh(bi(Math.atan2(t[6],t[5]))),rotateY:t=>qh(bi(Math.atan2(-t[2],t[0]))),rotateZ:rv,rotate:rv,skewX:t=>bi(Math.atan(t[4])),skewY:t=>bi(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function Fh(t){return t.includes("scale")?1:0}function Gh(t,e){if(!t||t==="none")return Fh(e);const i=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(i)r=HE,o=i;else{const h=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=VE,o=h}if(!o)return Fh(e);const c=r[e],d=o[1].split(",").map(IE);return typeof c=="function"?c(d):d[c]}const $E=(t,e)=>{const{transform:i="none"}=getComputedStyle(t);return Gh(i,e)};function IE(t){return parseFloat(t.trim())}const Cr=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ar=new Set([...Cr,"pathRotation"]),lv=t=>t===Er||t===oe,qE=new Set(["x","y","z"]),FE=Cr.filter(t=>!qE.has(t));function GE(t){const e=[];return FE.forEach(i=>{const r=t.getValue(i);r!==void 0&&(e.push([i,r.get()]),r.set(i.startsWith("scale")?1:0))}),e}const Ha={width:({x:t},{paddingLeft:e="0",paddingRight:i="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(i)},height:({y:t},{paddingTop:e="0",paddingBottom:i="0",boxSizing:r})=>{const o=t.max-t.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(i)},top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>Gh(e,"x"),y:(t,{transform:e})=>Gh(e,"y")};Ha.translateX=Ha.x;Ha.translateY=Ha.y;const xi=new Set;let Kh=!1,Yh=!1,Xh=!1;function Wx(){if(Yh){const t=Array.from(xi).filter(r=>r.needsMeasurement),e=new Set(t.map(r=>r.element)),i=new Map;e.forEach(r=>{const o=GE(r);o.length&&(i.set(r,o),r.render())}),t.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=i.get(r);o&&o.forEach(([c,d])=>{var h;(h=r.getValue(c))==null||h.set(d)})}),t.forEach(r=>r.measureEndState()),t.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Yh=!1,Kh=!1,xi.forEach(t=>t.complete(Xh)),xi.clear()}function Jx(){xi.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(Yh=!0)})}function KE(){Xh=!0,Jx(),Wx(),Xh=!1}class Bf{constructor(e,i,r,o,c,d=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=i,this.name=r,this.motionValue=o,this.element=c,this.isAsync=d}scheduleResolve(){this.state="scheduled",this.isAsync?(xi.add(this),Kh||(Kh=!0,Fe.read(Jx),Fe.resolveKeyframes(Wx))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:i,element:r,motionValue:o}=this;if(e[0]===null){const c=o==null?void 0:o.get(),d=e[e.length-1];if(c!==void 0)e[0]=c;else if(r&&i){const h=r.readValue(i,d);h!=null&&(e[0]=h)}e[0]===void 0&&(e[0]=d),o&&c===void 0&&o.set(e[0])}PE(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),xi.delete(this)}cancel(){this.state==="scheduled"&&(xi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const YE=t=>t.startsWith("--");function Qx(t,e,i){YE(e)?t.style.setProperty(e,i):t.style[e]=i}const XE={};function Zx(t,e){const i=Tx(t);return()=>XE[e]??i()}const WE=Zx(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),e1=Zx(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ds=([t,e,i,r])=>`cubic-bezier(${t}, ${e}, ${i}, ${r})`,cv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ds([0,.65,.55,1]),circOut:Ds([.55,0,1,.45]),backIn:Ds([.31,.01,.66,-.59]),backOut:Ds([.33,1.53,.69,.99])};function t1(t,e){if(t)return typeof t=="function"?e1()?Kx(t,e):"ease-out":Ux(t)?Ds(t):Array.isArray(t)?t.map(i=>t1(i,e)||cv.easeOut):cv[t]}function JE(t,e,i,{delay:r=0,duration:o=300,repeat:c=0,repeatType:d="loop",ease:h="easeOut",times:p}={},g=void 0){const y={[e]:i};p&&(y.offset=p);const v=t1(h,o);Array.isArray(v)&&(y.easing=v);const x={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:c+1,direction:d==="reverse"?"alternate":"normal"};return g&&(x.pseudoElement=g),t.animate(y,x)}function n1(t){return typeof t=="function"&&"applyToOptions"in t}function QE({type:t,...e}){return n1(t)&&e1()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class a1 extends Uf{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:i,name:r,keyframes:o,pseudoElement:c,allowFlatten:d=!1,finalKeyframe:h,onComplete:p}=e;this.isPseudoElement=!!c,this.allowFlatten=d,this.options=e,Cf(typeof e.type!="string");const g=QE(e);this.animation=JE(i,r,o,g,c),g.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!c){const y=_c(o,this.options,h,this.speed);this.updateMotionValue&&this.updateMotionValue(y),Qx(i,r,y),this.animation.cancel()}p==null||p(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,i;(i=(e=this.animation).finish)==null||i.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var i,r,o;const e=(i=this.options)==null?void 0:i.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((o=(r=this.animation).commitStyles)==null||o.call(r))}get duration(){var i,r;const e=((r=(i=this.animation.effect)==null?void 0:i.getComputedTiming)==null?void 0:r.call(i).duration)||0;return hn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+hn(e)}get time(){return hn(Number(this.animation.currentTime)||0)}set time(e){const i=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=Qt(e),i&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:i,rangeEnd:r,observe:o}){var c;return this.allowFlatten&&((c=this.animation.effect)==null||c.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&WE()?(this.animation.timeline=e,i&&(this.animation.rangeStart=i),r&&(this.animation.rangeEnd=r),fn):o(this)}}const i1={anticipate:Dx,backInOut:Ox,circInOut:Lx};function ZE(t){return t in i1}function eC(t){typeof t.ease=="string"&&ZE(t.ease)&&(t.ease=i1[t.ease])}const uh=10;class tC extends a1{constructor(e){eC(e),Xx(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:i,onUpdate:r,onComplete:o,element:c,...d}=this.options;if(!i)return;if(e!==void 0){i.set(e);return}const h=new cc({...d,autoplay:!1}),p=Math.max(uh,Et.now()-this.startTime),g=Vn(0,uh,p-uh),y=h.sample(p).value,{name:v}=this.options;c&&v&&Qx(c,v,y),i.setWithVelocity(h.sample(Math.max(0,p-g)).value,y,g),h.stop()}}const uv=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Tn.test(t)||t==="0")&&!t.startsWith("url("));function nC(t){const e=t[0];if(t.length===1)return!0;for(let i=0;i<t.length;i++)if(t[i]!==e)return!0}function aC(t,e,i,r){const o=t[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const c=t[t.length-1],d=uv(o,e),h=uv(c,e);return!d||!h?!1:nC(t)||(i==="spring"||n1(i))&&r}function Wh(t){t.duration=0,t.type="keyframes"}const r1=new Set(["opacity","clipPath","filter","transform"]),iC=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function rC(t){for(let e=0;e<t.length;e++)if(typeof t[e]=="string"&&iC.test(t[e]))return!0;return!1}const sC=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),oC=Tx(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function lC(t){var v;const{motionValue:e,name:i,repeatDelay:r,repeatType:o,damping:c,type:d,keyframes:h}=t;if(!(((v=e==null?void 0:e.owner)==null?void 0:v.current)instanceof HTMLElement))return!1;const{onUpdate:g,transformTemplate:y}=e.owner.getProps();return oC()&&i&&(r1.has(i)||sC.has(i)&&rC(h))&&(i!=="transform"||!y)&&!g&&!r&&o!=="mirror"&&c!==0&&d!=="inertia"}const cC=40;class uC extends Uf{constructor({autoplay:e=!0,delay:i=0,type:r="keyframes",repeat:o=0,repeatDelay:c=0,repeatType:d="loop",keyframes:h,name:p,motionValue:g,element:y,...v}){var S;super(),this.stop=()=>{var _,E;this._animation&&(this._animation.stop(),(_=this.stopTimeline)==null||_.call(this)),(E=this.keyframeResolver)==null||E.cancel()},this.createdAt=Et.now();const x={autoplay:e,delay:i,type:r,repeat:o,repeatDelay:c,repeatType:d,name:p,motionValue:g,element:y,...v},w=(y==null?void 0:y.KeyframeResolver)||Bf;this.keyframeResolver=new w(h,(_,E,T)=>this.onKeyframesResolved(_,E,x,!T),p,g,y),(S=this.keyframeResolver)==null||S.scheduleResolve()}onKeyframesResolved(e,i,r,o){var T,O;this.keyframeResolver=void 0;const{name:c,type:d,velocity:h,delay:p,isHandoff:g,onUpdate:y}=r;this.resolvedAt=Et.now();let v=!0;aC(e,c,d,h)||(v=!1,(Ia.instantAnimations||!p)&&(y==null||y(_c(e,r,i))),e[0]=e[e.length-1],Wh(r),r.repeat=0);const w={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>cC?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:i,...r,keyframes:e},S=v&&!g&&lC(w),_=(O=(T=w.motionValue)==null?void 0:T.owner)==null?void 0:O.current;let E;if(S)try{E=new tC({...w,element:_})}catch{E=new cc(w)}else E=new cc(w);E.finished.then(()=>{this.notifyFinished()}).catch(fn),this.pendingTimeline&&(this.stopTimeline=E.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=E}get finished(){return this._animation?this.animation.finished:this._finished}then(e,i){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),KE()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function s1(t,e,i,r=0,o=1){const c=Array.from(t).sort((g,y)=>g.sortNodePosition(y)).indexOf(e),d=t.size,h=(d-1)*r;return typeof i=="function"?i(c,d):o===1?c*r:h-c*r}const dv=30,dC=t=>!isNaN(parseFloat(t));class hC{constructor(e,i={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var c;const o=Et.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((c=this.events.change)==null||c.notify(this.current),this.dependents))for(const d of this.dependents)d.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=i.owner}setCurrent(e){this.current=e,this.updatedAt=Et.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=dC(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,i){this.events[e]||(this.events[e]=new Af);const r=this.events[e].add(i);return e==="change"?()=>{r(),Fe.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,i){this.passiveEffect=e,this.stopPassiveEffect=i}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,i,r){this.set(i),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,i=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,i&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Et.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>dv)return 0;const i=Math.min(this.updatedAt-this.prevUpdatedAt,dv);return Ex(parseFloat(this.current)-parseFloat(this.prevFrameValue),i)}start(e){return this.stop(),new Promise(i=>{this.hasAnimated=!0,this.animation=e(i),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,i;(e=this.dependents)==null||e.clear(),(i=this.events.destroy)==null||i.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Sr(t,e){return new hC(t,e)}function o1(t,e){if(t!=null&&t.inherit&&e){const{inherit:i,...r}=t;return{...e,...r}}return t}function Pf(t,e){const i=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return i!==t?o1(i,t):i}const fC={type:"spring",stiffness:500,damping:25,restSpeed:10},pC=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),mC={type:"keyframes",duration:.8},gC={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},yC=(t,{keyframes:e})=>e.length>2?mC:Ar.has(t)?t.startsWith("scale")?pC(e[1]):fC:gC,vC=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function bC(t){for(const e in t)if(!vC.has(e))return!0;return!1}const Vf=(t,e,i,r={},o,c)=>d=>{const h=Pf(r,t)||{},p=h.delay||r.delay||0;let{elapsed:g=0}=r;g=g-Qt(p);const y={keyframes:Array.isArray(i)?i:[null,i],ease:"easeOut",velocity:e.getVelocity(),...h,delay:-g,onUpdate:x=>{e.set(x),h.onUpdate&&h.onUpdate(x)},onComplete:()=>{d(),h.onComplete&&h.onComplete()},name:t,motionValue:e,element:c?void 0:o};bC(h)||Object.assign(y,yC(t,y)),y.duration&&(y.duration=Qt(y.duration)),y.repeatDelay&&(y.repeatDelay=Qt(y.repeatDelay)),y.from!==void 0&&(y.keyframes[0]=y.from);let v=!1;if((y.type===!1||y.duration===0&&!y.repeatDelay)&&(Wh(y),y.delay===0&&(v=!0)),(Ia.instantAnimations||Ia.skipAnimations||o!=null&&o.shouldSkipAnimations||h.skipAnimations)&&(v=!0,Wh(y),y.delay=0),y.allowFlatten=!h.type&&!h.ease,v&&!c&&e.get()!==void 0){const x=_c(y.keyframes,h);if(x!==void 0){Fe.update(()=>{y.onUpdate(x),y.onComplete()});return}}return h.isSync?new cc(y):new uC(y)},xC=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function wC(t){const e=xC.exec(t);if(!e)return[,];const[,i,r,o]=e;return[`--${i??r}`,o]}function l1(t,e,i=1){const[r,o]=wC(t);if(!r)return;const c=window.getComputedStyle(e).getPropertyValue(r);if(c){const d=c.trim();return jx(d)?parseFloat(d):d}return Of(o)?l1(o,e,i+1):o}function hv(t){const e=[{},{}];return t==null||t.values.forEach((i,r)=>{e[0][r]=i.get(),e[1][r]=i.getVelocity()}),e}function Hf(t,e,i,r){if(typeof e=="function"){const[o,c]=hv(r);e=e(i!==void 0?i:t.custom,o,c)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[o,c]=hv(r);e=e(i!==void 0?i:t.custom,o,c)}return e}function wi(t,e,i){const r=t.getProps();return Hf(r,e,i!==void 0?i:r.custom,t)}const c1=new Set(["width","height","top","left","right","bottom",...Cr]),Jh=t=>Array.isArray(t);function SC(t,e,i){t.hasValue(e)?t.getValue(e).set(i):t.addValue(e,Sr(i))}function jC(t){return Jh(t)?t[t.length-1]||0:t}function kC(t,e){const i=wi(t,e);let{transitionEnd:r={},transition:o={},...c}=i||{};c={...c,...r};for(const d in c){const h=jC(c[d]);SC(t,d,h)}}const St=t=>!!(t&&t.getVelocity);function _C(t){return!!(St(t)&&t.add)}function Qh(t,e){const i=t.getValue("willChange");if(_C(i))return i.add(e);if(!i&&Ia.WillChange){const r=new Ia.WillChange("auto");t.addValue("willChange",r),r.add(e)}}function $f(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const TC="framerAppearId",u1="data-"+$f(TC);function d1(t){return t.props[u1]}function EC({protectedKeys:t,needsAnimating:e},i){const r=t.hasOwnProperty(i)&&e[i]!==!0;return e[i]=!1,r}function h1(t,e,{delay:i=0,transitionOverride:r,type:o}={}){let{transition:c,transitionEnd:d,...h}=e;const p=t.getDefaultTransition();c=c?o1(c,p):p;const g=c==null?void 0:c.reduceMotion,y=c==null?void 0:c.skipAnimations;r&&(c=r);const v=[],x=o&&t.animationState&&t.animationState.getState()[o],w=c==null?void 0:c.path;w&&w.animateVisualElement(t,h,c,i,v);for(const S in h){const _=t.getValue(S,t.latestValues[S]??null),E=h[S];if(E===void 0||x&&EC(x,S))continue;const T={delay:i,...Pf(c||{},S)};y&&(T.skipAnimations=!0);const O=_.get();if(O!==void 0&&!_.isAnimating()&&!Array.isArray(E)&&E===O&&!T.velocity){Fe.update(()=>_.set(E));continue}let R=!1;if(window.MotionHandoffAnimation){const W=d1(t);if(W){const F=window.MotionHandoffAnimation(W,S,Fe);F!==null&&(T.startTime=F,R=!0)}}Qh(t,S);const L=g??t.shouldReduceMotion;_.start(Vf(S,_,E,L&&c1.has(S)?{type:!1}:T,t,R));const K=_.animation;K&&v.push(K)}if(d){const S=()=>Fe.update(()=>{d&&kC(t,d)});v.length?Promise.all(v).then(S):S()}return v}function Zh(t,e,i={}){var p;const r=wi(t,e,i.type==="exit"?(p=t.presenceContext)==null?void 0:p.custom:void 0);let{transition:o=t.getDefaultTransition()||{}}=r||{};i.transitionOverride&&(o=i.transitionOverride);const c=r?()=>Promise.all(h1(t,r,i)):()=>Promise.resolve(),d=t.variantChildren&&t.variantChildren.size?(g=0)=>{const{delayChildren:y=0,staggerChildren:v,staggerDirection:x}=o;return CC(t,e,g,y,v,x,i)}:()=>Promise.resolve(),{when:h}=o;if(h){const[g,y]=h==="beforeChildren"?[c,d]:[d,c];return g().then(()=>y())}else return Promise.all([c(),d(i.delay)])}function CC(t,e,i=0,r=0,o=0,c=1,d){const h=[];for(const p of t.variantChildren)p.notify("AnimationStart",e),h.push(Zh(p,e,{...d,delay:i+(typeof r=="function"?0:r)+s1(t.variantChildren,p,r,o,c)}).then(()=>p.notify("AnimationComplete",e)));return Promise.all(h)}function AC(t,e,i={}){t.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(c=>Zh(t,c,i));r=Promise.all(o)}else if(typeof e=="string")r=Zh(t,e,i);else{const o=typeof e=="function"?wi(t,e,i.custom):e;r=Promise.all(h1(t,o,i))}return r.then(()=>{t.notify("AnimationComplete",e)})}const NC={test:t=>t==="auto",parse:t=>t},f1=t=>e=>e.test(t),p1=[Er,oe,Pn,la,nE,tE,NC],fv=t=>p1.find(f1(t));function RC(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||_x(t):!0}const OC=new Set(["brightness","contrast","saturate","opacity"]);function DC(t){const[e,i]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=i.match(Df)||[];if(!r)return t;const o=i.replace(r,"");let c=OC.has(e)?1:0;return r!==i&&(c*=100),e+"("+c+o+")"}const MC=/\b([a-z-]*)\(.*?\)/gu,ef={...Tn,getAnimatableNone:t=>{const e=t.match(MC);return e?e.map(DC).join(" "):t}},tf={...Tn,getAnimatableNone:t=>{const e=Tn.parse(t);return Tn.createTransformer(t)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},pv={...Er,transform:Math.round},LC={rotate:la,pathRotation:la,rotateX:la,rotateY:la,rotateZ:la,scale:Ml,scaleX:Ml,scaleY:Ml,scaleZ:Ml,skew:la,skewX:la,skewY:la,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:Ws,originX:ev,originY:ev,originZ:oe},uc={borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,top:oe,right:oe,bottom:oe,left:oe,inset:oe,insetBlock:oe,insetBlockStart:oe,insetBlockEnd:oe,insetInline:oe,insetInlineStart:oe,insetInlineEnd:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,paddingBlock:oe,paddingBlockStart:oe,paddingBlockEnd:oe,paddingInline:oe,paddingInlineStart:oe,paddingInlineEnd:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,marginBlock:oe,marginBlockStart:oe,marginBlockEnd:oe,marginInline:oe,marginInlineStart:oe,marginInlineEnd:oe,fontSize:oe,backgroundPositionX:oe,backgroundPositionY:oe,...LC,zIndex:pv,fillOpacity:Ws,strokeOpacity:Ws,numOctaves:pv},zC={...uc,color:ut,backgroundColor:ut,outlineColor:ut,fill:ut,stroke:ut,borderColor:ut,borderTopColor:ut,borderRightColor:ut,borderBottomColor:ut,borderLeftColor:ut,filter:ef,WebkitFilter:ef,mask:tf,WebkitMask:tf},m1=t=>zC[t],UC=new Set([ef,tf]);function g1(t,e){let i=m1(t);return UC.has(i)||(i=Tn),i.getAnimatableNone?i.getAnimatableNone(e):void 0}const BC=new Set(["auto","none","0"]);function PC(t,e,i){let r=0,o;for(;r<t.length&&!o;){const c=t[r];typeof c=="string"&&!BC.has(c)&&wr(c).values.length&&(o=t[r]),r++}if(o&&i)for(const c of e)t[c]=g1(i,o)}class VC extends Bf{constructor(e,i,r,o,c){super(e,i,r,o,c,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:i,name:r}=this;if(!i||!i.current)return;super.readKeyframes();for(let y=0;y<e.length;y++){let v=e[y];if(typeof v=="string"&&(v=v.trim(),Of(v))){const x=l1(v,i.current);x!==void 0&&(e[y]=x),y===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!c1.has(r)||e.length!==2)return;const[o,c]=e,d=fv(o),h=fv(c),p=Zy(o),g=Zy(c);if(p!==g&&Ha[r]){this.needsMeasurement=!0;return}if(d!==h)if(lv(d)&&lv(h))for(let y=0;y<e.length;y++){const v=e[y];typeof v=="string"&&(e[y]=parseFloat(v))}else Ha[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:i}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||RC(e[o]))&&r.push(o);r.length&&PC(e,r,i)}measureInitialState(){const{element:e,unresolvedKeyframes:i,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Ha[r](e.measureViewportBox(),window.getComputedStyle(e.current)),i[0]=this.measuredOrigin;const o=i[i.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){var h;const{element:e,name:i,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(i);o&&o.jump(this.measuredOrigin,!1);const c=r.length-1,d=r[c];r[c]=Ha[i](e.measureViewportBox(),window.getComputedStyle(e.current)),d!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=d),(h=this.removedTransforms)!=null&&h.length&&this.removedTransforms.forEach(([p,g])=>{e.getValue(p).set(g)}),this.resolveNoneKeyframes()}}function y1(t,e,i){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){let r=document;const o=(i==null?void 0:i[t])??r.querySelectorAll(t);return o?Array.from(o):[]}return Array.from(t).filter(r=>r!=null)}const nf=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function $l(t){return kx(t)&&"offsetHeight"in t&&!("ownerSVGElement"in t)}const{schedule:If}=Bx(queueMicrotask,!1),Sn={x:!1,y:!1};function v1(){return Sn.x||Sn.y}function HC(t){return t==="x"||t==="y"?Sn[t]?null:(Sn[t]=!0,()=>{Sn[t]=!1}):Sn.x||Sn.y?null:(Sn.x=Sn.y=!0,()=>{Sn.x=Sn.y=!1})}function b1(t,e){const i=y1(t),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[i,o,()=>r.abort()]}function $C(t){return!(t.pointerType==="touch"||v1())}function IC(t,e,i={}){const[r,o,c]=b1(t,i);return r.forEach(d=>{let h=!1,p=!1,g;const y=()=>{d.removeEventListener("pointerleave",S)},v=E=>{g&&(g(E),g=void 0),y()},x=E=>{h=!1,window.removeEventListener("pointerup",x),window.removeEventListener("pointercancel",x),p&&(p=!1,v(E))},w=()=>{h=!0,window.addEventListener("pointerup",x,o),window.addEventListener("pointercancel",x,o)},S=E=>{if(E.pointerType!=="touch"){if(h){p=!0;return}v(E)}},_=E=>{if(!$C(E))return;p=!1;const T=e(d,E);typeof T=="function"&&(g=T,d.addEventListener("pointerleave",S,o))};d.addEventListener("pointerenter",_,o),d.addEventListener("pointerdown",w,o)}),c}const x1=(t,e)=>e?t===e?!0:x1(t,e.parentElement):!1,qf=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,qC=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function FC(t){return qC.has(t.tagName)||t.isContentEditable===!0}const GC=new Set(["INPUT","SELECT","TEXTAREA"]);function KC(t){return GC.has(t.tagName)||t.isContentEditable===!0}const Il=new WeakSet;function mv(t){return e=>{e.key==="Enter"&&t(e)}}function dh(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const YC=(t,e)=>{const i=t.currentTarget;if(!i)return;const r=mv(()=>{if(Il.has(i))return;dh(i,"down");const o=mv(()=>{dh(i,"up")}),c=()=>dh(i,"cancel");i.addEventListener("keyup",o,e),i.addEventListener("blur",c,e)});i.addEventListener("keydown",r,e),i.addEventListener("blur",()=>i.removeEventListener("keydown",r),e)};function gv(t){return qf(t)&&!v1()}const yv=new WeakSet;function XC(t,e,i={}){const[r,o,c]=b1(t,i),d=h=>{const p=h.currentTarget;if(!gv(h)||yv.has(h))return;Il.add(p),i.stopPropagation&&yv.add(h);const g=e(p,h),y=(w,S)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",x),Il.has(p)&&Il.delete(p),gv(w)&&typeof g=="function"&&g(w,{success:S})},v=w=>{y(w,p===window||p===document||i.useGlobalTarget||x1(p,w.target))},x=w=>{y(w,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",x,o)};return r.forEach(h=>{(i.useGlobalTarget?window:h).addEventListener("pointerdown",d,o),$l(h)&&(h.addEventListener("focus",g=>YC(g,o)),!FC(h)&&!h.hasAttribute("tabindex")&&(h.tabIndex=0))}),c}function Ff(t){return kx(t)&&"ownerSVGElement"in t}const ql=new WeakMap;let Ba;const w1=(t,e,i)=>(r,o)=>o&&o[0]?o[0][t+"Size"]:Ff(r)&&"getBBox"in r?r.getBBox()[e]:r[i],WC=w1("inline","width","offsetWidth"),JC=w1("block","height","offsetHeight");function QC({target:t,borderBoxSize:e}){var i;(i=ql.get(t))==null||i.forEach(r=>{r(t,{get width(){return WC(t,e)},get height(){return JC(t,e)}})})}function ZC(t){t.forEach(QC)}function eA(){typeof ResizeObserver>"u"||(Ba=new ResizeObserver(ZC))}function tA(t,e){Ba||eA();const i=y1(t);return i.forEach(r=>{let o=ql.get(r);o||(o=new Set,ql.set(r,o)),o.add(e),Ba==null||Ba.observe(r)}),()=>{i.forEach(r=>{const o=ql.get(r);o==null||o.delete(e),o!=null&&o.size||Ba==null||Ba.unobserve(r)})}}const Fl=new Set;let vr;function nA(){vr=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Fl.forEach(e=>e(t))},window.addEventListener("resize",vr)}function aA(t){return Fl.add(t),vr||nA(),()=>{Fl.delete(t),!Fl.size&&typeof vr=="function"&&(window.removeEventListener("resize",vr),vr=void 0)}}function vv(t,e){return typeof t=="function"?aA(t):tA(t,e)}function iA(t){return Ff(t)&&t.tagName==="svg"}const rA=[...p1,ut,Tn],sA=t=>rA.find(f1(t)),bv=()=>({translate:0,scale:1,origin:0,originPoint:0}),br=()=>({x:bv(),y:bv()}),xv=()=>({min:0,max:0}),ht=()=>({x:xv(),y:xv()}),oA=new WeakMap;function Tc(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Js(t){return typeof t=="string"||Array.isArray(t)}const Gf=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Kf=["initial",...Gf];function Ec(t){return Tc(t.animate)||Kf.some(e=>Js(t[e]))}function S1(t){return!!(Ec(t)||t.variants)}function lA(t,e,i){for(const r in e){const o=e[r],c=i[r];if(St(o))t.addValue(r,o);else if(St(c))t.addValue(r,Sr(o,{owner:t}));else if(c!==o)if(t.hasValue(r)){const d=t.getValue(r);d.liveStyle===!0?d.jump(o):d.hasAnimated||d.set(o)}else{const d=t.getStaticValue(r);t.addValue(r,Sr(d!==void 0?d:o,{owner:t}))}}for(const r in i)e[r]===void 0&&t.removeValue(r);return e}const af={current:null},j1={current:!1},cA=typeof window<"u";function uA(){if(j1.current=!0,!!cA)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>af.current=t.matches;t.addEventListener("change",e),e()}else af.current=!1}const wv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let dc={};function k1(t){dc=t}function dA(){return dc}class hA{scrapeMotionValuesFromProps(e,i,r){return{}}constructor({parent:e,props:i,presenceContext:r,reducedMotionConfig:o,skipAnimations:c,blockInitialAnimation:d,visualState:h},p={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=Bf,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const w=Et.now();this.renderScheduledAt<w&&(this.renderScheduledAt=w,Fe.render(this.render,!1,!0))};const{latestValues:g,renderState:y}=h;this.latestValues=g,this.baseTarget={...g},this.initialValues=i.initial?{...g}:{},this.renderState=y,this.parent=e,this.props=i,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=c,this.options=p,this.blockInitialAnimation=!!d,this.isControllingVariants=Ec(i),this.isVariantNode=S1(i),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...x}=this.scrapeMotionValuesFromProps(i,{},this);for(const w in x){const S=x[w];g[w]!==void 0&&St(S)&&S.set(g[w])}}mount(e){var i,r;if(this.hasBeenMounted)for(const o in this.initialValues)(i=this.values.get(o))==null||i.jump(this.initialValues[o]),this.latestValues[o]=this.initialValues[o];this.current=e,oA.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((o,c)=>this.bindToMotionValue(c,o)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(j1.current||uA(),this.shouldReduceMotion=af.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),qa(this.notifyUpdate),qa(this.render),this.valueSubscriptions.forEach(i=>i()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const i in this.events)this.events[i].clear();for(const i in this.features){const r=this.features[i];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,i){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),i.accelerate&&r1.has(e)&&this.current instanceof HTMLElement){const{factory:d,keyframes:h,times:p,ease:g,duration:y}=i.accelerate,v=new a1({element:this.current,name:e,keyframes:h,times:p,ease:g,duration:Qt(y)}),x=d(v);this.valueSubscriptions.set(e,()=>{x(),v.cancel()});return}const r=Ar.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=i.on("change",d=>{this.latestValues[e]=d,this.props.onUpdate&&Fe.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let c;typeof window<"u"&&window.MotionCheckAppearSync&&(c=window.MotionCheckAppearSync(this,e,i)),this.valueSubscriptions.set(e,()=>{o(),c&&c()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in dc){const i=dc[e];if(!i)continue;const{isEnabled:r,Feature:o}=i;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const c=this.features[e];c.isMounted?c.update():(c.mount(),c.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ht()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,i){this.latestValues[e]=i}update(e,i){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=i;for(let r=0;r<wv.length;r++){const o=wv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const c="on"+o,d=e[c];d&&(this.propEventSubscriptions[o]=this.on(o,d))}this.prevMotionValues=lA(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const i=this.getClosestVariantNode();if(i)return i.variantChildren&&i.variantChildren.add(e),()=>i.variantChildren.delete(e)}addValue(e,i){const r=this.values.get(e);i!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,i),this.values.set(e,i),this.latestValues[e]=i.get())}removeValue(e){this.values.delete(e);const i=this.valueSubscriptions.get(e);i&&(i(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,i){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&i!==void 0&&(r=Sr(i===null?void 0:i,{owner:this}),this.addValue(e,r)),r}readValue(e,i){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(jx(r)||_x(r))?r=parseFloat(r):!sA(r)&&Tn.test(i)&&(r=g1(e,i)),this.setBaseTarget(e,St(r)?r.get():r)),St(r)?r.get():r}setBaseTarget(e,i){this.baseTarget[e]=i}getBaseTarget(e){var c;const{initial:i}=this.props;let r;if(typeof i=="string"||typeof i=="object"){const d=Hf(this.props,i,(c=this.presenceContext)==null?void 0:c.custom);d&&(r=d[e])}if(i&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!St(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,i){return this.events[e]||(this.events[e]=new Af),this.events[e].add(i)}notify(e,...i){this.events[e]&&this.events[e].notify(...i)}scheduleRenderMicrotask(){If.render(this.render)}}class _1 extends hA{constructor(){super(...arguments),this.KeyframeResolver=VC}sortInstanceNodePosition(e,i){return e.compareDocumentPosition(i)&2?1:-1}getBaseTargetFromProps(e,i){const r=e.style;return r?r[i]:void 0}removeValueFromRenderState(e,{vars:i,style:r}){delete i[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;St(e)&&(this.childSubscription=e.on("change",i=>{this.current&&(this.current.textContent=`${i}`)}))}}class Fa{constructor(e){this.isMounted=!1,this.node=e}update(){}}function T1({top:t,left:e,right:i,bottom:r}){return{x:{min:e,max:i},y:{min:t,max:r}}}function fA({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function pA(t,e){if(!e)return t;const i=e({x:t.left,y:t.top}),r=e({x:t.right,y:t.bottom});return{top:i.y,left:i.x,bottom:r.y,right:r.x}}function hh(t){return t===void 0||t===1}function rf({scale:t,scaleX:e,scaleY:i}){return!hh(t)||!hh(e)||!hh(i)}function pi(t){return rf(t)||E1(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function E1(t){return Sv(t.x)||Sv(t.y)}function Sv(t){return t&&t!=="0%"}function hc(t,e,i){const r=t-i,o=e*r;return i+o}function jv(t,e,i,r,o){return o!==void 0&&(t=hc(t,o,r)),hc(t,i,r)+e}function sf(t,e=0,i=1,r,o){t.min=jv(t.min,e,i,r,o),t.max=jv(t.max,e,i,r,o)}function C1(t,{x:e,y:i}){sf(t.x,e.translate,e.scale,e.originPoint),sf(t.y,i.translate,i.scale,i.originPoint)}const kv=.999999999999,_v=1.0000000000001;function mA(t,e,i,r=!1){var h;const o=i.length;if(!o)return;e.x=e.y=1;let c,d;for(let p=0;p<o;p++){c=i[p],d=c.projectionDelta;const{visualElement:g}=c.options;g&&g.props.style&&g.props.style.display==="contents"||(r&&c.options.layoutScroll&&c.scroll&&c!==c.root&&(Bn(t.x,-c.scroll.offset.x),Bn(t.y,-c.scroll.offset.y)),d&&(e.x*=d.x.scale,e.y*=d.y.scale,C1(t,d)),r&&pi(c.latestValues)&&Gl(t,c.latestValues,(h=c.layout)==null?void 0:h.layoutBox))}e.x<_v&&e.x>kv&&(e.x=1),e.y<_v&&e.y>kv&&(e.y=1)}function Bn(t,e){t.min+=e,t.max+=e}function Tv(t,e,i,r,o=.5){const c=qe(t.min,t.max,o);sf(t,e,i,c,r)}function Ev(t,e){return typeof t=="string"?parseFloat(t)/100*(e.max-e.min):t}function Gl(t,e,i){const r=i??t;Tv(t.x,Ev(e.x,r.x),e.scaleX,e.scale,e.originX),Tv(t.y,Ev(e.y,r.y),e.scaleY,e.scale,e.originY)}function A1(t,e){return T1(pA(t.getBoundingClientRect(),e))}function gA(t,e,i){const r=A1(t,i),{scroll:o}=e;return o&&(Bn(r.x,o.offset.x),Bn(r.y,o.offset.y)),r}const yA={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},vA=Cr.length;function bA(t,e,i){let r="",o=!0;for(let d=0;d<vA;d++){const h=Cr[d],p=t[h];if(p===void 0)continue;let g=!0;if(typeof p=="number")g=p===(h.startsWith("scale")?1:0);else{const y=parseFloat(p);g=h.startsWith("scale")?y===1:y===0}if(!g||i){const y=nf(p,uc[h]);if(!g){o=!1;const v=yA[h]||h;r+=`${v}(${y}) `}i&&(e[h]=y)}}const c=t.pathRotation;return c&&(o=!1,r+=`rotate(${nf(c,uc.pathRotation)}) `),r=r.trim(),i?r=i(e,o?"":r):o&&(r="none"),r}function Yf(t,e,i){const{style:r,vars:o,transformOrigin:c}=t;let d=!1,h=!1;for(const p in e){const g=e[p];if(Ar.has(p)){d=!0;continue}else if(Vx(p)){o[p]=g;continue}else{const y=nf(g,uc[p]);p.startsWith("origin")?(h=!0,c[p]=y):r[p]=y}}if(e.transform||(d||i?r.transform=bA(e,t.transform,i):r.transform&&(r.transform="none")),h){const{originX:p="50%",originY:g="50%",originZ:y=0}=c;r.transformOrigin=`${p} ${g} ${y}`}}function N1(t,{style:e,vars:i},r,o){const c=t.style;let d;for(d in e)c[d]=e[d];o==null||o.applyProjectionStyles(c,r);for(d in i)c.setProperty(d,i[d])}function Cv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Ts={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(oe.test(t))t=parseFloat(t);else return t;const i=Cv(t,e.target.x),r=Cv(t,e.target.y);return`${i}% ${r}%`}},xA={correct:(t,{treeScale:e,projectionDelta:i})=>{const r=t,o=Tn.parse(t);if(o.length>5)return r;const c=Tn.createTransformer(t),d=typeof o[0]!="number"?1:0,h=i.x.scale*e.x,p=i.y.scale*e.y;o[0+d]/=h,o[1+d]/=p;const g=qe(h,p,.5);return typeof o[2+d]=="number"&&(o[2+d]/=g),typeof o[3+d]=="number"&&(o[3+d]/=g),c(o)}},of={borderRadius:{...Ts,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ts,borderTopRightRadius:Ts,borderBottomLeftRadius:Ts,borderBottomRightRadius:Ts,boxShadow:xA};function R1(t,{layout:e,layoutId:i}){return Ar.has(t)||t.startsWith("origin")||(e||i!==void 0)&&(!!of[t]||t==="opacity")}function Xf(t,e,i){var d;const r=t.style,o=e==null?void 0:e.style,c={};if(!r)return c;for(const h in r)(St(r[h])||o&&St(o[h])||R1(h,t)||((d=i==null?void 0:i.getValue(h))==null?void 0:d.liveStyle)!==void 0)&&(c[h]=r[h]);return c}function wA(t){return window.getComputedStyle(t)}class SA extends _1{constructor(){super(...arguments),this.type="html",this.renderInstance=N1}readValueFromInstance(e,i){var r;if(Ar.has(i))return(r=this.projection)!=null&&r.isProjecting?Fh(i):$E(e,i);{const o=wA(e),c=(Vx(i)?o.getPropertyValue(i):o[i])||0;return typeof c=="string"?c.trim():c}}measureInstanceViewportBox(e,{transformPagePoint:i}){return A1(e,i)}build(e,i,r){Yf(e,i,r.transformTemplate)}scrapeMotionValuesFromProps(e,i,r){return Xf(e,i,r)}}const jA={offset:"stroke-dashoffset",array:"stroke-dasharray"},kA={offset:"strokeDashoffset",array:"strokeDasharray"};function _A(t,e,i=1,r=0,o=!0){t.pathLength=1;const c=o?jA:kA;t[c.offset]=`${-r}`,t[c.array]=`${e} ${i}`}const TA=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function O1(t,{attrX:e,attrY:i,attrScale:r,pathLength:o,pathSpacing:c=1,pathOffset:d=0,...h},p,g,y){if(Yf(t,h,g),p){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:v,style:x}=t;v.transform&&(x.transform=v.transform,delete v.transform),(x.transform||v.transformOrigin)&&(x.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),x.transform&&(x.transformBox=(y==null?void 0:y.transformBox)??"fill-box",delete v.transformBox);for(const w of TA)v[w]!==void 0&&(x[w]=v[w],delete v[w]);e!==void 0&&(v.x=e),i!==void 0&&(v.y=i),r!==void 0&&(v.scale=r),o!==void 0&&_A(v,o,c,d,!1)}const D1=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),M1=t=>typeof t=="string"&&t.toLowerCase()==="svg";function EA(t,e,i,r){N1(t,e,void 0,r);for(const o in e.attrs)t.setAttribute(D1.has(o)?o:$f(o),e.attrs[o])}function L1(t,e,i){const r=Xf(t,e,i);for(const o in t)if(St(t[o])||St(e[o])){const c=Cr.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[c]=t[o]}return r}class CA extends _1{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ht}getBaseTargetFromProps(e,i){return e[i]}readValueFromInstance(e,i){if(Ar.has(i)){const r=m1(i);return r&&r.default||0}return i=D1.has(i)?i:$f(i),e.getAttribute(i)}scrapeMotionValuesFromProps(e,i,r){return L1(e,i,r)}build(e,i,r){O1(e,i,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,i,r,o){EA(e,i,r,o)}mount(e){this.isSVGTag=M1(e.tagName),super.mount(e)}}const AA=Kf.length;function z1(t){if(!t)return;if(!t.isControllingVariants){const i=t.parent?z1(t.parent)||{}:{};return t.props.initial!==void 0&&(i.initial=t.props.initial),i}const e={};for(let i=0;i<AA;i++){const r=Kf[i],o=t.props[r];(Js(o)||o===!1)&&(e[r]=o)}return e}function U1(t,e){if(!Array.isArray(e))return!1;const i=e.length;if(i!==t.length)return!1;for(let r=0;r<i;r++)if(e[r]!==t[r])return!1;return!0}const NA=[...Gf].reverse(),RA=Gf.length;function OA(t){return e=>Promise.all(e.map(({animation:i,options:r})=>AC(t,i,r)))}function DA(t){let e=OA(t),i=Av(),r=!0,o=!1;const c=g=>(y,v)=>{var w;const x=wi(t,v,g==="exit"?(w=t.presenceContext)==null?void 0:w.custom:void 0);if(x){const{transition:S,transitionEnd:_,...E}=x;y={...y,...E,..._}}return y};function d(g){e=g(t)}function h(g){const{props:y}=t,v=z1(t.parent)||{},x=[],w=new Set;let S={},_=1/0;for(let T=0;T<RA;T++){const O=NA[T],R=i[O],L=y[O]!==void 0?y[O]:v[O],K=Js(L),W=O===g?R.isActive:null;W===!1&&(_=T);let F=L===v[O]&&L!==y[O]&&K;if(F&&(r||o)&&t.manuallyAnimateOnMount&&(F=!1),R.protectedKeys={...S},!R.isActive&&W===null||!L&&!R.prevProp||Tc(L)||typeof L=="boolean")continue;if(O==="exit"&&R.isActive&&W!==!0){R.prevResolvedValues&&(S={...S,...R.prevResolvedValues});continue}const Y=MA(R.prevProp,L);let ee=Y||O===g&&R.isActive&&!F&&K||T>_&&K,re=!1;const me=Array.isArray(L)?L:[L];let fe=me.reduce(c(O),{});W===!1&&(fe={});const{prevResolvedValues:Oe={}}=R,Ne={...Oe,...fe},je=Z=>{ee=!0,w.has(Z)&&(re=!0,w.delete(Z)),R.needsAnimating[Z]=!0;const H=t.getValue(Z);H&&(H.liveStyle=!1)};for(const Z in Ne){const H=fe[Z],ae=Oe[Z];if(S.hasOwnProperty(Z))continue;let N=!1;Jh(H)&&Jh(ae)?N=!U1(H,ae)||Y:N=H!==ae,N?H!=null?je(Z):w.add(Z):H!==void 0&&w.has(Z)?je(Z):R.protectedKeys[Z]=!0}R.prevProp=L,R.prevResolvedValues=fe,R.isActive&&(S={...S,...fe}),(r||o)&&t.blockInitialAnimation&&(ee=!1);const C=F&&Y;ee&&(!C||re)&&x.push(...me.map(Z=>{const H={type:O};if(typeof Z=="string"&&(r||o)&&!C&&t.manuallyAnimateOnMount&&t.parent){const{parent:ae}=t,N=wi(ae,Z);if(ae.enteringChildren&&N){const{delayChildren:V}=N.transition||{};H.delay=s1(ae.enteringChildren,t,V)}}return{animation:Z,options:H}}))}if(w.size){const T={};if(typeof y.initial!="boolean"){const O=wi(t,Array.isArray(y.initial)?y.initial[0]:y.initial);O&&O.transition&&(T.transition=O.transition)}w.forEach(O=>{const R=t.getBaseTarget(O),L=t.getValue(O);L&&(L.liveStyle=!0),T[O]=R??null}),x.push({animation:T})}let E=!!x.length;return r&&(y.initial===!1||y.initial===y.animate)&&!t.manuallyAnimateOnMount&&(E=!1),r=!1,o=!1,E?e(x):Promise.resolve()}function p(g,y){var x;if(i[g].isActive===y)return Promise.resolve();(x=t.variantChildren)==null||x.forEach(w=>{var S;return(S=w.animationState)==null?void 0:S.setActive(g,y)}),i[g].isActive=y;const v=h(g);for(const w in i)i[w].protectedKeys={};return v}return{animateChanges:h,setActive:p,setAnimateFunction:d,getState:()=>i,reset:()=>{i=Av(),o=!0}}}function MA(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!U1(e,t):!1}function hi(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Av(){return{animate:hi(!0),whileInView:hi(),whileHover:hi(),whileTap:hi(),whileDrag:hi(),whileFocus:hi(),exit:hi()}}function lf(t,e){t.min=e.min,t.max=e.max}function xn(t,e){lf(t.x,e.x),lf(t.y,e.y)}function Nv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const B1=1e-4,LA=1-B1,zA=1+B1,P1=.01,UA=0-P1,BA=0+P1;function Ct(t){return t.max-t.min}function PA(t,e,i){return Math.abs(t-e)<=i}function Rv(t,e,i,r=.5){t.origin=r,t.originPoint=qe(e.min,e.max,t.origin),t.scale=Ct(i)/Ct(e),t.translate=qe(i.min,i.max,t.origin)-t.originPoint,(t.scale>=LA&&t.scale<=zA||isNaN(t.scale))&&(t.scale=1),(t.translate>=UA&&t.translate<=BA||isNaN(t.translate))&&(t.translate=0)}function Ps(t,e,i,r){Rv(t.x,e.x,i.x,r?r.originX:void 0),Rv(t.y,e.y,i.y,r?r.originY:void 0)}function Ov(t,e,i,r=0){const o=r?qe(i.min,i.max,r):i.min;t.min=o+e.min,t.max=t.min+Ct(e)}function VA(t,e,i,r){Ov(t.x,e.x,i.x,r==null?void 0:r.x),Ov(t.y,e.y,i.y,r==null?void 0:r.y)}function Dv(t,e,i,r=0){const o=r?qe(i.min,i.max,r):i.min;t.min=e.min-o,t.max=t.min+Ct(e)}function fc(t,e,i,r){Dv(t.x,e.x,i.x,r==null?void 0:r.x),Dv(t.y,e.y,i.y,r==null?void 0:r.y)}function Mv(t,e,i,r,o){return t-=e,t=hc(t,1/i,r),o!==void 0&&(t=hc(t,1/o,r)),t}function HA(t,e=0,i=1,r=.5,o,c=t,d=t){if(Pn.test(e)&&(e=parseFloat(e),e=qe(d.min,d.max,e/100)-d.min),typeof e!="number")return;let h=qe(c.min,c.max,r);t===c&&(h-=e),t.min=Mv(t.min,e,i,h,o),t.max=Mv(t.max,e,i,h,o)}function Lv(t,e,[i,r,o],c,d){HA(t,e[i],e[r],e[o],e.scale,c,d)}const $A=["x","scaleX","originX"],IA=["y","scaleY","originY"];function zv(t,e,i,r){Lv(t.x,e,$A,i?i.x:void 0,r?r.x:void 0),Lv(t.y,e,IA,i?i.y:void 0,r?r.y:void 0)}function Uv(t){return t.translate===0&&t.scale===1}function V1(t){return Uv(t.x)&&Uv(t.y)}function Bv(t,e){return t.min===e.min&&t.max===e.max}function qA(t,e){return Bv(t.x,e.x)&&Bv(t.y,e.y)}function Pv(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function H1(t,e){return Pv(t.x,e.x)&&Pv(t.y,e.y)}function Vv(t){return Ct(t.x)/Ct(t.y)}function Hv(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Ln(t){return[t("x"),t("y")]}function FA(t,e,i){let r="";const o=t.x.translate/e.x,c=t.y.translate/e.y,d=(i==null?void 0:i.z)||0;if((o||c||d)&&(r=`translate3d(${o}px, ${c}px, ${d}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),i){const{transformPerspective:g,rotate:y,pathRotation:v,rotateX:x,rotateY:w,skewX:S,skewY:_}=i;g&&(r=`perspective(${g}px) ${r}`),y&&(r+=`rotate(${y}deg) `),v&&(r+=`rotate(${v}deg) `),x&&(r+=`rotateX(${x}deg) `),w&&(r+=`rotateY(${w}deg) `),S&&(r+=`skewX(${S}deg) `),_&&(r+=`skewY(${_}deg) `)}const h=t.x.scale*e.x,p=t.y.scale*e.y;return(h!==1||p!==1)&&(r+=`scale(${h}, ${p})`),r||"none"}const $1=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],GA=$1.length,$v=t=>typeof t=="string"?parseFloat(t):t,Iv=t=>typeof t=="number"||oe.test(t);function KA(t,e,i,r,o,c){o?(t.opacity=qe(0,i.opacity??1,YA(r)),t.opacityExit=qe(e.opacity??1,0,XA(r))):c&&(t.opacity=qe(e.opacity??1,i.opacity??1,r));for(let d=0;d<GA;d++){const h=$1[d];let p=qv(e,h),g=qv(i,h);if(p===void 0&&g===void 0)continue;p||(p=0),g||(g=0),p===0||g===0||Iv(p)===Iv(g)?(t[h]=Math.max(qe($v(p),$v(g),r),0),(Pn.test(g)||Pn.test(p))&&(t[h]+="%")):t[h]=g}(e.rotate||i.rotate)&&(t.rotate=qe(e.rotate||0,i.rotate||0,r))}function qv(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const YA=I1(0,.5,Mx),XA=I1(.5,.95,fn);function I1(t,e,i){return r=>r<t?0:r>e?1:i(Xs(t,e,r))}function WA(t,e,i){const r=St(t)?t:Sr(t);return r.start(Vf("",r,e,i)),r.animation}function Qs(t,e,i,r={passive:!0}){return t.addEventListener(e,i,r),()=>t.removeEventListener(e,i)}const JA=(t,e)=>t.depth-e.depth;class QA{constructor(){this.children=[],this.isDirty=!1}add(e){Ef(this.children,e),this.isDirty=!0}remove(e){rc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(JA),this.isDirty=!1,this.children.forEach(e)}}function ZA(t,e){const i=Et.now(),r=({timestamp:o})=>{const c=o-i;c>=e&&(qa(r),t(c-e))};return Fe.setup(r,!0),()=>qa(r)}function Kl(t){return St(t)?t.get():t}class e4{constructor(){this.members=[]}add(e){Ef(this.members,e);for(let i=this.members.length-1;i>=0;i--){const r=this.members[i];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(rc(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(rc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const i=this.members[this.members.length-1];i&&this.promote(i)}}relegate(e){var i;for(let r=this.members.indexOf(e)-1;r>=0;r--){const o=this.members[r];if(o.isPresent!==!1&&((i=o.instance)==null?void 0:i.isConnected)!==!1)return this.promote(o),!0}return!1}promote(e,i){var o;const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:c}=r.options,{layoutDependency:d}=e.options;(c===void 0||c!==d)&&(e.resumeFrom=r,i&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),(o=e.root)!=null&&o.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{var i,r,o,c,d;(r=(i=e.options).onExitComplete)==null||r.call(i),(d=(o=e.resumingFrom)==null?void 0:(c=o.options).onExitComplete)==null||d.call(c)})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){var e;(e=this.lead)!=null&&e.snapshot&&(this.lead.snapshot=void 0)}}const Yl={hasAnimatedSinceResize:!0,hasEverUpdated:!1},fh=["","X","Y","Z"],t4=1e3;let n4=0;function ph(t,e,i,r){const{latestValues:o}=e;o[t]&&(i[t]=o[t],e.setStaticValue(t,0),r&&(r[t]=0))}function q1(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const i=d1(e);if(window.MotionHasOptimisedAnimation(i,"transform")){const{layout:o,layoutId:c}=t.options;window.MotionCancelOptimisedAnimation(i,"transform",Fe,!(o||c))}const{parent:r}=t;r&&!r.hasCheckedOptimisedAppear&&q1(r)}function F1({attachResizeListener:t,defaultParent:e,measureScroll:i,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(d={},h=e==null?void 0:e()){this.id=n4++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(r4),this.nodes.forEach(d4),this.nodes.forEach(h4),this.nodes.forEach(s4)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=d,this.root=h?h.root||h:this,this.path=h?[...h.path,h]:[],this.parent=h,this.depth=h?h.depth+1:0;for(let p=0;p<this.path.length;p++)this.path[p].shouldResetTransform=!0;this.root===this&&(this.nodes=new QA)}addEventListener(d,h){return this.eventHandlers.has(d)||this.eventHandlers.set(d,new Af),this.eventHandlers.get(d).add(h)}notifyListeners(d,...h){const p=this.eventHandlers.get(d);p&&p.notify(...h)}hasListeners(d){return this.eventHandlers.has(d)}mount(d){if(this.instance)return;this.isSVG=Ff(d)&&!iA(d),this.instance=d;const{layoutId:h,layout:p,visualElement:g}=this.options;if(g&&!g.current&&g.mount(d),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(p||h)&&(this.isLayoutDirty=!0),t){let y,v=0;const x=()=>this.root.updateBlockedByResize=!1;Fe.read(()=>{v=window.innerWidth}),t(d,()=>{const w=window.innerWidth;w!==v&&(v=w,this.root.updateBlockedByResize=!0,y&&y(),y=ZA(x,250),Yl.hasAnimatedSinceResize&&(Yl.hasAnimatedSinceResize=!1,this.nodes.forEach(Kv)))})}h&&this.root.registerSharedNode(h,this),this.options.animate!==!1&&g&&(h||p)&&this.addEventListener("didUpdate",({delta:y,hasLayoutChanged:v,hasRelativeLayoutChanged:x,layout:w})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const S=this.options.transition||g.getDefaultTransition()||y4,{onLayoutAnimationStart:_,onLayoutAnimationComplete:E}=g.getProps(),T=!this.targetLayout||!H1(this.targetLayout,w),O=!v&&x;if(this.options.layoutRoot||this.resumeFrom||O||v&&(T||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const R={...Pf(S,"layout"),onPlay:_,onComplete:E};(g.shouldReduceMotion||this.options.layoutRoot)&&(R.delay=0,R.type=!1),this.startAnimation(R),this.setAnimationOrigin(y,O,R.path)}else v||Kv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=w})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const d=this.getStack();d&&d.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),qa(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(f4),this.animationId++)}getTransformTemplate(){const{visualElement:d}=this.options;return d&&d.getProps().transformTemplate}willUpdate(d=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&q1(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let y=0;y<this.path.length;y++){const v=this.path[y];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:h,layout:p}=this.options;if(h===void 0&&!p)return;const g=this.getTransformTemplate();this.prevTransformTemplateValue=g?g(this.latestValues,""):void 0,this.updateSnapshot(),d&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const p=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),p&&this.nodes.forEach(l4),this.nodes.forEach(Fv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Gv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(c4),this.nodes.forEach(u4),this.nodes.forEach(a4),this.nodes.forEach(i4)):this.nodes.forEach(Gv),this.clearAllSnapshots();const h=Et.now();wt.delta=Vn(0,1e3/60,h-wt.timestamp),wt.timestamp=h,wt.isProcessing=!0,rh.update.process(wt),rh.preRender.process(wt),rh.render.process(wt),wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,If.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(o4),this.sharedNodes.forEach(p4)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Fe.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Fe.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ct(this.snapshot.measuredBox.x)&&!Ct(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let p=0;p<this.path.length;p++)this.path[p].updateScroll();const d=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ht()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:h}=this.options;h&&h.notify("LayoutMeasure",this.layout.layoutBox,d?d.layoutBox:void 0)}updateScroll(d="measure"){let h=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===d&&(h=!1),h&&this.instance){const p=r(this.instance);this.scroll={animationId:this.root.animationId,phase:d,isRoot:p,offset:i(this.instance),wasRoot:this.scroll?this.scroll.isRoot:p}}}resetTransform(){if(!o)return;const d=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,h=this.projectionDelta&&!V1(this.projectionDelta),p=this.getTransformTemplate(),g=p?p(this.latestValues,""):void 0,y=g!==this.prevTransformTemplateValue;d&&this.instance&&(h||pi(this.latestValues)||y)&&(o(this.instance,g),this.shouldResetTransform=!1,this.scheduleRender())}measure(d=!0){const h=this.measurePageBox();let p=this.removeElementScroll(h);return d&&(p=this.removeTransform(p)),v4(p),{animationId:this.root.animationId,measuredBox:h,layoutBox:p,latestValues:{},source:this.id}}measurePageBox(){var g;const{visualElement:d}=this.options;if(!d)return ht();const h=d.measureViewportBox();if(!(((g=this.scroll)==null?void 0:g.wasRoot)||this.path.some(b4))){const{scroll:y}=this.root;y&&(Bn(h.x,y.offset.x),Bn(h.y,y.offset.y))}return h}removeElementScroll(d){var p;const h=ht();if(xn(h,d),(p=this.scroll)!=null&&p.wasRoot)return h;for(let g=0;g<this.path.length;g++){const y=this.path[g],{scroll:v,options:x}=y;y!==this.root&&v&&x.layoutScroll&&(v.wasRoot&&xn(h,d),Bn(h.x,v.offset.x),Bn(h.y,v.offset.y))}return h}applyTransform(d,h=!1,p){var y,v;const g=p||ht();xn(g,d);for(let x=0;x<this.path.length;x++){const w=this.path[x];!h&&w.options.layoutScroll&&w.scroll&&w!==w.root&&(Bn(g.x,-w.scroll.offset.x),Bn(g.y,-w.scroll.offset.y)),pi(w.latestValues)&&Gl(g,w.latestValues,(y=w.layout)==null?void 0:y.layoutBox)}return pi(this.latestValues)&&Gl(g,this.latestValues,(v=this.layout)==null?void 0:v.layoutBox),g}removeTransform(d){var p;const h=ht();xn(h,d);for(let g=0;g<this.path.length;g++){const y=this.path[g];if(!pi(y.latestValues))continue;let v;y.instance&&(rf(y.latestValues)&&y.updateSnapshot(),v=ht(),xn(v,y.measurePageBox())),zv(h,y.latestValues,(p=y.snapshot)==null?void 0:p.layoutBox,v)}return pi(this.latestValues)&&zv(h,this.latestValues),h}setTargetDelta(d){this.targetDelta=d,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(d){this.options={...this.options,...d,crossfade:d.crossfade!==void 0?d.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(d=!1){var w;const h=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=h.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=h.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=h.isSharedProjectionDirty);const p=!!this.resumingFrom||this!==h;if(!(d||p&&this.isSharedProjectionDirty||this.isProjectionDirty||(w=this.parent)!=null&&w.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:y,layoutId:v}=this.options;if(!this.layout||!(y||v))return;this.resolvedRelativeTargetAt=wt.timestamp;const x=this.getClosestProjectingParent();x&&this.linkedParentVersion!==x.layoutVersion&&!x.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&x&&x.layout?this.createRelativeTarget(x,this.layout.layoutBox,x.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ht(),this.targetWithTransforms=ht()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),VA(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):xn(this.target,this.layout.layoutBox),C1(this.target,this.targetDelta)):xn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&x&&!!x.resumingFrom==!!this.resumingFrom&&!x.options.layoutScroll&&x.target&&this.animationProgress!==1?this.createRelativeTarget(x,this.target,x.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||rf(this.parent.latestValues)||E1(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(d,h,p){this.relativeParent=d,this.linkedParentVersion=d.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ht(),this.relativeTargetOrigin=ht(),fc(this.relativeTargetOrigin,h,p,this.options.layoutAnchor||void 0),xn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var S;const d=this.getLead(),h=!!this.resumingFrom||this!==d;let p=!0;if((this.isProjectionDirty||(S=this.parent)!=null&&S.isProjectionDirty)&&(p=!1),h&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(p=!1),this.resolvedRelativeTargetAt===wt.timestamp&&(p=!1),p)return;const{layout:g,layoutId:y}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(g||y))return;xn(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,x=this.treeScale.y;mA(this.layoutCorrected,this.treeScale,this.path,h),d.layout&&!d.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(d.target=d.layout.layoutBox,d.targetWithTransforms=ht());const{target:w}=d;if(!w){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Nv(this.prevProjectionDelta.x,this.projectionDelta.x),Nv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ps(this.projectionDelta,this.layoutCorrected,w,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==x||!Hv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",w))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(d=!0){var h;if((h=this.options.visualElement)==null||h.scheduleRender(),d){const p=this.getStack();p&&p.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=br(),this.projectionDelta=br(),this.projectionDeltaWithTransform=br()}setAnimationOrigin(d,h=!1,p){const g=this.snapshot,y=g?g.latestValues:{},v={...this.latestValues},x=br();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!h;const w=ht(),S=g?g.source:void 0,_=this.layout?this.layout.source:void 0,E=S!==_,T=this.getStack(),O=!T||T.members.length<=1,R=!!(E&&!O&&this.options.crossfade===!0&&!this.path.some(g4));this.animationProgress=0;let L;const K=p==null?void 0:p.interpolateProjection(d);this.mixTargetDelta=W=>{const F=W/1e3,Y=K==null?void 0:K(F);Y?(x.x.translate=Y.x,x.x.scale=qe(d.x.scale,1,F),x.x.origin=d.x.origin,x.x.originPoint=d.x.originPoint,x.y.translate=Y.y,x.y.scale=qe(d.y.scale,1,F),x.y.origin=d.y.origin,x.y.originPoint=d.y.originPoint):(Yv(x.x,d.x,F),Yv(x.y,d.y,F)),this.setTargetDelta(x),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(fc(w,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),m4(this.relativeTarget,this.relativeTargetOrigin,w,F),L&&qA(this.relativeTarget,L)&&(this.isProjectionDirty=!1),L||(L=ht()),xn(L,this.relativeTarget)),E&&(this.animationValues=v,KA(v,y,this.latestValues,F,R,O)),Y&&Y.rotate!==void 0&&(this.animationValues||(this.animationValues=v),this.animationValues.pathRotation=Y.rotate),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=F},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(d){var h,p,g;this.notifyListeners("animationStart"),(h=this.currentAnimation)==null||h.stop(),(g=(p=this.resumingFrom)==null?void 0:p.currentAnimation)==null||g.stop(),this.pendingAnimation&&(qa(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Fe.update(()=>{Yl.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Sr(0)),this.motionValue.jump(0,!1),this.currentAnimation=WA(this.motionValue,[0,1e3],{...d,velocity:0,isSync:!0,onUpdate:y=>{this.mixTargetDelta(y),d.onUpdate&&d.onUpdate(y)},onStop:()=>{},onComplete:()=>{d.onComplete&&d.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const d=this.getStack();d&&d.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(t4),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const d=this.getLead();let{targetWithTransforms:h,target:p,layout:g,latestValues:y}=d;if(!(!h||!p||!g)){if(this!==d&&this.layout&&g&&G1(this.options.animationType,this.layout.layoutBox,g.layoutBox)){p=this.target||ht();const v=Ct(this.layout.layoutBox.x);p.x.min=d.target.x.min,p.x.max=p.x.min+v;const x=Ct(this.layout.layoutBox.y);p.y.min=d.target.y.min,p.y.max=p.y.min+x}xn(h,p),Gl(h,y),Ps(this.projectionDeltaWithTransform,this.layoutCorrected,h,y)}}registerSharedNode(d,h){this.sharedNodes.has(d)||this.sharedNodes.set(d,new e4),this.sharedNodes.get(d).add(h);const g=h.options.initialPromotionConfig;h.promote({transition:g?g.transition:void 0,preserveFollowOpacity:g&&g.shouldPreserveFollowOpacity?g.shouldPreserveFollowOpacity(h):void 0})}isLead(){const d=this.getStack();return d?d.lead===this:!0}getLead(){var h;const{layoutId:d}=this.options;return d?((h=this.getStack())==null?void 0:h.lead)||this:this}getPrevLead(){var h;const{layoutId:d}=this.options;return d?(h=this.getStack())==null?void 0:h.prevLead:void 0}getStack(){const{layoutId:d}=this.options;if(d)return this.root.sharedNodes.get(d)}promote({needsReset:d,transition:h,preserveFollowOpacity:p}={}){const g=this.getStack();g&&g.promote(this,p),d&&(this.projectionDelta=void 0,this.needsReset=!0),h&&this.setOptions({transition:h})}relegate(){const d=this.getStack();return d?d.relegate(this):!1}resetSkewAndRotation(){const{visualElement:d}=this.options;if(!d)return;let h=!1;const{latestValues:p}=d;if((p.z||p.rotate||p.rotateX||p.rotateY||p.rotateZ||p.skewX||p.skewY)&&(h=!0),!h)return;const g={};p.z&&ph("z",d,g,this.animationValues);for(let y=0;y<fh.length;y++)ph(`rotate${fh[y]}`,d,g,this.animationValues),ph(`skew${fh[y]}`,d,g,this.animationValues);d.render();for(const y in g)d.setStaticValue(y,g[y]),this.animationValues&&(this.animationValues[y]=g[y]);d.scheduleRender()}applyProjectionStyles(d,h){if(!this.instance||this.isSVG)return;if(!this.isVisible){d.visibility="hidden";return}const p=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,d.visibility="",d.opacity="",d.pointerEvents=Kl(h==null?void 0:h.pointerEvents)||"",d.transform=p?p(this.latestValues,""):"none";return}const g=this.getLead();if(!this.projectionDelta||!this.layout||!g.target){this.options.layoutId&&(d.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,d.pointerEvents=Kl(h==null?void 0:h.pointerEvents)||""),this.hasProjected&&!pi(this.latestValues)&&(d.transform=p?p({},""):"none",this.hasProjected=!1);return}d.visibility="";const y=g.animationValues||g.latestValues;this.applyTransformsToTarget();let v=FA(this.projectionDeltaWithTransform,this.treeScale,y);p&&(v=p(y,v)),d.transform=v;const{x,y:w}=this.projectionDelta;d.transformOrigin=`${x.origin*100}% ${w.origin*100}% 0`,g.animationValues?d.opacity=g===this?y.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:y.opacityExit:d.opacity=g===this?y.opacity!==void 0?y.opacity:"":y.opacityExit!==void 0?y.opacityExit:0;for(const S in of){if(y[S]===void 0)continue;const{correct:_,applyTo:E,isCSSVariable:T}=of[S],O=v==="none"?y[S]:_(y[S],g);if(E){const R=E.length;for(let L=0;L<R;L++)d[E[L]]=O}else T?this.options.visualElement.renderState.vars[S]=O:d[S]=O}this.options.layoutId&&(d.pointerEvents=g===this?Kl(h==null?void 0:h.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(d=>{var h;return(h=d.currentAnimation)==null?void 0:h.stop()}),this.root.nodes.forEach(Fv),this.root.sharedNodes.clear()}}}function a4(t){t.updateLayout()}function i4(t){var i;const e=((i=t.resumeFrom)==null?void 0:i.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:o}=t.layout,{animationType:c}=t.options,d=e.source!==t.layout.source;if(c==="size")Ln(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Ct(x);x.min=r[v].min,x.max=x.min+w});else if(c==="x"||c==="y"){const v=c==="x"?"y":"x";lf(d?e.measuredBox[v]:e.layoutBox[v],r[v])}else G1(c,e.layoutBox,r)&&Ln(v=>{const x=d?e.measuredBox[v]:e.layoutBox[v],w=Ct(r[v]);x.max=x.min+w,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[v].max=t.relativeTarget[v].min+w)});const h=br();Ps(h,r,e.layoutBox);const p=br();d?Ps(p,t.applyTransform(o,!0),e.measuredBox):Ps(p,r,e.layoutBox);const g=!V1(h);let y=!1;if(!t.resumeFrom){const v=t.getClosestProjectingParent();if(v&&!v.resumeFrom){const{snapshot:x,layout:w}=v;if(x&&w){const S=t.options.layoutAnchor||void 0,_=ht();fc(_,e.layoutBox,x.layoutBox,S);const E=ht();fc(E,r,w.layoutBox,S),H1(_,E)||(y=!0),v.options.layoutRoot&&(t.relativeTarget=E,t.relativeTargetOrigin=_,t.relativeParent=v)}}}t.notifyListeners("didUpdate",{layout:r,snapshot:e,delta:p,layoutDelta:h,hasLayoutChanged:g,hasRelativeLayoutChanged:y})}else if(t.isLead()){const{onExitComplete:r}=t.options;r&&r()}t.options.transition=void 0}function r4(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function s4(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function o4(t){t.clearSnapshot()}function Fv(t){t.clearMeasurements()}function l4(t){t.isLayoutDirty=!0,t.updateLayout()}function Gv(t){t.isLayoutDirty=!1}function c4(t){t.isAnimationBlocked&&t.layout&&!t.isLayoutDirty&&(t.snapshot=t.layout,t.isLayoutDirty=!0)}function u4(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function Kv(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function d4(t){t.resolveTargetDelta()}function h4(t){t.calcProjection()}function f4(t){t.resetSkewAndRotation()}function p4(t){t.removeLeadSnapshot()}function Yv(t,e,i){t.translate=qe(e.translate,0,i),t.scale=qe(e.scale,1,i),t.origin=e.origin,t.originPoint=e.originPoint}function Xv(t,e,i,r){t.min=qe(e.min,i.min,r),t.max=qe(e.max,i.max,r)}function m4(t,e,i,r){Xv(t.x,e.x,i.x,r),Xv(t.y,e.y,i.y,r)}function g4(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const y4={duration:.45,ease:[.4,0,.1,1]},Wv=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),Jv=Wv("applewebkit/")&&!Wv("chrome/")?Math.round:fn;function Qv(t){t.min=Jv(t.min),t.max=Jv(t.max)}function v4(t){Qv(t.x),Qv(t.y)}function G1(t,e,i){return t==="position"||t==="preserve-aspect"&&!PA(Vv(e),Vv(i),.2)}function b4(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const x4=F1({attachResizeListener:(t,e)=>Qs(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),mh={current:void 0},K1=F1({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!mh.current){const t=new x4({});t.mount(window),t.setOptions({layoutScroll:!0}),mh.current=t}return mh.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Wf=k.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function Zv(t,e){if(typeof t=="function")return t(e);t!=null&&(t.current=e)}function w4(...t){return e=>{let i=!1;const r=t.map(o=>{const c=Zv(o,e);return!i&&typeof c=="function"&&(i=!0),c});if(i)return()=>{for(let o=0;o<r.length;o++){const c=r[o];typeof c=="function"?c():Zv(t[o],null)}}}}function S4(...t){return k.useCallback(w4(...t),t)}class j4 extends k.Component{getSnapshotBeforeUpdate(e){const i=this.props.childRef.current;if($l(i)&&e.isPresent&&!this.props.isPresent&&this.props.pop!==!1){const r=i.offsetParent,o=$l(r)&&r.offsetWidth||0,c=$l(r)&&r.offsetHeight||0,d=getComputedStyle(i),h=this.props.sizeRef.current;h.height=parseFloat(d.height),h.width=parseFloat(d.width),h.top=i.offsetTop,h.left=i.offsetLeft,h.right=o-h.width-h.left,h.bottom=c-h.height-h.top,h.direction=d.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function k4({children:t,isPresent:e,anchorX:i,anchorY:r,root:o,pop:c}){var x;const d=k.useId(),h=k.useRef(null),p=k.useRef({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:g}=k.useContext(Wf),y=((x=t.props)==null?void 0:x.ref)??(t==null?void 0:t.ref),v=S4(h,y);return k.useInsertionEffect(()=>{const{width:w,height:S,top:_,left:E,right:T,bottom:O,direction:R}=p.current;if(e||c===!1||!h.current||!w||!S)return;const L=R==="rtl",K=i==="left"?L?`right: ${T}`:`left: ${E}`:L?`left: ${E}`:`right: ${T}`,W=r==="bottom"?`bottom: ${O}`:`top: ${_}`;h.current.dataset.motionPopId=d;const F=document.createElement("style");g&&(F.nonce=g);const Y=o??document.head;return Y.appendChild(F),F.sheet&&F.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${w}px !important;
            height: ${S}px !important;
            ${K}px !important;
            ${W}px !important;
          }
        `),()=>{var ee;(ee=h.current)==null||ee.removeAttribute("data-motion-pop-id"),Y.contains(F)&&Y.removeChild(F)}},[e]),u.jsx(j4,{isPresent:e,childRef:h,sizeRef:p,pop:c,children:c===!1?t:k.cloneElement(t,{ref:v})})}const _4=({children:t,initial:e,isPresent:i,onExitComplete:r,custom:o,presenceAffectsLayout:c,mode:d,anchorX:h,anchorY:p,root:g})=>{const y=Tf(T4),v=k.useId();let x=!0,w=k.useMemo(()=>(x=!1,{id:v,initial:e,isPresent:i,custom:o,onExitComplete:S=>{y.set(S,!0);for(const _ of y.values())if(!_)return;r&&r()},register:S=>(y.set(S,!1),()=>y.delete(S))}),[i,y,r]);return c&&x&&(w={...w}),k.useMemo(()=>{y.forEach((S,_)=>y.set(_,!1))},[i]),k.useEffect(()=>{!i&&!y.size&&r&&r()},[i]),t=u.jsx(k4,{pop:d==="popLayout",isPresent:i,anchorX:h,anchorY:p,root:g,children:t}),u.jsx(kc.Provider,{value:w,children:t})};function T4(){return new Map}function Y1(t=!0){const e=k.useContext(kc);if(e===null)return[!0,null];const{isPresent:i,onExitComplete:r,register:o}=e,c=k.useId();k.useEffect(()=>{if(t)return o(c)},[t]);const d=k.useCallback(()=>t&&r&&r(c),[c,r,t]);return!i&&r?[!1,d]:[!0]}const Ll=t=>t.key||"";function eb(t){const e=[];return k.Children.forEach(t,i=>{k.isValidElement(i)&&e.push(i)}),e}const pn=({children:t,custom:e,initial:i=!0,onExitComplete:r,presenceAffectsLayout:o=!0,mode:c="sync",propagate:d=!1,anchorX:h="left",anchorY:p="top",root:g})=>{const[y,v]=Y1(d),x=k.useMemo(()=>eb(t),[t]),w=d&&!y?[]:x.map(Ll),S=k.useRef(!0),_=k.useRef(x),E=Tf(()=>new Map),T=k.useRef(new Set),[O,R]=k.useState(x),[L,K]=k.useState(x);Sx(()=>{S.current=!1,_.current=x;for(let Y=0;Y<L.length;Y++){const ee=Ll(L[Y]);w.includes(ee)?(E.delete(ee),T.current.delete(ee)):E.get(ee)!==!0&&E.set(ee,!1)}},[L,w.length,w.join("-")]);const W=[];if(x!==O){let Y=[...x];for(let ee=0;ee<L.length;ee++){const re=L[ee],me=Ll(re);w.includes(me)||(Y.splice(ee,0,re),W.push(re))}return c==="wait"&&W.length&&(Y=W),K(eb(Y)),R(x),null}const{forceRender:F}=k.useContext(_f);return u.jsx(u.Fragment,{children:L.map(Y=>{const ee=Ll(Y),re=d&&!y?!1:x===L||w.includes(ee),me=()=>{if(T.current.has(ee))return;if(E.has(ee))T.current.add(ee),E.set(ee,!0);else return;let fe=!0;E.forEach(Oe=>{Oe||(fe=!1)}),fe&&(F==null||F(),K(_.current),d&&(v==null||v()),r&&r())};return u.jsx(_4,{isPresent:re,initial:!S.current||i?void 0:!1,custom:e,presenceAffectsLayout:o,mode:c,root:g,onExitComplete:re?void 0:me,anchorX:h,anchorY:p,children:Y},ee)})})},X1=k.createContext({strict:!1}),tb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let nb=!1;function E4(){if(nb)return;const t={};for(const e in tb)t[e]={isEnabled:i=>tb[e].some(r=>!!i[r])};k1(t),nb=!0}function W1(){return E4(),dA()}function C4(t){const e=W1();for(const i in t)e[i]={...e[i],...t[i]};k1(e)}const A4=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function pc(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||A4.has(t)}let J1=t=>!pc(t);function N4(t){typeof t=="function"&&(J1=e=>e.startsWith("on")?!pc(e):t(e))}try{N4(require("@emotion/is-prop-valid").default)}catch{}function R4(t,e,i){const r={};for(const o in t)o==="values"&&typeof t.values=="object"||St(t[o])||(J1(o)||i===!0&&pc(o)||!e&&!pc(o)||t.draggable&&o.startsWith("onDrag"))&&(r[o]=t[o]);return r}const Cc=k.createContext({});function O4(t,e){if(Ec(t)){const{initial:i,animate:r}=t;return{initial:i===!1||Js(i)?i:void 0,animate:Js(r)?r:void 0}}return t.inherit!==!1?e:{}}function D4(t){const{initial:e,animate:i}=O4(t,k.useContext(Cc));return k.useMemo(()=>({initial:e,animate:i}),[ab(e),ab(i)])}function ab(t){return Array.isArray(t)?t.join(" "):t}const Jf=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Q1(t,e,i){for(const r in e)!St(e[r])&&!R1(r,i)&&(t[r]=e[r])}function M4({transformTemplate:t},e){return k.useMemo(()=>{const i=Jf();return Yf(i,e,t),Object.assign({},i.vars,i.style)},[e])}function L4(t,e){const i=t.style||{},r={};return Q1(r,i,t),Object.assign(r,M4(t,e)),r}function z4(t,e){const i={},r=L4(t,e);return t.drag&&t.dragListener!==!1&&(i.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(i.tabIndex=0),i.style=r,i}const Z1=()=>({...Jf(),attrs:{}});function U4(t,e,i,r){const o=k.useMemo(()=>{const c=Z1();return O1(c,e,M1(r),t.transformTemplate,t.style),{...c.attrs,style:{...c.style}}},[e]);if(t.style){const c={};Q1(c,t.style,t),o.style={...c,...o.style}}return o}const B4=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Qf(t){return typeof t!="string"||t.includes("-")?!1:!!(B4.indexOf(t)>-1||/[A-Z]/u.test(t))}function P4(t,e,i,{latestValues:r},o,c=!1,d){const p=(d??Qf(t)?U4:z4)(e,r,o,t),g=R4(e,typeof t=="string",c),y=t!==k.Fragment?{...g,...p,ref:i}:{},{children:v}=e,x=k.useMemo(()=>St(v)?v.get():v,[v]);return k.createElement(t,{...y,children:x})}function V4({scrapeMotionValuesFromProps:t,createRenderState:e},i,r,o){return{latestValues:H4(i,r,o,t),renderState:e()}}function H4(t,e,i,r){const o={},c=r(t,{});for(const x in c)o[x]=Kl(c[x]);let{initial:d,animate:h}=t;const p=Ec(t),g=S1(t);e&&g&&!p&&t.inherit!==!1&&(d===void 0&&(d=e.initial),h===void 0&&(h=e.animate));let y=i?i.initial===!1:!1;y=y||d===!1;const v=y?h:d;if(v&&typeof v!="boolean"&&!Tc(v)){const x=Array.isArray(v)?v:[v];for(let w=0;w<x.length;w++){const S=Hf(t,x[w]);if(S){const{transitionEnd:_,transition:E,...T}=S;for(const O in T){let R=T[O];if(Array.isArray(R)){const L=y?R.length-1:0;R=R[L]}R!==null&&(o[O]=R)}for(const O in _)o[O]=_[O]}}}return o}const ew=t=>(e,i)=>{const r=k.useContext(Cc),o=k.useContext(kc),c=()=>V4(t,e,r,o);return i?c():Tf(c)},$4=ew({scrapeMotionValuesFromProps:Xf,createRenderState:Jf}),I4=ew({scrapeMotionValuesFromProps:L1,createRenderState:Z1}),q4=Symbol.for("motionComponentSymbol");function F4(t,e,i){const r=k.useRef(i);k.useInsertionEffect(()=>{r.current=i});const o=k.useRef(null);return k.useCallback(c=>{var h;c&&((h=t.onMount)==null||h.call(t,c)),e&&(c?e.mount(c):e.unmount());const d=r.current;if(typeof d=="function")if(c){const p=d(c);typeof p=="function"&&(o.current=p)}else o.current?(o.current(),o.current=null):d(c);else d&&(d.current=c)},[e])}const tw=k.createContext({});function mr(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function G4(t,e,i,r,o,c){var R,L;const{visualElement:d}=k.useContext(Cc),h=k.useContext(X1),p=k.useContext(kc),g=k.useContext(Wf),y=g.reducedMotion,v=g.skipAnimations,x=k.useRef(null),w=k.useRef(!1);r=r||h.renderer,!x.current&&r&&(x.current=r(t,{visualState:e,parent:d,props:i,presenceContext:p,blockInitialAnimation:p?p.initial===!1:!1,reducedMotionConfig:y,skipAnimations:v,isSVG:c}),w.current&&x.current&&(x.current.manuallyAnimateOnMount=!0));const S=x.current,_=k.useContext(tw);S&&!S.projection&&o&&(S.type==="html"||S.type==="svg")&&K4(x.current,i,o,_);const E=k.useRef(!1);k.useInsertionEffect(()=>{S&&E.current&&S.update(i,p)});const T=i[u1],O=k.useRef(!!T&&typeof window<"u"&&!((R=window.MotionHandoffIsComplete)!=null&&R.call(window,T))&&((L=window.MotionHasOptimisedAnimation)==null?void 0:L.call(window,T)));return Sx(()=>{w.current=!0,S&&(E.current=!0,window.MotionIsMounted=!0,S.updateFeatures(),S.scheduleRenderMicrotask(),O.current&&S.animationState&&S.animationState.animateChanges())}),k.useEffect(()=>{S&&(!O.current&&S.animationState&&S.animationState.animateChanges(),O.current&&(queueMicrotask(()=>{var K;(K=window.MotionHandoffMarkAsComplete)==null||K.call(window,T)}),O.current=!1),S.enteringChildren=void 0)}),S}function K4(t,e,i,r){const{layoutId:o,layout:c,drag:d,dragConstraints:h,layoutScroll:p,layoutRoot:g,layoutAnchor:y,layoutCrossfade:v}=e;t.projection=new i(t.latestValues,e["data-framer-portal-id"]?void 0:nw(t.parent)),t.projection.setOptions({layoutId:o,layout:c,alwaysMeasureLayout:!!d||h&&mr(h),visualElement:t,animationType:typeof c=="string"?c:"both",initialPromotionConfig:r,crossfade:v,layoutScroll:p,layoutRoot:g,layoutAnchor:y})}function nw(t){if(t)return t.options.allowProjection!==!1?t.projection:nw(t.parent)}function gh(t,{forwardMotionProps:e=!1,type:i}={},r,o){r&&C4(r);const c=i?i==="svg":Qf(t),d=c?I4:$4;function h(g,y){let v;const x={...k.useContext(Wf),...g,layoutId:Y4(g)},{isStatic:w}=x,S=D4(g),_=d(g,w);if(!w&&typeof window<"u"){X4();const E=W4(x);v=E.MeasureLayout,S.visualElement=G4(t,_,x,o,E.ProjectionNode,c)}return u.jsxs(Cc.Provider,{value:S,children:[v&&S.visualElement?u.jsx(v,{visualElement:S.visualElement,...x}):null,P4(t,g,F4(_,S.visualElement,y),_,w,e,c)]})}h.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const p=k.forwardRef(h);return p[q4]=t,p}function Y4({layoutId:t}){const e=k.useContext(_f).id;return e&&t!==void 0?e+"-"+t:t}function X4(t,e){k.useContext(X1).strict}function W4(t){const e=W1(),{drag:i,layout:r}=e;if(!i&&!r)return{};const o={...i,...r};return{MeasureLayout:i!=null&&i.isEnabled(t)||r!=null&&r.isEnabled(t)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function J4(t,e){if(typeof Proxy>"u")return gh;const i=new Map,r=(c,d)=>gh(c,d,t,e),o=(c,d)=>r(c,d);return new Proxy(o,{get:(c,d)=>d==="create"?r:(i.has(d)||i.set(d,gh(d,void 0,t,e)),i.get(d))})}const Q4=(t,e)=>e.isSVG??Qf(t)?new CA(e):new SA(e,{allowProjection:t!==k.Fragment});class Z4 extends Fa{constructor(e){super(e),e.animationState||(e.animationState=DA(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Tc(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:i}=this.node.prevProps||{};e!==i&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let eN=0;class tN extends Fa{constructor(){super(...arguments),this.id=eN++,this.isExitComplete=!1}update(){var c;if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:i}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:d,custom:h}=this.node.getProps();if(typeof d=="string"||typeof d=="object"&&d!==null&&!Array.isArray(d)){const p=wi(this.node,d,h);if(p){const{transition:g,transitionEnd:y,...v}=p;for(const x in v)(c=this.node.getValue(x))==null||c.jump(v[x])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);i&&!e&&o.then(()=>{this.isExitComplete=!0,i(this.id)})}mount(){const{register:e,onExitComplete:i}=this.node.presenceContext||{};i&&i(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const nN={animation:{Feature:Z4},exit:{Feature:tN}};function ro(t){return{point:{x:t.pageX,y:t.pageY}}}const aN=t=>e=>qf(e)&&t(e,ro(e));function Vs(t,e,i,r){return Qs(t,e,aN(i),r)}const aw=({current:t})=>t?t.ownerDocument.defaultView:null,ib=(t,e)=>Math.abs(t-e);function iN(t,e){const i=ib(t.x,e.x),r=ib(t.y,e.y);return Math.sqrt(i**2+r**2)}const rb=new Set(["auto","scroll"]);class iw{constructor(e,i,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:c=!1,distanceThreshold:d=3,element:h}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=w=>{this.handleScroll(w.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=zl(this.lastRawMoveEventInfo,this.transformPagePoint));const w=yh(this.lastMoveEventInfo,this.history),S=this.startEvent!==null,_=iN(w.offset,{x:0,y:0})>=this.distanceThreshold;if(!S&&!_)return;const{point:E}=w,{timestamp:T}=wt;this.history.push({...E,timestamp:T});const{onStart:O,onMove:R}=this.handlers;S||(O&&O(this.lastMoveEvent,w),this.startEvent=this.lastMoveEvent),R&&R(this.lastMoveEvent,w)},this.handlePointerMove=(w,S)=>{this.lastMoveEvent=w,this.lastRawMoveEventInfo=S,this.lastMoveEventInfo=zl(S,this.transformPagePoint),Fe.update(this.updatePoint,!0)},this.handlePointerUp=(w,S)=>{this.end();const{onEnd:_,onSessionEnd:E,resumeAnimation:T}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&T&&T(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const O=yh(w.type==="pointercancel"?this.lastMoveEventInfo:zl(S,this.transformPagePoint),this.history);this.startEvent&&_&&_(w,O),E&&E(w,O)},!qf(e))return;this.dragSnapToOrigin=c,this.handlers=i,this.transformPagePoint=r,this.distanceThreshold=d,this.contextWindow=o||window;const p=ro(e),g=zl(p,this.transformPagePoint),{point:y}=g,{timestamp:v}=wt;this.history=[{...y,timestamp:v}];const{onSessionStart:x}=i;x&&x(e,yh(g,this.history)),this.removeListeners=no(Vs(this.contextWindow,"pointermove",this.handlePointerMove),Vs(this.contextWindow,"pointerup",this.handlePointerUp),Vs(this.contextWindow,"pointercancel",this.handlePointerUp)),h&&this.startScrollTracking(h)}startScrollTracking(e){let i=e.parentElement;for(;i;){const r=getComputedStyle(i);(rb.has(r.overflowX)||rb.has(r.overflowY))&&this.scrollPositions.set(i,{x:i.scrollLeft,y:i.scrollTop}),i=i.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const i=this.scrollPositions.get(e);if(!i)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},c={x:o.x-i.x,y:o.y-i.y};c.x===0&&c.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=c.x,this.lastMoveEventInfo.point.y+=c.y):this.history.length>0&&(this.history[0].x-=c.x,this.history[0].y-=c.y),this.scrollPositions.set(e,o),Fe.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),qa(this.updatePoint)}}function zl(t,e){return e?{point:e(t.point)}:t}function sb(t,e){return{x:t.x-e.x,y:t.y-e.y}}function yh({point:t},e){return{point:t,delta:sb(t,rw(e)),offset:sb(t,rN(e)),velocity:sN(e,.1)}}function rN(t){return t[0]}function rw(t){return t[t.length-1]}function sN(t,e){if(t.length<2)return{x:0,y:0};let i=t.length-1,r=null;const o=rw(t);for(;i>=0&&(r=t[i],!(o.timestamp-r.timestamp>Qt(e)));)i--;if(!r)return{x:0,y:0};r===t[0]&&t.length>2&&o.timestamp-r.timestamp>Qt(e)*2&&(r=t[1]);const c=hn(o.timestamp-r.timestamp);if(c===0)return{x:0,y:0};const d={x:(o.x-r.x)/c,y:(o.y-r.y)/c};return d.x===1/0&&(d.x=0),d.y===1/0&&(d.y=0),d}function oN(t,{min:e,max:i},r){return e!==void 0&&t<e?t=r?qe(e,t,r.min):Math.max(t,e):i!==void 0&&t>i&&(t=r?qe(i,t,r.max):Math.min(t,i)),t}function ob(t,e,i){return{min:e!==void 0?t.min+e:void 0,max:i!==void 0?t.max+i-(t.max-t.min):void 0}}function lN(t,{top:e,left:i,bottom:r,right:o}){return{x:ob(t.x,i,o),y:ob(t.y,e,r)}}function lb(t,e){let i=e.min-t.min,r=e.max-t.max;return e.max-e.min<t.max-t.min&&([i,r]=[r,i]),{min:i,max:r}}function cN(t,e){return{x:lb(t.x,e.x),y:lb(t.y,e.y)}}function uN(t,e){let i=.5;const r=Ct(t),o=Ct(e);return o>r?i=Xs(e.min,e.max-r,t.min):r>o&&(i=Xs(t.min,t.max-o,e.min)),Vn(0,1,i)}function dN(t,e){const i={};return e.min!==void 0&&(i.min=e.min-t.min),e.max!==void 0&&(i.max=e.max-t.min),i}const cf=.35;function hN(t=cf){return t===!1?t=0:t===!0&&(t=cf),{x:cb(t,"left","right"),y:cb(t,"top","bottom")}}function cb(t,e,i){return{min:ub(t,e),max:ub(t,i)}}function ub(t,e){return typeof t=="number"?t:t[e]||0}const fN=new WeakMap;class pN{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ht(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:i=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const c=v=>{i&&this.snapToCursor(ro(v).point),this.stopAnimation()},d=(v,x)=>{const{drag:w,dragPropagation:S,onDragStart:_}=this.getProps();if(w&&!S&&(this.openDragLock&&this.openDragLock(),this.openDragLock=HC(w),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=x,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ln(T=>{let O=this.getAxisMotionValue(T).get()||0;if(Pn.test(O)){const{projection:R}=this.visualElement;if(R&&R.layout){const L=R.layout.layoutBox[T];L&&(O=Ct(L)*(parseFloat(O)/100))}}this.originPoint[T]=O}),_&&Fe.update(()=>_(v,x),!1,!0),Qh(this.visualElement,"transform");const{animationState:E}=this.visualElement;E&&E.setActive("whileDrag",!0)},h=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x;const{dragPropagation:w,dragDirectionLock:S,onDirectionLock:_,onDrag:E}=this.getProps();if(!w&&!this.openDragLock)return;const{offset:T}=x;if(S&&this.currentDirection===null){this.currentDirection=gN(T),this.currentDirection!==null&&_&&_(this.currentDirection);return}this.updateAxis("x",x.point,T),this.updateAxis("y",x.point,T),this.visualElement.render(),E&&Fe.update(()=>E(v,x),!1,!0)},p=(v,x)=>{this.latestPointerEvent=v,this.latestPanInfo=x,this.stop(v,x),this.latestPointerEvent=null,this.latestPanInfo=null},g=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:y}=this.getProps();this.panSession=new iw(e,{onSessionStart:c,onStart:d,onMove:h,onSessionEnd:p,resumeAnimation:g},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:y,distanceThreshold:r,contextWindow:aw(this.visualElement),element:this.visualElement.current})}stop(e,i){const r=e||this.latestPointerEvent,o=i||this.latestPanInfo,c=this.isDragging;if(this.cancel(),!c||!o||!r)return;const{velocity:d}=o;this.startAnimation(d);const{onDragEnd:h}=this.getProps();h&&Fe.postRender(()=>h(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:i}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),i&&i.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,i,r){const{drag:o}=this.getProps();if(!r||!Ul(e,o,this.currentDirection))return;const c=this.getAxisMotionValue(e);let d=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(d=oN(d,this.constraints[e],this.elastic[e])),c.set(d)}resolveConstraints(){var c;const{dragConstraints:e,dragElastic:i}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(c=this.visualElement.projection)==null?void 0:c.layout,o=this.constraints;e&&mr(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=lN(r.layoutBox,e):this.constraints=!1,this.elastic=hN(i),o!==this.constraints&&!mr(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Ln(d=>{this.constraints!==!1&&this.getAxisMotionValue(d)&&(this.constraints[d]=dN(r.layoutBox[d],this.constraints[d]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:i}=this.getProps();if(!e||!mr(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;o.root&&(o.root.scroll=void 0,o.root.updateScroll());const c=gA(r,o.root,this.visualElement.getTransformPagePoint());let d=cN(o.layout.layoutBox,c);if(i){const h=i(fA(d));this.hasMutatedConstraints=!!h,h&&(d=T1(h))}return d}startAnimation(e){const{drag:i,dragMomentum:r,dragElastic:o,dragTransition:c,dragSnapToOrigin:d,onDragTransitionEnd:h}=this.getProps(),p=this.constraints||{},g=Ln(y=>{if(!Ul(y,i,this.currentDirection))return;let v=p&&p[y]||{};(d===!0||d===y)&&(v={min:0,max:0});const x=o?200:1e6,w=o?40:1e7,S={type:"inertia",velocity:r?e[y]:0,bounceStiffness:x,bounceDamping:w,timeConstant:750,restDelta:1,restSpeed:10,...c,...v};return this.startAxisValueAnimation(y,S)});return Promise.all(g).then(h)}startAxisValueAnimation(e,i){const r=this.getAxisMotionValue(e);return Qh(this.visualElement,e),r.start(Vf(e,r,0,i,this.visualElement,!1))}stopAnimation(){Ln(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const i=`_drag${e.toUpperCase()}`,o=this.visualElement.getProps()[i];return o||this.visualElement.getValue(e,this.visualElement.latestValues[e]??0)}snapToCursor(e){Ln(i=>{const{drag:r}=this.getProps();if(!Ul(i,r,this.currentDirection))return;const{projection:o}=this.visualElement,c=this.getAxisMotionValue(i);if(o&&o.layout){const{min:d,max:h}=o.layout.layoutBox[i],p=c.get()||0;c.set(e[i]-qe(d,h,.5)+p)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:i}=this.getProps(),{projection:r}=this.visualElement;if(!mr(i)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Ln(d=>{const h=this.getAxisMotionValue(d);if(h&&this.constraints!==!1){const p=h.get();o[d]=uN({min:p,max:p},this.constraints[d])}});const{transformTemplate:c}=this.visualElement.getProps();this.visualElement.current.style.transform=c?c({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ln(d=>{if(!Ul(d,e,null))return;const h=this.getAxisMotionValue(d),{min:p,max:g}=this.constraints[d];h.set(qe(p,g,o[d]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;fN.set(this.visualElement,this);const e=this.visualElement.current,i=Vs(e,"pointerdown",g=>{const{drag:y,dragListener:v=!0}=this.getProps(),x=g.target,w=x!==e&&KC(x);y&&v&&!w&&this.start(g)});let r;const o=()=>{const{dragConstraints:g}=this.getProps();mr(g)&&g.current&&(this.constraints=this.resolveRefConstraints(),r||(r=mN(e,g.current,()=>this.scalePositionWithinConstraints())))},{projection:c}=this.visualElement,d=c.addEventListener("measure",o);c&&!c.layout&&(c.root&&c.root.updateScroll(),c.updateLayout()),Fe.read(o);const h=Qs(window,"resize",()=>this.scalePositionWithinConstraints()),p=c.addEventListener("didUpdate",(({delta:g,hasLayoutChanged:y})=>{this.isDragging&&y&&(Ln(v=>{const x=this.getAxisMotionValue(v);x&&(this.originPoint[v]+=g[v].translate,x.set(x.get()+g[v].translate))}),this.visualElement.render())}));return()=>{h(),i(),d(),p&&p(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:i=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:c=!1,dragElastic:d=cf,dragMomentum:h=!0}=e;return{...e,drag:i,dragDirectionLock:r,dragPropagation:o,dragConstraints:c,dragElastic:d,dragMomentum:h}}}function db(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function mN(t,e,i){const r=vv(t,db(i)),o=vv(e,db(i));return()=>{r(),o()}}function Ul(t,e,i){return(e===!0||e===t)&&(i===null||i===t)}function gN(t,e=10){let i=null;return Math.abs(t.y)>e?i="y":Math.abs(t.x)>e&&(i="x"),i}class yN extends Fa{constructor(e){super(e),this.removeGroupControls=fn,this.removeListeners=fn,this.controls=new pN(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:i}=this.node.prevProps||{};e!==i&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const vh=t=>(e,i)=>{t&&Fe.update(()=>t(e,i),!1,!0)};class vN extends Fa{constructor(){super(...arguments),this.removePointerDownListener=fn}onPointerDown(e){this.session=new iw(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:aw(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:i,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:vh(e),onStart:vh(i),onMove:vh(r),onEnd:(c,d)=>{delete this.session,o&&Fe.postRender(()=>o(c,d))}}}mount(){this.removePointerDownListener=Vs(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let bh=!1;class bN extends k.Component{componentDidMount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r,layoutId:o}=this.props,{projection:c}=e;c&&(i.group&&i.group.add(c),r&&r.register&&o&&r.register(c),bh&&c.root.didUpdate(),c.addEventListener("animationComplete",()=>{this.safeToRemove()}),c.setOptions({...c.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),Yl.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:i,visualElement:r,drag:o,isPresent:c}=this.props,{projection:d}=r;return d&&(d.isPresent=c,e.layoutDependency!==i&&d.setOptions({...d.options,layoutDependency:i}),bh=!0,o||e.layoutDependency!==i||i===void 0||e.isPresent!==c?d.willUpdate():this.safeToRemove(),e.isPresent!==c&&(c?d.promote():d.relegate()||Fe.postRender(()=>{const h=d.getStack();(!h||!h.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:e,layoutAnchor:i}=this.props,{projection:r}=e;r&&(r.options.layoutAnchor=i,r.root.didUpdate(),If.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:i,switchLayoutGroup:r}=this.props,{projection:o}=e;bh=!0,o&&(o.scheduleCheckAfterUnmount(),i&&i.group&&i.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function sw(t){const[e,i]=Y1(),r=k.useContext(_f);return u.jsx(bN,{...t,layoutGroup:r,switchLayoutGroup:k.useContext(tw),isPresent:e,safeToRemove:i})}const xN={pan:{Feature:vN},drag:{Feature:yN,ProjectionNode:K1,MeasureLayout:sw}};function hb(t,e,i){const{props:r}=t;t.animationState&&r.whileHover&&t.animationState.setActive("whileHover",i==="Start");const o="onHover"+i,c=r[o];c&&Fe.postRender(()=>c(e,ro(e)))}class wN extends Fa{mount(){const{current:e}=this.node;e&&(this.unmount=IC(e,(i,r)=>(hb(this.node,r,"Start"),o=>hb(this.node,o,"End"))))}unmount(){}}class SN extends Fa{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=no(Qs(this.node.current,"focus",()=>this.onFocus()),Qs(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function fb(t,e,i){const{props:r}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&r.whileTap&&t.animationState.setActive("whileTap",i==="Start");const o="onTap"+(i==="End"?"":i),c=r[o];c&&Fe.postRender(()=>c(e,ro(e)))}class jN extends Fa{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:i,propagate:r}=this.node.props;this.unmount=XC(e,(o,c)=>(fb(this.node,c,"Start"),(d,{success:h})=>fb(this.node,d,h?"End":"Cancel")),{useGlobalTarget:i,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const uf=new WeakMap,xh=new WeakMap,kN=t=>{const e=uf.get(t.target);e&&e(t)},_N=t=>{t.forEach(kN)};function TN({root:t,...e}){const i=t||document;xh.has(i)||xh.set(i,{});const r=xh.get(i),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(_N,{root:t,...e})),r[o]}function EN(t,e,i){const r=TN(e);return uf.set(t,i),r.observe(t),()=>{uf.delete(t),r.unobserve(t)}}const CN={some:0,all:1};class AN extends Fa{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var p;(p=this.stopObserver)==null||p.call(this);const{viewport:e={}}=this.node.getProps(),{root:i,margin:r,amount:o="some",once:c}=e,d={root:i?i.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:CN[o]},h=g=>{const{isIntersecting:y}=g;if(this.isInView===y||(this.isInView=y,c&&!y&&this.hasEnteredView))return;y&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",y);const{onViewportEnter:v,onViewportLeave:x}=this.node.getProps(),w=y?v:x;w&&w(g)};this.stopObserver=EN(this.node.current,d,h)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:i}=this.node;["amount","margin","root"].some(NN(e,i))&&this.startObserver()}unmount(){var e;(e=this.stopObserver)==null||e.call(this),this.hasEnteredView=!1,this.isInView=!1}}function NN({viewport:t={}},{viewport:e={}}={}){return i=>t[i]!==e[i]}const RN={inView:{Feature:AN},tap:{Feature:jN},focus:{Feature:SN},hover:{Feature:wN}},ON={layout:{ProjectionNode:K1,MeasureLayout:sw}},DN={...nN,...RN,...xN,...ON},we=J4(DN,Q4),MN=[{id:"own",name:"Your Story",avatar:null,isOwn:!0,unread:!1,online:!0},{id:"u1",name:"Luna",avatar:"https://i.pravatar.cc/150?u=luna",unread:!0,online:!0},{id:"u2",name:"Max",avatar:"https://i.pravatar.cc/150?u=max",unread:!0,online:!0},{id:"u3",name:"Zara",avatar:"https://i.pravatar.cc/150?u=zara",unread:!1,online:!0},{id:"u4",name:"Kai",avatar:"https://i.pravatar.cc/150?u=kai",unread:!0,online:!1},{id:"u5",name:"Nova",avatar:"https://i.pravatar.cc/150?u=nova",unread:!1,online:!1},{id:"u6",name:"Rey",avatar:"https://i.pravatar.cc/150?u=rey",unread:!0,online:!0},{id:"u7",name:"Elise",avatar:"https://i.pravatar.cc/150?u=elise",unread:!1,online:!1},{id:"u8",name:"Theo",avatar:"https://i.pravatar.cc/150?u=theo",unread:!0,online:!0}],pb=["linear-gradient(135deg, #f093fb, #f5576c)","linear-gradient(135deg, #4facfe, #00f2fe)","linear-gradient(135deg, #a18cd1, #fbc2eb)","linear-gradient(135deg, #fccb90, #d57eeb)","linear-gradient(135deg, #667eea, #764ba2)","linear-gradient(135deg, #89f7fe, #66a6ff)","linear-gradient(135deg, #f43b47, #453a94)","linear-gradient(135deg, #11998e, #38ef7d)"];function LN(t){return pb[t%pb.length]}function zN(t){return t.charAt(0).toUpperCase()}function UN(){const t=k.useRef(null),[e,i]=k.useState(!1),[r,o]=k.useState(0),[c,d]=k.useState(0),h=v=>{i(!0),o(v.pageX-t.current.offsetLeft),d(t.current.scrollLeft)},p=()=>i(!1),g=()=>i(!1),y=v=>{if(!e)return;v.preventDefault();const w=(v.pageX-t.current.offsetLeft-r)*1.5;t.current.scrollLeft=c-w};return u.jsxs("div",{className:"stories-section",children:[u.jsx("div",{className:"stories-header",children:u.jsx("span",{className:"stories-title",children:"Stories"})}),u.jsx("div",{ref:t,className:"stories-scroll",onMouseDown:h,onMouseUp:p,onMouseLeave:g,onMouseMove:y,children:MN.map((v,x)=>{const w=LN(x),S=zN(v.name),_=v.unread;return u.jsxs(we.div,{className:`story-item ${_?"unread":""}`,whileTap:{scale:.92},whileHover:{y:-2},transition:{type:"spring",stiffness:400,damping:17},children:[u.jsxs("div",{className:"story-avatar-ring",style:{background:w},children:[u.jsx("div",{className:"story-avatar-inner",children:v.avatar?u.jsx("img",{src:v.avatar,alt:v.name}):u.jsx("span",{className:"story-avatar-text",children:S})}),v.isOwn&&u.jsx("span",{className:"story-plus-badge",children:"+"})]}),u.jsx("span",{className:"story-name",children:v.name}),v.online&&u.jsx("span",{className:"story-online-dot"})]},v.id)})}),u.jsx("style",{children:BN})]})}const BN=`
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
`,mc=Si(()=>({createPost:async({content:t,image_url:e,video_url:i,type:r="text",audience:o="public",media:c=[]})=>{const{data:d,error:h}=await de.from("posts").insert({content:t,image_url:e,video_url:i,type:r,audience:o,media:c}).select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `).single();if(h)throw h;return d},uploadPostImage:async(t,e,i)=>{const r=t.name.split(".").pop(),c=`post-images/${`${e}/${Date.now()}_${Math.random().toString(36).slice(2)}.${r}`}`,{data:d,error:h}=await de.storage.from("post-images").upload(c,t,{cacheControl:"3600",upsert:!1});if(h)throw h;const{data:{publicUrl:p}}=de.storage.from("post-images").getPublicUrl(d.path);return{url:p,path:d.path}},deletePostImage:async t=>{const{error:e}=await de.storage.from("post-images").remove([t]);if(e)throw e},deletePost:async t=>{const{error:e}=await de.from("posts").update({is_deleted:!0}).eq("id",t);if(e)throw e},likePost:async t=>{const{error:e}=await de.from("likes").insert({post_id:t});if(e)throw e},unlikePost:async t=>{const{error:e}=await de.from("likes").delete().eq("post_id",t);if(e)throw e},addComment:async({postId:t,content:e,parentId:i=null})=>{const r={post_id:t,content:e};i&&(r.parent_id=i);const{data:o,error:c}=await de.from("comments").insert(r).select(`
        *,
        profiles:user_id (id, username, display_name, avatar_url, is_verified)
      `).single();if(c)throw c;return o},deleteComment:async t=>{const{error:e}=await de.from("comments").update({is_deleted:!0}).eq("id",t);if(e)throw e},repostPost:async({postId:t,quoteText:e=null})=>{const i={post_id:t};e&&(i.quote_text=e);const{data:r,error:o}=await de.from("reposts").insert(i).select().single();if(o)throw o;return r},undoRepost:async t=>{const{error:e}=await de.from("reposts").delete().eq("post_id",t);if(e)throw e}}));function PN(t){const e=Date.now()-t,i=Math.floor(e/6e4);if(i<1)return"Just now";if(i<60)return`${i}m ago`;const r=Math.floor(i/60);if(r<24)return`${r}h ago`;const o=Math.floor(r/24);return o<7?`${o}d ago`:new Date(t).toLocaleDateString()}function mb(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}const Es={heart:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#ff4d6d":"none",stroke:t?"#ff4d6d":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{filter:t?"drop-shadow(0 0 6px rgba(255,77,109,0.4))":"none"},children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),comment:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),share:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"18",cy:"5",r:"3"}),u.jsx("circle",{cx:"6",cy:"12",r:"3"}),u.jsx("circle",{cx:"18",cy:"19",r:"3"}),u.jsx("line",{x1:"8.59",y1:"13.51",x2:"15.42",y2:"17.49"}),u.jsx("line",{x1:"15.41",y1:"6.51",x2:"8.59",y2:"10.49"})]}),bookmark:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:t?"#CCFF00":"none",stroke:t?"#CCFF00":"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"})}),dots:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"1"}),u.jsx("circle",{cx:"19",cy:"12",r:"1"}),u.jsx("circle",{cx:"5",cy:"12",r:"1"})]})};function ow({post:t}){const[e,i]=k.useState(t.liked),[r,o]=k.useState(t.saved),[c,d]=k.useState(t.likes),[h,p]=k.useState(0),g=mc(S=>S.likePost),y=mc(S=>S.unlikePost),v=()=>{e?(i(!1),d(S=>S-1),y(t.id).catch(()=>{i(!0),d(S=>S+1)})):(i(!0),d(S=>S+1),p(S=>S+1),g(t.id).catch(()=>{i(!1),d(S=>S-1)}))},x=()=>o(S=>!S),w=S=>S.charAt(0).toUpperCase();return u.jsxs(we.div,{className:"feed-post",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-header",children:[u.jsx("div",{className:"post-avatar",style:{background:t.avatarColor},children:u.jsx("span",{children:w(t.username)})}),u.jsxs("div",{className:"post-user-info",children:[u.jsx("span",{className:"post-username",children:t.username}),u.jsxs("span",{className:"post-handle",children:[t.handle," · ",PN(t.timestamp)]})]}),u.jsx("button",{className:"post-more-btn",children:Es.dots})]}),u.jsx("div",{className:"post-content",children:u.jsx("p",{children:t.content})}),t.images&&t.images.length>0&&u.jsx("div",{className:`post-images ${t.images.length>1?"multi":""}`,children:t.images.map((S,_)=>u.jsx(we.div,{className:"post-image-wrap",whileHover:{scale:1.01},transition:{type:"spring",stiffness:300,damping:20},children:u.jsx("img",{src:S,alt:`Post image ${_+1}`,loading:"lazy"})},_))}),u.jsxs("div",{className:"post-stats",children:[u.jsxs("span",{className:"post-stat",children:[u.jsx("span",{style:{color:e?"#ff4d6d":void 0},children:mb(c)})," likes"]}),u.jsxs("span",{className:"post-stat",children:[mb(t.comments)," comments"]})]}),u.jsxs("div",{className:"post-actions",children:[u.jsxs(we.button,{className:`post-action ${e?"liked":""}`,onClick:v,whileTap:{scale:.8},children:[u.jsx(we.span,{initial:e?{scale:.5}:!1,animate:{scale:1},transition:{type:"spring",stiffness:500,damping:15},className:"post-action-icon",children:Es.heart(e)},h),u.jsx("span",{children:"Like"})]}),u.jsxs("button",{className:"post-action",children:[u.jsx("span",{className:"post-action-icon",children:Es.comment}),u.jsx("span",{children:"Comment"})]}),u.jsxs("button",{className:"post-action",children:[u.jsx("span",{className:"post-action-icon",children:Es.share}),u.jsx("span",{children:"Share"})]}),u.jsxs(we.button,{className:`post-action ${r?"saved":""}`,onClick:x,whileTap:{scale:.8},children:[u.jsx("span",{className:"post-action-icon",children:Es.bookmark(r)}),u.jsx("span",{children:"Save"})]})]}),u.jsx("style",{children:VN})]})}const VN=`
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
`,wh=10,$a=Si((t,e)=>({posts:[],isLoading:!1,isRefreshing:!1,hasMore:!0,page:0,fetchFeed:async({refresh:i=!1}={})=>{const{page:r,hasMore:o,isLoading:c,isRefreshing:d}=e();if(c||d||!i&&!o)return;t(i?{isRefreshing:!0}:{isLoading:!0});const h=i?0:r,p=h*wh,g=p+wh-1;try{const{data:y,error:v,count:x}=await de.from("posts").select(`
          *,
          profiles:user_id (id, username, display_name, avatar_url, is_verified),
          likes_count:likes(count),
          comments_count:comments(count)
        `,{count:"exact"}).eq("is_deleted",!1).order("created_at",{ascending:!1}).range(p,g);if(v)throw v;const w=(y||[]).map(_=>{var E,T,O,R;return{..._,likes:((T=(E=_.likes_count)==null?void 0:E[0])==null?void 0:T.count)??0,comments:((R=(O=_.comments_count)==null?void 0:O[0])==null?void 0:R.count)??0,isLiked:!1}}),S=p+wh<(x||0);t(i?{posts:w,page:1,hasMore:S,isRefreshing:!1,isLoading:!1}:_=>({posts:[..._.posts,...w],page:h+1,hasMore:S,isLoading:!1}))}catch(y){t({isRefreshing:!1,isLoading:!1}),console.error("Feed fetch error:",y.message)}},refreshFeed:()=>e().fetchFeed({refresh:!0}),addPostOptimistic:i=>{t(r=>({posts:[i,...r.posts]}))},removePostOptimistic:i=>{t(r=>({posts:r.posts.filter(o=>o.id!==i)}))},updatePostInFeed:(i,r)=>{t(o=>({posts:o.posts.map(c=>c.id===i?{...c,...r}:c)}))}}));function HN({onClose:t}){const[e,i]=k.useState(""),[r,o]=k.useState(""),[c,d]=k.useState(!1),[h,p]=k.useState(""),g=At(T=>T.user),y=At(T=>T.profile),v=mc(T=>T.createPost),x=$a(T=>T.fetchFeed),w=k.useRef(null),S=async()=>{const T=e.trim();if(T){d(!0),p("");try{await v({content:T,image_url:r.trim()||null}),i(""),o(""),x({refresh:!0}),t&&t()}catch(O){p(O.message||"Failed to create post")}finally{d(!1)}}},_=(y==null?void 0:y.avatar_color)||"#CCFF00",E=(y==null?void 0:y.display_name)||(y==null?void 0:y.username)||(g==null?void 0:g.email)||"User";return u.jsxs(we.div,{className:"post-composer-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:T=>{T.target===T.currentTarget&&t&&t()},children:[u.jsxs(we.div,{className:"post-composer",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},children:[u.jsxs("div",{className:"post-composer-header",children:[u.jsx("h3",{children:"Create Post"}),u.jsx("button",{className:"post-composer-close",onClick:t,children:"×"})]}),u.jsxs("div",{className:"post-composer-body",children:[u.jsx("div",{className:"post-composer-avatar",style:{background:_},children:E.charAt(0).toUpperCase()}),u.jsx("textarea",{ref:w,className:"post-composer-textarea",placeholder:"What's on your mind?",value:e,onChange:T=>i(T.target.value),maxLength:2e3,autoFocus:!0})]}),u.jsx("div",{className:"post-composer-image",children:u.jsx("input",{className:"post-composer-image-input",placeholder:"Add image URL (optional)",value:r,onChange:T=>o(T.target.value)})}),h&&u.jsx("p",{className:"post-composer-error",children:h}),u.jsxs("div",{className:"post-composer-footer",children:[u.jsxs("span",{className:"post-composer-count",children:[e.length,"/2000"]}),u.jsx("button",{className:"post-composer-submit",onClick:S,disabled:!e.trim()||c,children:c?"Posting...":"Post"})]})]}),u.jsx("style",{children:$N})]})}const $N=`
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
`;function Sh(){return u.jsxs("div",{className:"feed-post-skeleton",children:[u.jsxs("div",{className:"skeleton-header",children:[u.jsx("div",{className:"skeleton-circle"}),u.jsxs("div",{className:"skeleton-lines",children:[u.jsx("div",{className:"skeleton-line w-40"}),u.jsx("div",{className:"skeleton-line w-24"})]})]}),u.jsxs("div",{className:"skeleton-body",children:[u.jsx("div",{className:"skeleton-line w-100"}),u.jsx("div",{className:"skeleton-line w-80"})]}),u.jsx("div",{className:"skeleton-image"}),u.jsxs("div",{className:"skeleton-actions",children:[u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"}),u.jsx("div",{className:"skeleton-line w-20"})]}),u.jsx("style",{children:IN})]})}const IN=`
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
`;function qN(t,{threshold:e=.5,enabled:i=!0}={}){const r=k.useRef(null);k.useEffect(()=>{if(!i)return;const c=r.current;if(!c)return;const d=new IntersectionObserver(h=>{h[0].isIntersecting&&t()},{threshold:e});return d.observe(c),()=>d.disconnect()},[t,e,i]);const o=k.useCallback(()=>{window.scrollTo({top:0,behavior:"smooth"})},[]);return{sentinelRef:r,scrollToTop:o}}function FN(){const[t,e]=k.useState([]),[i,r]=k.useState({});k.useEffect(()=>{const c=de.channel("realtime-feed").on("postgres_changes",{event:"INSERT",schema:"public",table:"posts"},async d=>{var y,v,x,w;const{data:h,error:p}=await de.from("posts").select(`
              *,
              profiles:user_id (id, username, display_name, avatar_url, is_verified),
              likes_count:likes(count),
              comments_count:comments(count)
            `).eq("id",d.new.id).single();if(p||!h)return;const g={...h,likes:((v=(y=h.likes_count)==null?void 0:y[0])==null?void 0:v.count)??0,comments:((w=(x=h.comments_count)==null?void 0:x[0])==null?void 0:w.count)??0,isLiked:!1};e(S=>S.some(_=>_.id===g.id)?S:[g,...S])}).subscribe();return()=>{de.removeChannel(c)}},[]);const o=k.useCallback(()=>e([]),[]);return{newPosts:t,postUpdates:i,clearNewPosts:o,feedEvents:[]}}const GN={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.08}}},KN={hidden:{opacity:0,y:20},visible:{opacity:1,y:0,transition:{type:"spring",stiffness:100,damping:20}}},gb=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];function YN(t){const e=t.profiles||{},i=e.display_name||e.username||"user";return{id:t.id,username:i,handle:"@"+(e.username||"user"),avatarColor:gb[((t.id||"").charCodeAt(0)||0)%gb.length],timestamp:t.created_at?new Date(t.created_at).getTime():Date.now(),content:t.content||"",images:t.image_url?[t.image_url]:[],likes:t.likes??0,comments:t.comments??0,liked:t.isLiked??!1,saved:!1}}function XN(){const[t,e]=k.useState(!0),[i,r]=k.useState(!1),o=$a(E=>E.posts),c=$a(E=>E.isLoading),d=$a(E=>E.hasMore),h=$a(E=>E.fetchFeed),{newPosts:p,clearNewPosts:g}=FN();k.useEffect(()=>{h({refresh:!0}).then(()=>e(!1))},[h]);const y=k.useCallback(()=>{!c&&d&&h()},[c,d,h]),{sentinelRef:v,scrollToTop:x}=qN(y,{enabled:!t&&d}),w=()=>{e(!0),h({refresh:!0}).then(()=>e(!1))},S=()=>{g(),w(),x()},_=k.useMemo(()=>o.map(YN),[o]);return u.jsxs("div",{className:"feed-container",children:[u.jsxs("div",{className:"feed-header",children:[u.jsx("h1",{className:"feed-title",children:"Home"}),u.jsxs("div",{className:"feed-header-actions",children:[u.jsx("button",{className:"feed-compose-btn",onClick:()=>r(!0),"aria-label":"Create post",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"18",height:"18",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),u.jsx("button",{className:"feed-refresh-btn",onClick:w,"aria-label":"Refresh",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"23 4 23 10 17 10"}),u.jsx("path",{d:"M20.49 15a9 9 0 11-2.12-9.36L23 10"})]})})]})]}),t?u.jsxs("div",{className:"feed-posts",children:[u.jsx(Sh,{}),u.jsx(Sh,{}),u.jsx(Sh,{})]}):u.jsxs(we.div,{className:"feed-posts",variants:GN,initial:"hidden",animate:"visible",children:[u.jsx(UN,{}),u.jsxs(pn,{mode:"popLayout",children:[p.length>0&&u.jsx(we.div,{className:"feed-new-posts-banner",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},onClick:S,children:u.jsxs("span",{children:[p.length," new post",p.length>1?"s":""," available"]})},"new-posts-banner"),_.map(E=>u.jsx(we.div,{variants:KN,layout:!0,children:u.jsx(ow,{post:E})},E.id))]}),c&&u.jsxs("div",{className:"feed-loading-more",children:[u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"}),u.jsx("div",{className:"feed-loading-dot"})]}),u.jsx("div",{ref:v,className:"feed-sentinel"}),!d&&!c&&_.length>0&&u.jsx("p",{className:"feed-end",children:"You're all caught up! 🎉"})]}),u.jsx(pn,{children:i&&u.jsx(HN,{onClose:()=>r(!1)})}),u.jsx("style",{children:`
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
      `})]})}const WN=Si((t,e)=>({onlineUserIds:new Set,setOnlineUsers:i=>{t({onlineUserIds:new Set(i)})},addOnlineUser:i=>{t(r=>{const o=new Set(r.onlineUserIds);return o.add(i),{onlineUserIds:o}})},removeOnlineUser:i=>{t(r=>{const o=new Set(r.onlineUserIds);return o.delete(i),{onlineUserIds:o}})},isOnline:i=>e().onlineUserIds.has(i)}));function JN(t){const[e,i]=k.useState(null),o=WN(c=>c.onlineUserIds).has(t);return k.useEffect(()=>{const c=async()=>{const{count:h}=await de.from("follows").select("id",{count:"exact",head:!0}).eq("following_id",t);h!==null&&i(h)};c();const d=de.channel(`profile-follows-${t}`).on("postgres_changes",{event:"*",schema:"public",table:"follows",filter:`following_id=eq.${t}`},()=>c()).subscribe();return()=>{de.removeChannel(d)}},[t]),{liveFollowerCount:e,isOnline:o}}const yb={username:"ZenX",handle:"@zenx",avatarColor:"#CCFF00",bio:"Building the future of social • Creator • Designer • Code artist",website:"zenx.design",posts:"42",followers:12800,following:382},QN=[{id:"p1",userId:"u2",images:["https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600"],content:"exploring new design frontiers with framex",likes:234},{id:"p2",userId:"u2",images:[],content:"just shipped a massive update to the grid system — responsiveness is next level",likes:189},{id:"p3",userId:"u2",images:["https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600"],content:"neon vibes only tonight",likes:312},{id:"p4",userId:"u2",images:[],content:"thinking about the future of real-time collaborative design tools",likes:156},{id:"p5",userId:"u2",images:["https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600"],content:"new visual identity dropping soon",likes:278}];function jh(t){return t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"K":t.toString()}function vb(){const{id:t}=CS(),[e,i]=k.useState("grid"),[r,o]=k.useState("posts"),{liveFollowerCount:c,isOnline:d}=JN(t||"u2"),h=mn(),[p,g]=k.useState(!1),[y,v]=k.useState(!1),[x,w]=k.useState(!1),[S,_]=k.useState(null),[E,T]=k.useState(null),[O,R]=k.useState(!1),[L,K]=k.useState({avatar_url:"",cover_url:"",full_name:"",username:"",bio:"",website:""}),W=k.useRef(null),F=k.useRef(null),Y=At(H=>H.profile),ee=At(H=>H.user),re=At(H=>H.updateProfile),me=!t||t===(ee==null?void 0:ee.id),fe=k.useMemo(()=>me||!E?yb:{username:E.display_name||E.username||"Unknown",handle:`@${E.username||"unknown"}`,avatarColor:"#CCFF00",bio:E.bio||"",website:E.website||"",posts:E.posts_count||"0",followers:E.followers_count||0,following:E.following_count||0},[me,E]),Oe=QN.filter(H=>H.userId==="u2");k.useEffect(()=>{me||(R(!0),de.from("profiles").select("*").eq("id",t).single().then(({data:H,error:ae})=>{if(ae)throw ae;T(H)}).catch(H=>console.warn("Failed to load user profile:",H.message)).finally(()=>R(!1)))},[t,me]);const Ne=(H,ae)=>{_({type:H,message:ae}),setTimeout(()=>_(null),3e3)},je=async H=>{const{data:ae}=await de.storage.listBuckets();if(ae!=null&&ae.some(V=>V.name===H))return!0;const{error:N}=await de.storage.createBucket(H,{public:!0});return N?(console.warn(`Could not auto-create bucket "${H}":`,N.message),!1):!0},C=async(H,ae)=>{var N,V;if(!H)return null;v(!0);try{const Q=H.name.split(".").pop(),ie=`${Date.now()}_${Math.random().toString(36).substring(2)}.${Q}`,{error:ce}=await de.storage.from(ae).upload(ie,H);if((N=ce==null?void 0:ce.message)!=null&&N.includes("bucket")||(V=ce==null?void 0:ce.message)!=null&&V.includes("Bucket")){if(!await je(ae))return Ne("error",`Storage bucket "${ae}" not found. Create it in Supabase dashboard or run the migration SQL.`),null;const{error:ye}=await de.storage.from(ae).upload(ie,H);if(ye)throw ye}else if(ce)throw ce;const{data:{publicUrl:be}}=de.storage.from(ae).getPublicUrl(ie);return be}catch(Q){return Ne("error",Q.message||"Failed to upload image"),null}finally{v(!1)}},I=async()=>{w(!0);try{const H={};L.full_name&&(H.full_name=L.full_name),L.username&&(H.username=L.username),L.bio&&(H.bio=L.bio),L.website&&(H.website=L.website),L.avatar_url&&(H.avatar_url=L.avatar_url),L.cover_url&&(H.cover_url=L.cover_url),await re(H),Ne("success","Profile updated successfully!"),g(!1)}catch(H){Ne("error",H.message||"Failed to update profile")}finally{w(!1)}},Z=[{id:"posts",label:"Posts"},{id:"likes",label:"Likes"},{id:"saved",label:"Saved"}];return u.jsxs(we.div,{className:"profile-page",initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},children:[u.jsxs("div",{className:"profile-header",children:[u.jsxs("div",{className:"profile-cover",children:[u.jsx("div",{className:"profile-cover-bg"}),!me&&u.jsx("button",{className:"profile-back-btn",onClick:()=>h(-1),"aria-label":"Go back",children:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"22",height:"22",children:u.jsx("polyline",{points:"15 18 9 12 15 6"})})})]}),u.jsxs("div",{className:"profile-info",children:[u.jsxs("div",{className:"profile-avatar-section",children:[u.jsxs("div",{className:"profile-avatar",style:{background:fe.avatarColor,position:"relative"},children:[u.jsx("span",{children:fe.username.charAt(0).toUpperCase()}),u.jsx("span",{className:`profile-status-badge ${d?"online":"offline"}`})]}),u.jsx("div",{className:"profile-actions",children:me&&u.jsxs(u.Fragment,{children:[u.jsx(we.button,{className:"profile-settings-btn",onClick:()=>h("/settings"),"aria-label":"Settings",whileHover:{scale:1.05},whileTap:{scale:.92,rotate:15},transition:{type:"spring",stiffness:400,damping:17},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]})}),u.jsx(we.button,{className:"profile-edit-btn",onClick:()=>{Y&&K({avatar_url:Y.avatar_url||"",cover_url:Y.cover_url||"",full_name:Y.full_name||"",username:Y.username||"",bio:Y.bio||"",website:Y.website||""}),g(!0)},whileHover:{scale:1.02},whileTap:{scale:.98},transition:{type:"spring",stiffness:400,damping:17},children:"Edit Profile"})]})})]}),u.jsxs("div",{className:"profile-details",children:[u.jsx("h1",{className:"profile-name",children:fe.username}),u.jsx("span",{className:"profile-handle",children:fe.handle}),u.jsx("p",{className:"profile-bio",children:fe.bio}),u.jsxs("a",{className:"profile-website",href:`https://${fe.website}`,target:"_blank",rel:"noopener noreferrer",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"14",height:"14",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),fe.website]})]}),u.jsxs("div",{className:"profile-stats",children:[u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:jh(fe.posts)}),u.jsx("span",{className:"profile-stat-label",children:"Posts"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:jh(c||fe.followers)}),u.jsx("span",{className:"profile-stat-label",children:"Followers"})]}),u.jsxs("div",{className:"profile-stat",children:[u.jsx("span",{className:"profile-stat-value",children:jh(fe.following)}),u.jsx("span",{className:"profile-stat-label",children:"Following"})]})]})]})]}),me&&u.jsxs("div",{className:"profile-tabs",children:[Z.map(H=>u.jsxs("button",{className:`profile-tab ${r===H.id?"active":""}`,onClick:()=>o(H.id),children:[H.label,r===H.id&&u.jsx(we.div,{className:"profile-tab-underline",layoutId:"tab-underline"})]},H.id)),u.jsxs("div",{className:"profile-view-toggle",children:[u.jsx("button",{className:`view-btn ${e==="grid"?"active":""}`,onClick:()=>i("grid"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"3",width:"7",height:"7"}),u.jsx("rect",{x:"3",y:"14",width:"7",height:"7"}),u.jsx("rect",{x:"14",y:"14",width:"7",height:"7"})]})}),u.jsx("button",{className:`view-btn ${e==="list"?"active":""}`,onClick:()=>i("list"),children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),u.jsx("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),u.jsx("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),u.jsx("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),u.jsx("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),u.jsx("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]})})]})]}),me&&u.jsxs(pn,{mode:"wait",children:[r==="posts"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:e==="grid"?u.jsx("div",{className:"profile-grid",children:Oe.length>0?Oe.map(H=>u.jsxs(we.div,{className:"profile-grid-item",whileHover:{scale:1.02},transition:{type:"spring",stiffness:300,damping:20},children:[H.images[0]?u.jsx("img",{src:H.images[0],alt:"",loading:"lazy"}):u.jsx("div",{className:"grid-item-text",children:u.jsxs("p",{children:[H.content.substring(0,60),"..."]})}),u.jsx("div",{className:"grid-item-overlay",children:u.jsxs("span",{children:[H.likes," ❤"]})})]},H.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})}):u.jsx("div",{className:"profile-list",children:Oe.length>0?Oe.map(H=>u.jsx(ow,{post:H},H.id)):u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No posts yet"})})})},"posts"),r==="likes"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No liked posts yet"})})},"likes"),r==="saved"&&u.jsx(we.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{duration:.2},className:"profile-content",children:u.jsx("div",{className:"profile-empty",children:u.jsx("p",{children:"No saved posts yet"})})},"saved")]}),u.jsx(pn,{children:p&&u.jsx(we.div,{className:"edit-modal-overlay",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>g(!1),children:u.jsxs(we.div,{className:"edit-modal",initial:{opacity:0,scale:.95,y:20},animate:{opacity:1,scale:1,y:0},exit:{opacity:0,scale:.95,y:20},transition:{type:"spring",stiffness:300,damping:25},onClick:H=>H.stopPropagation(),children:[u.jsxs("div",{className:"edit-modal-header",children:[u.jsx("h2",{children:"Edit Profile"}),u.jsx(we.button,{className:"edit-modal-close",onClick:()=>g(!1),whileHover:{scale:1.1},whileTap:{scale:.9},children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"20",height:"20",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})})]}),u.jsxs("div",{className:"edit-modal-body",children:[u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Profile Picture"}),u.jsxs("div",{className:"image-upload-area",onClick:()=>{var H;return(H=W.current)==null?void 0:H.click()},children:[L.avatar_url?u.jsx("img",{src:L.avatar_url,alt:"Avatar",className:"image-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("path",{d:"M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"}),u.jsx("circle",{cx:"12",cy:"13",r:"4"})]}),u.jsx("span",{children:"Tap to change"})]}),y&&u.jsx("div",{className:"image-upload-spinner"})]}),u.jsx("input",{ref:W,type:"file",accept:"image/*",hidden:!0,onChange:async H=>{var V;const ae=(V=H.target.files)==null?void 0:V[0];if(!ae)return;const N=await C(ae,"avatars");N&&K(Q=>({...Q,avatar_url:N}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Cover Image"}),u.jsx("div",{className:"cover-upload-area",onClick:()=>{var H;return(H=F.current)==null?void 0:H.click()},children:L.cover_url?u.jsx("img",{src:L.cover_url,alt:"Cover",className:"cover-preview"}):u.jsxs("div",{className:"image-upload-placeholder",children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"24",height:"24",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Tap to change cover"})]})}),u.jsx("input",{ref:F,type:"file",accept:"image/*",hidden:!0,onChange:async H=>{var V;const ae=(V=H.target.files)==null?void 0:V[0];if(!ae)return;const N=await C(ae,"covers");N&&K(Q=>({...Q,cover_url:N}))}})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Name"}),u.jsx("input",{type:"text",value:L.full_name,onChange:H=>K(ae=>({...ae,full_name:H.target.value})),placeholder:"Your full name"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Username"}),u.jsx("input",{type:"text",value:L.username,onChange:H=>K(ae=>({...ae,username:H.target.value})),placeholder:"Your username"})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Bio"}),u.jsx("textarea",{value:L.bio,onChange:H=>K(ae=>({...ae,bio:H.target.value})),placeholder:"Tell your story",rows:3})]}),u.jsxs("div",{className:"edit-field",children:[u.jsx("label",{children:"Website"}),u.jsx("input",{type:"text",value:L.website,onChange:H=>K(ae=>({...ae,website:H.target.value})),placeholder:"yourwebsite.com"})]})]}),u.jsxs("div",{className:"edit-modal-footer",children:[u.jsx(we.button,{className:"edit-btn-cancel",onClick:()=>g(!1),whileHover:{scale:1.02},whileTap:{scale:.98},children:"Cancel"}),u.jsx(we.button,{className:"edit-btn-save",onClick:I,disabled:x,whileHover:{scale:1.02},whileTap:{scale:.98},children:x?"Saving...":"Save Changes"})]})]})})}),u.jsx(pn,{children:S&&u.jsxs(we.div,{className:`toast toast-${S.type}`,initial:{opacity:0,y:50,x:20},animate:{opacity:1,y:0,x:0},exit:{opacity:0,y:20,x:20},transition:{type:"spring",stiffness:300,damping:25},children:[S.type==="success"?u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("path",{d:"M22 11.08V12a10 10 0 11-5.93-9.14"}),u.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}):u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",width:"18",height:"18",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"15",y1:"9",x2:"9",y2:"15"}),u.jsx("line",{x1:"9",y1:"9",x2:"15",y2:"15"})]}),u.jsx("span",{children:S.message})]})}),u.jsx("style",{children:ZN})]})}const ZN=`
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
`,Cs={search:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),plus:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]}),hash:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"4",y1:"9",x2:"20",y2:"9"}),u.jsx("line",{x1:"4",y1:"15",x2:"20",y2:"15"}),u.jsx("line",{x1:"10",y1:"3",x2:"8",y2:"21"}),u.jsx("line",{x1:"16",y1:"3",x2:"14",y2:"21"})]})},eR=["All","Gaming","Art","Music","Tech","Photography","Fitness","Fashion"],tR=[{name:"Pixel Art Masters",members:"12.4k",category:"Art",desc:"A community for pixel art enthusiasts and digital artists.",color:"#ff6b6b"},{name:"Cyber Gamers",members:"8.7k",category:"Gaming",desc:"Discuss the latest games, strategies, and esports.",color:"#ffa502"},{name:"Synthwave Producers",members:"5.2k",category:"Music",desc:"Create and share synthwave, retrowave, and chill beats.",color:"#7bed9f"},{name:"Code Brigade",members:"15.3k",category:"Tech",desc:"Web dev, AI, open source — all things code.",color:"#70a1ff"},{name:"Lens Culture",members:"6.8k",category:"Photography",desc:"Share your best shots and photography techniques.",color:"#ff6348"},{name:"Neon Fitness",members:"4.1k",category:"Fitness",desc:"Push your limits with the neon fitness crew.",color:"#a29bfe"},{name:"Digital Canvas",members:"9.5k",category:"Art",desc:"Digital painting, 3D modeling, and concept art.",color:"#55efc4"},{name:"Vaporwave Lounge",members:"3.9k",category:"Music",desc:"Chill aesthetics, vaporwave, and lo-fi vibes.",color:"#fd79a8"}];function nR(){const[t,e]=k.useState("All"),[i,r]=k.useState(""),o=tR.filter(c=>{const d=t==="All"||c.category===t,h=c.name.toLowerCase().includes(i.toLowerCase())||c.desc.toLowerCase().includes(i.toLowerCase());return d&&h});return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"communities-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Communities"}),u.jsx("p",{children:"Discover and join communities that match your interests"})]}),u.jsxs("div",{className:"search-bar glass",children:[Cs.search,u.jsx("input",{type:"text",placeholder:"Search communities...",value:i,onChange:c=>r(c.target.value)})]}),u.jsx("div",{className:"category-pills",children:eR.map(c=>u.jsxs("button",{className:`pill ${t===c?"active":""}`,onClick:()=>e(c),children:[c==="All"?null:u.jsx("span",{className:"pill-icon",children:Cs.hash}),c]},c))}),o.length===0?u.jsxs("div",{className:"empty-state glass",children:[Cs.search,u.jsx("h3",{children:"No communities found"}),u.jsx("p",{children:"Try adjusting your search or filter"})]}):u.jsxs("div",{className:"communities-grid",children:[o.map((c,d)=>u.jsxs("div",{className:"community-card glass",children:[u.jsxs("div",{className:"community-card-header",style:{background:`linear-gradient(135deg, ${c.color}22, ${c.color}44)`},children:[u.jsx("div",{className:"community-avatar",style:{background:c.color},children:c.name.charAt(0)}),u.jsx("span",{className:"community-category",children:c.category})]}),u.jsxs("div",{className:"community-card-body",children:[u.jsx("h3",{children:c.name}),u.jsx("p",{children:c.desc}),u.jsx("div",{className:"community-meta",children:u.jsxs("span",{children:[Cs.users," ",c.members," members"]})})]}),u.jsx("div",{className:"community-card-footer",children:u.jsx("button",{className:"join-community-btn",children:"Join Community"})})]},d)),u.jsxs("div",{className:"community-card create-card glass",children:[u.jsx("div",{className:"create-card-icon",children:Cs.plus}),u.jsx("h3",{children:"Create Community"}),u.jsx("p",{children:"Start your own community and bring people together"}),u.jsx("button",{className:"create-community-btn",children:"Get Started"})]})]})]}),u.jsx("style",{children:`
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
      `})]})}const aR=[{tag:"framex",posts:"2.4K"},{tag:"design",posts:"1.8K"},{tag:"coding",posts:"1.2K"},{tag:"uiux",posts:"892"},{tag:"react",posts:"756"},{tag:"photography",posts:"654"},{tag:"art",posts:"543"},{tag:"music",posts:"432"}],iR=[{handle:"@creativemind",name:"Creative Mind",avatarColor:"#CCFF00",followers:"12.4K"},{handle:"@designpro",name:"Design Pro",avatarColor:"#FF6B6B",followers:"8.7K"},{handle:"@codemaster",name:"Code Master",avatarColor:"#4ECDC4",followers:"6.2K"},{handle:"@artistico",name:"Artistico",avatarColor:"#A78BFA",followers:"5.1K"}],bb=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];function rR(){const[t]=k.useState(aR),[e,i]=k.useState(iR);return k.useEffect(()=>{(async()=>{try{const{data:o}=await de.from("profiles").select("username, display_name").limit(4);o&&o.length>0&&i(o.map((c,d)=>({handle:`@${c.username||c.display_name}`,name:c.display_name||c.username,avatarColor:bb[d%bb.length],followers:`${Math.floor(Math.random()*10+1)}.${Math.floor(Math.random()*9)}K`})))}catch{}})()},[]),{trendData:t,trendingCreators:e}}const sR=[{id:"1",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:"creativemind",avatarColor:"#CCFF00",likes:234,comments:18,isVideo:!1},{id:"2",imageUrl:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",username:"designpro",avatarColor:"#FF6B6B",likes:189,comments:24,isVideo:!1},{id:"3",imageUrl:"https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600",username:"codemaster",avatarColor:"#4ECDC4",likes:312,comments:42,isVideo:!1},{id:"4",imageUrl:"https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=600",username:"artistico",avatarColor:"#A78BFA",likes:156,comments:11,isVideo:!0},{id:"5",imageUrl:"https://images.unsplash.com/photo-1550684376-efcbd6e3f031?w=600",username:"pixelator",avatarColor:"#FFD93D",likes:278,comments:33,isVideo:!1},{id:"6",imageUrl:"https://images.unsplash.com/photo-1563089145-599997674d42?w=600",username:"neonwave",avatarColor:"#6BCB77",likes:445,comments:67,isVideo:!1},{id:"7",imageUrl:"https://images.unsplash.com/photo-1557683316-973673baf926?w=600",username:"cyberpunk",avatarColor:"#FF6B6B",likes:523,comments:89,isVideo:!0},{id:"8",imageUrl:"https://images.unsplash.com/photo-1574169208507-84376144848b?w=600",username:"abstractor",avatarColor:"#CCFF00",likes:167,comments:14,isVideo:!1},{id:"9",imageUrl:"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:"dreamcast",avatarColor:"#A78BFA",likes:398,comments:55,isVideo:!1}],xb=[{type:"trend",label:"FrameX",sub:"Trending"},{type:"trend",label:"Design",sub:"12.4K posts"},{type:"trend",label:"React",sub:"8.2K posts"},{type:"trend",label:"UI/UX",sub:"6.7K posts"},{type:"community",label:"Pixel Artists",sub:"12.4K members"},{type:"community",label:"Code Crew",sub:"8.2K members"},{type:"community",label:"Synthwave",sub:"6.7K members"},{type:"community",label:"Neo Creators",sub:"15.1K members"}],oR=[{tag:"framex",posts:"2.4K"},{tag:"design",posts:"1.8K"},{tag:"coding",posts:"1.2K"},{tag:"uiux",posts:"892"},{tag:"react",posts:"756"},{tag:"photography",posts:"654"},{tag:"art",posts:"543"},{tag:"music",posts:"432"}],lR=[{id:"for-you",label:"For You",icon:"✨"},{id:"trending",label:"Trending",icon:"🔥"},{id:"photos",label:"Photos",icon:"📷"},{id:"videos",label:"Videos",icon:"🎬"},{id:"communities",label:"Communities",icon:"👥"},{id:"technology",label:"Tech",icon:"💻"},{id:"gaming",label:"Gaming",icon:"🎮"},{id:"art",label:"Art",icon:"🎨"},{id:"music",label:"Music",icon:"🎵"}],wb=[{handle:"@creativemind",name:"Creative Mind",avatarColor:"#CCFF00",followers:"12.4K"},{handle:"@designpro",name:"Design Pro",avatarColor:"#FF6B6B",followers:"8.7K"},{handle:"@codemaster",name:"Code Master",avatarColor:"#4ECDC4",followers:"6.2K"},{handle:"@artistico",name:"Artistico",avatarColor:"#A78BFA",followers:"5.1K"}],Sb=[{name:"Pixel Artists",icon:"🎨",members:"12.4K"},{name:"Code Crew",icon:"💻",members:"8.2K"},{name:"Synthwave",icon:"🎵",members:"6.7K"},{name:"Neo Creators",icon:"✨",members:"15.1K"},{name:"Photo Masters",icon:"📷",members:"9.3K"},{name:"Gaming Hub",icon:"🎮",members:"11.8K"},{name:"Design Talk",icon:"🎨",members:"7.5K"}],cR=()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"20",height:"20",children:[u.jsx("circle",{cx:"11",cy:"11",r:"8"}),u.jsx("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),uR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),dR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",width:"16",height:"16",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),hR=()=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"currentColor",width:"24",height:"24",children:u.jsx("path",{d:"M8 5v14l11-7z"})}),fR={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.04}}},pR={hidden:{opacity:0,y:20,scale:.95},visible:{opacity:1,y:0,scale:1,transition:{type:"spring",stiffness:100,damping:18}}};function mR(){const t=mn(),[e,i]=k.useState(!0),[r,o]=k.useState("for-you"),[c,d]=k.useState(""),[h,p]=k.useState(!1),{trendData:g,trendingCreators:y}=rR(),[v,x]=k.useState({}),[w,S]=k.useState({}),_=k.useRef(null),E=k.useRef(null),T=k.useRef(null),[O,R]=k.useState({users:[],hashtags:[],posts:[]}),[L,K]=k.useState(!1),W=k.useRef(null),F=k.useCallback(async C=>{if(C.length<1){R({users:[],hashtags:[],posts:[]});return}K(!0);try{const I=`%${C}%`,[Z,H]=await Promise.all([de.from("profiles").select("id, username, display_name, avatar_url, bio").or(`username.ilike.${I},display_name.ilike.${I}`).limit(5),de.from("posts").select("id, content, created_at, profiles!inner(id, username, display_name, avatar_url)").ilike("content",I).order("created_at",{ascending:!1}).limit(10)]),ae=new Set,N=[];if(H.data){const V=/#(\w+)/gi;for(const Q of H.data){let ie;for(;(ie=V.exec(Q.content))!==null;){const ce=ie[1].toLowerCase();!ae.has(ce)&&ce.includes(C.toLowerCase())&&(ae.add(ce),N.push({tag:ce,posts:"—"}))}}}R({users:Z.data||[],hashtags:N.slice(0,5),posts:H.data||[]})}catch(I){console.warn("Search error:",I),R({users:[],hashtags:[],posts:[]})}finally{K(!1)}},[]);k.useEffect(()=>{if(W.current&&clearTimeout(W.current),!c.trim()){R({users:[],hashtags:[],posts:[]});return}return W.current=setTimeout(()=>F(c.trim()),300),()=>{W.current&&clearTimeout(W.current)}},[c,F]),k.useEffect(()=>{const C=setTimeout(()=>i(!1),1800);return()=>clearTimeout(C)},[]);const Y=$a(C=>C.posts),ee=$a(C=>C.fetchFeed),re=k.useMemo(()=>{if((Y==null?void 0:Y.length)>0){const C=["#CCFF00","#FF6B6B","#4ECDC4","#A78BFA","#FFD93D","#6BCB77"];return Y.filter(I=>I.image_url||I.video_url).map((I,Z)=>{var H,ae;return{id:I.id,imageUrl:I.image_url||"https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600",username:((H=I.profiles)==null?void 0:H.username)||((ae=I.profiles)==null?void 0:ae.display_name)||"user",avatarColor:C[Z%C.length],likes:I.likes??0,comments:I.comments??0,isVideo:!!I.video_url}})}return sR},[Y]);k.useEffect(()=>{Y!=null&&Y.length||ee()},[]),k.useEffect(()=>{const C=I=>{_.current&&!_.current.contains(I.target)&&p(!1)};return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]);const me=k.useMemo(()=>{if(!c.trim())return xb;const C=c.toLowerCase();return xb.filter(I=>I.label.toLowerCase().includes(C)||I.sub.toLowerCase().includes(C))},[c]),fe=C=>{x(I=>({...I,[C]:!I[C]}))},Oe=C=>{S(I=>({...I,[C]:!I[C]}))},Ne=C=>{switch(C){case"user":return"👤";case"hashtag":return"#️⃣";case"post":return"📄";case"community":return"👥";default:return"•"}},je=()=>u.jsx("div",{className:"explore-skeleton-grid",children:Array.from({length:6}).map((C,I)=>u.jsx("div",{className:"explore-skeleton-item",style:{height:I%3===0?280:I%3===1?200:240},children:u.jsx("div",{className:"explore-shimmer"})},I))});return u.jsxs("div",{className:"explore-page",children:[u.jsxs("div",{className:"explore-search-wrapper",ref:_,children:[u.jsxs("div",{className:`explore-search ${h?"explore-search-focused":""}`,children:[u.jsx(cR,{}),u.jsx("input",{type:"text",placeholder:"Search posts, creators, hashtags...",value:c,onChange:C=>d(C.target.value),onFocus:()=>p(!0)}),c&&u.jsx("button",{className:"explore-search-clear",onClick:()=>d(""),children:"✕"})]}),u.jsx(pn,{children:h&&u.jsx(we.div,{className:"explore-suggestions",initial:{opacity:0,y:-8},animate:{opacity:1,y:0},exit:{opacity:0,y:-8},transition:{duration:.2},children:c.trim()?L?u.jsx("div",{className:"explore-search-status",children:"Searching..."}):u.jsxs(u.Fragment,{children:[u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Users"}),O.users.length>0?O.users.map((C,I)=>{var Z,H;return u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:I*.03},onClick:()=>t(`/profile/${C.id}`),style:{cursor:"pointer"},children:[u.jsx("span",{className:"explore-suggestion-icon",style:{background:C.avatar_url?`url(${C.avatar_url}) center/cover`:"var(--surface)",borderRadius:"50%",overflow:"hidden"},children:!C.avatar_url&&(((Z=C.display_name)==null?void 0:Z[0])||((H=C.username)==null?void 0:H[0])||"?")}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:C.display_name||C.username}),u.jsxs("span",{className:"explore-suggestion-sub",children:["@",C.username]})]})]},`user-${C.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No users found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Hashtags"}),O.hashtags.length>0?O.hashtags.map((C,I)=>u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:I*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"#️⃣"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsxs("span",{className:"explore-suggestion-label",children:["#",C.tag]}),u.jsxs("span",{className:"explore-suggestion-sub",children:[C.posts," posts"]})]})]},`tag-${C.tag}`)):u.jsx("div",{className:"explore-search-empty",children:"No hashtags found"})]}),u.jsxs("div",{className:"explore-search-section",children:[u.jsx("div",{className:"explore-search-section-title",children:"Posts"}),O.posts.length>0?O.posts.map((C,I)=>{var Z,H;return u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:I*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:"📄"}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:C.content.length>60?C.content.slice(0,60)+"...":C.content}),u.jsxs("span",{className:"explore-suggestion-sub",children:["by @",((Z=C.profiles)==null?void 0:Z.username)||((H=C.profiles)==null?void 0:H.display_name)||"user"]})]})]},`post-${C.id}`)}):u.jsx("div",{className:"explore-search-empty",children:"No posts found"})]}),!L&&O.users.length===0&&O.hashtags.length===0&&O.posts.length===0&&u.jsxs("div",{className:"explore-search-empty explore-search-empty-all",children:['No results found for "',c,'"']})]}):me.map((C,I)=>u.jsxs(we.div,{className:"explore-suggestion-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:I*.03},children:[u.jsx("span",{className:"explore-suggestion-icon",children:Ne(C.type)}),u.jsxs("div",{className:"explore-suggestion-info",children:[u.jsx("span",{className:"explore-suggestion-label",children:C.label}),u.jsx("span",{className:"explore-suggestion-sub",children:C.sub})]})]},`${C.type}-${C.label}`))})})]}),u.jsx("div",{className:"explore-hashtags-wrapper",children:u.jsx("div",{className:"explore-hashtags",ref:E,children:((g==null?void 0:g.length)>0?g:oR).map(C=>u.jsxs("button",{className:"explore-hashtag-pill",children:[u.jsx("span",{className:"explore-hashtag-sign",children:"#"}),C.tag,u.jsx("span",{className:"explore-hashtag-count",children:C.posts})]},C.tag))})}),u.jsx("div",{className:"explore-tabs-wrapper",children:u.jsxs("div",{className:"explore-tabs",ref:T,children:[lR.map(C=>u.jsxs("button",{className:`explore-tab ${r===C.id?"explore-tab-active":""}`,onClick:()=>o(C.id),children:[u.jsx("span",{className:"explore-tab-icon",children:C.icon}),u.jsx("span",{className:"explore-tab-label",children:C.label})]},C.id)),u.jsx(we.div,{className:"explore-tab-indicator",layoutId:"active-tab",transition:{type:"spring",stiffness:400,damping:30}})]})}),u.jsxs("div",{className:"explore-content",children:[u.jsx("div",{className:"explore-grid-section",children:e?u.jsx(je,{}):u.jsx(we.div,{className:"explore-masonry",variants:fR,initial:"hidden",animate:"visible",children:u.jsx(pn,{mode:"popLayout",children:re.map(C=>u.jsx(we.div,{className:"explore-masonry-item",variants:pR,layout:!0,exit:{opacity:0,scale:.9,transition:{duration:.2}},children:u.jsxs("div",{className:"explore-masonry-img-wrap",children:[u.jsx("img",{src:C.imageUrl,alt:`by ${C.username}`,loading:"lazy"}),C.isVideo&&u.jsx("div",{className:"explore-video-badge",children:u.jsx(hR,{})}),u.jsxs("div",{className:"explore-masonry-overlay",children:[u.jsxs("div",{className:"explore-masonry-stats",children:[u.jsxs("span",{children:[u.jsx(uR,{})," ",C.likes>=1e3?`${(C.likes/1e3).toFixed(1)}K`:C.likes]}),u.jsxs("span",{children:[u.jsx(dR,{})," ",C.comments]})]}),u.jsxs("div",{className:"explore-masonry-creator",children:[u.jsx("span",{className:"explore-masonry-avatar",style:{background:C.avatarColor},children:C.username.charAt(0)}),u.jsx("span",{className:"explore-masonry-username",children:C.username})]})]})]})},C.id))})},r)}),u.jsxs("aside",{className:"explore-sidebar",children:[u.jsxs("div",{className:"explore-sidebar-section",children:[u.jsx("h3",{className:"explore-sidebar-title",children:"Trending Creators"}),u.jsx("div",{className:"explore-creators-list",children:((y==null?void 0:y.length)>0?y:wb).map(C=>u.jsxs("div",{className:"explore-creator-row",children:[u.jsx("div",{className:"explore-creator-avatar",style:{background:C.avatarColor},children:C.name.charAt(0)}),u.jsxs("div",{className:"explore-creator-info",children:[u.jsx("span",{className:"explore-creator-name",children:C.name}),u.jsx("span",{className:"explore-creator-handle",children:C.handle}),u.jsxs("span",{className:"explore-creator-followers",children:[C.followers," followers"]})]}),u.jsx("button",{className:`explore-follow-btn ${v[C.handle]?"explore-following":""}`,onClick:()=>fe(C.handle),children:v[C.handle]?"Following":"Follow"})]},C.handle))})]}),u.jsxs("div",{className:"explore-sidebar-section",children:[u.jsx("h3",{className:"explore-sidebar-title",children:"Suggested Communities"}),u.jsx("div",{className:"explore-communities-list",children:Sb.slice(0,5).map(C=>u.jsxs("div",{className:"explore-community-row",children:[u.jsx("span",{className:"explore-community-icon",children:C.icon}),u.jsxs("div",{className:"explore-community-info",children:[u.jsx("span",{className:"explore-community-name",children:C.name}),u.jsxs("span",{className:"explore-community-members",children:[C.members," members"]})]}),u.jsx("button",{className:`explore-join-btn ${w[C.name]?"explore-joined":""}`,onClick:()=>Oe(C.name),children:w[C.name]?"Joined":"Join"})]},C.name))})]})]})]}),u.jsxs("div",{className:"explore-mobile-section",children:[u.jsx("h3",{className:"explore-mobile-title",children:"Trending Creators"}),u.jsx("div",{className:"explore-mobile-scroll",children:((y==null?void 0:y.length)>0?y:wb).map(C=>u.jsxs("div",{className:"explore-mobile-creator",children:[u.jsx("div",{className:"explore-mobile-creator-avatar",style:{background:C.avatarColor},children:C.name.charAt(0)}),u.jsx("span",{className:"explore-mobile-creator-name",children:C.name}),u.jsx("span",{className:"explore-mobile-creator-followers",children:C.followers}),u.jsx("button",{className:`explore-mobile-follow-btn ${v[C.handle]?"explore-following":""}`,onClick:()=>fe(C.handle),children:v[C.handle]?"Following":"Follow"})]},C.handle))})]}),u.jsxs("div",{className:"explore-mobile-section",children:[u.jsx("h3",{className:"explore-mobile-title",children:"Suggested Communities"}),u.jsx("div",{className:"explore-mobile-scroll",children:Sb.slice(0,6).map(C=>u.jsxs("div",{className:"explore-mobile-community",children:[u.jsx("span",{className:"explore-mobile-community-icon",children:C.icon}),u.jsx("span",{className:"explore-mobile-community-name",children:C.name}),u.jsx("span",{className:"explore-mobile-community-members",children:C.members}),u.jsx("button",{className:`explore-mobile-join-btn ${w[C.name]?"explore-joined":""}`,onClick:()=>Oe(C.name),children:w[C.name]?"Joined":"Join"})]},C.name))})]}),u.jsx("style",{children:`
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
      `})]})}const mi=Si((t,e)=>({notifications:[],unreadCount:0,isLoading:!1,fetchNotifications:async()=>{t({isLoading:!0});try{const{data:i,error:r}=await de.from("notifications").select(`
          *,
          actor:actor_id (id, username, display_name, avatar_url)
        `).order("created_at",{ascending:!1}).limit(50);if(r)throw r;const o=(i||[]).filter(c=>!c.is_read).length;t({notifications:i||[],unreadCount:o,isLoading:!1})}catch(i){t({isLoading:!1}),console.error("Fetch notifications error:",i.message)}},addNotificationRealtime:i=>{t(r=>r.notifications.some(c=>c.id===i.id)?r:{notifications:[i,...r.notifications],unreadCount:r.unreadCount+(i.is_read?0:1)})},markAsRead:async i=>{const{error:r}=await de.from("notifications").update({is_read:!0}).eq("id",i);if(r){console.error("Mark as read error:",r.message);return}t(o=>({notifications:o.notifications.map(c=>c.id===i?{...c,is_read:!0}:c),unreadCount:Math.max(0,o.unreadCount-1)}))},markAllAsRead:async()=>{const{error:i}=await de.from("notifications").update({is_read:!0}).eq("is_read",!1);if(i){console.error("Mark all as read error:",i.message);return}t(r=>({notifications:r.notifications.map(o=>({...o,is_read:!0})),unreadCount:0}))}}));function gR(){const t=At(p=>p.user),e=mi(p=>p.notifications),i=mi(p=>p.unreadCount),r=mi(p=>p.fetchNotifications),o=mi(p=>p.markAllAsRead),c=mi(p=>p.addNotificationRealtime),[d,h]=k.useState([]);return k.useEffect(()=>{r()},[r]),k.useEffect(()=>{if(!t)return;const p=de.channel("realtime-notifications").on("postgres_changes",{event:"INSERT",schema:"public",table:"notifications",filter:`user_id=eq.${t.id}`},async g=>{const{data:y,error:v}=await de.from("notifications").select("*, actor:actor_id (id, username, display_name, avatar_url)").eq("id",g.new.id).single();v||!y||(h(x=>x.some(w=>w.id===y.id)?x:[y,...x]),c(y))}).subscribe();return()=>{de.removeChannel(p)}},[t,c]),{liveNotifications:d,unreadCount:i,markAllAsRead:o,notificationEvents:e}}const gi={heartFilled:u.jsx("svg",{viewBox:"0 0 24 24",fill:"#ff6464",stroke:"#ff6464",strokeWidth:"2",children:u.jsx("path",{d:"M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"})}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),messageCircle:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"})}),users:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),checkAll:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("polyline",{points:"9 11 12 14 22 4"}),u.jsx("path",{d:"M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"}),u.jsx("polyline",{points:"9 11 12 14 22 4"})]}),bellOff:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"}),u.jsx("path",{d:"M18.63 13A17.89 17.89 0 0118 8"}),u.jsx("path",{d:"M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14"}),u.jsx("path",{d:"M18 8a6 6 0 00-9.33-5"}),u.jsx("line",{x1:"1",y1:"1",x2:"23",y2:"23"})]}),tag:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"}),u.jsx("line",{x1:"7",y1:"7",x2:"7.01",y2:"7"})]})},jb={heart:gi.heartFilled,user:gi.user,message:gi.messageCircle,users:gi.users,tag:gi.tag};function yR(){const{notificationState:t=[],unreadCount:e,markAllAsRead:i}=gR(),[r,o]=k.useState(!1),c=i,d=t.filter(p=>{const g=p.time.match(/(\d+)([mh])/);if(!g)return!1;const[,y,v]=g;return v==="m"?parseInt(y)<60:v==="h"?parseInt(y)<24:!1}),h=t.filter(p=>{const g=p.time.match(/(\d+)([dh])/);if(!g)return!0;const[,y,v]=g;return v==="h"?parseInt(y)>=1:!0});return r||t.length===0?u.jsxs("div",{className:"page-enter",children:[u.jsx("div",{className:"notifications-page",children:u.jsxs("div",{className:"empty-state glass",children:[u.jsx("div",{className:"empty-icon",children:gi.bellOff}),u.jsx("h3",{children:"All caught up!"}),u.jsx("p",{children:"No new notifications. You're up to date."})]})}),u.jsx("style",{children:kb})]}):u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"notifications-page",children:[u.jsxs("div",{className:"page-header",children:[u.jsxs("div",{className:"page-header-left",children:[u.jsx("h1",{children:"Notifications"}),e>0&&u.jsx("span",{className:"unread-badge",children:e})]}),u.jsxs("button",{className:"mark-all-btn",onClick:c,disabled:e===0,children:[gi.checkAll," Mark all as read"]})]}),d.length>0&&u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Today"}),u.jsx("div",{className:"notif-list",children:u.jsx(pn,{mode:"popLayout",children:d.map((p,g)=>u.jsxs(we.div,{layout:!0,initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{type:"spring",stiffness:300,damping:25},className:`notif-item glass ${p.read?"notif-read":""}`,children:[u.jsx("div",{className:"notif-icon",style:{background:p.read?"var(--surface)":"color-mix(in srgb, var(--accent) 10%, transparent)"},children:jb[p.icon]}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:p.text}),u.jsx("span",{className:"notif-time",children:p.time})]}),!p.read&&u.jsx("div",{className:"notif-dot"})]},`today-${p.type}-${g}`))})})]}),u.jsxs("div",{className:"notif-section",children:[u.jsx("h2",{className:"notif-section-title",children:"Earlier"}),u.jsx("div",{className:"notif-list",children:u.jsx(pn,{mode:"popLayout",children:h.map((p,g)=>u.jsxs(we.div,{layout:!0,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0,x:20},transition:{duration:.2},className:"notif-item glass notif-read",children:[u.jsx("div",{className:"notif-icon",style:{background:"var(--surface)"},children:jb[p.icon]}),u.jsxs("div",{className:"notif-content",children:[u.jsx("p",{className:"notif-text",children:p.text}),u.jsx("span",{className:"notif-time",children:p.time})]})]},`earlier-${p.type}-${g}`))})})]})]}),u.jsx("style",{children:kb})]})}const kb=`
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
`,_b=Si(t=>({metrics:null,isLoading:!1,dateRange:"7d",fetchMetrics:async(e="7d")=>{t({isLoading:!0,dateRange:e});const i=new Date;let r;switch(e){case"24h":r=new Date(i-1440*60*1e3);break;case"7d":r=new Date(i-10080*60*1e3);break;case"30d":r=new Date(i-720*60*60*1e3);break;case"90d":r=new Date(i-2160*60*60*1e3);break;default:r=new Date(i-10080*60*1e3)}try{const[o,c,d,h]=await Promise.allSettled([de.from("posts").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),de.from("likes").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),de.from("comments").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString()),de.from("follows").select("id",{count:"exact",head:!0}).gte("created_at",r.toISOString())]),p={posts:o.status==="fulfilled"?o.value.count??0:0,likes:c.status==="fulfilled"?c.value.count??0:0,comments:d.status==="fulfilled"?d.value.count??0:0,follows:h.status==="fulfilled"?h.value.count??0:0};t({metrics:p,isLoading:!1})}catch(o){t({isLoading:!1}),console.error("Fetch metrics error:",o.message)}},getMetricHistory:async(e="posts",i="7d")=>{const r=new Date;let o;switch(i){case"24h":o=new Date(r-1440*60*1e3);break;case"7d":o=new Date(r-10080*60*1e3);break;case"30d":o=new Date(r-720*60*60*1e3);break;case"90d":o=new Date(r-2160*60*60*1e3);break;default:o=new Date(r-10080*60*1e3)}const d={posts:"posts",likes:"likes",comments:"comments",follows:"follows"}[e];if(!d)return[];try{const{data:h,error:p}=await de.from(d).select("created_at").gte("created_at",o.toISOString()).order("created_at",{ascending:!0});if(p)throw p;const g={},y=i==="24h"?3600*1e3:1440*60*1e3;for(const v of h||[]){const w=new Date(Math.floor(new Date(v.created_at).getTime()/y)*y).toISOString();g[w]=(g[w]||0)+1}return Object.entries(g).map(([v,x])=>({date:v,value:x}))}catch(h){return console.error(`Fetch ${e} history error:`,h.message),[]}}}));function vR(){const t=_b(i=>i.metrics),e=_b(i=>i.fetchMetrics);return k.useEffect(()=>{t||e()},[t,e]),{analyticsData:t}}const Tb={connecting:{color:"#fbbf24",label:"Connecting...",pulse:!0},connected:{color:"#22c55e",label:"Connected",pulse:!1},disconnected:{color:"#ef4444",label:"Disconnected",pulse:!1},reconnecting:{color:"#f97316",label:"Reconnecting...",pulse:!0}};function lw({variant:t="sidebar"}){const[e,i]=k.useState(!1),r=k.useRef(null);k.useEffect(()=>()=>clearTimeout(r.current),[]);const{connectionStatus:o,isFallbackMode:c}=window.__FRAMEX_REALTIME__||{connectionStatus:"connecting",isFallbackMode:!0};k.useEffect(()=>{i(!0),clearTimeout(r.current),o==="connected"&&(r.current=setTimeout(()=>i(!1),3e3))},[o]);const d=Tb[o]||Tb.connecting;return t==="sidebar"?u.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",padding:"8px 16px",cursor:"pointer",position:"relative"},title:`${d.label}${c?" (Simulated)":""}`,children:[u.jsx("span",{style:{width:8,height:8,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none",flexShrink:0}}),u.jsx("span",{style:{fontSize:11,color:"var(--text-secondary, rgba(255,255,255,0.4))",fontFamily:"monospace"},children:d.label}),c&&u.jsx("span",{style:{fontSize:9,padding:"1px 5px",borderRadius:4,backgroundColor:"var(--surface, rgba(255,255,255,0.05))",color:"var(--text-secondary, rgba(255,255,255,0.4))"},children:"SIM"})]}):u.jsx("div",{style:{position:"relative",width:20,height:20,display:"flex",alignItems:"center",justifyContent:"center"},title:`${d.label}${c?" (Simulated)":""}`,children:u.jsx("span",{style:{width:6,height:6,borderRadius:"50%",backgroundColor:d.color,boxShadow:d.pulse?`0 0 6px ${d.color}`:"none",animation:d.pulse?"connectionPulse 1.5s ease-in-out infinite":"none"}})})}const bR={liveViewers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"}),u.jsx("circle",{cx:"12",cy:"12",r:"3"})]}),activeUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),totalUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M22 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),postsPerMinute:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),u.jsx("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]}),engagementRate:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:u.jsx("polyline",{points:"22 12 18 12 15 21 9 3 6 12 2 12"})}),dailyActiveUsers:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("rect",{x:"3",y:"4",width:"18",height:"18",rx:"2"}),u.jsx("line",{x1:"16",y1:"2",x2:"16",y2:"6"}),u.jsx("line",{x1:"8",y1:"2",x2:"8",y2:"6"}),u.jsx("line",{x1:"3",y1:"10",x2:"21",y2:"10"})]}),newSignupsToday:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("path",{d:"M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"8.5",cy:"7",r:"4"}),u.jsx("line",{x1:"20",y1:"8",x2:"20",y2:"14"}),u.jsx("line",{x1:"23",y1:"11",x2:"17",y2:"11"})]}),avgSessionDuration:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polyline",{points:"12 6 12 12 16 14"})]})},xR={liveViewers:"Live Viewers",activeUsers:"Active Users",totalUsers:"Total Users",postsPerMinute:"Posts / Min",engagementRate:"Engagement Rate",dailyActiveUsers:"DAU",newSignupsToday:"New Signups",avgSessionDuration:"Avg Session"},wR={liveViewers:"#CCFF00",activeUsers:"#60a5fa",totalUsers:"#a78bfa",postsPerMinute:"#f472b6",engagementRate:"#34d399",dailyActiveUsers:"#fbbf24",newSignupsToday:"#fb923c",avgSessionDuration:"#22d3ee"};function SR({value:t,color:e}){const i=Array.from({length:20},(o,c)=>{const d=t*(1+(Math.random()-.5)*.4);return{x:c*5,y:30-d/100*25}}),r=i.map((o,c)=>`${c===0?"M":"L"}${o.x},${o.y}`).join(" ");return u.jsxs("svg",{width:"100",height:"30",style:{flexShrink:0},children:[u.jsx("path",{d:r,fill:"none",stroke:e,strokeWidth:"1.5",opacity:"0.6"}),i.map((o,c)=>u.jsx("circle",{cx:o.x,cy:o.y,r:"1.5",fill:e,opacity:"0.4"},c))]})}function Eb({metricKey:t,metric:e,index:i}){var d,h;const r=wR[t]||"#CCFF00",o=typeof e.current=="number"?e.current.toLocaleString():e.current,c=(h=(d=e.change)==null?void 0:d.startsWith)==null?void 0:h.call(d,"+");return u.jsxs(we.div,{className:"analytics-card glass",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:i*.05,type:"spring",stiffness:100},children:[u.jsxs("div",{className:"analytics-card-header",children:[u.jsx("div",{className:"analytics-card-icon",style:{background:`${r}15`,color:r},children:bR[t]}),u.jsx("span",{className:"analytics-card-change",style:{color:c?"#34d399":"#f87171"},children:e.change})]}),u.jsx("div",{className:"analytics-card-value",children:o}),u.jsx("div",{className:"analytics-card-label",children:xR[t]}),u.jsx(SR,{value:typeof e.current=="number"?e.current:parseInt(e.current)||50,color:r})]})}function jR(){const{analyticsData:t}=vR(),[e,i]=k.useState("1h"),r=Object.entries(t),o=r.slice(0,4),c=r.slice(4);return u.jsxs("div",{className:"page-enter",children:[u.jsxs("div",{className:"analytics-dashboard",children:[u.jsxs("div",{className:"analytics-header",children:[u.jsxs("div",{children:[u.jsx("h1",{className:"analytics-title",children:"Live Analytics"}),u.jsx("p",{className:"analytics-subtitle",children:"Real-time dashboard metrics"})]}),u.jsxs("div",{className:"analytics-header-right",children:[u.jsx(lw,{variant:"sidebar"}),u.jsx("div",{className:"analytics-time-selector",children:["1h","24h","7d","30d"].map(d=>u.jsx("button",{className:`analytics-time-btn ${e===d?"active":""}`,onClick:()=>i(d),children:d},d))})]})]}),u.jsx("div",{className:"analytics-primary-grid",children:o.map(([d,h],p)=>u.jsx(Eb,{metricKey:d,metric:h,index:p},d))}),u.jsx("div",{className:"analytics-secondary-grid",children:c.map(([d,h],p)=>u.jsx(Eb,{metricKey:d,metric:h,index:p+4},d))}),u.jsxs("div",{className:"analytics-footer glass",children:[u.jsx("div",{className:"analytics-footer-dot"}),u.jsx("span",{children:"All metrics updating in real-time • Auto-refresh enabled"})]})]}),u.jsx("style",{children:kR})]})}const kR=`
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
`,cw=k.createContext(),Cb="framex-theme",_R={"--bg":"#08080f","--bg-alt":"#0c0c18","--text":"#ffffff","--text-secondary":"rgba(255,255,255,0.4)","--surface":"rgba(255,255,255,0.05)","--surface-hover":"rgba(255,255,255,0.10)","--border":"rgba(255,255,255,0.08)","--accent":"#CCFF00","--accent-text":"#08080f","--danger":"#ff4d4d","--glass-bg":"rgba(255,255,255,0.05)","--glass-border":"rgba(255,255,255,0.08)"},TR={"--bg":"#ffffff","--bg-alt":"#f5f5f7","--text":"#111111","--text-secondary":"rgba(0,0,0,0.45)","--surface":"rgba(0,0,0,0.03)","--surface-hover":"rgba(0,0,0,0.06)","--border":"rgba(0,0,0,0.08)","--accent":"#a0cc00","--accent-text":"#ffffff","--danger":"#e03030","--glass-bg":"rgba(255,255,255,0.7)","--glass-border":"rgba(0,0,0,0.06)"};function Ab(t){const e=t==="light"?TR:_R,i=document.documentElement;Object.entries(e).forEach(([r,o])=>i.style.setProperty(r,o)),i.setAttribute("data-theme",t)}function kh(){return typeof window>"u"?"dark":window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark"}function ER({children:t}){const[e,i]=k.useState(()=>{try{const h=localStorage.getItem(Cb);if(h==="dark"||h==="light"||h==="system")return h}catch{}return"dark"}),[r,o]=k.useState(()=>e==="system"?kh():e),c=k.useCallback(h=>{i(h);try{localStorage.setItem(Cb,h)}catch{}},[]),d=Nt();return k.useEffect(()=>{d.pathname==="/"?Ab("dark"):Ab(r)},[r,d.pathname]),k.useEffect(()=>{o(e==="system"?kh():e)},[e]),k.useEffect(()=>{if(e!=="system")return;const h=window.matchMedia("(prefers-color-scheme: dark)"),p=()=>o(kh());return h.addEventListener("change",p),()=>h.removeEventListener("change",p)},[e]),k.useEffect(()=>{const h=document.createElement("style");h.textContent=`
      *, *::before, *::after {
        transition: background-color 0.3s ease, color 0.3s ease,
                    border-color 0.3s ease, box-shadow 0.3s ease,
                    backdrop-filter 0.3s ease !important;
      }
    `,h.id="theme-transition-style";const p=document.getElementById("theme-transition-style");p&&p.remove(),document.head.appendChild(h);const g=setTimeout(()=>{const y=document.getElementById("theme-transition-style");y&&y.remove()},400);return()=>{clearTimeout(g);const y=document.getElementById("theme-transition-style");y&&y.remove()}},[r]),u.jsx(cw.Provider,{value:{theme:e,setTheme:c,resolvedTheme:r},children:t})}function CR(){const t=k.useContext(cw);if(!t)throw new Error("useTheme must be used within ThemeProvider");return t}const Vt={dark:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"})}),light:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"5"}),u.jsx("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),u.jsx("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),u.jsx("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),u.jsx("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),u.jsx("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),u.jsx("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),u.jsx("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),u.jsx("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"})]}),system:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),u.jsx("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),u.jsx("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),user:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),lock:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]}),bell:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 01-3.46 0"})]}),shield:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})}),chevronRight:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"9 18 15 12 9 6"})}),helpCircle:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),u.jsx("line",{x1:"12",y1:"17",x2:"12.01",y2:"17"})]}),info:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"12",y1:"16",x2:"12",y2:"12"}),u.jsx("line",{x1:"12",y1:"8",x2:"12.01",y2:"8"})]}),fileText:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"}),u.jsx("polyline",{points:"14 2 14 8 20 8"}),u.jsx("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),u.jsx("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),u.jsx("polyline",{points:"10 9 9 9 8 9"})]}),logOut:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]}),check:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})})},AR=[{id:"dark",label:"Dark",icon:Vt.dark},{id:"light",label:"Light",icon:Vt.light},{id:"system",label:"System",icon:Vt.system}],NR=[{id:"edit-profile",label:"Edit Profile",icon:Vt.user},{id:"privacy",label:"Privacy Settings",icon:Vt.lock},{id:"notifications",label:"Notification Settings",icon:Vt.bell},{id:"security",label:"Security Settings",icon:Vt.shield}],RR=[{id:"contact",label:"Contact Us",icon:Vt.helpCircle},{id:"about",label:"About FrameX",icon:Vt.info},{id:"terms",label:"Terms & Privacy Policy",icon:Vt.fileText}],OR={initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.5}};function DR(){const{theme:t,setTheme:e}=CR(),{signOut:i}=At(),r=mn(),o=async()=>{try{await i(),r("/login")}catch{}};return u.jsxs(we.div,{className:"settings-page",...OR,children:[u.jsxs("div",{className:"page-header",children:[u.jsx("h1",{children:"Settings"}),u.jsx("p",{children:"Manage your account and preferences"})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Appearance"}),u.jsx("div",{className:"theme-options",children:AR.map(c=>u.jsxs("button",{className:`theme-card ${t===c.id?"active":""}`,onClick:()=>e(c.id),children:[u.jsx("div",{className:"theme-card-icon",children:c.icon}),u.jsx("span",{className:"theme-card-label",children:c.label}),t===c.id&&u.jsx("div",{className:"theme-card-check",children:Vt.check})]},c.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Account"}),u.jsx("div",{className:"settings-items",children:NR.map(c=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:c.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:c.label})}),u.jsx("div",{className:"settings-item-arrow",children:Vt.chevronRight})]},c.id))})]}),u.jsxs("div",{className:"settings-card glass",children:[u.jsx("h3",{className:"settings-card-title",children:"Support"}),u.jsx("div",{className:"settings-items",children:RR.map(c=>u.jsxs("div",{className:"settings-item",children:[u.jsx("div",{className:"settings-item-icon",children:c.icon}),u.jsx("div",{className:"settings-item-content",children:u.jsx("span",{className:"settings-item-label",children:c.label})}),u.jsx("div",{className:"settings-item-arrow",children:Vt.chevronRight})]},c.id))})]}),u.jsxs("div",{className:"logout-section",children:[u.jsxs("button",{className:"logout-btn",onClick:o,children:[Vt.logOut," Logout"]}),u.jsx("span",{className:"version",children:"FrameX v1.0.0"})]}),u.jsx("style",{children:`
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
      `})]})}let MR=0;const LR=Si((t,e)=>({activeModal:null,modalProps:{},toasts:[],openModal:(i,r={})=>{t({activeModal:i,modalProps:r})},closeModal:()=>{t({activeModal:null,modalProps:{}})},addToast:(i,r="info",o=3e3)=>{const c=++MR,d={id:c,message:i,type:r,duration:o};return t(h=>({toasts:[...h.toasts,d]})),o>0&&setTimeout(()=>{e().removeToast(c)},o),c},removeToast:i=>{t(r=>({toasts:r.toasts.filter(o=>o.id!==i)}))},clearToasts:()=>{t({toasts:[]})}})),_h=2200,Nb=10,zR=["image/jpeg","image/png","image/webp","image/gif"],UR=20*1024*1024,BR=[{value:"public",label:"Public",icon:"globe",desc:"Anyone can see this post"},{value:"followers",label:"Followers Only",icon:"users",desc:"Only followers can see this post"},{value:"private",label:"Private",icon:"lock",desc:"Only you can see this post"}];function PR(){const t=mn(),{profile:e}=At(),{createPost:i,uploadPostImage:r,deletePostImage:o}=mc(),{addPostOptimistic:c,removePostOptimistic:d}=$a(),{addToast:h}=LR(),[p,g]=k.useState(""),[y,v]=k.useState([]),[x,w]=k.useState("public"),[S,_]=k.useState(!1),[E,T]=k.useState({}),[O,R]=k.useState(!1),[L,K]=k.useState(!1),[W,F]=k.useState(0),[Y,ee]=k.useState(null),re=k.useRef(null),me=k.useRef(null),fe=k.useRef(0);k.useEffect(()=>{var ye;const J=()=>{if(window.visualViewport){const pe=Math.max(0,window.innerHeight-window.visualViewport.height);F(pe)}};return(ye=window.visualViewport)==null||ye.addEventListener("resize",J),()=>{var pe;return(pe=window.visualViewport)==null?void 0:pe.removeEventListener("resize",J)}},[]);const Oe=k.useCallback(()=>{S||(p||y.length>0?window.confirm("Discard this post?")&&(Ne(),t(-1)):t(-1))},[p,y,S,t]);k.useEffect(()=>{const J=()=>{(p||y.length>0)&&Ne()};return window.addEventListener("popstate",J),()=>window.removeEventListener("popstate",J)},[p,y]);const Ne=async()=>{for(const J of y)if(J.path)try{await o(J.path)}catch{}},je=J=>zR.includes(J.type)?J.size>UR?(h("File too large. Max 20MB.","error"),!1):!0:(h(`Unsupported file type: ${J.type}`,"error"),!1),C=async J=>{const ye=Nb-y.length;J.length>ye&&h(`You can only add ${ye} more image(s)`,"error");const pe=Array.from(J).slice(0,ye).filter(je);if(pe.length===0)return;const X=pe.map(te=>({id:`temp_${Date.now()}_${Math.random().toString(36).slice(2)}`,file:te,url:URL.createObjectURL(te),path:null,progress:0,status:"pending"}));v(te=>[...te,...X])},I=J=>{const ye=J.target,pe=ye.files;pe&&C(pe),ye.value=""},Z=J=>{v(ye=>{var X;const pe=ye.find(te=>te.id===J);return(X=pe==null?void 0:pe.url)!=null&&X.startsWith("blob:")&&URL.revokeObjectURL(pe.url),pe!=null&&pe.path&&o(pe.path).catch(()=>{}),ye.filter(te=>te.id!==J)})},H=J=>ee(J),ae=(J,ye)=>{J.preventDefault(),!(Y===null||Y===ye)&&(v(pe=>{const X=[...pe],[te]=X.splice(Y,1);return X.splice(ye,0,te),X}),ee(ye))},N=()=>ee(null),V=async()=>{var X;const J=y.filter(te=>te.status==="pending");if(J.length===0)return[];const ye=(X=At.getState().user)==null?void 0:X.id;if(!ye)throw new Error("Not authenticated");const pe=[];for(const te of J){v(_e=>_e.map(De=>De.id===te.id?{...De,status:"uploading",progress:0}:De));try{const _e=await r(te.file,ye,De=>{v(Me=>Me.map(jt=>jt.id===te.id?{...jt,progress:De}:jt))});v(De=>De.map(Me=>Me.id===te.id?{...Me,path:_e.path,url:_e.url,status:"done",progress:100}:Me)),pe.push({url:_e.url,path:_e.path})}catch(_e){throw v(De=>De.map(Me=>Me.id===te.id?{...Me,status:"error"}:Me)),new Error(`Failed to upload ${te.file.name}: ${_e.message}`)}}return pe},Q=async()=>{var J,ye,pe;if(!(O||S)){if(y.length===0&&!p.trim()){h("Add a photo or write something","error");return}R(!0),_(!0),fe.current=Date.now();try{const X=await V();_(!1);const te=`opt_${Date.now()}`,_e={id:te,user_id:(J=At.getState().user)==null?void 0:J.id,content:p.trim(),type:X.length>0?"image":"text",media:X,image_url:((ye=X[0])==null?void 0:ye.url)||null,audience:x,is_deleted:!1,created_at:new Date().toISOString(),profiles:e?{id:e.id,username:e.username,display_name:e.display_name,avatar_url:e.avatar_url,is_verified:e.is_verified||!1}:null};c(_e);const De=await i({content:p.trim(),type:X.length>0?"image":"text",media:X,image_url:((pe=X[0])==null?void 0:pe.url)||null,audience:x});navigator.vibrate&&navigator.vibrate(20),d(te),c({...De}),K(!0),setTimeout(()=>{t("/home",{replace:!0})},800)}catch(X){_(!1),R(!1),K(!1),h(X.message||"Failed to create post","error")}}},ie=(y.length>0||p.trim().length>0)&&!O&&!S,ce=_h-p.length,be=J=>J?J.slice(0,2).toUpperCase():"?";return u.jsxs(we.div,{className:"post-creation-page",initial:{opacity:0,y:30},animate:{opacity:1,y:0},exit:{opacity:0,y:30},transition:{type:"spring",stiffness:300,damping:30},style:{paddingBottom:W>0?`${W}px`:0},children:[u.jsxs("div",{className:"pc-header",children:[u.jsx("button",{className:"pc-back-btn",onClick:Oe,disabled:S,"aria-label":"Go back",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),u.jsx("polyline",{points:"12 19 5 12 12 5"})]})}),u.jsx("h1",{className:"pc-title",children:"New Post"}),u.jsx("button",{className:`pc-submit-btn ${ie?"":"disabled"} ${L?"success":""}`,onClick:Q,disabled:!ie,children:L?u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",className:"pc-check-icon",children:u.jsx("polyline",{points:"20 6 9 17 4 12"})}):O?u.jsx("div",{className:"pc-spinner"}):"Post"})]}),u.jsxs("div",{className:"pc-user-info",children:[u.jsx("div",{className:"pc-avatar",style:{background:(e==null?void 0:e.avatar_color)||"var(--accent)"},children:e!=null&&e.avatar_url?u.jsx("img",{src:e.avatar_url,alt:""}):u.jsx("span",{children:be((e==null?void 0:e.display_name)||(e==null?void 0:e.username))})}),u.jsxs("div",{className:"pc-user-details",children:[u.jsx("span",{className:"pc-display-name",children:(e==null?void 0:e.display_name)||"Unknown"}),u.jsxs("span",{className:"pc-username",children:["@",(e==null?void 0:e.username)||"unknown"]})]})]}),u.jsxs("div",{className:"pc-caption-area",children:[u.jsx("textarea",{ref:me,className:"pc-caption-input",placeholder:"Write a caption...",value:p,onChange:J=>{J.target.value.length<=_h&&g(J.target.value)},rows:4,maxLength:_h}),p.length>0&&u.jsx("span",{className:`pc-char-count ${ce<100?"pc-char-warn":""} ${ce<20?"pc-char-danger":""}`,children:ce})]}),u.jsx(pn,{children:y.length>0&&u.jsxs(we.div,{className:"pc-image-grid",initial:{opacity:0,height:0},animate:{opacity:1,height:"auto"},exit:{opacity:0,height:0},children:[y.map((J,ye)=>u.jsxs(we.div,{className:`pc-image-item ${J.status==="uploading"?"uploading":""} ${J.status==="error"?"error":""}`,layout:!0,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1,transition:{delay:ye*.05}},draggable:!0,onDragStart:()=>H(ye),onDragOver:pe=>ae(pe,ye),onDragEnd:N,children:[u.jsx("img",{src:J.url,alt:`Upload ${ye+1}`}),u.jsx("button",{className:"pc-img-remove",onClick:()=>Z(J.id),"aria-label":"Remove image",children:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),u.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}),J.status==="uploading"&&u.jsxs("div",{className:"pc-img-progress",children:[u.jsxs("svg",{className:"pc-progress-ring",viewBox:"0 0 36 36",children:[u.jsx("circle",{className:"pc-progress-bg",cx:"18",cy:"18",r:"16"}),u.jsx("circle",{className:"pc-progress-bar",cx:"18",cy:"18",r:"16",strokeDasharray:`${J.progress*1.005} 100.5`,strokeDashoffset:"0"})]}),u.jsxs("span",{className:"pc-progress-text",children:[Math.round(J.progress),"%"]})]}),J.status==="error"&&u.jsx("div",{className:"pc-img-error-overlay",children:u.jsx("span",{children:"Failed"})}),u.jsx("span",{className:"pc-img-order",children:ye+1})]},J.id)),y.length<Nb&&!O&&u.jsxs(we.button,{className:"pc-add-image-btn",onClick:()=>{var J;return(J=re.current)==null?void 0:J.click()},whileHover:{scale:1.05},whileTap:{scale:.95},children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add"})]})]})}),y.length===0&&u.jsxs(we.button,{className:"pc-add-photo-btn",onClick:()=>{var J;return(J=re.current)==null?void 0:J.click()},whileHover:{scale:1.02},whileTap:{scale:.98},disabled:O,children:[u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),u.jsx("circle",{cx:"8.5",cy:"8.5",r:"1.5"}),u.jsx("polyline",{points:"21 15 16 10 5 21"})]}),u.jsx("span",{children:"Add Photos"})]}),u.jsx("input",{ref:re,type:"file",accept:"image/jpeg,image/png,image/webp,image/gif",multiple:!0,onChange:I,style:{display:"none"}}),u.jsxs("div",{className:"pc-audience-section",children:[u.jsx("label",{className:"pc-section-label",children:"Audience"}),u.jsx("div",{className:"pc-audience-options",children:BR.map(J=>u.jsxs("button",{className:`pc-audience-btn ${x===J.value?"active":""}`,onClick:()=>!O&&w(J.value),disabled:O,children:[u.jsxs("span",{className:"pc-audience-icon",children:[J.icon==="globe"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("line",{x1:"2",y1:"12",x2:"22",y2:"12"}),u.jsx("path",{d:"M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"})]}),J.icon==="users"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),J.icon==="lock"&&u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),u.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})]}),u.jsx("span",{className:"pc-audience-label",children:J.label})]},J.value))})]}),u.jsx("style",{children:VR})]})}const VR=`
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
`;class HR extends k.Component{constructor(e){super(e),this.state={error:null}}static getDerivedStateFromError(e){return{error:e}}componentDidCatch(e,i){console.error("ErrorBoundary caught:",e,i)}render(){return this.state.error?u.jsx("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",padding:"2rem"},children:u.jsxs("div",{style:{maxWidth:480,padding:"2rem",background:"rgba(255,255,255,0.04)",borderRadius:16,border:"1px solid rgba(255,255,255,0.08)"},children:[u.jsx("h2",{style:{margin:"0 0 0.75rem",fontSize:"1.25rem"},children:"Something went wrong"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.5)",fontSize:"0.85rem",margin:0},children:this.state.error.message})]})}):this.props.children}}function Mn({children:t}){const{user:e,isLoading:i}=At(),r=Nt();return i?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"auth-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .auth-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):e?t:u.jsx($S,{to:"/login",state:{from:r},replace:!0})}const $R=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Alerts",icon:"bell"},{path:"/profile",label:"Profile",icon:"user"}],Rb={home:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:t?"currentColor":"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),chat:t=>u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),bell:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),user:t=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),plus:()=>u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),u.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})};function IR(){const t=mn(),e=Nt(),{unreadCount:i}=mi(),[r,o]=k.useState(!0),c=k.useRef(0);return k.useEffect(()=>{const d=()=>{const h=window.scrollY;h>c.current&&h>60?o(!1):o(!0),c.current=h};return window.addEventListener("scroll",d,{passive:!0}),()=>window.removeEventListener("scroll",d)},[]),u.jsx(pn,{children:r&&u.jsxs(we.nav,{className:"bottom-nav",initial:{y:100},animate:{y:0},exit:{y:100},transition:{type:"spring",stiffness:300,damping:30},children:[u.jsx("div",{className:"bottom-nav-inner",children:$R.map(d=>{const h=e.pathname===d.path;return u.jsxs("button",{className:`bottom-nav-item ${h?"active":""}`,onClick:()=>{e.pathname!==d.path&&(window.scrollTo({top:0,behavior:"smooth"}),t(d.path))},children:[u.jsxs("span",{className:"nav-icon-wrap",children:[Rb[d.icon](h),d.path==="/notifications"&&i>0&&u.jsx("span",{className:"bottom-nav-badge",children:i>99?"99+":i})]}),u.jsx("span",{className:"nav-label-text",children:d.label})]},d.path)})}),u.jsx("button",{className:"create-btn",onClick:()=>t("/create"),"aria-label":"Create post",children:Rb.plus()}),u.jsx("style",{children:qR})]})})}const qR=`
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
`,Ob={home:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M3 12l9-9 9 9"}),u.jsx("path",{d:"M5 10v9a1 1 0 001 1h3v-5h6v5h3a1 1 0 001-1v-9"})]}),explore:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"10"}),u.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),communities:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"9",cy:"7",r:"4"}),u.jsx("path",{d:"M23 21v-2a4 4 0 00-3-3.87"}),u.jsx("path",{d:"M16 3.13a4 4 0 010 7.75"})]}),chat:u.jsx("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:u.jsx("path",{d:"M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"})}),notification:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"}),u.jsx("path",{d:"M13.73 21a2 2 0 0 1-3.46 0"})]}),settings:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("circle",{cx:"12",cy:"12",r:"3"}),u.jsx("path",{d:"M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"})]}),analytics:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M18 20V10"}),u.jsx("path",{d:"M12 20V4"}),u.jsx("path",{d:"M6 20v-6"})]}),profile:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"}),u.jsx("circle",{cx:"12",cy:"7",r:"4"})]}),logout:u.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[u.jsx("path",{d:"M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"}),u.jsx("polyline",{points:"16 17 21 12 16 7"}),u.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]})},FR=[{path:"/home",label:"Home",icon:"home"},{path:"/explore",label:"Explore",icon:"explore"},{path:"/communities",label:"Communities",icon:"communities"},{path:"/chat",label:"Chats",icon:"chat"},{path:"/notifications",label:"Notifications",icon:"notification"},{path:"/profile",label:"Profile",icon:"profile"},{path:"/analytics",label:"Analytics",icon:"analytics"},{path:"/settings",label:"Settings",icon:"settings"}],GR={"/home":"Home","/explore":"Explore","/communities":"Communities","/chat":"Chats","/notifications":"Notifications","/profile":"Profile","/analytics":"Analytics","/settings":"Settings"},KR={initial:{opacity:0,y:12},animate:{opacity:1,y:0,transition:{duration:.3,ease:"easeOut"}},exit:{opacity:0,y:-12,transition:{duration:.2,ease:"easeIn"}}};function oa({children:t}){var v,x,w,S;const{user:e,profile:i,signOut:r}=At(),o=mn(),c=Nt(),d=GR[c.pathname]||"FrameX",{unreadCount:h}=mi(),p=c.pathname.split("/"),g=p[1]==="profile"&&p[2]&&p[2]!==(e==null?void 0:e.id),y=async()=>{await r(),o("/login")};return u.jsxs("div",{className:"app-layout",children:[!g&&u.jsxs("aside",{className:"desktop-sidebar",children:[u.jsxs("div",{className:"sidebar-brand",onClick:()=>o("/home"),children:[u.jsx("span",{className:"sidebar-logo-mark",children:"F"}),u.jsx("span",{className:"sidebar-logo-text",children:"FrameX"})]}),u.jsx("nav",{className:"sidebar-nav-main",children:FR.map(_=>u.jsxs("button",{className:`sidebar-nav-item ${c.pathname===_.path?"active":""}`,onClick:()=>o(_.path),children:[u.jsx("span",{className:"sidebar-nav-icon",children:Ob[_.icon]}),u.jsx("span",{className:"sidebar-nav-label",children:_.label}),_.path==="/notifications"&&h>0&&u.jsx("span",{className:"sidebar-notif-badge",children:h>99?"99+":h})]},_.path))}),u.jsx(lw,{variant:"sidebar"}),u.jsx("div",{className:"sidebar-divider"}),u.jsxs("div",{className:"sidebar-profile-section",onClick:()=>o("/profile"),children:[u.jsx("div",{className:"sidebar-profile-avatar",style:{background:(i==null?void 0:i.avatar_color)||"var(--accent)"},children:((v=i==null?void 0:i.username)==null?void 0:v[0])||((w=(x=e==null?void 0:e.email)==null?void 0:x[0])==null?void 0:w.toUpperCase())||"?"}),u.jsxs("div",{className:"sidebar-profile-info",children:[u.jsx("span",{className:"sidebar-profile-name",children:(i==null?void 0:i.username)||((S=e==null?void 0:e.email)==null?void 0:S.split("@")[0])||"User"}),u.jsxs("span",{className:"sidebar-profile-handle",children:["@",(i==null?void 0:i.username)||"user"]})]})]}),u.jsxs("button",{className:"sidebar-logout-btn",onClick:y,children:[u.jsx("span",{className:"sidebar-nav-icon",children:Ob.logout}),u.jsx("span",{className:"sidebar-nav-label",children:"Log Out"})]})]}),u.jsxs("div",{className:"app-main",children:[!g&&u.jsx("header",{className:"mobile-header",children:u.jsxs("div",{className:"mobile-header-left",onClick:()=>o("/home"),children:[u.jsx("span",{className:"mobile-header-logo",children:"F"}),u.jsx("span",{className:"mobile-header-title",children:d})]})}),u.jsx("main",{className:"app-content",children:u.jsx(pn,{mode:"wait",children:u.jsx(we.div,{variants:KR,initial:"initial",animate:"animate",exit:"exit",children:t},c.pathname)})})]}),!g&&u.jsx(IR,{}),u.jsx("style",{children:`
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
      `})]})}function YR(){const{isLoading:t}=At();return t?u.jsxs("div",{style:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",background:"#08080f",color:"#fff",fontFamily:"system-ui, sans-serif",flexDirection:"column",gap:"1rem"},children:[u.jsx("div",{className:"app-loading-spinner"}),u.jsx("p",{style:{color:"rgba(255,255,255,0.4)",fontSize:"0.9rem"},children:"Loading..."}),u.jsx("style",{children:`
          .app-loading-spinner {
            width: 32px; height: 32px;
            border: 2px solid rgba(255,255,255,0.06);
            border-top-color: #CCFF00;
            border-radius: 50%;
            animation: spin 0.7s linear infinite;
          }
          @keyframes spin { to { transform: rotate(360deg); } }
        `})]}):u.jsx(HR,{children:u.jsx(ER,{children:u.jsxs(qS,{children:[u.jsx(Pt,{path:"/",element:u.jsx(kj,{})}),u.jsx(Pt,{path:"/about",element:u.jsx(_j,{})}),u.jsx(Pt,{path:"/login",element:u.jsx(OT,{})}),u.jsx(Pt,{path:"/chat",element:u.jsx(Mn,{children:u.jsx(zT,{})})}),u.jsx(Pt,{path:"/home",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(XN,{})})})}),u.jsx(Pt,{path:"/profile",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(vb,{})})})}),u.jsx(Pt,{path:"/profile/:id",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(vb,{})})})}),u.jsx(Pt,{path:"/communities",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(nR,{})})})}),u.jsx(Pt,{path:"/explore",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(mR,{})})})}),u.jsx(Pt,{path:"/notifications",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(yR,{})})})}),u.jsx(Pt,{path:"/settings",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(DR,{})})})}),u.jsx(Pt,{path:"/analytics",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(jR,{})})})}),u.jsx(Pt,{path:"/create",element:u.jsx(Mn,{children:u.jsx(oa,{children:u.jsx(PR,{})})})})]})})})}At.getState().initialize();I5.createRoot(document.getElementById("root")).render(u.jsx(As.StrictMode,{children:u.jsx(pj,{children:u.jsx(YR,{})})}));
